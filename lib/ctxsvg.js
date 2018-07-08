(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ctxsvg", [], factory);
	else if(typeof exports === 'object')
		exports["ctxsvg"] = factory();
	else
		root["ctxsvg"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ctxsvg.ts":
/*!***********************!*\
  !*** ./src/ctxsvg.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar path_1 = __webpack_require__(/*! ./path */ \"./src/path.ts\");\r\nvar context = /** @class */ (function () {\r\n    function context(selector) {\r\n        this.options = {};\r\n        this.svg = document.querySelector(selector);\r\n    }\r\n    context.prototype.beginPath = function () {\r\n        //this.options = {};\r\n        var p = this.svg.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'path'));\r\n        this.path = new path_1.Path(p);\r\n    };\r\n    context.prototype.moveTo = function (x, y) {\r\n        this.path.path += \"M\" + x + \" \" + y + \" \";\r\n    };\r\n    context.prototype.lineTo = function (x, y) {\r\n        this.path.path += \"L\" + x + \" \" + y + \" \";\r\n    };\r\n    context.prototype.stroke = function () {\r\n        this.path.stroke(this.options);\r\n    };\r\n    context.prototype.fill = function () {\r\n        this.path.fill(this.options);\r\n    };\r\n    context.prototype.closePath = function () {\r\n        this.path.path += 'Z';\r\n    };\r\n    context.prototype.fillRect = function (x, y, width, height) {\r\n        this.beginPath();\r\n        this.moveTo(x, y);\r\n        this.lineTo(x + width, y);\r\n        this.lineTo(x + width, y + height);\r\n        this.lineTo(x, y + height);\r\n        this.closePath();\r\n        this.fill();\r\n    };\r\n    Object.defineProperty(context.prototype, \"strokeStyle\", {\r\n        set: function (style) {\r\n            this.options.stroke = style;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(context.prototype, \"lineWidth\", {\r\n        set: function (style) {\r\n            this.options.strokeWidth = style.toString();\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(context.prototype, \"fillStyle\", {\r\n        set: function (style) {\r\n            this.options.fill = style.toString();\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return context;\r\n}());\r\nexports.default = context;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3R4c3ZnLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3R4c3ZnLy4vc3JjL2N0eHN2Zy50cz82OGE0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBwYXRoXzEgPSByZXF1aXJlKFwiLi9wYXRoXCIpO1xyXG52YXIgY29udGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGNvbnRleHQoc2VsZWN0b3IpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7fTtcclxuICAgICAgICB0aGlzLnN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgfVxyXG4gICAgY29udGV4dC5wcm90b3R5cGUuYmVnaW5QYXRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vdGhpcy5vcHRpb25zID0ge307XHJcbiAgICAgICAgdmFyIHAgPSB0aGlzLnN2Zy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKSk7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gbmV3IHBhdGhfMS5QYXRoKHApO1xyXG4gICAgfTtcclxuICAgIGNvbnRleHQucHJvdG90eXBlLm1vdmVUbyA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5wYXRoLnBhdGggKz0gXCJNXCIgKyB4ICsgXCIgXCIgKyB5ICsgXCIgXCI7XHJcbiAgICB9O1xyXG4gICAgY29udGV4dC5wcm90b3R5cGUubGluZVRvID0gZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnBhdGgucGF0aCArPSBcIkxcIiArIHggKyBcIiBcIiArIHkgKyBcIiBcIjtcclxuICAgIH07XHJcbiAgICBjb250ZXh0LnByb3RvdHlwZS5zdHJva2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoLnN0cm9rZSh0aGlzLm9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIGNvbnRleHQucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoLmZpbGwodGhpcy5vcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBjb250ZXh0LnByb3RvdHlwZS5jbG9zZVBhdGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoLnBhdGggKz0gJ1onO1xyXG4gICAgfTtcclxuICAgIGNvbnRleHQucHJvdG90eXBlLmZpbGxSZWN0ID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMubW92ZVRvKHgsIHkpO1xyXG4gICAgICAgIHRoaXMubGluZVRvKHggKyB3aWR0aCwgeSk7XHJcbiAgICAgICAgdGhpcy5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmxpbmVUbyh4LCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuZmlsbCgpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb250ZXh0LnByb3RvdHlwZSwgXCJzdHJva2VTdHlsZVwiLCB7XHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0cm9rZSA9IHN0eWxlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnRleHQucHJvdG90eXBlLCBcImxpbmVXaWR0aFwiLCB7XHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnN0cm9rZVdpZHRoID0gc3R5bGUudG9TdHJpbmcoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb250ZXh0LnByb3RvdHlwZSwgXCJmaWxsU3R5bGVcIiwge1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHN0eWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5maWxsID0gc3R5bGUudG9TdHJpbmcoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb250ZXh0O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBjb250ZXh0O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ctxsvg.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * ctxsvg.js\r\n * @description A tool that helps you create SVGs\r\n * @author Simon Loir\r\n * Under MIT License\r\n */\r\nvar ctxsvg_1 = __webpack_require__(/*! ./ctxsvg */ \"./src/ctxsvg.ts\");\r\nexports.SVGContext = ctxsvg_1.default;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdHhzdmcvLi9zcmMvaW5kZXgudHM/NzFiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogY3R4c3ZnLmpzXHJcbiAqIEBkZXNjcmlwdGlvbiBBIHRvb2wgdGhhdCBoZWxwcyB5b3UgY3JlYXRlIFNWR3NcclxuICogQGF1dGhvciBTaW1vbiBMb2lyXHJcbiAqIFVuZGVyIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG52YXIgY3R4c3ZnXzEgPSByZXF1aXJlKFwiLi9jdHhzdmdcIik7XHJcbmV4cG9ydHMuU1ZHQ29udGV4dCA9IGN0eHN2Z18xLmRlZmF1bHQ7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/path.ts":
/*!*********************!*\
  !*** ./src/path.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Path = /** @class */ (function () {\r\n    function Path(path) {\r\n        this.path = '';\r\n        this.node = path;\r\n    }\r\n    Path.prototype.createPath = function () {\r\n        this.node.setAttribute('d', this.path);\r\n    };\r\n    Path.prototype.stroke = function (opts) {\r\n        this.createPath();\r\n        this.node.setAttribute('stroke', opts.stroke || 'black');\r\n        this.node.setAttribute('stroke-width', opts.strokeWidth || '1');\r\n        if (!this.node.getAttribute('fill'))\r\n            this.node.setAttribute('fill', 'none');\r\n    };\r\n    Path.prototype.fill = function (opts) {\r\n        this.createPath();\r\n        this.node.setAttribute('fill', opts.fill || 'black');\r\n    };\r\n    return Path;\r\n}());\r\nexports.Path = Path;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGF0aC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2N0eHN2Zy8uL3NyYy9wYXRoLnRzPzdhOTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBhdGggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQYXRoKHBhdGgpIHtcclxuICAgICAgICB0aGlzLnBhdGggPSAnJztcclxuICAgICAgICB0aGlzLm5vZGUgPSBwYXRoO1xyXG4gICAgfVxyXG4gICAgUGF0aC5wcm90b3R5cGUuY3JlYXRlUGF0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdkJywgdGhpcy5wYXRoKTtcclxuICAgIH07XHJcbiAgICBQYXRoLnByb3RvdHlwZS5zdHJva2UgPSBmdW5jdGlvbiAob3B0cykge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUGF0aCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIG9wdHMuc3Ryb2tlIHx8ICdibGFjaycpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIG9wdHMuc3Ryb2tlV2lkdGggfHwgJzEnKTtcclxuICAgICAgICBpZiAoIXRoaXMubm9kZS5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XHJcbiAgICB9O1xyXG4gICAgUGF0aC5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIChvcHRzKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgnZmlsbCcsIG9wdHMuZmlsbCB8fCAnYmxhY2snKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGF0aDtcclxufSgpKTtcclxuZXhwb3J0cy5QYXRoID0gUGF0aDtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/path.ts\n");

/***/ })

/******/ });
});