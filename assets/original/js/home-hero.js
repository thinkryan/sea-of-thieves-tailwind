(this.__LOADABLE_LOADED_CHUNKS__ = this.__LOADABLE_LOADED_CHUNKS__ || []).push([[85], {
    580: function (e, t, i) {
        "use strict";
        var a = i(8), n = i.n(a), o = i(7), s = i.n(o), r = i(15), l = i.n(r), d = i(16), u = i.n(d), c = i(17),
            h = i.n(c), m = i(0), p = i.n(m), v = i(1), g = i.n(v), b = i(176), f = i(129), y = i.n(f), k = i(103),
            E = i.n(k), L = i(6), I = i.n(L), _ = function (e) {
                function t(e) {
                    var i;
                    return n()(this, t), (i = l()(this, u()(t).call(this, e))).state = {
                        size: !1,
                        trackComponent: !0
                    }, i.preLoadImg = !1, i
                }

                return h()(t, e), s()(t, [{
                    key: "componentWillUnmount", value: function () {
                        this.preLoadImg && (this.preLoadImg.removeEventListener("load", this.preLoadImageCallBack), this.preLoadImg = null, this.resizer.clearCallBacks())
                    }
                }, {
                    key: "preLoadImageCallBack", value: function (e, t) {
                        this.preLoadImg && this.setState({size: e, trackComponent: t})
                    }
                }, {
                    key: "loadImages", value: function (e) {
                        var t = this;
                        if (e) {
                            this.resizer = new b.a(this.props.breakpoints);
                            var i = this.resizer.calculateSize();
                            this.preLoadImg = new Image, this.preLoadImg.addEventListener("load", this.preLoadImageCallBack.bind(this, i, !1)), this.preLoadImg.src = y()(this.props.imagePaths, i), this.resizer.add((function (e) {
                                t.setState({size: t.resizer.calculateSize()})
                            }))
                        }
                    }
                }, {
                    key: "render", value: function () {
                        var e = {};
                        if (this.state.size && this.props.imagePaths) {
                            var t = y()(this.props.imagePaths, this.state.size);
                            t && (e.backgroundImage = "url('" + t + "')")
                        }
                        var i = I()({"background-image": !0, "background-image--triggered": !!this.state.size});
                        return p.a.createElement(E.a, {
                            onChange: this.loadImages.bind(this),
                            active: this.state.trackComponent,
                            partialVisibility: !0
                        }, p.a.createElement("div", {className: i, style: e}))
                    }
                }]), t
            }(m.Component);
        _.propTypes = {imagePaths: g.a.object, breakpoints: g.a.object}, _.defaultProps = {
            imagePaths: {},
            breakpoints: {"small-phone": [0, 480], "medium-phone": [480, 720], tablet: [720, 1200], desktop: [1200]}
        };
        var C = _;
        i.d(t, "a", (function () {
            return C
        }))
    }, 723: function (e, t, i) {
        "use strict";
        i.r(t);
        var a = i(8), n = i.n(a), o = i(7), s = i.n(o), r = i(15), l = i.n(r), d = i(16), u = i.n(d), c = i(17),
            h = i.n(c), m = i(0), p = i.n(m), v = i(1), g = i.n(v), b = i(580), f = i(103), y = i.n(f),
            k = function (e) {
                function t() {
                    return n()(this, t), l()(this, u()(t).apply(this, arguments))
                }

                return h()(t, e), s()(t, [{
                    key: "resolveMediaType", value: function (e) {
                        var t = e.split(".");
                        switch (t[t.length - 1]) {
                            case"mp4":
                                return "video/mp4";
                            case"ogv":
                                return "video/ogv";
                            default:
                                throw"Invalid file extension"
                        }
                    }
                }, {
                    key: "videoVisibility", value: function (e) {
                        e && this.videoEl ? this.videoEl.play() : !e && this.videoEl && this.videoEl.pause()
                    }
                }, {
                    key: "componentDidMount", value: function () {
                        window.addEventListener("blur", this.videoVisibility.bind(this, !1)), window.addEventListener("focus", this.videoVisibility.bind(this, !0))
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        window.removeEventListener("blur", this.videoVisibility), window.removeEventListener("focus", this.videoVisibility)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this;
                        return p.a.createElement("div", {className: "background-video"}, p.a.createElement(y.a, {
                            onChange: this.videoVisibility.bind(this),
                            partialVisibility: !0
                        }, p.a.createElement("video", {
                            className: "background-video__video",
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                            ref: function (t) {
                                e.videoEl = t
                            }
                        }, this.props.videoPaths.map((function (t, i) {
                            return p.a.createElement("source", {
                                key: i,
                                src: t["#Value"],
                                type: e.resolveMediaType(t["#Value"])
                            })
                        })))))
                    }
                }]), t
            }(m.Component), E = i(13), L = i(164), I = function (e) {
                function t(e) {
                    var i;
                    return n()(this, t), (i = l()(this, u()(t).call(this, e))).state = {showVideo: !1}, i
                }

                return h()(t, e), s()(t, [{
                    key: "componentDidMount", value: function () {
                        var e = this.props.Video,
                            t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/.test(navigator.userAgent);
                        this.setState({showVideo: !!e && !!e.length && !t})
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props, t = e.Logo, i = e.Video, a = e.Images, n = e.CtaButton,
                            o = this.state.showVideo, s = {backgroundImage: "url(".concat(t, ")")};
                        return p.a.createElement("div", {className: "hero home-hero"}, p.a.createElement("div", {
                            className: "home-hero__logo",
                            style: s,
                            title: Object(E.f)("seaOfTheives"),
                            role: "presentation"
                        }), p.a.createElement("div", {className: "hero__image"}, o && p.a.createElement(k, {videoPaths: i}), !o && p.a.createElement(b.a, {imagePaths: a}), !!n && n.ButtonText && p.a.createElement(L.b, {
                            VideoId: n.VideoCode,
                            AudioTranscription: n.AudioTranscription,
                            linkStyles: "button button--icon align-center button--small button--green-bordered button--bordered home-hero__cta",
                            linkText: n.ButtonText,
                            icon: "play"
                        })))
                    }
                }]), t
            }(m.Component);
        I.propTypes = {Images: g.a.object, Logo: g.a.string, CtaButton: g.a.object}, I.defaultProps = {
            Images: {},
            Logo: "",
            CtaButton: {}
        };
        t.default = I
    }
}]);