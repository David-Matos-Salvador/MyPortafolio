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
})({"j6ycT":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "22b01981550d17ae";
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

},{}],"ajoad":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mediumZoom = require("medium-zoom");
var _mediumZoomDefault = parcelHelpers.interopDefault(_mediumZoom);
var _splide = require("@splidejs/splide");
var _splideDefault = parcelHelpers.interopDefault(_splide);
/*==================== MENU SHOW Y HIDDEN ====================*/ const navMenu = document.getElementById('nav-menu'), navToggle = document.getElementById('nav-toggle'), navClose = document.getElementById('nav-close');
/*===== MENU SHOW =====*/ /* Validate if constant exists */ if (navToggle) navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu');
});
/*===== MENU HIDDEN =====*/ /* Validate if constant exists */ if (navClose) navClose.addEventListener('click', ()=>{
    console.log('click');
    navMenu.classList.remove('show-menu');
});
/*==================== REMOVE MENU MOBILE ====================*/ const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu1 = document.getElementById('nav-menu');
    //When we click on each nav_link, we remove the show-menu class
    navMenu1.classList.remove('show-menu');
}
navLink.forEach((n)=>n.addEventListener('click', linkAction)
);
/*==================== ACCORDION SKILLS ====================*/ const skillsContent = document.getElementsByClassName('skills__content'), skillsHeader = document.querySelectorAll('.skills__header');
function toggleSkills() {
    let itemCLass = this.parentNode.className;
    for(let i = 0; i < skillsContent.length; i++)skillsContent[i].className = 'skills__content skills__close';
    if (itemCLass === 'skills__content skills__close') this.parentNode.className = 'skills__content skills__open';
}
skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/ const tabs = document.querySelectorAll('[data-target]'), tabContents = document.querySelectorAll('[data-content]');
tabs.forEach((tab)=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent)=>{
            tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');
        tabs.forEach((tab1)=>{
            tab1.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
    });
});
/*==================== SERVICES MODAL ====================*/ const modalViews = document.querySelectorAll('.services__modal'), modalBtns = document.querySelectorAll('.services__button'), modalCloses = document.querySelectorAll('.services__modal-close');
let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};
modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        console.log({
            modalBtn,
            i
        });
        console.log("dsads");
        modal(i);
    });
});
modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal');
        });
    });
});
/*==================== PORTFOLIO SWIPER  ====================*/ let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});
new _splideDefault.default('#splide').mount();
/*==================== TESTIMONIAL ====================*/ let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    breakpoints: {
        568: {
            slidesPerView: 2
        }
    }
});
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/ const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrolly = window.pageYOffset;
    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight; //Height including padding and border
        const sectionTop = current.offsetTop - 50; //Espacio que hay desde el etiqueta padre hasta el hijo        
        const sectionId = current.getAttribute('id');
        if (scrolly > sectionTop && scrolly <= sectionTop + sectionHeight) document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        else document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    });
}
window.addEventListener('scroll', scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/ function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);
/*==================== SHOW SCROLL UP ====================*/ function scrollUp() {
    const scrollUp1 = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the
    if (this.scrollY >= 560) scrollUp1.classList.add('show-scroll');
    else scrollUp1.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
/*==================== DARK LIGHT THEME ====================*/ const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';
// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrenTheme = ()=>document.body.classList.contains(darkTheme) ? 'dark' : 'light'
;
const getCurrectIcon = ()=>themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'
;
// We validate if the user previously chose a topic
if (selectedTheme) {
    //If the validation is fulfilled, we ask what the issue was to know if we activated or desactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}
// Activate / desactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    console.log("getCurrenTheme", getCurrenTheme());
    console.log("getCurrectIcon", getCurrectIcon());
    console.log("darkTheme", darkTheme);
    console.log("iconTheme", iconTheme);
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrenTheme());
    localStorage.setItem('selected-icon', getCurrectIcon());
});
//Media zoom
_mediumZoomDefault.default('.portfolio__img');

},{"medium-zoom":"7FF3n","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","@splidejs/splide":"hFSkN"}],"7FF3n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! medium-zoom 1.0.6 | MIT License | https://github.com/francoischalifour/medium-zoom */ var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
var isSupported = function isSupported1(node) {
    return node.tagName === 'IMG';
};
/* eslint-disable-next-line no-prototype-builtins */ var isNodeList = function isNodeList1(selector) {
    return NodeList.prototype.isPrototypeOf(selector);
};
var isNode = function isNode1(selector) {
    return selector && selector.nodeType === 1;
};
var isSvg = function isSvg1(image) {
    var source = image.currentSrc || image.src;
    return source.substr(-4).toLowerCase() === '.svg';
};
var getImagesFromSelector = function getImagesFromSelector1(selector) {
    try {
        if (Array.isArray(selector)) return selector.filter(isSupported);
        if (isNodeList(selector)) // Do not use spread operator or Array.from() for IE support
        return [].slice.call(selector).filter(isSupported);
        if (isNode(selector)) return [
            selector
        ].filter(isSupported);
        if (typeof selector === 'string') // Do not use spread operator or Array.from() for IE support
        return [].slice.call(document.querySelectorAll(selector)).filter(isSupported);
        return [];
    } catch (err) {
        throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
    }
};
var createOverlay = function createOverlay1(background) {
    var overlay = document.createElement('div');
    overlay.classList.add('medium-zoom-overlay');
    overlay.style.background = background;
    return overlay;
};
var cloneTarget = function cloneTarget1(template) {
    var _template$getBounding = template.getBoundingClientRect(), top = _template$getBounding.top, left = _template$getBounding.left, width = _template$getBounding.width, height = _template$getBounding.height;
    var clone = template.cloneNode();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    clone.removeAttribute('id');
    clone.style.position = 'absolute';
    clone.style.top = top + scrollTop + 'px';
    clone.style.left = left + scrollLeft + 'px';
    clone.style.width = width + 'px';
    clone.style.height = height + 'px';
    clone.style.transform = '';
    return clone;
};
var createCustomEvent = function createCustomEvent1(type, params) {
    var eventParams = _extends({
        bubbles: false,
        cancelable: false,
        detail: undefined
    }, params);
    if (typeof window.CustomEvent === 'function') return new CustomEvent(type, eventParams);
    var customEvent = document.createEvent('CustomEvent');
    customEvent.initCustomEvent(type, eventParams.bubbles, eventParams.cancelable, eventParams.detail);
    return customEvent;
};
var mediumZoom = function mediumZoom1(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    };
    /**
   * Ensure the compatibility with IE11 if no Promise polyfill are used.
   */ var Promise1 = window.Promise || function Promise2(fn) {
        function noop() {
        }
        fn(noop, noop);
    };
    var _handleClick = function _handleClick1(event) {
        var target = event.target;
        if (target === overlay) {
            close();
            return;
        }
        if (images.indexOf(target) === -1) return;
        toggle({
            target: target
        });
    };
    var _handleScroll = function _handleScroll1() {
        if (isAnimating || !active.original) return;
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (Math.abs(scrollTop - currentScroll) > zoomOptions.scrollOffset) setTimeout(close, 150);
    };
    var _handleKeyUp = function _handleKeyUp1(event) {
        var key = event.key || event.keyCode;
        // Close if escape key is pressed
        if (key === 'Escape' || key === 'Esc' || key === 27) close();
    };
    var update = function update1() {
        var options1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        var newOptions = options1;
        if (options1.background) overlay.style.background = options1.background;
        if (options1.container && options1.container instanceof Object) newOptions.container = _extends({
        }, zoomOptions.container, options1.container);
        if (options1.template) {
            var template = isNode(options1.template) ? options1.template : document.querySelector(options1.template);
            newOptions.template = template;
        }
        zoomOptions = _extends({
        }, zoomOptions, newOptions);
        images.forEach(function(image) {
            image.dispatchEvent(createCustomEvent('medium-zoom:update', {
                detail: {
                    zoom: zoom
                }
            }));
        });
        return zoom;
    };
    var clone = function clone1() {
        var options1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        return mediumZoom1(_extends({
        }, zoomOptions, options1));
    };
    var attach = function attach1() {
        for(var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++)selectors[_key] = arguments[_key];
        var newImages = selectors.reduce(function(imagesAccumulator, currentSelector) {
            return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
        }, []);
        newImages.filter(function(newImage) {
            return images.indexOf(newImage) === -1;
        }).forEach(function(newImage) {
            images.push(newImage);
            newImage.classList.add('medium-zoom-image');
        });
        eventListeners.forEach(function(_ref) {
            var type = _ref.type, listener = _ref.listener, options1 = _ref.options;
            newImages.forEach(function(image) {
                image.addEventListener(type, listener, options1);
            });
        });
        return zoom;
    };
    var detach = function detach1() {
        for(var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++)selectors[_key2] = arguments[_key2];
        if (active.zoomed) close();
        var imagesToDetach = selectors.length > 0 ? selectors.reduce(function(imagesAccumulator, currentSelector) {
            return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
        }, []) : images;
        imagesToDetach.forEach(function(image) {
            image.classList.remove('medium-zoom-image');
            image.dispatchEvent(createCustomEvent('medium-zoom:detach', {
                detail: {
                    zoom: zoom
                }
            }));
        });
        images = images.filter(function(image) {
            return imagesToDetach.indexOf(image) === -1;
        });
        return zoom;
    };
    var on = function on1(type, listener) {
        var options1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        };
        images.forEach(function(image) {
            image.addEventListener('medium-zoom:' + type, listener, options1);
        });
        eventListeners.push({
            type: 'medium-zoom:' + type,
            listener: listener,
            options: options1
        });
        return zoom;
    };
    var off = function off1(type, listener) {
        var options1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        };
        images.forEach(function(image) {
            image.removeEventListener('medium-zoom:' + type, listener, options1);
        });
        eventListeners = eventListeners.filter(function(eventListener) {
            return !(eventListener.type === 'medium-zoom:' + type && eventListener.listener.toString() === listener.toString());
        });
        return zoom;
    };
    var open = function open1() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        }, target = _ref2.target;
        var _animate = function _animate1() {
            var container = {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            var viewportWidth = void 0;
            var viewportHeight = void 0;
            if (zoomOptions.container) {
                if (zoomOptions.container instanceof Object) {
                    // The container is given as an object with properties like width, height, left, top
                    container = _extends({
                    }, container, zoomOptions.container);
                    // We need to adjust custom options like container.right or container.bottom
                    viewportWidth = container.width - container.left - container.right - zoomOptions.margin * 2;
                    viewportHeight = container.height - container.top - container.bottom - zoomOptions.margin * 2;
                } else {
                    // The container is given as an element
                    var zoomContainer = isNode(zoomOptions.container) ? zoomOptions.container : document.querySelector(zoomOptions.container);
                    var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(), _width = _zoomContainer$getBou.width, _height = _zoomContainer$getBou.height, _left = _zoomContainer$getBou.left, _top = _zoomContainer$getBou.top;
                    container = _extends({
                    }, container, {
                        width: _width,
                        height: _height,
                        left: _left,
                        top: _top
                    });
                }
            }
            viewportWidth = viewportWidth || container.width - zoomOptions.margin * 2;
            viewportHeight = viewportHeight || container.height - zoomOptions.margin * 2;
            var zoomTarget = active.zoomedHd || active.original;
            var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
            var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;
            var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(), top = _zoomTarget$getBoundi.top, left = _zoomTarget$getBoundi.left, width = _zoomTarget$getBoundi.width, height = _zoomTarget$getBoundi.height;
            var scaleX = Math.min(naturalWidth, viewportWidth) / width;
            var scaleY = Math.min(naturalHeight, viewportHeight) / height;
            var scale = Math.min(scaleX, scaleY);
            var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions.margin + container.left) / scale;
            var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions.margin + container.top) / scale;
            var transform = 'scale(' + scale + ') translate3d(' + translateX + 'px, ' + translateY + 'px, 0)';
            active.zoomed.style.transform = transform;
            if (active.zoomedHd) active.zoomedHd.style.transform = transform;
        };
        return new Promise1(function(resolve) {
            if (target && images.indexOf(target) === -1) {
                resolve(zoom);
                return;
            }
            var _handleOpenEnd = function _handleOpenEnd1() {
                isAnimating = false;
                active.zoomed.removeEventListener('transitionend', _handleOpenEnd1);
                active.original.dispatchEvent(createCustomEvent('medium-zoom:opened', {
                    detail: {
                        zoom: zoom
                    }
                }));
                resolve(zoom);
            };
            if (active.zoomed) {
                resolve(zoom);
                return;
            }
            if (target) // The zoom was triggered manually via a click
            active.original = target;
            else if (images.length > 0) {
                var _images = images;
                active.original = _images[0];
            } else {
                resolve(zoom);
                return;
            }
            active.original.dispatchEvent(createCustomEvent('medium-zoom:open', {
                detail: {
                    zoom: zoom
                }
            }));
            scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            isAnimating = true;
            active.zoomed = cloneTarget(active.original);
            document.body.appendChild(overlay);
            if (zoomOptions.template) {
                var template = isNode(zoomOptions.template) ? zoomOptions.template : document.querySelector(zoomOptions.template);
                active.template = document.createElement('div');
                active.template.appendChild(template.content.cloneNode(true));
                document.body.appendChild(active.template);
            }
            document.body.appendChild(active.zoomed);
            window.requestAnimationFrame(function() {
                document.body.classList.add('medium-zoom--opened');
            });
            active.original.classList.add('medium-zoom-image--hidden');
            active.zoomed.classList.add('medium-zoom-image--opened');
            active.zoomed.addEventListener('click', close);
            active.zoomed.addEventListener('transitionend', _handleOpenEnd);
            if (active.original.getAttribute('data-zoom-src')) {
                active.zoomedHd = active.zoomed.cloneNode();
                // Reset the `scrset` property or the HD image won't load.
                active.zoomedHd.removeAttribute('srcset');
                active.zoomedHd.removeAttribute('sizes');
                active.zoomedHd.src = active.zoomed.getAttribute('data-zoom-src');
                active.zoomedHd.onerror = function() {
                    clearInterval(getZoomTargetSize);
                    console.warn('Unable to reach the zoom image target ' + active.zoomedHd.src);
                    active.zoomedHd = null;
                    _animate();
                };
                // We need to access the natural size of the full HD
                // target as fast as possible to compute the animation.
                var getZoomTargetSize = setInterval(function() {
                    if (active.zoomedHd.complete) {
                        clearInterval(getZoomTargetSize);
                        active.zoomedHd.classList.add('medium-zoom-image--opened');
                        active.zoomedHd.addEventListener('click', close);
                        document.body.appendChild(active.zoomedHd);
                        _animate();
                    }
                }, 10);
            } else if (active.original.hasAttribute('srcset')) {
                // If an image has a `srcset` attribuet, we don't know the dimensions of the
                // zoomed (HD) image (like when `data-zoom-src` is specified).
                // Therefore the approach is quite similar.
                active.zoomedHd = active.zoomed.cloneNode();
                // Resetting the sizes attribute tells the browser to load the
                // image best fitting the current viewport size, respecting the `srcset`.
                active.zoomedHd.removeAttribute('sizes');
                // In Firefox, the `loading` attribute needs to be set to `eager` (default
                // value) for the load event to be fired.
                active.zoomedHd.removeAttribute('loading');
                // Wait for the load event of the hd image. This will fire if the image
                // is already cached.
                var loadEventListener = active.zoomedHd.addEventListener('load', function() {
                    active.zoomedHd.removeEventListener('load', loadEventListener);
                    active.zoomedHd.classList.add('medium-zoom-image--opened');
                    active.zoomedHd.addEventListener('click', close);
                    document.body.appendChild(active.zoomedHd);
                    _animate();
                });
            } else _animate();
        });
    };
    var close = function close1() {
        return new Promise1(function(resolve) {
            if (isAnimating || !active.original) {
                resolve(zoom);
                return;
            }
            var _handleCloseEnd = function _handleCloseEnd1() {
                active.original.classList.remove('medium-zoom-image--hidden');
                document.body.removeChild(active.zoomed);
                if (active.zoomedHd) document.body.removeChild(active.zoomedHd);
                document.body.removeChild(overlay);
                active.zoomed.classList.remove('medium-zoom-image--opened');
                if (active.template) document.body.removeChild(active.template);
                isAnimating = false;
                active.zoomed.removeEventListener('transitionend', _handleCloseEnd1);
                active.original.dispatchEvent(createCustomEvent('medium-zoom:closed', {
                    detail: {
                        zoom: zoom
                    }
                }));
                active.original = null;
                active.zoomed = null;
                active.zoomedHd = null;
                active.template = null;
                resolve(zoom);
            };
            isAnimating = true;
            document.body.classList.remove('medium-zoom--opened');
            active.zoomed.style.transform = '';
            if (active.zoomedHd) active.zoomedHd.style.transform = '';
            // Fade out the template so it's not too abrupt
            if (active.template) {
                active.template.style.transition = 'opacity 150ms';
                active.template.style.opacity = 0;
            }
            active.original.dispatchEvent(createCustomEvent('medium-zoom:close', {
                detail: {
                    zoom: zoom
                }
            }));
            active.zoomed.addEventListener('transitionend', _handleCloseEnd);
        });
    };
    var toggle = function toggle1() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        }, target = _ref3.target;
        if (active.original) return close();
        return open({
            target: target
        });
    };
    var getOptions = function getOptions1() {
        return zoomOptions;
    };
    var getImages = function getImages1() {
        return images;
    };
    var getZoomedImage = function getZoomedImage1() {
        return active.original;
    };
    var images = [];
    var eventListeners = [];
    var isAnimating = false;
    var scrollTop = 0;
    var zoomOptions = options;
    var active = {
        original: null,
        zoomed: null,
        zoomedHd: null,
        template: null
    };
    if (Object.prototype.toString.call(selector) === '[object Object]') zoomOptions = selector;
    else if (selector || typeof selector === 'string' // to process empty string as a selector
    ) attach(selector);
    // Apply the default option values
    zoomOptions = _extends({
        margin: 0,
        background: '#fff',
        scrollOffset: 40,
        container: null,
        template: null
    }, zoomOptions);
    var overlay = createOverlay(zoomOptions.background);
    document.addEventListener('click', _handleClick);
    document.addEventListener('keyup', _handleKeyUp);
    document.addEventListener('scroll', _handleScroll);
    window.addEventListener('resize', close);
    var zoom = {
        open: open,
        close: close,
        toggle: toggle,
        update: update,
        clone: clone,
        attach: attach,
        detach: detach,
        on: on,
        off: off,
        getOptions: getOptions,
        getImages: getImages,
        getZoomedImage: getZoomedImage
    };
    return zoom;
};
function styleInject(css, ref) {
    if (ref === void 0) ref = {
    };
    var insertAt = ref.insertAt;
    if (!css || typeof document === 'undefined') return;
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (insertAt === 'top') {
        if (head.firstChild) head.insertBefore(style, head.firstChild);
        else head.appendChild(style);
    } else head.appendChild(style);
    if (style.styleSheet) style.styleSheet.cssText = css;
    else style.appendChild(document.createTextNode(css));
}
var css = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
styleInject(css);
exports.default = mediumZoom;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hFSkN":[function(require,module,exports) {
/*!
 * Splide.js
 * Version  : 2.4.20
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */ (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
    else if (typeof define === 'function' && define.amd) define([], factory);
    else if (typeof exports === 'object') exports["Splide"] = factory();
    else root["Splide"] = factory();
})(self, function() {
    return(/******/ (()=>{
        /******/ var __webpack_modules__ = {
            /***/ 311: (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                // ESM COMPAT FLAG
                __webpack_require__.r(__webpack_exports__);
                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "default": ()=>/* binding */ module_Splide
                });
                // NAMESPACE OBJECT: ./src/js/constants/states.js
                var states_namespaceObject = {
                };
                __webpack_require__.r(states_namespaceObject);
                __webpack_require__.d(states_namespaceObject, {
                    "CREATED": ()=>CREATED
                    ,
                    "DESTROYED": ()=>DESTROYED
                    ,
                    "IDLE": ()=>IDLE
                    ,
                    "MOUNTED": ()=>MOUNTED
                    ,
                    "MOVING": ()=>MOVING
                });
                /**
 * The function for providing an Event object simply managing events.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The function for providing an Event object simply managing events.
 */ /* harmony default export */ const core_event = function() {
                    /**
   * Store all event data.
   *
   * @type {Array}
   */ var data = [];
                    var Event1 = {
                        /**
     * Subscribe the given event(s).
     *
     * @param {string}   events  - An event name. Use space to separate multiple events.
     *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
     * @param {function} handler - A callback function.
     * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
     * @param {Object}   options - Optional. Options for addEventListener.
     */ on: function on(events, handler, elm, options) {
                            if (elm === void 0) elm = null;
                            if (options === void 0) options = {
                            };
                            events.split(' ').forEach(function(event) {
                                if (elm) elm.addEventListener(event, handler, options);
                                data.push({
                                    event: event,
                                    handler: handler,
                                    elm: elm,
                                    options: options
                                });
                            });
                        },
                        /**
     * Unsubscribe the given event(s).
     *
     * @param {string}  events - A event name or names split by space.
     * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
     */ off: function off(events, elm) {
                            if (elm === void 0) elm = null;
                            events.split(' ').forEach(function(event) {
                                data = data.filter(function(item) {
                                    if (item && item.event === event && item.elm === elm) {
                                        unsubscribe(item);
                                        return false;
                                    }
                                    return true;
                                });
                            });
                        },
                        /**
     * Emit an event.
     * This method is only for custom events.
     *
     * @param {string}  event - An event name.
     * @param {*}       args  - Any number of arguments passed to handlers.
     */ emit: function emit(event) {
                            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
                            data.forEach(function(item) {
                                if (!item.elm && item.event.split('.')[0] === event) item.handler.apply(item, args);
                            });
                        },
                        /**
     * Clear event data.
     */ destroy: function destroy() {
                            data.forEach(unsubscribe);
                            data = [];
                        }
                    };
                    /**
   * Remove the registered event listener.
   *
   * @param {Object} item - An object containing event data.
   */ function unsubscribe(item) {
                        if (item.elm) item.elm.removeEventListener(item.event, item.handler, item.options);
                    }
                    return Event1;
                };
                /**
 * The function providing a super simple state system.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The function providing a super simple state system.
 *
 * @param {string|number} initialState - Provide the initial state value.
 */ /* harmony default export */ const state = function(initialState) {
                    /**
   * Store the current state.
   *
   * @type {string|number}
   */ var curr = initialState;
                    return {
                        /**
     * Change state.
     *
     * @param {string|number} state - A new state.
     */ set: function set(state1) {
                            curr = state1;
                        },
                        /**
     * Verify if the current state is given one or not.
     *
     * @param {string|number} state - A state name to be verified.
     *
     * @return {boolean} - True if the current state is the given one.
     */ is: function is(state1) {
                            return state1 === curr;
                        }
                    };
                };
                function _extends() {
                    _extends = Object.assign || function(target) {
                        for(var i = 1; i < arguments.length; i++){
                            var source = arguments[i];
                            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                        }
                        return target;
                    };
                    return _extends.apply(this, arguments);
                }
                /**
 * Some utility functions related with Object, supporting IE.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ var keys = Object.keys;
                /**
 * Iterate an object like Array.forEach.
 * IE doesn't support forEach of HTMLCollection.
 *
 * @param {Object}    obj       - An object.
 * @param {function}  callback  - A function handling each value. Arguments are value, property and index.
 */ function each(obj, callback) {
                    keys(obj).some(function(key, index) {
                        return callback(obj[key], key, index);
                    });
                }
                /**
 * Return values of the given object as an array.
 * IE doesn't support Object.values.
 *
 * @param {Object} obj - An object.
 *
 * @return {Array} - An array containing all values of the given object.
 */ function values(obj) {
                    return keys(obj).map(function(key) {
                        return obj[key];
                    });
                }
                /**
 * Check if the given subject is object or not.
 *
 * @param {*} subject - A subject to be verified.
 *
 * @return {boolean} - True if object, false otherwise.
 */ function isObject(subject) {
                    return typeof subject === 'object';
                }
                /**
 * Merge two objects deeply.
 *
 * @param {Object} to   - An object where "from" is merged.
 * @param {Object} from - An object merged to "to".
 *
 * @return {Object} - A merged object.
 */ function merge(_ref, from) {
                    var to = _extends({
                    }, _ref);
                    each(from, function(value, key) {
                        if (isObject(value)) {
                            if (!isObject(to[key])) to[key] = {
                            };
                            to[key] = merge(to[key], value);
                        } else to[key] = value;
                    });
                    return to;
                }
                /**
 * Assign all properties "from" to "to" object.
 *
 * @param {Object} to   - An object where properties are assigned.
 * @param {Object} from - An object whose properties are assigned to "to".
 *
 * @return {Object} - An assigned object.
 */ function object_assign(to, from) {
                    keys(from).forEach(function(key) {
                        if (!to[key]) Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));
                    });
                    return to;
                }
                /**
 * A package of some miscellaneous utility functions.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Convert the given value to array.
 *
 * @param {*} value - Any value.
 *
 * @return {*[]} - Array containing the given value.
 */ function toArray(value) {
                    return Array.isArray(value) ? value : [
                        value
                    ];
                }
                /**
 * Check if the given value is between min and max.
 * Min will be returned when the value is less than min or max will do when greater than max.
 *
 * @param {number} value - A number to be checked.
 * @param {number} m1    - Minimum or maximum number.
 * @param {number} m2    - Maximum or minimum number.
 *
 * @return {number} - A value itself, min or max.
 */ function between(value, m1, m2) {
                    return Math.min(Math.max(value, m1 > m2 ? m2 : m1), m1 > m2 ? m1 : m2);
                }
                /**
 * The sprintf method with minimum functionality.
 *
 * @param {string}       format       - The string format.
 * @param {string|Array} replacements - Replacements accepting multiple arguments.
 *
 * @returns {string} - Converted string.
 */ function sprintf(format, replacements) {
                    var i = 0;
                    return format.replace(/%s/g, function() {
                        return toArray(replacements)[i++];
                    });
                }
                /**
 * Append px unit to the given subject if necessary.
 *
 * @param {number|string} value - A value that may not include an unit.
 *
 * @return {string} - If the value is string, return itself.
 *                    If number, do value + "px". An empty string, otherwise.
 */ function unit(value) {
                    var type = typeof value;
                    if (type === 'number' && value > 0) return parseFloat(value) + 'px';
                    return type === 'string' ? value : '';
                }
                /**
 * Pad start with 0.
 *
 * @param {number} number - A number to be filled with 0.
 *
 * @return {string|number} - Padded number.
 */ function pad(number) {
                    return number < 10 ? '0' + number : number;
                }
                /**
 * Convert the given value to pixel.
 *
 * @param {Element}       root  - Root element where a dummy div is appended.
 * @param {string|number} value - CSS value to be converted, such as 10rem.
 *
 * @return {number} - Pixel.
 */ function toPixel(root, value) {
                    if (typeof value === 'string') {
                        var div = create('div', {
                        });
                        applyStyle(div, {
                            position: 'absolute',
                            width: value
                        });
                        append(root, div);
                        value = div.clientWidth;
                        dom_remove(div);
                    }
                    return +value || 0;
                }
                /**
 * Some utility functions related with DOM.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Find the first element matching the given selector.
 * Be aware that all selectors after a space are ignored.
 *
 * @param {Element|Node}  elm       - An ancestor element.
 * @param {string}        selector  - DOMString.
 *
 * @return {Element|null} - A found element or null.
 */ function find(elm, selector) {
                    return elm ? elm.querySelector(selector.split(' ')[0]) : null;
                }
                /**
 * Find a first child having the given tag or class name.
 *
 * @param {Element} parent         - A parent element.
 * @param {string}  tagOrClassName - A tag or class name.
 *
 * @return {Element|undefined} - A found element on success or undefined on failure.
 */ function child(parent, tagOrClassName) {
                    return children(parent, tagOrClassName)[0];
                }
                /**
 * Return chile elements that matches the provided tag or class name.
 *
 * @param {Element} parent         - A parent element.
 * @param {string}  tagOrClassName - A tag or class name.
 *
 * @return {Element[]} - Found elements.
 */ function children(parent, tagOrClassName) {
                    if (parent) return values(parent.children).filter(function(child1) {
                        return hasClass(child1, tagOrClassName.split(' ')[0]) || child1.tagName === tagOrClassName;
                    });
                    return [];
                }
                /**
 * Create an element with some optional attributes.
 *
 * @param {string} tag   - A tag name.
 * @param {Object} attrs - An object any attribute pairs of name and value.
 *
 * @return {Element} - A created element.
 */ function create(tag, attrs) {
                    var elm = document.createElement(tag);
                    each(attrs, function(value, key) {
                        return setAttribute(elm, key, value);
                    });
                    return elm;
                }
                /**
 * Convert HTML string to DOM node.
 *
 * @param {string} html - HTML string.
 *
 * @return {Node} - A created node.
 */ function domify(html) {
                    var div = create('div', {
                    });
                    div.innerHTML = html;
                    return div.firstChild;
                }
                /**
 * Remove a given element from a DOM tree.
 *
 * @param {Element|Element[]} elms - Element(s) to be removed.
 */ function dom_remove(elms) {
                    toArray(elms).forEach(function(elm) {
                        if (elm) {
                            var parent = elm.parentElement;
                            parent && parent.removeChild(elm);
                        }
                    });
                }
                /**
 * Append a child to a given element.
 *
 * @param {Element} parent - A parent element.
 * @param {Element} child  - An element to be appended.
 */ function append(parent, child1) {
                    if (parent) parent.appendChild(child1);
                }
                /**
 * Insert an element before the reference element.
 *
 * @param {Element|Node} ref - A reference element.
 * @param {Element}      elm - An element to be inserted.
 */ function before(elm, ref) {
                    if (elm && ref) {
                        var parent = ref.parentElement;
                        parent && parent.insertBefore(elm, ref);
                    }
                }
                /**
 * Apply styles to the given element.
 *
 * @param {Element} elm     - An element where styles are applied.
 * @param {Object}  styles  - Object containing styles.
 */ function applyStyle(elm, styles) {
                    if (elm) each(styles, function(value, prop) {
                        if (value !== null) elm.style[prop] = value;
                    });
                }
                /**
 * Add or remove classes to/from the element.
 * This function is for internal usage.
 *
 * @param {Element}         elm     - An element where classes are added.
 * @param {string|string[]} classes - Class names being added.
 * @param {boolean}         remove  - Whether to remove or add classes.
 */ function addOrRemoveClasses(elm, classes, remove) {
                    if (elm) toArray(classes).forEach(function(name) {
                        if (name) elm.classList[remove ? 'remove' : 'add'](name);
                    });
                }
                /**
 * Add classes to the element.
 *
 * @param {Element}          elm     - An element where classes are added.
 * @param {string|string[]}  classes - Class names being added.
 */ function addClass(elm, classes) {
                    addOrRemoveClasses(elm, classes, false);
                }
                /**
 * Remove a class from the element.
 *
 * @param {Element}         elm     - An element where classes are removed.
 * @param {string|string[]} classes - A class name being removed.
 */ function removeClass(elm, classes) {
                    addOrRemoveClasses(elm, classes, true);
                }
                /**
 * Verify if the provided element has the class or not.
 *
 * @param {Element} elm       - An element.
 * @param {string}  className - A class name.
 *
 * @return {boolean} - True if the element has the class or false if not.
 */ function hasClass(elm, className) {
                    return !!elm && elm.classList.contains(className);
                }
                /**
 * Set attribute to the given element.
 *
 * @param {Element}                 elm   - An element where an attribute is assigned.
 * @param {string}                  name  - Attribute name.
 * @param {string|number|boolean}   value - Attribute value.
 */ function setAttribute(elm, name, value) {
                    if (elm) elm.setAttribute(name, value);
                }
                /**
 * Get attribute from the given element.
 *
 * @param {Element} elm  - An element where an attribute is assigned.
 * @param {string}  name - Attribute name.
 *
 * @return {string} - The value of the given attribute if available. An empty string if not.
 */ function getAttribute(elm, name) {
                    return elm ? elm.getAttribute(name) : '';
                }
                /**
 * Remove attribute from the given element.
 *
 * @param {Element|Element[]} elms  - An element where an attribute is removed.
 * @param {string|string[]}      names - Attribute name.
 */ function removeAttribute(elms, names) {
                    toArray(names).forEach(function(name) {
                        toArray(elms).forEach(function(elm) {
                            return elm && elm.removeAttribute(name);
                        });
                    });
                }
                /**
 * Return the Rect object of the provided object.
 *
 * @param {Element} elm - An element.
 *
 * @return {ClientRect|DOMRect} - A rect object.
 */ function getRect(elm) {
                    return elm.getBoundingClientRect();
                }
                /**
 * Trigger the given callback after all images contained by the element are loaded.
 *
 * @param {Element}  elm      - Element that may contain images.
 * @param {Function} callback - Callback function fired right after all images are loaded.
 */ function loaded1(elm, callback) {
                    var images = elm.querySelectorAll('img');
                    var length = images.length;
                    if (length) {
                        var count = 0;
                        each(images, function(img) {
                            img.onload = img.onerror = function() {
                                if ((++count) === length) callback();
                            };
                        });
                    } else // Trigger the callback immediately if there is no image.
                    callback();
                }
                /**
 * Export slider types.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Normal slider.
 *
 * @type {string}
 */ var SLIDE = 'slide';
                /**
 * Loop after the last slide and before the first one.
 *
 * @type {string}
 */ var LOOP = 'loop';
                /**
 * The track doesn't move.
 *
 * @type {string}
 */ var FADE = 'fade';
                /**
 * The component for general slide effect transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The component for general slide effect transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const slide = function(Splide, Components) {
                    /**
   * Hold the list element.
   *
   * @type {Element}
   */ var list;
                    /**
   * Hold the onEnd callback function.
   *
   * @type {function}
   */ var endCallback;
                    return {
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            list = Components.Elements.list;
                            Splide.on('transitionend', function(e) {
                                if (e.target === list && endCallback) endCallback();
                            }, list);
                        },
                        /**
     * Start transition.
     *
     * @param {number}   destIndex - Destination slide index that might be clone's.
     * @param {number}   newIndex  - New index.
     * @param {number}   prevIndex - Previous index.
     * @param {Object}   coord     - Destination coordinates.
     * @param {function} done      - Callback function must be invoked when transition is completed.
     */ start: function start(destIndex, newIndex, prevIndex, coord, done) {
                            var options = Splide.options;
                            var edgeIndex = Components.Controller.edgeIndex;
                            var speed = options.speed;
                            endCallback = done;
                            if (Splide.is(SLIDE)) {
                                if (prevIndex === 0 && newIndex >= edgeIndex || prevIndex >= edgeIndex && newIndex === 0) speed = options.rewindSpeed || speed;
                            }
                            applyStyle(list, {
                                transition: "transform " + speed + "ms " + options.easing,
                                transform: "translate(" + coord.x + "px," + coord.y + "px)"
                            });
                        }
                    };
                };
                /**
 * The component for fade transition.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The component for fade transition.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const fade = function(Splide, Components) {
                    var Fade = {
                        /**
     * Called when the component is mounted.
     * Apply transition style to the first slide.
     */ mount: function mount() {
                            apply(Splide.index);
                        },
                        /**
     * Start transition.
     *
     * @param {number}    destIndex - Destination slide index that might be clone's.
     * @param {number}    newIndex  - New index.
     * @param {number}    prevIndex - Previous index.
     * @param {Object}    coord     - Destination coordinates.
     * @param {function}  done      - Callback function must be invoked when transition is completed.
     */ start: function start(destIndex, newIndex, prevIndex, coord, done) {
                            var track = Components.Elements.track;
                            applyStyle(track, {
                                height: unit(track.clientHeight)
                            });
                            apply(newIndex);
                            setTimeout(function() {
                                done();
                                applyStyle(track, {
                                    height: ''
                                });
                            });
                        }
                    };
                    /**
   * Apply transition style to the slide specified by the given index.
   *
   * @param {number} index - A slide index.
   */ function apply(index) {
                        var options = Splide.options;
                        applyStyle(Components.Elements.slides[index], {
                            transition: "opacity " + options.speed + "ms " + options.easing
                        });
                    }
                    return Fade;
                };
                /**
 * Provide a function for composing components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Compose components.
 *
 * @param {Splide}   Splide     - Splide instance.
 * @param {Object}   Components - Additional components.
 * @param {function} Transition - Change component for transition.
 *
 * @return {Object} - An object containing all components.
 */ function compose(Splide, Components, Transition) {
                    var components = {
                    };
                    each(Components, function(Component, name) {
                        components[name] = Component(Splide, components, name.toLowerCase());
                    });
                    if (!Transition) Transition = Splide.is(FADE) ? fade : slide;
                    components.Transition = Transition(Splide, components);
                    return components;
                }
                /**
 * Utility functions for outputting logs.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Prefix of an error massage.
 *
 * @type {string}
 */ var MESSAGE_PREFIX = '[SPLIDE]';
                /**
 * Display an error message on the browser console.
 *
 * @param {string} message - An error message.
 */ function error(message) {
                    console.error(MESSAGE_PREFIX + " " + message);
                }
                /**
 * Check existence of the given object and throw an error if it doesn't.
 *
 * @throws {Error}
 *
 * @param {*}      subject - A subject to be confirmed.
 * @param {string} message - An error message.
 */ function exist(subject, message) {
                    if (!subject) throw new Error(message);
                }
                /**
 * Export class names.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * A root class name.
 *
 * @type {string}
 */ var ROOT = 'splide';
                /**
 * The definition table of all classes for elements.
 * They might be modified by options.
 *
 * @type {Object}
 */ var ELEMENT_CLASSES = {
                    root: ROOT,
                    slider: ROOT + "__slider",
                    track: ROOT + "__track",
                    list: ROOT + "__list",
                    slide: ROOT + "__slide",
                    container: ROOT + "__slide__container",
                    arrows: ROOT + "__arrows",
                    arrow: ROOT + "__arrow",
                    prev: ROOT + "__arrow--prev",
                    next: ROOT + "__arrow--next",
                    pagination: ROOT + "__pagination",
                    page: ROOT + "__pagination__page",
                    clone: ROOT + "__slide--clone",
                    progress: ROOT + "__progress",
                    bar: ROOT + "__progress__bar",
                    autoplay: ROOT + "__autoplay",
                    play: ROOT + "__play",
                    pause: ROOT + "__pause",
                    spinner: ROOT + "__spinner",
                    sr: ROOT + "__sr"
                };
                /**
 * Definitions of status classes.
 *
 * @type {Object}
 */ var STATUS_CLASSES = {
                    active: 'is-active',
                    visible: 'is-visible',
                    loading: 'is-loading'
                };
                /**
 * Export i18n texts as object.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Texts for i18n.
 *
 * @type {Object}
 */ var I18N = {
                    prev: 'Previous slide',
                    next: 'Next slide',
                    first: 'Go to first slide',
                    last: 'Go to last slide',
                    slideX: 'Go to slide %s',
                    pageX: 'Go to page %s',
                    play: 'Start autoplay',
                    pause: 'Pause autoplay'
                };
                /**
 * Export default options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ var DEFAULTS = {
                    /**
   * Determine a slider type.
   * - 'slide': Regular slider.
   * - 'loop' : Carousel slider.
   * - 'fade' : Change slides with fade transition. perPage, drag options are ignored.
   *
   * @type {string}
   */ type: 'slide',
                    /**
   * Whether to rewind a slider before the first slide or after the last one.
   * In "loop" mode, this option is ignored.
   *
   * @type {boolean}
   */ rewind: false,
                    /**
   * Transition speed in milliseconds.
   *
   * @type {number}
   */ speed: 400,
                    /**
   * Transition speed on rewind in milliseconds.
   *
   * @type {number}
   */ rewindSpeed: 0,
                    /**
   * Whether to prevent any actions while a slider is transitioning.
   * If false, navigation, drag and swipe work while the slider is running.
   * Even so, it will be forced to wait for transition in some cases in the loop mode to shift a slider.
   *
   * @type {boolean}
   */ waitForTransition: true,
                    /**
   * Define slider max width.
   *
   * @type {number}
   */ width: 0,
                    /**
   * Define slider height.
   *
   * @type {number}
   */ height: 0,
                    /**
   * Fix width of slides. CSS format is allowed such as 10em, 80% or 80vw.
   * perPage number will be ignored when this option is falsy.
   *
   * @type {number|string}
   */ fixedWidth: 0,
                    /**
   * Fix height of slides. CSS format is allowed such as 10em, 80vh but % unit is not accepted.
   * heightRatio option will be ignored when this option is falsy.
   *
   * @type {number|string}
   */ fixedHeight: 0,
                    /**
   * Determine height of slides by ratio to a slider width.
   * This will be ignored when the fixedHeight is provided.
   *
   * @type {number}
   */ heightRatio: 0,
                    /**
   * If true, slide width will be determined by the element width itself.
   * - perPage/perMove should be 1.
   *
   * @type {boolean}
   */ autoWidth: false,
                    /**
   * If true, slide height will be determined by the element width itself.
   * - perPage/perMove should be 1.
   *
   * @type {boolean}
   */ autoHeight: false,
                    /**
   * Determine how many slides should be displayed per page.
   *
   * @type {number}
   */ perPage: 1,
                    /**
   * Determine how many slides should be moved when a slider goes to next or perv.
   *
   * @type {number}
   */ perMove: 0,
                    /**
   * Determine manually how many clones should be generated on the left and right side.
   * The total number of clones will be twice of this number.
   *
   * @type {number}
   */ clones: 0,
                    /**
   * Start index.
   *
   * @type {number}
   */ start: 0,
                    /**
   * Determine which slide should be focused if there are multiple slides in a page.
   * A string "center" is acceptable for centering slides.
   *
   * @type {boolean|number|string}
   */ focus: false,
                    /**
   * Gap between slides. CSS format is allowed such as 1em.
   *
   * @type {number|string}
   */ gap: 0,
                    /**
   * Set padding-left/right in horizontal mode or padding-top/bottom in vertical one.
   * Give a single value to set a same size for both sides or
   * do an object for different sizes.
   * Also, CSS format is allowed such as 1em.
   *
   * @example
   * - 10: Number
   * - '1em': CSS format.
   * - { left: 0, right: 20 }: Object for different sizes in horizontal mode.
   * - { top: 0, bottom: 20 }: Object for different sizes in vertical mode.
   *
   * @type {number|string|Object}
   */ padding: 0,
                    /**
   * Whether to append arrows.
   *
   * @type {boolean}
   */ arrows: true,
                    /**
   * Change the arrow SVG path like 'm7.61 0.807-2.12...'.
   *
   * @type {string}
   */ arrowPath: '',
                    /**
   * Whether to append pagination(indicator dots) or not.
   *
   * @type {boolean}
   */ pagination: true,
                    /**
   * Activate autoplay.
   *
   * @type {boolean}
   */ autoplay: false,
                    /**
   * Autoplay interval in milliseconds.
   *
   * @type {number}
   */ interval: 5000,
                    /**
   * Whether to stop autoplay when a slider is hovered.
   *
   * @type {boolean}
   */ pauseOnHover: true,
                    /**
   * Whether to stop autoplay when a slider elements are focused.
   * True is recommended for accessibility.
   *
   * @type {boolean}
   */ pauseOnFocus: true,
                    /**
   * Whether to reset progress of the autoplay timer when resumed.
   *
   * @type {boolean}
   */ resetProgress: true,
                    /**
   * Loading images lazily.
   * Image src must be provided by a data-splide-lazy attribute.
   *
   * - false: Do nothing.
   * - 'nearby': Only images around an active slide will be loaded.
   * - 'sequential': All images will be sequentially loaded.
   *
   * @type {boolean|string}
   */ lazyLoad: false,
                    /**
   * This option works only when a lazyLoad option is "nearby".
   * Determine how many pages(not slides) around an active slide should be loaded beforehand.
   *
   * @type {number}
   */ preloadPages: 1,
                    /**
   * Easing for CSS transition. For example, linear, ease or cubic-bezier().
   *
   * @type {string}
   */ easing: 'cubic-bezier(.42,.65,.27,.99)',
                    /**
   * Whether to enable keyboard shortcuts
   * - true or 'global': Listen to keydown event of the document.
   * - 'focused': Listen to the keydown event of the slider root element. tabindex="0" will be added to the element.
   * - false: Disable keyboard shortcuts.
   *
   * @type {boolean|string}
   */ keyboard: 'global',
                    /**
   * Whether to allow mouse drag and touch swipe.
   *
   * @type {boolean}
   */ drag: true,
                    /**
   * The angle threshold for drag.
   * The slider starts moving only when the drag angle is less than this threshold.
   *
   * @type {number}
   */ dragAngleThreshold: 30,
                    /**
   * Distance threshold for determining if the action is "flick" or "swipe".
   * When a drag distance is over this value, the action will be treated as "swipe", not "flick".
   *
   * @type {number}
   */ swipeDistanceThreshold: 150,
                    /**
   * Velocity threshold for determining if the action is "flick" or "swipe".
   * Around 0.5 is recommended.
   *
   * @type {number}
   */ flickVelocityThreshold: 0.6,
                    /**
   * Determine power of flick. The larger number this is, the farther a slider runs by flick.
   * Around 500 is recommended.
   *
   * @type {number}
   */ flickPower: 600,
                    /**
   * Limit a number of pages to move by flick.
   *
   * @type {number}
   */ flickMaxPages: 1,
                    /**
   * Slider direction.
   * - 'ltr': Left to right.
   * - 'rtl': Right to left.
   * - 'ttb': Top to bottom.
   *
   * @type {string}
   */ direction: 'ltr',
                    /**
   * Set img src to background-image of its parent element.
   * Images with various sizes can be displayed as same dimension without cropping work.
   * fixedHeight or heightRatio is required.
   *
   * @type {boolean}
   */ cover: false,
                    /**
   * Whether to enable accessibility(aria and screen reader texts) or not.
   *
   * @type {boolean}
   */ accessibility: true,
                    /**
   * Whether to add tabindex="0" to visible slides or not.
   *
   * @type {boolean}
   */ slideFocus: true,
                    /**
   * Determine if a slider is navigation for another.
   * Use "sync" API to synchronize two sliders.
   *
   * @type {boolean}
   */ isNavigation: false,
                    /**
   * Whether to trim spaces before the fist slide or after the last one when "focus" is not 0.
   *
   * @type {boolean}
   */ trimSpace: true,
                    /**
   * The "is-active" class is added after transition as default.
   * If true, it will be added before move.
   *
   * @type {boolean}
   */ updateOnMove: false,
                    /**
   * Throttle duration in milliseconds for the resize event.
   *
   * @type {number}
   */ throttle: 100,
                    /**
   * Whether to destroy a slider or not.
   *
   * @type {boolean}
   */ destroy: false,
                    /**
   * Options for specific breakpoints.
   *
   * @example
   * {
   *   1000: {
   *     perPage: 3,
   *     gap: 20
   *   },
   *   600: {
   *     perPage: 1,
   *     gap: 5,
   *   }
   * }
   *
   * @type {boolean|Object}
   */ breakpoints: false,
                    /**
   * Collection of class names.
   *
   * @see ./classes.js
   *
   * @type {Object}
   */ classes: ELEMENT_CLASSES,
                    /**
   * Collection of i18n texts.
   *
   * @see ./i18n.js
   *
   * @type {Object}
   */ i18n: I18N
                };
                /**
 * Export state constants.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Splide has been just created.
 *
 * @type {number}
 */ var CREATED = 1;
                /**
 * All components have been mounted and initialized.
 *
 * @type {number}
 */ var MOUNTED = 2;
                /**
 * Splide is ready for transition.
 *
 * @type {number}
 */ var IDLE = 3;
                /**
 * Splide is moving.
 *
 * @type {number}
 */ var MOVING = 4;
                /**
 * Splide is moving.
 *
 * @type {number}
 */ var DESTROYED = 5;
                function _defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }
                /**
 * The main class for applying Splide to an element.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The main class for applying Splide to an element,
 * providing some APIs to control the behavior.
 */ var Splide1 = /*#__PURE__*/ function() {
                    /**
   * Splide constructor.
   *
   * @throws {Error} When the given root element or selector is invalid.
   *
   * @param {Element|string}  root       - A selector for a root element or an element itself.
   * @param {Object}          options    - Optional. Options to change default behaviour.
   * @param {Object}          Components - Optional. Components.
   */ function Splide1(root, options, Components) {
                        if (options === void 0) options = {
                        };
                        if (Components === void 0) Components = {
                        };
                        this.root = root instanceof Element ? root : document.querySelector(root);
                        exist(this.root, 'An invalid element/selector was given.');
                        this.Components = null;
                        this.Event = core_event();
                        this.State = state(CREATED);
                        this.STATES = states_namespaceObject;
                        this._o = merge(DEFAULTS, options);
                        this._i = 0;
                        this._c = Components;
                        this._e = {
                        }; // Extensions
                        this._t = null; // Transition
                    }
                    /**
   * Compose and mount components.
   *
   * @param {Object}   Extensions - Optional. Additional components.
   * @param {function} Transition - Optional. Set a custom transition component.
   *
   * @return {Splide|undefined} - This instance or undefined if an exception occurred.
   */ var _proto = Splide1.prototype;
                    _proto.mount = function mount(Extensions, Transition) {
                        var _this = this;
                        if (Extensions === void 0) Extensions = this._e;
                        if (Transition === void 0) Transition = this._t;
                        // Reset the state.
                        this.State.set(CREATED);
                        this._e = Extensions;
                        this._t = Transition;
                        this.Components = compose(this, merge(this._c, Extensions), Transition);
                        try {
                            each(this.Components, function(component, key) {
                                var required = component.required;
                                if (required === undefined || required) component.mount && component.mount();
                                else delete _this.Components[key];
                            });
                        } catch (e) {
                            error(e.message);
                            return;
                        }
                        var State = this.State;
                        State.set(MOUNTED);
                        each(this.Components, function(component) {
                            component.mounted && component.mounted();
                        });
                        this.emit('mounted');
                        State.set(IDLE);
                        this.emit('ready');
                        applyStyle(this.root, {
                            visibility: 'visible'
                        });
                        this.on('move drag', function() {
                            return State.set(MOVING);
                        }).on('moved dragged', function() {
                            return State.set(IDLE);
                        });
                        return this;
                    };
                    _proto.sync = function sync(splide) {
                        this.sibling = splide;
                        return this;
                    };
                    _proto.on = function on(events, handler, elm, options) {
                        if (elm === void 0) elm = null;
                        if (options === void 0) options = {
                        };
                        this.Event.on(events, handler, elm, options);
                        return this;
                    };
                    _proto.off = function off(events, elm) {
                        if (elm === void 0) elm = null;
                        this.Event.off(events, elm);
                        return this;
                    };
                    _proto.emit = function emit(event) {
                        var _this$Event;
                        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
                        (_this$Event = this.Event).emit.apply(_this$Event, [
                            event
                        ].concat(args));
                        return this;
                    };
                    _proto.go = function go(control, wait) {
                        if (wait === void 0) wait = this.options.waitForTransition;
                        if (this.State.is(IDLE) || this.State.is(MOVING) && !wait) this.Components.Controller.go(control, false);
                        return this;
                    };
                    _proto.is = function is(type) {
                        return type === this._o.type;
                    };
                    _proto.add = function add(slide1, index) {
                        if (index === void 0) index = -1;
                        this.Components.Elements.add(slide1, index, this.refresh.bind(this));
                        return this;
                    };
                    _proto.remove = function remove(index) {
                        this.Components.Elements.remove(index);
                        this.refresh();
                        return this;
                    };
                    _proto.refresh = function refresh() {
                        this.emit('refresh:before').emit('refresh').emit('resize');
                        return this;
                    };
                    _proto.destroy = function destroy(completely) {
                        var _this2 = this;
                        if (completely === void 0) completely = true;
                        // Postpone destroy because it should be done after mount.
                        if (this.State.is(CREATED)) {
                            this.on('ready', function() {
                                return _this2.destroy(completely);
                            });
                            return;
                        }
                        values(this.Components).reverse().forEach(function(component) {
                            component.destroy && component.destroy(completely);
                        });
                        this.emit('destroy', completely); // Destroy all event handlers, including ones for native events.
                        this.Event.destroy();
                        this.State.set(DESTROYED);
                        return this;
                    };
                    _createClass(Splide1, [
                        {
                            key: "index",
                            get: function get() {
                                return this._i;
                            },
                            set: function set(index) {
                                this._i = parseInt(index);
                            }
                        },
                        {
                            key: "length",
                            get: function get() {
                                return this.Components.Elements.length;
                            }
                        },
                        {
                            key: "options",
                            get: function get() {
                                return this._o;
                            },
                            set: function set(options) {
                                var created = this.State.is(CREATED);
                                if (!created) this.emit('update');
                                this._o = merge(this._o, options);
                                if (!created) this.emit('updated', this._o);
                            }
                        },
                        {
                            key: "classes",
                            get: function get() {
                                return this._o.classes;
                            }
                        },
                        {
                            key: "i18n",
                            get: function get() {
                                return this._o.i18n;
                            }
                        }
                    ]);
                    return Splide1;
                }();
                /**
 * The component for initializing options.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The component for initializing options.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const options = function(Splide1) {
                    /**
   * Retrieve options from the data attribute.
   * Note that IE10 doesn't support dataset property.
   *
   * @type {string}
   */ var options1 = getAttribute(Splide1.root, 'data-splide');
                    if (options1) try {
                        Splide1.options = JSON.parse(options1);
                    } catch (e) {
                        error(e.message);
                    }
                    return {
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            if (Splide1.State.is(CREATED)) Splide1.index = Splide1.options.start;
                        }
                    };
                };
                /**
 * Export layout modes.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Enumerate slides from left to right.
 *
 * @type {string}
 */ var LTR = 'ltr';
                /**
 * Enumerate slides from right to left.
 *
 * @type {string}
 */ var RTL = 'rtl';
                /**
 * Enumerate slides in a col.
 *
 * @type {string}
 */ var TTB = 'ttb';
                /**
 * The sub component for handling each slide.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Events for restoring original styles.
 *
 * @type {string}
 */ var STYLE_RESTORE_EVENTS = 'update.slide';
                /**
 * The sub component for handling each slide.
 *
 * @param {Splide}  Splide    - A Splide instance.
 * @param {number}  index     - An unique slide index.
 * @param {number}  realIndex - Clones should pass a real slide index.
 * @param {Element} slide     - A slide element.
 *
 * @return {Object} - The sub component object.
 */ /* harmony default export */ const elements_slide = function(Splide1, index, realIndex, slide1) {
                    /**
   * Whether to update "is-active" class before or after transition.
   *
   * @type {boolean}
   */ var updateOnMove = Splide1.options.updateOnMove;
                    /**
   * Events when the slide status is updated.
   * Append a namespace to remove listeners later.
   *
   * @type {string}
   */ var STATUS_UPDATE_EVENTS = 'ready.slide updated.slide resized.slide moved.slide' + (updateOnMove ? ' move.slide' : '');
                    /**
   * Slide sub component object.
   *
   * @type {Object}
   */ var Slide = {
                        /**
     * Slide element.
     *
     * @type {Element}
     */ slide: slide1,
                        /**
     * Slide index.
     *
     * @type {number}
     */ index: index,
                        /**
     * Real index for clones.
     *
     * @type {number}
     */ realIndex: realIndex,
                        /**
     * Container element if available.
     *
     * @type {Element|undefined}
     */ container: child(slide1, Splide1.classes.container),
                        /**
     * Whether this is a cloned slide or not.
     *
     * @type {boolean}
     */ isClone: realIndex > -1,
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            var _this = this;
                            if (!this.isClone) slide1.id = Splide1.root.id + "-slide" + pad(index + 1);
                            Splide1.on(STATUS_UPDATE_EVENTS, function() {
                                return _this.update();
                            }).on(STYLE_RESTORE_EVENTS, restoreStyles).on('click', function() {
                                return Splide1.emit('click', _this);
                            }, slide1);
                            /*
       * Add "is-active" class to a clone element temporarily
       * and it will be removed on "moved" event.
       */ if (updateOnMove) Splide1.on('move.slide', function(newIndex) {
                                if (newIndex === realIndex) _update(true, false);
                            });
                             // Make sure the slide is shown.
                            applyStyle(slide1, {
                                display: ''
                            }); // Hold the original styles.
                            this.styles = getAttribute(slide1, 'style') || '';
                        },
                        /**
     * Destroy.
     */ destroy: function destroy() {
                            Splide1.off(STATUS_UPDATE_EVENTS).off(STYLE_RESTORE_EVENTS).off('click', slide1);
                            removeClass(slide1, values(STATUS_CLASSES));
                            restoreStyles();
                            removeAttribute(this.container, 'style');
                        },
                        /**
     * Update active and visible status.
     */ update: function update() {
                            _update(this.isActive(), false);
                            _update(this.isVisible(), true);
                        },
                        /**
     * Check whether this slide is active or not.
     *
     * @return {boolean} - True if the slide is active or false if not.
     */ isActive: function isActive() {
                            return Splide1.index === index;
                        },
                        /**
     * Check whether this slide is visible in the viewport or not.
     *
     * @return {boolean} - True if the slide is visible or false if not.
     */ isVisible: function isVisible() {
                            var active = this.isActive();
                            if (Splide1.is(FADE) || active) return active;
                            var ceil = Math.ceil;
                            var trackRect = getRect(Splide1.Components.Elements.track);
                            var slideRect = getRect(slide1);
                            if (Splide1.options.direction === TTB) return trackRect.top <= slideRect.top && slideRect.bottom <= ceil(trackRect.bottom);
                            return trackRect.left <= slideRect.left && slideRect.right <= ceil(trackRect.right);
                        },
                        /**
     * Calculate how far this slide is from another slide and
     * return true if the distance is within the given number.
     *
     * @param {number} from   - Index of a target slide.
     * @param {number} within - True if the slide is within this number.
     *
     * @return {boolean} - True if the slide is within the number or false otherwise.
     */ isWithin: function isWithin(from, within) {
                            var diff = Math.abs(from - index);
                            if (!Splide1.is(SLIDE) && !this.isClone) diff = Math.min(diff, Splide1.length - diff);
                            return diff < within;
                        }
                    };
                    /**
   * Update classes for activity or visibility.
   *
   * @param {boolean} active        - Is active/visible or not.
   * @param {boolean} forVisibility - Toggle classes for activity or visibility.
   */ function _update(active, forVisibility) {
                        var type = forVisibility ? 'visible' : 'active';
                        var className = STATUS_CLASSES[type];
                        if (active) {
                            addClass(slide1, className);
                            Splide1.emit("" + type, Slide);
                        } else if (hasClass(slide1, className)) {
                            removeClass(slide1, className);
                            Splide1.emit("" + (forVisibility ? 'hidden' : 'inactive'), Slide);
                        }
                    }
                    /**
   * Restore the original styles.
   */ function restoreStyles() {
                        setAttribute(slide1, 'style', Slide.styles);
                    }
                    return Slide;
                };
                /**
 * The component for main elements.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The property name for UID stored in a window object.
 *
 * @type {string}
 */ var UID_NAME = 'uid';
                /**
 * The component for main elements.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const components_elements = function(Splide1, Components) {
                    /**
   * Hold the root element.
   *
   * @type {Element}
   */ var root = Splide1.root;
                    /**
   * Hold the class list.
   *
   * @type {Object}
   */ var classes = Splide1.classes;
                    /**
   * Store Slide objects.
   *
   * @type {Array}
   */ var Slides = [];
                    /*
   * Assign unique ID to the root element if it doesn't have the one.
   * Note that IE doesn't support padStart() to fill the uid by 0.
   */ if (!root.id) {
                        window.splide = window.splide || {
                        };
                        var uid = window.splide[UID_NAME] || 0;
                        window.splide[UID_NAME] = ++uid;
                        root.id = "splide" + pad(uid);
                    }
                    /**
   * Elements component object.
   *
   * @type {Object}
   */ var Elements = {
                        /**
     * Called when the component is mounted.
     * Collect main elements and store them as member properties.
     */ mount: function mount() {
                            var _this = this;
                            this.init();
                            Splide1.on('refresh', function() {
                                _this.destroy();
                                _this.init();
                            }).on('updated', function() {
                                removeClass(root, getClasses());
                                addClass(root, getClasses());
                            });
                        },
                        /**
     * Destroy.
     */ destroy: function destroy() {
                            Slides.forEach(function(Slide) {
                                Slide.destroy();
                            });
                            Slides = [];
                            removeClass(root, getClasses());
                        },
                        /**
     * Initialization.
     */ init: function init() {
                            var _this2 = this;
                            collect();
                            addClass(root, getClasses());
                            this.slides.forEach(function(slide1, index) {
                                _this2.register(slide1, index, -1);
                            });
                        },
                        /**
     * Register a slide to create a Slide object and handle its behavior.
     *
     * @param {Element} slide     - A slide element.
     * @param {number}  index     - A unique index. This can be negative.
     * @param {number}  realIndex - A real index for clones. Set -1 for real slides.
     */ register: function register(slide1, index, realIndex) {
                            var SlideObject = elements_slide(Splide1, index, realIndex, slide1);
                            SlideObject.mount();
                            Slides.push(SlideObject);
                        },
                        /**
     * Return the Slide object designated by the index.
     * Note that "find" is not supported by IE.
     *
     * @return {Object|undefined} - A Slide object if available. Undefined if not.
     */ getSlide: function getSlide(index) {
                            return Slides.filter(function(Slide) {
                                return Slide.index === index;
                            })[0];
                        },
                        /**
     * Return all Slide objects.
     *
     * @param {boolean} includeClones - Whether to include cloned slides or not.
     *
     * @return {Object[]} - Slide objects.
     */ getSlides: function getSlides(includeClones) {
                            return includeClones ? Slides : Slides.filter(function(Slide) {
                                return !Slide.isClone;
                            });
                        },
                        /**
     * Return Slide objects belonging to the given page.
     *
     * @param {number} page - A page number.
     *
     * @return {Object[]} - An array containing Slide objects.
     */ getSlidesByPage: function getSlidesByPage(page) {
                            var idx = Components.Controller.toIndex(page);
                            var options1 = Splide1.options;
                            var max = options1.focus !== false ? 1 : options1.perPage;
                            return Slides.filter(function(_ref) {
                                var index = _ref.index;
                                return idx <= index && index < idx + max;
                            });
                        },
                        /**
     * Insert a slide to a slider.
     * Need to refresh Splide after adding a slide.
     *
     * @param {Node|string} slide    - A slide element to be added.
     * @param {number}      index    - A slide will be added at the position.
     * @param {Function}    callback - Called right after the slide is added to the DOM tree.
     */ add: function add(slide1, index, callback) {
                            if (typeof slide1 === 'string') slide1 = domify(slide1);
                            if (slide1 instanceof Element) {
                                var ref = this.slides[index]; // This will be removed in mount() of a Slide component.
                                applyStyle(slide1, {
                                    display: 'none'
                                });
                                if (ref) {
                                    before(slide1, ref);
                                    this.slides.splice(index, 0, slide1);
                                } else {
                                    append(this.list, slide1);
                                    this.slides.push(slide1);
                                }
                                loaded1(slide1, function() {
                                    callback && callback(slide1);
                                });
                            }
                        },
                        /**
     * Remove a slide from a slider.
     * Need to refresh Splide after removing a slide.
     *
     * @param index - Slide index.
     */ remove: function remove(index) {
                            dom_remove(this.slides.splice(index, 1)[0]);
                        },
                        /**
     * Trigger the provided callback for each Slide object.
     *
     * @param {Function} callback - A callback function. The first argument will be the Slide object.
     */ each: function each1(callback) {
                            Slides.forEach(callback);
                        },
                        /**
     * Return slides length without clones.
     *
     * @return {number} - Slide length.
     */ get length () {
                            return this.slides.length;
                        },
                        /**
     * Return "SlideObjects" length including clones.
     *
     * @return {number} - Slide length including clones.
     */ get total () {
                            return Slides.length;
                        }
                    };
                    /**
   * Collect elements.
   */ function collect() {
                        Elements.slider = child(root, classes.slider);
                        Elements.track = find(root, "." + classes.track);
                        Elements.list = child(Elements.track, classes.list);
                        exist(Elements.track && Elements.list, 'Track or list was not found.');
                        Elements.slides = children(Elements.list, classes.slide);
                        var arrows = findParts(classes.arrows);
                        Elements.arrows = {
                            prev: find(arrows, "." + classes.prev),
                            next: find(arrows, "." + classes.next)
                        };
                        var autoplay = findParts(classes.autoplay);
                        Elements.bar = find(findParts(classes.progress), "." + classes.bar);
                        Elements.play = find(autoplay, "." + classes.play);
                        Elements.pause = find(autoplay, "." + classes.pause);
                        Elements.track.id = Elements.track.id || root.id + "-track";
                        Elements.list.id = Elements.list.id || root.id + "-list";
                    }
                    /**
   * Return class names for the root element.
   */ function getClasses() {
                        var rootClass = classes.root;
                        var options1 = Splide1.options;
                        return [
                            rootClass + "--" + options1.type,
                            rootClass + "--" + options1.direction,
                            options1.drag ? rootClass + "--draggable" : '',
                            options1.isNavigation ? rootClass + "--nav" : '',
                            STATUS_CLASSES.active
                        ];
                    }
                    /**
   * Find parts only from children of the root or track.
   *
   * @return {Element} - A found element or undefined.
   */ function findParts(className) {
                        return child(root, className) || child(Elements.slider, className);
                    }
                    return Elements;
                };
                /**
 * The component for controlling the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ var floor = Math.floor;
                /**
 * The component for controlling the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const controller = function(Splide1, Components) {
                    /**
   * Store current options.
   *
   * @type {Object}
   */ var options1;
                    /**
   * True if the slide is LOOP mode.
   *
   * @type {boolean}
   */ var isLoop;
                    /**
   * Controller component object.
   *
   * @type {Object}
   */ var Controller = {
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            options1 = Splide1.options;
                            isLoop = Splide1.is(LOOP);
                            bind();
                        },
                        /**
     * Make track run by the given control.
     * - "+{i}" : Increment the slide index by i.
     * - "-{i}" : Decrement the slide index by i.
     * - "{i}"  : Go to the slide whose index is i.
     * - ">"    : Go to next page.
     * - "<"    : Go to prev page.
     * - ">{i}" : Go to page i.
     *
     * @param {string|number} control  - A control pattern.
     * @param {boolean}       silently - Go to the destination without event emission.
     */ go: function go(control, silently) {
                            var destIndex = this.trim(this.parse(control));
                            Components.Track.go(destIndex, this.rewind(destIndex), silently);
                        },
                        /**
     * Parse the given control and return the destination index for the track.
     *
     * @param {string} control - A control target pattern.
     *
     * @return {number} - A parsed target.
     */ parse: function parse(control) {
                            var index = Splide1.index;
                            var matches = String(control).match(/([+\-<>]+)(\d+)?/);
                            var indicator = matches ? matches[1] : '';
                            var number = matches ? parseInt(matches[2]) : 0;
                            switch(indicator){
                                case '+':
                                    index += number || 1;
                                    break;
                                case '-':
                                    index -= number || 1;
                                    break;
                                case '>':
                                case '<':
                                    index = parsePage(number, index, indicator === '<');
                                    break;
                                default:
                                    index = parseInt(control);
                            }
                            return index;
                        },
                        /**
     * Compute index from the given page number.
     *
     * @param {number} page - Page number.
     *
     * @return {number} - A computed page number.
     */ toIndex: function toIndex(page) {
                            if (hasFocus()) return page;
                            var length = Splide1.length;
                            var perPage = options1.perPage;
                            var index = page * perPage;
                            index = index - (this.pageLength * perPage - length) * floor(index / length); // Adjustment for the last page.
                            if (length - perPage <= index && index < length) index = length - perPage;
                            return index;
                        },
                        /**
     * Compute page number from the given slide index.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - A computed page number.
     */ toPage: function toPage(index) {
                            if (hasFocus()) return index;
                            var length = Splide1.length;
                            var perPage = options1.perPage; // Make the last "perPage" number of slides belong to the last page.
                            if (length - perPage <= index && index < length) return floor((length - 1) / perPage);
                            return floor(index / perPage);
                        },
                        /**
     * Trim the given index according to the current mode.
     * Index being returned could be less than 0 or greater than the length in Loop mode.
     *
     * @param {number} index - An index being trimmed.
     *
     * @return {number} - A trimmed index.
     */ trim: function trim(index) {
                            if (!isLoop) index = options1.rewind ? this.rewind(index) : between(index, 0, this.edgeIndex);
                            return index;
                        },
                        /**
     * Rewind the given index if it's out of range.
     *
     * @param {number} index - An index.
     *
     * @return {number} - A rewound index.
     */ rewind: function rewind(index) {
                            var edge = this.edgeIndex;
                            if (isLoop) {
                                while(index > edge)index -= edge + 1;
                                while(index < 0)index += edge + 1;
                            } else {
                                if (index > edge) index = 0;
                                else if (index < 0) index = edge;
                            }
                            return index;
                        },
                        /**
     * Check if the direction is "rtl" or not.
     *
     * @return {boolean} - True if "rtl" or false if not.
     */ isRtl: function isRtl() {
                            return options1.direction === RTL;
                        },
                        /**
     * Return the page length.
     *
     * @return {number} - Max page number.
     */ get pageLength () {
                            var length = Splide1.length;
                            return hasFocus() ? length : Math.ceil(length / options1.perPage);
                        },
                        /**
     * Return the edge index.
     *
     * @return {number} - Edge index.
     */ get edgeIndex () {
                            var length = Splide1.length;
                            if (!length) return 0;
                            if (hasFocus() || options1.isNavigation || isLoop) return length - 1;
                            return length - options1.perPage;
                        },
                        /**
     * Return the index of the previous slide.
     *
     * @return {number} - The index of the previous slide if available. -1 otherwise.
     */ get prevIndex () {
                            var prev = Splide1.index - 1;
                            if (isLoop || options1.rewind) prev = this.rewind(prev);
                            return prev > -1 ? prev : -1;
                        },
                        /**
     * Return the index of the next slide.
     *
     * @return {number} - The index of the next slide if available. -1 otherwise.
     */ get nextIndex () {
                            var next = Splide1.index + 1;
                            if (isLoop || options1.rewind) next = this.rewind(next);
                            return Splide1.index < next && next <= this.edgeIndex || next === 0 ? next : -1;
                        }
                    };
                    /**
   * Listen to some events.
   */ function bind() {
                        Splide1.on('move', function(newIndex) {
                            Splide1.index = newIndex;
                        }).on('updated refresh', function(newOptions) {
                            options1 = newOptions || options1;
                            Splide1.index = between(Splide1.index, 0, Controller.edgeIndex);
                        });
                    }
                    /**
   * Verify if the focus option is available or not.
   *
   * @return {boolean} - True if a slider has the focus option.
   */ function hasFocus() {
                        return options1.focus !== false;
                    }
                    /**
   * Return the next or previous page index computed by the page number and current index.
   *
   * @param {number}  number - Specify the page number.
   * @param {number}  index  - Current index.
   * @param {boolean} prev   - Prev or next.
   *
   * @return {number} - Slide index.
   */ function parsePage(number, index, prev) {
                        if (number > -1) return Controller.toIndex(number);
                        var perMove = options1.perMove;
                        var sign = prev ? -1 : 1;
                        if (perMove) return index + perMove * sign;
                        return Controller.toIndex(Controller.toPage(index) + sign);
                    }
                    return Controller;
                };
                /**
 * The component for moving list in the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ var abs = Math.abs;
                /**
 * The component for moving list in the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const track = function(Splide1, Components) {
                    /**
   * Hold the Layout component.
   *
   * @type {Object}
   */ var Layout;
                    /**
   * Hold the Layout component.
   *
   * @type {Object}
   */ var Elements;
                    /**
   * Store the list element.
   *
   * @type {Element}
   */ var list;
                    /**
   * Whether the current direction is vertical or not.
   *
   * @type {boolean}
   */ var isVertical = Splide1.options.direction === TTB;
                    /**
   * Whether the slider type is FADE or not.
   *
   * @type {boolean}
   */ var isFade = Splide1.is(FADE);
                    /**
   * Whether the slider direction is RTL or not.
   *
   * @type {boolean}
   */ var isRTL = Splide1.options.direction === RTL;
                    /**
   * This will be true while transitioning from the last index to the first one.
   *
   * @type {boolean}
   */ var isLoopPending = false;
                    /**
   * Sign for the direction. Only RTL mode uses the positive sign.
   *
   * @type {number}
   */ var sign = isRTL ? 1 : -1;
                    /**
   * Track component object.
   *
   * @type {Object}
   */ var Track = {
                        /**
     * Make public the sign defined locally.
     *
     * @type {number}
     */ sign: sign,
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            Elements = Components.Elements;
                            Layout = Components.Layout;
                            list = Elements.list;
                        },
                        /**
     * Called after the component is mounted.
     * The resize event must be registered after the Layout's one is done.
     */ mounted: function mounted() {
                            var _this = this;
                            if (!isFade) {
                                this.jump(0);
                                Splide1.on('mounted resize updated', function() {
                                    _this.jump(Splide1.index);
                                });
                            }
                        },
                        /**
     * Go to the given destination index.
     * After arriving there, the track is jump to the new index without animation, mainly for loop mode.
     *
     * @param {number}  destIndex - A destination index.
     *                              This can be negative or greater than slides length for reaching clones.
     * @param {number}  newIndex  - An actual new index. They are always same in Slide and Rewind mode.
     * @param {boolean} silently  - If true, suppress emitting events.
     */ go: function go(destIndex, newIndex, silently) {
                            var newPosition = getTrimmedPosition(destIndex);
                            var prevIndex = Splide1.index; // Prevent any actions while transitioning from the last index to the first one for jump.
                            if (Splide1.State.is(MOVING) && isLoopPending) return;
                            isLoopPending = destIndex !== newIndex;
                            if (!silently) Splide1.emit('move', newIndex, prevIndex, destIndex);
                            if (Math.abs(newPosition - this.position) >= 1 || isFade) Components.Transition.start(destIndex, newIndex, prevIndex, this.toCoord(newPosition), function() {
                                onTransitionEnd(destIndex, newIndex, prevIndex, silently);
                            });
                            else if (destIndex !== prevIndex && Splide1.options.trimSpace === 'move') Components.Controller.go(destIndex + destIndex - prevIndex, silently);
                            else onTransitionEnd(destIndex, newIndex, prevIndex, silently);
                        },
                        /**
     * Move the track to the specified index.
     *
     * @param {number} index - A destination index where the track jumps.
     */ jump: function jump(index) {
                            this.translate(getTrimmedPosition(index));
                        },
                        /**
     * Set the list position by CSS translate property.
     *
     * @param {number} position - A new position value.
     */ translate: function translate(position) {
                            applyStyle(list, {
                                transform: "translate" + (isVertical ? 'Y' : 'X') + "(" + position + "px)"
                            });
                        },
                        /**
     * Cancel the transition and set the list position.
     * Also, loop the slider if necessary.
     */ cancel: function cancel() {
                            if (Splide1.is(LOOP)) this.shift();
                            else // Ensure the current position.
                            this.translate(this.position);
                            applyStyle(list, {
                                transition: ''
                            });
                        },
                        /**
     * Shift the slider if it exceeds borders on the edge.
     */ shift: function shift() {
                            var position = abs(this.position);
                            var left = abs(this.toPosition(0));
                            var right = abs(this.toPosition(Splide1.length));
                            var innerSize = right - left;
                            if (position < left) position += innerSize;
                            else if (position > right) position -= innerSize;
                            this.translate(sign * position);
                        },
                        /**
     * Trim redundant spaces on the left or right edge if necessary.
     *
     * @param {number} position - Position value to be trimmed.
     *
     * @return {number} - Trimmed position.
     */ trim: function trim(position) {
                            if (!Splide1.options.trimSpace || Splide1.is(LOOP)) return position;
                            var edge = sign * (Layout.totalSize() - Layout.size - Layout.gap);
                            return between(position, edge, 0);
                        },
                        /**
     * Calculate the closest slide index from the given position.
     *
     * @param {number} position - A position converted to an slide index.
     *
     * @return {number} - The closest slide index.
     */ toIndex: function toIndex(position) {
                            var _this2 = this;
                            var index = 0;
                            var minDistance = Infinity;
                            Elements.getSlides(true).forEach(function(Slide) {
                                var slideIndex = Slide.index;
                                var distance = abs(_this2.toPosition(slideIndex) - position);
                                if (distance < minDistance) {
                                    minDistance = distance;
                                    index = slideIndex;
                                }
                            });
                            return index;
                        },
                        /**
     * Return coordinates object by the given position.
     *
     * @param {number} position - A position value.
     *
     * @return {Object} - A coordinates object.
     */ toCoord: function toCoord(position) {
                            return {
                                x: isVertical ? 0 : position,
                                y: isVertical ? position : 0
                            };
                        },
                        /**
     * Calculate the track position by a slide index.
     *
     * @param {number} index - Slide index.
     *
     * @return {Object} - Calculated position.
     */ toPosition: function toPosition(index) {
                            var position = Layout.totalSize(index) - Layout.slideSize(index) - Layout.gap;
                            return sign * (position + this.offset(index));
                        },
                        /**
     * Return the current offset value, considering direction.
     *
     * @return {number} - Offset amount.
     */ offset: function offset(index) {
                            var focus = Splide1.options.focus;
                            var slideSize = Layout.slideSize(index);
                            if (focus === 'center') return -(Layout.size - slideSize) / 2;
                            return -(parseInt(focus) || 0) * (slideSize + Layout.gap);
                        },
                        /**
     * Return the current position.
     * This returns the correct position even while transitioning by CSS.
     *
     * @return {number} - Current position.
     */ get position () {
                            var prop = isVertical ? 'top' : isRTL ? 'right' : 'left';
                            return getRect(list)[prop] - (getRect(Elements.track)[prop] - Layout.padding[prop] * sign);
                        }
                    };
                    /**
   * Called whenever slides arrive at a destination.
   *
   * @param {number}  destIndex - A destination index.
   * @param {number}  newIndex  - A new index.
   * @param {number}  prevIndex - A previous index.
   * @param {boolean} silently  - If true, suppress emitting events.
   */ function onTransitionEnd(destIndex, newIndex, prevIndex, silently) {
                        applyStyle(list, {
                            transition: ''
                        });
                        isLoopPending = false;
                        if (!isFade) Track.jump(newIndex);
                        if (!silently) Splide1.emit('moved', newIndex, prevIndex, destIndex);
                    }
                    /**
   * Convert index to the trimmed position.
   *
   * @return {number} - Trimmed position.
   */ function getTrimmedPosition(index) {
                        return Track.trim(Track.toPosition(index));
                    }
                    return Track;
                };
                /**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The component for cloning some slides for "loop" mode of the track.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const clones = function(Splide1, Components) {
                    /**
   * Store information of all clones.
   *
   * @type {Array}
   */ var clones1 = [];
                    /**
   * Store the current clone count on one side.
   *
   * @type {number}
   */ var cloneCount = 0;
                    /**
   * Keep Elements component.
   *
   * @type {Object}
   */ var Elements = Components.Elements;
                    /**
   * Clones component object.
   *
   * @type {Object}
   */ var Clones = {
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            var _this = this;
                            if (Splide1.is(LOOP)) {
                                init();
                                Splide1.on('refresh:before', function() {
                                    _this.destroy();
                                }).on('refresh', init).on('resize', function() {
                                    if (cloneCount !== getCloneCount()) {
                                        // Destroy before refresh not to collect clones by the Elements component.
                                        _this.destroy();
                                        Splide1.refresh();
                                    }
                                });
                            }
                        },
                        /**
     * Destroy.
     */ destroy: function destroy() {
                            dom_remove(clones1);
                            clones1 = [];
                        },
                        /**
     * Return all clones.
     *
     * @return {Element[]} - Cloned elements.
     */ get clones () {
                            return clones1;
                        },
                        /**
     * Return clone length.
     *
     * @return {number} - A length of clones.
     */ get length () {
                            return clones1.length;
                        }
                    };
                    /**
   * Initialization.
   */ function init() {
                        Clones.destroy();
                        cloneCount = getCloneCount();
                        generateClones(cloneCount);
                    }
                    /**
   * Generate and append/prepend clones.
   *
   * @param {number} count - The half number of clones.
   */ function generateClones(count) {
                        var length = Elements.length, register = Elements.register;
                        if (length) {
                            var slides = Elements.slides;
                            while(slides.length < count)slides = slides.concat(slides);
                             // Clones after the last element.
                            slides.slice(0, count).forEach(function(elm, index) {
                                var clone = cloneDeeply(elm);
                                append(Elements.list, clone);
                                clones1.push(clone);
                                register(clone, index + length, index % length);
                            }); // Clones before the first element.
                            slides.slice(-count).forEach(function(elm, index) {
                                var clone = cloneDeeply(elm);
                                before(clone, slides[0]);
                                clones1.push(clone);
                                register(clone, index - count, (length + index - count % length) % length);
                            });
                        }
                    }
                    /**
   * Return half count of clones to be generated.
   * Clone count is determined by:
   * - "clones" value in the options.
   * - Number of slides that can be placed in a view in "fixed" mode.
   * - Max pages a flick action can move.
   * - Whether the slide length is enough for perPage.
   *
   * @return {number} - Count for clones.
   */ function getCloneCount() {
                        var options1 = Splide1.options;
                        if (options1.clones) return options1.clones;
                         // Use the slide length in autoWidth mode because the number cannot be calculated.
                        var baseCount = options1.autoWidth || options1.autoHeight ? Elements.length : options1.perPage;
                        var dimension = options1.direction === TTB ? 'Height' : 'Width';
                        var fixedSize = toPixel(Splide1.root, options1["fixed" + dimension]);
                        if (fixedSize) // Roughly calculate the count. This needs not to be strict.
                        baseCount = Math.ceil(Elements.track["client" + dimension] / fixedSize);
                        return baseCount * (options1.drag ? options1.flickMaxPages + 1 : 1);
                    }
                    /**
   * Clone deeply the given element.
   *
   * @param {Element} elm - An element being duplicated.
   *
   * @return {Node} - A cloned node(element).
   */ function cloneDeeply(elm) {
                        var clone = elm.cloneNode(true);
                        addClass(clone, Splide1.classes.clone); // ID should not be duplicated.
                        removeAttribute(clone, 'id');
                        return clone;
                    }
                    return Clones;
                };
                /**
 * The resolver component for horizontal layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The resolver component for horizontal layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */ /* harmony default export */ const horizontal = function(Splide1, Components) {
                    /**
   * Keep the Elements component.
   *
   * @type {string}
   */ var Elements = Components.Elements;
                    /**
   * Keep the root element.
   *
   * @type {Element}
   */ var root = Splide1.root;
                    /**
   * Keep the track element.
   *
   * @type {Element}
   */ var track1;
                    /**
   * Keep the latest options.
   *
   * @type {Element}
   */ var options1 = Splide1.options;
                    return {
                        /**
     * Margin property name.
     *
     * @type {string}
     */ margin: 'margin' + (options1.direction === RTL ? 'Left' : 'Right'),
                        /**
     * Always 0 because the height will be determined by inner contents.
     *
     * @type {number}
     */ height: 0,
                        /**
     * Initialization.
     */ init: function init() {
                            this.resize();
                        },
                        /**
     * Resize gap and padding.
     * This must be called on init.
     */ resize: function resize() {
                            options1 = Splide1.options;
                            track1 = Elements.track;
                            this.gap = toPixel(root, options1.gap);
                            var padding = options1.padding;
                            var left = toPixel(root, padding.left || padding);
                            var right = toPixel(root, padding.right || padding);
                            this.padding = {
                                left: left,
                                right: right
                            };
                            applyStyle(track1, {
                                paddingLeft: unit(left),
                                paddingRight: unit(right)
                            });
                        },
                        /**
     * Return total width from the left of the list to the right of the slide specified by the provided index.
     *
     * @param {number} index - Optional. A slide index. If undefined, total width of the slider will be returned.
     *
     * @return {number} - Total width to the right side of the specified slide, or 0 for an invalid index.
     */ totalWidth: function totalWidth(index) {
                            if (index === void 0) index = Splide1.length - 1;
                            var Slide = Elements.getSlide(index);
                            var width = 0;
                            if (Slide) {
                                var slideRect = getRect(Slide.slide);
                                var listRect = getRect(Elements.list);
                                if (options1.direction === RTL) width = listRect.right - slideRect.left;
                                else width = slideRect.right - listRect.left;
                                width += this.gap;
                            }
                            return width;
                        },
                        /**
     * Return the slide width in px.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - The slide width.
     */ slideWidth: function slideWidth(index) {
                            if (options1.autoWidth) {
                                var Slide = Elements.getSlide(index);
                                return Slide ? Slide.slide.offsetWidth : 0;
                            }
                            var width = options1.fixedWidth || (this.width + this.gap) / options1.perPage - this.gap;
                            return toPixel(root, width);
                        },
                        /**
     * Return the slide height in px.
     *
     * @return {number} - The slide height.
     */ slideHeight: function slideHeight() {
                            var height = options1.height || options1.fixedHeight || this.width * options1.heightRatio;
                            return toPixel(root, height);
                        },
                        /**
     * Return slider width without padding.
     *
     * @return {number} - Current slider width.
     */ get width () {
                            return track1.clientWidth - this.padding.left - this.padding.right;
                        }
                    };
                };
                /**
 * The resolver component for vertical layout.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The resolver component for vertical layout.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The resolver object.
 */ /* harmony default export */ const vertical = function(Splide1, Components) {
                    /**
   * Keep the Elements component.
   *
   * @type {string}
   */ var Elements = Components.Elements;
                    /**
   * Keep the root element.
   *
   * @type {Element}
   */ var root = Splide1.root;
                    /**
   * Keep the track element.
   *
   * @type {Element}
   */ var track1;
                    /**
   * Keep the latest options.
   *
   * @type {Element}
   */ var options1;
                    return {
                        /**
     * Margin property name.
     *
     * @type {string}
     */ margin: 'marginBottom',
                        /**
     * Initialization.
     */ init: function init() {
                            this.resize();
                        },
                        /**
     * Resize gap and padding.
     * This must be called on init.
     */ resize: function resize() {
                            options1 = Splide1.options;
                            track1 = Elements.track;
                            this.gap = toPixel(root, options1.gap);
                            var padding = options1.padding;
                            var top = toPixel(root, padding.top || padding);
                            var bottom = toPixel(root, padding.bottom || padding);
                            this.padding = {
                                top: top,
                                bottom: bottom
                            };
                            applyStyle(track1, {
                                paddingTop: unit(top),
                                paddingBottom: unit(bottom)
                            });
                        },
                        /**
     * Return total height from the top of the list to the bottom of the slide specified by the provided index.
     *
     * @param {number} index - Optional. A slide index. If undefined, total height of the slider will be returned.
     *
     * @return {number} - Total height to the bottom of the specified slide, or 0 for an invalid index.
     */ totalHeight: function totalHeight(index) {
                            if (index === void 0) index = Splide1.length - 1;
                            var Slide = Elements.getSlide(index);
                            if (Slide) return getRect(Slide.slide).bottom - getRect(Elements.list).top + this.gap;
                            return 0;
                        },
                        /**
     * Return the slide width in px.
     *
     * @return {number} - The slide width.
     */ slideWidth: function slideWidth() {
                            return toPixel(root, options1.fixedWidth || this.width);
                        },
                        /**
     * Return the slide height in px.
     *
     * @param {number} index - Slide index.
     *
     * @return {number} - The slide height.
     */ slideHeight: function slideHeight(index) {
                            if (options1.autoHeight) {
                                var Slide = Elements.getSlide(index);
                                return Slide ? Slide.slide.offsetHeight : 0;
                            }
                            var height = options1.fixedHeight || (this.height + this.gap) / options1.perPage - this.gap;
                            return toPixel(root, height);
                        },
                        /**
     * Return slider width without padding.
     *
     * @return {number} - Current slider width.
     */ get width () {
                            return track1.clientWidth;
                        },
                        /**
     * Return slide height without padding.
     *
     * @return {number} - Slider height.
     */ get height () {
                            var height = options1.height || this.width * options1.heightRatio;
                            exist(height, '"height" or "heightRatio" is missing.');
                            return toPixel(root, height) - this.padding.top - this.padding.bottom;
                        }
                    };
                };
                /**
 * A package of utility functions related with time.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Simple throttle function that controls how often the given function is executed.
 *
 * @param {function} func - A function to be throttled.
 * @param {number}   wait - Time in millisecond for interval of execution.
 *
 * @return {Function} - A debounced function.
 */ function throttle(func, wait) {
                    var timeout; // Declare function by the "function" keyword to prevent "this" from being inherited.
                    return function() {
                        if (!timeout) timeout = setTimeout(function() {
                            func();
                            timeout = null;
                        }, wait);
                    };
                }
                /**
 * Custom setInterval function that provides progress rate as callback.
 *
 * @param {function} callback - A callback function fired every time the interval time passes.
 * @param {number}   interval - Interval duration in milliseconds.
 * @param {function} progress - A callback function fired whenever the progress goes.
 *
 * @return {Object} - An object containing play() and pause() functions.
 */ function createInterval(callback, interval, progress) {
                    var _window = window, requestAnimationFrame = _window.requestAnimationFrame;
                    var start, elapse, rate, _pause = true;
                    var step = function step1(timestamp) {
                        if (!_pause) {
                            if (!start) {
                                start = timestamp;
                                if (rate && rate < 1) start -= rate * interval;
                            }
                            elapse = timestamp - start;
                            rate = elapse / interval;
                            if (elapse >= interval) {
                                start = 0;
                                rate = 1;
                                callback();
                            }
                            if (progress) progress(rate);
                            requestAnimationFrame(step1);
                        }
                    };
                    return {
                        pause: function pause() {
                            _pause = true;
                            start = 0;
                        },
                        play: function play(reset) {
                            start = 0;
                            if (reset) rate = 0;
                            if (_pause) {
                                _pause = false;
                                requestAnimationFrame(step);
                            }
                        }
                    };
                }
                /**
 * The component for handing slide layouts and their sizes.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The component for handing slide layouts and their sizes.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const layout = function(Splide1, Components) {
                    /**
   * Keep the Elements component.
   *
   * @type {string}
   */ var Elements = Components.Elements;
                    /**
   * Whether the slider is vertical or not.
   *
   * @type {boolean}
   */ var isVertical = Splide1.options.direction === TTB;
                    /**
   * Layout component object.
   *
   * @type {Object}
   */ var Layout = object_assign({
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            bind();
                            init(); // The word "size" means width for a horizontal slider and height for a vertical slider.
                            this.totalSize = isVertical ? this.totalHeight : this.totalWidth;
                            this.slideSize = isVertical ? this.slideHeight : this.slideWidth;
                        },
                        /**
     * Destroy the component.
     */ destroy: function destroy() {
                            removeAttribute([
                                Elements.list,
                                Elements.track
                            ], 'style');
                        },
                        /**
     * Return the slider height on the vertical mode or width on the horizontal mode.
     *
     * @return {number}
     */ get size () {
                            return isVertical ? this.height : this.width;
                        }
                    }, isVertical ? vertical(Splide1, Components) : horizontal(Splide1, Components));
                    /**
   * Init slider styles according to options.
   */ function init() {
                        Layout.init();
                        applyStyle(Splide1.root, {
                            maxWidth: unit(Splide1.options.width)
                        });
                        Elements.each(function(Slide) {
                            Slide.slide.style[Layout.margin] = unit(Layout.gap);
                        });
                        resize();
                    }
                    /**
   * Listen the resize native event with throttle.
   * Initialize when the component is mounted or options are updated.
   */ function bind() {
                        Splide1.on('resize load', throttle(function() {
                            Splide1.emit('resize');
                        }, Splide1.options.throttle), window).on('resize', resize).on('updated refresh', init);
                    }
                    /**
   * Resize the track and slide elements.
   */ function resize() {
                        var options1 = Splide1.options;
                        Layout.resize();
                        applyStyle(Elements.track, {
                            height: unit(Layout.height)
                        });
                        var slideHeight = options1.autoHeight ? null : unit(Layout.slideHeight());
                        Elements.each(function(Slide) {
                            applyStyle(Slide.container, {
                                height: slideHeight
                            });
                            applyStyle(Slide.slide, {
                                width: options1.autoWidth ? null : unit(Layout.slideWidth(Slide.index)),
                                height: Slide.container ? null : slideHeight
                            });
                        });
                        Splide1.emit('resized');
                    }
                    return Layout;
                };
                /**
 * The component for supporting mouse drag and swipe.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ var drag_abs = Math.abs;
                /**
 * If the absolute velocity is greater thant this value,
 * a slider always goes to a different slide after drag, not allowed to stay on a current slide.
 */ var MIN_VELOCITY = 0.1;
                /**
 * Adjust how much the track can be pulled on the first or last page.
 * The larger number this is, the farther the track moves.
 * This should be around 5 - 9.
 *
 * @type {number}
 */ var FRICTION_REDUCER = 7;
                /**
 * The component supporting mouse drag and swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const drag = function(Splide1, Components) {
                    /**
   * Store the Move component.
   *
   * @type {Object}
   */ var Track = Components.Track;
                    /**
   * Store the Controller component.
   *
   * @type {Object}
   */ var Controller = Components.Controller;
                    /**
   * Coordinate of the track on starting drag.
   *
   * @type {Object}
   */ var startCoord;
                    /**
   * Analyzed info on starting drag.
   *
   * @type {Object|null}
   */ var startInfo;
                    /**
   * Analyzed info being updated while dragging/swiping.
   *
   * @type {Object}
   */ var currentInfo;
                    /**
   * Determine whether slides are being dragged or not.
   *
   * @type {boolean}
   */ var isDragging;
                    /**
   * Whether the slider direction is vertical or not.
   *
   * @type {boolean}
   */ var isVertical = Splide1.options.direction === TTB;
                    /**
   * Axis for the direction.
   *
   * @type {string}
   */ var axis = isVertical ? 'y' : 'x';
                    /**
   * Drag component object.
   *
   * @type {Object}
   */ var Drag = {
                        /**
     * Whether dragging is disabled or not.
     *
     * @type {boolean}
     */ disabled: false,
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            var _this = this;
                            var Elements = Components.Elements;
                            var track1 = Elements.track;
                            Splide1.on('touchstart mousedown', start, track1).on('touchmove mousemove', move, track1, {
                                passive: false
                            }).on('touchend touchcancel mouseleave mouseup dragend', end, track1).on('mounted refresh', function() {
                                // Prevent dragging an image or anchor itself.
                                each(Elements.list.querySelectorAll('img, a'), function(elm) {
                                    Splide1.off('dragstart', elm).on('dragstart', function(e) {
                                        e.preventDefault();
                                    }, elm, {
                                        passive: false
                                    });
                                });
                            }).on('mounted updated', function() {
                                _this.disabled = !Splide1.options.drag;
                            });
                        }
                    };
                    /**
   * Called when the track starts to be dragged.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */ function start(e) {
                        if (!Drag.disabled && !isDragging) // These prams are used to evaluate whether the slider should start moving.
                        init(e);
                    }
                    /**
   * Initialize parameters.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */ function init(e) {
                        startCoord = Track.toCoord(Track.position);
                        startInfo = analyze(e, {
                        });
                        currentInfo = startInfo;
                    }
                    /**
   * Called while the track being dragged.
   *
   * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
   */ function move(e) {
                        if (startInfo) {
                            currentInfo = analyze(e, startInfo);
                            if (isDragging) {
                                if (e.cancelable) e.preventDefault();
                                if (!Splide1.is(FADE)) {
                                    var position = startCoord[axis] + currentInfo.offset[axis];
                                    Track.translate(resist(position));
                                }
                            } else if (shouldMove(currentInfo)) {
                                Splide1.emit('drag', startInfo);
                                isDragging = true;
                                Track.cancel(); // These params are actual drag data.
                                init(e);
                            }
                        }
                    }
                    /**
   * Determine whether to start moving the track or not by drag angle.
   *
   * @param {Object} info - An information object.
   *
   * @return {boolean} - True if the track should be moved or false if not.
   */ function shouldMove(_ref) {
                        var offset = _ref.offset;
                        if (Splide1.State.is(MOVING) && Splide1.options.waitForTransition) return false;
                        var angle = Math.atan(drag_abs(offset.y) / drag_abs(offset.x)) * 180 / Math.PI;
                        if (isVertical) angle = 90 - angle;
                        return angle < Splide1.options.dragAngleThreshold;
                    }
                    /**
   * Resist dragging the track on the first/last page because there is no more.
   *
   * @param {number} position - A position being applied to the track.
   *
   * @return {Object} - Adjusted position.
   */ function resist(position) {
                        if (Splide1.is(SLIDE)) {
                            var sign = Track.sign;
                            var _start = sign * Track.trim(Track.toPosition(0));
                            var _end = sign * Track.trim(Track.toPosition(Controller.edgeIndex));
                            position *= sign;
                            if (position < _start) position = _start - FRICTION_REDUCER * Math.log(_start - position);
                            else if (position > _end) position = _end + FRICTION_REDUCER * Math.log(position - _end);
                            position *= sign;
                        }
                        return position;
                    }
                    /**
   * Called when dragging ends.
   */ function end() {
                        startInfo = null;
                        if (isDragging) {
                            Splide1.emit('dragged', currentInfo);
                            go(currentInfo);
                            isDragging = false;
                        }
                    }
                    /**
   * Go to the slide determined by the analyzed data.
   *
   * @param {Object} info - An info object.
   */ function go(info) {
                        var velocity = info.velocity[axis];
                        var absV = drag_abs(velocity);
                        if (absV > 0) {
                            var options1 = Splide1.options;
                            var index = Splide1.index;
                            var sign = velocity < 0 ? -1 : 1;
                            var destIndex = index;
                            if (!Splide1.is(FADE)) {
                                var destination = Track.position;
                                if (absV > options1.flickVelocityThreshold && drag_abs(info.offset[axis]) < options1.swipeDistanceThreshold) destination += sign * Math.min(absV * options1.flickPower, Components.Layout.size * (options1.flickMaxPages || 1));
                                destIndex = Track.toIndex(destination);
                            }
                            /*
       * Do not allow the track to go to a previous position if there is enough velocity.
       * Always use the adjacent index for the fade mode.
       */ if (destIndex === index && absV > MIN_VELOCITY) destIndex = index + sign * Track.sign;
                            if (Splide1.is(SLIDE)) destIndex = between(destIndex, 0, Controller.edgeIndex);
                            Controller.go(destIndex, options1.isNavigation);
                        }
                    }
                    /**
   * Analyze the given event object and return important information for handling swipe behavior.
   *
   * @param {Event}   e          - Touch or Mouse event object.
   * @param {Object}  startInfo  - Information analyzed on start for calculating difference from the current one.
   *
   * @return {Object} - An object containing analyzed information, such as offset, velocity, etc.
   */ function analyze(e, startInfo1) {
                        var timeStamp = e.timeStamp, touches = e.touches;
                        var _ref2 = touches ? touches[0] : e, clientX = _ref2.clientX, clientY = _ref2.clientY;
                        var _ref3 = startInfo1.to || {
                        }, _ref3$x = _ref3.x, fromX = _ref3$x === void 0 ? clientX : _ref3$x, _ref3$y = _ref3.y, fromY = _ref3$y === void 0 ? clientY : _ref3$y;
                        var startTime = startInfo1.time || 0;
                        var offset = {
                            x: clientX - fromX,
                            y: clientY - fromY
                        };
                        var duration = timeStamp - startTime;
                        var velocity = {
                            x: offset.x / duration,
                            y: offset.y / duration
                        };
                        return {
                            to: {
                                x: clientX,
                                y: clientY
                            },
                            offset: offset,
                            time: timeStamp,
                            velocity: velocity
                        };
                    }
                    return Drag;
                };
                /**
 * The component for handling a click event.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The component for handling a click event.
 * Click should be disabled during drag/swipe.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const click = function(Splide1, Components) {
                    /**
   * Whether click is disabled or not.
   *
   * @type {boolean}
   */ var disabled = false;
                    /**
   * Click component object.
   *
   * @type {Object}
   */ var Click = {
                        /**
     * Mount only when the drag is activated and the slide type is not "fade".
     *
     * @type {boolean}
     */ required: Splide1.options.drag,
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            Splide1.on('click', onClick, Components.Elements.track, {
                                capture: true
                            }).on('drag', function() {
                                disabled = true;
                            }).on('dragged', function() {
                                // Make sure the flag is released after the click event is fired.
                                setTimeout(function() {
                                    disabled = false;
                                });
                            });
                        }
                    };
                    /**
   * Called when a track element is clicked.
   *
   * @param {Event} e - A click event.
   */ function onClick(e) {
                        if (disabled) {
                            e.preventDefault();
                            e.stopPropagation();
                            e.stopImmediatePropagation();
                        }
                    }
                    return Click;
                };
                /**
 * The component for playing slides automatically.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Set of pause flags.
 */ var PAUSE_FLAGS = {
                    HOVER: 1,
                    FOCUS: 2,
                    MANUAL: 3
                };
                /**
 * The component for playing slides automatically.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const autoplay = function(Splide1, Components, name) {
                    /**
   * Store pause flags.
   *
   * @type {Array}
   */ var flags = [];
                    /**
   * Store an interval object.
   *
   * @type {Object};
   */ var interval;
                    /**
   * Keep the Elements component.
   *
   * @type {string}
   */ var Elements = Components.Elements;
                    /**
   * Autoplay component object.
   *
   * @type {Object}
   */ var Autoplay = {
                        /**
     * Required only when the autoplay option is true.
     *
     * @type {boolean}
     */ required: Splide1.options.autoplay,
                        /**
     * Called when the component is mounted.
     * Note that autoplay starts only if there are slides over perPage number.
     */ mount: function mount() {
                            var options2 = Splide1.options;
                            if (Elements.slides.length > options2.perPage) {
                                interval = createInterval(function() {
                                    Splide1.go('>');
                                }, options2.interval, function(rate) {
                                    Splide1.emit(name + ":playing", rate);
                                    if (Elements.bar) applyStyle(Elements.bar, {
                                        width: rate * 100 + "%"
                                    });
                                });
                                bind();
                                this.play();
                            }
                        },
                        /**
     * Start autoplay.
     *
     * @param {number} flag - A pause flag to be removed.
     */ play: function play(flag) {
                            if (flag === void 0) flag = 0;
                            flags = flags.filter(function(f) {
                                return f !== flag;
                            });
                            if (!flags.length) {
                                Splide1.emit(name + ":play");
                                interval.play(Splide1.options.resetProgress);
                            }
                        },
                        /**
     * Pause autoplay.
     * Note that Array.includes is not supported by IE.
     *
     * @param {number} flag - A pause flag to be added.
     */ pause: function pause(flag) {
                            if (flag === void 0) flag = 0;
                            interval.pause();
                            if (flags.indexOf(flag) === -1) flags.push(flag);
                            if (flags.length === 1) Splide1.emit(name + ":pause");
                        }
                    };
                    /**
   * Listen some events.
   */ function bind() {
                        var options2 = Splide1.options;
                        var sibling = Splide1.sibling;
                        var elms = [
                            Splide1.root,
                            sibling ? sibling.root : null
                        ];
                        if (options2.pauseOnHover) {
                            switchOn(elms, 'mouseleave', PAUSE_FLAGS.HOVER, true);
                            switchOn(elms, 'mouseenter', PAUSE_FLAGS.HOVER, false);
                        }
                        if (options2.pauseOnFocus) {
                            switchOn(elms, 'focusout', PAUSE_FLAGS.FOCUS, true);
                            switchOn(elms, 'focusin', PAUSE_FLAGS.FOCUS, false);
                        }
                        if (Elements.play) Splide1.on('click', function() {
                            // Need to be removed a focus flag at first.
                            Autoplay.play(PAUSE_FLAGS.FOCUS);
                            Autoplay.play(PAUSE_FLAGS.MANUAL);
                        }, Elements.play);
                        if (Elements.pause) switchOn([
                            Elements.pause
                        ], 'click', PAUSE_FLAGS.MANUAL, false);
                        Splide1.on('move refresh', function() {
                            Autoplay.play();
                        }) // Rewind the timer.
                        .on('destroy', function() {
                            Autoplay.pause();
                        });
                    }
                    /**
   * Play or pause on the given event.
   *
   * @param {Element[]} elms  - Elements.
   * @param {string}    event - An event name or names.
   * @param {number}    flag  - A pause flag defined on the top.
   * @param {boolean}   play  - Determine whether to play or pause.
   */ function switchOn(elms, event, flag, play) {
                        elms.forEach(function(elm) {
                            Splide1.on(event, function() {
                                Autoplay[play ? 'play' : 'pause'](flag);
                            }, elm);
                        });
                    }
                    return Autoplay;
                };
                /**
 * The component for change an img element to background image of its wrapper.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The component for change an img element to background image of its wrapper.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const cover1 = function(Splide1, Components) {
                    /**
   * Hold options.
   *
   * @type {Object}
   */ var options2 = Splide1.options;
                    /**
   * Cover component object.
   *
   * @type {Object}
   */ var Cover = {
                        /**
     * Required only when "cover" option is true.
     *
     * @type {boolean}
     */ required: options2.cover,
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            Splide1.on('lazyload:loaded', function(img) {
                                cover2(img, false);
                            });
                            Splide1.on('mounted updated refresh', function() {
                                return apply(false);
                            });
                        },
                        /**
     * Destroy.
     */ destroy: function destroy() {
                            apply(true);
                        }
                    };
                    /**
   * Apply "cover" to all slides.
   *
   * @param {boolean} uncover - If true, "cover" will be clear.
   */ function apply(uncover) {
                        Components.Elements.each(function(Slide) {
                            var img = child(Slide.slide, 'IMG') || child(Slide.container, 'IMG');
                            if (img && img.src) cover2(img, uncover);
                        });
                    }
                    /**
   * Set background image of the parent element, using source of the given image element.
   *
   * @param {Element} img     - An image element.
   * @param {boolean} uncover - Reset "cover".
   */ function cover2(img, uncover) {
                        applyStyle(img.parentElement, {
                            background: uncover ? '' : "center/cover no-repeat url(\"" + img.src + "\")"
                        });
                        applyStyle(img, {
                            display: uncover ? '' : 'none'
                        });
                    }
                    return Cover;
                };
                /**
 * Export vector path for an arrow.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Namespace definition for SVG element.
 *
 * @type {string}
 */ var XML_NAME_SPACE = 'http://www.w3.org/2000/svg';
                /**
 * The arrow vector path.
 *
 * @type {number}
 */ var PATH = 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z';
                /**
 * SVG width and height.
 *
 * @type {number}
 */ var SIZE = 40;
                /**
 * The component for appending prev/next arrows.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The component for appending prev/next arrows.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const arrows = function(Splide1, Components, name) {
                    /**
   * Previous arrow element.
   *
   * @type {Element|undefined}
   */ var prev;
                    /**
   * Next arrow element.
   *
   * @type {Element|undefined}
   */ var next;
                    /**
   * Store the class list.
   *
   * @type {Object}
   */ var classes = Splide1.classes;
                    /**
   * Hold the root element.
   *
   * @type {Element}
   */ var root = Splide1.root;
                    /**
   * Whether arrows are created programmatically or not.
   *
   * @type {boolean}
   */ var created;
                    /**
   * Hold the Elements component.
   *
   * @type {Object}
   */ var Elements = Components.Elements;
                    /**
   * Arrows component object.
   *
   * @type {Object}
   */ var Arrows = {
                        /**
     * Required when the arrows option is true.
     *
     * @type {boolean}
     */ required: Splide1.options.arrows,
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            // Attempt to get arrows from HTML source.
                            prev = Elements.arrows.prev;
                            next = Elements.arrows.next; // If arrows were not found in HTML, let's generate them.
                            if ((!prev || !next) && Splide1.options.arrows) {
                                prev = createArrow(true);
                                next = createArrow(false);
                                created = true;
                                appendArrows();
                            }
                            if (prev && next) bind();
                            this.arrows = {
                                prev: prev,
                                next: next
                            };
                        },
                        /**
     * Called after all components are mounted.
     */ mounted: function mounted() {
                            Splide1.emit(name + ":mounted", prev, next);
                        },
                        /**
     * Destroy.
     */ destroy: function destroy() {
                            removeAttribute([
                                prev,
                                next
                            ], 'disabled');
                            if (created) dom_remove(prev.parentElement);
                        }
                    };
                    /**
   * Listen to native and custom events.
   */ function bind() {
                        Splide1.on('click', function() {
                            Splide1.go('<');
                        }, prev).on('click', function() {
                            Splide1.go('>');
                        }, next).on('mounted move updated refresh', updateDisabled);
                    }
                    /**
   * Update a disabled attribute.
   */ function updateDisabled() {
                        var _Components$Controlle = Components.Controller, prevIndex = _Components$Controlle.prevIndex, nextIndex = _Components$Controlle.nextIndex;
                        var isEnough = Splide1.length > Splide1.options.perPage || Splide1.is(LOOP);
                        prev.disabled = prevIndex < 0 || !isEnough;
                        next.disabled = nextIndex < 0 || !isEnough;
                        Splide1.emit(name + ":updated", prev, next, prevIndex, nextIndex);
                    }
                    /**
   * Create a wrapper element and append arrows.
   */ function appendArrows() {
                        var wrapper = create('div', {
                            "class": classes.arrows
                        });
                        append(wrapper, prev);
                        append(wrapper, next);
                        var slider = Elements.slider;
                        var parent = Splide1.options.arrows === 'slider' && slider ? slider : root;
                        before(wrapper, parent.firstElementChild);
                    }
                    /**
   * Create an arrow element.
   *
   * @param {boolean} prev - Determine to create a prev arrow or next arrow.
   *
   * @return {Element} - A created arrow element.
   */ function createArrow(prev1) {
                        var arrow = "<button class=\"" + classes.arrow + " " + (prev1 ? classes.prev : classes.next) + "\" type=\"button\">" + ("<svg xmlns=\"" + XML_NAME_SPACE + "\"\tviewBox=\"0 0 " + SIZE + " " + SIZE + "\"\twidth=\"" + SIZE + "\"\theight=\"" + SIZE + "\">") + ("<path d=\"" + (Splide1.options.arrowPath || PATH) + "\" />");
                        return domify(arrow);
                    }
                    return Arrows;
                };
                /**
 * The component for handling pagination
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The event name for updating some attributes of pagination nodes.
 *
 * @type {string}
 */ var ATTRIBUTES_UPDATE_EVENT = 'move.page';
                /**
 * The event name for recreating pagination.
 *
 * @type {string}
 */ var UPDATE_EVENT = 'updated.page refresh.page';
                /**
 * The component for handling pagination
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const pagination = function(Splide1, Components, name) {
                    /**
   * Store all data for pagination.
   * - list: A list element.
   * - items: An array that contains objects(li, button, index, page).
   *
   * @type {Object}
   */ var data = {
                    };
                    /**
   * Hold the Elements component.
   *
   * @type {Object}
   */ var Elements = Components.Elements;
                    /**
   * Pagination component object.
   *
   * @type {Object}
   */ var Pagination = {
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            var pagination1 = Splide1.options.pagination;
                            if (pagination1) {
                                data = createPagination();
                                var slider = Elements.slider;
                                var parent = pagination1 === 'slider' && slider ? slider : Splide1.root;
                                append(parent, data.list);
                                Splide1.on(ATTRIBUTES_UPDATE_EVENT, updateAttributes);
                            }
                            Splide1.off(UPDATE_EVENT).on(UPDATE_EVENT, function() {
                                Pagination.destroy();
                                if (Splide1.options.pagination) {
                                    Pagination.mount();
                                    Pagination.mounted();
                                }
                            });
                        },
                        /**
     * Called after all components are mounted.
     */ mounted: function mounted() {
                            if (Splide1.options.pagination) {
                                var index = Splide1.index;
                                Splide1.emit(name + ":mounted", data, this.getItem(index));
                                updateAttributes(index, -1);
                            }
                        },
                        /**
     * Destroy the pagination.
     * Be aware that node.remove() is not supported by IE.
     */ destroy: function destroy() {
                            dom_remove(data.list);
                            if (data.items) data.items.forEach(function(item) {
                                Splide1.off('click', item.button);
                            });
                             // Do not remove UPDATE_EVENT to recreate pagination if needed.
                            Splide1.off(ATTRIBUTES_UPDATE_EVENT);
                            data = {
                            };
                        },
                        /**
     * Return an item by index.
     *
     * @param {number} index - A slide index.
     *
     * @return {Object|undefined} - An item object on success or undefined on failure.
     */ getItem: function getItem(index) {
                            return data.items[Components.Controller.toPage(index)];
                        },
                        /**
     * Return object containing pagination data.
     *
     * @return {Object} - Pagination data including list and items.
     */ get data () {
                            return data;
                        }
                    };
                    /**
   * Update attributes.
   *
   * @param {number} index     - Active index.
   * @param {number} prevIndex - Prev index.
   */ function updateAttributes(index, prevIndex) {
                        var prev = Pagination.getItem(prevIndex);
                        var curr = Pagination.getItem(index);
                        var active = STATUS_CLASSES.active;
                        if (prev) removeClass(prev.button, active);
                        if (curr) addClass(curr.button, active);
                        Splide1.emit(name + ":updated", data, prev, curr);
                    }
                    /**
   * Create a wrapper and button elements.
   *
   * @return {Object} - An object contains all data.
   */ function createPagination() {
                        var options2 = Splide1.options;
                        var classes = Splide1.classes;
                        var list = create('ul', {
                            "class": classes.pagination
                        });
                        var items = Elements.getSlides(false).filter(function(Slide) {
                            return options2.focus !== false || Slide.index % options2.perPage === 0;
                        }).map(function(Slide, page) {
                            var li = create('li', {
                            });
                            var button = create('button', {
                                "class": classes.page,
                                type: 'button'
                            });
                            append(li, button);
                            append(list, li);
                            Splide1.on('click', function() {
                                Splide1.go(">" + page);
                            }, button);
                            return {
                                li: li,
                                button: button,
                                page: page,
                                Slides: Elements.getSlidesByPage(page)
                            };
                        });
                        return {
                            list: list,
                            items: items
                        };
                    }
                    return Pagination;
                };
                /**
 * The component for loading slider images lazily.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The name for a data attribute of src.
 *
 * @type {string}
 */ var SRC_DATA_NAME = 'data-splide-lazy';
                /**
 * The name for a data attribute of srcset.
 *
 * @type {string}
 */ var SRCSET_DATA_NAME = 'data-splide-lazy-srcset';
                /**
 * The component for loading slider images lazily.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 * @param {string} name       - A component name as a lowercase string.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const lazyload = function(Splide1, Components, name) {
                    /**
   * Next index for sequential loading.
   *
   * @type {number}
   */ var nextIndex;
                    /**
   * Store objects containing an img element and a Slide object.
   *
   * @type {Object[]}
   */ var images;
                    /**
   * Store the options.
   *
   * @type {Object}
   */ var options2 = Splide1.options;
                    /**
   * Whether to load images sequentially or not.
   *
   * @type {boolean}
   */ var isSequential = options2.lazyLoad === 'sequential';
                    /**
   * Lazyload component object.
   *
   * @type {Object}
   */ var Lazyload = {
                        /**
     * Mount only when the lazyload option is provided.
     *
     * @type {boolean}
     */ required: options2.lazyLoad,
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            Splide1.on('mounted refresh', function() {
                                init();
                                Components.Elements.each(function(Slide) {
                                    each(Slide.slide.querySelectorAll("[" + SRC_DATA_NAME + "], [" + SRCSET_DATA_NAME + "]"), function(img) {
                                        if (!img.src && !img.srcset) {
                                            images.push({
                                                img: img,
                                                Slide: Slide
                                            });
                                            applyStyle(img, {
                                                display: 'none'
                                            });
                                        }
                                    });
                                });
                                if (isSequential) loadNext();
                            });
                            if (!isSequential) Splide1.on("mounted refresh moved." + name, check);
                        },
                        /**
     * Destroy.
     */ destroy: init
                    };
                    /**
   * Initialize parameters.
   */ function init() {
                        images = [];
                        nextIndex = 0;
                    }
                    /**
   * Check how close each image is from the active slide and
   * determine whether to start loading or not, according to the distance.
   *
   * @param {number} index - Current index.
   */ function check(index) {
                        index = isNaN(index) ? Splide1.index : index;
                        images = images.filter(function(image) {
                            if (image.Slide.isWithin(index, options2.perPage * (options2.preloadPages + 1))) {
                                load(image.img, image.Slide);
                                return false;
                            }
                            return true;
                        }); // Unbind if all images are loaded.
                        if (!images[0]) Splide1.off("moved." + name);
                    }
                    /**
   * Start loading an image.
   * Creating a clone of the image element since setting src attribute directly to it
   * often occurs 'hitch', blocking some other processes of a browser.
   *
   * @param {Element} img   - An image element.
   * @param {Object}  Slide - A Slide object.
   */ function load(img, Slide) {
                        addClass(Slide.slide, STATUS_CLASSES.loading);
                        var spinner = create('span', {
                            "class": Splide1.classes.spinner
                        });
                        append(img.parentElement, spinner);
                        img.onload = function() {
                            loaded2(img, spinner, Slide, false);
                        };
                        img.onerror = function() {
                            loaded2(img, spinner, Slide, true);
                        };
                        setAttribute(img, 'srcset', getAttribute(img, SRCSET_DATA_NAME) || '');
                        setAttribute(img, 'src', getAttribute(img, SRC_DATA_NAME) || '');
                    }
                    /**
   * Start loading a next image in images array.
   */ function loadNext() {
                        if (nextIndex < images.length) {
                            var image = images[nextIndex];
                            load(image.img, image.Slide);
                        }
                        nextIndex++;
                    }
                    /**
   * Called just after the image was loaded or loading was aborted by some error.
   *
   * @param {Element} img     - An image element.
   * @param {Element} spinner - A spinner element.
   * @param {Object}  Slide   - A Slide object.
   * @param {boolean} error   - True if the image was loaded successfully or false on error.
   */ function loaded2(img, spinner, Slide, error1) {
                        removeClass(Slide.slide, STATUS_CLASSES.loading);
                        if (!error1) {
                            dom_remove(spinner);
                            applyStyle(img, {
                                display: ''
                            });
                            Splide1.emit(name + ":loaded", img).emit('resize');
                        }
                        if (isSequential) loadNext();
                    }
                    return Lazyload;
                };
                /**
 * Export aria attribute names.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Attribute name for aria-current.
 *
 * @type {string}
 */ var ARIA_CURRENRT = 'aria-current';
                /**
 * Attribute name for aria-control.
 *
 * @type {string}
 */ var ARIA_CONTROLS = 'aria-controls';
                /**
 * Attribute name for aria-control.
 *
 * @type {string}
 */ var ARIA_LABEL = 'aria-label';
                /**
 * Attribute name for aria-labelledby.
 *
 * @type {string}
 */ var ARIA_LABELLEDBY = 'aria-labelledby';
                /**
 * Attribute name for aria-hidden.
 *
 * @type {string}
 */ var ARIA_HIDDEN = 'aria-hidden';
                /**
 * Attribute name for tab-index.
 *
 * @type {string}
 */ var TAB_INDEX = 'tabindex';
                /**
 * The component for controlling slides via keyboard.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Map a key to a slide control.
 *
 * @type {Object}
 */ var KEY_MAP = {
                    ltr: {
                        ArrowLeft: '<',
                        ArrowRight: '>',
                        // For IE.
                        Left: '<',
                        Right: '>'
                    },
                    rtl: {
                        ArrowLeft: '>',
                        ArrowRight: '<',
                        // For IE.
                        Left: '>',
                        Right: '<'
                    },
                    ttb: {
                        ArrowUp: '<',
                        ArrowDown: '>',
                        // For IE.
                        Up: '<',
                        Down: '>'
                    }
                };
                /**
 * The component for controlling slides via keyboard.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const keyboard = function(Splide1) {
                    /**
   * Hold the target element.
   *
   * @type {Element|Document|undefined}
   */ var target;
                    return {
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            Splide1.on('mounted updated', function() {
                                var options2 = Splide1.options;
                                var root = Splide1.root;
                                var map = KEY_MAP[options2.direction];
                                var keyboard1 = options2.keyboard;
                                if (target) {
                                    Splide1.off('keydown', target);
                                    removeAttribute(root, TAB_INDEX);
                                }
                                if (keyboard1) {
                                    if (keyboard1 === 'focused') {
                                        target = root;
                                        setAttribute(root, TAB_INDEX, 0);
                                    } else target = document;
                                    Splide1.on('keydown', function(e) {
                                        if (map[e.key]) Splide1.go(map[e.key]);
                                    }, target);
                                }
                            });
                        }
                    };
                };
                /**
 * The component for enhancing accessibility.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The component for enhancing accessibility.
 *
 * @param {Splide} Splide     - A Splide instance.
 * @param {Object} Components - An object containing components.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const a11y = function(Splide1, Components) {
                    /**
   * Hold a i18n object.
   *
   * @type {Object}
   */ var i18n = Splide1.i18n;
                    /**
   * Hold the Elements component.
   *
   * @type {Object}
   */ var Elements = Components.Elements;
                    /**
   * All attributes related with A11y.
   *
   * @type {string[]}
   */ var allAttributes = [
                        ARIA_HIDDEN,
                        TAB_INDEX,
                        ARIA_CONTROLS,
                        ARIA_LABEL,
                        ARIA_CURRENRT,
                        'role'
                    ];
                    /**
   * A11y component object.
   *
   * @type {Object}
   */ var A11y = {
                        /**
     * Required only when the accessibility option is true.
     *
     * @type {boolean}
     */ required: Splide1.options.accessibility,
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            Splide1.on('visible', function(Slide) {
                                updateSlide(Slide.slide, true);
                            }).on('hidden', function(Slide) {
                                updateSlide(Slide.slide, false);
                            }).on('arrows:mounted', initArrows).on('arrows:updated', updateArrows).on('pagination:mounted', initPagination).on('pagination:updated', updatePagination).on('refresh', function() {
                                removeAttribute(Components.Clones.clones, allAttributes);
                            });
                            if (Splide1.options.isNavigation) Splide1.on('navigation:mounted navigation:updated', initNavigation).on('active', function(Slide) {
                                updateNavigation(Slide, true);
                            }).on('inactive', function(Slide) {
                                updateNavigation(Slide, false);
                            });
                            initAutoplay();
                        },
                        /**
     * Destroy.
     */ destroy: function destroy() {
                            var Arrows = Components.Arrows;
                            var arrows1 = Arrows ? Arrows.arrows : {
                            };
                            removeAttribute(Elements.slides.concat([
                                arrows1.prev,
                                arrows1.next,
                                Elements.play,
                                Elements.pause
                            ]), allAttributes);
                        }
                    };
                    /**
   * Update slide attributes when it gets visible or hidden.
   *
   * @param {Element} slide   - A slide element.
   * @param {Boolean} visible - True when the slide gets visible, or false when hidden.
   */ function updateSlide(slide1, visible) {
                        setAttribute(slide1, ARIA_HIDDEN, !visible);
                        if (Splide1.options.slideFocus) setAttribute(slide1, TAB_INDEX, visible ? 0 : -1);
                    }
                    /**
   * Initialize arrows if they are available.
   * Append screen reader elements and add aria-controls attribute.
   *
   * @param {Element} prev - Previous arrow element.
   * @param {Element} next - Next arrow element.
   */ function initArrows(prev, next) {
                        var controls = Elements.track.id;
                        setAttribute(prev, ARIA_CONTROLS, controls);
                        setAttribute(next, ARIA_CONTROLS, controls);
                    }
                    /**
   * Update arrow attributes.
   *
   * @param {Element} prev      - Previous arrow element.
   * @param {Element} next      - Next arrow element.
   * @param {number}  prevIndex - Previous slide index or -1 when there is no precede slide.
   * @param {number}  nextIndex - Next slide index or -1 when there is no next slide.
   */ function updateArrows(prev, next, prevIndex, nextIndex) {
                        var index = Splide1.index;
                        var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
                        var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
                        setAttribute(prev, ARIA_LABEL, prevLabel);
                        setAttribute(next, ARIA_LABEL, nextLabel);
                    }
                    /**
   * Initialize pagination if it's available.
   * Append a screen reader element and add aria-controls/label attribute to each item.
   *
   * @param {Object} data       - Data object containing all items.
   * @param {Object} activeItem - An initial active item.
   */ function initPagination(data, activeItem) {
                        if (activeItem) setAttribute(activeItem.button, ARIA_CURRENRT, true);
                        data.items.forEach(function(item) {
                            var options2 = Splide1.options;
                            var text = options2.focus === false && options2.perPage > 1 ? i18n.pageX : i18n.slideX;
                            var label = sprintf(text, item.page + 1);
                            var button = item.button;
                            var controls = item.Slides.map(function(Slide) {
                                return Slide.slide.id;
                            });
                            setAttribute(button, ARIA_CONTROLS, controls.join(' '));
                            setAttribute(button, ARIA_LABEL, label);
                        });
                    }
                    /**
   * Update pagination attributes.
   *
   * @param {Object}  data - Data object containing all items.
   * @param {Element} prev - A previous active element.
   * @param {Element} curr - A current active element.
   */ function updatePagination(data, prev, curr) {
                        if (prev) removeAttribute(prev.button, ARIA_CURRENRT);
                        if (curr) setAttribute(curr.button, ARIA_CURRENRT, true);
                    }
                    /**
   * Initialize autoplay buttons.
   */ function initAutoplay() {
                        [
                            'play',
                            'pause'
                        ].forEach(function(name) {
                            var elm = Elements[name];
                            if (elm) {
                                if (!isButton(elm)) setAttribute(elm, 'role', 'button');
                                setAttribute(elm, ARIA_CONTROLS, Elements.track.id);
                                setAttribute(elm, ARIA_LABEL, i18n[name]);
                            }
                        });
                    }
                    /**
   * Initialize navigation slider.
   * Add button role, aria-label, aria-controls to slide elements and append screen reader text to them.
   *
   * @param {Splide} main - A main Splide instance.
   */ function initNavigation(main) {
                        Elements.each(function(Slide) {
                            var slide1 = Slide.slide;
                            var realIndex = Slide.realIndex;
                            if (!isButton(slide1)) setAttribute(slide1, 'role', 'button');
                            var slideIndex = realIndex > -1 ? realIndex : Slide.index;
                            var label = sprintf(i18n.slideX, slideIndex + 1);
                            var mainSlide = main.Components.Elements.getSlide(slideIndex);
                            setAttribute(slide1, ARIA_LABEL, label);
                            if (mainSlide) setAttribute(slide1, ARIA_CONTROLS, mainSlide.slide.id);
                        });
                    }
                    /**
   * Update navigation attributes.
   *
   * @param {Object}  Slide  - A target Slide object.
   * @param {boolean} active - True if the slide is active or false if inactive.
   */ function updateNavigation(_ref, active) {
                        var slide1 = _ref.slide;
                        if (active) setAttribute(slide1, ARIA_CURRENRT, true);
                        else removeAttribute(slide1, ARIA_CURRENRT);
                    }
                    /**
   * Check if the given element is button or not.
   *
   * @param {Element} elm - An element to be checked.
   *
   * @return {boolean} - True if the given element is button.
   */ function isButton(elm) {
                        return elm.tagName === 'BUTTON';
                    }
                    return A11y;
                };
                /**
 * The component for synchronizing a slider with another.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * The event name for sync.
 *
 * @type {string}
 */ var SYNC_EVENT = 'move.sync';
                /**
 * The event names for click navigation.
 * @type {string}
 */ var CLICK_EVENTS = 'mouseup touchend';
                /**
 * The keys for triggering the navigation button.
 *
 * @type {String[]}
 */ var TRIGGER_KEYS = [
                    ' ',
                    'Enter',
                    'Spacebar'
                ];
                /**
 * The component for synchronizing a slider with another.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const sync = function(Splide1) {
                    /**
   * Keep the sibling Splide instance.
   *
   * @type {Splide}
   */ var sibling = Splide1.sibling;
                    /**
   * Whether the sibling slider is navigation or not.
   *
   * @type {Splide|boolean}
   */ var isNavigation = sibling && sibling.options.isNavigation;
                    /**
   * Layout component object.
   *
   * @type {Object}
   */ var Sync = {
                        /**
     * Required only when the sub slider is available.
     *
     * @type {boolean}
     */ required: !!sibling,
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            syncMain();
                            syncSibling();
                            if (isNavigation) {
                                bind();
                                Splide1.on('refresh', function() {
                                    setTimeout(function() {
                                        bind();
                                        sibling.emit('navigation:updated', Splide1);
                                    });
                                });
                            }
                        },
                        /**
     * Called after all components are mounted.
     */ mounted: function mounted() {
                            if (isNavigation) sibling.emit('navigation:mounted', Splide1);
                        }
                    };
                    /**
   * Listen the primary slider event to move secondary one.
   * Must unbind a handler at first to avoid infinite loop.
   */ function syncMain() {
                        Splide1.on(SYNC_EVENT, function(newIndex, prevIndex, destIndex) {
                            sibling.off(SYNC_EVENT).go(sibling.is(LOOP) ? destIndex : newIndex, false);
                            syncSibling();
                        });
                    }
                    /**
   * Listen the secondary slider event to move primary one.
   * Must unbind a handler at first to avoid infinite loop.
   */ function syncSibling() {
                        sibling.on(SYNC_EVENT, function(newIndex, prevIndex, destIndex) {
                            Splide1.off(SYNC_EVENT).go(Splide1.is(LOOP) ? destIndex : newIndex, false);
                            syncMain();
                        });
                    }
                    /**
   * Listen some events on each slide.
   */ function bind() {
                        sibling.Components.Elements.each(function(_ref) {
                            var slide1 = _ref.slide, index = _ref.index;
                            /*
       * Listen mouseup and touchend events to handle click.
       */ Splide1.off(CLICK_EVENTS, slide1).on(CLICK_EVENTS, function(e) {
                                // Ignore a middle or right click.
                                if (!e.button || e.button === 0) moveSibling(index);
                            }, slide1);
                            /*
       * Subscribe keyup to handle Enter and Space key.
       * Note that Array.includes is not supported by IE.
       */ Splide1.off('keyup', slide1).on('keyup', function(e) {
                                if (TRIGGER_KEYS.indexOf(e.key) > -1) {
                                    e.preventDefault();
                                    moveSibling(index);
                                }
                            }, slide1, {
                                passive: false
                            });
                        });
                    }
                    /**
   * Move the sibling to the given index.
   * Need to check "IDLE" status because slides can be moving by Drag component.
   *
   * @param {number} index - Target index.
   */ function moveSibling(index) {
                        if (Splide1.State.is(IDLE)) sibling.go(index);
                    }
                    return Sync;
                };
                /**
 * The component for updating options according to a current window width.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Interval time for throttle.
 *
 * @type {number}
 */ var THROTTLE = 50;
                /**
 * The component for updating options according to a current window width.
 *
 * @param {Splide} Splide - A Splide instance.
 *
 * @return {Object} - The component object.
 */ /* harmony default export */ const breakpoints = function(Splide1) {
                    /**
   * Store breakpoints.
   *
   * @type {Object|boolean}
   */ var breakpoints1 = Splide1.options.breakpoints;
                    /**
   * The check function whose frequency of call is reduced.
   *
   * @type {Function}
   */ var throttledCheck = throttle(check, THROTTLE);
                    /**
   * Keep initial options.
   *
   * @type {Object}
   */ var initialOptions;
                    /**
   * An array containing objects of point and MediaQueryList.
   *
   * @type {Object[]}
   */ var map = [];
                    /**
   * Hold the previous breakpoint.
   *
   * @type {number|undefined}
   */ var prevPoint;
                    /**
   * Breakpoints component object.
   *
   * @type {Object}
   */ var Breakpoints = {
                        /**
     * Required only when the breakpoints definition is provided and browser supports matchMedia.
     *
     * @type {boolean}
     */ required: breakpoints1 && matchMedia,
                        /**
     * Called when the component is mounted.
     */ mount: function mount() {
                            map = Object.keys(breakpoints1).sort(function(n, m) {
                                return +n - +m;
                            }).map(function(point) {
                                return {
                                    point: point,
                                    mql: matchMedia("(max-width:" + point + "px)")
                                };
                            });
                            /*
       * To keep monitoring resize event after destruction without "completely",
       * use native addEventListener instead of Splide.on.
       */ this.destroy(true);
                            addEventListener('resize', throttledCheck); // Keep initial options to apply them when no breakpoint matches.
                            initialOptions = Splide1.options;
                            check();
                        },
                        /**
     * Destroy.
     *
     * @param {boolean} completely - Whether to destroy Splide completely.
     */ destroy: function destroy(completely) {
                            if (completely) removeEventListener('resize', throttledCheck);
                        }
                    };
                    /**
   * Check the breakpoint.
   */ function check() {
                        var point = getPoint();
                        if (point !== prevPoint) {
                            prevPoint = point;
                            var State = Splide1.State;
                            var options2 = breakpoints1[point] || initialOptions;
                            var destroy = options2.destroy;
                            if (destroy) {
                                Splide1.options = initialOptions;
                                Splide1.destroy(destroy === 'completely');
                            } else {
                                if (State.is(DESTROYED)) Splide1.mount();
                                Splide1.options = options2;
                            }
                        }
                    }
                    /**
   * Return the breakpoint matching current window width.
   * Note that Array.prototype.find is not supported by IE.
   *
   * @return {number|string} - A breakpoint as number or string. -1 if no point matches.
   */ function getPoint() {
                        var item = map.filter(function(item1) {
                            return item1.mql.matches;
                        })[0];
                        return item ? item.point : -1;
                    }
                    return Breakpoints;
                };
                /**
 * Export components.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ var COMPLETE = {
                    Options: options,
                    Breakpoints: breakpoints,
                    Controller: controller,
                    Elements: components_elements,
                    Track: track,
                    Clones: clones,
                    Layout: layout,
                    Drag: drag,
                    Click: click,
                    Autoplay: autoplay,
                    Cover: cover1,
                    Arrows: arrows,
                    Pagination: pagination,
                    LazyLoad: lazyload,
                    Keyboard: keyboard,
                    Sync: sync,
                    A11y: a11y
                };
                var LIGHT = {
                    Options: options,
                    Controller: controller,
                    Elements: components_elements,
                    Track: track,
                    Clones: clones,
                    Layout: layout,
                    Drag: drag,
                    Click: click,
                    Arrows: arrows,
                    Pagination: pagination,
                    A11y: a11y
                };
                function _inheritsLoose(subClass, superClass) {
                    subClass.prototype = Object.create(superClass.prototype);
                    subClass.prototype.constructor = subClass;
                    subClass.__proto__ = superClass;
                }
                /**
 * Export Splide class for import.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */ /**
 * Export Splide class for import from other projects.
 */ var module_Splide = /*#__PURE__*/ function(_Core) {
                    _inheritsLoose(Splide2, _Core);
                    function Splide2(root, options3) {
                        return _Core.call(this, root, options3, COMPLETE) || this;
                    }
                    return Splide2;
                }(Splide1);
            /***/ }
        };
        /************************************************************************/ /******/ // The module cache
        /******/ var __webpack_module_cache__ = {
        };
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ if (__webpack_module_cache__[moduleId]) /******/ return __webpack_module_cache__[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = __webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {
                }
            };
            /******/ /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
            /******/ /******/ // Return the exports of the module
            /******/ return module.exports;
        /******/ }
        /******/ /************************************************************************/ /******/ /* webpack/runtime/define property getters */ /******/ (()=>{
            /******/ // define getter functions for harmony exports
            /******/ __webpack_require__.d = (exports, definition)=>{
                /******/ for(var key in definition)/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) /******/ Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                });
            /******/ };
        /******/ })();
        /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ (()=>{
            /******/ __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop)
            ;
        /******/ })();
        /******/ /******/ /* webpack/runtime/make namespace object */ /******/ (()=>{
            /******/ // define __esModule on exports
            /******/ __webpack_require__.r = (exports)=>{
                /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
                /******/ Object.defineProperty(exports, '__esModule', {
                    value: true
                });
            /******/ };
        /******/ })();
        /******/ /************************************************************************/ /******/ // module exports must be returned from runtime so entry inlining is disabled
        /******/ // startup
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(311);
    /******/ })());
});

},{}]},["j6ycT","ajoad"], "ajoad", "parcelRequire5466")

//# sourceMappingURL=index.550d17ae.js.map
