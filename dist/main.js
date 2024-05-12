/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Dela_Gothic_One/DelaGothicOne-Regular.ttf */ "./src/fonts/Dela_Gothic_One/DelaGothicOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf */ "./src/fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "Dela";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: "DM Sans";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

:root {
    --blue: #054a91;
    --slate-blue: #3e7cb1;
    --gray-blue: #81a4cd;
    --light-gray: #dbe4ee;
}

body {
    margin: 0;
    min-height: calc(100vh - 53);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(8, 1fr);
    background-color: var(--light-gray);
    font-family: "DM Sans";
}

header {
    grid-column: 2 / span 4;
    grid-row: 0 / 1;
    background-color: var(--gray-blue);
    display: flex;
    align-items: center;
    font-family: "DM Sans";
    padding-left: 1rem;
    gap: 2rem;
    box-shadow: inset 0 -4px 5px -5px black;
}

h1 {
    font-family: "Dela";
    font-weight: 400;
}

.sidebar {
    grid-column: 0 / 1;
    grid-row: 1/9;
    background-color: var(--slate-blue);
    box-shadow: inset -5px 0 5px -5px black;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.sidebar-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: inset 0 -4px 5px -5px black;
    height: 88.88px;
}

.sidebar-header h1 {
    font-size: 24px;
}

.project-button,
.task-button {
    text-align: center;
    vertical-align: center;
    border-radius: 40%;
    border: transparent;
    background-color: transparent;
    color: var(--blue);
    outline: none;
}

.fa-solid {
    display: grid;
    place-self: center;
}

.project-button {
    height: 40px;
    width: 40px;
    color: var(--light-gray);
}

.task-button {
    height: 35px;
    width: 35px;
}

button:hover {
    cursor: pointer;
    opacity: 50%;
}

button:active {
    opacity: 75%;
}

.project-container {
    grid-column: 2 / span 4;
    grid-row: 2 / span 7;
}

#project-header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

#project-header h1 {
    font-size: 24px;
}

#project-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

#sidebar-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.project-div {
    padding-left: 10px;
    font-family: "DM Sans";
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    width: 15em;
    height: 3em;
    margin: 10px 5px 0 5px;
    box-shadow: 3px 3px 10px;
    border-radius: 0.5em;
}

.project-div:hover {
    cursor: pointer;
}

.project-name:hover {
    cursor: pointer;
    font-size: 20px;
}

.project-name {
    transition: all ease-in-out 0.3s;
}

.delBtn,
.task-del-btn,
.check-btn {
    background-color: transparent;
    height: 30px;
    width: 30px;
    color: rgb(99, 0, 0);
    border: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    padding: 0;
}

#project-label::before,
#task-date::before,
#task-title::before {
    content: "*";
    color: rgb(99, 0, 0);
}

#project-modal,
#task-modal {
    border: none;
    background-color: var(--slate-blue);
    margin: 15% auto;
    padding: 20px;
    width: fit-content;
    border: 2px solid var(--light-gray);
    border-radius: 10px;
    box-shadow: 3px 3px 10px;
}

#project-modal h2 {
    margin-top: 5px;
}

input,
textarea,
select,
option {
    background-color: var(--light-gray);
    border: transparent;
    border-radius: 5px;
    padding: 5px;
    font-family: "DM Sans";
}

#task-modal {
    margin: auto;
}

.close {
    color: var(--light-gray);
    float: right;
    font-size: 28px;
    font-weight: 700;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

#project-h3 {
    cursor: default;
}

#project-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 5px;
}

#task-modal {
    font-family: "DM Sans";
}
#task-form {
    display: flex;
    flex-direction: column;
}

#task-form label {
    padding-top: 10px;
}

#submit-task {
    margin-top: 15px;
}

#submit-task,
#submit-project {
    background-color: var(--blue);
    color: var(--light-gray);
    border: none;
    border-radius: 10px;
    padding: 10px;
}

#task-modal::backdrop,
#project-modal::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
}

.task-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    border: 3px solid transparent;
    box-shadow: 3px 3px 10px;
    border-radius: 0.5em;
    background-color: var(--gray-blue);
    margin: 1rem;
    padding: 5px;
}

.check-btn {
    color: green;
}

.task-complete {
    border: 3px solid green;
}

.btns {
    display: flex;
    justify-content: space-between;
}

#low,
#medium,
#high {
    font-weight: 600;
}

#low {
    color: green;
}

#medium {
    color: rgb(255, 85, 0);
}

#high {
    color: red;
}

.notes {
    font-style: italic;
}

footer {
    grid-column: span 5;
    grid-row: 9 span 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray-blue);
    box-shadow: inset 0 4px 5px -5px black;
    font-family: "DM Sans";
    margin-top: auto;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: \"Dela\";\n    src: url(\"./fonts/Dela_Gothic_One/DelaGothicOne-Regular.ttf\");\n}\n\n@font-face {\n    font-family: \"DM Sans\";\n    src: url(\"./fonts/DM_Sans/DMSans-VariableFont_opsz\\,wght.ttf\");\n}\n\n:root {\n    --blue: #054a91;\n    --slate-blue: #3e7cb1;\n    --gray-blue: #81a4cd;\n    --light-gray: #dbe4ee;\n}\n\nbody {\n    margin: 0;\n    min-height: calc(100vh - 53);\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n    background-color: var(--light-gray);\n    font-family: \"DM Sans\";\n}\n\nheader {\n    grid-column: 2 / span 4;\n    grid-row: 0 / 1;\n    background-color: var(--gray-blue);\n    display: flex;\n    align-items: center;\n    font-family: \"DM Sans\";\n    padding-left: 1rem;\n    gap: 2rem;\n    box-shadow: inset 0 -4px 5px -5px black;\n}\n\nh1 {\n    font-family: \"Dela\";\n    font-weight: 400;\n}\n\n.sidebar {\n    grid-column: 0 / 1;\n    grid-row: 1/9;\n    background-color: var(--slate-blue);\n    box-shadow: inset -5px 0 5px -5px black;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.sidebar-header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    box-shadow: inset 0 -4px 5px -5px black;\n    height: 88.88px;\n}\n\n.sidebar-header h1 {\n    font-size: 24px;\n}\n\n.project-button,\n.task-button {\n    text-align: center;\n    vertical-align: center;\n    border-radius: 40%;\n    border: transparent;\n    background-color: transparent;\n    color: var(--blue);\n    outline: none;\n}\n\n.fa-solid {\n    display: grid;\n    place-self: center;\n}\n\n.project-button {\n    height: 40px;\n    width: 40px;\n    color: var(--light-gray);\n}\n\n.task-button {\n    height: 35px;\n    width: 35px;\n}\n\nbutton:hover {\n    cursor: pointer;\n    opacity: 50%;\n}\n\nbutton:active {\n    opacity: 75%;\n}\n\n.project-container {\n    grid-column: 2 / span 4;\n    grid-row: 2 / span 7;\n}\n\n#project-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n#project-header h1 {\n    font-size: 24px;\n}\n\n#project-content {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n}\n\n#sidebar-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.project-div {\n    padding-left: 10px;\n    font-family: \"DM Sans\";\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgba(255, 255, 255, 0.5);\n    width: 15em;\n    height: 3em;\n    margin: 10px 5px 0 5px;\n    box-shadow: 3px 3px 10px;\n    border-radius: 0.5em;\n}\n\n.project-div:hover {\n    cursor: pointer;\n}\n\n.project-name:hover {\n    cursor: pointer;\n    font-size: 20px;\n}\n\n.project-name {\n    transition: all ease-in-out 0.3s;\n}\n\n.delBtn,\n.task-del-btn,\n.check-btn {\n    background-color: transparent;\n    height: 30px;\n    width: 30px;\n    color: rgb(99, 0, 0);\n    border: transparent;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 10px;\n    padding: 0;\n}\n\n#project-label::before,\n#task-date::before,\n#task-title::before {\n    content: \"*\";\n    color: rgb(99, 0, 0);\n}\n\n#project-modal,\n#task-modal {\n    border: none;\n    background-color: var(--slate-blue);\n    margin: 15% auto;\n    padding: 20px;\n    width: fit-content;\n    border: 2px solid var(--light-gray);\n    border-radius: 10px;\n    box-shadow: 3px 3px 10px;\n}\n\n#project-modal h2 {\n    margin-top: 5px;\n}\n\ninput,\ntextarea,\nselect,\noption {\n    background-color: var(--light-gray);\n    border: transparent;\n    border-radius: 5px;\n    padding: 5px;\n    font-family: \"DM Sans\";\n}\n\n#task-modal {\n    margin: auto;\n}\n\n.close {\n    color: var(--light-gray);\n    float: right;\n    font-size: 28px;\n    font-weight: 700;\n}\n\n.close:hover,\n.close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n#project-h3 {\n    cursor: default;\n}\n\n#project-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    padding: 5px;\n}\n\n#task-modal {\n    font-family: \"DM Sans\";\n}\n#task-form {\n    display: flex;\n    flex-direction: column;\n}\n\n#task-form label {\n    padding-top: 10px;\n}\n\n#submit-task {\n    margin-top: 15px;\n}\n\n#submit-task,\n#submit-project {\n    background-color: var(--blue);\n    color: var(--light-gray);\n    border: none;\n    border-radius: 10px;\n    padding: 10px;\n}\n\n#task-modal::backdrop,\n#project-modal::backdrop {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.task-div {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 10px;\n    border: 3px solid transparent;\n    box-shadow: 3px 3px 10px;\n    border-radius: 0.5em;\n    background-color: var(--gray-blue);\n    margin: 1rem;\n    padding: 5px;\n}\n\n.check-btn {\n    color: green;\n}\n\n.task-complete {\n    border: 3px solid green;\n}\n\n.btns {\n    display: flex;\n    justify-content: space-between;\n}\n\n#low,\n#medium,\n#high {\n    font-weight: 600;\n}\n\n#low {\n    color: green;\n}\n\n#medium {\n    color: rgb(255, 85, 0);\n}\n\n#high {\n    color: red;\n}\n\n.notes {\n    font-style: italic;\n}\n\nfooter {\n    grid-column: span 5;\n    grid-row: 9 span 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--gray-blue);\n    box-shadow: inset 0 4px 5px -5px black;\n    font-family: \"DM Sans\";\n    margin-top: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/scripts/displayProject.js":
