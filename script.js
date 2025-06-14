import {$a as ht, Aa as st, G as T, Ga as B, Ha as ot, La as at, M as p, Ma as nt, U, Va as rt, W as q, Wa as W, X as V, Y as b, Za as j, _ as X, aa as K, c as C, ca as $, da as y, fa as tt, ia as et, ya as it} from "./v1-chunk-2PON3HJD.js";
import {a as G} from "./v1-chunk-KWARAS4N.js";
var Zt = Math.PI / 180;
function ct(a, t, e) {
    return Math.max(Math.min(a, e), t)
}
function z(a, t, e, i) {
    let o = a / i - 1;
    return -e * (o * G(o, 3) - 1) + t
}
var F = {
    fl: ["27.9506", "-82.4572"],
    ad: ["42.5000", "1.5000"],
    ae: ["24.0000", "54.0000"],
    af: ["33.0000", "65.0000"],
    ag: ["17.0500", "-61.8000"],
    ai: ["18.2500", "-63.1667"],
    al: ["41.0000", "20.0000"],
    am: ["40.0000", "45.0000"],
    an: ["12.2500", "-68.7500"],
    ao: ["-12.5000", "18.5000"],
    ap: ["35.0000", "105.0000"],
    aq: ["-90.0000", "0.0000"],
    ar: ["-34.0000", "-64.0000"],
    as: ["-14.3333", "-170.0000"],
    at: ["47.3333", "13.3333"],
    au: ["-27.0000", "133.0000"],
    aw: ["12.5000", "-69.9667"],
    az: ["40.5000", "47.5000"],
    ba: ["44.0000", "18.0000"],
    bb: ["13.1667", "-59.5333"],
    bd: ["24.0000", "90.0000"],
    be: ["50.8333", "4.0000"],
    bf: ["13.0000", "-2.0000"],
    bg: ["43.0000", "25.0000"],
    bh: ["26.0000", "50.5500"],
    bi: ["-3.5000", "30.0000"],
    bj: ["9.5000", "2.2500"],
    bm: ["32.3333", "-64.7500"],
    bn: ["4.5000", "114.6667"],
    bo: ["-17.0000", "-65.0000"],
    br: ["-10.0000", "-55.0000"],
    bs: ["24.2500", "-76.0000"],
    bt: ["27.5000", "90.5000"],
    bv: ["-54.4333", "3.4000"],
    bw: ["-22.0000", "24.0000"],
    by: ["53.0000", "28.0000"],
    bz: ["17.2500", "-88.7500"],
    ca: ["54.0000", "-100.0000"],
    cc: ["-12.5000", "96.8333"],
    cd: ["0.0000", "25.0000"],
    cf: ["7.0000", "21.0000"],
    cg: ["-1.0000", "15.0000"],
    ch: ["47.0000", "8.0000"],
    ci: ["8.0000", "-5.0000"],
    ck: ["-21.2333", "-159.7667"],
    cl: ["-30.0000", "-71.0000"],
    cm: ["6.0000", "12.0000"],
    cn: ["35.0000", "105.0000"],
    co: ["4.0000", "-72.0000"],
    cr: ["10.0000", "-84.0000"],
    cu: ["21.5000", "-80.0000"],
    cv: ["16.0000", "-24.0000"],
    cx: ["-10.5000", "105.6667"],
    cy: ["35.0000", "33.0000"],
    cz: ["49.7500", "15.5000"],
    de: ["51.0000", "9.0000"],
    dj: ["11.5000", "43.0000"],
    dk: ["56.0000", "10.0000"],
    dm: ["15.4167", "-61.3333"],
    do: ["19.0000", "-70.6667"],
    dz: ["28.0000", "3.0000"],
    ec: ["-2.0000", "-77.5000"],
    ee: ["59.0000", "26.0000"],
    eg: ["27.0000", "30.0000"],
    eh: ["24.5000", "-13.0000"],
    er: ["15.0000", "39.0000"],
    es: ["40.0000", "-4.0000"],
    et: ["8.0000", "38.0000"],
    eu: ["47.0000", "8.0000"],
    fi: ["64.0000", "26.0000"],
    fj: ["-18.0000", "175.0000"],
    fk: ["-51.7500", "-59.0000"],
    fm: ["6.9167", "158.2500"],
    fo: ["62.0000", "-7.0000"],
    fr: ["46.0000", "2.0000"],
    ga: ["-1.0000", "11.7500"],
    gb: ["54.0000", "-2.0000"],
    gd: ["12.1167", "-61.6667"],
    ge: ["42.0000", "43.5000"],
    gf: ["4.0000", "-53.0000"],
    gh: ["8.0000", "-2.0000"],
    gi: ["36.1833", "-5.3667"],
    gl: ["72.0000", "-40.0000"],
    gm: ["13.4667", "-16.5667"],
    gn: ["11.0000", "-10.0000"],
    gp: ["16.2500", "-61.5833"],
    gq: ["2.0000", "10.0000"],
    gr: ["39.0000", "22.0000"],
    gs: ["-54.5000", "-37.0000"],
    gt: ["15.5000", "-90.2500"],
    gu: ["13.4667", "144.7833"],
    gw: ["12.0000", "-15.0000"],
    gy: ["5.0000", "-59.0000"],
    hk: ["22.2500", "114.1667"],
    hm: ["-53.1000", "72.5167"],
    hn: ["15.0000", "-86.5000"],
    hr: ["45.1667", "15.5000"],
    ht: ["19.0000", "-72.4167"],
    hu: ["47.0000", "20.0000"],
    id: ["-5.0000", "120.0000"],
    ie: ["53.0000", "-8.0000"],
    il: ["31.5000", "34.7500"],
    in: ["20.0000", "77.0000"],
    io: ["-6.0000", "71.5000"],
    iq: ["33.0000", "44.0000"],
    ir: ["32.0000", "53.0000"],
    is: ["65.0000", "-18.0000"],
    it: ["42.8333", "12.8333"],
    jm: ["18.2500", "-77.5000"],
    jo: ["31.0000", "36.0000"],
    jp: ["36.0000", "138.0000"],
    ke: ["1.0000", "38.0000"],
    kg: ["41.0000", "75.0000"],
    kh: ["13.0000", "105.0000"],
    ki: ["1.4167", "173.0000"],
    km: ["-12.1667", "44.2500"],
    kn: ["17.3333", "-62.7500"],
    kp: ["40.0000", "127.0000"],
    kr: ["37.0000", "127.5000"],
    kw: ["29.3375", "47.6581"],
    ky: ["19.5000", "-80.5000"],
    kz: ["48.0000", "68.0000"],
    la: ["18.0000", "105.0000"],
    lb: ["33.8333", "35.8333"],
    lc: ["13.8833", "-61.1333"],
    li: ["47.1667", "9.5333"],
    lk: ["7.0000", "81.0000"],
    lr: ["6.5000", "-9.5000"],
    ls: ["-29.5000", "28.5000"],
    lt: ["56.0000", "24.0000"],
    lu: ["49.7500", "6.1667"],
    lv: ["57.0000", "25.0000"],
    ly: ["25.0000", "17.0000"],
    ma: ["32.0000", "-5.0000"],
    mc: ["43.7333", "7.4000"],
    md: ["47.0000", "29.0000"],
    me: ["42.0000", "19.0000"],
    mg: ["-20.0000", "47.0000"],
    mh: ["9.0000", "168.0000"],
    mk: ["41.8333", "22.0000"],
    ml: ["17.0000", "-4.0000"],
    mm: ["22.0000", "98.0000"],
    mn: ["46.0000", "105.0000"],
    mo: ["22.1667", "113.5500"],
    mp: ["15.2000", "145.7500"],
    mq: ["14.6667", "-61.0000"],
    mr: ["20.0000", "-12.0000"],
    ms: ["16.7500", "-62.2000"],
    mt: ["35.8333", "14.5833"],
    mu: ["-20.2833", "57.5500"],
    mv: ["3.2500", "73.0000"],
    mw: ["-13.5000", "34.0000"],
    mx: ["23.0000", "-102.0000"],
    my: ["2.5000", "112.5000"],
    mz: ["-18.2500", "35.0000"],
    na: ["-22.0000", "17.0000"],
    nc: ["-21.5000", "165.5000"],
    ne: ["16.0000", "8.0000"],
    nf: ["-29.0333", "167.9500"],
    ng: ["10.0000", "8.0000"],
    ni: ["13.0000", "-85.0000"],
    nl: ["52.5000", "5.7500"],
    no: ["62.0000", "10.0000"],
    np: ["28.0000", "84.0000"],
    nr: ["-0.5333", "166.9167"],
    nu: ["-19.0333", "-169.8667"],
    nz: ["-41.0000", "174.0000"],
    om: ["21.0000", "57.0000"],
    pa: ["9.0000", "-80.0000"],
    pe: ["-10.0000", "-76.0000"],
    pf: ["-15.0000", "-140.0000"],
    pg: ["-6.0000", "147.0000"],
    ph: ["13.0000", "122.0000"],
    pk: ["30.0000", "70.0000"],
    pl: ["52.0000", "20.0000"],
    pm: ["46.8333", "-56.3333"],
    pr: ["18.2500", "-66.5000"],
    ps: ["32.0000", "35.2500"],
    pt: ["39.5000", "-8.0000"],
    pw: ["7.5000", "134.5000"],
    py: ["-23.0000", "-58.0000"],
    qa: ["25.5000", "51.2500"],
    re: ["-21.1000", "55.6000"],
    ro: ["46.0000", "25.0000"],
    rs: ["44.0000", "21.0000"],
    ru: ["60.0000", "100.0000"],
    rw: ["-2.0000", "30.0000"],
    sa: ["25.0000", "45.0000"],
    sb: ["-8.0000", "159.0000"],
    sc: ["-4.5833", "55.6667"],
    sd: ["15.0000", "30.0000"],
    se: ["62.0000", "15.0000"],
    sg: ["1.3667", "103.8000"],
    sh: ["-15.9333", "-5.7000"],
    si: ["46.0000", "15.0000"],
    sj: ["78.0000", "20.0000"],
    sk: ["48.6667", "19.5000"],
    sl: ["8.5000", "-11.5000"],
    sm: ["43.7667", "12.4167"],
    sn: ["14.0000", "-14.0000"],
    so: ["10.0000", "49.0000"],
    sr: ["4.0000", "-56.0000"],
    st: ["1.0000", "7.0000"],
    sv: ["13.8333", "-88.9167"],
    sy: ["35.0000", "38.0000"],
    sz: ["-26.5000", "31.5000"],
    tc: ["21.7500", "-71.5833"],
    td: ["15.0000", "19.0000"],
    tf: ["-43.0000", "67.0000"],
    tg: ["8.0000", "1.1667"],
    th: ["15.0000", "100.0000"],
    tj: ["39.0000", "71.0000"],
    tk: ["-9.0000", "-172.0000"],
    tm: ["40.0000", "60.0000"],
    tn: ["34.0000", "9.0000"],
    to: ["-20.0000", "-175.0000"],
    tr: ["39.0000", "35.0000"],
    tt: ["11.0000", "-61.0000"],
    tv: ["-8.0000", "178.0000"],
    tw: ["23.5000", "121.0000"],
    tz: ["-6.0000", "35.0000"],
    ua: ["49.0000", "32.0000"],
    ug: ["1.0000", "32.0000"],
    um: ["19.2833", "166.6000"],
    us: ["38.0000", "-97.0000"],
    uy: ["-33.0000", "-56.0000"],
    uz: ["41.0000", "64.0000"],
    va: ["41.9000", "12.4500"],
    vc: ["13.2500", "-61.2000"],
    ve: ["8.0000", "-66.0000"],
    vg: ["18.5000", "-64.5000"],
    vi: ["18.3333", "-64.8333"],
    vn: ["16.0000", "106.0000"],
    vu: ["-16.0000", "167.0000"],
    wf: ["-13.3000", "-176.2000"],
    ws: ["-13.5833", "-172.3333"],
    ye: ["15.0000", "48.0000"],
    yt: ["-12.8333", "45.1667"],
    za: ["-29.0000", "24.0000"],
    zm: ["-15.0000", "30.0000"],
    zw: ["-20.0000", "30.0000"]
};
var I = Math.PI
  , lt = I / 2
  , $t = I / 4
  , t0 = I * 2
  , S = 180 / I
  , E = I / 180;
