"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmealicious_gallery_js_capstone"] = self["webpackChunkmealicious_gallery_js_capstone"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/logo2.png */ \"./src/assets/logo2.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: #5f5656;\r\n  color: #fff;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  font-size: 45px;\r\n  margin-top: 30px;\r\n  color: #fff;\r\n}\r\n\r\n.descrip {\r\n  width: 80%;\r\n  padding: 20px;\r\n  font-size: 20px;\r\n  text-align: justify;\r\n  color: #fff;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  background-color: rgb(253, 185, 0);\r\n  height: 90px;\r\n  position: fixed;\r\n  z-index: 1;\r\n}\r\n\r\n.logo {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  width: 100px;\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  margin-left: 3%;\r\n}\r\n\r\n.header-text {\r\n  width: 30%;\r\n}\r\n\r\n.header-text ul {\r\n  display: flex;\r\n  padding-top: 2rem;\r\n}\r\n\r\n.header-text li a {\r\n  color: #000;\r\n  font-weight: 700;\r\n  padding: 26px;\r\n}\r\n\r\nheader img {\r\n  border-radius: 50%;\r\n  width: 100px;\r\n  height: 100px;\r\n  height: 90px;\r\n}\r\n\r\n.gallery-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  column-gap: 20px;\r\n  margin-bottom: 40px;\r\n  margin-top: 100px;\r\n}\r\n\r\n.gallery-item {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  margin: 30px;\r\n  gap: 6px;\r\n  padding: 15px;\r\n  border-radius: 25px;\r\n  background-color: #222;\r\n  color: #fff;\r\n}\r\n\r\n.img-container {\r\n  width: 65%;\r\n  height: 60%;\r\n}\r\n\r\n.img-container img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 15px;\r\n}\r\n\r\n.like-comment {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  font-size: 20px;\r\n  font-weight: 700;\r\n  height: 80px;\r\n}\r\n\r\n.number-of-likes {\r\n  display: flex;\r\n  width: 80%;\r\n  justify-content: end;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n\r\n.button-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.comment-btn {\r\n  width: 30%;\r\n  padding: 6px;\r\n  background: rgb(253, 185, 0);\r\n  border: none;\r\n  color: #fff;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  border-radius: 8px;\r\n}\r\n\r\n.reservation-btn {\r\n  width: 35%;\r\n  padding: 6px;\r\n  background: rgb(253, 185, 0);\r\n  border: none;\r\n  color: #fff;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  border-radius: 8px;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  background-color: #000;\r\n  padding: 10px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .gallery-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .header-text ul {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) and (max-width: 1024px) {\r\n  .gallery-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .header-text {\r\n    width: 46%;\r\n  }\r\n\r\n  .header-text ul {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n/* Comment popup section */\r\n.overlay {\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\n.popup-container {\r\n  background: #fff;\r\n  width: 75%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 6px;\r\n  overflow: scroll;\r\n  border: 13px solid #222;\r\n  padding: 20px;\r\n  color: #000;\r\n  position: relative;\r\n}\r\n\r\n.popup-image {\r\n  width: 28%;\r\n  height: 33%;\r\n  margin-top: 10%;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  top: 0;\r\n  font-size: 66px;\r\n  background: none;\r\n  border: none;\r\n  color: red;\r\n  right: 0;\r\n}\r\n\r\n.popup-food-name,\r\n.comments-title,\r\n.form-title {\r\n  font-size: 25px;\r\n}\r\n\r\n.popup-item-details-container {\r\n  font-size: 18px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  column-gap: 300px;\r\n  text-align: center;\r\n}\r\n\r\n.comments-div {\r\n  font-size: 20px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .popup-container {\r\n    width: 90%;\r\n    padding: 10px;\r\n  }\r\n\r\n  .popup-img {\r\n    width: 70%;\r\n    height: auto;\r\n    margin-top: 2%;\r\n  }\r\n\r\n  .close-btn {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .popup-food-name,\r\n  .comments-title,\r\n  .form-title {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .popup-item-details-container {\r\n    grid-template-columns: 1fr;\r\n    column-gap: 0;\r\n    text-align: left;\r\n  }\r\n\r\n  .popup-item-details-container p {\r\n    text-align: left;\r\n  }\r\n\r\n  .comments-div p {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.visible {\r\n  display: flex;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getMeals.js */ \"./src/modules/getMeals.js\");\n/* harmony import */ var _modules_PopUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/PopUp.js */ \"./src/modules/PopUp.js\");\n/* harmony import */ var _modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _modules_postLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/postLike.js */ \"./src/modules/postLike.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst galleryContainer = document.querySelector('.gallery-container');\r\nlet mealsArr = [];\r\nconst showCards = async () => {\r\n  try {\r\n    mealsArr = await (0,_modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    const likeData = await (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    mealsArr.forEach((meal, id) => {\r\n      const itemDiv = document.createElement('div');\r\n      itemDiv.classList.add('gallery-item');\r\n      itemDiv.setAttribute('data-id', id);\r\n      itemDiv.innerHTML = `\r\n        <div class=\"img-container\">\r\n          <img src=\"${meal.strMealThumb}\" alt=\"logo\">\r\n        </div>\r\n        <div class=\"like-comment\">\r\n          <p class=\"item-name\">${meal.strMeal}</p>\r\n          <i class=\"fa-regular fa-heart\" style=\"color: #ff0000;\"></i>\r\n        </div>\r\n        <div class=\"number-of-likes\"></div>\r\n        <div class=\"button-container\">\r\n          <button class=\"comment-btn\">Comments</button>\r\n          <button class=\"reservation-btn\">Reservation</button>\r\n        </div>\r\n      `;\r\n\r\n      const numOfLikeDiv = itemDiv.querySelector('.number-of-likes');\r\n      let mealLikes = 0;\r\n      const like = likeData.find((like) => like.item_id === id);\r\n\r\n      if (like) {\r\n        mealLikes = like.likes;\r\n      }\r\n      numOfLikeDiv.textContent = `${mealLikes} Likes`;\r\n       // HERTH ICON EVENT LISTENER\r\n      const heartIcon = itemDiv.querySelector('.fa-heart');\r\n      heartIcon.addEventListener('click', () => {\r\n        (0,_modules_postLike_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(id, itemDiv);\r\n      });\r\n      heartIcon.addEventListener('mouseup', () => {\r\n        heartIcon.classList.add('fa-solid');\r\n        heartIcon.classList.remove('fa-regular');\r\n      });\r\n\r\n\r\n      galleryContainer.appendChild(itemDiv);\r\n      const commentBtns = itemDiv.querySelectorAll('.comment-btn');\r\n      commentBtns.forEach((btn) => {\r\n        btn.addEventListener('click', () => {\r\n          (0,_modules_PopUp_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(meal.idMeal);\r\n          // commentGet(meal.idMeal);\r\n        });\r\n      });\r\n    });\r\n  } catch (error) {\r\n    console.error('Error showing cards:', error);\r\n  }\r\n};\r\n\r\ndocument.addEventListener('DOMContentLoaded', async () => {\r\n  await showCards();\r\n});\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/Comments.js":
/*!*********************************!*\
  !*** ./src/modules/Comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentGet = async (id) => {\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/T1s4xFdr6wtV60QfASVp/comments?item_id=${id}`, {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n\r\n  });\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentGet);\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./src/modules/Comments.js?");

/***/ }),

