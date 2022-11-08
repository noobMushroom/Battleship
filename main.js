/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: aliceblue; }\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n\n.boatContainer {\n  display: flex;\n  align-items: center; }\n  .boatContainer .boatDisplay {\n    border: 2px solid black;\n    width: 50px;\n    height: 50px; }\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border: 1px solid black; }\n  .board .cell {\n    border: 1px solid red;\n    text-align: center;\n    cursor: pointer; }\n", "",{"version":3,"sources":["webpack://./styles/style.scss"],"names":[],"mappings":"AAAA;EACI,2BAA2B,EAAA;;AAG/B;EACI,aAAa;EACb,mBAAmB;EACnB,6BAA6B,EAAA;;AAGjC;EACI,aAAa;EACb,mBAAmB,EAAA;EAFvB;IAIQ,uBAAuB;IACvB,WAAW;IACX,YAAY,EAAA;;AAIpB;EACI,aAAa;EACb,qCAAoC;EACpC,uBAAuB,EAAA;EAH3B;IAKQ,qBAAqB;IACrB,kBAAkB;IAClB,eAAe,EAAA","sourcesContent":["body{\n    background-color: aliceblue;\n}\n\n.header{\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.boatContainer{\n    display: flex;\n    align-items: center;\n    .boatDisplay{\n        border: 2px solid black;\n        width: 50px;\n        height: 50px;\n    }\n}\n\n.board{\n    display: grid;\n    grid-template-columns: repeat(7,1fr);\n    border: 1px solid black;\n    .cell{\n        border: 1px solid red;\n        text-align: center;\n        cursor: pointer;\n    }\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/gameBoard.ts":
/*!**************************!*\
  !*** ./src/gameBoard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gameBoard = void 0;
const ship_1 = __webpack_require__(/*! ./ship */ "./src/ship.ts");
const gameBoard = (() => {
    const createBoard = () => {
        let gameBoardArray = new Array();
        for (let i = 0; i < 7; i++) {
            gameBoardArray[i] = new Array();
            for (let j = 0; j < 7; j++) {
                gameBoardArray[i][j] = { occupied: false, attacked: false, ship: { length: 0, hits: 0, isSunk: false } };
            }
        }
        ;
        return gameBoardArray;
    };
    function isInside(num) {
        if (num - 1 < 0)
            return false;
        if (num + 1 > 6)
            return false;
        return true;
    }
    const isValidSpot = (startCord, endCoord, array) => {
        for (let i = startCord[0]; i <= endCoord[0]; i++) {
            for (let j = startCord[1]; j <= endCoord[1]; j++) {
                if (isInside(i)) {
                    if (array[i - 1][j].occupied === true)
                        return false;
                }
                if (isInside(i)) {
                    if (array[i + 1][j].occupied === true)
                        return false;
                }
                if (isInside(j)) {
                    if (array[i][j + 1].occupied === true)
                        return false;
                }
                if (isInside(j)) {
                    if (array[i][j - 1].occupied === true)
                        return false;
                }
                return true;
            }
        }
    };
    const placeBoat = (coord, boat, alignment, array) => {
        let startCoord = [];
        let endCoord = [];
        if (alignment == 'horizontal') {
            startCoord = coord;
            endCoord = [coord[0], coord[1] + (boat.length - 1)];
        }
        else if (alignment == 'vertical') {
            startCoord = coord;
            endCoord = [coord[0] + (boat.length - 1), coord[1]];
        }
        if (isValidSpot(startCoord, endCoord, array)) {
            for (let i = startCoord[0]; i <= endCoord[0]; i++) {
                for (let j = startCoord[1]; j <= endCoord[1]; j++) {
                    array[i][j].occupied = true;
                    array[i][j].ship = boat;
                }
            }
        }
        console.log(array);
    };
    const receiveAttack = (value, array) => {
        let spot = array[value[0]][value[1]];
        spot.attacked = true;
        if (spot.occupied === true) {
            ship_1.ship.hit(spot.ship);
        }
        console.log(array);
    };
    return { createBoard, isValidSpot, placeBoat, receiveAttack };
})();
exports.gameBoard = gameBoard;


