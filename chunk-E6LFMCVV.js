import {a as M, b as a, c as w, d as C, e as y, f as _, g as x, h as N, i as L, n as D, o as E, p as V, q as G, r as B, t as P, u as A} from "./chunk-ZSSJDJN2.js";
import {C as p, D as c, Ga as S, I as f, Ja as n, Q as s, Tb as I, X as l, _ as g, ha as v, ia as F, ma as d, na as o, oa as t, pa as u, ta as b, va as h} from "./chunk-QLJWNBRG.js";
function O(m, i) {
    m & 1 && (o(0, "mat-error"),
    n(1, "Invalid Username/Password"),
    t())
}
var T = class m {
    constructor(i, e) {
        this.authService = e;
        this.form = i.nonNullable.group({
            username: ["admin", [a.required, a.minLength(3)]],
            password: ["vocal123", [a.required, a.minLength(3)]]
        })
    }
    isFormInvalid = f(!1);
    async submitForm(i) {
        if (this.isFormInvalid.set(!1),
        !this.form.valid)
            return this.isFormInvalid.set(!0);
        this.form.disable();
        let {username: e, password: r} = this.form.getRawValue();
        await this.authService.signIn(e, r).catch( () => {
            i.resetForm(),
            this.form.enable(),
            this.isFormInvalid.set(!0)
        }
        )
    }
    static \u0275fac = function(e) {
        return new (e || m)(l(N),l(I))
    }
    ;
    static \u0275cmp = g({
        type: m,
        selectors: [["app-login"]],
        decls: 13,
        vars: 3,
        consts: [["ngForm", "ngForm"], [3, "ngSubmit", "formGroup"], ["subscriptSizing", "dynamic"], ["matInput", "", "formControlName", "username"], ["matInput", "", "type", "password", "formControlName", "password"], ["mat-flat-button", "", "type", "submit", 3, "disabled"]],
        template: function(e, r) {
            if (e & 1) {
                let j = b();
                o(0, "form", 1, 0),
                h("ngSubmit", function() {
                    p(j);
                    let q = S(1);
                    return c(r.submitForm(q))
                }),
                o(2, "mat-form-field", 2)(3, "mat-label"),
                n(4, "Username"),
                t(),
                u(5, "input", 3),
                t(),
                o(6, "mat-form-field", 2)(7, "mat-label"),
                n(8, "Password"),
                t(),
                u(9, "input", 4),
                t(),
                v(10, O, 2, 0, "mat-error"),
                o(11, "button", 5),
                n(12, "Login"),
                t()()
            }
            e & 2 && (d("formGroup", r.form),
            s(10),
            F(r.isFormInvalid() ? 10 : -1),
            s(),
            d("disabled", r.form.disabled))
        },
        dependencies: [L, y, M, w, C, _, x, A, P, B, V, G, E, D],
        styles: ["[_nghost-%COMP%]{display:block;max-width:400px;margin:0 auto;padding-top:max(5%,40px)}form[_ngcontent-%COMP%]{width:100%;margin-top:20px;display:flex;flex-direction:column;gap:20px}"]
    })
}
;
export {T as Login};