/***/ "./src/modules/PopUp.js":
/*!******************************!*\
  !*** ./src/modules/PopUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comments.js */ \"./src/modules/Comments.js\");\n\r\n\r\nconst openPopup = async (id) => {\r\n  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);\r\n  const { meals } = await response.json();\r\n  const mainContainer = document.querySelector('.main-container');\r\n\r\n  const overlay = document.createElement('div');\r\n  overlay.classList.add('overlay');\r\n  const popupContainer = document.createElement('div');\r\n  popupContainer.classList.add('popup-container');\r\n  const comments = await (0,_Comments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\r\n  let commentsHTML = '';\r\n  if (comments.length > 0) {\r\n    commentsHTML = comments\r\n      .map((comment) => `<p>${comment.creation_date}- ${comment.username}:${comment.comment}</p>`)\r\n      .join('');\r\n  }\r\n\r\n  const {\r\n    strMealThumb, strMeal, strArea, strMeasure2, strCategory, strIngredient6,\r\n  } = meals[0];\r\n\r\n  popupContainer.innerHTML = `\r\n      <button class=\"close-btn\">&times;</button>\r\n      <img src=\"${strMealThumb}\" class=\"popup-image\">\r\n  <h2 class='popup-food-name'>${strMeal}</h2>\r\n  <div class=\"popup-item-details-container\">\r\n    <p>Area: ${strArea}</p>\r\n    <p>Measure: ${strMeasure2}</p>\r\n    <p>Category: ${strCategory}</p>\r\n    <p>Ingredient: ${strIngredient6}</p>\r\n  </div>\r\n\r\n  <h3 class=\"comments-title\">Comments ('0')</h3>\r\n      <div class=\"comments-div\">\r\n        ${commentsHTML}\r\n      </div>\r\n    `;\r\n\r\n  document.querySelector('footer').classList.toggle('hidden');\r\n  document.querySelector('header').classList.toggle('hidden');\r\n\r\n  overlay.classList.toggle('visible');\r\n  overlay.appendChild(popupContainer);\r\n  mainContainer.appendChild(overlay);\r\n\r\n  const closeBtn = overlay.querySelector('.close-btn');\r\n  closeBtn.addEventListener('click', () => {\r\n    overlay.classList.toggle('visible');\r\n    document.querySelector('footer').classList.toggle('hidden');\r\n    document.querySelector('header').classList.toggle('hidden');\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openPopup);\r\n\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./src/modules/PopUp.js?");

