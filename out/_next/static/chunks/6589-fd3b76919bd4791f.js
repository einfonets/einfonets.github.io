"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6589],
  {
    769: function (e, t, n) {
      var r = n(5893),
        s = n(7294);
      function i(e, t) {
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
      function a(e) {
        return (a = Object.setPrototypeOf
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
            r = a(e);
          if (t) {
            var s = a(this).constructor;
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
          a = p(c);
        function c() {
          return i(this, c), a.apply(this, arguments);
        }
        return (
          (t = c),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsxs)("div", {
                  className: "subscribe-content border-radius-0",
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
                              className: "disabled",
                              children: [
                                (0, r.jsx)("i", { className: "bx bxs-hot" }),
                                " Subscribe Now",
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
    8288: function (e, t, n) {
      var r = n(5893),
        s = n(7294),
        i = n(1876);
      function o(e, t) {
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
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
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
      function u(e, t) {
        return (u =
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
      function d(e) {
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
            r = c(e);
          if (t) {
            var s = c(this).constructor;
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
          c = d(l);
        function l() {
          return o(this, l), c.apply(this, arguments);
        }
        return (
          (t = l),
          (n = [
            {
              key: "render",
              value: function () {
                return (0, r.jsx)("section", {
                  className: "faq-area ptb-100",
                  children: (0, r.jsx)("div", {
                    className: "container-fluid",
                    children: (0, r.jsxs)("div", {
                      className: "row align-items-center",
                      children: [
                        (0, r.jsx)("div", {
                          className: "col-lg-7 col-md-12",
                          children: (0, r.jsxs)("div", {
                            className: "faq-accordion",
                            children: [
                              (0, r.jsxs)("h2", {
                                children: [
                                  "Get To Know About ",
                                  (0, r.jsx)("span", { children: "Hepro" }),
                                ],
                              }),
                              (0, r.jsxs)(i.UQ, {
                                allowZeroExpanded: !0,
                                preExpanded: ["a"],
                                children: [
                                  (0, r.jsxs)(i.Qd, {
                                    uuid: "a",
                                    children: [
                                      (0, r.jsx)(i.Ol, {
                                        children: (0, r.jsx)(i.on, {
                                          children:
                                            "What access do I have on the free plan?",
                                        }),
                                      }),
                                      (0, r.jsx)(i.Mt, {
                                        children: (0, r.jsx)("p", {
                                          children:
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(i.Qd, {
                                    uuid: "b",
                                    children: [
                                      (0, r.jsx)(i.Ol, {
                                        children: (0, r.jsx)(i.on, {
                                          children:
                                            "What access do I have on a free trial?",
                                        }),
                                      }),
                                      (0, r.jsx)(i.Mt, {
                                        children: (0, r.jsx)("p", {
                                          children:
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(i.Qd, {
                                    uuid: "c",
                                    children: [
                                      (0, r.jsx)(i.Ol, {
                                        children: (0, r.jsx)(i.on, {
                                          children:
                                            "Does the price go up as my team gets larger?",
                                        }),
                                      }),
                                      (0, r.jsx)(i.Mt, {
                                        children: (0, r.jsx)("p", {
                                          children:
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(i.Qd, {
                                    uuid: "d",
                                    children: [
                                      (0, r.jsx)(i.Ol, {
                                        children: (0, r.jsx)(i.on, {
                                          children:
                                            "How can I cancel/pause my subscription?",
                                        }),
                                      }),
                                      (0, r.jsx)(i.Mt, {
                                        children: (0, r.jsx)("p", {
                                          children:
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(i.Qd, {
                                    uuid: "e",
                                    children: [
                                      (0, r.jsx)(i.Ol, {
                                        children: (0, r.jsx)(i.on, {
                                          children: "Can I pay via an invoice?",
                                        }),
                                      }),
                                      (0, r.jsx)(i.Mt, {
                                        children: (0, r.jsx)("p", {
                                          children:
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className: "col-lg-5 col-md-12",
                          children: (0, r.jsx)("div", {
                            className: "faq-image",
                            children: (0, r.jsx)("img", {
                              src: "/images/faq-img1.png",
                              alt: "image",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
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
  },
]);
