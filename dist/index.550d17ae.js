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
//import mediumZoom from 'medium-zoom'; no la utilizo porque no funciona correctamente con mi library de swiper
var _splide = require("@splidejs/splide");
var _splideDefault = parcelHelpers.interopDefault(_splide);
var _bundle = require("swiper/bundle");
var _bundleDefault = parcelHelpers.interopDefault(_bundle);
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
            console.log("close");
            modalView.classList.remove('active-modal');
        });
    });
});
/*==================== TEMPLATE  ====================*/ const imgContains = document.querySelectorAll('.portfolio__img'), modalShow = document.querySelector('#modal-show-image'), modalImg = document.querySelector('#modal-img');
imgContains.forEach((imgTag, i, parent)=>{
    imgTag.addEventListener('click', ()=>{
        modalShow.classList.add('active-modal');
        const srcModal = imgTag.getAttribute('data-src-img');
        modalImg.src = imgTag.src;
    });
});
modalShow.addEventListener('click', ()=>{
    modalShow.classList.remove('active-modal');
});
/*==================== PORTFOLIO SWIPER  ====================*/ let swiper = new _bundleDefault.default('.portfolio__container', {
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
/*==================== TESTIMONIAL ====================*/ let swiperTestimonial = new _bundleDefault.default('.testimonial__container', {
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
    // console.log("getCurrenTheme", getCurrenTheme());
    // console.log("getCurrectIcon", getCurrectIcon());
    // console.log("darkTheme", darkTheme);
    // console.log("iconTheme", iconTheme)
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrenTheme());
    localStorage.setItem('selected-icon', getCurrectIcon());
});
// Post a user
///Get values from Form with vanilla js
/*const form = document.querySelector('.contact__form')
const formularios =document.forms;

console.log(formularios[0]);
console.log(formularios['contactar'])

function printDom(node,prefix) {    
    console.log(`${prefix} ${node.nodeName} : ${node.nodeType} -> ${node.nodeValue}`);
    for (let index = 0; index < node.childNodes.length; index++) {
        printDom(node.childNodes[index],`${prefix} \t`)    
    }
}
printDom(formularios['contactar'],"");
*/ /*==================== SEND EMAIL MESSAGE ====================*/ const name = document.getElementsByName('name'), email = document.getElementsByName('email'), project = document.getElementsByName('project'), message = document.getElementsByName('message'), bntSendMessage = document.getElementById('sendMessage');
function checkInputs() {
    //get the values from Inputs
    const nameValue = name[0].value.trim();
    const emailValue = email[0].value.trim();
    const projectValue = project[0].value.trim();
    const messageValue = message[0].value.trim();
    if (nameValue === '') //show Error
    //add Error  class
    setErrorFor(name[0], 'Name cannot be blank.');
    else {
        setSuccessFor(name[0]);
        if (emailValue === '') setErrorFor(email[0], 'Email cannot be blank.');
        else if (!isEmail(emailValue)) setErrorFor(email[0], 'Email is not valid.');
        else {
            setSuccessFor(email[0]);
            if (projectValue === '') setErrorFor(project[0], 'Projecto or Subject cannot be blank.');
            else {
                setSuccessFor(project[0]);
                if (messageValue === '') setErrorFor(message[0], 'Projecto or Subject cannot be blank.');
                else {
                    setSuccessFor(message[0]);
                    //desabilitamos el bottom
                    bntSendMessage.disabled = true;
                    let MailResquest = {
                        name: nameValue,
                        email: emailValue,
                        project: projectValue,
                        message: messageValue
                    };
                    const url = "https://server-mail-spring.herokuapp.com/server/api/sendemail";
                    //send mail message
                    // //sendMail(JSON.stringify(MailResquest));
                    makeRequest("POST", url, JSON.stringify(MailResquest)).then((rpta)=>{
                        bntSendMessage.disabled = false;
                        console.log(rpta);
                    }, (error)=>{
                        bntSendMessage.disabled = false;
                        console.log(error);
                    });
                }
            }
        }
    }
}
function setErrorFor(input, message1) {
    const contacContent = input.parentElement;
    const small = contacContent.querySelector('small');
    //addError message inside small
    small.innerText = message1;
}
function setSuccessFor(input) {
    const contacContent = input.parentElement;
    const small = contacContent.querySelector('small');
    //addError message inside small
    small.innerText = '';
}
function isEmail(email1) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email1).toLowerCase());
}
bntSendMessage.addEventListener('click', ()=>{
    checkInputs();
});
function makeRequest(method, url, objcReq = null) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) resolve(xhr.response);
            else reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.onerror = function() {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        if (method === 'POST') xhr.send(objcReq);
        else xhr.send();
    });
} // function sendMail(jsonObject) {
 //     console.log(jsonObject)
 //     const url = "http://localhost:8080/server/api/sendemail";
 //     const xhr = new XMLHttpRequest();
 //     xhr.open("POST", url, true);
 //     xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
 //     xhr.onload = function () {
 //         if (xhr.readyState == 4 && xhr.status == "201" || xhr.status == "200") {
 //             console.log("esta es la respuesta positiva del servidor");
 //             console.log(xhr.responseText);
 //             console.log(xhr.responseText);
 //         } else {
 //             console.log("esta es la respuesta negativa del servidor");
 //             console.log(xhr.responseText);
 //             console.log(xhr.responseText);
 //         }
 //     }
 //     xhr.send(jsonObject);
 // }

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","@splidejs/splide":"hFSkN","swiper/bundle":"jCojB"}],"JacNc":[function(require,module,exports) {
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

},{}],"jCojB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Swiper", ()=>_coreClassDefault.default
);
parcelHelpers.export(exports, "default", ()=>_coreClassDefault.default
);
/**
 * Swiper 6.8.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: August 3, 2021
 */ var _coreClass = require("./esm/components/core/core-class");