/***/ }),

/***/ "./src/ship.ts":
/*!*********************!*\
  !*** ./src/ship.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ship = exports.createShip = void 0;
function createShip(length) {
    return {
        length,
        hits: 0,
        isSunk: false,
    };
}
exports.createShip = createShip;
const ship = (() => {
    function hit(value) {
        if (value.hits <= value.length) {
            return value.hits += 1;
        }
        else {
            return 'you are sunk';
        }
    }
    return { hit };
})();
exports.ship = ship;


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
const gameBoard_1 = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.ts");
const ship_1 = __webpack_require__(/*! ./ship */ "./src/ship.ts");
var Ships;
(function (Ships) {
    Ships[Ships["destroyer"] = 2] = "destroyer";
    Ships[Ships["submarine"] = 3] = "submarine";
    Ships[Ships["cruiser"] = 3] = "cruiser";
    Ships[Ships["battleship"] = 4] = "battleship";
    Ships[Ships["carrier"] = 5] = "carrier";
})(Ships || (Ships = {}));
const createGame = () => {
    const board = document.createElement('div');
    board.classList.add('board');
    for (let i = 0; i <= 6; i++) {
        for (let j = 0; j <= 6; j++) {
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.setAttribute('id', `[${i},${j}]`);
            cellDiv.innerHTML = `${i},${j}`;
            board.appendChild(cellDiv);
        }
    }
    return board;
};
function startCoordArray(value) {
    let coordArray = [];
    for (let i of value) {
        if (/[0-9]/.test(i)) {
            coordArray.push(Number(i));
        }
    }
    return coordArray;
}
function showBoat(coord, boat, alignment) {
    let startCoord = [];
    let endCoord = [];
    if (alignment == 'horizontal') {
        console.log('i am from horizontal');
        startCoord = coord;
        endCoord = [coord[0], coord[1] + (boat.length - 1)];
    }
    else if (alignment == 'vertical') {
        console.log('i am from the vertical');
        startCoord = coord;
        endCoord = [coord[0] + (boat.length - 1), coord[1]];
    }
    console.log('thisis the ', startCoord);
    console.log('this', endCoord);
    for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        for (let j = startCoord[1]; j <= endCoord[1]; j++) {
            let shipDiv = document.getElementById(`[${i},${j}]`);
            shipDiv === null || shipDiv === void 0 ? void 0 : shipDiv.setAttribute('style', 'background:pink');
        }
    }
}
function clickHandler(boardArray) {
    let div = document.querySelectorAll('.cell');
    div.forEach(div => {
        div.addEventListener('click', (e) => {
            const target = e.target;
            let coordinates = target.id;
            let coordArray = startCoordArray(coordinates);
            target.style.background = 'red';
            if (boardArray[coordArray[0]][coordArray[1]].attacked === false) {
                gameBoard_1.gameBoard.receiveAttack(coordArray, boardArray);
            }
        });
    });
}
function alignment() {
    let alignment = 'horizontal';
    const btn = document.getElementById("alignmentBtn");
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
        if (alignment === 'horizontal') {
            btn.textContent = 'vertical';
            alignment = 'vertical';
        }
        else {
            btn.textContent = 'horizontal';
            alignment = 'horizontal';
        }
        console.log(alignment);
    });
    return alignment;
}
function boatDisplay(length) {
    const boatDiv = document.getElementById('boatDiv');
    boatDiv.innerHTML = '';
    for (let i = 0; i < length; i++) {
        let cell = document.createElement('div');
        cell.classList.add('boatDisplay');
        boatDiv.appendChild(cell);
    }
}
function boat() {
    let submarine = (0, ship_1.createShip)(Ships.submarine);
    let battleship = (0, ship_1.createShip)(Ships.battleship);
    let cruiser = (0, ship_1.createShip)(Ships.cruiser);
    let carrier = (0, ship_1.createShip)(Ships.carrier);
    let destroyer = (0, ship_1.createShip)(Ships.destroyer);
    let shipArray = [submarine, battleship, cruiser, carrier, destroyer];
    return shipArray;
}
function placeShip(array) {
    let shipArray = boat();
    let cells = document.querySelectorAll('.cell');
    let count = 0;
    if (count > 5)
        return;
    boatDisplay(shipArray[count].length);
    cells.forEach(div => {
        div.addEventListener('click', (e) => {
            let shipAlignment = alignment();
            const target = e.target;
            let coordinates = target.id;
            let startCoord = startCoordArray(coordinates);
            console.log(startCoord);
            gameBoard_1.gameBoard.placeBoat(startCoord, shipArray[count], shipAlignment, array);
            showBoat(startCoord, shipArray[count], shipAlignment);
            count += 1;
            boatDisplay(shipArray[count].length);
        });
    });
}
function header() {
    const head = document.createElement('header');
    head.classList.add("header");
    head.innerHTML = `<h1>cool?</h1>`;
    const boatDiv = document.createElement('div');
    boatDiv.textContent = 'here will have boats';
    boatDiv.classList.add('boatContainer');
    boatDiv.setAttribute('id', 'boatDiv');
    head.appendChild(boatDiv);
    const alignmentBtn = document.createElement('button');
    alignmentBtn.setAttribute('id', "alignmentBtn");
    alignmentBtn.classList.add('alignmentBtn');
    alignmentBtn.textContent = 'horizontal';
    head.appendChild(alignmentBtn);
    return head;
}
function startGame() {
    const homePage = document.querySelector('body');
    homePage.appendChild(header());
    let board = gameBoard_1.gameBoard.createBoard();
    homePage.appendChild(createGame());
    // clickHandler(board)
    placeShip(board);
}
startGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zdHlsZXMvc3R5bGUuc2Nzcz83ZGUyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgfVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcblxcbi5ib2F0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuYm9hdENvbnRhaW5lciAuYm9hdERpc3BsYXkge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDsgfVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyB9XFxuICAuYm9hcmQgLmNlbGwge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGVzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUZ2QjtJQUlRLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQUlwQjtFQUNJLGFBQWE7RUFDYixxQ0FBb0M7RUFDcEMsdUJBQXVCLEVBQUE7RUFIM0I7SUFLUSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYm9hdENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLmJvYXREaXNwbGF5e1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgfVxcbn1cXG5cXG4uYm9hcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsMWZyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIC5jZWxse1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nYW1lQm9hcmQgPSB2b2lkIDA7XG5jb25zdCBzaGlwXzEgPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xuY29uc3QgZ2FtZUJvYXJkID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGdhbWVCb2FyZEFycmF5ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBnYW1lQm9hcmRBcnJheVtpXSA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmRBcnJheVtpXVtqXSA9IHsgb2NjdXBpZWQ6IGZhbHNlLCBhdHRhY2tlZDogZmFsc2UsIHNoaXA6IHsgbGVuZ3RoOiAwLCBoaXRzOiAwLCBpc1N1bms6IGZhbHNlIH0gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiBnYW1lQm9hcmRBcnJheTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGlzSW5zaWRlKG51bSkge1xuICAgICAgICBpZiAobnVtIC0gMSA8IDApXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChudW0gKyAxID4gNilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGlzVmFsaWRTcG90ID0gKHN0YXJ0Q29yZCwgZW5kQ29vcmQsIGFycmF5KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydENvcmRbMF07IGkgPD0gZW5kQ29vcmRbMF07IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0Q29yZFsxXTsgaiA8PSBlbmRDb29yZFsxXTsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzSW5zaWRlKGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJheVtpIC0gMV1bal0ub2NjdXBpZWQgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc0luc2lkZShpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaSArIDFdW2pdLm9jY3VwaWVkID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNJbnNpZGUoaikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5W2ldW2ogKyAxXS5vY2N1cGllZCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzSW5zaWRlKGopKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXVtqIC0gMV0ub2NjdXBpZWQgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBwbGFjZUJvYXQgPSAoY29vcmQsIGJvYXQsIGFsaWdubWVudCwgYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IHN0YXJ0Q29vcmQgPSBbXTtcbiAgICAgICAgbGV0IGVuZENvb3JkID0gW107XG4gICAgICAgIGlmIChhbGlnbm1lbnQgPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBzdGFydENvb3JkID0gY29vcmQ7XG4gICAgICAgICAgICBlbmRDb29yZCA9IFtjb29yZFswXSwgY29vcmRbMV0gKyAoYm9hdC5sZW5ndGggLSAxKV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWxpZ25tZW50ID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHN0YXJ0Q29vcmQgPSBjb29yZDtcbiAgICAgICAgICAgIGVuZENvb3JkID0gW2Nvb3JkWzBdICsgKGJvYXQubGVuZ3RoIC0gMSksIGNvb3JkWzFdXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNWYWxpZFNwb3Qoc3RhcnRDb29yZCwgZW5kQ29vcmQsIGFycmF5KSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Q29vcmRbMF07IGkgPD0gZW5kQ29vcmRbMF07IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBzdGFydENvb3JkWzFdOyBqIDw9IGVuZENvb3JkWzFdOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlbaV1bal0ub2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBhcnJheVtpXVtqXS5zaGlwID0gYm9hdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYXJyYXkpO1xuICAgIH07XG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh2YWx1ZSwgYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IHNwb3QgPSBhcnJheVt2YWx1ZVswXV1bdmFsdWVbMV1dO1xuICAgICAgICBzcG90LmF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNwb3Qub2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNoaXBfMS5zaGlwLmhpdChzcG90LnNoaXApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5KTtcbiAgICB9O1xuICAgIHJldHVybiB7IGNyZWF0ZUJvYXJkLCBpc1ZhbGlkU3BvdCwgcGxhY2VCb2F0LCByZWNlaXZlQXR0YWNrIH07XG59KSgpO1xuZXhwb3J0cy5nYW1lQm9hcmQgPSBnYW1lQm9hcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2hpcCA9IGV4cG9ydHMuY3JlYXRlU2hpcCA9IHZvaWQgMDtcbmZ1bmN0aW9uIGNyZWF0ZVNoaXAobGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBoaXRzOiAwLFxuICAgICAgICBpc1N1bms6IGZhbHNlLFxuICAgIH07XG59XG5leHBvcnRzLmNyZWF0ZVNoaXAgPSBjcmVhdGVTaGlwO1xuY29uc3Qgc2hpcCA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaGl0KHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5oaXRzIDw9IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmhpdHMgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAneW91IGFyZSBzdW5rJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBoaXQgfTtcbn0pKCk7XG5leHBvcnRzLnNoaXAgPSBzaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi4vc3R5bGVzL3N0eWxlLnNjc3NcIik7XG5jb25zdCBnYW1lQm9hcmRfMSA9IHJlcXVpcmUoXCIuL2dhbWVCb2FyZFwiKTtcbmNvbnN0IHNoaXBfMSA9IHJlcXVpcmUoXCIuL3NoaXBcIik7XG52YXIgU2hpcHM7XG4oZnVuY3Rpb24gKFNoaXBzKSB7XG4gICAgU2hpcHNbU2hpcHNbXCJkZXN0cm95ZXJcIl0gPSAyXSA9IFwiZGVzdHJveWVyXCI7XG4gICAgU2hpcHNbU2hpcHNbXCJzdWJtYXJpbmVcIl0gPSAzXSA9IFwic3VibWFyaW5lXCI7XG4gICAgU2hpcHNbU2hpcHNbXCJjcnVpc2VyXCJdID0gM10gPSBcImNydWlzZXJcIjtcbiAgICBTaGlwc1tTaGlwc1tcImJhdHRsZXNoaXBcIl0gPSA0XSA9IFwiYmF0dGxlc2hpcFwiO1xuICAgIFNoaXBzW1NoaXBzW1wiY2FycmllclwiXSA9IDVdID0gXCJjYXJyaWVyXCI7XG59KShTaGlwcyB8fCAoU2hpcHMgPSB7fSkpO1xuY29uc3QgY3JlYXRlR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDY7IGorKykge1xuICAgICAgICAgICAgbGV0IGNlbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgY2VsbERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYFske2l9LCR7an1dYCk7XG4gICAgICAgICAgICBjZWxsRGl2LmlubmVySFRNTCA9IGAke2l9LCR7an1gO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbERpdik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xufTtcbmZ1bmN0aW9uIHN0YXJ0Q29vcmRBcnJheSh2YWx1ZSkge1xuICAgIGxldCBjb29yZEFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSBvZiB2YWx1ZSkge1xuICAgICAgICBpZiAoL1swLTldLy50ZXN0KGkpKSB7XG4gICAgICAgICAgICBjb29yZEFycmF5LnB1c2goTnVtYmVyKGkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29vcmRBcnJheTtcbn1cbmZ1bmN0aW9uIHNob3dCb2F0KGNvb3JkLCBib2F0LCBhbGlnbm1lbnQpIHtcbiAgICBsZXQgc3RhcnRDb29yZCA9IFtdO1xuICAgIGxldCBlbmRDb29yZCA9IFtdO1xuICAgIGlmIChhbGlnbm1lbnQgPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpIGFtIGZyb20gaG9yaXpvbnRhbCcpO1xuICAgICAgICBzdGFydENvb3JkID0gY29vcmQ7XG4gICAgICAgIGVuZENvb3JkID0gW2Nvb3JkWzBdLCBjb29yZFsxXSArIChib2F0Lmxlbmd0aCAtIDEpXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoYWxpZ25tZW50ID09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2kgYW0gZnJvbSB0aGUgdmVydGljYWwnKTtcbiAgICAgICAgc3RhcnRDb29yZCA9IGNvb3JkO1xuICAgICAgICBlbmRDb29yZCA9IFtjb29yZFswXSArIChib2F0Lmxlbmd0aCAtIDEpLCBjb29yZFsxXV07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd0aGlzaXMgdGhlICcsIHN0YXJ0Q29vcmQpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzJywgZW5kQ29vcmQpO1xuICAgIGZvciAobGV0IGkgPSBzdGFydENvb3JkWzBdOyBpIDw9IGVuZENvb3JkWzBdOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0Q29vcmRbMV07IGogPD0gZW5kQ29vcmRbMV07IGorKykge1xuICAgICAgICAgICAgbGV0IHNoaXBEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgWyR7aX0sJHtqfV1gKTtcbiAgICAgICAgICAgIHNoaXBEaXYgPT09IG51bGwgfHwgc2hpcERpdiA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2hpcERpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQ6cGluaycpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGJvYXJkQXJyYXkpIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgICBkaXYuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB0YXJnZXQuaWQ7XG4gICAgICAgICAgICBsZXQgY29vcmRBcnJheSA9IHN0YXJ0Q29vcmRBcnJheShjb29yZGluYXRlcyk7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICdyZWQnO1xuICAgICAgICAgICAgaWYgKGJvYXJkQXJyYXlbY29vcmRBcnJheVswXV1bY29vcmRBcnJheVsxXV0uYXR0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZ2FtZUJvYXJkXzEuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRBcnJheSwgYm9hcmRBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gYWxpZ25tZW50KCkge1xuICAgIGxldCBhbGlnbm1lbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGlnbm1lbnRCdG5cIik7XG4gICAgYnRuID09PSBudWxsIHx8IGJ0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoYWxpZ25tZW50ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgICBhbGlnbm1lbnQgPSAndmVydGljYWwnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ2hvcml6b250YWwnO1xuICAgICAgICAgICAgYWxpZ25tZW50ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGFsaWdubWVudCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsaWdubWVudDtcbn1cbmZ1bmN0aW9uIGJvYXREaXNwbGF5KGxlbmd0aCkge1xuICAgIGNvbnN0IGJvYXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hdERpdicpO1xuICAgIGJvYXREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2JvYXREaXNwbGF5Jyk7XG4gICAgICAgIGJvYXREaXYuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gYm9hdCgpIHtcbiAgICBsZXQgc3VibWFyaW5lID0gKDAsIHNoaXBfMS5jcmVhdGVTaGlwKShTaGlwcy5zdWJtYXJpbmUpO1xuICAgIGxldCBiYXR0bGVzaGlwID0gKDAsIHNoaXBfMS5jcmVhdGVTaGlwKShTaGlwcy5iYXR0bGVzaGlwKTtcbiAgICBsZXQgY3J1aXNlciA9ICgwLCBzaGlwXzEuY3JlYXRlU2hpcCkoU2hpcHMuY3J1aXNlcik7XG4gICAgbGV0IGNhcnJpZXIgPSAoMCwgc2hpcF8xLmNyZWF0ZVNoaXApKFNoaXBzLmNhcnJpZXIpO1xuICAgIGxldCBkZXN0cm95ZXIgPSAoMCwgc2hpcF8xLmNyZWF0ZVNoaXApKFNoaXBzLmRlc3Ryb3llcik7XG4gICAgbGV0IHNoaXBBcnJheSA9IFtzdWJtYXJpbmUsIGJhdHRsZXNoaXAsIGNydWlzZXIsIGNhcnJpZXIsIGRlc3Ryb3llcl07XG4gICAgcmV0dXJuIHNoaXBBcnJheTtcbn1cbmZ1bmN0aW9uIHBsYWNlU2hpcChhcnJheSkge1xuICAgIGxldCBzaGlwQXJyYXkgPSBib2F0KCk7XG4gICAgbGV0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGlmIChjb3VudCA+IDUpXG4gICAgICAgIHJldHVybjtcbiAgICBib2F0RGlzcGxheShzaGlwQXJyYXlbY291bnRdLmxlbmd0aCk7XG4gICAgY2VsbHMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHNoaXBBbGlnbm1lbnQgPSBhbGlnbm1lbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgbGV0IHN0YXJ0Q29vcmQgPSBzdGFydENvb3JkQXJyYXkoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhcnRDb29yZCk7XG4gICAgICAgICAgICBnYW1lQm9hcmRfMS5nYW1lQm9hcmQucGxhY2VCb2F0KHN0YXJ0Q29vcmQsIHNoaXBBcnJheVtjb3VudF0sIHNoaXBBbGlnbm1lbnQsIGFycmF5KTtcbiAgICAgICAgICAgIHNob3dCb2F0KHN0YXJ0Q29vcmQsIHNoaXBBcnJheVtjb3VudF0sIHNoaXBBbGlnbm1lbnQpO1xuICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgICAgIGJvYXREaXNwbGF5KHNoaXBBcnJheVtjb3VudF0ubGVuZ3RoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICBoZWFkLmlubmVySFRNTCA9IGA8aDE+Y29vbD88L2gxPmA7XG4gICAgY29uc3QgYm9hdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXREaXYudGV4dENvbnRlbnQgPSAnaGVyZSB3aWxsIGhhdmUgYm9hdHMnO1xuICAgIGJvYXREaXYuY2xhc3NMaXN0LmFkZCgnYm9hdENvbnRhaW5lcicpO1xuICAgIGJvYXREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdib2F0RGl2Jyk7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChib2F0RGl2KTtcbiAgICBjb25zdCBhbGlnbm1lbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhbGlnbm1lbnRCdG4uc2V0QXR0cmlidXRlKCdpZCcsIFwiYWxpZ25tZW50QnRuXCIpO1xuICAgIGFsaWdubWVudEJ0bi5jbGFzc0xpc3QuYWRkKCdhbGlnbm1lbnRCdG4nKTtcbiAgICBhbGlnbm1lbnRCdG4udGV4dENvbnRlbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChhbGlnbm1lbnRCdG4pO1xuICAgIHJldHVybiBoZWFkO1xufVxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgICBsZXQgYm9hcmQgPSBnYW1lQm9hcmRfMS5nYW1lQm9hcmQuY3JlYXRlQm9hcmQoKTtcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChjcmVhdGVHYW1lKCkpO1xuICAgIC8vIGNsaWNrSGFuZGxlcihib2FyZClcbiAgICBwbGFjZVNoaXAoYm9hcmQpO1xufVxuc3RhcnRHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=