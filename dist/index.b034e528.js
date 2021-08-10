// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1yzIz":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "d6a90f89b034e528";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["1yzIz"], null, "parcelRequire5466")
/**
 * Swiper 6.8.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 22, 2021
 */ !function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(this, function() {
    "use strict";
    function e(e1, t) {
        for(var a = 0; a < t.length; a++){
            var i = t[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e1, i.key, i);
        }
    }
    function t() {
        return (t = Object.assign || function(e1) {
            for(var t1 = 1; t1 < arguments.length; t1++){
                var a = arguments[t1];
                for(var i in a)Object.prototype.hasOwnProperty.call(a, i) && (e1[i] = a[i]);
            }
            return e1;
        }).apply(this, arguments);
    }
    function a1(e1) {
        return null !== e1 && "object" == typeof e1 && "constructor" in e1 && e1.constructor === Object;
    }
    function i1(e1, t1) {
        (void 0) === e1 && (e1 = {
        }), (void 0) === t1 && (t1 = {
        }), Object.keys(t1).forEach(function(s) {
            (void 0) === e1[s] ? e1[s] = t1[s] : a1(t1[s]) && a1(e1[s]) && Object.keys(t1[s]).length > 0 && i1(e1[s], t1[s]);
        });
    }
    var s = {
        body: {
        },
        addEventListener: function() {
        },
        removeEventListener: function() {
        },
        activeElement: {
            blur: function() {
            },
            nodeName: ""
        },
        querySelector: function() {
            return null;
        },
        querySelectorAll: function() {
            return [];
        },
        getElementById: function() {
            return null;
        },
        createEvent: function() {
            return {
                initEvent: function() {
                }
            };
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {
                },
                setAttribute: function() {
                },
                getElementsByTagName: function() {
                    return [];
                }
            };
        },
        createElementNS: function() {
            return {
            };
        },
        importNode: function() {
            return null;
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function r() {
        var e1 = "undefined" != typeof document ? document : {
        };
        return i1(e1, s), e1;
    }
    var n = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {
            },
            pushState: function() {
            },
            go: function() {
            },
            back: function() {
            }
        },
        CustomEvent: function() {
            return this;
        },
        addEventListener: function() {
        },
        removeEventListener: function() {
        },
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return "";
                }
            };
        },
        Image: function() {
        },
        Date: function() {
        },
        screen: {
        },
        setTimeout: function() {
        },
        clearTimeout: function() {
        },
        matchMedia: function() {
            return {
            };
        },
        requestAnimationFrame: function(e1) {
            return "undefined" == typeof setTimeout ? (e1(), null) : setTimeout(e1, 0);
        },
        cancelAnimationFrame: function(e1) {
            "undefined" != typeof setTimeout && clearTimeout(e1);
        }
    };
    function l() {
        var e1 = "undefined" != typeof window ? window : {
        };
        return i1(e1, n), e1;
    }
    function o(e1) {
        return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e2) {
            return e2.__proto__ || Object.getPrototypeOf(e2);
        })(e1);
    }
    function d(e1, t1) {
        return (d = Object.setPrototypeOf || function(e2, t2) {
            return e2.__proto__ = t2, e2;
        })(e1, t1);
    }
    function p() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), !0;
        } catch (e1) {
            return !1;
        }
    }
    function u(e1, t1, a1) {
        return (u = p() ? Reflect.construct : function(e2, t2, a2) {
            var i1 = [
                null
            ];
            i1.push.apply(i1, t2);
            var s1 = new (Function.bind.apply(e2, i1));
            return a2 && d(s1, a2.prototype), s1;
        }).apply(null, arguments);
    }
    function c(e1) {
        var t1 = "function" == typeof Map ? new Map : void 0;
        return (c = function(e2) {
            if (null === e2 || (a2 = e2, -1 === Function.toString.call(a2).indexOf("[native code]"))) return e2;
            var a2;
            if ("function" != typeof e2) throw new TypeError("Super expression must either be null or a function");
            if ((void 0) !== t1) {
                if (t1.has(e2)) return t1.get(e2);
                t1.set(e2, i2);
            }
            function i2() {
                return u(e2, arguments, o(this).constructor);
            }
            return i2.prototype = Object.create(e2.prototype, {
                constructor: {
                    value: i2,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), d(i2, e2);
        })(e1);
    }
    var h = function(e1) {
        var t1, a2;
        function i2(t2) {
            var a3, i3, s1;
            return a3 = e1.call.apply(e1, [
                this
            ].concat(t2)) || this, i3 = (function(e2) {
                if ((void 0) === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e2;
            })(a3), s1 = i3.__proto__, Object.defineProperty(i3, "__proto__", {
                get: function() {
                    return s1;
                },
                set: function(e2) {
                    s1.__proto__ = e2;
                }
            }), a3;
        }
        return a2 = e1, (t1 = i2).prototype = Object.create(a2.prototype), t1.prototype.constructor = t1, t1.__proto__ = a2, i2;
    }(c(Array));
    function v(e1) {
        (void 0) === e1 && (e1 = []);
        var t1 = [];
        return e1.forEach(function(e2) {
            Array.isArray(e2) ? t1.push.apply(t1, v(e2)) : t1.push(e2);
        }), t1;
    }
    function f(e1, t1) {
        return Array.prototype.filter.call(e1, t1);
    }
    function m(e1, t1) {
        var a2 = l(), i2 = r(), s1 = [];
        if (!t1 && e1 instanceof h) return e1;
        if (!e1) return new h(s1);
        if ("string" == typeof e1) {
            var n1 = e1.trim();
            if (n1.indexOf("<") >= 0 && n1.indexOf(">") >= 0) {
                var o1 = "div";
                0 === n1.indexOf("<li") && (o1 = "ul"), 0 === n1.indexOf("<tr") && (o1 = "tbody"), 0 !== n1.indexOf("<td") && 0 !== n1.indexOf("<th") || (o1 = "tr"), 0 === n1.indexOf("<tbody") && (o1 = "table"), 0 === n1.indexOf("<option") && (o1 = "select");
                var d1 = i2.createElement(o1);
                d1.innerHTML = n1;
                for(var p1 = 0; p1 < d1.childNodes.length; p1 += 1)s1.push(d1.childNodes[p1]);
            } else s1 = (function(e2, t2) {
                if ("string" != typeof e2) return [
                    e2
                ];
                for(var a3 = [], i3 = t2.querySelectorAll(e2), s2 = 0; s2 < i3.length; s2 += 1)a3.push(i3[s2]);
                return a3;
            })(e1.trim(), t1 || i2);
        } else if (e1.nodeType || e1 === a2 || e1 === i2) s1.push(e1);
        else if (Array.isArray(e1)) {
            if (e1 instanceof h) return e1;
            s1 = e1;
        }
        return new h(function(e2) {
            for(var t2 = [], a3 = 0; a3 < e2.length; a3 += 1)-1 === t2.indexOf(e2[a3]) && t2.push(e2[a3]);
            return t2;
        }(s1));
    }
    m.fn = h.prototype;
    var g, b, y, w = {
        addClass: function() {
            for(var e1 = arguments.length, t1 = new Array(e1), a2 = 0; a2 < e1; a2++)t1[a2] = arguments[a2];
            var i2 = v(t1.map(function(e2) {
                return e2.split(" ");
            }));
            return this.forEach(function(e2) {
                var t2;
                (t2 = e2.classList).add.apply(t2, i2);
            }), this;
        },
        removeClass: function() {
            for(var e1 = arguments.length, t1 = new Array(e1), a2 = 0; a2 < e1; a2++)t1[a2] = arguments[a2];
            var i2 = v(t1.map(function(e2) {
                return e2.split(" ");
            }));
            return this.forEach(function(e2) {
                var t2;
                (t2 = e2.classList).remove.apply(t2, i2);
            }), this;
        },
        hasClass: function() {
            for(var e1 = arguments.length, t1 = new Array(e1), a2 = 0; a2 < e1; a2++)t1[a2] = arguments[a2];
            var i2 = v(t1.map(function(e2) {
                return e2.split(" ");
            }));
            return f(this, function(e2) {
                return i2.filter(function(t2) {
                    return e2.classList.contains(t2);
                }).length > 0;
            }).length > 0;
        },
        toggleClass: function() {
            for(var e1 = arguments.length, t1 = new Array(e1), a2 = 0; a2 < e1; a2++)t1[a2] = arguments[a2];
            var i2 = v(t1.map(function(e2) {
                return e2.split(" ");
            }));
            this.forEach(function(e2) {
                i2.forEach(function(t2) {
                    e2.classList.toggle(t2);
                });
            });
        },
        attr: function(e1, t1) {
            if (1 === arguments.length && "string" == typeof e1) return this[0] ? this[0].getAttribute(e1) : void 0;
            for(var a2 = 0; a2 < this.length; a2 += 1)if (2 === arguments.length) this[a2].setAttribute(e1, t1);
            else for(var i2 in e1)this[a2][i2] = e1[i2], this[a2].setAttribute(i2, e1[i2]);
            return this;
        },
        removeAttr: function(e1) {
            for(var t1 = 0; t1 < this.length; t1 += 1)this[t1].removeAttribute(e1);
            return this;
        },
        transform: function(e1) {
            for(var t1 = 0; t1 < this.length; t1 += 1)this[t1].style.transform = e1;
            return this;
        },
        transition: function(e1) {
            for(var t1 = 0; t1 < this.length; t1 += 1)this[t1].style.transitionDuration = "string" != typeof e1 ? e1 + "ms" : e1;
            return this;
        },
        on: function() {
            for(var e1 = arguments.length, t1 = new Array(e1), a2 = 0; a2 < e1; a2++)t1[a2] = arguments[a2];
            var i2 = t1[0], s1 = t1[1], r1 = t1[2], n2 = t1[3];
            function l1(e2) {
                var t2 = e2.target;
                if (t2) {
                    var a3 = e2.target.dom7EventData || [];
                    if (a3.indexOf(e2) < 0 && a3.unshift(e2), m(t2).is(s1)) r1.apply(t2, a3);
                    else for(var i3 = m(t2).parents(), n3 = 0; n3 < i3.length; n3 += 1)m(i3[n3]).is(s1) && r1.apply(i3[n3], a3);
                }
            }
            function o2(e2) {
                var t2 = e2 && e2.target && e2.target.dom7EventData || [];
                t2.indexOf(e2) < 0 && t2.unshift(e2), r1.apply(this, t2);
            }
            "function" == typeof t1[1] && (i2 = t1[0], r1 = t1[1], n2 = t1[2], s1 = void 0), n2 || (n2 = !1);
            for(var d2, p2 = i2.split(" "), u1 = 0; u1 < this.length; u1 += 1){
                var c1 = this[u1];
                if (s1) for(d2 = 0; d2 < p2.length; d2 += 1){
                    var h1 = p2[d2];
                    c1.dom7LiveListeners || (c1.dom7LiveListeners = {
                    }), c1.dom7LiveListeners[h1] || (c1.dom7LiveListeners[h1] = []), c1.dom7LiveListeners[h1].push({
                        listener: r1,
                        proxyListener: l1
                    }), c1.addEventListener(h1, l1, n2);
                }
                else for(d2 = 0; d2 < p2.length; d2 += 1){
                    var v1 = p2[d2];
                    c1.dom7Listeners || (c1.dom7Listeners = {
                    }), c1.dom7Listeners[v1] || (c1.dom7Listeners[v1] = []), c1.dom7Listeners[v1].push({
                        listener: r1,
                        proxyListener: o2
                    }), c1.addEventListener(v1, o2, n2);
                }
            }
            return this;
        },
        off: function() {
            for(var e1 = arguments.length, t1 = new Array(e1), a2 = 0; a2 < e1; a2++)t1[a2] = arguments[a2];
            var i2 = t1[0], s1 = t1[1], r1 = t1[2], n2 = t1[3];
            "function" == typeof t1[1] && (i2 = t1[0], r1 = t1[1], n2 = t1[2], s1 = void 0), n2 || (n2 = !1);
            for(var l1 = i2.split(" "), o2 = 0; o2 < l1.length; o2 += 1)for(var d2 = l1[o2], p2 = 0; p2 < this.length; p2 += 1){
                var u1 = this[p2], c2 = void 0;
                if (!s1 && u1.dom7Listeners ? c2 = u1.dom7Listeners[d2] : s1 && u1.dom7LiveListeners && (c2 = u1.dom7LiveListeners[d2]), c2 && c2.length) for(var h2 = c2.length - 1; h2 >= 0; h2 -= 1){
                    var v2 = c2[h2];
                    r1 && v2.listener === r1 || r1 && v2.listener && v2.listener.dom7proxy && v2.listener.dom7proxy === r1 ? (u1.removeEventListener(d2, v2.proxyListener, n2), c2.splice(h2, 1)) : r1 || (u1.removeEventListener(d2, v2.proxyListener, n2), c2.splice(h2, 1));
                }
            }
            return this;
        },
        trigger: function() {
            for(var e1 = l(), t1 = arguments.length, a2 = new Array(t1), i2 = 0; i2 < t1; i2++)a2[i2] = arguments[i2];
            for(var s1 = a2[0].split(" "), r1 = a2[1], n2 = 0; n2 < s1.length; n2 += 1)for(var o2 = s1[n2], d2 = 0; d2 < this.length; d2 += 1){
                var p2 = this[d2];
                if (e1.CustomEvent) {
                    var u2 = new e1.CustomEvent(o2, {
                        detail: r1,
                        bubbles: !0,
                        cancelable: !0
                    });
                    p2.dom7EventData = a2.filter(function(e2, t2) {
                        return t2 > 0;
                    }), p2.dispatchEvent(u2), p2.dom7EventData = [], delete p2.dom7EventData;
                }
            }
            return this;
        },
        transitionEnd: function(e1) {
            var t1 = this;
            return e1 && t1.on("transitionend", function a2(i2) {
                i2.target === this && (e1.call(this, i2), t1.off("transitionend", a2));
            }), this;
        },
        outerWidth: function(e1) {
            if (this.length > 0) {
                if (e1) {
                    var t1 = this.styles();
                    return this[0].offsetWidth + parseFloat(t1.getPropertyValue("margin-right")) + parseFloat(t1.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function(e1) {
            if (this.length > 0) {
                if (e1) {
                    var t2 = this.styles();
                    return this[0].offsetHeight + parseFloat(t2.getPropertyValue("margin-top")) + parseFloat(t2.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        styles: function() {
            var e1 = l();
            return this[0] ? e1.getComputedStyle(this[0], null) : {
            };
        },
        offset: function() {
            if (this.length > 0) {
                var e1 = l(), t3 = r(), a2 = this[0], i2 = a2.getBoundingClientRect(), s1 = t3.body, n2 = a2.clientTop || s1.clientTop || 0, o2 = a2.clientLeft || s1.clientLeft || 0, d2 = a2 === e1 ? e1.scrollY : a2.scrollTop, p3 = a2 === e1 ? e1.scrollX : a2.scrollLeft;
                return {
                    top: i2.top + d2 - n2,
                    left: i2.left + p3 - o2
                };
            }
            return null;
        },
        css: function(e2, t4) {
            var a4, i4 = l();
            if (1 === arguments.length) {
                if ("string" != typeof e2) {
                    for(a4 = 0; a4 < this.length; a4 += 1)for(var s2 in e2)this[a4].style[s2] = e2[s2];
                    return this;
                }
                if (this[0]) return i4.getComputedStyle(this[0], null).getPropertyValue(e2);
            }
            if (2 === arguments.length && "string" == typeof e2) {
                for(a4 = 0; a4 < this.length; a4 += 1)this[a4].style[e2] = t4;
                return this;
            }
            return this;
        },
        each: function(e2) {
            return e2 ? (this.forEach(function(t4, a4) {
                e2.apply(t4, [
                    t4,
                    a4
                ]);
            }), this) : this;
        },
        html: function(e2) {
            if ((void 0) === e2) return this[0] ? this[0].innerHTML : null;
            for(var t4 = 0; t4 < this.length; t4 += 1)this[t4].innerHTML = e2;
            return this;
        },
        text: function(e2) {
            if ((void 0) === e2) return this[0] ? this[0].textContent.trim() : null;
            for(var t4 = 0; t4 < this.length; t4 += 1)this[t4].textContent = e2;
            return this;
        },
        is: function(e2) {
            var t4, a4, i4 = l(), s3 = r(), n4 = this[0];
            if (!n4 || (void 0) === e2) return !1;
            if ("string" == typeof e2) {
                if (n4.matches) return n4.matches(e2);
                if (n4.webkitMatchesSelector) return n4.webkitMatchesSelector(e2);
                if (n4.msMatchesSelector) return n4.msMatchesSelector(e2);
                for(t4 = m(e2), a4 = 0; a4 < t4.length; a4 += 1)if (t4[a4] === n4) return !0;
                return !1;
            }
            if (e2 === s3) return n4 === s3;
            if (e2 === i4) return n4 === i4;
            if (e2.nodeType || e2 instanceof h) {
                for(t4 = e2.nodeType ? [
                    e2
                ] : e2, a4 = 0; a4 < t4.length; a4 += 1)if (t4[a4] === n4) return !0;
                return !1;
            }
            return !1;
        },
        index: function() {
            var e2, t4 = this[0];
            if (t4) {
                for(e2 = 0; null !== (t4 = t4.previousSibling);)1 === t4.nodeType && (e2 += 1);
                return e2;
            }
        },
        eq: function(e2) {
            if ((void 0) === e2) return this;
            var t4 = this.length;
            if (e2 > t4 - 1) return m([]);
            if (e2 < 0) {
                var a4 = t4 + e2;
                return m(a4 < 0 ? [] : [
                    this[a4]
                ]);
            }
            return m([
                this[e2]
            ]);
        },
        append: function() {
            for(var e2, t4 = r(), a5 = 0; a5 < arguments.length; a5 += 1){
                e2 = a5 < 0 || arguments.length <= a5 ? void 0 : arguments[a5];
                for(var i4 = 0; i4 < this.length; i4 += 1)if ("string" == typeof e2) {
                    var s3 = t4.createElement("div");
                    for(s3.innerHTML = e2; s3.firstChild;)this[i4].appendChild(s3.firstChild);
                } else if (e2 instanceof h) for(var n4 = 0; n4 < e2.length; n4 += 1)this[i4].appendChild(e2[n4]);
                else this[i4].appendChild(e2);
            }
            return this;
        },
        prepend: function(e2) {
            var t4, a5, i5 = r();
            for(t4 = 0; t4 < this.length; t4 += 1)if ("string" == typeof e2) {
                var s4 = i5.createElement("div");
                for(s4.innerHTML = e2, a5 = s4.childNodes.length - 1; a5 >= 0; a5 -= 1)this[t4].insertBefore(s4.childNodes[a5], this[t4].childNodes[0]);
            } else if (e2 instanceof h) for(a5 = 0; a5 < e2.length; a5 += 1)this[t4].insertBefore(e2[a5], this[t4].childNodes[0]);
            else this[t4].insertBefore(e2, this[t4].childNodes[0]);
            return this;
        },
        next: function(e2) {
            return this.length > 0 ? e2 ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e2) ? m([
                this[0].nextElementSibling
            ]) : m([]) : this[0].nextElementSibling ? m([
                this[0].nextElementSibling
            ]) : m([]) : m([]);
        },
        nextAll: function(e2) {
            var t4 = [], a5 = this[0];
            if (!a5) return m([]);
            for(; a5.nextElementSibling;){
                var i5 = a5.nextElementSibling;
                e2 ? m(i5).is(e2) && t4.push(i5) : t4.push(i5), a5 = i5;
            }
            return m(t4);
        },
        prev: function(e2) {
            if (this.length > 0) {
                var t4 = this[0];
                return e2 ? t4.previousElementSibling && m(t4.previousElementSibling).is(e2) ? m([
                    t4.previousElementSibling
                ]) : m([]) : t4.previousElementSibling ? m([
                    t4.previousElementSibling
                ]) : m([]);
            }
            return m([]);
        },
        prevAll: function(e2) {
            var t5 = [], a5 = this[0];
            if (!a5) return m([]);
            for(; a5.previousElementSibling;){
                var i6 = a5.previousElementSibling;
                e2 ? m(i6).is(e2) && t5.push(i6) : t5.push(i6), a5 = i6;
            }
            return m(t5);
        },
        parent: function(e2) {
            for(var t5 = [], a5 = 0; a5 < this.length; a5 += 1)null !== this[a5].parentNode && (e2 ? m(this[a5].parentNode).is(e2) && t5.push(this[a5].parentNode) : t5.push(this[a5].parentNode));
            return m(t5);
        },
        parents: function(e2) {
            for(var t5 = [], a5 = 0; a5 < this.length; a5 += 1)for(var i7 = this[a5].parentNode; i7;)e2 ? m(i7).is(e2) && t5.push(i7) : t5.push(i7), i7 = i7.parentNode;
            return m(t5);
        },
        closest: function(e2) {
            var t5 = this;
            return (void 0) === e2 ? m([]) : (t5.is(e2) || (t5 = t5.parents(e2).eq(0)), t5);
        },
        find: function(e2) {
            for(var t5 = [], a5 = 0; a5 < this.length; a5 += 1){
                try {
                    var i7 = this[a5].querySelectorAll(e2);
                } catch (t6) {
                    console.log(e2);
                }
                for(var s5 = 0; s5 < i7.length; s5 += 1)t5.push(i7[s5]);
            }
            return m(t5);
        },
        children: function(e2) {
            for(var t5 = [], a5 = 0; a5 < this.length; a5 += 1)for(var i8 = this[a5].children, s6 = 0; s6 < i8.length; s6 += 1)e2 && !m(i8[s6]).is(e2) || t5.push(i8[s6]);
            return m(t5);
        },
        filter: function(e2) {
            return m(f(this, e2));
        },
        remove: function() {
            for(var e2 = 0; e2 < this.length; e2 += 1)this[e2].parentNode && this[e2].parentNode.removeChild(this[e2]);
            return this;
        }
    };
    function E(e2, t5) {
        return (void 0) === t5 && (t5 = 0), setTimeout(e2, t5);
    }
    function x() {
        return Date.now();
    }
    function T(e2, t5) {
        (void 0) === t5 && (t5 = "x");
        var a5, i8, s6, r1 = l(), n5 = function(e3) {
            var t6, a6 = l();
            return a6.getComputedStyle && (t6 = a6.getComputedStyle(e3, null)), !t6 && e3.currentStyle && (t6 = e3.currentStyle), t6 || (t6 = e3.style), t6;
        }(e2);
        return r1.WebKitCSSMatrix ? ((i8 = n5.transform || n5.webkitTransform).split(",").length > 6 && (i8 = i8.split(", ").map(function(e3) {
            return e3.replace(",", ".");
        }).join(", ")), s6 = new r1.WebKitCSSMatrix("none" === i8 ? "" : i8)) : a5 = (s6 = n5.MozTransform || n5.OTransform || n5.MsTransform || n5.msTransform || n5.transform || n5.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t5 && (i8 = r1.WebKitCSSMatrix ? s6.m41 : 16 === a5.length ? parseFloat(a5[12]) : parseFloat(a5[4])), "y" === t5 && (i8 = r1.WebKitCSSMatrix ? s6.m42 : 16 === a5.length ? parseFloat(a5[13]) : parseFloat(a5[5])), i8 || 0;
    }
    function C(e2) {
        return "object" == typeof e2 && null !== e2 && e2.constructor && "Object" === Object.prototype.toString.call(e2).slice(8, -1);
    }
    function S(e2) {
        return "undefined" != typeof window ? e2 instanceof HTMLElement : e2 && (1 === e2.nodeType || 11 === e2.nodeType);
    }
    function M() {
        for(var e2 = Object(arguments.length <= 0 ? void 0 : arguments[0]), t5 = [
            "__proto__",
            "constructor",
            "prototype"
        ], a5 = 1; a5 < arguments.length; a5 += 1){
            var i8 = a5 < 0 || arguments.length <= a5 ? void 0 : arguments[a5];
            if (null != i8 && !S(i8)) for(var s6 = Object.keys(Object(i8)).filter(function(e3) {
                return t5.indexOf(e3) < 0;
            }), r1 = 0, n5 = s6.length; r1 < n5; r1 += 1){
                var l1 = s6[r1], o3 = Object.getOwnPropertyDescriptor(i8, l1);
                (void 0) !== o3 && o3.enumerable && (C(e2[l1]) && C(i8[l1]) ? i8[l1].__swiper__ ? e2[l1] = i8[l1] : M(e2[l1], i8[l1]) : !C(e2[l1]) && C(i8[l1]) ? (e2[l1] = {
                }, i8[l1].__swiper__ ? e2[l1] = i8[l1] : M(e2[l1], i8[l1])) : e2[l1] = i8[l1]);
            }
        }
        return e2;
    }
    function z(e2, t5) {
        Object.keys(t5).forEach(function(a5) {
            C(t5[a5]) && Object.keys(t5[a5]).forEach(function(i9) {
                "function" == typeof t5[a5][i9] && (t5[a5][i9] = t5[a5][i9].bind(e2));
            }), e2[a5] = t5[a5];
        });
    }
    function P(e2) {
        return (void 0) === e2 && (e2 = ""), "." + e2.trim().replace(/([\.:\/])/g, "\\$1").replace(/ /g, ".");
    }
    function k(e2, t5, a5, i9) {
        var s7 = r();
        return a5 && Object.keys(i9).forEach(function(a6) {
            if (!t5[a6] && !0 === t5.auto) {
                var r2 = s7.createElement("div");
                r2.className = i9[a6], e2.append(r2), t5[a6] = r2;
            }
        }), t5;
    }
    function $() {
        return g || (g = (function() {
            var e2 = l(), t5 = r();
            return {
                touch: !!("ontouchstart" in e2 || e2.DocumentTouch && t5 instanceof e2.DocumentTouch),
                pointerEvents: !!e2.PointerEvent && "maxTouchPoints" in e2.navigator && e2.navigator.maxTouchPoints >= 0,
                observer: "MutationObserver" in e2 || "WebkitMutationObserver" in e2,
                passiveListener: (function() {
                    var t6 = !1;
                    try {
                        var a5 = Object.defineProperty({
                        }, "passive", {
                            get: function() {
                                t6 = !0;
                            }
                        });
                        e2.addEventListener("testPassiveListener", null, a5);
                    } catch (e3) {
                    }
                    return t6;
                })(),
                gestures: "ongesturestart" in e2
            };
        })()), g;
    }
    function L(e2) {
        return (void 0) === e2 && (e2 = {
        }), b || (b = (function(e3) {
            var t5 = ((void 0) === e3 ? {
            } : e3).userAgent, a5 = $(), i9 = l(), s7 = i9.navigator.platform, r3 = t5 || i9.navigator.userAgent, n6 = {
                ios: !1,
                android: !1
            }, o4 = i9.screen.width, d3 = i9.screen.height, p4 = r3.match(/(Android);?[\s\/]+([\d.]+)?/), u3 = r3.match(/(iPad).*OS\s([\d_]+)/), c3 = r3.match(/(iPod)(.*OS\s([\d_]+))?/), h3 = !u3 && r3.match(/(iPhone\sOS|iOS)\s([\d_]+)/), v3 = "Win32" === s7, f1 = "MacIntel" === s7;
            return !u3 && f1 && a5.touch && [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810"
            ].indexOf(o4 + "x" + d3) >= 0 && ((u3 = r3.match(/(Version)\/([\d.]+)/)) || (u3 = [
                0,
                1,
                "13_0_0"
            ]), f1 = !1), p4 && !v3 && (n6.os = "android", n6.android = !0), (u3 || h3 || c3) && (n6.os = "ios", n6.ios = !0), n6;
        })(e2)), b;
    }
    function I() {
        return y || (y = (function() {
            var e2, t5 = l();
            return {
                isEdge: !!t5.navigator.userAgent.match(/Edge/g),
                isSafari: (e2 = t5.navigator.userAgent.toLowerCase(), e2.indexOf("safari") >= 0 && e2.indexOf("chrome") < 0 && e2.indexOf("android") < 0),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t5.navigator.userAgent)
            };
        })()), y;
    }
    Object.keys(w).forEach(function(e2) {
        Object.defineProperty(m.fn, e2, {
            value: w[e2],
            writable: !0
        });
    });
    var O = {
        name: "resize",
        create: function() {
            var e2 = this;
            M(e2, {
                resize: {
                    observer: null,
                    createObserver: function() {
                        e2 && !e2.destroyed && e2.initialized && (e2.resize.observer = new ResizeObserver(function(t5) {
                            var a5 = e2.width, i9 = e2.height, s7 = a5, r3 = i9;
                            t5.forEach(function(t6) {
                                var a6 = t6.contentBoxSize, i10 = t6.contentRect, n6 = t6.target;
                                n6 && n6 !== e2.el || (s7 = i10 ? i10.width : (a6[0] || a6).inlineSize, r3 = i10 ? i10.height : (a6[0] || a6).blockSize);
                            }), s7 === a5 && r3 === i9 || e2.resize.resizeHandler();
                        }), e2.resize.observer.observe(e2.el));
                    },
                    removeObserver: function() {
                        e2.resize.observer && e2.resize.observer.unobserve && e2.el && (e2.resize.observer.unobserve(e2.el), e2.resize.observer = null);
                    },
                    resizeHandler: function() {
                        e2 && !e2.destroyed && e2.initialized && (e2.emit("beforeResize"), e2.emit("resize"));
                    },
                    orientationChangeHandler: function() {
                        e2 && !e2.destroyed && e2.initialized && e2.emit("orientationchange");
                    }
                }
            });
        },
        on: {
            init: function(e2) {
                var t5 = l();
                e2.params.resizeObserver && (void 0) !== l().ResizeObserver ? e2.resize.createObserver() : (t5.addEventListener("resize", e2.resize.resizeHandler), t5.addEventListener("orientationchange", e2.resize.orientationChangeHandler));
            },
            destroy: function(e2) {
                var t5 = l();
                e2.resize.removeObserver(), t5.removeEventListener("resize", e2.resize.resizeHandler), t5.removeEventListener("orientationchange", e2.resize.orientationChangeHandler);
            }
        }
    }, A = {
        attach: function(e2, t5) {
            (void 0) === t5 && (t5 = {
            });
            var a5 = l(), i9 = this, s7 = new (a5.MutationObserver || a5.WebkitMutationObserver)(function(e3) {
                if (1 !== e3.length) {
                    var t6 = function() {
                        i9.emit("observerUpdate", e3[0]);
                    };
                    a5.requestAnimationFrame ? a5.requestAnimationFrame(t6) : a5.setTimeout(t6, 0);
                } else i9.emit("observerUpdate", e3[0]);
            });
            s7.observe(e2, {
                attributes: (void 0) === t5.attributes || t5.attributes,
                childList: (void 0) === t5.childList || t5.childList,
                characterData: (void 0) === t5.characterData || t5.characterData
            }), i9.observer.observers.push(s7);
        },
        init: function() {
            var e2 = this;
            if (e2.support.observer && e2.params.observer) {
                if (e2.params.observeParents) for(var t5 = e2.$el.parents(), a5 = 0; a5 < t5.length; a5 += 1)e2.observer.attach(t5[a5]);
                e2.observer.attach(e2.$el[0], {
                    childList: e2.params.observeSlideChildren
                }), e2.observer.attach(e2.$wrapperEl[0], {
                    attributes: !1
                });
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e2) {
                e2.disconnect();
            }), this.observer.observers = [];
        }
    }, D = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            z(this, {
                observer: t({
                }, A, {
                    observers: []
                })
            });
        },
        on: {
            init: function(e2) {
                e2.observer.init();
            },
            destroy: function(e2) {
                e2.observer.destroy();
            }
        }
    };
    function N(e2) {
        var t7 = this, a6 = r(), i9 = l(), s7 = t7.touchEventsData, n6 = t7.params, o4 = t7.touches;
        if (t7.enabled && (!t7.animating || !n6.preventInteractionOnTransition)) {
            var d3 = e2;
            d3.originalEvent && (d3 = d3.originalEvent);
            var p4 = m(d3.target);
            if ("wrapper" !== n6.touchEventsTarget || p4.closest(t7.wrapperEl).length) {
                if (s7.isTouchEvent = "touchstart" === d3.type, s7.isTouchEvent || !("which" in d3) || 3 !== d3.which) {
                    if (!(!s7.isTouchEvent && "button" in d3 && d3.button > 0)) {
                        if (!s7.isTouched || !s7.isMoved) {
                            if (!!n6.noSwipingClass && "" !== n6.noSwipingClass && d3.target && d3.target.shadowRoot && e2.path && e2.path[0] && (p4 = m(e2.path[0])), n6.noSwiping && p4.closest(n6.noSwipingSelector ? n6.noSwipingSelector : "." + n6.noSwipingClass)[0]) t7.allowClick = !0;
                            else if (!n6.swipeHandler || p4.closest(n6.swipeHandler)[0]) {
                                o4.currentX = "touchstart" === d3.type ? d3.targetTouches[0].pageX : d3.pageX, o4.currentY = "touchstart" === d3.type ? d3.targetTouches[0].pageY : d3.pageY;
                                var u3 = o4.currentX, c3 = o4.currentY, h3 = n6.edgeSwipeDetection || n6.iOSEdgeSwipeDetection, v3 = n6.edgeSwipeThreshold || n6.iOSEdgeSwipeThreshold;
                                if (h3 && (u3 <= v3 || u3 >= i9.innerWidth - v3)) {
                                    if ("prevent" !== h3) return;
                                    e2.preventDefault();
                                }
                                if (M(s7, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), o4.startX = u3, o4.startY = c3, s7.touchStartTime = x(), t7.allowClick = !0, t7.updateSize(), t7.swipeDirection = void 0, n6.threshold > 0 && (s7.allowThresholdMove = !1), "touchstart" !== d3.type) {
                                    var f1 = !0;
                                    p4.is(s7.focusableElements) && (f1 = !1), a6.activeElement && m(a6.activeElement).is(s7.focusableElements) && a6.activeElement !== p4[0] && a6.activeElement.blur();
                                    var g1 = f1 && t7.allowTouchMove && n6.touchStartPreventDefault;
                                    !n6.touchStartForcePreventDefault && !g1 || p4[0].isContentEditable || d3.preventDefault();
                                }
                                t7.emit("touchStart", d3);
                            }
                        }
                    }
                }
            }
        }
    }
    function G(e2) {
        var t7 = r(), a6 = this, i9 = a6.touchEventsData, s7 = a6.params, n6 = a6.touches, l2 = a6.rtlTranslate;
        if (a6.enabled) {
            var o4 = e2;
            if (o4.originalEvent && (o4 = o4.originalEvent), i9.isTouched) {
                if (!i9.isTouchEvent || "touchmove" === o4.type) {
                    var d4 = "touchmove" === o4.type && o4.targetTouches && (o4.targetTouches[0] || o4.changedTouches[0]), p5 = "touchmove" === o4.type ? d4.pageX : o4.pageX, u4 = "touchmove" === o4.type ? d4.pageY : o4.pageY;
                    if (o4.preventedByNestedSwiper) return n6.startX = p5, void (n6.startY = u4);
                    if (!a6.allowTouchMove) return a6.allowClick = !1, void (i9.isTouched && (M(n6, {
                        startX: p5,
                        startY: u4,
                        currentX: p5,
                        currentY: u4
                    }), i9.touchStartTime = x()));
                    if (i9.isTouchEvent && s7.touchReleaseOnEdges && !s7.loop) {
                        if (a6.isVertical()) {
                            if (u4 < n6.startY && a6.translate <= a6.maxTranslate() || u4 > n6.startY && a6.translate >= a6.minTranslate()) return i9.isTouched = !1, void (i9.isMoved = !1);
                        } else if (p5 < n6.startX && a6.translate <= a6.maxTranslate() || p5 > n6.startX && a6.translate >= a6.minTranslate()) return;
                    }
                    if (i9.isTouchEvent && t7.activeElement && o4.target === t7.activeElement && m(o4.target).is(i9.focusableElements)) return i9.isMoved = !0, void (a6.allowClick = !1);
                    if (i9.allowTouchCallbacks && a6.emit("touchMove", o4), !(o4.targetTouches && o4.targetTouches.length > 1)) {
                        n6.currentX = p5, n6.currentY = u4;
                        var c4 = n6.currentX - n6.startX, h4 = n6.currentY - n6.startY;
                        if (!(a6.params.threshold && Math.sqrt(Math.pow(c4, 2) + Math.pow(h4, 2)) < a6.params.threshold)) {
                            var v4;
                            if ((void 0) === i9.isScrolling) a6.isHorizontal() && n6.currentY === n6.startY || a6.isVertical() && n6.currentX === n6.startX ? i9.isScrolling = !1 : c4 * c4 + h4 * h4 >= 25 && (v4 = 180 * Math.atan2(Math.abs(h4), Math.abs(c4)) / Math.PI, i9.isScrolling = a6.isHorizontal() ? v4 > s7.touchAngle : 90 - v4 > s7.touchAngle);
                            if (i9.isScrolling && a6.emit("touchMoveOpposite", o4), (void 0) === i9.startMoving && (n6.currentX === n6.startX && n6.currentY === n6.startY || (i9.startMoving = !0)), i9.isScrolling) i9.isTouched = !1;
                            else if (i9.startMoving) {
                                a6.allowClick = !1, !s7.cssMode && o4.cancelable && o4.preventDefault(), s7.touchMoveStopPropagation && !s7.nested && o4.stopPropagation(), i9.isMoved || (s7.loop && a6.loopFix(), i9.startTranslate = a6.getTranslate(), a6.setTransition(0), a6.animating && a6.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i9.allowMomentumBounce = !1, !s7.grabCursor || !0 !== a6.allowSlideNext && !0 !== a6.allowSlidePrev || a6.setGrabCursor(!0), a6.emit("sliderFirstMove", o4)), a6.emit("sliderMove", o4), i9.isMoved = !0;
                                var f2 = a6.isHorizontal() ? c4 : h4;
                                n6.diff = f2, f2 *= s7.touchRatio, l2 && (f2 = -f2), a6.swipeDirection = f2 > 0 ? "prev" : "next", i9.currentTranslate = f2 + i9.startTranslate;
                                var g2 = !0, b1 = s7.resistanceRatio;
                                if (s7.touchReleaseOnEdges && (b1 = 0), f2 > 0 && i9.currentTranslate > a6.minTranslate() ? (g2 = !1, s7.resistance && (i9.currentTranslate = a6.minTranslate() - 1 + Math.pow(-a6.minTranslate() + i9.startTranslate + f2, b1))) : f2 < 0 && i9.currentTranslate < a6.maxTranslate() && (g2 = !1, s7.resistance && (i9.currentTranslate = a6.maxTranslate() + 1 - Math.pow(a6.maxTranslate() - i9.startTranslate - f2, b1))), g2 && (o4.preventedByNestedSwiper = !0), !a6.allowSlideNext && "next" === a6.swipeDirection && i9.currentTranslate < i9.startTranslate && (i9.currentTranslate = i9.startTranslate), !a6.allowSlidePrev && "prev" === a6.swipeDirection && i9.currentTranslate > i9.startTranslate && (i9.currentTranslate = i9.startTranslate), a6.allowSlidePrev || a6.allowSlideNext || (i9.currentTranslate = i9.startTranslate), s7.threshold > 0) {
                                    if (!(Math.abs(f2) > s7.threshold || i9.allowThresholdMove)) return void (i9.currentTranslate = i9.startTranslate);
                                    if (!i9.allowThresholdMove) return i9.allowThresholdMove = !0, n6.startX = n6.currentX, n6.startY = n6.currentY, i9.currentTranslate = i9.startTranslate, void (n6.diff = a6.isHorizontal() ? n6.currentX - n6.startX : n6.currentY - n6.startY);
                                }
                                s7.followFinger && !s7.cssMode && ((s7.freeMode || s7.watchSlidesProgress || s7.watchSlidesVisibility) && (a6.updateActiveIndex(), a6.updateSlidesClasses()), s7.freeMode && (0 === i9.velocities.length && i9.velocities.push({
                                    position: n6[a6.isHorizontal() ? "startX" : "startY"],
                                    time: i9.touchStartTime
                                }), i9.velocities.push({
                                    position: n6[a6.isHorizontal() ? "currentX" : "currentY"],
                                    time: x()
                                })), a6.updateProgress(i9.currentTranslate), a6.setTranslate(i9.currentTranslate));
                            }
                        }
                    }
                }
            } else i9.startMoving && i9.isScrolling && a6.emit("touchMoveOpposite", o4);
        }
    }
    function B(e2) {
        var t7 = this, a6 = t7.touchEventsData, i9 = t7.params, s7 = t7.touches, r3 = t7.rtlTranslate, n6 = t7.$wrapperEl, l2 = t7.slidesGrid, o5 = t7.snapGrid;
        if (t7.enabled) {
            var d5 = e2;
            if (d5.originalEvent && (d5 = d5.originalEvent), a6.allowTouchCallbacks && t7.emit("touchEnd", d5), a6.allowTouchCallbacks = !1, !a6.isTouched) return a6.isMoved && i9.grabCursor && t7.setGrabCursor(!1), a6.isMoved = !1, void (a6.startMoving = !1);
            i9.grabCursor && a6.isMoved && a6.isTouched && (!0 === t7.allowSlideNext || !0 === t7.allowSlidePrev) && t7.setGrabCursor(!1);
            var p6, u5 = x(), c5 = u5 - a6.touchStartTime;
            if (t7.allowClick && (t7.updateClickedSlide(d5), t7.emit("tap click", d5), c5 < 300 && u5 - a6.lastClickTime < 300 && t7.emit("doubleTap doubleClick", d5)), a6.lastClickTime = x(), E(function() {
                t7.destroyed || (t7.allowClick = !0);
            }), !a6.isTouched || !a6.isMoved || !t7.swipeDirection || 0 === s7.diff || a6.currentTranslate === a6.startTranslate) return a6.isTouched = !1, a6.isMoved = !1, void (a6.startMoving = !1);
            if (a6.isTouched = !1, a6.isMoved = !1, a6.startMoving = !1, p6 = i9.followFinger ? r3 ? t7.translate : -t7.translate : -a6.currentTranslate, !i9.cssMode) {
                if (i9.freeMode) {
                    if (p6 < -t7.minTranslate()) return void t7.slideTo(t7.activeIndex);
                    if (p6 > -t7.maxTranslate()) return void (t7.slides.length < o5.length ? t7.slideTo(o5.length - 1) : t7.slideTo(t7.slides.length - 1));
                    if (i9.freeModeMomentum) {
                        if (a6.velocities.length > 1) {
                            var h5 = a6.velocities.pop(), v5 = a6.velocities.pop(), f3 = h5.position - v5.position, m1 = h5.time - v5.time;
                            t7.velocity = f3 / m1, t7.velocity /= 2, Math.abs(t7.velocity) < i9.freeModeMinimumVelocity && (t7.velocity = 0), (m1 > 150 || x() - h5.time > 300) && (t7.velocity = 0);
                        } else t7.velocity = 0;
                        t7.velocity *= i9.freeModeMomentumVelocityRatio, a6.velocities.length = 0;
                        var g3 = 1000 * i9.freeModeMomentumRatio, b2 = t7.velocity * g3, y1 = t7.translate + b2;
                        r3 && (y1 = -y1);
                        var w1, T1, C1 = !1, S1 = 20 * Math.abs(t7.velocity) * i9.freeModeMomentumBounceRatio;
                        if (y1 < t7.maxTranslate()) i9.freeModeMomentumBounce ? (y1 + t7.maxTranslate() < -S1 && (y1 = t7.maxTranslate() - S1), w1 = t7.maxTranslate(), C1 = !0, a6.allowMomentumBounce = !0) : y1 = t7.maxTranslate(), i9.loop && i9.centeredSlides && (T1 = !0);
                        else if (y1 > t7.minTranslate()) i9.freeModeMomentumBounce ? (y1 - t7.minTranslate() > S1 && (y1 = t7.minTranslate() + S1), w1 = t7.minTranslate(), C1 = !0, a6.allowMomentumBounce = !0) : y1 = t7.minTranslate(), i9.loop && i9.centeredSlides && (T1 = !0);
                        else if (i9.freeModeSticky) {
                            for(var M1, z1 = 0; z1 < o5.length; z1 += 1)if (o5[z1] > -y1) {
                                M1 = z1;
                                break;
                            }
                            y1 = -(y1 = Math.abs(o5[M1] - y1) < Math.abs(o5[M1 - 1] - y1) || "next" === t7.swipeDirection ? o5[M1] : o5[M1 - 1]);
                        }
                        if (T1 && t7.once("transitionEnd", function() {
                            t7.loopFix();
                        }), 0 !== t7.velocity) {
                            if (g3 = r3 ? Math.abs((-y1 - t7.translate) / t7.velocity) : Math.abs((y1 - t7.translate) / t7.velocity), i9.freeModeSticky) {
                                var P1 = Math.abs((r3 ? -y1 : y1) - t7.translate), k1 = t7.slidesSizesGrid[t7.activeIndex];
                                g3 = P1 < k1 ? i9.speed : P1 < 2 * k1 ? 1.5 * i9.speed : 2.5 * i9.speed;
                            }
                        } else if (i9.freeModeSticky) return void t7.slideToClosest();
                        i9.freeModeMomentumBounce && C1 ? (t7.updateProgress(w1), t7.setTransition(g3), t7.setTranslate(y1), t7.transitionStart(!0, t7.swipeDirection), t7.animating = !0, n6.transitionEnd(function() {
                            t7 && !t7.destroyed && a6.allowMomentumBounce && (t7.emit("momentumBounce"), t7.setTransition(i9.speed), setTimeout(function() {
                                t7.setTranslate(w1), n6.transitionEnd(function() {
                                    t7 && !t7.destroyed && t7.transitionEnd();
                                });
                            }, 0));
                        })) : t7.velocity ? (t7.updateProgress(y1), t7.setTransition(g3), t7.setTranslate(y1), t7.transitionStart(!0, t7.swipeDirection), t7.animating || (t7.animating = !0, n6.transitionEnd(function() {
                            t7 && !t7.destroyed && t7.transitionEnd();
                        }))) : (t7.emit("_freeModeNoMomentumRelease"), t7.updateProgress(y1)), t7.updateActiveIndex(), t7.updateSlidesClasses();
                    } else {
                        if (i9.freeModeSticky) return void t7.slideToClosest();
                        i9.freeMode && t7.emit("_freeModeNoMomentumRelease");
                    }
                    (!i9.freeModeMomentum || c5 >= i9.longSwipesMs) && (t7.updateProgress(), t7.updateActiveIndex(), t7.updateSlidesClasses());
                } else {
                    for(var $1 = 0, L1 = t7.slidesSizesGrid[0], I1 = 0; I1 < l2.length; I1 += I1 < i9.slidesPerGroupSkip ? 1 : i9.slidesPerGroup){
                        var O1 = I1 < i9.slidesPerGroupSkip - 1 ? 1 : i9.slidesPerGroup;
                        (void 0) !== l2[I1 + O1] ? p6 >= l2[I1] && p6 < l2[I1 + O1] && ($1 = I1, L1 = l2[I1 + O1] - l2[I1]) : p6 >= l2[I1] && ($1 = I1, L1 = l2[l2.length - 1] - l2[l2.length - 2]);
                    }
                    var A1 = (p6 - l2[$1]) / L1, D1 = $1 < i9.slidesPerGroupSkip - 1 ? 1 : i9.slidesPerGroup;
                    if (c5 > i9.longSwipesMs) {
                        if (!i9.longSwipes) return void t7.slideTo(t7.activeIndex);
                        "next" === t7.swipeDirection && (A1 >= i9.longSwipesRatio ? t7.slideTo($1 + D1) : t7.slideTo($1)), "prev" === t7.swipeDirection && (A1 > 1 - i9.longSwipesRatio ? t7.slideTo($1 + D1) : t7.slideTo($1));
                    } else {
                        if (!i9.shortSwipes) return void t7.slideTo(t7.activeIndex);
                        t7.navigation && (d5.target === t7.navigation.nextEl || d5.target === t7.navigation.prevEl) ? d5.target === t7.navigation.nextEl ? t7.slideTo($1 + D1) : t7.slideTo($1) : ("next" === t7.swipeDirection && t7.slideTo($1 + D1), "prev" === t7.swipeDirection && t7.slideTo($1));
                    }
                }
            }
        }
    }
    function H() {
        var e2 = this, t7 = e2.params, a6 = e2.el;
        if (!a6 || 0 !== a6.offsetWidth) {
            t7.breakpoints && e2.setBreakpoint();
            var i9 = e2.allowSlideNext, s7 = e2.allowSlidePrev, r3 = e2.snapGrid;
            e2.allowSlideNext = !0, e2.allowSlidePrev = !0, e2.updateSize(), e2.updateSlides(), e2.updateSlidesClasses(), ("auto" === t7.slidesPerView || t7.slidesPerView > 1) && e2.isEnd && !e2.isBeginning && !e2.params.centeredSlides ? e2.slideTo(e2.slides.length - 1, 0, !1, !0) : e2.slideTo(e2.activeIndex, 0, !1, !0), e2.autoplay && e2.autoplay.running && e2.autoplay.paused && e2.autoplay.run(), e2.allowSlidePrev = s7, e2.allowSlideNext = i9, e2.params.watchOverflow && r3 !== e2.snapGrid && e2.checkOverflow();
        }
    }
    function R(e2) {
        var t7 = this;
        t7.enabled && (t7.allowClick || (t7.params.preventClicks && e2.preventDefault(), t7.params.preventClicksPropagation && t7.animating && (e2.stopPropagation(), e2.stopImmediatePropagation())));
    }
    function X() {
        var e2 = this, t7 = e2.wrapperEl, a6 = e2.rtlTranslate;
        if (e2.enabled) {
            e2.previousTranslate = e2.translate, e2.isHorizontal() ? e2.translate = a6 ? t7.scrollWidth - t7.offsetWidth - t7.scrollLeft : -t7.scrollLeft : e2.translate = -t7.scrollTop, -0 === e2.translate && (e2.translate = 0), e2.updateActiveIndex(), e2.updateSlidesClasses();
            var i10 = e2.maxTranslate() - e2.minTranslate();
            (0 === i10 ? 0 : (e2.translate - e2.minTranslate()) / i10) !== e2.progress && e2.updateProgress(a6 ? -e2.translate : e2.translate), e2.emit("setTranslate", e2.translate, !1);
        }
    }
    var Y = !1;
    function V() {
    }
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !1,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    }, F = {
        modular: {
            useParams: function(e2) {
                var t7 = this;
                t7.modules && Object.keys(t7.modules).forEach(function(a6) {
                    var i11 = t7.modules[a6];
                    i11.params && M(e2, i11.params);
                });
            },
            useModules: function(e2) {
                (void 0) === e2 && (e2 = {
                });
                var t7 = this;
                t7.modules && Object.keys(t7.modules).forEach(function(a6) {
                    var i11 = t7.modules[a6], s8 = e2[a6] || {
                    };
                    i11.on && t7.on && Object.keys(i11.on).forEach(function(e3) {
                        t7.on(e3, i11.on[e3]);
                    }), i11.create && i11.create.bind(t7)(s8);
                });
            }
        },
        eventsEmitter: {
            on: function(e2, t7, a6) {
                var i11 = this;
                if ("function" != typeof t7) return i11;
                var s8 = a6 ? "unshift" : "push";
                return e2.split(" ").forEach(function(e3) {
                    i11.eventsListeners[e3] || (i11.eventsListeners[e3] = []), i11.eventsListeners[e3][s8](t7);
                }), i11;
            },
            once: function(e2, t7, a6) {
                var i11 = this;
                if ("function" != typeof t7) return i11;
                function s8() {
                    i11.off(e2, s8), s8.__emitterProxy && delete s8.__emitterProxy;
                    for(var a7 = arguments.length, r4 = new Array(a7), n6 = 0; n6 < a7; n6++)r4[n6] = arguments[n6];
                    t7.apply(i11, r4);
                }
                return s8.__emitterProxy = t7, i11.on(e2, s8, a6);
            },
            onAny: function(e2, t7) {
                var a6 = this;
                if ("function" != typeof e2) return a6;
                var i11 = t7 ? "unshift" : "push";
                return a6.eventsAnyListeners.indexOf(e2) < 0 && a6.eventsAnyListeners[i11](e2), a6;
            },
            offAny: function(e2) {
                var t7 = this;
                if (!t7.eventsAnyListeners) return t7;
                var a6 = t7.eventsAnyListeners.indexOf(e2);
                return a6 >= 0 && t7.eventsAnyListeners.splice(a6, 1), t7;
            },
            off: function(e2, t7) {
                var a6 = this;
                return a6.eventsListeners ? (e2.split(" ").forEach(function(e3) {
                    (void 0) === t7 ? a6.eventsListeners[e3] = [] : a6.eventsListeners[e3] && a6.eventsListeners[e3].forEach(function(i11, s8) {
                        (i11 === t7 || i11.__emitterProxy && i11.__emitterProxy === t7) && a6.eventsListeners[e3].splice(s8, 1);
                    });
                }), a6) : a6;
            },
            emit: function() {
                var e2, t7, a6, i11 = this;
                if (!i11.eventsListeners) return i11;
                for(var s8 = arguments.length, r4 = new Array(s8), n6 = 0; n6 < s8; n6++)r4[n6] = arguments[n6];
                "string" == typeof r4[0] || Array.isArray(r4[0]) ? (e2 = r4[0], t7 = r4.slice(1, r4.length), a6 = i11) : (e2 = r4[0].events, t7 = r4[0].data, a6 = r4[0].context || i11), t7.unshift(a6);
                var l2 = Array.isArray(e2) ? e2 : e2.split(" ");
                return l2.forEach(function(e3) {
                    i11.eventsAnyListeners && i11.eventsAnyListeners.length && i11.eventsAnyListeners.forEach(function(i12) {
                        i12.apply(a6, [
                            e3
                        ].concat(t7));
                    }), i11.eventsListeners && i11.eventsListeners[e3] && i11.eventsListeners[e3].forEach(function(e4) {
                        e4.apply(a6, t7);
                    });
                }), i11;
            }
        },
        update: {
            updateSize: function() {
                var e2, t7, a6 = this, i11 = a6.$el;
                e2 = (void 0) !== a6.params.width && null !== a6.params.width ? a6.params.width : i11[0].clientWidth, t7 = (void 0) !== a6.params.height && null !== a6.params.height ? a6.params.height : i11[0].clientHeight, 0 === e2 && a6.isHorizontal() || 0 === t7 && a6.isVertical() || (e2 = e2 - parseInt(i11.css("padding-left") || 0, 10) - parseInt(i11.css("padding-right") || 0, 10), t7 = t7 - parseInt(i11.css("padding-top") || 0, 10) - parseInt(i11.css("padding-bottom") || 0, 10), Number.isNaN(e2) && (e2 = 0), Number.isNaN(t7) && (t7 = 0), M(a6, {
                    width: e2,
                    height: t7,
                    size: a6.isHorizontal() ? e2 : t7
                }));
            },
            updateSlides: function() {
                var e2 = this;
                function t7(t8) {
                    return e2.isHorizontal() ? t8 : ({
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    })[t8];
                }
                function a6(e3, a7) {
                    return parseFloat(e3.getPropertyValue(t7(a7)) || 0);
                }
                var i11 = e2.params, s8 = e2.$wrapperEl, r4 = e2.size, n6 = e2.rtlTranslate, l2 = e2.wrongRTL, o5 = e2.virtual && i11.virtual.enabled, d6 = o5 ? e2.virtual.slides.length : e2.slides.length, p7 = s8.children("." + e2.params.slideClass), u6 = o5 ? e2.virtual.slides.length : p7.length, c6 = [], h6 = [], v6 = [], f4 = i11.slidesOffsetBefore;
                "function" == typeof f4 && (f4 = i11.slidesOffsetBefore.call(e2));
                var m2 = i11.slidesOffsetAfter;
                "function" == typeof m2 && (m2 = i11.slidesOffsetAfter.call(e2));
                var g4 = e2.snapGrid.length, b3 = e2.slidesGrid.length, y2 = i11.spaceBetween, w2 = -f4, E1 = 0, x1 = 0;
                if ((void 0) !== r4) {
                    var T2, C2;
                    "string" == typeof y2 && y2.indexOf("%") >= 0 && (y2 = parseFloat(y2.replace("%", "")) / 100 * r4), e2.virtualSize = -y2, n6 ? p7.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : p7.css({
                        marginRight: "",
                        marginBottom: ""
                    }), i11.slidesPerColumn > 1 && (T2 = Math.floor(u6 / i11.slidesPerColumn) === u6 / e2.params.slidesPerColumn ? u6 : Math.ceil(u6 / i11.slidesPerColumn) * i11.slidesPerColumn, "auto" !== i11.slidesPerView && "row" === i11.slidesPerColumnFill && (T2 = Math.max(T2, i11.slidesPerView * i11.slidesPerColumn)));
                    for(var S2, z2, P2, k2 = i11.slidesPerColumn, $2 = T2 / k2, L2 = Math.floor(u6 / i11.slidesPerColumn), I2 = 0; I2 < u6; I2 += 1){
                        C2 = 0;
                        var O2 = p7.eq(I2);
                        if (i11.slidesPerColumn > 1) {
                            var A2 = void 0, D2 = void 0, N1 = void 0;
                            if ("row" === i11.slidesPerColumnFill && i11.slidesPerGroup > 1) {
                                var G1 = Math.floor(I2 / (i11.slidesPerGroup * i11.slidesPerColumn)), B1 = I2 - i11.slidesPerColumn * i11.slidesPerGroup * G1, H1 = 0 === G1 ? i11.slidesPerGroup : Math.min(Math.ceil((u6 - G1 * k2 * i11.slidesPerGroup) / k2), i11.slidesPerGroup);
                                A2 = (D2 = B1 - (N1 = Math.floor(B1 / H1)) * H1 + G1 * i11.slidesPerGroup) + N1 * T2 / k2, O2.css({
                                    "-webkit-box-ordinal-group": A2,
                                    "-moz-box-ordinal-group": A2,
                                    "-ms-flex-order": A2,
                                    "-webkit-order": A2,
                                    order: A2
                                });
                            } else "column" === i11.slidesPerColumnFill ? (N1 = I2 - (D2 = Math.floor(I2 / k2)) * k2, (D2 > L2 || D2 === L2 && N1 === k2 - 1) && (N1 += 1) >= k2 && (N1 = 0, D2 += 1)) : D2 = I2 - (N1 = Math.floor(I2 / $2)) * $2;
                            O2.css(t7("margin-top"), 0 !== N1 ? i11.spaceBetween && i11.spaceBetween + "px" : "");
                        }
                        if ("none" !== O2.css("display")) {
                            if ("auto" === i11.slidesPerView) {
                                var R1 = getComputedStyle(O2[0]), X1 = O2[0].style.transform, Y1 = O2[0].style.webkitTransform;
                                if (X1 && (O2[0].style.transform = "none"), Y1 && (O2[0].style.webkitTransform = "none"), i11.roundLengths) C2 = e2.isHorizontal() ? O2.outerWidth(!0) : O2.outerHeight(!0);
                                else {
                                    var V1 = a6(R1, "width"), W1 = a6(R1, "padding-left"), F1 = a6(R1, "padding-right"), _ = a6(R1, "margin-left"), q = a6(R1, "margin-right"), j = R1.getPropertyValue("box-sizing");
                                    if (j && "border-box" === j) C2 = V1 + _ + q;
                                    else {
                                        var U = O2[0], K = U.clientWidth;
                                        C2 = V1 + W1 + F1 + _ + q + (U.offsetWidth - K);
                                    }
                                }
                                X1 && (O2[0].style.transform = X1), Y1 && (O2[0].style.webkitTransform = Y1), i11.roundLengths && (C2 = Math.floor(C2));
                            } else C2 = (r4 - (i11.slidesPerView - 1) * y2) / i11.slidesPerView, i11.roundLengths && (C2 = Math.floor(C2)), p7[I2] && (p7[I2].style[t7("width")] = C2 + "px");
                            p7[I2] && (p7[I2].swiperSlideSize = C2), v6.push(C2), i11.centeredSlides ? (w2 = w2 + C2 / 2 + E1 / 2 + y2, 0 === E1 && 0 !== I2 && (w2 = w2 - r4 / 2 - y2), 0 === I2 && (w2 = w2 - r4 / 2 - y2), Math.abs(w2) < 0.001 && (w2 = 0), i11.roundLengths && (w2 = Math.floor(w2)), x1 % i11.slidesPerGroup == 0 && c6.push(w2), h6.push(w2)) : (i11.roundLengths && (w2 = Math.floor(w2)), (x1 - Math.min(e2.params.slidesPerGroupSkip, x1)) % e2.params.slidesPerGroup == 0 && c6.push(w2), h6.push(w2), w2 = w2 + C2 + y2), e2.virtualSize += C2 + y2, E1 = C2, x1 += 1;
                        }
                    }
                    if (e2.virtualSize = Math.max(e2.virtualSize, r4) + m2, n6 && l2 && ("slide" === i11.effect || "coverflow" === i11.effect) && s8.css({
                        width: e2.virtualSize + i11.spaceBetween + "px"
                    }), i11.setWrapperSize) s8.css(((z2 = {
                    })[t7("width")] = e2.virtualSize + i11.spaceBetween + "px", z2));
                    if (i11.slidesPerColumn > 1) {
                        if (e2.virtualSize = (C2 + i11.spaceBetween) * T2, e2.virtualSize = Math.ceil(e2.virtualSize / i11.slidesPerColumn) - i11.spaceBetween, s8.css(((P2 = {
                        })[t7("width")] = e2.virtualSize + i11.spaceBetween + "px", P2)), i11.centeredSlides) {
                            S2 = [];
                            for(var Z = 0; Z < c6.length; Z += 1){
                                var J = c6[Z];
                                i11.roundLengths && (J = Math.floor(J)), c6[Z] < e2.virtualSize + c6[0] && S2.push(J);
                            }
                            c6 = S2;
                        }
                    }
                    if (!i11.centeredSlides) {
                        S2 = [];
                        for(var Q = 0; Q < c6.length; Q += 1){
                            var ee = c6[Q];
                            i11.roundLengths && (ee = Math.floor(ee)), c6[Q] <= e2.virtualSize - r4 && S2.push(ee);
                        }
                        c6 = S2, Math.floor(e2.virtualSize - r4) - Math.floor(c6[c6.length - 1]) > 1 && c6.push(e2.virtualSize - r4);
                    }
                    if (0 === c6.length && (c6 = [
                        0
                    ]), 0 !== i11.spaceBetween) {
                        var te, ae = e2.isHorizontal() && n6 ? "marginLeft" : t7("marginRight");
                        p7.filter(function(e3, t8) {
                            return !i11.cssMode || t8 !== p7.length - 1;
                        }).css(((te = {
                        })[ae] = y2 + "px", te));
                    }
                    if (i11.centeredSlides && i11.centeredSlidesBounds) {
                        var ie = 0;
                        v6.forEach(function(e3) {
                            ie += e3 + (i11.spaceBetween ? i11.spaceBetween : 0);
                        });
                        var se = (ie -= i11.spaceBetween) - r4;
                        c6 = c6.map(function(e3) {
                            return e3 < 0 ? -f4 : e3 > se ? se + m2 : e3;
                        });
                    }
                    if (i11.centerInsufficientSlides) {
                        var re = 0;
                        if (v6.forEach(function(e3) {
                            re += e3 + (i11.spaceBetween ? i11.spaceBetween : 0);
                        }), (re -= i11.spaceBetween) < r4) {
                            var ne = (r4 - re) / 2;
                            c6.forEach(function(e3, t8) {
                                c6[t8] = e3 - ne;
                            }), h6.forEach(function(e3, t8) {
                                h6[t8] = e3 + ne;
                            });
                        }
                    }
                    M(e2, {
                        slides: p7,
                        snapGrid: c6,
                        slidesGrid: h6,
                        slidesSizesGrid: v6
                    }), u6 !== d6 && e2.emit("slidesLengthChange"), c6.length !== g4 && (e2.params.watchOverflow && e2.checkOverflow(), e2.emit("snapGridLengthChange")), h6.length !== b3 && e2.emit("slidesGridLengthChange"), (i11.watchSlidesProgress || i11.watchSlidesVisibility) && e2.updateSlidesOffset();
                }
            },
            updateAutoHeight: function(e2) {
                var t7, a6 = this, i11 = [], s8 = a6.virtual && a6.params.virtual.enabled, r4 = 0;
                "number" == typeof e2 ? a6.setTransition(e2) : !0 === e2 && a6.setTransition(a6.params.speed);
                var n6 = function(e3) {
                    return s8 ? a6.slides.filter(function(t8) {
                        return parseInt(t8.getAttribute("data-swiper-slide-index"), 10) === e3;
                    })[0] : a6.slides.eq(e3)[0];
                };
                if ("auto" !== a6.params.slidesPerView && a6.params.slidesPerView > 1) {
                    if (a6.params.centeredSlides) a6.visibleSlides.each(function(e3) {
                        i11.push(e3);
                    });
                    else for(t7 = 0; t7 < Math.ceil(a6.params.slidesPerView); t7 += 1){
                        var l2 = a6.activeIndex + t7;
                        if (l2 > a6.slides.length && !s8) break;
                        i11.push(n6(l2));
                    }
                } else i11.push(n6(a6.activeIndex));
                for(t7 = 0; t7 < i11.length; t7 += 1)if ((void 0) !== i11[t7]) {
                    var o5 = i11[t7].offsetHeight;
                    r4 = o5 > r4 ? o5 : r4;
                }
                r4 && a6.$wrapperEl.css("height", r4 + "px");
            },
            updateSlidesOffset: function() {
                for(var e2 = this.slides, t7 = 0; t7 < e2.length; t7 += 1)e2[t7].swiperSlideOffset = this.isHorizontal() ? e2[t7].offsetLeft : e2[t7].offsetTop;
            },
            updateSlidesProgress: function(e2) {
                (void 0) === e2 && (e2 = this && this.translate || 0);
                var t7 = this, a6 = t7.params, i11 = t7.slides, s8 = t7.rtlTranslate;
                if (0 !== i11.length) {
                    (void 0) === i11[0].swiperSlideOffset && t7.updateSlidesOffset();
                    var r4 = -e2;
                    s8 && (r4 = e2), i11.removeClass(a6.slideVisibleClass), t7.visibleSlidesIndexes = [], t7.visibleSlides = [];
                    for(var n6 = 0; n6 < i11.length; n6 += 1){
                        var l3 = i11[n6], o6 = (r4 + (a6.centeredSlides ? t7.minTranslate() : 0) - l3.swiperSlideOffset) / (l3.swiperSlideSize + a6.spaceBetween);
                        if (a6.watchSlidesVisibility || a6.centeredSlides && a6.autoHeight) {
                            var d6 = -(r4 - l3.swiperSlideOffset), p7 = d6 + t7.slidesSizesGrid[n6];
                            (d6 >= 0 && d6 < t7.size - 1 || p7 > 1 && p7 <= t7.size || d6 <= 0 && p7 >= t7.size) && (t7.visibleSlides.push(l3), t7.visibleSlidesIndexes.push(n6), i11.eq(n6).addClass(a6.slideVisibleClass));
                        }
                        l3.progress = s8 ? -o6 : o6;
                    }
                    t7.visibleSlides = m(t7.visibleSlides);
                }
            },
            updateProgress: function(e2) {
                var t7 = this;
                if ((void 0) === e2) {
                    var a6 = t7.rtlTranslate ? -1 : 1;
                    e2 = t7 && t7.translate && t7.translate * a6 || 0;
                }
                var i11 = t7.params, s8 = t7.maxTranslate() - t7.minTranslate(), r5 = t7.progress, n7 = t7.isBeginning, l4 = t7.isEnd, o7 = n7, d7 = l4;
                0 === s8 ? (r5 = 0, n7 = !0, l4 = !0) : (n7 = (r5 = (e2 - t7.minTranslate()) / s8) <= 0, l4 = r5 >= 1), M(t7, {
                    progress: r5,
                    isBeginning: n7,
                    isEnd: l4
                }), (i11.watchSlidesProgress || i11.watchSlidesVisibility || i11.centeredSlides && i11.autoHeight) && t7.updateSlidesProgress(e2), n7 && !o7 && t7.emit("reachBeginning toEdge"), l4 && !d7 && t7.emit("reachEnd toEdge"), (o7 && !n7 || d7 && !l4) && t7.emit("fromEdge"), t7.emit("progress", r5);
            },
            updateSlidesClasses: function() {
                var e2, t7 = this, a7 = t7.slides, i11 = t7.params, s8 = t7.$wrapperEl, r5 = t7.activeIndex, n7 = t7.realIndex, l4 = t7.virtual && i11.virtual.enabled;
                a7.removeClass(i11.slideActiveClass + " " + i11.slideNextClass + " " + i11.slidePrevClass + " " + i11.slideDuplicateActiveClass + " " + i11.slideDuplicateNextClass + " " + i11.slideDuplicatePrevClass), (e2 = l4 ? t7.$wrapperEl.find("." + i11.slideClass + '[data-swiper-slide-index="' + r5 + '"]') : a7.eq(r5)).addClass(i11.slideActiveClass), i11.loop && (e2.hasClass(i11.slideDuplicateClass) ? s8.children("." + i11.slideClass + ":not(." + i11.slideDuplicateClass + ')[data-swiper-slide-index="' + n7 + '"]').addClass(i11.slideDuplicateActiveClass) : s8.children("." + i11.slideClass + "." + i11.slideDuplicateClass + '[data-swiper-slide-index="' + n7 + '"]').addClass(i11.slideDuplicateActiveClass));
                var o7 = e2.nextAll("." + i11.slideClass).eq(0).addClass(i11.slideNextClass);
                i11.loop && 0 === o7.length && (o7 = a7.eq(0)).addClass(i11.slideNextClass);
                var d7 = e2.prevAll("." + i11.slideClass).eq(0).addClass(i11.slidePrevClass);
                i11.loop && 0 === d7.length && (d7 = a7.eq(-1)).addClass(i11.slidePrevClass), i11.loop && (o7.hasClass(i11.slideDuplicateClass) ? s8.children("." + i11.slideClass + ":not(." + i11.slideDuplicateClass + ')[data-swiper-slide-index="' + o7.attr("data-swiper-slide-index") + '"]').addClass(i11.slideDuplicateNextClass) : s8.children("." + i11.slideClass + "." + i11.slideDuplicateClass + '[data-swiper-slide-index="' + o7.attr("data-swiper-slide-index") + '"]').addClass(i11.slideDuplicateNextClass), d7.hasClass(i11.slideDuplicateClass) ? s8.children("." + i11.slideClass + ":not(." + i11.slideDuplicateClass + ')[data-swiper-slide-index="' + d7.attr("data-swiper-slide-index") + '"]').addClass(i11.slideDuplicatePrevClass) : s8.children("." + i11.slideClass + "." + i11.slideDuplicateClass + '[data-swiper-slide-index="' + d7.attr("data-swiper-slide-index") + '"]').addClass(i11.slideDuplicatePrevClass)), t7.emitSlidesClasses();
            },
            updateActiveIndex: function(e2) {
                var t7, a7 = this, i11 = a7.rtlTranslate ? a7.translate : -a7.translate, s8 = a7.slidesGrid, r5 = a7.snapGrid, n7 = a7.params, l4 = a7.activeIndex, o7 = a7.realIndex, d7 = a7.snapIndex, p8 = e2;
                if ((void 0) === p8) {
                    for(var u6 = 0; u6 < s8.length; u6 += 1)(void 0) !== s8[u6 + 1] ? i11 >= s8[u6] && i11 < s8[u6 + 1] - (s8[u6 + 1] - s8[u6]) / 2 ? p8 = u6 : i11 >= s8[u6] && i11 < s8[u6 + 1] && (p8 = u6 + 1) : i11 >= s8[u6] && (p8 = u6);
                    n7.normalizeSlideIndex && (p8 < 0 || (void 0) === p8) && (p8 = 0);
                }
                if (r5.indexOf(i11) >= 0) t7 = r5.indexOf(i11);
                else {
                    var c6 = Math.min(n7.slidesPerGroupSkip, p8);
                    t7 = c6 + Math.floor((p8 - c6) / n7.slidesPerGroup);
                }
                if (t7 >= r5.length && (t7 = r5.length - 1), p8 !== l4) {
                    var h6 = parseInt(a7.slides.eq(p8).attr("data-swiper-slide-index") || p8, 10);
                    M(a7, {
                        snapIndex: t7,
                        realIndex: h6,
                        previousIndex: l4,
                        activeIndex: p8
                    }), a7.emit("activeIndexChange"), a7.emit("snapIndexChange"), o7 !== h6 && a7.emit("realIndexChange"), (a7.initialized || a7.params.runCallbacksOnInit) && a7.emit("slideChange");
                } else t7 !== d7 && (a7.snapIndex = t7, a7.emit("snapIndexChange"));
            },
            updateClickedSlide: function(e2) {
                var t7, a7 = this, i11 = a7.params, s8 = m(e2.target).closest("." + i11.slideClass)[0], r5 = !1;
                if (s8) for(var n7 = 0; n7 < a7.slides.length; n7 += 1)if (a7.slides[n7] === s8) {
                    r5 = !0, t7 = n7;
                    break;
                }
                if (!s8 || !r5) return a7.clickedSlide = void 0, void (a7.clickedIndex = void 0);
                a7.clickedSlide = s8, a7.virtual && a7.params.virtual.enabled ? a7.clickedIndex = parseInt(m(s8).attr("data-swiper-slide-index"), 10) : a7.clickedIndex = t7, i11.slideToClickedSlide && (void 0) !== a7.clickedIndex && a7.clickedIndex !== a7.activeIndex && a7.slideToClickedSlide();
            }
        },
        translate: {
            getTranslate: function(e2) {
                (void 0) === e2 && (e2 = this.isHorizontal() ? "x" : "y");
                var t7 = this, a7 = t7.params, i11 = t7.rtlTranslate, s8 = t7.translate, r5 = t7.$wrapperEl;
                if (a7.virtualTranslate) return i11 ? -s8 : s8;
                if (a7.cssMode) return s8;
                var n7 = T(r5[0], e2);
                return i11 && (n7 = -n7), n7 || 0;
            },
            setTranslate: function(e2, t7) {
                var a7 = this, i11 = a7.rtlTranslate, s8 = a7.params, r5 = a7.$wrapperEl, n7 = a7.wrapperEl, l4 = a7.progress, o7 = 0, d7 = 0;
                a7.isHorizontal() ? o7 = i11 ? -e2 : e2 : d7 = e2, s8.roundLengths && (o7 = Math.floor(o7), d7 = Math.floor(d7)), s8.cssMode ? n7[a7.isHorizontal() ? "scrollLeft" : "scrollTop"] = a7.isHorizontal() ? -o7 : -d7 : s8.virtualTranslate || r5.transform("translate3d(" + o7 + "px, " + d7 + "px, 0px)"), a7.previousTranslate = a7.translate, a7.translate = a7.isHorizontal() ? o7 : d7;
                var p8 = a7.maxTranslate() - a7.minTranslate();
                (0 === p8 ? 0 : (e2 - a7.minTranslate()) / p8) !== l4 && a7.updateProgress(e2), a7.emit("setTranslate", a7.translate, t7);
            },
            minTranslate: function() {
                return -this.snapGrid[0];
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function(e2, t7, a7, i11, s8) {
                (void 0) === e2 && (e2 = 0), (void 0) === t7 && (t7 = this.params.speed), (void 0) === a7 && (a7 = !0), (void 0) === i11 && (i11 = !0);
                var r5 = this, n7 = r5.params, l4 = r5.wrapperEl;
                if (r5.animating && n7.preventInteractionOnTransition) return !1;
                var o7, d7 = r5.minTranslate(), p8 = r5.maxTranslate();
                if (o7 = i11 && e2 > d7 ? d7 : i11 && e2 < p8 ? p8 : e2, r5.updateProgress(o7), n7.cssMode) {
                    var u7, c7 = r5.isHorizontal();
                    if (0 === t7) l4[c7 ? "scrollLeft" : "scrollTop"] = -o7;
                    else if (l4.scrollTo) l4.scrollTo(((u7 = {
                    })[c7 ? "left" : "top"] = -o7, u7.behavior = "smooth", u7));
                    else l4[c7 ? "scrollLeft" : "scrollTop"] = -o7;
                    return !0;
                }
                return 0 === t7 ? (r5.setTransition(0), r5.setTranslate(o7), a7 && (r5.emit("beforeTransitionStart", t7, s8), r5.emit("transitionEnd"))) : (r5.setTransition(t7), r5.setTranslate(o7), a7 && (r5.emit("beforeTransitionStart", t7, s8), r5.emit("transitionStart")), r5.animating || (r5.animating = !0, r5.onTranslateToWrapperTransitionEnd || (r5.onTranslateToWrapperTransitionEnd = function(e3) {
                    r5 && !r5.destroyed && e3.target === this && (r5.$wrapperEl[0].removeEventListener("transitionend", r5.onTranslateToWrapperTransitionEnd), r5.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r5.onTranslateToWrapperTransitionEnd), r5.onTranslateToWrapperTransitionEnd = null, delete r5.onTranslateToWrapperTransitionEnd, a7 && r5.emit("transitionEnd"));
                }), r5.$wrapperEl[0].addEventListener("transitionend", r5.onTranslateToWrapperTransitionEnd), r5.$wrapperEl[0].addEventListener("webkitTransitionEnd", r5.onTranslateToWrapperTransitionEnd))), !0;
            }
        },
        transition: {
            setTransition: function(e2, t7) {
                var a7 = this;
                a7.params.cssMode || a7.$wrapperEl.transition(e2), a7.emit("setTransition", e2, t7);
            },
            transitionStart: function(e2, t7) {
                (void 0) === e2 && (e2 = !0);
                var a7 = this, i11 = a7.activeIndex, s8 = a7.params, r5 = a7.previousIndex;
                if (!s8.cssMode) {
                    s8.autoHeight && a7.updateAutoHeight();
                    var n7 = t7;
                    if (n7 || (n7 = i11 > r5 ? "next" : i11 < r5 ? "prev" : "reset"), a7.emit("transitionStart"), e2 && i11 !== r5) {
                        if ("reset" === n7) return void a7.emit("slideResetTransitionStart");
                        a7.emit("slideChangeTransitionStart"), "next" === n7 ? a7.emit("slideNextTransitionStart") : a7.emit("slidePrevTransitionStart");
                    }
                }
            },
            transitionEnd: function(e2, t7) {
                (void 0) === e2 && (e2 = !0);
                var a7 = this, i11 = a7.activeIndex, s8 = a7.previousIndex, r5 = a7.params;
                if (a7.animating = !1, !r5.cssMode) {
                    a7.setTransition(0);
                    var n8 = t7;
                    if (n8 || (n8 = i11 > s8 ? "next" : i11 < s8 ? "prev" : "reset"), a7.emit("transitionEnd"), e2 && i11 !== s8) {
                        if ("reset" === n8) return void a7.emit("slideResetTransitionEnd");
                        a7.emit("slideChangeTransitionEnd"), "next" === n8 ? a7.emit("slideNextTransitionEnd") : a7.emit("slidePrevTransitionEnd");
                    }
                }
            }
        },
        slide: {
            slideTo: function(e2, t7, a7, i11, s8) {
                if ((void 0) === e2 && (e2 = 0), (void 0) === t7 && (t7 = this.params.speed), (void 0) === a7 && (a7 = !0), "number" != typeof e2 && "string" != typeof e2) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e2 + "] given.");
                if ("string" == typeof e2) {
                    var r5 = parseInt(e2, 10);
                    if (!isFinite(r5)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e2 + "] given.");
                    e2 = r5;
                }
                var n9 = this, l4 = e2;
                l4 < 0 && (l4 = 0);
                var o7 = n9.params, d7 = n9.snapGrid, p8 = n9.slidesGrid, u8 = n9.previousIndex, c8 = n9.activeIndex, h7 = n9.rtlTranslate, v6 = n9.wrapperEl, f4 = n9.enabled;
                if (n9.animating && o7.preventInteractionOnTransition || !f4 && !i11 && !s8) return !1;
                var m2 = Math.min(n9.params.slidesPerGroupSkip, l4), g4 = m2 + Math.floor((l4 - m2) / n9.params.slidesPerGroup);
                g4 >= d7.length && (g4 = d7.length - 1), (c8 || o7.initialSlide || 0) === (u8 || 0) && a7 && n9.emit("beforeSlideChangeStart");
                var b3, y2 = -d7[g4];
                if (n9.updateProgress(y2), o7.normalizeSlideIndex) for(var w2 = 0; w2 < p8.length; w2 += 1){
                    var E1 = -Math.floor(100 * y2), x1 = Math.floor(100 * p8[w2]), T3 = Math.floor(100 * p8[w2 + 1]);
                    (void 0) !== p8[w2 + 1] ? E1 >= x1 && E1 < T3 - (T3 - x1) / 2 ? l4 = w2 : E1 >= x1 && E1 < T3 && (l4 = w2 + 1) : E1 >= x1 && (l4 = w2);
                }
                if (n9.initialized && l4 !== c8) {
                    if (!n9.allowSlideNext && y2 < n9.translate && y2 < n9.minTranslate()) return !1;
                    if (!n9.allowSlidePrev && y2 > n9.translate && y2 > n9.maxTranslate() && (c8 || 0) !== l4) return !1;
                }
                if (b3 = l4 > c8 ? "next" : l4 < c8 ? "prev" : "reset", h7 && -y2 === n9.translate || !h7 && y2 === n9.translate) return n9.updateActiveIndex(l4), o7.autoHeight && n9.updateAutoHeight(), n9.updateSlidesClasses(), "slide" !== o7.effect && n9.setTranslate(y2), "reset" !== b3 && (n9.transitionStart(a7, b3), n9.transitionEnd(a7, b3)), !1;
                if (o7.cssMode) {
                    var C3, S3 = n9.isHorizontal(), M2 = -y2;
                    if (h7 && (M2 = v6.scrollWidth - v6.offsetWidth - M2), 0 === t7) v6[S3 ? "scrollLeft" : "scrollTop"] = M2;
                    else if (v6.scrollTo) v6.scrollTo(((C3 = {
                    })[S3 ? "left" : "top"] = M2, C3.behavior = "smooth", C3));
                    else v6[S3 ? "scrollLeft" : "scrollTop"] = M2;
                    return !0;
                }
                return 0 === t7 ? (n9.setTransition(0), n9.setTranslate(y2), n9.updateActiveIndex(l4), n9.updateSlidesClasses(), n9.emit("beforeTransitionStart", t7, i11), n9.transitionStart(a7, b3), n9.transitionEnd(a7, b3)) : (n9.setTransition(t7), n9.setTranslate(y2), n9.updateActiveIndex(l4), n9.updateSlidesClasses(), n9.emit("beforeTransitionStart", t7, i11), n9.transitionStart(a7, b3), n9.animating || (n9.animating = !0, n9.onSlideToWrapperTransitionEnd || (n9.onSlideToWrapperTransitionEnd = function(e3) {
                    n9 && !n9.destroyed && e3.target === this && (n9.$wrapperEl[0].removeEventListener("transitionend", n9.onSlideToWrapperTransitionEnd), n9.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n9.onSlideToWrapperTransitionEnd), n9.onSlideToWrapperTransitionEnd = null, delete n9.onSlideToWrapperTransitionEnd, n9.transitionEnd(a7, b3));
                }), n9.$wrapperEl[0].addEventListener("transitionend", n9.onSlideToWrapperTransitionEnd), n9.$wrapperEl[0].addEventListener("webkitTransitionEnd", n9.onSlideToWrapperTransitionEnd))), !0;
            },
            slideToLoop: function(e2, t7, a7, i11) {
                (void 0) === e2 && (e2 = 0), (void 0) === t7 && (t7 = this.params.speed), (void 0) === a7 && (a7 = !0);
                var s8 = this, r6 = e2;
                return s8.params.loop && (r6 += s8.loopedSlides), s8.slideTo(r6, t7, a7, i11);
            },
            slideNext: function(e2, t7, a7) {
                (void 0) === e2 && (e2 = this.params.speed), (void 0) === t7 && (t7 = !0);
                var i11 = this, s8 = i11.params, r6 = i11.animating;
                if (!i11.enabled) return i11;
                var n9 = i11.activeIndex < s8.slidesPerGroupSkip ? 1 : s8.slidesPerGroup;
                if (s8.loop) {
                    if (r6 && s8.loopPreventsSlide) return !1;
                    i11.loopFix(), i11._clientLeft = i11.$wrapperEl[0].clientLeft;
                }
                return i11.slideTo(i11.activeIndex + n9, e2, t7, a7);
            },
            slidePrev: function(e2, t7, a7) {
                (void 0) === e2 && (e2 = this.params.speed), (void 0) === t7 && (t7 = !0);
                var i11 = this, s8 = i11.params, r6 = i11.animating, n9 = i11.snapGrid, l4 = i11.slidesGrid, o7 = i11.rtlTranslate;
                if (!i11.enabled) return i11;
                if (s8.loop) {
                    if (r6 && s8.loopPreventsSlide) return !1;
                    i11.loopFix(), i11._clientLeft = i11.$wrapperEl[0].clientLeft;
                }
                function d7(e3) {
                    return e3 < 0 ? -Math.floor(Math.abs(e3)) : Math.floor(e3);
                }
                var p8, u8 = d7(o7 ? i11.translate : -i11.translate), c8 = n9.map(function(e3) {
                    return d7(e3);
                }), h7 = n9[c8.indexOf(u8) - 1];
                return (void 0) === h7 && s8.cssMode && n9.forEach(function(e3) {
                    !h7 && u8 >= e3 && (h7 = e3);
                }), (void 0) !== h7 && (p8 = l4.indexOf(h7)) < 0 && (p8 = i11.activeIndex - 1), i11.slideTo(p8, e2, t7, a7);
            },
            slideReset: function(e2, t7, a7) {
                return (void 0) === e2 && (e2 = this.params.speed), (void 0) === t7 && (t7 = !0), this.slideTo(this.activeIndex, e2, t7, a7);
            },
            slideToClosest: function(e2, t7, a7, i11) {
                (void 0) === e2 && (e2 = this.params.speed), (void 0) === t7 && (t7 = !0), (void 0) === i11 && (i11 = 0.5);
                var s8 = this, r6 = s8.activeIndex, n9 = Math.min(s8.params.slidesPerGroupSkip, r6), l4 = n9 + Math.floor((r6 - n9) / s8.params.slidesPerGroup), o7 = s8.rtlTranslate ? s8.translate : -s8.translate;
                if (o7 >= s8.snapGrid[l4]) {
                    var d7 = s8.snapGrid[l4];
                    o7 - d7 > (s8.snapGrid[l4 + 1] - d7) * i11 && (r6 += s8.params.slidesPerGroup);
                } else {
                    var p8 = s8.snapGrid[l4 - 1];
                    o7 - p8 <= (s8.snapGrid[l4] - p8) * i11 && (r6 -= s8.params.slidesPerGroup);
                }
                return r6 = Math.max(r6, 0), r6 = Math.min(r6, s8.slidesGrid.length - 1), s8.slideTo(r6, e2, t7, a7);
            },
            slideToClickedSlide: function() {
                var e2, t7 = this, a7 = t7.params, i11 = t7.$wrapperEl, s8 = "auto" === a7.slidesPerView ? t7.slidesPerViewDynamic() : a7.slidesPerView, r6 = t7.clickedIndex;
                if (a7.loop) {
                    if (t7.animating) return;
                    e2 = parseInt(m(t7.clickedSlide).attr("data-swiper-slide-index"), 10), a7.centeredSlides ? r6 < t7.loopedSlides - s8 / 2 || r6 > t7.slides.length - t7.loopedSlides + s8 / 2 ? (t7.loopFix(), r6 = i11.children("." + a7.slideClass + '[data-swiper-slide-index="' + e2 + '"]:not(.' + a7.slideDuplicateClass + ")").eq(0).index(), E(function() {
                        t7.slideTo(r6);
                    })) : t7.slideTo(r6) : r6 > t7.slides.length - s8 ? (t7.loopFix(), r6 = i11.children("." + a7.slideClass + '[data-swiper-slide-index="' + e2 + '"]:not(.' + a7.slideDuplicateClass + ")").eq(0).index(), E(function() {
                        t7.slideTo(r6);
                    })) : t7.slideTo(r6);
                } else t7.slideTo(r6);
            }
        },
        loop: {
            loopCreate: function() {
                var e2 = this, t7 = r(), a7 = e2.params, i11 = e2.$wrapperEl;
                i11.children("." + a7.slideClass + "." + a7.slideDuplicateClass).remove();
                var s8 = i11.children("." + a7.slideClass);
                if (a7.loopFillGroupWithBlank) {
                    var n9 = a7.slidesPerGroup - s8.length % a7.slidesPerGroup;
                    if (n9 !== a7.slidesPerGroup) {
                        for(var l4 = 0; l4 < n9; l4 += 1){
                            var o7 = m(t7.createElement("div")).addClass(a7.slideClass + " " + a7.slideBlankClass);
                            i11.append(o7);
                        }
                        s8 = i11.children("." + a7.slideClass);
                    }
                }
                "auto" !== a7.slidesPerView || a7.loopedSlides || (a7.loopedSlides = s8.length), e2.loopedSlides = Math.ceil(parseFloat(a7.loopedSlides || a7.slidesPerView, 10)), e2.loopedSlides += a7.loopAdditionalSlides, e2.loopedSlides > s8.length && (e2.loopedSlides = s8.length);
                var d8 = [], p9 = [];
                s8.each(function(t8, a8) {
                    var i12 = m(t8);
                    a8 < e2.loopedSlides && p9.push(t8), a8 < s8.length && a8 >= s8.length - e2.loopedSlides && d8.push(t8), i12.attr("data-swiper-slide-index", a8);
                });
                for(var u8 = 0; u8 < p9.length; u8 += 1)i11.append(m(p9[u8].cloneNode(!0)).addClass(a7.slideDuplicateClass));
                for(var c8 = d8.length - 1; c8 >= 0; c8 -= 1)i11.prepend(m(d8[c8].cloneNode(!0)).addClass(a7.slideDuplicateClass));
            },
            loopFix: function() {
                var e2 = this;
                e2.emit("beforeLoopFix");
                var t7, a7 = e2.activeIndex, i11 = e2.slides, s8 = e2.loopedSlides, r6 = e2.allowSlidePrev, n10 = e2.allowSlideNext, l5 = e2.snapGrid, o8 = e2.rtlTranslate;
                e2.allowSlidePrev = !0, e2.allowSlideNext = !0;
                var d8 = -l5[a7] - e2.getTranslate();
                if (a7 < s8) t7 = i11.length - 3 * s8 + a7, t7 += s8, e2.slideTo(t7, 0, !1, !0) && 0 !== d8 && e2.setTranslate((o8 ? -e2.translate : e2.translate) - d8);
                else if (a7 >= i11.length - s8) t7 = -i11.length + a7 + s8, t7 += s8, e2.slideTo(t7, 0, !1, !0) && 0 !== d8 && e2.setTranslate((o8 ? -e2.translate : e2.translate) - d8);
                e2.allowSlidePrev = r6, e2.allowSlideNext = n10, e2.emit("loopFix");
            },
            loopDestroy: function() {
                var e2 = this, t7 = e2.$wrapperEl, a7 = e2.params, i11 = e2.slides;
                t7.children("." + a7.slideClass + "." + a7.slideDuplicateClass + ",." + a7.slideClass + "." + a7.slideBlankClass).remove(), i11.removeAttr("data-swiper-slide-index");
            }
        },
        grabCursor: {
            setGrabCursor: function(e2) {
                var t7 = this;
                if (!(t7.support.touch || !t7.params.simulateTouch || t7.params.watchOverflow && t7.isLocked || t7.params.cssMode)) {
                    var a7 = t7.el;
                    a7.style.cursor = "move", a7.style.cursor = e2 ? "-webkit-grabbing" : "-webkit-grab", a7.style.cursor = e2 ? "-moz-grabbin" : "-moz-grab", a7.style.cursor = e2 ? "grabbing" : "grab";
                }
            },
            unsetGrabCursor: function() {
                var e2 = this;
                e2.support.touch || e2.params.watchOverflow && e2.isLocked || e2.params.cssMode || (e2.el.style.cursor = "");
            }
        },
        manipulation: {
            appendSlide: function(e2) {
                var t7 = this, a8 = t7.$wrapperEl, i11 = t7.params;
                if (i11.loop && t7.loopDestroy(), "object" == typeof e2 && "length" in e2) for(var s8 = 0; s8 < e2.length; s8 += 1)e2[s8] && a8.append(e2[s8]);
                else a8.append(e2);
                i11.loop && t7.loopCreate(), i11.observer && t7.support.observer || t7.update();
            },
            prependSlide: function(e2) {
                var t7 = this, a8 = t7.params, i11 = t7.$wrapperEl, s8 = t7.activeIndex;
                a8.loop && t7.loopDestroy();
                var r6 = s8 + 1;
                if ("object" == typeof e2 && "length" in e2) {
                    for(var n10 = 0; n10 < e2.length; n10 += 1)e2[n10] && i11.prepend(e2[n10]);
                    r6 = s8 + e2.length;
                } else i11.prepend(e2);
                a8.loop && t7.loopCreate(), a8.observer && t7.support.observer || t7.update(), t7.slideTo(r6, 0, !1);
            },
            addSlide: function(e2, t7) {
                var a8 = this, i11 = a8.$wrapperEl, s8 = a8.params, r6 = a8.activeIndex;
                s8.loop && (r6 -= a8.loopedSlides, a8.loopDestroy(), a8.slides = i11.children("." + s8.slideClass));
                var n11 = a8.slides.length;
                if (e2 <= 0) a8.prependSlide(t7);
                else if (e2 >= n11) a8.appendSlide(t7);
                else {
                    for(var l5 = r6 > e2 ? r6 + 1 : r6, o8 = [], d8 = n11 - 1; d8 >= e2; d8 -= 1){
                        var p9 = a8.slides.eq(d8);
                        p9.remove(), o8.unshift(p9);
                    }
                    if ("object" == typeof t7 && "length" in t7) {
                        for(var u8 = 0; u8 < t7.length; u8 += 1)t7[u8] && i11.append(t7[u8]);
                        l5 = r6 > e2 ? r6 + t7.length : r6;
                    } else i11.append(t7);
                    for(var c8 = 0; c8 < o8.length; c8 += 1)i11.append(o8[c8]);
                    s8.loop && a8.loopCreate(), s8.observer && a8.support.observer || a8.update(), s8.loop ? a8.slideTo(l5 + a8.loopedSlides, 0, !1) : a8.slideTo(l5, 0, !1);
                }
            },
            removeSlide: function(e2) {
                var t7 = this, a8 = t7.params, i11 = t7.$wrapperEl, s8 = t7.activeIndex;
                a8.loop && (s8 -= t7.loopedSlides, t7.loopDestroy(), t7.slides = i11.children("." + a8.slideClass));
                var r6, n11 = s8;
                if ("object" == typeof e2 && "length" in e2) {
                    for(var l6 = 0; l6 < e2.length; l6 += 1)r6 = e2[l6], t7.slides[r6] && t7.slides.eq(r6).remove(), r6 < n11 && (n11 -= 1);
                    n11 = Math.max(n11, 0);
                } else r6 = e2, t7.slides[r6] && t7.slides.eq(r6).remove(), r6 < n11 && (n11 -= 1), n11 = Math.max(n11, 0);
                a8.loop && t7.loopCreate(), a8.observer && t7.support.observer || t7.update(), a8.loop ? t7.slideTo(n11 + t7.loopedSlides, 0, !1) : t7.slideTo(n11, 0, !1);
            },
            removeAllSlides: function() {
                for(var e2 = [], t7 = 0; t7 < this.slides.length; t7 += 1)e2.push(t7);
                this.removeSlide(e2);
            }
        },
        events: {
            attachEvents: function() {
                var e2 = this, t7 = r(), a8 = e2.params, i11 = e2.touchEvents, s8 = e2.el, n11 = e2.wrapperEl, l7 = e2.device, o9 = e2.support;
                e2.onTouchStart = N.bind(e2), e2.onTouchMove = G.bind(e2), e2.onTouchEnd = B.bind(e2), a8.cssMode && (e2.onScroll = X.bind(e2)), e2.onClick = R.bind(e2);
                var d9 = !!a8.nested;
                if (!o9.touch && o9.pointerEvents) s8.addEventListener(i11.start, e2.onTouchStart, !1), t7.addEventListener(i11.move, e2.onTouchMove, d9), t7.addEventListener(i11.end, e2.onTouchEnd, !1);
                else {
                    if (o9.touch) {
                        var p10 = !("touchstart" !== i11.start || !o9.passiveListener || !a8.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s8.addEventListener(i11.start, e2.onTouchStart, p10), s8.addEventListener(i11.move, e2.onTouchMove, o9.passiveListener ? {
                            passive: !1,
                            capture: d9
                        } : d9), s8.addEventListener(i11.end, e2.onTouchEnd, p10), i11.cancel && s8.addEventListener(i11.cancel, e2.onTouchEnd, p10), Y || (t7.addEventListener("touchstart", V), Y = !0);
                    }
                    (a8.simulateTouch && !l7.ios && !l7.android || a8.simulateTouch && !o9.touch && l7.ios) && (s8.addEventListener("mousedown", e2.onTouchStart, !1), t7.addEventListener("mousemove", e2.onTouchMove, d9), t7.addEventListener("mouseup", e2.onTouchEnd, !1));
                }
                (a8.preventClicks || a8.preventClicksPropagation) && s8.addEventListener("click", e2.onClick, !0), a8.cssMode && n11.addEventListener("scroll", e2.onScroll), a8.updateOnWindowResize ? e2.on(l7.ios || l7.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H, !0) : e2.on("observerUpdate", H, !0);
            },
            detachEvents: function() {
                var e2 = this, t7 = r(), a8 = e2.params, i11 = e2.touchEvents, s8 = e2.el, n11 = e2.wrapperEl, l7 = e2.device, o9 = e2.support, d9 = !!a8.nested;
                if (!o9.touch && o9.pointerEvents) s8.removeEventListener(i11.start, e2.onTouchStart, !1), t7.removeEventListener(i11.move, e2.onTouchMove, d9), t7.removeEventListener(i11.end, e2.onTouchEnd, !1);
                else {
                    if (o9.touch) {
                        var p11 = !("onTouchStart" !== i11.start || !o9.passiveListener || !a8.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s8.removeEventListener(i11.start, e2.onTouchStart, p11), s8.removeEventListener(i11.move, e2.onTouchMove, d9), s8.removeEventListener(i11.end, e2.onTouchEnd, p11), i11.cancel && s8.removeEventListener(i11.cancel, e2.onTouchEnd, p11);
                    }
                    (a8.simulateTouch && !l7.ios && !l7.android || a8.simulateTouch && !o9.touch && l7.ios) && (s8.removeEventListener("mousedown", e2.onTouchStart, !1), t7.removeEventListener("mousemove", e2.onTouchMove, d9), t7.removeEventListener("mouseup", e2.onTouchEnd, !1));
                }
                (a8.preventClicks || a8.preventClicksPropagation) && s8.removeEventListener("click", e2.onClick, !0), a8.cssMode && n11.removeEventListener("scroll", e2.onScroll), e2.off(l7.ios || l7.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", H);
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e2 = this, t7 = e2.activeIndex, a8 = e2.initialized, i11 = e2.loopedSlides, s8 = (void 0) === i11 ? 0 : i11, r6 = e2.params, n11 = e2.$el, l7 = r6.breakpoints;
                if (l7 && (!l7 || 0 !== Object.keys(l7).length)) {
                    var o9 = e2.getBreakpoint(l7, e2.params.breakpointsBase, e2.el);
                    if (o9 && e2.currentBreakpoint !== o9) {
                        var d9 = o9 in l7 ? l7[o9] : void 0;
                        d9 && [
                            "slidesPerView",
                            "spaceBetween",
                            "slidesPerGroup",
                            "slidesPerGroupSkip",
                            "slidesPerColumn"
                        ].forEach(function(e3) {
                            var t8 = d9[e3];
                            (void 0) !== t8 && (d9[e3] = "slidesPerView" !== e3 || "AUTO" !== t8 && "auto" !== t8 ? "slidesPerView" === e3 ? parseFloat(t8) : parseInt(t8, 10) : "auto");
                        });
                        var p12 = d9 || e2.originalParams, u9 = r6.slidesPerColumn > 1, c9 = p12.slidesPerColumn > 1, h7 = r6.enabled;
                        u9 && !c9 ? (n11.removeClass(r6.containerModifierClass + "multirow " + r6.containerModifierClass + "multirow-column"), e2.emitContainerClasses()) : !u9 && c9 && (n11.addClass(r6.containerModifierClass + "multirow"), "column" === p12.slidesPerColumnFill && n11.addClass(r6.containerModifierClass + "multirow-column"), e2.emitContainerClasses());
                        var v6 = p12.direction && p12.direction !== r6.direction, f4 = r6.loop && (p12.slidesPerView !== r6.slidesPerView || v6);
                        v6 && a8 && e2.changeDirection(), M(e2.params, p12);
                        var m2 = e2.params.enabled;
                        M(e2, {
                            allowTouchMove: e2.params.allowTouchMove,
                            allowSlideNext: e2.params.allowSlideNext,
                            allowSlidePrev: e2.params.allowSlidePrev
                        }), h7 && !m2 ? e2.disable() : !h7 && m2 && e2.enable(), e2.currentBreakpoint = o9, e2.emit("_beforeBreakpoint", p12), f4 && a8 && (e2.loopDestroy(), e2.loopCreate(), e2.updateSlides(), e2.slideTo(t7 - s8 + e2.loopedSlides, 0, !1)), e2.emit("breakpoint", p12);
                    }
                }
            },
            getBreakpoint: function(e2, t7, a8) {
                if ((void 0) === t7 && (t7 = "window"), e2 && ("container" !== t7 || a8)) {
                    var i11 = !1, s8 = l(), r6 = "window" === t7 ? s8.innerHeight : a8.clientHeight, n11 = Object.keys(e2).map(function(e3) {
                        if ("string" == typeof e3 && 0 === e3.indexOf("@")) {
                            var t8 = parseFloat(e3.substr(1));
                            return {
                                value: r6 * t8,
                                point: e3
                            };
                        }
                        return {
                            value: e3,
                            point: e3
                        };
                    });
                    n11.sort(function(e3, t9) {
                        return parseInt(e3.value, 10) - parseInt(t9.value, 10);
                    });
                    for(var o10 = 0; o10 < n11.length; o10 += 1){
                        var d10 = n11[o10], p13 = d10.point, u10 = d10.value;
                        "window" === t7 ? s8.matchMedia("(min-width: " + u10 + "px)").matches && (i11 = p13) : u10 <= a8.clientWidth && (i11 = p13);
                    }
                    return i11 || "max";
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e2 = this, t7 = e2.params, a8 = e2.isLocked, i12 = e2.slides.length > 0 && t7.slidesOffsetBefore + t7.spaceBetween * (e2.slides.length - 1) + e2.slides[0].offsetWidth * e2.slides.length;
                t7.slidesOffsetBefore && t7.slidesOffsetAfter && i12 ? e2.isLocked = i12 <= e2.size : e2.isLocked = 1 === e2.snapGrid.length, e2.allowSlideNext = !e2.isLocked, e2.allowSlidePrev = !e2.isLocked, a8 !== e2.isLocked && e2.emit(e2.isLocked ? "lock" : "unlock"), a8 && a8 !== e2.isLocked && (e2.isEnd = !1, e2.navigation && e2.navigation.update());
            }
        },
        classes: {
            addClasses: function() {
                var e2, t7, a8, i12 = this, s9 = i12.classNames, r7 = i12.params, n12 = i12.rtl, l7 = i12.$el, o11 = i12.device, d11 = i12.support, p14 = (e2 = [
                    "initialized",
                    r7.direction,
                    {
                        "pointer-events": d11.pointerEvents && !d11.touch
                    },
                    {
                        "free-mode": r7.freeMode
                    },
                    {
                        autoheight: r7.autoHeight
                    },
                    {
                        rtl: n12
                    },
                    {
                        multirow: r7.slidesPerColumn > 1
                    },
                    {
                        "multirow-column": r7.slidesPerColumn > 1 && "column" === r7.slidesPerColumnFill
                    },
                    {
                        android: o11.android
                    },
                    {
                        ios: o11.ios
                    },
                    {
                        "css-mode": r7.cssMode
                    }
                ], t7 = r7.containerModifierClass, a8 = [], e2.forEach(function(e3) {
                    "object" == typeof e3 ? Object.keys(e3).forEach(function(i13) {
                        e3[i13] && a8.push(t7 + i13);
                    }) : "string" == typeof e3 && a8.push(t7 + e3);
                }), a8);
                s9.push.apply(s9, p14), l7.addClass([].concat(s9).join(" ")), i12.emitContainerClasses();
            },
            removeClasses: function() {
                var e2 = this, t7 = e2.$el, a8 = e2.classNames;
                t7.removeClass(a8.join(" ")), e2.emitContainerClasses();
            }
        },
        images: {
            loadImage: function(e2, t7, a8, i12, s9, r7) {
                var n12, o11 = l();
                function d11() {
                    r7 && r7();
                }
                m(e2).parent("picture")[0] || e2.complete && s9 ? d11() : t7 ? ((n12 = new o11.Image).onload = d11, n12.onerror = d11, i12 && (n12.sizes = i12), a8 && (n12.srcset = a8), t7 && (n12.src = t7)) : d11();
            },
            preloadImages: function() {
                var e2 = this;
                function t7() {
                    null != e2 && e2 && !e2.destroyed && ((void 0) !== e2.imagesLoaded && (e2.imagesLoaded += 1), e2.imagesLoaded === e2.imagesToLoad.length && (e2.params.updateOnImagesReady && e2.update(), e2.emit("imagesReady")));
                }
                e2.imagesToLoad = e2.$el.find("img");
                for(var a8 = 0; a8 < e2.imagesToLoad.length; a8 += 1){
                    var i12 = e2.imagesToLoad[a8];
                    e2.loadImage(i12, i12.currentSrc || i12.getAttribute("src"), i12.srcset || i12.getAttribute("srcset"), i12.sizes || i12.getAttribute("sizes"), !0, t7);
                }
            }
        }
    }, _ = {
    }, q = function() {
        function t7() {
            for(var e2, a8, i13 = arguments.length, s9 = new Array(i13), r7 = 0; r7 < i13; r7++)s9[r7] = arguments[r7];
            if (1 === s9.length && s9[0].constructor && "Object" === Object.prototype.toString.call(s9[0]).slice(8, -1) ? a8 = s9[0] : (e2 = s9[0], a8 = s9[1]), a8 || (a8 = {
            }), a8 = M({
            }, a8), e2 && !a8.el && (a8.el = e2), a8.el && m(a8.el).length > 1) {
                var n12 = [];
                return m(a8.el).each(function(e3) {
                    var i14 = M({
                    }, a8, {
                        el: e3
                    });
                    n12.push(new t7(i14));
                }), n12;
            }
            var l7 = this;
            l7.__swiper__ = !0, l7.support = $(), l7.device = L({
                userAgent: a8.userAgent
            }), l7.browser = I(), l7.eventsListeners = {
            }, l7.eventsAnyListeners = [], (void 0) === l7.modules && (l7.modules = {
            }), Object.keys(l7.modules).forEach(function(e3) {
                var t9 = l7.modules[e3];
                if (t9.params) {
                    var i14 = Object.keys(t9.params)[0], s10 = t9.params[i14];
                    if ("object" != typeof s10 || null === s10) return;
                    if ([
                        "navigation",
                        "pagination",
                        "scrollbar"
                    ].indexOf(i14) >= 0 && !0 === a8[i14] && (a8[i14] = {
                        auto: !0
                    }), !(i14 in a8) || !("enabled" in s10)) return;
                    !0 === a8[i14] && (a8[i14] = {
                        enabled: !0
                    }), "object" != typeof a8[i14] || "enabled" in a8[i14] || (a8[i14].enabled = !0), a8[i14] || (a8[i14] = {
                        enabled: !1
                    });
                }
            });
            var o11, d11, p14 = M({
            }, W);
            return l7.useParams(p14), l7.params = M({
            }, p14, _, a8), l7.originalParams = M({
            }, l7.params), l7.passedParams = M({
            }, a8), l7.params && l7.params.on && Object.keys(l7.params.on).forEach(function(e3) {
                l7.on(e3, l7.params.on[e3]);
            }), l7.params && l7.params.onAny && l7.onAny(l7.params.onAny), l7.$ = m, M(l7, {
                enabled: l7.params.enabled,
                el: e2,
                classNames: [],
                slides: m(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function() {
                    return "horizontal" === l7.params.direction;
                },
                isVertical: function() {
                    return "vertical" === l7.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: l7.params.allowSlideNext,
                allowSlidePrev: l7.params.allowSlidePrev,
                touchEvents: (o11 = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel"
                ], d11 = [
                    "mousedown",
                    "mousemove",
                    "mouseup"
                ], l7.support.pointerEvents && (d11 = [
                    "pointerdown",
                    "pointermove",
                    "pointerup"
                ]), l7.touchEventsTouch = {
                    start: o11[0],
                    move: o11[1],
                    end: o11[2],
                    cancel: o11[3]
                }, l7.touchEventsDesktop = {
                    start: d11[0],
                    move: d11[1],
                    end: d11[2]
                }, l7.support.touch || !l7.params.simulateTouch ? l7.touchEventsTouch : l7.touchEventsDesktop),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: l7.params.focusableElements,
                    lastClickTime: x(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: l7.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), l7.useModules(), l7.emit("_swiper"), l7.params.init && l7.init(), l7;
        }
        var a8, i13, s9, n13 = t7.prototype;
        return n13.enable = function() {
            var e2 = this;
            e2.enabled || (e2.enabled = !0, e2.params.grabCursor && e2.setGrabCursor(), e2.emit("enable"));
        }, n13.disable = function() {
            var e2 = this;
            e2.enabled && (e2.enabled = !1, e2.params.grabCursor && e2.unsetGrabCursor(), e2.emit("disable"));
        }, n13.setProgress = function(e2, t9) {
            var a9 = this;
            e2 = Math.min(Math.max(e2, 0), 1);
            var i15 = a9.minTranslate(), s11 = (a9.maxTranslate() - i15) * e2 + i15;
            a9.translateTo(s11, (void 0) === t9 ? 0 : t9), a9.updateActiveIndex(), a9.updateSlidesClasses();
        }, n13.emitContainerClasses = function() {
            var e2 = this;
            if (e2.params._emitClasses && e2.el) {
                var t9 = e2.el.className.split(" ").filter(function(t10) {
                    return 0 === t10.indexOf("swiper-container") || 0 === t10.indexOf(e2.params.containerModifierClass);
                });
                e2.emit("_containerClasses", t9.join(" "));
            }
        }, n13.getSlideClasses = function(e2) {
            var t10 = this;
            return e2.className.split(" ").filter(function(e3) {
                return 0 === e3.indexOf("swiper-slide") || 0 === e3.indexOf(t10.params.slideClass);
            }).join(" ");
        }, n13.emitSlidesClasses = function() {
            var e2 = this;
            if (e2.params._emitClasses && e2.el) {
                var t10 = [];
                e2.slides.each(function(a9) {
                    var i15 = e2.getSlideClasses(a9);
                    t10.push({
                        slideEl: a9,
                        classNames: i15
                    }), e2.emit("_slideClass", a9, i15);
                }), e2.emit("_slideClasses", t10);
            }
        }, n13.slidesPerViewDynamic = function() {
            var e2 = this, t11 = e2.params, a9 = e2.slides, i15 = e2.slidesGrid, s11 = e2.size, r7 = e2.activeIndex, n14 = 1;
            if (t11.centeredSlides) {
                for(var l7, o11 = a9[r7].swiperSlideSize, d11 = r7 + 1; d11 < a9.length; d11 += 1)a9[d11] && !l7 && (n14 += 1, (o11 += a9[d11].swiperSlideSize) > s11 && (l7 = !0));
                for(var p14 = r7 - 1; p14 >= 0; p14 -= 1)a9[p14] && !l7 && (n14 += 1, (o11 += a9[p14].swiperSlideSize) > s11 && (l7 = !0));
            } else for(var u11 = r7 + 1; u11 < a9.length; u11 += 1)i15[u11] - i15[r7] < s11 && (n14 += 1);
            return n14;
        }, n13.update = function() {
            var e2 = this;
            if (e2 && !e2.destroyed) {
                var t11 = e2.snapGrid, a9 = e2.params;
                a9.breakpoints && e2.setBreakpoint(), e2.updateSize(), e2.updateSlides(), e2.updateProgress(), e2.updateSlidesClasses(), e2.params.freeMode ? (i15(), e2.params.autoHeight && e2.updateAutoHeight()) : (("auto" === e2.params.slidesPerView || e2.params.slidesPerView > 1) && e2.isEnd && !e2.params.centeredSlides ? e2.slideTo(e2.slides.length - 1, 0, !1, !0) : e2.slideTo(e2.activeIndex, 0, !1, !0)) || i15(), a9.watchOverflow && t11 !== e2.snapGrid && e2.checkOverflow(), e2.emit("update");
            }
            function i15() {
                var t12 = e2.rtlTranslate ? -1 * e2.translate : e2.translate, a10 = Math.min(Math.max(t12, e2.maxTranslate()), e2.minTranslate());
                e2.setTranslate(a10), e2.updateActiveIndex(), e2.updateSlidesClasses();
            }
        }, n13.changeDirection = function(e2, t12) {
            (void 0) === t12 && (t12 = !0);
            var a10 = this, i15 = a10.params.direction;
            return e2 || (e2 = "horizontal" === i15 ? "vertical" : "horizontal"), e2 === i15 || "horizontal" !== e2 && "vertical" !== e2 || (a10.$el.removeClass("" + a10.params.containerModifierClass + i15).addClass("" + a10.params.containerModifierClass + e2), a10.emitContainerClasses(), a10.params.direction = e2, a10.slides.each(function(t13) {
                "vertical" === e2 ? t13.style.width = "" : t13.style.height = "";
            }), a10.emit("changeDirection"), t12 && a10.update()), a10;
        }, n13.mount = function(e2) {
            var t12 = this;
            if (t12.mounted) return !0;
            var a10 = m(e2 || t12.params.el);
            if (!(e2 = a10[0])) return !1;
            e2.swiper = t12;
            var i15 = function() {
                return "." + (t12.params.wrapperClass || "").trim().split(" ").join(".");
            }, s11 = function() {
                if (e2 && e2.shadowRoot && e2.shadowRoot.querySelector) {
                    var t13 = m(e2.shadowRoot.querySelector(i15()));
                    return t13.children = function(e3) {
                        return a10.children(e3);
                    }, t13;
                }
                return a10.children(i15());
            }();
            if (0 === s11.length && t12.params.createElements) {
                var n14 = r().createElement("div");
                s11 = m(n14), n14.className = t12.params.wrapperClass, a10.append(n14), a10.children("." + t12.params.slideClass).each(function(e3) {
                    s11.append(e3);
                });
            }
            return M(t12, {
                $el: a10,
                el: e2,
                $wrapperEl: s11,
                wrapperEl: s11[0],
                mounted: !0,
                rtl: "rtl" === e2.dir.toLowerCase() || "rtl" === a10.css("direction"),
                rtlTranslate: "horizontal" === t12.params.direction && ("rtl" === e2.dir.toLowerCase() || "rtl" === a10.css("direction")),
                wrongRTL: "-webkit-box" === s11.css("display")
            }), !0;
        }, n13.init = function(e2) {
            var t12 = this;
            return t12.initialized || !1 === t12.mount(e2) || (t12.emit("beforeInit"), t12.params.breakpoints && t12.setBreakpoint(), t12.addClasses(), t12.params.loop && t12.loopCreate(), t12.updateSize(), t12.updateSlides(), t12.params.watchOverflow && t12.checkOverflow(), t12.params.grabCursor && t12.enabled && t12.setGrabCursor(), t12.params.preloadImages && t12.preloadImages(), t12.params.loop ? t12.slideTo(t12.params.initialSlide + t12.loopedSlides, 0, t12.params.runCallbacksOnInit, !1, !0) : t12.slideTo(t12.params.initialSlide, 0, t12.params.runCallbacksOnInit, !1, !0), t12.attachEvents(), t12.initialized = !0, t12.emit("init"), t12.emit("afterInit")), t12;
        }, n13.destroy = function(e2, t12) {
            (void 0) === e2 && (e2 = !0), (void 0) === t12 && (t12 = !0);
            var a10, i15 = this, s11 = i15.params, r7 = i15.$el, n15 = i15.$wrapperEl, l8 = i15.slides;
            return (void 0) === i15.params || i15.destroyed || (i15.emit("beforeDestroy"), i15.initialized = !1, i15.detachEvents(), s11.loop && i15.loopDestroy(), t12 && (i15.removeClasses(), r7.removeAttr("style"), n15.removeAttr("style"), l8 && l8.length && l8.removeClass([
                s11.slideVisibleClass,
                s11.slideActiveClass,
                s11.slideNextClass,
                s11.slidePrevClass
            ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i15.emit("destroy"), Object.keys(i15.eventsListeners).forEach(function(e3) {
                i15.off(e3);
            }), !1 !== e2 && (i15.$el[0].swiper = null, a10 = i15, Object.keys(a10).forEach(function(e3) {
                try {
                    a10[e3] = null;
                } catch (e4) {
                }
                try {
                    delete a10[e3];
                } catch (e4) {
                }
            })), i15.destroyed = !0), null;
        }, t7.extendDefaults = function(e2) {
            M(_, e2);
        }, t7.installModule = function(e2) {
            t7.prototype.modules || (t7.prototype.modules = {
            });
            var a10 = e2.name || Object.keys(t7.prototype.modules).length + "_" + x();
            t7.prototype.modules[a10] = e2;
        }, t7.use = function(e2) {
            return Array.isArray(e2) ? (e2.forEach(function(e3) {
                return t7.installModule(e3);
            }), t7) : (t7.installModule(e2), t7);
        }, a8 = t7, s9 = [
            {
                key: "extendedDefaults",
                get: function() {
                    return _;
                }
            },
            {
                key: "defaults",
                get: function() {
                    return W;
                }
            }
        ], i13 = null, s9 && e(a8, s9), t7;
    }();
    Object.keys(F).forEach(function(e2) {
        Object.keys(F[e2]).forEach(function(t7) {
            q.prototype[t7] = F[e2][t7];
        });
    }), q.use([
        O,
        D
    ]);
    var j = {
        update: function(e2) {
            var t7 = this, a8 = t7.params, i13 = a8.slidesPerView, s9 = a8.slidesPerGroup, r7 = a8.centeredSlides, n13 = t7.params.virtual, l8 = n13.addSlidesBefore, o12 = n13.addSlidesAfter, d12 = t7.virtual, p15 = d12.from, u11 = d12.to, c10 = d12.slides, h8 = d12.slidesGrid, v7 = d12.renderSlide, f5 = d12.offset;
            t7.updateActiveIndex();
            var m3, g4, b3, y2 = t7.activeIndex || 0;
            m3 = t7.rtlTranslate ? "right" : t7.isHorizontal() ? "left" : "top", r7 ? (g4 = Math.floor(i13 / 2) + s9 + o12, b3 = Math.floor(i13 / 2) + s9 + l8) : (g4 = i13 + (s9 - 1) + o12, b3 = s9 + l8);
            var w2 = Math.max((y2 || 0) - b3, 0), E2 = Math.min((y2 || 0) + g4, c10.length - 1), x2 = (t7.slidesGrid[w2] || 0) - (t7.slidesGrid[0] || 0);
            function T4() {
                t7.updateSlides(), t7.updateProgress(), t7.updateSlidesClasses(), t7.lazy && t7.params.lazy.enabled && t7.lazy.load();
            }
            if (M(t7.virtual, {
                from: w2,
                to: E2,
                offset: x2,
                slidesGrid: t7.slidesGrid
            }), p15 === w2 && u11 === E2 && !e2) return t7.slidesGrid !== h8 && x2 !== f5 && t7.slides.css(m3, x2 + "px"), void t7.updateProgress();
            if (t7.params.virtual.renderExternal) return t7.params.virtual.renderExternal.call(t7, {
                offset: x2,
                from: w2,
                to: E2,
                slides: function() {
                    for(var e3 = [], t12 = w2; t12 <= E2; t12 += 1)e3.push(c10[t12]);
                    return e3;
                }()
            }), void (t7.params.virtual.renderExternalUpdate && T4());
            var C4 = [], S4 = [];
            if (e2) t7.$wrapperEl.find("." + t7.params.slideClass).remove();
            else for(var z3 = p15; z3 <= u11; z3 += 1)(z3 < w2 || z3 > E2) && t7.$wrapperEl.find("." + t7.params.slideClass + '[data-swiper-slide-index="' + z3 + '"]').remove();
            for(var P3 = 0; P3 < c10.length; P3 += 1)P3 >= w2 && P3 <= E2 && ((void 0) === u11 || e2 ? S4.push(P3) : (P3 > u11 && S4.push(P3), P3 < p15 && C4.push(P3)));
            S4.forEach(function(e3) {
                t7.$wrapperEl.append(v7(c10[e3], e3));
            }), C4.sort(function(e3, t12) {
                return t12 - e3;
            }).forEach(function(e3) {
                t7.$wrapperEl.prepend(v7(c10[e3], e3));
            }), t7.$wrapperEl.children(".swiper-slide").css(m3, x2 + "px"), T4();
        },
        renderSlide: function(e2, t7) {
            var a8 = this, i13 = a8.params.virtual;
            if (i13.cache && a8.virtual.cache[t7]) return a8.virtual.cache[t7];
            var s9 = i13.renderSlide ? m(i13.renderSlide.call(a8, e2, t7)) : m('<div class="' + a8.params.slideClass + '" data-swiper-slide-index="' + t7 + '">' + e2 + "</div>");
            return s9.attr("data-swiper-slide-index") || s9.attr("data-swiper-slide-index", t7), i13.cache && (a8.virtual.cache[t7] = s9), s9;
        },
        appendSlide: function(e2) {
            var t7 = this;
            if ("object" == typeof e2 && "length" in e2) for(var a8 = 0; a8 < e2.length; a8 += 1)e2[a8] && t7.virtual.slides.push(e2[a8]);
            else t7.virtual.slides.push(e2);
            t7.virtual.update(!0);
        },
        prependSlide: function(e2) {
            var t7 = this, a8 = t7.activeIndex, i13 = a8 + 1, s9 = 1;
            if (Array.isArray(e2)) {
                for(var r7 = 0; r7 < e2.length; r7 += 1)e2[r7] && t7.virtual.slides.unshift(e2[r7]);
                i13 = a8 + e2.length, s9 = e2.length;
            } else t7.virtual.slides.unshift(e2);
            if (t7.params.virtual.cache) {
                var n13 = t7.virtual.cache, l8 = {
                };
                Object.keys(n13).forEach(function(e3) {
                    var t12 = n13[e3], a10 = t12.attr("data-swiper-slide-index");
                    a10 && t12.attr("data-swiper-slide-index", parseInt(a10, 10) + 1), l8[parseInt(e3, 10) + s9] = t12;
                }), t7.virtual.cache = l8;
            }
            t7.virtual.update(!0), t7.slideTo(i13, 0);
        },
        removeSlide: function(e2) {
            var t7 = this;
            if (null != e2) {
                var a8 = t7.activeIndex;
                if (Array.isArray(e2)) for(var i13 = e2.length - 1; i13 >= 0; i13 -= 1)t7.virtual.slides.splice(e2[i13], 1), t7.params.virtual.cache && delete t7.virtual.cache[e2[i13]], e2[i13] < a8 && (a8 -= 1), a8 = Math.max(a8, 0);
                else t7.virtual.slides.splice(e2, 1), t7.params.virtual.cache && delete t7.virtual.cache[e2], e2 < a8 && (a8 -= 1), a8 = Math.max(a8, 0);
                t7.virtual.update(!0), t7.slideTo(a8, 0);
            }
        },
        removeAllSlides: function() {
            var e2 = this;
            e2.virtual.slides = [], e2.params.virtual.cache && (e2.virtual.cache = {
            }), e2.virtual.update(!0), e2.slideTo(0, 0);
        }
    }, U = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            z(this, {
                virtual: t({
                }, j, {
                    slides: this.params.virtual.slides,
                    cache: {
                    }
                })
            });
        },
        on: {
            beforeInit: function(e2) {
                if (e2.params.virtual.enabled) {
                    e2.classNames.push(e2.params.containerModifierClass + "virtual");
                    var t7 = {
                        watchSlidesProgress: !0
                    };
                    M(e2.params, t7), M(e2.originalParams, t7), e2.params.initialSlide || e2.virtual.update();
                }
            },
            setTranslate: function(e2) {
                e2.params.virtual.enabled && e2.virtual.update();
            }
        }
    }, K = {
        handle: function(e2) {
            var t12 = this;
            if (t12.enabled) {
                var a10 = l(), i15 = r(), s9 = t12.rtlTranslate, n15 = e2;
                n15.originalEvent && (n15 = n15.originalEvent);
                var o12 = n15.keyCode || n15.charCode, d12 = t12.params.keyboard.pageUpDown, p15 = d12 && 33 === o12, u11 = d12 && 34 === o12, c10 = 37 === o12, h8 = 39 === o12, v7 = 38 === o12, f5 = 40 === o12;
                if (!t12.allowSlideNext && (t12.isHorizontal() && h8 || t12.isVertical() && f5 || u11)) return !1;
                if (!t12.allowSlidePrev && (t12.isHorizontal() && c10 || t12.isVertical() && v7 || p15)) return !1;
                if (!(n15.shiftKey || n15.altKey || n15.ctrlKey || n15.metaKey || i15.activeElement && i15.activeElement.nodeName && ("input" === i15.activeElement.nodeName.toLowerCase() || "textarea" === i15.activeElement.nodeName.toLowerCase()))) {
                    if (t12.params.keyboard.onlyInViewport && (p15 || u11 || c10 || h8 || v7 || f5)) {
                        var m3 = !1;
                        if (t12.$el.parents("." + t12.params.slideClass).length > 0 && 0 === t12.$el.parents("." + t12.params.slideActiveClass).length) return;
                        var g4 = t12.$el, b3 = g4[0].clientWidth, y2 = g4[0].clientHeight, w2 = a10.innerWidth, E2 = a10.innerHeight, x2 = t12.$el.offset();
                        s9 && (x2.left -= t12.$el[0].scrollLeft);
                        for(var T4 = [
                            [
                                x2.left,
                                x2.top
                            ],
                            [
                                x2.left + b3,
                                x2.top
                            ],
                            [
                                x2.left,
                                x2.top + y2
                            ],
                            [
                                x2.left + b3,
                                x2.top + y2
                            ]
                        ], C4 = 0; C4 < T4.length; C4 += 1){
                            var S4 = T4[C4];
                            if (S4[0] >= 0 && S4[0] <= w2 && S4[1] >= 0 && S4[1] <= E2) {
                                if (0 === S4[0] && 0 === S4[1]) continue;
                                m3 = !0;
                            }
                        }
                        if (!m3) return;
                    }
                    t12.isHorizontal() ? ((p15 || u11 || c10 || h8) && (n15.preventDefault ? n15.preventDefault() : n15.returnValue = !1), ((u11 || h8) && !s9 || (p15 || c10) && s9) && t12.slideNext(), ((p15 || c10) && !s9 || (u11 || h8) && s9) && t12.slidePrev()) : ((p15 || u11 || v7 || f5) && (n15.preventDefault ? n15.preventDefault() : n15.returnValue = !1), (u11 || f5) && t12.slideNext(), (p15 || v7) && t12.slidePrev()), t12.emit("keyPress", o12);
                }
            }
        },
        enable: function() {
            var e2 = this, t12 = r();
            e2.keyboard.enabled || (m(t12).on("keydown", e2.keyboard.handle), e2.keyboard.enabled = !0);
        },
        disable: function() {
            var e2 = this, t12 = r();
            e2.keyboard.enabled && (m(t12).off("keydown", e2.keyboard.handle), e2.keyboard.enabled = !1);
        }
    }, Z = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        },
        create: function() {
            z(this, {
                keyboard: t({
                    enabled: !1
                }, K)
            });
        },
        on: {
            init: function(e2) {
                e2.params.keyboard.enabled && e2.keyboard.enable();
            },
            destroy: function(e2) {
                e2.keyboard.enabled && e2.keyboard.disable();
            }
        }
    };
    var J = {
        lastScrollTime: x(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function() {
            return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : (function() {
                var e2 = r(), t12 = "onwheel", a11 = t12 in e2;
                if (!a11) {
                    var i16 = e2.createElement("div");
                    i16.setAttribute(t12, "return;"), a11 = "function" == typeof i16.onwheel;
                }
                return !a11 && e2.implementation && e2.implementation.hasFeature && !0 !== e2.implementation.hasFeature("", "") && (a11 = e2.implementation.hasFeature("Events.wheel", "3.0")), a11;
            })() ? "wheel" : "mousewheel";
        },
        normalize: function(e2) {
            var t12 = 0, a11 = 0, i17 = 0, s11 = 0;
            return "detail" in e2 && (a11 = e2.detail), "wheelDelta" in e2 && (a11 = -e2.wheelDelta / 120), "wheelDeltaY" in e2 && (a11 = -e2.wheelDeltaY / 120), "wheelDeltaX" in e2 && (t12 = -e2.wheelDeltaX / 120), "axis" in e2 && e2.axis === e2.HORIZONTAL_AXIS && (t12 = a11, a11 = 0), i17 = 10 * t12, s11 = 10 * a11, "deltaY" in e2 && (s11 = e2.deltaY), "deltaX" in e2 && (i17 = e2.deltaX), e2.shiftKey && !i17 && (i17 = s11, s11 = 0), (i17 || s11) && e2.deltaMode && (1 === e2.deltaMode ? (i17 *= 40, s11 *= 40) : (i17 *= 800, s11 *= 800)), i17 && !t12 && (t12 = i17 < 1 ? -1 : 1), s11 && !a11 && (a11 = s11 < 1 ? -1 : 1), {
                spinX: t12,
                spinY: a11,
                pixelX: i17,
                pixelY: s11
            };
        },
        handleMouseEnter: function() {
            this.enabled && (this.mouseEntered = !0);
        },
        handleMouseLeave: function() {
            this.enabled && (this.mouseEntered = !1);
        },
        handle: function(e2) {
            var t12 = e2, a11 = this;
            if (a11.enabled) {
                var i17 = a11.params.mousewheel;
                a11.params.cssMode && t12.preventDefault();
                var s11 = a11.$el;
                if ("container" !== a11.params.mousewheel.eventsTarget && (s11 = m(a11.params.mousewheel.eventsTarget)), !a11.mouseEntered && !s11[0].contains(t12.target) && !i17.releaseOnEdges) return !0;
                t12.originalEvent && (t12 = t12.originalEvent);
                var r8 = 0, n16 = a11.rtlTranslate ? -1 : 1, l9 = J.normalize(t12);
                if (i17.forceToAxis) {
                    if (a11.isHorizontal()) {
                        if (!(Math.abs(l9.pixelX) > Math.abs(l9.pixelY))) return !0;
                        r8 = -l9.pixelX * n16;
                    } else {
                        if (!(Math.abs(l9.pixelY) > Math.abs(l9.pixelX))) return !0;
                        r8 = -l9.pixelY;
                    }
                } else r8 = Math.abs(l9.pixelX) > Math.abs(l9.pixelY) ? -l9.pixelX * n16 : -l9.pixelY;
                if (0 === r8) return !0;
                i17.invert && (r8 = -r8);
                var o13 = a11.getTranslate() + r8 * i17.sensitivity;
                if (o13 >= a11.minTranslate() && (o13 = a11.minTranslate()), o13 <= a11.maxTranslate() && (o13 = a11.maxTranslate()), (!!a11.params.loop || !(o13 === a11.minTranslate() || o13 === a11.maxTranslate())) && a11.params.nested && t12.stopPropagation(), a11.params.freeMode) {
                    var d13 = {
                        time: x(),
                        delta: Math.abs(r8),
                        direction: Math.sign(r8)
                    }, p16 = a11.mousewheel.lastEventBeforeSnap, u12 = p16 && d13.time < p16.time + 500 && d13.delta <= p16.delta && d13.direction === p16.direction;
                    if (!u12) {
                        a11.mousewheel.lastEventBeforeSnap = void 0, a11.params.loop && a11.loopFix();
                        var c11 = a11.getTranslate() + r8 * i17.sensitivity, h9 = a11.isBeginning, v8 = a11.isEnd;
                        if (c11 >= a11.minTranslate() && (c11 = a11.minTranslate()), c11 <= a11.maxTranslate() && (c11 = a11.maxTranslate()), a11.setTransition(0), a11.setTranslate(c11), a11.updateProgress(), a11.updateActiveIndex(), a11.updateSlidesClasses(), (!h9 && a11.isBeginning || !v8 && a11.isEnd) && a11.updateSlidesClasses(), a11.params.freeModeSticky) {
                            clearTimeout(a11.mousewheel.timeout), a11.mousewheel.timeout = void 0;
                            var f6 = a11.mousewheel.recentWheelEvents;
                            f6.length >= 15 && f6.shift();
                            var g5 = f6.length ? f6[f6.length - 1] : void 0, b4 = f6[0];
                            if (f6.push(d13), g5 && (d13.delta > g5.delta || d13.direction !== g5.direction)) f6.splice(0);
                            else if (f6.length >= 15 && d13.time - b4.time < 500 && b4.delta - d13.delta >= 1 && d13.delta <= 6) {
                                var y3 = r8 > 0 ? 0.8 : 0.2;
                                a11.mousewheel.lastEventBeforeSnap = d13, f6.splice(0), a11.mousewheel.timeout = E(function() {
                                    a11.slideToClosest(a11.params.speed, !0, void 0, y3);
                                }, 0);
                            }
                            a11.mousewheel.timeout || (a11.mousewheel.timeout = E(function() {
                                a11.mousewheel.lastEventBeforeSnap = d13, f6.splice(0), a11.slideToClosest(a11.params.speed, !0, void 0, 0.5);
                            }, 500));
                        }
                        if (u12 || a11.emit("scroll", t12), a11.params.autoplay && a11.params.autoplayDisableOnInteraction && a11.autoplay.stop(), c11 === a11.minTranslate() || c11 === a11.maxTranslate()) return !0;
                    }
                } else {
                    var w3 = {
                        time: x(),
                        delta: Math.abs(r8),
                        direction: Math.sign(r8),
                        raw: e2
                    }, T5 = a11.mousewheel.recentWheelEvents;
                    T5.length >= 2 && T5.shift();
                    var C5 = T5.length ? T5[T5.length - 1] : void 0;
                    if (T5.push(w3), C5 ? (w3.direction !== C5.direction || w3.delta > C5.delta || w3.time > C5.time + 150) && a11.mousewheel.animateSlider(w3) : a11.mousewheel.animateSlider(w3), a11.mousewheel.releaseScroll(w3)) return !0;
                }
                return t12.preventDefault ? t12.preventDefault() : t12.returnValue = !1, !1;
            }
        },
        animateSlider: function(e2) {
            var t12 = this, a11 = l();
            return !(this.params.mousewheel.thresholdDelta && e2.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x() - t12.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e2.delta >= 6 && x() - t12.mousewheel.lastScrollTime < 60 || (e2.direction < 0 ? t12.isEnd && !t12.params.loop || t12.animating || (t12.slideNext(), t12.emit("scroll", e2.raw)) : t12.isBeginning && !t12.params.loop || t12.animating || (t12.slidePrev(), t12.emit("scroll", e2.raw)), t12.mousewheel.lastScrollTime = (new a11.Date).getTime(), !1));
        },
        releaseScroll: function(e2) {
            var t12 = this, a11 = t12.params.mousewheel;
            if (e2.direction < 0) {
                if (t12.isEnd && !t12.params.loop && a11.releaseOnEdges) return !0;
            } else if (t12.isBeginning && !t12.params.loop && a11.releaseOnEdges) return !0;
            return !1;
        },
        enable: function() {
            var e2 = this, t12 = J.event();
            if (e2.params.cssMode) return e2.wrapperEl.removeEventListener(t12, e2.mousewheel.handle), !0;
            if (!t12) return !1;
            if (e2.mousewheel.enabled) return !1;
            var a11 = e2.$el;
            return "container" !== e2.params.mousewheel.eventsTarget && (a11 = m(e2.params.mousewheel.eventsTarget)), a11.on("mouseenter", e2.mousewheel.handleMouseEnter), a11.on("mouseleave", e2.mousewheel.handleMouseLeave), a11.on(t12, e2.mousewheel.handle), e2.mousewheel.enabled = !0, !0;
        },
        disable: function() {
            var e2 = this, t12 = J.event();
            if (e2.params.cssMode) return e2.wrapperEl.addEventListener(t12, e2.mousewheel.handle), !0;
            if (!t12) return !1;
            if (!e2.mousewheel.enabled) return !1;
            var a11 = e2.$el;
            return "container" !== e2.params.mousewheel.eventsTarget && (a11 = m(e2.params.mousewheel.eventsTarget)), a11.off(t12, e2.mousewheel.handle), e2.mousewheel.enabled = !1, !0;
        }
    }, Q = {
        toggleEl: function(e2, t12) {
            e2[t12 ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e2[0] && "BUTTON" === e2[0].tagName && (e2[0].disabled = t12);
        },
        update: function() {
            var e2 = this, t12 = e2.params.navigation, a11 = e2.navigation.toggleEl;
            if (!e2.params.loop) {
                var i18 = e2.navigation, s12 = i18.$nextEl, r9 = i18.$prevEl;
                r9 && r9.length > 0 && (e2.isBeginning ? a11(r9, !0) : a11(r9, !1), e2.params.watchOverflow && e2.enabled && r9[e2.isLocked ? "addClass" : "removeClass"](t12.lockClass)), s12 && s12.length > 0 && (e2.isEnd ? a11(s12, !0) : a11(s12, !1), e2.params.watchOverflow && e2.enabled && s12[e2.isLocked ? "addClass" : "removeClass"](t12.lockClass));
            }
        },
        onPrevClick: function(e2) {
            var t12 = this;
            e2.preventDefault(), t12.isBeginning && !t12.params.loop || t12.slidePrev();
        },
        onNextClick: function(e2) {
            var t12 = this;
            e2.preventDefault(), t12.isEnd && !t12.params.loop || t12.slideNext();
        },
        init: function() {
            var e2, t12, a11 = this, i19 = a11.params.navigation;
            (a11.params.navigation = k(a11.$el, a11.params.navigation, a11.params.createElements, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), i19.nextEl || i19.prevEl) && (i19.nextEl && (e2 = m(i19.nextEl), a11.params.uniqueNavElements && "string" == typeof i19.nextEl && e2.length > 1 && 1 === a11.$el.find(i19.nextEl).length && (e2 = a11.$el.find(i19.nextEl))), i19.prevEl && (t12 = m(i19.prevEl), a11.params.uniqueNavElements && "string" == typeof i19.prevEl && t12.length > 1 && 1 === a11.$el.find(i19.prevEl).length && (t12 = a11.$el.find(i19.prevEl))), e2 && e2.length > 0 && e2.on("click", a11.navigation.onNextClick), t12 && t12.length > 0 && t12.on("click", a11.navigation.onPrevClick), M(a11.navigation, {
                $nextEl: e2,
                nextEl: e2 && e2[0],
                $prevEl: t12,
                prevEl: t12 && t12[0]
            }), a11.enabled || (e2 && e2.addClass(i19.lockClass), t12 && t12.addClass(i19.lockClass)));
        },
        destroy: function() {
            var e2 = this, t12 = e2.navigation, a11 = t12.$nextEl, i19 = t12.$prevEl;
            a11 && a11.length && (a11.off("click", e2.navigation.onNextClick), a11.removeClass(e2.params.navigation.disabledClass)), i19 && i19.length && (i19.off("click", e2.navigation.onPrevClick), i19.removeClass(e2.params.navigation.disabledClass));
        }
    }, ee = {
        update: function() {
            var e2 = this, t12 = e2.rtl, a11 = e2.params.pagination;
            if (a11.el && e2.pagination.el && e2.pagination.$el && 0 !== e2.pagination.$el.length) {
                var i19, s13 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.slides.length : e2.slides.length, r10 = e2.pagination.$el, n17 = e2.params.loop ? Math.ceil((s13 - 2 * e2.loopedSlides) / e2.params.slidesPerGroup) : e2.snapGrid.length;
                if (e2.params.loop ? ((i19 = Math.ceil((e2.activeIndex - e2.loopedSlides) / e2.params.slidesPerGroup)) > s13 - 1 - 2 * e2.loopedSlides && (i19 -= s13 - 2 * e2.loopedSlides), i19 > n17 - 1 && (i19 -= n17), i19 < 0 && "bullets" !== e2.params.paginationType && (i19 = n17 + i19)) : i19 = (void 0) !== e2.snapIndex ? e2.snapIndex : e2.activeIndex || 0, "bullets" === a11.type && e2.pagination.bullets && e2.pagination.bullets.length > 0) {
                    var l10, o14, d14, p17 = e2.pagination.bullets;
                    if (a11.dynamicBullets && (e2.pagination.bulletSize = p17.eq(0)[e2.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r10.css(e2.isHorizontal() ? "width" : "height", e2.pagination.bulletSize * (a11.dynamicMainBullets + 4) + "px"), a11.dynamicMainBullets > 1 && (void 0) !== e2.previousIndex && (e2.pagination.dynamicBulletIndex += i19 - e2.previousIndex, e2.pagination.dynamicBulletIndex > a11.dynamicMainBullets - 1 ? e2.pagination.dynamicBulletIndex = a11.dynamicMainBullets - 1 : e2.pagination.dynamicBulletIndex < 0 && (e2.pagination.dynamicBulletIndex = 0)), l10 = i19 - e2.pagination.dynamicBulletIndex, d14 = ((o14 = l10 + (Math.min(p17.length, a11.dynamicMainBullets) - 1)) + l10) / 2), p17.removeClass(a11.bulletActiveClass + " " + a11.bulletActiveClass + "-next " + a11.bulletActiveClass + "-next-next " + a11.bulletActiveClass + "-prev " + a11.bulletActiveClass + "-prev-prev " + a11.bulletActiveClass + "-main"), r10.length > 1) p17.each(function(e3) {
                        var t14 = m(e3), s14 = t14.index();
                        s14 === i19 && t14.addClass(a11.bulletActiveClass), a11.dynamicBullets && (s14 >= l10 && s14 <= o14 && t14.addClass(a11.bulletActiveClass + "-main"), s14 === l10 && t14.prev().addClass(a11.bulletActiveClass + "-prev").prev().addClass(a11.bulletActiveClass + "-prev-prev"), s14 === o14 && t14.next().addClass(a11.bulletActiveClass + "-next").next().addClass(a11.bulletActiveClass + "-next-next"));
                    });
                    else {
                        var u13 = p17.eq(i19), c12 = u13.index();
                        if (u13.addClass(a11.bulletActiveClass), a11.dynamicBullets) {
                            for(var h10 = p17.eq(l10), v9 = p17.eq(o14), f7 = l10; f7 <= o14; f7 += 1)p17.eq(f7).addClass(a11.bulletActiveClass + "-main");
                            if (e2.params.loop) {
                                if (c12 >= p17.length - a11.dynamicMainBullets) {
                                    for(var g6 = a11.dynamicMainBullets; g6 >= 0; g6 -= 1)p17.eq(p17.length - g6).addClass(a11.bulletActiveClass + "-main");
                                    p17.eq(p17.length - a11.dynamicMainBullets - 1).addClass(a11.bulletActiveClass + "-prev");
                                } else h10.prev().addClass(a11.bulletActiveClass + "-prev").prev().addClass(a11.bulletActiveClass + "-prev-prev"), v9.next().addClass(a11.bulletActiveClass + "-next").next().addClass(a11.bulletActiveClass + "-next-next");
                            } else h10.prev().addClass(a11.bulletActiveClass + "-prev").prev().addClass(a11.bulletActiveClass + "-prev-prev"), v9.next().addClass(a11.bulletActiveClass + "-next").next().addClass(a11.bulletActiveClass + "-next-next");
                        }
                    }
                    if (a11.dynamicBullets) {
                        var b5 = Math.min(p17.length, a11.dynamicMainBullets + 4), y4 = (e2.pagination.bulletSize * b5 - e2.pagination.bulletSize) / 2 - d14 * e2.pagination.bulletSize, w4 = t12 ? "right" : "left";
                        p17.css(e2.isHorizontal() ? w4 : "top", y4 + "px");
                    }
                }
                if ("fraction" === a11.type && (r10.find(P(a11.currentClass)).text(a11.formatFractionCurrent(i19 + 1)), r10.find(P(a11.totalClass)).text(a11.formatFractionTotal(n17))), "progressbar" === a11.type) {
                    var E3;
                    E3 = a11.progressbarOpposite ? e2.isHorizontal() ? "vertical" : "horizontal" : e2.isHorizontal() ? "horizontal" : "vertical";
                    var x3 = (i19 + 1) / n17, T6 = 1, C6 = 1;
                    "horizontal" === E3 ? T6 = x3 : C6 = x3, r10.find(P(a11.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + T6 + ") scaleY(" + C6 + ")").transition(e2.params.speed);
                }
                "custom" === a11.type && a11.renderCustom ? (r10.html(a11.renderCustom(e2, i19 + 1, n17)), e2.emit("paginationRender", r10[0])) : e2.emit("paginationUpdate", r10[0]), e2.params.watchOverflow && e2.enabled && r10[e2.isLocked ? "addClass" : "removeClass"](a11.lockClass);
            }
        },
        render: function() {
            var e2 = this, t12 = e2.params.pagination;
            if (t12.el && e2.pagination.el && e2.pagination.$el && 0 !== e2.pagination.$el.length) {
                var a11 = e2.virtual && e2.params.virtual.enabled ? e2.virtual.slides.length : e2.slides.length, i20 = e2.pagination.$el, s14 = "";
                if ("bullets" === t12.type) {
                    var r11 = e2.params.loop ? Math.ceil((a11 - 2 * e2.loopedSlides) / e2.params.slidesPerGroup) : e2.snapGrid.length;
                    e2.params.freeMode && !e2.params.loop && r11 > a11 && (r11 = a11);
                    for(var n18 = 0; n18 < r11; n18 += 1)t12.renderBullet ? s14 += t12.renderBullet.call(e2, n18, t12.bulletClass) : s14 += "<" + t12.bulletElement + ' class="' + t12.bulletClass + '"></' + t12.bulletElement + ">";
                    i20.html(s14), e2.pagination.bullets = i20.find(P(t12.bulletClass));
                }
                "fraction" === t12.type && (s14 = t12.renderFraction ? t12.renderFraction.call(e2, t12.currentClass, t12.totalClass) : '<span class="' + t12.currentClass + '"></span> / <span class="' + t12.totalClass + '"></span>', i20.html(s14)), "progressbar" === t12.type && (s14 = t12.renderProgressbar ? t12.renderProgressbar.call(e2, t12.progressbarFillClass) : '<span class="' + t12.progressbarFillClass + '"></span>', i20.html(s14)), "custom" !== t12.type && e2.emit("paginationRender", e2.pagination.$el[0]);
            }
        },
        init: function() {
            var e2 = this;
            e2.params.pagination = k(e2.$el, e2.params.pagination, e2.params.createElements, {
                el: "swiper-pagination"
            });
            var t12 = e2.params.pagination;
            if (t12.el) {
                var a12 = m(t12.el);
                0 !== a12.length && (e2.params.uniqueNavElements && "string" == typeof t12.el && a12.length > 1 && (a12 = e2.$el.find(t12.el)), "bullets" === t12.type && t12.clickable && a12.addClass(t12.clickableClass), a12.addClass(t12.modifierClass + t12.type), "bullets" === t12.type && t12.dynamicBullets && (a12.addClass("" + t12.modifierClass + t12.type + "-dynamic"), e2.pagination.dynamicBulletIndex = 0, t12.dynamicMainBullets < 1 && (t12.dynamicMainBullets = 1)), "progressbar" === t12.type && t12.progressbarOpposite && a12.addClass(t12.progressbarOppositeClass), t12.clickable && a12.on("click", P(t12.bulletClass), function(t14) {
                    t14.preventDefault();
                    var a13 = m(this).index() * e2.params.slidesPerGroup;
                    e2.params.loop && (a13 += e2.loopedSlides), e2.slideTo(a13);
                }), M(e2.pagination, {
                    $el: a12,
                    el: a12[0]
                }), e2.enabled || a12.addClass(t12.lockClass));
            }
        },
        destroy: function() {
            var e2 = this, t12 = e2.params.pagination;
            if (t12.el && e2.pagination.el && e2.pagination.$el && 0 !== e2.pagination.$el.length) {
                var a13 = e2.pagination.$el;
                a13.removeClass(t12.hiddenClass), a13.removeClass(t12.modifierClass + t12.type), e2.pagination.bullets && e2.pagination.bullets.removeClass(t12.bulletActiveClass), t12.clickable && a13.off("click", P(t12.bulletClass));
            }
        }
    }, te = {
        setTranslate: function() {
            var e2 = this;
            if (e2.params.scrollbar.el && e2.scrollbar.el) {
                var t12 = e2.scrollbar, a14 = e2.rtlTranslate, i21 = e2.progress, s15 = t12.dragSize, r12 = t12.trackSize, n19 = t12.$dragEl, l11 = t12.$el, o15 = e2.params.scrollbar, d15 = s15, p18 = (r12 - s15) * i21;
                a14 ? (p18 = -p18) > 0 ? (d15 = s15 - p18, p18 = 0) : -p18 + s15 > r12 && (d15 = r12 + p18) : p18 < 0 ? (d15 = s15 + p18, p18 = 0) : p18 + s15 > r12 && (d15 = r12 - p18), e2.isHorizontal() ? (n19.transform("translate3d(" + p18 + "px, 0, 0)"), n19[0].style.width = d15 + "px") : (n19.transform("translate3d(0px, " + p18 + "px, 0)"), n19[0].style.height = d15 + "px"), o15.hide && (clearTimeout(e2.scrollbar.timeout), l11[0].style.opacity = 1, e2.scrollbar.timeout = setTimeout(function() {
                    l11[0].style.opacity = 0, l11.transition(400);
                }, 1000));
            }
        },
        setTransition: function(e2) {
            var t14 = this;
            t14.params.scrollbar.el && t14.scrollbar.el && t14.scrollbar.$dragEl.transition(e2);
        },
        updateSize: function() {
            var e2 = this;
            if (e2.params.scrollbar.el && e2.scrollbar.el) {
                var t14 = e2.scrollbar, a15 = t14.$dragEl, i22 = t14.$el;
                a15[0].style.width = "", a15[0].style.height = "";
                var s16, r13 = e2.isHorizontal() ? i22[0].offsetWidth : i22[0].offsetHeight, n20 = e2.size / e2.virtualSize, l12 = n20 * (r13 / e2.size);
                s16 = "auto" === e2.params.scrollbar.dragSize ? r13 * n20 : parseInt(e2.params.scrollbar.dragSize, 10), e2.isHorizontal() ? a15[0].style.width = s16 + "px" : a15[0].style.height = s16 + "px", i22[0].style.display = n20 >= 1 ? "none" : "", e2.params.scrollbar.hide && (i22[0].style.opacity = 0), M(t14, {
                    trackSize: r13,
                    divider: n20,
                    moveDivider: l12,
                    dragSize: s16
                }), e2.params.watchOverflow && e2.enabled && t14.$el[e2.isLocked ? "addClass" : "removeClass"](e2.params.scrollbar.lockClass);
            }
        },
        getPointerPosition: function(e2) {
            return this.isHorizontal() ? "touchstart" === e2.type || "touchmove" === e2.type ? e2.targetTouches[0].clientX : e2.clientX : "touchstart" === e2.type || "touchmove" === e2.type ? e2.targetTouches[0].clientY : e2.clientY;
        },
        setDragPosition: function(e2) {
            var t15, a16 = this, i23 = a16.scrollbar, s17 = a16.rtlTranslate, r14 = i23.$el, n21 = i23.dragSize, l13 = i23.trackSize, o16 = i23.dragStartPos;
            t15 = (i23.getPointerPosition(e2) - r14.offset()[a16.isHorizontal() ? "left" : "top"] - (null !== o16 ? o16 : n21 / 2)) / (l13 - n21), t15 = Math.max(Math.min(t15, 1), 0), s17 && (t15 = 1 - t15);
            var d16 = a16.minTranslate() + (a16.maxTranslate() - a16.minTranslate()) * t15;
            a16.updateProgress(d16), a16.setTranslate(d16), a16.updateActiveIndex(), a16.updateSlidesClasses();
        },
        onDragStart: function(e2) {
            var t15 = this, a16 = t15.params.scrollbar, i23 = t15.scrollbar, s17 = t15.$wrapperEl, r14 = i23.$el, n21 = i23.$dragEl;
            t15.scrollbar.isTouched = !0, t15.scrollbar.dragStartPos = e2.target === n21[0] || e2.target === n21 ? i23.getPointerPosition(e2) - e2.target.getBoundingClientRect()[t15.isHorizontal() ? "left" : "top"] : null, e2.preventDefault(), e2.stopPropagation(), s17.transition(100), n21.transition(100), i23.setDragPosition(e2), clearTimeout(t15.scrollbar.dragTimeout), r14.transition(0), a16.hide && r14.css("opacity", 1), t15.params.cssMode && t15.$wrapperEl.css("scroll-snap-type", "none"), t15.emit("scrollbarDragStart", e2);
        },
        onDragMove: function(e2) {
            var t15 = this, a16 = t15.scrollbar, i23 = t15.$wrapperEl, s17 = a16.$el, r14 = a16.$dragEl;
            t15.scrollbar.isTouched && (e2.preventDefault ? e2.preventDefault() : e2.returnValue = !1, a16.setDragPosition(e2), i23.transition(0), s17.transition(0), r14.transition(0), t15.emit("scrollbarDragMove", e2));
        },
        onDragEnd: function(e2) {
            var t15 = this, a16 = t15.params.scrollbar, i23 = t15.scrollbar, s17 = t15.$wrapperEl, r14 = i23.$el;
            t15.scrollbar.isTouched && (t15.scrollbar.isTouched = !1, t15.params.cssMode && (t15.$wrapperEl.css("scroll-snap-type", ""), s17.transition("")), a16.hide && (clearTimeout(t15.scrollbar.dragTimeout), t15.scrollbar.dragTimeout = E(function() {
                r14.css("opacity", 0), r14.transition(400);
            }, 1000)), t15.emit("scrollbarDragEnd", e2), a16.snapOnRelease && t15.slideToClosest());
        },
        enableDraggable: function() {
            var e2 = this;
            if (e2.params.scrollbar.el) {
                var t15 = r(), a16 = e2.scrollbar, i23 = e2.touchEventsTouch, s17 = e2.touchEventsDesktop, n21 = e2.params, l13 = e2.support, o16 = a16.$el[0], d16 = !(!l13.passiveListener || !n21.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, p19 = !(!l13.passiveListener || !n21.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                o16 && (l13.touch ? (o16.addEventListener(i23.start, e2.scrollbar.onDragStart, d16), o16.addEventListener(i23.move, e2.scrollbar.onDragMove, d16), o16.addEventListener(i23.end, e2.scrollbar.onDragEnd, p19)) : (o16.addEventListener(s17.start, e2.scrollbar.onDragStart, d16), t15.addEventListener(s17.move, e2.scrollbar.onDragMove, d16), t15.addEventListener(s17.end, e2.scrollbar.onDragEnd, p19)));
            }
        },
        disableDraggable: function() {
            var e2 = this;
            if (e2.params.scrollbar.el) {
                var t16 = r(), a17 = e2.scrollbar, i24 = e2.touchEventsTouch, s18 = e2.touchEventsDesktop, n22 = e2.params, l14 = e2.support, o17 = a17.$el[0], d17 = !(!l14.passiveListener || !n22.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, p20 = !(!l14.passiveListener || !n22.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                o17 && (l14.touch ? (o17.removeEventListener(i24.start, e2.scrollbar.onDragStart, d17), o17.removeEventListener(i24.move, e2.scrollbar.onDragMove, d17), o17.removeEventListener(i24.end, e2.scrollbar.onDragEnd, p20)) : (o17.removeEventListener(s18.start, e2.scrollbar.onDragStart, d17), t16.removeEventListener(s18.move, e2.scrollbar.onDragMove, d17), t16.removeEventListener(s18.end, e2.scrollbar.onDragEnd, p20)));
            }
        },
        init: function() {
            var e2 = this, t17 = e2.scrollbar, a18 = e2.$el;
            e2.params.scrollbar = k(a18, e2.params.scrollbar, e2.params.createElements, {
                el: "swiper-scrollbar"
            });
            var i25 = e2.params.scrollbar;
            if (i25.el) {
                var s19 = m(i25.el);
                e2.params.uniqueNavElements && "string" == typeof i25.el && s19.length > 1 && 1 === a18.find(i25.el).length && (s19 = a18.find(i25.el));
                var r14 = s19.find("." + e2.params.scrollbar.dragClass);
                0 === r14.length && (r14 = m('<div class="' + e2.params.scrollbar.dragClass + '"></div>'), s19.append(r14)), M(t17, {
                    $el: s19,
                    el: s19[0],
                    $dragEl: r14,
                    dragEl: r14[0]
                }), i25.draggable && t17.enableDraggable(), s19 && s19[e2.enabled ? "removeClass" : "addClass"](e2.params.scrollbar.lockClass);
            }
        },
        destroy: function() {
            this.scrollbar.disableDraggable();
        }
    }, ae = {
        setTransform: function(e2, t17) {
            var a18 = this.rtl, i25 = m(e2), s20 = a18 ? -1 : 1, r15 = i25.attr("data-swiper-parallax") || "0", n23 = i25.attr("data-swiper-parallax-x"), l15 = i25.attr("data-swiper-parallax-y"), o18 = i25.attr("data-swiper-parallax-scale"), d18 = i25.attr("data-swiper-parallax-opacity");
            if (n23 || l15 ? (n23 = n23 || "0", l15 = l15 || "0") : this.isHorizontal() ? (n23 = r15, l15 = "0") : (l15 = r15, n23 = "0"), n23 = n23.indexOf("%") >= 0 ? parseInt(n23, 10) * t17 * s20 + "%" : n23 * t17 * s20 + "px", l15 = l15.indexOf("%") >= 0 ? parseInt(l15, 10) * t17 + "%" : l15 * t17 + "px", null != d18) {
                var p21 = d18 - (d18 - 1) * (1 - Math.abs(t17));
                i25[0].style.opacity = p21;
            }
            if (null == o18) i25.transform("translate3d(" + n23 + ", " + l15 + ", 0px)");
            else {
                var u14 = o18 - (o18 - 1) * (1 - Math.abs(t17));
                i25.transform("translate3d(" + n23 + ", " + l15 + ", 0px) scale(" + u14 + ")");
            }
        },
        setTranslate: function() {
            var e2 = this, t17 = e2.$el, a18 = e2.slides, i25 = e2.progress, s20 = e2.snapGrid;
            t17.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t18) {
                e2.parallax.setTransform(t18, i25);
            }), a18.each(function(t18, a19) {
                var r15 = t18.progress;
                e2.params.slidesPerGroup > 1 && "auto" !== e2.params.slidesPerView && (r15 += Math.ceil(a19 / 2) - i25 * (s20.length - 1)), r15 = Math.min(Math.max(r15, -1), 1), m(t18).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t19) {
                    e2.parallax.setTransform(t19, r15);
                });
            });
        },
        setTransition: function(e2) {
            (void 0) === e2 && (e2 = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(t17) {
                var a18 = m(t17), i25 = parseInt(a18.attr("data-swiper-parallax-duration"), 10) || e2;
                0 === e2 && (i25 = 0), a18.transition(i25);
            });
        }
    }, ie = {
        getDistanceBetweenTouches: function(e2) {
            if (e2.targetTouches.length < 2) return 1;
            var t17 = e2.targetTouches[0].pageX, a18 = e2.targetTouches[0].pageY, i25 = e2.targetTouches[1].pageX, s20 = e2.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i25 - t17, 2) + Math.pow(s20 - a18, 2));
        },
        onGestureStart: function(e2) {
            var t17 = this, a18 = t17.support, i25 = t17.params.zoom, s20 = t17.zoom, r15 = s20.gesture;
            if (s20.fakeGestureTouched = !1, s20.fakeGestureMoved = !1, !a18.gestures) {
                if ("touchstart" !== e2.type || "touchstart" === e2.type && e2.targetTouches.length < 2) return;
                s20.fakeGestureTouched = !0, r15.scaleStart = ie.getDistanceBetweenTouches(e2);
            }
            r15.$slideEl && r15.$slideEl.length || (r15.$slideEl = m(e2.target).closest("." + t17.params.slideClass), 0 === r15.$slideEl.length && (r15.$slideEl = t17.slides.eq(t17.activeIndex)), r15.$imageEl = r15.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r15.$imageWrapEl = r15.$imageEl.parent("." + i25.containerClass), r15.maxRatio = r15.$imageWrapEl.attr("data-swiper-zoom") || i25.maxRatio, 0 !== r15.$imageWrapEl.length) ? (r15.$imageEl && r15.$imageEl.transition(0), t17.zoom.isScaling = !0) : r15.$imageEl = void 0;
        },
        onGestureChange: function(e2) {
            var t17 = this, a18 = t17.support, i25 = t17.params.zoom, s20 = t17.zoom, r15 = s20.gesture;
            if (!a18.gestures) {
                if ("touchmove" !== e2.type || "touchmove" === e2.type && e2.targetTouches.length < 2) return;
                s20.fakeGestureMoved = !0, r15.scaleMove = ie.getDistanceBetweenTouches(e2);
            }
            r15.$imageEl && 0 !== r15.$imageEl.length ? (a18.gestures ? s20.scale = e2.scale * s20.currentScale : s20.scale = r15.scaleMove / r15.scaleStart * s20.currentScale, s20.scale > r15.maxRatio && (s20.scale = r15.maxRatio - 1 + Math.pow(s20.scale - r15.maxRatio + 1, 0.5)), s20.scale < i25.minRatio && (s20.scale = i25.minRatio + 1 - Math.pow(i25.minRatio - s20.scale + 1, 0.5)), r15.$imageEl.transform("translate3d(0,0,0) scale(" + s20.scale + ")")) : "gesturechange" === e2.type && s20.onGestureStart(e2);
        },
        onGestureEnd: function(e2) {
            var t17 = this, a18 = t17.device, i25 = t17.support, s20 = t17.params.zoom, r15 = t17.zoom, n23 = r15.gesture;
            if (!i25.gestures) {
                if (!r15.fakeGestureTouched || !r15.fakeGestureMoved) return;
                if ("touchend" !== e2.type || "touchend" === e2.type && e2.changedTouches.length < 2 && !a18.android) return;
                r15.fakeGestureTouched = !1, r15.fakeGestureMoved = !1;
            }
            n23.$imageEl && 0 !== n23.$imageEl.length && (r15.scale = Math.max(Math.min(r15.scale, n23.maxRatio), s20.minRatio), n23.$imageEl.transition(t17.params.speed).transform("translate3d(0,0,0) scale(" + r15.scale + ")"), r15.currentScale = r15.scale, r15.isScaling = !1, 1 === r15.scale && (n23.$slideEl = void 0));
        },
        onTouchStart: function(e2) {
            var t17 = this.device, a18 = this.zoom, i25 = a18.gesture, s20 = a18.image;
            i25.$imageEl && 0 !== i25.$imageEl.length && (s20.isTouched || (t17.android && e2.cancelable && e2.preventDefault(), s20.isTouched = !0, s20.touchesStart.x = "touchstart" === e2.type ? e2.targetTouches[0].pageX : e2.pageX, s20.touchesStart.y = "touchstart" === e2.type ? e2.targetTouches[0].pageY : e2.pageY));
        },
        onTouchMove: function(e2) {
            var t17 = this, a18 = t17.zoom, i25 = a18.gesture, s20 = a18.image, r15 = a18.velocity;
            if (i25.$imageEl && 0 !== i25.$imageEl.length && (t17.allowClick = !1, s20.isTouched && i25.$slideEl)) {
                s20.isMoved || (s20.width = i25.$imageEl[0].offsetWidth, s20.height = i25.$imageEl[0].offsetHeight, s20.startX = T(i25.$imageWrapEl[0], "x") || 0, s20.startY = T(i25.$imageWrapEl[0], "y") || 0, i25.slideWidth = i25.$slideEl[0].offsetWidth, i25.slideHeight = i25.$slideEl[0].offsetHeight, i25.$imageWrapEl.transition(0));
                var n23 = s20.width * a18.scale, l15 = s20.height * a18.scale;
                if (!(n23 < i25.slideWidth && l15 < i25.slideHeight)) {
                    if (s20.minX = Math.min(i25.slideWidth / 2 - n23 / 2, 0), s20.maxX = -s20.minX, s20.minY = Math.min(i25.slideHeight / 2 - l15 / 2, 0), s20.maxY = -s20.minY, s20.touchesCurrent.x = "touchmove" === e2.type ? e2.targetTouches[0].pageX : e2.pageX, s20.touchesCurrent.y = "touchmove" === e2.type ? e2.targetTouches[0].pageY : e2.pageY, !s20.isMoved && !a18.isScaling) {
                        if (t17.isHorizontal() && (Math.floor(s20.minX) === Math.floor(s20.startX) && s20.touchesCurrent.x < s20.touchesStart.x || Math.floor(s20.maxX) === Math.floor(s20.startX) && s20.touchesCurrent.x > s20.touchesStart.x)) return void (s20.isTouched = !1);
                        if (!t17.isHorizontal() && (Math.floor(s20.minY) === Math.floor(s20.startY) && s20.touchesCurrent.y < s20.touchesStart.y || Math.floor(s20.maxY) === Math.floor(s20.startY) && s20.touchesCurrent.y > s20.touchesStart.y)) return void (s20.isTouched = !1);
                    }
                    e2.cancelable && e2.preventDefault(), e2.stopPropagation(), s20.isMoved = !0, s20.currentX = s20.touchesCurrent.x - s20.touchesStart.x + s20.startX, s20.currentY = s20.touchesCurrent.y - s20.touchesStart.y + s20.startY, s20.currentX < s20.minX && (s20.currentX = s20.minX + 1 - Math.pow(s20.minX - s20.currentX + 1, 0.8)), s20.currentX > s20.maxX && (s20.currentX = s20.maxX - 1 + Math.pow(s20.currentX - s20.maxX + 1, 0.8)), s20.currentY < s20.minY && (s20.currentY = s20.minY + 1 - Math.pow(s20.minY - s20.currentY + 1, 0.8)), s20.currentY > s20.maxY && (s20.currentY = s20.maxY - 1 + Math.pow(s20.currentY - s20.maxY + 1, 0.8)), r15.prevPositionX || (r15.prevPositionX = s20.touchesCurrent.x), r15.prevPositionY || (r15.prevPositionY = s20.touchesCurrent.y), r15.prevTime || (r15.prevTime = Date.now()), r15.x = (s20.touchesCurrent.x - r15.prevPositionX) / (Date.now() - r15.prevTime) / 2, r15.y = (s20.touchesCurrent.y - r15.prevPositionY) / (Date.now() - r15.prevTime) / 2, Math.abs(s20.touchesCurrent.x - r15.prevPositionX) < 2 && (r15.x = 0), Math.abs(s20.touchesCurrent.y - r15.prevPositionY) < 2 && (r15.y = 0), r15.prevPositionX = s20.touchesCurrent.x, r15.prevPositionY = s20.touchesCurrent.y, r15.prevTime = Date.now(), i25.$imageWrapEl.transform("translate3d(" + s20.currentX + "px, " + s20.currentY + "px,0)");
                }
            }
        },
        onTouchEnd: function() {
            var e2 = this.zoom, t17 = e2.gesture, a18 = e2.image, i25 = e2.velocity;
            if (t17.$imageEl && 0 !== t17.$imageEl.length) {
                if (!a18.isTouched || !a18.isMoved) return a18.isTouched = !1, void (a18.isMoved = !1);
                a18.isTouched = !1, a18.isMoved = !1;
                var s20 = 300, r15 = 300, n24 = i25.x * s20, l16 = a18.currentX + n24, o18 = i25.y * r15, d18 = a18.currentY + o18;
                0 !== i25.x && (s20 = Math.abs((l16 - a18.currentX) / i25.x)), 0 !== i25.y && (r15 = Math.abs((d18 - a18.currentY) / i25.y));
                var p22 = Math.max(s20, r15);
                a18.currentX = l16, a18.currentY = d18;
                var u15 = a18.width * e2.scale, c13 = a18.height * e2.scale;
                a18.minX = Math.min(t17.slideWidth / 2 - u15 / 2, 0), a18.maxX = -a18.minX, a18.minY = Math.min(t17.slideHeight / 2 - c13 / 2, 0), a18.maxY = -a18.minY, a18.currentX = Math.max(Math.min(a18.currentX, a18.maxX), a18.minX), a18.currentY = Math.max(Math.min(a18.currentY, a18.maxY), a18.minY), t17.$imageWrapEl.transition(p22).transform("translate3d(" + a18.currentX + "px, " + a18.currentY + "px,0)");
            }
        },
        onTransitionEnd: function() {
            var e2 = this, t17 = e2.zoom, a18 = t17.gesture;
            a18.$slideEl && e2.previousIndex !== e2.activeIndex && (a18.$imageEl && a18.$imageEl.transform("translate3d(0,0,0) scale(1)"), a18.$imageWrapEl && a18.$imageWrapEl.transform("translate3d(0,0,0)"), t17.scale = 1, t17.currentScale = 1, a18.$slideEl = void 0, a18.$imageEl = void 0, a18.$imageWrapEl = void 0);
        },
        toggle: function(e2) {
            var t17 = this.zoom;
            t17.scale && 1 !== t17.scale ? t17.out() : t17.in(e2);
        },
        in: function(e2) {
            var t17, a18, i25, s21, r16, n25, o19, d19, p23, u16, c14, h11, v10, f8, g7, b6, y5 = this, w5 = l(), E4 = y5.zoom, x4 = y5.params.zoom, T7 = E4.gesture, C7 = E4.image;
            (T7.$slideEl || (e2 && e2.target && (T7.$slideEl = m(e2.target).closest("." + y5.params.slideClass)), T7.$slideEl || (y5.params.virtual && y5.params.virtual.enabled && y5.virtual ? T7.$slideEl = y5.$wrapperEl.children("." + y5.params.slideActiveClass) : T7.$slideEl = y5.slides.eq(y5.activeIndex)), T7.$imageEl = T7.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), T7.$imageWrapEl = T7.$imageEl.parent("." + x4.containerClass)), T7.$imageEl && 0 !== T7.$imageEl.length && T7.$imageWrapEl && 0 !== T7.$imageWrapEl.length) && (T7.$slideEl.addClass("" + x4.zoomedSlideClass), (void 0) === C7.touchesStart.x && e2 ? (t17 = "touchend" === e2.type ? e2.changedTouches[0].pageX : e2.pageX, a18 = "touchend" === e2.type ? e2.changedTouches[0].pageY : e2.pageY) : (t17 = C7.touchesStart.x, a18 = C7.touchesStart.y), E4.scale = T7.$imageWrapEl.attr("data-swiper-zoom") || x4.maxRatio, E4.currentScale = T7.$imageWrapEl.attr("data-swiper-zoom") || x4.maxRatio, e2 ? (g7 = T7.$slideEl[0].offsetWidth, b6 = T7.$slideEl[0].offsetHeight, i25 = T7.$slideEl.offset().left + w5.scrollX + g7 / 2 - t17, s21 = T7.$slideEl.offset().top + w5.scrollY + b6 / 2 - a18, o19 = T7.$imageEl[0].offsetWidth, d19 = T7.$imageEl[0].offsetHeight, p23 = o19 * E4.scale, u16 = d19 * E4.scale, v10 = -(c14 = Math.min(g7 / 2 - p23 / 2, 0)), f8 = -(h11 = Math.min(b6 / 2 - u16 / 2, 0)), (r16 = i25 * E4.scale) < c14 && (r16 = c14), r16 > v10 && (r16 = v10), (n25 = s21 * E4.scale) < h11 && (n25 = h11), n25 > f8 && (n25 = f8)) : (r16 = 0, n25 = 0), T7.$imageWrapEl.transition(300).transform("translate3d(" + r16 + "px, " + n25 + "px,0)"), T7.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + E4.scale + ")"));
        },
        out: function() {
            var e2 = this, t17 = e2.zoom, a18 = e2.params.zoom, i25 = t17.gesture;
            i25.$slideEl || (e2.params.virtual && e2.params.virtual.enabled && e2.virtual ? i25.$slideEl = e2.$wrapperEl.children("." + e2.params.slideActiveClass) : i25.$slideEl = e2.slides.eq(e2.activeIndex), i25.$imageEl = i25.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i25.$imageWrapEl = i25.$imageEl.parent("." + a18.containerClass)), i25.$imageEl && 0 !== i25.$imageEl.length && i25.$imageWrapEl && 0 !== i25.$imageWrapEl.length && (t17.scale = 1, t17.currentScale = 1, i25.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i25.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i25.$slideEl.removeClass("" + a18.zoomedSlideClass), i25.$slideEl = void 0);
        },
        toggleGestures: function(e2) {
            var t17 = this, a18 = t17.zoom, i25 = a18.slideSelector, s21 = a18.passiveListener;
            t17.$wrapperEl[e2]("gesturestart", i25, a18.onGestureStart, s21), t17.$wrapperEl[e2]("gesturechange", i25, a18.onGestureChange, s21), t17.$wrapperEl[e2]("gestureend", i25, a18.onGestureEnd, s21);
        },
        enableGestures: function() {
            this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
        },
        disableGestures: function() {
            this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
        },
        enable: function() {
            var e2 = this, t17 = e2.support, a18 = e2.zoom;
            if (!a18.enabled) {
                a18.enabled = !0;
                var i25 = !("touchstart" !== e2.touchEvents.start || !t17.passiveListener || !e2.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, s21 = !t17.passiveListener || {
                    passive: !1,
                    capture: !0
                }, r16 = "." + e2.params.slideClass;
                e2.zoom.passiveListener = i25, e2.zoom.slideSelector = r16, t17.gestures ? (e2.$wrapperEl.on(e2.touchEvents.start, e2.zoom.enableGestures, i25), e2.$wrapperEl.on(e2.touchEvents.end, e2.zoom.disableGestures, i25)) : "touchstart" === e2.touchEvents.start && (e2.$wrapperEl.on(e2.touchEvents.start, r16, a18.onGestureStart, i25), e2.$wrapperEl.on(e2.touchEvents.move, r16, a18.onGestureChange, s21), e2.$wrapperEl.on(e2.touchEvents.end, r16, a18.onGestureEnd, i25), e2.touchEvents.cancel && e2.$wrapperEl.on(e2.touchEvents.cancel, r16, a18.onGestureEnd, i25)), e2.$wrapperEl.on(e2.touchEvents.move, "." + e2.params.zoom.containerClass, a18.onTouchMove, s21);
            }
        },
        disable: function() {
            var e2 = this, t17 = e2.zoom;
            if (t17.enabled) {
                var a18 = e2.support;
                e2.zoom.enabled = !1;
                var i26 = !("touchstart" !== e2.touchEvents.start || !a18.passiveListener || !e2.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, s22 = !a18.passiveListener || {
                    passive: !1,
                    capture: !0
                }, r17 = "." + e2.params.slideClass;
                a18.gestures ? (e2.$wrapperEl.off(e2.touchEvents.start, e2.zoom.enableGestures, i26), e2.$wrapperEl.off(e2.touchEvents.end, e2.zoom.disableGestures, i26)) : "touchstart" === e2.touchEvents.start && (e2.$wrapperEl.off(e2.touchEvents.start, r17, t17.onGestureStart, i26), e2.$wrapperEl.off(e2.touchEvents.move, r17, t17.onGestureChange, s22), e2.$wrapperEl.off(e2.touchEvents.end, r17, t17.onGestureEnd, i26), e2.touchEvents.cancel && e2.$wrapperEl.off(e2.touchEvents.cancel, r17, t17.onGestureEnd, i26)), e2.$wrapperEl.off(e2.touchEvents.move, "." + e2.params.zoom.containerClass, t17.onTouchMove, s22);
            }
        }
    }, se = {
        loadInSlide: function(e2, t17) {
            (void 0) === t17 && (t17 = !0);
            var a19 = this, i27 = a19.params.lazy;
            if ((void 0) !== e2 && 0 !== a19.slides.length) {
                var s23 = a19.virtual && a19.params.virtual.enabled ? a19.$wrapperEl.children("." + a19.params.slideClass + '[data-swiper-slide-index="' + e2 + '"]') : a19.slides.eq(e2), r18 = s23.find("." + i27.elementClass + ":not(." + i27.loadedClass + "):not(." + i27.loadingClass + ")");
                !s23.hasClass(i27.elementClass) || s23.hasClass(i27.loadedClass) || s23.hasClass(i27.loadingClass) || r18.push(s23[0]), 0 !== r18.length && r18.each(function(e3) {
                    var r19 = m(e3);
                    r19.addClass(i27.loadingClass);
                    var n25 = r19.attr("data-background"), l17 = r19.attr("data-src"), o19 = r19.attr("data-srcset"), d19 = r19.attr("data-sizes"), p23 = r19.parent("picture");
                    a19.loadImage(r19[0], l17 || n25, o19, d19, !1, function() {
                        if (null != a19 && a19 && (!a19 || a19.params) && !a19.destroyed) {
                            if (n25 ? (r19.css("background-image", 'url("' + n25 + '")'), r19.removeAttr("data-background")) : (o19 && (r19.attr("srcset", o19), r19.removeAttr("data-srcset")), d19 && (r19.attr("sizes", d19), r19.removeAttr("data-sizes")), p23.length && p23.children("source").each(function(e4) {
                                var t18 = m(e4);
                                t18.attr("data-srcset") && (t18.attr("srcset", t18.attr("data-srcset")), t18.removeAttr("data-srcset"));
                            }), l17 && (r19.attr("src", l17), r19.removeAttr("data-src"))), r19.addClass(i27.loadedClass).removeClass(i27.loadingClass), s23.find("." + i27.preloaderClass).remove(), a19.params.loop && t17) {
                                var e4 = s23.attr("data-swiper-slide-index");
                                if (s23.hasClass(a19.params.slideDuplicateClass)) {
                                    var u16 = a19.$wrapperEl.children('[data-swiper-slide-index="' + e4 + '"]:not(.' + a19.params.slideDuplicateClass + ")");
                                    a19.lazy.loadInSlide(u16.index(), !1);
                                } else {
                                    var c14 = a19.$wrapperEl.children("." + a19.params.slideDuplicateClass + '[data-swiper-slide-index="' + e4 + '"]');
                                    a19.lazy.loadInSlide(c14.index(), !1);
                                }
                            }
                            a19.emit("lazyImageReady", s23[0], r19[0]), a19.params.autoHeight && a19.updateAutoHeight();
                        }
                    }), a19.emit("lazyImageLoad", s23[0], r19[0]);
                });
            }
        },
        load: function() {
            var e2 = this, t17 = e2.$wrapperEl, a19 = e2.params, i27 = e2.slides, s24 = e2.activeIndex, r19 = e2.virtual && a19.virtual.enabled, n25 = a19.lazy, l17 = a19.slidesPerView;
            function o19(e3) {
                if (r19) {
                    if (t17.children("." + a19.slideClass + '[data-swiper-slide-index="' + e3 + '"]').length) return !0;
                } else if (i27[e3]) return !0;
                return !1;
            }
            function d19(e3) {
                return r19 ? m(e3).attr("data-swiper-slide-index") : m(e3).index();
            }
            if ("auto" === l17 && (l17 = 0), e2.lazy.initialImageLoaded || (e2.lazy.initialImageLoaded = !0), e2.params.watchSlidesVisibility) t17.children("." + a19.slideVisibleClass).each(function(t18) {
                var a20 = r19 ? m(t18).attr("data-swiper-slide-index") : m(t18).index();
                e2.lazy.loadInSlide(a20);
            });
            else if (l17 > 1) for(var p23 = s24; p23 < s24 + l17; p23 += 1)o19(p23) && e2.lazy.loadInSlide(p23);
            else e2.lazy.loadInSlide(s24);
            if (n25.loadPrevNext) {
                if (l17 > 1 || n25.loadPrevNextAmount && n25.loadPrevNextAmount > 1) {
                    for(var u17 = n25.loadPrevNextAmount, c15 = l17, h11 = Math.min(s24 + c15 + Math.max(u17, c15), i27.length), v10 = Math.max(s24 - Math.max(c15, u17), 0), f8 = s24 + l17; f8 < h11; f8 += 1)o19(f8) && e2.lazy.loadInSlide(f8);
                    for(var g7 = v10; g7 < s24; g7 += 1)o19(g7) && e2.lazy.loadInSlide(g7);
                } else {
                    var b6 = t17.children("." + a19.slideNextClass);
                    b6.length > 0 && e2.lazy.loadInSlide(d19(b6));
                    var y5 = t17.children("." + a19.slidePrevClass);
                    y5.length > 0 && e2.lazy.loadInSlide(d19(y5));
                }
            }
        },
        checkInViewOnLoad: function() {
            var e2 = l(), t17 = this;
            if (t17 && !t17.destroyed) {
                var a19 = t17.params.lazy.scrollingElement ? m(t17.params.lazy.scrollingElement) : m(e2), i27 = a19[0] === e2, s24 = i27 ? e2.innerWidth : a19[0].offsetWidth, r19 = i27 ? e2.innerHeight : a19[0].offsetHeight, n25 = t17.$el.offset(), o19 = !1;
                t17.rtlTranslate && (n25.left -= t17.$el[0].scrollLeft);
                for(var d19 = [
                    [
                        n25.left,
                        n25.top
                    ],
                    [
                        n25.left + t17.width,
                        n25.top
                    ],
                    [
                        n25.left,
                        n25.top + t17.height
                    ],
                    [
                        n25.left + t17.width,
                        n25.top + t17.height
                    ]
                ], p23 = 0; p23 < d19.length; p23 += 1){
                    var u18 = d19[p23];
                    if (u18[0] >= 0 && u18[0] <= s24 && u18[1] >= 0 && u18[1] <= r19) {
                        if (0 === u18[0] && 0 === u18[1]) continue;
                        o19 = !0;
                    }
                }
                var c16 = !("touchstart" !== t17.touchEvents.start || !t17.support.passiveListener || !t17.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                o19 ? (t17.lazy.load(), a19.off("scroll", t17.lazy.checkInViewOnLoad, c16)) : t17.lazy.scrollHandlerAttached || (t17.lazy.scrollHandlerAttached = !0, a19.on("scroll", t17.lazy.checkInViewOnLoad, c16));
            }
        }
    }, re = {
        LinearSpline: function(e2, t17) {
            var a20, i28, s25, r20, n26, l17 = function(e3, t18) {
                for(i28 = -1, a20 = e3.length; a20 - i28 > 1;)e3[s25 = a20 + i28 >> 1] <= t18 ? i28 = s25 : a20 = s25;
                return a20;
            };
            return this.x = e2, this.y = t17, this.lastIndex = e2.length - 1, this.interpolate = function(e3) {
                return e3 ? (n26 = l17(this.x, e3), r20 = n26 - 1, (e3 - this.x[r20]) * (this.y[n26] - this.y[r20]) / (this.x[n26] - this.x[r20]) + this.y[r20]) : 0;
            }, this;
        },
        getInterpolateFunction: function(e2) {
            var t17 = this;
            t17.controller.spline || (t17.controller.spline = t17.params.loop ? new re.LinearSpline(t17.slidesGrid, e2.slidesGrid) : new re.LinearSpline(t17.snapGrid, e2.snapGrid));
        },
        setTranslate: function(e2, t17) {
            var a20, i28, s25 = this, r20 = s25.controller.control, n26 = s25.constructor;
            function l17(e3) {
                var t18 = s25.rtlTranslate ? -s25.translate : s25.translate;
                "slide" === s25.params.controller.by && (s25.controller.getInterpolateFunction(e3), i28 = -s25.controller.spline.interpolate(-t18)), i28 && "container" !== s25.params.controller.by || (a20 = (e3.maxTranslate() - e3.minTranslate()) / (s25.maxTranslate() - s25.minTranslate()), i28 = (t18 - s25.minTranslate()) * a20 + e3.minTranslate()), s25.params.controller.inverse && (i28 = e3.maxTranslate() - i28), e3.updateProgress(i28), e3.setTranslate(i28, s25), e3.updateActiveIndex(), e3.updateSlidesClasses();
            }
            if (Array.isArray(r20)) for(var o20 = 0; o20 < r20.length; o20 += 1)r20[o20] !== t17 && r20[o20] instanceof n26 && l17(r20[o20]);
            else r20 instanceof n26 && t17 !== r20 && l17(r20);
        },
        setTransition: function(e2, t17) {
            var a20, i28 = this, s25 = i28.constructor, r20 = i28.controller.control;
            function n26(t18) {
                t18.setTransition(e2, i28), 0 !== e2 && (t18.transitionStart(), t18.params.autoHeight && E(function() {
                    t18.updateAutoHeight();
                }), t18.$wrapperEl.transitionEnd(function() {
                    r20 && (t18.params.loop && "slide" === i28.params.controller.by && t18.loopFix(), t18.transitionEnd());
                }));
            }
            if (Array.isArray(r20)) for(a20 = 0; a20 < r20.length; a20 += 1)r20[a20] !== t17 && r20[a20] instanceof s25 && n26(r20[a20]);
            else r20 instanceof s25 && t17 !== r20 && n26(r20);
        }
    }, ne = {
        getRandomNumber: function(e2) {
            (void 0) === e2 && (e2 = 16);
            return "x".repeat(e2).replace(/x/g, function() {
                return Math.round(16 * Math.random()).toString(16);
            });
        },
        makeElFocusable: function(e2) {
            return e2.attr("tabIndex", "0"), e2;
        },
        makeElNotFocusable: function(e2) {
            return e2.attr("tabIndex", "-1"), e2;
        },
        addElRole: function(e2, t17) {
            return e2.attr("role", t17), e2;
        },
        addElRoleDescription: function(e2, t17) {
            return e2.attr("aria-roledescription", t17), e2;
        },
        addElControls: function(e2, t17) {
            return e2.attr("aria-controls", t17), e2;
        },
        addElLabel: function(e2, t17) {
            return e2.attr("aria-label", t17), e2;
        },
        addElId: function(e2, t17) {
            return e2.attr("id", t17), e2;
        },
        addElLive: function(e2, t17) {
            return e2.attr("aria-live", t17), e2;
        },
        disableEl: function(e2) {
            return e2.attr("aria-disabled", !0), e2;
        },
        enableEl: function(e2) {
            return e2.attr("aria-disabled", !1), e2;
        },
        onEnterOrSpaceKey: function(e2) {
            if (13 === e2.keyCode || 32 === e2.keyCode) {
                var t17 = this, a20 = t17.params.a11y, i28 = m(e2.target);
                t17.navigation && t17.navigation.$nextEl && i28.is(t17.navigation.$nextEl) && (t17.isEnd && !t17.params.loop || t17.slideNext(), t17.isEnd ? t17.a11y.notify(a20.lastSlideMessage) : t17.a11y.notify(a20.nextSlideMessage)), t17.navigation && t17.navigation.$prevEl && i28.is(t17.navigation.$prevEl) && (t17.isBeginning && !t17.params.loop || t17.slidePrev(), t17.isBeginning ? t17.a11y.notify(a20.firstSlideMessage) : t17.a11y.notify(a20.prevSlideMessage)), t17.pagination && i28.is(P(t17.params.pagination.bulletClass)) && i28[0].click();
            }
        },
        notify: function(e2) {
            var t18 = this.a11y.liveRegion;
            0 !== t18.length && (t18.html(""), t18.html(e2));
        },
        updateNavigation: function() {
            var e2 = this;
            if (!e2.params.loop && e2.navigation) {
                var t18 = e2.navigation, a21 = t18.$nextEl, i29 = t18.$prevEl;
                i29 && i29.length > 0 && (e2.isBeginning ? (e2.a11y.disableEl(i29), e2.a11y.makeElNotFocusable(i29)) : (e2.a11y.enableEl(i29), e2.a11y.makeElFocusable(i29))), a21 && a21.length > 0 && (e2.isEnd ? (e2.a11y.disableEl(a21), e2.a11y.makeElNotFocusable(a21)) : (e2.a11y.enableEl(a21), e2.a11y.makeElFocusable(a21)));
            }
        },
        updatePagination: function() {
            var e2 = this, t19 = e2.params.a11y;
            e2.pagination && e2.params.pagination.clickable && e2.pagination.bullets && e2.pagination.bullets.length && e2.pagination.bullets.each(function(a22) {
                var i30 = m(a22);
                e2.a11y.makeElFocusable(i30), e2.params.pagination.renderBullet || (e2.a11y.addElRole(i30, "button"), e2.a11y.addElLabel(i30, t19.paginationBulletMessage.replace(/\{\{index\}\}/, i30.index() + 1)));
            });
        },
        init: function() {
            var e2 = this, t19 = e2.params.a11y;
            e2.$el.append(e2.a11y.liveRegion);
            var a22 = e2.$el;
            t19.containerRoleDescriptionMessage && e2.a11y.addElRoleDescription(a22, t19.containerRoleDescriptionMessage), t19.containerMessage && e2.a11y.addElLabel(a22, t19.containerMessage);
            var i30 = e2.$wrapperEl, s25 = i30.attr("id") || "swiper-wrapper-" + e2.a11y.getRandomNumber(16), r20 = e2.params.autoplay && e2.params.autoplay.enabled ? "off" : "polite";
            e2.a11y.addElId(i30, s25), e2.a11y.addElLive(i30, r20), t19.itemRoleDescriptionMessage && e2.a11y.addElRoleDescription(m(e2.slides), t19.itemRoleDescriptionMessage), e2.a11y.addElRole(m(e2.slides), t19.slideRole);
            var n26, l17, o20 = e2.params.loop ? e2.slides.filter(function(t20) {
                return !t20.classList.contains(e2.params.slideDuplicateClass);
            }).length : e2.slides.length;
            e2.slides.each(function(a23, i31) {
                var s26 = m(a23), r21 = e2.params.loop ? parseInt(s26.attr("data-swiper-slide-index"), 10) : i31, n27 = t19.slideLabelMessage.replace(/\{\{index\}\}/, r21 + 1).replace(/\{\{slidesLength\}\}/, o20);
                e2.a11y.addElLabel(s26, n27);
            }), e2.navigation && e2.navigation.$nextEl && (n26 = e2.navigation.$nextEl), e2.navigation && e2.navigation.$prevEl && (l17 = e2.navigation.$prevEl), n26 && n26.length && (e2.a11y.makeElFocusable(n26), "BUTTON" !== n26[0].tagName && (e2.a11y.addElRole(n26, "button"), n26.on("keydown", e2.a11y.onEnterOrSpaceKey)), e2.a11y.addElLabel(n26, t19.nextSlideMessage), e2.a11y.addElControls(n26, s25)), l17 && l17.length && (e2.a11y.makeElFocusable(l17), "BUTTON" !== l17[0].tagName && (e2.a11y.addElRole(l17, "button"), l17.on("keydown", e2.a11y.onEnterOrSpaceKey)), e2.a11y.addElLabel(l17, t19.prevSlideMessage), e2.a11y.addElControls(l17, s25)), e2.pagination && e2.params.pagination.clickable && e2.pagination.bullets && e2.pagination.bullets.length && e2.pagination.$el.on("keydown", P(e2.params.pagination.bulletClass), e2.a11y.onEnterOrSpaceKey);
        },
        destroy: function() {
            var e2, t19, a22 = this;
            a22.a11y.liveRegion && a22.a11y.liveRegion.length > 0 && a22.a11y.liveRegion.remove(), a22.navigation && a22.navigation.$nextEl && (e2 = a22.navigation.$nextEl), a22.navigation && a22.navigation.$prevEl && (t19 = a22.navigation.$prevEl), e2 && e2.off("keydown", a22.a11y.onEnterOrSpaceKey), t19 && t19.off("keydown", a22.a11y.onEnterOrSpaceKey), a22.pagination && a22.params.pagination.clickable && a22.pagination.bullets && a22.pagination.bullets.length && a22.pagination.$el.off("keydown", P(a22.params.pagination.bulletClass), a22.a11y.onEnterOrSpaceKey);
        }
    }, le = {
        init: function() {
            var e2 = this, t19 = l();
            if (e2.params.history) {
                if (!t19.history || !t19.history.pushState) return e2.params.history.enabled = !1, void (e2.params.hashNavigation.enabled = !0);
                var a22 = e2.history;
                a22.initialized = !0, a22.paths = le.getPathValues(e2.params.url), (a22.paths.key || a22.paths.value) && (a22.scrollToSlide(0, a22.paths.value, e2.params.runCallbacksOnInit), e2.params.history.replaceState || t19.addEventListener("popstate", e2.history.setHistoryPopState));
            }
        },
        destroy: function() {
            var e2 = l();
            this.params.history.replaceState || e2.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function() {
            var e2 = this;
            e2.history.paths = le.getPathValues(e2.params.url), e2.history.scrollToSlide(e2.params.speed, e2.history.paths.value, !1);
        },
        getPathValues: function(e2) {
            var t19 = l(), a23 = (e2 ? new URL(e2) : t19.location).pathname.slice(1).split("/").filter(function(e3) {
                return "" !== e3;
            }), i30 = a23.length;
            return {
                key: a23[i30 - 2],
                value: a23[i30 - 1]
            };
        },
        setHistory: function(e2, t19) {
            var a23 = this, i30 = l();
            if (a23.history.initialized && a23.params.history.enabled) {
                var s25;
                s25 = a23.params.url ? new URL(a23.params.url) : i30.location;
                var r20 = a23.slides.eq(t19), n26 = le.slugify(r20.attr("data-history"));
                if (a23.params.history.root.length > 0) {
                    var o20 = a23.params.history.root;
                    "/" === o20[o20.length - 1] && (o20 = o20.slice(0, o20.length - 1)), n26 = o20 + "/" + e2 + "/" + n26;
                } else s25.pathname.includes(e2) || (n26 = e2 + "/" + n26);
                var d20 = i30.history.state;
                d20 && d20.value === n26 || (a23.params.history.replaceState ? i30.history.replaceState({
                    value: n26
                }, null, n26) : i30.history.pushState({
                    value: n26
                }, null, n26));
            }
        },
        slugify: function(e2) {
            return e2.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        },
        scrollToSlide: function(e2, t19, a23) {
            var i30 = this;
            if (t19) for(var s26 = 0, r21 = i30.slides.length; s26 < r21; s26 += 1){
                var n27 = i30.slides.eq(s26);
                if (le.slugify(n27.attr("data-history")) === t19 && !n27.hasClass(i30.params.slideDuplicateClass)) {
                    var l17 = n27.index();
                    i30.slideTo(l17, e2, a23);
                }
            }
            else i30.slideTo(0, e2, a23);
        }
    }, oe = {
        onHashChange: function() {
            var e2 = this, t19 = r();
            e2.emit("hashChange");
            var a23 = t19.location.hash.replace("#", "");
            if (a23 !== e2.slides.eq(e2.activeIndex).attr("data-hash")) {
                var i30 = e2.$wrapperEl.children("." + e2.params.slideClass + '[data-hash="' + a23 + '"]').index();
                if ((void 0) === i30) return;
                e2.slideTo(i30);
            }
        },
        setHash: function() {
            var e2 = this, t19 = l(), a23 = r();
            if (e2.hashNavigation.initialized && e2.params.hashNavigation.enabled) {
                if (e2.params.hashNavigation.replaceState && t19.history && t19.history.replaceState) t19.history.replaceState(null, null, "#" + e2.slides.eq(e2.activeIndex).attr("data-hash")), e2.emit("hashSet");
                else {
                    var i31 = e2.slides.eq(e2.activeIndex), s26 = i31.attr("data-hash") || i31.attr("data-history");
                    a23.location.hash = s26 || "", e2.emit("hashSet");
                }
            }
        },
        init: function() {
            var e2 = this, t19 = r(), a23 = l();
            if (!(!e2.params.hashNavigation.enabled || e2.params.history && e2.params.history.enabled)) {
                e2.hashNavigation.initialized = !0;
                var i32 = t19.location.hash.replace("#", "");
                if (i32) for(var s27 = 0, n28 = e2.slides.length; s27 < n28; s27 += 1){
                    var o21 = e2.slides.eq(s27);
                    if ((o21.attr("data-hash") || o21.attr("data-history")) === i32 && !o21.hasClass(e2.params.slideDuplicateClass)) {
                        var d21 = o21.index();
                        e2.slideTo(d21, 0, e2.params.runCallbacksOnInit, !0);
                    }
                }
                e2.params.hashNavigation.watchState && m(a23).on("hashchange", e2.hashNavigation.onHashChange);
            }
        },
        destroy: function() {
            var e2 = l();
            this.params.hashNavigation.watchState && m(e2).off("hashchange", this.hashNavigation.onHashChange);
        }
    }, de = {
        run: function() {
            var e2 = this, t19 = e2.slides.eq(e2.activeIndex), a23 = e2.params.autoplay.delay;
            t19.attr("data-swiper-autoplay") && (a23 = t19.attr("data-swiper-autoplay") || e2.params.autoplay.delay), clearTimeout(e2.autoplay.timeout), e2.autoplay.timeout = E(function() {
                var t20;
                e2.params.autoplay.reverseDirection ? e2.params.loop ? (e2.loopFix(), t20 = e2.slidePrev(e2.params.speed, !0, !0), e2.emit("autoplay")) : e2.isBeginning ? e2.params.autoplay.stopOnLastSlide ? e2.autoplay.stop() : (t20 = e2.slideTo(e2.slides.length - 1, e2.params.speed, !0, !0), e2.emit("autoplay")) : (t20 = e2.slidePrev(e2.params.speed, !0, !0), e2.emit("autoplay")) : e2.params.loop ? (e2.loopFix(), t20 = e2.slideNext(e2.params.speed, !0, !0), e2.emit("autoplay")) : e2.isEnd ? e2.params.autoplay.stopOnLastSlide ? e2.autoplay.stop() : (t20 = e2.slideTo(0, e2.params.speed, !0, !0), e2.emit("autoplay")) : (t20 = e2.slideNext(e2.params.speed, !0, !0), e2.emit("autoplay")), (e2.params.cssMode && e2.autoplay.running || !1 === t20) && e2.autoplay.run();
            }, a23);
        },
        start: function() {
            var e2 = this;
            return (void 0) === e2.autoplay.timeout && !e2.autoplay.running && (e2.autoplay.running = !0, e2.emit("autoplayStart"), e2.autoplay.run(), !0);
        },
        stop: function() {
            var e2 = this;
            return !!e2.autoplay.running && (void 0) !== e2.autoplay.timeout && (e2.autoplay.timeout && (clearTimeout(e2.autoplay.timeout), e2.autoplay.timeout = void 0), e2.autoplay.running = !1, e2.emit("autoplayStop"), !0);
        },
        pause: function(e2) {
            var t19 = this;
            t19.autoplay.running && (t19.autoplay.paused || (t19.autoplay.timeout && clearTimeout(t19.autoplay.timeout), t19.autoplay.paused = !0, 0 !== e2 && t19.params.autoplay.waitForTransition ? [
                "transitionend",
                "webkitTransitionEnd"
            ].forEach(function(e3) {
                t19.$wrapperEl[0].addEventListener(e3, t19.autoplay.onTransitionEnd);
            }) : (t19.autoplay.paused = !1, t19.autoplay.run())));
        },
        onVisibilityChange: function() {
            var e2 = this, t19 = r();
            "hidden" === t19.visibilityState && e2.autoplay.running && e2.autoplay.pause(), "visible" === t19.visibilityState && e2.autoplay.paused && (e2.autoplay.run(), e2.autoplay.paused = !1);
        },
        onTransitionEnd: function(e2) {
            var t19 = this;
            t19 && !t19.destroyed && t19.$wrapperEl && e2.target === t19.$wrapperEl[0] && ([
                "transitionend",
                "webkitTransitionEnd"
            ].forEach(function(e3) {
                t19.$wrapperEl[0].removeEventListener(e3, t19.autoplay.onTransitionEnd);
            }), t19.autoplay.paused = !1, t19.autoplay.running ? t19.autoplay.run() : t19.autoplay.stop());
        },
        onMouseEnter: function() {
            var e2 = this;
            e2.params.autoplay.disableOnInteraction ? e2.autoplay.stop() : e2.autoplay.pause(), [
                "transitionend",
                "webkitTransitionEnd"
            ].forEach(function(t19) {
                e2.$wrapperEl[0].removeEventListener(t19, e2.autoplay.onTransitionEnd);
            });
        },
        onMouseLeave: function() {
            var e2 = this;
            e2.params.autoplay.disableOnInteraction || (e2.autoplay.paused = !1, e2.autoplay.run());
        },
        attachMouseEvents: function() {
            var e2 = this;
            e2.params.autoplay.pauseOnMouseEnter && (e2.$el.on("mouseenter", e2.autoplay.onMouseEnter), e2.$el.on("mouseleave", e2.autoplay.onMouseLeave));
        },
        detachMouseEvents: function() {
            var e2 = this;
            e2.$el.off("mouseenter", e2.autoplay.onMouseEnter), e2.$el.off("mouseleave", e2.autoplay.onMouseLeave);
        }
    }, pe = {
        setTranslate: function() {
            for(var e2 = this, t19 = e2.slides, a23 = 0; a23 < t19.length; a23 += 1){
                var i33 = e2.slides.eq(a23), s28 = -i33[0].swiperSlideOffset;
                e2.params.virtualTranslate || (s28 -= e2.translate);
                var r21 = 0;
                e2.isHorizontal() || (r21 = s28, s28 = 0);
                var n29 = e2.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i33[0].progress), 0) : 1 + Math.min(Math.max(i33[0].progress, -1), 0);
                i33.css({
                    opacity: n29
                }).transform("translate3d(" + s28 + "px, " + r21 + "px, 0px)");
            }
        },
        setTransition: function(e2) {
            var t19 = this, a23 = t19.slides, i34 = t19.$wrapperEl;
            if (a23.transition(e2), t19.params.virtualTranslate && 0 !== e2) {
                var s29 = !1;
                a23.transitionEnd(function() {
                    if (!s29 && t19 && !t19.destroyed) {
                        s29 = !0, t19.animating = !1;
                        for(var e3 = [
                            "webkitTransitionEnd",
                            "transitionend"
                        ], a24 = 0; a24 < e3.length; a24 += 1)i34.trigger(e3[a24]);
                    }
                });
            }
        }
    }, ue = {
        setTranslate: function() {
            var e2, t19 = this, a23 = t19.$el, i34 = t19.$wrapperEl, s30 = t19.slides, r22 = t19.width, n30 = t19.height, l18 = t19.rtlTranslate, o22 = t19.size, d22 = t19.browser, p24 = t19.params.cubeEffect, u19 = t19.isHorizontal(), c17 = t19.virtual && t19.params.virtual.enabled, h12 = 0;
            p24.shadow && (u19 ? (0 === (e2 = i34.find(".swiper-cube-shadow")).length && (e2 = m('<div class="swiper-cube-shadow"></div>'), i34.append(e2)), e2.css({
                height: r22 + "px"
            })) : 0 === (e2 = a23.find(".swiper-cube-shadow")).length && (e2 = m('<div class="swiper-cube-shadow"></div>'), a23.append(e2)));
            for(var v11 = 0; v11 < s30.length; v11 += 1){
                var f9 = s30.eq(v11), g8 = v11;
                c17 && (g8 = parseInt(f9.attr("data-swiper-slide-index"), 10));
                var b7 = 90 * g8, y6 = Math.floor(b7 / 360);
                l18 && (b7 = -b7, y6 = Math.floor(-b7 / 360));
                var w5 = Math.max(Math.min(f9[0].progress, 1), -1), E4 = 0, x4 = 0, T7 = 0;
                g8 % 4 == 0 ? (E4 = 4 * -y6 * o22, T7 = 0) : (g8 - 1) % 4 == 0 ? (E4 = 0, T7 = 4 * -y6 * o22) : (g8 - 2) % 4 == 0 ? (E4 = o22 + 4 * y6 * o22, T7 = o22) : (g8 - 3) % 4 == 0 && (E4 = -o22, T7 = 3 * o22 + 4 * o22 * y6), l18 && (E4 = -E4), u19 || (x4 = E4, E4 = 0);
                var C7 = "rotateX(" + (u19 ? 0 : -b7) + "deg) rotateY(" + (u19 ? b7 : 0) + "deg) translate3d(" + E4 + "px, " + x4 + "px, " + T7 + "px)";
                if (w5 <= 1 && w5 > -1 && (h12 = 90 * g8 + 90 * w5, l18 && (h12 = 90 * -g8 - 90 * w5)), f9.transform(C7), p24.slideShadows) {
                    var S5 = u19 ? f9.find(".swiper-slide-shadow-left") : f9.find(".swiper-slide-shadow-top"), M3 = u19 ? f9.find(".swiper-slide-shadow-right") : f9.find(".swiper-slide-shadow-bottom");
                    0 === S5.length && (S5 = m('<div class="swiper-slide-shadow-' + (u19 ? "left" : "top") + '"></div>'), f9.append(S5)), 0 === M3.length && (M3 = m('<div class="swiper-slide-shadow-' + (u19 ? "right" : "bottom") + '"></div>'), f9.append(M3)), S5.length && (S5[0].style.opacity = Math.max(-w5, 0)), M3.length && (M3[0].style.opacity = Math.max(w5, 0));
                }
            }
            if (i34.css({
                "-webkit-transform-origin": "50% 50% -" + o22 / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + o22 / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + o22 / 2 + "px",
                "transform-origin": "50% 50% -" + o22 / 2 + "px"
            }), p24.shadow) {
                if (u19) e2.transform("translate3d(0px, " + (r22 / 2 + p24.shadowOffset) + "px, " + -r22 / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p24.shadowScale + ")");
                else {
                    var z3 = Math.abs(h12) - 90 * Math.floor(Math.abs(h12) / 90), P3 = 1.5 - (Math.sin(2 * z3 * Math.PI / 360) / 2 + Math.cos(2 * z3 * Math.PI / 360) / 2), k3 = p24.shadowScale, $3 = p24.shadowScale / P3, L3 = p24.shadowOffset;
                    e2.transform("scale3d(" + k3 + ", 1, " + $3 + ") translate3d(0px, " + (n30 / 2 + L3) + "px, " + -n30 / 2 / $3 + "px) rotateX(-90deg)");
                }
            }
            var I3 = d22.isSafari || d22.isWebView ? -o22 / 2 : 0;
            i34.transform("translate3d(0px,0," + I3 + "px) rotateX(" + (t19.isHorizontal() ? 0 : h12) + "deg) rotateY(" + (t19.isHorizontal() ? -h12 : 0) + "deg)");
        },
        setTransition: function(e2) {
            var t19 = this, a23 = t19.$el;
            t19.slides.transition(e2).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e2), t19.params.cubeEffect.shadow && !t19.isHorizontal() && a23.find(".swiper-cube-shadow").transition(e2);
        }
    }, ce = {
        setTranslate: function() {
            for(var e2 = this, t19 = e2.slides, a23 = e2.rtlTranslate, i34 = 0; i34 < t19.length; i34 += 1){
                var s30 = t19.eq(i34), r22 = s30[0].progress;
                e2.params.flipEffect.limitRotation && (r22 = Math.max(Math.min(s30[0].progress, 1), -1));
                var n30 = -180 * r22, l18 = 0, o22 = -s30[0].swiperSlideOffset, d22 = 0;
                if (e2.isHorizontal() ? a23 && (n30 = -n30) : (d22 = o22, o22 = 0, l18 = -n30, n30 = 0), s30[0].style.zIndex = -Math.abs(Math.round(r22)) + t19.length, e2.params.flipEffect.slideShadows) {
                    var p24 = e2.isHorizontal() ? s30.find(".swiper-slide-shadow-left") : s30.find(".swiper-slide-shadow-top"), u19 = e2.isHorizontal() ? s30.find(".swiper-slide-shadow-right") : s30.find(".swiper-slide-shadow-bottom");
                    0 === p24.length && (p24 = m('<div class="swiper-slide-shadow-' + (e2.isHorizontal() ? "left" : "top") + '"></div>'), s30.append(p24)), 0 === u19.length && (u19 = m('<div class="swiper-slide-shadow-' + (e2.isHorizontal() ? "right" : "bottom") + '"></div>'), s30.append(u19)), p24.length && (p24[0].style.opacity = Math.max(-r22, 0)), u19.length && (u19[0].style.opacity = Math.max(r22, 0));
                }
                s30.transform("translate3d(" + o22 + "px, " + d22 + "px, 0px) rotateX(" + l18 + "deg) rotateY(" + n30 + "deg)");
            }
        },
        setTransition: function(e2) {
            var t19 = this, a23 = t19.slides, i34 = t19.activeIndex, s31 = t19.$wrapperEl;
            if (a23.transition(e2).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e2), t19.params.virtualTranslate && 0 !== e2) {
                var r23 = !1;
                a23.eq(i34).transitionEnd(function() {
                    if (!r23 && t19 && !t19.destroyed) {
                        r23 = !0, t19.animating = !1;
                        for(var e5 = [
                            "webkitTransitionEnd",
                            "transitionend"
                        ], a25 = 0; a25 < e5.length; a25 += 1)s31.trigger(e5[a25]);
                    }
                });
            }
        }
    }, he = {
        setTranslate: function() {
            for(var e2 = this, t19 = e2.width, a23 = e2.height, i34 = e2.slides, s31 = e2.slidesSizesGrid, r24 = e2.params.coverflowEffect, n31 = e2.isHorizontal(), l19 = e2.translate, o23 = n31 ? t19 / 2 - l19 : a23 / 2 - l19, d23 = n31 ? r24.rotate : -r24.rotate, p25 = r24.depth, u20 = 0, c17 = i34.length; u20 < c17; u20 += 1){
                var h12 = i34.eq(u20), v11 = s31[u20], f10 = (o23 - h12[0].swiperSlideOffset - v11 / 2) / v11 * r24.modifier, g9 = n31 ? d23 * f10 : 0, b8 = n31 ? 0 : d23 * f10, y7 = -p25 * Math.abs(f10), w6 = r24.stretch;
                "string" == typeof w6 && -1 !== w6.indexOf("%") && (w6 = parseFloat(r24.stretch) / 100 * v11);
                var E5 = n31 ? 0 : w6 * f10, x5 = n31 ? w6 * f10 : 0, T8 = 1 - (1 - r24.scale) * Math.abs(f10);
                Math.abs(x5) < 0.001 && (x5 = 0), Math.abs(E5) < 0.001 && (E5 = 0), Math.abs(y7) < 0.001 && (y7 = 0), Math.abs(g9) < 0.001 && (g9 = 0), Math.abs(b8) < 0.001 && (b8 = 0), Math.abs(T8) < 0.001 && (T8 = 0);
                var C8 = "translate3d(" + x5 + "px," + E5 + "px," + y7 + "px)  rotateX(" + b8 + "deg) rotateY(" + g9 + "deg) scale(" + T8 + ")";
                if (h12.transform(C8), h12[0].style.zIndex = 1 - Math.abs(Math.round(f10)), r24.slideShadows) {
                    var S6 = n31 ? h12.find(".swiper-slide-shadow-left") : h12.find(".swiper-slide-shadow-top"), M4 = n31 ? h12.find(".swiper-slide-shadow-right") : h12.find(".swiper-slide-shadow-bottom");
                    0 === S6.length && (S6 = m('<div class="swiper-slide-shadow-' + (n31 ? "left" : "top") + '"></div>'), h12.append(S6)), 0 === M4.length && (M4 = m('<div class="swiper-slide-shadow-' + (n31 ? "right" : "bottom") + '"></div>'), h12.append(M4)), S6.length && (S6[0].style.opacity = f10 > 0 ? f10 : 0), M4.length && (M4[0].style.opacity = -f10 > 0 ? -f10 : 0);
                }
            }
        },
        setTransition: function(e2) {
            this.slides.transition(e2).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e2);
        }
    }, ve = {
        init: function() {
            var e2 = this, t19 = e2.params.thumbs;
            if (e2.thumbs.initialized) return !1;
            e2.thumbs.initialized = !0;
            var a23 = e2.constructor;
            return t19.swiper instanceof a23 ? (e2.thumbs.swiper = t19.swiper, M(e2.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), M(e2.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : C(t19.swiper) && (e2.thumbs.swiper = new a23(M({
            }, t19.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })), e2.thumbs.swiperCreated = !0), e2.thumbs.swiper.$el.addClass(e2.params.thumbs.thumbsContainerClass), e2.thumbs.swiper.on("tap", e2.thumbs.onThumbClick), !0;
        },
        onThumbClick: function() {
            var e2 = this, t19 = e2.thumbs.swiper;
            if (t19) {
                var a23 = t19.clickedIndex, i34 = t19.clickedSlide;
                if (!(i34 && m(i34).hasClass(e2.params.thumbs.slideThumbActiveClass) || null == a23)) {
                    var s31;
                    if (s31 = t19.params.loop ? parseInt(m(t19.clickedSlide).attr("data-swiper-slide-index"), 10) : a23, e2.params.loop) {
                        var r24 = e2.activeIndex;
                        e2.slides.eq(r24).hasClass(e2.params.slideDuplicateClass) && (e2.loopFix(), e2._clientLeft = e2.$wrapperEl[0].clientLeft, r24 = e2.activeIndex);
                        var n31 = e2.slides.eq(r24).prevAll('[data-swiper-slide-index="' + s31 + '"]').eq(0).index(), l19 = e2.slides.eq(r24).nextAll('[data-swiper-slide-index="' + s31 + '"]').eq(0).index();
                        s31 = (void 0) === n31 ? l19 : (void 0) === l19 ? n31 : l19 - r24 < r24 - n31 ? l19 : n31;
                    }
                    e2.slideTo(s31);
                }
            }
        },
        update: function(e2) {
            var t19 = this, a26 = t19.thumbs.swiper;
            if (a26) {
                var i35 = "auto" === a26.params.slidesPerView ? a26.slidesPerViewDynamic() : a26.params.slidesPerView, s32 = t19.params.thumbs.autoScrollOffset, r25 = s32 && !a26.params.loop;
                if (t19.realIndex !== a26.realIndex || r25) {
                    var n32, l20, o23 = a26.activeIndex;
                    if (a26.params.loop) {
                        a26.slides.eq(o23).hasClass(a26.params.slideDuplicateClass) && (a26.loopFix(), a26._clientLeft = a26.$wrapperEl[0].clientLeft, o23 = a26.activeIndex);
                        var d23 = a26.slides.eq(o23).prevAll('[data-swiper-slide-index="' + t19.realIndex + '"]').eq(0).index(), p25 = a26.slides.eq(o23).nextAll('[data-swiper-slide-index="' + t19.realIndex + '"]').eq(0).index();
                        n32 = (void 0) === d23 ? p25 : (void 0) === p25 ? d23 : p25 - o23 == o23 - d23 ? a26.params.slidesPerGroup > 1 ? p25 : o23 : p25 - o23 < o23 - d23 ? p25 : d23, l20 = t19.activeIndex > t19.previousIndex ? "next" : "prev";
                    } else l20 = (n32 = t19.realIndex) > t19.previousIndex ? "next" : "prev";
                    r25 && (n32 += "next" === l20 ? s32 : -1 * s32), a26.visibleSlidesIndexes && a26.visibleSlidesIndexes.indexOf(n32) < 0 && (a26.params.centeredSlides ? n32 = n32 > o23 ? n32 - Math.floor(i35 / 2) + 1 : n32 + Math.floor(i35 / 2) - 1 : n32 > o23 && a26.params.slidesPerGroup, a26.slideTo(n32, e2 ? 0 : void 0));
                }
                var u20 = 1, c17 = t19.params.thumbs.slideThumbActiveClass;
                if (t19.params.slidesPerView > 1 && !t19.params.centeredSlides && (u20 = t19.params.slidesPerView), t19.params.thumbs.multipleActiveThumbs || (u20 = 1), u20 = Math.floor(u20), a26.slides.removeClass(c17), a26.params.loop || a26.params.virtual && a26.params.virtual.enabled) for(var h13 = 0; h13 < u20; h13 += 1)a26.$wrapperEl.children('[data-swiper-slide-index="' + (t19.realIndex + h13) + '"]').addClass(c17);
                else for(var v12 = 0; v12 < u20; v12 += 1)a26.slides.eq(t19.realIndex + v12).addClass(c17);
            }
        }
    }, fe = [
        U,
        Z,
        {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            },
            create: function() {
                z(this, {
                    mousewheel: {
                        enabled: !1,
                        lastScrollTime: x(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: [],
                        enable: J.enable,
                        disable: J.disable,
                        handle: J.handle,
                        handleMouseEnter: J.handleMouseEnter,
                        handleMouseLeave: J.handleMouseLeave,
                        animateSlider: J.animateSlider,
                        releaseScroll: J.releaseScroll
                    }
                });
            },
            on: {
                init: function(e2) {
                    !e2.params.mousewheel.enabled && e2.params.cssMode && e2.mousewheel.disable(), e2.params.mousewheel.enabled && e2.mousewheel.enable();
                },
                destroy: function(e2) {
                    e2.params.cssMode && e2.mousewheel.enable(), e2.mousewheel.enabled && e2.mousewheel.disable();
                }
            }
        },
        {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                z(this, {
                    navigation: t({
                    }, Q)
                });
            },
            on: {
                init: function(e2) {
                    e2.navigation.init(), e2.navigation.update();
                },
                toEdge: function(e2) {
                    e2.navigation.update();
                },
                fromEdge: function(e2) {
                    e2.navigation.update();
                },
                destroy: function(e2) {
                    e2.navigation.destroy();
                },
                "enable disable": function(e2) {
                    var t19 = e2.navigation, a26 = t19.$nextEl, i36 = t19.$prevEl;
                    a26 && a26[e2.enabled ? "removeClass" : "addClass"](e2.params.navigation.lockClass), i36 && i36[e2.enabled ? "removeClass" : "addClass"](e2.params.navigation.lockClass);
                },
                click: function(e2, t19) {
                    var a26 = e2.navigation, i36 = a26.$nextEl, s33 = a26.$prevEl, r26 = t19.target;
                    if (e2.params.navigation.hideOnClick && !m(r26).is(s33) && !m(r26).is(i36)) {
                        if (e2.pagination && e2.params.pagination && e2.params.pagination.clickable && (e2.pagination.el === r26 || e2.pagination.el.contains(r26))) return;
                        var n33;
                        i36 ? n33 = i36.hasClass(e2.params.navigation.hiddenClass) : s33 && (n33 = s33.hasClass(e2.params.navigation.hiddenClass)), !0 === n33 ? e2.emit("navigationShow") : e2.emit("navigationHide"), i36 && i36.toggleClass(e2.params.navigation.hiddenClass), s33 && s33.toggleClass(e2.params.navigation.hiddenClass);
                    }
                }
            }
        },
        {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e2) {
                        return e2;
                    },
                    formatFractionTotal: function(e2) {
                        return e2;
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                z(this, {
                    pagination: t({
                        dynamicBulletIndex: 0
                    }, ee)
                });
            },
            on: {
                init: function(e2) {
                    e2.pagination.init(), e2.pagination.render(), e2.pagination.update();
                },
                activeIndexChange: function(e2) {
                    (e2.params.loop || (void 0) === e2.snapIndex) && e2.pagination.update();
                },
                snapIndexChange: function(e2) {
                    e2.params.loop || e2.pagination.update();
                },
                slidesLengthChange: function(e2) {
                    e2.params.loop && (e2.pagination.render(), e2.pagination.update());
                },
                snapGridLengthChange: function(e2) {
                    e2.params.loop || (e2.pagination.render(), e2.pagination.update());
                },
                destroy: function(e2) {
                    e2.pagination.destroy();
                },
                "enable disable": function(e2) {
                    var t19 = e2.pagination.$el;
                    t19 && t19[e2.enabled ? "removeClass" : "addClass"](e2.params.pagination.lockClass);
                },
                click: function(e2, t19) {
                    var a26 = t19.target;
                    if (e2.params.pagination.el && e2.params.pagination.hideOnClick && e2.pagination.$el.length > 0 && !m(a26).hasClass(e2.params.pagination.bulletClass)) {
                        if (e2.navigation && (e2.navigation.nextEl && a26 === e2.navigation.nextEl || e2.navigation.prevEl && a26 === e2.navigation.prevEl)) return;
                        !0 === e2.pagination.$el.hasClass(e2.params.pagination.hiddenClass) ? e2.emit("paginationShow") : e2.emit("paginationHide"), e2.pagination.$el.toggleClass(e2.params.pagination.hiddenClass);
                    }
                }
            }
        },
        {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                z(this, {
                    scrollbar: t({
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }, te)
                });
            },
            on: {
                init: function(e2) {
                    e2.scrollbar.init(), e2.scrollbar.updateSize(), e2.scrollbar.setTranslate();
                },
                update: function(e2) {
                    e2.scrollbar.updateSize();
                },
                resize: function(e2) {
                    e2.scrollbar.updateSize();
                },
                observerUpdate: function(e2) {
                    e2.scrollbar.updateSize();
                },
                setTranslate: function(e2) {
                    e2.scrollbar.setTranslate();
                },
                setTransition: function(e2, t19) {
                    e2.scrollbar.setTransition(t19);
                },
                "enable disable": function(e2) {
                    var t19 = e2.scrollbar.$el;
                    t19 && t19[e2.enabled ? "removeClass" : "addClass"](e2.params.scrollbar.lockClass);
                },
                destroy: function(e2) {
                    e2.scrollbar.destroy();
                }
            }
        },
        {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                z(this, {
                    parallax: t({
                    }, ae)
                });
            },
            on: {
                beforeInit: function(e2) {
                    e2.params.parallax.enabled && (e2.params.watchSlidesProgress = !0, e2.originalParams.watchSlidesProgress = !0);
                },
                init: function(e2) {
                    e2.params.parallax.enabled && e2.parallax.setTranslate();
                },
                setTranslate: function(e2) {
                    e2.params.parallax.enabled && e2.parallax.setTranslate();
                },
                setTransition: function(e2, t19) {
                    e2.params.parallax.enabled && e2.parallax.setTransition(t19);
                }
            }
        },
        {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e2 = this;
                z(e2, {
                    zoom: t({
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {
                            },
                            touchesCurrent: {
                            }
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    }, ie)
                });
                var a26 = 1;
                Object.defineProperty(e2.zoom, "scale", {
                    get: function() {
                        return a26;
                    },
                    set: function(t19) {
                        if (a26 !== t19) {
                            var i36 = e2.zoom.gesture.$imageEl ? e2.zoom.gesture.$imageEl[0] : void 0, s33 = e2.zoom.gesture.$slideEl ? e2.zoom.gesture.$slideEl[0] : void 0;
                            e2.emit("zoomChange", t19, i36, s33);
                        }
                        a26 = t19;
                    }
                });
            },
            on: {
                init: function(e2) {
                    e2.params.zoom.enabled && e2.zoom.enable();
                },
                destroy: function(e2) {
                    e2.zoom.disable();
                },
                touchStart: function(e2, t19) {
                    e2.zoom.enabled && e2.zoom.onTouchStart(t19);
                },
                touchEnd: function(e2, t19) {
                    e2.zoom.enabled && e2.zoom.onTouchEnd(t19);
                },
                doubleTap: function(e2, t19) {
                    !e2.animating && e2.params.zoom.enabled && e2.zoom.enabled && e2.params.zoom.toggle && e2.zoom.toggle(t19);
                },
                transitionEnd: function(e2) {
                    e2.zoom.enabled && e2.params.zoom.enabled && e2.zoom.onTransitionEnd();
                },
                slideChange: function(e2) {
                    e2.zoom.enabled && e2.params.zoom.enabled && e2.params.cssMode && e2.zoom.onTransitionEnd();
                }
            }
        },
        {
            name: "lazy",
            params: {
                lazy: {
                    checkInView: !1,
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                z(this, {
                    lazy: t({
                        initialImageLoaded: !1
                    }, se)
                });
            },
            on: {
                beforeInit: function(e2) {
                    e2.params.lazy.enabled && e2.params.preloadImages && (e2.params.preloadImages = !1);
                },
                init: function(e2) {
                    e2.params.lazy.enabled && !e2.params.loop && 0 === e2.params.initialSlide && (e2.params.lazy.checkInView ? e2.lazy.checkInViewOnLoad() : e2.lazy.load());
                },
                scroll: function(e2) {
                    e2.params.freeMode && !e2.params.freeModeSticky && e2.lazy.load();
                },
                "scrollbarDragMove resize _freeModeNoMomentumRelease": function(e2) {
                    e2.params.lazy.enabled && e2.lazy.load();
                },
                transitionStart: function(e2) {
                    e2.params.lazy.enabled && (e2.params.lazy.loadOnTransitionStart || !e2.params.lazy.loadOnTransitionStart && !e2.lazy.initialImageLoaded) && e2.lazy.load();
                },
                transitionEnd: function(e2) {
                    e2.params.lazy.enabled && !e2.params.lazy.loadOnTransitionStart && e2.lazy.load();
                },
                slideChange: function(e2) {
                    var t19 = e2.params, a26 = t19.lazy, i37 = t19.cssMode, s34 = t19.watchSlidesVisibility, r26 = t19.watchSlidesProgress, n34 = t19.touchReleaseOnEdges, l21 = t19.resistanceRatio;
                    a26.enabled && (i37 || (s34 || r26) && (n34 || 0 === l21)) && e2.lazy.load();
                }
            }
        },
        {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                z(this, {
                    controller: t({
                        control: this.params.controller.control
                    }, re)
                });
            },
            on: {
                update: function(e2) {
                    e2.controller.control && e2.controller.spline && (e2.controller.spline = void 0, delete e2.controller.spline);
                },
                resize: function(e2) {
                    e2.controller.control && e2.controller.spline && (e2.controller.spline = void 0, delete e2.controller.spline);
                },
                observerUpdate: function(e2) {
                    e2.controller.control && e2.controller.spline && (e2.controller.spline = void 0, delete e2.controller.spline);
                },
                setTranslate: function(e2, t19, a26) {
                    e2.controller.control && e2.controller.setTranslate(t19, a26);
                },
                setTransition: function(e2, t19, a26) {
                    e2.controller.control && e2.controller.setTransition(t19, a26);
                }
            }
        },
        {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group"
                }
            },
            create: function() {
                z(this, {
                    a11y: t({
                    }, ne, {
                        liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    })
                });
            },
            on: {
                afterInit: function(e2) {
                    e2.params.a11y.enabled && (e2.a11y.init(), e2.a11y.updateNavigation());
                },
                toEdge: function(e2) {
                    e2.params.a11y.enabled && e2.a11y.updateNavigation();
                },
                fromEdge: function(e2) {
                    e2.params.a11y.enabled && e2.a11y.updateNavigation();
                },
                paginationUpdate: function(e2) {
                    e2.params.a11y.enabled && e2.a11y.updatePagination();
                },
                destroy: function(e2) {
                    e2.params.a11y.enabled && e2.a11y.destroy();
                }
            }
        },
        {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                z(this, {
                    history: t({
                    }, le)
                });
            },
            on: {
                init: function(e2) {
                    e2.params.history.enabled && e2.history.init();
                },
                destroy: function(e2) {
                    e2.params.history.enabled && e2.history.destroy();
                },
                "transitionEnd _freeModeNoMomentumRelease": function(e2) {
                    e2.history.initialized && e2.history.setHistory(e2.params.history.key, e2.activeIndex);
                },
                slideChange: function(e2) {
                    e2.history.initialized && e2.params.cssMode && e2.history.setHistory(e2.params.history.key, e2.activeIndex);
                }
            }
        },
        {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                z(this, {
                    hashNavigation: t({
                        initialized: !1
                    }, oe)
                });
            },
            on: {
                init: function(e2) {
                    e2.params.hashNavigation.enabled && e2.hashNavigation.init();
                },
                destroy: function(e2) {
                    e2.params.hashNavigation.enabled && e2.hashNavigation.destroy();
                },
                "transitionEnd _freeModeNoMomentumRelease": function(e2) {
                    e2.hashNavigation.initialized && e2.hashNavigation.setHash();
                },
                slideChange: function(e2) {
                    e2.hashNavigation.initialized && e2.params.cssMode && e2.hashNavigation.setHash();
                }
            }
        },
        {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3000,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            },
            create: function() {
                z(this, {
                    autoplay: t({
                    }, de, {
                        running: !1,
                        paused: !1
                    })
                });
            },
            on: {
                init: function(e2) {
                    e2.params.autoplay.enabled && (e2.autoplay.start(), r().addEventListener("visibilitychange", e2.autoplay.onVisibilityChange), e2.autoplay.attachMouseEvents());
                },
                beforeTransitionStart: function(e2, t19, a26) {
                    e2.autoplay.running && (a26 || !e2.params.autoplay.disableOnInteraction ? e2.autoplay.pause(t19) : e2.autoplay.stop());
                },
                sliderFirstMove: function(e2) {
                    e2.autoplay.running && (e2.params.autoplay.disableOnInteraction ? e2.autoplay.stop() : e2.autoplay.pause());
                },
                touchEnd: function(e2) {
                    e2.params.cssMode && e2.autoplay.paused && !e2.params.autoplay.disableOnInteraction && e2.autoplay.run();
                },
                destroy: function(e2) {
                    e2.autoplay.detachMouseEvents(), e2.autoplay.running && e2.autoplay.stop(), r().removeEventListener("visibilitychange", e2.autoplay.onVisibilityChange);
                }
            }
        },
        {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                z(this, {
                    fadeEffect: t({
                    }, pe)
                });
            },
            on: {
                beforeInit: function(e2) {
                    if ("fade" === e2.params.effect) {
                        e2.classNames.push(e2.params.containerModifierClass + "fade");
                        var t19 = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        M(e2.params, t19), M(e2.originalParams, t19);
                    }
                },
                setTranslate: function(e2) {
                    "fade" === e2.params.effect && e2.fadeEffect.setTranslate();
                },
                setTransition: function(e2, t20) {
                    "fade" === e2.params.effect && e2.fadeEffect.setTransition(t20);
                }
            }
        },
        {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: 0.94
                }
            },
            create: function() {
                z(this, {
                    cubeEffect: t({
                    }, ue)
                });
            },
            on: {
                beforeInit: function(e2) {
                    if ("cube" === e2.params.effect) {
                        e2.classNames.push(e2.params.containerModifierClass + "cube"), e2.classNames.push(e2.params.containerModifierClass + "3d");
                        var t20 = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        M(e2.params, t20), M(e2.originalParams, t20);
                    }
                },
                setTranslate: function(e2) {
                    "cube" === e2.params.effect && e2.cubeEffect.setTranslate();
                },
                setTransition: function(e2, t21) {
                    "cube" === e2.params.effect && e2.cubeEffect.setTransition(t21);
                }
            }
        },
        {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                z(this, {
                    flipEffect: t({
                    }, ce)
                });
            },
            on: {
                beforeInit: function(e2) {
                    if ("flip" === e2.params.effect) {
                        e2.classNames.push(e2.params.containerModifierClass + "flip"), e2.classNames.push(e2.params.containerModifierClass + "3d");
                        var t21 = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        M(e2.params, t21), M(e2.originalParams, t21);
                    }
                },
                setTranslate: function(e2) {
                    "flip" === e2.params.effect && e2.flipEffect.setTranslate();
                },
                setTransition: function(e2, t22) {
                    "flip" === e2.params.effect && e2.flipEffect.setTransition(t22);
                }
            }
        },
        {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                z(this, {
                    coverflowEffect: t({
                    }, he)
                });
            },
            on: {
                beforeInit: function(e2) {
                    "coverflow" === e2.params.effect && (e2.classNames.push(e2.params.containerModifierClass + "coverflow"), e2.classNames.push(e2.params.containerModifierClass + "3d"), e2.params.watchSlidesProgress = !0, e2.originalParams.watchSlidesProgress = !0);
                },
                setTranslate: function(e2) {
                    "coverflow" === e2.params.effect && e2.coverflowEffect.setTranslate();
                },
                setTransition: function(e2, t22) {
                    "coverflow" === e2.params.effect && e2.coverflowEffect.setTransition(t22);
                }
            }
        },
        {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                z(this, {
                    thumbs: t({
                        swiper: null,
                        initialized: !1
                    }, ve)
                });
            },
            on: {
                beforeInit: function(e2) {
                    var t22 = e2.params.thumbs;
                    t22 && t22.swiper && (e2.thumbs.init(), e2.thumbs.update(!0));
                },
                slideChange: function(e2) {
                    e2.thumbs.swiper && e2.thumbs.update();
                },
                update: function(e2) {
                    e2.thumbs.swiper && e2.thumbs.update();
                },
                resize: function(e2) {
                    e2.thumbs.swiper && e2.thumbs.update();
                },
                observerUpdate: function(e2) {
                    e2.thumbs.swiper && e2.thumbs.update();
                },
                setTransition: function(e2, t22) {
                    var a26 = e2.thumbs.swiper;
                    a26 && a26.setTransition(t22);
                },
                beforeDestroy: function(e2) {
                    var t22 = e2.thumbs.swiper;
                    t22 && e2.thumbs.swiperCreated && t22 && t22.destroy();
                }
            }
        }
    ];
    return q.use(fe), q;
}); //# sourceMappingURL=swiper-bundle.min.js.map

//# sourceMappingURL=index.b034e528.js.map
