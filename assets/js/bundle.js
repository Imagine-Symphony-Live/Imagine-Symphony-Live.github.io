/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/images/bloom-128x128.png":
/*!*****************************************!*\
  !*** ./assets/images/bloom-128x128.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/3189f111c098afc68f57fbdd560dd1cf.png";

/***/ }),

/***/ "./assets/images/instrument-icons/insicon_bass.svg":
/*!*********************************************************!*\
  !*** ./assets/images/instrument-icons/insicon_bass.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/a793fbb174630c63bf4d4ca0b0d8ca7c.png";

/***/ }),

/***/ "./assets/images/instrument-icons/insicon_brass.svg":
/*!**********************************************************!*\
  !*** ./assets/images/instrument-icons/insicon_brass.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/377a9a1ab0565e85240ec78d42aa13e2.png";

/***/ }),

/***/ "./assets/images/instrument-icons/insicon_cello.svg":
/*!**********************************************************!*\
  !*** ./assets/images/instrument-icons/insicon_cello.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/96ae1c4d438413643f7d5a83c1832bba.png";

/***/ }),

/***/ "./assets/images/instrument-icons/insicon_clarinet.svg":
/*!*************************************************************!*\
  !*** ./assets/images/instrument-icons/insicon_clarinet.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/0cd6dc32444107d70333c50c859ec027.png";

/***/ }),

/***/ "./assets/images/instrument-icons/insicon_cymbals.svg":
/*!************************************************************!*\
  !*** ./assets/images/instrument-icons/insicon_cymbals.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/475e35e0f264bccc1e74db614b708006.png";

/***/ }),

/***/ "./assets/images/instrument-icons/insicon_flute.svg":
/*!**********************************************************!*\
  !*** ./assets/images/instrument-icons/insicon_flute.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/a44c867bfe80a6c501af05cd29f51f9b.png";

/***/ }),

/***/ "./assets/images/instrument-icons/insicon_harp.svg":
/*!*********************************************************!*\
  !*** ./assets/images/instrument-icons/insicon_harp.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/7550a4008f84c7191de51589d0efbd8b.png";

/***/ }),

/***/ "./assets/images/instrument-icons/insicon_horn.svg":
/*!*********************************************************!*\
  !*** ./assets/images/instrument-icons/insicon_horn.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/45e232131edf088a3cdad9098c50af0b.png";

/***/ }),

/***/ "./assets/images/instrument-icons/insicon_keyboard.svg":
/*!*************************************************************!*\
  !*** ./assets/images/instrument-icons/insicon_keyboard.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/a99929a5419d5296a6ffe4c140a7584d.png";

/***/ }),

/***/ "./assets/images/instrument-icons/insicon_oboe.svg":
/*!*********************************************************!*\
  !*** ./assets/images/instrument-icons/insicon_oboe.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/0cd6dc32444107d70333c50c859ec027.png";

/***/ }),

/***/ "./assets/images/instrument-icons/insicon_string.svg":
/*!***********************************************************!*\
  !*** ./assets/images/instrument-icons/insicon_string.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/3bc2991c22e935a54efe5a40aa926247.png";

/***/ }),

/***/ "./assets/images/instrument-icons/insicon_tamtam.svg":
/*!***********************************************************!*\
  !*** ./assets/images/instrument-icons/insicon_tamtam.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/be4efe78b7cd0a84c6f366ef48bf570a.png";

/***/ }),

/***/ "./assets/images/instrument-icons/insicon_timpani.svg":
/*!************************************************************!*\
  !*** ./assets/images/instrument-icons/insicon_timpani.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/b003f1a31dfcc827cb8afcda16228bf0.png";

/***/ }),

/***/ "./assets/images/instrument-icons/insicon_trumpet.svg":
/*!************************************************************!*\
  !*** ./assets/images/instrument-icons/insicon_trumpet.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/377a9a1ab0565e85240ec78d42aa13e2.png";

/***/ }),

/***/ "./assets/images/instrumentsection-2.svg":
/*!***********************************************!*\
  !*** ./assets/images/instrumentsection-2.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/9f01de35df89b1396000a3a6187af62b.png";

/***/ }),

/***/ "./assets/images/instrumentsection.svg?path=path#bass&svg-path-as-graphics":
/*!*********************************************************************************!*\
  !*** ./assets/images/instrumentsection.svg?path=path#bass&svg-path-as-graphics ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {this.moveTo(787.5,144).bezierCurveTo(742.88,97.3,678.93,59.34,604.82,34).lineTo(604.82,34).lineTo(568.78,52.54).lineTo(568.78,52.54).bezierCurveTo(624.42,74.08,670.35,105.5,701.13,143.2).lineTo(701.13,143.5).lineTo(787,143.5).lineTo(787.5,144).closePath();});

/***/ }),

/***/ "./assets/images/instrumentsection.svg?path=path#brass&svg-path-as-graphics":
/*!**********************************************************************************!*\
  !*** ./assets/images/instrumentsection.svg?path=path#brass&svg-path-as-graphics ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {this.moveTo(604.82,34).lineTo(568.78,52.54).lineTo(568.78,52.54).bezierCurveTo(552.12,46.09,534.58,40.53,516.32,35.94).bezierCurveTo(498.95,31.58,480.92,28.11,462.36,25.62).lineTo(462.36,25.62).lineTo(474.7,4.78).lineTo(474.7,4.78).bezierCurveTo(520.76,10.23,564.49,20.2,604.82,34).lineTo(604.82,34).closePath();});

/***/ }),

/***/ "./assets/images/instrumentsection.svg?path=path#cello&svg-path-as-graphics":
/*!**********************************************************************************!*\
  !*** ./assets/images/instrumentsection.svg?path=path#cello&svg-path-as-graphics ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {this.moveTo(485.89,122.48).lineTo(516.33,95.95).lineTo(516.33,95.95).bezierCurveTo(595.56,115.83,661.14,154.22,701.13,203.2).lineTo(701.13,203.5).lineTo(511.06,203.5).lineTo(511,203.5).bezierCurveTo(505,182.5,480.71,163.95,449.5,154.19).lineTo(449.5,154.2).lineTo(485.89,122.48).closePath();});

/***/ }),

/***/ "./assets/images/instrumentsection.svg?path=path#harp&svg-path-as-graphics":
/*!*********************************************************************************!*\
  !*** ./assets/images/instrumentsection.svg?path=path#harp&svg-path-as-graphics ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {this.moveTo(0,143.5).lineTo(129.51,143.5).lineTo(129.51,143.49).bezierCurveTo(138.35,130.1,149.79,117.53,163.43,106.02).lineTo(163.43,106.02).lineTo(65.45,89.99).lineTo(65.45,89.98).bezierCurveTo(40.89,106.21,18.73,123.98,0,143.5).lineTo(0,143.5).closePath();});

/***/ }),

/***/ "./assets/images/instrumentsection.svg?path=path#horn&svg-path-as-graphics":
/*!*********************************************************************************!*\
  !*** ./assets/images/instrumentsection.svg?path=path#horn&svg-path-as-graphics ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {this.moveTo(474.7,4.78).bezierCurveTo(448.17,1.64,420.87,0,393,0).bezierCurveTo(342.61,0,294.1,5.35,248.64,15.25).lineTo(248.64,15.25).lineTo(271.23,35.31).lineTo(271.23,35.31).bezierCurveTo(309.02,26.05,349.88,21,392.5,21).bezierCurveTo(416.43,21,439.79,22.59,462.38,25.63).lineTo(462.38,25.63).lineTo(474.7,4.78).lineTo(474.7,4.78).closePath();});

/***/ }),

/***/ "./assets/images/instrumentsection.svg?path=path#percussion&svg-path-as-graphics":
/*!***************************************************************************************!*\
  !*** ./assets/images/instrumentsection.svg?path=path#percussion&svg-path-as-graphics ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {this.moveTo(172.57,37.02).bezierCurveTo(196.73,28.33,222.16,21.02,248.64,15.25).lineTo(248.64,15.25).lineTo(271.23,35.31).lineTo(284.64,47.22).lineTo(284.64,47.22).bezierCurveTo(265.69,52.05,247.77,58.11,231.14,65.25).lineTo(231.14,65.25).lineTo(172.57,37.02).lineTo(172.57,37.02).closePath();});

/***/ }),

/***/ "./assets/images/instrumentsection.svg?path=path#piano&svg-path-as-graphics":
/*!**********************************************************************************!*\
  !*** ./assets/images/instrumentsection.svg?path=path#piano&svg-path-as-graphics ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {this.moveTo(231.14,38.24).lineTo(172.58,10.02).lineTo(172.58,10.02).bezierCurveTo(158.98,14.91,145.78,20.25,133.03,25.99).lineTo(133.03,25.99).lineTo(204.79,51.02).lineTo(204.79,51.02).bezierCurveTo(213.14,46.45,221.94,42.18,231.14,38.24).lineTo(231.14,38.24).closePath();});

/***/ }),

/***/ "./assets/images/instrumentsection.svg?path=path#viola&svg-path-as-graphics":
/*!**********************************************************************************!*\
  !*** ./assets/images/instrumentsection.svg?path=path#viola&svg-path-as-graphics ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {this.moveTo(485.89,122.48).lineTo(449.5,154.2).lineTo(449.5,154.19).bezierCurveTo(432.78,148.96,413.73,146,393.5,146).bezierCurveTo(373.29,146,354.24,148.96,337.53,154.18).lineTo(337.53,154.19).lineTo(301.78,122.45).lineTo(301.78,122.45).bezierCurveTo(330.19,114.55,361.13,110.21,393.5,110.21).bezierCurveTo(426.19,110.21,457.36,114.46,486,122.51).lineTo(485.89,122.48).closePath();});

/***/ }),

/***/ "./assets/images/instrumentsection.svg?path=path#violin-1&svg-path-as-graphics":
/*!*************************************************************************************!*\
  !*** ./assets/images/instrumentsection.svg?path=path#violin-1&svg-path-as-graphics ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {this.moveTo(129.51,203.5).lineTo(275.66,203.5).lineTo(275.66,203.5).bezierCurveTo(277.66,197.36,280.99,191.5,285.48,186.03).lineTo(285.51,186).lineTo(163.42,166.03).lineTo(163.42,166.03).bezierCurveTo(149.79,177.53,138.36,190.1,129.51,203.5).lineTo(129.51,203.5).closePath();});

/***/ }),

/***/ "./assets/images/instrumentsection.svg?path=path#violin-2&svg-path-as-graphics":
/*!*************************************************************************************!*\
  !*** ./assets/images/instrumentsection.svg?path=path#violin-2&svg-path-as-graphics ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {this.moveTo(163.43,166.02).bezierCurveTo(194.13,140.13,235.99,119.62,284.64,107.21).lineTo(284.64,107.21).lineTo(337.53,154.18).lineTo(337.53,154.17).bezierCurveTo(314.97,161.22,296.66,172.41,285.49,186.02).lineTo(285.52,185.99).lineTo(163.43,166.02).lineTo(163.43,166.02).closePath();});

/***/ }),

/***/ "./assets/images/instrumentsection.svg?path=path#woodwind&svg-path-as-graphics":
/*!*************************************************************************************!*\
  !*** ./assets/images/instrumentsection.svg?path=path#woodwind&svg-path-as-graphics ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {this.moveTo(516.33,65.95).lineTo(485.89,92.48).lineTo(486.06,92.67).bezierCurveTo(457.42,84.62,426.19,80.19,393.5,80.19).bezierCurveTo(361.13,80.19,330.19,84.53,301.78,92.43).lineTo(301.78,92.43).lineTo(284.64,77.21).lineTo(271.23,65.3).lineTo(271.23,65.3).bezierCurveTo(309.02,56.05,349.88,51,392.5,51).bezierCurveTo(436.09,51,477.82,56.29,516.33,65.95).lineTo(516.33,65.95).closePath();});

/***/ }),

/***/ "./assets/images/logo.png":
/*!********************************!*\
  !*** ./assets/images/logo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/6d3202b03f5d82f92ff29405687242d4.png";

/***/ }),

/***/ "./assets/images/note-notations/16-dot-down.svg":
/*!******************************************************!*\
  !*** ./assets/images/note-notations/16-dot-down.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/d8f1205e4a0afb21d6eaefbabe766d32.png";

/***/ }),

/***/ "./assets/images/note-notations/16-dot-up.svg":
/*!****************************************************!*\
  !*** ./assets/images/note-notations/16-dot-up.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/2cd007337fabe655a3347efb826291cf.png";

/***/ }),

/***/ "./assets/images/note-notations/16-down.svg":
/*!**************************************************!*\
  !*** ./assets/images/note-notations/16-down.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/a638c204ea86a91ea64051a4fc987011.png";

/***/ }),

/***/ "./assets/images/note-notations/16-up.svg":
/*!************************************************!*\
  !*** ./assets/images/note-notations/16-up.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/d79e05eab95cdca503e938963688893f.png";

/***/ }),

/***/ "./assets/images/note-notations/2-dot-down.svg":
/*!*****************************************************!*\
  !*** ./assets/images/note-notations/2-dot-down.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/50a2ae6faeb088379843a98604e66f62.png";

/***/ }),

/***/ "./assets/images/note-notations/2-dot-trem-down.svg":
/*!**********************************************************!*\
  !*** ./assets/images/note-notations/2-dot-trem-down.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/e67f947befe15f7d4236b3737fc439fa.png";

/***/ }),

/***/ "./assets/images/note-notations/2-dot-trem-up.svg":
/*!********************************************************!*\
  !*** ./assets/images/note-notations/2-dot-trem-up.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/0b86a5fd78f04b80ac3224269888c388.png";

/***/ }),

/***/ "./assets/images/note-notations/2-dot-up.svg":
/*!***************************************************!*\
  !*** ./assets/images/note-notations/2-dot-up.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ddb0bdadc4854449af96b6abc01b6807.png";

/***/ }),

/***/ "./assets/images/note-notations/2-down.svg":
/*!*************************************************!*\
  !*** ./assets/images/note-notations/2-down.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/9546d645495e0959fffee1086d5ef6ca.png";

/***/ }),

/***/ "./assets/images/note-notations/2-trem-down.svg":
/*!******************************************************!*\
  !*** ./assets/images/note-notations/2-trem-down.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/3d2bdd28715097d999ea9aef328fcf8d.png";

/***/ }),

/***/ "./assets/images/note-notations/2-trem-up.svg":
/*!****************************************************!*\
  !*** ./assets/images/note-notations/2-trem-up.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ac47719e898a8f46a94936d59d0ea0b7.png";

/***/ }),

/***/ "./assets/images/note-notations/2-up.svg":
/*!***********************************************!*\
  !*** ./assets/images/note-notations/2-up.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/9763ab5a1ae783e06fe5f007aac313e1.png";

/***/ }),

/***/ "./assets/images/note-notations/32-down.svg":
/*!**************************************************!*\
  !*** ./assets/images/note-notations/32-down.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ddd33784dc18d6668486e9da86df53b6.png";

/***/ }),

/***/ "./assets/images/note-notations/32-up.svg":
/*!************************************************!*\
  !*** ./assets/images/note-notations/32-up.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/12cfd8711686bd2d5a3be0a89326262d.png";

/***/ }),

/***/ "./assets/images/note-notations/4-dot-down.svg":
/*!*****************************************************!*\
  !*** ./assets/images/note-notations/4-dot-down.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/20230371a474b5ea1b88d3faac7434d2.png";

/***/ }),

/***/ "./assets/images/note-notations/4-dot-trem-down.svg":
/*!**********************************************************!*\
  !*** ./assets/images/note-notations/4-dot-trem-down.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/bead805f8b6afe8b0780258d544bfdff.png";

/***/ }),

/***/ "./assets/images/note-notations/4-dot-trem-up.svg":
/*!********************************************************!*\
  !*** ./assets/images/note-notations/4-dot-trem-up.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/a166eb20c532bb3405473fe9ffd7c692.png";

/***/ }),

/***/ "./assets/images/note-notations/4-dot-up.svg":
/*!***************************************************!*\
  !*** ./assets/images/note-notations/4-dot-up.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/27788a77bc9b60ff19b7e3eb9b4ecb3c.png";

/***/ }),

/***/ "./assets/images/note-notations/4-down.svg":
/*!*************************************************!*\
  !*** ./assets/images/note-notations/4-down.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/f7220eafb638a02f08bf7ed9e65aaa08.png";

/***/ }),

/***/ "./assets/images/note-notations/4-trem-up.svg":
/*!****************************************************!*\
  !*** ./assets/images/note-notations/4-trem-up.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/d76cc473861daa68c56d211c4d3af450.png";

/***/ }),

/***/ "./assets/images/note-notations/4-up.svg":
/*!***********************************************!*\
  !*** ./assets/images/note-notations/4-up.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/a6646df4373193fc68ebf9c6c2d0415e.png";

/***/ }),

/***/ "./assets/images/note-notations/8-dot-down.svg":
/*!*****************************************************!*\
  !*** ./assets/images/note-notations/8-dot-down.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/59e618a4e79e7e6121f8132b6c476aa0.png";

/***/ }),

/***/ "./assets/images/note-notations/8-dot-up.svg":
/*!***************************************************!*\
  !*** ./assets/images/note-notations/8-dot-up.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/009d1b6fa6a453d151fe850d309bbef3.png";

/***/ }),

/***/ "./assets/images/note-notations/8-down.svg":
/*!*************************************************!*\
  !*** ./assets/images/note-notations/8-down.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/df63a282db114338bc3f7c7f1f954807.png";

/***/ }),

/***/ "./assets/images/note-notations/8-trem-down.svg":
/*!******************************************************!*\
  !*** ./assets/images/note-notations/8-trem-down.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/18965db09f203c0a340d30ad7d033b40.png";

/***/ }),

/***/ "./assets/images/note-notations/8-trem-up.svg":
/*!****************************************************!*\
  !*** ./assets/images/note-notations/8-trem-up.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/fbcbaf553f64109eb3828b096afb8d26.png";

/***/ }),

/***/ "./assets/images/note-notations/8-up.svg":
/*!***********************************************!*\
  !*** ./assets/images/note-notations/8-up.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ef31de50322dd5e662ebaa156e5539b3.png";

/***/ }),

/***/ "./assets/images/title-bkg.jpg":
/*!*************************************!*\
  !*** ./assets/images/title-bkg.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/f25490ae7aa43495d79babe80ce53636.jpg";

/***/ }),

/***/ "./assets/images/video-bkg.png":
/*!*************************************!*\
  !*** ./assets/images/video-bkg.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/994c37c4c6ab966a9fd675772d69e84e.png";

/***/ }),

/***/ "./assets/images/video-mask-flat.png":
/*!*******************************************!*\
  !*** ./assets/images/video-mask-flat.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/1d9d48aed6a0ebd1c3a8f2cad00a82c7.png";

/***/ }),

/***/ "./assets/images/video-mask.png":
/*!**************************************!*\
  !*** ./assets/images/video-mask.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/8f284b106b34ef2f63279f12b25f01e6.png";

/***/ }),

/***/ "./assets/video/film-censored.mp4":
/*!****************************************!*\
  !*** ./assets/video/film-censored.mp4 ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/video/5859965b7cdbb0a0e3ff239068020e44.mp4";

/***/ }),

/***/ "./src/arrow-graphic.ts":
/*!******************************!*\
  !*** ./src/arrow-graphic.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var ARROW_THICK = 5;
var ARROW_HEAD = 20;
var ARROW_ANGLE = 1.2 * Math.PI / 4;
var PAD_LENGTH = 0;
var ARROW_HEAD_LENGTH = Math.cos(ARROW_ANGLE) * ARROW_HEAD;
var ArrowGraphic = /** @class */ (function (_super) {
    __extends(ArrowGraphic, _super);
    function ArrowGraphic(fromPoint, _toPoint) {
        var _this = _super.call(this) || this;
        _this.fromPoint = fromPoint;
        _this._toPoint = _toPoint;
        _this.graphics = new pixi_js_1.Graphics();
        _this.needsDraw = true;
        _this.slidei = 0;
        _this.draw();
        _this.addChild(_this.graphics);
        _this.toPoint = _toPoint;
        return _this;
    }
    Object.defineProperty(ArrowGraphic.prototype, "toPoint", {
        set: function (_a) {
            var x = _a[0], y = _a[1];
            this._toPoint = [x, y];
            this.needsDraw = true;
            this._angle = Math.atan2(this._toPoint[0] - this.fromPoint[0], this._toPoint[1] - this.fromPoint[1]) + Math.PI / 2;
            this.arrowP1 = Math.sin(this._angle - Math.PI - ARROW_ANGLE);
            this.arrowP2 = Math.cos(this._angle - Math.PI - ARROW_ANGLE);
            this.arrowP3 = Math.sin(this._angle + ARROW_ANGLE);
            this.arrowP4 = Math.cos(this._angle + ARROW_ANGLE);
        },
        enumerable: false,
        configurable: true
    });
    ArrowGraphic.prototype.tick = function (delta) {
        this.slidei += delta / 2;
        this.slidei = this.slidei % (Math.PI * 2);
        var slidePos = Math.cos(this.slidei) * 10;
        this.graphics.position.set(Math.cos(this._angle) * slidePos, -Math.sin(this._angle) * slidePos);
        if (this.needsDraw) {
            this.draw();
        }
    };
    ArrowGraphic.prototype.draw = function () {
        this.needsDraw = false;
        this.graphics.clear()
            .lineStyle(ARROW_THICK, 0xffffff, 1)
            .moveTo(this.fromPoint[0] - Math.cos(-this._angle) * PAD_LENGTH, this.fromPoint[1] - Math.sin(-this._angle) * PAD_LENGTH)
            .lineTo(this._toPoint[0] + Math.cos(-this._angle) * (PAD_LENGTH + ARROW_HEAD_LENGTH + ARROW_THICK), this._toPoint[1] + Math.sin(-this._angle) * (PAD_LENGTH + ARROW_HEAD_LENGTH + ARROW_THICK))
            .lineStyle(1, 0xffffff, 1)
            .beginFill(0xffffff)
            .drawPolygon([
            this._toPoint[0] + Math.cos(-this._angle) * PAD_LENGTH,
            this._toPoint[1] + Math.sin(-this._angle) * PAD_LENGTH,
            this._toPoint[0] + Math.cos(-this._angle) * PAD_LENGTH + this.arrowP1 * ARROW_HEAD,
            this._toPoint[1] + Math.sin(-this._angle) * PAD_LENGTH + this.arrowP2 * ARROW_HEAD,
            this._toPoint[0] + Math.cos(-this._angle) * PAD_LENGTH + this.arrowP3 * ARROW_HEAD,
            this._toPoint[1] + Math.sin(-this._angle) * PAD_LENGTH + this.arrowP4 * ARROW_HEAD,
        ]);
    };
    return ArrowGraphic;
}(pixi_js_1.Container));
exports.default = ArrowGraphic;


/***/ }),

/***/ "./src/button.ts":
/*!***********************!*\
  !*** ./src/button.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var styles_1 = __webpack_require__(/*! ./styles */ "./src/styles.ts");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(s) {
        var _this = _super.call(this) || this;
        _this._text = new pixi_js_1.Text("", styles_1.TEXT_STYLE_BUTTON);
        _this.text = s;
        _this.addChild(_this._text);
        _this._text.anchor.set(0.5);
        _this._text.position.set(0, 0);
        _this.interactive = true;
        _this.cursor = "pointer";
        _this.on("mouseover", function () {
            //app.renderer.backgroundColor = 0x111111;
            _this._text.style = styles_1.TEXT_STYLE_BUTTON_HOVER;
        });
        _this.on("mouseout", function () {
            _this._text.style = styles_1.TEXT_STYLE_BUTTON;
        });
        return _this;
    }
    Button.prototype.setAnchor = function (x, y) {
        this._text.anchor.set(x, y);
    };
    Object.defineProperty(Button.prototype, "text", {
        set: function (s) {
            this._text.text = s;
        },
        enumerable: false,
        configurable: true
    });
    Button.prototype.multiplierResize = function (multiplier) {
        this._text.scale.set(multiplier);
    };
    return Button;
}(pixi_js_1.Container));
exports.Button = Button;


/***/ }),

/***/ "./src/color-utils.ts":
/*!****************************!*\
  !*** ./src/color-utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbToDecimal = exports.hslToRgb = exports.hue2rgb = void 0;
function hue2rgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
exports.hue2rgb = hue2rgb;
function hslToRgb(h, s, l) {
    var r, g, b;
    if (s == 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return r * 255 * Math.pow(256, 2) + g * 255 * 256 + b * 255;
}
exports.hslToRgb = hslToRgb;
function rgbToDecimal(_a) {
    var r = _a[0], g = _a[1], b = _a[2];
    return Math.round(b * 255) + (Math.round(g * 255) << 8) + (Math.round(r * 255) << 16);
}
exports.rgbToDecimal = rgbToDecimal;


/***/ }),

/***/ "./src/colors.ts":
/*!***********************!*\
  !*** ./src/colors.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLOR_HALL_B = exports.COLOR_HALL_A = exports.COLOR_HALL_HIGHLIGHT = exports.COLOR_RECAP_B = exports.COLOR_RECAP_A = exports.COLOR_RECAP_HIGHLIGHT = exports.COLOR_MOUNTAIN_B = exports.COLOR_MOUNTAIN_A = exports.COLOR_MOUNTAIN_HIGHLIGHT = exports.COLOR_LAKE_B = exports.COLOR_LAKE_A = exports.COLOR_LAKE_HIGHLIGHT = exports.COLOR_FOREST_B = exports.COLOR_FOREST_A = exports.COLOR_FOREST_HIGHLIGHT = exports.COLOR_DESERT_B = exports.COLOR_DESERT_A = exports.COLOR_DESERT_HIGHLIGHT = exports.COLOR_BUS_B = exports.COLOR_BUS_A = exports.COLOR_BUS_HIGHLIGHT = exports.COLOR_BOOKSTORE_B = exports.COLOR_BOOKSTORE_A = exports.COLOR_BOOKSTORE_HIGHLIGHT = exports.DEFAULT_INSTRUMENT_COLOR = exports.INSTRUMENT_COLORS = void 0;
var color_utils_1 = __webpack_require__(/*! ./color-utils */ "./src/color-utils.ts");
exports.INSTRUMENT_COLORS = (_a = {},
    _a["Violin"] = 0xaa4444,
    _a["Viola"] = 0xaa4444,
    _a["Cello"] = 0xaa4444,
    _a["Bass"] = 0xaa4444,
    _a["Harp"] = 0xaa4444,
    _a["Flute"] = 0xaaaa44,
    _a["Piccolo"] = 0xaaaa44,
    _a["Oboe"] = 0xaaaa44,
    _a["English Horn"] = 0xaaaa44,
    _a["Clarinet"] = 0xaaaa44,
    _a["Basset Horn"] = 0xaaaa44,
    _a["Bass Clarinet"] = 0xaaaa44,
    _a["Bassoon"] = 0xaaaa44,
    _a["Double Bassoon"] = 0xaaaa44,
    _a["Saxophone"] = 0xaaaa44,
    _a["French Horn"] = 0xccee66,
    _a["Trumpet"] = 0xccee66,
    _a["Cornet"] = 0xccee66,
    _a["Slide Trombone"] = 0xccee66,
    _a["Tuba"] = 0xccee66,
    _a["Timpani"] = 0x7700ee,
    _a["Bass Drum"] = 0x7700ee,
    _a["Snare Drum"] = 0x7700ee,
    _a["Chimes"] = 0x7700ee,
    _a["Cymbals"] = 0x7700ee,
    _a["Gong"] = 0x7700ee,
    _a["Triangle"] = 0x7700ee,
    _a["Glockenspiel"] = 0x7700ee,
    _a["Xylophone"] = 0x7700ee,
    _a["Castanets"] = 0x7700ee,
    _a["Tambourine"] = 0x7700ee,
    _a);
exports.DEFAULT_INSTRUMENT_COLOR = 0x1111ff;
exports.COLOR_BOOKSTORE_HIGHLIGHT = color_utils_1.rgbToDecimal([63, 54, 42].map(function (d) { return d / 100; }));
exports.COLOR_BOOKSTORE_A = [63, 54, 42].map(function (d) { return d / 100; });
exports.COLOR_BOOKSTORE_B = [32, 22, 13].map(function (d) { return d / 100; });
exports.COLOR_BUS_HIGHLIGHT = color_utils_1.rgbToDecimal([62, 63, 61].map(function (d) { return d / 100; }));
exports.COLOR_BUS_A = [62, 63, 61].map(function (d) { return d / 100; });
exports.COLOR_BUS_B = [21, 22, 19].map(function (d) { return d / 100; });
exports.COLOR_DESERT_HIGHLIGHT = color_utils_1.rgbToDecimal([60, 50, 42].map(function (d) { return d / 100; }));
exports.COLOR_DESERT_A = [60, 50, 42].map(function (d) { return d / 100; });
exports.COLOR_DESERT_B = [27, 20, 13].map(function (d) { return d / 100; });
exports.COLOR_FOREST_HIGHLIGHT = color_utils_1.rgbToDecimal([61, 60, 36].map(function (d) { return d / 100; }));
exports.COLOR_FOREST_A = [61, 60, 36].map(function (d) { return d / 100; });
exports.COLOR_FOREST_B = [17, 20, 13].map(function (d) { return d / 100; });
exports.COLOR_LAKE_HIGHLIGHT = color_utils_1.rgbToDecimal([49, 55, 59].map(function (d) { return d / 100; }));
exports.COLOR_LAKE_A = [49, 55, 59].map(function (d) { return d / 100; });
exports.COLOR_LAKE_B = [12, 14, 14].map(function (d) { return d / 100; });
exports.COLOR_MOUNTAIN_HIGHLIGHT = color_utils_1.rgbToDecimal([66, 62, 64].map(function (d) { return d / 100; }));
exports.COLOR_MOUNTAIN_A = [66, 62, 64].map(function (d) { return d / 100; });
exports.COLOR_MOUNTAIN_B = [27, 26, 29].map(function (d) { return d / 100; });
exports.COLOR_RECAP_HIGHLIGHT = color_utils_1.rgbToDecimal([0, 0, 100].map(function (d) { return d / 100; }));
exports.COLOR_RECAP_A = [0, 0, 100].map(function (d) { return d / 100; });
exports.COLOR_RECAP_B = [0, 100, 0].map(function (d) { return d / 100; });
exports.COLOR_HALL_HIGHLIGHT = color_utils_1.rgbToDecimal([96, 92, 81].map(function (d) { return d / 100; }));
exports.COLOR_HALL_A = [16, 9, 8].map(function (d) { return d / 100; });
exports.COLOR_HALL_B = [96, 92, 81].map(function (d) { return d / 100; });


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DRAGGABLE_RADIUS = exports.WORLD_HEIGHT = exports.WORLD_WIDTH = void 0;
exports.WORLD_WIDTH = 2000;
exports.WORLD_HEIGHT = 2000;
exports.DRAGGABLE_RADIUS = 32;


/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/draggable-spawn.ts":
/*!********************************!*\
  !*** ./src/draggable-spawn.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraggableSpawn = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var interactive_1 = __webpack_require__(/*! ./interactive */ "./src/interactive.ts");
var draggable_1 = __webpack_require__(/*! ./draggable */ "./src/draggable.ts");
var arrow_graphic_1 = __importDefault(__webpack_require__(/*! ./arrow-graphic */ "./src/arrow-graphic.ts"));
var DraggableSpawn = /** @class */ (function (_super) {
    __extends(DraggableSpawn, _super);
    function DraggableSpawn() {
        var _this = _super.call(this) || this;
        _this.graphics = new pixi_js_1.Graphics();
        _this.dragging = false;
        _this.origin = new pixi_js_1.Point();
        _this.multiplier = 1.0;
        _this.isDragging = false;
        _this.spawnDraggable();
        _this.firstArrow = new arrow_graphic_1.default([-52, -26], [-100, -50]);
        _this.addChild(_this.firstArrow);
        return _this;
    }
    DraggableSpawn.prototype.spawnDraggable = function () {
        if (this.draggingObject) {
            // Just in case, let's make sure we don't have listeners on an old draggable
            this.draggingObject.off('dragActive', this.onActiveDrag.bind(this));
            this.draggingObject.off('dragInactive', this.onInctiveDrag.bind(this));
            this.draggingObject.off('adopted', this.onAdopted.bind(this));
        }
        this.draggingObject = new draggable_1.Draggable();
        this.addChild(this.draggingObject);
        this.draggingObject.position.set(0, 0);
        //this.draggingObject.multiplierResize(this.multiplier);
        this.draggingObject.on('dragActive', this.onActiveDrag.bind(this));
        this.draggingObject.on('dragInactive', this.onInctiveDrag.bind(this));
        this.draggingObject.on('dragged', this.onDragged.bind(this));
        this.draggingObject.on('adopted', this.onAdopted.bind(this));
        this.draggingObject.on('destroy', this.onDestroy.bind(this));
    };
    DraggableSpawn.prototype.onDestroy = function (dragging) {
        dragging.abandon();
    };
    DraggableSpawn.prototype.onAdopted = function (dragging) {
        if (this.firstArrow) {
            this.firstArrow.destroy();
            delete this.firstArrow;
            this.emit('firstDrag');
        }
        dragging.off('destroy', this.onDestroy.bind(this));
        this.spawnDraggable();
    };
    DraggableSpawn.prototype.onActiveDrag = function (dragging, e) {
        this.isDragging = true;
    };
    DraggableSpawn.prototype.onDragged = function (dragging, e) {
        this.emit('dragged', dragging, e);
    };
    DraggableSpawn.prototype.onInctiveDrag = function (dragging, e) {
        this.isDragging = false;
        setImmediate(this.checkKill.bind(this));
    };
    DraggableSpawn.prototype.checkKill = function () {
        if (!this.isDragging && this.draggingObject) {
            var distanceFromCenter = this.draggingObject.position.x * this.draggingObject.position.x + this.draggingObject.position.y * this.draggingObject.position.y;
            if (distanceFromCenter < 100 * 100 * this.multiplier) {
                this.draggingObject.position.set(0, 0);
            }
            else {
                this.draggingObject.setState(draggable_1.DraggableState.SHRINK_OUT, 0.5);
                this.spawnDraggable();
            }
        }
    };
    DraggableSpawn.prototype.setOrigin = function (x, y) {
        this.origin.x = x;
        this.origin.y = y;
        this.position.set(x, y);
    };
    DraggableSpawn.prototype.multiplierResize = function (multiplier) {
        this.multiplier = multiplier;
        this.scale.set(multiplier);
    };
    DraggableSpawn.prototype.onTick = function (beat, deltaBeat) {
        if (this.children) {
            this.children.forEach(function (maybeDraggable) {
                if (maybeDraggable instanceof draggable_1.Draggable) {
                    maybeDraggable.onTick(beat, deltaBeat);
                }
            });
        }
        if (this.firstArrow) {
            var alpha = 1;
            if (this.draggingObject) {
                var distanceFromDest = Math.pow(-100 - this.draggingObject.position.x, 2) + Math.pow(-50 - this.draggingObject.position.y, 2);
                alpha = Math.max(0, Math.min(1, distanceFromDest / 10000));
            }
            this.firstArrow.alpha = alpha;
            this.firstArrow.tick(deltaBeat);
        }
    };
    DraggableSpawn.prototype.setState = function (newState, value) {
        //
    };
    return DraggableSpawn;
}(interactive_1.Interactive));
exports.DraggableSpawn = DraggableSpawn;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/draggable.ts":
/*!**************************!*\
  !*** ./src/draggable.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Draggable = exports.DraggableState = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var interactive_1 = __webpack_require__(/*! ./interactive */ "./src/interactive.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
var bloom_128x128_png_1 = __importDefault(__webpack_require__(/*! ../assets/images/bloom-128x128.png */ "./assets/images/bloom-128x128.png"));
var click_track_1 = __importDefault(__webpack_require__(/*! click-track */ "./node_modules/click-track/dist/click-track.umd.min.js"));
var on_demand_emitter_1 = __importDefault(__webpack_require__(/*! ./on-demand-emitter */ "./src/on-demand-emitter.ts"));
var _16_dot_down_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/16-dot-down.svg */ "./assets/images/note-notations/16-dot-down.svg"));
var _16_dot_up_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/16-dot-up.svg */ "./assets/images/note-notations/16-dot-up.svg"));
var _16_down_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/16-down.svg */ "./assets/images/note-notations/16-down.svg"));
var _16_up_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/16-up.svg */ "./assets/images/note-notations/16-up.svg"));
var _2_dot_down_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/2-dot-down.svg */ "./assets/images/note-notations/2-dot-down.svg"));
var _2_dot_trem_down_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/2-dot-trem-down.svg */ "./assets/images/note-notations/2-dot-trem-down.svg"));
var _2_dot_trem_up_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/2-dot-trem-up.svg */ "./assets/images/note-notations/2-dot-trem-up.svg"));
var _2_dot_up_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/2-dot-up.svg */ "./assets/images/note-notations/2-dot-up.svg"));
var _2_down_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/2-down.svg */ "./assets/images/note-notations/2-down.svg"));
var _2_trem_down_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/2-trem-down.svg */ "./assets/images/note-notations/2-trem-down.svg"));
var _2_trem_up_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/2-trem-up.svg */ "./assets/images/note-notations/2-trem-up.svg"));
var _2_up_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/2-up.svg */ "./assets/images/note-notations/2-up.svg"));
var _32_down_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/32-down.svg */ "./assets/images/note-notations/32-down.svg"));
var _32_up_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/32-up.svg */ "./assets/images/note-notations/32-up.svg"));
var _4_dot_down_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/4-dot-down.svg */ "./assets/images/note-notations/4-dot-down.svg"));
var _4_dot_trem_down_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/4-dot-trem-down.svg */ "./assets/images/note-notations/4-dot-trem-down.svg"));
var _4_dot_trem_up_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/4-dot-trem-up.svg */ "./assets/images/note-notations/4-dot-trem-up.svg"));
var _4_dot_up_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/4-dot-up.svg */ "./assets/images/note-notations/4-dot-up.svg"));
var _4_down_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/4-down.svg */ "./assets/images/note-notations/4-down.svg"));
var _4_trem_up_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/4-trem-up.svg */ "./assets/images/note-notations/4-trem-up.svg"));
var _4_up_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/4-up.svg */ "./assets/images/note-notations/4-up.svg"));
var _8_dot_down_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/8-dot-down.svg */ "./assets/images/note-notations/8-dot-down.svg"));
var _8_dot_up_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/8-dot-up.svg */ "./assets/images/note-notations/8-dot-up.svg"));
var _8_down_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/8-down.svg */ "./assets/images/note-notations/8-down.svg"));
var _8_trem_down_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/8-trem-down.svg */ "./assets/images/note-notations/8-trem-down.svg"));
var _8_trem_up_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/8-trem-up.svg */ "./assets/images/note-notations/8-trem-up.svg"));
var _8_up_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/note-notations/8-up.svg */ "./assets/images/note-notations/8-up.svg"));
var noteImages = [
    _32_up_svg_1.default,
    _32_down_svg_1.default,
    _16_dot_up_svg_1.default,
    _16_dot_down_svg_1.default,
    _16_up_svg_1.default,
    _16_down_svg_1.default,
    _8_up_svg_1.default,
    _8_down_svg_1.default,
    _8_trem_up_svg_1.default,
    _8_trem_down_svg_1.default,
    _8_dot_up_svg_1.default,
    _8_dot_down_svg_1.default,
    _4_up_svg_1.default,
    _4_down_svg_1.default,
    _4_trem_up_svg_1.default,
    _4_dot_up_svg_1.default,
    _4_dot_down_svg_1.default,
    _4_dot_trem_up_svg_1.default,
    _4_dot_trem_down_svg_1.default,
    _2_up_svg_1.default,
    _2_down_svg_1.default,
    _2_trem_down_svg_1.default,
    _2_trem_up_svg_1.default,
    _2_dot_up_svg_1.default,
    _2_dot_down_svg_1.default,
    _2_dot_trem_up_svg_1.default,
    _2_dot_trem_down_svg_1.default,
];
var whichNoteIcon = function (a) {
    switch (a.duration) {
        case 0.2708: //- (close enough) thirty second
        case 0.25: //thirty second
            if (a.stem && a.stem < 0)
                return _32_down_svg_1.default;
            return _32_up_svg_1.default;
            break;
        case 0.2875: // (close enough) sixteenth
        case 0.3: // (close enough) sixteenth
        case 0.3333: // (close enough) sixteenth
        case 0.5: //sixteenth
            if (a.stem && a.stem < 0)
                return _16_down_svg_1.default;
            return _16_up_svg_1.default;
            break;
        case 0.75: //dotted sixteenth
            if (a.stem && a.stem < 0)
                return _16_dot_down_svg_1.default;
            return _16_dot_up_svg_1.default;
            break;
        case 0.6667: // (close enough) eighth
        case 1.0917: // (close enough) eighth
        case 1.2: // (close enough) eighth
        case 1: //eighth
            if (a.isTremelo) {
                if (a.stem && a.stem < 0)
                    return _8_trem_down_svg_1.default;
                return _8_trem_up_svg_1.default;
            }
            if (a.stem && a.stem < 0)
                return _8_down_svg_1.default;
            return _8_up_svg_1.default;
            break;
        case 1.5: //dotted eighth
            if (a.stem && a.stem < 0)
                return _8_dot_down_svg_1.default;
            return _8_dot_up_svg_1.default;
            break;
        case 2: //quarter
            if (a.isTremelo) {
                return _4_trem_up_svg_1.default;
            }
            if (a.stem && a.stem < 0)
                return _4_down_svg_1.default;
            return _4_up_svg_1.default;
            break;
        case 3: //dotted quarter
            if (a.isTremelo) {
                if (a.stem && a.stem < 0)
                    return _4_dot_trem_down_svg_1.default;
                return _4_dot_trem_up_svg_1.default;
            }
            if (a.stem && a.stem < 0)
                return _4_dot_down_svg_1.default;
            return _4_dot_up_svg_1.default;
            break;
        case 4: //half
            if (a.isTremelo) {
                if (a.stem && a.stem < 0)
                    return _2_trem_down_svg_1.default;
                return _2_trem_up_svg_1.default;
            }
            if (a.stem && a.stem < 0)
                return _2_down_svg_1.default;
            return _2_up_svg_1.default;
            break;
        case 6: //dotted half
            if (a.isTremelo) {
                if (a.stem && a.stem < 0)
                    return _2_dot_trem_down_svg_1.default;
                return _2_dot_trem_up_svg_1.default;
            }
            if (a.stem && a.stem < 0)
                return _2_dot_down_svg_1.default;
            return _2_dot_up_svg_1.default;
            break;
        default:
            // The mose basic of all notes;
            return _4_up_svg_1.default;
    }
};
var pixi_particles_1 = __webpack_require__(/*! pixi-particles */ "./node_modules/pixi-particles/lib/pixi-particles.es.js");
var performance_state_1 = __importDefault(__webpack_require__(/*! ./performance-state */ "./src/performance-state.ts"));
var color_utils_1 = __webpack_require__(/*! ./color-utils */ "./src/color-utils.ts");
var DraggableState;
(function (DraggableState) {
    DraggableState[DraggableState["HIDDEN"] = 0] = "HIDDEN";
    DraggableState[DraggableState["IDLE"] = 1] = "IDLE";
    DraggableState[DraggableState["SHRINK_OUT"] = 2] = "SHRINK_OUT";
    DraggableState[DraggableState["SHRINK_IN"] = 3] = "SHRINK_IN";
})(DraggableState = exports.DraggableState || (exports.DraggableState = {}));
var Draggable = /** @class */ (function (_super) {
    __extends(Draggable, _super);
    function Draggable() {
        var _this = _super.call(this) || this;
        _this.graphics = new pixi_js_1.Graphics();
        _this.dragging = false;
        _this.origin = new pixi_js_1.Point();
        _this.lastPosition = new pixi_js_1.Point();
        _this.velocityMeasurements = [];
        _this.lastBeat = 0;
        _this.graphics
            .clear()
            .beginFill(0xffffff, 1)
            .drawCircle(0, 0, constants_1.DRAGGABLE_RADIUS)
            .endFill();
        _this.addChild(_this.graphics);
        _this.bloomSprite = pixi_js_1.Sprite.from(bloom_128x128_png_1.default);
        _this.bloomSprite.scale.set(0.7);
        _this.bloomSprite.blendMode = pixi_js_1.BLEND_MODES.SOFT_LIGHT;
        _this.bloomSprite.anchor.set(0.5, 0.5);
        _this.setState(DraggableState.SHRINK_IN, 1.0);
        _this.addChild(_this.bloomSprite);
        _this.graphics.interactive = true;
        _this.graphics.cursor = "grab";
        _this.graphics
            .on('pointerdown', _this.onDragStart.bind(_this))
            .on('pointerup', _this.onDragEnd.bind(_this))
            .on('pointerupoutside', _this.onDragEnd.bind(_this));
        return _this;
    }
    Draggable.prototype.adopt = function (newParent) {
        this.emit('adopted', this, newParent);
        this.setState(DraggableState.SHRINK_IN, 0);
        this.velocity = [0, 0];
    };
    Draggable.prototype.abandon = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.destroy();
    };
    Draggable.prototype.setOrigin = function (x, y) {
        this.origin.x = x;
        this.origin.y = y;
        this.position.set(x, y);
    };
    Draggable.prototype.onDragStart = function (e) {
        this.dragging = true;
        this.graphics.cursor = "grabbing";
        this.emit("dragActive", this, e);
        this.graphics.on('pointermove', this.onDragMove.bind(this));
        document.body.classList.add("dragging");
    };
    Draggable.prototype.onDragEnd = function (e) {
        this.dragging = false;
        this.graphics.cursor = "auto";
        this.emit("dragInactive", this, e);
        this.graphics.off('pointermove', this.onDragMove.bind(this));
        this.emit("dragged", this, e);
        document.body.classList.remove("dragging");
    };
    Draggable.prototype.onDragMove = function (e) {
        if (this.dragging) {
            var newPosition = e.data.getLocalPosition(this.parent);
            this.pointerPos = new pixi_js_1.Point();
            this.pointerPos.copyFrom(newPosition);
        }
    };
    Draggable.prototype.onTick = function (beat, deltaBeat) {
        _super.prototype.onTick.call(this, beat, deltaBeat);
        if (this._destroyed)
            return;
        if (this.visualCuesEmitter) {
            this.visualCuesEmitter.update(deltaBeat);
        }
        if (this.pointerPos && this.dragging) {
            this.lastPosition.copyFrom(this.position);
            this.position.copyFrom(this.pointerPos);
            var velMeasurement = [(this.position.x - this.lastPosition.x) / deltaBeat, (this.position.y - this.lastPosition.y) / deltaBeat];
            this.velocityMeasurements.push(velMeasurement);
            // keep measurements to 5
            if (this.velocityMeasurements.length > 10) {
                this.velocityMeasurements.shift();
            }
            // Calculate avg velocity from samples
            this.velocity = [0, 0];
            for (var i = 0; i < this.velocityMeasurements.length; i++) {
                this.velocity[0] += this.velocityMeasurements[i][0];
                this.velocity[1] += this.velocityMeasurements[i][1];
            }
            this.velocity[0] = this.velocity[0] / this.velocityMeasurements.length;
            this.velocity[1] = this.velocity[1] / this.velocityMeasurements.length;
        }
        var ydiff = (this.position.y - this.origin.y);
        var perspectivescale = Math.pow(2, ydiff / 200);
        this.scale.set(perspectivescale, perspectivescale);
        if (this.state === DraggableState.SHRINK_OUT) {
            this.position.set(this.position.x + this.velocity[0] * deltaBeat / 2, this.position.y + this.velocity[1] * deltaBeat / 2);
            this.graphics.scale.set(1 - this.stateFade);
            this.alpha = 1 - this.stateFade;
            if (this.stateFade >= 1) {
                this.emit("destroy", this);
            }
        }
        if (this.state === DraggableState.SHRINK_IN) {
            this.graphics.scale.set(this.stateFade);
            this.alpha = this.stateFade;
            if (this.stateFade >= 1) {
                this.setState(DraggableState.IDLE, 1.0);
            }
        }
        if (this.visualCuesClicktrack && this.currentNoteAttributes && this.motionFn) {
            var currentNoteOptions = {
                beat: this.visualCuesClicktrack.beat,
                noteProgress: Math.max(0, beat - this.currentCuedNote),
                noteDuration: this.currentNoteAttributes.duration ? this.currentNoteAttributes.duration : 0,
                phraseProgress: this.visualCuesClicktrack.beat - this.currentCuedPhraseStartBeat,
                phraseDuration: this.currentCuedPhraseDuration,
                pitch: this.currentNoteAttributes.pitch,
                isTremelo: this.currentNoteAttributes.isTremelo,
                isCrescendo: this.currentNoteAttributes.isCrescendo
            };
            if (this.motionFn.x)
                this.graphics.position.x = this.motionFn.x(currentNoteOptions);
            if (this.motionFn.y)
                this.graphics.position.y = this.motionFn.y(currentNoteOptions);
            if (this.motionFn.t)
                this.graphics.rotation = this.motionFn.t(currentNoteOptions);
        }
        if (this.visualCuesClicktrack) {
            if (beat > this.currentCuedPhraseEndBeat) {
                this.visualCuesClicktrack.deconstruct();
                delete this.visualCuesClicktrack;
                this.setState(DraggableState.SHRINK_OUT, 0.1);
            }
        }
    };
    Object.defineProperty(Draggable.prototype, "icon", {
        set: function (icon) {
            this.graphics.destroy();
            this.graphics = pixi_js_1.Sprite.from(icon);
            this.graphics.anchor.set(0.5);
            this.addChild(this.graphics);
            var scale = 1;
            this.graphics.scale.set(scale);
            this.bloomSprite.visible = false;
        },
        enumerable: false,
        configurable: true
    });
    Draggable.prototype.setVisualCues = function (cues, parentClick) {
        var _this = this;
        if (this.visualCuesClicktrack) {
            throw new Error("Can't set the visual cues again");
        }
        var cuesB = cues.map(function (a) {
            return [a[0], __assign(__assign({}, a[1]), { iconIndex: noteImages.indexOf(whichNoteIcon(a[1])) })];
        });
        // Dirty way for testing until better decoupled
        if (parentClick) {
            this.visualCuesClicktrack = new click_track_1.default({
                timerSource: parentClick.timer,
                offset: parentClick.offset,
                tempo: parentClick.tempo,
                cues: cuesB
            });
        }
        else {
            this.visualCuesClicktrack = new click_track_1.default({
                timerSource: performance_state_1.default.clickTrack.timer,
                offset: performance_state_1.default.clickTrack.offset,
                tempo: performance_state_1.default.clickTrack.tempo,
                cues: cuesB
            });
        }
        this.currentCuedPhraseStartBeat = cues[0][0];
        this.currentCuedPhraseEndBeat = cues[cues.length - 1][0] + (cues[cues.length - 1][1].duration || 0);
        this.currentCuedPhraseDuration = this.currentCuedPhraseEndBeat - this.currentCuedPhraseStartBeat;
        var spawnSpread = 5;
        var color = "#" + color_utils_1.rgbToDecimal([Math.random(), Math.random(), Math.random()]).toString(16).padStart(6, "0");
        // This config is temp, need to move to setter
        this.visualCuesEmitter = new on_demand_emitter_1.default(this, noteImages, {
            "alpha": {
                list: [
                    {
                        time: 0,
                        value: 0
                    },
                    {
                        time: 0.2,
                        value: 0.9
                    },
                    {
                        time: 0.8,
                        value: 0.8
                    },
                    {
                        time: 1,
                        value: 0
                    }
                ],
                isStepped: false
            },
            "scale": {
                "start": 0.6,
                "end": 0.6,
                "minimumScaleMultiplier": 0.5
            },
            "color": {
                list: [
                    {
                        time: 0,
                        value: "#d5ba91",
                    },
                    {
                        time: 0.2,
                        value: "#f7cb88 ",
                    },
                    {
                        time: 0.4,
                        value: "#d5ba91",
                    },
                    {
                        time: 0.6,
                        value: "#f7cb88 ",
                    },
                    {
                        time: 0.8,
                        value: "#d5ba91",
                    },
                    {
                        time: 1.0,
                        value: "#f7cb88 ",
                    },
                ],
                isStepped: false
            },
            "speed": {
                "start": 12,
                "end": 5,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": -90 - spawnSpread,
                "max": -90 + spawnSpread
            },
            "noRotation": true,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 24,
                "max": 24
            },
            "blendMode": "normal",
            "extraData": {
                "path": "sin(x/30 + " + Math.floor(Math.random() * 8) / 4 + "*PI) * 10"
            },
            "frequency": 0.01,
            "particlesPerWave": 1,
            "emitterLifetime": -1,
            "maxParticles": 15,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "ring",
            "spawnCircle": {
                "x": 0,
                "y": 0,
                "r": 48,
                "minR": 48
            }
        });
        this.visualCuesEmitter.particleConstructor = pixi_particles_1.PathParticle;
        this.visualCuesClicktrack.on("cue", function (ct, e) {
            if (e.data) {
                _this.currentCuedNote = e.beat;
                _this.currentNoteAttributes = __assign({}, e.data);
                if (e.data.duration) {
                    _this.visualCuesEmitter.spawn(1, e.drag, e.data.iconIndex);
                }
            }
        });
    };
    Draggable.prototype.multiplierResize = function (m) { };
    Draggable.prototype.setState = function (newState, value) {
        if (newState === DraggableState.SHRINK_OUT) {
            this.stateFadeTime = value;
            this.stateFade = 1 - this.scale.x;
        }
        if (newState === DraggableState.SHRINK_IN) {
            this.stateFadeTime = 0.5;
            this.stateFade = 1 - this.scale.x;
        }
        this.state = newState;
    };
    return Draggable;
}(interactive_1.Interactive));
exports.Draggable = Draggable;


/***/ }),

/***/ "./src/gradient-backdrop.ts":
/*!**********************************!*\
  !*** ./src/gradient-backdrop.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var colors_1 = __webpack_require__(/*! ./colors */ "./src/colors.ts");
var GradientBackdrop = /** @class */ (function (_super) {
    __extends(GradientBackdrop, _super);
    function GradientBackdrop() {
        var _this = _super.call(this) || this;
        _this.needDraw = true;
        _this._fromColorA = [0, 0, 0];
        _this._fromColorB = [0, 0, 0];
        _this._colorA = [0, 0, 0];
        _this._colorB = [0, 0, 0];
        _this._colorATimer = 0;
        _this._colorBTimer = 0;
        _this.maxHeight = 256;
        _this.transitionSpeed = 50;
        _this.draw();
        _this.filters = [
            new pixi_js_1.Filter(undefined, "\n        uniform float maxXCoord;\n        uniform float startXCoord;\n        uniform float maxYCoord;\n        uniform float startYCoord;\n        uniform float edgeFallOff;\n        uniform vec3 colorA;\n        uniform vec3 colorB;\n        void main() {\n          float fallOffLeft = max(0.0, min(1.0, (gl_FragCoord.x - startXCoord) / edgeFallOff));\n          float fallOffRight = max(0.0, min(1.0, (maxXCoord - gl_FragCoord.x) / edgeFallOff));\n          float fallOffBottom = 1.0; // No need\n          float fallOffTop = max(0.0, min(1.0, (gl_FragCoord.y - startYCoord) / edgeFallOff));\n          float fallOff = min(min(min(fallOffLeft, fallOffRight), fallOffBottom), fallOffTop);\n\n          float colorScale = ((gl_FragCoord.y - startYCoord)/(maxYCoord - startYCoord));\n          gl_FragColor.rgb = mix(colorA, colorB, min(1.0,max(0.0, colorScale))) * fallOff;\n        }\n      ", {
                colorA: _this._colorA,
                colorB: _this._colorB,
                edgeFallOff: 5.0 * window.devicePixelRatio,
                startYCoord: 0,
                maxYCoord: window.innerHeight,
                maxXCoord: window.innerWidth,
                startXCoord: 0,
            })
        ];
        return _this;
    }
    Object.defineProperty(GradientBackdrop.prototype, "biomeTheme", {
        set: function (theme) {
            switch (theme) {
                case "bookstore":
                    this.colorA = colors_1.COLOR_BOOKSTORE_A;
                    this.colorB = colors_1.COLOR_BOOKSTORE_B;
                    break;
                case "bus":
                    this.colorA = colors_1.COLOR_BUS_A;
                    this.colorB = colors_1.COLOR_BUS_B;
                    break;
                case "desert":
                    this.colorA = colors_1.COLOR_DESERT_A;
                    this.colorB = colors_1.COLOR_DESERT_B;
                    break;
                case "forest":
                    this.colorA = colors_1.COLOR_FOREST_A;
                    this.colorB = colors_1.COLOR_FOREST_B;
                    break;
                case "lake":
                    this.colorA = colors_1.COLOR_LAKE_A;
                    this.colorB = colors_1.COLOR_LAKE_B;
                    break;
                case "mountain":
                    this.colorA = colors_1.COLOR_MOUNTAIN_A;
                    this.colorB = colors_1.COLOR_MOUNTAIN_B;
                    break;
                case "recap":
                    this.colorA = colors_1.COLOR_RECAP_A;
                    this.colorB = colors_1.COLOR_RECAP_B;
                    break;
                case "hall":
                default:
                    this.colorA = colors_1.COLOR_HALL_A;
                    this.colorB = colors_1.COLOR_HALL_B;
                    break;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GradientBackdrop.prototype, "colorA", {
        set: function (color) {
            this._colorA = color;
            this._fromColorA = __spreadArrays(this.filters[0].uniforms.colorA);
            this._colorATimer = this.transitionSpeed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GradientBackdrop.prototype, "colorB", {
        set: function (color) {
            this._colorB = color;
            this._fromColorB = __spreadArrays(this.filters[0].uniforms.colorB);
            this._colorBTimer = this.transitionSpeed;
        },
        enumerable: false,
        configurable: true
    });
    GradientBackdrop.prototype.onTick = function (deltaMs) {
        var _this = this;
        if (this._colorATimer > 0) {
            this._colorATimer -= deltaMs;
            if (this._colorATimer < 0)
                this._colorATimer = 0;
            var l_1 = 1 - Math.min(1, Math.max(0, this._colorATimer / this.transitionSpeed));
            var lerpColor = this._fromColorA.map(function (c, i) { return c + (_this._colorA[i] - c) * l_1; });
            this.filters[0].uniforms.colorA = lerpColor;
        }
        if (this._colorBTimer > 0) {
            this._colorBTimer -= deltaMs;
            if (this._colorBTimer < 0)
                this._colorBTimer = 0;
            var l_2 = 1 - Math.min(1, Math.max(0, this._colorBTimer / this.transitionSpeed));
            var lerpColor = this._fromColorB.map(function (c, i) { return c + (_this._colorB[i] - c) * l_2; });
            this.filters[0].uniforms.colorB = lerpColor;
        }
        if (this.needDraw) {
            this.draw();
        }
    };
    GradientBackdrop.prototype.multiplierResize = function (multiplier) {
        var w = window.innerWidth;
        var h = window.innerHeight;
        this.scale.set(window.innerWidth - 2, h / this.maxHeight);
        this.position.set(0, 0);
        var bounds = this.getBounds();
        this.filters[0].uniforms.startYCoord = 0;
        this.filters[0].uniforms.maxYCoord = (bounds.height - 300 * multiplier) * window.devicePixelRatio;
        this.filters[0].uniforms.startXCoord = 0; //bounds.x * window.devicePixelRatio;
        this.filters[0].uniforms.maxXCoord = window.innerWidth * window.devicePixelRatio; //(bounds.x + bounds.width) * window.devicePixelRatio;
        this.filters[0].uniforms.edgeFallOff = multiplier * 5 * window.devicePixelRatio;
    };
    GradientBackdrop.prototype.draw = function () {
        this.clear()
            .beginFill(0xffffff)
            .drawRect(0, 0, 1, 256)
            .endFill();
        this.needDraw = false;
    };
    return GradientBackdrop;
}(pixi_js_1.Graphics));
exports.default = GradientBackdrop;


/***/ }),

/***/ "./src/interactive-instrument.ts":
/*!***************************************!*\
  !*** ./src/interactive-instrument.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractiveInstrument = exports.InstrumentState = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var interactive_1 = __webpack_require__(/*! ./interactive */ "./src/interactive.ts");
var draggable_1 = __webpack_require__(/*! ./draggable */ "./src/draggable.ts");
var lerp_1 = __webpack_require__(/*! ./lerp */ "./src/lerp.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
var InstrumentState;
(function (InstrumentState) {
    InstrumentState[InstrumentState["IDLE"] = 0] = "IDLE";
    InstrumentState[InstrumentState["CUE_READY"] = 1] = "CUE_READY";
    InstrumentState[InstrumentState["CUED"] = 2] = "CUED";
    InstrumentState[InstrumentState["HIT"] = 3] = "HIT";
    InstrumentState[InstrumentState["HIT_SUCCESS"] = 4] = "HIT_SUCCESS";
})(InstrumentState = exports.InstrumentState || (exports.InstrumentState = {}));
var InteractiveInstrument = /** @class */ (function (_super) {
    __extends(InteractiveInstrument, _super);
    function InteractiveInstrument(idleColor, graphicsDraw) {
        var _this = _super.call(this) || this;
        _this.idleColor = idleColor;
        _this.graphicsDraw = graphicsDraw;
        _this.bkgGraphics = new pixi_js_1.Graphics();
        _this.indicatorPoint = new pixi_js_1.Point();
        _this.indicatorStartPoint = new pixi_js_1.Point();
        _this.indicatorEndPoint = new pixi_js_1.Point();
        _this.draggables = [];
        _this.mCenterPoint = new pixi_js_1.Point();
        _this.needDraw = true;
        _this.currentColor = 0x000000;
        _this._highlightColor = 0x99be63;
        _this._outlineThickness = 0;
        _this.state = InstrumentState.IDLE;
        _this.stateValue = 0;
        _this.color = idleColor;
        _this.draw();
        _this.interactive = true;
        _this.cursor = "auto";
        _this.on("drop", _this.onDrop.bind(_this));
        _this.on("mousedragover", _this.onDragOver.bind(_this));
        _this.on("pointertap", _this.maybeSpawn.bind(_this));
        _this.addChild(_this.bkgGraphics);
        return _this;
    }
    Object.defineProperty(InteractiveInstrument.prototype, "highlightColor", {
        set: function (c) {
            this._highlightColor = c;
            if (this.state == InstrumentState.CUE_READY) {
                this.color = this._highlightColor;
                this.needDraw = true;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractiveInstrument.prototype, "color", {
        set: function (c) {
            if (this.currentColor !== c) {
                this.currentColor = c;
                this.needDraw = true;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractiveInstrument.prototype, "outlineThickness", {
        set: function (t) {
            if (this._outlineThickness !== t) {
                this._outlineThickness = t;
                this.needDraw = true;
            }
        },
        enumerable: false,
        configurable: true
    });
    InteractiveInstrument.prototype.multiplierResize = function (multiplier) {
        this.scale.set(multiplier, multiplier);
        var bkgBounds = this.bkgGraphics.getLocalBounds();
        this.mCenterPoint.set(bkgBounds.x + bkgBounds.width / 2, bkgBounds.y + bkgBounds.height / 2 - constants_1.DRAGGABLE_RADIUS);
    };
    InteractiveInstrument.prototype.maybeSpawn = function (e) {
        if (this.state === InstrumentState.CUE_READY) {
            this.emit("maybeSpawn", this, e);
        }
    };
    InteractiveInstrument.prototype.onDragOver = function (e) {
        var dragging = arguments[1];
        if (dragging && this.state === InstrumentState.CUE_READY) {
            dragging.onDragEnd.call(dragging, e);
        }
        else {
            _super.prototype.onDragOver.call(this, e);
        }
    };
    InteractiveInstrument.prototype.onDrop = function (dragging, e) {
        var _this = this;
        if (this.state === InstrumentState.CUE_READY && !this.draggables.length) {
            var thisGlobPosition = this.getGlobalPosition();
            var dragParentGlobal = dragging.parent.getGlobalPosition();
            var dragParentOffset = new pixi_js_1.Point((dragParentGlobal.x - thisGlobPosition.x) / this.scale.x, (dragParentGlobal.y - thisGlobPosition.y) / this.scale.y);
            dragging.adopt(this);
            this.draggables.push(dragging);
            dragging.on("destroy", function () {
                var f = _this.draggables.findIndex(function (d) { return d === dragging; });
                _this.draggables.splice(f, 1);
                dragging.abandon();
            });
            this.setState(InstrumentState.CUED);
            this.indicatorStartPoint.copyFrom(dragging.position);
            this.indicatorEndPoint.x = this.mCenterPoint.x - dragParentOffset.x;
            this.indicatorEndPoint.y = this.mCenterPoint.y - dragParentOffset.y;
        }
    };
    InteractiveInstrument.prototype.setState = function (newState, value) {
        if (newState === this.state)
            return;
        switch (newState) {
            case InstrumentState.CUED:
                this.stateFadeTime = 1.0;
                this.cursor = "auto";
                //this.color = this.idleColor;
                this.outlineThickness = 4;
                if (this.nextCueData && this.draggables.length) {
                    this.draggables[0].icon = this.nextCueData.spriteUrl;
                    this.draggables[0].motionFn = this.nextCueData.motionFn;
                }
                break;
            case InstrumentState.CUE_READY:
                this.stateFadeTime = 1.0;
                this.cursor = "pointer";
                this.color = this._highlightColor;
                this.outlineThickness = 0;
                if (typeof value === 'object') {
                    this.nextCueData = value;
                }
                break;
            case InstrumentState.HIT:
                this.stateFadeTime = 0.5;
                this.cursor = "auto";
                //this.color = this.idleColor;
                this.outlineThickness = 0;
                if (this.state === InstrumentState.CUED) {
                    newState = InstrumentState.HIT_SUCCESS;
                    this.stateFadeTime = 0.1;
                }
                if (this.draggables.length) {
                    if (value && typeof value === "object" && value.length) {
                        this.draggables[0].setVisualCues(value);
                    }
                    else {
                        this.draggables[0].setState(draggable_1.DraggableState.SHRINK_OUT, 0.5);
                    }
                }
                break;
            default:
                //this.color = this.idleColor;
                this.cursor = "auto";
                this.outlineThickness = 0;
                this.stateFadeTime = 1;
        }
        this.stateFade = 0;
        this.state = newState;
        this.stateValue = value;
    };
    InteractiveInstrument.prototype.onTick = function (currentBeat, deltaBeat) {
        _super.prototype.onTick.call(this, currentBeat, deltaBeat);
        this.draggables.forEach(function (d) { return d.onTick(currentBeat, deltaBeat); });
        if (this.state === InstrumentState.CUE_READY) {
            if (this.stateFade >= 1) {
                this.alpha = 1;
            }
            else {
                this.alpha = this.stateFade;
            }
        }
        if (this.state === InstrumentState.CUE_READY && this.dragHover) {
            this.outlineThickness = 2;
        }
        else if (this.state === InstrumentState.CUE_READY) {
            this.outlineThickness = 0;
        }
        if (this.state === InstrumentState.HIT || this.state === InstrumentState.HIT_SUCCESS) {
            if (this.stateFade >= 1) {
                this.alpha = 0;
                this.setState(InstrumentState.IDLE);
            }
            else {
                this.alpha = 1 - this.stateFade;
            }
        }
        if (this.state === InstrumentState.CUED) {
            if (this.stateFade < 1) {
                this.indicatorPoint.copyFrom(lerp_1.powLerpPoint(this.indicatorStartPoint, this.indicatorEndPoint, this.stateFade, 0.1));
            }
            else {
                this.indicatorPoint.copyFrom(this.indicatorEndPoint);
            }
            if (this.draggables[0]) {
                this.draggables[0].position.copyFrom(this.indicatorPoint);
            }
            //this.indicatorGraphics.position.set(this.mCenterPoint.x + this.indicatorPoint.x, this.mCenterPoint.y + this.indicatorPoint.y);
        }
        else if (this.state === InstrumentState.HIT_SUCCESS) {
            //
        }
        else {
            //
        }
        if (this.needDraw) {
            this.draw();
        }
    };
    InteractiveInstrument.prototype.draw = function () {
        this.needDraw = false;
        this.bkgGraphics.clear().beginFill(this.currentColor, 1);
        if (this._outlineThickness) {
            // outlines have issues
            // this.bkgGraphics.lineStyle(this._outlineThickness, 0xffffff, 1, 0);
        }
        this.graphicsDraw.apply(this.bkgGraphics);
        this.bkgGraphics.endFill();
    };
    return InteractiveInstrument;
}(interactive_1.Interactive));
exports.InteractiveInstrument = InteractiveInstrument;


/***/ }),

/***/ "./src/interactive.ts":
/*!****************************!*\
  !*** ./src/interactive.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interactive = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var Interactive = /** @class */ (function (_super) {
    __extends(Interactive, _super);
    function Interactive() {
        var _this = _super.call(this) || this;
        // beat, state, value
        _this.cues = [];
        _this.name = "";
        _this.stateFade = 0;
        _this.stateFadeTime = 1;
        _this.dragHover = false;
        return _this;
    }
    Interactive.prototype.onCue = function (cue, state, value) {
        this.setState(state, value);
    };
    Interactive.prototype.onDragOver = function (e) {
        this.dragHover = true;
    };
    Interactive.prototype.onDragOut = function (e) {
        this.dragHover = false;
    };
    Interactive.prototype.onTick = function (currentBeat, deltaBeat) {
        this.currentBeat = currentBeat;
        if (this.stateFade < 1) {
            this.stateFade += this.stateFadeTime * deltaBeat;
            if (this.stateFade > 1) {
                this.stateFade = 1;
            }
        }
    };
    return Interactive;
}(pixi_js_1.Container));
exports.Interactive = Interactive;


/***/ }),

/***/ "./src/lerp.ts":
/*!*********************!*\
  !*** ./src/lerp.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.powLerpPoint = exports.powLerp = exports.linearLerpPoint = exports.linearLerp = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
function linearLerp(from, to, t) {
    return from + (to - from) * t;
}
exports.linearLerp = linearLerp;
function linearLerpPoint(from, to, t) {
    return new pixi_js_1.Point(from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t);
}
exports.linearLerpPoint = linearLerpPoint;
function powLerp(from, to, t, pow) {
    var t2 = Math.pow(t, pow);
    return from + (to - from) * t2;
}
exports.powLerp = powLerp;
function powLerpPoint(from, to, t, pow) {
    var t2 = Math.pow(t, pow);
    return new pixi_js_1.Point(from.x + (to.x - from.x) * t2, from.y + (to.y - from.y) * t2);
}
exports.powLerpPoint = powLerpPoint;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var styles_1 = __webpack_require__(/*! ./styles */ "./src/styles.ts");
var state_machine_1 = __webpack_require__(/*! ./state-machine */ "./src/state-machine.ts");
var nav_links_json_1 = __importDefault(__webpack_require__(/*! ./nav-links.json */ "./src/nav-links.json"));
window.onload = function () { return __awaiter(void 0, void 0, void 0, function () {
    var app, footer, links, stateManager;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all([
                    styles_1.loadFonts(),
                ])];
            case 1:
                _a.sent();
                app = new pixi_js_1.Application({
                    antialias: true,
                    transparent: false,
                    autoDensity: true,
                    resolution: window.devicePixelRatio,
                    resizeTo: window,
                    backgroundColor: 0x000000,
                });
                document.body.appendChild(app.view);
                footer = document.createElement('nav');
                links = Object.entries(nav_links_json_1.default).map(function (_a) {
                    var label = _a[0], url = _a[1];
                    var a = document.createElement('a');
                    a.setAttribute('href', url);
                    a.setAttribute('title', url.replace(/^.*:\/\//, '').replace(/^mailto:/, ''));
                    a.innerText = label;
                    return a;
                });
                links.forEach(function (link) { return footer.appendChild(link); });
                document.body.appendChild(footer);
                stateManager = new state_machine_1.StateMachine(app);
                return [2 /*return*/];
        }
    });
}); };


/***/ }),

/***/ "./src/nav-links.json":
/*!****************************!*\
  !*** ./src/nav-links.json ***!
  \****************************/
/*! exports provided: film, bios, github, dustin, evan, sid, bradley, chris, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"film\":\"https://www.youtube.com/watch?v=2HlVEZOzcVU\",\"bios\":\"https://github.com/DustinWoods\",\"github\":\"https://github.com/DustinWoods/imagine-symphony-live\",\"dustin\":\"https://github.com/DustinWoods\",\"evan\":\"mailto:evan@imaginesymphony.live\",\"sid\":\"https://github.com/DustinWoods\",\"bradley\":\"https://bradleylanphear.com/\",\"chris\":\"https://www.christhomasmusic.com/\"}");

/***/ }),

/***/ "./src/on-demand-emitter.ts":
/*!**********************************!*\
  !*** ./src/on-demand-emitter.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_particles_1 = __webpack_require__(/*! pixi-particles */ "./node_modules/pixi-particles/lib/pixi-particles.es.js");
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var helperPoint = new pixi_js_1.Point();
var OnDemandEmitter = /** @class */ (function (_super) {
    __extends(OnDemandEmitter, _super);
    function OnDemandEmitter() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.apply(this, args) || this;
    }
    OnDemandEmitter.prototype.update = function (delta) {
        if (this._autoUpdate) {
            delta = delta / pixi_js_1.settings.TARGET_FPMS / 1000;
        }
        //if we don't have a parent to add particles to, then don't do anything.
        //this also works as a isDestroyed check
        if (!this._parent)
            return;
        //update existing particles
        var particle, next;
        for (particle = this._activeParticlesFirst; particle; particle = next) {
            next = particle.next;
            particle.update(delta);
        }
        if (this._emit) {
            //determine if the emitter should stop spawning
            if (this._emitterLife > 0) {
                this._emitterLife -= delta;
                if (this._emitterLife <= 0) {
                    this._emitterLife = 0;
                    this.emit = false;
                }
            }
        }
        if (this._posChanged) {
            //store current position of the emitter as local variables
            this._prevEmitterPos.x = this.ownerPos.x + this.spawnPos.x;
            this._prevEmitterPos.y = this.ownerPos.y + this.spawnPos.y;
            this._prevPosIsValid = true;
            this._posChanged = false;
        }
        //if we are all done and should destroy ourselves, take care of that
        if (!this._emit && !this._activeParticlesFirst) {
            if (this._completeCallback) {
                var cb = this._completeCallback;
                // @ts-ignore: inherited pixi library does not use strict null check
                this._completeCallback = null;
                cb();
            }
            if (this._destroyWhenComplete) {
                this.destroy();
            }
        }
    };
    OnDemandEmitter.prototype.spawn = function (amount, timePassed, whichArt) {
        if (amount === void 0) { amount = 1; }
        if (timePassed === void 0) { timePassed = 0; }
        if (whichArt === void 0) { whichArt = -1; }
        if (!this._emit) {
            return;
        }
        // determine if we have hit the particle limit
        if (this.particleCount >= this.maxParticles) {
            // Let's kill the oldest to make room for the newest
            // @TODO when amount > 1, maybe kill more?
            this._activeParticlesFirst.kill();
        }
        //determine the particle lifetime
        var lifetime;
        if (this.minLifetime == this.maxLifetime) {
            lifetime = this.minLifetime;
        }
        else {
            lifetime = Math.random() * (this.maxLifetime - this.minLifetime) + this.minLifetime;
        }
        //only make the particle if it wouldn't immediately destroy itself
        if (timePassed < lifetime) {
            //create enough particles (amount or up to max)
            var i = 0;
            for (var len = Math.min(amount, this.maxParticles - this.particleCount); i < len; ++i) {
                //see if we actually spawn one
                if (this.spawnChance < 1 && Math.random() >= this.spawnChance)
                    continue;
                //create particle
                var p = void 0;
                if (this._poolFirst) {
                    p = this._poolFirst;
                    this._poolFirst = this._poolFirst.next;
                    // @ts-ignore: inherited pixi library does not use strict null check
                    p.next = null;
                }
                else {
                    p = new this.particleConstructor(this);
                }
                //set a random texture if we have more than one
                if (this.particleImages.length > 1) {
                    // if using ordered art
                    if (whichArt !== -1) {
                        // get current art index, then increment for the next particle
                        p.applyArt(this.particleImages[whichArt]);
                    }
                    else if (this._currentImageIndex !== -1) {
                        // get current art index, then increment for the next particle
                        p.applyArt(this.particleImages[this._currentImageIndex++]);
                        // loop around if needed
                        if (this._currentImageIndex < 0 || this._currentImageIndex >= this.particleImages.length) {
                            this._currentImageIndex = 0;
                        }
                    }
                    else {
                        // otherwise grab a random one
                        p.applyArt(this.particleImages[Math.floor(Math.random() * this.particleImages.length)]);
                    }
                }
                else {
                    //if they are actually the same texture, a standard particle
                    //will quit early from the texture setting in setTexture().
                    p.applyArt(this.particleImages[0]);
                }
                //set up the start and end values
                p.alphaList.reset(this.startAlpha);
                if (this.minimumSpeedMultiplier != 1) {
                    p.speedMultiplier = Math.random() * (1 - this.minimumSpeedMultiplier) + this.minimumSpeedMultiplier;
                }
                p.speedList.reset(this.startSpeed);
                p.acceleration.x = this.acceleration.x;
                p.acceleration.y = this.acceleration.y;
                p.maxSpeed = this.maxSpeed;
                if (this.minimumScaleMultiplier != 1) {
                    p.scaleMultiplier = Math.random() * (1 - this.minimumScaleMultiplier) + this.minimumScaleMultiplier;
                }
                p.scaleList.reset(this.startScale);
                p.colorList.reset(this.startColor);
                //randomize the rotation speed
                if (this.minRotationSpeed == this.maxRotationSpeed)
                    p.rotationSpeed = this.minRotationSpeed;
                else
                    p.rotationSpeed = Math.random() * (this.maxRotationSpeed - this.minRotationSpeed) + this.minRotationSpeed;
                p.rotationAcceleration = this.rotationAcceleration;
                p.noRotation = this.noRotation;
                //set up the lifetime
                p.maxLife = lifetime;
                //set the blend mode
                p.blendMode = this.particleBlendMode;
                //set the custom ease, if any
                p.ease = this.customEase;
                //set the extra data, if any
                p.extraData = this.extraData;
                //set additional properties to particle
                this.applyAdditionalProperties(p);
                //call the proper function to handle rotation and position of particle
                this._spawnFunc(p, this._prevEmitterPos.x, this._prevEmitterPos.y, i);
                //initialize particle
                p.init();
                //update the particle by the time passed, so the particles are spread out properly
                p.update(timePassed); //we want a positive delta, because a negative delta messes things up
                //add the particle to the display list
                if (!p.parent) {
                    if (this.addAtBack)
                        this._parent.addChildAt(p, 0);
                    else
                        this._parent.addChild(p);
                }
                else {
                    //kind of hacky, but performance friendly
                    //shuffle children to correct place
                    var children = this._parent.children;
                    //avoid using splice if possible
                    if (children[0] == p)
                        children.shift();
                    else if (children[children.length - 1] == p)
                        children.pop();
                    else {
                        var index = children.indexOf(p);
                        children.splice(index, 1);
                    }
                    if (this.addAtBack)
                        children.unshift(p);
                    else
                        children.push(p);
                }
                //add particle to list of active particles
                if (this._activeParticlesLast) {
                    this._activeParticlesLast.next = p;
                    p.prev = this._activeParticlesLast;
                    this._activeParticlesLast = p;
                }
                else {
                    this._activeParticlesLast = this._activeParticlesFirst = p;
                }
                ++this.particleCount;
            }
        }
    };
    OnDemandEmitter.prototype._spawnRing = function (p, emitPosX, emitPosY) {
        var spawnCircle = this.spawnCircle;
        // set the initial rotation/direction of the particle based on starting
        // particle angle and rotation of emitter
        if (this.minStartRotation === this.maxStartRotation) {
            p.rotation = this.minStartRotation + this.rotation;
        }
        else {
            p.rotation = (Math.random() * (this.maxStartRotation - this.minStartRotation)) + this.minStartRotation + this.rotation;
        }
        // place the particle at a random radius in the ring
        if (spawnCircle.minRadius !== spawnCircle.radius) {
            helperPoint.x = (Math.random() * (spawnCircle.radius - spawnCircle.minRadius)) + spawnCircle.minRadius;
        }
        else {
            helperPoint.x = spawnCircle.radius;
        }
        helperPoint.y = 0;
        // rotate the point to a random angle in the circle
        var angle = (Math.random() * (this.maxStartRotation - this.minStartRotation)) + this.minStartRotation + this.rotation;
        //p.rotation += angle;
        pixi_particles_1.ParticleUtils.rotatePoint(p.rotation, helperPoint);
        // offset by the circle's center
        helperPoint.x += this.spawnCircle.x;
        helperPoint.y += this.spawnCircle.y;
        // rotate the point by the emitter's rotation
        if (this.rotation !== 0) {
            pixi_particles_1.ParticleUtils.rotatePoint(this.rotation, helperPoint);
        }
        // set the position, offset by the emitter's position
        p.position.x = emitPosX + helperPoint.x;
        p.position.y = emitPosY + helperPoint.y;
    };
    return OnDemandEmitter;
}(pixi_particles_1.Emitter));
exports.default = OnDemandEmitter;


/***/ }),

/***/ "./src/performance-state.ts":
/*!**********************************!*\
  !*** ./src/performance-state.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var click_track_1 = __importDefault(__webpack_require__(/*! click-track */ "./node_modules/click-track/dist/click-track.umd.min.js"));
var state_1 = __importDefault(__webpack_require__(/*! ./state */ "./src/state.ts"));
var interactive_instrument_1 = __webpack_require__(/*! ./interactive-instrument */ "./src/interactive-instrument.ts");
var draggable_spawn_1 = __webpack_require__(/*! ./draggable-spawn */ "./src/draggable-spawn.ts");
var interactive_1 = __webpack_require__(/*! ./interactive */ "./src/interactive.ts");
var main_1 = __importDefault(__webpack_require__(/*! ./tracks/main/ */ "./src/tracks/main/index.ts"));
var pixi_particles_1 = __webpack_require__(/*! pixi-particles */ "./node_modules/pixi-particles/lib/pixi-particles.es.js");
var performance_video_player_1 = __webpack_require__(/*! ./performance-video-player */ "./src/performance-video-player.ts");
var progress_bar_1 = __importDefault(__webpack_require__(/*! ./progress-bar */ "./src/progress-bar.ts"));
var gradient_backdrop_1 = __importDefault(__webpack_require__(/*! ./gradient-backdrop */ "./src/gradient-backdrop.ts"));
var score_export_json_1 = __webpack_require__(/*! ./tracks/main/score-export.json */ "./src/tracks/main/score-export.json");
var instrumentsection_2_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/instrumentsection-2.svg */ "./assets/images/instrumentsection-2.svg"));
var colors_1 = __webpack_require__(/*! ./colors */ "./src/colors.ts");
var button_1 = __webpack_require__(/*! ./button */ "./src/button.ts");
var PerformanceState = /** @class */ (function (_super) {
    __extends(PerformanceState, _super);
    function PerformanceState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.emitters = [];
        _this.stageInteractiveBackground = pixi_js_1.Sprite.from(instrumentsection_2_svg_1.default);
        _this.bkg = new gradient_backdrop_1.default();
        _this.mouseChecked = true;
        return _this;
    }
    PerformanceState.prototype.createContainer = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var container, _a, interactives, trackUrl, tempo, offset, particleCues, stageSize, stageCenter, cues, biomeClickTrack, bkgVideoClicktrack, closingClicktrack, loadIntervalCheck, loadPromise;
            var _this = this;
            return __generator(this, function (_b) {
                this.app = app;
                container = new pixi_js_1.Container();
                container.addChild(this.bkg);
                this.bkg.colorA = [0, 0, 0];
                this.bkg.colorB = [0, 0, 0];
                this.bkg.position.set(0, 0);
                _a = main_1.default(), interactives = _a.interactives, trackUrl = _a.trackUrl, tempo = _a.tempo, offset = _a.offset, particleCues = _a.particleCues, stageSize = _a.stageSize, stageCenter = _a.stageCenter;
                app.renderer.backgroundColor = 0x000000;
                this.intendedStageSize = [stageSize[0] + 250, (stageSize[1] + 416)];
                this.centerStage = stageCenter;
                this.bkgVideo = new performance_video_player_1.PerformanceVideoPlayer(trackUrl, stageSize[0] + 250);
                this.bkgVideo.alpha = 0;
                container.addChild(this.bkgVideo);
                this.bkgVideo.position.set(0, 0);
                this.bkgVideo.on("play", function () {
                    if (!document.fullscreen) {
                        try {
                            app.view.requestFullscreen();
                            screen.orientation.lock("landscape-primary");
                        }
                        catch (_a) { }
                    }
                });
                // Assemble interactive things
                this.interactivesContainer = new pixi_js_1.Container();
                this.interactivesContainer.visible = false;
                container.addChild(this.interactivesContainer);
                this.interactivesContainer.position.set(window.innerWidth / 2, window.innerHeight * 3 / 4);
                // DIY interaction management
                this.interactivesContainer.interactive = true;
                this.interactivesContainer.on("mousemove", this.onMove.bind(this));
                this.interactives = interactives;
                this.interactivesContainer.addChild(this.stageInteractiveBackground);
                this.interactives.forEach(function (s1) {
                    s1.interactive = true;
                    _this.interactivesContainer.addChild(s1);
                    s1.on("maybeSpawn", _this.interactiveTapSpawn.bind(_this));
                });
                // Origin set is handled in resize
                PerformanceState.dragSpawn.visible = false;
                container.addChild(PerformanceState.dragSpawn);
                PerformanceState.dragSpawn.on("dragged", this.onCircleDrag.bind(this));
                interactives.push(PerformanceState.dragSpawn);
                cues = [];
                // Combine cues from all interactives
                interactives.forEach(function (ii) {
                    cues.push.apply(cues, ii.cues.map(function (cue) { return [cue[0], [ii, cue[1], cue[2]]]; }));
                });
                // Sort all cues ascending
                cues.sort(function (a, b) { return Math.sign(a[0] - b[0]); });
                // Click track for syncing up
                PerformanceState.clickTrack = new click_track_1.default({
                    timerSource: function () {
                        try {
                            return _this.bkgVideo.currentTime;
                        }
                        catch (_a) {
                            return 0;
                        }
                    },
                    tempo: tempo,
                    offset: offset,
                    cues: cues
                });
                PerformanceState.clickTrack.on("cue", this.handleClickCue.bind(this));
                biomeClickTrack = new click_track_1.default({
                    timerSource: PerformanceState.clickTrack.timer,
                    tempo: tempo,
                    offset: offset,
                    cues: score_export_json_1.parts.P37.notes
                        .filter(function (_a) {
                        var _b = _a.words, words = _b === void 0 ? '' : _b;
                        return /\(.+\)/.test(words);
                    })
                        .map(function (_a) {
                        var note = _a.note, _b = _a.words, words = _b === void 0 ? '' : _b;
                        var _c = words.match(/\(([^\)]+)\)/) || [, ''], _d = _c[1], biome = _d === void 0 ? '' : _d;
                        return [note, biome.toLowerCase()];
                    })
                });
                bkgVideoClicktrack = new click_track_1.default({
                    timerSource: PerformanceState.clickTrack.timer,
                    cues: [
                        [0,
                            [[0, 0, 0], [0, 0, 0]]
                        ],
                        [15.0,
                            [[38, 27, 17], [6, 9, 9]]
                        ],
                        [17.0,
                            [[54, 41, 31], [2, 6, 4]]
                        ],
                        [25.0,
                            [[18, 19, 16], [4, 8, 8]]
                        ],
                        [32.5,
                            [[4, 8, 8], [95, 98, 95]]
                        ],
                        [40.8,
                            [[29, 27, 24], [7, 5, 3]]
                        ],
                        [49.0,
                            [[25, 24, 22], [2, 7, 7]]
                        ],
                        [56.0,
                            [[7, 5, 3], [29, 27, 24]]
                        ],
                        [66.0,
                            [[7, 5, 3], [7, 5, 3]]
                        ],
                        [67.0,
                            [[7, 5, 3], [7, 5, 3]]
                        ],
                    ]
                });
                biomeClickTrack.on("cue", function (ct, e) {
                    if (e.data !== null) {
                        _this.bkg.biomeTheme = e.data;
                        _this.interactives.forEach(function (i) {
                            if (i instanceof interactive_instrument_1.InteractiveInstrument) {
                                switch (e.data) {
                                    case "bookstore":
                                        i.highlightColor = colors_1.COLOR_BOOKSTORE_HIGHLIGHT;
                                        break;
                                    case "bus":
                                        i.highlightColor = colors_1.COLOR_BUS_HIGHLIGHT;
                                        break;
                                    case "desert":
                                        i.highlightColor = colors_1.COLOR_DESERT_HIGHLIGHT;
                                        break;
                                    case "forest":
                                        i.highlightColor = colors_1.COLOR_FOREST_HIGHLIGHT;
                                        break;
                                    case "lake":
                                        i.highlightColor = colors_1.COLOR_LAKE_HIGHLIGHT;
                                        break;
                                    case "mountain":
                                        i.highlightColor = colors_1.COLOR_MOUNTAIN_HIGHLIGHT;
                                        break;
                                    case "recap":
                                        i.highlightColor = colors_1.COLOR_RECAP_HIGHLIGHT;
                                        break;
                                    case "hall":
                                    default:
                                        i.highlightColor = colors_1.COLOR_HALL_HIGHLIGHT;
                                        break;
                                }
                            }
                            ;
                        });
                    }
                });
                closingClicktrack = new click_track_1.default({
                    timerSource: PerformanceState.clickTrack.timer,
                    cues: [
                        [356, function () {
                                _this.theaterMode();
                                _this.bkg.colorA = [0, 0, 0];
                                _this.bkg.colorB = [0, 0, 0];
                            }
                        ],
                    ]
                });
                closingClicktrack.on("cue", function (e, _a) {
                    var data = _a.data;
                    return data && data();
                });
                bkgVideoClicktrack.on("cue", function (ct, e) {
                    if (e.data !== null) {
                        _this.bkg.colorA = e.data[0].map(function (d) { return d / 100; });
                        _this.bkg.colorB = e.data[1].map(function (d) { return d / 100; });
                    }
                });
                bkgVideoClicktrack.on("lastCue", function () {
                    _this.afterIntro(container);
                    var beginAfterIntro = function () {
                        _this.bkgVideo.resume();
                        _this.bkgVideo.canInteract = true;
                        if (_this.conductToggleButton) {
                            _this.conductToggleButton.off("pointertap", beginAfterIntro);
                        }
                    };
                    _this.bkgVideo.canInteract = false;
                    _this.bkgVideo.pause();
                    _this.playMode();
                    _this.conductToggleButton.once("pointertap", beginAfterIntro);
                    PerformanceState.dragSpawn.on('firstDrag', beginAfterIntro);
                });
                // Sort all cues ascending
                particleCues.sort(function (a, b) { return Math.sign(a[0] - b[0]); });
                // this.clickTrackParticles = new ClickTrack<ParticleCue>({
                //   timerSource: () => track.currentTime,
                //   tempo,
                //   offset,
                //   cues: particleCues
                // });
                //this.clickTrackParticles.on("cue", this.handleParticleCue.bind(this));
                //this.particleContainer = new Container();
                // SVG group size: 828 131.65
                // Set instrument position to SVG group center
                // @TODO put this in one spot
                //this.particleContainer.position.set(window.innerWidth / 2 - 414, window.innerHeight * 3 / 4 -131.65);
                //container.addChild(this.particleContainer);
                this.loadProgressbar = new progress_bar_1.default();
                container.addChild(this.loadProgressbar);
                this.loadProgressbar.position.set(window.innerWidth / 2, window.innerHeight / 2);
                loadIntervalCheck = setInterval(function () {
                    _this.loadProgressbar.progress = _this.bkgVideo.percentLoaded;
                }, 200);
                loadPromise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                                    var loadTimeout = setTimeout(function () {
                                        // Timeout error?
                                        console.log("This is taking a while to load...");
                                    }, 5000);
                                    _this.bkgVideo.preload().then(function () {
                                        clearTimeout(loadTimeout);
                                        resolve();
                                    });
                                })];
                            case 1:
                                _a.sent();
                                this.bkgVideo.alpha = 1;
                                this.bkgVideo.canInteract = true;
                                this.loadProgressbar.progress = 1;
                                this.skipButton = new button_1.Button("SKIP INTRO");
                                this.skipButton.setAnchor(1, 1);
                                container.addChild(this.skipButton);
                                this.skipButton.on("pointertap", function () {
                                    _this.bkgVideo.currentTime = 66;
                                    _this.afterIntro(container);
                                });
                                clearInterval(loadIntervalCheck);
                                this.loadProgressbar.fadeOut();
                                this.onResize({ width: window.innerWidth, height: window.innerHeight });
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.bkgVideo.on("ended", function () {
                    // shut it down!
                    closingClicktrack.deconstruct();
                    closingClicktrack.deconstruct();
                    bkgVideoClicktrack.deconstruct();
                    PerformanceState.clickTrack.deconstruct();
                    //this.clickTrackParticles.deconstruct();
                    _this.events.get("complete").dispatch(_this, 1);
                });
                return [2 /*return*/, container];
            });
        });
    };
    PerformanceState.prototype.interactiveTapSpawn = function (interactive, e) {
        if (PerformanceState.dragSpawn && PerformanceState.dragSpawn.draggingObject) {
            interactive.onDrop(PerformanceState.dragSpawn.draggingObject);
        }
    };
    PerformanceState.prototype.afterIntro = function (container) {
        var _this = this;
        if (this.skipButton) {
            container.removeChild(this.skipButton);
            delete this.skipButton;
        }
        if (!this.conductToggleButton) {
            this.conductToggleButton = new button_1.Button("X");
            this.conductToggleButton.setAnchor(1, 1);
            container.addChild(this.conductToggleButton);
            this.conductToggleButton.on("pointertap", function () {
                if (_this.bkgVideo.theaterMode) {
                    _this.playMode();
                    _this.conductToggleButton.text = "X";
                }
                else {
                    _this.theaterMode();
                    _this.conductToggleButton.text = "CONDUCT";
                }
            });
        }
        this.onResize({ width: window.innerWidth, height: window.innerHeight });
    };
    PerformanceState.prototype.theaterMode = function () {
        this.interactivesContainer.visible = false;
        PerformanceState.dragSpawn.visible = false;
        this.bkgVideo.theaterMode = true;
        this.onResize({ width: window.innerWidth, height: window.innerHeight });
    };
    PerformanceState.prototype.playMode = function () {
        this.interactivesContainer.visible = true;
        PerformanceState.dragSpawn.visible = true;
        this.bkgVideo.theaterMode = false;
        this.onResize({ width: window.innerWidth, height: window.innerHeight });
    };
    PerformanceState.prototype.handleClickCue = function (clicktrack, cue) {
        if (cue.data && cue.data[0]) {
            var _a = cue.data, interactive = _a[0], state = _a[1], value = _a[2];
            interactive.onCue(cue.cue, state, value);
        }
    };
    PerformanceState.prototype.handleParticleCue = function (clicktrack, cue) {
        if (cue.data) {
            var emitter = new pixi_particles_1.Emitter(this.particleContainer, cue.data[0], __assign(__assign({}, cue.data[1]), { autoUpdate: false }));
            this.emitters.push(emitter);
        }
    };
    PerformanceState.prototype.onCircleDrag = function (dragging, e) {
        if (this.app) {
            var i = this.app.renderer.plugins.interaction.hitTest(e.data.global, this.interactivesContainer);
            if (i && i instanceof interactive_instrument_1.InteractiveInstrument) {
                i.emit("mousedragout", this.mousePos);
                i.emit("drop", dragging, e);
            }
        }
    };
    PerformanceState.prototype.onMove = function (e) {
        this.mousePos = e.data.global;
        this.mouseChecked = false;
    };
    PerformanceState.prototype.onTick = function (deltaMs) {
        this.bkg.onTick(deltaMs);
        if (this.loadProgressbar && !this.loadProgressbar.destroyed) {
            this.loadProgressbar.onTick(deltaMs);
            return;
        }
        else if (this.loadProgressbar) {
            delete this.loadProgressbar;
        }
        var currentBeat = PerformanceState.clickTrack.beat;
        var beatDelta = (deltaMs / 1000) * PerformanceState.clickTrack.tempo;
        for (var i = 0; i < this.interactives.length; i++) {
            this.interactives[i].onTick(currentBeat, beatDelta);
        }
        for (var i = this.emitters.length - 1; i >= 0; i--) {
            if (this.emitters[i].parent === null) {
                // remove from array, it's destroyed
                this.emitters.splice(i, 1);
                continue;
            }
            // Perform update using beats
            this.emitters[i].update(beatDelta);
        }
        // DIY mouse enter/mouse out interaction handling
        // This is here because while draggin draggables, mouseenter and mouseout events aren't triggered
        if (PerformanceState.dragSpawn.isDragging && this.app && !this.mouseChecked) {
            this.mouseChecked = true;
            var object = this.app.renderer.plugins.interaction.hitTest(this.mousePos, this.interactivesContainer);
            if (object && object instanceof interactive_1.Interactive) {
                var e = new pixi_js_1.InteractionEvent();
                e.data = new pixi_js_1.InteractionData();
                e.data.global = this.mousePos.clone();
                if (!this.interactiveHovering) {
                    // Mouse enter
                    this.interactiveHovering = object;
                    this.interactiveHovering.emit("mousedragover", e, PerformanceState.dragSpawn.draggingObject);
                }
                else if (this.interactiveHovering !== object) {
                    // Mouse enter and out (new object)
                    object.emit("mousedragover", e);
                    this.interactiveHovering.emit("mousedragout", e, PerformanceState.dragSpawn.draggingObject);
                    this.interactiveHovering = object;
                }
            }
            else if (this.interactiveHovering) {
                var e = new pixi_js_1.InteractionEvent();
                e.data = new pixi_js_1.InteractionData();
                e.data.global = this.mousePos.clone();
                // mouse out
                this.interactiveHovering.emit("mousedragout", e);
                this.interactiveHovering = undefined;
            }
        }
    };
    PerformanceState.prototype.onResize = function (size) {
        if (this.loadProgressbar && this.loadProgressbar.progress < 1) {
            this.loadProgressbar.position.set(size.width / 2, size.height / 2);
        }
        var multiplier = Math.min(size.width / this.intendedStageSize[0], size.height / this.intendedStageSize[1]);
        //this.interactivesContainer.scale.set(multiplier, multiplier);
        this.interactives.forEach(function (s1) {
            s1.multiplierResize(multiplier);
        });
        this.stageInteractiveBackground.scale.set(multiplier);
        var bounds = this.interactivesContainer.getBounds();
        this.bkg.multiplierResize(multiplier);
        this.bkgVideo.multiplierResize(multiplier);
        var videoBounds = this.bkgVideo.getBounds();
        if (this.skipButton) {
            this.skipButton.multiplierResize(multiplier);
            this.skipButton.position.set(size.width - 10 * multiplier, size.height - 10 * multiplier);
        }
        if (this.conductToggleButton) {
            this.conductToggleButton.multiplierResize(multiplier);
            this.conductToggleButton.position.set(size.width - 10 * multiplier, size.height - 10 * multiplier);
        }
        this.interactivesContainer.position.set((size.width - bounds.width) / 2, videoBounds.bottom - bounds.height * 0.10);
        PerformanceState.dragSpawn.multiplierResize(multiplier);
        PerformanceState.dragSpawn.setOrigin(this.interactivesContainer.position.x + multiplier * this.centerStage[0], this.interactivesContainer.position.y + multiplier * this.centerStage[1]);
    };
    PerformanceState.prototype.cleanUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PerformanceState.dragSpawn = new draggable_spawn_1.DraggableSpawn();
    return PerformanceState;
}(state_1.default));
exports.default = PerformanceState;


/***/ }),

/***/ "./src/performance-video-player.ts":
/*!*****************************************!*\
  !*** ./src/performance-video-player.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceVideoPlayer = void 0;
var video_player_1 = __webpack_require__(/*! ./video-player */ "./src/video-player.ts");
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var video_mask_png_1 = __importDefault(__webpack_require__(/*! ../assets/images/video-mask.png */ "./assets/images/video-mask.png"));
var video_mask_flat_png_1 = __importDefault(__webpack_require__(/*! ../assets/images/video-mask-flat.png */ "./assets/images/video-mask-flat.png"));
var video_bkg_png_1 = __importDefault(__webpack_require__(/*! ../assets/images/video-bkg.png */ "./assets/images/video-bkg.png"));
var styles_1 = __webpack_require__(/*! ./styles */ "./src/styles.ts");
var STAGE_WIDTH = 787;
var LETTERBOX_HEIGHT = 71;
var QUAD_CURVE_OFFSET = 175;
var PerformanceVideoPlayer = /** @class */ (function (_super) {
    __extends(PerformanceVideoPlayer, _super);
    function PerformanceVideoPlayer(videoUrl, width, accentColor) {
        if (width === void 0) { width = STAGE_WIDTH; }
        if (accentColor === void 0) { accentColor = 0xffffff; }
        var _this = _super.call(this, videoUrl, width, accentColor) || this;
        _this.videoUrl = videoUrl;
        _this.width = width;
        _this.accentColor = accentColor;
        _this.bkgCurtainPad = new pixi_js_1.Graphics();
        _this.container = new pixi_js_1.Container();
        _this.playButtonSizeRatio = 0.05;
        _this.autoplay = false;
        _this.canInteract = false;
        _this._theaterMode = true;
        return _this;
    }
    PerformanceVideoPlayer.prototype.preload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var w, h, bkgSprite, censoredText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.preload.call(this)];
                    case 1:
                        _a.sent();
                        w = this.videoSprite.width;
                        h = this.videoSprite.height;
                        return [4 /*yield*/, new Promise(function (resolve) {
                                if (pixi_js_1.Loader.shared.resources[video_mask_png_1.default])
                                    return resolve();
                                pixi_js_1.Loader.shared.add(video_mask_png_1.default).load(resolve);
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                if (pixi_js_1.Loader.shared.resources[video_mask_flat_png_1.default])
                                    return resolve();
                                pixi_js_1.Loader.shared.add(video_mask_flat_png_1.default).load(resolve);
                            })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                if (pixi_js_1.Loader.shared.resources[video_bkg_png_1.default])
                                    return resolve();
                                pixi_js_1.Loader.shared.add(video_bkg_png_1.default).load(resolve);
                            })];
                    case 4:
                        _a.sent();
                        bkgSprite = pixi_js_1.Sprite.from(video_bkg_png_1.default);
                        bkgSprite.scale.set(w / (bkgSprite.width));
                        bkgSprite.position.set(0, LETTERBOX_HEIGHT);
                        this.container.addChild(bkgSprite);
                        this.flatMask = pixi_js_1.Sprite.from(video_mask_flat_png_1.default);
                        this.flatMask.scale.set(w / (this.flatMask.width));
                        this.flatMask.position.set(0, LETTERBOX_HEIGHT);
                        this.theaterMask = pixi_js_1.Sprite.from(video_mask_png_1.default);
                        this.theaterMask.scale.set(w / (this.theaterMask.width));
                        this.theaterMask.position.set(0, LETTERBOX_HEIGHT);
                        this.flatMaskBacker = new pixi_js_1.Graphics();
                        this.flatMaskBacker.clear()
                            .beginFill(0x000000)
                            .drawRect(0, 0, this.flatMask.width, this.flatMask.height);
                        this.container.addChild(this.flatMaskBacker);
                        this.flatMaskBacker.position.set(0, LETTERBOX_HEIGHT);
                        this.addChild(this.bkgCurtainPad);
                        this.addChild(this.container);
                        this.theaterMode = true;
                        this.removeChild(this.videoSprite);
                        this.removeChild(this.overlayGraphics);
                        this.container.addChild(this.videoSprite);
                        this.container.addChild(this.overlayGraphics);
                        censoredText = new pixi_js_1.Text("[CENSORED]", styles_1.TEXT_STYLE_CENSORED);
                        censoredText.scale.set(16);
                        censoredText.texture.baseTexture.scaleMode = pixi_js_1.SCALE_MODES.NEAREST;
                        censoredText.anchor.set(0.5);
                        this.container.addChild(censoredText);
                        censoredText.position.set(w / 2, h / 2);
                        return [2 /*return*/];
                }
            });
        });
    };
    PerformanceVideoPlayer.prototype.interact = function () {
        if (!document.fullscreen) {
            this.playpause();
        }
        else {
            document.exitFullscreen();
        }
    };
    Object.defineProperty(PerformanceVideoPlayer.prototype, "theaterMode", {
        get: function () {
            return this._theaterMode;
        },
        set: function (on) {
            this._theaterMode = on;
            if (!on) {
                this.container.removeChild(this.flatMask);
                this.container.addChild(this.theaterMask);
                this.videoSprite.mask = this.theaterMask;
                //this.bkgCurtainPad.visible = true;
                this.flatMaskBacker.visible = false;
            }
            else {
                this.container.removeChild(this.theaterMask);
                this.container.addChild(this.flatMask);
                this.videoSprite.mask = this.flatMask;
                //this.bkgCurtainPad.visible = false;
                this.flatMaskBacker.visible = true;
            }
            this.multiplierResize(this.container.scale.x);
        },
        enumerable: false,
        configurable: true
    });
    PerformanceVideoPlayer.prototype.multiplierResize = function (multiplier) {
        if (!this.videoSprite)
            return;
        this.container.scale.set(multiplier);
        var paddTop = 0;
        if (!document.fullscreen) {
            var nav = document.getElementsByTagName("nav");
            if (nav && nav[0]) {
                var _a = nav[0].getBoundingClientRect(), y = _a.y, height = _a.height;
                paddTop = y + height;
            }
        }
        if (this._theaterMode) {
            this.container.position.y = (window.innerHeight - paddTop - this.container.height) / 2 - LETTERBOX_HEIGHT * multiplier + paddTop;
        }
        else {
            this.container.position.y = (-LETTERBOX_HEIGHT) * multiplier + paddTop;
        }
        this.container.position.x = (window.innerWidth - this.container.width) / 2;
        this.bkgCurtainPad.position.set(0, 0);
        this.bkgCurtainPad.clear()
            .beginFill(0x000000)
            .drawRect(0, this.container.position.y + LETTERBOX_HEIGHT * multiplier, this.container.position.x, this.container.height)
            .drawRect(this.container.width + this.container.position.x, this.container.position.y + LETTERBOX_HEIGHT * multiplier, this.container.position.x, this.container.height)
            .endFill();
    };
    return PerformanceVideoPlayer;
}(video_player_1.VideoPlayer));
exports.PerformanceVideoPlayer = PerformanceVideoPlayer;


/***/ }),

/***/ "./src/progress-bar.ts":
/*!*****************************!*\
  !*** ./src/progress-bar.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var styles_1 = __webpack_require__(/*! ./styles */ "./src/styles.ts");
var PROGRESS_BAR_WIDTH = 200;
var PROGRESS_BAR_HEIGHT = 30;
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        var _this = _super.call(this) || this;
        _this._progress = 0;
        _this._animprogress = 0;
        _this.graphics = new pixi_js_1.Graphics();
        _this.needDraw = false;
        _this.loadingText = new pixi_js_1.Text("Loading", styles_1.TEXT_STYLE_LOADING);
        _this.fading = false;
        _this.addChild(_this.graphics);
        _this.addChild(_this.loadingText);
        _this.loadingText.anchor.set(0.5);
        _this.loadingText.position.set(0, 0);
        _this.needDraw = true;
        return _this;
    }
    ProgressBar.prototype.fadeOut = function () {
        this.removeChild(this.loadingText);
        this.fading = true;
        this.needDraw = true;
    };
    Object.defineProperty(ProgressBar.prototype, "progress", {
        get: function () {
            return this._progress;
        },
        set: function (p) {
            this._progress = Math.max(0, Math.min(p, 1));
            this.needDraw = true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressBar.prototype, "destroyed", {
        get: function () {
            return this._destroyed;
        },
        enumerable: false,
        configurable: true
    });
    ProgressBar.prototype.onTick = function (deltaMs) {
        if (this.fading) {
            this.graphics.alpha = Math.max(0, this.graphics.alpha - deltaMs / 100);
            if (this.graphics.alpha <= 0) {
                this.destroy();
            }
        }
        if (this._animprogress != this._progress) {
            var diff = Math.abs(this._progress - this._animprogress);
            var dir = Math.sign(this._progress - this._animprogress);
            if (PROGRESS_BAR_WIDTH * diff < 1 && diff > 0) {
                this.needDraw = true;
                this._animprogress = this._progress;
            }
            else if (diff > 0) {
                this.needDraw = true;
                this._animprogress += Math.min(diff, dir * deltaMs / 100);
            }
        }
        if (this.needDraw) {
            this.draw();
        }
    };
    ProgressBar.prototype.draw = function () {
        this.graphics.clear()
            .beginFill(0x000000)
            .drawRect(-window.innerWidth / 2, -window.innerHeight / 2, window.innerWidth, window.innerHeight)
            .endFill();
        if (!this.fading) {
            this.graphics
                .lineStyle(2, 0xffffff)
                .drawRect(-PROGRESS_BAR_WIDTH / 2, -PROGRESS_BAR_HEIGHT / 2, PROGRESS_BAR_WIDTH, PROGRESS_BAR_HEIGHT)
                .beginFill(0xffffff)
                .drawRect(-PROGRESS_BAR_WIDTH / 2, -PROGRESS_BAR_HEIGHT / 2, PROGRESS_BAR_WIDTH * this._animprogress, PROGRESS_BAR_HEIGHT);
        }
        this.needDraw = false;
    };
    return ProgressBar;
}(pixi_js_1.Container));
exports.default = ProgressBar;


/***/ }),

/***/ "./src/state-machine.ts":
/*!******************************!*\
  !*** ./src/state-machine.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateMachine = void 0;
var performance_state_1 = __importDefault(__webpack_require__(/*! ./performance-state */ "./src/performance-state.ts"));
var title_state_1 = __importDefault(__webpack_require__(/*! ./title-state */ "./src/title-state.ts"));
var StateMachine = /** @class */ (function () {
    function StateMachine(app) {
        var _this = this;
        this.app = app;
        this.states = new Array();
        this.resizePollInterval = 500;
        this.previousWindowDimensions = { width: window.innerWidth, height: window.innerHeight };
        this.windowDimensions = { width: window.innerWidth, height: window.innerHeight };
        setInterval(this.checkResizeEvent.bind(this), this.resizePollInterval);
        window.addEventListener("resize", function () {
            _this.windowDimensions.width = window.innerWidth;
            _this.windowDimensions.height = window.innerHeight;
        });
        app.ticker.add(this.tick, this);
        this.addState("intro", new title_state_1.default());
        this.addState("performance", new performance_state_1.default());
        this.addStateCondition("intro", "complete", "performance");
        this.addStateCondition("performance", "complete", "intro");
        this.setState("intro");
    }
    StateMachine.prototype.tick = function (deltams) {
        if (this.currentState) {
            this.currentState.onTick(deltams);
        }
    };
    StateMachine.prototype.checkResizeEvent = function () {
        if (this.windowDimensions.height !== this.previousWindowDimensions.height || this.windowDimensions.width !== this.previousWindowDimensions.width) {
            this.previousWindowDimensions.height = this.windowDimensions.height;
            this.previousWindowDimensions.width = this.windowDimensions.width;
            if (this.currentState) {
                this.currentState.onResize(this.windowDimensions);
            }
        }
    };
    StateMachine.prototype.addState = function (name, state) {
        this.states.push({ name: name, state: state });
    };
    StateMachine.prototype.addStateCondition = function (triggerState, stateEvent, induceState) {
        var stateF = this.states.find(function (_a) {
            var name = _a.name;
            return name == triggerState;
        });
        if (!stateF) {
            throw new Error("State " + triggerState + " unknown");
        }
        stateF.state.on(stateEvent, this.setState.bind(this, induceState));
    };
    StateMachine.prototype.setState = function (findName) {
        return __awaiter(this, void 0, void 0, function () {
            var stateF, newContainer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stateF = this.states.find(function (_a) {
                            var name = _a.name;
                            return name == findName;
                        });
                        if (!stateF) {
                            throw new Error("State " + findName + " unknown");
                        }
                        return [4 /*yield*/, stateF.state.createContainer(this.app)];
                    case 1:
                        newContainer = _a.sent();
                        stateF.state.onResize(this.windowDimensions);
                        if (!this.currentState) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.currentState.cleanUp()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (this.currentStateContainer) {
                            this.app.stage.removeChild(this.currentStateContainer);
                            this.currentStateContainer.destroy();
                        }
                        this.app.stage.addChild(newContainer);
                        this.currentStateContainer = newContainer;
                        this.currentStateName = findName;
                        this.currentState = stateF.state;
                        return [2 /*return*/];
                }
            });
        });
    };
    return StateMachine;
}());
exports.StateMachine = StateMachine;


/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ste_events_1 = __webpack_require__(/*! ste-events */ "./node_modules/ste-events/dist/index.js");
var State = /** @class */ (function () {
    function State() {
        this.events = new ste_events_1.EventList();
    }
    // Adds event listener
    State.prototype.on = function (event, fn) {
        this.events.get(event).subscribe(fn);
    };
    // Removes event listener
    State.prototype.off = function (event, fn) {
        this.events.get(event).unsubscribe(fn);
    };
    State.prototype.onResize = function (size) {
    };
    State.prototype.onTick = function (deltaMs) {
    };
    return State;
}());
exports.default = State;


/***/ }),

/***/ "./src/styles.ts":
/*!***********************!*\
  !*** ./src/styles.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TET_STYLE_BIO_SUBTITLE = exports.TEXT_STYLE_BIO_P = exports.TEXT_STYLE_LOADING = exports.TEXT_STYLE_CENSORED = exports.TEXT_STYLE_INTERACTIVE_NUM = exports.TEXT_STYLE_H2 = exports.TEXT_STYLE_BUTTON_HOVER = exports.TEXT_STYLE_BUTTON = exports.loadFonts = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
function loadFonts() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve) {
                        // // Load them google fonts before starting...!
                        window.WebFontConfig = {
                            google: {
                                families: ['Roboto:400'],
                            },
                            active: function () {
                                resolve();
                            },
                        };
                        /* eslint-disable */
                        // include the web-font loader script
                        (function () {
                            var wf = document.createElement('script');
                            wf.src = (document.location.protocol === 'https:' ? 'https' : 'http') + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
                            wf.type = 'text/javascript';
                            wf.async = true;
                            var s = document.getElementsByTagName('script')[0];
                            if (s.parentNode)
                                s.parentNode.insertBefore(wf, s);
                        }());
                        /* eslint-enabled */
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.loadFonts = loadFonts;
exports.TEXT_STYLE_BUTTON = new pixi_js_1.TextStyle({
    fill: "#ffffff88",
    fontSize: 48,
    fontFamily: "Roboto",
    fontWeight: '400',
});
exports.TEXT_STYLE_BUTTON_HOVER = new pixi_js_1.TextStyle({
    fill: "#ffffff",
    fontSize: 48,
    dropShadow: true,
    dropShadowColor: '#ffffff',
    dropShadowBlur: 5,
    dropShadowAngle: 0,
    dropShadowDistance: 0,
    fontFamily: "Roboto",
    fontWeight: '400',
});
exports.TEXT_STYLE_H2 = new pixi_js_1.TextStyle({
    fill: "#ffffff",
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: '400',
});
exports.TEXT_STYLE_INTERACTIVE_NUM = new pixi_js_1.TextStyle({
    fill: "#ffffffaa",
    fontSize: 48,
    fontFamily: "Roboto",
    fontWeight: '400',
});
exports.TEXT_STYLE_CENSORED = new pixi_js_1.TextStyle({
    fill: "#ffffff",
    fontFamily: "Mono",
    wordWrap: true,
    fontSize: 8,
    fontWeight: 'bold'
});
exports.TEXT_STYLE_LOADING = new pixi_js_1.TextStyle({
    fill: "#ffffff",
    fontFamily: "Mono",
    wordWrap: true,
    fontSize: 18,
});
exports.TEXT_STYLE_BIO_P = new pixi_js_1.TextStyle({
    fill: "#ffffff",
    fontFamily: "Roboto",
    fontWeight: '400',
    wordWrap: true,
    wordWrapWidth: 400,
    fontSize: 12,
});
exports.TET_STYLE_BIO_SUBTITLE = new pixi_js_1.TextStyle({
    fill: "#EF7700",
    fontFamily: "Roboto",
    fontWeight: '400',
    fontSize: 12,
});


/***/ }),

/***/ "./src/title-state.ts":
/*!****************************!*\
  !*** ./src/title-state.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var state_1 = __importDefault(__webpack_require__(/*! ./state */ "./src/state.ts"));
var styles_1 = __webpack_require__(/*! ./styles */ "./src/styles.ts");
var logo_png_1 = __importDefault(__webpack_require__(/*! ../assets/images/logo.png */ "./assets/images/logo.png"));
var title_bkg_jpg_1 = __importDefault(__webpack_require__(/*! ../assets/images/title-bkg.jpg */ "./assets/images/title-bkg.jpg"));
var TitleState = /** @class */ (function (_super) {
    __extends(TitleState, _super);
    function TitleState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleState.prototype.createContainer = function (app) {
        return __awaiter(this, void 0, void 0, function () {
            var container;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        container = new pixi_js_1.Container();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                if (pixi_js_1.Loader.shared.resources[title_bkg_jpg_1.default])
                                    return resolve();
                                pixi_js_1.Loader.shared.add(title_bkg_jpg_1.default).load(resolve);
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve) {
                                if (pixi_js_1.Loader.shared.resources[logo_png_1.default])
                                    return resolve();
                                pixi_js_1.Loader.shared.add(logo_png_1.default).load(resolve);
                            })];
                    case 2:
                        _a.sent();
                        this.bkg = pixi_js_1.Sprite.from(title_bkg_jpg_1.default);
                        this.bkg.alpha = 0.5;
                        this.bkg.anchor.set(0.5, 0.5);
                        this.logo = pixi_js_1.Sprite.from(logo_png_1.default);
                        this.logo.anchor.set(0.5, 0);
                        container.addChild(this.bkg);
                        container.addChild(this.logo);
                        this.playButton = new pixi_js_1.Text("PLAY", styles_1.TEXT_STYLE_BUTTON);
                        this.playButton.anchor.set(0.5, 0);
                        container.interactive = true;
                        container.cursor = "pointer";
                        container.on("mouseover", function () {
                            //app.renderer.backgroundColor = 0x111111;
                            _this.playButton.style = styles_1.TEXT_STYLE_BUTTON_HOVER;
                        });
                        container.on("mouseout", function () {
                            app.renderer.backgroundColor = 0x000000;
                            _this.playButton.style = styles_1.TEXT_STYLE_BUTTON;
                        });
                        container.on("pointertap", function () {
                            try {
                                app.view.requestFullscreen();
                                screen.orientation.lock("landscape-primary");
                            }
                            finally {
                                _this.events.get("complete").dispatch(_this, 1);
                            }
                        });
                        container.addChild(this.playButton);
                        app.renderer.backgroundColor = 0x000000;
                        return [2 /*return*/, container];
                }
            });
        });
    };
    TitleState.prototype.onResize = function (size) {
        var paddTop = 0;
        if (!document.fullscreen) {
            var nav = document.getElementsByTagName("nav");
            if (nav && nav[0]) {
                var _a = nav[0].getBoundingClientRect(), y = _a.y, height = _a.height;
                paddTop = y + height;
            }
        }
        var scale = Math.min(1, size.width / 1529);
        this.logo.scale.set(scale);
        this.logo.position.set(size.width / 2, paddTop + 10 * scale);
        var logoBounds = this.logo.getBounds();
        var bottomMost = logoBounds.bottom;
        var centerBottom = Math.max(bottomMost, paddTop + (size.height - paddTop) / 2);
        this.bkg.scale.set(scale);
        this.bkg.position.set(size.width / 2, centerBottom);
        this.playButton.scale.set(scale);
        this.playButton.position.set(size.width / 2, centerBottom);
    };
    TitleState.prototype.cleanUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return TitleState;
}(state_1.default));
exports.default = TitleState;


/***/ }),

/***/ "./src/tracks/main/index.ts":
/*!**********************************!*\
  !*** ./src/tracks/main/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var interactive_instrument_1 = __webpack_require__(/*! ../../interactive-instrument */ "./src/interactive-instrument.ts");
var track_interactives_1 = __webpack_require__(/*! ./track-interactives */ "./src/tracks/main/track-interactives.ts");
var film_censored_mp4_1 = __importDefault(__webpack_require__(/*! ../../../assets/video/film-censored.mp4 */ "./assets/video/film-censored.mp4"));
function default_1() {
    return {
        interactives: track_interactives_1.interactives.map(function (i) {
            var o = new interactive_instrument_1.InteractiveInstrument(i.color, i.graphicsPath);
            o.cues = i.cues;
            o.name = i.name;
            return o;
        }),
        stageSize: [787, 203],
        stageCenter: [787 / 2, 203],
        particleCues: [],
        trackUrl: film_censored_mp4_1.default,
        tempo: 148,
        offset: 66.440 - 4.917 - 0.202,
    };
}
exports.default = default_1;


/***/ }),

/***/ "./src/tracks/main/instrument-motion-fn.ts":
/*!*************************************************!*\
  !*** ./src/tracks/main/instrument-motion-fn.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.violinMotion = exports.bassMotion = exports.timpaniMotion = exports.suspCymbMotion = exports.gongMotion = void 0;
// x is -inf to +inf
// returns -1 to 1
var zeroToOneExp = function (x) {
    if (x < 0)
        return 1 - (1 / (1 + x));
    return -1 - (1 / (-1 - x));
};
exports.gongMotion = {
    x: function (_a) {
        var isCrescendo = _a.isCrescendo, phraseProgress = _a.phraseProgress, phraseDuration = _a.phraseDuration, noteProgress = _a.noteProgress, noteDuration = _a.noteDuration;
        // Decaying after note played
        if (noteProgress > noteDuration)
            return 0;
        var noteI = noteProgress / noteDuration;
        // Increase intensity over phrase
        if (isCrescendo) {
            var progressi = Math.min(1, Math.max(0, phraseProgress / phraseDuration));
            return Math.cos(100 * Math.pow(noteI * Math.PI, 0.5)) * (progressi) * 2;
        }
        // Decrease intensity over phrase
        return Math.cos(100 * Math.pow(noteI * Math.PI, 0.5)) * (1 - noteI) * 2;
    },
    y: function (_a) {
        var isCrescendo = _a.isCrescendo, phraseProgress = _a.phraseProgress, phraseDuration = _a.phraseDuration, noteProgress = _a.noteProgress, noteDuration = _a.noteDuration;
        // Decaying after note played
        if (noteProgress > noteDuration)
            return 0;
        var noteI = noteProgress / noteDuration;
        // Increase intensity over phrase
        if (isCrescendo) {
            var progressi = Math.min(1, Math.max(0, phraseProgress / phraseDuration));
            return Math.cos(100 * Math.pow(noteI * Math.PI * 3 + 0.5, 0.5)) * (progressi) * 2;
        }
        // Decrease intensity over phrase
        return Math.cos(100 * Math.pow(noteI * Math.PI * 3 + 0.5, 0.5)) * (1 - noteI) * 2;
    },
};
exports.suspCymbMotion = {
    t: function (_a) {
        var isCrescendo = _a.isCrescendo, phraseProgress = _a.phraseProgress, phraseDuration = _a.phraseDuration, noteProgress = _a.noteProgress, noteDuration = _a.noteDuration;
        var progressi = Math.min(1, Math.max(0, phraseProgress / phraseDuration));
        // Decaying after note played
        if (noteProgress > noteDuration)
            return Math.cos(100 * noteProgress) * Math.PI * (1 / (noteProgress - noteDuration + 1)) / 32;
        var noteI = noteProgress / noteDuration;
        // Increasing intensity over note
        if (!isCrescendo)
            return Math.cos(100 * Math.pow(noteI * Math.PI, 0.5)) * Math.PI * (1 - noteI) / 8;
        // Increasing intensity over phrase
        return Math.cos(100 * Math.pow(noteI * Math.PI, 0.5)) * Math.PI * (progressi) / 8;
    },
};
exports.timpaniMotion = {
    y: function (_a) {
        var noteProgress = _a.noteProgress, isTremelo = _a.isTremelo, noteDuration = _a.noteDuration, isCrescendo = _a.isCrescendo, phraseProgress = _a.phraseProgress, phraseDuration = _a.phraseDuration;
        var progressi = Math.min(1, Math.max(0, phraseProgress / phraseDuration));
        // No decay animation
        if (noteProgress > noteDuration)
            return 0;
        // drum roll
        if (isTremelo) {
            if (isCrescendo) {
                return (Math.abs(Math.cos(noteProgress * Math.PI * 3))) * 2 * (1 + progressi * 2);
            }
            return (Math.abs(Math.cos(noteProgress * Math.PI * 3))) * 4;
        }
        // single hit
        if (isCrescendo) {
            return (1 - (noteProgress / noteDuration)) * 2 * (1 + progressi * 2);
        }
        return (1 - (noteProgress / noteDuration)) * 5;
    },
};
exports.bassMotion = {
    t: function (_a) {
        var noteProgress = _a.noteProgress, noteDuration = _a.noteDuration;
        if (noteProgress > noteDuration)
            return Math.PI / 10;
        var noteI = noteProgress / noteDuration;
        var intensitySwing = (Math.max(0.5, Math.min(3, noteDuration)) / 3);
        return Math.PI / 10 + intensitySwing * (Math.cos(noteI * Math.PI * 2) - 1) * Math.PI / 30;
    },
};
exports.violinMotion = {
    x: function (_a) {
        var beat = _a.beat, noteDuration = _a.noteDuration;
        var intensitySwing = (Math.max(0.5, Math.min(3, noteDuration)) / 3);
        return Math.sin(beat * Math.PI * 2 / 4) * 4 * intensitySwing;
    },
    t: function (_a) {
        var noteProgress = _a.noteProgress, isTremelo = _a.isTremelo, noteDuration = _a.noteDuration, isCrescendo = _a.isCrescendo, phraseProgress = _a.phraseProgress;
        if (noteProgress > noteDuration)
            return Math.PI / 2.5;
        var noteI = noteProgress / noteDuration;
        var intensitySwing = (Math.max(0.5, Math.min(3, noteDuration)) / 3);
        if (isTremelo) {
            return Math.PI / 2.5 + 0.5 * (Math.cos(noteProgress * Math.PI * 6) - 1) * Math.PI / 60;
        }
        return Math.PI / 2.5 + intensitySwing * (Math.cos(noteI * Math.PI * 2) - 1) * Math.PI / 60;
    },
};


/***/ }),

/***/ "./src/tracks/main/score-export.json":
/*!*******************************************!*\
  !*** ./src/tracks/main/score-export.json ***!
  \*******************************************/
/*! exports provided: title, author, parts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"IMAGINE SYMPHONY LIVE\",\"author\":\"CHRIS THOMAS (BMI)\",\"parts\":{\"P1\":{\"id\":\"P1\",\"name\":\"Flute 1, 2\",\"measureCount\":119,\"notes\":[{\"note\":12,\"words\":\"01:00:00:00\"},{\"note\":66,\"words\":\"a2\"},{\"note\":66,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":66,\"words\":\"(cue-6)\"},{\"note\":66.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":67,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":67.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":68,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":68.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":69,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":69.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":70,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":70.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":71,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":71.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":126,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":126,\"words\":\"a2\"},{\"note\":126,\"words\":\"(cue-19)\"},{\"note\":126.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":127,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":127.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":128,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":128.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":129,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":129.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":130,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":130.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":131,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":131.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":132,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":138,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":138.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":139,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":139.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":140,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":140.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":141,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":141.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":142,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":142.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":143,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":143.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":144,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":237,\"words\":\"a2\"},{\"note\":237,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":237,\"words\":\"(cue-9)\"},{\"note\":237.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":238,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":238.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":239,\"duration\":0.5,\"pitch\":6,\"stem\":-1},{\"note\":239.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":240,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":240.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":241,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":241.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":242,\"duration\":0.5,\"pitch\":6,\"stem\":-1},{\"note\":242.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":243,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":243.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":244,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":244.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":245,\"duration\":0.5,\"pitch\":6,\"stem\":-1},{\"note\":245.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":283,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":283,\"words\":\"(cue-17)\"},{\"note\":284,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":285,\"duration\":2,\"pitch\":10,\"stem\":-1},{\"note\":287,\"duration\":0.75,\"pitch\":10,\"stem\":-1},{\"note\":287.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":288,\"duration\":2,\"pitch\":12,\"stem\":-1},{\"note\":290,\"duration\":0.75,\"pitch\":12,\"stem\":-1},{\"note\":290.75,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":291,\"duration\":3,\"pitch\":14,\"stem\":-1},{\"note\":294,\"duration\":6,\"pitch\":14,\"stem\":-1},{\"note\":318,\"words\":\"a2\"},{\"note\":318,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":318,\"words\":\"(cue-18)\"},{\"note\":318.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":319,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":319.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":320,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":320.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":321,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":321.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":322,\"duration\":2,\"pitch\":-2,\"stem\":1},{\"note\":330,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":330.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":331,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":331.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":332,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":332.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":333,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":333.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":334,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":334.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":335,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":335.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":366,\"words\":\"a1\"},{\"note\":366,\"words\":\"(cue-60)\"},{\"note\":366,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":369,\"duration\":3,\"pitch\":5,\"stem\":-1},{\"note\":372,\"duration\":3,\"pitch\":5,\"stem\":-1},{\"note\":375,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":376.5,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":378,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":381,\"duration\":3,\"pitch\":5,\"stem\":-1},{\"note\":384,\"duration\":1,\"pitch\":2,\"stem\":-1},{\"note\":385,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":386,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":387,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":388,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":389,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":390,\"duration\":3,\"pitch\":3,\"stem\":-1},{\"note\":393,\"duration\":3,\"pitch\":5,\"stem\":-1},{\"note\":396,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":402,\"duration\":3,\"pitch\":12,\"stem\":-1},{\"note\":405,\"duration\":3,\"pitch\":14,\"stem\":-1},{\"note\":408,\"duration\":6,\"pitch\":15,\"stem\":-1},{\"note\":414,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":414,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":420,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":420,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":426,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":426,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":450,\"duration\":0.75,\"pitch\":10,\"stem\":-1},{\"note\":450,\"duration\":0.75,\"pitch\":7,\"stem\":-1},{\"note\":450,\"words\":\"(cue-6)\"},{\"note\":450.75,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":450.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":451,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":451,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":451.5,\"duration\":0.75,\"pitch\":10,\"stem\":-1},{\"note\":451.5,\"duration\":0.75,\"pitch\":7,\"stem\":-1},{\"note\":452.25,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":452.25,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":452.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":452.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":453,\"duration\":0.75,\"pitch\":7,\"stem\":-1},{\"note\":453,\"duration\":0.75,\"pitch\":10,\"stem\":-1},{\"note\":453.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":453.75,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":454,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":454,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":454.5,\"duration\":0.75,\"pitch\":7,\"stem\":-1},{\"note\":454.5,\"duration\":0.75,\"pitch\":10,\"stem\":-1},{\"note\":455.25,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":455.25,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":455.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":455.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":516,\"words\":\"a2\"},{\"note\":516,\"words\":\"(cue-12)\"},{\"note\":516,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":516.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":517,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":517.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":518,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":518.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":519,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":519.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":520,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":520.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":521,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":521.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":522,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":522.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":523,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":523.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":524,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":524.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":525,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":525.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":526,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":526.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":527,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":527.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":582,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":582,\"words\":\"a2\"},{\"note\":582.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":583,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":583.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":584,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":584.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":585,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":585.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":586,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":586.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":587,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":587.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":588,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":588.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":589,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":589.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":590,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":590.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":591,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":591.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":592,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":592.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":593,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":593.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":594,\"words\":\"(half legato, half stacc.)\"},{\"note\":594,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":594.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":595,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":595.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":596,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":596.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":597,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":597.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":598,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":598.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":599,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":599.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":600,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":600.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":601,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":601.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":602,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":602.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":603,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":603.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":604,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":604.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":605,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":605.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":606,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":606.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":607,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":607.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":608,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":608.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":609,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":609.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":610,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":610.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":611,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":611.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":612,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":612,\"words\":\"(sim.)\"},{\"note\":612.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":613,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":613.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":614,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":614.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":615,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":615.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":616,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":616.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":617,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":617.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":618,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":618.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":619,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":619.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":620,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":620.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":621,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":621.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":622,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":622.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":623,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":623.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":624,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":624.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":625,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":625.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":626,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":626.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":627,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":627.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":628,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":628.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":629,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":629.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":630,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":630.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":631,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":631.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":632,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":632.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":633,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":633.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":634,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":634.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":635,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":635.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":636,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":636.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":637,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":637.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":638,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":638.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":639,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":639.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":640,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":640.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":641,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":641.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":642,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":642.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":643,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":643.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":644,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":644.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":645,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":645.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":646,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":646.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":647,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":647.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":648,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":648.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":649,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":649.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":650,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":650.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":651,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":651.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":652,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":652.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":653,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":653.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":654,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":654.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":655,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":655.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":656,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":656.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":657,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":657.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":658,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":658.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":659,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":659.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":660,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":660.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":661,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":661.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":662,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":662.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":663,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":663.5,\"duration\":0.5,\"pitch\":17,\"stem\":-1},{\"note\":664,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":664.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":665,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":665.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":666,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":666.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":667,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":667.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":668,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":668.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":669,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":669.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":670,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":670.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":671,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":671.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":672,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":672.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":673,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":673.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":674,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":674.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":675,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":675.5,\"duration\":0.5,\"pitch\":17,\"stem\":-1},{\"note\":676,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":676.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":677,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":677.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":678,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":678.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":679,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":679.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":680,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":680.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":681,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":681.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":682,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":682.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":683,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":683.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":684,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":684.5,\"duration\":0.5,\"pitch\":17,\"stem\":-1},{\"note\":685,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":685.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":686,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":686.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":687,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":687.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":688,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":688.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":689,\"duration\":0.5,\"pitch\":6,\"stem\":-1},{\"note\":689.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":690,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":690.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":691,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":691.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":692,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":693,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":693.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":694,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":694.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":695,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":696,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":696.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":697,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":697.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":698,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":699,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":700,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":701,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":702,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":702.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":703,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":703.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":704,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":705,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":705.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":706,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":706.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":707,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":707.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":708,\"duration\":1,\"pitch\":7,\"stem\":1},{\"note\":708,\"words\":\"(cue)\"},{\"note\":708,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":709,\"duration\":1,\"pitch\":10,\"stem\":1},{\"note\":709,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":710,\"duration\":1,\"pitch\":14,\"stem\":1},{\"note\":710,\"duration\":1,\"pitch\":14,\"stem\":-1},{\"note\":711,\"duration\":1,\"pitch\":12,\"stem\":1},{\"note\":711,\"duration\":1,\"pitch\":12,\"stem\":-1},{\"note\":712,\"duration\":2,\"pitch\":7,\"stem\":-1},{\"note\":712,\"duration\":2,\"pitch\":16,\"stem\":1}]},\"P2\":{\"id\":\"P2\",\"name\":\"Oboe\",\"measureCount\":119,\"notes\":[{\"note\":84,\"words\":\"(solo-11)\"},{\"note\":85,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":86,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":87,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":88,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":89,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":90,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":144,\"words\":\"(solo)\"},{\"note\":144,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":151,\"duration\":1,\"pitch\":2,\"stem\":-1},{\"note\":151,\"words\":\"(cue-47)\"},{\"note\":152,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":153,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":154,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":155,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":156,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":159,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":160,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":161,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":162,\"duration\":3,\"pitch\":10,\"stem\":-1},{\"note\":165,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":166,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":167,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":168,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":174,\"duration\":3,\"pitch\":5,\"stem\":-1},{\"note\":174,\"words\":\"(cue)\"},{\"note\":177,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":178.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":180,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":181,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":182,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":183,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":184.5,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":186,\"duration\":2,\"pitch\":9,\"stem\":-1},{\"note\":188,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":189,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":190,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":191,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":192,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":237,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":237.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":238,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":238.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":239,\"duration\":0.5,\"pitch\":6,\"stem\":-1},{\"note\":239.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":240,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":240.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":241,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":241.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":242,\"duration\":0.5,\"pitch\":6,\"stem\":-1},{\"note\":242.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":243,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":303,\"words\":\"(solo-10)\"},{\"note\":303,\"duration\":1,\"pitch\":2,\"stem\":-1},{\"note\":304,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":305,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":306,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":312,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":402,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":405,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":408,\"duration\":6,\"pitch\":3,\"stem\":-1},{\"note\":414,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":417,\"duration\":3,\"pitch\":3,\"stem\":-1},{\"note\":420,\"duration\":6,\"pitch\":3,\"stem\":-1},{\"note\":426,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":450,\"duration\":0.75,\"pitch\":3,\"stem\":-1},{\"note\":450.75,\"duration\":0.25,\"pitch\":3,\"stem\":-1},{\"note\":451,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":451.5,\"duration\":0.75,\"pitch\":3,\"stem\":-1},{\"note\":452.25,\"duration\":0.25,\"pitch\":3,\"stem\":-1},{\"note\":452.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":453,\"duration\":0.75,\"pitch\":3,\"stem\":-1},{\"note\":453.75,\"duration\":0.25,\"pitch\":3,\"stem\":-1},{\"note\":454,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":454.5,\"duration\":0.75,\"pitch\":3,\"stem\":-1},{\"note\":455.25,\"duration\":0.25,\"pitch\":3,\"stem\":-1},{\"note\":455.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":582,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":582.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":583,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":583.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":584,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":584.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":585,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":585.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":586,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":586.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":587,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":587.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":588,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":588.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":589,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":589.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":590,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":590.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":591,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":591.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":592,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":592.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":593,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":593.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":594,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":594.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":595,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":595.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":596,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":596.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":597,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":597.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":598,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":598.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":599,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":599.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":600,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":600.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":601,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":601.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":602,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":602.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":603,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":603.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":604,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":604.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":605,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":605.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":606,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":606.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":607,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":607.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":608,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":608.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":609,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":609.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":610,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":610.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":611,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":611.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":612,\"words\":\"(sim.)\"},{\"note\":612,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":612.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":613,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":613.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":614,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":614.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":615,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":615.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":616,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":616.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":617,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":617.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":618,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":618.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":619,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":619.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":620,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":620.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":621,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":621.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":622,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":622.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":623,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":623.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":624,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":624.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":625,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":625.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":626,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":626.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":627,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":627.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":628,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":628.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":629,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":629.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":630,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":630.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":631,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":631.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":632,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":632.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":633,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":633.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":634,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":634.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":635,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":635.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":636,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":636.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":637,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":637.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":638,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":638.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":639,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":639.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":640,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":640.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":641,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":641.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":642,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":642.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":643,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":643.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":644,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":644.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":645,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":645.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":646,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":646.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":647,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":647.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":648,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":648.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":649,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":649.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":650,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":650.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":651,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":651.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":652,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":652.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":653,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":653.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":654,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":654.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":655,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":655.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":656,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":656.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":657,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":657.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":658,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":658.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":659,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":659.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":660,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":660.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":661,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":661.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":662,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":662.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":663,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":663.5,\"duration\":0.5,\"pitch\":17,\"stem\":-1},{\"note\":664,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":664.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":665,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":665.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":666,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":666.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":667,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":667.5,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":668,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":668.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":669,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":669.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":670,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":670.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":671,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":671.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":672,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":672.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":673,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":673.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":674,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":674.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":675,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":675.5,\"duration\":0.5,\"pitch\":17,\"stem\":-1},{\"note\":676,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":676.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":677,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":677.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":678,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":678.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":679,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":679.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":680,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":680.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":681,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":681.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":682,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":682.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":683,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":683.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":684,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":684.5,\"duration\":0.5,\"pitch\":17,\"stem\":-1},{\"note\":685,\"duration\":0.5,\"pitch\":12,\"stem\":-1},{\"note\":685.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":686,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":686.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":687,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":687.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":688,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":688.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":689,\"duration\":0.5,\"pitch\":6,\"stem\":-1},{\"note\":689.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":690,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":690.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":691,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":691.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":692,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":693,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":693.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":694,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":694.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":695,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":696,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":696.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":697,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":697.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":698,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":699,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":700,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":701,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":702,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":702.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":703,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":703.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":704,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":705,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":705.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":706,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":706.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":707,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":707.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":708,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":709,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":710,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":711,\"duration\":1,\"pitch\":4,\"stem\":-1},{\"note\":712,\"duration\":2,\"pitch\":7,\"stem\":-1}]},\"P3\":{\"id\":\"P3\",\"name\":\"English Horn (Optional)\",\"measureCount\":119,\"notes\":[{\"note\":402,\"words\":\"(solo)\"},{\"note\":402,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":403.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":405,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":406.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":408,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":409.5,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":411,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":412.5,\"duration\":1.5,\"pitch\":7,\"stem\":1},{\"note\":417,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":420,\"duration\":6,\"pitch\":-2,\"stem\":1},{\"note\":426,\"duration\":6,\"pitch\":-3,\"stem\":1},{\"note\":570,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":570,\"words\":\"(cue-138)\"},{\"note\":570.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":571,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":571.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":572,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":572.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":573,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":573.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":574,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":574.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":575,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":575.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":576,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":576.5,\"duration\":0.5,\"pitch\":10,\"stem\":1},{\"note\":577,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":577.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":578,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":578.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":579,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":579.5,\"duration\":0.5,\"pitch\":10,\"stem\":1},{\"note\":580,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":580.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":581,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":581.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":582,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":582.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":583,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":583.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":584,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":584.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":585,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":585.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":586,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":586.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":587,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":587.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":588,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":588.5,\"duration\":0.5,\"pitch\":10,\"stem\":1},{\"note\":589,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":589.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":590,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":590.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":591,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":591.5,\"duration\":0.5,\"pitch\":10,\"stem\":1},{\"note\":592,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":592.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":593,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":593.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":594,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":594.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":595,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":595.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":596,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":596.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":597,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":597.5,\"duration\":0.5,\"pitch\":10,\"stem\":1},{\"note\":598,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":598.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":599,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":599.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":600,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":600.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":601,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":601.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":602,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":602.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":603,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":603.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":604,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":604.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":605,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":605.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":606,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":606.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":607,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":607.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":608,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":608.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":609,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":609.5,\"duration\":0.5,\"pitch\":10,\"stem\":1},{\"note\":610,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":610.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":611,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":611.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":612,\"words\":\"(sim.)\"},{\"note\":612,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":612.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":613,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":613.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":614,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":614.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":615,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":615.5,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":616,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":616.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":617,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":617.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":618,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":618.5,\"duration\":0.5,\"pitch\":10,\"stem\":1},{\"note\":619,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":619.5,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":620,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":620.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":621,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":621.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":622,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":622.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":623,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":623.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":624,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":624.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":625,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":625.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":626,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":626.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":627,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":627.5,\"duration\":0.5,\"pitch\":10,\"stem\":1},{\"note\":628,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":628.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":629,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":629.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":630,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":630.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":631,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":631.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":632,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":632.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":633,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":633.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":634,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":634.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":635,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":635.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":636,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":636.5,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":637,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":637.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":638,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":638.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":639,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":639.5,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":640,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":640.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":641,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":641.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":642,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":642.5,\"duration\":0.5,\"pitch\":10,\"stem\":1},{\"note\":643,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":643.5,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":644,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":644.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":645,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":645.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":646,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":646.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":647,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":647.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":648,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":648.5,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":649,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":649.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":650,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":650.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":651,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":651.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":652,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":652.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":653,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":653.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":654,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":654.5,\"duration\":0.5,\"pitch\":10,\"stem\":1},{\"note\":655,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":655.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":656,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":656.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":657,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":657.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":658,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":658.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":659,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":659.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":660,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":660.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":661,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":661.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":662,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":662.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":663,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":663.5,\"duration\":0.5,\"pitch\":12,\"stem\":1},{\"note\":664,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":664.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":665,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":665.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":666,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":666.5,\"duration\":0.5,\"pitch\":10,\"stem\":1},{\"note\":667,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":667.5,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":668,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":668.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":669,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":669.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":670,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":670.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":671,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":671.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":672,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":672.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":673,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":673.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":674,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":674.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":675,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":675.5,\"duration\":0.5,\"pitch\":12,\"stem\":1},{\"note\":676,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":676.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":677,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":677.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":678,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":678.5,\"duration\":0.5,\"pitch\":10,\"stem\":1},{\"note\":679,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":679.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":680,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":680.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":681,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":681.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":682,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":682.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":683,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":683.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":684,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":684.5,\"duration\":0.5,\"pitch\":12,\"stem\":1},{\"note\":685,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":685.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":686,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":686.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":687,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":687.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":688,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":688.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":689,\"duration\":0.5,\"pitch\":1,\"stem\":1},{\"note\":689.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":690,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":690.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":691,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":691.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":692,\"duration\":1,\"pitch\":5,\"stem\":1},{\"note\":693,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":693.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":694,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":694.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":695,\"duration\":1,\"pitch\":5,\"stem\":1},{\"note\":696,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":696.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":697,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":697.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":698,\"duration\":1,\"pitch\":5,\"stem\":1},{\"note\":699,\"duration\":1,\"pitch\":5,\"stem\":1},{\"note\":700,\"duration\":1,\"pitch\":4,\"stem\":1},{\"note\":701,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":702,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":702.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":703,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":703.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":704,\"duration\":1,\"pitch\":5,\"stem\":1},{\"note\":705,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":705.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":706,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":706.5,\"duration\":0.5,\"pitch\":9,\"stem\":1},{\"note\":707,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":707.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":708,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":708,\"duration\":1,\"pitch\":2,\"stem\":-1},{\"note\":709,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":709,\"duration\":1,\"pitch\":5,\"stem\":1},{\"note\":710,\"duration\":1,\"pitch\":9,\"stem\":1},{\"note\":710,\"duration\":1,\"pitch\":-3,\"stem\":-1},{\"note\":711,\"duration\":1,\"pitch\":7,\"stem\":1},{\"note\":711,\"duration\":1,\"pitch\":-1,\"stem\":-1},{\"note\":712,\"duration\":2,\"pitch\":11,\"stem\":1},{\"note\":712,\"duration\":2,\"pitch\":2,\"stem\":-1}]},\"P4\":{\"id\":\"P4\",\"name\":\"Clarinet in Bb 1, 2\",\"measureCount\":119,\"notes\":[{\"note\":66,\"words\":\"a2\"},{\"note\":66,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":66.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":67,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":67.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":68,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":68.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":69,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":69.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":70,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":70.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":71,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":71.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":90,\"words\":\"(solo)\"},{\"note\":90,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":90.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":91,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":91.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":92,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":92.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":93,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":93.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":94,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":94.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":95,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":95.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":109,\"words\":\"(solo)\"},{\"note\":109,\"duration\":1,\"pitch\":-3,\"stem\":1},{\"note\":110,\"duration\":1,\"pitch\":-1,\"stem\":1},{\"note\":111,\"duration\":1,\"pitch\":0,\"stem\":1},{\"note\":112,\"duration\":1,\"pitch\":-1,\"stem\":1},{\"note\":113,\"duration\":1,\"pitch\":-3,\"stem\":1},{\"note\":114,\"duration\":2,\"pitch\":5,\"stem\":-1},{\"note\":116,\"duration\":0.75,\"pitch\":5,\"stem\":1},{\"note\":116.75,\"duration\":0.25,\"pitch\":0,\"stem\":1},{\"note\":117,\"duration\":2,\"pitch\":9,\"stem\":-1},{\"note\":119,\"duration\":0.75,\"pitch\":9,\"stem\":-1},{\"note\":119.75,\"duration\":0.25,\"pitch\":4,\"stem\":-1},{\"note\":120,\"duration\":6,\"pitch\":12,\"stem\":-1},{\"note\":126,\"duration\":1,\"pitch\":12,\"stem\":1},{\"note\":126,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":126.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":127,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":127.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":128,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":128.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":129,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":129.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":130,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":130.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":131,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":131.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":132,\"duration\":1,\"pitch\":0,\"stem\":1},{\"note\":138,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":138,\"words\":\"a2\"},{\"note\":138.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":139,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":139.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":140,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":140.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":141,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":141.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":142,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":142.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":143,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":143.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":144,\"duration\":1,\"pitch\":0,\"stem\":1},{\"note\":243,\"words\":\"a2\"},{\"note\":243,\"duration\":0.5,\"pitch\":11,\"stem\":-1},{\"note\":243.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":244,\"duration\":0.5,\"pitch\":11,\"stem\":-1},{\"note\":244.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":245,\"duration\":0.5,\"pitch\":8,\"stem\":-1},{\"note\":245.5,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":295,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":295,\"words\":\"(solo-17)\"},{\"note\":296,\"duration\":1,\"pitch\":11,\"stem\":-1},{\"note\":297,\"duration\":1,\"pitch\":12,\"stem\":-1},{\"note\":298,\"duration\":1,\"pitch\":11,\"stem\":-1},{\"note\":299,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":300,\"duration\":2,\"pitch\":5,\"stem\":-1},{\"note\":302,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":303,\"duration\":3,\"pitch\":4,\"stem\":-1},{\"note\":306,\"duration\":6,\"pitch\":4,\"stem\":-1},{\"note\":318,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":318,\"words\":\"a2\"},{\"note\":318.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":319,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":319.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":320,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":320.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":321,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":321.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":322,\"duration\":2,\"pitch\":0,\"stem\":1},{\"note\":330,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":330.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":331,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":331.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":332,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":332.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":333,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":333.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":334,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":334.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":335,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":335.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":366,\"words\":\"(cue-24)\"},{\"note\":366,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":366,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":369,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":369,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":372,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":372,\"duration\":3,\"pitch\":-1,\"stem\":1},{\"note\":375,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":375,\"duration\":1.5,\"pitch\":-8,\"stem\":1},{\"note\":376.5,\"duration\":1.5,\"pitch\":-5,\"stem\":1},{\"note\":376.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":378,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":378,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":381,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":381,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":384,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":384,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":387,\"duration\":3,\"pitch\":-1,\"stem\":1},{\"note\":387,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":402,\"duration\":1.5,\"pitch\":-8,\"stem\":1},{\"note\":402,\"words\":\"(solo-34)\"},{\"note\":403.5,\"duration\":1.5,\"pitch\":-7,\"stem\":1},{\"note\":405,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":406.5,\"duration\":1.5,\"pitch\":-5,\"stem\":1},{\"note\":408,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":409.5,\"duration\":1.5,\"pitch\":-1,\"stem\":1},{\"note\":411,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":412.5,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":414,\"duration\":6,\"pitch\":0,\"stem\":1},{\"note\":414,\"duration\":6,\"pitch\":-3,\"stem\":1},{\"note\":420,\"duration\":6,\"pitch\":0,\"stem\":1},{\"note\":420,\"duration\":6,\"pitch\":-3,\"stem\":1},{\"note\":426,\"duration\":6,\"pitch\":-3,\"stem\":1},{\"note\":426,\"duration\":6,\"pitch\":0,\"stem\":1},{\"note\":444,\"duration\":0.75,\"pitch\":0,\"stem\":1},{\"note\":444,\"duration\":0.75,\"pitch\":-3,\"stem\":1},{\"note\":444,\"words\":\"(cue-6)\"},{\"note\":444.75,\"duration\":0.25,\"pitch\":-3,\"stem\":1},{\"note\":444.75,\"duration\":0.25,\"pitch\":0,\"stem\":1},{\"note\":445,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":445,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":445.5,\"duration\":0.75,\"pitch\":0,\"stem\":1},{\"note\":445.5,\"duration\":0.75,\"pitch\":-3,\"stem\":1},{\"note\":446.25,\"duration\":0.25,\"pitch\":0,\"stem\":1},{\"note\":446.25,\"duration\":0.25,\"pitch\":-3,\"stem\":1},{\"note\":446.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":446.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":447,\"duration\":0.75,\"pitch\":-3,\"stem\":1},{\"note\":447,\"duration\":0.75,\"pitch\":0,\"stem\":1},{\"note\":447.75,\"duration\":0.25,\"pitch\":-3,\"stem\":1},{\"note\":447.75,\"duration\":0.25,\"pitch\":0,\"stem\":1},{\"note\":448,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":448,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":448.5,\"duration\":0.75,\"pitch\":-3,\"stem\":1},{\"note\":448.5,\"duration\":0.75,\"pitch\":0,\"stem\":1},{\"note\":449.25,\"duration\":0.25,\"pitch\":0,\"stem\":1},{\"note\":449.25,\"duration\":0.25,\"pitch\":-3,\"stem\":1},{\"note\":449.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":449.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":516,\"words\":\"a2\"},{\"note\":516,\"words\":\"(cue-24)\"},{\"note\":516,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":516.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":517,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":517.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":518,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":518.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":519,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":519.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":520,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":520.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":521,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":521.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":522,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":522.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":523,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":523.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":524,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":524.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":525,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":525.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":526,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":526.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":527,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":527.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":558,\"words\":\"a1\"},{\"note\":558,\"words\":\"(cue-150)\"},{\"note\":558,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":558.5,\"duration\":0.5,\"pitch\":-13,\"stem\":1},{\"note\":559,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":559.5,\"duration\":0.5,\"pitch\":-8,\"stem\":1},{\"note\":560,\"duration\":1,\"pitch\":-12,\"stem\":1},{\"note\":561,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":561.5,\"duration\":0.5,\"pitch\":-13,\"stem\":1},{\"note\":562,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":562.5,\"duration\":0.5,\"pitch\":-8,\"stem\":1},{\"note\":563,\"duration\":1,\"pitch\":-12,\"stem\":1},{\"note\":564,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":564.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":565,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":565.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":566,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":567,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":567.5,\"duration\":0.5,\"pitch\":-8,\"stem\":1},{\"note\":568,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":568.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":569,\"duration\":1,\"pitch\":-7,\"stem\":1},{\"note\":570,\"words\":\"a2\"},{\"note\":570,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":570.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":571,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":571.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":572,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":572.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":573,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":573.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":574,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":574.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":575,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":575.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":576,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":576.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":577,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":577.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":578,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":578.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":579,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":579.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":580,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":580.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":581,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":581.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":582,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":582.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":583,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":583.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":584,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":584.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":585,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":585.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":586,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":586.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":587,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":587.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":588,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":588.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":589,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":589.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":590,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":590.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":591,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":591.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":592,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":592.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":593,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":593.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":594,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":594,\"words\":\"(half legato, half stacc.)\"},{\"note\":594.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":595,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":595.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":596,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":596.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":597,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":597.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":598,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":598.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":599,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":599.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":600,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":600.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":601,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":601.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":602,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":602.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":603,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":603.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":604,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":604.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":605,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":605.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":606,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":606.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":607,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":607.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":608,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":608.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":609,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":609.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":610,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":610.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":611,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":611.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":612,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":612,\"words\":\"(sim.)\"},{\"note\":612.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":613,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":613.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":614,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":614.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":615,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":615.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":616,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":616.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":617,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":617.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":618,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":618.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":619,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":619.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":620,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":620.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":621,\"duration\":0.5,\"pitch\":-8,\"stem\":1},{\"note\":621.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":622,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":622.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":623,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":623.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":624,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":624.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":625,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":625.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":626,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":626.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":627,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":627.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":628,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":628.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":629,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":629.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":630,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":630.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":631,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":631.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":632,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":632.5,\"duration\":0.5,\"pitch\":-8,\"stem\":1},{\"note\":633,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":633.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":634,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":634.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":635,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":635.5,\"duration\":0.5,\"pitch\":-8,\"stem\":1},{\"note\":636,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":636.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":637,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":637.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":638,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":638.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":639,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":639.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":640,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":640.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":641,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":641.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":642,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":642.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":643,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":643.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":644,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":644.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":645,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":645.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":646,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":646.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":647,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":647.5,\"duration\":0.5,\"pitch\":-8,\"stem\":1},{\"note\":648,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":648.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":649,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":649.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":650,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":650.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":651,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":651.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":652,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":652.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":653,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":653.5,\"duration\":0.5,\"pitch\":-8,\"stem\":1},{\"note\":654,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":654.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":655,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":655.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":656,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":656.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":657,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":657.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":658,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":658.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":659,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":659.5,\"duration\":0.5,\"pitch\":-8,\"stem\":1},{\"note\":660,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":660.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":661,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":661.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":662,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":662.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":663,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":663.5,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":664,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":664.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":665,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":665.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":666,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":666.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":667,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":667.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":668,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":668.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":669,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":669.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":670,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":670.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":671,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":671.5,\"duration\":0.5,\"pitch\":-8,\"stem\":1},{\"note\":672,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":672.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":673,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":673.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":674,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":674.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":675,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":675.5,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":676,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":676.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":677,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":677.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":678,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":678.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":679,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":679.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":680,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":680.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":681,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":681.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":682,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":682.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":683,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":683.5,\"duration\":0.5,\"pitch\":-8,\"stem\":1},{\"note\":684,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":684.5,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":685,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":685.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":686,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":686.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":687,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":687.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":688,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":688.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":689,\"duration\":0.5,\"pitch\":-4,\"stem\":1},{\"note\":689.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":690,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":690.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":691,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":691.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":692,\"duration\":1,\"pitch\":0,\"stem\":1},{\"note\":693,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":693.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":694,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":694.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":695,\"duration\":1,\"pitch\":0,\"stem\":1},{\"note\":696,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":696.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":697,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":697.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":698,\"duration\":1,\"pitch\":0,\"stem\":1},{\"note\":699,\"duration\":1,\"pitch\":0,\"stem\":1},{\"note\":700,\"duration\":1,\"pitch\":-1,\"stem\":1},{\"note\":701,\"duration\":1,\"pitch\":-3,\"stem\":1},{\"note\":702,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":702.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":703,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":703.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":704,\"duration\":1,\"pitch\":0,\"stem\":1},{\"note\":705,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":705.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":706,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":706.5,\"duration\":0.5,\"pitch\":4,\"stem\":1},{\"note\":707,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":707.5,\"duration\":0.5,\"pitch\":-1,\"stem\":1},{\"note\":708,\"duration\":1,\"pitch\":-3,\"stem\":1},{\"note\":708,\"duration\":1,\"pitch\":-3,\"stem\":-1},{\"note\":709,\"duration\":1,\"pitch\":0,\"stem\":1},{\"note\":709,\"duration\":1,\"pitch\":0,\"stem\":-1},{\"note\":710,\"duration\":1,\"pitch\":4,\"stem\":1},{\"note\":710,\"duration\":1,\"pitch\":-8,\"stem\":-1},{\"note\":711,\"duration\":1,\"pitch\":-6,\"stem\":-1},{\"note\":711,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":712,\"duration\":2,\"pitch\":6,\"stem\":1},{\"note\":712,\"duration\":2,\"pitch\":-3,\"stem\":-1}]},\"P5\":{\"id\":\"P5\",\"name\":\"Bass Clarinet\",\"measureCount\":119,\"notes\":[{\"note\":96,\"words\":\"(cue)\"},{\"note\":96,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":96.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":97,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":97.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":98,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":98.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":99,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":99.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":100,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":100.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":101,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":101.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":102,\"duration\":6,\"pitch\":0,\"stem\":-1},{\"note\":108,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":108.5,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":109,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":109.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":110,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":110.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":111,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":111.5,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":112,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":112.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":113,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":113.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":114,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":114.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":115,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":115.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":116,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":116.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":117,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":117.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":118,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":118.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":119,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":119.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":132,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":132.5,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":133,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":133.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":134,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":134.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":135,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":135.5,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":136,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":136.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":137,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":137.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":138,\"duration\":1,\"pitch\":0,\"stem\":-1},{\"note\":324,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":324,\"words\":\"(cue-18)\"},{\"note\":324.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":325,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":325.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":326,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":326.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":327,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":327.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":328,\"duration\":2,\"pitch\":0,\"stem\":-1},{\"note\":336,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":336.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":337,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":337.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":338,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":338.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":339,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":339.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":340,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":340.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":341,\"duration\":1,\"pitch\":-3,\"stem\":-1},{\"note\":366,\"duration\":3,\"pitch\":5,\"stem\":-1},{\"note\":369,\"duration\":3,\"pitch\":4,\"stem\":-1},{\"note\":372,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":375,\"duration\":1.5,\"pitch\":0,\"stem\":-1},{\"note\":376.5,\"duration\":1.5,\"pitch\":4,\"stem\":-1},{\"note\":378,\"duration\":3,\"pitch\":5,\"stem\":-1},{\"note\":381,\"duration\":3,\"pitch\":4,\"stem\":-1},{\"note\":384,\"duration\":3,\"pitch\":4,\"stem\":-1},{\"note\":387,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":390,\"words\":\"(solo-12)\"},{\"note\":390,\"duration\":1.5,\"pitch\":-20,\"stem\":1},{\"note\":391.5,\"duration\":1.5,\"pitch\":-19,\"stem\":1},{\"note\":393,\"duration\":1.5,\"pitch\":-12,\"stem\":1},{\"note\":394.5,\"duration\":1.5,\"pitch\":-17,\"stem\":1},{\"note\":396,\"duration\":1.5,\"pitch\":-15,\"stem\":1},{\"note\":397.5,\"duration\":1.5,\"pitch\":-13,\"stem\":1},{\"note\":399,\"duration\":1.5,\"pitch\":-12,\"stem\":1},{\"note\":400.5,\"duration\":1.5,\"pitch\":-10,\"stem\":1},{\"note\":402,\"duration\":1.5,\"pitch\":-8,\"stem\":1},{\"note\":403.5,\"duration\":1.5,\"pitch\":-7,\"stem\":1},{\"note\":405,\"duration\":1.5,\"pitch\":0,\"stem\":-1},{\"note\":406.5,\"duration\":1.5,\"pitch\":-5,\"stem\":-1},{\"note\":408,\"duration\":1.5,\"pitch\":-3,\"stem\":-1},{\"note\":409.5,\"duration\":1.5,\"pitch\":-1,\"stem\":-1},{\"note\":411,\"duration\":1.5,\"pitch\":0,\"stem\":-1},{\"note\":412.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":420,\"duration\":6,\"pitch\":-19,\"stem\":1},{\"note\":426,\"duration\":6,\"pitch\":-15,\"stem\":1},{\"note\":444,\"duration\":0.75,\"pitch\":4,\"stem\":-1},{\"note\":444.75,\"duration\":0.25,\"pitch\":4,\"stem\":-1},{\"note\":445,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":445.5,\"duration\":0.75,\"pitch\":4,\"stem\":-1},{\"note\":446.25,\"duration\":0.25,\"pitch\":4,\"stem\":-1},{\"note\":446.5,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":447,\"duration\":0.75,\"pitch\":4,\"stem\":-1},{\"note\":447.75,\"duration\":0.25,\"pitch\":4,\"stem\":-1},{\"note\":448,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":448.5,\"duration\":0.75,\"pitch\":4,\"stem\":-1},{\"note\":449.25,\"duration\":0.25,\"pitch\":4,\"stem\":-1},{\"note\":449.5,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":528,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":528.5,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":529,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":529.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":530,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":530.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":531,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":531.5,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":532,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":532.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":533,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":533.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":534,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":534.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":535,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":535.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":536,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":536.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":537,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":537.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":538,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":538.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":539,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":539.5,\"duration\":0.5,\"pitch\":-1,\"stem\":-1},{\"note\":558,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":558.5,\"duration\":0.5,\"pitch\":-13,\"stem\":1},{\"note\":559,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":559.5,\"duration\":0.5,\"pitch\":-8,\"stem\":1},{\"note\":560,\"duration\":1,\"pitch\":-12,\"stem\":1},{\"note\":561,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":561.5,\"duration\":0.5,\"pitch\":-13,\"stem\":1},{\"note\":562,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":562.5,\"duration\":0.5,\"pitch\":-8,\"stem\":1},{\"note\":563,\"duration\":1,\"pitch\":-12,\"stem\":1},{\"note\":564,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":564.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":565,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":565.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":566,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":567,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":567.5,\"duration\":0.5,\"pitch\":-8,\"stem\":-1},{\"note\":568,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":568.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":569,\"duration\":1,\"pitch\":-7,\"stem\":-1},{\"note\":582,\"duration\":6,\"pitch\":-3,\"stem\":-1},{\"note\":588,\"duration\":3,\"pitch\":-7,\"stem\":1},{\"note\":591,\"duration\":3,\"pitch\":-19,\"stem\":1},{\"note\":684,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":687,\"duration\":3,\"pitch\":-8,\"stem\":1},{\"note\":690,\"duration\":3,\"pitch\":-12,\"stem\":1},{\"note\":693,\"duration\":3,\"pitch\":-8,\"stem\":1},{\"note\":696,\"duration\":3,\"pitch\":-7,\"stem\":1},{\"note\":699,\"duration\":3,\"pitch\":-3,\"stem\":-1},{\"note\":702,\"duration\":3,\"pitch\":-15,\"stem\":1},{\"note\":705,\"duration\":3,\"pitch\":-7,\"stem\":1},{\"note\":708,\"duration\":1,\"pitch\":0,\"stem\":-1},{\"note\":709,\"duration\":1,\"pitch\":-3,\"stem\":-1},{\"note\":710,\"duration\":1,\"pitch\":-8,\"stem\":-1},{\"note\":711,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":712,\"duration\":2,\"pitch\":-10,\"stem\":1}]},\"P6\":{\"id\":\"P6\",\"name\":\"Bassoon 1, 2\",\"measureCount\":119,\"notes\":[{\"note\":96,\"words\":\"a1\"},{\"note\":96,\"words\":\"(cue)\"},{\"note\":96,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":96.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":97,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":97.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":98,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":98.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":99,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":99.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":100,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":100.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":101,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":101.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":102,\"duration\":6,\"pitch\":-14,\"stem\":-1},{\"note\":108,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":108.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":109,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":109.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":110,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":110.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":111,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":111.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":112,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":112.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":113,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":113.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":114,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":114.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":115,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":115.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":116,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":116.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":117,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":117.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":118,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":118.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":119,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":119.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":132,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":132.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":133,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":133.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":134,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":134.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":135,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":135.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":136,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":136.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":137,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":137.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":138,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":324,\"words\":\"a1\"},{\"note\":324,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":324.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":325,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":325.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":326,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":326.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":327,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":327.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":328,\"duration\":2,\"pitch\":-14,\"stem\":-1},{\"note\":336,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":336.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":337,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":337.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":338,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":338.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":339,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":339.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":340,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":340.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":341,\"duration\":1,\"pitch\":-17,\"stem\":-1},{\"note\":366,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":366,\"duration\":3,\"pitch\":-24,\"stem\":-1},{\"note\":369,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":369,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":372,\"duration\":3,\"pitch\":-24,\"stem\":-1},{\"note\":372,\"duration\":3,\"pitch\":-15,\"stem\":1},{\"note\":375,\"duration\":1.5,\"pitch\":-14,\"stem\":1},{\"note\":375,\"duration\":1.5,\"pitch\":-22,\"stem\":-1},{\"note\":376.5,\"duration\":1.5,\"pitch\":-19,\"stem\":-1},{\"note\":376.5,\"duration\":1.5,\"pitch\":-10,\"stem\":1},{\"note\":378,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":378,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":381,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":381,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":384,\"duration\":3,\"pitch\":-7,\"stem\":1},{\"note\":384,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":387,\"duration\":3,\"pitch\":-15,\"stem\":1},{\"note\":387,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":390,\"words\":\"a1\"},{\"note\":390,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":393,\"duration\":3,\"pitch\":-22,\"stem\":1},{\"note\":396,\"duration\":6,\"pitch\":-21,\"stem\":1},{\"note\":402,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":405,\"duration\":3,\"pitch\":-22,\"stem\":1},{\"note\":408,\"duration\":6,\"pitch\":-21,\"stem\":1},{\"note\":420,\"duration\":6,\"pitch\":-26,\"stem\":1},{\"note\":420,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":426,\"duration\":6,\"pitch\":-22,\"stem\":-1},{\"note\":426,\"duration\":6,\"pitch\":-14,\"stem\":-1},{\"note\":444,\"words\":\"a1\"},{\"note\":444,\"duration\":0.75,\"pitch\":-14,\"stem\":-1},{\"note\":444.75,\"duration\":0.25,\"pitch\":-14,\"stem\":-1},{\"note\":445,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":445.5,\"duration\":0.75,\"pitch\":-14,\"stem\":-1},{\"note\":446.25,\"duration\":0.25,\"pitch\":-14,\"stem\":-1},{\"note\":446.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":447,\"duration\":0.75,\"pitch\":-14,\"stem\":-1},{\"note\":447.75,\"duration\":0.25,\"pitch\":-14,\"stem\":-1},{\"note\":448,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":448.5,\"duration\":0.75,\"pitch\":-14,\"stem\":-1},{\"note\":449.25,\"duration\":0.25,\"pitch\":-14,\"stem\":-1},{\"note\":449.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":528,\"words\":\"a1\"},{\"note\":528,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":528.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":529,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":529.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":530,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":530.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":531,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":531.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":532,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":532.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":533,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":533.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":534,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":534.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":535,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":535.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":536,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":536.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":537,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":537.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":538,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":538.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":539,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":539.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":558,\"words\":\"a1\"},{\"note\":558,\"duration\":0.5,\"pitch\":-26,\"stem\":1},{\"note\":558.5,\"duration\":0.5,\"pitch\":-27,\"stem\":1},{\"note\":559,\"duration\":0.5,\"pitch\":-26,\"stem\":1},{\"note\":559.5,\"duration\":0.5,\"pitch\":-22,\"stem\":1},{\"note\":560,\"duration\":1,\"pitch\":-26,\"stem\":1},{\"note\":561,\"duration\":0.5,\"pitch\":-26,\"stem\":1},{\"note\":561.5,\"duration\":0.5,\"pitch\":-27,\"stem\":1},{\"note\":562,\"duration\":0.5,\"pitch\":-26,\"stem\":1},{\"note\":562.5,\"duration\":0.5,\"pitch\":-22,\"stem\":1},{\"note\":563,\"duration\":1,\"pitch\":-26,\"stem\":1},{\"note\":564,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":564.5,\"duration\":0.5,\"pitch\":-26,\"stem\":1},{\"note\":565,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":565.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":566,\"duration\":1,\"pitch\":-24,\"stem\":1},{\"note\":567,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":567.5,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":568,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":568.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":569,\"duration\":1,\"pitch\":-21,\"stem\":-1},{\"note\":576,\"words\":\"a2\"},{\"note\":576,\"duration\":6,\"pitch\":-17,\"stem\":-1},{\"note\":582,\"duration\":6,\"pitch\":-22,\"stem\":1},{\"note\":582,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":588,\"duration\":6,\"pitch\":-21,\"stem\":-1},{\"note\":588,\"duration\":6,\"pitch\":-14,\"stem\":-1},{\"note\":684,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":684,\"duration\":3,\"pitch\":-15,\"stem\":-1},{\"note\":687,\"duration\":3,\"pitch\":-18,\"stem\":-1},{\"note\":687,\"duration\":3,\"pitch\":-15,\"stem\":-1},{\"note\":690,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":690,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":693,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":693,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":696,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":696,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":699,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":699,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":702,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":702,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":705,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":705,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":708,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":709,\"duration\":1,\"pitch\":-17,\"stem\":-1},{\"note\":710,\"duration\":1,\"pitch\":-22,\"stem\":-1},{\"note\":711,\"duration\":1,\"pitch\":-24,\"stem\":1},{\"note\":712,\"duration\":2,\"pitch\":-17,\"stem\":-1},{\"note\":712,\"duration\":2,\"pitch\":-8,\"stem\":-1}]},\"P7\":{\"id\":\"P7\",\"name\":\"Contrabassoon (Optional)\",\"measureCount\":119,\"notes\":[{\"note\":402,\"duration\":3,\"pitch\":-12,\"stem\":1},{\"note\":405,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":408,\"duration\":6,\"pitch\":-9,\"stem\":1},{\"note\":420,\"duration\":6,\"pitch\":-21,\"stem\":1},{\"note\":426,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":582,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":588,\"duration\":6,\"pitch\":-21,\"stem\":1},{\"note\":684,\"duration\":3,\"pitch\":-7,\"stem\":-1},{\"note\":687,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":690,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":693,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":696,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":699,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":702,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":705,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":708,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":709,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":710,\"duration\":1,\"pitch\":-10,\"stem\":-1},{\"note\":711,\"duration\":1,\"pitch\":-12,\"stem\":1},{\"note\":712,\"duration\":2,\"pitch\":-12,\"stem\":1}]},\"P8\":{\"id\":\"P8\",\"name\":\"Horn in F 1, 2\",\"measureCount\":119,\"notes\":[{\"note\":192,\"words\":\"(cue-54)\"},{\"note\":192,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":192,\"duration\":3,\"pitch\":7,\"stem\":1},{\"note\":195,\"duration\":3,\"pitch\":5,\"stem\":1},{\"note\":195,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":198,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":198,\"duration\":3,\"pitch\":4,\"stem\":1},{\"note\":201,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":201,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":204,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":204,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":207,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":207,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":210,\"duration\":3,\"pitch\":5,\"stem\":1},{\"note\":210,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":213,\"duration\":3,\"pitch\":4,\"stem\":1},{\"note\":213,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":216,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":216,\"duration\":3,\"pitch\":7,\"stem\":1},{\"note\":219,\"duration\":3,\"pitch\":5,\"stem\":1},{\"note\":219,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":222,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":222,\"duration\":3,\"pitch\":4,\"stem\":1},{\"note\":225,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":225,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":226.5,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":226.5,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":228,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":228,\"duration\":3,\"pitch\":5,\"stem\":1},{\"note\":231,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":231,\"duration\":3,\"pitch\":5,\"stem\":1},{\"note\":234,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":234,\"duration\":3,\"pitch\":4,\"stem\":1},{\"note\":237,\"duration\":3,\"pitch\":4,\"stem\":1},{\"note\":237,\"duration\":3,\"pitch\":1,\"stem\":1},{\"note\":240,\"duration\":6,\"pitch\":1,\"stem\":1},{\"note\":240,\"duration\":6,\"pitch\":4,\"stem\":1},{\"note\":342,\"words\":\"(cue-24)\"},{\"note\":342,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":345,\"duration\":3,\"pitch\":-8,\"stem\":-1},{\"note\":348,\"duration\":3,\"pitch\":-7,\"stem\":-1},{\"note\":351,\"duration\":1,\"pitch\":-7,\"stem\":-1},{\"note\":352,\"duration\":2,\"pitch\":-5,\"stem\":-1},{\"note\":352,\"duration\":2,\"pitch\":-8,\"stem\":-1},{\"note\":354,\"duration\":3,\"pitch\":-7,\"stem\":-1},{\"note\":354,\"duration\":3,\"pitch\":-3,\"stem\":-1},{\"note\":357,\"duration\":1,\"pitch\":-7,\"stem\":-1},{\"note\":357,\"duration\":1,\"pitch\":-3,\"stem\":-1},{\"note\":358,\"duration\":2,\"pitch\":-7,\"stem\":-1},{\"note\":358,\"duration\":2,\"pitch\":0,\"stem\":-1},{\"note\":360,\"duration\":6,\"pitch\":-8,\"stem\":-1},{\"note\":360,\"duration\":6,\"pitch\":-5,\"stem\":-1},{\"note\":366,\"duration\":3,\"pitch\":7,\"stem\":1},{\"note\":366,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":369,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":369,\"duration\":3,\"pitch\":5,\"stem\":1},{\"note\":372,\"duration\":3,\"pitch\":4,\"stem\":1},{\"note\":372,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":375,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":375,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":376.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":376.5,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":378,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":378,\"duration\":3,\"pitch\":5,\"stem\":1},{\"note\":381,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":381,\"duration\":3,\"pitch\":5,\"stem\":1},{\"note\":384,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":384,\"duration\":3,\"pitch\":5,\"stem\":1},{\"note\":387,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":387,\"duration\":3,\"pitch\":4,\"stem\":1},{\"note\":390,\"words\":\"(solo-43)\"},{\"note\":390,\"words\":\"(sub.)\"},{\"note\":390,\"duration\":1.5,\"pitch\":-15,\"stem\":1},{\"note\":390,\"words\":\"(Optional Hrn)\"},{\"note\":391.5,\"duration\":1.5,\"pitch\":-14,\"stem\":1},{\"note\":393,\"duration\":1.5,\"pitch\":-7,\"stem\":-1},{\"note\":394.5,\"duration\":1.5,\"pitch\":-12,\"stem\":-1},{\"note\":396,\"duration\":1.5,\"pitch\":-10,\"stem\":-1},{\"note\":397.5,\"duration\":1.5,\"pitch\":-8,\"stem\":-1},{\"note\":399,\"duration\":1.5,\"pitch\":-7,\"stem\":-1},{\"note\":400.5,\"duration\":1.5,\"pitch\":-5,\"stem\":-1},{\"note\":402,\"words\":\"(solo)\"},{\"note\":402,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":403.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":405,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":406.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":408,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":409.5,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":411,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":412.5,\"duration\":1.5,\"pitch\":7,\"stem\":1},{\"note\":414,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":415.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":416,\"duration\":1,\"pitch\":9,\"stem\":1},{\"note\":417,\"duration\":1.5,\"pitch\":10,\"stem\":1},{\"note\":418.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":419,\"duration\":1,\"pitch\":4,\"stem\":1},{\"note\":420,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":423,\"duration\":1,\"pitch\":-3,\"stem\":1},{\"note\":424,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":425,\"duration\":1,\"pitch\":4,\"stem\":1},{\"note\":426,\"duration\":6,\"pitch\":5,\"stem\":1},{\"note\":432,\"duration\":1,\"pitch\":5,\"stem\":1},{\"note\":558,\"words\":\"(cue-150)\"},{\"note\":558,\"duration\":6,\"pitch\":5,\"stem\":1},{\"note\":558,\"duration\":6,\"pitch\":0,\"stem\":1},{\"note\":564,\"duration\":6,\"pitch\":2,\"stem\":1},{\"note\":564,\"duration\":6,\"pitch\":5,\"stem\":1},{\"note\":570,\"duration\":6,\"pitch\":2,\"stem\":1},{\"note\":576,\"duration\":6,\"pitch\":2,\"stem\":1},{\"note\":582,\"duration\":6,\"pitch\":2,\"stem\":1},{\"note\":582,\"duration\":6,\"pitch\":5,\"stem\":1},{\"note\":588,\"duration\":6,\"pitch\":5,\"stem\":1},{\"note\":588,\"duration\":6,\"pitch\":2,\"stem\":1},{\"note\":594,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":595.5,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":597,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":598.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":600,\"duration\":6,\"pitch\":9,\"stem\":-1},{\"note\":606,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":607.5,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":609,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":610.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":612,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":613.5,\"duration\":1.5,\"pitch\":7,\"stem\":1},{\"note\":615,\"duration\":3,\"pitch\":7,\"stem\":1},{\"note\":618,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":619.5,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":621,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":622.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":624,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":625.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":627,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":630,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":631.5,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":633,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":634.5,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":636,\"duration\":6,\"pitch\":4,\"stem\":1},{\"note\":642,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":643.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":645,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":646.5,\"duration\":1.5,\"pitch\":7,\"stem\":1},{\"note\":648,\"duration\":1.5,\"pitch\":7,\"stem\":1},{\"note\":649.5,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":651,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":652.5,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":654,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":655.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":657,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":658.5,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":660,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":661.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":663,\"duration\":3,\"pitch\":7,\"stem\":1},{\"note\":666,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":667.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":669,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":670.5,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":672,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":673.5,\"duration\":1.5,\"pitch\":7,\"stem\":1},{\"note\":675,\"duration\":1.5,\"pitch\":7,\"stem\":1},{\"note\":676.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":678,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":679.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":681,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":682.5,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":684,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":685.5,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":685.5,\"duration\":1.5,\"pitch\":7,\"stem\":1},{\"note\":687,\"duration\":3,\"pitch\":4,\"stem\":1},{\"note\":687,\"duration\":3,\"pitch\":9,\"stem\":1},{\"note\":690,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":691.5,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":693,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":694.5,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":696,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":697.5,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":699,\"duration\":1,\"pitch\":-3,\"stem\":1},{\"note\":700,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":701,\"duration\":1,\"pitch\":4,\"stem\":1},{\"note\":702,\"duration\":3,\"pitch\":5,\"stem\":1},{\"note\":705,\"duration\":1,\"pitch\":5,\"stem\":1},{\"note\":706,\"duration\":1,\"pitch\":4,\"stem\":1},{\"note\":707,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":708,\"words\":\"(cue)\"},{\"note\":708,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":709,\"duration\":1,\"pitch\":5,\"stem\":1},{\"note\":710,\"duration\":1,\"pitch\":9,\"stem\":1},{\"note\":711,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":712,\"duration\":2,\"pitch\":11,\"stem\":-1}]},\"P9\":{\"id\":\"P9\",\"name\":\"Horn in F 3 (&amp; 4)\",\"measureCount\":119,\"notes\":[{\"note\":192,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":195,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":198,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":201,\"duration\":3,\"pitch\":-7,\"stem\":1},{\"note\":204,\"duration\":3,\"pitch\":-7,\"stem\":1},{\"note\":207,\"duration\":3,\"pitch\":-7,\"stem\":1},{\"note\":210,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":213,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":216,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":219,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":222,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":225,\"duration\":1.5,\"pitch\":-7,\"stem\":1},{\"note\":226.5,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":228,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":231,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":234,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":237,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":240,\"duration\":6,\"pitch\":-3,\"stem\":1},{\"note\":342,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":345,\"duration\":3,\"pitch\":-11,\"stem\":-1},{\"note\":348,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":351,\"duration\":1,\"pitch\":-10,\"stem\":-1},{\"note\":352,\"duration\":2,\"pitch\":-12,\"stem\":-1},{\"note\":354,\"duration\":3,\"pitch\":-12,\"stem\":-1},{\"note\":357,\"duration\":1,\"pitch\":-12,\"stem\":-1},{\"note\":358,\"duration\":2,\"pitch\":-12,\"stem\":-1},{\"note\":360,\"duration\":6,\"pitch\":-12,\"stem\":-1},{\"note\":366,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":369,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":372,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":375,\"duration\":1.5,\"pitch\":-7,\"stem\":1},{\"note\":376.5,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":378,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":381,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":384,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":387,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":402,\"words\":\"(solo)\"},{\"note\":402,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":403.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":405,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":406.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":408,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":409.5,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":411,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":412.5,\"duration\":1.5,\"pitch\":7,\"stem\":1},{\"note\":414,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":415.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":416,\"duration\":1,\"pitch\":9,\"stem\":1},{\"note\":417,\"duration\":1.5,\"pitch\":10,\"stem\":1},{\"note\":418.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":419,\"duration\":1,\"pitch\":4,\"stem\":1},{\"note\":420,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":423,\"duration\":1,\"pitch\":-3,\"stem\":1},{\"note\":424,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":425,\"duration\":1,\"pitch\":4,\"stem\":1},{\"note\":426,\"duration\":6,\"pitch\":5,\"stem\":1},{\"note\":432,\"duration\":1,\"pitch\":5,\"stem\":1},{\"note\":558,\"duration\":6,\"pitch\":-3,\"stem\":1},{\"note\":564,\"duration\":6,\"pitch\":-2,\"stem\":1},{\"note\":582,\"duration\":6,\"pitch\":-3,\"stem\":1},{\"note\":588,\"duration\":6,\"pitch\":-2,\"stem\":1},{\"note\":594,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":595.5,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":597,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":598.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":600,\"duration\":6,\"pitch\":9,\"stem\":-1},{\"note\":606,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":607.5,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":609,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":610.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":612,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":613.5,\"duration\":1.5,\"pitch\":7,\"stem\":1},{\"note\":615,\"duration\":3,\"pitch\":7,\"stem\":1},{\"note\":618,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":619.5,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":621,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":622.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":624,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":625.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":627,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":630,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":631.5,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":633,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":634.5,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":636,\"duration\":6,\"pitch\":4,\"stem\":1},{\"note\":642,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":643.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":645,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":646.5,\"duration\":1.5,\"pitch\":7,\"stem\":1},{\"note\":648,\"duration\":1.5,\"pitch\":7,\"stem\":1},{\"note\":649.5,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":651,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":652.5,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":654,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":655.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":657,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":658.5,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":660,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":661.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":663,\"duration\":3,\"pitch\":7,\"stem\":1},{\"note\":666,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":667.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":669,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":670.5,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":672,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":673.5,\"duration\":1.5,\"pitch\":7,\"stem\":1},{\"note\":675,\"duration\":1.5,\"pitch\":7,\"stem\":1},{\"note\":676.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":678,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":679.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":681,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":682.5,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":684,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":685.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":687,\"duration\":3,\"pitch\":1,\"stem\":1},{\"note\":690,\"duration\":1.5,\"pitch\":9,\"stem\":1},{\"note\":691.5,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":693,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":694.5,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":696,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":697.5,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":699,\"duration\":1,\"pitch\":-3,\"stem\":1},{\"note\":700,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":701,\"duration\":1,\"pitch\":4,\"stem\":1},{\"note\":702,\"duration\":3,\"pitch\":5,\"stem\":1},{\"note\":705,\"duration\":1,\"pitch\":5,\"stem\":1},{\"note\":706,\"duration\":1,\"pitch\":4,\"stem\":1},{\"note\":707,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":708,\"duration\":1,\"pitch\":-3,\"stem\":1},{\"note\":709,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":710,\"duration\":1,\"pitch\":5,\"stem\":1},{\"note\":711,\"duration\":1,\"pitch\":-1,\"stem\":1},{\"note\":712,\"duration\":2,\"pitch\":7,\"stem\":1}]},\"P10\":{\"id\":\"P10\",\"name\":\"Trumpet in Bb 1, 2\",\"measureCount\":119,\"notes\":[{\"note\":234,\"words\":\"(cue-12-cresc)\"},{\"note\":234,\"duration\":6,\"pitch\":11,\"stem\":1},{\"note\":234,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":237,\"duration\":3,\"pitch\":8,\"stem\":-1},{\"note\":240,\"duration\":6,\"pitch\":11,\"stem\":1},{\"note\":240,\"duration\":6,\"pitch\":8,\"stem\":-1},{\"note\":366,\"words\":\"(solo-24)\"},{\"note\":366,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":367.5,\"duration\":1.5,\"pitch\":4,\"stem\":-1},{\"note\":369,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":370.5,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":372,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":373.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":375,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":376.5,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":378,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":379.5,\"duration\":1.5,\"pitch\":4,\"stem\":-1},{\"note\":381,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":382.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":384,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":385.5,\"duration\":1.5,\"pitch\":4,\"stem\":-1},{\"note\":387,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":414,\"duration\":6,\"pitch\":9,\"stem\":-1},{\"note\":414,\"duration\":6,\"pitch\":12,\"stem\":-1},{\"note\":420,\"duration\":6,\"pitch\":12,\"stem\":-1},{\"note\":420,\"duration\":6,\"pitch\":9,\"stem\":-1},{\"note\":426,\"duration\":6,\"pitch\":12,\"stem\":-1},{\"note\":426,\"duration\":6,\"pitch\":9,\"stem\":-1},{\"note\":587,\"words\":\"(cue-7)\"},{\"note\":587,\"words\":\"a2\"},{\"note\":587,\"duration\":1,\"pitch\":4,\"stem\":-1},{\"note\":588,\"duration\":6,\"pitch\":12,\"stem\":-1},{\"note\":642,\"words\":\"(cue-66)\"},{\"note\":642,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":643.5,\"duration\":1.5,\"pitch\":4,\"stem\":-1},{\"note\":645,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":646.5,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":648,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":649.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":651,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":652.5,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":654,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":655.5,\"duration\":1.5,\"pitch\":4,\"stem\":-1},{\"note\":657,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":658.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":660,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":661.5,\"duration\":1.5,\"pitch\":4,\"stem\":-1},{\"note\":663,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":666,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":667.5,\"duration\":1.5,\"pitch\":4,\"stem\":-1},{\"note\":669,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":670.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":672,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":673.5,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":675,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":676.5,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":678,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":679.5,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":681,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":682.5,\"duration\":1.5,\"pitch\":4,\"stem\":-1},{\"note\":684,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":685.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":687,\"duration\":3,\"pitch\":4,\"stem\":-1},{\"note\":690,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":691.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":693,\"duration\":1.5,\"pitch\":-1,\"stem\":1},{\"note\":694.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":696,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":697.5,\"duration\":1.5,\"pitch\":-1,\"stem\":1},{\"note\":699,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":702,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":703.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":705,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":706.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":708,\"duration\":3,\"pitch\":12,\"stem\":-1},{\"note\":708,\"duration\":3,\"pitch\":9,\"stem\":-1},{\"note\":711,\"words\":\"(cue)\"},{\"note\":711,\"duration\":0.3333,\"pitch\":9,\"stem\":-1},{\"note\":711,\"duration\":0.3333,\"pitch\":14,\"stem\":-1},{\"note\":711.3333,\"duration\":0.3333,\"pitch\":9,\"stem\":-1},{\"note\":711.3333,\"duration\":0.3333,\"pitch\":14,\"stem\":-1},{\"note\":711.6667,\"duration\":0.3333,\"pitch\":9,\"stem\":-1},{\"note\":711.6667,\"duration\":0.3333,\"pitch\":14,\"stem\":-1},{\"note\":712,\"duration\":0.3333,\"pitch\":9,\"stem\":-1},{\"note\":712,\"duration\":0.3333,\"pitch\":14,\"stem\":-1},{\"note\":712.3333,\"duration\":0.3333,\"pitch\":9,\"stem\":-1},{\"note\":712.3333,\"duration\":0.3333,\"pitch\":14,\"stem\":-1},{\"note\":712.6667,\"duration\":0.3333,\"pitch\":9,\"stem\":-1},{\"note\":712.6667,\"duration\":0.3333,\"pitch\":14,\"stem\":-1},{\"note\":713,\"duration\":0.3333,\"pitch\":9,\"stem\":-1},{\"note\":713,\"duration\":0.3333,\"pitch\":14,\"stem\":-1},{\"note\":713.3333,\"duration\":0.3333,\"pitch\":9,\"stem\":-1},{\"note\":713.3333,\"duration\":0.3333,\"pitch\":14,\"stem\":-1},{\"note\":713.6667,\"duration\":0.3333,\"pitch\":9,\"stem\":-1},{\"note\":713.6667,\"duration\":0.3333,\"pitch\":14,\"stem\":-1}]},\"P11\":{\"id\":\"P11\",\"name\":\"Trumpet in Bb 3\",\"measureCount\":119,\"notes\":[{\"note\":234,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":237,\"duration\":3,\"pitch\":4,\"stem\":-1},{\"note\":240,\"duration\":6,\"pitch\":4,\"stem\":-1},{\"note\":414,\"duration\":3,\"pitch\":4,\"stem\":-1},{\"note\":417,\"duration\":3,\"pitch\":5,\"stem\":-1},{\"note\":420,\"duration\":6,\"pitch\":5,\"stem\":-1},{\"note\":426,\"duration\":6,\"pitch\":4,\"stem\":-1},{\"note\":587,\"duration\":1,\"pitch\":4,\"stem\":-1},{\"note\":588,\"duration\":6,\"pitch\":12,\"stem\":-1},{\"note\":642,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":643.5,\"duration\":1.5,\"pitch\":4,\"stem\":-1},{\"note\":645,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":646.5,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":648,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":649.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":651,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":652.5,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":654,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":655.5,\"duration\":1.5,\"pitch\":4,\"stem\":-1},{\"note\":657,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":658.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":660,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":661.5,\"duration\":1.5,\"pitch\":4,\"stem\":-1},{\"note\":663,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":666,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":667.5,\"duration\":1.5,\"pitch\":4,\"stem\":-1},{\"note\":669,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":670.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":672,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":673.5,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":675,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":676.5,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":678,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":679.5,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":681,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":682.5,\"duration\":1.5,\"pitch\":4,\"stem\":-1},{\"note\":684,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":685.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":687,\"duration\":3,\"pitch\":4,\"stem\":-1},{\"note\":690,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":691.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":693,\"duration\":1.5,\"pitch\":-1,\"stem\":1},{\"note\":694.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":696,\"duration\":1.5,\"pitch\":5,\"stem\":1},{\"note\":697.5,\"duration\":1.5,\"pitch\":-1,\"stem\":1},{\"note\":699,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":702,\"duration\":1.5,\"pitch\":4,\"stem\":1},{\"note\":703.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":705,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":706.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":708,\"duration\":3,\"pitch\":4,\"stem\":-1},{\"note\":711,\"duration\":0.3333,\"pitch\":6,\"stem\":-1},{\"note\":711.3333,\"duration\":0.3333,\"pitch\":6,\"stem\":-1},{\"note\":711.6667,\"duration\":0.3333,\"pitch\":6,\"stem\":-1},{\"note\":712,\"duration\":0.3333,\"pitch\":6,\"stem\":-1},{\"note\":712.3333,\"duration\":0.3333,\"pitch\":6,\"stem\":-1},{\"note\":712.6667,\"duration\":0.3333,\"pitch\":6,\"stem\":-1},{\"note\":713,\"duration\":0.3333,\"pitch\":6,\"stem\":-1},{\"note\":713.3333,\"duration\":0.3333,\"pitch\":6,\"stem\":-1},{\"note\":713.6667,\"duration\":0.3333,\"pitch\":6,\"stem\":-1}]},\"P12\":{\"id\":\"P12\",\"name\":\"Trombone\",\"measureCount\":119,\"notes\":[{\"note\":234,\"duration\":3,\"pitch\":-15,\"stem\":-1},{\"note\":234,\"duration\":3,\"pitch\":-7,\"stem\":-1},{\"note\":237,\"duration\":3,\"pitch\":-6,\"stem\":-1},{\"note\":237,\"duration\":3,\"pitch\":-15,\"stem\":-1},{\"note\":240,\"duration\":6,\"pitch\":-15,\"stem\":-1},{\"note\":240,\"duration\":6,\"pitch\":-6,\"stem\":-1},{\"note\":342,\"words\":\"(cue-90)\"},{\"note\":342,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":342,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":345,\"duration\":3,\"pitch\":-18,\"stem\":1},{\"note\":345,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":348,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":348,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":351,\"duration\":1,\"pitch\":-22,\"stem\":-1},{\"note\":351,\"duration\":1,\"pitch\":-17,\"stem\":1},{\"note\":352,\"duration\":2,\"pitch\":-27,\"stem\":-1},{\"note\":352,\"duration\":2,\"pitch\":-19,\"stem\":1},{\"note\":354,\"duration\":3,\"pitch\":-26,\"stem\":-1},{\"note\":354,\"duration\":3,\"pitch\":-19,\"stem\":1},{\"note\":357,\"duration\":1,\"pitch\":-19,\"stem\":1},{\"note\":357,\"duration\":1,\"pitch\":-26,\"stem\":-1},{\"note\":358,\"duration\":2,\"pitch\":-14,\"stem\":1},{\"note\":358,\"duration\":2,\"pitch\":-22,\"stem\":-1},{\"note\":360,\"duration\":6,\"pitch\":-15,\"stem\":1},{\"note\":360,\"duration\":6,\"pitch\":-24,\"stem\":-1},{\"note\":366,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":366,\"duration\":3,\"pitch\":-24,\"stem\":-1},{\"note\":369,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":369,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":372,\"duration\":3,\"pitch\":-24,\"stem\":-1},{\"note\":372,\"duration\":3,\"pitch\":-15,\"stem\":1},{\"note\":375,\"duration\":1.5,\"pitch\":-14,\"stem\":1},{\"note\":375,\"duration\":1.5,\"pitch\":-22,\"stem\":-1},{\"note\":376.5,\"duration\":1.5,\"pitch\":-19,\"stem\":-1},{\"note\":376.5,\"duration\":1.5,\"pitch\":-10,\"stem\":1},{\"note\":378,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":378,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":381,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":381,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":384,\"duration\":3,\"pitch\":-7,\"stem\":1},{\"note\":384,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":387,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":387,\"duration\":3,\"pitch\":-15,\"stem\":1},{\"note\":390,\"words\":\"a1\"},{\"note\":390,\"words\":\"(sub.)\"},{\"note\":390,\"duration\":1.5,\"pitch\":-22,\"stem\":1},{\"note\":391.5,\"duration\":1.5,\"pitch\":-21,\"stem\":1},{\"note\":393,\"duration\":1.5,\"pitch\":-14,\"stem\":-1},{\"note\":394.5,\"duration\":1.5,\"pitch\":-19,\"stem\":-1},{\"note\":396,\"duration\":1.5,\"pitch\":-17,\"stem\":-1},{\"note\":397.5,\"duration\":1.5,\"pitch\":-15,\"stem\":-1},{\"note\":399,\"duration\":1.5,\"pitch\":-14,\"stem\":-1},{\"note\":400.5,\"duration\":1.5,\"pitch\":-12,\"stem\":-1},{\"note\":402,\"words\":\"a2\"},{\"note\":402,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":402,\"words\":\"(solo-30)\"},{\"note\":405,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":408,\"duration\":1.5,\"pitch\":-9,\"stem\":1},{\"note\":408,\"duration\":6,\"pitch\":-14,\"stem\":-1},{\"note\":409.5,\"duration\":1.5,\"pitch\":-7,\"stem\":1},{\"note\":411,\"duration\":1.5,\"pitch\":-5,\"stem\":1},{\"note\":412.5,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":417,\"duration\":2,\"pitch\":-9,\"stem\":-1},{\"note\":419,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":420,\"duration\":6,\"pitch\":-26,\"stem\":1},{\"note\":420,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":426,\"duration\":6,\"pitch\":-22,\"stem\":-1},{\"note\":426,\"duration\":6,\"pitch\":-14,\"stem\":-1},{\"note\":576,\"words\":\"a2\"},{\"note\":576,\"words\":\"(cue-18)\"},{\"note\":576,\"duration\":6,\"pitch\":-17,\"stem\":-1},{\"note\":582,\"duration\":6,\"pitch\":-22,\"stem\":1},{\"note\":582,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":588,\"duration\":6,\"pitch\":-21,\"stem\":-1},{\"note\":588,\"duration\":6,\"pitch\":-14,\"stem\":-1},{\"note\":684,\"words\":\"(cue-60)\"},{\"note\":684,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":684,\"duration\":3,\"pitch\":-15,\"stem\":-1},{\"note\":687,\"duration\":3,\"pitch\":-15,\"stem\":-1},{\"note\":687,\"duration\":3,\"pitch\":-18,\"stem\":-1},{\"note\":690,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":690,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":693,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":693,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":696,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":696,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":699,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":699,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":702,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":702,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":705,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":705,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":708,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":709,\"duration\":1,\"pitch\":-17,\"stem\":-1},{\"note\":710,\"duration\":1,\"pitch\":-22,\"stem\":-1},{\"note\":711,\"duration\":1,\"pitch\":-24,\"stem\":1},{\"note\":712,\"duration\":2,\"pitch\":-17,\"stem\":-1},{\"note\":712,\"duration\":2,\"pitch\":-8,\"stem\":-1}]},\"P13\":{\"id\":\"P13\",\"name\":\"Bass Trombone\",\"measureCount\":119,\"notes\":[{\"note\":234,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":237,\"duration\":3,\"pitch\":-22,\"stem\":1},{\"note\":240,\"duration\":6,\"pitch\":-22,\"stem\":1},{\"note\":342,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":345,\"duration\":3,\"pitch\":-22,\"stem\":1},{\"note\":348,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":351,\"duration\":1,\"pitch\":-29,\"stem\":1},{\"note\":352,\"duration\":2,\"pitch\":-27,\"stem\":1},{\"note\":354,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":357,\"duration\":1,\"pitch\":-26,\"stem\":1},{\"note\":358,\"duration\":2,\"pitch\":-26,\"stem\":1},{\"note\":360,\"duration\":6,\"pitch\":-31,\"stem\":1},{\"note\":366,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":369,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":372,\"duration\":3,\"pitch\":-31,\"stem\":1},{\"note\":375,\"duration\":1.5,\"pitch\":-29,\"stem\":1},{\"note\":376.5,\"duration\":1.5,\"pitch\":-31,\"stem\":1},{\"note\":378,\"duration\":3,\"pitch\":-33,\"stem\":1},{\"note\":381,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":384,\"duration\":3,\"pitch\":-22,\"stem\":1},{\"note\":387,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":402,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":405,\"duration\":3,\"pitch\":-22,\"stem\":1},{\"note\":408,\"duration\":6,\"pitch\":-21,\"stem\":1},{\"note\":420,\"duration\":6,\"pitch\":-33,\"stem\":1},{\"note\":426,\"duration\":6,\"pitch\":-29,\"stem\":1},{\"note\":576,\"duration\":6,\"pitch\":-17,\"stem\":-1},{\"note\":582,\"duration\":6,\"pitch\":-29,\"stem\":1},{\"note\":588,\"duration\":6,\"pitch\":-33,\"stem\":1},{\"note\":684,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":687,\"duration\":3,\"pitch\":-22,\"stem\":1},{\"note\":690,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":693,\"duration\":3,\"pitch\":-22,\"stem\":1},{\"note\":696,\"duration\":3,\"pitch\":-21,\"stem\":1},{\"note\":699,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":702,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":705,\"duration\":3,\"pitch\":-21,\"stem\":1},{\"note\":708,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":709,\"duration\":1,\"pitch\":-17,\"stem\":-1},{\"note\":710,\"duration\":1,\"pitch\":-22,\"stem\":-1},{\"note\":711,\"duration\":1,\"pitch\":-24,\"stem\":1},{\"note\":712,\"duration\":2,\"pitch\":-24,\"stem\":1}]},\"P14\":{\"id\":\"P14\",\"name\":\"Cimbasso (sub. Tuba or C.B Trombone)\",\"measureCount\":119,\"notes\":[{\"note\":234,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":237,\"duration\":3,\"pitch\":-32,\"stem\":1},{\"note\":240,\"duration\":6,\"pitch\":-32,\"stem\":1},{\"note\":402,\"duration\":3,\"pitch\":-34,\"stem\":1},{\"note\":405,\"duration\":3,\"pitch\":-32,\"stem\":1},{\"note\":408,\"duration\":6,\"pitch\":-31,\"stem\":1},{\"note\":420,\"duration\":6,\"pitch\":-43,\"stem\":1},{\"note\":426,\"duration\":6,\"pitch\":-39,\"stem\":1},{\"note\":582,\"duration\":6,\"pitch\":-27,\"stem\":1},{\"note\":588,\"duration\":6,\"pitch\":-43,\"stem\":1},{\"note\":684,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":687,\"duration\":3,\"pitch\":-32,\"stem\":1},{\"note\":690,\"duration\":3,\"pitch\":-36,\"stem\":1},{\"note\":693,\"duration\":3,\"pitch\":-32,\"stem\":1},{\"note\":696,\"duration\":3,\"pitch\":-31,\"stem\":1},{\"note\":699,\"duration\":3,\"pitch\":-27,\"stem\":1},{\"note\":702,\"duration\":3,\"pitch\":-27,\"stem\":1},{\"note\":705,\"duration\":3,\"pitch\":-31,\"stem\":1},{\"note\":708,\"duration\":1,\"pitch\":-24,\"stem\":1},{\"note\":709,\"duration\":1,\"pitch\":-27,\"stem\":1},{\"note\":710,\"duration\":1,\"pitch\":-32,\"stem\":1},{\"note\":711,\"duration\":1,\"pitch\":-34,\"stem\":1},{\"note\":712,\"duration\":2,\"pitch\":-34,\"stem\":1}]},\"P15\":{\"id\":\"P15\",\"name\":\"Timpani\",\"measureCount\":119,\"notes\":[{\"note\":116,\"words\":\"(cue-6-cresc)\"},{\"note\":116,\"duration\":4,\"pitch\":-29,\"stem\":1,\"isTremelo\":true},{\"note\":120,\"duration\":2,\"pitch\":-29,\"stem\":1},{\"note\":190,\"duration\":2,\"pitch\":-24,\"stem\":1,\"isTremelo\":true},{\"note\":192,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":214,\"words\":\"(cue)\"},{\"note\":214,\"duration\":2,\"pitch\":-24,\"stem\":1,\"isTremelo\":true},{\"note\":216,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":234,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":237,\"duration\":3,\"pitch\":-22,\"stem\":1,\"isTremelo\":true},{\"note\":240,\"duration\":6,\"pitch\":-22,\"stem\":1,\"isTremelo\":true},{\"note\":340,\"words\":\"(cue-5-cresc)\"},{\"note\":340,\"duration\":2,\"pitch\":-29,\"stem\":1,\"isTremelo\":true},{\"note\":342,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":352,\"duration\":2,\"pitch\":-31,\"stem\":1},{\"note\":352,\"words\":\"(cue-11)\"},{\"note\":354,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":358,\"duration\":2,\"pitch\":-26,\"stem\":1},{\"note\":360,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":386,\"duration\":1,\"pitch\":-26,\"stem\":1},{\"note\":386,\"words\":\"(cue-4)\"},{\"note\":387,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":417,\"words\":\"(cue-18)\"},{\"note\":417,\"duration\":3,\"pitch\":-21,\"stem\":1,\"isTremelo\":true},{\"note\":420,\"duration\":3,\"pitch\":-21,\"stem\":1},{\"note\":426,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":429,\"duration\":1.5,\"pitch\":-29,\"stem\":1},{\"note\":430.5,\"duration\":0.5,\"pitch\":-29,\"stem\":1},{\"note\":431,\"duration\":1,\"pitch\":-29,\"stem\":1},{\"note\":432,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":486,\"words\":\"(cue-11)\"},{\"note\":486,\"duration\":0.6667,\"pitch\":-21,\"stem\":1},{\"note\":486.6667,\"duration\":0.6667,\"pitch\":-21,\"stem\":1},{\"note\":487.3333,\"duration\":0.6667,\"pitch\":-21,\"stem\":1},{\"note\":488,\"duration\":0.6667,\"pitch\":-21,\"stem\":1},{\"note\":488.6667,\"duration\":0.6667,\"pitch\":-21,\"stem\":1},{\"note\":489.3333,\"duration\":0.6667,\"pitch\":-21,\"stem\":1},{\"note\":490,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":491,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":492,\"duration\":0.75,\"pitch\":-21,\"stem\":1},{\"note\":492.75,\"duration\":0.25,\"pitch\":-21,\"stem\":1},{\"note\":493,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":493.5,\"duration\":0.75,\"pitch\":-21,\"stem\":1},{\"note\":494.25,\"duration\":0.25,\"pitch\":-21,\"stem\":1},{\"note\":494.5,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":495,\"duration\":0.75,\"pitch\":-21,\"stem\":1},{\"note\":495.75,\"duration\":0.25,\"pitch\":-21,\"stem\":1},{\"note\":496,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":588,\"words\":\"(cue-9-cresc)\"},{\"note\":588,\"duration\":6,\"pitch\":-21,\"stem\":1,\"isTremelo\":true},{\"note\":594,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":606,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":616,\"duration\":2,\"pitch\":-19,\"stem\":-1,\"isTremelo\":true},{\"note\":618,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":630,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":636,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":639,\"duration\":3,\"pitch\":-19,\"stem\":-1,\"isTremelo\":true},{\"note\":642,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":663,\"duration\":3,\"pitch\":-19,\"stem\":-1,\"isTremelo\":true},{\"note\":666,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":678,\"duration\":3,\"pitch\":-21,\"stem\":1},{\"note\":681,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":687,\"duration\":3,\"pitch\":-22,\"stem\":1,\"isTremelo\":true},{\"note\":690,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":699,\"duration\":3,\"pitch\":-17,\"stem\":-1,\"isTremelo\":true},{\"note\":702,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":708,\"duration\":1,\"pitch\":-29,\"stem\":1},{\"note\":709,\"duration\":1,\"pitch\":-22,\"stem\":1},{\"note\":710,\"duration\":1,\"pitch\":-29,\"stem\":1},{\"note\":711,\"duration\":2,\"pitch\":-24,\"stem\":1,\"isTremelo\":true},{\"note\":713,\"duration\":1,\"pitch\":-24,\"stem\":1}]},\"P16\":{\"id\":\"P16\",\"name\":\"Cymbals\",\"measureCount\":119,\"notes\":[{\"note\":54,\"words\":\"(cue-7-cresc)\"},{\"note\":54,\"duration\":6,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":60,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":189,\"words\":\"(cue-4-cresc)\"},{\"note\":189,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":192,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":213,\"words\":\"(cue-4-cresc)\"},{\"note\":213,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":216,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":234,\"words\":\"(cue-7-cresc)\"},{\"note\":234,\"duration\":6,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":240,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":414,\"duration\":3,\"pitch\":null,\"stem\":-1},{\"note\":414,\"words\":\"[CRASH]\"},{\"note\":417,\"words\":\"[SUS. CYM]\"},{\"note\":417,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":420,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":429,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":432,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":564,\"duration\":6,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":570,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":588,\"duration\":6,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":594,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":615,\"words\":\"(cue)\"},{\"note\":615,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":618,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":639,\"words\":\"(cue)\"},{\"note\":639,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":642,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":663,\"words\":\"(cue)\"},{\"note\":663,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":666,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":687,\"words\":\"(cue)\"},{\"note\":687,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":690,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":699,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":702,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":708,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":711,\"duration\":2,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":713,\"duration\":1,\"pitch\":null,\"stem\":-1}]},\"P17\":{\"id\":\"P17\",\"name\":\"Tamtam\",\"measureCount\":119,\"notes\":[{\"note\":27,\"words\":\"(cue)\"},{\"note\":27,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":30,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":54,\"duration\":6,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":60,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":189,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":192,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":213,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":216,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":234,\"duration\":6,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":240,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":267,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":270,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":303,\"words\":\"(cue-4)\"},{\"note\":303,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":306,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":339,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":342,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":417,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":420,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":591,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":594,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":615,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":618,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":639,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":642,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":663,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":666,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":687,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":690,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":699,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":702,\"duration\":1,\"pitch\":null,\"stem\":-1},{\"note\":708,\"duration\":3,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":711,\"duration\":2,\"pitch\":null,\"stem\":-1,\"isTremelo\":true},{\"note\":713,\"duration\":1,\"pitch\":null,\"stem\":-1}]},\"P18\":{\"id\":\"P18\",\"name\":\"Electric Piano (Pre-Record)\",\"measureCount\":119,\"notes\":[{\"note\":21,\"words\":\"(cue-171)\"},{\"note\":21,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":21.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":22,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":22.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":23,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":23.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":24,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":24.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":25,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":25.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":26,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":26.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":27,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":27.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":28,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":28.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":29,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":29.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":30,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":30.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":31,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":31.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":32,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":32.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":33,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":33.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":34,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":34.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":35,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":35.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":36,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":36.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":37,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":37.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":38,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":38.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":39,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":39.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":40,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":40.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":41,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":41.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":42,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":42.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":43,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":43.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":44,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":44.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":45,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":45.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":46,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":46.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":47,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":47.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":48,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":48.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":49,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":49.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":50,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":50.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":51,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":51.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":52,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":52.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":53,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":53.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":54,\"words\":\"(sim.)\"},{\"note\":54,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":54.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":55,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":55.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":56,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":56.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":57,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":57.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":58,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":58.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":59,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":59.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":60,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":60.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":61,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":61.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":62,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":62.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":63,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":63.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":64,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":64.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":65,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":65.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":66,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":66.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":67,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":67.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":68,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":68.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":69,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":69.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":70,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":70.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":71,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":71.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":72,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":72.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":73,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":73.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":74,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":74.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":75,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":75.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":76,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":76.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":77,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":77.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":78,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":78.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":79,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":79.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":80,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":80.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":81,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":81.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":82,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":82.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":83,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":83.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":84,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":84.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":85,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":85.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":86,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":86.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":87,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":87.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":88,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":88.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":89,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":89.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":90,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":90.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":91,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":91.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":92,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":92.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":93,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":93.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":94,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":94.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":95,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":95.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":96,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":96.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":97,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":97.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":98,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":98.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":99,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":99.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":100,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":100.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":101,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":101.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":102,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":102,\"words\":\"(sim.)\"},{\"note\":102.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":103,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":103.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":104,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":104.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":105,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":105.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":106,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":106.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":107,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":107.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":108,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":108.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":109,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":109.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":110,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":110.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":111,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":111.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":112,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":112.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":113,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":113.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":114,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":114.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":115,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":115.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":116,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":116.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":117,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":117.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":118,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":118.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":119,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":119.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":120,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":120.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":121,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":121.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":122,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":122.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":123,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":123.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":124,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":124.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":125,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":125.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":126,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":126.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":127,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":127.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":128,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":128.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":129,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":129.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":130,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":130.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":131,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":131.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":132,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":132.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":133,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":133.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":134,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":134.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":135,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":135.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":136,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":136.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":137,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":137.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":138,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":138.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":139,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":139.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":140,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":140.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":141,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":141.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":142,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":142.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":143,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":143.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":144,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":144.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":145,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":145.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":146,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":146.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":147,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":147.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":148,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":148.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":149,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":149.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":150,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":150.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":151,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":151.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":152,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":152.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":153,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":153.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":154,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":154.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":155,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":155.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":156,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":156.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":157,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":157.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":158,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":158.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":159,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":159.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":160,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":160.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":161,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":161.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":162,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":162.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":163,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":163.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":164,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":164.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":165,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":165.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":166,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":166.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":167,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":167.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":168,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":168.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":169,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":169.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":170,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":170.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":171,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":171.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":172,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":172.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":173,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":173.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":174,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":174.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":175,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":175.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":176,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":176.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":177,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":177.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":178,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":178.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":179,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":179.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":180,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":180.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":181,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":181.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":182,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":182.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":183,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":183.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":184,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":184.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":185,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":185.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":186,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":186.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":187,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":187.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":188,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":188.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":189,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":189.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":190,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":190.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":191,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":191.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":234,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":234.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":235,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":235.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":236,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":236.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":237,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":237.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":238,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":238.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":239,\"duration\":0.5,\"pitch\":-6,\"stem\":1},{\"note\":239.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":240,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":240.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":241,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":241.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":242,\"duration\":0.5,\"pitch\":-6,\"stem\":1},{\"note\":242.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":243,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":243.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":244,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":244.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":245,\"duration\":1,\"pitch\":-6,\"stem\":1},{\"note\":246,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":246.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":247,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":247,\"duration\":1,\"pitch\":7,\"stem\":1},{\"note\":247,\"words\":\"(cue-144)\"},{\"note\":247.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":248,\"duration\":1,\"pitch\":10,\"stem\":1},{\"note\":248,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":248.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":249,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":249.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":250,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":250.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":251,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":251.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":252,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":252.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":253,\"duration\":1,\"pitch\":19,\"stem\":1},{\"note\":253,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":253.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":254,\"duration\":1,\"pitch\":22,\"stem\":1},{\"note\":254,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":254.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":255,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":255.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":256,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":256.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":257,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":257.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":258,\"words\":\"(sim.)\"},{\"note\":258,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":258.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":259,\"duration\":1,\"pitch\":7,\"stem\":1},{\"note\":259,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":259.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":260,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":260,\"duration\":1,\"pitch\":10,\"stem\":1},{\"note\":260.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":261,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":261.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":262,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":262.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":263,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":263.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":264,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":264.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":265,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":265,\"duration\":1,\"pitch\":19,\"stem\":1},{\"note\":265.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":266,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":266,\"duration\":1,\"pitch\":22,\"stem\":1},{\"note\":266.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":267,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":267.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":268,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":268.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":269,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":269.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":270,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":270.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":271,\"duration\":1,\"pitch\":7,\"stem\":1},{\"note\":271,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":271.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":272,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":272,\"duration\":1,\"pitch\":10,\"stem\":1},{\"note\":272.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":273,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":273.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":274,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":274.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":275,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":275.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":276,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":276.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":277,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":277,\"duration\":1,\"pitch\":19,\"stem\":1},{\"note\":277.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":278,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":278,\"duration\":1,\"pitch\":22,\"stem\":1},{\"note\":278.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":279,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":279.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":280,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":280.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":281,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":281.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":282,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":282.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":283,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":283.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":284,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":284.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":285,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":285.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":286,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":286.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":287,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":287.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":288,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":288.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":289,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":289.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":290,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":290.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":291,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":291.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":292,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":292.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":293,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":293.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":294,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":294.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":295,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":295.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":296,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":296.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":297,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":297.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":298,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":298.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":299,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":299.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":300,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":300.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":301,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":301.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":302,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":302.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":303,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":303.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":304,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":304.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":305,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":305.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":306,\"words\":\"(sim.)\"},{\"note\":306,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":306.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":307,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":307.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":308,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":308.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":309,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":309.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":310,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":310.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":311,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":311.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":312,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":312.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":313,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":313.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":314,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":314.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":315,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":315.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":316,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":316.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":317,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":317.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":318,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":318.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":319,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":319.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":320,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":320.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":321,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":321.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":322,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":322.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":323,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":323.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":324,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":324.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":325,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":325.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":326,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":326.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":327,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":327.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":328,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":328.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":329,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":329.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":330,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":330.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":331,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":331.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":332,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":332.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":333,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":333.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":334,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":334.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":335,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":335.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":336,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":336.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":337,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":337.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":338,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":338.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":339,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":339.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":340,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":340.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":341,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":341.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":342,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":342.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":343,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":343.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":344,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":344.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":345,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":345.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":346,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":346.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":347,\"duration\":0.5,\"pitch\":-6,\"stem\":1},{\"note\":347.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":348,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":348.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":349,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":349.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":350,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":350.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":351,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":351.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":352,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":352.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":353,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":353.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":354,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":354.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":355,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":355.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":356,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":356.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":357,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":357.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":358,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":358.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":359,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":359.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":360,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":360.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":361,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":361.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":362,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":362.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":363,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":363.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":364,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":364.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":365,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":365.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":366,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":366.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":367,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":367.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":368,\"duration\":1,\"pitch\":0,\"stem\":-1},{\"note\":369,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":369.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":370,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":370.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":371,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":372,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":372.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":373,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":373.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":374,\"duration\":1,\"pitch\":-3,\"stem\":1},{\"note\":375,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":375.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":376,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":376.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":377,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":377.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":378,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":378.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":379,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":379.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":380,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":380.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":381,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":381.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":382,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":382.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":383,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":383.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":384,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":384.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":385,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":385.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":386,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":386.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":387,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":387.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":388,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":388.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":389,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":389.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":426,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":426,\"words\":\"(cue-30)\"},{\"note\":426.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":427,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":427.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":428,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":428.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":429,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":429.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":430,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":430.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":431,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":431.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":432,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":432.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":433,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":433.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":434,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":434.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":435,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":435.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":436,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":436.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":437,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":437.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":438,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":438.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":439,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":439.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":440,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":440.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":441,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":441.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":442,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":442.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":443,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":443.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":444,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":444.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":445,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":445.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":446,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":446.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":447,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":447.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":448,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":448.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":449,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":449.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":450,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":450.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":451,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":451.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":452,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":452.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":453,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":453.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":454,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":454.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":455,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":455.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":504,\"words\":\"(cue-186)\"},{\"note\":504,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":504.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":505,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":505.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":506,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":506.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":507,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":507.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":508,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":508.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":509,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":509.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":510,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":510.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":511,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":511.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":512,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":512.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":513,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":513.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":514,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":514.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":515,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":515.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":516,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":516.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":517,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":517.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":518,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":518.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":519,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":519.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":520,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":520.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":521,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":521.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":522,\"words\":\"(sim.)\"},{\"note\":522,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":522.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":523,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":523.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":524,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":524.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":525,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":525.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":526,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":526.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":527,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":527.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":528,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":528.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":529,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":529.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":530,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":530.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":531,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":531.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":532,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":532.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":533,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":533.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":534,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":534.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":535,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":535.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":536,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":536.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":537,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":537.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":538,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":538.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":539,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":539.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":540,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":540.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":541,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":541.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":542,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":542.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":543,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":543.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":544,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":544.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":545,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":545.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":546,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":546.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":547,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":547.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":548,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":548.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":549,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":549.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":550,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":550.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":551,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":551.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":552,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":552.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":553,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":553.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":554,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":554.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":555,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":555.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":556,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":556.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":557,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":557.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":558,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":558.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":559,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":559.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":560,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":561,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":561.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":562,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":562.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":563,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":564,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":564.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":565,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":565.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":566,\"duration\":1,\"pitch\":0,\"stem\":-1},{\"note\":567,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":567.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":568,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":568.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":569,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":570,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":570.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":571,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":571.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":572,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":572.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":573,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":573.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":574,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":574.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":575,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":575.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":576,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":576.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":577,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":577.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":578,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":578.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":579,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":579.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":580,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":580.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":581,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":581.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":582,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":582.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":583,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":583.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":584,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":584.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":585,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":585.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":586,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":586.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":587,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":587.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":588,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":588.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":589,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":589.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":590,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":590.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":591,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":591.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":592,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":592.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":593,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":593.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":594,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":594.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":595,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":595.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":596,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":596.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":597,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":597.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":598,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":598.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":599,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":599.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":600,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":600.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":601,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":601.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":602,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":602.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":603,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":603.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":604,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":604.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":605,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":605.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":606,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":606.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":607,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":607.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":608,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":608.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":609,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":609.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":610,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":610.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":611,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":611.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":612,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":612.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":613,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":613.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":614,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":614.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":615,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":615.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":616,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":616.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":617,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":617.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":618,\"words\":\"(sim.)\"},{\"note\":618,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":618.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":619,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":619.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":620,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":620.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":621,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":621.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":622,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":622.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":623,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":623.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":624,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":624.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":625,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":625.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":626,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":626.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":627,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":627.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":628,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":628.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":629,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":629.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":630,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":630.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":631,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":631.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":632,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":632.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":633,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":633.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":634,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":634.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":635,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":635.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":636,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":636.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":637,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":637.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":638,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":638.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":639,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":639.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":640,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":640.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":641,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":641.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":642,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":642.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":643,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":643.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":644,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":644.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":645,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":645.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":646,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":646.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":647,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":647.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":648,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":648.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":649,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":649.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":650,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":650.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":651,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":651.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":652,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":652.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":653,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":653.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":654,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":654.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":655,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":655.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":656,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":656.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":657,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":657.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":658,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":658.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":659,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":659.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":660,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":660.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":661,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":661.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":662,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":662.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":663,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":663.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":664,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":664.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":665,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":665.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":666,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":666.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":667,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":667.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":668,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":668.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":669,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":669.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":670,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":670.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":671,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":671.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":672,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":672.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":673,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":673.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":674,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":674.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":675,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":675.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":676,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":676.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":677,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":677.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":678,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":678.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":679,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":679.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":680,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":680.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":681,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":681.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":682,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":682.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":683,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":683.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":684,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":684.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":685,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":685.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":686,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":686.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":687,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":687.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":688,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":688.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":689,\"duration\":0.5,\"pitch\":-6,\"stem\":1},{\"note\":689.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1}]},\"P19\":{\"id\":\"P19\",\"name\":\"Piano (Optional)\",\"measureCount\":119,\"notes\":[{\"note\":30,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":30.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":31,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":31.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":32,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":32.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":33,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":33.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":34,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":34.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":35,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":35.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":36,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":36.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":37,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":37.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":38,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":38.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":39,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":39.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":40,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":40.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":41,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":41.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":42,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":42.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":43,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":43.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":44,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":44.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":45,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":45.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":46,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":46.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":47,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":47.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":48,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":48.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":49,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":49.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":50,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":50.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":51,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":51.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":52,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":52.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":53,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":53.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":54,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":54.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":55,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":55.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":56,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":56.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":57,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":57.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":58,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":58.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":59,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":59.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":60,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":60.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":61,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":61.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":62,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":62.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":63,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":63.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":64,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":64.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":65,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":65.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":66,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":66.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":67,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":67.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":68,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":68.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":69,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":69.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":70,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":70.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":71,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":71.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":72,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":72.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":73,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":73.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":74,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":74.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":75,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":75.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":76,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":76.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":77,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":77.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":78,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":78.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":79,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":79.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":80,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":80.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":81,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":81.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":82,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":82.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":83,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":83.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":84,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":84.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":85,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":85.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":86,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":86.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":87,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":87.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":88,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":88.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":89,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":89.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":90,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":90.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":91,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":91.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":92,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":92.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":93,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":93.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":94,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":94.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":95,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":95.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":96,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":96.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":97,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":97.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":98,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":98.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":99,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":99.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":100,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":100.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":101,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":101.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":102,\"words\":\"(sim.)\"},{\"note\":102,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":102.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":103,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":103.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":104,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":104.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":105,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":105.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":106,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":106.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":107,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":107.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":108,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":108.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":109,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":109.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":110,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":110.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":111,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":111.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":112,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":112.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":113,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":113.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":114,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":114.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":115,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":115.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":116,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":116.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":117,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":117.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":118,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":118.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":119,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":119.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":120,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":120.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":121,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":121.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":122,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":122.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":123,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":123.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":124,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":124.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":125,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":125.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":126,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":126.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":127,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":127.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":128,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":128.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":129,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":129.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":130,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":130.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":131,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":131.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":132,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":132.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":133,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":133.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":134,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":134.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":135,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":135.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":136,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":136.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":137,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":137.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":138,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":138.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":139,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":139.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":140,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":140.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":141,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":141.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":142,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":142.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":143,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":143.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":546,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":546.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":547,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":547.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":548,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":548.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":549,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":549.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":550,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":550.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":551,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":551.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":552,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":552.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":553,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":553.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":554,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":554.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":555,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":555.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":556,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":556.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":557,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":557.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":558,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":558.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":559,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":559.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":560,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":561,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":561.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":562,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":562.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":563,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":564,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":564.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":565,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":565.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":566,\"duration\":1,\"pitch\":0,\"stem\":-1},{\"note\":567,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":567.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":568,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":568.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":569,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":570,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":570.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":571,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":571.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":572,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":572.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":573,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":573.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":574,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":574.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":575,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":575.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":576,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":576.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":577,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":577.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":578,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":578.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":579,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":579.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":580,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":580.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":581,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":581.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":582,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":582.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":583,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":583.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":584,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":584.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":585,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":585.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":586,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":586.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":587,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":587.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":588,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":588.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":589,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":589.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":590,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":590.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":591,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":591.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":592,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":592.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":593,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":593.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":594,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":594.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":595,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":595.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":596,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":596.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":597,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":597.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":598,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":598.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":599,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":599.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":600,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":600.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":601,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":601.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":602,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":602.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":603,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":603.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":604,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":604.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":605,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":605.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":606,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":606.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":607,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":607.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":608,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":608.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":609,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":609.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":610,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":610.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":611,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":611.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":612,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":612.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":613,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":613.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":614,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":614.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":615,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":615.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":616,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":616.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":617,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":617.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":618,\"words\":\"(sim.)\"},{\"note\":618,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":618.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":619,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":619.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":620,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":620.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":621,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":621.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":622,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":622.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":623,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":623.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":624,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":624.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":625,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":625.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":626,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":626.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":627,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":627.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":628,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":628.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":629,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":629.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":630,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":630.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":631,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":631.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":632,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":632.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":633,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":633.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":634,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":634.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":635,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":635.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":636,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":636.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":637,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":637.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":638,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":638.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":639,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":639.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":640,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":640.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":641,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":641.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":642,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":642.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":643,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":643.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":644,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":644.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":645,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":645.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":646,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":646.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":647,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":647.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":648,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":648.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":649,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":649.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":650,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":650.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":651,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":651.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":652,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":652.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":653,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":653.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":654,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":654.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":655,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":655.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":656,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":656.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":657,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":657.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":658,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":658.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":659,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":659.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":660,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":660.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":661,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":661.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":662,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":662.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":663,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":663.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":664,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":664.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":665,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":665.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":666,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":666.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":667,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":667.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":668,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":668.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":669,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":669.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":670,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":670.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":671,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":671.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":672,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":672.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":673,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":673.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":674,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":674.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":675,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":675.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":676,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":676.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":677,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":677.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":678,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":678.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":679,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":679.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":680,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":680.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":681,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":681.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":682,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":682.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":683,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":683.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":684,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":684.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":685,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":685.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":686,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":686.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":687,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":687.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":688,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":688.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":689,\"duration\":0.5,\"pitch\":-6,\"stem\":1},{\"note\":689.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1}]},\"P20\":{\"id\":\"P20\",\"name\":\"Celesta (Optioanl)\",\"measureCount\":119,\"notes\":[{\"note\":126,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":126.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":127,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":127.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":128,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":128.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":129,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":129.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":130,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":130.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":131,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":131.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":132,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":132.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":133,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":133.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":134,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":134.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":135,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":135.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":136,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":136.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":137,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":137.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":138,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":138.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":139,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":139.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":140,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":140.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":141,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":141.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":142,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":142.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":143,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":143.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":144,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":270,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":270.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":271,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":272,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":273,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":273.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":274,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":275,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":276,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":276.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":277,\"duration\":1,\"pitch\":-9,\"stem\":1},{\"note\":278,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":279,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":279.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":280,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":280.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":281,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":281.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":282,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":282.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":283,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":284,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":285,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":285.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":286,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":287,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":288,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":288.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":289,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":289.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":290,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":290.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":291,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":291.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":292,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":292.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":293,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":293.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":294.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":295,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":295.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":296,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":296.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":297,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":297.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":298,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":298.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":299,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":299.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":303,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":303.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":304,\"duration\":2,\"pitch\":-14,\"stem\":1},{\"note\":306,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":306.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":307,\"duration\":2,\"pitch\":-14,\"stem\":1},{\"note\":309,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":309.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":310,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":310.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":311,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":311.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":312,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":312.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":313,\"duration\":2,\"pitch\":-14,\"stem\":1},{\"note\":315,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":315.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":316,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":316.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":317,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":317.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":318,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":318.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":319,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":319.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":320,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":320.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":321,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":321.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":322,\"duration\":2,\"pitch\":-14,\"stem\":1},{\"note\":324,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":324.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":325,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":325.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":326,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":326.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":327,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":327.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":328,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":328.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":329,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":329.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":330,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":330.5,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":331.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":332,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":333,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":333.5,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":334.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":335,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":336,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":336.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":337,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":337.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":338,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":338.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":339,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":339.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":340,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":340.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":341,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":341.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":342,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":468,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":468.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":469,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":469.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":470,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":470.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":471,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":471.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":472,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":472.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":473,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":473.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":474,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":474.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":475,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":475.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":476,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":476.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":477,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":477.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":478,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":478.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":479,\"duration\":1,\"pitch\":-17,\"stem\":1},{\"note\":492,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":492.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":493,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":493.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":494,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":494.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":495,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":495.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":496,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":496.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":497,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":497.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":498,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":498.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":499,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":499.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":500,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":500.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":501,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":501.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":502,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":502.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":503,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":503.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":504,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":504.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":505,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":505.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":506,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":506.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":507,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":507.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":508,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":508.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":509,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":509.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":510,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":510.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":511,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":511.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":512,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":512.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":513,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":513.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":514,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":514.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":515,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":515.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":516,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":516.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":517,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":517.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":518,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":519,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":519.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":520,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":520.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":521,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":522,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":522.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":523,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":523.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":524,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":525,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":525.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":526,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":526.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":527,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":528,\"words\":\"(sim.)\"},{\"note\":528,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":528.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":529,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":529.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":530,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":531,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":531.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":532,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":532.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":533,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":534,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":534.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":535,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":535.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":536,\"duration\":1,\"pitch\":-9,\"stem\":1},{\"note\":537,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":537.5,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":538.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":539,\"duration\":1,\"pitch\":-14,\"stem\":1}]},\"P21\":{\"id\":\"P21\",\"name\":\"Harp\",\"measureCount\":119,\"notes\":[{\"note\":54,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":55,\"duration\":1,\"pitch\":15,\"stem\":-1},{\"note\":56,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":57,\"duration\":1,\"pitch\":15,\"stem\":-1},{\"note\":58,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":60,\"duration\":1,\"pitch\":-29,\"stem\":1},{\"note\":61,\"duration\":1,\"pitch\":19,\"stem\":-1},{\"note\":62,\"duration\":1,\"pitch\":-17,\"stem\":-1},{\"note\":63,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":65,\"duration\":1,\"pitch\":-29,\"stem\":1},{\"note\":67,\"duration\":1,\"pitch\":-17,\"stem\":1},{\"note\":67,\"words\":\"(cue-72)\"},{\"note\":68,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":69,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":70,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":71,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":73,\"duration\":1,\"pitch\":-17,\"stem\":1},{\"note\":74,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":75,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":76,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":77,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":79,\"duration\":1,\"pitch\":-17,\"stem\":1},{\"note\":80,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":81,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":82,\"duration\":1,\"pitch\":-9,\"stem\":1},{\"note\":83,\"duration\":1,\"pitch\":3,\"stem\":1},{\"note\":85,\"duration\":1,\"pitch\":-17,\"stem\":1},{\"note\":86,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":87,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":88,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":89,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":91,\"duration\":1,\"pitch\":-17,\"stem\":1},{\"note\":92,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":93,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":94,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":95,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":97,\"duration\":1,\"pitch\":-9,\"stem\":1},{\"note\":98,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":99,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":100,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":101,\"duration\":1,\"pitch\":3,\"stem\":1},{\"note\":103,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":104,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":105,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":106,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":107,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":108,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":108.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":109,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":109.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":110,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":110.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":111,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":111.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":112,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":112.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":113,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":113.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":114,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":115,\"duration\":1,\"pitch\":-33,\"stem\":1},{\"note\":116,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":117,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":118,\"duration\":1,\"pitch\":15,\"stem\":-1},{\"note\":119,\"duration\":1,\"pitch\":-9,\"stem\":-1},{\"note\":258,\"words\":\"(cue-72)\"},{\"note\":258,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":258.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":259,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":259.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":260,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":260.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":261,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":261.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":262,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":262.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":263,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":263.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":264,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":264.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":265,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":265.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":266,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":266.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":267,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":267.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":268,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":268.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":269,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":269.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":270,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":273,\"duration\":3,\"pitch\":19,\"stem\":-1},{\"note\":276,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":279,\"duration\":3,\"pitch\":19,\"stem\":-1},{\"note\":282,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":282.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":283,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":283.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":284,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":284.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":285,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":285.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":286,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":286.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":287,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":287.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":288,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":288.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":289,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":289.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":290,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":290.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":291,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":291.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":292,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":292.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":293,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":293.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":294,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":294.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":295,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":295.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":296,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":296.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":297,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":297.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":298,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":298.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":299,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":299.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":300,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":300.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":301,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":301.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":302,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":302.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":303,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":306,\"duration\":3,\"pitch\":19,\"stem\":-1},{\"note\":309,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":312,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":312,\"words\":\"(cue-78)\"},{\"note\":312.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":313,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":313.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":314,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":314.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":315,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":315.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":316,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":316.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":317,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":317.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":318,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":318.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":319,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":319.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":320,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":320.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":321,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":321.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":322,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":322.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":323,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":323.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":324,\"words\":\"(sim.)\"},{\"note\":324,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":324.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":325,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":325.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":326,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":326.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":327,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":327.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":328,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":328.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":329,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":329.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":330,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":330.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":331,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":331.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":332,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":332.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":333,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":333.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":334,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":334.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":335,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":335.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":336,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":336.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":337,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":337.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":338,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":338.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":339,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":339.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":340,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":340.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":341,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":341.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":342,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":342.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":343,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":343.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":344,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":344.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":345,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":345.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":346,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":346.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":347,\"duration\":0.5,\"pitch\":-6,\"stem\":1},{\"note\":347.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":348,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":348.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":349,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":349.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":350,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":350.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":351,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":351.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":352,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":352.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":353,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":353.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":354,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":354.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":355,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":355.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":356,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":356.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":357,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":357.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":358,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":358.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":359,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":359.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":360,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":360.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":361,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":361.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":362,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":362.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":363,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":363.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":364,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":364.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":365,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":365.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":366,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":366.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":367,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":367.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":368,\"duration\":1,\"pitch\":0,\"stem\":-1},{\"note\":369,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":369.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":370,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":370.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":371,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":372,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":372.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":373,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":373.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":374,\"duration\":1,\"pitch\":-3,\"stem\":1},{\"note\":375,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":375.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":376,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":376.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":377,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":377.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":378,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":378.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":379,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":379.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":380,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":380.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":381,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":381.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":382,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":382.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":383,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":383.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":384,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":384.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":385,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":385.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":386,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":386.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":387,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":387.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":388,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":388.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":389,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":389.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":417,\"words\":\"(cue-39)\"},{\"note\":417,\"duration\":3,\"pitch\":-21,\"stem\":1},{\"note\":420,\"duration\":3,\"pitch\":15,\"stem\":-1},{\"note\":423,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":426,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":429,\"duration\":3,\"pitch\":19,\"stem\":-1},{\"note\":432,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":435,\"duration\":3,\"pitch\":19,\"stem\":-1},{\"note\":438,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":444,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":444.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":445,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":445.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":446,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":447,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":447.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":448,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":448.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":449,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":450,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":450.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":451,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":451.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":452,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":453,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":453.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":454,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":454.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":455,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":516,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":516,\"words\":\"(cue-24)\"},{\"note\":516.5,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":517.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":518,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":519,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":519.5,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":520.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":521,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":522,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":522.5,\"duration\":1,\"pitch\":3,\"stem\":1},{\"note\":523.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":524,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":525,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":525.5,\"duration\":1,\"pitch\":3,\"stem\":1},{\"note\":526.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":527,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":528,\"words\":\"(sim.)\"},{\"note\":528,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":528.5,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":529.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":530,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":531,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":531.5,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":532.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":533,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":534,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":534.5,\"duration\":1,\"pitch\":3,\"stem\":1},{\"note\":535.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":536,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":537,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":537.5,\"duration\":1,\"pitch\":3,\"stem\":1},{\"note\":538.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":539,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":558,\"words\":\"(cue-126)\"},{\"note\":558,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":558.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":559,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":559.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":560,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":561,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":561.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":562,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":562.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":563,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":564,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":564.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":565,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":565.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":566,\"duration\":1,\"pitch\":0,\"stem\":-1},{\"note\":567,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":567.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":568,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":568.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":569,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":570,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":570.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":571,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":571.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":572,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":572.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":573,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":573.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":574,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":574.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":575,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":575.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":576,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":576.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":577,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":577.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":578,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":578.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":579,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":579.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":580,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":580.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":581,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":581.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":582,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":582.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":583,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":583.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":584,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":584.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":585,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":585.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":586,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":586.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":587,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":587.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":588,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":589,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":590,\"duration\":1,\"pitch\":-9,\"stem\":-1},{\"note\":591,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":592,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":593,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":594,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":594.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":595,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":595.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":596,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":596.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":597,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":597.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":598,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":598.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":599,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":599.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":600,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":600.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":601,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":601.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":602,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":602.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":603,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":603.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":604,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":604.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":605,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":605.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":606,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":606.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":607,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":607.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":608,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":608.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":609,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":609.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":610,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":610.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":611,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":611.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":612,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":612.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":613,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":613.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":614,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":614.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":615,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":615.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":616,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":616.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":617,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":617.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":618,\"words\":\"(sim.)\"},{\"note\":618,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":618.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":619,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":619.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":620,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":620.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":621,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":621.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":622,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":622.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":623,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":623.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":624,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":624.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":625,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":625.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":626,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":626.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":627,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":627.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":628,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":628.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":629,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":629.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":630,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":630.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":631,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":631.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":632,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":632.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":633,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":633.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":634,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":634.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":635,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":635.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":636,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":636.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":637,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":637.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":638,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":638.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":639,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":639.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":640,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":640.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":641,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":641.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":642,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":642.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":643,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":643.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":644,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":644.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":645,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":645.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":646,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":646.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":647,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":647.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":648,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":648.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":649,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":649.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":650,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":650.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":651,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":651.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":652,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":652.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":653,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":653.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":654,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":654.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":655,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":655.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":656,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":656.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":657,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":657.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":658,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":658.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":659,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":659.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":660,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":660.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":661,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":661.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":662,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":662.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":663,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":663.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":664,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":664.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":665,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":665.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":666,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":666.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":667,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":667.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":668,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":668.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":669,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":669.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":670,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":670.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":671,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":671.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":672,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":672.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":673,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":673.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":674,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":674.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":675,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":675.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":676,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":676.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":677,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":677.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":678,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":678.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":679,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":679.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":680,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":680.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":681,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":681.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":682,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":682.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":683,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":683.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":684,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":684.5,\"duration\":0.5,\"pitch\":5,\"stem\":1},{\"note\":685,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":685.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":686,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":686.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":687,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":687.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":688,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":688.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":689,\"duration\":0.5,\"pitch\":-6,\"stem\":1},{\"note\":689.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":708,\"words\":\"(C#)\"},{\"note\":711,\"duration\":1,\"pitch\":0,\"stem\":1},{\"note\":712,\"duration\":1,\"pitch\":-24,\"stem\":1},{\"note\":713,\"duration\":1,\"pitch\":24,\"stem\":-1}]},\"P22\":{\"id\":\"P22\",\"name\":\"Soprano (Optional)\",\"measureCount\":119,\"notes\":[{\"note\":594,\"words\":\"(legato, cinematic)\"},{\"note\":594,\"duration\":6,\"pitch\":-2,\"stem\":1},{\"note\":600,\"duration\":6,\"pitch\":-2,\"stem\":1},{\"note\":606,\"duration\":6,\"pitch\":-5,\"stem\":1},{\"note\":606,\"duration\":6,\"pitch\":-2,\"stem\":1},{\"note\":612,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":615,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":618,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":621,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":624,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":627,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":630,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":631.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":633,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":634.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":636,\"duration\":6,\"pitch\":0,\"stem\":1},{\"note\":642,\"duration\":1.5,\"pitch\":3,\"stem\":-1},{\"note\":643.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":645,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":646.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":648,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":649.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":651,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":652.5,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":654,\"duration\":1.5,\"pitch\":3,\"stem\":-1},{\"note\":655.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":657,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":658.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":660,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":661.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":663,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":666,\"duration\":1.5,\"pitch\":3,\"stem\":-1},{\"note\":667.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":669,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":670.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":672,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":673.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":675,\"duration\":1.5,\"pitch\":0,\"stem\":-1},{\"note\":676.5,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":678,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":679.5,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":681,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":682.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":684,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":685.5,\"duration\":1.5,\"pitch\":0,\"stem\":-1},{\"note\":687,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":690,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":691.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":693,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":694.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":696,\"duration\":1.5,\"pitch\":3,\"stem\":1},{\"note\":697.5,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":699,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":702,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":703.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":705,\"duration\":1.5,\"pitch\":3,\"stem\":-1},{\"note\":706.5,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":708,\"duration\":1,\"pitch\":2,\"stem\":-1},{\"note\":709,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":710,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":711,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":712,\"duration\":2,\"pitch\":7,\"stem\":-1},{\"note\":712,\"duration\":2,\"pitch\":12,\"stem\":-1}]},\"P23\":{\"id\":\"P23\",\"name\":\"Alto (Optional)\",\"measureCount\":119,\"notes\":[{\"note\":594,\"words\":\"(legato, cinematic)\"},{\"note\":594,\"duration\":6,\"pitch\":-5,\"stem\":1},{\"note\":594,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":597,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":600,\"duration\":6,\"pitch\":-5,\"stem\":1},{\"note\":600,\"duration\":6,\"pitch\":-10,\"stem\":-1},{\"note\":606,\"duration\":6,\"pitch\":-5,\"stem\":1},{\"note\":606,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":609,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":612,\"duration\":3,\"pitch\":-7,\"stem\":1},{\"note\":612,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":615,\"duration\":3,\"pitch\":-12,\"stem\":1},{\"note\":615,\"duration\":3,\"pitch\":-7,\"stem\":1},{\"note\":618,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":618,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":621,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":621,\"duration\":3,\"pitch\":-7,\"stem\":1},{\"note\":624,\"duration\":3,\"pitch\":-7,\"stem\":1},{\"note\":624,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":627,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":627,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":630,\"duration\":6,\"pitch\":-2,\"stem\":1},{\"note\":630,\"duration\":6,\"pitch\":-7,\"stem\":1},{\"note\":636,\"duration\":6,\"pitch\":-3,\"stem\":1},{\"note\":636,\"duration\":6,\"pitch\":-7,\"stem\":1},{\"note\":642,\"duration\":1.5,\"pitch\":3,\"stem\":-1},{\"note\":643.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":645,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":646.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":648,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":649.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":651,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":652.5,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":654,\"duration\":1.5,\"pitch\":3,\"stem\":-1},{\"note\":655.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":657,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":658.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":660,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":661.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":663,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":666,\"duration\":1.5,\"pitch\":3,\"stem\":-1},{\"note\":667.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":669,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":670.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":672,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":673.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":675,\"duration\":1.5,\"pitch\":0,\"stem\":-1},{\"note\":676.5,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":678,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":679.5,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":681,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":682.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":684,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":685.5,\"duration\":1.5,\"pitch\":0,\"stem\":-1},{\"note\":687,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":690,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":691.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":693,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":694.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":696,\"duration\":1.5,\"pitch\":3,\"stem\":1},{\"note\":697.5,\"duration\":1.5,\"pitch\":-3,\"stem\":1},{\"note\":699,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":702,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":703.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":705,\"duration\":1.5,\"pitch\":3,\"stem\":1},{\"note\":706.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":708,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":709,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":710,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":711,\"duration\":3,\"pitch\":0,\"stem\":-1},{\"note\":711,\"duration\":3,\"pitch\":4,\"stem\":-1}]},\"P24\":{\"id\":\"P24\",\"name\":\"Solo Violin I\",\"measureCount\":119,\"notes\":[{\"note\":43,\"words\":\"(cue-23)\"},{\"note\":43,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":44,\"duration\":0.75,\"pitch\":-2,\"stem\":-1},{\"note\":44.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":45,\"duration\":2,\"pitch\":7,\"stem\":-1},{\"note\":47,\"duration\":0.75,\"pitch\":7,\"stem\":-1},{\"note\":47.75,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":48,\"duration\":3,\"pitch\":10,\"stem\":-1},{\"note\":51,\"duration\":2,\"pitch\":10,\"stem\":-1},{\"note\":53,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":54,\"duration\":6,\"pitch\":14,\"stem\":-1},{\"note\":60,\"duration\":6,\"pitch\":14,\"stem\":-1},{\"note\":73,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":73,\"words\":\"(cue-20)\"},{\"note\":74,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":75,\"duration\":2,\"pitch\":10,\"stem\":-1},{\"note\":77,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":78,\"duration\":2,\"pitch\":15,\"stem\":-1},{\"note\":80,\"duration\":0.75,\"pitch\":15,\"stem\":-1},{\"note\":80.75,\"duration\":0.25,\"pitch\":3,\"stem\":-1},{\"note\":81,\"duration\":2,\"pitch\":3,\"stem\":-1},{\"note\":83,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":84,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":90,\"duration\":3,\"pitch\":10,\"stem\":-1},{\"note\":108,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":108,\"words\":\"(cue-12)\"},{\"note\":108.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":109,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":109.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":110,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":110.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":111,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":111.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":112,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":112.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":113,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":113.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":114,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":114.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":115,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":115.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":116,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":116.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":117,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":117.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":118,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":118.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":119,\"duration\":0.5,\"pitch\":7,\"stem\":1},{\"note\":119.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":144,\"words\":\"(cue-48)\"},{\"note\":144,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":145.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":147,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":148.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":150,\"duration\":6,\"pitch\":14,\"stem\":-1},{\"note\":156,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":157.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":159,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":160.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":162,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":163.5,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":165,\"duration\":3,\"pitch\":12,\"stem\":-1},{\"note\":168,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":169.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":171,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":172.5,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":174,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":175.5,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":177,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":178.5,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":180,\"duration\":1.5,\"pitch\":19,\"stem\":-1},{\"note\":181.5,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":183,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":184.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":186,\"duration\":6,\"pitch\":12,\"stem\":-1},{\"note\":457,\"words\":\"(cue-47)\"},{\"note\":457,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":458,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":459,\"duration\":2,\"pitch\":10,\"stem\":-1},{\"note\":461,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":461.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":462,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":463.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":464,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":465,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":466,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":467,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":468,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":474,\"duration\":0.75,\"pitch\":10,\"stem\":-1},{\"note\":474.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":475,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":475.5,\"duration\":0.75,\"pitch\":15,\"stem\":-1},{\"note\":476.25,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":476.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":477,\"duration\":3,\"pitch\":19,\"stem\":-1},{\"note\":480,\"duration\":0.75,\"pitch\":14,\"stem\":-1},{\"note\":480.75,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":481,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":481.5,\"duration\":0.75,\"pitch\":15,\"stem\":-1},{\"note\":482.25,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":482.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":483,\"duration\":0.75,\"pitch\":10,\"stem\":-1},{\"note\":483.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":484,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":484.5,\"duration\":0.75,\"pitch\":14,\"stem\":-1},{\"note\":485.25,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":485.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":486,\"words\":\"(cue)\"},{\"note\":486,\"duration\":0.6667,\"pitch\":-2,\"stem\":-1},{\"note\":486.6667,\"duration\":0.6667,\"pitch\":2,\"stem\":-1},{\"note\":487.3333,\"duration\":0.6667,\"pitch\":3,\"stem\":-1},{\"note\":488,\"duration\":0.6667,\"pitch\":7,\"stem\":-1},{\"note\":488.6667,\"duration\":0.6667,\"pitch\":9,\"stem\":-1},{\"note\":489.3333,\"duration\":0.6667,\"pitch\":10,\"stem\":-1},{\"note\":490,\"duration\":1,\"pitch\":15,\"stem\":-1},{\"note\":491,\"duration\":1,\"pitch\":19,\"stem\":-1},{\"note\":492,\"duration\":0.75,\"pitch\":22,\"stem\":-1},{\"note\":492.75,\"duration\":0.25,\"pitch\":22,\"stem\":-1},{\"note\":493,\"duration\":0.5,\"pitch\":22,\"stem\":-1},{\"note\":493.5,\"duration\":0.75,\"pitch\":22,\"stem\":-1},{\"note\":494.25,\"duration\":0.25,\"pitch\":22,\"stem\":-1},{\"note\":494.5,\"duration\":0.5,\"pitch\":22,\"stem\":-1},{\"note\":495,\"duration\":0.75,\"pitch\":22,\"stem\":-1},{\"note\":495.75,\"duration\":0.25,\"pitch\":22,\"stem\":-1},{\"note\":496,\"duration\":1,\"pitch\":22,\"stem\":-1},{\"note\":498,\"duration\":6,\"pitch\":22,\"stem\":-1},{\"note\":504,\"duration\":6,\"pitch\":22,\"stem\":-1}]},\"P25\":{\"id\":\"P25\",\"name\":\"Solo  Violin II\",\"measureCount\":119,\"notes\":[{\"note\":12,\"words\":\"(Recording Session Option)\"},{\"note\":12,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":12,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":18,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":18,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":24,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":24,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":30,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":30,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":36,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":36,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":42,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":42,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":48,\"duration\":6,\"pitch\":3,\"stem\":-1},{\"note\":48,\"duration\":6,\"pitch\":8,\"stem\":-1},{\"note\":54,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":54,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":60,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":60,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":456,\"words\":\"(cue-48)\"},{\"note\":456,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":456.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":457,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":457.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":458,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":458.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":459,\"duration\":0.75,\"pitch\":2,\"stem\":-1},{\"note\":459.75,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":460,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":460.5,\"duration\":0.75,\"pitch\":2,\"stem\":-1},{\"note\":461.25,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":461.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":462,\"duration\":0.75,\"pitch\":-2,\"stem\":1},{\"note\":462.75,\"duration\":0.25,\"pitch\":-5,\"stem\":1},{\"note\":463,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":463.5,\"duration\":0.75,\"pitch\":3,\"stem\":1},{\"note\":464.25,\"duration\":0.25,\"pitch\":-2,\"stem\":1},{\"note\":464.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":465,\"duration\":0.75,\"pitch\":-5,\"stem\":1},{\"note\":465.75,\"duration\":0.25,\"pitch\":-9,\"stem\":1},{\"note\":466,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":466.5,\"duration\":0.75,\"pitch\":-2,\"stem\":1},{\"note\":467.25,\"duration\":0.25,\"pitch\":-5,\"stem\":1},{\"note\":467.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":468.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":469,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":469.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":470,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":470.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":471,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":471.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":472,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":472.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":473,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":473.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":474,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":475,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":476,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":477,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":478,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":479,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":480,\"duration\":0.75,\"pitch\":10,\"stem\":-1},{\"note\":480.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":481,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":481.5,\"duration\":0.75,\"pitch\":3,\"stem\":-1},{\"note\":482.25,\"duration\":0.25,\"pitch\":3,\"stem\":-1},{\"note\":482.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":483,\"duration\":0.75,\"pitch\":7,\"stem\":-1},{\"note\":483.75,\"duration\":0.25,\"pitch\":3,\"stem\":-1},{\"note\":484,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":484.5,\"duration\":0.75,\"pitch\":9,\"stem\":-1},{\"note\":485.25,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":485.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":486,\"duration\":0.6667,\"pitch\":-5,\"stem\":1},{\"note\":486.6667,\"duration\":0.6667,\"pitch\":-3,\"stem\":1},{\"note\":487.3333,\"duration\":0.6667,\"pitch\":-2,\"stem\":1},{\"note\":488,\"duration\":0.6667,\"pitch\":2,\"stem\":1},{\"note\":488.6667,\"duration\":0.6667,\"pitch\":3,\"stem\":1},{\"note\":489.3333,\"duration\":0.6667,\"pitch\":7,\"stem\":1},{\"note\":490,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":491,\"duration\":1,\"pitch\":14,\"stem\":-1},{\"note\":492,\"duration\":0.75,\"pitch\":7,\"stem\":-1},{\"note\":492,\"duration\":0.75,\"pitch\":15,\"stem\":-1},{\"note\":492.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":492.75,\"duration\":0.25,\"pitch\":15,\"stem\":-1},{\"note\":493,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":493,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":493.5,\"duration\":0.75,\"pitch\":7,\"stem\":-1},{\"note\":493.5,\"duration\":0.75,\"pitch\":15,\"stem\":-1},{\"note\":494.25,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":494.25,\"duration\":0.25,\"pitch\":15,\"stem\":-1},{\"note\":494.5,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":494.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":495,\"duration\":0.75,\"pitch\":7,\"stem\":-1},{\"note\":495,\"duration\":0.75,\"pitch\":15,\"stem\":-1},{\"note\":495.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":495.75,\"duration\":0.25,\"pitch\":15,\"stem\":-1},{\"note\":496,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":496,\"duration\":1,\"pitch\":15,\"stem\":-1},{\"note\":498,\"duration\":6,\"pitch\":14,\"stem\":-1},{\"note\":504,\"duration\":6,\"pitch\":14,\"stem\":-1}]},\"P26\":{\"id\":\"P26\",\"name\":\"Solo Viola\",\"measureCount\":119,\"notes\":[{\"note\":18,\"words\":\"(Recording Session Option)\"},{\"note\":18,\"words\":\"(cue-51)\"},{\"note\":18,\"duration\":6,\"pitch\":0,\"stem\":-1},{\"note\":18,\"duration\":6,\"pitch\":-5,\"stem\":-1},{\"note\":24,\"duration\":6,\"pitch\":0,\"stem\":-1},{\"note\":24,\"duration\":6,\"pitch\":-5,\"stem\":-1},{\"note\":30,\"duration\":6,\"pitch\":-5,\"stem\":-1},{\"note\":30,\"duration\":6,\"pitch\":0,\"stem\":-1},{\"note\":36,\"duration\":6,\"pitch\":0,\"stem\":-1},{\"note\":36,\"duration\":6,\"pitch\":-5,\"stem\":-1},{\"note\":42,\"duration\":6,\"pitch\":-5,\"stem\":-1},{\"note\":42,\"duration\":6,\"pitch\":0,\"stem\":-1},{\"note\":48,\"duration\":6,\"pitch\":-5,\"stem\":-1},{\"note\":48,\"duration\":6,\"pitch\":0,\"stem\":-1},{\"note\":54,\"duration\":6,\"pitch\":-5,\"stem\":-1},{\"note\":54,\"duration\":6,\"pitch\":0,\"stem\":-1},{\"note\":60,\"duration\":6,\"pitch\":0,\"stem\":-1},{\"note\":60,\"duration\":6,\"pitch\":-5,\"stem\":-1},{\"note\":456,\"words\":\"(cue-48)\"},{\"note\":456,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":456.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":457,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":457.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":458,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":458.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":459,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":459.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":460,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":460.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":461,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":461.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":462,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":462.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":463,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":463.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":464,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":464.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":465,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":465.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":466,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":466.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":467,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":467.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":468,\"duration\":6,\"pitch\":-5,\"stem\":-1},{\"note\":474,\"duration\":1,\"pitch\":-9,\"stem\":-1},{\"note\":475,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":476,\"duration\":1,\"pitch\":-3,\"stem\":-1},{\"note\":477,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":478,\"duration\":1,\"pitch\":2,\"stem\":-1},{\"note\":479,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":480,\"duration\":0.75,\"pitch\":7,\"stem\":-1},{\"note\":480.75,\"duration\":0.25,\"pitch\":3,\"stem\":-1},{\"note\":481,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":481.5,\"duration\":0.75,\"pitch\":2,\"stem\":-1},{\"note\":482.25,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":482.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":483,\"duration\":0.75,\"pitch\":-5,\"stem\":-1},{\"note\":483.75,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":484,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":484.5,\"duration\":0.75,\"pitch\":2,\"stem\":-1},{\"note\":485.25,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":485.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":486,\"duration\":0.6667,\"pitch\":-10,\"stem\":-1},{\"note\":486.6667,\"duration\":0.6667,\"pitch\":-9,\"stem\":-1},{\"note\":487.3333,\"duration\":0.6667,\"pitch\":-5,\"stem\":-1},{\"note\":488,\"duration\":0.6667,\"pitch\":-3,\"stem\":-1},{\"note\":488.6667,\"duration\":0.6667,\"pitch\":-2,\"stem\":-1},{\"note\":489.3333,\"duration\":0.6667,\"pitch\":2,\"stem\":-1},{\"note\":490,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":491,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":492,\"duration\":0.75,\"pitch\":2,\"stem\":-1},{\"note\":492.75,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":493,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":493.5,\"duration\":0.75,\"pitch\":2,\"stem\":-1},{\"note\":494.25,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":494.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":495,\"duration\":0.75,\"pitch\":2,\"stem\":-1},{\"note\":495.75,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":496,\"duration\":1,\"pitch\":2,\"stem\":-1},{\"note\":498,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":504,\"duration\":6,\"pitch\":7,\"stem\":-1}]},\"P27\":{\"id\":\"P27\",\"name\":\"Solo Cello\",\"measureCount\":119,\"notes\":[{\"note\":456,\"words\":\"(cue-48)\"},{\"note\":456,\"duration\":2,\"pitch\":-29,\"stem\":1},{\"note\":458,\"duration\":1,\"pitch\":-17,\"stem\":-1},{\"note\":459,\"duration\":1,\"pitch\":-17,\"stem\":1},{\"note\":460,\"duration\":1,\"pitch\":-29,\"stem\":1},{\"note\":461,\"duration\":1,\"pitch\":-22,\"stem\":1},{\"note\":462,\"duration\":0.75,\"pitch\":-21,\"stem\":1},{\"note\":462.75,\"duration\":0.25,\"pitch\":-26,\"stem\":1},{\"note\":463,\"duration\":0.5,\"pitch\":-26,\"stem\":1},{\"note\":463.5,\"duration\":0.75,\"pitch\":-17,\"stem\":1},{\"note\":464.25,\"duration\":0.25,\"pitch\":-21,\"stem\":1},{\"note\":464.5,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":465,\"duration\":0.75,\"pitch\":-14,\"stem\":-1},{\"note\":465.75,\"duration\":0.25,\"pitch\":-17,\"stem\":-1},{\"note\":466,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":466.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":467,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":467.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":468,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":468.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":469,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":469.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":470,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":470.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":471,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":471.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":472,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":472.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":473,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":473.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":474,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":474.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":475,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":475.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":476,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":476.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":477,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":477.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":478,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":478.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":479,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":479.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":480,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":481,\"duration\":1,\"pitch\":-17,\"stem\":-1},{\"note\":482,\"duration\":1,\"pitch\":-10,\"stem\":-1},{\"note\":483,\"duration\":1,\"pitch\":-9,\"stem\":-1},{\"note\":484,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":485,\"duration\":1,\"pitch\":-17,\"stem\":-1},{\"note\":486,\"duration\":0.6667,\"pitch\":-33,\"stem\":1},{\"note\":486,\"duration\":0.6667,\"pitch\":-26,\"stem\":1},{\"note\":486,\"words\":\"(cue)\"},{\"note\":486.6667,\"duration\":0.6667,\"pitch\":-33,\"stem\":1},{\"note\":486.6667,\"duration\":0.6667,\"pitch\":-26,\"stem\":1},{\"note\":487.3333,\"duration\":0.6667,\"pitch\":-26,\"stem\":1},{\"note\":487.3333,\"duration\":0.6667,\"pitch\":-17,\"stem\":1},{\"note\":488,\"duration\":0.6667,\"pitch\":-26,\"stem\":1},{\"note\":488,\"duration\":0.6667,\"pitch\":-17,\"stem\":1},{\"note\":488.6667,\"duration\":0.6667,\"pitch\":-17,\"stem\":1},{\"note\":488.6667,\"duration\":0.6667,\"pitch\":-10,\"stem\":1},{\"note\":489.3333,\"duration\":0.6667,\"pitch\":-17,\"stem\":1},{\"note\":489.3333,\"duration\":0.6667,\"pitch\":-10,\"stem\":1},{\"note\":490,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":491,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":492,\"duration\":0.75,\"pitch\":-2,\"stem\":-1},{\"note\":492.75,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":493,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":493.5,\"duration\":0.75,\"pitch\":-9,\"stem\":-1},{\"note\":494.25,\"duration\":0.25,\"pitch\":-9,\"stem\":-1},{\"note\":494.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":495,\"duration\":0.75,\"pitch\":-2,\"stem\":-1},{\"note\":495.75,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":496,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":499,\"duration\":2,\"pitch\":-5,\"stem\":-1},{\"note\":501,\"duration\":3,\"pitch\":-2,\"stem\":-1},{\"note\":504,\"duration\":6,\"pitch\":-2,\"stem\":-1}]},\"P28\":{\"id\":\"P28\",\"name\":\"Violin I\",\"measureCount\":119,\"notes\":[{\"note\":12,\"words\":\"(cue-18)\"},{\"note\":12,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":12,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":18,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":18,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":24,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":24,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":30,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":30.2708,\"duration\":0.2708,\"pitch\":14,\"stem\":-1},{\"note\":30.5417,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":30.8125,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":31.0833,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":31.3542,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":31.625,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":31.8958,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":32.1667,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":32.4375,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":32.7083,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":32.9792,\"duration\":0.2875,\"pitch\":10,\"stem\":-1},{\"note\":33.2667,\"duration\":0.2875,\"pitch\":14,\"stem\":-1},{\"note\":33.5542,\"duration\":0.2875,\"pitch\":10,\"stem\":-1},{\"note\":33.8417,\"duration\":0.2875,\"pitch\":9,\"stem\":-1},{\"note\":34.1292,\"duration\":0.2875,\"pitch\":7,\"stem\":-1},{\"note\":34.4167,\"duration\":0.2875,\"pitch\":2,\"stem\":-1},{\"note\":34.7042,\"duration\":0.2875,\"pitch\":-2,\"stem\":-1},{\"note\":36,\"duration\":0.25,\"pitch\":21,\"stem\":-1},{\"note\":36.25,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":36.5,\"duration\":0.25,\"pitch\":14,\"stem\":-1},{\"note\":36.75,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":37,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":37.25,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":37.5,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":37.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":38,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":38.25,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":38.5,\"duration\":0.25,\"pitch\":14,\"stem\":-1},{\"note\":38.75,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":39,\"duration\":0.25,\"pitch\":21,\"stem\":-1},{\"note\":39.25,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":39.5,\"duration\":0.25,\"pitch\":14,\"stem\":-1},{\"note\":39.75,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":40,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":40.25,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":40.5,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":40.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":41,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":41.25,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":41.5,\"duration\":0.25,\"pitch\":14,\"stem\":-1},{\"note\":41.75,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":42,\"duration\":0.25,\"pitch\":21,\"stem\":-1},{\"note\":42.25,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":42.5,\"duration\":0.25,\"pitch\":14,\"stem\":-1},{\"note\":42.75,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":43,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":43.25,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":43.5,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":43.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":44,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":44.25,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":44.5,\"duration\":0.25,\"pitch\":14,\"stem\":-1},{\"note\":44.75,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":45,\"duration\":0.25,\"pitch\":21,\"stem\":-1},{\"note\":45.25,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":45.5,\"duration\":0.25,\"pitch\":14,\"stem\":-1},{\"note\":45.75,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":46,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":46.25,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":46.5,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":46.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":47,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":47.25,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":47.5,\"duration\":0.25,\"pitch\":14,\"stem\":-1},{\"note\":47.75,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":48,\"duration\":0.25,\"pitch\":21,\"stem\":-1},{\"note\":48.25,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":48.5,\"duration\":0.25,\"pitch\":15,\"stem\":-1},{\"note\":48.75,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":49,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":49.25,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":49.5,\"duration\":0.25,\"pitch\":3,\"stem\":-1},{\"note\":49.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":50,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":50.25,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":50.5,\"duration\":0.25,\"pitch\":15,\"stem\":-1},{\"note\":50.75,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":51,\"duration\":0.25,\"pitch\":21,\"stem\":-1},{\"note\":51.25,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":51.5,\"duration\":0.25,\"pitch\":15,\"stem\":-1},{\"note\":51.75,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":52,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":52.25,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":52.5,\"duration\":0.25,\"pitch\":3,\"stem\":-1},{\"note\":52.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":53,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":53.25,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":53.5,\"duration\":0.25,\"pitch\":15,\"stem\":-1},{\"note\":53.75,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":54,\"duration\":0.25,\"pitch\":21,\"stem\":-1},{\"note\":54.25,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":54.5,\"duration\":0.25,\"pitch\":14,\"stem\":-1},{\"note\":54.75,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":55,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":55.25,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":55.5,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":55.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":56,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":56.25,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":56.5,\"duration\":0.25,\"pitch\":14,\"stem\":-1},{\"note\":56.75,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":57,\"duration\":0.25,\"pitch\":21,\"stem\":-1},{\"note\":57.25,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":57.5,\"duration\":0.25,\"pitch\":14,\"stem\":-1},{\"note\":57.75,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":58,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":58.25,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":58.5,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":58.75,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":59,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":59.25,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":59.5,\"duration\":0.25,\"pitch\":14,\"stem\":-1},{\"note\":59.75,\"duration\":0.25,\"pitch\":19,\"stem\":-1},{\"note\":60,\"duration\":0.3333,\"pitch\":21,\"stem\":-1},{\"note\":60.3333,\"duration\":0.3333,\"pitch\":19,\"stem\":-1},{\"note\":60.6667,\"duration\":0.3333,\"pitch\":14,\"stem\":-1},{\"note\":61,\"duration\":0.3333,\"pitch\":10,\"stem\":-1},{\"note\":61.3333,\"duration\":0.3333,\"pitch\":9,\"stem\":-1},{\"note\":61.6667,\"duration\":0.3333,\"pitch\":7,\"stem\":-1},{\"note\":62,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":102,\"duration\":6,\"pitch\":14,\"stem\":-1,\"isTremelo\":true},{\"note\":108,\"duration\":6,\"pitch\":14,\"stem\":-1,\"isTremelo\":true},{\"note\":114,\"duration\":6,\"pitch\":15,\"stem\":-1,\"isTremelo\":true},{\"note\":127,\"duration\":2,\"pitch\":0,\"stem\":1},{\"note\":127,\"duration\":2,\"pitch\":-5,\"stem\":1},{\"note\":129,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":129,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":132,\"duration\":6,\"pitch\":3,\"stem\":1},{\"note\":132,\"duration\":6,\"pitch\":-2,\"stem\":1},{\"note\":138,\"duration\":6,\"pitch\":3,\"stem\":1},{\"note\":138,\"duration\":6,\"pitch\":-2,\"stem\":1},{\"note\":144,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":144,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":144,\"words\":\"Div.\"},{\"note\":147,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":147,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":150,\"duration\":6,\"pitch\":-2,\"stem\":1},{\"note\":150,\"duration\":6,\"pitch\":-5,\"stem\":-1},{\"note\":156,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":156,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":156,\"words\":\"(cue)\"},{\"note\":159,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":159,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":162,\"duration\":3,\"pitch\":-7,\"stem\":-1},{\"note\":162,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":165,\"duration\":3,\"pitch\":-7,\"stem\":-1},{\"note\":165,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":168,\"duration\":3,\"pitch\":7,\"stem\":1},{\"note\":168,\"duration\":3,\"pitch\":3,\"stem\":-1},{\"note\":171,\"duration\":3,\"pitch\":7,\"stem\":1},{\"note\":171,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":174,\"duration\":3,\"pitch\":5,\"stem\":1},{\"note\":174,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":177,\"duration\":3,\"pitch\":5,\"stem\":1},{\"note\":177,\"duration\":3,\"pitch\":0,\"stem\":-1},{\"note\":180,\"duration\":3,\"pitch\":-2,\"stem\":-1},{\"note\":180,\"duration\":3,\"pitch\":3,\"stem\":1},{\"note\":183,\"duration\":3,\"pitch\":-2,\"stem\":-1},{\"note\":183,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":186,\"duration\":6,\"pitch\":5,\"stem\":1},{\"note\":186,\"duration\":6,\"pitch\":0,\"stem\":-1},{\"note\":192,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":193.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":195,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":196.5,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":198,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":199.5,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":201,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":202.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":204,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":205.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":207,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":208.5,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":210,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":211.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":213,\"duration\":3,\"pitch\":12,\"stem\":-1},{\"note\":216,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":217.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":219,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":220.5,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":222,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":223.5,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":225,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":226.5,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":228,\"duration\":1.5,\"pitch\":19,\"stem\":-1},{\"note\":229.5,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":231,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":232.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":234,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":235.5,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":237,\"duration\":3,\"pitch\":14,\"stem\":-1},{\"note\":240,\"duration\":6,\"pitch\":14,\"stem\":-1},{\"note\":276,\"words\":\"(cue-12)\"},{\"note\":276,\"duration\":3,\"pitch\":19,\"stem\":-1},{\"note\":279,\"duration\":2,\"pitch\":22,\"stem\":-1},{\"note\":281,\"duration\":1,\"pitch\":15,\"stem\":-1},{\"note\":282,\"duration\":6,\"pitch\":14,\"stem\":-1},{\"note\":297,\"duration\":3,\"pitch\":19,\"stem\":-1},{\"note\":300,\"duration\":2,\"pitch\":22,\"stem\":-1},{\"note\":302,\"duration\":1,\"pitch\":15,\"stem\":-1},{\"note\":303,\"duration\":3,\"pitch\":14,\"stem\":-1},{\"note\":306,\"duration\":6,\"pitch\":14,\"stem\":-1},{\"note\":330,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":330,\"words\":\"(off the string)\"},{\"note\":330,\"words\":\"(cue-96)\"},{\"note\":330.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":331,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":331.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":332,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":332.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":333,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":333.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":334,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":334.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":335,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":335.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":336,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":336.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":337,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":337.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":338,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":338.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":339,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":339.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":340,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":340.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":341,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":341.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":342,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":342.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":343,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":343.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":344,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":344.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":345,\"duration\":0.5,\"pitch\":-6,\"stem\":1},{\"note\":345,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":345.5,\"duration\":0.5,\"pitch\":-6,\"stem\":1},{\"note\":345.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":346,\"duration\":0.5,\"pitch\":-6,\"stem\":1},{\"note\":346,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":346.5,\"duration\":0.5,\"pitch\":-6,\"stem\":1},{\"note\":346.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":347,\"duration\":0.5,\"pitch\":-6,\"stem\":1},{\"note\":347,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":347.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":347.5,\"duration\":0.5,\"pitch\":-6,\"stem\":1},{\"note\":348,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":348,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":348.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":348.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":349,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":349,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":349.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":349.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":350,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":350,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":350.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":350.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":351,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":351,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":351.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":351.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":352,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":352,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":352.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":352.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":353,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":353,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":353.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":353.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":354,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":354,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":354.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":354.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":355,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":355,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":355.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":355.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":356,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":356,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":356.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":356.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":357,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":357,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":357.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":357.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":358,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":358,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":358.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":358.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":359,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":359,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":359.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":359.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":360,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":360,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":360.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":360.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":361,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":361,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":361.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":361.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":362,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":362,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":362.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":362.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":363,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":363,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":363.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":363.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":364,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":364,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":364.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":364.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":365,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":365,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":365.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":365.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":366,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":369,\"duration\":3,\"pitch\":5,\"stem\":-1},{\"note\":372,\"duration\":3,\"pitch\":5,\"stem\":-1},{\"note\":375,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":376.5,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":378,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":381,\"duration\":3,\"pitch\":5,\"stem\":-1},{\"note\":384,\"duration\":1,\"pitch\":2,\"stem\":-1},{\"note\":385,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":386,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":387,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":388,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":389,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":390,\"duration\":3,\"pitch\":3,\"stem\":-1},{\"note\":393,\"duration\":3,\"pitch\":5,\"stem\":-1},{\"note\":396,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":402,\"duration\":3,\"pitch\":12,\"stem\":-1},{\"note\":405,\"duration\":3,\"pitch\":14,\"stem\":-1},{\"note\":408,\"duration\":6,\"pitch\":15,\"stem\":-1},{\"note\":414,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":415.5,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":416,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":417,\"duration\":3,\"pitch\":15,\"stem\":-1},{\"note\":420,\"duration\":6,\"pitch\":19,\"stem\":-1},{\"note\":426,\"duration\":6,\"pitch\":22,\"stem\":-1},{\"note\":432,\"duration\":6,\"pitch\":22,\"stem\":-1},{\"note\":444,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":444,\"words\":\"(cue)\"},{\"note\":444.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":445,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":445.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":446,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":446.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":447,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":447.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":448,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":448.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":449,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":449.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":504,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":507,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":509,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":510,\"duration\":6,\"pitch\":-2,\"stem\":1},{\"note\":529,\"duration\":2,\"pitch\":-2,\"stem\":1},{\"note\":529,\"duration\":2,\"pitch\":3,\"stem\":1},{\"note\":529,\"words\":\"(cue-15)\"},{\"note\":531,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":531,\"duration\":3,\"pitch\":3,\"stem\":1},{\"note\":535,\"duration\":2,\"pitch\":10,\"stem\":-1},{\"note\":535,\"duration\":2,\"pitch\":15,\"stem\":-1},{\"note\":537,\"duration\":3,\"pitch\":10,\"stem\":-1},{\"note\":537,\"duration\":3,\"pitch\":15,\"stem\":-1},{\"note\":558,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":561,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":564,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":567,\"duration\":3,\"pitch\":3,\"stem\":-1},{\"note\":570,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":570.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":571,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":571.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":572,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":572.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":573,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":573.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":574,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":574.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":575,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":575.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":576,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":576.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":577,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":577.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":578,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":578.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":579,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":579.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":580,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":580.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":581,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":581.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":582,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":582.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":583,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":583.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":584,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":584.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":585,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":585.5,\"duration\":0.5,\"pitch\":14,\"stem\":-1},{\"note\":586,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":586.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":587,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":587.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":588,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":588.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":589,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":589.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":590,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":590.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":591,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":591.5,\"duration\":0.5,\"pitch\":15,\"stem\":-1},{\"note\":592,\"duration\":0.5,\"pitch\":10,\"stem\":-1},{\"note\":592.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":593,\"duration\":0.5,\"pitch\":7,\"stem\":-1},{\"note\":593.5,\"duration\":0.5,\"pitch\":9,\"stem\":-1},{\"note\":594,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":595.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":597,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":598.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":600,\"duration\":6,\"pitch\":14,\"stem\":-1},{\"note\":606,\"words\":\"(cue)\"},{\"note\":606,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":607.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":609,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":610.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":612,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":613.5,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":615,\"duration\":3,\"pitch\":12,\"stem\":-1},{\"note\":618,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":619.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":621,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":622.5,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":624,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":625.5,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":627,\"duration\":3,\"pitch\":19,\"stem\":-1},{\"note\":630,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":631.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":633,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":634.5,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":636,\"duration\":6,\"pitch\":12,\"stem\":-1},{\"note\":642,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":643.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":645,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":646.5,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":648,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":649.5,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":651,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":652.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":654,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":655.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":657,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":658.5,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":660,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":661.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":663,\"duration\":3,\"pitch\":12,\"stem\":-1},{\"note\":666,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":667.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":669,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":670.5,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":672,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":673.5,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":675,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":676.5,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":678,\"duration\":1.5,\"pitch\":19,\"stem\":-1},{\"note\":679.5,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":681,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":682.5,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":684,\"duration\":1.5,\"pitch\":17,\"stem\":-1},{\"note\":685.5,\"duration\":1.5,\"pitch\":12,\"stem\":-1},{\"note\":687,\"duration\":3,\"pitch\":14,\"stem\":-1},{\"note\":690,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":691.5,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":693,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":694.5,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":696,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":697.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":699,\"duration\":3,\"pitch\":10,\"stem\":-1},{\"note\":702,\"duration\":1.5,\"pitch\":14,\"stem\":-1},{\"note\":703.5,\"duration\":1.5,\"pitch\":10,\"stem\":-1},{\"note\":705,\"duration\":1.5,\"pitch\":15,\"stem\":-1},{\"note\":706.5,\"duration\":1.5,\"pitch\":19,\"stem\":-1},{\"note\":708,\"duration\":3,\"pitch\":22,\"stem\":-1},{\"note\":711,\"duration\":1,\"pitch\":19,\"stem\":-1},{\"note\":712,\"duration\":2,\"pitch\":24,\"stem\":-1}]},\"P29\":{\"id\":\"P29\",\"name\":\"Violin 1 DIV\",\"measureCount\":119,\"notes\":[{\"note\":33,\"duration\":0.25,\"pitch\":-5,\"stem\":-1},{\"note\":33.25,\"duration\":0.25,\"pitch\":-3,\"stem\":-1},{\"note\":33.5,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":33.75,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":34,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":34.25,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":34.5,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":34.75,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":35,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":35.25,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":35.5,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":35.75,\"duration\":0.25,\"pitch\":-3,\"stem\":-1},{\"note\":36,\"duration\":0.25,\"pitch\":-5,\"stem\":-1},{\"note\":36.25,\"duration\":0.25,\"pitch\":-3,\"stem\":-1},{\"note\":36.5,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":36.75,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":37,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":37.25,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":37.5,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":37.75,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":38,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":38.25,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":38.5,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":38.75,\"duration\":0.25,\"pitch\":-3,\"stem\":-1},{\"note\":39,\"duration\":0.25,\"pitch\":-5,\"stem\":-1},{\"note\":39.25,\"duration\":0.25,\"pitch\":-3,\"stem\":-1},{\"note\":39.5,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":39.75,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":40,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":40.25,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":40.5,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":40.75,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":41,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":41.25,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":41.5,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":41.75,\"duration\":0.25,\"pitch\":-3,\"stem\":-1},{\"note\":42,\"duration\":0.25,\"pitch\":-5,\"stem\":-1},{\"note\":42.25,\"duration\":0.25,\"pitch\":-3,\"stem\":-1},{\"note\":42.5,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":42.75,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":43,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":43.25,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":43.5,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":43.75,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":44,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":44.25,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":44.5,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":44.75,\"duration\":0.25,\"pitch\":-3,\"stem\":-1},{\"note\":45,\"duration\":0.25,\"pitch\":-5,\"stem\":-1},{\"note\":45.25,\"duration\":0.25,\"pitch\":-3,\"stem\":-1},{\"note\":45.5,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":45.75,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":46,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":46.25,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":46.5,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":46.75,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":47,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":47.25,\"duration\":0.25,\"pitch\":2,\"stem\":-1},{\"note\":47.5,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":47.75,\"duration\":0.25,\"pitch\":-3,\"stem\":-1},{\"note\":48,\"duration\":0.25,\"pitch\":-5,\"stem\":-1},{\"note\":48.25,\"duration\":0.25,\"pitch\":-3,\"stem\":-1},{\"note\":48.5,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":48.75,\"duration\":0.25,\"pitch\":3,\"stem\":-1},{\"note\":49,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":49.25,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":49.5,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":49.75,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":50,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":50.25,\"duration\":0.25,\"pitch\":3,\"stem\":-1},{\"note\":50.5,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":50.75,\"duration\":0.25,\"pitch\":-3,\"stem\":-1},{\"note\":51,\"duration\":0.25,\"pitch\":-5,\"stem\":-1},{\"note\":51.25,\"duration\":0.25,\"pitch\":-3,\"stem\":-1},{\"note\":51.5,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":51.75,\"duration\":0.25,\"pitch\":3,\"stem\":-1},{\"note\":52,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":52.25,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":52.5,\"duration\":0.25,\"pitch\":10,\"stem\":-1},{\"note\":52.75,\"duration\":0.25,\"pitch\":9,\"stem\":-1},{\"note\":53,\"duration\":0.25,\"pitch\":7,\"stem\":-1},{\"note\":53.25,\"duration\":0.25,\"pitch\":3,\"stem\":-1},{\"note\":53.5,\"duration\":0.25,\"pitch\":-2,\"stem\":-1},{\"note\":53.75,\"duration\":0.25,\"pitch\":-3,\"stem\":-1},{\"note\":54,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":54.2708,\"duration\":0.2708,\"pitch\":14,\"stem\":-1},{\"note\":54.5417,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":54.8125,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":55.0833,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":55.3542,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":55.625,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":55.8958,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":56.1667,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":56.4375,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":56.7083,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":56.9792,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":57.25,\"duration\":0.2708,\"pitch\":14,\"stem\":-1},{\"note\":57.5208,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":57.7917,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":58.0625,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":58.3333,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":58.6042,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":58.875,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":59.1458,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":59.4167,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":59.6875,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":60,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":60.2708,\"duration\":0.2708,\"pitch\":14,\"stem\":-1},{\"note\":60.5417,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":60.8125,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":61.0833,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":61.3542,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":61.625,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":61.8958,\"duration\":1.0917,\"pitch\":2,\"stem\":-1},{\"note\":73,\"duration\":2,\"pitch\":0,\"stem\":1},{\"note\":73,\"duration\":2,\"pitch\":-5,\"stem\":1},{\"note\":75,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":75,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":79,\"duration\":2,\"pitch\":12,\"stem\":-1},{\"note\":79,\"duration\":2,\"pitch\":7,\"stem\":-1},{\"note\":81,\"duration\":3,\"pitch\":12,\"stem\":-1},{\"note\":81,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":85,\"duration\":2,\"pitch\":3,\"stem\":1},{\"note\":85,\"duration\":2,\"pitch\":-2,\"stem\":1},{\"note\":87,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":87,\"duration\":3,\"pitch\":3,\"stem\":1},{\"note\":91,\"duration\":2,\"pitch\":15,\"stem\":-1},{\"note\":91,\"duration\":2,\"pitch\":10,\"stem\":-1},{\"note\":93,\"duration\":3,\"pitch\":10,\"stem\":-1},{\"note\":93,\"duration\":3,\"pitch\":15,\"stem\":-1},{\"note\":97,\"duration\":2,\"pitch\":7,\"stem\":-1},{\"note\":97,\"duration\":2,\"pitch\":12,\"stem\":-1},{\"note\":99,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":99,\"duration\":3,\"pitch\":12,\"stem\":-1},{\"note\":103,\"duration\":2,\"pitch\":3,\"stem\":1},{\"note\":103,\"duration\":2,\"pitch\":-2,\"stem\":1},{\"note\":105,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":105,\"duration\":3,\"pitch\":3,\"stem\":1},{\"note\":270,\"duration\":6,\"pitch\":15,\"stem\":-1},{\"note\":270,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":276,\"duration\":6,\"pitch\":15,\"stem\":-1},{\"note\":276,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":282,\"duration\":6,\"pitch\":15,\"stem\":-1},{\"note\":282,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":288,\"duration\":3,\"pitch\":8,\"stem\":-1},{\"note\":288,\"duration\":3,\"pitch\":3,\"stem\":-1},{\"note\":291,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":291,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":294,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":294,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":300,\"duration\":3,\"pitch\":12,\"stem\":-1},{\"note\":300,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":303,\"duration\":3,\"pitch\":10,\"stem\":-1},{\"note\":303,\"duration\":3,\"pitch\":15,\"stem\":-1},{\"note\":306,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":306,\"duration\":6,\"pitch\":15,\"stem\":-1},{\"note\":312,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":312,\"duration\":6,\"pitch\":15,\"stem\":-1},{\"note\":318,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":318,\"duration\":6,\"pitch\":15,\"stem\":-1},{\"note\":366,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":366,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":366.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":366.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":367,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":367,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":367.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":367.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":368,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":368,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":368.5,\"duration\":0.5,\"pitch\":0,\"stem\":1},{\"note\":368.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":369,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":369,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":369.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":369.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":370,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":370,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":370.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":370.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":371,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":371,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":371.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":371.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":372,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":372,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":372.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":372.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":373,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":373,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":373.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":373.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":374,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":374,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":374.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":374.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":375,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":375,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":375.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":375.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":376,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":376,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":376.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":376.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":377,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":377,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":377.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":377.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":378,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":378,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":378.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":378.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":379,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":379,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":379.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":379.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":380,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":380,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":380.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":380.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":381,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":381,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":381.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":381.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":382,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":382,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":382.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":382.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":383,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":383,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":383.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":383.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":384,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":384,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":384.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":384.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":385,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":385,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":385.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":385.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":386,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":386,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":386.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":386.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":387,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":387,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":387.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":387.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":388,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":388,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":388.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":388.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":389,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":389,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":389.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":389.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":390,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":390.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":391,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":391.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":392,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":392.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":393,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":393.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":394,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":394.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":395,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":395.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":396,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":396.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":397,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":397.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":398,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":398.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":399,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":399.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":400,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":400.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":401,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":401.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":402,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":402.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":403,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":403.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":404,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":404.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":405,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":405.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":406,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":406.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":407,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":407.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":408,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":408.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":409,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":409.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":410,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":410.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":411,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":411.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":412,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":412.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":413,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":413.5,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":495,\"duration\":3,\"pitch\":10,\"stem\":-1},{\"note\":495,\"duration\":3,\"pitch\":15,\"stem\":-1},{\"note\":498,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":498,\"duration\":6,\"pitch\":15,\"stem\":-1},{\"note\":504,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":504,\"duration\":6,\"pitch\":15,\"stem\":-1},{\"note\":510,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":510,\"duration\":6,\"pitch\":15,\"stem\":-1}]},\"P30\":{\"id\":\"P30\",\"name\":\"Violin II\",\"measureCount\":119,\"notes\":[{\"note\":18,\"duration\":6,\"pitch\":-5,\"stem\":1},{\"note\":18,\"duration\":6,\"pitch\":0,\"stem\":1},{\"note\":24,\"duration\":6,\"pitch\":0,\"stem\":1},{\"note\":24,\"duration\":6,\"pitch\":-5,\"stem\":1},{\"note\":30,\"words\":\"(cue-33)\"},{\"note\":30,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":30.2708,\"duration\":0.2708,\"pitch\":14,\"stem\":-1},{\"note\":30.5417,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":30.8125,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":31.0833,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":31.3542,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":31.625,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":31.8958,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":32.1667,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":32.4375,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":32.7083,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":32.9792,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":33.25,\"duration\":0.2708,\"pitch\":14,\"stem\":-1},{\"note\":33.5208,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":33.7917,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":34.0625,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":34.3333,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":34.6042,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":34.875,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":35.1458,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":35.4167,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":35.6875,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":36,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":36.2708,\"duration\":0.2708,\"pitch\":14,\"stem\":-1},{\"note\":36.5417,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":36.8125,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":37.0833,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":37.3542,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":37.625,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":37.8958,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":38.1667,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":38.4375,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":38.7083,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":38.9792,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":39.25,\"duration\":0.2708,\"pitch\":14,\"stem\":-1},{\"note\":39.5208,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":39.7917,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":40.0625,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":40.3333,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":40.6042,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":40.875,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":41.1458,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":41.4167,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":41.6875,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":42,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":42.2708,\"duration\":0.2708,\"pitch\":14,\"stem\":-1},{\"note\":42.5417,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":42.8125,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":43.0833,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":43.3542,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":43.625,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":43.8958,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":44.1667,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":44.4375,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":44.7083,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":44.9792,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":45.25,\"duration\":0.2708,\"pitch\":14,\"stem\":-1},{\"note\":45.5208,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":45.7917,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":46.0625,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":46.3333,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":46.6042,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":46.875,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":47.1458,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":47.4167,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":47.6875,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":48,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":48.2708,\"duration\":0.2708,\"pitch\":15,\"stem\":-1},{\"note\":48.5417,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":48.8125,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":49.0833,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":49.3542,\"duration\":0.2708,\"pitch\":3,\"stem\":-1},{\"note\":49.625,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":49.8958,\"duration\":0.2708,\"pitch\":3,\"stem\":-1},{\"note\":50.1667,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":50.4375,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":50.7083,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":50.9792,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":51.25,\"duration\":0.2708,\"pitch\":15,\"stem\":-1},{\"note\":51.5208,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":51.7917,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":52.0625,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":52.3333,\"duration\":0.2708,\"pitch\":3,\"stem\":-1},{\"note\":52.6042,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":52.875,\"duration\":0.2708,\"pitch\":3,\"stem\":-1},{\"note\":53.1458,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":53.4167,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":53.6875,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":54,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":54.2708,\"duration\":0.2708,\"pitch\":14,\"stem\":-1},{\"note\":54.5417,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":54.8125,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":55.0833,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":55.3542,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":55.625,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":55.8958,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":56.1667,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":56.4375,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":56.7083,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":56.9792,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":57.25,\"duration\":0.2708,\"pitch\":14,\"stem\":-1},{\"note\":57.5208,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":57.7917,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":58.0625,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":58.3333,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":58.6042,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":58.875,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":59.1458,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":59.4167,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":59.6875,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":60,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":60.2708,\"duration\":0.2708,\"pitch\":14,\"stem\":-1},{\"note\":60.5417,\"duration\":0.2708,\"pitch\":10,\"stem\":-1},{\"note\":60.8125,\"duration\":0.2708,\"pitch\":9,\"stem\":-1},{\"note\":61.0833,\"duration\":0.2708,\"pitch\":7,\"stem\":-1},{\"note\":61.3542,\"duration\":0.2708,\"pitch\":2,\"stem\":-1},{\"note\":61.625,\"duration\":0.2708,\"pitch\":-2,\"stem\":-1},{\"note\":61.8958,\"duration\":1.0917,\"pitch\":2,\"stem\":-1},{\"note\":102,\"duration\":6,\"pitch\":10,\"stem\":-1,\"isTremelo\":true},{\"note\":108,\"duration\":6,\"pitch\":10,\"stem\":-1,\"isTremelo\":true},{\"note\":114,\"duration\":6,\"pitch\":10,\"stem\":-1,\"isTremelo\":true},{\"note\":132,\"duration\":6,\"pitch\":-5,\"stem\":1,\"isTremelo\":true},{\"note\":132,\"duration\":6,\"pitch\":-10,\"stem\":-1,\"isTremelo\":true},{\"note\":138,\"duration\":3,\"pitch\":-5,\"stem\":1,\"isTremelo\":true},{\"note\":138,\"duration\":3,\"pitch\":-9,\"stem\":-1,\"isTremelo\":true},{\"note\":141,\"duration\":3,\"pitch\":-5,\"stem\":-1,\"isTremelo\":true},{\"note\":141,\"duration\":3,\"pitch\":-2,\"stem\":1,\"isTremelo\":true},{\"note\":144,\"words\":\"(cue-102)\"},{\"note\":144,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":147,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":150,\"duration\":6,\"pitch\":-10,\"stem\":1},{\"note\":156,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":159,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":162,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":165,\"duration\":3,\"pitch\":-12,\"stem\":1},{\"note\":168,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":171,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":174,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":177,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":180,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":183,\"duration\":3,\"pitch\":-7,\"stem\":1},{\"note\":186,\"duration\":6,\"pitch\":-3,\"stem\":1},{\"note\":193,\"duration\":1,\"pitch\":12,\"stem\":-1},{\"note\":194,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":195,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":196,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":197,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":199,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":200,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":201,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":202,\"duration\":1,\"pitch\":2,\"stem\":-1},{\"note\":203,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":205,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":206,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":207,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":208,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":209,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":210,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":211,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":212,\"duration\":1,\"pitch\":2,\"stem\":-1},{\"note\":213,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":214,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":215,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":217,\"duration\":1,\"pitch\":12,\"stem\":-1},{\"note\":218,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":219,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":220,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":221,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":223,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":224,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":225,\"duration\":2,\"pitch\":7,\"stem\":-1},{\"note\":227,\"duration\":1,\"pitch\":2,\"stem\":-1},{\"note\":228,\"duration\":1,\"pitch\":3,\"stem\":-1},{\"note\":229,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":230,\"duration\":1,\"pitch\":9,\"stem\":-1},{\"note\":231,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":232,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":233,\"duration\":1,\"pitch\":2,\"stem\":-1},{\"note\":235,\"duration\":1,\"pitch\":2,\"stem\":-1},{\"note\":236,\"duration\":1,\"pitch\":5,\"stem\":-1},{\"note\":237,\"duration\":1,\"pitch\":6,\"stem\":1},{\"note\":238,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":239,\"duration\":1,\"pitch\":-3,\"stem\":1},{\"note\":240,\"duration\":1,\"pitch\":2,\"stem\":1},{\"note\":241,\"duration\":1,\"pitch\":-3,\"stem\":1},{\"note\":242,\"duration\":1,\"pitch\":-6,\"stem\":1},{\"note\":243,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":261,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":261,\"words\":\"(cue-23)\"},{\"note\":264,\"duration\":6,\"pitch\":3,\"stem\":-1},{\"note\":270,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":276,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":282,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":288,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":291,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":294,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":297,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":330,\"words\":\"(off the string)\"},{\"note\":330,\"words\":\"(cue-96)\"},{\"note\":330,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":330.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":331,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":331.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":332,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":332.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":333,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":333.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":334,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":334.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":335,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":335.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":336,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":336.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":337,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":337.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":338,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":338.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":339,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":339.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":340,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":340.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":341,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":341.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":342,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":342.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":343,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":343.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":344,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":344.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":345,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":345.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":346,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":346.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":347,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":347.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":348,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":348.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":349,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":349.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":350,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":350.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":351,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":351.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":352,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":352.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":353,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":353.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":354,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":354.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":355,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":355.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":356,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":356.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":357,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":357.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":358,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":358.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":359,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":359.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":360,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":360.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":361,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":361.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":362,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":362.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":363,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":363.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":364,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":364.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":365,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":365.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":366,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":366.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":367,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":367.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":368,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":368.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":369,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":369.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":370,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":370.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":371,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":371.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":372,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":372.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":373,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":373.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":374,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":374.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":375,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":375.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":376,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":376.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":377,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":377.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":378,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":378.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":379,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":379.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":380,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":380.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":381,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":381.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":382,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":382.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":383,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":383.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":384,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":384.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":385,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":385.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":386,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":386.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":387,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":387.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":388,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":388.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":389,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":389.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":390,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":393,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":396,\"duration\":6,\"pitch\":-2,\"stem\":1},{\"note\":402,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":405,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":408,\"duration\":1.5,\"pitch\":3,\"stem\":-1},{\"note\":409.5,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":411,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":412.5,\"duration\":1.5,\"pitch\":9,\"stem\":-1},{\"note\":414,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":414,\"duration\":3,\"pitch\":10,\"stem\":-1},{\"note\":417,\"duration\":3,\"pitch\":10,\"stem\":-1},{\"note\":417,\"duration\":3,\"pitch\":7,\"stem\":-1,\"isTremelo\":true},{\"note\":420,\"duration\":6,\"pitch\":10,\"stem\":-1,\"isTremelo\":true},{\"note\":420,\"duration\":6,\"pitch\":14,\"stem\":-1},{\"note\":426,\"duration\":6,\"pitch\":14,\"stem\":-1,\"isTremelo\":true},{\"note\":426,\"duration\":6,\"pitch\":19,\"stem\":-1},{\"note\":504,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":507,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":509,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":510,\"duration\":6,\"pitch\":-5,\"stem\":1},{\"note\":529,\"duration\":2,\"pitch\":-5,\"stem\":1},{\"note\":529,\"words\":\"(cue-15)\"},{\"note\":529,\"duration\":2,\"pitch\":0,\"stem\":1},{\"note\":531,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":531,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":535,\"duration\":2,\"pitch\":12,\"stem\":-1},{\"note\":535,\"duration\":2,\"pitch\":7,\"stem\":-1},{\"note\":537,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":537,\"duration\":3,\"pitch\":12,\"stem\":-1},{\"note\":546,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":546,\"words\":\"(cue-162)\"},{\"note\":549,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":552,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":555,\"duration\":3,\"pitch\":-12,\"stem\":1},{\"note\":558,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":561,\"duration\":3,\"pitch\":-7,\"stem\":1},{\"note\":564,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":567,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":570,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":570.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":571,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":571.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":572,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":572.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":573,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":573.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":574,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":574.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":575,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":575.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":576,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":576.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":577,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":577.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":578,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":578.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":579,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":579.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":580,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":580.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":581,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":581.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":582,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":582.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":583,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":583.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":584,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":584.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":585,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":585.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":586,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":586.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":587,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":587.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":588,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":588.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":589,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":589.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":590,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":590.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":591,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":591.5,\"duration\":0.5,\"pitch\":3,\"stem\":1},{\"note\":592,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":592.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":593,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":593.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":594,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":595.5,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":597,\"duration\":1.5,\"pitch\":3,\"stem\":-1},{\"note\":598.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":600,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":606,\"words\":\"(cue)\"},{\"note\":606,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":607.5,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":609,\"duration\":1.5,\"pitch\":3,\"stem\":-1},{\"note\":610.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":612,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":613.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":615,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":618,\"duration\":1.5,\"pitch\":3,\"stem\":-1},{\"note\":619.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":621,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":622.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":624,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":625.5,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":627,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":630,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":631.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":633,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":634.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":636,\"duration\":6,\"pitch\":0,\"stem\":1},{\"note\":642,\"duration\":1.5,\"pitch\":3,\"stem\":-1},{\"note\":643.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":645,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":646.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":648,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":649.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":651,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":652.5,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":654,\"duration\":1.5,\"pitch\":3,\"stem\":-1},{\"note\":655.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":657,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":658.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":660,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":661.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":663,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":666,\"duration\":1.5,\"pitch\":3,\"stem\":-1},{\"note\":667.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":669,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":670.5,\"duration\":1.5,\"pitch\":-2,\"stem\":1},{\"note\":672,\"duration\":1.5,\"pitch\":2,\"stem\":1},{\"note\":673.5,\"duration\":1.5,\"pitch\":0,\"stem\":1},{\"note\":675,\"duration\":1.5,\"pitch\":0,\"stem\":-1},{\"note\":676.5,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":678,\"duration\":1.5,\"pitch\":7,\"stem\":-1},{\"note\":679.5,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":681,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":682.5,\"duration\":1.5,\"pitch\":2,\"stem\":-1},{\"note\":684,\"duration\":1.5,\"pitch\":5,\"stem\":-1},{\"note\":685.5,\"duration\":1.5,\"pitch\":0,\"stem\":-1},{\"note\":687,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":690,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":690.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":691,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":691.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":692,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":693,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":693.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":694,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":694.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":695,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":696,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":696.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":697,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":697.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":698,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":699,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":700,\"duration\":1,\"pitch\":-3,\"stem\":1},{\"note\":701,\"duration\":1,\"pitch\":-5,\"stem\":1},{\"note\":702,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":702.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":703,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":703.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":704,\"duration\":1,\"pitch\":-2,\"stem\":1},{\"note\":705,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":705.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":706,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":706.5,\"duration\":0.5,\"pitch\":2,\"stem\":1},{\"note\":707,\"duration\":0.5,\"pitch\":-2,\"stem\":1},{\"note\":707.5,\"duration\":0.5,\"pitch\":-3,\"stem\":1},{\"note\":708,\"duration\":1,\"pitch\":7,\"stem\":-1},{\"note\":709,\"duration\":1,\"pitch\":10,\"stem\":-1},{\"note\":710,\"duration\":1,\"pitch\":14,\"stem\":-1},{\"note\":711,\"duration\":1,\"pitch\":16,\"stem\":-1},{\"note\":712,\"duration\":2,\"pitch\":19,\"stem\":-1}]},\"P31\":{\"id\":\"P31\",\"name\":\"Violin II DIV\",\"measureCount\":119,\"notes\":[{\"note\":73,\"words\":\"(cue-36)\"},{\"note\":73,\"duration\":2,\"pitch\":-10,\"stem\":1},{\"note\":73,\"duration\":2,\"pitch\":-5,\"stem\":1},{\"note\":75,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":75,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":79,\"duration\":2,\"pitch\":3,\"stem\":-1},{\"note\":79,\"duration\":2,\"pitch\":8,\"stem\":-1},{\"note\":81,\"duration\":2,\"pitch\":3,\"stem\":-1},{\"note\":81,\"duration\":2,\"pitch\":8,\"stem\":-1},{\"note\":85,\"duration\":2,\"pitch\":0,\"stem\":1},{\"note\":85,\"duration\":2,\"pitch\":-5,\"stem\":1},{\"note\":87,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":87,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":91,\"duration\":2,\"pitch\":12,\"stem\":-1},{\"note\":91,\"duration\":2,\"pitch\":7,\"stem\":-1},{\"note\":93,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":93,\"duration\":3,\"pitch\":12,\"stem\":-1},{\"note\":97,\"duration\":2,\"pitch\":8,\"stem\":-1},{\"note\":97,\"duration\":2,\"pitch\":3,\"stem\":-1},{\"note\":99,\"duration\":3,\"pitch\":3,\"stem\":-1},{\"note\":99,\"duration\":3,\"pitch\":8,\"stem\":-1},{\"note\":103,\"duration\":2,\"pitch\":-5,\"stem\":1},{\"note\":103,\"duration\":2,\"pitch\":0,\"stem\":1},{\"note\":105,\"duration\":3,\"pitch\":-5,\"stem\":1},{\"note\":105,\"duration\":3,\"pitch\":0,\"stem\":1},{\"note\":288,\"duration\":3,\"pitch\":-3,\"stem\":1},{\"note\":288,\"duration\":3,\"pitch\":2,\"stem\":1},{\"note\":291,\"duration\":3,\"pitch\":3,\"stem\":1},{\"note\":291,\"duration\":3,\"pitch\":-2,\"stem\":1},{\"note\":294,\"duration\":6,\"pitch\":-2,\"stem\":1},{\"note\":294,\"duration\":6,\"pitch\":3,\"stem\":1},{\"note\":300,\"duration\":3,\"pitch\":8,\"stem\":-1},{\"note\":300,\"duration\":3,\"pitch\":3,\"stem\":-1},{\"note\":303,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":303,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":306,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":306,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":312,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":312,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":318,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":318,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":390,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":390.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":391,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":391.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":392,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":392.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":393,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":393.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":394,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":394.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":395,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":395.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":396,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":396.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":397,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":397.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":398,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":398.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":399,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":399.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":400,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":400.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":401,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":401.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":402,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":402.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":403,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":403.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":404,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":404.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":405,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":405.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":406,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":406.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":407,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":407.5,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":408,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":408.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":409,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":409.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":410,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":410.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":411,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":411.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":412,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":412.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":413,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":413.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":690,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":690.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":691,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":691.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":692,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":692.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":693,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":693.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":694,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":694.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":695,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":695.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":696,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":696.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":697,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":697.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":698,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":698.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":699,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":699.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":700,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":700.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":701,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":701.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":702,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":702.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":703,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":703.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":704,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":704.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":705,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":705.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":706,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":706.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":707,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":707.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":708,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":708.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":709,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":709.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":710,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":710.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":711,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":711.5,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":712,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":712.5,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":713,\"duration\":0.5,\"pitch\":4,\"stem\":-1},{\"note\":713.5,\"duration\":0.5,\"pitch\":4,\"stem\":-1}]},\"P32\":{\"id\":\"P32\",\"name\":\"Viola\",\"measureCount\":119,\"notes\":[{\"note\":36,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":36.3,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":36.6,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":36.9,\"duration\":0.3,\"pitch\":2,\"stem\":-1},{\"note\":37.2,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":37.5,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":37.8,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":38.1,\"duration\":0.3,\"pitch\":-10,\"stem\":-1},{\"note\":38.4,\"duration\":0.3,\"pitch\":-14,\"stem\":-1},{\"note\":38.7,\"duration\":0.3,\"pitch\":-10,\"stem\":-1},{\"note\":39,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":39.3,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":39.6,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":39.9,\"duration\":0.3,\"pitch\":2,\"stem\":-1},{\"note\":40.2,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":40.5,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":40.8,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":41.1,\"duration\":0.3,\"pitch\":-10,\"stem\":-1},{\"note\":41.4,\"duration\":0.3,\"pitch\":-14,\"stem\":-1},{\"note\":41.7,\"duration\":0.3,\"pitch\":-10,\"stem\":-1},{\"note\":42,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":42.3,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":42.6,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":42.9,\"duration\":0.3,\"pitch\":2,\"stem\":-1},{\"note\":43.2,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":43.5,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":43.8,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":44.1,\"duration\":0.3,\"pitch\":-10,\"stem\":-1},{\"note\":44.4,\"duration\":0.3,\"pitch\":-14,\"stem\":-1},{\"note\":44.7,\"duration\":0.3,\"pitch\":-10,\"stem\":-1},{\"note\":45,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":45.3,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":45.6,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":45.9,\"duration\":0.3,\"pitch\":2,\"stem\":-1},{\"note\":46.2,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":46.5,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":46.8,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":47.1,\"duration\":0.3,\"pitch\":-10,\"stem\":-1},{\"note\":47.4,\"duration\":0.3,\"pitch\":-14,\"stem\":-1},{\"note\":47.7,\"duration\":0.3,\"pitch\":-10,\"stem\":-1},{\"note\":48,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":48.3,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":48.6,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":48.9,\"duration\":0.3,\"pitch\":3,\"stem\":-1},{\"note\":49.2,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":49.5,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":49.8,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":50.1,\"duration\":0.3,\"pitch\":-9,\"stem\":-1},{\"note\":50.4,\"duration\":0.3,\"pitch\":-14,\"stem\":-1},{\"note\":50.7,\"duration\":0.3,\"pitch\":-9,\"stem\":-1},{\"note\":51,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":51.3,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":51.6,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":51.9,\"duration\":0.3,\"pitch\":3,\"stem\":-1},{\"note\":52.2,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":52.5,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":52.8,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":53.1,\"duration\":0.3,\"pitch\":-9,\"stem\":-1},{\"note\":53.4,\"duration\":0.3,\"pitch\":-14,\"stem\":-1},{\"note\":53.7,\"duration\":0.3,\"pitch\":-9,\"stem\":-1},{\"note\":54,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":54.3,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":54.6,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":54.9,\"duration\":0.3,\"pitch\":2,\"stem\":-1},{\"note\":55.2,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":55.5,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":55.8,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":56.1,\"duration\":0.3,\"pitch\":-10,\"stem\":-1},{\"note\":56.4,\"duration\":0.3,\"pitch\":-14,\"stem\":-1},{\"note\":56.7,\"duration\":0.3,\"pitch\":-10,\"stem\":-1},{\"note\":57,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":57.3,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":57.6,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":57.9,\"duration\":0.3,\"pitch\":2,\"stem\":-1},{\"note\":58.2,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":58.5,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":58.8,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":59.1,\"duration\":0.3,\"pitch\":-10,\"stem\":-1},{\"note\":59.4,\"duration\":0.3,\"pitch\":-14,\"stem\":-1},{\"note\":59.7,\"duration\":0.3,\"pitch\":-10,\"stem\":-1},{\"note\":60,\"duration\":0.3,\"pitch\":-5,\"stem\":-1},{\"note\":60.3,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":60.6,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":60.9,\"duration\":0.3,\"pitch\":2,\"stem\":-1},{\"note\":61.2,\"duration\":0.3,\"pitch\":-2,\"stem\":-1},{\"note\":61.5,\"duration\":0.3,\"pitch\":-3,\"stem\":-1},{\"note\":61.8,\"duration\":1.2,\"pitch\":-5,\"stem\":-1},{\"note\":108,\"words\":\"(cue-24)\"},{\"note\":108,\"duration\":6,\"pitch\":-5,\"stem\":1},{\"note\":108,\"duration\":6,\"pitch\":-10,\"stem\":-1},{\"note\":114,\"duration\":6,\"pitch\":-9,\"stem\":-1},{\"note\":114,\"duration\":6,\"pitch\":-5,\"stem\":1},{\"note\":126,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":126.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":127,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":127.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":128,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":128.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":129,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":129.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":130,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":130.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":131,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":131.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":132,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":144,\"words\":\"(cue-102)\"},{\"note\":144,\"words\":\"(off the string)\"},{\"note\":144,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":144.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":145,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":145,\"words\":\"(mf if needed)\"},{\"note\":145.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":146,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":146.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":147,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":147.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":148,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":148.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":149,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":149.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":150,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":150.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":151,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":151.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":152,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":152.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":153,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":153.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":154,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":154.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":155,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":155.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":156,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":156.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":157,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":157.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":158,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":158.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":159,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":159.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":160,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":160.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":161,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":161.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":162,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":162.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":163,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":163.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":164,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":164.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":165,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":165.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":166,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":166.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":167,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":167.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":168,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":168.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":169,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":169.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":170,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":170.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":171,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":171.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":172,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":172.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":173,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":173.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":174,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":174.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":175,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":175.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":176,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":176.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":177,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":177.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":178,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":178.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":179,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":179.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":180,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":180.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":181,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":181.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":182,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":182.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":183,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":183.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":184,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":184.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":185,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":185.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":186,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":186.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":187,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":187.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":188,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":188.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":189,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":189.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":190,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":190.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":191,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":191.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":192,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":192.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":193,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":193.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":194,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":194.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":195,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":195.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":196,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":196.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":197,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":197.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":198,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":198.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":199,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":199.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":200,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":200.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":201,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":201.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":202,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":202.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":203,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":203.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":204,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":204.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":205,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":205.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":206,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":206.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":207,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":207.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":208,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":208.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":209,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":209.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":210,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":210.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":211,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":211.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":212,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":212.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":213,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":213.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":214,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":214.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":215,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":215.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":216,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":216.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":217,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":217.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":218,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":218.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":219,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":219.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":220,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":220.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":221,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":221.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":222,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":222.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":223,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":223.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":224,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":224.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":225,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":225.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":226,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":226.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":227,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":227.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":228,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":228.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":229,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":229.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":230,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":230.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":231,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":231.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":232,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":232.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":233,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":233.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":234,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":234.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":235,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":235.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":236,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":236.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":237,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":237.5,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":238,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":238.5,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":239,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":239.5,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":240,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":240.5,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":241,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":241.5,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":242,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":242.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":243,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":243.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":244,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":244.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":245,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":245.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":264,\"duration\":6,\"pitch\":-5,\"stem\":1},{\"note\":266,\"words\":\"(     )\"},{\"note\":266,\"duration\":2,\"pitch\":-2},{\"note\":276,\"duration\":6,\"pitch\":-5,\"stem\":1},{\"note\":278,\"words\":\"(     )\"},{\"note\":278,\"duration\":2,\"pitch\":-2},{\"note\":291,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":291,\"words\":\"(cue-27)\"},{\"note\":291,\"duration\":3,\"pitch\":-2,\"stem\":-1,\"isTremelo\":true},{\"note\":294,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":294,\"duration\":6,\"pitch\":-2,\"stem\":-1,\"isTremelo\":true},{\"note\":300,\"duration\":3,\"pitch\":-2,\"stem\":-1,\"isTremelo\":true},{\"note\":300,\"duration\":3,\"pitch\":3,\"stem\":-1},{\"note\":303,\"duration\":3,\"pitch\":-2,\"stem\":-1,\"isTremelo\":true},{\"note\":303,\"duration\":3,\"pitch\":2,\"stem\":-1},{\"note\":306,\"duration\":6,\"pitch\":-2,\"stem\":-1,\"isTremelo\":true},{\"note\":306,\"duration\":6,\"pitch\":2,\"stem\":-1},{\"note\":312,\"duration\":6,\"pitch\":-2,\"stem\":-1,\"isTremelo\":true},{\"note\":312,\"duration\":6,\"pitch\":3,\"stem\":-1},{\"note\":330,\"words\":\"(off the string)\"},{\"note\":330,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":330,\"words\":\"(cue-96)\"},{\"note\":330.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":331,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":331.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":332,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":332.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":333,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":333.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":334,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":334.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":335,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":335.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":336,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":336.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":337,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":337.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":338,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":338.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":339,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":339.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":340,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":340.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":341,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":341.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":342,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":342.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":343,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":343.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":344,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":344.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":345,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":345.5,\"duration\":0.5,\"pitch\":-18,\"stem\":1},{\"note\":346,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":346.5,\"duration\":0.5,\"pitch\":-18,\"stem\":1},{\"note\":347,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":347.5,\"duration\":0.5,\"pitch\":-18,\"stem\":1},{\"note\":348,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":348.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":349,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":349.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":350,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":350.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":351,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":351.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":352,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":352.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":353,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":353.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":354,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":354.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":355,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":355.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":356,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":356.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":357,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":357.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":358,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":358.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":359,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":359.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":360,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":360.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":361,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":361.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":362,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":362.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":363,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":363.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":364,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":364.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":365,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":365.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":366,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":366.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":367,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":367.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":368,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":368.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":369,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":369.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":370,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":370.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":371,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":371.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":372,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":372.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":373,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":373.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":374,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":374.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":375,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":375.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":376,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":376.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":377,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":377.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":378,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":378.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":379,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":379.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":380,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":380.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":381,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":381.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":382,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":382.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":383,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":383.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":384,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":384.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":385,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":385.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":386,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":386.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":387,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":387.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":388,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":388.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":389,\"duration\":0.5,\"pitch\":-7,\"stem\":1},{\"note\":389.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":390,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":390.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":391,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":391.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":392,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":392.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":393,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":393.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":394,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":394.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":395,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":395.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":396,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":396.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":397,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":397.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":398,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":398.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":399,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":399.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":400,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":400.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":401,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":401.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":402,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":402.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":403,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":403.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":404,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":404.5,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":405,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":405.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":406,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":406.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":407,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":407.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":408,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":408.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":409,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":409.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":410,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":410.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":411,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":411.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":412,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":412.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":413,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":413.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":417,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":417,\"duration\":3,\"pitch\":3,\"stem\":-1,\"isTremelo\":true},{\"note\":420,\"duration\":6,\"pitch\":3,\"stem\":-1,\"isTremelo\":true},{\"note\":420,\"duration\":6,\"pitch\":7,\"stem\":-1},{\"note\":426,\"duration\":6,\"pitch\":7,\"stem\":-1,\"isTremelo\":true},{\"note\":426,\"duration\":6,\"pitch\":10,\"stem\":-1},{\"note\":504,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":507,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":509,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":510,\"duration\":6,\"pitch\":-9,\"stem\":-1},{\"note\":528,\"duration\":6,\"pitch\":-10,\"stem\":1},{\"note\":534,\"duration\":6,\"pitch\":-9,\"stem\":-1},{\"note\":546,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":549,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":552,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":555,\"duration\":3,\"pitch\":-15,\"stem\":1},{\"note\":558,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":558,\"words\":\"(cue-150)\"},{\"note\":558.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":559,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":559.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":560,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":561,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":561.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":562,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":562.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":563,\"duration\":1,\"pitch\":-14,\"stem\":1},{\"note\":564,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":564.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":565,\"duration\":0.5,\"pitch\":-12,\"stem\":1},{\"note\":565.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":566,\"duration\":1,\"pitch\":-12,\"stem\":1},{\"note\":567,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":567.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":568,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":568.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":569,\"duration\":1,\"pitch\":-9,\"stem\":-1},{\"note\":570,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":570.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":571,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":571.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":572,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":572.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":573,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":573.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":574,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":574.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":575,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":575.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":576,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":576.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":577,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":577.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":578,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":578.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":579,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":579.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":580,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":580.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":581,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":581.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":582,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":582.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":583,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":583.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":584,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":584.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":585,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":585.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":586,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":586.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":587,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":587.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":588,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":588.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":589,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":589.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":590,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":590.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":591,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":591.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":592,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":592.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":593,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":593.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":594,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":594.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":595,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":595.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":596,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":596.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":597,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":597.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":598,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":598.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":599,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":599.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":600,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":600.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":601,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":601.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":602,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":602.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":603,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":603.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":604,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":604.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":605,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":605.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":606,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":606.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":607,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":607.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":608,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":608.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":609,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":609.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":610,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":610.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":611,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":611.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":612,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":612.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":613,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":613.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":614,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":614.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":615,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":615.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":616,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":616.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":617,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":617.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":618,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":618.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":619,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":619.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":620,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":620.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":621,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":621.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":622,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":622.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":623,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":623.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":624,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":624.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":625,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":625.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":626,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":626.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":627,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":627.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":628,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":628.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":629,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":629.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":630,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":630.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":631,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":631.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":632,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":632.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":633,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":633.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":634,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":634.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":635,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":635.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":636,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":636.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":637,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":637.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":638,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":638.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":639,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":639.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":640,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":640.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":641,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":641.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":642,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":642.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":643,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":643.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":644,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":644.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":645,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":645.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":646,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":646.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":647,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":647.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":648,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":648.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":649,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":649.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":650,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":650.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":651,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":651.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":652,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":652.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":653,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":653.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":654,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":654.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":655,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":655.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":656,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":656.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":657,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":657.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":658,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":658.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":659,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":659.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":660,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":660.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":661,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":661.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":662,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":662.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":663,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":663.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":664,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":664.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":665,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":665.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":666,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":666.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":667,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":667.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":668,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":668.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":669,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":669.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":670,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":670.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":671,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":671.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":672,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":672.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":673,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":673.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":674,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":674.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":675,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":675.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":676,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":676.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":677,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":677.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":678,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":678.5,\"duration\":0.5,\"pitch\":3,\"stem\":-1},{\"note\":679,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":679.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":680,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":680.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":681,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":681.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":682,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":682.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":683,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":683.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":684,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":684.5,\"duration\":0.5,\"pitch\":5,\"stem\":-1},{\"note\":685,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":685.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":686,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":686.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":687,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":687.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":688,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":688.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":689,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":689.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":690,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":690,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":690.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":690.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":691,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":691,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":691.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":691.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":692,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":692,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":692.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":692.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":693,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":693,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":693.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":693.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":694,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":694,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":694.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":694.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":695,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":695,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":695.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":695.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":696,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":696,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":696.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":696.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":697,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":697,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":697.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":697.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":698,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":698,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":698.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":698.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":699,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":699,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":699.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":699.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":700,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":700,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":700.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":700.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":701,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":701,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":701.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":701.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":702,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":702,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":702.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":702.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":703,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":703,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":703.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":703.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":704,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":704,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":704.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":704.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":705,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":705,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":705.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":705.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":706,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":706,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":706.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":706.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":707,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":707,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":707.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":707.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":708,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":708,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":708.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":708.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":709,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":709,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":709.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":709.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":710,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":710,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":710.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":710.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":711,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":711,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":711.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":711.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":712,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":712,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":712.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":712.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":713,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":713,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":713.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":713.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1}]},\"P33\":{\"id\":\"P33\",\"name\":\"Viola DIV\",\"measureCount\":119,\"notes\":[{\"note\":690,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":690.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":691,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":691.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":692,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":693,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":693.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":694,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":694.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":695,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":696,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":696.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":697,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":697.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":698,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":699,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":700,\"duration\":1,\"pitch\":-3,\"stem\":-1},{\"note\":701,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":702,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":702.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":703,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":703.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":704,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":705,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":705.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1},{\"note\":706,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":706.5,\"duration\":0.5,\"pitch\":2,\"stem\":-1},{\"note\":707,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":707.5,\"duration\":0.5,\"pitch\":-3,\"stem\":-1}]},\"P34\":{\"id\":\"P34\",\"name\":\"Cello\",\"measureCount\":119,\"notes\":[{\"note\":30,\"words\":\"(cue-33)\"},{\"note\":30,\"duration\":3,\"pitch\":-5,\"stem\":-1,\"isTremelo\":true},{\"note\":33,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":33,\"duration\":1,\"pitch\":-14,\"stem\":-1,\"isTremelo\":true},{\"note\":34,\"duration\":1,\"pitch\":-10,\"stem\":-1,\"isTremelo\":true},{\"note\":34,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":35,\"duration\":1,\"pitch\":-14,\"stem\":-1,\"isTremelo\":true},{\"note\":35,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":36,\"duration\":1,\"pitch\":-10,\"stem\":-1,\"isTremelo\":true},{\"note\":36,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":37,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":37,\"duration\":1,\"pitch\":-14,\"stem\":-1,\"isTremelo\":true},{\"note\":38,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":38,\"duration\":1,\"pitch\":-10,\"stem\":-1,\"isTremelo\":true},{\"note\":39,\"duration\":1,\"pitch\":-14,\"stem\":-1,\"isTremelo\":true},{\"note\":39,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":40,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":40,\"duration\":1,\"pitch\":-10,\"stem\":-1,\"isTremelo\":true},{\"note\":41,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":41,\"duration\":1,\"pitch\":-14,\"stem\":-1,\"isTremelo\":true},{\"note\":42,\"duration\":1,\"pitch\":-10,\"stem\":-1,\"isTremelo\":true},{\"note\":42,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":43,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":43,\"duration\":1,\"pitch\":-14,\"stem\":-1,\"isTremelo\":true},{\"note\":44,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":44,\"duration\":1,\"pitch\":-10,\"stem\":-1,\"isTremelo\":true},{\"note\":45,\"duration\":1,\"pitch\":-14,\"stem\":-1,\"isTremelo\":true},{\"note\":45,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":46,\"duration\":1,\"pitch\":-10,\"stem\":-1,\"isTremelo\":true},{\"note\":46,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":47,\"duration\":1,\"pitch\":-14,\"stem\":-1,\"isTremelo\":true},{\"note\":47,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":48,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":48,\"duration\":1,\"pitch\":-9,\"stem\":-1,\"isTremelo\":true},{\"note\":49,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":49,\"duration\":1,\"pitch\":-14,\"stem\":-1,\"isTremelo\":true},{\"note\":50,\"duration\":1,\"pitch\":-9,\"stem\":-1,\"isTremelo\":true},{\"note\":50,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":51,\"duration\":1,\"pitch\":-14,\"stem\":-1,\"isTremelo\":true},{\"note\":51,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":52,\"duration\":1,\"pitch\":-9,\"stem\":-1,\"isTremelo\":true},{\"note\":52,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":53,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":53,\"duration\":1,\"pitch\":-14,\"stem\":-1,\"isTremelo\":true},{\"note\":54,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":54,\"duration\":1,\"pitch\":-10,\"stem\":-1,\"isTremelo\":true},{\"note\":55,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":55,\"duration\":1,\"pitch\":-14,\"stem\":-1,\"isTremelo\":true},{\"note\":56,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":56,\"duration\":1,\"pitch\":-10,\"stem\":-1,\"isTremelo\":true},{\"note\":57,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":57,\"duration\":1,\"pitch\":-14,\"stem\":-1,\"isTremelo\":true},{\"note\":58,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":58,\"duration\":1,\"pitch\":-10,\"stem\":-1,\"isTremelo\":true},{\"note\":59,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":59,\"duration\":1,\"pitch\":-14,\"stem\":-1,\"isTremelo\":true},{\"note\":60,\"duration\":3,\"pitch\":-10,\"stem\":-1,\"isTremelo\":true},{\"note\":60,\"duration\":3,\"pitch\":-2,\"stem\":-1},{\"note\":108,\"words\":\"(cue-12)\"},{\"note\":108,\"duration\":6,\"pitch\":-17,\"stem\":-1},{\"note\":114,\"words\":\"(lightly)\"},{\"note\":114,\"duration\":1,\"pitch\":-17,\"stem\":-1},{\"note\":115,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":116,\"duration\":1,\"pitch\":-10,\"stem\":-1},{\"note\":117,\"duration\":1,\"pitch\":-9,\"stem\":-1},{\"note\":118,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":119,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":132,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":132.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":133,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":133.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":134,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":134.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":135,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":135.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":136,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":136.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":137,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":137.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":138,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":144,\"words\":\"arco\"},{\"note\":144,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":144,\"words\":\"Div.\"},{\"note\":144,\"words\":\"(cue-102)\"},{\"note\":144,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":147,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":147,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":150,\"duration\":6,\"pitch\":-10,\"stem\":-1},{\"note\":150,\"duration\":6,\"pitch\":-17,\"stem\":-1},{\"note\":156,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":156,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":159,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":159,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":162,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":162,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":165,\"duration\":3,\"pitch\":-15,\"stem\":1},{\"note\":165,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":168,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":168,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":171,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":171,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":174,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":174,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":177,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":177,\"duration\":3,\"pitch\":-15,\"stem\":1},{\"note\":180,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":180,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":183,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":183,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":186,\"duration\":6,\"pitch\":-24,\"stem\":1},{\"note\":186,\"duration\":6,\"pitch\":-15,\"stem\":1},{\"note\":192,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":192,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":195,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":195,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":198,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":198,\"duration\":3,\"pitch\":-15,\"stem\":1},{\"note\":201,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":201,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":204,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":204,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":207,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":207,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":210,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":210,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":213,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":213,\"duration\":3,\"pitch\":-15,\"stem\":1},{\"note\":216,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":216,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":219,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":219,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":222,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":222,\"duration\":3,\"pitch\":-15,\"stem\":1},{\"note\":225,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":225,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":228,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":228,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":231,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":231,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":234,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":234,\"duration\":3,\"pitch\":-15,\"stem\":1},{\"note\":237,\"duration\":3,\"pitch\":-15,\"stem\":-1},{\"note\":237,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":240,\"duration\":6,\"pitch\":-22,\"stem\":-1},{\"note\":240,\"duration\":6,\"pitch\":-15,\"stem\":-1},{\"note\":270,\"duration\":6,\"pitch\":-29,\"stem\":1},{\"note\":276,\"duration\":6,\"pitch\":-29,\"stem\":1},{\"note\":282,\"words\":\"(cue-48)\"},{\"note\":282,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":285,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":288,\"duration\":3,\"pitch\":-15,\"stem\":-1},{\"note\":291,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":294,\"duration\":6,\"pitch\":-17,\"stem\":-1},{\"note\":300,\"duration\":3,\"pitch\":-21,\"stem\":1},{\"note\":303,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":306,\"duration\":6,\"pitch\":-29,\"stem\":1},{\"note\":312,\"duration\":6,\"pitch\":-29,\"stem\":1},{\"note\":318,\"duration\":6,\"pitch\":-29,\"stem\":1},{\"note\":324,\"duration\":6,\"pitch\":-29,\"stem\":1},{\"note\":330,\"words\":\"(cue-96)\"},{\"note\":330,\"words\":\"(off the string)\"},{\"note\":330,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":330.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":331,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":331.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":332,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":332.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":333,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":333.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":334,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":334.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":335,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":335.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":336,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":336.5,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":337,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":337.5,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":338,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":338.5,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":339,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":339.5,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":340,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":340.5,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":341,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":341.5,\"duration\":0.5,\"pitch\":-21,\"stem\":1},{\"note\":342,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":342.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":343,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":343.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":344,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":344.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":345,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":345,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":345.5,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":345.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":346,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":346,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":346.5,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":346.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":347,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":347,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":347.5,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":347.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":348,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":348,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":348.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":348.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":349,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":349,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":349.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":349.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":350,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":350,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":350.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":350.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":351,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":351,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":351.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":351.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":352,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":352,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":352.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":352.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":353,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":353,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":353.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":353.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":354,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":354,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":354.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":354.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":355,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":355,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":355.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":355.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":356,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":356,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":356.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":356.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":357,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":357,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":357.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":357.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":358,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":358,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":358.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":358.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":359,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":359,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":359.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":359.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":360,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":360,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":360.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":360.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":361,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":361,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":361.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":361.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":362,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":362,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":362.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":362.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":363,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":363,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":363.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":363.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":364,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":364,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":364.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":364.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":365,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":365,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":365.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":365.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":366,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":366,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":366.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":366.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":367,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":367,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":367.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":367.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":368,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":368,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":368.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":368.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":369,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":369,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":369.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":369.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":370,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":370,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":370.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":370.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":371,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":371,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":371.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":371.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":372,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":372,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":372.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":372.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":373,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":373,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":373.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":373.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":374,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":374,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":374.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":374.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":375,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":375,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":375.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":375.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":376,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":376,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":376.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":376.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":377,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":377,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":377.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":377.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":378,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":378,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":378.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":378.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":379,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":379,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":379.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":379.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":380,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":380,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":380.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":380.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":381,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":381,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":381.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":381.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":382,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":382,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":382.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":382.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":383,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":383,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":383.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":383.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":384,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":384,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":384.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":384.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":385,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":385,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":385.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":385.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":386,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":386,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":386.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":386.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":387,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":387,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":387.5,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":387.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":388,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":388,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":388.5,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":388.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":389,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":389,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":389.5,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":389.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":390,\"words\":\"(solo)\"},{\"note\":390,\"duration\":1.5,\"pitch\":-22,\"stem\":1},{\"note\":391.5,\"duration\":1.5,\"pitch\":-21,\"stem\":1},{\"note\":393,\"duration\":1.5,\"pitch\":-14,\"stem\":-1},{\"note\":394.5,\"duration\":1.5,\"pitch\":-19,\"stem\":-1},{\"note\":396,\"duration\":1.5,\"pitch\":-17,\"stem\":-1},{\"note\":397.5,\"duration\":1.5,\"pitch\":-15,\"stem\":-1},{\"note\":399,\"duration\":1.5,\"pitch\":-14,\"stem\":-1},{\"note\":400.5,\"duration\":1.5,\"pitch\":-12,\"stem\":-1},{\"note\":402,\"duration\":1.5,\"pitch\":-10,\"stem\":-1},{\"note\":403.5,\"duration\":1.5,\"pitch\":-9,\"stem\":-1},{\"note\":405,\"duration\":1.5,\"pitch\":-2,\"stem\":-1},{\"note\":406.5,\"duration\":1.5,\"pitch\":-7,\"stem\":-1},{\"note\":408,\"duration\":1.5,\"pitch\":-5,\"stem\":-1},{\"note\":409.5,\"duration\":1.5,\"pitch\":-3,\"stem\":-1},{\"note\":411,\"duration\":1.5,\"pitch\":-2,\"stem\":-1},{\"note\":412.5,\"duration\":1.5,\"pitch\":0,\"stem\":-1},{\"note\":420,\"duration\":6,\"pitch\":-26,\"stem\":1},{\"note\":420,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":426,\"duration\":6,\"pitch\":-14,\"stem\":-1},{\"note\":426,\"duration\":6,\"pitch\":-22,\"stem\":-1},{\"note\":450,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":450.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":451,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":451.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":452,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":452.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":453,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":453.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":454,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":454.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":455,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":455.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":459,\"words\":\"pizz.\"},{\"note\":459,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":462,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":465,\"duration\":3,\"pitch\":-21,\"stem\":1},{\"note\":468,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":471,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":474,\"duration\":3,\"pitch\":-21,\"stem\":1},{\"note\":477,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":480,\"duration\":1,\"pitch\":-33,\"stem\":1},{\"note\":481,\"duration\":1,\"pitch\":-33,\"stem\":1},{\"note\":482,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":483,\"duration\":1,\"pitch\":-21,\"stem\":-1},{\"note\":484,\"duration\":1,\"pitch\":-9,\"stem\":-1},{\"note\":485,\"duration\":1,\"pitch\":-9,\"stem\":-1},{\"note\":486,\"duration\":2,\"pitch\":-21,\"stem\":1},{\"note\":488,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":489,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":490,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":491,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":492,\"duration\":1.5,\"pitch\":-33,\"stem\":-1},{\"note\":492,\"duration\":1.5,\"pitch\":-21,\"stem\":1},{\"note\":493.5,\"duration\":1.5,\"pitch\":-21,\"stem\":1},{\"note\":493.5,\"duration\":1.5,\"pitch\":-33,\"stem\":-1},{\"note\":495,\"duration\":3,\"pitch\":-21,\"stem\":1},{\"note\":495,\"duration\":3,\"pitch\":-33,\"stem\":-1},{\"note\":498,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":501,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":504,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":507,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":546,\"words\":\"arco\"},{\"note\":546,\"words\":\"(cue-162)\"},{\"note\":546,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":546,\"duration\":3,\"pitch\":-22,\"stem\":1},{\"note\":549,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":549,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":552,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":552,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":555,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":558,\"duration\":3,\"pitch\":-19,\"stem\":1},{\"note\":558,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":561,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":561,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":564,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":564,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":567,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":567,\"duration\":3,\"pitch\":-21,\"stem\":-1},{\"note\":570,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":570.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":571,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":571.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":572,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":572.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":573,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":573.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":574,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":574.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":575,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":575.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":576,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":576.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":577,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":577.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":578,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":578.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":579,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":579.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":580,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":580.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":581,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":581.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":582,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":582.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":583,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":583.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":584,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":584.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":585,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":585.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":586,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":586.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":587,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":587.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":588,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":588.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":589,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":589.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":590,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":590.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":591,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":591.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":592,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":592.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":593,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":593.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":594,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":594,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":597,\"duration\":3,\"pitch\":-12,\"stem\":-1},{\"note\":597,\"duration\":3,\"pitch\":-21,\"stem\":-1},{\"note\":600,\"duration\":6,\"pitch\":-22,\"stem\":-1},{\"note\":600,\"duration\":6,\"pitch\":-14,\"stem\":-1},{\"note\":606,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":606,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":609,\"duration\":3,\"pitch\":-21,\"stem\":-1},{\"note\":609,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":612,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":612,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":615,\"duration\":3,\"pitch\":-15,\"stem\":1},{\"note\":615,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":618,\"duration\":3,\"pitch\":-21,\"stem\":-1},{\"note\":618,\"duration\":3,\"pitch\":-12,\"stem\":-1},{\"note\":621,\"duration\":3,\"pitch\":-19,\"stem\":1},{\"note\":621,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":624,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":624,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":627,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":627,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":630,\"duration\":6,\"pitch\":-19,\"stem\":-1},{\"note\":630,\"duration\":6,\"pitch\":-10,\"stem\":-1},{\"note\":636,\"duration\":2,\"pitch\":-12,\"stem\":-1},{\"note\":636,\"duration\":2,\"pitch\":-19,\"stem\":-1},{\"note\":638,\"duration\":1,\"pitch\":-19,\"stem\":-1},{\"note\":639,\"duration\":1,\"pitch\":-15,\"stem\":-1},{\"note\":640,\"duration\":1,\"pitch\":-17,\"stem\":-1},{\"note\":641,\"duration\":1,\"pitch\":-19,\"stem\":-1},{\"note\":642,\"duration\":3,\"pitch\":-21,\"stem\":-1},{\"note\":642,\"duration\":3,\"pitch\":-12,\"stem\":-1},{\"note\":645,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":645,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":648,\"duration\":3,\"pitch\":-15,\"stem\":-1},{\"note\":648,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":651,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":651,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":654,\"duration\":3,\"pitch\":-21,\"stem\":-1},{\"note\":654,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":657,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":657,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":660,\"duration\":2,\"pitch\":-19,\"stem\":-1},{\"note\":660,\"duration\":2,\"pitch\":-10,\"stem\":-1},{\"note\":662,\"duration\":1,\"pitch\":-19,\"stem\":-1},{\"note\":663,\"duration\":1,\"pitch\":-15,\"stem\":-1},{\"note\":664,\"duration\":1,\"pitch\":-17,\"stem\":-1},{\"note\":665,\"duration\":1,\"pitch\":-19,\"stem\":-1},{\"note\":666,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":666,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":669,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":669,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":672,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":672,\"duration\":3,\"pitch\":-15,\"stem\":-1},{\"note\":675,\"duration\":3,\"pitch\":-15,\"stem\":1},{\"note\":675,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":678,\"duration\":3,\"pitch\":-9,\"stem\":-1},{\"note\":678,\"duration\":3,\"pitch\":-17,\"stem\":-1},{\"note\":681,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":681,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":684,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":684,\"duration\":3,\"pitch\":-12,\"stem\":-1},{\"note\":687,\"duration\":3,\"pitch\":-18,\"stem\":-1},{\"note\":687,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":690,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":690,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":693,\"duration\":3,\"pitch\":-19,\"stem\":-1},{\"note\":693,\"duration\":3,\"pitch\":-10,\"stem\":-1},{\"note\":696,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":696,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":699,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":699,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":702,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":702,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":705,\"duration\":3,\"pitch\":-26,\"stem\":1},{\"note\":705,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":708,\"duration\":3,\"pitch\":-22,\"stem\":-1},{\"note\":708,\"duration\":3,\"pitch\":-14,\"stem\":-1},{\"note\":711,\"duration\":3,\"pitch\":-24,\"stem\":1},{\"note\":711,\"duration\":3,\"pitch\":-17,\"stem\":1}]},\"P35\":{\"id\":\"P35\",\"name\":\"Cello DIV\",\"measureCount\":119,\"notes\":[{\"note\":33,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":36,\"duration\":6,\"pitch\":-29,\"stem\":1},{\"note\":42,\"duration\":6,\"pitch\":-29,\"stem\":1},{\"note\":48,\"duration\":6,\"pitch\":-29,\"stem\":1},{\"note\":48,\"duration\":6,\"pitch\":-21,\"stem\":1},{\"note\":54,\"duration\":6,\"pitch\":-21,\"stem\":1},{\"note\":54,\"duration\":6,\"pitch\":-29,\"stem\":1},{\"note\":60,\"duration\":6,\"pitch\":-29,\"stem\":1},{\"note\":66,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":126,\"duration\":3,\"pitch\":-21,\"stem\":1},{\"note\":126,\"words\":\"pizz.\"},{\"note\":132,\"duration\":3,\"pitch\":-29,\"stem\":1},{\"note\":138,\"duration\":3,\"pitch\":-33,\"stem\":1},{\"note\":390,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":390.5,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":391,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":391.5,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":392,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":392.5,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":393,\"duration\":0.5,\"pitch\":-22,\"stem\":1},{\"note\":393.5,\"duration\":0.5,\"pitch\":-22,\"stem\":1},{\"note\":394,\"duration\":0.5,\"pitch\":-22,\"stem\":1},{\"note\":394.5,\"duration\":0.5,\"pitch\":-22,\"stem\":1},{\"note\":395,\"duration\":0.5,\"pitch\":-22,\"stem\":1},{\"note\":395.5,\"duration\":0.5,\"pitch\":-22,\"stem\":1},{\"note\":396,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":396,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":396.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":396.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":397,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":397,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":397.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":397.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":398,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":398,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":398.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":398.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":399,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":399,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":399.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":399.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":400,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":400,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":400.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":400.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":401,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":401,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":401.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":401.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":402,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":402,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":402.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":402.5,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":403,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":403,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":403.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":403.5,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":404,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":404,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":404.5,\"duration\":0.5,\"pitch\":-17,\"stem\":1},{\"note\":404.5,\"duration\":0.5,\"pitch\":-24,\"stem\":1},{\"note\":405,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":405,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":405.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":405.5,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":406,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":406,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":406.5,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":406.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":407,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":407,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":407.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":407.5,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":408,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":408,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":408.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":408.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":409,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":409,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":409.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":409.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":410,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":410,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":410.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":410.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":411,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":411,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":411.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":411.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":412,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":412,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":412.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":412.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":413,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":413,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":413.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":413.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":594,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":594.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":595,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":595.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":596,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":596.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":597,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":597.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":598,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":598.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":599,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":599.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":600,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":600.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":601,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":601.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":602,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":602.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":603,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":603.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":604,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":604.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":605,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":605.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":606,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":606.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":607,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":607.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":608,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":608.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":609,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":609.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":610,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":610.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":611,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":611.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":612,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":612.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":613,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":613.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":614,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":614.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":615,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":615.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":616,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":616.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":617,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":617.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":618,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":618.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":619,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":619.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":620,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":620.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":621,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":621.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":622,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":622.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":623,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":623.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":624,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":624.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":625,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":625.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":626,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":626.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":627,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":627.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":628,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":628.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":629,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":629.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":630,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":630.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":631,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":631.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":632,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":632.5,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":633,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":633.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":634,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":634.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":635,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":635.5,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":636,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":636.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":637,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":637.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":638,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":638.5,\"duration\":0.5,\"pitch\":-24,\"stem\":-1},{\"note\":639,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":639.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":640,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":640.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":641,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":641.5,\"duration\":0.5,\"pitch\":-24,\"stem\":-1},{\"note\":642,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":642.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":643,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":643.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":644,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":644.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":645,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":645.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":646,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":646.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":647,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":647.5,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":648,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":648.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":649,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":649.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":650,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":650.5,\"duration\":0.5,\"pitch\":-24,\"stem\":-1},{\"note\":651,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":651.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":652,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":652.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":653,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":653.5,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":654,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":654.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":655,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":655.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":656,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":656.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":657,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":657.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":658,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":658.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":659,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":659.5,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":660,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":660.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":661,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":661.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":662,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":662.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":663,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":663.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":664,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":664.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":665,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":665.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":666,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":666.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":667,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":667.5,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":668,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":668.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":669,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":669.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":670,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":670.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":671,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":671.5,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":672,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":672.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":673,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":673.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":674,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":674.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":675,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":675.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":676,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":676.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":677,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":677.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":678,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":678.5,\"duration\":0.5,\"pitch\":-9,\"stem\":-1},{\"note\":679,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":679.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":680,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":680.5,\"duration\":0.5,\"pitch\":-21,\"stem\":-1},{\"note\":681,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":681.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":682,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":682.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":683,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":683.5,\"duration\":0.5,\"pitch\":-22,\"stem\":-1},{\"note\":684,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":684.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":685,\"duration\":0.5,\"pitch\":-12,\"stem\":-1},{\"note\":685.5,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":686,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":686.5,\"duration\":0.5,\"pitch\":-19,\"stem\":-1},{\"note\":687,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":687.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":688,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":688.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":689,\"duration\":0.5,\"pitch\":-18,\"stem\":-1},{\"note\":689.5,\"duration\":0.5,\"pitch\":-17,\"stem\":-1},{\"note\":690,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":690.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":691,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":691.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":692,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":693,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":693.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":694,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":694.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":695,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":696,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":696.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":697,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":697.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":698,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":699,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":700,\"duration\":1,\"pitch\":-15,\"stem\":-1},{\"note\":701,\"duration\":1,\"pitch\":-17,\"stem\":-1},{\"note\":702,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":702.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":703,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":703.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":704,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":705,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":705.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":706,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":706.5,\"duration\":0.5,\"pitch\":-10,\"stem\":-1},{\"note\":707,\"duration\":0.5,\"pitch\":-14,\"stem\":-1},{\"note\":707.5,\"duration\":0.5,\"pitch\":-15,\"stem\":-1},{\"note\":708,\"duration\":1,\"pitch\":-14,\"stem\":-1},{\"note\":709,\"duration\":1,\"pitch\":-17,\"stem\":-1},{\"note\":710,\"duration\":1,\"pitch\":-22,\"stem\":-1},{\"note\":711,\"duration\":1,\"pitch\":-17,\"stem\":-1},{\"note\":712,\"duration\":2,\"pitch\":-8,\"stem\":-1}]},\"P36\":{\"id\":\"P36\",\"name\":\"Double Bass\",\"measureCount\":119,\"notes\":[{\"note\":33,\"words\":\"(cue-30))\"},{\"note\":33,\"duration\":3,\"pitch\":7,\"stem\":-1},{\"note\":36,\"duration\":6,\"pitch\":-5,\"stem\":-1},{\"note\":42,\"duration\":6,\"pitch\":-5,\"stem\":-1},{\"note\":48,\"duration\":6,\"pitch\":-9,\"stem\":1},{\"note\":48,\"duration\":6,\"pitch\":-21,\"stem\":-1},{\"note\":54,\"duration\":6,\"pitch\":-9,\"stem\":1},{\"note\":54,\"duration\":6,\"pitch\":-21,\"stem\":-1},{\"note\":60,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":66,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":126,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":126,\"words\":\"(cue-13)\"},{\"note\":126,\"words\":\"pizz.\"},{\"note\":132,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":138,\"duration\":3,\"pitch\":-21,\"stem\":1},{\"note\":144,\"words\":\"arco\"},{\"note\":144,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":144,\"words\":\"(cue-102)\"},{\"note\":147,\"duration\":3,\"pitch\":0,\"stem\":-1},{\"note\":150,\"duration\":6,\"pitch\":-5,\"stem\":-1},{\"note\":156,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":159,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":162,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":165,\"duration\":3,\"pitch\":-7,\"stem\":-1},{\"note\":168,\"duration\":3,\"pitch\":-12,\"stem\":1},{\"note\":171,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":174,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":177,\"duration\":3,\"pitch\":-7,\"stem\":-1},{\"note\":180,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":183,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":186,\"duration\":6,\"pitch\":-7,\"stem\":-1},{\"note\":192,\"duration\":3,\"pitch\":-12,\"stem\":1},{\"note\":195,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":198,\"duration\":3,\"pitch\":-7,\"stem\":-1},{\"note\":201,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":204,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":207,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":210,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":213,\"duration\":3,\"pitch\":-7,\"stem\":-1},{\"note\":216,\"duration\":3,\"pitch\":-12,\"stem\":1},{\"note\":219,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":222,\"duration\":3,\"pitch\":-7,\"stem\":-1},{\"note\":225,\"duration\":1.5,\"pitch\":-5,\"stem\":-1},{\"note\":226.5,\"duration\":1.5,\"pitch\":-7,\"stem\":-1},{\"note\":228,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":231,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":234,\"duration\":3,\"pitch\":-7,\"stem\":-1},{\"note\":237,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":240,\"duration\":6,\"pitch\":-10,\"stem\":1},{\"note\":270,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":276,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":282,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":294,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":300,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":306,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":312,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":318,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":324,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":342,\"words\":\"(off the string)\"},{\"note\":342,\"words\":\"(cue-84)\"},{\"note\":342,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":342.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":343,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":343.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":344,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":344.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":345,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":345.5,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":346,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":346.5,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":347,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":347.5,\"duration\":0.5,\"pitch\":-6,\"stem\":-1},{\"note\":348,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":348.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":349,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":349.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":350,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":350.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":351,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":351.5,\"duration\":0.5,\"pitch\":-5,\"stem\":1},{\"note\":352,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":352.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":353,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":353.5,\"duration\":0.5,\"pitch\":-15,\"stem\":1},{\"note\":354,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":354.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":355,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":355.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":356,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":356.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":357,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":357.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":358,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":358.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":359,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":359.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":360,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":360.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":361,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":361.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":362,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":362.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":363,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":363.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":364,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":364.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":365,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":365.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":366,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":366.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":367,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":367.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":368,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":368.5,\"duration\":0.5,\"pitch\":0,\"stem\":-1},{\"note\":369,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":369.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":370,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":370.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":371,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":371.5,\"duration\":0.5,\"pitch\":-2,\"stem\":-1},{\"note\":372,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":372.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":373,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":373.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":374,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":374.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":375,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":375.5,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":376,\"duration\":0.5,\"pitch\":-5,\"stem\":-1},{\"note\":376.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":377,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":377.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":378,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":378.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":379,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":379.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":380,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":380.5,\"duration\":0.5,\"pitch\":-9,\"stem\":1},{\"note\":381,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":381.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":382,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":382.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":383,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":383.5,\"duration\":0.5,\"pitch\":-14,\"stem\":1},{\"note\":384,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":384.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":385,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":385.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":386,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":386.5,\"duration\":0.5,\"pitch\":-10,\"stem\":1},{\"note\":387,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":387.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":388,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":388.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":389,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":389.5,\"duration\":0.5,\"pitch\":-7,\"stem\":-1},{\"note\":390,\"duration\":3,\"pitch\":-12,\"stem\":1},{\"note\":393,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":396,\"duration\":6,\"pitch\":-9,\"stem\":1},{\"note\":402,\"duration\":3,\"pitch\":-12,\"stem\":1},{\"note\":405,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":408,\"duration\":6,\"pitch\":-9,\"stem\":1},{\"note\":420,\"duration\":6,\"pitch\":-9,\"stem\":1},{\"note\":420,\"duration\":6,\"pitch\":-21,\"stem\":-1},{\"note\":426,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":456,\"words\":\"pizz.\"},{\"note\":456,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":459,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":462,\"duration\":3,\"pitch\":3,\"stem\":-1},{\"note\":465,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":468,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":471,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":474,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":477,\"duration\":3,\"pitch\":3,\"stem\":-1},{\"note\":480,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":481,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":482,\"duration\":1,\"pitch\":-9,\"stem\":1},{\"note\":483,\"duration\":1,\"pitch\":-9,\"stem\":1},{\"note\":484,\"duration\":1,\"pitch\":-9,\"stem\":1},{\"note\":485,\"duration\":1,\"pitch\":-9,\"stem\":1},{\"note\":486,\"duration\":2,\"pitch\":-21,\"stem\":1},{\"note\":488,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":489,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":490,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":491,\"duration\":1,\"pitch\":-21,\"stem\":1},{\"note\":492,\"duration\":1.5,\"pitch\":-21,\"stem\":1},{\"note\":493.5,\"duration\":1.5,\"pitch\":-21,\"stem\":1},{\"note\":495,\"duration\":3,\"pitch\":-21,\"stem\":1},{\"note\":498,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":501,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":504,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":507,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":558,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":558,\"words\":\"arco\"},{\"note\":561,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":564,\"duration\":2,\"pitch\":-12,\"stem\":1},{\"note\":566,\"duration\":1,\"pitch\":-10,\"stem\":1},{\"note\":567,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":582,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":588,\"duration\":6,\"pitch\":-9,\"stem\":1},{\"note\":588,\"duration\":6,\"pitch\":-21,\"stem\":-1},{\"note\":594,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":594,\"words\":\"(cue 114)\"},{\"note\":597,\"duration\":3,\"pitch\":-12,\"stem\":1},{\"note\":600,\"duration\":6,\"pitch\":-17,\"stem\":1},{\"note\":606,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":609,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":612,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":615,\"duration\":3,\"pitch\":-7,\"stem\":-1},{\"note\":618,\"duration\":3,\"pitch\":-12,\"stem\":1},{\"note\":621,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":624,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":627,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":630,\"duration\":6,\"pitch\":-14,\"stem\":1},{\"note\":636,\"duration\":6,\"pitch\":-7,\"stem\":-1},{\"note\":642,\"duration\":3,\"pitch\":-12,\"stem\":1},{\"note\":645,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":648,\"duration\":3,\"pitch\":-19,\"stem\":1},{\"note\":651,\"duration\":3,\"pitch\":-17,\"stem\":1},{\"note\":654,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":657,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":660,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":663,\"duration\":3,\"pitch\":-19,\"stem\":1},{\"note\":666,\"duration\":3,\"pitch\":-12,\"stem\":1},{\"note\":669,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":672,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":675,\"duration\":3,\"pitch\":-7,\"stem\":-1},{\"note\":678,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":681,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":684,\"duration\":3,\"pitch\":-19,\"stem\":1},{\"note\":687,\"duration\":3,\"pitch\":-10,\"stem\":1},{\"note\":690,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":693,\"duration\":3,\"pitch\":-14,\"stem\":1},{\"note\":696,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":699,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":702,\"duration\":3,\"pitch\":-5,\"stem\":-1},{\"note\":705,\"duration\":3,\"pitch\":-9,\"stem\":1},{\"note\":708,\"duration\":1,\"pitch\":-2,\"stem\":-1},{\"note\":709,\"duration\":1,\"pitch\":-5,\"stem\":-1},{\"note\":710,\"duration\":1,\"pitch\":-10,\"stem\":-1},{\"note\":711,\"duration\":3,\"pitch\":-12,\"stem\":1}]},\"P37\":{\"id\":\"P37\",\"name\":\"Biome\",\"measureCount\":119,\"notes\":[{\"note\":12,\"words\":\"(hall)\"},{\"note\":12,\"duration\":2,\"pitch\":null,\"stem\":-1},{\"note\":54,\"duration\":2,\"pitch\":null,\"stem\":-1},{\"note\":54,\"words\":\"(lake)\"},{\"note\":120,\"words\":\"(hall)\"},{\"note\":120,\"duration\":2,\"pitch\":null,\"stem\":-1},{\"note\":144,\"words\":\"(desert)\"},{\"note\":144,\"duration\":2,\"pitch\":null,\"stem\":-1},{\"note\":246,\"words\":\"(hall)\"},{\"note\":246,\"duration\":2,\"pitch\":null,\"stem\":-1},{\"note\":270,\"words\":\"(forest)\"},{\"note\":270,\"duration\":2,\"pitch\":null,\"stem\":-1},{\"note\":306,\"words\":\"(hall)\"},{\"note\":306,\"duration\":2,\"pitch\":null,\"stem\":-1},{\"note\":342,\"words\":\"(mountain)\"},{\"note\":342,\"duration\":2,\"pitch\":null,\"stem\":-1},{\"note\":432,\"words\":\"(hall)\"},{\"note\":432,\"duration\":2,\"pitch\":null,\"stem\":-1},{\"note\":444,\"words\":\"(bus)\"},{\"note\":444,\"duration\":2,\"pitch\":null,\"stem\":-1},{\"note\":516,\"words\":\"(bookstore)\"},{\"note\":516,\"duration\":2,\"pitch\":null,\"stem\":-1},{\"note\":582,\"words\":\"(hall)\"},{\"note\":582,\"duration\":2,\"pitch\":null,\"stem\":-1},{\"note\":594,\"words\":\"(recap)\"},{\"note\":594,\"duration\":2,\"pitch\":null,\"stem\":-1}]}}}");

/***/ }),

/***/ "./src/tracks/main/track-interactives.ts":
/*!***********************************************!*\
  !*** ./src/tracks/main/track-interactives.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.interactives = void 0;
var interactive_instrument_1 = __webpack_require__(/*! ../../interactive-instrument */ "./src/interactive-instrument.ts");
var instrumentsection_svg_path_path_bass_svg_path_as_graphics_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrumentsection.svg?path=path#bass&svg-path-as-graphics */ "./assets/images/instrumentsection.svg?path=path#bass&svg-path-as-graphics"));
var instrumentsection_svg_path_path_brass_svg_path_as_graphics_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrumentsection.svg?path=path#brass&svg-path-as-graphics */ "./assets/images/instrumentsection.svg?path=path#brass&svg-path-as-graphics"));
var instrumentsection_svg_path_path_cello_svg_path_as_graphics_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrumentsection.svg?path=path#cello&svg-path-as-graphics */ "./assets/images/instrumentsection.svg?path=path#cello&svg-path-as-graphics"));
var instrumentsection_svg_path_path_harp_svg_path_as_graphics_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrumentsection.svg?path=path#harp&svg-path-as-graphics */ "./assets/images/instrumentsection.svg?path=path#harp&svg-path-as-graphics"));
var instrumentsection_svg_path_path_horn_svg_path_as_graphics_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrumentsection.svg?path=path#horn&svg-path-as-graphics */ "./assets/images/instrumentsection.svg?path=path#horn&svg-path-as-graphics"));
var instrumentsection_svg_path_path_percussion_svg_path_as_graphics_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrumentsection.svg?path=path#percussion&svg-path-as-graphics */ "./assets/images/instrumentsection.svg?path=path#percussion&svg-path-as-graphics"));
var instrumentsection_svg_path_path_piano_svg_path_as_graphics_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrumentsection.svg?path=path#piano&svg-path-as-graphics */ "./assets/images/instrumentsection.svg?path=path#piano&svg-path-as-graphics"));
var instrumentsection_svg_path_path_viola_svg_path_as_graphics_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrumentsection.svg?path=path#viola&svg-path-as-graphics */ "./assets/images/instrumentsection.svg?path=path#viola&svg-path-as-graphics"));
var instrumentsection_svg_path_path_violin_1_svg_path_as_graphics_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrumentsection.svg?path=path#violin-1&svg-path-as-graphics */ "./assets/images/instrumentsection.svg?path=path#violin-1&svg-path-as-graphics"));
var instrumentsection_svg_path_path_violin_2_svg_path_as_graphics_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrumentsection.svg?path=path#violin-2&svg-path-as-graphics */ "./assets/images/instrumentsection.svg?path=path#violin-2&svg-path-as-graphics"));
var instrumentsection_svg_path_path_woodwind_svg_path_as_graphics_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrumentsection.svg?path=path#woodwind&svg-path-as-graphics */ "./assets/images/instrumentsection.svg?path=path#woodwind&svg-path-as-graphics"));
var score_export_json_1 = __webpack_require__(/*! ./score-export.json */ "./src/tracks/main/score-export.json");
var insicon_bass_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrument-icons/insicon_bass.svg */ "./assets/images/instrument-icons/insicon_bass.svg"));
var insicon_brass_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrument-icons/insicon_brass.svg */ "./assets/images/instrument-icons/insicon_brass.svg"));
var insicon_cello_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrument-icons/insicon_cello.svg */ "./assets/images/instrument-icons/insicon_cello.svg"));
var insicon_clarinet_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrument-icons/insicon_clarinet.svg */ "./assets/images/instrument-icons/insicon_clarinet.svg"));
var insicon_cymbals_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrument-icons/insicon_cymbals.svg */ "./assets/images/instrument-icons/insicon_cymbals.svg"));
var insicon_flute_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrument-icons/insicon_flute.svg */ "./assets/images/instrument-icons/insicon_flute.svg"));
var insicon_harp_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrument-icons/insicon_harp.svg */ "./assets/images/instrument-icons/insicon_harp.svg"));
var insicon_horn_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrument-icons/insicon_horn.svg */ "./assets/images/instrument-icons/insicon_horn.svg"));
var insicon_keyboard_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrument-icons/insicon_keyboard.svg */ "./assets/images/instrument-icons/insicon_keyboard.svg"));
var insicon_oboe_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrument-icons/insicon_oboe.svg */ "./assets/images/instrument-icons/insicon_oboe.svg"));
var insicon_string_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrument-icons/insicon_string.svg */ "./assets/images/instrument-icons/insicon_string.svg"));
var insicon_tamtam_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrument-icons/insicon_tamtam.svg */ "./assets/images/instrument-icons/insicon_tamtam.svg"));
var insicon_timpani_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrument-icons/insicon_timpani.svg */ "./assets/images/instrument-icons/insicon_timpani.svg"));
var insicon_trumpet_svg_1 = __importDefault(__webpack_require__(/*! ../../../assets/images/instrument-icons/insicon_trumpet.svg */ "./assets/images/instrument-icons/insicon_trumpet.svg"));
var instrument_motion_fn_1 = __webpack_require__(/*! ./instrument-motion-fn */ "./src/tracks/main/instrument-motion-fn.ts");
// P1: Flute 1, 2
// P2: Oboe
// P3: English Horn (Optional)
// P4: Clarinet in Bb 1, 2
// P5: Bass Clarinet
// P6: Bassoon 1, 2
// P7: Contrabassoon (Optional)
// P8: Horn in F 1, 2
// P9: Horn in F 3 (&amp; 4)
// P10: Trumpet in Bb 1, 2
// P11: Trumpet in Bb 3
// P12: Trombone
// P13: Bass Trombone
// P14: Cimbasso (sub. Tuba or C.B Trombone)
// P15: Timpani
// P16: Cymbals
// P17: Tamtam
// P18: Electric Piano (Pre-Record)
// P19: Piano (Optional)
// P20: Celesta (Optioanl)
// P21: Harp
// P22: Soprano (Optional)
// P23: Alto (Optional)
// P24: Solo Violin I
// P25: Solo  Violin II
// P26: Solo Viola
// P27: Solo Cello
// P28: Violin I
// P29: Violin 1 DIV
// P30: Violin II
// P31: Violin II DIV
// P32: Viola
// P33: Viola DIV
// P34: Cello
// P35: Cello DIV
// P36: Double Bass
function m2b(measure, beat) {
    return (measure - 1) * 6 + (beat - 1);
}
var getSoloCues = function (options) { return function (notes) {
    var res = notes
        .filter(function (_a) {
        var _b = _a.words, words = _b === void 0 ? '' : _b;
        return /solo|cue/.test(words);
    })
        .map(function (_a, i, arr) {
        var note = _a.note, _b = _a.words, words = _b === void 0 ? '' : _b;
        var matches = words.match(/(solo|cue)-(\d+)(-cresc)?/i);
        var beats = matches && matches[2] ? parseFloat(matches[2]) : 1;
        var cresc = matches && !!(matches[3]);
        // Round to start of a measure
        var countIn = 6;
        countIn = note - Math.floor((note - countIn) / 6) * 6;
        // Make sure it's after last note though
        if (i > 0 && note > arr[i - 1].note) {
            // Would the cue-in occur before the last cue?
            if (note - countIn < arr[i - 1].note) {
                countIn = note - arr[i - 1].note - 3;
            }
        }
        // Can't ever be smaller than 1 beat
        if (countIn < 1) {
            throw new Error("countIn cannot be less than 1");
        }
        // get notes about to be played
        // get the first one
        var playNotes = notes.filter(function (n, ii, notes) {
            // Exclude notes in the past
            if (n.note < note)
                return false;
            // Exclude the cue/notes/words
            if (n.words)
                return false;
            // Exclude notes past the next cue
            if (i + 1 < arr.length && n.note >= arr[i + 1].note)
                return false;
            // No farther than "beats"
            if (n.note - note > beats)
                return false;
            return true;
        })
            .map(function (note) {
            var n = {
                duration: note.duration,
                pitch: note.pitch,
            };
            if (note.isTremelo)
                n.isTremelo = note.isTremelo;
            if (note.isCrescendo)
                n.isCrescendo = note.isCrescendo;
            return [note.note, n];
        })
            .filter(function (v, i, arr) { return arr.findIndex(function (_a) {
            var note = _a[0];
            return note === v[0];
        }) === i; }); // Unique
        playNotes.sort(function (_a, _b) {
            var a = _a[0];
            var b = _b[0];
            return Math.sign(a - b);
        });
        var cues = [];
        cues.push([note - countIn, interactive_instrument_1.InstrumentState.CUE_READY, {
                spriteUrl: options.spriteUrl,
                motionFn: options.motionFn || {}
            }]);
        cues.push([note, interactive_instrument_1.InstrumentState.HIT, playNotes]);
        return cues;
    })
        .reduce(function (acc, arr) { return __spreadArrays(acc, arr); }, []);
    res.sort(function (_a, _b) {
        var a = _a[0];
        var b = _b[0];
        return Math.sign(a - b);
    });
    return res;
}; };
exports.interactives = [
    {
        name: "cello",
        graphicsPath: instrumentsection_svg_path_path_cello_svg_path_as_graphics_1.default,
        color: 0xdbdbdb,
        cues: getSoloCues({ spriteUrl: insicon_cello_svg_1.default, motionFn: instrument_motion_fn_1.bassMotion })(__spreadArrays(score_export_json_1.parts.P34.notes, score_export_json_1.parts.P35.notes // Cell div
        )),
    },
    {
        name: "bass",
        graphicsPath: instrumentsection_svg_path_path_bass_svg_path_as_graphics_1.default,
        color: 0xdbdbdb,
        cues: getSoloCues({ spriteUrl: insicon_bass_svg_1.default, motionFn: instrument_motion_fn_1.bassMotion })(__spreadArrays(score_export_json_1.parts.P36.notes // Double bass
        )),
    },
    {
        name: "brass",
        graphicsPath: instrumentsection_svg_path_path_brass_svg_path_as_graphics_1.default,
        color: 0xe8e8e8,
        cues: __spreadArrays(getSoloCues({ spriteUrl: insicon_trumpet_svg_1.default })(score_export_json_1.parts.P10.notes), getSoloCues({ spriteUrl: insicon_trumpet_svg_1.default })(score_export_json_1.parts.P11.notes), getSoloCues({ spriteUrl: insicon_brass_svg_1.default })(score_export_json_1.parts.P12.notes), getSoloCues({ spriteUrl: insicon_brass_svg_1.default })(score_export_json_1.parts.P13.notes), getSoloCues({ spriteUrl: insicon_brass_svg_1.default })(score_export_json_1.parts.P14.notes)),
    },
    {
        name: "harp",
        graphicsPath: instrumentsection_svg_path_path_harp_svg_path_as_graphics_1.default,
        color: 0xdbdbdb,
        cues: getSoloCues({ spriteUrl: insicon_harp_svg_1.default })(__spreadArrays(score_export_json_1.parts.P21.notes)),
    },
    {
        name: "horn",
        graphicsPath: instrumentsection_svg_path_path_horn_svg_path_as_graphics_1.default,
        color: 0xdbdbdb,
        cues: getSoloCues({ spriteUrl: insicon_horn_svg_1.default })(__spreadArrays(score_export_json_1.parts.P8.notes, score_export_json_1.parts.P9.notes)),
    },
    {
        name: "percussion",
        graphicsPath: instrumentsection_svg_path_path_percussion_svg_path_as_graphics_1.default,
        color: 0xe8e8e8,
        cues: __spreadArrays(getSoloCues({ spriteUrl: insicon_timpani_svg_1.default, motionFn: instrument_motion_fn_1.timpaniMotion })(score_export_json_1.parts.P15.notes), getSoloCues({ spriteUrl: insicon_cymbals_svg_1.default, motionFn: instrument_motion_fn_1.suspCymbMotion })(score_export_json_1.parts.P16.notes), getSoloCues({ spriteUrl: insicon_tamtam_svg_1.default, motionFn: instrument_motion_fn_1.gongMotion })(score_export_json_1.parts.P17.notes)),
    },
    {
        name: "piano",
        graphicsPath: instrumentsection_svg_path_path_piano_svg_path_as_graphics_1.default,
        color: 0xdbdbdb,
        cues: getSoloCues({ spriteUrl: insicon_keyboard_svg_1.default })(__spreadArrays(score_export_json_1.parts.P18.notes, score_export_json_1.parts.P19.notes)),
    },
    {
        name: "viola",
        graphicsPath: instrumentsection_svg_path_path_viola_svg_path_as_graphics_1.default,
        color: 0xe8e8e8,
        cues: getSoloCues({ spriteUrl: insicon_string_svg_1.default, motionFn: instrument_motion_fn_1.violinMotion })(__spreadArrays(score_export_json_1.parts.P26.notes, score_export_json_1.parts.P32.notes, score_export_json_1.parts.P33.notes)),
    },
    {
        name: "violin_1",
        graphicsPath: instrumentsection_svg_path_path_violin_1_svg_path_as_graphics_1.default,
        color: 0xe8e8e8,
        cues: getSoloCues({ spriteUrl: insicon_string_svg_1.default, motionFn: instrument_motion_fn_1.violinMotion })(__spreadArrays(score_export_json_1.parts.P24.notes, score_export_json_1.parts.P28.notes, score_export_json_1.parts.P29.notes)),
    },
    {
        name: "violin_2",
        graphicsPath: instrumentsection_svg_path_path_violin_2_svg_path_as_graphics_1.default,
        color: 0xdbdbdb,
        cues: getSoloCues({ spriteUrl: insicon_string_svg_1.default, motionFn: instrument_motion_fn_1.violinMotion })(__spreadArrays(score_export_json_1.parts.P25.notes, score_export_json_1.parts.P30.notes, score_export_json_1.parts.P31.notes)),
    },
    {
        name: "woodwind",
        graphicsPath: instrumentsection_svg_path_path_woodwind_svg_path_as_graphics_1.default,
        color: 0xe8e8e8,
        cues: __spreadArrays(getSoloCues({ spriteUrl: insicon_flute_svg_1.default })(score_export_json_1.parts.P1.notes), getSoloCues({ spriteUrl: insicon_oboe_svg_1.default })(score_export_json_1.parts.P2.notes), getSoloCues({ spriteUrl: insicon_clarinet_svg_1.default })(score_export_json_1.parts.P4.notes), getSoloCues({ spriteUrl: insicon_clarinet_svg_1.default })(score_export_json_1.parts.P5.notes), getSoloCues({ spriteUrl: insicon_clarinet_svg_1.default })(score_export_json_1.parts.P6.notes), getSoloCues({ spriteUrl: insicon_clarinet_svg_1.default })(score_export_json_1.parts.P7.notes)),
    },
];


/***/ }),

/***/ "./src/video-player.ts":
/*!*****************************!*\
  !*** ./src/video-player.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoPlayer = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var VideoPlayer = /** @class */ (function (_super) {
    __extends(VideoPlayer, _super);
    function VideoPlayer(videoUrl, playerWidth, accentColor) {
        if (playerWidth === void 0) { playerWidth = 256; }
        if (accentColor === void 0) { accentColor = 0xeeeeee; }
        var _this = _super.call(this) || this;
        _this.videoUrl = videoUrl;
        _this.playerWidth = playerWidth;
        _this.accentColor = accentColor;
        _this.isLoaded = false;
        _this.canInteract = true;
        _this.playButtonSizeRatio = 0.1;
        _this.statusText = "Unloaded";
        _this.loadProgress = 0;
        _this.autoplay = false;
        _this.overlayGraphics = new pixi_js_1.Graphics();
        _this.addChild(_this.overlayGraphics);
        _this.updateGraphics();
        _this.interactive = true;
        _this.cursor = "pointer";
        _this.on('pointertap', function () {
            if (_this.canInteract) {
                _this.interact();
            }
        });
        return _this;
    }
    VideoPlayer.prototype.interact = function () {
        this.playpause();
    };
    VideoPlayer.prototype.playpause = function () {
        if (this.videoData) {
            if (this.videoData.paused) {
                this.videoData.play();
                this.emit("play");
                this.statusText = "Playing";
                if (this.animationFrameId === -1) {
                    this.animationFrameId = window.requestAnimationFrame(this.updateGraphics.bind(this));
                }
            }
            else {
                this.videoData.pause();
                this.emit("pause");
                this.statusText = "Paused";
                this.updateGraphics();
                if (this.animationFrameId !== -1) {
                    window.cancelAnimationFrame(this.animationFrameId);
                    this.animationFrameId = -1;
                }
            }
        }
    };
    VideoPlayer.prototype.pause = function () {
        if (this.videoData && !this.videoData.paused) {
            this.videoData.pause();
            this.emit("pause");
            this.statusText = "Paused";
            this.updateGraphics();
            if (this.animationFrameId !== -1) {
                window.cancelAnimationFrame(this.animationFrameId);
                this.animationFrameId = -1;
            }
        }
    };
    VideoPlayer.prototype.resume = function () {
        if (this.videoData && this.videoData.paused) {
            this.videoData.play();
            this.emit("play");
            this.statusText = "Playing";
            if (this.animationFrameId === -1) {
                this.animationFrameId = window.requestAnimationFrame(this.updateGraphics.bind(this));
            }
        }
    };
    Object.defineProperty(VideoPlayer.prototype, "currentTime", {
        get: function () {
            return this.videoData.currentTime;
        },
        set: function (value) {
            this.videoData.currentTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VideoPlayer.prototype, "isPlaying", {
        get: function () {
            return !this.videoData.paused;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VideoPlayer.prototype, "duration", {
        get: function () {
            return this.videoData.duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VideoPlayer.prototype, "percentLoaded", {
        get: function () {
            return this.loadProgress;
        },
        enumerable: false,
        configurable: true
    });
    VideoPlayer.prototype.playerEnded = function () {
        this.emit("ended");
    };
    VideoPlayer.prototype.preload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var playEventSet, videoBaseTexture;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.statusText = "Loading";
                        playEventSet = false;
                        if (!!pixi_js_1.Loader.shared.resources[this.videoUrl]) return [3 /*break*/, 2];
                        // If not already loaded
                        return [4 /*yield*/, new Promise(function (resolve) {
                                var loaderTimer = setInterval(function () {
                                    if (typeof pixi_js_1.Loader.shared.resources[_this.videoUrl] === "undefined") {
                                        return;
                                    }
                                    try {
                                        var buffered = pixi_js_1.Loader.shared.resources[_this.videoUrl].data.buffered;
                                        var total = pixi_js_1.Loader.shared.resources[_this.videoUrl].data.duration;
                                        var end = buffered.end(0);
                                        _this.loadProgress = end / total;
                                    }
                                    catch (_a) { }
                                    if (!playEventSet) {
                                        pixi_js_1.Loader.shared.resources[_this.videoUrl].data.addEventListener("playing", doneLoading);
                                        pixi_js_1.Loader.shared.resources[_this.videoUrl].data.addEventListener("play", doneLoading);
                                        pixi_js_1.Loader.shared.resources[_this.videoUrl].data.addEventListener("canplaythrough", doneLoading);
                                        playEventSet = true;
                                    }
                                }, 200);
                                var doneLoading = function () {
                                    clearInterval(loaderTimer);
                                    pixi_js_1.Loader.shared.resources[_this.videoUrl].data.removeEventListener("playing", doneLoading);
                                    pixi_js_1.Loader.shared.resources[_this.videoUrl].data.removeEventListener("play", doneLoading);
                                    pixi_js_1.Loader.shared.resources[_this.videoUrl].data.removeEventListener("canplaythrough", doneLoading);
                                    resolve();
                                };
                                pixi_js_1.Loader.shared.add(_this.videoUrl).load(doneLoading);
                            })];
                    case 1:
                        // If not already loaded
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, new Promise(function (resolve) {
                            pixi_js_1.Loader.shared.onComplete.once(resolve);
                        })];
                    case 3:
                        _a.sent();
                        this.loadProgress = 1;
                        this.videoData = pixi_js_1.Loader.shared.resources[this.videoUrl].data;
                        videoBaseTexture = pixi_js_1.Texture.from(this.videoData);
                        this.videoData.addEventListener("ended", this.playerEnded.bind(this));
                        this.videoData.loop = false;
                        this.videoData.autoplay = this.autoplay;
                        if (!this.autoplay) {
                            setTimeout(function () {
                                _this.videoData.currentTime = 0;
                            }, 0);
                        }
                        this.videoSprite = new pixi_js_1.Sprite(videoBaseTexture);
                        this.nativeWidth = this.videoSprite.width;
                        this.nativeHeight = this.videoSprite.height;
                        this.nativeRatio = this.nativeWidth / this.nativeHeight;
                        this.addChild(this.videoSprite);
                        this.videoSprite.position.set(0, 0);
                        this.isLoaded = true;
                        // Bring overlay back to top
                        this.removeChild(this.overlayGraphics);
                        this.addChild(this.overlayGraphics);
                        this.statusText = "Paused";
                        this.resizeVideo(this.playerWidth);
                        return [2 /*return*/];
                }
            });
        });
    };
    VideoPlayer.prototype.resizeVideo = function (playerWidth) {
        this.playerWidth = playerWidth;
        var scale = this.playerWidth / this.nativeWidth;
        this.videoSprite.scale.set(scale);
        this.updateGraphics();
    };
    VideoPlayer.prototype.updateGraphics = function () {
        if (this.videoSprite) {
            this.overlayGraphics.visible = true;
            this.overlayGraphics.position.set(this.playerWidth / 2, this.videoSprite.height / 2);
        }
        else {
            this.overlayGraphics.visible = false;
        }
        this.animationFrameId = window.requestAnimationFrame(this.updateGraphics.bind(this));
        this.overlayGraphics.clear();
        if (this.videoData) {
            if (this.videoData.paused && this.canInteract) {
                this.overlayGraphics.beginFill(this.accentColor);
                var r = this.playerWidth * this.playButtonSizeRatio;
                var c = Math.cos(Math.PI * 2 / 3);
                var s = Math.sin(Math.PI * 2 / 3);
                this.overlayGraphics.drawPolygon([
                    new pixi_js_1.Point(c * r, -s * r),
                    new pixi_js_1.Point(r, 0),
                    new pixi_js_1.Point(c * r, s * r),
                ]);
                this.overlayGraphics.endFill();
            }
        }
    };
    VideoPlayer.prototype.destroy = function () {
        // @TODO - clear loading of video if still in progress
        _super.prototype.destroy.call(this);
        if (this.videoData) {
            this.videoData.removeEventListener("ended", this.playerEnded.bind(this));
            this.videoData.currentTime = 0;
            this.videoData.pause();
        }
    };
    return VideoPlayer;
}(pixi_js_1.Container));
exports.VideoPlayer = VideoPlayer;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dustin/Workspaces/isl/proto-2-working/src/main.ts */"./src/main.ts");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map