/*!***************************************!*\
  !*** ./src/scripts/displayProject.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayActiveProject: () => (/* binding */ displayActiveProject),
/* harmony export */   displayImportedProjects: () => (/* binding */ displayImportedProjects),
/* harmony export */   displayNewestProject: () => (/* binding */ displayNewestProject),
/* harmony export */   displayProject: () => (/* binding */ displayProject)
/* harmony export */ });
/* harmony import */ var _manageProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageProject */ "./src/scripts/manageProject.js");
/* harmony import */ var _displayTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTask */ "./src/scripts/displayTask.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/scripts/storage.js");




function displayProject() {
    const sidebarContent = document.querySelector("#sidebar-content");
    const projectH3 = document.querySelector("#project-h3");

    const currentProject = _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects.length - 1;
    const currentProjectId = _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[currentProject].id;

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");
    projectDiv.setAttribute("id", currentProjectId);
    const projectName = document.createElement("h3");
    projectName.textContent = _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[currentProject].name;
    projectName.setAttribute("id", currentProjectId);
    projectName.classList.add("project-name");
    projectDiv.append(projectName);

    const delBtn = document.createElement("button");
    if (_manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[currentProject].name !== "Default") {
        delBtn.classList.add("delBtn");
        delBtn.setAttribute("id", currentProjectId);
        const i = document.createElement("i");
        i.classList.add("fa-solid", "fa-minus", "fa-2xl");
        delBtn.append(i);
        projectDiv.append(delBtn);
    }

    projectDiv.addEventListener("click", (target) => {
        const clickedProject = target.target;
        (0,_manageProject__WEBPACK_IMPORTED_MODULE_0__.allProjectsInactive)();
        _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects.forEach((project) => {
            if (project.id === clickedProject.id) {
                project.active = true;
                (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.clearAllTasks)();
                (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)();
                projectH3.textContent = clickedProject.textContent;
            }
            (0,_storage__WEBPACK_IMPORTED_MODULE_2__.addToLocalStorage)(project);
        });
    });

    delBtn.addEventListener("click", () => {
        (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.clearAllTasks)();
        (0,_manageProject__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(currentProjectId);
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.removeFromLocalStorage)(currentProjectId);
    });

    sidebarContent.append(projectDiv);
    (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)();
}

function displayNewestProject() {
    const projectH3 = document.querySelector("#project-h3");

    (0,_manageProject__WEBPACK_IMPORTED_MODULE_0__.allProjectsInactive)();

    const newestProjectIndex = _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects.length - 1;
    _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[newestProjectIndex].active = true;
    _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects.forEach((project) => {
        if (project.id === _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[newestProjectIndex].id) {
            (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.clearAllTasks)();
            (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)();
            projectH3.textContent =
                _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[newestProjectIndex].name;
        }
    });
}

function displayActiveProject() {
    const projectH3 = document.querySelector("#project-h3");
    if (_manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects.length === 0) {
        projectH3.textContent = "";
    } else {
        (0,_manageProject__WEBPACK_IMPORTED_MODULE_0__.allProjectsInactive)();
        _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[0].active = true;
        (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.clearAllTasks)();
        _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects.forEach((project) => {
            if (project.id === _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[0].id) {
                (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)();
                projectH3.textContent = _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[0].name;
            }
        });
    }
}

function displayImportedProjects() {
    const sidebarContent = document.querySelector("#sidebar-content");
    const projectH3 = document.querySelector("#project-h3");

    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.importProjectsFromLocalStorage)().forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-div");
        projectDiv.setAttribute("id", project.id);
        const projectName = document.createElement("h3");
        projectName.textContent = project.name;
        projectName.setAttribute("id", project.id);
        projectName.classList.add("project-name");
        projectDiv.append(projectName);

        const delBtn = document.createElement("button");
        if (project.name !== "Default") {
            delBtn.classList.add("delBtn");
            delBtn.setAttribute("id", project.id);
            const i = document.createElement("i");
            i.classList.add("fa-solid", "fa-minus", "fa-2xl");
            delBtn.append(i);
            projectDiv.append(delBtn);
        }

        projectName.addEventListener("click", (target) => {
            const clickedProject = target.target;
            (0,_manageProject__WEBPACK_IMPORTED_MODULE_0__.allProjectsInactive)();
            _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects.forEach((project) => {
                if (project.id === clickedProject.id) {
                    project.active = true;
                    (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.clearAllTasks)();
                    (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)();
                    projectH3.textContent = clickedProject.textContent;
                }
            });
        });

        delBtn.addEventListener("click", () => {
            (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.clearAllTasks)();
            (0,_manageProject__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(project.id);
        });

        sidebarContent.append(projectDiv);
        (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)();
    });
}


/***/ }),

/***/ "./src/scripts/displayTask.js":
/*!************************************!*\
  !*** ./src/scripts/displayTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearAllTasks: () => (/* binding */ clearAllTasks),
/* harmony export */   displayAllTasks: () => (/* binding */ displayAllTasks),
/* harmony export */   displayTask: () => (/* binding */ displayTask)
/* harmony export */ });
/* harmony import */ var _manageTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageTask */ "./src/scripts/manageTask.js");


