(function () {

  function initHex2() {
    var t = new Image;
    t.src = h.data("geometry"),
      t.onload = function () {
        var t = document.createElement("canvas");
        t.width = this.width,
          t.height = this.height;
        var n = t.getContext("2d");
        n.drawImage(this, 0, 0);
        var o = t.width
          , i = t.height
          , r = n.getImageData(0, 0, o, i).data
          , s = 0
          , c = 0;
        C.hex = [],
          p.hex = [],
          u.hex = new THREE.BufferGeometry;
        for (var v = 0; v < o; v++)
          for (var g = 0; g < i; g++) {
            var _ = r[s]
              , y = r[s + 1]
              , P = r[s + 2]
              , S = (r[s + 3],
            _ + y + P);
            if (S > 1) {
              var k = new THREE.Vector3;
              k.x = 5 * (v - o / 2),
                k.y = -5 * (g - i / 2),
                k.z = -480 * Math.random();
              var T = k.clone()
                , M = k.clone();
              C.push(k.x, k.y, k.z),
                C.push(T.x, T.y, T.z),
                C.push(M.x, M.y, M.z),
                c += 1,
                p.hex[c] = {
                  vertex: k.clone()
                }
            }
            s = 4 * v + g * (4 * o)
          }
        var x = new Float32Array(C);
        u.hex.addAttribute("position", new THREE.BufferAttribute(x, 3)),
          d.hex = [];
        for (var A = 0; A < m.length; A++) {
          var D = m[A]
            , N = new THREE.PointsMaterial({
            // color: '14999248', //6737151,
            color: '#E53326',
            opacity: .85,
            // size: 1.5,
            size: 2,
            // size: 20,
            map: THREE.ImageUtils.loadTexture(h.data("texture")),
            transparent: 0.5
          });
          d.hex[A] = new THREE.Points(u.hex, N),
            d.hex[A].scale.x = d.hex[A].scale.y = D.scale,
            d.hex[A].rotation.y = -d.hex[A].rotation.y,
            d.hex[A].updateMatrix(),
            d.hex[A].name = "hex" + c,
            e.scene.add(d.hex[A])
        }
        animate(),
          $(window).trigger("glReady"),
          // new a.default("#js-mainvisual__copy1 span"),
          setTimeout(function () {
            j = !0,
              b = !0,
              !0 === window.isHash ? (TweenMax.set("#js-mainvisual", {
                autoAlpha: 0
              }),
                window.isHash = !1) : TweenMax.fromTo("#js-mainvisual", 3, {
                autoAlpha: 0,
                z: 0
              }, {
                autoAlpha: 1,
                z: 0,
                delay: 1,
                onStart: function () {
                },
                onComplete: function () {
                  E = !0
                }
              }),
              w[0] = new TWEEN.Tween(l.position).to({
                z: f - 300
              }, 200).easing(TWEEN.Easing.Quintic.In),
              w[1] = new TWEEN.Tween(l.position).to({
                z: f
              }, 200).easing(TWEEN.Easing.Quintic.Out),
              w[0].chain(w[1]),
              w[2] = new TWEEN.Tween(l.rotation).to({
                z: 3600
              }, 100).onUpdate(function () {
                l.lookAt(new THREE.Vector3(0, 0, 0))
              }).easing(TWEEN.Easing.Linear.None)
          }, 1800)
      }
  }

  function animate() {
    e.timer = requestAnimationFrame(animate),
      render(),
      TWEEN.update()
  }

  function render() {
    if (++k % 4 != 0) {
      if (!0 === y) {
        y = !1;
        for (var t = 0; t < g.length; t++)
          g[t] && g[t].start();
        for (var n = 0; n < v.length; n++)
          v[n] && v[n].start();
        for (var a = 0; a < _.length; a++)
          _[a] && _[a].start()
      }
      if (!0 === j) {
        var r = 3e11
          , s = .001 * Date.now()
          , u = [];
        if (!0 === e.isKick) {
          if (r = 15e10,
            !0 === E) {
            w[0].start();
            for (var d = 0; d < e.scene.children.length; d++)
              // "text" !== e.scene.children[d].name && (e.scene.children[d].material.color = new THREE.Color(13364991))
              "text" !== e.scene.children[d].name && (e.scene.children[d].material.color = new THREE.Color('#ef2213'))
          }
        } else
          for (var f = 0; f < e.scene.children.length; f++)
            // "text" !== e.scene.children[f].name && (e.scene.children[f].material.color = new THREE.Color(14999248)); // old:6737151
            "text" !== e.scene.children[f].name && (e.scene.children[f].material.color = new THREE.Color('#f61505')); // old:6737151
        !0 === b && (T += .75 * Math.cos(Math.PI / 180),
          l.position.x += -(o + l.position.x) / 18,
          l.position.y += (i - l.position.y) / 13,
        0 !== i && i > -90 && i < 90 && o > -90 && o < 90 && (r = 15e10)),
          e.scene.rotation.z -= s / r;
        for (var h = 0; h < e.scene.children.length; h++)
          if ("text" !== e.scene.children[h].name) {
            for (var p = 0; p < e.scene.children[h].geometry.attributes.position.array.length; p += 3) {
              var m = e.scene.children[h].geometry.attributes.position.array;
              u[p + 0] = m[p + 0] + Math.cos(s) / 3.2,
                u[p + 1] = m[p + 1] + Math.sin(s) / 3.2,
                u[p + 2] = m[p + 2] - (Math.cos(s) * Math.random() + .5 * h),
              u[p + 2] < -800 && (u[p + 2] = 80 * Math.random())
            }
            e.scene.children[h].geometry.attributes.position.array.set(u),
              e.scene.children[h].geometry.attributes.position.needsUpdate = !0
          }
      }
      c.render(e.scene, l)
    }
  }

  function onWindowResize() {
    r = window.innerWidth / 2,
      s = window.innerHeight / 2,
      l.aspect = window.innerWidth / window.innerHeight,
      l.updateProjectionMatrix(),
      c.setSize(window.innerWidth, window.innerHeight)
  }

  function onDocumentMouseMove(e) {
    o = e.clientX - r,
      i = e.clientY - s
  }

  var e = this
    , t = window.innerWidth
    , n = window.innerHeight
    , o = 0
    , i = 0
    , r = window.innerWidth / 2
    , s = window.innerHeight / 2
    , l = void 0
    , c = void 0
    , u = []
    , d = []
    , f = 1500
    , h = $("#js-mainvisual__datas")
    , p = []
    , m = [{
    scale: .8,
    opacity: 1
  }, {
    scale: 1,
    opacity: 1
  }, {
    scale: 1.3,
    opacity: 1
  }, {
    scale: 1.6,
    opacity: 1
  }, {
    scale: 1.9,
    opacity: 1
  }, {
    scale: 2.5,
    opacity: 1
  }, {
    scale: 3,
    opacity: 1
  }]
    , v = []
    , g = []
    , _ = []
    , w = []
    , C = []
    , y = (h.data("bacter"),
    h.data("geometry"),
    !1)
    , j = !1
    , E = !1
    , b = !1
    , P = document.getElementById("js-mainvisual__mv2");
  l = new THREE.PerspectiveCamera(80, t / n, 1, 3e3),
    l.position.z = f,
    e.scene = new THREE.Scene,
    c = new THREE.WebGLRenderer({
      antialias: !0,
      alpha: !0
    });
  // var S = new THREE.SpotLight(16776960);
  var S = new THREE.SpotLight(5000000);
  S.distance = 1500,
    S.name = "text",
    e.scene.add(S),
    c.setPixelRatio(window.devicePixelRatio),
    c.setSize(t, n),
    c.autoClear = !1,
    c.setClearColor(0, 0),
    P.appendChild(c.domElement),
    document.addEventListener("mousemove", onDocumentMouseMove, !1),
    window.addEventListener("resize", onWindowResize, !1),

    // $('#content').scroll(function() {
    //     // cancelAnimationFrame(e.timer);
    //     // clearTimeout($.data(this, 'scrollTimer'));
    //     // $.data(this, 'scrollTimer', setTimeout(function() {
    //     //     animate();
    //     // }, 1000));
    //     wow.sync();
    // });

    (!/android/ig.test(window.navigator.userAgent)) && initHex2();

  var k = 0
    , T = 0
})();
