var WD = Object.defineProperty
  , zD = Object.defineProperties;
var GD = Object.getOwnPropertyDescriptors;
var qp = Object.getOwnPropertySymbols;
var qD = Object.prototype.hasOwnProperty
  , KD = Object.prototype.propertyIsEnumerable;
var Kp = (e, t, n) => t in e ? WD(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , m = (e, t) => {
    for (var n in t ||= {})
        qD.call(t, n) && Kp(e, n, t[n]);
    if (qp)
        for (var n of qp(t))
            KD.call(t, n) && Kp(e, n, t[n]);
    return e
}
  , j = (e, t) => zD(e, GD(t));
var Mu;
function Es() {
    return Mu
}
function ut(e) {
    let t = Mu;
    return Mu = e,
    t
}
var Yp = Symbol("NotFound");
function br(e) {
    return e === Yp || e?.name === "\u0275NotFound"
}
var he = null
  , Is = !1
  , Ou = 1
  , YD = null
  , ie = Symbol("SIGNAL");
function T(e) {
    let t = he;
    return he = e,
    t
}
function bs() {
    return he
}
var Rn = {
    version: 0,
    lastCleanEpoch: 0,
    dirty: !1,
    producers: void 0,
    producersTail: void 0,
    consumers: void 0,
    consumersTail: void 0,
    recomputing: !1,
    consumerAllowSignalWrites: !1,
    consumerIsAlwaysLive: !1,
    kind: "unknown",
    producerMustRecompute: () => !1,
    producerRecomputeValue: () => {}
    ,
    consumerMarkedDirty: () => {}
    ,
    consumerOnSignalRead: () => {}
};
function Mn(e) {
    if (Is)
        throw new Error("");
    if (he === null)
        return;
    he.consumerOnSignalRead(e);
    let t = he.producersTail;
    if (t !== void 0 && t.producer === e)
        return;
    let n, r = he.recomputing;
    if (r && (n = t !== void 0 ? t.nextProducer : he.producers,
    n !== void 0 && n.producer === e)) {
        he.producersTail = n,
        n.lastReadVersion = e.version;
        return
    }
    let i = e.consumersTail;
    if (i !== void 0 && i.consumer === he && (!r || QD(i, he)))
        return;
    let o = Cr(he)
      , s = {
        producer: e,
        consumer: he,
        nextProducer: n,
        prevConsumer: i,
        lastReadVersion: e.version,
        nextConsumer: void 0
    };
    he.producersTail = s,
    t !== void 0 ? t.nextProducer = s : he.producers = s,
    o && Xp(e, s)
}
function Zp() {
    Ou++
}
function Cs(e) {
    if (!(Cr(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === Ou)) {
        if (!e.producerMustRecompute(e) && !kn(e)) {
            ws(e);
            return
        }
        e.producerRecomputeValue(e),
        ws(e)
    }
}
function ku(e) {
    if (e.consumers === void 0)
        return;
    let t = Is;
    Is = !0;
    try {
        for (let n = e.consumers; n !== void 0; n = n.nextConsumer) {
            let r = n.consumer;
            r.dirty || ZD(r)
        }
    } finally {
        Is = t
    }
}
function xu() {
    return he?.consumerAllowSignalWrites !== !1
}
function ZD(e) {
    e.dirty = !0,
    ku(e),
    e.consumerMarkedDirty?.(e)
}
function ws(e) {
    e.dirty = !1,
    e.lastCleanEpoch = Ou
}
function Gt(e) {
    return e && Qp(e),
    T(e)
}
function Qp(e) {
    e.producersTail = void 0,
    e.recomputing = !0
}
function On(e, t) {
    T(t),
    e && Jp(e)
}
function Jp(e) {
    e.recomputing = !1;
    let t = e.producersTail
      , n = t !== void 0 ? t.nextProducer : e.producers;
    if (n !== void 0) {
        if (Cr(e))
            do
                n = Pu(n);
            while (n !== void 0);
        t !== void 0 ? t.nextProducer = void 0 : e.producers = void 0
    }
}
function kn(e) {
    for (let t = e.producers; t !== void 0; t = t.nextProducer) {
        let n = t.producer
          , r = t.lastReadVersion;
        if (r !== n.version || (Cs(n),
        r !== n.version))
            return !0
    }
    return !1
}
function qt(e) {
    if (Cr(e)) {
        let t = e.producers;
        for (; t !== void 0; )
            t = Pu(t)
    }
    e.producers = void 0,
    e.producersTail = void 0,
    e.consumers = void 0,
    e.consumersTail = void 0
}
function Xp(e, t) {
    let n = e.consumersTail
      , r = Cr(e);
    if (n !== void 0 ? (t.nextConsumer = n.nextConsumer,
    n.nextConsumer = t) : (t.nextConsumer = void 0,
    e.consumers = t),
    t.prevConsumer = n,
    e.consumersTail = t,
    !r)
        for (let i = e.producers; i !== void 0; i = i.nextProducer)
            Xp(i.producer, i)
}
function Pu(e) {
    let t = e.producer
      , n = e.nextProducer
      , r = e.nextConsumer
      , i = e.prevConsumer;
    if (e.nextConsumer = void 0,
    e.prevConsumer = void 0,
    r !== void 0 ? r.prevConsumer = i : t.consumersTail = i,
    i !== void 0)
        i.nextConsumer = r;
    else if (t.consumers = r,
    !Cr(t)) {
        let o = t.producers;
        for (; o !== void 0; )
            o = Pu(o)
    }
    return n
}
function Cr(e) {
    return e.consumerIsAlwaysLive || e.consumers !== void 0
}
function Ts(e) {
    YD?.(e)
}
function QD(e, t) {
    let n = t.producersTail;
    if (n !== void 0) {
        let r = t.producers;
        do {
            if (r === e)
                return !0;
            if (r === n)
                break;
            r = r.nextProducer
        } while (r !== void 0)
    }
    return !1
}
function Ss(e, t) {
    return Object.is(e, t)
}
function Li(e, t) {
    let n = Object.create(JD);
    n.computation = e,
    t !== void 0 && (n.equal = t);
    let r = () => {
        if (Cs(n),
        Mn(n),
        n.value === Pi)
            throw n.error;
        return n.value
    }
    ;
    return r[ie] = n,
    Ts(n),
    r
}
var _s = Symbol("UNSET")
  , Ds = Symbol("COMPUTING")
  , Pi = Symbol("ERRORED")
  , JD = j(m({}, Rn), {
    value: _s,
    dirty: !0,
    error: null,
    equal: Ss,
    kind: "computed",
    producerMustRecompute(e) {
        return e.value === _s || e.value === Ds
    },
    producerRecomputeValue(e) {
        if (e.value === Ds)
            throw new Error("");
        let t = e.value;
        e.value = Ds;
        let n = Gt(e), r, i = !1;
        try {
            r = e.computation(),
            T(null),
            i = t !== _s && t !== Pi && r !== Pi && e.equal(t, r)
        } catch (o) {
            r = Pi,
            e.error = o
        } finally {
            On(e, n)
        }
        if (i) {
            e.value = t;
            return
        }
        e.value = r,
        e.version++
    }
});
function XD() {
    throw new Error
}
var eg = XD;
function tg(e) {
    eg(e)
}
function Lu(e) {
    eg = e
}
var ew = null;
function Fu(e, t) {
    let n = Object.create(Fi);
    n.value = e,
    t !== void 0 && (n.equal = t);
    let r = () => ng(n);
    return r[ie] = n,
    Ts(n),
    [r, s => Tr(n, s), s => ju(n, s)]
}
function ng(e) {
    return Mn(e),
    e.value
}
function Tr(e, t) {
    xu() || tg(e),
    e.equal(e.value, t) || (e.value = t,
    tw(e))
}
function ju(e, t) {
    xu() || tg(e),
    Tr(e, t(e.value))
}
var Fi = j(m({}, Rn), {
    equal: Ss,
    value: void 0,
    kind: "signal"
});
function tw(e) {
    e.version++,
    Zp(),
    ku(e),
    ew?.(e)
}
function k(e) {
    return typeof e == "function"
}
function Sr(e) {
    let n = e(r => {
        Error.call(r),
        r.stack = new Error().stack
    }
    );
    return n.prototype = Object.create(Error.prototype),
    n.prototype.constructor = n,
    n
}
var As = Sr(e => function(n) {
    e(this),
    this.message = n ? `${n.length} errors occurred during unsubscription:
${n.map( (r, i) => `${i + 1}) ${r.toString()}`).join(`
  `)}` : "",
    this.name = "UnsubscriptionError",
    this.errors = n
}
);
function xn(e, t) {
    if (e) {
        let n = e.indexOf(t);
        0 <= n && e.splice(n, 1)
    }
}
var q = class e {
    constructor(t) {
        this.initialTeardown = t,
        this.closed = !1,
        this._parentage = null,
        this._finalizers = null
    }
    unsubscribe() {
        let t;
        if (!this.closed) {
            this.closed = !0;
            let {_parentage: n} = this;
            if (n)
                if (this._parentage = null,
                Array.isArray(n))
                    for (let o of n)
                        o.remove(this);
                else
                    n.remove(this);
            let {initialTeardown: r} = this;
            if (k(r))
                try {
                    r()
                } catch (o) {
                    t = o instanceof As ? o.errors : [o]
                }
            let {_finalizers: i} = this;
            if (i) {
                this._finalizers = null;
                for (let o of i)
                    try {
                        rg(o)
                    } catch (s) {
                        t = t ?? [],
                        s instanceof As ? t = [...t, ...s.errors] : t.push(s)
                    }
            }
            if (t)
                throw new As(t)
        }
    }
    add(t) {
        var n;
        if (t && t !== this)
            if (this.closed)
                rg(t);
            else {
                if (t instanceof e) {
                    if (t.closed || t._hasParent(this))
                        return;
                    t._addParent(this)
                }
                (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t)
            }
    }
    _hasParent(t) {
        let {_parentage: n} = this;
        return n === t || Array.isArray(n) && n.includes(t)
    }
    _addParent(t) {
        let {_parentage: n} = this;
        this._parentage = Array.isArray(n) ? (n.push(t),
        n) : n ? [n, t] : t
    }
    _removeParent(t) {
        let {_parentage: n} = this;
        n === t ? this._parentage = null : Array.isArray(n) && xn(n, t)
    }
    remove(t) {
        let {_finalizers: n} = this;
        n && xn(n, t),
        t instanceof e && t._removeParent(this)
    }
}
;
q.EMPTY = ( () => {
    let e = new q;
    return e.closed = !0,
    e
}
)();
var Uu = q.EMPTY;
function Ns(e) {
    return e instanceof q || e && "closed"in e && k(e.remove) && k(e.add) && k(e.unsubscribe)
}
function rg(e) {
    k(e) ? e() : e.unsubscribe()
}
var Ye = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1
};
var Ar = {
    setTimeout(e, t, ...n) {
        let {delegate: r} = Ar;
        return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n)
    },
    clearTimeout(e) {
        let {delegate: t} = Ar;
        return (t?.clearTimeout || clearTimeout)(e)
    },
    delegate: void 0
};
function Rs(e) {
    Ar.setTimeout( () => {
        let {onUnhandledError: t} = Ye;
        if (t)
            t(e);
        else
            throw e
    }
    )
}
function ji() {}
var ig = Vu("C", void 0, void 0);
function og(e) {
    return Vu("E", void 0, e)
}
function sg(e) {
    return Vu("N", e, void 0)
}
function Vu(e, t, n) {
    return {
        kind: e,
        value: t,
        error: n
    }
}
var Pn = null;
function Nr(e) {
    if (Ye.useDeprecatedSynchronousErrorHandling) {
        let t = !Pn;
        if (t && (Pn = {
            errorThrown: !1,
            error: null
        }),
        e(),
        t) {
            let {errorThrown: n, error: r} = Pn;
            if (Pn = null,
            n)
                throw r
        }
    } else
        e()
}
function ag(e) {
    Ye.useDeprecatedSynchronousErrorHandling && Pn && (Pn.errorThrown = !0,
    Pn.error = e)
}
var Ln = class extends q {
    constructor(t) {
        super(),
        this.isStopped = !1,
        t ? (this.destination = t,
        Ns(t) && t.add(this)) : this.destination = iw
    }
    static create(t, n, r) {
        return new wt(t,n,r)
    }
    next(t) {
        this.isStopped ? Hu(sg(t), this) : this._next(t)
    }
    error(t) {
        this.isStopped ? Hu(og(t), this) : (this.isStopped = !0,
        this._error(t))
    }
    complete() {
        this.isStopped ? Hu(ig, this) : (this.isStopped = !0,
        this._complete())
    }
    unsubscribe() {
        this.closed || (this.isStopped = !0,
        super.unsubscribe(),
        this.destination = null)
    }
    _next(t) {
        this.destination.next(t)
    }
    _error(t) {
        try {
            this.destination.error(t)
        } finally {
            this.unsubscribe()
        }
    }
    _complete() {
        try {
            this.destination.complete()
        } finally {
            this.unsubscribe()
        }
    }
}
  , nw = Function.prototype.bind;
function Bu(e, t) {
    return nw.call(e, t)
}
var $u = class {
    constructor(t) {
        this.partialObserver = t
    }
    next(t) {
        let {partialObserver: n} = this;
        if (n.next)
            try {
                n.next(t)
            } catch (r) {
                Ms(r)
            }
    }
    error(t) {
        let {partialObserver: n} = this;
        if (n.error)
            try {
                n.error(t)
            } catch (r) {
                Ms(r)
            }
        else
            Ms(t)
    }
    complete() {
        let {partialObserver: t} = this;
        if (t.complete)
            try {
                t.complete()
            } catch (n) {
                Ms(n)
            }
    }
}
  , wt = class extends Ln {
    constructor(t, n, r) {
        super();
        let i;
        if (k(t) || !t)
            i = {
                next: t ?? void 0,
                error: n ?? void 0,
                complete: r ?? void 0
            };
        else {
            let o;
            this && Ye.useDeprecatedNextContext ? (o = Object.create(t),
            o.unsubscribe = () => this.unsubscribe(),
            i = {
                next: t.next && Bu(t.next, o),
                error: t.error && Bu(t.error, o),
                complete: t.complete && Bu(t.complete, o)
            }) : i = t
        }
        this.destination = new $u(i)
    }
}
;
function Ms(e) {
    Ye.useDeprecatedSynchronousErrorHandling ? ag(e) : Rs(e)
}
function rw(e) {
    throw e
}
function Hu(e, t) {
    let {onStoppedNotification: n} = Ye;
    n && Ar.setTimeout( () => n(e, t))
}
var iw = {
    closed: !0,
    next: ji,
    error: rw,
    complete: ji
};
var Rr = typeof Symbol == "function" && Symbol.observable || "@@observable";
function Ee(e) {
    return e
}
function Wu(...e) {
    return zu(e)
}
function zu(e) {
    return e.length === 0 ? Ee : e.length === 1 ? e[0] : function(n) {
        return e.reduce( (r, i) => i(r), n)
    }
}
var S = ( () => {
    class e {
        constructor(n) {
            n && (this._subscribe = n)
        }
        lift(n) {
            let r = new e;
            return r.source = this,
            r.operator = n,
            r
        }
        subscribe(n, r, i) {
            let o = sw(n) ? n : new wt(n,r,i);
            return Nr( () => {
                let {operator: s, source: a} = this;
                o.add(s ? s.call(o, a) : a ? this._subscribe(o) : this._trySubscribe(o))
            }
            ),
            o
        }
        _trySubscribe(n) {
            try {
                return this._subscribe(n)
            } catch (r) {
                n.error(r)
            }
        }
        forEach(n, r) {
            return r = cg(r),
            new r( (i, o) => {
                let s = new wt({
                    next: a => {
                        try {
                            n(a)
                        } catch (c) {
                            o(c),
                            s.unsubscribe()
                        }
                    }
                    ,
                    error: o,
                    complete: i
                });
                this.subscribe(s)
            }
            )
        }
        _subscribe(n) {
            var r;
            return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)
        }
        [Rr]() {
            return this
        }
        pipe(...n) {
            return zu(n)(this)
        }
        toPromise(n) {
            return n = cg(n),
            new n( (r, i) => {
                let o;
                this.subscribe(s => o = s, s => i(s), () => r(o))
            }
            )
        }
    }
    return e.create = t => new e(t),
    e
}
)();
function cg(e) {
    var t;
    return (t = e ?? Ye.Promise) !== null && t !== void 0 ? t : Promise
}
function ow(e) {
    return e && k(e.next) && k(e.error) && k(e.complete)
}
function sw(e) {
    return e && e instanceof Ln || ow(e) && Ns(e)
}
function Gu(e) {
    return k(e?.lift)
}
function M(e) {
    return t => {
        if (Gu(t))
            return t.lift(function(n) {
                try {
                    return e(n, this)
                } catch (r) {
                    this.error(r)
                }
            });
        throw new TypeError("Unable to lift unknown Observable type")
    }
}
function N(e, t, n, r, i) {
    return new qu(e,t,n,r,i)
}
var qu = class extends Ln {
    constructor(t, n, r, i, o, s) {
        super(t),
        this.onFinalize = o,
        this.shouldUnsubscribe = s,
        this._next = n ? function(a) {
            try {
                n(a)
            } catch (c) {
                t.error(c)
            }
        }
        : super._next,
        this._error = i ? function(a) {
            try {
                i(a)
            } catch (c) {
                t.error(c)
            } finally {
                this.unsubscribe()
            }
        }
        : super._error,
        this._complete = r ? function() {
            try {
                r()
            } catch (a) {
                t.error(a)
            } finally {
                this.unsubscribe()
            }
        }
        : super._complete
    }
    unsubscribe() {
        var t;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            let {closed: n} = this;
            super.unsubscribe(),
            !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this))
        }
    }
}
;
function Mr() {
    return M( (e, t) => {
        let n = null;
        e._refCount++;
        let r = N(t, void 0, void 0, void 0, () => {
            if (!e || e._refCount <= 0 || 0 < --e._refCount) {
                n = null;
                return
            }
            let i = e._connection
              , o = n;
            n = null,
            i && (!o || i === o) && i.unsubscribe(),
            t.unsubscribe()
        }
        );
        e.subscribe(r),
        r.closed || (n = e.connect())
    }
    )
}
var Or = class extends S {
    constructor(t, n) {
        super(),
        this.source = t,
        this.subjectFactory = n,
        this._subject = null,
        this._refCount = 0,
        this._connection = null,
        Gu(t) && (this.lift = t.lift)
    }
    _subscribe(t) {
        return this.getSubject().subscribe(t)
    }
    getSubject() {
        let t = this._subject;
        return (!t || t.isStopped) && (this._subject = this.subjectFactory()),
        this._subject
    }
    _teardown() {
        this._refCount = 0;
        let {_connection: t} = this;
        this._subject = this._connection = null,
        t?.unsubscribe()
    }
    connect() {
        let t = this._connection;
        if (!t) {
            t = this._connection = new q;
            let n = this.getSubject();
            t.add(this.source.subscribe(N(n, void 0, () => {
                this._teardown(),
                n.complete()
            }
            , r => {
                this._teardown(),
                n.error(r)
            }
            , () => this._teardown()))),
            t.closed && (this._connection = null,
            t = q.EMPTY)
        }
        return t
    }
    refCount() {
        return Mr()(this)
    }
}
;
var ug = Sr(e => function() {
    e(this),
    this.name = "ObjectUnsubscribedError",
    this.message = "object unsubscribed"
}
);
var U = ( () => {
    class e extends S {
        constructor() {
            super(),
            this.closed = !1,
            this.currentObservers = null,
            this.observers = [],
            this.isStopped = !1,
            this.hasError = !1,
            this.thrownError = null
        }
        lift(n) {
            let r = new Os(this,this);
            return r.operator = n,
            r
        }
        _throwIfClosed() {
            if (this.closed)
                throw new ug
        }
        next(n) {
            Nr( () => {
                if (this._throwIfClosed(),
                !this.isStopped) {
                    this.currentObservers || (this.currentObservers = Array.from(this.observers));
                    for (let r of this.currentObservers)
                        r.next(n)
                }
            }
            )
        }
        error(n) {
            Nr( () => {
                if (this._throwIfClosed(),
                !this.isStopped) {
                    this.hasError = this.isStopped = !0,
                    this.thrownError = n;
                    let {observers: r} = this;
                    for (; r.length; )
                        r.shift().error(n)
                }
            }
            )
        }
        complete() {
            Nr( () => {
                if (this._throwIfClosed(),
                !this.isStopped) {
                    this.isStopped = !0;
                    let {observers: n} = this;
                    for (; n.length; )
                        n.shift().complete()
                }
            }
            )
        }
        unsubscribe() {
            this.isStopped = this.closed = !0,
            this.observers = this.currentObservers = null
        }
        get observed() {
            var n;
            return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0
        }
        _trySubscribe(n) {
            return this._throwIfClosed(),
            super._trySubscribe(n)
        }
        _subscribe(n) {
            return this._throwIfClosed(),
            this._checkFinalizedStatuses(n),
            this._innerSubscribe(n)
        }
        _innerSubscribe(n) {
            let {hasError: r, isStopped: i, observers: o} = this;
            return r || i ? Uu : (this.currentObservers = null,
            o.push(n),
            new q( () => {
                this.currentObservers = null,
                xn(o, n)
            }
            ))
        }
        _checkFinalizedStatuses(n) {
            let {hasError: r, thrownError: i, isStopped: o} = this;
            r ? n.error(i) : o && n.complete()
        }
        asObservable() {
            let n = new S;
            return n.source = this,
            n
        }
    }
    return e.create = (t, n) => new Os(t,n),
    e
}
)()
  , Os = class extends U {
    constructor(t, n) {
        super(),
        this.destination = t,
        this.source = n
    }
    next(t) {
        var n, r;
        (r = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || r === void 0 || r.call(n, t)
    }
    error(t) {
        var n, r;
        (r = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || r === void 0 || r.call(n, t)
    }
    complete() {
        var t, n;
        (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t)
    }
    _subscribe(t) {
        var n, r;
        return (r = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && r !== void 0 ? r : Uu
    }
}
;
var oe = class extends U {
    constructor(t) {
        super(),
        this._value = t
    }
    get value() {
        return this.getValue()
    }
    _subscribe(t) {
        let n = super._subscribe(t);
        return !n.closed && t.next(this._value),
        n
    }
    getValue() {
        let {hasError: t, thrownError: n, _value: r} = this;
        if (t)
            throw n;
        return this._throwIfClosed(),
        r
    }
    next(t) {
        super.next(this._value = t)
    }
}
;
var Ui = {
    now() {
        return (Ui.delegate || Date).now()
    },
    delegate: void 0
};
var Vi = class extends U {
    constructor(t=1 / 0, n=1 / 0, r=Ui) {
        super(),
        this._bufferSize = t,
        this._windowTime = n,
        this._timestampProvider = r,
        this._buffer = [],
        this._infiniteTimeWindow = !0,
        this._infiniteTimeWindow = n === 1 / 0,
        this._bufferSize = Math.max(1, t),
        this._windowTime = Math.max(1, n)
    }
    next(t) {
        let {isStopped: n, _buffer: r, _infiniteTimeWindow: i, _timestampProvider: o, _windowTime: s} = this;
        n || (r.push(t),
        !i && r.push(o.now() + s)),
        this._trimBuffer(),
        super.next(t)
    }
    _subscribe(t) {
        this._throwIfClosed(),
        this._trimBuffer();
        let n = this._innerSubscribe(t)
          , {_infiniteTimeWindow: r, _buffer: i} = this
          , o = i.slice();
        for (let s = 0; s < o.length && !t.closed; s += r ? 1 : 2)
            t.next(o[s]);
        return this._checkFinalizedStatuses(t),
        n
    }
    _trimBuffer() {
        let {_bufferSize: t, _timestampProvider: n, _buffer: r, _infiniteTimeWindow: i} = this
          , o = (i ? 1 : 2) * t;
        if (t < 1 / 0 && o < r.length && r.splice(0, r.length - o),
        !i) {
            let s = n.now()
              , a = 0;
            for (let c = 1; c < r.length && r[c] <= s; c += 2)
                a = c;
            a && r.splice(0, a + 1)
        }
    }
}
;
var ks = class extends q {
    constructor(t, n) {
        super()
    }
    schedule(t, n=0) {
        return this
    }
}
;
var Bi = {
    setInterval(e, t, ...n) {
        let {delegate: r} = Bi;
        return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n)
    },
    clearInterval(e) {
        let {delegate: t} = Bi;
        return (t?.clearInterval || clearInterval)(e)
    },
    delegate: void 0
};
var kr = class extends ks {
    constructor(t, n) {
        super(t, n),
        this.scheduler = t,
        this.work = n,
        this.pending = !1
    }
    schedule(t, n=0) {
        var r;
        if (this.closed)
            return this;
        this.state = t;
        let i = this.id
          , o = this.scheduler;
        return i != null && (this.id = this.recycleAsyncId(o, i, n)),
        this.pending = !0,
        this.delay = n,
        this.id = (r = this.id) !== null && r !== void 0 ? r : this.requestAsyncId(o, this.id, n),
        this
    }
    requestAsyncId(t, n, r=0) {
        return Bi.setInterval(t.flush.bind(t, this), r)
    }
    recycleAsyncId(t, n, r=0) {
        if (r != null && this.delay === r && this.pending === !1)
            return n;
        n != null && Bi.clearInterval(n)
    }
    execute(t, n) {
        if (this.closed)
            return new Error("executing a cancelled action");
        this.pending = !1;
        let r = this._execute(t, n);
        if (r)
            return r;
        this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
    }
    _execute(t, n) {
        let r = !1, i;
        try {
            this.work(t)
        } catch (o) {
            r = !0,
            i = o || new Error("Scheduled action threw falsy error")
        }
        if (r)
            return this.unsubscribe(),
            i
    }
    unsubscribe() {
        if (!this.closed) {
            let {id: t, scheduler: n} = this
              , {actions: r} = n;
            this.work = this.state = this.scheduler = null,
            this.pending = !1,
            xn(r, this),
            t != null && (this.id = this.recycleAsyncId(n, t, null)),
            this.delay = null,
            super.unsubscribe()
        }
    }
}
;
var xr = class e {
    constructor(t, n=e.now) {
        this.schedulerActionCtor = t,
        this.now = n
    }
    schedule(t, n=0, r) {
        return new this.schedulerActionCtor(this,t).schedule(r, n)
    }
}
;
xr.now = Ui.now;
var Pr = class extends xr {
    constructor(t, n=xr.now) {
        super(t, n),
        this.actions = [],
        this._active = !1
    }
    flush(t) {
        let {actions: n} = this;
        if (this._active) {
            n.push(t);
            return
        }
        let r;
        this._active = !0;
        do
            if (r = t.execute(t.state, t.delay))
                break;
        while (t = n.shift());
        if (this._active = !1,
        r) {
            for (; t = n.shift(); )
                t.unsubscribe();
            throw r
        }
    }
}
;
var Kt = new Pr(kr)
  , Ku = Kt;
var xs = class extends kr {
    constructor(t, n) {
        super(t, n),
        this.scheduler = t,
        this.work = n
    }
    schedule(t, n=0) {
        return n > 0 ? super.schedule(t, n) : (this.delay = n,
        this.state = t,
        this.scheduler.flush(this),
        this)
    }
    execute(t, n) {
        return n > 0 || this.closed ? super.execute(t, n) : this._execute(t, n)
    }
    requestAsyncId(t, n, r=0) {
        return r != null && r > 0 || r == null && this.delay > 0 ? super.requestAsyncId(t, n, r) : (t.flush(this),
        0)
    }
}
;
var Ps = class extends Pr {
}
;
var Yu = new Ps(xs);
var pe = new S(e => e.complete());
function Ls(e) {
    return e && k(e.schedule)
}
function Zu(e) {
    return e[e.length - 1]
}
function Fs(e) {
    return k(Zu(e)) ? e.pop() : void 0
}
function lt(e) {
    return Ls(Zu(e)) ? e.pop() : void 0
}
function lg(e, t) {
    return typeof Zu(e) == "number" ? e.pop() : t
}
function Qu(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
function fg(e, t, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function(s) {
            s(o)
        }
        )
    }
    return new (n || (n = Promise))(function(o, s) {
        function a(l) {
            try {
                u(r.next(l))
            } catch (d) {
                s(d)
            }
        }
        function c(l) {
            try {
                u(r.throw(l))
            } catch (d) {
                s(d)
            }
        }
        function u(l) {
            l.done ? o(l.value) : i(l.value).then(a, c)
        }
        u((r = r.apply(e, t || [])).next())
    }
    )
}
function dg(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
      , n = t && e[t]
      , r = 0;
    if (n)
        return n.call(e);
    if (e && typeof e.length == "number")
        return {
            next: function() {
                return e && r >= e.length && (e = void 0),
                {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function Fn(e) {
    return this instanceof Fn ? (this.v = e,
    this) : new Fn(e)
}
function hg(e, t, n) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = n.apply(e, t || []), i, o = [];
    return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype),
    a("next"),
    a("throw"),
    a("return", s),
    i[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    i;
    function s(h) {
        return function(g) {
            return Promise.resolve(g).then(h, d)
        }
    }
    function a(h, g) {
        r[h] && (i[h] = function(y) {
            return new Promise(function(C, _) {
                o.push([h, y, C, _]) > 1 || c(h, y)
            }
            )
        }
        ,
        g && (i[h] = g(i[h])))
    }
    function c(h, g) {
        try {
            u(r[h](g))
        } catch (y) {
            f(o[0][3], y)
        }
    }
    function u(h) {
        h.value instanceof Fn ? Promise.resolve(h.value.v).then(l, d) : f(o[0][2], h)
    }
    function l(h) {
        c("next", h)
    }
    function d(h) {
        c("throw", h)
    }
    function f(h, g) {
        h(g),
        o.shift(),
        o.length && c(o[0][0], o[0][1])
    }
}
function pg(e) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], n;
    return t ? t.call(e) : (e = typeof dg == "function" ? dg(e) : e[Symbol.iterator](),
    n = {},
    r("next"),
    r("throw"),
    r("return"),
    n[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    n);
    function r(o) {
        n[o] = e[o] && function(s) {
            return new Promise(function(a, c) {
                s = e[o](s),
                i(a, c, s.done, s.value)
            }
            )
        }
    }
    function i(o, s, a, c) {
        Promise.resolve(c).then(function(u) {
            o({
                value: u,
                done: a
            })
        }, s)
    }
}
var js = e => e && typeof e.length == "number" && typeof e != "function";
function Us(e) {
    return k(e?.then)
}
function Vs(e) {
    return k(e[Rr])
}
function Bs(e) {
    return Symbol.asyncIterator && k(e?.[Symbol.asyncIterator])
}
function Hs(e) {
    return new TypeError(`You provided ${e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)
}
function aw() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
}
var $s = aw();
function Ws(e) {
    return k(e?.[$s])
}
function zs(e) {
    return hg(this, arguments, function*() {
        let n = e.getReader();
        try {
            for (; ; ) {
                let {value: r, done: i} = yield Fn(n.read());
                if (i)
                    return yield Fn(void 0);
                yield yield Fn(r)
            }
        } finally {
            n.releaseLock()
        }
    })
}
function Gs(e) {
    return k(e?.getReader)
}
function $(e) {
    if (e instanceof S)
        return e;
    if (e != null) {
        if (Vs(e))
            return cw(e);
        if (js(e))
            return uw(e);
        if (Us(e))
            return lw(e);
        if (Bs(e))
            return gg(e);
        if (Ws(e))
            return dw(e);
        if (Gs(e))
            return fw(e)
    }
    throw Hs(e)
}
function cw(e) {
    return new S(t => {
        let n = e[Rr]();
        if (k(n.subscribe))
            return n.subscribe(t);
        throw new TypeError("Provided object does not correctly implement Symbol.observable")
    }
    )
}
function uw(e) {
    return new S(t => {
        for (let n = 0; n < e.length && !t.closed; n++)
            t.next(e[n]);
        t.complete()
    }
    )
}
function lw(e) {
    return new S(t => {
        e.then(n => {
            t.closed || (t.next(n),
            t.complete())
        }
        , n => t.error(n)).then(null, Rs)
    }
    )
}
function dw(e) {
    return new S(t => {
        for (let n of e)
            if (t.next(n),
            t.closed)
                return;
        t.complete()
    }
    )
}
function gg(e) {
    return new S(t => {
        hw(e, t).catch(n => t.error(n))
    }
    )
}
function fw(e) {
    return gg(zs(e))
}
function hw(e, t) {
    var n, r, i, o;
    return fg(this, void 0, void 0, function*() {
        try {
            for (n = pg(e); r = yield n.next(),
            !r.done; ) {
                let s = r.value;
                if (t.next(s),
                t.closed)
                    return
            }
        } catch (s) {
            i = {
                error: s
            }
        } finally {
            try {
                r && !r.done && (o = n.return) && (yield o.call(n))
            } finally {
                if (i)
                    throw i.error
            }
        }
        t.complete()
    })
}
function be(e, t, n, r=0, i=!1) {
    let o = t.schedule(function() {
        n(),
        i ? e.add(this.schedule(null, r)) : this.unsubscribe()
    }, r);
    if (e.add(o),
    !i)
        return o
}
function Yt(e, t=0) {
    return M( (n, r) => {
        n.subscribe(N(r, i => be(r, e, () => r.next(i), t), () => be(r, e, () => r.complete(), t), i => be(r, e, () => r.error(i), t)))
    }
    )
}
function Zt(e, t=0) {
    return M( (n, r) => {
        r.add(e.schedule( () => n.subscribe(r), t))
    }
    )
}
function mg(e, t) {
    return $(e).pipe(Zt(t), Yt(t))
}
function vg(e, t) {
    return $(e).pipe(Zt(t), Yt(t))
}
function yg(e, t) {
    return new S(n => {
        let r = 0;
        return t.schedule(function() {
            r === e.length ? n.complete() : (n.next(e[r++]),
            n.closed || this.schedule())
        })
    }
    )
}
function Eg(e, t) {
    return new S(n => {
        let r;
        return be(n, t, () => {
            r = e[$s](),
            be(n, t, () => {
                let i, o;
                try {
                    ({value: i, done: o} = r.next())
                } catch (s) {
                    n.error(s);
                    return
                }
                o ? n.complete() : n.next(i)
            }
            , 0, !0)
        }
        ),
        () => k(r?.return) && r.return()
    }
    )
}
function qs(e, t) {
    if (!e)
        throw new Error("Iterable cannot be null");
    return new S(n => {
        be(n, t, () => {
            let r = e[Symbol.asyncIterator]();
            be(n, t, () => {
                r.next().then(i => {
                    i.done ? n.complete() : n.next(i.value)
                }
                )
            }
            , 0, !0)
        }
        )
    }
    )
}
function Ig(e, t) {
    return qs(zs(e), t)
}
function _g(e, t) {
    if (e != null) {
        if (Vs(e))
            return mg(e, t);
        if (js(e))
            return yg(e, t);
        if (Us(e))
            return vg(e, t);
        if (Bs(e))
            return qs(e, t);
        if (Ws(e))
            return Eg(e, t);
        if (Gs(e))
            return Ig(e, t)
    }
    throw Hs(e)
}
function Y(e, t) {
    return t ? _g(e, t) : $(e)
}
function w(...e) {
    let t = lt(e);
    return Y(e, t)
}
function Lr(e, t) {
    let n = k(e) ? e : () => e
      , r = i => i.error(n());
    return new S(t ? i => t.schedule(r, 0, i) : r)
}
function Ju(e) {
    return !!e && (e instanceof S || k(e.lift) && k(e.subscribe))
}
var bt = Sr(e => function() {
    e(this),
    this.name = "EmptyError",
    this.message = "no elements in sequence"
}
);
function Dg(e) {
    return e instanceof Date && !isNaN(e)
}
function P(e, t) {
    return M( (n, r) => {
        let i = 0;
        n.subscribe(N(r, o => {
            r.next(e.call(t, o, i++))
        }
        ))
    }
    )
}
var {isArray: pw} = Array;
function gw(e, t) {
    return pw(t) ? e(...t) : e(t)
}
function Ks(e) {
    return P(t => gw(e, t))
}
var {isArray: mw} = Array
  , {getPrototypeOf: vw, prototype: yw, keys: Ew} = Object;
function Ys(e) {
    if (e.length === 1) {
        let t = e[0];
        if (mw(t))
            return {
                args: t,
                keys: null
            };
        if (Iw(t)) {
            let n = Ew(t);
            return {
                args: n.map(r => t[r]),
                keys: n
            }
        }
    }
    return {
        args: e,
        keys: null
    }
}
function Iw(e) {
    return e && typeof e == "object" && vw(e) === yw
}
function Zs(e, t) {
    return e.reduce( (n, r, i) => (n[r] = t[i],
    n), {})
}
function Fr(...e) {
    let t = lt(e)
      , n = Fs(e)
      , {args: r, keys: i} = Ys(e);
    if (r.length === 0)
        return Y([], t);
    let o = new S(_w(r, t, i ? s => Zs(i, s) : Ee));
    return n ? o.pipe(Ks(n)) : o
}
function _w(e, t, n=Ee) {
    return r => {
        wg(t, () => {
            let {length: i} = e
              , o = new Array(i)
              , s = i
              , a = i;
            for (let c = 0; c < i; c++)
                wg(t, () => {
                    let u = Y(e[c], t)
                      , l = !1;
                    u.subscribe(N(r, d => {
                        o[c] = d,
                        l || (l = !0,
                        a--),
                        a || r.next(n(o.slice()))
                    }
                    , () => {
                        --s || r.complete()
                    }
                    ))
                }
                , r)
        }
        , r)
    }
}
function wg(e, t, n) {
    e ? be(n, e, t) : t()
}
function bg(e, t, n, r, i, o, s, a) {
    let c = []
      , u = 0
      , l = 0
      , d = !1
      , f = () => {
        d && !c.length && !u && t.complete()
    }
      , h = y => u < r ? g(y) : c.push(y)
      , g = y => {
        o && t.next(y),
        u++;
        let C = !1;
        $(n(y, l++)).subscribe(N(t, _ => {
            i?.(_),
            o ? h(_) : t.next(_)
        }
        , () => {
            C = !0
        }
        , void 0, () => {
            if (C)
                try {
                    for (u--; c.length && u < r; ) {
                        let _ = c.shift();
                        s ? be(t, s, () => g(_)) : g(_)
                    }
                    f()
                } catch (_) {
                    t.error(_)
                }
        }
        ))
    }
    ;
    return e.subscribe(N(t, h, () => {
        d = !0,
        f()
    }
    )),
    () => {
        a?.()
    }
}
function se(e, t, n=1 / 0) {
    return k(t) ? se( (r, i) => P( (o, s) => t(r, o, i, s))($(e(r, i))), n) : (typeof t == "number" && (n = t),
    M( (r, i) => bg(r, i, e, n)))
}
function Qs(e=1 / 0) {
    return se(Ee, e)
}
function Cg() {
    return Qs(1)
}
function Qt(...e) {
    return Cg()(Y(e, lt(e)))
}
function Hi(e) {
    return new S(t => {
        $(e()).subscribe(t)
    }
    )
}
function Dw(...e) {
    let t = Fs(e)
      , {args: n, keys: r} = Ys(e)
      , i = new S(o => {
        let {length: s} = n;
        if (!s) {
            o.complete();
            return
        }
        let a = new Array(s)
          , c = s
          , u = s;
        for (let l = 0; l < s; l++) {
            let d = !1;
            $(n[l]).subscribe(N(o, f => {
                d || (d = !0,
                u--),
                a[l] = f
            }
            , () => c--, void 0, () => {
                (!c || !d) && (u || o.next(r ? Zs(r, a) : a),
                o.complete())
            }
            ))
        }
    }
    );
    return t ? i.pipe(Ks(t)) : i
}
function Tg(e=0, t, n=Ku) {
    let r = -1;
    return t != null && (Ls(t) ? n = t : r = t),
    new S(i => {
        let o = Dg(e) ? +e - n.now() : e;
        o < 0 && (o = 0);
        let s = 0;
        return n.schedule(function() {
            i.closed || (i.next(s++),
            0 <= r ? this.schedule(void 0, r) : i.complete())
        }, o)
    }
    )
}
function ww(...e) {
    let t = lt(e)
      , n = lg(e, 1 / 0)
      , r = e;
    return r.length ? r.length === 1 ? $(r[0]) : Qs(n)(Y(r, t)) : pe
}
function ge(e, t) {
    return M( (n, r) => {
        let i = 0;
        n.subscribe(N(r, o => e.call(t, o, i++) && r.next(o)))
    }
    )
}
function Sg(e) {
    return M( (t, n) => {
        let r = !1
          , i = null
          , o = null
          , s = !1
          , a = () => {
            if (o?.unsubscribe(),
            o = null,
            r) {
                r = !1;
                let u = i;
                i = null,
                n.next(u)
            }
            s && n.complete()
        }
          , c = () => {
            o = null,
            s && n.complete()
        }
        ;
        t.subscribe(N(n, u => {
            r = !0,
            i = u,
            o || $(e(u)).subscribe(o = N(n, a, c))
        }
        , () => {
            s = !0,
            (!r || !o || o.closed) && n.complete()
        }
        ))
    }
    )
}
function bw(e, t=Kt) {
    return Sg( () => Tg(e, t))
}
function Jt(e) {
    return M( (t, n) => {
        let r = null, i = !1, o;
        r = t.subscribe(N(n, void 0, void 0, s => {
            o = $(e(s, Jt(e)(t))),
            r ? (r.unsubscribe(),
            r = null,
            o.subscribe(n)) : i = !0
        }
        )),
        i && (r.unsubscribe(),
        r = null,
        o.subscribe(n))
    }
    )
}
function Ag(e, t, n, r, i) {
    return (o, s) => {
        let a = n
          , c = t
          , u = 0;
        o.subscribe(N(s, l => {
            let d = u++;
            c = a ? e(c, l, d) : (a = !0,
            l),
            r && s.next(c)
        }
        , i && ( () => {
            a && s.next(c),
            s.complete()
        }
        )))
    }
}
function jr(e, t) {
    return k(t) ? se(e, t, 1) : se(e, 1)
}
function $i(e, t=Kt) {
    return M( (n, r) => {
        let i = null
          , o = null
          , s = null
          , a = () => {
            if (i) {
                i.unsubscribe(),
                i = null;
                let u = o;
                o = null,
                r.next(u)
            }
        }
        ;
        function c() {
            let u = s + e
              , l = t.now();
            if (l < u) {
                i = this.schedule(void 0, u - l),
                r.add(i);
                return
            }
            a()
        }
        n.subscribe(N(r, u => {
            o = u,
            s = t.now(),
            i || (i = t.schedule(c, e),
            r.add(i))
        }
        , () => {
            a(),
            r.complete()
        }
        , void 0, () => {
            o = i = null
        }
        ))
    }
    )
}
function Xt(e) {
    return M( (t, n) => {
        let r = !1;
        t.subscribe(N(n, i => {
            r = !0,
            n.next(i)
        }
        , () => {
            r || n.next(e),
            n.complete()
        }
        ))
    }
    )
}
function Ze(e) {
    return e <= 0 ? () => pe : M( (t, n) => {
        let r = 0;
        t.subscribe(N(n, i => {
            ++r <= e && (n.next(i),
            e <= r && n.complete())
        }
        ))
    }
    )
}
function Xu(e, t=Ee) {
    return e = e ?? Cw,
    M( (n, r) => {
        let i, o = !0;
        n.subscribe(N(r, s => {
            let a = t(s);
            (o || !e(i, a)) && (o = !1,
            i = a,
            r.next(s))
        }
        ))
    }
    )
}
function Cw(e, t) {
    return e === t
}
function Js(e=Tw) {
    return M( (t, n) => {
        let r = !1;
        t.subscribe(N(n, i => {
            r = !0,
            n.next(i)
        }
        , () => r ? n.complete() : n.error(e())))
    }
    )
}
function Tw() {
    return new bt
}
function Wi(e) {
    return M( (t, n) => {
        try {
            t.subscribe(n)
        } finally {
            n.add(e)
        }
    }
    )
}
function Ct(e, t) {
    let n = arguments.length >= 2;
    return r => r.pipe(e ? ge( (i, o) => e(i, o, r)) : Ee, Ze(1), n ? Xt(t) : Js( () => new bt))
}
function Ur(e) {
    return e <= 0 ? () => pe : M( (t, n) => {
        let r = [];
        t.subscribe(N(n, i => {
            r.push(i),
            e < r.length && r.shift()
        }
        , () => {
            for (let i of r)
                n.next(i);
            n.complete()
        }
        , void 0, () => {
            r = null
        }
        ))
    }
    )
}
function el(e, t) {
    let n = arguments.length >= 2;
    return r => r.pipe(e ? ge( (i, o) => e(i, o, r)) : Ee, Ur(1), n ? Xt(t) : Js( () => new bt))
}
function Sw() {
    return M( (e, t) => {
        let n, r = !1;
        e.subscribe(N(t, i => {
            let o = n;
            n = i,
            r && t.next([o, i]),
            r = !0
        }
        ))
    }
    )
}
function tl(e, t) {
    return M(Ag(e, t, arguments.length >= 2, !0))
}
function Ng(e={}) {
    let {connector: t= () => new U, resetOnError: n=!0, resetOnComplete: r=!0, resetOnRefCountZero: i=!0} = e;
    return o => {
        let s, a, c, u = 0, l = !1, d = !1, f = () => {
            a?.unsubscribe(),
            a = void 0
        }
        , h = () => {
            f(),
            s = c = void 0,
            l = d = !1
        }
        , g = () => {
            let y = s;
            h(),
            y?.unsubscribe()
        }
        ;
        return M( (y, C) => {
            u++,
            !d && !l && f();
            let _ = c = c ?? t();
            C.add( () => {
                u--,
                u === 0 && !d && !l && (a = nl(g, i))
            }
            ),
            _.subscribe(C),
            !s && u > 0 && (s = new wt({
                next: ee => _.next(ee),
                error: ee => {
                    d = !0,
                    f(),
                    a = nl(h, n, ee),
                    _.error(ee)
                }
                ,
                complete: () => {
                    l = !0,
                    f(),
                    a = nl(h, r),
                    _.complete()
                }
            }),
            $(y).subscribe(s))
        }
        )(o)
    }
}
function nl(e, t, ...n) {
    if (t === !0) {
        e();
        return
    }
    if (t === !1)
        return;
    let r = new wt({
        next: () => {
            r.unsubscribe(),
            e()
        }
    });
    return $(t(...n)).subscribe(r)
}
function Aw(e, t, n) {
    let r, i = !1;
    return e && typeof e == "object" ? {bufferSize: r=1 / 0, windowTime: t=1 / 0, refCount: i=!1, scheduler: n} = e : r = e ?? 1 / 0,
    Ng({
        connector: () => new Vi(r,t,n),
        resetOnError: !0,
        resetOnComplete: !1,
        resetOnRefCountZero: i
    })
}
function zi(e) {
    return ge( (t, n) => e <= n)
}
function Gi(...e) {
    let t = lt(e);
    return M( (n, r) => {
        (t ? Qt(e, n, t) : Qt(e, n)).subscribe(r)
    }
    )
}
function Ce(e, t) {
    return M( (n, r) => {
        let i = null
          , o = 0
          , s = !1
          , a = () => s && !i && r.complete();
        n.subscribe(N(r, c => {
            i?.unsubscribe();
            let u = 0
              , l = o++;
            $(e(c, l)).subscribe(i = N(r, d => r.next(t ? t(c, d, l, u++) : d), () => {
                i = null,
                a()
            }
            ))
        }
        , () => {
            s = !0,
            a()
        }
        ))
    }
    )
}
function en(e) {
    return M( (t, n) => {
        $(e).subscribe(N(n, () => n.complete(), ji)),
        !n.closed && t.subscribe(n)
    }
    )
}
function te(e, t, n) {
    let r = k(e) || t || n ? {
        next: e,
        error: t,
        complete: n
    } : e;
    return r ? M( (i, o) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        i.subscribe(N(o, c => {
            var u;
            (u = r.next) === null || u === void 0 || u.call(r, c),
            o.next(c)
        }
        , () => {
            var c;
            a = !1,
            (c = r.complete) === null || c === void 0 || c.call(r),
            o.complete()
        }
        , c => {
            var u;
            a = !1,
            (u = r.error) === null || u === void 0 || u.call(r, c),
            o.error(c)
        }
        , () => {
            var c, u;
            a && ((c = r.unsubscribe) === null || c === void 0 || c.call(r)),
            (u = r.finalize) === null || u === void 0 || u.call(r)
        }
        ))
    }
    ) : Ee
}
function Rg(e) {
    let t = T(null);
    try {
        return e()
    } finally {
        T(t)
    }
}
var Mg = j(m({}, Rn), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !0,
    dirty: !0,
    kind: "effect"
});
function Og(e) {
    if (e.dirty = !1,
    e.version > 0 && !kn(e))
        return;
    e.version++;
    let t = Gt(e);
    try {
        e.cleanup(),
        e.fn()
    } finally {
        On(e, t)
    }
}
var Br = class {
    full;
    major;
    minor;
    patch;
    constructor(t) {
        this.full = t;
        let n = t.split(".");
        this.major = n[0],
        this.minor = n[1],
        this.patch = n.slice(2).join(".")
    }
}
  , pl = new Br("20.3.10");
var na = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss"
  , I = class extends Error {
    code;
    constructor(t, n) {
        super(Hr(t, n)),
        this.code = t
    }
}
;
function Nw(e) {
    return `NG0${Math.abs(e)}`
}
function Hr(e, t) {
    return `${Nw(e)}${t ? ": " + t : ""}`
}
function B(e) {
    for (let t in e)
        if (e[t] === B)
            return t;
    throw Error("")
}
function Pg(e, t) {
    for (let n in t)
        t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
}
function St(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(St).join(", ")}]`;
    if (e == null)
        return "" + e;
    let t = e.overriddenName || e.name;
    if (t)
        return `${t}`;
    let n = e.toString();
    if (n == null)
        return "" + n;
    let r = n.indexOf(`
`);
    return r >= 0 ? n.slice(0, r) : n
}
function ra(e, t) {
    return e ? t ? `${e} ${t}` : e : t || ""
}
var Rw = B({
    __forward_ref__: B
});
function ia(e) {
    return e.__forward_ref__ = ia,
    e.toString = function() {
        return St(this())
    }
    ,
    e
}
function ae(e) {
    return gl(e) ? e() : e
}
function gl(e) {
    return typeof e == "function" && e.hasOwnProperty(Rw) && e.__forward_ref__ === ia
}
function v(e) {
    return {
        token: e.token,
        providedIn: e.providedIn || null,
        factory: e.factory,
        value: void 0
    }
}
function Re(e) {
    return {
        providers: e.providers || [],
        imports: e.imports || []
    }
}
function Qi(e) {
    return Mw(e, oa)
}
function ml(e) {
    return Qi(e) !== null
}
function Mw(e, t) {
    return e.hasOwnProperty(t) && e[t] || null
}
function Ow(e) {
    let t = e?.[oa] ?? null;
    return t || null
}
function il(e) {
    return e && e.hasOwnProperty(ea) ? e[ea] : null
}
var oa = B({
    \u0275prov: B
})
  , ea = B({
    \u0275inj: B
})
  , E = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(t, n) {
        this._desc = t,
        this.\u0275prov = void 0,
        typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = v({
            token: this,
            providedIn: n.providedIn || "root",
            factory: n.factory
        }))
    }
    get multi() {
        return this
    }
    toString() {
        return `InjectionToken ${this._desc}`
    }
}
;
function vl(e) {
    return e && !!e.\u0275providers
}
var yl = B({
    \u0275cmp: B
})
  , El = B({
    \u0275dir: B
})
  , Il = B({
    \u0275pipe: B
})
  , _l = B({
    \u0275mod: B
})
  , Ki = B({
    \u0275fac: B
})
  , $n = B({
    __NG_ELEMENT_ID__: B
})
  , kg = B({
    __NG_ENV_ID__: B
});
function Ji(e) {
    return typeof e == "string" ? e : e == null ? "" : String(e)
}
function Lg(e) {
    return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : Ji(e)
}
var Fg = B({
    ngErrorCode: B
})
  , kw = B({
    ngErrorMessage: B
})
  , xw = B({
    ngTokenPath: B
});
function Dl(e, t) {
    return jg("", -200, t)
}
function sa(e, t) {
    throw new I(-201,!1)
}
function jg(e, t, n) {
    let r = new I(t,e);
    return r[Fg] = t,
    r[kw] = e,
    n && (r[xw] = n),
    r
}
function Pw(e) {
    return e[Fg]
}
var ol;
function Ug() {
    return ol
}
function Ae(e) {
    let t = ol;
    return ol = e,
    t
}
function wl(e, t, n) {
    let r = Qi(e);
    if (r && r.providedIn == "root")
        return r.value === void 0 ? r.value = r.factory() : r.value;
    if (n & 8)
        return null;
    if (t !== void 0)
        return t;
    sa(e, "Injector")
}
var Lw = {}
  , jn = Lw
  , sl = "__NG_DI_FLAG__"
  , al = class {
    injector;
    constructor(t) {
        this.injector = t
    }
    retrieve(t, n) {
        let r = Un(n) || 0;
        try {
            return this.injector.get(t, r & 8 ? null : jn, r)
        } catch (i) {
            if (br(i))
                return i;
            throw i
        }
    }
}
;
function Fw(e, t=0) {
    let n = Es();
    if (n === void 0)
        throw new I(-203,!1);
    if (n === null)
        return wl(e, void 0, t);
    {
        let r = jw(t)
          , i = n.retrieve(e, r);
        if (br(i)) {
            if (r.optional)
                return null;
            throw i
        }
        return i
    }
}
function R(e, t=0) {
    return (Ug() || Fw)(ae(e), t)
}
function p(e, t) {
    return R(e, Un(t))
}
function Un(e) {
    return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4)
}
function jw(e) {
    return {
        optional: !!(e & 8),
        host: !!(e & 1),
        self: !!(e & 2),
        skipSelf: !!(e & 4)
    }
}
function cl(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = ae(e[n]);
        if (Array.isArray(r)) {
            if (r.length === 0)
                throw new I(900,!1);
            let i, o = 0;
            for (let s = 0; s < r.length; s++) {
                let a = r[s]
                  , c = Uw(a);
                typeof c == "number" ? c === -1 ? i = a.token : o |= c : i = a
            }
            t.push(R(i, o))
        } else
            t.push(R(r))
    }
    return t
}
function Vg(e, t) {
    return e[sl] = t,
    e.prototype[sl] = t,
    e
}
function Uw(e) {
    return e[sl]
}
function Vn(e, t) {
    let n = e.hasOwnProperty(Ki);
    return n ? e[Ki] : null
}
function Bg(e, t, n) {
    if (e.length !== t.length)
        return !1;
    for (let r = 0; r < e.length; r++) {
        let i = e[r]
          , o = t[r];
        if (n && (i = n(i),
        o = n(o)),
        o !== i)
            return !1
    }
    return !0
}
function Hg(e) {
    return e.flat(Number.POSITIVE_INFINITY)
}
function aa(e, t) {
    e.forEach(n => Array.isArray(n) ? aa(n, t) : t(n))
}
function bl(e, t, n) {
    t >= e.length ? e.push(n) : e.splice(t, 0, n)
}
function Xi(e, t) {
    return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
}
function $g(e, t) {
    let n = [];
    for (let r = 0; r < e; r++)
        n.push(t);
    return n
}
function Wg(e, t, n, r) {
    let i = e.length;
    if (i == t)
        e.push(n, r);
    else if (i === 1)
        e.push(r, e[0]),
        e[0] = n;
    else {
        for (i--,
        e.push(e[i - 1], e[i]); i > t; ) {
            let o = i - 2;
            e[i] = e[o],
            i--
        }
        e[t] = n,
        e[t + 1] = r
    }
}
function ca(e, t, n) {
    let r = $r(e, t);
    return r >= 0 ? e[r | 1] = n : (r = ~r,
    Wg(e, r, t, n)),
    r
}
function ua(e, t) {
    let n = $r(e, t);
    if (n >= 0)
        return e[n | 1]
}
function $r(e, t) {
    return Vw(e, t, 1)
}
function Vw(e, t, n) {
    let r = 0
      , i = e.length >> n;
    for (; i !== r; ) {
        let o = r + (i - r >> 1)
          , s = e[o << n];
        if (t === s)
            return o << n;
        s > t ? i = o : r = o + 1
    }
    return ~(i << n)
}
var Qe = {}
  , me = []
  , At = new E("")
  , Cl = new E("",-1)
  , Tl = new E("")
  , Yi = class {
    get(t, n=jn) {
        if (n === jn) {
            let i = jg("", -201);
            throw i.name = "\u0275NotFound",
            i
        }
        return n
    }
}
;
function Sl(e) {
    return e[_l] || null
}
function Nt(e) {
    return e[yl] || null
}
function la(e) {
    return e[El] || null
}
function zg(e) {
    return e[Il] || null
}
function Me(e) {
    return {
        \u0275providers: e
    }
}
function Gg(e) {
    return Me([{
        provide: At,
        multi: !0,
        useValue: e
    }])
}
function qg(...e) {
    return {
        \u0275providers: Al(!0, e),
        \u0275fromNgModule: !0
    }
}
function Al(e, ...t) {
    let n = [], r = new Set, i, o = s => {
        n.push(s)
    }
    ;
    return aa(t, s => {
        let a = s;
        ta(a, o, [], r) && (i ||= [],
        i.push(a))
    }
    ),
    i !== void 0 && Kg(i, o),
    n
}
function Kg(e, t) {
    for (let n = 0; n < e.length; n++) {
        let {ngModule: r, providers: i} = e[n];
        Nl(i, o => {
            t(o, r)
        }
        )
    }
}
function ta(e, t, n, r) {
    if (e = ae(e),
    !e)
        return !1;
    let i = null
      , o = il(e)
      , s = !o && Nt(e);
    if (!o && !s) {
        let c = e.ngModule;
        if (o = il(c),
        o)
            i = c;
        else
            return !1
    } else {
        if (s && !s.standalone)
            return !1;
        i = e
    }
    let a = r.has(i);
    if (s) {
        if (a)
            return !1;
        if (r.add(i),
        s.dependencies) {
            let c = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
            for (let u of c)
                ta(u, t, n, r)
        }
    } else if (o) {
        if (o.imports != null && !a) {
            r.add(i);
            let u;
            try {
                aa(o.imports, l => {
                    ta(l, t, n, r) && (u ||= [],
                    u.push(l))
                }
                )
            } finally {}
            u !== void 0 && Kg(u, t)
        }
        if (!a) {
            let u = Vn(i) || ( () => new i);
            t({
                provide: i,
                useFactory: u,
                deps: me
            }, i),
            t({
                provide: Tl,
                useValue: i,
                multi: !0
            }, i),
            t({
                provide: At,
                useValue: () => R(i),
                multi: !0
            }, i)
        }
        let c = o.providers;
        if (c != null && !a) {
            let u = e;
            Nl(c, l => {
                t(l, u)
            }
            )
        }
    } else
        return !1;
    return i !== e && e.providers !== void 0
}
function Nl(e, t) {
    for (let n of e)
        vl(n) && (n = n.\u0275providers),
        Array.isArray(n) ? Nl(n, t) : t(n)
}
var Bw = B({
    provide: String,
    useValue: B
});
function Yg(e) {
    return e !== null && typeof e == "object" && Bw in e
}
function Hw(e) {
    return !!(e && e.useExisting)
}
function $w(e) {
    return !!(e && e.useFactory)
}
function Bn(e) {
    return typeof e == "function"
}
function Zg(e) {
    return !!e.useClass
}
var eo = new E(""), Xs = {}, xg = {}, rl;
function Wr() {
    return rl === void 0 && (rl = new Yi),
    rl
}
var Q = class {
}
  , Hn = class extends Q {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() {
        return this._destroyed
    }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, r, i) {
        super(),
        this.parent = n,
        this.source = r,
        this.scopes = i,
        ll(t, s => this.processProvider(s)),
        this.records.set(Cl, Vr(void 0, this)),
        i.has("environment") && this.records.set(Q, Vr(void 0, this));
        let o = this.records.get(eo);
        o != null && typeof o.value == "string" && this.scopes.add(o.value),
        this.injectorDefTypes = new Set(this.get(Tl, me, {
            self: !0
        }))
    }
    retrieve(t, n) {
        let r = Un(n) || 0;
        try {
            return this.get(t, jn, r)
        } catch (i) {
            if (br(i))
                return i;
            throw i
        }
    }
    destroy() {
        qi(this),
        this._destroyed = !0;
        let t = T(null);
        try {
            for (let r of this._ngOnDestroyHooks)
                r.ngOnDestroy();
            let n = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (let r of n)
                r()
        } finally {
            this.records.clear(),
            this._ngOnDestroyHooks.clear(),
            this.injectorDefTypes.clear(),
            T(t)
        }
    }
    onDestroy(t) {
        return qi(this),
        this._onDestroyHooks.push(t),
        () => this.removeOnDestroy(t)
    }
    runInContext(t) {
        qi(this);
        let n = ut(this), r = Ae(void 0), i;
        try {
            return t()
        } finally {
            ut(n),
            Ae(r)
        }
    }
    get(t, n=jn, r) {
        if (qi(this),
        t.hasOwnProperty(kg))
            return t[kg](this);
        let i = Un(r), o, s = ut(this), a = Ae(void 0);
        try {
            if (!(i & 4)) {
                let u = this.records.get(t);
                if (u === void 0) {
                    let l = Kw(t) && Qi(t);
                    l && this.injectableDefInScope(l) ? u = Vr(ul(t), Xs) : u = null,
                    this.records.set(t, u)
                }
                if (u != null)
                    return this.hydrate(t, u, i)
            }
            let c = i & 2 ? Wr() : this.parent;
            return n = i & 8 && n === jn ? null : n,
            c.get(t, n)
        } catch (c) {
            let u = Pw(c);
            throw u === -200 || u === -201 ? new I(u,null) : c
        } finally {
            Ae(a),
            ut(s)
        }
    }
    resolveInjectorInitializers() {
        let t = T(null), n = ut(this), r = Ae(void 0), i;
        try {
            let o = this.get(At, me, {
                self: !0
            });
            for (let s of o)
                s()
        } finally {
            ut(n),
            Ae(r),
            T(t)
        }
    }
    toString() {
        let t = []
          , n = this.records;
        for (let r of n.keys())
            t.push(St(r));
        return `R3Injector[${t.join(", ")}]`
    }
    processProvider(t) {
        t = ae(t);
        let n = Bn(t) ? t : ae(t && t.provide)
          , r = zw(t);
        if (!Bn(t) && t.multi === !0) {
            let i = this.records.get(n);
            i || (i = Vr(void 0, Xs, !0),
            i.factory = () => cl(i.multi),
            this.records.set(n, i)),
            n = t,
            i.multi.push(t)
        }
        this.records.set(n, r)
    }
    hydrate(t, n, r) {
        let i = T(null);
        try {
            if (n.value === xg)
                throw Dl(St(t));
            return n.value === Xs && (n.value = xg,
            n.value = n.factory(void 0, r)),
            typeof n.value == "object" && n.value && qw(n.value) && this._ngOnDestroyHooks.add(n.value),
            n.value
        } finally {
            T(i)
        }
    }
    injectableDefInScope(t) {
        if (!t.providedIn)
            return !1;
        let n = ae(t.providedIn);
        return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n)
    }
    removeOnDestroy(t) {
        let n = this._onDestroyHooks.indexOf(t);
        n !== -1 && this._onDestroyHooks.splice(n, 1)
    }
}
;
function ul(e) {
    let t = Qi(e)
      , n = t !== null ? t.factory : Vn(e);
    if (n !== null)
        return n;
    if (e instanceof E)
        throw new I(204,!1);
    if (e instanceof Function)
        return Ww(e);
    throw new I(204,!1)
}
function Ww(e) {
    if (e.length > 0)
        throw new I(204,!1);
    let n = Ow(e);
    return n !== null ? () => n.factory(e) : () => new e
}
function zw(e) {
    if (Yg(e))
        return Vr(void 0, e.useValue);
    {
        let t = Rl(e);
        return Vr(t, Xs)
    }
}
function Rl(e, t, n) {
    let r;
    if (Bn(e)) {
        let i = ae(e);
        return Vn(i) || ul(i)
    } else if (Yg(e))
        r = () => ae(e.useValue);
    else if ($w(e))
        r = () => e.useFactory(...cl(e.deps || []));
    else if (Hw(e))
        r = (i, o) => R(ae(e.useExisting), o !== void 0 && o & 8 ? 8 : void 0);
    else {
        let i = ae(e && (e.useClass || e.provide));
        if (Gw(e))
            r = () => new i(...cl(e.deps));
        else
            return Vn(i) || ul(i)
    }
    return r
}
function qi(e) {
    if (e.destroyed)
        throw new I(205,!1)
}
function Vr(e, t, n=!1) {
    return {
        factory: e,
        value: t,
        multi: n ? [] : void 0
    }
}
function Gw(e) {
    return !!e.deps
}
function qw(e) {
    return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
}
function Kw(e) {
    return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"
}
function ll(e, t) {
    for (let n of e)
        Array.isArray(n) ? ll(n, t) : n && vl(n) ? ll(n.\u0275providers, t) : t(n)
}
function ue(e, t) {
    let n;
    e instanceof Hn ? (qi(e),
    n = e) : n = new al(e);
    let r, i = ut(n), o = Ae(void 0);
    try {
        return t()
    } finally {
        ut(i),
        Ae(o)
    }
}
function Qg() {
    return Ug() !== void 0 || Es() != null
}
var Je = 0
  , D = 1
  , b = 2
  , ce = 3
  , $e = 4
  , Ie = 5
  , Wn = 6
  , zr = 7
  , J = 8
  , nn = 9
  , dt = 10
  , K = 11
  , Gr = 12
  , Ml = 13
  , zn = 14
  , _e = 15
  , rn = 16
  , Gn = 17
  , ft = 18
  , to = 19
  , Ol = 20
  , Tt = 21
  , da = 22
  , Rt = 23
  , Oe = 24
  , qn = 25
  , Kn = 26
  , X = 27
  , Jg = 1
  , kl = 6
  , on = 7
  , no = 8
  , Yn = 9
  , ne = 10;
function ht(e) {
    return Array.isArray(e) && typeof e[Jg] == "object"
}
function Xe(e) {
    return Array.isArray(e) && e[Jg] === !0
}
function xl(e) {
    return (e.flags & 4) !== 0
}
function sn(e) {
    return e.componentOffset > -1
}
function ro(e) {
    return (e.flags & 1) === 1
}
function et(e) {
    return !!e.template
}
function qr(e) {
    return (e[b] & 512) !== 0
}
function Zn(e) {
    return (e[b] & 256) === 256
}
var Xg = "svg"
  , em = "math";
function We(e) {
    for (; Array.isArray(e); )
        e = e[Je];
    return e
}
function Pl(e, t) {
    return We(t[e])
}
function tt(e, t) {
    return We(t[e.index])
}
function io(e, t) {
    return e.data[t]
}
function tm(e, t) {
    return e[t]
}
function ze(e, t) {
    let n = t[e];
    return ht(n) ? n : n[Je]
}
function nm(e) {
    return (e[b] & 4) === 4
}
function fa(e) {
    return (e[b] & 128) === 128
}
function rm(e) {
    return Xe(e[ce])
}
function Ge(e, t) {
    return t == null ? null : e[t]
}
function Ll(e) {
    e[Gn] = 0
}
function Fl(e) {
    e[b] & 1024 || (e[b] |= 1024,
    fa(e) && an(e))
}
function im(e, t) {
    for (; e > 0; )
        t = t[zn],
        e--;
    return t
}
function oo(e) {
    return !!(e[b] & 9216 || e[Oe]?.dirty)
}
function ha(e) {
    e[dt].changeDetectionScheduler?.notify(8),
    e[b] & 64 && (e[b] |= 1024),
    oo(e) && an(e)
}
function an(e) {
    e[dt].changeDetectionScheduler?.notify(0);
    let t = tn(e);
    for (; t !== null && !(t[b] & 8192 || (t[b] |= 8192,
    !fa(t))); )
        t = tn(t)
}
function jl(e, t) {
    if (Zn(e))
        throw new I(911,!1);
    e[Tt] === null && (e[Tt] = []),
    e[Tt].push(t)
}
function om(e, t) {
    if (e[Tt] === null)
        return;
    let n = e[Tt].indexOf(t);
    n !== -1 && e[Tt].splice(n, 1)
}
function tn(e) {
    let t = e[ce];
    return Xe(t) ? t[ce] : t
}
function Ul(e) {
    return e[zr] ??= []
}
function Vl(e) {
    return e.cleanup ??= []
}
function sm(e, t, n, r) {
    let i = Ul(t);
    i.push(n),
    e.firstCreatePass && Vl(e).push(r, i.length - 1)
}
var L = {
    lFrame: Em(null),
    bindingsEnabled: !0,
    skipHydrationRootTNode: null
};
var dl = !1;
function am() {
    return L.lFrame.elementDepthCount
}
function cm() {
    L.lFrame.elementDepthCount++
}
function Bl() {
    L.lFrame.elementDepthCount--
}
function Hl() {
    return L.bindingsEnabled
}
function $l() {
    return L.skipHydrationRootTNode !== null
}
function Wl(e) {
    return L.skipHydrationRootTNode === e
}
function zl() {
    L.skipHydrationRootTNode = null
}
function x() {
    return L.lFrame.lView
}
function re() {
    return L.lFrame.tView
}
function um(e) {
    return L.lFrame.contextLView = e,
    e[J]
}
function lm(e) {
    return L.lFrame.contextLView = null,
    e
}
function ve() {
    let e = Gl();
    for (; e !== null && e.type === 64; )
        e = e.parent;
    return e
}
function Gl() {
    return L.lFrame.currentTNode
}
function dm() {
    let e = L.lFrame
      , t = e.currentTNode;
    return e.isParent ? t : t.parent
}
function Kr(e, t) {
    let n = L.lFrame;
    n.currentTNode = e,
    n.isParent = t
}
function ql() {
    return L.lFrame.isParent
}
function Kl() {
    L.lFrame.isParent = !1
}
function fm() {
    return L.lFrame.contextLView
}
function Yl() {
    return dl
}
function Yr(e) {
    let t = dl;
    return dl = e,
    t
}
function hm(e) {
    return L.lFrame.bindingIndex = e
}
function Qn() {
    return L.lFrame.bindingIndex++
}
function Zl(e) {
    let t = L.lFrame
      , n = t.bindingIndex;
    return t.bindingIndex = t.bindingIndex + e,
    n
}
function pm() {
    return L.lFrame.inI18n
}
function gm(e, t) {
    let n = L.lFrame;
    n.bindingIndex = n.bindingRootIndex = e,
    pa(t)
}
function mm() {
    return L.lFrame.currentDirectiveIndex
}
function pa(e) {
    L.lFrame.currentDirectiveIndex = e
}
function vm(e) {
    let t = L.lFrame.currentDirectiveIndex;
    return t === -1 ? null : e[t]
}
function ga() {
    return L.lFrame.currentQueryIndex
}
function so(e) {
    L.lFrame.currentQueryIndex = e
}
function Yw(e) {
    let t = e[D];
    return t.type === 2 ? t.declTNode : t.type === 1 ? e[Ie] : null
}
function Ql(e, t, n) {
    if (n & 4) {
        let i = t
          , o = e;
        for (; i = i.parent,
        i === null && !(n & 1); )
            if (i = Yw(o),
            i === null || (o = o[zn],
            i.type & 10))
                break;
        if (i === null)
            return !1;
        t = i,
        e = o
    }
    let r = L.lFrame = ym();
    return r.currentTNode = t,
    r.lView = e,
    !0
}
function ma(e) {
    let t = ym()
      , n = e[D];
    L.lFrame = t,
    t.currentTNode = n.firstChild,
    t.lView = e,
    t.tView = n,
    t.contextLView = e,
    t.bindingIndex = n.bindingStartIndex,
    t.inI18n = !1
}
function ym() {
    let e = L.lFrame
      , t = e === null ? null : e.child;
    return t === null ? Em(e) : t
}
function Em(e) {
    let t = {
        currentTNode: null,
        isParent: !0,
        lView: null,
        tView: null,
        selectedIndex: -1,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent: e,
        child: null,
        inI18n: !1
    };
    return e !== null && (e.child = t),
    t
}
function Im() {
    let e = L.lFrame;
    return L.lFrame = e.parent,
    e.currentTNode = null,
    e.lView = null,
    e
}
var Jl = Im;
function va() {
    let e = Im();
    e.isParent = !0,
    e.tView = null,
    e.selectedIndex = -1,
    e.contextLView = null,
    e.elementDepthCount = 0,
    e.currentDirectiveIndex = -1,
    e.currentNamespace = null,
    e.bindingRootIndex = -1,
    e.bindingIndex = -1,
    e.currentQueryIndex = 0
}
function _m(e) {
    return (L.lFrame.contextLView = im(e, L.lFrame.contextLView))[J]
}
function Mt() {
    return L.lFrame.selectedIndex
}
function cn(e) {
    L.lFrame.selectedIndex = e
}
function ya() {
    let e = L.lFrame;
    return io(e.tView, e.selectedIndex)
}
function Dm() {
    return L.lFrame.currentNamespace
}
var wm = !0;
function Ea() {
    return wm
}
function Ia(e) {
    wm = e
}
function fl(e, t=null, n=null, r) {
    let i = Xl(e, t, n, r);
    return i.resolveInjectorInitializers(),
    i
}
function Xl(e, t=null, n=null, r, i=new Set) {
    let o = [n || me, qg(e)];
    return r = r || (typeof e == "object" ? void 0 : St(e)),
    new Hn(o,t || Wr(),r || null,i)
}
var z = class e {
    static THROW_IF_NOT_FOUND = jn;
    static NULL = new Yi;
    static create(t, n) {
        if (Array.isArray(t))
            return fl({
                name: ""
            }, n, t, "");
        {
            let r = t.name ?? "";
            return fl({
                name: r
            }, t.parent, t.providers, r)
        }
    }
    static \u0275prov = v({
        token: e,
        providedIn: "any",
        factory: () => R(Cl)
    });
    static __NG_ELEMENT_ID__ = -1
}
  , G = new E("")
  , qe = ( () => {
    class e {
        static __NG_ELEMENT_ID__ = Zw;
        static __NG_ENV_ID__ = n => n
    }
    return e
}
)()
  , Zi = class extends qe {
    _lView;
    constructor(t) {
        super(),
        this._lView = t
    }
    get destroyed() {
        return Zn(this._lView)
    }
    onDestroy(t) {
        let n = this._lView;
        return jl(n, t),
        () => om(n, t)
    }
}
;
function Zw() {
    return new Zi(x())
}
var He = class {
    _console = console;
    handleError(t) {
        this._console.error("ERROR", t)
    }
}
  , ke = new E("",{
    providedIn: "root",
    factory: () => {
        let e = p(Q), t;
        return n => {
            e.destroyed && !t ? setTimeout( () => {
                throw n
            }
            ) : (t ??= e.get(He),
            t.handleError(n))
        }
    }
})
  , bm = {
    provide: At,
    useValue: () => void p(He),
    multi: !0
}
  , Qw = new E("",{
    providedIn: "root",
    factory: () => {
        let e = p(G).defaultView;
        if (!e)
            return;
        let t = p(ke)
          , n = o => {
            t(o.reason),
            o.preventDefault()
        }
          , r = o => {
            o.error ? t(o.error) : t(new Error(o.message,{
                cause: o
            })),
            o.preventDefault()
        }
          , i = () => {
            e.addEventListener("unhandledrejection", n),
            e.addEventListener("error", r)
        }
        ;
        typeof Zone < "u" ? Zone.root.run(i) : i(),
        p(qe).onDestroy( () => {
            e.removeEventListener("error", r),
            e.removeEventListener("unhandledrejection", n)
        }
        )
    }
});
function Jw() {
    return Me([Gg( () => void p(Qw))])
}
function ao(e) {
    return typeof e == "function" && e[ie] !== void 0
}
function xe(e, t) {
    let[n,r,i] = Fu(e, t?.equal)
      , o = n
      , s = o[ie];
    return o.set = r,
    o.update = i,
    o.asReadonly = ed.bind(o),
    o
}
function ed() {
    let e = this[ie];
    if (e.readonlyFn === void 0) {
        let t = () => this();
        t[ie] = e,
        e.readonlyFn = t
    }
    return e.readonlyFn
}
var Jn = ( () => {
    class e {
        view;
        node;
        constructor(n, r) {
            this.view = n,
            this.node = r
        }
        static __NG_ELEMENT_ID__ = Xw
    }
    return e
}
)();
function Xw() {
    return new Jn(x(),ve())
}
var Ne = class {
}
  , co = new E("",{
    providedIn: "root",
    factory: () => !1
});
var td = new E("")
  , _a = new E("")
  , pt = ( () => {
    class e {
        taskId = 0;
        pendingTasks = new Set;
        destroyed = !1;
        pendingTask = new oe(!1);
        get hasPendingTasks() {
            return this.destroyed ? !1 : this.pendingTask.value
        }
        get hasPendingTasksObservable() {
            return this.destroyed ? new S(n => {
                n.next(!1),
                n.complete()
            }
            ) : this.pendingTask
        }
        add() {
            !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0);
            let n = this.taskId++;
            return this.pendingTasks.add(n),
            n
        }
        has(n) {
            return this.pendingTasks.has(n)
        }
        remove(n) {
            this.pendingTasks.delete(n),
            this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1)
        }
        ngOnDestroy() {
            this.pendingTasks.clear(),
            this.hasPendingTasks && this.pendingTask.next(!1),
            this.destroyed = !0,
            this.pendingTask.unsubscribe()
        }
        static \u0275prov = v({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
}
)()
  , Xn = ( () => {
    class e {
        internalPendingTasks = p(pt);
        scheduler = p(Ne);
        errorHandler = p(ke);
        add() {
            let n = this.internalPendingTasks.add();
            return () => {
                this.internalPendingTasks.has(n) && (this.scheduler.notify(11),
                this.internalPendingTasks.remove(n))
            }
        }
        run(n) {
            let r = this.add();
            n().catch(this.errorHandler).finally(r)
        }
        static \u0275prov = v({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
}
)();
function er(...e) {}
var uo = ( () => {
    class e {
        static \u0275prov = v({
            token: e,
            providedIn: "root",
            factory: () => new hl
        })
    }
    return e
}
)()
  , hl = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(t) {
        this.enqueue(t),
        this.schedule(t)
    }
    schedule(t) {
        t.dirty && this.dirtyEffectCount++
    }
    remove(t) {
        let n = t.zone
          , r = this.queues.get(n);
        r.has(t) && (r.delete(t),
        t.dirty && this.dirtyEffectCount--)
    }
    enqueue(t) {
        let n = t.zone;
        this.queues.has(n) || this.queues.set(n, new Set);
        let r = this.queues.get(n);
        r.has(t) || r.add(t)
    }
    flush() {
        for (; this.dirtyEffectCount > 0; ) {
            let t = !1;
            for (let[n,r] of this.queues)
                n === null ? t ||= this.flushQueue(r) : t ||= n.run( () => this.flushQueue(r));
            t || (this.dirtyEffectCount = 0)
        }
    }
    flushQueue(t) {
        let n = !1;
        for (let r of t)
            r.dirty && (this.dirtyEffectCount--,
            n = !0,
            r.run());
        return n
    }
}
;
function oi(e) {
    return {
        toString: e
    }.toString()
}
var Da = "__parameters__";
function cb(e) {
    return function(...n) {
        if (e) {
            let r = e(...n);
            for (let i in r)
                this[i] = r[i]
        }
    }
}
function ub(e, t, n) {
    return oi( () => {
        let r = cb(t);
        function i(...o) {
            if (this instanceof i)
                return r.apply(this, o),
                this;
            let s = new i(...o);
            return a.annotation = s,
            a;
            function a(c, u, l) {
                let d = c.hasOwnProperty(Da) ? c[Da] : Object.defineProperty(c, Da, {
                    value: []
                })[Da];
                for (; d.length <= l; )
                    d.push(null);
                return (d[l] = d[l] || []).push(s),
                c
            }
        }
        return i.prototype.ngMetadataName = e,
        i.annotationCls = i,
        i
    }
    )
}
var Pe = Vg(ub("Optional"), 8);
function lb(e) {
    return typeof e == "function"
}
var Aa = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, r) {
        this.previousValue = t,
        this.currentValue = n,
        this.firstChange = r
    }
    isFirstChange() {
        return this.firstChange
    }
}
;
function rv(e, t, n, r) {
    t !== null ? t.applyValueToInputSignal(t, r) : e[n] = r
}
var si = ( () => {
    let e = () => iv;
    return e.ngInherit = !0,
    e
}
)();
function iv(e) {
    return e.type.prototype.ngOnChanges && (e.setInput = fb),
    db
}
function db() {
    let e = sv(this)
      , t = e?.current;
    if (t) {
        let n = e.previous;
        if (n === Qe)
            e.previous = t;
        else
            for (let r in t)
                n[r] = t[r];
        e.current = null,
        this.ngOnChanges(t)
    }
}
function fb(e, t, n, r, i) {
    let o = this.declaredInputs[r]
      , s = sv(e) || hb(e, {
        previous: Qe,
        current: null
    })
      , a = s.current || (s.current = {})
      , c = s.previous
      , u = c[o];
    a[o] = new Aa(u && u.currentValue,n,c === Qe),
    rv(e, t, i, n)
}
var ov = "__ngSimpleChanges__";
function sv(e) {
    return e[ov] || null
}
function hb(e, t) {
    return e[ov] = t
}
var Cm = [];
var H = function(e, t=null, n) {
    for (let r = 0; r < Cm.length; r++) {
        let i = Cm[r];
        i(e, t, n)
    }
};
function pb(e, t, n) {
    let {ngOnChanges: r, ngOnInit: i, ngDoCheck: o} = t.type.prototype;
    if (r) {
        let s = iv(t);
        (n.preOrderHooks ??= []).push(e, s),
        (n.preOrderCheckHooks ??= []).push(e, s)
    }
    i && (n.preOrderHooks ??= []).push(0 - e, i),
    o && ((n.preOrderHooks ??= []).push(e, o),
    (n.preOrderCheckHooks ??= []).push(e, o))
}
function av(e, t) {
    for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
        let o = e.data[n].type.prototype
          , {ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: u, ngOnDestroy: l} = o;
        s && (e.contentHooks ??= []).push(-n, s),
        a && ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
        c && (e.viewHooks ??= []).push(-n, c),
        u && ((e.viewHooks ??= []).push(n, u),
        (e.viewCheckHooks ??= []).push(n, u)),
        l != null && (e.destroyHooks ??= []).push(n, l)
    }
}
function ba(e, t, n) {
    cv(e, t, 3, n)
}
function Ca(e, t, n, r) {
    (e[b] & 3) === n && cv(e, t, n, r)
}
function nd(e, t) {
    let n = e[b];
    (n & 3) === t && (n &= 16383,
    n += 1,
    e[b] = n)
}
function cv(e, t, n, r) {
    let i = r !== void 0 ? e[Gn] & 65535 : 0
      , o = r ?? -1
      , s = t.length - 1
      , a = 0;
    for (let c = i; c < s; c++)
        if (typeof t[c + 1] == "number") {
            if (a = t[c],
            r != null && a >= r)
                break
        } else
            t[c] < 0 && (e[Gn] += 65536),
            (a < o || o == -1) && (gb(e, n, t, c),
            e[Gn] = (e[Gn] & 4294901760) + c + 2),
            c++
}
function Tm(e, t) {
    H(4, e, t);
    let n = T(null);
    try {
        t.call(e)
    } finally {
        T(n),
        H(5, e, t)
    }
}
function gb(e, t, n, r) {
    let i = n[r] < 0
      , o = n[r + 1]
      , s = i ? -n[r] : n[r]
      , a = e[s];
    i ? e[b] >> 14 < e[Gn] >> 16 && (e[b] & 3) === t && (e[b] += 16384,
    Tm(a, o)) : Tm(a, o)
}
var Qr = -1
  , nr = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, r, i) {
        this.factory = t,
        this.name = i,
        this.canSeeViewProviders = n,
        this.injectImpl = r
    }
}
;
function mb(e) {
    return (e.flags & 8) !== 0
}
function vb(e) {
    return (e.flags & 16) !== 0
}
function yb(e, t, n) {
    let r = 0;
    for (; r < n.length; ) {
        let i = n[r];
        if (typeof i == "number") {
            if (i !== 0)
                break;
            r++;
            let o = n[r++]
              , s = n[r++]
              , a = n[r++];
            e.setAttribute(t, s, a, o)
        } else {
            let o = i
              , s = n[++r];
            Ib(o) ? e.setProperty(t, o, s) : e.setAttribute(t, o, s),
            r++
        }
    }
    return r
}
function Eb(e) {
    return e === 3 || e === 4 || e === 6
}
function Ib(e) {
    return e.charCodeAt(0) === 64
}
function Jr(e, t) {
    if (!(t === null || t.length === 0))
        if (e === null || e.length === 0)
            e = t.slice();
        else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
                let i = t[r];
                typeof i == "number" ? n = i : n === 0 || (n === -1 || n === 2 ? Sm(e, n, i, null, t[++r]) : Sm(e, n, i, null, null))
            }
        }
    return e
}
function Sm(e, t, n, r, i) {
    let o = 0
      , s = e.length;
    if (t === -1)
        s = -1;
    else
        for (; o < e.length; ) {
            let a = e[o++];
            if (typeof a == "number") {
                if (a === t) {
                    s = -1;
                    break
                } else if (a > t) {
                    s = o - 1;
                    break
                }
            }
        }
    for (; o < e.length; ) {
        let a = e[o];
        if (typeof a == "number")
            break;
        if (a === n) {
            i !== null && (e[o + 1] = i);
            return
        }
        o++,
        i !== null && o++
    }
    s !== -1 && (e.splice(s, 0, t),
    o = s + 1),
    e.splice(o++, 0, n),
    i !== null && e.splice(o++, 0, i)
}
function uv(e) {
    return e !== Qr
}
function Na(e) {
    return e & 32767
}
function _b(e) {
    return e >> 16
}
function Ra(e, t) {
    let n = _b(e)
      , r = t;
    for (; n > 0; )
        r = r[zn],
        n--;
    return r
}
var hd = !0;
function Am(e) {
    let t = hd;
    return hd = e,
    t
}
var Db = 256
  , lv = Db - 1
  , dv = 5
  , wb = 0
  , gt = {};
function bb(e, t, n) {
    let r;
    typeof n == "string" ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty($n) && (r = n[$n]),
    r == null && (r = n[$n] = wb++);
    let i = r & lv
      , o = 1 << i;
    t.data[e + (i >> dv)] |= o
}
function Ma(e, t) {
    let n = fv(e, t);
    if (n !== -1)
        return n;
    let r = t[D];
    r.firstCreatePass && (e.injectorIndex = t.length,
    rd(r.data, e),
    rd(t, null),
    rd(r.blueprint, null));
    let i = Wd(e, t)
      , o = e.injectorIndex;
    if (uv(i)) {
        let s = Na(i)
          , a = Ra(i, t)
          , c = a[D].data;
        for (let u = 0; u < 8; u++)
            t[o + u] = a[s + u] | c[s + u]
    }
    return t[o + 8] = i,
    o
}
function rd(e, t) {
    e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
}
function fv(e, t) {
    return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex
}
function Wd(e, t) {
    if (e.parent && e.parent.injectorIndex !== -1)
        return e.parent.injectorIndex;
    let n = 0
      , r = null
      , i = t;
    for (; i !== null; ) {
        if (r = vv(i),
        r === null)
            return Qr;
        if (n++,
        i = i[zn],
        r.injectorIndex !== -1)
            return r.injectorIndex | n << 16
    }
    return Qr
}
function pd(e, t, n) {
    bb(e, t, n)
}
function hv(e, t, n) {
    if (n & 8 || e !== void 0)
        return e;
    sa(t, "NodeInjector")
}
function pv(e, t, n, r) {
    if (n & 8 && r === void 0 && (r = null),
    (n & 3) === 0) {
        let i = e[nn]
          , o = Ae(void 0);
        try {
            return i ? i.get(t, r, n & 8) : wl(t, r, n & 8)
        } finally {
            Ae(o)
        }
    }
    return hv(r, t, n)
}
function gv(e, t, n, r=0, i) {
    if (e !== null) {
        if (t[b] & 2048 && !(r & 2)) {
            let s = Ab(e, t, n, r, gt);
            if (s !== gt)
                return s
        }
        let o = mv(e, t, n, r, gt);
        if (o !== gt)
            return o
    }
    return pv(t, n, r, i)
}
function mv(e, t, n, r, i) {
    let o = Tb(n);
    if (typeof o == "function") {
        if (!Ql(t, e, r))
            return r & 1 ? hv(i, n, r) : pv(t, n, r, i);
        try {
            let s;
            if (s = o(r),
            s == null && !(r & 8))
                sa(n);
            else
                return s
        } finally {
            Jl()
        }
    } else if (typeof o == "number") {
        let s = null
          , a = fv(e, t)
          , c = Qr
          , u = r & 1 ? t[_e][Ie] : null;
        for ((a === -1 || r & 4) && (c = a === -1 ? Wd(e, t) : t[a + 8],
        c === Qr || !Rm(r, !1) ? a = -1 : (s = t[D],
        a = Na(c),
        t = Ra(c, t))); a !== -1; ) {
            let l = t[D];
            if (Nm(o, a, l.data)) {
                let d = Cb(a, t, n, s, r, u);
                if (d !== gt)
                    return d
            }
            c = t[a + 8],
            c !== Qr && Rm(r, t[D].data[a + 8] === u) && Nm(o, a, t) ? (s = l,
            a = Na(c),
            t = Ra(c, t)) : a = -1
        }
    }
    return i
}
function Cb(e, t, n, r, i, o) {
    let s = t[D]
      , a = s.data[e + 8]
      , c = r == null ? sn(a) && hd : r != s && (a.type & 3) !== 0
      , u = i & 1 && o === a
      , l = Ta(a, s, n, c, u);
    return l !== null ? ho(t, s, l, a, i) : gt
}
function Ta(e, t, n, r, i) {
    let o = e.providerIndexes
      , s = t.data
      , a = o & 1048575
      , c = e.directiveStart
      , u = e.directiveEnd
      , l = o >> 20
      , d = r ? a : a + l
      , f = i ? a + l : u;
    for (let h = d; h < f; h++) {
        let g = s[h];
        if (h < c && n === g || h >= c && g.type === n)
            return h
    }
    if (i) {
        let h = s[c];
        if (h && et(h) && h.type === n)
            return c
    }
    return null
}
function ho(e, t, n, r, i) {
    let o = e[n]
      , s = t.data;
    if (o instanceof nr) {
        let a = o;
        if (a.resolving) {
            let h = Lg(s[n]);
            throw Dl(h)
        }
        let c = Am(a.canSeeViewProviders);
        a.resolving = !0;
        let u = s[n].type || s[n], l, d = a.injectImpl ? Ae(a.injectImpl) : null, f = Ql(e, r, 0);
        try {
            o = e[n] = a.factory(void 0, i, s, e, r),
            t.firstCreatePass && n >= r.directiveStart && pb(n, s[n], t)
        } finally {
            d !== null && Ae(d),
            Am(c),
            a.resolving = !1,
            Jl()
        }
    }
    return o
}
function Tb(e) {
    if (typeof e == "string")
        return e.charCodeAt(0) || 0;
    let t = e.hasOwnProperty($n) ? e[$n] : void 0;
    return typeof t == "number" ? t >= 0 ? t & lv : Sb : t
}
function Nm(e, t, n) {
    let r = 1 << e;
    return !!(n[t + (e >> dv)] & r)
}
function Rm(e, t) {
    return !(e & 2) && !(e & 1 && t)
}
var tr = class {
    _tNode;
    _lView;
    constructor(t, n) {
        this._tNode = t,
        this._lView = n
    }
    get(t, n, r) {
        return gv(this._tNode, this._lView, t, Un(r), n)
    }
}
;
function Sb() {
    return new tr(ve(),x())
}
function Ga(e) {
    return oi( () => {
        let t = e.prototype.constructor
          , n = t[Ki] || gd(t)
          , r = Object.prototype
          , i = Object.getPrototypeOf(e.prototype).constructor;
        for (; i && i !== r; ) {
            let o = i[Ki] || gd(i);
            if (o && o !== n)
                return o;
            i = Object.getPrototypeOf(i)
        }
        return o => new o
    }
    )
}
function gd(e) {
    return gl(e) ? () => {
        let t = gd(ae(e));
        return t && t()
    }
    : Vn(e)
}
function Ab(e, t, n, r, i) {
    let o = e
      , s = t;
    for (; o !== null && s !== null && s[b] & 2048 && !qr(s); ) {
        let a = mv(o, s, n, r | 2, gt);
        if (a !== gt)
            return a;
        let c = o.parent;
        if (!c) {
            let u = s[Ol];
            if (u) {
                let l = u.get(n, gt, r);
                if (l !== gt)
                    return l
            }
            c = vv(s),
            s = s[zn]
        }
        o = c
    }
    return i
}
function vv(e) {
    let t = e[D]
      , n = t.type;
    return n === 2 ? t.declTNode : n === 1 ? e[Ie] : null
}
function Nb() {
    return ai(ve(), x())
}
function ai(e, t) {
    return new mt(tt(e, t))
}
var mt = ( () => {
    class e {
        nativeElement;
        constructor(n) {
            this.nativeElement = n
        }
        static __NG_ELEMENT_ID__ = Nb
    }
    return e
}
)();
function yv(e) {
    return e instanceof mt ? e.nativeElement : e
}
function Rb() {
    return this._results[Symbol.iterator]()
}
var rr = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() {
        return this._changes ??= new U
    }
    constructor(t=!1) {
        this._emitDistinctChangesOnly = t
    }
    get(t) {
        return this._results[t]
    }
    map(t) {
        return this._results.map(t)
    }
    filter(t) {
        return this._results.filter(t)
    }
    find(t) {
        return this._results.find(t)
    }
    reduce(t, n) {
        return this._results.reduce(t, n)
    }
    forEach(t) {
        this._results.forEach(t)
    }
    some(t) {
        return this._results.some(t)
    }
    toArray() {
        return this._results.slice()
    }
    toString() {
        return this._results.toString()
    }
    reset(t, n) {
        this.dirty = !1;
        let r = Hg(t);
        (this._changesDetected = !Bg(this._results, r, n)) && (this._results = r,
        this.length = r.length,
        this.last = r[this.length - 1],
        this.first = r[0])
    }
    notifyOnChanges() {
        this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this)
    }
    onDirty(t) {
        this._onDirty = t
    }
    setDirty() {
        this.dirty = !0,
        this._onDirty?.()
    }
    destroy() {
        this._changes !== void 0 && (this._changes.complete(),
        this._changes.unsubscribe())
    }
    [Symbol.iterator] = Rb
}
;
function Ev(e) {
    return (e.flags & 128) === 128
}
var zd = (function(e) {
    return e[e.OnPush = 0] = "OnPush",
    e[e.Default = 1] = "Default",
    e
}
)(zd || {})
  , Iv = new Map
  , Mb = 0;
function Ob() {
    return Mb++
}
function kb(e) {
    Iv.set(e[to], e)
}
function md(e) {
    Iv.delete(e[to])
}
var Mm = "__ngContext__";
function Xr(e, t) {
    ht(t) ? (e[Mm] = t[to],
    kb(t)) : e[Mm] = t
}
function _v(e) {
    return wv(e[Gr])
}
function Dv(e) {
    return wv(e[$e])
}
function wv(e) {
    for (; e !== null && !Xe(e); )
        e = e[$e];
    return e
}
var vd;
function Gd(e) {
    vd = e
}
function bv() {
    if (vd !== void 0)
        return vd;
    if (typeof document < "u")
        return document;
    throw new I(210,!1)
}
var ci = new E("",{
    providedIn: "root",
    factory: () => xb
})
  , xb = "ng"
  , qa = new E("")
  , vt = new E("",{
    providedIn: "platform",
    factory: () => "unknown"
});
var qd = new E("")
  , ui = new E("",{
    providedIn: "root",
    factory: () => bv().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null
});
var Pb = "h"
  , Lb = "b";
var Cv = "r";
var Tv = "di";
var Sv = !1
  , Av = new E("",{
    providedIn: "root",
    factory: () => Sv
});
var Fb = (e, t, n, r) => {}
;
function jb(e, t, n, r) {
    Fb(e, t, n, r)
}
function Ka(e) {
    return (e.flags & 32) === 32
}
var Ub = () => null;
function Nv(e, t, n=!1) {
    return Ub(e, t, n)
}
function Rv(e, t) {
    let n = e.contentQueries;
    if (n !== null) {
        let r = T(null);
        try {
            for (let i = 0; i < n.length; i += 2) {
                let o = n[i]
                  , s = n[i + 1];
                if (s !== -1) {
                    let a = e.data[s];
                    so(o),
                    a.contentQueries(2, t[s], s)
                }
            }
        } finally {
            T(r)
        }
    }
}
function yd(e, t, n) {
    so(0);
    let r = T(null);
    try {
        t(e, n)
    } finally {
        T(r)
    }
}
function Mv(e, t, n) {
    if (xl(t)) {
        let r = T(null);
        try {
            let i = t.directiveStart
              , o = t.directiveEnd;
            for (let s = i; s < o; s++) {
                let a = e.data[s];
                if (a.contentQueries) {
                    let c = n[s];
                    a.contentQueries(1, c, s)
                }
            }
        } finally {
            T(r)
        }
    }
}
var Ot = (function(e) {
    return e[e.Emulated = 0] = "Emulated",
    e[e.None = 2] = "None",
    e[e.ShadowDom = 3] = "ShadowDom",
    e
}
)(Ot || {});
var Oa = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) {
        this.changingThisBreaksApplicationSecurity = t
    }
    toString() {
        return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${na})`
    }
}
;
function Ya(e) {
    return e instanceof Oa ? e.changingThisBreaksApplicationSecurity : e
}
function Ov(e, t) {
    let n = kv(e);
    if (n != null && n !== t) {
        if (n === "ResourceURL" && t === "URL")
            return !0;
        throw new Error(`Required a safe ${t}, got a ${n} (see ${na})`)
    }
    return n === t
}
function kv(e) {
    return e instanceof Oa && e.getTypeName() || null
}
var Vb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function xv(e) {
    return e = String(e),
    e.match(Vb) ? e : "unsafe:" + e
}
var Kd = (function(e) {
    return e[e.NONE = 0] = "NONE",
    e[e.HTML = 1] = "HTML",
    e[e.STYLE = 2] = "STYLE",
    e[e.SCRIPT = 3] = "SCRIPT",
    e[e.URL = 4] = "URL",
    e[e.RESOURCE_URL = 5] = "RESOURCE_URL",
    e
}
)(Kd || {});
function Bb(e) {
    let t = Hb();
    return t ? t.sanitize(Kd.URL, e) || "" : Ov(e, "URL") ? Ya(e) : xv(Ji(e))
}
function Hb() {
    let e = x();
    return e && e[dt].sanitizer
}
function Pv(e) {
    return e instanceof Function ? e() : e
}
function $b(e, t, n) {
    let r = e.length;
    for (; ; ) {
        let i = e.indexOf(t, n);
        if (i === -1)
            return i;
        if (i === 0 || e.charCodeAt(i - 1) <= 32) {
            let o = t.length;
            if (i + o === r || e.charCodeAt(i + o) <= 32)
                return i
        }
        n = i + 1
    }
}
var Lv = "ng-template";
function Wb(e, t, n, r) {
    let i = 0;
    if (r) {
        for (; i < t.length && typeof t[i] == "string"; i += 2)
            if (t[i] === "class" && $b(t[i + 1].toLowerCase(), n, 0) !== -1)
                return !0
    } else if (Yd(e))
        return !1;
    if (i = t.indexOf(1, i),
    i > -1) {
        let o;
        for (; ++i < t.length && typeof (o = t[i]) == "string"; )
            if (o.toLowerCase() === n)
                return !0
    }
    return !1
}
function Yd(e) {
    return e.type === 4 && e.value !== Lv
}
function zb(e, t, n) {
    let r = e.type === 4 && !n ? Lv : e.value;
    return t === r
}
function Gb(e, t, n) {
    let r = 4
      , i = e.attrs
      , o = i !== null ? Yb(i) : 0
      , s = !1;
    for (let a = 0; a < t.length; a++) {
        let c = t[a];
        if (typeof c == "number") {
            if (!s && !nt(r) && !nt(c))
                return !1;
            if (s && nt(c))
                continue;
            s = !1,
            r = c | r & 1;
            continue
        }
        if (!s)
            if (r & 4) {
                if (r = 2 | r & 1,
                c !== "" && !zb(e, c, n) || c === "" && t.length === 1) {
                    if (nt(r))
                        return !1;
                    s = !0
                }
            } else if (r & 8) {
                if (i === null || !Wb(e, i, c, n)) {
                    if (nt(r))
                        return !1;
                    s = !0
                }
            } else {
                let u = t[++a]
                  , l = qb(c, i, Yd(e), n);
                if (l === -1) {
                    if (nt(r))
                        return !1;
                    s = !0;
                    continue
                }
                if (u !== "") {
                    let d;
                    if (l > o ? d = "" : d = i[l + 1].toLowerCase(),
                    r & 2 && u !== d) {
                        if (nt(r))
                            return !1;
                        s = !0
                    }
                }
            }
    }
    return nt(r) || s
}
function nt(e) {
    return (e & 1) === 0
}
function qb(e, t, n, r) {
    if (t === null)
        return -1;
    let i = 0;
    if (r || !n) {
        let o = !1;
        for (; i < t.length; ) {
            let s = t[i];
            if (s === e)
                return i;
            if (s === 3 || s === 6)
                o = !0;
            else if (s === 1 || s === 2) {
                let a = t[++i];
                for (; typeof a == "string"; )
                    a = t[++i];
                continue
            } else {
                if (s === 4)
                    break;
                if (s === 0) {
                    i += 4;
                    continue
                }
            }
            i += o ? 1 : 2
        }
        return -1
    } else
        return Zb(t, e)
}
function Fv(e, t, n=!1) {
    for (let r = 0; r < t.length; r++)
        if (Gb(e, t[r], n))
            return !0;
    return !1
}
function Kb(e) {
    let t = e.attrs;
    if (t != null) {
        let n = t.indexOf(5);
        if ((n & 1) === 0)
            return t[n + 1]
    }
    return null
}
function Yb(e) {
    for (let t = 0; t < e.length; t++) {
        let n = e[t];
        if (Eb(n))
            return t
    }
    return e.length
}
function Zb(e, t) {
    let n = e.indexOf(4);
    if (n > -1)
        for (n++; n < e.length; ) {
            let r = e[n];
            if (typeof r == "number")
                return -1;
            if (r === t)
                return n;
            n++
        }
    return -1
}
function Qb(e, t) {
    e: for (let n = 0; n < t.length; n++) {
        let r = t[n];
        if (e.length === r.length) {
            for (let i = 0; i < e.length; i++)
                if (e[i] !== r[i])
                    continue e;
            return !0
        }
    }
    return !1
}
function Om(e, t) {
    return e ? ":not(" + t.trim() + ")" : t
}
function Jb(e) {
    let t = e[0]
      , n = 1
      , r = 2
      , i = ""
      , o = !1;
    for (; n < e.length; ) {
        let s = e[n];
        if (typeof s == "string")
            if (r & 2) {
                let a = e[++n];
                i += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]"
            } else
                r & 8 ? i += "." + s : r & 4 && (i += " " + s);
        else
            i !== "" && !nt(s) && (t += Om(o, i),
            i = ""),
            r = s,
            o = o || !nt(r);
        n++
    }
    return i !== "" && (t += Om(o, i)),
    t
}
function Xb(e) {
    return e.map(Jb).join(",")
}
function eC(e) {
    let t = []
      , n = []
      , r = 1
      , i = 2;
    for (; r < e.length; ) {
        let o = e[r];
        if (typeof o == "string")
            i === 2 ? o !== "" && t.push(o, e[++r]) : i === 8 && n.push(o);
        else {
            if (!nt(i))
                break;
            i = o
        }
        r++
    }
    return n.length && t.push(1, ...n),
    t
}
var it = {};
function tC(e, t) {
    return e.createText(t)
}
function nC(e, t, n) {
    e.setValue(t, n)
}
function jv(e, t, n) {
    return e.createElement(t, n)
}
function ka(e, t, n, r, i) {
    e.insertBefore(t, n, r, i)
}
function Uv(e, t, n) {
    e.appendChild(t, n)
}
function km(e, t, n, r, i) {
    r !== null ? ka(e, t, n, r, i) : Uv(e, t, n)
}
function Vv(e, t, n, r) {
    e.removeChild(null, t, n, r)
}
function rC(e, t, n) {
    e.setAttribute(t, "style", n)
}
function iC(e, t, n) {
    n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n)
}
function Bv(e, t, n) {
    let {mergedAttrs: r, classes: i, styles: o} = n;
    r !== null && yb(e, t, r),
    i !== null && iC(e, t, i),
    o !== null && rC(e, t, o)
}
function Zd(e, t, n, r, i, o, s, a, c, u, l) {
    let d = X + r
      , f = d + i
      , h = oC(d, f)
      , g = typeof u == "function" ? u() : u;
    return h[D] = {
        type: e,
        blueprint: h,
        template: n,
        queries: null,
        viewQuery: a,
        declTNode: t,
        data: h.slice().fill(null, d),
        bindingStartIndex: d,
        expandoStartIndex: f,
        hostBindingOpCodes: null,
        firstCreatePass: !0,
        firstUpdatePass: !0,
        staticViewQueries: !1,
        staticContentQueries: !1,
        preOrderHooks: null,
        preOrderCheckHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: typeof o == "function" ? o() : o,
        pipeRegistry: typeof s == "function" ? s() : s,
        firstChild: null,
        schemas: c,
        consts: g,
        incompleteFirstPass: !1,
        ssrId: l
    }
}
function oC(e, t) {
    let n = [];
    for (let r = 0; r < t; r++)
        n.push(r < e ? null : it);
    return n
}
function sC(e) {
    let t = e.tView;
    return t === null || t.incompleteFirstPass ? e.tView = Zd(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t
}
function Qd(e, t, n, r, i, o, s, a, c, u, l) {
    let d = t.blueprint.slice();
    return d[Je] = i,
    d[b] = r | 4 | 128 | 8 | 64 | 1024,
    (u !== null || e && e[b] & 2048) && (d[b] |= 2048),
    Ll(d),
    d[ce] = d[zn] = e,
    d[J] = n,
    d[dt] = s || e && e[dt],
    d[K] = a || e && e[K],
    d[nn] = c || e && e[nn] || null,
    d[Ie] = o,
    d[to] = Ob(),
    d[Wn] = l,
    d[Ol] = u,
    d[_e] = t.type == 2 ? e[_e] : d,
    d
}
function aC(e, t, n) {
    let r = tt(t, e)
      , i = sC(n)
      , o = e[dt].rendererFactory
      , s = Jd(e, Qd(e, i, null, Hv(n), r, t, null, o.createRenderer(r, n), null, null, null));
    return e[t.index] = s
}
function Hv(e) {
    let t = 16;
    return e.signals ? t = 4096 : e.onPush && (t = 64),
    t
}
function $v(e, t, n, r) {
    if (n === 0)
        return -1;
    let i = t.length;
    for (let o = 0; o < n; o++)
        t.push(r),
        e.blueprint.push(r),
        e.data.push(null);
    return i
}
function Jd(e, t) {
    return e[Gr] ? e[Ml][$e] = t : e[Gr] = t,
    e[Ml] = t,
    t
}
function cC(e=1) {
    Wv(re(), x(), Mt() + e, !1)
}
function Wv(e, t, n, r) {
    if (!r)
        if ((t[b] & 3) === 3) {
            let o = e.preOrderCheckHooks;
            o !== null && ba(t, o, n)
        } else {
            let o = e.preOrderHooks;
            o !== null && Ca(t, o, 0, n)
        }
    cn(n)
}
var Za = (function(e) {
    return e[e.None = 0] = "None",
    e[e.SignalBased = 1] = "SignalBased",
    e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform",
    e
}
)(Za || {});
function Ed(e, t, n, r) {
    let i = T(null);
    try {
        let[o,s,a] = e.inputs[n]
          , c = null;
        (s & Za.SignalBased) !== 0 && (c = t[o][ie]),
        c !== null && c.transformFn !== void 0 ? r = c.transformFn(r) : a !== null && (r = a.call(t, r)),
        e.setInput !== null ? e.setInput(t, c, r, n, o) : rv(t, c, o, r)
    } finally {
        T(i)
    }
}
var kt = (function(e) {
    return e[e.Important = 1] = "Important",
    e[e.DashCase = 2] = "DashCase",
    e
}
)(kt || {}), uC;
function Xd(e, t) {
    return uC(e, t)
}
var ei = new Set
  , Qa = (function(e) {
    return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION",
    e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER",
    e
}
)(Qa || {})
  , ln = new E("")
  , xm = new Set;
function Pt(e) {
    xm.has(e) || (xm.add(e),
    performance?.mark?.("mark_feature_usage", {
        detail: {
            feature: e
        }
    }))
}
var zv = !1
  , Id = class extends U {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t=!1) {
        super(),
        this.__isAsync = t,
        Qg() && (this.destroyRef = p(qe, {
            optional: !0
        }) ?? void 0,
        this.pendingTasks = p(pt, {
            optional: !0
        }) ?? void 0)
    }
    emit(t) {
        let n = T(null);
        try {
            super.next(t)
        } finally {
            T(n)
        }
    }
    subscribe(t, n, r) {
        let i = t
          , o = n || ( () => null)
          , s = r;
        if (t && typeof t == "object") {
            let c = t;
            i = c.next?.bind(c),
            o = c.error?.bind(c),
            s = c.complete?.bind(c)
        }
        this.__isAsync && (o = this.wrapInTimeout(o),
        i && (i = this.wrapInTimeout(i)),
        s && (s = this.wrapInTimeout(s)));
        let a = super.subscribe({
            next: i,
            error: o,
            complete: s
        });
        return t instanceof q && t.add(a),
        a
    }
    wrapInTimeout(t) {
        return n => {
            let r = this.pendingTasks?.add();
            setTimeout( () => {
                try {
                    t(n)
                } finally {
                    r !== void 0 && this.pendingTasks?.remove(r)
                }
            }
            )
        }
    }
}
  , de = Id;
function Gv(e) {
    let t, n;
    function r() {
        e = er;
        try {
            n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n),
            t !== void 0 && clearTimeout(t)
        } catch {}
    }
    return t = setTimeout( () => {
        e(),
        r()
    }
    ),
    typeof requestAnimationFrame == "function" && (n = requestAnimationFrame( () => {
        e(),
        r()
    }
    )),
    () => r()
}
function Pm(e) {
    return queueMicrotask( () => e()),
    () => {
        e = er
    }
}
var ef = "isAngularZone"
  , xa = ef + "_ID"
  , lC = 0
  , F = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new de(!1);
    onMicrotaskEmpty = new de(!1);
    onStable = new de(!1);
    onError = new de(!1);
    constructor(t) {
        let {enableLongStackTrace: n=!1, shouldCoalesceEventChangeDetection: r=!1, shouldCoalesceRunChangeDetection: i=!1, scheduleInRootZone: o=zv} = t;
        if (typeof Zone > "u")
            throw new I(908,!1);
        Zone.assertZonePatched();
        let s = this;
        s._nesting = 0,
        s._outer = s._inner = Zone.current,
        Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)),
        n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
        s.shouldCoalesceEventChangeDetection = !i && r,
        s.shouldCoalesceRunChangeDetection = i,
        s.callbackScheduled = !1,
        s.scheduleInRootZone = o,
        hC(s)
    }
    static isInAngularZone() {
        return typeof Zone < "u" && Zone.current.get(ef) === !0
    }
    static assertInAngularZone() {
        if (!e.isInAngularZone())
            throw new I(909,!1)
    }
    static assertNotInAngularZone() {
        if (e.isInAngularZone())
            throw new I(909,!1)
    }
    run(t, n, r) {
        return this._inner.run(t, n, r)
    }
    runTask(t, n, r, i) {
        let o = this._inner
          , s = o.scheduleEventTask("NgZoneEvent: " + i, t, dC, er, er);
        try {
            return o.runTask(s, n, r)
        } finally {
            o.cancelTask(s)
        }
    }
    runGuarded(t, n, r) {
        return this._inner.runGuarded(t, n, r)
    }
    runOutsideAngular(t) {
        return this._outer.run(t)
    }
}
  , dC = {};
function tf(e) {
    if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
        try {
            e._nesting++,
            e.onMicrotaskEmpty.emit(null)
        } finally {
            if (e._nesting--,
            !e.hasPendingMicrotasks)
                try {
                    e.runOutsideAngular( () => e.onStable.emit(null))
                } finally {
                    e.isStable = !0
                }
        }
}
function fC(e) {
    if (e.isCheckStableRunning || e.callbackScheduled)
        return;
    e.callbackScheduled = !0;
    function t() {
        Gv( () => {
            e.callbackScheduled = !1,
            _d(e),
            e.isCheckStableRunning = !0,
            tf(e),
            e.isCheckStableRunning = !1
        }
        )
    }
    e.scheduleInRootZone ? Zone.root.run( () => {
        t()
    }
    ) : e._outer.run( () => {
        t()
    }
    ),
    _d(e)
}
function hC(e) {
    let t = () => {
        fC(e)
    }
      , n = lC++;
    e._inner = e._inner.fork({
        name: "angular",
        properties: {
            [ef]: !0,
            [xa]: n,
            [xa + n]: !0
        },
        onInvokeTask: (r, i, o, s, a, c) => {
            if (pC(c))
                return r.invokeTask(o, s, a, c);
            try {
                return Lm(e),
                r.invokeTask(o, s, a, c)
            } finally {
                (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(),
                Fm(e)
            }
        }
        ,
        onInvoke: (r, i, o, s, a, c, u) => {
            try {
                return Lm(e),
                r.invoke(o, s, a, c, u)
            } finally {
                e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !gC(c) && t(),
                Fm(e)
            }
        }
        ,
        onHasTask: (r, i, o, s) => {
            r.hasTask(o, s),
            i === o && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask,
            _d(e),
            tf(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask))
        }
        ,
        onHandleError: (r, i, o, s) => (r.handleError(o, s),
        e.runOutsideAngular( () => e.onError.emit(s)),
        !1)
    })
}
function _d(e) {
    e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1
}
function Lm(e) {
    e._nesting++,
    e.isStable && (e.isStable = !1,
    e.onUnstable.emit(null))
}
function Fm(e) {
    e._nesting--,
    tf(e)
}
var po = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new de;
    onMicrotaskEmpty = new de;
    onStable = new de;
    onError = new de;
    run(t, n, r) {
        return t.apply(n, r)
    }
    runGuarded(t, n, r) {
        return t.apply(n, r)
    }
    runOutsideAngular(t) {
        return t()
    }
    runTask(t, n, r, i) {
        return t.apply(n, r)
    }
}
;
function pC(e) {
    return qv(e, "__ignore_ng_zone__")
}
function gC(e) {
    return qv(e, "__scheduler_tick__")
}
function qv(e, t) {
    return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0
}
var Ja = ( () => {
    class e {
        impl = null;
        execute() {
            this.impl?.execute()
        }
        static \u0275prov = v({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
}
)()
  , nf = [0, 1, 2, 3]
  , rf = ( () => {
    class e {
        ngZone = p(F);
        scheduler = p(Ne);
        errorHandler = p(He, {
            optional: !0
        });
        sequences = new Set;
        deferredRegistrations = new Set;
        executing = !1;
        constructor() {
            p(ln, {
                optional: !0
            })
        }
        execute() {
            let n = this.sequences.size > 0;
            n && H(16),
            this.executing = !0;
            for (let r of nf)
                for (let i of this.sequences)
                    if (!(i.erroredOrDestroyed || !i.hooks[r]))
                        try {
                            i.pipelinedValue = this.ngZone.runOutsideAngular( () => this.maybeTrace( () => {
                                let o = i.hooks[r];
                                return o(i.pipelinedValue)
                            }
                            , i.snapshot))
                        } catch (o) {
                            i.erroredOrDestroyed = !0,
                            this.errorHandler?.handleError(o)
                        }
            this.executing = !1;
            for (let r of this.sequences)
                r.afterRun(),
                r.once && (this.sequences.delete(r),
                r.destroy());
            for (let r of this.deferredRegistrations)
                this.sequences.add(r);
            this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
            this.deferredRegistrations.clear(),
            n && H(17)
        }
        register(n) {
            let {view: r} = n;
            r !== void 0 ? ((r[qn] ??= []).push(n),
            an(r),
            r[b] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n)
        }
        addSequence(n) {
            this.sequences.add(n),
            this.scheduler.notify(7)
        }
        unregister(n) {
            this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0,
            n.pipelinedValue = void 0,
            n.once = !0) : (this.sequences.delete(n),
            this.deferredRegistrations.delete(n))
        }
        maybeTrace(n, r) {
            return r ? r.run(Qa.AFTER_NEXT_RENDER, n) : n()
        }
        static \u0275prov = v({
            token: e,
            providedIn: "root",
            factory: () => new e
        })
    }
    return e
}
)()
  , go = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, r, i, o, s=null) {
        this.impl = t,
        this.hooks = n,
        this.view = r,
        this.once = i,
        this.snapshot = s,
        this.unregisterOnDestroy = o?.onDestroy( () => this.destroy())
    }
    afterRun() {
        this.erroredOrDestroyed = !1,
        this.pipelinedValue = void 0,
        this.snapshot?.dispose(),
        this.snapshot = null
    }
    destroy() {
        this.impl.unregister(this),
        this.unregisterOnDestroy?.();
        let t = this.view?.[qn];
        t && (this.view[qn] = t.filter(n => n !== this))
    }
}
;
function Xa(e, t) {
    let n = t?.injector ?? p(z);
    return Pt("NgAfterNextRender"),
    vC(e, n, t, !0)
}
function mC(e) {
    return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]
}
function vC(e, t, n, r) {
    let i = t.get(Ja);
    i.impl ??= t.get(rf);
    let o = t.get(ln, null, {
        optional: !0
    })
      , s = n?.manualCleanup !== !0 ? t.get(qe) : null
      , a = t.get(Jn, null, {
        optional: !0
    })
      , c = new go(i.impl,mC(e),a?.view,r,s,o?.snapshot(null));
    return i.impl.register(c),
    c
}
var yC = new E("",{
    providedIn: "root",
    factory: () => ({
        queue: new Set,
        isScheduled: !1,
        scheduler: null
    })
});
function Kv(e, t) {
    let n = e.get(yC);
    if (Array.isArray(t))
        for (let r of t)
            n.queue.add(r);
    else
        n.queue.add(t);
    n.scheduler && n.scheduler(e)
}
function EC(e, t) {
    for (let[n,r] of t)
        Kv(e, r.animateFns)
}
function jm(e, t, n, r) {
    let i = e?.[Kn]?.enter;
    t !== null && i && i.has(n.index) && EC(r, i)
}
function Zr(e, t, n, r, i, o, s, a) {
    if (i != null) {
        let c, u = !1;
        Xe(i) ? c = i : ht(i) && (u = !0,
        i = i[Je]);
        let l = We(i);
        e === 0 && r !== null ? (jm(a, r, o, n),
        s == null ? Uv(t, r, l) : ka(t, r, l, s || null, !0)) : e === 1 && r !== null ? (jm(a, r, o, n),
        ka(t, r, l, s || null, !0)) : e === 2 ? Um(a, o, n, d => {
            Vv(t, l, u, d)
        }
        ) : e === 3 && Um(a, o, n, () => {
            t.destroyNode(l)
        }
        ),
        c != null && RC(t, e, n, c, o, r, s)
    }
}
function IC(e, t) {
    Yv(e, t),
    t[Je] = null,
    t[Ie] = null
}
function _C(e, t, n, r, i, o) {
    r[Je] = i,
    r[Ie] = t,
    tc(e, r, n, 1, i, o)
}
function Yv(e, t) {
    t[dt].changeDetectionScheduler?.notify(9),
    tc(e, t, t[K], 2, null, null)
}
function DC(e) {
    let t = e[Gr];
    if (!t)
        return id(e[D], e);
    for (; t; ) {
        let n = null;
        if (ht(t))
            n = t[Gr];
        else {
            let r = t[ne];
            r && (n = r)
        }
        if (!n) {
            for (; t && !t[$e] && t !== e; )
                ht(t) && id(t[D], t),
                t = t[ce];
            t === null && (t = e),
            ht(t) && id(t[D], t),
            n = t && t[$e]
        }
        t = n
    }
}
function of(e, t) {
    let n = e[Yn]
      , r = n.indexOf(t);
    n.splice(r, 1)
}
function ec(e, t) {
    if (Zn(t))
        return;
    let n = t[K];
    n.destroyNode && tc(e, t, n, 3, null, null),
    DC(t)
}
function id(e, t) {
    if (Zn(t))
        return;
    let n = T(null);
    try {
        t[b] &= -129,
        t[b] |= 256,
        t[Oe] && qt(t[Oe]),
        CC(e, t),
        bC(e, t),
        t[D].type === 1 && t[K].destroy();
        let r = t[rn];
        if (r !== null && Xe(t[ce])) {
            r !== t[ce] && of(r, t);
            let i = t[ft];
            i !== null && i.detachView(e)
        }
        md(t)
    } finally {
        T(n)
    }
}
function Um(e, t, n, r) {
    let i = e?.[Kn];
    if (i == null || i.leave == null || !i.leave.has(t.index))
        return r(!1);
    if (i.skipLeaveAnimations)
        return i.skipLeaveAnimations = !1,
        r(!1);
    e && ei.add(e),
    Kv(n, () => {
        if (i.leave && i.leave.has(t.index)) {
            let s = i.leave.get(t.index)
              , a = [];
            if (s)
                for (let c = 0; c < s.animateFns.length; c++) {
                    let u = s.animateFns[c]
                      , {promise: l} = u();
                    a.push(l)
                }
            i.running = Promise.allSettled(a),
            wC(e, r)
        } else
            e && ei.delete(e),
            r(!1)
    }
    )
}
function wC(e, t) {
    let n = e[Kn]?.running;
    if (n) {
        n.then( () => {
            e[Kn].running = void 0,
            ei.delete(e),
            t(!0)
        }
        );
        return
    }
    t(!1)
}
function bC(e, t) {
    let n = e.cleanup
      , r = t[zr];
    if (n !== null)
        for (let s = 0; s < n.length - 1; s += 2)
            if (typeof n[s] == "string") {
                let a = n[s + 3];
                a >= 0 ? r[a]() : r[-a].unsubscribe(),
                s += 2
            } else {
                let a = r[n[s + 1]];
                n[s].call(a)
            }
    r !== null && (t[zr] = null);
    let i = t[Tt];
    if (i !== null) {
        t[Tt] = null;
        for (let s = 0; s < i.length; s++) {
            let a = i[s];
            a()
        }
    }
    let o = t[Rt];
    if (o !== null) {
        t[Rt] = null;
        for (let s of o)
            s.destroy()
    }
}
function CC(e, t) {
    let n;
    if (e != null && (n = e.destroyHooks) != null)
        for (let r = 0; r < n.length; r += 2) {
            let i = t[n[r]];
            if (!(i instanceof nr)) {
                let o = n[r + 1];
                if (Array.isArray(o))
                    for (let s = 0; s < o.length; s += 2) {
                        let a = i[o[s]]
                          , c = o[s + 1];
                        H(4, a, c);
                        try {
                            c.call(a)
                        } finally {
                            H(5, a, c)
                        }
                    }
                else {
                    H(4, i, o);
                    try {
                        o.call(i)
                    } finally {
                        H(5, i, o)
                    }
                }
            }
        }
}
function Zv(e, t, n) {
    return TC(e, t.parent, n)
}
function TC(e, t, n) {
    let r = t;
    for (; r !== null && r.type & 168; )
        t = r,
        r = t.parent;
    if (r === null)
        return n[Je];
    if (sn(r)) {
        let {encapsulation: i} = e.data[r.directiveStart + r.componentOffset];
        if (i === Ot.None || i === Ot.Emulated)
            return null
    }
    return tt(r, n)
}
function Qv(e, t, n) {
    return AC(e, t, n)
}
function SC(e, t, n) {
    return e.type & 40 ? tt(e, n) : null
}
var AC = SC, Vm;
function sf(e, t, n, r) {
    let i = Zv(e, r, t)
      , o = t[K]
      , s = r.parent || t[Ie]
      , a = Qv(s, r, t);
    if (i != null)
        if (Array.isArray(n))
            for (let c = 0; c < n.length; c++)
                km(o, i, n[c], a, !1);
        else
            km(o, i, n, a, !1);
    Vm !== void 0 && Vm(o, r, t, n, i)
}
function lo(e, t) {
    if (t !== null) {
        let n = t.type;
        if (n & 3)
            return tt(t, e);
        if (n & 4)
            return Dd(-1, e[t.index]);
        if (n & 8) {
            let r = t.child;
            if (r !== null)
                return lo(e, r);
            {
                let i = e[t.index];
                return Xe(i) ? Dd(-1, i) : We(i)
            }
        } else {
            if (n & 128)
                return lo(e, t.next);
            if (n & 32)
                return Xd(t, e)() || We(e[t.index]);
            {
                let r = Jv(e, t);
                if (r !== null) {
                    if (Array.isArray(r))
                        return r[0];
                    let i = tn(e[_e]);
                    return lo(i, r)
                } else
                    return lo(e, t.next)
            }
        }
    }
    return null
}
function Jv(e, t) {
    if (t !== null) {
        let r = e[_e][Ie]
          , i = t.projection;
        return r.projection[i]
    }
    return null
}
function Dd(e, t) {
    let n = ne + e + 1;
    if (n < t.length) {
        let r = t[n]
          , i = r[D].firstChild;
        if (i !== null)
            return lo(r, i)
    }
    return t[on]
}
function af(e, t, n, r, i, o, s) {
    for (; n != null; ) {
        let a = r[nn];
        if (n.type === 128) {
            n = n.next;
            continue
        }
        let c = r[n.index]
          , u = n.type;
        if (s && t === 0 && (c && Xr(We(c), r),
        n.flags |= 2),
        !Ka(n))
            if (u & 8)
                af(e, t, n.child, r, i, o, !1),
                Zr(t, e, a, i, c, n, o, r);
            else if (u & 32) {
                let l = Xd(n, r), d;
                for (; d = l(); )
                    Zr(t, e, a, i, d, n, o, r);
                Zr(t, e, a, i, c, n, o, r)
            } else
                u & 16 ? Xv(e, t, r, n, i, o) : Zr(t, e, a, i, c, n, o, r);
        n = s ? n.projectionNext : n.next
    }
}
function tc(e, t, n, r, i, o) {
    af(n, r, e.firstChild, t, i, o, !1)
}
function NC(e, t, n) {
    let r = t[K]
      , i = Zv(e, n, t)
      , o = n.parent || t[Ie]
      , s = Qv(o, n, t);
    Xv(r, 0, t, n, i, s)
}
function Xv(e, t, n, r, i, o) {
    let s = n[_e]
      , c = s[Ie].projection[r.projection];
    if (Array.isArray(c))
        for (let u = 0; u < c.length; u++) {
            let l = c[u];
            Zr(t, e, n[nn], i, l, r, o, n)
        }
    else {
        let u = c
          , l = s[ce];
        Ev(r) && (u.flags |= 128),
        af(e, t, u, l, i, o, !0)
    }
}
function RC(e, t, n, r, i, o, s) {
    let a = r[on]
      , c = We(r);
    a !== c && Zr(t, e, n, o, a, i, s);
    for (let u = ne; u < r.length; u++) {
        let l = r[u];
        tc(l[D], l, e, t, o, a)
    }
}
function MC(e, t, n, r, i) {
    if (t)
        i ? e.addClass(n, r) : e.removeClass(n, r);
    else {
        let o = r.indexOf("-") === -1 ? void 0 : kt.DashCase;
        i == null ? e.removeStyle(n, r, o) : (typeof i == "string" && i.endsWith("!important") && (i = i.slice(0, -10),
        o |= kt.Important),
        e.setStyle(n, r, i, o))
    }
}
function ey(e, t, n, r, i) {
    let o = Mt()
      , s = r & 2;
    try {
        cn(-1),
        s && t.length > X && Wv(e, t, X, !1),
        H(s ? 2 : 0, i, n),
        n(r, i)
    } finally {
        cn(o),
        H(s ? 3 : 1, i, n)
    }
}
function cf(e, t, n) {
    jC(e, t, n),
    (n.flags & 64) === 64 && UC(e, t, n)
}
function nc(e, t, n=tt) {
    let r = t.localNames;
    if (r !== null) {
        let i = t.index + 1;
        for (let o = 0; o < r.length; o += 2) {
            let s = r[o + 1]
              , a = s === -1 ? n(t, e) : e[s];
            e[i++] = a
        }
    }
}
function OC(e, t, n, r) {
    let o = r.get(Av, Sv) || n === Ot.ShadowDom
      , s = e.selectRootElement(t, o);
    return kC(s),
    s
}
function kC(e) {
    xC(e)
}
var xC = () => null;
function PC(e) {
    return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e
}
function LC(e, t, n, r, i, o) {
    let s = t[D];
    if (uf(e, s, t, n, r)) {
        sn(e) && FC(t, e.index);
        return
    }
    e.type & 3 && (n = PC(n)),
    ty(e, t, n, r, i, o)
}
function ty(e, t, n, r, i, o) {
    if (e.type & 3) {
        let s = tt(e, t);
        r = o != null ? o(r, e.value || "", n) : r,
        i.setProperty(s, n, r)
    } else
        e.type & 12
}
function FC(e, t) {
    let n = ze(t, e);
    n[b] & 16 || (n[b] |= 64)
}
function jC(e, t, n) {
    let r = n.directiveStart
      , i = n.directiveEnd;
    sn(n) && aC(t, n, e.data[r + n.componentOffset]),
    e.firstCreatePass || Ma(n, t);
    let o = n.initialInputs;
    for (let s = r; s < i; s++) {
        let a = e.data[s]
          , c = ho(t, e, s, n);
        if (Xr(c, t),
        o !== null && $C(t, s - r, c, a, n, o),
        et(a)) {
            let u = ze(n.index, t);
            u[J] = ho(t, e, s, n)
        }
    }
}
function UC(e, t, n) {
    let r = n.directiveStart
      , i = n.directiveEnd
      , o = n.index
      , s = mm();
    try {
        cn(o);
        for (let a = r; a < i; a++) {
            let c = e.data[a]
              , u = t[a];
            pa(a),
            (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && VC(c, u)
        }
    } finally {
        cn(-1),
        pa(s)
    }
}
function VC(e, t) {
    e.hostBindings !== null && e.hostBindings(1, t)
}
function ny(e, t) {
    let n = e.directiveRegistry
      , r = null;
    if (n)
        for (let i = 0; i < n.length; i++) {
            let o = n[i];
            Fv(t, o.selectors, !1) && (r ??= [],
            et(o) ? r.unshift(o) : r.push(o))
        }
    return r
}
function BC(e, t, n, r, i, o) {
    let s = tt(e, t);
    HC(t[K], s, o, e.value, n, r, i)
}
function HC(e, t, n, r, i, o, s) {
    if (o == null)
        e.removeAttribute(t, i, n);
    else {
        let a = s == null ? Ji(o) : s(o, r || "", i);
        e.setAttribute(t, i, a, n)
    }
}
function $C(e, t, n, r, i, o) {
    let s = o[t];
    if (s !== null)
        for (let a = 0; a < s.length; a += 2) {
            let c = s[a]
              , u = s[a + 1];
            Ed(r, n, c, u)
        }
}
function ry(e, t, n, r, i) {
    let o = X + n
      , s = t[D]
      , a = i(s, t, e, r, n);
    t[o] = a,
    Kr(e, !0);
    let c = e.type === 2;
    return c ? (Bv(t[K], a, e),
    (am() === 0 || ro(e)) && Xr(a, t),
    cm()) : Xr(a, t),
    Ea() && (!c || !Ka(e)) && sf(s, t, a, e),
    e
}
function iy(e) {
    let t = e;
    return ql() ? Kl() : (t = t.parent,
    Kr(t, !1)),
    t
}
function WC(e, t) {
    let n = e[nn];
    if (!n)
        return;
    let r;
    try {
        r = n.get(ke, null)
    } catch {
        r = null
    }
    r?.(t)
}
function uf(e, t, n, r, i) {
    let o = e.inputs?.[r]
      , s = e.hostDirectiveInputs?.[r]
      , a = !1;
    if (s)
        for (let c = 0; c < s.length; c += 2) {
            let u = s[c]
              , l = s[c + 1]
              , d = t.data[u];
            Ed(d, n[u], l, i),
            a = !0
        }
    if (o)
        for (let c of o) {
            let u = n[c]
              , l = t.data[c];
            Ed(l, u, r, i),
            a = !0
        }
    return a
}
function zC(e, t) {
    let n = ze(t, e)
      , r = n[D];
    GC(r, n);
    let i = n[Je];
    i !== null && n[Wn] === null && (n[Wn] = Nv(i, n[nn])),
    H(18),
    lf(r, n, n[J]),
    H(19, n[J])
}
function GC(e, t) {
    for (let n = t.length; n < e.blueprint.length; n++)
        t.push(e.blueprint[n])
}
function lf(e, t, n) {
    ma(t);
    try {
        let r = e.viewQuery;
        r !== null && yd(1, r, n);
        let i = e.template;
        i !== null && ey(e, t, i, 1, n),
        e.firstCreatePass && (e.firstCreatePass = !1),
        t[ft]?.finishViewCreation(e),
        e.staticContentQueries && Rv(e, t),
        e.staticViewQueries && yd(2, e.viewQuery, n);
        let o = e.components;
        o !== null && qC(t, o)
    } catch (r) {
        throw e.firstCreatePass && (e.incompleteFirstPass = !0,
        e.firstCreatePass = !1),
        r
    } finally {
        t[b] &= -5,
        va()
    }
}
function qC(e, t) {
    for (let n = 0; n < t.length; n++)
        zC(e, t[n])
}
function _o(e, t, n, r) {
    let i = T(null);
    try {
        let o = t.tView
          , a = e[b] & 4096 ? 4096 : 16
          , c = Qd(e, o, n, a, null, t, null, null, r?.injector ?? null, r?.embeddedViewInjector ?? null, r?.dehydratedView ?? null)
          , u = e[t.index];
        c[rn] = u;
        let l = e[ft];
        return l !== null && (c[ft] = l.createEmbeddedView(o)),
        lf(o, c, n),
        c
    } finally {
        T(i)
    }
}
function ti(e, t) {
    return !t || t.firstChild === null || Ev(e)
}
function mo(e, t, n, r, i=!1) {
    for (; n !== null; ) {
        if (n.type === 128) {
            n = i ? n.projectionNext : n.next;
            continue
        }
        let o = t[n.index];
        o !== null && r.push(We(o)),
        Xe(o) && oy(o, r);
        let s = n.type;
        if (s & 8)
            mo(e, t, n.child, r);
        else if (s & 32) {
            let a = Xd(n, t), c;
            for (; c = a(); )
                r.push(c)
        } else if (s & 16) {
            let a = Jv(t, n);
            if (Array.isArray(a))
                r.push(...a);
            else {
                let c = tn(t[_e]);
                mo(c[D], c, a, r, !0)
            }
        }
        n = i ? n.projectionNext : n.next
    }
    return r
}
function oy(e, t) {
    for (let n = ne; n < e.length; n++) {
        let r = e[n]
          , i = r[D].firstChild;
        i !== null && mo(r[D], r, i, t)
    }
    e[on] !== e[Je] && t.push(e[on])
}
function sy(e) {
    if (e[qn] !== null) {
        for (let t of e[qn])
            t.impl.addSequence(t);
        e[qn].length = 0
    }
}
var ay = [];
function KC(e) {
    return e[Oe] ?? YC(e)
}
function YC(e) {
    let t = ay.pop() ?? Object.create(QC);
    return t.lView = e,
    t
}
function ZC(e) {
    e.lView[Oe] !== e && (e.lView = null,
    ay.push(e))
}
var QC = j(m({}, Rn), {
    consumerIsAlwaysLive: !0,
    kind: "template",
    consumerMarkedDirty: e => {
        an(e.lView)
    }
    ,
    consumerOnSignalRead() {
        this.lView[Oe] = this
    }
});
function JC(e) {
    let t = e[Oe] ?? Object.create(XC);
    return t.lView = e,
    t
}
var XC = j(m({}, Rn), {
    consumerIsAlwaysLive: !0,
    kind: "template",
    consumerMarkedDirty: e => {
        let t = tn(e.lView);
        for (; t && !cy(t[D]); )
            t = tn(t);
        t && Fl(t)
    }
    ,
    consumerOnSignalRead() {
        this.lView[Oe] = this
    }
});
function cy(e) {
    return e.type !== 2
}
function uy(e) {
    if (e[Rt] === null)
        return;
    let t = !0;
    for (; t; ) {
        let n = !1;
        for (let r of e[Rt])
            r.dirty && (n = !0,
            r.zone === null || Zone.current === r.zone ? r.run() : r.zone.run( () => r.run()));
        t = n && !!(e[b] & 8192)
    }
}
var eT = 100;
function ly(e, t=0) {
    let r = e[dt].rendererFactory
      , i = !1;
    i || r.begin?.();
    try {
        tT(e, t)
    } finally {
        i || r.end?.()
    }
}
function tT(e, t) {
    let n = Yl();
    try {
        Yr(!0),
        wd(e, t);
        let r = 0;
        for (; oo(e); ) {
            if (r === eT)
                throw new I(103,!1);
            r++,
            wd(e, 1)
        }
    } finally {
        Yr(n)
    }
}
function nT(e, t, n, r) {
    if (Zn(t))
        return;
    let i = t[b]
      , o = !1
      , s = !1;
    ma(t);
    let a = !0
      , c = null
      , u = null;
    o || (cy(e) ? (u = KC(t),
    c = Gt(u)) : bs() === null ? (a = !1,
    u = JC(t),
    c = Gt(u)) : t[Oe] && (qt(t[Oe]),
    t[Oe] = null));
    try {
        Ll(t),
        hm(e.bindingStartIndex),
        n !== null && ey(e, t, n, 2, r);
        let l = (i & 3) === 3;
        if (!o)
            if (l) {
                let h = e.preOrderCheckHooks;
                h !== null && ba(t, h, null)
            } else {
                let h = e.preOrderHooks;
                h !== null && Ca(t, h, 0, null),
                nd(t, 0)
            }
        if (s || rT(t),
        uy(t),
        dy(t, 0),
        e.contentQueries !== null && Rv(e, t),
        !o)
            if (l) {
                let h = e.contentCheckHooks;
                h !== null && ba(t, h)
            } else {
                let h = e.contentHooks;
                h !== null && Ca(t, h, 1),
                nd(t, 1)
            }
        oT(e, t);
        let d = e.components;
        d !== null && hy(t, d, 0);
        let f = e.viewQuery;
        if (f !== null && yd(2, f, r),
        !o)
            if (l) {
                let h = e.viewCheckHooks;
                h !== null && ba(t, h)
            } else {
                let h = e.viewHooks;
                h !== null && Ca(t, h, 2),
                nd(t, 2)
            }
        if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1),
        t[da]) {
            for (let h of t[da])
                h();
            t[da] = null
        }
        o || (sy(t),
        t[b] &= -73)
    } catch (l) {
        throw o || an(t),
        l
    } finally {
        u !== null && (On(u, c),
        a && ZC(u)),
        va()
    }
}
function dy(e, t) {
    for (let n = _v(e); n !== null; n = Dv(n))
        for (let r = ne; r < n.length; r++) {
            let i = n[r];
            fy(i, t)
        }
}
function rT(e) {
    for (let t = _v(e); t !== null; t = Dv(t)) {
        if (!(t[b] & 2))
            continue;
        let n = t[Yn];
        for (let r = 0; r < n.length; r++) {
            let i = n[r];
            Fl(i)
        }
    }
}
function iT(e, t, n) {
    H(18);
    let r = ze(t, e);
    fy(r, n),
    H(19, r[J])
}
function fy(e, t) {
    fa(e) && wd(e, t)
}
function wd(e, t) {
    let r = e[D]
      , i = e[b]
      , o = e[Oe]
      , s = !!(t === 0 && i & 16);
    if (s ||= !!(i & 64 && t === 0),
    s ||= !!(i & 1024),
    s ||= !!(o?.dirty && kn(o)),
    s ||= !1,
    o && (o.dirty = !1),
    e[b] &= -9217,
    s)
        nT(r, e, r.template, e[J]);
    else if (i & 8192) {
        let a = T(null);
        try {
            uy(e),
            dy(e, 1);
            let c = r.components;
            c !== null && hy(e, c, 1),
            sy(e)
        } finally {
            T(a)
        }
    }
}
function hy(e, t, n) {
    for (let r = 0; r < t.length; r++)
        iT(e, t[r], n)
}
function oT(e, t) {
    let n = e.hostBindingOpCodes;
    if (n !== null)
        try {
            for (let r = 0; r < n.length; r++) {
                let i = n[r];
                if (i < 0)
                    cn(~i);
                else {
                    let o = i
                      , s = n[++r]
                      , a = n[++r];
                    gm(s, o);
                    let c = t[o];
                    H(24, c),
                    a(2, c),
                    H(25, c)
                }
            }
        } finally {
            cn(-1)
        }
}
function df(e, t) {
    let n = Yl() ? 64 : 1088;
    for (e[dt].changeDetectionScheduler?.notify(t); e; ) {
        e[b] |= n;
        let r = tn(e);
        if (qr(e) && !r)
            return e;
        e = r
    }
    return null
}
function py(e, t, n, r) {
    return [e, !0, 0, t, null, r, null, n, null, null]
}
function gy(e, t) {
    let n = ne + t;
    if (n < e.length)
        return e[n]
}
function Do(e, t, n, r=!0) {
    let i = t[D];
    if (sT(i, t, e, n),
    r) {
        let s = Dd(n, e)
          , a = t[K]
          , c = a.parentNode(e[on]);
        c !== null && _C(i, e[Ie], a, t, c, s)
    }
    let o = t[Wn];
    o !== null && o.firstChild !== null && (o.firstChild = null)
}
function my(e, t) {
    let n = vo(e, t);
    return n !== void 0 && ec(n[D], n),
    n
}
function vo(e, t) {
    if (e.length <= ne)
        return;
    let n = ne + t
      , r = e[n];
    if (r) {
        let i = r[rn];
        i !== null && i !== e && of(i, r),
        t > 0 && (e[n - 1][$e] = r[$e]);
        let o = Xi(e, ne + t);
        IC(r[D], r);
        let s = o[ft];
        s !== null && s.detachView(o[D]),
        r[ce] = null,
        r[$e] = null,
        r[b] &= -129
    }
    return r
}
function sT(e, t, n, r) {
    let i = ne + r
      , o = n.length;
    r > 0 && (n[i - 1][$e] = t),
    r < o - ne ? (t[$e] = n[i],
    bl(n, ne + r, t)) : (n.push(t),
    t[$e] = null),
    t[ce] = n;
    let s = t[rn];
    s !== null && n !== s && vy(s, t);
    let a = t[ft];
    a !== null && a.insertView(e),
    ha(t),
    t[b] |= 128
}
function vy(e, t) {
    let n = e[Yn]
      , r = t[ce];
    if (ht(r))
        e[b] |= 2;
    else {
        let i = r[ce][_e];
        t[_e] !== i && (e[b] |= 2)
    }
    n === null ? e[Yn] = [t] : n.push(t)
}
var un = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() {
        let t = this._lView
          , n = t[D];
        return mo(n, t, n.firstChild, [])
    }
    constructor(t, n) {
        this._lView = t,
        this._cdRefInjectingView = n
    }
    get context() {
        return this._lView[J]
    }
    set context(t) {
        this._lView[J] = t
    }
    get destroyed() {
        return Zn(this._lView)
    }
    destroy() {
        if (this._appRef)
            this._appRef.detachView(this);
        else if (this._attachedToViewContainer) {
            let t = this._lView[ce];
            if (Xe(t)) {
                let n = t[no]
                  , r = n ? n.indexOf(this) : -1;
                r > -1 && (vo(t, r),
                Xi(n, r))
            }
            this._attachedToViewContainer = !1
        }
        ec(this._lView[D], this._lView)
    }
    onDestroy(t) {
        jl(this._lView, t)
    }
    markForCheck() {
        df(this._cdRefInjectingView || this._lView, 4)
    }
    detach() {
        this._lView[b] &= -129
    }
    reattach() {
        ha(this._lView),
        this._lView[b] |= 128
    }
    detectChanges() {
        this._lView[b] |= 1024,
        ly(this._lView)
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
        if (this._appRef)
            throw new I(902,!1);
        this._attachedToViewContainer = !0
    }
    detachFromAppRef() {
        this._appRef = null;
        let t = qr(this._lView)
          , n = this._lView[rn];
        n !== null && !t && of(n, this._lView),
        Yv(this._lView[D], this._lView)
    }
    attachToAppRef(t) {
        if (this._attachedToViewContainer)
            throw new I(902,!1);
        this._appRef = t;
        let n = qr(this._lView)
          , r = this._lView[rn];
        r !== null && !n && vy(r, this._lView),
        ha(this._lView)
    }
}
;
var ni = ( () => {
    class e {
        _declarationLView;
        _declarationTContainer;
        elementRef;
        static __NG_ELEMENT_ID__ = aT;
        constructor(n, r, i) {
            this._declarationLView = n,
            this._declarationTContainer = r,
            this.elementRef = i
        }
        get ssrId() {
            return this._declarationTContainer.tView?.ssrId || null
        }
        createEmbeddedView(n, r) {
            return this.createEmbeddedViewImpl(n, r)
        }
        createEmbeddedViewImpl(n, r, i) {
            let o = _o(this._declarationLView, this._declarationTContainer, n, {
                embeddedViewInjector: r,
                dehydratedView: i
            });
            return new un(o)
        }
    }
    return e
}
)();
function aT() {
    return rc(ve(), x())
}
function rc(e, t) {
    return e.type & 4 ? new ni(t,e,ai(e, t)) : null
}
function li(e, t, n, r, i) {
    let o = e.data[t];
    if (o === null)
        o = cT(e, t, n, r, i),
        pm() && (o.flags |= 32);
    else if (o.type & 64) {
        o.type = n,
        o.value = r,
        o.attrs = i;
        let s = dm();
        o.injectorIndex = s === null ? -1 : s.injectorIndex
    }
    return Kr(o, !0),
    o
}
function cT(e, t, n, r, i) {
    let o = Gl()
      , s = ql()
      , a = s ? o : o && o.parent
      , c = e.data[t] = lT(e, a, n, t, r, i);
    return uT(e, c, o, s),
    c
}
function uT(e, t, n, r) {
    e.firstChild === null && (e.firstChild = t),
    n !== null && (r ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t,
    t.prev = n))
}
function lT(e, t, n, r, i, o) {
    let s = t ? t.injectorIndex : -1
      , a = 0;
    return $l() && (a |= 128),
    {
        type: n,
        index: r,
        insertBeforeIndex: null,
        injectorIndex: s,
        directiveStart: -1,
        directiveEnd: -1,
        directiveStylingLast: -1,
        componentOffset: -1,
        propertyBindings: null,
        flags: a,
        providerIndexes: 0,
        value: i,
        attrs: o,
        mergedAttrs: null,
        localNames: null,
        initialInputs: null,
        inputs: null,
        hostDirectiveInputs: null,
        outputs: null,
        hostDirectiveOutputs: null,
        directiveToIndex: null,
        tView: null,
        next: null,
        prev: null,
        projectionNext: null,
        child: null,
        parent: t,
        projection: null,
        styles: null,
        stylesWithoutHost: null,
        residualStyles: void 0,
        classes: null,
        classesWithoutHost: null,
        residualClasses: void 0,
        classBindings: 0,
        styleBindings: 0
    }
}
var l$ = new RegExp(`^(\\d+)*(${Lb}|${Pb})*(.*)`);
function dT(e) {
    let t = e[kl] ?? []
      , r = e[ce][K]
      , i = [];
    for (let o of t)
        o.data[Tv] !== void 0 ? i.push(o) : fT(o, r);
    e[kl] = i
}
function fT(e, t) {
    let n = 0
      , r = e.firstChild;
    if (r) {
        let i = e.data[Cv];
        for (; n < i; ) {
            let o = r.nextSibling;
            Vv(t, r, !1),
            r = o,
            n++
        }
    }
}
var hT = () => null
  , pT = () => null;
function Pa(e, t) {
    return hT(e, t)
}
function yy(e, t, n) {
    return pT(e, t, n)
}
var Ey = class {
}
  , ic = class {
}
  , bd = class {
    resolveComponentFactory(t) {
        throw new I(917,!1)
    }
}
  , wo = class {
    static NULL = new bd
}
  , xt = class {
}
  , Iy = ( () => {
    class e {
        destroyNode = null;
        static __NG_ELEMENT_ID__ = () => gT()
    }
    return e
}
)();
function gT() {
    let e = x()
      , t = ve()
      , n = ze(t.index, e);
    return (ht(n) ? n : e)[K]
}
var _y = ( () => {
    class e {
        static \u0275prov = v({
            token: e,
            providedIn: "root",
            factory: () => null
        })
    }
    return e
}
)();
var Sa = {}
  , Cd = class {
    injector;
    parentInjector;
    constructor(t, n) {
        this.injector = t,
        this.parentInjector = n
    }
    get(t, n, r) {
        let i = this.injector.get(t, Sa, r);
        return i !== Sa || n === Sa ? i : this.parentInjector.get(t, n, r)
    }
}
;
function La(e, t, n) {
    let r = n ? e.styles : null
      , i = n ? e.classes : null
      , o = 0;
    if (t !== null)
        for (let s = 0; s < t.length; s++) {
            let a = t[s];
            if (typeof a == "number")
                o = a;
            else if (o == 1)
                i = ra(i, a);
            else if (o == 2) {
                let c = a
                  , u = t[++s];
                r = ra(r, c + ": " + u + ";")
            }
        }
    n ? e.styles = r : e.stylesWithoutHost = r,
    n ? e.classes = i : e.classesWithoutHost = i
}
function di(e, t=0) {
    let n = x();
    if (n === null)
        return R(e, t);
    let r = ve();
    return gv(r, n, ae(e), t)
}
function Dy(e, t, n, r, i) {
    let o = r === null ? null : {
        "": -1
    }
      , s = i(e, n);
    if (s !== null) {
        let a = s
          , c = null
          , u = null;
        for (let l of s)
            if (l.resolveHostDirectives !== null) {
                [a,c,u] = l.resolveHostDirectives(s);
                break
            }
        yT(e, t, n, a, o, c, u)
    }
    o !== null && r !== null && mT(n, r, o)
}
function mT(e, t, n) {
    let r = e.localNames = [];
    for (let i = 0; i < t.length; i += 2) {
        let o = n[t[i + 1]];
        if (o == null)
            throw new I(-301,!1);
        r.push(t[i], o)
    }
}
function vT(e, t, n) {
    t.componentOffset = n,
    (e.components ??= []).push(t.index)
}
function yT(e, t, n, r, i, o, s) {
    let a = r.length
      , c = !1;
    for (let f = 0; f < a; f++) {
        let h = r[f];
        !c && et(h) && (c = !0,
        vT(e, n, f)),
        pd(Ma(n, t), e, h.type)
    }
    bT(n, e.data.length, a);
    for (let f = 0; f < a; f++) {
        let h = r[f];
        h.providersResolver && h.providersResolver(h)
    }
    let u = !1
      , l = !1
      , d = $v(e, t, a, null);
    a > 0 && (n.directiveToIndex = new Map);
    for (let f = 0; f < a; f++) {
        let h = r[f];
        if (n.mergedAttrs = Jr(n.mergedAttrs, h.hostAttrs),
        IT(e, n, t, d, h),
        wT(d, h, i),
        s !== null && s.has(h)) {
            let[y,C] = s.get(h);
            n.directiveToIndex.set(h.type, [d, y + n.directiveStart, C + n.directiveStart])
        } else
            (o === null || !o.has(h)) && n.directiveToIndex.set(h.type, d);
        h.contentQueries !== null && (n.flags |= 4),
        (h.hostBindings !== null || h.hostAttrs !== null || h.hostVars !== 0) && (n.flags |= 64);
        let g = h.type.prototype;
        !u && (g.ngOnChanges || g.ngOnInit || g.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index),
        u = !0),
        !l && (g.ngOnChanges || g.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index),
        l = !0),
        d++
    }
    ET(e, n, o)
}
function ET(e, t, n) {
    for (let r = t.directiveStart; r < t.directiveEnd; r++) {
        let i = e.data[r];
        if (n === null || !n.has(i))
            Bm(0, t, i, r),
            Bm(1, t, i, r),
            $m(t, r, !1);
        else {
            let o = n.get(i);
            Hm(0, t, o, r),
            Hm(1, t, o, r),
            $m(t, r, !0)
        }
    }
}
function Bm(e, t, n, r) {
    let i = e === 0 ? n.inputs : n.outputs;
    for (let o in i)
        if (i.hasOwnProperty(o)) {
            let s;
            e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {},
            s[o] ??= [],
            s[o].push(r),
            wy(t, o)
        }
}
function Hm(e, t, n, r) {
    let i = e === 0 ? n.inputs : n.outputs;
    for (let o in i)
        if (i.hasOwnProperty(o)) {
            let s = i[o], a;
            e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {},
            a[s] ??= [],
            a[s].push(r, o),
            wy(t, s)
        }
}
function wy(e, t) {
    t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16)
}
function $m(e, t, n) {
    let {attrs: r, inputs: i, hostDirectiveInputs: o} = e;
    if (r === null || !n && i === null || n && o === null || Yd(e)) {
        e.initialInputs ??= [],
        e.initialInputs.push(null);
        return
    }
    let s = null
      , a = 0;
    for (; a < r.length; ) {
        let c = r[a];
        if (c === 0) {
            a += 4;
            continue
        } else if (c === 5) {
            a += 2;
            continue
        } else if (typeof c == "number")
            break;
        if (!n && i.hasOwnProperty(c)) {
            let u = i[c];
            for (let l of u)
                if (l === t) {
                    s ??= [],
                    s.push(c, r[a + 1]);
                    break
                }
        } else if (n && o.hasOwnProperty(c)) {
            let u = o[c];
            for (let l = 0; l < u.length; l += 2)
                if (u[l] === t) {
                    s ??= [],
                    s.push(u[l + 1], r[a + 1]);
                    break
                }
        }
        a += 2
    }
    e.initialInputs ??= [],
    e.initialInputs.push(s)
}
function IT(e, t, n, r, i) {
    e.data[r] = i;
    let o = i.factory || (i.factory = Vn(i.type, !0))
      , s = new nr(o,et(i),di,null);
    e.blueprint[r] = s,
    n[r] = s,
    _T(e, t, r, $v(e, n, i.hostVars, it), i)
}
function _T(e, t, n, r, i) {
    let o = i.hostBindings;
    if (o) {
        let s = e.hostBindingOpCodes;
        s === null && (s = e.hostBindingOpCodes = []);
        let a = ~t.index;
        DT(s) != a && s.push(a),
        s.push(n, r, o)
    }
}
function DT(e) {
    let t = e.length;
    for (; t > 0; ) {
        let n = e[--t];
        if (typeof n == "number" && n < 0)
            return n
    }
    return 0
}
function wT(e, t, n) {
    if (n) {
        if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++)
                n[t.exportAs[r]] = e;
        et(t) && (n[""] = e)
    }
}
function bT(e, t, n) {
    e.flags |= 1,
    e.directiveStart = t,
    e.directiveEnd = t + n,
    e.providerIndexes = t
}
function by(e, t, n, r, i, o, s, a) {
    let c = t[D]
      , u = c.consts
      , l = Ge(u, s)
      , d = li(c, e, n, r, l);
    return o && Dy(c, t, d, Ge(u, a), i),
    d.mergedAttrs = Jr(d.mergedAttrs, d.attrs),
    d.attrs !== null && La(d, d.attrs, !1),
    d.mergedAttrs !== null && La(d, d.mergedAttrs, !0),
    c.queries !== null && c.queries.elementStart(c, d),
    d
}
function Cy(e, t) {
    av(e, t),
    xl(t) && e.queries.elementEnd(t)
}
function CT(e, t, n, r, i, o) {
    let s = t.consts
      , a = Ge(s, i)
      , c = li(t, e, n, r, a);
    if (c.mergedAttrs = Jr(c.mergedAttrs, c.attrs),
    o != null) {
        let u = Ge(s, o);
        c.localNames = [];
        for (let l = 0; l < u.length; l += 2)
            c.localNames.push(u[l], -1)
    }
    return c.attrs !== null && La(c, c.attrs, !1),
    c.mergedAttrs !== null && La(c, c.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, c),
    c
}
function dn(e, t, n) {
    if (n === it)
        return !1;
    let r = e[t];
    return Object.is(r, n) ? !1 : (e[t] = n,
    !0)
}
function od(e, t, n) {
    return function r(i) {
        let o = sn(e) ? ze(e.index, t) : t;
        df(o, 5);
        let s = t[J]
          , a = Wm(t, s, n, i)
          , c = r.__ngNextListenerFn__;
        for (; c; )
            a = Wm(t, s, c, i) && a,
            c = c.__ngNextListenerFn__;
        return a
    }
}
function Wm(e, t, n, r) {
    let i = T(null);
    try {
        return H(6, t, n),
        n(r) !== !1
    } catch (o) {
        return WC(e, o),
        !1
    } finally {
        H(7, t, n),
        T(i)
    }
}
function TT(e, t, n, r, i, o, s, a) {
    let c = ro(e)
      , u = !1
      , l = null;
    if (!r && c && (l = AT(t, n, o, e.index)),
    l !== null) {
        let d = l.__ngLastListenerFn__ || l;
        d.__ngNextListenerFn__ = s,
        l.__ngLastListenerFn__ = s,
        u = !0
    } else {
        let d = tt(e, n)
          , f = r ? r(d) : d;
        jb(n, f, o, a);
        let h = i.listen(f, o, a);
        if (!ST(o)) {
            let g = r ? y => r(We(y[e.index])) : e.index;
            Ty(g, t, n, o, a, h, !1)
        }
    }
    return u
}
function ST(e) {
    return e.startsWith("animation") || e.startsWith("transition")
}
function AT(e, t, n, r) {
    let i = e.cleanup;
    if (i != null)
        for (let o = 0; o < i.length - 1; o += 2) {
            let s = i[o];
            if (s === n && i[o + 1] === r) {
                let a = t[zr]
                  , c = i[o + 2];
                return a && a.length > c ? a[c] : null
            }
            typeof s == "string" && (o += 2)
        }
    return null
}
function Ty(e, t, n, r, i, o, s) {
    let a = t.firstCreatePass ? Vl(t) : null
      , c = Ul(n)
      , u = c.length;
    c.push(i, o),
    a && a.push(r, e, u, (u + 1) * (s ? -1 : 1))
}
function zm(e, t, n, r, i, o) {
    let s = t[n]
      , a = t[D]
      , u = a.data[n].outputs[r]
      , d = s[u].subscribe(o);
    Ty(e.index, a, t, i, o, d, !0)
}
var Td = Symbol("BINDING");
var Fa = class extends wo {
    ngModule;
    constructor(t) {
        super(),
        this.ngModule = t
    }
    resolveComponentFactory(t) {
        let n = Nt(t);
        return new ir(n,this.ngModule)
    }
}
;
function NT(e) {
    return Object.keys(e).map(t => {
        let[n,r,i] = e[t]
          , o = {
            propName: n,
            templateName: t,
            isSignal: (r & Za.SignalBased) !== 0
        };
        return i && (o.transform = i),
        o
    }
    )
}
function RT(e) {
    return Object.keys(e).map(t => ({
        propName: e[t],
        templateName: t
    }))
}
function MT(e, t, n) {
    let r = t instanceof Q ? t : t?.injector;
    return r && e.getStandaloneInjector !== null && (r = e.getStandaloneInjector(r) || r),
    r ? new Cd(n,r) : n
}
function OT(e) {
    let t = e.get(xt, null);
    if (t === null)
        throw new I(407,!1);
    let n = e.get(_y, null)
      , r = e.get(Ne, null);
    return {
        rendererFactory: t,
        sanitizer: n,
        changeDetectionScheduler: r,
        ngReflect: !1
    }
}
function kT(e, t) {
    let n = Sy(e);
    return jv(t, n, n === "svg" ? Xg : n === "math" ? em : null)
}
function Sy(e) {
    return (e.selectors[0][0] || "div").toLowerCase()
}
var ir = class extends ic {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() {
        return this.cachedInputs ??= NT(this.componentDef.inputs),
        this.cachedInputs
    }
    get outputs() {
        return this.cachedOutputs ??= RT(this.componentDef.outputs),
        this.cachedOutputs
    }
    constructor(t, n) {
        super(),
        this.componentDef = t,
        this.ngModule = n,
        this.componentType = t.type,
        this.selector = Xb(t.selectors),
        this.ngContentSelectors = t.ngContentSelectors ?? [],
        this.isBoundToModule = !!n
    }
    create(t, n, r, i, o, s) {
        H(22);
        let a = T(null);
        try {
            let c = this.componentDef
              , u = xT(r, c, s, o)
              , l = MT(c, i || this.ngModule, t)
              , d = OT(l)
              , f = d.rendererFactory.createRenderer(null, c)
              , h = r ? OC(f, r, c.encapsulation, l) : kT(c, f)
              , g = s?.some(Gm) || o?.some(_ => typeof _ != "function" && _.bindings.some(Gm))
              , y = Qd(null, u, null, 512 | Hv(c), null, null, d, f, l, null, Nv(h, l, !0));
            y[X] = h,
            ma(y);
            let C = null;
            try {
                let _ = by(X, y, 2, "#host", () => u.directiveRegistry, !0, 0);
                Bv(f, h, _),
                Xr(h, y),
                cf(u, y, _),
                Mv(u, _, y),
                Cy(u, _),
                n !== void 0 && LT(_, this.ngContentSelectors, n),
                C = ze(_.index, y),
                y[J] = C[J],
                lf(u, y, null)
            } catch (_) {
                throw C !== null && md(C),
                md(y),
                _
            } finally {
                H(23),
                va()
            }
            return new ja(this.componentType,y,!!g)
        } finally {
            T(a)
        }
    }
}
;
function xT(e, t, n, r) {
    let i = e ? ["ng-version", "20.3.10"] : eC(t.selectors[0])
      , o = null
      , s = null
      , a = 0;
    if (n)
        for (let l of n)
            a += l[Td].requiredVars,
            l.create && (l.targetIdx = 0,
            (o ??= []).push(l)),
            l.update && (l.targetIdx = 0,
            (s ??= []).push(l));
    if (r)
        for (let l = 0; l < r.length; l++) {
            let d = r[l];
            if (typeof d != "function")
                for (let f of d.bindings) {
                    a += f[Td].requiredVars;
                    let h = l + 1;
                    f.create && (f.targetIdx = h,
                    (o ??= []).push(f)),
                    f.update && (f.targetIdx = h,
                    (s ??= []).push(f))
                }
        }
    let c = [t];
    if (r)
        for (let l of r) {
            let d = typeof l == "function" ? l : l.type
              , f = la(d);
            c.push(f)
        }
    return Zd(0, null, PT(o, s), 1, a, c, null, null, null, [i], null)
}
function PT(e, t) {
    return !e && !t ? null : n => {
        if (n & 1 && e)
            for (let r of e)
                r.create();
        if (n & 2 && t)
            for (let r of t)
                r.update()
    }
}
function Gm(e) {
    let t = e[Td].kind;
    return t === "input" || t === "twoWay"
}
var ja = class extends Ey {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, r) {
        super(),
        this._rootLView = n,
        this._hasInputBindings = r,
        this._tNode = io(n[D], X),
        this.location = ai(this._tNode, n),
        this.instance = ze(this._tNode.index, n)[J],
        this.hostView = this.changeDetectorRef = new un(n,void 0),
        this.componentType = t
    }
    setInput(t, n) {
        this._hasInputBindings;
        let r = this._tNode;
        if (this.previousInputValues ??= new Map,
        this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
            return;
        let i = this._rootLView
          , o = uf(r, i[D], i, t, n);
        this.previousInputValues.set(t, n);
        let s = ze(r.index, i);
        df(s, 1)
    }
    get injector() {
        return new tr(this._tNode,this._rootLView)
    }
    destroy() {
        this.hostView.destroy()
    }
    onDestroy(t) {
        this.hostView.onDestroy(t)
    }
}
;
function LT(e, t, n) {
    let r = e.projection = [];
    for (let i = 0; i < t.length; i++) {
        let o = n[i];
        r.push(o != null && o.length ? Array.from(o) : null)
    }
}
var fn = ( () => {
    class e {
        static __NG_ELEMENT_ID__ = FT
    }
    return e
}
)();
function FT() {
    let e = ve();
    return Ny(e, x())
}
var jT = fn
  , Ay = class extends jT {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, r) {
        super(),
        this._lContainer = t,
        this._hostTNode = n,
        this._hostLView = r
    }
    get element() {
        return ai(this._hostTNode, this._hostLView)
    }
    get injector() {
        return new tr(this._hostTNode,this._hostLView)
    }
    get parentInjector() {
        let t = Wd(this._hostTNode, this._hostLView);
        if (uv(t)) {
            let n = Ra(t, this._hostLView)
              , r = Na(t)
              , i = n[D].data[r + 8];
            return new tr(i,n)
        } else
            return new tr(null,this._hostLView)
    }
    clear() {
        for (; this.length > 0; )
            this.remove(this.length - 1)
    }
    get(t) {
        let n = qm(this._lContainer);
        return n !== null && n[t] || null
    }
    get length() {
        return this._lContainer.length - ne
    }
    createEmbeddedView(t, n, r) {
        let i, o;
        typeof r == "number" ? i = r : r != null && (i = r.index,
        o = r.injector);
        let s = Pa(this._lContainer, t.ssrId)
          , a = t.createEmbeddedViewImpl(n || {}, o, s);
        return this.insertImpl(a, i, ti(this._hostTNode, s)),
        a
    }
    createComponent(t, n, r, i, o, s, a) {
        let c = t && !lb(t), u;
        if (c)
            u = n;
        else {
            let C = n || {};
            u = C.index,
            r = C.injector,
            i = C.projectableNodes,
            o = C.environmentInjector || C.ngModuleRef,
            s = C.directives,
            a = C.bindings
        }
        let l = c ? t : new ir(Nt(t))
          , d = r || this.parentInjector;
        if (!o && l.ngModule == null) {
            let _ = (c ? d : this.parentInjector).get(Q, null);
            _ && (o = _)
        }
        let f = Nt(l.componentType ?? {})
          , h = Pa(this._lContainer, f?.id ?? null)
          , g = h?.firstChild ?? null
          , y = l.create(d, i, g, o, s, a);
        return this.insertImpl(y.hostView, u, ti(this._hostTNode, h)),
        y
    }
    insert(t, n) {
        return this.insertImpl(t, n, !0)
    }
    insertImpl(t, n, r) {
        let i = t._lView;
        if (rm(i)) {
            let a = this.indexOf(t);
            if (a !== -1)
                this.detach(a);
            else {
                let c = i[ce]
                  , u = new Ay(c,c[Ie],c[ce]);
                u.detach(u.indexOf(t))
            }
        }
        let o = this._adjustIndex(n)
          , s = this._lContainer;
        return Do(s, i, o, r),
        t.attachToViewContainerRef(),
        bl(sd(s), o, t),
        t
    }
    move(t, n) {
        return this.insert(t, n)
    }
    indexOf(t) {
        let n = qm(this._lContainer);
        return n !== null ? n.indexOf(t) : -1
    }
    remove(t) {
        let n = this._adjustIndex(t, -1)
          , r = vo(this._lContainer, n);
        r && (Xi(sd(this._lContainer), n),
        ec(r[D], r))
    }
    detach(t) {
        let n = this._adjustIndex(t, -1)
          , r = vo(this._lContainer, n);
        return r && Xi(sd(this._lContainer), n) != null ? new un(r) : null
    }
    _adjustIndex(t, n=0) {
        return t ?? this.length + n
    }
}
;
function qm(e) {
    return e[no]
}
function sd(e) {
    return e[no] || (e[no] = [])
}
function Ny(e, t) {
    let n, r = t[e.index];
    return Xe(r) ? n = r : (n = py(r, t, null, e),
    t[e.index] = n,
    Jd(t, n)),
    VT(n, t, e, r),
    new Ay(n,e,t)
}
function UT(e, t) {
    let n = e[K]
      , r = n.createComment("")
      , i = tt(t, e)
      , o = n.parentNode(i);
    return ka(n, o, r, n.nextSibling(i), !1),
    r
}
var VT = $T
  , BT = () => !1;
function HT(e, t, n) {
    return BT(e, t, n)
}
function $T(e, t, n, r) {
    if (e[on])
        return;
    let i;
    n.type & 8 ? i = We(r) : i = UT(t, n),
    e[on] = i
}
var Sd = class e {
    queryList;
    matches = null;
    constructor(t) {
        this.queryList = t
    }
    clone() {
        return new e(this.queryList)
    }
    setDirty() {
        this.queryList.setDirty()
    }
}
  , Ad = class e {
    queries;
    constructor(t=[]) {
        this.queries = t
    }
    createEmbeddedView(t) {
        let n = t.queries;
        if (n !== null) {
            let r = t.contentQueries !== null ? t.contentQueries[0] : n.length
              , i = [];
            for (let o = 0; o < r; o++) {
                let s = n.getByIndex(o)
                  , a = this.queries[s.indexInDeclarationView];
                i.push(a.clone())
            }
            return new e(i)
        }
        return null
    }
    insertView(t) {
        this.dirtyQueriesWithMatches(t)
    }
    detachView(t) {
        this.dirtyQueriesWithMatches(t)
    }
    finishViewCreation(t) {
        this.dirtyQueriesWithMatches(t)
    }
    dirtyQueriesWithMatches(t) {
        for (let n = 0; n < this.queries.length; n++)
            hf(t, n).matches !== null && this.queries[n].setDirty()
    }
}
  , Ua = class {
    flags;
    read;
    predicate;
    constructor(t, n, r=null) {
        this.flags = n,
        this.read = r,
        typeof t == "string" ? this.predicate = KT(t) : this.predicate = t
    }
}
  , Nd = class e {
    queries;
    constructor(t=[]) {
        this.queries = t
    }
    elementStart(t, n) {
        for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n)
    }
    elementEnd(t) {
        for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t)
    }
    embeddedTView(t) {
        let n = null;
        for (let r = 0; r < this.length; r++) {
            let i = n !== null ? n.length : 0
              , o = this.getByIndex(r).embeddedTView(t, i);
            o && (o.indexInDeclarationView = r,
            n !== null ? n.push(o) : n = [o])
        }
        return n !== null ? new e(n) : null
    }
    template(t, n) {
        for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n)
    }
    getByIndex(t) {
        return this.queries[t]
    }
    get length() {
        return this.queries.length
    }
    track(t) {
        this.queries.push(t)
    }
}
  , Rd = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n=-1) {
        this.metadata = t,
        this._declarationNodeIndex = n
    }
    elementStart(t, n) {
        this.isApplyingToNode(n) && this.matchTNode(t, n)
    }
    elementEnd(t) {
        this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
    }
    template(t, n) {
        this.elementStart(t, n)
    }
    embeddedTView(t, n) {
        return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0,
        this.addMatch(-t.index, n),
        new e(this.metadata)) : null
    }
    isApplyingToNode(t) {
        if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
            let n = this._declarationNodeIndex
              , r = t.parent;
            for (; r !== null && r.type & 8 && r.index !== n; )
                r = r.parent;
            return n === (r !== null ? r.index : -1)
        }
        return this._appliesToNextNode
    }
    matchTNode(t, n) {
        let r = this.metadata.predicate;
        if (Array.isArray(r))
            for (let i = 0; i < r.length; i++) {
                let o = r[i];
                this.matchTNodeWithReadOption(t, n, WT(n, o)),
                this.matchTNodeWithReadOption(t, n, Ta(n, t, o, !1, !1))
            }
        else
            r === ni ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Ta(n, t, r, !1, !1))
    }
    matchTNodeWithReadOption(t, n, r) {
        if (r !== null) {
            let i = this.metadata.read;
            if (i !== null)
                if (i === mt || i === fn || i === ni && n.type & 4)
                    this.addMatch(n.index, -2);
                else {
                    let o = Ta(n, t, i, !1, !1);
                    o !== null && this.addMatch(n.index, o)
                }
            else
                this.addMatch(n.index, r)
        }
    }
    addMatch(t, n) {
        this.matches === null ? this.matches = [t, n] : this.matches.push(t, n)
    }
}
;
function WT(e, t) {
    let n = e.localNames;
    if (n !== null) {
        for (let r = 0; r < n.length; r += 2)
            if (n[r] === t)
                return n[r + 1]
    }
    return null
}
function zT(e, t) {
    return e.type & 11 ? ai(e, t) : e.type & 4 ? rc(e, t) : null
}
function GT(e, t, n, r) {
    return n === -1 ? zT(t, e) : n === -2 ? qT(e, t, r) : ho(e, e[D], n, t)
}
function qT(e, t, n) {
    if (n === mt)
        return ai(t, e);
    if (n === ni)
        return rc(t, e);
    if (n === fn)
        return Ny(t, e)
}
function Ry(e, t, n, r) {
    let i = t[ft].queries[r];
    if (i.matches === null) {
        let o = e.data
          , s = n.matches
          , a = [];
        for (let c = 0; s !== null && c < s.length; c += 2) {
            let u = s[c];
            if (u < 0)
                a.push(null);
            else {
                let l = o[u];
                a.push(GT(t, l, s[c + 1], n.metadata.read))
            }
        }
        i.matches = a
    }
    return i.matches
}
function Md(e, t, n, r) {
    let i = e.queries.getByIndex(n)
      , o = i.matches;
    if (o !== null) {
        let s = Ry(e, t, i, n);
        for (let a = 0; a < o.length; a += 2) {
            let c = o[a];
            if (c > 0)
                r.push(s[a / 2]);
            else {
                let u = o[a + 1]
                  , l = t[-c];
                for (let d = ne; d < l.length; d++) {
                    let f = l[d];
                    f[rn] === f[ce] && Md(f[D], f, u, r)
                }
                if (l[Yn] !== null) {
                    let d = l[Yn];
                    for (let f = 0; f < d.length; f++) {
                        let h = d[f];
                        Md(h[D], h, u, r)
                    }
                }
            }
        }
    }
    return r
}
function ff(e, t) {
    return e[ft].queries[t].queryList
}
function My(e, t, n) {
    let r = new rr((n & 4) === 4);
    return sm(e, t, r, r.destroy),
    (t[ft] ??= new Ad).queries.push(new Sd(r)) - 1
}
function Oy(e, t, n) {
    let r = re();
    return r.firstCreatePass && (xy(r, new Ua(e,t,n), -1),
    (t & 2) === 2 && (r.staticViewQueries = !0)),
    My(r, x(), t)
}
function ky(e, t, n, r) {
    let i = re();
    if (i.firstCreatePass) {
        let o = ve();
        xy(i, new Ua(t,n,r), o.index),
        YT(i, e),
        (n & 2) === 2 && (i.staticContentQueries = !0)
    }
    return My(i, x(), n)
}
function KT(e) {
    return e.split(",").map(t => t.trim())
}
function xy(e, t, n) {
    e.queries === null && (e.queries = new Nd),
    e.queries.track(new Rd(t,n))
}
function YT(e, t) {
    let n = e.contentQueries || (e.contentQueries = [])
      , r = n.length ? n[n.length - 1] : -1;
    t !== r && n.push(e.queries.length - 1, t)
}
function hf(e, t) {
    return e.queries.getByIndex(t)
}
function Py(e, t) {
    let n = e[D]
      , r = hf(n, t);
    return r.crossesNgTemplate ? Md(n, e, t, []) : Ry(n, e, r, t)
}
function Ly(e, t, n) {
    let r, i = Li( () => {
        r._dirtyCounter();
        let o = ZT(r, e);
        if (t && o === void 0)
            throw new I(-951,!1);
        return o
    }
    );
    return r = i[ie],
    r._dirtyCounter = xe(0),
    r._flatValue = void 0,
    i
}
function pf(e) {
    return Ly(!0, !1, e)
}
function gf(e) {
    return Ly(!0, !0, e)
}
function Fy(e, t) {
    let n = e[ie];
    n._lView = x(),
    n._queryIndex = t,
    n._queryList = ff(n._lView, t),
    n._queryList.onDirty( () => n._dirtyCounter.update(r => r + 1))
}
function ZT(e, t) {
    let n = e._lView
      , r = e._queryIndex;
    if (n === void 0 || r === void 0 || n[b] & 4)
        return t ? void 0 : me;
    let i = ff(n, r)
      , o = Py(n, r);
    return i.reset(o, yv),
    t ? i.first : i._changesDetected || e._flatValue === void 0 ? e._flatValue = i.toArray() : e._flatValue
}
var ri = class {
}
  , oc = class {
}
;
var Va = class extends ri {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new Fa(this);
    constructor(t, n, r, i=!0) {
        super(),
        this.ngModuleType = t,
        this._parent = n;
        let o = Sl(t);
        this._bootstrapComponents = Pv(o.bootstrap),
        this._r3Injector = Xl(t, n, [{
            provide: ri,
            useValue: this
        }, {
            provide: wo,
            useValue: this.componentFactoryResolver
        }, ...r], St(t), new Set(["environment"])),
        i && this.resolveInjectorInitializers()
    }
    resolveInjectorInitializers() {
        this._r3Injector.resolveInjectorInitializers(),
        this.instance = this._r3Injector.get(this.ngModuleType)
    }
    get injector() {
        return this._r3Injector
    }
    destroy() {
        let t = this._r3Injector;
        !t.destroyed && t.destroy(),
        this.destroyCbs.forEach(n => n()),
        this.destroyCbs = null
    }
    onDestroy(t) {
        this.destroyCbs.push(t)
    }
}
  , Ba = class extends oc {
    moduleType;
    constructor(t) {
        super(),
        this.moduleType = t
    }
    create(t) {
        return new Va(this.moduleType,t,[])
    }
}
;
var yo = class extends ri {
    injector;
    componentFactoryResolver = new Fa(this);
    instance = null;
    constructor(t) {
        super();
        let n = new Hn([...t.providers, {
            provide: ri,
            useValue: this
        }, {
            provide: wo,
            useValue: this.componentFactoryResolver
        }],t.parent || Wr(),t.debugName,new Set(["environment"]));
        this.injector = n,
        t.runEnvironmentInitializers && n.resolveInjectorInitializers()
    }
    destroy() {
        this.injector.destroy()
    }
    onDestroy(t) {
        this.injector.onDestroy(t)
    }
}
;
function bo(e, t, n=null) {
    return new yo({
        providers: e,
        parent: t,
        debugName: n,
        runEnvironmentInitializers: !0
    }).injector
}
var QT = ( () => {
    class e {
        _injector;
        cachedInjectors = new Map;
        constructor(n) {
            this._injector = n
        }
        getOrCreateStandaloneInjector(n) {
            if (!n.standalone)
                return null;
            if (!this.cachedInjectors.has(n)) {
                let r = Al(!1, n.type)
                  , i = r.length > 0 ? bo([r], this._injector, `Standalone[${n.type.name}]`) : null;
                this.cachedInjectors.set(n, i)
            }
            return this.cachedInjectors.get(n)
        }
        ngOnDestroy() {
            try {
                for (let n of this.cachedInjectors.values())
                    n !== null && n.destroy()
            } finally {
                this.cachedInjectors.clear()
            }
        }
        static \u0275prov = v({
            token: e,
            providedIn: "environment",
            factory: () => new e(R(Q))
        })
    }
    return e
}
)();
function Co(e) {
    return oi( () => {
        let t = jy(e)
          , n = j(m({}, t), {
            decls: e.decls,
            vars: e.vars,
            template: e.template,
            consts: e.consts || null,
            ngContentSelectors: e.ngContentSelectors,
            onPush: e.changeDetection === zd.OnPush,
            directiveDefs: null,
            pipeDefs: null,
            dependencies: t.standalone && e.dependencies || null,
            getStandaloneInjector: t.standalone ? i => i.get(QT).getOrCreateStandaloneInjector(n) : null,
            getExternalStyles: null,
            signals: e.signals ?? !1,
            data: e.data || {},
            encapsulation: e.encapsulation || Ot.Emulated,
            styles: e.styles || me,
            _: null,
            schemas: e.schemas || null,
            tView: null,
            id: ""
        });
        t.standalone && Pt("NgStandalone"),
        Uy(n);
        let r = e.dependencies;
        return n.directiveDefs = Km(r, JT),
        n.pipeDefs = Km(r, zg),
        n.id = tS(n),
        n
    }
    )
}
function JT(e) {
    return Nt(e) || la(e)
}
function Ke(e) {
    return oi( () => ({
        type: e.type,
        bootstrap: e.bootstrap || me,
        declarations: e.declarations || me,
        imports: e.imports || me,
        exports: e.exports || me,
        transitiveCompileScopes: null,
        schemas: e.schemas || null,
        id: e.id || null
    }))
}
function XT(e, t) {
    if (e == null)
        return Qe;
    let n = {};
    for (let r in e)
        if (e.hasOwnProperty(r)) {
            let i = e[r], o, s, a, c;
            Array.isArray(i) ? (a = i[0],
            o = i[1],
            s = i[2] ?? o,
            c = i[3] || null) : (o = i,
            s = i,
            a = Za.None,
            c = null),
            n[o] = [r, a, c],
            t[o] = s
        }
    return n
}
function eS(e) {
    if (e == null)
        return Qe;
    let t = {};
    for (let n in e)
        e.hasOwnProperty(n) && (t[e[n]] = n);
    return t
}
function Lt(e) {
    return oi( () => {
        let t = jy(e);
        return Uy(t),
        t
    }
    )
}
function jy(e) {
    let t = {};
    return {
        type: e.type,
        providersResolver: null,
        factory: null,
        hostBindings: e.hostBindings || null,
        hostVars: e.hostVars || 0,
        hostAttrs: e.hostAttrs || null,
        contentQueries: e.contentQueries || null,
        declaredInputs: t,
        inputConfig: e.inputs || Qe,
        exportAs: e.exportAs || null,
        standalone: e.standalone ?? !0,
        signals: e.signals === !0,
        selectors: e.selectors || me,
        viewQuery: e.viewQuery || null,
        features: e.features || null,
        setInput: null,
        resolveHostDirectives: null,
        hostDirectives: null,
        inputs: XT(e.inputs, t),
        outputs: eS(e.outputs),
        debugInfo: null
    }
}
function Uy(e) {
    e.features?.forEach(t => t(e))
}
function Km(e, t) {
    return e ? () => {
        let n = typeof e == "function" ? e() : e
          , r = [];
        for (let i of n) {
            let o = t(i);
            o !== null && r.push(o)
        }
        return r
    }
    : null
}
function tS(e) {
    let t = 0
      , n = typeof e.consts == "function" ? "" : e.consts
      , r = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery];
    for (let o of r.join("|"))
        t = Math.imul(31, t) + o.charCodeAt(0) << 0;
    return t += 2147483648,
    "c" + t
}
function nS(e) {
    return Object.getPrototypeOf(e.prototype).constructor
}
function Vy(e) {
    let t = nS(e.type)
      , n = !0
      , r = [e];
    for (; t; ) {
        let i;
        if (et(e))
            i = t.\u0275cmp || t.\u0275dir;
        else {
            if (t.\u0275cmp)
                throw new I(903,!1);
            i = t.\u0275dir
        }
        if (i) {
            if (n) {
                r.push(i);
                let s = e;
                s.inputs = ad(e.inputs),
                s.declaredInputs = ad(e.declaredInputs),
                s.outputs = ad(e.outputs);
                let a = i.hostBindings;
                a && aS(e, a);
                let c = i.viewQuery
                  , u = i.contentQueries;
                if (c && oS(e, c),
                u && sS(e, u),
                rS(e, i),
                Pg(e.outputs, i.outputs),
                et(i) && i.data.animation) {
                    let l = e.data;
                    l.animation = (l.animation || []).concat(i.data.animation)
                }
            }
            let o = i.features;
            if (o)
                for (let s = 0; s < o.length; s++) {
                    let a = o[s];
                    a && a.ngInherit && a(e),
                    a === Vy && (n = !1)
                }
        }
        t = Object.getPrototypeOf(t)
    }
    iS(r)
}
function rS(e, t) {
    for (let n in t.inputs) {
        if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
            continue;
        let r = t.inputs[n];
        r !== void 0 && (e.inputs[n] = r,
        e.declaredInputs[n] = t.declaredInputs[n])
    }
}
function iS(e) {
    let t = 0
      , n = null;
    for (let r = e.length - 1; r >= 0; r--) {
        let i = e[r];
        i.hostVars = t += i.hostVars,
        i.hostAttrs = Jr(i.hostAttrs, n = Jr(n, i.hostAttrs))
    }
}
function ad(e) {
    return e === Qe ? {} : e === me ? [] : e
}
function oS(e, t) {
    let n = e.viewQuery;
    n ? e.viewQuery = (r, i) => {
        t(r, i),
        n(r, i)
    }
    : e.viewQuery = t
}
function sS(e, t) {
    let n = e.contentQueries;
    n ? e.contentQueries = (r, i, o) => {
        t(r, i, o),
        n(r, i, o)
    }
    : e.contentQueries = t
}
function aS(e, t) {
    let n = e.hostBindings;
    n ? e.hostBindings = (r, i) => {
        t(r, i),
        n(r, i)
    }
    : e.hostBindings = t
}
function cS(e) {
    let t = n => {
        let r = Array.isArray(e);
        n.hostDirectives === null ? (n.resolveHostDirectives = uS,
        n.hostDirectives = r ? e.map(Od) : [e]) : r ? n.hostDirectives.unshift(...e.map(Od)) : n.hostDirectives.unshift(e)
    }
    ;
    return t.ngInherit = !0,
    t
}
function uS(e) {
    let t = []
      , n = !1
      , r = null
      , i = null;
    for (let o = 0; o < e.length; o++) {
        let s = e[o];
        if (s.hostDirectives !== null) {
            let a = t.length;
            r ??= new Map,
            i ??= new Map,
            By(s, t, r),
            i.set(s, [a, t.length - 1])
        }
        o === 0 && et(s) && (n = !0,
        t.push(s))
    }
    for (let o = n ? 1 : 0; o < e.length; o++)
        t.push(e[o]);
    return [t, r, i]
}
function By(e, t, n) {
    if (e.hostDirectives !== null)
        for (let r of e.hostDirectives)
            if (typeof r == "function") {
                let i = r();
                for (let o of i)
                    Ym(Od(o), t, n)
            } else
                Ym(r, t, n)
}
function Ym(e, t, n) {
    let r = la(e.directive);
    lS(r.declaredInputs, e.inputs),
    By(r, t, n),
    n.set(r, e),
    t.push(r)
}
function Od(e) {
    return typeof e == "function" ? {
        directive: ae(e),
        inputs: Qe,
        outputs: Qe
    } : {
        directive: ae(e.directive),
        inputs: Zm(e.inputs),
        outputs: Zm(e.outputs)
    }
}
function Zm(e) {
    if (e === void 0 || e.length === 0)
        return Qe;
    let t = {};
    for (let n = 0; n < e.length; n += 2)
        t[e[n]] = e[n + 1];
    return t
}
function lS(e, t) {
    for (let n in t)
        if (t.hasOwnProperty(n)) {
            let r = t[n]
              , i = e[n];
            e[r] = i
        }
}
function Hy(e, t, n, r, i, o, s, a) {
    if (n.firstCreatePass) {
        e.mergedAttrs = Jr(e.mergedAttrs, e.attrs);
        let l = e.tView = Zd(2, e, i, o, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
        n.queries !== null && (n.queries.template(n, e),
        l.queries = n.queries.embeddedTView(e))
    }
    a && (e.flags |= a),
    Kr(e, !1);
    let c = fS(n, t, e, r);
    Ea() && sf(n, t, c, e),
    Xr(c, t);
    let u = py(c, t, c, e);
    t[r + X] = u,
    Jd(t, u),
    HT(u, e, t)
}
function dS(e, t, n, r, i, o, s, a, c, u, l) {
    let d = n + X, f;
    return t.firstCreatePass ? (f = li(t, d, 4, s || null, a || null),
    Hl() && Dy(t, e, f, Ge(t.consts, u), ny),
    av(t, f)) : f = t.data[d],
    Hy(f, e, t, n, r, i, o, c),
    ro(f) && cf(t, e, f),
    u != null && nc(e, f, l),
    f
}
function Eo(e, t, n, r, i, o, s, a, c, u, l) {
    let d = n + X, f;
    if (t.firstCreatePass) {
        if (f = li(t, d, 4, s || null, a || null),
        u != null) {
            let h = Ge(t.consts, u);
            f.localNames = [];
            for (let g = 0; g < h.length; g += 2)
                f.localNames.push(h[g], -1)
        }
    } else
        f = t.data[d];
    return Hy(f, e, t, n, r, i, o, c),
    u != null && nc(e, f, l),
    f
}
function $y(e, t, n, r, i, o, s, a) {
    let c = x()
      , u = re()
      , l = Ge(u.consts, o);
    return dS(c, u, e, t, n, r, i, l, void 0, s, a),
    $y
}
var fS = hS;
function hS(e, t, n, r) {
    return Ia(!0),
    t[K].createComment("")
}
var mf = ( () => {
    class e {
        log(n) {
            console.log(n)
        }
        warn(n) {
            console.warn(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "platform"
        })
    }
    return e
}
)();
var vf = new E("");
function To(e) {
    return !!e && typeof e.then == "function"
}
function Wy(e) {
    return !!e && typeof e.subscribe == "function"
}
var zy = new E("");
var yf = ( () => {
    class e {
        resolve;
        reject;
        initialized = !1;
        done = !1;
        donePromise = new Promise( (n, r) => {
            this.resolve = n,
            this.reject = r
        }
        );
        appInits = p(zy, {
            optional: !0
        }) ?? [];
        injector = p(z);
        constructor() {}
        runInitializers() {
            if (this.initialized)
                return;
            let n = [];
            for (let i of this.appInits) {
                let o = ue(this.injector, i);
                if (To(o))
                    n.push(o);
                else if (Wy(o)) {
                    let s = new Promise( (a, c) => {
                        o.subscribe({
                            complete: a,
                            error: c
                        })
                    }
                    );
                    n.push(s)
                }
            }
            let r = () => {
                this.done = !0,
                this.resolve()
            }
            ;
            Promise.all(n).then( () => {
                r()
            }
            ).catch(i => {
                this.reject(i)
            }
            ),
            n.length === 0 && r(),
            this.initialized = !0
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , sc = new E("");
function Gy() {
    Lu( () => {
        let e = "";
        throw new I(600,e)
    }
    )
}
function qy(e) {
    return e.isBoundToModule
}
var pS = 10;
var Ft = ( () => {
    class e {
        _runningTick = !1;
        _destroyed = !1;
        _destroyListeners = [];
        _views = [];
        internalErrorHandler = p(ke);
        afterRenderManager = p(Ja);
        zonelessEnabled = p(co);
        rootEffectScheduler = p(uo);
        dirtyFlags = 0;
        tracingSnapshot = null;
        allTestViews = new Set;
        autoDetectTestViews = new Set;
        includeAllTestViews = !1;
        afterTick = new U;
        get allViews() {
            return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]
        }
        get destroyed() {
            return this._destroyed
        }
        componentTypes = [];
        components = [];
        internalPendingTask = p(pt);
        get isStable() {
            return this.internalPendingTask.hasPendingTasksObservable.pipe(P(n => !n))
        }
        constructor() {
            p(ln, {
                optional: !0
            })
        }
        whenStable() {
            let n;
            return new Promise(r => {
                n = this.isStable.subscribe({
                    next: i => {
                        i && r()
                    }
                })
            }
            ).finally( () => {
                n.unsubscribe()
            }
            )
        }
        _injector = p(Q);
        _rendererFactory = null;
        get injector() {
            return this._injector
        }
        bootstrap(n, r) {
            return this.bootstrapImpl(n, r)
        }
        bootstrapImpl(n, r, i=z.NULL) {
            return this._injector.get(F).run( () => {
                H(10);
                let s = n instanceof ic;
                if (!this._injector.get(yf).done) {
                    let g = "";
                    throw new I(405,g)
                }
                let c;
                s ? c = n : c = this._injector.get(wo).resolveComponentFactory(n),
                this.componentTypes.push(c.componentType);
                let u = qy(c) ? void 0 : this._injector.get(ri)
                  , l = r || c.selector
                  , d = c.create(i, [], l, u)
                  , f = d.location.nativeElement
                  , h = d.injector.get(vf, null);
                return h?.registerApplication(f),
                d.onDestroy( () => {
                    this.detachView(d.hostView),
                    fo(this.components, d),
                    h?.unregisterApplication(f)
                }
                ),
                this._loadComponent(d),
                H(11, d),
                d
            }
            )
        }
        tick() {
            this.zonelessEnabled || (this.dirtyFlags |= 1),
            this._tick()
        }
        _tick() {
            H(12),
            this.tracingSnapshot !== null ? this.tracingSnapshot.run(Qa.CHANGE_DETECTION, this.tickImpl) : this.tickImpl()
        }
        tickImpl = () => {
            if (this._runningTick)
                throw new I(101,!1);
            let n = T(null);
            try {
                this._runningTick = !0,
                this.synchronize()
            } finally {
                this._runningTick = !1,
                this.tracingSnapshot?.dispose(),
                this.tracingSnapshot = null,
                T(n),
                this.afterTick.next(),
                H(13)
            }
        }
        ;
        synchronize() {
            this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(xt, null, {
                optional: !0
            }));
            let n = 0;
            for (; this.dirtyFlags !== 0 && n++ < pS; )
                H(14),
                this.synchronizeOnce(),
                H(15)
        }
        synchronizeOnce() {
            this.dirtyFlags & 16 && (this.dirtyFlags &= -17,
            this.rootEffectScheduler.flush());
            let n = !1;
            if (this.dirtyFlags & 7) {
                let r = !!(this.dirtyFlags & 1);
                this.dirtyFlags &= -8,
                this.dirtyFlags |= 8;
                for (let {_lView: i} of this.allViews) {
                    if (!r && !oo(i))
                        continue;
                    let o = r && !this.zonelessEnabled ? 0 : 1;
                    ly(i, o),
                    n = !0
                }
                if (this.dirtyFlags &= -5,
                this.syncDirtyFlagsWithViews(),
                this.dirtyFlags & 23)
                    return
            }
            n || (this._rendererFactory?.begin?.(),
            this._rendererFactory?.end?.()),
            this.dirtyFlags & 8 && (this.dirtyFlags &= -9,
            this.afterRenderManager.execute()),
            this.syncDirtyFlagsWithViews()
        }
        syncDirtyFlagsWithViews() {
            if (this.allViews.some( ({_lView: n}) => oo(n))) {
                this.dirtyFlags |= 2;
                return
            } else
                this.dirtyFlags &= -8
        }
        attachView(n) {
            let r = n;
            this._views.push(r),
            r.attachToAppRef(this)
        }
        detachView(n) {
            let r = n;
            fo(this._views, r),
            r.detachFromAppRef()
        }
        _loadComponent(n) {
            this.attachView(n.hostView);
            try {
                this.tick()
            } catch (i) {
                this.internalErrorHandler(i)
            }
            this.components.push(n),
            this._injector.get(sc, []).forEach(i => i(n))
        }
        ngOnDestroy() {
            if (!this._destroyed)
                try {
                    this._destroyListeners.forEach(n => n()),
                    this._views.slice().forEach(n => n.destroy())
                } finally {
                    this._destroyed = !0,
                    this._views = [],
                    this._destroyListeners = []
                }
        }
        onDestroy(n) {
            return this._destroyListeners.push(n),
            () => fo(this._destroyListeners, n)
        }
        destroy() {
            if (this._destroyed)
                throw new I(406,!1);
            let n = this._injector;
            n.destroy && !n.destroyed && n.destroy()
        }
        get viewCount() {
            return this._views.length
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function fo(e, t) {
    let n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
function Ef(e, t, n, r) {
    let i = x()
      , o = Qn();
    if (dn(i, o, t)) {
        let s = re()
          , a = ya();
        BC(a, i, e, t, n, r)
    }
    return Ef
}
var v$ = typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
var kd = class {
    destroy(t) {}
    updateValue(t, n) {}
    swap(t, n) {
        let r = Math.min(t, n)
          , i = Math.max(t, n)
          , o = this.detach(i);
        if (i - r > 1) {
            let s = this.detach(r);
            this.attach(r, o),
            this.attach(i, s)
        } else
            this.attach(r, o)
    }
    move(t, n) {
        this.attach(n, this.detach(t, !0))
    }
}
;
function cd(e, t, n, r, i) {
    return e === n && Object.is(t, r) ? 1 : Object.is(i(e, t), i(n, r)) ? -1 : 0
}
function gS(e, t, n) {
    let r, i, o = 0, s = e.length - 1, a = void 0;
    if (Array.isArray(t)) {
        let c = t.length - 1;
        for (; o <= s && o <= c; ) {
            let u = e.at(o)
              , l = t[o]
              , d = cd(o, u, o, l, n);
            if (d !== 0) {
                d < 0 && e.updateValue(o, l),
                o++;
                continue
            }
            let f = e.at(s)
              , h = t[c]
              , g = cd(s, f, c, h, n);
            if (g !== 0) {
                g < 0 && e.updateValue(s, h),
                s--,
                c--;
                continue
            }
            let y = n(o, u)
              , C = n(s, f)
              , _ = n(o, l);
            if (Object.is(_, C)) {
                let ee = n(c, h);
                Object.is(ee, y) ? (e.swap(o, s),
                e.updateValue(s, h),
                c--,
                s--) : e.move(s, o),
                e.updateValue(o, l),
                o++;
                continue
            }
            if (r ??= new Ha,
            i ??= Jm(e, o, s, n),
            xd(e, r, o, _))
                e.updateValue(o, l),
                o++,
                s++;
            else if (i.has(_))
                r.set(y, e.detach(o)),
                s--;
            else {
                let ee = e.create(o, t[o]);
                e.attach(o, ee),
                o++,
                s++
            }
        }
        for (; o <= c; )
            Qm(e, r, n, o, t[o]),
            o++
    } else if (t != null) {
        let c = t[Symbol.iterator]()
          , u = c.next();
        for (; !u.done && o <= s; ) {
            let l = e.at(o)
              , d = u.value
              , f = cd(o, l, o, d, n);
            if (f !== 0)
                f < 0 && e.updateValue(o, d),
                o++,
                u = c.next();
            else {
                r ??= new Ha,
                i ??= Jm(e, o, s, n);
                let h = n(o, d);
                if (xd(e, r, o, h))
                    e.updateValue(o, d),
                    o++,
                    s++,
                    u = c.next();
                else if (!i.has(h))
                    e.attach(o, e.create(o, d)),
                    o++,
                    s++,
                    u = c.next();
                else {
                    let g = n(o, l);
                    r.set(g, e.detach(o)),
                    s--
                }
            }
        }
        for (; !u.done; )
            Qm(e, r, n, e.length, u.value),
            u = c.next()
    }
    for (; o <= s; )
        e.destroy(e.detach(s--));
    r?.forEach(c => {
        e.destroy(c)
    }
    )
}
function xd(e, t, n, r) {
    return t !== void 0 && t.has(r) ? (e.attach(n, t.get(r)),
    t.delete(r),
    !0) : !1
}
function Qm(e, t, n, r, i) {
    if (xd(e, t, r, n(r, i)))
        e.updateValue(r, i);
    else {
        let o = e.create(r, i);
        e.attach(r, o)
    }
}
function Jm(e, t, n, r) {
    let i = new Set;
    for (let o = t; o <= n; o++)
        i.add(r(o, e.at(o)));
    return i
}
var Ha = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) {
        return this.kvMap.has(t)
    }
    delete(t) {
        if (!this.has(t))
            return !1;
        let n = this.kvMap.get(t);
        return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)),
        this._vMap.delete(n)) : this.kvMap.delete(t),
        !0
    }
    get(t) {
        return this.kvMap.get(t)
    }
    set(t, n) {
        if (this.kvMap.has(t)) {
            let r = this.kvMap.get(t);
            this._vMap === void 0 && (this._vMap = new Map);
            let i = this._vMap;
            for (; i.has(r); )
                r = i.get(r);
            i.set(r, n)
        } else
            this.kvMap.set(t, n)
    }
    forEach(t) {
        for (let[n,r] of this.kvMap)
            if (t(r, n),
            this._vMap !== void 0) {
                let i = this._vMap;
                for (; i.has(r); )
                    r = i.get(r),
                    t(r, n)
            }
    }
}
;
function mS(e, t, n, r, i, o, s, a) {
    Pt("NgControlFlow");
    let c = x()
      , u = re()
      , l = Ge(u.consts, o);
    return Eo(c, u, e, t, n, r, i, l, 256, s, a),
    If
}
function If(e, t, n, r, i, o, s, a) {
    Pt("NgControlFlow");
    let c = x()
      , u = re()
      , l = Ge(u.consts, o);
    return Eo(c, u, e, t, n, r, i, l, 512, s, a),
    If
}
function vS(e, t) {
    Pt("NgControlFlow");
    let n = x()
      , r = Qn()
      , i = n[r] !== it ? n[r] : -1
      , o = i !== -1 ? $a(n, X + i) : void 0
      , s = 0;
    if (dn(n, r, e)) {
        let a = T(null);
        try {
            if (o !== void 0 && my(o, s),
            e !== -1) {
                let c = X + e
                  , u = $a(n, c)
                  , l = jd(n[D], c)
                  , d = yy(u, l, n)
                  , f = _o(n, l, t, {
                    dehydratedView: d
                });
                Do(u, f, s, ti(l, d))
            }
        } finally {
            T(a)
        }
    } else if (o !== void 0) {
        let a = gy(o, s);
        a !== void 0 && (a[J] = t)
    }
}
var Pd = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, r) {
        this.lContainer = t,
        this.$implicit = n,
        this.$index = r
    }
    get $count() {
        return this.lContainer.length - ne
    }
}
;
function yS(e) {
    return e
}
var Ld = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, r) {
        this.hasEmptyBlock = t,
        this.trackByFn = n,
        this.liveCollection = r
    }
}
;
function ES(e, t, n, r, i, o, s, a, c, u, l, d, f) {
    Pt("NgControlFlow");
    let h = x()
      , g = re()
      , y = c !== void 0
      , C = x()
      , _ = a ? s.bind(C[_e][J]) : s
      , ee = new Ld(y,_);
    C[X + e] = ee,
    Eo(h, g, e + 1, t, n, r, i, Ge(g.consts, o), 256),
    y && Eo(h, g, e + 2, c, u, l, d, Ge(g.consts, f), 512)
}
var Fd = class extends kd {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, r) {
        super(),
        this.lContainer = t,
        this.hostLView = n,
        this.templateTNode = r
    }
    get length() {
        return this.lContainer.length - ne
    }
    at(t) {
        return this.getLView(t)[J].$implicit
    }
    attach(t, n) {
        let r = n[Wn];
        this.needsIndexUpdate ||= t !== this.length,
        Do(this.lContainer, n, t, ti(this.templateTNode, r))
    }
    detach(t, n) {
        return this.needsIndexUpdate ||= t !== this.length - 1,
        n && _S(this.lContainer, t),
        DS(this.lContainer, t)
    }
    create(t, n) {
        let r = Pa(this.lContainer, this.templateTNode.tView.ssrId)
          , i = _o(this.hostLView, this.templateTNode, new Pd(this.lContainer,n,t), {
            dehydratedView: r
        });
        return this.operationsCounter?.recordCreate(),
        i
    }
    destroy(t) {
        ec(t[D], t),
        this.operationsCounter?.recordDestroy()
    }
    updateValue(t, n) {
        this.getLView(t)[J].$implicit = n
    }
    reset() {
        this.needsIndexUpdate = !1,
        this.operationsCounter?.reset()
    }
    updateIndexes() {
        if (this.needsIndexUpdate)
            for (let t = 0; t < this.length; t++)
                this.getLView(t)[J].$index = t
    }
    getLView(t) {
        return wS(this.lContainer, t)
    }
}
;
function IS(e) {
    let t = T(null)
      , n = Mt();
    try {
        let r = x()
          , i = r[D]
          , o = r[n]
          , s = n + 1
          , a = $a(r, s);
        if (o.liveCollection === void 0) {
            let u = jd(i, s);
            o.liveCollection = new Fd(a,r,u)
        } else
            o.liveCollection.reset();
        let c = o.liveCollection;
        if (gS(c, e, o.trackByFn),
        c.updateIndexes(),
        o.hasEmptyBlock) {
            let u = Qn()
              , l = c.length === 0;
            if (dn(r, u, l)) {
                let d = n + 2
                  , f = $a(r, d);
                if (l) {
                    let h = jd(i, d)
                      , g = yy(f, h, r)
                      , y = _o(r, h, void 0, {
                        dehydratedView: g
                    });
                    Do(f, y, 0, ti(h, g))
                } else
                    i.firstUpdatePass && dT(f),
                    my(f, 0)
            }
        }
    } finally {
        T(t)
    }
}
function $a(e, t) {
    return e[t]
}
function _S(e, t) {
    if (e.length <= ne)
        return;
    let n = ne + t
      , r = e[n];
    r && r[Kn] && (r[Kn].skipLeaveAnimations = !0)
}
function DS(e, t) {
    return vo(e, t)
}
function wS(e, t) {
    return gy(e, t)
}
function jd(e, t) {
    return io(e, t)
}
function Ky(e, t, n) {
    let r = x()
      , i = Qn();
    if (dn(r, i, t)) {
        let o = re()
          , s = ya();
        LC(s, r, e, t, r[K], n)
    }
    return Ky
}
function Ud(e, t, n, r, i) {
    uf(t, e, n, i ? "class" : "style", r)
}
function _f(e, t, n, r) {
    let i = x()
      , o = i[D]
      , s = e + X
      , a = o.firstCreatePass ? by(s, i, 2, t, ny, Hl(), n, r) : o.data[s];
    if (ry(a, i, e, t, Zy),
    ro(a)) {
        let c = i[D];
        cf(c, i, a),
        Mv(c, a, i)
    }
    return r != null && nc(i, a),
    _f
}
function Df() {
    let e = re()
      , t = ve()
      , n = iy(t);
    return e.firstCreatePass && Cy(e, n),
    Wl(n) && zl(),
    Bl(),
    n.classesWithoutHost != null && mb(n) && Ud(e, n, x(), n.classesWithoutHost, !0),
    n.stylesWithoutHost != null && vb(n) && Ud(e, n, x(), n.stylesWithoutHost, !1),
    Df
}
function ac(e, t, n, r) {
    return _f(e, t, n, r),
    Df(),
    ac
}
function wf(e, t, n, r) {
    let i = x()
      , o = i[D]
      , s = e + X
      , a = o.firstCreatePass ? CT(s, o, 2, t, n, r) : o.data[s];
    return ry(a, i, e, t, Zy),
    r != null && nc(i, a),
    wf
}
function bf() {
    let e = ve()
      , t = iy(e);
    return Wl(t) && zl(),
    Bl(),
    bf
}
function Yy(e, t, n, r) {
    return wf(e, t, n, r),
    bf(),
    Yy
}
var Zy = (e, t, n, r, i) => (Ia(!0),
jv(t[K], r, Dm()));
function bS() {
    return x()
}
function Qy(e, t, n) {
    let r = x()
      , i = Qn();
    if (dn(r, i, t)) {
        let o = re()
          , s = ya();
        ty(s, r, e, t, r[K], n)
    }
    return Qy
}
var So = "en-US";
var CS = So;
function Jy(e) {
    typeof e == "string" && (CS = e.toLowerCase().replace(/_/g, "-"))
}
function Xy(e, t, n) {
    let r = x()
      , i = re()
      , o = ve();
    return TS(i, r, r[K], o, e, t, n),
    Xy
}
function TS(e, t, n, r, i, o, s) {
    let a = !0
      , c = null;
    if ((r.type & 3 || s) && (c ??= od(r, t, o),
    TT(r, e, t, s, n, i, o, c) && (a = !1)),
    a) {
        let u = r.outputs?.[i]
          , l = r.hostDirectiveOutputs?.[i];
        if (l && l.length)
            for (let d = 0; d < l.length; d += 2) {
                let f = l[d]
                  , h = l[d + 1];
                c ??= od(r, t, o),
                zm(r, t, f, h, i, c)
            }
        if (u && u.length)
            for (let d of u)
                c ??= od(r, t, o),
                zm(r, t, d, i, i, c)
    }
}
function SS(e=1) {
    return _m(e)
}
function AS(e, t) {
    let n = null
      , r = Kb(e);
    for (let i = 0; i < t.length; i++) {
        let o = t[i];
        if (o === "*") {
            n = i;
            continue
        }
        if (r === null ? Fv(e, o, !0) : Qb(r, o))
            return i
    }
    return n
}
function NS(e) {
    let t = x()[_e][Ie];
    if (!t.projection) {
        let n = e ? e.length : 1
          , r = t.projection = $g(n, null)
          , i = r.slice()
          , o = t.child;
        for (; o !== null; ) {
            if (o.type !== 128) {
                let s = e ? AS(o, e) : 0;
                s !== null && (i[s] ? i[s].projectionNext = o : r[s] = o,
                i[s] = o)
            }
            o = o.next
        }
    }
}
function RS(e, t=0, n, r, i, o) {
    let s = x()
      , a = re()
      , c = r ? e + 1 : null;
    c !== null && Eo(s, a, c, r, i, o, null, n);
    let u = li(a, X + e, 16, null, n || null);
    u.projection === null && (u.projection = t),
    Kl();
    let d = !s[Wn] || $l();
    s[_e][Ie].projection[u.projection] === null && c !== null ? MS(s, a, c) : d && !Ka(u) && NC(a, s, u)
}
function MS(e, t, n) {
    let r = X + n
      , i = t.data[r]
      , o = e[r]
      , s = Pa(o, i.tView.ssrId)
      , a = _o(e, i, void 0, {
        dehydratedView: s
    });
    Do(o, a, 0, ti(i, s))
}
function OS(e, t, n, r) {
    ky(e, t, n, r)
}
function kS(e, t, n) {
    Oy(e, t, n)
}
function xS(e) {
    let t = x()
      , n = re()
      , r = ga();
    so(r + 1);
    let i = hf(n, r);
    if (e.dirty && nm(t) === ((i.metadata.flags & 2) === 2)) {
        if (i.matches === null)
            e.reset([]);
        else {
            let o = Py(t, r);
            e.reset(o, yv),
            e.notifyOnChanges()
        }
        return !0
    }
    return !1
}
function PS() {
    return ff(x(), ga())
}
function LS(e, t, n, r, i) {
    Fy(t, ky(e, n, r, i))
}
function FS(e, t, n, r) {
    Fy(e, Oy(t, n, r))
}
function jS(e=1) {
    so(ga() + e)
}
function US(e) {
    let t = fm();
    return tm(t, X + e)
}
function wa(e, t) {
    return e << 17 | t << 2
}
function or(e) {
    return e >> 17 & 32767
}
function VS(e) {
    return (e & 2) == 2
}
function BS(e, t) {
    return e & 131071 | t << 17
}
function Vd(e) {
    return e | 2
}
function ii(e) {
    return (e & 131068) >> 2
}
function ud(e, t) {
    return e & -131069 | t << 2
}
function HS(e) {
    return (e & 1) === 1
}
function Bd(e) {
    return e | 1
}
function $S(e, t, n, r, i, o) {
    let s = o ? t.classBindings : t.styleBindings
      , a = or(s)
      , c = ii(s);
    e[r] = n;
    let u = !1, l;
    if (Array.isArray(n)) {
        let d = n;
        l = d[1],
        (l === null || $r(d, l) > 0) && (u = !0)
    } else
        l = n;
    if (i)
        if (c !== 0) {
            let f = or(e[a + 1]);
            e[r + 1] = wa(f, a),
            f !== 0 && (e[f + 1] = ud(e[f + 1], r)),
            e[a + 1] = BS(e[a + 1], r)
        } else
            e[r + 1] = wa(a, 0),
            a !== 0 && (e[a + 1] = ud(e[a + 1], r)),
            a = r;
    else
        e[r + 1] = wa(c, 0),
        a === 0 ? a = r : e[c + 1] = ud(e[c + 1], r),
        c = r;
    u && (e[r + 1] = Vd(e[r + 1])),
    Xm(e, l, r, !0),
    Xm(e, l, r, !1),
    WS(t, l, e, r, o),
    s = wa(a, c),
    o ? t.classBindings = s : t.styleBindings = s
}
function WS(e, t, n, r, i) {
    let o = i ? e.residualClasses : e.residualStyles;
    o != null && typeof t == "string" && $r(o, t) >= 0 && (n[r + 1] = Bd(n[r + 1]))
}
function Xm(e, t, n, r) {
    let i = e[n + 1]
      , o = t === null
      , s = r ? or(i) : ii(i)
      , a = !1;
    for (; s !== 0 && (a === !1 || o); ) {
        let c = e[s]
          , u = e[s + 1];
        zS(c, t) && (a = !0,
        e[s + 1] = r ? Bd(u) : Vd(u)),
        s = r ? or(u) : ii(u)
    }
    a && (e[n + 1] = r ? Vd(i) : Bd(i))
}
function zS(e, t) {
    return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? $r(e, t) >= 0 : !1
}
var rt = {
    textEnd: 0,
    key: 0,
    keyEnd: 0,
    value: 0,
    valueEnd: 0
};
function GS(e) {
    return e.substring(rt.key, rt.keyEnd)
}
function qS(e) {
    return KS(e),
    eE(e, tE(e, 0, rt.textEnd))
}
function eE(e, t) {
    let n = rt.textEnd;
    return n === t ? -1 : (t = rt.keyEnd = YS(e, rt.key = t, n),
    tE(e, t, n))
}
function KS(e) {
    rt.key = 0,
    rt.keyEnd = 0,
    rt.value = 0,
    rt.valueEnd = 0,
    rt.textEnd = e.length
}
function tE(e, t, n) {
    for (; t < n && e.charCodeAt(t) <= 32; )
        t++;
    return t
}
function YS(e, t, n) {
    for (; t < n && e.charCodeAt(t) > 32; )
        t++;
    return t
}
function nE(e, t) {
    return JS(e, t, null, !0),
    nE
}
function ZS(e) {
    XS(oA, QS, e, !0)
}
function QS(e, t) {
    for (let n = qS(t); n >= 0; n = eE(t, n))
        ca(e, GS(t), !0)
}
function JS(e, t, n, r) {
    let i = x()
      , o = re()
      , s = Zl(2);
    if (o.firstUpdatePass && iE(o, e, s, r),
    t !== it && dn(i, s, t)) {
        let a = o.data[Mt()];
        oE(o, a, i, i[K], e, i[s + 1] = aA(t, n), r, s)
    }
}
function XS(e, t, n, r) {
    let i = re()
      , o = Zl(2);
    i.firstUpdatePass && iE(i, null, o, r);
    let s = x();
    if (n !== it && dn(s, o, n)) {
        let a = i.data[Mt()];
        if (sE(a, r) && !rE(i, o)) {
            let c = r ? a.classesWithoutHost : a.stylesWithoutHost;
            c !== null && (n = ra(c, n || "")),
            Ud(i, a, s, n, r)
        } else
            sA(i, a, s, s[K], s[o + 1], s[o + 1] = iA(e, t, n), r, o)
    }
}
function rE(e, t) {
    return t >= e.expandoStartIndex
}
function iE(e, t, n, r) {
    let i = e.data;
    if (i[n + 1] === null) {
        let o = i[Mt()]
          , s = rE(e, n);
        sE(o, r) && t === null && !s && (t = !1),
        t = eA(i, o, t, r),
        $S(i, o, t, n, s, r)
    }
}
function eA(e, t, n, r) {
    let i = vm(e)
      , o = r ? t.residualClasses : t.residualStyles;
    if (i === null)
        (r ? t.classBindings : t.styleBindings) === 0 && (n = ld(null, e, t, n, r),
        n = Io(n, t.attrs, r),
        o = null);
    else {
        let s = t.directiveStylingLast;
        if (s === -1 || e[s] !== i)
            if (n = ld(i, e, t, n, r),
            o === null) {
                let c = tA(e, t, r);
                c !== void 0 && Array.isArray(c) && (c = ld(null, e, t, c[1], r),
                c = Io(c, t.attrs, r),
                nA(e, t, r, c))
            } else
                o = rA(e, t, r)
    }
    return o !== void 0 && (r ? t.residualClasses = o : t.residualStyles = o),
    n
}
function tA(e, t, n) {
    let r = n ? t.classBindings : t.styleBindings;
    if (ii(r) !== 0)
        return e[or(r)]
}
function nA(e, t, n, r) {
    let i = n ? t.classBindings : t.styleBindings;
    e[or(i)] = r
}
function rA(e, t, n) {
    let r, i = t.directiveEnd;
    for (let o = 1 + t.directiveStylingLast; o < i; o++) {
        let s = e[o].hostAttrs;
        r = Io(r, s, n)
    }
    return Io(r, t.attrs, n)
}
function ld(e, t, n, r, i) {
    let o = null
      , s = n.directiveEnd
      , a = n.directiveStylingLast;
    for (a === -1 ? a = n.directiveStart : a++; a < s && (o = t[a],
    r = Io(r, o.hostAttrs, i),
    o !== e); )
        a++;
    return e !== null && (n.directiveStylingLast = a),
    r
}
function Io(e, t, n) {
    let r = n ? 1 : 2
      , i = -1;
    if (t !== null)
        for (let o = 0; o < t.length; o++) {
            let s = t[o];
            typeof s == "number" ? i = s : i === r && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
            ca(e, s, n ? !0 : t[++o]))
        }
    return e === void 0 ? null : e
}
function iA(e, t, n) {
    if (n == null || n === "")
        return me;
    let r = []
      , i = Ya(n);
    if (Array.isArray(i))
        for (let o = 0; o < i.length; o++)
            e(r, i[o], !0);
    else if (typeof i == "object")
        for (let o in i)
            i.hasOwnProperty(o) && e(r, o, i[o]);
    else
        typeof i == "string" && t(r, i);
    return r
}
function oA(e, t, n) {
    let r = String(t);
    r !== "" && !r.includes(" ") && ca(e, r, n)
}
function sA(e, t, n, r, i, o, s, a) {
    i === it && (i = me);
    let c = 0
      , u = 0
      , l = 0 < i.length ? i[0] : null
      , d = 0 < o.length ? o[0] : null;
    for (; l !== null || d !== null; ) {
        let f = c < i.length ? i[c + 1] : void 0, h = u < o.length ? o[u + 1] : void 0, g = null, y;
        l === d ? (c += 2,
        u += 2,
        f !== h && (g = d,
        y = h)) : d === null || l !== null && l < d ? (c += 2,
        g = l) : (u += 2,
        g = d,
        y = h),
        g !== null && oE(e, t, n, r, g, y, s, a),
        l = c < i.length ? i[c] : null,
        d = u < o.length ? o[u] : null
    }
}
function oE(e, t, n, r, i, o, s, a) {
    if (!(t.type & 3))
        return;
    let c = e.data
      , u = c[a + 1]
      , l = HS(u) ? ev(c, t, n, i, ii(u), s) : void 0;
    if (!Wa(l)) {
        Wa(o) || VS(u) && (o = ev(c, null, n, i, a, s));
        let d = Pl(Mt(), n);
        MC(r, s, d, i, o)
    }
}
function ev(e, t, n, r, i, o) {
    let s = t === null, a;
    for (; i > 0; ) {
        let c = e[i]
          , u = Array.isArray(c)
          , l = u ? c[1] : c
          , d = l === null
          , f = n[i + 1];
        f === it && (f = d ? me : void 0);
        let h = d ? ua(f, r) : l === r ? f : void 0;
        if (u && !Wa(h) && (h = ua(c, r)),
        Wa(h) && (a = h,
        s))
            return a;
        let g = e[i + 1];
        i = s ? or(g) : ii(g)
    }
    if (t !== null) {
        let c = o ? t.residualClasses : t.residualStyles;
        c != null && (a = ua(c, r))
    }
    return a
}
function Wa(e) {
    return e !== void 0
}
function aA(e, t) {
    return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = St(Ya(e)))),
    e
}
function sE(e, t) {
    return (e.flags & (t ? 8 : 16)) !== 0
}
function cA(e, t="") {
    let n = x()
      , r = re()
      , i = e + X
      , o = r.firstCreatePass ? li(r, i, 1, t, null) : r.data[i]
      , s = uA(r, n, o, t, e);
    n[i] = s,
    Ea() && sf(r, n, s, o),
    Kr(o, !1)
}
var uA = (e, t, n, r, i) => (Ia(!0),
tC(t[K], r));
function lA(e, t, n, r="") {
    return dn(e, Qn(), n) ? t + Ji(n) + r : it
}
function aE(e) {
    return Cf("", e),
    aE
}
function Cf(e, t, n) {
    let r = x()
      , i = lA(r, e, t, n);
    return i !== it && dA(r, Mt(), i),
    Cf
}
function dA(e, t, n) {
    let r = Pl(t, e);
    nC(e[K], r, n)
}
function fA(e, t, n) {
    let r = re();
    if (r.firstCreatePass) {
        let i = et(e);
        Hd(n, r.data, r.blueprint, i, !0),
        Hd(t, r.data, r.blueprint, i, !1)
    }
}
function Hd(e, t, n, r, i) {
    if (e = ae(e),
    Array.isArray(e))
        for (let o = 0; o < e.length; o++)
            Hd(e[o], t, n, r, i);
    else {
        let o = re()
          , s = x()
          , a = ve()
          , c = Bn(e) ? e : ae(e.provide)
          , u = Rl(e)
          , l = a.providerIndexes & 1048575
          , d = a.directiveStart
          , f = a.providerIndexes >> 20;
        if (Bn(e) || !e.multi) {
            let h = new nr(u,i,di,null)
              , g = fd(c, t, i ? l : l + f, d);
            g === -1 ? (pd(Ma(a, s), o, c),
            dd(o, e, t.length),
            t.push(c),
            a.directiveStart++,
            a.directiveEnd++,
            i && (a.providerIndexes += 1048576),
            n.push(h),
            s.push(h)) : (n[g] = h,
            s[g] = h)
        } else {
            let h = fd(c, t, l + f, d)
              , g = fd(c, t, l, l + f)
              , y = h >= 0 && n[h]
              , C = g >= 0 && n[g];
            if (i && !C || !i && !y) {
                pd(Ma(a, s), o, c);
                let _ = gA(i ? pA : hA, n.length, i, r, u, e);
                !i && C && (n[g].providerFactory = _),
                dd(o, e, t.length, 0),
                t.push(c),
                a.directiveStart++,
                a.directiveEnd++,
                i && (a.providerIndexes += 1048576),
                n.push(_),
                s.push(_)
            } else {
                let _ = cE(n[i ? g : h], u, !i && r);
                dd(o, e, h > -1 ? h : g, _)
            }
            !i && r && C && n[g].componentProviders++
        }
    }
}
function dd(e, t, n, r) {
    let i = Bn(t)
      , o = Zg(t);
    if (i || o) {
        let c = (o ? ae(t.useClass) : t).prototype.ngOnDestroy;
        if (c) {
            let u = e.destroyHooks || (e.destroyHooks = []);
            if (!i && t.multi) {
                let l = u.indexOf(n);
                l === -1 ? u.push(n, [r, c]) : u[l + 1].push(r, c)
            } else
                u.push(n, c)
        }
    }
}
function cE(e, t, n) {
    return n && e.componentProviders++,
    e.multi.push(t) - 1
}
function fd(e, t, n, r) {
    for (let i = n; i < r; i++)
        if (t[i] === e)
            return i;
    return -1
}
function hA(e, t, n, r, i) {
    return $d(this.multi, [])
}
function pA(e, t, n, r, i) {
    let o = this.multi, s;
    if (this.providerFactory) {
        let a = this.providerFactory.componentProviders
          , c = ho(r, r[D], this.providerFactory.index, i);
        s = c.slice(0, a),
        $d(o, s);
        for (let u = a; u < c.length; u++)
            s.push(c[u])
    } else
        s = [],
        $d(o, s);
    return s
}
function $d(e, t) {
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        t.push(r())
    }
    return t
}
function gA(e, t, n, r, i, o) {
    let s = new nr(e,n,di,null);
    return s.multi = [],
    s.index = t,
    s.componentProviders = 0,
    cE(s, i, r && !n),
    s
}
function uE(e, t=[]) {
    return n => {
        n.providersResolver = (r, i) => fA(r, i ? i(e) : e, t)
    }
}
function mA(e, t) {
    return rc(e, t)
}
var za = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) {
        this.ngModuleFactory = t,
        this.componentFactories = n
    }
}
  , Tf = ( () => {
    class e {
        compileModuleSync(n) {
            return new Ba(n)
        }
        compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n))
        }
        compileModuleAndAllComponentsSync(n) {
            let r = this.compileModuleSync(n)
              , i = Sl(n)
              , o = Pv(i.declarations).reduce( (s, a) => {
                let c = Nt(a);
                return c && s.push(new ir(c)),
                s
            }
            , []);
            return new za(r,o)
        }
        compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n))
        }
        clearCache() {}
        clearCacheFor(n) {}
        getModuleId(n) {}
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var vA = ( () => {
    class e {
        zone = p(F);
        changeDetectionScheduler = p(Ne);
        applicationRef = p(Ft);
        applicationErrorHandler = p(ke);
        _onMicrotaskEmptySubscription;
        initialize() {
            this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
                next: () => {
                    this.changeDetectionScheduler.runningTick || this.zone.run( () => {
                        try {
                            this.applicationRef.dirtyFlags |= 1,
                            this.applicationRef._tick()
                        } catch (n) {
                            this.applicationErrorHandler(n)
                        }
                    }
                    )
                }
            }))
        }
        ngOnDestroy() {
            this._onMicrotaskEmptySubscription?.unsubscribe()
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function lE({ngZoneFactory: e, ignoreChangesOutsideZone: t, scheduleInRootZone: n}) {
    return e ??= () => new F(j(m({}, dE()), {
        scheduleInRootZone: n
    })),
    [{
        provide: F,
        useFactory: e
    }, {
        provide: At,
        multi: !0,
        useFactory: () => {
            let r = p(vA, {
                optional: !0
            });
            return () => r.initialize()
        }
    }, {
        provide: At,
        multi: !0,
        useFactory: () => {
            let r = p(yA);
            return () => {
                r.initialize()
            }
        }
    }, t === !0 ? {
        provide: td,
        useValue: !0
    } : [], {
        provide: _a,
        useValue: n ?? zv
    }, {
        provide: ke,
        useFactory: () => {
            let r = p(F), i = p(Q), o;
            return s => {
                r.runOutsideAngular( () => {
                    i.destroyed && !o ? setTimeout( () => {
                        throw s
                    }
                    ) : (o ??= i.get(He),
                    o.handleError(s))
                }
                )
            }
        }
    }]
}
function dE(e) {
    return {
        enableLongStackTrace: !1,
        shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
        shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1
    }
}
var yA = ( () => {
    class e {
        subscription = new q;
        initialized = !1;
        zone = p(F);
        pendingTasks = p(pt);
        initialize() {
            if (this.initialized)
                return;
            this.initialized = !0;
            let n = null;
            !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()),
            this.zone.runOutsideAngular( () => {
                this.subscription.add(this.zone.onStable.subscribe( () => {
                    F.assertNotInAngularZone(),
                    queueMicrotask( () => {
                        n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n),
                        n = null)
                    }
                    )
                }
                ))
            }
            ),
            this.subscription.add(this.zone.onUnstable.subscribe( () => {
                F.assertInAngularZone(),
                n ??= this.pendingTasks.add()
            }
            ))
        }
        ngOnDestroy() {
            this.subscription.unsubscribe()
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var Sf = ( () => {
    class e {
        applicationErrorHandler = p(ke);
        appRef = p(Ft);
        taskService = p(pt);
        ngZone = p(F);
        zonelessEnabled = p(co);
        tracing = p(ln, {
            optional: !0
        });
        disableScheduling = p(td, {
            optional: !0
        }) ?? !1;
        zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
        schedulerTickApplyArgs = [{
            data: {
                __scheduler_tick__: !0
            }
        }];
        subscriptions = new q;
        angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(xa) : null;
        scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (p(_a, {
            optional: !0
        }) ?? !1);
        cancelScheduledCallback = null;
        useMicrotaskScheduler = !1;
        runningTick = !1;
        pendingRenderTaskId = null;
        constructor() {
            this.subscriptions.add(this.appRef.afterTick.subscribe( () => {
                this.runningTick || this.cleanup()
            }
            )),
            this.subscriptions.add(this.ngZone.onUnstable.subscribe( () => {
                this.runningTick || this.cleanup()
            }
            )),
            this.disableScheduling ||= !this.zonelessEnabled && (this.ngZone instanceof po || !this.zoneIsDefined)
        }
        notify(n) {
            if (!this.zonelessEnabled && n === 5)
                return;
            let r = !1;
            switch (n) {
            case 0:
                {
                    this.appRef.dirtyFlags |= 2;
                    break
                }
            case 3:
            case 2:
            case 4:
            case 5:
            case 1:
                {
                    this.appRef.dirtyFlags |= 4;
                    break
                }
            case 6:
                {
                    this.appRef.dirtyFlags |= 2,
                    r = !0;
                    break
                }
            case 12:
                {
                    this.appRef.dirtyFlags |= 16,
                    r = !0;
                    break
                }
            case 13:
                {
                    this.appRef.dirtyFlags |= 2,
                    r = !0;
                    break
                }
            case 11:
                {
                    r = !0;
                    break
                }
            case 9:
            case 8:
            case 7:
            case 10:
            default:
                this.appRef.dirtyFlags |= 8
            }
            if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null,
            !this.shouldScheduleTick(r))
                return;
            let i = this.useMicrotaskScheduler ? Pm : Gv;
            this.pendingRenderTaskId = this.taskService.add(),
            this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run( () => i( () => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular( () => i( () => this.tick()))
        }
        shouldScheduleTick(n) {
            return !(this.disableScheduling && !n || this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(xa + this.angularZoneId))
        }
        tick() {
            if (this.runningTick || this.appRef.destroyed)
                return;
            if (this.appRef.dirtyFlags === 0) {
                this.cleanup();
                return
            }
            !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1);
            let n = this.taskService.add();
            try {
                this.ngZone.run( () => {
                    this.runningTick = !0,
                    this.appRef._tick()
                }
                , void 0, this.schedulerTickApplyArgs)
            } catch (r) {
                this.taskService.remove(n),
                this.applicationErrorHandler(r)
            } finally {
                this.cleanup()
            }
            this.useMicrotaskScheduler = !0,
            Pm( () => {
                this.useMicrotaskScheduler = !1,
                this.taskService.remove(n)
            }
            )
        }
        ngOnDestroy() {
            this.subscriptions.unsubscribe(),
            this.cleanup()
        }
        cleanup() {
            if (this.runningTick = !1,
            this.cancelScheduledCallback?.(),
            this.cancelScheduledCallback = null,
            this.pendingRenderTaskId !== null) {
                let n = this.pendingRenderTaskId;
                this.pendingRenderTaskId = null,
                this.taskService.remove(n)
            }
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function EA() {
    return Pt("NgZoneless"),
    Me([{
        provide: Ne,
        useExisting: Sf
    }, {
        provide: F,
        useClass: po
    }, {
        provide: co,
        useValue: !0
    }, {
        provide: _a,
        useValue: !1
    }, []])
}
function IA() {
    return typeof $localize < "u" && $localize.locale || So
}
var Af = new E("",{
    providedIn: "root",
    factory: () => p(Af, {
        optional: !0,
        skipSelf: !0
    }) || IA()
});
function hn(e) {
    return Rg(e)
}
function _A(e, t) {
    return Li(e, t?.equal)
}
var Nf = class {
    [ie];
    constructor(t) {
        this[ie] = t
    }
    destroy() {
        this[ie].destroy()
    }
}
;
function Rf(e, t) {
    let n = t?.injector ?? p(z), r = t?.manualCleanup !== !0 ? n.get(qe) : null, i, o = n.get(Jn, null, {
        optional: !0
    }), s = n.get(Ne);
    return o !== null ? (i = bA(o.view, s, e),
    r instanceof Zi && r._lView === o.view && (r = null)) : i = CA(e, n.get(uo), s),
    i.injector = n,
    r !== null && (i.onDestroyFn = r.onDestroy( () => i.destroy())),
    new Nf(i)
}
var fE = j(m({}, Mg), {
    cleanupFns: void 0,
    zone: null,
    onDestroyFn: er,
    run() {
        let e = Yr(!1);
        try {
            Og(this)
        } finally {
            Yr(e)
        }
    },
    cleanup() {
        if (!this.cleanupFns?.length)
            return;
        let e = T(null);
        try {
            for (; this.cleanupFns.length; )
                this.cleanupFns.pop()()
        } finally {
            this.cleanupFns = [],
            T(e)
        }
    }
})
  , DA = j(m({}, fE), {
    consumerMarkedDirty() {
        this.scheduler.schedule(this),
        this.notifier.notify(12)
    },
    destroy() {
        qt(this),
        this.onDestroyFn(),
        this.cleanup(),
        this.scheduler.remove(this)
    }
})
  , wA = j(m({}, fE), {
    consumerMarkedDirty() {
        this.view[b] |= 8192,
        an(this.view),
        this.notifier.notify(13)
    },
    destroy() {
        qt(this),
        this.onDestroyFn(),
        this.cleanup(),
        this.view[Rt]?.delete(this)
    }
});
function bA(e, t, n) {
    let r = Object.create(wA);
    return r.view = e,
    r.zone = typeof Zone < "u" ? Zone.current : null,
    r.notifier = t,
    r.fn = hE(r, n),
    e[Rt] ??= new Set,
    e[Rt].add(r),
    r.consumerMarkedDirty(r),
    r
}
function CA(e, t, n) {
    let r = Object.create(DA);
    return r.fn = hE(r, e),
    r.scheduler = t,
    r.notifier = n,
    r.zone = typeof Zone < "u" ? Zone.current : null,
    r.scheduler.add(r),
    r.notifier.notify(12),
    r
}
function hE(e, t) {
    return () => {
        t(n => (e.cleanupFns ??= []).push(n))
    }
}
var vE = Symbol("InputSignalNode#UNSET")
  , LA = j(m({}, Fi), {
    transformFn: void 0,
    applyValueToInputSignal(e, t) {
        Tr(e, t)
    }
});
function yE(e, t) {
    let n = Object.create(LA);
    n.value = e,
    n.transformFn = t?.transform;
    function r() {
        if (Mn(n),
        n.value === vE) {
            let i = null;
            throw new I(-950,i)
        }
        return n.value
    }
    return r[ie] = n,
    r
}
var FA = new E("");
FA.__NG_ELEMENT_ID__ = e => {
    let t = ve();
    if (t === null)
        throw new I(204,!1);
    if (t.type & 2)
        return t.value;
    if (e & 8)
        return null;
    throw new I(204,!1)
}
;
function pE(e, t) {
    return yE(e, t)
}
function jA(e) {
    return yE(vE, e)
}
var EE = (pE.required = jA,
pE);
function gE(e, t) {
    return pf(t)
}
function UA(e, t) {
    return gf(t)
}
var VG = (gE.required = UA,
gE);
function mE(e, t) {
    return pf(t)
}
function VA(e, t) {
    return gf(t)
}
var BG = (mE.required = VA,
mE);
var Of = new E("")
  , BA = new E("");
function Ao(e) {
    return !e.moduleRef
}
function HA(e) {
    let t = Ao(e) ? e.r3Injector : e.moduleRef.injector
      , n = t.get(F);
    return n.run( () => {
        Ao(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers();
        let r = t.get(ke), i;
        if (n.runOutsideAngular( () => {
            i = n.onError.subscribe({
                next: r
            })
        }
        ),
        Ao(e)) {
            let o = () => t.destroy()
              , s = e.platformInjector.get(Of);
            s.add(o),
            t.onDestroy( () => {
                i.unsubscribe(),
                s.delete(o)
            }
            )
        } else {
            let o = () => e.moduleRef.destroy()
              , s = e.platformInjector.get(Of);
            s.add(o),
            e.moduleRef.onDestroy( () => {
                fo(e.allPlatformModules, e.moduleRef),
                i.unsubscribe(),
                s.delete(o)
            }
            )
        }
        return WA(r, n, () => {
            let o = t.get(pt)
              , s = o.add()
              , a = t.get(yf);
            return a.runInitializers(),
            a.donePromise.then( () => {
                let c = t.get(Af, So);
                if (Jy(c || So),
                !t.get(BA, !0))
                    return Ao(e) ? t.get(Ft) : (e.allPlatformModules.push(e.moduleRef),
                    e.moduleRef);
                if (Ao(e)) {
                    let l = t.get(Ft);
                    return e.rootComponent !== void 0 && l.bootstrap(e.rootComponent),
                    l
                } else
                    return $A?.(e.moduleRef, e.allPlatformModules),
                    e.moduleRef
            }
            ).finally( () => void o.remove(s))
        }
        )
    }
    )
}
var $A;
function WA(e, t, n) {
    try {
        let r = n();
        return To(r) ? r.catch(i => {
            throw t.runOutsideAngular( () => e(i)),
            i
        }
        ) : r
    } catch (r) {
        throw t.runOutsideAngular( () => e(r)),
        r
    }
}
var cc = null;
function zA(e=[], t) {
    return z.create({
        name: t,
        providers: [{
            provide: eo,
            useValue: "platform"
        }, {
            provide: Of,
            useValue: new Set([ () => cc = null])
        }, ...e]
    })
}
function GA(e=[]) {
    if (cc)
        return cc;
    let t = zA(e);
    return cc = t,
    Gy(),
    qA(t),
    t
}
function qA(e) {
    let t = e.get(qa, null);
    ue(e, () => {
        t?.forEach(n => n())
    }
    )
}
function xf() {
    return !1
}
var Pf = ( () => {
    class e {
        static __NG_ELEMENT_ID__ = KA
    }
    return e
}
)();
function KA(e) {
    return YA(ve(), x(), (e & 16) === 16)
}
function YA(e, t, n) {
    if (sn(e) && !n) {
        let r = ze(e.index, t);
        return new un(r,r)
    } else if (e.type & 175) {
        let r = t[_e];
        return new un(r,t)
    }
    return null
}
function IE(e) {
    let {rootComponent: t, appProviders: n, platformProviders: r, platformRef: i} = e;
    H(8);
    try {
        let o = i?.injector ?? GA(r)
          , s = [lE({}), {
            provide: Ne,
            useExisting: Sf
        }, bm, ...n || []]
          , a = new yo({
            providers: s,
            parent: o,
            debugName: "",
            runEnvironmentInitializers: !1
        });
        return HA({
            r3Injector: a.injector,
            platformInjector: o,
            rootComponent: t
        })
    } catch (o) {
        return Promise.reject(o)
    } finally {
        H(9)
    }
}
function _E(e) {
    return typeof e == "boolean" ? e : e != null && e !== "false"
}
function HG(e, t=NaN) {
    return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t
}
var Mf = Symbol("NOT_SET")
  , DE = new Set
  , ZA = j(m({}, Fi), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !0,
    value: Mf,
    cleanup: null,
    consumerMarkedDirty() {
        if (this.sequence.impl.executing) {
            if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
                return;
            this.sequence.erroredOrDestroyed = !0
        }
        this.sequence.scheduler.notify(7)
    },
    phaseFn(e) {
        if (this.sequence.lastPhase = this.phase,
        !this.dirty)
            return this.signal;
        if (this.dirty = !1,
        this.value !== Mf && !kn(this))
            return this.signal;
        try {
            for (let i of this.cleanup ?? DE)
                i()
        } finally {
            this.cleanup?.clear()
        }
        let t = [];
        e !== void 0 && t.push(e),
        t.push(this.registerCleanupFn);
        let n = Gt(this), r;
        try {
            r = this.userFn.apply(null, t)
        } finally {
            On(this, n)
        }
        return (this.value === Mf || !this.equal(this.value, r)) && (this.value = r,
        this.version++),
        this.signal
    }
})
  , kf = class extends go {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    constructor(t, n, r, i, o, s=null) {
        super(t, [void 0, void 0, void 0, void 0], r, !1, o.get(qe), s),
        this.scheduler = i;
        for (let a of nf) {
            let c = n[a];
            if (c === void 0)
                continue;
            let u = Object.create(ZA);
            u.sequence = this,
            u.phase = a,
            u.userFn = c,
            u.dirty = !0,
            u.signal = () => (Mn(u),
            u.value),
            u.signal[ie] = u,
            u.registerCleanupFn = l => (u.cleanup ??= new Set).add(l),
            this.nodes[a] = u,
            this.hooks[a] = l => u.phaseFn(l)
        }
    }
    afterRun() {
        super.afterRun(),
        this.lastPhase = null
    }
    destroy() {
        super.destroy();
        for (let t of this.nodes)
            if (t)
                try {
                    for (let n of t.cleanup ?? DE)
                        n()
                } finally {
                    qt(t)
                }
    }
}
;
function $G(e, t) {
    let n = t?.injector ?? p(z)
      , r = n.get(Ne)
      , i = n.get(Ja)
      , o = n.get(ln, null, {
        optional: !0
    });
    i.impl ??= n.get(rf);
    let s = e;
    typeof s == "function" && (s = {
        mixedReadWrite: e
    });
    let a = n.get(Jn, null, {
        optional: !0
    })
      , c = new kf(i.impl,[s.earlyRead, s.write, s.mixedReadWrite, s.read],a?.view,r,n,o?.snapshot(null));
    return i.impl.register(c),
    c
}
function wE(e, t) {
    let n = Nt(e)
      , r = t.elementInjector || Wr();
    return new ir(n).create(r, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings)
}
var TE = null;
function jt() {
    return TE
}
function Lf(e) {
    TE ??= e
}
var No = class {
}
  , Ff = ( () => {
    class e {
        historyGo(n) {
            throw new Error("")
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => p(SE),
            providedIn: "platform"
        })
    }
    return e
}
)();
var SE = ( () => {
    class e extends Ff {
        _location;
        _history;
        _doc = p(G);
        constructor() {
            super(),
            this._location = window.location,
            this._history = window.history
        }
        getBaseHrefFromDOM() {
            return jt().getBaseHref(this._doc)
        }
        onPopState(n) {
            let r = jt().getGlobalEventTarget(this._doc, "window");
            return r.addEventListener("popstate", n, !1),
            () => r.removeEventListener("popstate", n)
        }
        onHashChange(n) {
            let r = jt().getGlobalEventTarget(this._doc, "window");
            return r.addEventListener("hashchange", n, !1),
            () => r.removeEventListener("hashchange", n)
        }
        get href() {
            return this._location.href
        }
        get protocol() {
            return this._location.protocol
        }
        get hostname() {
            return this._location.hostname
        }
        get port() {
            return this._location.port
        }
        get pathname() {
            return this._location.pathname
        }
        get search() {
            return this._location.search
        }
        get hash() {
            return this._location.hash
        }
        set pathname(n) {
            this._location.pathname = n
        }
        pushState(n, r, i) {
            this._history.pushState(n, r, i)
        }
        replaceState(n, r, i) {
            this._history.replaceState(n, r, i)
        }
        forward() {
            this._history.forward()
        }
        back() {
            this._history.back()
        }
        historyGo(n=0) {
            this._history.go(n)
        }
        getState() {
            return this._history.state
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => new e,
            providedIn: "platform"
        })
    }
    return e
}
)();
function AE(e, t) {
    return e ? t ? e.endsWith("/") ? t.startsWith("/") ? e + t.slice(1) : e + t : t.startsWith("/") ? e + t : `${e}/${t}` : e : t
}
function bE(e) {
    let t = e.search(/#|\?|$/);
    return e[t - 1] === "/" ? e.slice(0, t - 1) + e.slice(t) : e
}
function pn(e) {
    return e && e[0] !== "?" ? `?${e}` : e
}
var uc = ( () => {
    class e {
        historyGo(n) {
            throw new Error("")
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => p(RE),
            providedIn: "root"
        })
    }
    return e
}
)()
  , NE = new E("")
  , RE = ( () => {
    class e extends uc {
        _platformLocation;
        _baseHref;
        _removeListenerFns = [];
        constructor(n, r) {
            super(),
            this._platformLocation = n,
            this._baseHref = r ?? this._platformLocation.getBaseHrefFromDOM() ?? p(G).location?.origin ?? ""
        }
        ngOnDestroy() {
            for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()()
        }
        onPopState(n) {
            this._removeListenerFns.push(this._platformLocation.onPopState(n), this._platformLocation.onHashChange(n))
        }
        getBaseHref() {
            return this._baseHref
        }
        prepareExternalUrl(n) {
            return AE(this._baseHref, n)
        }
        path(n=!1) {
            let r = this._platformLocation.pathname + pn(this._platformLocation.search)
              , i = this._platformLocation.hash;
            return i && n ? `${r}${i}` : r
        }
        pushState(n, r, i, o) {
            let s = this.prepareExternalUrl(i + pn(o));
            this._platformLocation.pushState(n, r, s)
        }
        replaceState(n, r, i, o) {
            let s = this.prepareExternalUrl(i + pn(o));
            this._platformLocation.replaceState(n, r, s)
        }
        forward() {
            this._platformLocation.forward()
        }
        back() {
            this._platformLocation.back()
        }
        getState() {
            return this._platformLocation.getState()
        }
        historyGo(n=0) {
            this._platformLocation.historyGo?.(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)(R(Ff),R(NE, 8))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , fi = ( () => {
    class e {
        _subject = new U;
        _basePath;
        _locationStrategy;
        _urlChangeListeners = [];
        _urlChangeSubscription = null;
        constructor(n) {
            this._locationStrategy = n;
            let r = this._locationStrategy.getBaseHref();
            this._basePath = XA(bE(CE(r))),
            this._locationStrategy.onPopState(i => {
                this._subject.next({
                    url: this.path(!0),
                    pop: !0,
                    state: i.state,
                    type: i.type
                })
            }
            )
        }
        ngOnDestroy() {
            this._urlChangeSubscription?.unsubscribe(),
            this._urlChangeListeners = []
        }
        path(n=!1) {
            return this.normalize(this._locationStrategy.path(n))
        }
        getState() {
            return this._locationStrategy.getState()
        }
        isCurrentPathEqualTo(n, r="") {
            return this.path() == this.normalize(n + pn(r))
        }
        normalize(n) {
            return e.stripTrailingSlash(JA(this._basePath, CE(n)))
        }
        prepareExternalUrl(n) {
            return n && n[0] !== "/" && (n = "/" + n),
            this._locationStrategy.prepareExternalUrl(n)
        }
        go(n, r="", i=null) {
            this._locationStrategy.pushState(i, "", n, r),
            this._notifyUrlChangeListeners(this.prepareExternalUrl(n + pn(r)), i)
        }
        replaceState(n, r="", i=null) {
            this._locationStrategy.replaceState(i, "", n, r),
            this._notifyUrlChangeListeners(this.prepareExternalUrl(n + pn(r)), i)
        }
        forward() {
            this._locationStrategy.forward()
        }
        back() {
            this._locationStrategy.back()
        }
        historyGo(n=0) {
            this._locationStrategy.historyGo?.(n)
        }
        onUrlChange(n) {
            return this._urlChangeListeners.push(n),
            this._urlChangeSubscription ??= this.subscribe(r => {
                this._notifyUrlChangeListeners(r.url, r.state)
            }
            ),
            () => {
                let r = this._urlChangeListeners.indexOf(n);
                this._urlChangeListeners.splice(r, 1),
                this._urlChangeListeners.length === 0 && (this._urlChangeSubscription?.unsubscribe(),
                this._urlChangeSubscription = null)
            }
        }
        _notifyUrlChangeListeners(n="", r) {
            this._urlChangeListeners.forEach(i => i(n, r))
        }
        subscribe(n, r, i) {
            return this._subject.subscribe({
                next: n,
                error: r ?? void 0,
                complete: i ?? void 0
            })
        }
        static normalizeQueryParams = pn;
        static joinWithSlash = AE;
        static stripTrailingSlash = bE;
        static \u0275fac = function(r) {
            return new (r || e)(R(uc))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => QA(),
            providedIn: "root"
        })
    }
    return e
}
)();
function QA() {
    return new fi(R(uc))
}
function JA(e, t) {
    if (!e || !t.startsWith(e))
        return t;
    let n = t.substring(e.length);
    return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t
}
function CE(e) {
    return e.replace(/\/index.html$/, "")
}
function XA(e) {
    if (new RegExp("^(https?:)?//").test(e)) {
        let[,n] = e.split(/\/\/[^\/]+/);
        return n
    }
    return e
}
var eN = ( () => {
    class e {
        _viewContainerRef;
        _viewRef = null;
        ngTemplateOutletContext = null;
        ngTemplateOutlet = null;
        ngTemplateOutletInjector = null;
        constructor(n) {
            this._viewContainerRef = n
        }
        ngOnChanges(n) {
            if (this._shouldRecreateView(n)) {
                let r = this._viewContainerRef;
                if (this._viewRef && r.remove(r.indexOf(this._viewRef)),
                !this.ngTemplateOutlet) {
                    this._viewRef = null;
                    return
                }
                let i = this._createContextForwardProxy();
                this._viewRef = r.createEmbeddedView(this.ngTemplateOutlet, i, {
                    injector: this.ngTemplateOutletInjector ?? void 0
                })
            }
        }
        _shouldRecreateView(n) {
            return !!n.ngTemplateOutlet || !!n.ngTemplateOutletInjector
        }
        _createContextForwardProxy() {
            return new Proxy({},{
                set: (n, r, i) => this.ngTemplateOutletContext ? Reflect.set(this.ngTemplateOutletContext, r, i) : !1,
                get: (n, r, i) => {
                    if (this.ngTemplateOutletContext)
                        return Reflect.get(this.ngTemplateOutletContext, r, i)
                }
            })
        }
        static \u0275fac = function(r) {
            return new (r || e)(di(fn))
        }
        ;
        static \u0275dir = Lt({
            type: e,
            selectors: [["", "ngTemplateOutlet", ""]],
            inputs: {
                ngTemplateOutletContext: "ngTemplateOutletContext",
                ngTemplateOutlet: "ngTemplateOutlet",
                ngTemplateOutletInjector: "ngTemplateOutletInjector"
            },
            features: [si]
        })
    }
    return e
}
)();
function jf(e, t) {
    t = encodeURIComponent(t);
    for (let n of e.split(";")) {
        let r = n.indexOf("=")
          , [i,o] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
        if (i.trim() === t)
            return decodeURIComponent(o)
    }
    return null
}
var Ro = class {
}
;
var Uf = "browser";
function ME(e) {
    return e === Uf
}
var Mo = class {
    _doc;
    constructor(t) {
        this._doc = t
    }
    manager
}
  , lc = ( () => {
    class e extends Mo {
        constructor(n) {
            super(n)
        }
        supports(n) {
            return !0
        }
        addEventListener(n, r, i, o) {
            return n.addEventListener(r, i, o),
            () => this.removeEventListener(n, r, i, o)
        }
        removeEventListener(n, r, i, o) {
            return n.removeEventListener(r, i, o)
        }
        static \u0275fac = function(r) {
            return new (r || e)(R(G))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , fc = new E("")
  , Wf = ( () => {
    class e {
        _zone;
        _plugins;
        _eventNameToPlugin = new Map;
        constructor(n, r) {
            this._zone = r,
            n.forEach(s => {
                s.manager = this
            }
            );
            let i = n.filter(s => !(s instanceof lc));
            this._plugins = i.slice().reverse();
            let o = n.find(s => s instanceof lc);
            o && this._plugins.push(o)
        }
        addEventListener(n, r, i, o) {
            return this._findPluginFor(r).addEventListener(n, r, i, o)
        }
        getZone() {
            return this._zone
        }
        _findPluginFor(n) {
            let r = this._eventNameToPlugin.get(n);
            if (r)
                return r;
            if (r = this._plugins.find(o => o.supports(n)),
            !r)
                throw new I(5101,!1);
            return this._eventNameToPlugin.set(n, r),
            r
        }
        static \u0275fac = function(r) {
            return new (r || e)(R(fc),R(F))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , Vf = "ng-app-id";
function OE(e) {
    for (let t of e)
        t.remove()
}
function kE(e, t) {
    let n = t.createElement("style");
    return n.textContent = e,
    n
}
function rN(e, t, n, r) {
    let i = e.head?.querySelectorAll(`style[${Vf}="${t}"],link[${Vf}="${t}"]`);
    if (i)
        for (let o of i)
            o.removeAttribute(Vf),
            o instanceof HTMLLinkElement ? r.set(o.href.slice(o.href.lastIndexOf("/") + 1), {
                usage: 0,
                elements: [o]
            }) : o.textContent && n.set(o.textContent, {
                usage: 0,
                elements: [o]
            })
}
function Hf(e, t) {
    let n = t.createElement("link");
    return n.setAttribute("rel", "stylesheet"),
    n.setAttribute("href", e),
    n
}
var zf = ( () => {
    class e {
        doc;
        appId;
        nonce;
        inline = new Map;
        external = new Map;
        hosts = new Set;
        constructor(n, r, i, o={}) {
            this.doc = n,
            this.appId = r,
            this.nonce = i,
            rN(n, r, this.inline, this.external),
            this.hosts.add(n.head)
        }
        addStyles(n, r) {
            for (let i of n)
                this.addUsage(i, this.inline, kE);
            r?.forEach(i => this.addUsage(i, this.external, Hf))
        }
        removeStyles(n, r) {
            for (let i of n)
                this.removeUsage(i, this.inline);
            r?.forEach(i => this.removeUsage(i, this.external))
        }
        addUsage(n, r, i) {
            let o = r.get(n);
            o ? o.usage++ : r.set(n, {
                usage: 1,
                elements: [...this.hosts].map(s => this.addElement(s, i(n, this.doc)))
            })
        }
        removeUsage(n, r) {
            let i = r.get(n);
            i && (i.usage--,
            i.usage <= 0 && (OE(i.elements),
            r.delete(n)))
        }
        ngOnDestroy() {
            for (let[,{elements: n}] of [...this.inline, ...this.external])
                OE(n);
            this.hosts.clear()
        }
        addHost(n) {
            this.hosts.add(n);
            for (let[r,{elements: i}] of this.inline)
                i.push(this.addElement(n, kE(r, this.doc)));
            for (let[r,{elements: i}] of this.external)
                i.push(this.addElement(n, Hf(r, this.doc)))
        }
        removeHost(n) {
            this.hosts.delete(n)
        }
        addElement(n, r) {
            return this.nonce && r.setAttribute("nonce", this.nonce),
            n.appendChild(r)
        }
        static \u0275fac = function(r) {
            return new (r || e)(R(G),R(ci),R(ui, 8),R(vt))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , Bf = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML"
}
  , Gf = /%COMP%/g;
var PE = "%COMP%"
  , iN = `_nghost-${PE}`
  , oN = `_ngcontent-${PE}`
  , sN = !0
  , aN = new E("",{
    providedIn: "root",
    factory: () => sN
});
function cN(e) {
    return oN.replace(Gf, e)
}
function uN(e) {
    return iN.replace(Gf, e)
}
function LE(e, t) {
    return t.map(n => n.replace(Gf, e))
}
var qf = ( () => {
    class e {
        eventManager;
        sharedStylesHost;
        appId;
        removeStylesOnCompDestroy;
        doc;
        platformId;
        ngZone;
        nonce;
        tracingService;
        rendererByCompId = new Map;
        defaultRenderer;
        platformIsServer;
        constructor(n, r, i, o, s, a, c, u=null, l=null) {
            this.eventManager = n,
            this.sharedStylesHost = r,
            this.appId = i,
            this.removeStylesOnCompDestroy = o,
            this.doc = s,
            this.platformId = a,
            this.ngZone = c,
            this.nonce = u,
            this.tracingService = l,
            this.platformIsServer = !1,
            this.defaultRenderer = new Oo(n,s,c,this.platformIsServer,this.tracingService)
        }
        createRenderer(n, r) {
            if (!n || !r)
                return this.defaultRenderer;
            let i = this.getOrCreateRenderer(n, r);
            return i instanceof dc ? i.applyToHost(n) : i instanceof ko && i.applyStyles(),
            i
        }
        getOrCreateRenderer(n, r) {
            let i = this.rendererByCompId
              , o = i.get(r.id);
            if (!o) {
                let s = this.doc
                  , a = this.ngZone
                  , c = this.eventManager
                  , u = this.sharedStylesHost
                  , l = this.removeStylesOnCompDestroy
                  , d = this.platformIsServer
                  , f = this.tracingService;
                switch (r.encapsulation) {
                case Ot.Emulated:
                    o = new dc(c,u,r,this.appId,l,s,a,d,f);
                    break;
                case Ot.ShadowDom:
                    return new $f(c,u,n,r,s,a,this.nonce,d,f);
                default:
                    o = new ko(c,u,r,l,s,a,d,f);
                    break
                }
                i.set(r.id, o)
            }
            return o
        }
        ngOnDestroy() {
            this.rendererByCompId.clear()
        }
        componentReplaced(n) {
            this.rendererByCompId.delete(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)(R(Wf),R(zf),R(ci),R(aN),R(G),R(vt),R(F),R(ui),R(ln, 8))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , Oo = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(t, n, r, i, o) {
        this.eventManager = t,
        this.doc = n,
        this.ngZone = r,
        this.platformIsServer = i,
        this.tracingService = o
    }
    destroy() {}
    destroyNode = null;
    createElement(t, n) {
        return n ? this.doc.createElementNS(Bf[n] || n, t) : this.doc.createElement(t)
    }
    createComment(t) {
        return this.doc.createComment(t)
    }
    createText(t) {
        return this.doc.createTextNode(t)
    }
    appendChild(t, n) {
        (xE(t) ? t.content : t).appendChild(n)
    }
    insertBefore(t, n, r) {
        t && (xE(t) ? t.content : t).insertBefore(n, r)
    }
    removeChild(t, n) {
        n.remove()
    }
    selectRootElement(t, n) {
        let r = typeof t == "string" ? this.doc.querySelector(t) : t;
        if (!r)
            throw new I(-5104,!1);
        return n || (r.textContent = ""),
        r
    }
    parentNode(t) {
        return t.parentNode
    }
    nextSibling(t) {
        return t.nextSibling
    }
    setAttribute(t, n, r, i) {
        if (i) {
            n = i + ":" + n;
            let o = Bf[i];
            o ? t.setAttributeNS(o, n, r) : t.setAttribute(n, r)
        } else
            t.setAttribute(n, r)
    }
    removeAttribute(t, n, r) {
        if (r) {
            let i = Bf[r];
            i ? t.removeAttributeNS(i, n) : t.removeAttribute(`${r}:${n}`)
        } else
            t.removeAttribute(n)
    }
    addClass(t, n) {
        t.classList.add(n)
    }
    removeClass(t, n) {
        t.classList.remove(n)
    }
    setStyle(t, n, r, i) {
        i & (kt.DashCase | kt.Important) ? t.style.setProperty(n, r, i & kt.Important ? "important" : "") : t.style[n] = r
    }
    removeStyle(t, n, r) {
        r & kt.DashCase ? t.style.removeProperty(n) : t.style[n] = ""
    }
    setProperty(t, n, r) {
        t != null && (t[n] = r)
    }
    setValue(t, n) {
        t.nodeValue = n
    }
    listen(t, n, r, i) {
        if (typeof t == "string" && (t = jt().getGlobalEventTarget(this.doc, t),
        !t))
            throw new I(5102,!1);
        let o = this.decoratePreventDefault(r);
        return this.tracingService?.wrapEventListener && (o = this.tracingService.wrapEventListener(t, n, o)),
        this.eventManager.addEventListener(t, n, o, i)
    }
    decoratePreventDefault(t) {
        return n => {
            if (n === "__ngUnwrap__")
                return t;
            t(n) === !1 && n.preventDefault()
        }
    }
}
;
function xE(e) {
    return e.tagName === "TEMPLATE" && e.content !== void 0
}
var $f = class extends Oo {
    sharedStylesHost;
    hostEl;
    shadowRoot;
    constructor(t, n, r, i, o, s, a, c, u) {
        super(t, o, s, c, u),
        this.sharedStylesHost = n,
        this.hostEl = r,
        this.shadowRoot = r.attachShadow({
            mode: "open"
        }),
        this.sharedStylesHost.addHost(this.shadowRoot);
        let l = i.styles;
        l = LE(i.id, l);
        for (let f of l) {
            let h = document.createElement("style");
            a && h.setAttribute("nonce", a),
            h.textContent = f,
            this.shadowRoot.appendChild(h)
        }
        let d = i.getExternalStyles?.();
        if (d)
            for (let f of d) {
                let h = Hf(f, o);
                a && h.setAttribute("nonce", a),
                this.shadowRoot.appendChild(h)
            }
    }
    nodeOrShadowRoot(t) {
        return t === this.hostEl ? this.shadowRoot : t
    }
    appendChild(t, n) {
        return super.appendChild(this.nodeOrShadowRoot(t), n)
    }
    insertBefore(t, n, r) {
        return super.insertBefore(this.nodeOrShadowRoot(t), n, r)
    }
    removeChild(t, n) {
        return super.removeChild(null, n)
    }
    parentNode(t) {
        return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))
    }
    destroy() {
        this.sharedStylesHost.removeHost(this.shadowRoot)
    }
}
  , ko = class extends Oo {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(t, n, r, i, o, s, a, c, u) {
        super(t, o, s, a, c),
        this.sharedStylesHost = n,
        this.removeStylesOnCompDestroy = i;
        let l = r.styles;
        this.styles = u ? LE(u, l) : l,
        this.styleUrls = r.getExternalStyles?.(u)
    }
    applyStyles() {
        this.sharedStylesHost.addStyles(this.styles, this.styleUrls)
    }
    destroy() {
        this.removeStylesOnCompDestroy && ei.size === 0 && this.sharedStylesHost.removeStyles(this.styles, this.styleUrls)
    }
}
  , dc = class extends ko {
    contentAttr;
    hostAttr;
    constructor(t, n, r, i, o, s, a, c, u) {
        let l = i + "-" + r.id;
        super(t, n, r, o, s, a, c, u, l),
        this.contentAttr = cN(l),
        this.hostAttr = uN(l)
    }
    applyToHost(t) {
        this.applyStyles(),
        this.setAttribute(t, this.hostAttr, "")
    }
    createElement(t, n) {
        let r = super.createElement(t, n);
        return super.setAttribute(r, this.contentAttr, ""),
        r
    }
}
;
var hc = class e extends No {
    supportsDOMEvents = !0;
    static makeCurrent() {
        Lf(new e)
    }
    onAndCancel(t, n, r, i) {
        return t.addEventListener(n, r, i),
        () => {
            t.removeEventListener(n, r, i)
        }
    }
    dispatchEvent(t, n) {
        t.dispatchEvent(n)
    }
    remove(t) {
        t.remove()
    }
    createElement(t, n) {
        return n = n || this.getDefaultDocument(),
        n.createElement(t)
    }
    createHtmlDocument() {
        return document.implementation.createHTMLDocument("fakeTitle")
    }
    getDefaultDocument() {
        return document
    }
    isElementNode(t) {
        return t.nodeType === Node.ELEMENT_NODE
    }
    isShadowRoot(t) {
        return t instanceof DocumentFragment
    }
    getGlobalEventTarget(t, n) {
        return n === "window" ? window : n === "document" ? t : n === "body" ? t.body : null
    }
    getBaseHref(t) {
        let n = lN();
        return n == null ? null : dN(n)
    }
    resetBaseElement() {
        xo = null
    }
    getUserAgent() {
        return window.navigator.userAgent
    }
    getCookie(t) {
        return jf(document.cookie, t)
    }
}
  , xo = null;
function lN() {
    return xo = xo || document.head.querySelector("base"),
    xo ? xo.getAttribute("href") : null
}
function dN(e) {
    return new URL(e,document.baseURI).pathname
}
var fN = ( () => {
    class e {
        build() {
            return new XMLHttpRequest
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)()
  , FE = ["alt", "control", "meta", "shift"]
  , hN = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS"
}
  , pN = {
    alt: e => e.altKey,
    control: e => e.ctrlKey,
    meta: e => e.metaKey,
    shift: e => e.shiftKey
}
  , jE = ( () => {
    class e extends Mo {
        constructor(n) {
            super(n)
        }
        supports(n) {
            return e.parseEventName(n) != null
        }
        addEventListener(n, r, i, o) {
            let s = e.parseEventName(r)
              , a = e.eventCallback(s.fullKey, i, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular( () => jt().onAndCancel(n, s.domEventName, a, o))
        }
        static parseEventName(n) {
            let r = n.toLowerCase().split(".")
              , i = r.shift();
            if (r.length === 0 || !(i === "keydown" || i === "keyup"))
                return null;
            let o = e._normalizeKey(r.pop())
              , s = ""
              , a = r.indexOf("code");
            if (a > -1 && (r.splice(a, 1),
            s = "code."),
            FE.forEach(u => {
                let l = r.indexOf(u);
                l > -1 && (r.splice(l, 1),
                s += u + ".")
            }
            ),
            s += o,
            r.length != 0 || o.length === 0)
                return null;
            let c = {};
            return c.domEventName = i,
            c.fullKey = s,
            c
        }
        static matchEventFullKeyCode(n, r) {
            let i = hN[n.key] || n.key
              , o = "";
            return r.indexOf("code.") > -1 && (i = n.code,
            o = "code."),
            i == null || !i ? !1 : (i = i.toLowerCase(),
            i === " " ? i = "space" : i === "." && (i = "dot"),
            FE.forEach(s => {
                if (s !== i) {
                    let a = pN[s];
                    a(n) && (o += s + ".")
                }
            }
            ),
            o += i,
            o === r)
        }
        static eventCallback(n, r, i) {
            return o => {
                e.matchEventFullKeyCode(o, n) && i.runGuarded( () => r(o))
            }
        }
        static _normalizeKey(n) {
            return n === "esc" ? "escape" : n
        }
        static \u0275fac = function(r) {
            return new (r || e)(R(G))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac
        })
    }
    return e
}
)();
function gN(e, t, n) {
    let r = m({
        rootComponent: e,
        platformRef: n?.platformRef
    }, mN(t));
    return IE(r)
}
function mN(e) {
    return {
        appProviders: [..._N, ...e?.providers ?? []],
        platformProviders: IN
    }
}
function vN() {
    hc.makeCurrent()
}
function yN() {
    return new He
}
function EN() {
    return Gd(document),
    document
}
var IN = [{
    provide: vt,
    useValue: Uf
}, {
    provide: qa,
    useValue: vN,
    multi: !0
}, {
    provide: G,
    useFactory: EN
}];
var _N = [{
    provide: eo,
    useValue: "root"
}, {
    provide: He,
    useFactory: yN
}, {
    provide: fc,
    useClass: lc,
    multi: !0,
    deps: [G]
}, {
    provide: fc,
    useClass: jE,
    multi: !0,
    deps: [G]
}, qf, zf, Wf, {
    provide: xt,
    useExisting: qf
}, {
    provide: Ro,
    useClass: fN
}, []];
var UE = ( () => {
    class e {
        _doc;
        constructor(n) {
            this._doc = n
        }
        getTitle() {
            return this._doc.title
        }
        setTitle(n) {
            this._doc.title = n || ""
        }
        static \u0275fac = function(r) {
            return new (r || e)(R(G))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var VE = () => {}
;
var $E = function(e) {
    let t = []
      , n = 0;
    for (let r = 0; r < e.length; r++) {
        let i = e.charCodeAt(r);
        i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192,
        t[n++] = i & 63 | 128) : (i & 64512) === 55296 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023),
        t[n++] = i >> 18 | 240,
        t[n++] = i >> 12 & 63 | 128,
        t[n++] = i >> 6 & 63 | 128,
        t[n++] = i & 63 | 128) : (t[n++] = i >> 12 | 224,
        t[n++] = i >> 6 & 63 | 128,
        t[n++] = i & 63 | 128)
    }
    return t
}
  , wN = function(e) {
    let t = []
      , n = 0
      , r = 0;
    for (; n < e.length; ) {
        let i = e[n++];
        if (i < 128)
            t[r++] = String.fromCharCode(i);
        else if (i > 191 && i < 224) {
            let o = e[n++];
            t[r++] = String.fromCharCode((i & 31) << 6 | o & 63)
        } else if (i > 239 && i < 365) {
            let o = e[n++]
              , s = e[n++]
              , a = e[n++]
              , c = ((i & 7) << 18 | (o & 63) << 12 | (s & 63) << 6 | a & 63) - 65536;
            t[r++] = String.fromCharCode(55296 + (c >> 10)),
            t[r++] = String.fromCharCode(56320 + (c & 1023))
        } else {
            let o = e[n++]
              , s = e[n++];
            t[r++] = String.fromCharCode((i & 15) << 12 | (o & 63) << 6 | s & 63)
        }
    }
    return t.join("")
}
  , pc = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + "+/="
    },
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + "-_."
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
        if (!Array.isArray(e))
            throw Error("encodeByteArray takes an array as a parameter");
        this.init_();
        let n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_
          , r = [];
        for (let i = 0; i < e.length; i += 3) {
            let o = e[i]
              , s = i + 1 < e.length
              , a = s ? e[i + 1] : 0
              , c = i + 2 < e.length
              , u = c ? e[i + 2] : 0
              , l = o >> 2
              , d = (o & 3) << 4 | a >> 4
              , f = (a & 15) << 2 | u >> 6
              , h = u & 63;
            c || (h = 64,
            s || (f = 64)),
            r.push(n[l], n[d], n[f], n[h])
        }
        return r.join("")
    },
    encodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray($E(e), t)
    },
    decodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : wN(this.decodeStringToByteArray(e, t))
    },
    decodeStringToByteArray(e, t) {
        this.init_();
        let n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_
          , r = [];
        for (let i = 0; i < e.length; ) {
            let o = n[e.charAt(i++)]
              , a = i < e.length ? n[e.charAt(i)] : 0;
            ++i;
            let u = i < e.length ? n[e.charAt(i)] : 64;
            ++i;
            let d = i < e.length ? n[e.charAt(i)] : 64;
            if (++i,
            o == null || a == null || u == null || d == null)
                throw new Yf;
            let f = o << 2 | a >> 4;
            if (r.push(f),
            u !== 64) {
                let h = a << 4 & 240 | u >> 2;
                if (r.push(h),
                d !== 64) {
                    let g = u << 6 & 192 | d;
                    r.push(g)
                }
            }
        }
        return r
    },
    init_() {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {},
            this.charToByteMap_ = {},
            this.byteToCharMapWebSafe_ = {},
            this.charToByteMapWebSafe_ = {};
            for (let e = 0; e < this.ENCODED_VALS.length; e++)
                this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e),
                this.charToByteMap_[this.byteToCharMap_[e]] = e,
                this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e),
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e,
                e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e,
                this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
        }
    }
}
  , Yf = class extends Error {
    constructor() {
        super(...arguments),
        this.name = "DecodeBase64StringError"
    }
}
  , bN = function(e) {
    let t = $E(e);
    return pc.encodeByteArray(t, !0)
}
  , Lo = function(e) {
    return bN(e).replace(/\./g, "")
}
  , gc = function(e) {
    try {
        return pc.decodeString(e, !0)
    } catch (t) {
        console.error("base64Decode failed: ", t)
    }
    return null
};
function WE() {
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global;
    throw new Error("Unable to locate global object.")
}
var CN = () => WE().__FIREBASE_DEFAULTS__
  , TN = () => {
    if (typeof process > "u" || typeof process.env > "u")
        return;
    let e = process.env.__FIREBASE_DEFAULTS__;
    if (e)
        return JSON.parse(e)
}
  , SN = () => {
    if (typeof document > "u")
        return;
    let e;
    try {
        e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
    } catch {
        return
    }
    let t = e && gc(e[1]);
    return t && JSON.parse(t)
}
  , mc = () => {
    try {
        return VE() || CN() || TN() || SN()
    } catch (e) {
        console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
        return
    }
}
  , Qf = e => {
    var t, n;
    return (n = (t = mc()) === null || t === void 0 ? void 0 : t.emulatorHosts) === null || n === void 0 ? void 0 : n[e]
}
  , zE = e => {
    let t = Qf(e);
    if (!t)
        return;
    let n = t.lastIndexOf(":");
    if (n <= 0 || n + 1 === t.length)
        throw new Error(`Invalid host ${t} with no separate hostname and port!`);
    let r = parseInt(t.substring(n + 1), 10);
    return t[0] === "[" ? [t.substring(1, n - 1), r] : [t.substring(0, n), r]
}
  , Jf = () => {
    var e;
    return (e = mc()) === null || e === void 0 ? void 0 : e.config
}
  , Xf = e => {
    var t;
    return (t = mc()) === null || t === void 0 ? void 0 : t[`_${e}`]
}
;
var sr = class {
    constructor() {
        this.reject = () => {}
        ,
        this.resolve = () => {}
        ,
        this.promise = new Promise( (t, n) => {
            this.resolve = t,
            this.reject = n
        }
        )
    }
    wrapCallback(t) {
        return (n, r) => {
            n ? this.reject(n) : this.resolve(r),
            typeof t == "function" && (this.promise.catch( () => {}
            ),
            t.length === 1 ? t(n) : t(n, r))
        }
    }
}
;
function ar(e) {
    try {
        return (e.startsWith("http://") || e.startsWith("https://") ? new URL(e).hostname : e).endsWith(".cloudworkstations.dev")
    } catch {
        return !1
    }
}
async function vc(e) {
    return (await fetch(e, {
        credentials: "include"
    })).ok
}
function q6(e, t) {
    if (e.uid)
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    let n = {
        alg: "none",
        type: "JWT"
    }
      , r = t || "demo-project"
      , i = e.iat || 0
      , o = e.sub || e.user_id;
    if (!o)
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    let s = Object.assign({
        iss: `https://securetoken.google.com/${r}`,
        aud: r,
        iat: i,
        exp: i + 3600,
        auth_time: i,
        sub: o,
        user_id: o,
        firebase: {
            sign_in_provider: "custom",
            identities: {}
        }
    }, e);
    return [Lo(JSON.stringify(n)), Lo(JSON.stringify(s)), ""].join(".")
}
var Po = {};
function AN() {
    let e = {
        prod: [],
        emulator: []
    };
    for (let t of Object.keys(Po))
        Po[t] ? e.emulator.push(t) : e.prod.push(t);
    return e
}
function NN(e) {
    let t = document.getElementById(e)
      , n = !1;
    return t || (t = document.createElement("div"),
    t.setAttribute("id", e),
    n = !0),
    {
        created: n,
        element: t
    }
}
var BE = !1;
function yc(e, t) {
    if (typeof window > "u" || typeof document > "u" || !ar(window.location.host) || Po[e] === t || Po[e] || BE)
        return;
    Po[e] = t;
    function n(f) {
        return `__firebase__banner__${f}`
    }
    let r = "__firebase__banner"
      , o = AN().prod.length > 0;
    function s() {
        let f = document.getElementById(r);
        f && f.remove()
    }
    function a(f) {
        f.style.display = "flex",
        f.style.background = "#7faaf0",
        f.style.position = "fixed",
        f.style.bottom = "5px",
        f.style.left = "5px",
        f.style.padding = ".5em",
        f.style.borderRadius = "5px",
        f.style.alignItems = "center"
    }
    function c(f, h) {
        f.setAttribute("width", "24"),
        f.setAttribute("id", h),
        f.setAttribute("height", "24"),
        f.setAttribute("viewBox", "0 0 24 24"),
        f.setAttribute("fill", "none"),
        f.style.marginLeft = "-6px"
    }
    function u() {
        let f = document.createElement("span");
        return f.style.cursor = "pointer",
        f.style.marginLeft = "16px",
        f.style.fontSize = "24px",
        f.innerHTML = " &times;",
        f.onclick = () => {
            BE = !0,
            s()
        }
        ,
        f
    }
    function l(f, h) {
        f.setAttribute("id", h),
        f.innerText = "Learn more",
        f.href = "https://firebase.google.com/docs/studio/preview-apps#preview-backend",
        f.setAttribute("target", "__blank"),
        f.style.paddingLeft = "5px",
        f.style.textDecoration = "underline"
    }
    function d() {
        let f = NN(r)
          , h = n("text")
          , g = document.getElementById(h) || document.createElement("span")
          , y = n("learnmore")
          , C = document.getElementById(y) || document.createElement("a")
          , _ = n("preprendIcon")
          , ee = document.getElementById(_) || document.createElementNS("http://www.w3.org/2000/svg", "svg");
        if (f.created) {
            let Be = f.element;
            a(Be),
            l(C, y);
            let ys = u();
            c(ee, _),
            Be.append(ee, g, C, ys),
            document.body.appendChild(Be)
        }
        o ? (g.innerText = "Preview backend disconnected.",
        ee.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`) : (ee.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,
        g.innerText = "Preview backend running in this workspace."),
        g.setAttribute("id", h)
    }
    document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", d) : d()
}
function ye() {
    return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : ""
}
function GE() {
    return typeof window < "u" && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())
}
function RN() {
    var e;
    let t = (e = mc()) === null || e === void 0 ? void 0 : e.forceEnvironment;
    if (t === "node")
        return !0;
    if (t === "browser")
        return !1;
    try {
        return Object.prototype.toString.call(global.process) === "[object process]"
    } catch {
        return !1
    }
}
function qE() {
    return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers"
}
function KE() {
    let e = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
    return typeof e == "object" && e.id !== void 0
}
function YE() {
    return typeof navigator == "object" && navigator.product === "ReactNative"
}
function ZE() {
    let e = ye();
    return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0
}
function K6() {
    return !RN() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")
}
function Ec() {
    try {
        return typeof indexedDB == "object"
    } catch {
        return !1
    }
}
function QE() {
    return new Promise( (e, t) => {
        try {
            let n = !0
              , r = "validate-browser-context-for-indexeddb-analytics-module"
              , i = self.indexedDB.open(r);
            i.onsuccess = () => {
                i.result.close(),
                n || self.indexedDB.deleteDatabase(r),
                e(!0)
            }
            ,
            i.onupgradeneeded = () => {
                n = !1
            }
            ,
            i.onerror = () => {
                var o;
                t(((o = i.error) === null || o === void 0 ? void 0 : o.message) || "")
            }
        } catch (n) {
            t(n)
        }
    }
    )
}
var MN = "FirebaseError"
  , Le = class e extends Error {
    constructor(t, n, r) {
        super(n),
        this.code = t,
        this.customData = r,
        this.name = MN,
        Object.setPrototypeOf(this, e.prototype),
        Error.captureStackTrace && Error.captureStackTrace(this, ot.prototype.create)
    }
}
  , ot = class {
    constructor(t, n, r) {
        this.service = t,
        this.serviceName = n,
        this.errors = r
    }
    create(t, ...n) {
        let r = n[0] || {}
          , i = `${this.service}/${t}`
          , o = this.errors[t]
          , s = o ? ON(o, r) : "Error"
          , a = `${this.serviceName}: ${s} (${i}).`;
        return new Le(i,a,r)
    }
}
;
function ON(e, t) {
    return e.replace(kN, (n, r) => {
        let i = t[r];
        return i != null ? String(i) : `<${r}?>`
    }
    )
}
var kN = /\{\$([^}]+)}/g;
function JE(e) {
    for (let t in e)
        if (Object.prototype.hasOwnProperty.call(e, t))
            return !1;
    return !0
}
function gn(e, t) {
    if (e === t)
        return !0;
    let n = Object.keys(e)
      , r = Object.keys(t);
    for (let i of n) {
        if (!r.includes(i))
            return !1;
        let o = e[i]
          , s = t[i];
        if (HE(o) && HE(s)) {
            if (!gn(o, s))
                return !1
        } else if (o !== s)
            return !1
    }
    for (let i of r)
        if (!n.includes(i))
            return !1;
    return !0
}
function HE(e) {
    return e !== null && typeof e == "object"
}
function Fo(e) {
    let t = [];
    for (let[n,r] of Object.entries(e))
        Array.isArray(r) ? r.forEach(i => {
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i))
        }
        ) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
    return t.length ? "&" + t.join("&") : ""
}
function XE(e, t) {
    let n = new Zf(e,t);
    return n.subscribe.bind(n)
}
var Zf = class {
    constructor(t, n) {
        this.observers = [],
        this.unsubscribes = [],
        this.observerCount = 0,
        this.task = Promise.resolve(),
        this.finalized = !1,
        this.onNoObservers = n,
        this.task.then( () => {
            t(this)
        }
        ).catch(r => {
            this.error(r)
        }
        )
    }
    next(t) {
        this.forEachObserver(n => {
            n.next(t)
        }
        )
    }
    error(t) {
        this.forEachObserver(n => {
            n.error(t)
        }
        ),
        this.close(t)
    }
    complete() {
        this.forEachObserver(t => {
            t.complete()
        }
        ),
        this.close()
    }
    subscribe(t, n, r) {
        let i;
        if (t === void 0 && n === void 0 && r === void 0)
            throw new Error("Missing Observer.");
        xN(t, ["next", "error", "complete"]) ? i = t : i = {
            next: t,
            error: n,
            complete: r
        },
        i.next === void 0 && (i.next = Kf),
        i.error === void 0 && (i.error = Kf),
        i.complete === void 0 && (i.complete = Kf);
        let o = this.unsubscribeOne.bind(this, this.observers.length);
        return this.finalized && this.task.then( () => {
            try {
                this.finalError ? i.error(this.finalError) : i.complete()
            } catch {}
        }
        ),
        this.observers.push(i),
        o
    }
    unsubscribeOne(t) {
        this.observers === void 0 || this.observers[t] === void 0 || (delete this.observers[t],
        this.observerCount -= 1,
        this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this))
    }
    forEachObserver(t) {
        if (!this.finalized)
            for (let n = 0; n < this.observers.length; n++)
                this.sendOne(n, t)
    }
    sendOne(t, n) {
        this.task.then( () => {
            if (this.observers !== void 0 && this.observers[t] !== void 0)
                try {
                    n(this.observers[t])
                } catch (r) {
                    typeof console < "u" && console.error && console.error(r)
                }
        }
        )
    }
    close(t) {
        this.finalized || (this.finalized = !0,
        t !== void 0 && (this.finalError = t),
        this.task.then( () => {
            this.observers = void 0,
            this.onNoObservers = void 0
        }
        ))
    }
}
;
function xN(e, t) {
    if (typeof e != "object" || e === null)
        return !1;
    for (let n of t)
        if (n in e && typeof e[n] == "function")
            return !0;
    return !1
}
function Kf() {}
var Y6 = 14400 * 1e3;
function Te(e) {
    return e && e._delegate ? e._delegate : e
}
var De = class {
    constructor(t, n, r) {
        this.name = t,
        this.instanceFactory = n,
        this.type = r,
        this.multipleInstances = !1,
        this.serviceProps = {},
        this.instantiationMode = "LAZY",
        this.onInstanceCreated = null
    }
    setInstantiationMode(t) {
        return this.instantiationMode = t,
        this
    }
    setMultipleInstances(t) {
        return this.multipleInstances = t,
        this
    }
    setServiceProps(t) {
        return this.serviceProps = t,
        this
    }
    setInstanceCreatedCallback(t) {
        return this.onInstanceCreated = t,
        this
    }
}
;
var cr = "[DEFAULT]";
var eh = class {
    constructor(t, n) {
        this.name = t,
        this.container = n,
        this.component = null,
        this.instances = new Map,
        this.instancesDeferred = new Map,
        this.instancesOptions = new Map,
        this.onInitCallbacks = new Map
    }
    get(t) {
        let n = this.normalizeInstanceIdentifier(t);
        if (!this.instancesDeferred.has(n)) {
            let r = new sr;
            if (this.instancesDeferred.set(n, r),
            this.isInitialized(n) || this.shouldAutoInitialize())
                try {
                    let i = this.getOrInitializeService({
                        instanceIdentifier: n
                    });
                    i && r.resolve(i)
                } catch {}
        }
        return this.instancesDeferred.get(n).promise
    }
    getImmediate(t) {
        var n;
        let r = this.normalizeInstanceIdentifier(t?.identifier)
          , i = (n = t?.optional) !== null && n !== void 0 ? n : !1;
        if (this.isInitialized(r) || this.shouldAutoInitialize())
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: r
                })
            } catch (o) {
                if (i)
                    return null;
                throw o
            }
        else {
            if (i)
                return null;
            throw Error(`Service ${this.name} is not available`)
        }
    }
    getComponent() {
        return this.component
    }
    setComponent(t) {
        if (t.name !== this.name)
            throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
        if (this.component)
            throw Error(`Component for ${this.name} has already been provided`);
        if (this.component = t,
        !!this.shouldAutoInitialize()) {
            if (LN(t))
                try {
                    this.getOrInitializeService({
                        instanceIdentifier: cr
                    })
                } catch {}
            for (let[n,r] of this.instancesDeferred.entries()) {
                let i = this.normalizeInstanceIdentifier(n);
                try {
                    let o = this.getOrInitializeService({
                        instanceIdentifier: i
                    });
                    r.resolve(o)
                } catch {}
            }
        }
    }
    clearInstance(t=cr) {
        this.instancesDeferred.delete(t),
        this.instancesOptions.delete(t),
        this.instances.delete(t)
    }
    async delete() {
        let t = Array.from(this.instances.values());
        await Promise.all([...t.filter(n => "INTERNAL"in n).map(n => n.INTERNAL.delete()), ...t.filter(n => "_delete"in n).map(n => n._delete())])
    }
    isComponentSet() {
        return this.component != null
    }
    isInitialized(t=cr) {
        return this.instances.has(t)
    }
    getOptions(t=cr) {
        return this.instancesOptions.get(t) || {}
    }
    initialize(t={}) {
        let {options: n={}} = t
          , r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
        if (this.isInitialized(r))
            throw Error(`${this.name}(${r}) has already been initialized`);
        if (!this.isComponentSet())
            throw Error(`Component ${this.name} has not been registered yet`);
        let i = this.getOrInitializeService({
            instanceIdentifier: r,
            options: n
        });
        for (let[o,s] of this.instancesDeferred.entries()) {
            let a = this.normalizeInstanceIdentifier(o);
            r === a && s.resolve(i)
        }
        return i
    }
    onInit(t, n) {
        var r;
        let i = this.normalizeInstanceIdentifier(n)
          , o = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set;
        o.add(t),
        this.onInitCallbacks.set(i, o);
        let s = this.instances.get(i);
        return s && t(s, i),
        () => {
            o.delete(t)
        }
    }
    invokeOnInitCallbacks(t, n) {
        let r = this.onInitCallbacks.get(n);
        if (r)
            for (let i of r)
                try {
                    i(t, n)
                } catch {}
    }
    getOrInitializeService({instanceIdentifier: t, options: n={}}) {
        let r = this.instances.get(t);
        if (!r && this.component && (r = this.component.instanceFactory(this.container, {
            instanceIdentifier: PN(t),
            options: n
        }),
        this.instances.set(t, r),
        this.instancesOptions.set(t, n),
        this.invokeOnInitCallbacks(r, t),
        this.component.onInstanceCreated))
            try {
                this.component.onInstanceCreated(this.container, t, r)
            } catch {}
        return r || null
    }
    normalizeInstanceIdentifier(t=cr) {
        return this.component ? this.component.multipleInstances ? t : cr : t
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT"
    }
}
;
function PN(e) {
    return e === cr ? void 0 : e
}
function LN(e) {
    return e.instantiationMode === "EAGER"
}
var Ic = class {
    constructor(t) {
        this.name = t,
        this.providers = new Map
    }
    addComponent(t) {
        let n = this.getProvider(t.name);
        if (n.isComponentSet())
            throw new Error(`Component ${t.name} has already been registered with ${this.name}`);
        n.setComponent(t)
    }
    addOrOverwriteComponent(t) {
        this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
        this.addComponent(t)
    }
    getProvider(t) {
        if (this.providers.has(t))
            return this.providers.get(t);
        let n = new eh(t,this);
        return this.providers.set(t, n),
        n
    }
    getProviders() {
        return Array.from(this.providers.values())
    }
}
;
var FN = []
  , W = (function(e) {
    return e[e.DEBUG = 0] = "DEBUG",
    e[e.VERBOSE = 1] = "VERBOSE",
    e[e.INFO = 2] = "INFO",
    e[e.WARN = 3] = "WARN",
    e[e.ERROR = 4] = "ERROR",
    e[e.SILENT = 5] = "SILENT",
    e
}
)(W || {})
  , jN = {
    debug: W.DEBUG,
    verbose: W.VERBOSE,
    info: W.INFO,
    warn: W.WARN,
    error: W.ERROR,
    silent: W.SILENT
}
  , UN = W.INFO
  , VN = {
    [W.DEBUG]: "log",
    [W.VERBOSE]: "log",
    [W.INFO]: "info",
    [W.WARN]: "warn",
    [W.ERROR]: "error"
}
  , BN = (e, t, ...n) => {
    if (t < e.logLevel)
        return;
    let r = new Date().toISOString()
      , i = VN[t];
    if (i)
        console[i](`[${r}]  ${e.name}:`, ...n);
    else
        throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)
}
  , mn = class {
    constructor(t) {
        this.name = t,
        this._logLevel = UN,
        this._logHandler = BN,
        this._userLogHandler = null,
        FN.push(this)
    }
    get logLevel() {
        return this._logLevel
    }
    set logLevel(t) {
        if (!(t in W))
            throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
        this._logLevel = t
    }
    setLogLevel(t) {
        this._logLevel = typeof t == "string" ? jN[t] : t
    }
    get logHandler() {
        return this._logHandler
    }
    set logHandler(t) {
        if (typeof t != "function")
            throw new TypeError("Value assigned to `logHandler` must be a function");
        this._logHandler = t
    }
    get userLogHandler() {
        return this._userLogHandler
    }
    set userLogHandler(t) {
        this._userLogHandler = t
    }
    debug(...t) {
        this._userLogHandler && this._userLogHandler(this, W.DEBUG, ...t),
        this._logHandler(this, W.DEBUG, ...t)
    }
    log(...t) {
        this._userLogHandler && this._userLogHandler(this, W.VERBOSE, ...t),
        this._logHandler(this, W.VERBOSE, ...t)
    }
    info(...t) {
        this._userLogHandler && this._userLogHandler(this, W.INFO, ...t),
        this._logHandler(this, W.INFO, ...t)
    }
    warn(...t) {
        this._userLogHandler && this._userLogHandler(this, W.WARN, ...t),
        this._logHandler(this, W.WARN, ...t)
    }
    error(...t) {
        this._userLogHandler && this._userLogHandler(this, W.ERROR, ...t),
        this._logHandler(this, W.ERROR, ...t)
    }
}
;
var HN = (e, t) => t.some(n => e instanceof n), eI, tI;
function $N() {
    return eI || (eI = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}
function WN() {
    return tI || (tI = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
var nI = new WeakMap
  , nh = new WeakMap
  , rI = new WeakMap
  , th = new WeakMap
  , ih = new WeakMap;
function zN(e) {
    let t = new Promise( (n, r) => {
        let i = () => {
            e.removeEventListener("success", o),
            e.removeEventListener("error", s)
        }
          , o = () => {
            n(yt(e.result)),
            i()
        }
          , s = () => {
            r(e.error),
            i()
        }
        ;
        e.addEventListener("success", o),
        e.addEventListener("error", s)
    }
    );
    return t.then(n => {
        n instanceof IDBCursor && nI.set(n, e)
    }
    ).catch( () => {}
    ),
    ih.set(t, e),
    t
}
function GN(e) {
    if (nh.has(e))
        return;
    let t = new Promise( (n, r) => {
        let i = () => {
            e.removeEventListener("complete", o),
            e.removeEventListener("error", s),
            e.removeEventListener("abort", s)
        }
          , o = () => {
            n(),
            i()
        }
          , s = () => {
            r(e.error || new DOMException("AbortError","AbortError")),
            i()
        }
        ;
        e.addEventListener("complete", o),
        e.addEventListener("error", s),
        e.addEventListener("abort", s)
    }
    );
    nh.set(e, t)
}
var rh = {
    get(e, t, n) {
        if (e instanceof IDBTransaction) {
            if (t === "done")
                return nh.get(e);
            if (t === "objectStoreNames")
                return e.objectStoreNames || rI.get(e);
            if (t === "store")
                return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
        }
        return yt(e[t])
    },
    set(e, t, n) {
        return e[t] = n,
        !0
    },
    has(e, t) {
        return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e
    }
};
function iI(e) {
    rh = e(rh)
}
function qN(e) {
    return e === IDBDatabase.prototype.transaction && !("objectStoreNames"in IDBTransaction.prototype) ? function(t, ...n) {
        let r = e.call(_c(this), t, ...n);
        return rI.set(r, t.sort ? t.sort() : [t]),
        yt(r)
    }
    : WN().includes(e) ? function(...t) {
        return e.apply(_c(this), t),
        yt(nI.get(this))
    }
    : function(...t) {
        return yt(e.apply(_c(this), t))
    }
}
function KN(e) {
    return typeof e == "function" ? qN(e) : (e instanceof IDBTransaction && GN(e),
    HN(e, $N()) ? new Proxy(e,rh) : e)
}
function yt(e) {
    if (e instanceof IDBRequest)
        return zN(e);
    if (th.has(e))
        return th.get(e);
    let t = KN(e);
    return t !== e && (th.set(e, t),
    ih.set(t, e)),
    t
}
var _c = e => ih.get(e);
function sI(e, t, {blocked: n, upgrade: r, blocking: i, terminated: o}={}) {
    let s = indexedDB.open(e, t)
      , a = yt(s);
    return r && s.addEventListener("upgradeneeded", c => {
        r(yt(s.result), c.oldVersion, c.newVersion, yt(s.transaction), c)
    }
    ),
    n && s.addEventListener("blocked", c => n(c.oldVersion, c.newVersion, c)),
    a.then(c => {
        o && c.addEventListener("close", () => o()),
        i && c.addEventListener("versionchange", u => i(u.oldVersion, u.newVersion, u))
    }
    ).catch( () => {}
    ),
    a
}
var YN = ["get", "getKey", "getAll", "getAllKeys", "count"]
  , ZN = ["put", "add", "delete", "clear"]
  , oh = new Map;
function oI(e, t) {
    if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string"))
        return;
    if (oh.get(t))
        return oh.get(t);
    let n = t.replace(/FromIndex$/, "")
      , r = t !== n
      , i = ZN.includes(n);
    if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || YN.includes(n)))
        return;
    let o = async function(s, ...a) {
        let c = this.transaction(s, i ? "readwrite" : "readonly")
          , u = c.store;
        return r && (u = u.index(a.shift())),
        (await Promise.all([u[n](...a), i && c.done]))[0]
    };
    return oh.set(t, o),
    o
}
iI(e => j(m({}, e), {
    get: (t, n, r) => oI(t, n) || e.get(t, n, r),
    has: (t, n) => !!oI(t, n) || e.has(t, n)
}));
var ah = class {
    constructor(t) {
        this.container = t
    }
    getPlatformInfoString() {
        return this.container.getProviders().map(n => {
            if (QN(n)) {
                let r = n.getImmediate();
                return `${r.library}/${r.version}`
            } else
                return null
        }
        ).filter(n => n).join(" ")
    }
}
;
function QN(e) {
    let t = e.getComponent();
    return t?.type === "VERSION"
}
var ch = "@firebase/app"
  , aI = "0.13.2";
var Ut = new mn("@firebase/app")
  , JN = "@firebase/app-compat"
  , XN = "@firebase/analytics-compat"
  , eR = "@firebase/analytics"
  , tR = "@firebase/app-check-compat"
  , nR = "@firebase/app-check"
  , rR = "@firebase/auth"
  , iR = "@firebase/auth-compat"
  , oR = "@firebase/database"
  , sR = "@firebase/data-connect"
  , aR = "@firebase/database-compat"
  , cR = "@firebase/functions"
  , uR = "@firebase/functions-compat"
  , lR = "@firebase/installations"
  , dR = "@firebase/installations-compat"
  , fR = "@firebase/messaging"
  , hR = "@firebase/messaging-compat"
  , pR = "@firebase/performance"
  , gR = "@firebase/performance-compat"
  , mR = "@firebase/remote-config"
  , vR = "@firebase/remote-config-compat"
  , yR = "@firebase/storage"
  , ER = "@firebase/storage-compat"
  , IR = "@firebase/firestore"
  , _R = "@firebase/ai"
  , DR = "@firebase/firestore-compat"
  , wR = "firebase"
  , bR = "11.10.0";
var uh = "[DEFAULT]"
  , CR = {
    [ch]: "fire-core",
    [JN]: "fire-core-compat",
    [eR]: "fire-analytics",
    [XN]: "fire-analytics-compat",
    [nR]: "fire-app-check",
    [tR]: "fire-app-check-compat",
    [rR]: "fire-auth",
    [iR]: "fire-auth-compat",
    [oR]: "fire-rtdb",
    [sR]: "fire-data-connect",
    [aR]: "fire-rtdb-compat",
    [cR]: "fire-fn",
    [uR]: "fire-fn-compat",
    [lR]: "fire-iid",
    [dR]: "fire-iid-compat",
    [fR]: "fire-fcm",
    [hR]: "fire-fcm-compat",
    [pR]: "fire-perf",
    [gR]: "fire-perf-compat",
    [mR]: "fire-rc",
    [vR]: "fire-rc-compat",
    [yR]: "fire-gcs",
    [ER]: "fire-gcs-compat",
    [IR]: "fire-fst",
    [DR]: "fire-fst-compat",
    [_R]: "fire-vertex",
    "fire-js": "fire-js",
    [wR]: "fire-js-all"
};
var jo = new Map
  , TR = new Map
  , lh = new Map;
function cI(e, t) {
    try {
        e.container.addComponent(t)
    } catch (n) {
        Ut.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
    }
}
function st(e) {
    let t = e.name;
    if (lh.has(t))
        return Ut.debug(`There were multiple attempts to register component ${t}.`),
        !1;
    lh.set(t, e);
    for (let n of jo.values())
        cI(n, e);
    for (let n of TR.values())
        cI(n, e);
    return !0
}
function hi(e, t) {
    let n = e.container.getProvider("heartbeat").getImmediate({
        optional: !0
    });
    return n && n.triggerHeartbeat(),
    e.container.getProvider(t)
}
function Fe(e) {
    return e == null ? !1 : e.settings !== void 0
}
var SR = {
    "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options": "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument": "First argument to `onLog` must be null or a function.",
    "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
}
  , vn = new ot("app","Firebase",SR);
var dh = class {
    constructor(t, n, r) {
        this._isDeleted = !1,
        this._options = Object.assign({}, t),
        this._config = Object.assign({}, n),
        this._name = n.name,
        this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled,
        this._container = r,
        this.container.addComponent(new De("app", () => this,"PUBLIC"))
    }
    get automaticDataCollectionEnabled() {
        return this.checkDestroyed(),
        this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(t) {
        this.checkDestroyed(),
        this._automaticDataCollectionEnabled = t
    }
    get name() {
        return this.checkDestroyed(),
        this._name
    }
    get options() {
        return this.checkDestroyed(),
        this._options
    }
    get config() {
        return this.checkDestroyed(),
        this._config
    }
    get container() {
        return this._container
    }
    get isDeleted() {
        return this._isDeleted
    }
    set isDeleted(t) {
        this._isDeleted = t
    }
    checkDestroyed() {
        if (this.isDeleted)
            throw vn.create("app-deleted", {
                appName: this._name
            })
    }
}
;
var pi = bR;
function ph(e, t={}) {
    let n = e;
    typeof t != "object" && (t = {
        name: t
    });
    let r = Object.assign({
        name: uh,
        automaticDataCollectionEnabled: !0
    }, t)
      , i = r.name;
    if (typeof i != "string" || !i)
        throw vn.create("bad-app-name", {
            appName: String(i)
        });
    if (n || (n = Jf()),
    !n)
        throw vn.create("no-options");
    let o = jo.get(i);
    if (o) {
        if (gn(n, o.options) && gn(r, o.config))
            return o;
        throw vn.create("duplicate-app", {
            appName: i
        })
    }
    let s = new Ic(i);
    for (let c of lh.values())
        s.addComponent(c);
    let a = new dh(n,r,s);
    return jo.set(i, a),
    a
}
function ur(e=uh) {
    let t = jo.get(e);
    if (!t && e === uh && Jf())
        return ph();
    if (!t)
        throw vn.create("no-app", {
            appName: e
        });
    return t
}
function Dc() {
    return Array.from(jo.values())
}
function Z(e, t, n) {
    var r;
    let i = (r = CR[e]) !== null && r !== void 0 ? r : e;
    n && (i += `-${n}`);
    let o = i.match(/\s|\//)
      , s = t.match(/\s|\//);
    if (o || s) {
        let a = [`Unable to register library "${i}" with version "${t}":`];
        o && a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),
        o && s && a.push("and"),
        s && a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),
        Ut.warn(a.join(" "));
        return
    }
    st(new De(`${i}-version`, () => ({
        library: i,
        version: t
    }),"VERSION"))
}
var AR = "firebase-heartbeat-database"
  , NR = 1
  , Uo = "firebase-heartbeat-store"
  , sh = null;
function fI() {
    return sh || (sh = sI(AR, NR, {
        upgrade: (e, t) => {
            switch (t) {
            case 0:
                try {
                    e.createObjectStore(Uo)
                } catch (n) {
                    console.warn(n)
                }
            }
        }
    }).catch(e => {
        throw vn.create("idb-open", {
            originalErrorMessage: e.message
        })
    }
    )),
    sh
}
async function RR(e) {
    try {
        let n = (await fI()).transaction(Uo)
          , r = await n.objectStore(Uo).get(hI(e));
        return await n.done,
        r
    } catch (t) {
        if (t instanceof Le)
            Ut.warn(t.message);
        else {
            let n = vn.create("idb-get", {
                originalErrorMessage: t?.message
            });
            Ut.warn(n.message)
        }
    }
}
async function uI(e, t) {
    try {
        let r = (await fI()).transaction(Uo, "readwrite");
        await r.objectStore(Uo).put(t, hI(e)),
        await r.done
    } catch (n) {
        if (n instanceof Le)
            Ut.warn(n.message);
        else {
            let r = vn.create("idb-set", {
                originalErrorMessage: n?.message
            });
            Ut.warn(r.message)
        }
    }
}
function hI(e) {
    return `${e.name}!${e.options.appId}`
}
var MR = 1024
  , OR = 30
  , fh = class {
    constructor(t) {
        this.container = t,
        this._heartbeatsCache = null;
        let n = this.container.getProvider("app").getImmediate();
        this._storage = new hh(n),
        this._heartbeatsCachePromise = this._storage.read().then(r => (this._heartbeatsCache = r,
        r))
    }
    async triggerHeartbeat() {
        var t, n;
        try {
            let i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString()
              , o = lI();
            if (((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise,
            ((n = this._heartbeatsCache) === null || n === void 0 ? void 0 : n.heartbeats) == null) || this._heartbeatsCache.lastSentHeartbeatDate === o || this._heartbeatsCache.heartbeats.some(s => s.date === o))
                return;
            if (this._heartbeatsCache.heartbeats.push({
                date: o,
                agent: i
            }),
            this._heartbeatsCache.heartbeats.length > OR) {
                let s = xR(this._heartbeatsCache.heartbeats);
                this._heartbeatsCache.heartbeats.splice(s, 1)
            }
            return this._storage.overwrite(this._heartbeatsCache)
        } catch (r) {
            Ut.warn(r)
        }
    }
    async getHeartbeatsHeader() {
        var t;
        try {
            if (this._heartbeatsCache === null && await this._heartbeatsCachePromise,
            ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0)
                return "";
            let n = lI()
              , {heartbeatsToSend: r, unsentEntries: i} = kR(this._heartbeatsCache.heartbeats)
              , o = Lo(JSON.stringify({
                version: 2,
                heartbeats: r
            }));
            return this._heartbeatsCache.lastSentHeartbeatDate = n,
            i.length > 0 ? (this._heartbeatsCache.heartbeats = i,
            await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [],
            this._storage.overwrite(this._heartbeatsCache)),
            o
        } catch (n) {
            return Ut.warn(n),
            ""
        }
    }
}
;
function lI() {
    return new Date().toISOString().substring(0, 10)
}
function kR(e, t=MR) {
    let n = []
      , r = e.slice();
    for (let i of e) {
        let o = n.find(s => s.agent === i.agent);
        if (o) {
            if (o.dates.push(i.date),
            dI(n) > t) {
                o.dates.pop();
                break
            }
        } else if (n.push({
            agent: i.agent,
            dates: [i.date]
        }),
        dI(n) > t) {
            n.pop();
            break
        }
        r = r.slice(1)
    }
    return {
        heartbeatsToSend: n,
        unsentEntries: r
    }
}
var hh = class {
    constructor(t) {
        this.app = t,
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
    }
    async runIndexedDBEnvironmentCheck() {
        return Ec() ? QE().then( () => !0).catch( () => !1) : !1
    }
    async read() {
        if (await this._canUseIndexedDBPromise) {
            let n = await RR(this.app);
            return n?.heartbeats ? n : {
                heartbeats: []
            }
        } else
            return {
                heartbeats: []
            }
    }
    async overwrite(t) {
        var n;
        if (await this._canUseIndexedDBPromise) {
            let i = await this.read();
            return uI(this.app, {
                lastSentHeartbeatDate: (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
                heartbeats: t.heartbeats
            })
        } else
            return
    }
    async add(t) {
        var n;
        if (await this._canUseIndexedDBPromise) {
            let i = await this.read();
            return uI(this.app, {
                lastSentHeartbeatDate: (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
                heartbeats: [...i.heartbeats, ...t.heartbeats]
            })
        } else
            return
    }
}
;
function dI(e) {
    return Lo(JSON.stringify({
        version: 2,
        heartbeats: e
    })).length
}
function xR(e) {
    if (e.length === 0)
        return -1;
    let t = 0
      , n = e[0].date;
    for (let r = 1; r < e.length; r++)
        e[r].date < n && (n = e[r].date,
        t = r);
    return t
}
function PR(e) {
    st(new De("platform-logger",t => new ah(t),"PRIVATE")),
    st(new De("heartbeat",t => new fh(t),"PRIVATE")),
    Z(ch, aI, e),
    Z(ch, aI, "esm2017"),
    Z("fire-js", "")
}
PR("");
var LR = "firebase"
  , FR = "11.10.0";
Z(LR, FR, "app");
function pI(e) {
    e === void 0 && (e = p(z));
    let t = e.get(Xn);
    return n => new S(r => {
        let i = t.add()
          , o = !1;
        function s() {
            o || (i(),
            o = !0)
        }
        let a = n.subscribe({
            next: c => {
                r.next(c),
                s()
            }
            ,
            complete: () => {
                r.complete(),
                s()
            }
            ,
            error: c => {
                r.error(c),
                s()
            }
        });
        return a.add( () => {
            r.unsubscribe(),
            s()
        }
        ),
        a
    }
    )
}
var yn = new Br("ANGULARFIRE2_VERSION");
function Vo(e, t, n) {
    if (t) {
        if (t.length === 1)
            return t[0];
        let o = t.filter(s => s.app === n);
        if (o.length === 1)
            return o[0]
    }
    return n.container.getProvider(e).getImmediate({
        optional: !0
    })
}
var mi = (e, t) => {
    let n = t ? [t] : Dc()
      , r = [];
    return n.forEach(i => {
        i.container.getProvider(e).instances.forEach(s => {
            r.includes(s) || r.push(s)
        }
        )
    }
    ),
    r
}
  , gi = (function(e) {
    return e[e.SILENT = 0] = "SILENT",
    e[e.WARN = 1] = "WARN",
    e[e.VERBOSE = 2] = "VERBOSE",
    e
}
)(gi || {})
  , gI = xf() && typeof Zone < "u" ? gi.WARN : gi.SILENT;
var wc = class {
    zone;
    delegate;
    constructor(t, n=Yu) {
        this.zone = t,
        this.delegate = n
    }
    now() {
        return this.delegate.now()
    }
    schedule(t, n, r) {
        let i = this.zone
          , o = function(s) {
            i ? i.runGuarded( () => {
                t.apply(this, [s])
            }
            ) : t.apply(this, [s])
        };
        return this.delegate.schedule(o, n, r)
    }
}
  , En = ( () => {
    class e {
        outsideAngular;
        insideAngular;
        constructor() {
            let n = p(F);
            this.outsideAngular = n.runOutsideAngular( () => new wc(typeof Zone > "u" ? void 0 : Zone.current)),
            this.insideAngular = n.run( () => new wc(typeof Zone > "u" ? void 0 : Zone.current,Kt))
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , mI = !1;
function jR(e, t) {
    !mI && (gI > gi.SILENT || xf()) && (mI = !0,
    console.warn("Calling Firebase APIs outside of an Injection context may destabilize your application leading to subtle change-detection and hydration bugs. Find more at https://github.com/angular/angularfire/blob/main/docs/zones.md")),
    gI >= t && console.warn(`Firebase API called outside injection context: ${e.name}`)
}
function UR(e) {
    let t = p(F, {
        optional: !0
    });
    return t ? t.runOutsideAngular( () => e()) : e()
}
function lr(e) {
    let t = p(F, {
        optional: !0
    });
    return t ? t.run( () => e()) : e()
}
var VR = (e, t, n) => (...r) => (t && setTimeout(t, 0),
ue(n, () => lr( () => e.apply(void 0, r))))
  , je = (e, t, n) => (n ||= t ? gi.WARN : gi.VERBOSE,
function() {
    let r, i = arguments, o, s, a;
    try {
        o = p(En),
        s = p(Xn),
        a = p(Q)
    } catch {
        return jR(e, n),
        e.apply(this, i)
    }
    for (let u = 0; u < arguments.length; u++)
        typeof i[u] == "function" && (t && (r ||= lr( () => s.add())),
        i[u] = VR(i[u], r, a));
    let c = UR( () => e.apply(this, i));
    return t ? c instanceof S ? c.pipe(Zt(o.outsideAngular), Yt(o.insideAngular), pI(a)) : c instanceof Promise ? lr( () => {
        let u = s.add();
        return new Promise( (l, d) => {
            c.then(f => ue(a, () => lr( () => l(f))), f => ue(a, () => lr( () => d(f)))).finally(u)
        }
        )
    }
    ) : typeof c == "function" && r ? function() {
        return setTimeout(r, 0),
        c.apply(this, arguments)
    }
    : lr( () => c) : c instanceof S ? c.pipe(Zt(o.outsideAngular), Yt(o.insideAngular)) : lr( () => c)
}
);
var Vt = class {
    constructor(t) {
        return t
    }
}
  , dr = class {
    constructor() {
        return Dc()
    }
}
;
function BR(e) {
    return e && e.length === 1 ? e[0] : new Vt(ur())
}
var gh = new E("angularfire2._apps")
  , HR = {
    provide: Vt,
    useFactory: BR,
    deps: [[new Pe, gh]]
}
  , $R = {
    provide: dr,
    deps: [[new Pe, gh]]
};
function WR(e) {
    return (t, n) => {
        let r = n.get(vt);
        Z("angularfire", yn.full, "core"),
        Z("angularfire", yn.full, "app"),
        Z("angular", pl.full, r.toString());
        let i = t.runOutsideAngular( () => e(n));
        return new Vt(i)
    }
}
function V4(e, ...t) {
    return Me([HR, $R, {
        provide: gh,
        useFactory: WR(e),
        multi: !0,
        deps: [F, z, En, ...t]
    }])
}
var B4 = je(ph, !0);
var zR = new Map
  , GR = {
    activated: !1,
    tokenObservers: []
}
  , qR = {
    initialized: !1,
    enabled: !1
};
function at(e) {
    return zR.get(e) || Object.assign({}, GR)
}
function II() {
    return qR
}
var KR = "https://content-firebaseappcheck.googleapis.com/v1";
var YR = "exchangeDebugToken"
  , vI = {
    OFFSET_DURATION: 300 * 1e3,
    RETRIAL_MIN_WAIT: 30 * 1e3,
    RETRIAL_MAX_WAIT: 960 * 1e3
}
  , Z4 = 1440 * 60 * 1e3;
var yh = class {
    constructor(t, n, r, i, o) {
        if (this.operation = t,
        this.retryPolicy = n,
        this.getWaitDuration = r,
        this.lowerBound = i,
        this.upperBound = o,
        this.pending = null,
        this.nextErrorWaitInterval = i,
        i > o)
            throw new Error("Proactive refresh lower bound greater than upper bound!")
    }
    start() {
        this.nextErrorWaitInterval = this.lowerBound,
        this.process(!0).catch( () => {}
        )
    }
    stop() {
        this.pending && (this.pending.reject("cancelled"),
        this.pending = null)
    }
    isRunning() {
        return !!this.pending
    }
    async process(t) {
        this.stop();
        try {
            this.pending = new sr,
            this.pending.promise.catch(n => {}
            ),
            await ZR(this.getNextRun(t)),
            this.pending.resolve(),
            await this.pending.promise,
            this.pending = new sr,
            this.pending.promise.catch(n => {}
            ),
            await this.operation(),
            this.pending.resolve(),
            await this.pending.promise,
            this.process(!0).catch( () => {}
            )
        } catch (n) {
            this.retryPolicy(n) ? this.process(!1).catch( () => {}
            ) : this.stop()
        }
    }
    getNextRun(t) {
        if (t)
            return this.nextErrorWaitInterval = this.lowerBound,
            this.getWaitDuration();
        {
            let n = this.nextErrorWaitInterval;
            return this.nextErrorWaitInterval *= 2,
            this.nextErrorWaitInterval > this.upperBound && (this.nextErrorWaitInterval = this.upperBound),
            n
        }
    }
}
;
function ZR(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
var QR = {
    "already-initialized": "You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",
    "use-before-activation": "App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",
    "fetch-network-error": "Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",
    "fetch-parse-error": "Fetch client could not parse response. Original error: {$originalErrorMessage}.",
    "fetch-status-error": "Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",
    "storage-open": "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
    "storage-get": "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
    "storage-set": "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
    "recaptcha-error": "ReCAPTCHA error.",
    "initial-throttle": "{$httpStatus} error. Attempts allowed again after {$time}",
    throttled: "Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"
}
  , In = new ot("appCheck","AppCheck",QR);
function _I(e) {
    if (!at(e).activated)
        throw In.create("use-before-activation", {
            appName: e.name
        })
}
async function DI({url: e, body: t}, n) {
    let r = {
        "Content-Type": "application/json"
    }
      , i = n.getImmediate({
        optional: !0
    });
    if (i) {
        let d = await i.getHeartbeatsHeader();
        d && (r["X-Firebase-Client"] = d)
    }
    let o = {
        method: "POST",
        body: JSON.stringify(t),
        headers: r
    }, s;
    try {
        s = await fetch(e, o)
    } catch (d) {
        throw In.create("fetch-network-error", {
            originalErrorMessage: d?.message
        })
    }
    if (s.status !== 200)
        throw In.create("fetch-status-error", {
            httpStatus: s.status
        });
    let a;
    try {
        a = await s.json()
    } catch (d) {
        throw In.create("fetch-parse-error", {
            originalErrorMessage: d?.message
        })
    }
    let c = a.ttl.match(/^([\d.]+)(s)$/);
    if (!c || !c[2] || isNaN(Number(c[1])))
        throw In.create("fetch-parse-error", {
            originalErrorMessage: `ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`
        });
    let u = Number(c[1]) * 1e3
      , l = Date.now();
    return {
        token: a.token,
        expireTimeMillis: l + u,
        issuedAtTimeMillis: l
    }
}
function wI(e, t) {
    let {projectId: n, appId: r, apiKey: i} = e.options;
    return {
        url: `${KR}/projects/${n}/apps/${r}:${YR}?key=${i}`,
        body: {
            debug_token: t
        }
    }
}
var JR = "firebase-app-check-database"
  , XR = 1
  , Eh = "firebase-app-check-store";
var bc = null;
function eM() {
    return bc || (bc = new Promise( (e, t) => {
        try {
            let n = indexedDB.open(JR, XR);
            n.onsuccess = r => {
                e(r.target.result)
            }
            ,
            n.onerror = r => {
                var i;
                t(In.create("storage-open", {
                    originalErrorMessage: (i = r.target.error) === null || i === void 0 ? void 0 : i.message
                }))
            }
            ,
            n.onupgradeneeded = r => {
                let i = r.target.result;
                switch (r.oldVersion) {
                case 0:
                    i.createObjectStore(Eh, {
                        keyPath: "compositeKey"
                    })
                }
            }
        } catch (n) {
            t(In.create("storage-open", {
                originalErrorMessage: n?.message
            }))
        }
    }
    ),
    bc)
}
function tM(e, t) {
    return nM(rM(e), t)
}
async function nM(e, t) {
    let r = (await eM()).transaction(Eh, "readwrite")
      , o = r.objectStore(Eh).put({
        compositeKey: e,
        value: t
    });
    return new Promise( (s, a) => {
        o.onsuccess = c => {
            s()
        }
        ,
        r.onerror = c => {
            var u;
            a(In.create("storage-set", {
                originalErrorMessage: (u = c.target.error) === null || u === void 0 ? void 0 : u.message
            }))
        }
    }
    )
}
function rM(e) {
    return `${e.options.appId}-${e.name}`
}
var Bo = new mn("@firebase/app-check");
function mh(e, t) {
    return Ec() ? tM(e, t).catch(n => {
        Bo.warn(`Failed to write token to IndexedDB. Error: ${n}`)
    }
    ) : Promise.resolve()
}
function bI() {
    return II().enabled
}
async function CI() {
    let e = II();
    if (e.enabled && e.token)
        return e.token.promise;
    throw Error(`
            Can't get debug token in production mode.
        `)
}
var iM = {
    error: "UNKNOWN_ERROR"
};
function oM(e) {
    return pc.encodeString(JSON.stringify(e), !1)
}
async function Ih(e, t=!1, n=!1) {
    let r = e.app;
    _I(r);
    let i = at(r), o = i.token, s;
    if (o && !Ho(o) && (i.token = void 0,
    o = void 0),
    !o) {
        let u = await i.cachedTokenPromise;
        u && (Ho(u) ? o = u : await mh(r, void 0))
    }
    if (!t && o && Ho(o))
        return {
            token: o.token
        };
    let a = !1;
    if (bI())
        try {
            i.exchangeTokenPromise || (i.exchangeTokenPromise = DI(wI(r, await CI()), e.heartbeatServiceProvider).finally( () => {
                i.exchangeTokenPromise = void 0
            }
            ),
            a = !0);
            let u = await i.exchangeTokenPromise;
            return await mh(r, u),
            i.token = u,
            {
                token: u.token
            }
        } catch (u) {
            return u.code === "appCheck/throttled" || u.code === "appCheck/initial-throttle" ? Bo.warn(u.message) : n && Bo.error(u),
            vh(u)
        }
    try {
        i.exchangeTokenPromise || (i.exchangeTokenPromise = i.provider.getToken().finally( () => {
            i.exchangeTokenPromise = void 0
        }
        ),
        a = !0),
        o = await at(r).exchangeTokenPromise
    } catch (u) {
        u.code === "appCheck/throttled" || u.code === "appCheck/initial-throttle" ? Bo.warn(u.message) : n && Bo.error(u),
        s = u
    }
    let c;
    return o ? s ? Ho(o) ? c = {
        token: o.token,
        internalError: s
    } : c = vh(s) : (c = {
        token: o.token
    },
    i.token = o,
    await mh(r, o)) : c = vh(s),
    a && uM(r, c),
    c
}
async function sM(e) {
    let t = e.app;
    _I(t);
    let {provider: n} = at(t);
    if (bI()) {
        let r = await CI()
          , {token: i} = await DI(wI(t, r), e.heartbeatServiceProvider);
        return {
            token: i
        }
    } else {
        let {token: r} = await n.getToken();
        return {
            token: r
        }
    }
}
function aM(e, t, n, r) {
    let {app: i} = e
      , o = at(i)
      , s = {
        next: n,
        error: r,
        type: t
    };
    if (o.tokenObservers = [...o.tokenObservers, s],
    o.token && Ho(o.token)) {
        let a = o.token;
        Promise.resolve().then( () => {
            n({
                token: a.token
            }),
            yI(e)
        }
        ).catch( () => {}
        )
    }
    o.cachedTokenPromise.then( () => yI(e))
}
function TI(e, t) {
    let n = at(e)
      , r = n.tokenObservers.filter(i => i.next !== t);
    r.length === 0 && n.tokenRefresher && n.tokenRefresher.isRunning() && n.tokenRefresher.stop(),
    n.tokenObservers = r
}
function yI(e) {
    let {app: t} = e
      , n = at(t)
      , r = n.tokenRefresher;
    r || (r = cM(e),
    n.tokenRefresher = r),
    !r.isRunning() && n.isTokenAutoRefreshEnabled && r.start()
}
function cM(e) {
    let {app: t} = e;
    return new yh(async () => {
        let n = at(t), r;
        if (n.token ? r = await Ih(e, !0) : r = await Ih(e),
        r.error)
            throw r.error;
        if (r.internalError)
            throw r.internalError
    }
    , () => !0, () => {
        let n = at(t);
        if (n.token) {
            let r = n.token.issuedAtTimeMillis + (n.token.expireTimeMillis - n.token.issuedAtTimeMillis) * .5 + 3e5
              , i = n.token.expireTimeMillis - 300 * 1e3;
            return r = Math.min(r, i),
            Math.max(0, r - Date.now())
        } else
            return 0
    }
    ,vI.RETRIAL_MIN_WAIT,vI.RETRIAL_MAX_WAIT)
}
function uM(e, t) {
    let n = at(e).tokenObservers;
    for (let r of n)
        try {
            r.type === "EXTERNAL" && t.error != null ? r.error(t.error) : r.next(t)
        } catch {}
}
function Ho(e) {
    return e.expireTimeMillis - Date.now() > 0
}
function vh(e) {
    return {
        token: oM(iM),
        error: e
    }
}
var _h = class {
    constructor(t, n) {
        this.app = t,
        this.heartbeatServiceProvider = n
    }
    _delete() {
        let {tokenObservers: t} = at(this.app);
        for (let n of t)
            TI(this.app, n.next);
        return Promise.resolve()
    }
}
;
function lM(e, t) {
    return new _h(e,t)
}
function dM(e) {
    return {
        getToken: t => Ih(e, t),
        getLimitedUseToken: () => sM(e),
        addTokenListener: t => aM(e, "INTERNAL", t),
        removeTokenListener: t => TI(e.app, t)
    }
}
var fM = "@firebase/app-check"
  , hM = "0.10.1";
var pM = "app-check"
  , EI = "app-check-internal";
function gM() {
    st(new De(pM,e => {
        let t = e.getProvider("app").getImmediate()
          , n = e.getProvider("heartbeat");
        return lM(t, n)
    }
    ,"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback( (e, t, n) => {
        e.getProvider(EI).initialize()
    }
    )),
    st(new De(EI,e => {
        let t = e.getProvider("app-check").getImmediate();
        return dM(t)
    }
    ,"PUBLIC").setInstantiationMode("EXPLICIT")),
    Z(fM, hM)
}
gM();
var mM = "app-check";
var vi = class {
    constructor() {
        return mi(mM)
    }
}
;
var vM = ["localhost", "0.0.0.0", "127.0.0.1"]
  , c5 = typeof window < "u" && vM.includes(window.location.hostname);
function BI() {
    return {
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    }
}
var HI = BI
  , $I = new ot("auth","Firebase",BI());
var Rc = new mn("@firebase/auth");
function yM(e, ...t) {
    Rc.logLevel <= W.WARN && Rc.warn(`Auth (${pi}): ${e}`, ...t)
}
function Tc(e, ...t) {
    Rc.logLevel <= W.ERROR && Rc.error(`Auth (${pi}): ${e}`, ...t)
}
function bn(e, ...t) {
    throw Bh(e, ...t)
}
function fr(e, ...t) {
    return Bh(e, ...t)
}
function WI(e, t, n) {
    let r = Object.assign(Object.assign({}, HI()), {
        [t]: n
    });
    return new ot("auth","Firebase",r).create(t, {
        appName: e.name
    })
}
function wn(e) {
    return WI(e, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp")
}
function Bh(e, ...t) {
    if (typeof e != "string") {
        let n = t[0]
          , r = [...t.slice(1)];
        return r[0] && (r[0].appName = e.name),
        e._errorFactory.create(n, ...r)
    }
    return $I.create(e, ...t)
}
function A(e, t, ...n) {
    if (!e)
        throw Bh(t, ...n)
}
function Bt(e) {
    let t = "INTERNAL ASSERTION FAILED: " + e;
    throw Tc(t),
    new Error(t)
}
function Cn(e, t) {
    e || Bt(t)
}
function Ch() {
    var e;
    return typeof self < "u" && ((e = self.location) === null || e === void 0 ? void 0 : e.href) || ""
}
function EM() {
    return SI() === "http:" || SI() === "https:"
}
function SI() {
    var e;
    return typeof self < "u" && ((e = self.location) === null || e === void 0 ? void 0 : e.protocol) || null
}
function IM() {
    return typeof navigator < "u" && navigator && "onLine"in navigator && typeof navigator.onLine == "boolean" && (EM() || KE() || "connection"in navigator) ? navigator.onLine : !0
}
function _M() {
    if (typeof navigator > "u")
        return null;
    let e = navigator;
    return e.languages && e.languages[0] || e.language || null
}
var hr = class {
    constructor(t, n) {
        this.shortDelay = t,
        this.longDelay = n,
        Cn(n > t, "Short delay should be less than long delay!"),
        this.isMobile = GE() || YE()
    }
    get() {
        return IM() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
    }
}
;
function Hh(e, t) {
    Cn(e.emulator, "Emulator should always be set here");
    let {url: n} = e.emulator;
    return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n
}
var Mc = class {
    static initialize(t, n, r) {
        this.fetchImpl = t,
        n && (this.headersImpl = n),
        r && (this.responseImpl = r)
    }
    static fetch() {
        if (this.fetchImpl)
            return this.fetchImpl;
        if (typeof self < "u" && "fetch"in self)
            return self.fetch;
        if (typeof globalThis < "u" && globalThis.fetch)
            return globalThis.fetch;
        if (typeof fetch < "u")
            return fetch;
        Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static headers() {
        if (this.headersImpl)
            return this.headersImpl;
        if (typeof self < "u" && "Headers"in self)
            return self.Headers;
        if (typeof globalThis < "u" && globalThis.Headers)
            return globalThis.Headers;
        if (typeof Headers < "u")
            return Headers;
        Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
    static response() {
        if (this.responseImpl)
            return this.responseImpl;
        if (typeof self < "u" && "Response"in self)
            return self.Response;
        if (typeof globalThis < "u" && globalThis.Response)
            return globalThis.Response;
        if (typeof Response < "u")
            return Response;
        Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
    }
}
;
var DM = {
    CREDENTIAL_MISMATCH: "custom-token-mismatch",
    MISSING_CUSTOM_TOKEN: "internal-error",
    INVALID_IDENTIFIER: "invalid-email",
    MISSING_CONTINUE_URI: "internal-error",
    INVALID_PASSWORD: "wrong-password",
    MISSING_PASSWORD: "missing-password",
    INVALID_LOGIN_CREDENTIALS: "invalid-credential",
    EMAIL_EXISTS: "email-already-in-use",
    PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
    INVALID_IDP_RESPONSE: "invalid-credential",
    INVALID_PENDING_TOKEN: "invalid-credential",
    FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
    MISSING_REQ_TYPE: "internal-error",
    EMAIL_NOT_FOUND: "user-not-found",
    RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
    EXPIRED_OOB_CODE: "expired-action-code",
    INVALID_OOB_CODE: "invalid-action-code",
    MISSING_OOB_CODE: "internal-error",
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
    INVALID_ID_TOKEN: "invalid-user-token",
    TOKEN_EXPIRED: "user-token-expired",
    USER_NOT_FOUND: "user-token-expired",
    TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
    PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
    INVALID_CODE: "invalid-verification-code",
    INVALID_SESSION_INFO: "invalid-verification-id",
    INVALID_TEMPORARY_PROOF: "invalid-credential",
    MISSING_SESSION_INFO: "missing-verification-id",
    SESSION_EXPIRED: "code-expired",
    MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
    UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
    INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
    ADMIN_ONLY_OPERATION: "admin-restricted-operation",
    INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
    MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
    MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
    MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
    SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
    SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
    BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
    RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
    MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
    INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
    INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
    MISSING_CLIENT_TYPE: "missing-client-type",
    MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
    INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
    INVALID_REQ_TYPE: "invalid-req-type"
};
var wM = ["/v1/accounts:signInWithCustomToken", "/v1/accounts:signInWithEmailLink", "/v1/accounts:signInWithIdp", "/v1/accounts:signInWithPassword", "/v1/accounts:signInWithPhoneNumber", "/v1/token"]
  , bM = new hr(3e4,6e4);
function Hc(e, t) {
    return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), {
        tenantId: e.tenantId
    }) : t
}
async function Ei(e, t, n, r, i={}) {
    return zI(e, i, async () => {
        let o = {}
          , s = {};
        r && (t === "GET" ? s = r : o = {
            body: JSON.stringify(r)
        });
        let a = Fo(Object.assign({
            key: e.config.apiKey
        }, s)).slice(1)
          , c = await e._getAdditionalHeaders();
        c["Content-Type"] = "application/json",
        e.languageCode && (c["X-Firebase-Locale"] = e.languageCode);
        let u = Object.assign({
            method: t,
            headers: c
        }, o);
        return qE() || (u.referrerPolicy = "no-referrer"),
        e.emulatorConfig && ar(e.emulatorConfig.host) && (u.credentials = "include"),
        Mc.fetch()(await qI(e, e.config.apiHost, n, a), u)
    }
    )
}
async function zI(e, t, n) {
    e._canInitEmulator = !1;
    let r = Object.assign(Object.assign({}, DM), t);
    try {
        let i = new Th(e)
          , o = await Promise.race([n(), i.promise]);
        i.clearNetworkTimeout();
        let s = await o.json();
        if ("needConfirmation"in s)
            throw Cc(e, "account-exists-with-different-credential", s);
        if (o.ok && !("errorMessage"in s))
            return s;
        {
            let a = o.ok ? s.errorMessage : s.error.message
              , [c,u] = a.split(" : ");
            if (c === "FEDERATED_USER_ID_ALREADY_LINKED")
                throw Cc(e, "credential-already-in-use", s);
            if (c === "EMAIL_EXISTS")
                throw Cc(e, "email-already-in-use", s);
            if (c === "USER_DISABLED")
                throw Cc(e, "user-disabled", s);
            let l = r[c] || c.toLowerCase().replace(/[_\s]+/g, "-");
            if (u)
                throw WI(e, l, u);
            bn(e, l)
        }
    } catch (i) {
        if (i instanceof Le)
            throw i;
        bn(e, "network-request-failed", {
            message: String(i)
        })
    }
}
async function GI(e, t, n, r, i={}) {
    let o = await Ei(e, t, n, r, i);
    return "mfaPendingCredential"in o && bn(e, "multi-factor-auth-required", {
        _serverResponse: o
    }),
    o
}
async function qI(e, t, n, r) {
    let i = `${t}${n}?${r}`
      , o = e
      , s = o.config.emulator ? Hh(e.config, i) : `${e.config.apiScheme}://${i}`;
    return wM.includes(n) && (await o._persistenceManagerAvailable,
    o._getPersistenceType() === "COOKIE") ? o._getPersistence()._getFinalTarget(s).toString() : s
}
var Th = class {
    clearNetworkTimeout() {
        clearTimeout(this.timer)
    }
    constructor(t) {
        this.auth = t,
        this.timer = null,
        this.promise = new Promise( (n, r) => {
            this.timer = setTimeout( () => r(fr(this.auth, "network-request-failed")), bM.get())
        }
        )
    }
}
;
function Cc(e, t, n) {
    let r = {
        appName: e.name
    };
    n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
    let i = fr(e, t, r);
    return i.customData._tokenResponse = n,
    i
}
async function CM(e, t) {
    return Ei(e, "POST", "/v1/accounts:delete", t)
}
async function Oc(e, t) {
    return Ei(e, "POST", "/v1/accounts:lookup", t)
}
function $o(e) {
    if (e)
        try {
            let t = new Date(Number(e));
            if (!isNaN(t.getTime()))
                return t.toUTCString()
        } catch {}
}
async function $h(e, t=!1) {
    let n = Te(e)
      , r = await n.getIdToken(t)
      , i = Wh(r);
    A(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
    let o = typeof i.firebase == "object" ? i.firebase : void 0
      , s = o?.sign_in_provider;
    return {
        claims: i,
        token: r,
        authTime: $o(Dh(i.auth_time)),
        issuedAtTime: $o(Dh(i.iat)),
        expirationTime: $o(Dh(i.exp)),
        signInProvider: s || null,
        signInSecondFactor: o?.sign_in_second_factor || null
    }
}
function Dh(e) {
    return Number(e) * 1e3
}
function Wh(e) {
    let[t,n,r] = e.split(".");
    if (t === void 0 || n === void 0 || r === void 0)
        return Tc("JWT malformed, contained fewer than 3 sections"),
        null;
    try {
        let i = gc(n);
        return i ? JSON.parse(i) : (Tc("Failed to decode base64 JWT payload"),
        null)
    } catch (i) {
        return Tc("Caught error parsing JWT payload as JSON", i?.toString()),
        null
    }
}
function AI(e) {
    let t = Wh(e);
    return A(t, "internal-error"),
    A(typeof t.exp < "u", "internal-error"),
    A(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
}
async function zo(e, t, n=!1) {
    if (n)
        return t;
    try {
        return await t
    } catch (r) {
        throw r instanceof Le && TM(r) && e.auth.currentUser === e && await e.auth.signOut(),
        r
    }
}
function TM({code: e}) {
    return e === "auth/user-disabled" || e === "auth/user-token-expired"
}
var Sh = class {
    constructor(t) {
        this.user = t,
        this.isRunning = !1,
        this.timerId = null,
        this.errorBackoff = 3e4
    }
    _start() {
        this.isRunning || (this.isRunning = !0,
        this.schedule())
    }
    _stop() {
        this.isRunning && (this.isRunning = !1,
        this.timerId !== null && clearTimeout(this.timerId))
    }
    getInterval(t) {
        var n;
        if (t) {
            let r = this.errorBackoff;
            return this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4),
            r
        } else {
            this.errorBackoff = 3e4;
            let i = ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0 ? n : 0) - Date.now() - 3e5;
            return Math.max(0, i)
        }
    }
    schedule(t=!1) {
        if (!this.isRunning)
            return;
        let n = this.getInterval(t);
        this.timerId = setTimeout(async () => {
            await this.iteration()
        }
        , n)
    }
    async iteration() {
        try {
            await this.user.getIdToken(!0)
        } catch (t) {
            t?.code === "auth/network-request-failed" && this.schedule(!0);
            return
        }
        this.schedule()
    }
}
;
var Go = class {
    constructor(t, n) {
        this.createdAt = t,
        this.lastLoginAt = n,
        this._initializeTime()
    }
    _initializeTime() {
        this.lastSignInTime = $o(this.lastLoginAt),
        this.creationTime = $o(this.createdAt)
    }
    _copy(t) {
        this.createdAt = t.createdAt,
        this.lastLoginAt = t.lastLoginAt,
        this._initializeTime()
    }
    toJSON() {
        return {
            createdAt: this.createdAt,
            lastLoginAt: this.lastLoginAt
        }
    }
}
;
async function kc(e) {
    var t;
    let n = e.auth
      , r = await e.getIdToken()
      , i = await zo(e, Oc(n, {
        idToken: r
    }));
    A(i?.users.length, n, "internal-error");
    let o = i.users[0];
    e._notifyReloadListener(o);
    let s = !((t = o.providerUserInfo) === null || t === void 0) && t.length ? KI(o.providerUserInfo) : []
      , a = SM(e.providerData, s)
      , c = e.isAnonymous
      , u = !(e.email && o.passwordHash) && !a?.length
      , l = c ? u : !1
      , d = {
        uid: o.localId,
        displayName: o.displayName || null,
        photoURL: o.photoUrl || null,
        email: o.email || null,
        emailVerified: o.emailVerified || !1,
        phoneNumber: o.phoneNumber || null,
        tenantId: o.tenantId || null,
        providerData: a,
        metadata: new Go(o.createdAt,o.lastLoginAt),
        isAnonymous: l
    };
    Object.assign(e, d)
}
async function zh(e) {
    let t = Te(e);
    await kc(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t)
}
function SM(e, t) {
    return [...e.filter(r => !t.some(i => i.providerId === r.providerId)), ...t]
}
function KI(e) {
    return e.map(t => {
        var {providerId: n} = t
          , r = Qu(t, ["providerId"]);
        return {
            providerId: n,
            uid: r.rawId || "",
            displayName: r.displayName || null,
            email: r.email || null,
            phoneNumber: r.phoneNumber || null,
            photoURL: r.photoUrl || null
        }
    }
    )
}
async function AM(e, t) {
    let n = await zI(e, {}, async () => {
        let r = Fo({
            grant_type: "refresh_token",
            refresh_token: t
        }).slice(1)
          , {tokenApiHost: i, apiKey: o} = e.config
          , s = await qI(e, i, "/v1/token", `key=${o}`)
          , a = await e._getAdditionalHeaders();
        a["Content-Type"] = "application/x-www-form-urlencoded";
        let c = {
            method: "POST",
            headers: a,
            body: r
        };
        return e.emulatorConfig && ar(e.emulatorConfig.host) && (c.credentials = "include"),
        Mc.fetch()(s, c)
    }
    );
    return {
        accessToken: n.access_token,
        expiresIn: n.expires_in,
        refreshToken: n.refresh_token
    }
}
async function NM(e, t) {
    return Ei(e, "POST", "/v2/accounts:revokeToken", Hc(e, t))
}
var Wo = class e {
    constructor() {
        this.refreshToken = null,
        this.accessToken = null,
        this.expirationTime = null
    }
    get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4
    }
    updateFromServerResponse(t) {
        A(t.idToken, "internal-error"),
        A(typeof t.idToken < "u", "internal-error"),
        A(typeof t.refreshToken < "u", "internal-error");
        let n = "expiresIn"in t && typeof t.expiresIn < "u" ? Number(t.expiresIn) : AI(t.idToken);
        this.updateTokensAndExpiration(t.idToken, t.refreshToken, n)
    }
    updateFromIdToken(t) {
        A(t.length !== 0, "internal-error");
        let n = AI(t);
        this.updateTokensAndExpiration(t, null, n)
    }
    async getToken(t, n=!1) {
        return !n && this.accessToken && !this.isExpired ? this.accessToken : (A(this.refreshToken, t, "user-token-expired"),
        this.refreshToken ? (await this.refresh(t, this.refreshToken),
        this.accessToken) : null)
    }
    clearRefreshToken() {
        this.refreshToken = null
    }
    async refresh(t, n) {
        let {accessToken: r, refreshToken: i, expiresIn: o} = await AM(t, n);
        this.updateTokensAndExpiration(r, i, Number(o))
    }
    updateTokensAndExpiration(t, n, r) {
        this.refreshToken = n || null,
        this.accessToken = t || null,
        this.expirationTime = Date.now() + r * 1e3
    }
    static fromJSON(t, n) {
        let {refreshToken: r, accessToken: i, expirationTime: o} = n
          , s = new e;
        return r && (A(typeof r == "string", "internal-error", {
            appName: t
        }),
        s.refreshToken = r),
        i && (A(typeof i == "string", "internal-error", {
            appName: t
        }),
        s.accessToken = i),
        o && (A(typeof o == "number", "internal-error", {
            appName: t
        }),
        s.expirationTime = o),
        s
    }
    toJSON() {
        return {
            refreshToken: this.refreshToken,
            accessToken: this.accessToken,
            expirationTime: this.expirationTime
        }
    }
    _assign(t) {
        this.accessToken = t.accessToken,
        this.refreshToken = t.refreshToken,
        this.expirationTime = t.expirationTime
    }
    _clone() {
        return Object.assign(new e, this.toJSON())
    }
    _performRefresh() {
        return Bt("not implemented")
    }
}
;
function _n(e, t) {
    A(typeof e == "string" || typeof e > "u", "internal-error", {
        appName: t
    })
}
var Dn = class e {
    constructor(t) {
        var {uid: n, auth: r, stsTokenManager: i} = t
          , o = Qu(t, ["uid", "auth", "stsTokenManager"]);
        this.providerId = "firebase",
        this.proactiveRefresh = new Sh(this),
        this.reloadUserInfo = null,
        this.reloadListener = null,
        this.uid = n,
        this.auth = r,
        this.stsTokenManager = i,
        this.accessToken = i.accessToken,
        this.displayName = o.displayName || null,
        this.email = o.email || null,
        this.emailVerified = o.emailVerified || !1,
        this.phoneNumber = o.phoneNumber || null,
        this.photoURL = o.photoURL || null,
        this.isAnonymous = o.isAnonymous || !1,
        this.tenantId = o.tenantId || null,
        this.providerData = o.providerData ? [...o.providerData] : [],
        this.metadata = new Go(o.createdAt || void 0,o.lastLoginAt || void 0)
    }
    async getIdToken(t) {
        let n = await zo(this, this.stsTokenManager.getToken(this.auth, t));
        return A(n, this.auth, "internal-error"),
        this.accessToken !== n && (this.accessToken = n,
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
        n
    }
    getIdTokenResult(t) {
        return $h(this, t)
    }
    reload() {
        return zh(this)
    }
    _assign(t) {
        this !== t && (A(this.uid === t.uid, this.auth, "internal-error"),
        this.displayName = t.displayName,
        this.photoURL = t.photoURL,
        this.email = t.email,
        this.emailVerified = t.emailVerified,
        this.phoneNumber = t.phoneNumber,
        this.isAnonymous = t.isAnonymous,
        this.tenantId = t.tenantId,
        this.providerData = t.providerData.map(n => Object.assign({}, n)),
        this.metadata._copy(t.metadata),
        this.stsTokenManager._assign(t.stsTokenManager))
    }
    _clone(t) {
        let n = new e(Object.assign(Object.assign({}, this), {
            auth: t,
            stsTokenManager: this.stsTokenManager._clone()
        }));
        return n.metadata._copy(this.metadata),
        n
    }
    _onReload(t) {
        A(!this.reloadListener, this.auth, "internal-error"),
        this.reloadListener = t,
        this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo),
        this.reloadUserInfo = null)
    }
    _notifyReloadListener(t) {
        this.reloadListener ? this.reloadListener(t) : this.reloadUserInfo = t
    }
    _startProactiveRefresh() {
        this.proactiveRefresh._start()
    }
    _stopProactiveRefresh() {
        this.proactiveRefresh._stop()
    }
    async _updateTokensIfNecessary(t, n=!1) {
        let r = !1;
        t.idToken && t.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(t),
        r = !0),
        n && await kc(this),
        await this.auth._persistUserIfCurrent(this),
        r && this.auth._notifyListenersIfCurrent(this)
    }
    async delete() {
        if (Fe(this.auth.app))
            return Promise.reject(wn(this.auth));
        let t = await this.getIdToken();
        return await zo(this, CM(this.auth, {
            idToken: t
        })),
        this.stsTokenManager.clearRefreshToken(),
        this.auth.signOut()
    }
    toJSON() {
        return Object.assign(Object.assign({
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map(t => Object.assign({}, t)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {
            apiKey: this.auth.config.apiKey,
            appName: this.auth.name
        })
    }
    get refreshToken() {
        return this.stsTokenManager.refreshToken || ""
    }
    static _fromJSON(t, n) {
        var r, i, o, s, a, c, u, l;
        let d = (r = n.displayName) !== null && r !== void 0 ? r : void 0
          , f = (i = n.email) !== null && i !== void 0 ? i : void 0
          , h = (o = n.phoneNumber) !== null && o !== void 0 ? o : void 0
          , g = (s = n.photoURL) !== null && s !== void 0 ? s : void 0
          , y = (a = n.tenantId) !== null && a !== void 0 ? a : void 0
          , C = (c = n._redirectEventId) !== null && c !== void 0 ? c : void 0
          , _ = (u = n.createdAt) !== null && u !== void 0 ? u : void 0
          , ee = (l = n.lastLoginAt) !== null && l !== void 0 ? l : void 0
          , {uid: Be, emailVerified: ys, isAnonymous: zp, providerData: Nu, stsTokenManager: Gp} = n;
        A(Be && Gp, t, "internal-error");
        let HD = Wo.fromJSON(this.name, Gp);
        A(typeof Be == "string", t, "internal-error"),
        _n(d, t.name),
        _n(f, t.name),
        A(typeof ys == "boolean", t, "internal-error"),
        A(typeof zp == "boolean", t, "internal-error"),
        _n(h, t.name),
        _n(g, t.name),
        _n(y, t.name),
        _n(C, t.name),
        _n(_, t.name),
        _n(ee, t.name);
        let Ru = new e({
            uid: Be,
            auth: t,
            email: f,
            emailVerified: ys,
            displayName: d,
            isAnonymous: zp,
            photoURL: g,
            phoneNumber: h,
            tenantId: y,
            stsTokenManager: HD,
            createdAt: _,
            lastLoginAt: ee
        });
        return Nu && Array.isArray(Nu) && (Ru.providerData = Nu.map($D => Object.assign({}, $D))),
        C && (Ru._redirectEventId = C),
        Ru
    }
    static async _fromIdTokenResponse(t, n, r=!1) {
        let i = new Wo;
        i.updateFromServerResponse(n);
        let o = new e({
            uid: n.localId,
            auth: t,
            stsTokenManager: i,
            isAnonymous: r
        });
        return await kc(o),
        o
    }
    static async _fromGetAccountInfoResponse(t, n, r) {
        let i = n.users[0];
        A(i.localId !== void 0, "internal-error");
        let o = i.providerUserInfo !== void 0 ? KI(i.providerUserInfo) : []
          , s = !(i.email && i.passwordHash) && !o?.length
          , a = new Wo;
        a.updateFromIdToken(r);
        let c = new e({
            uid: i.localId,
            auth: t,
            stsTokenManager: a,
            isAnonymous: s
        })
          , u = {
            uid: i.localId,
            displayName: i.displayName || null,
            photoURL: i.photoUrl || null,
            email: i.email || null,
            emailVerified: i.emailVerified || !1,
            phoneNumber: i.phoneNumber || null,
            tenantId: i.tenantId || null,
            providerData: o,
            metadata: new Go(i.createdAt,i.lastLoginAt),
            isAnonymous: !(i.email && i.passwordHash) && !o?.length
        };
        return Object.assign(c, u),
        c
    }
}
;
var NI = new Map;
function Ht(e) {
    Cn(e instanceof Function, "Expected a class definition");
    let t = NI.get(e);
    return t ? (Cn(t instanceof e, "Instance stored in cache mismatched with class"),
    t) : (t = new e,
    NI.set(e, t),
    t)
}
var RM = ( () => {
    class e {
        constructor() {
            this.type = "NONE",
            this.storage = {}
        }
        async _isAvailable() {
            return !0
        }
        async _set(n, r) {
            this.storage[n] = r
        }
        async _get(n) {
            let r = this.storage[n];
            return r === void 0 ? null : r
        }
        async _remove(n) {
            delete this.storage[n]
        }
        _addListener(n, r) {}
        _removeListener(n, r) {}
    }
    return e.type = "NONE",
    e
}
)()
  , Ah = RM;
function Sc(e, t, n) {
    return `firebase:${e}:${t}:${n}`
}
var xc = class e {
    constructor(t, n, r) {
        this.persistence = t,
        this.auth = n,
        this.userKey = r;
        let {config: i, name: o} = this.auth;
        this.fullUserKey = Sc(this.userKey, i.apiKey, o),
        this.fullPersistenceKey = Sc("persistence", i.apiKey, o),
        this.boundEventHandler = n._onStorageEvent.bind(n),
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
    }
    setCurrentUser(t) {
        return this.persistence._set(this.fullUserKey, t.toJSON())
    }
    async getCurrentUser() {
        let t = await this.persistence._get(this.fullUserKey);
        if (!t)
            return null;
        if (typeof t == "string") {
            let n = await Oc(this.auth, {
                idToken: t
            }).catch( () => {}
            );
            return n ? Dn._fromGetAccountInfoResponse(this.auth, n, t) : null
        }
        return Dn._fromJSON(this.auth, t)
    }
    removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey)
    }
    savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
    }
    async setPersistence(t) {
        if (this.persistence === t)
            return;
        let n = await this.getCurrentUser();
        if (await this.removeCurrentUser(),
        this.persistence = t,
        n)
            return this.setCurrentUser(n)
    }
    delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
    }
    static async create(t, n, r="authUser") {
        if (!n.length)
            return new e(Ht(Ah),t,r);
        let i = (await Promise.all(n.map(async u => {
            if (await u._isAvailable())
                return u
        }
        ))).filter(u => u)
          , o = i[0] || Ht(Ah)
          , s = Sc(r, t.config.apiKey, t.name)
          , a = null;
        for (let u of n)
            try {
                let l = await u._get(s);
                if (l) {
                    let d;
                    if (typeof l == "string") {
                        let f = await Oc(t, {
                            idToken: l
                        }).catch( () => {}
                        );
                        if (!f)
                            break;
                        d = await Dn._fromGetAccountInfoResponse(t, f, l)
                    } else
                        d = Dn._fromJSON(t, l);
                    u !== o && (a = d),
                    o = u;
                    break
                }
            } catch {}
        let c = i.filter(u => u._shouldAllowMigration);
        return !o._shouldAllowMigration || !c.length ? new e(o,t,r) : (o = c[0],
        a && await o._set(s, a.toJSON()),
        await Promise.all(n.map(async u => {
            if (u !== o)
                try {
                    await u._remove(s)
                } catch {}
        }
        )),
        new e(o,t,r))
    }
}
;
function RI(e) {
    let t = e.toLowerCase();
    if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
        return "Opera";
    if (JI(t))
        return "IEMobile";
    if (t.includes("msie") || t.includes("trident/"))
        return "IE";
    if (t.includes("edge/"))
        return "Edge";
    if (YI(t))
        return "Firefox";
    if (t.includes("silk/"))
        return "Silk";
    if (e_(t))
        return "Blackberry";
    if (t_(t))
        return "Webos";
    if (ZI(t))
        return "Safari";
    if ((t.includes("chrome/") || QI(t)) && !t.includes("edge/"))
        return "Chrome";
    if (XI(t))
        return "Android";
    {
        let n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/
          , r = e.match(n);
        if (r?.length === 2)
            return r[1]
    }
    return "Other"
}
function YI(e=ye()) {
    return /firefox\//i.test(e)
}
function ZI(e=ye()) {
    let t = e.toLowerCase();
    return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android")
}
function QI(e=ye()) {
    return /crios\//i.test(e)
}
function JI(e=ye()) {
    return /iemobile/i.test(e)
}
function XI(e=ye()) {
    return /android/i.test(e)
}
function e_(e=ye()) {
    return /blackberry/i.test(e)
}
function t_(e=ye()) {
    return /webos/i.test(e)
}
function Gh(e=ye()) {
    return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e)
}
function MM(e=ye()) {
    var t;
    return Gh(e) && !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
}
function OM() {
    return ZE() && document.documentMode === 10
}
function n_(e=ye()) {
    return Gh(e) || XI(e) || t_(e) || e_(e) || /windows phone/i.test(e) || JI(e)
}
function r_(e, t=[]) {
    let n;
    switch (e) {
    case "Browser":
        n = RI(ye());
        break;
    case "Worker":
        n = `${RI(ye())}-${e}`;
        break;
    default:
        n = e
    }
    let r = t.length ? t.join(",") : "FirebaseCore-web";
    return `${n}/JsCore/${pi}/${r}`
}
var Nh = class {
    constructor(t) {
        this.auth = t,
        this.queue = []
    }
    pushCallback(t, n) {
        let r = o => new Promise( (s, a) => {
            try {
                let c = t(o);
                s(c)
            } catch (c) {
                a(c)
            }
        }
        );
        r.onAbort = n,
        this.queue.push(r);
        let i = this.queue.length - 1;
        return () => {
            this.queue[i] = () => Promise.resolve()
        }
    }
    async runMiddleware(t) {
        if (this.auth.currentUser === t)
            return;
        let n = [];
        try {
            for (let r of this.queue)
                await r(t),
                r.onAbort && n.push(r.onAbort)
        } catch (r) {
            n.reverse();
            for (let i of n)
                try {
                    i()
                } catch {}
            throw this.auth._errorFactory.create("login-blocked", {
                originalMessage: r?.message
            })
        }
    }
}
;
async function kM(e, t={}) {
    return Ei(e, "GET", "/v2/passwordPolicy", Hc(e, t))
}
var xM = 6
  , Rh = class {
    constructor(t) {
        var n, r, i, o;
        let s = t.customStrengthOptions;
        this.customStrengthOptions = {},
        this.customStrengthOptions.minPasswordLength = (n = s.minPasswordLength) !== null && n !== void 0 ? n : xM,
        s.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = s.maxPasswordLength),
        s.containsLowercaseCharacter !== void 0 && (this.customStrengthOptions.containsLowercaseLetter = s.containsLowercaseCharacter),
        s.containsUppercaseCharacter !== void 0 && (this.customStrengthOptions.containsUppercaseLetter = s.containsUppercaseCharacter),
        s.containsNumericCharacter !== void 0 && (this.customStrengthOptions.containsNumericCharacter = s.containsNumericCharacter),
        s.containsNonAlphanumericCharacter !== void 0 && (this.customStrengthOptions.containsNonAlphanumericCharacter = s.containsNonAlphanumericCharacter),
        this.enforcementState = t.enforcementState,
        this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"),
        this.allowedNonAlphanumericCharacters = (i = (r = t.allowedNonAlphanumericCharacters) === null || r === void 0 ? void 0 : r.join("")) !== null && i !== void 0 ? i : "",
        this.forceUpgradeOnSignin = (o = t.forceUpgradeOnSignin) !== null && o !== void 0 ? o : !1,
        this.schemaVersion = t.schemaVersion
    }
    validatePassword(t) {
        var n, r, i, o, s, a;
        let c = {
            isValid: !0,
            passwordPolicy: this
        };
        return this.validatePasswordLengthOptions(t, c),
        this.validatePasswordCharacterOptions(t, c),
        c.isValid && (c.isValid = (n = c.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
        c.isValid && (c.isValid = (r = c.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
        c.isValid && (c.isValid = (i = c.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
        c.isValid && (c.isValid = (o = c.containsUppercaseLetter) !== null && o !== void 0 ? o : !0),
        c.isValid && (c.isValid = (s = c.containsNumericCharacter) !== null && s !== void 0 ? s : !0),
        c.isValid && (c.isValid = (a = c.containsNonAlphanumericCharacter) !== null && a !== void 0 ? a : !0),
        c
    }
    validatePasswordLengthOptions(t, n) {
        let r = this.customStrengthOptions.minPasswordLength
          , i = this.customStrengthOptions.maxPasswordLength;
        r && (n.meetsMinPasswordLength = t.length >= r),
        i && (n.meetsMaxPasswordLength = t.length <= i)
    }
    validatePasswordCharacterOptions(t, n) {
        this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
        let r;
        for (let i = 0; i < t.length; i++)
            r = t.charAt(i),
            this.updatePasswordCharacterOptionsStatuses(n, r >= "a" && r <= "z", r >= "A" && r <= "Z", r >= "0" && r <= "9", this.allowedNonAlphanumericCharacters.includes(r))
    }
    updatePasswordCharacterOptionsStatuses(t, n, r, i, o) {
        this.customStrengthOptions.containsLowercaseLetter && (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
        this.customStrengthOptions.containsUppercaseLetter && (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
        this.customStrengthOptions.containsNumericCharacter && (t.containsNumericCharacter || (t.containsNumericCharacter = i)),
        this.customStrengthOptions.containsNonAlphanumericCharacter && (t.containsNonAlphanumericCharacter || (t.containsNonAlphanumericCharacter = o))
    }
}
;
var Mh = class {
    constructor(t, n, r, i) {
        this.app = t,
        this.heartbeatServiceProvider = n,
        this.appCheckServiceProvider = r,
        this.config = i,
        this.currentUser = null,
        this.emulatorConfig = null,
        this.operations = Promise.resolve(),
        this.authStateSubscription = new Pc(this),
        this.idTokenSubscription = new Pc(this),
        this.beforeStateQueue = new Nh(this),
        this.redirectUser = null,
        this.isProactiveRefreshEnabled = !1,
        this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1,
        this._canInitEmulator = !0,
        this._isInitialized = !1,
        this._deleted = !1,
        this._initializationPromise = null,
        this._popupRedirectResolver = null,
        this._errorFactory = $I,
        this._agentRecaptchaConfig = null,
        this._tenantRecaptchaConfigs = {},
        this._projectPasswordPolicy = null,
        this._tenantPasswordPolicies = {},
        this._resolvePersistenceManagerAvailable = void 0,
        this.lastNotifiedUid = void 0,
        this.languageCode = null,
        this.tenantId = null,
        this.settings = {
            appVerificationDisabledForTesting: !1
        },
        this.frameworks = [],
        this.name = t.name,
        this.clientVersion = i.sdkClientVersion,
        this._persistenceManagerAvailable = new Promise(o => this._resolvePersistenceManagerAvailable = o)
    }
    _initializeWithPersistence(t, n) {
        return n && (this._popupRedirectResolver = Ht(n)),
        this._initializationPromise = this.queue(async () => {
            var r, i, o;
            if (!this._deleted && (this.persistenceManager = await xc.create(this, t),
            (r = this._resolvePersistenceManagerAvailable) === null || r === void 0 || r.call(this),
            !this._deleted)) {
                if (!((i = this._popupRedirectResolver) === null || i === void 0) && i._shouldInitProactively)
                    try {
                        await this._popupRedirectResolver._initialize(this)
                    } catch {}
                await this.initializeCurrentUser(n),
                this.lastNotifiedUid = ((o = this.currentUser) === null || o === void 0 ? void 0 : o.uid) || null,
                !this._deleted && (this._isInitialized = !0)
            }
        }
        ),
        this._initializationPromise
    }
    async _onStorageEvent() {
        if (this._deleted)
            return;
        let t = await this.assertedPersistence.getCurrentUser();
        if (!(!this.currentUser && !t)) {
            if (this.currentUser && t && this.currentUser.uid === t.uid) {
                this._currentUser._assign(t),
                await this.currentUser.getIdToken();
                return
            }
            await this._updateCurrentUser(t, !0)
        }
    }
    async initializeCurrentUserFromIdToken(t) {
        try {
            let n = await Oc(this, {
                idToken: t
            })
              , r = await Dn._fromGetAccountInfoResponse(this, n, t);
            await this.directlySetCurrentUser(r)
        } catch (n) {
            console.warn("FirebaseServerApp could not login user with provided authIdToken: ", n),
            await this.directlySetCurrentUser(null)
        }
    }
    async initializeCurrentUser(t) {
        var n;
        if (Fe(this.app)) {
            let s = this.app.settings.authIdToken;
            return s ? new Promise(a => {
                setTimeout( () => this.initializeCurrentUserFromIdToken(s).then(a, a))
            }
            ) : this.directlySetCurrentUser(null)
        }
        let r = await this.assertedPersistence.getCurrentUser()
          , i = r
          , o = !1;
        if (t && this.config.authDomain) {
            await this.getOrInitRedirectPersistenceManager();
            let s = (n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId
              , a = i?._redirectEventId
              , c = await this.tryRedirectSignIn(t);
            (!s || s === a) && c?.user && (i = c.user,
            o = !0)
        }
        if (!i)
            return this.directlySetCurrentUser(null);
        if (!i._redirectEventId) {
            if (o)
                try {
                    await this.beforeStateQueue.runMiddleware(i)
                } catch (s) {
                    i = r,
                    this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(s))
                }
            return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null)
        }
        return A(this._popupRedirectResolver, this, "argument-error"),
        await this.getOrInitRedirectPersistenceManager(),
        this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i)
    }
    async tryRedirectSignIn(t) {
        let n = null;
        try {
            n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0)
        } catch {
            await this._setRedirectUser(null)
        }
        return n
    }
    async reloadAndSetCurrentUserOrClear(t) {
        try {
            await kc(t)
        } catch (n) {
            if (n?.code !== "auth/network-request-failed")
                return this.directlySetCurrentUser(null)
        }
        return this.directlySetCurrentUser(t)
    }
    useDeviceLanguage() {
        this.languageCode = _M()
    }
    async _delete() {
        this._deleted = !0
    }
    async updateCurrentUser(t) {
        if (Fe(this.app))
            return Promise.reject(wn(this));
        let n = t ? Te(t) : null;
        return n && A(n.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"),
        this._updateCurrentUser(n && n._clone(this))
    }
    async _updateCurrentUser(t, n=!1) {
        if (!this._deleted)
            return t && A(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
            n || await this.beforeStateQueue.runMiddleware(t),
            this.queue(async () => {
                await this.directlySetCurrentUser(t),
                this.notifyAuthListeners()
            }
            )
    }
    async signOut() {
        return Fe(this.app) ? Promise.reject(wn(this)) : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null),
        this._updateCurrentUser(null, !0))
    }
    setPersistence(t) {
        return Fe(this.app) ? Promise.reject(wn(this)) : this.queue(async () => {
            await this.assertedPersistence.setPersistence(Ht(t))
        }
        )
    }
    _getRecaptchaConfig() {
        return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
    }
    async validatePassword(t) {
        this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
        let n = this._getPasswordPolicyInternal();
        return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : n.validatePassword(t)
    }
    _getPasswordPolicyInternal() {
        return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId]
    }
    async _updatePasswordPolicy() {
        let t = await kM(this)
          , n = new Rh(t);
        this.tenantId === null ? this._projectPasswordPolicy = n : this._tenantPasswordPolicies[this.tenantId] = n
    }
    _getPersistenceType() {
        return this.assertedPersistence.persistence.type
    }
    _getPersistence() {
        return this.assertedPersistence.persistence
    }
    _updateErrorMap(t) {
        this._errorFactory = new ot("auth","Firebase",t())
    }
    onAuthStateChanged(t, n, r) {
        return this.registerStateListener(this.authStateSubscription, t, n, r)
    }
    beforeAuthStateChanged(t, n) {
        return this.beforeStateQueue.pushCallback(t, n)
    }
    onIdTokenChanged(t, n, r) {
        return this.registerStateListener(this.idTokenSubscription, t, n, r)
    }
    authStateReady() {
        return new Promise( (t, n) => {
            if (this.currentUser)
                t();
            else {
                let r = this.onAuthStateChanged( () => {
                    r(),
                    t()
                }
                , n)
            }
        }
        )
    }
    async revokeAccessToken(t) {
        if (this.currentUser) {
            let n = await this.currentUser.getIdToken()
              , r = {
                providerId: "apple.com",
                tokenType: "ACCESS_TOKEN",
                token: t,
                idToken: n
            };
            this.tenantId != null && (r.tenantId = this.tenantId),
            await NM(this, r)
        }
    }
    toJSON() {
        var t;
        return {
            apiKey: this.config.apiKey,
            authDomain: this.config.authDomain,
            appName: this.name,
            currentUser: (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON()
        }
    }
    async _setRedirectUser(t, n) {
        let r = await this.getOrInitRedirectPersistenceManager(n);
        return t === null ? r.removeCurrentUser() : r.setCurrentUser(t)
    }
    async getOrInitRedirectPersistenceManager(t) {
        if (!this.redirectPersistenceManager) {
            let n = t && Ht(t) || this._popupRedirectResolver;
            A(n, this, "argument-error"),
            this.redirectPersistenceManager = await xc.create(this, [Ht(n._redirectPersistence)], "redirectUser"),
            this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
        }
        return this.redirectPersistenceManager
    }
    async _redirectUserForId(t) {
        var n, r;
        return this._isInitialized && await this.queue(async () => {}
        ),
        ((n = this._currentUser) === null || n === void 0 ? void 0 : n._redirectEventId) === t ? this._currentUser : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === t ? this.redirectUser : null
    }
    async _persistUserIfCurrent(t) {
        if (t === this.currentUser)
            return this.queue(async () => this.directlySetCurrentUser(t))
    }
    _notifyListenersIfCurrent(t) {
        t === this.currentUser && this.notifyAuthListeners()
    }
    _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
    }
    _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = !0,
        this.currentUser && this._currentUser._startProactiveRefresh()
    }
    _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = !1,
        this.currentUser && this._currentUser._stopProactiveRefresh()
    }
    get _currentUser() {
        return this.currentUser
    }
    notifyAuthListeners() {
        var t, n;
        if (!this._isInitialized)
            return;
        this.idTokenSubscription.next(this.currentUser);
        let r = (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !== null && n !== void 0 ? n : null;
        this.lastNotifiedUid !== r && (this.lastNotifiedUid = r,
        this.authStateSubscription.next(this.currentUser))
    }
    registerStateListener(t, n, r, i) {
        if (this._deleted)
            return () => {}
            ;
        let o = typeof n == "function" ? n : n.next.bind(n)
          , s = !1
          , a = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        if (A(a, this, "internal-error"),
        a.then( () => {
            s || o(this.currentUser)
        }
        ),
        typeof n == "function") {
            let c = t.addObserver(n, r, i);
            return () => {
                s = !0,
                c()
            }
        } else {
            let c = t.addObserver(n);
            return () => {
                s = !0,
                c()
            }
        }
    }
    async directlySetCurrentUser(t) {
        this.currentUser && this.currentUser !== t && this._currentUser._stopProactiveRefresh(),
        t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
        this.currentUser = t,
        t ? await this.assertedPersistence.setCurrentUser(t) : await this.assertedPersistence.removeCurrentUser()
    }
    queue(t) {
        return this.operations = this.operations.then(t, t),
        this.operations
    }
    get assertedPersistence() {
        return A(this.persistenceManager, this, "internal-error"),
        this.persistenceManager
    }
    _logFramework(t) {
        !t || this.frameworks.includes(t) || (this.frameworks.push(t),
        this.frameworks.sort(),
        this.clientVersion = r_(this.config.clientPlatform, this._getFrameworks()))
    }
    _getFrameworks() {
        return this.frameworks
    }
    async _getAdditionalHeaders() {
        var t;
        let n = {
            "X-Client-Version": this.clientVersion
        };
        this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
        let r = await ((t = this.heartbeatServiceProvider.getImmediate({
            optional: !0
        })) === null || t === void 0 ? void 0 : t.getHeartbeatsHeader());
        r && (n["X-Firebase-Client"] = r);
        let i = await this._getAppCheckToken();
        return i && (n["X-Firebase-AppCheck"] = i),
        n
    }
    async _getAppCheckToken() {
        var t;
        if (Fe(this.app) && this.app.settings.appCheckToken)
            return this.app.settings.appCheckToken;
        let n = await ((t = this.appCheckServiceProvider.getImmediate({
            optional: !0
        })) === null || t === void 0 ? void 0 : t.getToken());
        return n?.error && yM(`Error while retrieving App Check token: ${n.error}`),
        n?.token
    }
}
;
function $c(e) {
    return Te(e)
}
var Pc = class {
    constructor(t) {
        this.auth = t,
        this.observer = null,
        this.addObserver = XE(n => this.observer = n)
    }
    get next() {
        return A(this.observer, this.auth, "internal-error"),
        this.observer.next.bind(this.observer)
    }
}
;
var qh = {
    async loadJS() {
        throw new Error("Unable to load external scripts")
    },
    recaptchaV2Script: "",
    recaptchaEnterpriseScript: "",
    gapiScript: ""
};
function PM(e) {
    qh = e
}
function LM(e) {
    return qh.loadJS(e)
}
function FM() {
    return qh.gapiScript
}
function i_(e) {
    return `__${e}${Math.floor(Math.random() * 1e6)}`
}
function Kh(e, t) {
    let n = hi(e, "auth");
    if (n.isInitialized()) {
        let i = n.getImmediate()
          , o = n.getOptions();
        if (gn(o, t ?? {}))
            return i;
        bn(i, "already-initialized")
    }
    return n.initialize({
        options: t
    })
}
function jM(e, t) {
    let n = t?.persistence || []
      , r = (Array.isArray(n) ? n : [n]).map(Ht);
    t?.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(r, t?.popupRedirectResolver)
}
function Wc(e, t, n) {
    let r = $c(e);
    A(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
    let i = !!n?.disableWarnings
      , o = o_(t)
      , {host: s, port: a} = UM(t)
      , c = a === null ? "" : `:${a}`
      , u = {
        url: `${o}//${s}${c}/`
    }
      , l = Object.freeze({
        host: s,
        port: a,
        protocol: o.replace(":", ""),
        options: Object.freeze({
            disableWarnings: i
        })
    });
    if (!r._canInitEmulator) {
        A(r.config.emulator && r.emulatorConfig, r, "emulator-config-failed"),
        A(gn(u, r.config.emulator) && gn(l, r.emulatorConfig), r, "emulator-config-failed");
        return
    }
    r.config.emulator = u,
    r.emulatorConfig = l,
    r.settings.appVerificationDisabledForTesting = !0,
    ar(s) ? (vc(`${o}//${s}${c}`),
    yc("Auth", !0)) : i || VM()
}
function o_(e) {
    let t = e.indexOf(":");
    return t < 0 ? "" : e.substr(0, t + 1)
}
function UM(e) {
    let t = o_(e)
      , n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
    if (!n)
        return {
            host: "",
            port: null
        };
    let r = n[2].split("@").pop() || ""
      , i = /^(\[[^\]]+\])(:|$)/.exec(r);
    if (i) {
        let o = i[1];
        return {
            host: o,
            port: MI(r.substr(o.length + 1))
        }
    } else {
        let[o,s] = r.split(":");
        return {
            host: o,
            port: MI(s)
        }
    }
}
function MI(e) {
    if (!e)
        return null;
    let t = Number(e);
    return isNaN(t) ? null : t
}
function VM() {
    function e() {
        let t = document.createElement("p")
          , n = t.style;
        t.innerText = "Running in emulator mode. Do not use with production credentials.",
        n.position = "fixed",
        n.width = "100%",
        n.backgroundColor = "#ffffff",
        n.border = ".1em solid #000000",
        n.color = "#b50000",
        n.bottom = "0px",
        n.left = "0px",
        n.margin = "0px",
        n.zIndex = "10000",
        n.textAlign = "center",
        t.classList.add("firebase-emulator-warning"),
        document.body.appendChild(t)
    }
    typeof console < "u" && typeof console.info == "function" && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),
    typeof window < "u" && typeof document < "u" && (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", e) : e())
}
var Lc = class {
    constructor(t, n) {
        this.providerId = t,
        this.signInMethod = n
    }
    toJSON() {
        return Bt("not implemented")
    }
    _getIdTokenResponse(t) {
        return Bt("not implemented")
    }
    _linkToIdToken(t, n) {
        return Bt("not implemented")
    }
    _getReauthenticationResolver(t) {
        return Bt("not implemented")
    }
}
;
async function wh(e, t) {
    return GI(e, "POST", "/v1/accounts:signInWithIdp", Hc(e, t))
}
var Fc = class {
    constructor(t) {
        this.providerId = t,
        this.defaultLanguageCode = null,
        this.customParameters = {}
    }
    setDefaultLanguage(t) {
        this.defaultLanguageCode = t
    }
    setCustomParameters(t) {
        return this.customParameters = t,
        this
    }
    getCustomParameters() {
        return this.customParameters
    }
}
;
var Oh = class extends Fc {
    constructor() {
        super(...arguments),
        this.scopes = []
    }
    addScope(t) {
        return this.scopes.includes(t) || this.scopes.push(t),
        this
    }
    getScopes() {
        return [...this.scopes]
    }
}
;
var yi = class e {
    constructor(t) {
        this.user = t.user,
        this.providerId = t.providerId,
        this._tokenResponse = t._tokenResponse,
        this.operationType = t.operationType
    }
    static async _fromIdTokenResponse(t, n, r, i=!1) {
        let o = await Dn._fromIdTokenResponse(t, r, i)
          , s = OI(r);
        return new e({
            user: o,
            providerId: s,
            _tokenResponse: r,
            operationType: n
        })
    }
    static async _forOperation(t, n, r) {
        await t._updateTokensIfNecessary(r, !0);
        let i = OI(r);
        return new e({
            user: t,
            providerId: i,
            _tokenResponse: r,
            operationType: n
        })
    }
}
;
function OI(e) {
    return e.providerId ? e.providerId : "phoneNumber"in e ? "phone" : null
}
var kh = class e extends Le {
    constructor(t, n, r, i) {
        var o;
        super(n.code, n.message),
        this.operationType = r,
        this.user = i,
        Object.setPrototypeOf(this, e.prototype),
        this.customData = {
            appName: t.name,
            tenantId: (o = t.tenantId) !== null && o !== void 0 ? o : void 0,
            _serverResponse: n.customData._serverResponse,
            operationType: r
        }
    }
    static _fromErrorAndOperation(t, n, r, i) {
        return new e(t,n,r,i)
    }
}
;
function s_(e, t, n, r) {
    return (t === "reauthenticate" ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch(o => {
        throw o.code === "auth/multi-factor-auth-required" ? kh._fromErrorAndOperation(e, o, t, r) : o
    }
    )
}
async function BM(e, t, n=!1) {
    let r = await zo(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
    return yi._forOperation(e, "link", r)
}
async function HM(e, t, n=!1) {
    let {auth: r} = e;
    if (Fe(r.app))
        return Promise.reject(wn(r));
    let i = "reauthenticate";
    try {
        let o = await zo(e, s_(r, i, t, e), n);
        A(o.idToken, r, "internal-error");
        let s = Wh(o.idToken);
        A(s, r, "internal-error");
        let {sub: a} = s;
        return A(e.uid === a, r, "user-mismatch"),
        yi._forOperation(e, i, o)
    } catch (o) {
        throw o?.code === "auth/user-not-found" && bn(r, "user-mismatch"),
        o
    }
}
async function $M(e, t, n=!1) {
    if (Fe(e.app))
        return Promise.reject(wn(e));
    let r = "signIn"
      , i = await s_(e, r, t)
      , o = await yi._fromIdTokenResponse(e, r, i);
    return n || await e._updateCurrentUser(o.user),
    o
}
async function WM(e, t) {
    return GI(e, "POST", "/v1/accounts:signInWithCustomToken", Hc(e, t))
}
async function Yh(e, t) {
    if (Fe(e.app))
        return Promise.reject(wn(e));
    let n = $c(e)
      , r = await WM(n, {
        token: t,
        returnSecureToken: !0
    })
      , i = await yi._fromIdTokenResponse(n, "signIn", r);
    return await n._updateCurrentUser(i.user),
    i
}
function zc(e, t, n, r) {
    return Te(e).onIdTokenChanged(t, n, r)
}
function Zh(e, t, n) {
    return Te(e).beforeAuthStateChanged(t, n)
}
function Gc(e, t, n, r) {
    return Te(e).onAuthStateChanged(t, n, r)
}
function Qh(e) {
    return Te(e).signOut()
}
var jc = "__sak";
var Uc = class {
    constructor(t, n) {
        this.storageRetriever = t,
        this.type = n
    }
    _isAvailable() {
        try {
            return this.storage ? (this.storage.setItem(jc, "1"),
            this.storage.removeItem(jc),
            Promise.resolve(!0)) : Promise.resolve(!1)
        } catch {
            return Promise.resolve(!1)
        }
    }
    _set(t, n) {
        return this.storage.setItem(t, JSON.stringify(n)),
        Promise.resolve()
    }
    _get(t) {
        let n = this.storage.getItem(t);
        return Promise.resolve(n ? JSON.parse(n) : null)
    }
    _remove(t) {
        return this.storage.removeItem(t),
        Promise.resolve()
    }
    get storage() {
        return this.storageRetriever()
    }
}
;
var zM = 1e3
  , GM = 10
  , qM = ( () => {
    class e extends Uc {
        constructor() {
            super( () => window.localStorage, "LOCAL"),
            this.boundEventHandler = (n, r) => this.onStorageEvent(n, r),
            this.listeners = {},
            this.localCache = {},
            this.pollTimer = null,
            this.fallbackToPolling = n_(),
            this._shouldAllowMigration = !0
        }
        forAllChangedKeys(n) {
            for (let r of Object.keys(this.listeners)) {
                let i = this.storage.getItem(r)
                  , o = this.localCache[r];
                i !== o && n(r, o, i)
            }
        }
        onStorageEvent(n, r=!1) {
            if (!n.key) {
                this.forAllChangedKeys( (a, c, u) => {
                    this.notifyListeners(a, u)
                }
                );
                return
            }
            let i = n.key;
            r ? this.detachListener() : this.stopPolling();
            let o = () => {
                let a = this.storage.getItem(i);
                !r && this.localCache[i] === a || this.notifyListeners(i, a)
            }
              , s = this.storage.getItem(i);
            OM() && s !== n.newValue && n.newValue !== n.oldValue ? setTimeout(o, GM) : o()
        }
        notifyListeners(n, r) {
            this.localCache[n] = r;
            let i = this.listeners[n];
            if (i)
                for (let o of Array.from(i))
                    o(r && JSON.parse(r))
        }
        startPolling() {
            this.stopPolling(),
            this.pollTimer = setInterval( () => {
                this.forAllChangedKeys( (n, r, i) => {
                    this.onStorageEvent(new StorageEvent("storage",{
                        key: n,
                        oldValue: r,
                        newValue: i
                    }), !0)
                }
                )
            }
            , zM)
        }
        stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer),
            this.pollTimer = null)
        }
        attachListener() {
            window.addEventListener("storage", this.boundEventHandler)
        }
        detachListener() {
            window.removeEventListener("storage", this.boundEventHandler)
        }
        _addListener(n, r) {
            Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
            this.listeners[n] || (this.listeners[n] = new Set,
            this.localCache[n] = this.storage.getItem(n)),
            this.listeners[n].add(r)
        }
        _removeListener(n, r) {
            this.listeners[n] && (this.listeners[n].delete(r),
            this.listeners[n].size === 0 && delete this.listeners[n]),
            Object.keys(this.listeners).length === 0 && (this.detachListener(),
            this.stopPolling())
        }
        async _set(n, r) {
            await super._set(n, r),
            this.localCache[n] = JSON.stringify(r)
        }
        async _get(n) {
            let r = await super._get(n);
            return this.localCache[n] = JSON.stringify(r),
            r
        }
        async _remove(n) {
            await super._remove(n),
            delete this.localCache[n]
        }
    }
    return e.type = "LOCAL",
    e
}
)()
  , a_ = qM;
var KM = ( () => {
    class e extends Uc {
        constructor() {
            super( () => window.sessionStorage, "SESSION")
        }
        _addListener(n, r) {}
        _removeListener(n, r) {}
    }
    return e.type = "SESSION",
    e
}
)()
  , Jh = KM;
function YM(e) {
    return Promise.all(e.map(async t => {
        try {
            return {
                fulfilled: !0,
                value: await t
            }
        } catch (n) {
            return {
                fulfilled: !1,
                reason: n
            }
        }
    }
    ))
}
var ZM = ( () => {
    class e {
        constructor(n) {
            this.eventTarget = n,
            this.handlersMap = {},
            this.boundEventHandler = this.handleEvent.bind(this)
        }
        static _getInstance(n) {
            let r = this.receivers.find(o => o.isListeningto(n));
            if (r)
                return r;
            let i = new e(n);
            return this.receivers.push(i),
            i
        }
        isListeningto(n) {
            return this.eventTarget === n
        }
        async handleEvent(n) {
            let r = n
              , {eventId: i, eventType: o, data: s} = r.data
              , a = this.handlersMap[o];
            if (!a?.size)
                return;
            r.ports[0].postMessage({
                status: "ack",
                eventId: i,
                eventType: o
            });
            let c = Array.from(a).map(async l => l(r.origin, s))
              , u = await YM(c);
            r.ports[0].postMessage({
                status: "done",
                eventId: i,
                eventType: o,
                response: u
            })
        }
        _subscribe(n, r) {
            Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler),
            this.handlersMap[n] || (this.handlersMap[n] = new Set),
            this.handlersMap[n].add(r)
        }
        _unsubscribe(n, r) {
            this.handlersMap[n] && r && this.handlersMap[n].delete(r),
            (!r || this.handlersMap[n].size === 0) && delete this.handlersMap[n],
            Object.keys(this.handlersMap).length === 0 && this.eventTarget.removeEventListener("message", this.boundEventHandler)
        }
    }
    e.receivers = [];
    return e
}
)();
function c_(e="", t=10) {
    let n = "";
    for (let r = 0; r < t; r++)
        n += Math.floor(Math.random() * 10);
    return e + n
}
var xh = class {
    constructor(t) {
        this.target = t,
        this.handlers = new Set
    }
    removeMessageHandler(t) {
        t.messageChannel && (t.messageChannel.port1.removeEventListener("message", t.onMessage),
        t.messageChannel.port1.close()),
        this.handlers.delete(t)
    }
    async _send(t, n, r=50) {
        let i = typeof MessageChannel < "u" ? new MessageChannel : null;
        if (!i)
            throw new Error("connection_unavailable");
        let o, s;
        return new Promise( (a, c) => {
            let u = c_("", 20);
            i.port1.start();
            let l = setTimeout( () => {
                c(new Error("unsupported_event"))
            }
            , r);
            s = {
                messageChannel: i,
                onMessage(d) {
                    let f = d;
                    if (f.data.eventId === u)
                        switch (f.data.status) {
                        case "ack":
                            clearTimeout(l),
                            o = setTimeout( () => {
                                c(new Error("timeout"))
                            }
                            , 3e3);
                            break;
                        case "done":
                            clearTimeout(o),
                            a(f.data.response);
                            break;
                        default:
                            clearTimeout(l),
                            clearTimeout(o),
                            c(new Error("invalid_response"));
                            break
                        }
                }
            },
            this.handlers.add(s),
            i.port1.addEventListener("message", s.onMessage),
            this.target.postMessage({
                eventType: t,
                eventId: u,
                data: n
            }, [i.port2])
        }
        ).finally( () => {
            s && this.removeMessageHandler(s)
        }
        )
    }
}
;
function Et() {
    return window
}
function QM(e) {
    Et().location.href = e
}
function u_() {
    return typeof Et().WorkerGlobalScope < "u" && typeof Et().importScripts == "function"
}
async function JM() {
    if (!navigator?.serviceWorker)
        return null;
    try {
        return (await navigator.serviceWorker.ready).active
    } catch {
        return null
    }
}
function XM() {
    var e;
    return ((e = navigator?.serviceWorker) === null || e === void 0 ? void 0 : e.controller) || null
}
function e0() {
    return u_() ? self : null
}
var l_ = "firebaseLocalStorageDb"
  , t0 = 1
  , Vc = "firebaseLocalStorage"
  , d_ = "fbase_key"
  , pr = class {
    constructor(t) {
        this.request = t
    }
    toPromise() {
        return new Promise( (t, n) => {
            this.request.addEventListener("success", () => {
                t(this.request.result)
            }
            ),
            this.request.addEventListener("error", () => {
                n(this.request.error)
            }
            )
        }
        )
    }
}
;
function qc(e, t) {
    return e.transaction([Vc], t ? "readwrite" : "readonly").objectStore(Vc)
}
function n0() {
    let e = indexedDB.deleteDatabase(l_);
    return new pr(e).toPromise()
}
function Ph() {
    let e = indexedDB.open(l_, t0);
    return new Promise( (t, n) => {
        e.addEventListener("error", () => {
            n(e.error)
        }
        ),
        e.addEventListener("upgradeneeded", () => {
            let r = e.result;
            try {
                r.createObjectStore(Vc, {
                    keyPath: d_
                })
            } catch (i) {
                n(i)
            }
        }
        ),
        e.addEventListener("success", async () => {
            let r = e.result;
            r.objectStoreNames.contains(Vc) ? t(r) : (r.close(),
            await n0(),
            t(await Ph()))
        }
        )
    }
    )
}
async function kI(e, t, n) {
    let r = qc(e, !0).put({
        [d_]: t,
        value: n
    });
    return new pr(r).toPromise()
}
async function r0(e, t) {
    let n = qc(e, !1).get(t)
      , r = await new pr(n).toPromise();
    return r === void 0 ? null : r.value
}
function xI(e, t) {
    let n = qc(e, !0).delete(t);
    return new pr(n).toPromise()
}
var i0 = 800
  , o0 = 3
  , s0 = ( () => {
    class e {
        constructor() {
            this.type = "LOCAL",
            this._shouldAllowMigration = !0,
            this.listeners = {},
            this.localCache = {},
            this.pollTimer = null,
            this.pendingWrites = 0,
            this.receiver = null,
            this.sender = null,
            this.serviceWorkerReceiverAvailable = !1,
            this.activeServiceWorker = null,
            this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then( () => {}
            , () => {}
            )
        }
        async _openDb() {
            return this.db ? this.db : (this.db = await Ph(),
            this.db)
        }
        async _withRetries(n) {
            let r = 0;
            for (; ; )
                try {
                    let i = await this._openDb();
                    return await n(i)
                } catch (i) {
                    if (r++ > o0)
                        throw i;
                    this.db && (this.db.close(),
                    this.db = void 0)
                }
        }
        async initializeServiceWorkerMessaging() {
            return u_() ? this.initializeReceiver() : this.initializeSender()
        }
        async initializeReceiver() {
            this.receiver = ZM._getInstance(e0()),
            this.receiver._subscribe("keyChanged", async (n, r) => ({
                keyProcessed: (await this._poll()).includes(r.key)
            })),
            this.receiver._subscribe("ping", async (n, r) => ["keyChanged"])
        }
        async initializeSender() {
            var n, r;
            if (this.activeServiceWorker = await JM(),
            !this.activeServiceWorker)
                return;
            this.sender = new xh(this.activeServiceWorker);
            let i = await this.sender._send("ping", {}, 800);
            i && !((n = i[0]) === null || n === void 0) && n.fulfilled && !((r = i[0]) === null || r === void 0) && r.value.includes("keyChanged") && (this.serviceWorkerReceiverAvailable = !0)
        }
        async notifyServiceWorker(n) {
            if (!(!this.sender || !this.activeServiceWorker || XM() !== this.activeServiceWorker))
                try {
                    await this.sender._send("keyChanged", {
                        key: n
                    }, this.serviceWorkerReceiverAvailable ? 800 : 50)
                } catch {}
        }
        async _isAvailable() {
            try {
                if (!indexedDB)
                    return !1;
                let n = await Ph();
                return await kI(n, jc, "1"),
                await xI(n, jc),
                !0
            } catch {}
            return !1
        }
        async _withPendingWrite(n) {
            this.pendingWrites++;
            try {
                await n()
            } finally {
                this.pendingWrites--
            }
        }
        async _set(n, r) {
            return this._withPendingWrite(async () => (await this._withRetries(i => kI(i, n, r)),
            this.localCache[n] = r,
            this.notifyServiceWorker(n)))
        }
        async _get(n) {
            let r = await this._withRetries(i => r0(i, n));
            return this.localCache[n] = r,
            r
        }
        async _remove(n) {
            return this._withPendingWrite(async () => (await this._withRetries(r => xI(r, n)),
            delete this.localCache[n],
            this.notifyServiceWorker(n)))
        }
        async _poll() {
            let n = await this._withRetries(o => {
                let s = qc(o, !1).getAll();
                return new pr(s).toPromise()
            }
            );
            if (!n)
                return [];
            if (this.pendingWrites !== 0)
                return [];
            let r = []
              , i = new Set;
            if (n.length !== 0)
                for (let {fbase_key: o, value: s} of n)
                    i.add(o),
                    JSON.stringify(this.localCache[o]) !== JSON.stringify(s) && (this.notifyListeners(o, s),
                    r.push(o));
            for (let o of Object.keys(this.localCache))
                this.localCache[o] && !i.has(o) && (this.notifyListeners(o, null),
                r.push(o));
            return r
        }
        notifyListeners(n, r) {
            this.localCache[n] = r;
            let i = this.listeners[n];
            if (i)
                for (let o of Array.from(i))
                    o(r)
        }
        startPolling() {
            this.stopPolling(),
            this.pollTimer = setInterval(async () => this._poll(), i0)
        }
        stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer),
            this.pollTimer = null)
        }
        _addListener(n, r) {
            Object.keys(this.listeners).length === 0 && this.startPolling(),
            this.listeners[n] || (this.listeners[n] = new Set,
            this._get(n)),
            this.listeners[n].add(r)
        }
        _removeListener(n, r) {
            this.listeners[n] && (this.listeners[n].delete(r),
            this.listeners[n].size === 0 && delete this.listeners[n]),
            Object.keys(this.listeners).length === 0 && this.stopPolling()
        }
    }
    return e.type = "LOCAL",
    e
}
)()
  , f_ = s0;
var y5 = i_("rcb")
  , E5 = new hr(3e4,6e4);
function a0(e, t) {
    return t ? Ht(t) : (A(e._popupRedirectResolver, e, "argument-error"),
    e._popupRedirectResolver)
}
var qo = class extends Lc {
    constructor(t) {
        super("custom", "custom"),
        this.params = t
    }
    _getIdTokenResponse(t) {
        return wh(t, this._buildIdpRequest())
    }
    _linkToIdToken(t, n) {
        return wh(t, this._buildIdpRequest(n))
    }
    _getReauthenticationResolver(t) {
        return wh(t, this._buildIdpRequest())
    }
    _buildIdpRequest(t) {
        let n = {
            requestUri: this.params.requestUri,
            sessionId: this.params.sessionId,
            postBody: this.params.postBody,
            tenantId: this.params.tenantId,
            pendingToken: this.params.pendingToken,
            returnSecureToken: !0,
            returnIdpCredential: !0
        };
        return t && (n.idToken = t),
        n
    }
}
;
function c0(e) {
    return $M(e.auth, new qo(e), e.bypassAuthState)
}
function u0(e) {
    let {auth: t, user: n} = e;
    return A(n, t, "internal-error"),
    HM(n, new qo(e), e.bypassAuthState)
}
async function l0(e) {
    let {auth: t, user: n} = e;
    return A(n, t, "internal-error"),
    BM(n, new qo(e), e.bypassAuthState)
}
var Lh = class {
    constructor(t, n, r, i, o=!1) {
        this.auth = t,
        this.resolver = r,
        this.user = i,
        this.bypassAuthState = o,
        this.pendingPromise = null,
        this.eventManager = null,
        this.filter = Array.isArray(n) ? n : [n]
    }
    execute() {
        return new Promise(async (t, n) => {
            this.pendingPromise = {
                resolve: t,
                reject: n
            };
            try {
                this.eventManager = await this.resolver._initialize(this.auth),
                await this.onExecution(),
                this.eventManager.registerConsumer(this)
            } catch (r) {
                this.reject(r)
            }
        }
        )
    }
    async onAuthEvent(t) {
        let {urlResponse: n, sessionId: r, postBody: i, tenantId: o, error: s, type: a} = t;
        if (s) {
            this.reject(s);
            return
        }
        let c = {
            auth: this.auth,
            requestUri: n,
            sessionId: r,
            tenantId: o || void 0,
            postBody: i || void 0,
            user: this.user,
            bypassAuthState: this.bypassAuthState
        };
        try {
            this.resolve(await this.getIdpTask(a)(c))
        } catch (u) {
            this.reject(u)
        }
    }
    onError(t) {
        this.reject(t)
    }
    getIdpTask(t) {
        switch (t) {
        case "signInViaPopup":
        case "signInViaRedirect":
            return c0;
        case "linkViaPopup":
        case "linkViaRedirect":
            return l0;
        case "reauthViaPopup":
        case "reauthViaRedirect":
            return u0;
        default:
            bn(this.auth, "internal-error")
        }
    }
    resolve(t) {
        Cn(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.resolve(t),
        this.unregisterAndCleanUp()
    }
    reject(t) {
        Cn(this.pendingPromise, "Pending promise was never set"),
        this.pendingPromise.reject(t),
        this.unregisterAndCleanUp()
    }
    unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this),
        this.pendingPromise = null,
        this.cleanUp()
    }
}
;
var I5 = new hr(2e3,1e4);
var d0 = "pendingRedirect"
  , Ac = new Map
  , Fh = class extends Lh {
    constructor(t, n, r=!1) {
        super(t, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], n, void 0, r),
        this.eventId = null
    }
    async execute() {
        let t = Ac.get(this.auth._key());
        if (!t) {
            try {
                let r = await f0(this.resolver, this.auth) ? await super.execute() : null;
                t = () => Promise.resolve(r)
            } catch (n) {
                t = () => Promise.reject(n)
            }
            Ac.set(this.auth._key(), t)
        }
        return this.bypassAuthState || Ac.set(this.auth._key(), () => Promise.resolve(null)),
        t()
    }
    async onAuthEvent(t) {
        if (t.type === "signInViaRedirect")
            return super.onAuthEvent(t);
        if (t.type === "unknown") {
            this.resolve(null);
            return
        }
        if (t.eventId) {
            let n = await this.auth._redirectUserForId(t.eventId);
            if (n)
                return this.user = n,
                super.onAuthEvent(t);
            this.resolve(null)
        }
    }
    async onExecution() {}
    cleanUp() {}
}
;
async function f0(e, t) {
    let n = g0(t)
      , r = p0(e);
    if (!await r._isAvailable())
        return !1;
    let i = await r._get(n) === "true";
    return await r._remove(n),
    i
}
function h0(e, t) {
    Ac.set(e._key(), t)
}
function p0(e) {
    return Ht(e._redirectPersistence)
}
function g0(e) {
    return Sc(d0, e.config.apiKey, e.name)
}
async function m0(e, t, n=!1) {
    if (Fe(e.app))
        return Promise.reject(wn(e));
    let r = $c(e)
      , i = a0(r, t)
      , s = await new Fh(r,i,n).execute();
    return s && !n && (delete s.user._redirectEventId,
    await r._persistUserIfCurrent(s.user),
    await r._setRedirectUser(null, t)),
    s
}
var v0 = 600 * 1e3
  , jh = class {
    constructor(t) {
        this.auth = t,
        this.cachedEventUids = new Set,
        this.consumers = new Set,
        this.queuedRedirectEvent = null,
        this.hasHandledPotentialRedirect = !1,
        this.lastProcessedEventTime = Date.now()
    }
    registerConsumer(t) {
        this.consumers.add(t),
        this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, t) && (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        this.queuedRedirectEvent = null)
    }
    unregisterConsumer(t) {
        this.consumers.delete(t)
    }
    onEvent(t) {
        if (this.hasEventBeenHandled(t))
            return !1;
        let n = !1;
        return this.consumers.forEach(r => {
            this.isEventForConsumer(t, r) && (n = !0,
            this.sendToConsumer(t, r),
            this.saveEventToCache(t))
        }
        ),
        this.hasHandledPotentialRedirect || !y0(t) || (this.hasHandledPotentialRedirect = !0,
        n || (this.queuedRedirectEvent = t,
        n = !0)),
        n
    }
    sendToConsumer(t, n) {
        var r;
        if (t.error && !h_(t)) {
            let i = ((r = t.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
            n.onError(fr(this.auth, i))
        } else
            n.onAuthEvent(t)
    }
    isEventForConsumer(t, n) {
        let r = n.eventId === null || !!t.eventId && t.eventId === n.eventId;
        return n.filter.includes(t.type) && r
    }
    hasEventBeenHandled(t) {
        return Date.now() - this.lastProcessedEventTime >= v0 && this.cachedEventUids.clear(),
        this.cachedEventUids.has(PI(t))
    }
    saveEventToCache(t) {
        this.cachedEventUids.add(PI(t)),
        this.lastProcessedEventTime = Date.now()
    }
}
;
function PI(e) {
    return [e.type, e.eventId, e.sessionId, e.tenantId].filter(t => t).join("-")
}
function h_({type: e, error: t}) {
    return e === "unknown" && t?.code === "auth/no-auth-event"
}
function y0(e) {
    switch (e.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
        return !0;
    case "unknown":
        return h_(e);
    default:
        return !1
    }
}
async function E0(e, t={}) {
    return Ei(e, "GET", "/v1/projects", t)
}
var I0 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
  , _0 = /^https?/;
async function D0(e) {
    if (e.config.emulator)
        return;
    let {authorizedDomains: t} = await E0(e);
    for (let n of t)
        try {
            if (w0(n))
                return
        } catch {}
    bn(e, "unauthorized-domain")
}
function w0(e) {
    let t = Ch()
      , {protocol: n, hostname: r} = new URL(t);
    if (e.startsWith("chrome-extension://")) {
        let s = new URL(e);
        return s.hostname === "" && r === "" ? n === "chrome-extension:" && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : n === "chrome-extension:" && s.hostname === r
    }
    if (!_0.test(n))
        return !1;
    if (I0.test(e))
        return r === e;
    let i = e.replace(/\./g, "\\.");
    return new RegExp("^(.+\\." + i + "|" + i + ")$","i").test(r)
}
var b0 = new hr(3e4,6e4);
function LI() {
    let e = Et().___jsl;
    if (e?.H) {
        for (let t of Object.keys(e.H))
            if (e.H[t].r = e.H[t].r || [],
            e.H[t].L = e.H[t].L || [],
            e.H[t].r = [...e.H[t].L],
            e.CP)
                for (let n = 0; n < e.CP.length; n++)
                    e.CP[n] = null
    }
}
function C0(e) {
    return new Promise( (t, n) => {
        var r, i, o;
        function s() {
            LI(),
            gapi.load("gapi.iframes", {
                callback: () => {
                    t(gapi.iframes.getContext())
                }
                ,
                ontimeout: () => {
                    LI(),
                    n(fr(e, "network-request-failed"))
                }
                ,
                timeout: b0.get()
            })
        }
        if (!((i = (r = Et().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0) && i.Iframe)
            t(gapi.iframes.getContext());
        else if (!((o = Et().gapi) === null || o === void 0) && o.load)
            s();
        else {
            let a = i_("iframefcb");
            return Et()[a] = () => {
                gapi.load ? s() : n(fr(e, "network-request-failed"))
            }
            ,
            LM(`${FM()}?onload=${a}`).catch(c => n(c))
        }
    }
    ).catch(t => {
        throw Nc = null,
        t
    }
    )
}
var Nc = null;
function T0(e) {
    return Nc = Nc || C0(e),
    Nc
}
var S0 = new hr(5e3,15e3)
  , A0 = "__/auth/iframe"
  , N0 = "emulator/auth/iframe"
  , R0 = {
    style: {
        position: "absolute",
        top: "-100px",
        width: "1px",
        height: "1px"
    },
    "aria-hidden": "true",
    tabindex: "-1"
}
  , M0 = new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
function O0(e) {
    let t = e.config;
    A(t.authDomain, e, "auth-domain-config-required");
    let n = t.emulator ? Hh(t, N0) : `https://${e.config.authDomain}/${A0}`
      , r = {
        apiKey: t.apiKey,
        appName: e.name,
        v: pi
    }
      , i = M0.get(e.config.apiHost);
    i && (r.eid = i);
    let o = e._getFrameworks();
    return o.length && (r.fw = o.join(",")),
    `${n}?${Fo(r).slice(1)}`
}
async function k0(e) {
    let t = await T0(e)
      , n = Et().gapi;
    return A(n, e, "internal-error"),
    t.open({
        where: document.body,
        url: O0(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: R0,
        dontclear: !0
    }, r => new Promise(async (i, o) => {
        await r.restyle({
            setHideOnLeave: !1
        });
        let s = fr(e, "network-request-failed")
          , a = Et().setTimeout( () => {
            o(s)
        }
        , S0.get());
        function c() {
            Et().clearTimeout(a),
            i(r)
        }
        r.ping(c).then(c, () => {
            o(s)
        }
        )
    }
    ))
}
var x0 = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no"
}
  , P0 = 500
  , L0 = 600
  , F0 = "_blank"
  , j0 = "http://localhost"
  , Bc = class {
    constructor(t) {
        this.window = t,
        this.associatedEvent = null
    }
    close() {
        if (this.window)
            try {
                this.window.close()
            } catch {}
    }
}
;
function U0(e, t, n, r=P0, i=L0) {
    let o = Math.max((window.screen.availHeight - i) / 2, 0).toString()
      , s = Math.max((window.screen.availWidth - r) / 2, 0).toString()
      , a = ""
      , c = Object.assign(Object.assign({}, x0), {
        width: r.toString(),
        height: i.toString(),
        top: o,
        left: s
    })
      , u = ye().toLowerCase();
    n && (a = QI(u) ? F0 : n),
    YI(u) && (t = t || j0,
    c.scrollbars = "yes");
    let l = Object.entries(c).reduce( (f, [h,g]) => `${f}${h}=${g},`, "");
    if (MM(u) && a !== "_self")
        return V0(t || "", a),
        new Bc(null);
    let d = window.open(t || "", a, l);
    A(d, e, "popup-blocked");
    try {
        d.focus()
    } catch {}
    return new Bc(d)
}
function V0(e, t) {
    let n = document.createElement("a");
    n.href = e,
    n.target = t;
    let r = document.createEvent("MouseEvent");
    r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
    n.dispatchEvent(r)
}
var B0 = "__/auth/handler"
  , H0 = "emulator/auth/handler"
  , $0 = encodeURIComponent("fac");
async function FI(e, t, n, r, i, o) {
    A(e.config.authDomain, e, "auth-domain-config-required"),
    A(e.config.apiKey, e, "invalid-api-key");
    let s = {
        apiKey: e.config.apiKey,
        appName: e.name,
        authType: n,
        redirectUrl: r,
        v: pi,
        eventId: i
    };
    if (t instanceof Fc) {
        t.setDefaultLanguage(e.languageCode),
        s.providerId = t.providerId || "",
        JE(t.getCustomParameters()) || (s.customParameters = JSON.stringify(t.getCustomParameters()));
        for (let[l,d] of Object.entries(o || {}))
            s[l] = d
    }
    if (t instanceof Oh) {
        let l = t.getScopes().filter(d => d !== "");
        l.length > 0 && (s.scopes = l.join(","))
    }
    e.tenantId && (s.tid = e.tenantId);
    let a = s;
    for (let l of Object.keys(a))
        a[l] === void 0 && delete a[l];
    let c = await e._getAppCheckToken()
      , u = c ? `#${$0}=${encodeURIComponent(c)}` : "";
    return `${W0(e)}?${Fo(a).slice(1)}${u}`
}
function W0({config: e}) {
    return e.emulator ? Hh(e, H0) : `https://${e.authDomain}/${B0}`
}
var bh = "webStorageSupport"
  , Uh = class {
    constructor() {
        this.eventManagers = {},
        this.iframes = {},
        this.originValidationPromises = {},
        this._redirectPersistence = Jh,
        this._completeRedirectFn = m0,
        this._overrideRedirectResult = h0
    }
    async _openPopup(t, n, r, i) {
        var o;
        Cn((o = this.eventManagers[t._key()]) === null || o === void 0 ? void 0 : o.manager, "_initialize() not called before _openPopup()");
        let s = await FI(t, n, r, Ch(), i);
        return U0(t, s, c_())
    }
    async _openRedirect(t, n, r, i) {
        await this._originValidation(t);
        let o = await FI(t, n, r, Ch(), i);
        return QM(o),
        new Promise( () => {}
        )
    }
    _initialize(t) {
        let n = t._key();
        if (this.eventManagers[n]) {
            let {manager: i, promise: o} = this.eventManagers[n];
            return i ? Promise.resolve(i) : (Cn(o, "If manager is not set, promise should be"),
            o)
        }
        let r = this.initAndGetManager(t);
        return this.eventManagers[n] = {
            promise: r
        },
        r.catch( () => {
            delete this.eventManagers[n]
        }
        ),
        r
    }
    async initAndGetManager(t) {
        let n = await k0(t)
          , r = new jh(t);
        return n.register("authEvent", i => (A(i?.authEvent, t, "invalid-auth-event"),
        {
            status: r.onEvent(i.authEvent) ? "ACK" : "ERROR"
        }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),
        this.eventManagers[t._key()] = {
            manager: r
        },
        this.iframes[t._key()] = n,
        r
    }
    _isIframeWebStorageSupported(t, n) {
        this.iframes[t._key()].send(bh, {
            type: bh
        }, i => {
            var o;
            let s = (o = i?.[0]) === null || o === void 0 ? void 0 : o[bh];
            s !== void 0 && n(!!s),
            bn(t, "internal-error")
        }
        , gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)
    }
    _originValidation(t) {
        let n = t._key();
        return this.originValidationPromises[n] || (this.originValidationPromises[n] = D0(t)),
        this.originValidationPromises[n]
    }
    get _shouldInitProactively() {
        return n_() || ZI() || Gh()
    }
}
  , p_ = Uh;
var jI = "@firebase/auth"
  , UI = "1.10.8";
var Vh = class {
    constructor(t) {
        this.auth = t,
        this.internalListeners = new Map
    }
    getUid() {
        var t;
        return this.assertAuthConfigured(),
        ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) || null
    }
    async getToken(t) {
        return this.assertAuthConfigured(),
        await this.auth._initializationPromise,
        this.auth.currentUser ? {
            accessToken: await this.auth.currentUser.getIdToken(t)
        } : null
    }
    addAuthTokenListener(t) {
        if (this.assertAuthConfigured(),
        this.internalListeners.has(t))
            return;
        let n = this.auth.onIdTokenChanged(r => {
            t(r?.stsTokenManager.accessToken || null)
        }
        );
        this.internalListeners.set(t, n),
        this.updateProactiveRefresh()
    }
    removeAuthTokenListener(t) {
        this.assertAuthConfigured();
        let n = this.internalListeners.get(t);
        n && (this.internalListeners.delete(t),
        n(),
        this.updateProactiveRefresh())
    }
    assertAuthConfigured() {
        A(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth")
    }
    updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh()
    }
}
;
function z0(e) {
    switch (e) {
    case "Node":
        return "node";
    case "ReactNative":
        return "rn";
    case "Worker":
        return "webworker";
    case "Cordova":
        return "cordova";
    case "WebExtension":
        return "web-extension";
    default:
        return
    }
}
function G0(e) {
    st(new De("auth", (t, {options: n}) => {
        let r = t.getProvider("app").getImmediate()
          , i = t.getProvider("heartbeat")
          , o = t.getProvider("app-check-internal")
          , {apiKey: s, authDomain: a} = r.options;
        A(s && !s.includes(":"), "invalid-api-key", {
            appName: r.name
        });
        let c = {
            apiKey: s,
            authDomain: a,
            clientPlatform: e,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: r_(e)
        }
          , u = new Mh(r,i,o,c);
        return jM(u, n),
        u
    }
    ,"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback( (t, n, r) => {
        t.getProvider("auth-internal").initialize()
    }
    )),
    st(new De("auth-internal",t => {
        let n = $c(t.getProvider("auth").getImmediate());
        return (r => new Vh(r))(n)
    }
    ,"PRIVATE").setInstantiationMode("EXPLICIT")),
    Z(jI, UI, z0(e)),
    Z(jI, UI, "esm2017")
}
var q0 = 300
  , K0 = Xf("authIdTokenMaxAge") || q0
  , VI = null
  , Y0 = e => async t => {
    let n = t && await t.getIdTokenResult()
      , r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
    if (r && r > K0)
        return;
    let i = n?.token;
    VI !== i && (VI = i,
    await fetch(e, {
        method: i ? "POST" : "DELETE",
        headers: i ? {
            Authorization: `Bearer ${i}`
        } : {}
    }))
}
;
function Xh(e=ur()) {
    let t = hi(e, "auth");
    if (t.isInitialized())
        return t.getImmediate();
    let n = Kh(e, {
        popupRedirectResolver: p_,
        persistence: [f_, a_, Jh]
    })
      , r = Xf("authTokenSyncURL");
    if (r && typeof isSecureContext == "boolean" && isSecureContext) {
        let o = new URL(r,location.origin);
        if (location.origin === o.origin) {
            let s = Y0(o.toString());
            Zh(n, s, () => s(n.currentUser)),
            zc(n, a => s(a))
        }
    }
    let i = Qf("auth");
    return i && Wc(n, `http://${i}`),
    n
}
function Z0() {
    var e, t;
    return (t = (e = document.getElementsByTagName("head")) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : document
}
PM({
    loadJS(e) {
        return new Promise( (t, n) => {
            let r = document.createElement("script");
            r.setAttribute("src", e),
            r.onload = t,
            r.onerror = i => {
                let o = fr("internal-error");
                o.customData = i,
                n(o)
            }
            ,
            r.type = "text/javascript",
            r.charset = "UTF-8",
            Z0().appendChild(r)
        }
        )
    },
    gapiScript: "https://apis.google.com/js/api.js",
    recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
    recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
G0("Browser");
function m_(e) {
    return new S(function(t) {
        var n = Gc(e, t.next.bind(t), t.error.bind(t), t.complete.bind(t));
        return {
            unsubscribe: n
        }
    }
    )
}
var v_ = "auth"
  , gr = class {
    constructor(t) {
        return t
    }
}
  , Ko = class {
    constructor() {
        return mi(v_)
    }
}
;
var ep = new E("angularfire2.auth-instances");
function UO(e, t) {
    let n = Vo(v_, e, t);
    return n && new gr(n)
}
function VO(e) {
    return (t, n) => {
        let r = t.runOutsideAngular( () => e(n));
        return new gr(r)
    }
}
var BO = {
    provide: Ko,
    deps: [[new Pe, ep]]
}
  , HO = {
    provide: gr,
    useFactory: UO,
    deps: [[new Pe, ep], Vt]
};
function p9(e, ...t) {
    return Z("angularfire", yn.full, "auth"),
    Me([HO, BO, {
        provide: ep,
        useFactory: VO(e),
        multi: !0,
        deps: [F, z, En, dr, [new Pe, vi], ...t]
    }])
}
var y_ = je(m_, !0);
var g9 = je(Wc, !0);
var m9 = je(Xh, !0);
var E_ = je(Yh, !0, 2);
var I_ = je(Qh, !0, 2);
var WO = "type.googleapis.com/google.protobuf.Int64Value"
  , zO = "type.googleapis.com/google.protobuf.UInt64Value";
function b_(e, t) {
    let n = {};
    for (let r in e)
        e.hasOwnProperty(r) && (n[r] = t(e[r]));
    return n
}
function Kc(e) {
    if (e == null)
        return null;
    if (e instanceof Number && (e = e.valueOf()),
    typeof e == "number" && isFinite(e) || e === !0 || e === !1 || Object.prototype.toString.call(e) === "[object String]")
        return e;
    if (e instanceof Date)
        return e.toISOString();
    if (Array.isArray(e))
        return e.map(t => Kc(t));
    if (typeof e == "function" || typeof e == "object")
        return b_(e, t => Kc(t));
    throw new Error("Data cannot be encoded in JSON: " + e)
}
function Ii(e) {
    if (e == null)
        return e;
    if (e["@type"])
        switch (e["@type"]) {
        case WO:
        case zO:
            {
                let t = Number(e.value);
                if (isNaN(t))
                    throw new Error("Data cannot be decoded from JSON: " + e);
                return t
            }
        default:
            throw new Error("Data cannot be decoded from JSON: " + e)
        }
    return Array.isArray(e) ? e.map(t => Ii(t)) : typeof e == "function" || typeof e == "object" ? b_(e, t => Ii(t)) : e
}
var ip = "functions";
var __ = {
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
  , Se = class e extends Le {
    constructor(t, n, r) {
        super(`${ip}/${t}`, n || ""),
        this.details = r,
        Object.setPrototypeOf(this, e.prototype)
    }
}
;
function GO(e) {
    if (e >= 200 && e < 300)
        return "ok";
    switch (e) {
    case 0:
        return "internal";
    case 400:
        return "invalid-argument";
    case 401:
        return "unauthenticated";
    case 403:
        return "permission-denied";
    case 404:
        return "not-found";
    case 409:
        return "aborted";
    case 429:
        return "resource-exhausted";
    case 499:
        return "cancelled";
    case 500:
        return "internal";
    case 501:
        return "unimplemented";
    case 503:
        return "unavailable";
    case 504:
        return "deadline-exceeded"
    }
    return "unknown"
}
function Yc(e, t) {
    let n = GO(e), r = n, i;
    try {
        let o = t && t.error;
        if (o) {
            let s = o.status;
            if (typeof s == "string") {
                if (!__[s])
                    return new Se("internal","internal");
                n = __[s],
                r = s
            }
            let a = o.message;
            typeof a == "string" && (r = a),
            i = o.details,
            i !== void 0 && (i = Ii(i))
        }
    } catch {}
    return n === "ok" ? null : new Se(n,r,i)
}
var tp = class {
    constructor(t, n, r, i) {
        this.app = t,
        this.auth = null,
        this.messaging = null,
        this.appCheck = null,
        this.serverAppAppCheckToken = null,
        Fe(t) && t.settings.appCheckToken && (this.serverAppAppCheckToken = t.settings.appCheckToken),
        this.auth = n.getImmediate({
            optional: !0
        }),
        this.messaging = r.getImmediate({
            optional: !0
        }),
        this.auth || n.get().then(o => this.auth = o, () => {}
        ),
        this.messaging || r.get().then(o => this.messaging = o, () => {}
        ),
        this.appCheck || i?.get().then(o => this.appCheck = o, () => {}
        )
    }
    async getAuthToken() {
        if (this.auth)
            try {
                let t = await this.auth.getToken();
                return t?.accessToken
            } catch {
                return
            }
    }
    async getMessagingToken() {
        if (!(!this.messaging || !("Notification"in self) || Notification.permission !== "granted"))
            try {
                return await this.messaging.getToken()
            } catch {
                return
            }
    }
    async getAppCheckToken(t) {
        if (this.serverAppAppCheckToken)
            return this.serverAppAppCheckToken;
        if (this.appCheck) {
            let n = t ? await this.appCheck.getLimitedUseToken() : await this.appCheck.getToken();
            return n.error ? null : n.token
        }
        return null
    }
    async getContext(t) {
        let n = await this.getAuthToken()
          , r = await this.getMessagingToken()
          , i = await this.getAppCheckToken(t);
        return {
            authToken: n,
            messagingToken: r,
            appCheckToken: i
        }
    }
}
;
var np = "us-central1"
  , qO = /^data: (.*?)(?:\n|$)/;
function KO(e) {
    let t = null;
    return {
        promise: new Promise( (n, r) => {
            t = setTimeout( () => {
                r(new Se("deadline-exceeded","deadline-exceeded"))
            }
            , e)
        }
        ),
        cancel: () => {
            t && clearTimeout(t)
        }
    }
}
var rp = class {
    constructor(t, n, r, i, o=np, s= (...a) => fetch(...a)) {
        this.app = t,
        this.fetchImpl = s,
        this.emulatorOrigin = null,
        this.contextProvider = new tp(t,n,r,i),
        this.cancelAllRequests = new Promise(a => {
            this.deleteService = () => Promise.resolve(a())
        }
        );
        try {
            let a = new URL(o);
            this.customDomain = a.origin + (a.pathname === "/" ? "" : a.pathname),
            this.region = np
        } catch {
            this.customDomain = null,
            this.region = o
        }
    }
    _delete() {
        return this.deleteService()
    }
    _url(t) {
        let n = this.app.options.projectId;
        return this.emulatorOrigin !== null ? `${this.emulatorOrigin}/${n}/${this.region}/${t}` : this.customDomain !== null ? `${this.customDomain}/${t}` : `https://${this.region}-${n}.cloudfunctions.net/${t}`
    }
}
;
function YO(e, t, n) {
    let r = ar(t);
    e.emulatorOrigin = `http${r ? "s" : ""}://${t}:${n}`,
    r && (vc(e.emulatorOrigin),
    yc("Functions", !0))
}
function ZO(e, t, n) {
    let r = i => JO(e, t, i, n || {});
    return r.stream = (i, o) => ek(e, t, i, o),
    r
}
async function QO(e, t, n, r) {
    n["Content-Type"] = "application/json";
    let i;
    try {
        i = await r(e, {
            method: "POST",
            body: JSON.stringify(t),
            headers: n
        })
    } catch {
        return {
            status: 0,
            json: null
        }
    }
    let o = null;
    try {
        o = await i.json()
    } catch {}
    return {
        status: i.status,
        json: o
    }
}
async function C_(e, t) {
    let n = {}
      , r = await e.contextProvider.getContext(t.limitedUseAppCheckTokens);
    return r.authToken && (n.Authorization = "Bearer " + r.authToken),
    r.messagingToken && (n["Firebase-Instance-ID-Token"] = r.messagingToken),
    r.appCheckToken !== null && (n["X-Firebase-AppCheck"] = r.appCheckToken),
    n
}
function JO(e, t, n, r) {
    let i = e._url(t);
    return XO(e, i, n, r)
}
async function XO(e, t, n, r) {
    n = Kc(n);
    let i = {
        data: n
    }
      , o = await C_(e, r)
      , s = r.timeout || 7e4
      , a = KO(s)
      , c = await Promise.race([QO(t, i, o, e.fetchImpl), a.promise, e.cancelAllRequests]);
    if (a.cancel(),
    !c)
        throw new Se("cancelled","Firebase Functions instance was deleted.");
    let u = Yc(c.status, c.json);
    if (u)
        throw u;
    if (!c.json)
        throw new Se("internal","Response is not valid JSON object.");
    let l = c.json.data;
    if (typeof l > "u" && (l = c.json.result),
    typeof l > "u")
        throw new Se("internal","Response is missing data field.");
    return {
        data: Ii(l)
    }
}
function ek(e, t, n, r) {
    let i = e._url(t);
    return tk(e, i, n, r || {})
}
async function tk(e, t, n, r) {
    var i;
    n = Kc(n);
    let o = {
        data: n
    }
      , s = await C_(e, r);
    s["Content-Type"] = "application/json",
    s.Accept = "text/event-stream";
    let a;
    try {
        a = await e.fetchImpl(t, {
            method: "POST",
            body: JSON.stringify(o),
            headers: s,
            signal: r?.signal
        })
    } catch (h) {
        if (h instanceof Error && h.name === "AbortError") {
            let y = new Se("cancelled","Request was cancelled.");
            return {
                data: Promise.reject(y),
                stream: {
                    [Symbol.asyncIterator]() {
                        return {
                            next() {
                                return Promise.reject(y)
                            }
                        }
                    }
                }
            }
        }
        let g = Yc(0, null);
        return {
            data: Promise.reject(g),
            stream: {
                [Symbol.asyncIterator]() {
                    return {
                        next() {
                            return Promise.reject(g)
                        }
                    }
                }
            }
        }
    }
    let c, u, l = new Promise( (h, g) => {
        c = h,
        u = g
    }
    );
    (i = r?.signal) === null || i === void 0 || i.addEventListener("abort", () => {
        let h = new Se("cancelled","Request was cancelled.");
        u(h)
    }
    );
    let d = a.body.getReader()
      , f = nk(d, c, u, r?.signal);
    return {
        stream: {
            [Symbol.asyncIterator]() {
                let h = f.getReader();
                return {
                    async next() {
                        let {value: g, done: y} = await h.read();
                        return {
                            value: g,
                            done: y
                        }
                    },
                    async return() {
                        return await h.cancel(),
                        {
                            done: !0,
                            value: void 0
                        }
                    }
                }
            }
        },
        data: l
    }
}
function nk(e, t, n, r) {
    let i = (s, a) => {
        let c = s.match(qO);
        if (!c)
            return;
        let u = c[1];
        try {
            let l = JSON.parse(u);
            if ("result"in l) {
                t(Ii(l.result));
                return
            }
            if ("message"in l) {
                a.enqueue(Ii(l.message));
                return
            }
            if ("error"in l) {
                let d = Yc(0, l);
                a.error(d),
                n(d);
                return
            }
        } catch (l) {
            if (l instanceof Se) {
                a.error(l),
                n(l);
                return
            }
        }
    }
      , o = new TextDecoder;
    return new ReadableStream({
        start(s) {
            let a = "";
            return c();
            async function c() {
                if (r?.aborted) {
                    let u = new Se("cancelled","Request was cancelled");
                    return s.error(u),
                    n(u),
                    Promise.resolve()
                }
                try {
                    let {value: u, done: l} = await e.read();
                    if (l) {
                        a.trim() && i(a.trim(), s),
                        s.close();
                        return
                    }
                    if (r?.aborted) {
                        let f = new Se("cancelled","Request was cancelled");
                        s.error(f),
                        n(f),
                        await e.cancel();
                        return
                    }
                    a += o.decode(u, {
                        stream: !0
                    });
                    let d = a.split(`
`);
                    a = d.pop() || "";
                    for (let f of d)
                        f.trim() && i(f.trim(), s);
                    return c()
                } catch (u) {
                    let l = u instanceof Se ? u : Yc(0, null);
                    s.error(l),
                    n(l)
                }
            }
        },
        cancel() {
            return e.cancel()
        }
    })
}
var D_ = "@firebase/functions"
  , w_ = "0.12.9";
var rk = "auth-internal"
  , ik = "app-check-internal"
  , ok = "messaging-internal";
function sk(e) {
    let t = (n, {instanceIdentifier: r}) => {
        let i = n.getProvider("app").getImmediate()
          , o = n.getProvider(rk)
          , s = n.getProvider(ok)
          , a = n.getProvider(ik);
        return new rp(i,o,s,a,r)
    }
    ;
    st(new De(ip,t,"PUBLIC").setMultipleInstances(!0)),
    Z(D_, w_, e),
    Z(D_, w_, "esm2017")
}
function T_(e=ur(), t=np) {
    let r = hi(Te(e), ip).getImmediate({
        identifier: t
    })
      , i = zE("functions");
    return i && op(r, ...i),
    r
}
function op(e, t, n) {
    YO(Te(e), t, n)
}
function S_(e, t, n) {
    return ZO(Te(e), t, n)
}
sk();
var mr = class {
    constructor(t) {
        return t
    }
}
  , A_ = "functions"
  , sp = class {
    constructor() {
        return mi(A_)
    }
}
;
var ap = new E("angularfire2.functions-instances");
function ak(e, t) {
    let n = Vo(A_, e, t);
    return n && new mr(n)
}
function ck(e) {
    return (t, n) => {
        let r = t.runOutsideAngular( () => e(n));
        return new mr(r)
    }
}
var uk = {
    provide: sp,
    deps: [[new Pe, ap]]
}
  , lk = {
    provide: mr,
    useFactory: ak,
    deps: [[new Pe, ap], Vt]
};
function k9(e, ...t) {
    return Z("angularfire", yn.full, "fn"),
    Me([lk, uk, {
        provide: ap,
        useFactory: ck(e),
        multi: !0,
        deps: [F, z, En, dr, [new Pe, Ko], [new Pe, vi], ...t]
    }])
}
var x9 = je(op, !0)
  , P9 = je(T_, !0)
  , N_ = je(S_, !0);
async function R_(e, t, n, r) {
    return (await N_(e, "firebase__dnc_scrubber__" + t)({
        fn: n,
        args: r
    })).data
}
var O = "primary"
  , us = Symbol("RouteTitle")
  , fp = class {
    params;
    constructor(t) {
        this.params = t || {}
    }
    has(t) {
        return Object.prototype.hasOwnProperty.call(this.params, t)
    }
    get(t) {
        if (this.has(t)) {
            let n = this.params[t];
            return Array.isArray(n) ? n[0] : n
        }
        return null
    }
    getAll(t) {
        if (this.has(t)) {
            let n = this.params[t];
            return Array.isArray(n) ? n : [n]
        }
        return []
    }
    get keys() {
        return Object.keys(this.params)
    }
}
;
function Er(e) {
    return new fp(e)
}
function j_(e, t, n) {
    let r = n.path.split("/");
    if (r.length > e.length || n.pathMatch === "full" && (t.hasChildren() || r.length < e.length))
        return null;
    let i = {};
    for (let o = 0; o < r.length; o++) {
        let s = r[o]
          , a = e[o];
        if (s[0] === ":")
            i[s.substring(1)] = a;
        else if (s !== a.path)
            return null
    }
    return {
        consumed: e.slice(0, r.length),
        posParams: i
    }
}
function fk(e, t) {
    if (e.length !== t.length)
        return !1;
    for (let n = 0; n < e.length; ++n)
        if (!It(e[n], t[n]))
            return !1;
    return !0
}
function It(e, t) {
    let n = e ? hp(e) : void 0
      , r = t ? hp(t) : void 0;
    if (!n || !r || n.length != r.length)
        return !1;
    let i;
    for (let o = 0; o < n.length; o++)
        if (i = n[o],
        !U_(e[i], t[i]))
            return !1;
    return !0
}
function hp(e) {
    return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)]
}
function U_(e, t) {
    if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length)
            return !1;
        let n = [...e].sort()
          , r = [...t].sort();
        return n.every( (i, o) => r[o] === i)
    } else
        return e === t
}
function V_(e) {
    return e.length > 0 ? e[e.length - 1] : null
}
function zt(e) {
    return Ju(e) ? e : To(e) ? Y(Promise.resolve(e)) : w(e)
}
var hk = {
    exact: H_,
    subset: $_
}
  , B_ = {
    exact: pk,
    subset: gk,
    ignored: () => !0
};
function M_(e, t, n) {
    return hk[n.paths](e.root, t.root, n.matrixParams) && B_[n.queryParams](e.queryParams, t.queryParams) && !(n.fragment === "exact" && e.fragment !== t.fragment)
}
function pk(e, t) {
    return It(e, t)
}
function H_(e, t, n) {
    if (!vr(e.segments, t.segments) || !Jc(e.segments, t.segments, n) || e.numberOfChildren !== t.numberOfChildren)
        return !1;
    for (let r in t.children)
        if (!e.children[r] || !H_(e.children[r], t.children[r], n))
            return !1;
    return !0
}
function gk(e, t) {
    return Object.keys(t).length <= Object.keys(e).length && Object.keys(t).every(n => U_(e[n], t[n]))
}
function $_(e, t, n) {
    return W_(e, t, t.segments, n)
}
function W_(e, t, n, r) {
    if (e.segments.length > n.length) {
        let i = e.segments.slice(0, n.length);
        return !(!vr(i, n) || t.hasChildren() || !Jc(i, n, r))
    } else if (e.segments.length === n.length) {
        if (!vr(e.segments, n) || !Jc(e.segments, n, r))
            return !1;
        for (let i in t.children)
            if (!e.children[i] || !$_(e.children[i], t.children[i], r))
                return !1;
        return !0
    } else {
        let i = n.slice(0, e.segments.length)
          , o = n.slice(e.segments.length);
        return !vr(e.segments, i) || !Jc(e.segments, i, r) || !e.children[O] ? !1 : W_(e.children[O], t, o, r)
    }
}
function Jc(e, t, n) {
    return t.every( (r, i) => B_[n](e[i].parameters, r.parameters))
}
var Dt = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(t=new V([],{}), n={}, r=null) {
        this.root = t,
        this.queryParams = n,
        this.fragment = r
    }
    get queryParamMap() {
        return this._queryParamMap ??= Er(this.queryParams),
        this._queryParamMap
    }
    toString() {
        return yk.serialize(this)
    }
}
  , V = class {
    segments;
    children;
    parent = null;
    constructor(t, n) {
        this.segments = t,
        this.children = n,
        Object.values(n).forEach(r => r.parent = this)
    }
    hasChildren() {
        return this.numberOfChildren > 0
    }
    get numberOfChildren() {
        return Object.keys(this.children).length
    }
    toString() {
        return Xc(this)
    }
}
  , Tn = class {
    path;
    parameters;
    _parameterMap;
    constructor(t, n) {
        this.path = t,
        this.parameters = n
    }
    get parameterMap() {
        return this._parameterMap ??= Er(this.parameters),
        this._parameterMap
    }
    toString() {
        return G_(this)
    }
}
;
function mk(e, t) {
    return vr(e, t) && e.every( (n, r) => It(n.parameters, t[r].parameters))
}
function vr(e, t) {
    return e.length !== t.length ? !1 : e.every( (n, r) => n.path === t[r].path)
}
function vk(e, t) {
    let n = [];
    return Object.entries(e.children).forEach( ([r,i]) => {
        r === O && (n = n.concat(t(i, r)))
    }
    ),
    Object.entries(e.children).forEach( ([r,i]) => {
        r !== O && (n = n.concat(t(i, r)))
    }
    ),
    n
}
var ls = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => new Ir,
            providedIn: "root"
        })
    }
    return e
}
)()
  , Ir = class {
    parse(t) {
        let n = new gp(t);
        return new Dt(n.parseRootSegment(),n.parseQueryParams(),n.parseFragment())
    }
    serialize(t) {
        let n = `/${Yo(t.root, !0)}`
          , r = _k(t.queryParams)
          , i = typeof t.fragment == "string" ? `#${Ek(t.fragment)}` : "";
        return `${n}${r}${i}`
    }
}
  , yk = new Ir;
function Xc(e) {
    return e.segments.map(t => G_(t)).join("/")
}
function Yo(e, t) {
    if (!e.hasChildren())
        return Xc(e);
    if (t) {
        let n = e.children[O] ? Yo(e.children[O], !1) : ""
          , r = [];
        return Object.entries(e.children).forEach( ([i,o]) => {
            i !== O && r.push(`${i}:${Yo(o, !1)}`)
        }
        ),
        r.length > 0 ? `${n}(${r.join("//")})` : n
    } else {
        let n = vk(e, (r, i) => i === O ? [Yo(e.children[O], !1)] : [`${i}:${Yo(r, !1)}`]);
        return Object.keys(e.children).length === 1 && e.children[O] != null ? `${Xc(e)}/${n[0]}` : `${Xc(e)}/(${n.join("//")})`
    }
}
function z_(e) {
    return encodeURIComponent(e).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
}
function Zc(e) {
    return z_(e).replace(/%3B/gi, ";")
}
function Ek(e) {
    return encodeURI(e)
}
function pp(e) {
    return z_(e).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
}
function eu(e) {
    return decodeURIComponent(e)
}
function O_(e) {
    return eu(e.replace(/\+/g, "%20"))
}
function G_(e) {
    return `${pp(e.path)}${Ik(e.parameters)}`
}
function Ik(e) {
    return Object.entries(e).map( ([t,n]) => `;${pp(t)}=${pp(n)}`).join("")
}
function _k(e) {
    let t = Object.entries(e).map( ([n,r]) => Array.isArray(r) ? r.map(i => `${Zc(n)}=${Zc(i)}`).join("&") : `${Zc(n)}=${Zc(r)}`).filter(n => n);
    return t.length ? `?${t.join("&")}` : ""
}
var Dk = /^[^\/()?;#]+/;
function cp(e) {
    let t = e.match(Dk);
    return t ? t[0] : ""
}
var wk = /^[^\/()?;=#]+/;
function bk(e) {
    let t = e.match(wk);
    return t ? t[0] : ""
}
var Ck = /^[^=?&#]+/;
function Tk(e) {
    let t = e.match(Ck);
    return t ? t[0] : ""
}
var Sk = /^[^&#]+/;
function Ak(e) {
    let t = e.match(Sk);
    return t ? t[0] : ""
}
var gp = class {
    url;
    remaining;
    constructor(t) {
        this.url = t,
        this.remaining = t
    }
    parseRootSegment() {
        return this.consumeOptional("/"),
        this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new V([],{}) : new V([],this.parseChildren())
    }
    parseQueryParams() {
        let t = {};
        if (this.consumeOptional("?"))
            do
                this.parseQueryParam(t);
            while (this.consumeOptional("&"));
        return t
    }
    parseFragment() {
        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
    }
    parseChildren() {
        if (this.remaining === "")
            return {};
        this.consumeOptional("/");
        let t = [];
        for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/("); )
            this.capture("/"),
            t.push(this.parseSegment());
        let n = {};
        this.peekStartsWith("/(") && (this.capture("/"),
        n = this.parseParens(!0));
        let r = {};
        return this.peekStartsWith("(") && (r = this.parseParens(!1)),
        (t.length > 0 || Object.keys(n).length > 0) && (r[O] = new V(t,n)),
        r
    }
    parseSegment() {
        let t = cp(this.remaining);
        if (t === "" && this.peekStartsWith(";"))
            throw new I(4009,!1);
        return this.capture(t),
        new Tn(eu(t),this.parseMatrixParams())
    }
    parseMatrixParams() {
        let t = {};
        for (; this.consumeOptional(";"); )
            this.parseParam(t);
        return t
    }
    parseParam(t) {
        let n = bk(this.remaining);
        if (!n)
            return;
        this.capture(n);
        let r = "";
        if (this.consumeOptional("=")) {
            let i = cp(this.remaining);
            i && (r = i,
            this.capture(r))
        }
        t[eu(n)] = eu(r)
    }
    parseQueryParam(t) {
        let n = Tk(this.remaining);
        if (!n)
            return;
        this.capture(n);
        let r = "";
        if (this.consumeOptional("=")) {
            let s = Ak(this.remaining);
            s && (r = s,
            this.capture(r))
        }
        let i = O_(n)
          , o = O_(r);
        if (t.hasOwnProperty(i)) {
            let s = t[i];
            Array.isArray(s) || (s = [s],
            t[i] = s),
            s.push(o)
        } else
            t[i] = o
    }
    parseParens(t) {
        let n = {};
        for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0; ) {
            let r = cp(this.remaining)
              , i = this.remaining[r.length];
            if (i !== "/" && i !== ")" && i !== ";")
                throw new I(4010,!1);
            let o;
            r.indexOf(":") > -1 ? (o = r.slice(0, r.indexOf(":")),
            this.capture(o),
            this.capture(":")) : t && (o = O);
            let s = this.parseChildren();
            n[o ?? O] = Object.keys(s).length === 1 && s[O] ? s[O] : new V([],s),
            this.consumeOptional("//")
        }
        return n
    }
    peekStartsWith(t) {
        return this.remaining.startsWith(t)
    }
    consumeOptional(t) {
        return this.peekStartsWith(t) ? (this.remaining = this.remaining.substring(t.length),
        !0) : !1
    }
    capture(t) {
        if (!this.consumeOptional(t))
            throw new I(4011,!1)
    }
}
;
function q_(e) {
    return e.segments.length > 0 ? new V([],{
        [O]: e
    }) : e
}
function K_(e) {
    let t = {};
    for (let[r,i] of Object.entries(e.children)) {
        let o = K_(i);
        if (r === O && o.segments.length === 0 && o.hasChildren())
            for (let[s,a] of Object.entries(o.children))
                t[s] = a;
        else
            (o.segments.length > 0 || o.hasChildren()) && (t[r] = o)
    }
    let n = new V(e.segments,t);
    return Nk(n)
}
function Nk(e) {
    if (e.numberOfChildren === 1 && e.children[O]) {
        let t = e.children[O];
        return new V(e.segments.concat(t.segments),t.children)
    }
    return e
}
function Ci(e) {
    return e instanceof Dt
}
function Y_(e, t, n=null, r=null) {
    let i = Z_(e);
    return Q_(i, t, n, r)
}
function Z_(e) {
    let t;
    function n(o) {
        let s = {};
        for (let c of o.children) {
            let u = n(c);
            s[c.outlet] = u
        }
        let a = new V(o.url,s);
        return o === e && (t = a),
        a
    }
    let r = n(e.root)
      , i = q_(r);
    return t ?? i
}
function Q_(e, t, n, r) {
    let i = e;
    for (; i.parent; )
        i = i.parent;
    if (t.length === 0)
        return up(i, i, i, n, r);
    let o = Rk(t);
    if (o.toRoot())
        return up(i, i, new V([],{}), n, r);
    let s = Mk(o, i, e)
      , a = s.processChildren ? Qo(s.segmentGroup, s.index, o.commands) : X_(s.segmentGroup, s.index, o.commands);
    return up(i, s.segmentGroup, a, n, r)
}
function tu(e) {
    return typeof e == "object" && e != null && !e.outlets && !e.segmentPath
}
function es(e) {
    return typeof e == "object" && e != null && e.outlets
}
function up(e, t, n, r, i) {
    let o = {};
    r && Object.entries(r).forEach( ([c,u]) => {
        o[c] = Array.isArray(u) ? u.map(l => `${l}`) : `${u}`
    }
    );
    let s;
    e === t ? s = n : s = J_(e, t, n);
    let a = q_(K_(s));
    return new Dt(a,o,i)
}
function J_(e, t, n) {
    let r = {};
    return Object.entries(e.children).forEach( ([i,o]) => {
        o === t ? r[i] = n : r[i] = J_(o, t, n)
    }
    ),
    new V(e.segments,r)
}
var nu = class {
    isAbsolute;
    numberOfDoubleDots;
    commands;
    constructor(t, n, r) {
        if (this.isAbsolute = t,
        this.numberOfDoubleDots = n,
        this.commands = r,
        t && r.length > 0 && tu(r[0]))
            throw new I(4003,!1);
        let i = r.find(es);
        if (i && i !== V_(r))
            throw new I(4004,!1)
    }
    toRoot() {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    }
}
;
function Rk(e) {
    if (typeof e[0] == "string" && e.length === 1 && e[0] === "/")
        return new nu(!0,0,e);
    let t = 0
      , n = !1
      , r = e.reduce( (i, o, s) => {
        if (typeof o == "object" && o != null) {
            if (o.outlets) {
                let a = {};
                return Object.entries(o.outlets).forEach( ([c,u]) => {
                    a[c] = typeof u == "string" ? u.split("/") : u
                }
                ),
                [...i, {
                    outlets: a
                }]
            }
            if (o.segmentPath)
                return [...i, o.segmentPath]
        }
        return typeof o != "string" ? [...i, o] : s === 0 ? (o.split("/").forEach( (a, c) => {
            c == 0 && a === "." || (c == 0 && a === "" ? n = !0 : a === ".." ? t++ : a != "" && i.push(a))
        }
        ),
        i) : [...i, o]
    }
    , []);
    return new nu(n,t,r)
}
var wi = class {
    segmentGroup;
    processChildren;
    index;
    constructor(t, n, r) {
        this.segmentGroup = t,
        this.processChildren = n,
        this.index = r
    }
}
;
function Mk(e, t, n) {
    if (e.isAbsolute)
        return new wi(t,!0,0);
    if (!n)
        return new wi(t,!1,NaN);
    if (n.parent === null)
        return new wi(n,!0,0);
    let r = tu(e.commands[0]) ? 0 : 1
      , i = n.segments.length - 1 + r;
    return Ok(n, i, e.numberOfDoubleDots)
}
function Ok(e, t, n) {
    let r = e
      , i = t
      , o = n;
    for (; o > i; ) {
        if (o -= i,
        r = r.parent,
        !r)
            throw new I(4005,!1);
        i = r.segments.length
    }
    return new wi(r,!1,i - o)
}
function kk(e) {
    return es(e[0]) ? e[0].outlets : {
        [O]: e
    }
}
function X_(e, t, n) {
    if (e ??= new V([],{}),
    e.segments.length === 0 && e.hasChildren())
        return Qo(e, t, n);
    let r = xk(e, t, n)
      , i = n.slice(r.commandIndex);
    if (r.match && r.pathIndex < e.segments.length) {
        let o = new V(e.segments.slice(0, r.pathIndex),{});
        return o.children[O] = new V(e.segments.slice(r.pathIndex),e.children),
        Qo(o, 0, i)
    } else
        return r.match && i.length === 0 ? new V(e.segments,{}) : r.match && !e.hasChildren() ? mp(e, t, n) : r.match ? Qo(e, 0, i) : mp(e, t, n)
}
function Qo(e, t, n) {
    if (n.length === 0)
        return new V(e.segments,{});
    {
        let r = kk(n)
          , i = {};
        if (Object.keys(r).some(o => o !== O) && e.children[O] && e.numberOfChildren === 1 && e.children[O].segments.length === 0) {
            let o = Qo(e.children[O], t, n);
            return new V(e.segments,o.children)
        }
        return Object.entries(r).forEach( ([o,s]) => {
            typeof s == "string" && (s = [s]),
            s !== null && (i[o] = X_(e.children[o], t, s))
        }
        ),
        Object.entries(e.children).forEach( ([o,s]) => {
            r[o] === void 0 && (i[o] = s)
        }
        ),
        new V(e.segments,i)
    }
}
function xk(e, t, n) {
    let r = 0
      , i = t
      , o = {
        match: !1,
        pathIndex: 0,
        commandIndex: 0
    };
    for (; i < e.segments.length; ) {
        if (r >= n.length)
            return o;
        let s = e.segments[i]
          , a = n[r];
        if (es(a))
            break;
        let c = `${a}`
          , u = r < n.length - 1 ? n[r + 1] : null;
        if (i > 0 && c === void 0)
            break;
        if (c && u && typeof u == "object" && u.outlets === void 0) {
            if (!x_(c, u, s))
                return o;
            r += 2
        } else {
            if (!x_(c, {}, s))
                return o;
            r++
        }
        i++
    }
    return {
        match: !0,
        pathIndex: i,
        commandIndex: r
    }
}
function mp(e, t, n) {
    let r = e.segments.slice(0, t)
      , i = 0;
    for (; i < n.length; ) {
        let o = n[i];
        if (es(o)) {
            let c = Pk(o.outlets);
            return new V(r,c)
        }
        if (i === 0 && tu(n[0])) {
            let c = e.segments[t];
            r.push(new Tn(c.path,k_(n[0]))),
            i++;
            continue
        }
        let s = es(o) ? o.outlets[O] : `${o}`
          , a = i < n.length - 1 ? n[i + 1] : null;
        s && a && tu(a) ? (r.push(new Tn(s,k_(a))),
        i += 2) : (r.push(new Tn(s,{})),
        i++)
    }
    return new V(r,{})
}
function Pk(e) {
    let t = {};
    return Object.entries(e).forEach( ([n,r]) => {
        typeof r == "string" && (r = [r]),
        r !== null && (t[n] = mp(new V([],{}), 0, r))
    }
    ),
    t
}
function k_(e) {
    let t = {};
    return Object.entries(e).forEach( ([n,r]) => t[n] = `${r}`),
    t
}
function x_(e, t, n) {
    return e == n.path && It(t, n.parameters)
}
var Jo = "imperative"
  , fe = (function(e) {
    return e[e.NavigationStart = 0] = "NavigationStart",
    e[e.NavigationEnd = 1] = "NavigationEnd",
    e[e.NavigationCancel = 2] = "NavigationCancel",
    e[e.NavigationError = 3] = "NavigationError",
    e[e.RoutesRecognized = 4] = "RoutesRecognized",
    e[e.ResolveStart = 5] = "ResolveStart",
    e[e.ResolveEnd = 6] = "ResolveEnd",
    e[e.GuardsCheckStart = 7] = "GuardsCheckStart",
    e[e.GuardsCheckEnd = 8] = "GuardsCheckEnd",
    e[e.RouteConfigLoadStart = 9] = "RouteConfigLoadStart",
    e[e.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd",
    e[e.ChildActivationStart = 11] = "ChildActivationStart",
    e[e.ChildActivationEnd = 12] = "ChildActivationEnd",
    e[e.ActivationStart = 13] = "ActivationStart",
    e[e.ActivationEnd = 14] = "ActivationEnd",
    e[e.Scroll = 15] = "Scroll",
    e[e.NavigationSkipped = 16] = "NavigationSkipped",
    e
}
)(fe || {})
  , Ve = class {
    id;
    url;
    constructor(t, n) {
        this.id = t,
        this.url = n
    }
}
  , _r = class extends Ve {
    type = fe.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(t, n, r="imperative", i=null) {
        super(t, n),
        this.navigationTrigger = r,
        this.restoredState = i
    }
    toString() {
        return `NavigationStart(id: ${this.id}, url: '${this.url}')`
    }
}
  , $t = class extends Ve {
    urlAfterRedirects;
    type = fe.NavigationEnd;
    constructor(t, n, r) {
        super(t, n),
        this.urlAfterRedirects = r
    }
    toString() {
        return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
    }
}
  , we = (function(e) {
    return e[e.Redirect = 0] = "Redirect",
    e[e.SupersededByNewNavigation = 1] = "SupersededByNewNavigation",
    e[e.NoDataFromResolver = 2] = "NoDataFromResolver",
    e[e.GuardRejected = 3] = "GuardRejected",
    e[e.Aborted = 4] = "Aborted",
    e
}
)(we || {})
  , ts = (function(e) {
    return e[e.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation",
    e[e.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy",
    e
}
)(ts || {})
  , _t = class extends Ve {
    reason;
    code;
    type = fe.NavigationCancel;
    constructor(t, n, r, i) {
        super(t, n),
        this.reason = r,
        this.code = i
    }
    toString() {
        return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
    }
}
  , Wt = class extends Ve {
    reason;
    code;
    type = fe.NavigationSkipped;
    constructor(t, n, r, i) {
        super(t, n),
        this.reason = r,
        this.code = i
    }
}
  , Ti = class extends Ve {
    error;
    target;
    type = fe.NavigationError;
    constructor(t, n, r, i) {
        super(t, n),
        this.error = r,
        this.target = i
    }
    toString() {
        return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
    }
}
  , ns = class extends Ve {
    urlAfterRedirects;
    state;
    type = fe.RoutesRecognized;
    constructor(t, n, r, i) {
        super(t, n),
        this.urlAfterRedirects = r,
        this.state = i
    }
    toString() {
        return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}
  , ru = class extends Ve {
    urlAfterRedirects;
    state;
    type = fe.GuardsCheckStart;
    constructor(t, n, r, i) {
        super(t, n),
        this.urlAfterRedirects = r,
        this.state = i
    }
    toString() {
        return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}
  , iu = class extends Ve {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = fe.GuardsCheckEnd;
    constructor(t, n, r, i, o) {
        super(t, n),
        this.urlAfterRedirects = r,
        this.state = i,
        this.shouldActivate = o
    }
    toString() {
        return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
    }
}
  , ou = class extends Ve {
    urlAfterRedirects;
    state;
    type = fe.ResolveStart;
    constructor(t, n, r, i) {
        super(t, n),
        this.urlAfterRedirects = r,
        this.state = i
    }
    toString() {
        return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}
  , su = class extends Ve {
    urlAfterRedirects;
    state;
    type = fe.ResolveEnd;
    constructor(t, n, r, i) {
        super(t, n),
        this.urlAfterRedirects = r,
        this.state = i
    }
    toString() {
        return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
    }
}
  , au = class {
    route;
    type = fe.RouteConfigLoadStart;
    constructor(t) {
        this.route = t
    }
    toString() {
        return `RouteConfigLoadStart(path: ${this.route.path})`
    }
}
  , cu = class {
    route;
    type = fe.RouteConfigLoadEnd;
    constructor(t) {
        this.route = t
    }
    toString() {
        return `RouteConfigLoadEnd(path: ${this.route.path})`
    }
}
  , uu = class {
    snapshot;
    type = fe.ChildActivationStart;
    constructor(t) {
        this.snapshot = t
    }
    toString() {
        return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}
  , lu = class {
    snapshot;
    type = fe.ChildActivationEnd;
    constructor(t) {
        this.snapshot = t
    }
    toString() {
        return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}
  , du = class {
    snapshot;
    type = fe.ActivationStart;
    constructor(t) {
        this.snapshot = t
    }
    toString() {
        return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}
  , fu = class {
    snapshot;
    type = fe.ActivationEnd;
    constructor(t) {
        this.snapshot = t
    }
    toString() {
        return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
    }
}
;
var rs = class {
}
  , Si = class {
    url;
    navigationBehaviorOptions;
    constructor(t, n) {
        this.url = t,
        this.navigationBehaviorOptions = n
    }
}
;
function Lk(e) {
    return !(e instanceof rs) && !(e instanceof Si)
}
function Fk(e, t) {
    return e.providers && !e._injector && (e._injector = bo(e.providers, t, `Route: ${e.path}`)),
    e._injector ?? t
}
function ct(e) {
    return e.outlet || O
}
function jk(e, t) {
    let n = e.filter(r => ct(r) === t);
    return n.push(...e.filter(r => ct(r) !== t)),
    n
}
function Ri(e) {
    if (!e)
        return null;
    if (e.routeConfig?._injector)
        return e.routeConfig._injector;
    for (let t = e.parent; t; t = t.parent) {
        let n = t.routeConfig;
        if (n?._loadedInjector)
            return n._loadedInjector;
        if (n?._injector)
            return n._injector
    }
    return null
}
var hu = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() {
        return Ri(this.route?.snapshot) ?? this.rootInjector
    }
    constructor(t) {
        this.rootInjector = t,
        this.children = new Mi(this.rootInjector)
    }
}
  , Mi = ( () => {
    class e {
        rootInjector;
        contexts = new Map;
        constructor(n) {
            this.rootInjector = n
        }
        onChildOutletCreated(n, r) {
            let i = this.getOrCreateContext(n);
            i.outlet = r,
            this.contexts.set(n, i)
        }
        onChildOutletDestroyed(n) {
            let r = this.getContext(n);
            r && (r.outlet = null,
            r.attachRef = null)
        }
        onOutletDeactivated() {
            let n = this.contexts;
            return this.contexts = new Map,
            n
        }
        onOutletReAttached(n) {
            this.contexts = n
        }
        getOrCreateContext(n) {
            let r = this.getContext(n);
            return r || (r = new hu(this.rootInjector),
            this.contexts.set(n, r)),
            r
        }
        getContext(n) {
            return this.contexts.get(n) || null
        }
        static \u0275fac = function(r) {
            return new (r || e)(R(Q))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , pu = class {
    _root;
    constructor(t) {
        this._root = t
    }
    get root() {
        return this._root.value
    }
    parent(t) {
        let n = this.pathFromRoot(t);
        return n.length > 1 ? n[n.length - 2] : null
    }
    children(t) {
        let n = vp(t, this._root);
        return n ? n.children.map(r => r.value) : []
    }
    firstChild(t) {
        let n = vp(t, this._root);
        return n && n.children.length > 0 ? n.children[0].value : null
    }
    siblings(t) {
        let n = yp(t, this._root);
        return n.length < 2 ? [] : n[n.length - 2].children.map(i => i.value).filter(i => i !== t)
    }
    pathFromRoot(t) {
        return yp(t, this._root).map(n => n.value)
    }
}
;
function vp(e, t) {
    if (e === t.value)
        return t;
    for (let n of t.children) {
        let r = vp(e, n);
        if (r)
            return r
    }
    return null
}
function yp(e, t) {
    if (e === t.value)
        return [t];
    for (let n of t.children) {
        let r = yp(e, n);
        if (r.length)
            return r.unshift(t),
            r
    }
    return []
}
var Ue = class {
    value;
    children;
    constructor(t, n) {
        this.value = t,
        this.children = n
    }
    toString() {
        return `TreeNode(${this.value})`
    }
}
;
function Di(e) {
    let t = {};
    return e && e.children.forEach(n => t[n.value.outlet] = n),
    t
}
var is = class extends pu {
    snapshot;
    constructor(t, n) {
        super(t),
        this.snapshot = n,
        Tp(this, t)
    }
    toString() {
        return this.snapshot.toString()
    }
}
;
function eD(e) {
    let t = Uk(e)
      , n = new oe([new Tn("",{})])
      , r = new oe({})
      , i = new oe({})
      , o = new oe({})
      , s = new oe("")
      , a = new Sn(n,r,o,s,i,O,e,t.root);
    return a.snapshot = t.root,
    new is(new Ue(a,[]),t)
}
function Uk(e) {
    let t = {}
      , n = {}
      , r = {}
      , o = new yr([],t,r,"",n,O,e,null,{});
    return new os("",new Ue(o,[]))
}
var Sn = class {
    urlSubject;
    paramsSubject;
    queryParamsSubject;
    fragmentSubject;
    dataSubject;
    outlet;
    component;
    snapshot;
    _futureSnapshot;
    _routerState;
    _paramMap;
    _queryParamMap;
    title;
    url;
    params;
    queryParams;
    fragment;
    data;
    constructor(t, n, r, i, o, s, a, c) {
        this.urlSubject = t,
        this.paramsSubject = n,
        this.queryParamsSubject = r,
        this.fragmentSubject = i,
        this.dataSubject = o,
        this.outlet = s,
        this.component = a,
        this._futureSnapshot = c,
        this.title = this.dataSubject?.pipe(P(u => u[us])) ?? w(void 0),
        this.url = t,
        this.params = n,
        this.queryParams = r,
        this.fragment = i,
        this.data = o
    }
    get routeConfig() {
        return this._futureSnapshot.routeConfig
    }
    get root() {
        return this._routerState.root
    }
    get parent() {
        return this._routerState.parent(this)
    }
    get firstChild() {
        return this._routerState.firstChild(this)
    }
    get children() {
        return this._routerState.children(this)
    }
    get pathFromRoot() {
        return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
        return this._paramMap ??= this.params.pipe(P(t => Er(t))),
        this._paramMap
    }
    get queryParamMap() {
        return this._queryParamMap ??= this.queryParams.pipe(P(t => Er(t))),
        this._queryParamMap
    }
    toString() {
        return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
    }
}
;
function gu(e, t, n="emptyOnly") {
    let r, {routeConfig: i} = e;
    return t !== null && (n === "always" || i?.path === "" || !t.component && !t.routeConfig?.loadComponent) ? r = {
        params: m(m({}, t.params), e.params),
        data: m(m({}, t.data), e.data),
        resolve: m(m(m(m({}, e.data), t.data), i?.data), e._resolvedData)
    } : r = {
        params: m({}, e.params),
        data: m({}, e.data),
        resolve: m(m({}, e.data), e._resolvedData ?? {})
    },
    i && nD(i) && (r.resolve[us] = i.title),
    r
}
var yr = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    get title() {
        return this.data?.[us]
    }
    constructor(t, n, r, i, o, s, a, c, u) {
        this.url = t,
        this.params = n,
        this.queryParams = r,
        this.fragment = i,
        this.data = o,
        this.outlet = s,
        this.component = a,
        this.routeConfig = c,
        this._resolve = u
    }
    get root() {
        return this._routerState.root
    }
    get parent() {
        return this._routerState.parent(this)
    }
    get firstChild() {
        return this._routerState.firstChild(this)
    }
    get children() {
        return this._routerState.children(this)
    }
    get pathFromRoot() {
        return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
        return this._paramMap ??= Er(this.params),
        this._paramMap
    }
    get queryParamMap() {
        return this._queryParamMap ??= Er(this.queryParams),
        this._queryParamMap
    }
    toString() {
        let t = this.url.map(r => r.toString()).join("/")
          , n = this.routeConfig ? this.routeConfig.path : "";
        return `Route(url:'${t}', path:'${n}')`
    }
}
  , os = class extends pu {
    url;
    constructor(t, n) {
        super(n),
        this.url = t,
        Tp(this, n)
    }
    toString() {
        return tD(this._root)
    }
}
;
function Tp(e, t) {
    t.value._routerState = e,
    t.children.forEach(n => Tp(e, n))
}
function tD(e) {
    let t = e.children.length > 0 ? ` { ${e.children.map(tD).join(", ")} } ` : "";
    return `${e.value}${t}`
}
function lp(e) {
    if (e.snapshot) {
        let t = e.snapshot
          , n = e._futureSnapshot;
        e.snapshot = n,
        It(t.queryParams, n.queryParams) || e.queryParamsSubject.next(n.queryParams),
        t.fragment !== n.fragment && e.fragmentSubject.next(n.fragment),
        It(t.params, n.params) || e.paramsSubject.next(n.params),
        fk(t.url, n.url) || e.urlSubject.next(n.url),
        It(t.data, n.data) || e.dataSubject.next(n.data)
    } else
        e.snapshot = e._futureSnapshot,
        e.dataSubject.next(e._futureSnapshot.data)
}
function Ep(e, t) {
    let n = It(e.params, t.params) && mk(e.url, t.url)
      , r = !e.parent != !t.parent;
    return n && !r && (!e.parent || Ep(e.parent, t.parent))
}
function nD(e) {
    return typeof e.title == "string" || e.title === null
}
var rD = new E("")
  , Sp = ( () => {
    class e {
        activated = null;
        get activatedComponentRef() {
            return this.activated
        }
        _activatedRoute = null;
        name = O;
        activateEvents = new de;
        deactivateEvents = new de;
        attachEvents = new de;
        detachEvents = new de;
        routerOutletData = EE();
        parentContexts = p(Mi);
        location = p(fn);
        changeDetector = p(Pf);
        inputBinder = p(Eu, {
            optional: !0
        });
        supportsBindingToComponentInputs = !0;
        ngOnChanges(n) {
            if (n.name) {
                let {firstChange: r, previousValue: i} = n.name;
                if (r)
                    return;
                this.isTrackedInParentContexts(i) && (this.deactivate(),
                this.parentContexts.onChildOutletDestroyed(i)),
                this.initializeOutletWithName()
            }
        }
        ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name),
            this.inputBinder?.unsubscribeFromRouteData(this)
        }
        isTrackedInParentContexts(n) {
            return this.parentContexts.getContext(n)?.outlet === this
        }
        ngOnInit() {
            this.initializeOutletWithName()
        }
        initializeOutletWithName() {
            if (this.parentContexts.onChildOutletCreated(this.name, this),
            this.activated)
                return;
            let n = this.parentContexts.getContext(this.name);
            n?.route && (n.attachRef ? this.attach(n.attachRef, n.route) : this.activateWith(n.route, n.injector))
        }
        get isActivated() {
            return !!this.activated
        }
        get component() {
            if (!this.activated)
                throw new I(4012,!1);
            return this.activated.instance
        }
        get activatedRoute() {
            if (!this.activated)
                throw new I(4012,!1);
            return this._activatedRoute
        }
        get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
        }
        detach() {
            if (!this.activated)
                throw new I(4012,!1);
            this.location.detach();
            let n = this.activated;
            return this.activated = null,
            this._activatedRoute = null,
            this.detachEvents.emit(n.instance),
            n
        }
        attach(n, r) {
            this.activated = n,
            this._activatedRoute = r,
            this.location.insert(n.hostView),
            this.inputBinder?.bindActivatedRouteToOutletComponent(this),
            this.attachEvents.emit(n.instance)
        }
        deactivate() {
            if (this.activated) {
                let n = this.component;
                this.activated.destroy(),
                this.activated = null,
                this._activatedRoute = null,
                this.deactivateEvents.emit(n)
            }
        }
        activateWith(n, r) {
            if (this.isActivated)
                throw new I(4013,!1);
            this._activatedRoute = n;
            let i = this.location
              , s = n.snapshot.component
              , a = this.parentContexts.getOrCreateContext(this.name).children
              , c = new Ip(n,a,i.injector,this.routerOutletData);
            this.activated = i.createComponent(s, {
                index: i.length,
                injector: c,
                environmentInjector: r
            }),
            this.changeDetector.markForCheck(),
            this.inputBinder?.bindActivatedRouteToOutletComponent(this),
            this.activateEvents.emit(this.activated.instance)
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275dir = Lt({
            type: e,
            selectors: [["router-outlet"]],
            inputs: {
                name: "name",
                routerOutletData: [1, "routerOutletData"]
            },
            outputs: {
                activateEvents: "activate",
                deactivateEvents: "deactivate",
                attachEvents: "attach",
                detachEvents: "detach"
            },
            exportAs: ["outlet"],
            features: [si]
        })
    }
    return e
}
)()
  , Ip = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(t, n, r, i) {
        this.route = t,
        this.childContexts = n,
        this.parent = r,
        this.outletData = i
    }
    get(t, n) {
        return t === Sn ? this.route : t === Mi ? this.childContexts : t === rD ? this.outletData : this.parent.get(t, n)
    }
}
  , Eu = new E("");
var Ap = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275cmp = Co({
            type: e,
            selectors: [["ng-component"]],
            exportAs: ["emptyRouterOutlet"],
            decls: 1,
            vars: 0,
            template: function(r, i) {
                r & 1 && ac(0, "router-outlet")
            },
            dependencies: [Sp],
            encapsulation: 2
        })
    }
    return e
}
)();
function Np(e) {
    let t = e.children && e.children.map(Np)
      , n = t ? j(m({}, e), {
        children: t
    }) : m({}, e);
    return !n.component && !n.loadComponent && (t || n.loadChildren) && n.outlet && n.outlet !== O && (n.component = Ap),
    n
}
function Vk(e, t, n) {
    let r = ss(e, t._root, n ? n._root : void 0);
    return new is(r,t)
}
function ss(e, t, n) {
    if (n && e.shouldReuseRoute(t.value, n.value.snapshot)) {
        let r = n.value;
        r._futureSnapshot = t.value;
        let i = Bk(e, t, n);
        return new Ue(r,i)
    } else {
        if (e.shouldAttach(t.value)) {
            let o = e.retrieve(t.value);
            if (o !== null) {
                let s = o.route;
                return s.value._futureSnapshot = t.value,
                s.children = t.children.map(a => ss(e, a)),
                s
            }
        }
        let r = Hk(t.value)
          , i = t.children.map(o => ss(e, o));
        return new Ue(r,i)
    }
}
function Bk(e, t, n) {
    return t.children.map(r => {
        for (let i of n.children)
            if (e.shouldReuseRoute(r.value, i.value.snapshot))
                return ss(e, r, i);
        return ss(e, r)
    }
    )
}
function Hk(e) {
    return new Sn(new oe(e.url),new oe(e.params),new oe(e.queryParams),new oe(e.fragment),new oe(e.data),e.outlet,e.component,e)
}
var Ai = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(t, n) {
        this.redirectTo = t,
        this.navigationBehaviorOptions = n
    }
}
  , iD = "ngNavigationCancelingError";
function mu(e, t) {
    let {redirectTo: n, navigationBehaviorOptions: r} = Ci(t) ? {
        redirectTo: t,
        navigationBehaviorOptions: void 0
    } : t
      , i = oD(!1, we.Redirect);
    return i.url = n,
    i.navigationBehaviorOptions = r,
    i
}
function oD(e, t) {
    let n = new Error(`NavigationCancelingError: ${e || ""}`);
    return n[iD] = !0,
    n.cancellationCode = t,
    n
}
function $k(e) {
    return sD(e) && Ci(e.url)
}
function sD(e) {
    return !!e && e[iD]
}
var Wk = (e, t, n, r) => P(i => (new _p(t,i.targetRouterState,i.currentRouterState,n,r).activate(e),
i))
  , _p = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(t, n, r, i, o) {
        this.routeReuseStrategy = t,
        this.futureState = n,
        this.currState = r,
        this.forwardEvent = i,
        this.inputBindingEnabled = o
    }
    activate(t) {
        let n = this.futureState._root
          , r = this.currState ? this.currState._root : null;
        this.deactivateChildRoutes(n, r, t),
        lp(this.futureState.root),
        this.activateChildRoutes(n, r, t)
    }
    deactivateChildRoutes(t, n, r) {
        let i = Di(n);
        t.children.forEach(o => {
            let s = o.value.outlet;
            this.deactivateRoutes(o, i[s], r),
            delete i[s]
        }
        ),
        Object.values(i).forEach(o => {
            this.deactivateRouteAndItsChildren(o, r)
        }
        )
    }
    deactivateRoutes(t, n, r) {
        let i = t.value
          , o = n ? n.value : null;
        if (i === o)
            if (i.component) {
                let s = r.getContext(i.outlet);
                s && this.deactivateChildRoutes(t, n, s.children)
            } else
                this.deactivateChildRoutes(t, n, r);
        else
            o && this.deactivateRouteAndItsChildren(n, r)
    }
    deactivateRouteAndItsChildren(t, n) {
        t.value.component && this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, n) : this.deactivateRouteAndOutlet(t, n)
    }
    detachAndStoreRouteSubtree(t, n) {
        let r = n.getContext(t.value.outlet)
          , i = r && t.value.component ? r.children : n
          , o = Di(t);
        for (let s of Object.values(o))
            this.deactivateRouteAndItsChildren(s, i);
        if (r && r.outlet) {
            let s = r.outlet.detach()
              , a = r.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
                componentRef: s,
                route: t,
                contexts: a
            })
        }
    }
    deactivateRouteAndOutlet(t, n) {
        let r = n.getContext(t.value.outlet)
          , i = r && t.value.component ? r.children : n
          , o = Di(t);
        for (let s of Object.values(o))
            this.deactivateRouteAndItsChildren(s, i);
        r && (r.outlet && (r.outlet.deactivate(),
        r.children.onOutletDeactivated()),
        r.attachRef = null,
        r.route = null)
    }
    activateChildRoutes(t, n, r) {
        let i = Di(n);
        t.children.forEach(o => {
            this.activateRoutes(o, i[o.value.outlet], r),
            this.forwardEvent(new fu(o.value.snapshot))
        }
        ),
        t.children.length && this.forwardEvent(new lu(t.value.snapshot))
    }
    activateRoutes(t, n, r) {
        let i = t.value
          , o = n ? n.value : null;
        if (lp(i),
        i === o)
            if (i.component) {
                let s = r.getOrCreateContext(i.outlet);
                this.activateChildRoutes(t, n, s.children)
            } else
                this.activateChildRoutes(t, n, r);
        else if (i.component) {
            let s = r.getOrCreateContext(i.outlet);
            if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
                let a = this.routeReuseStrategy.retrieve(i.snapshot);
                this.routeReuseStrategy.store(i.snapshot, null),
                s.children.onOutletReAttached(a.contexts),
                s.attachRef = a.componentRef,
                s.route = a.route.value,
                s.outlet && s.outlet.attach(a.componentRef, a.route.value),
                lp(a.route.value),
                this.activateChildRoutes(t, null, s.children)
            } else
                s.attachRef = null,
                s.route = i,
                s.outlet && s.outlet.activateWith(i, s.injector),
                this.activateChildRoutes(t, null, s.children)
        } else
            this.activateChildRoutes(t, null, r)
    }
}
  , vu = class {
    path;
    route;
    constructor(t) {
        this.path = t,
        this.route = this.path[this.path.length - 1]
    }
}
  , bi = class {
    component;
    route;
    constructor(t, n) {
        this.component = t,
        this.route = n
    }
}
;
function zk(e, t, n) {
    let r = e._root
      , i = t ? t._root : null;
    return Zo(r, i, n, [r.value])
}
function Gk(e) {
    let t = e.routeConfig ? e.routeConfig.canActivateChild : null;
    return !t || t.length === 0 ? null : {
        node: e,
        guards: t
    }
}
function Oi(e, t) {
    let n = Symbol()
      , r = t.get(e, n);
    return r === n ? typeof e == "function" && !ml(e) ? e : t.get(e) : r
}
function Zo(e, t, n, r, i={
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    let o = Di(t);
    return e.children.forEach(s => {
        qk(s, o[s.value.outlet], n, r.concat([s.value]), i),
        delete o[s.value.outlet]
    }
    ),
    Object.entries(o).forEach( ([s,a]) => Xo(a, n.getContext(s), i)),
    i
}
function qk(e, t, n, r, i={
    canDeactivateChecks: [],
    canActivateChecks: []
}) {
    let o = e.value
      , s = t ? t.value : null
      , a = n ? n.getContext(e.value.outlet) : null;
    if (s && o.routeConfig === s.routeConfig) {
        let c = Kk(s, o, o.routeConfig.runGuardsAndResolvers);
        c ? i.canActivateChecks.push(new vu(r)) : (o.data = s.data,
        o._resolvedData = s._resolvedData),
        o.component ? Zo(e, t, a ? a.children : null, r, i) : Zo(e, t, n, r, i),
        c && a && a.outlet && a.outlet.isActivated && i.canDeactivateChecks.push(new bi(a.outlet.component,s))
    } else
        s && Xo(t, a, i),
        i.canActivateChecks.push(new vu(r)),
        o.component ? Zo(e, null, a ? a.children : null, r, i) : Zo(e, null, n, r, i);
    return i
}
function Kk(e, t, n) {
    if (typeof n == "function")
        return n(e, t);
    switch (n) {
    case "pathParamsChange":
        return !vr(e.url, t.url);
    case "pathParamsOrQueryParamsChange":
        return !vr(e.url, t.url) || !It(e.queryParams, t.queryParams);
    case "always":
        return !0;
    case "paramsOrQueryParamsChange":
        return !Ep(e, t) || !It(e.queryParams, t.queryParams);
    case "paramsChange":
    default:
        return !Ep(e, t)
    }
}
function Xo(e, t, n) {
    let r = Di(e)
      , i = e.value;
    Object.entries(r).forEach( ([o,s]) => {
        i.component ? t ? Xo(s, t.children.getContext(o), n) : Xo(s, null, n) : Xo(s, t, n)
    }
    ),
    i.component ? t && t.outlet && t.outlet.isActivated ? n.canDeactivateChecks.push(new bi(t.outlet.component,i)) : n.canDeactivateChecks.push(new bi(null,i)) : n.canDeactivateChecks.push(new bi(null,i))
}
function ds(e) {
    return typeof e == "function"
}
function Yk(e) {
    return typeof e == "boolean"
}
function Zk(e) {
    return e && ds(e.canLoad)
}
function Qk(e) {
    return e && ds(e.canActivate)
}
function Jk(e) {
    return e && ds(e.canActivateChild)
}
function Xk(e) {
    return e && ds(e.canDeactivate)
}
function ex(e) {
    return e && ds(e.canMatch)
}
function aD(e) {
    return e instanceof bt || e?.name === "EmptyError"
}
var Qc = Symbol("INITIAL_VALUE");
function Ni() {
    return Ce(e => Fr(e.map(t => t.pipe(Ze(1), Gi(Qc)))).pipe(P(t => {
        for (let n of t)
            if (n !== !0) {
                if (n === Qc)
                    return Qc;
                if (n === !1 || tx(n))
                    return n
            }
        return !0
    }
    ), ge(t => t !== Qc), Ze(1)))
}
function tx(e) {
    return Ci(e) || e instanceof Ai
}
function nx(e, t) {
    return se(n => {
        let {targetSnapshot: r, currentSnapshot: i, guards: {canActivateChecks: o, canDeactivateChecks: s}} = n;
        return s.length === 0 && o.length === 0 ? w(j(m({}, n), {
            guardsResult: !0
        })) : rx(s, r, i, e).pipe(se(a => a && Yk(a) ? ix(r, o, e, t) : w(a)), P(a => j(m({}, n), {
            guardsResult: a
        })))
    }
    )
}
function rx(e, t, n, r) {
    return Y(e).pipe(se(i => ux(i.component, i.route, n, t, r)), Ct(i => i !== !0, !0))
}
function ix(e, t, n, r) {
    return Y(t).pipe(jr(i => Qt(sx(i.route.parent, r), ox(i.route, r), cx(e, i.path, n), ax(e, i.route, n))), Ct(i => i !== !0, !0))
}
function ox(e, t) {
    return e !== null && t && t(new du(e)),
    w(!0)
}
function sx(e, t) {
    return e !== null && t && t(new uu(e)),
    w(!0)
}
function ax(e, t, n) {
    let r = t.routeConfig ? t.routeConfig.canActivate : null;
    if (!r || r.length === 0)
        return w(!0);
    let i = r.map(o => Hi( () => {
        let s = Ri(t) ?? n
          , a = Oi(o, s)
          , c = Qk(a) ? a.canActivate(t, e) : ue(s, () => a(t, e));
        return zt(c).pipe(Ct())
    }
    ));
    return w(i).pipe(Ni())
}
function cx(e, t, n) {
    let r = t[t.length - 1]
      , o = t.slice(0, t.length - 1).reverse().map(s => Gk(s)).filter(s => s !== null).map(s => Hi( () => {
        let a = s.guards.map(c => {
            let u = Ri(s.node) ?? n
              , l = Oi(c, u)
              , d = Jk(l) ? l.canActivateChild(r, e) : ue(u, () => l(r, e));
            return zt(d).pipe(Ct())
        }
        );
        return w(a).pipe(Ni())
    }
    ));
    return w(o).pipe(Ni())
}
function ux(e, t, n, r, i) {
    let o = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
    if (!o || o.length === 0)
        return w(!0);
    let s = o.map(a => {
        let c = Ri(t) ?? i
          , u = Oi(a, c)
          , l = Xk(u) ? u.canDeactivate(e, t, n, r) : ue(c, () => u(e, t, n, r));
        return zt(l).pipe(Ct())
    }
    );
    return w(s).pipe(Ni())
}
function lx(e, t, n, r) {
    let i = t.canLoad;
    if (i === void 0 || i.length === 0)
        return w(!0);
    let o = i.map(s => {
        let a = Oi(s, e)
          , c = Zk(a) ? a.canLoad(t, n) : ue(e, () => a(t, n));
        return zt(c)
    }
    );
    return w(o).pipe(Ni(), cD(r))
}
function cD(e) {
    return Wu(te(t => {
        if (typeof t != "boolean")
            throw mu(e, t)
    }
    ), P(t => t === !0))
}
function dx(e, t, n, r) {
    let i = t.canMatch;
    if (!i || i.length === 0)
        return w(!0);
    let o = i.map(s => {
        let a = Oi(s, e)
          , c = ex(a) ? a.canMatch(t, n) : ue(e, () => a(t, n));
        return zt(c)
    }
    );
    return w(o).pipe(Ni(), cD(r))
}
var as = class {
    segmentGroup;
    constructor(t) {
        this.segmentGroup = t || null
    }
}
  , cs = class extends Error {
    urlTree;
    constructor(t) {
        super(),
        this.urlTree = t
    }
}
;
function _i(e) {
    return Lr(new as(e))
}
function fx(e) {
    return Lr(new I(4e3,!1))
}
function hx(e) {
    return Lr(oD(!1, we.GuardRejected))
}
var Dp = class {
    urlSerializer;
    urlTree;
    constructor(t, n) {
        this.urlSerializer = t,
        this.urlTree = n
    }
    lineralizeSegments(t, n) {
        let r = []
          , i = n.root;
        for (; ; ) {
            if (r = r.concat(i.segments),
            i.numberOfChildren === 0)
                return w(r);
            if (i.numberOfChildren > 1 || !i.children[O])
                return fx(`${t.redirectTo}`);
            i = i.children[O]
        }
    }
    applyRedirectCommands(t, n, r, i, o) {
        return px(n, i, o).pipe(P(s => {
            if (s instanceof Dt)
                throw new cs(s);
            let a = this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), t, r);
            if (s[0] === "/")
                throw new cs(a);
            return a
        }
        ))
    }
    applyRedirectCreateUrlTree(t, n, r, i) {
        let o = this.createSegmentGroup(t, n.root, r, i);
        return new Dt(o,this.createQueryParams(n.queryParams, this.urlTree.queryParams),n.fragment)
    }
    createQueryParams(t, n) {
        let r = {};
        return Object.entries(t).forEach( ([i,o]) => {
            if (typeof o == "string" && o[0] === ":") {
                let a = o.substring(1);
                r[i] = n[a]
            } else
                r[i] = o
        }
        ),
        r
    }
    createSegmentGroup(t, n, r, i) {
        let o = this.createSegments(t, n.segments, r, i)
          , s = {};
        return Object.entries(n.children).forEach( ([a,c]) => {
            s[a] = this.createSegmentGroup(t, c, r, i)
        }
        ),
        new V(o,s)
    }
    createSegments(t, n, r, i) {
        return n.map(o => o.path[0] === ":" ? this.findPosParam(t, o, i) : this.findOrReturn(o, r))
    }
    findPosParam(t, n, r) {
        let i = r[n.path.substring(1)];
        if (!i)
            throw new I(4001,!1);
        return i
    }
    findOrReturn(t, n) {
        let r = 0;
        for (let i of n) {
            if (i.path === t.path)
                return n.splice(r),
                i;
            r++
        }
        return t
    }
}
;
function px(e, t, n) {
    if (typeof e == "string")
        return w(e);
    let r = e
      , {queryParams: i, fragment: o, routeConfig: s, url: a, outlet: c, params: u, data: l, title: d} = t;
    return zt(ue(n, () => r({
        params: u,
        data: l,
        queryParams: i,
        fragment: o,
        routeConfig: s,
        url: a,
        outlet: c,
        title: d
    })))
}
var wp = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {}
};
function gx(e, t, n, r, i) {
    let o = uD(e, t, n);
    return o.matched ? (r = Fk(t, r),
    dx(r, t, n, i).pipe(P(s => s === !0 ? o : m({}, wp)))) : w(o)
}
function uD(e, t, n) {
    if (t.path === "**")
        return mx(n);
    if (t.path === "")
        return t.pathMatch === "full" && (e.hasChildren() || n.length > 0) ? m({}, wp) : {
            matched: !0,
            consumedSegments: [],
            remainingSegments: n,
            parameters: {},
            positionalParamSegments: {}
        };
    let i = (t.matcher || j_)(n, e, t);
    if (!i)
        return m({}, wp);
    let o = {};
    Object.entries(i.posParams ?? {}).forEach( ([a,c]) => {
        o[a] = c.path
    }
    );
    let s = i.consumed.length > 0 ? m(m({}, o), i.consumed[i.consumed.length - 1].parameters) : o;
    return {
        matched: !0,
        consumedSegments: i.consumed,
        remainingSegments: n.slice(i.consumed.length),
        parameters: s,
        positionalParamSegments: i.posParams ?? {}
    }
}
function mx(e) {
    return {
        matched: !0,
        parameters: e.length > 0 ? V_(e).parameters : {},
        consumedSegments: e,
        remainingSegments: [],
        positionalParamSegments: {}
    }
}
function P_(e, t, n, r) {
    return n.length > 0 && Ex(e, n, r) ? {
        segmentGroup: new V(t,yx(r, new V(n,e.children))),
        slicedSegments: []
    } : n.length === 0 && Ix(e, n, r) ? {
        segmentGroup: new V(e.segments,vx(e, n, r, e.children)),
        slicedSegments: n
    } : {
        segmentGroup: new V(e.segments,e.children),
        slicedSegments: n
    }
}
function vx(e, t, n, r) {
    let i = {};
    for (let o of n)
        if (Iu(e, t, o) && !r[ct(o)]) {
            let s = new V([],{});
            i[ct(o)] = s
        }
    return m(m({}, r), i)
}
function yx(e, t) {
    let n = {};
    n[O] = t;
    for (let r of e)
        if (r.path === "" && ct(r) !== O) {
            let i = new V([],{});
            n[ct(r)] = i
        }
    return n
}
function Ex(e, t, n) {
    return n.some(r => Iu(e, t, r) && ct(r) !== O)
}
function Ix(e, t, n) {
    return n.some(r => Iu(e, t, r))
}
function Iu(e, t, n) {
    return (e.hasChildren() || t.length > 0) && n.pathMatch === "full" ? !1 : n.path === ""
}
function _x(e, t, n) {
    return t.length === 0 && !e.children[n]
}
var bp = class {
}
;
function Dx(e, t, n, r, i, o, s="emptyOnly") {
    return new Cp(e,t,n,r,i,s,o).recognize()
}
var wx = 31
  , Cp = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(t, n, r, i, o, s, a) {
        this.injector = t,
        this.configLoader = n,
        this.rootComponentType = r,
        this.config = i,
        this.urlTree = o,
        this.paramsInheritanceStrategy = s,
        this.urlSerializer = a,
        this.applyRedirects = new Dp(this.urlSerializer,this.urlTree)
    }
    noMatchError(t) {
        return new I(4002,`'${t.segmentGroup}'`)
    }
    recognize() {
        let t = P_(this.urlTree.root, [], [], this.config).segmentGroup;
        return this.match(t).pipe(P( ({children: n, rootSnapshot: r}) => {
            let i = new Ue(r,n)
              , o = new os("",i)
              , s = Y_(r, [], this.urlTree.queryParams, this.urlTree.fragment);
            return s.queryParams = this.urlTree.queryParams,
            o.url = this.urlSerializer.serialize(s),
            {
                state: o,
                tree: s
            }
        }
        ))
    }
    match(t) {
        let n = new yr([],Object.freeze({}),Object.freeze(m({}, this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),O,this.rootComponentType,null,{});
        return this.processSegmentGroup(this.injector, this.config, t, O, n).pipe(P(r => ({
            children: r,
            rootSnapshot: n
        })), Jt(r => {
            if (r instanceof cs)
                return this.urlTree = r.urlTree,
                this.match(r.urlTree.root);
            throw r instanceof as ? this.noMatchError(r) : r
        }
        ))
    }
    processSegmentGroup(t, n, r, i, o) {
        return r.segments.length === 0 && r.hasChildren() ? this.processChildren(t, n, r, o) : this.processSegment(t, n, r, r.segments, i, !0, o).pipe(P(s => s instanceof Ue ? [s] : []))
    }
    processChildren(t, n, r, i) {
        let o = [];
        for (let s of Object.keys(r.children))
            s === "primary" ? o.unshift(s) : o.push(s);
        return Y(o).pipe(jr(s => {
            let a = r.children[s]
              , c = jk(n, s);
            return this.processSegmentGroup(t, c, a, s, i)
        }
        ), tl( (s, a) => (s.push(...a),
        s)), Xt(null), el(), se(s => {
            if (s === null)
                return _i(r);
            let a = lD(s);
            return bx(a),
            w(a)
        }
        ))
    }
    processSegment(t, n, r, i, o, s, a) {
        return Y(n).pipe(jr(c => this.processSegmentAgainstRoute(c._injector ?? t, n, c, r, i, o, s, a).pipe(Jt(u => {
            if (u instanceof as)
                return w(null);
            throw u
        }
        ))), Ct(c => !!c), Jt(c => {
            if (aD(c))
                return _x(r, i, o) ? w(new bp) : _i(r);
            throw c
        }
        ))
    }
    processSegmentAgainstRoute(t, n, r, i, o, s, a, c) {
        return ct(r) !== s && (s === O || !Iu(i, o, r)) ? _i(i) : r.redirectTo === void 0 ? this.matchSegmentAgainstRoute(t, i, r, o, s, c) : this.allowRedirects && a ? this.expandSegmentAgainstRouteUsingRedirect(t, i, n, r, o, s, c) : _i(i)
    }
    expandSegmentAgainstRouteUsingRedirect(t, n, r, i, o, s, a) {
        let {matched: c, parameters: u, consumedSegments: l, positionalParamSegments: d, remainingSegments: f} = uD(n, i, o);
        if (!c)
            return _i(n);
        typeof i.redirectTo == "string" && i.redirectTo[0] === "/" && (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > wx && (this.allowRedirects = !1));
        let h = new yr(o,u,Object.freeze(m({}, this.urlTree.queryParams)),this.urlTree.fragment,L_(i),ct(i),i.component ?? i._loadedComponent ?? null,i,F_(i))
          , g = gu(h, a, this.paramsInheritanceStrategy);
        return h.params = Object.freeze(g.params),
        h.data = Object.freeze(g.data),
        this.applyRedirects.applyRedirectCommands(l, i.redirectTo, d, h, t).pipe(Ce(C => this.applyRedirects.lineralizeSegments(i, C)), se(C => this.processSegment(t, r, n, C.concat(f), s, !1, a)))
    }
    matchSegmentAgainstRoute(t, n, r, i, o, s) {
        let a = gx(n, r, i, t, this.urlSerializer);
        return r.path === "**" && (n.children = {}),
        a.pipe(Ce(c => c.matched ? (t = r._injector ?? t,
        this.getChildConfig(t, r, i).pipe(Ce( ({routes: u}) => {
            let l = r._loadedInjector ?? t
              , {parameters: d, consumedSegments: f, remainingSegments: h} = c
              , g = new yr(f,d,Object.freeze(m({}, this.urlTree.queryParams)),this.urlTree.fragment,L_(r),ct(r),r.component ?? r._loadedComponent ?? null,r,F_(r))
              , y = gu(g, s, this.paramsInheritanceStrategy);
            g.params = Object.freeze(y.params),
            g.data = Object.freeze(y.data);
            let {segmentGroup: C, slicedSegments: _} = P_(n, f, h, u);
            if (_.length === 0 && C.hasChildren())
                return this.processChildren(l, u, C, g).pipe(P(Be => new Ue(g,Be)));
            if (u.length === 0 && _.length === 0)
                return w(new Ue(g,[]));
            let ee = ct(r) === o;
            return this.processSegment(l, u, C, _, ee ? O : o, !0, g).pipe(P(Be => new Ue(g,Be instanceof Ue ? [Be] : [])))
        }
        ))) : _i(n)))
    }
    getChildConfig(t, n, r) {
        return n.children ? w({
            routes: n.children,
            injector: t
        }) : n.loadChildren ? n._loadedRoutes !== void 0 ? w({
            routes: n._loadedRoutes,
            injector: n._loadedInjector
        }) : lx(t, n, r, this.urlSerializer).pipe(se(i => i ? this.configLoader.loadChildren(t, n).pipe(te(o => {
            n._loadedRoutes = o.routes,
            n._loadedInjector = o.injector
        }
        )) : hx(n))) : w({
            routes: [],
            injector: t
        })
    }
}
;
function bx(e) {
    e.sort( (t, n) => t.value.outlet === O ? -1 : n.value.outlet === O ? 1 : t.value.outlet.localeCompare(n.value.outlet))
}
function Cx(e) {
    let t = e.value.routeConfig;
    return t && t.path === ""
}
function lD(e) {
    let t = []
      , n = new Set;
    for (let r of e) {
        if (!Cx(r)) {
            t.push(r);
            continue
        }
        let i = t.find(o => r.value.routeConfig === o.value.routeConfig);
        i !== void 0 ? (i.children.push(...r.children),
        n.add(i)) : t.push(r)
    }
    for (let r of n) {
        let i = lD(r.children);
        t.push(new Ue(r.value,i))
    }
    return t.filter(r => !n.has(r))
}
function L_(e) {
    return e.data || {}
}
function F_(e) {
    return e.resolve || {}
}
function Tx(e, t, n, r, i, o) {
    return se(s => Dx(e, t, n, r, s.extractedUrl, i, o).pipe(P( ({state: a, tree: c}) => j(m({}, s), {
        targetSnapshot: a,
        urlAfterRedirects: c
    }))))
}
function Sx(e, t) {
    return se(n => {
        let {targetSnapshot: r, guards: {canActivateChecks: i}} = n;
        if (!i.length)
            return w(n);
        let o = new Set(i.map(c => c.route))
          , s = new Set;
        for (let c of o)
            if (!s.has(c))
                for (let u of dD(c))
                    s.add(u);
        let a = 0;
        return Y(s).pipe(jr(c => o.has(c) ? Ax(c, r, e, t) : (c.data = gu(c, c.parent, e).resolve,
        w(void 0))), te( () => a++), Ur(1), se(c => a === s.size ? w(n) : pe))
    }
    )
}
function dD(e) {
    let t = e.children.map(n => dD(n)).flat();
    return [e, ...t]
}
function Ax(e, t, n, r) {
    let i = e.routeConfig
      , o = e._resolve;
    return i?.title !== void 0 && !nD(i) && (o[us] = i.title),
    Hi( () => (e.data = gu(e, e.parent, n).resolve,
    Nx(o, e, t, r).pipe(P(s => (e._resolvedData = s,
    e.data = m(m({}, e.data), s),
    null)))))
}
function Nx(e, t, n, r) {
    let i = hp(e);
    if (i.length === 0)
        return w({});
    let o = {};
    return Y(i).pipe(se(s => Rx(e[s], t, n, r).pipe(Ct(), te(a => {
        if (a instanceof Ai)
            throw mu(new Ir, a);
        o[s] = a
    }
    ))), Ur(1), P( () => o), Jt(s => aD(s) ? pe : Lr(s)))
}
function Rx(e, t, n, r) {
    let i = Ri(t) ?? r
      , o = Oi(e, i)
      , s = o.resolve ? o.resolve(t, n) : ue(i, () => o(t, n));
    return zt(s)
}
function dp(e) {
    return Ce(t => {
        let n = e(t);
        return n ? Y(n).pipe(P( () => t)) : w(t)
    }
    )
}
var Rp = ( () => {
    class e {
        buildTitle(n) {
            let r, i = n.root;
            for (; i !== void 0; )
                r = this.getResolvedTitleForRoute(i) ?? r,
                i = i.children.find(o => o.outlet === O);
            return r
        }
        getResolvedTitleForRoute(n) {
            return n.data[us]
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => p(fD),
            providedIn: "root"
        })
    }
    return e
}
)()
  , fD = ( () => {
    class e extends Rp {
        title;
        constructor(n) {
            super(),
            this.title = n
        }
        updateTitle(n) {
            let r = this.buildTitle(n);
            r !== void 0 && this.title.setTitle(r)
        }
        static \u0275fac = function(r) {
            return new (r || e)(R(UE))
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , fs = new E("",{
    providedIn: "root",
    factory: () => ({})
})
  , hs = new E("")
  , hD = ( () => {
    class e {
        componentLoaders = new WeakMap;
        childrenLoaders = new WeakMap;
        onLoadStartListener;
        onLoadEndListener;
        compiler = p(Tf);
        loadComponent(n, r) {
            if (this.componentLoaders.get(r))
                return this.componentLoaders.get(r);
            if (r._loadedComponent)
                return w(r._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(r);
            let i = zt(ue(n, () => r.loadComponent())).pipe(P(gD), Ce(mD), te(s => {
                this.onLoadEndListener && this.onLoadEndListener(r),
                r._loadedComponent = s
            }
            ), Wi( () => {
                this.componentLoaders.delete(r)
            }
            ))
              , o = new Or(i, () => new U).pipe(Mr());
            return this.componentLoaders.set(r, o),
            o
        }
        loadChildren(n, r) {
            if (this.childrenLoaders.get(r))
                return this.childrenLoaders.get(r);
            if (r._loadedRoutes)
                return w({
                    routes: r._loadedRoutes,
                    injector: r._loadedInjector
                });
            this.onLoadStartListener && this.onLoadStartListener(r);
            let o = pD(r, this.compiler, n, this.onLoadEndListener).pipe(Wi( () => {
                this.childrenLoaders.delete(r)
            }
            ))
              , s = new Or(o, () => new U).pipe(Mr());
            return this.childrenLoaders.set(r, s),
            s
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function pD(e, t, n, r) {
    return zt(ue(n, () => e.loadChildren())).pipe(P(gD), Ce(mD), se(i => i instanceof oc || Array.isArray(i) ? w(i) : Y(t.compileModuleAsync(i))), P(i => {
        r && r(e);
        let o, s, a = !1;
        return Array.isArray(i) ? (s = i,
        a = !0) : (o = i.create(n).injector,
        s = o.get(hs, [], {
            optional: !0,
            self: !0
        }).flat()),
        {
            routes: s.map(Np),
            injector: o
        }
    }
    ))
}
function Mx(e) {
    return e && typeof e == "object" && "default"in e
}
function gD(e) {
    return Mx(e) ? e.default : e
}
function mD(e) {
    return w(e)
}
var _u = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => p(Ox),
            providedIn: "root"
        })
    }
    return e
}
)()
  , Ox = ( () => {
    class e {
        shouldProcessUrl(n) {
            return !0
        }
        extract(n) {
            return n
        }
        merge(n, r) {
            return n
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , vD = new E("");
var yD = new E("")
  , ED = ( () => {
    class e {
        currentNavigation = xe(null, {
            equal: () => !1
        });
        currentTransition = null;
        lastSuccessfulNavigation = null;
        events = new U;
        transitionAbortWithErrorSubject = new U;
        configLoader = p(hD);
        environmentInjector = p(Q);
        destroyRef = p(qe);
        urlSerializer = p(ls);
        rootContexts = p(Mi);
        location = p(fi);
        inputBindingEnabled = p(Eu, {
            optional: !0
        }) !== null;
        titleStrategy = p(Rp);
        options = p(fs, {
            optional: !0
        }) || {};
        paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
        urlHandlingStrategy = p(_u);
        createViewTransition = p(vD, {
            optional: !0
        });
        navigationErrorHandler = p(yD, {
            optional: !0
        });
        navigationId = 0;
        get hasRequestedNavigation() {
            return this.navigationId !== 0
        }
        transitions;
        afterPreactivation = () => w(void 0);
        rootComponentType = null;
        destroyed = !1;
        constructor() {
            let n = i => this.events.next(new au(i))
              , r = i => this.events.next(new cu(i));
            this.configLoader.onLoadEndListener = r,
            this.configLoader.onLoadStartListener = n,
            this.destroyRef.onDestroy( () => {
                this.destroyed = !0
            }
            )
        }
        complete() {
            this.transitions?.complete()
        }
        handleNavigationRequest(n) {
            let r = ++this.navigationId;
            hn( () => {
                this.transitions?.next(j(m({}, n), {
                    extractedUrl: this.urlHandlingStrategy.extract(n.rawUrl),
                    targetSnapshot: null,
                    targetRouterState: null,
                    guards: {
                        canActivateChecks: [],
                        canDeactivateChecks: []
                    },
                    guardsResult: null,
                    abortController: new AbortController,
                    id: r
                }))
            }
            )
        }
        setupNavigations(n) {
            return this.transitions = new oe(null),
            this.transitions.pipe(ge(r => r !== null), Ce(r => {
                let i = !1;
                return w(r).pipe(Ce(o => {
                    if (this.navigationId > r.id)
                        return this.cancelNavigationTransition(r, "", we.SupersededByNewNavigation),
                        pe;
                    this.currentTransition = r,
                    this.currentNavigation.set({
                        id: o.id,
                        initialUrl: o.rawUrl,
                        extractedUrl: o.extractedUrl,
                        targetBrowserUrl: typeof o.extras.browserUrl == "string" ? this.urlSerializer.parse(o.extras.browserUrl) : o.extras.browserUrl,
                        trigger: o.source,
                        extras: o.extras,
                        previousNavigation: this.lastSuccessfulNavigation ? j(m({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null
                        }) : null,
                        abort: () => o.abortController.abort()
                    });
                    let s = !n.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl()
                      , a = o.extras.onSameUrlNavigation ?? n.onSameUrlNavigation;
                    if (!s && a !== "reload")
                        return this.events.next(new Wt(o.id,this.urlSerializer.serialize(o.rawUrl),"",ts.IgnoredSameUrlNavigation)),
                        o.resolve(!1),
                        pe;
                    if (this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))
                        return w(o).pipe(Ce(c => (this.events.next(new _r(c.id,this.urlSerializer.serialize(c.extractedUrl),c.source,c.restoredState)),
                        c.id !== this.navigationId ? pe : Promise.resolve(c))), Tx(this.environmentInjector, this.configLoader, this.rootComponentType, n.config, this.urlSerializer, this.paramsInheritanceStrategy), te(c => {
                            r.targetSnapshot = c.targetSnapshot,
                            r.urlAfterRedirects = c.urlAfterRedirects,
                            this.currentNavigation.update(l => (l.finalUrl = c.urlAfterRedirects,
                            l));
                            let u = new ns(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);
                            this.events.next(u)
                        }
                        ));
                    if (s && this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)) {
                        let {id: c, extractedUrl: u, source: l, restoredState: d, extras: f} = o
                          , h = new _r(c,this.urlSerializer.serialize(u),l,d);
                        this.events.next(h);
                        let g = eD(this.rootComponentType).snapshot;
                        return this.currentTransition = r = j(m({}, o), {
                            targetSnapshot: g,
                            urlAfterRedirects: u,
                            extras: j(m({}, f), {
                                skipLocationChange: !1,
                                replaceUrl: !1
                            })
                        }),
                        this.currentNavigation.update(y => (y.finalUrl = u,
                        y)),
                        w(r)
                    } else
                        return this.events.next(new Wt(o.id,this.urlSerializer.serialize(o.extractedUrl),"",ts.IgnoredByUrlHandlingStrategy)),
                        o.resolve(!1),
                        pe
                }
                ), te(o => {
                    let s = new ru(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);
                    this.events.next(s)
                }
                ), P(o => (this.currentTransition = r = j(m({}, o), {
                    guards: zk(o.targetSnapshot, o.currentSnapshot, this.rootContexts)
                }),
                r)), nx(this.environmentInjector, o => this.events.next(o)), te(o => {
                    if (r.guardsResult = o.guardsResult,
                    o.guardsResult && typeof o.guardsResult != "boolean")
                        throw mu(this.urlSerializer, o.guardsResult);
                    let s = new iu(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);
                    this.events.next(s)
                }
                ), ge(o => o.guardsResult ? !0 : (this.cancelNavigationTransition(o, "", we.GuardRejected),
                !1)), dp(o => {
                    if (o.guards.canActivateChecks.length !== 0)
                        return w(o).pipe(te(s => {
                            let a = new ou(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);
                            this.events.next(a)
                        }
                        ), Ce(s => {
                            let a = !1;
                            return w(s).pipe(Sx(this.paramsInheritanceStrategy, this.environmentInjector), te({
                                next: () => a = !0,
                                complete: () => {
                                    a || this.cancelNavigationTransition(s, "", we.NoDataFromResolver)
                                }
                            }))
                        }
                        ), te(s => {
                            let a = new su(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);
                            this.events.next(a)
                        }
                        ))
                }
                ), dp(o => {
                    let s = a => {
                        let c = [];
                        if (a.routeConfig?.loadComponent) {
                            let u = Ri(a) ?? this.environmentInjector;
                            c.push(this.configLoader.loadComponent(u, a.routeConfig).pipe(te(l => {
                                a.component = l
                            }
                            ), P( () => {}
                            )))
                        }
                        for (let u of a.children)
                            c.push(...s(u));
                        return c
                    }
                    ;
                    return Fr(s(o.targetSnapshot.root)).pipe(Xt(null), Ze(1))
                }
                ), dp( () => this.afterPreactivation()), Ce( () => {
                    let {currentSnapshot: o, targetSnapshot: s} = r
                      , a = this.createViewTransition?.(this.environmentInjector, o.root, s.root);
                    return a ? Y(a).pipe(P( () => r)) : w(r)
                }
                ), P(o => {
                    let s = Vk(n.routeReuseStrategy, o.targetSnapshot, o.currentRouterState);
                    return this.currentTransition = r = j(m({}, o), {
                        targetRouterState: s
                    }),
                    this.currentNavigation.update(a => (a.targetRouterState = s,
                    a)),
                    r
                }
                ), te( () => {
                    this.events.next(new rs)
                }
                ), Wk(this.rootContexts, n.routeReuseStrategy, o => this.events.next(o), this.inputBindingEnabled), Ze(1), en(new S(o => {
                    let s = r.abortController.signal
                      , a = () => o.next();
                    return s.addEventListener("abort", a),
                    () => s.removeEventListener("abort", a)
                }
                ).pipe(ge( () => !i && !r.targetRouterState), te( () => {
                    this.cancelNavigationTransition(r, r.abortController.signal.reason + "", we.Aborted)
                }
                ))), te({
                    next: o => {
                        i = !0,
                        this.lastSuccessfulNavigation = hn(this.currentNavigation),
                        this.events.next(new $t(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),
                        this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),
                        o.resolve(!0)
                    }
                    ,
                    complete: () => {
                        i = !0
                    }
                }), en(this.transitionAbortWithErrorSubject.pipe(te(o => {
                    throw o
                }
                ))), Wi( () => {
                    i || this.cancelNavigationTransition(r, "", we.SupersededByNewNavigation),
                    this.currentTransition?.id === r.id && (this.currentNavigation.set(null),
                    this.currentTransition = null)
                }
                ), Jt(o => {
                    if (this.destroyed)
                        return r.resolve(!1),
                        pe;
                    if (i = !0,
                    sD(o))
                        this.events.next(new _t(r.id,this.urlSerializer.serialize(r.extractedUrl),o.message,o.cancellationCode)),
                        $k(o) ? this.events.next(new Si(o.url,o.navigationBehaviorOptions)) : r.resolve(!1);
                    else {
                        let s = new Ti(r.id,this.urlSerializer.serialize(r.extractedUrl),o,r.targetSnapshot ?? void 0);
                        try {
                            let a = ue(this.environmentInjector, () => this.navigationErrorHandler?.(s));
                            if (a instanceof Ai) {
                                let {message: c, cancellationCode: u} = mu(this.urlSerializer, a);
                                this.events.next(new _t(r.id,this.urlSerializer.serialize(r.extractedUrl),c,u)),
                                this.events.next(new Si(a.redirectTo,a.navigationBehaviorOptions))
                            } else
                                throw this.events.next(s),
                                o
                        } catch (a) {
                            this.options.resolveNavigationPromiseOnError ? r.resolve(!1) : r.reject(a)
                        }
                    }
                    return pe
                }
                ))
            }
            ))
        }
        cancelNavigationTransition(n, r, i) {
            let o = new _t(n.id,this.urlSerializer.serialize(n.extractedUrl),r,i);
            this.events.next(o),
            n.resolve(!1)
        }
        isUpdatingInternalState() {
            return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString()
        }
        isUpdatedBrowserUrl() {
            let n = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0)))
              , r = hn(this.currentNavigation)
              , i = r?.targetBrowserUrl ?? r?.extractedUrl;
            return n.toString() !== i?.toString() && !r?.extras.skipLocationChange
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function kx(e) {
    return e !== Jo
}
var ID = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => p(xx),
            providedIn: "root"
        })
    }
    return e
}
)()
  , yu = class {
    shouldDetach(t) {
        return !1
    }
    store(t, n) {}
    shouldAttach(t) {
        return !1
    }
    retrieve(t) {
        return null
    }
    shouldReuseRoute(t, n) {
        return t.routeConfig === n.routeConfig
    }
}
  , xx = ( () => {
    class e extends yu {
        static \u0275fac = ( () => {
            let n;
            return function(i) {
                return (n || (n = Ga(e)))(i || e)
            }
        }
        )();
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , _D = ( () => {
    class e {
        urlSerializer = p(ls);
        options = p(fs, {
            optional: !0
        }) || {};
        canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
        location = p(fi);
        urlHandlingStrategy = p(_u);
        urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
        currentUrlTree = new Dt;
        getCurrentUrlTree() {
            return this.currentUrlTree
        }
        rawUrlTree = this.currentUrlTree;
        getRawUrlTree() {
            return this.rawUrlTree
        }
        createBrowserPath({finalUrl: n, initialUrl: r, targetBrowserUrl: i}) {
            let o = n !== void 0 ? this.urlHandlingStrategy.merge(n, r) : r
              , s = i ?? o;
            return s instanceof Dt ? this.urlSerializer.serialize(s) : s
        }
        commitTransition({targetRouterState: n, finalUrl: r, initialUrl: i}) {
            r && n ? (this.currentUrlTree = r,
            this.rawUrlTree = this.urlHandlingStrategy.merge(r, i),
            this.routerState = n) : this.rawUrlTree = i
        }
        routerState = eD(null);
        getRouterState() {
            return this.routerState
        }
        stateMemento = this.createStateMemento();
        updateStateMemento() {
            this.stateMemento = this.createStateMemento()
        }
        createStateMemento() {
            return {
                rawUrlTree: this.rawUrlTree,
                currentUrlTree: this.currentUrlTree,
                routerState: this.routerState
            }
        }
        resetInternalState({finalUrl: n}) {
            this.routerState = this.stateMemento.routerState,
            this.currentUrlTree = this.stateMemento.currentUrlTree,
            this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n ?? this.rawUrlTree)
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: () => p(Px),
            providedIn: "root"
        })
    }
    return e
}
)()
  , Px = ( () => {
    class e extends _D {
        currentPageId = 0;
        lastSuccessfulId = -1;
        restoredState() {
            return this.location.getState()
        }
        get browserPageId() {
            return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId
        }
        registerNonRouterCurrentEntryChangeListener(n) {
            return this.location.subscribe(r => {
                r.type === "popstate" && setTimeout( () => {
                    n(r.url, r.state, "popstate")
                }
                )
            }
            )
        }
        handleRouterEvent(n, r) {
            n instanceof _r ? this.updateStateMemento() : n instanceof Wt ? this.commitTransition(r) : n instanceof ns ? this.urlUpdateStrategy === "eager" && (r.extras.skipLocationChange || this.setBrowserUrl(this.createBrowserPath(r), r)) : n instanceof rs ? (this.commitTransition(r),
            this.urlUpdateStrategy === "deferred" && !r.extras.skipLocationChange && this.setBrowserUrl(this.createBrowserPath(r), r)) : n instanceof _t && n.code !== we.SupersededByNewNavigation && n.code !== we.Redirect ? this.restoreHistory(r) : n instanceof Ti ? this.restoreHistory(r, !0) : n instanceof $t && (this.lastSuccessfulId = n.id,
            this.currentPageId = this.browserPageId)
        }
        setBrowserUrl(n, {extras: r, id: i}) {
            let {replaceUrl: o, state: s} = r;
            if (this.location.isCurrentPathEqualTo(n) || o) {
                let a = this.browserPageId
                  , c = m(m({}, s), this.generateNgRouterState(i, a));
                this.location.replaceState(n, "", c)
            } else {
                let a = m(m({}, s), this.generateNgRouterState(i, this.browserPageId + 1));
                this.location.go(n, "", a)
            }
        }
        restoreHistory(n, r=!1) {
            if (this.canceledNavigationResolution === "computed") {
                let i = this.browserPageId
                  , o = this.currentPageId - i;
                o !== 0 ? this.location.historyGo(o) : this.getCurrentUrlTree() === n.finalUrl && o === 0 && (this.resetInternalState(n),
                this.resetUrlToCurrentUrlTree())
            } else
                this.canceledNavigationResolution === "replace" && (r && this.resetInternalState(n),
                this.resetUrlToCurrentUrlTree())
        }
        resetUrlToCurrentUrlTree() {
            this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
        }
        generateNgRouterState(n, r) {
            return this.canceledNavigationResolution === "computed" ? {
                navigationId: n,
                \u0275routerPageId: r
            } : {
                navigationId: n
            }
        }
        static \u0275fac = ( () => {
            let n;
            return function(i) {
                return (n || (n = Ga(e)))(i || e)
            }
        }
        )();
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function Mp(e, t) {
    e.events.pipe(ge(n => n instanceof $t || n instanceof _t || n instanceof Ti || n instanceof Wt), P(n => n instanceof $t || n instanceof Wt ? 0 : (n instanceof _t ? n.code === we.Redirect || n.code === we.SupersededByNewNavigation : !1) ? 2 : 1), ge(n => n !== 2), Ze(1)).subscribe( () => {
        t()
    }
    )
}
var Lx = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact"
}
  , Fx = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset"
}
  , ki = ( () => {
    class e {
        get currentUrlTree() {
            return this.stateManager.getCurrentUrlTree()
        }
        get rawUrlTree() {
            return this.stateManager.getRawUrlTree()
        }
        disposed = !1;
        nonRouterCurrentEntryChangeSubscription;
        console = p(mf);
        stateManager = p(_D);
        options = p(fs, {
            optional: !0
        }) || {};
        pendingTasks = p(pt);
        urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
        navigationTransitions = p(ED);
        urlSerializer = p(ls);
        location = p(fi);
        urlHandlingStrategy = p(_u);
        injector = p(Q);
        _events = new U;
        get events() {
            return this._events
        }
        get routerState() {
            return this.stateManager.getRouterState()
        }
        navigated = !1;
        routeReuseStrategy = p(ID);
        onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
        config = p(hs, {
            optional: !0
        })?.flat() ?? [];
        componentInputBindingEnabled = !!p(Eu, {
            optional: !0
        });
        currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
        constructor() {
            this.resetConfig(this.config),
            this.navigationTransitions.setupNavigations(this).subscribe({
                error: n => {
                    this.console.warn(n)
                }
            }),
            this.subscribeToNavigationEvents()
        }
        eventsSubscription = new q;
        subscribeToNavigationEvents() {
            let n = this.navigationTransitions.events.subscribe(r => {
                try {
                    let i = this.navigationTransitions.currentTransition
                      , o = hn(this.navigationTransitions.currentNavigation);
                    if (i !== null && o !== null) {
                        if (this.stateManager.handleRouterEvent(r, o),
                        r instanceof _t && r.code !== we.Redirect && r.code !== we.SupersededByNewNavigation)
                            this.navigated = !0;
                        else if (r instanceof $t)
                            this.navigated = !0;
                        else if (r instanceof Si) {
                            let s = r.navigationBehaviorOptions
                              , a = this.urlHandlingStrategy.merge(r.url, i.currentRawUrl)
                              , c = m({
                                browserUrl: i.extras.browserUrl,
                                info: i.extras.info,
                                skipLocationChange: i.extras.skipLocationChange,
                                replaceUrl: i.extras.replaceUrl || this.urlUpdateStrategy === "eager" || kx(i.source)
                            }, s);
                            this.scheduleNavigation(a, Jo, null, c, {
                                resolve: i.resolve,
                                reject: i.reject,
                                promise: i.promise
                            })
                        }
                    }
                    Lk(r) && this._events.next(r)
                } catch (i) {
                    this.navigationTransitions.transitionAbortWithErrorSubject.next(i)
                }
            }
            );
            this.eventsSubscription.add(n)
        }
        resetRootComponentType(n) {
            this.routerState.root.component = n,
            this.navigationTransitions.rootComponentType = n
        }
        initialNavigation() {
            this.setUpLocationChangeListener(),
            this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), Jo, this.stateManager.restoredState())
        }
        setUpLocationChangeListener() {
            this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener( (n, r, i) => {
                this.navigateToSyncWithBrowser(n, i, r)
            }
            )
        }
        navigateToSyncWithBrowser(n, r, i) {
            let o = {
                replaceUrl: !0
            }
              , s = i?.navigationId ? i : null;
            if (i) {
                let c = m({}, i);
                delete c.navigationId,
                delete c.\u0275routerPageId,
                Object.keys(c).length !== 0 && (o.state = c)
            }
            let a = this.parseUrl(n);
            this.scheduleNavigation(a, r, s, o).catch(c => {
                this.disposed || this.injector.get(ke)(c)
            }
            )
        }
        get url() {
            return this.serializeUrl(this.currentUrlTree)
        }
        getCurrentNavigation() {
            return hn(this.navigationTransitions.currentNavigation)
        }
        get lastSuccessfulNavigation() {
            return this.navigationTransitions.lastSuccessfulNavigation
        }
        resetConfig(n) {
            this.config = n.map(Np),
            this.navigated = !1
        }
        ngOnDestroy() {
            this.dispose()
        }
        dispose() {
            this._events.unsubscribe(),
            this.navigationTransitions.complete(),
            this.nonRouterCurrentEntryChangeSubscription && (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            this.nonRouterCurrentEntryChangeSubscription = void 0),
            this.disposed = !0,
            this.eventsSubscription.unsubscribe()
        }
        createUrlTree(n, r={}) {
            let {relativeTo: i, queryParams: o, fragment: s, queryParamsHandling: a, preserveFragment: c} = r
              , u = c ? this.currentUrlTree.fragment : s
              , l = null;
            switch (a ?? this.options.defaultQueryParamsHandling) {
            case "merge":
                l = m(m({}, this.currentUrlTree.queryParams), o);
                break;
            case "preserve":
                l = this.currentUrlTree.queryParams;
                break;
            default:
                l = o || null
            }
            l !== null && (l = this.removeEmptyProps(l));
            let d;
            try {
                let f = i ? i.snapshot : this.routerState.snapshot.root;
                d = Z_(f)
            } catch {
                (typeof n[0] != "string" || n[0][0] !== "/") && (n = []),
                d = this.currentUrlTree.root
            }
            return Q_(d, n, l, u ?? null)
        }
        navigateByUrl(n, r={
            skipLocationChange: !1
        }) {
            let i = Ci(n) ? n : this.parseUrl(n)
              , o = this.urlHandlingStrategy.merge(i, this.rawUrlTree);
            return this.scheduleNavigation(o, Jo, null, r)
        }
        navigate(n, r={
            skipLocationChange: !1
        }) {
            return jx(n),
            this.navigateByUrl(this.createUrlTree(n, r), r)
        }
        serializeUrl(n) {
            return this.urlSerializer.serialize(n)
        }
        parseUrl(n) {
            try {
                return this.urlSerializer.parse(n)
            } catch {
                return this.console.warn(Hr(4018, !1)),
                this.urlSerializer.parse("/")
            }
        }
        isActive(n, r) {
            let i;
            if (r === !0 ? i = m({}, Lx) : r === !1 ? i = m({}, Fx) : i = r,
            Ci(n))
                return M_(this.currentUrlTree, n, i);
            let o = this.parseUrl(n);
            return M_(this.currentUrlTree, o, i)
        }
        removeEmptyProps(n) {
            return Object.entries(n).reduce( (r, [i,o]) => (o != null && (r[i] = o),
            r), {})
        }
        scheduleNavigation(n, r, i, o, s) {
            if (this.disposed)
                return Promise.resolve(!1);
            let a, c, u;
            s ? (a = s.resolve,
            c = s.reject,
            u = s.promise) : u = new Promise( (d, f) => {
                a = d,
                c = f
            }
            );
            let l = this.pendingTasks.add();
            return Mp(this, () => {
                queueMicrotask( () => this.pendingTasks.remove(l))
            }
            ),
            this.navigationTransitions.handleNavigationRequest({
                source: r,
                restoredState: i,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                rawUrl: n,
                extras: o,
                resolve: a,
                reject: c,
                promise: u,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState
            }),
            u.catch(d => Promise.reject(d))
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function jx(e) {
    for (let t = 0; t < e.length; t++)
        if (e[t] == null)
            throw new I(4008,!1)
}
var Vx = new E("");
function Bx(e, ...t) {
    return Me([{
        provide: hs,
        multi: !0,
        useValue: e
    }, [], {
        provide: Sn,
        useFactory: Hx,
        deps: [ki]
    }, {
        provide: sc,
        multi: !0,
        useFactory: $x
    }, t.map(n => n.\u0275providers)])
}
function Hx(e) {
    return e.routerState.root
}
function $x() {
    let e = p(z);
    return t => {
        let n = e.get(Ft);
        if (t !== n.components[0])
            return;
        let r = e.get(ki)
          , i = e.get(Wx);
        e.get(zx) === 1 && r.initialNavigation(),
        e.get(Gx, null, {
            optional: !0
        })?.setUpPreloading(),
        e.get(Vx, null, {
            optional: !0
        })?.init(),
        r.resetRootComponentType(n.componentTypes[0]),
        i.closed || (i.next(),
        i.complete(),
        i.unsubscribe())
    }
}
var Wx = new E("",{
    factory: () => new U
})
  , zx = new E("",{
    providedIn: "root",
    factory: () => 1
});
var Gx = new E("");
var DD = class e {
    constructor(t, n, r) {
        this.fn = t;
        this.auth = n;
        this.router = r;
        this.authState$ = y_(this.auth)
    }
    authState$;
    async signIn(t, n) {
        let r = await R_(this.fn, "512_80", "login", [t, n]);
        if (r.status == 200)
            await E_(this.auth, r.token);
        else
            throw new Error;
        this.router.navigateByUrl("/")
    }
    async signOut(t) {
        t && (t.disabled = !0),
        await I_(this.auth),
        this.router.navigateByUrl("/login")
    }
    static \u0275fac = function(n) {
        return new (n || e)(R(mr),R(gr),R(ki))
    }
    ;
    static \u0275prov = v({
        token: e,
        factory: e.\u0275fac,
        providedIn: "root"
    })
}
;
var Op;
try {
    Op = typeof Intl < "u" && Intl.v8BreakIterator
} catch {
    Op = !1
}
var An = ( () => {
    class e {
        _platformId = p(vt);
        isBrowser = this._platformId ? ME(this._platformId) : typeof document == "object" && !!document;
        EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        BLINK = this.isBrowser && !!(window.chrome || Op) && typeof CSS < "u" && !this.EDGE && !this.TRIDENT;
        WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream"in window);
        FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
        constructor() {}
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function Yx(e, t=0) {
    return wD(e) ? Number(e) : arguments.length === 2 ? t : 0
}
function wD(e) {
    return !isNaN(parseFloat(e)) && !isNaN(Number(e))
}
function ps(e) {
    return e instanceof mt ? e.nativeElement : e
}
function kp(e) {
    return e.buttons === 0 || e.detail === 0
}
function xp(e) {
    let t = e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0];
    return !!t && t.identifier === -1 && (t.radiusX == null || t.radiusX === 1) && (t.radiusY == null || t.radiusY === 1)
}
var Pp;
function Zx() {
    if (Pp == null) {
        let e = typeof document < "u" ? document.head : null;
        Pp = !!(e && (e.createShadowRoot || e.attachShadow))
    }
    return Pp
}
function bD(e) {
    if (Zx()) {
        let t = e.getRootNode ? e.getRootNode() : null;
        if (typeof ShadowRoot < "u" && ShadowRoot && t instanceof ShadowRoot)
            return t
    }
    return null
}
function XK() {
    let e = typeof document < "u" && document ? document.activeElement : null;
    for (; e && e.shadowRoot; ) {
        let t = e.shadowRoot.activeElement;
        if (t === e)
            break;
        e = t
    }
    return e
}
function xi(e) {
    return e.composedPath ? e.composedPath()[0] : e.target
}
var gs;
function Qx() {
    if (gs == null && typeof window < "u")
        try {
            window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: () => gs = !0
            }))
        } finally {
            gs = gs || !1
        }
    return gs
}
function CD(e) {
    return Qx() ? e : !!e.capture
}
var TD = new E("cdk-input-modality-detector-options")
  , SD = {
    ignoreKeys: [18, 17, 224, 91, 16]
}
  , AD = 650
  , Lp = {
    passive: !0,
    capture: !0
}
  , ND = ( () => {
    class e {
        _platform = p(An);
        _listenerCleanups;
        modalityDetected;
        modalityChanged;
        get mostRecentModality() {
            return this._modality.value
        }
        _mostRecentTarget = null;
        _modality = new oe(null);
        _options;
        _lastTouchMs = 0;
        _onKeydown = n => {
            this._options?.ignoreKeys?.some(r => r === n.keyCode) || (this._modality.next("keyboard"),
            this._mostRecentTarget = xi(n))
        }
        ;
        _onMousedown = n => {
            Date.now() - this._lastTouchMs < AD || (this._modality.next(kp(n) ? "keyboard" : "mouse"),
            this._mostRecentTarget = xi(n))
        }
        ;
        _onTouchstart = n => {
            if (xp(n)) {
                this._modality.next("keyboard");
                return
            }
            this._lastTouchMs = Date.now(),
            this._modality.next("touch"),
            this._mostRecentTarget = xi(n)
        }
        ;
        constructor() {
            let n = p(F)
              , r = p(G)
              , i = p(TD, {
                optional: !0
            });
            if (this._options = m(m({}, SD), i),
            this.modalityDetected = this._modality.pipe(zi(1)),
            this.modalityChanged = this.modalityDetected.pipe(Xu()),
            this._platform.isBrowser) {
                let o = p(xt).createRenderer(null, null);
                this._listenerCleanups = n.runOutsideAngular( () => [o.listen(r, "keydown", this._onKeydown, Lp), o.listen(r, "mousedown", this._onMousedown, Lp), o.listen(r, "touchstart", this._onTouchstart, Lp)])
            }
        }
        ngOnDestroy() {
            this._modality.complete(),
            this._listenerCleanups?.forEach(n => n())
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , ms = (function(e) {
    return e[e.IMMEDIATE = 0] = "IMMEDIATE",
    e[e.EVENTUAL = 1] = "EVENTUAL",
    e
}
)(ms || {})
  , RD = new E("cdk-focus-monitor-default-options")
  , Du = CD({
    passive: !0,
    capture: !0
})
  , Jx = ( () => {
    class e {
        _ngZone = p(F);
        _platform = p(An);
        _inputModalityDetector = p(ND);
        _origin = null;
        _lastFocusOrigin;
        _windowFocused = !1;
        _windowFocusTimeoutId;
        _originTimeoutId;
        _originFromTouchInteraction = !1;
        _elementInfo = new Map;
        _monitoredElementCount = 0;
        _rootNodeFocusListenerCount = new Map;
        _detectionMode;
        _windowFocusListener = () => {
            this._windowFocused = !0,
            this._windowFocusTimeoutId = setTimeout( () => this._windowFocused = !1)
        }
        ;
        _document = p(G);
        _stopInputModalityDetector = new U;
        constructor() {
            let n = p(RD, {
                optional: !0
            });
            this._detectionMode = n?.detectionMode || ms.IMMEDIATE
        }
        _rootNodeFocusAndBlurListener = n => {
            let r = xi(n);
            for (let i = r; i; i = i.parentElement)
                n.type === "focus" ? this._onFocus(n, i) : this._onBlur(n, i)
        }
        ;
        monitor(n, r=!1) {
            let i = ps(n);
            if (!this._platform.isBrowser || i.nodeType !== 1)
                return w();
            let o = bD(i) || this._document
              , s = this._elementInfo.get(i);
            if (s)
                return r && (s.checkChildren = !0),
                s.subject;
            let a = {
                checkChildren: r,
                subject: new U,
                rootNode: o
            };
            return this._elementInfo.set(i, a),
            this._registerGlobalListeners(a),
            a.subject
        }
        stopMonitoring(n) {
            let r = ps(n)
              , i = this._elementInfo.get(r);
            i && (i.subject.complete(),
            this._setClasses(r),
            this._elementInfo.delete(r),
            this._removeGlobalListeners(i))
        }
        focusVia(n, r, i) {
            let o = ps(n)
              , s = this._document.activeElement;
            o === s ? this._getClosestElementsInfo(o).forEach( ([a,c]) => this._originChanged(a, r, c)) : (this._setOrigin(r),
            typeof o.focus == "function" && o.focus(i))
        }
        ngOnDestroy() {
            this._elementInfo.forEach( (n, r) => this.stopMonitoring(r))
        }
        _getWindow() {
            return this._document.defaultView || window
        }
        _getFocusOrigin(n) {
            return this._origin ? this._originFromTouchInteraction ? this._shouldBeAttributedToTouch(n) ? "touch" : "program" : this._origin : this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : n && this._isLastInteractionFromInputLabel(n) ? "mouse" : "program"
        }
        _shouldBeAttributedToTouch(n) {
            return this._detectionMode === ms.EVENTUAL || !!n?.contains(this._inputModalityDetector._mostRecentTarget)
        }
        _setClasses(n, r) {
            n.classList.toggle("cdk-focused", !!r),
            n.classList.toggle("cdk-touch-focused", r === "touch"),
            n.classList.toggle("cdk-keyboard-focused", r === "keyboard"),
            n.classList.toggle("cdk-mouse-focused", r === "mouse"),
            n.classList.toggle("cdk-program-focused", r === "program")
        }
        _setOrigin(n, r=!1) {
            this._ngZone.runOutsideAngular( () => {
                if (this._origin = n,
                this._originFromTouchInteraction = n === "touch" && r,
                this._detectionMode === ms.IMMEDIATE) {
                    clearTimeout(this._originTimeoutId);
                    let i = this._originFromTouchInteraction ? AD : 1;
                    this._originTimeoutId = setTimeout( () => this._origin = null, i)
                }
            }
            )
        }
        _onFocus(n, r) {
            let i = this._elementInfo.get(r)
              , o = xi(n);
            !i || !i.checkChildren && r !== o || this._originChanged(r, this._getFocusOrigin(o), i)
        }
        _onBlur(n, r) {
            let i = this._elementInfo.get(r);
            !i || i.checkChildren && n.relatedTarget instanceof Node && r.contains(n.relatedTarget) || (this._setClasses(r),
            this._emitOrigin(i, null))
        }
        _emitOrigin(n, r) {
            n.subject.observers.length && this._ngZone.run( () => n.subject.next(r))
        }
        _registerGlobalListeners(n) {
            if (!this._platform.isBrowser)
                return;
            let r = n.rootNode
              , i = this._rootNodeFocusListenerCount.get(r) || 0;
            i || this._ngZone.runOutsideAngular( () => {
                r.addEventListener("focus", this._rootNodeFocusAndBlurListener, Du),
                r.addEventListener("blur", this._rootNodeFocusAndBlurListener, Du)
            }
            ),
            this._rootNodeFocusListenerCount.set(r, i + 1),
            ++this._monitoredElementCount === 1 && (this._ngZone.runOutsideAngular( () => {
                this._getWindow().addEventListener("focus", this._windowFocusListener)
            }
            ),
            this._inputModalityDetector.modalityDetected.pipe(en(this._stopInputModalityDetector)).subscribe(o => {
                this._setOrigin(o, !0)
            }
            ))
        }
        _removeGlobalListeners(n) {
            let r = n.rootNode;
            if (this._rootNodeFocusListenerCount.has(r)) {
                let i = this._rootNodeFocusListenerCount.get(r);
                i > 1 ? this._rootNodeFocusListenerCount.set(r, i - 1) : (r.removeEventListener("focus", this._rootNodeFocusAndBlurListener, Du),
                r.removeEventListener("blur", this._rootNodeFocusAndBlurListener, Du),
                this._rootNodeFocusListenerCount.delete(r))
            }
            --this._monitoredElementCount || (this._getWindow().removeEventListener("focus", this._windowFocusListener),
            this._stopInputModalityDetector.next(),
            clearTimeout(this._windowFocusTimeoutId),
            clearTimeout(this._originTimeoutId))
        }
        _originChanged(n, r, i) {
            this._setClasses(n, r),
            this._emitOrigin(i, r),
            this._lastFocusOrigin = r
        }
        _getClosestElementsInfo(n) {
            let r = [];
            return this._elementInfo.forEach( (i, o) => {
                (o === n || i.checkChildren && o.contains(n)) && r.push([o, i])
            }
            ),
            r
        }
        _isLastInteractionFromInputLabel(n) {
            let {_mostRecentTarget: r, mostRecentModality: i} = this._inputModalityDetector;
            if (i !== "mouse" || !r || r === n || n.nodeName !== "INPUT" && n.nodeName !== "TEXTAREA" || n.disabled)
                return !1;
            let o = n.labels;
            if (o) {
                for (let s = 0; s < o.length; s++)
                    if (o[s].contains(r))
                        return !0
            }
            return !1
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var wu = new WeakMap
  , Fp = ( () => {
    class e {
        _appRef;
        _injector = p(z);
        _environmentInjector = p(Q);
        load(n) {
            let r = this._appRef = this._appRef || this._injector.get(Ft)
              , i = wu.get(r);
            i || (i = {
                loaders: new Set,
                refs: []
            },
            wu.set(r, i),
            r.onDestroy( () => {
                wu.get(r)?.refs.forEach(o => o.destroy()),
                wu.delete(r)
            }
            )),
            i.loaders.has(n) || (i.loaders.add(n),
            i.refs.push(wE(n, {
                environmentInjector: this._environmentInjector
            })))
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var MD = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275cmp = Co({
            type: e,
            selectors: [["ng-component"]],
            exportAs: ["cdkVisuallyHidden"],
            decls: 0,
            vars: 0,
            template: function(r, i) {},
            styles: [`.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}
`],
            encapsulation: 2,
            changeDetection: 0
        })
    }
    return e
}
)();
var Xx = ( () => {
    class e {
        create(n) {
            return typeof MutationObserver > "u" ? null : new MutationObserver(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var OD = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275mod = Ke({
            type: e
        });
        static \u0275inj = Re({
            providers: [Xx]
        })
    }
    return e
}
)();
var jp = {}
  , eP = ( () => {
    class e {
        _appId = p(ci);
        getId(n) {
            return this._appId !== "ng" && (n += this._appId),
            jp.hasOwnProperty(n) || (jp[n] = 0),
            `${n}${jp[n]++}`
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function kD(e, ...t) {
    return t.length ? t.some(n => e[n]) : e.altKey || e.shiftKey || e.ctrlKey || e.metaKey
}
var tP = 200
  , bu = class {
    _letterKeyStream = new U;
    _items = [];
    _selectedItemIndex = -1;
    _pressedLetters = [];
    _skipPredicateFn;
    _selectedItem = new U;
    selectedItem = this._selectedItem;
    constructor(t, n) {
        let r = typeof n?.debounceInterval == "number" ? n.debounceInterval : tP;
        n?.skipPredicate && (this._skipPredicateFn = n.skipPredicate),
        this.setItems(t),
        this._setupKeyHandler(r)
    }
    destroy() {
        this._pressedLetters = [],
        this._letterKeyStream.complete(),
        this._selectedItem.complete()
    }
    setCurrentSelectedItemIndex(t) {
        this._selectedItemIndex = t
    }
    setItems(t) {
        this._items = t
    }
    handleKey(t) {
        let n = t.keyCode;
        t.key && t.key.length === 1 ? this._letterKeyStream.next(t.key.toLocaleUpperCase()) : (n >= 65 && n <= 90 || n >= 48 && n <= 57) && this._letterKeyStream.next(String.fromCharCode(n))
    }
    isTyping() {
        return this._pressedLetters.length > 0
    }
    reset() {
        this._pressedLetters = []
    }
    _setupKeyHandler(t) {
        this._letterKeyStream.pipe(te(n => this._pressedLetters.push(n)), $i(t), ge( () => this._pressedLetters.length > 0), P( () => this._pressedLetters.join("").toLocaleUpperCase())).subscribe(n => {
            for (let r = 1; r < this._items.length + 1; r++) {
                let i = (this._selectedItemIndex + r) % this._items.length
                  , o = this._items[i];
                if (!this._skipPredicateFn?.(o) && o.getLabel?.().toLocaleUpperCase().trim().indexOf(n) === 0) {
                    this._selectedItem.next(o);
                    break
                }
            }
            this._pressedLetters = []
        }
        )
    }
}
;
var Cu = class {
    _items;
    _activeItemIndex = xe(-1);
    _activeItem = xe(null);
    _wrap = !1;
    _typeaheadSubscription = q.EMPTY;
    _itemChangesSubscription;
    _vertical = !0;
    _horizontal;
    _allowedModifierKeys = [];
    _homeAndEnd = !1;
    _pageUpAndDown = {
        enabled: !1,
        delta: 10
    };
    _effectRef;
    _typeahead;
    _skipPredicateFn = t => t.disabled;
    constructor(t, n) {
        this._items = t,
        t instanceof rr ? this._itemChangesSubscription = t.changes.subscribe(r => this._itemsChanged(r.toArray())) : ao(t) && (this._effectRef = Rf( () => this._itemsChanged(t()), {
            injector: n
        }))
    }
    tabOut = new U;
    change = new U;
    skipPredicate(t) {
        return this._skipPredicateFn = t,
        this
    }
    withWrap(t=!0) {
        return this._wrap = t,
        this
    }
    withVerticalOrientation(t=!0) {
        return this._vertical = t,
        this
    }
    withHorizontalOrientation(t) {
        return this._horizontal = t,
        this
    }
    withAllowedModifierKeys(t) {
        return this._allowedModifierKeys = t,
        this
    }
    withTypeAhead(t=200) {
        this._typeaheadSubscription.unsubscribe();
        let n = this._getItemsArray();
        return this._typeahead = new bu(n,{
            debounceInterval: typeof t == "number" ? t : void 0,
            skipPredicate: r => this._skipPredicateFn(r)
        }),
        this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(r => {
            this.setActiveItem(r)
        }
        ),
        this
    }
    cancelTypeahead() {
        return this._typeahead?.reset(),
        this
    }
    withHomeAndEnd(t=!0) {
        return this._homeAndEnd = t,
        this
    }
    withPageUpDown(t=!0, n=10) {
        return this._pageUpAndDown = {
            enabled: t,
            delta: n
        },
        this
    }
    setActiveItem(t) {
        let n = this._activeItem();
        this.updateActiveItem(t),
        this._activeItem() !== n && this.change.next(this._activeItemIndex())
    }
    onKeydown(t) {
        let n = t.keyCode
          , i = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(o => !t[o] || this._allowedModifierKeys.indexOf(o) > -1);
        switch (n) {
        case 9:
            this.tabOut.next();
            return;
        case 40:
            if (this._vertical && i) {
                this.setNextItemActive();
                break
            } else
                return;
        case 38:
            if (this._vertical && i) {
                this.setPreviousItemActive();
                break
            } else
                return;
        case 39:
            if (this._horizontal && i) {
                this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
                break
            } else
                return;
        case 37:
            if (this._horizontal && i) {
                this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
                break
            } else
                return;
        case 36:
            if (this._homeAndEnd && i) {
                this.setFirstItemActive();
                break
            } else
                return;
        case 35:
            if (this._homeAndEnd && i) {
                this.setLastItemActive();
                break
            } else
                return;
        case 33:
            if (this._pageUpAndDown.enabled && i) {
                let o = this._activeItemIndex() - this._pageUpAndDown.delta;
                this._setActiveItemByIndex(o > 0 ? o : 0, 1);
                break
            } else
                return;
        case 34:
            if (this._pageUpAndDown.enabled && i) {
                let o = this._activeItemIndex() + this._pageUpAndDown.delta
                  , s = this._getItemsArray().length;
                this._setActiveItemByIndex(o < s ? o : s - 1, -1);
                break
            } else
                return;
        default:
            (i || kD(t, "shiftKey")) && this._typeahead?.handleKey(t);
            return
        }
        this._typeahead?.reset(),
        t.preventDefault()
    }
    get activeItemIndex() {
        return this._activeItemIndex()
    }
    get activeItem() {
        return this._activeItem()
    }
    isTyping() {
        return !!this._typeahead && this._typeahead.isTyping()
    }
    setFirstItemActive() {
        this._setActiveItemByIndex(0, 1)
    }
    setLastItemActive() {
        this._setActiveItemByIndex(this._getItemsArray().length - 1, -1)
    }
    setNextItemActive() {
        this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1)
    }
    setPreviousItemActive() {
        this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1)
    }
    updateActiveItem(t) {
        let n = this._getItemsArray()
          , r = typeof t == "number" ? t : n.indexOf(t)
          , i = n[r];
        this._activeItem.set(i ?? null),
        this._activeItemIndex.set(r),
        this._typeahead?.setCurrentSelectedItemIndex(r)
    }
    destroy() {
        this._typeaheadSubscription.unsubscribe(),
        this._itemChangesSubscription?.unsubscribe(),
        this._effectRef?.destroy(),
        this._typeahead?.destroy(),
        this.tabOut.complete(),
        this.change.complete()
    }
    _setActiveItemByDelta(t) {
        this._wrap ? this._setActiveInWrapMode(t) : this._setActiveInDefaultMode(t)
    }
    _setActiveInWrapMode(t) {
        let n = this._getItemsArray();
        for (let r = 1; r <= n.length; r++) {
            let i = (this._activeItemIndex() + t * r + n.length) % n.length
              , o = n[i];
            if (!this._skipPredicateFn(o)) {
                this.setActiveItem(i);
                return
            }
        }
    }
    _setActiveInDefaultMode(t) {
        this._setActiveItemByIndex(this._activeItemIndex() + t, t)
    }
    _setActiveItemByIndex(t, n) {
        let r = this._getItemsArray();
        if (r[t]) {
            for (; this._skipPredicateFn(r[t]); )
                if (t += n,
                !r[t])
                    return;
            this.setActiveItem(t)
        }
    }
    _getItemsArray() {
        return ao(this._items) ? this._items() : this._items instanceof rr ? this._items.toArray() : this._items
    }
    _itemsChanged(t) {
        this._typeahead?.setItems(t);
        let n = this._activeItem();
        if (n) {
            let r = t.indexOf(n);
            r > -1 && r !== this._activeItemIndex() && (this._activeItemIndex.set(r),
            this._typeahead?.setCurrentSelectedItemIndex(r))
        }
    }
}
;
var Up = class extends Cu {
    _origin = "program";
    setFocusOrigin(t) {
        return this._origin = t,
        this
    }
    setActiveItem(t) {
        super.setActiveItem(t),
        this.activeItem && this.activeItem.focus(this._origin)
    }
}
;
function Vp(e) {
    return Array.isArray(e) ? e : [e]
}
var xD = new Set, Dr, Tu = ( () => {
    class e {
        _platform = p(An);
        _nonce = p(ui, {
            optional: !0
        });
        _matchMedia;
        constructor() {
            this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : rP
        }
        matchMedia(n) {
            return (this._platform.WEBKIT || this._platform.BLINK) && nP(n, this._nonce),
            this._matchMedia(n)
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function nP(e, t) {
    if (!xD.has(e))
        try {
            Dr || (Dr = document.createElement("style"),
            t && Dr.setAttribute("nonce", t),
            Dr.setAttribute("type", "text/css"),
            document.head.appendChild(Dr)),
            Dr.sheet && (Dr.sheet.insertRule(`@media ${e} {body{ }}`, 0),
            xD.add(e))
        } catch (n) {
            console.error(n)
        }
}
function rP(e) {
    return {
        matches: e === "all" || e === "",
        media: e,
        addListener: () => {}
        ,
        removeListener: () => {}
    }
}
var Bp = ( () => {
    class e {
        _mediaMatcher = p(Tu);
        _zone = p(F);
        _queries = new Map;
        _destroySubject = new U;
        constructor() {}
        ngOnDestroy() {
            this._destroySubject.next(),
            this._destroySubject.complete()
        }
        isMatched(n) {
            return PD(Vp(n)).some(i => this._registerQuery(i).mql.matches)
        }
        observe(n) {
            let i = PD(Vp(n)).map(s => this._registerQuery(s).observable)
              , o = Fr(i);
            return o = Qt(o.pipe(Ze(1)), o.pipe(zi(1), $i(0))),
            o.pipe(P(s => {
                let a = {
                    matches: !1,
                    breakpoints: {}
                };
                return s.forEach( ({matches: c, query: u}) => {
                    a.matches = a.matches || c,
                    a.breakpoints[u] = c
                }
                ),
                a
            }
            ))
        }
        _registerQuery(n) {
            if (this._queries.has(n))
                return this._queries.get(n);
            let r = this._mediaMatcher.matchMedia(n)
              , o = {
                observable: new S(s => {
                    let a = c => this._zone.run( () => s.next(c));
                    return r.addListener(a),
                    () => {
                        r.removeListener(a)
                    }
                }
                ).pipe(Gi(r), P( ({matches: s}) => ({
                    query: n,
                    matches: s
                })), en(this._destroySubject)),
                mql: r
            };
            return this._queries.set(n, o),
            o
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function PD(e) {
    return e.map(t => t.split(",")).reduce( (t, n) => t.concat(n)).map(t => t.trim())
}
var iP = ( () => {
    class e {
        _platform = p(An);
        constructor() {}
        isDisabled(n) {
            return n.hasAttribute("disabled")
        }
        isVisible(n) {
            return sP(n) && getComputedStyle(n).visibility === "visible"
        }
        isTabbable(n) {
            if (!this._platform.isBrowser)
                return !1;
            let r = oP(pP(n));
            if (r && (LD(r) === -1 || !this.isVisible(r)))
                return !1;
            let i = n.nodeName.toLowerCase()
              , o = LD(n);
            return n.hasAttribute("contenteditable") ? o !== -1 : i === "iframe" || i === "object" || this._platform.WEBKIT && this._platform.IOS && !fP(n) ? !1 : i === "audio" ? n.hasAttribute("controls") ? o !== -1 : !1 : i === "video" ? o === -1 ? !1 : o !== null ? !0 : this._platform.FIREFOX || n.hasAttribute("controls") : n.tabIndex >= 0
        }
        isFocusable(n, r) {
            return hP(n) && !this.isDisabled(n) && (r?.ignoreVisibility || this.isVisible(n))
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
function oP(e) {
    try {
        return e.frameElement
    } catch {
        return null
    }
}
function sP(e) {
    return !!(e.offsetWidth || e.offsetHeight || typeof e.getClientRects == "function" && e.getClientRects().length)
}
function aP(e) {
    let t = e.nodeName.toLowerCase();
    return t === "input" || t === "select" || t === "button" || t === "textarea"
}
function cP(e) {
    return lP(e) && e.type == "hidden"
}
function uP(e) {
    return dP(e) && e.hasAttribute("href")
}
function lP(e) {
    return e.nodeName.toLowerCase() == "input"
}
function dP(e) {
    return e.nodeName.toLowerCase() == "a"
}
function UD(e) {
    if (!e.hasAttribute("tabindex") || e.tabIndex === void 0)
        return !1;
    let t = e.getAttribute("tabindex");
    return !!(t && !isNaN(parseInt(t, 10)))
}
function LD(e) {
    if (!UD(e))
        return null;
    let t = parseInt(e.getAttribute("tabindex") || "", 10);
    return isNaN(t) ? -1 : t
}
function fP(e) {
    let t = e.nodeName.toLowerCase()
      , n = t === "input" && e.type;
    return n === "text" || n === "password" || t === "select" || t === "textarea"
}
function hP(e) {
    return cP(e) ? !1 : aP(e) || uP(e) || e.hasAttribute("contenteditable") || UD(e)
}
function pP(e) {
    return e.ownerDocument && e.ownerDocument.defaultView || window
}
var $p = class {
    _element;
    _checker;
    _ngZone;
    _document;
    _injector;
    _startAnchor;
    _endAnchor;
    _hasAttached = !1;
    startAnchorListener = () => this.focusLastTabbableElement();
    endAnchorListener = () => this.focusFirstTabbableElement();
    get enabled() {
        return this._enabled
    }
    set enabled(t) {
        this._enabled = t,
        this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(t, this._startAnchor),
        this._toggleAnchorTabIndex(t, this._endAnchor))
    }
    _enabled = !0;
    constructor(t, n, r, i, o=!1, s) {
        this._element = t,
        this._checker = n,
        this._ngZone = r,
        this._document = i,
        this._injector = s,
        o || this.attachAnchors()
    }
    destroy() {
        let t = this._startAnchor
          , n = this._endAnchor;
        t && (t.removeEventListener("focus", this.startAnchorListener),
        t.remove()),
        n && (n.removeEventListener("focus", this.endAnchorListener),
        n.remove()),
        this._startAnchor = this._endAnchor = null,
        this._hasAttached = !1
    }
    attachAnchors() {
        return this._hasAttached ? !0 : (this._ngZone.runOutsideAngular( () => {
            this._startAnchor || (this._startAnchor = this._createAnchor(),
            this._startAnchor.addEventListener("focus", this.startAnchorListener)),
            this._endAnchor || (this._endAnchor = this._createAnchor(),
            this._endAnchor.addEventListener("focus", this.endAnchorListener))
        }
        ),
        this._element.parentNode && (this._element.parentNode.insertBefore(this._startAnchor, this._element),
        this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling),
        this._hasAttached = !0),
        this._hasAttached)
    }
    focusInitialElementWhenReady(t) {
        return new Promise(n => {
            this._executeOnStable( () => n(this.focusInitialElement(t)))
        }
        )
    }
    focusFirstTabbableElementWhenReady(t) {
        return new Promise(n => {
            this._executeOnStable( () => n(this.focusFirstTabbableElement(t)))
        }
        )
    }
    focusLastTabbableElementWhenReady(t) {
        return new Promise(n => {
            this._executeOnStable( () => n(this.focusLastTabbableElement(t)))
        }
        )
    }
    _getRegionBoundary(t) {
        let n = this._element.querySelectorAll(`[cdk-focus-region-${t}], [cdkFocusRegion${t}], [cdk-focus-${t}]`);
        return t == "start" ? n.length ? n[0] : this._getFirstTabbableElement(this._element) : n.length ? n[n.length - 1] : this._getLastTabbableElement(this._element)
    }
    focusInitialElement(t) {
        let n = this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");
        if (n) {
            if (!this._checker.isFocusable(n)) {
                let r = this._getFirstTabbableElement(n);
                return r?.focus(t),
                !!r
            }
            return n.focus(t),
            !0
        }
        return this.focusFirstTabbableElement(t)
    }
    focusFirstTabbableElement(t) {
        let n = this._getRegionBoundary("start");
        return n && n.focus(t),
        !!n
    }
    focusLastTabbableElement(t) {
        let n = this._getRegionBoundary("end");
        return n && n.focus(t),
        !!n
    }
    hasAttached() {
        return this._hasAttached
    }
    _getFirstTabbableElement(t) {
        if (this._checker.isFocusable(t) && this._checker.isTabbable(t))
            return t;
        let n = t.children;
        for (let r = 0; r < n.length; r++) {
            let i = n[r].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(n[r]) : null;
            if (i)
                return i
        }
        return null
    }
    _getLastTabbableElement(t) {
        if (this._checker.isFocusable(t) && this._checker.isTabbable(t))
            return t;
        let n = t.children;
        for (let r = n.length - 1; r >= 0; r--) {
            let i = n[r].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(n[r]) : null;
            if (i)
                return i
        }
        return null
    }
    _createAnchor() {
        let t = this._document.createElement("div");
        return this._toggleAnchorTabIndex(this._enabled, t),
        t.classList.add("cdk-visually-hidden"),
        t.classList.add("cdk-focus-trap-anchor"),
        t.setAttribute("aria-hidden", "true"),
        t
    }
    _toggleAnchorTabIndex(t, n) {
        t ? n.setAttribute("tabindex", "0") : n.removeAttribute("tabindex")
    }
    toggleAnchors(t) {
        this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(t, this._startAnchor),
        this._toggleAnchorTabIndex(t, this._endAnchor))
    }
    _executeOnStable(t) {
        this._injector ? Xa(t, {
            injector: this._injector
        }) : setTimeout(t)
    }
}
  , gP = ( () => {
    class e {
        _checker = p(iP);
        _ngZone = p(F);
        _document = p(G);
        _injector = p(z);
        constructor() {
            p(Fp).load(MD)
        }
        create(n, r=!1) {
            return new $p(n,this._checker,this._ngZone,this._document,r,this._injector)
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var Nn = (function(e) {
    return e[e.NONE = 0] = "NONE",
    e[e.BLACK_ON_WHITE = 1] = "BLACK_ON_WHITE",
    e[e.WHITE_ON_BLACK = 2] = "WHITE_ON_BLACK",
    e
}
)(Nn || {})
  , FD = "cdk-high-contrast-black-on-white"
  , jD = "cdk-high-contrast-white-on-black"
  , Hp = "cdk-high-contrast-active"
  , Su = ( () => {
    class e {
        _platform = p(An);
        _hasCheckedHighContrastMode;
        _document = p(G);
        _breakpointSubscription;
        constructor() {
            this._breakpointSubscription = p(Bp).observe("(forced-colors: active)").subscribe( () => {
                this._hasCheckedHighContrastMode && (this._hasCheckedHighContrastMode = !1,
                this._applyBodyHighContrastModeCssClasses())
            }
            )
        }
        getHighContrastMode() {
            if (!this._platform.isBrowser)
                return Nn.NONE;
            let n = this._document.createElement("div");
            n.style.backgroundColor = "rgb(1,2,3)",
            n.style.position = "absolute",
            this._document.body.appendChild(n);
            let r = this._document.defaultView || window
              , i = r && r.getComputedStyle ? r.getComputedStyle(n) : null
              , o = (i && i.backgroundColor || "").replace(/ /g, "");
            switch (n.remove(),
            o) {
            case "rgb(0,0,0)":
            case "rgb(45,50,54)":
            case "rgb(32,32,32)":
                return Nn.WHITE_ON_BLACK;
            case "rgb(255,255,255)":
            case "rgb(255,250,239)":
                return Nn.BLACK_ON_WHITE
            }
            return Nn.NONE
        }
        ngOnDestroy() {
            this._breakpointSubscription.unsubscribe()
        }
        _applyBodyHighContrastModeCssClasses() {
            if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
                let n = this._document.body.classList;
                n.remove(Hp, FD, jD),
                this._hasCheckedHighContrastMode = !0;
                let r = this.getHighContrastMode();
                r === Nn.BLACK_ON_WHITE ? n.add(Hp, FD) : r === Nn.WHITE_ON_BLACK && n.add(Hp, jD)
            }
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)()
  , mP = ( () => {
    class e {
        constructor() {
            p(Su)._applyBodyHighContrastModeCssClasses()
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275mod = Ke({
            type: e
        });
        static \u0275inj = Re({
            imports: [OD]
        })
    }
    return e
}
)();
var vP = new E("MATERIAL_ANIMATIONS");
var VD = null;
function yP() {
    return p(vP, {
        optional: !0
    })?.animationsDisabled || p(qd, {
        optional: !0
    }) === "NoopAnimations" ? "di-disabled" : (VD ??= p(Tu).matchMedia("(prefers-reduced-motion)").matches,
    VD ? "reduced-motion" : "enabled")
}
function FY() {
    return yP() !== "enabled"
}
function UY(e) {
    return e == null ? "" : typeof e == "string" ? e : `${e}px`
}
function BY(e) {
    return e != null && `${e}` != "false"
}
var EP = new E("cdk-dir-doc",{
    providedIn: "root",
    factory: IP
});
function IP() {
    return p(G)
}
var _P = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function BD(e) {
    let t = e?.toLowerCase() || "";
    return t === "auto" && typeof navigator < "u" && navigator?.language ? _P.test(navigator.language) ? "rtl" : "ltr" : t === "rtl" ? "rtl" : "ltr"
}
var DP = ( () => {
    class e {
        get value() {
            return this.valueSignal()
        }
        valueSignal = xe("ltr");
        change = new de;
        constructor() {
            let n = p(EP, {
                optional: !0
            });
            if (n) {
                let r = n.body ? n.body.dir : null
                  , i = n.documentElement ? n.documentElement.dir : null;
                this.valueSignal.set(BD(r || i || "ltr"))
            }
        }
        ngOnDestroy() {
            this.change.complete()
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275prov = v({
            token: e,
            factory: e.\u0275fac,
            providedIn: "root"
        })
    }
    return e
}
)();
var Wp = ( () => {
    class e {
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275mod = Ke({
            type: e
        });
        static \u0275inj = Re({})
    }
    return e
}
)();
var XY = ( () => {
    class e {
        constructor() {
            p(Su)._applyBodyHighContrastModeCssClasses()
        }
        static \u0275fac = function(r) {
            return new (r || e)
        }
        ;
        static \u0275mod = Ke({
            type: e
        });
        static \u0275inj = Re({
            imports: [Wp, Wp]
        })
    }
    return e
}
)();
var vs = (function(e) {
    return e[e.NORMAL = 0] = "NORMAL",
    e[e.NEGATED = 1] = "NEGATED",
    e[e.INVERTED = 2] = "INVERTED",
    e
}
)(vs || {}), Au, wr;
function tZ() {
    if (wr == null) {
        if (typeof document != "object" || !document || typeof Element != "function" || !Element)
            return wr = !1,
            wr;
        if (document.documentElement?.style && "scrollBehavior"in document.documentElement.style)
            wr = !0;
        else {
            let e = Element.prototype.scrollTo;
            e ? wr = !/\{\s*\[native code\]\s*\}/.test(e.toString()) : wr = !1
        }
    }
    return wr
}
function nZ() {
    if (typeof document != "object" || !document)
        return vs.NORMAL;
    if (Au == null) {
        let e = document.createElement("div")
          , t = e.style;
        e.dir = "rtl",
        t.width = "1px",
        t.overflow = "auto",
        t.visibility = "hidden",
        t.pointerEvents = "none",
        t.position = "absolute";
        let n = document.createElement("div")
          , r = n.style;
        r.width = "2px",
        r.height = "1px",
        e.appendChild(n),
        document.body.appendChild(e),
        Au = vs.NORMAL,
        e.scrollLeft === 0 && (e.scrollLeft = 1,
        Au = e.scrollLeft === 0 ? vs.NEGATED : vs.INVERTED),
        e.remove()
    }
    return Au
}
function iZ() {
    return typeof __karma__ < "u" && !!__karma__ || typeof jasmine < "u" && !!jasmine || typeof jest < "u" && !!jest || typeof Mocha < "u" && !!Mocha
}
export {m as a, j as b, q as c, S as d, U as e, pe as f, Y as g, w as h, P as i, Hi as j, Dw as k, ww as l, ge as m, bw as n, Ze as o, Sw as p, Aw as q, Gi as r, Ce as s, en as t, I as u, ia as v, v as w, Re as x, E as y, p as z, Me as A, Q as B, um as C, lm as D, z as E, G as F, Jw as G, ao as H, xe as I, Pe as J, si as K, Ga as L, mt as M, rr as N, qd as O, Bb as P, cC as Q, de as R, F as S, Xa as T, ni as U, xt as V, Iy as W, di as X, fn as Y, ri as Z, Co as _, Ke as $, Lt as aa, Vy as ba, cS as ca, $y as da, To as ea, Ft as fa, Ef as ga, mS as ha, vS as ia, yS as ja, ES as ka, IS as la, Ky as ma, _f as na, Df as oa, ac as pa, wf as qa, bf as ra, Yy as sa, bS as ta, Qy as ua, Xy as va, SS as wa, NS as xa, RS as ya, OS as za, kS as Aa, xS as Ba, PS as Ca, LS as Da, FS as Ea, jS as Fa, US as Ga, nE as Ha, ZS as Ia, cA as Ja, aE as Ka, Cf as La, uE as Ma, mA as Na, EA as Oa, hn as Pa, _A as Qa, Rf as Ra, FA as Sa, VG as Ta, BG as Ua, xf as Va, Pf as Wa, _E as Xa, HG as Ya, $G as Za, wE as _a, jt as $a, fi as ab, eN as bb, gN as cb, Sp as db, ki as eb, Bx as fb, zE as gb, ar as hb, vc as ib, q6 as jb, yc as kb, ye as lb, K6 as mb, Le as nb, gn as ob, Te as pb, De as qb, W as rb, mn as sb, st as tb, hi as ub, Fe as vb, pi as wb, ur as xb, Z as yb, yn as zb, Vo as Ab, mi as Bb, En as Cb, je as Db, Vt as Eb, dr as Fb, V4 as Gb, B4 as Hb, vi as Ib, gr as Jb, Ko as Kb, p9 as Lb, g9 as Mb, m9 as Nb, mr as Ob, k9 as Pb, x9 as Qb, P9 as Rb, R_ as Sb, DD as Tb, kp as Ub, xp as Vb, XK as Wb, xi as Xb, An as Yb, CD as Zb, Yx as _b, ps as $b, Jx as ac, Fp as bc, MD as cc, Vp as dc, OD as ec, iP as fc, gP as gc, mP as hc, eP as ic, kD as jc, Up as kc, vs as lc, tZ as mc, nZ as nc, iZ as oc, FY as pc, UY as qc, BY as rc, DP as sc, Wp as tc, XY as uc};