function displayTask() {
    const projectContent = document.querySelector("#project-content");

    const currentTask = (0,_manageTask__WEBPACK_IMPORTED_MODULE_0__.findTask)();
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
    taskDiv.setAttribute("id", currentTask.taskId);

    const taskName = document.createElement("h3");
    const taskNotes = document.createElement("div");
    taskNotes.classList.add("notes");
    const taskDate = document.createElement("div");
    const taskPriority = document.createElement("div");

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fa-solid", "fa-check", "fa-2xl");
    checkBtn.append(checkIcon);
    checkBtn.setAttribute("id", currentTask.taskId);

    const delBtn = document.createElement("button");
    delBtn.classList.add("task-del-btn");
    const delIcon = document.createElement("i");
    delIcon.classList.add("fa-solid", "fa-minus", "fa-2xl");
    delBtn.append(delIcon);
    delBtn.setAttribute("id", currentTask.taskId);

    const btns = document.createElement("div");
    btns.classList.add("btns");

    taskName.textContent = currentTask.name;
    taskNotes.textContent = currentTask.notes;
    taskDate.textContent = currentTask.dueDate;
    taskPriority.textContent = currentTask.priority;

    taskPriority.setAttribute("id", taskPriority.textContent.toLowerCase());
    taskPriority.classList.add("priority");

    btns.append(checkBtn, delBtn);
    taskDiv.append(taskName, taskNotes, taskDate, taskPriority, btns);
    projectContent.append(taskDiv);

    checkBtn.addEventListener("click", () => {
        completeTask(taskDiv);
    });

    delBtn.addEventListener("click", () => {
        (0,_manageTask__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(currentTask.taskId);
    });
}

function displayAllTasks() {
    const currentTask = (0,_manageTask__WEBPACK_IMPORTED_MODULE_0__.findTask)();
    const taskList = (0,_manageTask__WEBPACK_IMPORTED_MODULE_0__.selectAllTasks)();
    const projectContent = document.querySelector("#project-content");
    taskList.forEach((task) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");
        taskDiv.setAttribute("id", task.taskId);
        const taskName = document.createElement("h3");
        const taskNotes = document.createElement("div");
        taskNotes.classList.add("notes");
        const taskDate = document.createElement("div");
        const taskPriority = document.createElement("div");

        const checkBtn = document.createElement("button");
        checkBtn.classList.add("check-btn");
        const checkIcon = document.createElement("i");
        checkIcon.classList.add("fa-solid", "fa-check", "fa-2xl");
        checkBtn.append(checkIcon);
        checkBtn.setAttribute("id", task.taskId);

        const delBtn = document.createElement("button");
        delBtn.classList.add("task-del-btn");
        const delIcon = document.createElement("i");
        delIcon.classList.add("fa-solid", "fa-minus", "fa-2xl");
        delBtn.append(delIcon);
        delBtn.setAttribute("id", task.taskId);

        const btns = document.createElement("div");
        btns.classList.add("btns");

        taskName.textContent = task.name;
        taskNotes.textContent = task.notes;
        taskDate.textContent = task.dueDate;
        taskPriority.textContent = task.priority;

        taskPriority.setAttribute("id", taskPriority.textContent.toLowerCase());
        taskPriority.classList.add("priority");

        btns.append(checkBtn, delBtn);
        taskDiv.append(taskName, taskNotes, taskDate, taskPriority, btns);
        projectContent.append(taskDiv);

        checkBtn.addEventListener("click", () => {
            completeTask(taskDiv);
        });

        delBtn.addEventListener("click", () => {
            (0,_manageTask__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(task.taskId);
        });
    });
}

function clearAllTasks() {
    const taskDivs = document.querySelectorAll(".task-div");
    taskDivs.forEach((el) => {
        el.remove();
    });
}

function completeTask(element) {
    if (element.classList.contains("task-complete")) {
        element.classList.remove("task-complete");
    } else {
        element.classList.add("task-complete");
    }
}


/***/ }),

/***/ "./src/scripts/manageProject.js":
/*!**************************************!*\
  !*** ./src/scripts/manageProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   allProjectsInactive: () => (/* binding */ allProjectsInactive),
/* harmony export */   clearProjectModal: () => (/* binding */ clearProjectModal),
/* harmony export */   closeProjectModal: () => (/* binding */ closeProjectModal),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   openProjectModal: () => (/* binding */ openProjectModal),
/* harmony export */   projectList: () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProject */ "./src/scripts/displayProject.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/scripts/storage.js");




class ProjectManager {
    allProjects = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.importProjectsFromLocalStorage)();
    addProject(project) {
        this.allProjects.push(project);
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(project);
    }

    removeProject(id) {
        this.allProjects = this.allProjects.filter((el) => {
            return el.id !== id;
        });
    }
}

class Project {
    constructor(name, active = false, id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])()) {
        this.name = name;
        this.taskList = [];
        this.active = active;
        this.id = id;
    }

    addTask(task) {
        task.projectId = this.id;
        this.taskList.push(task);
    }

    removeTask(id) {
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].taskId === id) {
                this.taskList.splice(i, 1);
            }
        }
    }
}

class Task {
    constructor(name, notes, dueDate, priority, taskId = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])()) {
        this.name = name;
        this.notes = notes;
        this.dueDate = dueDate;
        this.priority = priority;
        this.taskId = taskId;
    }
}
const projectList = new ProjectManager();

if (localStorage.length == 0) {
    const defaultProject = new Project("Default", true);
    projectList.addProject(defaultProject);
}

function openProjectModal() {
    const modal = document.querySelector("#project-modal");
    modal.showModal();
}

function closeProjectModal() {
    const modal = document.querySelector("#project-modal");
    modal.close();
}

function clearProjectModal() {
    const userInput = document.querySelector("#project-title");
    userInput.value = null;
}

function createProject() {
    const userInput = document.querySelector("#project-title");
    const newProject = new Project(userInput.value);
    projectList.addProject(newProject);
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(newProject);
    clearProjectModal();
    closeProjectModal();
    (0,_displayProject__WEBPACK_IMPORTED_MODULE_0__.displayNewestProject)();
    (0,_displayProject__WEBPACK_IMPORTED_MODULE_0__.displayProject)();
}

function deleteProject(projectId) {
    const projectDivs = document.querySelectorAll(".project-div");
    projectList.allProjects.forEach((project) => {
        if (projectId === project.id) {
            projectList.removeProject(project.id);
        }
    });
    projectDivs.forEach((element) => {
        if (projectId === element.id) {
            element.remove();
        }
    });
    (0,_displayProject__WEBPACK_IMPORTED_MODULE_0__.displayActiveProject)();
}

function allProjectsInactive() {
    projectList.allProjects.forEach((project) => {
        project.active = false;
    });
}


/***/ }),

/***/ "./src/scripts/manageTask.js":
/*!***********************************!*\
  !*** ./src/scripts/manageTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activeProject: () => (/* binding */ activeProject),
/* harmony export */   clearTaskModal: () => (/* binding */ clearTaskModal),
/* harmony export */   closeTaskModal: () => (/* binding */ closeTaskModal),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   findProject: () => (/* binding */ findProject),
/* harmony export */   findTask: () => (/* binding */ findTask),
/* harmony export */   findTaskList: () => (/* binding */ findTaskList),
/* harmony export */   openTaskModal: () => (/* binding */ openTaskModal),
/* harmony export */   selectAllTasks: () => (/* binding */ selectAllTasks)
/* harmony export */ });
/* harmony import */ var _manageProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageProject */ "./src/scripts/manageProject.js");
/* harmony import */ var _displayTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTask */ "./src/scripts/displayTask.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/scripts/storage.js");




function openTaskModal() {
    const modal = document.querySelector("#task-modal");
    modal.showModal();
}

function closeTaskModal() {
    const modal = document.querySelector("#task-modal");
    modal.close();
}

function createTask() {
    const name = document.querySelector("#task-name");
    const notes = document.querySelector("#task-notes");
    const dueDate = document.querySelector("#task-dd");
    const priority = document.querySelector("#task-priority");

    const newTask = new _manageProject__WEBPACK_IMPORTED_MODULE_0__.Task(
        name.value,
        notes.value,
        dueDate.value,
        priority.value
    );
    activeProject();
    addTask(newTask);
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.addToLocalStorage)(activeProject());
    clearTaskModal();
    closeTaskModal();
    (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.displayTask)(newTask);
}

function activeProject() {
    let activeProject;
    for (let i = 0; i < _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects.length; i++) {
        if (_manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[i].active === true) {
            activeProject = _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[i];
        }
    }
    return activeProject;
}

function addTask(task) {
    for (let i = 0; i < _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects.length; i++) {
        if (_manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[i].id === activeProject().id) {
            _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[i].addTask(task);
        }
    }
}

