/*! For license information please see main.bundle.js.LICENSE.txt */ ! function() { "use strict"; var t = { d: function(e, i) { for (var n in i) t.o(i, n) && !t.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: i[n] }) }, o: function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r: function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) } },
        e = {};
    t.r(e), t.d(e, { afterMain: function() { return w }, afterRead: function() { return b }, afterWrite: function() { return T }, applyStyles: function() { return S }, arrow: function() { return Y }, auto: function() { return r }, basePlacements: function() { return a }, beforeMain: function() { return v }, beforeRead: function() { return m }, beforeWrite: function() { return A }, bottom: function() { return n }, clippingParents: function() { return u }, computeStyles: function() { return Z }, createPopper: function() { return kt }, createPopperBase: function() { return xt }, createPopperLite: function() { return Lt }, detectOverflow: function() { return pt }, end: function() { return c }, eventListeners: function() { return et }, flip: function() { return gt }, hide: function() { return bt }, left: function() { return o }, main: function() { return y }, modifierPhases: function() { return C }, offset: function() { return vt }, placements: function() { return g }, popper: function() { return d }, popperGenerator: function() { return Ot }, popperOffsets: function() { return yt }, preventOverflow: function() { return wt }, read: function() { return _ }, reference: function() { return f }, right: function() { return s }, start: function() { return l }, top: function() { return i }, variationPlacements: function() { return p }, viewport: function() { return h }, write: function() { return E } }); var i = "top",
        n = "bottom",
        s = "right",
        o = "left",
        r = "auto",
        a = [i, n, s, o],
        l = "start",
        c = "end",
        u = "clippingParents",
        h = "viewport",
        d = "popper",
        f = "reference",
        p = a.reduce((function(t, e) { return t.concat([e + "-" + l, e + "-" + c]) }), []),
        g = [].concat(a, [r]).reduce((function(t, e) { return t.concat([e, e + "-" + l, e + "-" + c]) }), []),
        m = "beforeRead",
        _ = "read",
        b = "afterRead",
        v = "beforeMain",
        y = "main",
        w = "afterMain",
        A = "beforeWrite",
        E = "write",
        T = "afterWrite",
        C = [m, _, b, v, y, w, A, E, T];

    function O(t) { return t ? (t.nodeName || "").toLowerCase() : null }

    function x(t) { if (null == t) return window; if ("[object Window]" !== t.toString()) { var e = t.ownerDocument; return e && e.defaultView || window } return t }

    function k(t) { return t instanceof x(t).Element || t instanceof Element }

    function L(t) { return t instanceof x(t).HTMLElement || t instanceof HTMLElement }

    function D(t) { return "undefined" != typeof ShadowRoot && (t instanceof x(t).ShadowRoot || t instanceof ShadowRoot) } var S = { name: "applyStyles", enabled: !0, phase: "write", fn: function(t) { var e = t.state;
            Object.keys(e.elements).forEach((function(t) { var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                L(s) && O(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function(t) { var e = n[t];!1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e) }))) })) }, effect: function(t) { var e = t.state,
                i = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }; return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                function() { Object.keys(e.elements).forEach((function(t) { var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) { return t[e] = "", t }), {});
                        L(n) && O(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function(t) { n.removeAttribute(t) }))) })) } }, requires: ["computeStyles"] };

    function I(t) { return t.split("-")[0] } var N = Math.max,
        P = Math.min,
        j = Math.round;

    function M(t, e) { void 0 === e && (e = !1); var i = t.getBoundingClientRect(),
            n = 1,
            s = 1; if (L(t) && e) { var o = t.offsetHeight,
                r = t.offsetWidth;
            r > 0 && (n = j(i.width) / r || 1), o > 0 && (s = j(i.height) / o || 1) } return { width: i.width / n, height: i.height / s, top: i.top / s, right: i.right / n, bottom: i.bottom / s, left: i.left / n, x: i.left / n, y: i.top / s } }

    function H(t) { var e = M(t),
            i = t.offsetWidth,
            n = t.offsetHeight; return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), { x: t.offsetLeft, y: t.offsetTop, width: i, height: n } }

    function $(t, e) { var i = e.getRootNode && e.getRootNode(); if (t.contains(e)) return !0; if (i && D(i)) { var n = e;
            do { if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host } while (n) } return !1 }

    function W(t) { return x(t).getComputedStyle(t) }

    function B(t) { return ["table", "td", "th"].indexOf(O(t)) >= 0 }

    function F(t) { return ((k(t) ? t.ownerDocument : t.document) || window.document).documentElement }

    function q(t) { return "html" === O(t) ? t : t.assignedSlot || t.parentNode || (D(t) ? t.host : null) || F(t) }

    function z(t) { return L(t) && "fixed" !== W(t).position ? t.offsetParent : null }

    function R(t) { for (var e = x(t), i = z(t); i && B(i) && "static" === W(i).position;) i = z(i); return i && ("html" === O(i) || "body" === O(i) && "static" === W(i).position) ? e : i || function(t) { var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"); if (-1 !== navigator.userAgent.indexOf("Trident") && L(t) && "fixed" === W(t).position) return null; var i = q(t); for (D(i) && (i = i.host); L(i) && ["html", "body"].indexOf(O(i)) < 0;) { var n = W(i); if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode } return null }(t) || e }

    function V(t) { return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y" }

    function K(t, e, i) { return N(t, P(e, i)) }

    function Q(t) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t) }

    function X(t, e) { return e.reduce((function(e, i) { return e[i] = t, e }), {}) } var Y = { name: "arrow", enabled: !0, phase: "main", fn: function(t) { var e, r = t.state,
                l = t.name,
                c = t.options,
                u = r.elements.arrow,
                h = r.modifiersData.popperOffsets,
                d = I(r.placement),
                f = V(d),
                p = [o, s].indexOf(d) >= 0 ? "height" : "width"; if (u && h) { var g = function(t, e) { return Q("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, { placement: e.placement })) : t) ? t : X(t, a)) }(c.padding, r),
                    m = H(u),
                    _ = "y" === f ? i : o,
                    b = "y" === f ? n : s,
                    v = r.rects.reference[p] + r.rects.reference[f] - h[f] - r.rects.popper[p],
                    y = h[f] - r.rects.reference[f],
                    w = R(u),
                    A = w ? "y" === f ? w.clientHeight || 0 : w.clientWidth || 0 : 0,
                    E = v / 2 - y / 2,
                    T = g[_],
                    C = A - m[p] - g[b],
                    O = A / 2 - m[p] / 2 + E,
                    x = K(T, O, C),
                    k = f;
                r.modifiersData[l] = ((e = {})[k] = x, e.centerOffset = x - O, e) } }, effect: function(t) { var e = t.state,
                i = t.options.element,
                n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && $(e.elements.popper, n) && (e.elements.arrow = n) }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };

    function U(t) { return t.split("-")[1] } var G = { top: "auto", right: "auto", bottom: "auto", left: "auto" };

    function J(t) { var e, r = t.popper,
            a = t.popperRect,
            l = t.placement,
            u = t.variation,
            h = t.offsets,
            d = t.position,
            f = t.gpuAcceleration,
            p = t.adaptive,
            g = t.roundOffsets,
            m = t.isFixed,
            _ = h.x,
            b = void 0 === _ ? 0 : _,
            v = h.y,
            y = void 0 === v ? 0 : v,
            w = "function" == typeof g ? g({ x: b, y: y }) : { x: b, y: y };
        b = w.x, y = w.y; var A = h.hasOwnProperty("x"),
            E = h.hasOwnProperty("y"),
            T = o,
            C = i,
            O = window; if (p) { var k = R(r),
                L = "clientHeight",
                D = "clientWidth";
            k === x(r) && "static" !== W(k = F(r)).position && "absolute" === d && (L = "scrollHeight", D = "scrollWidth"), (l === i || (l === o || l === s) && u === c) && (C = n, y -= (m && k === O && O.visualViewport ? O.visualViewport.height : k[L]) - a.height, y *= f ? 1 : -1), l !== o && (l !== i && l !== n || u !== c) || (T = s, b -= (m && k === O && O.visualViewport ? O.visualViewport.width : k[D]) - a.width, b *= f ? 1 : -1) } var S, I = Object.assign({ position: d }, p && G),
            N = !0 === g ? function(t) { var e = t.x,
                    i = t.y,
                    n = window.devicePixelRatio || 1; return { x: j(e * n) / n || 0, y: j(i * n) / n || 0 } }({ x: b, y: y }) : { x: b, y: y }; return b = N.x, y = N.y, f ? Object.assign({}, I, ((S = {})[C] = E ? "0" : "", S[T] = A ? "0" : "", S.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + y + "px)" : "translate3d(" + b + "px, " + y + "px, 0)", S)) : Object.assign({}, I, ((e = {})[C] = E ? y + "px" : "", e[T] = A ? b + "px" : "", e.transform = "", e)) } var Z = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function(t) { var e = t.state,
                    i = t.options,
                    n = i.gpuAcceleration,
                    s = void 0 === n || n,
                    o = i.adaptive,
                    r = void 0 === o || o,
                    a = i.roundOffsets,
                    l = void 0 === a || a,
                    c = { placement: I(e.placement), variation: U(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: s, isFixed: "fixed" === e.options.strategy };
                null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, J(Object.assign({}, c, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: r, roundOffsets: l })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, J(Object.assign({}, c, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement }) }, data: {} },
        tt = { passive: !0 },
        et = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {}, effect: function(t) { var e = t.state,
                    i = t.instance,
                    n = t.options,
                    s = n.scroll,
                    o = void 0 === s || s,
                    r = n.resize,
                    a = void 0 === r || r,
                    l = x(e.elements.popper),
                    c = [].concat(e.scrollParents.reference, e.scrollParents.popper); return o && c.forEach((function(t) { t.addEventListener("scroll", i.update, tt) })), a && l.addEventListener("resize", i.update, tt),
                    function() { o && c.forEach((function(t) { t.removeEventListener("scroll", i.update, tt) })), a && l.removeEventListener("resize", i.update, tt) } }, data: {} },
        it = { left: "right", right: "left", bottom: "top", top: "bottom" };

    function nt(t) { return t.replace(/left|right|bottom|top/g, (function(t) { return it[t] })) } var st = { start: "end", end: "start" };

    function ot(t) { return t.replace(/start|end/g, (function(t) { return st[t] })) }

    function rt(t) { var e = x(t); return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset } }

    function at(t) { return M(F(t)).left + rt(t).scrollLeft }

    function lt(t) { var e = W(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY; return /auto|scroll|overlay|hidden/.test(i + s + n) }

    function ct(t) { return ["html", "body", "#document"].indexOf(O(t)) >= 0 ? t.ownerDocument.body : L(t) && lt(t) ? t : ct(q(t)) }

    function ut(t, e) { var i;
        void 0 === e && (e = []); var n = ct(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = x(n),
            r = s ? [o].concat(o.visualViewport || [], lt(n) ? n : []) : n,
            a = e.concat(r); return s ? a : a.concat(ut(q(r))) }

    function ht(t) { return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height }) }

    function dt(t, e) { return e === h ? ht(function(t) { var e = x(t),
                i = F(t),
                n = e.visualViewport,
                s = i.clientWidth,
                o = i.clientHeight,
                r = 0,
                a = 0; return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), { width: s, height: o, x: r + at(t), y: a } }(t)) : k(e) ? function(t) { var e = M(t); return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e }(e) : ht(function(t) { var e, i = F(t),
                n = rt(t),
                s = null == (e = t.ownerDocument) ? void 0 : e.body,
                o = N(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                r = N(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                a = -n.scrollLeft + at(t),
                l = -n.scrollTop; return "rtl" === W(s || i).direction && (a += N(i.clientWidth, s ? s.clientWidth : 0) - o), { width: o, height: r, x: a, y: l } }(F(t))) }

    function ft(t) { var e, r = t.reference,
            a = t.element,
            u = t.placement,
            h = u ? I(u) : null,
            d = u ? U(u) : null,
            f = r.x + r.width / 2 - a.width / 2,
            p = r.y + r.height / 2 - a.height / 2; switch (h) {
            case i:
                e = { x: f, y: r.y - a.height }; break;
            case n:
                e = { x: f, y: r.y + r.height }; break;
            case s:
                e = { x: r.x + r.width, y: p }; break;
            case o:
                e = { x: r.x - a.width, y: p }; break;
            default:
                e = { x: r.x, y: r.y } } var g = h ? V(h) : null; if (null != g) { var m = "y" === g ? "height" : "width"; switch (d) {
                case l:
                    e[g] = e[g] - (r[m] / 2 - a[m] / 2); break;
                case c:
                    e[g] = e[g] + (r[m] / 2 - a[m] / 2) } } return e }

    function pt(t, e) { void 0 === e && (e = {}); var o = e,
            r = o.placement,
            l = void 0 === r ? t.placement : r,
            c = o.boundary,
            p = void 0 === c ? u : c,
            g = o.rootBoundary,
            m = void 0 === g ? h : g,
            _ = o.elementContext,
            b = void 0 === _ ? d : _,
            v = o.altBoundary,
            y = void 0 !== v && v,
            w = o.padding,
            A = void 0 === w ? 0 : w,
            E = Q("number" != typeof A ? A : X(A, a)),
            T = b === d ? f : d,
            C = t.rects.popper,
            x = t.elements[y ? T : b],
            D = function(t, e, i) { var n = "clippingParents" === e ? function(t) { var e = ut(q(t)),
                            i = ["absolute", "fixed"].indexOf(W(t).position) >= 0 && L(t) ? R(t) : t; return k(i) ? e.filter((function(t) { return k(t) && $(t, i) && "body" !== O(t) })) : [] }(t) : [].concat(e),
                    s = [].concat(n, [i]),
                    o = s[0],
                    r = s.reduce((function(e, i) { var n = dt(t, i); return e.top = N(n.top, e.top), e.right = P(n.right, e.right), e.bottom = P(n.bottom, e.bottom), e.left = N(n.left, e.left), e }), dt(t, o)); return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r }(k(x) ? x : x.contextElement || F(t.elements.popper), p, m),
            S = M(t.elements.reference),
            I = ft({ reference: S, element: C, strategy: "absolute", placement: l }),
            j = ht(Object.assign({}, C, I)),
            H = b === d ? j : S,
            B = { top: D.top - H.top + E.top, bottom: H.bottom - D.bottom + E.bottom, left: D.left - H.left + E.left, right: H.right - D.right + E.right },
            z = t.modifiersData.offset; if (b === d && z) { var V = z[l];
            Object.keys(B).forEach((function(t) { var e = [s, n].indexOf(t) >= 0 ? 1 : -1,
                    o = [i, n].indexOf(t) >= 0 ? "y" : "x";
                B[t] += V[o] * e })) } return B } var gt = { name: "flip", enabled: !0, phase: "main", fn: function(t) { var e = t.state,
                c = t.options,
                u = t.name; if (!e.modifiersData[u]._skip) { for (var h = c.mainAxis, d = void 0 === h || h, f = c.altAxis, m = void 0 === f || f, _ = c.fallbackPlacements, b = c.padding, v = c.boundary, y = c.rootBoundary, w = c.altBoundary, A = c.flipVariations, E = void 0 === A || A, T = c.allowedAutoPlacements, C = e.options.placement, O = I(C), x = _ || (O !== C && E ? function(t) { if (I(t) === r) return []; var e = nt(t); return [ot(t), e, ot(e)] }(C) : [nt(C)]), k = [C].concat(x).reduce((function(t, i) { return t.concat(I(i) === r ? function(t, e) { void 0 === e && (e = {}); var i = e,
                                n = i.placement,
                                s = i.boundary,
                                o = i.rootBoundary,
                                r = i.padding,
                                l = i.flipVariations,
                                c = i.allowedAutoPlacements,
                                u = void 0 === c ? g : c,
                                h = U(n),
                                d = h ? l ? p : p.filter((function(t) { return U(t) === h })) : a,
                                f = d.filter((function(t) { return u.indexOf(t) >= 0 }));
                            0 === f.length && (f = d); var m = f.reduce((function(e, i) { return e[i] = pt(t, { placement: i, boundary: s, rootBoundary: o, padding: r })[I(i)], e }), {}); return Object.keys(m).sort((function(t, e) { return m[t] - m[e] })) }(e, { placement: i, boundary: v, rootBoundary: y, padding: b, flipVariations: E, allowedAutoPlacements: T }) : i) }), []), L = e.rects.reference, D = e.rects.popper, S = new Map, N = !0, P = k[0], j = 0; j < k.length; j++) { var M = k[j],
                        H = I(M),
                        $ = U(M) === l,
                        W = [i, n].indexOf(H) >= 0,
                        B = W ? "width" : "height",
                        F = pt(e, { placement: M, boundary: v, rootBoundary: y, altBoundary: w, padding: b }),
                        q = W ? $ ? s : o : $ ? n : i;
                    L[B] > D[B] && (q = nt(q)); var z = nt(q),
                        R = []; if (d && R.push(F[H] <= 0), m && R.push(F[q] <= 0, F[z] <= 0), R.every((function(t) { return t }))) { P = M, N = !1; break }
                    S.set(M, R) } if (N)
                    for (var V = function(t) { var e = k.find((function(e) { var i = S.get(e); if (i) return i.slice(0, t).every((function(t) { return t })) })); if (e) return P = e, "break" }, K = E ? 3 : 1; K > 0 && "break" !== V(K); K--);
                e.placement !== P && (e.modifiersData[u]._skip = !0, e.placement = P, e.reset = !0) } }, requiresIfExists: ["offset"], data: { _skip: !1 } };

    function mt(t, e, i) { return void 0 === i && (i = { x: 0, y: 0 }), { top: t.top - e.height - i.y, right: t.right - e.width + i.x, bottom: t.bottom - e.height + i.y, left: t.left - e.width - i.x } }

    function _t(t) { return [i, s, n, o].some((function(e) { return t[e] >= 0 })) } var bt = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t) { var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = pt(e, { elementContext: "reference" }),
                    a = pt(e, { altBoundary: !0 }),
                    l = mt(r, n),
                    c = mt(a, s, o),
                    u = _t(l),
                    h = _t(c);
                e.modifiersData[i] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: h }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": h }) } },
        vt = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function(t) { var e = t.state,
                    n = t.options,
                    r = t.name,
                    a = n.offset,
                    l = void 0 === a ? [0, 0] : a,
                    c = g.reduce((function(t, n) { return t[n] = function(t, e, n) { var r = I(t),
                                a = [o, i].indexOf(r) >= 0 ? -1 : 1,
                                l = "function" == typeof n ? n(Object.assign({}, e, { placement: t })) : n,
                                c = l[0],
                                u = l[1]; return c = c || 0, u = (u || 0) * a, [o, s].indexOf(r) >= 0 ? { x: u, y: c } : { x: c, y: u } }(n, e.rects, l), t }), {}),
                    u = c[e.placement],
                    h = u.x,
                    d = u.y;
                null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += h, e.modifiersData.popperOffsets.y += d), e.modifiersData[r] = c } },
        yt = { name: "popperOffsets", enabled: !0, phase: "read", fn: function(t) { var e = t.state,
                    i = t.name;
                e.modifiersData[i] = ft({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement }) }, data: {} },
        wt = { name: "preventOverflow", enabled: !0, phase: "main", fn: function(t) { var e = t.state,
                    r = t.options,
                    a = t.name,
                    c = r.mainAxis,
                    u = void 0 === c || c,
                    h = r.altAxis,
                    d = void 0 !== h && h,
                    f = r.boundary,
                    p = r.rootBoundary,
                    g = r.altBoundary,
                    m = r.padding,
                    _ = r.tether,
                    b = void 0 === _ || _,
                    v = r.tetherOffset,
                    y = void 0 === v ? 0 : v,
                    w = pt(e, { boundary: f, rootBoundary: p, padding: m, altBoundary: g }),
                    A = I(e.placement),
                    E = U(e.placement),
                    T = !E,
                    C = V(A),
                    O = "x" === C ? "y" : "x",
                    x = e.modifiersData.popperOffsets,
                    k = e.rects.reference,
                    L = e.rects.popper,
                    D = "function" == typeof y ? y(Object.assign({}, e.rects, { placement: e.placement })) : y,
                    S = "number" == typeof D ? { mainAxis: D, altAxis: D } : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
                    j = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                    M = { x: 0, y: 0 }; if (x) { if (u) { var $, W = "y" === C ? i : o,
                            B = "y" === C ? n : s,
                            F = "y" === C ? "height" : "width",
                            q = x[C],
                            z = q + w[W],
                            Q = q - w[B],
                            X = b ? -L[F] / 2 : 0,
                            Y = E === l ? k[F] : L[F],
                            G = E === l ? -L[F] : -k[F],
                            J = e.elements.arrow,
                            Z = b && J ? H(J) : { width: 0, height: 0 },
                            tt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                            et = tt[W],
                            it = tt[B],
                            nt = K(0, k[F], Z[F]),
                            st = T ? k[F] / 2 - X - nt - et - S.mainAxis : Y - nt - et - S.mainAxis,
                            ot = T ? -k[F] / 2 + X + nt + it + S.mainAxis : G + nt + it + S.mainAxis,
                            rt = e.elements.arrow && R(e.elements.arrow),
                            at = rt ? "y" === C ? rt.clientTop || 0 : rt.clientLeft || 0 : 0,
                            lt = null != ($ = null == j ? void 0 : j[C]) ? $ : 0,
                            ct = q + ot - lt,
                            ut = K(b ? P(z, q + st - lt - at) : z, q, b ? N(Q, ct) : Q);
                        x[C] = ut, M[C] = ut - q } if (d) { var ht, dt = "x" === C ? i : o,
                            ft = "x" === C ? n : s,
                            gt = x[O],
                            mt = "y" === O ? "height" : "width",
                            _t = gt + w[dt],
                            bt = gt - w[ft],
                            vt = -1 !== [i, o].indexOf(A),
                            yt = null != (ht = null == j ? void 0 : j[O]) ? ht : 0,
                            wt = vt ? _t : gt - k[mt] - L[mt] - yt + S.altAxis,
                            At = vt ? gt + k[mt] + L[mt] - yt - S.altAxis : bt,
                            Et = b && vt ? function(t, e, i) { var n = K(t, e, i); return n > i ? i : n }(wt, gt, At) : K(b ? wt : _t, gt, b ? At : bt);
                        x[O] = Et, M[O] = Et - gt }
                    e.modifiersData[a] = M } }, requiresIfExists: ["offset"] };

    function At(t, e, i) { void 0 === i && (i = !1); var n, s, o = L(e),
            r = L(e) && function(t) { var e = t.getBoundingClientRect(),
                    i = j(e.width) / t.offsetWidth || 1,
                    n = j(e.height) / t.offsetHeight || 1; return 1 !== i || 1 !== n }(e),
            a = F(e),
            l = M(t, r),
            c = { scrollLeft: 0, scrollTop: 0 },
            u = { x: 0, y: 0 }; return (o || !o && !i) && (("body" !== O(e) || lt(a)) && (c = (n = e) !== x(n) && L(n) ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop } : rt(n)), L(e) ? ((u = M(e, !0)).x += e.clientLeft, u.y += e.clientTop) : a && (u.x = at(a))), { x: l.left + c.scrollLeft - u.x, y: l.top + c.scrollTop - u.y, width: l.width, height: l.height } }

    function Et(t) { var e = new Map,
            i = new Set,
            n = [];

        function s(t) { i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) { if (!i.has(t)) { var n = e.get(t);
                    n && s(n) } })), n.push(t) } return t.forEach((function(t) { e.set(t.name, t) })), t.forEach((function(t) { i.has(t.name) || s(t) })), n } var Tt = { placement: "bottom", modifiers: [], strategy: "absolute" };

    function Ct() { for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]; return !e.some((function(t) { return !(t && "function" == typeof t.getBoundingClientRect) })) }

    function Ot(t) { void 0 === t && (t = {}); var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? Tt : s; return function(t, e, i) { void 0 === i && (i = o); var s, r, a = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Tt, o), modifiersData: {}, elements: { reference: t, popper: e }, attributes: {}, styles: {} },
                l = [],
                c = !1,
                u = { state: a, setOptions: function(i) { var s = "function" == typeof i ? i(a.options) : i;
                        h(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = { reference: k(t) ? ut(t) : t.contextElement ? ut(t.contextElement) : [], popper: ut(e) }; var r, c, d = function(t) { var e = Et(t); return C.reduce((function(t, i) { return t.concat(e.filter((function(t) { return t.phase === i }))) }), []) }((r = [].concat(n, a.options.modifiers), c = r.reduce((function(t, e) { var i = t[e.name]; return t[e.name] = i ? Object.assign({}, i, e, { options: Object.assign({}, i.options, e.options), data: Object.assign({}, i.data, e.data) }) : e, t }), {}), Object.keys(c).map((function(t) { return c[t] })))); return a.orderedModifiers = d.filter((function(t) { return t.enabled })), a.orderedModifiers.forEach((function(t) { var e = t.name,
                                i = t.options,
                                n = void 0 === i ? {} : i,
                                s = t.effect; if ("function" == typeof s) { var o = s({ state: a, name: e, instance: u, options: n });
                                l.push(o || function() {}) } })), u.update() }, forceUpdate: function() { if (!c) { var t = a.elements,
                                e = t.reference,
                                i = t.popper; if (Ct(e, i)) { a.rects = { reference: At(e, R(i), "fixed" === a.options.strategy), popper: H(i) }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) { return a.modifiersData[t.name] = Object.assign({}, t.data) })); for (var n = 0; n < a.orderedModifiers.length; n++)
                                    if (!0 !== a.reset) { var s = a.orderedModifiers[n],
                                            o = s.fn,
                                            r = s.options,
                                            l = void 0 === r ? {} : r,
                                            h = s.name; "function" == typeof o && (a = o({ state: a, options: l, name: h, instance: u }) || a) } else a.reset = !1, n = -1 } } }, update: (s = function() { return new Promise((function(t) { u.forceUpdate(), t(a) })) }, function() { return r || (r = new Promise((function(t) { Promise.resolve().then((function() { r = void 0, t(s()) })) }))), r }), destroy: function() { h(), c = !0 } }; if (!Ct(t, e)) return u;

            function h() { l.forEach((function(t) { return t() })), l = [] } return u.setOptions(i).then((function(t) {!c && i.onFirstUpdate && i.onFirstUpdate(t) })), u } } var xt = Ot(),
        kt = Ot({ defaultModifiers: [et, yt, Z, S, vt, gt, wt, Y, bt] }),
        Lt = Ot({ defaultModifiers: [et, yt, Z, S] }); const Dt = "transitionend",
        St = t => { let e = t.getAttribute("data-bs-target"); if (!e || "#" === e) { let i = t.getAttribute("href"); if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null } return e },
        It = t => { const e = St(t); return e && document.querySelector(e) ? e : null },
        Nt = t => { const e = St(t); return e ? document.querySelector(e) : null },
        Pt = t => { t.dispatchEvent(new Event(Dt)) },
        jt = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        Mt = t => jt(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
        Ht = t => { if (!jt(t) || 0 === t.getClientRects().length) return !1; const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                i = t.closest("details:not([open])"); if (!i) return e; if (i !== t) { const e = t.closest("summary"); if (e && e.parentNode !== i) return !1; if (null === e) return !1 } return e },
        $t = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        Wt = t => { if (!document.documentElement.attachShadow) return null; if ("function" == typeof t.getRootNode) { const e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } return t instanceof ShadowRoot ? t : t.parentNode ? Wt(t.parentNode) : null },
        Bt = () => {},
        Ft = t => { t.offsetHeight },
        qt = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
        zt = [],
        Rt = () => "rtl" === document.documentElement.dir,
        Vt = t => { var e;
            e = () => { const e = qt(); if (e) { const i = t.NAME,
                        n = e.fn[i];
                    e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface) } }, "loading" === document.readyState ? (zt.length || document.addEventListener("DOMContentLoaded", (() => { for (const t of zt) t() })), zt.push(e)) : e() },
        Kt = t => { "function" == typeof t && t() },
        Qt = (t, e, i = !0) => { if (!i) return void Kt(t); const n = (t => { if (!t) return 0; let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t); const n = Number.parseFloat(e),
                    s = Number.parseFloat(i); return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0 })(e) + 5; let s = !1; const o = ({ target: i }) => { i === e && (s = !0, e.removeEventListener(Dt, o), Kt(t)) };
            e.addEventListener(Dt, o), setTimeout((() => { s || Pt(e) }), n) },
        Xt = (t, e, i, n) => { const s = t.length; let o = t.indexOf(e); return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]) },
        Yt = /[^.]*(?=\..*)\.|.*/,
        Ut = /\..*/,
        Gt = /::\d+$/,
        Jt = {}; let Zt = 1; const te = { mouseenter: "mouseover", mouseleave: "mouseout" },
        ee = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function ie(t, e) { return e && `${e}::${Zt++}` || t.uidEvent || Zt++ }

    function ne(t) { const e = ie(t); return t.uidEvent = e, Jt[e] = Jt[e] || {}, Jt[e] }

    function se(t, e, i = null) { return Object.values(t).find((t => t.callable === e && t.delegationSelector === i)) }

    function oe(t, e, i) { const n = "string" == typeof e,
            s = n ? i : e || i; let o = ce(t); return ee.has(o) || (o = t), [n, s, o] }

    function re(t, e, i, n, s) { if ("string" != typeof e || !t) return; let [o, r, a] = oe(e, i, n); if (e in te) { const t = t => function(e) { if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e) };
            r = t(r) } const l = ne(t),
            c = l[a] || (l[a] = {}),
            u = se(c, r, o ? i : null); if (u) return void(u.oneOff = u.oneOff && s); const h = ie(r, e.replace(Yt, "")),
            d = o ? function(t, e, i) { return function n(s) { const o = t.querySelectorAll(e); for (let { target: r } = s; r && r !== this; r = r.parentNode)
                        for (const a of o)
                            if (a === r) return he(s, { delegateTarget: r }), n.oneOff && ue.off(t, s.type, e, i), i.apply(r, [s]) } }(t, i, r) : function(t, e) { return function i(n) { return he(n, { delegateTarget: t }), i.oneOff && ue.off(t, n.type, e), e.apply(t, [n]) } }(t, r);
        d.delegationSelector = o ? i : null, d.callable = r, d.oneOff = s, d.uidEvent = h, c[h] = d, t.addEventListener(a, d, o) }

    function ae(t, e, i, n, s) { const o = se(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]) }

    function le(t, e, i, n) { const s = e[i] || {}; for (const o of Object.keys(s))
            if (o.includes(n)) { const n = s[o];
                ae(t, e, i, n.callable, n.delegationSelector) } }

    function ce(t) { return t = t.replace(Ut, ""), te[t] || t } const ue = { on(t, e, i, n) { re(t, e, i, n, !1) }, one(t, e, i, n) { re(t, e, i, n, !0) }, off(t, e, i, n) { if ("string" != typeof e || !t) return; const [s, o, r] = oe(e, i, n), a = r !== e, l = ne(t), c = l[r] || {}, u = e.startsWith("."); if (void 0 === o) { if (u)
                    for (const i of Object.keys(l)) le(t, l, i, e.slice(1)); for (const i of Object.keys(c)) { const n = i.replace(Gt, ""); if (!a || e.includes(n)) { const e = c[i];
                        ae(t, l, r, e.callable, e.delegationSelector) } } } else { if (!Object.keys(c).length) return;
                ae(t, l, r, o, s ? i : null) } }, trigger(t, e, i) { if ("string" != typeof e || !t) return null; const n = qt(); let s = null,
                o = !0,
                r = !0,
                a = !1;
            e !== ce(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented()); let l = new Event(e, { bubbles: o, cancelable: !0 }); return l = he(l, i), a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l } };

    function he(t, e) { for (const [i, n] of Object.entries(e || {})) try { t[i] = n } catch (e) { Object.defineProperty(t, i, { configurable: !0, get: () => n }) }
        return t } const de = new Map,
        fe = {set(t, e, i) { de.has(t) || de.set(t, new Map); const n = de.get(t);
                n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`) }, get: (t, e) => de.has(t) && de.get(t).get(e) || null, remove(t, e) { if (!de.has(t)) return; const i = de.get(t);
                i.delete(e), 0 === i.size && de.delete(t) } };

    function pe(t) { if ("true" === t) return !0; if ("false" === t) return !1; if (t === Number(t).toString()) return Number(t); if ("" === t || "null" === t) return null; if ("string" != typeof t) return t; try { return JSON.parse(decodeURIComponent(t)) } catch (e) { return t } }

    function ge(t) { return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`)) } const me = { setDataAttribute(t, e, i) { t.setAttribute(`data-bs-${ge(e)}`, i) }, removeDataAttribute(t, e) { t.removeAttribute(`data-bs-${ge(e)}`) }, getDataAttributes(t) { if (!t) return {}; const e = {},
                i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig"))); for (const n of i) { let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = pe(t.dataset[n]) } return e }, getDataAttribute: (t, e) => pe(t.getAttribute(`data-bs-${ge(e)}`)) };
    class _e { static get Default() { return {} }
        static get DefaultType() { return {} }
        static get NAME() { throw new Error('You have to implement the static method "NAME", for each component!') }
        _getConfig(t) { return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t }
        _configAfterMerge(t) { return t }
        _mergeConfigObj(t, e) { const i = jt(e) ? me.getDataAttribute(e, "config") : {}; return {...this.constructor.Default, ... "object" == typeof i ? i : {}, ...jt(e) ? me.getDataAttributes(e) : {}, ... "object" == typeof t ? t : {} } }
        _typeCheckConfig(t, e = this.constructor.DefaultType) { for (const n of Object.keys(e)) { const s = e[n],
                    o = t[n],
                    r = jt(o) ? "element" : null == (i = o) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase(); if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`) } var i } }
    class be extends _e { constructor(t, e) { super(), (t = Mt(t)) && (this._element = t, this._config = this._getConfig(e), fe.set(this._element, this.constructor.DATA_KEY, this)) }
        dispose() { fe.remove(this._element, this.constructor.DATA_KEY), ue.off(this._element, this.constructor.EVENT_KEY); for (const t of Object.getOwnPropertyNames(this)) this[t] = null }
        _queueCallback(t, e, i = !0) { Qt(t, e, i) }
        _getConfig(t) { return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t }
        static getInstance(t) { return fe.get(Mt(t), this.DATA_KEY) }
        static getOrCreateInstance(t, e = {}) { return this.getInstance(t) || new this(t, "object" == typeof e ? e : null) }
        static get VERSION() { return "5.2.0" }
        static get DATA_KEY() { return `bs.${this.NAME}` }
        static get EVENT_KEY() { return `.${this.DATA_KEY}` }
        static eventName(t) { return `${t}${this.EVENT_KEY}` } } const ve = (t, e = "hide") => { const i = `click.dismiss${t.EVENT_KEY}`,
            n = t.NAME;
        ue.on(document, i, `[data-bs-dismiss="${n}"]`, (function(i) { if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), $t(this)) return; const s = Nt(this) || this.closest(`.${n}`);
            t.getOrCreateInstance(s)[e]() })) };
    class ye extends be { static get NAME() { return "alert" }
        close() { if (ue.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show"); const t = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, t) }
        _destroyElement() { this._element.remove(), ue.trigger(this._element, "closed.bs.alert"), this.dispose() }
        static jQueryInterface(t) { return this.each((function() { const e = ye.getOrCreateInstance(this); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this) } })) } }
    ve(ye, "close"), Vt(ye); const we = '[data-bs-toggle="button"]';
    class Ae extends be { static get NAME() { return "button" }
        toggle() { this._element.setAttribute("aria-pressed", this._element.classList.toggle("active")) }
        static jQueryInterface(t) { return this.each((function() { const e = Ae.getOrCreateInstance(this); "toggle" === t && e[t]() })) } }
    ue.on(document, "click.bs.button.data-api", we, (t => { t.preventDefault(); const e = t.target.closest(we);
        Ae.getOrCreateInstance(e).toggle() })), Vt(Ae); const Ee = { find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)), findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t), children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))), parents(t, e) { const i = []; let n = t.parentNode.closest(e); for (; n;) i.push(n), n = n.parentNode.closest(e); return i }, prev(t, e) { let i = t.previousElementSibling; for (; i;) { if (i.matches(e)) return [i];
                    i = i.previousElementSibling } return [] }, next(t, e) { let i = t.nextElementSibling; for (; i;) { if (i.matches(e)) return [i];
                    i = i.nextElementSibling } return [] }, focusableChildren(t) { const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(","); return this.find(e, t).filter((t => !$t(t) && Ht(t))) } },
        Te = { endCallback: null, leftCallback: null, rightCallback: null },
        Ce = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
    class Oe extends _e { constructor(t, e) { super(), this._element = t, t && Oe.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents()) }
        static get Default() { return Te }
        static get DefaultType() { return Ce }
        static get NAME() { return "swipe" }
        dispose() { ue.off(this._element, ".bs.swipe") }
        _start(t) { this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX }
        _end(t) { this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), Kt(this._config.endCallback) }
        _move(t) { this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX }
        _handleSwipe() { const t = Math.abs(this._deltaX); if (t <= 40) return; const e = t / this._deltaX;
            this._deltaX = 0, e && Kt(e > 0 ? this._config.rightCallback : this._config.leftCallback) }
        _initEvents() { this._supportPointerEvents ? (ue.on(this._element, "pointerdown.bs.swipe", (t => this._start(t))), ue.on(this._element, "pointerup.bs.swipe", (t => this._end(t))), this._element.classList.add("pointer-event")) : (ue.on(this._element, "touchstart.bs.swipe", (t => this._start(t))), ue.on(this._element, "touchmove.bs.swipe", (t => this._move(t))), ue.on(this._element, "touchend.bs.swipe", (t => this._end(t)))) }
        _eventIsPointerPenTouch(t) { return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType) }
        static isSupported() { return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0 } } const xe = "next",
        ke = "prev",
        Le = "left",
        De = "right",
        Se = "slid.bs.carousel",
        Ie = "carousel",
        Ne = "active",
        Pe = { ArrowLeft: De, ArrowRight: Le },
        je = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 },
        Me = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
    class He extends be { constructor(t, e) { super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Ee.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === Ie && this.cycle() }
        static get Default() { return je }
        static get DefaultType() { return Me }
        static get NAME() { return "carousel" }
        next() { this._slide(xe) }
        nextWhenVisible() {!document.hidden && Ht(this._element) && this.next() }
        prev() { this._slide(ke) }
        pause() { this._isSliding && Pt(this._element), this._clearInterval() }
        cycle() { this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval) }
        _maybeEnableCycle() { this._config.ride && (this._isSliding ? ue.one(this._element, Se, (() => this.cycle())) : this.cycle()) }
        to(t) { const e = this._getItems(); if (t > e.length - 1 || t < 0) return; if (this._isSliding) return void ue.one(this._element, Se, (() => this.to(t))); const i = this._getItemIndex(this._getActive()); if (i === t) return; const n = t > i ? xe : ke;
            this._slide(n, e[t]) }
        dispose() { this._swipeHelper && this._swipeHelper.dispose(), super.dispose() }
        _configAfterMerge(t) { return t.defaultInterval = t.interval, t }
        _addEventListeners() { this._config.keyboard && ue.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && (ue.on(this._element, "mouseenter.bs.carousel", (() => this.pause())), ue.on(this._element, "mouseleave.bs.carousel", (() => this._maybeEnableCycle()))), this._config.touch && Oe.isSupported() && this._addTouchEventListeners() }
        _addTouchEventListeners() { for (const t of Ee.find(".carousel-item img", this._element)) ue.on(t, "dragstart.bs.carousel", (t => t.preventDefault())); const t = { leftCallback: () => this._slide(this._directionToOrder(Le)), rightCallback: () => this._slide(this._directionToOrder(De)), endCallback: () => { "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval)) } };
            this._swipeHelper = new Oe(this._element, t) }
        _keydown(t) { if (/input|textarea/i.test(t.target.tagName)) return; const e = Pe[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e))) }
        _getItemIndex(t) { return this._getItems().indexOf(t) }
        _setActiveIndicatorElement(t) { if (!this._indicatorsElement) return; const e = Ee.findOne(".active", this._indicatorsElement);
            e.classList.remove(Ne), e.removeAttribute("aria-current"); const i = Ee.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(Ne), i.setAttribute("aria-current", "true")) }
        _updateInterval() { const t = this._activeElement || this._getActive(); if (!t) return; const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval }
        _slide(t, e = null) { if (this._isSliding) return; const i = this._getActive(),
                n = t === xe,
                s = e || Xt(this._getItems(), i, n, this._config.wrap); if (s === i) return; const o = this._getItemIndex(s),
                r = e => ue.trigger(this._element, e, { relatedTarget: s, direction: this._orderToDirection(t), from: this._getItemIndex(i), to: o }); if (r("slide.bs.carousel").defaultPrevented) return; if (!i || !s) return; const a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s; const l = n ? "carousel-item-start" : "carousel-item-end",
                c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c), Ft(s), i.classList.add(l), s.classList.add(l), this._queueCallback((() => { s.classList.remove(l, c), s.classList.add(Ne), i.classList.remove(Ne, c, l), this._isSliding = !1, r(Se) }), i, this._isAnimated()), a && this.cycle() }
        _isAnimated() { return this._element.classList.contains("slide") }
        _getActive() { return Ee.findOne(".active.carousel-item", this._element) }
        _getItems() { return Ee.find(".carousel-item", this._element) }
        _clearInterval() { this._interval && (clearInterval(this._interval), this._interval = null) }
        _directionToOrder(t) { return Rt() ? t === Le ? ke : xe : t === Le ? xe : ke }
        _orderToDirection(t) { return Rt() ? t === ke ? Le : De : t === ke ? De : Le }
        static jQueryInterface(t) { return this.each((function() { const e = He.getOrCreateInstance(this, t); if ("number" != typeof t) { if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]() } } else e.to(t) })) } }
    ue.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", (function(t) { const e = Nt(this); if (!e || !e.classList.contains(Ie)) return;
        t.preventDefault(); const i = He.getOrCreateInstance(e),
            n = this.getAttribute("data-bs-slide-to"); return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === me.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle()) })), ue.on(window, "load.bs.carousel.data-api", (() => { const t = Ee.find('[data-bs-ride="carousel"]'); for (const e of t) He.getOrCreateInstance(e) })), Vt(He); const $e = "show",
        We = "collapse",
        Be = "collapsing",
        Fe = '[data-bs-toggle="collapse"]',
        qe = { parent: null, toggle: !0 },
        ze = { parent: "(null|element)", toggle: "boolean" };
    class Re extends be { constructor(t, e) { super(t, e), this._isTransitioning = !1, this._triggerArray = []; const i = Ee.find(Fe); for (const t of i) { const e = It(t),
                    i = Ee.find(e).filter((t => t === this._element));
                null !== e && i.length && this._triggerArray.push(t) }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle() }
        static get Default() { return qe }
        static get DefaultType() { return ze }
        static get NAME() { return "collapse" }
        toggle() { this._isShown() ? this.hide() : this.show() }
        show() { if (this._isTransitioning || this._isShown()) return; let t = []; if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => Re.getOrCreateInstance(t, { toggle: !1 })))), t.length && t[0]._isTransitioning) return; if (ue.trigger(this._element, "show.bs.collapse").defaultPrevented) return; for (const e of t) e.hide(); const e = this._getDimension();
            this._element.classList.remove(We), this._element.classList.add(Be), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0; const i = `scroll${e[0].toUpperCase()+e.slice(1)}`;
            this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(Be), this._element.classList.add(We, $e), this._element.style[e] = "", ue.trigger(this._element, "shown.bs.collapse") }), this._element, !0), this._element.style[e] = `${this._element[i]}px` }
        hide() { if (this._isTransitioning || !this._isShown()) return; if (ue.trigger(this._element, "hide.bs.collapse").defaultPrevented) return; const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, Ft(this._element), this._element.classList.add(Be), this._element.classList.remove(We, $e); for (const t of this._triggerArray) { const e = Nt(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1) }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(Be), this._element.classList.add(We), ue.trigger(this._element, "hidden.bs.collapse") }), this._element, !0) }
        _isShown(t = this._element) { return t.classList.contains($e) }
        _configAfterMerge(t) { return t.toggle = Boolean(t.toggle), t.parent = Mt(t.parent), t }
        _getDimension() { return this._element.classList.contains("collapse-horizontal") ? "width" : "height" }
        _initializeChildren() { if (!this._config.parent) return; const t = this._getFirstLevelChildren(Fe); for (const e of t) { const t = Nt(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t)) } }
        _getFirstLevelChildren(t) { const e = Ee.find(":scope .collapse .collapse", this._config.parent); return Ee.find(t, this._config.parent).filter((t => !e.includes(t))) }
        _addAriaAndCollapsedClass(t, e) { if (t.length)
                for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e) }
        static jQueryInterface(t) { const e = {}; return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each((function() { const i = Re.getOrCreateInstance(this, e); if ("string" == typeof t) { if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]() } })) } }
    ue.on(document, "click.bs.collapse.data-api", Fe, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault(); const e = It(this),
            i = Ee.find(e); for (const t of i) Re.getOrCreateInstance(t, { toggle: !1 }).toggle() })), Vt(Re); const Ve = "dropdown",
        Ke = "ArrowUp",
        Qe = "ArrowDown",
        Xe = "click.bs.dropdown.data-api",
        Ye = "keydown.bs.dropdown.data-api",
        Ue = "show",
        Ge = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Je = `${Ge}.show`,
        Ze = ".dropdown-menu",
        ti = Rt() ? "top-end" : "top-start",
        ei = Rt() ? "top-start" : "top-end",
        ii = Rt() ? "bottom-end" : "bottom-start",
        ni = Rt() ? "bottom-start" : "bottom-end",
        si = Rt() ? "left-start" : "right-start",
        oi = Rt() ? "right-start" : "left-start",
        ri = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" },
        ai = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
    class li extends be { constructor(t, e) { super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = Ee.findOne(Ze, this._parent), this._inNavbar = this._detectNavbar() }
        static get Default() { return ri }
        static get DefaultType() { return ai }
        static get NAME() { return Ve }
        toggle() { return this._isShown() ? this.hide() : this.show() }
        show() { if ($t(this._element) || this._isShown()) return; const t = { relatedTarget: this._element }; if (!ue.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) { if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (const t of[].concat(...document.body.children)) ue.on(t, "mouseover", Bt);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ue), this._element.classList.add(Ue), ue.trigger(this._element, "shown.bs.dropdown", t) } }
        hide() { if ($t(this._element) || !this._isShown()) return; const t = { relatedTarget: this._element };
            this._completeHide(t) }
        dispose() { this._popper && this._popper.destroy(), super.dispose() }
        update() { this._inNavbar = this._detectNavbar(), this._popper && this._popper.update() }
        _completeHide(t) { if (!ue.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) { if ("ontouchstart" in document.documentElement)
                    for (const t of[].concat(...document.body.children)) ue.off(t, "mouseover", Bt);
                this._popper && this._popper.destroy(), this._menu.classList.remove(Ue), this._element.classList.remove(Ue), this._element.setAttribute("aria-expanded", "false"), me.removeDataAttribute(this._menu, "popper"), ue.trigger(this._element, "hidden.bs.dropdown", t) } }
        _getConfig(t) { if ("object" == typeof(t = super._getConfig(t)).reference && !jt(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ve.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`); return t }
        _createPopper() { if (void 0 === e) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)"); let t = this._element; "parent" === this._config.reference ? t = this._parent : jt(this._config.reference) ? t = Mt(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference); const i = this._getPopperConfig();
            this._popper = kt(t, this._menu, i) }
        _isShown() { return this._menu.classList.contains(Ue) }
        _getPlacement() { const t = this._parent; if (t.classList.contains("dropend")) return si; if (t.classList.contains("dropstart")) return oi; if (t.classList.contains("dropup-center")) return "top"; if (t.classList.contains("dropdown-center")) return "bottom"; const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim(); return t.classList.contains("dropup") ? e ? ei : ti : e ? ni : ii }
        _detectNavbar() { return null !== this._element.closest(".navbar") }
        _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t }
        _getPopperConfig() { const t = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] }; return (this._inNavbar || "static" === this._config.display) && (me.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{ name: "applyStyles", enabled: !1 }]), {...t, ... "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig } }
        _selectMenuItem({ key: t, target: e }) { const i = Ee.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => Ht(t)));
            i.length && Xt(i, e, t === Qe, !i.includes(e)).focus() }
        static jQueryInterface(t) { return this.each((function() { const e = li.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]() } })) }
        static clearMenus(t) { if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return; const e = Ee.find(Je); for (const i of e) { const e = li.getInstance(i); if (!e || !1 === e._config.autoClose) continue; const n = t.composedPath(),
                    s = n.includes(e._menu); if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue; if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue; const o = { relatedTarget: e._element }; "click" === t.type && (o.clickEvent = t), e._completeHide(o) } }
        static dataApiKeydownHandler(t) { const e = /input|textarea/i.test(t.target.tagName),
                i = "Escape" === t.key,
                n = [Ke, Qe].includes(t.key); if (!n && !i) return; if (e && !i) return;
            t.preventDefault(); const s = Ee.findOne(Ge, t.delegateTarget.parentNode),
                o = li.getOrCreateInstance(s); if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), s.focus()) } }
    ue.on(document, Ye, Ge, li.dataApiKeydownHandler), ue.on(document, Ye, Ze, li.dataApiKeydownHandler), ue.on(document, Xe, li.clearMenus), ue.on(document, "keyup.bs.dropdown.data-api", li.clearMenus), ue.on(document, Xe, Ge, (function(t) { t.preventDefault(), li.getOrCreateInstance(this).toggle() })), Vt(li); const ci = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        ui = ".sticky-top",
        hi = "padding-right",
        di = "margin-right";
    class fi { constructor() { this._element = document.body }
        getWidth() { const t = document.documentElement.clientWidth; return Math.abs(window.innerWidth - t) }
        hide() { const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, hi, (e => e + t)), this._setElementAttributes(ci, hi, (e => e + t)), this._setElementAttributes(ui, di, (e => e - t)) }
        reset() { this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, hi), this._resetElementAttributes(ci, hi), this._resetElementAttributes(ui, di) }
        isOverflowing() { return this.getWidth() > 0 }
        _disableOverFlow() { this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden" }
        _setElementAttributes(t, e, i) { const n = this.getWidth();
            this._applyManipulationCallback(t, (t => { if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e); const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`) })) }
        _saveInitialAttribute(t, e) { const i = t.style.getPropertyValue(e);
            i && me.setDataAttribute(t, e, i) }
        _resetElementAttributes(t, e) { this._applyManipulationCallback(t, (t => { const i = me.getDataAttribute(t, e);
                null !== i ? (me.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e) })) }
        _applyManipulationCallback(t, e) { if (jt(t)) e(t);
            else
                for (const i of Ee.find(t, this._element)) e(i) } } const pi = "show",
        gi = "mousedown.bs.backdrop",
        mi = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" },
        _i = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
    class bi extends _e { constructor(t) { super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null }
        static get Default() { return mi }
        static get DefaultType() { return _i }
        static get NAME() { return "backdrop" }
        show(t) { if (!this._config.isVisible) return void Kt(t);
            this._append(); const e = this._getElement();
            this._config.isAnimated && Ft(e), e.classList.add(pi), this._emulateAnimation((() => { Kt(t) })) }
        hide(t) { this._config.isVisible ? (this._getElement().classList.remove(pi), this._emulateAnimation((() => { this.dispose(), Kt(t) }))) : Kt(t) }
        dispose() { this._isAppended && (ue.off(this._element, gi), this._element.remove(), this._isAppended = !1) }
        _getElement() { if (!this._element) { const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t } return this._element }
        _configAfterMerge(t) { return t.rootElement = Mt(t.rootElement), t }
        _append() { if (this._isAppended) return; const t = this._getElement();
            this._config.rootElement.append(t), ue.on(t, gi, (() => { Kt(this._config.clickCallback) })), this._isAppended = !0 }
        _emulateAnimation(t) { Qt(t, this._getElement(), this._config.isAnimated) } } const vi = ".bs.focustrap",
        yi = "backward",
        wi = { autofocus: !0, trapElement: null },
        Ai = { autofocus: "boolean", trapElement: "element" };
    class Ei extends _e { constructor(t) { super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null }
        static get Default() { return wi }
        static get DefaultType() { return Ai }
        static get NAME() { return "focustrap" }
        activate() { this._isActive || (this._config.autofocus && this._config.trapElement.focus(), ue.off(document, vi), ue.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), ue.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0) }
        deactivate() { this._isActive && (this._isActive = !1, ue.off(document, vi)) }
        _handleFocusin(t) { const { trapElement: e } = this._config; if (t.target === document || t.target === e || e.contains(t.target)) return; const i = Ee.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === yi ? i[i.length - 1].focus() : i[0].focus() }
        _handleKeydown(t) { "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? yi : "forward") } } const Ti = "hidden.bs.modal",
        Ci = "show.bs.modal",
        Oi = "modal-open",
        xi = "show",
        ki = "modal-static",
        Li = { backdrop: !0, focus: !0, keyboard: !0 },
        Di = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
    class Si extends be { constructor(t, e) { super(t, e), this._dialog = Ee.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new fi, this._addEventListeners() }
        static get Default() { return Li }
        static get DefaultType() { return Di }
        static get NAME() { return "modal" }
        toggle(t) { return this._isShown ? this.hide() : this.show(t) }
        show(t) { this._isShown || this._isTransitioning || ue.trigger(this._element, Ci, { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Oi), this._adjustDialog(), this._backdrop.show((() => this._showElement(t)))) }
        hide() { this._isShown && !this._isTransitioning && (ue.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(xi), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated()))) }
        dispose() { for (const t of[window, this._dialog]) ue.off(t, ".bs.modal");
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose() }
        handleUpdate() { this._adjustDialog() }
        _initializeBackDrop() { return new bi({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() }) }
        _initializeFocusTrap() { return new Ei({ trapElement: this._element }) }
        _showElement(t) { document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0; const e = Ee.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), Ft(this._element), this._element.classList.add(xi), this._queueCallback((() => { this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, ue.trigger(this._element, "shown.bs.modal", { relatedTarget: t }) }), this._dialog, this._isAnimated()) }
        _addEventListeners() { ue.on(this._element, "keydown.dismiss.bs.modal", (t => { if ("Escape" === t.key) return this._config.keyboard ? (t.preventDefault(), void this.hide()) : void this._triggerBackdropTransition() })), ue.on(window, "resize.bs.modal", (() => { this._isShown && !this._isTransitioning && this._adjustDialog() })), ue.on(this._element, "mousedown.dismiss.bs.modal", (t => { t.target === t.currentTarget && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition()) })) }
        _hideModal() { this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => { document.body.classList.remove(Oi), this._resetAdjustments(), this._scrollBar.reset(), ue.trigger(this._element, Ti) })) }
        _isAnimated() { return this._element.classList.contains("fade") }
        _triggerBackdropTransition() { if (ue.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return; const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._element.style.overflowY; "hidden" === e || this._element.classList.contains(ki) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(ki), this._queueCallback((() => { this._element.classList.remove(ki), this._queueCallback((() => { this._element.style.overflowY = e }), this._dialog) }), this._dialog), this._element.focus()) }
        _adjustDialog() { const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0; if (i && !t) { const t = Rt() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px` } if (!i && t) { const t = Rt() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px` } }
        _resetAdjustments() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }
        static jQueryInterface(t, e) { return this.each((function() { const i = Si.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e) } })) } }
    ue.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) { const e = Nt(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), ue.one(e, Ci, (t => { t.defaultPrevented || ue.one(e, Ti, (() => { Ht(this) && this.focus() })) })); const i = Ee.findOne(".modal.show");
        i && Si.getInstance(i).hide(), Si.getOrCreateInstance(e).toggle(this) })), ve(Si), Vt(Si); const Ii = "show",
        Ni = "showing",
        Pi = "hiding",
        ji = ".offcanvas.show",
        Mi = "hidePrevented.bs.offcanvas",
        Hi = "hidden.bs.offcanvas",
        $i = { backdrop: !0, keyboard: !0, scroll: !1 },
        Wi = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
    class Bi extends be { constructor(t, e) { super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners() }
        static get Default() { return $i }
        static get DefaultType() { return Wi }
        static get NAME() { return "offcanvas" }
        toggle(t) { return this._isShown ? this.hide() : this.show(t) }
        show(t) { this._isShown || ue.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new fi).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Ni), this._queueCallback((() => { this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Ii), this._element.classList.remove(Ni), ue.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t }) }), this._element, !0)) }
        hide() { this._isShown && (ue.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Pi), this._backdrop.hide(), this._queueCallback((() => { this._element.classList.remove(Ii, Pi), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new fi).reset(), ue.trigger(this._element, Hi) }), this._element, !0))) }
        dispose() { this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose() }
        _initializeBackDrop() { const t = Boolean(this._config.backdrop); return new bi({ className: "offcanvas-backdrop", isVisible: t, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: t ? () => { "static" !== this._config.backdrop ? this.hide() : ue.trigger(this._element, Mi) } : null }) }
        _initializeFocusTrap() { return new Ei({ trapElement: this._element }) }
        _addEventListeners() { ue.on(this._element, "keydown.dismiss.bs.offcanvas", (t => { "Escape" === t.key && (this._config.keyboard ? this.hide() : ue.trigger(this._element, Mi)) })) }
        static jQueryInterface(t) { return this.each((function() { const e = Bi.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this) } })) } }
    ue.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) { const e = Nt(this); if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), $t(this)) return;
        ue.one(e, Hi, (() => { Ht(this) && this.focus() })); const i = Ee.findOne(ji);
        i && i !== e && Bi.getInstance(i).hide(), Bi.getOrCreateInstance(e).toggle(this) })), ue.on(window, "load.bs.offcanvas.data-api", (() => { for (const t of Ee.find(ji)) Bi.getOrCreateInstance(t).show() })), ue.on(window, "resize.bs.offcanvas", (() => { for (const t of Ee.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && Bi.getOrCreateInstance(t).hide() })), ve(Bi), Vt(Bi); const Fi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        qi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        zi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Ri = (t, e) => { const i = t.nodeName.toLowerCase(); return e.includes(i) ? !Fi.has(i) || Boolean(qi.test(t.nodeValue) || zi.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i))) },
        Vi = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        Ki = { allowList: Vi, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" },
        Qi = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" },
        Xi = { entry: "(string|element|function|null)", selector: "(string|element)" };
    class Yi extends _e { constructor(t) { super(), this._config = this._getConfig(t) }
        static get Default() { return Ki }
        static get DefaultType() { return Qi }
        static get NAME() { return "TemplateFactory" }
        getContent() { return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean) }
        hasContent() { return this.getContent().length > 0 }
        changeContent(t) { return this._checkContent(t), this._config.content = {...this._config.content, ...t }, this }
        toHtml() { const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template); for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e); const e = t.children[0],
                i = this._resolvePossibleFunction(this._config.extraClass); return i && e.classList.add(...i.split(" ")), e }
        _typeCheckConfig(t) { super._typeCheckConfig(t), this._checkContent(t.content) }
        _checkContent(t) { for (const [e, i] of Object.entries(t)) super._typeCheckConfig({ selector: e, entry: i }, Xi) }
        _setContent(t, e, i) { const n = Ee.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? jt(e) ? this._putElementInTemplate(Mt(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove()) }
        _maybeSanitize(t) { return this._config.sanitize ? function(t, e, i) { if (!t.length) return t; if (i && "function" == typeof i) return i(t); const n = (new window.DOMParser).parseFromString(t, "text/html"),
                    s = [].concat(...n.body.querySelectorAll("*")); for (const t of s) { const i = t.nodeName.toLowerCase(); if (!Object.keys(e).includes(i)) { t.remove(); continue } const n = [].concat(...t.attributes),
                        s = [].concat(e["*"] || [], e[i] || []); for (const e of n) Ri(e, s) || t.removeAttribute(e.nodeName) } return n.body.innerHTML }(t, this._config.allowList, this._config.sanitizeFn) : t }
        _resolvePossibleFunction(t) { return "function" == typeof t ? t(this) : t }
        _putElementInTemplate(t, e) { if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent } } const Ui = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Gi = "fade",
        Ji = "show",
        Zi = ".modal",
        tn = "hide.bs.modal",
        en = "hover",
        nn = "focus",
        sn = { AUTO: "auto", TOP: "top", RIGHT: Rt() ? "left" : "right", BOTTOM: "bottom", LEFT: Rt() ? "right" : "left" },
        on = { allowList: Vi, animation: !0, boundary: "clippingParents", container: !1, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: !1, offset: [0, 0], placement: "top", popperConfig: null, sanitize: !0, sanitizeFn: null, selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" },
        rn = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
    class an extends be { constructor(t, i) { if (void 0 === e) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, i), this._isEnabled = !0, this._timeout = 0, this._isHovered = !1, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners() }
        static get Default() { return on }
        static get DefaultType() { return rn }
        static get NAME() { return "tooltip" }
        enable() { this._isEnabled = !0 }
        disable() { this._isEnabled = !1 }
        toggleEnabled() { this._isEnabled = !this._isEnabled }
        toggle(t) { if (this._isEnabled) { if (t) { const e = this._initializeOnDelegatedTarget(t); return e._activeTrigger.click = !e._activeTrigger.click, void(e._isWithActiveTrigger() ? e._enter() : e._leave()) }
                this._isShown() ? this._leave() : this._enter() } }
        dispose() { clearTimeout(this._timeout), ue.off(this._element.closest(Zi), tn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose() }
        show() { if ("none" === this._element.style.display) throw new Error("Please use show on visible elements"); if (!this._isWithContent() || !this._isEnabled) return; const t = ue.trigger(this._element, this.constructor.eventName("show")),
                e = (Wt(this._element) || this._element.ownerDocument.documentElement).contains(this._element); if (t.defaultPrevented || !e) return;
            this.tip && (this.tip.remove(), this.tip = null); const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id")); const { container: n } = this._config; if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), ue.trigger(this._element, this.constructor.eventName("inserted"))), this._popper ? this._popper.update() : this._popper = this._createPopper(i), i.classList.add(Ji), "ontouchstart" in document.documentElement)
                for (const t of[].concat(...document.body.children)) ue.on(t, "mouseover", Bt);
            this._queueCallback((() => { const t = this._isHovered;
                this._isHovered = !1, ue.trigger(this._element, this.constructor.eventName("shown")), t && this._leave() }), this.tip, this._isAnimated()) }
        hide() { if (!this._isShown()) return; if (ue.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return; const t = this._getTipElement(); if (t.classList.remove(Ji), "ontouchstart" in document.documentElement)
                for (const t of[].concat(...document.body.children)) ue.off(t, "mouseover", Bt);
            this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = !1, this._queueCallback((() => { this._isWithActiveTrigger() || (this._isHovered || t.remove(), this._element.removeAttribute("aria-describedby"), ue.trigger(this._element, this.constructor.eventName("hidden")), this._disposePopper()) }), this.tip, this._isAnimated()) }
        update() { this._popper && this._popper.update() }
        _isWithContent() { return Boolean(this._getTitle()) }
        _getTipElement() { return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip }
        _createTipElement(t) { const e = this._getTemplateFactory(t).toHtml(); if (!e) return null;
            e.classList.remove(Gi, Ji), e.classList.add(`bs-${this.constructor.NAME}-auto`); const i = (t => { do { t += Math.floor(1e6 * Math.random()) } while (document.getElementById(t)); return t })(this.constructor.NAME).toString(); return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Gi), e }
        setContent(t) { this._newContent = t, this._isShown() && (this._disposePopper(), this.show()) }
        _getTemplateFactory(t) { return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Yi({...this._config, content: t, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory }
        _getContentForTemplate() { return { ".tooltip-inner": this._getTitle() } }
        _getTitle() { return this._resolvePossibleFunction(this._config.title) || this._config.originalTitle }
        _initializeOnDelegatedTarget(t) { return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig()) }
        _isAnimated() { return this._config.animation || this.tip && this.tip.classList.contains(Gi) }
        _isShown() { return this.tip && this.tip.classList.contains(Ji) }
        _createPopper(t) { const e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement,
                i = sn[e.toUpperCase()]; return kt(this._element, t, this._getPopperConfig(i)) }
        _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t }
        _resolvePossibleFunction(t) { return "function" == typeof t ? t.call(this._element) : t }
        _getPopperConfig(t) { const e = { placement: t, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: !0, phase: "beforeMain", fn: t => { this._getTipElement().setAttribute("data-popper-placement", t.state.placement) } }] }; return {...e, ... "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig } }
        _setListeners() { const t = this._config.trigger.split(" "); for (const e of t)
                if ("click" === e) ue.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => this.toggle(t)));
                else if ("manual" !== e) { const t = e === en ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                    i = e === en ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                ue.on(this._element, t, this._config.selector, (t => { const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? nn : en] = !0, e._enter() })), ue.on(this._element, i, this._config.selector, (t => { const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? nn : en] = e._element.contains(t.relatedTarget), e._leave() })) }
            this._hideModalHandler = () => { this._element && this.hide() }, ue.on(this._element.closest(Zi), tn, this._hideModalHandler), this._config.selector ? this._config = {...this._config, trigger: "manual", selector: "" } : this._fixTitle() }
        _fixTitle() { const t = this._config.originalTitle;
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.removeAttribute("title")) }
        _enter() { this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => { this._isHovered && this.show() }), this._config.delay.show)) }
        _leave() { this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => { this._isHovered || this.hide() }), this._config.delay.hide)) }
        _setTimeout(t, e) { clearTimeout(this._timeout), this._timeout = setTimeout(t, e) }
        _isWithActiveTrigger() { return Object.values(this._activeTrigger).includes(!0) }
        _getConfig(t) { const e = me.getDataAttributes(this._element); for (const t of Object.keys(e)) Ui.has(t) && delete e[t]; return t = {...e, ... "object" == typeof t && t ? t : {} }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t }
        _configAfterMerge(t) { return t.container = !1 === t.container ? document.body : Mt(t.container), "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), t.originalTitle = this._element.getAttribute("title") || "", "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t }
        _getDelegateConfig() { const t = {}; for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]); return t }
        _disposePopper() { this._popper && (this._popper.destroy(), this._popper = null) }
        static jQueryInterface(t) { return this.each((function() { const e = an.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]() } })) } }
    Vt(an); const ln = {...an.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" },
        cn = {...an.DefaultType, content: "(null|string|element|function)" };
    class un extends an { static get Default() { return ln }
        static get DefaultType() { return cn }
        static get NAME() { return "popover" }
        _isWithContent() { return this._getTitle() || this._getContent() }
        _getContentForTemplate() { return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() } }
        _getContent() { return this._resolvePossibleFunction(this._config.content) }
        static jQueryInterface(t) { return this.each((function() { const e = un.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]() } })) } }
    Vt(un); const hn = "click.bs.scrollspy",
        dn = "active",
        fn = "[href]",
        pn = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null },
        gn = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element" };
    class mn extends be { constructor(t, e) { super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh() }
        static get Default() { return pn }
        static get DefaultType() { return gn }
        static get NAME() { return "scrollspy" }
        refresh() { this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver(); for (const t of this._observableSections.values()) this._observer.observe(t) }
        dispose() { this._observer.disconnect(), super.dispose() }
        _configAfterMerge(t) { return t.target = Mt(t.target) || document.body, t }
        _maybeEnableSmoothScroll() { this._config.smoothScroll && (ue.off(this._config.target, hn), ue.on(this._config.target, hn, fn, (t => { const e = this._observableSections.get(t.target.hash); if (e) { t.preventDefault(); const i = this._rootElement || window,
                        n = e.offsetTop - this._element.offsetTop; if (i.scrollTo) return void i.scrollTo({ top: n, behavior: "smooth" });
                    i.scrollTop = n } }))) }
        _getNewObserver() { const t = { root: this._rootElement, threshold: [.1, .5, 1], rootMargin: this._getRootMargin() }; return new IntersectionObserver((t => this._observerCallback(t)), t) }
        _observerCallback(t) { const e = t => this._targetLinks.get(`#${t.target.id}`),
                i = t => { this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t)) },
                n = (this._rootElement || document.documentElement).scrollTop,
                s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n; for (const o of t) { if (!o.isIntersecting) { this._activeTarget = null, this._clearActiveClass(e(o)); continue } const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop; if (s && t) { if (i(o), !n) return } else s || t || i(o) } }
        _getRootMargin() { return this._config.offset ? `${this._config.offset}px 0px -30%` : this._config.rootMargin }
        _initializeTargetsAndObservables() { this._targetLinks = new Map, this._observableSections = new Map; const t = Ee.find(fn, this._config.target); for (const e of t) { if (!e.hash || $t(e)) continue; const t = Ee.findOne(e.hash, this._element);
                Ht(t) && (this._targetLinks.set(e.hash, e), this._observableSections.set(e.hash, t)) } }
        _process(t) { this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(dn), this._activateParents(t), ue.trigger(this._element, "activate.bs.scrollspy", { relatedTarget: t })) }
        _activateParents(t) { if (t.classList.contains("dropdown-item")) Ee.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(dn);
            else
                for (const e of Ee.parents(t, ".nav, .list-group"))
                    for (const t of Ee.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item")) t.classList.add(dn) }
        _clearActiveClass(t) { t.classList.remove(dn); const e = Ee.find("[href].active", t); for (const t of e) t.classList.remove(dn) }
        static jQueryInterface(t) { return this.each((function() { const e = mn.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]() } })) } }
    ue.on(window, "load.bs.scrollspy.data-api", (() => { for (const t of Ee.find('[data-bs-spy="scroll"]')) mn.getOrCreateInstance(t) })), Vt(mn); const _n = "ArrowLeft",
        bn = "ArrowRight",
        vn = "ArrowUp",
        yn = "ArrowDown",
        wn = "active",
        An = "fade",
        En = "show",
        Tn = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Cn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Tn}`;
    class On extends be { constructor(t) { super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), ue.on(this._element, "keydown.bs.tab", (t => this._keydown(t)))) }
        static get NAME() { return "tab" }
        show() { const t = this._element; if (this._elemIsActive(t)) return; const e = this._getActiveElem(),
                i = e ? ue.trigger(e, "hide.bs.tab", { relatedTarget: t }) : null;
            ue.trigger(t, "show.bs.tab", { relatedTarget: e }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e)) }
        _activate(t, e) { t && (t.classList.add(wn), this._activate(Nt(t)), this._queueCallback((() => { "tab" === t.getAttribute("role") ? (t.focus(), t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), ue.trigger(t, "shown.bs.tab", { relatedTarget: e })) : t.classList.add(En) }), t, t.classList.contains(An))) }
        _deactivate(t, e) { t && (t.classList.remove(wn), t.blur(), this._deactivate(Nt(t)), this._queueCallback((() => { "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), ue.trigger(t, "hidden.bs.tab", { relatedTarget: e })) : t.classList.remove(En) }), t, t.classList.contains(An))) }
        _keydown(t) { if (![_n, bn, vn, yn].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault(); const e = [bn, yn].includes(t.key),
                i = Xt(this._getChildren().filter((t => !$t(t))), t.target, e, !0);
            i && On.getOrCreateInstance(i).show() }
        _getChildren() { return Ee.find(Cn, this._parent) }
        _getActiveElem() { return this._getChildren().find((t => this._elemIsActive(t))) || null }
        _setInitialAttributes(t, e) { this._setAttributeIfNotExists(t, "role", "tablist"); for (const t of e) this._setInitialAttributesOnChild(t) }
        _setInitialAttributesOnChild(t) { t = this._getInnerElement(t); const e = this._elemIsActive(t),
                i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t) }
        _setInitialAttributesOnTargetPanel(t) { const e = Nt(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`)) }
        _toggleDropDown(t, e) { const i = this._getOuterElement(t); if (!i.classList.contains("dropdown")) return; const n = (t, n) => { const s = Ee.findOne(t, i);
                s && s.classList.toggle(n, e) };
            n(".dropdown-toggle", wn), n(".dropdown-menu", En), n(".dropdown-item", wn), i.setAttribute("aria-expanded", e) }
        _setAttributeIfNotExists(t, e, i) { t.hasAttribute(e) || t.setAttribute(e, i) }
        _elemIsActive(t) { return t.classList.contains(wn) }
        _getInnerElement(t) { return t.matches(Cn) ? t : Ee.findOne(Cn, t) }
        _getOuterElement(t) { return t.closest(".nav-item, .list-group-item") || t }
        static jQueryInterface(t) { return this.each((function() { const e = On.getOrCreateInstance(this); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]() } })) } }
    ue.on(document, "click.bs.tab", Tn, (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), $t(this) || On.getOrCreateInstance(this).show() })), ue.on(window, "load.bs.tab", (() => { for (const t of Ee.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) On.getOrCreateInstance(t) })), Vt(On); const xn = "hide",
        kn = "show",
        Ln = "showing",
        Dn = { animation: "boolean", autohide: "boolean", delay: "number" },
        Sn = { animation: !0, autohide: !0, delay: 5e3 };
    class In extends be { constructor(t, e) { super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners() }
        static get Default() { return Sn }
        static get DefaultType() { return Dn }
        static get NAME() { return "toast" }
        show() { ue.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(xn), Ft(this._element), this._element.classList.add(kn, Ln), this._queueCallback((() => { this._element.classList.remove(Ln), ue.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide() }), this._element, this._config.animation)) }
        hide() { this.isShown() && (ue.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(Ln), this._queueCallback((() => { this._element.classList.add(xn), this._element.classList.remove(Ln, kn), ue.trigger(this._element, "hidden.bs.toast") }), this._element, this._config.animation))) }
        dispose() { this._clearTimeout(), this.isShown() && this._element.classList.remove(kn), super.dispose() }
        isShown() { return this._element.classList.contains(kn) }
        _maybeScheduleHide() { this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => { this.hide() }), this._config.delay))) }
        _onInteraction(t, e) { switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e; break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e } if (e) return void this._clearTimeout(); const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide() }
        _setListeners() { ue.on(this._element, "mouseover.bs.toast", (t => this._onInteraction(t, !0))), ue.on(this._element, "mouseout.bs.toast", (t => this._onInteraction(t, !1))), ue.on(this._element, "focusin.bs.toast", (t => this._onInteraction(t, !0))), ue.on(this._element, "focusout.bs.toast", (t => this._onInteraction(t, !1))) }
        _clearTimeout() { clearTimeout(this._timeout), this._timeout = null }
        static jQueryInterface(t) { return this.each((function() { const e = In.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this) } })) } }
    ve(In), Vt(In), [].forEach.call(document.querySelectorAll(".search-form"), (t => { t.addEventListener("submit", (function(e) { var i = t.querySelector("input");
            i.value.length < 1 && (e.preventDefault(), i.focus()) })) })), [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map((function(t) { return new un(t, { trigger: "focus" }) })) }();
//# sourceMappingURL=main.bundle.js.map