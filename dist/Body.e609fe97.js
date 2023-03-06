// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("77be2f7e89dee596");
var ErrorOverlay = require("dea432e8bcbcb4e2");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"77be2f7e89dee596":"786KC","dea432e8bcbcb4e2":"1dldy"}],"ayMpz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "837662d6e609fe97";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
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

},{}],"7rMEG":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$1cdd = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$1cdd.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _header = require("./Header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _footer = require("./Footer");
var _footerDefault = parcelHelpers.interopDefault(_footer);
function Body() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactDefault.default).Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _headerDefault.default), {}, void 0, false, {
                fileName: "src/componenets/Instamart/Body.js",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: " flex flex-col md:flex-row bg-cover bg-no-repeat",
                style: {
                    backgroundColor: "#881952"
                },
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: " md:w-3/5 mx-8 font-bold",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                className: " mx-8 text-xl font-semibold text-center my-2 text-white font-body md:text-xl lg:text-xl xl:text-5xl lg:leading-tight xl:leading-tight 2xl:leading-tight md:text-left mt-8",
                                children: "Emergency supplies"
                            }, void 0, false, {
                                fileName: "src/componenets/Instamart/Body.js",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                className: " mx-8 text-xl font-semibold text-center my-2 text-white font-body md:text-xl lg:text-xl xl:text-5xl lg:leading-tight xl:leading-tight 2xl:leading-tight md:text-left ",
                                children: "delivered in minutes,"
                            }, void 0, false, {
                                fileName: "src/componenets/Instamart/Body.js",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                className: " mx-8 text-xl font-semibold text-center text-white font-body md:text-xl lg:text-xl xl:text-5xl lg:leading-tight xl:leading-tight 2xl:leading-tight md:text-left ",
                                children: [
                                    "from the house of Swiggy.",
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5 md:h-8 md:w-8 -mt-1 inline-block text-orange",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                            fillRule: "evenodd",
                                            d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "src/componenets/Instamart/Body.js",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/componenets/Instamart/Body.js",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/componenets/Instamart/Body.js",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "text-gray-400 text-2xl mx-8 my-4",
                                children: "Open 6 AM to late night everyday"
                            }, void 0, false, {
                                fileName: "src/componenets/Instamart/Body.js",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                className: "text-white px-8 mx-8 mt-2 text-2xl font-bold py-6 rounded-md",
                                style: {
                                    backgroundColor: "#ff5422"
                                },
                                children: "Try Instamart on Swiggy app"
                            }, void 0, false, {
                                fileName: "src/componenets/Instamart/Body.js",
                                lineNumber: 41,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/componenets/Instamart/Body.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "relative w-5/6 mx-auto sm:w-3/4 md:w-5/11 lg:w-2/5 lg:mx-0",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-full flex flex-col items-end",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                    src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1000/InstamartMicrosite/FooterVisual",
                                    className: "w-full ",
                                    alt: "status bar"
                                }, void 0, false, {
                                    fileName: "src/componenets/Instamart/Body.js",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "templates-slider w-full md:w-80 xl:w-120 glide--ltr glide--carousel glide--swipeable",
                                    "x-data": true,
                                    "x-init": "new Glide('.templates-slider', { type: 'carousel', autoplay: 2000, gap: 0, perView: 1, peek: { before: 0, after: 0 } }).mount()",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "glide__track",
                                        "data-glide-el": "track"
                                    }, void 0, false, {
                                        fileName: "src/componenets/Instamart/Body.js",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/componenets/Instamart/Body.js",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/componenets/Instamart/Body.js",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/componenets/Instamart/Body.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/componenets/Instamart/Body.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-full bg-cover bg-no-repeat bg-red-100 ",
                style: {
                    backgroundImage: 'url("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_400/InstamartMicrosite/BGBottom")'
                },
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "container mx-auto py-10 md:py-24 lg:py-32 text-center ",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                            className: "font-body font-bold text-3xl text-gray-600 md:text-4xl lg:text-5xl lg:leading-snug",
                            children: [
                                "Download Swiggy &",
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/componenets/Instamart/Body.js",
                                    lineNumber: 62,
                                    columnNumber: 126
                                }, this),
                                " order now on Instamart!"
                            ]
                        }, void 0, true, {
                            fileName: "src/componenets/Instamart/Body.js",
                            lineNumber: 62,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            className: "font-body font-bold text-md mt-4 md:text-sm text-gray-600",
                            children: "Trusted by millions of shoppers in Bangalore, Delhi-NCR, Hyderabad, Mumbai, Chennai, Pune & other cities."
                        }, void 0, false, {
                            fileName: "src/componenets/Instamart/Body.js",
                            lineNumber: 63,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/componenets/Instamart/Body.js",
                    lineNumber: 61,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "src/componenets/Instamart/Body.js",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _footerDefault.default), {}, void 0, false, {
                fileName: "src/componenets/Instamart/Body.js",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/componenets/Instamart/Body.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
exports.default = Body;
_c = Body;
var _c;
$RefreshReg$(_c, "Body");

  $parcel$ReactRefreshHelpers$1cdd.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","./Header":"appiZ","./Footer":"7KoHR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"appiZ":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$5436 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$5436.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
function Header() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: " flex items-center justify-between py-5 ",
            style: {
                backgroundColor: "#881952"
            },
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-2/3 md:w-1/4 mx-4",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                        href: "/",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_150/InstamartMicrosite/InstamartlogoWhite",
                            className: "h-12 my-4 mx-12",
                            alt: "logo"
                        }, void 0, false, {
                            fileName: "src/componenets/Instamart/Header.js",
                            lineNumber: 10,
                            columnNumber: 19
                        }, this)
                    }, void 0, false, {
                        fileName: "src/componenets/Instamart/Header.js",
                        lineNumber: 10,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "src/componenets/Instamart/Header.js",
                    lineNumber: 9,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "flex justify-center",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("ul", {
                            className: "hidden lg:flex",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                                        to: "/",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                            className: "text-white px-4 text-md mx-8 font-bold py-3 rounded-md",
                                            style: {
                                                backgroundColor: "#ff5422"
                                            },
                                            children: "Go to Home"
                                        }, void 0, false, {
                                            fileName: "src/componenets/Instamart/Header.js",
                                            lineNumber: 17,
                                            columnNumber: 7
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/componenets/Instamart/Header.js",
                                        lineNumber: 15,
                                        columnNumber: 7
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/componenets/Instamart/Header.js",
                                    lineNumber: 14,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("li", {}, void 0, false, {
                                    fileName: "src/componenets/Instamart/Header.js",
                                    lineNumber: 22,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/componenets/Instamart/Header.js",
                            lineNumber: 13,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "block lg:hidden",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-7 w-7 text-white",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 6h16M4 12h16M4 18h16"
                                }, void 0, false, {
                                    fileName: "src/componenets/Instamart/Header.js",
                                    lineNumber: 29,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "src/componenets/Instamart/Header.js",
                                lineNumber: 28,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "src/componenets/Instamart/Header.js",
                            lineNumber: 27,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/componenets/Instamart/Header.js",
                    lineNumber: 12,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/componenets/Instamart/Header.js",
            lineNumber: 8,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "src/componenets/Instamart/Header.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
exports.default = Header;
_c = Header;
var _c;
$RefreshReg$(_c, "Header");

  $parcel$ReactRefreshHelpers$5436.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"9xmpe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"7KoHR":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$5c37 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$5c37.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
function Footer() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("footer", {
        className: "relative text-white pt-8 pb-6",
        style: {
            backgroundColor: "#881952"
        },
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "flex justify-between lg:mx-12 md:mx-8 ",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "",
                    children: [
                        " ",
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            className: " mx-4 w-24 lg:w-48 md:w-48",
                            alt: "",
                            src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
                        }, void 0, false, {
                            fileName: "src/componenets/Instamart/Footer.js",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/componenets/Instamart/Footer.js",
                    lineNumber: 12,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: " lg:text-xl md:text-xl font-bold",
                    children: "\xa9 2023 Swiggy"
                }, void 0, false, {
                    fileName: "src/componenets/Instamart/Footer.js",
                    lineNumber: 23,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: " flex flex-row ",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                            className: "px-2",
                            href: "https://www.facebook.com/swiggy.in",
                            rel: "nofollow noopener",
                            alt: "facebook",
                            target: "_blank",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                className: true,
                                width: 24,
                                height: 24,
                                alt: "",
                                src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
                            }, void 0, false, {
                                fileName: "src/componenets/Instamart/Footer.js",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "src/componenets/Instamart/Footer.js",
                            lineNumber: 26,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                            className: "px-2",
                            href: "https://pinterest.com/swiggyindia",
                            rel: "nofollow noopener",
                            alt: "pintrest",
                            target: "_blank",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                className: true,
                                width: 24,
                                height: 24,
                                alt: "",
                                src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
                            }, void 0, false, {
                                fileName: "src/componenets/Instamart/Footer.js",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "src/componenets/Instamart/Footer.js",
                            lineNumber: 41,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                            className: "px-2",
                            href: "https://instagram.com/swiggyindia/",
                            rel: "nofollow noopener",
                            alt: "instagram",
                            target: "_blank",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                className: true,
                                width: 24,
                                height: 24,
                                alt: "",
                                src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
                            }, void 0, false, {
                                fileName: "src/componenets/Instamart/Footer.js",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "src/componenets/Instamart/Footer.js",
                            lineNumber: 56,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                            className: "_1Az3W",
                            href: "https://twitter.com/swiggy",
                            rel: "nofollow noopener",
                            alt: "twitter",
                            target: "_blank",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                className: true,
                                width: 24,
                                height: 24,
                                alt: "",
                                src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
                            }, void 0, false, {
                                fileName: "src/componenets/Instamart/Footer.js",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "src/componenets/Instamart/Footer.js",
                            lineNumber: 71,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/componenets/Instamart/Footer.js",
                    lineNumber: 25,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/componenets/Instamart/Footer.js",
            lineNumber: 11,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "src/componenets/Instamart/Footer.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
exports.default = Footer;
_c = Footer;
var _c;
$RefreshReg$(_c, "Footer");

  $parcel$ReactRefreshHelpers$5c37.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["1xC6H","ayMpz"], null, "parcelRequire164e")

//# sourceMappingURL=Body.e609fe97.js.map