function findTaskList() {
    let selectedProject;
    let currentTaskList;
    for (let i = 0; i < _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects.length; i++) {
        if (_manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[i].id === activeProject().id) {
            selectedProject = i;
        }
    }
    currentTaskList = _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[selectedProject].taskList;
    return currentTaskList;
}

function findTask() {
    let selectedProject;
    let currentTask;
    for (let i = 0; i < _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects.length; i++) {
        if (_manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[i].id === activeProject().id) {
            selectedProject = i;
        }
    }
    for (
        let i = 0;
        i < _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[selectedProject].taskList.length;
        i++
    ) {
        if (
            _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[selectedProject].taskList[i].projectId ===
            activeProject().id
        ) {
            currentTask = _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[selectedProject].taskList[i];
        }
    }
    return currentTask;
}

function findProject() {
    let currentProject;
    for (let i = 0; i < _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects.length; i++) {
        if (_manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[i].id === activeProject().id) {
            currentProject = i;
        }
    }
    return _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[currentProject];
}

function deleteTask(taskId) {
    const currentProject = findProject();
    const taskList = findTaskList();
    let selectedTaskId;

    taskList.forEach((task) => {
        if (task.taskId === taskId) {
            selectedTaskId = taskId;
        }
    });
    const delBtns = document.querySelectorAll(".task-del-btn");
    delBtns.forEach((btn) => {
        if (btn.id === selectedTaskId) {
            currentProject.removeTask(taskId);
        }
    });

    const taskDivs = document.querySelectorAll(".task-div");
    taskDivs.forEach((div) => {
        if (div.id === selectedTaskId) {
            div.remove();
        }
    });
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.addToLocalStorage)(currentProject);
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.importProjectsFromLocalStorage)();
}

function selectAllTasks() {
    const currentProject = activeProject();
    const projectTasks = currentProject.taskList;
    return projectTasks;
}

function clearTaskModal() {
    const name = document.querySelector("#task-name");
    const notes = document.querySelector("#task-notes");
    const date = document.querySelector("#task-dd");

    name.value = null;
    notes.value = null;
    date.value = null;
}


/***/ }),

/***/ "./src/scripts/storage.js":
/*!********************************!*\
  !*** ./src/scripts/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToLocalStorage: () => (/* binding */ addToLocalStorage),
/* harmony export */   importProjectsFromLocalStorage: () => (/* binding */ importProjectsFromLocalStorage),
/* harmony export */   removeFromLocalStorage: () => (/* binding */ removeFromLocalStorage)
/* harmony export */ });
/* harmony import */ var _manageProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageProject */ "./src/scripts/manageProject.js");



function addToLocalStorage(project) {
    const index = _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects.length;
    const projectIndex = _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects.indexOf(project);
    localStorage.setItem(
        _manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[projectIndex].id,
        JSON.stringify(_manageProject__WEBPACK_IMPORTED_MODULE_0__.projectList.allProjects[projectIndex])
    );
}

function importProjectsFromLocalStorage() {
    let allProjects = [];
    for (let i = 0; i < localStorage.length; i++) {
        allProjects.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    if (!allProjects) {
        return [];
    }
    allProjects = allProjects.map((obj) => {
        const project = new _manageProject__WEBPACK_IMPORTED_MODULE_0__.Project(obj.name, obj.active, obj.id);
        project.taskList = obj.taskList.map((task) => {
            const projectTask = new _manageProject__WEBPACK_IMPORTED_MODULE_0__.Task(
                task.name,
                task.notes,
                task.dueDate,
                task.priority,
                task.taskId
            );
            return projectTask;
        });
        return project;
    });
    return allProjects;
}

function removeFromLocalStorage(key) {
    for (let i = 0; i < localStorage.length; i++) {
        if (key === JSON.parse(localStorage.getItem(localStorage.key(i))));
        {
            localStorage.removeItem(key);
        }
    }
}


/***/ }),

/***/ "./src/fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf":
/*!*************************************************************!*\
  !*** ./src/fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b230ddb7eabb4b25e123.ttf";

/***/ }),

/***/ "./src/fonts/Dela_Gothic_One/DelaGothicOne-Regular.ttf":
/*!*************************************************************!*\
  !*** ./src/fonts/Dela_Gothic_One/DelaGothicOne-Regular.ttf ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8761c8c6d54ccaa44db.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProject */ "./src/scripts/displayProject.js");
/* harmony import */ var _scripts_manageProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/manageProject */ "./src/scripts/manageProject.js");
/* harmony import */ var _scripts_manageTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/manageTask */ "./src/scripts/manageTask.js");
/* harmony import */ var _displayTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayTask */ "./src/scripts/displayTask.js");






const newProject = document.querySelector("#add-project");
const submitProject = document.querySelector("#submit-project");
const closeProject = document.querySelector("#close-project-modal");
const closeTask = document.querySelector("#close-task-modal");
const newTaskBtn = document.querySelector("#add-task-btn");
const submitTask = document.querySelector("#submit-task");

newProject.addEventListener("click", () => {
    (0,_scripts_manageProject__WEBPACK_IMPORTED_MODULE_2__.openProjectModal)();
});

submitProject.addEventListener("click", (e) => {
    const form = document.querySelector("#project-form");
    e.preventDefault();
    if (form.checkValidity() === false) {
        form.reportValidity();
    } else {
        (0,_scripts_manageProject__WEBPACK_IMPORTED_MODULE_2__.createProject)();
    }
});

