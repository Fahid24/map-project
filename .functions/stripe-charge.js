(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'babel-plugin-transform-class-properties' imported from C:\\projects\\gatsby-projects\\mmbayarea\\babel-virtual-resolve-base.js\n    at new NodeError (C:\\projects\\gatsby-projects\\mmbayarea\\node_modules\\@babel\\core\\lib\\vendor\\import-meta-resolve.js:2240:5)\n    at packageResolve (C:\\projects\\gatsby-projects\\mmbayarea\\node_modules\\@babel\\core\\lib\\vendor\\import-meta-resolve.js:2776:9)\n    at moduleResolve (C:\\projects\\gatsby-projects\\mmbayarea\\node_modules\\@babel\\core\\lib\\vendor\\import-meta-resolve.js:2804:18)\n    at defaultResolve (C:\\projects\\gatsby-projects\\mmbayarea\\node_modules\\@babel\\core\\lib\\vendor\\import-meta-resolve.js:2835:13)\n    at C:\\projects\\gatsby-projects\\mmbayarea\\node_modules\\@babel\\core\\lib\\vendor\\import-meta-resolve.js:2855:14\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (C:\\projects\\gatsby-projects\\mmbayarea\\node_modules\\@babel\\core\\lib\\vendor\\import-meta-resolve.js:45:103)\n    at _next (C:\\projects\\gatsby-projects\\mmbayarea\\node_modules\\@babel\\core\\lib\\vendor\\import-meta-resolve.js:46:194)\n    at C:\\projects\\gatsby-projects\\mmbayarea\\node_modules\\@babel\\core\\lib\\vendor\\import-meta-resolve.js:46:364\n    at new Promise (<anonymous>)");

/***/ })
/******/ ])));