var H = Math.atan2
  , D = Math.cos;
var w = Math.sin;
var Q = Math.sqrt;
function dt(a) {
    return a > 1 ? lt : a < -1 ? -lt : Math.asin(a)
}
function Z(a) {
    return (a = w(a / 2)) * a
}
function ut(a, t) {
    let e = a[0] * E
      , i = a[1] * E
      , o = t[0] * E
      , r = t[1] * E
      , n = D(i)
      , s = w(i)
      , h = D(r)
      , d = w(r)
      , g = n * D(e)
      , u = n * w(e)
      , f = h * D(o)
      , M = h * w(o)
      , m = 2 * dt(Q(Z(r - i) + n * h * Z(o - e)))
      , L = w(m)
      , x = m ? function(R) {
        let l = w(R *= m) / L
          , c = w(m - R) / L
          , Y = c * g + l * f
          , k = c * u + l * M
          , _t = c * s + l * d;
        return [H(k, Y) * S, H(_t, Q(Y * Y + k * k)) * S]
    }
    : function() {
        return [e * S, i * S]
    }
    ;
    return x.distance = m,
    x
}
var mt = Math.PI / 180;
function A(a, t, e) {
    let i = (90 - a) * mt
      , o = Number(t) * mt;
    return new p(-e * Math.sin(i) * Math.cos(o),e * Math.cos(i),e * Math.sin(i) * Math.sin(o))
}
var Rt = .2
  , Ct = 8
  , Tt = 44
  , It = 24
  , v = .35
  , O = 3e3
  , gt = O * .5
  , St = 160
  , Et = 500
  , _ = .01
  , pt = .01
  , Dt = 2500
  , N = class extends y {
    constructor(e, i, o, r, n, s, h) {
        super();
        this.drawAnimatedLine = () => {
            if (!this.active)
                return;
            let e = this.geometry.drawRange.count
              , i = performance.now() - this.startTime;
            this.material.uniforms.u_time.value = i;
            let o = z(i, 0, 1, Dt);
            if (e = Math.min(O, Math.ceil(o * O)),
            this.active && e < O) {
                let r = this.circle1.scale.x;
                if (r < v && this.circle1.scale.set(r + _, r + _, r + _),
                e > gt) {
                    let n = this.circle2.scale.x;
                    n < v && this.circle2.scale.set(n + _ * 1.5, n + _ * 1.5, n + _ * 1.5)
                }
                this.geometry.setDrawRange(0, e)
            }
            this.animationFrame = requestAnimationFrame(this.drawAnimatedLine)
        }
        ;
        this.drawStaticLine = () => {
            this.geometry.setDrawRange(0, O),
            this.circle1.scale.set(v, v, v),
            this.circle2.scale.set(v, v, v)
        }
        ;
        this.eraseLine = () => {
            let e = this.geometry.drawRange.count
              , i = this.geometry.drawRange.start;
            if (this.material.uniforms.u_time.value = performance.now() - this.startTime,
            i > e)
                return;
            let o = It * 2
              , r = this.circle1.scale.x
              , n = this.circle2.scale.x;
            if (r > .03) {
                let s = r - pt;
                this.circle1.scale.set(s, s, s)
            }
            if (i > gt && n > .03) {
                let s = n - pt * 1.5;
                this.circle2.scale.set(s, s, s)
            }
            this.geometry.setDrawRange(i + o, e),
            this.animationFrame = requestAnimationFrame(this.eraseLine)
        }
        ;
        this.colors = o,
        this.texture = r,
        this.isStatic = h,
        this.startLat = e[0],
        this.startLng = e[1];
        let d = i[0]
          , g = i[1]
          , u = A(this.startLat, this.startLng, s)
          , f = A(d, g, s * 1.002)
          , M = ct(u.distanceTo(f) * .5, St, Et)
          , m = ut([this.startLng, this.startLat], [g, d])
          , L = m(.25)
          , x = m(.75)
          , R = A(L[1], L[0], s + M)
          , l = A(x[1], x[0], s + M)
          , c = new it(u,R,l,f);
        this.geometry = new ot(c,Tt,Rt + s / 1200,Ct,!1),
        this.material = new X({
            uniforms: {
                u_time: {
                    type: "f",
                    value: 0
                },
                u_texture: {
                    type: "t",
                    value: null
                },
                speedEpsilon: {
                    type: "f",
                    value: 4e-4
                }
            },
            vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
            fragmentShader: `
        uniform float u_time;
        uniform sampler2D u_texture;
        varying vec2 vUv;
        uniform float speedEpsilon;

        void main() {
          float ramp = vUv.x * 0.5;
          float pct = fract(ramp - u_time * speedEpsilon);
          vec4 color = vec4(0.0, 0.0, 0.0, 1.0);
          color = texture2D(u_texture, vec2(pct, 0.6));
          gl_FragColor = vec4(color);
        }
      `
        }),
        this.active = !1,
        this.mesh = new b(this.geometry,this.material),
        this.add(this.mesh),
        this.material.uniforms.u_texture.value = this.texture,
        this.circleMaterial1 = new U({
            map: n,
            color: o[0],
            transparent: !0,
            opacity: 1,
            side: C
        }),
        this.circleMaterial2 = new U({
            map: n,
            color: o[1],
            transparent: !0,
            opacity: 1,
            side: C
        }),
        this.circleGeometry = new K(s * .1,s * .1,2),
        this.circle1 = new b(this.circleGeometry,this.circleMaterial1),
        this.circle2 = new b(this.circleGeometry,this.circleMaterial2),
        this.circle1.scale.set(.01, .01, .01),
        this.circle2.scale.set(.01, .01, .01),
        this.circle1.position.set(u.x, u.y, u.z),
        this.circle2.position.set(f.x, f.y, f.z),
        this.circle1.rotation.set(Math.PI, Math.PI, Math.PI),
        this.circle2.rotation.set(Math.PI, Math.PI, Math.PI),
        this.circle1.lookAt(new p(0,0,0)),
        this.circle2.lookAt(new p(0,0,0)),
        this.add(this.circle1),
        this.add(this.circle2),
        this.showLine()
    }
    showLine() {
        this.active = !0,
        this.geometry.setDrawRange(0, 1),
        this.isStatic ? this.drawStaticLine() : (this.startTime = performance.now(),
        this.drawAnimatedLine())
    }
    hideLine() {
        this.active = !1,
        this.eraseLine()
    }
    disposeLine() {
        this.mesh.geometry.dispose(),
        this.texture.dispose(),
        this.mesh.material.dispose(),
        this.circle1.geometry.dispose(),
        this.circle1.material.dispose(),
        this.circle2.geometry.dispose(),
        this.circle2.material.dispose(),
        this.children = null
    }
    pause() {
        cancelAnimationFrame(this.animationFrame)
    }
    play() {
        this.isStatic ? this.drawStaticLine() : this.active ? this.animationFrame = requestAnimationFrame(this.drawAnimatedLine) : this.animationFrame = requestAnimationFrame(this.eraseLine)
    }
}
;
var At = 1.8
  , Ot = "https://images.ctfassets.net/fzn2n1nzq965/11064gUb2CgTJXKVwAt5J9/297a98a65d04d4fbb979072ce60466ab/map_fill-a78643e8.png";
