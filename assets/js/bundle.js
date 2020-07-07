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

/***/ "./assets/images/instrument-icons/note_1.svg":
/*!***************************************************!*\
  !*** ./assets/images/instrument-icons/note_1.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ad0ae00dce91a071710cda9ea14737ba.png";

/***/ }),

/***/ "./assets/images/instrument-icons/note_2.svg":
/*!***************************************************!*\
  !*** ./assets/images/instrument-icons/note_2.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/2341000b3b4767e5b9a67f0641860001.png";

/***/ }),

/***/ "./assets/images/instrument-icons/note_3.svg":
/*!***************************************************!*\
  !*** ./assets/images/instrument-icons/note_3.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/c17b181e498773d740318b9e1ea43198.png";

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
exports.Draggable = exports.DraggableState = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var interactive_1 = __webpack_require__(/*! ./interactive */ "./src/interactive.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
var bloom_128x128_png_1 = __importDefault(__webpack_require__(/*! ../assets/images/bloom-128x128.png */ "./assets/images/bloom-128x128.png"));
var click_track_1 = __importDefault(__webpack_require__(/*! click-track */ "./node_modules/click-track/dist/click-track.umd.min.js"));
var on_demand_emitter_1 = __importDefault(__webpack_require__(/*! ./on-demand-emitter */ "./src/on-demand-emitter.ts"));
var note_1_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/instrument-icons/note_1.svg */ "./assets/images/instrument-icons/note_1.svg"));
var note_2_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/instrument-icons/note_2.svg */ "./assets/images/instrument-icons/note_2.svg"));
var note_3_svg_1 = __importDefault(__webpack_require__(/*! ../assets/images/instrument-icons/note_3.svg */ "./assets/images/instrument-icons/note_3.svg"));
var pixi_particles_1 = __webpack_require__(/*! pixi-particles */ "./node_modules/pixi-particles/lib/pixi-particles.es.js");
var performance_state_1 = __importDefault(__webpack_require__(/*! ./performance-state */ "./src/performance-state.ts"));
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
    };
    Draggable.prototype.setIcon = function (icon) {
        this.graphics.destroy();
        icon.anchor.set(0.5);
        this.graphics = icon;
        this.addChild(this.graphics);
        var scale = 1;
        this.graphics.scale.set(scale);
        this.bloomSprite.visible = false;
    };
    Draggable.prototype.setVisualCues = function (cues) {
        var _this = this;
        if (this.visualCuesClicktrack) {
            throw new Error("Can't set the visual cues again");
        }
        this.visualCuesClicktrack = new click_track_1.default({
            timerSource: performance_state_1.default.clickTrack.timer,
            offset: performance_state_1.default.clickTrack.offset,
            tempo: performance_state_1.default.clickTrack.tempo,
            cues: __spreadArrays(cues)
        });
        // This config is temp, need to move to setter
        this.visualCuesEmitter = new on_demand_emitter_1.default(this, [
            note_1_svg_1.default,
            note_2_svg_1.default,
            note_3_svg_1.default
        ], {
            "alpha": {
                "start": .8,
                "end": 0
            },
            "scale": {
                "start": 0.3,
                "end": 0.3,
                "minimumScaleMultiplier": 0.5
            },
            "color": {
                "start": "#ffffff",
                "end": "#000000"
            },
            "speed": {
                "start": 50,
                "end": 50,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": true,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 6,
                "max": 6
            },
            "blendMode": "normal",
            "extraData": {
                "path": "sin(x/30)* 20 - x/3" // dust devil
            },
            "frequency": 0.01,
            "particlesPerWave": 1,
            "emitterLifetime": -1,
            "maxParticles": 15,
            "pos": {
                "x": 32,
                "y": -32
            },
            "addAtBack": false,
            "spawnType": "point"
        });
        this.visualCuesEmitter.particleConstructor = pixi_particles_1.PathParticle;
        var whichArtCounter = 1;
        this.visualCuesClicktrack.on("cue", function (ct, e) {
            _this.visualCuesEmitter.spawn(1, e.drag, 0);
        });
        this.visualCuesClicktrack.once("lastCue", function () {
            _this.visualCuesClicktrack.deconstruct();
            delete _this.visualCuesClicktrack;
            _this.setState(DraggableState.SHRINK_OUT, 0.1);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractiveInstrument = exports.InstrumentState = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
var interactive_1 = __webpack_require__(/*! ./interactive */ "./src/interactive.ts");
var draggable_1 = __webpack_require__(/*! ./draggable */ "./src/draggable.ts");
var lerp_1 = __webpack_require__(/*! ./lerp */ "./src/lerp.ts");
var constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
var performance_state_1 = __importDefault(__webpack_require__(/*! ./performance-state */ "./src/performance-state.ts"));
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
        _this.on("drop", _this.onDrop.bind(_this));
        _this.interactive = true;
        _this.cursor = "auto";
        _this.on("mousedragover", _this.onDragOver.bind(_this));
        _this.on("mousedragout", _this.onDragOut.bind(_this));
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
        if (this.state === InstrumentState.CUE_READY && performance_state_1.default.dragSpawn.draggingObject) {
            this.onDrop(performance_state_1.default.dragSpawn.draggingObject);
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
                if (this.nextCueSprite && this.draggables.length) {
                    this.draggables[0].setIcon(this.nextCueSprite);
                }
                break;
            case InstrumentState.CUE_READY:
                this.stateFadeTime = 1.0;
                this.cursor = "pointer";
                this.color = this._highlightColor;
                this.outlineThickness = 0;
                if (typeof value === 'string') {
                    this.nextCueSprite = pixi_js_1.Sprite.from(value);
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
var PerformanceState = /** @class */ (function (_super) {
    __extends(PerformanceState, _super);
    function PerformanceState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.emitters = [];
        _this.stageInteractiveBackground = pixi_js_1.Sprite.from(instrumentsection_2_svg_1.default);
        _this.mouseChecked = true;
        _this.bkg = new gradient_backdrop_1.default();
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
                        app.view.requestFullscreen();
                    }
                });
                // Assemble interactive things
                this.interactivesContainer = new pixi_js_1.Container();
                this.interactivesContainer.alpha = 0;
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
                });
                // Origin set is handled in resize
                PerformanceState.dragSpawn.alpha = 0;
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
                                _this.interactivesContainer.alpha = 0;
                                PerformanceState.dragSpawn.alpha = 0;
                                _this.bkgVideo.theaterMode = false;
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
                    _this.interactivesContainer.alpha = 1;
                    PerformanceState.dragSpawn.alpha = 1;
                    _this.bkgVideo.theaterMode = true;
                    _this.bkgVideo.pause();
                    PerformanceState.dragSpawn.on('firstDrag', function () {
                        _this.bkgVideo.resume();
                    });
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
                                this.onResize({ width: window.innerWidth, height: window.innerHeight });
                                resolve();
                                this.bkgVideo.alpha = 1;
                                this.bkgVideo.canInteract = true;
                                this.loadProgressbar.progress = 1;
                                clearInterval(loadIntervalCheck);
                                this.loadProgressbar.fadeOut();
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
                if (!this.interactiveHovering) {
                    // Mouse enter
                    this.interactiveHovering = object;
                    this.interactiveHovering.emit("mousedragover", this.mousePos);
                }
                else if (this.interactiveHovering !== object) {
                    // Mouse enter and out (new object)
                    object.emit("mousedragover", this.mousePos);
                    this.interactiveHovering.emit("mousedragout", this.mousePos);
                    this.interactiveHovering = object;
                }
            }
            else if (this.interactiveHovering) {
                // mouse out
                this.interactiveHovering.emit("mousedragout", this.mousePos);
                this.interactiveHovering = undefined;
            }
        }
    };
    PerformanceState.prototype.onResize = function (size) {
        if (this.loadProgressbar && this.loadProgressbar.progress < 1) {
            this.loadProgressbar.position.set(size.width / 2, size.height / 2);
        }
        var paddTop = 0;
        if (!document.fullscreen) {
            var nav = document.getElementsByTagName("nav");
            if (nav && nav[0]) {
                var _a = nav[0].getBoundingClientRect(), y = _a.y, height = _a.height;
                paddTop = y + height;
            }
        }
        var multiplier = Math.min(size.width / this.intendedStageSize[0], size.height / this.intendedStageSize[1]);
        //this.interactivesContainer.scale.set(multiplier, multiplier);
        this.interactives.forEach(function (s1) {
            s1.multiplierResize(multiplier);
        });
        this.stageInteractiveBackground.scale.set(multiplier);
        var bounds = this.interactivesContainer.getBounds();
        this.bkg.multiplierResize(multiplier);
        this.bkgVideo.position.set(0, paddTop);
        this.bkgVideo.multiplierResize(multiplier);
        var videoBounds = this.bkgVideo.getBounds();
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
                        bkgSprite.position.set(0, LETTERBOX_HEIGHT - 1);
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
                        this.theaterMode = false;
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
        set: function (on) {
            if (on) {
                this.container.removeChild(this.flatMask);
                this.container.addChild(this.theaterMask);
                this.videoSprite.mask = this.theaterMask;
                this.flatMaskBacker.visible = false;
            }
            else {
                this.container.removeChild(this.theaterMask);
                this.container.addChild(this.flatMask);
                this.videoSprite.mask = this.flatMask;
                this.flatMaskBacker.visible = true;
            }
        },
        enumerable: false,
        configurable: true
    });
    PerformanceVideoPlayer.prototype.multiplierResize = function (multiplier) {
        if (!this.videoSprite)
            return;
        this.container.scale.set(multiplier);
        this.container.position.y = (-LETTERBOX_HEIGHT) * multiplier;
        this.container.position.x = (window.innerWidth - this.container.width) / 2;
        this.bkgCurtainPad.position.set(0, 0);
        this.bkgCurtainPad.clear()
            .beginFill(0x000000)
            .drawRect(-(window.innerWidth - this.container.width) / 2, -this.position.y, window.innerWidth, this.position.y)
            .drawRect(0, this.container.position.y, this.container.position.x, this.container.height - 1 + LETTERBOX_HEIGHT * multiplier)
            .drawRect(this.container.width + this.container.position.x, this.container.position.y, (window.innerWidth - this.container.width) / 2, this.container.height - 1 + LETTERBOX_HEIGHT * multiplier)
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
exports.TET_STYLE_BIO_SUBTITLE = exports.TEXT_STYLE_BIO_P = exports.TEXT_STYLE_LOADING = exports.TEXT_STYLE_CENSORED = exports.TEXT_STYLE_INTERACTIVE_NUM = exports.TEXT_STYLE_H2 = exports.TEXT_STYLE_H1_HOVER = exports.TEXT_STYLE_H1 = exports.loadFonts = void 0;
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
exports.TEXT_STYLE_H1 = new pixi_js_1.TextStyle({
    fill: "#eeeeee",
    fontSize: 48,
    fontFamily: "Roboto",
    fontWeight: '400',
});
exports.TEXT_STYLE_H1_HOVER = new pixi_js_1.TextStyle({
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
                        this.playButton = new pixi_js_1.Text("PLAY", styles_1.TEXT_STYLE_H1);
                        this.playButton.anchor.set(0.5, 0);
                        this.playButton.interactive = true;
                        this.playButton.cursor = "pointer";
                        this.playButton.on("mouseover", function () {
                            //app.renderer.backgroundColor = 0x111111;
                            _this.playButton.style = styles_1.TEXT_STYLE_H1_HOVER;
                        });
                        this.playButton.on("mouseout", function () {
                            app.renderer.backgroundColor = 0x000000;
                            _this.playButton.style = styles_1.TEXT_STYLE_H1;
                        });
                        this.playButton.on("pointertap", function () {
                            try {
                                app.view.requestFullscreen();
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

/***/ "./src/tracks/main/score-export.json":
/*!*******************************************!*\
  !*** ./src/tracks/main/score-export.json ***!
  \*******************************************/
/*! exports provided: title, author, parts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"IMAGINE SYMPHONY LIVE\",\"author\":\"CHRIS THOMAS (BMI)\",\"parts\":{\"P1\":{\"id\":\"P1\",\"name\":\"Flute 1, 2\",\"measureCount\":119,\"notes\":[{\"note\":12,\"words\":\"01:00:00:00\"},{\"note\":66,\"words\":\"a2\"},{\"note\":66,\"pitch\":-2},{\"note\":66,\"words\":\"(cue-6)\"},{\"note\":66.5,\"pitch\":2},{\"note\":67,\"pitch\":-2},{\"note\":67.5,\"pitch\":-3},{\"note\":68,\"pitch\":-5},{\"note\":68.5,\"pitch\":-3},{\"note\":69,\"pitch\":-2},{\"note\":69.5,\"pitch\":2},{\"note\":70,\"pitch\":-2},{\"note\":70.5,\"pitch\":-3},{\"note\":71,\"pitch\":-5},{\"note\":71.5,\"pitch\":-3},{\"note\":126,\"pitch\":-2},{\"note\":126,\"words\":\"a2\"},{\"note\":126,\"words\":\"(cue-19)\"},{\"note\":126.5,\"pitch\":3},{\"note\":127,\"pitch\":-2},{\"note\":127.5,\"pitch\":-3},{\"note\":128,\"pitch\":-5},{\"note\":128.5,\"pitch\":-3},{\"note\":129,\"pitch\":-2},{\"note\":129.5,\"pitch\":3},{\"note\":130,\"pitch\":-2},{\"note\":130.5,\"pitch\":-3},{\"note\":131,\"pitch\":-5},{\"note\":131.5,\"pitch\":-3},{\"note\":132,\"pitch\":-2},{\"note\":138,\"pitch\":-2},{\"note\":138.5,\"pitch\":3},{\"note\":139,\"pitch\":-2},{\"note\":139.5,\"pitch\":-3},{\"note\":140,\"pitch\":-5},{\"note\":140.5,\"pitch\":-3},{\"note\":141,\"pitch\":-2},{\"note\":141.5,\"pitch\":3},{\"note\":142,\"pitch\":-2},{\"note\":142.5,\"pitch\":-3},{\"note\":143,\"pitch\":-5},{\"note\":143.5,\"pitch\":-3},{\"note\":144,\"pitch\":-2},{\"note\":237,\"words\":\"a2\"},{\"note\":237,\"pitch\":9},{\"note\":237,\"words\":\"(cue-9)\"},{\"note\":237.5,\"pitch\":14},{\"note\":238,\"pitch\":9},{\"note\":238.5,\"pitch\":7},{\"note\":239,\"pitch\":6},{\"note\":239.5,\"pitch\":7},{\"note\":240,\"pitch\":9},{\"note\":240.5,\"pitch\":14},{\"note\":241,\"pitch\":9},{\"note\":241.5,\"pitch\":7},{\"note\":242,\"pitch\":6},{\"note\":242.5,\"pitch\":7},{\"note\":243,\"pitch\":9},{\"note\":243.5,\"pitch\":12},{\"note\":244,\"pitch\":9},{\"note\":244.5,\"pitch\":7},{\"note\":245,\"pitch\":6},{\"note\":245.5,\"pitch\":2},{\"note\":283,\"pitch\":7},{\"note\":283,\"words\":\"(cue-17)\"},{\"note\":284,\"pitch\":9},{\"note\":285,\"pitch\":10},{\"note\":287,\"pitch\":10},{\"note\":287.75,\"pitch\":7},{\"note\":288,\"pitch\":12},{\"note\":290,\"pitch\":12},{\"note\":290.75,\"pitch\":9},{\"note\":291,\"pitch\":14},{\"note\":294,\"pitch\":14},{\"note\":318,\"words\":\"a2\"},{\"note\":318,\"pitch\":-2},{\"note\":318,\"words\":\"(cue-18)\"},{\"note\":318.5,\"pitch\":2},{\"note\":319,\"pitch\":-2},{\"note\":319.5,\"pitch\":-3},{\"note\":320,\"pitch\":-5},{\"note\":320.5,\"pitch\":-3},{\"note\":321,\"pitch\":-2},{\"note\":321.5,\"pitch\":2},{\"note\":322,\"pitch\":-2},{\"note\":330,\"pitch\":-2},{\"note\":330.5,\"pitch\":2},{\"note\":331,\"pitch\":-2},{\"note\":331.5,\"pitch\":-3},{\"note\":332,\"pitch\":-5},{\"note\":332.5,\"pitch\":-3},{\"note\":333,\"pitch\":-2},{\"note\":333.5,\"pitch\":2},{\"note\":334,\"pitch\":-2},{\"note\":334.5,\"pitch\":-3},{\"note\":335,\"pitch\":-5},{\"note\":335.5,\"pitch\":-3},{\"note\":366,\"words\":\"a1\"},{\"note\":366,\"words\":\"(cue-60)\"},{\"note\":366,\"pitch\":7},{\"note\":369,\"pitch\":5},{\"note\":372,\"pitch\":5},{\"note\":375,\"pitch\":2},{\"note\":376.5,\"pitch\":5},{\"note\":378,\"pitch\":7},{\"note\":381,\"pitch\":5},{\"note\":384,\"pitch\":2},{\"note\":385,\"pitch\":5},{\"note\":386,\"pitch\":10},{\"note\":387,\"pitch\":9},{\"note\":388,\"pitch\":7},{\"note\":389,\"pitch\":5},{\"note\":390,\"pitch\":3},{\"note\":393,\"pitch\":5},{\"note\":396,\"pitch\":7},{\"note\":402,\"pitch\":12},{\"note\":405,\"pitch\":14},{\"note\":408,\"pitch\":15},{\"note\":414,\"pitch\":7},{\"note\":414,\"pitch\":10},{\"note\":420,\"pitch\":10},{\"note\":420,\"pitch\":7},{\"note\":426,\"pitch\":10},{\"note\":426,\"pitch\":7},{\"note\":450,\"pitch\":10},{\"note\":450,\"pitch\":7},{\"note\":450,\"words\":\"(cue-6)\"},{\"note\":450.75,\"pitch\":10},{\"note\":450.75,\"pitch\":7},{\"note\":451,\"pitch\":10},{\"note\":451,\"pitch\":7},{\"note\":451.5,\"pitch\":10},{\"note\":451.5,\"pitch\":7},{\"note\":452.25,\"pitch\":10},{\"note\":452.25,\"pitch\":7},{\"note\":452.5,\"pitch\":7},{\"note\":452.5,\"pitch\":10},{\"note\":453,\"pitch\":7},{\"note\":453,\"pitch\":10},{\"note\":453.75,\"pitch\":7},{\"note\":453.75,\"pitch\":10},{\"note\":454,\"pitch\":7},{\"note\":454,\"pitch\":10},{\"note\":454.5,\"pitch\":7},{\"note\":454.5,\"pitch\":10},{\"note\":455.25,\"pitch\":10},{\"note\":455.25,\"pitch\":7},{\"note\":455.5,\"pitch\":7},{\"note\":455.5,\"pitch\":10},{\"note\":516,\"words\":\"a2\"},{\"note\":516,\"words\":\"(cue-12)\"},{\"note\":516,\"pitch\":-2},{\"note\":516.5,\"pitch\":2},{\"note\":517,\"pitch\":-2},{\"note\":517.5,\"pitch\":-3},{\"note\":518,\"pitch\":-5},{\"note\":518.5,\"pitch\":-3},{\"note\":519,\"pitch\":-2},{\"note\":519.5,\"pitch\":2},{\"note\":520,\"pitch\":-2},{\"note\":520.5,\"pitch\":-3},{\"note\":521,\"pitch\":-5},{\"note\":521.5,\"pitch\":-3},{\"note\":522,\"pitch\":-2},{\"note\":522.5,\"pitch\":3},{\"note\":523,\"pitch\":-2},{\"note\":523.5,\"pitch\":-3},{\"note\":524,\"pitch\":-5},{\"note\":524.5,\"pitch\":-3},{\"note\":525,\"pitch\":-2},{\"note\":525.5,\"pitch\":3},{\"note\":526,\"pitch\":-2},{\"note\":526.5,\"pitch\":-3},{\"note\":527,\"pitch\":-5},{\"note\":527.5,\"pitch\":-3},{\"note\":582,\"pitch\":10},{\"note\":582,\"words\":\"a2\"},{\"note\":582.5,\"pitch\":14},{\"note\":583,\"pitch\":10},{\"note\":583.5,\"pitch\":9},{\"note\":584,\"pitch\":7},{\"note\":584.5,\"pitch\":9},{\"note\":585,\"pitch\":10},{\"note\":585.5,\"pitch\":14},{\"note\":586,\"pitch\":10},{\"note\":586.5,\"pitch\":9},{\"note\":587,\"pitch\":7},{\"note\":587.5,\"pitch\":9},{\"note\":588,\"pitch\":10},{\"note\":588.5,\"pitch\":15},{\"note\":589,\"pitch\":10},{\"note\":589.5,\"pitch\":9},{\"note\":590,\"pitch\":7},{\"note\":590.5,\"pitch\":9},{\"note\":591,\"pitch\":10},{\"note\":591.5,\"pitch\":15},{\"note\":592,\"pitch\":10},{\"note\":592.5,\"pitch\":9},{\"note\":593,\"pitch\":7},{\"note\":593.5,\"pitch\":9},{\"note\":594,\"words\":\"(half legato, half stacc.)\"},{\"note\":594,\"pitch\":10},{\"note\":594.5,\"pitch\":14},{\"note\":595,\"pitch\":10},{\"note\":595.5,\"pitch\":9},{\"note\":596,\"pitch\":7},{\"note\":596.5,\"pitch\":9},{\"note\":597,\"pitch\":10},{\"note\":597.5,\"pitch\":15},{\"note\":598,\"pitch\":10},{\"note\":598.5,\"pitch\":9},{\"note\":599,\"pitch\":7},{\"note\":599.5,\"pitch\":9},{\"note\":600,\"pitch\":10},{\"note\":600.5,\"pitch\":14},{\"note\":601,\"pitch\":10},{\"note\":601.5,\"pitch\":9},{\"note\":602,\"pitch\":7},{\"note\":602.5,\"pitch\":9},{\"note\":603,\"pitch\":10},{\"note\":603.5,\"pitch\":14},{\"note\":604,\"pitch\":10},{\"note\":604.5,\"pitch\":9},{\"note\":605,\"pitch\":7},{\"note\":605.5,\"pitch\":9},{\"note\":606,\"pitch\":10},{\"note\":606.5,\"pitch\":14},{\"note\":607,\"pitch\":10},{\"note\":607.5,\"pitch\":9},{\"note\":608,\"pitch\":7},{\"note\":608.5,\"pitch\":9},{\"note\":609,\"pitch\":10},{\"note\":609.5,\"pitch\":15},{\"note\":610,\"pitch\":10},{\"note\":610.5,\"pitch\":9},{\"note\":611,\"pitch\":7},{\"note\":611.5,\"pitch\":9},{\"note\":612,\"pitch\":10},{\"note\":612,\"words\":\"(sim.)\"},{\"note\":612.5,\"pitch\":14},{\"note\":613,\"pitch\":10},{\"note\":613.5,\"pitch\":9},{\"note\":614,\"pitch\":5},{\"note\":614.5,\"pitch\":9},{\"note\":615,\"pitch\":10},{\"note\":615.5,\"pitch\":12},{\"note\":616,\"pitch\":10},{\"note\":616.5,\"pitch\":9},{\"note\":617,\"pitch\":5},{\"note\":617.5,\"pitch\":9},{\"note\":618,\"pitch\":7},{\"note\":618.5,\"pitch\":15},{\"note\":619,\"pitch\":14},{\"note\":619.5,\"pitch\":12},{\"note\":620,\"pitch\":7},{\"note\":620.5,\"pitch\":3},{\"note\":621,\"pitch\":2},{\"note\":621.5,\"pitch\":5},{\"note\":622,\"pitch\":14},{\"note\":622.5,\"pitch\":10},{\"note\":623,\"pitch\":9},{\"note\":623.5,\"pitch\":5},{\"note\":624,\"pitch\":9},{\"note\":624.5,\"pitch\":14},{\"note\":625,\"pitch\":10},{\"note\":625.5,\"pitch\":9},{\"note\":626,\"pitch\":7},{\"note\":626.5,\"pitch\":5},{\"note\":627,\"pitch\":10},{\"note\":627.5,\"pitch\":15},{\"note\":628,\"pitch\":10},{\"note\":628.5,\"pitch\":9},{\"note\":629,\"pitch\":7},{\"note\":629.5,\"pitch\":3},{\"note\":630,\"pitch\":10},{\"note\":630.5,\"pitch\":14},{\"note\":631,\"pitch\":10},{\"note\":631.5,\"pitch\":9},{\"note\":632,\"pitch\":5},{\"note\":632.5,\"pitch\":2},{\"note\":633,\"pitch\":10},{\"note\":633.5,\"pitch\":14},{\"note\":634,\"pitch\":10},{\"note\":634.5,\"pitch\":9},{\"note\":635,\"pitch\":5},{\"note\":635.5,\"pitch\":2},{\"note\":636,\"pitch\":9},{\"note\":636.5,\"pitch\":12},{\"note\":637,\"pitch\":9},{\"note\":637.5,\"pitch\":7},{\"note\":638,\"pitch\":5},{\"note\":638.5,\"pitch\":0},{\"note\":639,\"pitch\":9},{\"note\":639.5,\"pitch\":12},{\"note\":640,\"pitch\":9},{\"note\":640.5,\"pitch\":7},{\"note\":641,\"pitch\":5},{\"note\":641.5,\"pitch\":0},{\"note\":642,\"pitch\":7},{\"note\":642.5,\"pitch\":15},{\"note\":643,\"pitch\":14},{\"note\":643.5,\"pitch\":12},{\"note\":644,\"pitch\":7},{\"note\":644.5,\"pitch\":3},{\"note\":645,\"pitch\":5},{\"note\":645.5,\"pitch\":14},{\"note\":646,\"pitch\":10},{\"note\":646.5,\"pitch\":9},{\"note\":647,\"pitch\":5},{\"note\":647.5,\"pitch\":2},{\"note\":648,\"pitch\":5},{\"note\":648.5,\"pitch\":12},{\"note\":649,\"pitch\":10},{\"note\":649.5,\"pitch\":9},{\"note\":650,\"pitch\":5},{\"note\":650.5,\"pitch\":0},{\"note\":651,\"pitch\":7},{\"note\":651.5,\"pitch\":14},{\"note\":652,\"pitch\":10},{\"note\":652.5,\"pitch\":9},{\"note\":653,\"pitch\":7},{\"note\":653.5,\"pitch\":2},{\"note\":654,\"pitch\":10},{\"note\":654.5,\"pitch\":15},{\"note\":655,\"pitch\":10},{\"note\":655.5,\"pitch\":9},{\"note\":656,\"pitch\":7},{\"note\":656.5,\"pitch\":3},{\"note\":657,\"pitch\":10},{\"note\":657.5,\"pitch\":14},{\"note\":658,\"pitch\":10},{\"note\":658.5,\"pitch\":9},{\"note\":659,\"pitch\":5},{\"note\":659.5,\"pitch\":2},{\"note\":660,\"pitch\":9},{\"note\":660.5,\"pitch\":14},{\"note\":661,\"pitch\":10},{\"note\":661.5,\"pitch\":9},{\"note\":662,\"pitch\":7},{\"note\":662.5,\"pitch\":5},{\"note\":663,\"pitch\":12},{\"note\":663.5,\"pitch\":17},{\"note\":664,\"pitch\":12},{\"note\":664.5,\"pitch\":10},{\"note\":665,\"pitch\":9},{\"note\":665.5,\"pitch\":5},{\"note\":666,\"pitch\":7},{\"note\":666.5,\"pitch\":15},{\"note\":667,\"pitch\":14},{\"note\":667.5,\"pitch\":12},{\"note\":668,\"pitch\":7},{\"note\":668.5,\"pitch\":3},{\"note\":669,\"pitch\":5},{\"note\":669.5,\"pitch\":14},{\"note\":670,\"pitch\":10},{\"note\":670.5,\"pitch\":9},{\"note\":671,\"pitch\":5},{\"note\":671.5,\"pitch\":2},{\"note\":672,\"pitch\":9},{\"note\":672.5,\"pitch\":14},{\"note\":673,\"pitch\":10},{\"note\":673.5,\"pitch\":9},{\"note\":674,\"pitch\":7},{\"note\":674.5,\"pitch\":5},{\"note\":675,\"pitch\":12},{\"note\":675.5,\"pitch\":17},{\"note\":676,\"pitch\":12},{\"note\":676.5,\"pitch\":10},{\"note\":677,\"pitch\":9},{\"note\":677.5,\"pitch\":5},{\"note\":678,\"pitch\":10},{\"note\":678.5,\"pitch\":15},{\"note\":679,\"pitch\":10},{\"note\":679.5,\"pitch\":9},{\"note\":680,\"pitch\":7},{\"note\":680.5,\"pitch\":3},{\"note\":681,\"pitch\":10},{\"note\":681.5,\"pitch\":14},{\"note\":682,\"pitch\":10},{\"note\":682.5,\"pitch\":9},{\"note\":683,\"pitch\":5},{\"note\":683.5,\"pitch\":2},{\"note\":684,\"pitch\":12},{\"note\":684.5,\"pitch\":17},{\"note\":685,\"pitch\":12},{\"note\":685.5,\"pitch\":10},{\"note\":686,\"pitch\":9},{\"note\":686.5,\"pitch\":5},{\"note\":687,\"pitch\":9},{\"note\":687.5,\"pitch\":14},{\"note\":688,\"pitch\":9},{\"note\":688.5,\"pitch\":7},{\"note\":689,\"pitch\":6},{\"note\":689.5,\"pitch\":7},{\"note\":690,\"pitch\":10},{\"note\":690.5,\"pitch\":9},{\"note\":691,\"pitch\":10},{\"note\":691.5,\"pitch\":14},{\"note\":692,\"pitch\":10},{\"note\":693,\"pitch\":10},{\"note\":693.5,\"pitch\":9},{\"note\":694,\"pitch\":10},{\"note\":694.5,\"pitch\":14},{\"note\":695,\"pitch\":10},{\"note\":696,\"pitch\":10},{\"note\":696.5,\"pitch\":9},{\"note\":697,\"pitch\":10},{\"note\":697.5,\"pitch\":14},{\"note\":698,\"pitch\":10},{\"note\":699,\"pitch\":10},{\"note\":700,\"pitch\":9},{\"note\":701,\"pitch\":7},{\"note\":702,\"pitch\":10},{\"note\":702.5,\"pitch\":9},{\"note\":703,\"pitch\":10},{\"note\":703.5,\"pitch\":14},{\"note\":704,\"pitch\":10},{\"note\":705,\"pitch\":10},{\"note\":705.5,\"pitch\":9},{\"note\":706,\"pitch\":10},{\"note\":706.5,\"pitch\":14},{\"note\":707,\"pitch\":10},{\"note\":707.5,\"pitch\":9},{\"note\":708,\"pitch\":7},{\"note\":708,\"words\":\"(cue)\"},{\"note\":708,\"pitch\":7},{\"note\":709,\"pitch\":10},{\"note\":709,\"pitch\":10},{\"note\":710,\"pitch\":14},{\"note\":710,\"pitch\":14},{\"note\":711,\"pitch\":12},{\"note\":711,\"pitch\":12},{\"note\":712,\"pitch\":7},{\"note\":712,\"pitch\":16}]},\"P2\":{\"id\":\"P2\",\"name\":\"Oboe\",\"measureCount\":119,\"notes\":[{\"note\":84,\"words\":\"(solo-11)\"},{\"note\":85,\"pitch\":7},{\"note\":86,\"pitch\":9},{\"note\":87,\"pitch\":10},{\"note\":88,\"pitch\":7},{\"note\":89,\"pitch\":3},{\"note\":90,\"pitch\":2},{\"note\":144,\"words\":\"(solo)\"},{\"note\":144,\"pitch\":7},{\"note\":151,\"pitch\":2},{\"note\":151,\"words\":\"(cue-47)\"},{\"note\":152,\"pitch\":7},{\"note\":153,\"pitch\":10},{\"note\":154,\"pitch\":9},{\"note\":155,\"pitch\":7},{\"note\":156,\"pitch\":2},{\"note\":159,\"pitch\":3},{\"note\":160,\"pitch\":7},{\"note\":161,\"pitch\":9},{\"note\":162,\"pitch\":10},{\"note\":165,\"pitch\":9},{\"note\":166,\"pitch\":7},{\"note\":167,\"pitch\":5},{\"note\":168,\"pitch\":7},{\"note\":174,\"pitch\":5},{\"note\":174,\"words\":\"(cue)\"},{\"note\":177,\"pitch\":5},{\"note\":178.5,\"pitch\":2},{\"note\":180,\"pitch\":3},{\"note\":181,\"pitch\":5},{\"note\":182,\"pitch\":7},{\"note\":183,\"pitch\":5},{\"note\":184.5,\"pitch\":10},{\"note\":186,\"pitch\":9},{\"note\":188,\"pitch\":5},{\"note\":189,\"pitch\":9},{\"note\":190,\"pitch\":7},{\"note\":191,\"pitch\":5},{\"note\":192,\"pitch\":7},{\"note\":237,\"pitch\":9},{\"note\":237.5,\"pitch\":14},{\"note\":238,\"pitch\":9},{\"note\":238.5,\"pitch\":7},{\"note\":239,\"pitch\":6},{\"note\":239.5,\"pitch\":7},{\"note\":240,\"pitch\":9},{\"note\":240.5,\"pitch\":14},{\"note\":241,\"pitch\":9},{\"note\":241.5,\"pitch\":7},{\"note\":242,\"pitch\":6},{\"note\":242.5,\"pitch\":7},{\"note\":243,\"pitch\":9},{\"note\":303,\"words\":\"(solo-10)\"},{\"note\":303,\"pitch\":2},{\"note\":304,\"pitch\":7},{\"note\":305,\"pitch\":9},{\"note\":306,\"pitch\":10},{\"note\":312,\"pitch\":10},{\"note\":402,\"pitch\":0},{\"note\":405,\"pitch\":2},{\"note\":408,\"pitch\":3},{\"note\":414,\"pitch\":2},{\"note\":417,\"pitch\":3},{\"note\":420,\"pitch\":3},{\"note\":426,\"pitch\":2},{\"note\":450,\"pitch\":3},{\"note\":450.75,\"pitch\":3},{\"note\":451,\"pitch\":3},{\"note\":451.5,\"pitch\":3},{\"note\":452.25,\"pitch\":3},{\"note\":452.5,\"pitch\":3},{\"note\":453,\"pitch\":3},{\"note\":453.75,\"pitch\":3},{\"note\":454,\"pitch\":3},{\"note\":454.5,\"pitch\":3},{\"note\":455.25,\"pitch\":3},{\"note\":455.5,\"pitch\":3},{\"note\":582,\"pitch\":10},{\"note\":582.5,\"pitch\":14},{\"note\":583,\"pitch\":10},{\"note\":583.5,\"pitch\":9},{\"note\":584,\"pitch\":7},{\"note\":584.5,\"pitch\":9},{\"note\":585,\"pitch\":10},{\"note\":585.5,\"pitch\":14},{\"note\":586,\"pitch\":10},{\"note\":586.5,\"pitch\":9},{\"note\":587,\"pitch\":7},{\"note\":587.5,\"pitch\":9},{\"note\":588,\"pitch\":10},{\"note\":588.5,\"pitch\":15},{\"note\":589,\"pitch\":10},{\"note\":589.5,\"pitch\":9},{\"note\":590,\"pitch\":7},{\"note\":590.5,\"pitch\":9},{\"note\":591,\"pitch\":10},{\"note\":591.5,\"pitch\":15},{\"note\":592,\"pitch\":10},{\"note\":592.5,\"pitch\":9},{\"note\":593,\"pitch\":7},{\"note\":593.5,\"pitch\":9},{\"note\":594,\"pitch\":10},{\"note\":594.5,\"pitch\":14},{\"note\":595,\"pitch\":10},{\"note\":595.5,\"pitch\":9},{\"note\":596,\"pitch\":7},{\"note\":596.5,\"pitch\":9},{\"note\":597,\"pitch\":10},{\"note\":597.5,\"pitch\":15},{\"note\":598,\"pitch\":10},{\"note\":598.5,\"pitch\":9},{\"note\":599,\"pitch\":7},{\"note\":599.5,\"pitch\":9},{\"note\":600,\"pitch\":10},{\"note\":600.5,\"pitch\":14},{\"note\":601,\"pitch\":10},{\"note\":601.5,\"pitch\":9},{\"note\":602,\"pitch\":7},{\"note\":602.5,\"pitch\":9},{\"note\":603,\"pitch\":10},{\"note\":603.5,\"pitch\":14},{\"note\":604,\"pitch\":10},{\"note\":604.5,\"pitch\":9},{\"note\":605,\"pitch\":7},{\"note\":605.5,\"pitch\":9},{\"note\":606,\"pitch\":10},{\"note\":606.5,\"pitch\":14},{\"note\":607,\"pitch\":10},{\"note\":607.5,\"pitch\":9},{\"note\":608,\"pitch\":7},{\"note\":608.5,\"pitch\":9},{\"note\":609,\"pitch\":10},{\"note\":609.5,\"pitch\":15},{\"note\":610,\"pitch\":10},{\"note\":610.5,\"pitch\":9},{\"note\":611,\"pitch\":7},{\"note\":611.5,\"pitch\":9},{\"note\":612,\"words\":\"(sim.)\"},{\"note\":612,\"pitch\":10},{\"note\":612.5,\"pitch\":14},{\"note\":613,\"pitch\":10},{\"note\":613.5,\"pitch\":9},{\"note\":614,\"pitch\":5},{\"note\":614.5,\"pitch\":9},{\"note\":615,\"pitch\":10},{\"note\":615.5,\"pitch\":12},{\"note\":616,\"pitch\":10},{\"note\":616.5,\"pitch\":9},{\"note\":617,\"pitch\":5},{\"note\":617.5,\"pitch\":9},{\"note\":618,\"pitch\":7},{\"note\":618.5,\"pitch\":15},{\"note\":619,\"pitch\":14},{\"note\":619.5,\"pitch\":12},{\"note\":620,\"pitch\":7},{\"note\":620.5,\"pitch\":3},{\"note\":621,\"pitch\":2},{\"note\":621.5,\"pitch\":5},{\"note\":622,\"pitch\":14},{\"note\":622.5,\"pitch\":10},{\"note\":623,\"pitch\":9},{\"note\":623.5,\"pitch\":5},{\"note\":624,\"pitch\":9},{\"note\":624.5,\"pitch\":14},{\"note\":625,\"pitch\":10},{\"note\":625.5,\"pitch\":9},{\"note\":626,\"pitch\":7},{\"note\":626.5,\"pitch\":5},{\"note\":627,\"pitch\":10},{\"note\":627.5,\"pitch\":15},{\"note\":628,\"pitch\":10},{\"note\":628.5,\"pitch\":9},{\"note\":629,\"pitch\":7},{\"note\":629.5,\"pitch\":3},{\"note\":630,\"pitch\":10},{\"note\":630.5,\"pitch\":14},{\"note\":631,\"pitch\":10},{\"note\":631.5,\"pitch\":9},{\"note\":632,\"pitch\":5},{\"note\":632.5,\"pitch\":2},{\"note\":633,\"pitch\":10},{\"note\":633.5,\"pitch\":14},{\"note\":634,\"pitch\":10},{\"note\":634.5,\"pitch\":9},{\"note\":635,\"pitch\":5},{\"note\":635.5,\"pitch\":2},{\"note\":636,\"pitch\":9},{\"note\":636.5,\"pitch\":12},{\"note\":637,\"pitch\":9},{\"note\":637.5,\"pitch\":7},{\"note\":638,\"pitch\":5},{\"note\":638.5,\"pitch\":0},{\"note\":639,\"pitch\":9},{\"note\":639.5,\"pitch\":12},{\"note\":640,\"pitch\":9},{\"note\":640.5,\"pitch\":7},{\"note\":641,\"pitch\":5},{\"note\":641.5,\"pitch\":0},{\"note\":642,\"pitch\":7},{\"note\":642.5,\"pitch\":15},{\"note\":643,\"pitch\":14},{\"note\":643.5,\"pitch\":12},{\"note\":644,\"pitch\":7},{\"note\":644.5,\"pitch\":3},{\"note\":645,\"pitch\":5},{\"note\":645.5,\"pitch\":14},{\"note\":646,\"pitch\":10},{\"note\":646.5,\"pitch\":9},{\"note\":647,\"pitch\":5},{\"note\":647.5,\"pitch\":2},{\"note\":648,\"pitch\":5},{\"note\":648.5,\"pitch\":12},{\"note\":649,\"pitch\":10},{\"note\":649.5,\"pitch\":9},{\"note\":650,\"pitch\":5},{\"note\":650.5,\"pitch\":0},{\"note\":651,\"pitch\":7},{\"note\":651.5,\"pitch\":14},{\"note\":652,\"pitch\":10},{\"note\":652.5,\"pitch\":9},{\"note\":653,\"pitch\":7},{\"note\":653.5,\"pitch\":2},{\"note\":654,\"pitch\":10},{\"note\":654.5,\"pitch\":15},{\"note\":655,\"pitch\":10},{\"note\":655.5,\"pitch\":9},{\"note\":656,\"pitch\":7},{\"note\":656.5,\"pitch\":3},{\"note\":657,\"pitch\":10},{\"note\":657.5,\"pitch\":14},{\"note\":658,\"pitch\":10},{\"note\":658.5,\"pitch\":9},{\"note\":659,\"pitch\":5},{\"note\":659.5,\"pitch\":2},{\"note\":660,\"pitch\":9},{\"note\":660.5,\"pitch\":14},{\"note\":661,\"pitch\":10},{\"note\":661.5,\"pitch\":9},{\"note\":662,\"pitch\":7},{\"note\":662.5,\"pitch\":5},{\"note\":663,\"pitch\":12},{\"note\":663.5,\"pitch\":17},{\"note\":664,\"pitch\":12},{\"note\":664.5,\"pitch\":10},{\"note\":665,\"pitch\":9},{\"note\":665.5,\"pitch\":5},{\"note\":666,\"pitch\":7},{\"note\":666.5,\"pitch\":15},{\"note\":667,\"pitch\":14},{\"note\":667.5,\"pitch\":12},{\"note\":668,\"pitch\":7},{\"note\":668.5,\"pitch\":3},{\"note\":669,\"pitch\":5},{\"note\":669.5,\"pitch\":14},{\"note\":670,\"pitch\":10},{\"note\":670.5,\"pitch\":9},{\"note\":671,\"pitch\":5},{\"note\":671.5,\"pitch\":2},{\"note\":672,\"pitch\":9},{\"note\":672.5,\"pitch\":14},{\"note\":673,\"pitch\":10},{\"note\":673.5,\"pitch\":9},{\"note\":674,\"pitch\":7},{\"note\":674.5,\"pitch\":5},{\"note\":675,\"pitch\":12},{\"note\":675.5,\"pitch\":17},{\"note\":676,\"pitch\":12},{\"note\":676.5,\"pitch\":10},{\"note\":677,\"pitch\":9},{\"note\":677.5,\"pitch\":5},{\"note\":678,\"pitch\":10},{\"note\":678.5,\"pitch\":15},{\"note\":679,\"pitch\":10},{\"note\":679.5,\"pitch\":9},{\"note\":680,\"pitch\":7},{\"note\":680.5,\"pitch\":3},{\"note\":681,\"pitch\":10},{\"note\":681.5,\"pitch\":14},{\"note\":682,\"pitch\":10},{\"note\":682.5,\"pitch\":9},{\"note\":683,\"pitch\":5},{\"note\":683.5,\"pitch\":2},{\"note\":684,\"pitch\":12},{\"note\":684.5,\"pitch\":17},{\"note\":685,\"pitch\":12},{\"note\":685.5,\"pitch\":10},{\"note\":686,\"pitch\":9},{\"note\":686.5,\"pitch\":5},{\"note\":687,\"pitch\":9},{\"note\":687.5,\"pitch\":14},{\"note\":688,\"pitch\":9},{\"note\":688.5,\"pitch\":7},{\"note\":689,\"pitch\":6},{\"note\":689.5,\"pitch\":7},{\"note\":690,\"pitch\":10},{\"note\":690.5,\"pitch\":9},{\"note\":691,\"pitch\":10},{\"note\":691.5,\"pitch\":14},{\"note\":692,\"pitch\":10},{\"note\":693,\"pitch\":10},{\"note\":693.5,\"pitch\":9},{\"note\":694,\"pitch\":10},{\"note\":694.5,\"pitch\":14},{\"note\":695,\"pitch\":10},{\"note\":696,\"pitch\":10},{\"note\":696.5,\"pitch\":9},{\"note\":697,\"pitch\":10},{\"note\":697.5,\"pitch\":14},{\"note\":698,\"pitch\":10},{\"note\":699,\"pitch\":10},{\"note\":700,\"pitch\":9},{\"note\":701,\"pitch\":7},{\"note\":702,\"pitch\":10},{\"note\":702.5,\"pitch\":9},{\"note\":703,\"pitch\":10},{\"note\":703.5,\"pitch\":14},{\"note\":704,\"pitch\":10},{\"note\":705,\"pitch\":-2},{\"note\":705.5,\"pitch\":-3},{\"note\":706,\"pitch\":-2},{\"note\":706.5,\"pitch\":2},{\"note\":707,\"pitch\":-2},{\"note\":707.5,\"pitch\":-3},{\"note\":708,\"pitch\":-5},{\"note\":709,\"pitch\":-2},{\"note\":710,\"pitch\":2},{\"note\":711,\"pitch\":4},{\"note\":712,\"pitch\":7}]},\"P3\":{\"id\":\"P3\",\"name\":\"English Horn (Optional)\",\"measureCount\":119,\"notes\":[{\"note\":402,\"words\":\"(solo)\"},{\"note\":402,\"pitch\":-3},{\"note\":403.5,\"pitch\":-2},{\"note\":405,\"pitch\":5},{\"note\":406.5,\"pitch\":0},{\"note\":408,\"pitch\":2},{\"note\":409.5,\"pitch\":4},{\"note\":411,\"pitch\":5},{\"note\":412.5,\"pitch\":7},{\"note\":417,\"pitch\":-2},{\"note\":420,\"pitch\":-2},{\"note\":426,\"pitch\":-3},{\"note\":570,\"pitch\":5},{\"note\":570,\"words\":\"(cue-138)\"},{\"note\":570.5,\"pitch\":9},{\"note\":571,\"pitch\":5},{\"note\":571.5,\"pitch\":4},{\"note\":572,\"pitch\":2},{\"note\":572.5,\"pitch\":4},{\"note\":573,\"pitch\":5},{\"note\":573.5,\"pitch\":9},{\"note\":574,\"pitch\":5},{\"note\":574.5,\"pitch\":4},{\"note\":575,\"pitch\":2},{\"note\":575.5,\"pitch\":4},{\"note\":576,\"pitch\":5},{\"note\":576.5,\"pitch\":10},{\"note\":577,\"pitch\":5},{\"note\":577.5,\"pitch\":4},{\"note\":578,\"pitch\":2},{\"note\":578.5,\"pitch\":4},{\"note\":579,\"pitch\":5},{\"note\":579.5,\"pitch\":10},{\"note\":580,\"pitch\":5},{\"note\":580.5,\"pitch\":4},{\"note\":581,\"pitch\":2},{\"note\":581.5,\"pitch\":4},{\"note\":582,\"pitch\":5},{\"note\":582.5,\"pitch\":9},{\"note\":583,\"pitch\":5},{\"note\":583.5,\"pitch\":4},{\"note\":584,\"pitch\":2},{\"note\":584.5,\"pitch\":4},{\"note\":585,\"pitch\":5},{\"note\":585.5,\"pitch\":9},{\"note\":586,\"pitch\":5},{\"note\":586.5,\"pitch\":4},{\"note\":587,\"pitch\":2},{\"note\":587.5,\"pitch\":4},{\"note\":588,\"pitch\":5},{\"note\":588.5,\"pitch\":10},{\"note\":589,\"pitch\":5},{\"note\":589.5,\"pitch\":4},{\"note\":590,\"pitch\":2},{\"note\":590.5,\"pitch\":4},{\"note\":591,\"pitch\":5},{\"note\":591.5,\"pitch\":10},{\"note\":592,\"pitch\":5},{\"note\":592.5,\"pitch\":4},{\"note\":593,\"pitch\":2},{\"note\":593.5,\"pitch\":4},{\"note\":594,\"pitch\":5},{\"note\":594.5,\"pitch\":9},{\"note\":595,\"pitch\":5},{\"note\":595.5,\"pitch\":4},{\"note\":596,\"pitch\":2},{\"note\":596.5,\"pitch\":4},{\"note\":597,\"pitch\":5},{\"note\":597.5,\"pitch\":10},{\"note\":598,\"pitch\":5},{\"note\":598.5,\"pitch\":4},{\"note\":599,\"pitch\":2},{\"note\":599.5,\"pitch\":4},{\"note\":600,\"pitch\":5},{\"note\":600.5,\"pitch\":9},{\"note\":601,\"pitch\":5},{\"note\":601.5,\"pitch\":4},{\"note\":602,\"pitch\":2},{\"note\":602.5,\"pitch\":4},{\"note\":603,\"pitch\":5},{\"note\":603.5,\"pitch\":9},{\"note\":604,\"pitch\":5},{\"note\":604.5,\"pitch\":4},{\"note\":605,\"pitch\":2},{\"note\":605.5,\"pitch\":4},{\"note\":606,\"pitch\":5},{\"note\":606.5,\"pitch\":9},{\"note\":607,\"pitch\":5},{\"note\":607.5,\"pitch\":4},{\"note\":608,\"pitch\":2},{\"note\":608.5,\"pitch\":4},{\"note\":609,\"pitch\":5},{\"note\":609.5,\"pitch\":10},{\"note\":610,\"pitch\":5},{\"note\":610.5,\"pitch\":4},{\"note\":611,\"pitch\":2},{\"note\":611.5,\"pitch\":4},{\"note\":612,\"words\":\"(sim.)\"},{\"note\":612,\"pitch\":5},{\"note\":612.5,\"pitch\":9},{\"note\":613,\"pitch\":5},{\"note\":613.5,\"pitch\":4},{\"note\":614,\"pitch\":0},{\"note\":614.5,\"pitch\":4},{\"note\":615,\"pitch\":5},{\"note\":615.5,\"pitch\":7},{\"note\":616,\"pitch\":5},{\"note\":616.5,\"pitch\":4},{\"note\":617,\"pitch\":0},{\"note\":617.5,\"pitch\":4},{\"note\":618,\"pitch\":2},{\"note\":618.5,\"pitch\":10},{\"note\":619,\"pitch\":9},{\"note\":619.5,\"pitch\":7},{\"note\":620,\"pitch\":2},{\"note\":620.5,\"pitch\":-2},{\"note\":621,\"pitch\":-3},{\"note\":621.5,\"pitch\":0},{\"note\":622,\"pitch\":9},{\"note\":622.5,\"pitch\":5},{\"note\":623,\"pitch\":4},{\"note\":623.5,\"pitch\":0},{\"note\":624,\"pitch\":4},{\"note\":624.5,\"pitch\":9},{\"note\":625,\"pitch\":5},{\"note\":625.5,\"pitch\":4},{\"note\":626,\"pitch\":2},{\"note\":626.5,\"pitch\":0},{\"note\":627,\"pitch\":5},{\"note\":627.5,\"pitch\":10},{\"note\":628,\"pitch\":5},{\"note\":628.5,\"pitch\":4},{\"note\":629,\"pitch\":2},{\"note\":629.5,\"pitch\":-2},{\"note\":630,\"pitch\":5},{\"note\":630.5,\"pitch\":9},{\"note\":631,\"pitch\":5},{\"note\":631.5,\"pitch\":4},{\"note\":632,\"pitch\":0},{\"note\":632.5,\"pitch\":-3},{\"note\":633,\"pitch\":5},{\"note\":633.5,\"pitch\":9},{\"note\":634,\"pitch\":5},{\"note\":634.5,\"pitch\":4},{\"note\":635,\"pitch\":0},{\"note\":635.5,\"pitch\":-3},{\"note\":636,\"pitch\":4},{\"note\":636.5,\"pitch\":7},{\"note\":637,\"pitch\":4},{\"note\":637.5,\"pitch\":2},{\"note\":638,\"pitch\":0},{\"note\":638.5,\"pitch\":-5},{\"note\":639,\"pitch\":4},{\"note\":639.5,\"pitch\":7},{\"note\":640,\"pitch\":4},{\"note\":640.5,\"pitch\":2},{\"note\":641,\"pitch\":0},{\"note\":641.5,\"pitch\":-5},{\"note\":642,\"pitch\":2},{\"note\":642.5,\"pitch\":10},{\"note\":643,\"pitch\":9},{\"note\":643.5,\"pitch\":7},{\"note\":644,\"pitch\":2},{\"note\":644.5,\"pitch\":-2},{\"note\":645,\"pitch\":0},{\"note\":645.5,\"pitch\":9},{\"note\":646,\"pitch\":5},{\"note\":646.5,\"pitch\":4},{\"note\":647,\"pitch\":0},{\"note\":647.5,\"pitch\":-3},{\"note\":648,\"pitch\":0},{\"note\":648.5,\"pitch\":7},{\"note\":649,\"pitch\":5},{\"note\":649.5,\"pitch\":4},{\"note\":650,\"pitch\":0},{\"note\":650.5,\"pitch\":-5},{\"note\":651,\"pitch\":2},{\"note\":651.5,\"pitch\":9},{\"note\":652,\"pitch\":5},{\"note\":652.5,\"pitch\":4},{\"note\":653,\"pitch\":2},{\"note\":653.5,\"pitch\":-3},{\"note\":654,\"pitch\":5},{\"note\":654.5,\"pitch\":10},{\"note\":655,\"pitch\":5},{\"note\":655.5,\"pitch\":4},{\"note\":656,\"pitch\":2},{\"note\":656.5,\"pitch\":-2},{\"note\":657,\"pitch\":5},{\"note\":657.5,\"pitch\":9},{\"note\":658,\"pitch\":5},{\"note\":658.5,\"pitch\":4},{\"note\":659,\"pitch\":0},{\"note\":659.5,\"pitch\":-3},{\"note\":660,\"pitch\":4},{\"note\":660.5,\"pitch\":9},{\"note\":661,\"pitch\":5},{\"note\":661.5,\"pitch\":4},{\"note\":662,\"pitch\":2},{\"note\":662.5,\"pitch\":0},{\"note\":663,\"pitch\":7},{\"note\":663.5,\"pitch\":12},{\"note\":664,\"pitch\":7},{\"note\":664.5,\"pitch\":5},{\"note\":665,\"pitch\":4},{\"note\":665.5,\"pitch\":0},{\"note\":666,\"pitch\":2},{\"note\":666.5,\"pitch\":10},{\"note\":667,\"pitch\":9},{\"note\":667.5,\"pitch\":7},{\"note\":668,\"pitch\":2},{\"note\":668.5,\"pitch\":-2},{\"note\":669,\"pitch\":0},{\"note\":669.5,\"pitch\":9},{\"note\":670,\"pitch\":5},{\"note\":670.5,\"pitch\":4},{\"note\":671,\"pitch\":0},{\"note\":671.5,\"pitch\":-3},{\"note\":672,\"pitch\":4},{\"note\":672.5,\"pitch\":9},{\"note\":673,\"pitch\":5},{\"note\":673.5,\"pitch\":4},{\"note\":674,\"pitch\":2},{\"note\":674.5,\"pitch\":0},{\"note\":675,\"pitch\":7},{\"note\":675.5,\"pitch\":12},{\"note\":676,\"pitch\":7},{\"note\":676.5,\"pitch\":5},{\"note\":677,\"pitch\":4},{\"note\":677.5,\"pitch\":0},{\"note\":678,\"pitch\":5},{\"note\":678.5,\"pitch\":10},{\"note\":679,\"pitch\":5},{\"note\":679.5,\"pitch\":4},{\"note\":680,\"pitch\":2},{\"note\":680.5,\"pitch\":-2},{\"note\":681,\"pitch\":5},{\"note\":681.5,\"pitch\":9},{\"note\":682,\"pitch\":5},{\"note\":682.5,\"pitch\":4},{\"note\":683,\"pitch\":0},{\"note\":683.5,\"pitch\":-3},{\"note\":684,\"pitch\":7},{\"note\":684.5,\"pitch\":12},{\"note\":685,\"pitch\":7},{\"note\":685.5,\"pitch\":5},{\"note\":686,\"pitch\":4},{\"note\":686.5,\"pitch\":0},{\"note\":687,\"pitch\":4},{\"note\":687.5,\"pitch\":9},{\"note\":688,\"pitch\":4},{\"note\":688.5,\"pitch\":2},{\"note\":689,\"pitch\":1},{\"note\":689.5,\"pitch\":2},{\"note\":690,\"pitch\":5},{\"note\":690.5,\"pitch\":4},{\"note\":691,\"pitch\":5},{\"note\":691.5,\"pitch\":9},{\"note\":692,\"pitch\":5},{\"note\":693,\"pitch\":5},{\"note\":693.5,\"pitch\":4},{\"note\":694,\"pitch\":5},{\"note\":694.5,\"pitch\":9},{\"note\":695,\"pitch\":5},{\"note\":696,\"pitch\":5},{\"note\":696.5,\"pitch\":4},{\"note\":697,\"pitch\":5},{\"note\":697.5,\"pitch\":9},{\"note\":698,\"pitch\":5},{\"note\":699,\"pitch\":5},{\"note\":700,\"pitch\":4},{\"note\":701,\"pitch\":2},{\"note\":702,\"pitch\":5},{\"note\":702.5,\"pitch\":4},{\"note\":703,\"pitch\":5},{\"note\":703.5,\"pitch\":9},{\"note\":704,\"pitch\":5},{\"note\":705,\"pitch\":5},{\"note\":705.5,\"pitch\":4},{\"note\":706,\"pitch\":5},{\"note\":706.5,\"pitch\":9},{\"note\":707,\"pitch\":5},{\"note\":707.5,\"pitch\":4},{\"note\":708,\"pitch\":2},{\"note\":708,\"pitch\":2},{\"note\":709,\"pitch\":5},{\"note\":709,\"pitch\":5},{\"note\":710,\"pitch\":9},{\"note\":710,\"pitch\":-3},{\"note\":711,\"pitch\":7},{\"note\":711,\"pitch\":-1},{\"note\":712,\"pitch\":11},{\"note\":712,\"pitch\":2}]},\"P4\":{\"id\":\"P4\",\"name\":\"Clarinet in Bb 1, 2\",\"measureCount\":119,\"notes\":[{\"note\":66,\"words\":\"a2\"},{\"note\":66,\"pitch\":0},{\"note\":66.5,\"pitch\":4},{\"note\":67,\"pitch\":0},{\"note\":67.5,\"pitch\":-1},{\"note\":68,\"pitch\":-3},{\"note\":68.5,\"pitch\":-1},{\"note\":69,\"pitch\":0},{\"note\":69.5,\"pitch\":4},{\"note\":70,\"pitch\":0},{\"note\":70.5,\"pitch\":-1},{\"note\":71,\"pitch\":-3},{\"note\":71.5,\"pitch\":-1},{\"note\":90,\"words\":\"(solo)\"},{\"note\":90,\"pitch\":0},{\"note\":90.5,\"pitch\":4},{\"note\":91,\"pitch\":0},{\"note\":91.5,\"pitch\":-1},{\"note\":92,\"pitch\":-3},{\"note\":92.5,\"pitch\":-1},{\"note\":93,\"pitch\":0},{\"note\":93.5,\"pitch\":4},{\"note\":94,\"pitch\":0},{\"note\":94.5,\"pitch\":-1},{\"note\":95,\"pitch\":-3},{\"note\":95.5,\"pitch\":-1},{\"note\":109,\"words\":\"(solo)\"},{\"note\":109,\"pitch\":-3},{\"note\":110,\"pitch\":-1},{\"note\":111,\"pitch\":0},{\"note\":112,\"pitch\":-1},{\"note\":113,\"pitch\":-3},{\"note\":114,\"pitch\":5},{\"note\":116,\"pitch\":5},{\"note\":116.75,\"pitch\":0},{\"note\":117,\"pitch\":9},{\"note\":119,\"pitch\":9},{\"note\":119.75,\"pitch\":4},{\"note\":120,\"pitch\":12},{\"note\":126,\"pitch\":12},{\"note\":126,\"pitch\":0},{\"note\":126.5,\"pitch\":5},{\"note\":127,\"pitch\":0},{\"note\":127.5,\"pitch\":-1},{\"note\":128,\"pitch\":-3},{\"note\":128.5,\"pitch\":-1},{\"note\":129,\"pitch\":0},{\"note\":129.5,\"pitch\":5},{\"note\":130,\"pitch\":0},{\"note\":130.5,\"pitch\":-1},{\"note\":131,\"pitch\":-3},{\"note\":131.5,\"pitch\":-1},{\"note\":132,\"pitch\":0},{\"note\":138,\"pitch\":0},{\"note\":138,\"words\":\"a2\"},{\"note\":138.5,\"pitch\":5},{\"note\":139,\"pitch\":0},{\"note\":139.5,\"pitch\":-1},{\"note\":140,\"pitch\":-3},{\"note\":140.5,\"pitch\":-1},{\"note\":141,\"pitch\":0},{\"note\":141.5,\"pitch\":5},{\"note\":142,\"pitch\":0},{\"note\":142.5,\"pitch\":-1},{\"note\":143,\"pitch\":-3},{\"note\":143.5,\"pitch\":-1},{\"note\":144,\"pitch\":0},{\"note\":243,\"words\":\"a2\"},{\"note\":243,\"pitch\":11},{\"note\":243.5,\"pitch\":14},{\"note\":244,\"pitch\":11},{\"note\":244.5,\"pitch\":9},{\"note\":245,\"pitch\":8},{\"note\":245.5,\"pitch\":4},{\"note\":295,\"pitch\":9},{\"note\":295,\"words\":\"(solo-17)\"},{\"note\":296,\"pitch\":11},{\"note\":297,\"pitch\":12},{\"note\":298,\"pitch\":11},{\"note\":299,\"pitch\":9},{\"note\":300,\"pitch\":5},{\"note\":302,\"pitch\":9},{\"note\":303,\"pitch\":4},{\"note\":306,\"pitch\":4},{\"note\":318,\"pitch\":0},{\"note\":318,\"words\":\"a2\"},{\"note\":318.5,\"pitch\":4},{\"note\":319,\"pitch\":0},{\"note\":319.5,\"pitch\":-1},{\"note\":320,\"pitch\":-3},{\"note\":320.5,\"pitch\":-1},{\"note\":321,\"pitch\":0},{\"note\":321.5,\"pitch\":4},{\"note\":322,\"pitch\":0},{\"note\":330,\"pitch\":0},{\"note\":330.5,\"pitch\":4},{\"note\":331,\"pitch\":0},{\"note\":331.5,\"pitch\":-1},{\"note\":332,\"pitch\":-3},{\"note\":332.5,\"pitch\":-1},{\"note\":333,\"pitch\":0},{\"note\":333.5,\"pitch\":4},{\"note\":334,\"pitch\":0},{\"note\":334.5,\"pitch\":-1},{\"note\":335,\"pitch\":-3},{\"note\":335.5,\"pitch\":-1},{\"note\":366,\"words\":\"(cue-24)\"},{\"note\":366,\"pitch\":-3},{\"note\":366,\"pitch\":2},{\"note\":369,\"pitch\":-5},{\"note\":369,\"pitch\":0},{\"note\":372,\"pitch\":-5},{\"note\":372,\"pitch\":-1},{\"note\":375,\"pitch\":-3},{\"note\":375,\"pitch\":-8},{\"note\":376.5,\"pitch\":-5},{\"note\":376.5,\"pitch\":0},{\"note\":378,\"pitch\":-3},{\"note\":378,\"pitch\":0},{\"note\":381,\"pitch\":-5},{\"note\":381,\"pitch\":0},{\"note\":384,\"pitch\":-5},{\"note\":384,\"pitch\":0},{\"note\":387,\"pitch\":-1},{\"note\":387,\"pitch\":-5},{\"note\":402,\"pitch\":-8},{\"note\":402,\"words\":\"(solo-34)\"},{\"note\":403.5,\"pitch\":-7},{\"note\":405,\"pitch\":0},{\"note\":406.5,\"pitch\":-5},{\"note\":408,\"pitch\":-3},{\"note\":409.5,\"pitch\":-1},{\"note\":411,\"pitch\":0},{\"note\":412.5,\"pitch\":2},{\"note\":414,\"pitch\":0},{\"note\":414,\"pitch\":-3},{\"note\":420,\"pitch\":0},{\"note\":420,\"pitch\":-3},{\"note\":426,\"pitch\":-3},{\"note\":426,\"pitch\":0},{\"note\":444,\"pitch\":0},{\"note\":444,\"pitch\":-3},{\"note\":444,\"words\":\"(cue-6)\"},{\"note\":444.75,\"pitch\":-3},{\"note\":444.75,\"pitch\":0},{\"note\":445,\"pitch\":-3},{\"note\":445,\"pitch\":0},{\"note\":445.5,\"pitch\":0},{\"note\":445.5,\"pitch\":-3},{\"note\":446.25,\"pitch\":0},{\"note\":446.25,\"pitch\":-3},{\"note\":446.5,\"pitch\":0},{\"note\":446.5,\"pitch\":-3},{\"note\":447,\"pitch\":-3},{\"note\":447,\"pitch\":0},{\"note\":447.75,\"pitch\":-3},{\"note\":447.75,\"pitch\":0},{\"note\":448,\"pitch\":-3},{\"note\":448,\"pitch\":0},{\"note\":448.5,\"pitch\":-3},{\"note\":448.5,\"pitch\":0},{\"note\":449.25,\"pitch\":0},{\"note\":449.25,\"pitch\":-3},{\"note\":449.5,\"pitch\":0},{\"note\":449.5,\"pitch\":-3},{\"note\":516,\"words\":\"a2\"},{\"note\":516,\"words\":\"(cue-24)\"},{\"note\":516,\"pitch\":0},{\"note\":516.5,\"pitch\":4},{\"note\":517,\"pitch\":0},{\"note\":517.5,\"pitch\":-1},{\"note\":518,\"pitch\":-3},{\"note\":518.5,\"pitch\":-1},{\"note\":519,\"pitch\":0},{\"note\":519.5,\"pitch\":4},{\"note\":520,\"pitch\":0},{\"note\":520.5,\"pitch\":-1},{\"note\":521,\"pitch\":-3},{\"note\":521.5,\"pitch\":-1},{\"note\":522,\"pitch\":0},{\"note\":522.5,\"pitch\":5},{\"note\":523,\"pitch\":0},{\"note\":523.5,\"pitch\":-1},{\"note\":524,\"pitch\":-3},{\"note\":524.5,\"pitch\":-1},{\"note\":525,\"pitch\":0},{\"note\":525.5,\"pitch\":5},{\"note\":526,\"pitch\":0},{\"note\":526.5,\"pitch\":-1},{\"note\":527,\"pitch\":-3},{\"note\":527.5,\"pitch\":-1},{\"note\":558,\"words\":\"a1\"},{\"note\":558,\"words\":\"(cue-150)\"},{\"note\":558,\"pitch\":-12},{\"note\":558.5,\"pitch\":-13},{\"note\":559,\"pitch\":-12},{\"note\":559.5,\"pitch\":-8},{\"note\":560,\"pitch\":-12},{\"note\":561,\"pitch\":-12},{\"note\":561.5,\"pitch\":-13},{\"note\":562,\"pitch\":-12},{\"note\":562.5,\"pitch\":-8},{\"note\":563,\"pitch\":-12},{\"note\":564,\"pitch\":-10},{\"note\":564.5,\"pitch\":-12},{\"note\":565,\"pitch\":-10},{\"note\":565.5,\"pitch\":-3},{\"note\":566,\"pitch\":-10},{\"note\":567,\"pitch\":-7},{\"note\":567.5,\"pitch\":-8},{\"note\":568,\"pitch\":-7},{\"note\":568.5,\"pitch\":0},{\"note\":569,\"pitch\":-7},{\"note\":570,\"words\":\"a2\"},{\"note\":570,\"pitch\":0},{\"note\":570.5,\"pitch\":4},{\"note\":571,\"pitch\":0},{\"note\":571.5,\"pitch\":-1},{\"note\":572,\"pitch\":-3},{\"note\":572.5,\"pitch\":-1},{\"note\":573,\"pitch\":0},{\"note\":573.5,\"pitch\":4},{\"note\":574,\"pitch\":0},{\"note\":574.5,\"pitch\":-1},{\"note\":575,\"pitch\":-3},{\"note\":575.5,\"pitch\":-1},{\"note\":576,\"pitch\":0},{\"note\":576.5,\"pitch\":5},{\"note\":577,\"pitch\":0},{\"note\":577.5,\"pitch\":-1},{\"note\":578,\"pitch\":-3},{\"note\":578.5,\"pitch\":-1},{\"note\":579,\"pitch\":0},{\"note\":579.5,\"pitch\":5},{\"note\":580,\"pitch\":0},{\"note\":580.5,\"pitch\":-1},{\"note\":581,\"pitch\":-3},{\"note\":581.5,\"pitch\":-1},{\"note\":582,\"pitch\":0},{\"note\":582.5,\"pitch\":4},{\"note\":583,\"pitch\":0},{\"note\":583.5,\"pitch\":-1},{\"note\":584,\"pitch\":-3},{\"note\":584.5,\"pitch\":-1},{\"note\":585,\"pitch\":0},{\"note\":585.5,\"pitch\":4},{\"note\":586,\"pitch\":0},{\"note\":586.5,\"pitch\":-1},{\"note\":587,\"pitch\":-3},{\"note\":587.5,\"pitch\":-1},{\"note\":588,\"pitch\":0},{\"note\":588.5,\"pitch\":5},{\"note\":589,\"pitch\":0},{\"note\":589.5,\"pitch\":-1},{\"note\":590,\"pitch\":-3},{\"note\":590.5,\"pitch\":-1},{\"note\":591,\"pitch\":0},{\"note\":591.5,\"pitch\":5},{\"note\":592,\"pitch\":0},{\"note\":592.5,\"pitch\":-1},{\"note\":593,\"pitch\":-3},{\"note\":593.5,\"pitch\":-1},{\"note\":594,\"pitch\":0},{\"note\":594,\"words\":\"(half legato, half stacc.)\"},{\"note\":594.5,\"pitch\":4},{\"note\":595,\"pitch\":0},{\"note\":595.5,\"pitch\":-1},{\"note\":596,\"pitch\":-3},{\"note\":596.5,\"pitch\":-1},{\"note\":597,\"pitch\":0},{\"note\":597.5,\"pitch\":5},{\"note\":598,\"pitch\":0},{\"note\":598.5,\"pitch\":-1},{\"note\":599,\"pitch\":-3},{\"note\":599.5,\"pitch\":-1},{\"note\":600,\"pitch\":0},{\"note\":600.5,\"pitch\":4},{\"note\":601,\"pitch\":0},{\"note\":601.5,\"pitch\":-1},{\"note\":602,\"pitch\":-3},{\"note\":602.5,\"pitch\":-1},{\"note\":603,\"pitch\":0},{\"note\":603.5,\"pitch\":4},{\"note\":604,\"pitch\":0},{\"note\":604.5,\"pitch\":-1},{\"note\":605,\"pitch\":-3},{\"note\":605.5,\"pitch\":-1},{\"note\":606,\"pitch\":0},{\"note\":606.5,\"pitch\":4},{\"note\":607,\"pitch\":0},{\"note\":607.5,\"pitch\":-1},{\"note\":608,\"pitch\":-3},{\"note\":608.5,\"pitch\":-1},{\"note\":609,\"pitch\":0},{\"note\":609.5,\"pitch\":5},{\"note\":610,\"pitch\":0},{\"note\":610.5,\"pitch\":-1},{\"note\":611,\"pitch\":-3},{\"note\":611.5,\"pitch\":-1},{\"note\":612,\"pitch\":0},{\"note\":612,\"words\":\"(sim.)\"},{\"note\":612.5,\"pitch\":4},{\"note\":613,\"pitch\":0},{\"note\":613.5,\"pitch\":-1},{\"note\":614,\"pitch\":-5},{\"note\":614.5,\"pitch\":-1},{\"note\":615,\"pitch\":0},{\"note\":615.5,\"pitch\":2},{\"note\":616,\"pitch\":0},{\"note\":616.5,\"pitch\":-1},{\"note\":617,\"pitch\":-5},{\"note\":617.5,\"pitch\":-1},{\"note\":618,\"pitch\":-3},{\"note\":618.5,\"pitch\":5},{\"note\":619,\"pitch\":4},{\"note\":619.5,\"pitch\":2},{\"note\":620,\"pitch\":-3},{\"note\":620.5,\"pitch\":-7},{\"note\":621,\"pitch\":-8},{\"note\":621.5,\"pitch\":-5},{\"note\":622,\"pitch\":4},{\"note\":622.5,\"pitch\":0},{\"note\":623,\"pitch\":-1},{\"note\":623.5,\"pitch\":-5},{\"note\":624,\"pitch\":-1},{\"note\":624.5,\"pitch\":4},{\"note\":625,\"pitch\":0},{\"note\":625.5,\"pitch\":-1},{\"note\":626,\"pitch\":-3},{\"note\":626.5,\"pitch\":-5},{\"note\":627,\"pitch\":0},{\"note\":627.5,\"pitch\":5},{\"note\":628,\"pitch\":0},{\"note\":628.5,\"pitch\":-1},{\"note\":629,\"pitch\":-3},{\"note\":629.5,\"pitch\":-7},{\"note\":630,\"pitch\":0},{\"note\":630.5,\"pitch\":4},{\"note\":631,\"pitch\":0},{\"note\":631.5,\"pitch\":-1},{\"note\":632,\"pitch\":-5},{\"note\":632.5,\"pitch\":-8},{\"note\":633,\"pitch\":0},{\"note\":633.5,\"pitch\":4},{\"note\":634,\"pitch\":0},{\"note\":634.5,\"pitch\":-1},{\"note\":635,\"pitch\":-5},{\"note\":635.5,\"pitch\":-8},{\"note\":636,\"pitch\":-1},{\"note\":636.5,\"pitch\":2},{\"note\":637,\"pitch\":-1},{\"note\":637.5,\"pitch\":-3},{\"note\":638,\"pitch\":-5},{\"note\":638.5,\"pitch\":-10},{\"note\":639,\"pitch\":-1},{\"note\":639.5,\"pitch\":2},{\"note\":640,\"pitch\":-1},{\"note\":640.5,\"pitch\":-3},{\"note\":641,\"pitch\":-5},{\"note\":641.5,\"pitch\":-10},{\"note\":642,\"pitch\":-3},{\"note\":642.5,\"pitch\":5},{\"note\":643,\"pitch\":4},{\"note\":643.5,\"pitch\":2},{\"note\":644,\"pitch\":-3},{\"note\":644.5,\"pitch\":-7},{\"note\":645,\"pitch\":-5},{\"note\":645.5,\"pitch\":4},{\"note\":646,\"pitch\":0},{\"note\":646.5,\"pitch\":-1},{\"note\":647,\"pitch\":-5},{\"note\":647.5,\"pitch\":-8},{\"note\":648,\"pitch\":-5},{\"note\":648.5,\"pitch\":2},{\"note\":649,\"pitch\":0},{\"note\":649.5,\"pitch\":-1},{\"note\":650,\"pitch\":-5},{\"note\":650.5,\"pitch\":-10},{\"note\":651,\"pitch\":-3},{\"note\":651.5,\"pitch\":4},{\"note\":652,\"pitch\":0},{\"note\":652.5,\"pitch\":-1},{\"note\":653,\"pitch\":-3},{\"note\":653.5,\"pitch\":-8},{\"note\":654,\"pitch\":0},{\"note\":654.5,\"pitch\":5},{\"note\":655,\"pitch\":0},{\"note\":655.5,\"pitch\":-1},{\"note\":656,\"pitch\":-3},{\"note\":656.5,\"pitch\":-7},{\"note\":657,\"pitch\":0},{\"note\":657.5,\"pitch\":4},{\"note\":658,\"pitch\":0},{\"note\":658.5,\"pitch\":-1},{\"note\":659,\"pitch\":-5},{\"note\":659.5,\"pitch\":-8},{\"note\":660,\"pitch\":-1},{\"note\":660.5,\"pitch\":4},{\"note\":661,\"pitch\":0},{\"note\":661.5,\"pitch\":-1},{\"note\":662,\"pitch\":-3},{\"note\":662.5,\"pitch\":-5},{\"note\":663,\"pitch\":2},{\"note\":663.5,\"pitch\":7},{\"note\":664,\"pitch\":2},{\"note\":664.5,\"pitch\":0},{\"note\":665,\"pitch\":-1},{\"note\":665.5,\"pitch\":-5},{\"note\":666,\"pitch\":-3},{\"note\":666.5,\"pitch\":5},{\"note\":667,\"pitch\":4},{\"note\":667.5,\"pitch\":2},{\"note\":668,\"pitch\":-3},{\"note\":668.5,\"pitch\":-7},{\"note\":669,\"pitch\":-5},{\"note\":669.5,\"pitch\":4},{\"note\":670,\"pitch\":0},{\"note\":670.5,\"pitch\":-1},{\"note\":671,\"pitch\":-5},{\"note\":671.5,\"pitch\":-8},{\"note\":672,\"pitch\":-1},{\"note\":672.5,\"pitch\":4},{\"note\":673,\"pitch\":0},{\"note\":673.5,\"pitch\":-1},{\"note\":674,\"pitch\":-3},{\"note\":674.5,\"pitch\":-5},{\"note\":675,\"pitch\":2},{\"note\":675.5,\"pitch\":7},{\"note\":676,\"pitch\":2},{\"note\":676.5,\"pitch\":0},{\"note\":677,\"pitch\":-1},{\"note\":677.5,\"pitch\":-5},{\"note\":678,\"pitch\":0},{\"note\":678.5,\"pitch\":5},{\"note\":679,\"pitch\":0},{\"note\":679.5,\"pitch\":-1},{\"note\":680,\"pitch\":-3},{\"note\":680.5,\"pitch\":-7},{\"note\":681,\"pitch\":0},{\"note\":681.5,\"pitch\":4},{\"note\":682,\"pitch\":0},{\"note\":682.5,\"pitch\":-1},{\"note\":683,\"pitch\":-5},{\"note\":683.5,\"pitch\":-8},{\"note\":684,\"pitch\":2},{\"note\":684.5,\"pitch\":7},{\"note\":685,\"pitch\":2},{\"note\":685.5,\"pitch\":0},{\"note\":686,\"pitch\":-1},{\"note\":686.5,\"pitch\":-5},{\"note\":687,\"pitch\":-1},{\"note\":687.5,\"pitch\":4},{\"note\":688,\"pitch\":-1},{\"note\":688.5,\"pitch\":-3},{\"note\":689,\"pitch\":-4},{\"note\":689.5,\"pitch\":-3},{\"note\":690,\"pitch\":0},{\"note\":690.5,\"pitch\":-1},{\"note\":691,\"pitch\":0},{\"note\":691.5,\"pitch\":4},{\"note\":692,\"pitch\":0},{\"note\":693,\"pitch\":0},{\"note\":693.5,\"pitch\":-1},{\"note\":694,\"pitch\":0},{\"note\":694.5,\"pitch\":4},{\"note\":695,\"pitch\":0},{\"note\":696,\"pitch\":0},{\"note\":696.5,\"pitch\":-1},{\"note\":697,\"pitch\":0},{\"note\":697.5,\"pitch\":4},{\"note\":698,\"pitch\":0},{\"note\":699,\"pitch\":0},{\"note\":700,\"pitch\":-1},{\"note\":701,\"pitch\":-3},{\"note\":702,\"pitch\":0},{\"note\":702.5,\"pitch\":-1},{\"note\":703,\"pitch\":0},{\"note\":703.5,\"pitch\":4},{\"note\":704,\"pitch\":0},{\"note\":705,\"pitch\":0},{\"note\":705.5,\"pitch\":-1},{\"note\":706,\"pitch\":0},{\"note\":706.5,\"pitch\":4},{\"note\":707,\"pitch\":0},{\"note\":707.5,\"pitch\":-1},{\"note\":708,\"pitch\":-3},{\"note\":708,\"pitch\":-3},{\"note\":709,\"pitch\":0},{\"note\":709,\"pitch\":0},{\"note\":710,\"pitch\":4},{\"note\":710,\"pitch\":-8},{\"note\":711,\"pitch\":-6},{\"note\":711,\"pitch\":2},{\"note\":712,\"pitch\":6},{\"note\":712,\"pitch\":-3}]},\"P5\":{\"id\":\"P5\",\"name\":\"Bass Clarinet\",\"measureCount\":119,\"notes\":[{\"note\":96,\"words\":\"(cue)\"},{\"note\":96,\"pitch\":0},{\"note\":96.5,\"pitch\":5},{\"note\":97,\"pitch\":0},{\"note\":97.5,\"pitch\":-1},{\"note\":98,\"pitch\":-3},{\"note\":98.5,\"pitch\":-1},{\"note\":99,\"pitch\":0},{\"note\":99.5,\"pitch\":5},{\"note\":100,\"pitch\":0},{\"note\":100.5,\"pitch\":-1},{\"note\":101,\"pitch\":-3},{\"note\":101.5,\"pitch\":-1},{\"note\":102,\"pitch\":0},{\"note\":108,\"pitch\":0},{\"note\":108.5,\"pitch\":4},{\"note\":109,\"pitch\":0},{\"note\":109.5,\"pitch\":-1},{\"note\":110,\"pitch\":-3},{\"note\":110.5,\"pitch\":-1},{\"note\":111,\"pitch\":0},{\"note\":111.5,\"pitch\":4},{\"note\":112,\"pitch\":0},{\"note\":112.5,\"pitch\":-1},{\"note\":113,\"pitch\":-3},{\"note\":113.5,\"pitch\":-1},{\"note\":114,\"pitch\":0},{\"note\":114.5,\"pitch\":5},{\"note\":115,\"pitch\":0},{\"note\":115.5,\"pitch\":-1},{\"note\":116,\"pitch\":-3},{\"note\":116.5,\"pitch\":-1},{\"note\":117,\"pitch\":0},{\"note\":117.5,\"pitch\":5},{\"note\":118,\"pitch\":0},{\"note\":118.5,\"pitch\":-1},{\"note\":119,\"pitch\":-3},{\"note\":119.5,\"pitch\":-1},{\"note\":132,\"pitch\":0},{\"note\":132.5,\"pitch\":4},{\"note\":133,\"pitch\":0},{\"note\":133.5,\"pitch\":-1},{\"note\":134,\"pitch\":-3},{\"note\":134.5,\"pitch\":-1},{\"note\":135,\"pitch\":0},{\"note\":135.5,\"pitch\":4},{\"note\":136,\"pitch\":0},{\"note\":136.5,\"pitch\":-1},{\"note\":137,\"pitch\":-3},{\"note\":137.5,\"pitch\":-1},{\"note\":138,\"pitch\":0},{\"note\":324,\"pitch\":0},{\"note\":324,\"words\":\"(cue-18)\"},{\"note\":324.5,\"pitch\":5},{\"note\":325,\"pitch\":0},{\"note\":325.5,\"pitch\":-1},{\"note\":326,\"pitch\":-3},{\"note\":326.5,\"pitch\":-1},{\"note\":327,\"pitch\":0},{\"note\":327.5,\"pitch\":5},{\"note\":328,\"pitch\":0},{\"note\":336,\"pitch\":0},{\"note\":336.5,\"pitch\":5},{\"note\":337,\"pitch\":0},{\"note\":337.5,\"pitch\":-1},{\"note\":338,\"pitch\":-3},{\"note\":338.5,\"pitch\":-1},{\"note\":339,\"pitch\":0},{\"note\":339.5,\"pitch\":5},{\"note\":340,\"pitch\":0},{\"note\":340.5,\"pitch\":-1},{\"note\":341,\"pitch\":-3},{\"note\":366,\"pitch\":5},{\"note\":369,\"pitch\":4},{\"note\":372,\"pitch\":2},{\"note\":375,\"pitch\":0},{\"note\":376.5,\"pitch\":4},{\"note\":378,\"pitch\":5},{\"note\":381,\"pitch\":4},{\"note\":384,\"pitch\":4},{\"note\":387,\"pitch\":2},{\"note\":390,\"words\":\"(solo-12)\"},{\"note\":390,\"pitch\":-20},{\"note\":391.5,\"pitch\":-19},{\"note\":393,\"pitch\":-12},{\"note\":394.5,\"pitch\":-17},{\"note\":396,\"pitch\":-15},{\"note\":397.5,\"pitch\":-13},{\"note\":399,\"pitch\":-12},{\"note\":400.5,\"pitch\":-10},{\"note\":402,\"pitch\":-8},{\"note\":403.5,\"pitch\":-7},{\"note\":405,\"pitch\":0},{\"note\":406.5,\"pitch\":-5},{\"note\":408,\"pitch\":-3},{\"note\":409.5,\"pitch\":-1},{\"note\":411,\"pitch\":0},{\"note\":412.5,\"pitch\":2},{\"note\":420,\"pitch\":-19},{\"note\":426,\"pitch\":-15},{\"note\":444,\"pitch\":4},{\"note\":444.75,\"pitch\":4},{\"note\":445,\"pitch\":4},{\"note\":445.5,\"pitch\":4},{\"note\":446.25,\"pitch\":4},{\"note\":446.5,\"pitch\":4},{\"note\":447,\"pitch\":4},{\"note\":447.75,\"pitch\":4},{\"note\":448,\"pitch\":4},{\"note\":448.5,\"pitch\":4},{\"note\":449.25,\"pitch\":4},{\"note\":449.5,\"pitch\":4},{\"note\":528,\"pitch\":0},{\"note\":528.5,\"pitch\":4},{\"note\":529,\"pitch\":0},{\"note\":529.5,\"pitch\":-1},{\"note\":530,\"pitch\":-3},{\"note\":530.5,\"pitch\":-1},{\"note\":531,\"pitch\":0},{\"note\":531.5,\"pitch\":4},{\"note\":532,\"pitch\":0},{\"note\":532.5,\"pitch\":-1},{\"note\":533,\"pitch\":-3},{\"note\":533.5,\"pitch\":-1},{\"note\":534,\"pitch\":0},{\"note\":534.5,\"pitch\":5},{\"note\":535,\"pitch\":0},{\"note\":535.5,\"pitch\":-1},{\"note\":536,\"pitch\":-3},{\"note\":536.5,\"pitch\":-1},{\"note\":537,\"pitch\":0},{\"note\":537.5,\"pitch\":5},{\"note\":538,\"pitch\":0},{\"note\":538.5,\"pitch\":-1},{\"note\":539,\"pitch\":-3},{\"note\":539.5,\"pitch\":-1},{\"note\":558,\"pitch\":-12},{\"note\":558.5,\"pitch\":-13},{\"note\":559,\"pitch\":-12},{\"note\":559.5,\"pitch\":-8},{\"note\":560,\"pitch\":-12},{\"note\":561,\"pitch\":-12},{\"note\":561.5,\"pitch\":-13},{\"note\":562,\"pitch\":-12},{\"note\":562.5,\"pitch\":-8},{\"note\":563,\"pitch\":-12},{\"note\":564,\"pitch\":-10},{\"note\":564.5,\"pitch\":-12},{\"note\":565,\"pitch\":-10},{\"note\":565.5,\"pitch\":-3},{\"note\":566,\"pitch\":-10},{\"note\":567,\"pitch\":-7},{\"note\":567.5,\"pitch\":-8},{\"note\":568,\"pitch\":-7},{\"note\":568.5,\"pitch\":0},{\"note\":569,\"pitch\":-7},{\"note\":582,\"pitch\":-3},{\"note\":588,\"pitch\":-7},{\"note\":591,\"pitch\":-19},{\"note\":684,\"pitch\":-10},{\"note\":687,\"pitch\":-8},{\"note\":690,\"pitch\":-12},{\"note\":693,\"pitch\":-8},{\"note\":696,\"pitch\":-7},{\"note\":699,\"pitch\":-3},{\"note\":702,\"pitch\":-15},{\"note\":705,\"pitch\":-7},{\"note\":708,\"pitch\":0},{\"note\":709,\"pitch\":-3},{\"note\":710,\"pitch\":-8},{\"note\":711,\"pitch\":-10},{\"note\":712,\"pitch\":-10}]},\"P6\":{\"id\":\"P6\",\"name\":\"Bassoon 1, 2\",\"measureCount\":119,\"notes\":[{\"note\":96,\"words\":\"a1\"},{\"note\":96,\"words\":\"(cue)\"},{\"note\":96,\"pitch\":-14},{\"note\":96.5,\"pitch\":-9},{\"note\":97,\"pitch\":-14},{\"note\":97.5,\"pitch\":-15},{\"note\":98,\"pitch\":-17},{\"note\":98.5,\"pitch\":-15},{\"note\":99,\"pitch\":-14},{\"note\":99.5,\"pitch\":-9},{\"note\":100,\"pitch\":-14},{\"note\":100.5,\"pitch\":-15},{\"note\":101,\"pitch\":-17},{\"note\":101.5,\"pitch\":-15},{\"note\":102,\"pitch\":-14},{\"note\":108,\"pitch\":-14},{\"note\":108.5,\"pitch\":-10},{\"note\":109,\"pitch\":-14},{\"note\":109.5,\"pitch\":-15},{\"note\":110,\"pitch\":-17},{\"note\":110.5,\"pitch\":-15},{\"note\":111,\"pitch\":-14},{\"note\":111.5,\"pitch\":-10},{\"note\":112,\"pitch\":-14},{\"note\":112.5,\"pitch\":-15},{\"note\":113,\"pitch\":-17},{\"note\":113.5,\"pitch\":-15},{\"note\":114,\"pitch\":-14},{\"note\":114.5,\"pitch\":-9},{\"note\":115,\"pitch\":-14},{\"note\":115.5,\"pitch\":-15},{\"note\":116,\"pitch\":-17},{\"note\":116.5,\"pitch\":-15},{\"note\":117,\"pitch\":-14},{\"note\":117.5,\"pitch\":-9},{\"note\":118,\"pitch\":-14},{\"note\":118.5,\"pitch\":-15},{\"note\":119,\"pitch\":-17},{\"note\":119.5,\"pitch\":-15},{\"note\":132,\"pitch\":-14},{\"note\":132.5,\"pitch\":-10},{\"note\":133,\"pitch\":-14},{\"note\":133.5,\"pitch\":-15},{\"note\":134,\"pitch\":-17},{\"note\":134.5,\"pitch\":-15},{\"note\":135,\"pitch\":-14},{\"note\":135.5,\"pitch\":-10},{\"note\":136,\"pitch\":-14},{\"note\":136.5,\"pitch\":-15},{\"note\":137,\"pitch\":-17},{\"note\":137.5,\"pitch\":-15},{\"note\":138,\"pitch\":-14},{\"note\":324,\"words\":\"a1\"},{\"note\":324,\"pitch\":-14},{\"note\":324.5,\"pitch\":-9},{\"note\":325,\"pitch\":-14},{\"note\":325.5,\"pitch\":-15},{\"note\":326,\"pitch\":-17},{\"note\":326.5,\"pitch\":-15},{\"note\":327,\"pitch\":-14},{\"note\":327.5,\"pitch\":-9},{\"note\":328,\"pitch\":-14},{\"note\":336,\"pitch\":-14},{\"note\":336.5,\"pitch\":-9},{\"note\":337,\"pitch\":-14},{\"note\":337.5,\"pitch\":-15},{\"note\":338,\"pitch\":-17},{\"note\":338.5,\"pitch\":-15},{\"note\":339,\"pitch\":-14},{\"note\":339.5,\"pitch\":-9},{\"note\":340,\"pitch\":-14},{\"note\":340.5,\"pitch\":-15},{\"note\":341,\"pitch\":-17},{\"note\":366,\"pitch\":-17},{\"note\":366,\"pitch\":-24},{\"note\":369,\"pitch\":-19},{\"note\":369,\"pitch\":-14},{\"note\":372,\"pitch\":-24},{\"note\":372,\"pitch\":-15},{\"note\":375,\"pitch\":-14},{\"note\":375,\"pitch\":-22},{\"note\":376.5,\"pitch\":-19},{\"note\":376.5,\"pitch\":-10},{\"note\":378,\"pitch\":-9},{\"note\":378,\"pitch\":-17},{\"note\":381,\"pitch\":-10},{\"note\":381,\"pitch\":-19},{\"note\":384,\"pitch\":-7},{\"note\":384,\"pitch\":-14},{\"note\":387,\"pitch\":-15},{\"note\":387,\"pitch\":-19},{\"note\":390,\"words\":\"a1\"},{\"note\":390,\"pitch\":-24},{\"note\":393,\"pitch\":-22},{\"note\":396,\"pitch\":-21},{\"note\":402,\"pitch\":-24},{\"note\":405,\"pitch\":-22},{\"note\":408,\"pitch\":-21},{\"note\":420,\"pitch\":-26},{\"note\":420,\"pitch\":-17},{\"note\":426,\"pitch\":-22},{\"note\":426,\"pitch\":-14},{\"note\":444,\"words\":\"a1\"},{\"note\":444,\"pitch\":-14},{\"note\":444.75,\"pitch\":-14},{\"note\":445,\"pitch\":-14},{\"note\":445.5,\"pitch\":-14},{\"note\":446.25,\"pitch\":-14},{\"note\":446.5,\"pitch\":-14},{\"note\":447,\"pitch\":-14},{\"note\":447.75,\"pitch\":-14},{\"note\":448,\"pitch\":-14},{\"note\":448.5,\"pitch\":-14},{\"note\":449.25,\"pitch\":-14},{\"note\":449.5,\"pitch\":-14},{\"note\":528,\"words\":\"a1\"},{\"note\":528,\"pitch\":-14},{\"note\":528.5,\"pitch\":-10},{\"note\":529,\"pitch\":-14},{\"note\":529.5,\"pitch\":-15},{\"note\":530,\"pitch\":-17},{\"note\":530.5,\"pitch\":-15},{\"note\":531,\"pitch\":-14},{\"note\":531.5,\"pitch\":-10},{\"note\":532,\"pitch\":-14},{\"note\":532.5,\"pitch\":-15},{\"note\":533,\"pitch\":-17},{\"note\":533.5,\"pitch\":-15},{\"note\":534,\"pitch\":-14},{\"note\":534.5,\"pitch\":-9},{\"note\":535,\"pitch\":-14},{\"note\":535.5,\"pitch\":-15},{\"note\":536,\"pitch\":-17},{\"note\":536.5,\"pitch\":-15},{\"note\":537,\"pitch\":-14},{\"note\":537.5,\"pitch\":-9},{\"note\":538,\"pitch\":-14},{\"note\":538.5,\"pitch\":-15},{\"note\":539,\"pitch\":-17},{\"note\":539.5,\"pitch\":-15},{\"note\":558,\"words\":\"a1\"},{\"note\":558,\"pitch\":-26},{\"note\":558.5,\"pitch\":-27},{\"note\":559,\"pitch\":-26},{\"note\":559.5,\"pitch\":-22},{\"note\":560,\"pitch\":-26},{\"note\":561,\"pitch\":-26},{\"note\":561.5,\"pitch\":-27},{\"note\":562,\"pitch\":-26},{\"note\":562.5,\"pitch\":-22},{\"note\":563,\"pitch\":-26},{\"note\":564,\"pitch\":-24},{\"note\":564.5,\"pitch\":-26},{\"note\":565,\"pitch\":-24},{\"note\":565.5,\"pitch\":-17},{\"note\":566,\"pitch\":-24},{\"note\":567,\"pitch\":-21},{\"note\":567.5,\"pitch\":-22},{\"note\":568,\"pitch\":-21},{\"note\":568.5,\"pitch\":-14},{\"note\":569,\"pitch\":-21},{\"note\":576,\"words\":\"a2\"},{\"note\":576,\"pitch\":-17},{\"note\":582,\"pitch\":-22},{\"note\":582,\"pitch\":-17},{\"note\":588,\"pitch\":-21},{\"note\":588,\"pitch\":-14},{\"note\":684,\"pitch\":-19},{\"note\":684,\"pitch\":-15},{\"note\":687,\"pitch\":-18},{\"note\":687,\"pitch\":-15},{\"note\":690,\"pitch\":-19},{\"note\":690,\"pitch\":-10},{\"note\":693,\"pitch\":-22},{\"note\":693,\"pitch\":-14},{\"note\":696,\"pitch\":-17},{\"note\":696,\"pitch\":-9},{\"note\":699,\"pitch\":-17},{\"note\":699,\"pitch\":-10},{\"note\":702,\"pitch\":-17},{\"note\":702,\"pitch\":-10},{\"note\":705,\"pitch\":-17},{\"note\":705,\"pitch\":-9},{\"note\":708,\"pitch\":-14},{\"note\":709,\"pitch\":-17},{\"note\":710,\"pitch\":-22},{\"note\":711,\"pitch\":-24},{\"note\":712,\"pitch\":-17},{\"note\":712,\"pitch\":-8}]},\"P7\":{\"id\":\"P7\",\"name\":\"Contrabassoon (Optional)\",\"measureCount\":119,\"notes\":[{\"note\":402,\"pitch\":-12},{\"note\":405,\"pitch\":-10},{\"note\":408,\"pitch\":-9},{\"note\":420,\"pitch\":-21},{\"note\":426,\"pitch\":-17},{\"note\":582,\"pitch\":-17},{\"note\":588,\"pitch\":-21},{\"note\":684,\"pitch\":-7},{\"note\":687,\"pitch\":-10},{\"note\":690,\"pitch\":-14},{\"note\":693,\"pitch\":-10},{\"note\":696,\"pitch\":-9},{\"note\":699,\"pitch\":-5},{\"note\":702,\"pitch\":-5},{\"note\":705,\"pitch\":-9},{\"note\":708,\"pitch\":-2},{\"note\":709,\"pitch\":-5},{\"note\":710,\"pitch\":-10},{\"note\":711,\"pitch\":-12},{\"note\":712,\"pitch\":-12}]},\"P8\":{\"id\":\"P8\",\"name\":\"Horn in F 1, 2\",\"measureCount\":119,\"notes\":[{\"note\":192,\"words\":\"(cue-54)\"},{\"note\":192,\"pitch\":2},{\"note\":192,\"pitch\":7},{\"note\":195,\"pitch\":5},{\"note\":195,\"pitch\":2},{\"note\":198,\"pitch\":0},{\"note\":198,\"pitch\":4},{\"note\":201,\"pitch\":-3},{\"note\":201,\"pitch\":2},{\"note\":204,\"pitch\":2},{\"note\":204,\"pitch\":-2},{\"note\":207,\"pitch\":-3},{\"note\":207,\"pitch\":0},{\"note\":210,\"pitch\":5},{\"note\":210,\"pitch\":0},{\"note\":213,\"pitch\":4},{\"note\":213,\"pitch\":0},{\"note\":216,\"pitch\":2},{\"note\":216,\"pitch\":7},{\"note\":219,\"pitch\":5},{\"note\":219,\"pitch\":2},{\"note\":222,\"pitch\":0},{\"note\":222,\"pitch\":4},{\"note\":225,\"pitch\":2},{\"note\":225,\"pitch\":-3},{\"note\":226.5,\"pitch\":2},{\"note\":226.5,\"pitch\":5},{\"note\":228,\"pitch\":2},{\"note\":228,\"pitch\":5},{\"note\":231,\"pitch\":0},{\"note\":231,\"pitch\":5},{\"note\":234,\"pitch\":0},{\"note\":234,\"pitch\":4},{\"note\":237,\"pitch\":4},{\"note\":237,\"pitch\":1},{\"note\":240,\"pitch\":1},{\"note\":240,\"pitch\":4},{\"note\":342,\"words\":\"(cue-24)\"},{\"note\":342,\"pitch\":-10},{\"note\":345,\"pitch\":-8},{\"note\":348,\"pitch\":-7},{\"note\":351,\"pitch\":-7},{\"note\":352,\"pitch\":-5},{\"note\":352,\"pitch\":-8},{\"note\":354,\"pitch\":-7},{\"note\":354,\"pitch\":-3},{\"note\":357,\"pitch\":-7},{\"note\":357,\"pitch\":-3},{\"note\":358,\"pitch\":-7},{\"note\":358,\"pitch\":0},{\"note\":360,\"pitch\":-8},{\"note\":360,\"pitch\":-5},{\"note\":366,\"pitch\":7},{\"note\":366,\"pitch\":2},{\"note\":369,\"pitch\":0},{\"note\":369,\"pitch\":5},{\"note\":372,\"pitch\":4},{\"note\":372,\"pitch\":0},{\"note\":375,\"pitch\":-3},{\"note\":375,\"pitch\":2},{\"note\":376.5,\"pitch\":0},{\"note\":376.5,\"pitch\":5},{\"note\":378,\"pitch\":2},{\"note\":378,\"pitch\":5},{\"note\":381,\"pitch\":0},{\"note\":381,\"pitch\":5},{\"note\":384,\"pitch\":0},{\"note\":384,\"pitch\":5},{\"note\":387,\"pitch\":0},{\"note\":387,\"pitch\":4},{\"note\":390,\"words\":\"(solo-43)\"},{\"note\":390,\"words\":\"(sub.)\"},{\"note\":390,\"pitch\":-15},{\"note\":390,\"words\":\"(Optional Hrn)\"},{\"note\":391.5,\"pitch\":-14},{\"note\":393,\"pitch\":-7},{\"note\":394.5,\"pitch\":-12},{\"note\":396,\"pitch\":-10},{\"note\":397.5,\"pitch\":-8},{\"note\":399,\"pitch\":-7},{\"note\":400.5,\"pitch\":-5},{\"note\":402,\"words\":\"(solo)\"},{\"note\":402,\"pitch\":-3},{\"note\":403.5,\"pitch\":-2},{\"note\":405,\"pitch\":5},{\"note\":406.5,\"pitch\":0},{\"note\":408,\"pitch\":2},{\"note\":409.5,\"pitch\":4},{\"note\":411,\"pitch\":5},{\"note\":412.5,\"pitch\":7},{\"note\":414,\"pitch\":9},{\"note\":415.5,\"pitch\":5},{\"note\":416,\"pitch\":9},{\"note\":417,\"pitch\":10},{\"note\":418.5,\"pitch\":5},{\"note\":419,\"pitch\":4},{\"note\":420,\"pitch\":2},{\"note\":423,\"pitch\":-3},{\"note\":424,\"pitch\":2},{\"note\":425,\"pitch\":4},{\"note\":426,\"pitch\":5},{\"note\":432,\"pitch\":5},{\"note\":558,\"words\":\"(cue-150)\"},{\"note\":558,\"pitch\":5},{\"note\":558,\"pitch\":0},{\"note\":564,\"pitch\":2},{\"note\":564,\"pitch\":5},{\"note\":570,\"pitch\":2},{\"note\":576,\"pitch\":2},{\"note\":582,\"pitch\":2},{\"note\":582,\"pitch\":5},{\"note\":588,\"pitch\":5},{\"note\":588,\"pitch\":2},{\"note\":594,\"pitch\":5},{\"note\":595.5,\"pitch\":9},{\"note\":597,\"pitch\":10},{\"note\":598.5,\"pitch\":9},{\"note\":600,\"pitch\":9},{\"note\":606,\"pitch\":5},{\"note\":607.5,\"pitch\":9},{\"note\":609,\"pitch\":10},{\"note\":610.5,\"pitch\":9},{\"note\":612,\"pitch\":9},{\"note\":613.5,\"pitch\":7},{\"note\":615,\"pitch\":7},{\"note\":618,\"pitch\":2},{\"note\":619.5,\"pitch\":4},{\"note\":621,\"pitch\":5},{\"note\":622.5,\"pitch\":0},{\"note\":624,\"pitch\":-3},{\"note\":625.5,\"pitch\":0},{\"note\":627,\"pitch\":2},{\"note\":630,\"pitch\":0},{\"note\":631.5,\"pitch\":-3},{\"note\":633,\"pitch\":0},{\"note\":634.5,\"pitch\":5},{\"note\":636,\"pitch\":4},{\"note\":642,\"pitch\":10},{\"note\":643.5,\"pitch\":9},{\"note\":645,\"pitch\":9},{\"note\":646.5,\"pitch\":7},{\"note\":648,\"pitch\":7},{\"note\":649.5,\"pitch\":5},{\"note\":651,\"pitch\":5},{\"note\":652.5,\"pitch\":9},{\"note\":654,\"pitch\":10},{\"note\":655.5,\"pitch\":9},{\"note\":657,\"pitch\":9},{\"note\":658.5,\"pitch\":5},{\"note\":660,\"pitch\":12},{\"note\":661.5,\"pitch\":9},{\"note\":663,\"pitch\":7},{\"note\":666,\"pitch\":10},{\"note\":667.5,\"pitch\":9},{\"note\":669,\"pitch\":9},{\"note\":670.5,\"pitch\":5},{\"note\":672,\"pitch\":9},{\"note\":673.5,\"pitch\":7},{\"note\":675,\"pitch\":7},{\"note\":676.5,\"pitch\":0},{\"note\":678,\"pitch\":2},{\"note\":679.5,\"pitch\":0},{\"note\":681,\"pitch\":0},{\"note\":682.5,\"pitch\":-3},{\"note\":684,\"pitch\":0},{\"note\":685.5,\"pitch\":4},{\"note\":685.5,\"pitch\":7},{\"note\":687,\"pitch\":4},{\"note\":687,\"pitch\":9},{\"note\":690,\"pitch\":9},{\"note\":691.5,\"pitch\":5},{\"note\":693,\"pitch\":4},{\"note\":694.5,\"pitch\":5},{\"note\":696,\"pitch\":2},{\"note\":697.5,\"pitch\":4},{\"note\":699,\"pitch\":-3},{\"note\":700,\"pitch\":2},{\"note\":701,\"pitch\":4},{\"note\":702,\"pitch\":5},{\"note\":705,\"pitch\":5},{\"note\":706,\"pitch\":4},{\"note\":707,\"pitch\":-2},{\"note\":708,\"words\":\"(cue)\"},{\"note\":708,\"pitch\":2},{\"note\":709,\"pitch\":5},{\"note\":710,\"pitch\":9},{\"note\":711,\"pitch\":2},{\"note\":712,\"pitch\":11}]},\"P9\":{\"id\":\"P9\",\"name\":\"Horn in F 3 (&amp; 4)\",\"measureCount\":119,\"notes\":[{\"note\":192,\"pitch\":-2},{\"note\":195,\"pitch\":-3},{\"note\":198,\"pitch\":-5},{\"note\":201,\"pitch\":-7},{\"note\":204,\"pitch\":-7},{\"note\":207,\"pitch\":-7},{\"note\":210,\"pitch\":-3},{\"note\":213,\"pitch\":-5},{\"note\":216,\"pitch\":-2},{\"note\":219,\"pitch\":-3},{\"note\":222,\"pitch\":-5},{\"note\":225,\"pitch\":-7},{\"note\":226.5,\"pitch\":-3},{\"note\":228,\"pitch\":-2},{\"note\":231,\"pitch\":-3},{\"note\":234,\"pitch\":-5},{\"note\":237,\"pitch\":-3},{\"note\":240,\"pitch\":-3},{\"note\":342,\"pitch\":-10},{\"note\":345,\"pitch\":-11},{\"note\":348,\"pitch\":-10},{\"note\":351,\"pitch\":-10},{\"note\":352,\"pitch\":-12},{\"note\":354,\"pitch\":-12},{\"note\":357,\"pitch\":-12},{\"note\":358,\"pitch\":-12},{\"note\":360,\"pitch\":-12},{\"note\":366,\"pitch\":-2},{\"note\":369,\"pitch\":-3},{\"note\":372,\"pitch\":-5},{\"note\":375,\"pitch\":-7},{\"note\":376.5,\"pitch\":-3},{\"note\":378,\"pitch\":-2},{\"note\":381,\"pitch\":-3},{\"note\":384,\"pitch\":-3},{\"note\":387,\"pitch\":-5},{\"note\":402,\"words\":\"(solo)\"},{\"note\":402,\"pitch\":-3},{\"note\":403.5,\"pitch\":-2},{\"note\":405,\"pitch\":5},{\"note\":406.5,\"pitch\":0},{\"note\":408,\"pitch\":2},{\"note\":409.5,\"pitch\":4},{\"note\":411,\"pitch\":5},{\"note\":412.5,\"pitch\":7},{\"note\":414,\"pitch\":9},{\"note\":415.5,\"pitch\":5},{\"note\":416,\"pitch\":9},{\"note\":417,\"pitch\":10},{\"note\":418.5,\"pitch\":5},{\"note\":419,\"pitch\":4},{\"note\":420,\"pitch\":2},{\"note\":423,\"pitch\":-3},{\"note\":424,\"pitch\":2},{\"note\":425,\"pitch\":4},{\"note\":426,\"pitch\":5},{\"note\":432,\"pitch\":5},{\"note\":558,\"pitch\":-3},{\"note\":564,\"pitch\":-2},{\"note\":582,\"pitch\":-3},{\"note\":588,\"pitch\":-2},{\"note\":594,\"pitch\":5},{\"note\":595.5,\"pitch\":9},{\"note\":597,\"pitch\":10},{\"note\":598.5,\"pitch\":9},{\"note\":600,\"pitch\":9},{\"note\":606,\"pitch\":5},{\"note\":607.5,\"pitch\":9},{\"note\":609,\"pitch\":10},{\"note\":610.5,\"pitch\":9},{\"note\":612,\"pitch\":9},{\"note\":613.5,\"pitch\":7},{\"note\":615,\"pitch\":7},{\"note\":618,\"pitch\":2},{\"note\":619.5,\"pitch\":4},{\"note\":621,\"pitch\":5},{\"note\":622.5,\"pitch\":0},{\"note\":624,\"pitch\":-3},{\"note\":625.5,\"pitch\":0},{\"note\":627,\"pitch\":2},{\"note\":630,\"pitch\":0},{\"note\":631.5,\"pitch\":-3},{\"note\":633,\"pitch\":0},{\"note\":634.5,\"pitch\":5},{\"note\":636,\"pitch\":4},{\"note\":642,\"pitch\":10},{\"note\":643.5,\"pitch\":9},{\"note\":645,\"pitch\":9},{\"note\":646.5,\"pitch\":7},{\"note\":648,\"pitch\":7},{\"note\":649.5,\"pitch\":5},{\"note\":651,\"pitch\":5},{\"note\":652.5,\"pitch\":9},{\"note\":654,\"pitch\":10},{\"note\":655.5,\"pitch\":9},{\"note\":657,\"pitch\":9},{\"note\":658.5,\"pitch\":5},{\"note\":660,\"pitch\":12},{\"note\":661.5,\"pitch\":9},{\"note\":663,\"pitch\":7},{\"note\":666,\"pitch\":10},{\"note\":667.5,\"pitch\":9},{\"note\":669,\"pitch\":9},{\"note\":670.5,\"pitch\":5},{\"note\":672,\"pitch\":9},{\"note\":673.5,\"pitch\":7},{\"note\":675,\"pitch\":7},{\"note\":676.5,\"pitch\":0},{\"note\":678,\"pitch\":2},{\"note\":679.5,\"pitch\":0},{\"note\":681,\"pitch\":0},{\"note\":682.5,\"pitch\":-3},{\"note\":684,\"pitch\":0},{\"note\":685.5,\"pitch\":0},{\"note\":687,\"pitch\":1},{\"note\":690,\"pitch\":9},{\"note\":691.5,\"pitch\":5},{\"note\":693,\"pitch\":4},{\"note\":694.5,\"pitch\":5},{\"note\":696,\"pitch\":2},{\"note\":697.5,\"pitch\":4},{\"note\":699,\"pitch\":-3},{\"note\":700,\"pitch\":2},{\"note\":701,\"pitch\":4},{\"note\":702,\"pitch\":5},{\"note\":705,\"pitch\":5},{\"note\":706,\"pitch\":4},{\"note\":707,\"pitch\":-2},{\"note\":708,\"pitch\":-3},{\"note\":709,\"pitch\":2},{\"note\":710,\"pitch\":5},{\"note\":711,\"pitch\":-1},{\"note\":712,\"pitch\":7}]},\"P10\":{\"id\":\"P10\",\"name\":\"Trumpet in Bb 1, 2\",\"measureCount\":119,\"notes\":[{\"note\":234,\"words\":\"(cue-12-cresc)\"},{\"note\":234,\"pitch\":11},{\"note\":234,\"pitch\":7},{\"note\":237,\"pitch\":8},{\"note\":240,\"pitch\":11},{\"note\":240,\"pitch\":8},{\"note\":366,\"words\":\"(solo-24)\"},{\"note\":366,\"pitch\":5},{\"note\":367.5,\"pitch\":4},{\"note\":369,\"pitch\":4},{\"note\":370.5,\"pitch\":2},{\"note\":372,\"pitch\":2},{\"note\":373.5,\"pitch\":0},{\"note\":375,\"pitch\":0},{\"note\":376.5,\"pitch\":4},{\"note\":378,\"pitch\":5},{\"note\":379.5,\"pitch\":4},{\"note\":381,\"pitch\":4},{\"note\":382.5,\"pitch\":0},{\"note\":384,\"pitch\":7},{\"note\":385.5,\"pitch\":4},{\"note\":387,\"pitch\":2},{\"note\":414,\"pitch\":9},{\"note\":414,\"pitch\":12},{\"note\":420,\"pitch\":12},{\"note\":420,\"pitch\":9},{\"note\":426,\"pitch\":12},{\"note\":426,\"pitch\":9},{\"note\":587,\"words\":\"(cue-7)\"},{\"note\":587,\"words\":\"a2\"},{\"note\":587,\"pitch\":4},{\"note\":588,\"pitch\":12},{\"note\":642,\"words\":\"(cue-66)\"},{\"note\":642,\"pitch\":5},{\"note\":643.5,\"pitch\":4},{\"note\":645,\"pitch\":4},{\"note\":646.5,\"pitch\":2},{\"note\":648,\"pitch\":2},{\"note\":649.5,\"pitch\":0},{\"note\":651,\"pitch\":0},{\"note\":652.5,\"pitch\":4},{\"note\":654,\"pitch\":5},{\"note\":655.5,\"pitch\":4},{\"note\":657,\"pitch\":4},{\"note\":658.5,\"pitch\":0},{\"note\":660,\"pitch\":7},{\"note\":661.5,\"pitch\":4},{\"note\":663,\"pitch\":2},{\"note\":666,\"pitch\":5},{\"note\":667.5,\"pitch\":4},{\"note\":669,\"pitch\":4},{\"note\":670.5,\"pitch\":0},{\"note\":672,\"pitch\":4},{\"note\":673.5,\"pitch\":2},{\"note\":675,\"pitch\":2},{\"note\":676.5,\"pitch\":7},{\"note\":678,\"pitch\":9},{\"note\":679.5,\"pitch\":7},{\"note\":681,\"pitch\":7},{\"note\":682.5,\"pitch\":4},{\"note\":684,\"pitch\":7},{\"note\":685.5,\"pitch\":2},{\"note\":687,\"pitch\":4},{\"note\":690,\"pitch\":4},{\"note\":691.5,\"pitch\":0},{\"note\":693,\"pitch\":-1},{\"note\":694.5,\"pitch\":0},{\"note\":696,\"pitch\":5},{\"note\":697.5,\"pitch\":-1},{\"note\":699,\"pitch\":0},{\"note\":702,\"pitch\":4},{\"note\":703.5,\"pitch\":0},{\"note\":705,\"pitch\":5},{\"note\":706.5,\"pitch\":9},{\"note\":708,\"pitch\":12},{\"note\":708,\"pitch\":9},{\"note\":711,\"words\":\"(cue)\"},{\"note\":711,\"pitch\":9},{\"note\":711,\"pitch\":14},{\"note\":711.3333,\"pitch\":9},{\"note\":711.3333,\"pitch\":14},{\"note\":711.6667,\"pitch\":9},{\"note\":711.6667,\"pitch\":14},{\"note\":712,\"pitch\":9},{\"note\":712,\"pitch\":14},{\"note\":712.3333,\"pitch\":9},{\"note\":712.3333,\"pitch\":14},{\"note\":712.6667,\"pitch\":9},{\"note\":712.6667,\"pitch\":14},{\"note\":713,\"pitch\":9},{\"note\":713,\"pitch\":14},{\"note\":713.3333,\"pitch\":9},{\"note\":713.3333,\"pitch\":14},{\"note\":713.6667,\"pitch\":9},{\"note\":713.6667,\"pitch\":14}]},\"P11\":{\"id\":\"P11\",\"name\":\"Trumpet in Bb 3\",\"measureCount\":119,\"notes\":[{\"note\":234,\"pitch\":2},{\"note\":237,\"pitch\":4},{\"note\":240,\"pitch\":4},{\"note\":414,\"pitch\":4},{\"note\":417,\"pitch\":5},{\"note\":420,\"pitch\":5},{\"note\":426,\"pitch\":4},{\"note\":587,\"pitch\":4},{\"note\":588,\"pitch\":12},{\"note\":642,\"pitch\":5},{\"note\":643.5,\"pitch\":4},{\"note\":645,\"pitch\":4},{\"note\":646.5,\"pitch\":2},{\"note\":648,\"pitch\":2},{\"note\":649.5,\"pitch\":0},{\"note\":651,\"pitch\":0},{\"note\":652.5,\"pitch\":4},{\"note\":654,\"pitch\":5},{\"note\":655.5,\"pitch\":4},{\"note\":657,\"pitch\":4},{\"note\":658.5,\"pitch\":0},{\"note\":660,\"pitch\":7},{\"note\":661.5,\"pitch\":4},{\"note\":663,\"pitch\":2},{\"note\":666,\"pitch\":5},{\"note\":667.5,\"pitch\":4},{\"note\":669,\"pitch\":4},{\"note\":670.5,\"pitch\":0},{\"note\":672,\"pitch\":4},{\"note\":673.5,\"pitch\":2},{\"note\":675,\"pitch\":2},{\"note\":676.5,\"pitch\":7},{\"note\":678,\"pitch\":9},{\"note\":679.5,\"pitch\":7},{\"note\":681,\"pitch\":7},{\"note\":682.5,\"pitch\":4},{\"note\":684,\"pitch\":7},{\"note\":685.5,\"pitch\":2},{\"note\":687,\"pitch\":4},{\"note\":690,\"pitch\":4},{\"note\":691.5,\"pitch\":0},{\"note\":693,\"pitch\":-1},{\"note\":694.5,\"pitch\":0},{\"note\":696,\"pitch\":5},{\"note\":697.5,\"pitch\":-1},{\"note\":699,\"pitch\":0},{\"note\":702,\"pitch\":4},{\"note\":703.5,\"pitch\":0},{\"note\":705,\"pitch\":5},{\"note\":706.5,\"pitch\":9},{\"note\":708,\"pitch\":4},{\"note\":711,\"pitch\":6},{\"note\":711.3333,\"pitch\":6},{\"note\":711.6667,\"pitch\":6},{\"note\":712,\"pitch\":6},{\"note\":712.3333,\"pitch\":6},{\"note\":712.6667,\"pitch\":6},{\"note\":713,\"pitch\":6},{\"note\":713.3333,\"pitch\":6},{\"note\":713.6667,\"pitch\":6}]},\"P12\":{\"id\":\"P12\",\"name\":\"Trombone\",\"measureCount\":119,\"notes\":[{\"note\":234,\"pitch\":-15},{\"note\":234,\"pitch\":-7},{\"note\":237,\"pitch\":-6},{\"note\":237,\"pitch\":-15},{\"note\":240,\"pitch\":-15},{\"note\":240,\"pitch\":-6},{\"note\":342,\"words\":\"(cue-90)\"},{\"note\":342,\"pitch\":-17},{\"note\":342,\"pitch\":-17},{\"note\":345,\"pitch\":-18},{\"note\":345,\"pitch\":-22},{\"note\":348,\"pitch\":-17},{\"note\":348,\"pitch\":-22},{\"note\":351,\"pitch\":-22},{\"note\":351,\"pitch\":-17},{\"note\":352,\"pitch\":-27},{\"note\":352,\"pitch\":-19},{\"note\":354,\"pitch\":-26},{\"note\":354,\"pitch\":-19},{\"note\":357,\"pitch\":-19},{\"note\":357,\"pitch\":-26},{\"note\":358,\"pitch\":-14},{\"note\":358,\"pitch\":-22},{\"note\":360,\"pitch\":-15},{\"note\":360,\"pitch\":-24},{\"note\":366,\"pitch\":-17},{\"note\":366,\"pitch\":-24},{\"note\":369,\"pitch\":-19},{\"note\":369,\"pitch\":-14},{\"note\":372,\"pitch\":-24},{\"note\":372,\"pitch\":-15},{\"note\":375,\"pitch\":-14},{\"note\":375,\"pitch\":-22},{\"note\":376.5,\"pitch\":-19},{\"note\":376.5,\"pitch\":-10},{\"note\":378,\"pitch\":-9},{\"note\":378,\"pitch\":-17},{\"note\":381,\"pitch\":-10},{\"note\":381,\"pitch\":-19},{\"note\":384,\"pitch\":-7},{\"note\":384,\"pitch\":-14},{\"note\":387,\"pitch\":-19},{\"note\":387,\"pitch\":-15},{\"note\":390,\"words\":\"a1\"},{\"note\":390,\"words\":\"(sub.)\"},{\"note\":390,\"pitch\":-22},{\"note\":391.5,\"pitch\":-21},{\"note\":393,\"pitch\":-14},{\"note\":394.5,\"pitch\":-19},{\"note\":396,\"pitch\":-17},{\"note\":397.5,\"pitch\":-15},{\"note\":399,\"pitch\":-14},{\"note\":400.5,\"pitch\":-12},{\"note\":402,\"words\":\"a2\"},{\"note\":402,\"pitch\":-17},{\"note\":402,\"words\":\"(solo-30)\"},{\"note\":405,\"pitch\":-14},{\"note\":408,\"pitch\":-9},{\"note\":408,\"pitch\":-14},{\"note\":409.5,\"pitch\":-7},{\"note\":411,\"pitch\":-5},{\"note\":412.5,\"pitch\":-3},{\"note\":417,\"pitch\":-9},{\"note\":419,\"pitch\":-14},{\"note\":420,\"pitch\":-26},{\"note\":420,\"pitch\":-17},{\"note\":426,\"pitch\":-22},{\"note\":426,\"pitch\":-14},{\"note\":576,\"words\":\"a2\"},{\"note\":576,\"words\":\"(cue-18)\"},{\"note\":576,\"pitch\":-17},{\"note\":582,\"pitch\":-22},{\"note\":582,\"pitch\":-17},{\"note\":588,\"pitch\":-21},{\"note\":588,\"pitch\":-14},{\"note\":684,\"words\":\"(cue-60)\"},{\"note\":684,\"pitch\":-19},{\"note\":684,\"pitch\":-15},{\"note\":687,\"pitch\":-15},{\"note\":687,\"pitch\":-18},{\"note\":690,\"pitch\":-19},{\"note\":690,\"pitch\":-10},{\"note\":693,\"pitch\":-22},{\"note\":693,\"pitch\":-14},{\"note\":696,\"pitch\":-17},{\"note\":696,\"pitch\":-9},{\"note\":699,\"pitch\":-17},{\"note\":699,\"pitch\":-10},{\"note\":702,\"pitch\":-17},{\"note\":702,\"pitch\":-10},{\"note\":705,\"pitch\":-17},{\"note\":705,\"pitch\":-9},{\"note\":708,\"pitch\":-14},{\"note\":709,\"pitch\":-17},{\"note\":710,\"pitch\":-22},{\"note\":711,\"pitch\":-24},{\"note\":712,\"pitch\":-17},{\"note\":712,\"pitch\":-8}]},\"P13\":{\"id\":\"P13\",\"name\":\"Bass Trombone\",\"measureCount\":119,\"notes\":[{\"note\":234,\"pitch\":-24},{\"note\":237,\"pitch\":-22},{\"note\":240,\"pitch\":-22},{\"note\":342,\"pitch\":-17},{\"note\":345,\"pitch\":-22},{\"note\":348,\"pitch\":-29},{\"note\":351,\"pitch\":-29},{\"note\":352,\"pitch\":-27},{\"note\":354,\"pitch\":-26},{\"note\":357,\"pitch\":-26},{\"note\":358,\"pitch\":-26},{\"note\":360,\"pitch\":-31},{\"note\":366,\"pitch\":-24},{\"note\":369,\"pitch\":-26},{\"note\":372,\"pitch\":-31},{\"note\":375,\"pitch\":-29},{\"note\":376.5,\"pitch\":-31},{\"note\":378,\"pitch\":-33},{\"note\":381,\"pitch\":-26},{\"note\":384,\"pitch\":-22},{\"note\":387,\"pitch\":-19},{\"note\":402,\"pitch\":-24},{\"note\":405,\"pitch\":-22},{\"note\":408,\"pitch\":-21},{\"note\":420,\"pitch\":-33},{\"note\":426,\"pitch\":-29},{\"note\":576,\"pitch\":-17},{\"note\":582,\"pitch\":-29},{\"note\":588,\"pitch\":-33},{\"note\":684,\"pitch\":-24},{\"note\":687,\"pitch\":-22},{\"note\":690,\"pitch\":-26},{\"note\":693,\"pitch\":-22},{\"note\":696,\"pitch\":-21},{\"note\":699,\"pitch\":-17},{\"note\":702,\"pitch\":-29},{\"note\":705,\"pitch\":-21},{\"note\":708,\"pitch\":-14},{\"note\":709,\"pitch\":-17},{\"note\":710,\"pitch\":-22},{\"note\":711,\"pitch\":-24},{\"note\":712,\"pitch\":-24}]},\"P14\":{\"id\":\"P14\",\"name\":\"Cimbasso (sub. Tuba or C.B Trombone)\",\"measureCount\":119,\"notes\":[{\"note\":234,\"pitch\":-29},{\"note\":237,\"pitch\":-32},{\"note\":240,\"pitch\":-32},{\"note\":402,\"pitch\":-34},{\"note\":405,\"pitch\":-32},{\"note\":408,\"pitch\":-31},{\"note\":420,\"pitch\":-43},{\"note\":426,\"pitch\":-39},{\"note\":582,\"pitch\":-27},{\"note\":588,\"pitch\":-43},{\"note\":684,\"pitch\":-29},{\"note\":687,\"pitch\":-32},{\"note\":690,\"pitch\":-36},{\"note\":693,\"pitch\":-32},{\"note\":696,\"pitch\":-31},{\"note\":699,\"pitch\":-27},{\"note\":702,\"pitch\":-27},{\"note\":705,\"pitch\":-31},{\"note\":708,\"pitch\":-24},{\"note\":709,\"pitch\":-27},{\"note\":710,\"pitch\":-32},{\"note\":711,\"pitch\":-34},{\"note\":712,\"pitch\":-34}]},\"P15\":{\"id\":\"P15\",\"name\":\"Timpani\",\"measureCount\":119,\"notes\":[{\"note\":116,\"words\":\"(cue-6-cresc)\"},{\"note\":116,\"pitch\":-29},{\"note\":120,\"pitch\":-29},{\"note\":190,\"pitch\":-24},{\"note\":192,\"pitch\":-24},{\"note\":214,\"words\":\"(cue)\"},{\"note\":214,\"pitch\":-24},{\"note\":216,\"pitch\":-24},{\"note\":234,\"pitch\":-19},{\"note\":237,\"pitch\":-22},{\"note\":240,\"pitch\":-22},{\"note\":340,\"words\":\"(cue-5-cresc)\"},{\"note\":340,\"pitch\":-29},{\"note\":342,\"pitch\":-29},{\"note\":352,\"pitch\":-31},{\"note\":352,\"words\":\"(cue-11)\"},{\"note\":354,\"pitch\":-26},{\"note\":358,\"pitch\":-26},{\"note\":360,\"pitch\":-19},{\"note\":386,\"pitch\":-26},{\"note\":386,\"words\":\"(cue-4)\"},{\"note\":387,\"pitch\":-19},{\"note\":417,\"words\":\"(cue-18)\"},{\"note\":417,\"pitch\":-21},{\"note\":420,\"pitch\":-21},{\"note\":426,\"pitch\":-29},{\"note\":429,\"pitch\":-29},{\"note\":430.5,\"pitch\":-29},{\"note\":431,\"pitch\":-29},{\"note\":432,\"pitch\":-29},{\"note\":486,\"words\":\"(cue-11)\"},{\"note\":486,\"pitch\":-21},{\"note\":486.6667,\"pitch\":-21},{\"note\":487.3333,\"pitch\":-21},{\"note\":488,\"pitch\":-21},{\"note\":488.6667,\"pitch\":-21},{\"note\":489.3333,\"pitch\":-21},{\"note\":490,\"pitch\":-21},{\"note\":491,\"pitch\":-21},{\"note\":492,\"pitch\":-21},{\"note\":492.75,\"pitch\":-21},{\"note\":493,\"pitch\":-21},{\"note\":493.5,\"pitch\":-21},{\"note\":494.25,\"pitch\":-21},{\"note\":494.5,\"pitch\":-21},{\"note\":495,\"pitch\":-21},{\"note\":495.75,\"pitch\":-21},{\"note\":496,\"pitch\":-21},{\"note\":588,\"words\":\"(cue-9-cresc)\"},{\"note\":588,\"pitch\":-21},{\"note\":594,\"pitch\":-29},{\"note\":606,\"pitch\":-29},{\"note\":616,\"pitch\":-19},{\"note\":618,\"pitch\":-24},{\"note\":630,\"pitch\":-26},{\"note\":636,\"pitch\":-19},{\"note\":639,\"pitch\":-19},{\"note\":642,\"pitch\":-24},{\"note\":663,\"pitch\":-19},{\"note\":666,\"pitch\":-24},{\"note\":678,\"pitch\":-21},{\"note\":681,\"pitch\":-26},{\"note\":687,\"pitch\":-22},{\"note\":690,\"pitch\":-17},{\"note\":699,\"pitch\":-17},{\"note\":702,\"pitch\":-17},{\"note\":708,\"pitch\":-29},{\"note\":709,\"pitch\":-22},{\"note\":710,\"pitch\":-29},{\"note\":711,\"pitch\":-24},{\"note\":713,\"pitch\":-24}]},\"P16\":{\"id\":\"P16\",\"name\":\"Cymbals\",\"measureCount\":119,\"notes\":[{\"note\":54,\"words\":\"(cue-7-cresc)\"},{\"note\":54,\"pitch\":null},{\"note\":60,\"pitch\":null},{\"note\":189,\"words\":\"(cue-4-cresc)\"},{\"note\":189,\"pitch\":null},{\"note\":192,\"pitch\":null},{\"note\":213,\"words\":\"(cue-4-cresc)\"},{\"note\":213,\"pitch\":null},{\"note\":216,\"pitch\":null},{\"note\":234,\"words\":\"(cue-7-cresc)\"},{\"note\":234,\"pitch\":null},{\"note\":240,\"pitch\":null},{\"note\":414,\"pitch\":null},{\"note\":414,\"words\":\"[CRASH]\"},{\"note\":417,\"words\":\"[SUS. CYM]\"},{\"note\":417,\"pitch\":null},{\"note\":420,\"pitch\":null},{\"note\":429,\"pitch\":null},{\"note\":432,\"pitch\":null},{\"note\":564,\"pitch\":null},{\"note\":570,\"pitch\":null},{\"note\":588,\"pitch\":null},{\"note\":594,\"pitch\":null},{\"note\":615,\"words\":\"(cue)\"},{\"note\":615,\"pitch\":null},{\"note\":618,\"pitch\":null},{\"note\":639,\"words\":\"(cue)\"},{\"note\":639,\"pitch\":null},{\"note\":642,\"pitch\":null},{\"note\":663,\"words\":\"(cue)\"},{\"note\":663,\"pitch\":null},{\"note\":666,\"pitch\":null},{\"note\":687,\"words\":\"(cue)\"},{\"note\":687,\"pitch\":null},{\"note\":690,\"pitch\":null},{\"note\":699,\"pitch\":null},{\"note\":702,\"pitch\":null},{\"note\":708,\"pitch\":null},{\"note\":711,\"pitch\":null},{\"note\":713,\"pitch\":null}]},\"P17\":{\"id\":\"P17\",\"name\":\"Tamtam\",\"measureCount\":119,\"notes\":[{\"note\":27,\"words\":\"(cue)\"},{\"note\":27,\"pitch\":null},{\"note\":30,\"pitch\":null},{\"note\":54,\"pitch\":null},{\"note\":60,\"pitch\":null},{\"note\":189,\"pitch\":null},{\"note\":192,\"pitch\":null},{\"note\":213,\"pitch\":null},{\"note\":216,\"pitch\":null},{\"note\":234,\"pitch\":null},{\"note\":240,\"pitch\":null},{\"note\":267,\"pitch\":null},{\"note\":270,\"pitch\":null},{\"note\":303,\"words\":\"(cue-4)\"},{\"note\":303,\"pitch\":null},{\"note\":306,\"pitch\":null},{\"note\":339,\"pitch\":null},{\"note\":342,\"pitch\":null},{\"note\":417,\"pitch\":null},{\"note\":420,\"pitch\":null},{\"note\":591,\"pitch\":null},{\"note\":594,\"pitch\":null},{\"note\":615,\"pitch\":null},{\"note\":618,\"pitch\":null},{\"note\":639,\"pitch\":null},{\"note\":642,\"pitch\":null},{\"note\":663,\"pitch\":null},{\"note\":666,\"pitch\":null},{\"note\":687,\"pitch\":null},{\"note\":690,\"pitch\":null},{\"note\":699,\"pitch\":null},{\"note\":702,\"pitch\":null},{\"note\":708,\"pitch\":null},{\"note\":711,\"pitch\":null},{\"note\":713,\"pitch\":null}]},\"P18\":{\"id\":\"P18\",\"name\":\"Electric Piano (Pre-Record)\",\"measureCount\":119,\"notes\":[{\"note\":21,\"words\":\"(cue-171)\"},{\"note\":21,\"pitch\":-2},{\"note\":21.5,\"pitch\":-5},{\"note\":22,\"pitch\":-2},{\"note\":22.5,\"pitch\":-5},{\"note\":23,\"pitch\":-2},{\"note\":23.5,\"pitch\":-5},{\"note\":24,\"pitch\":-2},{\"note\":24.5,\"pitch\":-5},{\"note\":25,\"pitch\":-2},{\"note\":25.5,\"pitch\":-5},{\"note\":26,\"pitch\":-2},{\"note\":26.5,\"pitch\":-5},{\"note\":27,\"pitch\":-2},{\"note\":27.5,\"pitch\":-5},{\"note\":28,\"pitch\":-2},{\"note\":28.5,\"pitch\":-5},{\"note\":29,\"pitch\":-2},{\"note\":29.5,\"pitch\":-5},{\"note\":30,\"pitch\":-2},{\"note\":30.5,\"pitch\":-5},{\"note\":31,\"pitch\":-2},{\"note\":31.5,\"pitch\":-5},{\"note\":32,\"pitch\":-2},{\"note\":32.5,\"pitch\":-5},{\"note\":33,\"pitch\":-2},{\"note\":33.5,\"pitch\":-5},{\"note\":34,\"pitch\":-2},{\"note\":34.5,\"pitch\":-5},{\"note\":35,\"pitch\":-2},{\"note\":35.5,\"pitch\":-5},{\"note\":36,\"pitch\":-2},{\"note\":36.5,\"pitch\":-5},{\"note\":37,\"pitch\":-2},{\"note\":37.5,\"pitch\":-5},{\"note\":38,\"pitch\":-2},{\"note\":38.5,\"pitch\":-5},{\"note\":39,\"pitch\":-2},{\"note\":39.5,\"pitch\":-5},{\"note\":40,\"pitch\":-2},{\"note\":40.5,\"pitch\":-5},{\"note\":41,\"pitch\":-2},{\"note\":41.5,\"pitch\":-5},{\"note\":42,\"pitch\":-2},{\"note\":42.5,\"pitch\":-5},{\"note\":43,\"pitch\":-2},{\"note\":43.5,\"pitch\":-5},{\"note\":44,\"pitch\":-2},{\"note\":44.5,\"pitch\":-5},{\"note\":45,\"pitch\":-2},{\"note\":45.5,\"pitch\":-5},{\"note\":46,\"pitch\":-2},{\"note\":46.5,\"pitch\":-5},{\"note\":47,\"pitch\":-2},{\"note\":47.5,\"pitch\":-5},{\"note\":48,\"pitch\":-2},{\"note\":48.5,\"pitch\":-5},{\"note\":49,\"pitch\":-2},{\"note\":49.5,\"pitch\":-5},{\"note\":50,\"pitch\":-2},{\"note\":50.5,\"pitch\":-5},{\"note\":51,\"pitch\":-2},{\"note\":51.5,\"pitch\":-5},{\"note\":52,\"pitch\":-2},{\"note\":52.5,\"pitch\":-5},{\"note\":53,\"pitch\":-2},{\"note\":53.5,\"pitch\":-5},{\"note\":54,\"words\":\"(sim.)\"},{\"note\":54,\"pitch\":-2},{\"note\":54.5,\"pitch\":-5},{\"note\":55,\"pitch\":-2},{\"note\":55.5,\"pitch\":-5},{\"note\":56,\"pitch\":-2},{\"note\":56.5,\"pitch\":-5},{\"note\":57,\"pitch\":-2},{\"note\":57.5,\"pitch\":-5},{\"note\":58,\"pitch\":-2},{\"note\":58.5,\"pitch\":-5},{\"note\":59,\"pitch\":-2},{\"note\":59.5,\"pitch\":-5},{\"note\":60,\"pitch\":-2},{\"note\":60.5,\"pitch\":-5},{\"note\":61,\"pitch\":-2},{\"note\":61.5,\"pitch\":-5},{\"note\":62,\"pitch\":-2},{\"note\":62.5,\"pitch\":-5},{\"note\":63,\"pitch\":-2},{\"note\":63.5,\"pitch\":-5},{\"note\":64,\"pitch\":-2},{\"note\":64.5,\"pitch\":-5},{\"note\":65,\"pitch\":-2},{\"note\":65.5,\"pitch\":-5},{\"note\":66,\"pitch\":-2},{\"note\":66.5,\"pitch\":2},{\"note\":67,\"pitch\":-2},{\"note\":67.5,\"pitch\":-3},{\"note\":68,\"pitch\":-5},{\"note\":68.5,\"pitch\":-3},{\"note\":69,\"pitch\":-2},{\"note\":69.5,\"pitch\":2},{\"note\":70,\"pitch\":-2},{\"note\":70.5,\"pitch\":-3},{\"note\":71,\"pitch\":-5},{\"note\":71.5,\"pitch\":-2},{\"note\":72,\"pitch\":-2},{\"note\":72.5,\"pitch\":-5},{\"note\":73,\"pitch\":-2},{\"note\":73.5,\"pitch\":-5},{\"note\":74,\"pitch\":-2},{\"note\":74.5,\"pitch\":-5},{\"note\":75,\"pitch\":-2},{\"note\":75.5,\"pitch\":-5},{\"note\":76,\"pitch\":-2},{\"note\":76.5,\"pitch\":-5},{\"note\":77,\"pitch\":-2},{\"note\":77.5,\"pitch\":-5},{\"note\":78,\"pitch\":-2},{\"note\":78.5,\"pitch\":3},{\"note\":79,\"pitch\":-2},{\"note\":79.5,\"pitch\":-3},{\"note\":80,\"pitch\":-5},{\"note\":80.5,\"pitch\":-3},{\"note\":81,\"pitch\":-2},{\"note\":81.5,\"pitch\":3},{\"note\":82,\"pitch\":-2},{\"note\":82.5,\"pitch\":-3},{\"note\":83,\"pitch\":-5},{\"note\":83.5,\"pitch\":-3},{\"note\":84,\"pitch\":-2},{\"note\":84.5,\"pitch\":-5},{\"note\":85,\"pitch\":-2},{\"note\":85.5,\"pitch\":-5},{\"note\":86,\"pitch\":-2},{\"note\":86.5,\"pitch\":-5},{\"note\":87,\"pitch\":-2},{\"note\":87.5,\"pitch\":-5},{\"note\":88,\"pitch\":-2},{\"note\":88.5,\"pitch\":-5},{\"note\":89,\"pitch\":-2},{\"note\":89.5,\"pitch\":-5},{\"note\":90,\"pitch\":-2},{\"note\":90.5,\"pitch\":-5},{\"note\":91,\"pitch\":-2},{\"note\":91.5,\"pitch\":-5},{\"note\":92,\"pitch\":-2},{\"note\":92.5,\"pitch\":-5},{\"note\":93,\"pitch\":-2},{\"note\":93.5,\"pitch\":-5},{\"note\":94,\"pitch\":-2},{\"note\":94.5,\"pitch\":-5},{\"note\":95,\"pitch\":-2},{\"note\":95.5,\"pitch\":-5},{\"note\":96,\"pitch\":-2},{\"note\":96.5,\"pitch\":3},{\"note\":97,\"pitch\":-2},{\"note\":97.5,\"pitch\":-3},{\"note\":98,\"pitch\":-5},{\"note\":98.5,\"pitch\":-3},{\"note\":99,\"pitch\":-2},{\"note\":99.5,\"pitch\":3},{\"note\":100,\"pitch\":-2},{\"note\":100.5,\"pitch\":-3},{\"note\":101,\"pitch\":-5},{\"note\":101.5,\"pitch\":-3},{\"note\":102,\"pitch\":-2},{\"note\":102,\"words\":\"(sim.)\"},{\"note\":102.5,\"pitch\":-5},{\"note\":103,\"pitch\":-2},{\"note\":103.5,\"pitch\":-5},{\"note\":104,\"pitch\":-2},{\"note\":104.5,\"pitch\":-5},{\"note\":105,\"pitch\":-2},{\"note\":105.5,\"pitch\":-5},{\"note\":106,\"pitch\":-2},{\"note\":106.5,\"pitch\":-5},{\"note\":107,\"pitch\":-2},{\"note\":107.5,\"pitch\":-5},{\"note\":108,\"pitch\":-2},{\"note\":108.5,\"pitch\":2},{\"note\":109,\"pitch\":-2},{\"note\":109.5,\"pitch\":-3},{\"note\":110,\"pitch\":-5},{\"note\":110.5,\"pitch\":-3},{\"note\":111,\"pitch\":-2},{\"note\":111.5,\"pitch\":2},{\"note\":112,\"pitch\":-2},{\"note\":112.5,\"pitch\":-3},{\"note\":113,\"pitch\":-5},{\"note\":113.5,\"pitch\":-3},{\"note\":114,\"pitch\":-2},{\"note\":114.5,\"pitch\":3},{\"note\":115,\"pitch\":-2},{\"note\":115.5,\"pitch\":-3},{\"note\":116,\"pitch\":-5},{\"note\":116.5,\"pitch\":-3},{\"note\":117,\"pitch\":-2},{\"note\":117.5,\"pitch\":3},{\"note\":118,\"pitch\":-2},{\"note\":118.5,\"pitch\":-3},{\"note\":119,\"pitch\":-5},{\"note\":119.5,\"pitch\":-3},{\"note\":120,\"pitch\":-2},{\"note\":120.5,\"pitch\":2},{\"note\":121,\"pitch\":-2},{\"note\":121.5,\"pitch\":-3},{\"note\":122,\"pitch\":-5},{\"note\":122.5,\"pitch\":-3},{\"note\":123,\"pitch\":-2},{\"note\":123.5,\"pitch\":2},{\"note\":124,\"pitch\":-2},{\"note\":124.5,\"pitch\":-3},{\"note\":125,\"pitch\":-5},{\"note\":125.5,\"pitch\":-3},{\"note\":126,\"pitch\":-2},{\"note\":126.5,\"pitch\":3},{\"note\":127,\"pitch\":-2},{\"note\":127.5,\"pitch\":-3},{\"note\":128,\"pitch\":-5},{\"note\":128.5,\"pitch\":-3},{\"note\":129,\"pitch\":-2},{\"note\":129.5,\"pitch\":3},{\"note\":130,\"pitch\":-2},{\"note\":130.5,\"pitch\":-3},{\"note\":131,\"pitch\":-5},{\"note\":131.5,\"pitch\":-3},{\"note\":132,\"pitch\":-2},{\"note\":132.5,\"pitch\":2},{\"note\":133,\"pitch\":-2},{\"note\":133.5,\"pitch\":-3},{\"note\":134,\"pitch\":-5},{\"note\":134.5,\"pitch\":-3},{\"note\":135,\"pitch\":-2},{\"note\":135.5,\"pitch\":2},{\"note\":136,\"pitch\":-2},{\"note\":136.5,\"pitch\":-3},{\"note\":137,\"pitch\":-5},{\"note\":137.5,\"pitch\":-3},{\"note\":138,\"pitch\":-2},{\"note\":138.5,\"pitch\":3},{\"note\":139,\"pitch\":-2},{\"note\":139.5,\"pitch\":-3},{\"note\":140,\"pitch\":-5},{\"note\":140.5,\"pitch\":-3},{\"note\":141,\"pitch\":-2},{\"note\":141.5,\"pitch\":3},{\"note\":142,\"pitch\":-2},{\"note\":142.5,\"pitch\":-3},{\"note\":143,\"pitch\":-5},{\"note\":143.5,\"pitch\":-3},{\"note\":144,\"pitch\":-2},{\"note\":144.5,\"pitch\":2},{\"note\":145,\"pitch\":-2},{\"note\":145.5,\"pitch\":-3},{\"note\":146,\"pitch\":-5},{\"note\":146.5,\"pitch\":-3},{\"note\":147,\"pitch\":-2},{\"note\":147.5,\"pitch\":3},{\"note\":148,\"pitch\":-2},{\"note\":148.5,\"pitch\":-3},{\"note\":149,\"pitch\":-5},{\"note\":149.5,\"pitch\":-3},{\"note\":150,\"pitch\":-2},{\"note\":150.5,\"pitch\":2},{\"note\":151,\"pitch\":-2},{\"note\":151.5,\"pitch\":-3},{\"note\":152,\"pitch\":-5},{\"note\":152.5,\"pitch\":-3},{\"note\":153,\"pitch\":-2},{\"note\":153.5,\"pitch\":2},{\"note\":154,\"pitch\":-2},{\"note\":154.5,\"pitch\":-3},{\"note\":155,\"pitch\":-5},{\"note\":155.5,\"pitch\":-3},{\"note\":156,\"pitch\":-2},{\"note\":156.5,\"pitch\":2},{\"note\":157,\"pitch\":-2},{\"note\":157.5,\"pitch\":-3},{\"note\":158,\"pitch\":-5},{\"note\":158.5,\"pitch\":-3},{\"note\":159,\"pitch\":-2},{\"note\":159.5,\"pitch\":3},{\"note\":160,\"pitch\":-2},{\"note\":160.5,\"pitch\":-3},{\"note\":161,\"pitch\":-5},{\"note\":161.5,\"pitch\":-3},{\"note\":162,\"pitch\":-2},{\"note\":162.5,\"pitch\":2},{\"note\":163,\"pitch\":-2},{\"note\":163.5,\"pitch\":-3},{\"note\":164,\"pitch\":-7},{\"note\":164.5,\"pitch\":-3},{\"note\":165,\"pitch\":0},{\"note\":165.5,\"pitch\":5},{\"note\":166,\"pitch\":0},{\"note\":166.5,\"pitch\":-2},{\"note\":167,\"pitch\":-3},{\"note\":167.5,\"pitch\":-2},{\"note\":168,\"pitch\":3},{\"note\":168.5,\"pitch\":7},{\"note\":169,\"pitch\":3},{\"note\":169.5,\"pitch\":2},{\"note\":170,\"pitch\":0},{\"note\":170.5,\"pitch\":2},{\"note\":171,\"pitch\":-2},{\"note\":171.5,\"pitch\":2},{\"note\":172,\"pitch\":-2},{\"note\":172.5,\"pitch\":-3},{\"note\":173,\"pitch\":-5},{\"note\":173.5,\"pitch\":-3},{\"note\":174,\"pitch\":-2},{\"note\":174.5,\"pitch\":2},{\"note\":175,\"pitch\":-2},{\"note\":175.5,\"pitch\":-3},{\"note\":176,\"pitch\":-7},{\"note\":176.5,\"pitch\":-3},{\"note\":177,\"pitch\":0},{\"note\":177.5,\"pitch\":5},{\"note\":178,\"pitch\":0},{\"note\":178.5,\"pitch\":-2},{\"note\":179,\"pitch\":-3},{\"note\":179.5,\"pitch\":-2},{\"note\":180,\"pitch\":-2},{\"note\":180.5,\"pitch\":3},{\"note\":181,\"pitch\":-2},{\"note\":181.5,\"pitch\":-3},{\"note\":182,\"pitch\":-5},{\"note\":182.5,\"pitch\":-3},{\"note\":183,\"pitch\":-2},{\"note\":183.5,\"pitch\":2},{\"note\":184,\"pitch\":-2},{\"note\":184.5,\"pitch\":-3},{\"note\":185,\"pitch\":-7},{\"note\":185.5,\"pitch\":-3},{\"note\":186,\"pitch\":0},{\"note\":186.5,\"pitch\":5},{\"note\":187,\"pitch\":0},{\"note\":187.5,\"pitch\":-2},{\"note\":188,\"pitch\":-3},{\"note\":188.5,\"pitch\":-2},{\"note\":189,\"pitch\":0},{\"note\":189.5,\"pitch\":5},{\"note\":190,\"pitch\":0},{\"note\":190.5,\"pitch\":-2},{\"note\":191,\"pitch\":-3},{\"note\":191.5,\"pitch\":-2},{\"note\":234,\"pitch\":0},{\"note\":234.5,\"pitch\":5},{\"note\":235,\"pitch\":0},{\"note\":235.5,\"pitch\":-2},{\"note\":236,\"pitch\":-3},{\"note\":236.5,\"pitch\":-2},{\"note\":237,\"pitch\":-3},{\"note\":237.5,\"pitch\":2},{\"note\":238,\"pitch\":-3},{\"note\":238.5,\"pitch\":-5},{\"note\":239,\"pitch\":-6},{\"note\":239.5,\"pitch\":-5},{\"note\":240,\"pitch\":-3},{\"note\":240.5,\"pitch\":2},{\"note\":241,\"pitch\":-3},{\"note\":241.5,\"pitch\":-5},{\"note\":242,\"pitch\":-6},{\"note\":242.5,\"pitch\":-5},{\"note\":243,\"pitch\":-3},{\"note\":243.5,\"pitch\":0},{\"note\":244,\"pitch\":-3},{\"note\":244.5,\"pitch\":-5},{\"note\":245,\"pitch\":-6},{\"note\":246,\"pitch\":-2},{\"note\":246.5,\"pitch\":2},{\"note\":247,\"pitch\":-2},{\"note\":247,\"pitch\":7},{\"note\":247,\"words\":\"(cue-144)\"},{\"note\":247.5,\"pitch\":-3},{\"note\":248,\"pitch\":10},{\"note\":248,\"pitch\":-5},{\"note\":248.5,\"pitch\":-3},{\"note\":249,\"pitch\":-2},{\"note\":249.5,\"pitch\":2},{\"note\":250,\"pitch\":-2},{\"note\":250.5,\"pitch\":-3},{\"note\":251,\"pitch\":-5},{\"note\":251.5,\"pitch\":-3},{\"note\":252,\"pitch\":-2},{\"note\":252.5,\"pitch\":3},{\"note\":253,\"pitch\":19},{\"note\":253,\"pitch\":-2},{\"note\":253.5,\"pitch\":-3},{\"note\":254,\"pitch\":22},{\"note\":254,\"pitch\":-5},{\"note\":254.5,\"pitch\":-3},{\"note\":255,\"pitch\":-2},{\"note\":255.5,\"pitch\":3},{\"note\":256,\"pitch\":-2},{\"note\":256.5,\"pitch\":-3},{\"note\":257,\"pitch\":-5},{\"note\":257.5,\"pitch\":-3},{\"note\":258,\"words\":\"(sim.)\"},{\"note\":258,\"pitch\":-2},{\"note\":258.5,\"pitch\":2},{\"note\":259,\"pitch\":7},{\"note\":259,\"pitch\":-2},{\"note\":259.5,\"pitch\":-3},{\"note\":260,\"pitch\":-5},{\"note\":260,\"pitch\":10},{\"note\":260.5,\"pitch\":-3},{\"note\":261,\"pitch\":-2},{\"note\":261.5,\"pitch\":2},{\"note\":262,\"pitch\":-2},{\"note\":262.5,\"pitch\":-3},{\"note\":263,\"pitch\":-5},{\"note\":263.5,\"pitch\":-3},{\"note\":264,\"pitch\":-2},{\"note\":264.5,\"pitch\":3},{\"note\":265,\"pitch\":-2},{\"note\":265,\"pitch\":19},{\"note\":265.5,\"pitch\":-3},{\"note\":266,\"pitch\":-5},{\"note\":266,\"pitch\":22},{\"note\":266.5,\"pitch\":-3},{\"note\":267,\"pitch\":-2},{\"note\":267.5,\"pitch\":3},{\"note\":268,\"pitch\":-2},{\"note\":268.5,\"pitch\":-3},{\"note\":269,\"pitch\":-5},{\"note\":269.5,\"pitch\":-3},{\"note\":270,\"pitch\":-2},{\"note\":270.5,\"pitch\":2},{\"note\":271,\"pitch\":7},{\"note\":271,\"pitch\":-2},{\"note\":271.5,\"pitch\":-3},{\"note\":272,\"pitch\":-5},{\"note\":272,\"pitch\":10},{\"note\":272.5,\"pitch\":-3},{\"note\":273,\"pitch\":-2},{\"note\":273.5,\"pitch\":2},{\"note\":274,\"pitch\":-2},{\"note\":274.5,\"pitch\":-3},{\"note\":275,\"pitch\":-5},{\"note\":275.5,\"pitch\":-3},{\"note\":276,\"pitch\":-2},{\"note\":276.5,\"pitch\":3},{\"note\":277,\"pitch\":-2},{\"note\":277,\"pitch\":19},{\"note\":277.5,\"pitch\":-3},{\"note\":278,\"pitch\":-5},{\"note\":278,\"pitch\":22},{\"note\":278.5,\"pitch\":-3},{\"note\":279,\"pitch\":-2},{\"note\":279.5,\"pitch\":3},{\"note\":280,\"pitch\":-2},{\"note\":280.5,\"pitch\":-3},{\"note\":281,\"pitch\":-5},{\"note\":281.5,\"pitch\":-3},{\"note\":282,\"pitch\":-2},{\"note\":282.5,\"pitch\":2},{\"note\":283,\"pitch\":-2},{\"note\":283.5,\"pitch\":-3},{\"note\":284,\"pitch\":-5},{\"note\":284.5,\"pitch\":-3},{\"note\":285,\"pitch\":-2},{\"note\":285.5,\"pitch\":2},{\"note\":286,\"pitch\":-2},{\"note\":286.5,\"pitch\":-3},{\"note\":287,\"pitch\":-5},{\"note\":287.5,\"pitch\":-3},{\"note\":288,\"pitch\":0},{\"note\":288.5,\"pitch\":3},{\"note\":289,\"pitch\":0},{\"note\":289.5,\"pitch\":-2},{\"note\":290,\"pitch\":-3},{\"note\":290.5,\"pitch\":-5},{\"note\":291,\"pitch\":-2},{\"note\":291.5,\"pitch\":2},{\"note\":292,\"pitch\":-2},{\"note\":292.5,\"pitch\":-3},{\"note\":293,\"pitch\":-5},{\"note\":293.5,\"pitch\":-3},{\"note\":294,\"pitch\":-2},{\"note\":294.5,\"pitch\":2},{\"note\":295,\"pitch\":-2},{\"note\":295.5,\"pitch\":-3},{\"note\":296,\"pitch\":-5},{\"note\":296.5,\"pitch\":-3},{\"note\":297,\"pitch\":-2},{\"note\":297.5,\"pitch\":2},{\"note\":298,\"pitch\":-2},{\"note\":298.5,\"pitch\":-3},{\"note\":299,\"pitch\":-5},{\"note\":299.5,\"pitch\":-3},{\"note\":300,\"pitch\":-2},{\"note\":300.5,\"pitch\":3},{\"note\":301,\"pitch\":-2},{\"note\":301.5,\"pitch\":-3},{\"note\":302,\"pitch\":-5},{\"note\":302.5,\"pitch\":-3},{\"note\":303,\"pitch\":-2},{\"note\":303.5,\"pitch\":2},{\"note\":304,\"pitch\":-2},{\"note\":304.5,\"pitch\":-3},{\"note\":305,\"pitch\":-5},{\"note\":305.5,\"pitch\":-3},{\"note\":306,\"words\":\"(sim.)\"},{\"note\":306,\"pitch\":-2},{\"note\":306.5,\"pitch\":2},{\"note\":307,\"pitch\":-2},{\"note\":307.5,\"pitch\":-3},{\"note\":308,\"pitch\":-5},{\"note\":308.5,\"pitch\":-3},{\"note\":309,\"pitch\":-2},{\"note\":309.5,\"pitch\":2},{\"note\":310,\"pitch\":-2},{\"note\":310.5,\"pitch\":-3},{\"note\":311,\"pitch\":-5},{\"note\":311.5,\"pitch\":-3},{\"note\":312,\"pitch\":-2},{\"note\":312.5,\"pitch\":3},{\"note\":313,\"pitch\":-2},{\"note\":313.5,\"pitch\":-3},{\"note\":314,\"pitch\":-5},{\"note\":314.5,\"pitch\":-3},{\"note\":315,\"pitch\":-2},{\"note\":315.5,\"pitch\":3},{\"note\":316,\"pitch\":-2},{\"note\":316.5,\"pitch\":-3},{\"note\":317,\"pitch\":-5},{\"note\":317.5,\"pitch\":-3},{\"note\":318,\"pitch\":-2},{\"note\":318.5,\"pitch\":2},{\"note\":319,\"pitch\":-2},{\"note\":319.5,\"pitch\":-3},{\"note\":320,\"pitch\":-5},{\"note\":320.5,\"pitch\":-3},{\"note\":321,\"pitch\":-2},{\"note\":321.5,\"pitch\":2},{\"note\":322,\"pitch\":-2},{\"note\":322.5,\"pitch\":-3},{\"note\":323,\"pitch\":-5},{\"note\":323.5,\"pitch\":-3},{\"note\":324,\"pitch\":-2},{\"note\":324.5,\"pitch\":3},{\"note\":325,\"pitch\":-2},{\"note\":325.5,\"pitch\":-3},{\"note\":326,\"pitch\":-5},{\"note\":326.5,\"pitch\":-3},{\"note\":327,\"pitch\":-2},{\"note\":327.5,\"pitch\":3},{\"note\":328,\"pitch\":-2},{\"note\":328.5,\"pitch\":-3},{\"note\":329,\"pitch\":-5},{\"note\":329.5,\"pitch\":-3},{\"note\":330,\"pitch\":-2},{\"note\":330.5,\"pitch\":2},{\"note\":331,\"pitch\":-2},{\"note\":331.5,\"pitch\":-3},{\"note\":332,\"pitch\":-5},{\"note\":332.5,\"pitch\":-3},{\"note\":333,\"pitch\":-2},{\"note\":333.5,\"pitch\":2},{\"note\":334,\"pitch\":-2},{\"note\":334.5,\"pitch\":-3},{\"note\":335,\"pitch\":-5},{\"note\":335.5,\"pitch\":-3},{\"note\":336,\"pitch\":-2},{\"note\":336.5,\"pitch\":3},{\"note\":337,\"pitch\":-2},{\"note\":337.5,\"pitch\":-3},{\"note\":338,\"pitch\":-5},{\"note\":338.5,\"pitch\":-3},{\"note\":339,\"pitch\":-2},{\"note\":339.5,\"pitch\":3},{\"note\":340,\"pitch\":-2},{\"note\":340.5,\"pitch\":-3},{\"note\":341,\"pitch\":-5},{\"note\":341.5,\"pitch\":-3},{\"note\":342,\"pitch\":-2},{\"note\":342.5,\"pitch\":2},{\"note\":343,\"pitch\":-2},{\"note\":343.5,\"pitch\":-3},{\"note\":344,\"pitch\":-5},{\"note\":344.5,\"pitch\":-2},{\"note\":345,\"pitch\":-3},{\"note\":345.5,\"pitch\":2},{\"note\":346,\"pitch\":-3},{\"note\":346.5,\"pitch\":-5},{\"note\":347,\"pitch\":-6},{\"note\":347.5,\"pitch\":-3},{\"note\":348,\"pitch\":-2},{\"note\":348.5,\"pitch\":2},{\"note\":349,\"pitch\":-2},{\"note\":349.5,\"pitch\":-3},{\"note\":350,\"pitch\":-5},{\"note\":350.5,\"pitch\":-3},{\"note\":351,\"pitch\":-2},{\"note\":351.5,\"pitch\":2},{\"note\":352,\"pitch\":0},{\"note\":352.5,\"pitch\":-3},{\"note\":353,\"pitch\":-7},{\"note\":353.5,\"pitch\":-3},{\"note\":354,\"pitch\":-2},{\"note\":354.5,\"pitch\":2},{\"note\":355,\"pitch\":-2},{\"note\":355.5,\"pitch\":-3},{\"note\":356,\"pitch\":-7},{\"note\":356.5,\"pitch\":-3},{\"note\":357,\"pitch\":-2},{\"note\":357.5,\"pitch\":2},{\"note\":358,\"pitch\":-2},{\"note\":358.5,\"pitch\":-3},{\"note\":359,\"pitch\":-7},{\"note\":359.5,\"pitch\":-3},{\"note\":360,\"pitch\":0},{\"note\":360.5,\"pitch\":5},{\"note\":361,\"pitch\":0},{\"note\":361.5,\"pitch\":-2},{\"note\":362,\"pitch\":-3},{\"note\":362.5,\"pitch\":-2},{\"note\":363,\"pitch\":0},{\"note\":363.5,\"pitch\":5},{\"note\":364,\"pitch\":0},{\"note\":364.5,\"pitch\":-2},{\"note\":365,\"pitch\":-3},{\"note\":365.5,\"pitch\":-2},{\"note\":366,\"pitch\":3},{\"note\":366.5,\"pitch\":7},{\"note\":367,\"pitch\":3},{\"note\":367.5,\"pitch\":2},{\"note\":368,\"pitch\":0},{\"note\":369,\"pitch\":2},{\"note\":369.5,\"pitch\":5},{\"note\":370,\"pitch\":2},{\"note\":370.5,\"pitch\":0},{\"note\":371,\"pitch\":-2},{\"note\":372,\"pitch\":0},{\"note\":372.5,\"pitch\":5},{\"note\":373,\"pitch\":0},{\"note\":373.5,\"pitch\":-2},{\"note\":374,\"pitch\":-3},{\"note\":375,\"pitch\":-2},{\"note\":375.5,\"pitch\":2},{\"note\":376,\"pitch\":-2},{\"note\":376.5,\"pitch\":-3},{\"note\":377,\"pitch\":-5},{\"note\":377.5,\"pitch\":-3},{\"note\":378,\"pitch\":-2},{\"note\":378.5,\"pitch\":3},{\"note\":379,\"pitch\":-2},{\"note\":379.5,\"pitch\":-3},{\"note\":380,\"pitch\":-5},{\"note\":380.5,\"pitch\":-3},{\"note\":381,\"pitch\":-2},{\"note\":381.5,\"pitch\":2},{\"note\":382,\"pitch\":-2},{\"note\":382.5,\"pitch\":-3},{\"note\":383,\"pitch\":-7},{\"note\":383.5,\"pitch\":-3},{\"note\":384,\"pitch\":2},{\"note\":384.5,\"pitch\":5},{\"note\":385,\"pitch\":2},{\"note\":385.5,\"pitch\":0},{\"note\":386,\"pitch\":-2},{\"note\":386.5,\"pitch\":0},{\"note\":387,\"pitch\":-3},{\"note\":387.5,\"pitch\":5},{\"note\":388,\"pitch\":0},{\"note\":388.5,\"pitch\":-2},{\"note\":389,\"pitch\":-3},{\"note\":389.5,\"pitch\":-2},{\"note\":426,\"pitch\":-2},{\"note\":426,\"words\":\"(cue-30)\"},{\"note\":426.5,\"pitch\":2},{\"note\":427,\"pitch\":-2},{\"note\":427.5,\"pitch\":-3},{\"note\":428,\"pitch\":-5},{\"note\":428.5,\"pitch\":-3},{\"note\":429,\"pitch\":-2},{\"note\":429.5,\"pitch\":2},{\"note\":430,\"pitch\":-2},{\"note\":430.5,\"pitch\":-3},{\"note\":431,\"pitch\":-5},{\"note\":431.5,\"pitch\":-3},{\"note\":432,\"pitch\":-2},{\"note\":432.5,\"pitch\":2},{\"note\":433,\"pitch\":-2},{\"note\":433.5,\"pitch\":-3},{\"note\":434,\"pitch\":-5},{\"note\":434.5,\"pitch\":-3},{\"note\":435,\"pitch\":-2},{\"note\":435.5,\"pitch\":2},{\"note\":436,\"pitch\":-2},{\"note\":436.5,\"pitch\":-3},{\"note\":437,\"pitch\":-5},{\"note\":437.5,\"pitch\":-3},{\"note\":438,\"pitch\":-2},{\"note\":438.5,\"pitch\":3},{\"note\":439,\"pitch\":-2},{\"note\":439.5,\"pitch\":-3},{\"note\":440,\"pitch\":-5},{\"note\":440.5,\"pitch\":-3},{\"note\":441,\"pitch\":-2},{\"note\":441.5,\"pitch\":3},{\"note\":442,\"pitch\":-2},{\"note\":442.5,\"pitch\":-3},{\"note\":443,\"pitch\":-5},{\"note\":443.5,\"pitch\":-3},{\"note\":444,\"pitch\":-2},{\"note\":444.5,\"pitch\":2},{\"note\":445,\"pitch\":-2},{\"note\":445.5,\"pitch\":-3},{\"note\":446,\"pitch\":-5},{\"note\":446.5,\"pitch\":-3},{\"note\":447,\"pitch\":-2},{\"note\":447.5,\"pitch\":2},{\"note\":448,\"pitch\":-2},{\"note\":448.5,\"pitch\":-3},{\"note\":449,\"pitch\":-5},{\"note\":449.5,\"pitch\":-3},{\"note\":450,\"pitch\":-2},{\"note\":450.5,\"pitch\":3},{\"note\":451,\"pitch\":-2},{\"note\":451.5,\"pitch\":-3},{\"note\":452,\"pitch\":-5},{\"note\":452.5,\"pitch\":-3},{\"note\":453,\"pitch\":-2},{\"note\":453.5,\"pitch\":3},{\"note\":454,\"pitch\":-2},{\"note\":454.5,\"pitch\":-3},{\"note\":455,\"pitch\":-5},{\"note\":455.5,\"pitch\":-3},{\"note\":504,\"words\":\"(cue-186)\"},{\"note\":504,\"pitch\":-2},{\"note\":504.5,\"pitch\":2},{\"note\":505,\"pitch\":-2},{\"note\":505.5,\"pitch\":-3},{\"note\":506,\"pitch\":-5},{\"note\":506.5,\"pitch\":-3},{\"note\":507,\"pitch\":-2},{\"note\":507.5,\"pitch\":2},{\"note\":508,\"pitch\":-2},{\"note\":508.5,\"pitch\":-3},{\"note\":509,\"pitch\":-5},{\"note\":509.5,\"pitch\":-3},{\"note\":510,\"pitch\":-2},{\"note\":510.5,\"pitch\":3},{\"note\":511,\"pitch\":-2},{\"note\":511.5,\"pitch\":-3},{\"note\":512,\"pitch\":-5},{\"note\":512.5,\"pitch\":-3},{\"note\":513,\"pitch\":-2},{\"note\":513.5,\"pitch\":3},{\"note\":514,\"pitch\":-2},{\"note\":514.5,\"pitch\":-3},{\"note\":515,\"pitch\":-5},{\"note\":515.5,\"pitch\":-3},{\"note\":516,\"pitch\":-2},{\"note\":516.5,\"pitch\":2},{\"note\":517,\"pitch\":-2},{\"note\":517.5,\"pitch\":-3},{\"note\":518,\"pitch\":-5},{\"note\":518.5,\"pitch\":-3},{\"note\":519,\"pitch\":-2},{\"note\":519.5,\"pitch\":2},{\"note\":520,\"pitch\":-2},{\"note\":520.5,\"pitch\":-3},{\"note\":521,\"pitch\":-5},{\"note\":521.5,\"pitch\":-3},{\"note\":522,\"words\":\"(sim.)\"},{\"note\":522,\"pitch\":-2},{\"note\":522.5,\"pitch\":3},{\"note\":523,\"pitch\":-2},{\"note\":523.5,\"pitch\":-3},{\"note\":524,\"pitch\":-5},{\"note\":524.5,\"pitch\":-3},{\"note\":525,\"pitch\":-2},{\"note\":525.5,\"pitch\":3},{\"note\":526,\"pitch\":-2},{\"note\":526.5,\"pitch\":-3},{\"note\":527,\"pitch\":-5},{\"note\":527.5,\"pitch\":-3},{\"note\":528,\"pitch\":-2},{\"note\":528.5,\"pitch\":2},{\"note\":529,\"pitch\":-2},{\"note\":529.5,\"pitch\":-3},{\"note\":530,\"pitch\":-5},{\"note\":530.5,\"pitch\":-3},{\"note\":531,\"pitch\":-2},{\"note\":531.5,\"pitch\":2},{\"note\":532,\"pitch\":-2},{\"note\":532.5,\"pitch\":-3},{\"note\":533,\"pitch\":-5},{\"note\":533.5,\"pitch\":-3},{\"note\":534,\"pitch\":-2},{\"note\":534.5,\"pitch\":3},{\"note\":535,\"pitch\":-2},{\"note\":535.5,\"pitch\":-3},{\"note\":536,\"pitch\":-5},{\"note\":536.5,\"pitch\":-3},{\"note\":537,\"pitch\":-2},{\"note\":537.5,\"pitch\":3},{\"note\":538,\"pitch\":-2},{\"note\":538.5,\"pitch\":-3},{\"note\":539,\"pitch\":-5},{\"note\":539.5,\"pitch\":-3},{\"note\":540,\"pitch\":-2},{\"note\":540.5,\"pitch\":-5},{\"note\":541,\"pitch\":-2},{\"note\":541.5,\"pitch\":-5},{\"note\":542,\"pitch\":-2},{\"note\":542.5,\"pitch\":-5},{\"note\":543,\"pitch\":-2},{\"note\":543.5,\"pitch\":-5},{\"note\":544,\"pitch\":-2},{\"note\":544.5,\"pitch\":-5},{\"note\":545,\"pitch\":-2},{\"note\":545.5,\"pitch\":-5},{\"note\":546,\"pitch\":-2},{\"note\":546.5,\"pitch\":-5},{\"note\":547,\"pitch\":-2},{\"note\":547.5,\"pitch\":-5},{\"note\":548,\"pitch\":-2},{\"note\":548.5,\"pitch\":-5},{\"note\":549,\"pitch\":-2},{\"note\":549.5,\"pitch\":-7},{\"note\":550,\"pitch\":-2},{\"note\":550.5,\"pitch\":-7},{\"note\":551,\"pitch\":-2},{\"note\":551.5,\"pitch\":-7},{\"note\":552,\"pitch\":0},{\"note\":552.5,\"pitch\":-5},{\"note\":553,\"pitch\":0},{\"note\":553.5,\"pitch\":-5},{\"note\":554,\"pitch\":0},{\"note\":554.5,\"pitch\":-5},{\"note\":555,\"pitch\":-3},{\"note\":555.5,\"pitch\":-7},{\"note\":556,\"pitch\":-3},{\"note\":556.5,\"pitch\":-7},{\"note\":557,\"pitch\":-3},{\"note\":557.5,\"pitch\":-7},{\"note\":558,\"pitch\":-2},{\"note\":558.5,\"pitch\":-3},{\"note\":559,\"pitch\":-2},{\"note\":559.5,\"pitch\":2},{\"note\":560,\"pitch\":-2},{\"note\":561,\"pitch\":-2},{\"note\":561.5,\"pitch\":-3},{\"note\":562,\"pitch\":-2},{\"note\":562.5,\"pitch\":2},{\"note\":563,\"pitch\":-2},{\"note\":564,\"pitch\":0},{\"note\":564.5,\"pitch\":-2},{\"note\":565,\"pitch\":0},{\"note\":565.5,\"pitch\":7},{\"note\":566,\"pitch\":0},{\"note\":567,\"pitch\":3},{\"note\":567.5,\"pitch\":2},{\"note\":568,\"pitch\":3},{\"note\":568.5,\"pitch\":10},{\"note\":569,\"pitch\":3},{\"note\":570,\"pitch\":-2},{\"note\":570.5,\"pitch\":2},{\"note\":571,\"pitch\":-2},{\"note\":571.5,\"pitch\":-3},{\"note\":572,\"pitch\":-5},{\"note\":572.5,\"pitch\":-3},{\"note\":573,\"pitch\":-2},{\"note\":573.5,\"pitch\":2},{\"note\":574,\"pitch\":-2},{\"note\":574.5,\"pitch\":-3},{\"note\":575,\"pitch\":-5},{\"note\":575.5,\"pitch\":-3},{\"note\":576,\"pitch\":-2},{\"note\":576.5,\"pitch\":3},{\"note\":577,\"pitch\":-2},{\"note\":577.5,\"pitch\":-3},{\"note\":578,\"pitch\":-5},{\"note\":578.5,\"pitch\":-3},{\"note\":579,\"pitch\":-2},{\"note\":579.5,\"pitch\":3},{\"note\":580,\"pitch\":-2},{\"note\":580.5,\"pitch\":-3},{\"note\":581,\"pitch\":-5},{\"note\":581.5,\"pitch\":-3},{\"note\":582,\"pitch\":-2},{\"note\":582.5,\"pitch\":2},{\"note\":583,\"pitch\":-2},{\"note\":583.5,\"pitch\":-3},{\"note\":584,\"pitch\":-5},{\"note\":584.5,\"pitch\":-3},{\"note\":585,\"pitch\":-2},{\"note\":585.5,\"pitch\":2},{\"note\":586,\"pitch\":-2},{\"note\":586.5,\"pitch\":-3},{\"note\":587,\"pitch\":-5},{\"note\":587.5,\"pitch\":-3},{\"note\":588,\"pitch\":-2},{\"note\":588.5,\"pitch\":3},{\"note\":589,\"pitch\":-2},{\"note\":589.5,\"pitch\":-3},{\"note\":590,\"pitch\":-5},{\"note\":590.5,\"pitch\":-3},{\"note\":591,\"pitch\":-2},{\"note\":591.5,\"pitch\":3},{\"note\":592,\"pitch\":-2},{\"note\":592.5,\"pitch\":-3},{\"note\":593,\"pitch\":-5},{\"note\":593.5,\"pitch\":-3},{\"note\":594,\"pitch\":-2},{\"note\":594.5,\"pitch\":2},{\"note\":595,\"pitch\":-2},{\"note\":595.5,\"pitch\":-3},{\"note\":596,\"pitch\":-5},{\"note\":596.5,\"pitch\":-3},{\"note\":597,\"pitch\":-2},{\"note\":597.5,\"pitch\":3},{\"note\":598,\"pitch\":-2},{\"note\":598.5,\"pitch\":-3},{\"note\":599,\"pitch\":-5},{\"note\":599.5,\"pitch\":-3},{\"note\":600,\"pitch\":-2},{\"note\":600.5,\"pitch\":2},{\"note\":601,\"pitch\":-2},{\"note\":601.5,\"pitch\":-3},{\"note\":602,\"pitch\":-5},{\"note\":602.5,\"pitch\":-3},{\"note\":603,\"pitch\":-2},{\"note\":603.5,\"pitch\":2},{\"note\":604,\"pitch\":-2},{\"note\":604.5,\"pitch\":-3},{\"note\":605,\"pitch\":-5},{\"note\":605.5,\"pitch\":-3},{\"note\":606,\"pitch\":-2},{\"note\":606.5,\"pitch\":2},{\"note\":607,\"pitch\":-2},{\"note\":607.5,\"pitch\":-3},{\"note\":608,\"pitch\":-5},{\"note\":608.5,\"pitch\":-3},{\"note\":609,\"pitch\":-2},{\"note\":609.5,\"pitch\":3},{\"note\":610,\"pitch\":-2},{\"note\":610.5,\"pitch\":-3},{\"note\":611,\"pitch\":-5},{\"note\":611.5,\"pitch\":-3},{\"note\":612,\"pitch\":-2},{\"note\":612.5,\"pitch\":2},{\"note\":613,\"pitch\":-2},{\"note\":613.5,\"pitch\":-3},{\"note\":614,\"pitch\":-7},{\"note\":614.5,\"pitch\":-3},{\"note\":615,\"pitch\":-2},{\"note\":615.5,\"pitch\":0},{\"note\":616,\"pitch\":-2},{\"note\":616.5,\"pitch\":-3},{\"note\":617,\"pitch\":-7},{\"note\":617.5,\"pitch\":-3},{\"note\":618,\"words\":\"(sim.)\"},{\"note\":618,\"pitch\":-5},{\"note\":618.5,\"pitch\":3},{\"note\":619,\"pitch\":2},{\"note\":619.5,\"pitch\":0},{\"note\":620,\"pitch\":-5},{\"note\":620.5,\"pitch\":-9},{\"note\":621,\"pitch\":-10},{\"note\":621.5,\"pitch\":-7},{\"note\":622,\"pitch\":2},{\"note\":622.5,\"pitch\":-2},{\"note\":623,\"pitch\":-3},{\"note\":623.5,\"pitch\":-7},{\"note\":624,\"pitch\":-3},{\"note\":624.5,\"pitch\":2},{\"note\":625,\"pitch\":-2},{\"note\":625.5,\"pitch\":-3},{\"note\":626,\"pitch\":-5},{\"note\":626.5,\"pitch\":-7},{\"note\":627,\"pitch\":-2},{\"note\":627.5,\"pitch\":3},{\"note\":628,\"pitch\":-2},{\"note\":628.5,\"pitch\":-3},{\"note\":629,\"pitch\":-5},{\"note\":629.5,\"pitch\":-9},{\"note\":630,\"pitch\":-2},{\"note\":630.5,\"pitch\":2},{\"note\":631,\"pitch\":-2},{\"note\":631.5,\"pitch\":-3},{\"note\":632,\"pitch\":-7},{\"note\":632.5,\"pitch\":-10},{\"note\":633,\"pitch\":-2},{\"note\":633.5,\"pitch\":2},{\"note\":634,\"pitch\":-2},{\"note\":634.5,\"pitch\":-3},{\"note\":635,\"pitch\":-7},{\"note\":635.5,\"pitch\":-10},{\"note\":636,\"pitch\":-3},{\"note\":636.5,\"pitch\":0},{\"note\":637,\"pitch\":-3},{\"note\":637.5,\"pitch\":-5},{\"note\":638,\"pitch\":-7},{\"note\":638.5,\"pitch\":-12},{\"note\":639,\"pitch\":-3},{\"note\":639.5,\"pitch\":0},{\"note\":640,\"pitch\":-3},{\"note\":640.5,\"pitch\":-5},{\"note\":641,\"pitch\":-7},{\"note\":641.5,\"pitch\":-12},{\"note\":642,\"pitch\":-5},{\"note\":642.5,\"pitch\":3},{\"note\":643,\"pitch\":2},{\"note\":643.5,\"pitch\":0},{\"note\":644,\"pitch\":-5},{\"note\":644.5,\"pitch\":-9},{\"note\":645,\"pitch\":-7},{\"note\":645.5,\"pitch\":2},{\"note\":646,\"pitch\":-2},{\"note\":646.5,\"pitch\":-3},{\"note\":647,\"pitch\":-7},{\"note\":647.5,\"pitch\":-10},{\"note\":648,\"pitch\":-7},{\"note\":648.5,\"pitch\":0},{\"note\":649,\"pitch\":-2},{\"note\":649.5,\"pitch\":-3},{\"note\":650,\"pitch\":-7},{\"note\":650.5,\"pitch\":-12},{\"note\":651,\"pitch\":-5},{\"note\":651.5,\"pitch\":2},{\"note\":652,\"pitch\":-2},{\"note\":652.5,\"pitch\":-3},{\"note\":653,\"pitch\":-5},{\"note\":653.5,\"pitch\":-10},{\"note\":654,\"pitch\":-2},{\"note\":654.5,\"pitch\":3},{\"note\":655,\"pitch\":-2},{\"note\":655.5,\"pitch\":-3},{\"note\":656,\"pitch\":-5},{\"note\":656.5,\"pitch\":-9},{\"note\":657,\"pitch\":-2},{\"note\":657.5,\"pitch\":2},{\"note\":658,\"pitch\":-2},{\"note\":658.5,\"pitch\":-3},{\"note\":659,\"pitch\":-7},{\"note\":659.5,\"pitch\":-10},{\"note\":660,\"pitch\":-3},{\"note\":660.5,\"pitch\":2},{\"note\":661,\"pitch\":-2},{\"note\":661.5,\"pitch\":-3},{\"note\":662,\"pitch\":-5},{\"note\":662.5,\"pitch\":-7},{\"note\":663,\"pitch\":0},{\"note\":663.5,\"pitch\":5},{\"note\":664,\"pitch\":0},{\"note\":664.5,\"pitch\":-2},{\"note\":665,\"pitch\":-3},{\"note\":665.5,\"pitch\":-7},{\"note\":666,\"pitch\":-5},{\"note\":666.5,\"pitch\":3},{\"note\":667,\"pitch\":2},{\"note\":667.5,\"pitch\":0},{\"note\":668,\"pitch\":-5},{\"note\":668.5,\"pitch\":-9},{\"note\":669,\"pitch\":-7},{\"note\":669.5,\"pitch\":2},{\"note\":670,\"pitch\":-2},{\"note\":670.5,\"pitch\":-3},{\"note\":671,\"pitch\":-7},{\"note\":671.5,\"pitch\":-10},{\"note\":672,\"pitch\":-3},{\"note\":672.5,\"pitch\":2},{\"note\":673,\"pitch\":-2},{\"note\":673.5,\"pitch\":-3},{\"note\":674,\"pitch\":-5},{\"note\":674.5,\"pitch\":-7},{\"note\":675,\"pitch\":0},{\"note\":675.5,\"pitch\":5},{\"note\":676,\"pitch\":0},{\"note\":676.5,\"pitch\":-2},{\"note\":677,\"pitch\":-3},{\"note\":677.5,\"pitch\":-7},{\"note\":678,\"pitch\":-2},{\"note\":678.5,\"pitch\":3},{\"note\":679,\"pitch\":-2},{\"note\":679.5,\"pitch\":-3},{\"note\":680,\"pitch\":-5},{\"note\":680.5,\"pitch\":-9},{\"note\":681,\"pitch\":-2},{\"note\":681.5,\"pitch\":2},{\"note\":682,\"pitch\":-2},{\"note\":682.5,\"pitch\":-3},{\"note\":683,\"pitch\":-7},{\"note\":683.5,\"pitch\":-10},{\"note\":684,\"pitch\":0},{\"note\":684.5,\"pitch\":5},{\"note\":685,\"pitch\":0},{\"note\":685.5,\"pitch\":-2},{\"note\":686,\"pitch\":-3},{\"note\":686.5,\"pitch\":-7},{\"note\":687,\"pitch\":-3},{\"note\":687.5,\"pitch\":2},{\"note\":688,\"pitch\":-3},{\"note\":688.5,\"pitch\":-5},{\"note\":689,\"pitch\":-6},{\"note\":689.5,\"pitch\":-5}]},\"P19\":{\"id\":\"P19\",\"name\":\"Piano (Optional)\",\"measureCount\":119,\"notes\":[{\"note\":30,\"pitch\":-2},{\"note\":30.5,\"pitch\":-5},{\"note\":31,\"pitch\":-2},{\"note\":31.5,\"pitch\":-5},{\"note\":32,\"pitch\":-2},{\"note\":32.5,\"pitch\":-5},{\"note\":33,\"pitch\":-2},{\"note\":33.5,\"pitch\":-5},{\"note\":34,\"pitch\":-2},{\"note\":34.5,\"pitch\":-5},{\"note\":35,\"pitch\":-2},{\"note\":35.5,\"pitch\":-5},{\"note\":36,\"pitch\":-2},{\"note\":36.5,\"pitch\":-5},{\"note\":37,\"pitch\":-2},{\"note\":37.5,\"pitch\":-5},{\"note\":38,\"pitch\":-2},{\"note\":38.5,\"pitch\":-5},{\"note\":39,\"pitch\":-2},{\"note\":39.5,\"pitch\":-5},{\"note\":40,\"pitch\":-2},{\"note\":40.5,\"pitch\":-5},{\"note\":41,\"pitch\":-2},{\"note\":41.5,\"pitch\":-5},{\"note\":42,\"pitch\":-2},{\"note\":42.5,\"pitch\":-5},{\"note\":43,\"pitch\":-2},{\"note\":43.5,\"pitch\":-5},{\"note\":44,\"pitch\":-2},{\"note\":44.5,\"pitch\":-5},{\"note\":45,\"pitch\":-2},{\"note\":45.5,\"pitch\":-5},{\"note\":46,\"pitch\":-2},{\"note\":46.5,\"pitch\":-5},{\"note\":47,\"pitch\":-2},{\"note\":47.5,\"pitch\":-5},{\"note\":48,\"pitch\":-2},{\"note\":48.5,\"pitch\":-5},{\"note\":49,\"pitch\":-2},{\"note\":49.5,\"pitch\":-5},{\"note\":50,\"pitch\":-2},{\"note\":50.5,\"pitch\":-5},{\"note\":51,\"pitch\":-2},{\"note\":51.5,\"pitch\":-5},{\"note\":52,\"pitch\":-2},{\"note\":52.5,\"pitch\":-5},{\"note\":53,\"pitch\":-2},{\"note\":53.5,\"pitch\":-5},{\"note\":54,\"pitch\":-2},{\"note\":54.5,\"pitch\":-5},{\"note\":55,\"pitch\":-2},{\"note\":55.5,\"pitch\":-5},{\"note\":56,\"pitch\":-2},{\"note\":56.5,\"pitch\":-5},{\"note\":57,\"pitch\":-2},{\"note\":57.5,\"pitch\":-5},{\"note\":58,\"pitch\":-2},{\"note\":58.5,\"pitch\":-5},{\"note\":59,\"pitch\":-2},{\"note\":59.5,\"pitch\":-5},{\"note\":60,\"pitch\":-2},{\"note\":60.5,\"pitch\":-5},{\"note\":61,\"pitch\":-2},{\"note\":61.5,\"pitch\":-5},{\"note\":62,\"pitch\":-2},{\"note\":62.5,\"pitch\":-5},{\"note\":63,\"pitch\":-2},{\"note\":63.5,\"pitch\":-5},{\"note\":64,\"pitch\":-2},{\"note\":64.5,\"pitch\":-5},{\"note\":65,\"pitch\":-2},{\"note\":65.5,\"pitch\":-5},{\"note\":66,\"pitch\":-2},{\"note\":66.5,\"pitch\":2},{\"note\":67,\"pitch\":-2},{\"note\":67.5,\"pitch\":-3},{\"note\":68,\"pitch\":-5},{\"note\":68.5,\"pitch\":-3},{\"note\":69,\"pitch\":-2},{\"note\":69.5,\"pitch\":2},{\"note\":70,\"pitch\":-2},{\"note\":70.5,\"pitch\":-3},{\"note\":71,\"pitch\":-5},{\"note\":71.5,\"pitch\":-2},{\"note\":72,\"pitch\":-2},{\"note\":72.5,\"pitch\":-5},{\"note\":73,\"pitch\":-2},{\"note\":73.5,\"pitch\":-5},{\"note\":74,\"pitch\":-2},{\"note\":74.5,\"pitch\":-5},{\"note\":75,\"pitch\":-2},{\"note\":75.5,\"pitch\":-5},{\"note\":76,\"pitch\":-2},{\"note\":76.5,\"pitch\":-5},{\"note\":77,\"pitch\":-2},{\"note\":77.5,\"pitch\":-5},{\"note\":78,\"pitch\":-2},{\"note\":78.5,\"pitch\":3},{\"note\":79,\"pitch\":-2},{\"note\":79.5,\"pitch\":-3},{\"note\":80,\"pitch\":-5},{\"note\":80.5,\"pitch\":-3},{\"note\":81,\"pitch\":-2},{\"note\":81.5,\"pitch\":3},{\"note\":82,\"pitch\":-2},{\"note\":82.5,\"pitch\":-3},{\"note\":83,\"pitch\":-5},{\"note\":83.5,\"pitch\":-3},{\"note\":84,\"pitch\":-2},{\"note\":84.5,\"pitch\":-5},{\"note\":85,\"pitch\":-2},{\"note\":85.5,\"pitch\":-5},{\"note\":86,\"pitch\":-2},{\"note\":86.5,\"pitch\":-5},{\"note\":87,\"pitch\":-2},{\"note\":87.5,\"pitch\":-5},{\"note\":88,\"pitch\":-2},{\"note\":88.5,\"pitch\":-5},{\"note\":89,\"pitch\":-2},{\"note\":89.5,\"pitch\":-5},{\"note\":90,\"pitch\":-2},{\"note\":90.5,\"pitch\":-5},{\"note\":91,\"pitch\":-2},{\"note\":91.5,\"pitch\":-5},{\"note\":92,\"pitch\":-2},{\"note\":92.5,\"pitch\":-5},{\"note\":93,\"pitch\":-2},{\"note\":93.5,\"pitch\":-5},{\"note\":94,\"pitch\":-2},{\"note\":94.5,\"pitch\":-5},{\"note\":95,\"pitch\":-2},{\"note\":95.5,\"pitch\":-5},{\"note\":96,\"pitch\":-2},{\"note\":96.5,\"pitch\":3},{\"note\":97,\"pitch\":-2},{\"note\":97.5,\"pitch\":-3},{\"note\":98,\"pitch\":-5},{\"note\":98.5,\"pitch\":-3},{\"note\":99,\"pitch\":-2},{\"note\":99.5,\"pitch\":3},{\"note\":100,\"pitch\":-2},{\"note\":100.5,\"pitch\":-3},{\"note\":101,\"pitch\":-5},{\"note\":101.5,\"pitch\":-3},{\"note\":102,\"words\":\"(sim.)\"},{\"note\":102,\"pitch\":-2},{\"note\":102.5,\"pitch\":-5},{\"note\":103,\"pitch\":-2},{\"note\":103.5,\"pitch\":-5},{\"note\":104,\"pitch\":-2},{\"note\":104.5,\"pitch\":-5},{\"note\":105,\"pitch\":-2},{\"note\":105.5,\"pitch\":-5},{\"note\":106,\"pitch\":-2},{\"note\":106.5,\"pitch\":-5},{\"note\":107,\"pitch\":-2},{\"note\":107.5,\"pitch\":-5},{\"note\":108,\"pitch\":-2},{\"note\":108.5,\"pitch\":2},{\"note\":109,\"pitch\":-2},{\"note\":109.5,\"pitch\":-3},{\"note\":110,\"pitch\":-5},{\"note\":110.5,\"pitch\":-3},{\"note\":111,\"pitch\":-2},{\"note\":111.5,\"pitch\":2},{\"note\":112,\"pitch\":-2},{\"note\":112.5,\"pitch\":-3},{\"note\":113,\"pitch\":-5},{\"note\":113.5,\"pitch\":-3},{\"note\":114,\"pitch\":-2},{\"note\":114.5,\"pitch\":3},{\"note\":115,\"pitch\":-2},{\"note\":115.5,\"pitch\":-3},{\"note\":116,\"pitch\":-5},{\"note\":116.5,\"pitch\":-3},{\"note\":117,\"pitch\":-2},{\"note\":117.5,\"pitch\":3},{\"note\":118,\"pitch\":-2},{\"note\":118.5,\"pitch\":-3},{\"note\":119,\"pitch\":-5},{\"note\":119.5,\"pitch\":-3},{\"note\":120,\"pitch\":-2},{\"note\":120.5,\"pitch\":2},{\"note\":121,\"pitch\":-2},{\"note\":121.5,\"pitch\":-3},{\"note\":122,\"pitch\":-5},{\"note\":122.5,\"pitch\":-3},{\"note\":123,\"pitch\":-2},{\"note\":123.5,\"pitch\":2},{\"note\":124,\"pitch\":-2},{\"note\":124.5,\"pitch\":-3},{\"note\":125,\"pitch\":-5},{\"note\":125.5,\"pitch\":-3},{\"note\":126,\"pitch\":-2},{\"note\":126.5,\"pitch\":3},{\"note\":127,\"pitch\":-2},{\"note\":127.5,\"pitch\":-3},{\"note\":128,\"pitch\":-5},{\"note\":128.5,\"pitch\":-3},{\"note\":129,\"pitch\":-2},{\"note\":129.5,\"pitch\":3},{\"note\":130,\"pitch\":-2},{\"note\":130.5,\"pitch\":-3},{\"note\":131,\"pitch\":-5},{\"note\":131.5,\"pitch\":-3},{\"note\":132,\"pitch\":-2},{\"note\":132.5,\"pitch\":2},{\"note\":133,\"pitch\":-2},{\"note\":133.5,\"pitch\":-3},{\"note\":134,\"pitch\":-5},{\"note\":134.5,\"pitch\":-3},{\"note\":135,\"pitch\":-2},{\"note\":135.5,\"pitch\":2},{\"note\":136,\"pitch\":-2},{\"note\":136.5,\"pitch\":-3},{\"note\":137,\"pitch\":-5},{\"note\":137.5,\"pitch\":-3},{\"note\":138,\"pitch\":-2},{\"note\":138.5,\"pitch\":3},{\"note\":139,\"pitch\":-2},{\"note\":139.5,\"pitch\":-3},{\"note\":140,\"pitch\":-5},{\"note\":140.5,\"pitch\":-3},{\"note\":141,\"pitch\":-2},{\"note\":141.5,\"pitch\":3},{\"note\":142,\"pitch\":-2},{\"note\":142.5,\"pitch\":-3},{\"note\":143,\"pitch\":-5},{\"note\":143.5,\"pitch\":-3},{\"note\":546,\"pitch\":-2},{\"note\":546.5,\"pitch\":-5},{\"note\":547,\"pitch\":-2},{\"note\":547.5,\"pitch\":-5},{\"note\":548,\"pitch\":-2},{\"note\":548.5,\"pitch\":-5},{\"note\":549,\"pitch\":-2},{\"note\":549.5,\"pitch\":-7},{\"note\":550,\"pitch\":-2},{\"note\":550.5,\"pitch\":-7},{\"note\":551,\"pitch\":-2},{\"note\":551.5,\"pitch\":-7},{\"note\":552,\"pitch\":0},{\"note\":552.5,\"pitch\":-5},{\"note\":553,\"pitch\":0},{\"note\":553.5,\"pitch\":-5},{\"note\":554,\"pitch\":0},{\"note\":554.5,\"pitch\":-5},{\"note\":555,\"pitch\":-3},{\"note\":555.5,\"pitch\":-7},{\"note\":556,\"pitch\":-3},{\"note\":556.5,\"pitch\":-7},{\"note\":557,\"pitch\":-3},{\"note\":557.5,\"pitch\":-7},{\"note\":558,\"pitch\":-2},{\"note\":558.5,\"pitch\":-3},{\"note\":559,\"pitch\":-2},{\"note\":559.5,\"pitch\":2},{\"note\":560,\"pitch\":-2},{\"note\":561,\"pitch\":-2},{\"note\":561.5,\"pitch\":-3},{\"note\":562,\"pitch\":-2},{\"note\":562.5,\"pitch\":2},{\"note\":563,\"pitch\":-2},{\"note\":564,\"pitch\":0},{\"note\":564.5,\"pitch\":-2},{\"note\":565,\"pitch\":0},{\"note\":565.5,\"pitch\":7},{\"note\":566,\"pitch\":0},{\"note\":567,\"pitch\":3},{\"note\":567.5,\"pitch\":2},{\"note\":568,\"pitch\":3},{\"note\":568.5,\"pitch\":10},{\"note\":569,\"pitch\":3},{\"note\":570,\"pitch\":-2},{\"note\":570.5,\"pitch\":2},{\"note\":571,\"pitch\":-2},{\"note\":571.5,\"pitch\":-3},{\"note\":572,\"pitch\":-5},{\"note\":572.5,\"pitch\":-3},{\"note\":573,\"pitch\":-2},{\"note\":573.5,\"pitch\":2},{\"note\":574,\"pitch\":-2},{\"note\":574.5,\"pitch\":-3},{\"note\":575,\"pitch\":-5},{\"note\":575.5,\"pitch\":-3},{\"note\":576,\"pitch\":-2},{\"note\":576.5,\"pitch\":3},{\"note\":577,\"pitch\":-2},{\"note\":577.5,\"pitch\":-3},{\"note\":578,\"pitch\":-5},{\"note\":578.5,\"pitch\":-3},{\"note\":579,\"pitch\":-2},{\"note\":579.5,\"pitch\":3},{\"note\":580,\"pitch\":-2},{\"note\":580.5,\"pitch\":-3},{\"note\":581,\"pitch\":-5},{\"note\":581.5,\"pitch\":-3},{\"note\":582,\"pitch\":-2},{\"note\":582.5,\"pitch\":2},{\"note\":583,\"pitch\":-2},{\"note\":583.5,\"pitch\":-3},{\"note\":584,\"pitch\":-5},{\"note\":584.5,\"pitch\":-3},{\"note\":585,\"pitch\":-2},{\"note\":585.5,\"pitch\":2},{\"note\":586,\"pitch\":-2},{\"note\":586.5,\"pitch\":-3},{\"note\":587,\"pitch\":-5},{\"note\":587.5,\"pitch\":-3},{\"note\":588,\"pitch\":-2},{\"note\":588.5,\"pitch\":3},{\"note\":589,\"pitch\":-2},{\"note\":589.5,\"pitch\":-3},{\"note\":590,\"pitch\":-5},{\"note\":590.5,\"pitch\":-3},{\"note\":591,\"pitch\":-2},{\"note\":591.5,\"pitch\":3},{\"note\":592,\"pitch\":-2},{\"note\":592.5,\"pitch\":-3},{\"note\":593,\"pitch\":-5},{\"note\":593.5,\"pitch\":-3},{\"note\":594,\"pitch\":-2},{\"note\":594.5,\"pitch\":2},{\"note\":595,\"pitch\":-2},{\"note\":595.5,\"pitch\":-3},{\"note\":596,\"pitch\":-5},{\"note\":596.5,\"pitch\":-3},{\"note\":597,\"pitch\":-2},{\"note\":597.5,\"pitch\":3},{\"note\":598,\"pitch\":-2},{\"note\":598.5,\"pitch\":-3},{\"note\":599,\"pitch\":-5},{\"note\":599.5,\"pitch\":-3},{\"note\":600,\"pitch\":-2},{\"note\":600.5,\"pitch\":2},{\"note\":601,\"pitch\":-2},{\"note\":601.5,\"pitch\":-3},{\"note\":602,\"pitch\":-5},{\"note\":602.5,\"pitch\":-3},{\"note\":603,\"pitch\":-2},{\"note\":603.5,\"pitch\":2},{\"note\":604,\"pitch\":-2},{\"note\":604.5,\"pitch\":-3},{\"note\":605,\"pitch\":-5},{\"note\":605.5,\"pitch\":-3},{\"note\":606,\"pitch\":-2},{\"note\":606.5,\"pitch\":2},{\"note\":607,\"pitch\":-2},{\"note\":607.5,\"pitch\":-3},{\"note\":608,\"pitch\":-5},{\"note\":608.5,\"pitch\":-3},{\"note\":609,\"pitch\":-2},{\"note\":609.5,\"pitch\":3},{\"note\":610,\"pitch\":-2},{\"note\":610.5,\"pitch\":-3},{\"note\":611,\"pitch\":-5},{\"note\":611.5,\"pitch\":-3},{\"note\":612,\"pitch\":-2},{\"note\":612.5,\"pitch\":2},{\"note\":613,\"pitch\":-2},{\"note\":613.5,\"pitch\":-3},{\"note\":614,\"pitch\":-7},{\"note\":614.5,\"pitch\":-3},{\"note\":615,\"pitch\":-2},{\"note\":615.5,\"pitch\":0},{\"note\":616,\"pitch\":-2},{\"note\":616.5,\"pitch\":-3},{\"note\":617,\"pitch\":-7},{\"note\":617.5,\"pitch\":-3},{\"note\":618,\"words\":\"(sim.)\"},{\"note\":618,\"pitch\":-5},{\"note\":618.5,\"pitch\":3},{\"note\":619,\"pitch\":2},{\"note\":619.5,\"pitch\":0},{\"note\":620,\"pitch\":-5},{\"note\":620.5,\"pitch\":-9},{\"note\":621,\"pitch\":-10},{\"note\":621.5,\"pitch\":-7},{\"note\":622,\"pitch\":2},{\"note\":622.5,\"pitch\":-2},{\"note\":623,\"pitch\":-3},{\"note\":623.5,\"pitch\":-7},{\"note\":624,\"pitch\":-3},{\"note\":624.5,\"pitch\":2},{\"note\":625,\"pitch\":-2},{\"note\":625.5,\"pitch\":-3},{\"note\":626,\"pitch\":-5},{\"note\":626.5,\"pitch\":-7},{\"note\":627,\"pitch\":-2},{\"note\":627.5,\"pitch\":3},{\"note\":628,\"pitch\":-2},{\"note\":628.5,\"pitch\":-3},{\"note\":629,\"pitch\":-5},{\"note\":629.5,\"pitch\":-9},{\"note\":630,\"pitch\":-2},{\"note\":630.5,\"pitch\":2},{\"note\":631,\"pitch\":-2},{\"note\":631.5,\"pitch\":-3},{\"note\":632,\"pitch\":-7},{\"note\":632.5,\"pitch\":-10},{\"note\":633,\"pitch\":-2},{\"note\":633.5,\"pitch\":2},{\"note\":634,\"pitch\":-2},{\"note\":634.5,\"pitch\":-3},{\"note\":635,\"pitch\":-7},{\"note\":635.5,\"pitch\":-10},{\"note\":636,\"pitch\":-3},{\"note\":636.5,\"pitch\":0},{\"note\":637,\"pitch\":-3},{\"note\":637.5,\"pitch\":-5},{\"note\":638,\"pitch\":-7},{\"note\":638.5,\"pitch\":-12},{\"note\":639,\"pitch\":-3},{\"note\":639.5,\"pitch\":0},{\"note\":640,\"pitch\":-3},{\"note\":640.5,\"pitch\":-5},{\"note\":641,\"pitch\":-7},{\"note\":641.5,\"pitch\":-12},{\"note\":642,\"pitch\":-5},{\"note\":642.5,\"pitch\":3},{\"note\":643,\"pitch\":2},{\"note\":643.5,\"pitch\":0},{\"note\":644,\"pitch\":-5},{\"note\":644.5,\"pitch\":-9},{\"note\":645,\"pitch\":-7},{\"note\":645.5,\"pitch\":2},{\"note\":646,\"pitch\":-2},{\"note\":646.5,\"pitch\":-3},{\"note\":647,\"pitch\":-7},{\"note\":647.5,\"pitch\":-10},{\"note\":648,\"pitch\":-7},{\"note\":648.5,\"pitch\":0},{\"note\":649,\"pitch\":-2},{\"note\":649.5,\"pitch\":-3},{\"note\":650,\"pitch\":-7},{\"note\":650.5,\"pitch\":-12},{\"note\":651,\"pitch\":-5},{\"note\":651.5,\"pitch\":2},{\"note\":652,\"pitch\":-2},{\"note\":652.5,\"pitch\":-3},{\"note\":653,\"pitch\":-5},{\"note\":653.5,\"pitch\":-10},{\"note\":654,\"pitch\":-2},{\"note\":654.5,\"pitch\":3},{\"note\":655,\"pitch\":-2},{\"note\":655.5,\"pitch\":-3},{\"note\":656,\"pitch\":-5},{\"note\":656.5,\"pitch\":-9},{\"note\":657,\"pitch\":-2},{\"note\":657.5,\"pitch\":2},{\"note\":658,\"pitch\":-2},{\"note\":658.5,\"pitch\":-3},{\"note\":659,\"pitch\":-7},{\"note\":659.5,\"pitch\":-10},{\"note\":660,\"pitch\":-3},{\"note\":660.5,\"pitch\":2},{\"note\":661,\"pitch\":-2},{\"note\":661.5,\"pitch\":-3},{\"note\":662,\"pitch\":-5},{\"note\":662.5,\"pitch\":-7},{\"note\":663,\"pitch\":0},{\"note\":663.5,\"pitch\":5},{\"note\":664,\"pitch\":0},{\"note\":664.5,\"pitch\":-2},{\"note\":665,\"pitch\":-3},{\"note\":665.5,\"pitch\":-7},{\"note\":666,\"pitch\":-5},{\"note\":666.5,\"pitch\":3},{\"note\":667,\"pitch\":2},{\"note\":667.5,\"pitch\":0},{\"note\":668,\"pitch\":-5},{\"note\":668.5,\"pitch\":-9},{\"note\":669,\"pitch\":-7},{\"note\":669.5,\"pitch\":2},{\"note\":670,\"pitch\":-2},{\"note\":670.5,\"pitch\":-3},{\"note\":671,\"pitch\":-7},{\"note\":671.5,\"pitch\":-10},{\"note\":672,\"pitch\":-3},{\"note\":672.5,\"pitch\":2},{\"note\":673,\"pitch\":-2},{\"note\":673.5,\"pitch\":-3},{\"note\":674,\"pitch\":-5},{\"note\":674.5,\"pitch\":-7},{\"note\":675,\"pitch\":0},{\"note\":675.5,\"pitch\":5},{\"note\":676,\"pitch\":0},{\"note\":676.5,\"pitch\":-2},{\"note\":677,\"pitch\":-3},{\"note\":677.5,\"pitch\":-7},{\"note\":678,\"pitch\":-2},{\"note\":678.5,\"pitch\":3},{\"note\":679,\"pitch\":-2},{\"note\":679.5,\"pitch\":-3},{\"note\":680,\"pitch\":-5},{\"note\":680.5,\"pitch\":-9},{\"note\":681,\"pitch\":-2},{\"note\":681.5,\"pitch\":2},{\"note\":682,\"pitch\":-2},{\"note\":682.5,\"pitch\":-3},{\"note\":683,\"pitch\":-7},{\"note\":683.5,\"pitch\":-10},{\"note\":684,\"pitch\":0},{\"note\":684.5,\"pitch\":5},{\"note\":685,\"pitch\":0},{\"note\":685.5,\"pitch\":-2},{\"note\":686,\"pitch\":-3},{\"note\":686.5,\"pitch\":-7},{\"note\":687,\"pitch\":-3},{\"note\":687.5,\"pitch\":2},{\"note\":688,\"pitch\":-3},{\"note\":688.5,\"pitch\":-5},{\"note\":689,\"pitch\":-6},{\"note\":689.5,\"pitch\":-5}]},\"P20\":{\"id\":\"P20\",\"name\":\"Celesta (Optioanl)\",\"measureCount\":119,\"notes\":[{\"note\":126,\"pitch\":-14},{\"note\":126.5,\"pitch\":-9},{\"note\":127,\"pitch\":-14},{\"note\":127.5,\"pitch\":-15},{\"note\":128,\"pitch\":-17},{\"note\":128.5,\"pitch\":-15},{\"note\":129,\"pitch\":-14},{\"note\":129.5,\"pitch\":-9},{\"note\":130,\"pitch\":-14},{\"note\":130.5,\"pitch\":-15},{\"note\":131,\"pitch\":-17},{\"note\":131.5,\"pitch\":-15},{\"note\":132,\"pitch\":-14},{\"note\":132.5,\"pitch\":-10},{\"note\":133,\"pitch\":-14},{\"note\":133.5,\"pitch\":-15},{\"note\":134,\"pitch\":-17},{\"note\":134.5,\"pitch\":-15},{\"note\":135,\"pitch\":-14},{\"note\":135.5,\"pitch\":-10},{\"note\":136,\"pitch\":-14},{\"note\":136.5,\"pitch\":-15},{\"note\":137,\"pitch\":-17},{\"note\":137.5,\"pitch\":-15},{\"note\":138,\"pitch\":-14},{\"note\":138.5,\"pitch\":-9},{\"note\":139,\"pitch\":-14},{\"note\":139.5,\"pitch\":-15},{\"note\":140,\"pitch\":-17},{\"note\":140.5,\"pitch\":-15},{\"note\":141,\"pitch\":-14},{\"note\":141.5,\"pitch\":-9},{\"note\":142,\"pitch\":-14},{\"note\":142.5,\"pitch\":-15},{\"note\":143,\"pitch\":-17},{\"note\":143.5,\"pitch\":-15},{\"note\":144,\"pitch\":-14},{\"note\":270,\"pitch\":-14},{\"note\":270.5,\"pitch\":-17},{\"note\":271,\"pitch\":-14},{\"note\":272,\"pitch\":-14},{\"note\":273,\"pitch\":-14},{\"note\":273.5,\"pitch\":-17},{\"note\":274,\"pitch\":-14},{\"note\":275,\"pitch\":-14},{\"note\":276,\"pitch\":-14},{\"note\":276.5,\"pitch\":-17},{\"note\":277,\"pitch\":-9},{\"note\":278,\"pitch\":-14},{\"note\":279,\"pitch\":-14},{\"note\":279.5,\"pitch\":-9},{\"note\":280,\"pitch\":-14},{\"note\":280.5,\"pitch\":-15},{\"note\":281,\"pitch\":-17},{\"note\":281.5,\"pitch\":-15},{\"note\":282,\"pitch\":-14},{\"note\":282.5,\"pitch\":-17},{\"note\":283,\"pitch\":-14},{\"note\":284,\"pitch\":-14},{\"note\":285,\"pitch\":-14},{\"note\":285.5,\"pitch\":-17},{\"note\":286,\"pitch\":-14},{\"note\":287,\"pitch\":-14},{\"note\":288,\"pitch\":-15},{\"note\":288.5,\"pitch\":-12},{\"note\":289,\"pitch\":-9},{\"note\":289.5,\"pitch\":-10},{\"note\":290,\"pitch\":-12},{\"note\":290.5,\"pitch\":-5},{\"note\":291,\"pitch\":-10},{\"note\":291.5,\"pitch\":-2},{\"note\":292,\"pitch\":-3},{\"note\":292.5,\"pitch\":-5},{\"note\":293,\"pitch\":-9},{\"note\":293.5,\"pitch\":2},{\"note\":294.5,\"pitch\":-5},{\"note\":295,\"pitch\":-2},{\"note\":295.5,\"pitch\":-5},{\"note\":296,\"pitch\":-9},{\"note\":296.5,\"pitch\":-10},{\"note\":297,\"pitch\":-14},{\"note\":297.5,\"pitch\":-15},{\"note\":298,\"pitch\":-17},{\"note\":298.5,\"pitch\":-15},{\"note\":299,\"pitch\":-14},{\"note\":299.5,\"pitch\":-10},{\"note\":303,\"pitch\":-14},{\"note\":303.5,\"pitch\":-17},{\"note\":304,\"pitch\":-14},{\"note\":306,\"pitch\":-14},{\"note\":306.5,\"pitch\":-17},{\"note\":307,\"pitch\":-14},{\"note\":309,\"pitch\":-14},{\"note\":309.5,\"pitch\":-10},{\"note\":310,\"pitch\":-14},{\"note\":310.5,\"pitch\":-15},{\"note\":311,\"pitch\":-17},{\"note\":311.5,\"pitch\":-15},{\"note\":312,\"pitch\":-14},{\"note\":312.5,\"pitch\":-17},{\"note\":313,\"pitch\":-14},{\"note\":315,\"pitch\":-14},{\"note\":315.5,\"pitch\":-9},{\"note\":316,\"pitch\":-14},{\"note\":316.5,\"pitch\":-15},{\"note\":317,\"pitch\":-17},{\"note\":317.5,\"pitch\":-15},{\"note\":318,\"pitch\":-14},{\"note\":318.5,\"pitch\":-10},{\"note\":319,\"pitch\":-14},{\"note\":319.5,\"pitch\":-15},{\"note\":320,\"pitch\":-17},{\"note\":320.5,\"pitch\":-15},{\"note\":321,\"pitch\":-14},{\"note\":321.5,\"pitch\":-10},{\"note\":322,\"pitch\":-14},{\"note\":324,\"pitch\":-14},{\"note\":324.5,\"pitch\":-9},{\"note\":325,\"pitch\":-14},{\"note\":325.5,\"pitch\":-15},{\"note\":326,\"pitch\":-17},{\"note\":326.5,\"pitch\":-15},{\"note\":327,\"pitch\":-14},{\"note\":327.5,\"pitch\":-9},{\"note\":328,\"pitch\":-14},{\"note\":328.5,\"pitch\":-15},{\"note\":329,\"pitch\":-17},{\"note\":329.5,\"pitch\":-15},{\"note\":330,\"pitch\":-14},{\"note\":330.5,\"pitch\":-10},{\"note\":331.5,\"pitch\":-14},{\"note\":332,\"pitch\":-10},{\"note\":333,\"pitch\":-14},{\"note\":333.5,\"pitch\":-10},{\"note\":334.5,\"pitch\":-14},{\"note\":335,\"pitch\":-10},{\"note\":336,\"pitch\":-14},{\"note\":336.5,\"pitch\":-9},{\"note\":337,\"pitch\":-14},{\"note\":337.5,\"pitch\":-15},{\"note\":338,\"pitch\":-17},{\"note\":338.5,\"pitch\":-15},{\"note\":339,\"pitch\":-14},{\"note\":339.5,\"pitch\":-9},{\"note\":340,\"pitch\":-14},{\"note\":340.5,\"pitch\":-15},{\"note\":341,\"pitch\":-17},{\"note\":341.5,\"pitch\":-15},{\"note\":342,\"pitch\":-14},{\"note\":468,\"pitch\":-14},{\"note\":468.5,\"pitch\":-10},{\"note\":469,\"pitch\":-14},{\"note\":469.5,\"pitch\":-15},{\"note\":470,\"pitch\":-17},{\"note\":470.5,\"pitch\":-15},{\"note\":471,\"pitch\":-14},{\"note\":471.5,\"pitch\":-10},{\"note\":472,\"pitch\":-14},{\"note\":472.5,\"pitch\":-15},{\"note\":473,\"pitch\":-17},{\"note\":473.5,\"pitch\":-15},{\"note\":474,\"pitch\":-14},{\"note\":474.5,\"pitch\":-9},{\"note\":475,\"pitch\":-14},{\"note\":475.5,\"pitch\":-15},{\"note\":476,\"pitch\":-17},{\"note\":476.5,\"pitch\":-15},{\"note\":477,\"pitch\":-14},{\"note\":477.5,\"pitch\":-9},{\"note\":478,\"pitch\":-14},{\"note\":478.5,\"pitch\":-15},{\"note\":479,\"pitch\":-17},{\"note\":492,\"pitch\":-14},{\"note\":492.5,\"pitch\":-9},{\"note\":493,\"pitch\":-14},{\"note\":493.5,\"pitch\":-15},{\"note\":494,\"pitch\":-17},{\"note\":494.5,\"pitch\":-15},{\"note\":495,\"pitch\":-14},{\"note\":495.5,\"pitch\":-9},{\"note\":496,\"pitch\":-14},{\"note\":496.5,\"pitch\":-15},{\"note\":497,\"pitch\":-17},{\"note\":497.5,\"pitch\":-15},{\"note\":498,\"pitch\":-14},{\"note\":498.5,\"pitch\":-10},{\"note\":499,\"pitch\":-14},{\"note\":499.5,\"pitch\":-15},{\"note\":500,\"pitch\":-17},{\"note\":500.5,\"pitch\":-15},{\"note\":501,\"pitch\":-14},{\"note\":501.5,\"pitch\":-10},{\"note\":502,\"pitch\":-14},{\"note\":502.5,\"pitch\":-15},{\"note\":503,\"pitch\":-17},{\"note\":503.5,\"pitch\":-15},{\"note\":504,\"pitch\":-14},{\"note\":504.5,\"pitch\":-10},{\"note\":505,\"pitch\":-14},{\"note\":505.5,\"pitch\":-15},{\"note\":506,\"pitch\":-17},{\"note\":506.5,\"pitch\":-15},{\"note\":507,\"pitch\":-14},{\"note\":507.5,\"pitch\":-10},{\"note\":508,\"pitch\":-14},{\"note\":508.5,\"pitch\":-15},{\"note\":509,\"pitch\":-17},{\"note\":509.5,\"pitch\":-15},{\"note\":510,\"pitch\":-14},{\"note\":510.5,\"pitch\":-9},{\"note\":511,\"pitch\":-14},{\"note\":511.5,\"pitch\":-15},{\"note\":512,\"pitch\":-17},{\"note\":512.5,\"pitch\":-15},{\"note\":513,\"pitch\":-14},{\"note\":513.5,\"pitch\":-9},{\"note\":514,\"pitch\":-14},{\"note\":514.5,\"pitch\":-15},{\"note\":515,\"pitch\":-17},{\"note\":515.5,\"pitch\":-15},{\"note\":516,\"pitch\":-14},{\"note\":516.5,\"pitch\":-17},{\"note\":517,\"pitch\":-14},{\"note\":517.5,\"pitch\":-17},{\"note\":518,\"pitch\":-14},{\"note\":519,\"pitch\":-14},{\"note\":519.5,\"pitch\":-17},{\"note\":520,\"pitch\":-14},{\"note\":520.5,\"pitch\":-17},{\"note\":521,\"pitch\":-14},{\"note\":522,\"pitch\":-14},{\"note\":522.5,\"pitch\":-17},{\"note\":523,\"pitch\":-14},{\"note\":523.5,\"pitch\":-17},{\"note\":524,\"pitch\":-14},{\"note\":525,\"pitch\":-14},{\"note\":525.5,\"pitch\":-17},{\"note\":526,\"pitch\":-9},{\"note\":526.5,\"pitch\":-17},{\"note\":527,\"pitch\":-14},{\"note\":528,\"words\":\"(sim.)\"},{\"note\":528,\"pitch\":-14},{\"note\":528.5,\"pitch\":-17},{\"note\":529,\"pitch\":-14},{\"note\":529.5,\"pitch\":-17},{\"note\":530,\"pitch\":-10},{\"note\":531,\"pitch\":-14},{\"note\":531.5,\"pitch\":-17},{\"note\":532,\"pitch\":-14},{\"note\":532.5,\"pitch\":-17},{\"note\":533,\"pitch\":-10},{\"note\":534,\"pitch\":-14},{\"note\":534.5,\"pitch\":-17},{\"note\":535,\"pitch\":-14},{\"note\":535.5,\"pitch\":-17},{\"note\":536,\"pitch\":-9},{\"note\":537,\"pitch\":-17},{\"note\":537.5,\"pitch\":-14},{\"note\":538.5,\"pitch\":-17},{\"note\":539,\"pitch\":-14}]},\"P21\":{\"id\":\"P21\",\"name\":\"Harp\",\"measureCount\":119,\"notes\":[{\"note\":54,\"pitch\":-21},{\"note\":55,\"pitch\":15},{\"note\":56,\"pitch\":-14},{\"note\":57,\"pitch\":15},{\"note\":58,\"pitch\":-14},{\"note\":60,\"pitch\":-29},{\"note\":61,\"pitch\":19},{\"note\":62,\"pitch\":-17},{\"note\":63,\"pitch\":7},{\"note\":65,\"pitch\":-29},{\"note\":67,\"pitch\":-17},{\"note\":67,\"words\":\"(cue-72)\"},{\"note\":68,\"pitch\":-5},{\"note\":69,\"pitch\":-5},{\"note\":70,\"pitch\":-10},{\"note\":71,\"pitch\":2},{\"note\":73,\"pitch\":-17},{\"note\":74,\"pitch\":-5},{\"note\":75,\"pitch\":-5},{\"note\":76,\"pitch\":-10},{\"note\":77,\"pitch\":2},{\"note\":79,\"pitch\":-17},{\"note\":80,\"pitch\":-5},{\"note\":81,\"pitch\":-5},{\"note\":82,\"pitch\":-9},{\"note\":83,\"pitch\":3},{\"note\":85,\"pitch\":-17},{\"note\":86,\"pitch\":-5},{\"note\":87,\"pitch\":-5},{\"note\":88,\"pitch\":-10},{\"note\":89,\"pitch\":2},{\"note\":91,\"pitch\":-17},{\"note\":92,\"pitch\":-5},{\"note\":93,\"pitch\":-5},{\"note\":94,\"pitch\":-10},{\"note\":95,\"pitch\":2},{\"note\":97,\"pitch\":-9},{\"note\":98,\"pitch\":-2},{\"note\":99,\"pitch\":-2},{\"note\":100,\"pitch\":-5},{\"note\":101,\"pitch\":3},{\"note\":103,\"pitch\":-5},{\"note\":104,\"pitch\":2},{\"note\":105,\"pitch\":2},{\"note\":106,\"pitch\":-10},{\"note\":107,\"pitch\":-5},{\"note\":108,\"pitch\":-2},{\"note\":108.5,\"pitch\":2},{\"note\":109,\"pitch\":-2},{\"note\":109.5,\"pitch\":-3},{\"note\":110,\"pitch\":-5},{\"note\":110.5,\"pitch\":-3},{\"note\":111,\"pitch\":-2},{\"note\":111.5,\"pitch\":2},{\"note\":112,\"pitch\":-2},{\"note\":112.5,\"pitch\":-3},{\"note\":113,\"pitch\":-5},{\"note\":113.5,\"pitch\":-3},{\"note\":114,\"pitch\":-2},{\"note\":115,\"pitch\":-33},{\"note\":116,\"pitch\":3},{\"note\":117,\"pitch\":-21},{\"note\":118,\"pitch\":15},{\"note\":119,\"pitch\":-9},{\"note\":258,\"words\":\"(cue-72)\"},{\"note\":258,\"pitch\":-2},{\"note\":258.5,\"pitch\":2},{\"note\":259,\"pitch\":-2},{\"note\":259.5,\"pitch\":-3},{\"note\":260,\"pitch\":-5},{\"note\":260.5,\"pitch\":-3},{\"note\":261,\"pitch\":-2},{\"note\":261.5,\"pitch\":2},{\"note\":262,\"pitch\":-2},{\"note\":262.5,\"pitch\":-3},{\"note\":263,\"pitch\":-5},{\"note\":263.5,\"pitch\":-3},{\"note\":264,\"pitch\":-2},{\"note\":264.5,\"pitch\":3},{\"note\":265,\"pitch\":-2},{\"note\":265.5,\"pitch\":-3},{\"note\":266,\"pitch\":-5},{\"note\":266.5,\"pitch\":-3},{\"note\":267,\"pitch\":-2},{\"note\":267.5,\"pitch\":3},{\"note\":268,\"pitch\":-2},{\"note\":268.5,\"pitch\":-3},{\"note\":269,\"pitch\":-5},{\"note\":269.5,\"pitch\":-3},{\"note\":270,\"pitch\":-17},{\"note\":273,\"pitch\":19},{\"note\":276,\"pitch\":-17},{\"note\":279,\"pitch\":19},{\"note\":282,\"pitch\":-2},{\"note\":282.5,\"pitch\":2},{\"note\":283,\"pitch\":-2},{\"note\":283.5,\"pitch\":-3},{\"note\":284,\"pitch\":-5},{\"note\":284.5,\"pitch\":-3},{\"note\":285,\"pitch\":-2},{\"note\":285.5,\"pitch\":2},{\"note\":286,\"pitch\":-2},{\"note\":286.5,\"pitch\":-3},{\"note\":287,\"pitch\":-5},{\"note\":287.5,\"pitch\":-3},{\"note\":288,\"pitch\":0},{\"note\":288.5,\"pitch\":3},{\"note\":289,\"pitch\":0},{\"note\":289.5,\"pitch\":-2},{\"note\":290,\"pitch\":-3},{\"note\":290.5,\"pitch\":-5},{\"note\":291,\"pitch\":-2},{\"note\":291.5,\"pitch\":2},{\"note\":292,\"pitch\":-2},{\"note\":292.5,\"pitch\":-3},{\"note\":293,\"pitch\":-5},{\"note\":293.5,\"pitch\":-3},{\"note\":294,\"pitch\":-2},{\"note\":294.5,\"pitch\":2},{\"note\":295,\"pitch\":-2},{\"note\":295.5,\"pitch\":-3},{\"note\":296,\"pitch\":-5},{\"note\":296.5,\"pitch\":-3},{\"note\":297,\"pitch\":-2},{\"note\":297.5,\"pitch\":2},{\"note\":298,\"pitch\":-2},{\"note\":298.5,\"pitch\":-3},{\"note\":299,\"pitch\":-5},{\"note\":299.5,\"pitch\":-3},{\"note\":300,\"pitch\":-2},{\"note\":300.5,\"pitch\":3},{\"note\":301,\"pitch\":-2},{\"note\":301.5,\"pitch\":-3},{\"note\":302,\"pitch\":-5},{\"note\":302.5,\"pitch\":-3},{\"note\":303,\"pitch\":-17},{\"note\":306,\"pitch\":19},{\"note\":309,\"pitch\":-17},{\"note\":312,\"pitch\":-2},{\"note\":312,\"words\":\"(cue-78)\"},{\"note\":312.5,\"pitch\":3},{\"note\":313,\"pitch\":-2},{\"note\":313.5,\"pitch\":-3},{\"note\":314,\"pitch\":-5},{\"note\":314.5,\"pitch\":-3},{\"note\":315,\"pitch\":-2},{\"note\":315.5,\"pitch\":3},{\"note\":316,\"pitch\":-2},{\"note\":316.5,\"pitch\":-3},{\"note\":317,\"pitch\":-5},{\"note\":317.5,\"pitch\":-3},{\"note\":318,\"pitch\":-2},{\"note\":318.5,\"pitch\":2},{\"note\":319,\"pitch\":-2},{\"note\":319.5,\"pitch\":-3},{\"note\":320,\"pitch\":-5},{\"note\":320.5,\"pitch\":-3},{\"note\":321,\"pitch\":-2},{\"note\":321.5,\"pitch\":2},{\"note\":322,\"pitch\":-2},{\"note\":322.5,\"pitch\":-3},{\"note\":323,\"pitch\":-5},{\"note\":323.5,\"pitch\":-3},{\"note\":324,\"words\":\"(sim.)\"},{\"note\":324,\"pitch\":-2},{\"note\":324.5,\"pitch\":3},{\"note\":325,\"pitch\":-2},{\"note\":325.5,\"pitch\":-3},{\"note\":326,\"pitch\":-5},{\"note\":326.5,\"pitch\":-3},{\"note\":327,\"pitch\":-2},{\"note\":327.5,\"pitch\":3},{\"note\":328,\"pitch\":-2},{\"note\":328.5,\"pitch\":-3},{\"note\":329,\"pitch\":-5},{\"note\":329.5,\"pitch\":-3},{\"note\":330,\"pitch\":-2},{\"note\":330.5,\"pitch\":2},{\"note\":331,\"pitch\":-2},{\"note\":331.5,\"pitch\":-3},{\"note\":332,\"pitch\":-5},{\"note\":332.5,\"pitch\":-3},{\"note\":333,\"pitch\":-2},{\"note\":333.5,\"pitch\":2},{\"note\":334,\"pitch\":-2},{\"note\":334.5,\"pitch\":-3},{\"note\":335,\"pitch\":-5},{\"note\":335.5,\"pitch\":-3},{\"note\":336,\"pitch\":-2},{\"note\":336.5,\"pitch\":3},{\"note\":337,\"pitch\":-2},{\"note\":337.5,\"pitch\":-3},{\"note\":338,\"pitch\":-5},{\"note\":338.5,\"pitch\":-3},{\"note\":339,\"pitch\":-2},{\"note\":339.5,\"pitch\":3},{\"note\":340,\"pitch\":-2},{\"note\":340.5,\"pitch\":-3},{\"note\":341,\"pitch\":-5},{\"note\":341.5,\"pitch\":-3},{\"note\":342,\"pitch\":-2},{\"note\":342.5,\"pitch\":2},{\"note\":343,\"pitch\":-2},{\"note\":343.5,\"pitch\":-3},{\"note\":344,\"pitch\":-5},{\"note\":344.5,\"pitch\":-2},{\"note\":345,\"pitch\":-3},{\"note\":345.5,\"pitch\":2},{\"note\":346,\"pitch\":-3},{\"note\":346.5,\"pitch\":-5},{\"note\":347,\"pitch\":-6},{\"note\":347.5,\"pitch\":-3},{\"note\":348,\"pitch\":-2},{\"note\":348.5,\"pitch\":2},{\"note\":349,\"pitch\":-2},{\"note\":349.5,\"pitch\":-3},{\"note\":350,\"pitch\":-5},{\"note\":350.5,\"pitch\":-3},{\"note\":351,\"pitch\":-2},{\"note\":351.5,\"pitch\":2},{\"note\":352,\"pitch\":0},{\"note\":352.5,\"pitch\":-3},{\"note\":353,\"pitch\":-7},{\"note\":353.5,\"pitch\":-3},{\"note\":354,\"pitch\":-2},{\"note\":354.5,\"pitch\":2},{\"note\":355,\"pitch\":-2},{\"note\":355.5,\"pitch\":-3},{\"note\":356,\"pitch\":-7},{\"note\":356.5,\"pitch\":-3},{\"note\":357,\"pitch\":-2},{\"note\":357.5,\"pitch\":2},{\"note\":358,\"pitch\":-2},{\"note\":358.5,\"pitch\":-3},{\"note\":359,\"pitch\":-7},{\"note\":359.5,\"pitch\":-3},{\"note\":360,\"pitch\":0},{\"note\":360.5,\"pitch\":5},{\"note\":361,\"pitch\":0},{\"note\":361.5,\"pitch\":-2},{\"note\":362,\"pitch\":-3},{\"note\":362.5,\"pitch\":-2},{\"note\":363,\"pitch\":0},{\"note\":363.5,\"pitch\":5},{\"note\":364,\"pitch\":0},{\"note\":364.5,\"pitch\":-2},{\"note\":365,\"pitch\":-3},{\"note\":365.5,\"pitch\":-2},{\"note\":366,\"pitch\":3},{\"note\":366.5,\"pitch\":7},{\"note\":367,\"pitch\":3},{\"note\":367.5,\"pitch\":2},{\"note\":368,\"pitch\":0},{\"note\":369,\"pitch\":2},{\"note\":369.5,\"pitch\":5},{\"note\":370,\"pitch\":2},{\"note\":370.5,\"pitch\":0},{\"note\":371,\"pitch\":-2},{\"note\":372,\"pitch\":0},{\"note\":372.5,\"pitch\":5},{\"note\":373,\"pitch\":0},{\"note\":373.5,\"pitch\":-2},{\"note\":374,\"pitch\":-3},{\"note\":375,\"pitch\":-2},{\"note\":375.5,\"pitch\":2},{\"note\":376,\"pitch\":-2},{\"note\":376.5,\"pitch\":-3},{\"note\":377,\"pitch\":-5},{\"note\":377.5,\"pitch\":-3},{\"note\":378,\"pitch\":-2},{\"note\":378.5,\"pitch\":3},{\"note\":379,\"pitch\":-2},{\"note\":379.5,\"pitch\":-3},{\"note\":380,\"pitch\":-5},{\"note\":380.5,\"pitch\":-3},{\"note\":381,\"pitch\":-2},{\"note\":381.5,\"pitch\":2},{\"note\":382,\"pitch\":-2},{\"note\":382.5,\"pitch\":-3},{\"note\":383,\"pitch\":-7},{\"note\":383.5,\"pitch\":-3},{\"note\":384,\"pitch\":2},{\"note\":384.5,\"pitch\":5},{\"note\":385,\"pitch\":2},{\"note\":385.5,\"pitch\":0},{\"note\":386,\"pitch\":-2},{\"note\":386.5,\"pitch\":0},{\"note\":387,\"pitch\":-3},{\"note\":387.5,\"pitch\":5},{\"note\":388,\"pitch\":0},{\"note\":388.5,\"pitch\":-2},{\"note\":389,\"pitch\":-3},{\"note\":389.5,\"pitch\":-2},{\"note\":417,\"words\":\"(cue-39)\"},{\"note\":417,\"pitch\":-21},{\"note\":420,\"pitch\":15},{\"note\":423,\"pitch\":-9},{\"note\":426,\"pitch\":-17},{\"note\":429,\"pitch\":19},{\"note\":432,\"pitch\":-17},{\"note\":435,\"pitch\":19},{\"note\":438,\"pitch\":-17},{\"note\":444,\"pitch\":-2},{\"note\":444.5,\"pitch\":2},{\"note\":445,\"pitch\":-2},{\"note\":445.5,\"pitch\":-3},{\"note\":446,\"pitch\":-5},{\"note\":447,\"pitch\":-2},{\"note\":447.5,\"pitch\":2},{\"note\":448,\"pitch\":-2},{\"note\":448.5,\"pitch\":-3},{\"note\":449,\"pitch\":-5},{\"note\":450,\"pitch\":-2},{\"note\":450.5,\"pitch\":3},{\"note\":451,\"pitch\":-2},{\"note\":451.5,\"pitch\":-3},{\"note\":452,\"pitch\":-5},{\"note\":453,\"pitch\":-2},{\"note\":453.5,\"pitch\":3},{\"note\":454,\"pitch\":-2},{\"note\":454.5,\"pitch\":-3},{\"note\":455,\"pitch\":-5},{\"note\":516,\"pitch\":-5},{\"note\":516,\"words\":\"(cue-24)\"},{\"note\":516.5,\"pitch\":-2},{\"note\":517.5,\"pitch\":-10},{\"note\":518,\"pitch\":-5},{\"note\":519,\"pitch\":-5},{\"note\":519.5,\"pitch\":-2},{\"note\":520.5,\"pitch\":-10},{\"note\":521,\"pitch\":-5},{\"note\":522,\"pitch\":-2},{\"note\":522.5,\"pitch\":3},{\"note\":523.5,\"pitch\":-5},{\"note\":524,\"pitch\":-2},{\"note\":525,\"pitch\":-2},{\"note\":525.5,\"pitch\":3},{\"note\":526.5,\"pitch\":-5},{\"note\":527,\"pitch\":-2},{\"note\":528,\"words\":\"(sim.)\"},{\"note\":528,\"pitch\":-5},{\"note\":528.5,\"pitch\":-2},{\"note\":529.5,\"pitch\":-10},{\"note\":530,\"pitch\":-5},{\"note\":531,\"pitch\":-5},{\"note\":531.5,\"pitch\":-2},{\"note\":532.5,\"pitch\":-10},{\"note\":533,\"pitch\":-5},{\"note\":534,\"pitch\":-2},{\"note\":534.5,\"pitch\":3},{\"note\":535.5,\"pitch\":-5},{\"note\":536,\"pitch\":-2},{\"note\":537,\"pitch\":-2},{\"note\":537.5,\"pitch\":3},{\"note\":538.5,\"pitch\":-5},{\"note\":539,\"pitch\":-2},{\"note\":558,\"words\":\"(cue-126)\"},{\"note\":558,\"pitch\":-2},{\"note\":558.5,\"pitch\":-3},{\"note\":559,\"pitch\":-2},{\"note\":559.5,\"pitch\":2},{\"note\":560,\"pitch\":-2},{\"note\":561,\"pitch\":-2},{\"note\":561.5,\"pitch\":-3},{\"note\":562,\"pitch\":-2},{\"note\":562.5,\"pitch\":2},{\"note\":563,\"pitch\":-2},{\"note\":564,\"pitch\":0},{\"note\":564.5,\"pitch\":-2},{\"note\":565,\"pitch\":0},{\"note\":565.5,\"pitch\":7},{\"note\":566,\"pitch\":0},{\"note\":567,\"pitch\":3},{\"note\":567.5,\"pitch\":2},{\"note\":568,\"pitch\":3},{\"note\":568.5,\"pitch\":10},{\"note\":569,\"pitch\":3},{\"note\":570,\"pitch\":-2},{\"note\":570.5,\"pitch\":2},{\"note\":571,\"pitch\":-2},{\"note\":571.5,\"pitch\":-3},{\"note\":572,\"pitch\":-5},{\"note\":572.5,\"pitch\":-3},{\"note\":573,\"pitch\":-2},{\"note\":573.5,\"pitch\":2},{\"note\":574,\"pitch\":-2},{\"note\":574.5,\"pitch\":-3},{\"note\":575,\"pitch\":-5},{\"note\":575.5,\"pitch\":-3},{\"note\":576,\"pitch\":-2},{\"note\":576.5,\"pitch\":3},{\"note\":577,\"pitch\":-2},{\"note\":577.5,\"pitch\":-3},{\"note\":578,\"pitch\":-5},{\"note\":578.5,\"pitch\":-3},{\"note\":579,\"pitch\":-2},{\"note\":579.5,\"pitch\":3},{\"note\":580,\"pitch\":-2},{\"note\":580.5,\"pitch\":-3},{\"note\":581,\"pitch\":-5},{\"note\":581.5,\"pitch\":-3},{\"note\":582,\"pitch\":-2},{\"note\":582.5,\"pitch\":2},{\"note\":583,\"pitch\":-2},{\"note\":583.5,\"pitch\":-3},{\"note\":584,\"pitch\":-5},{\"note\":584.5,\"pitch\":-3},{\"note\":585,\"pitch\":-2},{\"note\":585.5,\"pitch\":2},{\"note\":586,\"pitch\":-2},{\"note\":586.5,\"pitch\":-3},{\"note\":587,\"pitch\":-5},{\"note\":587.5,\"pitch\":-3},{\"note\":588,\"pitch\":-21},{\"note\":589,\"pitch\":3},{\"note\":590,\"pitch\":-9},{\"note\":591,\"pitch\":7},{\"note\":592,\"pitch\":-2},{\"note\":593,\"pitch\":10},{\"note\":594,\"pitch\":-2},{\"note\":594.5,\"pitch\":2},{\"note\":595,\"pitch\":-2},{\"note\":595.5,\"pitch\":-3},{\"note\":596,\"pitch\":-5},{\"note\":596.5,\"pitch\":-3},{\"note\":597,\"pitch\":-2},{\"note\":597.5,\"pitch\":3},{\"note\":598,\"pitch\":-2},{\"note\":598.5,\"pitch\":-3},{\"note\":599,\"pitch\":-5},{\"note\":599.5,\"pitch\":-3},{\"note\":600,\"pitch\":-2},{\"note\":600.5,\"pitch\":2},{\"note\":601,\"pitch\":-2},{\"note\":601.5,\"pitch\":-3},{\"note\":602,\"pitch\":-5},{\"note\":602.5,\"pitch\":-3},{\"note\":603,\"pitch\":-2},{\"note\":603.5,\"pitch\":2},{\"note\":604,\"pitch\":-2},{\"note\":604.5,\"pitch\":-3},{\"note\":605,\"pitch\":-5},{\"note\":605.5,\"pitch\":-3},{\"note\":606,\"pitch\":-2},{\"note\":606.5,\"pitch\":2},{\"note\":607,\"pitch\":-2},{\"note\":607.5,\"pitch\":-3},{\"note\":608,\"pitch\":-5},{\"note\":608.5,\"pitch\":-3},{\"note\":609,\"pitch\":-2},{\"note\":609.5,\"pitch\":3},{\"note\":610,\"pitch\":-2},{\"note\":610.5,\"pitch\":-3},{\"note\":611,\"pitch\":-5},{\"note\":611.5,\"pitch\":-3},{\"note\":612,\"pitch\":-2},{\"note\":612.5,\"pitch\":2},{\"note\":613,\"pitch\":-2},{\"note\":613.5,\"pitch\":-3},{\"note\":614,\"pitch\":-7},{\"note\":614.5,\"pitch\":-3},{\"note\":615,\"pitch\":-2},{\"note\":615.5,\"pitch\":0},{\"note\":616,\"pitch\":-2},{\"note\":616.5,\"pitch\":-3},{\"note\":617,\"pitch\":-7},{\"note\":617.5,\"pitch\":-3},{\"note\":618,\"words\":\"(sim.)\"},{\"note\":618,\"pitch\":-5},{\"note\":618.5,\"pitch\":3},{\"note\":619,\"pitch\":2},{\"note\":619.5,\"pitch\":0},{\"note\":620,\"pitch\":-5},{\"note\":620.5,\"pitch\":-9},{\"note\":621,\"pitch\":-10},{\"note\":621.5,\"pitch\":-7},{\"note\":622,\"pitch\":2},{\"note\":622.5,\"pitch\":-2},{\"note\":623,\"pitch\":-3},{\"note\":623.5,\"pitch\":-7},{\"note\":624,\"pitch\":-3},{\"note\":624.5,\"pitch\":2},{\"note\":625,\"pitch\":-2},{\"note\":625.5,\"pitch\":-3},{\"note\":626,\"pitch\":-5},{\"note\":626.5,\"pitch\":-7},{\"note\":627,\"pitch\":-2},{\"note\":627.5,\"pitch\":3},{\"note\":628,\"pitch\":-2},{\"note\":628.5,\"pitch\":-3},{\"note\":629,\"pitch\":-5},{\"note\":629.5,\"pitch\":-9},{\"note\":630,\"pitch\":-2},{\"note\":630.5,\"pitch\":2},{\"note\":631,\"pitch\":-2},{\"note\":631.5,\"pitch\":-3},{\"note\":632,\"pitch\":-7},{\"note\":632.5,\"pitch\":-10},{\"note\":633,\"pitch\":-2},{\"note\":633.5,\"pitch\":2},{\"note\":634,\"pitch\":-2},{\"note\":634.5,\"pitch\":-3},{\"note\":635,\"pitch\":-7},{\"note\":635.5,\"pitch\":-10},{\"note\":636,\"pitch\":-3},{\"note\":636.5,\"pitch\":0},{\"note\":637,\"pitch\":-3},{\"note\":637.5,\"pitch\":-5},{\"note\":638,\"pitch\":-7},{\"note\":638.5,\"pitch\":-12},{\"note\":639,\"pitch\":-3},{\"note\":639.5,\"pitch\":0},{\"note\":640,\"pitch\":-3},{\"note\":640.5,\"pitch\":-5},{\"note\":641,\"pitch\":-7},{\"note\":641.5,\"pitch\":-12},{\"note\":642,\"pitch\":-5},{\"note\":642.5,\"pitch\":3},{\"note\":643,\"pitch\":2},{\"note\":643.5,\"pitch\":0},{\"note\":644,\"pitch\":-5},{\"note\":644.5,\"pitch\":-9},{\"note\":645,\"pitch\":-7},{\"note\":645.5,\"pitch\":2},{\"note\":646,\"pitch\":-2},{\"note\":646.5,\"pitch\":-3},{\"note\":647,\"pitch\":-7},{\"note\":647.5,\"pitch\":-10},{\"note\":648,\"pitch\":-7},{\"note\":648.5,\"pitch\":0},{\"note\":649,\"pitch\":-2},{\"note\":649.5,\"pitch\":-3},{\"note\":650,\"pitch\":-7},{\"note\":650.5,\"pitch\":-12},{\"note\":651,\"pitch\":-5},{\"note\":651.5,\"pitch\":2},{\"note\":652,\"pitch\":-2},{\"note\":652.5,\"pitch\":-3},{\"note\":653,\"pitch\":-5},{\"note\":653.5,\"pitch\":-10},{\"note\":654,\"pitch\":-2},{\"note\":654.5,\"pitch\":3},{\"note\":655,\"pitch\":-2},{\"note\":655.5,\"pitch\":-3},{\"note\":656,\"pitch\":-5},{\"note\":656.5,\"pitch\":-9},{\"note\":657,\"pitch\":-2},{\"note\":657.5,\"pitch\":2},{\"note\":658,\"pitch\":-2},{\"note\":658.5,\"pitch\":-3},{\"note\":659,\"pitch\":-7},{\"note\":659.5,\"pitch\":-10},{\"note\":660,\"pitch\":-3},{\"note\":660.5,\"pitch\":2},{\"note\":661,\"pitch\":-2},{\"note\":661.5,\"pitch\":-3},{\"note\":662,\"pitch\":-5},{\"note\":662.5,\"pitch\":-7},{\"note\":663,\"pitch\":0},{\"note\":663.5,\"pitch\":5},{\"note\":664,\"pitch\":0},{\"note\":664.5,\"pitch\":-2},{\"note\":665,\"pitch\":-3},{\"note\":665.5,\"pitch\":-7},{\"note\":666,\"pitch\":-5},{\"note\":666.5,\"pitch\":3},{\"note\":667,\"pitch\":2},{\"note\":667.5,\"pitch\":0},{\"note\":668,\"pitch\":-5},{\"note\":668.5,\"pitch\":-9},{\"note\":669,\"pitch\":-7},{\"note\":669.5,\"pitch\":2},{\"note\":670,\"pitch\":-2},{\"note\":670.5,\"pitch\":-3},{\"note\":671,\"pitch\":-7},{\"note\":671.5,\"pitch\":-10},{\"note\":672,\"pitch\":-3},{\"note\":672.5,\"pitch\":2},{\"note\":673,\"pitch\":-2},{\"note\":673.5,\"pitch\":-3},{\"note\":674,\"pitch\":-5},{\"note\":674.5,\"pitch\":-7},{\"note\":675,\"pitch\":0},{\"note\":675.5,\"pitch\":5},{\"note\":676,\"pitch\":0},{\"note\":676.5,\"pitch\":-2},{\"note\":677,\"pitch\":-3},{\"note\":677.5,\"pitch\":-7},{\"note\":678,\"pitch\":-2},{\"note\":678.5,\"pitch\":3},{\"note\":679,\"pitch\":-2},{\"note\":679.5,\"pitch\":-3},{\"note\":680,\"pitch\":-5},{\"note\":680.5,\"pitch\":-9},{\"note\":681,\"pitch\":-2},{\"note\":681.5,\"pitch\":2},{\"note\":682,\"pitch\":-2},{\"note\":682.5,\"pitch\":-3},{\"note\":683,\"pitch\":-7},{\"note\":683.5,\"pitch\":-10},{\"note\":684,\"pitch\":0},{\"note\":684.5,\"pitch\":5},{\"note\":685,\"pitch\":0},{\"note\":685.5,\"pitch\":-2},{\"note\":686,\"pitch\":-3},{\"note\":686.5,\"pitch\":-7},{\"note\":687,\"pitch\":-3},{\"note\":687.5,\"pitch\":2},{\"note\":688,\"pitch\":-3},{\"note\":688.5,\"pitch\":-5},{\"note\":689,\"pitch\":-6},{\"note\":689.5,\"pitch\":-5},{\"note\":708,\"words\":\"(C#)\"},{\"note\":711,\"pitch\":0},{\"note\":712,\"pitch\":-24},{\"note\":713,\"pitch\":24}]},\"P22\":{\"id\":\"P22\",\"name\":\"Soprano (Optional)\",\"measureCount\":119,\"notes\":[{\"note\":594,\"words\":\"(legato, cinematic)\"},{\"note\":594,\"pitch\":-2},{\"note\":600,\"pitch\":-2},{\"note\":606,\"pitch\":-5},{\"note\":606,\"pitch\":-2},{\"note\":612,\"pitch\":-2},{\"note\":615,\"pitch\":-3},{\"note\":618,\"pitch\":0},{\"note\":621,\"pitch\":-2},{\"note\":624,\"pitch\":-3},{\"note\":627,\"pitch\":-2},{\"note\":630,\"pitch\":5},{\"note\":631.5,\"pitch\":2},{\"note\":633,\"pitch\":2},{\"note\":634.5,\"pitch\":0},{\"note\":636,\"pitch\":0},{\"note\":642,\"pitch\":3},{\"note\":643.5,\"pitch\":2},{\"note\":645,\"pitch\":2},{\"note\":646.5,\"pitch\":0},{\"note\":648,\"pitch\":0},{\"note\":649.5,\"pitch\":-2},{\"note\":651,\"pitch\":-2},{\"note\":652.5,\"pitch\":2},{\"note\":654,\"pitch\":3},{\"note\":655.5,\"pitch\":2},{\"note\":657,\"pitch\":2},{\"note\":658.5,\"pitch\":-2},{\"note\":660,\"pitch\":5},{\"note\":661.5,\"pitch\":2},{\"note\":663,\"pitch\":0},{\"note\":666,\"pitch\":3},{\"note\":667.5,\"pitch\":2},{\"note\":669,\"pitch\":2},{\"note\":670.5,\"pitch\":-2},{\"note\":672,\"pitch\":2},{\"note\":673.5,\"pitch\":0},{\"note\":675,\"pitch\":0},{\"note\":676.5,\"pitch\":5},{\"note\":678,\"pitch\":7},{\"note\":679.5,\"pitch\":5},{\"note\":681,\"pitch\":5},{\"note\":682.5,\"pitch\":2},{\"note\":684,\"pitch\":5},{\"note\":685.5,\"pitch\":0},{\"note\":687,\"pitch\":2},{\"note\":690,\"pitch\":2},{\"note\":691.5,\"pitch\":-2},{\"note\":693,\"pitch\":-3},{\"note\":694.5,\"pitch\":-2},{\"note\":696,\"pitch\":3},{\"note\":697.5,\"pitch\":-3},{\"note\":699,\"pitch\":-2},{\"note\":702,\"pitch\":2},{\"note\":703.5,\"pitch\":-2},{\"note\":705,\"pitch\":3},{\"note\":706.5,\"pitch\":7},{\"note\":708,\"pitch\":2},{\"note\":709,\"pitch\":7},{\"note\":710,\"pitch\":10},{\"note\":711,\"pitch\":7},{\"note\":712,\"pitch\":7},{\"note\":712,\"pitch\":12}]},\"P23\":{\"id\":\"P23\",\"name\":\"Alto (Optional)\",\"measureCount\":119,\"notes\":[{\"note\":594,\"words\":\"(legato, cinematic)\"},{\"note\":594,\"pitch\":-5},{\"note\":594,\"pitch\":-10},{\"note\":597,\"pitch\":-9},{\"note\":600,\"pitch\":-5},{\"note\":600,\"pitch\":-10},{\"note\":606,\"pitch\":-5},{\"note\":606,\"pitch\":-10},{\"note\":609,\"pitch\":-9},{\"note\":612,\"pitch\":-7},{\"note\":612,\"pitch\":-10},{\"note\":615,\"pitch\":-12},{\"note\":615,\"pitch\":-7},{\"note\":618,\"pitch\":-5},{\"note\":618,\"pitch\":-9},{\"note\":621,\"pitch\":-10},{\"note\":621,\"pitch\":-7},{\"note\":624,\"pitch\":-7},{\"note\":624,\"pitch\":-10},{\"note\":627,\"pitch\":-9},{\"note\":627,\"pitch\":-5},{\"note\":630,\"pitch\":-2},{\"note\":630,\"pitch\":-7},{\"note\":636,\"pitch\":-3},{\"note\":636,\"pitch\":-7},{\"note\":642,\"pitch\":3},{\"note\":643.5,\"pitch\":2},{\"note\":645,\"pitch\":2},{\"note\":646.5,\"pitch\":0},{\"note\":648,\"pitch\":0},{\"note\":649.5,\"pitch\":-2},{\"note\":651,\"pitch\":-2},{\"note\":652.5,\"pitch\":2},{\"note\":654,\"pitch\":3},{\"note\":655.5,\"pitch\":2},{\"note\":657,\"pitch\":2},{\"note\":658.5,\"pitch\":-2},{\"note\":660,\"pitch\":5},{\"note\":661.5,\"pitch\":2},{\"note\":663,\"pitch\":0},{\"note\":666,\"pitch\":3},{\"note\":667.5,\"pitch\":2},{\"note\":669,\"pitch\":2},{\"note\":670.5,\"pitch\":-2},{\"note\":672,\"pitch\":2},{\"note\":673.5,\"pitch\":0},{\"note\":675,\"pitch\":0},{\"note\":676.5,\"pitch\":5},{\"note\":678,\"pitch\":7},{\"note\":679.5,\"pitch\":5},{\"note\":681,\"pitch\":5},{\"note\":682.5,\"pitch\":2},{\"note\":684,\"pitch\":5},{\"note\":685.5,\"pitch\":0},{\"note\":687,\"pitch\":2},{\"note\":690,\"pitch\":2},{\"note\":691.5,\"pitch\":-2},{\"note\":693,\"pitch\":-3},{\"note\":694.5,\"pitch\":-2},{\"note\":696,\"pitch\":3},{\"note\":697.5,\"pitch\":-3},{\"note\":699,\"pitch\":-2},{\"note\":702,\"pitch\":2},{\"note\":703.5,\"pitch\":-2},{\"note\":705,\"pitch\":3},{\"note\":706.5,\"pitch\":-2},{\"note\":708,\"pitch\":-5},{\"note\":709,\"pitch\":-2},{\"note\":710,\"pitch\":2},{\"note\":711,\"pitch\":0},{\"note\":711,\"pitch\":4}]},\"P24\":{\"id\":\"P24\",\"name\":\"Solo Violin I\",\"measureCount\":119,\"notes\":[{\"note\":43,\"words\":\"(cue-23)\"},{\"note\":43,\"pitch\":-2},{\"note\":44,\"pitch\":-2},{\"note\":44.75,\"pitch\":7},{\"note\":45,\"pitch\":7},{\"note\":47,\"pitch\":7},{\"note\":47.75,\"pitch\":2},{\"note\":48,\"pitch\":10},{\"note\":51,\"pitch\":10},{\"note\":53,\"pitch\":7},{\"note\":54,\"pitch\":14},{\"note\":60,\"pitch\":14},{\"note\":73,\"pitch\":7},{\"note\":73,\"words\":\"(cue-20)\"},{\"note\":74,\"pitch\":9},{\"note\":75,\"pitch\":10},{\"note\":77,\"pitch\":7},{\"note\":78,\"pitch\":15},{\"note\":80,\"pitch\":15},{\"note\":80.75,\"pitch\":3},{\"note\":81,\"pitch\":3},{\"note\":83,\"pitch\":7},{\"note\":84,\"pitch\":10},{\"note\":90,\"pitch\":10},{\"note\":108,\"pitch\":-2},{\"note\":108,\"words\":\"(cue-12)\"},{\"note\":108.5,\"pitch\":-3},{\"note\":109,\"pitch\":-5},{\"note\":109.5,\"pitch\":-10},{\"note\":110,\"pitch\":-5},{\"note\":110.5,\"pitch\":-3},{\"note\":111,\"pitch\":-2},{\"note\":111.5,\"pitch\":-3},{\"note\":112,\"pitch\":-5},{\"note\":112.5,\"pitch\":-10},{\"note\":113,\"pitch\":-5},{\"note\":113.5,\"pitch\":-3},{\"note\":114,\"pitch\":-2},{\"note\":114.5,\"pitch\":-3},{\"note\":115,\"pitch\":-5},{\"note\":115.5,\"pitch\":-9},{\"note\":116,\"pitch\":-5},{\"note\":116.5,\"pitch\":-3},{\"note\":117,\"pitch\":-2},{\"note\":117.5,\"pitch\":-5},{\"note\":118,\"pitch\":3},{\"note\":118.5,\"pitch\":-2},{\"note\":119,\"pitch\":7},{\"note\":119.5,\"pitch\":3},{\"note\":144,\"words\":\"(cue-48)\"},{\"note\":144,\"pitch\":10},{\"note\":145.5,\"pitch\":14},{\"note\":147,\"pitch\":15},{\"note\":148.5,\"pitch\":14},{\"note\":150,\"pitch\":14},{\"note\":156,\"pitch\":10},{\"note\":157.5,\"pitch\":14},{\"note\":159,\"pitch\":15},{\"note\":160.5,\"pitch\":14},{\"note\":162,\"pitch\":14},{\"note\":163.5,\"pitch\":12},{\"note\":165,\"pitch\":12},{\"note\":168,\"pitch\":15},{\"note\":169.5,\"pitch\":14},{\"note\":171,\"pitch\":14},{\"note\":172.5,\"pitch\":10},{\"note\":174,\"pitch\":14},{\"note\":175.5,\"pitch\":12},{\"note\":177,\"pitch\":12},{\"note\":178.5,\"pitch\":17},{\"note\":180,\"pitch\":19},{\"note\":181.5,\"pitch\":17},{\"note\":183,\"pitch\":17},{\"note\":184.5,\"pitch\":14},{\"note\":186,\"pitch\":12},{\"note\":457,\"words\":\"(cue-47)\"},{\"note\":457,\"pitch\":7},{\"note\":458,\"pitch\":9},{\"note\":459,\"pitch\":10},{\"note\":461,\"pitch\":10},{\"note\":461.5,\"pitch\":7},{\"note\":462,\"pitch\":15},{\"note\":463.5,\"pitch\":3},{\"note\":464,\"pitch\":3},{\"note\":465,\"pitch\":3},{\"note\":466,\"pitch\":7},{\"note\":467,\"pitch\":9},{\"note\":468,\"pitch\":10},{\"note\":474,\"pitch\":10},{\"note\":474.75,\"pitch\":7},{\"note\":475,\"pitch\":7},{\"note\":475.5,\"pitch\":15},{\"note\":476.25,\"pitch\":10},{\"note\":476.5,\"pitch\":10},{\"note\":477,\"pitch\":19},{\"note\":480,\"pitch\":14},{\"note\":480.75,\"pitch\":10},{\"note\":481,\"pitch\":10},{\"note\":481.5,\"pitch\":15},{\"note\":482.25,\"pitch\":7},{\"note\":482.5,\"pitch\":7},{\"note\":483,\"pitch\":10},{\"note\":483.75,\"pitch\":7},{\"note\":484,\"pitch\":7},{\"note\":484.5,\"pitch\":14},{\"note\":485.25,\"pitch\":10},{\"note\":485.5,\"pitch\":10},{\"note\":486,\"words\":\"(cue)\"},{\"note\":486,\"pitch\":-2},{\"note\":486.6667,\"pitch\":2},{\"note\":487.3333,\"pitch\":3},{\"note\":488,\"pitch\":7},{\"note\":488.6667,\"pitch\":9},{\"note\":489.3333,\"pitch\":10},{\"note\":490,\"pitch\":15},{\"note\":491,\"pitch\":19},{\"note\":492,\"pitch\":22},{\"note\":492.75,\"pitch\":22},{\"note\":493,\"pitch\":22},{\"note\":493.5,\"pitch\":22},{\"note\":494.25,\"pitch\":22},{\"note\":494.5,\"pitch\":22},{\"note\":495,\"pitch\":22},{\"note\":495.75,\"pitch\":22},{\"note\":496,\"pitch\":22},{\"note\":498,\"pitch\":22},{\"note\":504,\"pitch\":22}]},\"P25\":{\"id\":\"P25\",\"name\":\"Solo  Violin II\",\"measureCount\":119,\"notes\":[{\"note\":12,\"words\":\"(Recording Session Option)\"},{\"note\":12,\"pitch\":2},{\"note\":12,\"pitch\":7},{\"note\":18,\"pitch\":7},{\"note\":18,\"pitch\":2},{\"note\":24,\"pitch\":2},{\"note\":24,\"pitch\":7},{\"note\":30,\"pitch\":7},{\"note\":30,\"pitch\":2},{\"note\":36,\"pitch\":2},{\"note\":36,\"pitch\":7},{\"note\":42,\"pitch\":2},{\"note\":42,\"pitch\":7},{\"note\":48,\"pitch\":3},{\"note\":48,\"pitch\":8},{\"note\":54,\"pitch\":2},{\"note\":54,\"pitch\":7},{\"note\":60,\"pitch\":2},{\"note\":60,\"pitch\":7},{\"note\":456,\"words\":\"(cue-48)\"},{\"note\":456,\"pitch\":-2},{\"note\":456.5,\"pitch\":2},{\"note\":457,\"pitch\":2},{\"note\":457.5,\"pitch\":2},{\"note\":458,\"pitch\":2},{\"note\":458.5,\"pitch\":2},{\"note\":459,\"pitch\":2},{\"note\":459.75,\"pitch\":2},{\"note\":460,\"pitch\":2},{\"note\":460.5,\"pitch\":2},{\"note\":461.25,\"pitch\":2},{\"note\":461.5,\"pitch\":2},{\"note\":462,\"pitch\":-2},{\"note\":462.75,\"pitch\":-5},{\"note\":463,\"pitch\":-5},{\"note\":463.5,\"pitch\":3},{\"note\":464.25,\"pitch\":-2},{\"note\":464.5,\"pitch\":-2},{\"note\":465,\"pitch\":-5},{\"note\":465.75,\"pitch\":-9},{\"note\":466,\"pitch\":-9},{\"note\":466.5,\"pitch\":-2},{\"note\":467.25,\"pitch\":-5},{\"note\":467.5,\"pitch\":-5},{\"note\":468.5,\"pitch\":7},{\"note\":469,\"pitch\":2},{\"note\":469.5,\"pitch\":0},{\"note\":470,\"pitch\":-2},{\"note\":470.5,\"pitch\":0},{\"note\":471,\"pitch\":2},{\"note\":471.5,\"pitch\":7},{\"note\":472,\"pitch\":2},{\"note\":472.5,\"pitch\":0},{\"note\":473,\"pitch\":-2},{\"note\":473.5,\"pitch\":0},{\"note\":474,\"pitch\":-5},{\"note\":475,\"pitch\":-2},{\"note\":476,\"pitch\":2},{\"note\":477,\"pitch\":3},{\"note\":478,\"pitch\":7},{\"note\":479,\"pitch\":10},{\"note\":480,\"pitch\":10},{\"note\":480.75,\"pitch\":7},{\"note\":481,\"pitch\":7},{\"note\":481.5,\"pitch\":3},{\"note\":482.25,\"pitch\":3},{\"note\":482.5,\"pitch\":3},{\"note\":483,\"pitch\":7},{\"note\":483.75,\"pitch\":3},{\"note\":484,\"pitch\":3},{\"note\":484.5,\"pitch\":9},{\"note\":485.25,\"pitch\":9},{\"note\":485.5,\"pitch\":9},{\"note\":486,\"pitch\":-5},{\"note\":486.6667,\"pitch\":-3},{\"note\":487.3333,\"pitch\":-2},{\"note\":488,\"pitch\":2},{\"note\":488.6667,\"pitch\":3},{\"note\":489.3333,\"pitch\":7},{\"note\":490,\"pitch\":10},{\"note\":491,\"pitch\":14},{\"note\":492,\"pitch\":7},{\"note\":492,\"pitch\":15},{\"note\":492.75,\"pitch\":7},{\"note\":492.75,\"pitch\":15},{\"note\":493,\"pitch\":7},{\"note\":493,\"pitch\":15},{\"note\":493.5,\"pitch\":7},{\"note\":493.5,\"pitch\":15},{\"note\":494.25,\"pitch\":7},{\"note\":494.25,\"pitch\":15},{\"note\":494.5,\"pitch\":7},{\"note\":494.5,\"pitch\":15},{\"note\":495,\"pitch\":7},{\"note\":495,\"pitch\":15},{\"note\":495.75,\"pitch\":7},{\"note\":495.75,\"pitch\":15},{\"note\":496,\"pitch\":7},{\"note\":496,\"pitch\":15},{\"note\":498,\"pitch\":14},{\"note\":504,\"pitch\":14}]},\"P26\":{\"id\":\"P26\",\"name\":\"Solo Viola\",\"measureCount\":119,\"notes\":[{\"note\":18,\"words\":\"(Recording Session Option)\"},{\"note\":18,\"words\":\"(cue-51)\"},{\"note\":18,\"pitch\":0},{\"note\":18,\"pitch\":-5},{\"note\":24,\"pitch\":0},{\"note\":24,\"pitch\":-5},{\"note\":30,\"pitch\":-5},{\"note\":30,\"pitch\":0},{\"note\":36,\"pitch\":0},{\"note\":36,\"pitch\":-5},{\"note\":42,\"pitch\":-5},{\"note\":42,\"pitch\":0},{\"note\":48,\"pitch\":-5},{\"note\":48,\"pitch\":0},{\"note\":54,\"pitch\":-5},{\"note\":54,\"pitch\":0},{\"note\":60,\"pitch\":0},{\"note\":60,\"pitch\":-5},{\"note\":456,\"words\":\"(cue-48)\"},{\"note\":456,\"pitch\":-2},{\"note\":456.5,\"pitch\":2},{\"note\":457,\"pitch\":-2},{\"note\":457.5,\"pitch\":-3},{\"note\":458,\"pitch\":-5},{\"note\":458.5,\"pitch\":-3},{\"note\":459,\"pitch\":-2},{\"note\":459.5,\"pitch\":2},{\"note\":460,\"pitch\":-2},{\"note\":460.5,\"pitch\":-3},{\"note\":461,\"pitch\":-5},{\"note\":461.5,\"pitch\":-3},{\"note\":462,\"pitch\":-2},{\"note\":462.5,\"pitch\":3},{\"note\":463,\"pitch\":-2},{\"note\":463.5,\"pitch\":-3},{\"note\":464,\"pitch\":-5},{\"note\":464.5,\"pitch\":-3},{\"note\":465,\"pitch\":-2},{\"note\":465.5,\"pitch\":3},{\"note\":466,\"pitch\":-2},{\"note\":466.5,\"pitch\":-3},{\"note\":467,\"pitch\":-5},{\"note\":467.5,\"pitch\":-3},{\"note\":468,\"pitch\":-5},{\"note\":474,\"pitch\":-9},{\"note\":475,\"pitch\":-5},{\"note\":476,\"pitch\":-3},{\"note\":477,\"pitch\":-2},{\"note\":478,\"pitch\":2},{\"note\":479,\"pitch\":3},{\"note\":480,\"pitch\":7},{\"note\":480.75,\"pitch\":3},{\"note\":481,\"pitch\":3},{\"note\":481.5,\"pitch\":2},{\"note\":482.25,\"pitch\":-2},{\"note\":482.5,\"pitch\":-2},{\"note\":483,\"pitch\":-5},{\"note\":483.75,\"pitch\":-2},{\"note\":484,\"pitch\":-2},{\"note\":484.5,\"pitch\":2},{\"note\":485.25,\"pitch\":2},{\"note\":485.5,\"pitch\":2},{\"note\":486,\"pitch\":-10},{\"note\":486.6667,\"pitch\":-9},{\"note\":487.3333,\"pitch\":-5},{\"note\":488,\"pitch\":-3},{\"note\":488.6667,\"pitch\":-2},{\"note\":489.3333,\"pitch\":2},{\"note\":490,\"pitch\":3},{\"note\":491,\"pitch\":10},{\"note\":492,\"pitch\":2},{\"note\":492.75,\"pitch\":2},{\"note\":493,\"pitch\":2},{\"note\":493.5,\"pitch\":2},{\"note\":494.25,\"pitch\":2},{\"note\":494.5,\"pitch\":2},{\"note\":495,\"pitch\":2},{\"note\":495.75,\"pitch\":2},{\"note\":496,\"pitch\":2},{\"note\":498,\"pitch\":7},{\"note\":504,\"pitch\":7}]},\"P27\":{\"id\":\"P27\",\"name\":\"Solo Cello\",\"measureCount\":119,\"notes\":[{\"note\":456,\"words\":\"(cue-48)\"},{\"note\":456,\"pitch\":-29},{\"note\":458,\"pitch\":-17},{\"note\":459,\"pitch\":-17},{\"note\":460,\"pitch\":-29},{\"note\":461,\"pitch\":-22},{\"note\":462,\"pitch\":-21},{\"note\":462.75,\"pitch\":-26},{\"note\":463,\"pitch\":-26},{\"note\":463.5,\"pitch\":-17},{\"note\":464.25,\"pitch\":-21},{\"note\":464.5,\"pitch\":-21},{\"note\":465,\"pitch\":-14},{\"note\":465.75,\"pitch\":-17},{\"note\":466,\"pitch\":-17},{\"note\":466.5,\"pitch\":-9},{\"note\":467,\"pitch\":-14},{\"note\":467.5,\"pitch\":-15},{\"note\":468,\"pitch\":-14},{\"note\":468.5,\"pitch\":-10},{\"note\":469,\"pitch\":-14},{\"note\":469.5,\"pitch\":-15},{\"note\":470,\"pitch\":-17},{\"note\":470.5,\"pitch\":-15},{\"note\":471,\"pitch\":-14},{\"note\":471.5,\"pitch\":-10},{\"note\":472,\"pitch\":-14},{\"note\":472.5,\"pitch\":-15},{\"note\":473,\"pitch\":-17},{\"note\":473.5,\"pitch\":-15},{\"note\":474,\"pitch\":-14},{\"note\":474.5,\"pitch\":-9},{\"note\":475,\"pitch\":-14},{\"note\":475.5,\"pitch\":-15},{\"note\":476,\"pitch\":-17},{\"note\":476.5,\"pitch\":-15},{\"note\":477,\"pitch\":-14},{\"note\":477.5,\"pitch\":-9},{\"note\":478,\"pitch\":-14},{\"note\":478.5,\"pitch\":-15},{\"note\":479,\"pitch\":-17},{\"note\":479.5,\"pitch\":-15},{\"note\":480,\"pitch\":-14},{\"note\":481,\"pitch\":-17},{\"note\":482,\"pitch\":-10},{\"note\":483,\"pitch\":-9},{\"note\":484,\"pitch\":-14},{\"note\":485,\"pitch\":-17},{\"note\":486,\"pitch\":-33},{\"note\":486,\"pitch\":-26},{\"note\":486,\"words\":\"(cue)\"},{\"note\":486.6667,\"pitch\":-33},{\"note\":486.6667,\"pitch\":-26},{\"note\":487.3333,\"pitch\":-26},{\"note\":487.3333,\"pitch\":-17},{\"note\":488,\"pitch\":-26},{\"note\":488,\"pitch\":-17},{\"note\":488.6667,\"pitch\":-17},{\"note\":488.6667,\"pitch\":-10},{\"note\":489.3333,\"pitch\":-17},{\"note\":489.3333,\"pitch\":-10},{\"note\":490,\"pitch\":-5},{\"note\":491,\"pitch\":-2},{\"note\":492,\"pitch\":-2},{\"note\":492.75,\"pitch\":-2},{\"note\":493,\"pitch\":-2},{\"note\":493.5,\"pitch\":-9},{\"note\":494.25,\"pitch\":-9},{\"note\":494.5,\"pitch\":-9},{\"note\":495,\"pitch\":-2},{\"note\":495.75,\"pitch\":-2},{\"note\":496,\"pitch\":-2},{\"note\":499,\"pitch\":-5},{\"note\":501,\"pitch\":-2},{\"note\":504,\"pitch\":-2}]},\"P28\":{\"id\":\"P28\",\"name\":\"Violin I\",\"measureCount\":119,\"notes\":[{\"note\":12,\"words\":\"(cue-18)\"},{\"note\":12,\"pitch\":2},{\"note\":12,\"pitch\":7},{\"note\":18,\"pitch\":7},{\"note\":18,\"pitch\":2},{\"note\":24,\"pitch\":2},{\"note\":24,\"pitch\":7},{\"note\":30,\"pitch\":10},{\"note\":30.2708,\"pitch\":14},{\"note\":30.5417,\"pitch\":10},{\"note\":30.8125,\"pitch\":9},{\"note\":31.0833,\"pitch\":7},{\"note\":31.3542,\"pitch\":2},{\"note\":31.625,\"pitch\":-2},{\"note\":31.8958,\"pitch\":2},{\"note\":32.1667,\"pitch\":7},{\"note\":32.4375,\"pitch\":9},{\"note\":32.7083,\"pitch\":10},{\"note\":32.9792,\"pitch\":10},{\"note\":33.2667,\"pitch\":14},{\"note\":33.5542,\"pitch\":10},{\"note\":33.8417,\"pitch\":9},{\"note\":34.1292,\"pitch\":7},{\"note\":34.4167,\"pitch\":2},{\"note\":34.7042,\"pitch\":-2},{\"note\":36,\"pitch\":21},{\"note\":36.25,\"pitch\":19},{\"note\":36.5,\"pitch\":14},{\"note\":36.75,\"pitch\":10},{\"note\":37,\"pitch\":9},{\"note\":37.25,\"pitch\":7},{\"note\":37.5,\"pitch\":2},{\"note\":37.75,\"pitch\":7},{\"note\":38,\"pitch\":9},{\"note\":38.25,\"pitch\":10},{\"note\":38.5,\"pitch\":14},{\"note\":38.75,\"pitch\":19},{\"note\":39,\"pitch\":21},{\"note\":39.25,\"pitch\":19},{\"note\":39.5,\"pitch\":14},{\"note\":39.75,\"pitch\":10},{\"note\":40,\"pitch\":9},{\"note\":40.25,\"pitch\":7},{\"note\":40.5,\"pitch\":2},{\"note\":40.75,\"pitch\":7},{\"note\":41,\"pitch\":9},{\"note\":41.25,\"pitch\":10},{\"note\":41.5,\"pitch\":14},{\"note\":41.75,\"pitch\":19},{\"note\":42,\"pitch\":21},{\"note\":42.25,\"pitch\":19},{\"note\":42.5,\"pitch\":14},{\"note\":42.75,\"pitch\":10},{\"note\":43,\"pitch\":9},{\"note\":43.25,\"pitch\":7},{\"note\":43.5,\"pitch\":2},{\"note\":43.75,\"pitch\":7},{\"note\":44,\"pitch\":9},{\"note\":44.25,\"pitch\":10},{\"note\":44.5,\"pitch\":14},{\"note\":44.75,\"pitch\":19},{\"note\":45,\"pitch\":21},{\"note\":45.25,\"pitch\":19},{\"note\":45.5,\"pitch\":14},{\"note\":45.75,\"pitch\":10},{\"note\":46,\"pitch\":9},{\"note\":46.25,\"pitch\":7},{\"note\":46.5,\"pitch\":2},{\"note\":46.75,\"pitch\":7},{\"note\":47,\"pitch\":9},{\"note\":47.25,\"pitch\":10},{\"note\":47.5,\"pitch\":14},{\"note\":47.75,\"pitch\":19},{\"note\":48,\"pitch\":21},{\"note\":48.25,\"pitch\":19},{\"note\":48.5,\"pitch\":15},{\"note\":48.75,\"pitch\":10},{\"note\":49,\"pitch\":9},{\"note\":49.25,\"pitch\":7},{\"note\":49.5,\"pitch\":3},{\"note\":49.75,\"pitch\":7},{\"note\":50,\"pitch\":9},{\"note\":50.25,\"pitch\":10},{\"note\":50.5,\"pitch\":15},{\"note\":50.75,\"pitch\":19},{\"note\":51,\"pitch\":21},{\"note\":51.25,\"pitch\":19},{\"note\":51.5,\"pitch\":15},{\"note\":51.75,\"pitch\":10},{\"note\":52,\"pitch\":9},{\"note\":52.25,\"pitch\":7},{\"note\":52.5,\"pitch\":3},{\"note\":52.75,\"pitch\":7},{\"note\":53,\"pitch\":9},{\"note\":53.25,\"pitch\":10},{\"note\":53.5,\"pitch\":15},{\"note\":53.75,\"pitch\":19},{\"note\":54,\"pitch\":21},{\"note\":54.25,\"pitch\":19},{\"note\":54.5,\"pitch\":14},{\"note\":54.75,\"pitch\":10},{\"note\":55,\"pitch\":9},{\"note\":55.25,\"pitch\":7},{\"note\":55.5,\"pitch\":2},{\"note\":55.75,\"pitch\":7},{\"note\":56,\"pitch\":9},{\"note\":56.25,\"pitch\":10},{\"note\":56.5,\"pitch\":14},{\"note\":56.75,\"pitch\":19},{\"note\":57,\"pitch\":21},{\"note\":57.25,\"pitch\":19},{\"note\":57.5,\"pitch\":14},{\"note\":57.75,\"pitch\":10},{\"note\":58,\"pitch\":9},{\"note\":58.25,\"pitch\":7},{\"note\":58.5,\"pitch\":2},{\"note\":58.75,\"pitch\":7},{\"note\":59,\"pitch\":9},{\"note\":59.25,\"pitch\":10},{\"note\":59.5,\"pitch\":14},{\"note\":59.75,\"pitch\":19},{\"note\":60,\"pitch\":21},{\"note\":60.3333,\"pitch\":19},{\"note\":60.6667,\"pitch\":14},{\"note\":61,\"pitch\":10},{\"note\":61.3333,\"pitch\":9},{\"note\":61.6667,\"pitch\":7},{\"note\":62,\"pitch\":10},{\"note\":102,\"pitch\":14},{\"note\":108,\"pitch\":14},{\"note\":114,\"pitch\":15},{\"note\":127,\"pitch\":0},{\"note\":127,\"pitch\":-5},{\"note\":129,\"pitch\":0},{\"note\":129,\"pitch\":-5},{\"note\":132,\"pitch\":3},{\"note\":132,\"pitch\":-2},{\"note\":138,\"pitch\":3},{\"note\":138,\"pitch\":-2},{\"note\":144,\"pitch\":-2},{\"note\":144,\"pitch\":-5},{\"note\":144,\"words\":\"Div.\"},{\"note\":147,\"pitch\":-5},{\"note\":147,\"pitch\":0},{\"note\":150,\"pitch\":-2},{\"note\":150,\"pitch\":-5},{\"note\":156,\"pitch\":-2},{\"note\":156,\"pitch\":-5},{\"note\":156,\"words\":\"(cue)\"},{\"note\":159,\"pitch\":-2},{\"note\":159,\"pitch\":-5},{\"note\":162,\"pitch\":-7},{\"note\":162,\"pitch\":-2},{\"note\":165,\"pitch\":-7},{\"note\":165,\"pitch\":-3},{\"note\":168,\"pitch\":7},{\"note\":168,\"pitch\":3},{\"note\":171,\"pitch\":7},{\"note\":171,\"pitch\":2},{\"note\":174,\"pitch\":5},{\"note\":174,\"pitch\":2},{\"note\":177,\"pitch\":5},{\"note\":177,\"pitch\":0},{\"note\":180,\"pitch\":-2},{\"note\":180,\"pitch\":3},{\"note\":183,\"pitch\":-2},{\"note\":183,\"pitch\":2},{\"note\":186,\"pitch\":5},{\"note\":186,\"pitch\":0},{\"note\":192,\"pitch\":15},{\"note\":193.5,\"pitch\":14},{\"note\":195,\"pitch\":14},{\"note\":196.5,\"pitch\":12},{\"note\":198,\"pitch\":12},{\"note\":199.5,\"pitch\":10},{\"note\":201,\"pitch\":10},{\"note\":202.5,\"pitch\":14},{\"note\":204,\"pitch\":15},{\"note\":205.5,\"pitch\":14},{\"note\":207,\"pitch\":14},{\"note\":208.5,\"pitch\":10},{\"note\":210,\"pitch\":17},{\"note\":211.5,\"pitch\":14},{\"note\":213,\"pitch\":12},{\"note\":216,\"pitch\":15},{\"note\":217.5,\"pitch\":14},{\"note\":219,\"pitch\":14},{\"note\":220.5,\"pitch\":12},{\"note\":222,\"pitch\":12},{\"note\":223.5,\"pitch\":10},{\"note\":225,\"pitch\":10},{\"note\":226.5,\"pitch\":17},{\"note\":228,\"pitch\":19},{\"note\":229.5,\"pitch\":17},{\"note\":231,\"pitch\":17},{\"note\":232.5,\"pitch\":14},{\"note\":234,\"pitch\":17},{\"note\":235.5,\"pitch\":12},{\"note\":237,\"pitch\":14},{\"note\":240,\"pitch\":14},{\"note\":276,\"words\":\"(cue-12)\"},{\"note\":276,\"pitch\":19},{\"note\":279,\"pitch\":22},{\"note\":281,\"pitch\":15},{\"note\":282,\"pitch\":14},{\"note\":297,\"pitch\":19},{\"note\":300,\"pitch\":22},{\"note\":302,\"pitch\":15},{\"note\":303,\"pitch\":14},{\"note\":306,\"pitch\":14},{\"note\":330,\"pitch\":-5},{\"note\":330,\"words\":\"(off the string)\"},{\"note\":330,\"words\":\"(cue-96)\"},{\"note\":330.5,\"pitch\":-5},{\"note\":331,\"pitch\":-5},{\"note\":331.5,\"pitch\":-5},{\"note\":332,\"pitch\":-5},{\"note\":332.5,\"pitch\":-5},{\"note\":333,\"pitch\":-5},{\"note\":333.5,\"pitch\":-5},{\"note\":334,\"pitch\":-5},{\"note\":334.5,\"pitch\":-5},{\"note\":335,\"pitch\":-5},{\"note\":335.5,\"pitch\":-5},{\"note\":336,\"pitch\":-5},{\"note\":336.5,\"pitch\":-5},{\"note\":337,\"pitch\":-5},{\"note\":337.5,\"pitch\":-5},{\"note\":338,\"pitch\":-5},{\"note\":338.5,\"pitch\":-5},{\"note\":339,\"pitch\":-5},{\"note\":339.5,\"pitch\":-5},{\"note\":340,\"pitch\":-5},{\"note\":340.5,\"pitch\":-5},{\"note\":341,\"pitch\":-5},{\"note\":341.5,\"pitch\":-5},{\"note\":342,\"pitch\":-5},{\"note\":342.5,\"pitch\":-5},{\"note\":343,\"pitch\":-5},{\"note\":343.5,\"pitch\":-5},{\"note\":344,\"pitch\":-5},{\"note\":344.5,\"pitch\":-5},{\"note\":345,\"pitch\":-6},{\"note\":345,\"pitch\":-3},{\"note\":345.5,\"pitch\":-6},{\"note\":345.5,\"pitch\":-3},{\"note\":346,\"pitch\":-6},{\"note\":346,\"pitch\":-3},{\"note\":346.5,\"pitch\":-6},{\"note\":346.5,\"pitch\":-3},{\"note\":347,\"pitch\":-6},{\"note\":347,\"pitch\":-3},{\"note\":347.5,\"pitch\":-3},{\"note\":347.5,\"pitch\":-6},{\"note\":348,\"pitch\":-5},{\"note\":348,\"pitch\":-2},{\"note\":348.5,\"pitch\":-5},{\"note\":348.5,\"pitch\":-2},{\"note\":349,\"pitch\":-2},{\"note\":349,\"pitch\":-5},{\"note\":349.5,\"pitch\":-2},{\"note\":349.5,\"pitch\":-5},{\"note\":350,\"pitch\":-2},{\"note\":350,\"pitch\":-5},{\"note\":350.5,\"pitch\":-2},{\"note\":350.5,\"pitch\":-5},{\"note\":351,\"pitch\":-2},{\"note\":351,\"pitch\":-5},{\"note\":351.5,\"pitch\":-5},{\"note\":351.5,\"pitch\":-2},{\"note\":352,\"pitch\":0},{\"note\":352,\"pitch\":-3},{\"note\":352.5,\"pitch\":0},{\"note\":352.5,\"pitch\":-3},{\"note\":353,\"pitch\":-3},{\"note\":353,\"pitch\":0},{\"note\":353.5,\"pitch\":0},{\"note\":353.5,\"pitch\":-3},{\"note\":354,\"pitch\":-2},{\"note\":354,\"pitch\":2},{\"note\":354.5,\"pitch\":-2},{\"note\":354.5,\"pitch\":2},{\"note\":355,\"pitch\":-2},{\"note\":355,\"pitch\":2},{\"note\":355.5,\"pitch\":-2},{\"note\":355.5,\"pitch\":2},{\"note\":356,\"pitch\":-2},{\"note\":356,\"pitch\":2},{\"note\":356.5,\"pitch\":-2},{\"note\":356.5,\"pitch\":2},{\"note\":357,\"pitch\":2},{\"note\":357,\"pitch\":-2},{\"note\":357.5,\"pitch\":-2},{\"note\":357.5,\"pitch\":2},{\"note\":358,\"pitch\":-2},{\"note\":358,\"pitch\":2},{\"note\":358.5,\"pitch\":-2},{\"note\":358.5,\"pitch\":2},{\"note\":359,\"pitch\":-2},{\"note\":359,\"pitch\":2},{\"note\":359.5,\"pitch\":-2},{\"note\":359.5,\"pitch\":2},{\"note\":360,\"pitch\":-3},{\"note\":360,\"pitch\":0},{\"note\":360.5,\"pitch\":-3},{\"note\":360.5,\"pitch\":0},{\"note\":361,\"pitch\":-3},{\"note\":361,\"pitch\":0},{\"note\":361.5,\"pitch\":-3},{\"note\":361.5,\"pitch\":0},{\"note\":362,\"pitch\":-3},{\"note\":362,\"pitch\":0},{\"note\":362.5,\"pitch\":0},{\"note\":362.5,\"pitch\":-3},{\"note\":363,\"pitch\":0},{\"note\":363,\"pitch\":-3},{\"note\":363.5,\"pitch\":0},{\"note\":363.5,\"pitch\":-3},{\"note\":364,\"pitch\":-3},{\"note\":364,\"pitch\":0},{\"note\":364.5,\"pitch\":-3},{\"note\":364.5,\"pitch\":0},{\"note\":365,\"pitch\":-3},{\"note\":365,\"pitch\":0},{\"note\":365.5,\"pitch\":-3},{\"note\":365.5,\"pitch\":0},{\"note\":366,\"pitch\":7},{\"note\":369,\"pitch\":5},{\"note\":372,\"pitch\":5},{\"note\":375,\"pitch\":2},{\"note\":376.5,\"pitch\":5},{\"note\":378,\"pitch\":7},{\"note\":381,\"pitch\":5},{\"note\":384,\"pitch\":2},{\"note\":385,\"pitch\":5},{\"note\":386,\"pitch\":10},{\"note\":387,\"pitch\":9},{\"note\":388,\"pitch\":7},{\"note\":389,\"pitch\":5},{\"note\":390,\"pitch\":3},{\"note\":393,\"pitch\":5},{\"note\":396,\"pitch\":7},{\"note\":402,\"pitch\":12},{\"note\":405,\"pitch\":14},{\"note\":408,\"pitch\":15},{\"note\":414,\"pitch\":14},{\"note\":415.5,\"pitch\":10},{\"note\":416,\"pitch\":7},{\"note\":417,\"pitch\":15},{\"note\":420,\"pitch\":19},{\"note\":426,\"pitch\":22},{\"note\":432,\"pitch\":22},{\"note\":444,\"pitch\":-2},{\"note\":444,\"words\":\"(cue)\"},{\"note\":444.5,\"pitch\":2},{\"note\":445,\"pitch\":-2},{\"note\":445.5,\"pitch\":-3},{\"note\":446,\"pitch\":-5},{\"note\":446.5,\"pitch\":-3},{\"note\":447,\"pitch\":-2},{\"note\":447.5,\"pitch\":2},{\"note\":448,\"pitch\":-2},{\"note\":448.5,\"pitch\":-3},{\"note\":449,\"pitch\":-5},{\"note\":449.5,\"pitch\":-3},{\"note\":504,\"pitch\":-5},{\"note\":507,\"pitch\":-5},{\"note\":509,\"pitch\":-10},{\"note\":510,\"pitch\":-2},{\"note\":529,\"pitch\":-2},{\"note\":529,\"pitch\":3},{\"note\":529,\"words\":\"(cue-15)\"},{\"note\":531,\"pitch\":-2},{\"note\":531,\"pitch\":3},{\"note\":535,\"pitch\":10},{\"note\":535,\"pitch\":15},{\"note\":537,\"pitch\":10},{\"note\":537,\"pitch\":15},{\"note\":558,\"pitch\":2},{\"note\":561,\"pitch\":-2},{\"note\":564,\"pitch\":7},{\"note\":567,\"pitch\":3},{\"note\":570,\"pitch\":-2},{\"note\":570.5,\"pitch\":2},{\"note\":571,\"pitch\":-2},{\"note\":571.5,\"pitch\":-3},{\"note\":572,\"pitch\":-5},{\"note\":572.5,\"pitch\":-3},{\"note\":573,\"pitch\":-2},{\"note\":573.5,\"pitch\":2},{\"note\":574,\"pitch\":-2},{\"note\":574.5,\"pitch\":-3},{\"note\":575,\"pitch\":-5},{\"note\":575.5,\"pitch\":-3},{\"note\":576,\"pitch\":-2},{\"note\":576.5,\"pitch\":3},{\"note\":577,\"pitch\":-2},{\"note\":577.5,\"pitch\":-3},{\"note\":578,\"pitch\":-5},{\"note\":578.5,\"pitch\":-3},{\"note\":579,\"pitch\":-2},{\"note\":579.5,\"pitch\":3},{\"note\":580,\"pitch\":-2},{\"note\":580.5,\"pitch\":-3},{\"note\":581,\"pitch\":-5},{\"note\":581.5,\"pitch\":-3},{\"note\":582,\"pitch\":10},{\"note\":582.5,\"pitch\":14},{\"note\":583,\"pitch\":10},{\"note\":583.5,\"pitch\":9},{\"note\":584,\"pitch\":7},{\"note\":584.5,\"pitch\":9},{\"note\":585,\"pitch\":10},{\"note\":585.5,\"pitch\":14},{\"note\":586,\"pitch\":10},{\"note\":586.5,\"pitch\":9},{\"note\":587,\"pitch\":7},{\"note\":587.5,\"pitch\":9},{\"note\":588,\"pitch\":10},{\"note\":588.5,\"pitch\":15},{\"note\":589,\"pitch\":10},{\"note\":589.5,\"pitch\":9},{\"note\":590,\"pitch\":7},{\"note\":590.5,\"pitch\":9},{\"note\":591,\"pitch\":10},{\"note\":591.5,\"pitch\":15},{\"note\":592,\"pitch\":10},{\"note\":592.5,\"pitch\":9},{\"note\":593,\"pitch\":7},{\"note\":593.5,\"pitch\":9},{\"note\":594,\"pitch\":10},{\"note\":595.5,\"pitch\":14},{\"note\":597,\"pitch\":15},{\"note\":598.5,\"pitch\":14},{\"note\":600,\"pitch\":14},{\"note\":606,\"words\":\"(cue)\"},{\"note\":606,\"pitch\":10},{\"note\":607.5,\"pitch\":14},{\"note\":609,\"pitch\":15},{\"note\":610.5,\"pitch\":14},{\"note\":612,\"pitch\":14},{\"note\":613.5,\"pitch\":12},{\"note\":615,\"pitch\":12},{\"note\":618,\"pitch\":15},{\"note\":619.5,\"pitch\":14},{\"note\":621,\"pitch\":14},{\"note\":622.5,\"pitch\":10},{\"note\":624,\"pitch\":14},{\"note\":625.5,\"pitch\":17},{\"note\":627,\"pitch\":19},{\"note\":630,\"pitch\":17},{\"note\":631.5,\"pitch\":14},{\"note\":633,\"pitch\":14},{\"note\":634.5,\"pitch\":12},{\"note\":636,\"pitch\":12},{\"note\":642,\"pitch\":15},{\"note\":643.5,\"pitch\":14},{\"note\":645,\"pitch\":14},{\"note\":646.5,\"pitch\":12},{\"note\":648,\"pitch\":12},{\"note\":649.5,\"pitch\":10},{\"note\":651,\"pitch\":10},{\"note\":652.5,\"pitch\":14},{\"note\":654,\"pitch\":15},{\"note\":655.5,\"pitch\":14},{\"note\":657,\"pitch\":14},{\"note\":658.5,\"pitch\":10},{\"note\":660,\"pitch\":17},{\"note\":661.5,\"pitch\":14},{\"note\":663,\"pitch\":12},{\"note\":666,\"pitch\":15},{\"note\":667.5,\"pitch\":14},{\"note\":669,\"pitch\":14},{\"note\":670.5,\"pitch\":10},{\"note\":672,\"pitch\":14},{\"note\":673.5,\"pitch\":12},{\"note\":675,\"pitch\":12},{\"note\":676.5,\"pitch\":17},{\"note\":678,\"pitch\":19},{\"note\":679.5,\"pitch\":17},{\"note\":681,\"pitch\":17},{\"note\":682.5,\"pitch\":14},{\"note\":684,\"pitch\":17},{\"note\":685.5,\"pitch\":12},{\"note\":687,\"pitch\":14},{\"note\":690,\"pitch\":14},{\"note\":691.5,\"pitch\":10},{\"note\":693,\"pitch\":9},{\"note\":694.5,\"pitch\":10},{\"note\":696,\"pitch\":15},{\"note\":697.5,\"pitch\":9},{\"note\":699,\"pitch\":10},{\"note\":702,\"pitch\":14},{\"note\":703.5,\"pitch\":10},{\"note\":705,\"pitch\":15},{\"note\":706.5,\"pitch\":19},{\"note\":708,\"pitch\":22},{\"note\":711,\"pitch\":19},{\"note\":712,\"pitch\":24}]},\"P29\":{\"id\":\"P29\",\"name\":\"Violin 1 DIV\",\"measureCount\":119,\"notes\":[{\"note\":33,\"pitch\":-5},{\"note\":33.25,\"pitch\":-3},{\"note\":33.5,\"pitch\":-2},{\"note\":33.75,\"pitch\":2},{\"note\":34,\"pitch\":7},{\"note\":34.25,\"pitch\":9},{\"note\":34.5,\"pitch\":10},{\"note\":34.75,\"pitch\":9},{\"note\":35,\"pitch\":7},{\"note\":35.25,\"pitch\":2},{\"note\":35.5,\"pitch\":-2},{\"note\":35.75,\"pitch\":-3},{\"note\":36,\"pitch\":-5},{\"note\":36.25,\"pitch\":-3},{\"note\":36.5,\"pitch\":-2},{\"note\":36.75,\"pitch\":2},{\"note\":37,\"pitch\":7},{\"note\":37.25,\"pitch\":9},{\"note\":37.5,\"pitch\":10},{\"note\":37.75,\"pitch\":9},{\"note\":38,\"pitch\":7},{\"note\":38.25,\"pitch\":2},{\"note\":38.5,\"pitch\":-2},{\"note\":38.75,\"pitch\":-3},{\"note\":39,\"pitch\":-5},{\"note\":39.25,\"pitch\":-3},{\"note\":39.5,\"pitch\":-2},{\"note\":39.75,\"pitch\":2},{\"note\":40,\"pitch\":7},{\"note\":40.25,\"pitch\":9},{\"note\":40.5,\"pitch\":10},{\"note\":40.75,\"pitch\":9},{\"note\":41,\"pitch\":7},{\"note\":41.25,\"pitch\":2},{\"note\":41.5,\"pitch\":-2},{\"note\":41.75,\"pitch\":-3},{\"note\":42,\"pitch\":-5},{\"note\":42.25,\"pitch\":-3},{\"note\":42.5,\"pitch\":-2},{\"note\":42.75,\"pitch\":2},{\"note\":43,\"pitch\":7},{\"note\":43.25,\"pitch\":9},{\"note\":43.5,\"pitch\":10},{\"note\":43.75,\"pitch\":9},{\"note\":44,\"pitch\":7},{\"note\":44.25,\"pitch\":2},{\"note\":44.5,\"pitch\":-2},{\"note\":44.75,\"pitch\":-3},{\"note\":45,\"pitch\":-5},{\"note\":45.25,\"pitch\":-3},{\"note\":45.5,\"pitch\":-2},{\"note\":45.75,\"pitch\":2},{\"note\":46,\"pitch\":7},{\"note\":46.25,\"pitch\":9},{\"note\":46.5,\"pitch\":10},{\"note\":46.75,\"pitch\":9},{\"note\":47,\"pitch\":7},{\"note\":47.25,\"pitch\":2},{\"note\":47.5,\"pitch\":-2},{\"note\":47.75,\"pitch\":-3},{\"note\":48,\"pitch\":-5},{\"note\":48.25,\"pitch\":-3},{\"note\":48.5,\"pitch\":-2},{\"note\":48.75,\"pitch\":3},{\"note\":49,\"pitch\":7},{\"note\":49.25,\"pitch\":9},{\"note\":49.5,\"pitch\":10},{\"note\":49.75,\"pitch\":9},{\"note\":50,\"pitch\":7},{\"note\":50.25,\"pitch\":3},{\"note\":50.5,\"pitch\":-2},{\"note\":50.75,\"pitch\":-3},{\"note\":51,\"pitch\":-5},{\"note\":51.25,\"pitch\":-3},{\"note\":51.5,\"pitch\":-2},{\"note\":51.75,\"pitch\":3},{\"note\":52,\"pitch\":7},{\"note\":52.25,\"pitch\":9},{\"note\":52.5,\"pitch\":10},{\"note\":52.75,\"pitch\":9},{\"note\":53,\"pitch\":7},{\"note\":53.25,\"pitch\":3},{\"note\":53.5,\"pitch\":-2},{\"note\":53.75,\"pitch\":-3},{\"note\":54,\"pitch\":10},{\"note\":54.2708,\"pitch\":14},{\"note\":54.5417,\"pitch\":10},{\"note\":54.8125,\"pitch\":9},{\"note\":55.0833,\"pitch\":7},{\"note\":55.3542,\"pitch\":2},{\"note\":55.625,\"pitch\":-2},{\"note\":55.8958,\"pitch\":2},{\"note\":56.1667,\"pitch\":7},{\"note\":56.4375,\"pitch\":9},{\"note\":56.7083,\"pitch\":10},{\"note\":56.9792,\"pitch\":10},{\"note\":57.25,\"pitch\":14},{\"note\":57.5208,\"pitch\":10},{\"note\":57.7917,\"pitch\":9},{\"note\":58.0625,\"pitch\":7},{\"note\":58.3333,\"pitch\":2},{\"note\":58.6042,\"pitch\":-2},{\"note\":58.875,\"pitch\":2},{\"note\":59.1458,\"pitch\":7},{\"note\":59.4167,\"pitch\":9},{\"note\":59.6875,\"pitch\":10},{\"note\":60,\"pitch\":10},{\"note\":60.2708,\"pitch\":14},{\"note\":60.5417,\"pitch\":10},{\"note\":60.8125,\"pitch\":9},{\"note\":61.0833,\"pitch\":7},{\"note\":61.3542,\"pitch\":2},{\"note\":61.625,\"pitch\":-2},{\"note\":61.8958,\"pitch\":2},{\"note\":73,\"pitch\":0},{\"note\":73,\"pitch\":-5},{\"note\":75,\"pitch\":-5},{\"note\":75,\"pitch\":0},{\"note\":79,\"pitch\":12},{\"note\":79,\"pitch\":7},{\"note\":81,\"pitch\":12},{\"note\":81,\"pitch\":7},{\"note\":85,\"pitch\":3},{\"note\":85,\"pitch\":-2},{\"note\":87,\"pitch\":-2},{\"note\":87,\"pitch\":3},{\"note\":91,\"pitch\":15},{\"note\":91,\"pitch\":10},{\"note\":93,\"pitch\":10},{\"note\":93,\"pitch\":15},{\"note\":97,\"pitch\":7},{\"note\":97,\"pitch\":12},{\"note\":99,\"pitch\":7},{\"note\":99,\"pitch\":12},{\"note\":103,\"pitch\":3},{\"note\":103,\"pitch\":-2},{\"note\":105,\"pitch\":-2},{\"note\":105,\"pitch\":3},{\"note\":270,\"pitch\":15},{\"note\":270,\"pitch\":10},{\"note\":276,\"pitch\":15},{\"note\":276,\"pitch\":10},{\"note\":282,\"pitch\":15},{\"note\":282,\"pitch\":10},{\"note\":288,\"pitch\":8},{\"note\":288,\"pitch\":3},{\"note\":291,\"pitch\":2},{\"note\":291,\"pitch\":7},{\"note\":294,\"pitch\":7},{\"note\":294,\"pitch\":2},{\"note\":300,\"pitch\":12},{\"note\":300,\"pitch\":7},{\"note\":303,\"pitch\":10},{\"note\":303,\"pitch\":15},{\"note\":306,\"pitch\":10},{\"note\":306,\"pitch\":15},{\"note\":312,\"pitch\":10},{\"note\":312,\"pitch\":15},{\"note\":318,\"pitch\":10},{\"note\":318,\"pitch\":15},{\"note\":366,\"pitch\":0},{\"note\":366,\"pitch\":-5},{\"note\":366.5,\"pitch\":-5},{\"note\":366.5,\"pitch\":0},{\"note\":367,\"pitch\":-5},{\"note\":367,\"pitch\":0},{\"note\":367.5,\"pitch\":0},{\"note\":367.5,\"pitch\":-5},{\"note\":368,\"pitch\":-5},{\"note\":368,\"pitch\":0},{\"note\":368.5,\"pitch\":0},{\"note\":368.5,\"pitch\":-5},{\"note\":369,\"pitch\":-2},{\"note\":369,\"pitch\":-7},{\"note\":369.5,\"pitch\":-2},{\"note\":369.5,\"pitch\":-7},{\"note\":370,\"pitch\":-7},{\"note\":370,\"pitch\":-2},{\"note\":370.5,\"pitch\":-2},{\"note\":370.5,\"pitch\":-7},{\"note\":371,\"pitch\":-7},{\"note\":371,\"pitch\":-2},{\"note\":371.5,\"pitch\":-7},{\"note\":371.5,\"pitch\":-2},{\"note\":372,\"pitch\":-7},{\"note\":372,\"pitch\":-3},{\"note\":372.5,\"pitch\":-3},{\"note\":372.5,\"pitch\":-7},{\"note\":373,\"pitch\":-7},{\"note\":373,\"pitch\":-3},{\"note\":373.5,\"pitch\":-7},{\"note\":373.5,\"pitch\":-3},{\"note\":374,\"pitch\":-7},{\"note\":374,\"pitch\":-3},{\"note\":374.5,\"pitch\":-7},{\"note\":374.5,\"pitch\":-3},{\"note\":375,\"pitch\":-5},{\"note\":375,\"pitch\":-10},{\"note\":375.5,\"pitch\":-5},{\"note\":375.5,\"pitch\":-10},{\"note\":376,\"pitch\":-5},{\"note\":376,\"pitch\":-10},{\"note\":376.5,\"pitch\":-5},{\"note\":376.5,\"pitch\":-2},{\"note\":377,\"pitch\":-2},{\"note\":377,\"pitch\":-5},{\"note\":377.5,\"pitch\":-5},{\"note\":377.5,\"pitch\":-2},{\"note\":378,\"pitch\":-5},{\"note\":378,\"pitch\":-2},{\"note\":378.5,\"pitch\":-5},{\"note\":378.5,\"pitch\":-2},{\"note\":379,\"pitch\":-2},{\"note\":379,\"pitch\":-5},{\"note\":379.5,\"pitch\":-5},{\"note\":379.5,\"pitch\":-2},{\"note\":380,\"pitch\":-2},{\"note\":380,\"pitch\":-5},{\"note\":380.5,\"pitch\":-2},{\"note\":380.5,\"pitch\":-5},{\"note\":381,\"pitch\":-2},{\"note\":381,\"pitch\":-7},{\"note\":381.5,\"pitch\":-2},{\"note\":381.5,\"pitch\":-7},{\"note\":382,\"pitch\":-7},{\"note\":382,\"pitch\":-2},{\"note\":382.5,\"pitch\":-2},{\"note\":382.5,\"pitch\":-7},{\"note\":383,\"pitch\":-2},{\"note\":383,\"pitch\":-7},{\"note\":383.5,\"pitch\":-7},{\"note\":383.5,\"pitch\":-2},{\"note\":384,\"pitch\":-7},{\"note\":384,\"pitch\":-2},{\"note\":384.5,\"pitch\":-7},{\"note\":384.5,\"pitch\":-2},{\"note\":385,\"pitch\":-7},{\"note\":385,\"pitch\":-2},{\"note\":385.5,\"pitch\":-2},{\"note\":385.5,\"pitch\":-7},{\"note\":386,\"pitch\":-7},{\"note\":386,\"pitch\":-2},{\"note\":386.5,\"pitch\":-2},{\"note\":386.5,\"pitch\":-7},{\"note\":387,\"pitch\":-7},{\"note\":387,\"pitch\":-3},{\"note\":387.5,\"pitch\":-7},{\"note\":387.5,\"pitch\":-3},{\"note\":388,\"pitch\":-7},{\"note\":388,\"pitch\":-3},{\"note\":388.5,\"pitch\":-7},{\"note\":388.5,\"pitch\":-3},{\"note\":389,\"pitch\":-7},{\"note\":389,\"pitch\":-3},{\"note\":389.5,\"pitch\":-7},{\"note\":389.5,\"pitch\":-3},{\"note\":390,\"pitch\":-10},{\"note\":390.5,\"pitch\":-10},{\"note\":391,\"pitch\":-10},{\"note\":391.5,\"pitch\":-9},{\"note\":392,\"pitch\":-9},{\"note\":392.5,\"pitch\":-9},{\"note\":393,\"pitch\":-7},{\"note\":393.5,\"pitch\":-7},{\"note\":394,\"pitch\":-7},{\"note\":394.5,\"pitch\":-7},{\"note\":395,\"pitch\":-7},{\"note\":395.5,\"pitch\":-7},{\"note\":396,\"pitch\":-5},{\"note\":396.5,\"pitch\":-5},{\"note\":397,\"pitch\":-5},{\"note\":397.5,\"pitch\":-5},{\"note\":398,\"pitch\":-5},{\"note\":398.5,\"pitch\":-5},{\"note\":399,\"pitch\":-5},{\"note\":399.5,\"pitch\":-5},{\"note\":400,\"pitch\":-5},{\"note\":400.5,\"pitch\":-5},{\"note\":401,\"pitch\":-5},{\"note\":401.5,\"pitch\":-5},{\"note\":402,\"pitch\":-5},{\"note\":402.5,\"pitch\":-5},{\"note\":403,\"pitch\":-5},{\"note\":403.5,\"pitch\":-5},{\"note\":404,\"pitch\":-5},{\"note\":404.5,\"pitch\":-5},{\"note\":405,\"pitch\":-2},{\"note\":405.5,\"pitch\":-2},{\"note\":406,\"pitch\":-2},{\"note\":406.5,\"pitch\":-2},{\"note\":407,\"pitch\":-2},{\"note\":407.5,\"pitch\":-2},{\"note\":408,\"pitch\":-2},{\"note\":408.5,\"pitch\":-2},{\"note\":409,\"pitch\":-2},{\"note\":409.5,\"pitch\":-2},{\"note\":410,\"pitch\":-2},{\"note\":410.5,\"pitch\":-2},{\"note\":411,\"pitch\":-2},{\"note\":411.5,\"pitch\":-2},{\"note\":412,\"pitch\":-2},{\"note\":412.5,\"pitch\":-2},{\"note\":413,\"pitch\":-2},{\"note\":413.5,\"pitch\":-2},{\"note\":495,\"pitch\":10},{\"note\":495,\"pitch\":15},{\"note\":498,\"pitch\":10},{\"note\":498,\"pitch\":15},{\"note\":504,\"pitch\":10},{\"note\":504,\"pitch\":15},{\"note\":510,\"pitch\":10},{\"note\":510,\"pitch\":15}]},\"P30\":{\"id\":\"P30\",\"name\":\"Violin II\",\"measureCount\":119,\"notes\":[{\"note\":18,\"pitch\":-5},{\"note\":18,\"pitch\":0},{\"note\":24,\"pitch\":0},{\"note\":24,\"pitch\":-5},{\"note\":30,\"words\":\"(cue-33)\"},{\"note\":30,\"pitch\":10},{\"note\":30.2708,\"pitch\":14},{\"note\":30.5417,\"pitch\":10},{\"note\":30.8125,\"pitch\":9},{\"note\":31.0833,\"pitch\":7},{\"note\":31.3542,\"pitch\":2},{\"note\":31.625,\"pitch\":-2},{\"note\":31.8958,\"pitch\":2},{\"note\":32.1667,\"pitch\":7},{\"note\":32.4375,\"pitch\":9},{\"note\":32.7083,\"pitch\":10},{\"note\":32.9792,\"pitch\":10},{\"note\":33.25,\"pitch\":14},{\"note\":33.5208,\"pitch\":10},{\"note\":33.7917,\"pitch\":9},{\"note\":34.0625,\"pitch\":7},{\"note\":34.3333,\"pitch\":2},{\"note\":34.6042,\"pitch\":-2},{\"note\":34.875,\"pitch\":2},{\"note\":35.1458,\"pitch\":7},{\"note\":35.4167,\"pitch\":9},{\"note\":35.6875,\"pitch\":10},{\"note\":36,\"pitch\":10},{\"note\":36.2708,\"pitch\":14},{\"note\":36.5417,\"pitch\":10},{\"note\":36.8125,\"pitch\":9},{\"note\":37.0833,\"pitch\":7},{\"note\":37.3542,\"pitch\":2},{\"note\":37.625,\"pitch\":-2},{\"note\":37.8958,\"pitch\":2},{\"note\":38.1667,\"pitch\":7},{\"note\":38.4375,\"pitch\":9},{\"note\":38.7083,\"pitch\":10},{\"note\":38.9792,\"pitch\":10},{\"note\":39.25,\"pitch\":14},{\"note\":39.5208,\"pitch\":10},{\"note\":39.7917,\"pitch\":9},{\"note\":40.0625,\"pitch\":7},{\"note\":40.3333,\"pitch\":2},{\"note\":40.6042,\"pitch\":-2},{\"note\":40.875,\"pitch\":2},{\"note\":41.1458,\"pitch\":7},{\"note\":41.4167,\"pitch\":9},{\"note\":41.6875,\"pitch\":10},{\"note\":42,\"pitch\":10},{\"note\":42.2708,\"pitch\":14},{\"note\":42.5417,\"pitch\":10},{\"note\":42.8125,\"pitch\":9},{\"note\":43.0833,\"pitch\":7},{\"note\":43.3542,\"pitch\":2},{\"note\":43.625,\"pitch\":-2},{\"note\":43.8958,\"pitch\":2},{\"note\":44.1667,\"pitch\":7},{\"note\":44.4375,\"pitch\":9},{\"note\":44.7083,\"pitch\":10},{\"note\":44.9792,\"pitch\":10},{\"note\":45.25,\"pitch\":14},{\"note\":45.5208,\"pitch\":10},{\"note\":45.7917,\"pitch\":9},{\"note\":46.0625,\"pitch\":7},{\"note\":46.3333,\"pitch\":2},{\"note\":46.6042,\"pitch\":-2},{\"note\":46.875,\"pitch\":2},{\"note\":47.1458,\"pitch\":7},{\"note\":47.4167,\"pitch\":9},{\"note\":47.6875,\"pitch\":10},{\"note\":48,\"pitch\":10},{\"note\":48.2708,\"pitch\":15},{\"note\":48.5417,\"pitch\":10},{\"note\":48.8125,\"pitch\":9},{\"note\":49.0833,\"pitch\":7},{\"note\":49.3542,\"pitch\":3},{\"note\":49.625,\"pitch\":-2},{\"note\":49.8958,\"pitch\":3},{\"note\":50.1667,\"pitch\":7},{\"note\":50.4375,\"pitch\":9},{\"note\":50.7083,\"pitch\":10},{\"note\":50.9792,\"pitch\":10},{\"note\":51.25,\"pitch\":15},{\"note\":51.5208,\"pitch\":10},{\"note\":51.7917,\"pitch\":9},{\"note\":52.0625,\"pitch\":7},{\"note\":52.3333,\"pitch\":3},{\"note\":52.6042,\"pitch\":-2},{\"note\":52.875,\"pitch\":3},{\"note\":53.1458,\"pitch\":7},{\"note\":53.4167,\"pitch\":9},{\"note\":53.6875,\"pitch\":10},{\"note\":54,\"pitch\":10},{\"note\":54.2708,\"pitch\":14},{\"note\":54.5417,\"pitch\":10},{\"note\":54.8125,\"pitch\":9},{\"note\":55.0833,\"pitch\":7},{\"note\":55.3542,\"pitch\":2},{\"note\":55.625,\"pitch\":-2},{\"note\":55.8958,\"pitch\":2},{\"note\":56.1667,\"pitch\":7},{\"note\":56.4375,\"pitch\":9},{\"note\":56.7083,\"pitch\":10},{\"note\":56.9792,\"pitch\":10},{\"note\":57.25,\"pitch\":14},{\"note\":57.5208,\"pitch\":10},{\"note\":57.7917,\"pitch\":9},{\"note\":58.0625,\"pitch\":7},{\"note\":58.3333,\"pitch\":2},{\"note\":58.6042,\"pitch\":-2},{\"note\":58.875,\"pitch\":2},{\"note\":59.1458,\"pitch\":7},{\"note\":59.4167,\"pitch\":9},{\"note\":59.6875,\"pitch\":10},{\"note\":60,\"pitch\":10},{\"note\":60.2708,\"pitch\":14},{\"note\":60.5417,\"pitch\":10},{\"note\":60.8125,\"pitch\":9},{\"note\":61.0833,\"pitch\":7},{\"note\":61.3542,\"pitch\":2},{\"note\":61.625,\"pitch\":-2},{\"note\":61.8958,\"pitch\":2},{\"note\":102,\"pitch\":10},{\"note\":108,\"pitch\":10},{\"note\":114,\"pitch\":10},{\"note\":132,\"pitch\":-5},{\"note\":132,\"pitch\":-10},{\"note\":138,\"pitch\":-5},{\"note\":138,\"pitch\":-9},{\"note\":141,\"pitch\":-5},{\"note\":141,\"pitch\":-2},{\"note\":144,\"words\":\"(cue-102)\"},{\"note\":144,\"pitch\":-10},{\"note\":147,\"pitch\":-9},{\"note\":150,\"pitch\":-10},{\"note\":156,\"pitch\":-10},{\"note\":159,\"pitch\":-9},{\"note\":162,\"pitch\":-10},{\"note\":165,\"pitch\":-12},{\"note\":168,\"pitch\":0},{\"note\":171,\"pitch\":-2},{\"note\":174,\"pitch\":-2},{\"note\":177,\"pitch\":-3},{\"note\":180,\"pitch\":-5},{\"note\":183,\"pitch\":-7},{\"note\":186,\"pitch\":-3},{\"note\":193,\"pitch\":12},{\"note\":194,\"pitch\":7},{\"note\":195,\"pitch\":10},{\"note\":196,\"pitch\":9},{\"note\":197,\"pitch\":7},{\"note\":199,\"pitch\":9},{\"note\":200,\"pitch\":5},{\"note\":201,\"pitch\":7},{\"note\":202,\"pitch\":2},{\"note\":203,\"pitch\":-2},{\"note\":205,\"pitch\":3},{\"note\":206,\"pitch\":7},{\"note\":207,\"pitch\":10},{\"note\":208,\"pitch\":9},{\"note\":209,\"pitch\":7},{\"note\":210,\"pitch\":5},{\"note\":211,\"pitch\":3},{\"note\":212,\"pitch\":2},{\"note\":213,\"pitch\":9},{\"note\":214,\"pitch\":7},{\"note\":215,\"pitch\":5},{\"note\":217,\"pitch\":12},{\"note\":218,\"pitch\":7},{\"note\":219,\"pitch\":10},{\"note\":220,\"pitch\":9},{\"note\":221,\"pitch\":7},{\"note\":223,\"pitch\":9},{\"note\":224,\"pitch\":5},{\"note\":225,\"pitch\":7},{\"note\":227,\"pitch\":2},{\"note\":228,\"pitch\":3},{\"note\":229,\"pitch\":7},{\"note\":230,\"pitch\":9},{\"note\":231,\"pitch\":10},{\"note\":232,\"pitch\":5},{\"note\":233,\"pitch\":2},{\"note\":235,\"pitch\":2},{\"note\":236,\"pitch\":5},{\"note\":237,\"pitch\":6},{\"note\":238,\"pitch\":2},{\"note\":239,\"pitch\":-3},{\"note\":240,\"pitch\":2},{\"note\":241,\"pitch\":-3},{\"note\":242,\"pitch\":-6},{\"note\":243,\"pitch\":-10},{\"note\":261,\"pitch\":2},{\"note\":261,\"words\":\"(cue-23)\"},{\"note\":264,\"pitch\":3},{\"note\":270,\"pitch\":7},{\"note\":276,\"pitch\":10},{\"note\":282,\"pitch\":7},{\"note\":288,\"pitch\":-3},{\"note\":291,\"pitch\":-2},{\"note\":294,\"pitch\":-2},{\"note\":297,\"pitch\":-2},{\"note\":330,\"words\":\"(off the string)\"},{\"note\":330,\"words\":\"(cue-96)\"},{\"note\":330,\"pitch\":-10},{\"note\":330.5,\"pitch\":-10},{\"note\":331,\"pitch\":-10},{\"note\":331.5,\"pitch\":-10},{\"note\":332,\"pitch\":-10},{\"note\":332.5,\"pitch\":-10},{\"note\":333,\"pitch\":-10},{\"note\":333.5,\"pitch\":-10},{\"note\":334,\"pitch\":-10},{\"note\":334.5,\"pitch\":-10},{\"note\":335,\"pitch\":-10},{\"note\":335.5,\"pitch\":-10},{\"note\":336,\"pitch\":-9},{\"note\":336.5,\"pitch\":-9},{\"note\":337,\"pitch\":-9},{\"note\":337.5,\"pitch\":-9},{\"note\":338,\"pitch\":-9},{\"note\":338.5,\"pitch\":-9},{\"note\":339,\"pitch\":-9},{\"note\":339.5,\"pitch\":-9},{\"note\":340,\"pitch\":-9},{\"note\":340.5,\"pitch\":-9},{\"note\":341,\"pitch\":-9},{\"note\":341.5,\"pitch\":-9},{\"note\":342,\"pitch\":-10},{\"note\":342.5,\"pitch\":-10},{\"note\":343,\"pitch\":-10},{\"note\":343.5,\"pitch\":-10},{\"note\":344,\"pitch\":-10},{\"note\":344.5,\"pitch\":-10},{\"note\":345,\"pitch\":-10},{\"note\":345.5,\"pitch\":-10},{\"note\":346,\"pitch\":-10},{\"note\":346.5,\"pitch\":-10},{\"note\":347,\"pitch\":-10},{\"note\":347.5,\"pitch\":-10},{\"note\":348,\"pitch\":-10},{\"note\":348.5,\"pitch\":-10},{\"note\":349,\"pitch\":-10},{\"note\":349.5,\"pitch\":-10},{\"note\":350,\"pitch\":-10},{\"note\":350.5,\"pitch\":-10},{\"note\":351,\"pitch\":-10},{\"note\":351.5,\"pitch\":-10},{\"note\":352,\"pitch\":-7},{\"note\":352.5,\"pitch\":-7},{\"note\":353,\"pitch\":-7},{\"note\":353.5,\"pitch\":-7},{\"note\":354,\"pitch\":-7},{\"note\":354.5,\"pitch\":-7},{\"note\":355,\"pitch\":-7},{\"note\":355.5,\"pitch\":-7},{\"note\":356,\"pitch\":-7},{\"note\":356.5,\"pitch\":-7},{\"note\":357,\"pitch\":-7},{\"note\":357.5,\"pitch\":-7},{\"note\":358,\"pitch\":-7},{\"note\":358.5,\"pitch\":-7},{\"note\":359,\"pitch\":-7},{\"note\":359.5,\"pitch\":-7},{\"note\":360,\"pitch\":-7},{\"note\":360.5,\"pitch\":-7},{\"note\":361,\"pitch\":-7},{\"note\":361.5,\"pitch\":-7},{\"note\":362,\"pitch\":-7},{\"note\":362.5,\"pitch\":-7},{\"note\":363,\"pitch\":-7},{\"note\":363.5,\"pitch\":-7},{\"note\":364,\"pitch\":-7},{\"note\":364.5,\"pitch\":-7},{\"note\":365,\"pitch\":-7},{\"note\":365.5,\"pitch\":-7},{\"note\":366,\"pitch\":-9},{\"note\":366.5,\"pitch\":-9},{\"note\":367,\"pitch\":-9},{\"note\":367.5,\"pitch\":-9},{\"note\":368,\"pitch\":-9},{\"note\":368.5,\"pitch\":-9},{\"note\":369,\"pitch\":-10},{\"note\":369.5,\"pitch\":-10},{\"note\":370,\"pitch\":-10},{\"note\":370.5,\"pitch\":-10},{\"note\":371,\"pitch\":-10},{\"note\":371.5,\"pitch\":-10},{\"note\":372,\"pitch\":-12},{\"note\":372.5,\"pitch\":-12},{\"note\":373,\"pitch\":-12},{\"note\":373.5,\"pitch\":-12},{\"note\":374,\"pitch\":-12},{\"note\":374.5,\"pitch\":-12},{\"note\":375,\"pitch\":-14},{\"note\":375.5,\"pitch\":-14},{\"note\":376,\"pitch\":-14},{\"note\":376.5,\"pitch\":-10},{\"note\":377,\"pitch\":-10},{\"note\":377.5,\"pitch\":-10},{\"note\":378,\"pitch\":-9},{\"note\":378.5,\"pitch\":-9},{\"note\":379,\"pitch\":-9},{\"note\":379.5,\"pitch\":-9},{\"note\":380,\"pitch\":-9},{\"note\":380.5,\"pitch\":-9},{\"note\":381,\"pitch\":-10},{\"note\":381.5,\"pitch\":-10},{\"note\":382,\"pitch\":-10},{\"note\":382.5,\"pitch\":-10},{\"note\":383,\"pitch\":-10},{\"note\":383.5,\"pitch\":-10},{\"note\":384,\"pitch\":-14},{\"note\":384.5,\"pitch\":-14},{\"note\":385,\"pitch\":-14},{\"note\":385.5,\"pitch\":-14},{\"note\":386,\"pitch\":-14},{\"note\":386.5,\"pitch\":-14},{\"note\":387,\"pitch\":-12},{\"note\":387.5,\"pitch\":-12},{\"note\":388,\"pitch\":-12},{\"note\":388.5,\"pitch\":-12},{\"note\":389,\"pitch\":-12},{\"note\":389.5,\"pitch\":-12},{\"note\":390,\"pitch\":-5},{\"note\":393,\"pitch\":-2},{\"note\":396,\"pitch\":-2},{\"note\":402,\"pitch\":0},{\"note\":405,\"pitch\":2},{\"note\":408,\"pitch\":3},{\"note\":409.5,\"pitch\":5},{\"note\":411,\"pitch\":7},{\"note\":412.5,\"pitch\":9},{\"note\":414,\"pitch\":7},{\"note\":414,\"pitch\":10},{\"note\":417,\"pitch\":10},{\"note\":417,\"pitch\":7},{\"note\":420,\"pitch\":10},{\"note\":420,\"pitch\":14},{\"note\":426,\"pitch\":14},{\"note\":426,\"pitch\":19},{\"note\":504,\"pitch\":-10},{\"note\":507,\"pitch\":-10},{\"note\":509,\"pitch\":-10},{\"note\":510,\"pitch\":-5},{\"note\":529,\"pitch\":-5},{\"note\":529,\"words\":\"(cue-15)\"},{\"note\":529,\"pitch\":0},{\"note\":531,\"pitch\":-5},{\"note\":531,\"pitch\":0},{\"note\":535,\"pitch\":12},{\"note\":535,\"pitch\":7},{\"note\":537,\"pitch\":7},{\"note\":537,\"pitch\":12},{\"note\":546,\"pitch\":-10},{\"note\":546,\"words\":\"(cue-162)\"},{\"note\":549,\"pitch\":-14},{\"note\":552,\"pitch\":-9},{\"note\":555,\"pitch\":-12},{\"note\":558,\"pitch\":-10},{\"note\":561,\"pitch\":-7},{\"note\":564,\"pitch\":-9},{\"note\":567,\"pitch\":-5},{\"note\":570,\"pitch\":-2},{\"note\":570.5,\"pitch\":2},{\"note\":571,\"pitch\":-2},{\"note\":571.5,\"pitch\":-3},{\"note\":572,\"pitch\":-5},{\"note\":572.5,\"pitch\":-3},{\"note\":573,\"pitch\":-2},{\"note\":573.5,\"pitch\":2},{\"note\":574,\"pitch\":-2},{\"note\":574.5,\"pitch\":-3},{\"note\":575,\"pitch\":-5},{\"note\":575.5,\"pitch\":-3},{\"note\":576,\"pitch\":-2},{\"note\":576.5,\"pitch\":3},{\"note\":577,\"pitch\":-2},{\"note\":577.5,\"pitch\":-3},{\"note\":578,\"pitch\":-5},{\"note\":578.5,\"pitch\":-3},{\"note\":579,\"pitch\":-2},{\"note\":579.5,\"pitch\":3},{\"note\":580,\"pitch\":-2},{\"note\":580.5,\"pitch\":-3},{\"note\":581,\"pitch\":-5},{\"note\":581.5,\"pitch\":-3},{\"note\":582,\"pitch\":-2},{\"note\":582.5,\"pitch\":2},{\"note\":583,\"pitch\":-2},{\"note\":583.5,\"pitch\":-3},{\"note\":584,\"pitch\":-5},{\"note\":584.5,\"pitch\":-3},{\"note\":585,\"pitch\":-2},{\"note\":585.5,\"pitch\":2},{\"note\":586,\"pitch\":-2},{\"note\":586.5,\"pitch\":-3},{\"note\":587,\"pitch\":-5},{\"note\":587.5,\"pitch\":-3},{\"note\":588,\"pitch\":-2},{\"note\":588.5,\"pitch\":3},{\"note\":589,\"pitch\":-2},{\"note\":589.5,\"pitch\":-3},{\"note\":590,\"pitch\":-5},{\"note\":590.5,\"pitch\":-3},{\"note\":591,\"pitch\":-2},{\"note\":591.5,\"pitch\":3},{\"note\":592,\"pitch\":-2},{\"note\":592.5,\"pitch\":-3},{\"note\":593,\"pitch\":-5},{\"note\":593.5,\"pitch\":-3},{\"note\":594,\"pitch\":-2},{\"note\":595.5,\"pitch\":2},{\"note\":597,\"pitch\":3},{\"note\":598.5,\"pitch\":2},{\"note\":600,\"pitch\":2},{\"note\":606,\"words\":\"(cue)\"},{\"note\":606,\"pitch\":-2},{\"note\":607.5,\"pitch\":2},{\"note\":609,\"pitch\":3},{\"note\":610.5,\"pitch\":2},{\"note\":612,\"pitch\":2},{\"note\":613.5,\"pitch\":0},{\"note\":615,\"pitch\":0},{\"note\":618,\"pitch\":3},{\"note\":619.5,\"pitch\":2},{\"note\":621,\"pitch\":2},{\"note\":622.5,\"pitch\":-2},{\"note\":624,\"pitch\":2},{\"note\":625.5,\"pitch\":5},{\"note\":627,\"pitch\":7},{\"note\":630,\"pitch\":5},{\"note\":631.5,\"pitch\":2},{\"note\":633,\"pitch\":2},{\"note\":634.5,\"pitch\":0},{\"note\":636,\"pitch\":0},{\"note\":642,\"pitch\":3},{\"note\":643.5,\"pitch\":2},{\"note\":645,\"pitch\":2},{\"note\":646.5,\"pitch\":0},{\"note\":648,\"pitch\":0},{\"note\":649.5,\"pitch\":-2},{\"note\":651,\"pitch\":-2},{\"note\":652.5,\"pitch\":2},{\"note\":654,\"pitch\":3},{\"note\":655.5,\"pitch\":2},{\"note\":657,\"pitch\":2},{\"note\":658.5,\"pitch\":-2},{\"note\":660,\"pitch\":5},{\"note\":661.5,\"pitch\":2},{\"note\":663,\"pitch\":0},{\"note\":666,\"pitch\":3},{\"note\":667.5,\"pitch\":2},{\"note\":669,\"pitch\":2},{\"note\":670.5,\"pitch\":-2},{\"note\":672,\"pitch\":2},{\"note\":673.5,\"pitch\":0},{\"note\":675,\"pitch\":0},{\"note\":676.5,\"pitch\":5},{\"note\":678,\"pitch\":7},{\"note\":679.5,\"pitch\":5},{\"note\":681,\"pitch\":5},{\"note\":682.5,\"pitch\":2},{\"note\":684,\"pitch\":5},{\"note\":685.5,\"pitch\":0},{\"note\":687,\"pitch\":2},{\"note\":690,\"pitch\":-2},{\"note\":690.5,\"pitch\":-3},{\"note\":691,\"pitch\":-2},{\"note\":691.5,\"pitch\":2},{\"note\":692,\"pitch\":-2},{\"note\":693,\"pitch\":-2},{\"note\":693.5,\"pitch\":-3},{\"note\":694,\"pitch\":-2},{\"note\":694.5,\"pitch\":2},{\"note\":695,\"pitch\":-2},{\"note\":696,\"pitch\":-2},{\"note\":696.5,\"pitch\":-3},{\"note\":697,\"pitch\":-2},{\"note\":697.5,\"pitch\":2},{\"note\":698,\"pitch\":-2},{\"note\":699,\"pitch\":-2},{\"note\":700,\"pitch\":-3},{\"note\":701,\"pitch\":-5},{\"note\":702,\"pitch\":-2},{\"note\":702.5,\"pitch\":-3},{\"note\":703,\"pitch\":-2},{\"note\":703.5,\"pitch\":2},{\"note\":704,\"pitch\":-2},{\"note\":705,\"pitch\":-2},{\"note\":705.5,\"pitch\":-3},{\"note\":706,\"pitch\":-2},{\"note\":706.5,\"pitch\":2},{\"note\":707,\"pitch\":-2},{\"note\":707.5,\"pitch\":-3},{\"note\":708,\"pitch\":7},{\"note\":709,\"pitch\":10},{\"note\":710,\"pitch\":14},{\"note\":711,\"pitch\":16},{\"note\":712,\"pitch\":19}]},\"P31\":{\"id\":\"P31\",\"name\":\"Violin II DIV\",\"measureCount\":119,\"notes\":[{\"note\":73,\"words\":\"(cue-36)\"},{\"note\":73,\"pitch\":-10},{\"note\":73,\"pitch\":-5},{\"note\":75,\"pitch\":-5},{\"note\":75,\"pitch\":-10},{\"note\":79,\"pitch\":3},{\"note\":79,\"pitch\":8},{\"note\":81,\"pitch\":3},{\"note\":81,\"pitch\":8},{\"note\":85,\"pitch\":0},{\"note\":85,\"pitch\":-5},{\"note\":87,\"pitch\":-5},{\"note\":87,\"pitch\":0},{\"note\":91,\"pitch\":12},{\"note\":91,\"pitch\":7},{\"note\":93,\"pitch\":7},{\"note\":93,\"pitch\":12},{\"note\":97,\"pitch\":8},{\"note\":97,\"pitch\":3},{\"note\":99,\"pitch\":3},{\"note\":99,\"pitch\":8},{\"note\":103,\"pitch\":-5},{\"note\":103,\"pitch\":0},{\"note\":105,\"pitch\":-5},{\"note\":105,\"pitch\":0},{\"note\":288,\"pitch\":-3},{\"note\":288,\"pitch\":2},{\"note\":291,\"pitch\":3},{\"note\":291,\"pitch\":-2},{\"note\":294,\"pitch\":-2},{\"note\":294,\"pitch\":3},{\"note\":300,\"pitch\":8},{\"note\":300,\"pitch\":3},{\"note\":303,\"pitch\":2},{\"note\":303,\"pitch\":7},{\"note\":306,\"pitch\":2},{\"note\":306,\"pitch\":7},{\"note\":312,\"pitch\":2},{\"note\":312,\"pitch\":7},{\"note\":318,\"pitch\":7},{\"note\":318,\"pitch\":2},{\"note\":390,\"pitch\":-12},{\"note\":390.5,\"pitch\":-12},{\"note\":391,\"pitch\":-12},{\"note\":391.5,\"pitch\":-12},{\"note\":392,\"pitch\":-12},{\"note\":392.5,\"pitch\":-12},{\"note\":393,\"pitch\":-10},{\"note\":393.5,\"pitch\":-10},{\"note\":394,\"pitch\":-10},{\"note\":394.5,\"pitch\":-10},{\"note\":395,\"pitch\":-10},{\"note\":395.5,\"pitch\":-10},{\"note\":396,\"pitch\":-9},{\"note\":396.5,\"pitch\":-9},{\"note\":397,\"pitch\":-9},{\"note\":397.5,\"pitch\":-9},{\"note\":398,\"pitch\":-9},{\"note\":398.5,\"pitch\":-9},{\"note\":399,\"pitch\":-9},{\"note\":399.5,\"pitch\":-9},{\"note\":400,\"pitch\":-9},{\"note\":400.5,\"pitch\":-9},{\"note\":401,\"pitch\":-9},{\"note\":401.5,\"pitch\":-9},{\"note\":402,\"pitch\":-9},{\"note\":402.5,\"pitch\":-9},{\"note\":403,\"pitch\":-9},{\"note\":403.5,\"pitch\":-9},{\"note\":404,\"pitch\":-9},{\"note\":404.5,\"pitch\":-9},{\"note\":405,\"pitch\":-7},{\"note\":405.5,\"pitch\":-7},{\"note\":406,\"pitch\":-7},{\"note\":406.5,\"pitch\":-7},{\"note\":407,\"pitch\":-7},{\"note\":407.5,\"pitch\":-7},{\"note\":408,\"pitch\":-5},{\"note\":408.5,\"pitch\":-5},{\"note\":409,\"pitch\":-5},{\"note\":409.5,\"pitch\":-5},{\"note\":410,\"pitch\":-5},{\"note\":410.5,\"pitch\":-5},{\"note\":411,\"pitch\":-5},{\"note\":411.5,\"pitch\":-5},{\"note\":412,\"pitch\":-5},{\"note\":412.5,\"pitch\":-5},{\"note\":413,\"pitch\":-5},{\"note\":413.5,\"pitch\":-5},{\"note\":690,\"pitch\":2},{\"note\":690.5,\"pitch\":2},{\"note\":691,\"pitch\":2},{\"note\":691.5,\"pitch\":2},{\"note\":692,\"pitch\":2},{\"note\":692.5,\"pitch\":2},{\"note\":693,\"pitch\":2},{\"note\":693.5,\"pitch\":2},{\"note\":694,\"pitch\":2},{\"note\":694.5,\"pitch\":2},{\"note\":695,\"pitch\":2},{\"note\":695.5,\"pitch\":2},{\"note\":696,\"pitch\":3},{\"note\":696.5,\"pitch\":3},{\"note\":697,\"pitch\":3},{\"note\":697.5,\"pitch\":3},{\"note\":698,\"pitch\":3},{\"note\":698.5,\"pitch\":3},{\"note\":699,\"pitch\":2},{\"note\":699.5,\"pitch\":2},{\"note\":700,\"pitch\":2},{\"note\":700.5,\"pitch\":2},{\"note\":701,\"pitch\":2},{\"note\":701.5,\"pitch\":2},{\"note\":702,\"pitch\":2},{\"note\":702.5,\"pitch\":2},{\"note\":703,\"pitch\":2},{\"note\":703.5,\"pitch\":2},{\"note\":704,\"pitch\":2},{\"note\":704.5,\"pitch\":2},{\"note\":705,\"pitch\":3},{\"note\":705.5,\"pitch\":3},{\"note\":706,\"pitch\":3},{\"note\":706.5,\"pitch\":3},{\"note\":707,\"pitch\":3},{\"note\":707.5,\"pitch\":3},{\"note\":708,\"pitch\":2},{\"note\":708.5,\"pitch\":2},{\"note\":709,\"pitch\":2},{\"note\":709.5,\"pitch\":2},{\"note\":710,\"pitch\":2},{\"note\":710.5,\"pitch\":2},{\"note\":711,\"pitch\":4},{\"note\":711.5,\"pitch\":4},{\"note\":712,\"pitch\":4},{\"note\":712.5,\"pitch\":4},{\"note\":713,\"pitch\":4},{\"note\":713.5,\"pitch\":4}]},\"P32\":{\"id\":\"P32\",\"name\":\"Viola\",\"measureCount\":119,\"notes\":[{\"note\":36,\"pitch\":-5},{\"note\":36.3,\"pitch\":-3},{\"note\":36.6,\"pitch\":-2},{\"note\":36.9,\"pitch\":2},{\"note\":37.2,\"pitch\":-2},{\"note\":37.5,\"pitch\":-3},{\"note\":37.8,\"pitch\":-5},{\"note\":38.1,\"pitch\":-10},{\"note\":38.4,\"pitch\":-14},{\"note\":38.7,\"pitch\":-10},{\"note\":39,\"pitch\":-5},{\"note\":39.3,\"pitch\":-3},{\"note\":39.6,\"pitch\":-2},{\"note\":39.9,\"pitch\":2},{\"note\":40.2,\"pitch\":-2},{\"note\":40.5,\"pitch\":-3},{\"note\":40.8,\"pitch\":-5},{\"note\":41.1,\"pitch\":-10},{\"note\":41.4,\"pitch\":-14},{\"note\":41.7,\"pitch\":-10},{\"note\":42,\"pitch\":-5},{\"note\":42.3,\"pitch\":-3},{\"note\":42.6,\"pitch\":-2},{\"note\":42.9,\"pitch\":2},{\"note\":43.2,\"pitch\":-2},{\"note\":43.5,\"pitch\":-3},{\"note\":43.8,\"pitch\":-5},{\"note\":44.1,\"pitch\":-10},{\"note\":44.4,\"pitch\":-14},{\"note\":44.7,\"pitch\":-10},{\"note\":45,\"pitch\":-5},{\"note\":45.3,\"pitch\":-3},{\"note\":45.6,\"pitch\":-2},{\"note\":45.9,\"pitch\":2},{\"note\":46.2,\"pitch\":-2},{\"note\":46.5,\"pitch\":-3},{\"note\":46.8,\"pitch\":-5},{\"note\":47.1,\"pitch\":-10},{\"note\":47.4,\"pitch\":-14},{\"note\":47.7,\"pitch\":-10},{\"note\":48,\"pitch\":-5},{\"note\":48.3,\"pitch\":-3},{\"note\":48.6,\"pitch\":-2},{\"note\":48.9,\"pitch\":3},{\"note\":49.2,\"pitch\":-2},{\"note\":49.5,\"pitch\":-3},{\"note\":49.8,\"pitch\":-5},{\"note\":50.1,\"pitch\":-9},{\"note\":50.4,\"pitch\":-14},{\"note\":50.7,\"pitch\":-9},{\"note\":51,\"pitch\":-5},{\"note\":51.3,\"pitch\":-3},{\"note\":51.6,\"pitch\":-2},{\"note\":51.9,\"pitch\":3},{\"note\":52.2,\"pitch\":-2},{\"note\":52.5,\"pitch\":-3},{\"note\":52.8,\"pitch\":-5},{\"note\":53.1,\"pitch\":-9},{\"note\":53.4,\"pitch\":-14},{\"note\":53.7,\"pitch\":-9},{\"note\":54,\"pitch\":-5},{\"note\":54.3,\"pitch\":-3},{\"note\":54.6,\"pitch\":-2},{\"note\":54.9,\"pitch\":2},{\"note\":55.2,\"pitch\":-2},{\"note\":55.5,\"pitch\":-3},{\"note\":55.8,\"pitch\":-5},{\"note\":56.1,\"pitch\":-10},{\"note\":56.4,\"pitch\":-14},{\"note\":56.7,\"pitch\":-10},{\"note\":57,\"pitch\":-5},{\"note\":57.3,\"pitch\":-3},{\"note\":57.6,\"pitch\":-2},{\"note\":57.9,\"pitch\":2},{\"note\":58.2,\"pitch\":-2},{\"note\":58.5,\"pitch\":-3},{\"note\":58.8,\"pitch\":-5},{\"note\":59.1,\"pitch\":-10},{\"note\":59.4,\"pitch\":-14},{\"note\":59.7,\"pitch\":-10},{\"note\":60,\"pitch\":-5},{\"note\":60.3,\"pitch\":-3},{\"note\":60.6,\"pitch\":-2},{\"note\":60.9,\"pitch\":2},{\"note\":61.2,\"pitch\":-2},{\"note\":61.5,\"pitch\":-3},{\"note\":61.8,\"pitch\":-5},{\"note\":108,\"words\":\"(cue-24)\"},{\"note\":108,\"pitch\":-5},{\"note\":108,\"pitch\":-10},{\"note\":114,\"pitch\":-9},{\"note\":114,\"pitch\":-5},{\"note\":126,\"pitch\":-2},{\"note\":126.5,\"pitch\":3},{\"note\":127,\"pitch\":-2},{\"note\":127.5,\"pitch\":-3},{\"note\":128,\"pitch\":-5},{\"note\":128.5,\"pitch\":-3},{\"note\":129,\"pitch\":-2},{\"note\":129.5,\"pitch\":3},{\"note\":130,\"pitch\":-2},{\"note\":130.5,\"pitch\":-3},{\"note\":131,\"pitch\":-5},{\"note\":131.5,\"pitch\":-3},{\"note\":132,\"pitch\":-2},{\"note\":144,\"words\":\"(cue-102)\"},{\"note\":144,\"words\":\"(off the string)\"},{\"note\":144,\"pitch\":-2},{\"note\":144.5,\"pitch\":-5},{\"note\":145,\"pitch\":-2},{\"note\":145,\"words\":\"(mf if needed)\"},{\"note\":145.5,\"pitch\":-5},{\"note\":146,\"pitch\":-2},{\"note\":146.5,\"pitch\":-5},{\"note\":147,\"pitch\":-2},{\"note\":147.5,\"pitch\":-5},{\"note\":148,\"pitch\":-2},{\"note\":148.5,\"pitch\":-5},{\"note\":149,\"pitch\":-2},{\"note\":149.5,\"pitch\":-5},{\"note\":150,\"pitch\":-2},{\"note\":150.5,\"pitch\":-5},{\"note\":151,\"pitch\":-2},{\"note\":151.5,\"pitch\":-5},{\"note\":152,\"pitch\":-2},{\"note\":152.5,\"pitch\":-5},{\"note\":153,\"pitch\":-2},{\"note\":153.5,\"pitch\":-5},{\"note\":154,\"pitch\":-2},{\"note\":154.5,\"pitch\":-5},{\"note\":155,\"pitch\":-2},{\"note\":155.5,\"pitch\":-5},{\"note\":156,\"pitch\":-2},{\"note\":156.5,\"pitch\":-5},{\"note\":157,\"pitch\":-2},{\"note\":157.5,\"pitch\":-5},{\"note\":158,\"pitch\":-2},{\"note\":158.5,\"pitch\":-5},{\"note\":159,\"pitch\":-2},{\"note\":159.5,\"pitch\":-5},{\"note\":160,\"pitch\":-2},{\"note\":160.5,\"pitch\":-5},{\"note\":161,\"pitch\":-2},{\"note\":161.5,\"pitch\":-5},{\"note\":162,\"pitch\":-2},{\"note\":162.5,\"pitch\":-7},{\"note\":163,\"pitch\":-2},{\"note\":163.5,\"pitch\":-7},{\"note\":164,\"pitch\":-2},{\"note\":164.5,\"pitch\":-7},{\"note\":165,\"pitch\":-3},{\"note\":165.5,\"pitch\":-7},{\"note\":166,\"pitch\":-3},{\"note\":166.5,\"pitch\":-7},{\"note\":167,\"pitch\":-3},{\"note\":167.5,\"pitch\":-7},{\"note\":168,\"pitch\":0},{\"note\":168.5,\"pitch\":-5},{\"note\":169,\"pitch\":0},{\"note\":169.5,\"pitch\":-5},{\"note\":170,\"pitch\":0},{\"note\":170.5,\"pitch\":-5},{\"note\":171,\"pitch\":-2},{\"note\":171.5,\"pitch\":-5},{\"note\":172,\"pitch\":-2},{\"note\":172.5,\"pitch\":-5},{\"note\":173,\"pitch\":-2},{\"note\":173.5,\"pitch\":-5},{\"note\":174,\"pitch\":-2},{\"note\":174.5,\"pitch\":-7},{\"note\":175,\"pitch\":-2},{\"note\":175.5,\"pitch\":-7},{\"note\":176,\"pitch\":-2},{\"note\":176.5,\"pitch\":-7},{\"note\":177,\"pitch\":-3},{\"note\":177.5,\"pitch\":-7},{\"note\":178,\"pitch\":-3},{\"note\":178.5,\"pitch\":-7},{\"note\":179,\"pitch\":-3},{\"note\":179.5,\"pitch\":-7},{\"note\":180,\"pitch\":-5},{\"note\":180.5,\"pitch\":-9},{\"note\":181,\"pitch\":-5},{\"note\":181.5,\"pitch\":-9},{\"note\":182,\"pitch\":-5},{\"note\":182.5,\"pitch\":-9},{\"note\":183,\"pitch\":-2},{\"note\":183.5,\"pitch\":-7},{\"note\":184,\"pitch\":-2},{\"note\":184.5,\"pitch\":-7},{\"note\":185,\"pitch\":-2},{\"note\":185.5,\"pitch\":-7},{\"note\":186,\"pitch\":-3},{\"note\":186.5,\"pitch\":-7},{\"note\":187,\"pitch\":-3},{\"note\":187.5,\"pitch\":-7},{\"note\":188,\"pitch\":-3},{\"note\":188.5,\"pitch\":-7},{\"note\":189,\"pitch\":-3},{\"note\":189.5,\"pitch\":-7},{\"note\":190,\"pitch\":-3},{\"note\":190.5,\"pitch\":-7},{\"note\":191,\"pitch\":-3},{\"note\":191.5,\"pitch\":-7},{\"note\":192,\"pitch\":0},{\"note\":192.5,\"pitch\":-5},{\"note\":193,\"pitch\":0},{\"note\":193.5,\"pitch\":-5},{\"note\":194,\"pitch\":0},{\"note\":194.5,\"pitch\":-5},{\"note\":195,\"pitch\":-2},{\"note\":195.5,\"pitch\":-5},{\"note\":196,\"pitch\":-2},{\"note\":196.5,\"pitch\":-5},{\"note\":197,\"pitch\":-2},{\"note\":197.5,\"pitch\":-5},{\"note\":198,\"pitch\":-3},{\"note\":198.5,\"pitch\":-7},{\"note\":199,\"pitch\":-3},{\"note\":199.5,\"pitch\":-7},{\"note\":200,\"pitch\":-3},{\"note\":200.5,\"pitch\":-7},{\"note\":201,\"pitch\":-5},{\"note\":201.5,\"pitch\":-10},{\"note\":202,\"pitch\":-5},{\"note\":202.5,\"pitch\":-10},{\"note\":203,\"pitch\":-5},{\"note\":203.5,\"pitch\":-10},{\"note\":204,\"pitch\":-5},{\"note\":204.5,\"pitch\":-9},{\"note\":205,\"pitch\":-5},{\"note\":205.5,\"pitch\":-9},{\"note\":206,\"pitch\":-5},{\"note\":206.5,\"pitch\":-9},{\"note\":207,\"pitch\":-2},{\"note\":207.5,\"pitch\":-7},{\"note\":208,\"pitch\":-2},{\"note\":208.5,\"pitch\":-7},{\"note\":209,\"pitch\":-2},{\"note\":209.5,\"pitch\":-7},{\"note\":210,\"pitch\":-2},{\"note\":210.5,\"pitch\":-7},{\"note\":211,\"pitch\":-2},{\"note\":211.5,\"pitch\":-7},{\"note\":212,\"pitch\":-2},{\"note\":212.5,\"pitch\":-7},{\"note\":213,\"pitch\":-3},{\"note\":213.5,\"pitch\":-7},{\"note\":214,\"pitch\":-3},{\"note\":214.5,\"pitch\":-7},{\"note\":215,\"pitch\":-3},{\"note\":215.5,\"pitch\":-7},{\"note\":216,\"pitch\":0},{\"note\":216.5,\"pitch\":-5},{\"note\":217,\"pitch\":0},{\"note\":217.5,\"pitch\":-5},{\"note\":218,\"pitch\":0},{\"note\":218.5,\"pitch\":-5},{\"note\":219,\"pitch\":-2},{\"note\":219.5,\"pitch\":-5},{\"note\":220,\"pitch\":-2},{\"note\":220.5,\"pitch\":-5},{\"note\":221,\"pitch\":-2},{\"note\":221.5,\"pitch\":-5},{\"note\":222,\"pitch\":-3},{\"note\":222.5,\"pitch\":-7},{\"note\":223,\"pitch\":-3},{\"note\":223.5,\"pitch\":-7},{\"note\":224,\"pitch\":-3},{\"note\":224.5,\"pitch\":-7},{\"note\":225,\"pitch\":-5},{\"note\":225.5,\"pitch\":-10},{\"note\":226,\"pitch\":-5},{\"note\":226.5,\"pitch\":-10},{\"note\":227,\"pitch\":-2},{\"note\":227.5,\"pitch\":-5},{\"note\":228,\"pitch\":-2},{\"note\":228.5,\"pitch\":-5},{\"note\":229,\"pitch\":-2},{\"note\":229.5,\"pitch\":-5},{\"note\":230,\"pitch\":-2},{\"note\":230.5,\"pitch\":-5},{\"note\":231,\"pitch\":-2},{\"note\":231.5,\"pitch\":-7},{\"note\":232,\"pitch\":-2},{\"note\":232.5,\"pitch\":-7},{\"note\":233,\"pitch\":-2},{\"note\":233.5,\"pitch\":-7},{\"note\":234,\"pitch\":-3},{\"note\":234.5,\"pitch\":-7},{\"note\":235,\"pitch\":-3},{\"note\":235.5,\"pitch\":-7},{\"note\":236,\"pitch\":-3},{\"note\":236.5,\"pitch\":-7},{\"note\":237,\"pitch\":-3},{\"note\":237.5,\"pitch\":-6},{\"note\":238,\"pitch\":-3},{\"note\":238.5,\"pitch\":-6},{\"note\":239,\"pitch\":-3},{\"note\":239.5,\"pitch\":-6},{\"note\":240,\"pitch\":-3},{\"note\":240.5,\"pitch\":-6},{\"note\":241,\"pitch\":-3},{\"note\":241.5,\"pitch\":-6},{\"note\":242,\"pitch\":-3},{\"note\":242.5,\"pitch\":-5},{\"note\":243,\"pitch\":-6},{\"note\":243.5,\"pitch\":-10},{\"note\":244,\"pitch\":-6},{\"note\":244.5,\"pitch\":-10},{\"note\":245,\"pitch\":-6},{\"note\":245.5,\"pitch\":-10},{\"note\":264,\"pitch\":-5},{\"note\":266,\"words\":\"(     )\"},{\"note\":266,\"pitch\":-2},{\"note\":276,\"pitch\":-5},{\"note\":278,\"words\":\"(     )\"},{\"note\":278,\"pitch\":-2},{\"note\":291,\"pitch\":2},{\"note\":291,\"words\":\"(cue-27)\"},{\"note\":291,\"pitch\":-2},{\"note\":294,\"pitch\":2},{\"note\":294,\"pitch\":-2},{\"note\":300,\"pitch\":-2},{\"note\":300,\"pitch\":3},{\"note\":303,\"pitch\":-2},{\"note\":303,\"pitch\":2},{\"note\":306,\"pitch\":-2},{\"note\":306,\"pitch\":2},{\"note\":312,\"pitch\":-2},{\"note\":312,\"pitch\":3},{\"note\":330,\"words\":\"(off the string)\"},{\"note\":330,\"pitch\":-14},{\"note\":330,\"words\":\"(cue-96)\"},{\"note\":330.5,\"pitch\":-17},{\"note\":331,\"pitch\":-14},{\"note\":331.5,\"pitch\":-17},{\"note\":332,\"pitch\":-14},{\"note\":332.5,\"pitch\":-17},{\"note\":333,\"pitch\":-14},{\"note\":333.5,\"pitch\":-17},{\"note\":334,\"pitch\":-14},{\"note\":334.5,\"pitch\":-17},{\"note\":335,\"pitch\":-14},{\"note\":335.5,\"pitch\":-17},{\"note\":336,\"pitch\":-14},{\"note\":336.5,\"pitch\":-17},{\"note\":337,\"pitch\":-14},{\"note\":337.5,\"pitch\":-17},{\"note\":338,\"pitch\":-14},{\"note\":338.5,\"pitch\":-17},{\"note\":339,\"pitch\":-14},{\"note\":339.5,\"pitch\":-17},{\"note\":340,\"pitch\":-14},{\"note\":340.5,\"pitch\":-17},{\"note\":341,\"pitch\":-14},{\"note\":341.5,\"pitch\":-17},{\"note\":342,\"pitch\":-14},{\"note\":342.5,\"pitch\":-17},{\"note\":343,\"pitch\":-14},{\"note\":343.5,\"pitch\":-17},{\"note\":344,\"pitch\":-14},{\"note\":344.5,\"pitch\":-17},{\"note\":345,\"pitch\":-15},{\"note\":345.5,\"pitch\":-18},{\"note\":346,\"pitch\":-15},{\"note\":346.5,\"pitch\":-18},{\"note\":347,\"pitch\":-15},{\"note\":347.5,\"pitch\":-18},{\"note\":348,\"pitch\":-14},{\"note\":348.5,\"pitch\":-17},{\"note\":349,\"pitch\":-14},{\"note\":349.5,\"pitch\":-17},{\"note\":350,\"pitch\":-14},{\"note\":350.5,\"pitch\":-17},{\"note\":351,\"pitch\":-14},{\"note\":351.5,\"pitch\":-17},{\"note\":352,\"pitch\":-7},{\"note\":352.5,\"pitch\":-12},{\"note\":353,\"pitch\":-7},{\"note\":353.5,\"pitch\":-12},{\"note\":354,\"pitch\":-7},{\"note\":354.5,\"pitch\":-10},{\"note\":355,\"pitch\":-7},{\"note\":355.5,\"pitch\":-10},{\"note\":356,\"pitch\":-7},{\"note\":356.5,\"pitch\":-10},{\"note\":357,\"pitch\":-7},{\"note\":357.5,\"pitch\":-10},{\"note\":358,\"pitch\":-7},{\"note\":358.5,\"pitch\":-10},{\"note\":359,\"pitch\":-7},{\"note\":359.5,\"pitch\":-10},{\"note\":360,\"pitch\":-7},{\"note\":360.5,\"pitch\":-12},{\"note\":361,\"pitch\":-7},{\"note\":361.5,\"pitch\":-12},{\"note\":362,\"pitch\":-7},{\"note\":362.5,\"pitch\":-12},{\"note\":363,\"pitch\":-7},{\"note\":363.5,\"pitch\":-12},{\"note\":364,\"pitch\":-7},{\"note\":364.5,\"pitch\":-12},{\"note\":365,\"pitch\":-7},{\"note\":365.5,\"pitch\":-12},{\"note\":366,\"pitch\":-5},{\"note\":366.5,\"pitch\":-9},{\"note\":367,\"pitch\":-5},{\"note\":367.5,\"pitch\":-9},{\"note\":368,\"pitch\":-5},{\"note\":368.5,\"pitch\":-9},{\"note\":369,\"pitch\":-7},{\"note\":369.5,\"pitch\":-10},{\"note\":370,\"pitch\":-7},{\"note\":370.5,\"pitch\":-10},{\"note\":371,\"pitch\":-7},{\"note\":371.5,\"pitch\":-10},{\"note\":372,\"pitch\":-7},{\"note\":372.5,\"pitch\":-12},{\"note\":373,\"pitch\":-7},{\"note\":373.5,\"pitch\":-12},{\"note\":374,\"pitch\":-7},{\"note\":374.5,\"pitch\":-12},{\"note\":375,\"pitch\":-5},{\"note\":375.5,\"pitch\":-10},{\"note\":376,\"pitch\":-5},{\"note\":376.5,\"pitch\":-10},{\"note\":377,\"pitch\":-7},{\"note\":377.5,\"pitch\":-10},{\"note\":378,\"pitch\":-5},{\"note\":378.5,\"pitch\":-9},{\"note\":379,\"pitch\":-5},{\"note\":379.5,\"pitch\":-9},{\"note\":380,\"pitch\":-5},{\"note\":380.5,\"pitch\":-9},{\"note\":381,\"pitch\":-7},{\"note\":381.5,\"pitch\":-10},{\"note\":382,\"pitch\":-7},{\"note\":382.5,\"pitch\":-10},{\"note\":383,\"pitch\":-7},{\"note\":383.5,\"pitch\":-10},{\"note\":384,\"pitch\":-7},{\"note\":384.5,\"pitch\":-10},{\"note\":385,\"pitch\":-7},{\"note\":385.5,\"pitch\":-10},{\"note\":386,\"pitch\":-7},{\"note\":386.5,\"pitch\":-10},{\"note\":387,\"pitch\":-7},{\"note\":387.5,\"pitch\":-12},{\"note\":388,\"pitch\":-7},{\"note\":388.5,\"pitch\":-12},{\"note\":389,\"pitch\":-7},{\"note\":389.5,\"pitch\":-12},{\"note\":390,\"pitch\":-12},{\"note\":390.5,\"pitch\":-17},{\"note\":391,\"pitch\":-12},{\"note\":391.5,\"pitch\":-17},{\"note\":392,\"pitch\":-12},{\"note\":392.5,\"pitch\":-17},{\"note\":393,\"pitch\":-10},{\"note\":393.5,\"pitch\":-14},{\"note\":394,\"pitch\":-10},{\"note\":394.5,\"pitch\":-14},{\"note\":395,\"pitch\":-10},{\"note\":395.5,\"pitch\":-14},{\"note\":396,\"pitch\":-9},{\"note\":396.5,\"pitch\":-14},{\"note\":397,\"pitch\":-9},{\"note\":397.5,\"pitch\":-14},{\"note\":398,\"pitch\":-9},{\"note\":398.5,\"pitch\":-14},{\"note\":399,\"pitch\":-9},{\"note\":399.5,\"pitch\":-14},{\"note\":400,\"pitch\":-9},{\"note\":400.5,\"pitch\":-14},{\"note\":401,\"pitch\":-9},{\"note\":401.5,\"pitch\":-14},{\"note\":402,\"pitch\":-9},{\"note\":402.5,\"pitch\":-12},{\"note\":403,\"pitch\":-9},{\"note\":403.5,\"pitch\":-12},{\"note\":404,\"pitch\":-9},{\"note\":404.5,\"pitch\":-12},{\"note\":405,\"pitch\":-7},{\"note\":405.5,\"pitch\":-10},{\"note\":406,\"pitch\":-7},{\"note\":406.5,\"pitch\":-10},{\"note\":407,\"pitch\":-7},{\"note\":407.5,\"pitch\":-10},{\"note\":408,\"pitch\":-5},{\"note\":408.5,\"pitch\":-9},{\"note\":409,\"pitch\":-5},{\"note\":409.5,\"pitch\":-9},{\"note\":410,\"pitch\":-5},{\"note\":410.5,\"pitch\":-9},{\"note\":411,\"pitch\":-5},{\"note\":411.5,\"pitch\":-9},{\"note\":412,\"pitch\":-5},{\"note\":412.5,\"pitch\":-9},{\"note\":413,\"pitch\":-5},{\"note\":413.5,\"pitch\":-9},{\"note\":417,\"pitch\":7},{\"note\":417,\"pitch\":3},{\"note\":420,\"pitch\":3},{\"note\":420,\"pitch\":7},{\"note\":426,\"pitch\":7},{\"note\":426,\"pitch\":10},{\"note\":504,\"pitch\":-10},{\"note\":507,\"pitch\":-10},{\"note\":509,\"pitch\":-10},{\"note\":510,\"pitch\":-9},{\"note\":528,\"pitch\":-10},{\"note\":534,\"pitch\":-9},{\"note\":546,\"pitch\":-14},{\"note\":549,\"pitch\":-10},{\"note\":552,\"pitch\":-9},{\"note\":555,\"pitch\":-15},{\"note\":558,\"pitch\":-14},{\"note\":558,\"words\":\"(cue-150)\"},{\"note\":558.5,\"pitch\":-15},{\"note\":559,\"pitch\":-14},{\"note\":559.5,\"pitch\":-10},{\"note\":560,\"pitch\":-14},{\"note\":561,\"pitch\":-14},{\"note\":561.5,\"pitch\":-15},{\"note\":562,\"pitch\":-14},{\"note\":562.5,\"pitch\":-10},{\"note\":563,\"pitch\":-14},{\"note\":564,\"pitch\":-12},{\"note\":564.5,\"pitch\":-14},{\"note\":565,\"pitch\":-12},{\"note\":565.5,\"pitch\":-5},{\"note\":566,\"pitch\":-12},{\"note\":567,\"pitch\":-9},{\"note\":567.5,\"pitch\":-10},{\"note\":568,\"pitch\":-9},{\"note\":568.5,\"pitch\":-2},{\"note\":569,\"pitch\":-9},{\"note\":570,\"pitch\":-2},{\"note\":570.5,\"pitch\":2},{\"note\":571,\"pitch\":-2},{\"note\":571.5,\"pitch\":-3},{\"note\":572,\"pitch\":-5},{\"note\":572.5,\"pitch\":-3},{\"note\":573,\"pitch\":-2},{\"note\":573.5,\"pitch\":2},{\"note\":574,\"pitch\":-2},{\"note\":574.5,\"pitch\":-3},{\"note\":575,\"pitch\":-5},{\"note\":575.5,\"pitch\":-3},{\"note\":576,\"pitch\":-2},{\"note\":576.5,\"pitch\":3},{\"note\":577,\"pitch\":-2},{\"note\":577.5,\"pitch\":-3},{\"note\":578,\"pitch\":-5},{\"note\":578.5,\"pitch\":-3},{\"note\":579,\"pitch\":-2},{\"note\":579.5,\"pitch\":3},{\"note\":580,\"pitch\":-2},{\"note\":580.5,\"pitch\":-3},{\"note\":581,\"pitch\":-5},{\"note\":581.5,\"pitch\":-3},{\"note\":582,\"pitch\":-2},{\"note\":582.5,\"pitch\":2},{\"note\":583,\"pitch\":-2},{\"note\":583.5,\"pitch\":-3},{\"note\":584,\"pitch\":-5},{\"note\":584.5,\"pitch\":-3},{\"note\":585,\"pitch\":-2},{\"note\":585.5,\"pitch\":2},{\"note\":586,\"pitch\":-2},{\"note\":586.5,\"pitch\":-3},{\"note\":587,\"pitch\":-5},{\"note\":587.5,\"pitch\":-3},{\"note\":588,\"pitch\":-2},{\"note\":588.5,\"pitch\":3},{\"note\":589,\"pitch\":-2},{\"note\":589.5,\"pitch\":-3},{\"note\":590,\"pitch\":-5},{\"note\":590.5,\"pitch\":-3},{\"note\":591,\"pitch\":-2},{\"note\":591.5,\"pitch\":3},{\"note\":592,\"pitch\":-2},{\"note\":592.5,\"pitch\":-3},{\"note\":593,\"pitch\":-5},{\"note\":593.5,\"pitch\":-3},{\"note\":594,\"pitch\":-2},{\"note\":594.5,\"pitch\":2},{\"note\":595,\"pitch\":-2},{\"note\":595.5,\"pitch\":-3},{\"note\":596,\"pitch\":-5},{\"note\":596.5,\"pitch\":-3},{\"note\":597,\"pitch\":-2},{\"note\":597.5,\"pitch\":3},{\"note\":598,\"pitch\":-2},{\"note\":598.5,\"pitch\":-3},{\"note\":599,\"pitch\":-5},{\"note\":599.5,\"pitch\":-3},{\"note\":600,\"pitch\":-2},{\"note\":600.5,\"pitch\":2},{\"note\":601,\"pitch\":-2},{\"note\":601.5,\"pitch\":-3},{\"note\":602,\"pitch\":-5},{\"note\":602.5,\"pitch\":-3},{\"note\":603,\"pitch\":-2},{\"note\":603.5,\"pitch\":2},{\"note\":604,\"pitch\":-2},{\"note\":604.5,\"pitch\":-3},{\"note\":605,\"pitch\":-5},{\"note\":605.5,\"pitch\":-3},{\"note\":606,\"pitch\":-2},{\"note\":606.5,\"pitch\":2},{\"note\":607,\"pitch\":-2},{\"note\":607.5,\"pitch\":-3},{\"note\":608,\"pitch\":-5},{\"note\":608.5,\"pitch\":-3},{\"note\":609,\"pitch\":-2},{\"note\":609.5,\"pitch\":3},{\"note\":610,\"pitch\":-2},{\"note\":610.5,\"pitch\":-3},{\"note\":611,\"pitch\":-5},{\"note\":611.5,\"pitch\":-3},{\"note\":612,\"pitch\":-2},{\"note\":612.5,\"pitch\":2},{\"note\":613,\"pitch\":-2},{\"note\":613.5,\"pitch\":-3},{\"note\":614,\"pitch\":-7},{\"note\":614.5,\"pitch\":-3},{\"note\":615,\"pitch\":-2},{\"note\":615.5,\"pitch\":0},{\"note\":616,\"pitch\":-2},{\"note\":616.5,\"pitch\":-3},{\"note\":617,\"pitch\":-7},{\"note\":617.5,\"pitch\":-3},{\"note\":618,\"pitch\":-5},{\"note\":618.5,\"pitch\":3},{\"note\":619,\"pitch\":2},{\"note\":619.5,\"pitch\":0},{\"note\":620,\"pitch\":-5},{\"note\":620.5,\"pitch\":-9},{\"note\":621,\"pitch\":-10},{\"note\":621.5,\"pitch\":-7},{\"note\":622,\"pitch\":2},{\"note\":622.5,\"pitch\":-2},{\"note\":623,\"pitch\":-3},{\"note\":623.5,\"pitch\":-7},{\"note\":624,\"pitch\":-3},{\"note\":624.5,\"pitch\":2},{\"note\":625,\"pitch\":-2},{\"note\":625.5,\"pitch\":-3},{\"note\":626,\"pitch\":-5},{\"note\":626.5,\"pitch\":-7},{\"note\":627,\"pitch\":-2},{\"note\":627.5,\"pitch\":3},{\"note\":628,\"pitch\":-2},{\"note\":628.5,\"pitch\":-3},{\"note\":629,\"pitch\":-5},{\"note\":629.5,\"pitch\":-9},{\"note\":630,\"pitch\":-2},{\"note\":630.5,\"pitch\":2},{\"note\":631,\"pitch\":-2},{\"note\":631.5,\"pitch\":-3},{\"note\":632,\"pitch\":-7},{\"note\":632.5,\"pitch\":-10},{\"note\":633,\"pitch\":-2},{\"note\":633.5,\"pitch\":2},{\"note\":634,\"pitch\":-2},{\"note\":634.5,\"pitch\":-3},{\"note\":635,\"pitch\":-7},{\"note\":635.5,\"pitch\":-10},{\"note\":636,\"pitch\":-3},{\"note\":636.5,\"pitch\":0},{\"note\":637,\"pitch\":-3},{\"note\":637.5,\"pitch\":-5},{\"note\":638,\"pitch\":-7},{\"note\":638.5,\"pitch\":-12},{\"note\":639,\"pitch\":-3},{\"note\":639.5,\"pitch\":0},{\"note\":640,\"pitch\":-3},{\"note\":640.5,\"pitch\":-5},{\"note\":641,\"pitch\":-7},{\"note\":641.5,\"pitch\":-12},{\"note\":642,\"pitch\":-5},{\"note\":642.5,\"pitch\":3},{\"note\":643,\"pitch\":2},{\"note\":643.5,\"pitch\":0},{\"note\":644,\"pitch\":-5},{\"note\":644.5,\"pitch\":-9},{\"note\":645,\"pitch\":-7},{\"note\":645.5,\"pitch\":2},{\"note\":646,\"pitch\":-2},{\"note\":646.5,\"pitch\":-3},{\"note\":647,\"pitch\":-7},{\"note\":647.5,\"pitch\":-10},{\"note\":648,\"pitch\":-7},{\"note\":648.5,\"pitch\":0},{\"note\":649,\"pitch\":-2},{\"note\":649.5,\"pitch\":-3},{\"note\":650,\"pitch\":-7},{\"note\":650.5,\"pitch\":-12},{\"note\":651,\"pitch\":-5},{\"note\":651.5,\"pitch\":2},{\"note\":652,\"pitch\":-2},{\"note\":652.5,\"pitch\":-3},{\"note\":653,\"pitch\":-5},{\"note\":653.5,\"pitch\":-10},{\"note\":654,\"pitch\":-2},{\"note\":654.5,\"pitch\":3},{\"note\":655,\"pitch\":-2},{\"note\":655.5,\"pitch\":-3},{\"note\":656,\"pitch\":-5},{\"note\":656.5,\"pitch\":-9},{\"note\":657,\"pitch\":-2},{\"note\":657.5,\"pitch\":2},{\"note\":658,\"pitch\":-2},{\"note\":658.5,\"pitch\":-3},{\"note\":659,\"pitch\":-7},{\"note\":659.5,\"pitch\":-10},{\"note\":660,\"pitch\":-3},{\"note\":660.5,\"pitch\":2},{\"note\":661,\"pitch\":-2},{\"note\":661.5,\"pitch\":-3},{\"note\":662,\"pitch\":-5},{\"note\":662.5,\"pitch\":-7},{\"note\":663,\"pitch\":0},{\"note\":663.5,\"pitch\":5},{\"note\":664,\"pitch\":0},{\"note\":664.5,\"pitch\":-2},{\"note\":665,\"pitch\":-3},{\"note\":665.5,\"pitch\":-7},{\"note\":666,\"pitch\":-5},{\"note\":666.5,\"pitch\":3},{\"note\":667,\"pitch\":2},{\"note\":667.5,\"pitch\":0},{\"note\":668,\"pitch\":-5},{\"note\":668.5,\"pitch\":-9},{\"note\":669,\"pitch\":-7},{\"note\":669.5,\"pitch\":2},{\"note\":670,\"pitch\":-2},{\"note\":670.5,\"pitch\":-3},{\"note\":671,\"pitch\":-7},{\"note\":671.5,\"pitch\":-10},{\"note\":672,\"pitch\":-3},{\"note\":672.5,\"pitch\":2},{\"note\":673,\"pitch\":-2},{\"note\":673.5,\"pitch\":-3},{\"note\":674,\"pitch\":-5},{\"note\":674.5,\"pitch\":-7},{\"note\":675,\"pitch\":0},{\"note\":675.5,\"pitch\":5},{\"note\":676,\"pitch\":0},{\"note\":676.5,\"pitch\":-2},{\"note\":677,\"pitch\":-3},{\"note\":677.5,\"pitch\":-7},{\"note\":678,\"pitch\":-2},{\"note\":678.5,\"pitch\":3},{\"note\":679,\"pitch\":-2},{\"note\":679.5,\"pitch\":-3},{\"note\":680,\"pitch\":-5},{\"note\":680.5,\"pitch\":-9},{\"note\":681,\"pitch\":-2},{\"note\":681.5,\"pitch\":2},{\"note\":682,\"pitch\":-2},{\"note\":682.5,\"pitch\":-3},{\"note\":683,\"pitch\":-7},{\"note\":683.5,\"pitch\":-10},{\"note\":684,\"pitch\":0},{\"note\":684.5,\"pitch\":5},{\"note\":685,\"pitch\":0},{\"note\":685.5,\"pitch\":-2},{\"note\":686,\"pitch\":-3},{\"note\":686.5,\"pitch\":-7},{\"note\":687,\"pitch\":-3},{\"note\":687.5,\"pitch\":2},{\"note\":688,\"pitch\":-3},{\"note\":688.5,\"pitch\":-5},{\"note\":689,\"pitch\":-6},{\"note\":689.5,\"pitch\":-5},{\"note\":690,\"pitch\":-5},{\"note\":690,\"pitch\":-2},{\"note\":690.5,\"pitch\":-5},{\"note\":690.5,\"pitch\":-2},{\"note\":691,\"pitch\":-5},{\"note\":691,\"pitch\":-2},{\"note\":691.5,\"pitch\":-2},{\"note\":691.5,\"pitch\":-5},{\"note\":692,\"pitch\":-5},{\"note\":692,\"pitch\":-2},{\"note\":692.5,\"pitch\":-5},{\"note\":692.5,\"pitch\":-2},{\"note\":693,\"pitch\":-7},{\"note\":693,\"pitch\":-2},{\"note\":693.5,\"pitch\":-7},{\"note\":693.5,\"pitch\":-2},{\"note\":694,\"pitch\":-7},{\"note\":694,\"pitch\":-2},{\"note\":694.5,\"pitch\":-7},{\"note\":694.5,\"pitch\":-2},{\"note\":695,\"pitch\":-2},{\"note\":695,\"pitch\":-7},{\"note\":695.5,\"pitch\":-2},{\"note\":695.5,\"pitch\":-7},{\"note\":696,\"pitch\":-5},{\"note\":696,\"pitch\":-2},{\"note\":696.5,\"pitch\":-5},{\"note\":696.5,\"pitch\":-2},{\"note\":697,\"pitch\":-5},{\"note\":697,\"pitch\":-2},{\"note\":697.5,\"pitch\":-2},{\"note\":697.5,\"pitch\":-5},{\"note\":698,\"pitch\":-2},{\"note\":698,\"pitch\":-5},{\"note\":698.5,\"pitch\":-5},{\"note\":698.5,\"pitch\":-2},{\"note\":699,\"pitch\":-5},{\"note\":699,\"pitch\":-2},{\"note\":699.5,\"pitch\":-5},{\"note\":699.5,\"pitch\":-2},{\"note\":700,\"pitch\":-5},{\"note\":700,\"pitch\":-2},{\"note\":700.5,\"pitch\":-5},{\"note\":700.5,\"pitch\":-2},{\"note\":701,\"pitch\":-5},{\"note\":701,\"pitch\":-2},{\"note\":701.5,\"pitch\":-2},{\"note\":701.5,\"pitch\":-5},{\"note\":702,\"pitch\":-5},{\"note\":702,\"pitch\":-2},{\"note\":702.5,\"pitch\":-2},{\"note\":702.5,\"pitch\":-5},{\"note\":703,\"pitch\":-5},{\"note\":703,\"pitch\":-2},{\"note\":703.5,\"pitch\":-2},{\"note\":703.5,\"pitch\":-5},{\"note\":704,\"pitch\":-5},{\"note\":704,\"pitch\":-2},{\"note\":704.5,\"pitch\":-5},{\"note\":704.5,\"pitch\":-2},{\"note\":705,\"pitch\":-5},{\"note\":705,\"pitch\":-2},{\"note\":705.5,\"pitch\":-2},{\"note\":705.5,\"pitch\":-5},{\"note\":706,\"pitch\":-5},{\"note\":706,\"pitch\":-2},{\"note\":706.5,\"pitch\":-5},{\"note\":706.5,\"pitch\":-2},{\"note\":707,\"pitch\":-5},{\"note\":707,\"pitch\":-2},{\"note\":707.5,\"pitch\":-5},{\"note\":707.5,\"pitch\":-2},{\"note\":708,\"pitch\":-5},{\"note\":708,\"pitch\":-2},{\"note\":708.5,\"pitch\":-2},{\"note\":708.5,\"pitch\":-5},{\"note\":709,\"pitch\":-5},{\"note\":709,\"pitch\":-2},{\"note\":709.5,\"pitch\":-5},{\"note\":709.5,\"pitch\":-2},{\"note\":710,\"pitch\":-5},{\"note\":710,\"pitch\":-2},{\"note\":710.5,\"pitch\":-5},{\"note\":710.5,\"pitch\":-2},{\"note\":711,\"pitch\":-5},{\"note\":711,\"pitch\":0},{\"note\":711.5,\"pitch\":-5},{\"note\":711.5,\"pitch\":0},{\"note\":712,\"pitch\":-5},{\"note\":712,\"pitch\":0},{\"note\":712.5,\"pitch\":-5},{\"note\":712.5,\"pitch\":0},{\"note\":713,\"pitch\":-5},{\"note\":713,\"pitch\":0},{\"note\":713.5,\"pitch\":-5},{\"note\":713.5,\"pitch\":0}]},\"P33\":{\"id\":\"P33\",\"name\":\"Viola DIV\",\"measureCount\":119,\"notes\":[{\"note\":690,\"pitch\":-2},{\"note\":690.5,\"pitch\":-3},{\"note\":691,\"pitch\":-2},{\"note\":691.5,\"pitch\":2},{\"note\":692,\"pitch\":-2},{\"note\":693,\"pitch\":-2},{\"note\":693.5,\"pitch\":-3},{\"note\":694,\"pitch\":-2},{\"note\":694.5,\"pitch\":2},{\"note\":695,\"pitch\":-2},{\"note\":696,\"pitch\":-2},{\"note\":696.5,\"pitch\":-3},{\"note\":697,\"pitch\":-2},{\"note\":697.5,\"pitch\":2},{\"note\":698,\"pitch\":-2},{\"note\":699,\"pitch\":-2},{\"note\":700,\"pitch\":-3},{\"note\":701,\"pitch\":-5},{\"note\":702,\"pitch\":-2},{\"note\":702.5,\"pitch\":-3},{\"note\":703,\"pitch\":-2},{\"note\":703.5,\"pitch\":2},{\"note\":704,\"pitch\":-2},{\"note\":705,\"pitch\":-2},{\"note\":705.5,\"pitch\":-3},{\"note\":706,\"pitch\":-2},{\"note\":706.5,\"pitch\":2},{\"note\":707,\"pitch\":-2},{\"note\":707.5,\"pitch\":-3}]},\"P34\":{\"id\":\"P34\",\"name\":\"Cello\",\"measureCount\":119,\"notes\":[{\"note\":30,\"words\":\"(cue-33)\"},{\"note\":30,\"pitch\":-5},{\"note\":33,\"pitch\":-5},{\"note\":33,\"pitch\":-14},{\"note\":34,\"pitch\":-10},{\"note\":34,\"pitch\":-2},{\"note\":35,\"pitch\":-14},{\"note\":35,\"pitch\":-5},{\"note\":36,\"pitch\":-10},{\"note\":36,\"pitch\":-2},{\"note\":37,\"pitch\":-5},{\"note\":37,\"pitch\":-14},{\"note\":38,\"pitch\":-2},{\"note\":38,\"pitch\":-10},{\"note\":39,\"pitch\":-14},{\"note\":39,\"pitch\":-5},{\"note\":40,\"pitch\":-2},{\"note\":40,\"pitch\":-10},{\"note\":41,\"pitch\":-5},{\"note\":41,\"pitch\":-14},{\"note\":42,\"pitch\":-10},{\"note\":42,\"pitch\":-2},{\"note\":43,\"pitch\":-5},{\"note\":43,\"pitch\":-14},{\"note\":44,\"pitch\":-2},{\"note\":44,\"pitch\":-10},{\"note\":45,\"pitch\":-14},{\"note\":45,\"pitch\":-5},{\"note\":46,\"pitch\":-10},{\"note\":46,\"pitch\":-2},{\"note\":47,\"pitch\":-14},{\"note\":47,\"pitch\":-5},{\"note\":48,\"pitch\":-2},{\"note\":48,\"pitch\":-9},{\"note\":49,\"pitch\":-5},{\"note\":49,\"pitch\":-14},{\"note\":50,\"pitch\":-9},{\"note\":50,\"pitch\":-2},{\"note\":51,\"pitch\":-14},{\"note\":51,\"pitch\":-5},{\"note\":52,\"pitch\":-9},{\"note\":52,\"pitch\":-2},{\"note\":53,\"pitch\":-5},{\"note\":53,\"pitch\":-14},{\"note\":54,\"pitch\":-2},{\"note\":54,\"pitch\":-10},{\"note\":55,\"pitch\":-5},{\"note\":55,\"pitch\":-14},{\"note\":56,\"pitch\":-2},{\"note\":56,\"pitch\":-10},{\"note\":57,\"pitch\":-5},{\"note\":57,\"pitch\":-14},{\"note\":58,\"pitch\":-2},{\"note\":58,\"pitch\":-10},{\"note\":59,\"pitch\":-5},{\"note\":59,\"pitch\":-14},{\"note\":60,\"pitch\":-10},{\"note\":60,\"pitch\":-2},{\"note\":108,\"words\":\"(cue-12)\"},{\"note\":108,\"pitch\":-17},{\"note\":114,\"words\":\"(lightly)\"},{\"note\":114,\"pitch\":-17},{\"note\":115,\"pitch\":-14},{\"note\":116,\"pitch\":-10},{\"note\":117,\"pitch\":-9},{\"note\":118,\"pitch\":-5},{\"note\":119,\"pitch\":-2},{\"note\":132,\"pitch\":-14},{\"note\":132.5,\"pitch\":-10},{\"note\":133,\"pitch\":-14},{\"note\":133.5,\"pitch\":-15},{\"note\":134,\"pitch\":-17},{\"note\":134.5,\"pitch\":-15},{\"note\":135,\"pitch\":-14},{\"note\":135.5,\"pitch\":-10},{\"note\":136,\"pitch\":-14},{\"note\":136.5,\"pitch\":-15},{\"note\":137,\"pitch\":-17},{\"note\":137.5,\"pitch\":-15},{\"note\":138,\"pitch\":-14},{\"note\":144,\"words\":\"arco\"},{\"note\":144,\"pitch\":-10},{\"note\":144,\"words\":\"Div.\"},{\"note\":144,\"words\":\"(cue-102)\"},{\"note\":144,\"pitch\":-17},{\"note\":147,\"pitch\":-9},{\"note\":147,\"pitch\":-17},{\"note\":150,\"pitch\":-10},{\"note\":150,\"pitch\":-17},{\"note\":156,\"pitch\":-17},{\"note\":156,\"pitch\":-10},{\"note\":159,\"pitch\":-17},{\"note\":159,\"pitch\":-26},{\"note\":162,\"pitch\":-10},{\"note\":162,\"pitch\":-19},{\"note\":165,\"pitch\":-15},{\"note\":165,\"pitch\":-24},{\"note\":168,\"pitch\":-9},{\"note\":168,\"pitch\":-17},{\"note\":171,\"pitch\":-22},{\"note\":171,\"pitch\":-14},{\"note\":174,\"pitch\":-14},{\"note\":174,\"pitch\":-22},{\"note\":177,\"pitch\":-24},{\"note\":177,\"pitch\":-15},{\"note\":180,\"pitch\":-17},{\"note\":180,\"pitch\":-26},{\"note\":183,\"pitch\":-19},{\"note\":183,\"pitch\":-10},{\"note\":186,\"pitch\":-24},{\"note\":186,\"pitch\":-15},{\"note\":192,\"pitch\":-17},{\"note\":192,\"pitch\":-9},{\"note\":195,\"pitch\":-14},{\"note\":195,\"pitch\":-22},{\"note\":198,\"pitch\":-24},{\"note\":198,\"pitch\":-15},{\"note\":201,\"pitch\":-22},{\"note\":201,\"pitch\":-14},{\"note\":204,\"pitch\":-17},{\"note\":204,\"pitch\":-26},{\"note\":207,\"pitch\":-19},{\"note\":207,\"pitch\":-10},{\"note\":210,\"pitch\":-14},{\"note\":210,\"pitch\":-19},{\"note\":213,\"pitch\":-24},{\"note\":213,\"pitch\":-15},{\"note\":216,\"pitch\":-9},{\"note\":216,\"pitch\":-17},{\"note\":219,\"pitch\":-22},{\"note\":219,\"pitch\":-14},{\"note\":222,\"pitch\":-24},{\"note\":222,\"pitch\":-15},{\"note\":225,\"pitch\":-22},{\"note\":225,\"pitch\":-14},{\"note\":228,\"pitch\":-26},{\"note\":228,\"pitch\":-17},{\"note\":231,\"pitch\":-10},{\"note\":231,\"pitch\":-19},{\"note\":234,\"pitch\":-24},{\"note\":234,\"pitch\":-15},{\"note\":237,\"pitch\":-15},{\"note\":237,\"pitch\":-22},{\"note\":240,\"pitch\":-22},{\"note\":240,\"pitch\":-15},{\"note\":270,\"pitch\":-29},{\"note\":276,\"pitch\":-29},{\"note\":282,\"words\":\"(cue-48)\"},{\"note\":282,\"pitch\":-29},{\"note\":285,\"pitch\":-17},{\"note\":288,\"pitch\":-15},{\"note\":291,\"pitch\":-14},{\"note\":294,\"pitch\":-17},{\"note\":300,\"pitch\":-21},{\"note\":303,\"pitch\":-29},{\"note\":306,\"pitch\":-29},{\"note\":312,\"pitch\":-29},{\"note\":318,\"pitch\":-29},{\"note\":324,\"pitch\":-29},{\"note\":330,\"words\":\"(cue-96)\"},{\"note\":330,\"words\":\"(off the string)\"},{\"note\":330,\"pitch\":-17},{\"note\":330.5,\"pitch\":-17},{\"note\":331,\"pitch\":-17},{\"note\":331.5,\"pitch\":-17},{\"note\":332,\"pitch\":-17},{\"note\":332.5,\"pitch\":-17},{\"note\":333,\"pitch\":-17},{\"note\":333.5,\"pitch\":-17},{\"note\":334,\"pitch\":-17},{\"note\":334.5,\"pitch\":-17},{\"note\":335,\"pitch\":-17},{\"note\":335.5,\"pitch\":-17},{\"note\":336,\"pitch\":-21},{\"note\":336.5,\"pitch\":-21},{\"note\":337,\"pitch\":-21},{\"note\":337.5,\"pitch\":-21},{\"note\":338,\"pitch\":-21},{\"note\":338.5,\"pitch\":-21},{\"note\":339,\"pitch\":-21},{\"note\":339.5,\"pitch\":-21},{\"note\":340,\"pitch\":-21},{\"note\":340.5,\"pitch\":-21},{\"note\":341,\"pitch\":-21},{\"note\":341.5,\"pitch\":-21},{\"note\":342,\"pitch\":-17},{\"note\":342.5,\"pitch\":-17},{\"note\":343,\"pitch\":-17},{\"note\":343.5,\"pitch\":-17},{\"note\":344,\"pitch\":-17},{\"note\":344.5,\"pitch\":-17},{\"note\":345,\"pitch\":-15},{\"note\":345,\"pitch\":-22},{\"note\":345.5,\"pitch\":-22},{\"note\":345.5,\"pitch\":-15},{\"note\":346,\"pitch\":-15},{\"note\":346,\"pitch\":-22},{\"note\":346.5,\"pitch\":-22},{\"note\":346.5,\"pitch\":-15},{\"note\":347,\"pitch\":-15},{\"note\":347,\"pitch\":-22},{\"note\":347.5,\"pitch\":-22},{\"note\":347.5,\"pitch\":-15},{\"note\":348,\"pitch\":-17},{\"note\":348,\"pitch\":-14},{\"note\":348.5,\"pitch\":-17},{\"note\":348.5,\"pitch\":-14},{\"note\":349,\"pitch\":-17},{\"note\":349,\"pitch\":-14},{\"note\":349.5,\"pitch\":-14},{\"note\":349.5,\"pitch\":-17},{\"note\":350,\"pitch\":-17},{\"note\":350,\"pitch\":-14},{\"note\":350.5,\"pitch\":-14},{\"note\":350.5,\"pitch\":-17},{\"note\":351,\"pitch\":-17},{\"note\":351,\"pitch\":-14},{\"note\":351.5,\"pitch\":-14},{\"note\":351.5,\"pitch\":-17},{\"note\":352,\"pitch\":-15},{\"note\":352,\"pitch\":-12},{\"note\":352.5,\"pitch\":-12},{\"note\":352.5,\"pitch\":-15},{\"note\":353,\"pitch\":-15},{\"note\":353,\"pitch\":-12},{\"note\":353.5,\"pitch\":-15},{\"note\":353.5,\"pitch\":-12},{\"note\":354,\"pitch\":-14},{\"note\":354,\"pitch\":-10},{\"note\":354.5,\"pitch\":-14},{\"note\":354.5,\"pitch\":-10},{\"note\":355,\"pitch\":-10},{\"note\":355,\"pitch\":-14},{\"note\":355.5,\"pitch\":-14},{\"note\":355.5,\"pitch\":-10},{\"note\":356,\"pitch\":-10},{\"note\":356,\"pitch\":-14},{\"note\":356.5,\"pitch\":-14},{\"note\":356.5,\"pitch\":-10},{\"note\":357,\"pitch\":-14},{\"note\":357,\"pitch\":-10},{\"note\":357.5,\"pitch\":-10},{\"note\":357.5,\"pitch\":-14},{\"note\":358,\"pitch\":-14},{\"note\":358,\"pitch\":-10},{\"note\":358.5,\"pitch\":-10},{\"note\":358.5,\"pitch\":-14},{\"note\":359,\"pitch\":-14},{\"note\":359,\"pitch\":-10},{\"note\":359.5,\"pitch\":-14},{\"note\":359.5,\"pitch\":-10},{\"note\":360,\"pitch\":-15},{\"note\":360,\"pitch\":-12},{\"note\":360.5,\"pitch\":-15},{\"note\":360.5,\"pitch\":-12},{\"note\":361,\"pitch\":-15},{\"note\":361,\"pitch\":-12},{\"note\":361.5,\"pitch\":-15},{\"note\":361.5,\"pitch\":-12},{\"note\":362,\"pitch\":-12},{\"note\":362,\"pitch\":-15},{\"note\":362.5,\"pitch\":-15},{\"note\":362.5,\"pitch\":-12},{\"note\":363,\"pitch\":-12},{\"note\":363,\"pitch\":-15},{\"note\":363.5,\"pitch\":-15},{\"note\":363.5,\"pitch\":-12},{\"note\":364,\"pitch\":-15},{\"note\":364,\"pitch\":-12},{\"note\":364.5,\"pitch\":-15},{\"note\":364.5,\"pitch\":-12},{\"note\":365,\"pitch\":-15},{\"note\":365,\"pitch\":-12},{\"note\":365.5,\"pitch\":-12},{\"note\":365.5,\"pitch\":-15},{\"note\":366,\"pitch\":-9},{\"note\":366,\"pitch\":-17},{\"note\":366.5,\"pitch\":-9},{\"note\":366.5,\"pitch\":-17},{\"note\":367,\"pitch\":-9},{\"note\":367,\"pitch\":-17},{\"note\":367.5,\"pitch\":-17},{\"note\":367.5,\"pitch\":-9},{\"note\":368,\"pitch\":-17},{\"note\":368,\"pitch\":-9},{\"note\":368.5,\"pitch\":-17},{\"note\":368.5,\"pitch\":-9},{\"note\":369,\"pitch\":-19},{\"note\":369,\"pitch\":-10},{\"note\":369.5,\"pitch\":-19},{\"note\":369.5,\"pitch\":-10},{\"note\":370,\"pitch\":-19},{\"note\":370,\"pitch\":-10},{\"note\":370.5,\"pitch\":-10},{\"note\":370.5,\"pitch\":-19},{\"note\":371,\"pitch\":-19},{\"note\":371,\"pitch\":-10},{\"note\":371.5,\"pitch\":-19},{\"note\":371.5,\"pitch\":-10},{\"note\":372,\"pitch\":-19},{\"note\":372,\"pitch\":-12},{\"note\":372.5,\"pitch\":-12},{\"note\":372.5,\"pitch\":-19},{\"note\":373,\"pitch\":-12},{\"note\":373,\"pitch\":-19},{\"note\":373.5,\"pitch\":-12},{\"note\":373.5,\"pitch\":-19},{\"note\":374,\"pitch\":-12},{\"note\":374,\"pitch\":-19},{\"note\":374.5,\"pitch\":-19},{\"note\":374.5,\"pitch\":-12},{\"note\":375,\"pitch\":-17},{\"note\":375,\"pitch\":-14},{\"note\":375.5,\"pitch\":-17},{\"note\":375.5,\"pitch\":-14},{\"note\":376,\"pitch\":-14},{\"note\":376,\"pitch\":-17},{\"note\":376.5,\"pitch\":-14},{\"note\":376.5,\"pitch\":-19},{\"note\":377,\"pitch\":-14},{\"note\":377,\"pitch\":-19},{\"note\":377.5,\"pitch\":-19},{\"note\":377.5,\"pitch\":-14},{\"note\":378,\"pitch\":-14},{\"note\":378,\"pitch\":-21},{\"note\":378.5,\"pitch\":-21},{\"note\":378.5,\"pitch\":-14},{\"note\":379,\"pitch\":-21},{\"note\":379,\"pitch\":-14},{\"note\":379.5,\"pitch\":-21},{\"note\":379.5,\"pitch\":-14},{\"note\":380,\"pitch\":-14},{\"note\":380,\"pitch\":-21},{\"note\":380.5,\"pitch\":-21},{\"note\":380.5,\"pitch\":-14},{\"note\":381,\"pitch\":-19},{\"note\":381,\"pitch\":-10},{\"note\":381.5,\"pitch\":-10},{\"note\":381.5,\"pitch\":-19},{\"note\":382,\"pitch\":-19},{\"note\":382,\"pitch\":-10},{\"note\":382.5,\"pitch\":-10},{\"note\":382.5,\"pitch\":-19},{\"note\":383,\"pitch\":-19},{\"note\":383,\"pitch\":-10},{\"note\":383.5,\"pitch\":-10},{\"note\":383.5,\"pitch\":-19},{\"note\":384,\"pitch\":-19},{\"note\":384,\"pitch\":-14},{\"note\":384.5,\"pitch\":-19},{\"note\":384.5,\"pitch\":-14},{\"note\":385,\"pitch\":-19},{\"note\":385,\"pitch\":-14},{\"note\":385.5,\"pitch\":-19},{\"note\":385.5,\"pitch\":-14},{\"note\":386,\"pitch\":-14},{\"note\":386,\"pitch\":-19},{\"note\":386.5,\"pitch\":-19},{\"note\":386.5,\"pitch\":-14},{\"note\":387,\"pitch\":-15},{\"note\":387,\"pitch\":-24},{\"note\":387.5,\"pitch\":-24},{\"note\":387.5,\"pitch\":-15},{\"note\":388,\"pitch\":-24},{\"note\":388,\"pitch\":-15},{\"note\":388.5,\"pitch\":-24},{\"note\":388.5,\"pitch\":-15},{\"note\":389,\"pitch\":-15},{\"note\":389,\"pitch\":-24},{\"note\":389.5,\"pitch\":-24},{\"note\":389.5,\"pitch\":-15},{\"note\":390,\"words\":\"(solo)\"},{\"note\":390,\"pitch\":-22},{\"note\":391.5,\"pitch\":-21},{\"note\":393,\"pitch\":-14},{\"note\":394.5,\"pitch\":-19},{\"note\":396,\"pitch\":-17},{\"note\":397.5,\"pitch\":-15},{\"note\":399,\"pitch\":-14},{\"note\":400.5,\"pitch\":-12},{\"note\":402,\"pitch\":-10},{\"note\":403.5,\"pitch\":-9},{\"note\":405,\"pitch\":-2},{\"note\":406.5,\"pitch\":-7},{\"note\":408,\"pitch\":-5},{\"note\":409.5,\"pitch\":-3},{\"note\":411,\"pitch\":-2},{\"note\":412.5,\"pitch\":0},{\"note\":420,\"pitch\":-26},{\"note\":420,\"pitch\":-17},{\"note\":426,\"pitch\":-14},{\"note\":426,\"pitch\":-22},{\"note\":450,\"pitch\":-14},{\"note\":450.5,\"pitch\":-9},{\"note\":451,\"pitch\":-14},{\"note\":451.5,\"pitch\":-15},{\"note\":452,\"pitch\":-17},{\"note\":452.5,\"pitch\":-15},{\"note\":453,\"pitch\":-14},{\"note\":453.5,\"pitch\":-9},{\"note\":454,\"pitch\":-14},{\"note\":454.5,\"pitch\":-15},{\"note\":455,\"pitch\":-17},{\"note\":455.5,\"pitch\":-15},{\"note\":459,\"words\":\"pizz.\"},{\"note\":459,\"pitch\":-29},{\"note\":462,\"pitch\":-9},{\"note\":465,\"pitch\":-21},{\"note\":468,\"pitch\":-29},{\"note\":471,\"pitch\":-17},{\"note\":474,\"pitch\":-21},{\"note\":477,\"pitch\":-9},{\"note\":480,\"pitch\":-33},{\"note\":481,\"pitch\":-33},{\"note\":482,\"pitch\":-21},{\"note\":483,\"pitch\":-21},{\"note\":484,\"pitch\":-9},{\"note\":485,\"pitch\":-9},{\"note\":486,\"pitch\":-21},{\"note\":488,\"pitch\":-21},{\"note\":489,\"pitch\":-21},{\"note\":490,\"pitch\":-21},{\"note\":491,\"pitch\":-21},{\"note\":492,\"pitch\":-33},{\"note\":492,\"pitch\":-21},{\"note\":493.5,\"pitch\":-21},{\"note\":493.5,\"pitch\":-33},{\"note\":495,\"pitch\":-21},{\"note\":495,\"pitch\":-33},{\"note\":498,\"pitch\":-29},{\"note\":501,\"pitch\":-17},{\"note\":504,\"pitch\":-29},{\"note\":507,\"pitch\":-17},{\"note\":546,\"words\":\"arco\"},{\"note\":546,\"words\":\"(cue-162)\"},{\"note\":546,\"pitch\":-29},{\"note\":546,\"pitch\":-22},{\"note\":549,\"pitch\":-26},{\"note\":549,\"pitch\":-17},{\"note\":552,\"pitch\":-17},{\"note\":552,\"pitch\":-24},{\"note\":555,\"pitch\":-19},{\"note\":558,\"pitch\":-19},{\"note\":558,\"pitch\":-26},{\"note\":561,\"pitch\":-22},{\"note\":561,\"pitch\":-14},{\"note\":564,\"pitch\":-24},{\"note\":564,\"pitch\":-17},{\"note\":567,\"pitch\":-14},{\"note\":567,\"pitch\":-21},{\"note\":570,\"pitch\":-14},{\"note\":570.5,\"pitch\":-10},{\"note\":571,\"pitch\":-14},{\"note\":571.5,\"pitch\":-15},{\"note\":572,\"pitch\":-17},{\"note\":572.5,\"pitch\":-15},{\"note\":573,\"pitch\":-14},{\"note\":573.5,\"pitch\":-10},{\"note\":574,\"pitch\":-14},{\"note\":574.5,\"pitch\":-15},{\"note\":575,\"pitch\":-17},{\"note\":575.5,\"pitch\":-15},{\"note\":576,\"pitch\":-14},{\"note\":576.5,\"pitch\":-9},{\"note\":577,\"pitch\":-14},{\"note\":577.5,\"pitch\":-15},{\"note\":578,\"pitch\":-17},{\"note\":578.5,\"pitch\":-15},{\"note\":579,\"pitch\":-14},{\"note\":579.5,\"pitch\":-9},{\"note\":580,\"pitch\":-14},{\"note\":580.5,\"pitch\":-15},{\"note\":581,\"pitch\":-17},{\"note\":581.5,\"pitch\":-15},{\"note\":582,\"pitch\":-14},{\"note\":582.5,\"pitch\":-10},{\"note\":583,\"pitch\":-14},{\"note\":583.5,\"pitch\":-15},{\"note\":584,\"pitch\":-17},{\"note\":584.5,\"pitch\":-15},{\"note\":585,\"pitch\":-14},{\"note\":585.5,\"pitch\":-10},{\"note\":586,\"pitch\":-14},{\"note\":586.5,\"pitch\":-15},{\"note\":587,\"pitch\":-17},{\"note\":587.5,\"pitch\":-15},{\"note\":588,\"pitch\":-14},{\"note\":588.5,\"pitch\":-9},{\"note\":589,\"pitch\":-14},{\"note\":589.5,\"pitch\":-15},{\"note\":590,\"pitch\":-17},{\"note\":590.5,\"pitch\":-15},{\"note\":591,\"pitch\":-14},{\"note\":591.5,\"pitch\":-9},{\"note\":592,\"pitch\":-14},{\"note\":592.5,\"pitch\":-15},{\"note\":593,\"pitch\":-17},{\"note\":593.5,\"pitch\":-15},{\"note\":594,\"pitch\":-14},{\"note\":594,\"pitch\":-22},{\"note\":597,\"pitch\":-12},{\"note\":597,\"pitch\":-21},{\"note\":600,\"pitch\":-22},{\"note\":600,\"pitch\":-14},{\"note\":606,\"pitch\":-22},{\"note\":606,\"pitch\":-14},{\"note\":609,\"pitch\":-21},{\"note\":609,\"pitch\":-14},{\"note\":612,\"pitch\":-19},{\"note\":612,\"pitch\":-10},{\"note\":615,\"pitch\":-15},{\"note\":615,\"pitch\":-24},{\"note\":618,\"pitch\":-21},{\"note\":618,\"pitch\":-12},{\"note\":621,\"pitch\":-19},{\"note\":621,\"pitch\":-26},{\"note\":624,\"pitch\":-19},{\"note\":624,\"pitch\":-10},{\"note\":627,\"pitch\":-17},{\"note\":627,\"pitch\":-9},{\"note\":630,\"pitch\":-19},{\"note\":630,\"pitch\":-10},{\"note\":636,\"pitch\":-12},{\"note\":636,\"pitch\":-19},{\"note\":638,\"pitch\":-19},{\"note\":639,\"pitch\":-15},{\"note\":640,\"pitch\":-17},{\"note\":641,\"pitch\":-19},{\"note\":642,\"pitch\":-21},{\"note\":642,\"pitch\":-12},{\"note\":645,\"pitch\":-10},{\"note\":645,\"pitch\":-19},{\"note\":648,\"pitch\":-15},{\"note\":648,\"pitch\":-19},{\"note\":651,\"pitch\":-22},{\"note\":651,\"pitch\":-14},{\"note\":654,\"pitch\":-21},{\"note\":654,\"pitch\":-14},{\"note\":657,\"pitch\":-19},{\"note\":657,\"pitch\":-10},{\"note\":660,\"pitch\":-19},{\"note\":660,\"pitch\":-10},{\"note\":662,\"pitch\":-19},{\"note\":663,\"pitch\":-15},{\"note\":664,\"pitch\":-17},{\"note\":665,\"pitch\":-19},{\"note\":666,\"pitch\":-9},{\"note\":666,\"pitch\":-17},{\"note\":669,\"pitch\":-10},{\"note\":669,\"pitch\":-19},{\"note\":672,\"pitch\":-22},{\"note\":672,\"pitch\":-15},{\"note\":675,\"pitch\":-15},{\"note\":675,\"pitch\":-24},{\"note\":678,\"pitch\":-9},{\"note\":678,\"pitch\":-17},{\"note\":681,\"pitch\":-19},{\"note\":681,\"pitch\":-10},{\"note\":684,\"pitch\":-19},{\"note\":684,\"pitch\":-12},{\"note\":687,\"pitch\":-18},{\"note\":687,\"pitch\":-10},{\"note\":690,\"pitch\":-22},{\"note\":690,\"pitch\":-14},{\"note\":693,\"pitch\":-19},{\"note\":693,\"pitch\":-10},{\"note\":696,\"pitch\":-26},{\"note\":696,\"pitch\":-17},{\"note\":699,\"pitch\":-22},{\"note\":699,\"pitch\":-14},{\"note\":702,\"pitch\":-22},{\"note\":702,\"pitch\":-14},{\"note\":705,\"pitch\":-26},{\"note\":705,\"pitch\":-17},{\"note\":708,\"pitch\":-22},{\"note\":708,\"pitch\":-14},{\"note\":711,\"pitch\":-24},{\"note\":711,\"pitch\":-17}]},\"P35\":{\"id\":\"P35\",\"name\":\"Cello DIV\",\"measureCount\":119,\"notes\":[{\"note\":33,\"pitch\":-29},{\"note\":36,\"pitch\":-29},{\"note\":42,\"pitch\":-29},{\"note\":48,\"pitch\":-29},{\"note\":48,\"pitch\":-21},{\"note\":54,\"pitch\":-21},{\"note\":54,\"pitch\":-29},{\"note\":60,\"pitch\":-29},{\"note\":66,\"pitch\":-29},{\"note\":126,\"pitch\":-21},{\"note\":126,\"words\":\"pizz.\"},{\"note\":132,\"pitch\":-29},{\"note\":138,\"pitch\":-33},{\"note\":390,\"pitch\":-24},{\"note\":390.5,\"pitch\":-24},{\"note\":391,\"pitch\":-24},{\"note\":391.5,\"pitch\":-24},{\"note\":392,\"pitch\":-24},{\"note\":392.5,\"pitch\":-24},{\"note\":393,\"pitch\":-22},{\"note\":393.5,\"pitch\":-22},{\"note\":394,\"pitch\":-22},{\"note\":394.5,\"pitch\":-22},{\"note\":395,\"pitch\":-22},{\"note\":395.5,\"pitch\":-22},{\"note\":396,\"pitch\":-14},{\"note\":396,\"pitch\":-21},{\"note\":396.5,\"pitch\":-21},{\"note\":396.5,\"pitch\":-14},{\"note\":397,\"pitch\":-21},{\"note\":397,\"pitch\":-14},{\"note\":397.5,\"pitch\":-21},{\"note\":397.5,\"pitch\":-14},{\"note\":398,\"pitch\":-14},{\"note\":398,\"pitch\":-21},{\"note\":398.5,\"pitch\":-14},{\"note\":398.5,\"pitch\":-21},{\"note\":399,\"pitch\":-21},{\"note\":399,\"pitch\":-14},{\"note\":399.5,\"pitch\":-21},{\"note\":399.5,\"pitch\":-14},{\"note\":400,\"pitch\":-21},{\"note\":400,\"pitch\":-14},{\"note\":400.5,\"pitch\":-21},{\"note\":400.5,\"pitch\":-14},{\"note\":401,\"pitch\":-21},{\"note\":401,\"pitch\":-14},{\"note\":401.5,\"pitch\":-21},{\"note\":401.5,\"pitch\":-14},{\"note\":402,\"pitch\":-24},{\"note\":402,\"pitch\":-17},{\"note\":402.5,\"pitch\":-17},{\"note\":402.5,\"pitch\":-24},{\"note\":403,\"pitch\":-24},{\"note\":403,\"pitch\":-17},{\"note\":403.5,\"pitch\":-17},{\"note\":403.5,\"pitch\":-24},{\"note\":404,\"pitch\":-17},{\"note\":404,\"pitch\":-24},{\"note\":404.5,\"pitch\":-17},{\"note\":404.5,\"pitch\":-24},{\"note\":405,\"pitch\":-22},{\"note\":405,\"pitch\":-14},{\"note\":405.5,\"pitch\":-14},{\"note\":405.5,\"pitch\":-22},{\"note\":406,\"pitch\":-22},{\"note\":406,\"pitch\":-14},{\"note\":406.5,\"pitch\":-22},{\"note\":406.5,\"pitch\":-14},{\"note\":407,\"pitch\":-22},{\"note\":407,\"pitch\":-14},{\"note\":407.5,\"pitch\":-14},{\"note\":407.5,\"pitch\":-22},{\"note\":408,\"pitch\":-21},{\"note\":408,\"pitch\":-14},{\"note\":408.5,\"pitch\":-21},{\"note\":408.5,\"pitch\":-14},{\"note\":409,\"pitch\":-21},{\"note\":409,\"pitch\":-14},{\"note\":409.5,\"pitch\":-21},{\"note\":409.5,\"pitch\":-14},{\"note\":410,\"pitch\":-21},{\"note\":410,\"pitch\":-14},{\"note\":410.5,\"pitch\":-21},{\"note\":410.5,\"pitch\":-14},{\"note\":411,\"pitch\":-14},{\"note\":411,\"pitch\":-21},{\"note\":411.5,\"pitch\":-21},{\"note\":411.5,\"pitch\":-14},{\"note\":412,\"pitch\":-21},{\"note\":412,\"pitch\":-14},{\"note\":412.5,\"pitch\":-21},{\"note\":412.5,\"pitch\":-14},{\"note\":413,\"pitch\":-21},{\"note\":413,\"pitch\":-14},{\"note\":413.5,\"pitch\":-14},{\"note\":413.5,\"pitch\":-21},{\"note\":594,\"pitch\":-14},{\"note\":594.5,\"pitch\":-10},{\"note\":595,\"pitch\":-14},{\"note\":595.5,\"pitch\":-15},{\"note\":596,\"pitch\":-17},{\"note\":596.5,\"pitch\":-15},{\"note\":597,\"pitch\":-14},{\"note\":597.5,\"pitch\":-9},{\"note\":598,\"pitch\":-14},{\"note\":598.5,\"pitch\":-15},{\"note\":599,\"pitch\":-17},{\"note\":599.5,\"pitch\":-15},{\"note\":600,\"pitch\":-14},{\"note\":600.5,\"pitch\":-10},{\"note\":601,\"pitch\":-14},{\"note\":601.5,\"pitch\":-15},{\"note\":602,\"pitch\":-17},{\"note\":602.5,\"pitch\":-15},{\"note\":603,\"pitch\":-14},{\"note\":603.5,\"pitch\":-10},{\"note\":604,\"pitch\":-14},{\"note\":604.5,\"pitch\":-15},{\"note\":605,\"pitch\":-17},{\"note\":605.5,\"pitch\":-15},{\"note\":606,\"pitch\":-14},{\"note\":606.5,\"pitch\":-10},{\"note\":607,\"pitch\":-14},{\"note\":607.5,\"pitch\":-15},{\"note\":608,\"pitch\":-17},{\"note\":608.5,\"pitch\":-15},{\"note\":609,\"pitch\":-14},{\"note\":609.5,\"pitch\":-9},{\"note\":610,\"pitch\":-14},{\"note\":610.5,\"pitch\":-15},{\"note\":611,\"pitch\":-17},{\"note\":611.5,\"pitch\":-15},{\"note\":612,\"pitch\":-14},{\"note\":612.5,\"pitch\":-10},{\"note\":613,\"pitch\":-14},{\"note\":613.5,\"pitch\":-15},{\"note\":614,\"pitch\":-19},{\"note\":614.5,\"pitch\":-15},{\"note\":615,\"pitch\":-14},{\"note\":615.5,\"pitch\":-12},{\"note\":616,\"pitch\":-14},{\"note\":616.5,\"pitch\":-15},{\"note\":617,\"pitch\":-19},{\"note\":617.5,\"pitch\":-15},{\"note\":618,\"pitch\":-17},{\"note\":618.5,\"pitch\":-9},{\"note\":619,\"pitch\":-10},{\"note\":619.5,\"pitch\":-12},{\"note\":620,\"pitch\":-17},{\"note\":620.5,\"pitch\":-21},{\"note\":621,\"pitch\":-22},{\"note\":621.5,\"pitch\":-19},{\"note\":622,\"pitch\":-10},{\"note\":622.5,\"pitch\":-14},{\"note\":623,\"pitch\":-15},{\"note\":623.5,\"pitch\":-19},{\"note\":624,\"pitch\":-15},{\"note\":624.5,\"pitch\":-10},{\"note\":625,\"pitch\":-14},{\"note\":625.5,\"pitch\":-15},{\"note\":626,\"pitch\":-17},{\"note\":626.5,\"pitch\":-19},{\"note\":627,\"pitch\":-14},{\"note\":627.5,\"pitch\":-9},{\"note\":628,\"pitch\":-14},{\"note\":628.5,\"pitch\":-15},{\"note\":629,\"pitch\":-17},{\"note\":629.5,\"pitch\":-21},{\"note\":630,\"pitch\":-14},{\"note\":630.5,\"pitch\":-10},{\"note\":631,\"pitch\":-14},{\"note\":631.5,\"pitch\":-15},{\"note\":632,\"pitch\":-19},{\"note\":632.5,\"pitch\":-22},{\"note\":633,\"pitch\":-14},{\"note\":633.5,\"pitch\":-10},{\"note\":634,\"pitch\":-14},{\"note\":634.5,\"pitch\":-15},{\"note\":635,\"pitch\":-19},{\"note\":635.5,\"pitch\":-22},{\"note\":636,\"pitch\":-15},{\"note\":636.5,\"pitch\":-12},{\"note\":637,\"pitch\":-15},{\"note\":637.5,\"pitch\":-17},{\"note\":638,\"pitch\":-19},{\"note\":638.5,\"pitch\":-24},{\"note\":639,\"pitch\":-15},{\"note\":639.5,\"pitch\":-12},{\"note\":640,\"pitch\":-15},{\"note\":640.5,\"pitch\":-17},{\"note\":641,\"pitch\":-19},{\"note\":641.5,\"pitch\":-24},{\"note\":642,\"pitch\":-17},{\"note\":642.5,\"pitch\":-9},{\"note\":643,\"pitch\":-10},{\"note\":643.5,\"pitch\":-12},{\"note\":644,\"pitch\":-17},{\"note\":644.5,\"pitch\":-21},{\"note\":645,\"pitch\":-19},{\"note\":645.5,\"pitch\":-10},{\"note\":646,\"pitch\":-14},{\"note\":646.5,\"pitch\":-15},{\"note\":647,\"pitch\":-19},{\"note\":647.5,\"pitch\":-22},{\"note\":648,\"pitch\":-19},{\"note\":648.5,\"pitch\":-12},{\"note\":649,\"pitch\":-14},{\"note\":649.5,\"pitch\":-15},{\"note\":650,\"pitch\":-19},{\"note\":650.5,\"pitch\":-24},{\"note\":651,\"pitch\":-17},{\"note\":651.5,\"pitch\":-10},{\"note\":652,\"pitch\":-14},{\"note\":652.5,\"pitch\":-15},{\"note\":653,\"pitch\":-17},{\"note\":653.5,\"pitch\":-22},{\"note\":654,\"pitch\":-14},{\"note\":654.5,\"pitch\":-9},{\"note\":655,\"pitch\":-14},{\"note\":655.5,\"pitch\":-15},{\"note\":656,\"pitch\":-17},{\"note\":656.5,\"pitch\":-21},{\"note\":657,\"pitch\":-14},{\"note\":657.5,\"pitch\":-10},{\"note\":658,\"pitch\":-14},{\"note\":658.5,\"pitch\":-15},{\"note\":659,\"pitch\":-19},{\"note\":659.5,\"pitch\":-22},{\"note\":660,\"pitch\":-15},{\"note\":660.5,\"pitch\":-10},{\"note\":661,\"pitch\":-14},{\"note\":661.5,\"pitch\":-15},{\"note\":662,\"pitch\":-17},{\"note\":662.5,\"pitch\":-19},{\"note\":663,\"pitch\":-12},{\"note\":663.5,\"pitch\":-7},{\"note\":664,\"pitch\":-12},{\"note\":664.5,\"pitch\":-14},{\"note\":665,\"pitch\":-15},{\"note\":665.5,\"pitch\":-19},{\"note\":666,\"pitch\":-17},{\"note\":666.5,\"pitch\":-9},{\"note\":667,\"pitch\":-10},{\"note\":667.5,\"pitch\":-12},{\"note\":668,\"pitch\":-17},{\"note\":668.5,\"pitch\":-21},{\"note\":669,\"pitch\":-19},{\"note\":669.5,\"pitch\":-10},{\"note\":670,\"pitch\":-14},{\"note\":670.5,\"pitch\":-15},{\"note\":671,\"pitch\":-19},{\"note\":671.5,\"pitch\":-22},{\"note\":672,\"pitch\":-15},{\"note\":672.5,\"pitch\":-10},{\"note\":673,\"pitch\":-14},{\"note\":673.5,\"pitch\":-15},{\"note\":674,\"pitch\":-17},{\"note\":674.5,\"pitch\":-19},{\"note\":675,\"pitch\":-12},{\"note\":675.5,\"pitch\":-7},{\"note\":676,\"pitch\":-12},{\"note\":676.5,\"pitch\":-14},{\"note\":677,\"pitch\":-15},{\"note\":677.5,\"pitch\":-19},{\"note\":678,\"pitch\":-14},{\"note\":678.5,\"pitch\":-9},{\"note\":679,\"pitch\":-14},{\"note\":679.5,\"pitch\":-15},{\"note\":680,\"pitch\":-17},{\"note\":680.5,\"pitch\":-21},{\"note\":681,\"pitch\":-14},{\"note\":681.5,\"pitch\":-10},{\"note\":682,\"pitch\":-14},{\"note\":682.5,\"pitch\":-15},{\"note\":683,\"pitch\":-19},{\"note\":683.5,\"pitch\":-22},{\"note\":684,\"pitch\":-12},{\"note\":684.5,\"pitch\":-7},{\"note\":685,\"pitch\":-12},{\"note\":685.5,\"pitch\":-14},{\"note\":686,\"pitch\":-15},{\"note\":686.5,\"pitch\":-19},{\"note\":687,\"pitch\":-15},{\"note\":687.5,\"pitch\":-10},{\"note\":688,\"pitch\":-15},{\"note\":688.5,\"pitch\":-17},{\"note\":689,\"pitch\":-18},{\"note\":689.5,\"pitch\":-17},{\"note\":690,\"pitch\":-14},{\"note\":690.5,\"pitch\":-15},{\"note\":691,\"pitch\":-14},{\"note\":691.5,\"pitch\":-10},{\"note\":692,\"pitch\":-14},{\"note\":693,\"pitch\":-14},{\"note\":693.5,\"pitch\":-15},{\"note\":694,\"pitch\":-14},{\"note\":694.5,\"pitch\":-10},{\"note\":695,\"pitch\":-14},{\"note\":696,\"pitch\":-14},{\"note\":696.5,\"pitch\":-15},{\"note\":697,\"pitch\":-14},{\"note\":697.5,\"pitch\":-10},{\"note\":698,\"pitch\":-14},{\"note\":699,\"pitch\":-14},{\"note\":700,\"pitch\":-15},{\"note\":701,\"pitch\":-17},{\"note\":702,\"pitch\":-14},{\"note\":702.5,\"pitch\":-15},{\"note\":703,\"pitch\":-14},{\"note\":703.5,\"pitch\":-10},{\"note\":704,\"pitch\":-14},{\"note\":705,\"pitch\":-14},{\"note\":705.5,\"pitch\":-15},{\"note\":706,\"pitch\":-14},{\"note\":706.5,\"pitch\":-10},{\"note\":707,\"pitch\":-14},{\"note\":707.5,\"pitch\":-15},{\"note\":708,\"pitch\":-14},{\"note\":709,\"pitch\":-17},{\"note\":710,\"pitch\":-22},{\"note\":711,\"pitch\":-17},{\"note\":712,\"pitch\":-8}]},\"P36\":{\"id\":\"P36\",\"name\":\"Double Bass\",\"measureCount\":119,\"notes\":[{\"note\":33,\"words\":\"(cue-30))\"},{\"note\":33,\"pitch\":7},{\"note\":36,\"pitch\":-5},{\"note\":42,\"pitch\":-5},{\"note\":48,\"pitch\":-9},{\"note\":48,\"pitch\":-21},{\"note\":54,\"pitch\":-9},{\"note\":54,\"pitch\":-21},{\"note\":60,\"pitch\":-17},{\"note\":66,\"pitch\":-17},{\"note\":126,\"pitch\":-9},{\"note\":126,\"words\":\"(cue-13)\"},{\"note\":126,\"words\":\"pizz.\"},{\"note\":132,\"pitch\":-17},{\"note\":138,\"pitch\":-21},{\"note\":144,\"words\":\"arco\"},{\"note\":144,\"pitch\":-5},{\"note\":144,\"words\":\"(cue-102)\"},{\"note\":147,\"pitch\":0},{\"note\":150,\"pitch\":-5},{\"note\":156,\"pitch\":-5},{\"note\":159,\"pitch\":-9},{\"note\":162,\"pitch\":-14},{\"note\":165,\"pitch\":-7},{\"note\":168,\"pitch\":-12},{\"note\":171,\"pitch\":-17},{\"note\":174,\"pitch\":-14},{\"note\":177,\"pitch\":-7},{\"note\":180,\"pitch\":-9},{\"note\":183,\"pitch\":-14},{\"note\":186,\"pitch\":-7},{\"note\":192,\"pitch\":-12},{\"note\":195,\"pitch\":-5},{\"note\":198,\"pitch\":-7},{\"note\":201,\"pitch\":-5},{\"note\":204,\"pitch\":-9},{\"note\":207,\"pitch\":-14},{\"note\":210,\"pitch\":-10},{\"note\":213,\"pitch\":-7},{\"note\":216,\"pitch\":-12},{\"note\":219,\"pitch\":-17},{\"note\":222,\"pitch\":-7},{\"note\":225,\"pitch\":-5},{\"note\":226.5,\"pitch\":-7},{\"note\":228,\"pitch\":-9},{\"note\":231,\"pitch\":-14},{\"note\":234,\"pitch\":-7},{\"note\":237,\"pitch\":-10},{\"note\":240,\"pitch\":-10},{\"note\":270,\"pitch\":-17},{\"note\":276,\"pitch\":-17},{\"note\":282,\"pitch\":-17},{\"note\":294,\"pitch\":-17},{\"note\":300,\"pitch\":-17},{\"note\":306,\"pitch\":-17},{\"note\":312,\"pitch\":-17},{\"note\":318,\"pitch\":-17},{\"note\":324,\"pitch\":-17},{\"note\":342,\"words\":\"(off the string)\"},{\"note\":342,\"words\":\"(cue-84)\"},{\"note\":342,\"pitch\":-5},{\"note\":342.5,\"pitch\":-5},{\"note\":343,\"pitch\":-5},{\"note\":343.5,\"pitch\":-5},{\"note\":344,\"pitch\":-5},{\"note\":344.5,\"pitch\":-5},{\"note\":345,\"pitch\":-6},{\"note\":345.5,\"pitch\":-6},{\"note\":346,\"pitch\":-6},{\"note\":346.5,\"pitch\":-6},{\"note\":347,\"pitch\":-6},{\"note\":347.5,\"pitch\":-6},{\"note\":348,\"pitch\":-5},{\"note\":348.5,\"pitch\":-5},{\"note\":349,\"pitch\":-5},{\"note\":349.5,\"pitch\":-5},{\"note\":350,\"pitch\":-5},{\"note\":350.5,\"pitch\":-5},{\"note\":351,\"pitch\":-5},{\"note\":351.5,\"pitch\":-5},{\"note\":352,\"pitch\":-15},{\"note\":352.5,\"pitch\":-15},{\"note\":353,\"pitch\":-15},{\"note\":353.5,\"pitch\":-15},{\"note\":354,\"pitch\":-14},{\"note\":354.5,\"pitch\":-14},{\"note\":355,\"pitch\":-14},{\"note\":355.5,\"pitch\":-14},{\"note\":356,\"pitch\":-14},{\"note\":356.5,\"pitch\":-14},{\"note\":357,\"pitch\":-14},{\"note\":357.5,\"pitch\":-14},{\"note\":358,\"pitch\":-10},{\"note\":358.5,\"pitch\":-10},{\"note\":359,\"pitch\":-10},{\"note\":359.5,\"pitch\":-10},{\"note\":360,\"pitch\":-7},{\"note\":360.5,\"pitch\":-7},{\"note\":361,\"pitch\":-7},{\"note\":361.5,\"pitch\":-7},{\"note\":362,\"pitch\":-7},{\"note\":362.5,\"pitch\":-7},{\"note\":363,\"pitch\":-7},{\"note\":363.5,\"pitch\":-7},{\"note\":364,\"pitch\":-7},{\"note\":364.5,\"pitch\":-7},{\"note\":365,\"pitch\":-7},{\"note\":365.5,\"pitch\":-7},{\"note\":366,\"pitch\":0},{\"note\":366.5,\"pitch\":0},{\"note\":367,\"pitch\":0},{\"note\":367.5,\"pitch\":0},{\"note\":368,\"pitch\":0},{\"note\":368.5,\"pitch\":0},{\"note\":369,\"pitch\":-2},{\"note\":369.5,\"pitch\":-2},{\"note\":370,\"pitch\":-2},{\"note\":370.5,\"pitch\":-2},{\"note\":371,\"pitch\":-2},{\"note\":371.5,\"pitch\":-2},{\"note\":372,\"pitch\":-7},{\"note\":372.5,\"pitch\":-7},{\"note\":373,\"pitch\":-7},{\"note\":373.5,\"pitch\":-7},{\"note\":374,\"pitch\":-7},{\"note\":374.5,\"pitch\":-7},{\"note\":375,\"pitch\":-5},{\"note\":375.5,\"pitch\":-5},{\"note\":376,\"pitch\":-5},{\"note\":376.5,\"pitch\":-7},{\"note\":377,\"pitch\":-7},{\"note\":377.5,\"pitch\":-7},{\"note\":378,\"pitch\":-9},{\"note\":378.5,\"pitch\":-9},{\"note\":379,\"pitch\":-9},{\"note\":379.5,\"pitch\":-9},{\"note\":380,\"pitch\":-9},{\"note\":380.5,\"pitch\":-9},{\"note\":381,\"pitch\":-14},{\"note\":381.5,\"pitch\":-14},{\"note\":382,\"pitch\":-14},{\"note\":382.5,\"pitch\":-14},{\"note\":383,\"pitch\":-14},{\"note\":383.5,\"pitch\":-14},{\"note\":384,\"pitch\":-10},{\"note\":384.5,\"pitch\":-10},{\"note\":385,\"pitch\":-10},{\"note\":385.5,\"pitch\":-10},{\"note\":386,\"pitch\":-10},{\"note\":386.5,\"pitch\":-10},{\"note\":387,\"pitch\":-7},{\"note\":387.5,\"pitch\":-7},{\"note\":388,\"pitch\":-7},{\"note\":388.5,\"pitch\":-7},{\"note\":389,\"pitch\":-7},{\"note\":389.5,\"pitch\":-7},{\"note\":390,\"pitch\":-12},{\"note\":393,\"pitch\":-10},{\"note\":396,\"pitch\":-9},{\"note\":402,\"pitch\":-12},{\"note\":405,\"pitch\":-10},{\"note\":408,\"pitch\":-9},{\"note\":420,\"pitch\":-9},{\"note\":420,\"pitch\":-21},{\"note\":426,\"pitch\":-17},{\"note\":456,\"words\":\"pizz.\"},{\"note\":456,\"pitch\":-5},{\"note\":459,\"pitch\":-17},{\"note\":462,\"pitch\":3},{\"note\":465,\"pitch\":-9},{\"note\":468,\"pitch\":-17},{\"note\":471,\"pitch\":-5},{\"note\":474,\"pitch\":-9},{\"note\":477,\"pitch\":3},{\"note\":480,\"pitch\":-21},{\"note\":481,\"pitch\":-21},{\"note\":482,\"pitch\":-9},{\"note\":483,\"pitch\":-9},{\"note\":484,\"pitch\":-9},{\"note\":485,\"pitch\":-9},{\"note\":486,\"pitch\":-21},{\"note\":488,\"pitch\":-21},{\"note\":489,\"pitch\":-21},{\"note\":490,\"pitch\":-21},{\"note\":491,\"pitch\":-21},{\"note\":492,\"pitch\":-21},{\"note\":493.5,\"pitch\":-21},{\"note\":495,\"pitch\":-21},{\"note\":498,\"pitch\":-17},{\"note\":501,\"pitch\":-5},{\"note\":504,\"pitch\":-17},{\"note\":507,\"pitch\":-5},{\"note\":558,\"pitch\":-14},{\"note\":558,\"words\":\"arco\"},{\"note\":561,\"pitch\":-10},{\"note\":564,\"pitch\":-12},{\"note\":566,\"pitch\":-10},{\"note\":567,\"pitch\":-9},{\"note\":582,\"pitch\":-17},{\"note\":588,\"pitch\":-9},{\"note\":588,\"pitch\":-21},{\"note\":594,\"pitch\":-17},{\"note\":594,\"words\":\"(cue 114)\"},{\"note\":597,\"pitch\":-12},{\"note\":600,\"pitch\":-17},{\"note\":606,\"pitch\":-17},{\"note\":609,\"pitch\":-9},{\"note\":612,\"pitch\":-14},{\"note\":615,\"pitch\":-7},{\"note\":618,\"pitch\":-12},{\"note\":621,\"pitch\":-14},{\"note\":624,\"pitch\":-10},{\"note\":627,\"pitch\":-9},{\"note\":630,\"pitch\":-14},{\"note\":636,\"pitch\":-7},{\"note\":642,\"pitch\":-12},{\"note\":645,\"pitch\":-14},{\"note\":648,\"pitch\":-19},{\"note\":651,\"pitch\":-17},{\"note\":654,\"pitch\":-9},{\"note\":657,\"pitch\":-14},{\"note\":660,\"pitch\":-10},{\"note\":663,\"pitch\":-19},{\"note\":666,\"pitch\":-12},{\"note\":669,\"pitch\":-14},{\"note\":672,\"pitch\":-10},{\"note\":675,\"pitch\":-7},{\"note\":678,\"pitch\":-9},{\"note\":681,\"pitch\":-14},{\"note\":684,\"pitch\":-19},{\"note\":687,\"pitch\":-10},{\"note\":690,\"pitch\":-5},{\"note\":693,\"pitch\":-14},{\"note\":696,\"pitch\":-9},{\"note\":699,\"pitch\":-5},{\"note\":702,\"pitch\":-5},{\"note\":705,\"pitch\":-9},{\"note\":708,\"pitch\":-2},{\"note\":709,\"pitch\":-5},{\"note\":710,\"pitch\":-10},{\"note\":711,\"pitch\":-12}]},\"P37\":{\"id\":\"P37\",\"name\":\"Biome\",\"measureCount\":119,\"notes\":[{\"note\":54,\"pitch\":null},{\"note\":54,\"words\":\"(lake)\"},{\"note\":120,\"words\":\"(hall)\"},{\"note\":120,\"pitch\":null},{\"note\":144,\"words\":\"(desert)\"},{\"note\":144,\"pitch\":null},{\"note\":246,\"words\":\"(hall)\"},{\"note\":246,\"pitch\":null},{\"note\":270,\"words\":\"(forest)\"},{\"note\":270,\"pitch\":null},{\"note\":306,\"words\":\"(hall)\"},{\"note\":306,\"pitch\":null},{\"note\":342,\"words\":\"(mountain)\"},{\"note\":342,\"pitch\":null},{\"note\":432,\"words\":\"(hall)\"},{\"note\":432,\"pitch\":null},{\"note\":444,\"words\":\"(bus)\"},{\"note\":444,\"pitch\":null},{\"note\":516,\"words\":\"(bookstore)\"},{\"note\":516,\"pitch\":null},{\"note\":582,\"words\":\"(hall)\"},{\"note\":582,\"pitch\":null},{\"note\":594,\"words\":\"(recap)\"},{\"note\":594,\"pitch\":null}]}}}");

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
function countdown(cueAt, countIn, spriteUrl, playNotes) {
    var cues = [];
    cues.push([cueAt - countIn, interactive_instrument_1.InstrumentState.CUE_READY, spriteUrl]);
    cues.push([cueAt, interactive_instrument_1.InstrumentState.HIT, playNotes]);
    return cues;
}
var getSoloCues = function (spriteUrl) { return function (notes) {
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
            .map(function (_a) {
            var note = _a.note;
            return note;
        })
            .filter(function (v, i, arr) { return arr.indexOf(v) === i; }); // Unique
        playNotes.sort(function (a, b) { return Math.sign(a - b); });
        return countdown(note, countIn, spriteUrl, playNotes);
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
        cues: getSoloCues(insicon_cello_svg_1.default)(__spreadArrays(score_export_json_1.parts.P34.notes, score_export_json_1.parts.P35.notes // Cell div
        )),
    },
    {
        name: "bass",
        graphicsPath: instrumentsection_svg_path_path_bass_svg_path_as_graphics_1.default,
        color: 0xdbdbdb,
        cues: getSoloCues(insicon_bass_svg_1.default)(__spreadArrays(score_export_json_1.parts.P36.notes // Double bass
        )),
    },
    {
        name: "brass",
        graphicsPath: instrumentsection_svg_path_path_brass_svg_path_as_graphics_1.default,
        color: 0xe8e8e8,
        cues: __spreadArrays(getSoloCues(insicon_trumpet_svg_1.default)(score_export_json_1.parts.P10.notes), getSoloCues(insicon_trumpet_svg_1.default)(score_export_json_1.parts.P11.notes), getSoloCues(insicon_brass_svg_1.default)(score_export_json_1.parts.P12.notes), getSoloCues(insicon_brass_svg_1.default)(score_export_json_1.parts.P13.notes), getSoloCues(insicon_brass_svg_1.default)(score_export_json_1.parts.P14.notes)),
    },
    {
        name: "harp",
        graphicsPath: instrumentsection_svg_path_path_harp_svg_path_as_graphics_1.default,
        color: 0xdbdbdb,
        cues: getSoloCues(insicon_harp_svg_1.default)(__spreadArrays(score_export_json_1.parts.P21.notes)),
    },
    {
        name: "horn",
        graphicsPath: instrumentsection_svg_path_path_horn_svg_path_as_graphics_1.default,
        color: 0xdbdbdb,
        cues: getSoloCues(insicon_horn_svg_1.default)(__spreadArrays(score_export_json_1.parts.P8.notes, score_export_json_1.parts.P9.notes)),
    },
    {
        name: "percussion",
        graphicsPath: instrumentsection_svg_path_path_percussion_svg_path_as_graphics_1.default,
        color: 0xe8e8e8,
        cues: __spreadArrays(getSoloCues(insicon_timpani_svg_1.default)(score_export_json_1.parts.P15.notes), getSoloCues(insicon_cymbals_svg_1.default)(score_export_json_1.parts.P16.notes), getSoloCues(insicon_tamtam_svg_1.default)(score_export_json_1.parts.P17.notes)),
    },
    {
        name: "piano",
        graphicsPath: instrumentsection_svg_path_path_piano_svg_path_as_graphics_1.default,
        color: 0xdbdbdb,
        cues: getSoloCues(insicon_keyboard_svg_1.default)(__spreadArrays(score_export_json_1.parts.P18.notes, score_export_json_1.parts.P19.notes)),
    },
    {
        name: "viola",
        graphicsPath: instrumentsection_svg_path_path_viola_svg_path_as_graphics_1.default,
        color: 0xe8e8e8,
        cues: getSoloCues(insicon_string_svg_1.default)(__spreadArrays(score_export_json_1.parts.P26.notes, score_export_json_1.parts.P32.notes, score_export_json_1.parts.P33.notes)),
    },
    {
        name: "violin_1",
        graphicsPath: instrumentsection_svg_path_path_violin_1_svg_path_as_graphics_1.default,
        color: 0xe8e8e8,
        cues: getSoloCues(insicon_string_svg_1.default)(__spreadArrays(score_export_json_1.parts.P24.notes, score_export_json_1.parts.P28.notes, score_export_json_1.parts.P29.notes)),
    },
    {
        name: "violin_2",
        graphicsPath: instrumentsection_svg_path_path_violin_2_svg_path_as_graphics_1.default,
        color: 0xdbdbdb,
        cues: getSoloCues(insicon_string_svg_1.default)(__spreadArrays(score_export_json_1.parts.P25.notes, score_export_json_1.parts.P30.notes, score_export_json_1.parts.P31.notes)),
    },
    {
        name: "woodwind",
        graphicsPath: instrumentsection_svg_path_path_woodwind_svg_path_as_graphics_1.default,
        color: 0xe8e8e8,
        cues: __spreadArrays(getSoloCues(insicon_flute_svg_1.default)(score_export_json_1.parts.P1.notes), getSoloCues(insicon_oboe_svg_1.default)(score_export_json_1.parts.P2.notes), getSoloCues(insicon_clarinet_svg_1.default)(score_export_json_1.parts.P4.notes), getSoloCues(insicon_clarinet_svg_1.default)(score_export_json_1.parts.P5.notes), getSoloCues(insicon_clarinet_svg_1.default)(score_export_json_1.parts.P6.notes), getSoloCues(insicon_clarinet_svg_1.default)(score_export_json_1.parts.P7.notes)),
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