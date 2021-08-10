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
})({"gG3Ei":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "ec0304e2e6a62cff";
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

},{}]},["gG3Ei"], null, "parcelRequire5466")
/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */ !function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).mediumZoom = t();
}(this, function() {
    "use strict";
    var e = Object.assign || function(e1) {
        for(var t = 1; t < arguments.length; t++){
            var o = arguments[t];
            for(var n in o)Object.prototype.hasOwnProperty.call(o, n) && (e1[n] = o[n]);
        }
        return e1;
    }, t = function(e1) {
        return "IMG" === e1.tagName;
    }, o = function(e1) {
        return e1 && 1 === e1.nodeType;
    }, n = function(e1) {
        return ".svg" === (e1.currentSrc || e1.src).substr(-4).toLowerCase();
    }, i = function(e1) {
        try {
            return Array.isArray(e1) ? e1.filter(t) : (function(e2) {
                return NodeList.prototype.isPrototypeOf(e2);
            })(e1) ? [].slice.call(e1).filter(t) : o(e1) ? [
                e1
            ].filter(t) : "string" == typeof e1 ? [].slice.call(document.querySelectorAll(e1)).filter(t) : [];
        } catch (e2) {
            throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
        }
    }, r = function(e1) {
        var t1 = document.createElement("div");
        return t1.classList.add("medium-zoom-overlay"), t1.style.background = e1, t1;
    }, d = function(e1) {
        var t1 = e1.getBoundingClientRect(), o1 = t1.top, n1 = t1.left, i1 = t1.width, r1 = t1.height, d1 = e1.cloneNode(), m = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, a = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        return d1.removeAttribute("id"), d1.style.position = "absolute", d1.style.top = o1 + m + "px", d1.style.left = n1 + a + "px", d1.style.width = i1 + "px", d1.style.height = r1 + "px", d1.style.transform = "", d1;
    }, m = function(t1, o1) {
        var n1 = e({
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        }, o1);
        if ("function" == typeof window.CustomEvent) return new CustomEvent(t1, n1);
        var i1 = document.createEvent("CustomEvent");
        return i1.initCustomEvent(t1, n1.bubbles, n1.cancelable, n1.detail), i1;
    };
    return (function(e1, t1) {
        (void 0) === t1 && (t1 = {
        });
        var o1 = t1.insertAt;
        if (e1 && "undefined" != typeof document) {
            var n1 = document.head || document.getElementsByTagName("head")[0], i1 = document.createElement("style");
            i1.type = "text/css", "top" === o1 && n1.firstChild ? n1.insertBefore(i1, n1.firstChild) : n1.appendChild(i1), i1.styleSheet ? i1.styleSheet.cssText = e1 : i1.appendChild(document.createTextNode(e1));
        }
    })(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"), function t1(a2) {
        var l = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : {
        }, c = window.Promise || function(e1) {
            function t2() {
            }
            e1(t2, t2);
        }, u = function(e1) {
            var t2 = e1.target;
            t2 !== N ? -1 !== O.indexOf(t2) && w({
                target: t2
            }) : E();
        }, s = function() {
            if (!A && T.original) {
                var e1 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                Math.abs(k - e1) > S.scrollOffset && setTimeout(E, 150);
            }
        }, f = function(e2) {
            var t2 = e2.key || e2.keyCode;
            "Escape" !== t2 && "Esc" !== t2 && 27 !== t2 || E();
        }, p = function() {
            var t2 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : {
            }, n2 = t2;
            if (t2.background && (N.style.background = t2.background), t2.container && t2.container instanceof Object && (n2.container = e({
            }, S.container, t2.container)), t2.template) {
                var i2 = o(t2.template) ? t2.template : document.querySelector(t2.template);
                n2.template = i2;
            }
            return S = e({
            }, S, n2), O.forEach(function(e2) {
                e2.dispatchEvent(m("medium-zoom:update", {
                    detail: {
                        zoom: j
                    }
                }));
            }), j;
        }, g = function() {
            var o1 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : {
            };
            return t1(e({
            }, S, o1));
        }, v = function() {
            for(var e2 = arguments.length, t2 = Array(e2), o1 = 0; o1 < e2; o1++)t2[o1] = arguments[o1];
            var n2 = t2.reduce(function(e3, t3) {
                return [].concat(e3, i(t3));
            }, []);
            return n2.filter(function(e3) {
                return -1 === O.indexOf(e3);
            }).forEach(function(e3) {
                O.push(e3), e3.classList.add("medium-zoom-image");
            }), x.forEach(function(e3) {
                var t3 = e3.type, o2 = e3.listener, i3 = e3.options;
                n2.forEach(function(e4) {
                    e4.addEventListener(t3, o2, i3);
                });
            }), j;
        }, h = function() {
            for(var e2 = arguments.length, t2 = Array(e2), o1 = 0; o1 < e2; o1++)t2[o1] = arguments[o1];
            T.zoomed && E();
            var n2 = t2.length > 0 ? t2.reduce(function(e3, t3) {
                return [].concat(e3, i(t3));
            }, []) : O;
            return n2.forEach(function(e3) {
                e3.classList.remove("medium-zoom-image"), e3.dispatchEvent(m("medium-zoom:detach", {
                    detail: {
                        zoom: j
                    }
                }));
            }), O = O.filter(function(e3) {
                return -1 === n2.indexOf(e3);
            }), j;
        }, z = function(e2, t2) {
            var o1 = arguments.length > 2 && (void 0) !== arguments[2] ? arguments[2] : {
            };
            return O.forEach(function(n2) {
                n2.addEventListener("medium-zoom:" + e2, t2, o1);
            }), x.push({
                type: "medium-zoom:" + e2,
                listener: t2,
                options: o1
            }), j;
        }, y = function(e2, t2) {
            var o1 = arguments.length > 2 && (void 0) !== arguments[2] ? arguments[2] : {
            };
            return O.forEach(function(n2) {
                n2.removeEventListener("medium-zoom:" + e2, t2, o1);
            }), x = x.filter(function(o2) {
                return !(o2.type === "medium-zoom:" + e2 && o2.listener.toString() === t2.toString());
            }), j;
        }, b = function() {
            var t2 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : {
            }, i3 = t2.target, r1 = function() {
                var t3 = {
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight,
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }, i4 = void 0, r2 = void 0;
                if (S.container) {
                    if (S.container instanceof Object) i4 = (t3 = e({
                    }, t3, S.container)).width - t3.left - t3.right - 2 * S.margin, r2 = t3.height - t3.top - t3.bottom - 2 * S.margin;
                    else {
                        var d1 = (o(S.container) ? S.container : document.querySelector(S.container)).getBoundingClientRect(), m1 = d1.width, a1 = d1.height, l1 = d1.left, c1 = d1.top;
                        t3 = e({
                        }, t3, {
                            width: m1,
                            height: a1,
                            left: l1,
                            top: c1
                        });
                    }
                }
                i4 = i4 || t3.width - 2 * S.margin, r2 = r2 || t3.height - 2 * S.margin;
                var u1 = T.zoomedHd || T.original, s1 = n(u1) ? i4 : u1.naturalWidth || i4, f1 = n(u1) ? r2 : u1.naturalHeight || r2, p1 = u1.getBoundingClientRect(), g1 = p1.top, v1 = p1.left, h1 = p1.width, z1 = p1.height, y1 = Math.min(s1, i4) / h1, b1 = Math.min(f1, r2) / z1, E = Math.min(y1, b1), w = "scale(" + E + ") translate3d(" + ((i4 - h1) / 2 - v1 + S.margin + t3.left) / E + "px, " + ((r2 - z1) / 2 - g1 + S.margin + t3.top) / E + "px, 0)";
                T.zoomed.style.transform = w, T.zoomedHd && (T.zoomedHd.style.transform = w);
            };
            return new c(function(e2) {
                if (i3 && -1 === O.indexOf(i3)) e2(j);
                else if (T.zoomed) e2(j);
                else {
                    if (i3) T.original = i3;
                    else {
                        if (!(O.length > 0)) return void e2(j);
                        var t3 = O;
                        T.original = t3[0];
                    }
                    if (T.original.dispatchEvent(m("medium-zoom:open", {
                        detail: {
                            zoom: j
                        }
                    })), k = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, A = !0, T.zoomed = d(T.original), document.body.appendChild(N), S.template) {
                        var n2 = o(S.template) ? S.template : document.querySelector(S.template);
                        T.template = document.createElement("div"), T.template.appendChild(n2.content.cloneNode(!0)), document.body.appendChild(T.template);
                    }
                    if (document.body.appendChild(T.zoomed), window.requestAnimationFrame(function() {
                        document.body.classList.add("medium-zoom--opened");
                    }), T.original.classList.add("medium-zoom-image--hidden"), T.zoomed.classList.add("medium-zoom-image--opened"), T.zoomed.addEventListener("click", E), T.zoomed.addEventListener("transitionend", function t4() {
                        A = !1, T.zoomed.removeEventListener("transitionend", t4), T.original.dispatchEvent(m("medium-zoom:opened", {
                            detail: {
                                zoom: j
                            }
                        })), e2(j);
                    }), T.original.getAttribute("data-zoom-src")) {
                        T.zoomedHd = T.zoomed.cloneNode(), T.zoomedHd.removeAttribute("srcset"), T.zoomedHd.removeAttribute("sizes"), T.zoomedHd.src = T.zoomed.getAttribute("data-zoom-src"), T.zoomedHd.onerror = function() {
                            clearInterval(a3), console.warn("Unable to reach the zoom image target " + T.zoomedHd.src), T.zoomedHd = null, r1();
                        };
                        var a3 = setInterval(function() {
                            T.zoomedHd.complete && (clearInterval(a3), T.zoomedHd.classList.add("medium-zoom-image--opened"), T.zoomedHd.addEventListener("click", E), document.body.appendChild(T.zoomedHd), r1());
                        }, 10);
                    } else if (T.original.hasAttribute("srcset")) {
                        T.zoomedHd = T.zoomed.cloneNode(), T.zoomedHd.removeAttribute("sizes"), T.zoomedHd.removeAttribute("loading");
                        var l2 = T.zoomedHd.addEventListener("load", function() {
                            T.zoomedHd.removeEventListener("load", l2), T.zoomedHd.classList.add("medium-zoom-image--opened"), T.zoomedHd.addEventListener("click", E), document.body.appendChild(T.zoomedHd), r1();
                        });
                    } else r1();
                }
            });
        }, E = function() {
            return new c(function(e2) {
                if (!A && T.original) A = !0, document.body.classList.remove("medium-zoom--opened"), T.zoomed.style.transform = "", T.zoomedHd && (T.zoomedHd.style.transform = ""), T.template && (T.template.style.transition = "opacity 150ms", T.template.style.opacity = 0), T.original.dispatchEvent(m("medium-zoom:close", {
                    detail: {
                        zoom: j
                    }
                })), T.zoomed.addEventListener("transitionend", function t2() {
                    T.original.classList.remove("medium-zoom-image--hidden"), document.body.removeChild(T.zoomed), T.zoomedHd && document.body.removeChild(T.zoomedHd), document.body.removeChild(N), T.zoomed.classList.remove("medium-zoom-image--opened"), T.template && document.body.removeChild(T.template), A = !1, T.zoomed.removeEventListener("transitionend", t2), T.original.dispatchEvent(m("medium-zoom:closed", {
                        detail: {
                            zoom: j
                        }
                    })), T.original = null, T.zoomed = null, T.zoomedHd = null, T.template = null, e2(j);
                });
                else e2(j);
            });
        }, w = function() {
            var e2 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : {
            }, t2 = e2.target;
            return T.original ? E() : b({
                target: t2
            });
        }, L = function() {
            return S;
        }, H = function() {
            return O;
        }, C = function() {
            return T.original;
        }, O = [], x = [], A = !1, k = 0, S = l, T = {
            original: null,
            zoomed: null,
            zoomedHd: null,
            template: null
        };
        "[object Object]" === Object.prototype.toString.call(a2) ? S = a2 : (a2 || "string" == typeof a2) && v(a2), S = e({
            margin: 0,
            background: "#fff",
            scrollOffset: 40,
            container: null,
            template: null
        }, S);
        var N = r(S.background);
        document.addEventListener("click", u), document.addEventListener("keyup", f), document.addEventListener("scroll", s), window.addEventListener("resize", E);
        var j = {
            open: b,
            close: E,
            toggle: w,
            update: p,
            clone: g,
            attach: v,
            detach: h,
            on: z,
            off: y,
            getOptions: L,
            getImages: H,
            getZoomedImage: C
        };
        return j;
    };
});

//# sourceMappingURL=index.e6a62cff.js.map
