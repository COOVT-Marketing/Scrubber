import {$ as Vt, $b as Uc, A as dc, Aa as Ms, Ab as Fc, B as Xi, Ba as Ls, Bb as Mc, Ca as Bs, Cb as Lc, Db as Kn, E as rt, Eb as Bc, F as Ct, Fb as qc, Ha as tr, I as Vs, Ib as jc, J as Ne, K as Yi, Kb as zc, L as se, M as kt, O as fc, R as ge, S as Tt, T as Fe, U as Un, V as _e, W as Me, Wa as qs, Wb as er, Xb as Us, Y as Ji, Yb as Wt, Z as Os, _ as ye, _a as yc, _b as nr, a as bt, aa as Ot, ab as vc, ac as $c, b as Wi, ba as Kt, bc as $s, c as Hi, ca as pc, d as cc, da as Zi, dc as Gs, e as tt, fa as Ns, fc as Gc, ga as $n, gb as wc, gc as Kc, h as uc, hb as js, hc as Wc, ib as Ec, ic as ve, j as Qi, jb as Tc, jc as ir, kb as Ic, l as hc, lb as bc, lc as Le, m as Gt, mb as Sc, mc as rr, n as ks, na as mc, nb as Ac, nc as Be, o as Oe, oa as gc, ob as Cc, oc as Ks, pb as zs, pc as Ws, qb as Rc, qc as et, r as zn, rb as Mt, sb as Dc, sc as we, tb as Pc, tc as Wn, ua as Fs, ub as xc, uc as Hs, va as _c, vb as kc, w as wt, wb as Vc, x as xt, xb as Oc, y as St, yb as Gn, z as x, zb as Nc} from "./chunk-QLJWNBRG.js";
var Hc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Qc = {};
var Ht, Qs;
(function() {
    var i;
    function t(w, m) {
        function _() {}
        _.prototype = m.prototype,
        w.D = m.prototype,
        w.prototype = new _,
        w.prototype.constructor = w,
        w.C = function(y, v, I) {
            for (var g = Array(arguments.length - 2), zt = 2; zt < arguments.length; zt++)
                g[zt - 2] = arguments[zt];
            return m.prototype[v].apply(y, g)
        }
    }
    function e() {
        this.blockSize = -1
    }
    function n() {
        this.blockSize = -1,
        this.blockSize = 64,
        this.g = Array(4),
        this.B = Array(this.blockSize),
        this.o = this.h = 0,
        this.s()
    }
    t(n, e),
    n.prototype.s = function() {
        this.g[0] = 1732584193,
        this.g[1] = 4023233417,
        this.g[2] = 2562383102,
        this.g[3] = 271733878,
        this.o = this.h = 0
    }
    ;
    function r(w, m, _) {
        _ || (_ = 0);
        var y = Array(16);
        if (typeof m == "string")
            for (var v = 0; 16 > v; ++v)
                y[v] = m.charCodeAt(_++) | m.charCodeAt(_++) << 8 | m.charCodeAt(_++) << 16 | m.charCodeAt(_++) << 24;
        else
            for (v = 0; 16 > v; ++v)
                y[v] = m[_++] | m[_++] << 8 | m[_++] << 16 | m[_++] << 24;
        m = w.g[0],
        _ = w.g[1],
        v = w.g[2];
        var I = w.g[3]
          , g = m + (I ^ _ & (v ^ I)) + y[0] + 3614090360 & 4294967295;
        m = _ + (g << 7 & 4294967295 | g >>> 25),
        g = I + (v ^ m & (_ ^ v)) + y[1] + 3905402710 & 4294967295,
        I = m + (g << 12 & 4294967295 | g >>> 20),
        g = v + (_ ^ I & (m ^ _)) + y[2] + 606105819 & 4294967295,
        v = I + (g << 17 & 4294967295 | g >>> 15),
        g = _ + (m ^ v & (I ^ m)) + y[3] + 3250441966 & 4294967295,
        _ = v + (g << 22 & 4294967295 | g >>> 10),
        g = m + (I ^ _ & (v ^ I)) + y[4] + 4118548399 & 4294967295,
        m = _ + (g << 7 & 4294967295 | g >>> 25),
        g = I + (v ^ m & (_ ^ v)) + y[5] + 1200080426 & 4294967295,
        I = m + (g << 12 & 4294967295 | g >>> 20),
        g = v + (_ ^ I & (m ^ _)) + y[6] + 2821735955 & 4294967295,
        v = I + (g << 17 & 4294967295 | g >>> 15),
        g = _ + (m ^ v & (I ^ m)) + y[7] + 4249261313 & 4294967295,
        _ = v + (g << 22 & 4294967295 | g >>> 10),
        g = m + (I ^ _ & (v ^ I)) + y[8] + 1770035416 & 4294967295,
        m = _ + (g << 7 & 4294967295 | g >>> 25),
        g = I + (v ^ m & (_ ^ v)) + y[9] + 2336552879 & 4294967295,
        I = m + (g << 12 & 4294967295 | g >>> 20),
        g = v + (_ ^ I & (m ^ _)) + y[10] + 4294925233 & 4294967295,
        v = I + (g << 17 & 4294967295 | g >>> 15),
        g = _ + (m ^ v & (I ^ m)) + y[11] + 2304563134 & 4294967295,
        _ = v + (g << 22 & 4294967295 | g >>> 10),
        g = m + (I ^ _ & (v ^ I)) + y[12] + 1804603682 & 4294967295,
        m = _ + (g << 7 & 4294967295 | g >>> 25),
        g = I + (v ^ m & (_ ^ v)) + y[13] + 4254626195 & 4294967295,
        I = m + (g << 12 & 4294967295 | g >>> 20),
        g = v + (_ ^ I & (m ^ _)) + y[14] + 2792965006 & 4294967295,
        v = I + (g << 17 & 4294967295 | g >>> 15),
        g = _ + (m ^ v & (I ^ m)) + y[15] + 1236535329 & 4294967295,
        _ = v + (g << 22 & 4294967295 | g >>> 10),
        g = m + (v ^ I & (_ ^ v)) + y[1] + 4129170786 & 4294967295,
        m = _ + (g << 5 & 4294967295 | g >>> 27),
        g = I + (_ ^ v & (m ^ _)) + y[6] + 3225465664 & 4294967295,
        I = m + (g << 9 & 4294967295 | g >>> 23),
        g = v + (m ^ _ & (I ^ m)) + y[11] + 643717713 & 4294967295,
        v = I + (g << 14 & 4294967295 | g >>> 18),
        g = _ + (I ^ m & (v ^ I)) + y[0] + 3921069994 & 4294967295,
        _ = v + (g << 20 & 4294967295 | g >>> 12),
        g = m + (v ^ I & (_ ^ v)) + y[5] + 3593408605 & 4294967295,
        m = _ + (g << 5 & 4294967295 | g >>> 27),
        g = I + (_ ^ v & (m ^ _)) + y[10] + 38016083 & 4294967295,
        I = m + (g << 9 & 4294967295 | g >>> 23),
        g = v + (m ^ _ & (I ^ m)) + y[15] + 3634488961 & 4294967295,
        v = I + (g << 14 & 4294967295 | g >>> 18),
        g = _ + (I ^ m & (v ^ I)) + y[4] + 3889429448 & 4294967295,
        _ = v + (g << 20 & 4294967295 | g >>> 12),
        g = m + (v ^ I & (_ ^ v)) + y[9] + 568446438 & 4294967295,
        m = _ + (g << 5 & 4294967295 | g >>> 27),
        g = I + (_ ^ v & (m ^ _)) + y[14] + 3275163606 & 4294967295,
        I = m + (g << 9 & 4294967295 | g >>> 23),
        g = v + (m ^ _ & (I ^ m)) + y[3] + 4107603335 & 4294967295,
        v = I + (g << 14 & 4294967295 | g >>> 18),
        g = _ + (I ^ m & (v ^ I)) + y[8] + 1163531501 & 4294967295,
        _ = v + (g << 20 & 4294967295 | g >>> 12),
        g = m + (v ^ I & (_ ^ v)) + y[13] + 2850285829 & 4294967295,
        m = _ + (g << 5 & 4294967295 | g >>> 27),
        g = I + (_ ^ v & (m ^ _)) + y[2] + 4243563512 & 4294967295,
        I = m + (g << 9 & 4294967295 | g >>> 23),
        g = v + (m ^ _ & (I ^ m)) + y[7] + 1735328473 & 4294967295,
        v = I + (g << 14 & 4294967295 | g >>> 18),
        g = _ + (I ^ m & (v ^ I)) + y[12] + 2368359562 & 4294967295,
        _ = v + (g << 20 & 4294967295 | g >>> 12),
        g = m + (_ ^ v ^ I) + y[5] + 4294588738 & 4294967295,
        m = _ + (g << 4 & 4294967295 | g >>> 28),
        g = I + (m ^ _ ^ v) + y[8] + 2272392833 & 4294967295,
        I = m + (g << 11 & 4294967295 | g >>> 21),
        g = v + (I ^ m ^ _) + y[11] + 1839030562 & 4294967295,
        v = I + (g << 16 & 4294967295 | g >>> 16),
        g = _ + (v ^ I ^ m) + y[14] + 4259657740 & 4294967295,
        _ = v + (g << 23 & 4294967295 | g >>> 9),
        g = m + (_ ^ v ^ I) + y[1] + 2763975236 & 4294967295,
        m = _ + (g << 4 & 4294967295 | g >>> 28),
        g = I + (m ^ _ ^ v) + y[4] + 1272893353 & 4294967295,
        I = m + (g << 11 & 4294967295 | g >>> 21),
        g = v + (I ^ m ^ _) + y[7] + 4139469664 & 4294967295,
        v = I + (g << 16 & 4294967295 | g >>> 16),
        g = _ + (v ^ I ^ m) + y[10] + 3200236656 & 4294967295,
        _ = v + (g << 23 & 4294967295 | g >>> 9),
        g = m + (_ ^ v ^ I) + y[13] + 681279174 & 4294967295,
        m = _ + (g << 4 & 4294967295 | g >>> 28),
        g = I + (m ^ _ ^ v) + y[0] + 3936430074 & 4294967295,
        I = m + (g << 11 & 4294967295 | g >>> 21),
        g = v + (I ^ m ^ _) + y[3] + 3572445317 & 4294967295,
        v = I + (g << 16 & 4294967295 | g >>> 16),
        g = _ + (v ^ I ^ m) + y[6] + 76029189 & 4294967295,
        _ = v + (g << 23 & 4294967295 | g >>> 9),
        g = m + (_ ^ v ^ I) + y[9] + 3654602809 & 4294967295,
        m = _ + (g << 4 & 4294967295 | g >>> 28),
        g = I + (m ^ _ ^ v) + y[12] + 3873151461 & 4294967295,
        I = m + (g << 11 & 4294967295 | g >>> 21),
        g = v + (I ^ m ^ _) + y[15] + 530742520 & 4294967295,
        v = I + (g << 16 & 4294967295 | g >>> 16),
        g = _ + (v ^ I ^ m) + y[2] + 3299628645 & 4294967295,
        _ = v + (g << 23 & 4294967295 | g >>> 9),
        g = m + (v ^ (_ | ~I)) + y[0] + 4096336452 & 4294967295,
        m = _ + (g << 6 & 4294967295 | g >>> 26),
        g = I + (_ ^ (m | ~v)) + y[7] + 1126891415 & 4294967295,
        I = m + (g << 10 & 4294967295 | g >>> 22),
        g = v + (m ^ (I | ~_)) + y[14] + 2878612391 & 4294967295,
        v = I + (g << 15 & 4294967295 | g >>> 17),
        g = _ + (I ^ (v | ~m)) + y[5] + 4237533241 & 4294967295,
        _ = v + (g << 21 & 4294967295 | g >>> 11),
        g = m + (v ^ (_ | ~I)) + y[12] + 1700485571 & 4294967295,
        m = _ + (g << 6 & 4294967295 | g >>> 26),
        g = I + (_ ^ (m | ~v)) + y[3] + 2399980690 & 4294967295,
        I = m + (g << 10 & 4294967295 | g >>> 22),
        g = v + (m ^ (I | ~_)) + y[10] + 4293915773 & 4294967295,
        v = I + (g << 15 & 4294967295 | g >>> 17),
        g = _ + (I ^ (v | ~m)) + y[1] + 2240044497 & 4294967295,
        _ = v + (g << 21 & 4294967295 | g >>> 11),
        g = m + (v ^ (_ | ~I)) + y[8] + 1873313359 & 4294967295,
        m = _ + (g << 6 & 4294967295 | g >>> 26),
        g = I + (_ ^ (m | ~v)) + y[15] + 4264355552 & 4294967295,
        I = m + (g << 10 & 4294967295 | g >>> 22),
        g = v + (m ^ (I | ~_)) + y[6] + 2734768916 & 4294967295,
        v = I + (g << 15 & 4294967295 | g >>> 17),
        g = _ + (I ^ (v | ~m)) + y[13] + 1309151649 & 4294967295,
        _ = v + (g << 21 & 4294967295 | g >>> 11),
        g = m + (v ^ (_ | ~I)) + y[4] + 4149444226 & 4294967295,
        m = _ + (g << 6 & 4294967295 | g >>> 26),
        g = I + (_ ^ (m | ~v)) + y[11] + 3174756917 & 4294967295,
        I = m + (g << 10 & 4294967295 | g >>> 22),
        g = v + (m ^ (I | ~_)) + y[2] + 718787259 & 4294967295,
        v = I + (g << 15 & 4294967295 | g >>> 17),
        g = _ + (I ^ (v | ~m)) + y[9] + 3951481745 & 4294967295,
        w.g[0] = w.g[0] + m & 4294967295,
        w.g[1] = w.g[1] + (v + (g << 21 & 4294967295 | g >>> 11)) & 4294967295,
        w.g[2] = w.g[2] + v & 4294967295,
        w.g[3] = w.g[3] + I & 4294967295
    }
    n.prototype.u = function(w, m) {
        m === void 0 && (m = w.length);
        for (var _ = m - this.blockSize, y = this.B, v = this.h, I = 0; I < m; ) {
            if (v == 0)
                for (; I <= _; )
                    r(this, w, I),
                    I += this.blockSize;
            if (typeof w == "string") {
                for (; I < m; )
                    if (y[v++] = w.charCodeAt(I++),
                    v == this.blockSize) {
                        r(this, y),
                        v = 0;
                        break
                    }
            } else
                for (; I < m; )
                    if (y[v++] = w[I++],
                    v == this.blockSize) {
                        r(this, y),
                        v = 0;
                        break
                    }
        }
        this.h = v,
        this.o += m
    }
    ,
    n.prototype.v = function() {
        var w = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
        w[0] = 128;
        for (var m = 1; m < w.length - 8; ++m)
            w[m] = 0;
        var _ = 8 * this.o;
        for (m = w.length - 8; m < w.length; ++m)
            w[m] = _ & 255,
            _ /= 256;
        for (this.u(w),
        w = Array(16),
        m = _ = 0; 4 > m; ++m)
            for (var y = 0; 32 > y; y += 8)
                w[_++] = this.g[m] >>> y & 255;
        return w
    }
    ;
    function o(w, m) {
        var _ = u;
        return Object.prototype.hasOwnProperty.call(_, w) ? _[w] : _[w] = m(w)
    }
    function l(w, m) {
        this.h = m;
        for (var _ = [], y = !0, v = w.length - 1; 0 <= v; v--) {
            var I = w[v] | 0;
            y && I == m || (_[v] = I,
            y = !1)
        }
        this.g = _
    }
    var u = {};
    function d(w) {
        return -128 <= w && 128 > w ? o(w, function(m) {
            return new l([m | 0],0 > m ? -1 : 0)
        }) : new l([w | 0],0 > w ? -1 : 0)
    }
    function f(w) {
        if (isNaN(w) || !isFinite(w))
            return E;
        if (0 > w)
            return V(f(-w));
        for (var m = [], _ = 1, y = 0; w >= _; y++)
            m[y] = w / _ | 0,
            _ *= 4294967296;
        return new l(m,0)
    }
    function p(w, m) {
        if (w.length == 0)
            throw Error("number format error: empty string");
        if (m = m || 10,
        2 > m || 36 < m)
            throw Error("radix out of range: " + m);
        if (w.charAt(0) == "-")
            return V(p(w.substring(1), m));
        if (0 <= w.indexOf("-"))
            throw Error('number format error: interior "-" character');
        for (var _ = f(Math.pow(m, 8)), y = E, v = 0; v < w.length; v += 8) {
            var I = Math.min(8, w.length - v)
              , g = parseInt(w.substring(v, v + I), m);
            8 > I ? (I = f(Math.pow(m, I)),
            y = y.j(I).add(f(g))) : (y = y.j(_),
            y = y.add(f(g)))
        }
        return y
    }
    var E = d(0)
      , S = d(1)
      , C = d(16777216);
    i = l.prototype,
    i.m = function() {
        if (O(this))
            return -V(this).m();
        for (var w = 0, m = 1, _ = 0; _ < this.g.length; _++) {
            var y = this.i(_);
            w += (0 <= y ? y : 4294967296 + y) * m,
            m *= 4294967296
        }
        return w
    }
    ,
    i.toString = function(w) {
        if (w = w || 10,
        2 > w || 36 < w)
            throw Error("radix out of range: " + w);
        if (P(this))
            return "0";
        if (O(this))
            return "-" + V(this).toString(w);
        for (var m = f(Math.pow(w, 6)), _ = this, y = ""; ; ) {
            var v = J(_, m).g;
            _ = K(_, v.j(m));
            var I = ((0 < _.g.length ? _.g[0] : _.h) >>> 0).toString(w);
            if (_ = v,
            P(_))
                return I + y;
            for (; 6 > I.length; )
                I = "0" + I;
            y = I + y
        }
    }
    ,
    i.i = function(w) {
        return 0 > w ? 0 : w < this.g.length ? this.g[w] : this.h
    }
    ;
    function P(w) {
        if (w.h != 0)
            return !1;
        for (var m = 0; m < w.g.length; m++)
            if (w.g[m] != 0)
                return !1;
        return !0
    }
    function O(w) {
        return w.h == -1
    }
    i.l = function(w) {
        return w = K(this, w),
        O(w) ? -1 : P(w) ? 0 : 1
    }
    ;
    function V(w) {
        for (var m = w.g.length, _ = [], y = 0; y < m; y++)
            _[y] = ~w.g[y];
        return new l(_,~w.h).add(S)
    }
    i.abs = function() {
        return O(this) ? V(this) : this
    }
    ,
    i.add = function(w) {
        for (var m = Math.max(this.g.length, w.g.length), _ = [], y = 0, v = 0; v <= m; v++) {
            var I = y + (this.i(v) & 65535) + (w.i(v) & 65535)
              , g = (I >>> 16) + (this.i(v) >>> 16) + (w.i(v) >>> 16);
            y = g >>> 16,
            I &= 65535,
            g &= 65535,
            _[v] = g << 16 | I
        }
        return new l(_,_[_.length - 1] & -2147483648 ? -1 : 0)
    }
    ;
    function K(w, m) {
        return w.add(V(m))
    }
    i.j = function(w) {
        if (P(this) || P(w))
            return E;
        if (O(this))
            return O(w) ? V(this).j(V(w)) : V(V(this).j(w));
        if (O(w))
            return V(this.j(V(w)));
        if (0 > this.l(C) && 0 > w.l(C))
            return f(this.m() * w.m());
        for (var m = this.g.length + w.g.length, _ = [], y = 0; y < 2 * m; y++)
            _[y] = 0;
        for (y = 0; y < this.g.length; y++)
            for (var v = 0; v < w.g.length; v++) {
                var I = this.i(y) >>> 16
                  , g = this.i(y) & 65535
                  , zt = w.i(v) >>> 16
                  , In = w.i(v) & 65535;
                _[2 * y + 2 * v] += g * In,
                $(_, 2 * y + 2 * v),
                _[2 * y + 2 * v + 1] += I * In,
                $(_, 2 * y + 2 * v + 1),
                _[2 * y + 2 * v + 1] += g * zt,
                $(_, 2 * y + 2 * v + 1),
                _[2 * y + 2 * v + 2] += I * zt,
                $(_, 2 * y + 2 * v + 2)
            }
        for (y = 0; y < m; y++)
            _[y] = _[2 * y + 1] << 16 | _[2 * y];
        for (y = m; y < 2 * m; y++)
            _[y] = 0;
        return new l(_,0)
    }
    ;
    function $(w, m) {
        for (; (w[m] & 65535) != w[m]; )
            w[m + 1] += w[m] >>> 16,
            w[m] &= 65535,
            m++
    }
    function G(w, m) {
        this.g = w,
        this.h = m
    }
    function J(w, m) {
        if (P(m))
            throw Error("division by zero");
        if (P(w))
            return new G(E,E);
        if (O(w))
            return m = J(V(w), m),
            new G(V(m.g),V(m.h));
        if (O(m))
            return m = J(w, V(m)),
            new G(V(m.g),m.h);
        if (30 < w.g.length) {
            if (O(w) || O(m))
                throw Error("slowDivide_ only works with positive integers.");
            for (var _ = S, y = m; 0 >= y.l(w); )
                _ = At(_),
                y = At(y);
            var v = H(_, 1)
              , I = H(y, 1);
            for (y = H(y, 2),
            _ = H(_, 2); !P(y); ) {
                var g = I.add(y);
                0 >= g.l(w) && (v = v.add(_),
                I = g),
                y = H(y, 1),
                _ = H(_, 1)
            }
            return m = K(w, v.j(m)),
            new G(v,m)
        }
        for (v = E; 0 <= w.l(m); ) {
            for (_ = Math.max(1, Math.floor(w.m() / m.m())),
            y = Math.ceil(Math.log(_) / Math.LN2),
            y = 48 >= y ? 1 : Math.pow(2, y - 48),
            I = f(_),
            g = I.j(m); O(g) || 0 < g.l(w); )
                _ -= y,
                I = f(_),
                g = I.j(m);
            P(I) && (I = S),
            v = v.add(I),
            w = K(w, g)
        }
        return new G(v,w)
    }
    i.A = function(w) {
        return J(this, w).h
    }
    ,
    i.and = function(w) {
        for (var m = Math.max(this.g.length, w.g.length), _ = [], y = 0; y < m; y++)
            _[y] = this.i(y) & w.i(y);
        return new l(_,this.h & w.h)
    }
    ,
    i.or = function(w) {
        for (var m = Math.max(this.g.length, w.g.length), _ = [], y = 0; y < m; y++)
            _[y] = this.i(y) | w.i(y);
        return new l(_,this.h | w.h)
    }
    ,
    i.xor = function(w) {
        for (var m = Math.max(this.g.length, w.g.length), _ = [], y = 0; y < m; y++)
            _[y] = this.i(y) ^ w.i(y);
        return new l(_,this.h ^ w.h)
    }
    ;
    function At(w) {
        for (var m = w.g.length + 1, _ = [], y = 0; y < m; y++)
            _[y] = w.i(y) << 1 | w.i(y - 1) >>> 31;
        return new l(_,w.h)
    }
    function H(w, m) {
        var _ = m >> 5;
        m %= 32;
        for (var y = w.g.length - _, v = [], I = 0; I < y; I++)
            v[I] = 0 < m ? w.i(I + _) >>> m | w.i(I + _ + 1) << 32 - m : w.i(I + _);
        return new l(v,w.h)
    }
    n.prototype.digest = n.prototype.v,
    n.prototype.reset = n.prototype.s,
    n.prototype.update = n.prototype.u,
    Qs = Qc.Md5 = n,
    l.prototype.add = l.prototype.add,
    l.prototype.multiply = l.prototype.j,
    l.prototype.modulo = l.prototype.A,
    l.prototype.compare = l.prototype.l,
    l.prototype.toNumber = l.prototype.m,
    l.prototype.toString = l.prototype.toString,
    l.prototype.getBits = l.prototype.i,
    l.fromNumber = f,
    l.fromString = p,
    Ht = Qc.Integer = l
}
).apply(typeof Hc < "u" ? Hc : typeof self < "u" ? self : typeof window < "u" ? window : {});
var sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Qt = {};
var Xs, df, qe, Ys, Hn, or, Js, Zs, to;
(function() {
    var i, t = typeof Object.defineProperties == "function" ? Object.defineProperty : function(s, a, c) {
        return s == Array.prototype || s == Object.prototype || (s[a] = c.value),
        s
    }
    ;
    function e(s) {
        s = [typeof globalThis == "object" && globalThis, s, typeof window == "object" && window, typeof self == "object" && self, typeof sr == "object" && sr];
        for (var a = 0; a < s.length; ++a) {
            var c = s[a];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object")
    }
    var n = e(this);
    function r(s, a) {
        if (a)
            t: {
                var c = n;
                s = s.split(".");
                for (var h = 0; h < s.length - 1; h++) {
                    var T = s[h];
                    if (!(T in c))
                        break t;
                    c = c[T]
                }
                s = s[s.length - 1],
                h = c[s],
                a = a(h),
                a != h && a != null && t(c, s, {
                    configurable: !0,
                    writable: !0,
                    value: a
                })
            }
    }
    function o(s, a) {
        s instanceof String && (s += "");
        var c = 0
          , h = !1
          , T = {
            next: function() {
                if (!h && c < s.length) {
                    var b = c++;
                    return {
                        value: a(b, s[b]),
                        done: !1
                    }
                }
                return h = !0,
                {
                    done: !0,
                    value: void 0
                }
            }
        };
        return T[Symbol.iterator] = function() {
            return T
        }
        ,
        T
    }
    r("Array.prototype.values", function(s) {
        return s || function() {
            return o(this, function(a, c) {
                return c
            })
        }
    });
    var l = l || {}
      , u = this || self;
    function d(s) {
        var a = typeof s;
        return a = a != "object" ? a : s ? Array.isArray(s) ? "array" : a : "null",
        a == "array" || a == "object" && typeof s.length == "number"
    }
    function f(s) {
        var a = typeof s;
        return a == "object" && s != null || a == "function"
    }
    function p(s, a, c) {
        return s.call.apply(s.bind, arguments)
    }
    function E(s, a, c) {
        if (!s)
            throw Error();
        if (2 < arguments.length) {
            var h = Array.prototype.slice.call(arguments, 2);
            return function() {
                var T = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(T, h),
                s.apply(a, T)
            }
        }
        return function() {
            return s.apply(a, arguments)
        }
    }
    function S(s, a, c) {
        return S = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? p : E,
        S.apply(null, arguments)
    }
    function C(s, a) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var h = c.slice();
            return h.push.apply(h, arguments),
            s.apply(this, h)
        }
    }
    function P(s, a) {
        function c() {}
        c.prototype = a.prototype,
        s.aa = a.prototype,
        s.prototype = new c,
        s.prototype.constructor = s,
        s.Qb = function(h, T, b) {
            for (var R = Array(arguments.length - 2), W = 2; W < arguments.length; W++)
                R[W - 2] = arguments[W];
            return a.prototype[T].apply(h, R)
        }
    }
    function O(s) {
        let a = s.length;
        if (0 < a) {
            let c = Array(a);
            for (let h = 0; h < a; h++)
                c[h] = s[h];
            return c
        }
        return []
    }
    function V(s, a) {
        for (let c = 1; c < arguments.length; c++) {
            let h = arguments[c];
            if (d(h)) {
                let T = s.length || 0
                  , b = h.length || 0;
                s.length = T + b;
                for (let R = 0; R < b; R++)
                    s[T + R] = h[R]
            } else
                s.push(h)
        }
    }
    class K {
        constructor(a, c) {
            this.i = a,
            this.j = c,
            this.h = 0,
            this.g = null
        }
        get() {
            let a;
            return 0 < this.h ? (this.h--,
            a = this.g,
            this.g = a.next,
            a.next = null) : a = this.i(),
            a
        }
    }
    function $(s) {
        return /^[\s\xa0]*$/.test(s)
    }
    function G() {
        var s = u.navigator;
        return s && (s = s.userAgent) ? s : ""
    }
    function J(s) {
        return J[" "](s),
        s
    }
    J[" "] = function() {}
    ;
    var At = G().indexOf("Gecko") != -1 && !(G().toLowerCase().indexOf("webkit") != -1 && G().indexOf("Edge") == -1) && !(G().indexOf("Trident") != -1 || G().indexOf("MSIE") != -1) && G().indexOf("Edge") == -1;
    function H(s, a, c) {
        for (let h in s)
            a.call(c, s[h], h, s)
    }
    function w(s, a) {
        for (let c in s)
            a.call(void 0, s[c], c, s)
    }
    function m(s) {
        let a = {};
        for (let c in s)
            a[c] = s[c];
        return a
    }
    let _ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function y(s, a) {
        let c, h;
        for (let T = 1; T < arguments.length; T++) {
            h = arguments[T];
            for (c in h)
                s[c] = h[c];
            for (let b = 0; b < _.length; b++)
                c = _[b],
                Object.prototype.hasOwnProperty.call(h, c) && (s[c] = h[c])
        }
    }
    function v(s) {
        var a = 1;
        s = s.split(":");
        let c = [];
        for (; 0 < a && s.length; )
            c.push(s.shift()),
            a--;
        return s.length && c.push(s.join(":")),
        c
    }
    function I(s) {
        u.setTimeout( () => {
            throw s
        }
        , 0)
    }
    function g() {
        var s = as;
        let a = null;
        return s.g && (a = s.g,
        s.g = s.g.next,
        s.g || (s.h = null),
        a.next = null),
        a
    }
    class zt {
        constructor() {
            this.h = this.g = null
        }
        add(a, c) {
            let h = In.get();
            h.set(a, c),
            this.h ? this.h.next = h : this.g = h,
            this.h = h
        }
    }
    var In = new K( () => new xd,s => s.reset());
    class xd {
        constructor() {
            this.next = this.g = this.h = null
        }
        set(a, c) {
            this.h = a,
            this.g = c,
            this.next = null
        }
        reset() {
            this.next = this.g = this.h = null
        }
    }
    let bn, Sn = !1, as = new zt, ll = () => {
        let s = u.Promise.resolve(void 0);
        bn = () => {
            s.then(kd)
        }
    }
    ;
    var kd = () => {
        for (var s; s = g(); ) {
            try {
                s.h.call(s.g)
            } catch (c) {
                I(c)
            }
            var a = In;
            a.j(s),
            100 > a.h && (a.h++,
            s.next = a.g,
            a.g = s)
        }
        Sn = !1
    }
    ;
    function ee() {
        this.s = this.s,
        this.C = this.C
    }
    ee.prototype.s = !1,
    ee.prototype.ma = function() {
        this.s || (this.s = !0,
        this.N())
    }
    ,
    ee.prototype.N = function() {
        if (this.C)
            for (; this.C.length; )
                this.C.shift()()
    }
    ;
    function dt(s, a) {
        this.type = s,
        this.g = this.target = a,
        this.defaultPrevented = !1
    }
    dt.prototype.h = function() {
        this.defaultPrevented = !0
    }
    ;
    var Vd = (function() {
        if (!u.addEventListener || !Object.defineProperty)
            return !1;
        var s = !1
          , a = Object.defineProperty({}, "passive", {
            get: function() {
                s = !0
            }
        });
        try {
            let c = () => {}
            ;
            u.addEventListener("test", c, a),
            u.removeEventListener("test", c, a)
        } catch {}
        return s
    }
    )();
    function An(s, a) {
        if (dt.call(this, s ? s.type : ""),
        this.relatedTarget = this.g = this.target = null,
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0,
        this.key = "",
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1,
        this.state = null,
        this.pointerId = 0,
        this.pointerType = "",
        this.i = null,
        s) {
            var c = this.type = s.type
              , h = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : null;
            if (this.target = s.target || s.srcElement,
            this.g = a,
            a = s.relatedTarget) {
                if (At) {
                    t: {
                        try {
                            J(a.nodeName);
                            var T = !0;
                            break t
                        } catch {}
                        T = !1
                    }
                    T || (a = null)
                }
            } else
                c == "mouseover" ? a = s.fromElement : c == "mouseout" && (a = s.toElement);
            this.relatedTarget = a,
            h ? (this.clientX = h.clientX !== void 0 ? h.clientX : h.pageX,
            this.clientY = h.clientY !== void 0 ? h.clientY : h.pageY,
            this.screenX = h.screenX || 0,
            this.screenY = h.screenY || 0) : (this.clientX = s.clientX !== void 0 ? s.clientX : s.pageX,
            this.clientY = s.clientY !== void 0 ? s.clientY : s.pageY,
            this.screenX = s.screenX || 0,
            this.screenY = s.screenY || 0),
            this.button = s.button,
            this.key = s.key || "",
            this.ctrlKey = s.ctrlKey,
            this.altKey = s.altKey,
            this.shiftKey = s.shiftKey,
            this.metaKey = s.metaKey,
            this.pointerId = s.pointerId || 0,
            this.pointerType = typeof s.pointerType == "string" ? s.pointerType : Od[s.pointerType] || "",
            this.state = s.state,
            this.i = s,
            s.defaultPrevented && An.aa.h.call(this)
        }
    }
    P(An, dt);
    var Od = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    An.prototype.h = function() {
        An.aa.h.call(this);
        var s = this.i;
        s.preventDefault ? s.preventDefault() : s.returnValue = !1
    }
    ;
    var Cn = "closure_listenable_" + (1e6 * Math.random() | 0)
      , Nd = 0;
    function Fd(s, a, c, h, T) {
        this.listener = s,
        this.proxy = null,
        this.src = a,
        this.type = c,
        this.capture = !!h,
        this.ha = T,
        this.key = ++Nd,
        this.da = this.fa = !1
    }
    function Pi(s) {
        s.da = !0,
        s.listener = null,
        s.proxy = null,
        s.src = null,
        s.ha = null
    }
    function xi(s) {
        this.src = s,
        this.g = {},
        this.h = 0
    }
    xi.prototype.add = function(s, a, c, h, T) {
        var b = s.toString();
        s = this.g[b],
        s || (s = this.g[b] = [],
        this.h++);
        var R = cs(s, a, h, T);
        return -1 < R ? (a = s[R],
        c || (a.fa = !1)) : (a = new Fd(a,this.src,b,!!h,T),
        a.fa = c,
        s.push(a)),
        a
    }
    ;
    function ls(s, a) {
        var c = a.type;
        if (c in s.g) {
            var h = s.g[c], T = Array.prototype.indexOf.call(h, a, void 0), b;
            (b = 0 <= T) && Array.prototype.splice.call(h, T, 1),
            b && (Pi(a),
            s.g[c].length == 0 && (delete s.g[c],
            s.h--))
        }
    }
    function cs(s, a, c, h) {
        for (var T = 0; T < s.length; ++T) {
            var b = s[T];
            if (!b.da && b.listener == a && b.capture == !!c && b.ha == h)
                return T
        }
        return -1
    }
    var us = "closure_lm_" + (1e6 * Math.random() | 0)
      , hs = {};
    function cl(s, a, c, h, T) {
        if (h && h.once)
            return hl(s, a, c, h, T);
        if (Array.isArray(a)) {
            for (var b = 0; b < a.length; b++)
                cl(s, a[b], c, h, T);
            return null
        }
        return c = ms(c),
        s && s[Cn] ? s.K(a, c, f(h) ? !!h.capture : !!h, T) : ul(s, a, c, !1, h, T)
    }
    function ul(s, a, c, h, T, b) {
        if (!a)
            throw Error("Invalid event type");
        var R = f(T) ? !!T.capture : !!T
          , W = fs(s);
        if (W || (s[us] = W = new xi(s)),
        c = W.add(a, c, h, R, b),
        c.proxy)
            return c;
        if (h = Md(),
        c.proxy = h,
        h.src = s,
        h.listener = c,
        s.addEventListener)
            Vd || (T = R),
            T === void 0 && (T = !1),
            s.addEventListener(a.toString(), h, T);
        else if (s.attachEvent)
            s.attachEvent(fl(a.toString()), h);
        else if (s.addListener && s.removeListener)
            s.addListener(h);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        return c
    }
    function Md() {
        function s(c) {
            return a.call(s.src, s.listener, c)
        }
        let a = Ld;
        return s
    }
    function hl(s, a, c, h, T) {
        if (Array.isArray(a)) {
            for (var b = 0; b < a.length; b++)
                hl(s, a[b], c, h, T);
            return null
        }
        return c = ms(c),
        s && s[Cn] ? s.L(a, c, f(h) ? !!h.capture : !!h, T) : ul(s, a, c, !0, h, T)
    }
    function dl(s, a, c, h, T) {
        if (Array.isArray(a))
            for (var b = 0; b < a.length; b++)
                dl(s, a[b], c, h, T);
        else
            h = f(h) ? !!h.capture : !!h,
            c = ms(c),
            s && s[Cn] ? (s = s.i,
            a = String(a).toString(),
            a in s.g && (b = s.g[a],
            c = cs(b, c, h, T),
            -1 < c && (Pi(b[c]),
            Array.prototype.splice.call(b, c, 1),
            b.length == 0 && (delete s.g[a],
            s.h--)))) : s && (s = fs(s)) && (a = s.g[a.toString()],
            s = -1,
            a && (s = cs(a, c, h, T)),
            (c = -1 < s ? a[s] : null) && ds(c))
    }
    function ds(s) {
        if (typeof s != "number" && s && !s.da) {
            var a = s.src;
            if (a && a[Cn])
                ls(a.i, s);
            else {
                var c = s.type
                  , h = s.proxy;
                a.removeEventListener ? a.removeEventListener(c, h, s.capture) : a.detachEvent ? a.detachEvent(fl(c), h) : a.addListener && a.removeListener && a.removeListener(h),
                (c = fs(a)) ? (ls(c, s),
                c.h == 0 && (c.src = null,
                a[us] = null)) : Pi(s)
            }
        }
    }
    function fl(s) {
        return s in hs ? hs[s] : hs[s] = "on" + s
    }
    function Ld(s, a) {
        if (s.da)
            s = !0;
        else {
            a = new An(a,this);
            var c = s.listener
              , h = s.ha || s.src;
            s.fa && ds(s),
            s = c.call(h, a)
        }
        return s
    }
    function fs(s) {
        return s = s[us],
        s instanceof xi ? s : null
    }
    var ps = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
    function ms(s) {
        return typeof s == "function" ? s : (s[ps] || (s[ps] = function(a) {
            return s.handleEvent(a)
        }
        ),
        s[ps])
    }
    function ft() {
        ee.call(this),
        this.i = new xi(this),
        this.M = this,
        this.F = null
    }
    P(ft, ee),
    ft.prototype[Cn] = !0,
    ft.prototype.removeEventListener = function(s, a, c, h) {
        dl(this, s, a, c, h)
    }
    ;
    function yt(s, a) {
        var c, h = s.F;
        if (h)
            for (c = []; h; h = h.F)
                c.push(h);
        if (s = s.M,
        h = a.type || a,
        typeof a == "string")
            a = new dt(a,s);
        else if (a instanceof dt)
            a.target = a.target || s;
        else {
            var T = a;
            a = new dt(h,s),
            y(a, T)
        }
        if (T = !0,
        c)
            for (var b = c.length - 1; 0 <= b; b--) {
                var R = a.g = c[b];
                T = ki(R, h, !0, a) && T
            }
        if (R = a.g = s,
        T = ki(R, h, !0, a) && T,
        T = ki(R, h, !1, a) && T,
        c)
            for (b = 0; b < c.length; b++)
                R = a.g = c[b],
                T = ki(R, h, !1, a) && T
    }
    ft.prototype.N = function() {
        if (ft.aa.N.call(this),
        this.i) {
            var s = this.i, a;
            for (a in s.g) {
                for (var c = s.g[a], h = 0; h < c.length; h++)
                    Pi(c[h]);
                delete s.g[a],
                s.h--
            }
        }
        this.F = null
    }
    ,
    ft.prototype.K = function(s, a, c, h) {
        return this.i.add(String(s), a, !1, c, h)
    }
    ,
    ft.prototype.L = function(s, a, c, h) {
        return this.i.add(String(s), a, !0, c, h)
    }
    ;
    function ki(s, a, c, h) {
        if (a = s.i.g[String(a)],
        !a)
            return !0;
        a = a.concat();
        for (var T = !0, b = 0; b < a.length; ++b) {
            var R = a[b];
            if (R && !R.da && R.capture == c) {
                var W = R.listener
                  , ht = R.ha || R.src;
                R.fa && ls(s.i, R),
                T = W.call(ht, h) !== !1 && T
            }
        }
        return T && !h.defaultPrevented
    }
    function pl(s, a, c) {
        if (typeof s == "function")
            c && (s = S(s, c));
        else if (s && typeof s.handleEvent == "function")
            s = S(s.handleEvent, s);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < Number(a) ? -1 : u.setTimeout(s, a || 0)
    }
    function ml(s) {
        s.g = pl( () => {
            s.g = null,
            s.i && (s.i = !1,
            ml(s))
        }
        , s.l);
        let a = s.h;
        s.h = null,
        s.m.apply(null, a)
    }
    class Bd extends ee {
        constructor(a, c) {
            super(),
            this.m = a,
            this.l = c,
            this.h = null,
            this.i = !1,
            this.g = null
        }
        j(a) {
            this.h = arguments,
            this.g ? this.i = !0 : ml(this)
        }
        N() {
            super.N(),
            this.g && (u.clearTimeout(this.g),
            this.g = null,
            this.i = !1,
            this.h = null)
        }
    }
    function Rn(s) {
        ee.call(this),
        this.h = s,
        this.g = {}
    }
    P(Rn, ee);
    var gl = [];
    function _l(s) {
        H(s.g, function(a, c) {
            this.g.hasOwnProperty(c) && ds(a)
        }, s),
        s.g = {}
    }
    Rn.prototype.N = function() {
        Rn.aa.N.call(this),
        _l(this)
    }
    ,
    Rn.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented")
    }
    ;
    var gs = u.JSON.stringify
      , qd = u.JSON.parse
      , jd = class {
        stringify(s) {
            return u.JSON.stringify(s, void 0)
        }
        parse(s) {
            return u.JSON.parse(s, void 0)
        }
    }
    ;
    function _s() {}
    _s.prototype.h = null;
    function yl(s) {
        return s.h || (s.h = s.i())
    }
    function vl() {}
    var Dn = {
        OPEN: "a",
        kb: "b",
        Ja: "c",
        wb: "d"
    };
    function ys() {
        dt.call(this, "d")
    }
    P(ys, dt);
    function vs() {
        dt.call(this, "c")
    }
    P(vs, dt);
    var de = {}
      , wl = null;
    function Vi() {
        return wl = wl || new ft
    }
    de.La = "serverreachability";
    function El(s) {
        dt.call(this, de.La, s)
    }
    P(El, dt);
    function Pn(s) {
        let a = Vi();
        yt(a, new El(a))
    }
    de.STAT_EVENT = "statevent";
    function Tl(s, a) {
        dt.call(this, de.STAT_EVENT, s),
        this.stat = a
    }
    P(Tl, dt);
    function vt(s) {
        let a = Vi();
        yt(a, new Tl(a,s))
    }
    de.Ma = "timingevent";
    function Il(s, a) {
        dt.call(this, de.Ma, s),
        this.size = a
    }
    P(Il, dt);
    function xn(s, a) {
        if (typeof s != "function")
            throw Error("Fn must not be null and must be a function");
        return u.setTimeout(function() {
            s()
        }, a)
    }
    function kn() {
        this.g = !0
    }
    kn.prototype.xa = function() {
        this.g = !1
    }
    ;
    function zd(s, a, c, h, T, b) {
        s.info(function() {
            if (s.g)
                if (b)
                    for (var R = "", W = b.split("&"), ht = 0; ht < W.length; ht++) {
                        var U = W[ht].split("=");
                        if (1 < U.length) {
                            var pt = U[0];
                            U = U[1];
                            var mt = pt.split("_");
                            R = 2 <= mt.length && mt[1] == "type" ? R + (pt + "=" + U + "&") : R + (pt + "=redacted&")
                        }
                    }
                else
                    R = null;
            else
                R = b;
            return "XMLHTTP REQ (" + h + ") [attempt " + T + "]: " + a + `
` + c + `
` + R
        })
    }
    function Ud(s, a, c, h, T, b, R) {
        s.info(function() {
            return "XMLHTTP RESP (" + h + ") [ attempt " + T + "]: " + a + `
` + c + `
` + b + " " + R
        })
    }
    function Pe(s, a, c, h) {
        s.info(function() {
            return "XMLHTTP TEXT (" + a + "): " + Gd(s, c) + (h ? " " + h : "")
        })
    }
    function $d(s, a) {
        s.info(function() {
            return "TIMEOUT: " + a
        })
    }
    kn.prototype.info = function() {}
    ;
    function Gd(s, a) {
        if (!s.g)
            return a;
        if (!a)
            return null;
        try {
            var c = JSON.parse(a);
            if (c) {
                for (s = 0; s < c.length; s++)
                    if (Array.isArray(c[s])) {
                        var h = c[s];
                        if (!(2 > h.length)) {
                            var T = h[1];
                            if (Array.isArray(T) && !(1 > T.length)) {
                                var b = T[0];
                                if (b != "noop" && b != "stop" && b != "close")
                                    for (var R = 1; R < T.length; R++)
                                        T[R] = ""
                            }
                        }
                    }
            }
            return gs(c)
        } catch {
            return a
        }
    }
    var Oi = {
        NO_ERROR: 0,
        gb: 1,
        tb: 2,
        sb: 3,
        nb: 4,
        rb: 5,
        ub: 6,
        Ia: 7,
        TIMEOUT: 8,
        xb: 9
    }, bl = {
        lb: "complete",
        Hb: "success",
        Ja: "error",
        Ia: "abort",
        zb: "ready",
        Ab: "readystatechange",
        TIMEOUT: "timeout",
        vb: "incrementaldata",
        yb: "progress",
        ob: "downloadprogress",
        Pb: "uploadprogress"
    }, ws;
    function Ni() {}
    P(Ni, _s),
    Ni.prototype.g = function() {
        return new XMLHttpRequest
    }
    ,
    Ni.prototype.i = function() {
        return {}
    }
    ,
    ws = new Ni;
    function ne(s, a, c, h) {
        this.j = s,
        this.i = a,
        this.l = c,
        this.R = h || 1,
        this.U = new Rn(this),
        this.I = 45e3,
        this.H = null,
        this.o = !1,
        this.m = this.A = this.v = this.L = this.F = this.S = this.B = null,
        this.D = [],
        this.g = null,
        this.C = 0,
        this.s = this.u = null,
        this.X = -1,
        this.J = !1,
        this.O = 0,
        this.M = null,
        this.W = this.K = this.T = this.P = !1,
        this.h = new Sl
    }
    function Sl() {
        this.i = null,
        this.g = "",
        this.h = !1
    }
    var Al = {}
      , Es = {};
    function Ts(s, a, c) {
        s.L = 1,
        s.v = Bi(Ut(a)),
        s.m = c,
        s.P = !0,
        Cl(s, null)
    }
    function Cl(s, a) {
        s.F = Date.now(),
        Fi(s),
        s.A = Ut(s.v);
        var c = s.A
          , h = s.R;
        Array.isArray(h) || (h = [String(h)]),
        jl(c.i, "t", h),
        s.C = 0,
        c = s.j.J,
        s.h = new Sl,
        s.g = sc(s.j, c ? a : null, !s.m),
        0 < s.O && (s.M = new Bd(S(s.Y, s, s.g),s.O)),
        a = s.U,
        c = s.g,
        h = s.ca;
        var T = "readystatechange";
        Array.isArray(T) || (T && (gl[0] = T.toString()),
        T = gl);
        for (var b = 0; b < T.length; b++) {
            var R = cl(c, T[b], h || a.handleEvent, !1, a.h || a);
            if (!R)
                break;
            a.g[R.key] = R
        }
        a = s.H ? m(s.H) : {},
        s.m ? (s.u || (s.u = "POST"),
        a["Content-Type"] = "application/x-www-form-urlencoded",
        s.g.ea(s.A, s.u, s.m, a)) : (s.u = "GET",
        s.g.ea(s.A, s.u, null, a)),
        Pn(),
        zd(s.i, s.u, s.A, s.l, s.R, s.m)
    }
    ne.prototype.ca = function(s) {
        s = s.target;
        let a = this.M;
        a && $t(s) == 3 ? a.j() : this.Y(s)
    }
    ,
    ne.prototype.Y = function(s) {
        try {
            if (s == this.g)
                t: {
                    let mt = $t(this.g);
                    var a = this.g.Ba();
                    let Ve = this.g.Z();
                    if (!(3 > mt) && (mt != 3 || this.g && (this.h.h || this.g.oa() || Hl(this.g)))) {
                        this.J || mt != 4 || a == 7 || (a == 8 || 0 >= Ve ? Pn(3) : Pn(2)),
                        Is(this);
                        var c = this.g.Z();
                        this.X = c;
                        e: if (Rl(this)) {
                            var h = Hl(this.g);
                            s = "";
                            var T = h.length
                              , b = $t(this.g) == 4;
                            if (!this.h.i) {
                                if (typeof TextDecoder > "u") {
                                    fe(this),
                                    Vn(this);
                                    var R = "";
                                    break e
                                }
                                this.h.i = new u.TextDecoder
                            }
                            for (a = 0; a < T; a++)
                                this.h.h = !0,
                                s += this.h.i.decode(h[a], {
                                    stream: !(b && a == T - 1)
                                });
                            h.length = 0,
                            this.h.g += s,
                            this.C = 0,
                            R = this.h.g
                        } else
                            R = this.g.oa();
                        if (this.o = c == 200,
                        Ud(this.i, this.u, this.A, this.l, this.R, mt, c),
                        this.o) {
                            if (this.T && !this.K) {
                                e: {
                                    if (this.g) {
                                        var W, ht = this.g;
                                        if ((W = ht.g ? ht.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !$(W)) {
                                            var U = W;
                                            break e
                                        }
                                    }
                                    U = null
                                }
                                if (c = U)
                                    Pe(this.i, this.l, c, "Initial handshake response via X-HTTP-Initial-Response"),
                                    this.K = !0,
                                    bs(this, c);
                                else {
                                    this.o = !1,
                                    this.s = 3,
                                    vt(12),
                                    fe(this),
                                    Vn(this);
                                    break t
                                }
                            }
                            if (this.P) {
                                c = !0;
                                let Pt;
                                for (; !this.J && this.C < R.length; )
                                    if (Pt = Kd(this, R),
                                    Pt == Es) {
                                        mt == 4 && (this.s = 4,
                                        vt(14),
                                        c = !1),
                                        Pe(this.i, this.l, null, "[Incomplete Response]");
                                        break
                                    } else if (Pt == Al) {
                                        this.s = 4,
                                        vt(15),
                                        Pe(this.i, this.l, R, "[Invalid Chunk]"),
                                        c = !1;
                                        break
                                    } else
                                        Pe(this.i, this.l, Pt, null),
                                        bs(this, Pt);
                                if (Rl(this) && this.C != 0 && (this.h.g = this.h.g.slice(this.C),
                                this.C = 0),
                                mt != 4 || R.length != 0 || this.h.h || (this.s = 1,
                                vt(16),
                                c = !1),
                                this.o = this.o && c,
                                !c)
                                    Pe(this.i, this.l, R, "[Invalid Chunked Response]"),
                                    fe(this),
                                    Vn(this);
                                else if (0 < R.length && !this.W) {
                                    this.W = !0;
                                    var pt = this.j;
                                    pt.g == this && pt.ba && !pt.M && (pt.j.info("Great, no buffering proxy detected. Bytes received: " + R.length),
                                    Ps(pt),
                                    pt.M = !0,
                                    vt(11))
                                }
                            } else
                                Pe(this.i, this.l, R, null),
                                bs(this, R);
                            mt == 4 && fe(this),
                            this.o && !this.J && (mt == 4 ? ec(this.j, this) : (this.o = !1,
                            Fi(this)))
                        } else
                            uf(this.g),
                            c == 400 && 0 < R.indexOf("Unknown SID") ? (this.s = 3,
                            vt(12)) : (this.s = 0,
                            vt(13)),
                            fe(this),
                            Vn(this)
                    }
                }
        } catch {} finally {}
    }
    ;
    function Rl(s) {
        return s.g ? s.u == "GET" && s.L != 2 && s.j.Ca : !1
    }
    function Kd(s, a) {
        var c = s.C
          , h = a.indexOf(`
`, c);
        return h == -1 ? Es : (c = Number(a.substring(c, h)),
        isNaN(c) ? Al : (h += 1,
        h + c > a.length ? Es : (a = a.slice(h, h + c),
        s.C = h + c,
        a)))
    }
    ne.prototype.cancel = function() {
        this.J = !0,
        fe(this)
    }
    ;
    function Fi(s) {
        s.S = Date.now() + s.I,
        Dl(s, s.I)
    }
    function Dl(s, a) {
        if (s.B != null)
            throw Error("WatchDog timer not null");
        s.B = xn(S(s.ba, s), a)
    }
    function Is(s) {
        s.B && (u.clearTimeout(s.B),
        s.B = null)
    }
    ne.prototype.ba = function() {
        this.B = null;
        let s = Date.now();
        0 <= s - this.S ? ($d(this.i, this.A),
        this.L != 2 && (Pn(),
        vt(17)),
        fe(this),
        this.s = 2,
        Vn(this)) : Dl(this, this.S - s)
    }
    ;
    function Vn(s) {
        s.j.G == 0 || s.J || ec(s.j, s)
    }
    function fe(s) {
        Is(s);
        var a = s.M;
        a && typeof a.ma == "function" && a.ma(),
        s.M = null,
        _l(s.U),
        s.g && (a = s.g,
        s.g = null,
        a.abort(),
        a.ma())
    }
    function bs(s, a) {
        try {
            var c = s.j;
            if (c.G != 0 && (c.g == s || Ss(c.h, s))) {
                if (!s.K && Ss(c.h, s) && c.G == 3) {
                    try {
                        var h = c.Da.g.parse(a)
                    } catch {
                        h = null
                    }
                    if (Array.isArray(h) && h.length == 3) {
                        var T = h;
                        if (T[0] == 0) {
                            t: if (!c.u) {
                                if (c.g)
                                    if (c.g.F + 3e3 < s.F)
                                        $i(c),
                                        zi(c);
                                    else
                                        break t;
                                Ds(c),
                                vt(18)
                            }
                        } else
                            c.za = T[1],
                            0 < c.za - c.T && 37500 > T[2] && c.F && c.v == 0 && !c.C && (c.C = xn(S(c.Za, c), 6e3));
                        if (1 >= kl(c.h) && c.ca) {
                            try {
                                c.ca()
                            } catch {}
                            c.ca = void 0
                        }
                    } else
                        me(c, 11)
                } else if ((s.K || c.g == s) && $i(c),
                !$(a))
                    for (T = c.Da.g.parse(a),
                    a = 0; a < T.length; a++) {
                        let U = T[a];
                        if (c.T = U[0],
                        U = U[1],
                        c.G == 2)
                            if (U[0] == "c") {
                                c.K = U[1],
                                c.ia = U[2];
                                let pt = U[3];
                                pt != null && (c.la = pt,
                                c.j.info("VER=" + c.la));
                                let mt = U[4];
                                mt != null && (c.Aa = mt,
                                c.j.info("SVER=" + c.Aa));
                                let Ve = U[5];
                                Ve != null && typeof Ve == "number" && 0 < Ve && (h = 1.5 * Ve,
                                c.L = h,
                                c.j.info("backChannelRequestTimeoutMs_=" + h)),
                                h = c;
                                let Pt = s.g;
                                if (Pt) {
                                    let Ki = Pt.g ? Pt.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                                    if (Ki) {
                                        var b = h.h;
                                        b.g || Ki.indexOf("spdy") == -1 && Ki.indexOf("quic") == -1 && Ki.indexOf("h2") == -1 || (b.j = b.l,
                                        b.g = new Set,
                                        b.h && (As(b, b.h),
                                        b.h = null))
                                    }
                                    if (h.D) {
                                        let xs = Pt.g ? Pt.g.getResponseHeader("X-HTTP-Session-Id") : null;
                                        xs && (h.ya = xs,
                                        Q(h.I, h.D, xs))
                                    }
                                }
                                c.G = 3,
                                c.l && c.l.ua(),
                                c.ba && (c.R = Date.now() - s.F,
                                c.j.info("Handshake RTT: " + c.R + "ms")),
                                h = c;
                                var R = s;
                                if (h.qa = rc(h, h.J ? h.ia : null, h.W),
                                R.K) {
                                    Vl(h.h, R);
                                    var W = R
                                      , ht = h.L;
                                    ht && (W.I = ht),
                                    W.B && (Is(W),
                                    Fi(W)),
                                    h.g = R
                                } else
                                    Zl(h);
                                0 < c.i.length && Ui(c)
                            } else
                                U[0] != "stop" && U[0] != "close" || me(c, 7);
                        else
                            c.G == 3 && (U[0] == "stop" || U[0] == "close" ? U[0] == "stop" ? me(c, 7) : Rs(c) : U[0] != "noop" && c.l && c.l.ta(U),
                            c.v = 0)
                    }
            }
            Pn(4)
        } catch {}
    }
    var Wd = class {
        constructor(s, a) {
            this.g = s,
            this.map = a
        }
    }
    ;
    function Pl(s) {
        this.l = s || 10,
        u.PerformanceNavigationTiming ? (s = u.performance.getEntriesByType("navigation"),
        s = 0 < s.length && (s[0].nextHopProtocol == "hq" || s[0].nextHopProtocol == "h2")) : s = !!(u.chrome && u.chrome.loadTimes && u.chrome.loadTimes() && u.chrome.loadTimes().wasFetchedViaSpdy),
        this.j = s ? this.l : 1,
        this.g = null,
        1 < this.j && (this.g = new Set),
        this.h = null,
        this.i = []
    }
    function xl(s) {
        return s.h ? !0 : s.g ? s.g.size >= s.j : !1
    }
    function kl(s) {
        return s.h ? 1 : s.g ? s.g.size : 0
    }
    function Ss(s, a) {
        return s.h ? s.h == a : s.g ? s.g.has(a) : !1
    }
    function As(s, a) {
        s.g ? s.g.add(a) : s.h = a
    }
    function Vl(s, a) {
        s.h && s.h == a ? s.h = null : s.g && s.g.has(a) && s.g.delete(a)
    }
    Pl.prototype.cancel = function() {
        if (this.i = Ol(this),
        this.h)
            this.h.cancel(),
            this.h = null;
        else if (this.g && this.g.size !== 0) {
            for (let s of this.g.values())
                s.cancel();
            this.g.clear()
        }
    }
    ;
    function Ol(s) {
        if (s.h != null)
            return s.i.concat(s.h.D);
        if (s.g != null && s.g.size !== 0) {
            let a = s.i;
            for (let c of s.g.values())
                a = a.concat(c.D);
            return a
        }
        return O(s.i)
    }
    function Hd(s) {
        if (s.V && typeof s.V == "function")
            return s.V();
        if (typeof Map < "u" && s instanceof Map || typeof Set < "u" && s instanceof Set)
            return Array.from(s.values());
        if (typeof s == "string")
            return s.split("");
        if (d(s)) {
            for (var a = [], c = s.length, h = 0; h < c; h++)
                a.push(s[h]);
            return a
        }
        a = [],
        c = 0;
        for (h in s)
            a[c++] = s[h];
        return a
    }
    function Qd(s) {
        if (s.na && typeof s.na == "function")
            return s.na();
        if (!s.V || typeof s.V != "function") {
            if (typeof Map < "u" && s instanceof Map)
                return Array.from(s.keys());
            if (!(typeof Set < "u" && s instanceof Set)) {
                if (d(s) || typeof s == "string") {
                    var a = [];
                    s = s.length;
                    for (var c = 0; c < s; c++)
                        a.push(c);
                    return a
                }
                a = [],
                c = 0;
                for (let h in s)
                    a[c++] = h;
                return a
            }
        }
    }
    function Nl(s, a) {
        if (s.forEach && typeof s.forEach == "function")
            s.forEach(a, void 0);
        else if (d(s) || typeof s == "string")
            Array.prototype.forEach.call(s, a, void 0);
        else
            for (var c = Qd(s), h = Hd(s), T = h.length, b = 0; b < T; b++)
                a.call(void 0, h[b], c && c[b], s)
    }
    var Fl = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    function Xd(s, a) {
        if (s) {
            s = s.split("&");
            for (var c = 0; c < s.length; c++) {
                var h = s[c].indexOf("=")
                  , T = null;
                if (0 <= h) {
                    var b = s[c].substring(0, h);
                    T = s[c].substring(h + 1)
                } else
                    b = s[c];
                a(b, T ? decodeURIComponent(T.replace(/\+/g, " ")) : "")
            }
        }
    }
    function pe(s) {
        if (this.g = this.o = this.j = "",
        this.s = null,
        this.m = this.l = "",
        this.h = !1,
        s instanceof pe) {
            this.h = s.h,
            Mi(this, s.j),
            this.o = s.o,
            this.g = s.g,
            Li(this, s.s),
            this.l = s.l;
            var a = s.i
              , c = new Fn;
            c.i = a.i,
            a.g && (c.g = new Map(a.g),
            c.h = a.h),
            Ml(this, c),
            this.m = s.m
        } else
            s && (a = String(s).match(Fl)) ? (this.h = !1,
            Mi(this, a[1] || "", !0),
            this.o = On(a[2] || ""),
            this.g = On(a[3] || "", !0),
            Li(this, a[4]),
            this.l = On(a[5] || "", !0),
            Ml(this, a[6] || "", !0),
            this.m = On(a[7] || "")) : (this.h = !1,
            this.i = new Fn(null,this.h))
    }
    pe.prototype.toString = function() {
        var s = []
          , a = this.j;
        a && s.push(Nn(a, Ll, !0), ":");
        var c = this.g;
        return (c || a == "file") && (s.push("//"),
        (a = this.o) && s.push(Nn(a, Ll, !0), "@"),
        s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        c = this.s,
        c != null && s.push(":", String(c))),
        (c = this.l) && (this.g && c.charAt(0) != "/" && s.push("/"),
        s.push(Nn(c, c.charAt(0) == "/" ? Zd : Jd, !0))),
        (c = this.i.toString()) && s.push("?", c),
        (c = this.m) && s.push("#", Nn(c, ef)),
        s.join("")
    }
    ;
    function Ut(s) {
        return new pe(s)
    }
    function Mi(s, a, c) {
        s.j = c ? On(a, !0) : a,
        s.j && (s.j = s.j.replace(/:$/, ""))
    }
    function Li(s, a) {
        if (a) {
            if (a = Number(a),
            isNaN(a) || 0 > a)
                throw Error("Bad port number " + a);
            s.s = a
        } else
            s.s = null
    }
    function Ml(s, a, c) {
        a instanceof Fn ? (s.i = a,
        nf(s.i, s.h)) : (c || (a = Nn(a, tf)),
        s.i = new Fn(a,s.h))
    }
    function Q(s, a, c) {
        s.i.set(a, c)
    }
    function Bi(s) {
        return Q(s, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)),
        s
    }
    function On(s, a) {
        return s ? a ? decodeURI(s.replace(/%25/g, "%2525")) : decodeURIComponent(s) : ""
    }
    function Nn(s, a, c) {
        return typeof s == "string" ? (s = encodeURI(s).replace(a, Yd),
        c && (s = s.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        s) : null
    }
    function Yd(s) {
        return s = s.charCodeAt(0),
        "%" + (s >> 4 & 15).toString(16) + (s & 15).toString(16)
    }
    var Ll = /[#\/\?@]/g
      , Jd = /[#\?:]/g
      , Zd = /[#\?]/g
      , tf = /[#\?@]/g
      , ef = /#/g;
    function Fn(s, a) {
        this.h = this.g = null,
        this.i = s || null,
        this.j = !!a
    }
    function ie(s) {
        s.g || (s.g = new Map,
        s.h = 0,
        s.i && Xd(s.i, function(a, c) {
            s.add(decodeURIComponent(a.replace(/\+/g, " ")), c)
        }))
    }
    i = Fn.prototype,
    i.add = function(s, a) {
        ie(this),
        this.i = null,
        s = xe(this, s);
        var c = this.g.get(s);
        return c || this.g.set(s, c = []),
        c.push(a),
        this.h += 1,
        this
    }
    ;
    function Bl(s, a) {
        ie(s),
        a = xe(s, a),
        s.g.has(a) && (s.i = null,
        s.h -= s.g.get(a).length,
        s.g.delete(a))
    }
    function ql(s, a) {
        return ie(s),
        a = xe(s, a),
        s.g.has(a)
    }
    i.forEach = function(s, a) {
        ie(this),
        this.g.forEach(function(c, h) {
            c.forEach(function(T) {
                s.call(a, T, h, this)
            }, this)
        }, this)
    }
    ,
    i.na = function() {
        ie(this);
        let s = Array.from(this.g.values())
          , a = Array.from(this.g.keys())
          , c = [];
        for (let h = 0; h < a.length; h++) {
            let T = s[h];
            for (let b = 0; b < T.length; b++)
                c.push(a[h])
        }
        return c
    }
    ,
    i.V = function(s) {
        ie(this);
        let a = [];
        if (typeof s == "string")
            ql(this, s) && (a = a.concat(this.g.get(xe(this, s))));
        else {
            s = Array.from(this.g.values());
            for (let c = 0; c < s.length; c++)
                a = a.concat(s[c])
        }
        return a
    }
    ,
    i.set = function(s, a) {
        return ie(this),
        this.i = null,
        s = xe(this, s),
        ql(this, s) && (this.h -= this.g.get(s).length),
        this.g.set(s, [a]),
        this.h += 1,
        this
    }
    ,
    i.get = function(s, a) {
        return s ? (s = this.V(s),
        0 < s.length ? String(s[0]) : a) : a
    }
    ;
    function jl(s, a, c) {
        Bl(s, a),
        0 < c.length && (s.i = null,
        s.g.set(xe(s, a), O(c)),
        s.h += c.length)
    }
    i.toString = function() {
        if (this.i)
            return this.i;
        if (!this.g)
            return "";
        let s = []
          , a = Array.from(this.g.keys());
        for (var c = 0; c < a.length; c++) {
            var h = a[c];
            let b = encodeURIComponent(String(h))
              , R = this.V(h);
            for (h = 0; h < R.length; h++) {
                var T = b;
                R[h] !== "" && (T += "=" + encodeURIComponent(String(R[h]))),
                s.push(T)
            }
        }
        return this.i = s.join("&")
    }
    ;
    function xe(s, a) {
        return a = String(a),
        s.j && (a = a.toLowerCase()),
        a
    }
    function nf(s, a) {
        a && !s.j && (ie(s),
        s.i = null,
        s.g.forEach(function(c, h) {
            var T = h.toLowerCase();
            h != T && (Bl(this, h),
            jl(this, T, c))
        }, s)),
        s.j = a
    }
    function rf(s, a) {
        let c = new kn;
        if (u.Image) {
            let h = new Image;
            h.onload = C(re, c, "TestLoadImage: loaded", !0, a, h),
            h.onerror = C(re, c, "TestLoadImage: error", !1, a, h),
            h.onabort = C(re, c, "TestLoadImage: abort", !1, a, h),
            h.ontimeout = C(re, c, "TestLoadImage: timeout", !1, a, h),
            u.setTimeout(function() {
                h.ontimeout && h.ontimeout()
            }, 1e4),
            h.src = s
        } else
            a(!1)
    }
    function sf(s, a) {
        let c = new kn
          , h = new AbortController
          , T = setTimeout( () => {
            h.abort(),
            re(c, "TestPingServer: timeout", !1, a)
        }
        , 1e4);
        fetch(s, {
            signal: h.signal
        }).then(b => {
            clearTimeout(T),
            b.ok ? re(c, "TestPingServer: ok", !0, a) : re(c, "TestPingServer: server error", !1, a)
        }
        ).catch( () => {
            clearTimeout(T),
            re(c, "TestPingServer: error", !1, a)
        }
        )
    }
    function re(s, a, c, h, T) {
        try {
            T && (T.onload = null,
            T.onerror = null,
            T.onabort = null,
            T.ontimeout = null),
            h(c)
        } catch {}
    }
    function of() {
        this.g = new jd
    }
    function af(s, a, c) {
        let h = c || "";
        try {
            Nl(s, function(T, b) {
                let R = T;
                f(T) && (R = gs(T)),
                a.push(h + b + "=" + encodeURIComponent(R))
            })
        } catch (T) {
            throw a.push(h + "type=" + encodeURIComponent("_badmap")),
            T
        }
    }
    function Mn(s) {
        this.l = s.Ub || null,
        this.j = s.eb || !1
    }
    P(Mn, _s),
    Mn.prototype.g = function() {
        return new qi(this.l,this.j)
    }
    ,
    Mn.prototype.i = (function(s) {
        return function() {
            return s
        }
    }
    )({});
    function qi(s, a) {
        ft.call(this),
        this.D = s,
        this.o = a,
        this.m = void 0,
        this.status = this.readyState = 0,
        this.responseType = this.responseText = this.response = this.statusText = "",
        this.onreadystatechange = null,
        this.u = new Headers,
        this.h = null,
        this.B = "GET",
        this.A = "",
        this.g = !1,
        this.v = this.j = this.l = null
    }
    P(qi, ft),
    i = qi.prototype,
    i.open = function(s, a) {
        if (this.readyState != 0)
            throw this.abort(),
            Error("Error reopening a connection");
        this.B = s,
        this.A = a,
        this.readyState = 1,
        Bn(this)
    }
    ,
    i.send = function(s) {
        if (this.readyState != 1)
            throw this.abort(),
            Error("need to call open() first. ");
        this.g = !0;
        let a = {
            headers: this.u,
            method: this.B,
            credentials: this.m,
            cache: void 0
        };
        s && (a.body = s),
        (this.D || u).fetch(new Request(this.A,a)).then(this.Sa.bind(this), this.ga.bind(this))
    }
    ,
    i.abort = function() {
        this.response = this.responseText = "",
        this.u = new Headers,
        this.status = 0,
        this.j && this.j.cancel("Request was aborted.").catch( () => {}
        ),
        1 <= this.readyState && this.g && this.readyState != 4 && (this.g = !1,
        Ln(this)),
        this.readyState = 0
    }
    ,
    i.Sa = function(s) {
        if (this.g && (this.l = s,
        this.h || (this.status = this.l.status,
        this.statusText = this.l.statusText,
        this.h = s.headers,
        this.readyState = 2,
        Bn(this)),
        this.g && (this.readyState = 3,
        Bn(this),
        this.g)))
            if (this.responseType === "arraybuffer")
                s.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
            else if (typeof u.ReadableStream < "u" && "body"in s) {
                if (this.j = s.body.getReader(),
                this.o) {
                    if (this.responseType)
                        throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
                    this.response = []
                } else
                    this.response = this.responseText = "",
                    this.v = new TextDecoder;
                zl(this)
            } else
                s.text().then(this.Ra.bind(this), this.ga.bind(this))
    }
    ;
    function zl(s) {
        s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))
    }
    i.Pa = function(s) {
        if (this.g) {
            if (this.o && s.value)
                this.response.push(s.value);
            else if (!this.o) {
                var a = s.value ? s.value : new Uint8Array(0);
                (a = this.v.decode(a, {
                    stream: !s.done
                })) && (this.response = this.responseText += a)
            }
            s.done ? Ln(this) : Bn(this),
            this.readyState == 3 && zl(this)
        }
    }
    ,
    i.Ra = function(s) {
        this.g && (this.response = this.responseText = s,
        Ln(this))
    }
    ,
    i.Qa = function(s) {
        this.g && (this.response = s,
        Ln(this))
    }
    ,
    i.ga = function() {
        this.g && Ln(this)
    }
    ;
    function Ln(s) {
        s.readyState = 4,
        s.l = null,
        s.j = null,
        s.v = null,
        Bn(s)
    }
    i.setRequestHeader = function(s, a) {
        this.u.append(s, a)
    }
    ,
    i.getResponseHeader = function(s) {
        return this.h && this.h.get(s.toLowerCase()) || ""
    }
    ,
    i.getAllResponseHeaders = function() {
        if (!this.h)
            return "";
        let s = []
          , a = this.h.entries();
        for (var c = a.next(); !c.done; )
            c = c.value,
            s.push(c[0] + ": " + c[1]),
            c = a.next();
        return s.join(`\r
`)
    }
    ;
    function Bn(s) {
        s.onreadystatechange && s.onreadystatechange.call(s)
    }
    Object.defineProperty(qi.prototype, "withCredentials", {
        get: function() {
            return this.m === "include"
        },
        set: function(s) {
            this.m = s ? "include" : "same-origin"
        }
    });
    function Ul(s) {
        let a = "";
        return H(s, function(c, h) {
            a += h,
            a += ":",
            a += c,
            a += `\r
`
        }),
        a
    }
    function Cs(s, a, c) {
        t: {
            for (h in c) {
                var h = !1;
                break t
            }
            h = !0
        }
        h || (c = Ul(c),
        typeof s == "string" ? c != null && encodeURIComponent(String(c)) : Q(s, a, c))
    }
    function Z(s) {
        ft.call(this),
        this.headers = new Map,
        this.o = s || null,
        this.h = !1,
        this.v = this.g = null,
        this.D = "",
        this.m = 0,
        this.l = "",
        this.j = this.B = this.u = this.A = !1,
        this.I = null,
        this.H = "",
        this.J = !1
    }
    P(Z, ft);
    var lf = /^https?$/i
      , cf = ["POST", "PUT"];
    i = Z.prototype,
    i.Ha = function(s) {
        this.J = s
    }
    ,
    i.ea = function(s, a, c, h) {
        if (this.g)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + s);
        a = a ? a.toUpperCase() : "GET",
        this.D = s,
        this.l = "",
        this.m = 0,
        this.A = !1,
        this.h = !0,
        this.g = this.o ? this.o.g() : ws.g(),
        this.v = this.o ? yl(this.o) : yl(ws),
        this.g.onreadystatechange = S(this.Ea, this);
        try {
            this.B = !0,
            this.g.open(a, String(s), !0),
            this.B = !1
        } catch (b) {
            $l(this, b);
            return
        }
        if (s = c || "",
        c = new Map(this.headers),
        h)
            if (Object.getPrototypeOf(h) === Object.prototype)
                for (var T in h)
                    c.set(T, h[T]);
            else if (typeof h.keys == "function" && typeof h.get == "function")
                for (let b of h.keys())
                    c.set(b, h.get(b));
            else
                throw Error("Unknown input type for opt_headers: " + String(h));
        h = Array.from(c.keys()).find(b => b.toLowerCase() == "content-type"),
        T = u.FormData && s instanceof u.FormData,
        !(0 <= Array.prototype.indexOf.call(cf, a, void 0)) || h || T || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        for (let[b,R] of c)
            this.g.setRequestHeader(b, R);
        this.H && (this.g.responseType = this.H),
        "withCredentials"in this.g && this.g.withCredentials !== this.J && (this.g.withCredentials = this.J);
        try {
            Wl(this),
            this.u = !0,
            this.g.send(s),
            this.u = !1
        } catch (b) {
            $l(this, b)
        }
    }
    ;
    function $l(s, a) {
        s.h = !1,
        s.g && (s.j = !0,
        s.g.abort(),
        s.j = !1),
        s.l = a,
        s.m = 5,
        Gl(s),
        ji(s)
    }
    function Gl(s) {
        s.A || (s.A = !0,
        yt(s, "complete"),
        yt(s, "error"))
    }
    i.abort = function(s) {
        this.g && this.h && (this.h = !1,
        this.j = !0,
        this.g.abort(),
        this.j = !1,
        this.m = s || 7,
        yt(this, "complete"),
        yt(this, "abort"),
        ji(this))
    }
    ,
    i.N = function() {
        this.g && (this.h && (this.h = !1,
        this.j = !0,
        this.g.abort(),
        this.j = !1),
        ji(this, !0)),
        Z.aa.N.call(this)
    }
    ,
    i.Ea = function() {
        this.s || (this.B || this.u || this.j ? Kl(this) : this.bb())
    }
    ,
    i.bb = function() {
        Kl(this)
    }
    ;
    function Kl(s) {
        if (s.h && typeof l < "u" && (!s.v[1] || $t(s) != 4 || s.Z() != 2)) {
            if (s.u && $t(s) == 4)
                pl(s.Ea, 0, s);
            else if (yt(s, "readystatechange"),
            $t(s) == 4) {
                s.h = !1;
                try {
                    let R = s.Z();
                    t: switch (R) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var a = !0;
                        break t;
                    default:
                        a = !1
                    }
                    var c;
                    if (!(c = a)) {
                        var h;
                        if (h = R === 0) {
                            var T = String(s.D).match(Fl)[1] || null;
                            !T && u.self && u.self.location && (T = u.self.location.protocol.slice(0, -1)),
                            h = !lf.test(T ? T.toLowerCase() : "")
                        }
                        c = h
                    }
                    if (c)
                        yt(s, "complete"),
                        yt(s, "success");
                    else {
                        s.m = 6;
                        try {
                            var b = 2 < $t(s) ? s.g.statusText : ""
                        } catch {
                            b = ""
                        }
                        s.l = b + " [" + s.Z() + "]",
                        Gl(s)
                    }
                } finally {
                    ji(s)
                }
            }
        }
    }
    function ji(s, a) {
        if (s.g) {
            Wl(s);
            let c = s.g
              , h = s.v[0] ? () => {}
            : null;
            s.g = null,
            s.v = null,
            a || yt(s, "ready");
            try {
                c.onreadystatechange = h
            } catch {}
        }
    }
    function Wl(s) {
        s.I && (u.clearTimeout(s.I),
        s.I = null)
    }
    i.isActive = function() {
        return !!this.g
    }
    ;
    function $t(s) {
        return s.g ? s.g.readyState : 0
    }
    i.Z = function() {
        try {
            return 2 < $t(this) ? this.g.status : -1
        } catch {
            return -1
        }
    }
    ,
    i.oa = function() {
        try {
            return this.g ? this.g.responseText : ""
        } catch {
            return ""
        }
    }
    ,
    i.Oa = function(s) {
        if (this.g) {
            var a = this.g.responseText;
            return s && a.indexOf(s) == 0 && (a = a.substring(s.length)),
            qd(a)
        }
    }
    ;
    function Hl(s) {
        try {
            if (!s.g)
                return null;
            if ("response"in s.g)
                return s.g.response;
            switch (s.H) {
            case "":
            case "text":
                return s.g.responseText;
            case "arraybuffer":
                if ("mozResponseArrayBuffer"in s.g)
                    return s.g.mozResponseArrayBuffer
            }
            return null
        } catch {
            return null
        }
    }
    function uf(s) {
        let a = {};
        s = (s.g && 2 <= $t(s) && s.g.getAllResponseHeaders() || "").split(`\r
`);
        for (let h = 0; h < s.length; h++) {
            if ($(s[h]))
                continue;
            var c = v(s[h]);
            let T = c[0];
            if (c = c[1],
            typeof c != "string")
                continue;
            c = c.trim();
            let b = a[T] || [];
            a[T] = b,
            b.push(c)
        }
        w(a, function(h) {
            return h.join(", ")
        })
    }
    i.Ba = function() {
        return this.m
    }
    ,
    i.Ka = function() {
        return typeof this.l == "string" ? this.l : String(this.l)
    }
    ;
    function qn(s, a, c) {
        return c && c.internalChannelParams && c.internalChannelParams[s] || a
    }
    function Ql(s) {
        this.Aa = 0,
        this.i = [],
        this.j = new kn,
        this.ia = this.qa = this.I = this.W = this.g = this.ya = this.D = this.H = this.m = this.S = this.o = null,
        this.Ya = this.U = 0,
        this.Va = qn("failFast", !1, s),
        this.F = this.C = this.u = this.s = this.l = null,
        this.X = !0,
        this.za = this.T = -1,
        this.Y = this.v = this.B = 0,
        this.Ta = qn("baseRetryDelayMs", 5e3, s),
        this.cb = qn("retryDelaySeedMs", 1e4, s),
        this.Wa = qn("forwardChannelMaxRetries", 2, s),
        this.wa = qn("forwardChannelRequestTimeoutMs", 2e4, s),
        this.pa = s && s.xmlHttpFactory || void 0,
        this.Xa = s && s.Tb || void 0,
        this.Ca = s && s.useFetchStreams || !1,
        this.L = void 0,
        this.J = s && s.supportsCrossDomainXhr || !1,
        this.K = "",
        this.h = new Pl(s && s.concurrentRequestLimit),
        this.Da = new of,
        this.P = s && s.fastHandshake || !1,
        this.O = s && s.encodeInitMessageHeaders || !1,
        this.P && this.O && (this.O = !1),
        this.Ua = s && s.Rb || !1,
        s && s.xa && this.j.xa(),
        s && s.forceLongPolling && (this.X = !1),
        this.ba = !this.P && this.X && s && s.detectBufferingProxy || !1,
        this.ja = void 0,
        s && s.longPollingTimeout && 0 < s.longPollingTimeout && (this.ja = s.longPollingTimeout),
        this.ca = void 0,
        this.R = 0,
        this.M = !1,
        this.ka = this.A = null
    }
    i = Ql.prototype,
    i.la = 8,
    i.G = 1,
    i.connect = function(s, a, c, h) {
        vt(0),
        this.W = s,
        this.H = a || {},
        c && h !== void 0 && (this.H.OSID = c,
        this.H.OAID = h),
        this.F = this.X,
        this.I = rc(this, null, this.W),
        Ui(this)
    }
    ;
    function Rs(s) {
        if (Xl(s),
        s.G == 3) {
            var a = s.U++
              , c = Ut(s.I);
            if (Q(c, "SID", s.K),
            Q(c, "RID", a),
            Q(c, "TYPE", "terminate"),
            jn(s, c),
            a = new ne(s,s.j,a),
            a.L = 2,
            a.v = Bi(Ut(c)),
            c = !1,
            u.navigator && u.navigator.sendBeacon)
                try {
                    c = u.navigator.sendBeacon(a.v.toString(), "")
                } catch {}
            !c && u.Image && (new Image().src = a.v,
            c = !0),
            c || (a.g = sc(a.j, null),
            a.g.ea(a.v)),
            a.F = Date.now(),
            Fi(a)
        }
        ic(s)
    }
    function zi(s) {
        s.g && (Ps(s),
        s.g.cancel(),
        s.g = null)
    }
    function Xl(s) {
        zi(s),
        s.u && (u.clearTimeout(s.u),
        s.u = null),
        $i(s),
        s.h.cancel(),
        s.s && (typeof s.s == "number" && u.clearTimeout(s.s),
        s.s = null)
    }
    function Ui(s) {
        if (!xl(s.h) && !s.s) {
            s.s = !0;
            var a = s.Ga;
            bn || ll(),
            Sn || (bn(),
            Sn = !0),
            as.add(a, s),
            s.B = 0
        }
    }
    function hf(s, a) {
        return kl(s.h) >= s.h.j - (s.s ? 1 : 0) ? !1 : s.s ? (s.i = a.D.concat(s.i),
        !0) : s.G == 1 || s.G == 2 || s.B >= (s.Va ? 0 : s.Wa) ? !1 : (s.s = xn(S(s.Ga, s, a), nc(s, s.B)),
        s.B++,
        !0)
    }
    i.Ga = function(s) {
        if (this.s)
            if (this.s = null,
            this.G == 1) {
                if (!s) {
                    this.U = Math.floor(1e5 * Math.random()),
                    s = this.U++;
                    let T = new ne(this,this.j,s)
                      , b = this.o;
                    if (this.S && (b ? (b = m(b),
                    y(b, this.S)) : b = this.S),
                    this.m !== null || this.O || (T.H = b,
                    b = null),
                    this.P)
                        t: {
                            for (var a = 0, c = 0; c < this.i.length; c++) {
                                e: {
                                    var h = this.i[c];
                                    if ("__data__"in h.map && (h = h.map.__data__,
                                    typeof h == "string")) {
                                        h = h.length;
                                        break e
                                    }
                                    h = void 0
                                }
                                if (h === void 0)
                                    break;
                                if (a += h,
                                4096 < a) {
                                    a = c;
                                    break t
                                }
                                if (a === 4096 || c === this.i.length - 1) {
                                    a = c + 1;
                                    break t
                                }
                            }
                            a = 1e3
                        }
                    else
                        a = 1e3;
                    a = Jl(this, T, a),
                    c = Ut(this.I),
                    Q(c, "RID", s),
                    Q(c, "CVER", 22),
                    this.D && Q(c, "X-HTTP-Session-Id", this.D),
                    jn(this, c),
                    b && (this.O ? a = "headers=" + encodeURIComponent(String(Ul(b))) + "&" + a : this.m && Cs(c, this.m, b)),
                    As(this.h, T),
                    this.Ua && Q(c, "TYPE", "init"),
                    this.P ? (Q(c, "$req", a),
                    Q(c, "SID", "null"),
                    T.T = !0,
                    Ts(T, c, null)) : Ts(T, c, a),
                    this.G = 2
                }
            } else
                this.G == 3 && (s ? Yl(this, s) : this.i.length == 0 || xl(this.h) || Yl(this))
    }
    ;
    function Yl(s, a) {
        var c;
        a ? c = a.l : c = s.U++;
        let h = Ut(s.I);
        Q(h, "SID", s.K),
        Q(h, "RID", c),
        Q(h, "AID", s.T),
        jn(s, h),
        s.m && s.o && Cs(h, s.m, s.o),
        c = new ne(s,s.j,c,s.B + 1),
        s.m === null && (c.H = s.o),
        a && (s.i = a.D.concat(s.i)),
        a = Jl(s, c, 1e3),
        c.I = Math.round(.5 * s.wa) + Math.round(.5 * s.wa * Math.random()),
        As(s.h, c),
        Ts(c, h, a)
    }
    function jn(s, a) {
        s.H && H(s.H, function(c, h) {
            Q(a, h, c)
        }),
        s.l && Nl({}, function(c, h) {
            Q(a, h, c)
        })
    }
    function Jl(s, a, c) {
        c = Math.min(s.i.length, c);
        var h = s.l ? S(s.l.Na, s.l, s) : null;
        t: {
            var T = s.i;
            let b = -1;
            for (; ; ) {
                let R = ["count=" + c];
                b == -1 ? 0 < c ? (b = T[0].g,
                R.push("ofs=" + b)) : b = 0 : R.push("ofs=" + b);
                let W = !0;
                for (let ht = 0; ht < c; ht++) {
                    let U = T[ht].g
                      , pt = T[ht].map;
                    if (U -= b,
                    0 > U)
                        b = Math.max(0, T[ht].g - 100),
                        W = !1;
                    else
                        try {
                            af(pt, R, "req" + U + "_")
                        } catch {
                            h && h(pt)
                        }
                }
                if (W) {
                    h = R.join("&");
                    break t
                }
            }
        }
        return s = s.i.splice(0, c),
        a.D = s,
        h
    }
    function Zl(s) {
        if (!s.g && !s.u) {
            s.Y = 1;
            var a = s.Fa;
            bn || ll(),
            Sn || (bn(),
            Sn = !0),
            as.add(a, s),
            s.v = 0
        }
    }
    function Ds(s) {
        return s.g || s.u || 3 <= s.v ? !1 : (s.Y++,
        s.u = xn(S(s.Fa, s), nc(s, s.v)),
        s.v++,
        !0)
    }
    i.Fa = function() {
        if (this.u = null,
        tc(this),
        this.ba && !(this.M || this.g == null || 0 >= this.R)) {
            var s = 2 * this.R;
            this.j.info("BP detection timer enabled: " + s),
            this.A = xn(S(this.ab, this), s)
        }
    }
    ,
    i.ab = function() {
        this.A && (this.A = null,
        this.j.info("BP detection timeout reached."),
        this.j.info("Buffering proxy detected and switch to long-polling!"),
        this.F = !1,
        this.M = !0,
        vt(10),
        zi(this),
        tc(this))
    }
    ;
    function Ps(s) {
        s.A != null && (u.clearTimeout(s.A),
        s.A = null)
    }
    function tc(s) {
        s.g = new ne(s,s.j,"rpc",s.Y),
        s.m === null && (s.g.H = s.o),
        s.g.O = 0;
        var a = Ut(s.qa);
        Q(a, "RID", "rpc"),
        Q(a, "SID", s.K),
        Q(a, "AID", s.T),
        Q(a, "CI", s.F ? "0" : "1"),
        !s.F && s.ja && Q(a, "TO", s.ja),
        Q(a, "TYPE", "xmlhttp"),
        jn(s, a),
        s.m && s.o && Cs(a, s.m, s.o),
        s.L && (s.g.I = s.L);
        var c = s.g;
        s = s.ia,
        c.L = 1,
        c.v = Bi(Ut(a)),
        c.m = null,
        c.P = !0,
        Cl(c, s)
    }
    i.Za = function() {
        this.C != null && (this.C = null,
        zi(this),
        Ds(this),
        vt(19))
    }
    ;
    function $i(s) {
        s.C != null && (u.clearTimeout(s.C),
        s.C = null)
    }
    function ec(s, a) {
        var c = null;
        if (s.g == a) {
            $i(s),
            Ps(s),
            s.g = null;
            var h = 2
        } else if (Ss(s.h, a))
            c = a.D,
            Vl(s.h, a),
            h = 1;
        else
            return;
        if (s.G != 0) {
            if (a.o)
                if (h == 1) {
                    c = a.m ? a.m.length : 0,
                    a = Date.now() - a.F;
                    var T = s.B;
                    h = Vi(),
                    yt(h, new Il(h,c)),
                    Ui(s)
                } else
                    Zl(s);
            else if (T = a.s,
            T == 3 || T == 0 && 0 < a.X || !(h == 1 && hf(s, a) || h == 2 && Ds(s)))
                switch (c && 0 < c.length && (a = s.h,
                a.i = a.i.concat(c)),
                T) {
                case 1:
                    me(s, 5);
                    break;
                case 4:
                    me(s, 10);
                    break;
                case 3:
                    me(s, 6);
                    break;
                default:
                    me(s, 2)
                }
        }
    }
    function nc(s, a) {
        let c = s.Ta + Math.floor(Math.random() * s.cb);
        return s.isActive() || (c *= 2),
        c * a
    }
    function me(s, a) {
        if (s.j.info("Error code " + a),
        a == 2) {
            var c = S(s.fb, s)
              , h = s.Xa;
            let T = !h;
            h = new pe(h || "//www.google.com/images/cleardot.gif"),
            u.location && u.location.protocol == "http" || Mi(h, "https"),
            Bi(h),
            T ? rf(h.toString(), c) : sf(h.toString(), c)
        } else
            vt(2);
        s.G = 0,
        s.l && s.l.sa(a),
        ic(s),
        Xl(s)
    }
    i.fb = function(s) {
        s ? (this.j.info("Successfully pinged google.com"),
        vt(2)) : (this.j.info("Failed to ping google.com"),
        vt(1))
    }
    ;
    function ic(s) {
        if (s.G = 0,
        s.ka = [],
        s.l) {
            let a = Ol(s.h);
            (a.length != 0 || s.i.length != 0) && (V(s.ka, a),
            V(s.ka, s.i),
            s.h.i.length = 0,
            O(s.i),
            s.i.length = 0),
            s.l.ra()
        }
    }
    function rc(s, a, c) {
        var h = c instanceof pe ? Ut(c) : new pe(c);
        if (h.g != "")
            a && (h.g = a + "." + h.g),
            Li(h, h.s);
        else {
            var T = u.location;
            h = T.protocol,
            a = a ? a + "." + T.hostname : T.hostname,
            T = +T.port;
            var b = new pe(null);
            h && Mi(b, h),
            a && (b.g = a),
            T && Li(b, T),
            c && (b.l = c),
            h = b
        }
        return c = s.D,
        a = s.ya,
        c && a && Q(h, c, a),
        Q(h, "VER", s.la),
        jn(s, h),
        h
    }
    function sc(s, a, c) {
        if (a && !s.J)
            throw Error("Can't create secondary domain capable XhrIo object.");
        return a = s.Ca && !s.pa ? new Z(new Mn({
            eb: c
        })) : new Z(s.pa),
        a.Ha(s.J),
        a
    }
    i.isActive = function() {
        return !!this.l && this.l.isActive(this)
    }
    ;
    function oc() {}
    i = oc.prototype,
    i.ua = function() {}
    ,
    i.ta = function() {}
    ,
    i.sa = function() {}
    ,
    i.ra = function() {}
    ,
    i.isActive = function() {
        return !0
    }
    ,
    i.Na = function() {}
    ;
    function Gi() {}
    Gi.prototype.g = function(s, a) {
        return new It(s,a)
    }
    ;
    function It(s, a) {
        ft.call(this),
        this.g = new Ql(a),
        this.l = s,
        this.h = a && a.messageUrlParams || null,
        s = a && a.messageHeaders || null,
        a && a.clientProtocolHeaderRequired && (s ? s["X-Client-Protocol"] = "webchannel" : s = {
            "X-Client-Protocol": "webchannel"
        }),
        this.g.o = s,
        s = a && a.initMessageHeaders || null,
        a && a.messageContentType && (s ? s["X-WebChannel-Content-Type"] = a.messageContentType : s = {
            "X-WebChannel-Content-Type": a.messageContentType
        }),
        a && a.va && (s ? s["X-WebChannel-Client-Profile"] = a.va : s = {
            "X-WebChannel-Client-Profile": a.va
        }),
        this.g.S = s,
        (s = a && a.Sb) && !$(s) && (this.g.m = s),
        this.v = a && a.supportsCrossDomainXhr || !1,
        this.u = a && a.sendRawJson || !1,
        (a = a && a.httpSessionIdParam) && !$(a) && (this.g.D = a,
        s = this.h,
        s !== null && a in s && (s = this.h,
        a in s && delete s[a])),
        this.j = new ke(this)
    }
    P(It, ft),
    It.prototype.m = function() {
        this.g.l = this.j,
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0)
    }
    ,
    It.prototype.close = function() {
        Rs(this.g)
    }
    ,
    It.prototype.o = function(s) {
        var a = this.g;
        if (typeof s == "string") {
            var c = {};
            c.__data__ = s,
            s = c
        } else
            this.u && (c = {},
            c.__data__ = gs(s),
            s = c);
        a.i.push(new Wd(a.Ya++,s)),
        a.G == 3 && Ui(a)
    }
    ,
    It.prototype.N = function() {
        this.g.l = null,
        delete this.j,
        Rs(this.g),
        delete this.g,
        It.aa.N.call(this)
    }
    ;
    function ac(s) {
        ys.call(this),
        s.__headers__ && (this.headers = s.__headers__,
        this.statusCode = s.__status__,
        delete s.__headers__,
        delete s.__status__);
        var a = s.__sm__;
        if (a) {
            t: {
                for (let c in a) {
                    s = c;
                    break t
                }
                s = void 0
            }
            (this.i = s) && (s = this.i,
            a = a !== null && s in a ? a[s] : void 0),
            this.data = a
        } else
            this.data = s
    }
    P(ac, ys);
    function lc() {
        vs.call(this),
        this.status = 1
    }
    P(lc, vs);
    function ke(s) {
        this.g = s
    }
    P(ke, oc),
    ke.prototype.ua = function() {
        yt(this.g, "a")
    }
    ,
    ke.prototype.ta = function(s) {
        yt(this.g, new ac(s))
    }
    ,
    ke.prototype.sa = function(s) {
        yt(this.g, new lc)
    }
    ,
    ke.prototype.ra = function() {
        yt(this.g, "b")
    }
    ,
    Gi.prototype.createWebChannel = Gi.prototype.g,
    It.prototype.send = It.prototype.o,
    It.prototype.open = It.prototype.m,
    It.prototype.close = It.prototype.close,
    to = Qt.createWebChannelTransport = function() {
        return new Gi
    }
    ,
    Zs = Qt.getStatEventTarget = function() {
        return Vi()
    }
    ,
    Js = Qt.Event = de,
    or = Qt.Stat = {
        mb: 0,
        pb: 1,
        qb: 2,
        Jb: 3,
        Ob: 4,
        Lb: 5,
        Mb: 6,
        Kb: 7,
        Ib: 8,
        Nb: 9,
        PROXY: 10,
        NOPROXY: 11,
        Gb: 12,
        Cb: 13,
        Db: 14,
        Bb: 15,
        Eb: 16,
        Fb: 17,
        ib: 18,
        hb: 19,
        jb: 20
    },
    Oi.NO_ERROR = 0,
    Oi.TIMEOUT = 8,
    Oi.HTTP_ERROR = 6,
    Hn = Qt.ErrorCode = Oi,
    bl.COMPLETE = "complete",
    Ys = Qt.EventType = bl,
    vl.EventType = Dn,
    Dn.OPEN = "a",
    Dn.CLOSE = "b",
    Dn.ERROR = "c",
    Dn.MESSAGE = "d",
    ft.prototype.listen = ft.prototype.K,
    qe = Qt.WebChannel = vl,
    df = Qt.FetchXmlHttpFactory = Mn,
    Z.prototype.listenOnce = Z.prototype.L,
    Z.prototype.getLastError = Z.prototype.Ka,
    Z.prototype.getLastErrorCode = Z.prototype.Ba,
    Z.prototype.getStatus = Z.prototype.Z,
    Z.prototype.getResponseJson = Z.prototype.Oa,
    Z.prototype.getResponseText = Z.prototype.oa,
    Z.prototype.send = Z.prototype.ea,
    Z.prototype.setWithCredentials = Z.prototype.Ha,
    Xs = Qt.XhrIo = Z
}
).apply(typeof sr < "u" ? sr : typeof self < "u" ? self : typeof window < "u" ? window : {});
var Xc = "@firebase/firestore"
  , Yc = "4.8.0";
var ct = class {
    constructor(t) {
        this.uid = t
    }
    isAuthenticated() {
        return this.uid != null
    }
    toKey() {
        return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user"
    }
    isEqual(t) {
        return t.uid === this.uid
    }
}
;
ct.UNAUTHENTICATED = new ct(null),
ct.GOOGLE_CREDENTIALS = new ct("google-credentials-uid"),
ct.FIRST_PARTY = new ct("first-party-uid"),
ct.MOCK_USER = new ct("mock-user");
var dn = "11.10.0";
var Ae = new Dc("@firebase/firestore");
function je() {
    return Ae.logLevel
}
function k(i, ...t) {
    if (Ae.logLevel <= Mt.DEBUG) {
        let e = t.map(Na);
        Ae.debug(`Firestore (${dn}): ${i}`, ...e)
    }
}
function Yt(i, ...t) {
    if (Ae.logLevel <= Mt.ERROR) {
        let e = t.map(Na);
        Ae.error(`Firestore (${dn}): ${i}`, ...e)
    }
}
function ae(i, ...t) {
    if (Ae.logLevel <= Mt.WARN) {
        let e = t.map(Na);
        Ae.warn(`Firestore (${dn}): ${i}`, ...e)
    }
}
function Na(i) {
    if (typeof i == "string")
        return i;
    try {
        return (function(e) {
            return JSON.stringify(e)
        }
        )(i)
    } catch {
        return i
    }
}
function M(i, t, e) {
    let n = "Unexpected state";
    typeof t == "string" ? n = t : e = t,
    zu(i, n, e)
}
function zu(i, t, e) {
    let n = `FIRESTORE (${dn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;
    if (e !== void 0)
        try {
            n += " CONTEXT: " + JSON.stringify(e)
        } catch {
            n += " CONTEXT: " + e
        }
    throw Yt(n),
    new Error(n)
}
function Y(i, t, e, n) {
    let r = "Unexpected state";
    typeof e == "string" ? r = e : n = e,
    i || zu(t, r, n)
}
function j(i, t) {
    return i
}
var D = {
    OK: "ok",
    CANCELLED: "cancelled",
    UNKNOWN: "unknown",
    INVALID_ARGUMENT: "invalid-argument",
    DEADLINE_EXCEEDED: "deadline-exceeded",
    NOT_FOUND: "not-found",
    ALREADY_EXISTS: "already-exists",
    PERMISSION_DENIED: "permission-denied",
    UNAUTHENTICATED: "unauthenticated",
    RESOURCE_EXHAUSTED: "resource-exhausted",
    FAILED_PRECONDITION: "failed-precondition",
    ABORTED: "aborted",
    OUT_OF_RANGE: "out-of-range",
    UNIMPLEMENTED: "unimplemented",
    INTERNAL: "internal",
    UNAVAILABLE: "unavailable",
    DATA_LOSS: "data-loss"
}
  , N = class extends Ac {
    constructor(t, e) {
        super(t, e),
        this.code = t,
        this.message = e,
        this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`
    }
}
;
var oe = class {
    constructor() {
        this.promise = new Promise( (t, e) => {
            this.resolve = t,
            this.reject = e
        }
        )
    }
}
;
var fr = class {
    constructor(t, e) {
        this.user = e,
        this.type = "OAuth",
        this.headers = new Map,
        this.headers.set("Authorization", `Bearer ${t}`)
    }
}
  , oo = class {
    getToken() {
        return Promise.resolve(null)
    }
    invalidateToken() {}
    start(t, e) {
        t.enqueueRetryable( () => e(ct.UNAUTHENTICATED))
    }
    shutdown() {}
}
  , ao = class {
    constructor(t) {
        this.token = t,
        this.changeListener = null
    }
    getToken() {
        return Promise.resolve(this.token)
    }
    invalidateToken() {}
    start(t, e) {
        this.changeListener = e,
        t.enqueueRetryable( () => e(this.token.user))
    }
    shutdown() {
        this.changeListener = null
    }
}
  , lo = class {
    constructor(t) {
        this.t = t,
        this.currentUser = ct.UNAUTHENTICATED,
        this.i = 0,
        this.forceRefresh = !1,
        this.auth = null
    }
    start(t, e) {
        Y(this.o === void 0, 42304);
        let n = this.i
          , r = d => this.i !== n ? (n = this.i,
        e(d)) : Promise.resolve()
          , o = new oe;
        this.o = () => {
            this.i++,
            this.currentUser = this.u(),
            o.resolve(),
            o = new oe,
            t.enqueueRetryable( () => r(this.currentUser))
        }
        ;
        let l = () => {
            let d = o;
            t.enqueueRetryable(async () => {
                await d.promise,
                await r(this.currentUser)
            }
            )
        }
          , u = d => {
            k("FirebaseAuthCredentialsProvider", "Auth detected"),
            this.auth = d,
            this.o && (this.auth.addAuthTokenListener(this.o),
            l())
        }
        ;
        this.t.onInit(d => u(d)),
        setTimeout( () => {
            if (!this.auth) {
                let d = this.t.getImmediate({
                    optional: !0
                });
                d ? u(d) : (k("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
                o.resolve(),
                o = new oe)
            }
        }
        , 0),
        l()
    }
    getToken() {
        let t = this.i
          , e = this.forceRefresh;
        return this.forceRefresh = !1,
        this.auth ? this.auth.getToken(e).then(n => this.i !== t ? (k("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."),
        this.getToken()) : n ? (Y(typeof n.accessToken == "string", 31837, {
            l: n
        }),
        new fr(n.accessToken,this.currentUser)) : null) : Promise.resolve(null)
    }
    invalidateToken() {
        this.forceRefresh = !0
    }
    shutdown() {
        this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
        this.o = void 0
    }
    u() {
        let t = this.auth && this.auth.getUid();
        return Y(t === null || typeof t == "string", 2055, {
            h: t
        }),
        new ct(t)
    }
}
  , co = class {
    constructor(t, e, n) {
        this.P = t,
        this.T = e,
        this.I = n,
        this.type = "FirstParty",
        this.user = ct.FIRST_PARTY,
        this.A = new Map
    }
    R() {
        return this.I ? this.I() : null
    }
    get headers() {
        this.A.set("X-Goog-AuthUser", this.P);
        let t = this.R();
        return t && this.A.set("Authorization", t),
        this.T && this.A.set("X-Goog-Iam-Authorization-Token", this.T),
        this.A
    }
}
  , uo = class {
    constructor(t, e, n) {
        this.P = t,
        this.T = e,
        this.I = n
    }
    getToken() {
        return Promise.resolve(new co(this.P,this.T,this.I))
    }
    start(t, e) {
        t.enqueueRetryable( () => e(ct.FIRST_PARTY))
    }
    shutdown() {}
    invalidateToken() {}
}
  , pr = class {
    constructor(t) {
        this.value = t,
        this.type = "AppCheck",
        this.headers = new Map,
        t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value)
    }
}
  , ho = class {
    constructor(t, e) {
        this.V = e,
        this.forceRefresh = !1,
        this.appCheck = null,
        this.m = null,
        this.p = null,
        kc(t) && t.settings.appCheckToken && (this.p = t.settings.appCheckToken)
    }
    start(t, e) {
        Y(this.o === void 0, 3512);
        let n = o => {
            o.error != null && k("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);
            let l = o.token !== this.m;
            return this.m = o.token,
            k("FirebaseAppCheckTokenProvider", `Received ${l ? "new" : "existing"} token.`),
            l ? e(o.token) : Promise.resolve()
        }
        ;
        this.o = o => {
            t.enqueueRetryable( () => n(o))
        }
        ;
        let r = o => {
            k("FirebaseAppCheckTokenProvider", "AppCheck detected"),
            this.appCheck = o,
            this.o && this.appCheck.addTokenListener(this.o)
        }
        ;
        this.V.onInit(o => r(o)),
        setTimeout( () => {
            if (!this.appCheck) {
                let o = this.V.getImmediate({
                    optional: !0
                });
                o ? r(o) : k("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
            }
        }
        , 0)
    }
    getToken() {
        if (this.p)
            return Promise.resolve(new pr(this.p));
        let t = this.forceRefresh;
        return this.forceRefresh = !1,
        this.appCheck ? this.appCheck.getToken(t).then(e => e ? (Y(typeof e.token == "string", 44558, {
            tokenResult: e
        }),
        this.m = e.token,
        new pr(e.token)) : null) : Promise.resolve(null)
    }
    invalidateToken() {
        this.forceRefresh = !0
    }
    shutdown() {
        this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
        this.o = void 0
    }
}
;
function ff(i) {
    let t = typeof self < "u" && (self.crypto || self.msCrypto)
      , e = new Uint8Array(i);
    if (t && typeof t.getRandomValues == "function")
        t.getRandomValues(e);
    else
        for (let n = 0; n < i; n++)
            e[n] = Math.floor(256 * Math.random());
    return e
}
function Uu() {
    return new TextEncoder
}
var ei = class {
    static newId() {
        let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
          , e = 62 * Math.floor(4.129032258064516)
          , n = "";
        for (; n.length < 20; ) {
            let r = ff(40);
            for (let o = 0; o < r.length; ++o)
                n.length < 20 && r[o] < e && (n += t.charAt(r[o] % 62))
        }
        return n
    }
}
;
function B(i, t) {
    return i < t ? -1 : i > t ? 1 : 0
}
function fo(i, t) {
    let e = 0;
    for (; e < i.length && e < t.length; ) {
        let n = i.codePointAt(e)
          , r = t.codePointAt(e);
        if (n !== r) {
            if (n < 128 && r < 128)
                return B(n, r);
            {
                let o = Uu()
                  , l = pf(o.encode(Jc(i, e)), o.encode(Jc(t, e)));
                return l !== 0 ? l : B(n, r)
            }
        }
        e += n > 65535 ? 2 : 1
    }
    return B(i.length, t.length)
}
function Jc(i, t) {
    return i.codePointAt(t) > 65535 ? i.substring(t, t + 2) : i.substring(t, t + 1)
}
function pf(i, t) {
    for (let e = 0; e < i.length && e < t.length; ++e)
        if (i[e] !== t[e])
            return B(i[e], t[e]);
    return B(i.length, t.length)
}
function Ze(i, t, e) {
    return i.length === t.length && i.every( (n, r) => e(n, t[r]))
}
var Zc = "__name__"
  , mr = class i {
    constructor(t, e, n) {
        e === void 0 ? e = 0 : e > t.length && M(637, {
            offset: e,
            range: t.length
        }),
        n === void 0 ? n = t.length - e : n > t.length - e && M(1746, {
            length: n,
            range: t.length - e
        }),
        this.segments = t,
        this.offset = e,
        this.len = n
    }
    get length() {
        return this.len
    }
    isEqual(t) {
        return i.comparator(this, t) === 0
    }
    child(t) {
        let e = this.segments.slice(this.offset, this.limit());
        return t instanceof i ? t.forEach(n => {
            e.push(n)
        }
        ) : e.push(t),
        this.construct(e)
    }
    limit() {
        return this.offset + this.length
    }
    popFirst(t) {
        return t = t === void 0 ? 1 : t,
        this.construct(this.segments, this.offset + t, this.length - t)
    }
    popLast() {
        return this.construct(this.segments, this.offset, this.length - 1)
    }
    firstSegment() {
        return this.segments[this.offset]
    }
    lastSegment() {
        return this.get(this.length - 1)
    }
    get(t) {
        return this.segments[this.offset + t]
    }
    isEmpty() {
        return this.length === 0
    }
    isPrefixOf(t) {
        if (t.length < this.length)
            return !1;
        for (let e = 0; e < this.length; e++)
            if (this.get(e) !== t.get(e))
                return !1;
        return !0
    }
    isImmediateParentOf(t) {
        if (this.length + 1 !== t.length)
            return !1;
        for (let e = 0; e < this.length; e++)
            if (this.get(e) !== t.get(e))
                return !1;
        return !0
    }
    forEach(t) {
        for (let e = this.offset, n = this.limit(); e < n; e++)
            t(this.segments[e])
    }
    toArray() {
        return this.segments.slice(this.offset, this.limit())
    }
    static comparator(t, e) {
        let n = Math.min(t.length, e.length);
        for (let r = 0; r < n; r++) {
            let o = i.compareSegments(t.get(r), e.get(r));
            if (o !== 0)
                return o
        }
        return B(t.length, e.length)
    }
    static compareSegments(t, e) {
        let n = i.isNumericId(t)
          , r = i.isNumericId(e);
        return n && !r ? -1 : !n && r ? 1 : n && r ? i.extractNumericId(t).compare(i.extractNumericId(e)) : fo(t, e)
    }
    static isNumericId(t) {
        return t.startsWith("__id") && t.endsWith("__")
    }
    static extractNumericId(t) {
        return Ht.fromString(t.substring(4, t.length - 2))
    }
}
  , nt = class i extends mr {
    construct(t, e, n) {
        return new i(t,e,n)
    }
    canonicalString() {
        return this.toArray().join("/")
    }
    toString() {
        return this.canonicalString()
    }
    toUriEncodedString() {
        return this.toArray().map(encodeURIComponent).join("/")
    }
    static fromString(...t) {
        let e = [];
        for (let n of t) {
            if (n.indexOf("//") >= 0)
                throw new N(D.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);
            e.push(...n.split("/").filter(r => r.length > 0))
        }
        return new i(e)
    }
    static emptyPath() {
        return new i([])
    }
}
  , mf = /^[_a-zA-Z][_a-zA-Z0-9]*$/
  , Nt = class i extends mr {
    construct(t, e, n) {
        return new i(t,e,n)
    }
    static isValidIdentifier(t) {
        return mf.test(t)
    }
    canonicalString() {
        return this.toArray().map(t => (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"),
        i.isValidIdentifier(t) || (t = "`" + t + "`"),
        t)).join(".")
    }
    toString() {
        return this.canonicalString()
    }
    isKeyField() {
        return this.length === 1 && this.get(0) === Zc
    }
    static keyField() {
        return new i([Zc])
    }
    static fromServerFormat(t) {
        let e = []
          , n = ""
          , r = 0
          , o = () => {
            if (n.length === 0)
                throw new N(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
            e.push(n),
            n = ""
        }
          , l = !1;
        for (; r < t.length; ) {
            let u = t[r];
            if (u === "\\") {
                if (r + 1 === t.length)
                    throw new N(D.INVALID_ARGUMENT,"Path has trailing escape character: " + t);
                let d = t[r + 1];
                if (d !== "\\" && d !== "." && d !== "`")
                    throw new N(D.INVALID_ARGUMENT,"Path has invalid escape sequence: " + t);
                n += d,
                r += 2
            } else
                u === "`" ? (l = !l,
                r++) : u !== "." || l ? (n += u,
                r++) : (o(),
                r++)
        }
        if (o(),
        l)
            throw new N(D.INVALID_ARGUMENT,"Unterminated ` in path: " + t);
        return new i(e)
    }
    static emptyPath() {
        return new i([])
    }
}
;
var F = class i {
    constructor(t) {
        this.path = t
    }
    static fromPath(t) {
        return new i(nt.fromString(t))
    }
    static fromName(t) {
        return new i(nt.fromString(t).popFirst(5))
    }
    static empty() {
        return new i(nt.emptyPath())
    }
    get collectionGroup() {
        return this.path.popLast().lastSegment()
    }
    hasCollectionId(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t
    }
    getCollectionGroup() {
        return this.path.get(this.path.length - 2)
    }
    getCollectionPath() {
        return this.path.popLast()
    }
    isEqual(t) {
        return t !== null && nt.comparator(this.path, t.path) === 0
    }
    toString() {
        return this.path.toString()
    }
    static comparator(t, e) {
        return nt.comparator(t.path, e.path)
    }
    static isDocumentKey(t) {
        return t.length % 2 == 0
    }
    static fromSegments(t) {
        return new i(new nt(t.slice()))
    }
}
;
function gf(i, t, e) {
    if (!e)
        throw new N(D.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)
}
function _f(i, t, e, n) {
    if (t === !0 && n === !0)
        throw new N(D.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)
}
function tu(i) {
    if (!F.isDocumentKey(i))
        throw new N(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)
}
function yf(i) {
    return typeof i == "object" && i !== null && (Object.getPrototypeOf(i) === Object.prototype || Object.getPrototypeOf(i) === null)
}
function vf(i) {
    if (i === void 0)
        return "undefined";
    if (i === null)
        return "null";
    if (typeof i == "string")
        return i.length > 20 && (i = `${i.substring(0, 20)}...`),
        JSON.stringify(i);
    if (typeof i == "number" || typeof i == "boolean")
        return "" + i;
    if (typeof i == "object") {
        if (i instanceof Array)
            return "an array";
        {
            let t = (function(n) {
                return n.constructor ? n.constructor.name : null
            }
            )(i);
            return t ? `a custom ${t} object` : "an object"
        }
    }
    return typeof i == "function" ? "a function" : M(12329, {
        type: typeof i
    })
}
function ur(i, t) {
    if ("_delegate"in i && (i = i._delegate),
    !(i instanceof t)) {
        if (t.name === i.constructor.name)
            throw new N(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        {
            let e = vf(i);
            throw new N(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)
        }
    }
    return i
}
function at(i, t) {
    let e = {
        typeString: i
    };
    return t && (e.value = t),
    e
}
function _i(i, t) {
    if (!yf(i))
        throw new N(D.INVALID_ARGUMENT,"JSON must be an object");
    let e;
    for (let n in t)
        if (t[n]) {
            let r = t[n].typeString
              , o = "value"in t[n] ? {
                value: t[n].value
            } : void 0;
            if (!(n in i)) {
                e = `JSON missing required field: '${n}'`;
                break
            }
            let l = i[n];
            if (r && typeof l !== r) {
                e = `JSON field '${n}' must be a ${r}.`;
                break
            }
            if (o !== void 0 && l !== o.value) {
                e = `Expected '${n}' field to equal '${o.value}'`;
                break
            }
        }
    if (e)
        throw new N(D.INVALID_ARGUMENT,e);
    return !0
}
var eu = -62135596800
  , nu = 1e6
  , Et = class i {
    static now() {
        return i.fromMillis(Date.now())
    }
    static fromDate(t) {
        return i.fromMillis(t.getTime())
    }
    static fromMillis(t) {
        let e = Math.floor(t / 1e3)
          , n = Math.floor((t - 1e3 * e) * nu);
        return new i(e,n)
    }
    constructor(t, e) {
        if (this.seconds = t,
        this.nanoseconds = e,
        e < 0)
            throw new N(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9)
            throw new N(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: " + e);
        if (t < eu)
            throw new N(D.INVALID_ARGUMENT,"Timestamp seconds out of range: " + t);
        if (t >= 253402300800)
            throw new N(D.INVALID_ARGUMENT,"Timestamp seconds out of range: " + t)
    }
    toDate() {
        return new Date(this.toMillis())
    }
    toMillis() {
        return 1e3 * this.seconds + this.nanoseconds / nu
    }
    _compareTo(t) {
        return this.seconds === t.seconds ? B(this.nanoseconds, t.nanoseconds) : B(this.seconds, t.seconds)
    }
    isEqual(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
    }
    toString() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
    }
    toJSON() {
        return {
            type: i._jsonSchemaVersion,
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        }
    }
    static fromJSON(t) {
        if (_i(t, i._jsonSchema))
            return new i(t.seconds,t.nanoseconds)
    }
    valueOf() {
        let t = this.seconds - eu;
        return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
    }
}
;
Et._jsonSchemaVersion = "firestore/timestamp/1.0",
Et._jsonSchema = {
    type: at("string", Et._jsonSchemaVersion),
    seconds: at("number"),
    nanoseconds: at("number")
};
var L = class i {
    static fromTimestamp(t) {
        return new i(t)
    }
    static min() {
        return new i(new Et(0,0))
    }
    static max() {
        return new i(new Et(253402300799,999999999))
    }
    constructor(t) {
        this.timestamp = t
    }
    compareTo(t) {
        return this.timestamp._compareTo(t.timestamp)
    }
    isEqual(t) {
        return this.timestamp.isEqual(t.timestamp)
    }
    toMicroseconds() {
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
    }
    toString() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")"
    }
    toTimestamp() {
        return this.timestamp
    }
}
;
var ni = -1
  , po = class {
    constructor(t, e, n, r) {
        this.indexId = t,
        this.collectionGroup = e,
        this.fields = n,
        this.indexState = r
    }
}
;
po.UNKNOWN_ID = -1;
function wf(i, t) {
    let e = i.toTimestamp().seconds
      , n = i.toTimestamp().nanoseconds + 1
      , r = L.fromTimestamp(n === 1e9 ? new Et(e + 1,0) : new Et(e,n));
    return new Ce(r,F.empty(),t)
}
function Ef(i) {
    return new Ce(i.readTime,i.key,ni)
}
var Ce = class i {
    constructor(t, e, n) {
        this.readTime = t,
        this.documentKey = e,
        this.largestBatchId = n
    }
    static min() {
        return new i(L.min(),F.empty(),ni)
    }
    static max() {
        return new i(L.max(),F.empty(),ni)
    }
}
;
function Tf(i, t) {
    let e = i.readTime.compareTo(t.readTime);
    return e !== 0 ? e : (e = F.comparator(i.documentKey, t.documentKey),
    e !== 0 ? e : B(i.largestBatchId, t.largestBatchId))
}
var If = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."
  , mo = class {
    constructor() {
        this.onCommittedListeners = []
    }
    addOnCommittedListener(t) {
        this.onCommittedListeners.push(t)
    }
    raiseOnCommittedEvent() {
        this.onCommittedListeners.forEach(t => t())
    }
}
;
async function zr(i) {
    if (i.code !== D.FAILED_PRECONDITION || i.message !== If)
        throw i;
    k("LocalStore", "Unexpectedly lost primary lease")
}
var A = class i {
    constructor(t) {
        this.nextCallback = null,
        this.catchCallback = null,
        this.result = void 0,
        this.error = void 0,
        this.isDone = !1,
        this.callbackAttached = !1,
        t(e => {
            this.isDone = !0,
            this.result = e,
            this.nextCallback && this.nextCallback(e)
        }
        , e => {
            this.isDone = !0,
            this.error = e,
            this.catchCallback && this.catchCallback(e)
        }
        )
    }
    catch(t) {
        return this.next(void 0, t)
    }
    next(t, e) {
        return this.callbackAttached && M(59440),
        this.callbackAttached = !0,
        this.isDone ? this.error ? this.wrapFailure(e, this.error) : this.wrapSuccess(t, this.result) : new i( (n, r) => {
            this.nextCallback = o => {
                this.wrapSuccess(t, o).next(n, r)
            }
            ,
            this.catchCallback = o => {
                this.wrapFailure(e, o).next(n, r)
            }
        }
        )
    }
    toPromise() {
        return new Promise( (t, e) => {
            this.next(t, e)
        }
        )
    }
    wrapUserFunction(t) {
        try {
            let e = t();
            return e instanceof i ? e : i.resolve(e)
        } catch (e) {
            return i.reject(e)
        }
    }
    wrapSuccess(t, e) {
        return t ? this.wrapUserFunction( () => t(e)) : i.resolve(e)
    }
    wrapFailure(t, e) {
        return t ? this.wrapUserFunction( () => t(e)) : i.reject(e)
    }
    static resolve(t) {
        return new i( (e, n) => {
            e(t)
        }
        )
    }
    static reject(t) {
        return new i( (e, n) => {
            n(t)
        }
        )
    }
    static waitFor(t) {
        return new i( (e, n) => {
            let r = 0
              , o = 0
              , l = !1;
            t.forEach(u => {
                ++r,
                u.next( () => {
                    ++o,
                    l && o === r && e()
                }
                , d => n(d))
            }
            ),
            l = !0,
            o === r && e()
        }
        )
    }
    static or(t) {
        let e = i.resolve(!1);
        for (let n of t)
            e = e.next(r => r ? i.resolve(r) : n());
        return e
    }
    static forEach(t, e) {
        let n = [];
        return t.forEach( (r, o) => {
            n.push(e.call(this, r, o))
        }
        ),
        this.waitFor(n)
    }
    static mapArray(t, e) {
        return new i( (n, r) => {
            let o = t.length
              , l = new Array(o)
              , u = 0;
            for (let d = 0; d < o; d++) {
                let f = d;
                e(t[f]).next(p => {
                    l[f] = p,
                    ++u,
                    u === o && n(l)
                }
                , p => r(p))
            }
        }
        )
    }
    static doWhile(t, e) {
        return new i( (n, r) => {
            let o = () => {
                t() === !0 ? e().next( () => {
                    o()
                }
                , r) : n()
            }
            ;
            o()
        }
        )
    }
}
;
function bf(i) {
    let t = i.match(/Android ([\d.]+)/i)
      , e = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(e)
}
function fn(i) {
    return i.name === "IndexedDbTransactionError"
}
var Fa = ( () => {
    class i {
        constructor(e, n) {
            this.previousValue = e,
            n && (n.sequenceNumberHandler = r => this._e(r),
            this.ae = r => n.writeSequenceNumber(r))
        }
        _e(e) {
            return this.previousValue = Math.max(e, this.previousValue),
            this.previousValue
        }
        next() {
            let e = ++this.previousValue;
            return this.ae && this.ae(e),
            e
        }
    }
    i.ue = -1;
    return i
}
)()
  , Sf = -1;
function Ur(i) {
    return i == null
}
function gr(i) {
    return i === 0 && 1 / i == -1 / 0
}
var $u = "";
function Af(i) {
    let t = "";
    for (let e = 0; e < i.length; e++)
        t.length > 0 && (t = iu(t)),
        t = Cf(i.get(e), t);
    return iu(t)
}
function Cf(i, t) {
    let e = t
      , n = i.length;
    for (let r = 0; r < n; r++) {
        let o = i.charAt(r);
        switch (o) {
        case "\0":
            e += "";
            break;
        case $u:
            e += "";
            break;
        default:
            e += o
        }
    }
    return e
}
function iu(i) {
    return i + $u + ""
}
var Rf = "remoteDocuments"
  , Gu = "owner";
var Ku = "mutationQueues";
var Wu = "mutations";
var Hu = "documentMutations"
  , Df = "remoteDocumentsV14";
var Qu = "remoteDocumentGlobal";
var Xu = "targets";
var Yu = "targetDocuments";
var Ju = "targetGlobal"
  , Zu = "collectionParents";
var th = "clientMetadata";
var eh = "bundles";
var nh = "namedQueries";
var Pf = "indexConfiguration";
var xf = "indexState";
var kf = "indexEntries";
var ih = "documentOverlays";
var Vf = "globals";
var Of = [Ku, Wu, Hu, Rf, Xu, Gu, Ju, Yu, th, Qu, Zu, eh, nh]
  , Km = [...Of, ih]
  , Nf = [Ku, Wu, Hu, Df, Xu, Gu, Ju, Yu, th, Qu, Zu, eh, nh, ih]
  , Ff = Nf
  , Mf = [...Ff, Pf, xf, kf];
var Wm = [...Mf, Vf];
function ru(i) {
    let t = 0;
    for (let e in i)
        Object.prototype.hasOwnProperty.call(i, e) && t++;
    return t
}
function yi(i, t) {
    for (let e in i)
        Object.prototype.hasOwnProperty.call(i, e) && t(e, i[e])
}
function Lf(i) {
    for (let t in i)
        if (Object.prototype.hasOwnProperty.call(i, t))
            return !1;
    return !0
}
var it = class i {
    constructor(t, e) {
        this.comparator = t,
        this.root = e || Lt.EMPTY
    }
    insert(t, e) {
        return new i(this.comparator,this.root.insert(t, e, this.comparator).copy(null, null, Lt.BLACK, null, null))
    }
    remove(t) {
        return new i(this.comparator,this.root.remove(t, this.comparator).copy(null, null, Lt.BLACK, null, null))
    }
    get(t) {
        let e = this.root;
        for (; !e.isEmpty(); ) {
            let n = this.comparator(t, e.key);
            if (n === 0)
                return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right)
        }
        return null
    }
    indexOf(t) {
        let e = 0
          , n = this.root;
        for (; !n.isEmpty(); ) {
            let r = this.comparator(t, n.key);
            if (r === 0)
                return e + n.left.size;
            r < 0 ? n = n.left : (e += n.left.size + 1,
            n = n.right)
        }
        return -1
    }
    isEmpty() {
        return this.root.isEmpty()
    }
    get size() {
        return this.root.size
    }
    minKey() {
        return this.root.minKey()
    }
    maxKey() {
        return this.root.maxKey()
    }
    inorderTraversal(t) {
        return this.root.inorderTraversal(t)
    }
    forEach(t) {
        this.inorderTraversal( (e, n) => (t(e, n),
        !1))
    }
    toString() {
        let t = [];
        return this.inorderTraversal( (e, n) => (t.push(`${e}:${n}`),
        !1)),
        `{${t.join(", ")}}`
    }
    reverseTraversal(t) {
        return this.root.reverseTraversal(t)
    }
    getIterator() {
        return new Ge(this.root,null,this.comparator,!1)
    }
    getIteratorFrom(t) {
        return new Ge(this.root,t,this.comparator,!1)
    }
    getReverseIterator() {
        return new Ge(this.root,null,this.comparator,!0)
    }
    getReverseIteratorFrom(t) {
        return new Ge(this.root,t,this.comparator,!0)
    }
}
  , Ge = class {
    constructor(t, e, n, r) {
        this.isReverse = r,
        this.nodeStack = [];
        let o = 1;
        for (; !t.isEmpty(); )
            if (o = e ? n(t.key, e) : 1,
            e && r && (o *= -1),
            o < 0)
                t = this.isReverse ? t.left : t.right;
            else {
                if (o === 0) {
                    this.nodeStack.push(t);
                    break
                }
                this.nodeStack.push(t),
                t = this.isReverse ? t.right : t.left
            }
    }
    getNext() {
        let t = this.nodeStack.pop()
          , e = {
            key: t.key,
            value: t.value
        };
        if (this.isReverse)
            for (t = t.left; !t.isEmpty(); )
                this.nodeStack.push(t),
                t = t.right;
        else
            for (t = t.right; !t.isEmpty(); )
                this.nodeStack.push(t),
                t = t.left;
        return e
    }
    hasNext() {
        return this.nodeStack.length > 0
    }
    peek() {
        if (this.nodeStack.length === 0)
            return null;
        let t = this.nodeStack[this.nodeStack.length - 1];
        return {
            key: t.key,
            value: t.value
        }
    }
}
  , Lt = class i {
    constructor(t, e, n, r, o) {
        this.key = t,
        this.value = e,
        this.color = n ?? i.RED,
        this.left = r ?? i.EMPTY,
        this.right = o ?? i.EMPTY,
        this.size = this.left.size + 1 + this.right.size
    }
    copy(t, e, n, r, o) {
        return new i(t ?? this.key,e ?? this.value,n ?? this.color,r ?? this.left,o ?? this.right)
    }
    isEmpty() {
        return !1
    }
    inorderTraversal(t) {
        return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t)
    }
    reverseTraversal(t) {
        return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t)
    }
    min() {
        return this.left.isEmpty() ? this : this.left.min()
    }
    minKey() {
        return this.min().key
    }
    maxKey() {
        return this.right.isEmpty() ? this.key : this.right.maxKey()
    }
    insert(t, e, n) {
        let r = this
          , o = n(t, r.key);
        return r = o < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : o === 0 ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n)),
        r.fixUp()
    }
    removeMin() {
        if (this.left.isEmpty())
            return i.EMPTY;
        let t = this;
        return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
        t = t.copy(null, null, null, t.left.removeMin(), null),
        t.fixUp()
    }
    remove(t, e) {
        let n, r = this;
        if (e(t, r.key) < 0)
            r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()),
            r = r.copy(null, null, null, r.left.remove(t, e), null);
        else {
            if (r.left.isRed() && (r = r.rotateRight()),
            r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()),
            e(t, r.key) === 0) {
                if (r.right.isEmpty())
                    return i.EMPTY;
                n = r.right.min(),
                r = r.copy(n.key, n.value, null, null, r.right.removeMin())
            }
            r = r.copy(null, null, null, null, r.right.remove(t, e))
        }
        return r.fixUp()
    }
    isRed() {
        return this.color
    }
    fixUp() {
        let t = this;
        return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()),
        t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()),
        t.left.isRed() && t.right.isRed() && (t = t.colorFlip()),
        t
    }
    moveRedLeft() {
        let t = this.colorFlip();
        return t.right.left.isRed() && (t = t.copy(null, null, null, null, t.right.rotateRight()),
        t = t.rotateLeft(),
        t = t.colorFlip()),
        t
    }
    moveRedRight() {
        let t = this.colorFlip();
        return t.left.left.isRed() && (t = t.rotateRight(),
        t = t.colorFlip()),
        t
    }
    rotateLeft() {
        let t = this.copy(null, null, i.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, t, null)
    }
    rotateRight() {
        let t = this.copy(null, null, i.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, t)
    }
    colorFlip() {
        let t = this.left.copy(null, null, !this.left.color, null, null)
          , e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e)
    }
    checkMaxDepth() {
        let t = this.check();
        return Math.pow(2, t) <= this.size + 1
    }
    check() {
        if (this.isRed() && this.left.isRed())
            throw M(43730, {
                key: this.key,
                value: this.value
            });
        if (this.right.isRed())
            throw M(14113, {
                key: this.key,
                value: this.value
            });
        let t = this.left.check();
        if (t !== this.right.check())
            throw M(27949);
        return t + (this.isRed() ? 0 : 1)
    }
}
;
Lt.EMPTY = null,
Lt.RED = !0,
Lt.BLACK = !1;
Lt.EMPTY = new class {
    constructor() {
        this.size = 0
    }
    get key() {
        throw M(57766)
    }
    get value() {
        throw M(16141)
    }
    get color() {
        throw M(16727)
    }
    get left() {
        throw M(29726)
    }
    get right() {
        throw M(36894)
    }
    copy(t, e, n, r, o) {
        return this
    }
    insert(t, e, n) {
        return new Lt(t,e)
    }
    remove(t, e) {
        return this
    }
    isEmpty() {
        return !0
    }
    inorderTraversal(t) {
        return !1
    }
    reverseTraversal(t) {
        return !1
    }
    minKey() {
        return null
    }
    maxKey() {
        return null
    }
    isRed() {
        return !1
    }
    checkMaxDepth() {
        return !0
    }
    check() {
        return 0
    }
}
;
var ut = class i {
    constructor(t) {
        this.comparator = t,
        this.data = new it(this.comparator)
    }
    has(t) {
        return this.data.get(t) !== null
    }
    first() {
        return this.data.minKey()
    }
    last() {
        return this.data.maxKey()
    }
    get size() {
        return this.data.size
    }
    indexOf(t) {
        return this.data.indexOf(t)
    }
    forEach(t) {
        this.data.inorderTraversal( (e, n) => (t(e),
        !1))
    }
    forEachInRange(t, e) {
        let n = this.data.getIteratorFrom(t[0]);
        for (; n.hasNext(); ) {
            let r = n.getNext();
            if (this.comparator(r.key, t[1]) >= 0)
                return;
            e(r.key)
        }
    }
    forEachWhile(t, e) {
        let n;
        for (n = e !== void 0 ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext(); )
            if (!t(n.getNext().key))
                return
    }
    firstAfterOrEqual(t) {
        let e = this.data.getIteratorFrom(t);
        return e.hasNext() ? e.getNext().key : null
    }
    getIterator() {
        return new _r(this.data.getIterator())
    }
    getIteratorFrom(t) {
        return new _r(this.data.getIteratorFrom(t))
    }
    add(t) {
        return this.copy(this.data.remove(t).insert(t, !0))
    }
    delete(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this
    }
    isEmpty() {
        return this.data.isEmpty()
    }
    unionWith(t) {
        let e = this;
        return e.size < t.size && (e = t,
        t = this),
        t.forEach(n => {
            e = e.add(n)
        }
        ),
        e
    }
    isEqual(t) {
        if (!(t instanceof i) || this.size !== t.size)
            return !1;
        let e = this.data.getIterator()
          , n = t.data.getIterator();
        for (; e.hasNext(); ) {
            let r = e.getNext().key
              , o = n.getNext().key;
            if (this.comparator(r, o) !== 0)
                return !1
        }
        return !0
    }
    toArray() {
        let t = [];
        return this.forEach(e => {
            t.push(e)
        }
        ),
        t
    }
    toString() {
        let t = [];
        return this.forEach(e => t.push(e)),
        "SortedSet(" + t.toString() + ")"
    }
    copy(t) {
        let e = new i(this.comparator);
        return e.data = t,
        e
    }
}
  , _r = class {
    constructor(t) {
        this.iter = t
    }
    getNext() {
        return this.iter.getNext().key
    }
    hasNext() {
        return this.iter.hasNext()
    }
}
;
var Ee = class i {
    constructor(t) {
        this.fields = t,
        t.sort(Nt.comparator)
    }
    static empty() {
        return new i([])
    }
    unionWith(t) {
        let e = new ut(Nt.comparator);
        for (let n of this.fields)
            e = e.add(n);
        for (let n of t)
            e = e.add(n);
        return new i(e.toArray())
    }
    covers(t) {
        for (let e of this.fields)
            if (e.isPrefixOf(t))
                return !0;
        return !1
    }
    isEqual(t) {
        return Ze(this.fields, t.fields, (e, n) => e.isEqual(n))
    }
}
;
var yr = class extends Error {
    constructor() {
        super(...arguments),
        this.name = "Base64DecodeError"
    }
}
;
var _t = class i {
    constructor(t) {
        this.binaryString = t
    }
    static fromBase64String(t) {
        let e = (function(r) {
            try {
                return atob(r)
            } catch (o) {
                throw typeof DOMException < "u" && o instanceof DOMException ? new yr("Invalid base64 string: " + o) : o
            }
        }
        )(t);
        return new i(e)
    }
    static fromUint8Array(t) {
        let e = (function(r) {
            let o = "";
            for (let l = 0; l < r.length; ++l)
                o += String.fromCharCode(r[l]);
            return o
        }
        )(t);
        return new i(e)
    }
    [Symbol.iterator]() {
        let t = 0;
        return {
            next: () => t < this.binaryString.length ? {
                value: this.binaryString.charCodeAt(t++),
                done: !1
            } : {
                value: void 0,
                done: !0
            }
        }
    }
    toBase64() {
        return (function(e) {
            return btoa(e)
        }
        )(this.binaryString)
    }
    toUint8Array() {
        return (function(e) {
            let n = new Uint8Array(e.length);
            for (let r = 0; r < e.length; r++)
                n[r] = e.charCodeAt(r);
            return n
        }
        )(this.binaryString)
    }
    approximateByteSize() {
        return 2 * this.binaryString.length
    }
    compareTo(t) {
        return B(this.binaryString, t.binaryString)
    }
    isEqual(t) {
        return this.binaryString === t.binaryString
    }
}
;
_t.EMPTY_BYTE_STRING = new _t("");
var Bf = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Jt(i) {
    if (Y(!!i, 39018),
    typeof i == "string") {
        let t = 0
          , e = Bf.exec(i);
        if (Y(!!e, 46558, {
            timestamp: i
        }),
        e[1]) {
            let r = e[1];
            r = (r + "000000000").substr(0, 9),
            t = Number(r)
        }
        let n = new Date(i);
        return {
            seconds: Math.floor(n.getTime() / 1e3),
            nanos: t
        }
    }
    return {
        seconds: X(i.seconds),
        nanos: X(i.nanos)
    }
}
function X(i) {
    return typeof i == "number" ? i : typeof i == "string" ? Number(i) : 0
}
function Zt(i) {
    return typeof i == "string" ? _t.fromBase64String(i) : _t.fromUint8Array(i)
}
var rh = "server_timestamp"
  , sh = "__type__"
  , oh = "__previous_value__"
  , ah = "__local_write_time__";
function Ma(i) {
    var t, e;
    return ((e = (((t = i?.mapValue) === null || t === void 0 ? void 0 : t.fields) || {})[sh]) === null || e === void 0 ? void 0 : e.stringValue) === rh
}
function $r(i) {
    let t = i.mapValue.fields[oh];
    return Ma(t) ? $r(t) : t
}
function ii(i) {
    let t = Jt(i.mapValue.fields[ah].timestampValue);
    return new Et(t.seconds,t.nanos)
}
var go = class {
    constructor(t, e, n, r, o, l, u, d, f, p) {
        this.databaseId = t,
        this.appId = e,
        this.persistenceKey = n,
        this.host = r,
        this.ssl = o,
        this.forceLongPolling = l,
        this.autoDetectLongPolling = u,
        this.longPollingOptions = d,
        this.useFetchStreams = f,
        this.isUsingEmulator = p
    }
}
  , vr = "(default)"
  , wr = class i {
    constructor(t, e) {
        this.projectId = t,
        this.database = e || vr
    }
    static empty() {
        return new i("","")
    }
    get isDefaultDatabase() {
        return this.database === vr
    }
    isEqual(t) {
        return t instanceof i && t.projectId === this.projectId && t.database === this.database
    }
}
;
var lh = "__type__"
  , ch = "__max__"
  , ar = {
    mapValue: {
        fields: {
            __type__: {
                stringValue: ch
            }
        }
    }
}
  , uh = "__vector__"
  , ri = "value";
function le(i) {
    return "nullValue"in i ? 0 : "booleanValue"in i ? 1 : "integerValue"in i || "doubleValue"in i ? 2 : "timestampValue"in i ? 3 : "stringValue"in i ? 5 : "bytesValue"in i ? 6 : "referenceValue"in i ? 7 : "geoPointValue"in i ? 8 : "arrayValue"in i ? 9 : "mapValue"in i ? Ma(i) ? 4 : dh(i) ? 9007199254740991 : hh(i) ? 10 : 11 : M(28295, {
        value: i
    })
}
function qt(i, t) {
    if (i === t)
        return !0;
    let e = le(i);
    if (e !== le(t))
        return !1;
    switch (e) {
    case 0:
    case 9007199254740991:
        return !0;
    case 1:
        return i.booleanValue === t.booleanValue;
    case 4:
        return ii(i).isEqual(ii(t));
    case 3:
        return (function(r, o) {
            if (typeof r.timestampValue == "string" && typeof o.timestampValue == "string" && r.timestampValue.length === o.timestampValue.length)
                return r.timestampValue === o.timestampValue;
            let l = Jt(r.timestampValue)
              , u = Jt(o.timestampValue);
            return l.seconds === u.seconds && l.nanos === u.nanos
        }
        )(i, t);
    case 5:
        return i.stringValue === t.stringValue;
    case 6:
        return (function(r, o) {
            return Zt(r.bytesValue).isEqual(Zt(o.bytesValue))
        }
        )(i, t);
    case 7:
        return i.referenceValue === t.referenceValue;
    case 8:
        return (function(r, o) {
            return X(r.geoPointValue.latitude) === X(o.geoPointValue.latitude) && X(r.geoPointValue.longitude) === X(o.geoPointValue.longitude)
        }
        )(i, t);
    case 2:
        return (function(r, o) {
            if ("integerValue"in r && "integerValue"in o)
                return X(r.integerValue) === X(o.integerValue);
            if ("doubleValue"in r && "doubleValue"in o) {
                let l = X(r.doubleValue)
                  , u = X(o.doubleValue);
                return l === u ? gr(l) === gr(u) : isNaN(l) && isNaN(u)
            }
            return !1
        }
        )(i, t);
    case 9:
        return Ze(i.arrayValue.values || [], t.arrayValue.values || [], qt);
    case 10:
    case 11:
        return (function(r, o) {
            let l = r.mapValue.fields || {}
              , u = o.mapValue.fields || {};
            if (ru(l) !== ru(u))
                return !1;
            for (let d in l)
                if (l.hasOwnProperty(d) && (u[d] === void 0 || !qt(l[d], u[d])))
                    return !1;
            return !0
        }
        )(i, t);
    default:
        return M(52216, {
            left: i
        })
    }
}
function si(i, t) {
    return (i.values || []).find(e => qt(e, t)) !== void 0
}
function tn(i, t) {
    if (i === t)
        return 0;
    let e = le(i)
      , n = le(t);
    if (e !== n)
        return B(e, n);
    switch (e) {
    case 0:
    case 9007199254740991:
        return 0;
    case 1:
        return B(i.booleanValue, t.booleanValue);
    case 2:
        return (function(o, l) {
            let u = X(o.integerValue || o.doubleValue)
              , d = X(l.integerValue || l.doubleValue);
            return u < d ? -1 : u > d ? 1 : u === d ? 0 : isNaN(u) ? isNaN(d) ? 0 : -1 : 1
        }
        )(i, t);
    case 3:
        return su(i.timestampValue, t.timestampValue);
    case 4:
        return su(ii(i), ii(t));
    case 5:
        return fo(i.stringValue, t.stringValue);
    case 6:
        return (function(o, l) {
            let u = Zt(o)
              , d = Zt(l);
            return u.compareTo(d)
        }
        )(i.bytesValue, t.bytesValue);
    case 7:
        return (function(o, l) {
            let u = o.split("/")
              , d = l.split("/");
            for (let f = 0; f < u.length && f < d.length; f++) {
                let p = B(u[f], d[f]);
                if (p !== 0)
                    return p
            }
            return B(u.length, d.length)
        }
        )(i.referenceValue, t.referenceValue);
    case 8:
        return (function(o, l) {
            let u = B(X(o.latitude), X(l.latitude));
            return u !== 0 ? u : B(X(o.longitude), X(l.longitude))
        }
        )(i.geoPointValue, t.geoPointValue);
    case 9:
        return ou(i.arrayValue, t.arrayValue);
    case 10:
        return (function(o, l) {
            var u, d, f, p;
            let E = o.fields || {}
              , S = l.fields || {}
              , C = (u = E[ri]) === null || u === void 0 ? void 0 : u.arrayValue
              , P = (d = S[ri]) === null || d === void 0 ? void 0 : d.arrayValue
              , O = B(((f = C?.values) === null || f === void 0 ? void 0 : f.length) || 0, ((p = P?.values) === null || p === void 0 ? void 0 : p.length) || 0);
            return O !== 0 ? O : ou(C, P)
        }
        )(i.mapValue, t.mapValue);
    case 11:
        return (function(o, l) {
            if (o === ar.mapValue && l === ar.mapValue)
                return 0;
            if (o === ar.mapValue)
                return 1;
            if (l === ar.mapValue)
                return -1;
            let u = o.fields || {}
              , d = Object.keys(u)
              , f = l.fields || {}
              , p = Object.keys(f);
            d.sort(),
            p.sort();
            for (let E = 0; E < d.length && E < p.length; ++E) {
                let S = fo(d[E], p[E]);
                if (S !== 0)
                    return S;
                let C = tn(u[d[E]], f[p[E]]);
                if (C !== 0)
                    return C
            }
            return B(d.length, p.length)
        }
        )(i.mapValue, t.mapValue);
    default:
        throw M(23264, {
            le: e
        })
    }
}
function su(i, t) {
    if (typeof i == "string" && typeof t == "string" && i.length === t.length)
        return B(i, t);
    let e = Jt(i)
      , n = Jt(t)
      , r = B(e.seconds, n.seconds);
    return r !== 0 ? r : B(e.nanos, n.nanos)
}
function ou(i, t) {
    let e = i.values || []
      , n = t.values || [];
    for (let r = 0; r < e.length && r < n.length; ++r) {
        let o = tn(e[r], n[r]);
        if (o)
            return o
    }
    return B(e.length, n.length)
}
function en(i) {
    return _o(i)
}
function _o(i) {
    return "nullValue"in i ? "null" : "booleanValue"in i ? "" + i.booleanValue : "integerValue"in i ? "" + i.integerValue : "doubleValue"in i ? "" + i.doubleValue : "timestampValue"in i ? (function(e) {
        let n = Jt(e);
        return `time(${n.seconds},${n.nanos})`
    }
    )(i.timestampValue) : "stringValue"in i ? i.stringValue : "bytesValue"in i ? (function(e) {
        return Zt(e).toBase64()
    }
    )(i.bytesValue) : "referenceValue"in i ? (function(e) {
        return F.fromName(e).toString()
    }
    )(i.referenceValue) : "geoPointValue"in i ? (function(e) {
        return `geo(${e.latitude},${e.longitude})`
    }
    )(i.geoPointValue) : "arrayValue"in i ? (function(e) {
        let n = "["
          , r = !0;
        for (let o of e.values || [])
            r ? r = !1 : n += ",",
            n += _o(o);
        return n + "]"
    }
    )(i.arrayValue) : "mapValue"in i ? (function(e) {
        let n = Object.keys(e.fields || {}).sort()
          , r = "{"
          , o = !0;
        for (let l of n)
            o ? o = !1 : r += ",",
            r += `${l}:${_o(e.fields[l])}`;
        return r + "}"
    }
    )(i.mapValue) : M(61005, {
        value: i
    })
}
function hr(i) {
    switch (le(i)) {
    case 0:
    case 1:
        return 4;
    case 2:
        return 8;
    case 3:
    case 8:
        return 16;
    case 4:
        let t = $r(i);
        return t ? 16 + hr(t) : 16;
    case 5:
        return 2 * i.stringValue.length;
    case 6:
        return Zt(i.bytesValue).approximateByteSize();
    case 7:
        return i.referenceValue.length;
    case 9:
        return (function(n) {
            return (n.values || []).reduce( (r, o) => r + hr(o), 0)
        }
        )(i.arrayValue);
    case 10:
    case 11:
        return (function(n) {
            let r = 0;
            return yi(n.fields, (o, l) => {
                r += o.length + hr(l)
            }
            ),
            r
        }
        )(i.mapValue);
    default:
        throw M(13486, {
            value: i
        })
    }
}
function yo(i) {
    return !!i && "integerValue"in i
}
function La(i) {
    return !!i && "arrayValue"in i
}
function au(i) {
    return !!i && "nullValue"in i
}
function lu(i) {
    return !!i && "doubleValue"in i && isNaN(Number(i.doubleValue))
}
function eo(i) {
    return !!i && "mapValue"in i
}
function hh(i) {
    var t, e;
    return ((e = (((t = i?.mapValue) === null || t === void 0 ? void 0 : t.fields) || {})[lh]) === null || e === void 0 ? void 0 : e.stringValue) === uh
}
function Xn(i) {
    if (i.geoPointValue)
        return {
            geoPointValue: Object.assign({}, i.geoPointValue)
        };
    if (i.timestampValue && typeof i.timestampValue == "object")
        return {
            timestampValue: Object.assign({}, i.timestampValue)
        };
    if (i.mapValue) {
        let t = {
            mapValue: {
                fields: {}
            }
        };
        return yi(i.mapValue.fields, (e, n) => t.mapValue.fields[e] = Xn(n)),
        t
    }
    if (i.arrayValue) {
        let t = {
            arrayValue: {
                values: []
            }
        };
        for (let e = 0; e < (i.arrayValue.values || []).length; ++e)
            t.arrayValue.values[e] = Xn(i.arrayValue.values[e]);
        return t
    }
    return Object.assign({}, i)
}
function dh(i) {
    return (((i.mapValue || {}).fields || {}).__type__ || {}).stringValue === ch
}
var Qm = {
    mapValue: {
        fields: {
            [lh]: {
                stringValue: uh
            },
            [ri]: {
                arrayValue: {}
            }
        }
    }
};
var Xt = class i {
    constructor(t) {
        this.value = t
    }
    static empty() {
        return new i({
            mapValue: {}
        })
    }
    field(t) {
        if (t.isEmpty())
            return this.value;
        {
            let e = this.value;
            for (let n = 0; n < t.length - 1; ++n)
                if (e = (e.mapValue.fields || {})[t.get(n)],
                !eo(e))
                    return null;
            return e = (e.mapValue.fields || {})[t.lastSegment()],
            e || null
        }
    }
    set(t, e) {
        this.getFieldsMap(t.popLast())[t.lastSegment()] = Xn(e)
    }
    setAll(t) {
        let e = Nt.emptyPath()
          , n = {}
          , r = [];
        t.forEach( (l, u) => {
            if (!e.isImmediateParentOf(u)) {
                let d = this.getFieldsMap(e);
                this.applyChanges(d, n, r),
                n = {},
                r = [],
                e = u.popLast()
            }
            l ? n[u.lastSegment()] = Xn(l) : r.push(u.lastSegment())
        }
        );
        let o = this.getFieldsMap(e);
        this.applyChanges(o, n, r)
    }
    delete(t) {
        let e = this.field(t.popLast());
        eo(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()]
    }
    isEqual(t) {
        return qt(this.value, t.value)
    }
    getFieldsMap(t) {
        let e = this.value;
        e.mapValue.fields || (e.mapValue = {
            fields: {}
        });
        for (let n = 0; n < t.length; ++n) {
            let r = e.mapValue.fields[t.get(n)];
            eo(r) && r.mapValue.fields || (r = {
                mapValue: {
                    fields: {}
                }
            },
            e.mapValue.fields[t.get(n)] = r),
            e = r
        }
        return e.mapValue.fields
    }
    applyChanges(t, e, n) {
        yi(e, (r, o) => t[r] = o);
        for (let r of n)
            delete t[r]
    }
    clone() {
        return new i(Xn(this.value))
    }
}
;
var Ft = class i {
    constructor(t, e, n, r, o, l, u) {
        this.key = t,
        this.documentType = e,
        this.version = n,
        this.readTime = r,
        this.createTime = o,
        this.data = l,
        this.documentState = u
    }
    static newInvalidDocument(t) {
        return new i(t,0,L.min(),L.min(),L.min(),Xt.empty(),0)
    }
    static newFoundDocument(t, e, n, r) {
        return new i(t,1,e,L.min(),n,r,0)
    }
    static newNoDocument(t, e) {
        return new i(t,2,e,L.min(),L.min(),Xt.empty(),0)
    }
    static newUnknownDocument(t, e) {
        return new i(t,3,e,L.min(),L.min(),Xt.empty(),2)
    }
    convertToFoundDocument(t, e) {
        return !this.createTime.isEqual(L.min()) || this.documentType !== 2 && this.documentType !== 0 || (this.createTime = t),
        this.version = t,
        this.documentType = 1,
        this.data = e,
        this.documentState = 0,
        this
    }
    convertToNoDocument(t) {
        return this.version = t,
        this.documentType = 2,
        this.data = Xt.empty(),
        this.documentState = 0,
        this
    }
    convertToUnknownDocument(t) {
        return this.version = t,
        this.documentType = 3,
        this.data = Xt.empty(),
        this.documentState = 2,
        this
    }
    setHasCommittedMutations() {
        return this.documentState = 2,
        this
    }
    setHasLocalMutations() {
        return this.documentState = 1,
        this.version = L.min(),
        this
    }
    setReadTime(t) {
        return this.readTime = t,
        this
    }
    get hasLocalMutations() {
        return this.documentState === 1
    }
    get hasCommittedMutations() {
        return this.documentState === 2
    }
    get hasPendingWrites() {
        return this.hasLocalMutations || this.hasCommittedMutations
    }
    isValidDocument() {
        return this.documentType !== 0
    }
    isFoundDocument() {
        return this.documentType === 1
    }
    isNoDocument() {
        return this.documentType === 2
    }
    isUnknownDocument() {
        return this.documentType === 3
    }
    isEqual(t) {
        return t instanceof i && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data)
    }
    mutableCopy() {
        return new i(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)
    }
    toString() {
        return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`
    }
}
;
var nn = class {
    constructor(t, e) {
        this.position = t,
        this.inclusive = e
    }
}
;
function cu(i, t, e) {
    let n = 0;
    for (let r = 0; r < i.position.length; r++) {
        let o = t[r]
          , l = i.position[r];
        if (o.field.isKeyField() ? n = F.comparator(F.fromName(l.referenceValue), e.key) : n = tn(l, e.data.field(o.field)),
        o.dir === "desc" && (n *= -1),
        n !== 0)
            break
    }
    return n
}
function uu(i, t) {
    if (i === null)
        return t === null;
    if (t === null || i.inclusive !== t.inclusive || i.position.length !== t.position.length)
        return !1;
    for (let e = 0; e < i.position.length; e++)
        if (!qt(i.position[e], t.position[e]))
            return !1;
    return !0
}
var rn = class {
    constructor(t, e="asc") {
        this.field = t,
        this.dir = e
    }
}
;
function qf(i, t) {
    return i.dir === t.dir && i.field.isEqual(t.field)
}
var Er = class {
}
  , lt = class i extends Er {
    constructor(t, e, n) {
        super(),
        this.field = t,
        this.op = e,
        this.value = n
    }
    static create(t, e, n) {
        return t.isKeyField() ? e === "in" || e === "not-in" ? this.createKeyFieldInFilter(t, e, n) : new wo(t,e,n) : e === "array-contains" ? new Io(t,n) : e === "in" ? new bo(t,n) : e === "not-in" ? new So(t,n) : e === "array-contains-any" ? new Ao(t,n) : new i(t,e,n)
    }
    static createKeyFieldInFilter(t, e, n) {
        return e === "in" ? new Eo(t,n) : new To(t,n)
    }
    matches(t) {
        let e = t.data.field(this.field);
        return this.op === "!=" ? e !== null && e.nullValue === void 0 && this.matchesComparison(tn(e, this.value)) : e !== null && le(this.value) === le(e) && this.matchesComparison(tn(e, this.value))
    }
    matchesComparison(t) {
        switch (this.op) {
        case "<":
            return t < 0;
        case "<=":
            return t <= 0;
        case "==":
            return t === 0;
        case "!=":
            return t !== 0;
        case ">":
            return t > 0;
        case ">=":
            return t >= 0;
        default:
            return M(47266, {
                operator: this.op
            })
        }
    }
    isInequality() {
        return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0
    }
    getFlattenedFilters() {
        return [this]
    }
    getFilters() {
        return [this]
    }
}
  , jt = class i extends Er {
    constructor(t, e) {
        super(),
        this.filters = t,
        this.op = e,
        this.he = null
    }
    static create(t, e) {
        return new i(t,e)
    }
    matches(t) {
        return fh(this) ? this.filters.find(e => !e.matches(t)) === void 0 : this.filters.find(e => e.matches(t)) !== void 0
    }
    getFlattenedFilters() {
        return this.he !== null || (this.he = this.filters.reduce( (t, e) => t.concat(e.getFlattenedFilters()), [])),
        this.he
    }
    getFilters() {
        return Object.assign([], this.filters)
    }
}
;
function fh(i) {
    return i.op === "and"
}
function ph(i) {
    return jf(i) && fh(i)
}
function jf(i) {
    for (let t of i.filters)
        if (t instanceof jt)
            return !1;
    return !0
}
function vo(i) {
    if (i instanceof lt)
        return i.field.canonicalString() + i.op.toString() + en(i.value);
    if (ph(i))
        return i.filters.map(t => vo(t)).join(",");
    {
        let t = i.filters.map(e => vo(e)).join(",");
        return `${i.op}(${t})`
    }
}
function mh(i, t) {
    return i instanceof lt ? (function(n, r) {
        return r instanceof lt && n.op === r.op && n.field.isEqual(r.field) && qt(n.value, r.value)
    }
    )(i, t) : i instanceof jt ? (function(n, r) {
        return r instanceof jt && n.op === r.op && n.filters.length === r.filters.length ? n.filters.reduce( (o, l, u) => o && mh(l, r.filters[u]), !0) : !1
    }
    )(i, t) : void M(19439)
}
function gh(i) {
    return i instanceof lt ? (function(e) {
        return `${e.field.canonicalString()} ${e.op} ${en(e.value)}`
    }
    )(i) : i instanceof jt ? (function(e) {
        return e.op.toString() + " {" + e.getFilters().map(gh).join(" ,") + "}"
    }
    )(i) : "Filter"
}
var wo = class extends lt {
    constructor(t, e, n) {
        super(t, e, n),
        this.key = F.fromName(n.referenceValue)
    }
    matches(t) {
        let e = F.comparator(t.key, this.key);
        return this.matchesComparison(e)
    }
}
  , Eo = class extends lt {
    constructor(t, e) {
        super(t, "in", e),
        this.keys = _h("in", e)
    }
    matches(t) {
        return this.keys.some(e => e.isEqual(t.key))
    }
}
  , To = class extends lt {
    constructor(t, e) {
        super(t, "not-in", e),
        this.keys = _h("not-in", e)
    }
    matches(t) {
        return !this.keys.some(e => e.isEqual(t.key))
    }
}
;
function _h(i, t) {
    var e;
    return (((e = t.arrayValue) === null || e === void 0 ? void 0 : e.values) || []).map(n => F.fromName(n.referenceValue))
}
var Io = class extends lt {
    constructor(t, e) {
        super(t, "array-contains", e)
    }
    matches(t) {
        let e = t.data.field(this.field);
        return La(e) && si(e.arrayValue, this.value)
    }
}
  , bo = class extends lt {
    constructor(t, e) {
        super(t, "in", e)
    }
    matches(t) {
        let e = t.data.field(this.field);
        return e !== null && si(this.value.arrayValue, e)
    }
}
  , So = class extends lt {
    constructor(t, e) {
        super(t, "not-in", e)
    }
    matches(t) {
        if (si(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        }))
            return !1;
        let e = t.data.field(this.field);
        return e !== null && e.nullValue === void 0 && !si(this.value.arrayValue, e)
    }
}
  , Ao = class extends lt {
    constructor(t, e) {
        super(t, "array-contains-any", e)
    }
    matches(t) {
        let e = t.data.field(this.field);
        return !(!La(e) || !e.arrayValue.values) && e.arrayValue.values.some(n => si(this.value.arrayValue, n))
    }
}
;
var Co = class {
    constructor(t, e=null, n=[], r=[], o=null, l=null, u=null) {
        this.path = t,
        this.collectionGroup = e,
        this.orderBy = n,
        this.filters = r,
        this.limit = o,
        this.startAt = l,
        this.endAt = u,
        this.Pe = null
    }
}
;
function hu(i, t=null, e=[], n=[], r=null, o=null, l=null) {
    return new Co(i,t,e,n,r,o,l)
}
function Ba(i) {
    let t = j(i);
    if (t.Pe === null) {
        let e = t.path.canonicalString();
        t.collectionGroup !== null && (e += "|cg:" + t.collectionGroup),
        e += "|f:",
        e += t.filters.map(n => vo(n)).join(","),
        e += "|ob:",
        e += t.orderBy.map(n => (function(o) {
            return o.field.canonicalString() + o.dir
        }
        )(n)).join(","),
        Ur(t.limit) || (e += "|l:",
        e += t.limit),
        t.startAt && (e += "|lb:",
        e += t.startAt.inclusive ? "b:" : "a:",
        e += t.startAt.position.map(n => en(n)).join(",")),
        t.endAt && (e += "|ub:",
        e += t.endAt.inclusive ? "a:" : "b:",
        e += t.endAt.position.map(n => en(n)).join(",")),
        t.Pe = e
    }
    return t.Pe
}
function qa(i, t) {
    if (i.limit !== t.limit || i.orderBy.length !== t.orderBy.length)
        return !1;
    for (let e = 0; e < i.orderBy.length; e++)
        if (!qf(i.orderBy[e], t.orderBy[e]))
            return !1;
    if (i.filters.length !== t.filters.length)
        return !1;
    for (let e = 0; e < i.filters.length; e++)
        if (!mh(i.filters[e], t.filters[e]))
            return !1;
    return i.collectionGroup === t.collectionGroup && !!i.path.isEqual(t.path) && !!uu(i.startAt, t.startAt) && uu(i.endAt, t.endAt)
}
function Ro(i) {
    return F.isDocumentKey(i.path) && i.collectionGroup === null && i.filters.length === 0
}
var sn = class {
    constructor(t, e=null, n=[], r=[], o=null, l="F", u=null, d=null) {
        this.path = t,
        this.collectionGroup = e,
        this.explicitOrderBy = n,
        this.filters = r,
        this.limit = o,
        this.limitType = l,
        this.startAt = u,
        this.endAt = d,
        this.Te = null,
        this.Ie = null,
        this.de = null,
        this.startAt,
        this.endAt
    }
}
;
function zf(i, t, e, n, r, o, l, u) {
    return new sn(i,t,e,n,r,o,l,u)
}
function ja(i) {
    return new sn(i)
}
function du(i) {
    return i.filters.length === 0 && i.limit === null && i.startAt == null && i.endAt == null && (i.explicitOrderBy.length === 0 || i.explicitOrderBy.length === 1 && i.explicitOrderBy[0].field.isKeyField())
}
function Uf(i) {
    return i.collectionGroup !== null
}
function Yn(i) {
    let t = j(i);
    if (t.Te === null) {
        t.Te = [];
        let e = new Set;
        for (let o of t.explicitOrderBy)
            t.Te.push(o),
            e.add(o.field.canonicalString());
        let n = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc";
        (function(l) {
            let u = new ut(Nt.comparator);
            return l.filters.forEach(d => {
                d.getFlattenedFilters().forEach(f => {
                    f.isInequality() && (u = u.add(f.field))
                }
                )
            }
            ),
            u
        }
        )(t).forEach(o => {
            e.has(o.canonicalString()) || o.isKeyField() || t.Te.push(new rn(o,n))
        }
        ),
        e.has(Nt.keyField().canonicalString()) || t.Te.push(new rn(Nt.keyField(),n))
    }
    return t.Te
}
function Bt(i) {
    let t = j(i);
    return t.Ie || (t.Ie = $f(t, Yn(i))),
    t.Ie
}
function $f(i, t) {
    if (i.limitType === "F")
        return hu(i.path, i.collectionGroup, t, i.filters, i.limit, i.startAt, i.endAt);
    {
        t = t.map(r => {
            let o = r.dir === "desc" ? "asc" : "desc";
            return new rn(r.field,o)
        }
        );
        let e = i.endAt ? new nn(i.endAt.position,i.endAt.inclusive) : null
          , n = i.startAt ? new nn(i.startAt.position,i.startAt.inclusive) : null;
        return hu(i.path, i.collectionGroup, t, i.filters, i.limit, e, n)
    }
}
function Do(i, t, e) {
    return new sn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)
}
function Gr(i, t) {
    return qa(Bt(i), Bt(t)) && i.limitType === t.limitType
}
function yh(i) {
    return `${Ba(Bt(i))}|lt:${i.limitType}`
}
function ze(i) {
    return `Query(target=${(function(e) {
        let n = e.path.canonicalString();
        return e.collectionGroup !== null && (n += " collectionGroup=" + e.collectionGroup),
        e.filters.length > 0 && (n += `, filters: [${e.filters.map(r => gh(r)).join(", ")}]`),
        Ur(e.limit) || (n += ", limit: " + e.limit),
        e.orderBy.length > 0 && (n += `, orderBy: [${e.orderBy.map(r => (function(l) {
            return `${l.field.canonicalString()} (${l.dir})`
        }
        )(r)).join(", ")}]`),
        e.startAt && (n += ", startAt: ",
        n += e.startAt.inclusive ? "b:" : "a:",
        n += e.startAt.position.map(r => en(r)).join(",")),
        e.endAt && (n += ", endAt: ",
        n += e.endAt.inclusive ? "a:" : "b:",
        n += e.endAt.position.map(r => en(r)).join(",")),
        `Target(${n})`
    }
    )(Bt(i))}; limitType=${i.limitType})`
}
function Kr(i, t) {
    return t.isFoundDocument() && (function(n, r) {
        let o = r.key.path;
        return n.collectionGroup !== null ? r.key.hasCollectionId(n.collectionGroup) && n.path.isPrefixOf(o) : F.isDocumentKey(n.path) ? n.path.isEqual(o) : n.path.isImmediateParentOf(o)
    }
    )(i, t) && (function(n, r) {
        for (let o of Yn(n))
            if (!o.field.isKeyField() && r.data.field(o.field) === null)
                return !1;
        return !0
    }
    )(i, t) && (function(n, r) {
        for (let o of n.filters)
            if (!o.matches(r))
                return !1;
        return !0
    }
    )(i, t) && (function(n, r) {
        return !(n.startAt && !(function(l, u, d) {
            let f = cu(l, u, d);
            return l.inclusive ? f <= 0 : f < 0
        }
        )(n.startAt, Yn(n), r) || n.endAt && !(function(l, u, d) {
            let f = cu(l, u, d);
            return l.inclusive ? f >= 0 : f > 0
        }
        )(n.endAt, Yn(n), r))
    }
    )(i, t)
}
function Gf(i) {
    return i.collectionGroup || (i.path.length % 2 == 1 ? i.path.lastSegment() : i.path.get(i.path.length - 2))
}
function vh(i) {
    return (t, e) => {
        let n = !1;
        for (let r of Yn(i)) {
            let o = Kf(r, t, e);
            if (o !== 0)
                return o;
            n = n || r.field.isKeyField()
        }
        return 0
    }
}
function Kf(i, t, e) {
    let n = i.field.isKeyField() ? F.comparator(t.key, e.key) : (function(o, l, u) {
        let d = l.data.field(o)
          , f = u.data.field(o);
        return d !== null && f !== null ? tn(d, f) : M(42886)
    }
    )(i.field, t, e);
    switch (i.dir) {
    case "asc":
        return n;
    case "desc":
        return -1 * n;
    default:
        return M(19790, {
            direction: i.dir
        })
    }
}
var te = class {
    constructor(t, e) {
        this.mapKeyFn = t,
        this.equalsFn = e,
        this.inner = {},
        this.innerSize = 0
    }
    get(t) {
        let e = this.mapKeyFn(t)
          , n = this.inner[e];
        if (n !== void 0) {
            for (let[r,o] of n)
                if (this.equalsFn(r, t))
                    return o
        }
    }
    has(t) {
        return this.get(t) !== void 0
    }
    set(t, e) {
        let n = this.mapKeyFn(t)
          , r = this.inner[n];
        if (r === void 0)
            return this.inner[n] = [[t, e]],
            void this.innerSize++;
        for (let o = 0; o < r.length; o++)
            if (this.equalsFn(r[o][0], t))
                return void (r[o] = [t, e]);
        r.push([t, e]),
        this.innerSize++
    }
    delete(t) {
        let e = this.mapKeyFn(t)
          , n = this.inner[e];
        if (n === void 0)
            return !1;
        for (let r = 0; r < n.length; r++)
            if (this.equalsFn(n[r][0], t))
                return n.length === 1 ? delete this.inner[e] : n.splice(r, 1),
                this.innerSize--,
                !0;
        return !1
    }
    forEach(t) {
        yi(this.inner, (e, n) => {
            for (let[r,o] of n)
                t(r, o)
        }
        )
    }
    isEmpty() {
        return Lf(this.inner)
    }
    size() {
        return this.innerSize
    }
}
;
var Wf = new it(F.comparator);
function ce() {
    return Wf
}
var wh = new it(F.comparator);
function Qn(...i) {
    let t = wh;
    for (let e of i)
        t = t.insert(e.key, e);
    return t
}
function Hf(i) {
    let t = wh;
    return i.forEach( (e, n) => t = t.insert(e, n.overlayedDocument)),
    t
}
function Te() {
    return Jn()
}
function Eh() {
    return Jn()
}
function Jn() {
    return new te(i => i.toString(), (i, t) => i.isEqual(t))
}
var Xm = new it(F.comparator)
  , Qf = new ut(F.comparator);
function z(...i) {
    let t = Qf;
    for (let e of i)
        t = t.add(e);
    return t
}
var Xf = new ut(B);
function Yf() {
    return Xf
}
function Jf(i, t) {
    if (i.useProto3Json) {
        if (isNaN(t))
            return {
                doubleValue: "NaN"
            };
        if (t === 1 / 0)
            return {
                doubleValue: "Infinity"
            };
        if (t === -1 / 0)
            return {
                doubleValue: "-Infinity"
            }
    }
    return {
        doubleValue: gr(t) ? "-0" : t
    }
}
function Zf(i) {
    return {
        integerValue: "" + i
    }
}
var on = class {
    constructor() {
        this._ = void 0
    }
}
;
function tp(i, t, e) {
    return i instanceof oi ? (function(r, o) {
        let l = {
            fields: {
                [sh]: {
                    stringValue: rh
                },
                [ah]: {
                    timestampValue: {
                        seconds: r.seconds,
                        nanos: r.nanoseconds
                    }
                }
            }
        };
        return o && Ma(o) && (o = $r(o)),
        o && (l.fields[oh] = o),
        {
            mapValue: l
        }
    }
    )(e, t) : i instanceof an ? Th(i, t) : i instanceof ln ? Ih(i, t) : (function(r, o) {
        let l = np(r, o)
          , u = fu(l) + fu(r.Ee);
        return yo(l) && yo(r.Ee) ? Zf(u) : Jf(r.serializer, u)
    }
    )(i, t)
}
function ep(i, t, e) {
    return i instanceof an ? Th(i, t) : i instanceof ln ? Ih(i, t) : e
}
function np(i, t) {
    return i instanceof ai ? (function(n) {
        return yo(n) || (function(o) {
            return !!o && "doubleValue"in o
        }
        )(n)
    }
    )(t) ? t : {
        integerValue: 0
    } : null
}
var oi = class extends on {
}
  , an = class extends on {
    constructor(t) {
        super(),
        this.elements = t
    }
}
;
function Th(i, t) {
    let e = bh(t);
    for (let n of i.elements)
        e.some(r => qt(r, n)) || e.push(n);
    return {
        arrayValue: {
            values: e
        }
    }
}
var ln = class extends on {
    constructor(t) {
        super(),
        this.elements = t
    }
}
;
function Ih(i, t) {
    let e = bh(t);
    for (let n of i.elements)
        e = e.filter(r => !qt(r, n));
    return {
        arrayValue: {
            values: e
        }
    }
}
var ai = class extends on {
    constructor(t, e) {
        super(),
        this.serializer = t,
        this.Ee = e
    }
}
;
function fu(i) {
    return X(i.integerValue || i.doubleValue)
}
function bh(i) {
    return La(i) && i.arrayValue.values ? i.arrayValue.values.slice() : []
}
function ip(i, t) {
    return i.field.isEqual(t.field) && (function(n, r) {
        return n instanceof an && r instanceof an || n instanceof ln && r instanceof ln ? Ze(n.elements, r.elements, qt) : n instanceof ai && r instanceof ai ? qt(n.Ee, r.Ee) : n instanceof oi && r instanceof oi
    }
    )(i.transform, t.transform)
}
var Zn = class i {
    constructor(t, e) {
        this.updateTime = t,
        this.exists = e
    }
    static none() {
        return new i
    }
    static exists(t) {
        return new i(void 0,t)
    }
    static updateTime(t) {
        return new i(t)
    }
    get isNone() {
        return this.updateTime === void 0 && this.exists === void 0
    }
    isEqual(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime)
    }
}
;
function dr(i, t) {
    return i.updateTime !== void 0 ? t.isFoundDocument() && t.version.isEqual(i.updateTime) : i.exists === void 0 || i.exists === t.isFoundDocument()
}
var li = class {
}
;
function Sh(i, t) {
    if (!i.hasLocalMutations || t && t.fields.length === 0)
        return null;
    if (t === null)
        return i.isNoDocument() ? new Po(i.key,Zn.none()) : new ci(i.key,i.data,Zn.none());
    {
        let e = i.data
          , n = Xt.empty()
          , r = new ut(Nt.comparator);
        for (let o of t.fields)
            if (!r.has(o)) {
                let l = e.field(o);
                l === null && o.length > 1 && (o = o.popLast(),
                l = e.field(o)),
                l === null ? n.delete(o) : n.set(o, l),
                r = r.add(o)
            }
        return new cn(i.key,n,new Ee(r.toArray()),Zn.none())
    }
}
function rp(i, t, e) {
    i instanceof ci ? (function(r, o, l) {
        let u = r.value.clone()
          , d = mu(r.fieldTransforms, o, l.transformResults);
        u.setAll(d),
        o.convertToFoundDocument(l.version, u).setHasCommittedMutations()
    }
    )(i, t, e) : i instanceof cn ? (function(r, o, l) {
        if (!dr(r.precondition, o))
            return void o.convertToUnknownDocument(l.version);
        let u = mu(r.fieldTransforms, o, l.transformResults)
          , d = o.data;
        d.setAll(Ah(r)),
        d.setAll(u),
        o.convertToFoundDocument(l.version, d).setHasCommittedMutations()
    }
    )(i, t, e) : (function(r, o, l) {
        o.convertToNoDocument(l.version).setHasCommittedMutations()
    }
    )(0, t, e)
}
function ti(i, t, e, n) {
    return i instanceof ci ? (function(o, l, u, d) {
        if (!dr(o.precondition, l))
            return u;
        let f = o.value.clone()
          , p = gu(o.fieldTransforms, d, l);
        return f.setAll(p),
        l.convertToFoundDocument(l.version, f).setHasLocalMutations(),
        null
    }
    )(i, t, e, n) : i instanceof cn ? (function(o, l, u, d) {
        if (!dr(o.precondition, l))
            return u;
        let f = gu(o.fieldTransforms, d, l)
          , p = l.data;
        return p.setAll(Ah(o)),
        p.setAll(f),
        l.convertToFoundDocument(l.version, p).setHasLocalMutations(),
        u === null ? null : u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E => E.field))
    }
    )(i, t, e, n) : (function(o, l, u) {
        return dr(o.precondition, l) ? (l.convertToNoDocument(l.version).setHasLocalMutations(),
        null) : u
    }
    )(i, t, e)
}
function pu(i, t) {
    return i.type === t.type && !!i.key.isEqual(t.key) && !!i.precondition.isEqual(t.precondition) && !!(function(n, r) {
        return n === void 0 && r === void 0 || !(!n || !r) && Ze(n, r, (o, l) => ip(o, l))
    }
    )(i.fieldTransforms, t.fieldTransforms) && (i.type === 0 ? i.value.isEqual(t.value) : i.type !== 1 || i.data.isEqual(t.data) && i.fieldMask.isEqual(t.fieldMask))
}
var ci = class extends li {
    constructor(t, e, n, r=[]) {
        super(),
        this.key = t,
        this.value = e,
        this.precondition = n,
        this.fieldTransforms = r,
        this.type = 0
    }
    getFieldMask() {
        return null
    }
}
  , cn = class extends li {
    constructor(t, e, n, r, o=[]) {
        super(),
        this.key = t,
        this.data = e,
        this.fieldMask = n,
        this.precondition = r,
        this.fieldTransforms = o,
        this.type = 1
    }
    getFieldMask() {
        return this.fieldMask
    }
}
;
function Ah(i) {
    let t = new Map;
    return i.fieldMask.fields.forEach(e => {
        if (!e.isEmpty()) {
            let n = i.data.field(e);
            t.set(e, n)
        }
    }
    ),
    t
}
function mu(i, t, e) {
    let n = new Map;
    Y(i.length === e.length, 32656, {
        Ae: e.length,
        Re: i.length
    });
    for (let r = 0; r < e.length; r++) {
        let o = i[r]
          , l = o.transform
          , u = t.data.field(o.field);
        n.set(o.field, ep(l, u, e[r]))
    }
    return n
}
function gu(i, t, e) {
    let n = new Map;
    for (let r of i) {
        let o = r.transform
          , l = e.data.field(r.field);
        n.set(r.field, tp(o, l, t))
    }
    return n
}
var Po = class extends li {
    constructor(t, e) {
        super(),
        this.key = t,
        this.precondition = e,
        this.type = 2,
        this.fieldTransforms = []
    }
    getFieldMask() {
        return null
    }
}
;
var xo = class {
    constructor(t, e, n, r) {
        this.batchId = t,
        this.localWriteTime = e,
        this.baseMutations = n,
        this.mutations = r
    }
    applyToRemoteDocument(t, e) {
        let n = e.mutationResults;
        for (let r = 0; r < this.mutations.length; r++) {
            let o = this.mutations[r];
            o.key.isEqual(t.key) && rp(o, t, n[r])
        }
    }
    applyToLocalView(t, e) {
        for (let n of this.baseMutations)
            n.key.isEqual(t.key) && (e = ti(n, t, e, this.localWriteTime));
        for (let n of this.mutations)
            n.key.isEqual(t.key) && (e = ti(n, t, e, this.localWriteTime));
        return e
    }
    applyToLocalDocumentSet(t, e) {
        let n = Eh();
        return this.mutations.forEach(r => {
            let o = t.get(r.key)
              , l = o.overlayedDocument
              , u = this.applyToLocalView(l, o.mutatedFields);
            u = e.has(r.key) ? null : u;
            let d = Sh(l, u);
            d !== null && n.set(r.key, d),
            l.isValidDocument() || l.convertToNoDocument(L.min())
        }
        ),
        n
    }
    keys() {
        return this.mutations.reduce( (t, e) => t.add(e.key), z())
    }
    isEqual(t) {
        return this.batchId === t.batchId && Ze(this.mutations, t.mutations, (e, n) => pu(e, n)) && Ze(this.baseMutations, t.baseMutations, (e, n) => pu(e, n))
    }
}
;
var ko = class {
    constructor(t, e) {
        this.largestBatchId = t,
        this.mutation = e
    }
    getKey() {
        return this.mutation.key
    }
    isEqual(t) {
        return t !== null && this.mutation === t.mutation
    }
    toString() {
        return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`
    }
}
;
var Vo = class {
    constructor(t, e) {
        this.count = t,
        this.unchangedNames = e
    }
}
;
var st, q;
function Ch(i) {
    if (i === void 0)
        return Yt("GRPC error has no .code"),
        D.UNKNOWN;
    switch (i) {
    case st.OK:
        return D.OK;
    case st.CANCELLED:
        return D.CANCELLED;
    case st.UNKNOWN:
        return D.UNKNOWN;
    case st.DEADLINE_EXCEEDED:
        return D.DEADLINE_EXCEEDED;
    case st.RESOURCE_EXHAUSTED:
        return D.RESOURCE_EXHAUSTED;
    case st.INTERNAL:
        return D.INTERNAL;
    case st.UNAVAILABLE:
        return D.UNAVAILABLE;
    case st.UNAUTHENTICATED:
        return D.UNAUTHENTICATED;
    case st.INVALID_ARGUMENT:
        return D.INVALID_ARGUMENT;
    case st.NOT_FOUND:
        return D.NOT_FOUND;
    case st.ALREADY_EXISTS:
        return D.ALREADY_EXISTS;
    case st.PERMISSION_DENIED:
        return D.PERMISSION_DENIED;
    case st.FAILED_PRECONDITION:
        return D.FAILED_PRECONDITION;
    case st.ABORTED:
        return D.ABORTED;
    case st.OUT_OF_RANGE:
        return D.OUT_OF_RANGE;
    case st.UNIMPLEMENTED:
        return D.UNIMPLEMENTED;
    case st.DATA_LOSS:
        return D.DATA_LOSS;
    default:
        return M(39323, {
            code: i
        })
    }
}
(q = st || (st = {}))[q.OK = 0] = "OK",
q[q.CANCELLED = 1] = "CANCELLED",
q[q.UNKNOWN = 2] = "UNKNOWN",
q[q.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT",
q[q.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED",
q[q.NOT_FOUND = 5] = "NOT_FOUND",
q[q.ALREADY_EXISTS = 6] = "ALREADY_EXISTS",
q[q.PERMISSION_DENIED = 7] = "PERMISSION_DENIED",
q[q.UNAUTHENTICATED = 16] = "UNAUTHENTICATED",
q[q.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED",
q[q.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION",
q[q.ABORTED = 10] = "ABORTED",
q[q.OUT_OF_RANGE = 11] = "OUT_OF_RANGE",
q[q.UNIMPLEMENTED = 12] = "UNIMPLEMENTED",
q[q.INTERNAL = 13] = "INTERNAL",
q[q.UNAVAILABLE = 14] = "UNAVAILABLE",
q[q.DATA_LOSS = 15] = "DATA_LOSS";
var _u = null;
var sp = new Ht([4294967295, 4294967295],0);
function yu(i) {
    let t = Uu().encode(i)
      , e = new Qs;
    return e.update(t),
    new Uint8Array(e.digest())
}
function vu(i) {
    let t = new DataView(i.buffer)
      , e = t.getUint32(0, !0)
      , n = t.getUint32(4, !0)
      , r = t.getUint32(8, !0)
      , o = t.getUint32(12, !0);
    return [new Ht([e, n],0), new Ht([r, o],0)]
}
var Oo = class i {
    constructor(t, e, n) {
        if (this.bitmap = t,
        this.padding = e,
        this.hashCount = n,
        e < 0 || e >= 8)
            throw new Ie(`Invalid padding: ${e}`);
        if (n < 0)
            throw new Ie(`Invalid hash count: ${n}`);
        if (t.length > 0 && this.hashCount === 0)
            throw new Ie(`Invalid hash count: ${n}`);
        if (t.length === 0 && e !== 0)
            throw new Ie(`Invalid padding when bitmap length is 0: ${e}`);
        this.fe = 8 * t.length - e,
        this.ge = Ht.fromNumber(this.fe)
    }
    pe(t, e, n) {
        let r = t.add(e.multiply(Ht.fromNumber(n)));
        return r.compare(sp) === 1 && (r = new Ht([r.getBits(0), r.getBits(1)],0)),
        r.modulo(this.ge).toNumber()
    }
    ye(t) {
        return !!(this.bitmap[Math.floor(t / 8)] & 1 << t % 8)
    }
    mightContain(t) {
        if (this.fe === 0)
            return !1;
        let e = yu(t)
          , [n,r] = vu(e);
        for (let o = 0; o < this.hashCount; o++) {
            let l = this.pe(n, r, o);
            if (!this.ye(l))
                return !1
        }
        return !0
    }
    static create(t, e, n) {
        let r = t % 8 == 0 ? 0 : 8 - t % 8
          , o = new Uint8Array(Math.ceil(t / 8))
          , l = new i(o,r,e);
        return n.forEach(u => l.insert(u)),
        l
    }
    insert(t) {
        if (this.fe === 0)
            return;
        let e = yu(t)
          , [n,r] = vu(e);
        for (let o = 0; o < this.hashCount; o++) {
            let l = this.pe(n, r, o);
            this.we(l)
        }
    }
    we(t) {
        let e = Math.floor(t / 8)
          , n = t % 8;
        this.bitmap[e] |= 1 << n
    }
}
  , Ie = class extends Error {
    constructor() {
        super(...arguments),
        this.name = "BloomFilterError"
    }
}
;
var Tr = class i {
    constructor(t, e, n, r, o) {
        this.snapshotVersion = t,
        this.targetChanges = e,
        this.targetMismatches = n,
        this.documentUpdates = r,
        this.resolvedLimboDocuments = o
    }
    static createSynthesizedRemoteEventForCurrentChange(t, e, n) {
        let r = new Map;
        return r.set(t, ui.createSynthesizedTargetChangeForCurrentChange(t, e, n)),
        new i(L.min(),r,new it(B),ce(),z())
    }
}
  , ui = class i {
    constructor(t, e, n, r, o) {
        this.resumeToken = t,
        this.current = e,
        this.addedDocuments = n,
        this.modifiedDocuments = r,
        this.removedDocuments = o
    }
    static createSynthesizedTargetChangeForCurrentChange(t, e, n) {
        return new i(n,e,z(),z(),z())
    }
}
;
var Ke = class {
    constructor(t, e, n, r) {
        this.Se = t,
        this.removedTargetIds = e,
        this.key = n,
        this.be = r
    }
}
  , Ir = class {
    constructor(t, e) {
        this.targetId = t,
        this.De = e
    }
}
  , br = class {
    constructor(t, e, n=_t.EMPTY_BYTE_STRING, r=null) {
        this.state = t,
        this.targetIds = e,
        this.resumeToken = n,
        this.cause = r
    }
}
  , Sr = class {
    constructor() {
        this.ve = 0,
        this.Ce = wu(),
        this.Fe = _t.EMPTY_BYTE_STRING,
        this.Me = !1,
        this.xe = !0
    }
    get current() {
        return this.Me
    }
    get resumeToken() {
        return this.Fe
    }
    get Oe() {
        return this.ve !== 0
    }
    get Ne() {
        return this.xe
    }
    Be(t) {
        t.approximateByteSize() > 0 && (this.xe = !0,
        this.Fe = t)
    }
    Le() {
        let t = z()
          , e = z()
          , n = z();
        return this.Ce.forEach( (r, o) => {
            switch (o) {
            case 0:
                t = t.add(r);
                break;
            case 2:
                e = e.add(r);
                break;
            case 1:
                n = n.add(r);
                break;
            default:
                M(38017, {
                    changeType: o
                })
            }
        }
        ),
        new ui(this.Fe,this.Me,t,e,n)
    }
    ke() {
        this.xe = !1,
        this.Ce = wu()
    }
    qe(t, e) {
        this.xe = !0,
        this.Ce = this.Ce.insert(t, e)
    }
    Qe(t) {
        this.xe = !0,
        this.Ce = this.Ce.remove(t)
    }
    $e() {
        this.ve += 1
    }
    Ue() {
        this.ve -= 1,
        Y(this.ve >= 0, 3241, {
            ve: this.ve
        })
    }
    Ke() {
        this.xe = !0,
        this.Me = !0
    }
}
  , No = class {
    constructor(t) {
        this.We = t,
        this.Ge = new Map,
        this.ze = ce(),
        this.je = lr(),
        this.Je = lr(),
        this.He = new it(B)
    }
    Ye(t) {
        for (let e of t.Se)
            t.be && t.be.isFoundDocument() ? this.Ze(e, t.be) : this.Xe(e, t.key, t.be);
        for (let e of t.removedTargetIds)
            this.Xe(e, t.key, t.be)
    }
    et(t) {
        this.forEachTarget(t, e => {
            let n = this.tt(e);
            switch (t.state) {
            case 0:
                this.nt(e) && n.Be(t.resumeToken);
                break;
            case 1:
                n.Ue(),
                n.Oe || n.ke(),
                n.Be(t.resumeToken);
                break;
            case 2:
                n.Ue(),
                n.Oe || this.removeTarget(e);
                break;
            case 3:
                this.nt(e) && (n.Ke(),
                n.Be(t.resumeToken));
                break;
            case 4:
                this.nt(e) && (this.rt(e),
                n.Be(t.resumeToken));
                break;
            default:
                M(56790, {
                    state: t.state
                })
            }
        }
        )
    }
    forEachTarget(t, e) {
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Ge.forEach( (n, r) => {
            this.nt(r) && e(r)
        }
        )
    }
    it(t) {
        let e = t.targetId
          , n = t.De.count
          , r = this.st(e);
        if (r) {
            let o = r.target;
            if (Ro(o))
                if (n === 0) {
                    let l = new F(o.path);
                    this.Xe(e, l, Ft.newNoDocument(l, L.min()))
                } else
                    Y(n === 1, 20013, {
                        expectedCount: n
                    });
            else {
                let l = this.ot(e);
                if (l !== n) {
                    let u = this._t(t)
                      , d = u ? this.ut(u, t, l) : 1;
                    if (d !== 0) {
                        this.rt(e);
                        let f = d === 2 ? "TargetPurposeExistenceFilterMismatchBloom" : "TargetPurposeExistenceFilterMismatch";
                        this.He = this.He.insert(e, f)
                    }
                    _u?.ct((function(p, E, S, C, P) {
                        var O, V, K, $, G, J;
                        let At = {
                            localCacheCount: p,
                            existenceFilterCount: E.count,
                            databaseId: S.database,
                            projectId: S.projectId
                        }
                          , H = E.unchangedNames;
                        return H && (At.bloomFilter = {
                            applied: P === 0,
                            hashCount: (O = H?.hashCount) !== null && O !== void 0 ? O : 0,
                            bitmapLength: ($ = (K = (V = H?.bits) === null || V === void 0 ? void 0 : V.bitmap) === null || K === void 0 ? void 0 : K.length) !== null && $ !== void 0 ? $ : 0,
                            padding: (J = (G = H?.bits) === null || G === void 0 ? void 0 : G.padding) !== null && J !== void 0 ? J : 0,
                            mightContain: w => {
                                var m;
                                return (m = C?.mightContain(w)) !== null && m !== void 0 && m
                            }
                        }),
                        At
                    }
                    )(l, t.De, this.We.lt(), u, d))
                }
            }
        }
    }
    _t(t) {
        let e = t.De.unchangedNames;
        if (!e || !e.bits)
            return null;
        let {bits: {bitmap: n="", padding: r=0}, hashCount: o=0} = e, l, u;
        try {
            l = Zt(n).toUint8Array()
        } catch (d) {
            if (d instanceof yr)
                return ae("Decoding the base64 bloom filter in existence filter failed (" + d.message + "); ignoring the bloom filter and falling back to full re-query."),
                null;
            throw d
        }
        try {
            u = new Oo(l,r,o)
        } catch (d) {
            return ae(d instanceof Ie ? "BloomFilter error: " : "Applying bloom filter failed: ", d),
            null
        }
        return u.fe === 0 ? null : u
    }
    ut(t, e, n) {
        return e.De.count === n - this.ht(t, e.targetId) ? 0 : 2
    }
    ht(t, e) {
        let n = this.We.getRemoteKeysForTarget(e)
          , r = 0;
        return n.forEach(o => {
            let l = this.We.lt()
              , u = `projects/${l.projectId}/databases/${l.database}/documents/${o.path.canonicalString()}`;
            t.mightContain(u) || (this.Xe(e, o, null),
            r++)
        }
        ),
        r
    }
    Pt(t) {
        let e = new Map;
        this.Ge.forEach( (o, l) => {
            let u = this.st(l);
            if (u) {
                if (o.current && Ro(u.target)) {
                    let d = new F(u.target.path);
                    this.Tt(d).has(l) || this.It(l, d) || this.Xe(l, d, Ft.newNoDocument(d, t))
                }
                o.Ne && (e.set(l, o.Le()),
                o.ke())
            }
        }
        );
        let n = z();
        this.Je.forEach( (o, l) => {
            let u = !0;
            l.forEachWhile(d => {
                let f = this.st(d);
                return !f || f.purpose === "TargetPurposeLimboResolution" || (u = !1,
                !1)
            }
            ),
            u && (n = n.add(o))
        }
        ),
        this.ze.forEach( (o, l) => l.setReadTime(t));
        let r = new Tr(t,e,this.He,this.ze,n);
        return this.ze = ce(),
        this.je = lr(),
        this.Je = lr(),
        this.He = new it(B),
        r
    }
    Ze(t, e) {
        if (!this.nt(t))
            return;
        let n = this.It(t, e.key) ? 2 : 0;
        this.tt(t).qe(e.key, n),
        this.ze = this.ze.insert(e.key, e),
        this.je = this.je.insert(e.key, this.Tt(e.key).add(t)),
        this.Je = this.Je.insert(e.key, this.dt(e.key).add(t))
    }
    Xe(t, e, n) {
        if (!this.nt(t))
            return;
        let r = this.tt(t);
        this.It(t, e) ? r.qe(e, 1) : r.Qe(e),
        this.Je = this.Je.insert(e, this.dt(e).delete(t)),
        this.Je = this.Je.insert(e, this.dt(e).add(t)),
        n && (this.ze = this.ze.insert(e, n))
    }
    removeTarget(t) {
        this.Ge.delete(t)
    }
    ot(t) {
        let e = this.tt(t).Le();
        return this.We.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size
    }
    $e(t) {
        this.tt(t).$e()
    }
    tt(t) {
        let e = this.Ge.get(t);
        return e || (e = new Sr,
        this.Ge.set(t, e)),
        e
    }
    dt(t) {
        let e = this.Je.get(t);
        return e || (e = new ut(B),
        this.Je = this.Je.insert(t, e)),
        e
    }
    Tt(t) {
        let e = this.je.get(t);
        return e || (e = new ut(B),
        this.je = this.je.insert(t, e)),
        e
    }
    nt(t) {
        let e = this.st(t) !== null;
        return e || k("WatchChangeAggregator", "Detected inactive target", t),
        e
    }
    st(t) {
        let e = this.Ge.get(t);
        return e && e.Oe ? null : this.We.Et(t)
    }
    rt(t) {
        this.Ge.set(t, new Sr),
        this.We.getRemoteKeysForTarget(t).forEach(e => {
            this.Xe(t, e, null)
        }
        )
    }
    It(t, e) {
        return this.We.getRemoteKeysForTarget(t).has(e)
    }
}
;
function lr() {
    return new it(F.comparator)
}
function wu() {
    return new it(F.comparator)
}
var op = {
    asc: "ASCENDING",
    desc: "DESCENDING"
}
  , ap = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
}
  , lp = {
    and: "AND",
    or: "OR"
}
  , Fo = class {
    constructor(t, e) {
        this.databaseId = t,
        this.useProto3Json = e
    }
}
;
function Mo(i, t) {
    return i.useProto3Json || Ur(t) ? t : {
        value: t
    }
}
function cp(i, t) {
    return i.useProto3Json ? `${new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z` : {
        seconds: "" + t.seconds,
        nanos: t.nanoseconds
    }
}
function up(i, t) {
    return i.useProto3Json ? t.toBase64() : t.toUint8Array()
}
function We(i) {
    return Y(!!i, 49232),
    L.fromTimestamp((function(e) {
        let n = Jt(e);
        return new Et(n.seconds,n.nanos)
    }
    )(i))
}
function hp(i, t) {
    return Lo(i, t).canonicalString()
}
function Lo(i, t) {
    let e = (function(r) {
        return new nt(["projects", r.projectId, "databases", r.database])
    }
    )(i).child("documents");
    return t === void 0 ? e : e.child(t)
}
function Rh(i) {
    let t = nt.fromString(i);
    return Y(Vh(t), 10190, {
        key: t.toString()
    }),
    t
}
function no(i, t) {
    let e = Rh(t);
    if (e.get(1) !== i.databaseId.projectId)
        throw new N(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: " + e.get(1) + " vs " + i.databaseId.projectId);
    if (e.get(3) !== i.databaseId.database)
        throw new N(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: " + e.get(3) + " vs " + i.databaseId.database);
    return new F(Ph(e))
}
function Dh(i, t) {
    return hp(i.databaseId, t)
}
function dp(i) {
    let t = Rh(i);
    return t.length === 4 ? nt.emptyPath() : Ph(t)
}
function Eu(i) {
    return new nt(["projects", i.databaseId.projectId, "databases", i.databaseId.database]).canonicalString()
}
function Ph(i) {
    return Y(i.length > 4 && i.get(4) === "documents", 29091, {
        key: i.toString()
    }),
    i.popFirst(5)
}
function fp(i, t) {
    let e;
    if ("targetChange"in t) {
        t.targetChange;
        let n = (function(f) {
            return f === "NO_CHANGE" ? 0 : f === "ADD" ? 1 : f === "REMOVE" ? 2 : f === "CURRENT" ? 3 : f === "RESET" ? 4 : M(39313, {
                state: f
            })
        }
        )(t.targetChange.targetChangeType || "NO_CHANGE")
          , r = t.targetChange.targetIds || []
          , o = (function(f, p) {
            return f.useProto3Json ? (Y(p === void 0 || typeof p == "string", 58123),
            _t.fromBase64String(p || "")) : (Y(p === void 0 || p instanceof Buffer || p instanceof Uint8Array, 16193),
            _t.fromUint8Array(p || new Uint8Array))
        }
        )(i, t.targetChange.resumeToken)
          , l = t.targetChange.cause
          , u = l && (function(f) {
            let p = f.code === void 0 ? D.UNKNOWN : Ch(f.code);
            return new N(p,f.message || "")
        }
        )(l);
        e = new br(n,r,o,u || null)
    } else if ("documentChange"in t) {
        t.documentChange;
        let n = t.documentChange;
        n.document,
        n.document.name,
        n.document.updateTime;
        let r = no(i, n.document.name)
          , o = We(n.document.updateTime)
          , l = n.document.createTime ? We(n.document.createTime) : L.min()
          , u = new Xt({
            mapValue: {
                fields: n.document.fields
            }
        })
          , d = Ft.newFoundDocument(r, o, l, u)
          , f = n.targetIds || []
          , p = n.removedTargetIds || [];
        e = new Ke(f,p,d.key,d)
    } else if ("documentDelete"in t) {
        t.documentDelete;
        let n = t.documentDelete;
        n.document;
        let r = no(i, n.document)
          , o = n.readTime ? We(n.readTime) : L.min()
          , l = Ft.newNoDocument(r, o)
          , u = n.removedTargetIds || [];
        e = new Ke([],u,l.key,l)
    } else if ("documentRemove"in t) {
        t.documentRemove;
        let n = t.documentRemove;
        n.document;
        let r = no(i, n.document)
          , o = n.removedTargetIds || [];
        e = new Ke([],o,r,null)
    } else {
        if (!("filter"in t))
            return M(11601, {
                At: t
            });
        {
            t.filter;
            let n = t.filter;
            n.targetId;
            let {count: r=0, unchangedNames: o} = n
              , l = new Vo(r,o)
              , u = n.targetId;
            e = new Ir(u,l)
        }
    }
    return e
}
function pp(i, t) {
    return {
        documents: [Dh(i, t.path)]
    }
}
function mp(i, t) {
    let e = {
        structuredQuery: {}
    }, n = t.path, r;
    t.collectionGroup !== null ? (r = n,
    e.structuredQuery.from = [{
        collectionId: t.collectionGroup,
        allDescendants: !0
    }]) : (r = n.popLast(),
    e.structuredQuery.from = [{
        collectionId: n.lastSegment()
    }]),
    e.parent = Dh(i, r);
    let o = (function(f) {
        if (f.length !== 0)
            return kh(jt.create(f, "and"))
    }
    )(t.filters);
    o && (e.structuredQuery.where = o);
    let l = (function(f) {
        if (f.length !== 0)
            return f.map(p => (function(S) {
                return {
                    field: Ue(S.field),
                    direction: yp(S.dir)
                }
            }
            )(p))
    }
    )(t.orderBy);
    l && (e.structuredQuery.orderBy = l);
    let u = Mo(i, t.limit);
    return u !== null && (e.structuredQuery.limit = u),
    t.startAt && (e.structuredQuery.startAt = (function(f) {
        return {
            before: f.inclusive,
            values: f.position
        }
    }
    )(t.startAt)),
    t.endAt && (e.structuredQuery.endAt = (function(f) {
        return {
            before: !f.inclusive,
            values: f.position
        }
    }
    )(t.endAt)),
    {
        Vt: e,
        parent: r
    }
}
function gp(i) {
    let t = dp(i.parent)
      , e = i.structuredQuery
      , n = e.from ? e.from.length : 0
      , r = null;
    if (n > 0) {
        Y(n === 1, 65062);
        let p = e.from[0];
        p.allDescendants ? r = p.collectionId : t = t.child(p.collectionId)
    }
    let o = [];
    e.where && (o = (function(E) {
        let S = xh(E);
        return S instanceof jt && ph(S) ? S.getFilters() : [S]
    }
    )(e.where));
    let l = [];
    e.orderBy && (l = (function(E) {
        return E.map(S => (function(P) {
            return new rn($e(P.field),(function(V) {
                switch (V) {
                case "ASCENDING":
                    return "asc";
                case "DESCENDING":
                    return "desc";
                default:
                    return
                }
            }
            )(P.direction))
        }
        )(S))
    }
    )(e.orderBy));
    let u = null;
    e.limit && (u = (function(E) {
        let S;
        return S = typeof E == "object" ? E.value : E,
        Ur(S) ? null : S
    }
    )(e.limit));
    let d = null;
    e.startAt && (d = (function(E) {
        let S = !!E.before
          , C = E.values || [];
        return new nn(C,S)
    }
    )(e.startAt));
    let f = null;
    return e.endAt && (f = (function(E) {
        let S = !E.before
          , C = E.values || [];
        return new nn(C,S)
    }
    )(e.endAt)),
    zf(t, r, l, o, u, "F", d, f)
}
function _p(i, t) {
    let e = (function(r) {
        switch (r) {
        case "TargetPurposeListen":
            return null;
        case "TargetPurposeExistenceFilterMismatch":
            return "existence-filter-mismatch";
        case "TargetPurposeExistenceFilterMismatchBloom":
            return "existence-filter-mismatch-bloom";
        case "TargetPurposeLimboResolution":
            return "limbo-document";
        default:
            return M(28987, {
                purpose: r
            })
        }
    }
    )(t.purpose);
    return e == null ? null : {
        "goog-listen-tags": e
    }
}
function xh(i) {
    return i.unaryFilter !== void 0 ? (function(e) {
        switch (e.unaryFilter.op) {
        case "IS_NAN":
            let n = $e(e.unaryFilter.field);
            return lt.create(n, "==", {
                doubleValue: NaN
            });
        case "IS_NULL":
            let r = $e(e.unaryFilter.field);
            return lt.create(r, "==", {
                nullValue: "NULL_VALUE"
            });
        case "IS_NOT_NAN":
            let o = $e(e.unaryFilter.field);
            return lt.create(o, "!=", {
                doubleValue: NaN
            });
        case "IS_NOT_NULL":
            let l = $e(e.unaryFilter.field);
            return lt.create(l, "!=", {
                nullValue: "NULL_VALUE"
            });
        case "OPERATOR_UNSPECIFIED":
            return M(61313);
        default:
            return M(60726)
        }
    }
    )(i) : i.fieldFilter !== void 0 ? (function(e) {
        return lt.create($e(e.fieldFilter.field), (function(r) {
            switch (r) {
            case "EQUAL":
                return "==";
            case "NOT_EQUAL":
                return "!=";
            case "GREATER_THAN":
                return ">";
            case "GREATER_THAN_OR_EQUAL":
                return ">=";
            case "LESS_THAN":
                return "<";
            case "LESS_THAN_OR_EQUAL":
                return "<=";
            case "ARRAY_CONTAINS":
                return "array-contains";
            case "IN":
                return "in";
            case "NOT_IN":
                return "not-in";
            case "ARRAY_CONTAINS_ANY":
                return "array-contains-any";
            case "OPERATOR_UNSPECIFIED":
                return M(58110);
            default:
                return M(50506)
            }
        }
        )(e.fieldFilter.op), e.fieldFilter.value)
    }
    )(i) : i.compositeFilter !== void 0 ? (function(e) {
        return jt.create(e.compositeFilter.filters.map(n => xh(n)), (function(r) {
            switch (r) {
            case "AND":
                return "and";
            case "OR":
                return "or";
            default:
                return M(1026)
            }
        }
        )(e.compositeFilter.op))
    }
    )(i) : M(30097, {
        filter: i
    })
}
function yp(i) {
    return op[i]
}
function vp(i) {
    return ap[i]
}
function wp(i) {
    return lp[i]
}
function Ue(i) {
    return {
        fieldPath: i.canonicalString()
    }
}
function $e(i) {
    return Nt.fromServerFormat(i.fieldPath)
}
function kh(i) {
    return i instanceof lt ? (function(e) {
        if (e.op === "==") {
            if (lu(e.value))
                return {
                    unaryFilter: {
                        field: Ue(e.field),
                        op: "IS_NAN"
                    }
                };
            if (au(e.value))
                return {
                    unaryFilter: {
                        field: Ue(e.field),
                        op: "IS_NULL"
                    }
                }
        } else if (e.op === "!=") {
            if (lu(e.value))
                return {
                    unaryFilter: {
                        field: Ue(e.field),
                        op: "IS_NOT_NAN"
                    }
                };
            if (au(e.value))
                return {
                    unaryFilter: {
                        field: Ue(e.field),
                        op: "IS_NOT_NULL"
                    }
                }
        }
        return {
            fieldFilter: {
                field: Ue(e.field),
                op: vp(e.op),
                value: e.value
            }
        }
    }
    )(i) : i instanceof jt ? (function(e) {
        let n = e.getFilters().map(r => kh(r));
        return n.length === 1 ? n[0] : {
            compositeFilter: {
                op: wp(e.op),
                filters: n
            }
        }
    }
    )(i) : M(54877, {
        filter: i
    })
}
function Vh(i) {
    return i.length >= 4 && i.get(0) === "projects" && i.get(2) === "databases"
}
var hi = class i {
    constructor(t, e, n, r, o=L.min(), l=L.min(), u=_t.EMPTY_BYTE_STRING, d=null) {
        this.target = t,
        this.targetId = e,
        this.purpose = n,
        this.sequenceNumber = r,
        this.snapshotVersion = o,
        this.lastLimboFreeSnapshotVersion = l,
        this.resumeToken = u,
        this.expectedCount = d
    }
    withSequenceNumber(t) {
        return new i(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)
    }
    withResumeToken(t, e) {
        return new i(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)
    }
    withExpectedCount(t) {
        return new i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)
    }
    withLastLimboFreeSnapshotVersion(t) {
        return new i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)
    }
}
;
var Bo = class {
    constructor(t) {
        this.gt = t
    }
}
;
function Ep(i) {
    let t = gp({
        parent: i.parent,
        structuredQuery: i.structuredQuery
    });
    return i.limitType === "LAST" ? Do(t, t.limit, "L") : t
}
var Ar = class {
    constructor() {}
    bt(t, e) {
        this.Dt(t, e),
        e.vt()
    }
    Dt(t, e) {
        if ("nullValue"in t)
            this.Ct(e, 5);
        else if ("booleanValue"in t)
            this.Ct(e, 10),
            e.Ft(t.booleanValue ? 1 : 0);
        else if ("integerValue"in t)
            this.Ct(e, 15),
            e.Ft(X(t.integerValue));
        else if ("doubleValue"in t) {
            let n = X(t.doubleValue);
            isNaN(n) ? this.Ct(e, 13) : (this.Ct(e, 15),
            gr(n) ? e.Ft(0) : e.Ft(n))
        } else if ("timestampValue"in t) {
            let n = t.timestampValue;
            this.Ct(e, 20),
            typeof n == "string" && (n = Jt(n)),
            e.Mt(`${n.seconds || ""}`),
            e.Ft(n.nanos || 0)
        } else if ("stringValue"in t)
            this.xt(t.stringValue, e),
            this.Ot(e);
        else if ("bytesValue"in t)
            this.Ct(e, 30),
            e.Nt(Zt(t.bytesValue)),
            this.Ot(e);
        else if ("referenceValue"in t)
            this.Bt(t.referenceValue, e);
        else if ("geoPointValue"in t) {
            let n = t.geoPointValue;
            this.Ct(e, 45),
            e.Ft(n.latitude || 0),
            e.Ft(n.longitude || 0)
        } else
            "mapValue"in t ? dh(t) ? this.Ct(e, Number.MAX_SAFE_INTEGER) : hh(t) ? this.Lt(t.mapValue, e) : (this.kt(t.mapValue, e),
            this.Ot(e)) : "arrayValue"in t ? (this.qt(t.arrayValue, e),
            this.Ot(e)) : M(19022, {
                Qt: t
            })
    }
    xt(t, e) {
        this.Ct(e, 25),
        this.$t(t, e)
    }
    $t(t, e) {
        e.Mt(t)
    }
    kt(t, e) {
        let n = t.fields || {};
        this.Ct(e, 55);
        for (let r of Object.keys(n))
            this.xt(r, e),
            this.Dt(n[r], e)
    }
    Lt(t, e) {
        var n, r;
        let o = t.fields || {};
        this.Ct(e, 53);
        let l = ri
          , u = ((r = (n = o[l].arrayValue) === null || n === void 0 ? void 0 : n.values) === null || r === void 0 ? void 0 : r.length) || 0;
        this.Ct(e, 15),
        e.Ft(X(u)),
        this.xt(l, e),
        this.Dt(o[l], e)
    }
    qt(t, e) {
        let n = t.values || [];
        this.Ct(e, 50);
        for (let r of n)
            this.Dt(r, e)
    }
    Bt(t, e) {
        this.Ct(e, 37),
        F.fromName(t).path.forEach(n => {
            this.Ct(e, 60),
            this.$t(n, e)
        }
        )
    }
    Ct(t, e) {
        t.Ft(e)
    }
    Ot(t) {
        t.Ft(2)
    }
}
;
Ar.Ut = new Ar;
var qo = class {
    constructor() {
        this.Dn = new jo
    }
    addToCollectionParentIndex(t, e) {
        return this.Dn.add(e),
        A.resolve()
    }
    getCollectionParents(t, e) {
        return A.resolve(this.Dn.getEntries(e))
    }
    addFieldIndex(t, e) {
        return A.resolve()
    }
    deleteFieldIndex(t, e) {
        return A.resolve()
    }
    deleteAllFieldIndexes(t) {
        return A.resolve()
    }
    createTargetIndexes(t, e) {
        return A.resolve()
    }
    getDocumentsMatchingTarget(t, e) {
        return A.resolve(null)
    }
    getIndexType(t, e) {
        return A.resolve(0)
    }
    getFieldIndexes(t, e) {
        return A.resolve([])
    }
    getNextCollectionGroupToUpdate(t) {
        return A.resolve(null)
    }
    getMinOffset(t, e) {
        return A.resolve(Ce.min())
    }
    getMinOffsetFromCollectionGroup(t, e) {
        return A.resolve(Ce.min())
    }
    updateCollectionGroup(t, e, n) {
        return A.resolve()
    }
    updateIndexEntries(t, e) {
        return A.resolve()
    }
}
  , jo = class {
    constructor() {
        this.index = {}
    }
    add(t) {
        let e = t.lastSegment()
          , n = t.popLast()
          , r = this.index[e] || new ut(nt.comparator)
          , o = !r.has(n);
        return this.index[e] = r.add(n),
        o
    }
    has(t) {
        let e = t.lastSegment()
          , n = t.popLast()
          , r = this.index[e];
        return r && r.has(n)
    }
    getEntries(t) {
        return (this.index[t] || new ut(nt.comparator)).toArray()
    }
}
;
var Ym = new Uint8Array(0);
var Tu = {
    didRun: !1,
    sequenceNumbersCollected: 0,
    targetsRemoved: 0,
    documentsRemoved: 0
}
  , Oh = 41943040
  , Rt = class i {
    static withCacheSize(t) {
        return new i(t,i.DEFAULT_COLLECTION_PERCENTILE,i.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)
    }
    constructor(t, e, n) {
        this.cacheSizeCollectionThreshold = t,
        this.percentileToCollect = e,
        this.maximumSequenceNumbersToCollect = n
    }
}
;
Rt.DEFAULT_COLLECTION_PERCENTILE = 10,
Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3,
Rt.DEFAULT = new Rt(Oh,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),
Rt.DISABLED = new Rt(-1,0,0);
var di = class i {
    constructor(t) {
        this._r = t
    }
    next() {
        return this._r += 2,
        this._r
    }
    static ar() {
        return new i(0)
    }
    static ur() {
        return new i(-1)
    }
}
;
var Iu = "LruGarbageCollector"
  , Tp = 1048576;
function bu([i,t], [e,n]) {
    let r = B(i, e);
    return r === 0 ? B(t, n) : r
}
var zo = class {
    constructor(t) {
        this.Tr = t,
        this.buffer = new ut(bu),
        this.Ir = 0
    }
    dr() {
        return ++this.Ir
    }
    Er(t) {
        let e = [t, this.dr()];
        if (this.buffer.size < this.Tr)
            this.buffer = this.buffer.add(e);
        else {
            let n = this.buffer.last();
            bu(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e))
        }
    }
    get maxValue() {
        return this.buffer.last()[0]
    }
}
  , Uo = class {
    constructor(t, e, n) {
        this.garbageCollector = t,
        this.asyncQueue = e,
        this.localStore = n,
        this.Ar = null
    }
    start() {
        this.garbageCollector.params.cacheSizeCollectionThreshold !== -1 && this.Rr(6e4)
    }
    stop() {
        this.Ar && (this.Ar.cancel(),
        this.Ar = null)
    }
    get started() {
        return this.Ar !== null
    }
    Rr(t) {
        k(Iu, `Garbage collection scheduled in ${t}ms`),
        this.Ar = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", t, async () => {
            this.Ar = null;
            try {
                await this.localStore.collectGarbage(this.garbageCollector)
            } catch (e) {
                fn(e) ? k(Iu, "Ignoring IndexedDB error during garbage collection: ", e) : await zr(e)
            }
            await this.Rr(3e5)
        }
        )
    }
}
  , $o = class {
    constructor(t, e) {
        this.Vr = t,
        this.params = e
    }
    calculateTargetCount(t, e) {
        return this.Vr.mr(t).next(n => Math.floor(e / 100 * n))
    }
    nthSequenceNumber(t, e) {
        if (e === 0)
            return A.resolve(Fa.ue);
        let n = new zo(e);
        return this.Vr.forEachTarget(t, r => n.Er(r.sequenceNumber)).next( () => this.Vr.gr(t, r => n.Er(r))).next( () => n.maxValue)
    }
    removeTargets(t, e, n) {
        return this.Vr.removeTargets(t, e, n)
    }
    removeOrphanedDocuments(t, e) {
        return this.Vr.removeOrphanedDocuments(t, e)
    }
    collect(t, e) {
        return this.params.cacheSizeCollectionThreshold === -1 ? (k("LruGarbageCollector", "Garbage collection skipped; disabled"),
        A.resolve(Tu)) : this.getCacheSize(t).next(n => n < this.params.cacheSizeCollectionThreshold ? (k("LruGarbageCollector", `Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),
        Tu) : this.pr(t, e))
    }
    getCacheSize(t) {
        return this.Vr.getCacheSize(t)
    }
    pr(t, e) {
        let n, r, o, l, u, d, f, p = Date.now();
        return this.calculateTargetCount(t, this.params.percentileToCollect).next(E => (E > this.params.maximumSequenceNumbersToCollect ? (k("LruGarbageCollector", `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),
        r = this.params.maximumSequenceNumbersToCollect) : r = E,
        l = Date.now(),
        this.nthSequenceNumber(t, r))).next(E => (n = E,
        u = Date.now(),
        this.removeTargets(t, n, e))).next(E => (o = E,
        d = Date.now(),
        this.removeOrphanedDocuments(t, n))).next(E => (f = Date.now(),
        je() <= Mt.DEBUG && k("LruGarbageCollector", `LRU Garbage Collection
	Counted targets in ${l - p}ms
	Determined least recently used ${r} in ` + (u - l) + `ms
	Removed ${o} targets in ` + (d - u) + `ms
	Removed ${E} documents in ` + (f - d) + `ms
Total Duration: ${f - p}ms`),
        A.resolve({
            didRun: !0,
            sequenceNumbersCollected: r,
            targetsRemoved: o,
            documentsRemoved: E
        })))
    }
}
;
function Ip(i, t) {
    return new $o(i,t)
}
var Go = class {
    constructor() {
        this.changes = new te(t => t.toString(), (t, e) => t.isEqual(e)),
        this.changesApplied = !1
    }
    addEntry(t) {
        this.assertNotApplied(),
        this.changes.set(t.key, t)
    }
    removeEntry(t, e) {
        this.assertNotApplied(),
        this.changes.set(t, Ft.newInvalidDocument(t).setReadTime(e))
    }
    getEntry(t, e) {
        this.assertNotApplied();
        let n = this.changes.get(e);
        return n !== void 0 ? A.resolve(n) : this.getFromCache(t, e)
    }
    getEntries(t, e) {
        return this.getAllFromCache(t, e)
    }
    apply(t) {
        return this.assertNotApplied(),
        this.changesApplied = !0,
        this.applyChanges(t)
    }
    assertNotApplied() {}
}
;
var Ko = class {
    constructor(t, e) {
        this.overlayedDocument = t,
        this.mutatedFields = e
    }
}
;
var Wo = class {
    constructor(t, e, n, r) {
        this.remoteDocumentCache = t,
        this.mutationQueue = e,
        this.documentOverlayCache = n,
        this.indexManager = r
    }
    getDocument(t, e) {
        let n = null;
        return this.documentOverlayCache.getOverlay(t, e).next(r => (n = r,
        this.remoteDocumentCache.getEntry(t, e))).next(r => (n !== null && ti(n.mutation, r, Ee.empty(), Et.now()),
        r))
    }
    getDocuments(t, e) {
        return this.remoteDocumentCache.getEntries(t, e).next(n => this.getLocalViewOfDocuments(t, n, z()).next( () => n))
    }
    getLocalViewOfDocuments(t, e, n=z()) {
        let r = Te();
        return this.populateOverlays(t, r, e).next( () => this.computeViews(t, e, r, n).next(o => {
            let l = Qn();
            return o.forEach( (u, d) => {
                l = l.insert(u, d.overlayedDocument)
            }
            ),
            l
        }
        ))
    }
    getOverlayedDocuments(t, e) {
        let n = Te();
        return this.populateOverlays(t, n, e).next( () => this.computeViews(t, e, n, z()))
    }
    populateOverlays(t, e, n) {
        let r = [];
        return n.forEach(o => {
            e.has(o) || r.push(o)
        }
        ),
        this.documentOverlayCache.getOverlays(t, r).next(o => {
            o.forEach( (l, u) => {
                e.set(l, u)
            }
            )
        }
        )
    }
    computeViews(t, e, n, r) {
        let o = ce()
          , l = Jn()
          , u = (function() {
            return Jn()
        }
        )();
        return e.forEach( (d, f) => {
            let p = n.get(f.key);
            r.has(f.key) && (p === void 0 || p.mutation instanceof cn) ? o = o.insert(f.key, f) : p !== void 0 ? (l.set(f.key, p.mutation.getFieldMask()),
            ti(p.mutation, f, p.mutation.getFieldMask(), Et.now())) : l.set(f.key, Ee.empty())
        }
        ),
        this.recalculateAndSaveOverlays(t, o).next(d => (d.forEach( (f, p) => l.set(f, p)),
        e.forEach( (f, p) => {
            var E;
            return u.set(f, new Ko(p,(E = l.get(f)) !== null && E !== void 0 ? E : null))
        }
        ),
        u))
    }
    recalculateAndSaveOverlays(t, e) {
        let n = Jn()
          , r = new it( (l, u) => l - u)
          , o = z();
        return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t, e).next(l => {
            for (let u of l)
                u.keys().forEach(d => {
                    let f = e.get(d);
                    if (f === null)
                        return;
                    let p = n.get(d) || Ee.empty();
                    p = u.applyToLocalView(f, p),
                    n.set(d, p);
                    let E = (r.get(u.batchId) || z()).add(d);
                    r = r.insert(u.batchId, E)
                }
                )
        }
        ).next( () => {
            let l = []
              , u = r.getReverseIterator();
            for (; u.hasNext(); ) {
                let d = u.getNext()
                  , f = d.key
                  , p = d.value
                  , E = Eh();
                p.forEach(S => {
                    if (!o.has(S)) {
                        let C = Sh(e.get(S), n.get(S));
                        C !== null && E.set(S, C),
                        o = o.add(S)
                    }
                }
                ),
                l.push(this.documentOverlayCache.saveOverlays(t, f, E))
            }
            return A.waitFor(l)
        }
        ).next( () => n)
    }
    recalculateAndSaveOverlaysForDocumentKeys(t, e) {
        return this.remoteDocumentCache.getEntries(t, e).next(n => this.recalculateAndSaveOverlays(t, n))
    }
    getDocumentsMatchingQuery(t, e, n, r) {
        return (function(l) {
            return F.isDocumentKey(l.path) && l.collectionGroup === null && l.filters.length === 0
        }
        )(e) ? this.getDocumentsMatchingDocumentQuery(t, e.path) : Uf(e) ? this.getDocumentsMatchingCollectionGroupQuery(t, e, n, r) : this.getDocumentsMatchingCollectionQuery(t, e, n, r)
    }
    getNextDocuments(t, e, n, r) {
        return this.remoteDocumentCache.getAllFromCollectionGroup(t, e, n, r).next(o => {
            let l = r - o.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(t, e, n.largestBatchId, r - o.size) : A.resolve(Te())
              , u = ni
              , d = o;
            return l.next(f => A.forEach(f, (p, E) => (u < E.largestBatchId && (u = E.largestBatchId),
            o.get(p) ? A.resolve() : this.remoteDocumentCache.getEntry(t, p).next(S => {
                d = d.insert(p, S)
            }
            ))).next( () => this.populateOverlays(t, f, o)).next( () => this.computeViews(t, d, f, z())).next(p => ({
                batchId: u,
                changes: Hf(p)
            })))
        }
        )
    }
    getDocumentsMatchingDocumentQuery(t, e) {
        return this.getDocument(t, new F(e)).next(n => {
            let r = Qn();
            return n.isFoundDocument() && (r = r.insert(n.key, n)),
            r
        }
        )
    }
    getDocumentsMatchingCollectionGroupQuery(t, e, n, r) {
        let o = e.collectionGroup
          , l = Qn();
        return this.indexManager.getCollectionParents(t, o).next(u => A.forEach(u, d => {
            let f = (function(E, S) {
                return new sn(S,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)
            }
            )(e, d.child(o));
            return this.getDocumentsMatchingCollectionQuery(t, f, n, r).next(p => {
                p.forEach( (E, S) => {
                    l = l.insert(E, S)
                }
                )
            }
            )
        }
        ).next( () => l))
    }
    getDocumentsMatchingCollectionQuery(t, e, n, r) {
        let o;
        return this.documentOverlayCache.getOverlaysForCollection(t, e.path, n.largestBatchId).next(l => (o = l,
        this.remoteDocumentCache.getDocumentsMatchingQuery(t, e, n, o, r))).next(l => {
            o.forEach( (d, f) => {
                let p = f.getKey();
                l.get(p) === null && (l = l.insert(p, Ft.newInvalidDocument(p)))
            }
            );
            let u = Qn();
            return l.forEach( (d, f) => {
                let p = o.get(d);
                p !== void 0 && ti(p.mutation, f, Ee.empty(), Et.now()),
                Kr(e, f) && (u = u.insert(d, f))
            }
            ),
            u
        }
        )
    }
}
;
var Ho = class {
    constructor(t) {
        this.serializer = t,
        this.Br = new Map,
        this.Lr = new Map
    }
    getBundleMetadata(t, e) {
        return A.resolve(this.Br.get(e))
    }
    saveBundleMetadata(t, e) {
        return this.Br.set(e.id, (function(r) {
            return {
                id: r.id,
                version: r.version,
                createTime: We(r.createTime)
            }
        }
        )(e)),
        A.resolve()
    }
    getNamedQuery(t, e) {
        return A.resolve(this.Lr.get(e))
    }
    saveNamedQuery(t, e) {
        return this.Lr.set(e.name, (function(r) {
            return {
                name: r.name,
                query: Ep(r.bundledQuery),
                readTime: We(r.readTime)
            }
        }
        )(e)),
        A.resolve()
    }
}
;
var Qo = class {
    constructor() {
        this.overlays = new it(F.comparator),
        this.kr = new Map
    }
    getOverlay(t, e) {
        return A.resolve(this.overlays.get(e))
    }
    getOverlays(t, e) {
        let n = Te();
        return A.forEach(e, r => this.getOverlay(t, r).next(o => {
            o !== null && n.set(r, o)
        }
        )).next( () => n)
    }
    saveOverlays(t, e, n) {
        return n.forEach( (r, o) => {
            this.wt(t, e, o)
        }
        ),
        A.resolve()
    }
    removeOverlaysForBatchId(t, e, n) {
        let r = this.kr.get(n);
        return r !== void 0 && (r.forEach(o => this.overlays = this.overlays.remove(o)),
        this.kr.delete(n)),
        A.resolve()
    }
    getOverlaysForCollection(t, e, n) {
        let r = Te()
          , o = e.length + 1
          , l = new F(e.child(""))
          , u = this.overlays.getIteratorFrom(l);
        for (; u.hasNext(); ) {
            let d = u.getNext().value
              , f = d.getKey();
            if (!e.isPrefixOf(f.path))
                break;
            f.path.length === o && d.largestBatchId > n && r.set(d.getKey(), d)
        }
        return A.resolve(r)
    }
    getOverlaysForCollectionGroup(t, e, n, r) {
        let o = new it( (f, p) => f - p)
          , l = this.overlays.getIterator();
        for (; l.hasNext(); ) {
            let f = l.getNext().value;
            if (f.getKey().getCollectionGroup() === e && f.largestBatchId > n) {
                let p = o.get(f.largestBatchId);
                p === null && (p = Te(),
                o = o.insert(f.largestBatchId, p)),
                p.set(f.getKey(), f)
            }
        }
        let u = Te()
          , d = o.getIterator();
        for (; d.hasNext() && (d.getNext().value.forEach( (f, p) => u.set(f, p)),
        !(u.size() >= r)); )
            ;
        return A.resolve(u)
    }
    wt(t, e, n) {
        let r = this.overlays.get(n.key);
        if (r !== null) {
            let l = this.kr.get(r.largestBatchId).delete(n.key);
            this.kr.set(r.largestBatchId, l)
        }
        this.overlays = this.overlays.insert(n.key, new ko(e,n));
        let o = this.kr.get(e);
        o === void 0 && (o = z(),
        this.kr.set(e, o)),
        this.kr.set(e, o.add(n.key))
    }
}
;
var Xo = class {
    constructor() {
        this.sessionToken = _t.EMPTY_BYTE_STRING
    }
    getSessionToken(t) {
        return A.resolve(this.sessionToken)
    }
    setSessionToken(t, e) {
        return this.sessionToken = e,
        A.resolve()
    }
}
;
var fi = class {
    constructor() {
        this.qr = new ut(ot.Qr),
        this.$r = new ut(ot.Ur)
    }
    isEmpty() {
        return this.qr.isEmpty()
    }
    addReference(t, e) {
        let n = new ot(t,e);
        this.qr = this.qr.add(n),
        this.$r = this.$r.add(n)
    }
    Kr(t, e) {
        t.forEach(n => this.addReference(n, e))
    }
    removeReference(t, e) {
        this.Wr(new ot(t,e))
    }
    Gr(t, e) {
        t.forEach(n => this.removeReference(n, e))
    }
    zr(t) {
        let e = new F(new nt([]))
          , n = new ot(e,t)
          , r = new ot(e,t + 1)
          , o = [];
        return this.$r.forEachInRange([n, r], l => {
            this.Wr(l),
            o.push(l.key)
        }
        ),
        o
    }
    jr() {
        this.qr.forEach(t => this.Wr(t))
    }
    Wr(t) {
        this.qr = this.qr.delete(t),
        this.$r = this.$r.delete(t)
    }
    Jr(t) {
        let e = new F(new nt([]))
          , n = new ot(e,t)
          , r = new ot(e,t + 1)
          , o = z();
        return this.$r.forEachInRange([n, r], l => {
            o = o.add(l.key)
        }
        ),
        o
    }
    containsKey(t) {
        let e = new ot(t,0)
          , n = this.qr.firstAfterOrEqual(e);
        return n !== null && t.isEqual(n.key)
    }
}
  , ot = class {
    constructor(t, e) {
        this.key = t,
        this.Hr = e
    }
    static Qr(t, e) {
        return F.comparator(t.key, e.key) || B(t.Hr, e.Hr)
    }
    static Ur(t, e) {
        return B(t.Hr, e.Hr) || F.comparator(t.key, e.key)
    }
}
;
var Yo = class {
    constructor(t, e) {
        this.indexManager = t,
        this.referenceDelegate = e,
        this.mutationQueue = [],
        this.er = 1,
        this.Yr = new ut(ot.Qr)
    }
    checkEmpty(t) {
        return A.resolve(this.mutationQueue.length === 0)
    }
    addMutationBatch(t, e, n, r) {
        let o = this.er;
        this.er++,
        this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
        let l = new xo(o,e,n,r);
        this.mutationQueue.push(l);
        for (let u of r)
            this.Yr = this.Yr.add(new ot(u.key,o)),
            this.indexManager.addToCollectionParentIndex(t, u.key.path.popLast());
        return A.resolve(l)
    }
    lookupMutationBatch(t, e) {
        return A.resolve(this.Zr(e))
    }
    getNextMutationBatchAfterBatchId(t, e) {
        let n = e + 1
          , r = this.Xr(n)
          , o = r < 0 ? 0 : r;
        return A.resolve(this.mutationQueue.length > o ? this.mutationQueue[o] : null)
    }
    getHighestUnacknowledgedBatchId() {
        return A.resolve(this.mutationQueue.length === 0 ? Sf : this.er - 1)
    }
    getAllMutationBatches(t) {
        return A.resolve(this.mutationQueue.slice())
    }
    getAllMutationBatchesAffectingDocumentKey(t, e) {
        let n = new ot(e,0)
          , r = new ot(e,Number.POSITIVE_INFINITY)
          , o = [];
        return this.Yr.forEachInRange([n, r], l => {
            let u = this.Zr(l.Hr);
            o.push(u)
        }
        ),
        A.resolve(o)
    }
    getAllMutationBatchesAffectingDocumentKeys(t, e) {
        let n = new ut(B);
        return e.forEach(r => {
            let o = new ot(r,0)
              , l = new ot(r,Number.POSITIVE_INFINITY);
            this.Yr.forEachInRange([o, l], u => {
                n = n.add(u.Hr)
            }
            )
        }
        ),
        A.resolve(this.ei(n))
    }
    getAllMutationBatchesAffectingQuery(t, e) {
        let n = e.path
          , r = n.length + 1
          , o = n;
        F.isDocumentKey(o) || (o = o.child(""));
        let l = new ot(new F(o),0)
          , u = new ut(B);
        return this.Yr.forEachWhile(d => {
            let f = d.key.path;
            return !!n.isPrefixOf(f) && (f.length === r && (u = u.add(d.Hr)),
            !0)
        }
        , l),
        A.resolve(this.ei(u))
    }
    ei(t) {
        let e = [];
        return t.forEach(n => {
            let r = this.Zr(n);
            r !== null && e.push(r)
        }
        ),
        e
    }
    removeMutationBatch(t, e) {
        Y(this.ti(e.batchId, "removed") === 0, 55003),
        this.mutationQueue.shift();
        let n = this.Yr;
        return A.forEach(e.mutations, r => {
            let o = new ot(r.key,e.batchId);
            return n = n.delete(o),
            this.referenceDelegate.markPotentiallyOrphaned(t, r.key)
        }
        ).next( () => {
            this.Yr = n
        }
        )
    }
    rr(t) {}
    containsKey(t, e) {
        let n = new ot(e,0)
          , r = this.Yr.firstAfterOrEqual(n);
        return A.resolve(e.isEqual(r && r.key))
    }
    performConsistencyCheck(t) {
        return this.mutationQueue.length,
        A.resolve()
    }
    ti(t, e) {
        return this.Xr(t)
    }
    Xr(t) {
        return this.mutationQueue.length === 0 ? 0 : t - this.mutationQueue[0].batchId
    }
    Zr(t) {
        let e = this.Xr(t);
        return e < 0 || e >= this.mutationQueue.length ? null : this.mutationQueue[e]
    }
}
;
var Jo = class {
    constructor(t) {
        this.ni = t,
        this.docs = (function() {
            return new it(F.comparator)
        }
        )(),
        this.size = 0
    }
    setIndexManager(t) {
        this.indexManager = t
    }
    addEntry(t, e) {
        let n = e.key
          , r = this.docs.get(n)
          , o = r ? r.size : 0
          , l = this.ni(e);
        return this.docs = this.docs.insert(n, {
            document: e.mutableCopy(),
            size: l
        }),
        this.size += l - o,
        this.indexManager.addToCollectionParentIndex(t, n.path.popLast())
    }
    removeEntry(t) {
        let e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t),
        this.size -= e.size)
    }
    getEntry(t, e) {
        let n = this.docs.get(e);
        return A.resolve(n ? n.document.mutableCopy() : Ft.newInvalidDocument(e))
    }
    getEntries(t, e) {
        let n = ce();
        return e.forEach(r => {
            let o = this.docs.get(r);
            n = n.insert(r, o ? o.document.mutableCopy() : Ft.newInvalidDocument(r))
        }
        ),
        A.resolve(n)
    }
    getDocumentsMatchingQuery(t, e, n, r) {
        let o = ce()
          , l = e.path
          , u = new F(l.child("__id-9223372036854775808__"))
          , d = this.docs.getIteratorFrom(u);
        for (; d.hasNext(); ) {
            let {key: f, value: {document: p}} = d.getNext();
            if (!l.isPrefixOf(f.path))
                break;
            f.path.length > l.length + 1 || Tf(Ef(p), n) <= 0 || (r.has(p.key) || Kr(e, p)) && (o = o.insert(p.key, p.mutableCopy()))
        }
        return A.resolve(o)
    }
    getAllFromCollectionGroup(t, e, n, r) {
        M(9500)
    }
    ri(t, e) {
        return A.forEach(this.docs, n => e(n))
    }
    newChangeBuffer(t) {
        return new Zo(this)
    }
    getSize(t) {
        return A.resolve(this.size)
    }
}
  , Zo = class extends Go {
    constructor(t) {
        super(),
        this.Or = t
    }
    applyChanges(t) {
        let e = [];
        return this.changes.forEach( (n, r) => {
            r.isValidDocument() ? e.push(this.Or.addEntry(t, r)) : this.Or.removeEntry(n)
        }
        ),
        A.waitFor(e)
    }
    getFromCache(t, e) {
        return this.Or.getEntry(t, e)
    }
    getAllFromCache(t, e) {
        return this.Or.getEntries(t, e)
    }
}
;
var ta = class {
    constructor(t) {
        this.persistence = t,
        this.ii = new te(e => Ba(e),qa),
        this.lastRemoteSnapshotVersion = L.min(),
        this.highestTargetId = 0,
        this.si = 0,
        this.oi = new fi,
        this.targetCount = 0,
        this._i = di.ar()
    }
    forEachTarget(t, e) {
        return this.ii.forEach( (n, r) => e(r)),
        A.resolve()
    }
    getLastRemoteSnapshotVersion(t) {
        return A.resolve(this.lastRemoteSnapshotVersion)
    }
    getHighestSequenceNumber(t) {
        return A.resolve(this.si)
    }
    allocateTargetId(t) {
        return this.highestTargetId = this._i.next(),
        A.resolve(this.highestTargetId)
    }
    setTargetsMetadata(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n),
        e > this.si && (this.si = e),
        A.resolve()
    }
    hr(t) {
        this.ii.set(t.target, t);
        let e = t.targetId;
        e > this.highestTargetId && (this._i = new di(e),
        this.highestTargetId = e),
        t.sequenceNumber > this.si && (this.si = t.sequenceNumber)
    }
    addTargetData(t, e) {
        return this.hr(e),
        this.targetCount += 1,
        A.resolve()
    }
    updateTargetData(t, e) {
        return this.hr(e),
        A.resolve()
    }
    removeTargetData(t, e) {
        return this.ii.delete(e.target),
        this.oi.zr(e.targetId),
        this.targetCount -= 1,
        A.resolve()
    }
    removeTargets(t, e, n) {
        let r = 0
          , o = [];
        return this.ii.forEach( (l, u) => {
            u.sequenceNumber <= e && n.get(u.targetId) === null && (this.ii.delete(l),
            o.push(this.removeMatchingKeysForTargetId(t, u.targetId)),
            r++)
        }
        ),
        A.waitFor(o).next( () => r)
    }
    getTargetCount(t) {
        return A.resolve(this.targetCount)
    }
    getTargetData(t, e) {
        let n = this.ii.get(e) || null;
        return A.resolve(n)
    }
    addMatchingKeys(t, e, n) {
        return this.oi.Kr(e, n),
        A.resolve()
    }
    removeMatchingKeys(t, e, n) {
        this.oi.Gr(e, n);
        let r = this.persistence.referenceDelegate
          , o = [];
        return r && e.forEach(l => {
            o.push(r.markPotentiallyOrphaned(t, l))
        }
        ),
        A.waitFor(o)
    }
    removeMatchingKeysForTargetId(t, e) {
        return this.oi.zr(e),
        A.resolve()
    }
    getMatchingKeysForTargetId(t, e) {
        let n = this.oi.Jr(e);
        return A.resolve(n)
    }
    containsKey(t, e) {
        return A.resolve(this.oi.containsKey(e))
    }
}
;
var Cr = class {
    constructor(t, e) {
        this.ai = {},
        this.overlays = {},
        this.ui = new Fa(0),
        this.ci = !1,
        this.ci = !0,
        this.li = new Xo,
        this.referenceDelegate = t(this),
        this.hi = new ta(this),
        this.indexManager = new qo,
        this.remoteDocumentCache = (function(r) {
            return new Jo(r)
        }
        )(n => this.referenceDelegate.Pi(n)),
        this.serializer = new Bo(e),
        this.Ti = new Ho(this.serializer)
    }
    start() {
        return Promise.resolve()
    }
    shutdown() {
        return this.ci = !1,
        Promise.resolve()
    }
    get started() {
        return this.ci
    }
    setDatabaseDeletedListener() {}
    setNetworkEnabled() {}
    getIndexManager(t) {
        return this.indexManager
    }
    getDocumentOverlayCache(t) {
        let e = this.overlays[t.toKey()];
        return e || (e = new Qo,
        this.overlays[t.toKey()] = e),
        e
    }
    getMutationQueue(t, e) {
        let n = this.ai[t.toKey()];
        return n || (n = new Yo(e,this.referenceDelegate),
        this.ai[t.toKey()] = n),
        n
    }
    getGlobalsCache() {
        return this.li
    }
    getTargetCache() {
        return this.hi
    }
    getRemoteDocumentCache() {
        return this.remoteDocumentCache
    }
    getBundleCache() {
        return this.Ti
    }
    runTransaction(t, e, n) {
        k("MemoryPersistence", "Starting transaction:", t);
        let r = new ea(this.ui.next());
        return this.referenceDelegate.Ii(),
        n(r).next(o => this.referenceDelegate.di(r).next( () => o)).toPromise().then(o => (r.raiseOnCommittedEvent(),
        o))
    }
    Ei(t, e) {
        return A.or(Object.values(this.ai).map(n => () => n.containsKey(t, e)))
    }
}
  , ea = class extends mo {
    constructor(t) {
        super(),
        this.currentSequenceNumber = t
    }
}
  , na = class i {
    constructor(t) {
        this.persistence = t,
        this.Ai = new fi,
        this.Ri = null
    }
    static Vi(t) {
        return new i(t)
    }
    get mi() {
        if (this.Ri)
            return this.Ri;
        throw M(60996)
    }
    addReference(t, e, n) {
        return this.Ai.addReference(n, e),
        this.mi.delete(n.toString()),
        A.resolve()
    }
    removeReference(t, e, n) {
        return this.Ai.removeReference(n, e),
        this.mi.add(n.toString()),
        A.resolve()
    }
    markPotentiallyOrphaned(t, e) {
        return this.mi.add(e.toString()),
        A.resolve()
    }
    removeTarget(t, e) {
        this.Ai.zr(e.targetId).forEach(r => this.mi.add(r.toString()));
        let n = this.persistence.getTargetCache();
        return n.getMatchingKeysForTargetId(t, e.targetId).next(r => {
            r.forEach(o => this.mi.add(o.toString()))
        }
        ).next( () => n.removeTargetData(t, e))
    }
    Ii() {
        this.Ri = new Set
    }
    di(t) {
        let e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
        return A.forEach(this.mi, n => {
            let r = F.fromPath(n);
            return this.fi(t, r).next(o => {
                o || e.removeEntry(r, L.min())
            }
            )
        }
        ).next( () => (this.Ri = null,
        e.apply(t)))
    }
    updateLimboDocument(t, e) {
        return this.fi(t, e).next(n => {
            n ? this.mi.delete(e.toString()) : this.mi.add(e.toString())
        }
        )
    }
    Pi(t) {
        return 0
    }
    fi(t, e) {
        return A.or([ () => A.resolve(this.Ai.containsKey(e)), () => this.persistence.getTargetCache().containsKey(t, e), () => this.persistence.Ei(t, e)])
    }
}
  , Rr = class i {
    constructor(t, e) {
        this.persistence = t,
        this.gi = new te(n => Af(n.path), (n, r) => n.isEqual(r)),
        this.garbageCollector = Ip(this, e)
    }
    static Vi(t, e) {
        return new i(t,e)
    }
    Ii() {}
    di(t) {
        return A.resolve()
    }
    forEachTarget(t, e) {
        return this.persistence.getTargetCache().forEachTarget(t, e)
    }
    mr(t) {
        let e = this.yr(t);
        return this.persistence.getTargetCache().getTargetCount(t).next(n => e.next(r => n + r))
    }
    yr(t) {
        let e = 0;
        return this.gr(t, n => {
            e++
        }
        ).next( () => e)
    }
    gr(t, e) {
        return A.forEach(this.gi, (n, r) => this.Sr(t, n, r).next(o => o ? A.resolve() : e(r)))
    }
    removeTargets(t, e, n) {
        return this.persistence.getTargetCache().removeTargets(t, e, n)
    }
    removeOrphanedDocuments(t, e) {
        let n = 0
          , r = this.persistence.getRemoteDocumentCache()
          , o = r.newChangeBuffer();
        return r.ri(t, l => this.Sr(t, l, e).next(u => {
            u || (n++,
            o.removeEntry(l, L.min()))
        }
        )).next( () => o.apply(t)).next( () => n)
    }
    markPotentiallyOrphaned(t, e) {
        return this.gi.set(e, t.currentSequenceNumber),
        A.resolve()
    }
    removeTarget(t, e) {
        let n = e.withSequenceNumber(t.currentSequenceNumber);
        return this.persistence.getTargetCache().updateTargetData(t, n)
    }
    addReference(t, e, n) {
        return this.gi.set(n, t.currentSequenceNumber),
        A.resolve()
    }
    removeReference(t, e, n) {
        return this.gi.set(n, t.currentSequenceNumber),
        A.resolve()
    }
    updateLimboDocument(t, e) {
        return this.gi.set(e, t.currentSequenceNumber),
        A.resolve()
    }
    Pi(t) {
        let e = t.key.toString().length;
        return t.isFoundDocument() && (e += hr(t.data.value)),
        e
    }
    Sr(t, e, n) {
        return A.or([ () => this.persistence.Ei(t, e), () => this.persistence.getTargetCache().containsKey(t, e), () => {
            let r = this.gi.get(e);
            return A.resolve(r !== void 0 && r > n)
        }
        ])
    }
    getCacheSize(t) {
        return this.persistence.getRemoteDocumentCache().getSize(t)
    }
}
;
var ia = class i {
    constructor(t, e, n, r) {
        this.targetId = t,
        this.fromCache = e,
        this.Is = n,
        this.ds = r
    }
    static Es(t, e) {
        let n = z()
          , r = z();
        for (let o of e.docChanges)
            switch (o.type) {
            case 0:
                n = n.add(o.doc.key);
                break;
            case 1:
                r = r.add(o.doc.key)
            }
        return new i(t,e.fromCache,n,r)
    }
}
;
var ra = class {
    constructor() {
        this._documentReadCount = 0
    }
    get documentReadCount() {
        return this._documentReadCount
    }
    incrementDocumentReadCount(t) {
        this._documentReadCount += t
    }
}
;
var sa = class {
    constructor() {
        this.As = !1,
        this.Rs = !1,
        this.Vs = 100,
        this.fs = (function() {
            return Sc() ? 8 : bf(bc()) > 0 ? 6 : 4
        }
        )()
    }
    initialize(t, e) {
        this.gs = t,
        this.indexManager = e,
        this.As = !0
    }
    getDocumentsMatchingQuery(t, e, n, r) {
        let o = {
            result: null
        };
        return this.ps(t, e).next(l => {
            o.result = l
        }
        ).next( () => {
            if (!o.result)
                return this.ys(t, e, r, n).next(l => {
                    o.result = l
                }
                )
        }
        ).next( () => {
            if (o.result)
                return;
            let l = new ra;
            return this.ws(t, e, l).next(u => {
                if (o.result = u,
                this.Rs)
                    return this.Ss(t, e, l, u.size)
            }
            )
        }
        ).next( () => o.result)
    }
    Ss(t, e, n, r) {
        return n.documentReadCount < this.Vs ? (je() <= Mt.DEBUG && k("QueryEngine", "SDK will not create cache indexes for query:", ze(e), "since it only creates cache indexes for collection contains", "more than or equal to", this.Vs, "documents"),
        A.resolve()) : (je() <= Mt.DEBUG && k("QueryEngine", "Query:", ze(e), "scans", n.documentReadCount, "local documents and returns", r, "documents as results."),
        n.documentReadCount > this.fs * r ? (je() <= Mt.DEBUG && k("QueryEngine", "The SDK decides to create cache indexes for query:", ze(e), "as using cache indexes may help improve performance."),
        this.indexManager.createTargetIndexes(t, Bt(e))) : A.resolve())
    }
    ps(t, e) {
        if (du(e))
            return A.resolve(null);
        let n = Bt(e);
        return this.indexManager.getIndexType(t, n).next(r => r === 0 ? null : (e.limit !== null && r === 1 && (e = Do(e, null, "F"),
        n = Bt(e)),
        this.indexManager.getDocumentsMatchingTarget(t, n).next(o => {
            let l = z(...o);
            return this.gs.getDocuments(t, l).next(u => this.indexManager.getMinOffset(t, n).next(d => {
                let f = this.bs(e, u);
                return this.Ds(e, f, l, d.readTime) ? this.ps(t, Do(e, null, "F")) : this.vs(t, f, e, d)
            }
            ))
        }
        )))
    }
    ys(t, e, n, r) {
        return du(e) || r.isEqual(L.min()) ? A.resolve(null) : this.gs.getDocuments(t, n).next(o => {
            let l = this.bs(e, o);
            return this.Ds(e, l, n, r) ? A.resolve(null) : (je() <= Mt.DEBUG && k("QueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), ze(e)),
            this.vs(t, l, e, wf(r, ni)).next(u => u))
        }
        )
    }
    bs(t, e) {
        let n = new ut(vh(t));
        return e.forEach( (r, o) => {
            Kr(t, o) && (n = n.add(o))
        }
        ),
        n
    }
    Ds(t, e, n, r) {
        if (t.limit === null)
            return !1;
        if (n.size !== e.size)
            return !0;
        let o = t.limitType === "F" ? e.last() : e.first();
        return !!o && (o.hasPendingWrites || o.version.compareTo(r) > 0)
    }
    ws(t, e, n) {
        return je() <= Mt.DEBUG && k("QueryEngine", "Using full collection scan to execute query:", ze(e)),
        this.gs.getDocumentsMatchingQuery(t, e, Ce.min(), n)
    }
    vs(t, e, n, r) {
        return this.gs.getDocumentsMatchingQuery(t, n, r).next(o => (e.forEach(l => {
            o = o.insert(l.key, l)
        }
        ),
        o))
    }
}
;
var za = "LocalStore"
  , bp = 3e8
  , oa = class {
    constructor(t, e, n, r) {
        this.persistence = t,
        this.Cs = e,
        this.serializer = r,
        this.Fs = new it(B),
        this.Ms = new te(o => Ba(o),qa),
        this.xs = new Map,
        this.Os = t.getRemoteDocumentCache(),
        this.hi = t.getTargetCache(),
        this.Ti = t.getBundleCache(),
        this.Ns(n)
    }
    Ns(t) {
        this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t),
        this.indexManager = this.persistence.getIndexManager(t),
        this.mutationQueue = this.persistence.getMutationQueue(t, this.indexManager),
        this.localDocuments = new Wo(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),
        this.Os.setIndexManager(this.indexManager),
        this.Cs.initialize(this.localDocuments, this.indexManager)
    }
    collectGarbage(t) {
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", e => t.collect(e, this.Fs))
    }
}
;
function Sp(i, t, e, n) {
    return new oa(i,t,e,n)
}
async function Nh(i, t) {
    let e = j(i);
    return await e.persistence.runTransaction("Handle user change", "readonly", n => {
        let r;
        return e.mutationQueue.getAllMutationBatches(n).next(o => (r = o,
        e.Ns(t),
        e.mutationQueue.getAllMutationBatches(n))).next(o => {
            let l = []
              , u = []
              , d = z();
            for (let f of r) {
                l.push(f.batchId);
                for (let p of f.mutations)
                    d = d.add(p.key)
            }
            for (let f of o) {
                u.push(f.batchId);
                for (let p of f.mutations)
                    d = d.add(p.key)
            }
            return e.localDocuments.getDocuments(n, d).next(f => ({
                Bs: f,
                removedBatchIds: l,
                addedBatchIds: u
            }))
        }
        )
    }
    )
}
function Fh(i) {
    let t = j(i);
    return t.persistence.runTransaction("Get last remote snapshot version", "readonly", e => t.hi.getLastRemoteSnapshotVersion(e))
}
function Ap(i, t) {
    let e = j(i)
      , n = t.snapshotVersion
      , r = e.Fs;
    return e.persistence.runTransaction("Apply remote event", "readwrite-primary", o => {
        let l = e.Os.newChangeBuffer({
            trackRemovals: !0
        });
        r = e.Fs;
        let u = [];
        t.targetChanges.forEach( (p, E) => {
            let S = r.get(E);
            if (!S)
                return;
            u.push(e.hi.removeMatchingKeys(o, p.removedDocuments, E).next( () => e.hi.addMatchingKeys(o, p.addedDocuments, E)));
            let C = S.withSequenceNumber(o.currentSequenceNumber);
            t.targetMismatches.get(E) !== null ? C = C.withResumeToken(_t.EMPTY_BYTE_STRING, L.min()).withLastLimboFreeSnapshotVersion(L.min()) : p.resumeToken.approximateByteSize() > 0 && (C = C.withResumeToken(p.resumeToken, n)),
            r = r.insert(E, C),
            (function(O, V, K) {
                return O.resumeToken.approximateByteSize() === 0 || V.snapshotVersion.toMicroseconds() - O.snapshotVersion.toMicroseconds() >= bp ? !0 : K.addedDocuments.size + K.modifiedDocuments.size + K.removedDocuments.size > 0
            }
            )(S, C, p) && u.push(e.hi.updateTargetData(o, C))
        }
        );
        let d = ce()
          , f = z();
        if (t.documentUpdates.forEach(p => {
            t.resolvedLimboDocuments.has(p) && u.push(e.persistence.referenceDelegate.updateLimboDocument(o, p))
        }
        ),
        u.push(Cp(o, l, t.documentUpdates).next(p => {
            d = p.Ls,
            f = p.ks
        }
        )),
        !n.isEqual(L.min())) {
            let p = e.hi.getLastRemoteSnapshotVersion(o).next(E => e.hi.setTargetsMetadata(o, o.currentSequenceNumber, n));
            u.push(p)
        }
        return A.waitFor(u).next( () => l.apply(o)).next( () => e.localDocuments.getLocalViewOfDocuments(o, d, f)).next( () => d)
    }
    ).then(o => (e.Fs = r,
    o))
}
function Cp(i, t, e) {
    let n = z()
      , r = z();
    return e.forEach(o => n = n.add(o)),
    t.getEntries(i, n).next(o => {
        let l = ce();
        return e.forEach( (u, d) => {
            let f = o.get(u);
            d.isFoundDocument() !== f.isFoundDocument() && (r = r.add(u)),
            d.isNoDocument() && d.version.isEqual(L.min()) ? (t.removeEntry(u, d.readTime),
            l = l.insert(u, d)) : !f.isValidDocument() || d.version.compareTo(f.version) > 0 || d.version.compareTo(f.version) === 0 && f.hasPendingWrites ? (t.addEntry(d),
            l = l.insert(u, d)) : k(za, "Ignoring outdated watch update for ", u, ". Current version:", f.version, " Watch version:", d.version)
        }
        ),
        {
            Ls: l,
            ks: r
        }
    }
    )
}
function Rp(i, t) {
    let e = j(i);
    return e.persistence.runTransaction("Allocate target", "readwrite", n => {
        let r;
        return e.hi.getTargetData(n, t).next(o => o ? (r = o,
        A.resolve(r)) : e.hi.allocateTargetId(n).next(l => (r = new hi(t,l,"TargetPurposeListen",n.currentSequenceNumber),
        e.hi.addTargetData(n, r).next( () => r))))
    }
    ).then(n => {
        let r = e.Fs.get(n.targetId);
        return (r === null || n.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (e.Fs = e.Fs.insert(n.targetId, n),
        e.Ms.set(t, n.targetId)),
        n
    }
    )
}
async function aa(i, t, e) {
    let n = j(i)
      , r = n.Fs.get(t)
      , o = e ? "readwrite" : "readwrite-primary";
    try {
        e || await n.persistence.runTransaction("Release target", o, l => n.persistence.referenceDelegate.removeTarget(l, r))
    } catch (l) {
        if (!fn(l))
            throw l;
        k(za, `Failed to update sequence numbers for target ${t}: ${l}`)
    }
    n.Fs = n.Fs.remove(t),
    n.Ms.delete(r.target)
}
function Su(i, t, e) {
    let n = j(i)
      , r = L.min()
      , o = z();
    return n.persistence.runTransaction("Execute query", "readwrite", l => (function(d, f, p) {
        let E = j(d)
          , S = E.Ms.get(p);
        return S !== void 0 ? A.resolve(E.Fs.get(S)) : E.hi.getTargetData(f, p)
    }
    )(n, l, Bt(t)).next(u => {
        if (u)
            return r = u.lastLimboFreeSnapshotVersion,
            n.hi.getMatchingKeysForTargetId(l, u.targetId).next(d => {
                o = d
            }
            )
    }
    ).next( () => n.Cs.getDocumentsMatchingQuery(l, t, e ? r : L.min(), e ? o : z())).next(u => (Dp(n, Gf(t), u),
    {
        documents: u,
        qs: o
    })))
}
function Dp(i, t, e) {
    let n = i.xs.get(t) || L.min();
    e.forEach( (r, o) => {
        o.readTime.compareTo(n) > 0 && (n = o.readTime)
    }
    ),
    i.xs.set(t, n)
}
var Dr = class {
    constructor() {
        this.activeTargetIds = Yf()
    }
    Gs(t) {
        this.activeTargetIds = this.activeTargetIds.add(t)
    }
    zs(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t)
    }
    Ws() {
        let t = {
            activeTargetIds: this.activeTargetIds.toArray(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t)
    }
}
;
var la = class {
    constructor() {
        this.Fo = new Dr,
        this.Mo = {},
        this.onlineStateHandler = null,
        this.sequenceNumberHandler = null
    }
    addPendingMutation(t) {}
    updateMutationState(t, e, n) {}
    addLocalQueryTarget(t, e=!0) {
        return e && this.Fo.Gs(t),
        this.Mo[t] || "not-current"
    }
    updateQueryState(t, e, n) {
        this.Mo[t] = e
    }
    removeLocalQueryTarget(t) {
        this.Fo.zs(t)
    }
    isLocalQueryTarget(t) {
        return this.Fo.activeTargetIds.has(t)
    }
    clearQueryState(t) {
        delete this.Mo[t]
    }
    getAllActiveQueryTargets() {
        return this.Fo.activeTargetIds
    }
    isActiveQueryTarget(t) {
        return this.Fo.activeTargetIds.has(t)
    }
    start() {
        return this.Fo = new Dr,
        Promise.resolve()
    }
    handleUserChange(t, e, n) {}
    setOnlineState(t) {}
    shutdown() {}
    writeSequenceNumber(t) {}
    notifyBundleLoaded(t) {}
}
;
var ca = class {
    xo(t) {}
    shutdown() {}
}
;
var Au = "ConnectivityMonitor"
  , Pr = class {
    constructor() {
        this.Oo = () => this.No(),
        this.Bo = () => this.Lo(),
        this.ko = [],
        this.qo()
    }
    xo(t) {
        this.ko.push(t)
    }
    shutdown() {
        window.removeEventListener("online", this.Oo),
        window.removeEventListener("offline", this.Bo)
    }
    qo() {
        window.addEventListener("online", this.Oo),
        window.addEventListener("offline", this.Bo)
    }
    No() {
        k(Au, "Network connectivity changed: AVAILABLE");
        for (let t of this.ko)
            t(0)
    }
    Lo() {
        k(Au, "Network connectivity changed: UNAVAILABLE");
        for (let t of this.ko)
            t(1)
    }
    static C() {
        return typeof window < "u" && window.addEventListener !== void 0 && window.removeEventListener !== void 0
    }
}
;
var cr = null;
function ua() {
    return cr === null ? cr = (function() {
        return 268435456 + Math.round(2147483648 * Math.random())
    }
    )() : cr++,
    "0x" + cr.toString(16)
}
var io = "RestConnection"
  , Pp = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery",
    RunAggregationQuery: "runAggregationQuery"
}
  , ha = class {
    get Qo() {
        return !1
    }
    constructor(t) {
        this.databaseInfo = t,
        this.databaseId = t.databaseId;
        let e = t.ssl ? "https" : "http"
          , n = encodeURIComponent(this.databaseId.projectId)
          , r = encodeURIComponent(this.databaseId.database);
        this.$o = e + "://" + t.host,
        this.Uo = `projects/${n}/databases/${r}`,
        this.Ko = this.databaseId.database === vr ? `project_id=${n}` : `project_id=${n}&database_id=${r}`
    }
    Wo(t, e, n, r, o) {
        let l = ua()
          , u = this.Go(t, e.toUriEncodedString());
        k(io, `Sending RPC '${t}' ${l}:`, u, n);
        let d = {
            "google-cloud-resource-prefix": this.Uo,
            "x-goog-request-params": this.Ko
        };
        this.zo(d, r, o);
        let {host: f} = new URL(u)
          , p = js(f);
        return this.jo(t, u, d, n, p).then(E => (k(io, `Received RPC '${t}' ${l}: `, E),
        E), E => {
            throw ae(io, `RPC '${t}' ${l} failed with error: `, E, "url: ", u, "request:", n),
            E
        }
        )
    }
    Jo(t, e, n, r, o, l) {
        return this.Wo(t, e, n, r, o)
    }
    zo(t, e, n) {
        t["X-Goog-Api-Client"] = (function() {
            return "gl-js/ fire/" + dn
        }
        )(),
        t["Content-Type"] = "text/plain",
        this.databaseInfo.appId && (t["X-Firebase-GMPID"] = this.databaseInfo.appId),
        e && e.headers.forEach( (r, o) => t[o] = r),
        n && n.headers.forEach( (r, o) => t[o] = r)
    }
    Go(t, e) {
        let n = Pp[t];
        return `${this.$o}/v1/${e}:${n}`
    }
    terminate() {}
}
;
var da = class {
    constructor(t) {
        this.Ho = t.Ho,
        this.Yo = t.Yo
    }
    Zo(t) {
        this.Xo = t
    }
    e_(t) {
        this.t_ = t
    }
    n_(t) {
        this.r_ = t
    }
    onMessage(t) {
        this.i_ = t
    }
    close() {
        this.Yo()
    }
    send(t) {
        this.Ho(t)
    }
    s_() {
        this.Xo()
    }
    o_() {
        this.t_()
    }
    __(t) {
        this.r_(t)
    }
    a_(t) {
        this.i_(t)
    }
}
;
var gt = "WebChannelConnection"
  , fa = class extends ha {
    constructor(t) {
        super(t),
        this.u_ = [],
        this.forceLongPolling = t.forceLongPolling,
        this.autoDetectLongPolling = t.autoDetectLongPolling,
        this.useFetchStreams = t.useFetchStreams,
        this.longPollingOptions = t.longPollingOptions
    }
    jo(t, e, n, r, o) {
        let l = ua();
        return new Promise( (u, d) => {
            let f = new Xs;
            f.setWithCredentials(!0),
            f.listenOnce(Ys.COMPLETE, () => {
                try {
                    switch (f.getLastErrorCode()) {
                    case Hn.NO_ERROR:
                        let E = f.getResponseJson();
                        k(gt, `XHR for RPC '${t}' ${l} received:`, JSON.stringify(E)),
                        u(E);
                        break;
                    case Hn.TIMEOUT:
                        k(gt, `RPC '${t}' ${l} timed out`),
                        d(new N(D.DEADLINE_EXCEEDED,"Request time out"));
                        break;
                    case Hn.HTTP_ERROR:
                        let S = f.getStatus();
                        if (k(gt, `RPC '${t}' ${l} failed with status:`, S, "response text:", f.getResponseText()),
                        S > 0) {
                            let C = f.getResponseJson();
                            Array.isArray(C) && (C = C[0]);
                            let P = C?.error;
                            if (P && P.status && P.message) {
                                let O = (function(K) {
                                    let $ = K.toLowerCase().replace(/_/g, "-");
                                    return Object.values(D).indexOf($) >= 0 ? $ : D.UNKNOWN
                                }
                                )(P.status);
                                d(new N(O,P.message))
                            } else
                                d(new N(D.UNKNOWN,"Server responded with status " + f.getStatus()))
                        } else
                            d(new N(D.UNAVAILABLE,"Connection failed."));
                        break;
                    default:
                        M(9055, {
                            c_: t,
                            streamId: l,
                            l_: f.getLastErrorCode(),
                            h_: f.getLastError()
                        })
                    }
                } finally {
                    k(gt, `RPC '${t}' ${l} completed.`)
                }
            }
            );
            let p = JSON.stringify(r);
            k(gt, `RPC '${t}' ${l} sending request:`, r),
            f.send(e, "POST", p, n, 15)
        }
        )
    }
    P_(t, e, n) {
        let r = ua()
          , o = [this.$o, "/", "google.firestore.v1.Firestore", "/", t, "/channel"]
          , l = to()
          , u = Zs()
          , d = {
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling,
            detectBufferingProxy: this.autoDetectLongPolling
        }
          , f = this.longPollingOptions.timeoutSeconds;
        f !== void 0 && (d.longPollingTimeout = Math.round(1e3 * f)),
        this.useFetchStreams && (d.useFetchStreams = !0),
        this.zo(d.initMessageHeaders, e, n),
        d.encodeInitMessageHeaders = !0;
        let p = o.join("");
        k(gt, `Creating RPC '${t}' stream ${r}: ${p}`, d);
        let E = l.createWebChannel(p, d);
        this.T_(E);
        let S = !1
          , C = !1
          , P = new da({
            Ho: V => {
                C ? k(gt, `Not sending because RPC '${t}' stream ${r} is closed:`, V) : (S || (k(gt, `Opening RPC '${t}' stream ${r} transport.`),
                E.open(),
                S = !0),
                k(gt, `RPC '${t}' stream ${r} sending:`, V),
                E.send(V))
            }
            ,
            Yo: () => E.close()
        })
          , O = (V, K, $) => {
            V.listen(K, G => {
                try {
                    $(G)
                } catch (J) {
                    setTimeout( () => {
                        throw J
                    }
                    , 0)
                }
            }
            )
        }
        ;
        return O(E, qe.EventType.OPEN, () => {
            C || (k(gt, `RPC '${t}' stream ${r} transport opened.`),
            P.s_())
        }
        ),
        O(E, qe.EventType.CLOSE, () => {
            C || (C = !0,
            k(gt, `RPC '${t}' stream ${r} transport closed`),
            P.__(),
            this.I_(E))
        }
        ),
        O(E, qe.EventType.ERROR, V => {
            C || (C = !0,
            ae(gt, `RPC '${t}' stream ${r} transport errored. Name:`, V.name, "Message:", V.message),
            P.__(new N(D.UNAVAILABLE,"The operation could not be completed")))
        }
        ),
        O(E, qe.EventType.MESSAGE, V => {
            var K;
            if (!C) {
                let $ = V.data[0];
                Y(!!$, 16349);
                let G = $
                  , J = G?.error || ((K = G[0]) === null || K === void 0 ? void 0 : K.error);
                if (J) {
                    k(gt, `RPC '${t}' stream ${r} received error:`, J);
                    let At = J.status
                      , H = (function(_) {
                        let y = st[_];
                        if (y !== void 0)
                            return Ch(y)
                    }
                    )(At)
                      , w = J.message;
                    H === void 0 && (H = D.INTERNAL,
                    w = "Unknown error status: " + At + " with message " + J.message),
                    C = !0,
                    P.__(new N(H,w)),
                    E.close()
                } else
                    k(gt, `RPC '${t}' stream ${r} received:`, $),
                    P.a_($)
            }
        }
        ),
        O(u, Js.STAT_EVENT, V => {
            V.stat === or.PROXY ? k(gt, `RPC '${t}' stream ${r} detected buffering proxy`) : V.stat === or.NOPROXY && k(gt, `RPC '${t}' stream ${r} detected no buffering proxy`)
        }
        ),
        setTimeout( () => {
            P.o_()
        }
        , 0),
        P
    }
    terminate() {
        this.u_.forEach(t => t.close()),
        this.u_ = []
    }
    T_(t) {
        this.u_.push(t)
    }
    I_(t) {
        this.u_ = this.u_.filter(e => e === t)
    }
}
;
function ro() {
    return typeof document < "u" ? document : null
}
function Mh(i) {
    return new Fo(i,!0)
}
var xr = class {
    constructor(t, e, n=1e3, r=1.5, o=6e4) {
        this.Fi = t,
        this.timerId = e,
        this.d_ = n,
        this.E_ = r,
        this.A_ = o,
        this.R_ = 0,
        this.V_ = null,
        this.m_ = Date.now(),
        this.reset()
    }
    reset() {
        this.R_ = 0
    }
    f_() {
        this.R_ = this.A_
    }
    g_(t) {
        this.cancel();
        let e = Math.floor(this.R_ + this.p_())
          , n = Math.max(0, Date.now() - this.m_)
          , r = Math.max(0, e - n);
        r > 0 && k("ExponentialBackoff", `Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),
        this.V_ = this.Fi.enqueueAfterDelay(this.timerId, r, () => (this.m_ = Date.now(),
        t())),
        this.R_ *= this.E_,
        this.R_ < this.d_ && (this.R_ = this.d_),
        this.R_ > this.A_ && (this.R_ = this.A_)
    }
    y_() {
        this.V_ !== null && (this.V_.skipDelay(),
        this.V_ = null)
    }
    cancel() {
        this.V_ !== null && (this.V_.cancel(),
        this.V_ = null)
    }
    p_() {
        return (Math.random() - .5) * this.R_
    }
}
;
var Cu = "PersistentStream"
  , pa = class {
    constructor(t, e, n, r, o, l, u, d) {
        this.Fi = t,
        this.w_ = n,
        this.S_ = r,
        this.connection = o,
        this.authCredentialsProvider = l,
        this.appCheckCredentialsProvider = u,
        this.listener = d,
        this.state = 0,
        this.b_ = 0,
        this.D_ = null,
        this.v_ = null,
        this.stream = null,
        this.C_ = 0,
        this.F_ = new xr(t,e)
    }
    M_() {
        return this.state === 1 || this.state === 5 || this.x_()
    }
    x_() {
        return this.state === 2 || this.state === 3
    }
    start() {
        this.C_ = 0,
        this.state !== 4 ? this.auth() : this.O_()
    }
    async stop() {
        this.M_() && await this.close(0)
    }
    N_() {
        this.state = 0,
        this.F_.reset()
    }
    B_() {
        this.x_() && this.D_ === null && (this.D_ = this.Fi.enqueueAfterDelay(this.w_, 6e4, () => this.L_()))
    }
    k_(t) {
        this.q_(),
        this.stream.send(t)
    }
    async L_() {
        if (this.x_())
            return this.close(0)
    }
    q_() {
        this.D_ && (this.D_.cancel(),
        this.D_ = null)
    }
    Q_() {
        this.v_ && (this.v_.cancel(),
        this.v_ = null)
    }
    async close(t, e) {
        this.q_(),
        this.Q_(),
        this.F_.cancel(),
        this.b_++,
        t !== 4 ? this.F_.reset() : e && e.code === D.RESOURCE_EXHAUSTED ? (Yt(e.toString()),
        Yt("Using maximum backoff delay to prevent overloading the backend."),
        this.F_.f_()) : e && e.code === D.UNAUTHENTICATED && this.state !== 3 && (this.authCredentialsProvider.invalidateToken(),
        this.appCheckCredentialsProvider.invalidateToken()),
        this.stream !== null && (this.U_(),
        this.stream.close(),
        this.stream = null),
        this.state = t,
        await this.listener.n_(e)
    }
    U_() {}
    auth() {
        this.state = 1;
        let t = this.K_(this.b_)
          , e = this.b_;
        Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then( ([n,r]) => {
            this.b_ === e && this.W_(n, r)
        }
        , n => {
            t( () => {
                let r = new N(D.UNKNOWN,"Fetching auth token failed: " + n.message);
                return this.G_(r)
            }
            )
        }
        )
    }
    W_(t, e) {
        let n = this.K_(this.b_);
        this.stream = this.z_(t, e),
        this.stream.Zo( () => {
            n( () => this.listener.Zo())
        }
        ),
        this.stream.e_( () => {
            n( () => (this.state = 2,
            this.v_ = this.Fi.enqueueAfterDelay(this.S_, 1e4, () => (this.x_() && (this.state = 3),
            Promise.resolve())),
            this.listener.e_()))
        }
        ),
        this.stream.n_(r => {
            n( () => this.G_(r))
        }
        ),
        this.stream.onMessage(r => {
            n( () => ++this.C_ == 1 ? this.j_(r) : this.onNext(r))
        }
        )
    }
    O_() {
        this.state = 5,
        this.F_.g_(async () => {
            this.state = 0,
            this.start()
        }
        )
    }
    G_(t) {
        return k(Cu, `close with error: ${t}`),
        this.stream = null,
        this.close(4, t)
    }
    K_(t) {
        return e => {
            this.Fi.enqueueAndForget( () => this.b_ === t ? e() : (k(Cu, "stream callback skipped by getCloseGuardedDispatcher."),
            Promise.resolve()))
        }
    }
}
  , ma = class extends pa {
    constructor(t, e, n, r, o, l) {
        super(t, "listen_stream_connection_backoff", "listen_stream_idle", "health_check_timeout", e, n, r, l),
        this.serializer = o
    }
    z_(t, e) {
        return this.connection.P_("Listen", t, e)
    }
    j_(t) {
        return this.onNext(t)
    }
    onNext(t) {
        this.F_.reset();
        let e = fp(this.serializer, t)
          , n = (function(o) {
            if (!("targetChange"in o))
                return L.min();
            let l = o.targetChange;
            return l.targetIds && l.targetIds.length ? L.min() : l.readTime ? We(l.readTime) : L.min()
        }
        )(t);
        return this.listener.J_(e, n)
    }
    H_(t) {
        let e = {};
        e.database = Eu(this.serializer),
        e.addTarget = (function(o, l) {
            let u, d = l.target;
            if (u = Ro(d) ? {
                documents: pp(o, d)
            } : {
                query: mp(o, d).Vt
            },
            u.targetId = l.targetId,
            l.resumeToken.approximateByteSize() > 0) {
                u.resumeToken = up(o, l.resumeToken);
                let f = Mo(o, l.expectedCount);
                f !== null && (u.expectedCount = f)
            } else if (l.snapshotVersion.compareTo(L.min()) > 0) {
                u.readTime = cp(o, l.snapshotVersion.toTimestamp());
                let f = Mo(o, l.expectedCount);
                f !== null && (u.expectedCount = f)
            }
            return u
        }
        )(this.serializer, t);
        let n = _p(this.serializer, t);
        n && (e.labels = n),
        this.k_(e)
    }
    Y_(t) {
        let e = {};
        e.database = Eu(this.serializer),
        e.removeTarget = t,
        this.k_(e)
    }
}
;
var ga = class {
}
  , _a = class extends ga {
    constructor(t, e, n, r) {
        super(),
        this.authCredentials = t,
        this.appCheckCredentials = e,
        this.connection = n,
        this.serializer = r,
        this.ra = !1
    }
    ia() {
        if (this.ra)
            throw new N(D.FAILED_PRECONDITION,"The client has already been terminated.")
    }
    Wo(t, e, n, r) {
        return this.ia(),
        Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then( ([o,l]) => this.connection.Wo(t, Lo(e, n), r, o, l)).catch(o => {
            throw o.name === "FirebaseError" ? (o.code === D.UNAUTHENTICATED && (this.authCredentials.invalidateToken(),
            this.appCheckCredentials.invalidateToken()),
            o) : new N(D.UNKNOWN,o.toString())
        }
        )
    }
    Jo(t, e, n, r, o) {
        return this.ia(),
        Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then( ([l,u]) => this.connection.Jo(t, Lo(e, n), r, l, u, o)).catch(l => {
            throw l.name === "FirebaseError" ? (l.code === D.UNAUTHENTICATED && (this.authCredentials.invalidateToken(),
            this.appCheckCredentials.invalidateToken()),
            l) : new N(D.UNKNOWN,l.toString())
        }
        )
    }
    terminate() {
        this.ra = !0,
        this.connection.terminate()
    }
}
  , ya = class {
    constructor(t, e) {
        this.asyncQueue = t,
        this.onlineStateHandler = e,
        this.state = "Unknown",
        this.sa = 0,
        this.oa = null,
        this._a = !0
    }
    aa() {
        this.sa === 0 && (this.ua("Unknown"),
        this.oa = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.oa = null,
        this.ca("Backend didn't respond within 10 seconds."),
        this.ua("Offline"),
        Promise.resolve())))
    }
    la(t) {
        this.state === "Online" ? this.ua("Unknown") : (this.sa++,
        this.sa >= 1 && (this.ha(),
        this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),
        this.ua("Offline")))
    }
    set(t) {
        this.ha(),
        this.sa = 0,
        t === "Online" && (this._a = !1),
        this.ua(t)
    }
    ua(t) {
        t !== this.state && (this.state = t,
        this.onlineStateHandler(t))
    }
    ca(t) {
        let e = `Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
        this._a ? (Yt(e),
        this._a = !1) : k("OnlineStateTracker", e)
    }
    ha() {
        this.oa !== null && (this.oa.cancel(),
        this.oa = null)
    }
}
;
var un = "RemoteStore"
  , va = class {
    constructor(t, e, n, r, o) {
        this.localStore = t,
        this.datastore = e,
        this.asyncQueue = n,
        this.remoteSyncer = {},
        this.Pa = [],
        this.Ta = new Map,
        this.Ia = new Set,
        this.da = [],
        this.Ea = o,
        this.Ea.xo(l => {
            n.enqueueAndForget(async () => {
                wi(this) && (k(un, "Restarting streams for network reachability change."),
                await (async function(d) {
                    let f = j(d);
                    f.Ia.add(4),
                    await vi(f),
                    f.Aa.set("Unknown"),
                    f.Ia.delete(4),
                    await Wr(f)
                }
                )(this))
            }
            )
        }
        ),
        this.Aa = new ya(n,r)
    }
}
;
async function Wr(i) {
    if (wi(i))
        for (let t of i.da)
            await t(!0)
}
async function vi(i) {
    for (let t of i.da)
        await t(!1)
}
function Lh(i, t) {
    let e = j(i);
    e.Ta.has(t.targetId) || (e.Ta.set(t.targetId, t),
    Ka(e) ? Ga(e) : pn(e).x_() && $a(e, t))
}
function Ua(i, t) {
    let e = j(i)
      , n = pn(e);
    e.Ta.delete(t),
    n.x_() && Bh(e, t),
    e.Ta.size === 0 && (n.x_() ? n.B_() : wi(e) && e.Aa.set("Unknown"))
}
function $a(i, t) {
    if (i.Ra.$e(t.targetId),
    t.resumeToken.approximateByteSize() > 0 || t.snapshotVersion.compareTo(L.min()) > 0) {
        let e = i.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
        t = t.withExpectedCount(e)
    }
    pn(i).H_(t)
}
function Bh(i, t) {
    i.Ra.$e(t),
    pn(i).Y_(t)
}
function Ga(i) {
    i.Ra = new No({
        getRemoteKeysForTarget: t => i.remoteSyncer.getRemoteKeysForTarget(t),
        Et: t => i.Ta.get(t) || null,
        lt: () => i.datastore.serializer.databaseId
    }),
    pn(i).start(),
    i.Aa.aa()
}
function Ka(i) {
    return wi(i) && !pn(i).M_() && i.Ta.size > 0
}
function wi(i) {
    return j(i).Ia.size === 0
}
function qh(i) {
    i.Ra = void 0
}
async function xp(i) {
    i.Aa.set("Online")
}
async function kp(i) {
    i.Ta.forEach( (t, e) => {
        $a(i, t)
    }
    )
}
async function Vp(i, t) {
    qh(i),
    Ka(i) ? (i.Aa.la(t),
    Ga(i)) : i.Aa.set("Unknown")
}
async function Op(i, t, e) {
    if (i.Aa.set("Online"),
    t instanceof br && t.state === 2 && t.cause)
        try {
            await (async function(r, o) {
                let l = o.cause;
                for (let u of o.targetIds)
                    r.Ta.has(u) && (await r.remoteSyncer.rejectListen(u, l),
                    r.Ta.delete(u),
                    r.Ra.removeTarget(u))
            }
            )(i, t)
        } catch (n) {
            k(un, "Failed to remove targets %s: %s ", t.targetIds.join(","), n),
            await Ru(i, n)
        }
    else if (t instanceof Ke ? i.Ra.Ye(t) : t instanceof Ir ? i.Ra.it(t) : i.Ra.et(t),
    !e.isEqual(L.min()))
        try {
            let n = await Fh(i.localStore);
            e.compareTo(n) >= 0 && await (function(o, l) {
                let u = o.Ra.Pt(l);
                return u.targetChanges.forEach( (d, f) => {
                    if (d.resumeToken.approximateByteSize() > 0) {
                        let p = o.Ta.get(f);
                        p && o.Ta.set(f, p.withResumeToken(d.resumeToken, l))
                    }
                }
                ),
                u.targetMismatches.forEach( (d, f) => {
                    let p = o.Ta.get(d);
                    if (!p)
                        return;
                    o.Ta.set(d, p.withResumeToken(_t.EMPTY_BYTE_STRING, p.snapshotVersion)),
                    Bh(o, d);
                    let E = new hi(p.target,d,f,p.sequenceNumber);
                    $a(o, E)
                }
                ),
                o.remoteSyncer.applyRemoteEvent(u)
            }
            )(i, e)
        } catch (n) {
            k(un, "Failed to raise snapshot:", n),
            await Ru(i, n)
        }
}
async function Ru(i, t, e) {
    if (!fn(t))
        throw t;
    i.Ia.add(1),
    await vi(i),
    i.Aa.set("Offline"),
    e || (e = () => Fh(i.localStore)),
    i.asyncQueue.enqueueRetryable(async () => {
        k(un, "Retrying IndexedDB access"),
        await e(),
        i.Ia.delete(1),
        await Wr(i)
    }
    )
}
async function Du(i, t) {
    let e = j(i);
    e.asyncQueue.verifyOperationInProgress(),
    k(un, "RemoteStore received new credentials");
    let n = wi(e);
    e.Ia.add(3),
    await vi(e),
    n && e.Aa.set("Unknown"),
    await e.remoteSyncer.handleCredentialChange(t),
    e.Ia.delete(3),
    await Wr(e)
}
async function Np(i, t) {
    let e = j(i);
    t ? (e.Ia.delete(2),
    await Wr(e)) : t || (e.Ia.add(2),
    await vi(e),
    e.Aa.set("Unknown"))
}
function pn(i) {
    return i.Va || (i.Va = (function(e, n, r) {
        let o = j(e);
        return o.ia(),
        new ma(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,r)
    }
    )(i.datastore, i.asyncQueue, {
        Zo: xp.bind(null, i),
        e_: kp.bind(null, i),
        n_: Vp.bind(null, i),
        J_: Op.bind(null, i)
    }),
    i.da.push(async t => {
        t ? (i.Va.N_(),
        Ka(i) ? Ga(i) : i.Aa.set("Unknown")) : (await i.Va.stop(),
        qh(i))
    }
    )),
    i.Va
}
var wa = class i {
    constructor(t, e, n, r, o) {
        this.asyncQueue = t,
        this.timerId = e,
        this.targetTimeMs = n,
        this.op = r,
        this.removalCallback = o,
        this.deferred = new oe,
        this.then = this.deferred.promise.then.bind(this.deferred.promise),
        this.deferred.promise.catch(l => {}
        )
    }
    get promise() {
        return this.deferred.promise
    }
    static createAndSchedule(t, e, n, r, o) {
        let l = Date.now() + n
          , u = new i(t,e,l,r,o);
        return u.start(n),
        u
    }
    start(t) {
        this.timerHandle = setTimeout( () => this.handleDelayElapsed(), t)
    }
    skipDelay() {
        return this.handleDelayElapsed()
    }
    cancel(t) {
        this.timerHandle !== null && (this.clearTimeout(),
        this.deferred.reject(new N(D.CANCELLED,"Operation cancelled" + (t ? ": " + t : ""))))
    }
    handleDelayElapsed() {
        this.asyncQueue.enqueueAndForget( () => this.timerHandle !== null ? (this.clearTimeout(),
        this.op().then(t => this.deferred.resolve(t))) : Promise.resolve())
    }
    clearTimeout() {
        this.timerHandle !== null && (this.removalCallback(this),
        clearTimeout(this.timerHandle),
        this.timerHandle = null)
    }
}
;
function jh(i, t) {
    if (Yt("AsyncQueue", `${t}: ${i}`),
    fn(i))
        return new N(D.UNAVAILABLE,`${t}: ${i}`);
    throw i
}
var kr = class i {
    static emptySet(t) {
        return new i(t.comparator)
    }
    constructor(t) {
        this.comparator = t ? (e, n) => t(e, n) || F.comparator(e.key, n.key) : (e, n) => F.comparator(e.key, n.key),
        this.keyedMap = Qn(),
        this.sortedSet = new it(this.comparator)
    }
    has(t) {
        return this.keyedMap.get(t) != null
    }
    get(t) {
        return this.keyedMap.get(t)
    }
    first() {
        return this.sortedSet.minKey()
    }
    last() {
        return this.sortedSet.maxKey()
    }
    isEmpty() {
        return this.sortedSet.isEmpty()
    }
    indexOf(t) {
        let e = this.keyedMap.get(t);
        return e ? this.sortedSet.indexOf(e) : -1
    }
    get size() {
        return this.sortedSet.size
    }
    forEach(t) {
        this.sortedSet.inorderTraversal( (e, n) => (t(e),
        !1))
    }
    add(t) {
        let e = this.delete(t.key);
        return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null))
    }
    delete(t) {
        let e = this.get(t);
        return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this
    }
    isEqual(t) {
        if (!(t instanceof i) || this.size !== t.size)
            return !1;
        let e = this.sortedSet.getIterator()
          , n = t.sortedSet.getIterator();
        for (; e.hasNext(); ) {
            let r = e.getNext().key
              , o = n.getNext().key;
            if (!r.isEqual(o))
                return !1
        }
        return !0
    }
    toString() {
        let t = [];
        return this.forEach(e => {
            t.push(e.toString())
        }
        ),
        t.length === 0 ? "DocumentSet ()" : `DocumentSet (
  ` + t.join(`  
`) + `
)`
    }
    copy(t, e) {
        let n = new i;
        return n.comparator = this.comparator,
        n.keyedMap = t,
        n.sortedSet = e,
        n
    }
}
;
var Vr = class {
    constructor() {
        this.fa = new it(F.comparator)
    }
    track(t) {
        let e = t.doc.key
          , n = this.fa.get(e);
        n ? t.type !== 0 && n.type === 3 ? this.fa = this.fa.insert(e, t) : t.type === 3 && n.type !== 1 ? this.fa = this.fa.insert(e, {
            type: n.type,
            doc: t.doc
        }) : t.type === 2 && n.type === 2 ? this.fa = this.fa.insert(e, {
            type: 2,
            doc: t.doc
        }) : t.type === 2 && n.type === 0 ? this.fa = this.fa.insert(e, {
            type: 0,
            doc: t.doc
        }) : t.type === 1 && n.type === 0 ? this.fa = this.fa.remove(e) : t.type === 1 && n.type === 2 ? this.fa = this.fa.insert(e, {
            type: 1,
            doc: n.doc
        }) : t.type === 0 && n.type === 1 ? this.fa = this.fa.insert(e, {
            type: 2,
            doc: t.doc
        }) : M(63341, {
            At: t,
            ga: n
        }) : this.fa = this.fa.insert(e, t)
    }
    pa() {
        let t = [];
        return this.fa.inorderTraversal( (e, n) => {
            t.push(n)
        }
        ),
        t
    }
}
  , hn = class i {
    constructor(t, e, n, r, o, l, u, d, f) {
        this.query = t,
        this.docs = e,
        this.oldDocs = n,
        this.docChanges = r,
        this.mutatedKeys = o,
        this.fromCache = l,
        this.syncStateChanged = u,
        this.excludesMetadataChanges = d,
        this.hasCachedResults = f
    }
    static fromInitialDocuments(t, e, n, r, o) {
        let l = [];
        return e.forEach(u => {
            l.push({
                type: 0,
                doc: u
            })
        }
        ),
        new i(t,e,kr.emptySet(e),l,n,r,!0,!1,o)
    }
    get hasPendingWrites() {
        return !this.mutatedKeys.isEmpty()
    }
    isEqual(t) {
        if (!(this.fromCache === t.fromCache && this.hasCachedResults === t.hasCachedResults && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && Gr(this.query, t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs)))
            return !1;
        let e = this.docChanges
          , n = t.docChanges;
        if (e.length !== n.length)
            return !1;
        for (let r = 0; r < e.length; r++)
            if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc))
                return !1;
        return !0
    }
}
;
var Ea = class {
    constructor() {
        this.ya = void 0,
        this.wa = []
    }
    Sa() {
        return this.wa.some(t => t.ba())
    }
}
  , Ta = class {
    constructor() {
        this.queries = Pu(),
        this.onlineState = "Unknown",
        this.Da = new Set
    }
    terminate() {
        (function(e, n) {
            let r = j(e)
              , o = r.queries;
            r.queries = Pu(),
            o.forEach( (l, u) => {
                for (let d of u.wa)
                    d.onError(n)
            }
            )
        }
        )(this, new N(D.ABORTED,"Firestore shutting down"))
    }
}
;
function Pu() {
    return new te(i => yh(i),Gr)
}
async function Fp(i, t) {
    let e = j(i)
      , n = 3
      , r = t.query
      , o = e.queries.get(r);
    o ? !o.Sa() && t.ba() && (n = 2) : (o = new Ea,
    n = t.ba() ? 0 : 1);
    try {
        switch (n) {
        case 0:
            o.ya = await e.onListen(r, !0);
            break;
        case 1:
            o.ya = await e.onListen(r, !1);
            break;
        case 2:
            await e.onFirstRemoteStoreListen(r)
        }
    } catch (l) {
        let u = jh(l, `Initialization of query '${ze(t.query)}' failed`);
        return void t.onError(u)
    }
    e.queries.set(r, o),
    o.wa.push(t),
    t.va(e.onlineState),
    o.ya && t.Ca(o.ya) && Wa(e)
}
async function Mp(i, t) {
    let e = j(i)
      , n = t.query
      , r = 3
      , o = e.queries.get(n);
    if (o) {
        let l = o.wa.indexOf(t);
        l >= 0 && (o.wa.splice(l, 1),
        o.wa.length === 0 ? r = t.ba() ? 0 : 1 : !o.Sa() && t.ba() && (r = 2))
    }
    switch (r) {
    case 0:
        return e.queries.delete(n),
        e.onUnlisten(n, !0);
    case 1:
        return e.queries.delete(n),
        e.onUnlisten(n, !1);
    case 2:
        return e.onLastRemoteStoreUnlisten(n);
    default:
        return
    }
}
function Lp(i, t) {
    let e = j(i)
      , n = !1;
    for (let r of t) {
        let o = r.query
          , l = e.queries.get(o);
        if (l) {
            for (let u of l.wa)
                u.Ca(r) && (n = !0);
            l.ya = r
        }
    }
    n && Wa(e)
}
function Bp(i, t, e) {
    let n = j(i)
      , r = n.queries.get(t);
    if (r)
        for (let o of r.wa)
            o.onError(e);
    n.queries.delete(t)
}
function Wa(i) {
    i.Da.forEach(t => {
        t.next()
    }
    )
}
var Ia, xu;
(xu = Ia || (Ia = {})).Fa = "default",
xu.Cache = "cache";
var ba = class {
    constructor(t, e, n) {
        this.query = t,
        this.Ma = e,
        this.xa = !1,
        this.Oa = null,
        this.onlineState = "Unknown",
        this.options = n || {}
    }
    Ca(t) {
        if (!this.options.includeMetadataChanges) {
            let n = [];
            for (let r of t.docChanges)
                r.type !== 3 && n.push(r);
            t = new hn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)
        }
        let e = !1;
        return this.xa ? this.Na(t) && (this.Ma.next(t),
        e = !0) : this.Ba(t, this.onlineState) && (this.La(t),
        e = !0),
        this.Oa = t,
        e
    }
    onError(t) {
        this.Ma.error(t)
    }
    va(t) {
        this.onlineState = t;
        let e = !1;
        return this.Oa && !this.xa && this.Ba(this.Oa, t) && (this.La(this.Oa),
        e = !0),
        e
    }
    Ba(t, e) {
        if (!t.fromCache || !this.ba())
            return !0;
        let n = e !== "Offline";
        return (!this.options.ka || !n) && (!t.docs.isEmpty() || t.hasCachedResults || e === "Offline")
    }
    Na(t) {
        if (t.docChanges.length > 0)
            return !0;
        let e = this.Oa && this.Oa.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.syncStateChanged && !e) && this.options.includeMetadataChanges === !0
    }
    La(t) {
        t = hn.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache, t.hasCachedResults),
        this.xa = !0,
        this.Ma.next(t)
    }
    ba() {
        return this.options.source !== Ia.Cache
    }
}
;
var Or = class {
    constructor(t) {
        this.key = t
    }
}
  , Nr = class {
    constructor(t) {
        this.key = t
    }
}
  , Sa = class {
    constructor(t, e) {
        this.query = t,
        this.Ha = e,
        this.Ya = null,
        this.hasCachedResults = !1,
        this.current = !1,
        this.Za = z(),
        this.mutatedKeys = z(),
        this.Xa = vh(t),
        this.eu = new kr(this.Xa)
    }
    get tu() {
        return this.Ha
    }
    nu(t, e) {
        let n = e ? e.ru : new Vr
          , r = e ? e.eu : this.eu
          , o = e ? e.mutatedKeys : this.mutatedKeys
          , l = r
          , u = !1
          , d = this.query.limitType === "F" && r.size === this.query.limit ? r.last() : null
          , f = this.query.limitType === "L" && r.size === this.query.limit ? r.first() : null;
        if (t.inorderTraversal( (p, E) => {
            let S = r.get(p)
              , C = Kr(this.query, E) ? E : null
              , P = !!S && this.mutatedKeys.has(S.key)
              , O = !!C && (C.hasLocalMutations || this.mutatedKeys.has(C.key) && C.hasCommittedMutations)
              , V = !1;
            S && C ? S.data.isEqual(C.data) ? P !== O && (n.track({
                type: 3,
                doc: C
            }),
            V = !0) : this.iu(S, C) || (n.track({
                type: 2,
                doc: C
            }),
            V = !0,
            (d && this.Xa(C, d) > 0 || f && this.Xa(C, f) < 0) && (u = !0)) : !S && C ? (n.track({
                type: 0,
                doc: C
            }),
            V = !0) : S && !C && (n.track({
                type: 1,
                doc: S
            }),
            V = !0,
            (d || f) && (u = !0)),
            V && (C ? (l = l.add(C),
            o = O ? o.add(p) : o.delete(p)) : (l = l.delete(p),
            o = o.delete(p)))
        }
        ),
        this.query.limit !== null)
            for (; l.size > this.query.limit; ) {
                let p = this.query.limitType === "F" ? l.last() : l.first();
                l = l.delete(p.key),
                o = o.delete(p.key),
                n.track({
                    type: 1,
                    doc: p
                })
            }
        return {
            eu: l,
            ru: n,
            Ds: u,
            mutatedKeys: o
        }
    }
    iu(t, e) {
        return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations
    }
    applyChanges(t, e, n, r) {
        let o = this.eu;
        this.eu = t.eu,
        this.mutatedKeys = t.mutatedKeys;
        let l = t.ru.pa();
        l.sort( (p, E) => (function(C, P) {
            let O = V => {
                switch (V) {
                case 0:
                    return 1;
                case 2:
                case 3:
                    return 2;
                case 1:
                    return 0;
                default:
                    return M(20277, {
                        At: V
                    })
                }
            }
            ;
            return O(C) - O(P)
        }
        )(p.type, E.type) || this.Xa(p.doc, E.doc)),
        this.su(n),
        r = r != null && r;
        let u = e && !r ? this.ou() : []
          , d = this.Za.size === 0 && this.current && !r ? 1 : 0
          , f = d !== this.Ya;
        return this.Ya = d,
        l.length !== 0 || f ? {
            snapshot: new hn(this.query,t.eu,o,l,t.mutatedKeys,d === 0,f,!1,!!n && n.resumeToken.approximateByteSize() > 0),
            _u: u
        } : {
            _u: u
        }
    }
    va(t) {
        return this.current && t === "Offline" ? (this.current = !1,
        this.applyChanges({
            eu: this.eu,
            ru: new Vr,
            mutatedKeys: this.mutatedKeys,
            Ds: !1
        }, !1)) : {
            _u: []
        }
    }
    au(t) {
        return !this.Ha.has(t) && !!this.eu.has(t) && !this.eu.get(t).hasLocalMutations
    }
    su(t) {
        t && (t.addedDocuments.forEach(e => this.Ha = this.Ha.add(e)),
        t.modifiedDocuments.forEach(e => {}
        ),
        t.removedDocuments.forEach(e => this.Ha = this.Ha.delete(e)),
        this.current = t.current)
    }
    ou() {
        if (!this.current)
            return [];
        let t = this.Za;
        this.Za = z(),
        this.eu.forEach(n => {
            this.au(n.key) && (this.Za = this.Za.add(n.key))
        }
        );
        let e = [];
        return t.forEach(n => {
            this.Za.has(n) || e.push(new Nr(n))
        }
        ),
        this.Za.forEach(n => {
            t.has(n) || e.push(new Or(n))
        }
        ),
        e
    }
    uu(t) {
        this.Ha = t.qs,
        this.Za = z();
        let e = this.nu(t.documents);
        return this.applyChanges(e, !0)
    }
    cu() {
        return hn.fromInitialDocuments(this.query, this.eu, this.mutatedKeys, this.Ya === 0, this.hasCachedResults)
    }
}
  , Ha = "SyncEngine"
  , Aa = class {
    constructor(t, e, n) {
        this.query = t,
        this.targetId = e,
        this.view = n
    }
}
  , Ca = class {
    constructor(t) {
        this.key = t,
        this.lu = !1
    }
}
  , Ra = class {
    constructor(t, e, n, r, o, l) {
        this.localStore = t,
        this.remoteStore = e,
        this.eventManager = n,
        this.sharedClientState = r,
        this.currentUser = o,
        this.maxConcurrentLimboResolutions = l,
        this.hu = {},
        this.Pu = new te(u => yh(u),Gr),
        this.Tu = new Map,
        this.Iu = new Set,
        this.du = new it(F.comparator),
        this.Eu = new Map,
        this.Au = new fi,
        this.Ru = {},
        this.Vu = new Map,
        this.mu = di.ur(),
        this.onlineState = "Unknown",
        this.fu = void 0
    }
    get isPrimaryClient() {
        return this.fu === !0
    }
}
;
async function qp(i, t, e=!0) {
    let n = Kh(i), r, o = n.Pu.get(t);
    return o ? (n.sharedClientState.addLocalQueryTarget(o.targetId),
    r = o.view.cu()) : r = await zh(n, t, e, !0),
    r
}
async function jp(i, t) {
    let e = Kh(i);
    await zh(e, t, !0, !1)
}
async function zh(i, t, e, n) {
    let r = await Rp(i.localStore, Bt(t)), o = r.targetId, l = i.sharedClientState.addLocalQueryTarget(o, e), u;
    return n && (u = await zp(i, t, o, l === "current", r.resumeToken)),
    i.isPrimaryClient && e && Lh(i.remoteStore, r),
    u
}
async function zp(i, t, e, n, r) {
    i.gu = (E, S, C) => (async function(O, V, K, $) {
        let G = V.view.nu(K);
        G.Ds && (G = await Su(O.localStore, V.query, !1).then( ({documents: w}) => V.view.nu(w, G)));
        let J = $ && $.targetChanges.get(V.targetId)
          , At = $ && $.targetMismatches.get(V.targetId) != null
          , H = V.view.applyChanges(G, O.isPrimaryClient, J, At);
        return Vu(O, V.targetId, H._u),
        H.snapshot
    }
    )(i, E, S, C);
    let o = await Su(i.localStore, t, !0)
      , l = new Sa(t,o.qs)
      , u = l.nu(o.documents)
      , d = ui.createSynthesizedTargetChangeForCurrentChange(e, n && i.onlineState !== "Offline", r)
      , f = l.applyChanges(u, i.isPrimaryClient, d);
    Vu(i, e, f._u);
    let p = new Aa(t,e,l);
    return i.Pu.set(t, p),
    i.Tu.has(e) ? i.Tu.get(e).push(t) : i.Tu.set(e, [t]),
    f.snapshot
}
async function Up(i, t, e) {
    let n = j(i)
      , r = n.Pu.get(t)
      , o = n.Tu.get(r.targetId);
    if (o.length > 1)
        return n.Tu.set(r.targetId, o.filter(l => !Gr(l, t))),
        void n.Pu.delete(t);
    n.isPrimaryClient ? (n.sharedClientState.removeLocalQueryTarget(r.targetId),
    n.sharedClientState.isActiveQueryTarget(r.targetId) || await aa(n.localStore, r.targetId, !1).then( () => {
        n.sharedClientState.clearQueryState(r.targetId),
        e && Ua(n.remoteStore, r.targetId),
        Da(n, r.targetId)
    }
    ).catch(zr)) : (Da(n, r.targetId),
    await aa(n.localStore, r.targetId, !0))
}
async function $p(i, t) {
    let e = j(i)
      , n = e.Pu.get(t)
      , r = e.Tu.get(n.targetId);
    e.isPrimaryClient && r.length === 1 && (e.sharedClientState.removeLocalQueryTarget(n.targetId),
    Ua(e.remoteStore, n.targetId))
}
async function Uh(i, t) {
    let e = j(i);
    try {
        let n = await Ap(e.localStore, t);
        t.targetChanges.forEach( (r, o) => {
            let l = e.Eu.get(o);
            l && (Y(r.addedDocuments.size + r.modifiedDocuments.size + r.removedDocuments.size <= 1, 22616),
            r.addedDocuments.size > 0 ? l.lu = !0 : r.modifiedDocuments.size > 0 ? Y(l.lu, 14607) : r.removedDocuments.size > 0 && (Y(l.lu, 42227),
            l.lu = !1))
        }
        ),
        await Gh(e, n, t)
    } catch (n) {
        await zr(n)
    }
}
function ku(i, t, e) {
    let n = j(i);
    if (n.isPrimaryClient && e === 0 || !n.isPrimaryClient && e === 1) {
        let r = [];
        n.Pu.forEach( (o, l) => {
            let u = l.view.va(t);
            u.snapshot && r.push(u.snapshot)
        }
        ),
        (function(l, u) {
            let d = j(l);
            d.onlineState = u;
            let f = !1;
            d.queries.forEach( (p, E) => {
                for (let S of E.wa)
                    S.va(u) && (f = !0)
            }
            ),
            f && Wa(d)
        }
        )(n.eventManager, t),
        r.length && n.hu.J_(r),
        n.onlineState = t,
        n.isPrimaryClient && n.sharedClientState.setOnlineState(t)
    }
}
async function Gp(i, t, e) {
    let n = j(i);
    n.sharedClientState.updateQueryState(t, "rejected", e);
    let r = n.Eu.get(t)
      , o = r && r.key;
    if (o) {
        let l = new it(F.comparator);
        l = l.insert(o, Ft.newNoDocument(o, L.min()));
        let u = z().add(o)
          , d = new Tr(L.min(),new Map,new it(B),l,u);
        await Uh(n, d),
        n.du = n.du.remove(o),
        n.Eu.delete(t),
        Qa(n)
    } else
        await aa(n.localStore, t, !1).then( () => Da(n, t, e)).catch(zr)
}
function Da(i, t, e=null) {
    i.sharedClientState.removeLocalQueryTarget(t);
    for (let n of i.Tu.get(t))
        i.Pu.delete(n),
        e && i.hu.pu(n, e);
    i.Tu.delete(t),
    i.isPrimaryClient && i.Au.zr(t).forEach(n => {
        i.Au.containsKey(n) || $h(i, n)
    }
    )
}
function $h(i, t) {
    i.Iu.delete(t.path.canonicalString());
    let e = i.du.get(t);
    e !== null && (Ua(i.remoteStore, e),
    i.du = i.du.remove(t),
    i.Eu.delete(e),
    Qa(i))
}
function Vu(i, t, e) {
    for (let n of e)
        n instanceof Or ? (i.Au.addReference(n.key, t),
        Kp(i, n)) : n instanceof Nr ? (k(Ha, "Document no longer in limbo: " + n.key),
        i.Au.removeReference(n.key, t),
        i.Au.containsKey(n.key) || $h(i, n.key)) : M(19791, {
            yu: n
        })
}
function Kp(i, t) {
    let e = t.key
      , n = e.path.canonicalString();
    i.du.get(e) || i.Iu.has(n) || (k(Ha, "New document in limbo: " + e),
    i.Iu.add(n),
    Qa(i))
}
function Qa(i) {
    for (; i.Iu.size > 0 && i.du.size < i.maxConcurrentLimboResolutions; ) {
        let t = i.Iu.values().next().value;
        i.Iu.delete(t);
        let e = new F(nt.fromString(t))
          , n = i.mu.next();
        i.Eu.set(n, new Ca(e)),
        i.du = i.du.insert(e, n),
        Lh(i.remoteStore, new hi(Bt(ja(e.path)),n,"TargetPurposeLimboResolution",Fa.ue))
    }
}
async function Gh(i, t, e) {
    let n = j(i)
      , r = []
      , o = []
      , l = [];
    n.Pu.isEmpty() || (n.Pu.forEach( (u, d) => {
        l.push(n.gu(d, t, e).then(f => {
            var p;
            if ((f || e) && n.isPrimaryClient) {
                let E = f ? !f.fromCache : (p = e?.targetChanges.get(d.targetId)) === null || p === void 0 ? void 0 : p.current;
                n.sharedClientState.updateQueryState(d.targetId, E ? "current" : "not-current")
            }
            if (f) {
                r.push(f);
                let E = ia.Es(d.targetId, f);
                o.push(E)
            }
        }
        ))
    }
    ),
    await Promise.all(l),
    n.hu.J_(r),
    await (async function(d, f) {
        let p = j(d);
        try {
            await p.persistence.runTransaction("notifyLocalViewChanges", "readwrite", E => A.forEach(f, S => A.forEach(S.Is, C => p.persistence.referenceDelegate.addReference(E, S.targetId, C)).next( () => A.forEach(S.ds, C => p.persistence.referenceDelegate.removeReference(E, S.targetId, C)))))
        } catch (E) {
            if (!fn(E))
                throw E;
            k(za, "Failed to update sequence numbers: " + E)
        }
        for (let E of f) {
            let S = E.targetId;
            if (!E.fromCache) {
                let C = p.Fs.get(S)
                  , P = C.snapshotVersion
                  , O = C.withLastLimboFreeSnapshotVersion(P);
                p.Fs = p.Fs.insert(S, O)
            }
        }
    }
    )(n.localStore, o))
}
async function Wp(i, t) {
    let e = j(i);
    if (!e.currentUser.isEqual(t)) {
        k(Ha, "User change. New user:", t.toKey());
        let n = await Nh(e.localStore, t);
        e.currentUser = t,
        (function(o, l) {
            o.Vu.forEach(u => {
                u.forEach(d => {
                    d.reject(new N(D.CANCELLED,l))
                }
                )
            }
            ),
            o.Vu.clear()
        }
        )(e, "'waitForPendingWrites' promise is rejected due to a user change."),
        e.sharedClientState.handleUserChange(t, n.removedBatchIds, n.addedBatchIds),
        await Gh(e, n.Bs)
    }
}
function Hp(i, t) {
    let e = j(i)
      , n = e.Eu.get(t);
    if (n && n.lu)
        return z().add(n.key);
    {
        let r = z()
          , o = e.Tu.get(t);
        if (!o)
            return r;
        for (let l of o) {
            let u = e.Pu.get(l);
            r = r.unionWith(u.view.tu)
        }
        return r
    }
}
function Kh(i) {
    let t = j(i);
    return t.remoteStore.remoteSyncer.applyRemoteEvent = Uh.bind(null, t),
    t.remoteStore.remoteSyncer.getRemoteKeysForTarget = Hp.bind(null, t),
    t.remoteStore.remoteSyncer.rejectListen = Gp.bind(null, t),
    t.hu.J_ = Lp.bind(null, t.eventManager),
    t.hu.pu = Bp.bind(null, t.eventManager),
    t
}
var Wh = ( () => {
    class i {
        constructor() {
            this.kind = "memory",
            this.synchronizeTabs = !1
        }
        async initialize(e) {
            this.serializer = Mh(e.databaseInfo.databaseId),
            this.sharedClientState = this.bu(e),
            this.persistence = this.Du(e),
            await this.persistence.start(),
            this.localStore = this.vu(e),
            this.gcScheduler = this.Cu(e, this.localStore),
            this.indexBackfillerScheduler = this.Fu(e, this.localStore)
        }
        Cu(e, n) {
            return null
        }
        Fu(e, n) {
            return null
        }
        vu(e) {
            return Sp(this.persistence, new sa, e.initialUser, this.serializer)
        }
        Du(e) {
            return new Cr(na.Vi,this.serializer)
        }
        bu(e) {
            return new la
        }
        async terminate() {
            var e, n;
            (e = this.gcScheduler) === null || e === void 0 || e.stop(),
            (n = this.indexBackfillerScheduler) === null || n === void 0 || n.stop(),
            this.sharedClientState.shutdown(),
            await this.persistence.shutdown()
        }
    }
    return i.provider = {
        build: () => new i
    },
    i
}
)()
  , Pa = class extends Wh {
    constructor(t) {
        super(),
        this.cacheSizeBytes = t
    }
    Cu(t, e) {
        Y(this.persistence.referenceDelegate instanceof Rr, 46915);
        let n = this.persistence.referenceDelegate.garbageCollector;
        return new Uo(n,t.asyncQueue,e)
    }
    Du(t) {
        let e = this.cacheSizeBytes !== void 0 ? Rt.withCacheSize(this.cacheSizeBytes) : Rt.DEFAULT;
        return new Cr(n => Rr.Vi(n, e),this.serializer)
    }
}
;
var Qp = ( () => {
    class i {
        async initialize(e, n) {
            this.localStore || (this.localStore = e.localStore,
            this.sharedClientState = e.sharedClientState,
            this.datastore = this.createDatastore(n),
            this.remoteStore = this.createRemoteStore(n),
            this.eventManager = this.createEventManager(n),
            this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs),
            this.sharedClientState.onlineStateHandler = r => ku(this.syncEngine, r, 1),
            this.remoteStore.remoteSyncer.handleCredentialChange = Wp.bind(null, this.syncEngine),
            await Np(this.remoteStore, this.syncEngine.isPrimaryClient))
        }
        createEventManager(e) {
            return (function() {
                return new Ta
            }
            )()
        }
        createDatastore(e) {
            let n = Mh(e.databaseInfo.databaseId)
              , r = (function(l) {
                return new fa(l)
            }
            )(e.databaseInfo);
            return (function(l, u, d, f) {
                return new _a(l,u,d,f)
            }
            )(e.authCredentials, e.appCheckCredentials, r, n)
        }
        createRemoteStore(e) {
            return (function(r, o, l, u, d) {
                return new va(r,o,l,u,d)
            }
            )(this.localStore, this.datastore, e.asyncQueue, n => ku(this.syncEngine, n, 0), (function() {
                return Pr.C() ? new Pr : new ca
            }
            )())
        }
        createSyncEngine(e, n) {
            return (function(o, l, u, d, f, p, E) {
                let S = new Ra(o,l,u,d,f,p);
                return E && (S.fu = !0),
                S
            }
            )(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, n)
        }
        async terminate() {
            var e, n;
            await (async function(o) {
                let l = j(o);
                k(un, "RemoteStore shutting down."),
                l.Ia.add(5),
                await vi(l),
                l.Ea.shutdown(),
                l.Aa.set("Unknown")
            }
            )(this.remoteStore),
            (e = this.datastore) === null || e === void 0 || e.terminate(),
            (n = this.eventManager) === null || n === void 0 || n.terminate()
        }
    }
    return i.provider = {
        build: () => new i
    },
    i
}
)();
var xa = class {
    constructor(t) {
        this.observer = t,
        this.muted = !1
    }
    next(t) {
        this.muted || this.observer.next && this.xu(this.observer.next, t)
    }
    error(t) {
        this.muted || (this.observer.error ? this.xu(this.observer.error, t) : Yt("Uncaught Error in snapshot listener:", t.toString()))
    }
    Ou() {
        this.muted = !0
    }
    xu(t, e) {
        setTimeout( () => {
            this.muted || t(e)
        }
        , 0)
    }
}
;
var ue = "FirestoreClient"
  , ka = class {
    constructor(t, e, n, r, o) {
        this.authCredentials = t,
        this.appCheckCredentials = e,
        this.asyncQueue = n,
        this.databaseInfo = r,
        this.user = ct.UNAUTHENTICATED,
        this.clientId = ei.newId(),
        this.authCredentialListener = () => Promise.resolve(),
        this.appCheckCredentialListener = () => Promise.resolve(),
        this._uninitializedComponentsProvider = o,
        this.authCredentials.start(n, async l => {
            k(ue, "Received user=", l.uid),
            await this.authCredentialListener(l),
            this.user = l
        }
        ),
        this.appCheckCredentials.start(n, l => (k(ue, "Received new app check token=", l),
        this.appCheckCredentialListener(l, this.user)))
    }
    get configuration() {
        return {
            asyncQueue: this.asyncQueue,
            databaseInfo: this.databaseInfo,
            clientId: this.clientId,
            authCredentials: this.authCredentials,
            appCheckCredentials: this.appCheckCredentials,
            initialUser: this.user,
            maxConcurrentLimboResolutions: 100
        }
    }
    setCredentialChangeListener(t) {
        this.authCredentialListener = t
    }
    setAppCheckTokenChangeListener(t) {
        this.appCheckCredentialListener = t
    }
    terminate() {
        this.asyncQueue.enterRestrictedMode();
        let t = new oe;
        return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
            try {
                this._onlineComponents && await this._onlineComponents.terminate(),
                this._offlineComponents && await this._offlineComponents.terminate(),
                this.authCredentials.shutdown(),
                this.appCheckCredentials.shutdown(),
                t.resolve()
            } catch (e) {
                let n = jh(e, "Failed to shutdown persistence");
                t.reject(n)
            }
        }
        ),
        t.promise
    }
}
;
async function so(i, t) {
    i.asyncQueue.verifyOperationInProgress(),
    k(ue, "Initializing OfflineComponentProvider");
    let e = i.configuration;
    await t.initialize(e);
    let n = e.initialUser;
    i.setCredentialChangeListener(async r => {
        n.isEqual(r) || (await Nh(t.localStore, r),
        n = r)
    }
    ),
    t.persistence.setDatabaseDeletedListener( () => {
        ae("Terminating Firestore due to IndexedDb database deletion"),
        i.terminate().then( () => {
            k("Terminating Firestore due to IndexedDb database deletion completed successfully")
        }
        ).catch(r => {
            ae("Terminating Firestore due to IndexedDb database deletion failed", r)
        }
        )
    }
    ),
    i._offlineComponents = t
}
async function Ou(i, t) {
    i.asyncQueue.verifyOperationInProgress();
    let e = await Xp(i);
    k(ue, "Initializing OnlineComponentProvider"),
    await t.initialize(e, i.configuration),
    i.setCredentialChangeListener(n => Du(t.remoteStore, n)),
    i.setAppCheckTokenChangeListener( (n, r) => Du(t.remoteStore, r)),
    i._onlineComponents = t
}
async function Xp(i) {
    if (!i._offlineComponents)
        if (i._uninitializedComponentsProvider) {
            k(ue, "Using user provided OfflineComponentProvider");
            try {
                await so(i, i._uninitializedComponentsProvider._offline)
            } catch (t) {
                let e = t;
                if (!(function(r) {
                    return r.name === "FirebaseError" ? r.code === D.FAILED_PRECONDITION || r.code === D.UNIMPLEMENTED : !(typeof DOMException < "u" && r instanceof DOMException) || r.code === 22 || r.code === 20 || r.code === 11
                }
                )(e))
                    throw e;
                ae("Error using user provided cache. Falling back to memory cache: " + e),
                await so(i, new Wh)
            }
        } else
            k(ue, "Using default OfflineComponentProvider"),
            await so(i, new Pa(void 0));
    return i._offlineComponents
}
async function Yp(i) {
    return i._onlineComponents || (i._uninitializedComponentsProvider ? (k(ue, "Using user provided OnlineComponentProvider"),
    await Ou(i, i._uninitializedComponentsProvider._online)) : (k(ue, "Using default OnlineComponentProvider"),
    await Ou(i, new Qp))),
    i._onlineComponents
}
async function Nu(i) {
    let t = await Yp(i)
      , e = t.eventManager;
    return e.onListen = qp.bind(null, t.syncEngine),
    e.onUnlisten = Up.bind(null, t.syncEngine),
    e.onFirstRemoteStoreListen = jp.bind(null, t.syncEngine),
    e.onLastRemoteStoreUnlisten = $p.bind(null, t.syncEngine),
    e
}
function Hh(i) {
    let t = {};
    return i.timeoutSeconds !== void 0 && (t.timeoutSeconds = i.timeoutSeconds),
    t
}
var Fu = new Map;
var Qh = "firestore.googleapis.com"
  , Mu = !0
  , Fr = class {
    constructor(t) {
        var e, n;
        if (t.host === void 0) {
            if (t.ssl !== void 0)
                throw new N(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");
            this.host = Qh,
            this.ssl = Mu
        } else
            this.host = t.host,
            this.ssl = (e = t.ssl) !== null && e !== void 0 ? e : Mu;
        if (this.isUsingEmulator = t.emulatorOptions !== void 0,
        this.credentials = t.credentials,
        this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties,
        this.localCache = t.localCache,
        t.cacheSizeBytes === void 0)
            this.cacheSizeBytes = Oh;
        else {
            if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < Tp)
                throw new N(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes
        }
        _f("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling),
        this.experimentalForceLongPolling = !!t.experimentalForceLongPolling,
        this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = !1 : t.experimentalAutoDetectLongPolling === void 0 ? this.experimentalAutoDetectLongPolling = !0 : this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling,
        this.experimentalLongPollingOptions = Hh((n = t.experimentalLongPollingOptions) !== null && n !== void 0 ? n : {}),
        (function(o) {
            if (o.timeoutSeconds !== void 0) {
                if (isNaN(o.timeoutSeconds))
                    throw new N(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);
                if (o.timeoutSeconds < 5)
                    throw new N(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);
                if (o.timeoutSeconds > 30)
                    throw new N(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)
            }
        }
        )(this.experimentalLongPollingOptions),
        this.useFetchStreams = !!t.useFetchStreams
    }
    isEqual(t) {
        return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && (function(n, r) {
            return n.timeoutSeconds === r.timeoutSeconds
        }
        )(this.experimentalLongPollingOptions, t.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties && this.useFetchStreams === t.useFetchStreams
    }
}
  , pi = class {
    constructor(t, e, n, r) {
        this._authCredentials = t,
        this._appCheckCredentials = e,
        this._databaseId = n,
        this._app = r,
        this.type = "firestore-lite",
        this._persistenceKey = "(lite)",
        this._settings = new Fr({}),
        this._settingsFrozen = !1,
        this._emulatorOptions = {},
        this._terminateTask = "notTerminated"
    }
    get app() {
        if (!this._app)
            throw new N(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");
        return this._app
    }
    get _initialized() {
        return this._settingsFrozen
    }
    get _terminated() {
        return this._terminateTask !== "notTerminated"
    }
    _setSettings(t) {
        if (this._settingsFrozen)
            throw new N(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this._settings = new Fr(t),
        this._emulatorOptions = t.emulatorOptions || {},
        t.credentials !== void 0 && (this._authCredentials = (function(n) {
            if (!n)
                return new oo;
            switch (n.type) {
            case "firstParty":
                return new uo(n.sessionIndex || "0",n.iamToken || null,n.authTokenFactory || null);
            case "provider":
                return n.client;
            default:
                throw new N(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")
            }
        }
        )(t.credentials))
    }
    _getSettings() {
        return this._settings
    }
    _getEmulatorOptions() {
        return this._emulatorOptions
    }
    _freezeSettings() {
        return this._settingsFrozen = !0,
        this._settings
    }
    _delete() {
        return this._terminateTask === "notTerminated" && (this._terminateTask = this._terminate()),
        this._terminateTask
    }
    async _restart() {
        this._terminateTask === "notTerminated" ? await this._terminate() : this._terminateTask = "notTerminated"
    }
    toJSON() {
        return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings
        }
    }
    _terminate() {
        return (function(e) {
            let n = Fu.get(e);
            n && (k("ComponentProvider", "Removing Datastore"),
            Fu.delete(e),
            n.terminate())
        }
        )(this),
        Promise.resolve()
    }
}
;
function Xa(i, t, e, n={}) {
    var r;
    i = ur(i, pi);
    let o = js(t)
      , l = i._getSettings()
      , u = Object.assign(Object.assign({}, l), {
        emulatorOptions: i._getEmulatorOptions()
    })
      , d = `${t}:${e}`;
    o && (Ec(`https://${d}`),
    Ic("Firestore", !0)),
    l.host !== Qh && l.host !== d && ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");
    let f = Object.assign(Object.assign({}, l), {
        host: d,
        ssl: o,
        emulatorOptions: n
    });
    if (!Cc(f, u) && (i._setSettings(f),
    n.mockUserToken)) {
        let p, E;
        if (typeof n.mockUserToken == "string")
            p = n.mockUserToken,
            E = ct.MOCK_USER;
        else {
            p = Tc(n.mockUserToken, (r = i._app) === null || r === void 0 ? void 0 : r.options.projectId);
            let S = n.mockUserToken.sub || n.mockUserToken.user_id;
            if (!S)
                throw new N(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");
            E = new ct(S)
        }
        i._authCredentials = new ao(new fr(p,E))
    }
}
var Mr = class i {
    constructor(t, e, n) {
        this.converter = e,
        this._query = n,
        this.type = "query",
        this.firestore = t
    }
    withConverter(t) {
        return new i(this.firestore,t,this._query)
    }
}
  , Dt = class i {
    constructor(t, e, n) {
        this.converter = e,
        this._key = n,
        this.type = "document",
        this.firestore = t
    }
    get _path() {
        return this._key.path
    }
    get id() {
        return this._key.path.lastSegment()
    }
    get path() {
        return this._key.path.canonicalString()
    }
    get parent() {
        return new mi(this.firestore,this.converter,this._key.path.popLast())
    }
    withConverter(t) {
        return new i(this.firestore,t,this._key)
    }
    toJSON() {
        return {
            type: i._jsonSchemaVersion,
            referencePath: this._key.toString()
        }
    }
    static fromJSON(t, e, n) {
        if (_i(e, i._jsonSchema))
            return new i(t,n || null,new F(nt.fromString(e.referencePath)))
    }
}
;
Dt._jsonSchemaVersion = "firestore/documentReference/1.0",
Dt._jsonSchema = {
    type: at("string", Dt._jsonSchemaVersion),
    referencePath: at("string")
};
var mi = class i extends Mr {
    constructor(t, e, n) {
        super(t, e, ja(n)),
        this._path = n,
        this.type = "collection"
    }
    get id() {
        return this._query.path.lastSegment()
    }
    get path() {
        return this._query.path.canonicalString()
    }
    get parent() {
        let t = this._path.popLast();
        return t.isEmpty() ? null : new Dt(this.firestore,null,new F(t))
    }
    withConverter(t) {
        return new i(this.firestore,t,this._path)
    }
}
;
function Xh(i, t, ...e) {
    if (i = zs(i),
    arguments.length === 1 && (t = ei.newId()),
    gf("doc", "path", t),
    i instanceof pi) {
        let n = nt.fromString(t, ...e);
        return tu(n),
        new Dt(i,null,new F(n))
    }
    {
        if (!(i instanceof Dt || i instanceof mi))
            throw new N(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
        let n = i._path.child(nt.fromString(t, ...e));
        return tu(n),
        new Dt(i.firestore,i instanceof mi ? i.converter : null,new F(n))
    }
}
var Lu = "AsyncQueue"
  , Lr = class {
    constructor(t=Promise.resolve()) {
        this.Zu = [],
        this.Xu = !1,
        this.ec = [],
        this.tc = null,
        this.nc = !1,
        this.rc = !1,
        this.sc = [],
        this.F_ = new xr(this,"async_queue_retry"),
        this.oc = () => {
            let n = ro();
            n && k(Lu, "Visibility state changed to " + n.visibilityState),
            this.F_.y_()
        }
        ,
        this._c = t;
        let e = ro();
        e && typeof e.addEventListener == "function" && e.addEventListener("visibilitychange", this.oc)
    }
    get isShuttingDown() {
        return this.Xu
    }
    enqueueAndForget(t) {
        this.enqueue(t)
    }
    enqueueAndForgetEvenWhileRestricted(t) {
        this.ac(),
        this.uc(t)
    }
    enterRestrictedMode(t) {
        if (!this.Xu) {
            this.Xu = !0,
            this.rc = t || !1;
            let e = ro();
            e && typeof e.removeEventListener == "function" && e.removeEventListener("visibilitychange", this.oc)
        }
    }
    enqueue(t) {
        if (this.ac(),
        this.Xu)
            return new Promise( () => {}
            );
        let e = new oe;
        return this.uc( () => this.Xu && this.rc ? Promise.resolve() : (t().then(e.resolve, e.reject),
        e.promise)).then( () => e.promise)
    }
    enqueueRetryable(t) {
        this.enqueueAndForget( () => (this.Zu.push(t),
        this.cc()))
    }
    async cc() {
        if (this.Zu.length !== 0) {
            try {
                await this.Zu[0](),
                this.Zu.shift(),
                this.F_.reset()
            } catch (t) {
                if (!fn(t))
                    throw t;
                k(Lu, "Operation failed with retryable error: " + t)
            }
            this.Zu.length > 0 && this.F_.g_( () => this.cc())
        }
    }
    uc(t) {
        let e = this._c.then( () => (this.nc = !0,
        t().catch(n => {
            throw this.tc = n,
            this.nc = !1,
            Yt("INTERNAL UNHANDLED ERROR: ", Bu(n)),
            n
        }
        ).then(n => (this.nc = !1,
        n))));
        return this._c = e,
        e
    }
    enqueueAfterDelay(t, e, n) {
        this.ac(),
        this.sc.indexOf(t) > -1 && (e = 0);
        let r = wa.createAndSchedule(this, t, e, n, o => this.lc(o));
        return this.ec.push(r),
        r
    }
    ac() {
        this.tc && M(47125, {
            hc: Bu(this.tc)
        })
    }
    verifyOperationInProgress() {}
    async Pc() {
        let t;
        do
            t = this._c,
            await t;
        while (t !== this._c)
    }
    Tc(t) {
        for (let e of this.ec)
            if (e.timerId === t)
                return !0;
        return !1
    }
    Ic(t) {
        return this.Pc().then( () => {
            this.ec.sort( (e, n) => e.targetTimeMs - n.targetTimeMs);
            for (let e of this.ec)
                if (e.skipDelay(),
                t !== "all" && e.timerId === t)
                    break;
            return this.Pc()
        }
        )
    }
    dc(t) {
        this.sc.push(t)
    }
    lc(t) {
        let e = this.ec.indexOf(t);
        this.ec.splice(e, 1)
    }
}
;
function Bu(i) {
    let t = i.message || "";
    return i.stack && (t = i.stack.includes(i.message) ? i.stack : i.message + `
` + i.stack),
    t
}
function qu(i) {
    return (function(e, n) {
        if (typeof e != "object" || e === null)
            return !1;
        let r = e;
        for (let o of n)
            if (o in r && typeof r[o] == "function")
                return !0;
        return !1
    }
    )(i, ["next", "error", "complete"])
}
var gi = class extends pi {
    constructor(t, e, n, r) {
        super(t, e, n, r),
        this.type = "firestore",
        this._queue = new Lr,
        this._persistenceKey = r?.name || "[DEFAULT]"
    }
    async _terminate() {
        if (this._firestoreClient) {
            let t = this._firestoreClient.terminate();
            this._queue = new Lr(t),
            this._firestoreClient = void 0,
            await t
        }
    }
}
;
function Yh(i, t) {
    let e = typeof i == "object" ? i : Oc()
      , n = typeof i == "string" ? i : t || vr
      , r = xc(e, "firestore").getImmediate({
        identifier: n
    });
    if (!r._initialized) {
        let o = wc("firestore");
        o && Xa(r, ...o)
    }
    return r
}
function Jp(i) {
    if (i._terminated)
        throw new N(D.FAILED_PRECONDITION,"The client has already been terminated.");
    return i._firestoreClient || Zp(i),
    i._firestoreClient
}
function Zp(i) {
    var t, e, n;
    let r = i._freezeSettings()
      , o = (function(u, d, f, p) {
        return new go(u,d,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Hh(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)
    }
    )(i._databaseId, ((t = i._app) === null || t === void 0 ? void 0 : t.options.appId) || "", i._persistenceKey, r);
    i._componentsProvider || !((e = r.localCache) === null || e === void 0) && e._offlineComponentProvider && (!((n = r.localCache) === null || n === void 0) && n._onlineComponentProvider) && (i._componentsProvider = {
        _offline: r.localCache._offlineComponentProvider,
        _online: r.localCache._onlineComponentProvider
    }),
    i._firestoreClient = new ka(i._authCredentials,i._appCheckCredentials,i._queue,o,i._componentsProvider && (function(u) {
        let d = u?._online.build();
        return {
            _offline: u?._offline.build(d),
            _online: d
        }
    }
    )(i._componentsProvider))
}
var He = class i {
    constructor(t) {
        this._byteString = t
    }
    static fromBase64String(t) {
        try {
            return new i(_t.fromBase64String(t))
        } catch (e) {
            throw new N(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: " + e)
        }
    }
    static fromUint8Array(t) {
        return new i(_t.fromUint8Array(t))
    }
    toBase64() {
        return this._byteString.toBase64()
    }
    toUint8Array() {
        return this._byteString.toUint8Array()
    }
    toString() {
        return "Bytes(base64: " + this.toBase64() + ")"
    }
    isEqual(t) {
        return this._byteString.isEqual(t._byteString)
    }
    toJSON() {
        return {
            type: i._jsonSchemaVersion,
            bytes: this.toBase64()
        }
    }
    static fromJSON(t) {
        if (_i(t, i._jsonSchema))
            return i.fromBase64String(t.bytes)
    }
}
;
He._jsonSchemaVersion = "firestore/bytes/1.0",
He._jsonSchema = {
    type: at("string", He._jsonSchemaVersion),
    bytes: at("string")
};
var Br = class {
    constructor(...t) {
        for (let e = 0; e < t.length; ++e)
            if (t[e].length === 0)
                throw new N(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");
        this._internalPath = new Nt(t)
    }
    isEqual(t) {
        return this._internalPath.isEqual(t._internalPath)
    }
}
;
var Qe = class i {
    constructor(t, e) {
        if (!isFinite(t) || t < -90 || t > 90)
            throw new N(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180)
            throw new N(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: " + e);
        this._lat = t,
        this._long = e
    }
    get latitude() {
        return this._lat
    }
    get longitude() {
        return this._long
    }
    isEqual(t) {
        return this._lat === t._lat && this._long === t._long
    }
    _compareTo(t) {
        return B(this._lat, t._lat) || B(this._long, t._long)
    }
    toJSON() {
        return {
            latitude: this._lat,
            longitude: this._long,
            type: i._jsonSchemaVersion
        }
    }
    static fromJSON(t) {
        if (_i(t, i._jsonSchema))
            return new i(t.latitude,t.longitude)
    }
}
;
Qe._jsonSchemaVersion = "firestore/geoPoint/1.0",
Qe._jsonSchema = {
    type: at("string", Qe._jsonSchemaVersion),
    latitude: at("number"),
    longitude: at("number")
};
var Xe = class i {
    constructor(t) {
        this._values = (t || []).map(e => e)
    }
    toArray() {
        return this._values.map(t => t)
    }
    isEqual(t) {
        return (function(n, r) {
            if (n.length !== r.length)
                return !1;
            for (let o = 0; o < n.length; ++o)
                if (n[o] !== r[o])
                    return !1;
            return !0
        }
        )(this._values, t._values)
    }
    toJSON() {
        return {
            type: i._jsonSchemaVersion,
            vectorValues: this._values
        }
    }
    static fromJSON(t) {
        if (_i(t, i._jsonSchema)) {
            if (Array.isArray(t.vectorValues) && t.vectorValues.every(e => typeof e == "number"))
                return new i(t.vectorValues);
            throw new N(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")
        }
    }
}
;
Xe._jsonSchemaVersion = "firestore/vectorValue/1.0",
Xe._jsonSchema = {
    type: at("string", Xe._jsonSchemaVersion),
    vectorValues: at("object")
};
var tm = new RegExp("[~\\*/\\[\\]]");
function em(i, t, e) {
    if (t.search(tm) >= 0)
        throw ju(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`, i, !1, void 0, e);
    try {
        return new Br(...t.split("."))._internalPath
    } catch {
        throw ju(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`, i, !1, void 0, e)
    }
}
function ju(i, t, e, n, r) {
    let o = n && !n.isEmpty()
      , l = r !== void 0
      , u = `Function ${t}() called with invalid data`;
    e && (u += " (via `toFirestore()`)"),
    u += ". ";
    let d = "";
    return (o || l) && (d += " (found",
    o && (d += ` in field ${n}`),
    l && (d += ` in document ${r}`),
    d += ")"),
    new N(D.INVALID_ARGUMENT,u + i + d)
}
var qr = class {
    constructor(t, e, n, r, o) {
        this._firestore = t,
        this._userDataWriter = e,
        this._key = n,
        this._document = r,
        this._converter = o
    }
    get id() {
        return this._key.path.lastSegment()
    }
    get ref() {
        return new Dt(this._firestore,this._converter,this._key)
    }
    exists() {
        return this._document !== null
    }
    data() {
        if (this._document) {
            if (this._converter) {
                let t = new Va(this._firestore,this._userDataWriter,this._key,this._document,null);
                return this._converter.fromFirestore(t)
            }
            return this._userDataWriter.convertValue(this._document.data.value)
        }
    }
    get(t) {
        if (this._document) {
            let e = this._document.data.field(Jh("DocumentSnapshot.get", t));
            if (e !== null)
                return this._userDataWriter.convertValue(e)
        }
    }
}
  , Va = class extends qr {
    data() {
        return super.data()
    }
}
;
function Jh(i, t) {
    return typeof t == "string" ? em(i, t) : t instanceof Br ? t._internalPath : t._delegate._internalPath
}
function nm(i) {
    if (i.limitType === "L" && i.explicitOrderBy.length === 0)
        throw new N(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")
}
var Oa = class {
    convertValue(t, e="none") {
        switch (le(t)) {
        case 0:
            return null;
        case 1:
            return t.booleanValue;
        case 2:
            return X(t.integerValue || t.doubleValue);
        case 3:
            return this.convertTimestamp(t.timestampValue);
        case 4:
            return this.convertServerTimestamp(t, e);
        case 5:
            return t.stringValue;
        case 6:
            return this.convertBytes(Zt(t.bytesValue));
        case 7:
            return this.convertReference(t.referenceValue);
        case 8:
            return this.convertGeoPoint(t.geoPointValue);
        case 9:
            return this.convertArray(t.arrayValue, e);
        case 11:
            return this.convertObject(t.mapValue, e);
        case 10:
            return this.convertVectorValue(t.mapValue);
        default:
            throw M(62114, {
                value: t
            })
        }
    }
    convertObject(t, e) {
        return this.convertObjectMap(t.fields, e)
    }
    convertObjectMap(t, e="none") {
        let n = {};
        return yi(t, (r, o) => {
            n[r] = this.convertValue(o, e)
        }
        ),
        n
    }
    convertVectorValue(t) {
        var e, n, r;
        let o = (r = (n = (e = t.fields) === null || e === void 0 ? void 0 : e[ri].arrayValue) === null || n === void 0 ? void 0 : n.values) === null || r === void 0 ? void 0 : r.map(l => X(l.doubleValue));
        return new Xe(o)
    }
    convertGeoPoint(t) {
        return new Qe(X(t.latitude),X(t.longitude))
    }
    convertArray(t, e) {
        return (t.values || []).map(n => this.convertValue(n, e))
    }
    convertServerTimestamp(t, e) {
        switch (e) {
        case "previous":
            let n = $r(t);
            return n == null ? null : this.convertValue(n, e);
        case "estimate":
            return this.convertTimestamp(ii(t));
        default:
            return null
        }
    }
    convertTimestamp(t) {
        let e = Jt(t);
        return new Et(e.seconds,e.nanos)
    }
    convertDocumentKey(t, e) {
        let n = nt.fromString(t);
        Y(Vh(n), 9688, {
            name: t
        });
        let r = new wr(n.get(1),n.get(3))
          , o = new F(n.popFirst(5));
        return r.isEqual(e) || Yt(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),
        o
    }
}
;
var be = class {
    constructor(t, e) {
        this.hasPendingWrites = t,
        this.fromCache = e
    }
    isEqual(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache
    }
}
  , Se = class i extends qr {
    constructor(t, e, n, r, o, l) {
        super(t, e, n, r, l),
        this._firestore = t,
        this._firestoreImpl = t,
        this.metadata = o
    }
    exists() {
        return super.exists()
    }
    data(t={}) {
        if (this._document) {
            if (this._converter) {
                let e = new Ye(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);
                return this._converter.fromFirestore(e, t)
            }
            return this._userDataWriter.convertValue(this._document.data.value, t.serverTimestamps)
        }
    }
    get(t, e={}) {
        if (this._document) {
            let n = this._document.data.field(Jh("DocumentSnapshot.get", t));
            if (n !== null)
                return this._userDataWriter.convertValue(n, e.serverTimestamps)
        }
    }
    toJSON() {
        if (this.metadata.hasPendingWrites)
            throw new N(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");
        let t = this._document
          , e = {};
        return e.type = i._jsonSchemaVersion,
        e.bundle = "",
        e.bundleSource = "DocumentSnapshot",
        e.bundleName = this._key.toString(),
        !t || !t.isValidDocument() || !t.isFoundDocument() ? e : (this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields, "previous"),
        e.bundle = (this._firestore,
        this.ref.path,
        "NOT SUPPORTED"),
        e)
    }
}
;
Se._jsonSchemaVersion = "firestore/documentSnapshot/1.0",
Se._jsonSchema = {
    type: at("string", Se._jsonSchemaVersion),
    bundleSource: at("string", "DocumentSnapshot"),
    bundleName: at("string"),
    bundle: at("string")
};
var Ye = class extends Se {
    data(t={}) {
        return super.data(t)
    }
}
  , Je = class i {
    constructor(t, e, n, r) {
        this._firestore = t,
        this._userDataWriter = e,
        this._snapshot = r,
        this.metadata = new be(r.hasPendingWrites,r.fromCache),
        this.query = n
    }
    get docs() {
        let t = [];
        return this.forEach(e => t.push(e)),
        t
    }
    get size() {
        return this._snapshot.docs.size
    }
    get empty() {
        return this.size === 0
    }
    forEach(t, e) {
        this._snapshot.docs.forEach(n => {
            t.call(e, new Ye(this._firestore,this._userDataWriter,n.key,n,new be(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))
        }
        )
    }
    docChanges(t={}) {
        let e = !!t.includeMetadataChanges;
        if (e && this._snapshot.excludesMetadataChanges)
            throw new N(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = (function(r, o) {
            if (r._snapshot.oldDocs.isEmpty()) {
                let l = 0;
                return r._snapshot.docChanges.map(u => {
                    let d = new Ye(r._firestore,r._userDataWriter,u.doc.key,u.doc,new be(r._snapshot.mutatedKeys.has(u.doc.key),r._snapshot.fromCache),r.query.converter);
                    return u.doc,
                    {
                        type: "added",
                        doc: d,
                        oldIndex: -1,
                        newIndex: l++
                    }
                }
                )
            }
            {
                let l = r._snapshot.oldDocs;
                return r._snapshot.docChanges.filter(u => o || u.type !== 3).map(u => {
                    let d = new Ye(r._firestore,r._userDataWriter,u.doc.key,u.doc,new be(r._snapshot.mutatedKeys.has(u.doc.key),r._snapshot.fromCache),r.query.converter)
                      , f = -1
                      , p = -1;
                    return u.type !== 0 && (f = l.indexOf(u.doc.key),
                    l = l.delete(u.doc.key)),
                    u.type !== 1 && (l = l.add(u.doc),
                    p = l.indexOf(u.doc.key)),
                    {
                        type: im(u.type),
                        doc: d,
                        oldIndex: f,
                        newIndex: p
                    }
                }
                )
            }
        }
        )(this, e),
        this._cachedChangesIncludeMetadataChanges = e),
        this._cachedChanges
    }
    toJSON() {
        if (this.metadata.hasPendingWrites)
            throw new N(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");
        let t = {};
        t.type = i._jsonSchemaVersion,
        t.bundleSource = "QuerySnapshot",
        t.bundleName = ei.newId(),
        this._firestore._databaseId.database,
        this._firestore._databaseId.projectId;
        let e = []
          , n = []
          , r = [];
        return this.docs.forEach(o => {
            o._document !== null && (e.push(o._document),
            n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields, "previous")),
            r.push(o.ref.path))
        }
        ),
        t.bundle = (this._firestore,
        this.query._query,
        t.bundleName,
        "NOT SUPPORTED"),
        t
    }
}
;
function im(i) {
    switch (i) {
    case 0:
        return "added";
    case 2:
    case 3:
        return "modified";
    case 1:
        return "removed";
    default:
        return M(61501, {
            type: i
        })
    }
}
Je._jsonSchemaVersion = "firestore/querySnapshot/1.0",
Je._jsonSchema = {
    type: at("string", Je._jsonSchemaVersion),
    bundleSource: at("string", "QuerySnapshot"),
    bundleName: at("string"),
    bundle: at("string")
};
var jr = class extends Oa {
    constructor(t) {
        super(),
        this.firestore = t
    }
    convertBytes(t) {
        return new He(t)
    }
    convertReference(t) {
        let e = this.convertDocumentKey(t, this.firestore._databaseId);
        return new Dt(this.firestore,null,e)
    }
}
;
function Zh(i, ...t) {
    var e, n, r;
    i = zs(i);
    let o = {
        includeMetadataChanges: !1,
        source: "default"
    }
      , l = 0;
    typeof t[l] != "object" || qu(t[l]) || (o = t[l++]);
    let u = {
        includeMetadataChanges: o.includeMetadataChanges,
        source: o.source
    };
    if (qu(t[l])) {
        let E = t[l];
        t[l] = (e = E.next) === null || e === void 0 ? void 0 : e.bind(E),
        t[l + 1] = (n = E.error) === null || n === void 0 ? void 0 : n.bind(E),
        t[l + 2] = (r = E.complete) === null || r === void 0 ? void 0 : r.bind(E)
    }
    let d, f, p;
    if (i instanceof Dt)
        f = ur(i.firestore, gi),
        p = ja(i._key.path),
        d = {
            next: E => {
                t[l] && t[l](rm(f, i, E))
            }
            ,
            error: t[l + 1],
            complete: t[l + 2]
        };
    else {
        let E = ur(i, Mr);
        f = ur(E.firestore, gi),
        p = E._query;
        let S = new jr(f);
        d = {
            next: C => {
                t[l] && t[l](new Je(f,S,E,C))
            }
            ,
            error: t[l + 1],
            complete: t[l + 2]
        },
        nm(i._query)
    }
    return (function(S, C, P, O) {
        let V = new xa(O)
          , K = new ba(C,V,P);
        return S.asyncQueue.enqueueAndForget(async () => Fp(await Nu(S), K)),
        () => {
            V.Ou(),
            S.asyncQueue.enqueueAndForget(async () => Mp(await Nu(S), K))
        }
    }
    )(Jp(f), p, u, d)
}
function rm(i, t, e) {
    let n = e.docs.get(t._key)
      , r = new jr(i);
    return new Se(i,r,t._key,n,new be(e.hasPendingWrites,e.fromCache),t.converter)
}
(function(t, e=!0) {
    (function(r) {
        dn = r
    }
    )(Vc),
    Pc(new Rc("firestore", (n, {instanceIdentifier: r, options: o}) => {
        let l = n.getProvider("app").getImmediate()
          , u = new gi(new lo(n.getProvider("auth-internal")),new ho(l,n.getProvider("app-check-internal")),(function(f, p) {
            if (!Object.prototype.hasOwnProperty.apply(f.options, ["projectId"]))
                throw new N(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');
            return new wr(f.options.projectId,p)
        }
        )(l, r),l);
        return o = Object.assign({
            useFetchStreams: e
        }, o),
        u._setSettings(o),
        u
    }
    ,"PUBLIC").setMultipleInstances(!0)),
    Gn(Xc, Yc, t),
    Gn(Xc, Yc, "esm2017")
}
)();
var Ei = class {
    constructor(t) {
        return t
    }
}
  , td = "firestore"
  , Ya = class {
    constructor() {
        return Mc(td)
    }
}
;
var Ja = new St("angularfire2.firestore-instances");
function sm(i, t) {
    let e = Fc(td, i, t);
    return e && new Ei(e)
}
function om(i) {
    return (t, e) => {
        let n = t.runOutsideAngular( () => i(e));
        return new Ei(n)
    }
}
var am = {
    provide: Ya,
    deps: [[new Ne, Ja]]
}
  , lm = {
    provide: Ei,
    useFactory: sm,
    deps: [[new Ne, Ja], Bc]
};
function c_(i, ...t) {
    return Gn("angularfire", Nc.full, "fst"),
    dc([lm, am, {
        provide: Ja,
        useFactory: om(i),
        multi: !0,
        deps: [Tt, rt, Lc, qc, [new Ne, zc], [new Ne, jc], ...t]
    }])
}
var u_ = Kn(Xa, !0);
var h_ = Kn(Xh, !0, 2);
var d_ = Kn(Yh, !0);
var f_ = Kn(Zh, !0);
var Ti = class {
    _attachedHost;
    attach(t) {
        return this._attachedHost = t,
        t.attach(this)
    }
    detach() {
        let t = this._attachedHost;
        t != null && (this._attachedHost = null,
        t.detach())
    }
    get isAttached() {
        return this._attachedHost != null
    }
    setAttachedHost(t) {
        this._attachedHost = t
    }
}
  , mn = class extends Ti {
    component;
    viewContainerRef;
    injector;
    projectableNodes;
    constructor(t, e, n, r) {
        super(),
        this.component = t,
        this.viewContainerRef = e,
        this.injector = n,
        this.projectableNodes = r
    }
}
  , gn = class extends Ti {
    templateRef;
    viewContainerRef;
    context;
    injector;
    constructor(t, e, n, r) {
        super(),
        this.templateRef = t,
        this.viewContainerRef = e,
        this.context = n,
        this.injector = r
    }
    get origin() {
        return this.templateRef.elementRef
    }
    attach(t, e=this.context) {
        return this.context = e,
        super.attach(t)
    }
    detach() {
        return this.context = void 0,
        super.detach()
    }
}
  , Za = class extends Ti {
    element;
    constructor(t) {
        super(),
        this.element = t instanceof kt ? t.nativeElement : t
    }
}
  , _n = class {
    _attachedPortal;
    _disposeFn;
    _isDisposed = !1;
    hasAttached() {
        return !!this._attachedPortal
    }
    attach(t) {
        if (t instanceof mn)
            return this._attachedPortal = t,
            this.attachComponentPortal(t);
        if (t instanceof gn)
            return this._attachedPortal = t,
            this.attachTemplatePortal(t);
        if (this.attachDomPortal && t instanceof Za)
            return this._attachedPortal = t,
            this.attachDomPortal(t)
    }
    attachDomPortal = null;
    detach() {
        this._attachedPortal && (this._attachedPortal.setAttachedHost(null),
        this._attachedPortal = null),
        this._invokeDisposeFn()
    }
    dispose() {
        this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        this._isDisposed = !0
    }
    setDisposeFn(t) {
        this._disposeFn = t
    }
    _invokeDisposeFn() {
        this._disposeFn && (this._disposeFn(),
        this._disposeFn = null)
    }
}
  , Hr = class extends _n {
    outletElement;
    _appRef;
    _defaultInjector;
    constructor(t, e, n) {
        super(),
        this.outletElement = t,
        this._appRef = e,
        this._defaultInjector = n
    }
    attachComponentPortal(t) {
        let e;
        if (t.viewContainerRef) {
            let n = t.injector || t.viewContainerRef.injector
              , r = n.get(Os, null, {
                optional: !0
            }) || void 0;
            e = t.viewContainerRef.createComponent(t.component, {
                index: t.viewContainerRef.length,
                injector: n,
                ngModuleRef: r,
                projectableNodes: t.projectableNodes || void 0
            }),
            this.setDisposeFn( () => e.destroy())
        } else {
            let n = this._appRef
              , r = t.injector || this._defaultInjector || rt.NULL
              , o = r.get(Xi, n.injector);
            e = yc(t.component, {
                elementInjector: r,
                environmentInjector: o,
                projectableNodes: t.projectableNodes || void 0
            }),
            n.attachView(e.hostView),
            this.setDisposeFn( () => {
                n.viewCount > 0 && n.detachView(e.hostView),
                e.destroy()
            }
            )
        }
        return this.outletElement.appendChild(this._getComponentRootNode(e)),
        this._attachedPortal = t,
        e
    }
    attachTemplatePortal(t) {
        let e = t.viewContainerRef
          , n = e.createEmbeddedView(t.templateRef, t.context, {
            injector: t.injector
        });
        return n.rootNodes.forEach(r => this.outletElement.appendChild(r)),
        n.detectChanges(),
        this.setDisposeFn( () => {
            let r = e.indexOf(n);
            r !== -1 && e.remove(r)
        }
        ),
        this._attachedPortal = t,
        n
    }
    attachDomPortal = t => {
        let e = t.element;
        e.parentNode;
        let n = this.outletElement.ownerDocument.createComment("dom-portal");
        e.parentNode.insertBefore(n, e),
        this.outletElement.appendChild(e),
        this._attachedPortal = t,
        super.setDisposeFn( () => {
            n.parentNode && n.parentNode.replaceChild(e, n)
        }
        )
    }
    ;
    dispose() {
        super.dispose(),
        this.outletElement.remove()
    }
    _getComponentRootNode(t) {
        return t.hostView.rootNodes[0]
    }
}
;
var Ii = ( () => {
    class i extends _n {
        _moduleRef = x(Os, {
            optional: !0
        });
        _document = x(Ct);
        _viewContainerRef = x(Ji);
        _isInitialized = !1;
        _attachedRef;
        constructor() {
            super()
        }
        get portal() {
            return this._attachedPortal
        }
        set portal(e) {
            this.hasAttached() && !e && !this._isInitialized || (this.hasAttached() && super.detach(),
            e && super.attach(e),
            this._attachedPortal = e || null)
        }
        attached = new ge;
        get attachedRef() {
            return this._attachedRef
        }
        ngOnInit() {
            this._isInitialized = !0
        }
        ngOnDestroy() {
            super.dispose(),
            this._attachedRef = this._attachedPortal = null
        }
        attachComponentPortal(e) {
            e.setAttachedHost(this);
            let n = e.viewContainerRef != null ? e.viewContainerRef : this._viewContainerRef
              , r = n.createComponent(e.component, {
                index: n.length,
                injector: e.injector || n.injector,
                projectableNodes: e.projectableNodes || void 0,
                ngModuleRef: this._moduleRef || void 0
            });
            return n !== this._viewContainerRef && this._getRootNode().appendChild(r.hostView.rootNodes[0]),
            super.setDisposeFn( () => r.destroy()),
            this._attachedPortal = e,
            this._attachedRef = r,
            this.attached.emit(r),
            r
        }
        attachTemplatePortal(e) {
            e.setAttachedHost(this);
            let n = this._viewContainerRef.createEmbeddedView(e.templateRef, e.context, {
                injector: e.injector
            });
            return super.setDisposeFn( () => this._viewContainerRef.clear()),
            this._attachedPortal = e,
            this._attachedRef = n,
            this.attached.emit(n),
            n
        }
        attachDomPortal = e => {
            let n = e.element;
            n.parentNode;
            let r = this._document.createComment("dom-portal");
            e.setAttachedHost(this),
            n.parentNode.insertBefore(r, n),
            this._getRootNode().appendChild(n),
            this._attachedPortal = e,
            super.setDisposeFn( () => {
                r.parentNode && r.parentNode.replaceChild(n, r)
            }
            )
        }
        ;
        _getRootNode() {
            let e = this._viewContainerRef.element.nativeElement;
            return e.nodeType === e.ELEMENT_NODE ? e : e.parentNode
        }
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275dir = Ot({
            type: i,
            selectors: [["", "cdkPortalOutlet", ""]],
            inputs: {
                portal: [0, "cdkPortalOutlet", "portal"]
            },
            outputs: {
                attached: "attached"
            },
            exportAs: ["cdkPortalOutlet"],
            features: [Kt]
        })
    }
    return i
}
)();
var Re = ( () => {
    class i {
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275mod = Vt({
            type: i
        });
        static \u0275inj = xt({})
    }
    return i
}
)();
var hm = 20
  , Xr = ( () => {
    class i {
        _ngZone = x(Tt);
        _platform = x(Wt);
        _renderer = x(_e).createRenderer(null, null);
        _cleanupGlobalListener;
        constructor() {}
        _scrolled = new tt;
        _scrolledCount = 0;
        scrollContainers = new Map;
        register(e) {
            this.scrollContainers.has(e) || this.scrollContainers.set(e, e.elementScrolled().subscribe( () => this._scrolled.next(e)))
        }
        deregister(e) {
            let n = this.scrollContainers.get(e);
            n && (n.unsubscribe(),
            this.scrollContainers.delete(e))
        }
        scrolled(e=hm) {
            return this._platform.isBrowser ? new cc(n => {
                this._cleanupGlobalListener || (this._cleanupGlobalListener = this._ngZone.runOutsideAngular( () => this._renderer.listen("document", "scroll", () => this._scrolled.next())));
                let r = e > 0 ? this._scrolled.pipe(ks(e)).subscribe(n) : this._scrolled.subscribe(n);
                return this._scrolledCount++,
                () => {
                    r.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount || (this._cleanupGlobalListener?.(),
                    this._cleanupGlobalListener = void 0)
                }
            }
            ) : uc()
        }
        ngOnDestroy() {
            this._cleanupGlobalListener?.(),
            this._cleanupGlobalListener = void 0,
            this.scrollContainers.forEach( (e, n) => this.deregister(n)),
            this._scrolled.complete()
        }
        ancestorScrolled(e, n) {
            let r = this.getAncestorScrollContainers(e);
            return this.scrolled(n).pipe(Gt(o => !o || r.indexOf(o) > -1))
        }
        getAncestorScrollContainers(e) {
            let n = [];
            return this.scrollContainers.forEach( (r, o) => {
                this._scrollableContainsElement(o, e) && n.push(o)
            }
            ),
            n
        }
        _scrollableContainsElement(e, n) {
            let r = Uc(n)
              , o = e.getElementRef().nativeElement;
            do
                if (r == o)
                    return !0;
            while (r = r.parentElement);
            return !1
        }
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275prov = wt({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
    }
    return i
}
)()
  , nd = ( () => {
    class i {
        elementRef = x(kt);
        scrollDispatcher = x(Xr);
        ngZone = x(Tt);
        dir = x(we, {
            optional: !0
        });
        _scrollElement = this.elementRef.nativeElement;
        _destroyed = new tt;
        _renderer = x(Me);
        _cleanupScroll;
        _elementScrolled = new tt;
        constructor() {}
        ngOnInit() {
            this._cleanupScroll = this.ngZone.runOutsideAngular( () => this._renderer.listen(this._scrollElement, "scroll", e => this._elementScrolled.next(e))),
            this.scrollDispatcher.register(this)
        }
        ngOnDestroy() {
            this._cleanupScroll?.(),
            this._elementScrolled.complete(),
            this.scrollDispatcher.deregister(this),
            this._destroyed.next(),
            this._destroyed.complete()
        }
        elementScrolled() {
            return this._elementScrolled
        }
        getElementRef() {
            return this.elementRef
        }
        scrollTo(e) {
            let n = this.elementRef.nativeElement
              , r = this.dir && this.dir.value == "rtl";
            e.left == null && (e.left = r ? e.end : e.start),
            e.right == null && (e.right = r ? e.start : e.end),
            e.bottom != null && (e.top = n.scrollHeight - n.clientHeight - e.bottom),
            r && Be() != Le.NORMAL ? (e.left != null && (e.right = n.scrollWidth - n.clientWidth - e.left),
            Be() == Le.INVERTED ? e.left = e.right : Be() == Le.NEGATED && (e.left = e.right ? -e.right : e.right)) : e.right != null && (e.left = n.scrollWidth - n.clientWidth - e.right),
            this._applyScrollToOptions(e)
        }
        _applyScrollToOptions(e) {
            let n = this.elementRef.nativeElement;
            rr() ? n.scrollTo(e) : (e.top != null && (n.scrollTop = e.top),
            e.left != null && (n.scrollLeft = e.left))
        }
        measureScrollOffset(e) {
            let n = "left"
              , r = "right"
              , o = this.elementRef.nativeElement;
            if (e == "top")
                return o.scrollTop;
            if (e == "bottom")
                return o.scrollHeight - o.clientHeight - o.scrollTop;
            let l = this.dir && this.dir.value == "rtl";
            return e == "start" ? e = l ? r : n : e == "end" && (e = l ? n : r),
            l && Be() == Le.INVERTED ? e == n ? o.scrollWidth - o.clientWidth - o.scrollLeft : o.scrollLeft : l && Be() == Le.NEGATED ? e == n ? o.scrollLeft + o.scrollWidth - o.clientWidth : -o.scrollLeft : e == n ? o.scrollLeft : o.scrollWidth - o.clientWidth - o.scrollLeft
        }
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275dir = Ot({
            type: i,
            selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
        })
    }
    return i
}
)()
  , dm = 20
  , bi = ( () => {
    class i {
        _platform = x(Wt);
        _listeners;
        _viewportSize;
        _change = new tt;
        _document = x(Ct);
        constructor() {
            let e = x(Tt)
              , n = x(_e).createRenderer(null, null);
            e.runOutsideAngular( () => {
                if (this._platform.isBrowser) {
                    let r = o => this._change.next(o);
                    this._listeners = [n.listen("window", "resize", r), n.listen("window", "orientationchange", r)]
                }
                this.change().subscribe( () => this._viewportSize = null)
            }
            )
        }
        ngOnDestroy() {
            this._listeners?.forEach(e => e()),
            this._change.complete()
        }
        getViewportSize() {
            this._viewportSize || this._updateViewportSize();
            let e = {
                width: this._viewportSize.width,
                height: this._viewportSize.height
            };
            return this._platform.isBrowser || (this._viewportSize = null),
            e
        }
        getViewportRect() {
            let e = this.getViewportScrollPosition()
              , {width: n, height: r} = this.getViewportSize();
            return {
                top: e.top,
                left: e.left,
                bottom: e.top + r,
                right: e.left + n,
                height: r,
                width: n
            }
        }
        getViewportScrollPosition() {
            if (!this._platform.isBrowser)
                return {
                    top: 0,
                    left: 0
                };
            let e = this._document
              , n = this._getWindow()
              , r = e.documentElement
              , o = r.getBoundingClientRect()
              , l = -o.top || e.body.scrollTop || n.scrollY || r.scrollTop || 0
              , u = -o.left || e.body.scrollLeft || n.scrollX || r.scrollLeft || 0;
            return {
                top: l,
                left: u
            }
        }
        change(e=dm) {
            return e > 0 ? this._change.pipe(ks(e)) : this._change
        }
        _getWindow() {
            return this._document.defaultView || window
        }
        _updateViewportSize() {
            let e = this._getWindow();
            this._viewportSize = this._platform.isBrowser ? {
                width: e.innerWidth,
                height: e.innerHeight
            } : {
                width: 0,
                height: 0
            }
        }
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275prov = wt({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
    }
    return i
}
)();
var ed = ( () => {
    class i {
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275mod = Vt({
            type: i
        });
        static \u0275inj = xt({})
    }
    return i
}
)()
  , tl = ( () => {
    class i {
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275mod = Vt({
            type: i
        });
        static \u0275inj = xt({
            imports: [Wn, ed, Wn, ed]
        })
    }
    return i
}
)();
var id = rr();
function wn(i) {
    return new Yr(i.get(bi),i.get(Ct))
}
var Yr = class {
    _viewportRuler;
    _previousHTMLStyles = {
        top: "",
        left: ""
    };
    _previousScrollPosition;
    _isEnabled = !1;
    _document;
    constructor(t, e) {
        this._viewportRuler = t,
        this._document = e
    }
    attach() {}
    enable() {
        if (this._canBeEnabled()) {
            let t = this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(),
            this._previousHTMLStyles.left = t.style.left || "",
            this._previousHTMLStyles.top = t.style.top || "",
            t.style.left = et(-this._previousScrollPosition.left),
            t.style.top = et(-this._previousScrollPosition.top),
            t.classList.add("cdk-global-scrollblock"),
            this._isEnabled = !0
        }
    }
    disable() {
        if (this._isEnabled) {
            let t = this._document.documentElement
              , e = this._document.body
              , n = t.style
              , r = e.style
              , o = n.scrollBehavior || ""
              , l = r.scrollBehavior || "";
            this._isEnabled = !1,
            n.left = this._previousHTMLStyles.left,
            n.top = this._previousHTMLStyles.top,
            t.classList.remove("cdk-global-scrollblock"),
            id && (n.scrollBehavior = r.scrollBehavior = "auto"),
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top),
            id && (n.scrollBehavior = o,
            r.scrollBehavior = l)
        }
    }
    _canBeEnabled() {
        if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled)
            return !1;
        let e = this._document.documentElement
          , n = this._viewportRuler.getViewportSize();
        return e.scrollHeight > n.height || e.scrollWidth > n.width
    }
}
;
function ud(i, t) {
    return new Jr(i.get(Xr),i.get(Tt),i.get(bi),t)
}
var Jr = class {
    _scrollDispatcher;
    _ngZone;
    _viewportRuler;
    _config;
    _scrollSubscription = null;
    _overlayRef;
    _initialScrollPosition;
    constructor(t, e, n, r) {
        this._scrollDispatcher = t,
        this._ngZone = e,
        this._viewportRuler = n,
        this._config = r
    }
    attach(t) {
        this._overlayRef,
        this._overlayRef = t
    }
    enable() {
        if (this._scrollSubscription)
            return;
        let t = this._scrollDispatcher.scrolled(0).pipe(Gt(e => !e || !this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));
        this._config && this._config.threshold && this._config.threshold > 1 ? (this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top,
        this._scrollSubscription = t.subscribe( () => {
            let e = this._viewportRuler.getViewportScrollPosition().top;
            Math.abs(e - this._initialScrollPosition) > this._config.threshold ? this._detach() : this._overlayRef.updatePosition()
        }
        )) : this._scrollSubscription = t.subscribe(this._detach)
    }
    disable() {
        this._scrollSubscription && (this._scrollSubscription.unsubscribe(),
        this._scrollSubscription = null)
    }
    detach() {
        this.disable(),
        this._overlayRef = null
    }
    _detach = () => {
        this.disable(),
        this._overlayRef.hasAttached() && this._ngZone.run( () => this._overlayRef.detach())
    }
}
;
var Si = class {
    enable() {}
    disable() {}
    attach() {}
}
;
function el(i, t) {
    return t.some(e => {
        let n = i.bottom < e.top
          , r = i.top > e.bottom
          , o = i.right < e.left
          , l = i.left > e.right;
        return n || r || o || l
    }
    )
}
function rd(i, t) {
    return t.some(e => {
        let n = i.top < e.top
          , r = i.bottom > e.bottom
          , o = i.left < e.left
          , l = i.right > e.right;
        return n || r || o || l
    }
    )
}
function is(i, t) {
    return new Zr(i.get(Xr),i.get(bi),i.get(Tt),t)
}
var Zr = class {
    _scrollDispatcher;
    _viewportRuler;
    _ngZone;
    _config;
    _scrollSubscription = null;
    _overlayRef;
    constructor(t, e, n, r) {
        this._scrollDispatcher = t,
        this._viewportRuler = e,
        this._ngZone = n,
        this._config = r
    }
    attach(t) {
        this._overlayRef,
        this._overlayRef = t
    }
    enable() {
        if (!this._scrollSubscription) {
            let t = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(t).subscribe( () => {
                if (this._overlayRef.updatePosition(),
                this._config && this._config.autoClose) {
                    let e = this._overlayRef.overlayElement.getBoundingClientRect()
                      , {width: n, height: r} = this._viewportRuler.getViewportSize();
                    el(e, [{
                        width: n,
                        height: r,
                        bottom: r,
                        right: n,
                        top: 0,
                        left: 0
                    }]) && (this.disable(),
                    this._ngZone.run( () => this._overlayRef.detach()))
                }
            }
            )
        }
    }
    disable() {
        this._scrollSubscription && (this._scrollSubscription.unsubscribe(),
        this._scrollSubscription = null)
    }
    detach() {
        this.disable(),
        this._overlayRef = null
    }
}
  , hd = ( () => {
    class i {
        _injector = x(rt);
        constructor() {}
        noop = () => new Si;
        close = e => ud(this._injector, e);
        block = () => wn(this._injector);
        reposition = e => is(this._injector, e);
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275prov = wt({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
    }
    return i
}
)()
  , yn = class {
    positionStrategy;
    scrollStrategy = new Si;
    panelClass = "";
    hasBackdrop = !1;
    backdropClass = "cdk-overlay-dark-backdrop";
    disableAnimations;
    width;
    height;
    minWidth;
    minHeight;
    maxWidth;
    maxHeight;
    direction;
    disposeOnNavigation = !1;
    constructor(t) {
        if (t) {
            let e = Object.keys(t);
            for (let n of e)
                t[n] !== void 0 && (this[n] = t[n])
        }
    }
}
;
var ts = class {
    connectionPair;
    scrollableViewProperties;
    constructor(t, e) {
        this.connectionPair = t,
        this.scrollableViewProperties = e
    }
}
;
var dd = ( () => {
    class i {
        _attachedOverlays = [];
        _document = x(Ct);
        _isAttached;
        constructor() {}
        ngOnDestroy() {
            this.detach()
        }
        add(e) {
            this.remove(e),
            this._attachedOverlays.push(e)
        }
        remove(e) {
            let n = this._attachedOverlays.indexOf(e);
            n > -1 && this._attachedOverlays.splice(n, 1),
            this._attachedOverlays.length === 0 && this.detach()
        }
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275prov = wt({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
    }
    return i
}
)()
  , fd = ( () => {
    class i extends dd {
        _ngZone = x(Tt);
        _renderer = x(_e).createRenderer(null, null);
        _cleanupKeydown;
        add(e) {
            super.add(e),
            this._isAttached || (this._ngZone.runOutsideAngular( () => {
                this._cleanupKeydown = this._renderer.listen("body", "keydown", this._keydownListener)
            }
            ),
            this._isAttached = !0)
        }
        detach() {
            this._isAttached && (this._cleanupKeydown?.(),
            this._isAttached = !1)
        }
        _keydownListener = e => {
            let n = this._attachedOverlays;
            for (let r = n.length - 1; r > -1; r--)
                if (n[r]._keydownEvents.observers.length > 0) {
                    this._ngZone.run( () => n[r]._keydownEvents.next(e));
                    break
                }
        }
        ;
        static \u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = se(i)))(r || i)
            }
        }
        )();
        static \u0275prov = wt({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
    }
    return i
}
)()
  , pd = ( () => {
    class i extends dd {
        _platform = x(Wt);
        _ngZone = x(Tt);
        _renderer = x(_e).createRenderer(null, null);
        _cursorOriginalValue;
        _cursorStyleIsSet = !1;
        _pointerDownEventTarget;
        _cleanups;
        add(e) {
            if (super.add(e),
            !this._isAttached) {
                let n = this._document.body
                  , r = {
                    capture: !0
                }
                  , o = this._renderer;
                this._cleanups = this._ngZone.runOutsideAngular( () => [o.listen(n, "pointerdown", this._pointerDownListener, r), o.listen(n, "click", this._clickListener, r), o.listen(n, "auxclick", this._clickListener, r), o.listen(n, "contextmenu", this._clickListener, r)]),
                this._platform.IOS && !this._cursorStyleIsSet && (this._cursorOriginalValue = n.style.cursor,
                n.style.cursor = "pointer",
                this._cursorStyleIsSet = !0),
                this._isAttached = !0
            }
        }
        detach() {
            this._isAttached && (this._cleanups?.forEach(e => e()),
            this._cleanups = void 0,
            this._platform.IOS && this._cursorStyleIsSet && (this._document.body.style.cursor = this._cursorOriginalValue,
            this._cursorStyleIsSet = !1),
            this._isAttached = !1)
        }
        _pointerDownListener = e => {
            this._pointerDownEventTarget = Us(e)
        }
        ;
        _clickListener = e => {
            let n = Us(e)
              , r = e.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : n;
            this._pointerDownEventTarget = null;
            let o = this._attachedOverlays.slice();
            for (let l = o.length - 1; l > -1; l--) {
                let u = o[l];
                if (u._outsidePointerEvents.observers.length < 1 || !u.hasAttached())
                    continue;
                if (sd(u.overlayElement, n) || sd(u.overlayElement, r))
                    break;
                let d = u._outsidePointerEvents;
                this._ngZone ? this._ngZone.run( () => d.next(e)) : d.next(e)
            }
        }
        ;
        static \u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = se(i)))(r || i)
            }
        }
        )();
        static \u0275prov = wt({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
    }
    return i
}
)();
function sd(i, t) {
    let e = typeof ShadowRoot < "u" && ShadowRoot
      , n = t;
    for (; n; ) {
        if (n === i)
            return !0;
        n = e && n instanceof ShadowRoot ? n.host : n.parentNode
    }
    return !1
}
var md = ( () => {
    class i {
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275cmp = ye({
            type: i,
            selectors: [["ng-component"]],
            hostAttrs: ["cdk-overlay-style-loader", ""],
            decls: 0,
            vars: 0,
            template: function(n, r) {},
            styles: [`.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}
`],
            encapsulation: 2,
            changeDetection: 0
        })
    }
    return i
}
)()
  , rs = ( () => {
    class i {
        _platform = x(Wt);
        _containerElement;
        _document = x(Ct);
        _styleLoader = x($s);
        constructor() {}
        ngOnDestroy() {
            this._containerElement?.remove()
        }
        getContainerElement() {
            return this._loadStyles(),
            this._containerElement || this._createContainer(),
            this._containerElement
        }
        _createContainer() {
            let e = "cdk-overlay-container";
            if (this._platform.isBrowser || Ks()) {
                let r = this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);
                for (let o = 0; o < r.length; o++)
                    r[o].remove()
            }
            let n = this._document.createElement("div");
            n.classList.add(e),
            Ks() ? n.setAttribute("platform", "test") : this._platform.isBrowser || n.setAttribute("platform", "server"),
            this._document.body.appendChild(n),
            this._containerElement = n
        }
        _loadStyles() {
            this._styleLoader.load(md)
        }
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275prov = wt({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
    }
    return i
}
)()
  , nl = class {
    _renderer;
    _ngZone;
    element;
    _cleanupClick;
    _cleanupTransitionEnd;
    _fallbackTimeout;
    constructor(t, e, n, r) {
        this._renderer = e,
        this._ngZone = n,
        this.element = t.createElement("div"),
        this.element.classList.add("cdk-overlay-backdrop"),
        this._cleanupClick = e.listen(this.element, "click", r)
    }
    detach() {
        this._ngZone.runOutsideAngular( () => {
            let t = this.element;
            clearTimeout(this._fallbackTimeout),
            this._cleanupTransitionEnd?.(),
            this._cleanupTransitionEnd = this._renderer.listen(t, "transitionend", this.dispose),
            this._fallbackTimeout = setTimeout(this.dispose, 500),
            t.style.pointerEvents = "none",
            t.classList.remove("cdk-overlay-backdrop-showing")
        }
        )
    }
    dispose = () => {
        clearTimeout(this._fallbackTimeout),
        this._cleanupClick?.(),
        this._cleanupTransitionEnd?.(),
        this._cleanupClick = this._cleanupTransitionEnd = this._fallbackTimeout = void 0,
        this.element.remove()
    }
}
  , vn = class {
    _portalOutlet;
    _host;
    _pane;
    _config;
    _ngZone;
    _keyboardDispatcher;
    _document;
    _location;
    _outsideClickDispatcher;
    _animationsDisabled;
    _injector;
    _renderer;
    _backdropClick = new tt;
    _attachments = new tt;
    _detachments = new tt;
    _positionStrategy;
    _scrollStrategy;
    _locationChanges = Hi.EMPTY;
    _backdropRef = null;
    _detachContentMutationObserver;
    _detachContentAfterRenderRef;
    _previousHostParent;
    _keydownEvents = new tt;
    _outsidePointerEvents = new tt;
    _afterNextRenderRef;
    constructor(t, e, n, r, o, l, u, d, f, p=!1, E, S) {
        this._portalOutlet = t,
        this._host = e,
        this._pane = n,
        this._config = r,
        this._ngZone = o,
        this._keyboardDispatcher = l,
        this._document = u,
        this._location = d,
        this._outsideClickDispatcher = f,
        this._animationsDisabled = p,
        this._injector = E,
        this._renderer = S,
        r.scrollStrategy && (this._scrollStrategy = r.scrollStrategy,
        this._scrollStrategy.attach(this)),
        this._positionStrategy = r.positionStrategy
    }
    get overlayElement() {
        return this._pane
    }
    get backdropElement() {
        return this._backdropRef?.element || null
    }
    get hostElement() {
        return this._host
    }
    attach(t) {
        !this._host.parentElement && this._previousHostParent && this._previousHostParent.appendChild(this._host);
        let e = this._portalOutlet.attach(t);
        return this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        this._afterNextRenderRef?.destroy(),
        this._afterNextRenderRef = Fe( () => {
            this.hasAttached() && this.updatePosition()
        }
        , {
            injector: this._injector
        }),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._completeDetachContent(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation && (this._locationChanges = this._location.subscribe( () => this.dispose())),
        this._outsideClickDispatcher.add(this),
        typeof e?.onDestroy == "function" && e.onDestroy( () => {
            this.hasAttached() && this._ngZone.runOutsideAngular( () => Promise.resolve().then( () => this.detach()))
        }
        ),
        e
    }
    detach() {
        if (!this.hasAttached())
            return;
        this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
        let t = this._portalOutlet.detach();
        return this._detachments.next(),
        this._completeDetachContent(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenEmpty(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        t
    }
    dispose() {
        let t = this.hasAttached();
        this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._backdropRef?.dispose(),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        this._afterNextRenderRef?.destroy(),
        this._previousHostParent = this._pane = this._host = this._backdropRef = null,
        t && this._detachments.next(),
        this._detachments.complete(),
        this._completeDetachContent()
    }
    hasAttached() {
        return this._portalOutlet.hasAttached()
    }
    backdropClick() {
        return this._backdropClick
    }
    attachments() {
        return this._attachments
    }
    detachments() {
        return this._detachments
    }
    keydownEvents() {
        return this._keydownEvents
    }
    outsidePointerEvents() {
        return this._outsidePointerEvents
    }
    getConfig() {
        return this._config
    }
    updatePosition() {
        this._positionStrategy && this._positionStrategy.apply()
    }
    updatePositionStrategy(t) {
        t !== this._positionStrategy && (this._positionStrategy && this._positionStrategy.dispose(),
        this._positionStrategy = t,
        this.hasAttached() && (t.attach(this),
        this.updatePosition()))
    }
    updateSize(t) {
        this._config = bt(bt({}, this._config), t),
        this._updateElementSize()
    }
    setDirection(t) {
        this._config = Wi(bt({}, this._config), {
            direction: t
        }),
        this._updateElementDirection()
    }
    addPanelClass(t) {
        this._pane && this._toggleClasses(this._pane, t, !0)
    }
    removePanelClass(t) {
        this._pane && this._toggleClasses(this._pane, t, !1)
    }
    getDirection() {
        let t = this._config.direction;
        return t ? typeof t == "string" ? t : t.value : "ltr"
    }
    updateScrollStrategy(t) {
        t !== this._scrollStrategy && (this._disposeScrollStrategy(),
        this._scrollStrategy = t,
        this.hasAttached() && (t.attach(this),
        t.enable()))
    }
    _updateElementDirection() {
        this._host.setAttribute("dir", this.getDirection())
    }
    _updateElementSize() {
        if (!this._pane)
            return;
        let t = this._pane.style;
        t.width = et(this._config.width),
        t.height = et(this._config.height),
        t.minWidth = et(this._config.minWidth),
        t.minHeight = et(this._config.minHeight),
        t.maxWidth = et(this._config.maxWidth),
        t.maxHeight = et(this._config.maxHeight)
    }
    _togglePointerEvents(t) {
        this._pane.style.pointerEvents = t ? "" : "none"
    }
    _attachBackdrop() {
        let t = "cdk-overlay-backdrop-showing";
        this._backdropRef?.dispose(),
        this._backdropRef = new nl(this._document,this._renderer,this._ngZone,e => {
            this._backdropClick.next(e)
        }
        ),
        this._animationsDisabled && this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),
        this._config.backdropClass && this._toggleClasses(this._backdropRef.element, this._config.backdropClass, !0),
        this._host.parentElement.insertBefore(this._backdropRef.element, this._host),
        !this._animationsDisabled && typeof requestAnimationFrame < "u" ? this._ngZone.runOutsideAngular( () => {
            requestAnimationFrame( () => this._backdropRef?.element.classList.add(t))
        }
        ) : this._backdropRef.element.classList.add(t)
    }
    _updateStackingOrder() {
        this._host.nextSibling && this._host.parentNode.appendChild(this._host)
    }
    detachBackdrop() {
        this._animationsDisabled ? (this._backdropRef?.dispose(),
        this._backdropRef = null) : this._backdropRef?.detach()
    }
    _toggleClasses(t, e, n) {
        let r = Gs(e || []).filter(o => !!o);
        r.length && (n ? t.classList.add(...r) : t.classList.remove(...r))
    }
    _detachContentWhenEmpty() {
        let t = !1;
        try {
            this._detachContentAfterRenderRef = Fe( () => {
                t = !0,
                this._detachContent()
            }
            , {
                injector: this._injector
            })
        } catch (e) {
            if (t)
                throw e;
            this._detachContent()
        }
        globalThis.MutationObserver && this._pane && (this._detachContentMutationObserver ||= new globalThis.MutationObserver( () => {
            this._detachContent()
        }
        ),
        this._detachContentMutationObserver.observe(this._pane, {
            childList: !0
        }))
    }
    _detachContent() {
        (!this._pane || !this._host || this._pane.children.length === 0) && (this._pane && this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !1),
        this._host && this._host.parentElement && (this._previousHostParent = this._host.parentElement,
        this._host.remove()),
        this._completeDetachContent())
    }
    _completeDetachContent() {
        this._detachContentAfterRenderRef?.destroy(),
        this._detachContentAfterRenderRef = void 0,
        this._detachContentMutationObserver?.disconnect()
    }
    _disposeScrollStrategy() {
        let t = this._scrollStrategy;
        t?.disable(),
        t?.detach?.()
    }
}
  , od = "cdk-overlay-connected-position-bounding-box"
  , pm = /([A-Za-z%]+)$/;
function gd(i, t) {
    return new es(t,i.get(bi),i.get(Ct),i.get(Wt),i.get(rs))
}
var es = class {
    _viewportRuler;
    _document;
    _platform;
    _overlayContainer;
    _overlayRef;
    _isInitialRender;
    _lastBoundingBoxSize = {
        width: 0,
        height: 0
    };
    _isPushed = !1;
    _canPush = !0;
    _growAfterOpen = !1;
    _hasFlexibleDimensions = !0;
    _positionLocked = !1;
    _originRect;
    _overlayRect;
    _viewportRect;
    _containerRect;
    _viewportMargin = 0;
    _scrollables = [];
    _preferredPositions = [];
    _origin;
    _pane;
    _isDisposed;
    _boundingBox;
    _lastPosition;
    _lastScrollVisibility;
    _positionChanges = new tt;
    _resizeSubscription = Hi.EMPTY;
    _offsetX = 0;
    _offsetY = 0;
    _transformOriginSelector;
    _appliedPanelClasses = [];
    _previousPushAmount;
    positionChanges = this._positionChanges;
    get positions() {
        return this._preferredPositions
    }
    constructor(t, e, n, r, o) {
        this._viewportRuler = e,
        this._document = n,
        this._platform = r,
        this._overlayContainer = o,
        this.setOrigin(t)
    }
    attach(t) {
        this._overlayRef && this._overlayRef,
        this._validatePositions(),
        t.hostElement.classList.add(od),
        this._overlayRef = t,
        this._boundingBox = t.hostElement,
        this._pane = t.overlayElement,
        this._isDisposed = !1,
        this._isInitialRender = !0,
        this._lastPosition = null,
        this._resizeSubscription.unsubscribe(),
        this._resizeSubscription = this._viewportRuler.change().subscribe( () => {
            this._isInitialRender = !0,
            this.apply()
        }
        )
    }
    apply() {
        if (this._isDisposed || !this._platform.isBrowser)
            return;
        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return
        }
        this._clearPanelClasses(),
        this._resetOverlayElementStyles(),
        this._resetBoundingBoxStyles(),
        this._viewportRect = this._getNarrowedViewportRect(),
        this._originRect = this._getOriginRect(),
        this._overlayRect = this._pane.getBoundingClientRect(),
        this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
        let t = this._originRect, e = this._overlayRect, n = this._viewportRect, r = this._containerRect, o = [], l;
        for (let u of this._preferredPositions) {
            let d = this._getOriginPoint(t, r, u)
              , f = this._getOverlayPoint(d, e, u)
              , p = this._getOverlayFit(f, e, n, u);
            if (p.isCompletelyWithinViewport) {
                this._isPushed = !1,
                this._applyPosition(u, d);
                return
            }
            if (this._canFitWithFlexibleDimensions(p, f, n)) {
                o.push({
                    position: u,
                    origin: d,
                    overlayRect: e,
                    boundingBoxRect: this._calculateBoundingBoxRect(d, u)
                });
                continue
            }
            (!l || l.overlayFit.visibleArea < p.visibleArea) && (l = {
                overlayFit: p,
                overlayPoint: f,
                originPoint: d,
                position: u,
                overlayRect: e
            })
        }
        if (o.length) {
            let u = null
              , d = -1;
            for (let f of o) {
                let p = f.boundingBoxRect.width * f.boundingBoxRect.height * (f.position.weight || 1);
                p > d && (d = p,
                u = f)
            }
            this._isPushed = !1,
            this._applyPosition(u.position, u.origin);
            return
        }
        if (this._canPush) {
            this._isPushed = !0,
            this._applyPosition(l.position, l.originPoint);
            return
        }
        this._applyPosition(l.position, l.originPoint)
    }
    detach() {
        this._clearPanelClasses(),
        this._lastPosition = null,
        this._previousPushAmount = null,
        this._resizeSubscription.unsubscribe()
    }
    dispose() {
        this._isDisposed || (this._boundingBox && De(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: ""
        }),
        this._pane && this._resetOverlayElementStyles(),
        this._overlayRef && this._overlayRef.hostElement.classList.remove(od),
        this.detach(),
        this._positionChanges.complete(),
        this._overlayRef = this._boundingBox = null,
        this._isDisposed = !0)
    }
    reapplyLastPosition() {
        if (this._isDisposed || !this._platform.isBrowser)
            return;
        let t = this._lastPosition;
        if (t) {
            this._originRect = this._getOriginRect(),
            this._overlayRect = this._pane.getBoundingClientRect(),
            this._viewportRect = this._getNarrowedViewportRect(),
            this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
            let e = this._getOriginPoint(this._originRect, this._containerRect, t);
            this._applyPosition(t, e)
        } else
            this.apply()
    }
    withScrollableContainers(t) {
        return this._scrollables = t,
        this
    }
    withPositions(t) {
        return this._preferredPositions = t,
        t.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
        this._validatePositions(),
        this
    }
    withViewportMargin(t) {
        return this._viewportMargin = t,
        this
    }
    withFlexibleDimensions(t=!0) {
        return this._hasFlexibleDimensions = t,
        this
    }
    withGrowAfterOpen(t=!0) {
        return this._growAfterOpen = t,
        this
    }
    withPush(t=!0) {
        return this._canPush = t,
        this
    }
    withLockedPosition(t=!0) {
        return this._positionLocked = t,
        this
    }
    setOrigin(t) {
        return this._origin = t,
        this
    }
    withDefaultOffsetX(t) {
        return this._offsetX = t,
        this
    }
    withDefaultOffsetY(t) {
        return this._offsetY = t,
        this
    }
    withTransformOriginOn(t) {
        return this._transformOriginSelector = t,
        this
    }
    _getOriginPoint(t, e, n) {
        let r;
        if (n.originX == "center")
            r = t.left + t.width / 2;
        else {
            let l = this._isRtl() ? t.right : t.left
              , u = this._isRtl() ? t.left : t.right;
            r = n.originX == "start" ? l : u
        }
        e.left < 0 && (r -= e.left);
        let o;
        return n.originY == "center" ? o = t.top + t.height / 2 : o = n.originY == "top" ? t.top : t.bottom,
        e.top < 0 && (o -= e.top),
        {
            x: r,
            y: o
        }
    }
    _getOverlayPoint(t, e, n) {
        let r;
        n.overlayX == "center" ? r = -e.width / 2 : n.overlayX === "start" ? r = this._isRtl() ? -e.width : 0 : r = this._isRtl() ? 0 : -e.width;
        let o;
        return n.overlayY == "center" ? o = -e.height / 2 : o = n.overlayY == "top" ? 0 : -e.height,
        {
            x: t.x + r,
            y: t.y + o
        }
    }
    _getOverlayFit(t, e, n, r) {
        let o = ld(e)
          , {x: l, y: u} = t
          , d = this._getOffset(r, "x")
          , f = this._getOffset(r, "y");
        d && (l += d),
        f && (u += f);
        let p = 0 - l
          , E = l + o.width - n.width
          , S = 0 - u
          , C = u + o.height - n.height
          , P = this._subtractOverflows(o.width, p, E)
          , O = this._subtractOverflows(o.height, S, C)
          , V = P * O;
        return {
            visibleArea: V,
            isCompletelyWithinViewport: o.width * o.height === V,
            fitsInViewportVertically: O === o.height,
            fitsInViewportHorizontally: P == o.width
        }
    }
    _canFitWithFlexibleDimensions(t, e, n) {
        if (this._hasFlexibleDimensions) {
            let r = n.bottom - e.y
              , o = n.right - e.x
              , l = ad(this._overlayRef.getConfig().minHeight)
              , u = ad(this._overlayRef.getConfig().minWidth)
              , d = t.fitsInViewportVertically || l != null && l <= r
              , f = t.fitsInViewportHorizontally || u != null && u <= o;
            return d && f
        }
        return !1
    }
    _pushOverlayOnScreen(t, e, n) {
        if (this._previousPushAmount && this._positionLocked)
            return {
                x: t.x + this._previousPushAmount.x,
                y: t.y + this._previousPushAmount.y
            };
        let r = ld(e)
          , o = this._viewportRect
          , l = Math.max(t.x + r.width - o.width, 0)
          , u = Math.max(t.y + r.height - o.height, 0)
          , d = Math.max(o.top - n.top - t.y, 0)
          , f = Math.max(o.left - n.left - t.x, 0)
          , p = 0
          , E = 0;
        return r.width <= o.width ? p = f || -l : p = t.x < this._viewportMargin ? o.left - n.left - t.x : 0,
        r.height <= o.height ? E = d || -u : E = t.y < this._viewportMargin ? o.top - n.top - t.y : 0,
        this._previousPushAmount = {
            x: p,
            y: E
        },
        {
            x: t.x + p,
            y: t.y + E
        }
    }
    _applyPosition(t, e) {
        if (this._setTransformOrigin(t),
        this._setOverlayElementStyles(e, t),
        this._setBoundingBoxStyles(e, t),
        t.panelClass && this._addPanelClasses(t.panelClass),
        this._positionChanges.observers.length) {
            let n = this._getScrollVisibility();
            if (t !== this._lastPosition || !this._lastScrollVisibility || !mm(this._lastScrollVisibility, n)) {
                let r = new ts(t,n);
                this._positionChanges.next(r)
            }
            this._lastScrollVisibility = n
        }
        this._lastPosition = t,
        this._isInitialRender = !1
    }
    _setTransformOrigin(t) {
        if (!this._transformOriginSelector)
            return;
        let e = this._boundingBox.querySelectorAll(this._transformOriginSelector), n, r = t.overlayY;
        t.overlayX === "center" ? n = "center" : this._isRtl() ? n = t.overlayX === "start" ? "right" : "left" : n = t.overlayX === "start" ? "left" : "right";
        for (let o = 0; o < e.length; o++)
            e[o].style.transformOrigin = `${n} ${r}`
    }
    _calculateBoundingBoxRect(t, e) {
        let n = this._viewportRect, r = this._isRtl(), o, l, u;
        if (e.overlayY === "top")
            l = t.y,
            o = n.height - l + this._viewportMargin;
        else if (e.overlayY === "bottom")
            u = n.height - t.y + this._viewportMargin * 2,
            o = n.height - u + this._viewportMargin;
        else {
            let C = Math.min(n.bottom - t.y + n.top, t.y)
              , P = this._lastBoundingBoxSize.height;
            o = C * 2,
            l = t.y - C,
            o > P && !this._isInitialRender && !this._growAfterOpen && (l = t.y - P / 2)
        }
        let d = e.overlayX === "start" && !r || e.overlayX === "end" && r, f = e.overlayX === "end" && !r || e.overlayX === "start" && r, p, E, S;
        if (f)
            S = n.width - t.x + this._viewportMargin * 2,
            p = t.x - this._viewportMargin;
        else if (d)
            E = t.x,
            p = n.right - t.x;
        else {
            let C = Math.min(n.right - t.x + n.left, t.x)
              , P = this._lastBoundingBoxSize.width;
            p = C * 2,
            E = t.x - C,
            p > P && !this._isInitialRender && !this._growAfterOpen && (E = t.x - P / 2)
        }
        return {
            top: l,
            left: E,
            bottom: u,
            right: S,
            width: p,
            height: o
        }
    }
    _setBoundingBoxStyles(t, e) {
        let n = this._calculateBoundingBoxRect(t, e);
        !this._isInitialRender && !this._growAfterOpen && (n.height = Math.min(n.height, this._lastBoundingBoxSize.height),
        n.width = Math.min(n.width, this._lastBoundingBoxSize.width));
        let r = {};
        if (this._hasExactPosition())
            r.top = r.left = "0",
            r.bottom = r.right = r.maxHeight = r.maxWidth = "",
            r.width = r.height = "100%";
        else {
            let o = this._overlayRef.getConfig().maxHeight
              , l = this._overlayRef.getConfig().maxWidth;
            r.height = et(n.height),
            r.top = et(n.top),
            r.bottom = et(n.bottom),
            r.width = et(n.width),
            r.left = et(n.left),
            r.right = et(n.right),
            e.overlayX === "center" ? r.alignItems = "center" : r.alignItems = e.overlayX === "end" ? "flex-end" : "flex-start",
            e.overlayY === "center" ? r.justifyContent = "center" : r.justifyContent = e.overlayY === "bottom" ? "flex-end" : "flex-start",
            o && (r.maxHeight = et(o)),
            l && (r.maxWidth = et(l))
        }
        this._lastBoundingBoxSize = n,
        De(this._boundingBox.style, r)
    }
    _resetBoundingBoxStyles() {
        De(this._boundingBox.style, {
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: ""
        })
    }
    _resetOverlayElementStyles() {
        De(this._pane.style, {
            top: "",
            left: "",
            bottom: "",
            right: "",
            position: "",
            transform: ""
        })
    }
    _setOverlayElementStyles(t, e) {
        let n = {}
          , r = this._hasExactPosition()
          , o = this._hasFlexibleDimensions
          , l = this._overlayRef.getConfig();
        if (r) {
            let p = this._viewportRuler.getViewportScrollPosition();
            De(n, this._getExactOverlayY(e, t, p)),
            De(n, this._getExactOverlayX(e, t, p))
        } else
            n.position = "static";
        let u = ""
          , d = this._getOffset(e, "x")
          , f = this._getOffset(e, "y");
        d && (u += `translateX(${d}px) `),
        f && (u += `translateY(${f}px)`),
        n.transform = u.trim(),
        l.maxHeight && (r ? n.maxHeight = et(l.maxHeight) : o && (n.maxHeight = "")),
        l.maxWidth && (r ? n.maxWidth = et(l.maxWidth) : o && (n.maxWidth = "")),
        De(this._pane.style, n)
    }
    _getExactOverlayY(t, e, n) {
        let r = {
            top: "",
            bottom: ""
        }
          , o = this._getOverlayPoint(e, this._overlayRect, t);
        if (this._isPushed && (o = this._pushOverlayOnScreen(o, this._overlayRect, n)),
        t.overlayY === "bottom") {
            let l = this._document.documentElement.clientHeight;
            r.bottom = `${l - (o.y + this._overlayRect.height)}px`
        } else
            r.top = et(o.y);
        return r
    }
    _getExactOverlayX(t, e, n) {
        let r = {
            left: "",
            right: ""
        }
          , o = this._getOverlayPoint(e, this._overlayRect, t);
        this._isPushed && (o = this._pushOverlayOnScreen(o, this._overlayRect, n));
        let l;
        if (this._isRtl() ? l = t.overlayX === "end" ? "left" : "right" : l = t.overlayX === "end" ? "right" : "left",
        l === "right") {
            let u = this._document.documentElement.clientWidth;
            r.right = `${u - (o.x + this._overlayRect.width)}px`
        } else
            r.left = et(o.x);
        return r
    }
    _getScrollVisibility() {
        let t = this._getOriginRect()
          , e = this._pane.getBoundingClientRect()
          , n = this._scrollables.map(r => r.getElementRef().nativeElement.getBoundingClientRect());
        return {
            isOriginClipped: rd(t, n),
            isOriginOutsideView: el(t, n),
            isOverlayClipped: rd(e, n),
            isOverlayOutsideView: el(e, n)
        }
    }
    _subtractOverflows(t, ...e) {
        return e.reduce( (n, r) => n - Math.max(r, 0), t)
    }
    _getNarrowedViewportRect() {
        let t = this._document.documentElement.clientWidth
          , e = this._document.documentElement.clientHeight
          , n = this._viewportRuler.getViewportScrollPosition();
        return {
            top: n.top + this._viewportMargin,
            left: n.left + this._viewportMargin,
            right: n.left + t - this._viewportMargin,
            bottom: n.top + e - this._viewportMargin,
            width: t - 2 * this._viewportMargin,
            height: e - 2 * this._viewportMargin
        }
    }
    _isRtl() {
        return this._overlayRef.getDirection() === "rtl"
    }
    _hasExactPosition() {
        return !this._hasFlexibleDimensions || this._isPushed
    }
    _getOffset(t, e) {
        return e === "x" ? t.offsetX == null ? this._offsetX : t.offsetX : t.offsetY == null ? this._offsetY : t.offsetY
    }
    _validatePositions() {}
    _addPanelClasses(t) {
        this._pane && Gs(t).forEach(e => {
            e !== "" && this._appliedPanelClasses.indexOf(e) === -1 && (this._appliedPanelClasses.push(e),
            this._pane.classList.add(e))
        }
        )
    }
    _clearPanelClasses() {
        this._pane && (this._appliedPanelClasses.forEach(t => {
            this._pane.classList.remove(t)
        }
        ),
        this._appliedPanelClasses = [])
    }
    _getOriginRect() {
        let t = this._origin;
        if (t instanceof kt)
            return t.nativeElement.getBoundingClientRect();
        if (t instanceof Element)
            return t.getBoundingClientRect();
        let e = t.width || 0
          , n = t.height || 0;
        return {
            top: t.y,
            bottom: t.y + n,
            left: t.x,
            right: t.x + e,
            height: n,
            width: e
        }
    }
}
;
function De(i, t) {
    for (let e in t)
        t.hasOwnProperty(e) && (i[e] = t[e]);
    return i
}
function ad(i) {
    if (typeof i != "number" && i != null) {
        let[t,e] = i.split(pm);
        return !e || e === "px" ? parseFloat(t) : null
    }
    return i || null
}
function ld(i) {
    return {
        top: Math.floor(i.top),
        right: Math.floor(i.right),
        bottom: Math.floor(i.bottom),
        left: Math.floor(i.left),
        width: Math.floor(i.width),
        height: Math.floor(i.height)
    }
}
function mm(i, t) {
    return i === t ? !0 : i.isOriginClipped === t.isOriginClipped && i.isOriginOutsideView === t.isOriginOutsideView && i.isOverlayClipped === t.isOverlayClipped && i.isOverlayOutsideView === t.isOverlayOutsideView
}
var cd = "cdk-global-overlay-wrapper";
function En(i) {
    return new ns
}
var ns = class {
    _overlayRef;
    _cssPosition = "static";
    _topOffset = "";
    _bottomOffset = "";
    _alignItems = "";
    _xPosition = "";
    _xOffset = "";
    _width = "";
    _height = "";
    _isDisposed = !1;
    attach(t) {
        let e = t.getConfig();
        this._overlayRef = t,
        this._width && !e.width && t.updateSize({
            width: this._width
        }),
        this._height && !e.height && t.updateSize({
            height: this._height
        }),
        t.hostElement.classList.add(cd),
        this._isDisposed = !1
    }
    top(t="") {
        return this._bottomOffset = "",
        this._topOffset = t,
        this._alignItems = "flex-start",
        this
    }
    left(t="") {
        return this._xOffset = t,
        this._xPosition = "left",
        this
    }
    bottom(t="") {
        return this._topOffset = "",
        this._bottomOffset = t,
        this._alignItems = "flex-end",
        this
    }
    right(t="") {
        return this._xOffset = t,
        this._xPosition = "right",
        this
    }
    start(t="") {
        return this._xOffset = t,
        this._xPosition = "start",
        this
    }
    end(t="") {
        return this._xOffset = t,
        this._xPosition = "end",
        this
    }
    width(t="") {
        return this._overlayRef ? this._overlayRef.updateSize({
            width: t
        }) : this._width = t,
        this
    }
    height(t="") {
        return this._overlayRef ? this._overlayRef.updateSize({
            height: t
        }) : this._height = t,
        this
    }
    centerHorizontally(t="") {
        return this.left(t),
        this._xPosition = "center",
        this
    }
    centerVertically(t="") {
        return this.top(t),
        this._alignItems = "center",
        this
    }
    apply() {
        if (!this._overlayRef || !this._overlayRef.hasAttached())
            return;
        let t = this._overlayRef.overlayElement.style
          , e = this._overlayRef.hostElement.style
          , n = this._overlayRef.getConfig()
          , {width: r, height: o, maxWidth: l, maxHeight: u} = n
          , d = (r === "100%" || r === "100vw") && (!l || l === "100%" || l === "100vw")
          , f = (o === "100%" || o === "100vh") && (!u || u === "100%" || u === "100vh")
          , p = this._xPosition
          , E = this._xOffset
          , S = this._overlayRef.getConfig().direction === "rtl"
          , C = ""
          , P = ""
          , O = "";
        d ? O = "flex-start" : p === "center" ? (O = "center",
        S ? P = E : C = E) : S ? p === "left" || p === "end" ? (O = "flex-end",
        C = E) : (p === "right" || p === "start") && (O = "flex-start",
        P = E) : p === "left" || p === "start" ? (O = "flex-start",
        C = E) : (p === "right" || p === "end") && (O = "flex-end",
        P = E),
        t.position = this._cssPosition,
        t.marginLeft = d ? "0" : C,
        t.marginTop = f ? "0" : this._topOffset,
        t.marginBottom = this._bottomOffset,
        t.marginRight = d ? "0" : P,
        e.justifyContent = O,
        e.alignItems = f ? "flex-start" : this._alignItems
    }
    dispose() {
        if (this._isDisposed || !this._overlayRef)
            return;
        let t = this._overlayRef.overlayElement.style
          , e = this._overlayRef.hostElement
          , n = e.style;
        e.classList.remove(cd),
        n.justifyContent = n.alignItems = t.marginTop = t.marginBottom = t.marginLeft = t.marginRight = t.position = "",
        this._overlayRef = null,
        this._isDisposed = !0
    }
}
  , _d = ( () => {
    class i {
        _injector = x(rt);
        constructor() {}
        global() {
            return En()
        }
        flexibleConnectedTo(e) {
            return gd(this._injector, e)
        }
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275prov = wt({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
    }
    return i
}
)();
function ss(i, t) {
    i.get($s).load(md);
    let e = i.get(rs)
      , n = i.get(Ct)
      , r = i.get(ve)
      , o = i.get(Ns)
      , l = i.get(we)
      , u = n.createElement("div")
      , d = n.createElement("div");
    d.id = r.getId("cdk-overlay-"),
    d.classList.add("cdk-overlay-pane"),
    u.appendChild(d),
    e.getContainerElement().appendChild(u);
    let f = new Hr(d,o,i)
      , p = new yn(t)
      , E = i.get(Me, null, {
        optional: !0
    }) || i.get(_e).createRenderer(null, null);
    return p.direction = p.direction || l.value,
    new vn(f,u,d,p,i.get(Tt),i.get(fd),n,i.get(vc),i.get(pd),t?.disableAnimations ?? i.get(fc, null, {
        optional: !0
    }) === "NoopAnimations",i.get(Xi),E)
}
var yd = ( () => {
    class i {
        scrollStrategies = x(hd);
        _positionBuilder = x(_d);
        _injector = x(rt);
        constructor() {}
        create(e) {
            return ss(this._injector, e)
        }
        position() {
            return this._positionBuilder
        }
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275prov = wt({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
    }
    return i
}
)();
var gm = new St("cdk-connected-overlay-scroll-strategy",{
    providedIn: "root",
    factory: () => {
        let i = x(rt);
        return () => is(i)
    }
});
function _m(i) {
    let t = x(rt);
    return () => is(t)
}
var ym = {
    provide: gm,
    useFactory: _m
}
  , Ai = ( () => {
    class i {
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275mod = Vt({
            type: i
        });
        static \u0275inj = xt({
            providers: [yd, ym],
            imports: [Wn, Re, tl, tl]
        })
    }
    return i
}
)();
function vm(i, t) {}
var he = class {
    viewContainerRef;
    injector;
    id;
    role = "dialog";
    panelClass = "";
    hasBackdrop = !0;
    backdropClass = "";
    disableClose = !1;
    closePredicate;
    width = "";
    height = "";
    minWidth;
    minHeight;
    maxWidth;
    maxHeight;
    positionStrategy;
    data = null;
    direction;
    ariaDescribedBy = null;
    ariaLabelledBy = null;
    ariaLabel = null;
    ariaModal = !1;
    autoFocus = "first-tabbable";
    restoreFocus = !0;
    scrollStrategy;
    closeOnNavigation = !0;
    closeOnDestroy = !0;
    closeOnOverlayDetachments = !0;
    disableAnimations = !1;
    providers;
    container;
    templateContext
}
;
var rl = ( () => {
    class i extends _n {
        _elementRef = x(kt);
        _focusTrapFactory = x(Kc);
        _config;
        _interactivityChecker = x(Gc);
        _ngZone = x(Tt);
        _focusMonitor = x($c);
        _renderer = x(Me);
        _changeDetectorRef = x(qs);
        _injector = x(rt);
        _platform = x(Wt);
        _document = x(Ct);
        _portalOutlet;
        _focusTrapped = new tt;
        _focusTrap = null;
        _elementFocusedBeforeDialogWasOpened = null;
        _closeInteractionType = null;
        _ariaLabelledByQueue = [];
        _isDestroyed = !1;
        constructor() {
            super(),
            this._config = x(he, {
                optional: !0
            }) || new he,
            this._config.ariaLabelledBy && this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)
        }
        _addAriaLabelledBy(e) {
            this._ariaLabelledByQueue.push(e),
            this._changeDetectorRef.markForCheck()
        }
        _removeAriaLabelledBy(e) {
            let n = this._ariaLabelledByQueue.indexOf(e);
            n > -1 && (this._ariaLabelledByQueue.splice(n, 1),
            this._changeDetectorRef.markForCheck())
        }
        _contentAttached() {
            this._initializeFocusTrap(),
            this._captureInitialFocus()
        }
        _captureInitialFocus() {
            this._trapFocus()
        }
        ngOnDestroy() {
            this._focusTrapped.complete(),
            this._isDestroyed = !0,
            this._restoreFocus()
        }
        attachComponentPortal(e) {
            this._portalOutlet.hasAttached();
            let n = this._portalOutlet.attachComponentPortal(e);
            return this._contentAttached(),
            n
        }
        attachTemplatePortal(e) {
            this._portalOutlet.hasAttached();
            let n = this._portalOutlet.attachTemplatePortal(e);
            return this._contentAttached(),
            n
        }
        attachDomPortal = e => {
            this._portalOutlet.hasAttached();
            let n = this._portalOutlet.attachDomPortal(e);
            return this._contentAttached(),
            n
        }
        ;
        _recaptureFocus() {
            this._containsFocus() || this._trapFocus()
        }
        _forceFocus(e, n) {
            this._interactivityChecker.isFocusable(e) || (e.tabIndex = -1,
            this._ngZone.runOutsideAngular( () => {
                let r = () => {
                    o(),
                    l(),
                    e.removeAttribute("tabindex")
                }
                  , o = this._renderer.listen(e, "blur", r)
                  , l = this._renderer.listen(e, "mousedown", r)
            }
            )),
            e.focus(n)
        }
        _focusByCssSelector(e, n) {
            let r = this._elementRef.nativeElement.querySelector(e);
            r && this._forceFocus(r, n)
        }
        _trapFocus(e) {
            this._isDestroyed || Fe( () => {
                let n = this._elementRef.nativeElement;
                switch (this._config.autoFocus) {
                case !1:
                case "dialog":
                    this._containsFocus() || n.focus(e);
                    break;
                case !0:
                case "first-tabbable":
                    this._focusTrap?.focusInitialElement(e) || this._focusDialogContainer(e);
                    break;
                case "first-heading":
                    this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]', e);
                    break;
                default:
                    this._focusByCssSelector(this._config.autoFocus, e);
                    break
                }
                this._focusTrapped.next()
            }
            , {
                injector: this._injector
            })
        }
        _restoreFocus() {
            let e = this._config.restoreFocus
              , n = null;
            if (typeof e == "string" ? n = this._document.querySelector(e) : typeof e == "boolean" ? n = e ? this._elementFocusedBeforeDialogWasOpened : null : e && (n = e),
            this._config.restoreFocus && n && typeof n.focus == "function") {
                let r = er()
                  , o = this._elementRef.nativeElement;
                (!r || r === this._document.body || r === o || o.contains(r)) && (this._focusMonitor ? (this._focusMonitor.focusVia(n, this._closeInteractionType),
                this._closeInteractionType = null) : n.focus())
            }
            this._focusTrap && this._focusTrap.destroy()
        }
        _focusDialogContainer(e) {
            this._elementRef.nativeElement.focus?.(e)
        }
        _containsFocus() {
            let e = this._elementRef.nativeElement
              , n = er();
            return e === n || e.contains(n)
        }
        _initializeFocusTrap() {
            this._platform.isBrowser && (this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement),
            this._document && (this._elementFocusedBeforeDialogWasOpened = er()))
        }
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275cmp = ye({
            type: i,
            selectors: [["cdk-dialog-container"]],
            viewQuery: function(n, r) {
                if (n & 1 && Ms(Ii, 7),
                n & 2) {
                    let o;
                    Ls(o = Bs()) && (r._portalOutlet = o.first)
                }
            },
            hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
            hostVars: 6,
            hostBindings: function(n, r) {
                n & 2 && $n("id", r._config.id || null)("role", r._config.role)("aria-modal", r._config.ariaModal)("aria-labelledby", r._config.ariaLabel ? null : r._ariaLabelledByQueue[0])("aria-label", r._config.ariaLabel)("aria-describedby", r._config.ariaDescribedBy || null)
            },
            features: [Kt],
            decls: 1,
            vars: 0,
            consts: [["cdkPortalOutlet", ""]],
            template: function(n, r) {
                n & 1 && Zi(0, vm, 0, 0, "ng-template", 0)
            },
            dependencies: [Ii],
            styles: [`.cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}
`],
            encapsulation: 2
        })
    }
    return i
}
)()
  , Ci = class {
    overlayRef;
    config;
    componentInstance;
    componentRef;
    containerInstance;
    disableClose;
    closed = new tt;
    backdropClick;
    keydownEvents;
    outsidePointerEvents;
    id;
    _detachSubscription;
    constructor(t, e) {
        this.overlayRef = t,
        this.config = e,
        this.disableClose = e.disableClose,
        this.backdropClick = t.backdropClick(),
        this.keydownEvents = t.keydownEvents(),
        this.outsidePointerEvents = t.outsidePointerEvents(),
        this.id = e.id,
        this.keydownEvents.subscribe(n => {
            n.keyCode === 27 && !this.disableClose && !ir(n) && (n.preventDefault(),
            this.close(void 0, {
                focusOrigin: "keyboard"
            }))
        }
        ),
        this.backdropClick.subscribe( () => {
            !this.disableClose && this._canClose() ? this.close(void 0, {
                focusOrigin: "mouse"
            }) : this.containerInstance._recaptureFocus?.()
        }
        ),
        this._detachSubscription = t.detachments().subscribe( () => {
            e.closeOnOverlayDetachments !== !1 && this.close()
        }
        )
    }
    close(t, e) {
        if (this._canClose(t)) {
            let n = this.closed;
            this.containerInstance._closeInteractionType = e?.focusOrigin || "program",
            this._detachSubscription.unsubscribe(),
            this.overlayRef.dispose(),
            n.next(t),
            n.complete(),
            this.componentInstance = this.containerInstance = null
        }
    }
    updatePosition() {
        return this.overlayRef.updatePosition(),
        this
    }
    updateSize(t="", e="") {
        return this.overlayRef.updateSize({
            width: t,
            height: e
        }),
        this
    }
    addPanelClass(t) {
        return this.overlayRef.addPanelClass(t),
        this
    }
    removePanelClass(t) {
        return this.overlayRef.removePanelClass(t),
        this
    }
    _canClose(t) {
        let e = this.config;
        return !!this.containerInstance && (!e.closePredicate || e.closePredicate(t, e, this.componentInstance))
    }
}
  , wm = new St("DialogScrollStrategy",{
    providedIn: "root",
    factory: () => {
        let i = x(rt);
        return () => wn(i)
    }
})
  , Em = new St("DialogData")
  , Tm = new St("DefaultDialogConfig");
function Im(i) {
    let t = Vs(i)
      , e = new ge;
    return {
        valueSignal: t,
        get value() {
            return t()
        },
        change: e,
        ngOnDestroy() {
            e.complete()
        }
    }
}
var sl = ( () => {
    class i {
        _injector = x(rt);
        _defaultOptions = x(Tm, {
            optional: !0
        });
        _parentDialog = x(i, {
            optional: !0,
            skipSelf: !0
        });
        _overlayContainer = x(rs);
        _idGenerator = x(ve);
        _openDialogsAtThisLevel = [];
        _afterAllClosedAtThisLevel = new tt;
        _afterOpenedAtThisLevel = new tt;
        _ariaHiddenElements = new Map;
        _scrollStrategy = x(wm);
        get openDialogs() {
            return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel
        }
        get afterOpened() {
            return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel
        }
        afterAllClosed = Qi( () => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(zn(void 0)));
        constructor() {}
        open(e, n) {
            let r = this._defaultOptions || new he;
            n = bt(bt({}, r), n),
            n.id = n.id || this._idGenerator.getId("cdk-dialog-"),
            n.id && this.getDialogById(n.id);
            let o = this._getOverlayConfig(n)
              , l = ss(this._injector, o)
              , u = new Ci(l,n)
              , d = this._attachContainer(l, u, n);
            if (u.containerInstance = d,
            !this.openDialogs.length) {
                let f = this._overlayContainer.getContainerElement();
                d._focusTrapped ? d._focusTrapped.pipe(Oe(1)).subscribe( () => {
                    this._hideNonDialogContentFromAssistiveTechnology(f)
                }
                ) : this._hideNonDialogContentFromAssistiveTechnology(f)
            }
            return this._attachDialogContent(e, u, d, n),
            this.openDialogs.push(u),
            u.closed.subscribe( () => this._removeOpenDialog(u, !0)),
            this.afterOpened.next(u),
            u
        }
        closeAll() {
            il(this.openDialogs, e => e.close())
        }
        getDialogById(e) {
            return this.openDialogs.find(n => n.id === e)
        }
        ngOnDestroy() {
            il(this._openDialogsAtThisLevel, e => {
                e.config.closeOnDestroy === !1 && this._removeOpenDialog(e, !1)
            }
            ),
            il(this._openDialogsAtThisLevel, e => e.close()),
            this._afterAllClosedAtThisLevel.complete(),
            this._afterOpenedAtThisLevel.complete(),
            this._openDialogsAtThisLevel = []
        }
        _getOverlayConfig(e) {
            let n = new yn({
                positionStrategy: e.positionStrategy || En().centerHorizontally().centerVertically(),
                scrollStrategy: e.scrollStrategy || this._scrollStrategy(),
                panelClass: e.panelClass,
                hasBackdrop: e.hasBackdrop,
                direction: e.direction,
                minWidth: e.minWidth,
                minHeight: e.minHeight,
                maxWidth: e.maxWidth,
                maxHeight: e.maxHeight,
                width: e.width,
                height: e.height,
                disposeOnNavigation: e.closeOnNavigation,
                disableAnimations: e.disableAnimations
            });
            return e.backdropClass && (n.backdropClass = e.backdropClass),
            n
        }
        _attachContainer(e, n, r) {
            let o = r.injector || r.viewContainerRef?.injector, l = [{
                provide: he,
                useValue: r
            }, {
                provide: Ci,
                useValue: n
            }, {
                provide: vn,
                useValue: e
            }], u;
            r.container ? typeof r.container == "function" ? u = r.container : (u = r.container.type,
            l.push(...r.container.providers(r))) : u = rl;
            let d = new mn(u,r.viewContainerRef,rt.create({
                parent: o || this._injector,
                providers: l
            }));
            return e.attach(d).instance
        }
        _attachDialogContent(e, n, r, o) {
            if (e instanceof Un) {
                let l = this._createInjector(o, n, r, void 0)
                  , u = {
                    $implicit: o.data,
                    dialogRef: n
                };
                o.templateContext && (u = bt(bt({}, u), typeof o.templateContext == "function" ? o.templateContext() : o.templateContext)),
                r.attachTemplatePortal(new gn(e,null,u,l))
            } else {
                let l = this._createInjector(o, n, r, this._injector)
                  , u = r.attachComponentPortal(new mn(e,o.viewContainerRef,l));
                n.componentRef = u,
                n.componentInstance = u.instance
            }
        }
        _createInjector(e, n, r, o) {
            let l = e.injector || e.viewContainerRef?.injector
              , u = [{
                provide: Em,
                useValue: e.data
            }, {
                provide: Ci,
                useValue: n
            }];
            return e.providers && (typeof e.providers == "function" ? u.push(...e.providers(n, e, r)) : u.push(...e.providers)),
            e.direction && (!l || !l.get(we, null, {
                optional: !0
            })) && u.push({
                provide: we,
                useValue: Im(e.direction)
            }),
            rt.create({
                parent: l || o,
                providers: u
            })
        }
        _removeOpenDialog(e, n) {
            let r = this.openDialogs.indexOf(e);
            r > -1 && (this.openDialogs.splice(r, 1),
            this.openDialogs.length || (this._ariaHiddenElements.forEach( (o, l) => {
                o ? l.setAttribute("aria-hidden", o) : l.removeAttribute("aria-hidden")
            }
            ),
            this._ariaHiddenElements.clear(),
            n && this._getAfterAllClosed().next()))
        }
        _hideNonDialogContentFromAssistiveTechnology(e) {
            if (e.parentElement) {
                let n = e.parentElement.children;
                for (let r = n.length - 1; r > -1; r--) {
                    let o = n[r];
                    o !== e && o.nodeName !== "SCRIPT" && o.nodeName !== "STYLE" && !o.hasAttribute("aria-live") && (this._ariaHiddenElements.set(o, o.getAttribute("aria-hidden")),
                    o.setAttribute("aria-hidden", "true"))
                }
            }
        }
        _getAfterAllClosed() {
            let e = this._parentDialog;
            return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel
        }
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275prov = wt({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
    }
    return i
}
)();
function il(i, t) {
    let e = i.length;
    for (; e--; )
        t(i[e])
}
var wd = ( () => {
    class i {
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275mod = Vt({
            type: i
        });
        static \u0275inj = xt({
            providers: [sl],
            imports: [Ai, Re, Wc, Re]
        })
    }
    return i
}
)();
function bm(i, t) {}
var Di = class {
    viewContainerRef;
    injector;
    id;
    role = "dialog";
    panelClass = "";
    hasBackdrop = !0;
    backdropClass = "";
    disableClose = !1;
    closePredicate;
    width = "";
    height = "";
    minWidth;
    minHeight;
    maxWidth;
    maxHeight;
    position;
    data = null;
    direction;
    ariaDescribedBy = null;
    ariaLabelledBy = null;
    ariaLabel = null;
    ariaModal = !1;
    autoFocus = "first-tabbable";
    restoreFocus = !0;
    delayFocusTrap = !0;
    scrollStrategy;
    closeOnNavigation = !0;
    enterAnimationDuration;
    exitAnimationDuration
}
  , ol = "mdc-dialog--open"
  , Ed = "mdc-dialog--opening"
  , Td = "mdc-dialog--closing"
  , Sm = 150
  , Am = 75
  , Sd = ( () => {
    class i extends rl {
        _animationStateChanged = new ge;
        _animationsEnabled = !Ws();
        _actionSectionCount = 0;
        _hostElement = this._elementRef.nativeElement;
        _enterAnimationDuration = this._animationsEnabled ? bd(this._config.enterAnimationDuration) ?? Sm : 0;
        _exitAnimationDuration = this._animationsEnabled ? bd(this._config.exitAnimationDuration) ?? Am : 0;
        _animationTimer = null;
        _contentAttached() {
            super._contentAttached(),
            this._startOpenAnimation()
        }
        _startOpenAnimation() {
            this._animationStateChanged.emit({
                state: "opening",
                totalTime: this._enterAnimationDuration
            }),
            this._animationsEnabled ? (this._hostElement.style.setProperty(Id, `${this._enterAnimationDuration}ms`),
            this._requestAnimationFrame( () => this._hostElement.classList.add(Ed, ol)),
            this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen)) : (this._hostElement.classList.add(ol),
            Promise.resolve().then( () => this._finishDialogOpen()))
        }
        _startExitAnimation() {
            this._animationStateChanged.emit({
                state: "closing",
                totalTime: this._exitAnimationDuration
            }),
            this._hostElement.classList.remove(ol),
            this._animationsEnabled ? (this._hostElement.style.setProperty(Id, `${this._exitAnimationDuration}ms`),
            this._requestAnimationFrame( () => this._hostElement.classList.add(Td)),
            this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose)) : Promise.resolve().then( () => this._finishDialogClose())
        }
        _updateActionSectionCount(e) {
            this._actionSectionCount += e,
            this._changeDetectorRef.markForCheck()
        }
        _finishDialogOpen = () => {
            this._clearAnimationClasses(),
            this._openAnimationDone(this._enterAnimationDuration)
        }
        ;
        _finishDialogClose = () => {
            this._clearAnimationClasses(),
            this._animationStateChanged.emit({
                state: "closed",
                totalTime: this._exitAnimationDuration
            })
        }
        ;
        _clearAnimationClasses() {
            this._hostElement.classList.remove(Ed, Td)
        }
        _waitForAnimationToComplete(e, n) {
            this._animationTimer !== null && clearTimeout(this._animationTimer),
            this._animationTimer = setTimeout(n, e)
        }
        _requestAnimationFrame(e) {
            this._ngZone.runOutsideAngular( () => {
                typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e()
            }
            )
        }
        _captureInitialFocus() {
            this._config.delayFocusTrap || this._trapFocus()
        }
        _openAnimationDone(e) {
            this._config.delayFocusTrap && this._trapFocus(),
            this._animationStateChanged.next({
                state: "opened",
                totalTime: e
            })
        }
        ngOnDestroy() {
            super.ngOnDestroy(),
            this._animationTimer !== null && clearTimeout(this._animationTimer)
        }
        attachComponentPortal(e) {
            let n = super.attachComponentPortal(e);
            return n.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),
            n
        }
        static \u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = se(i)))(r || i)
            }
        }
        )();
        static \u0275cmp = ye({
            type: i,
            selectors: [["mat-dialog-container"]],
            hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
            hostVars: 10,
            hostBindings: function(n, r) {
                n & 2 && (Fs("id", r._config.id),
                $n("aria-modal", r._config.ariaModal)("role", r._config.role)("aria-labelledby", r._config.ariaLabel ? null : r._ariaLabelledByQueue[0])("aria-label", r._config.ariaLabel)("aria-describedby", r._config.ariaDescribedBy || null),
                tr("_mat-animation-noopable", !r._animationsEnabled)("mat-mdc-dialog-container-with-actions", r._actionSectionCount > 0))
            },
            features: [Kt],
            decls: 3,
            vars: 0,
            consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
            template: function(n, r) {
                n & 1 && (mc(0, "div", 0)(1, "div", 1),
                Zi(2, bm, 0, 0, "ng-template", 2),
                gc()())
            },
            dependencies: [Ii],
            styles: [`.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}
`],
            encapsulation: 2
        })
    }
    return i
}
)()
  , Id = "--mat-dialog-transition-duration";
function bd(i) {
    return i == null ? null : typeof i == "number" ? i : i.endsWith("ms") ? nr(i.substring(0, i.length - 2)) : i.endsWith("s") ? nr(i.substring(0, i.length - 1)) * 1e3 : i === "0" ? 0 : null
}
var Ri = (function(i) {
    return i[i.OPEN = 0] = "OPEN",
    i[i.CLOSING = 1] = "CLOSING",
    i[i.CLOSED = 2] = "CLOSED",
    i
}
)(Ri || {})
  , Tn = class {
    _ref;
    _config;
    _containerInstance;
    componentInstance;
    componentRef;
    disableClose;
    id;
    _afterOpened = new tt;
    _beforeClosed = new tt;
    _result;
    _closeFallbackTimeout;
    _state = Ri.OPEN;
    _closeInteractionType;
    constructor(t, e, n) {
        this._ref = t,
        this._config = e,
        this._containerInstance = n,
        this.disableClose = e.disableClose,
        this.id = t.id,
        t.addPanelClass("mat-mdc-dialog-panel"),
        n._animationStateChanged.pipe(Gt(r => r.state === "opened"), Oe(1)).subscribe( () => {
            this._afterOpened.next(),
            this._afterOpened.complete()
        }
        ),
        n._animationStateChanged.pipe(Gt(r => r.state === "closed"), Oe(1)).subscribe( () => {
            clearTimeout(this._closeFallbackTimeout),
            this._finishDialogClose()
        }
        ),
        t.overlayRef.detachments().subscribe( () => {
            this._beforeClosed.next(this._result),
            this._beforeClosed.complete(),
            this._finishDialogClose()
        }
        ),
        hc(this.backdropClick(), this.keydownEvents().pipe(Gt(r => r.keyCode === 27 && !this.disableClose && !ir(r)))).subscribe(r => {
            this.disableClose || (r.preventDefault(),
            al(this, r.type === "keydown" ? "keyboard" : "mouse"))
        }
        )
    }
    close(t) {
        let e = this._config.closePredicate;
        e && !e(t, this._config, this.componentInstance) || (this._result = t,
        this._containerInstance._animationStateChanged.pipe(Gt(n => n.state === "closing"), Oe(1)).subscribe(n => {
            this._beforeClosed.next(t),
            this._beforeClosed.complete(),
            this._ref.overlayRef.detachBackdrop(),
            this._closeFallbackTimeout = setTimeout( () => this._finishDialogClose(), n.totalTime + 100)
        }
        ),
        this._state = Ri.CLOSING,
        this._containerInstance._startExitAnimation())
    }
    afterOpened() {
        return this._afterOpened
    }
    afterClosed() {
        return this._ref.closed
    }
    beforeClosed() {
        return this._beforeClosed
    }
    backdropClick() {
        return this._ref.backdropClick
    }
    keydownEvents() {
        return this._ref.keydownEvents
    }
    updatePosition(t) {
        let e = this._ref.config.positionStrategy;
        return t && (t.left || t.right) ? t.left ? e.left(t.left) : e.right(t.right) : e.centerHorizontally(),
        t && (t.top || t.bottom) ? t.top ? e.top(t.top) : e.bottom(t.bottom) : e.centerVertically(),
        this._ref.updatePosition(),
        this
    }
    updateSize(t="", e="") {
        return this._ref.updateSize(t, e),
        this
    }
    addPanelClass(t) {
        return this._ref.addPanelClass(t),
        this
    }
    removePanelClass(t) {
        return this._ref.removePanelClass(t),
        this
    }
    getState() {
        return this._state
    }
    _finishDialogClose() {
        this._state = Ri.CLOSED,
        this._ref.close(this._result, {
            focusOrigin: this._closeInteractionType
        }),
        this.componentInstance = null
    }
}
;
function al(i, t, e) {
    return i._closeInteractionType = t,
    i.close(e)
}
var Ad = new St("MatMdcDialogData")
  , Cd = new St("mat-mdc-dialog-default-options")
  , Rd = new St("mat-mdc-dialog-scroll-strategy",{
    providedIn: "root",
    factory: () => {
        let i = x(rt);
        return () => wn(i)
    }
})
  , os = ( () => {
    class i {
        _defaultOptions = x(Cd, {
            optional: !0
        });
        _scrollStrategy = x(Rd);
        _parentDialog = x(i, {
            optional: !0,
            skipSelf: !0
        });
        _idGenerator = x(ve);
        _injector = x(rt);
        _dialog = x(sl);
        _animationsDisabled = Ws();
        _openDialogsAtThisLevel = [];
        _afterAllClosedAtThisLevel = new tt;
        _afterOpenedAtThisLevel = new tt;
        dialogConfigClass = Di;
        _dialogRefConstructor;
        _dialogContainerType;
        _dialogDataToken;
        get openDialogs() {
            return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel
        }
        get afterOpened() {
            return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel
        }
        _getAfterAllClosed() {
            let e = this._parentDialog;
            return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel
        }
        afterAllClosed = Qi( () => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(zn(void 0)));
        constructor() {
            this._dialogRefConstructor = Tn,
            this._dialogContainerType = Sd,
            this._dialogDataToken = Ad
        }
        open(e, n) {
            let r;
            n = bt(bt({}, this._defaultOptions || new Di), n),
            n.id = n.id || this._idGenerator.getId("mat-mdc-dialog-"),
            n.scrollStrategy = n.scrollStrategy || this._scrollStrategy();
            let o = this._dialog.open(e, Wi(bt({}, n), {
                positionStrategy: En(this._injector).centerHorizontally().centerVertically(),
                disableClose: !0,
                closePredicate: void 0,
                closeOnDestroy: !1,
                closeOnOverlayDetachments: !1,
                disableAnimations: this._animationsDisabled || n.enterAnimationDuration?.toLocaleString() === "0" || n.exitAnimationDuration?.toString() === "0",
                container: {
                    type: this._dialogContainerType,
                    providers: () => [{
                        provide: this.dialogConfigClass,
                        useValue: n
                    }, {
                        provide: he,
                        useValue: n
                    }]
                },
                templateContext: () => ({
                    dialogRef: r
                }),
                providers: (l, u, d) => (r = new this._dialogRefConstructor(l,n,d),
                r.updatePosition(n?.position),
                [{
                    provide: this._dialogContainerType,
                    useValue: d
                }, {
                    provide: this._dialogDataToken,
                    useValue: u.data
                }, {
                    provide: this._dialogRefConstructor,
                    useValue: r
                }])
            }));
            return r.componentRef = o.componentRef,
            r.componentInstance = o.componentInstance,
            this.openDialogs.push(r),
            this.afterOpened.next(r),
            r.afterClosed().subscribe( () => {
                let l = this.openDialogs.indexOf(r);
                l > -1 && (this.openDialogs.splice(l, 1),
                this.openDialogs.length || this._getAfterAllClosed().next())
            }
            ),
            r
        }
        closeAll() {
            this._closeDialogs(this.openDialogs)
        }
        getDialogById(e) {
            return this.openDialogs.find(n => n.id === e)
        }
        ngOnDestroy() {
            this._closeDialogs(this._openDialogsAtThisLevel),
            this._afterAllClosedAtThisLevel.complete(),
            this._afterOpenedAtThisLevel.complete()
        }
        _closeDialogs(e) {
            let n = e.length;
            for (; n--; )
                e[n].close()
        }
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275prov = wt({
            token: i,
            factory: i.\u0275fac,
            providedIn: "root"
        })
    }
    return i
}
)()
  , Cm = ( () => {
    class i {
        dialogRef = x(Tn, {
            optional: !0
        });
        _elementRef = x(kt);
        _dialog = x(os);
        ariaLabel;
        type = "button";
        dialogResult;
        _matDialogClose;
        constructor() {}
        ngOnInit() {
            this.dialogRef || (this.dialogRef = Pd(this._elementRef, this._dialog.openDialogs))
        }
        ngOnChanges(e) {
            let n = e._matDialogClose || e._matDialogCloseResult;
            n && (this.dialogResult = n.currentValue)
        }
        _onButtonClick(e) {
            al(this.dialogRef, e.screenX === 0 && e.screenY === 0 ? "keyboard" : "mouse", this.dialogResult)
        }
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275dir = Ot({
            type: i,
            selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
            hostVars: 2,
            hostBindings: function(n, r) {
                n & 1 && _c("click", function(l) {
                    return r._onButtonClick(l)
                }),
                n & 2 && $n("aria-label", r.ariaLabel || null)("type", r.type)
            },
            inputs: {
                ariaLabel: [0, "aria-label", "ariaLabel"],
                type: "type",
                dialogResult: [0, "mat-dialog-close", "dialogResult"],
                _matDialogClose: [0, "matDialogClose", "_matDialogClose"]
            },
            exportAs: ["matDialogClose"],
            features: [Yi]
        })
    }
    return i
}
)()
  , Dd = ( () => {
    class i {
        _dialogRef = x(Tn, {
            optional: !0
        });
        _elementRef = x(kt);
        _dialog = x(os);
        constructor() {}
        ngOnInit() {
            this._dialogRef || (this._dialogRef = Pd(this._elementRef, this._dialog.openDialogs)),
            this._dialogRef && Promise.resolve().then( () => {
                this._onAdd()
            }
            )
        }
        ngOnDestroy() {
            this._dialogRef?._containerInstance && Promise.resolve().then( () => {
                this._onRemove()
            }
            )
        }
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275dir = Ot({
            type: i
        })
    }
    return i
}
)()
  , Rm = ( () => {
    class i extends Dd {
        id = x(ve).getId("mat-mdc-dialog-title-");
        _onAdd() {
            this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)
        }
        _onRemove() {
            this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)
        }
        static \u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = se(i)))(r || i)
            }
        }
        )();
        static \u0275dir = Ot({
            type: i,
            selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
            hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
            hostVars: 1,
            hostBindings: function(n, r) {
                n & 2 && Fs("id", r.id)
            },
            inputs: {
                id: "id"
            },
            exportAs: ["matDialogTitle"],
            features: [Kt]
        })
    }
    return i
}
)()
  , Dm = ( () => {
    class i {
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275dir = Ot({
            type: i,
            selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
            hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
            features: [pc([nd])]
        })
    }
    return i
}
)()
  , Pm = ( () => {
    class i extends Dd {
        align;
        _onAdd() {
            this._dialogRef._containerInstance?._updateActionSectionCount?.(1)
        }
        _onRemove() {
            this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)
        }
        static \u0275fac = ( () => {
            let e;
            return function(r) {
                return (e || (e = se(i)))(r || i)
            }
        }
        )();
        static \u0275dir = Ot({
            type: i,
            selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
            hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
            hostVars: 6,
            hostBindings: function(n, r) {
                n & 2 && tr("mat-mdc-dialog-actions-align-start", r.align === "start")("mat-mdc-dialog-actions-align-center", r.align === "center")("mat-mdc-dialog-actions-align-end", r.align === "end")
            },
            inputs: {
                align: "align"
            },
            features: [Kt]
        })
    }
    return i
}
)();
function Pd(i, t) {
    let e = i.nativeElement.parentElement;
    for (; e && !e.classList.contains("mat-mdc-dialog-container"); )
        e = e.parentElement;
    return e ? t.find(n => n.id === e.id) : null
}
var xm = ( () => {
    class i {
        static \u0275fac = function(n) {
            return new (n || i)
        }
        ;
        static \u0275mod = Vt({
            type: i
        });
        static \u0275inj = xt({
            providers: [os],
            imports: [wd, Ai, Re, Hs, Hs]
        })
    }
    return i
}
)();
export {Ei as a, c_ as b, u_ as c, h_ as d, d_ as e, f_ as f, Di as g, Ad as h, Cd as i, os as j, Cm as k, Rm as l, Dm as m, Pm as n, xm as o};
