"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3799],
  {
    3162: function (e, n, t) {
      var r = t(5893),
        s = t(7294),
        a = t(1664);
      function i(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function o(e, n) {
        return !n || ("object" !== d(n) && "function" !== typeof n)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function u(e, n) {
        return (u =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var d = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function f(e) {
        var n = (function () {
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
          var t,
            r = l(e);
          if (n) {
            var s = l(this).constructor;
            t = Reflect.construct(r, arguments, s);
          } else t = r.apply(this, arguments);
          return o(this, t);
        };
      }
      var h = (function (e) {
        !(function (e, n) {
          if ("function" !== typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(n && n.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            n && u(e, n);
        })(o, e);
        var n,
          t,
          s,
          l = f(o);
        function o() {
          return i(this, o), l.apply(this, arguments);
        }
        return (
          (n = o),
          (t = [
            {
              key: "render",
              value: function () {
                return (0, r.jsx)("section", {
                  className: "blog-area ptb-100",
                  children: (0, r.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, r.jsx)("div", {
                        className: "section-title",
                        children: (0, r.jsx)("h2", {
                          children: "Our Latest News",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, r.jsx)("div", {
                            className: "col-lg-4 col-md-6",
                            children: (0, r.jsxs)("div", {
                              className: "single-blog-post",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "post-image",
                                  children: [
                                    (0, r.jsx)(a.default, {
                                      href: "/blog-details",
                                      children: (0, r.jsx)("a", {
                                        children: (0, r.jsx)("img", {
                                          src: "/images/blog/blog4.jpg",
                                          alt: "image",
                                        }),
                                      }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "date",
                                      children: [
                                        (0, r.jsx)("i", {
                                          className: "bx bx-calendar",
                                        }),
                                        " Feb 14, 2020",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "post-content",
                                  children: [
                                    (0, r.jsx)("h3", {
                                      children: (0, r.jsx)(a.default, {
                                        href: "/blog-details",
                                        children: (0, r.jsx)("a", {
                                          children:
                                            "50 world-changing people, We lost in the 2010s",
                                        }),
                                      }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "post-info",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "post-by",
                                          children: [
                                            (0, r.jsx)("img", {
                                              src: "/images/author/author4.jpg",
                                              alt: "image",
                                            }),
                                            (0, r.jsx)("h6", {
                                              children: "Sarah Taylor",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("div", {
                                          className: "details-btn",
                                          children: (0, r.jsx)(a.default, {
                                            href: "/blog-details",
                                            children: (0, r.jsx)("a", {
                                              children: (0, r.jsx)("i", {
                                                className:
                                                  "bx bx-right-arrow-alt",
                                              }),
                                            }),
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
                            className: "col-lg-4 col-md-6",
                            children: (0, r.jsxs)("div", {
                              className: "single-blog-post",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "post-image",
                                  children: [
                                    (0, r.jsx)(a.default, {
                                      href: "/blog-details",
                                      children: (0, r.jsx)("a", {
                                        children: (0, r.jsx)("img", {
                                          src: "/images/blog/blog5.jpg",
                                          alt: "image",
                                        }),
                                      }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "date",
                                      children: [
                                        (0, r.jsx)("i", {
                                          className: "bx bx-calendar",
                                        }),
                                        " Feb 16, 2020",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "post-content",
                                  children: [
                                    (0, r.jsx)("h3", {
                                      children: (0, r.jsx)(a.default, {
                                        href: "/blog-details",
                                        children: (0, r.jsx)("a", {
                                          children:
                                            "Don't buy a tech gift until you read these rules",
                                        }),
                                      }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "post-info",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "post-by",
                                          children: [
                                            (0, r.jsx)("img", {
                                              src: "/images/author/author5.jpg",
                                              alt: "image",
                                            }),
                                            (0, r.jsx)("h6", {
                                              children: "Michel John",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("div", {
                                          className: "details-btn",
                                          children: (0, r.jsx)(a.default, {
                                            href: "/blog-details",
                                            children: (0, r.jsx)("a", {
                                              children: (0, r.jsx)("i", {
                                                className:
                                                  "bx bx-right-arrow-alt",
                                              }),
                                            }),
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
                            className:
                              "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
                            children: (0, r.jsxs)("div", {
                              className: "single-blog-post",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "post-image",
                                  children: [
                                    (0, r.jsx)(a.default, {
                                      href: "/blog-details",
                                      children: (0, r.jsx)("a", {
                                        children: (0, r.jsx)("img", {
                                          src: "/images/blog/blog6.jpg",
                                          alt: "image",
                                        }),
                                      }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "date",
                                      children: [
                                        (0, r.jsx)("i", {
                                          className: "bx bx-calendar",
                                        }),
                                        " Feb 18, 2020",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "post-content",
                                  children: [
                                    (0, r.jsx)("h3", {
                                      children: (0, r.jsx)(a.default, {
                                        href: "/blog-details",
                                        children: (0, r.jsx)("a", {
                                          children:
                                            "The golden rule of buying a phone as a gift",
                                        }),
                                      }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "post-info",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "post-by",
                                          children: [
                                            (0, r.jsx)("img", {
                                              src: "/images/author/author6.jpg",
                                              alt: "image",
                                            }),
                                            (0, r.jsx)("h6", {
                                              children: "Lucy Eva",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("div", {
                                          className: "details-btn",
                                          children: (0, r.jsx)(a.default, {
                                            href: "/blog-details",
                                            children: (0, r.jsx)("a", {
                                              children: (0, r.jsx)("i", {
                                                className:
                                                  "bx bx-right-arrow-alt",
                                              }),
                                            }),
                                          }),
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
                    ],
                  }),
                });
              },
            },
          ]) && c(n.prototype, t),
          s && c(n, s),
          o
        );
      })(s.Component);
      n.Z = h;
    },
    6653: function (e, n, t) {
      var r = t(5893),
        s = t(7294);
      t(1664);
      function a(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
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
      function l(e, n) {
        return !n || ("object" !== u(n) && "function" !== typeof n)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function o(e, n) {
        return (o =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var u = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function d(e) {
        var n = (function () {
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
          var t,
            r = c(e);
          if (n) {
            var s = c(this).constructor;
            t = Reflect.construct(r, arguments, s);
          } else t = r.apply(this, arguments);
          return l(this, t);
        };
      }
      var f = (function (e) {
        !(function (e, n) {
          if ("function" !== typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(n && n.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            n && o(e, n);
        })(l, e);
        var n,
          t,
          s,
          c = d(l);
        function l() {
          return a(this, l), c.apply(this, arguments);
        }
        return (
          (n = l),
          (t = [
            {
              key: "render",
              value: function () {
                return (0, r.jsx)("section", {
                  className: "our-loving-clients ptb-100 bg-f4f5fe",
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
          ]) && i(n.prototype, t),
          s && i(n, s),
          l
        );
      })(s.Component);
      n.Z = f;
    },
    9787: function (e, n, t) {
      var r = t(5893),
        s = t(7294);
      function a(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
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
      function l(e, n) {
        return !n || ("object" !== u(n) && "function" !== typeof n)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function o(e, n) {
        return (o =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var u = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function d(e) {
        var n = (function () {
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
          var t,
            r = c(e);
          if (n) {
            var s = c(this).constructor;
            t = Reflect.construct(r, arguments, s);
          } else t = r.apply(this, arguments);
          return l(this, t);
        };
      }
      var f = (function (e) {
        !(function (e, n) {
          if ("function" !== typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(n && n.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            n && o(e, n);
        })(l, e);
        var n,
          t,
          s,
          c = d(l);
        function l() {
          return a(this, l), c.apply(this, arguments);
        }
        return (
          (n = l),
          (t = [
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
          ]) && i(n.prototype, t),
          s && i(n, s),
          l
        );
      })(s.Component);
      n.Z = f;
    },
    878: function (e, n, t) {
      var r = t(5893),
        s = t(7294),
        a = t(1876);
      function i(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function o(e, n) {
        return !n || ("object" !== d(n) && "function" !== typeof n)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : n;
      }
      function u(e, n) {
        return (u =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var d = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function f(e) {
        var n = (function () {
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
          var t,
            r = l(e);
          if (n) {
            var s = l(this).constructor;
            t = Reflect.construct(r, arguments, s);
          } else t = r.apply(this, arguments);
          return o(this, t);
        };
      }
      var h = (function (e) {
        !(function (e, n) {
          if ("function" !== typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(n && n.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            n && u(e, n);
        })(o, e);
        var n,
          t,
          s,
          l = f(o);
        function o() {
          return i(this, o), l.apply(this, arguments);
        }
        return (
          (n = o),
          (t = [
            {
              key: "render",
              value: function () {
                return (0, r.jsx)("section", {
                  className: "faq-area ptb-100 bg-color-f4f5fe",
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
                              (0, r.jsxs)(a.UQ, {
                                allowZeroExpanded: !0,
                                preExpanded: ["a"],
                                children: [
                                  (0, r.jsxs)(a.Qd, {
                                    uuid: "a",
                                    children: [
                                      (0, r.jsx)(a.Ol, {
                                        children: (0, r.jsx)(a.on, {
                                          children:
                                            "What access do I have on the free plan?",
                                        }),
                                      }),
                                      (0, r.jsx)(a.Mt, {
                                        children: (0, r.jsx)("p", {
                                          children:
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(a.Qd, {
                                    uuid: "b",
                                    children: [
                                      (0, r.jsx)(a.Ol, {
                                        children: (0, r.jsx)(a.on, {
                                          children:
                                            "What access do I have on a free trial?",
                                        }),
                                      }),
                                      (0, r.jsx)(a.Mt, {
                                        children: (0, r.jsx)("p", {
                                          children:
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(a.Qd, {
                                    uuid: "c",
                                    children: [
                                      (0, r.jsx)(a.Ol, {
                                        children: (0, r.jsx)(a.on, {
                                          children:
                                            "Does the price go up as my team gets larger?",
                                        }),
                                      }),
                                      (0, r.jsx)(a.Mt, {
                                        children: (0, r.jsx)("p", {
                                          children:
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(a.Qd, {
                                    uuid: "d",
                                    children: [
                                      (0, r.jsx)(a.Ol, {
                                        children: (0, r.jsx)(a.on, {
                                          children:
                                            "How can I cancel/pause my subscription?",
                                        }),
                                      }),
                                      (0, r.jsx)(a.Mt, {
                                        children: (0, r.jsx)("p", {
                                          children:
                                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(a.Qd, {
                                    uuid: "e",
                                    children: [
                                      (0, r.jsx)(a.Ol, {
                                        children: (0, r.jsx)(a.on, {
                                          children: "Can I pay via an invoice?",
                                        }),
                                      }),
                                      (0, r.jsx)(a.Mt, {
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
          ]) && c(n.prototype, t),
          s && c(n, s),
          o
        );
      })(s.Component);
      n.Z = h;
    },
    4399: function (e, n, t) {
      var r = t(5893),
        s = t(7294),
        a = t(3823);
      function i(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function c(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function o(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
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
      function d(e, n) {
        return !n || ("object" !== h(n) && "function" !== typeof n) ? i(e) : n;
      }
      function f(e, n) {
        return (f =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var h = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function p(e) {
        var n = (function () {
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
          var t,
            r = u(e);
          if (n) {
            var s = u(this).constructor;
            t = Reflect.construct(r, arguments, s);
          } else t = r.apply(this, arguments);
          return d(this, t);
        };
      }
      var m = (function (e) {
        !(function (e, n) {
          if ("function" !== typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(n && n.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            n && f(e, n);
        })(d, e);
        var n,
          t,
          s,
          u = p(d);
        function d() {
          var e;
          return (
            c(this, d),
            o(i((e = u.apply(this, arguments))), "_isMounted", !1),
            o(i(e), "state", { display: !1, collapsed: !0 }),
            o(i(e), "toggleNavbar", function () {
              e.setState({ collapsed: !e.state.collapsed });
            }),
            e
          );
        }
        return (
          (n = d),
          (t = [
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
                  n = e
                    ? "collapse navbar-collapse"
                    : "collapse navbar-collapse show",
                  t = e
                    ? "navbar-toggler navbar-toggler-right collapsed"
                    : "navbar-toggler navbar-toggler-right";
                return (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)("div", {
                    id: "navbar",
                    className: "navbar-area",
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
                              className: t,
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
                              className: n,
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
                                      href: "/services2",
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
          ]) && l(n.prototype, t),
          s && l(n, s),
          d
        );
      })(s.Component);
      n.Z = m;
    },
  },
]);