var _coreClassDefault = parcelHelpers.interopDefault(_coreClass);
var _virtual = require("./esm/components/virtual/virtual");
var _virtualDefault = parcelHelpers.interopDefault(_virtual);
var _keyboard = require("./esm/components/keyboard/keyboard");
var _keyboardDefault = parcelHelpers.interopDefault(_keyboard);
var _mousewheel = require("./esm/components/mousewheel/mousewheel");
var _mousewheelDefault = parcelHelpers.interopDefault(_mousewheel);
var _navigation = require("./esm/components/navigation/navigation");
var _navigationDefault = parcelHelpers.interopDefault(_navigation);
var _pagination = require("./esm/components/pagination/pagination");
var _paginationDefault = parcelHelpers.interopDefault(_pagination);
var _scrollbar = require("./esm/components/scrollbar/scrollbar");
var _scrollbarDefault = parcelHelpers.interopDefault(_scrollbar);
var _parallax = require("./esm/components/parallax/parallax");
var _parallaxDefault = parcelHelpers.interopDefault(_parallax);
var _zoom = require("./esm/components/zoom/zoom");
var _zoomDefault = parcelHelpers.interopDefault(_zoom);
var _lazy = require("./esm/components/lazy/lazy");
var _lazyDefault = parcelHelpers.interopDefault(_lazy);
var _controller = require("./esm/components/controller/controller");
var _controllerDefault = parcelHelpers.interopDefault(_controller);
var _a11Y = require("./esm/components/a11y/a11y");
var _a11YDefault = parcelHelpers.interopDefault(_a11Y);
var _history = require("./esm/components/history/history");
var _historyDefault = parcelHelpers.interopDefault(_history);
var _hashNavigation = require("./esm/components/hash-navigation/hash-navigation");
var _hashNavigationDefault = parcelHelpers.interopDefault(_hashNavigation);
var _autoplay = require("./esm/components/autoplay/autoplay");
var _autoplayDefault = parcelHelpers.interopDefault(_autoplay);
var _effectFade = require("./esm/components/effect-fade/effect-fade");
var _effectFadeDefault = parcelHelpers.interopDefault(_effectFade);
var _effectCube = require("./esm/components/effect-cube/effect-cube");
var _effectCubeDefault = parcelHelpers.interopDefault(_effectCube);
var _effectFlip = require("./esm/components/effect-flip/effect-flip");
var _effectFlipDefault = parcelHelpers.interopDefault(_effectFlip);
var _effectCoverflow = require("./esm/components/effect-coverflow/effect-coverflow");
var _effectCoverflowDefault = parcelHelpers.interopDefault(_effectCoverflow);
var _thumbs = require("./esm/components/thumbs/thumbs");
var _thumbsDefault = parcelHelpers.interopDefault(_thumbs);
// Swiper Class
var components = [_virtualDefault.default, _keyboardDefault.default, _mousewheelDefault.default, _navigationDefault.default, _paginationDefault.default, _scrollbarDefault.default, _parallaxDefault.default, _zoomDefault.default, _lazyDefault.default, _controllerDefault.default, _a11YDefault.default, _historyDefault.default, _hashNavigationDefault.default, _autoplayDefault.default, _effectFadeDefault.default, _effectCubeDefault.default, _effectFlipDefault.default, _effectCoverflowDefault.default, _thumbsDefault.default];
_coreClassDefault.default.use(components);

},{"./esm/components/core/core-class":"kPNOC","./esm/components/virtual/virtual":"eAjgV","./esm/components/keyboard/keyboard":"dzALw","./esm/components/mousewheel/mousewheel":"leBup","./esm/components/navigation/navigation":"d17FH","./esm/components/pagination/pagination":"3C5f4","./esm/components/scrollbar/scrollbar":"bck8q","./esm/components/parallax/parallax":"1Rna3","./esm/components/zoom/zoom":"d07n0","./esm/components/lazy/lazy":"9ThoQ","./esm/components/controller/controller":"6eTrj","./esm/components/a11y/a11y":"3IITi","./esm/components/history/history":"6PgLK","./esm/components/hash-navigation/hash-navigation":"jL9F3","./esm/components/autoplay/autoplay":"3AVvT","./esm/components/effect-fade/effect-fade":"4IJ5D","./esm/components/effect-cube/effect-cube":"20tPf","./esm/components/effect-flip/effect-flip":"iwYSf","./esm/components/effect-coverflow/effect-coverflow":"5Hacc","./esm/components/thumbs/thumbs":"d4p7f","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kPNOC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint no-param-reassign: "off" */ var _ssrWindow = require("ssr-window");
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
var _getSupport = require("../../utils/get-support");
var _getDevice = require("../../utils/get-device");
var _getBrowser = require("../../utils/get-browser");
var _resize = require("../../modules/resize/resize");
var _resizeDefault = parcelHelpers.interopDefault(_resize);
var _observer = require("../../modules/observer/observer");
var _observerDefault = parcelHelpers.interopDefault(_observer);
var _modular = require("./modular");
var _modularDefault = parcelHelpers.interopDefault(_modular);
var _eventsEmitter = require("./events-emitter");
var _eventsEmitterDefault = parcelHelpers.interopDefault(_eventsEmitter);
var _index = require("./update/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _index1 = require("./translate/index");
var _indexDefault1 = parcelHelpers.interopDefault(_index1);
var _index2 = require("./transition/index");
var _indexDefault2 = parcelHelpers.interopDefault(_index2);
var _index3 = require("./slide/index");
var _indexDefault3 = parcelHelpers.interopDefault(_index3);
var _index4 = require("./loop/index");
var _indexDefault4 = parcelHelpers.interopDefault(_index4);
var _index5 = require("./grab-cursor/index");
var _indexDefault5 = parcelHelpers.interopDefault(_index5);
var _index6 = require("./manipulation/index");
var _indexDefault6 = parcelHelpers.interopDefault(_index6);
var _index7 = require("./events/index");
var _indexDefault7 = parcelHelpers.interopDefault(_index7);
var _index8 = require("./breakpoints/index");
var _indexDefault8 = parcelHelpers.interopDefault(_index8);
var _index9 = require("./classes/index");
var _indexDefault9 = parcelHelpers.interopDefault(_index9);
var _index10 = require("./images/index");
var _indexDefault10 = parcelHelpers.interopDefault(_index10);
var _index11 = require("./check-overflow/index");
var _indexDefault11 = parcelHelpers.interopDefault(_index11);
var _defaults = require("./defaults");
var _defaultsDefault = parcelHelpers.interopDefault(_defaults);
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
var prototypes = {
    modular: _modularDefault.default,
    eventsEmitter: _eventsEmitterDefault.default,
    update: _indexDefault.default,
    translate: _indexDefault1.default,
    transition: _indexDefault2.default,
    slide: _indexDefault3.default,
    loop: _indexDefault4.default,
    grabCursor: _indexDefault5.default,
    manipulation: _indexDefault6.default,
    events: _indexDefault7.default,
    breakpoints: _indexDefault8.default,
    checkOverflow: _indexDefault11.default,
    classes: _indexDefault9.default,
    images: _indexDefault10.default
};
var extendedDefaults = {
};
var Swiper = /*#__PURE__*/ function() {
    function Swiper1() {
        var el;
        var params;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') params = args[0];
        else {
            el = args[0];
            params = args[1];
        }
        if (!params) params = {
        };
        params = _utils.extend({
        }, params);
        if (el && !params.el) params.el = el;
        if (params.el && _domDefault.default(params.el).length > 1) {
            var swipers = [];
            _domDefault.default(params.el).each(function(containerEl) {
                var newParams = _utils.extend({
                }, params, {
                    el: containerEl
                });
                swipers.push(new Swiper1(newParams));
            });
            return swipers;
        } // Swiper Instance
        var swiper = this;
        swiper.__swiper__ = true;
        swiper.support = _getSupport.getSupport();
        swiper.device = _getDevice.getDevice({
            userAgent: params.userAgent
        });
        swiper.browser = _getBrowser.getBrowser();
        swiper.eventsListeners = {
        };
        swiper.eventsAnyListeners = [];
        if (typeof swiper.modules === 'undefined') swiper.modules = {
        };
        Object.keys(swiper.modules).forEach(function(moduleName) {
            var module = swiper.modules[moduleName];
            if (module.params) {
                var moduleParamName = Object.keys(module.params)[0];
                var moduleParams = module.params[moduleParamName];
                if (typeof moduleParams !== 'object' || moduleParams === null) return;
                if ([
                    'navigation',
                    'pagination',
                    'scrollbar'
                ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && 'enabled' in moduleParams)) return;
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
            }
        }); // Extend defaults with modules params
        var swiperParams = _utils.extend({
        }, _defaultsDefault.default);
        swiper.useParams(swiperParams); // Extend defaults with passed params
        swiper.params = _utils.extend({
        }, swiperParams, extendedDefaults, params);
        swiper.originalParams = _utils.extend({
        }, swiper.params);
        swiper.passedParams = _utils.extend({
        }, params); // add event listeners
        if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach(function(eventName) {
            swiper.on(eventName, swiper.params.on[eventName]);
        });
        if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
         // Save Dom lib
        swiper.$ = _domDefault.default; // Extend Swiper
        _utils.extend(swiper, {
            enabled: swiper.params.enabled,
            el: el,
            // Classes
            classNames: [],
            // Slides
            slides: _domDefault.default(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal: function isHorizontal() {
                return swiper.params.direction === 'horizontal';
            },
            isVertical: function isVertical() {
                return swiper.params.direction === 'vertical';
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEvents: function touchEvents() {
                var touch = [
                    'touchstart',
                    'touchmove',
                    'touchend',
                    'touchcancel'
                ];
                var desktop = [
                    'mousedown',
                    'mousemove',
                    'mouseup'
                ];
                if (swiper.support.pointerEvents) desktop = [
                    'pointerdown',
                    'pointermove',
                    'pointerup'
                ];
                swiper.touchEventsTouch = {
                    start: touch[0],
                    move: touch[1],
                    end: touch[2],
                    cancel: touch[3]
                };
                swiper.touchEventsDesktop = {
                    start: desktop[0],
                    move: desktop[1],
                    end: desktop[2]
                };
                return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
            }(),
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: _utils.now(),
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                isTouchEvent: undefined,
                startMoving: undefined
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        }); // Install Modules
        swiper.useModules();
        swiper.emit('_swiper'); // Init
        if (swiper.params.init) swiper.init();
         // Return app instance
        return swiper;
    }
    var _proto = Swiper1.prototype;
    _proto.enable = function enable() {
        var swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) swiper.setGrabCursor();
        swiper.emit('enable');
    };
    _proto.disable = function disable() {
        var swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) swiper.unsetGrabCursor();
        swiper.emit('disable');
    };
    _proto.setProgress = function setProgress(progress, speed) {
        var swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        var min = swiper.minTranslate();
        var max = swiper.maxTranslate();
        var current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    };
    _proto.emitContainerClasses = function emitContainerClasses() {
        var swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        var classes = swiper.el.className.split(' ').filter(function(className) {
            return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', classes.join(' '));
    };
    _proto.getSlideClasses = function getSlideClasses(slideEl) {
        var swiper = this;
        return slideEl.className.split(' ').filter(function(className) {
            return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
    };
    _proto.emitSlidesClasses = function emitSlidesClasses() {
        var swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        var updates = [];
        swiper.slides.each(function(slideEl) {
            var classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl: slideEl,
                classNames: classNames
            });
            swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
    };
    _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
        var swiper = this;
        var params = swiper.params, slides = swiper.slides, slidesGrid = swiper.slidesGrid, swiperSize = swiper.size, activeIndex = swiper.activeIndex;
        var spv = 1;
        if (params.centeredSlides) {
            var slideSize = slides[activeIndex].swiperSlideSize;
            var breakLoop;
            for(var i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
            for(var _i = activeIndex - 1; _i >= 0; _i -= 1)if (slides[_i] && !breakLoop) {
                slideSize += slides[_i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
        } else {
            for(var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1)if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) spv += 1;
        }
        return spv;
    };
    _proto.update = function update() {
        var swiper = this;
        if (!swiper || swiper.destroyed) return;
        var snapGrid = swiper.snapGrid, params = swiper.params; // Breakpoints
        if (params.breakpoints) swiper.setBreakpoint();
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
            var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        var translated;
        if (swiper.params.freeMode) {
            setTranslate();
            if (swiper.params.autoHeight) swiper.updateAutoHeight();
        } else {
            if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (!translated) setTranslate();
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        swiper.emit('update');
    };
    _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) needUpdate = true;
        var swiper = this;
        var currentDirection = swiper.params.direction;
        if (!newDirection) // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') return swiper;
        swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each(function(slideEl) {
            if (newDirection === 'vertical') slideEl.style.width = '';
            else slideEl.style.height = '';
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
    };
    _proto.mount = function mount(el) {
        var swiper = this;
        if (swiper.mounted) return true; // Find el
        var $el = _domDefault.default(el || swiper.params.el);
        el = $el[0];
        if (!el) return false;
        el.swiper = swiper;
        var getWrapperSelector = function getWrapperSelector1() {
            return "." + (swiper.params.wrapperClass || '').trim().split(' ').join('.');
        };
        var getWrapper = function getWrapper1() {
            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                var res = _domDefault.default(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items
                res.children = function(options) {
                    return $el.children(options);
                };
                return res;
            }
            return $el.children(getWrapperSelector());
        }; // Find Wrapper
        var $wrapperEl = getWrapper();
        if ($wrapperEl.length === 0 && swiper.params.createElements) {
            var document = _ssrWindow.getDocument();
            var wrapper = document.createElement('div');
            $wrapperEl = _domDefault.default(wrapper);
            wrapper.className = swiper.params.wrapperClass;
            $el.append(wrapper);
            $el.children("." + swiper.params.slideClass).each(function(slideEl) {
                $wrapperEl.append(slideEl);
            });
        }
        _utils.extend(swiper, {
            $el: $el,
            el: el,
            $wrapperEl: $wrapperEl,
            wrapperEl: $wrapperEl[0],
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
            rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
            wrongRTL: $wrapperEl.css('display') === '-webkit-box'
        });
        return true;
    };
    _proto.init = function init(el) {
        var swiper = this;
        if (swiper.initialized) return swiper;
        var mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit'); // Set breakpoint
        if (swiper.params.breakpoints) swiper.setBreakpoint();
         // Add Classes
        swiper.addClasses(); // Create loop
        if (swiper.params.loop) swiper.loopCreate();
         // Update size
        swiper.updateSize(); // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) swiper.checkOverflow();
         // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
        if (swiper.params.preloadImages) swiper.preloadImages();
         // Slide To Initial Slide
        if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
        else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
         // Attach events
        swiper.attachEvents(); // Init Flag
        swiper.initialized = true; // Emit
        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
    };
    _proto.destroy = function destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) deleteInstance = true;
        if (cleanStyles === void 0) cleanStyles = true;
        var swiper = this;
        var params = swiper.params, $el = swiper.$el, $wrapperEl = swiper.$wrapperEl, slides = swiper.slides;
        if (typeof swiper.params === 'undefined' || swiper.destroyed) return null;
        swiper.emit('beforeDestroy'); // Init Flag
        swiper.initialized = false; // Detach events
        swiper.detachEvents(); // Destroy loop
        if (params.loop) swiper.loopDestroy();
         // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            $el.removeAttr('style');
            $wrapperEl.removeAttr('style');
            if (slides && slides.length) slides.removeClass([
                params.slideVisibleClass,
                params.slideActiveClass,
                params.slideNextClass,
                params.slidePrevClass
            ].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
        }
        swiper.emit('destroy'); // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach(function(eventName) {
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            swiper.$el[0].swiper = null;
            _utils.deleteProps(swiper);
        }
        swiper.destroyed = true;
        return null;
    };
    Swiper1.extendDefaults = function extendDefaults(newDefaults) {
        _utils.extend(extendedDefaults, newDefaults);
    };
    Swiper1.installModule = function installModule(module) {
        if (!Swiper1.prototype.modules) Swiper1.prototype.modules = {
        };
        var name = module.name || Object.keys(Swiper1.prototype.modules).length + "_" + _utils.now();
        Swiper1.prototype.modules[name] = module;
    };
    Swiper1.use = function use(module) {
        if (Array.isArray(module)) {
            module.forEach(function(m) {
                return Swiper1.installModule(m);
            });
            return Swiper1;
        }
        Swiper1.installModule(module);
        return Swiper1;
    };
    _createClass(Swiper1, null, [
        {
            key: "extendedDefaults",
            get: function get() {
                return extendedDefaults;
            }
        },
        {
            key: "defaults",
            get: function get() {
                return _defaultsDefault.default;
            }
        }
    ]);
    return Swiper1;
}();
Object.keys(prototypes).forEach(function(prototypeGroup) {
    Object.keys(prototypes[prototypeGroup]).forEach(function(protoMethod) {
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
});
Swiper.use([_resizeDefault.default, _observerDefault.default]);
exports.default = Swiper;

},{"ssr-window":"31FIQ","../../utils/dom":"4aX4f","../../utils/utils":"15wzB","../../utils/get-support":"hH5vh","../../utils/get-device":"cAkTv","../../utils/get-browser":"2mQde","../../modules/resize/resize":"hXlYB","../../modules/observer/observer":"1ffik","./modular":"asGXn","./events-emitter":"5Iund","./update/index":"g1YdP","./translate/index":"hNniP","./transition/index":"7S2Xg","./slide/index":"9fTto","./loop/index":"1UXwS","./grab-cursor/index":"bHaRq","./manipulation/index":"44oL1","./events/index":"cH9xZ","./breakpoints/index":"jmKF4","./classes/index":"gTe7p","./images/index":"5tb4A","./check-overflow/index":"ettwR","./defaults":"48sOD","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"31FIQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>extend
);
parcelHelpers.export(exports, "getDocument", ()=>getDocument
);
parcelHelpers.export(exports, "getWindow", ()=>getWindow
);
parcelHelpers.export(exports, "ssrDocument", ()=>ssrDocument
);
parcelHelpers.export(exports, "ssrWindow", ()=>ssrWindow
);
/**
 * SSR Window 3.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */ /* eslint-disable no-param-reassign */ function isObject(obj) {
    return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
    if (target === void 0) target = {
    };
    if (src === void 0) src = {
    };
    Object.keys(src).forEach(function(key) {
        if (typeof target[key] === 'undefined') target[key] = src[key];
        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
    });
}
var ssrDocument = {
    body: {
    },
    addEventListener: function() {
    },
    removeEventListener: function() {
    },
    activeElement: {
        blur: function() {
        },
        nodeName: ''
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
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    }
};
function getDocument() {
    var doc = typeof document !== 'undefined' ? document : {
    };
    extend(doc, ssrDocument);
    return doc;
}
var ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ''
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
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
    CustomEvent: function CustomEvent1() {
        return this;
    },
    addEventListener: function() {
    },
    removeEventListener: function() {
    },
    getComputedStyle: function() {
        return {
            getPropertyValue: function() {
                return '';
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
    requestAnimationFrame: function(callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function(id) {
        if (typeof setTimeout === 'undefined') return;
        clearTimeout(id);
    }
};
function getWindow() {
    var win = typeof window !== 'undefined' ? window : {
    };
    extend(win, ssrWindow);
    return win;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4aX4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom7 = require("dom7");
var Methods = {
    addClass: _dom7.addClass,
    removeClass: _dom7.removeClass,
    hasClass: _dom7.hasClass,
    toggleClass: _dom7.toggleClass,
    attr: _dom7.attr,
    removeAttr: _dom7.removeAttr,
    transform: _dom7.transform,
    transition: _dom7.transition,
    on: _dom7.on,
    off: _dom7.off,
    trigger: _dom7.trigger,
    transitionEnd: _dom7.transitionEnd,
    outerWidth: _dom7.outerWidth,
    outerHeight: _dom7.outerHeight,
    styles: _dom7.styles,
    offset: _dom7.offset,
    css: _dom7.css,
    each: _dom7.each,
    html: _dom7.html,
    text: _dom7.text,
    is: _dom7.is,
    index: _dom7.index,
    eq: _dom7.eq,
    append: _dom7.append,
    prepend: _dom7.prepend,
    next: _dom7.next,
    nextAll: _dom7.nextAll,
    prev: _dom7.prev,
    prevAll: _dom7.prevAll,
    parent: _dom7.parent,
    parents: _dom7.parents,
    closest: _dom7.closest,
    find: _dom7.find,
    children: _dom7.children,
    filter: _dom7.filter,
    remove: _dom7.remove
};
Object.keys(Methods).forEach(function(methodName) {
    Object.defineProperty(_dom7.$.fn, methodName, {
        value: Methods[methodName],
        writable: true
    });
});
exports.default = _dom7.$;

},{"dom7":"aENkW","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"aENkW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>$
);
parcelHelpers.export(exports, "add", ()=>add
);
parcelHelpers.export(exports, "addClass", ()=>addClass
);
parcelHelpers.export(exports, "animate", ()=>animate
);
parcelHelpers.export(exports, "animationEnd", ()=>animationEnd
);
parcelHelpers.export(exports, "append", ()=>append
);
parcelHelpers.export(exports, "appendTo", ()=>appendTo
);
parcelHelpers.export(exports, "attr", ()=>attr
);
parcelHelpers.export(exports, "blur", ()=>blur
);
parcelHelpers.export(exports, "change", ()=>change
);
parcelHelpers.export(exports, "children", ()=>children
);
parcelHelpers.export(exports, "click", ()=>click
);
parcelHelpers.export(exports, "closest", ()=>closest
);
parcelHelpers.export(exports, "css", ()=>css
);
parcelHelpers.export(exports, "data", ()=>data
);
parcelHelpers.export(exports, "dataset", ()=>dataset
);
parcelHelpers.export(exports, "detach", ()=>detach
);
parcelHelpers.export(exports, "each", ()=>each
);
parcelHelpers.export(exports, "empty", ()=>empty
);
parcelHelpers.export(exports, "eq", ()=>eq
);
parcelHelpers.export(exports, "filter", ()=>filter
);
parcelHelpers.export(exports, "find", ()=>find
);
parcelHelpers.export(exports, "focus", ()=>focus
);
parcelHelpers.export(exports, "focusin", ()=>focusin
);
parcelHelpers.export(exports, "focusout", ()=>focusout
);
parcelHelpers.export(exports, "hasClass", ()=>hasClass
);
parcelHelpers.export(exports, "height", ()=>height
);
parcelHelpers.export(exports, "hide", ()=>hide
);
parcelHelpers.export(exports, "html", ()=>html
);
parcelHelpers.export(exports, "index", ()=>index
);
parcelHelpers.export(exports, "insertAfter", ()=>insertAfter
);
parcelHelpers.export(exports, "insertBefore", ()=>insertBefore
);
parcelHelpers.export(exports, "is", ()=>is
);
parcelHelpers.export(exports, "keydown", ()=>keydown
);
parcelHelpers.export(exports, "keypress", ()=>keypress
);
parcelHelpers.export(exports, "keyup", ()=>keyup
);
parcelHelpers.export(exports, "mousedown", ()=>mousedown
);
parcelHelpers.export(exports, "mouseenter", ()=>mouseenter
);
parcelHelpers.export(exports, "mouseleave", ()=>mouseleave
);
parcelHelpers.export(exports, "mousemove", ()=>mousemove
);
parcelHelpers.export(exports, "mouseout", ()=>mouseout
);
parcelHelpers.export(exports, "mouseover", ()=>mouseover
);
parcelHelpers.export(exports, "mouseup", ()=>mouseup
);
parcelHelpers.export(exports, "next", ()=>next
);
parcelHelpers.export(exports, "nextAll", ()=>nextAll
);
parcelHelpers.export(exports, "off", ()=>off
);
parcelHelpers.export(exports, "offset", ()=>offset
);
parcelHelpers.export(exports, "on", ()=>on
);
parcelHelpers.export(exports, "once", ()=>once
);
parcelHelpers.export(exports, "outerHeight", ()=>outerHeight
);
parcelHelpers.export(exports, "outerWidth", ()=>outerWidth
);
parcelHelpers.export(exports, "parent", ()=>parent
);
parcelHelpers.export(exports, "parents", ()=>parents
);
parcelHelpers.export(exports, "prepend", ()=>prepend
);
parcelHelpers.export(exports, "prependTo", ()=>prependTo
);
parcelHelpers.export(exports, "prev", ()=>prev
);
parcelHelpers.export(exports, "prevAll", ()=>prevAll
);
parcelHelpers.export(exports, "prop", ()=>prop
);
parcelHelpers.export(exports, "remove", ()=>remove
);
parcelHelpers.export(exports, "removeAttr", ()=>removeAttr
);
parcelHelpers.export(exports, "removeClass", ()=>removeClass
);
parcelHelpers.export(exports, "removeData", ()=>removeData
);
parcelHelpers.export(exports, "resize", ()=>resize
);
parcelHelpers.export(exports, "scroll", ()=>scroll
);
parcelHelpers.export(exports, "scrollLeft", ()=>scrollLeft
);
parcelHelpers.export(exports, "scrollTo", ()=>scrollTo
);
parcelHelpers.export(exports, "scrollTop", ()=>scrollTop
);
parcelHelpers.export(exports, "show", ()=>show
);
parcelHelpers.export(exports, "siblings", ()=>siblings
);
parcelHelpers.export(exports, "stop", ()=>stop
);
parcelHelpers.export(exports, "styles", ()=>styles
);
parcelHelpers.export(exports, "submit", ()=>submit
);
parcelHelpers.export(exports, "text", ()=>text
);
parcelHelpers.export(exports, "toggleClass", ()=>toggleClass
);
parcelHelpers.export(exports, "touchend", ()=>touchend
);
parcelHelpers.export(exports, "touchmove", ()=>touchmove
);
parcelHelpers.export(exports, "touchstart", ()=>touchstart
);
parcelHelpers.export(exports, "transform", ()=>transform
);
parcelHelpers.export(exports, "transition", ()=>transition
);
parcelHelpers.export(exports, "transitionEnd", ()=>transitionEnd
);
parcelHelpers.export(exports, "trigger", ()=>trigger
);
parcelHelpers.export(exports, "val", ()=>val
);
parcelHelpers.export(exports, "value", ()=>value
);
parcelHelpers.export(exports, "width", ()=>width
);
/**
 * Dom7 3.0.0
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */ var _ssrWindow = require("ssr-window");
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) _construct = Reflect.construct;
    else _construct = function _construct1(Parent1, args1, Class1) {
        var a = [
            null
        ];
        a.push.apply(a, args1);
        var Constructor = Function.bind.apply(Parent1, a);
        var instance = new Constructor();
        if (Class1) _setPrototypeOf(instance, Class1.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper1(Class1) {
        if (Class1 === null || !_isNativeFunction(Class1)) return Class1;
        if (typeof Class1 !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class1)) return _cache.get(Class1);
            _cache.set(Class1, Wrapper);
        }
        function Wrapper() {
            return _construct(Class1, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class1.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class1);
    };
    return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
/* eslint-disable no-proto */ function makeReactive(obj) {
    var proto = obj.__proto__;
    Object.defineProperty(obj, '__proto__', {
        get: function get() {
            return proto;
        },
        set: function set(value) {
            proto.__proto__ = value;
        }
    });
}
var Dom71 = /*#__PURE__*/ function(_Array) {
    _inheritsLoose(Dom72, _Array);
    function Dom72(items) {
        var _this;
        _this = _Array.call.apply(_Array, [
            this
        ].concat(items)) || this;
        makeReactive(_assertThisInitialized(_this));
        return _this;
    }
    return Dom72;
}(/*#__PURE__*/ _wrapNativeSuper(Array));
function arrayFlat(arr) {
    if (arr === void 0) arr = [];
    var res = [];
    arr.forEach(function(el) {
        if (Array.isArray(el)) res.push.apply(res, arrayFlat(el));
        else res.push(el);
    });
    return res;
}
function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
    var uniqueArray = [];
    for(var i = 0; i < arr.length; i += 1)if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    return uniqueArray;
}
function toCamelCase(string) {
    return string.toLowerCase().replace(/-(.)/g, function(match, group) {
        return group.toUpperCase();
    });
}
function qsa(selector, context) {
    if (typeof selector !== 'string') return [
        selector
    ];
    var a = [];
    var res = context.querySelectorAll(selector);
    for(var i = 0; i < res.length; i += 1)a.push(res[i]);
    return a;
}
function $(selector, context) {
    var window = _ssrWindow.getWindow();
    var document = _ssrWindow.getDocument();
    var arr = [];
    if (!context && selector instanceof Dom71) return selector;
    if (!selector) return new Dom71(arr);
    if (typeof selector === 'string') {
        var html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
            var toCreate = 'div';
            if (html.indexOf('<li') === 0) toCreate = 'ul';
            if (html.indexOf('<tr') === 0) toCreate = 'tbody';
            if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
            if (html.indexOf('<tbody') === 0) toCreate = 'table';
            if (html.indexOf('<option') === 0) toCreate = 'select';
            var tempParent = document.createElement(toCreate);
            tempParent.innerHTML = html;
            for(var i = 0; i < tempParent.childNodes.length; i += 1)arr.push(tempParent.childNodes[i]);
        } else arr = qsa(selector.trim(), context || document);
         // arr = qsa(selector, document);
    } else if (selector.nodeType || selector === window || selector === document) arr.push(selector);
    else if (Array.isArray(selector)) {
        if (selector instanceof Dom71) return selector;
        arr = selector;
    }
    return new Dom71(arrayUnique(arr));
}
$.fn = Dom71.prototype;
function addClass() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++)classes[_key] = arguments[_key];
    var classNames = arrayFlat(classes.map(function(c) {
        return c.split(' ');
    }));
    this.forEach(function(el) {
        var _el$classList;
        (_el$classList = el.classList).add.apply(_el$classList, classNames);
    });
    return this;
}
function removeClass() {
    for(var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)classes[_key2] = arguments[_key2];
    var classNames = arrayFlat(classes.map(function(c) {
        return c.split(' ');
    }));
    this.forEach(function(el) {
        var _el$classList2;
        (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
    });
    return this;
}
function toggleClass() {
    for(var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)classes[_key3] = arguments[_key3];
    var classNames = arrayFlat(classes.map(function(c) {
        return c.split(' ');
    }));
    this.forEach(function(el) {
        classNames.forEach(function(className) {
            el.classList.toggle(className);
        });
    });
}
function hasClass() {
    for(var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)classes[_key4] = arguments[_key4];
    var classNames = arrayFlat(classes.map(function(c) {
        return c.split(' ');
    }));
    return arrayFilter(this, function(el) {
        return classNames.filter(function(className) {
            return el.classList.contains(className);
        }).length > 0;
    }).length > 0;
}
function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
    } // Set attrs
    for(var i = 0; i < this.length; i += 1){
        if (arguments.length === 2) // String
        this[i].setAttribute(attrs, value);
        else // Object
        for(var attrName in attrs){
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
        }
    }
    return this;
}
function removeAttr(attr1) {
    for(var i = 0; i < this.length; i += 1)this[i].removeAttribute(attr1);
    return this;
}
function prop(props, value) {
    if (arguments.length === 1 && typeof props === 'string') {
        // Get prop
        if (this[0]) return this[0][props];
    } else {
        // Set props
        for(var i = 0; i < this.length; i += 1){
            if (arguments.length === 2) // String
            this[i][props] = value;
            else // Object
            for(var propName in props)this[i][propName] = props[propName];
        }
        return this;
    }
    return this;
}
function data(key, value) {
    var el;
    if (typeof value === 'undefined') {
        el = this[0];
        if (!el) return undefined; // Get value
        if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) return el.dom7ElementDataStorage[key];
        var dataKey = el.getAttribute("data-" + key);
        if (dataKey) return dataKey;
        return undefined;
    } // Set value
    for(var i = 0; i < this.length; i += 1){
        el = this[i];
        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {
        };
        el.dom7ElementDataStorage[key] = value;
    }
    return this;
}
function removeData(key) {
    for(var i = 0; i < this.length; i += 1){
        var el = this[i];
        if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
            el.dom7ElementDataStorage[key] = null;
            delete el.dom7ElementDataStorage[key];
        }
    }
}
function dataset() {
    var el = this[0];
    if (!el) return undefined;
    var dataset1 = {
    }; // eslint-disable-line
    if (el.dataset) for(var dataKey in el.dataset)dataset1[dataKey] = el.dataset[dataKey];
    else for(var i = 0; i < el.attributes.length; i += 1){
        var _attr = el.attributes[i];
        if (_attr.name.indexOf('data-') >= 0) dataset1[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
    }
    for(var key in dataset1){
        if (dataset1[key] === 'false') dataset1[key] = false;
        else if (dataset1[key] === 'true') dataset1[key] = true;
        else if (parseFloat(dataset1[key]) === dataset1[key] * 1) dataset1[key] *= 1;
    }
    return dataset1;
}
function val(value) {
    if (typeof value === 'undefined') {
        // get value
        var el = this[0];
        if (!el) return undefined;
        if (el.multiple && el.nodeName.toLowerCase() === 'select') {
            var values = [];
            for(var i = 0; i < el.selectedOptions.length; i += 1)values.push(el.selectedOptions[i].value);
            return values;
        }
        return el.value;
    } // set value
    for(var _i = 0; _i < this.length; _i += 1){
        var _el = this[_i];
        if (Array.isArray(value) && _el.multiple && _el.nodeName.toLowerCase() === 'select') for(var j = 0; j < _el.options.length; j += 1)_el.options[j].selected = value.indexOf(_el.options[j].value) >= 0;
        else _el.value = value;
    }
    return this;
}
function value(value1) {
    return this.val(value1);
}
function transform(transform1) {
    for(var i = 0; i < this.length; i += 1)this[i].style.transform = transform1;
    return this;
}
function transition(duration) {
    for(var i = 0; i < this.length; i += 1)this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
    return this;
}
function on() {
    for(var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++)args[_key5] = arguments[_key5];
    var eventType = args[0], targetSelector = args[1], listener = args[2], capture = args[3];
    if (typeof args[1] === 'function') {
        eventType = args[0];
        listener = args[1];
        capture = args[2];
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    function handleLiveEvent(e) {
        var target = e.target;
        if (!target) return;
        var eventData = e.target.dom7EventData || [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        if ($(target).is(targetSelector)) listener.apply(target, eventData);
        else {
            var _parents = $(target).parents(); // eslint-disable-line
            for(var k = 0; k < _parents.length; k += 1)if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
        }
    }
    function handleEvent(e) {
        var eventData = e && e.target ? e.target.dom7EventData || [] : [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        listener.apply(this, eventData);
    }
    var events = eventType.split(' ');
    var j;
    for(var i = 0; i < this.length; i += 1){
        var el = this[i];
        if (!targetSelector) for(j = 0; j < events.length; j += 1){
            var event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {
            };
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
                listener: listener,
                proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
        }
        else // Live events
        for(j = 0; j < events.length; j += 1){
            var _event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {
            };
            if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];
            el.dom7LiveListeners[_event].push({
                listener: listener,
                proxyListener: handleLiveEvent
            });
            el.addEventListener(_event, handleLiveEvent, capture);
        }
    }
    return this;
}
function off() {
    for(var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)args[_key6] = arguments[_key6];
    var eventType = args[0], targetSelector = args[1], listener = args[2], capture = args[3];
    if (typeof args[1] === 'function') {
        eventType = args[0];
        listener = args[1];
        capture = args[2];
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    var events = eventType.split(' ');
    for(var i = 0; i < events.length; i += 1){
        var event = events[i];
        for(var j = 0; j < this.length; j += 1){
            var el = this[j];
            var handlers = void 0;
            if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event];
            else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
            if (handlers && handlers.length) for(var k = handlers.length - 1; k >= 0; k -= 1){
                var handler = handlers[k];
                if (listener && handler.listener === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (!listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                }
            }
        }
    }
    return this;
}
function once() {
    var dom = this;
    for(var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++)args[_key7] = arguments[_key7];
    var eventName = args[0], targetSelector = args[1], listener = args[2], capture = args[3];
    if (typeof args[1] === 'function') {
        eventName = args[0];
        listener = args[1];
        capture = args[2];
        targetSelector = undefined;
    }
    function onceHandler() {
        for(var _len8 = arguments.length, eventArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++)eventArgs[_key8] = arguments[_key8];
        listener.apply(this, eventArgs);
        dom.off(eventName, targetSelector, onceHandler, capture);
        if (onceHandler.dom7proxy) delete onceHandler.dom7proxy;
    }
    onceHandler.dom7proxy = listener;
    return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger() {
    var window = _ssrWindow.getWindow();
    for(var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++)args[_key9] = arguments[_key9];
    var events = args[0].split(' ');
    var eventData = args[1];
    for(var i = 0; i < events.length; i += 1){
        var event = events[i];
        for(var j = 0; j < this.length; j += 1){
            var el = this[j];
            if (window.CustomEvent) {
                var evt = new window.CustomEvent(event, {
                    detail: eventData,
                    bubbles: true,
                    cancelable: true
                });
                el.dom7EventData = args.filter(function(data1, dataIndex) {
                    return dataIndex > 0;
                });
                el.dispatchEvent(evt);
                el.dom7EventData = [];
                delete el.dom7EventData;
            }
        }
    }
    return this;
}
function transitionEnd(callback) {
    var dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionend', fireCallBack);
    }
    if (callback) dom.on('transitionend', fireCallBack);
    return this;
}
function animationEnd(callback) {
    var dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('animationend', fireCallBack);
    }
    if (callback) dom.on('animationend', fireCallBack);
    return this;
}
function width() {
    var window = _ssrWindow.getWindow();
    if (this[0] === window) return window.innerWidth;
    if (this.length > 0) return parseFloat(this.css('width'));
    return null;
}
function outerWidth(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            var _styles = this.styles();
            return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
        }
        return this[0].offsetWidth;
    }
    return null;
}
function height() {
    var window = _ssrWindow.getWindow();
    if (this[0] === window) return window.innerHeight;
    if (this.length > 0) return parseFloat(this.css('height'));
    return null;
}
function outerHeight(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            var _styles2 = this.styles();
            return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
        }
        return this[0].offsetHeight;
    }
    return null;
}
function offset() {
    if (this.length > 0) {
        var window = _ssrWindow.getWindow();
        var document = _ssrWindow.getDocument();
        var el = this[0];
        var box = el.getBoundingClientRect();
        var body = document.body;
        var clientTop = el.clientTop || body.clientTop || 0;
        var clientLeft = el.clientLeft || body.clientLeft || 0;
        var scrollTop = el === window ? window.scrollY : el.scrollTop;
        var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
        };
    }
    return null;
}
function hide() {
    for(var i = 0; i < this.length; i += 1)this[i].style.display = 'none';
    return this;
}
function show() {
    var window = _ssrWindow.getWindow();
    for(var i = 0; i < this.length; i += 1){
        var el = this[i];
        if (el.style.display === 'none') el.style.display = '';
        if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') // Still not visible
        el.style.display = 'block';
    }
    return this;
}
function styles() {
    var window = _ssrWindow.getWindow();
    if (this[0]) return window.getComputedStyle(this[0], null);
    return {
    };
}
function css(props, value1) {
    var window = _ssrWindow.getWindow();
    var i;
    if (arguments.length === 1) {
        if (typeof props === 'string') {
            // .css('width')
            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
            // .css({ width: '100px' })
            for(i = 0; i < this.length; i += 1)for(var _prop in props)this[i].style[_prop] = props[_prop];
            return this;
        }
    }
    if (arguments.length === 2 && typeof props === 'string') {
        // .css('width', '100px')
        for(i = 0; i < this.length; i += 1)this[i].style[props] = value1;
        return this;
    }
    return this;
}
function each(callback) {
    if (!callback) return this;
    this.forEach(function(el, index) {
        callback.apply(el, [
            el,
            index
        ]);
    });
    return this;
}
function filter(callback) {
    var result = arrayFilter(this, callback);
    return $(result);
}
function html(html1) {
    if (typeof html1 === 'undefined') return this[0] ? this[0].innerHTML : null;
    for(var i = 0; i < this.length; i += 1)this[i].innerHTML = html1;
    return this;
}
function text(text1) {
    if (typeof text1 === 'undefined') return this[0] ? this[0].textContent.trim() : null;
    for(var i = 0; i < this.length; i += 1)this[i].textContent = text1;
    return this;
}
function is(selector) {
    var window = _ssrWindow.getWindow();
    var document = _ssrWindow.getDocument();
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined') return false;
    if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    if (selector === document) return el === document;
    if (selector === window) return el === window;
    if (selector.nodeType || selector instanceof Dom71) {
        compareWith = selector.nodeType ? [
            selector
        ] : selector;
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    return false;
}
function index() {
    var child = this[0];
    var i;
    if (child) {
        i = 0; // eslint-disable-next-line
        while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
        return i;
    }
    return undefined;
}
function eq(index1) {
    if (typeof index1 === 'undefined') return this;
    var length = this.length;
    if (index1 > length - 1) return $([]);
    if (index1 < 0) {
        var returnIndex = length + index1;
        if (returnIndex < 0) return $([]);
        return $([
            this[returnIndex]
        ]);
    }
    return $([
        this[index1]
    ]);
}
function append() {
    var newChild;
    var document = _ssrWindow.getDocument();
    for(var k = 0; k < arguments.length; k += 1){
        newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];
        for(var i = 0; i < this.length; i += 1){
            if (typeof newChild === 'string') {
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = newChild;
                while(tempDiv.firstChild)this[i].appendChild(tempDiv.firstChild);
            } else if (newChild instanceof Dom71) for(var j = 0; j < newChild.length; j += 1)this[i].appendChild(newChild[j]);
            else this[i].appendChild(newChild);
        }
    }
    return this;
}
function appendTo(parent) {
    $(parent).append(this);
    return this;
}
function prepend(newChild) {
    var document = _ssrWindow.getDocument();
    var i;
    var j;
    for(i = 0; i < this.length; i += 1){
        if (typeof newChild === 'string') {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;
            for(j = tempDiv.childNodes.length - 1; j >= 0; j -= 1)this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        } else if (newChild instanceof Dom71) for(j = 0; j < newChild.length; j += 1)this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        else this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
    return this;
}
function prependTo(parent) {
    $(parent).prepend(this);
    return this;
}
function insertBefore(selector) {
    var before = $(selector);
    for(var i = 0; i < this.length; i += 1){
        if (before.length === 1) before[0].parentNode.insertBefore(this[i], before[0]);
        else if (before.length > 1) for(var j = 0; j < before.length; j += 1)before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
    }
}
function insertAfter(selector) {
    var after = $(selector);
    for(var i = 0; i < this.length; i += 1){
        if (after.length === 1) after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
        else if (after.length > 1) for(var j = 0; j < after.length; j += 1)after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
    }
}
function next(selector) {
    if (this.length > 0) {
        if (selector) {
            if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return $([
                this[0].nextElementSibling
            ]);
            return $([]);
        }
        if (this[0].nextElementSibling) return $([
            this[0].nextElementSibling
        ]);
        return $([]);
    }
    return $([]);
}
function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) return $([]);
    while(el.nextElementSibling){
        var _next = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if ($(_next).is(selector)) nextEls.push(_next);
        } else nextEls.push(_next);
        el = _next;
    }
    return $(nextEls);
}
function prev(selector) {
    if (this.length > 0) {
        var el = this[0];
        if (selector) {
            if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) return $([
                el.previousElementSibling
            ]);
            return $([]);
        }
        if (el.previousElementSibling) return $([
            el.previousElementSibling
        ]);
        return $([]);
    }
    return $([]);
}
function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) return $([]);
    while(el.previousElementSibling){
        var _prev = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if ($(_prev).is(selector)) prevEls.push(_prev);
        } else prevEls.push(_prev);
        el = _prev;
    }
    return $(prevEls);
}
function siblings(selector) {
    return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
    var parents = []; // eslint-disable-line
    for(var i = 0; i < this.length; i += 1)if (this[i].parentNode !== null) {
        if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
        } else parents.push(this[i].parentNode);
    }
    return $(parents);
}
function parents(selector) {
    var parents1 = []; // eslint-disable-line
    for(var i = 0; i < this.length; i += 1){
        var _parent = this[i].parentNode; // eslint-disable-line
        while(_parent){
            if (selector) {
                if ($(_parent).is(selector)) parents1.push(_parent);
            } else parents1.push(_parent);
            _parent = _parent.parentNode;
        }
    }
    return $(parents1);
}
function closest(selector) {
    var closest1 = this; // eslint-disable-line
    if (typeof selector === 'undefined') return $([]);
    if (!closest1.is(selector)) closest1 = closest1.parents(selector).eq(0);
    return closest1;
}
function find(selector) {
    var foundElements = [];
    for(var i = 0; i < this.length; i += 1){
        var found = this[i].querySelectorAll(selector);
        for(var j = 0; j < found.length; j += 1)foundElements.push(found[j]);
    }
    return $(foundElements);
}
function children(selector) {
    var children1 = []; // eslint-disable-line
    for(var i = 0; i < this.length; i += 1){
        var childNodes = this[i].children;
        for(var j = 0; j < childNodes.length; j += 1)if (!selector || $(childNodes[j]).is(selector)) children1.push(childNodes[j]);
    }
    return $(children1);
}
function remove() {
    for(var i = 0; i < this.length; i += 1)if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    return this;
}
function detach() {
    return this.remove();
}
function add() {
    var dom = this;
    var i;
    var j;
    for(var _len10 = arguments.length, els = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++)els[_key10] = arguments[_key10];
    for(i = 0; i < els.length; i += 1){
        var toAdd = $(els[i]);
        for(j = 0; j < toAdd.length; j += 1)dom.push(toAdd[j]);
    }
    return dom;
}
function empty() {
    for(var i = 0; i < this.length; i += 1){
        var el = this[i];
        if (el.nodeType === 1) {
            for(var j = 0; j < el.childNodes.length; j += 1)if (el.childNodes[j].parentNode) el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
            el.textContent = '';
        }
    }
    return this;
}
function scrollTo() {
    var window = _ssrWindow.getWindow();
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    var left = args[0], top = args[1], duration = args[2], easing = args[3], callback = args[4];
    if (args.length === 4 && typeof easing === 'function') {
        callback = easing;
        left = args[0];
        top = args[1];
        duration = args[2];
        callback = args[3];
        easing = args[4];
    }
    if (typeof easing === 'undefined') easing = 'swing';
    return this.each(function animate() {
        var el = this;
        var currentTop;
        var currentLeft;
        var maxTop;
        var maxLeft;
        var newTop;
        var newLeft;
        var scrollTop; // eslint-disable-line
        var scrollLeft; // eslint-disable-line
        var animateTop = top > 0 || top === 0;
        var animateLeft = left > 0 || left === 0;
        if (typeof easing === 'undefined') easing = 'swing';
        if (animateTop) {
            currentTop = el.scrollTop;
            if (!duration) el.scrollTop = top;
        }
        if (animateLeft) {
            currentLeft = el.scrollLeft;
            if (!duration) el.scrollLeft = left;
        }
        if (!duration) return;
        if (animateTop) {
            maxTop = el.scrollHeight - el.offsetHeight;
            newTop = Math.max(Math.min(top, maxTop), 0);
        }
        if (animateLeft) {
            maxLeft = el.scrollWidth - el.offsetWidth;
            newLeft = Math.max(Math.min(left, maxLeft), 0);
        }
        var startTime = null;
        if (animateTop && newTop === currentTop) animateTop = false;
        if (animateLeft && newLeft === currentLeft) animateLeft = false;
        function render(time) {
            if (time === void 0) time = new Date().getTime();
            if (startTime === null) startTime = time;
            var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
            var done;
            if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
            if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);
            if (animateTop && newTop > currentTop && scrollTop >= newTop) {
                el.scrollTop = newTop;
                done = true;
            }
            if (animateTop && newTop < currentTop && scrollTop <= newTop) {
                el.scrollTop = newTop;
                done = true;
            }
            if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
                el.scrollLeft = newLeft;
                done = true;
            }
            if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
                el.scrollLeft = newLeft;
                done = true;
            }
            if (done) {
                if (callback) callback();
                return;
            }
            if (animateTop) el.scrollTop = scrollTop;
            if (animateLeft) el.scrollLeft = scrollLeft;
            window.requestAnimationFrame(render);
        }
        window.requestAnimationFrame(render);
    });
} // scrollTop(top, duration, easing, callback) {
function scrollTop() {
    for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
    var top = args[0], duration = args[1], easing = args[2], callback = args[3];
    if (args.length === 3 && typeof easing === 'function') {
        top = args[0];
        duration = args[1];
        callback = args[2];
        easing = args[3];
    }
    var dom = this;
    if (typeof top === 'undefined') {
        if (dom.length > 0) return dom[0].scrollTop;
        return null;
    }
    return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft() {
    for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)args[_key3] = arguments[_key3];
    var left = args[0], duration = args[1], easing = args[2], callback = args[3];
    if (args.length === 3 && typeof easing === 'function') {
        left = args[0];
        duration = args[1];
        callback = args[2];
        easing = args[3];
    }
    var dom = this;
    if (typeof left === 'undefined') {
        if (dom.length > 0) return dom[0].scrollLeft;
        return null;
    }
    return dom.scrollTo(left, undefined, duration, easing, callback);
}
function animate(initialProps, initialParams) {
    var window = _ssrWindow.getWindow();
    var els = this;
    var a = {
        props: Object.assign({
        }, initialProps),
        params: Object.assign({
            duration: 300,
            easing: 'swing' // or 'linear'
        }, initialParams),
        elements: els,
        animating: false,
        que: [],
        easingProgress: function easingProgress(easing, progress) {
            if (easing === 'swing') return 0.5 - Math.cos(progress * Math.PI) / 2;
            if (typeof easing === 'function') return easing(progress);
            return progress;
        },
        stop: function stop() {
            if (a.frameId) window.cancelAnimationFrame(a.frameId);
            a.animating = false;
            a.elements.each(function(el) {
                var element = el;
                delete element.dom7AnimateInstance;
            });
            a.que = [];
        },
        done: function done(complete) {
            a.animating = false;
            a.elements.each(function(el) {
                var element = el;
                delete element.dom7AnimateInstance;
            });
            if (complete) complete(els);
            if (a.que.length > 0) {
                var que = a.que.shift();
                a.animate(que[0], que[1]);
            }
        },
        animate: function animate1(props, params) {
            if (a.animating) {
                a.que.push([
                    props,
                    params
                ]);
                return a;
            }
            var elements = []; // Define & Cache Initials & Units
            a.elements.each(function(el, index1) {
                var initialFullValue;
                var initialValue;
                var unit;
                var finalValue;
                var finalFullValue;
                if (!el.dom7AnimateInstance) a.elements[index1].dom7AnimateInstance = a;
                elements[index1] = {
                    container: el
                };
                Object.keys(props).forEach(function(prop1) {
                    initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop1).replace(',', '.');
                    initialValue = parseFloat(initialFullValue);
                    unit = initialFullValue.replace(initialValue, '');
                    finalValue = parseFloat(props[prop1]);
                    finalFullValue = props[prop1] + unit;
                    elements[index1][prop1] = {
                        initialFullValue: initialFullValue,
                        initialValue: initialValue,
                        unit: unit,
                        finalValue: finalValue,
                        finalFullValue: finalFullValue,
                        currentValue: initialValue
                    };
                });
            });
            var startTime = null;
            var time;
            var elementsDone = 0;
            var propsDone = 0;
            var done1;
            var began = false;
            a.animating = true;
            function render() {
                time = new Date().getTime();
                var progress;
                var easeProgress; // let el;
                if (!began) {
                    began = true;
                    if (params.begin) params.begin(els);
                }
                if (startTime === null) startTime = time;
                if (params.progress) // eslint-disable-next-line
                params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
                elements.forEach(function(element) {
                    var el = element;
                    if (done1 || el.done) return;
                    Object.keys(props).forEach(function(prop1) {
                        if (done1 || el.done) return;
                        progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
                        easeProgress = a.easingProgress(params.easing, progress);
                        var _el$prop = el[prop1], initialValue = _el$prop.initialValue, finalValue = _el$prop.finalValue, unit = _el$prop.unit;
                        el[prop1].currentValue = initialValue + easeProgress * (finalValue - initialValue);
                        var currentValue = el[prop1].currentValue;
                        if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
                            el.container.style[prop1] = finalValue + unit;
                            propsDone += 1;
                            if (propsDone === Object.keys(props).length) {
                                el.done = true;
                                elementsDone += 1;
                            }
                            if (elementsDone === elements.length) done1 = true;
                        }
                        if (done1) {
                            a.done(params.complete);
                            return;
                        }
                        el.container.style[prop1] = currentValue + unit;
                    });
                });
                if (done1) return; // Then call
                a.frameId = window.requestAnimationFrame(render);
            }
            a.frameId = window.requestAnimationFrame(render);
            return a;
        }
    };
    if (a.elements.length === 0) return els;
    var animateInstance;
    for(var i = 0; i < a.elements.length; i += 1)if (a.elements[i].dom7AnimateInstance) animateInstance = a.elements[i].dom7AnimateInstance;
    else a.elements[i].dom7AnimateInstance = a;
    if (!animateInstance) animateInstance = a;
    if (initialProps === 'stop') animateInstance.stop();
    else animateInstance.animate(a.props, a.params);
    return els;
}
function stop() {
    var els = this;
    for(var i = 0; i < els.length; i += 1)if (els[i].dom7AnimateInstance) els[i].dom7AnimateInstance.stop();
}
var noTrigger = 'resize scroll'.split(' ');
function shortcut(name) {
    function eventHandler() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        if (typeof args[0] === 'undefined') {
            for(var i = 0; i < this.length; i += 1)if (noTrigger.indexOf(name) < 0) {
                if (name in this[i]) this[i][name]();
                else $(this[i]).trigger(name);
            }
            return this;
        }
        return this.on.apply(this, [
            name
        ].concat(args));
    }
    return eventHandler;
}
var click = shortcut('click');
var blur = shortcut('blur');
var focus = shortcut('focus');
var focusin = shortcut('focusin');
var focusout = shortcut('focusout');
var keyup = shortcut('keyup');
var keydown = shortcut('keydown');
var keypress = shortcut('keypress');
var submit = shortcut('submit');
var change = shortcut('change');
var mousedown = shortcut('mousedown');
var mousemove = shortcut('mousemove');
var mouseup = shortcut('mouseup');
var mouseenter = shortcut('mouseenter');
var mouseleave = shortcut('mouseleave');
var mouseout = shortcut('mouseout');
var mouseover = shortcut('mouseover');
var touchstart = shortcut('touchstart');
var touchend = shortcut('touchend');
var touchmove = shortcut('touchmove');
var resize = shortcut('resize');
var scroll = shortcut('scroll');
exports.default = $;

},{"ssr-window":"31FIQ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"15wzB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deleteProps", ()=>deleteProps
);
parcelHelpers.export(exports, "nextTick", ()=>nextTick
);
parcelHelpers.export(exports, "now", ()=>now
);
parcelHelpers.export(exports, "getTranslate", ()=>getTranslate
);
parcelHelpers.export(exports, "isObject", ()=>isObject
);
parcelHelpers.export(exports, "extend", ()=>extend
);
parcelHelpers.export(exports, "bindModuleMethods", ()=>bindModuleMethods
);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle
);
parcelHelpers.export(exports, "classesToSelector", ()=>classesToSelector
);
parcelHelpers.export(exports, "createElementIfNotDefined", ()=>createElementIfNotDefined
);
var _ssrWindow = require("ssr-window");
function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function(key) {
        try {
            object[key] = null;
        } catch (e) {
        }
        try {
            delete object[key];
        } catch (e) {
        }
    });
}
function nextTick(callback, delay) {
    if (delay === void 0) delay = 0;
    return setTimeout(callback, delay);
}
function now() {
    return Date.now();
}
function getComputedStyle(el) {
    var window = _ssrWindow.getWindow();
    var style;
    if (window.getComputedStyle) style = window.getComputedStyle(el, null);
    if (!style && el.currentStyle) style = el.currentStyle;
    if (!style) style = el.style;
    return style;
}
function getTranslate(el, axis) {
    if (axis === void 0) axis = 'x';
    var window = _ssrWindow.getWindow();
    var matrix;
    var curTransform;
    var transformMatrix;
    var curStyle = getComputedStyle(el, null);
    if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) curTransform = curTransform.split(', ').map(function(a) {
            return a.replace(',', '.');
        }).join(', ');
         // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
    }
    if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
}
function isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') return node instanceof HTMLElement;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
    var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    var noExtend = [
        '__proto__',
        'constructor',
        'prototype'
    ];
    for(var i = 1; i < arguments.length; i += 1){
        var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
            var keysArray = Object.keys(Object(nextSource)).filter(function(key) {
                return noExtend.indexOf(key) < 0;
            });
            for(var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                var nextKey = keysArray[nextIndex];
                var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        to[nextKey] = {
                        };
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
function bindModuleMethods(instance, obj) {
    Object.keys(obj).forEach(function(key) {
        if (isObject(obj[key])) Object.keys(obj[key]).forEach(function(subKey) {
            if (typeof obj[key][subKey] === 'function') obj[key][subKey] = obj[key][subKey].bind(instance);
        });
        instance[key] = obj[key];
    });
}
function classesToSelector(classes) {
    if (classes === void 0) classes = '';
    return "." + classes.trim().replace(/([\.:\/])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, '.');
}
function createElementIfNotDefined($container, params, createElements, checkProps) {
    var document = _ssrWindow.getDocument();
    if (createElements) Object.keys(checkProps).forEach(function(key) {
        if (!params[key] && params.auto === true) {
            var element = document.createElement('div');
            element.className = checkProps[key];
            $container.append(element);
            params[key] = element;
        }
    });
    return params;
}

},{"ssr-window":"31FIQ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hH5vh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSupport", ()=>getSupport
);
var _ssrWindow = require("ssr-window");
var support;
function calcSupport() {
    var window = _ssrWindow.getWindow();
    var document = _ssrWindow.getDocument();
    return {
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
        observer: (function checkObserver() {
            return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
        })(),
        passiveListener: (function checkPassiveListener() {
            var supportsPassive = false;
            try {
                var opts = Object.defineProperty({
                }, 'passive', {
                    // eslint-disable-next-line
                    get: function get() {
                        supportsPassive = true;
                    }
                });
                window.addEventListener('testPassiveListener', null, opts);
            } catch (e) {
            }
            return supportsPassive;
        })(),
        gestures: (function checkGestures() {
            return 'ongesturestart' in window;
        })()
    };
}
function getSupport() {
    if (!support) support = calcSupport();
    return support;
}

},{"ssr-window":"31FIQ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cAkTv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDevice", ()=>getDevice
);
var _ssrWindow = require("ssr-window");
var _getSupport = require("./get-support");
var device;
function calcDevice(_temp) {
    var _ref = _temp === void 0 ? {
    } : _temp, userAgent = _ref.userAgent;
    var support = _getSupport.getSupport();
    var window = _ssrWindow.getWindow();
    var platform = window.navigator.platform;
    var ua = userAgent || window.navigator.userAgent;
    var device1 = {
        ios: false,
        android: false
    };
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    var windows = platform === 'Win32';
    var macos = platform === 'MacIntel'; // iPadOs 13 fix
    var iPadScreens = [
        '1024x1366',
        '1366x1024',
        '834x1194',
        '1194x834',
        '834x1112',
        '1112x834',
        '768x1024',
        '1024x768',
        '820x1180',
        '1180x820',
        '810x1080',
        '1080x810'
    ];
    if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [
            0,
            1,
            '13_0_0'
        ];
        macos = false;
    } // Android
    if (android && !windows) {
        device1.os = 'android';
        device1.android = true;
    }
    if (ipad || iphone || ipod) {
        device1.os = 'ios';
        device1.ios = true;
    } // Export object
    return device1;
}
function getDevice(overrides) {
    if (overrides === void 0) overrides = {
    };
    if (!device) device = calcDevice(overrides);
    return device;
}

},{"ssr-window":"31FIQ","./get-support":"hH5vh","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"2mQde":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBrowser", ()=>getBrowser
);
var _ssrWindow = require("ssr-window");
var browser;
function calcBrowser() {
    var window = _ssrWindow.getWindow();
    function isSafari() {
        var ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }
    return {
        isEdge: !!window.navigator.userAgent.match(/Edge/g),
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
    };
}
function getBrowser() {
    if (!browser) browser = calcBrowser();
    return browser;
}

},{"ssr-window":"31FIQ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hXlYB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _utils = require("../../utils/utils");
var supportsResizeObserver = function supportsResizeObserver1() {
    var window = _ssrWindow.getWindow();
    return typeof window.ResizeObserver !== 'undefined';
};
exports.default = {
    name: 'resize',
    create: function create() {
        var swiper = this;
        _utils.extend(swiper, {
            resize: {
                observer: null,
                createObserver: function createObserver() {
                    if (!swiper || swiper.destroyed || !swiper.initialized) return;
                    swiper.resize.observer = new ResizeObserver(function(entries) {
                        var width = swiper.width, height = swiper.height;
                        var newWidth = width;
                        var newHeight = height;
                        entries.forEach(function(_ref) {
                            var contentBoxSize = _ref.contentBoxSize, contentRect = _ref.contentRect, target = _ref.target;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        });
                        if (newWidth !== width || newHeight !== height) swiper.resize.resizeHandler();
                    });
                    swiper.resize.observer.observe(swiper.el);
                },
                removeObserver: function removeObserver() {
                    if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
                        swiper.resize.observer.unobserve(swiper.el);
                        swiper.resize.observer = null;
                    }
                },
                resizeHandler: function resizeHandler() {
                    if (!swiper || swiper.destroyed || !swiper.initialized) return;
                    swiper.emit('beforeResize');
                    swiper.emit('resize');
                },
                orientationChangeHandler: function orientationChangeHandler() {
                    if (!swiper || swiper.destroyed || !swiper.initialized) return;
                    swiper.emit('orientationchange');
                }
            }
        });
    },
    on: {
        init: function init(swiper) {
            var window = _ssrWindow.getWindow();
            if (swiper.params.resizeObserver && supportsResizeObserver()) {
                swiper.resize.createObserver();
                return;
            } // Emit resize
            window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange
            window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        },
        destroy: function destroy(swiper) {
            var window = _ssrWindow.getWindow();
            swiper.resize.removeObserver();
            window.removeEventListener('resize', swiper.resize.resizeHandler);
            window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        }
    }
};

},{"ssr-window":"31FIQ","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1ffik":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _utils = require("../../utils/utils");
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
var Observer = {
    attach: function attach(target, options) {
        if (options === void 0) options = {
        };
        var window = _ssrWindow.getWindow();
        var swiper = this;
        var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        var observer = new ObserverFunc(function(mutations) {
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (mutations.length === 1) {
                swiper.emit('observerUpdate', mutations[0]);
                return;
            }
            var observerUpdate = function observerUpdate1() {
                swiper.emit('observerUpdate', mutations[0]);
            };
            if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate);
            else window.setTimeout(observerUpdate, 0);
        });
        observer.observe(target, {
            attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
            childList: typeof options.childList === 'undefined' ? true : options.childList,
            characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        swiper.observer.observers.push(observer);
    },
    init: function init() {
        var swiper = this;
        if (!swiper.support.observer || !swiper.params.observer) return;
        if (swiper.params.observeParents) {
            var containerParents = swiper.$el.parents();
            for(var i = 0; i < containerParents.length; i += 1)swiper.observer.attach(containerParents[i]);
        } // Observe container
        swiper.observer.attach(swiper.$el[0], {
            childList: swiper.params.observeSlideChildren
        }); // Observe wrapper
        swiper.observer.attach(swiper.$wrapperEl[0], {
            attributes: false
        });
    },
    destroy: function destroy() {
        var swiper = this;
        swiper.observer.observers.forEach(function(observer) {
            observer.disconnect();
        });
        swiper.observer.observers = [];
    }
};
exports.default = {
    name: 'observer',
    params: {
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            observer: _extends({
            }, Observer, {
                observers: []
            })
        });
    },
    on: {
        init: function init(swiper) {
            swiper.observer.init();
        },
        destroy: function destroy(swiper) {
            swiper.observer.destroy();
        }
    }
};

},{"ssr-window":"31FIQ","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"asGXn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../utils/utils");
exports.default = {
    useParams: function useParams(instanceParams) {
        var instance = this;
        if (!instance.modules) return;
        Object.keys(instance.modules).forEach(function(moduleName) {
            var module = instance.modules[moduleName]; // Extend params
            if (module.params) _utils.extend(instanceParams, module.params);
        });
    },
    useModules: function useModules(modulesParams) {
        if (modulesParams === void 0) modulesParams = {
        };
        var instance = this;
        if (!instance.modules) return;
        Object.keys(instance.modules).forEach(function(moduleName) {
            var module = instance.modules[moduleName];
            var moduleParams = modulesParams[moduleName] || {
            }; // Add event listeners
            if (module.on && instance.on) Object.keys(module.on).forEach(function(moduleEventName) {
                instance.on(moduleEventName, module.on[moduleEventName]);
            });
             // Module create callback
            if (module.create) module.create.bind(instance)(moduleParams);
        });
    }
};

},{"../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5Iund":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    on: function on(events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') return self;
        var method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(function(event) {
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once: function once(events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') return self;
        function onceHandler() {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
    },
    onAny: function onAny(handler, priority) {
        var self = this;
        if (typeof handler !== 'function') return self;
        var method = priority ? 'unshift' : 'push';
        if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
        return self;
    },
    offAny: function offAny(handler) {
        var self = this;
        if (!self.eventsAnyListeners) return self;
        var index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) self.eventsAnyListeners.splice(index, 1);
        return self;
    },
    off: function off(events, handler) {
        var self = this;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach(function(event) {
            if (typeof handler === 'undefined') self.eventsListeners[event] = [];
            else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(function(eventHandler, index) {
                if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
            });
        });
        return self;
    },
    emit: function emit() {
        var self = this;
        if (!self.eventsListeners) return self;
        var events;
        var data;
        var context;
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        var eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(function(event) {
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach(function(eventHandler) {
                eventHandler.apply(context, [
                    event
                ].concat(data));
            });
            if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach(function(eventHandler) {
                eventHandler.apply(context, data);
            });
        });
        return self;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"g1YdP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _updateSize = require("./updateSize");
var _updateSizeDefault = parcelHelpers.interopDefault(_updateSize);
var _updateSlides = require("./updateSlides");
var _updateSlidesDefault = parcelHelpers.interopDefault(_updateSlides);
var _updateAutoHeight = require("./updateAutoHeight");
var _updateAutoHeightDefault = parcelHelpers.interopDefault(_updateAutoHeight);
var _updateSlidesOffset = require("./updateSlidesOffset");
var _updateSlidesOffsetDefault = parcelHelpers.interopDefault(_updateSlidesOffset);
var _updateSlidesProgress = require("./updateSlidesProgress");
var _updateSlidesProgressDefault = parcelHelpers.interopDefault(_updateSlidesProgress);
var _updateProgress = require("./updateProgress");
var _updateProgressDefault = parcelHelpers.interopDefault(_updateProgress);
var _updateSlidesClasses = require("./updateSlidesClasses");
var _updateSlidesClassesDefault = parcelHelpers.interopDefault(_updateSlidesClasses);
var _updateActiveIndex = require("./updateActiveIndex");
var _updateActiveIndexDefault = parcelHelpers.interopDefault(_updateActiveIndex);
var _updateClickedSlide = require("./updateClickedSlide");
var _updateClickedSlideDefault = parcelHelpers.interopDefault(_updateClickedSlide);
exports.default = {
    updateSize: _updateSizeDefault.default,
    updateSlides: _updateSlidesDefault.default,
    updateAutoHeight: _updateAutoHeightDefault.default,
    updateSlidesOffset: _updateSlidesOffsetDefault.default,
    updateSlidesProgress: _updateSlidesProgressDefault.default,
    updateProgress: _updateProgressDefault.default,
    updateSlidesClasses: _updateSlidesClassesDefault.default,
    updateActiveIndex: _updateActiveIndexDefault.default,
    updateClickedSlide: _updateClickedSlideDefault.default
};

},{"./updateSize":"dyoBr","./updateSlides":"7ToWQ","./updateAutoHeight":"drNRQ","./updateSlidesOffset":"7lSyt","./updateSlidesProgress":"bNhpX","./updateProgress":"hV6Oi","./updateSlidesClasses":"8APqI","./updateActiveIndex":"5dXle","./updateClickedSlide":"gts2W","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dyoBr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../../utils/utils");
function updateSize() {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) width = swiper.params.width;
    else width = $el[0].clientWidth;
    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) height = swiper.params.height;
    else height = $el[0].clientHeight;
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
     // Subtract paddings
    width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
    height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    _utils.extend(swiper, {
        width: width,
        height: height,
        size: swiper.isHorizontal() ? width : height
    });
}
exports.default = updateSize;

},{"../../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7ToWQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../../utils/utils");
function updateSlides() {
    var swiper = this;
    function getDirectionLabel(property) {
        if (swiper.isHorizontal()) return property;
         // prettier-ignore
        return ({
            'width': 'height',
            'margin-top': 'margin-left',
            'margin-bottom ': 'margin-right',
            'margin-left': 'margin-top',
            'margin-right': 'margin-bottom',
            'padding-left': 'padding-top',
            'padding-right': 'padding-bottom',
            'marginRight': 'marginBottom'
        })[property];
    }
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl, swiperSize = swiper.size, rtl = swiper.rtlTranslate, wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children("." + swiper.params.slideClass);
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];
    var offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') offsetBefore = params.slidesOffsetBefore.call(swiper);
    var offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') offsetAfter = params.slidesOffsetAfter.call(swiper);
    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.slidesGrid.length;
    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;
    if (typeof swiperSize === 'undefined') return;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    swiper.virtualSize = -spaceBetween; // reset margins
    if (rtl) slides.css({
        marginLeft: '',
        marginBottom: '',
        marginTop: ''
    });
    else slides.css({
        marginRight: '',
        marginBottom: '',
        marginTop: ''
    });
    var slidesNumberEvenToRows;
    if (params.slidesPerColumn > 1) {
        if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) slidesNumberEvenToRows = slidesLength;
        else slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
        if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    } // Calc slides
    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
    for(var i = 0; i < slidesLength; i += 1){
        slideSize = 0;
        var slide = slides.eq(i);
        if (params.slidesPerColumn > 1) {
            // Set slides order
            var newSlideOrderIndex = void 0;
            var column = void 0;
            var row = void 0;
            if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
                var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
                var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
                var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
                row = Math.floor(slideIndexInGroup / columnsInGroup);
                column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
                newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
                slide.css({
                    '-webkit-box-ordinal-group': newSlideOrderIndex,
                    '-moz-box-ordinal-group': newSlideOrderIndex,
                    '-ms-flex-order': newSlideOrderIndex,
                    '-webkit-order': newSlideOrderIndex,
                    order: newSlideOrderIndex
                });
            } else if (params.slidesPerColumnFill === 'column') {
                column = Math.floor(i / slidesPerColumn);
                row = i - column * slidesPerColumn;
                if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
                    row += 1;
                    if (row >= slidesPerColumn) {
                        row = 0;
                        column += 1;
                    }
                }
            } else {
                row = Math.floor(i / slidesPerRow);
                column = i - row * slidesPerRow;
            }
            slide.css(getDirectionLabel('margin-top'), row !== 0 ? params.spaceBetween && params.spaceBetween + "px" : '');
        }
        if (slide.css('display') === 'none') continue; // eslint-disable-line
        if (params.slidesPerView === 'auto') {
            var slideStyles = getComputedStyle(slide[0]);
            var currentTransform = slide[0].style.transform;
            var currentWebKitTransform = slide[0].style.webkitTransform;
            if (currentTransform) slide[0].style.transform = 'none';
            if (currentWebKitTransform) slide[0].style.webkitTransform = 'none';
            if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
            else {
                // eslint-disable-next-line
                var width = getDirectionPropertyValue(slideStyles, 'width');
                var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                var boxSizing = slideStyles.getPropertyValue('box-sizing');
                if (boxSizing && boxSizing === 'border-box') slideSize = width + marginLeft + marginRight;
                else {
                    var _slide$ = slide[0], clientWidth = _slide$.clientWidth, offsetWidth = _slide$.offsetWidth;
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) slide[0].style.transform = currentTransform;
            if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slides[i]) slides[i].style[getDirectionLabel('width')] = slideSize + "px";
        }
        if (slides[i]) slides[i].swiperSlideSize = slideSize;
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) $wrapperEl.css({
        width: swiper.virtualSize + params.spaceBetween + "px"
    });
    if (params.setWrapperSize) {
        var _$wrapperEl$css;
        $wrapperEl.css((_$wrapperEl$css = {
        }, _$wrapperEl$css[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
    }
    if (params.slidesPerColumn > 1) {
        var _$wrapperEl$css2;
        swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
        $wrapperEl.css((_$wrapperEl$css2 = {
        }, _$wrapperEl$css2[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));
        if (params.centeredSlides) {
            newSlidesGrid = [];
            for(var _i = 0; _i < snapGrid.length; _i += 1){
                var slidesGridItem = snapGrid[_i];
                if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid = newSlidesGrid;
        }
    } // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        newSlidesGrid = [];
        for(var _i2 = 0; _i2 < snapGrid.length; _i2 += 1){
            var _slidesGridItem = snapGrid[_i2];
            if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);
            if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(_slidesGridItem);
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
    }
    if (snapGrid.length === 0) snapGrid = [
        0
    ];
    if (params.spaceBetween !== 0) {
        var _slides$filter$css;
        var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
        slides.filter(function(_, slideIndex) {
            if (!params.cssMode) return true;
            if (slideIndex === slides.length - 1) return false;
            return true;
        }).css((_slides$filter$css = {
        }, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        var allSlidesSize = 0;
        slidesSizesGrid.forEach(function(slideSizeValue) {
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        var maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map(function(snap) {
            if (snap < 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        var _allSlidesSize = 0;
        slidesSizesGrid.forEach(function(slideSizeValue) {
            _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        _allSlidesSize -= params.spaceBetween;
        if (_allSlidesSize < swiperSize) {
            var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
            snapGrid.forEach(function(snap, snapIndex) {
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach(function(snap, snapIndex) {
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    _utils.extend(swiper, {
        slides: slides,
        snapGrid: snapGrid,
        slidesGrid: slidesGrid,
        slidesSizesGrid: slidesSizesGrid
    });
    if (slidesLength !== previousSlidesLength) swiper.emit('slidesLengthChange');
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) swiper.emit('slidesGridLengthChange');
    if (params.watchSlidesProgress || params.watchSlidesVisibility) swiper.updateSlidesOffset();
}
exports.default = updateSlides;

},{"../../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"drNRQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateAutoHeight(speed) {
    var swiper = this;
    var activeSlides = [];
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var newHeight = 0;
    var i;
    if (typeof speed === 'number') swiper.setTransition(speed);
    else if (speed === true) swiper.setTransition(swiper.params.speed);
    var getSlideByIndex = function getSlideByIndex1(index) {
        if (isVirtual) return swiper.slides.filter(function(el) {
            return parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index;
        })[0];
        return swiper.slides.eq(index)[0];
    }; // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) swiper.visibleSlides.each(function(slide) {
            activeSlides.push(slide);
        });
        else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
            var index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        }
    } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
     // Find new height from highest slide in view
    for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
    }
     // Update Height
    if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
}
exports.default = updateAutoHeight;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7lSyt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateSlidesOffset() {
    var swiper = this;
    var slides = swiper.slides;
    for(var i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
}
exports.default = updateSlidesOffset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bNhpX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom = require("../../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
function updateSlidesProgress(translate) {
    if (translate === void 0) translate = this && this.translate || 0;
    var swiper = this;
    var params = swiper.params;
    var slides = swiper.slides, rtl = swiper.rtlTranslate;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
    var offsetCenter = -translate;
    if (rtl) offsetCenter = translate; // Visible Slides
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for(var i = 0; i < slides.length; i += 1){
        var slide = slides[i];
        var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
            var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
            var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
            var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
            if (isVisible) {
                swiper.visibleSlides.push(slide);
                swiper.visibleSlidesIndexes.push(i);
                slides.eq(i).addClass(params.slideVisibleClass);
            }
        }
        slide.progress = rtl ? -slideProgress : slideProgress;
    }
    swiper.visibleSlides = _domDefault.default(swiper.visibleSlides);
}
exports.default = updateSlidesProgress;

},{"../../../utils/dom":"4aX4f","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hV6Oi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../../utils/utils");
function updateProgress(translate) {
    var swiper = this;
    if (typeof translate === 'undefined') {
        var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    var params = swiper.params;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress, isBeginning = swiper.isBeginning, isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
    }
    _utils.extend(swiper, {
        progress: progress,
        isBeginning: isBeginning,
        isEnd: isEnd
    });
    if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) swiper.emit('reachBeginning toEdge');
    if (isEnd && !wasEnd) swiper.emit('reachEnd toEdge');
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit('fromEdge');
    swiper.emit('progress', progress);
}
exports.default = updateProgress;

},{"../../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8APqI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function updateSlidesClasses() {
    var swiper = this;
    var slides = swiper.slides, params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex, realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
    var activeSlide;
    if (isVirtual) activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
    else activeSlide = slides.eq(activeIndex);
     // Active classes
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
        else $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    } // Next Slide
    var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
    } // Prev Slide
    var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
        else $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
        if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
        else $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    }
    swiper.emitSlidesClasses();
}
exports.default = updateSlidesClasses;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5dXle":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../../utils/utils");
function updateActiveIndex(newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid, snapGrid = swiper.snapGrid, params = swiper.params, previousIndex = swiper.activeIndex, previousRealIndex = swiper.realIndex, previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;
    if (typeof activeIndex === 'undefined') {
        for(var i = 0; i < slidesGrid.length; i += 1){
            if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
                else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
        } // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
    }
    if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
    else {
        var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit('snapIndexChange');
        }
        return;
    } // Get real index
    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
    _utils.extend(swiper, {
        snapIndex: snapIndex,
        realIndex: realIndex,
        previousIndex: previousIndex,
        activeIndex: activeIndex
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) swiper.emit('realIndexChange');
    if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit('slideChange');
}
exports.default = updateActiveIndex;

},{"../../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"gts2W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom = require("../../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
function updateClickedSlide(e) {
    var swiper = this;
    var params = swiper.params;
    var slide = _domDefault.default(e.target).closest("." + params.slideClass)[0];
    var slideFound = false;
    var slideIndex;
    if (slide) {
        for(var i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(_domDefault.default(slide).attr('data-swiper-slide-index'), 10);
        else swiper.clickedIndex = slideIndex;
    } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
}
exports.default = updateClickedSlide;

},{"../../../utils/dom":"4aX4f","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hNniP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getTranslate = require("./getTranslate");
var _getTranslateDefault = parcelHelpers.interopDefault(_getTranslate);
var _setTranslate = require("./setTranslate");
var _setTranslateDefault = parcelHelpers.interopDefault(_setTranslate);
var _minTranslate = require("./minTranslate");
var _minTranslateDefault = parcelHelpers.interopDefault(_minTranslate);
var _maxTranslate = require("./maxTranslate");
var _maxTranslateDefault = parcelHelpers.interopDefault(_maxTranslate);
var _translateTo = require("./translateTo");
var _translateToDefault = parcelHelpers.interopDefault(_translateTo);
exports.default = {
    getTranslate: _getTranslateDefault.default,
    setTranslate: _setTranslateDefault.default,
    minTranslate: _minTranslateDefault.default,
    maxTranslate: _maxTranslateDefault.default,
    translateTo: _translateToDefault.default
};

},{"./getTranslate":"9T9gn","./setTranslate":"4yzVn","./minTranslate":"04bBz","./maxTranslate":"OKkxF","./translateTo":"6DolL","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9T9gn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../../utils/utils");
function getSwiperTranslate(axis) {
    if (axis === void 0) axis = this.isHorizontal() ? 'x' : 'y';
    var swiper = this;
    var params = swiper.params, rtl = swiper.rtlTranslate, translate = swiper.translate, $wrapperEl = swiper.$wrapperEl;
    if (params.virtualTranslate) return rtl ? -translate : translate;
    if (params.cssMode) return translate;
    var currentTranslate = _utils.getTranslate($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}
exports.default = getSwiperTranslate;

},{"../../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4yzVn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setTranslate(translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate, params = swiper.params, $wrapperEl = swiper.$wrapperEl, wrapperEl = swiper.wrapperEl, progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;
    if (swiper.isHorizontal()) x = rtl ? -translate : translate;
    else y = translate;
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    if (params.cssMode) wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    else if (!params.virtualTranslate) $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== progress) swiper.updateProgress(translate);
    swiper.emit('setTranslate', swiper.translate, byController);
}
exports.default = setTranslate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"04bBz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function minTranslate() {
    return -this.snapGrid[0];
}
exports.default = minTranslate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"OKkxF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
exports.default = maxTranslate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6DolL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) translate = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (translateBounds === void 0) translateBounds = true;
    var swiper = this;
    var params = swiper.params, wrapperEl = swiper.wrapperEl;
    if (swiper.animating && params.preventInteractionOnTransition) return false;
    var minTranslate = swiper.minTranslate();
    var maxTranslate = swiper.maxTranslate();
    var newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
    else newTranslate = translate; // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        var isH = swiper.isHorizontal();
        if (speed === 0) wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        else // eslint-disable-next-line
        if (wrapperEl.scrollTo) {
            var _wrapperEl$scrollTo;
            wrapperEl.scrollTo((_wrapperEl$scrollTo = {
            }, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
        } else wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionEnd');
        }
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionStart');
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                swiper.onTranslateToWrapperTransitionEnd = null;
                delete swiper.onTranslateToWrapperTransitionEnd;
                if (runCallbacks) swiper.emit('transitionEnd');
            };
            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}
exports.default = translateTo;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7S2Xg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setTransition = require("./setTransition");
var _setTransitionDefault = parcelHelpers.interopDefault(_setTransition);
var _transitionStart = require("./transitionStart");
var _transitionStartDefault = parcelHelpers.interopDefault(_transitionStart);
var _transitionEnd = require("./transitionEnd");
var _transitionEndDefault = parcelHelpers.interopDefault(_transitionEnd);
exports.default = {
    setTransition: _setTransitionDefault.default,
    transitionStart: _transitionStartDefault.default,
    transitionEnd: _transitionEndDefault.default
};

},{"./setTransition":"kM6oy","./transitionStart":"jv3Ku","./transitionEnd":"8zNYu","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kM6oy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setTransition(duration, byController) {
    var swiper = this;
    if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
    swiper.emit('setTransition', duration, byController);
}
exports.default = setTransition;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jv3Ku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var activeIndex = swiper.activeIndex, params = swiper.params, previousIndex = swiper.previousIndex;
    if (params.cssMode) return;
    if (params.autoHeight) swiper.updateAutoHeight();
    var dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';
        else if (activeIndex < previousIndex) dir = 'prev';
        else dir = 'reset';
    }
    swiper.emit('transitionStart');
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
            swiper.emit('slideResetTransitionStart');
            return;
        }
        swiper.emit('slideChangeTransitionStart');
        if (dir === 'next') swiper.emit('slideNextTransitionStart');
        else swiper.emit('slidePrevTransitionStart');
    }
}
exports.default = transitionStart;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8zNYu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var activeIndex = swiper.activeIndex, previousIndex = swiper.previousIndex, params = swiper.params;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    var dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';
        else if (activeIndex < previousIndex) dir = 'prev';
        else dir = 'reset';
    }
    swiper.emit('transitionEnd');
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
            swiper.emit('slideResetTransitionEnd');
            return;
        }
        swiper.emit('slideChangeTransitionEnd');
        if (dir === 'next') swiper.emit('slideNextTransitionEnd');
        else swiper.emit('slidePrevTransitionEnd');
    }
}
exports.default = transitionEnd;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9fTto":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slideTo = require("./slideTo");
var _slideToDefault = parcelHelpers.interopDefault(_slideTo);
var _slideToLoop = require("./slideToLoop");
var _slideToLoopDefault = parcelHelpers.interopDefault(_slideToLoop);
var _slideNext = require("./slideNext");
var _slideNextDefault = parcelHelpers.interopDefault(_slideNext);
var _slidePrev = require("./slidePrev");
var _slidePrevDefault = parcelHelpers.interopDefault(_slidePrev);
var _slideReset = require("./slideReset");
var _slideResetDefault = parcelHelpers.interopDefault(_slideReset);
var _slideToClosest = require("./slideToClosest");
var _slideToClosestDefault = parcelHelpers.interopDefault(_slideToClosest);
var _slideToClickedSlide = require("./slideToClickedSlide");
var _slideToClickedSlideDefault = parcelHelpers.interopDefault(_slideToClickedSlide);
exports.default = {
    slideTo: _slideToDefault.default,
    slideToLoop: _slideToLoopDefault.default,
    slideNext: _slideNextDefault.default,
    slidePrev: _slidePrevDefault.default,
    slideReset: _slideResetDefault.default,
    slideToClosest: _slideToClosestDefault.default,
    slideToClickedSlide: _slideToClickedSlideDefault.default
};

},{"./slideTo":"4IN61","./slideToLoop":"e77Xx","./slideNext":"d09RH","./slidePrev":"26yrg","./slideReset":"QhShJ","./slideToClosest":"e6kM1","./slideToClickedSlide":"kHxub","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4IN61":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (typeof index !== 'number' && typeof index !== 'string') throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
    if (typeof index === 'string') {
        /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */ var indexAsNumber = parseInt(index, 10);
        /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */ var isValidNumber = isFinite(indexAsNumber);
        if (!isValidNumber) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
         // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.
        index = indexAsNumber;
    }
    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    var params = swiper.params, snapGrid = swiper.snapGrid, slidesGrid = swiper.slidesGrid, previousIndex = swiper.previousIndex, activeIndex = swiper.activeIndex, rtl = swiper.rtlTranslate, wrapperEl = swiper.wrapperEl, enabled = swiper.enabled;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
    var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit('beforeSlideChangeStart');
    var translate = -snapGrid[snapIndex]; // Update progress
    swiper.updateProgress(translate); // Normalize slideIndex
    if (params.normalizeSlideIndex) for(var i = 0; i < slidesGrid.length; i += 1){
        var normalizedTranslate = -Math.floor(translate * 100);
        var normalizedGird = Math.floor(slidesGrid[i] * 100);
        var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) slideIndex = i;
            else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
        } else if (normalizedTranslate >= normalizedGird) slideIndex = i;
    }
     // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) return false;
        }
    }
    var direction;
    if (slideIndex > activeIndex) direction = 'next';
    else if (slideIndex < activeIndex) direction = 'prev';
    else direction = 'reset'; // Update Index
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height
        if (params.autoHeight) swiper.updateAutoHeight();
        swiper.updateSlidesClasses();
        if (params.effect !== 'slide') swiper.setTranslate(translate);
        if (direction !== 'reset') {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        var isH = swiper.isHorizontal();
        var t = -translate;
        if (rtl) t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
        if (speed === 0) wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        else // eslint-disable-next-line
        if (wrapperEl.scrollTo) {
            var _wrapperEl$scrollTo;
            wrapperEl.scrollTo((_wrapperEl$scrollTo = {
            }, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
        } else wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                swiper.onSlideToWrapperTransitionEnd = null;
                delete swiper.onSlideToWrapperTransitionEnd;
                swiper.transitionEnd(runCallbacks, direction);
            };
            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        }
    }
    return true;
}
exports.default = slideTo;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"e77Xx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var newIndex = index;
    if (swiper.params.loop) newIndex += swiper.loopedSlides;
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
exports.default = slideToLoop;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"d09RH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var params = swiper.params, animating = swiper.animating, enabled = swiper.enabled;
    if (!enabled) return swiper;
    var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
