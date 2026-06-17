import {a as at, d as ot, f as nt, h as A, j as ct, k as R, l as K, m as P, n as T, o as O} from "./chunk-M5HDRYQQ.js";
import {a as Oi, b as H, c as Bi, d as Ni, e as Li, f as Hi, g as zi, h as Vi, i as ji, j as Ui, k as Zi, l as si, m as Ji, n as I, o as k, p as Xi, r as Yi, s as it, t as tt, u as et} from "./chunk-ZSSJDJN2.js";
import {$ as xi, Aa as Ei, Ba as g, C as J, Ca as _, D as X, E as vi, F as fi, Ga as oi, Ha as x, I as j, Ia as D, Ja as r, Jb as Ri, Ka as m, La as q, M as G, Ma as Fi, N as bi, Ob as Pi, P as yi, Q as s, R as Y, S as Ci, Sa as Ai, Sb as L, Tb as Ti, W as wi, Wa as ni, X as C, Xa as M, Ya as ci, _ as u, aa as Ii, ac as Gi, bc as ri, cc as Qi, e as z, ga as Q, ha as v, ia as f, ic as qi, ja as ii, ka as ti, kc as Ki, l as $, la as ei, ma as w, na as o, oa as n, pa as p, pc as Wi, qa as ki, r as V, ra as Si, s as gi, sc as $i, t as B, ta as Di, ua as Mi, uc as di, va as y, wa as F, x as _i, xa as ai, y as S, ya as N, z as h, za as b} from "./chunk-QLJWNBRG.js";
var ft = ["*", [["mat-chip-avatar"], ["", "matChipAvatar", ""]], [["mat-chip-trailing-icon"], ["", "matChipRemove", ""], ["", "matChipTrailingIcon", ""]]]
  , bt = ["*", "mat-chip-avatar, [matChipAvatar]", "mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];
function yt(a, d) {
    a & 1 && (o(0, "span", 3),
    N(1, 1),
    n())
}
function Ct(a, d) {
    a & 1 && (o(0, "span", 6),
    N(1, 2),
    n())
}
var wt = ["*"];
var xt = new S("mat-chips-default-options",{
    providedIn: "root",
    factory: () => ({
        separatorKeyCodes: [13]
    })
})
  , rt = new S("MatChipAvatar")
  , st = new S("MatChipTrailingIcon")
  , dt = new S("MatChipEdit")
  , lt = new S("MatChipRemove")
  , mt = new S("MatChip")
  , ht = ( () => {
    class a {
        _elementRef = h(G);
        _parentChip = h(mt);
        isInteractive = !0;
        _isPrimary = !0;
        _isLeading = !1;
        get disabled() {
            return this._disabled || this._parentChip?.disabled || !1
        }
        set disabled(i) {
            this._disabled = i
        }
        _disabled = !1;
        tabIndex = -1;
        _allowFocusWhenDisabled = !1;
        _getDisabledAttribute() {
            return this.disabled && !this._allowFocusWhenDisabled ? "" : null
        }
        _getTabindex() {
            return this.disabled && !this._allowFocusWhenDisabled || !this.isInteractive ? null : this.tabIndex.toString()
        }
        constructor() {
            h(ri).load(si),
            this._elementRef.nativeElement.nodeName === "BUTTON" && this._elementRef.nativeElement.setAttribute("type", "button")
        }
        focus() {
            this._elementRef.nativeElement.focus()
        }
        _handleClick(i) {
            !this.disabled && this.isInteractive && this._isPrimary && (i.preventDefault(),
            this._parentChip._handlePrimaryActionInteraction())
        }
        _handleKeydown(i) {
            (i.keyCode === 13 || i.keyCode === 32) && !this.disabled && this.isInteractive && this._isPrimary && !this._parentChip._isEditing && (i.preventDefault(),
            this._parentChip._handlePrimaryActionInteraction())
        }
        static \u0275fac = function(t) {
            return new (t || a)
        }
        ;
        static \u0275dir = Ii({
            type: a,
            selectors: [["", "matChipAction", ""]],
            hostAttrs: [1, "mdc-evolution-chip__action", "mat-mdc-chip-action"],
            hostVars: 11,
            hostBindings: function(t, e) {
                t & 1 && y("click", function(c) {
                    return e._handleClick(c)
                })("keydown", function(c) {
                    return e._handleKeydown(c)
                }),
                t & 2 && (Q("tabindex", e._getTabindex())("disabled", e._getDisabledAttribute())("aria-disabled", e.disabled),
                x("mdc-evolution-chip__action--primary", e._isPrimary)("mdc-evolution-chip__action--presentational", !e.isInteractive)("mdc-evolution-chip__action--secondary", !e._isPrimary)("mdc-evolution-chip__action--trailing", !e._isPrimary && !e._isLeading))
            },
            inputs: {
                isInteractive: "isInteractive",
                disabled: [2, "disabled", "disabled", M],
                tabIndex: [2, "tabIndex", "tabIndex", i => i == null ? -1 : ci(i)],
                _allowFocusWhenDisabled: "_allowFocusWhenDisabled"
            }
        })
    }
    return a
}
)();
var li = ( () => {
    class a {
        _changeDetectorRef = h(ni);
        _elementRef = h(G);
        _tagName = h(Ai);
        _ngZone = h(Ci);
        _focusMonitor = h(Gi);
        _globalRippleOptions = h(Ui, {
            optional: !0
        });
        _document = h(fi);
        _onFocus = new z;
        _onBlur = new z;
        _isBasicChip;
        role = null;
        _hasFocusInternal = !1;
        _pendingFocus;
        _actionChanges;
        _animationsDisabled = Wi();
        _allLeadingIcons;
        _allTrailingIcons;
        _allEditIcons;
        _allRemoveIcons;
        _hasFocus() {
            return this._hasFocusInternal
        }
        id = h(qi).getId("mat-mdc-chip-");
        ariaLabel = null;
        ariaDescription = null;
        _chipListDisabled = !1;
        _hadFocusOnRemove = !1;
        _textElement;
        get value() {
            return this._value !== void 0 ? this._value : this._textElement.textContent.trim()
        }
        set value(i) {
            this._value = i
        }
        _value;
        color;
        removable = !0;
        highlighted = !1;
        disableRipple = !1;
        get disabled() {
            return this._disabled || this._chipListDisabled
        }
        set disabled(i) {
            this._disabled = i
        }
        _disabled = !1;
        removed = new Y;
        destroyed = new Y;
        basicChipAttrName = "mat-basic-chip";
        leadingIcon;
        editIcon;
        trailingIcon;
        removeIcon;
        primaryAction;
        _rippleLoader = h(Zi);
        _injector = h(vi);
        constructor() {
            let i = h(ri);
            i.load(si),
            i.load(Qi),
            this._monitorFocus(),
            this._rippleLoader?.configureRipple(this._elementRef.nativeElement, {
                className: "mat-mdc-chip-ripple",
                disabled: this._isRippleDisabled()
            })
        }
        ngOnInit() {
            this._isBasicChip = this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName) || this._tagName.toLowerCase() === this.basicChipAttrName
        }
        ngAfterViewInit() {
            this._textElement = this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),
            this._pendingFocus && (this._pendingFocus = !1,
            this.focus())
        }
        ngAfterContentInit() {
            this._actionChanges = $(this._allLeadingIcons.changes, this._allTrailingIcons.changes, this._allEditIcons.changes, this._allRemoveIcons.changes).subscribe( () => this._changeDetectorRef.markForCheck())
        }
        ngDoCheck() {
            this._rippleLoader.setDisabled(this._elementRef.nativeElement, this._isRippleDisabled())
        }
        ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef),
            this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),
            this._actionChanges?.unsubscribe(),
            this.destroyed.emit({
                chip: this
            }),
            this.destroyed.complete()
        }
        remove() {
            this.removable && (this._hadFocusOnRemove = this._hasFocus(),
            this.removed.emit({
                chip: this
            }))
        }
        _isRippleDisabled() {
            return this.disabled || this.disableRipple || this._animationsDisabled || this._isBasicChip || !this._hasInteractiveActions() || !!this._globalRippleOptions?.disabled
        }
        _hasTrailingIcon() {
            return !!(this.trailingIcon || this.removeIcon)
        }
        _handleKeydown(i) {
            (i.keyCode === 8 && !i.repeat || i.keyCode === 46) && (i.preventDefault(),
            this.remove())
        }
        focus() {
            this.disabled || (this.primaryAction ? this.primaryAction.focus() : this._pendingFocus = !0)
        }
        _getSourceAction(i) {
            return this._getActions().find(t => {
                let e = t._elementRef.nativeElement;
                return e === i || e.contains(i)
            }
            )
        }
        _getActions() {
            let i = [];
            return this.editIcon && i.push(this.editIcon),
            this.primaryAction && i.push(this.primaryAction),
            this.removeIcon && i.push(this.removeIcon),
            this.trailingIcon && i.push(this.trailingIcon),
            i
        }
        _handlePrimaryActionInteraction() {}
        _hasInteractiveActions() {
            return this._getActions().some(i => i.isInteractive)
        }
        _edit(i) {}
        _monitorFocus() {
            this._focusMonitor.monitor(this._elementRef, !0).subscribe(i => {
                let t = i !== null;
                t !== this._hasFocusInternal && (this._hasFocusInternal = t,
                t ? this._onFocus.next({
                    chip: this
                }) : (this._changeDetectorRef.markForCheck(),
                setTimeout( () => this._ngZone.run( () => this._onBlur.next({
                    chip: this
                })))))
            }
            )
        }
        static \u0275fac = function(t) {
            return new (t || a)
        }
        ;
        static \u0275cmp = u({
            type: a,
            selectors: [["mat-basic-chip"], ["", "mat-basic-chip", ""], ["mat-chip"], ["", "mat-chip", ""]],
            contentQueries: function(t, e, l) {
                if (t & 1 && (b(l, rt, 5),
                b(l, dt, 5),
                b(l, st, 5),
                b(l, lt, 5),
                b(l, rt, 5),
                b(l, st, 5),
                b(l, dt, 5),
                b(l, lt, 5)),
                t & 2) {
                    let c;
                    g(c = _()) && (e.leadingIcon = c.first),
                    g(c = _()) && (e.editIcon = c.first),
                    g(c = _()) && (e.trailingIcon = c.first),
                    g(c = _()) && (e.removeIcon = c.first),
                    g(c = _()) && (e._allLeadingIcons = c),
                    g(c = _()) && (e._allTrailingIcons = c),
                    g(c = _()) && (e._allEditIcons = c),
                    g(c = _()) && (e._allRemoveIcons = c)
                }
            },
            viewQuery: function(t, e) {
                if (t & 1 && Ei(ht, 5),
                t & 2) {
                    let l;
                    g(l = _()) && (e.primaryAction = l.first)
                }
            },
            hostAttrs: [1, "mat-mdc-chip"],
            hostVars: 31,
            hostBindings: function(t, e) {
                t & 1 && y("keydown", function(c) {
                    return e._handleKeydown(c)
                }),
                t & 2 && (Mi("id", e.id),
                Q("role", e.role)("aria-label", e.ariaLabel),
                D("mat-" + (e.color || "primary")),
                x("mdc-evolution-chip", !e._isBasicChip)("mdc-evolution-chip--disabled", e.disabled)("mdc-evolution-chip--with-trailing-action", e._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic", e.leadingIcon)("mdc-evolution-chip--with-primary-icon", e.leadingIcon)("mdc-evolution-chip--with-avatar", e.leadingIcon)("mat-mdc-chip-with-avatar", e.leadingIcon)("mat-mdc-chip-highlighted", e.highlighted)("mat-mdc-chip-disabled", e.disabled)("mat-mdc-basic-chip", e._isBasicChip)("mat-mdc-standard-chip", !e._isBasicChip)("mat-mdc-chip-with-trailing-icon", e._hasTrailingIcon())("_mat-animation-noopable", e._animationsDisabled))
            },
            inputs: {
                role: "role",
                id: "id",
                ariaLabel: [0, "aria-label", "ariaLabel"],
                ariaDescription: [0, "aria-description", "ariaDescription"],
                value: "value",
                color: "color",
                removable: [2, "removable", "removable", M],
                highlighted: [2, "highlighted", "highlighted", M],
                disableRipple: [2, "disableRipple", "disableRipple", M],
                disabled: [2, "disabled", "disabled", M]
            },
            outputs: {
                removed: "removed",
                destroyed: "destroyed"
            },
            exportAs: ["matChip"],
            features: [Fi([{
                provide: mt,
                useExisting: a
            }])],
            ngContentSelectors: bt,
            decls: 8,
            vars: 3,
            consts: [[1, "mat-mdc-chip-focus-overlay"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--primary"], ["matChipAction", "", 3, "isInteractive"], [1, "mdc-evolution-chip__graphic", "mat-mdc-chip-graphic"], [1, "mdc-evolution-chip__text-label", "mat-mdc-chip-action-label"], [1, "mat-mdc-chip-primary-focus-indicator", "mat-focus-indicator"], [1, "mdc-evolution-chip__cell", "mdc-evolution-chip__cell--trailing"]],
            template: function(t, e) {
                t & 1 && (ai(ft),
                p(0, "span", 0),
                o(1, "span", 1)(2, "span", 2),
                v(3, yt, 2, 0, "span", 3),
                o(4, "span", 4),
                N(5),
                p(6, "span", 5),
                n()()(),
                v(7, Ct, 2, 0, "span", 6)),
                t & 2 && (s(2),
                w("isInteractive", !1),
                s(),
                f(e.leadingIcon ? 3 : -1),
                s(4),
                f(e._hasTrailingIcon() ? 7 : -1))
            },
            dependencies: [ht],
            styles: [`.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{flex-basis:100%;overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}@media(forced-colors: active){.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{forced-color-adjust:none}}.mdc-evolution-chip__action--primary{font:inherit;letter-spacing:inherit;white-space:inherit;overflow-x:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-outline-width, 1px);border-radius:var(--mat-chip-container-shape-radius, 8px);box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1;border-style:solid}.mat-mdc-standard-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-outline-color, var(--mat-sys-outline))}.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before{border-color:var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before{border-color:var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before{border-width:var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-basic-chip .mdc-evolution-chip__action--primary{font:inherit}.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}.mdc-evolution-chip__action--secondary{position:relative;overflow:visible}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary{color:var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary{color:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary{padding-left:8px;padding-right:8px}.mdc-evolution-chip__text-label{-webkit-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.mat-mdc-standard-chip .mdc-evolution-chip__text-label{font-family:var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label{color:var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label,.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mat-mdc-standard-chip .mdc-evolution-chip__graphic{width:var(--mat-chip-with-avatar-avatar-size, 24px);height:var(--mat-chip-with-avatar-avatar-size, 24px);font-size:var(--mat-chip-with-avatar-avatar-size, 24px)}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:8px;padding-right:4px}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic{padding-left:0}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%;height:20px;width:20px}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@media(forced-colors: active){.mdc-evolution-chip__checkmark-path{stroke:CanvasText !important}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing{height:18px;width:18px;font-size:18px}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove{opacity:calc(var(--mat-chip-trailing-action-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus{opacity:calc(var(--mat-chip-trailing-action-focus-opacity, 1)*var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38))}.mat-mdc-standard-chip{border-radius:var(--mat-chip-container-shape-radius, 8px);height:var(--mat-chip-container-height, 32px)}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-container-color, transparent)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{background-color:var(--mat-chip-elevated-disabled-container-color)}.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled){background-color:var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled{background-color:var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}@media(forced-colors: active){.mat-mdc-standard-chip{outline:solid 1px}}.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary{border-radius:var(--mat-chip-with-avatar-avatar-shape-radius, 24px);width:var(--mat-chip-with-icon-icon-size, 18px);height:var(--mat-chip-with-icon-icon-size, 18px);font-size:var(--mat-chip-with-icon-icon-size, 18px)}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-highlighted{--mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));--mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));--mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));--mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0)}.mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover,.mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));opacity:var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay,.mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay{background:var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));opacity:var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar{opacity:var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38)}.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{opacity:var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38)}.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{opacity:var(--mat-chip-with-icon-disabled-icon-opacity, 0.38)}.mat-mdc-standard-chip.mdc-evolution-chip--disabled{opacity:var(--mat-chip-disabled-container-opacity, 1)}.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface))}.mat-mdc-chip-edit,.mat-mdc-chip-remove{opacity:var(--mat-chip-trailing-action-opacity, 1)}.mat-mdc-chip-edit:focus,.mat-mdc-chip-remove:focus{opacity:var(--mat-chip-trailing-action-focus-opacity, 1)}.mat-mdc-chip-edit::after,.mat-mdc-chip-remove::after{background-color:var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-chip-edit:hover::after,.mat-mdc-chip-remove:hover::after{opacity:var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-chip-edit:focus::after,.mat-mdc-chip-remove:focus::after{opacity:var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-chip-selected .mat-mdc-chip-remove::after,.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after{background-color:var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-mdc-standard-chip{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-standard-chip .mdc-evolution-chip__cell--primary,.mat-mdc-standard-chip .mdc-evolution-chip__action--primary,.mat-mdc-standard-chip .mat-mdc-chip-action-label{overflow:visible}.mat-mdc-standard-chip .mat-mdc-chip-graphic,.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon{box-sizing:content-box}.mat-mdc-standard-chip._mat-animation-noopable,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path{transition-duration:1ms;animation-duration:1ms}.mat-mdc-chip-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;opacity:0;border-radius:inherit;transition:opacity 150ms linear}._mat-animation-noopable .mat-mdc-chip-focus-overlay{transition:none}.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay{display:none}.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-chip-avatar{text-align:center;line-height:1;color:var(--mat-chip-with-icon-icon-color, currentColor)}.mat-mdc-chip{position:relative;z-index:0}.mat-mdc-chip-action-label{text-align:left;z-index:1}[dir=rtl] .mat-mdc-chip-action-label{text-align:right}.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label{position:relative}.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.mat-mdc-chip-action-label .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-chip-edit::before,.mat-mdc-chip-remove::before{margin:calc(var(--mat-focus-indicator-border-width, 3px)*-1);left:8px;right:8px}.mat-mdc-chip-edit::after,.mat-mdc-chip-remove::after{content:"";display:block;opacity:0;position:absolute;top:-3px;bottom:-3px;left:5px;right:5px;border-radius:50%;box-sizing:border-box;padding:12px;margin:-12px;background-clip:content-box}.mat-mdc-chip-edit .mat-icon,.mat-mdc-chip-remove .mat-icon{width:18px;height:18px;font-size:18px;box-sizing:content-box}.mat-chip-edit-input{cursor:text;display:inline-block;color:inherit;outline:0}@media(forced-colors: active){.mat-mdc-chip-selected:not(.mat-mdc-chip-multiple){outline-width:3px}}.mat-mdc-chip-action:focus .mat-focus-indicator::before{content:""}.mdc-evolution-chip__icon,.mat-mdc-chip-edit .mat-icon,.mat-mdc-chip-remove .mat-icon{min-height:fit-content}
`],
            encapsulation: 2,
            changeDetection: 0
        })
    }
    return a
}
)();
var ut = ( () => {
    class a {
        _elementRef = h(G);
        _changeDetectorRef = h(ni);
        _dir = h($i, {
            optional: !0
        });
        _lastDestroyedFocusedChipIndex = null;
        _keyManager;
        _destroyed = new z;
        _defaultRole = "presentation";
        get chipFocusChanges() {
            return this._getChipStream(i => i._onFocus)
        }
        get chipDestroyedChanges() {
            return this._getChipStream(i => i.destroyed)
        }
        get chipRemovedChanges() {
            return this._getChipStream(i => i.removed)
        }
        get disabled() {
            return this._disabled
        }
        set disabled(i) {
            this._disabled = i,
            this._syncChipsState()
        }
        _disabled = !1;
        get empty() {
            return !this._chips || this._chips.length === 0
        }
        get role() {
            return this._explicitRole ? this._explicitRole : this.empty ? null : this._defaultRole
        }
        tabIndex = 0;
        set role(i) {
            this._explicitRole = i
        }
        _explicitRole = null;
        get focused() {
            return this._hasFocusedChip()
        }
        _chips;
        _chipActions = new bi;
        constructor() {}
        ngAfterViewInit() {
            this._setUpFocusManagement(),
            this._trackChipSetChanges(),
            this._trackDestroyedFocusedChip()
        }
        ngOnDestroy() {
            this._keyManager?.destroy(),
            this._chipActions.destroy(),
            this._destroyed.next(),
            this._destroyed.complete()
        }
        _hasFocusedChip() {
            return this._chips && this._chips.some(i => i._hasFocus())
        }
        _syncChipsState() {
            this._chips?.forEach(i => {
                i._chipListDisabled = this._disabled,
                i._changeDetectorRef.markForCheck()
            }
            )
        }
        focus() {}
        _handleKeydown(i) {
            this._originatesFromChip(i) && this._keyManager.onKeydown(i)
        }
        _isValidIndex(i) {
            return i >= 0 && i < this._chips.length
        }
        _allowFocusEscape() {
            let i = this._elementRef.nativeElement.tabIndex;
            i !== -1 && (this._elementRef.nativeElement.tabIndex = -1,
            setTimeout( () => this._elementRef.nativeElement.tabIndex = i))
        }
        _getChipStream(i) {
            return this._chips.changes.pipe(V(null), gi( () => $(...this._chips.map(i))))
        }
        _originatesFromChip(i) {
            let t = i.target;
            for (; t && t !== this._elementRef.nativeElement; ) {
                if (t.classList.contains("mat-mdc-chip"))
                    return !0;
                t = t.parentElement
            }
            return !1
        }
        _setUpFocusManagement() {
            this._chips.changes.pipe(V(this._chips)).subscribe(i => {
                let t = [];
                i.forEach(e => e._getActions().forEach(l => t.push(l))),
                this._chipActions.reset(t),
                this._chipActions.notifyOnChanges()
            }
            ),
            this._keyManager = new Ki(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir ? this._dir.value : "ltr").withHomeAndEnd().skipPredicate(i => this._skipPredicate(i)),
            this.chipFocusChanges.pipe(B(this._destroyed)).subscribe( ({chip: i}) => {
                let t = i._getSourceAction(document.activeElement);
                t && this._keyManager.updateActiveItem(t)
            }
            ),
            this._dir?.change.pipe(B(this._destroyed)).subscribe(i => this._keyManager.withHorizontalOrientation(i))
        }
        _skipPredicate(i) {
            return !i.isInteractive || i.disabled
        }
        _trackChipSetChanges() {
            this._chips.changes.pipe(V(null), B(this._destroyed)).subscribe( () => {
                this.disabled && Promise.resolve().then( () => this._syncChipsState()),
                this._redirectDestroyedChipFocus()
            }
            )
        }
        _trackDestroyedFocusedChip() {
            this.chipDestroyedChanges.pipe(B(this._destroyed)).subscribe(i => {
                let e = this._chips.toArray().indexOf(i.chip)
                  , l = i.chip._hasFocus()
                  , c = i.chip._hadFocusOnRemove && this._keyManager.activeItem && i.chip._getActions().includes(this._keyManager.activeItem)
                  , ui = l || c;
                this._isValidIndex(e) && ui && (this._lastDestroyedFocusedChipIndex = e)
            }
            )
        }
        _redirectDestroyedChipFocus() {
            if (this._lastDestroyedFocusedChipIndex != null) {
                if (this._chips.length) {
                    let i = Math.min(this._lastDestroyedFocusedChipIndex, this._chips.length - 1)
                      , t = this._chips.toArray()[i];
                    t.disabled ? this._chips.length === 1 ? this.focus() : this._keyManager.setPreviousItemActive() : t.focus()
                } else
                    this.focus();
                this._lastDestroyedFocusedChipIndex = null
            }
        }
        static \u0275fac = function(t) {
            return new (t || a)
        }
        ;
        static \u0275cmp = u({
            type: a,
            selectors: [["mat-chip-set"]],
            contentQueries: function(t, e, l) {
                if (t & 1 && b(l, li, 5),
                t & 2) {
                    let c;
                    g(c = _()) && (e._chips = c)
                }
            },
            hostAttrs: [1, "mat-mdc-chip-set", "mdc-evolution-chip-set"],
            hostVars: 1,
            hostBindings: function(t, e) {
                t & 1 && y("keydown", function(c) {
                    return e._handleKeydown(c)
                }),
                t & 2 && Q("role", e.role)
            },
            inputs: {
                disabled: [2, "disabled", "disabled", M],
                role: "role",
                tabIndex: [2, "tabIndex", "tabIndex", i => i == null ? 0 : ci(i)]
            },
            ngContentSelectors: wt,
            decls: 2,
            vars: 0,
            consts: [["role", "presentation", 1, "mdc-evolution-chip-set__chips"]],
            template: function(t, e) {
                t & 1 && (ai(),
                ki(0, "div", 0),
                N(1),
                Si())
            },
            styles: [`.mat-mdc-chip-set{display:flex}.mat-mdc-chip-set:focus{outline:none}.mat-mdc-chip-set .mdc-evolution-chip-set__chips{min-width:100%;margin-left:-8px;margin-right:0}.mat-mdc-chip-set .mdc-evolution-chip{margin:4px 0 4px 8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips{margin-left:0;margin-right:-8px}[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip{margin-left:0;margin-right:8px}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mat-mdc-chip-set-stacked{flex-direction:column;align-items:flex-start}.mat-mdc-chip-set-stacked .mat-mdc-chip{width:100%}.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic{flex-grow:0}.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary{flex-basis:100%;justify-content:start}input.mat-mdc-chip-input{flex:1 0 150px;margin-left:8px}[dir=rtl] input.mat-mdc-chip-input{margin-left:0;margin-right:8px}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder{opacity:1}.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder{opacity:1}.mat-mdc-chip-set+input.mat-mdc-chip-input{margin-left:0;margin-right:0}
`],
            encapsulation: 2,
            changeDetection: 0
        })
    }
    return a
}
)();
var gt = ( () => {
    class a {
        static \u0275fac = function(t) {
            return new (t || a)
        }
        ;
        static \u0275mod = xi({
            type: a
        });
        static \u0275inj = _i({
            providers: [it, {
                provide: xt,
                useValue: {
                    separatorKeyCodes: [13]
                }
            }],
            imports: [di, Ji, di]
        })
    }
    return a
}
)();
var E = class a {
    msg = h(A);
    static \u0275fac = function(i) {
        return new (i || a)
    }
    ;
    static \u0275cmp = u({
        type: a,
        selectors: [["app-dialog-msg"]],
        decls: 5,
        vars: 1,
        consts: [["matButton", "", "mat-dialog-close", ""]],
        template: function(i, t) {
            i & 1 && (o(0, "mat-dialog-content"),
            r(1),
            n(),
            o(2, "mat-dialog-actions")(3, "button", 0),
            r(4, "Close"),
            n()()),
            i & 2 && (s(),
            m(t.msg))
        },
        dependencies: [O, R, T, P, k, I],
        encapsulation: 2
    })
}
;
function kt(a, d) {
    if (a & 1 && (o(0, "p"),
    r(1),
    n()),
    a & 2) {
        let i = d.$implicit;
        s(),
        m(i)
    }
}
function St(a, d) {
    if (a & 1 && (o(0, "td"),
    ti(1, kt, 2, 1, "p", null, ii),
    n()),
    a & 2) {
        let i = d.$implicit;
        x("clean", i.clean),
        s(),
        ei(i.value.split(`
`))
    }
}
function Dt(a, d) {
    a & 1 && (o(0, "div", 6),
    r(1, "DO NOT TRANSFER"),
    n())
}
var U = class a {
    dialogData = h(A);
    static \u0275fac = function(i) {
        return new (i || a)
    }
    ;
    static \u0275cmp = u({
        type: a,
        selectors: [["app-dialog-result-scrub-phone"]],
        decls: 25,
        vars: 2,
        consts: [["mat-dialog-title", ""], [1, "orange"], [1, "img", "bla"], [1, "img", "dnc"], [1, "img", "tcpa"], [3, "clean"], [1, "do-not-transfer"], [1, "mat-dialog-last-child"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""]],
        template: function(i, t) {
            i & 1 && (o(0, "h2", 0)(1, "span", 1),
            r(2),
            n(),
            r(3, ` Result
`),
            n(),
            o(4, "mat-dialog-content"),
            p(5, "div"),
            o(6, "table")(7, "tr")(8, "th"),
            p(9, "div", 2),
            n(),
            o(10, "th"),
            p(11, "div", 3),
            n(),
            o(12, "th"),
            p(13, "div", 4),
            n(),
            o(14, "th")(15, "b"),
            r(16, "INTERNAL DNC"),
            n()()(),
            o(17, "tr"),
            ti(18, St, 3, 2, "td", 5, ii),
            n()(),
            v(20, Dt, 2, 0, "div", 6),
            p(21, "div", 7),
            n(),
            o(22, "mat-dialog-actions", 8)(23, "button", 9),
            r(24, "Close"),
            n()()),
            i & 2 && (s(2),
            m(t.dialogData.phone),
            s(16),
            ei(t.dialogData.results),
            s(2),
            f(t.dialogData.isDoNotTransfer ? 20 : -1))
        },
        dependencies: [O, R, K, T, P, k, I],
        styles: [".orange[_ngcontent-%COMP%]{font-weight:500}table[_ngcontent-%COMP%]{margin:2px 0;min-width:500px;width:100%;max-width:1200px;table-layout:fixed;border-collapse:collapse;overflow:hidden;border-radius:8px;border-style:hidden;box-shadow:0 0 0 1px var(--mat-sys-outline-variant)}th[_ngcontent-%COMP%]{font-weight:500;background-color:var(--mat-sys-surface-variant)}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;border:1px solid var(--mat-sys-outline-variant)}td[_ngcontent-%COMP%]{color:red;padding:16px;font-size:28px;overflow-wrap:break-word}td.clean[_ngcontent-%COMP%]{color:green}.img[_ngcontent-%COMP%]{height:60px;background-size:contain;background-repeat:no-repeat;background-position:center center}.bla[_ngcontent-%COMP%]{background-image:url(/bla.png)}.dnc[_ngcontent-%COMP%]{background-image:url(/dnc.png)}.tcpa[_ngcontent-%COMP%]{background-image:url(/tcpa.png)}p[_ngcontent-%COMP%]{line-height:32px}.do-not-transfer[_ngcontent-%COMP%]{color:red;margin-top:32px;margin-bottom:4px;line-height:64px;font-size:60px;font-weight:500;text-align:center}b[_ngcontent-%COMP%]{font-size:20px;font-weight:700}"]
    })
}
;
function Mt(a, d) {
    a & 1 && (o(0, "div", 2),
    r(1, "DO NOT TRANSFER"),
    n())
}
var Z = class a {
    dialogData = h(A);
    static \u0275fac = function(i) {
        return new (i || a)
    }
    ;
    static \u0275cmp = u({
        type: a,
        selectors: [["app-dialog-result-scrub-name"]],
        decls: 28,
        vars: 7,
        consts: [["mat-dialog-title", ""], [1, "orange"], [1, "do-not-transfer"], [1, "mat-dialog-last-child"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""]],
        template: function(i, t) {
            i & 1 && (o(0, "h2", 0),
            r(1, " Name Search "),
            o(2, "span", 1),
            r(3),
            n(),
            r(4, ` Result
`),
            n(),
            o(5, "mat-dialog-content"),
            p(6, "div"),
            o(7, "table")(8, "tr")(9, "th"),
            r(10, "Name"),
            n(),
            o(11, "td"),
            r(12),
            n()(),
            o(13, "tr")(14, "th"),
            r(15, "Phone"),
            n(),
            o(16, "td"),
            r(17),
            n()(),
            o(18, "tr")(19, "th"),
            r(20, "Status"),
            n(),
            o(21, "td"),
            r(22),
            n()()(),
            v(23, Mt, 2, 0, "div", 2),
            p(24, "div", 3),
            n(),
            o(25, "mat-dialog-actions", 4)(26, "button", 5),
            r(27, "Close"),
            n()()),
            i & 2 && (s(3),
            m(t.dialogData.name),
            s(9),
            m(t.dialogData.result.name),
            s(5),
            m(t.dialogData.result.phone),
            s(4),
            D(t.dialogData.result.clean ? "clean" : "red"),
            s(),
            q(" ", t.dialogData.result.value, " "),
            s(),
            f(t.dialogData.result.clean ? -1 : 23))
        },
        dependencies: [O, R, K, T, P, k, I],
        styles: [".orange[_ngcontent-%COMP%]{color:orange}table[_ngcontent-%COMP%]{margin:2px 0;font-size:20px;width:600px;table-layout:fixed;border-collapse:collapse;overflow:hidden;border-radius:8px;border-style:hidden;box-shadow:0 0 0 1px var(--mat-sys-outline-variant)}th[_ngcontent-%COMP%]{font-weight:500;background-color:var(--mat-sys-surface-variant)}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:16px;text-align:center;vertical-align:middle;border:1px solid var(--mat-sys-outline-variant)}.clean[_ngcontent-%COMP%]{color:green}.red[_ngcontent-%COMP%]{color:red}.do-not-transfer[_ngcontent-%COMP%]{color:red;margin-top:32px;margin-bottom:4px;line-height:64px;font-size:60px;font-weight:500;text-align:center}"]
    })
}
;
function Et(a, d) {
    a & 1 && p(0, "div", 3)
}
function Ft(a, d) {
    if (a & 1 && (o(0, "mat-chip-set", 4)(1, "mat-chip"),
    r(2, "Available Phone Scrub: "),
    o(3, "span"),
    r(4),
    n()(),
    o(5, "mat-chip"),
    r(6, "Available Name Scrub: "),
    o(7, "span"),
    r(8),
    n()()()),
    a & 2) {
        let i = F();
        s(3),
        D(i.userInfo().scrub.current.phone > 0 ? "green" : "red"),
        s(),
        m(i.userInfo().scrub.current.phone),
        s(3),
        D(i.userInfo().scrub.current.phone > 0 ? "green" : "red"),
        s(),
        m(i.userInfo().scrub.current.name)
    }
}
function At(a, d) {
    if (a & 1) {
        let i = Di();
        o(0, "div", 7)(1, "div", 8),
        p(2, "img", 9),
        n(),
        o(3, "form", 10, 0),
        y("ngSubmit", function() {
            J(i);
            let e = oi(4)
              , l = F();
            return X(l.clickSubmitFormPhone(e))
        }),
        o(5, "mat-form-field", 11)(6, "mat-label"),
        r(7, "BLA - dnc.com - TCPA Litigator List"),
        n(),
        p(8, "input", 12),
        n(),
        o(9, "button", 13),
        r(10, " Search "),
        n()(),
        o(11, "form", 10, 1),
        y("ngSubmit", function() {
            J(i);
            let e = oi(12)
              , l = F();
            return X(l.clickSubmitFormName(e))
        }),
        o(13, "mat-form-field", 11)(14, "mat-label"),
        r(15, "Name Search"),
        n(),
        p(16, "input", 14),
        n(),
        o(17, "button", 13),
        r(18, " Search "),
        n()()()
    }
    if (a & 2) {
        let i = F();
        s(2),
        w("src", i.userInfo().logo.url || "logo.png", yi),
        s(),
        w("formGroup", i.formPhone),
        s(6),
        x("no-loading", i.userInfo().scrub.current.phone <= 0),
        w("disabled", i.formPhone.disabled || i.userInfo().scrub.current.phone <= 0),
        s(2),
        w("formGroup", i.formName),
        s(6),
        x("no-loading", i.userInfo().scrub.current.name <= 0),
        w("disabled", i.formName.disabled || i.userInfo().scrub.current.name <= 0)
    }
}
var _t = class a {
    constructor(d, i, t, e, l, c, ui) {
        this._auth = i;
        this.fn = t;
        this.db = e;
        this.auth = l;
        this.dialog = c;
        this.renderer = ui;
        this.formPhone = d.nonNullable.group({
            phone: ["", [H.required, H.pattern(/^[0-9]{10}$/)]]
        }),
        this.formPhone.controls.phone.valueChanges.subscribe(vt => {
            this.formPhone.controls.phone.setValue(vt.replace(/[^0-9]/g, "").slice(0, 10), {
                emitEvent: !1
            })
        }
        ),
        this.formName = d.nonNullable.group({
            name: ["", [H.required, H.pattern(/.*\S.*/)]]
        }, {
            updateOn: "submit"
        })
    }
    isLoading = j(!0);
    isDarkMode = j(localStorage.getItem("theme") == "dark");
    userInfo = j({
        scrub: {
            current: {
                phone: 0,
                name: 0
            }
        },
        logo: {
            url: ""
        }
    });
    formPhone;
    formName;
    unSub;
    async ngOnInit() {
        if ((await L(this.fn, "1024_1000", "session_login")).status !== 200)
            return this.auth.signOut();
        L(this.fn, "512_80", "logged_in"),
        this.unSub = nt(ot(this.db, "dnc_scrubber__users__user", this._auth.currentUser.uid), i => {
            let t = i.data();
            t != null && (this.userInfo.set(t),
            this.isLoading.set(!1))
        }
        )
    }
    async clickSubmitFormPhone(d) {
        if (this.formPhone.invalid)
            return;
        this.formPhone.disable({
            emitEvent: !1
        });
        let i = this.formPhone.getRawValue().phone
          , t = await L(this.fn, "1024_1000", "scrub_phone", [i]).catch( () => null);
        if (t == null) {
            this.dialog.open(E, {
                data: "Something went wrong. Please try again later"
            }),
            this.formPhone.enable({
                emitEvent: !1
            });
            return
        }
        if (t.status == 402)
            return this.auth.signOut();
        if (t.status != 200) {
            this.dialog.open(E, {
                data: t.msg
            }),
            this.formPhone.enable({
                emitEvent: !1
            });
            return
        }
        let e = t.results.some( ({clean: l, value: c}) => !(l || c === "FederalDNC" || c === "StateDNC" || c === "No area code" || c.startsWith("Federal DNC") && !/litigator/i.test(c)));
        this.dialog.open(U, {
            data: {
                results: t.results,
                phone: i,
                isDoNotTransfer: e
            },
            backdropClass: e ? "red-backdrop" : void 0
        }),
        d.resetForm(void 0, {
            emitEvent: !1
        }),
        this.formPhone.enable({
            emitEvent: !1
        })
    }
    async clickSubmitFormName(d) {
        if (this.formName.invalid)
            return;
        this.formName.disable();
        let i = this.formName.getRawValue().name
          , t = await L(this.fn, "1024_1000", "scrub_name", [i]).catch( () => null);
        if (t == null) {
            this.dialog.open(E, {
                data: "Something went wrong. Please try again later"
            }),
            this.formName.enable();
            return
        }
        if (t.status == 402)
            return this.auth.signOut();
        if (t.status != 200) {
            this.dialog.open(E, {
                data: t.msg
            }),
            this.formName.enable();
            return
        }
        this.dialog.open(Z, {
            data: {
                result: t.result,
                name: i
            },
            backdropClass: t.result.clean ? void 0 : "red-backdrop"
        }),
        d.resetForm(),
        this.formName.enable()
    }
    toggleTheme() {
        this.isDarkMode.update(d => !d),
        this.isDarkMode() ? (this.renderer.addClass(document.body, "dark"),
        localStorage.setItem("theme", "dark")) : (this.renderer.removeClass(document.body, "dark"),
        localStorage.setItem("theme", "light"))
    }
    ngOnDestroy() {
        this.unSub && this.unSub()
    }
    static \u0275fac = function(i) {
        return new (i || a)(C(Vi),C(Ri),C(Pi),C(at),C(Ti),C(ct),C(wi))
    }
    ;
    static \u0275cmp = u({
        type: a,
        selectors: [["app-home"]],
        decls: 8,
        vars: 3,
        consts: [["ngFormPhone", "ngForm"], ["ngFormName", "ngForm"], [1, "nav"], [1, "loader"], ["aria-label", "Dog selection"], ["matButton", "", 1, "mat-red", 3, "click"], ["matButton", "", 1, "btn-emoji", 3, "click"], [1, "content"], [1, "logo"], ["alt", "Logo", 3, "src"], [3, "ngSubmit", "formGroup"], ["subscriptSizing", "dynamic"], ["matInput", "", "formControlName", "phone", "placeholder", "1234567890"], ["type", "submit", "mat-flat-button", "", 1, "mat-dense-0", 3, "disabled"], ["matInput", "", "formControlName", "name", "placeholder", "John Doe"]],
        template: function(i, t) {
            i & 1 && (o(0, "div", 2),
            v(1, Et, 1, 0, "div", 3)(2, Ft, 9, 6, "mat-chip-set", 4),
            o(3, "button", 5),
            y("click", function() {
                return t.auth.signOut()
            }),
            r(4, "Logout"),
            n(),
            o(5, "button", 6),
            y("click", function() {
                return t.toggleTheme()
            }),
            r(6),
            n()(),
            v(7, At, 19, 9, "div", 7)),
            i & 2 && (s(),
            f(t.isLoading() ? 1 : 2),
            s(5),
            q(" ", t.isDarkMode() ? "\u{1F319}" : "\u{1F31E}", " "),
            s(),
            f(t.isLoading() ? -1 : 7))
        },
        dependencies: [k, I, gt, li, ut, ji, Li, Oi, Bi, Ni, Hi, zi, et, tt, Yi, Xi],
        styles: [".nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:16px;padding:4px}.content[_ngcontent-%COMP%]{padding:16px}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:140px;object-fit:contain;object-position:center}form[_ngcontent-%COMP%]{margin:40px auto 0;max-width:600px;display:flex;align-items:center;gap:32px}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}"]
    })
}
;
export {_t as Home};