function Gt(a) {
    let t = a.width
      , e = a.height
      , i = document.createElement("canvas");
    i.width = t,
    i.height = e;
    let o = i.getContext("2d");
    return o.drawImage(a, 0, 0),
    o.getImageData(0, 0, t, e)
}
function Xt(a, t) {
    let e = new p;
    e.subVectors(t, a).normalize();
    let i = 1 - (.5 + Math.atan2(e.z, e.x) / (2 * Math.PI))
      , o = .5 + Math.asin(e.y) / Math.PI;
    return new T(i,o)
}
function zt(a, t) {
    let e = t.width
      , i = t.height
      , o = Math.floor(a.x * e)
      , r = Math.floor(a.y * i)
      , n = o * 4 + r * (4 * e);
    return t.data.slice(n, n + 4)
}
var P = class extends y {
    constructor(t, e, i, o) {
        super(),
        this.callback = e,
        this.isStatic = i,
        this.rotation.x = -Math.PI,
        this.rotation.z = -Math.PI,
        this.radius = t,
        this.isDragging = !1,
        this.dragTime = 0,
        this.isDotsOnly = o,
        new rt().load(Ot, r => {
            let n = Gt(r);
            this.mapLoaded(n)
        }
        )
    }
    mapLoaded(t) {
        let e = this.radius / 450
          , o = 1e4 + Math.floor(7e4 * (this.radius / 600))
          , r = this.radius
          , n = new st(At * e,5)
          , s = new V
          , h = []
          , d = []
          , g = new p;
        for (let M = o; M >= 0; M -= 1) {
            let m = Math.acos(-1 + 2 * M / o)
              , L = Math.sqrt(o * Math.PI) * m;
            g.setFromSphericalCoords(r, m, L),
            s.copy(n),
            s.lookAt(g),
            s.translate(g.x, g.y, g.z),
            s.computeBoundingSphere();
            let x = Xt(s.boundingSphere.center, this.position);
            if (zt(x, t)[3] > 0 || this.isDotsOnly) {
                let l = Math.random();
                for (let c = 0; c < 5; c += 1)
                    h.push(s.attributes.position.array[0], s.attributes.position.array[1], s.attributes.position.array[2], s.attributes.position.array[3 + c * 3], s.attributes.position.array[4 + c * 3], s.attributes.position.array[5 + c * 3], s.attributes.position.array[6 + c * 3], s.attributes.position.array[7 + c * 3], s.attributes.position.array[8 + c * 3]),
                    d.push(l, l, l);
                h.push(s.attributes.position.array[0], s.attributes.position.array[1], s.attributes.position.array[2], s.attributes.position.array[3], s.attributes.position.array[4], s.attributes.position.array[5], s.attributes.position.array[18], s.attributes.position.array[19], s.attributes.position.array[20]),
                d.push(l, l, l)
            }
        }
        let u = new V;
        u.setAttribute("position", new q(h,3)),
        u.setAttribute("rndId", new q(d,1)),
        this.material = new X({
            transparent: !0,
            uniforms: {
                u_time: {
                    type: "f",
                    value: 0
                },
                u_drag_time: {
                    type: "f",
                    value: 0
                },
                u_resolution: {
                    type: "v2",
                    value: new T
                }
            },
            vertexShader: `
        uniform float u_time;
        uniform float u_drag_time;
        uniform vec2 u_resolution;
        attribute float rndId;
        varying float vRndId;

        varying float pct;

        void main() {
          vRndId = rndId;
          vec2 st = position.xy/u_resolution;

          pct = min(1.0, u_time / (1000. / max(0.2, 0.2 * sin(fract(rndId)))));
          float vNormal = rndId + ((1.0 - rndId) * pct);
          vNormal = rndId + ((1.0 - rndId));
          vNormal = smoothstep(0., 1.0, vNormal);
          if (u_drag_time > 0.) {
            vNormal -= ((sin(u_time / 400.0 * vRndId) + 1.0) * 0.04) * min(1., u_drag_time / 1200.0);
          }
          vec4 modelViewPosition = modelViewMatrix * vec4(position, vNormal);
          gl_Position = projectionMatrix * modelViewPosition;
        }
    `,
            fragmentShader: `
        uniform bool u_dragging;
        uniform float u_time;
        uniform float u_drag_time;
        varying float vRndId;
        varying float pct;

        void main() {
          float v = sin(u_time / 200.0 * vRndId);
          float alpha = pct * 0.7 + v * 0.2;
          float r = 0.19;
          float g = 0.42;
          float b = 0.65;
          float dragDur = 1200.0;
          vec3 color = vec3(r, g, b);
          float rInc = min(1.0, u_drag_time / dragDur) * (sin(u_drag_time / (dragDur * 0.5) + 1.0) * 0.1);
          float gInc = min(1.0, u_drag_time / dragDur) * (sin(u_drag_time / (dragDur * 0.75) - 1.0) * 0.1);
          float bInc = min(1.0, u_drag_time / dragDur) * (sin(u_drag_time / dragDur) * 0.1);
          if (u_dragging) {
            color.r = r + rInc;
            color.g = g + gInc;
            color.b = b + bInc;
          }

          gl_FragColor = vec4(color, alpha);
        }
    `
        }),
        this.material.side = C;
        let f = new b(u,this.material);
        this.add(f),
        this.material.uniforms.u_resolution.value.x = window.innerWidth,
        this.material.uniforms.u_resolution.value.y = window.innerHeight,
        this.startTime = performance.now(),
        this.dragStartTime = 0,
        this.callback()
    }
    startDragging() {
        !this.material || this.isStatic || (this.isDragging = !0,
        this.dragStartTime = performance.now(),
        this.material.uniforms.u_time.value = performance.now() - this.dragStartTime)
    }
    stopDragging() {
        this.isDragging = !1
    }
    updateDragTimer() {
        this.isDragging ? this.dragTime = performance.now() - this.dragStartTime : this.dragTime > .1 && (this.dragTime = Math.max(0, this.dragTime * .9))
    }
    animate() {
        if (this.updateDragTimer(),
        !this.material)
            return;
        this.material.uniforms.u_drag_time.value = this.dragTime;
        let t = this.isStatic ? 3e3 : performance.now() - this.startTime;
        this.material.uniforms.u_time.value = t
    }
}
;
var J = Math.PI * 2
  , Ft = Math.PI * .5
  , Nt = Math.PI * .1111
  , Pt = Math.PI
  , Yt = Math.PI * .1
  , ft = 350
  , kt = 30
  , Ut = .94
  , qt = .005
  , bt = .02
  , Vt = .001
  , wt = Math.PI * -.5
  , Mt = Math.PI * .5
  , yt = .94
  , vt = -.003
  , Bt = 512
  , Wt = 5
  , jt = 1e3
  , Ht = 4e3
  , Lt = ["https://images.ctfassets.net/fzn2n1nzq965/21KQEBsC7QG4IYZV5RuhDz/d3180249af4082f42a22cb5f3ccc8e09/arc-texture-1.png", "https://images.ctfassets.net/fzn2n1nzq965/22Apsqcv7VIDzlCuSOEzPQ/2194c40aac8bced46d48582d5d712bf6/arc-texture-2.png", "https://images.ctfassets.net/fzn2n1nzq965/79YUdAMNjtlQuuFLN0RBLG/f779fbfcc31d6360893844a29ec5fb4f/arc-texture-3.png", "https://images.ctfassets.net/fzn2n1nzq965/7ez6kk9Dk9uuhgdRLFyhZX/220a177ca8529de208f8ae3cc3b10609/arc-texture-4.png"]
  , Qt = "https://images.ctfassets.net/fzn2n1nzq965/2wn0qc94lx6dbfTVt1vpuO/cf3e66080a3cddeb7275a8fefbca5134/disc_texture.png"
  , xt = class {
    constructor(t) {
        this.eastCountryList = ["my", "sg", "au", "nz", "hk", "jp", "in"];
        this.westCountryList = ["ca", "mx", "us", "br"];
        this.middleCountryList = ["be", "gb", "at", "dk", "ee", "fi", "fr", "gr", "de", "ie", "it", "lv", "lt", "lu", "nl", "no", "pl", "pt", "es", "sk", "si", "se", "ch", "cy", "bg", "ro", "cz"];
        this.liveCountryList = [...this.eastCountryList, ...this.westCountryList, ...this.middleCountryList];
        this.countryList = Object.keys(F);
        this.origin = new p(0,0,0);
        this.dom = {};
        this.mouse = new T;
        this.isDragging = !1;
        this.isStatic = !1;
        this.isDiscTextureLoaded = !1;
        this.arcTexturesLoaded = 0;
        this.globeOff = !1;
        this.scrollTop = 0;
        this.globeOpacity = 0;
        this.lineCount = 0;
        this.currentLines = [];
        this.arcColors = [[16335176, 16763735], [11232234, 9494783], [16335176, 11232234], [16763735, 9494783]];
        this.scene = new et;
        this.globeRadius = ft;
        this.globeSegments = kt;
        this.isLoaded = !1;
        this.loaded = [];
        this.loading = [];
        this.isScrolling = !1;
        this.isRevealed = !1;
        this.frame = 0;
        this.oldRotationY = 0;
        this.oldRotationX = 0;
        this.newRotationY = 0;
        this.newRotationX = 0;
        this.globeRotationIncrement = bt;
        this.targetScale = 1;
        this.scale = 1;
        this.oldMouseX = 0;
        this.oldMouseY = 0;
        this.moveX = 0;
        this.moveY = 0;
        this.tension = 1;
        this.initialized = !1;
        this.handleDragStart = () => {
            this.globeDots.startDragging(),
            this.isDragging = !0,
            this.oldRotationX = this.globeContainer.rotation.x,
            this.oldRotationY = this.globeContainer.rotation.y,
            this.targetScale = this.isStatic ? 1 : .98,
            document.documentElement.classList.add("is-globe-dragging")
        }
        ;
        this.handleTouchStart = t => {
            let e = t.touches[0] || t.changedTouches[0];
            this.oldMouseX = e.pageX,
            this.oldMouseY = e.pageY,
            this.mouse.x = e.pageX,
            this.mouse.y = e.pageY,
            this.touchStartX = e.pageX,
            this.touchStartY = e.pageY,
            this.handleDragStart()
        }
        ;
        this.handleMouseMove = t => {
            this.mouse.x = t.clientX,
            this.mouse.y = t.clientY,
            this.handleDragging()
        }
        ;
        this.handleTouchMove = t => {
            let e = t.touches[0] || t.changedTouches[0];
            this.touchDistanceX = Math.abs(this.touchStartX - e.pageX),
            this.touchDistanceY = Math.abs(this.touchStartY - e.pageY),
            !(this.touchDistanceY > this.touchDistanceX) && (this.mouse.x = e.pageX,
            this.mouse.y = e.pageY,
            this.handleDragging())
        }
        ;
        this.handleMouseUp = () => {
            setTimeout( () => {
                document.documentElement.classList.remove("is-globe-dragging")
            }
            , 20),
            this.isDragging = !1,
            (this.moveX !== 0 || Math.abs(this.moveY) > 0) && this.throwGlobe(this.moveX, this.moveY),
            this.oldMouseX = 0,
            this.oldMouseY = 0,
            this.moveX = 0,
            this.moveY = 0,
            this.targetScale = 1,
            this.globeDots.stopDragging()
        }
        ;
        this.handleMouseDown = t => {
            document.documentElement.classList.add("is-globe-dragging"),
            this.oldMouseX = t.clientX,
            this.oldMouseY = t.clientY,
            this.handleDragStart()
        }
        ;
        this.handleDragging = () => {
            !this.isDragging || (this.tension = 1 + Math.abs(this.oldRotationX),
            this.tension = G(this.tension, this.tension),
            this.moveX = (this.oldMouseX - this.mouse.x) * vt,
            this.moveY = (this.oldMouseY - this.mouse.y) * vt / this.tension,
            this.newRotationY = this.resetRevolutions(this.oldRotationY + this.moveX),
            this.newRotationX = Math.max(wt, Math.min(Mt, this.oldRotationX + this.moveY)),
            this.globeContainer.rotation.y = this.newRotationY,
            this.globeContainer.rotation.x = this.newRotationX,
            this.oldRotationY = this.newRotationY,
            this.oldRotationX = this.newRotationX,
            this.oldMouseX = this.mouse.x,
            this.oldMouseY = this.mouse.y)
        }
        ;
        this.setWindowSize = () => {
            this.windowW = this.el.clientWidth,
            this.windowH = this.el.clientHeight,
            this.aspectRatio = 1,
            this.renderer.setSize(this.windowW, this.windowH),
            this.oldInnerWidth = this.windowW
        }
        ;
        this.handleResize = () => {
            let {clientWidth: t} = document.documentElement;
            (this.oldInnerWidth !== t || t > Bt) && (this.setWindowSize(),
            this.addCamera())
        }
        ;
        this.el = t,
        this.load()
    }
    load() {
        return this.loading.push("scene"),
        this.dom.container = this.el,
        this.isDotsOnly = this.el.dataset.globeType ? this.el.dataset.globeType === "dots" : !1,
        this.isLayers = this.el.dataset.globeType ? this.el.dataset.globeType === "layers" : !1,
        this.globeRadius = Math.min(this.el.clientWidth / 2 - 30, ft),
        this.addRenderer(),
        this.addLighting(),
        this.addGlobe(),
        this.addListeners(),
        this.setWindowSize(),
        this.addCamera(),
        this.objectLoaded("scene"),
        this.play(),
        !0
    }
    play() {
        this.initialized ? (this.currentLines.forEach(t => t.play()),
        this.drawLines()) : this.addLines(),
        this.initialized && this.isStatic || this.render(this.frame),
        this.initialized = !0
    }
    pause() {
        this.currentLines.forEach(t => t.pause()),
        cancelAnimationFrame(this.renderAnimationFrame),
        clearInterval(this.lineInterval)
    }
    disconnect() {
        clearInterval(this.lineInterval),
        cancelAnimationFrame(this.renderAnimationFrame),
        cancelAnimationFrame(this.throwAnimationFrame),
        window.removeEventListener("resize", this.handleResize),
        !this.isStatic && (window.removeEventListener("mouseup", this.handleMouseUp),
        window.removeEventListener("mousemove", this.handleMouseMove),
        this.el.removeEventListener("touchstart", this.handleTouchStart),
        window.removeEventListener("touchmove", this.handleTouchMove),
        window.removeEventListener("touchend", this.handleMouseUp),
        this.el.removeEventListener("mousedown", this.handleMouseDown))
    }
    setCountryList(t) {
        this.countryList = t
    }
    addCamera() {
        let t = this.windowH * .5
          , e = -(this.aspectRatio * this.windowH) * .5
          , i = this.globeRadius * 4;
        this.camera || (this.camera = new $(0,0,0,0,0,0)),
        this.camera.left = e,
        this.camera.right = -e,
        this.camera.top = t,
        this.camera.bottom = -t,
        this.camera.near = -i,
        this.camera.far = i,
        this.camera.updateProjectionMatrix()
    }
    addRenderer() {
        this.renderer = new tt({
            antialias: !1,
            alpha: !0
        }),
        this.renderer.setPixelRatio(window.devicePixelRatio),
        this.renderer.setClearColor(14540253, 0),
        this.renderer.sortObjects = !1,
        this.dom.container.appendChild(this.renderer.domElement)
    }
    addLighting() {
        let t = new ht(10086140,1);
        this.scene.add(t);
        let e = new j(12775677,2,0,2);
        e.position.set(-1e3, -1100, -3300),
        this.scene.add(e);
        let i = new j(10593711,.8,0,20);
        i.position.set(-3e3, 3e3, 3300),
        this.scene.add(i)
    }
    addGlobe() {
        this.globeContainer = new y,
        this.scene.add(this.globeContainer),
        this.addGlobeMap(),
        this.addGlobeDots(),
        this.addGlobeFill(),
        this.globeContainer.position.z = -this.globeRadius * 2,
        this.globeContainer.rotation.x = this.isDotsOnly ? Ft : Nt,
        this.globeContainer.rotation.y = this.isStatic ? Yt : Pt
    }
    addGlobeDots() {
        let t = this.isLayers ? this.globeRadius - this.globeRadius * .25 : this.globeRadius;
        this.loading.push("globeDots"),
        this.globeDots = new P(t, () => {
            this.objectLoaded("globeDots")
        }
        ,this.isStatic,this.isDotsOnly),
        this.globeMap.add(this.globeDots)
    }
    addGlobeFill() {
        this.globeFillMaterial = new nt({
            transparent: !0,
            opacity: 1,
            color: 1056824
        });
        let t = this.isLayers ? this.globeRadius - this.globeRadius * .5 : this.globeRadius - .1;
        this.globeFillSphere = new B(t,this.globeSegments,this.globeSegments),
        this.globeFill = new b(this.globeFillSphere,this.globeFillMaterial),
        this.globeMap.add(this.globeFill)
    }
    addGlobeMap() {
        this.globeMap = new y,
        this.globeContainer.add(this.globeMap)
    }
    throwGlobe(t, e) {
        let i = t * yt
          , o = e * yt
          , r = this.globeContainer.rotation.y + i
          , n = Math.max(wt, Math.min(Mt, this.globeContainer.rotation.x + o));
        this.globeContainer.rotation.y = this.resetRevolutions(r),
        this.globeContainer.rotation.x = n,
        (Math.abs(i) > .001 || Math.abs(o) > .001) && this.isDragging === !1 && (this.throwAnimationFrame = requestAnimationFrame( () => {
            this.throwGlobe(i, o)
        }
        ))
    }
    addLines() {
        this.isDotsOnly || (this.circleTexture = new W().load(Qt, () => {
            this.isDiscTextureLoaded = !0
        }
        ),
        this.arcTextures = Lt.map(t => new W().load(t, () => {
            this.arcTexturesLoaded += 1
        }
        )),
        this.linesContainer = new y,
        this.globeContainer.add(this.linesContainer),
        this.drawLines(),
        this.isLayers && (this.globeOuterLayerMaterial = new at({
            transparent: !0,
            opacity: .05
        }),
        this.globeOuterLayerSphere = new B(this.globeRadius,this.globeSegments,this.globeSegments),
        this.globeOuterLayer = new b(this.globeOuterLayerSphere,this.globeOuterLayerMaterial),
        this.globeContainer.add(this.globeOuterLayer)))
    }
    drawLines() {
        if (!this.isStatic && !this.isDotsOnly) {
            clearInterval(this.lineInterval),
            this.lineInterval = window.setInterval( () => {
                this.drawLine()
            }
            , jt);
            return
        }
        if (this.lineCount === 0)
            for (let t = 0; t < Wt; t += 1)
                this.drawLine()
    }
    drawLine() {
        this.lineCount += 1;
        let t = this.resetRevolutions(this.globeContainer.rotation.y)
          , e = this.countryList[this.lineCount % this.countryList.length]
          , i = this.liveCountryList[this.lineCount % this.liveCountryList.length];
        if (t < 5.7 && t > 4.4 || t > -2 && t < -.2 ? i = this.eastCountryList[this.lineCount % this.eastCountryList.length] : t < 4.2 && t > 2.2 || t > -4 && t < -1.7 ? ((t < -1.7 && t > -3 || t > 3 && t < 4.2) && (e = this.eastCountryList[this.lineCount % this.eastCountryList.length]),
        i = this.westCountryList[this.lineCount % this.westCountryList.length]) : (t < 2.2 && t > .3 || t > -6.28 && t < -4) && (i = this.middleCountryList[this.lineCount % this.middleCountryList.length]),
        e === i) {
            this.drawLine();
            return
        }
        let o = F[e]
          , r = F[i]
          , n = this.lineCount % this.arcColors.length
          , s = this.arcColors[n]
          , h = new N(o,r,s,this.arcTextures[n],this.circleTexture,this.globeRadius * 1.001 + Math.random() * .01,this.isStatic);
        this.linesContainer.add(h),
        this.currentLines.push(h),
        !this.isStatic && setTimeout( () => {
            this.hideLine(h);
            let d = this.currentLines.indexOf(h);
            d > -1 && this.currentLines.splice(d, 1)
        }
        , Ht)
    }
    hideLine(t) {
        t.hideLine(),
        setTimeout( () => {
            t.disposeLine(),
            this.linesContainer.remove(t)
        }
        , 1500)
    }
    objectLoaded(t="x") {
        this.loaded.push(t),
        this.loaded.length === this.loading.length && (this.isLoaded = !0)
    }
    resetRevolutions(t) {
        if (Math.abs(t / J) === 0)
            return t;
        let e = Math.floor(Math.abs(t / J)) * Math.sign(t);
        return t - e * J
    }
    addListeners() {
        window.addEventListener("resize", this.handleResize),
        !this.isStatic && (window.addEventListener("mouseup", this.handleMouseUp),
        window.addEventListener("mousemove", this.handleMouseMove),
        this.el.addEventListener("touchstart", this.handleTouchStart, {
            passive: !0
        }),
        window.addEventListener("touchmove", this.handleTouchMove),
        window.addEventListener("touchend", this.handleMouseUp),
        this.el.addEventListener("mousedown", this.handleMouseDown))
    }
    revealAnimation() {
        let t = this.isStatic ? 1 : z(this.globeOpacity, 0, 1, 1);
        this.globeOpacity += qt,
        this.globeFillMaterial.opacity = t * Ut,
        this.globeRotationIncrement = (1 - t) * bt + Vt * t,
        t > .999 && (this.isRevealed = !0)
    }
    autoRotateGlobe() {
        this.isDragging || this.isScrolling || this.isStatic || (this.globeContainer.rotation.y -= this.globeRotationIncrement)
    }
    render(t=0) {
        this.frame = t,
        this.autoRotateGlobe(),
        Math.abs(this.scale - this.targetScale) > .001 && (this.scale -= .1 * (this.scale - this.targetScale),
        this.globeFill.scale.set(this.scale, this.scale, this.scale)),
        !this.globeOff && this.isLoaded && (this.globeDots.animate(),
        this.isRevealed || this.revealAnimation(),
        this.renderer.render(this.scene, this.camera)),
        this.renderAnimationFrame = requestAnimationFrame( () => {
            if (this.isRevealed && this.isStatic && this.arcTexturesLoaded === Lt.length && this.isDiscTextureLoaded) {
                this.renderer.render(this.scene, this.camera);
                return
            }
            this.render(t + 1)
        }
        )
    }
}
;
export {xt as Globe};
