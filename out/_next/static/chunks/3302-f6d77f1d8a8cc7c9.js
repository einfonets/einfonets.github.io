"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3302],
  {
    3815: function (e, t, n) {
      var r = n(5893),
        s = n(7294),
        i = n(1664);
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function o(e) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        return !t || ("object" !== f(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function u(e, t) {
        return (u =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var f = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function p(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = o(e);
          if (t) {
            var s = o(this).constructor;
            n = Reflect.construct(r, arguments, s);
          } else n = r.apply(this, arguments);
          return l(this, n);
        };
      }
      var h = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && u(e, t);
        })(l, e);
        var t,
          n,
          s,
          o = p(l);
        function l() {
          return c(this, l), o.apply(this, arguments);
        }
        return (
          (t = l),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsxs)("section", {
                  className: "free-trial-area ptb-100 bg-f4f5fe",
                  children: [
                    (0, r.jsx)("div", {
                      className: "container",
                      children: (0, r.jsxs)("div", {
                        className: "free-trial-content",
                        children: [
                          (0, r.jsx)("h2", {
                            children:
                              "We always try to be the best support to you as possible",
                          }),
                          (0, r.jsx)("p", {
                            children:
                              "Qualify your leads & recognize the value of word your customer will love you",
                          }),
                          (0, r.jsx)(i.default, {
                            href: "/contact",
                            children: (0, r.jsxs)("a", {
                              className: "default-btn",
                              children: [
                                (0, r.jsx)("i", { className: "bx bxs-hot" }),
                                "Contact Us",
                                (0, r.jsx)("span", {}),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "shape10",
                      children: (0, r.jsx)("img", {
                        src: "/images/shape/shape10.png",
                        alt: "image",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "shape11",
                      children: (0, r.jsx)("img", {
                        src: "/images/shape/shape7.png",
                        alt: "image",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "shape12",
                      children: (0, r.jsx)("img", {
                        src: "/images/shape/shape11.png",
                        alt: "image",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "shape13",
                      children: (0, r.jsx)("img", {
                        src: "/images/shape/shape12.png",
                        alt: "image",
                      }),
                    }),
                  ],
                });
              },
            },
          ]) && a(t.prototype, n),
          s && a(t, s),
          l
        );
      })(s.Component);
      t.Z = h;
    },
    3942: function (e, t, n) {
      var r = n(5893),
        s = n(7294);
      n(1664);
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function o(e, t) {
        return !t || ("object" !== u(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = a(e);
          if (t) {
            var s = a(this).constructor;
            n = Reflect.construct(r, arguments, s);
          } else n = r.apply(this, arguments);
          return o(this, n);
        };
      }
      var p = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && l(e, t);
        })(o, e);
        var t,
          n,
          s,
          a = f(o);
        function o() {
          return i(this, o), a.apply(this, arguments);
        }
        return (
          (t = o),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsx)("section", {
                  className: "our-loving-clients ptb-100 bg-color-f8fbfa",
                  children: (0, r.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, r.jsx)("div", {
                        className: "section-title",
                        children: (0, r.jsx)("h2", {
                          children: "Our Loving Clients",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "clients-logo-list align-items-center",
                        children: [
                          (0, r.jsx)("div", {
                            className: "single-clients-logo",
                            children: (0, r.jsx)("a", {
                              href: "#",
                              target: "_blank",
                              children: (0, r.jsx)("img", {
                                src: "/images/clients/client1.png",
                                alt: "image",
                              }),
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "single-clients-logo",
                            children: (0, r.jsx)("a", {
                              href: "#",
                              target: "_blank",
                              children: (0, r.jsx)("img", {
                                src: "/images/clients/client2.png",
                                alt: "image",
                              }),
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "single-clients-logo",
                            children: (0, r.jsx)("a", {
                              href: "#",
                              target: "_blank",
                              children: (0, r.jsx)("img", {
                                src: "/images/clients/client3.png",
                                alt: "image",
                              }),
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "single-clients-logo",
                            children: (0, r.jsx)("a", {
                              href: "#",
                              target: "_blank",
                              children: (0, r.jsx)("img", {
                                src: "/images/clients/client4.png",
                                alt: "image",
                              }),
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "single-clients-logo",
                            children: (0, r.jsx)("a", {
                              href: "#",
                              target: "_blank",
                              children: (0, r.jsx)("img", {
                                src: "/images/clients/client5.png",
                                alt: "image",
                              }),
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "single-clients-logo",
                            children: (0, r.jsx)("a", {
                              href: "#",
                              target: "_blank",
                              children: (0, r.jsx)("img", {
                                src: "/images/clients/client6.png",
                                alt: "image",
                              }),
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "single-clients-logo",
                            children: (0, r.jsx)("a", {
                              href: "#",
                              target: "_blank",
                              children: (0, r.jsx)("img", {
                                src: "/images/clients/client7.png",
                                alt: "image",
                              }),
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "single-clients-logo",
                            children: (0, r.jsx)("a", {
                              href: "#",
                              target: "_blank",
                              children: (0, r.jsx)("img", {
                                src: "/images/clients/client8.png",
                                alt: "image",
                              }),
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "single-clients-logo",
                            children: (0, r.jsx)("a", {
                              href: "#",
                              target: "_blank",
                              children: (0, r.jsx)("img", {
                                src: "/images/clients/client9.png",
                                alt: "image",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                });
              },
            },
          ]) && c(t.prototype, n),
          s && c(t, s),
          o
        );
      })(s.Component);
      t.Z = p;
    },
    9787: function (e, t, n) {
      var r = n(5893),
        s = n(7294);
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function o(e, t) {
        return !t || ("object" !== u(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var u = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function f(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = a(e);
          if (t) {
            var s = a(this).constructor;
            n = Reflect.construct(r, arguments, s);
          } else n = r.apply(this, arguments);
          return o(this, n);
        };
      }
      var p = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && l(e, t);
        })(o, e);
        var t,
          n,
          s,
          a = f(o);
        function o() {
          return i(this, o), a.apply(this, arguments);
        }
        return (
          (t = o),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsx)("section", {
                  className: "subscribe-area bg-f4f5fe",
                  children: (0, r.jsx)("div", {
                    className: "container",
                    children: (0, r.jsxs)("div", {
                      className: "subscribe-content",
                      children: [
                        (0, r.jsx)("h2", {
                          children:
                            "We always try to be the best support to you as possible",
                        }),
                        (0, r.jsx)("form", {
                          className: "newsletter-form",
                          children: (0, r.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                              (0, r.jsx)("div", {
                                className: "col-lg-8 col-md-8",
                                children: (0, r.jsx)("input", {
                                  type: "email",
                                  className: "input-newsletter",
                                  placeholder: "hello@spacle.com",
                                  name: "email",
                                  required: !0,
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "col-lg-4 col-md-4",
                                children: (0, r.jsxs)("button", {
                                  type: "submit",
                                  children: [
                                    (0, r.jsx)("i", {
                                      className: "bx bxs-hot",
                                    }),
                                    "Subscribe Now",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "shape14",
                          children: (0, r.jsx)("img", {
                            src: "/images/shape/shape13.png",
                            alt: "image",
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "shape15",
                          children: (0, r.jsx)("img", {
                            src: "/images/shape/shape14.png",
                            alt: "image",
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "shape16",
                          children: (0, r.jsx)("img", {
                            src: "/images/shape/shape15.png",
                            alt: "image",
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "shape17",
                          children: (0, r.jsx)("img", {
                            src: "/images/shape/shape16.png",
                            alt: "image",
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "shape18",
                          children: (0, r.jsx)("img", {
                            src: "/images/shape/shape17.png",
                            alt: "image",
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              },
            },
          ]) && c(t.prototype, n),
          s && c(t, s),
          o
        );
      })(s.Component);
      t.Z = p;
    },
  },
]);
