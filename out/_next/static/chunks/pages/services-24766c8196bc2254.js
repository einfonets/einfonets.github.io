(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7054],
  {
    6395: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/services",
        function () {
          return n(5742);
        },
      ]);
    },
    4358: function (e, t, n) {
      "use strict";
      var r = n(5893),
        s = n(7294),
        a = n(5152);
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
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
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              l(e, t, n[t]);
            });
        }
        return e;
      }
      function d(e, t) {
        return !t || ("object" !== m(t) && "function" !== typeof t) ? o(e) : t;
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var m = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function h(e) {
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
            r = u(e);
          if (t) {
            var s = u(this).constructor;
            n = Reflect.construct(r, arguments, s);
          } else n = r.apply(this, arguments);
          return d(this, n);
        };
      }
      var b = (0, a.default)(n.e(5518).then(n.t.bind(n, 8694, 23)), {
          loadableGenerated: {
            webpack: function () {
              return [8694];
            },
            modules: [
              "../components/Common/ClientsFeedbackSlider.js -> react-owl-carousel3",
            ],
          },
        }),
        x = {
          loop: !0,
          nav: !1,
          dots: !0,
          autoplayHoverPause: !0,
          autoplay: !0,
          margin: 30,
          navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>",
          ],
          responsive: {
            0: { items: 1 },
            768: { items: 1 },
            1024: { items: 2 },
            1200: { items: 2 },
          },
        },
        j = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && p(e, t);
          })(u, e);
          var t,
            n,
            s,
            a = h(u);
          function u() {
            var e;
            return (
              i(this, u),
              l(o((e = a.apply(this, arguments))), "_isMounted", !1),
              l(o(e), "state", { display: !1 }),
              e
            );
          }
          return (
            (t = u),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  (this._isMounted = !0), this.setState({ display: !0 });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "render",
                value: function () {
                  return (0, r.jsx)("section", {
                    className: "feedback-area ptb-100",
                    children: (0, r.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, r.jsx)("div", {
                          className: "section-title",
                          children: (0, r.jsxs)("h2", {
                            children: [
                              "Whats Our Clients Said About ",
                              (0, r.jsx)("span", { children: "Hepro" }),
                            ],
                          }),
                        }),
                        this.state.display
                          ? (0, r.jsxs)(
                              b,
                              f(
                                {
                                  className:
                                    "feedback-slides owl-carousel owl-theme",
                                },
                                x,
                                {
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className: "single-feedback-item",
                                      children: [
                                        (0, r.jsx)("img", {
                                          src: "/images/feedback/feedback1.png",
                                          alt: "image",
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "feedback-desc",
                                          children: [
                                            (0, r.jsx)("p", {
                                              children:
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "rating",
                                              children: [
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                              ],
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "client-info",
                                              children: [
                                                (0, r.jsx)("h3", {
                                                  children: "Sarah Taylor",
                                                }),
                                                (0, r.jsx)("span", {
                                                  children: "CEO at Envato",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "single-feedback-item",
                                      children: [
                                        (0, r.jsx)("img", {
                                          src: "/images/feedback/feedback2.png",
                                          alt: "image",
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "feedback-desc",
                                          children: [
                                            (0, r.jsx)("p", {
                                              children:
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "rating",
                                              children: [
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                              ],
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "client-info",
                                              children: [
                                                (0, r.jsx)("h3", {
                                                  children: "Olivar Lucy",
                                                }),
                                                (0, r.jsx)("span", {
                                                  children: "CEO at EnvyTheme",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "single-feedback-item",
                                      children: [
                                        (0, r.jsx)("img", {
                                          src: "/images/feedback/feedback3.png",
                                          alt: "image",
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "feedback-desc",
                                          children: [
                                            (0, r.jsx)("p", {
                                              children:
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "rating",
                                              children: [
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                                (0, r.jsx)("i", {
                                                  className: "bx bxs-star",
                                                }),
                                              ],
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "client-info",
                                              children: [
                                                (0, r.jsx)("h3", {
                                                  children: "Steven Smith",
                                                }),
                                                (0, r.jsx)("span", {
                                                  children: "CEO at Envato",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }
                              )
                            )
                          : "",
                      ],
                    }),
                  });
                },
              },
            ]) && c(t.prototype, n),
            s && c(t, s),
            u
          );
        })(s.Component);
      t.Z = j;
    },
    6588: function (e, t, n) {
      "use strict";
      var r = n(5893),
        s = n(7294);
      n(1664);
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e) {
        return (i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
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
            r = i(e);
          if (t) {
            var s = i(this).constructor;
            n = Reflect.construct(r, arguments, s);
          } else n = r.apply(this, arguments);
          return c(this, n);
        };
      }
      var d = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && l(e, t);
        })(c, e);
        var t,
          n,
          s,
          i = f(c);
        function c() {
          return a(this, c), i.apply(this, arguments);
        }
        return (
          (t = c),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsx)("section", {
                  className: "app-download-area ptb-100",
                  children: (0, r.jsx)("div", {
                    className: "container",
                    children: (0, r.jsxs)("div", {
                      className: "row align-items-center",
                      children: [
                        (0, r.jsx)("div", {
                          className: "col-lg-5 col-md-12",
                          children: (0, r.jsx)("div", {
                            className: "app-download-image",
                            children: (0, r.jsx)("img", {
                              src: "/images/mobile.png",
                              alt: "image",
                            }),
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "col-lg-7 col-md-12",
                          children: (0, r.jsxs)("div", {
                            className: "app-download-content",
                            children: [
                              (0, r.jsx)("span", {
                                className: "sub-title",
                                children: "Download App",
                              }),
                              (0, r.jsx)("h2", {
                                children:
                                  "Supporting your customers on the go with our mobile app",
                              }),
                              (0, r.jsxs)("div", {
                                className: "btn-box",
                                children: [
                                  (0, r.jsxs)("a", {
                                    href: "https://www.apple.com/app-store/",
                                    className: "apple-store-btn",
                                    children: [
                                      (0, r.jsx)("img", {
                                        src: "/images/applestore.png",
                                        alt: "image",
                                      }),
                                      "Download on the",
                                      (0, r.jsx)("span", {
                                        children: "Apple Store",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("a", {
                                    href: "https://play.google.com/store/apps",
                                    className: "play-store-btn",
                                    children: [
                                      (0, r.jsx)("img", {
                                        src: "/images/playstore.png",
                                        alt: "image",
                                      }),
                                      "Get it on",
                                      (0, r.jsx)("span", {
                                        children: "Google Play",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                });
              },
            },
          ]) && o(t.prototype, n),
          s && o(t, s),
          c
        );
      })(s.Component);
      t.Z = d;
    },
    8815: function (e, t, n) {
      "use strict";
      var r = n(5893),
        s = n(7294);
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e) {
        return (i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
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
            r = i(e);
          if (t) {
            var s = i(this).constructor;
            n = Reflect.construct(r, arguments, s);
          } else n = r.apply(this, arguments);
          return c(this, n);
        };
      }
      var d = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && l(e, t);
        })(c, e);
        var t,
          n,
          s,
          i = f(c);
        function c() {
          return a(this, c), i.apply(this, arguments);
        }
        return (
          (t = c),
          (n = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.pageTitle,
                  n = e.pageDescription;
                return (0, r.jsx)("div", {
                  className: "page-title-area",
                  children: (0, r.jsx)("div", {
                    className: "container",
                    children: (0, r.jsxs)("div", {
                      className: "page-title-content",
                      children: [
                        (0, r.jsx)("h2", { children: t }),
                        (0, r.jsx)("p", { children: n }),
                      ],
                    }),
                  }),
                });
              },
            },
          ]) && o(t.prototype, n),
          s && o(t, s),
          c
        );
      })(s.Component);
      t.Z = d;
    },
    9787: function (e, t, n) {
      "use strict";
      var r = n(5893),
        s = n(7294);
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e) {
        return (i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
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
            r = i(e);
          if (t) {
            var s = i(this).constructor;
            n = Reflect.construct(r, arguments, s);
          } else n = r.apply(this, arguments);
          return c(this, n);
        };
      }
      var d = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && l(e, t);
        })(c, e);
        var t,
          n,
          s,
          i = f(c);
        function c() {
          return a(this, c), i.apply(this, arguments);
        }
        return (
          (t = c),
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
          ]) && o(t.prototype, n),
          s && o(t, s),
          c
        );
      })(s.Component);
      t.Z = d;
    },
    6622: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return P;
        },
      });
      var r = n(5893),
        s = n(7294),
        a = n(1664),
        o = n(1317),
        i = n.n(o);
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return !t || ("object" !== p(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var p = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function m(e) {
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
            r = u(e);
          if (t) {
            var s = u(this).constructor;
            n = Reflect.construct(r, arguments, s);
          } else n = r.apply(this, arguments);
          return f(this, n);
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
              t && d(e, t);
          })(o, e);
          var t,
            n,
            s,
            a = m(o);
          function o() {
            return c(this, o), a.apply(this, arguments);
          }
          return (
            (t = o),
            (n = [
              {
                key: "render",
                value: function () {
                  return (0, r.jsx)("div", {
                    className: "funfacts-inner",
                    children: (0, r.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, r.jsx)("div", {
                          className: "col-lg-3 col-6 col-sm-6",
                          children: (0, r.jsx)(i(), {
                            animateIn: "fadeInLeft",
                            delay: 50,
                            animateOnce: !0,
                            children: (0, r.jsxs)("div", {
                              className: "single-funfacts funfact-style-two",
                              children: [
                                (0, r.jsx)("i", {
                                  className: "bx bx-list-check",
                                }),
                                (0, r.jsxs)("h3", {
                                  children: [
                                    "850",
                                    (0, r.jsx)("span", {
                                      className: "sign-icon",
                                      children: "+",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("p", {
                                  children: "Completed Projects",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "col-lg-3 col-6 col-sm-6",
                          children: (0, r.jsx)(i(), {
                            animateIn: "fadeInLeft",
                            delay: 100,
                            animateOnce: !0,
                            children: (0, r.jsxs)("div", {
                              className: "single-funfacts funfact-style-two",
                              children: [
                                (0, r.jsx)("i", { className: "bx bx-smile" }),
                                (0, r.jsxs)("h3", {
                                  children: [
                                    "850",
                                    (0, r.jsx)("span", {
                                      className: "sign-icon",
                                      children: "+",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("p", { children: "Happy Clients" }),
                              ],
                            }),
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "col-lg-3 col-6 col-sm-6",
                          children: (0, r.jsx)(i(), {
                            animateIn: "fadeInLeft",
                            delay: 150,
                            animateOnce: !0,
                            children: (0, r.jsxs)("div", {
                              className: "single-funfacts funfact-style-two",
                              children: [
                                (0, r.jsx)("i", {
                                  className: "bx bx-grid-small",
                                }),
                                (0, r.jsxs)("h3", {
                                  children: [
                                    "120",
                                    (0, r.jsx)("span", {
                                      className: "sign-icon",
                                      children: "+",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("p", {
                                  children: "Ongoing Projects",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "col-lg-3 col-6 col-sm-6",
                          children: (0, r.jsx)(i(), {
                            animateIn: "fadeInLeft",
                            delay: 200,
                            animateOnce: !0,
                            children: (0, r.jsxs)("div", {
                              className: "single-funfacts funfact-style-two",
                              children: [
                                (0, r.jsx)("i", { className: "bx bxs-award" }),
                                (0, r.jsxs)("h3", {
                                  children: [
                                    "50",
                                    (0, r.jsx)("span", {
                                      className: "sign-icon",
                                      children: "+",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("p", { children: "Winning Awards" }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]) && l(t.prototype, n),
            s && l(t, s),
            o
          );
        })(s.Component),
        b = n(5152);
      function x(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function j(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function y(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function N(e, t) {
        return !t || ("object" !== O(t) && "function" !== typeof t) ? x(e) : t;
      }
      function w(e, t) {
        return (w =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var O = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function _(e) {
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
            r = g(e);
          if (t) {
            var s = g(this).constructor;
            n = Reflect.construct(r, arguments, s);
          } else n = r.apply(this, arguments);
          return N(this, n);
        };
      }
      (0, b.default)(
        function () {
          return n.e(6635).then(n.bind(n, 1239));
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [1239];
            },
            modules: [
              "../components/Common/WhyChooseUs.js -> react-modal-video",
            ],
          },
          ssr: !1,
        }
      );
      var P = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && w(e, t);
        })(c, e);
        var t,
          n,
          s,
          o = _(c);
        function c() {
          var e;
          return (
            j(this, c),
            y(x((e = o.apply(this, arguments))), "state", { isOpen: !1 }),
            y(x(e), "openModal", function () {
              e.setState({ isOpen: !0 });
            }),
            e
          );
        }
        return (
          (t = c),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsxs)("section", {
                    className: "video-presentation-area ptb-100",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "container",
                        children: [
                          (0, r.jsx)("div", {
                            className: "section-title",
                            children: (0, r.jsx)("h2", {
                              children: "Why choose us...",
                            }),
                          }),
                          (0, r.jsx)(h, {}),
                          (0, r.jsx)(i(), {
                            animateIn: "fadeInUp",
                            delay: 100,
                            animateOnce: !0,
                            children: (0, r.jsxs)("div", {
                              className: "contact-cta-box mwidth-1000",
                              children: [
                                (0, r.jsx)("h3", {
                                  children: "Have any questions about us?",
                                }),
                                (0, r.jsx)("p", {
                                  children: "Don't hesitate to contact us.",
                                }),
                                (0, r.jsx)(a.default, {
                                  href: "/contact",
                                  children: (0, r.jsxs)("a", {
                                    className: "default-btn",
                                    children: [
                                      "Contact Us",
                                      (0, r.jsx)("span", {}),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "shape-map1",
                        children: (0, r.jsx)("img", {
                          src: "/images/map1.png",
                          alt: "image",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "shape7",
                        children: (0, r.jsx)("img", {
                          src: "/images/shape/shape7.png",
                          alt: "image",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "shape8",
                        children: (0, r.jsx)("img", {
                          src: "/images/shape/shape8.png",
                          alt: "image",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "shape9",
                        children: (0, r.jsx)("img", {
                          src: "/images/shape/shape9.png",
                          alt: "image",
                        }),
                      }),
                    ],
                  }),
                });
              },
            },
          ]) && v(t.prototype, n),
          s && v(t, s),
          c
        );
      })(s.Component);
    },
    7195: function (e, t, n) {
      "use strict";
      var r = n(5893),
        s = n(7294),
        a = n(3823);
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
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
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return !t || ("object" !== p(t) && "function" !== typeof t) ? o(e) : t;
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var p = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function m(e) {
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
            r = u(e);
          if (t) {
            var s = u(this).constructor;
            n = Reflect.construct(r, arguments, s);
          } else n = r.apply(this, arguments);
          return f(this, n);
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
            t && d(e, t);
        })(f, e);
        var t,
          n,
          s,
          u = m(f);
        function f() {
          var e;
          return (
            i(this, f),
            l(o((e = u.apply(this, arguments))), "_isMounted", !1),
            l(o(e), "state", { display: !1, collapsed: !0 }),
            l(o(e), "toggleNavbar", function () {
              e.setState({ collapsed: !e.state.collapsed });
            }),
            e
          );
        }
        return (
          (t = f),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                var e = document.getElementById("navbar");
                document.addEventListener("scroll", function () {
                  window.scrollY > 170
                    ? e.classList.add("is-sticky")
                    : e.classList.remove("is-sticky");
                }),
                  window.scrollTo(0, 0);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this._isMounted = !1;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.state.collapsed,
                  t = e
                    ? "collapse navbar-collapse"
                    : "collapse navbar-collapse show",
                  n = e
                    ? "navbar-toggler navbar-toggler-right collapsed"
                    : "navbar-toggler navbar-toggler-right";
                return (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)("div", {
                    id: "navbar",
                    className: "navbar-area navbar-style-two",
                    children: (0, r.jsx)("div", {
                      className: "main-nav",
                      children: (0, r.jsx)("div", {
                        className: "container",
                        children: (0, r.jsxs)("nav", {
                          className: "navbar navbar-expand-md navbar-light",
                          children: [
                            (0, r.jsx)(a.Z, {
                              href: "/",
                              children: (0, r.jsx)("a", {
                                className: "navbar-brand",
                                children: (0, r.jsx)("img", {
                                  src: "/images/logo.svg",
                                  alt: "logo",
                                }),
                              }),
                            }),
                            (0, r.jsxs)("button", {
                              onClick: this.toggleNavbar,
                              className: n,
                              type: "button",
                              "data-toggle": "collapse",
                              "data-target": "#navbarSupportedContent",
                              "aria-controls": "navbarSupportedContent",
                              "aria-expanded": "false",
                              "aria-label": "Toggle navigation",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "icon-bar top-bar",
                                }),
                                (0, r.jsx)("span", {
                                  className: "icon-bar middle-bar",
                                }),
                                (0, r.jsx)("span", {
                                  className: "icon-bar bottom-bar",
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: t,
                              id: "navbarSupportedContent",
                              children: (0, r.jsxs)("ul", {
                                className: "navbar-nav",
                                children: [
                                  (0, r.jsx)("li", {
                                    className: "nav-item",
                                    children: (0, r.jsx)(a.Z, {
                                      href: "/about",
                                      activeClassName: "active",
                                      children: (0, r.jsx)("a", {
                                        className: "nav-link",
                                        children: "About",
                                      }),
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    className: "nav-item",
                                    children: (0, r.jsx)(a.Z, {
                                      href: "/pricing",
                                      activeClassName: "active",
                                      children: (0, r.jsx)("a", {
                                        className: "nav-link",
                                        children: "Services",
                                      }),
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    className: "nav-item",
                                    children: (0, r.jsx)(a.Z, {
                                      href: "#",
                                      children: (0, r.jsx)("a", {
                                        className: "nav-link",
                                        onClick: function (e) {
                                          return e.preventDefault();
                                        },
                                        children: "Portfolio",
                                      }),
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    className: "nav-item",
                                    children: (0, r.jsx)(a.Z, {
                                      href: "#",
                                      children: (0, r.jsx)("a", {
                                        className: "nav-link",
                                        onClick: function (e) {
                                          return e.preventDefault();
                                        },
                                        children: "Blog",
                                      }),
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    className: "nav-item",
                                    children: (0, r.jsx)(a.Z, {
                                      href: "#",
                                      activeClassName: "active",
                                      children: (0, r.jsx)("a", {
                                        className: "nav-link",
                                        children: "Careers",
                                      }),
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    className: "nav-item",
                                    children: (0, r.jsx)(a.Z, {
                                      href: "/contact",
                                      activeClassName: "active",
                                      children: (0, r.jsx)("a", {
                                        className: "nav-link",
                                        children: "Contact",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                });
              },
            },
          ]) && c(t.prototype, n),
          s && c(t, s),
          f
        );
      })(s.Component);
      t.Z = h;
    },
    5742: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        });
      var r = n(5893),
        s = n(7294),
        a = n(7195),
        o = n(8815),
        i = n(1664);
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e, t) {
        return !t || ("object" !== p(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function d(e, t) {
        return (d =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var p = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function m(e) {
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
            r = u(e);
          if (t) {
            var s = u(this).constructor;
            n = Reflect.construct(r, arguments, s);
          } else n = r.apply(this, arguments);
          return f(this, n);
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
              t && d(e, t);
          })(o, e);
          var t,
            n,
            s,
            a = m(o);
          function o() {
            return c(this, o), a.apply(this, arguments);
          }
          return (
            (t = o),
            (n = [
              {
                key: "render",
                value: function () {
                  return (0, r.jsx)("section", {
                    className: "features-area pt-100 pb-70 bg-f4f6fc",
                    children: (0, r.jsx)("div", {
                      className: "container",
                      children: (0, r.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, r.jsx)("div", {
                            className: "col-lg-4 col-md-6",
                            children: (0, r.jsxs)("div", {
                              className: "features-box-one",
                              children: [
                                (0, r.jsx)("i", {
                                  className: "bx bx-conversation bg-13c4a1",
                                }),
                                (0, r.jsx)("h3", {
                                  children: "IT Consultancy",
                                }),
                                (0, r.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
                                }),
                                (0, r.jsx)(i.default, {
                                  href: "/service-details",
                                  children: (0, r.jsxs)("a", {
                                    className: "read-more",
                                    children: [
                                      "Read more",
                                      (0, r.jsx)("i", {
                                        className: "bx bx-right-arrow-alt",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col-lg-4 col-md-6",
                            children: (0, r.jsxs)("div", {
                              className: "features-box-one",
                              children: [
                                (0, r.jsx)("i", {
                                  className: "bx bx-mobile bg-6610f2",
                                }),
                                (0, r.jsx)("h3", {
                                  children: "Mobile Applications",
                                }),
                                (0, r.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
                                }),
                                (0, r.jsx)(i.default, {
                                  href: "/service-details",
                                  children: (0, r.jsxs)("a", {
                                    className: "read-more",
                                    children: [
                                      "Read more",
                                      (0, r.jsx)("i", {
                                        className: "bx bx-right-arrow-alt",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col-lg-4 col-md-6",
                            children: (0, r.jsxs)("div", {
                              className: "features-box-one",
                              children: [
                                (0, r.jsx)("i", {
                                  className: "bx bxs-badge-check bg-ffb700",
                                }),
                                (0, r.jsx)("h3", { children: "IT Solutions" }),
                                (0, r.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
                                }),
                                (0, r.jsx)(i.default, {
                                  href: "/service-details",
                                  children: (0, r.jsxs)("a", {
                                    className: "read-more",
                                    children: [
                                      "Read more",
                                      (0, r.jsx)("i", {
                                        className: "bx bx-right-arrow-alt",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col-lg-4 col-md-6",
                            children: (0, r.jsxs)("div", {
                              className: "features-box-one",
                              children: [
                                (0, r.jsx)("i", {
                                  className: "bx bx-laptop bg-9c27b0",
                                }),
                                (0, r.jsx)("h3", {
                                  children: "Web Development",
                                }),
                                (0, r.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
                                }),
                                (0, r.jsx)(i.default, {
                                  href: "/service-details",
                                  children: (0, r.jsxs)("a", {
                                    className: "read-more",
                                    children: [
                                      "Read more",
                                      (0, r.jsx)("i", {
                                        className: "bx bx-right-arrow-alt",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col-lg-4 col-md-6",
                            children: (0, r.jsxs)("div", {
                              className: "features-box-one",
                              children: [
                                (0, r.jsx)("i", {
                                  className: "bx bx-cart bg-3f51b5",
                                }),
                                (0, r.jsx)("h3", { children: "eCommerce" }),
                                (0, r.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
                                }),
                                (0, r.jsx)(i.default, {
                                  href: "/service-details",
                                  children: (0, r.jsxs)("a", {
                                    className: "read-more",
                                    children: [
                                      "Read more",
                                      (0, r.jsx)("i", {
                                        className: "bx bx-right-arrow-alt",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col-lg-4 col-md-6",
                            children: (0, r.jsxs)("div", {
                              className: "features-box-one",
                              children: [
                                (0, r.jsx)("i", {
                                  className: "bx bxs-dashboard bg-e91e63",
                                }),
                                (0, r.jsx)("h3", {
                                  children: "Project Management",
                                }),
                                (0, r.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
                                }),
                                (0, r.jsx)(i.default, {
                                  href: "/service-details",
                                  children: (0, r.jsxs)("a", {
                                    className: "read-more",
                                    children: [
                                      "Read more",
                                      (0, r.jsx)("i", {
                                        className: "bx bx-right-arrow-alt",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col-lg-4 col-md-6",
                            children: (0, r.jsxs)("div", {
                              className: "features-box-one",
                              children: [
                                (0, r.jsx)("i", {
                                  className: "bx bx-data bg-fc3549",
                                }),
                                (0, r.jsx)("h3", { children: "Web Hosting" }),
                                (0, r.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
                                }),
                                (0, r.jsx)(i.default, {
                                  href: "/service-details",
                                  children: (0, r.jsxs)("a", {
                                    className: "read-more",
                                    children: [
                                      "Read more",
                                      (0, r.jsx)("i", {
                                        className: "bx bx-right-arrow-alt",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col-lg-4 col-md-6",
                            children: (0, r.jsxs)("div", {
                              className: "features-box-one",
                              children: [
                                (0, r.jsx)("i", {
                                  className: "bx bxs-info-circle bg-00d280",
                                }),
                                (0, r.jsx)("h3", {
                                  children: "Technical Support",
                                }),
                                (0, r.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
                                }),
                                (0, r.jsx)(i.default, {
                                  href: "/service-details",
                                  children: (0, r.jsxs)("a", {
                                    className: "read-more",
                                    children: [
                                      "Read more",
                                      (0, r.jsx)("i", {
                                        className: "bx bx-right-arrow-alt",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col-lg-4 col-md-6",
                            children: (0, r.jsxs)("div", {
                              className: "features-box-one",
                              children: [
                                (0, r.jsx)("i", {
                                  className: "bx bx-cog bg-ff612f",
                                }),
                                (0, r.jsx)("h3", {
                                  children: "SEO, Affiliate Marketing",
                                }),
                                (0, r.jsx)("p", {
                                  children:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
                                }),
                                (0, r.jsx)(i.default, {
                                  href: "/service-details",
                                  children: (0, r.jsxs)("a", {
                                    className: "read-more",
                                    children: [
                                      "Read more",
                                      (0, r.jsx)("i", {
                                        className: "bx bx-right-arrow-alt",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  });
                },
              },
            ]) && l(t.prototype, n),
            s && l(t, s),
            o
          );
        })(s.Component),
        b = n(6622),
        x = n(9260),
        j = n(3097),
        v = n(6588),
        y = n(4358),
        g = n(9787),
        N = n(6653),
        w = n(8348);
      function O(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function _(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function P(e) {
        return (P = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function R(e, t) {
        return !t || ("object" !== S(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function k(e, t) {
        return (k =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var S = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function C(e) {
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
            r = P(e);
          if (t) {
            var s = P(this).constructor;
            n = Reflect.construct(r, arguments, s);
          } else n = r.apply(this, arguments);
          return R(this, n);
        };
      }
      var E = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && k(e, t);
        })(c, e);
        var t,
          n,
          s,
          i = C(c);
        function c() {
          return O(this, c), i.apply(this, arguments);
        }
        return (
          (t = c),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(a.Z, {}),
                    (0, r.jsx)(o.Z, {
                      pageTitle: "Services",
                      pageDescription: "Our Services",
                    }),
                    (0, r.jsx)(h, {}),
                    (0, r.jsx)(b.Z, {}),
                    (0, r.jsx)(x.Z, {}),
                    (0, r.jsx)(j.Z, {}),
                    (0, r.jsx)(v.Z, {}),
                    (0, r.jsx)(y.Z, {}),
                    (0, r.jsx)(g.Z, {}),
                    (0, r.jsx)(N.Z, {}),
                    (0, r.jsx)(w.Z, {}),
                  ],
                });
              },
            },
          ]) && _(t.prototype, n),
          s && _(t, s),
          c
        );
      })(s.Component);
    },
  },
  function (e) {
    e.O(0, [9774, 9045, 1317, 9423, 7199, 3097, 2888, 179], function () {
      return (t = 6395), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
