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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: aliceblue; }\n\n.hoverClass:hover {\n  background-color: pink; }\n\n.background {\n  background-color: red; }\n\n.error {\n  background-color: green; }\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n\n.boatContainer {\n  display: flex;\n  align-items: center; }\n  .boatContainer .boatDisplay {\n    border: 2px solid black;\n    width: 50px;\n    height: 50px; }\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  border: 1px solid black; }\n  .board .cell, .board .enemy-cell {\n    border: 1px solid red;\n    text-align: center;\n    cursor: pointer; }\n", "",{"version":3,"sources":["webpack://./styles/style.scss"],"names":[],"mappings":"AAAA;EACI,2BAA2B,EAAA;;AAE/B;EACI,sBAAsB,EAAA;;AAI1B;EACI,qBAAqB,EAAA;;AAGzB;EACI,uBAAuB,EAAA;;AAE3B;EACI,aAAa;EACb,mBAAmB;EACnB,6BAA6B,EAAA;;AAGjC;EACI,aAAa;EACb,mBAAmB,EAAA;EAFvB;IAIQ,uBAAuB;IACvB,WAAW;IACX,YAAY,EAAA;;AAKpB;EACI,aAAa;EACb,sCAAqC;EACrC,uBAAuB,EAAA;EAH3B;IAKQ,qBAAqB;IACrB,kBAAkB;IAClB,eAAe,EAAA","sourcesContent":["body{\n    background-color: aliceblue;\n}\n.hoverClass:hover{\n    background-color: pink;\n}\n\n\n.background{\n    background-color: red;\n}\n\n.error{\n    background-color: green;\n}\n.header{\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.boatContainer{\n    display: flex;\n    align-items: center;\n    .boatDisplay{\n        border: 2px solid black;\n        width: 50px;\n        height: 50px;\n    }\n}\n\n\n.board{\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    border: 1px solid black;\n    .cell{\n        border: 1px solid red;\n        text-align: center;\n        cursor: pointer;\n    }\n\n\n    .enemy-cell{\n        @extend .cell\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/aiBoard.ts":
/*!************************!*\
  !*** ./src/aiBoard.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.enemyBoard = void 0;
const _1 = __webpack_require__(/*! . */ "./src/index.ts");
const gameBoard_1 = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.ts");
const board = () => {
    const enemyBoard = document.createElement('div');
    enemyBoard.classList.add('board');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('enemy-cell');
            cellDiv.setAttribute('id', `enemy-[${i},${j}]`);
            cellDiv.innerHTML = `${i},${j}`;
            cellDiv.setAttribute('data-occupied', 'false');
            cellDiv.setAttribute('value', 'unoccupied');
            enemyBoard.appendChild(cellDiv);
        }
    }
    return enemyBoard;
};
function isValidEnemySpot(startCoord, endCoord, alignment) {
    if (endCoord[1] > 9)
        return false;
    if (endCoord[0] > 9)
        return false;
    for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        for (let j = startCoord[1]; j <= endCoord[1]; j++) {
            if (alignment == 'vertical') {
                let element1 = document.getElementById(`enemy-[${i - 1},${j}]`);
                let element1_1 = document.getElementById(`enemy-[${i - 1},${j + 1}]`);
                let element1_2 = document.getElementById(`enemy-[${i - 1},${j - 1}]`);
                let element2 = document.getElementById(`enemy-[${i + 1},${j}]`);
                let element2_1 = document.getElementById(`enemy-[${i + 1},${j + 1}]`);
                let element2_2 = document.getElementById(`enemy-[${i + 1},${j - 1}]`);
                if (element1 != null) {
                    if (element1.dataset.occupied == "occupied")
                        return false;
                }
                if (element1_1 != null) {
                    if (element1_1.dataset.occupied == "occupied")
                        return false;
                }
                if (element1_2 != null) {
                    if (element1_2.dataset.occupied == "occupied")
                        return false;
                }
                if (element2 != null) {
                    if (element2.dataset.occupied == "occupied")
                        return false;
                }
                if (element2_1 != null) {
                    if (element2_1.dataset.occupied == "occupied")
                        return false;
                }
                if (element2_2 != null) {
                    if (element2_2.dataset.occupied == "occupied")
                        return false;
                }
            }
            if (alignment == 'horizontal') {
                let element3 = document.getElementById(`enemy-[${i},${j - 1}]`);
                let element3_1 = document.getElementById(`enemy-[${i - 1},${j - 1}]`);
                let element3_2 = document.getElementById(`enemy-[${i + 1},${j - 1}]`);
                let element4 = document.getElementById(`enemy-[${i},${j + 1}]`);
                let element4_1 = document.getElementById(`enemy-[${i - 1},${j + 1}]`);
                let element4_2 = document.getElementById(`enemy-[${i + 1},${j + 1}]`);
                if (element3 != null) {
                    if (element3.dataset.occupied == "occupied")
                        return false;
                }
                if (element3_1 != null) {
                    if (element3_1.dataset.occupied == "occupied")
                        return false;
                }
                if (element3_2 != null) {
                    if (element3_2.dataset.occupied == "occupied")
                        return false;
                }
                if (element4 != null) {
                    if (element4.dataset.occupied == "occupied")
                        return false;
                }
                if (element4_1 != null) {
                    if (element4_1.dataset.occupied == "occupied")
                        return false;
                }
                if (element4_2 != null) {
                    if (element4_2.dataset.occupied == "occupied")
                        return false;
                }
            }
        }
    }
    return true;
}
const randomNum = () => {
    let num1 = Math.floor(Math.random() * 9);
    let num2 = Math.floor(Math.random() * 9);
    return [Number(num1), Number(num2)];
};
function randomAlignment() {
    let randomArray = ['horizontal', 'vertical'];
    let randNumber = Math.floor(Math.random() * 2);
    return randomArray[randNumber];
}
// generating random spot for ai boats
const randomSpot = (array) => {
    let ships = (0, _1.boat)();
    while (ships.length) {
        let alignment = randomAlignment();
        let randArray = randomNum();
        let startCoord = (0, _1.endCoordStartCoord)(randArray, ships[0], alignment).startCoord;
        let endCoord = (0, _1.endCoordStartCoord)(randArray, ships[0], alignment).endCoord;
        if (isValidEnemySpot(startCoord, endCoord, alignment) === true) {
            enemyBoatShow(startCoord, ships[0], alignment);
            gameBoard_1.gameBoard.placeBoat(startCoord, ships[0], alignment, array);
            ships.shift();
        }
    }
};
function enemyBoatShow(coord, boat, alignment) {
    let startCoord = (0, _1.endCoordStartCoord)(coord, boat, alignment).startCoord;
    let endCoord = (0, _1.endCoordStartCoord)(coord, boat, alignment).endCoord;
    for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        for (let j = startCoord[1]; j <= endCoord[1]; j++) {
            let shipDiv = document.getElementById(`enemy-[${i},${j}]`);
            shipDiv.setAttribute('data-occupied', 'occupied');
            shipDiv.setAttribute('style', 'background:#4F899A');
        }
    }
}
const enemyBoard = () => {
    let main = document.querySelector('body');
    let array = gameBoard_1.gameBoard.createBoard();
    main === null || main === void 0 ? void 0 : main.appendChild(board());
    randomSpot(array);
};
exports.enemyBoard = enemyBoard;


