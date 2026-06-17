import {b as S, c as U, e as k, g as y, i as z} from "./chunk-M5HDRYQQ.js";
import {G as f, Gb as I, Hb as M, Lb as D, Mb as T, Nb as j, Oa as b, Pb as x, Qb as O, Rb as R, Tb as m, Va as i, W as d, X as h, _ as g, a as u, b as l, cb as A, db as C, eb as c, fb as F, i as s, pa as v, z as r} from "./chunk-QLJWNBRG.js";
var E = (e, o) => {
    let t = r(m)
      , n = r(c);
    return t.authState$.pipe(s(p => p ? !0 : n.createUrlTree(["/login"])))
}
  , G = (e, o) => {
    let t = r(m)
      , n = r(c);
    return t.authState$.pipe(s(p => p ? n.createUrlTree(["/"]) : !0))
}
;
var w = [{
    path: "login",
    loadComponent: () => import("./chunk-E6LFMCVV.js").then(e => e.Login),
    canMatch: [G]
}, {
    path: "",
    canMatch: [E],
    loadComponent: () => import("./chunk-DCQDAUOV.js").then(e => e.Home)
}, {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
}];
var q = {
    providers: [f(), b(), F(w), {
        provide: z,
        useValue: l(u({}, new y), {
            maxWidth: "95vw",
            maxHeight: "95vh",
            disableClose: !0
        })
    }, I( () => M({
        projectId: "n64fj2elf4nz47phegkj0vdqftm4t6",
        apiKey: "AIzaSyBuPlI7zb-QEx_KXVW-dXZ1I6b7qXhI4OI",
        appId: "1:433640315891:web:9eb2f0ea88a5186013d086",
        authDomain: "n64fj2elf4nz47phegkj0vdqftm4t6.firebaseapp.com",
        storageBucket: "n64fj2elf4nz47phegkj0vdqftm4t6.firebasestorage.app"
    })), D( () => {
        let e = j();
        return i() && T(e, "http://localhost:9099"),
        e
    }
    ), x( () => {
        let e = R();
        return i() && O(e, "localhost", 5001),
        e
    }
    ), S( () => {
        let e = k();
        return i() && U(e, "localhost", 8080),
        e
    }
    )]
};
var a = class e {
    constructor(o) {
        localStorage.getItem("theme") === "dark" && o.addClass(document.body, "dark")
    }
    static \u0275fac = function(t) {
        return new (t || e)(h(d))
    }
    ;
    static \u0275cmp = g({
        type: e,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function(t, n) {
            t & 1 && v(0, "router-outlet")
        },
        dependencies: [C],
        encapsulation: 2
    })
}
;
A(a, q).catch(e => console.error(e));