exports.default = slideNext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"26yrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    var params = swiper.params, animating = swiper.animating, snapGrid = swiper.snapGrid, slidesGrid = swiper.slidesGrid, rtlTranslate = swiper.rtlTranslate, enabled = swiper.enabled;
    if (!enabled) return swiper;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function(val) {
        return normalize(val);
    });
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && params.cssMode) snapGrid.forEach(function(snap) {
        if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
    });
    var prevIndex;
    if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
exports.default = slidePrev;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"QhShJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
exports.default = slideReset;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"e6kM1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (threshold === void 0) threshold = 0.5;
    var swiper = this;
    var index = swiper.activeIndex;
    var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        var currentSnap = swiper.snapGrid[snapIndex];
        var nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
    } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        var prevSnap = swiper.snapGrid[snapIndex - 1];
        var _currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
}
exports.default = slideToClosest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kHxub":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom = require("../../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../../utils/utils");
function slideToClickedSlide() {
    var swiper = this;
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl;
    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;
    if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt(_domDefault.default(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        if (params.centeredSlides) {
            if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
                _utils.nextTick(function() {
                    swiper.slideTo(slideToIndex);
                });
            } else swiper.slideTo(slideToIndex);
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
            _utils.nextTick(function() {
                swiper.slideTo(slideToIndex);
            });
        } else swiper.slideTo(slideToIndex);
    } else swiper.slideTo(slideToIndex);
}
exports.default = slideToClickedSlide;

},{"../../../utils/dom":"4aX4f","../../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1UXwS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loopCreate = require("./loopCreate");
var _loopCreateDefault = parcelHelpers.interopDefault(_loopCreate);
var _loopFix = require("./loopFix");
var _loopFixDefault = parcelHelpers.interopDefault(_loopFix);
var _loopDestroy = require("./loopDestroy");
var _loopDestroyDefault = parcelHelpers.interopDefault(_loopDestroy);
exports.default = {
    loopCreate: _loopCreateDefault.default,
    loopFix: _loopFixDefault.default,
    loopDestroy: _loopDestroyDefault.default
};

},{"./loopCreate":"hSa6I","./loopFix":"gWFn9","./loopDestroy":"Vz7E3","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hSa6I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _dom = require("../../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
function loopCreate() {
    var swiper = this;
    var document = _ssrWindow.getDocument();
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides
    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
    var slides = $wrapperEl.children("." + params.slideClass);
    if (params.loopFillGroupWithBlank) {
        var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
        if (blankSlidesNum !== params.slidesPerGroup) {
            for(var i = 0; i < blankSlidesNum; i += 1){
                var blankNode = _domDefault.default(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
                $wrapperEl.append(blankNode);
            }
            slides = $wrapperEl.children("." + params.slideClass);
        }
    }
    if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) swiper.loopedSlides = slides.length;
    var prependSlides = [];
    var appendSlides = [];
    slides.each(function(el, index) {
        var slide = _domDefault.default(el);
        if (index < swiper.loopedSlides) appendSlides.push(el);
        if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
        slide.attr('data-swiper-slide-index', index);
    });
    for(var _i = 0; _i < appendSlides.length; _i += 1)$wrapperEl.append(_domDefault.default(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
    for(var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1)$wrapperEl.prepend(_domDefault.default(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
}
exports.default = loopCreate;

},{"ssr-window":"31FIQ","../../../utils/dom":"4aX4f","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"gWFn9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function loopFix() {
    var swiper = this;
    swiper.emit('beforeLoopFix');
    var activeIndex = swiper.activeIndex, slides = swiper.slides, loopedSlides = swiper.loopedSlides, allowSlidePrev = swiper.allowSlidePrev, allowSlideNext = swiper.allowSlideNext, snapGrid = swiper.snapGrid, rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        var slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        var _slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (_slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
}
exports.default = loopFix;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"Vz7E3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function loopDestroy() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl, params = swiper.params, slides = swiper.slides;
    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
    slides.removeAttr('data-swiper-slide-index');
}
exports.default = loopDestroy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bHaRq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setGrabCursor = require("./setGrabCursor");
var _setGrabCursorDefault = parcelHelpers.interopDefault(_setGrabCursor);
var _unsetGrabCursor = require("./unsetGrabCursor");
var _unsetGrabCursorDefault = parcelHelpers.interopDefault(_unsetGrabCursor);
exports.default = {
    setGrabCursor: _setGrabCursorDefault.default,
    unsetGrabCursor: _unsetGrabCursorDefault.default
};

},{"./setGrabCursor":"bnXQV","./unsetGrabCursor":"8kanS","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bnXQV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setGrabCursor(moving) {
    var swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    var el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
}
exports.default = setGrabCursor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8kanS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function unsetGrabCursor() {
    var swiper = this;
    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    swiper.el.style.cursor = '';
}
exports.default = unsetGrabCursor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"44oL1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _appendSlide = require("./appendSlide");
var _appendSlideDefault = parcelHelpers.interopDefault(_appendSlide);
var _prependSlide = require("./prependSlide");
var _prependSlideDefault = parcelHelpers.interopDefault(_prependSlide);
var _addSlide = require("./addSlide");
var _addSlideDefault = parcelHelpers.interopDefault(_addSlide);
var _removeSlide = require("./removeSlide");
var _removeSlideDefault = parcelHelpers.interopDefault(_removeSlide);
var _removeAllSlides = require("./removeAllSlides");
var _removeAllSlidesDefault = parcelHelpers.interopDefault(_removeAllSlides);
exports.default = {
    appendSlide: _appendSlideDefault.default,
    prependSlide: _prependSlideDefault.default,
    addSlide: _addSlideDefault.default,
    removeSlide: _removeSlideDefault.default,
    removeAllSlides: _removeAllSlidesDefault.default
};

},{"./appendSlide":"bYe29","./prependSlide":"krv2X","./addSlide":"4xnqI","./removeSlide":"f7yKI","./removeAllSlides":"1IOMG","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bYe29":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function appendSlide(slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl, params = swiper.params;
    if (params.loop) swiper.loopDestroy();
    if (typeof slides === 'object' && 'length' in slides) {
        for(var i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
    } else $wrapperEl.append(slides);
    if (params.loop) swiper.loopCreate();
    if (!(params.observer && swiper.support.observer)) swiper.update();
}
exports.default = appendSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"krv2X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function prependSlide(slides) {
    var swiper = this;
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex;
    if (params.loop) swiper.loopDestroy();
    var newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
        for(var i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.prepend(slides[i]);
        newActiveIndex = activeIndex + slides.length;
    } else $wrapperEl.prepend(slides);
    if (params.loop) swiper.loopCreate();
    if (!(params.observer && swiper.support.observer)) swiper.update();
    swiper.slideTo(newActiveIndex, 0, false);
}
exports.default = prependSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4xnqI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function addSlide(index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl, params = swiper.params, activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children("." + params.slideClass);
    }
    var baseLength = swiper.slides.length;
    if (index <= 0) {
        swiper.prependSlide(slides);
        return;
    }
    if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
    }
    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    var slidesBuffer = [];
    for(var i = baseLength - 1; i >= index; i -= 1){
        var currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === 'object' && 'length' in slides) {
        for(var _i = 0; _i < slides.length; _i += 1)if (slides[_i]) $wrapperEl.append(slides[_i]);
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else $wrapperEl.append(slides);
    for(var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1)$wrapperEl.append(slidesBuffer[_i2]);
    if (params.loop) swiper.loopCreate();
    if (!(params.observer && swiper.support.observer)) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}
exports.default = addSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"f7yKI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeSlide(slidesIndexes) {
    var swiper = this;
    var params = swiper.params, $wrapperEl = swiper.$wrapperEl, activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children("." + params.slideClass);
    }
    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;
    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for(var i = 0; i < slidesIndexes.length; i += 1){
            indexToRemove = slidesIndexes[i];
            if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params.loop) swiper.loopCreate();
    if (!(params.observer && swiper.support.observer)) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}
exports.default = removeSlide;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1IOMG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeAllSlides() {
    var swiper = this;
    var slidesIndexes = [];
    for(var i = 0; i < swiper.slides.length; i += 1)slidesIndexes.push(i);
    swiper.removeSlide(slidesIndexes);
}
exports.default = removeAllSlides;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cH9xZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _onTouchStart = require("./onTouchStart");
var _onTouchStartDefault = parcelHelpers.interopDefault(_onTouchStart);
var _onTouchMove = require("./onTouchMove");
var _onTouchMoveDefault = parcelHelpers.interopDefault(_onTouchMove);
var _onTouchEnd = require("./onTouchEnd");
var _onTouchEndDefault = parcelHelpers.interopDefault(_onTouchEnd);
var _onResize = require("./onResize");
var _onResizeDefault = parcelHelpers.interopDefault(_onResize);
var _onClick = require("./onClick");
var _onClickDefault = parcelHelpers.interopDefault(_onClick);
var _onScroll = require("./onScroll");
var _onScrollDefault = parcelHelpers.interopDefault(_onScroll);
var dummyEventAttached = false;
function dummyEventListener() {
}
function attachEvents() {
    var swiper = this;
    var document = _ssrWindow.getDocument();
    var params = swiper.params, touchEvents = swiper.touchEvents, el = swiper.el, wrapperEl = swiper.wrapperEl, device = swiper.device, support = swiper.support;
    swiper.onTouchStart = _onTouchStartDefault.default.bind(swiper);
    swiper.onTouchMove = _onTouchMoveDefault.default.bind(swiper);
    swiper.onTouchEnd = _onTouchEndDefault.default.bind(swiper);
    if (params.cssMode) swiper.onScroll = _onScrollDefault.default.bind(swiper);
    swiper.onClick = _onClickDefault.default.bind(swiper);
    var capture = !!params.nested; // Touch Events
    if (!support.touch && support.pointerEvents) {
        el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
        if (support.touch) {
            var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
            el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                passive: false,
                capture: capture
            } : capture);
            el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
            if (touchEvents.cancel) el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            if (!dummyEventAttached) {
                document.addEventListener('touchstart', dummyEventListener);
                dummyEventAttached = true;
            }
        }
        if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
            el.addEventListener('mousedown', swiper.onTouchStart, false);
            document.addEventListener('mousemove', swiper.onTouchMove, capture);
            document.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
    } // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) el.addEventListener('click', swiper.onClick, true);
    if (params.cssMode) wrapperEl.addEventListener('scroll', swiper.onScroll);
     // Resize handler
    if (params.updateOnWindowResize) swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResizeDefault.default, true);
    else swiper.on('observerUpdate', _onResizeDefault.default, true);
}
function detachEvents() {
    var swiper = this;
    var document = _ssrWindow.getDocument();
    var params = swiper.params, touchEvents = swiper.touchEvents, el = swiper.el, wrapperEl = swiper.wrapperEl, device = swiper.device, support = swiper.support;
    var capture = !!params.nested; // Touch Events
    if (!support.touch && support.pointerEvents) {
        el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
        if (support.touch) {
            var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
            el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
            el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
            if (touchEvents.cancel) el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
        if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
            el.removeEventListener('mousedown', swiper.onTouchStart, false);
            document.removeEventListener('mousemove', swiper.onTouchMove, capture);
            document.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
    } // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) el.removeEventListener('click', swiper.onClick, true);
    if (params.cssMode) wrapperEl.removeEventListener('scroll', swiper.onScroll);
     // Resize handler
    swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResizeDefault.default);
}
exports.default = {
    attachEvents: attachEvents,
    detachEvents: detachEvents
};

},{"ssr-window":"31FIQ","./onTouchStart":"biHRO","./onTouchMove":"cOVdU","./onTouchEnd":"5lfF8","./onResize":"iy3Af","./onClick":"2TQwX","./onScroll":"lNIKz","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"biHRO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _dom = require("../../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../../utils/utils"); // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
    if (base === void 0) base = this;
    function __closestFrom(el) {
        if (!el || el === _ssrWindow.getDocument() || el === _ssrWindow.getWindow()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        var found = el.closest(selector);
        return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
}
function onTouchStart(event) {
    var swiper = this;
    var document = _ssrWindow.getDocument();
    var window = _ssrWindow.getWindow();
    var data = swiper.touchEventsData;
    var params = swiper.params, touches = swiper.touches, enabled = swiper.enabled;
    if (!enabled) return;
    if (swiper.animating && params.preventInteractionOnTransition) return;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;
    var $targetEl = _domDefault.default(e.target);
    if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
    }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
    if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return; // change target el for shadow root component
    var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
    if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = _domDefault.default(event.path[0]);
    var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass;
    var isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }
    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') event.preventDefault();
        else return;
    }
    _utils.extend(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = _utils.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    if (e.type !== 'touchstart') {
        var preventDefault = true;
        if ($targetEl.is(data.focusableElements)) preventDefault = false;
        if (document.activeElement && _domDefault.default(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
        var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
    }
    swiper.emit('touchStart', e);
}
exports.default = onTouchStart;

},{"ssr-window":"31FIQ","../../../utils/dom":"4aX4f","../../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cOVdU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _dom = require("../../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../../utils/utils");
function onTouchMove(event) {
    var document = _ssrWindow.getDocument();
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params, touches = swiper.touches, rtl = swiper.rtlTranslate, enabled = swiper.enabled;
    if (!enabled) return;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) swiper.emit('touchMoveOpposite', e);
        return;
    }
    if (data.isTouchEvent && e.type !== 'touchmove') return;
    var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        // isMoved = true;
        swiper.allowClick = false;
        if (data.isTouched) {
            _utils.extend(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY
            });
            data.touchStartTime = _utils.now();
        }
        return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) // Vertical
        {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
    }
    if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && _domDefault.default(e.target).is(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) swiper.emit('touchMove', e);
    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;
    if (typeof data.isScrolling === 'undefined') {
        var touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
        else // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
    }
    if (data.isScrolling) swiper.emit('touchMoveOpposite', e);
    if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
    }
    if (data.isScrolling) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) return;
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
    if (!data.isMoved) {
        if (params.loop) swiper.loopFix();
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        data.allowMomentumBounce = false; // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
        swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;
    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) resistanceRatio = 0;
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
    }
    if (disableParentSwiper) e.preventedByNestedSwiper = true;
     // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
     // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode) return; // Update active index in free mode
    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (params.freeMode) {
        // Velocity
        if (data.velocities.length === 0) data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
        });
        data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
            time: _utils.now()
        });
    } // Update progress
    swiper.updateProgress(data.currentTranslate); // Update translate
    swiper.setTranslate(data.currentTranslate);
}
exports.default = onTouchMove;

},{"ssr-window":"31FIQ","../../../utils/dom":"4aX4f","../../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5lfF8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../../utils/utils");
function onTouchEnd(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params, touches = swiper.touches, rtl = swiper.rtlTranslate, $wrapperEl = swiper.$wrapperEl, slidesGrid = swiper.slidesGrid, snapGrid = swiper.snapGrid, enabled = swiper.enabled;
    if (!enabled) return;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (data.allowTouchCallbacks) swiper.emit('touchEnd', e);
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
        data.isMoved = false;
        data.startMoving = false;
        return;
    } // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
     // Time diff
    var touchEndTime = _utils.now();
    var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
    if (swiper.allowClick) {
        swiper.updateClickedSlide(e);
        swiper.emit('tap click', e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit('doubleTap doubleClick', e);
    }
    data.lastClickTime = _utils.now();
    _utils.nextTick(function() {
        if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    var currentPos;
    if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
    else currentPos = -data.currentTranslate;
    if (params.cssMode) return;
    if (params.freeMode) {
        if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1);
            else swiper.slideTo(swiper.slides.length - 1);
            return;
        }
        if (params.freeModeMomentum) {
            if (data.velocities.length > 1) {
                var lastMoveEvent = data.velocities.pop();
                var velocityEvent = data.velocities.pop();
                var distance = lastMoveEvent.position - velocityEvent.position;
                var time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
                if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) swiper.velocity = 0;
                 // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || _utils.now() - lastMoveEvent.time > 300) swiper.velocity = 0;
            } else swiper.velocity = 0;
            swiper.velocity *= params.freeModeMomentumVelocityRatio;
            data.velocities.length = 0;
            var momentumDuration = 1000 * params.freeModeMomentumRatio;
            var momentumDistance = swiper.velocity * momentumDuration;
            var newPosition = swiper.translate + momentumDistance;
            if (rtl) newPosition = -newPosition;
            var doBounce = false;
            var afterBouncePosition;
            var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
            var needsLoopFix;
            if (newPosition < swiper.maxTranslate()) {
                if (params.freeModeMomentumBounce) {
                    if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                    afterBouncePosition = swiper.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.maxTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (newPosition > swiper.minTranslate()) {
                if (params.freeModeMomentumBounce) {
                    if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                    afterBouncePosition = swiper.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.minTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (params.freeModeSticky) {
                var nextSlide;
                for(var j = 0; j < snapGrid.length; j += 1)if (snapGrid[j] > -newPosition) {
                    nextSlide = j;
                    break;
                }
                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') newPosition = snapGrid[nextSlide];
                else newPosition = snapGrid[nextSlide - 1];
                newPosition = -newPosition;
            }
            if (needsLoopFix) swiper.once('transitionEnd', function() {
                swiper.loopFix();
            });
             // Fix duration
            if (swiper.velocity !== 0) {
                if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                if (params.freeModeSticky) {
                    // If freeModeSticky is active and the user ends a swipe with a slow-velocity
                    // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                    // It's easy to see this when simulating touch with mouse events. To fix this,
                    // limit single-slide swipes to the default slide duration. This also has the
                    // nice side effect of matching slide speed if the user stopped moving before
                    // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                    // For faster swipes, also apply limits (albeit higher ones).
                    var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                    var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                    if (moveDistance < currentSlideSize) momentumDuration = params.speed;
                    else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5;
                    else momentumDuration = params.speed * 2.5;
                }
            } else if (params.freeModeSticky) {
                swiper.slideToClosest();
                return;
            }
            if (params.freeModeMomentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                $wrapperEl.transitionEnd(function() {
                    if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                    swiper.emit('momentumBounce');
                    swiper.setTransition(params.speed);
                    setTimeout(function() {
                        swiper.setTranslate(afterBouncePosition);
                        $wrapperEl.transitionEnd(function() {
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }, 0);
                });
            } else if (swiper.velocity) {
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                if (!swiper.animating) {
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(function() {
                        if (!swiper || swiper.destroyed) return;
                        swiper.transitionEnd();
                    });
                }
            } else {
                swiper.emit('_freeModeNoMomentumRelease');
                swiper.updateProgress(newPosition);
            }
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        } else if (params.freeModeSticky) {
            swiper.slideToClosest();
            return;
        } else if (params.freeMode) swiper.emit('_freeModeNoMomentumRelease');
        if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        return;
    } // Find current slide
    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];
    for(var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
        var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + _increment] !== 'undefined') {
            if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + _increment] - slidesGrid[i];
            }
        } else if (currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    } // Find current slide size
    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === 'next') {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === 'prev') {
            if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
    } else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === 'next') swiper.slideTo(stopIndex + increment);
            if (swiper.swipeDirection === 'prev') swiper.slideTo(stopIndex);
        } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
    }
}
exports.default = onTouchEnd;

},{"../../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iy3Af":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function onResize() {
    var swiper = this;
    var params = swiper.params, el = swiper.el;
    if (el && el.offsetWidth === 0) return; // Breakpoints
    if (params.breakpoints) swiper.setBreakpoint();
     // Save locks
    var allowSlideNext = swiper.allowSlideNext, allowSlidePrev = swiper.allowSlidePrev, snapGrid = swiper.snapGrid; // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    else swiper.slideTo(swiper.activeIndex, 0, false, true);
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
     // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}
exports.default = onResize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"2TQwX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function onClick(e) {
    var swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}
exports.default = onClick;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"lNIKz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function onScroll() {
    var swiper = this;
    var wrapperEl = swiper.wrapperEl, rtlTranslate = swiper.rtlTranslate, enabled = swiper.enabled;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
        if (rtlTranslate) swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
        else swiper.translate = -wrapperEl.scrollLeft;
    } else swiper.translate = -wrapperEl.scrollTop;
     // eslint-disable-next-line
    if (swiper.translate === -0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    swiper.emit('setTranslate', swiper.translate, false);
}
exports.default = onScroll;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jmKF4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setBreakpoint = require("./setBreakpoint");
var _setBreakpointDefault = parcelHelpers.interopDefault(_setBreakpoint);
var _getBreakpoint = require("./getBreakpoint");
var _getBreakpointDefault = parcelHelpers.interopDefault(_getBreakpoint);
exports.default = {
    setBreakpoint: _setBreakpointDefault.default,
    getBreakpoint: _getBreakpointDefault.default
};

},{"./setBreakpoint":"6FZ06","./getBreakpoint":"cl0wb","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6FZ06":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../../utils/utils");
function setBreakpoint() {
    var swiper = this;
    var activeIndex = swiper.activeIndex, initialized = swiper.initialized, _swiper$loopedSlides = swiper.loopedSlides, loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides, params = swiper.params, $el = swiper.$el;
    var breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
    var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    if (breakpointOnlyParams) [
        'slidesPerView',
        'spaceBetween',
        'slidesPerGroup',
        'slidesPerGroupSkip',
        'slidesPerColumn'
    ].forEach(function(param) {
        var paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === 'undefined') return;
        if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) breakpointOnlyParams[param] = 'auto';
        else if (param === 'slidesPerView') breakpointOnlyParams[param] = parseFloat(paramValue);
        else breakpointOnlyParams[param] = parseInt(paramValue, 10);
    });
    var breakpointParams = breakpointOnlyParams || swiper.originalParams;
    var wasMultiRow = params.slidesPerColumn > 1;
    var isMultiRow = breakpointParams.slidesPerColumn > 1;
    var wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(params.containerModifierClass + "multirow");
        if (breakpointParams.slidesPerColumnFill && breakpointParams.slidesPerColumnFill === 'column' || !breakpointParams.slidesPerColumnFill && params.slidesPerColumnFill === 'column') $el.addClass(params.containerModifierClass + "multirow-column");
        swiper.emitContainerClasses();
    }
    var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) swiper.changeDirection();
    _utils.extend(swiper.params, breakpointParams);
    var isEnabled = swiper.params.enabled;
    _utils.extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) swiper.disable();
    else if (!wasEnabled && isEnabled) swiper.enable();
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);
    if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }
    swiper.emit('breakpoint', breakpointParams);
}
exports.default = setBreakpoint;

},{"../../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cl0wb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
function getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) base = 'window';
    if (!breakpoints || base === 'container' && !containerEl) return undefined;
    var breakpoint = false;
    var window = _ssrWindow.getWindow();
    var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
    var points = Object.keys(breakpoints).map(function(point) {
        if (typeof point === 'string' && point.indexOf('@') === 0) {
            var minRatio = parseFloat(point.substr(1));
            var value = currentHeight * minRatio;
            return {
                value: value,
                point: point
            };
        }
        return {
            value: point,
            point: point
        };
    });
    points.sort(function(a, b) {
        return parseInt(a.value, 10) - parseInt(b.value, 10);
    });
    for(var i = 0; i < points.length; i += 1){
        var _points$i = points[i], point = _points$i.point, value = _points$i.value;
        if (base === 'window') {
            if (window.matchMedia("(min-width: " + value + "px)").matches) breakpoint = point;
        } else if (value <= containerEl.clientWidth) breakpoint = point;
    }
    return breakpoint || 'max';
}
exports.default = getBreakpoint;

},{"ssr-window":"31FIQ","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"gTe7p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addClasses = require("./addClasses");
var _addClassesDefault = parcelHelpers.interopDefault(_addClasses);
var _removeClasses = require("./removeClasses");
var _removeClassesDefault = parcelHelpers.interopDefault(_removeClasses);
exports.default = {
    addClasses: _addClassesDefault.default,
    removeClasses: _removeClassesDefault.default
};

},{"./addClasses":"edYcn","./removeClasses":"69m03","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"edYcn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function prepareClasses(entries, prefix) {
    var resultClasses = [];
    entries.forEach(function(item) {
        if (typeof item === 'object') Object.keys(item).forEach(function(classNames) {
            if (item[classNames]) resultClasses.push(prefix + classNames);
        });
        else if (typeof item === 'string') resultClasses.push(prefix + item);
    });
    return resultClasses;
}
function addClasses() {
    var swiper = this;
    var classNames = swiper.classNames, params = swiper.params, rtl = swiper.rtl, $el = swiper.$el, device = swiper.device, support = swiper.support; // prettier-ignore
    var suffixes = prepareClasses([
        'initialized',
        params.direction,
        {
            'pointer-events': support.pointerEvents && !support.touch
        },
        {
            'free-mode': params.freeMode
        },
        {
            'autoheight': params.autoHeight
        },
        {
            'rtl': rtl
        },
        {
            'multirow': params.slidesPerColumn > 1
        },
        {
            'multirow-column': params.slidesPerColumn > 1 && params.slidesPerColumnFill === 'column'
        },
        {
            'android': device.android
        },
        {
            'ios': device.ios
        },
        {
            'css-mode': params.cssMode
        }
    ], params.containerModifierClass);
    classNames.push.apply(classNames, suffixes);
    $el.addClass([].concat(classNames).join(' '));
    swiper.emitContainerClasses();
}
exports.default = addClasses;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"69m03":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function removeClasses() {
    var swiper = this;
    var $el = swiper.$el, classNames = swiper.classNames;
    $el.removeClass(classNames.join(' '));
    swiper.emitContainerClasses();
}
exports.default = removeClasses;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5tb4A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loadImage = require("./loadImage");
var _loadImageDefault = parcelHelpers.interopDefault(_loadImage);
var _preloadImages = require("./preloadImages");
var _preloadImagesDefault = parcelHelpers.interopDefault(_preloadImages);
exports.default = {
    loadImage: _loadImageDefault.default,
    preloadImages: _preloadImagesDefault.default
};

},{"./loadImage":"gr83x","./preloadImages":"jOekn","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"gr83x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _dom = require("../../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    var window = _ssrWindow.getWindow();
    var image;
    function onReady() {
        if (callback) callback();
    }
    var isPicture = _domDefault.default(imageEl).parent('picture')[0];
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
            image = new window.Image();
            image.onload = onReady;
            image.onerror = onReady;
            if (sizes) image.sizes = sizes;
            if (srcset) image.srcset = srcset;
            if (src) image.src = src;
        } else onReady();
    } else // image already loaded...
    onReady();
}
exports.default = loadImage;

},{"ssr-window":"31FIQ","../../../utils/dom":"4aX4f","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jOekn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function preloadImages() {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
            if (swiper.params.updateOnImagesReady) swiper.update();
            swiper.emit('imagesReady');
        }
    }
    for(var i = 0; i < swiper.imagesToLoad.length; i += 1){
        var imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
    }
}
exports.default = preloadImages;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"ettwR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function checkOverflow() {
    var swiper = this;
    var params = swiper.params;
    var wasLocked = swiper.isLocked;
    var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;
    if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) swiper.isLocked = lastSlidePosition <= swiper.size;
    else swiper.isLocked = swiper.snapGrid.length === 1;
    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked; // events
    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
    if (wasLocked && wasLocked !== swiper.isLocked) {
        swiper.isEnd = false;
        if (swiper.navigation) swiper.navigation.update();
    }
}
exports.default = {
    checkOverflow: checkOverflow
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"48sOD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: false,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: 'input, select, option, textarea, button, video, label',
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    // NS
    containerModifierClass: 'swiper-container-',
    // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"eAjgV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
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
var Virtual = {
    update: function update(force) {
        var swiper = this;
        var _swiper$params = swiper.params, slidesPerView = _swiper$params.slidesPerView, slidesPerGroup = _swiper$params.slidesPerGroup, centeredSlides = _swiper$params.centeredSlides;
        var _swiper$params$virtua = swiper.params.virtual, addSlidesBefore = _swiper$params$virtua.addSlidesBefore, addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
        var _swiper$virtual = swiper.virtual, previousFrom = _swiper$virtual.from, previousTo = _swiper$virtual.to, slides = _swiper$virtual.slides, previousSlidesGrid = _swiper$virtual.slidesGrid, renderSlide = _swiper$virtual.renderSlide, previousOffset = _swiper$virtual.offset;
        swiper.updateActiveIndex();
        var activeIndex = swiper.activeIndex || 0;
        var offsetProp;
        if (swiper.rtlTranslate) offsetProp = 'right';
        else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        var slidesAfter;
        var slidesBefore;
        if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
            slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
            slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
            slidesBefore = slidesPerGroup + addSlidesBefore;
        }
        var from = Math.max((activeIndex || 0) - slidesBefore, 0);
        var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        _utils.extend(swiper.virtual, {
            from: from,
            to: to,
            offset: offset,
            slidesGrid: swiper.slidesGrid
        });
        function onRendered() {
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            if (swiper.lazy && swiper.params.lazy.enabled) swiper.lazy.load();
        }
        if (previousFrom === from && previousTo === to && !force) {
            if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.css(offsetProp, offset + "px");
            swiper.updateProgress();
            return;
        }
        if (swiper.params.virtual.renderExternal) {
            swiper.params.virtual.renderExternal.call(swiper, {
                offset: offset,
                from: from,
                to: to,
                slides: function getSlides() {
                    var slidesToRender = [];
                    for(var i = from; i <= to; i += 1)slidesToRender.push(slides[i]);
                    return slidesToRender;
                }()
            });
            if (swiper.params.virtual.renderExternalUpdate) onRendered();
            return;
        }
        var prependIndexes = [];
        var appendIndexes = [];
        if (force) swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
        else {
            for(var i = previousFrom; i <= previousTo; i += 1)if (i < from || i > to) swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
        }
        for(var _i = 0; _i < slides.length; _i += 1)if (_i >= from && _i <= to) {
            if (typeof previousTo === 'undefined' || force) appendIndexes.push(_i);
            else {
                if (_i > previousTo) appendIndexes.push(_i);
                if (_i < previousFrom) prependIndexes.push(_i);
            }
        }
        appendIndexes.forEach(function(index) {
            swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort(function(a, b) {
            return b - a;
        }).forEach(function(index) {
            swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
        onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
        var swiper = this;
        var params = swiper.params.virtual;
        if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
        var $slideEl = params.renderSlide ? _domDefault.default(params.renderSlide.call(swiper, slide, index)) : _domDefault.default("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
        if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
        if (params.cache) swiper.virtual.cache[index] = $slideEl;
        return $slideEl;
    },
    appendSlide: function appendSlide(slides) {
        var swiper = this;
        if (typeof slides === 'object' && 'length' in slides) {
            for(var i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.push(slides[i]);
        } else swiper.virtual.slides.push(slides);
        swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slides) {
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var newActiveIndex = activeIndex + 1;
        var numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
            for(var i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
            newActiveIndex = activeIndex + slides.length;
            numberOfNewSlides = slides.length;
        } else swiper.virtual.slides.unshift(slides);
        if (swiper.params.virtual.cache) {
            var cache = swiper.virtual.cache;
            var newCache = {
            };
            Object.keys(cache).forEach(function(cachedIndex) {
                var $cachedEl = cache[cachedIndex];
                var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
                if (cachedElIndex) $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
            });
            swiper.virtual.cache = newCache;
        }
        swiper.virtual.update(true);
        swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide: function removeSlide(slidesIndexes) {
        var swiper = this;
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        var activeIndex = swiper.activeIndex;
        if (Array.isArray(slidesIndexes)) for(var i = slidesIndexes.length - 1; i >= 0; i -= 1){
            swiper.virtual.slides.splice(slidesIndexes[i], 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes[i]];
            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        else {
            swiper.virtual.slides.splice(slidesIndexes, 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes];
            if (slidesIndexes < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        swiper.virtual.update(true);
        swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides: function removeAllSlides() {
        var swiper = this;
        swiper.virtual.slides = [];
        if (swiper.params.virtual.cache) swiper.virtual.cache = {
        };
        swiper.virtual.update(true);
        swiper.slideTo(0, 0);
    }
};
exports.default = {
    name: 'virtual',
    params: {
        virtual: {
            enabled: false,
            slides: [],
            cache: true,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: true,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            virtual: _extends({
            }, Virtual, {
                slides: swiper.params.virtual.slides,
                cache: {
                }
            })
        });
    },
    on: {
        beforeInit: function beforeInit(swiper) {
            if (!swiper.params.virtual.enabled) return;
            swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
            var overwriteParams = {
                watchSlidesProgress: true
            };
            _utils.extend(swiper.params, overwriteParams);
            _utils.extend(swiper.originalParams, overwriteParams);
            if (!swiper.params.initialSlide) swiper.virtual.update();
        },
        setTranslate: function setTranslate(swiper) {
            if (!swiper.params.virtual.enabled) return;
            swiper.virtual.update();
        }
    }
};

},{"../../utils/dom":"4aX4f","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dzALw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable consistent-return */ var _ssrWindow = require("ssr-window");
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
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
var Keyboard = {
    handle: function handle(event) {
        var swiper = this;
        if (!swiper.enabled) return;
        var window = _ssrWindow.getWindow();
        var document = _ssrWindow.getDocument();
        var rtl = swiper.rtlTranslate;
        var e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        var kc = e.keyCode || e.charCode;
        var pageUpDown = swiper.params.keyboard.pageUpDown;
        var isPageUp = pageUpDown && kc === 33;
        var isPageDown = pageUpDown && kc === 34;
        var isArrowLeft = kc === 37;
        var isArrowRight = kc === 39;
        var isArrowUp = kc === 38;
        var isArrowDown = kc === 40; // Directions locks
        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return undefined;
        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) return undefined;
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
            var inView = false; // Check that swiper should be inside of visible area of window
            if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) return undefined;
            var $el = swiper.$el;
            var swiperWidth = $el[0].clientWidth;
            var swiperHeight = $el[0].clientHeight;
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var swiperOffset = swiper.$el.offset();
            if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
            var swiperCoord = [
                [
                    swiperOffset.left,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left,
                    swiperOffset.top + swiperHeight
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top + swiperHeight
                ]
            ];
            for(var i = 0; i < swiperCoord.length; i += 1){
                var point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                    inView = true;
                }
            }
            if (!inView) return undefined;
        }
        if (swiper.isHorizontal()) {
            if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
            if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
            if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (isPageDown || isArrowDown) swiper.slideNext();
            if (isPageUp || isArrowUp) swiper.slidePrev();
        }
        swiper.emit('keyPress', kc);
        return undefined;
    },
    enable: function enable() {
        var swiper = this;
        var document = _ssrWindow.getDocument();
        if (swiper.keyboard.enabled) return;
        _domDefault.default(document).on('keydown', swiper.keyboard.handle);
        swiper.keyboard.enabled = true;
    },
    disable: function disable() {
        var swiper = this;
        var document = _ssrWindow.getDocument();
        if (!swiper.keyboard.enabled) return;
        _domDefault.default(document).off('keydown', swiper.keyboard.handle);
        swiper.keyboard.enabled = false;
    }
};
exports.default = {
    name: 'keyboard',
    params: {
        keyboard: {
            enabled: false,
            onlyInViewport: true,
            pageUpDown: true
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            keyboard: _extends({
                enabled: false
            }, Keyboard)
        });
    },
    on: {
        init: function init(swiper) {
            if (swiper.params.keyboard.enabled) swiper.keyboard.enable();
        },
        destroy: function destroy(swiper) {
            if (swiper.keyboard.enabled) swiper.keyboard.disable();
        }
    }
};

},{"ssr-window":"31FIQ","../../utils/dom":"4aX4f","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"leBup":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable consistent-return */ var _ssrWindow = require("ssr-window");
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
function isEventSupported() {
    var document = _ssrWindow.getDocument();
    var eventName = 'onwheel';
    var isSupported = eventName in document;
    if (!isSupported) {
        var element = document.createElement('div');
        element.setAttribute(eventName, 'return;');
        isSupported = typeof element[eventName] === 'function';
    }
    if (!isSupported && document.implementation && document.implementation.hasFeature && // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true) // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
    return isSupported;
}
var Mousewheel = {
    lastScrollTime: _utils.now(),
    lastEventBeforeSnap: undefined,
    recentWheelEvents: [],
    event: function event() {
        var window = _ssrWindow.getWindow();
        if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
        return isEventSupported() ? 'wheel' : 'mousewheel';
    },
    normalize: function normalize(e) {
        // Reasonable defaults
        var PIXEL_STEP = 10;
        var LINE_HEIGHT = 40;
        var PAGE_HEIGHT = 800;
        var sX = 0;
        var sY = 0; // spinX, spinY
        var pX = 0;
        var pY = 0; // pixelX, pixelY
        // Legacy
        if ('detail' in e) sY = e.detail;
        if ('wheelDelta' in e) sY = -e.wheelDelta / 120;
        if ('wheelDeltaY' in e) sY = -e.wheelDeltaY / 120;
        if ('wheelDeltaX' in e) sX = -e.wheelDeltaX / 120;
         // side scrolling on FF with DOMMouseScroll
        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ('deltaY' in e) pY = e.deltaY;
        if ('deltaX' in e) pX = e.deltaX;
        if (e.shiftKey && !pX) {
            // if user scrolls with shift he wants horizontal scroll
            pX = pY;
            pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
        } // Fall-back if spin cannot be determined
        if (pX && !sX) sX = pX < 1 ? -1 : 1;
        if (pY && !sY) sY = pY < 1 ? -1 : 1;
        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
        };
    },
    handleMouseEnter: function handleMouseEnter() {
        var swiper = this;
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
        var swiper = this;
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
    },
    handle: function handle(event1) {
        var e = event1;
        var disableParentSwiper = true;
        var swiper = this;
        if (!swiper.enabled) return;
        var params = swiper.params.mousewheel;
        if (swiper.params.cssMode) e.preventDefault();
        var target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') target = _domDefault.default(swiper.params.mousewheel.eventsTarget);
        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        var delta = 0;
        var rtlFactor = swiper.rtlTranslate ? -1 : 1;
        var data = Mousewheel.normalize(e);
        if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                else return true;
            } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
            else return true;
        } else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        if (delta === 0) return true;
        if (params.invert) delta = -delta; // Get the scroll positions
        var positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
        if (!swiper.params.freeMode) {
            // Register the new event in a variable which stores the relevant data
            var newEvent = {
                time: _utils.now(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event1
            }; // Keep the most recent events
            var recentWheelEvents = swiper.mousewheel.recentWheelEvents;
            if (recentWheelEvents.length >= 2) recentWheelEvents.shift(); // only store the last N events
            var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
            //   If direction has changed or
            //   if the scroll is quicker than the previous one:
            //     Animate the slider.
            // Else (this is the first time the wheel is moved):
            //     Animate the slider.
            if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) swiper.mousewheel.animateSlider(newEvent);
            } else swiper.mousewheel.animateSlider(newEvent);
             // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.
            if (swiper.mousewheel.releaseScroll(newEvent)) return true;
        } else {
            // Freemode or scrollContainer:
            // If we recently snapped after a momentum scroll, then ignore wheel events
            // to give time for the deceleration to finish. Stop ignoring after 500 msecs
            // or if it's a new scroll (larger delta or inverse sign as last event before
            // an end-of-momentum snap).
            var _newEvent = {
                time: _utils.now(),
                delta: Math.abs(delta),
                direction: Math.sign(delta)
            };
            var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
            var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;
            if (!ignoreWheelEvents) {
                swiper.mousewheel.lastEventBeforeSnap = undefined;
                if (swiper.params.loop) swiper.loopFix();
                var position = swiper.getTranslate() + delta * params.sensitivity;
                var wasBeginning = swiper.isBeginning;
                var wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                if (swiper.params.freeModeSticky) {
                    // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                    // the end of a momentum scroll by storing recent (N=15?) wheel events.
                    // 1. do all N events have decreasing or same (absolute value) delta?
                    // 2. did all N events arrive in the last M (M=500?) msecs?
                    // 3. does the earliest event have an (absolute value) delta that's
                    //    at least P (P=1?) larger than the most recent event's delta?
                    // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                    // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                    // Snap immediately and ignore remaining wheel events in this scroll.
                    // See comment above for "remaining wheel events in this scroll" determination.
                    // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                    clearTimeout(swiper.mousewheel.timeout);
                    swiper.mousewheel.timeout = undefined;
                    var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;
                    if (_recentWheelEvents.length >= 15) _recentWheelEvents.shift(); // only store the last N events
                    var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;
                    var firstEvent = _recentWheelEvents[0];
                    _recentWheelEvents.push(_newEvent);
                    if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                    _recentWheelEvents.splice(0);
                    else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
                        // We're at the end of the deceleration of a momentum scroll, so there's no need
                        // to wait for more events. Snap ASAP on the next tick.
                        // Also, because there's some remaining momentum we'll bias the snap in the
                        // direction of the ongoing scroll because it's better UX for the scroll to snap
                        // in the same direction as the scroll instead of reversing to snap.  Therefore,
                        // if it's already scrolled more than 20% in the current direction, keep going.
                        var snapToThreshold = delta > 0 ? 0.8 : 0.2;
                        swiper.mousewheel.lastEventBeforeSnap = _newEvent;
                        _recentWheelEvents.splice(0);
                        swiper.mousewheel.timeout = _utils.nextTick(function() {
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 0); // no delay; move on next tick
                    }
                    if (!swiper.mousewheel.timeout) // if we get here, then we haven't detected the end of a momentum scroll, so
                    // we'll consider a scroll "complete" when there haven't been any wheel events
                    // for 500ms.
                    swiper.mousewheel.timeout = _utils.nextTick(function() {
                        var snapToThreshold = 0.5;
                        swiper.mousewheel.lastEventBeforeSnap = _newEvent;
                        _recentWheelEvents.splice(0);
                        swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                    }, 500);
                } // Emit event
                if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions
                if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
            }
        }
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    },
    animateSlider: function animateSlider(newEvent) {
        var swiper = this;
        var window = _ssrWindow.getWindow();
        if (this.params.mousewheel.thresholdDelta && newEvent.delta < this.params.mousewheel.thresholdDelta) // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
        if (this.params.mousewheel.thresholdTime && _utils.now() - swiper.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) // Prevent if time between scrolls is below configured threshold
        return false;
         // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && _utils.now() - swiper.mousewheel.lastScrollTime < 60) // Return false as a default
        return true;
         // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                swiper.slideNext();
                swiper.emit('scroll', newEvent.raw);
            }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            swiper.emit('scroll', newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time
        swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default
        return false;
    },
    releaseScroll: function releaseScroll(newEvent) {
        var swiper = this;
        var params = swiper.params.mousewheel;
        if (newEvent.direction < 0) {
            if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
            return true;
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
        return true;
        return false;
    },
    enable: function enable() {
        var swiper = this;
        var event1 = Mousewheel.event();
        if (swiper.params.cssMode) {
            swiper.wrapperEl.removeEventListener(event1, swiper.mousewheel.handle);
            return true;
        }
        if (!event1) return false;
        if (swiper.mousewheel.enabled) return false;
        var target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') target = _domDefault.default(swiper.params.mousewheel.eventsTarget);
        target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
        target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
        target.on(event1, swiper.mousewheel.handle);
        swiper.mousewheel.enabled = true;
        return true;
    },
    disable: function disable() {
        var swiper = this;
        var event1 = Mousewheel.event();
        if (swiper.params.cssMode) {
            swiper.wrapperEl.addEventListener(event1, swiper.mousewheel.handle);
            return true;
        }
        if (!event1) return false;
        if (!swiper.mousewheel.enabled) return false;
        var target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') target = _domDefault.default(swiper.params.mousewheel.eventsTarget);
        target.off(event1, swiper.mousewheel.handle);
        swiper.mousewheel.enabled = false;
        return true;
    }
};
exports.default = {
    name: 'mousewheel',
    params: {
        mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarget: 'container',
            thresholdDelta: null,
            thresholdTime: null
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            mousewheel: {
                enabled: false,
                lastScrollTime: _utils.now(),
                lastEventBeforeSnap: undefined,
                recentWheelEvents: [],
                enable: Mousewheel.enable,
                disable: Mousewheel.disable,
                handle: Mousewheel.handle,
                handleMouseEnter: Mousewheel.handleMouseEnter,
                handleMouseLeave: Mousewheel.handleMouseLeave,
                animateSlider: Mousewheel.animateSlider,
                releaseScroll: Mousewheel.releaseScroll
            }
        });
    },
    on: {
        init: function init(swiper) {
            if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) swiper.mousewheel.disable();
            if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
        },
        destroy: function destroy(swiper) {
            if (swiper.params.cssMode) swiper.mousewheel.enable();
            if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
        }
    }
};

},{"ssr-window":"31FIQ","../../utils/dom":"4aX4f","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"d17FH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
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
var Navigation = {
    toggleEl: function toggleEl($el, disabled) {
        $el[disabled ? 'addClass' : 'removeClass'](this.params.navigation.disabledClass);
        if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
    },
    update: function update() {
        // Update Navigation Buttons
        var swiper = this;
        var params = swiper.params.navigation;
        var toggleEl1 = swiper.navigation.toggleEl;
        if (swiper.params.loop) return;
        var _swiper$navigation = swiper.navigation, $nextEl = _swiper$navigation.$nextEl, $prevEl = _swiper$navigation.$prevEl;
        if ($prevEl && $prevEl.length > 0) {
            if (swiper.isBeginning) toggleEl1($prevEl, true);
            else toggleEl1($prevEl, false);
            if (swiper.params.watchOverflow && swiper.enabled) $prevEl[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
        if ($nextEl && $nextEl.length > 0) {
            if (swiper.isEnd) toggleEl1($nextEl, true);
            else toggleEl1($nextEl, false);
            if (swiper.params.watchOverflow && swiper.enabled) $nextEl[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
    },
    onPrevClick: function onPrevClick(e) {
        var swiper = this;
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop) return;
        swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
        var swiper = this;
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop) return;
        swiper.slideNext();
    },
    init: function init() {
        var swiper = this;
        var params = swiper.params.navigation;
        swiper.params.navigation = _utils.createElementIfNotDefined(swiper.$el, swiper.params.navigation, swiper.params.createElements, {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev'
        });
        if (!(params.nextEl || params.prevEl)) return;
        var $nextEl;
        var $prevEl;
        if (params.nextEl) {
            $nextEl = _domDefault.default(params.nextEl);
            if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) $nextEl = swiper.$el.find(params.nextEl);
        }
        if (params.prevEl) {
            $prevEl = _domDefault.default(params.prevEl);
            if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) $prevEl = swiper.$el.find(params.prevEl);
        }
        if ($nextEl && $nextEl.length > 0) $nextEl.on('click', swiper.navigation.onNextClick);
        if ($prevEl && $prevEl.length > 0) $prevEl.on('click', swiper.navigation.onPrevClick);
        _utils.extend(swiper.navigation, {
            $nextEl: $nextEl,
            nextEl: $nextEl && $nextEl[0],
            $prevEl: $prevEl,
            prevEl: $prevEl && $prevEl[0]
        });
        if (!swiper.enabled) {
            if ($nextEl) $nextEl.addClass(params.lockClass);
            if ($prevEl) $prevEl.addClass(params.lockClass);
        }
    },
    destroy: function destroy() {
        var swiper = this;
        var _swiper$navigation2 = swiper.navigation, $nextEl = _swiper$navigation2.$nextEl, $prevEl = _swiper$navigation2.$prevEl;
        if ($nextEl && $nextEl.length) {
            $nextEl.off('click', swiper.navigation.onNextClick);
            $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }
        if ($prevEl && $prevEl.length) {
            $prevEl.off('click', swiper.navigation.onPrevClick);
            $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
    }
};
exports.default = {
    name: 'navigation',
    params: {
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock'
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            navigation: _extends({
            }, Navigation)
        });
    },
    on: {
        init: function init(swiper) {
            swiper.navigation.init();
            swiper.navigation.update();
        },
        toEdge: function toEdge(swiper) {
            swiper.navigation.update();
        },
        fromEdge: function fromEdge(swiper) {
            swiper.navigation.update();
        },
        destroy: function destroy(swiper) {
            swiper.navigation.destroy();
        },
        'enable disable': function enableDisable(swiper) {
            var _swiper$navigation3 = swiper.navigation, $nextEl = _swiper$navigation3.$nextEl, $prevEl = _swiper$navigation3.$prevEl;
            if ($nextEl) $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
            if ($prevEl) $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
        },
        click: function click(swiper, e) {
            var _swiper$navigation4 = swiper.navigation, $nextEl = _swiper$navigation4.$nextEl, $prevEl = _swiper$navigation4.$prevEl;
            var targetEl = e.target;
            if (swiper.params.navigation.hideOnClick && !_domDefault.default(targetEl).is($prevEl) && !_domDefault.default(targetEl).is($nextEl)) {
                if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                var isHidden;
                if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
                else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                if (isHidden === true) swiper.emit('navigationShow');
                else swiper.emit('navigationHide');
                if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
            }
        }
    }
};

},{"../../utils/dom":"4aX4f","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3C5f4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
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
var Pagination = {
    update: function update() {
        // Render || Update Pagination bullets/items
        var swiper = this;
        var rtl = swiper.rtl;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el; // Current/Total
        var current;
        var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
            current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
            if (current > slidesLength - 1 - swiper.loopedSlides * 2) current -= slidesLength - swiper.loopedSlides * 2;
            if (current > total - 1) current -= total;
            if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
        } else if (typeof swiper.snapIndex !== 'undefined') current = swiper.snapIndex;
        else current = swiper.activeIndex || 0;
         // Types
        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
            var bullets = swiper.pagination.bullets;
            var firstIndex;
            var lastIndex;
            var midIndex;
            if (params.dynamicBullets) {
                swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");
                if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                    swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;
                    if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
                    else if (swiper.pagination.dynamicBulletIndex < 0) swiper.pagination.dynamicBulletIndex = 0;
                }
                firstIndex = current - swiper.pagination.dynamicBulletIndex;
                lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
            }
            bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");
            if ($el.length > 1) bullets.each(function(bullet) {
                var $bullet = _domDefault.default(bullet);
                var bulletIndex = $bullet.index();
                if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(params.bulletActiveClass + "-main");
                    if (bulletIndex === firstIndex) $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                    if (bulletIndex === lastIndex) $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                }
            });
            else {
                var $bullet = bullets.eq(current);
                var bulletIndex = $bullet.index();
                $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    var $firstDisplayedBullet = bullets.eq(firstIndex);
                    var $lastDisplayedBullet = bullets.eq(lastIndex);
                    for(var i = firstIndex; i <= lastIndex; i += 1)bullets.eq(i).addClass(params.bulletActiveClass + "-main");
                    if (swiper.params.loop) {
                        if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                            for(var _i = params.dynamicMainBullets; _i >= 0; _i -= 1)bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
                            bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
                        } else {
                            $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                            $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                        }
                    } else {
                        $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                        $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                    }
                }
            }
            if (params.dynamicBullets) {
                var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
                var offsetProp = rtl ? 'right' : 'left';
                bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
            }
        }
        if (params.type === 'fraction') {
            $el.find(_utils.classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
            $el.find(_utils.classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
        }
        if (params.type === 'progressbar') {
            var progressbarDirection;
            if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
            else progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
            var scale = (current + 1) / total;
            var scaleX = 1;
            var scaleY = 1;
            if (progressbarDirection === 'horizontal') scaleX = scale;
            else scaleY = scale;
            $el.find(_utils.classesToSelector(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
        }
        if (params.type === 'custom' && params.renderCustom) {
            $el.html(params.renderCustom(swiper, current + 1, total));
            swiper.emit('paginationRender', $el[0]);
        } else swiper.emit('paginationUpdate', $el[0]);
        if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function render() {
        // Render Container
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el;
        var paginationHTML = '';
        if (params.type === 'bullets') {
            var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.freeMode && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
            for(var i = 0; i < numberOfBullets; i += 1)if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            else paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
            $el.html(paginationHTML);
            swiper.pagination.bullets = $el.find(_utils.classesToSelector(params.bulletClass));
        }
        if (params.type === 'fraction') {
            if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
            else paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
            $el.html(paginationHTML);
        }
        if (params.type === 'progressbar') {
            if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
            else paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
            $el.html(paginationHTML);
        }
        if (params.type !== 'custom') swiper.emit('paginationRender', swiper.pagination.$el[0]);
    },
    init: function init() {
        var swiper = this;
        swiper.params.pagination = _utils.createElementIfNotDefined(swiper.$el, swiper.params.pagination, swiper.params.createElements, {
            el: 'swiper-pagination'
        });
        var params = swiper.params.pagination;
        if (!params.el) return;
        var $el = _domDefault.default(params.el);
        if ($el.length === 0) return;
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) $el = swiper.$el.find(params.el);
        if (params.type === 'bullets' && params.clickable) $el.addClass(params.clickableClass);
        $el.addClass(params.modifierClass + params.type);
        if (params.type === 'bullets' && params.dynamicBullets) {
            $el.addClass("" + params.modifierClass + params.type + "-dynamic");
            swiper.pagination.dynamicBulletIndex = 0;
            if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
        }
        if (params.type === 'progressbar' && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
        if (params.clickable) $el.on('click', _utils.classesToSelector(params.bulletClass), function onClick(e) {
            e.preventDefault();
            var index = _domDefault.default(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
        });
        _utils.extend(swiper.pagination, {
            $el: $el,
            el: $el[0]
        });
        if (!swiper.enabled) $el.addClass(params.lockClass);
    },
    destroy: function destroy() {
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
        if (params.clickable) $el.off('click', _utils.classesToSelector(params.bulletClass));
    }
};
exports.default = {
    name: 'pagination',
    params: {
        pagination: {
            el: null,
            bulletElement: 'span',
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: 'bullets',
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: function formatFractionCurrent(number) {
                return number;
            },
            formatFractionTotal: function formatFractionTotal(number) {
                return number;
            },
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            modifierClass: 'swiper-pagination-',
            // NEW
            currentClass: 'swiper-pagination-current',
            totalClass: 'swiper-pagination-total',
            hiddenClass: 'swiper-pagination-hidden',
            progressbarFillClass: 'swiper-pagination-progressbar-fill',
            progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
            clickableClass: 'swiper-pagination-clickable',
            // NEW
            lockClass: 'swiper-pagination-lock'
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            pagination: _extends({
                dynamicBulletIndex: 0
            }, Pagination)
        });
    },
    on: {
        init: function init(swiper) {
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
        },
        activeIndexChange: function activeIndexChange(swiper) {
            if (swiper.params.loop) swiper.pagination.update();
            else if (typeof swiper.snapIndex === 'undefined') swiper.pagination.update();
        },
        snapIndexChange: function snapIndexChange(swiper) {
            if (!swiper.params.loop) swiper.pagination.update();
        },
        slidesLengthChange: function slidesLengthChange(swiper) {
            if (swiper.params.loop) {
                swiper.pagination.render();
                swiper.pagination.update();
            }
        },
        snapGridLengthChange: function snapGridLengthChange(swiper) {
            if (!swiper.params.loop) {
                swiper.pagination.render();
                swiper.pagination.update();
            }
        },
        destroy: function destroy(swiper) {
            swiper.pagination.destroy();
        },
        'enable disable': function enableDisable(swiper) {
            var $el = swiper.pagination.$el;
            if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
        },
        click: function click(swiper, e) {
            var targetEl = e.target;
            if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !_domDefault.default(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
                if (isHidden === true) swiper.emit('paginationShow');
                else swiper.emit('paginationHide');
                swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
            }
        }
    }
};

},{"../../utils/dom":"4aX4f","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bck8q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
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
var Scrollbar = {
    setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        var scrollbar = swiper.scrollbar, rtl = swiper.rtlTranslate, progress = swiper.progress;
        var dragSize = scrollbar.dragSize, trackSize = scrollbar.trackSize, $dragEl = scrollbar.$dragEl, $el = scrollbar.$el;
        var params = swiper.params.scrollbar;
        var newSize = dragSize;
        var newPos = (trackSize - dragSize) * progress;
        if (rtl) {
            newPos = -newPos;
            if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
            } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
        } else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
        } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
        if (swiper.isHorizontal()) {
            $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
            $dragEl[0].style.width = newSize + "px";
        } else {
            $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
            $dragEl[0].style.height = newSize + "px";
        }
        if (params.hide) {
            clearTimeout(swiper.scrollbar.timeout);
            $el[0].style.opacity = 1;
            swiper.scrollbar.timeout = setTimeout(function() {
                $el[0].style.opacity = 0;
                $el.transition(400);
            }, 1000);
        }
    },
    setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        var scrollbar = swiper.scrollbar;
        var $dragEl = scrollbar.$dragEl, $el = scrollbar.$el;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        var divider = swiper.size / swiper.virtualSize;
        var moveDivider = divider * (trackSize / swiper.size);
        var dragSize;
        if (swiper.params.scrollbar.dragSize === 'auto') dragSize = trackSize * divider;
        else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        if (swiper.isHorizontal()) $dragEl[0].style.width = dragSize + "px";
        else $dragEl[0].style.height = dragSize + "px";
        if (divider >= 1) $el[0].style.display = 'none';
        else $el[0].style.display = '';
        if (swiper.params.scrollbar.hide) $el[0].style.opacity = 0;
        _utils.extend(scrollbar, {
            trackSize: trackSize,
            divider: divider,
            moveDivider: moveDivider,
            dragSize: dragSize
        });
        if (swiper.params.watchOverflow && swiper.enabled) scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    },
    getPointerPosition: function getPointerPosition(e) {
        var swiper = this;
        if (swiper.isHorizontal()) return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
    },
    setDragPosition: function setDragPosition(e) {
        var swiper = this;
        var scrollbar = swiper.scrollbar, rtl = swiper.rtlTranslate;
        var $el = scrollbar.$el, dragSize = scrollbar.dragSize, trackSize = scrollbar.trackSize, dragStartPos = scrollbar.dragStartPos;
        var positionRatio;
        positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) positionRatio = 1 - positionRatio;
        var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
        var swiper = this;
        var params = swiper.params.scrollbar;
        var scrollbar = swiper.scrollbar, $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el, $dragEl = scrollbar.$dragEl;
        swiper.scrollbar.isTouched = true;
        swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        scrollbar.setDragPosition(e);
        clearTimeout(swiper.scrollbar.dragTimeout);
        $el.transition(0);
        if (params.hide) $el.css('opacity', 1);
        if (swiper.params.cssMode) swiper.$wrapperEl.css('scroll-snap-type', 'none');
        swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function onDragMove(e) {
        var swiper = this;
        var scrollbar = swiper.scrollbar, $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el, $dragEl = scrollbar.$dragEl;
        if (!swiper.scrollbar.isTouched) return;
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        scrollbar.setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function onDragEnd(e) {
        var swiper = this;
        var params = swiper.params.scrollbar;
        var scrollbar = swiper.scrollbar, $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el;
        if (!swiper.scrollbar.isTouched) return;
        swiper.scrollbar.isTouched = false;
        if (swiper.params.cssMode) {
            swiper.$wrapperEl.css('scroll-snap-type', '');
            $wrapperEl.transition('');
        }
        if (params.hide) {
            clearTimeout(swiper.scrollbar.dragTimeout);
            swiper.scrollbar.dragTimeout = _utils.nextTick(function() {
                $el.css('opacity', 0);
                $el.transition(400);
            }, 1000);
        }
        swiper.emit('scrollbarDragEnd', e);
        if (params.snapOnRelease) swiper.slideToClosest();
    },
    enableDraggable: function enableDraggable() {
        var swiper = this;
        if (!swiper.params.scrollbar.el) return;
        var document = _ssrWindow.getDocument();
        var scrollbar = swiper.scrollbar, touchEventsTouch = swiper.touchEventsTouch, touchEventsDesktop = swiper.touchEventsDesktop, params = swiper.params, support = swiper.support;
        var $el = scrollbar.$el;
        var target = $el[0];
        var activeListener = support.passiveListener && params.passiveListeners ? {
            passive: false,
            capture: false
        } : false;
        var passiveListener = support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (!target) return;
        if (!support.touch) {
            target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
            document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
            document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
        } else {
            target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
            target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
            target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
    },
    disableDraggable: function disableDraggable() {
        var swiper = this;
        if (!swiper.params.scrollbar.el) return;
        var document = _ssrWindow.getDocument();
        var scrollbar = swiper.scrollbar, touchEventsTouch = swiper.touchEventsTouch, touchEventsDesktop = swiper.touchEventsDesktop, params = swiper.params, support = swiper.support;
        var $el = scrollbar.$el;
        var target = $el[0];
        var activeListener = support.passiveListener && params.passiveListeners ? {
            passive: false,
            capture: false
        } : false;
        var passiveListener = support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (!target) return;
        if (!support.touch) {
            target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
            document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
            document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
        } else {
            target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
            target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
            target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
    },
    init: function init() {
        var swiper = this;
        var scrollbar = swiper.scrollbar, $swiperEl = swiper.$el;
        swiper.params.scrollbar = _utils.createElementIfNotDefined($swiperEl, swiper.params.scrollbar, swiper.params.createElements, {
            el: 'swiper-scrollbar'
        });
        var params = swiper.params.scrollbar;
        if (!params.el) return;
        var $el = _domDefault.default(params.el);
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) $el = $swiperEl.find(params.el);
        var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);
        if ($dragEl.length === 0) {
            $dragEl = _domDefault.default("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
            $el.append($dragEl);
        }
        _utils.extend(scrollbar, {
            $el: $el,
            el: $el[0],
            $dragEl: $dragEl,
            dragEl: $dragEl[0]
        });
        if (params.draggable) scrollbar.enableDraggable();
        if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    },
    destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.disableDraggable();
    }
};
exports.default = {
    name: 'scrollbar',
    params: {
        scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag'
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            scrollbar: _extends({
                isTouched: false,
                timeout: null,
                dragTimeout: null
            }, Scrollbar)
        });
    },
    on: {
        init: function init(swiper) {
            swiper.scrollbar.init();
            swiper.scrollbar.updateSize();
            swiper.scrollbar.setTranslate();
        },
        update: function update(swiper) {
            swiper.scrollbar.updateSize();
        },
        resize: function resize(swiper) {
            swiper.scrollbar.updateSize();
        },
        observerUpdate: function observerUpdate(swiper) {
            swiper.scrollbar.updateSize();
        },
        setTranslate: function setTranslate(swiper) {
            swiper.scrollbar.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
            swiper.scrollbar.setTransition(duration);
        },
        'enable disable': function enableDisable(swiper) {
            var $el = swiper.scrollbar.$el;
            if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
        },
        destroy: function destroy(swiper) {
            swiper.scrollbar.destroy();
        }
    }
};

},{"ssr-window":"31FIQ","../../utils/dom":"4aX4f","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"1Rna3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
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
var Parallax = {
    setTransform: function setTransform(el, progress) {
        var swiper = this;
        var rtl = swiper.rtl;
        var $el = _domDefault.default(el);
        var rtlFactor = rtl ? -1 : 1;
        var p = $el.attr('data-swiper-parallax') || '0';
        var x = $el.attr('data-swiper-parallax-x');
        var y = $el.attr('data-swiper-parallax-y');
        var scale = $el.attr('data-swiper-parallax-scale');
        var opacity = $el.attr('data-swiper-parallax-opacity');
        if (x || y) {
            x = x || '0';
            y = y || '0';
        } else if (swiper.isHorizontal()) {
            x = p;
            y = '0';
        } else {
            y = p;
            x = '0';
        }
        if (x.indexOf('%') >= 0) x = parseInt(x, 10) * progress * rtlFactor + "%";
        else x = x * progress * rtlFactor + "px";
        if (y.indexOf('%') >= 0) y = parseInt(y, 10) * progress + "%";
        else y = y * progress + "px";
        if (typeof opacity !== 'undefined' && opacity !== null) {
            var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
            $el[0].style.opacity = currentOpacity;
        }
        if (typeof scale === 'undefined' || scale === null) $el.transform("translate3d(" + x + ", " + y + ", 0px)");
        else {
            var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
            $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
        }
    },
    setTranslate: function setTranslate() {
        var swiper = this;
        var $el = swiper.$el, slides = swiper.slides, progress = swiper.progress, snapGrid = swiper.snapGrid;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(el) {
            swiper.parallax.setTransform(el, progress);
        });
        slides.each(function(slideEl, slideIndex) {
            var slideProgress = slideEl.progress;
            if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            _domDefault.default(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(el) {
                swiper.parallax.setTransform(el, slideProgress);
            });
        });
    },
    setTransition: function setTransition(duration) {
        if (duration === void 0) duration = this.params.speed;
        var swiper = this;
        var $el = swiper.$el;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function(parallaxEl) {
            var $parallaxEl = _domDefault.default(parallaxEl);
            var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
            if (duration === 0) parallaxDuration = 0;
            $parallaxEl.transition(parallaxDuration);
        });
    }
};
exports.default = {
    name: 'parallax',
    params: {
        parallax: {
            enabled: false
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            parallax: _extends({
            }, Parallax)
        });
    },
    on: {
        beforeInit: function beforeInit(swiper) {
            if (!swiper.params.parallax.enabled) return;
            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
        },
        init: function init(swiper) {
            if (!swiper.params.parallax.enabled) return;
            swiper.parallax.setTranslate();
        },
        setTranslate: function setTranslate(swiper) {
            if (!swiper.params.parallax.enabled) return;
            swiper.parallax.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
            if (!swiper.params.parallax.enabled) return;
            swiper.parallax.setTransition(duration);
        }
    }
};

},{"../../utils/dom":"4aX4f","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"d07n0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
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
var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        var x1 = e.targetTouches[0].pageX;
        var y1 = e.targetTouches[0].pageY;
        var x2 = e.targetTouches[1].pageX;
        var y2 = e.targetTouches[1].pageY;
        var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
        var swiper = this;
        var support = swiper.support;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
        if (!support.gestures) {
            if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) return;
            zoom.fakeGestureTouched = true;
            gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
        }
        if (!gesture.$slideEl || !gesture.$slideEl.length) {
            gesture.$slideEl = _domDefault.default(e.target).closest("." + swiper.params.slideClass);
            if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
            gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
            gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            if (gesture.$imageWrapEl.length === 0) {
                gesture.$imageEl = undefined;
                return;
            }
        }
        if (gesture.$imageEl) gesture.$imageEl.transition(0);
        swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
        var swiper = this;
        var support = swiper.support;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        if (!support.gestures) {
            if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) return;
            zoom.fakeGestureMoved = true;
            gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            if (e.type === 'gesturechange') zoom.onGestureStart(e);
            return;
        }
        if (support.gestures) zoom.scale = e.scale * zoom.currentScale;
        else zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
        if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
        if (zoom.scale < params.minRatio) zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
        gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    },
    onGestureEnd: function onGestureEnd(e) {
        var swiper = this;
        var device = swiper.device;
        var support = swiper.support;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        if (!support.gestures) {
            if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) return;
            if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) return;
            zoom.fakeGestureTouched = false;
            zoom.fakeGestureMoved = false;
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
        zoom.currentScale = zoom.scale;
        zoom.isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
    },
    onTouchStart: function onTouchStart(e) {
        var swiper = this;
        var device = swiper.device;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture, image = zoom.image;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture, image = zoom.image, velocity = zoom.velocity;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;
        if (!image.isMoved) {
            image.width = gesture.$imageEl[0].offsetWidth;
            image.height = gesture.$imageEl[0].offsetHeight;
            image.startX = _utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
            image.startY = _utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
            gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
            gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
            gesture.$imageWrapEl.transition(0);
        } // Define if we need image drag
        var scaledWidth = image.width * zoom.scale;
        var scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        if (!image.isMoved && !zoom.isScaling) {
            if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                image.isTouched = false;
                return;
            }
            if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                image.isTouched = false;
                return;
            }
        }
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
        if (image.currentX < image.minX) image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
        if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
        if (image.currentY < image.minY) image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
        if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
         // Velocity
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
    },
    onTouchEnd: function onTouchEnd() {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture, image = zoom.image, velocity = zoom.velocity;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
        }
        image.isTouched = false;
        image.isMoved = false;
        var momentumDurationX = 300;
        var momentumDurationY = 300;
        var momentumDistanceX = velocity.x * momentumDurationX;
        var newPositionX = image.currentX + momentumDistanceX;
        var momentumDistanceY = velocity.y * momentumDurationY;
        var newPositionY = image.currentY + momentumDistanceY; // Fix duration
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag
        var scaledWidth = image.width * zoom.scale;
        var scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
    },
    onTransitionEnd: function onTransitionEnd() {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
            if (gesture.$imageEl) gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
            if (gesture.$imageWrapEl) gesture.$imageWrapEl.transform('translate3d(0,0,0)');
            zoom.scale = 1;
            zoom.currentScale = 1;
            gesture.$slideEl = undefined;
            gesture.$imageEl = undefined;
            gesture.$imageWrapEl = undefined;
        }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
        var swiper = this;
        var zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) // Zoom Out
        zoom.out();
        else // Zoom In
        zoom.in(e);
    },
    in: function _in(e) {
        var swiper = this;
        var window = _ssrWindow.getWindow();
        var zoom = swiper.zoom;
        var params = swiper.params.zoom;
        var gesture = zoom.gesture, image = zoom.image;
        if (!gesture.$slideEl) {
            if (e && e.target) gesture.$slideEl = _domDefault.default(e.target).closest("." + swiper.params.slideClass);
            if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
                else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            }
            gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
            gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        gesture.$slideEl.addClass("" + params.zoomedSlideClass);
        var touchX;
        var touchY;
        var offsetX;
        var offsetY;
        var diffX;
        var diffY;
        var translateX;
        var translateY;
        var imageWidth;
        var imageHeight;
        var scaledWidth;
        var scaledHeight;
        var translateMinX;
        var translateMinY;
        var translateMaxX;
        var translateMaxY;
        var slideWidth;
        var slideHeight;
        if (typeof image.touchesStart.x === 'undefined' && e) {
            touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
            touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
        }
        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (e) {
            slideWidth = gesture.$slideEl[0].offsetWidth;
            slideHeight = gesture.$slideEl[0].offsetHeight;
            offsetX = gesture.$slideEl.offset().left + window.scrollX;
            offsetY = gesture.$slideEl.offset().top + window.scrollY;
            diffX = offsetX + slideWidth / 2 - touchX;
            diffY = offsetY + slideHeight / 2 - touchY;
            imageWidth = gesture.$imageEl[0].offsetWidth;
            imageHeight = gesture.$imageEl[0].offsetHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            translateX = diffX * zoom.scale;
            translateY = diffY * zoom.scale;
            if (translateX < translateMinX) translateX = translateMinX;
            if (translateX > translateMaxX) translateX = translateMaxX;
            if (translateY < translateMinY) translateY = translateMinY;
            if (translateY > translateMaxY) translateY = translateMaxY;
        } else {
            translateX = 0;
            translateY = 0;
        }
        gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
        gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    },
    out: function out() {
        var swiper = this;
        var zoom = swiper.zoom;
        var params = swiper.params.zoom;
        var gesture = zoom.gesture;
        if (!gesture.$slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
            else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
            gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        zoom.scale = 1;
        zoom.currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
        gesture.$slideEl = undefined;
    },
    toggleGestures: function toggleGestures(method) {
        var swiper = this;
        var zoom = swiper.zoom;
        var selector = zoom.slideSelector, passive = zoom.passiveListener;
        swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
        swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
        swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
    },
    enableGestures: function enableGestures() {
        if (this.zoom.gesturesEnabled) return;
        this.zoom.gesturesEnabled = true;
        this.zoom.toggleGestures('on');
    },
    disableGestures: function disableGestures() {
        if (!this.zoom.gesturesEnabled) return;
        this.zoom.gesturesEnabled = false;
        this.zoom.toggleGestures('off');
    },
    // Attach/Detach Events
    enable: function enable() {
        var swiper = this;
        var support = swiper.support;
        var zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        var activeListenerWithCapture = support.passiveListener ? {
            passive: false,
            capture: true
        } : true;
        var slideSelector = "." + swiper.params.slideClass;
        swiper.zoom.passiveListener = passiveListener;
        swiper.zoom.slideSelector = slideSelector; // Scale image
        if (support.gestures) {
            swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
            if (swiper.touchEvents.cancel) swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
        } // Move image
        swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
    },
    disable: function disable() {
        var swiper = this;
        var zoom = swiper.zoom;
        if (!zoom.enabled) return;
        var support = swiper.support;
        swiper.zoom.enabled = false;
        var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        var activeListenerWithCapture = support.passiveListener ? {
            passive: false,
            capture: true
        } : true;
        var slideSelector = "." + swiper.params.slideClass; // Scale image
        if (support.gestures) {
            swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
            if (swiper.touchEvents.cancel) swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
        } // Move image
        swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
    }
};
exports.default = {
    name: 'zoom',
    params: {
        zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed'
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            zoom: _extends({
                enabled: false,
                scale: 1,
                currentScale: 1,
                isScaling: false,
                gesture: {
                    $slideEl: undefined,
                    slideWidth: undefined,
                    slideHeight: undefined,
                    $imageEl: undefined,
                    $imageWrapEl: undefined,
                    maxRatio: 3
                },
                image: {
                    isTouched: undefined,
                    isMoved: undefined,
                    currentX: undefined,
                    currentY: undefined,
                    minX: undefined,
                    minY: undefined,
                    maxX: undefined,
                    maxY: undefined,
                    width: undefined,
                    height: undefined,
                    startX: undefined,
                    startY: undefined,
                    touchesStart: {
                    },
                    touchesCurrent: {
                    }
                },
                velocity: {
                    x: undefined,
                    y: undefined,
                    prevPositionX: undefined,
                    prevPositionY: undefined,
                    prevTime: undefined
                }
            }, Zoom)
        });
        var scale = 1;
        Object.defineProperty(swiper.zoom, 'scale', {
            get: function get() {
                return scale;
            },
            set: function set(value) {
                if (scale !== value) {
                    var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
                    var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
                    swiper.emit('zoomChange', value, imageEl, slideEl);
                }
                scale = value;
            }
        });
    },
    on: {
        init: function init(swiper) {
            if (swiper.params.zoom.enabled) swiper.zoom.enable();
        },
        destroy: function destroy(swiper) {
            swiper.zoom.disable();
        },
        touchStart: function touchStart(swiper, e) {
            if (!swiper.zoom.enabled) return;
            swiper.zoom.onTouchStart(e);
        },
        touchEnd: function touchEnd(swiper, e) {
            if (!swiper.zoom.enabled) return;
            swiper.zoom.onTouchEnd(e);
        },
        doubleTap: function doubleTap(swiper, e) {
            if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) swiper.zoom.toggle(e);
        },
        transitionEnd: function transitionEnd(swiper) {
            if (swiper.zoom.enabled && swiper.params.zoom.enabled) swiper.zoom.onTransitionEnd();
        },
        slideChange: function slideChange(swiper) {
            if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) swiper.zoom.onTransitionEnd();
        }
    }
};

},{"ssr-window":"31FIQ","../../utils/dom":"4aX4f","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9ThoQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
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
var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
        if (loadInDuplicate === void 0) loadInDuplicate = true;
        var swiper = this;
        var params = swiper.params.lazy;
        if (typeof index === 'undefined') return;
        if (swiper.slides.length === 0) return;
        var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
        var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");
        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) $images.push($slideEl[0]);
        if ($images.length === 0) return;
        $images.each(function(imageEl) {
            var $imageEl = _domDefault.default(imageEl);
            $imageEl.addClass(params.loadingClass);
            var background = $imageEl.attr('data-background');
            var src = $imageEl.attr('data-src');
            var srcset = $imageEl.attr('data-srcset');
            var sizes = $imageEl.attr('data-sizes');
            var $pictureEl = $imageEl.parent('picture');
            swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function() {
                if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
                if (background) {
                    $imageEl.css('background-image', "url(\"" + background + "\")");
                    $imageEl.removeAttr('data-background');
                } else {
                    if (srcset) {
                        $imageEl.attr('srcset', srcset);
                        $imageEl.removeAttr('data-srcset');
                    }
                    if (sizes) {
                        $imageEl.attr('sizes', sizes);
                        $imageEl.removeAttr('data-sizes');
                    }
                    if ($pictureEl.length) $pictureEl.children('source').each(function(sourceEl) {
                        var $source = _domDefault.default(sourceEl);
                        if ($source.attr('data-srcset')) {
                            $source.attr('srcset', $source.attr('data-srcset'));
                            $source.removeAttr('data-srcset');
                        }
                    });
                    if (src) {
                        $imageEl.attr('src', src);
                        $imageEl.removeAttr('data-src');
                    }
                }
                $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                $slideEl.find("." + params.preloaderClass).remove();
                if (swiper.params.loop && loadInDuplicate) {
                    var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
                    if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                        var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
                        swiper.lazy.loadInSlide(originalSlide.index(), false);
                    } else {
                        var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
                        swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
                    }
                }
                swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
                if (swiper.params.autoHeight) swiper.updateAutoHeight();
            });
            swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
    },
    load: function load() {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl, swiperParams = swiper.params, slides = swiper.slides, activeIndex = swiper.activeIndex;
        var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        var params = swiperParams.lazy;
        var slidesPerView = swiperParams.slidesPerView;
        if (slidesPerView === 'auto') slidesPerView = 0;
        function slideExist(index) {
            if (isVirtual) {
                if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) return true;
            } else if (slides[index]) return true;
            return false;
        }
        function slideIndex(slideEl) {
            if (isVirtual) return _domDefault.default(slideEl).attr('data-swiper-slide-index');
            return _domDefault.default(slideEl).index();
        }
        if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
        if (swiper.params.watchSlidesVisibility) $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function(slideEl) {
            var index = isVirtual ? _domDefault.default(slideEl).attr('data-swiper-slide-index') : _domDefault.default(slideEl).index();
            swiper.lazy.loadInSlide(index);
        });
        else if (slidesPerView > 1) {
            for(var i = activeIndex; i < activeIndex + slidesPerView; i += 1)if (slideExist(i)) swiper.lazy.loadInSlide(i);
        } else swiper.lazy.loadInSlide(activeIndex);
        if (params.loadPrevNext) {
            if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                var amount = params.loadPrevNextAmount;
                var spv = slidesPerView;
                var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
                for(var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1)if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
                 // Prev Slides
                for(var _i2 = minIndex; _i2 < activeIndex; _i2 += 1)if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
            } else {
                var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
                if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
                var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
                if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
            }
        }
    },
    checkInViewOnLoad: function checkInViewOnLoad() {
        var window = _ssrWindow.getWindow();
        var swiper = this;
        if (!swiper || swiper.destroyed) return;
        var $scrollElement = swiper.params.lazy.scrollingElement ? _domDefault.default(swiper.params.lazy.scrollingElement) : _domDefault.default(window);
        var isWindow = $scrollElement[0] === window;
        var scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
        var scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
        var swiperOffset = swiper.$el.offset();
        var rtl = swiper.rtlTranslate;
        var inView = false;
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        var swiperCoord = [
            [
                swiperOffset.left,
                swiperOffset.top
            ],
            [
                swiperOffset.left + swiper.width,
                swiperOffset.top
            ],
            [
                swiperOffset.left,
                swiperOffset.top + swiper.height
            ],
            [
                swiperOffset.left + swiper.width,
                swiperOffset.top + swiper.height
            ]
        ];
        for(var i = 0; i < swiperCoord.length; i += 1){
            var point = swiperCoord[i];
            if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                inView = true;
            }
        }
        var passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (inView) {
            swiper.lazy.load();
            $scrollElement.off('scroll', swiper.lazy.checkInViewOnLoad, passiveListener);
        } else if (!swiper.lazy.scrollHandlerAttached) {
            swiper.lazy.scrollHandlerAttached = true;
            $scrollElement.on('scroll', swiper.lazy.checkInViewOnLoad, passiveListener);
        }
    }
};
exports.default = {
    name: 'lazy',
    params: {
        lazy: {
            checkInView: false,
            enabled: false,
            loadPrevNext: false,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: false,
            scrollingElement: '',
            elementClass: 'swiper-lazy',
            loadingClass: 'swiper-lazy-loading',
            loadedClass: 'swiper-lazy-loaded',
            preloaderClass: 'swiper-lazy-preloader'
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            lazy: _extends({
                initialImageLoaded: false
            }, Lazy)
        });
    },
    on: {
        beforeInit: function beforeInit(swiper) {
            if (swiper.params.lazy.enabled && swiper.params.preloadImages) swiper.params.preloadImages = false;
        },
        init: function init(swiper) {
            if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
                if (swiper.params.lazy.checkInView) swiper.lazy.checkInViewOnLoad();
                else swiper.lazy.load();
            }
        },
        scroll: function scroll(swiper) {
            if (swiper.params.freeMode && !swiper.params.freeModeSticky) swiper.lazy.load();
        },
        'scrollbarDragMove resize _freeModeNoMomentumRelease': function lazyLoad(swiper) {
            if (swiper.params.lazy.enabled) swiper.lazy.load();
        },
        transitionStart: function transitionStart(swiper) {
            if (swiper.params.lazy.enabled) {
                if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) swiper.lazy.load();
            }
        },
        transitionEnd: function transitionEnd(swiper) {
            if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) swiper.lazy.load();
        },
        slideChange: function slideChange(swiper) {
            var _swiper$params = swiper.params, lazy = _swiper$params.lazy, cssMode = _swiper$params.cssMode, watchSlidesVisibility = _swiper$params.watchSlidesVisibility, watchSlidesProgress = _swiper$params.watchSlidesProgress, touchReleaseOnEdges = _swiper$params.touchReleaseOnEdges, resistanceRatio = _swiper$params.resistanceRatio;
            if (lazy.enabled && (cssMode || (watchSlidesVisibility || watchSlidesProgress) && (touchReleaseOnEdges || resistanceRatio === 0))) swiper.lazy.load();
        }
    }
};

},{"ssr-window":"31FIQ","../../utils/dom":"4aX4f","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6eTrj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */ var _utils = require("../../utils/utils");
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
var Controller = {
    LinearSpline: function LinearSpline(x, y) {
        var binarySearch = function search() {
            var maxIndex;
            var minIndex;
            var guess;
            return function(array, val) {
                minIndex = -1;
                maxIndex = array.length;
                while(maxIndex - minIndex > 1){
                    guess = maxIndex + minIndex >> 1;
                    if (array[guess] <= val) minIndex = guess;
                    else maxIndex = guess;
                }
                return maxIndex;
            };
        }();
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        var i1;
        var i3;
        this.interpolate = function interpolate(x2) {
            if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
            i3 = binarySearch(this.x, x2);
            i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
            return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
        var swiper = this;
        if (!swiper.controller.spline) swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    },
    setTranslate: function setTranslate(_setTranslate, byController) {
        var swiper = this;
        var controlled = swiper.controller.control;
        var multiplier;
        var controlledTranslate;
        var Swiper = swiper.constructor;
        function setControlledTranslate(c) {
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
            if (swiper.params.controller.by === 'slide') {
                swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -swiper.controller.spline.interpolate(-translate);
            }
            if (!controlledTranslate || swiper.params.controller.by === 'container') {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
            }
            if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
            c.updateProgress(controlledTranslate);
            c.setTranslate(controlledTranslate, swiper);
            c.updateActiveIndex();
            c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
            for(var i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
    },
    setTransition: function setTransition(duration, byController) {
        var swiper = this;
        var Swiper = swiper.constructor;
        var controlled = swiper.controller.control;
        var i;
        function setControlledTransition(c) {
            c.setTransition(duration, swiper);
            if (duration !== 0) {
                c.transitionStart();
                if (c.params.autoHeight) _utils.nextTick(function() {
                    c.updateAutoHeight();
                });
                c.$wrapperEl.transitionEnd(function() {
                    if (!controlled) return;
                    if (c.params.loop && swiper.params.controller.by === 'slide') c.loopFix();
                    c.transitionEnd();
                });
            }
        }
        if (Array.isArray(controlled)) {
            for(i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
    }
};
exports.default = {
    name: 'controller',
    params: {
        controller: {
            control: undefined,
            inverse: false,
            by: 'slide' // or 'container'
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            controller: _extends({
                control: swiper.params.controller.control
            }, Controller)
        });
    },
    on: {
        update: function update(swiper) {
            if (!swiper.controller.control) return;
            if (swiper.controller.spline) {
                swiper.controller.spline = undefined;
                delete swiper.controller.spline;
            }
        },
        resize: function resize(swiper) {
            if (!swiper.controller.control) return;
            if (swiper.controller.spline) {
                swiper.controller.spline = undefined;
                delete swiper.controller.spline;
            }
        },
        observerUpdate: function observerUpdate(swiper) {
            if (!swiper.controller.control) return;
            if (swiper.controller.spline) {
                swiper.controller.spline = undefined;
                delete swiper.controller.spline;
            }
        },
        setTranslate: function setTranslate(swiper, translate, byController) {
            if (!swiper.controller.control) return;
            swiper.controller.setTranslate(translate, byController);
        },
        setTransition: function setTransition(swiper, duration, byController) {
            if (!swiper.controller.control) return;
            swiper.controller.setTransition(duration, byController);
        }
    }
};

},{"../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3IITi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
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
var A11y = {
    getRandomNumber: function getRandomNumber(size) {
        if (size === void 0) size = 16;
        var randomChar = function randomChar1() {
            return Math.round(16 * Math.random()).toString(16);
        };
        return 'x'.repeat(size).replace(/x/g, randomChar);
    },
    makeElFocusable: function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
        return $el;
    },
    makeElNotFocusable: function makeElNotFocusable($el) {
        $el.attr('tabIndex', '-1');
        return $el;
    },
    addElRole: function addElRole($el, role) {
        $el.attr('role', role);
        return $el;
    },
    addElRoleDescription: function addElRoleDescription($el, description) {
        $el.attr('aria-roledescription', description);
        return $el;
    },
    addElControls: function addElControls($el, controls) {
        $el.attr('aria-controls', controls);
        return $el;
    },
    addElLabel: function addElLabel($el, label) {
        $el.attr('aria-label', label);
        return $el;
    },
    addElId: function addElId($el, id) {
        $el.attr('id', id);
        return $el;
    },
    addElLive: function addElLive($el, live) {
        $el.attr('aria-live', live);
        return $el;
    },
    disableEl: function disableEl($el) {
        $el.attr('aria-disabled', true);
        return $el;
    },
    enableEl: function enableEl($el) {
        $el.attr('aria-disabled', false);
        return $el;
    },
    onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        var swiper = this;
        var params = swiper.params.a11y;
        var $targetEl = _domDefault.default(e.target);
        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
            if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
            if (swiper.isEnd) swiper.a11y.notify(params.lastSlideMessage);
            else swiper.a11y.notify(params.nextSlideMessage);
        }
        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
            if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
            if (swiper.isBeginning) swiper.a11y.notify(params.firstSlideMessage);
            else swiper.a11y.notify(params.prevSlideMessage);
        }
        if (swiper.pagination && $targetEl.is(_utils.classesToSelector(swiper.params.pagination.bulletClass))) $targetEl[0].click();
    },
    notify: function notify(message) {
        var swiper = this;
        var notification = swiper.a11y.liveRegion;
        if (notification.length === 0) return;
        notification.html('');
        notification.html(message);
    },
    updateNavigation: function updateNavigation() {
        var swiper = this;
        if (swiper.params.loop || !swiper.navigation) return;
        var _swiper$navigation = swiper.navigation, $nextEl = _swiper$navigation.$nextEl, $prevEl = _swiper$navigation.$prevEl;
        if ($prevEl && $prevEl.length > 0) {
            if (swiper.isBeginning) {
                swiper.a11y.disableEl($prevEl);
                swiper.a11y.makeElNotFocusable($prevEl);
            } else {
                swiper.a11y.enableEl($prevEl);
                swiper.a11y.makeElFocusable($prevEl);
            }
        }
        if ($nextEl && $nextEl.length > 0) {
            if (swiper.isEnd) {
                swiper.a11y.disableEl($nextEl);
                swiper.a11y.makeElNotFocusable($nextEl);
            } else {
                swiper.a11y.enableEl($nextEl);
                swiper.a11y.makeElFocusable($nextEl);
            }
        }
    },
    updatePagination: function updatePagination() {
        var swiper = this;
        var params = swiper.params.a11y;
        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) swiper.pagination.bullets.each(function(bulletEl) {
            var $bulletEl = _domDefault.default(bulletEl);
            swiper.a11y.makeElFocusable($bulletEl);
            if (!swiper.params.pagination.renderBullet) {
                swiper.a11y.addElRole($bulletEl, 'button');
                swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
            }
        });
    },
    init: function init() {
        var swiper = this;
        var params = swiper.params.a11y;
        swiper.$el.append(swiper.a11y.liveRegion); // Container
        var $containerEl = swiper.$el;
        if (params.containerRoleDescriptionMessage) swiper.a11y.addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
        if (params.containerMessage) swiper.a11y.addElLabel($containerEl, params.containerMessage);
         // Wrapper
        var $wrapperEl = swiper.$wrapperEl;
        var wrapperId = $wrapperEl.attr('id') || "swiper-wrapper-" + swiper.a11y.getRandomNumber(16);
        var live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
        swiper.a11y.addElId($wrapperEl, wrapperId);
        swiper.a11y.addElLive($wrapperEl, live); // Slide
        if (params.itemRoleDescriptionMessage) swiper.a11y.addElRoleDescription(_domDefault.default(swiper.slides), params.itemRoleDescriptionMessage);
        swiper.a11y.addElRole(_domDefault.default(swiper.slides), params.slideRole);
        var slidesLength = swiper.params.loop ? swiper.slides.filter(function(el) {
            return !el.classList.contains(swiper.params.slideDuplicateClass);
        }).length : swiper.slides.length;
        swiper.slides.each(function(slideEl, index) {
            var $slideEl = _domDefault.default(slideEl);
            var slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
            var ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
            swiper.a11y.addElLabel($slideEl, ariaLabelMessage);
        }); // Navigation
        var $nextEl;
        var $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
        if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
        if ($nextEl && $nextEl.length) {
            swiper.a11y.makeElFocusable($nextEl);
            if ($nextEl[0].tagName !== 'BUTTON') {
                swiper.a11y.addElRole($nextEl, 'button');
                $nextEl.on('keydown', swiper.a11y.onEnterOrSpaceKey);
            }
            swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
            swiper.a11y.addElControls($nextEl, wrapperId);
        }
        if ($prevEl && $prevEl.length) {
            swiper.a11y.makeElFocusable($prevEl);
            if ($prevEl[0].tagName !== 'BUTTON') {
                swiper.a11y.addElRole($prevEl, 'button');
                $prevEl.on('keydown', swiper.a11y.onEnterOrSpaceKey);
            }
            swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
            swiper.a11y.addElControls($prevEl, wrapperId);
        } // Pagination
        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) swiper.pagination.$el.on('keydown', _utils.classesToSelector(swiper.params.pagination.bulletClass), swiper.a11y.onEnterOrSpaceKey);
    },
    destroy: function destroy() {
        var swiper = this;
        if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
        var $nextEl;
        var $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
        if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
        if ($nextEl) $nextEl.off('keydown', swiper.a11y.onEnterOrSpaceKey);
        if ($prevEl) $prevEl.off('keydown', swiper.a11y.onEnterOrSpaceKey);
         // Pagination
        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) swiper.pagination.$el.off('keydown', _utils.classesToSelector(swiper.params.pagination.bulletClass), swiper.a11y.onEnterOrSpaceKey);
    }
};
exports.default = {
    name: 'a11y',
    params: {
        a11y: {
            enabled: true,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            slideLabelMessage: '{{index}} / {{slidesLength}}',
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: 'group'
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            a11y: _extends({
            }, A11y, {
                liveRegion: _domDefault.default("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
            })
        });
    },
    on: {
        afterInit: function afterInit(swiper) {
            if (!swiper.params.a11y.enabled) return;
            swiper.a11y.init();
            swiper.a11y.updateNavigation();
        },
        toEdge: function toEdge(swiper) {
            if (!swiper.params.a11y.enabled) return;
            swiper.a11y.updateNavigation();
        },
        fromEdge: function fromEdge(swiper) {
            if (!swiper.params.a11y.enabled) return;
            swiper.a11y.updateNavigation();
        },
        paginationUpdate: function paginationUpdate(swiper) {
            if (!swiper.params.a11y.enabled) return;
            swiper.a11y.updatePagination();
        },
        destroy: function destroy(swiper) {
            if (!swiper.params.a11y.enabled) return;
            swiper.a11y.destroy();
        }
    }
};

},{"../../utils/dom":"4aX4f","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6PgLK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _utils = require("../../utils/utils");
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
var History1 = {
    init: function init() {
        var swiper = this;
        var window = _ssrWindow.getWindow();
        if (!swiper.params.history) return;
        if (!window.history || !window.history.pushState) {
            swiper.params.history.enabled = false;
            swiper.params.hashNavigation.enabled = true;
            return;
        }
        var history = swiper.history;
        history.initialized = true;
        history.paths = History1.getPathValues(swiper.params.url);
        if (!history.paths.key && !history.paths.value) return;
        history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
        if (!swiper.params.history.replaceState) window.addEventListener('popstate', swiper.history.setHistoryPopState);
    },
    destroy: function destroy() {
        var swiper = this;
        var window = _ssrWindow.getWindow();
        if (!swiper.params.history.replaceState) window.removeEventListener('popstate', swiper.history.setHistoryPopState);
    },
    setHistoryPopState: function setHistoryPopState() {
        var swiper = this;
        swiper.history.paths = History1.getPathValues(swiper.params.url);
        swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
    },
    getPathValues: function getPathValues(urlOverride) {
        var window = _ssrWindow.getWindow();
        var location;
        if (urlOverride) location = new URL(urlOverride);
        else location = window.location;
        var pathArray = location.pathname.slice(1).split('/').filter(function(part) {
            return part !== '';
        });
        var total = pathArray.length;
        var key = pathArray[total - 2];
        var value = pathArray[total - 1];
        return {
            key: key,
            value: value
        };
    },
    setHistory: function setHistory(key, index) {
        var swiper = this;
        var window = _ssrWindow.getWindow();
        if (!swiper.history.initialized || !swiper.params.history.enabled) return;
        var location;
        if (swiper.params.url) location = new URL(swiper.params.url);
        else location = window.location;
        var slide = swiper.slides.eq(index);
        var value = History1.slugify(slide.attr('data-history'));
        if (swiper.params.history.root.length > 0) {
            var root = swiper.params.history.root;
            if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
            value = root + "/" + key + "/" + value;
        } else if (!location.pathname.includes(key)) value = key + "/" + value;
        var currentState = window.history.state;
        if (currentState && currentState.value === value) return;
        if (swiper.params.history.replaceState) window.history.replaceState({
            value: value
        }, null, value);
        else window.history.pushState({
            value: value
        }, null, value);
    },
    slugify: function slugify(text) {
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
        var swiper = this;
        if (value) for(var i = 0, length = swiper.slides.length; i < length; i += 1){
            var slide = swiper.slides.eq(i);
            var slideHistory = History1.slugify(slide.attr('data-history'));
            if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                var index = slide.index();
                swiper.slideTo(index, speed, runCallbacks);
            }
        }
        else swiper.slideTo(0, speed, runCallbacks);
    }
};
exports.default = {
    name: 'history',
    params: {
        history: {
            enabled: false,
            root: '',
            replaceState: false,
            key: 'slides'
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            history: _extends({
            }, History1)
        });
    },
    on: {
        init: function init(swiper) {
            if (swiper.params.history.enabled) swiper.history.init();
        },
        destroy: function destroy(swiper) {
            if (swiper.params.history.enabled) swiper.history.destroy();
        },
        'transitionEnd _freeModeNoMomentumRelease': function transitionEnd_freeModeNoMomentumRelease(swiper) {
            if (swiper.history.initialized) swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        },
        slideChange: function slideChange(swiper) {
            if (swiper.history.initialized && swiper.params.cssMode) swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
    }
};

},{"ssr-window":"31FIQ","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jL9F3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
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
var HashNavigation = {
    onHashChange: function onHashChange() {
        var swiper = this;
        var document = _ssrWindow.getDocument();
        swiper.emit('hashChange');
        var newHash = document.location.hash.replace('#', '');
        var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
        if (newHash !== activeSlideHash) {
            var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
            if (typeof newIndex === 'undefined') return;
            swiper.slideTo(newIndex);
        }
    },
    setHash: function setHash() {
        var swiper = this;
        var window = _ssrWindow.getWindow();
        var document = _ssrWindow.getDocument();
        if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;
        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
            window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash'));
            swiper.emit('hashSet');
        } else {
            var slide = swiper.slides.eq(swiper.activeIndex);
            var hash = slide.attr('data-hash') || slide.attr('data-history');
            document.location.hash = hash || '';
            swiper.emit('hashSet');
        }
    },
    init: function init() {
        var swiper = this;
        var document = _ssrWindow.getDocument();
        var window = _ssrWindow.getWindow();
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        swiper.hashNavigation.initialized = true;
        var hash = document.location.hash.replace('#', '');
        if (hash) {
            var speed = 0;
            for(var i = 0, length = swiper.slides.length; i < length; i += 1){
                var slide = swiper.slides.eq(i);
                var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                    var index = slide.index();
                    swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                }
            }
        }
        if (swiper.params.hashNavigation.watchState) _domDefault.default(window).on('hashchange', swiper.hashNavigation.onHashChange);
    },
    destroy: function destroy() {
        var swiper = this;
        var window = _ssrWindow.getWindow();
        if (swiper.params.hashNavigation.watchState) _domDefault.default(window).off('hashchange', swiper.hashNavigation.onHashChange);
    }
};
exports.default = {
    name: 'hash-navigation',
    params: {
        hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            hashNavigation: _extends({
                initialized: false
            }, HashNavigation)
        });
    },
    on: {
        init: function init(swiper) {
            if (swiper.params.hashNavigation.enabled) swiper.hashNavigation.init();
        },
        destroy: function destroy(swiper) {
            if (swiper.params.hashNavigation.enabled) swiper.hashNavigation.destroy();
        },
        'transitionEnd _freeModeNoMomentumRelease': function transitionEnd_freeModeNoMomentumRelease(swiper) {
            if (swiper.hashNavigation.initialized) swiper.hashNavigation.setHash();
        },
        slideChange: function slideChange(swiper) {
            if (swiper.hashNavigation.initialized && swiper.params.cssMode) swiper.hashNavigation.setHash();
        }
    }
};

},{"ssr-window":"31FIQ","../../utils/dom":"4aX4f","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3AVvT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint no-underscore-dangle: "off" */ var _ssrWindow = require("ssr-window");
var _utils = require("../../utils/utils");
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
var Autoplay = {
    run: function run() {
        var swiper = this;
        var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        var delay = swiper.params.autoplay.delay;
        if ($activeSlideEl.attr('data-swiper-autoplay')) delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = _utils.nextTick(function() {
            var autoplayResult;
            if (swiper.params.autoplay.reverseDirection) {
                if (swiper.params.loop) {
                    swiper.loopFix();
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.isBeginning) {
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else swiper.autoplay.stop();
            } else if (swiper.params.loop) {
                swiper.loopFix();
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                swiper.emit('autoplay');
            } else if (!swiper.isEnd) {
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                swiper.emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
                autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                swiper.emit('autoplay');
            } else swiper.autoplay.stop();
            if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();
            else if (autoplayResult === false) swiper.autoplay.run();
        }, delay);
    },
    start: function start() {
        var swiper = this;
        if (typeof swiper.autoplay.timeout !== 'undefined') return false;
        if (swiper.autoplay.running) return false;
        swiper.autoplay.running = true;
        swiper.emit('autoplayStart');
        swiper.autoplay.run();
        return true;
    },
    stop: function stop() {
        var swiper = this;
        if (!swiper.autoplay.running) return false;
        if (typeof swiper.autoplay.timeout === 'undefined') return false;
        if (swiper.autoplay.timeout) {
            clearTimeout(swiper.autoplay.timeout);
            swiper.autoplay.timeout = undefined;
        }
        swiper.autoplay.running = false;
        swiper.emit('autoplayStop');
        return true;
    },
    pause: function pause(speed) {
        var swiper = this;
        if (!swiper.autoplay.running) return;
        if (swiper.autoplay.paused) return;
        if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.paused = true;
        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
            swiper.autoplay.paused = false;
            swiper.autoplay.run();
        } else [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach(function(event) {
            swiper.$wrapperEl[0].addEventListener(event, swiper.autoplay.onTransitionEnd);
        });
    },
    onVisibilityChange: function onVisibilityChange() {
        var swiper = this;
        var document = _ssrWindow.getDocument();
        if (document.visibilityState === 'hidden' && swiper.autoplay.running) swiper.autoplay.pause();
        if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
            swiper.autoplay.run();
            swiper.autoplay.paused = false;
        }
    },
    onTransitionEnd: function onTransitionEnd(e) {
        var swiper = this;
        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
        if (e.target !== swiper.$wrapperEl[0]) return;
        [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach(function(event) {
            swiper.$wrapperEl[0].removeEventListener(event, swiper.autoplay.onTransitionEnd);
        });
        swiper.autoplay.paused = false;
        if (!swiper.autoplay.running) swiper.autoplay.stop();
        else swiper.autoplay.run();
    },
    onMouseEnter: function onMouseEnter() {
        var swiper = this;
        if (swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
        else swiper.autoplay.pause();
        [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach(function(event) {
            swiper.$wrapperEl[0].removeEventListener(event, swiper.autoplay.onTransitionEnd);
        });
    },
    onMouseLeave: function onMouseLeave() {
        var swiper = this;
        if (swiper.params.autoplay.disableOnInteraction) return;
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
    },
    attachMouseEvents: function attachMouseEvents() {
        var swiper = this;
        if (swiper.params.autoplay.pauseOnMouseEnter) {
            swiper.$el.on('mouseenter', swiper.autoplay.onMouseEnter);
            swiper.$el.on('mouseleave', swiper.autoplay.onMouseLeave);
        }
    },
    detachMouseEvents: function detachMouseEvents() {
        var swiper = this;
        swiper.$el.off('mouseenter', swiper.autoplay.onMouseEnter);
        swiper.$el.off('mouseleave', swiper.autoplay.onMouseLeave);
    }
};
exports.default = {
    name: 'autoplay',
    params: {
        autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            autoplay: _extends({
            }, Autoplay, {
                running: false,
                paused: false
            })
        });
    },
    on: {
        init: function init(swiper) {
            if (swiper.params.autoplay.enabled) {
                swiper.autoplay.start();
                var document = _ssrWindow.getDocument();
                document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
                swiper.autoplay.attachMouseEvents();
            }
        },
        beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
            if (swiper.autoplay.running) {
                if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed);
                else swiper.autoplay.stop();
            }
        },
        sliderFirstMove: function sliderFirstMove(swiper) {
            if (swiper.autoplay.running) {
                if (swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
                else swiper.autoplay.pause();
            }
        },
        touchEnd: function touchEnd(swiper) {
            if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.run();
        },
        destroy: function destroy(swiper) {
            swiper.autoplay.detachMouseEvents();
            if (swiper.autoplay.running) swiper.autoplay.stop();
            var document = _ssrWindow.getDocument();
            document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
        }
    }
};

},{"ssr-window":"31FIQ","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4IJ5D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../utils/utils");
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
var Fade = {
    setTranslate: function setTranslate() {
        var swiper = this;
        var slides = swiper.slides;
        for(var i = 0; i < slides.length; i += 1){
            var $slideEl = swiper.slides.eq(i);
            var offset = $slideEl[0].swiperSlideOffset;
            var tx = -offset;
            if (!swiper.params.virtualTranslate) tx -= swiper.translate;
            var ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
            }
            var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
            $slideEl.css({
                opacity: slideOpacity
            }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
        }
    },
    setTransition: function setTransition(duration) {
        var swiper = this;
        var slides = swiper.slides, $wrapperEl = swiper.$wrapperEl;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
            var eventTriggered = false;
            slides.transitionEnd(function() {
                if (eventTriggered) return;
                if (!swiper || swiper.destroyed) return;
                eventTriggered = true;
                swiper.animating = false;
                var triggerEvents = [
                    'webkitTransitionEnd',
                    'transitionend'
                ];
                for(var i = 0; i < triggerEvents.length; i += 1)$wrapperEl.trigger(triggerEvents[i]);
            });
        }
    }
};
exports.default = {
    name: 'effect-fade',
    params: {
        fadeEffect: {
            crossFade: false
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            fadeEffect: _extends({
            }, Fade)
        });
    },
    on: {
        beforeInit: function beforeInit(swiper) {
            if (swiper.params.effect !== 'fade') return;
            swiper.classNames.push(swiper.params.containerModifierClass + "fade");
            var overwriteParams = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: true
            };
            _utils.extend(swiper.params, overwriteParams);
            _utils.extend(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate(swiper) {
            if (swiper.params.effect !== 'fade') return;
            swiper.fadeEffect.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
            if (swiper.params.effect !== 'fade') return;
            swiper.fadeEffect.setTransition(duration);
        }
    }
};

},{"../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"20tPf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
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
var Cube = {
    setTranslate: function setTranslate() {
        var swiper = this;
        var $el = swiper.$el, $wrapperEl = swiper.$wrapperEl, slides = swiper.slides, swiperWidth = swiper.width, swiperHeight = swiper.height, rtl = swiper.rtlTranslate, swiperSize = swiper.size, browser = swiper.browser;
        var params = swiper.params.cubeEffect;
        var isHorizontal = swiper.isHorizontal();
        var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        var wrapperRotate = 0;
        var $cubeShadowEl;
        if (params.shadow) {
            if (isHorizontal) {
                $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = _domDefault.default('<div class="swiper-cube-shadow"></div>');
                    $wrapperEl.append($cubeShadowEl);
                }
                $cubeShadowEl.css({
                    height: swiperWidth + "px"
                });
            } else {
                $cubeShadowEl = $el.find('.swiper-cube-shadow');
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = _domDefault.default('<div class="swiper-cube-shadow"></div>');
                    $el.append($cubeShadowEl);
                }
            }
        }
        for(var i = 0; i < slides.length; i += 1){
            var $slideEl = slides.eq(i);
            var slideIndex = i;
            if (isVirtual) slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
            var slideAngle = slideIndex * 90;
            var round = Math.floor(slideAngle / 360);
            if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
            }
            var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            var tx = 0;
            var ty = 0;
            var tz = 0;
            if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
            } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
            } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
            } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
            }
            if (rtl) tx = -tx;
            if (!isHorizontal) {
                ty = tx;
                tx = 0;
            }
            var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
            if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
            }
            $slideEl.transform(transform);
            if (params.slideShadows) {
                // Set shadows
                var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                if (shadowBefore.length === 0) {
                    shadowBefore = _domDefault.default("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                    $slideEl.append(shadowBefore);
                }
                if (shadowAfter.length === 0) {
                    shadowAfter = _domDefault.default("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                    $slideEl.append(shadowAfter);
                }
                if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
            }
        }
        $wrapperEl.css({
            '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
            '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
            '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
            'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
        });
        if (params.shadow) {
            if (isHorizontal) $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
            else {
                var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                var scale1 = params.shadowScale;
                var scale2 = params.shadowScale / multiplier;
                var offset = params.shadowOffset;
                $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
            }
        }
        var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
    },
    setTransition: function setTransition(duration) {
        var swiper = this;
        var $el = swiper.$el, slides = swiper.slides;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) $el.find('.swiper-cube-shadow').transition(duration);
    }
};
exports.default = {
    name: 'effect-cube',
    params: {
        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            cubeEffect: _extends({
            }, Cube)
        });
    },
    on: {
        beforeInit: function beforeInit(swiper) {
            if (swiper.params.effect !== 'cube') return;
            swiper.classNames.push(swiper.params.containerModifierClass + "cube");
            swiper.classNames.push(swiper.params.containerModifierClass + "3d");
            var overwriteParams = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            };
            _utils.extend(swiper.params, overwriteParams);
            _utils.extend(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate(swiper) {
            if (swiper.params.effect !== 'cube') return;
            swiper.cubeEffect.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
            if (swiper.params.effect !== 'cube') return;
            swiper.cubeEffect.setTransition(duration);
        }
    }
};

},{"../../utils/dom":"4aX4f","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iwYSf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
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
var Flip = {
    setTranslate: function setTranslate() {
        var swiper = this;
        var slides = swiper.slides, rtl = swiper.rtlTranslate;
        for(var i = 0; i < slides.length; i += 1){
            var $slideEl = slides.eq(i);
            var progress = $slideEl[0].progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            var offset = $slideEl[0].swiperSlideOffset;
            var rotate = -180 * progress;
            var rotateY = rotate;
            var rotateX = 0;
            var tx = -offset;
            var ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
            } else if (rtl) rotateY = -rotateY;
            $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
            if (swiper.params.flipEffect.slideShadows) {
                // Set shadows
                var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                if (shadowBefore.length === 0) {
                    shadowBefore = _domDefault.default("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
                    $slideEl.append(shadowBefore);
                }
                if (shadowAfter.length === 0) {
                    shadowAfter = _domDefault.default("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
                    $slideEl.append(shadowAfter);
                }
                if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
            }
            $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
        }
    },
    setTransition: function setTransition(duration) {
        var swiper = this;
        var slides = swiper.slides, activeIndex = swiper.activeIndex, $wrapperEl = swiper.$wrapperEl;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
            var eventTriggered = false; // eslint-disable-next-line
            slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                if (eventTriggered) return;
                if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
                eventTriggered = true;
                swiper.animating = false;
                var triggerEvents = [
                    'webkitTransitionEnd',
                    'transitionend'
                ];
                for(var i = 0; i < triggerEvents.length; i += 1)$wrapperEl.trigger(triggerEvents[i]);
            });
        }
    }
};
exports.default = {
    name: 'effect-flip',
    params: {
        flipEffect: {
            slideShadows: true,
            limitRotation: true
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            flipEffect: _extends({
            }, Flip)
        });
    },
    on: {
        beforeInit: function beforeInit(swiper) {
            if (swiper.params.effect !== 'flip') return;
            swiper.classNames.push(swiper.params.containerModifierClass + "flip");
            swiper.classNames.push(swiper.params.containerModifierClass + "3d");
            var overwriteParams = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: true
            };
            _utils.extend(swiper.params, overwriteParams);
            _utils.extend(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate(swiper) {
            if (swiper.params.effect !== 'flip') return;
            swiper.flipEffect.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
            if (swiper.params.effect !== 'flip') return;
            swiper.flipEffect.setTransition(duration);
        }
    }
};

},{"../../utils/dom":"4aX4f","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"5Hacc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _utils = require("../../utils/utils");
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
var Coverflow = {
    setTranslate: function setTranslate() {
        var swiper = this;
        var swiperWidth = swiper.width, swiperHeight = swiper.height, slides = swiper.slides, slidesSizesGrid = swiper.slidesSizesGrid;
        var params = swiper.params.coverflowEffect;
        var isHorizontal = swiper.isHorizontal();
        var transform = swiper.translate;
        var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        var rotate = isHorizontal ? params.rotate : -params.rotate;
        var translate = params.depth; // Each slide offset from center
        for(var i = 0, length = slides.length; i < length; i += 1){
            var $slideEl = slides.eq(i);
            var slideSize = slidesSizesGrid[i];
            var slideOffset = $slideEl[0].swiperSlideOffset;
            var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
            var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
            var translateZ = -translate * Math.abs(offsetMultiplier);
            var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders
            if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
            var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
            var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
            var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
            if (Math.abs(translateX) < 0.001) translateX = 0;
            if (Math.abs(translateY) < 0.001) translateY = 0;
            if (Math.abs(translateZ) < 0.001) translateZ = 0;
            if (Math.abs(rotateY) < 0.001) rotateY = 0;
            if (Math.abs(rotateX) < 0.001) rotateX = 0;
            if (Math.abs(scale) < 0.001) scale = 0;
            var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
            $slideEl.transform(slideTransform);
            $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
            if (params.slideShadows) {
                // Set shadows
                var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                if ($shadowBeforeEl.length === 0) {
                    $shadowBeforeEl = _domDefault.default("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
                    $slideEl.append($shadowBeforeEl);
                }
                if ($shadowAfterEl.length === 0) {
                    $shadowAfterEl = _domDefault.default("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
                    $slideEl.append($shadowAfterEl);
                }
                if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
        }
    },
    setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    }
};
exports.default = {
    name: 'effect-coverflow',
    params: {
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: true
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            coverflowEffect: _extends({
            }, Coverflow)
        });
    },
    on: {
        beforeInit: function beforeInit(swiper) {
            if (swiper.params.effect !== 'coverflow') return;
            swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
            swiper.classNames.push(swiper.params.containerModifierClass + "3d");
            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
        },
        setTranslate: function setTranslate(swiper) {
            if (swiper.params.effect !== 'coverflow') return;
            swiper.coverflowEffect.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
            if (swiper.params.effect !== 'coverflow') return;
            swiper.coverflowEffect.setTransition(duration);
        }
    }
};

},{"../../utils/dom":"4aX4f","../../utils/utils":"15wzB","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"d4p7f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../utils/utils");
var _dom = require("../../utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
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
var Thumbs = {
    init: function init() {
        var swiper = this;
        var thumbsParams = swiper.params.thumbs;
        if (swiper.thumbs.initialized) return false;
        swiper.thumbs.initialized = true;
        var SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
            swiper.thumbs.swiper = thumbsParams.swiper;
            _utils.extend(swiper.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            _utils.extend(swiper.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
        } else if (_utils.isObject(thumbsParams.swiper)) {
            swiper.thumbs.swiper = new SwiperClass(_utils.extend({
            }, thumbsParams.swiper, {
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                slideToClickedSlide: false
            }));
            swiper.thumbs.swiperCreated = true;
        }
        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
        return true;
    },
    onThumbClick: function onThumbClick() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        var clickedIndex = thumbsSwiper.clickedIndex;
        var clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && _domDefault.default(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        var slideToIndex;
        if (thumbsSwiper.params.loop) slideToIndex = parseInt(_domDefault.default(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        else slideToIndex = clickedIndex;
        if (swiper.params.loop) {
            var currentIndex = swiper.activeIndex;
            if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                swiper.loopFix(); // eslint-disable-next-line
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                currentIndex = swiper.activeIndex;
            }
            var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
            var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
            if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
            else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
            else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
            else slideToIndex = prevIndex;
        }
        swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
            var currentThumbsIndex = thumbsSwiper.activeIndex;
            var newThumbsIndex;
            var direction;
            if (thumbsSwiper.params.loop) {
                if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                    thumbsSwiper.loopFix(); // eslint-disable-next-line
                    thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                    currentThumbsIndex = thumbsSwiper.activeIndex;
                } // Find actual thumbs index to slide to
                var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
                var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
                if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;
                else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
                else newThumbsIndex = prevThumbsIndex;
                direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
            } else {
                newThumbsIndex = swiper.realIndex;
                direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
            }
            if (useOffset) newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
            if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                    if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                    else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                } else newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup;
                thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
            }
        } // Activate thumbs
        var thumbsToActivate = 1;
        var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
        if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for(var i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
        else for(var _i = 0; _i < thumbsToActivate; _i += 1)thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
    }
};
exports.default = {
    name: 'thumbs',
    params: {
        thumbs: {
            swiper: null,
            multipleActiveThumbs: true,
            autoScrollOffset: 0,
            slideThumbActiveClass: 'swiper-slide-thumb-active',
            thumbsContainerClass: 'swiper-container-thumbs'
        }
    },
    create: function create() {
        var swiper = this;
        _utils.bindModuleMethods(swiper, {
            thumbs: _extends({
                swiper: null,
                initialized: false
            }, Thumbs)
        });
    },
    on: {
        beforeInit: function beforeInit(swiper) {
            var thumbs = swiper.params.thumbs;
            if (!thumbs || !thumbs.swiper) return;
            swiper.thumbs.init();
            swiper.thumbs.update(true);
        },
        slideChange: function slideChange(swiper) {
            if (!swiper.thumbs.swiper) return;
            swiper.thumbs.update();
        },
        update: function update(swiper) {
            if (!swiper.thumbs.swiper) return;
            swiper.thumbs.update();
        },
        resize: function resize(swiper) {
            if (!swiper.thumbs.swiper) return;
            swiper.thumbs.update();
        },
        observerUpdate: function observerUpdate(swiper) {
            if (!swiper.thumbs.swiper) return;
            swiper.thumbs.update();
        },
        setTransition: function setTransition(swiper, duration) {
            var thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) return;
            thumbsSwiper.setTransition(duration);
        },
        beforeDestroy: function beforeDestroy(swiper) {
            var thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) return;
            if (swiper.thumbs.swiperCreated && thumbsSwiper) thumbsSwiper.destroy();
        }
    }
};

},{"../../utils/utils":"15wzB","../../utils/dom":"4aX4f","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["j6ycT","ajoad"], "ajoad", "parcelRequire5466")

//# sourceMappingURL=index.550d17ae.js.map
