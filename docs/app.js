! function (e) {
    var t = {};

    function r(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = t, r.d = function (e, t, o) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (r.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(o, n, function (t) {
                return e[t]
            }.bind(null, n));
        return o
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 0)
}([function (e, t) {
    window.onload = function () {
        n = document.getElementById("canvas"), o = n.getContext("2d"), l = n.width / 10, void 0 === localStorage._scoreResetSept2018 && (localStorage._hscore = a = 0, localStorage._scoreResetSept2018 = !0),
            function () {
                clearInterval(e), clearInterval(t);
                try {
                    document.removeEventListener("keydown", D), document.removeEventListener("keyup", D), document.removeEventListener("mousedown", J)
                } catch (e) {
                    console.error(e)
                }!0, document.addEventListener("keydown", D), document.addEventListener("keyup", D), document.addEventListener("mousedown", J), document.addEventListener("mousemove", z);
                try {
                    g = JSON.parse(localStorage._end)
                } catch (e) {
                    console.error(e), g = !1
                }
                try {
                    ! function () {
                        try {
                            if (g) return a = JSON.parse(localStorage._hscore), i = b(n.width / l, n.height / l).slice(0), E(), void(g = !1)
                        } catch (e) {
                            console.error(e), a = 0
                        }
                        try {
                            null != localStorage._arena && "undefined" != localStorage._arena && (i = JSON.parse(localStorage._arena))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            null == i && (i = b(n.width / l, n.height / l))
                        }
                        try {
                            null == localStorage._hscore || "undefined" == localStorage._hscore ? highScore = localStorage._hscore = 0 : highScore = JSON.parse(localStorage._hscore), u = null == localStorage._score || "undefined" == localStorage._score ? localStorage._score = 0 : JSON.parse(localStorage._score), N = JSON.parse(localStorage._player)
                        } catch (e) {
                            console.error(e)
                        }
                    }()
                } catch (e) {
                    console.error(e)
                }
                s = new Image, s.src = "../images/restart.png", f = new Image, f.src = "../images/pause.png", c = new Image, c.src = "../images/play.png";
                var e = setInterval(C, 50),
                    t = setInterval(P, 1e3 / 12);
                null == N && E();
                requestAnimationFrame(_)
            }()
    };
    const r = [null, "#FF0D72", "#0DC2FF", "#0DFF72", "#F538FF", "#FF8E0D", "#FFE138", "#3877FF"];
    shapes = [
        [
            [1, 1, 1],
            [0, 1, 0],
            [1, 1, 1]
        ],
        [
            [2, 2],
            [2, 2]
        ],
        [
            [0, 0, 3, 0],
            [0, 0, 3, 0],
            [0, 3, 3, 3],
            [0, 0, 3, 0]
        ],
        [
            [0, 4, 0],
            [0, 4, 0],
            [4, 4, 4]
        ],
        [
            [0, 5, 5],
            [0, 5, 0],
            [5, 5, 0]
        ],
        [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0]
        ],
        [
            [7, 7, 0],
            [0, 7, 7],
            [0, 0, 0]
        ]
    ], speed = 7;
    let o, n, l, i, a, s, f, c, h, u = 0,
        g = !1,
        d = localStorage.mouse ? JSON.parse(localStorage.mouse) : {
            x: 0,
            y: 0
        },
        y = !1,
        S = !1,
        p = 0;
    let x = 0,
        v = 0,
        m = 0,
        w = 50 * speed;

    function _(e = 0) {
        if (g && function () {
                let e = "You hit the limit!",
                    t = .05 * l;
                o.font = l + "px Arial", o.fillStyle = "#ff5b5b", o.fillText(e, n.width / 2 - o.measureText(e).width / 2 + t, 8 * l + t);
                let r = "Press any key to restart";
                o.font = .7 * l + "px Arial", o.fillStyle = "#ff5b5b", o.fillText(r, n.width / 2 - o.measureText(r).width / 2 + t, 9 * l + t), o.font = l + "px Arial", o.fillStyle = "red", o.fillText(e, n.width / 2 - o.measureText(e).width / 2, 8 * l), o.font = .7 * l + "px Arial", o.fillStyle = "red", o.fillText(r, n.width / 2 - o.measureText(r).width / 2, 9 * l)
            }(), o.fillStyle = "black", o.fillRect(0, 0, n.width, n.height), o.fillStyle = "red", o.fillRect(0, 3 * l - 1, n.width, 1), O(i, {
                x: 0,
                y: 0
            }), O(N.shape, {
                x: N.x,
                y: N.y
            }), F(), x = e - v, v = e, m += x, m > w && !g && !S && (I(), m = 0), null == a) try {
            a = localStorage._hscore
        } catch (e) {
            console.error(e)
        }
        null == a && (a = 0), o.font = 2 * l + "px Arial", o.fillStyle = "#fff", o.fillText(u, n.width / 2 - o.measureText(u).width / 2, 2.5 * l), o.font = .5 * l + "px Arial", o.fillStyle = "#fff", o.fillText("High score: " + a, n.width / 2 - o.measureText("High score: " + a).width / 2, 3.5 * l),
            function () {
                this.offset = 1, this.hoverSize = l / 5, d.x > l * this.offset - this.hoverSize && d.x < l * this.offset + l + 2 * this.hoverSize && d.y > l * this.offset - this.hoverSize && d.y < l * this.offset + l + 2 * this.hoverSize ? (y = !0, o.fillStyle = "#3a3a3a", o.fillRect(l * this.offset - this.hoverSize, l * this.offset - this.hoverSize, l + 2 * this.hoverSize, l + 2 * this.hoverSize)) : y = !1;
                o.drawImage(s, l * this.offset, l * this.offset, l, l)
            }(),
            function () {
                this.offsetX = 8, this.offsetY = 1, this.hoverSize = l / 5, d.x > l * this.offsetX - this.hoverSize && d.x < l * this.offsetX + l + offsetX && d.y > l * this.offsetY - this.hoverSize && d.y < l * this.offsetY + l + offsetY ? (h = !0, o.fillStyle = "#3a3a3a", o.fillRect(l * this.offsetX - this.hoverSize, l * this.offsetY - this.hoverSize, l + 2 * this.hoverSize, l + 2 * this.hoverSize)) : h = !1;
                const e = S ? c : f;
                o.drawImage(e, l * this.offsetX, l * this.offsetY, l, l)
            }(),
            function () {
                for (let e = i.length - 1; e >= 0; e--) i[e].every(e => e > 0) && (i.splice(e, 1), i.splice(0, 0, new Array(i[1].length).fill(0)), u += p, p *= 2)
            }(), requestAnimationFrame(_)
    }

    function b(e, t) {
        let r = [];
        for (; t--;) r.push(new Array(e).fill(0));
        return r
    }

    function O(e, t) {
        for (let n = 0; n < e.length; n++)
            for (let i = 0; i < e[n].length; i++) 0 !== e[n][i] && (o.fillStyle = r[e[n][i]], o.fillRect((t.x + i) * l, (t.y + n) * l, l, l))
    }

    function k(e, t) {
        for (let t = 0; t < e.length; ++t)
            for (let r = 0; r < t; ++r)[e[r][t], e[t][r]] = [e[t][r], e[r][t]];
        t > 0 ? e.forEach(e => e.reverse()) : e.reverse()
    }

    function F() {
        try {
            u > a && (a = u, localStorage._hscore = JSON.stringify(a)), localStorage._end = JSON.stringify(g), localStorage._score = JSON.stringify(u), localStorage._arena = JSON.stringify(i), localStorage._player = JSON.stringify(N)
        } catch (e) {}
    }

    function z(e) {
        const t = window.getComputedStyle(n),
            r = parseInt(t.width),
            o = parseInt(t.height),
            l = n.width / r,
            i = n.height / o;
        let a = n.getBoundingClientRect();
        d.x = (e.clientX - a.left) * l, d.y = (e.clientY - a.top) * i, localStorage.setItem("mouse", JSON.stringify(d))
    }

    function J(e) {
        y ? j(!0) : h && (S = !S, up = M = L = X = !1)
    }
    var N = {
        start_x: 5,
        x: 5,
        y: 0,
        shape: []
    };

    function T() {
        let e = N.shape;
        for (let t = 0; t < e.length; t++)
            for (let r = 0; r < e[t].length; r++)
                if (0 !== e[t][r] && i[N.y + t] && 0 !== i[N.y + t][N.x + r]) return !0;
        return !1
    }

    function I() {
        if (m = 0, N.y + N.shape.length - 1 - A(N.shape) < 0 && (N.x = N.start_x), N.x + N.shape.length - 1 - R(N.shape) > i[0].length - 1 && (N.x = i[0].length - N.shape.length + R(N.shape)), N.x + Y(N.shape) < 0 && (N.x = 0 - Y(N.shape)), N.y++, T() || N.y > i.length - N.shape.length + A(N.shape)) {
            if (u += 10, N.y--, function (e, t) {
                    const r = e.shape;
                    for (let o = 0; o < r.length; o++)
                        for (let n = 0; n < r.length; n++)
                            if (r[o][n] && 0 !== r[o][n]) try {
                                t[e.y + o][e.x + n] = r[o][n]
                            } catch (e) {
                                console.error(e)
                            }
                }(N, i), function (e) {
                    let t = 0;
                    return e.forEach(e => {
                        t += e
                    }), t
                }(i[2]) > 0) return O(i, {
                x: 0,
                y: 0
            }), g = !0, void j(!1);
            E()
        }
    }

    function E() {
        N.shape = shapes[Math.round(Math.random() * (shapes.length - 1))], N.y = -N.shape.length + A(N.shape), N.x = 5 - Math.round(N.shape.length / 2), N.start_x = N.x, p = 75
    }

    function A(e) {
        let t = 0;
        for (let r = e.length - 1; r >= 0; r--) {
            for (let o = 0; o < e[r].length; o++)
                if (0 !== e[r][o]) return t;
            t++
        }
        return t
    }

    function R(e) {
        let t = 0;
        for (let r = e.length - 1; r >= 0; r--) {
            for (let o = 0; o < e.length; o++)
                if (0 !== e[o][r]) return t;
            t++
        }
        return t
    }

    function Y(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
            for (let o = 0; o < e.length; o++)
                if (0 !== e[o][r]) return t;
            t++
        }
        return t
    }

    function j(e) {
        L = M = X = !1, F(), g = !0, localStorage._end = JSON.stringify(g), localStorage._arena = JSON.stringify(b(n.width / l, n.height / l).slice(0)), e && location.reload()
    }
    var L = !1,
        M = !1,
        X = !1;

    function C() {
        M && !S && (u += 1, I())
    }

    function P() {
        L && !S ? (N.x--, T() && N.x++) : X && !S && (N.x++, T() && N.x--)
    }

    function D(e) {
        if (g) j(!0);
        else {
            if (S) return;
            if ("keydown" == e.type) switch (e.keyCode) {
                case 87:
                case 38:
                    ! function (e) {
                        const t = N.x;
                        let r = 1;
                        for (k(N.shape, e); T();)
                            if (N.x += r, r = -(r + (r > 0 ? 1 : -1)), r > N.shape[0].length) return k(N.shape, -e), void(N.x = t)
                    }(1);
                    break;
                case 65:
                case 37:
                    if (N.y + N.shape.length - A(N.shape) < 0) break;
                    L = !0;
                    break;
                case 83:
                case 40:
                    M = !0;
                    break;
                case 68:
                case 39:
                    if (N.y + N.shape.length - A(N.shape) < 0) break;
                    X = !0;
                    break;
                case 27:
                    localStorage.mouse = JSON.stringify({
                        x: -10,
                        y: -10
                    })
            } else if ("keyup" == e.type) switch (e.keyCode) {
                case 65:
                case 37:
                    L = !1;
                    break;
                case 83:
                case 40:
                    M = !1;
                    break;
                case 68:
                case 39:
                    X = !1
            }
        }
    }
}]);