/***/ }),

/***/ "./src/modules/apiData.js":
/*!********************************!*\
  !*** ./src/modules/apiData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiData: () => (/* binding */ apiData),\n/* harmony export */   commentUrl: () => (/* binding */ commentUrl),\n/* harmony export */   likeUrl: () => (/* binding */ likeUrl)\n/* harmony export */ });\nconst apiData = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American';\nconst likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/T1s4xFdr6wtV60QfASVp/likes/';\nconst commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/T1s4xFdr6wtV60QfASVp/comments/';\n\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./src/modules/apiData.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiData.js */ \"./src/modules/apiData.js\");\n\r\n\r\nconst getLikes = async () => {\r\n  try {\r\n    const response = await fetch(_apiData_js__WEBPACK_IMPORTED_MODULE_0__.likeUrl, {\r\n      method: 'GET',\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n    const data = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    return [];\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/getMeals.js":
/*!*********************************!*\
  !*** ./src/modules/getMeals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiData.js */ \"./src/modules/apiData.js\");\n\n\nconst getMeals = async () => {\n  const response = await fetch(_apiData_js__WEBPACK_IMPORTED_MODULE_0__.apiData);\n  const { meals } = await response.json();\n  return meals;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeals);\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./src/modules/getMeals.js?");

/***/ }),

/***/ "./src/modules/postLike.js":
/*!*********************************!*\
  !*** ./src/modules/postLike.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiData.js */ \"./src/modules/apiData.js\");\n\r\n\r\nconst postLike = async (itemId) => {\r\n  try {\r\n    const response = await fetch(_apiData_js__WEBPACK_IMPORTED_MODULE_0__.likeUrl, {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify({\r\n        item_id: itemId,\r\n        action: 'like',\r\n      }),\r\n    });\r\n  } catch (error) {\r\n    console.error('Error recording interaction:', error);\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLike);\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./src/modules/postLike.js?");

/***/ }),

/***/ "./src/assets/logo2.png":
/*!******************************!*\
  !*** ./src/assets/logo2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d301a4302909de3a8d05.png\";\n\n//# sourceURL=webpack://mealicious-gallery-js-capstone/./src/assets/logo2.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);