/***/ }),

/***/ "./src/gameBoard.ts":
/*!**************************!*\
  !*** ./src/gameBoard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gameBoard = void 0;
const ship_1 = __webpack_require__(/*! ./ship */ "./src/ship.ts");
const index_1 = __webpack_require__(/*! ./index */ "./src/index.ts");
const gameBoard = (() => {
    const createBoard = () => {
        let gameBoardArray = new Array();
        for (let i = 0; i < 10; i++) {
            gameBoardArray[i] = new Array();
            for (let j = 0; j < 10; j++) {
                gameBoardArray[i][j] = { occupied: false, attacked: false, ship: { length: 0, hits: 0, isSunk: false } };
            }
        }
        ;
        return gameBoardArray;
    };
    function isInside(num) {
        if (num - 1 < 0)
            return false;
        if (num + 1 > 9)
            return false;
        return true;
    }
    const placeBoat = (coord, boat, alignment, array) => {
        let startCoord = (0, index_1.endCoordStartCoord)(coord, boat, alignment).startCoord;
        let endCoord = (0, index_1.endCoordStartCoord)(coord, boat, alignment).endCoord;
        for (let i = startCoord[0]; i <= endCoord[0]; i++) {
            for (let j = startCoord[1]; j <= endCoord[1]; j++) {
                array[i][j].occupied = true;
                array[i][j].ship = boat;
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
    return { createBoard, placeBoat, receiveAttack, isInside };
})();
exports.gameBoard = gameBoard;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.showBoat = exports.isValidSpot = exports.boat = exports.endCoordStartCoord = void 0;
__webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
const gameBoard_1 = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.ts");
const ship_1 = __webpack_require__(/*! ./ship */ "./src/ship.ts");
const aiBoard_1 = __webpack_require__(/*! ./aiBoard */ "./src/aiBoard.ts");
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
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.setAttribute('id', `[${i},${j}]`);
            cellDiv.innerHTML = `${i},${j}`;
            cellDiv.setAttribute('data-occupied', 'false');
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
function endCoordStartCoord(coord, boat, alignment) {
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
    return { startCoord, endCoord };
}
exports.endCoordStartCoord = endCoordStartCoord;
function showBoat(coord, boat, alignment) {
    let startCoord = endCoordStartCoord(coord, boat, alignment).startCoord;
    let endCoord = endCoordStartCoord(coord, boat, alignment).endCoord;
    for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        for (let j = startCoord[1]; j <= endCoord[1]; j++) {
            let shipDiv = document.getElementById(`[${i},${j}]`);
            shipDiv === null || shipDiv === void 0 ? void 0 : shipDiv.setAttribute('style', 'background:pink');
            shipDiv === null || shipDiv === void 0 ? void 0 : shipDiv.setAttribute('data-occupied', 'occupied');
        }
    }
}
exports.showBoat = showBoat;
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
function boatDisplay(length) {
    const boatDiv = document.getElementById('boatDiv');
    boatDiv.innerHTML = '';
    for (let i = 0; i < length; i++) {
        let cell = document.createElement('div');
        cell.classList.add('boatDisplay');
        boatDiv.appendChild(cell);
    }
}
function isValidSpot(startCoord, endCoord, alignment) {
    if (endCoord[1] > 9)
        return false;
    if (endCoord[0] > 9)
        return false;
    for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        for (let j = startCoord[1]; j <= endCoord[1]; j++) {
            if (alignment == 'vertical') {
                let element1 = document.getElementById(`[${i - 1},${j}]`);
                let element1_1 = document.getElementById(`[${i - 1},${j + 1}]`);
                let element1_2 = document.getElementById(`[${i - 1},${j - 1}]`);
                let element2 = document.getElementById(`[${i + 1},${j}]`);
                let element2_1 = document.getElementById(`[${i + 1},${j + 1}]`);
                let element2_2 = document.getElementById(`[${i + 1},${j - 1}]`);
                if (element1 != null) {
                    if (element1.dataset.occupied == "occupied")
                        return false;
                }
                if (element1_1 != null) {
                    if (element1_1.dataset.occupied == "occupied")
                        return false;
                }
                if (element1_2 != null) {
                    if (element1_2.dataset.occupied == "occupied")
                        return false;
                }
                if (element2 != null) {
                    if (element2.dataset.occupied == "occupied")
                        return false;
                }
                if (element2_1 != null) {
                    if (element2_1.dataset.occupied == "occupied")
                        return false;
                }
                if (element2_2 != null) {
                    if (element2_2.dataset.occupied == "occupied")
                        return false;
                }
            }
            if (alignment == 'horizontal') {
                let element3 = document.getElementById(`[${i},${j - 1}]`);
                let element3_1 = document.getElementById(`[${i - 1},${j - 1}]`);
                let element3_2 = document.getElementById(`[${i + 1},${j - 1}]`);
                let element4 = document.getElementById(`[${i},${j + 1}]`);
                let element4_1 = document.getElementById(`[${i - 1},${j + 1}]`);
                let element4_2 = document.getElementById(`[${i + 1},${j + 1}]`);
                if (element3 != null) {
                    if (element3.dataset.occupied == "occupied")
                        return false;
                }
                if (element3_1 != null) {
                    if (element3_1.dataset.occupied == "occupied")
                        return false;
                }
                if (element3_2 != null) {
                    if (element3_2.dataset.occupied == "occupied")
                        return false;
                }
                if (element4 != null) {
                    if (element4.dataset.occupied == "occupied")
                        return false;
                }
                if (element4_1 != null) {
                    if (element4_1.dataset.occupied == "occupied")
                        return false;
                }
                if (element4_2 != null) {
                    if (element4_2.dataset.occupied == "occupied")
                        return false;
                }
            }
        }
    }
    return true;
}
exports.isValidSpot = isValidSpot;
function boat() {
    let submarine = (0, ship_1.createShip)(Ships.submarine);
    let battleship = (0, ship_1.createShip)(Ships.battleship);
    let cruiser = (0, ship_1.createShip)(Ships.cruiser);
    let carrier = (0, ship_1.createShip)(Ships.carrier);
    let destroyer = (0, ship_1.createShip)(Ships.destroyer);
    return [submarine, battleship, cruiser, carrier, destroyer];
}
exports.boat = boat;
const mouseOver = (target, boat, alignment) => {
    let coordinates = target.id;
    let coord = startCoordArray(coordinates);
    let startCoord = endCoordStartCoord(coord, boat, alignment).startCoord;
    let endCoord = endCoordStartCoord(coord, boat, alignment).endCoord;
    if (isValidSpot(startCoord, endCoord, alignment)) { // todo set alignment
        for (let i = startCoord[0]; i <= endCoord[0]; i++) {
            for (let j = startCoord[1]; j <= endCoord[1]; j++) {
                let shipDiv = document.getElementById(`[${i},${j}]`);
                shipDiv.classList.add('background');
            }
        }
    }
    else
        target.classList.add('error');
};
const mouseOut = (target, boat, alignment) => {
    let coordinates = target.id;
    let coord = startCoordArray(coordinates);
    let startCoord = endCoordStartCoord(coord, boat, alignment).startCoord;
    let endCoord = endCoordStartCoord(coord, boat, alignment).endCoord;
    if (isValidSpot(startCoord, endCoord, alignment)) { // todo set alignment
        for (let i = startCoord[0]; i <= endCoord[0]; i++) {
            for (let j = startCoord[1]; j <= endCoord[1]; j++) {
                let shipDiv = document.getElementById(`[${i},${j}]`);
                shipDiv.classList.remove('background');
            }
        }
    }
    else
        target.classList.remove('error');
};
function placeShip(array) {
    let alignment = 'horizontal';
    let shipArray = boat();
    let cells = document.querySelectorAll('.cell');
    let count = 0;
    boatDisplay(shipArray[count].length);
    const btn = document.getElementById("alignmentBtn");
    btn.addEventListener('click', () => {
        if (count <= 4) {
            if (alignment == 'horizontal') {
                btn.textContent = 'vertical';
                alignment = 'vertical';
            }
            else {
                btn.textContent = 'horizontal';
                alignment = 'horizontal';
            }
            console.log(alignment);
        }
    });
    cells.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            const target = e.target;
            if (count <= 4) {
                mouseOver(target, shipArray[count], alignment);
            }
        });
    });
    cells.forEach(div => {
        div.addEventListener('mouseout', (e) => {
            const target = e.target;
            if (count <= 4) {
                mouseOut(target, shipArray[count], alignment);
            }
        });
    });
    cells.forEach(div => {
        div.addEventListener('click', (e) => {
            let shipAlignment = alignment;
            const target = e.target;
            if (count <= 4) {
                let coordinates = target.id;
                let startCoord = startCoordArray(coordinates);
                let start = endCoordStartCoord(startCoord, shipArray[count], alignment).startCoord;
                let endCoord = endCoordStartCoord(startCoord, shipArray[count], alignment).endCoord;
                if (isValidSpot(start, endCoord, alignment)) {
                    gameBoard_1.gameBoard.placeBoat(startCoord, shipArray[count], shipAlignment, array);
                    showBoat(startCoord, shipArray[count], shipAlignment);
                    count += 1;
                    if (count <= 4)
                        boatDisplay(shipArray[count].length);
                }
            }
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
    (0, aiBoard_1.enemyBoard)();
    // clickHandler(board)
    placeShip(board);
}
startGame();


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3R5bGVzL3N0eWxlLnNjc3M/N2RlMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYWlCb2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVCb2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgfVxcblxcbi5ob3ZlckNsYXNzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7IH1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IH1cXG5cXG4uZXJyb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47IH1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG5cXG4uYm9hdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmJvYXRDb250YWluZXIgLmJvYXREaXNwbGF5IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7IH1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IH1cXG4gIC5ib2FyZCAuY2VsbCwgLmJvYXJkIC5lbmVteS1jZWxsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksc0JBQXNCLEVBQUE7O0FBSTFCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkIsRUFBQTs7QUFHakM7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7RUFGdkI7SUFJUSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVksRUFBQTs7QUFLcEI7RUFDSSxhQUFhO0VBQ2Isc0NBQXFDO0VBQ3JDLHVCQUF1QixFQUFBO0VBSDNCO0lBS1EscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbn1cXG4uaG92ZXJDbGFzczpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuXFxuXFxuLmJhY2tncm91bmR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmVycm9ye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5ib2F0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAuYm9hdERpc3BsYXl7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB9XFxufVxcblxcblxcbi5ib2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMWZyKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIC5jZWxse1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuXFxuICAgIC5lbmVteS1jZWxse1xcbiAgICAgICAgQGV4dGVuZCAuY2VsbFxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lbmVteUJvYXJkID0gdm9pZCAwO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbmNvbnN0IGdhbWVCb2FyZF8xID0gcmVxdWlyZShcIi4vZ2FtZUJvYXJkXCIpO1xuY29uc3QgYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgZW5lbXlCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVuZW15Qm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdlbmVteS1jZWxsJyk7XG4gICAgICAgICAgICBjZWxsRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgZW5lbXktWyR7aX0sJHtqfV1gKTtcbiAgICAgICAgICAgIGNlbGxEaXYuaW5uZXJIVE1MID0gYCR7aX0sJHtqfWA7XG4gICAgICAgICAgICBjZWxsRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1vY2N1cGllZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgY2VsbERpdi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3Vub2NjdXBpZWQnKTtcbiAgICAgICAgICAgIGVuZW15Qm9hcmQuYXBwZW5kQ2hpbGQoY2VsbERpdik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVuZW15Qm9hcmQ7XG59O1xuZnVuY3Rpb24gaXNWYWxpZEVuZW15U3BvdChzdGFydENvb3JkLCBlbmRDb29yZCwgYWxpZ25tZW50KSB7XG4gICAgaWYgKGVuZENvb3JkWzFdID4gOSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChlbmRDb29yZFswXSA+IDkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gc3RhcnRDb29yZFswXTsgaSA8PSBlbmRDb29yZFswXTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBzdGFydENvb3JkWzFdOyBqIDw9IGVuZENvb3JkWzFdOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChhbGlnbm1lbnQgPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlbmVteS1bJHtpIC0gMX0sJHtqfV1gKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDFfMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlbmVteS1bJHtpIC0gMX0sJHtqICsgMX1dYCk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQxXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZW5lbXktWyR7aSAtIDF9LCR7aiAtIDF9XWApO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlbmVteS1bJHtpICsgMX0sJHtqfV1gKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDJfMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlbmVteS1bJHtpICsgMX0sJHtqICsgMX1dYCk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQyXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZW5lbXktWyR7aSArIDF9LCR7aiAtIDF9XWApO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50MSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50MS5kYXRhc2V0Lm9jY3VwaWVkID09IFwib2NjdXBpZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQxXzEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDFfMS5kYXRhc2V0Lm9jY3VwaWVkID09IFwib2NjdXBpZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQxXzIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDFfMi5kYXRhc2V0Lm9jY3VwaWVkID09IFwib2NjdXBpZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQyLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDJfMSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Ml8xLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDJfMiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Ml8yLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbGlnbm1lbnQgPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVuZW15LVske2l9LCR7aiAtIDF9XWApO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50M18xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVuZW15LVske2kgLSAxfSwke2ogLSAxfV1gKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDNfMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlbmVteS1bJHtpICsgMX0sJHtqIC0gMX1dYCk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVuZW15LVske2l9LCR7aiArIDF9XWApO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50NF8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVuZW15LVske2kgLSAxfSwke2ogKyAxfV1gKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDRfMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlbmVteS1bJHtpICsgMX0sJHtqICsgMX1dYCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQzLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDNfMSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50M18xLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDNfMiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50M18yLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDQuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50NF8xICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQ0XzEuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50NF8yICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQ0XzIuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuY29uc3QgcmFuZG9tTnVtID0gKCkgPT4ge1xuICAgIGxldCBudW0xID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgbGV0IG51bTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICByZXR1cm4gW051bWJlcihudW0xKSwgTnVtYmVyKG51bTIpXTtcbn07XG5mdW5jdGlvbiByYW5kb21BbGlnbm1lbnQoKSB7XG4gICAgbGV0IHJhbmRvbUFycmF5ID0gWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ107XG4gICAgbGV0IHJhbmROdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICByZXR1cm4gcmFuZG9tQXJyYXlbcmFuZE51bWJlcl07XG59XG4vLyBnZW5lcmF0aW5nIHJhbmRvbSBzcG90IGZvciBhaSBib2F0c1xuY29uc3QgcmFuZG9tU3BvdCA9IChhcnJheSkgPT4ge1xuICAgIGxldCBzaGlwcyA9ICgwLCBfMS5ib2F0KSgpO1xuICAgIHdoaWxlIChzaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGFsaWdubWVudCA9IHJhbmRvbUFsaWdubWVudCgpO1xuICAgICAgICBsZXQgcmFuZEFycmF5ID0gcmFuZG9tTnVtKCk7XG4gICAgICAgIGxldCBzdGFydENvb3JkID0gKDAsIF8xLmVuZENvb3JkU3RhcnRDb29yZCkocmFuZEFycmF5LCBzaGlwc1swXSwgYWxpZ25tZW50KS5zdGFydENvb3JkO1xuICAgICAgICBsZXQgZW5kQ29vcmQgPSAoMCwgXzEuZW5kQ29vcmRTdGFydENvb3JkKShyYW5kQXJyYXksIHNoaXBzWzBdLCBhbGlnbm1lbnQpLmVuZENvb3JkO1xuICAgICAgICBpZiAoaXNWYWxpZEVuZW15U3BvdChzdGFydENvb3JkLCBlbmRDb29yZCwgYWxpZ25tZW50KSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZW5lbXlCb2F0U2hvdyhzdGFydENvb3JkLCBzaGlwc1swXSwgYWxpZ25tZW50KTtcbiAgICAgICAgICAgIGdhbWVCb2FyZF8xLmdhbWVCb2FyZC5wbGFjZUJvYXQoc3RhcnRDb29yZCwgc2hpcHNbMF0sIGFsaWdubWVudCwgYXJyYXkpO1xuICAgICAgICAgICAgc2hpcHMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5mdW5jdGlvbiBlbmVteUJvYXRTaG93KGNvb3JkLCBib2F0LCBhbGlnbm1lbnQpIHtcbiAgICBsZXQgc3RhcnRDb29yZCA9ICgwLCBfMS5lbmRDb29yZFN0YXJ0Q29vcmQpKGNvb3JkLCBib2F0LCBhbGlnbm1lbnQpLnN0YXJ0Q29vcmQ7XG4gICAgbGV0IGVuZENvb3JkID0gKDAsIF8xLmVuZENvb3JkU3RhcnRDb29yZCkoY29vcmQsIGJvYXQsIGFsaWdubWVudCkuZW5kQ29vcmQ7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0Q29vcmRbMF07IGkgPD0gZW5kQ29vcmRbMF07IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gc3RhcnRDb29yZFsxXTsgaiA8PSBlbmRDb29yZFsxXTsgaisrKSB7XG4gICAgICAgICAgICBsZXQgc2hpcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlbmVteS1bJHtpfSwke2p9XWApO1xuICAgICAgICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2NjdXBpZWQnLCAnb2NjdXBpZWQnKTtcbiAgICAgICAgICAgIHNoaXBEaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiM0Rjg5OUEnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IGVuZW15Qm9hcmQgPSAoKSA9PiB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgbGV0IGFycmF5ID0gZ2FtZUJvYXJkXzEuZ2FtZUJvYXJkLmNyZWF0ZUJvYXJkKCk7XG4gICAgbWFpbiA9PT0gbnVsbCB8fCBtYWluID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtYWluLmFwcGVuZENoaWxkKGJvYXJkKCkpO1xuICAgIHJhbmRvbVNwb3QoYXJyYXkpO1xufTtcbmV4cG9ydHMuZW5lbXlCb2FyZCA9IGVuZW15Qm9hcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2FtZUJvYXJkID0gdm9pZCAwO1xuY29uc3Qgc2hpcF8xID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcbmNvbnN0IGluZGV4XzEgPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcbmNvbnN0IGdhbWVCb2FyZCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBnYW1lQm9hcmRBcnJheSA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGdhbWVCb2FyZEFycmF5W2ldID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmRBcnJheVtpXVtqXSA9IHsgb2NjdXBpZWQ6IGZhbHNlLCBhdHRhY2tlZDogZmFsc2UsIHNoaXA6IHsgbGVuZ3RoOiAwLCBoaXRzOiAwLCBpc1N1bms6IGZhbHNlIH0gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiBnYW1lQm9hcmRBcnJheTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGlzSW5zaWRlKG51bSkge1xuICAgICAgICBpZiAobnVtIC0gMSA8IDApXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChudW0gKyAxID4gOSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHBsYWNlQm9hdCA9IChjb29yZCwgYm9hdCwgYWxpZ25tZW50LCBhcnJheSkgPT4ge1xuICAgICAgICBsZXQgc3RhcnRDb29yZCA9ICgwLCBpbmRleF8xLmVuZENvb3JkU3RhcnRDb29yZCkoY29vcmQsIGJvYXQsIGFsaWdubWVudCkuc3RhcnRDb29yZDtcbiAgICAgICAgbGV0IGVuZENvb3JkID0gKDAsIGluZGV4XzEuZW5kQ29vcmRTdGFydENvb3JkKShjb29yZCwgYm9hdCwgYWxpZ25tZW50KS5lbmRDb29yZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Q29vcmRbMF07IGkgPD0gZW5kQ29vcmRbMF07IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0Q29vcmRbMV07IGogPD0gZW5kQ29vcmRbMV07IGorKykge1xuICAgICAgICAgICAgICAgIGFycmF5W2ldW2pdLm9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBhcnJheVtpXVtqXS5zaGlwID0gYm9hdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgfTtcbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHZhbHVlLCBhcnJheSkgPT4ge1xuICAgICAgICBsZXQgc3BvdCA9IGFycmF5W3ZhbHVlWzBdXVt2YWx1ZVsxXV07XG4gICAgICAgIHNwb3QuYXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICBpZiAoc3BvdC5vY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2hpcF8xLnNoaXAuaGl0KHNwb3Quc2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYXJyYXkpO1xuICAgIH07XG4gICAgcmV0dXJuIHsgY3JlYXRlQm9hcmQsIHBsYWNlQm9hdCwgcmVjZWl2ZUF0dGFjaywgaXNJbnNpZGUgfTtcbn0pKCk7XG5leHBvcnRzLmdhbWVCb2FyZCA9IGdhbWVCb2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zaG93Qm9hdCA9IGV4cG9ydHMuaXNWYWxpZFNwb3QgPSBleHBvcnRzLmJvYXQgPSBleHBvcnRzLmVuZENvb3JkU3RhcnRDb29yZCA9IHZvaWQgMDtcbnJlcXVpcmUoXCIuLi9zdHlsZXMvc3R5bGUuc2Nzc1wiKTtcbmNvbnN0IGdhbWVCb2FyZF8xID0gcmVxdWlyZShcIi4vZ2FtZUJvYXJkXCIpO1xuY29uc3Qgc2hpcF8xID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcbmNvbnN0IGFpQm9hcmRfMSA9IHJlcXVpcmUoXCIuL2FpQm9hcmRcIik7XG52YXIgU2hpcHM7XG4oZnVuY3Rpb24gKFNoaXBzKSB7XG4gICAgU2hpcHNbU2hpcHNbXCJkZXN0cm95ZXJcIl0gPSAyXSA9IFwiZGVzdHJveWVyXCI7XG4gICAgU2hpcHNbU2hpcHNbXCJzdWJtYXJpbmVcIl0gPSAzXSA9IFwic3VibWFyaW5lXCI7XG4gICAgU2hpcHNbU2hpcHNbXCJjcnVpc2VyXCJdID0gM10gPSBcImNydWlzZXJcIjtcbiAgICBTaGlwc1tTaGlwc1tcImJhdHRsZXNoaXBcIl0gPSA0XSA9IFwiYmF0dGxlc2hpcFwiO1xuICAgIFNoaXBzW1NoaXBzW1wiY2FycmllclwiXSA9IDVdID0gXCJjYXJyaWVyXCI7XG59KShTaGlwcyB8fCAoU2hpcHMgPSB7fSkpO1xuY29uc3QgY3JlYXRlR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgbGV0IGNlbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgY2VsbERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYFske2l9LCR7an1dYCk7XG4gICAgICAgICAgICBjZWxsRGl2LmlubmVySFRNTCA9IGAke2l9LCR7an1gO1xuICAgICAgICAgICAgY2VsbERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2NjdXBpZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGxEaXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbn07XG5mdW5jdGlvbiBzdGFydENvb3JkQXJyYXkodmFsdWUpIHtcbiAgICBsZXQgY29vcmRBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgb2YgdmFsdWUpIHtcbiAgICAgICAgaWYgKC9bMC05XS8udGVzdChpKSkge1xuICAgICAgICAgICAgY29vcmRBcnJheS5wdXNoKE51bWJlcihpKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkQXJyYXk7XG59XG5mdW5jdGlvbiBlbmRDb29yZFN0YXJ0Q29vcmQoY29vcmQsIGJvYXQsIGFsaWdubWVudCkge1xuICAgIGxldCBzdGFydENvb3JkID0gW107XG4gICAgbGV0IGVuZENvb3JkID0gW107XG4gICAgaWYgKGFsaWdubWVudCA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgc3RhcnRDb29yZCA9IGNvb3JkO1xuICAgICAgICBlbmRDb29yZCA9IFtjb29yZFswXSwgY29vcmRbMV0gKyAoYm9hdC5sZW5ndGggLSAxKV07XG4gICAgfVxuICAgIGVsc2UgaWYgKGFsaWdubWVudCA9PSAndmVydGljYWwnKSB7XG4gICAgICAgIHN0YXJ0Q29vcmQgPSBjb29yZDtcbiAgICAgICAgZW5kQ29vcmQgPSBbY29vcmRbMF0gKyAoYm9hdC5sZW5ndGggLSAxKSwgY29vcmRbMV1dO1xuICAgIH1cbiAgICByZXR1cm4geyBzdGFydENvb3JkLCBlbmRDb29yZCB9O1xufVxuZXhwb3J0cy5lbmRDb29yZFN0YXJ0Q29vcmQgPSBlbmRDb29yZFN0YXJ0Q29vcmQ7XG5mdW5jdGlvbiBzaG93Qm9hdChjb29yZCwgYm9hdCwgYWxpZ25tZW50KSB7XG4gICAgbGV0IHN0YXJ0Q29vcmQgPSBlbmRDb29yZFN0YXJ0Q29vcmQoY29vcmQsIGJvYXQsIGFsaWdubWVudCkuc3RhcnRDb29yZDtcbiAgICBsZXQgZW5kQ29vcmQgPSBlbmRDb29yZFN0YXJ0Q29vcmQoY29vcmQsIGJvYXQsIGFsaWdubWVudCkuZW5kQ29vcmQ7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0Q29vcmRbMF07IGkgPD0gZW5kQ29vcmRbMF07IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gc3RhcnRDb29yZFsxXTsgaiA8PSBlbmRDb29yZFsxXTsgaisrKSB7XG4gICAgICAgICAgICBsZXQgc2hpcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBbJHtpfSwke2p9XWApO1xuICAgICAgICAgICAgc2hpcERpdiA9PT0gbnVsbCB8fCBzaGlwRGl2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzaGlwRGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDpwaW5rJyk7XG4gICAgICAgICAgICBzaGlwRGl2ID09PSBudWxsIHx8IHNoaXBEaXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNoaXBEaXYuc2V0QXR0cmlidXRlKCdkYXRhLW9jY3VwaWVkJywgJ29jY3VwaWVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLnNob3dCb2F0ID0gc2hvd0JvYXQ7XG5mdW5jdGlvbiBjbGlja0hhbmRsZXIoYm9hcmRBcnJheSkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgIGRpdi5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIGxldCBjb29yZEFycmF5ID0gc3RhcnRDb29yZEFycmF5KGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JlZCc7XG4gICAgICAgICAgICBpZiAoYm9hcmRBcnJheVtjb29yZEFycmF5WzBdXVtjb29yZEFycmF5WzFdXS5hdHRhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmRfMS5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZEFycmF5LCBib2FyZEFycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBib2F0RGlzcGxheShsZW5ndGgpIHtcbiAgICBjb25zdCBib2F0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXREaXYnKTtcbiAgICBib2F0RGl2LmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdib2F0RGlzcGxheScpO1xuICAgICAgICBib2F0RGl2LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzVmFsaWRTcG90KHN0YXJ0Q29vcmQsIGVuZENvb3JkLCBhbGlnbm1lbnQpIHtcbiAgICBpZiAoZW5kQ29vcmRbMV0gPiA5KVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGVuZENvb3JkWzBdID4gOSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSBzdGFydENvb3JkWzBdOyBpIDw9IGVuZENvb3JkWzBdOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0Q29vcmRbMV07IGogPD0gZW5kQ29vcmRbMV07IGorKykge1xuICAgICAgICAgICAgaWYgKGFsaWdubWVudCA9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFske2kgLSAxfSwke2p9XWApO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50MV8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFske2kgLSAxfSwke2ogKyAxfV1gKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDFfMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBbJHtpIC0gMX0sJHtqIC0gMX1dYCk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFske2kgKyAxfSwke2p9XWApO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50Ml8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFske2kgKyAxfSwke2ogKyAxfV1gKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDJfMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBbJHtpICsgMX0sJHtqIC0gMX1dYCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQxICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQxLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDFfMSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50MV8xLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDFfMiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50MV8yLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDIuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Ml8xICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQyXzEuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Ml8yICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQyXzIuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFsaWdubWVudCA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgWyR7aX0sJHtqIC0gMX1dYCk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQzXzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgWyR7aSAtIDF9LCR7aiAtIDF9XWApO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50M18yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFske2kgKyAxfSwke2ogLSAxfV1gKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgWyR7aX0sJHtqICsgMX1dYCk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQ0XzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgWyR7aSAtIDF9LCR7aiArIDF9XWApO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50NF8yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFske2kgKyAxfSwke2ogKyAxfV1gKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDMuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50M18xICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQzXzEuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50M18yICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQzXzIuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50NCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50NC5kYXRhc2V0Lm9jY3VwaWVkID09IFwib2NjdXBpZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQ0XzEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDRfMS5kYXRhc2V0Lm9jY3VwaWVkID09IFwib2NjdXBpZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQ0XzIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDRfMi5kYXRhc2V0Lm9jY3VwaWVkID09IFwib2NjdXBpZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmlzVmFsaWRTcG90ID0gaXNWYWxpZFNwb3Q7XG5mdW5jdGlvbiBib2F0KCkge1xuICAgIGxldCBzdWJtYXJpbmUgPSAoMCwgc2hpcF8xLmNyZWF0ZVNoaXApKFNoaXBzLnN1Ym1hcmluZSk7XG4gICAgbGV0IGJhdHRsZXNoaXAgPSAoMCwgc2hpcF8xLmNyZWF0ZVNoaXApKFNoaXBzLmJhdHRsZXNoaXApO1xuICAgIGxldCBjcnVpc2VyID0gKDAsIHNoaXBfMS5jcmVhdGVTaGlwKShTaGlwcy5jcnVpc2VyKTtcbiAgICBsZXQgY2FycmllciA9ICgwLCBzaGlwXzEuY3JlYXRlU2hpcCkoU2hpcHMuY2Fycmllcik7XG4gICAgbGV0IGRlc3Ryb3llciA9ICgwLCBzaGlwXzEuY3JlYXRlU2hpcCkoU2hpcHMuZGVzdHJveWVyKTtcbiAgICByZXR1cm4gW3N1Ym1hcmluZSwgYmF0dGxlc2hpcCwgY3J1aXNlciwgY2FycmllciwgZGVzdHJveWVyXTtcbn1cbmV4cG9ydHMuYm9hdCA9IGJvYXQ7XG5jb25zdCBtb3VzZU92ZXIgPSAodGFyZ2V0LCBib2F0LCBhbGlnbm1lbnQpID0+IHtcbiAgICBsZXQgY29vcmRpbmF0ZXMgPSB0YXJnZXQuaWQ7XG4gICAgbGV0IGNvb3JkID0gc3RhcnRDb29yZEFycmF5KGNvb3JkaW5hdGVzKTtcbiAgICBsZXQgc3RhcnRDb29yZCA9IGVuZENvb3JkU3RhcnRDb29yZChjb29yZCwgYm9hdCwgYWxpZ25tZW50KS5zdGFydENvb3JkO1xuICAgIGxldCBlbmRDb29yZCA9IGVuZENvb3JkU3RhcnRDb29yZChjb29yZCwgYm9hdCwgYWxpZ25tZW50KS5lbmRDb29yZDtcbiAgICBpZiAoaXNWYWxpZFNwb3Qoc3RhcnRDb29yZCwgZW5kQ29vcmQsIGFsaWdubWVudCkpIHsgLy8gdG9kbyBzZXQgYWxpZ25tZW50XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydENvb3JkWzBdOyBpIDw9IGVuZENvb3JkWzBdOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBzdGFydENvb3JkWzFdOyBqIDw9IGVuZENvb3JkWzFdOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBbJHtpfSwke2p9XWApO1xuICAgICAgICAgICAgICAgIHNoaXBEaXYuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG59O1xuY29uc3QgbW91c2VPdXQgPSAodGFyZ2V0LCBib2F0LCBhbGlnbm1lbnQpID0+IHtcbiAgICBsZXQgY29vcmRpbmF0ZXMgPSB0YXJnZXQuaWQ7XG4gICAgbGV0IGNvb3JkID0gc3RhcnRDb29yZEFycmF5KGNvb3JkaW5hdGVzKTtcbiAgICBsZXQgc3RhcnRDb29yZCA9IGVuZENvb3JkU3RhcnRDb29yZChjb29yZCwgYm9hdCwgYWxpZ25tZW50KS5zdGFydENvb3JkO1xuICAgIGxldCBlbmRDb29yZCA9IGVuZENvb3JkU3RhcnRDb29yZChjb29yZCwgYm9hdCwgYWxpZ25tZW50KS5lbmRDb29yZDtcbiAgICBpZiAoaXNWYWxpZFNwb3Qoc3RhcnRDb29yZCwgZW5kQ29vcmQsIGFsaWdubWVudCkpIHsgLy8gdG9kbyBzZXQgYWxpZ25tZW50XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydENvb3JkWzBdOyBpIDw9IGVuZENvb3JkWzBdOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBzdGFydENvb3JkWzFdOyBqIDw9IGVuZENvb3JkWzFdOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBbJHtpfSwke2p9XWApO1xuICAgICAgICAgICAgICAgIHNoaXBEaXYuY2xhc3NMaXN0LnJlbW92ZSgnYmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG59O1xuZnVuY3Rpb24gcGxhY2VTaGlwKGFycmF5KSB7XG4gICAgbGV0IGFsaWdubWVudCA9ICdob3Jpem9udGFsJztcbiAgICBsZXQgc2hpcEFycmF5ID0gYm9hdCgpO1xuICAgIGxldCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBib2F0RGlzcGxheShzaGlwQXJyYXlbY291bnRdLmxlbmd0aCk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGlnbm1lbnRCdG5cIik7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoY291bnQgPD0gNCkge1xuICAgICAgICAgICAgaWYgKGFsaWdubWVudCA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSAndmVydGljYWwnO1xuICAgICAgICAgICAgICAgIGFsaWdubWVudCA9ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgICAgICAgICAgICAgYWxpZ25tZW50ID0gJ2hvcml6b250YWwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coYWxpZ25tZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNlbGxzLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChjb3VudCA8PSA0KSB7XG4gICAgICAgICAgICAgICAgbW91c2VPdmVyKHRhcmdldCwgc2hpcEFycmF5W2NvdW50XSwgYWxpZ25tZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2VsbHMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoY291bnQgPD0gNCkge1xuICAgICAgICAgICAgICAgIG1vdXNlT3V0KHRhcmdldCwgc2hpcEFycmF5W2NvdW50XSwgYWxpZ25tZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2VsbHMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHNoaXBBbGlnbm1lbnQgPSBhbGlnbm1lbnQ7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChjb3VudCA8PSA0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydENvb3JkID0gc3RhcnRDb29yZEFycmF5KGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBlbmRDb29yZFN0YXJ0Q29vcmQoc3RhcnRDb29yZCwgc2hpcEFycmF5W2NvdW50XSwgYWxpZ25tZW50KS5zdGFydENvb3JkO1xuICAgICAgICAgICAgICAgIGxldCBlbmRDb29yZCA9IGVuZENvb3JkU3RhcnRDb29yZChzdGFydENvb3JkLCBzaGlwQXJyYXlbY291bnRdLCBhbGlnbm1lbnQpLmVuZENvb3JkO1xuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkU3BvdChzdGFydCwgZW5kQ29vcmQsIGFsaWdubWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUJvYXJkXzEuZ2FtZUJvYXJkLnBsYWNlQm9hdChzdGFydENvb3JkLCBzaGlwQXJyYXlbY291bnRdLCBzaGlwQWxpZ25tZW50LCBhcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dCb2F0KHN0YXJ0Q29vcmQsIHNoaXBBcnJheVtjb3VudF0sIHNoaXBBbGlnbm1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPD0gNClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXREaXNwbGF5KHNoaXBBcnJheVtjb3VudF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgaGVhZC5pbm5lckhUTUwgPSBgPGgxPmNvb2w/PC9oMT5gO1xuICAgIGNvbnN0IGJvYXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib2F0RGl2LnRleHRDb250ZW50ID0gJ2hlcmUgd2lsbCBoYXZlIGJvYXRzJztcbiAgICBib2F0RGl2LmNsYXNzTGlzdC5hZGQoJ2JvYXRDb250YWluZXInKTtcbiAgICBib2F0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYm9hdERpdicpO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoYm9hdERpdik7XG4gICAgY29uc3QgYWxpZ25tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWxpZ25tZW50QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBcImFsaWdubWVudEJ0blwiKTtcbiAgICBhbGlnbm1lbnRCdG4uY2xhc3NMaXN0LmFkZCgnYWxpZ25tZW50QnRuJyk7XG4gICAgYWxpZ25tZW50QnRuLnRleHRDb250ZW50ID0gJ2hvcml6b250YWwnO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoYWxpZ25tZW50QnRuKTtcbiAgICByZXR1cm4gaGVhZDtcbn1cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gICAgbGV0IGJvYXJkID0gZ2FtZUJvYXJkXzEuZ2FtZUJvYXJkLmNyZWF0ZUJvYXJkKCk7XG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlR2FtZSgpKTtcbiAgICAoMCwgYWlCb2FyZF8xLmVuZW15Qm9hcmQpKCk7XG4gICAgLy8gY2xpY2tIYW5kbGVyKGJvYXJkKVxuICAgIHBsYWNlU2hpcChib2FyZCk7XG59XG5zdGFydEdhbWUoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zaGlwID0gZXhwb3J0cy5jcmVhdGVTaGlwID0gdm9pZCAwO1xuZnVuY3Rpb24gY3JlYXRlU2hpcChsZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsZW5ndGgsXG4gICAgICAgIGhpdHM6IDAsXG4gICAgICAgIGlzU3VuazogZmFsc2UsXG4gICAgfTtcbn1cbmV4cG9ydHMuY3JlYXRlU2hpcCA9IGNyZWF0ZVNoaXA7XG5jb25zdCBzaGlwID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBoaXQodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlLmhpdHMgPD0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuaGl0cyArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICd5b3UgYXJlIHN1bmsnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGhpdCB9O1xufSkoKTtcbmV4cG9ydHMuc2hpcCA9IHNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==