import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ===== Global Variables =====
let sizes,
    scene,
    camera,
    renderer,
    controls,
    raycaster,
    mouse,
    isIntersecting,
    twinkleTime,
    materials,
    material,
    baseMesh,
    minMouseDownFlag,
    mouseDown,
    grabbing;

// ===== DOM Elements =====
const container = document.querySelector('.container');
const canvas = document.querySelector('.canvas');

// ===== Helper Functions (use function declarations for hoisting) =====
function toXYZ(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function lerpLatLon(a, b, t) {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}

function createAnimatedArcLine(startLatLon, endLatLon, radius = 20, color = 0xffa500, duration = 1000) {
  try {
    const start = toXYZ(startLatLon[0], startLatLon[1], radius);
    const end = toXYZ(endLatLon[0], endLatLon[1], radius);

    // Number of points along the arc
    const numPoints = 100;
    const arcHeight = radius * 0.35; // Adjust for higher/lower arcs

    // Spherical linear interpolation (slerp) for arc points
    const arcPoints = [];
    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;
      // Slerp using quaternion interpolation
      const startNorm = start.clone().normalize();
      const endNorm = end.clone().normalize();
      const axis = new THREE.Vector3().crossVectors(startNorm, endNorm).normalize();
      const angle = startNorm.angleTo(endNorm);
      const quat = new THREE.Quaternion().setFromAxisAngle(axis, angle * t);
      const point = startNorm.clone().applyQuaternion(quat);
      // Raise the arc using a sine function (max at midpoint)
      const height = Math.sin(Math.PI * t) * arcHeight;
      point.multiplyScalar(radius + height);
      arcPoints.push(point);
    }

    const curve = new THREE.CatmullRomCurve3(arcPoints);
    const geometry = new THREE.TubeBufferGeometry(curve, 128, 0.04, 8);

    // Create shader material with improved glow effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_color: { value: new THREE.Color(color) },
        u_texture: { value: arcTextures[Math.floor(Math.random() * arcTextures.length)] }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec3 u_color;
        uniform sampler2D u_texture;
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vec4 texColor = texture2D(u_texture, vUv);
          float alpha = smoothstep(0.0, 1.0, u_time) * texColor.a;
          float glow = pow(1.0 - abs(vUv.x - 0.5) * 2.0, 2.0) * 0.5;
          gl_FragColor = vec4(u_color, alpha * (0.8 + glow));
        }
      `,
      transparent: true,
      opacity: 0.0
    });

    const mesh = new THREE.Mesh(geometry, material);
    // Add circle markers with improved design
    const circleGeometry = new THREE.CircleGeometry(0.3, 32);
    const circleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_color: { value: new THREE.Color(color) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec3 u_color;
        varying vec2 vUv;
        void main() {
          float dist = length(vUv - vec2(0.5));
          float alpha = smoothstep(0.5, 0.0, dist) * u_time;
          float glow = pow(1.0 - dist * 2.0, 2.0) * 0.5;
          gl_FragColor = vec4(u_color, alpha * (0.8 + glow));
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });
    const startCircle = new THREE.Mesh(circleGeometry, circleMaterial.clone());
    startCircle.position.copy(start);
    startCircle.lookAt(new THREE.Vector3(0, 0, 0));
    startCircle.scale.set(1.2, 1.2, 1.2);
    const endCircle = new THREE.Mesh(circleGeometry, circleMaterial.clone());
    endCircle.position.copy(end);
    endCircle.lookAt(new THREE.Vector3(0, 0, 0));
    endCircle.scale.set(1.2, 1.2, 1.2);
    mesh.add(startCircle);
    mesh.add(endCircle);
    let startTime = performance.now();
    function animateArc() {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      geometry.setDrawRange(0, Math.floor(easedProgress * geometry.index.count));
      material.uniforms.u_time.value = easedProgress;
      const circleProgress = Math.min(easedProgress * 1.5, 1.0);
      startCircle.material.uniforms.u_time.value = circleProgress;
      endCircle.material.uniforms.u_time.value = Math.max(0, circleProgress - 0.5);
      if (progress < 1) {
        requestAnimationFrame(animateArc);
      }
    }
    animateArc();
    return mesh;
  } catch (error) {
    console.error('Error creating arc line:', error);
    return null;
  }
}

// ===== Land Mask Visibility Helper =====
let activeLatLon = {};

function visibilityForCoordinate(lon, lat) {
  if (!activeLatLon[lat] || !activeLatLon[lat].length) return false;
  const closest = activeLatLon[lat].reduce((prev, curr) => {
    return (Math.abs(curr - lon) < Math.abs(prev - lon) ? curr : prev);
  });
  return Math.abs(lon - closest) < 0.5;
}

function findNearestLand(lat, lon, maxRadius = 2) {
  if (visibilityForCoordinate(lon, lat)) return [lat, lon];
  for (let r = 0.1; r <= maxRadius; r += 0.1) {
    for (let d = 0; d < 360; d += 10) {
      const rad = d * Math.PI / 180;
      const testLat = lat + r * Math.cos(rad);
      const testLon = lon + r * Math.sin(rad);
      if (visibilityForCoordinate(testLon, testLat)) {
        return [testLat, testLon];
      }
    }
  }
  return [lat, lon];
}

function drawLine() {
  const fromIdx = lineCount % countryKeys.length;
  let toIdx = (fromIdx + 3) % countryKeys.length;
  const from = countryCoords[countryKeys[fromIdx]];
  const to = countryCoords[countryKeys[toIdx]];
  // Calculate distance between points
  const fromXYZ = toXYZ(from[0], from[1], 20);
  const toXYZVal = toXYZ(to[0], to[1], 20);
  const distance = fromXYZ.distanceTo(toXYZVal);
  // If points are too close or too far, find a better destination
  if (distance < 10 || distance > 40) {
    toIdx = (fromIdx + 5) % countryKeys.length;
  }
  const color = arcColors[lineCount % arcColors.length];
  // Adjust endpoints to nearest land
  const fromLand = findNearestLand(from[0], from[1]);
  const toLand = findNearestLand(to[0], to[1]);
  const mesh = createAnimatedArcLine(fromLand, toLand, 20, color, 1000);
  if (mesh) {
    linesContainer.add(mesh);
    currentLines.push(mesh);
    setTimeout(() => {
      const fadeOutDuration = 800;
      const startTime = performance.now();
      function fadeOut() {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / fadeOutDuration, 1);
        const fadeProgress = 1 - Math.pow(progress, 2);
        if (mesh.material && mesh.material.uniforms) {
          mesh.material.uniforms.u_time.value = fadeProgress;
        }
        mesh.children.forEach(child => {
          if (child.material && child.material.uniforms) {
            child.material.uniforms.u_time.value = fadeProgress;
          }
        });
        if (progress < 1) {
          requestAnimationFrame(fadeOut);
        } else {
          if (linesContainer) {
            linesContainer.remove(mesh);
          }
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material) mesh.material.dispose();
          currentLines = currentLines.filter(m => m !== mesh);
        }
      }
      fadeOut();
    }, 3000);
    lineCount++;
  }
}

function addLines() {
  if (linesContainer) {
    scene.remove(linesContainer);
  }
  linesContainer = new THREE.Group();
  scene.add(linesContainer);
  // Reset counters
  lineCount = 0;
  currentLines = [];
  // Start drawing lines with proper interval
  clearInterval(lineInterval);
  lineInterval = setInterval(() => {
    if (currentLines.length < 5) {
      drawLine();
    }
  }, 1200);
}

// ===== Shader Code =====
const vertex = `
  #ifdef GL_ES
  precision mediump float;
  #endif

  uniform float u_time;
  uniform float u_maxExtrusion;

  void main() {
    vec3 newPosition = position;
    if(u_maxExtrusion > 1.0) newPosition.xyz = newPosition.xyz * u_maxExtrusion + sin(u_time);
    else newPosition.xyz = newPosition.xyz * u_maxExtrusion;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
  }
`;

const fragment = `
  #ifdef GL_ES
  precision mediump float;
  #endif

  uniform float u_time;

  vec3 colorA = vec3(0.196, 0.631, 0.886);
  vec3 colorB = vec3(0.192, 0.384, 0.498);

  void main() {
    vec3  color = vec3(0.0);
    float pct   = abs(sin(u_time));
          color = mix(colorA, colorB, pct);
    gl_FragColor = vec4(color, 1.0);
  }
`;

// ===== Country Data =====
const countryCoords = {
  fl: [27.9506, -82.4572], ad: [42.5, 1.5], ae: [24, 54], af: [33, 65], ag: [17.05, -61.8], ai: [18.25, -63.1667], al: [41, 20], am: [40, 45], an: [12.25, -68.75], ao: [-12.5, 18.5], ap: [35, 105], aq: [-90, 0], ar: [-34, -64], as: [-14.3333, -170], at: [47.3333, 13.3333], au: [-27, 133], aw: [12.5, -69.9667], az: [40.5, 47.5], ba: [44, 18], bb: [13.1667, -59.5333], bd: [24, 90], be: [50.8333, 4], bf: [13, -2], bg: [43, 25], bh: [26, 50.55], bi: [-3.5, 30], bj: [9.5, 2.25], bm: [32.3333, -64.75], bn: [4.5, 114.6667], bo: [-17, -65], br: [-10, -55], bs: [24.25, -76], bt: [27.5, 90.5], bv: [-54.4333, 3.4], bw: [-22, 24], by: [53, 28], bz: [17.25, -88.75], ca: [54, -100], cc: [-12.5, 96.8333], cd: [0, 25], cf: [7, 21], cg: [-1, 15], ch: [47, 8], ci: [8, -5], ck: [-21.2333, -159.7667], cl: [-30, -71], cm: [6, 12], cn: [35, 105], co: [4, -72], cr: [10, -84], cu: [21.5, -80], cv: [16, -24], cx: [-10.5, 105.6667], cy: [35, 33], cz: [49.75, 15.5], de: [51, 9], dj: [11.5, 43], dk: [56, 10], dm: [15.4167, -61.3333], do: [19, -70.6667], dz: [28, 3], ec: [-2, -77.5], ee: [59, 26], eg: [27, 30], eh: [24.5, -13], er: [15, 39], es: [40, -4], et: [8, 38], eu: [47, 8], fi: [64, 26], fj: [-18, 175], fk: [-51.75, -59], fm: [6.9167, 158.25], fo: [62, -7], fr: [46, 2], ga: [-1, 11.75], gb: [54, -2], gd: [12.1167, -61.6667], ge: [42, 43.5], gf: [4, -53], gh: [8, -2], gi: [36.1833, -5.3667], gl: [72, -40], gm: [13.4667, -16.5667], gn: [11, -10], gp: [16.25, -61.5833], gq: [2, 10], gr: [39, 22], gs: [-54.5, -37], gt: [15.5, -90.25], gu: [13.4667, 144.7833], gw: [12, -15], gy: [5, -59], hk: [22.25, 114.1667], hm: [-53.1, 72.5167], hn: [15, -86.5], hr: [45.1667, 15.5], ht: [19, -72.4167], hu: [47, 20], id: [-5, 120], ie: [53, -8], il: [31.5, 34.75], in: [20, 77], io: [-6, 71.5], iq: [33, 44], ir: [32, 53], is: [65, -18], it: [42.8333, 12.8333], jm: [18.25, -77.5], jo: [31, 36], jp: [36, 138], ke: [1, 38], kg: [41, 75], kh: [13, 105], ki: [1.4167, 173], km: [-12.1667, 44.25], kn: [17.3333, -62.75], kp: [40, 127], kr: [37, 127.5], kw: [29.3375, 47.6581], ky: [19.5, -80.5], kz: [48, 68], la: [18, 105], lb: [33.8333, 35.8333], lc: [13.8833, -61.1333], li: [47.1667, 9.5333], lk: [7, 81], lr: [6.5, -9.5], ls: [-29.5, 28.5], lt: [56, 24], lu: [49.75, 6.1667], lv: [57, 25], ly: [25, 17], ma: [32, -5], mc: [43.7333, 7.4], md: [47, 29], me: [42, 19], mg: [-20, 47], mh: [9, 168], mk: [41.8333, 22], ml: [17, -4], mm: [22, 98], mn: [46, 105], mo: [22.1667, 113.55], mp: [15.2, 145.75], mq: [14.6667, -61], mr: [20, -12], ms: [16.75, -62.2], mt: [35.8333, 14.5833], mu: [-20.2833, 57.55], mv: [3.25, 73], mw: [-13.5, 34], mx: [23, -102], my: [2.5, 112.5], mz: [-18.25, 35], na: [-22, 17], nc: [-21.5, 165.5], ne: [16, 8], nf: [-29.0333, 167.95], ng: [10, 8], ni: [13, -85], nl: [52.5, 5.75], no: [62, 10], np: [28, 84], nr: [-0.5333, 166.9167], nu: [-19.0333, -169.8667], nz: [-41, 174], om: [21, 57], pa: [9, -80], pe: [-10, -76], pf: [-15, -140], pg: [-6, 147], ph: [13, 122], pk: [30, 70], pl: [52, 20], pm: [46.8333, -56.3333], pr: [18.25, -66.5], ps: [32, 35.25], pt: [39.5, -8], pw: [7.5, 134.5], py: [-23, -58], qa: [25.5, 51.25], re: [-21.1, 55.6], ro: [46, 25], rs: [44, 21], ru: [60, 100], rw: [-2, 30], sa: [25, 45], sb: [-8, 159], sc: [-4.5833, 55.6667], sd: [15, 30], se: [62, 15], sg: [1.3667, 103.8], sh: [-15.9333, -5.7], si: [46, 15], sj: [78, 20], sk: [48.6667, 19.5], sl: [8.5, -11.5], sm: [43.7667, 12.4167], sn: [14, -14], so: [10, 49], sr: [4, -56], st: [1, 7], sv: [13.8333, -88.9167], sy: [35, 38], sz: [-26.5, 31.5], tc: [21.75, -71.5833], td: [15, 19], tf: [-43, 67], tg: [8, 1.1667], th: [15, 100], tj: [39, 71], tk: [-9, -172], tm: [40, 60], tn: [34, 9], to: [-20, -175], tr: [39, 35], tt: [11, -61], tv: [-8, 178], tw: [23.5, 121], tz: [-6, 35], ua: [49, 32], ug: [1, 32], um: [19.2833, 166.6], us: [38, -97], uy: [-33, -56], uz: [41, 64], va: [41.9, 12.45], vc: [13.25, -61.2], ve: [8, -66], vg: [18.5, -64.5], vi: [18.3333, -64.8333], vn: [16, 106], vu: [-16, 167], wf: [-13.3, -176.2], ws: [-13.5833, -172.3333], ye: [15, 48], yt: [-12.8333, 45.1667], za: [-29, 24], zm: [-15, 30], zw: [-20, 30]
};
const countryKeys = Object.keys(countryCoords);
const arcColors = [0xffa500, 0x00ff99, 0x2196f3, 0xff4081, 0x8bc34a, 0xffeb3b, 0x9c27b0, 0x795548];

// ===== Route Animation Variables =====
let linesContainer = null;
let lineInterval = null;
let lineCount = 0;
let currentLines = [];

// ===== Texture Loader =====
const textureLoader = new THREE.TextureLoader();
const arcTextures = [
  'img/arc-texture-1.png',
  'img/arc-texture-2.png',
  'img/arc-texture-3.png',
  'img/arc-texture-4.png'
].map(path => textureLoader.load(path));

// ===== Scene Setup Functions =====
const setScene = () => {

  sizes = {
    width:  container.offsetWidth,
    height: container.offsetHeight
  };

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    30, 
    sizes.width / sizes.height, 
    1, 
    1000
  );
  camera.position.z = 100;
  
  renderer = new THREE.WebGLRenderer({
    canvas:     canvas,
    antialias:  false,
    alpha:      true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const pointLight = new THREE.PointLight(0x081b26, 17, 200);
  pointLight.position.set(-50, 0, 60);
  scene.add(pointLight);
  scene.add(new THREE.HemisphereLight(0xffffbb, 0x080820, 1.5));

  raycaster         = new THREE.Raycaster();
  mouse             = new THREE.Vector2();
  isIntersecting    = false;
  minMouseDownFlag  = false;
  mouseDown         = false;
  grabbing          = false;

  setControls();
  setBaseSphere();
  setShaderMaterial();
  setMap();
  resize();
  listenTo();
  render();

}

const setControls = () => {

  controls                 = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate      = true;
  controls.autoRotateSpeed = 1.2;
  controls.enableDamping   = true;
  controls.enableRotate    = true;
  controls.enablePan       = false;
  controls.enableZoom      = false;
  controls.minPolarAngle   = (Math.PI / 2) - 0.5;
  controls.maxPolarAngle   = (Math.PI / 2) + 0.5;

};

const setBaseSphere = () => {

  const baseSphere   = new THREE.SphereGeometry(19.5, 35, 35);
  const baseMaterial = new THREE.MeshStandardMaterial({
    color:        0x0b2636, 
    transparent:  true, 
    opacity:      0.9
  });
  baseMesh = new THREE.Mesh(baseSphere, baseMaterial);
  scene.add(baseMesh);

}

const setShaderMaterial = () => {

  twinkleTime  = 0.03;
  materials    = [];
  material     = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    uniforms: {
      u_time:         { value: 1.0 },
      u_maxExtrusion: { value: 1.0 }
    },
    vertexShader:   vertex,
    fragmentShader: fragment,
  });

}

const setMap = () => {

  const dotSphereRadius = 20;

  const readImageData = (imageData) => {

    for(
      let i = 0, lon = -180, lat = 90; 
      i < imageData.length; 
      i += 4, lon++
    ) {

      if(!activeLatLon[lat]) activeLatLon[lat] = [];

      const red   = imageData[i];
      const green = imageData[i + 1];
      const blue  = imageData[i + 2];

      if(red < 80 && green < 80 && blue < 80)
        activeLatLon[lat].push(lon);

      if(lon === 180) {
        lon = -180;
        lat--;
      }

    }

  }

  const calcPosFromLatLonRad = (lon, lat) => {
  
    var phi   = (90 - lat)  * (Math.PI / 180);
    var theta = (lon + 180) * (Math.PI / 180);

    const x = -(dotSphereRadius * Math.sin(phi) * Math.cos(theta));
    const z = (dotSphereRadius * Math.sin(phi) * Math.sin(theta));
    const y = (dotSphereRadius * Math.cos(phi));
  
    return new THREE.Vector3(x, y, z);

  }

  const createMaterial = (timeValue) => {

    const mat                 = material.clone();
    mat.uniforms.u_time.value = timeValue * Math.sin(Math.random());
    materials.push(mat);
    return mat;

  }

  const setDots = () => {

    const dotDensity  = 3.0;
    let   vector      = new THREE.CircleGeometry(2, 5);

    for (let lat = 90, i = 0; lat > -90; lat--, i++) {

      const radius = 
        Math.cos(Math.abs(lat) * (Math.PI / 180)) * dotSphereRadius;
      const circumference = radius * Math.PI * 2;
      const dotsForLat = circumference * dotDensity;

      for (let x = 0; x < dotsForLat; x++) {

        const long = -180 + x * 360 / dotsForLat;

        if (!visibilityForCoordinate(long, lat)) continue;

        vector = calcPosFromLatLonRad(long, lat);

        const dotGeometry = new THREE.CircleGeometry(0.1, 5);
        dotGeometry.lookAt(vector);
        dotGeometry.translate(vector.x, vector.y, vector.z);

        const m     = createMaterial(i);
        const mesh  = new THREE.Mesh(dotGeometry, m);

        scene.add(mesh);

      }

    }

  }
  
  const image   = new Image;
  image.onload  = () => {

    image.needsUpdate  = true;

    const imageCanvas  = document.createElement('canvas');
    imageCanvas.width  = image.width;
    imageCanvas.height = image.height;
      
    const context = imageCanvas.getContext('2d');
    context.drawImage(image, 0, 0);
      
    const imageData = context.getImageData(
      0, 
      0, 
      imageCanvas.width, 
      imageCanvas.height
    );
    readImageData(imageData.data);

    setDots();
    
  }

  image.src = 'img/world_alpha_mini.jpg';

}

const resize = () => {

  sizes = {
    width:  container.offsetWidth,
    height: container.offsetHeight
  };

  if(window.innerWidth > 700) camera.position.z = 100;
  else camera.position.z = 140;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);

}

const mousemove = (event) => {

  isIntersecting = false;

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  
  const intersects = raycaster.intersectObject(baseMesh);
  if(intersects[0]) {
    isIntersecting = true;
    if(!grabbing) document.body.style.cursor = 'pointer';
  }
  else {
    if(!grabbing) document.body.style.cursor = 'default';
  }

}

const mousedown = () => {

  if(!isIntersecting) return;
  console.log('mousedown');
  materials.forEach(el => {
    gsap.to(
      el.uniforms.u_maxExtrusion, 
      {
        value: 1.01
      }
    );
  });

  mouseDown         = true;
  minMouseDownFlag  = false;

  setTimeout(() => {
    minMouseDownFlag = true;
    if(!mouseDown) mouseup();
  }, 500);

  document.body.style.cursor  = 'grabbing';
  grabbing                    = true;

}

const mouseup = () => {

  mouseDown = false;
  if(!minMouseDownFlag) return;

  materials.forEach(el => {
    gsap.to(
      el.uniforms.u_maxExtrusion, 
      {
        value:    1.0, 
        duration: 0.15
      }
    );
  });

  grabbing = false;
  if(isIntersecting) document.body.style.cursor = 'pointer';
  else document.body.style.cursor = 'default';

}

const listenTo = () => {

  window.addEventListener('resize',     resize.bind(this));
  window.addEventListener('mousemove',  mousemove.bind(this));
  window.addEventListener('mousedown',  mousedown.bind(this));
  window.addEventListener('mouseup',    mouseup.bind(this));

}

const render = () => {

  materials.forEach(el => {
    el.uniforms.u_time.value += twinkleTime;
  });

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(render.bind(this))

}

// Initialize the scene and start animations
setScene();
setTimeout(() => {
  addLines();
}, 2000);