const form = document.querySelector("#project-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

closeProject.addEventListener("click", () => {
    (0,_scripts_manageProject__WEBPACK_IMPORTED_MODULE_2__.closeProjectModal)();
});

newTaskBtn.addEventListener("click", () => {
    if (_scripts_manageProject__WEBPACK_IMPORTED_MODULE_2__.projectList.allProjects.length === 0) {
        alert("Create a project first!");
        (0,_scripts_manageProject__WEBPACK_IMPORTED_MODULE_2__.openProjectModal)();
    } else {
        (0,_scripts_manageTask__WEBPACK_IMPORTED_MODULE_3__.openTaskModal)();
    }
});

submitTask.addEventListener("click", (e) => {
    const form = document.querySelector("#task-form");
    e.preventDefault();
    if (form.checkValidity() === false) {
        form.reportValidity();
    } else {
        (0,_scripts_manageTask__WEBPACK_IMPORTED_MODULE_3__.createTask)();
    }
});

closeTask.addEventListener("click", () => {
    (0,_scripts_manageTask__WEBPACK_IMPORTED_MODULE_3__.clearTaskModal)();
    (0,_scripts_manageTask__WEBPACK_IMPORTED_MODULE_3__.closeTaskModal)();
});

(0,_scripts_manageProject__WEBPACK_IMPORTED_MODULE_2__.closeProjectModal)();
(0,_scripts_manageTask__WEBPACK_IMPORTED_MODULE_3__.closeTaskModal)();

(0,_displayProject__WEBPACK_IMPORTED_MODULE_1__.displayImportedProjects)();
(0,_displayProject__WEBPACK_IMPORTED_MODULE_1__.displayActiveProject)();
(0,_displayTask__WEBPACK_IMPORTED_MODULE_4__.clearAllTasks)();
(0,_displayTask__WEBPACK_IMPORTED_MODULE_4__.displayAllTasks)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtLQUFvRTtBQUNoSCw0Q0FBNEMsK0tBQW9FO0FBQ2hILDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxPQUFPLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sUUFBUSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1B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LG1FQUFjO0FBQ2xCLElBQUksbUVBQWM7QUFDbEIsQ0FBQzs7QUFFRCx5RUFBaUI7QUFDakIsbUVBQWM7O0FBRWQsd0VBQXVCO0FBQ3ZCLHFFQUFvQjtBQUNwQiwyREFBYTtBQUNiLDZEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9kaXNwbGF5UHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZGlzcGxheVRhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL21hbmFnZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL21hbmFnZVRhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvRGVsYV9Hb3RoaWNfT25lL0RlbGFHb3RoaWNPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0RNX1NhbnMvRE1TYW5zLVZhcmlhYmxlRm9udF9vcHN6LHdnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiRGVsYVwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJETSBTYW5zXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbjpyb290IHtcbiAgICAtLWJsdWU6ICMwNTRhOTE7XG4gICAgLS1zbGF0ZS1ibHVlOiAjM2U3Y2IxO1xuICAgIC0tZ3JheS1ibHVlOiAjODFhNGNkO1xuICAgIC0tbGlnaHQtZ3JheTogI2RiZTRlZTtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1Myk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XG4gICAgZm9udC1mYW1pbHk6IFwiRE0gU2Fuc1wiO1xufVxuXG5oZWFkZXIge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiA0O1xuICAgIGdyaWQtcm93OiAwIC8gMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWJsdWUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJETSBTYW5zXCI7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIGdhcDogMnJlbTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC00cHggNXB4IC01cHggYmxhY2s7XG59XG5cbmgxIHtcbiAgICBmb250LWZhbWlseTogXCJEZWxhXCI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnNpZGViYXIge1xuICAgIGdyaWQtY29sdW1uOiAwIC8gMTtcbiAgICBncmlkLXJvdzogMS85O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlLWJsdWUpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC01cHggMCA1cHggLTVweCBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZWJhci1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC00cHggNXB4IC01cHggYmxhY2s7XG4gICAgaGVpZ2h0OiA4OC44OHB4O1xufVxuXG4uc2lkZWJhci1oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnByb2plY3QtYnV0dG9uLFxuLnRhc2stYnV0dG9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0MCU7XG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZhLXNvbGlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xufVxuXG4udGFzay1idXR0b24ge1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMzVweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogNTAlO1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgICBvcGFjaXR5OiA3NSU7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDQ7XG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDc7XG59XG5cbiNwcm9qZWN0LWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuI3Byb2plY3QtaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbiNwcm9qZWN0LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xufVxuXG4jc2lkZWJhci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtZGl2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiRE0gU2Fuc1wiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIHdpZHRoOiAxNWVtO1xuICAgIGhlaWdodDogM2VtO1xuICAgIG1hcmdpbjogMTBweCA1cHggMCA1cHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xufVxuXG4ucHJvamVjdC1kaXY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3QtbmFtZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnByb2plY3QtbmFtZSB7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuM3M7XG59XG5cbi5kZWxCdG4sXG4udGFzay1kZWwtYnRuLFxuLmNoZWNrLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGNvbG9yOiByZ2IoOTksIDAsIDApO1xuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZzogMDtcbn1cblxuI3Byb2plY3QtbGFiZWw6OmJlZm9yZSxcbiN0YXNrLWRhdGU6OmJlZm9yZSxcbiN0YXNrLXRpdGxlOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiKlwiO1xuICAgIGNvbG9yOiByZ2IoOTksIDAsIDApO1xufVxuXG4jcHJvamVjdC1tb2RhbCxcbiN0YXNrLW1vZGFsIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUtYmx1ZSk7XG4gICAgbWFyZ2luOiAxNSUgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTBweDtcbn1cblxuI3Byb2plY3QtbW9kYWwgaDIge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSxcbnNlbGVjdCxcbm9wdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkRNIFNhbnNcIjtcbn1cblxuI3Rhc2stbW9kYWwge1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNsb3NlIHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcHJvamVjdC1oMyB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4jcHJvamVjdC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4jdGFzay1tb2RhbCB7XG4gICAgZm9udC1mYW1pbHk6IFwiRE0gU2Fuc1wiO1xufVxuI3Rhc2stZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jdGFzay1mb3JtIGxhYmVsIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuI3N1Ym1pdC10YXNrIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4jc3VibWl0LXRhc2ssXG4jc3VibWl0LXByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jdGFzay1tb2RhbDo6YmFja2Ryb3AsXG4jcHJvamVjdC1tb2RhbDo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnRhc2stZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMTBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1ibHVlKTtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uY2hlY2stYnRuIHtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi50YXNrLWNvbXBsZXRlIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcbn1cblxuLmJ0bnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jbG93LFxuI21lZGl1bSxcbiNoaWdoIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4jbG93IHtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbiNtZWRpdW0ge1xuICAgIGNvbG9yOiByZ2IoMjU1LCA4NSwgMCk7XG59XG5cbiNoaWdoIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4ubm90ZXMge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuZm9vdGVyIHtcbiAgICBncmlkLWNvbHVtbjogc3BhbiA1O1xuICAgIGdyaWQtcm93OiA5IHNwYW4gMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1ibHVlKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDRweCA1cHggLTVweCBibGFjaztcbiAgICBmb250LWZhbWlseTogXCJETSBTYW5zXCI7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0s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RUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsU0FBUztJQUNULDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBOzs7SUFHSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsc0NBQXNDO0lBQ3RDLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRGVsYVxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuL2ZvbnRzL0RlbGFfR290aGljX09uZS9EZWxhR290aGljT25lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiO1xcbiAgICBzcmM6IHVybChcXFwiLi9mb250cy9ETV9TYW5zL0RNU2Fucy1WYXJpYWJsZUZvbnRfb3BzelxcXFwsd2dodC50dGZcXFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJsdWU6ICMwNTRhOTE7XFxuICAgIC0tc2xhdGUtYmx1ZTogIzNlN2NiMTtcXG4gICAgLS1ncmF5LWJsdWU6ICM4MWE0Y2Q7XFxuICAgIC0tbGlnaHQtZ3JheTogI2RiZTRlZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUzKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRE0gU2Fuc1xcXCI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiA0O1xcbiAgICBncmlkLXJvdzogMCAvIDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktYmx1ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRE0gU2Fuc1xcXCI7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC00cHggNXB4IC01cHggYmxhY2s7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEZWxhXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWNvbHVtbjogMCAvIDE7XFxuICAgIGdyaWQtcm93OiAxLzk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlLWJsdWUpO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAtNXB4IDAgNXB4IC01cHggYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNpZGViYXItaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTRweCA1cHggLTVweCBibGFjaztcXG4gICAgaGVpZ2h0OiA4OC44OHB4O1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbixcXG4udGFzay1idXR0b24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZhLXNvbGlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxufVxcblxcbi50YXNrLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDM1cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogNzUlO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gNDtcXG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDc7XFxufVxcblxcbiNwcm9qZWN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0LWhlYWRlciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuI3Byb2plY3QtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG59XFxuXFxuI3NpZGViYXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWRpdiB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJETSBTYW5zXFxcIjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIHdpZHRoOiAxNWVtO1xcbiAgICBoZWlnaHQ6IDNlbTtcXG4gICAgbWFyZ2luOiAxMHB4IDVweCAwIDVweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuXFxuLnByb2plY3QtZGl2OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4zcztcXG59XFxuXFxuLmRlbEJ0bixcXG4udGFzay1kZWwtYnRuLFxcbi5jaGVjay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgY29sb3I6IHJnYig5OSwgMCwgMCk7XFxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI3Byb2plY3QtbGFiZWw6OmJlZm9yZSxcXG4jdGFzay1kYXRlOjpiZWZvcmUsXFxuI3Rhc2stdGl0bGU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCIqXFxcIjtcXG4gICAgY29sb3I6IHJnYig5OSwgMCwgMCk7XFxufVxcblxcbiNwcm9qZWN0LW1vZGFsLFxcbiN0YXNrLW1vZGFsIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZS1ibHVlKTtcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdC1tb2RhbCBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0LFxcbm9wdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJETSBTYW5zXFxcIjtcXG59XFxuXFxuI3Rhc2stbW9kYWwge1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jbG9zZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdC1oMyB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuI3Byb2plY3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jdGFzay1tb2RhbCB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRE0gU2Fuc1xcXCI7XFxufVxcbiN0YXNrLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdGFzay1mb3JtIGxhYmVsIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbiNzdWJtaXQtdGFzayB7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbiNzdWJtaXQtdGFzayxcXG4jc3VibWl0LXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiN0YXNrLW1vZGFsOjpiYWNrZHJvcCxcXG4jcHJvamVjdC1tb2RhbDo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi50YXNrLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1ibHVlKTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jaGVjay1idG4ge1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi50YXNrLWNvbXBsZXRlIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JlZW47XFxufVxcblxcbi5idG5zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jbG93LFxcbiNtZWRpdW0sXFxuI2hpZ2gge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jbG93IHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4jbWVkaXVtIHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDg1LCAwKTtcXG59XFxuXFxuI2hpZ2gge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubm90ZXMge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDU7XFxuICAgIGdyaWQtcm93OiA5IHNwYW4gMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktYmx1ZSk7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNHB4IDVweCAtNXB4IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJpbXBvcnQge1xuICAgIHByb2plY3RMaXN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgYWxsUHJvamVjdHNJbmFjdGl2ZSxcbn0gZnJvbSBcIi4vbWFuYWdlUHJvamVjdFwiO1xuaW1wb3J0IHsgY2xlYXJBbGxUYXNrcywgZGlzcGxheUFsbFRhc2tzIH0gZnJvbSBcIi4vZGlzcGxheVRhc2tcIjtcbmltcG9ydCB7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UsXG4gICAgaW1wb3J0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlLFxuICAgIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UsXG59IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KCkge1xuICAgIGNvbnN0IHNpZGViYXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyLWNvbnRlbnRcIik7XG4gICAgY29uc3QgcHJvamVjdEgzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWgzXCIpO1xuXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TGlzdC5hbGxQcm9qZWN0cy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SWQgPSBwcm9qZWN0TGlzdC5hbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF0uaWQ7XG5cbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRpdlwiKTtcbiAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGN1cnJlbnRQcm9qZWN0SWQpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdExpc3QuYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdLm5hbWU7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgY3VycmVudFByb2plY3RJZCk7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZChwcm9qZWN0TmFtZSk7XG5cbiAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGlmIChwcm9qZWN0TGlzdC5hbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF0ubmFtZSAhPT0gXCJEZWZhdWx0XCIpIHtcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxCdG5cIik7XG4gICAgICAgIGRlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjdXJyZW50UHJvamVjdElkKTtcbiAgICAgICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICBpLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLW1pbnVzXCIsIFwiZmEtMnhsXCIpO1xuICAgICAgICBkZWxCdG4uYXBwZW5kKGkpO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZChkZWxCdG4pO1xuICAgIH1cblxuICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICh0YXJnZXQpID0+IHtcbiAgICAgICAgY29uc3QgY2xpY2tlZFByb2plY3QgPSB0YXJnZXQudGFyZ2V0O1xuICAgICAgICBhbGxQcm9qZWN0c0luYWN0aXZlKCk7XG4gICAgICAgIHByb2plY3RMaXN0LmFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmlkID09PSBjbGlja2VkUHJvamVjdC5pZCkge1xuICAgICAgICAgICAgICAgIHByb2plY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjbGVhckFsbFRhc2tzKCk7XG4gICAgICAgICAgICAgICAgZGlzcGxheUFsbFRhc2tzKCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEgzLnRleHRDb250ZW50ID0gY2xpY2tlZFByb2plY3QudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUb0xvY2FsU3RvcmFnZShwcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2xlYXJBbGxUYXNrcygpO1xuICAgICAgICBkZWxldGVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0SWQpO1xuICAgICAgICByZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGN1cnJlbnRQcm9qZWN0SWQpO1xuICAgIH0pO1xuXG4gICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kKHByb2plY3REaXYpO1xuICAgIGRpc3BsYXlBbGxUYXNrcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU5ld2VzdFByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdEgzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWgzXCIpO1xuXG4gICAgYWxsUHJvamVjdHNJbmFjdGl2ZSgpO1xuXG4gICAgY29uc3QgbmV3ZXN0UHJvamVjdEluZGV4ID0gcHJvamVjdExpc3QuYWxsUHJvamVjdHMubGVuZ3RoIC0gMTtcbiAgICBwcm9qZWN0TGlzdC5hbGxQcm9qZWN0c1tuZXdlc3RQcm9qZWN0SW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgcHJvamVjdExpc3QuYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gcHJvamVjdExpc3QuYWxsUHJvamVjdHNbbmV3ZXN0UHJvamVjdEluZGV4XS5pZCkge1xuICAgICAgICAgICAgY2xlYXJBbGxUYXNrcygpO1xuICAgICAgICAgICAgZGlzcGxheUFsbFRhc2tzKCk7XG4gICAgICAgICAgICBwcm9qZWN0SDMudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgIHByb2plY3RMaXN0LmFsbFByb2plY3RzW25ld2VzdFByb2plY3RJbmRleF0ubmFtZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFjdGl2ZVByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdEgzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWgzXCIpO1xuICAgIGlmIChwcm9qZWN0TGlzdC5hbGxQcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcHJvamVjdEgzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGxQcm9qZWN0c0luYWN0aXZlKCk7XG4gICAgICAgIHByb2plY3RMaXN0LmFsbFByb2plY3RzWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNsZWFyQWxsVGFza3MoKTtcbiAgICAgICAgcHJvamVjdExpc3QuYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IHByb2plY3RMaXN0LmFsbFByb2plY3RzWzBdLmlkKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheUFsbFRhc2tzKCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEgzLnRleHRDb250ZW50ID0gcHJvamVjdExpc3QuYWxsUHJvamVjdHNbMF0ubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUltcG9ydGVkUHJvamVjdHMoKSB7XG4gICAgY29uc3Qgc2lkZWJhckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXItY29udGVudFwiKTtcbiAgICBjb25zdCBwcm9qZWN0SDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtaDNcIik7XG5cbiAgICBpbXBvcnRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRpdlwiKTtcbiAgICAgICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0LmlkKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0LmlkKTtcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmQocHJvamVjdE5hbWUpO1xuXG4gICAgICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgIT09IFwiRGVmYXVsdFwiKSB7XG4gICAgICAgICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZChcImRlbEJ0blwiKTtcbiAgICAgICAgICAgIGRlbEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9qZWN0LmlkKTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgICAgIGkuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtbWludXNcIiwgXCJmYS0yeGxcIik7XG4gICAgICAgICAgICBkZWxCdG4uYXBwZW5kKGkpO1xuICAgICAgICAgICAgcHJvamVjdERpdi5hcHBlbmQoZGVsQnRuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbGlja2VkUHJvamVjdCA9IHRhcmdldC50YXJnZXQ7XG4gICAgICAgICAgICBhbGxQcm9qZWN0c0luYWN0aXZlKCk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3QuaWQgPT09IGNsaWNrZWRQcm9qZWN0LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJBbGxUYXNrcygpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEgzLnRleHRDb250ZW50ID0gY2xpY2tlZFByb2plY3QudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJBbGxUYXNrcygpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0LmlkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kKHByb2plY3REaXYpO1xuICAgICAgICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IGZpbmRUYXNrLCBkZWxldGVUYXNrLCBzZWxlY3RBbGxUYXNrcyB9IGZyb20gXCIuL21hbmFnZVRhc2tcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrKCkge1xuICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBjdXJyZW50VGFzayA9IGZpbmRUYXNrKCk7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1kaXZcIik7XG4gICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjdXJyZW50VGFzay50YXNrSWQpO1xuXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTm90ZXMuY2xhc3NMaXN0LmFkZChcIm5vdGVzXCIpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgY2hlY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNoZWNrQnRuLmNsYXNzTGlzdC5hZGQoXCJjaGVjay1idG5cIik7XG4gICAgY29uc3QgY2hlY2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgY2hlY2tJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLWNoZWNrXCIsIFwiZmEtMnhsXCIpO1xuICAgIGNoZWNrQnRuLmFwcGVuZChjaGVja0ljb24pO1xuICAgIGNoZWNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGN1cnJlbnRUYXNrLnRhc2tJZCk7XG5cbiAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZWwtYnRuXCIpO1xuICAgIGNvbnN0IGRlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBkZWxJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLW1pbnVzXCIsIFwiZmEtMnhsXCIpO1xuICAgIGRlbEJ0bi5hcHBlbmQoZGVsSWNvbik7XG4gICAgZGVsQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGN1cnJlbnRUYXNrLnRhc2tJZCk7XG5cbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG5zLmNsYXNzTGlzdC5hZGQoXCJidG5zXCIpO1xuXG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50VGFzay5uYW1lO1xuICAgIHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9IGN1cnJlbnRUYXNrLm5vdGVzO1xuICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gY3VycmVudFRhc2suZHVlRGF0ZTtcbiAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBjdXJyZW50VGFzay5wcmlvcml0eTtcblxuICAgIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcblxuICAgIGJ0bnMuYXBwZW5kKGNoZWNrQnRuLCBkZWxCdG4pO1xuICAgIHRhc2tEaXYuYXBwZW5kKHRhc2tOYW1lLCB0YXNrTm90ZXMsIHRhc2tEYXRlLCB0YXNrUHJpb3JpdHksIGJ0bnMpO1xuICAgIHByb2plY3RDb250ZW50LmFwcGVuZCh0YXNrRGl2KTtcblxuICAgIGNoZWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbXBsZXRlVGFzayh0YXNrRGl2KTtcbiAgICB9KTtcblxuICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkZWxldGVUYXNrKGN1cnJlbnRUYXNrLnRhc2tJZCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gICAgY29uc3QgY3VycmVudFRhc2sgPSBmaW5kVGFzaygpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gc2VsZWN0QWxsVGFza3MoKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jb250ZW50XCIpO1xuICAgIHRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stZGl2XCIpO1xuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2sudGFza0lkKTtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tOb3Rlcy5jbGFzc0xpc3QuYWRkKFwibm90ZXNcIik7XG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCBjaGVja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNoZWNrQnRuLmNsYXNzTGlzdC5hZGQoXCJjaGVjay1idG5cIik7XG4gICAgICAgIGNvbnN0IGNoZWNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICBjaGVja0ljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtY2hlY2tcIiwgXCJmYS0yeGxcIik7XG4gICAgICAgIGNoZWNrQnRuLmFwcGVuZChjaGVja0ljb24pO1xuICAgICAgICBjaGVja0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0YXNrLnRhc2tJZCk7XG5cbiAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbC1idG5cIik7XG4gICAgICAgIGNvbnN0IGRlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgZGVsSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1taW51c1wiLCBcImZhLTJ4bFwiKTtcbiAgICAgICAgZGVsQnRuLmFwcGVuZChkZWxJY29uKTtcbiAgICAgICAgZGVsQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2sudGFza0lkKTtcblxuICAgICAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnRucy5jbGFzc0xpc3QuYWRkKFwiYnRuc1wiKTtcblxuICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgICAgICAgdGFza05vdGVzLnRleHRDb250ZW50ID0gdGFzay5ub3RlcztcbiAgICAgICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICAgICAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcblxuICAgICAgICBidG5zLmFwcGVuZChjaGVja0J0biwgZGVsQnRuKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmQodGFza05hbWUsIHRhc2tOb3RlcywgdGFza0RhdGUsIHRhc2tQcmlvcml0eSwgYnRucyk7XG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZCh0YXNrRGl2KTtcblxuICAgICAgICBjaGVja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29tcGxldGVUYXNrKHRhc2tEaXYpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2sodGFzay50YXNrSWQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQWxsVGFza3MoKSB7XG4gICAgY29uc3QgdGFza0RpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stZGl2XCIpO1xuICAgIHRhc2tEaXZzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLnJlbW92ZSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2soZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInRhc2stY29tcGxldGVcIikpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1jb21wbGV0ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbXBsZXRlXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQge1xuICAgIGRpc3BsYXlOZXdlc3RQcm9qZWN0LFxuICAgIGRpc3BsYXlQcm9qZWN0LFxuICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0LFxufSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xuaW1wb3J0IHsgYWRkVG9Mb2NhbFN0b3JhZ2UsIGltcG9ydFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY2xhc3MgUHJvamVjdE1hbmFnZXIge1xuICAgIGFsbFByb2plY3RzID0gaW1wb3J0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuYWxsUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgYWRkVG9Mb2NhbFN0b3JhZ2UocHJvamVjdCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdChpZCkge1xuICAgICAgICB0aGlzLmFsbFByb2plY3RzID0gdGhpcy5hbGxQcm9qZWN0cy5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWwuaWQgIT09IGlkO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhY3RpdmUgPSBmYWxzZSwgaWQgPSB1dWlkdjQoKSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICAgIHRhc2sucHJvamVjdElkID0gdGhpcy5pZDtcbiAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIHJlbW92ZVRhc2soaWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YXNrTGlzdFtpXS50YXNrSWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBub3RlcywgZHVlRGF0ZSwgcHJpb3JpdHksIHRhc2tJZCA9IHV1aWR2NCgpKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnRhc2tJZCA9IHRhc2tJZDtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgcHJvamVjdExpc3QgPSBuZXcgUHJvamVjdE1hbmFnZXIoKTtcblxuaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCkge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0XCIsIHRydWUpO1xuICAgIHByb2plY3RMaXN0LmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlblByb2plY3RNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1tb2RhbFwiKTtcbiAgICBtb2RhbC5zaG93TW9kYWwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUHJvamVjdE1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW1vZGFsXCIpO1xuICAgIG1vZGFsLmNsb3NlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclByb2plY3RNb2RhbCgpIHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIik7XG4gICAgdXNlcklucHV0LnZhbHVlID0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh1c2VySW5wdXQudmFsdWUpO1xuICAgIHByb2plY3RMaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UobmV3UHJvamVjdCk7XG4gICAgY2xlYXJQcm9qZWN0TW9kYWwoKTtcbiAgICBjbG9zZVByb2plY3RNb2RhbCgpO1xuICAgIGRpc3BsYXlOZXdlc3RQcm9qZWN0KCk7XG4gICAgZGlzcGxheVByb2plY3QoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gICAgY29uc3QgcHJvamVjdERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZGl2XCIpO1xuICAgIHByb2plY3RMaXN0LmFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RJZCA9PT0gcHJvamVjdC5pZCkge1xuICAgICAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlUHJvamVjdChwcm9qZWN0LmlkKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHByb2plY3REaXZzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RJZCA9PT0gZWxlbWVudC5pZCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGxQcm9qZWN0c0luYWN0aXZlKCkge1xuICAgIHByb2plY3RMaXN0LmFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IHByb2plY3RMaXN0LCBUYXNrIH0gZnJvbSBcIi4vbWFuYWdlUHJvamVjdFwiO1xuaW1wb3J0IHsgZGlzcGxheVRhc2sgfSBmcm9tIFwiLi9kaXNwbGF5VGFza1wiO1xuaW1wb3J0IHsgYWRkVG9Mb2NhbFN0b3JhZ2UsIGltcG9ydFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5UYXNrTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbW9kYWxcIik7XG4gICAgbW9kYWwuc2hvd01vZGFsKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVRhc2tNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1tb2RhbFwiKTtcbiAgICBtb2RhbC5jbG9zZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5hbWVcIik7XG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbm90ZXNcIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZFwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcmlvcml0eVwiKTtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgbmFtZS52YWx1ZSxcbiAgICAgICAgbm90ZXMudmFsdWUsXG4gICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgIHByaW9yaXR5LnZhbHVlXG4gICAgKTtcbiAgICBhY3RpdmVQcm9qZWN0KCk7XG4gICAgYWRkVGFzayhuZXdUYXNrKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShhY3RpdmVQcm9qZWN0KCkpO1xuICAgIGNsZWFyVGFza01vZGFsKCk7XG4gICAgY2xvc2VUYXNrTW9kYWwoKTtcbiAgICBkaXNwbGF5VGFzayhuZXdUYXNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2ZVByb2plY3QoKSB7XG4gICAgbGV0IGFjdGl2ZVByb2plY3Q7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5hbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3QuYWxsUHJvamVjdHNbaV0uYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdExpc3QuYWxsUHJvamVjdHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2ZVByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QuYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0LmFsbFByb2plY3RzW2ldLmlkID09PSBhY3RpdmVQcm9qZWN0KCkuaWQpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFsbFByb2plY3RzW2ldLmFkZFRhc2sodGFzayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGFza0xpc3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdDtcbiAgICBsZXQgY3VycmVudFRhc2tMaXN0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QuYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0LmFsbFByb2plY3RzW2ldLmlkID09PSBhY3RpdmVQcm9qZWN0KCkuaWQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3VycmVudFRhc2tMaXN0ID0gcHJvamVjdExpc3QuYWxsUHJvamVjdHNbc2VsZWN0ZWRQcm9qZWN0XS50YXNrTGlzdDtcbiAgICByZXR1cm4gY3VycmVudFRhc2tMaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFRhc2soKSB7XG4gICAgbGV0IHNlbGVjdGVkUHJvamVjdDtcbiAgICBsZXQgY3VycmVudFRhc2s7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5hbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocHJvamVjdExpc3QuYWxsUHJvamVjdHNbaV0uaWQgPT09IGFjdGl2ZVByb2plY3QoKS5pZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKFxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGkgPCBwcm9qZWN0TGlzdC5hbGxQcm9qZWN0c1tzZWxlY3RlZFByb2plY3RdLnRhc2tMaXN0Lmxlbmd0aDtcbiAgICAgICAgaSsrXG4gICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFsbFByb2plY3RzW3NlbGVjdGVkUHJvamVjdF0udGFza0xpc3RbaV0ucHJvamVjdElkID09PVxuICAgICAgICAgICAgYWN0aXZlUHJvamVjdCgpLmlkXG4gICAgICAgICkge1xuICAgICAgICAgICAgY3VycmVudFRhc2sgPSBwcm9qZWN0TGlzdC5hbGxQcm9qZWN0c1tzZWxlY3RlZFByb2plY3RdLnRhc2tMaXN0W2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50VGFzaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQcm9qZWN0KCkge1xuICAgIGxldCBjdXJyZW50UHJvamVjdDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0LmFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdC5hbGxQcm9qZWN0c1tpXS5pZCA9PT0gYWN0aXZlUHJvamVjdCgpLmlkKSB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb2plY3RMaXN0LmFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFza0lkKSB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBmaW5kUHJvamVjdCgpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZmluZFRhc2tMaXN0KCk7XG4gICAgbGV0IHNlbGVjdGVkVGFza0lkO1xuXG4gICAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay50YXNrSWQgPT09IHRhc2tJZCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRUYXNrSWQgPSB0YXNrSWQ7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBkZWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWRlbC1idG5cIik7XG4gICAgZGVsQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgaWYgKGJ0bi5pZCA9PT0gc2VsZWN0ZWRUYXNrSWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LnJlbW92ZVRhc2sodGFza0lkKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdGFza0RpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stZGl2XCIpO1xuICAgIHRhc2tEaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICBpZiAoZGl2LmlkID09PSBzZWxlY3RlZFRhc2tJZCkge1xuICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoY3VycmVudFByb2plY3QpO1xuICAgIGltcG9ydFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0QWxsVGFza3MoKSB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBhY3RpdmVQcm9qZWN0KCk7XG4gICAgY29uc3QgcHJvamVjdFRhc2tzID0gY3VycmVudFByb2plY3QudGFza0xpc3Q7XG4gICAgcmV0dXJuIHByb2plY3RUYXNrcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVGFza01vZGFsKCkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKTtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1ub3Rlc1wiKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRkXCIpO1xuXG4gICAgbmFtZS52YWx1ZSA9IG51bGw7XG4gICAgbm90ZXMudmFsdWUgPSBudWxsO1xuICAgIGRhdGUudmFsdWUgPSBudWxsO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdExpc3QsIFByb2plY3QgfSBmcm9tIFwiLi9tYW5hZ2VQcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vbWFuYWdlUHJvamVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9Mb2NhbFN0b3JhZ2UocHJvamVjdCkge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdExpc3QuYWxsUHJvamVjdHMubGVuZ3RoO1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RMaXN0LmFsbFByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIHByb2plY3RMaXN0LmFsbFByb2plY3RzW3Byb2plY3RJbmRleF0uaWQsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0LmFsbFByb2plY3RzW3Byb2plY3RJbmRleF0pXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBsZXQgYWxsUHJvamVjdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBhbGxQcm9qZWN0cy5wdXNoKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpKTtcbiAgICB9XG4gICAgaWYgKCFhbGxQcm9qZWN0cykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGFsbFByb2plY3RzID0gYWxsUHJvamVjdHMubWFwKChvYmopID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG9iai5uYW1lLCBvYmouYWN0aXZlLCBvYmouaWQpO1xuICAgICAgICBwcm9qZWN0LnRhc2tMaXN0ID0gb2JqLnRhc2tMaXN0Lm1hcCgodGFzaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICAgICAgICB0YXNrLm5hbWUsXG4gICAgICAgICAgICAgICAgdGFzay5ub3RlcyxcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICB0YXNrLnRhc2tJZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0VGFzaztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH0pO1xuICAgIHJldHVybiBhbGxQcm9qZWN0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGtleSA9PT0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSkpO1xuICAgICAgICB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7XG4gICAgZGlzcGxheUFjdGl2ZVByb2plY3QsXG4gICAgZGlzcGxheUltcG9ydGVkUHJvamVjdHMsXG4gICAgZGlzcGxheU5ld2VzdFByb2plY3QsXG59IGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0XCI7XG5pbXBvcnQge1xuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgb3BlblByb2plY3RNb2RhbCxcbiAgICBjbG9zZVByb2plY3RNb2RhbCxcbiAgICBwcm9qZWN0TGlzdCxcbn0gZnJvbSBcIi4uL3NjcmlwdHMvbWFuYWdlUHJvamVjdFwiO1xuaW1wb3J0IHtcbiAgICBjbG9zZVRhc2tNb2RhbCxcbiAgICBjcmVhdGVUYXNrLFxuICAgIG9wZW5UYXNrTW9kYWwsXG4gICAgY2xlYXJUYXNrTW9kYWwsXG59IGZyb20gXCIuLi9zY3JpcHRzL21hbmFnZVRhc2tcIjtcbmltcG9ydCB7IGNsZWFyQWxsVGFza3MsIGRpc3BsYXlBbGxUYXNrcyB9IGZyb20gXCIuL2Rpc3BsYXlUYXNrXCI7XG5cbmNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpO1xuY29uc3Qgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0LXByb2plY3RcIik7XG5jb25zdCBjbG9zZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLXByb2plY3QtbW9kYWxcIik7XG5jb25zdCBjbG9zZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLXRhc2stbW9kYWxcIik7XG5jb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idG5cIik7XG5jb25zdCBzdWJtaXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXQtdGFza1wiKTtcblxubmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9wZW5Qcm9qZWN0TW9kYWwoKTtcbn0pO1xuXG5zdWJtaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZm9ybVwiKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xuICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdCgpO1xuICAgIH1cbn0pO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWZvcm1cIik7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuY2xvc2VQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xvc2VQcm9qZWN0TW9kYWwoKTtcbn0pO1xuXG5uZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RMaXN0LmFsbFByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhbGVydChcIkNyZWF0ZSBhIHByb2plY3QgZmlyc3QhXCIpO1xuICAgICAgICBvcGVuUHJvamVjdE1vZGFsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb3BlblRhc2tNb2RhbCgpO1xuICAgIH1cbn0pO1xuXG5zdWJtaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZm9ybVwiKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpID09PSBmYWxzZSkge1xuICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3JlYXRlVGFzaygpO1xuICAgIH1cbn0pO1xuXG5jbG9zZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclRhc2tNb2RhbCgpO1xuICAgIGNsb3NlVGFza01vZGFsKCk7XG59KTtcblxuY2xvc2VQcm9qZWN0TW9kYWwoKTtcbmNsb3NlVGFza01vZGFsKCk7XG5cbmRpc3BsYXlJbXBvcnRlZFByb2plY3RzKCk7XG5kaXNwbGF5QWN0aXZlUHJvamVjdCgpO1xuY2xlYXJBbGxUYXNrcygpO1xuZGlzcGxheUFsbFRhc2tzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=