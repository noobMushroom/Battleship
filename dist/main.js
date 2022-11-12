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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n.hoverClass:hover {\n  background-color: pink; }\n\n.background {\n  background-color: red; }\n\n.error {\n  background-color: green; }\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n\n.boatContainer {\n  display: flex;\n  align-items: center; }\n  .boatContainer .boatDisplay {\n    border: 2px solid black;\n    width: 50px;\n    height: 50px; }\n\n.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  border: 1px solid black;\n  height: 30rem; }\n  .board .cell, .board .enemy-cell {\n    border: 1px solid red;\n    text-align: center;\n    cursor: pointer; }\n", "",{"version":3,"sources":["webpack://./styles/_config.scss","webpack://./styles/style.scss"],"names":[],"mappings":"AAAA;EACI,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;ACM1B;EACI,sBAAsB,EAAA;;AAI1B;EACI,qBAAqB,EAAA;;AAGzB;EACI,uBAAuB,EAAA;;AAE3B;EACI,aAAa;EACb,mBAAmB;EACnB,6BAA6B,EAAA;;AAGjC;EACI,aAAa;EACb,mBAAmB,EAAA;EAFvB;IAIQ,uBAAuB;IACvB,WAAW;IACX,YAAY,EAAA;;AAKpB;EACI,aAAa;EACb,sCAAqC;EACrC,uBAAuB;EACvB,aAAa,EAAA;EAJjB;IAMQ,qBAAqB;IACrB,kBAAkB;IAClB,eAAe,EAAA","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}","@import './config';\n\n\n\n\n\n\n\n\n.hoverClass:hover{\n    background-color: pink;\n}\n\n\n.background{\n    background-color: red;\n}\n\n.error{\n    background-color: green;\n}\n.header{\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.boatContainer{\n    display: flex;\n    align-items: center;\n    .boatDisplay{\n        border: 2px solid black;\n        width: 50px;\n        height: 50px;\n    }\n}\n\n\n.board{\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    border: 1px solid black;\n    height: 30rem;\n    .cell{\n        border: 1px solid red;\n        text-align: center;\n        cursor: pointer;\n    }\n\n\n    .enemy-cell{\n        @extend .cell\n    }\n}"],"sourceRoot":""}]);
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
exports.randomNum = exports.enemyBoard = void 0;
const homepage_1 = __webpack_require__(/*! ./homepage */ "./src/homepage.ts");
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
exports.randomNum = randomNum;
function randomAlignment() {
    let randomArray = ['horizontal', 'vertical'];
    let randNumber = Math.floor(Math.random() * 2);
    return randomArray[randNumber];
}
// generating random spot for ai boats
const randomSpot = (array, shipArray) => {
    let ships = shipArray;
    while (ships.length) {
        let alignment = randomAlignment();
        let randArray = randomNum();
        let startCoord = (0, homepage_1.endCoordStartCoord)(randArray, ships[0], alignment).startCoord;
        let endCoord = (0, homepage_1.endCoordStartCoord)(randArray, ships[0], alignment).endCoord;
        if (isValidEnemySpot(startCoord, endCoord, alignment)) {
            enemyBoatShow(startCoord, ships[0], alignment);
            gameBoard_1.gameBoard.placeBoat(startCoord, ships[0], alignment, array);
            ships.shift();
        }
    }
};
function enemyBoatShow(coord, boat, alignment) {
    let startCoord = (0, homepage_1.endCoordStartCoord)(coord, boat, alignment).startCoord;
    let endCoord = (0, homepage_1.endCoordStartCoord)(coord, boat, alignment).endCoord;
    for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        for (let j = startCoord[1]; j <= endCoord[1]; j++) {
            let shipDiv = document.getElementById(`enemy-[${i},${j}]`);
            shipDiv.setAttribute('data-occupied', 'occupied');
            shipDiv.setAttribute('style', 'background:#4F899A');
        }
    }
}
const enemyBoard = (array, boatArray) => {
    let main = document.querySelector('body');
    main === null || main === void 0 ? void 0 : main.appendChild(board());
    randomSpot(array, boatArray);
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
const homepage_1 = __webpack_require__(/*! ./homepage */ "./src/homepage.ts");
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
    const placeBoat = (coord, boat, alignment, array) => {
        let startCoord = (0, homepage_1.endCoordStartCoord)(coord, boat, alignment).startCoord;
        let endCoord = (0, homepage_1.endCoordStartCoord)(coord, boat, alignment).endCoord;
        for (let i = startCoord[0]; i <= endCoord[0]; i++) {
            for (let j = startCoord[1]; j <= endCoord[1]; j++) {
                array[i][j].occupied = true;
                array[i][j].ship = boat;
            }
        }
    };
    const receiveAttack = (value, array) => {
        let spot = array[value[0]][value[1]];
        spot.attacked = true;
        if (spot.occupied === true) {
            ship_1.ship.hit(spot.ship);
            ship_1.ship.isSunk(spot.ship);
        }
    };
    return { createBoard, placeBoat, receiveAttack };
})();
exports.gameBoard = gameBoard;


/***/ }),

/***/ "./src/homepage.ts":
/*!*************************!*\
  !*** ./src/homepage.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.homePage = exports.startCoordArray = exports.showBoat = exports.isValidSpot = exports.boat = exports.endCoordStartCoord = void 0;
const gameBoard_1 = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.ts");
const ship_1 = __webpack_require__(/*! ./ship */ "./src/ship.ts");
const index_1 = __webpack_require__(/*! ./index */ "./src/index.ts");
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
            cellDiv.setAttribute('data-attacked', 'false');
            board.appendChild(cellDiv);
        }
    }
    return board;
};
// returns starting coordinate from id of element
function startCoordArray(value) {
    let coordArray = [];
    for (let i of value) {
        if (/[0-9]/.test(i)) {
            coordArray.push(Number(i));
        }
    }
    return coordArray;
}
exports.startCoordArray = startCoordArray;
// return start and end coordinates of the ship 
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
// display boat
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
// display the boat in the header which boat is to select
function boatDisplay(length) {
    const boatDiv = document.getElementById('boatDiv');
    boatDiv.innerHTML = '';
    for (let i = 0; i < length; i++) {
        let cell = document.createElement('div');
        cell.classList.add('boatDisplay');
        boatDiv.appendChild(cell);
    }
}
// checks is the spot is valid to place boat and returns a boolean value
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
// create boat array and return it
function boat() {
    let submarine = (0, ship_1.createShip)(Ships.submarine);
    let battleship = (0, ship_1.createShip)(Ships.battleship);
    let cruiser = (0, ship_1.createShip)(Ships.cruiser);
    let carrier = (0, ship_1.createShip)(Ships.carrier);
    let destroyer = (0, ship_1.createShip)(Ships.destroyer);
    return [submarine, battleship, cruiser, carrier, destroyer];
}
exports.boat = boat;
// show's boat when hover mouse
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
//this function places ship on the board and in the board array
function placeShip(array, board) {
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
                    if (count > 4)
                        startGameBtn(board, array, shipArray);
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
const startGameBtn = (board, array, ships) => {
    let main = document.querySelector('body');
    let btnDiv = document.createElement('div');
    let startBtn = document.createElement('button');
    btnDiv.appendChild(startBtn);
    main.appendChild(btnDiv);
    startBtn.innerHTML = 'game start';
    startBtn.addEventListener('click', () => {
        (0, index_1.game)(board, array, ships);
    });
};
function homePage() {
    let main = document.querySelector('body');
    main.appendChild(header());
    let board = gameBoard_1.gameBoard.createBoard();
    let playerBoard = createGame();
    main.appendChild(playerBoard);
    placeShip(board, playerBoard);
}
exports.homePage = homePage;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.playGame = exports.isGameOver = exports.game = void 0;
__webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
const gameBoard_1 = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.ts");
const homepage_1 = __webpack_require__(/*! ./homepage */ "./src/homepage.ts");
const aiBoard_1 = __webpack_require__(/*! ./aiBoard */ "./src/aiBoard.ts");
const player_1 = __webpack_require__(/*! ./player */ "./src/player.ts");
function game(board, boardArray, playerShip) {
    let enemyArray = gameBoard_1.gameBoard.createBoard();
    let enemyShips = (0, homepage_1.boat)();
    let enemyShipArray = [];
    enemyShips.forEach(ship => {
        enemyShipArray.push(ship);
    });
    let main = document.querySelector('body');
    main.innerHTML = '';
    main.appendChild(board);
    (0, aiBoard_1.enemyBoard)(enemyArray, enemyShips);
    playGame(boardArray, playerShip, enemyArray, enemyShipArray);
}
exports.game = game;
function clickHandler(boardArray, shipsArray, humanArray, humanShips) {
    let cells = document.querySelectorAll('.enemy-cell');
    console.log(shipsArray);
    cells.forEach(div => {
        div.addEventListener('click', (e) => {
            const target = e.target;
            let coordinates = target.id;
            let coordArray = (0, homepage_1.startCoordArray)(coordinates);
            if (!humanShips.every(isGameOver) && !shipsArray.every(isGameOver)) {
                if (boardArray[coordArray[0]][coordArray[1]].attacked === false) {
                    target.style.background = 'red';
                    gameBoard_1.gameBoard.receiveAttack(coordArray, boardArray);
                    if (boardArray[coordArray[0]][coordArray[1]].occupied) {
                        playGame(humanArray, humanShips, boardArray, shipsArray);
                    }
                    else {
                        (0, player_1.enemyChance)(humanArray);
                    }
                }
            }
        });
    });
}
function isGameOver(element, index, arr) {
    return element.isSunk === true;
}
exports.isGameOver = isGameOver;
function playGame(humanArray, humanShips, enemyArray, enemyShips) {
    clickHandler(enemyArray, enemyShips, humanArray, humanShips);
}
exports.playGame = playGame;
(function startGame() {
    (0, homepage_1.homePage)();
})();


/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.enemyChance = void 0;
const gameBoard_1 = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.ts");
const enemyChance = (boardArray) => {
    let randomSpot = filteredArray();
    let spot = document.getElementById(`[${randomSpot[0]},${randomSpot[1]}]`);
    spot.style.background = 'purple';
    spot.dataset.attacked = 'true';
    gameBoard_1.gameBoard.receiveAttack(randomSpot, boardArray);
    if (boardArray[randomSpot[0]][randomSpot[1]].occupied)
        enemyChance(boardArray);
};
exports.enemyChance = enemyChance;
function filteredArray() {
    const cells = document.querySelectorAll('.cell');
    let spotArray = [];
    cells.forEach(cell => {
        if (cell.dataset.attacked == "false")
            spotArray.push(cell);
    });
    let random = Math.floor(Math.random() * spotArray.length);
    let randomSpot = spotArray[random];
    let coord = randomSpot.id;
    let spot = [];
    for (let value of coord) {
        if (/[0-9]/.test(value))
            spot.push(Number(value));
    }
    return spot;
}


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
    }
    function isSunk(value) {
        if (value.hits === value.length) {
            return value.isSunk = true;
        }
    }
    return { hit, isSunk };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3N0eWxlcy9zdHlsZS5zY3NzPzdkZTIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FpQm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ob21lcGFnZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLmhvdmVyQ2xhc3M6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluazsgfVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDsgfVxcblxcbi5lcnJvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgfVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcblxcbi5ib2F0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuYm9hdENvbnRhaW5lciAuYm9hdERpc3BsYXkge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDsgfVxcblxcbi5ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogMzByZW07IH1cXG4gIC5ib2FyZCAuY2VsbCwgLmJvYXJkIC5lbmVteS1jZWxsIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy9fY29uZmlnLnNjc3NcIixcIndlYnBhY2s6Ly8uL3N0eWxlcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0IsRUFBQTs7QUNNMUI7RUFDSSxzQkFBc0IsRUFBQTs7QUFJMUI7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSx1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUZ2QjtJQUlRLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQUtwQjtFQUNJLGFBQWE7RUFDYixzQ0FBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBQTtFQUpqQjtJQU1RLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XCIsXCJAaW1wb3J0ICcuL2NvbmZpZyc7XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLmhvdmVyQ2xhc3M6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcblxcbi5iYWNrZ3JvdW5ke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5lcnJvcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYm9hdENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLmJvYXREaXNwbGF5e1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgfVxcbn1cXG5cXG5cXG4uYm9hcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IDMwcmVtO1xcbiAgICAuY2VsbHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcblxcbiAgICAuZW5lbXktY2VsbHtcXG4gICAgICAgIEBleHRlbmQgLmNlbGxcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmFuZG9tTnVtID0gZXhwb3J0cy5lbmVteUJvYXJkID0gdm9pZCAwO1xuY29uc3QgaG9tZXBhZ2VfMSA9IHJlcXVpcmUoXCIuL2hvbWVwYWdlXCIpO1xuY29uc3QgZ2FtZUJvYXJkXzEgPSByZXF1aXJlKFwiLi9nYW1lQm9hcmRcIik7XG5jb25zdCBib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBlbmVteUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW5lbXlCb2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoJ2VuZW15LWNlbGwnKTtcbiAgICAgICAgICAgIGNlbGxEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGBlbmVteS1bJHtpfSwke2p9XWApO1xuICAgICAgICAgICAgY2VsbERpdi5pbm5lckhUTUwgPSBgJHtpfSwke2p9YDtcbiAgICAgICAgICAgIGNlbGxEaXYuc2V0QXR0cmlidXRlKCdkYXRhLW9jY3VwaWVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBjZWxsRGl2LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAndW5vY2N1cGllZCcpO1xuICAgICAgICAgICAgZW5lbXlCb2FyZC5hcHBlbmRDaGlsZChjZWxsRGl2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW5lbXlCb2FyZDtcbn07XG5mdW5jdGlvbiBpc1ZhbGlkRW5lbXlTcG90KHN0YXJ0Q29vcmQsIGVuZENvb3JkLCBhbGlnbm1lbnQpIHtcbiAgICBpZiAoZW5kQ29vcmRbMV0gPiA5KVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGVuZENvb3JkWzBdID4gOSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSBzdGFydENvb3JkWzBdOyBpIDw9IGVuZENvb3JkWzBdOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0Q29vcmRbMV07IGogPD0gZW5kQ29vcmRbMV07IGorKykge1xuICAgICAgICAgICAgaWYgKGFsaWdubWVudCA9PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVuZW15LVske2kgLSAxfSwke2p9XWApO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50MV8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVuZW15LVske2kgLSAxfSwke2ogKyAxfV1gKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDFfMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlbmVteS1bJHtpIC0gMX0sJHtqIC0gMX1dYCk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVuZW15LVske2kgKyAxfSwke2p9XWApO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50Ml8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVuZW15LVske2kgKyAxfSwke2ogKyAxfV1gKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDJfMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlbmVteS1bJHtpICsgMX0sJHtqIC0gMX1dYCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQxICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQxLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDFfMSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50MV8xLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDFfMiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50MV8yLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDIuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Ml8xICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQyXzEuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Ml8yICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQyXzIuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFsaWdubWVudCA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZW5lbXktWyR7aX0sJHtqIC0gMX1dYCk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQzXzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZW5lbXktWyR7aSAtIDF9LCR7aiAtIDF9XWApO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50M18yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVuZW15LVske2kgKyAxfSwke2ogLSAxfV1gKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZW5lbXktWyR7aX0sJHtqICsgMX1dYCk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQ0XzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZW5lbXktWyR7aSAtIDF9LCR7aiArIDF9XWApO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50NF8yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGVuZW15LVske2kgKyAxfSwke2ogKyAxfV1gKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDMuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50M18xICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQzXzEuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50M18yICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQzXzIuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50NCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50NC5kYXRhc2V0Lm9jY3VwaWVkID09IFwib2NjdXBpZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQ0XzEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDRfMS5kYXRhc2V0Lm9jY3VwaWVkID09IFwib2NjdXBpZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQ0XzIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDRfMi5kYXRhc2V0Lm9jY3VwaWVkID09IFwib2NjdXBpZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5jb25zdCByYW5kb21OdW0gPSAoKSA9PiB7XG4gICAgbGV0IG51bTEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICBsZXQgbnVtMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIHJldHVybiBbTnVtYmVyKG51bTEpLCBOdW1iZXIobnVtMildO1xufTtcbmV4cG9ydHMucmFuZG9tTnVtID0gcmFuZG9tTnVtO1xuZnVuY3Rpb24gcmFuZG9tQWxpZ25tZW50KCkge1xuICAgIGxldCByYW5kb21BcnJheSA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xuICAgIGxldCByYW5kTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgcmV0dXJuIHJhbmRvbUFycmF5W3JhbmROdW1iZXJdO1xufVxuLy8gZ2VuZXJhdGluZyByYW5kb20gc3BvdCBmb3IgYWkgYm9hdHNcbmNvbnN0IHJhbmRvbVNwb3QgPSAoYXJyYXksIHNoaXBBcnJheSkgPT4ge1xuICAgIGxldCBzaGlwcyA9IHNoaXBBcnJheTtcbiAgICB3aGlsZSAoc2hpcHMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBhbGlnbm1lbnQgPSByYW5kb21BbGlnbm1lbnQoKTtcbiAgICAgICAgbGV0IHJhbmRBcnJheSA9IHJhbmRvbU51bSgpO1xuICAgICAgICBsZXQgc3RhcnRDb29yZCA9ICgwLCBob21lcGFnZV8xLmVuZENvb3JkU3RhcnRDb29yZCkocmFuZEFycmF5LCBzaGlwc1swXSwgYWxpZ25tZW50KS5zdGFydENvb3JkO1xuICAgICAgICBsZXQgZW5kQ29vcmQgPSAoMCwgaG9tZXBhZ2VfMS5lbmRDb29yZFN0YXJ0Q29vcmQpKHJhbmRBcnJheSwgc2hpcHNbMF0sIGFsaWdubWVudCkuZW5kQ29vcmQ7XG4gICAgICAgIGlmIChpc1ZhbGlkRW5lbXlTcG90KHN0YXJ0Q29vcmQsIGVuZENvb3JkLCBhbGlnbm1lbnQpKSB7XG4gICAgICAgICAgICBlbmVteUJvYXRTaG93KHN0YXJ0Q29vcmQsIHNoaXBzWzBdLCBhbGlnbm1lbnQpO1xuICAgICAgICAgICAgZ2FtZUJvYXJkXzEuZ2FtZUJvYXJkLnBsYWNlQm9hdChzdGFydENvb3JkLCBzaGlwc1swXSwgYWxpZ25tZW50LCBhcnJheSk7XG4gICAgICAgICAgICBzaGlwcy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmZ1bmN0aW9uIGVuZW15Qm9hdFNob3coY29vcmQsIGJvYXQsIGFsaWdubWVudCkge1xuICAgIGxldCBzdGFydENvb3JkID0gKDAsIGhvbWVwYWdlXzEuZW5kQ29vcmRTdGFydENvb3JkKShjb29yZCwgYm9hdCwgYWxpZ25tZW50KS5zdGFydENvb3JkO1xuICAgIGxldCBlbmRDb29yZCA9ICgwLCBob21lcGFnZV8xLmVuZENvb3JkU3RhcnRDb29yZCkoY29vcmQsIGJvYXQsIGFsaWdubWVudCkuZW5kQ29vcmQ7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0Q29vcmRbMF07IGkgPD0gZW5kQ29vcmRbMF07IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gc3RhcnRDb29yZFsxXTsgaiA8PSBlbmRDb29yZFsxXTsgaisrKSB7XG4gICAgICAgICAgICBsZXQgc2hpcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBlbmVteS1bJHtpfSwke2p9XWApO1xuICAgICAgICAgICAgc2hpcERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2NjdXBpZWQnLCAnb2NjdXBpZWQnKTtcbiAgICAgICAgICAgIHNoaXBEaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kOiM0Rjg5OUEnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IGVuZW15Qm9hcmQgPSAoYXJyYXksIGJvYXRBcnJheSkgPT4ge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIG1haW4gPT09IG51bGwgfHwgbWFpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWFpbi5hcHBlbmRDaGlsZChib2FyZCgpKTtcbiAgICByYW5kb21TcG90KGFycmF5LCBib2F0QXJyYXkpO1xufTtcbmV4cG9ydHMuZW5lbXlCb2FyZCA9IGVuZW15Qm9hcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2FtZUJvYXJkID0gdm9pZCAwO1xuY29uc3Qgc2hpcF8xID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcbmNvbnN0IGhvbWVwYWdlXzEgPSByZXF1aXJlKFwiLi9ob21lcGFnZVwiKTtcbmNvbnN0IGdhbWVCb2FyZCA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBnYW1lQm9hcmRBcnJheSA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGdhbWVCb2FyZEFycmF5W2ldID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBnYW1lQm9hcmRBcnJheVtpXVtqXSA9IHsgb2NjdXBpZWQ6IGZhbHNlLCBhdHRhY2tlZDogZmFsc2UsIHNoaXA6IHsgbGVuZ3RoOiAwLCBoaXRzOiAwLCBpc1N1bms6IGZhbHNlIH0gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiBnYW1lQm9hcmRBcnJheTtcbiAgICB9O1xuICAgIGNvbnN0IHBsYWNlQm9hdCA9IChjb29yZCwgYm9hdCwgYWxpZ25tZW50LCBhcnJheSkgPT4ge1xuICAgICAgICBsZXQgc3RhcnRDb29yZCA9ICgwLCBob21lcGFnZV8xLmVuZENvb3JkU3RhcnRDb29yZCkoY29vcmQsIGJvYXQsIGFsaWdubWVudCkuc3RhcnRDb29yZDtcbiAgICAgICAgbGV0IGVuZENvb3JkID0gKDAsIGhvbWVwYWdlXzEuZW5kQ29vcmRTdGFydENvb3JkKShjb29yZCwgYm9hdCwgYWxpZ25tZW50KS5lbmRDb29yZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Q29vcmRbMF07IGkgPD0gZW5kQ29vcmRbMF07IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0Q29vcmRbMV07IGogPD0gZW5kQ29vcmRbMV07IGorKykge1xuICAgICAgICAgICAgICAgIGFycmF5W2ldW2pdLm9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBhcnJheVtpXVtqXS5zaGlwID0gYm9hdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh2YWx1ZSwgYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IHNwb3QgPSBhcnJheVt2YWx1ZVswXV1bdmFsdWVbMV1dO1xuICAgICAgICBzcG90LmF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNwb3Qub2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNoaXBfMS5zaGlwLmhpdChzcG90LnNoaXApO1xuICAgICAgICAgICAgc2hpcF8xLnNoaXAuaXNTdW5rKHNwb3Quc2hpcCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB7IGNyZWF0ZUJvYXJkLCBwbGFjZUJvYXQsIHJlY2VpdmVBdHRhY2sgfTtcbn0pKCk7XG5leHBvcnRzLmdhbWVCb2FyZCA9IGdhbWVCb2FyZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ob21lUGFnZSA9IGV4cG9ydHMuc3RhcnRDb29yZEFycmF5ID0gZXhwb3J0cy5zaG93Qm9hdCA9IGV4cG9ydHMuaXNWYWxpZFNwb3QgPSBleHBvcnRzLmJvYXQgPSBleHBvcnRzLmVuZENvb3JkU3RhcnRDb29yZCA9IHZvaWQgMDtcbmNvbnN0IGdhbWVCb2FyZF8xID0gcmVxdWlyZShcIi4vZ2FtZUJvYXJkXCIpO1xuY29uc3Qgc2hpcF8xID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcbmNvbnN0IGluZGV4XzEgPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcbnZhciBTaGlwcztcbihmdW5jdGlvbiAoU2hpcHMpIHtcbiAgICBTaGlwc1tTaGlwc1tcImRlc3Ryb3llclwiXSA9IDJdID0gXCJkZXN0cm95ZXJcIjtcbiAgICBTaGlwc1tTaGlwc1tcInN1Ym1hcmluZVwiXSA9IDNdID0gXCJzdWJtYXJpbmVcIjtcbiAgICBTaGlwc1tTaGlwc1tcImNydWlzZXJcIl0gPSAzXSA9IFwiY3J1aXNlclwiO1xuICAgIFNoaXBzW1NoaXBzW1wiYmF0dGxlc2hpcFwiXSA9IDRdID0gXCJiYXR0bGVzaGlwXCI7XG4gICAgU2hpcHNbU2hpcHNbXCJjYXJyaWVyXCJdID0gNV0gPSBcImNhcnJpZXJcIjtcbn0pKFNoaXBzIHx8IChTaGlwcyA9IHt9KSk7XG5jb25zdCBjcmVhdGVHYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBjZWxsRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgWyR7aX0sJHtqfV1gKTtcbiAgICAgICAgICAgIGNlbGxEaXYuaW5uZXJIVE1MID0gYCR7aX0sJHtqfWA7XG4gICAgICAgICAgICBjZWxsRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1vY2N1cGllZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgY2VsbERpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXR0YWNrZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGxEaXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbn07XG4vLyByZXR1cm5zIHN0YXJ0aW5nIGNvb3JkaW5hdGUgZnJvbSBpZCBvZiBlbGVtZW50XG5mdW5jdGlvbiBzdGFydENvb3JkQXJyYXkodmFsdWUpIHtcbiAgICBsZXQgY29vcmRBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgb2YgdmFsdWUpIHtcbiAgICAgICAgaWYgKC9bMC05XS8udGVzdChpKSkge1xuICAgICAgICAgICAgY29vcmRBcnJheS5wdXNoKE51bWJlcihpKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkQXJyYXk7XG59XG5leHBvcnRzLnN0YXJ0Q29vcmRBcnJheSA9IHN0YXJ0Q29vcmRBcnJheTtcbi8vIHJldHVybiBzdGFydCBhbmQgZW5kIGNvb3JkaW5hdGVzIG9mIHRoZSBzaGlwIFxuZnVuY3Rpb24gZW5kQ29vcmRTdGFydENvb3JkKGNvb3JkLCBib2F0LCBhbGlnbm1lbnQpIHtcbiAgICBsZXQgc3RhcnRDb29yZCA9IFtdO1xuICAgIGxldCBlbmRDb29yZCA9IFtdO1xuICAgIGlmIChhbGlnbm1lbnQgPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHN0YXJ0Q29vcmQgPSBjb29yZDtcbiAgICAgICAgZW5kQ29vcmQgPSBbY29vcmRbMF0sIGNvb3JkWzFdICsgKGJvYXQubGVuZ3RoIC0gMSldO1xuICAgIH1cbiAgICBlbHNlIGlmIChhbGlnbm1lbnQgPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBzdGFydENvb3JkID0gY29vcmQ7XG4gICAgICAgIGVuZENvb3JkID0gW2Nvb3JkWzBdICsgKGJvYXQubGVuZ3RoIC0gMSksIGNvb3JkWzFdXTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc3RhcnRDb29yZCwgZW5kQ29vcmQgfTtcbn1cbmV4cG9ydHMuZW5kQ29vcmRTdGFydENvb3JkID0gZW5kQ29vcmRTdGFydENvb3JkO1xuLy8gZGlzcGxheSBib2F0XG5mdW5jdGlvbiBzaG93Qm9hdChjb29yZCwgYm9hdCwgYWxpZ25tZW50KSB7XG4gICAgbGV0IHN0YXJ0Q29vcmQgPSBlbmRDb29yZFN0YXJ0Q29vcmQoY29vcmQsIGJvYXQsIGFsaWdubWVudCkuc3RhcnRDb29yZDtcbiAgICBsZXQgZW5kQ29vcmQgPSBlbmRDb29yZFN0YXJ0Q29vcmQoY29vcmQsIGJvYXQsIGFsaWdubWVudCkuZW5kQ29vcmQ7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0Q29vcmRbMF07IGkgPD0gZW5kQ29vcmRbMF07IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gc3RhcnRDb29yZFsxXTsgaiA8PSBlbmRDb29yZFsxXTsgaisrKSB7XG4gICAgICAgICAgICBsZXQgc2hpcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBbJHtpfSwke2p9XWApO1xuICAgICAgICAgICAgc2hpcERpdiA9PT0gbnVsbCB8fCBzaGlwRGl2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzaGlwRGl2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZDpwaW5rJyk7XG4gICAgICAgICAgICBzaGlwRGl2ID09PSBudWxsIHx8IHNoaXBEaXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNoaXBEaXYuc2V0QXR0cmlidXRlKCdkYXRhLW9jY3VwaWVkJywgJ29jY3VwaWVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLnNob3dCb2F0ID0gc2hvd0JvYXQ7XG4vLyBkaXNwbGF5IHRoZSBib2F0IGluIHRoZSBoZWFkZXIgd2hpY2ggYm9hdCBpcyB0byBzZWxlY3RcbmZ1bmN0aW9uIGJvYXREaXNwbGF5KGxlbmd0aCkge1xuICAgIGNvbnN0IGJvYXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hdERpdicpO1xuICAgIGJvYXREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2JvYXREaXNwbGF5Jyk7XG4gICAgICAgIGJvYXREaXYuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxufVxuLy8gY2hlY2tzIGlzIHRoZSBzcG90IGlzIHZhbGlkIHRvIHBsYWNlIGJvYXQgYW5kIHJldHVybnMgYSBib29sZWFuIHZhbHVlXG5mdW5jdGlvbiBpc1ZhbGlkU3BvdChzdGFydENvb3JkLCBlbmRDb29yZCwgYWxpZ25tZW50KSB7XG4gICAgaWYgKGVuZENvb3JkWzFdID4gOSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChlbmRDb29yZFswXSA+IDkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gc3RhcnRDb29yZFswXTsgaSA8PSBlbmRDb29yZFswXTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSBzdGFydENvb3JkWzFdOyBqIDw9IGVuZENvb3JkWzFdOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChhbGlnbm1lbnQgPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBbJHtpIC0gMX0sJHtqfV1gKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDFfMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBbJHtpIC0gMX0sJHtqICsgMX1dYCk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQxXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgWyR7aSAtIDF9LCR7aiAtIDF9XWApO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBbJHtpICsgMX0sJHtqfV1gKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDJfMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBbJHtpICsgMX0sJHtqICsgMX1dYCk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQyXzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgWyR7aSArIDF9LCR7aiAtIDF9XWApO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50MSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50MS5kYXRhc2V0Lm9jY3VwaWVkID09IFwib2NjdXBpZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQxXzEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDFfMS5kYXRhc2V0Lm9jY3VwaWVkID09IFwib2NjdXBpZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQxXzIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDFfMi5kYXRhc2V0Lm9jY3VwaWVkID09IFwib2NjdXBpZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQyLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDJfMSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Ml8xLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDJfMiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Ml8yLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbGlnbm1lbnQgPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFske2l9LCR7aiAtIDF9XWApO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50M18xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFske2kgLSAxfSwke2ogLSAxfV1gKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDNfMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBbJHtpICsgMX0sJHtqIC0gMX1dYCk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFske2l9LCR7aiArIDF9XWApO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50NF8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFske2kgLSAxfSwke2ogKyAxfV1gKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudDRfMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBbJHtpICsgMX0sJHtqICsgMX1dYCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQzLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDNfMSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50M18xLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDNfMiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50M18yLmRhdGFzZXQub2NjdXBpZWQgPT0gXCJvY2N1cGllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDQuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50NF8xICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQ0XzEuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50NF8yICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQ0XzIuZGF0YXNldC5vY2N1cGllZCA9PSBcIm9jY3VwaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0cy5pc1ZhbGlkU3BvdCA9IGlzVmFsaWRTcG90O1xuLy8gY3JlYXRlIGJvYXQgYXJyYXkgYW5kIHJldHVybiBpdFxuZnVuY3Rpb24gYm9hdCgpIHtcbiAgICBsZXQgc3VibWFyaW5lID0gKDAsIHNoaXBfMS5jcmVhdGVTaGlwKShTaGlwcy5zdWJtYXJpbmUpO1xuICAgIGxldCBiYXR0bGVzaGlwID0gKDAsIHNoaXBfMS5jcmVhdGVTaGlwKShTaGlwcy5iYXR0bGVzaGlwKTtcbiAgICBsZXQgY3J1aXNlciA9ICgwLCBzaGlwXzEuY3JlYXRlU2hpcCkoU2hpcHMuY3J1aXNlcik7XG4gICAgbGV0IGNhcnJpZXIgPSAoMCwgc2hpcF8xLmNyZWF0ZVNoaXApKFNoaXBzLmNhcnJpZXIpO1xuICAgIGxldCBkZXN0cm95ZXIgPSAoMCwgc2hpcF8xLmNyZWF0ZVNoaXApKFNoaXBzLmRlc3Ryb3llcik7XG4gICAgcmV0dXJuIFtzdWJtYXJpbmUsIGJhdHRsZXNoaXAsIGNydWlzZXIsIGNhcnJpZXIsIGRlc3Ryb3llcl07XG59XG5leHBvcnRzLmJvYXQgPSBib2F0O1xuLy8gc2hvdydzIGJvYXQgd2hlbiBob3ZlciBtb3VzZVxuY29uc3QgbW91c2VPdmVyID0gKHRhcmdldCwgYm9hdCwgYWxpZ25tZW50KSA9PiB7XG4gICAgbGV0IGNvb3JkaW5hdGVzID0gdGFyZ2V0LmlkO1xuICAgIGxldCBjb29yZCA9IHN0YXJ0Q29vcmRBcnJheShjb29yZGluYXRlcyk7XG4gICAgbGV0IHN0YXJ0Q29vcmQgPSBlbmRDb29yZFN0YXJ0Q29vcmQoY29vcmQsIGJvYXQsIGFsaWdubWVudCkuc3RhcnRDb29yZDtcbiAgICBsZXQgZW5kQ29vcmQgPSBlbmRDb29yZFN0YXJ0Q29vcmQoY29vcmQsIGJvYXQsIGFsaWdubWVudCkuZW5kQ29vcmQ7XG4gICAgaWYgKGlzVmFsaWRTcG90KHN0YXJ0Q29vcmQsIGVuZENvb3JkLCBhbGlnbm1lbnQpKSB7IC8vIHRvZG8gc2V0IGFsaWdubWVudFxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRDb29yZFswXTsgaSA8PSBlbmRDb29yZFswXTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gc3RhcnRDb29yZFsxXTsgaiA8PSBlbmRDb29yZFsxXTsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgWyR7aX0sJHtqfV1gKTtcbiAgICAgICAgICAgICAgICBzaGlwRGl2LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xufTtcbmNvbnN0IG1vdXNlT3V0ID0gKHRhcmdldCwgYm9hdCwgYWxpZ25tZW50KSA9PiB7XG4gICAgbGV0IGNvb3JkaW5hdGVzID0gdGFyZ2V0LmlkO1xuICAgIGxldCBjb29yZCA9IHN0YXJ0Q29vcmRBcnJheShjb29yZGluYXRlcyk7XG4gICAgbGV0IHN0YXJ0Q29vcmQgPSBlbmRDb29yZFN0YXJ0Q29vcmQoY29vcmQsIGJvYXQsIGFsaWdubWVudCkuc3RhcnRDb29yZDtcbiAgICBsZXQgZW5kQ29vcmQgPSBlbmRDb29yZFN0YXJ0Q29vcmQoY29vcmQsIGJvYXQsIGFsaWdubWVudCkuZW5kQ29vcmQ7XG4gICAgaWYgKGlzVmFsaWRTcG90KHN0YXJ0Q29vcmQsIGVuZENvb3JkLCBhbGlnbm1lbnQpKSB7IC8vIHRvZG8gc2V0IGFsaWdubWVudFxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRDb29yZFswXTsgaSA8PSBlbmRDb29yZFswXTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gc3RhcnRDb29yZFsxXTsgaiA8PSBlbmRDb29yZFsxXTsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgWyR7aX0sJHtqfV1gKTtcbiAgICAgICAgICAgICAgICBzaGlwRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tncm91bmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xufTtcbi8vdGhpcyBmdW5jdGlvbiBwbGFjZXMgc2hpcCBvbiB0aGUgYm9hcmQgYW5kIGluIHRoZSBib2FyZCBhcnJheVxuZnVuY3Rpb24gcGxhY2VTaGlwKGFycmF5LCBib2FyZCkge1xuICAgIGxldCBhbGlnbm1lbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgbGV0IHNoaXBBcnJheSA9IGJvYXQoKTtcbiAgICBsZXQgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgYm9hdERpc3BsYXkoc2hpcEFycmF5W2NvdW50XS5sZW5ndGgpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxpZ25tZW50QnRuXCIpO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGNvdW50IDw9IDQpIHtcbiAgICAgICAgICAgIGlmIChhbGlnbm1lbnQgPT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgICAgICBhbGlnbm1lbnQgPSAndmVydGljYWwnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ2hvcml6b250YWwnO1xuICAgICAgICAgICAgICAgIGFsaWdubWVudCA9ICdob3Jpem9udGFsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNlbGxzLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChjb3VudCA8PSA0KSB7XG4gICAgICAgICAgICAgICAgbW91c2VPdmVyKHRhcmdldCwgc2hpcEFycmF5W2NvdW50XSwgYWxpZ25tZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2VsbHMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoY291bnQgPD0gNCkge1xuICAgICAgICAgICAgICAgIG1vdXNlT3V0KHRhcmdldCwgc2hpcEFycmF5W2NvdW50XSwgYWxpZ25tZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2VsbHMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHNoaXBBbGlnbm1lbnQgPSBhbGlnbm1lbnQ7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChjb3VudCA8PSA0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydENvb3JkID0gc3RhcnRDb29yZEFycmF5KGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBlbmRDb29yZFN0YXJ0Q29vcmQoc3RhcnRDb29yZCwgc2hpcEFycmF5W2NvdW50XSwgYWxpZ25tZW50KS5zdGFydENvb3JkO1xuICAgICAgICAgICAgICAgIGxldCBlbmRDb29yZCA9IGVuZENvb3JkU3RhcnRDb29yZChzdGFydENvb3JkLCBzaGlwQXJyYXlbY291bnRdLCBhbGlnbm1lbnQpLmVuZENvb3JkO1xuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkU3BvdChzdGFydCwgZW5kQ29vcmQsIGFsaWdubWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUJvYXJkXzEuZ2FtZUJvYXJkLnBsYWNlQm9hdChzdGFydENvb3JkLCBzaGlwQXJyYXlbY291bnRdLCBzaGlwQWxpZ25tZW50LCBhcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dCb2F0KHN0YXJ0Q29vcmQsIHNoaXBBcnJheVtjb3VudF0sIHNoaXBBbGlnbm1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPD0gNClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXREaXNwbGF5KHNoaXBBcnJheVtjb3VudF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID4gNClcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0R2FtZUJ0bihib2FyZCwgYXJyYXksIHNoaXBBcnJheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGhlYWQuaW5uZXJIVE1MID0gYDxoMT5jb29sPzwvaDE+YDtcbiAgICBjb25zdCBib2F0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9hdERpdi50ZXh0Q29udGVudCA9ICdoZXJlIHdpbGwgaGF2ZSBib2F0cyc7XG4gICAgYm9hdERpdi5jbGFzc0xpc3QuYWRkKCdib2F0Q29udGFpbmVyJyk7XG4gICAgYm9hdERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JvYXREaXYnKTtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGJvYXREaXYpO1xuICAgIGNvbnN0IGFsaWdubWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFsaWdubWVudEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJhbGlnbm1lbnRCdG5cIik7XG4gICAgYWxpZ25tZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2FsaWdubWVudEJ0bicpO1xuICAgIGFsaWdubWVudEJ0bi50ZXh0Q29udGVudCA9ICdob3Jpem9udGFsJztcbiAgICBoZWFkLmFwcGVuZENoaWxkKGFsaWdubWVudEJ0bik7XG4gICAgcmV0dXJuIGhlYWQ7XG59XG5jb25zdCBzdGFydEdhbWVCdG4gPSAoYm9hcmQsIGFycmF5LCBzaGlwcykgPT4ge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5EaXYuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbiAgICBzdGFydEJ0bi5pbm5lckhUTUwgPSAnZ2FtZSBzdGFydCc7XG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICgwLCBpbmRleF8xLmdhbWUpKGJvYXJkLCBhcnJheSwgc2hpcHMpO1xuICAgIH0pO1xufTtcbmZ1bmN0aW9uIGhvbWVQYWdlKCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICAgIGxldCBib2FyZCA9IGdhbWVCb2FyZF8xLmdhbWVCb2FyZC5jcmVhdGVCb2FyZCgpO1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUdhbWUoKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcbiAgICBwbGFjZVNoaXAoYm9hcmQsIHBsYXllckJvYXJkKTtcbn1cbmV4cG9ydHMuaG9tZVBhZ2UgPSBob21lUGFnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wbGF5R2FtZSA9IGV4cG9ydHMuaXNHYW1lT3ZlciA9IGV4cG9ydHMuZ2FtZSA9IHZvaWQgMDtcbnJlcXVpcmUoXCIuLi9zdHlsZXMvc3R5bGUuc2Nzc1wiKTtcbmNvbnN0IGdhbWVCb2FyZF8xID0gcmVxdWlyZShcIi4vZ2FtZUJvYXJkXCIpO1xuY29uc3QgaG9tZXBhZ2VfMSA9IHJlcXVpcmUoXCIuL2hvbWVwYWdlXCIpO1xuY29uc3QgYWlCb2FyZF8xID0gcmVxdWlyZShcIi4vYWlCb2FyZFwiKTtcbmNvbnN0IHBsYXllcl8xID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xuZnVuY3Rpb24gZ2FtZShib2FyZCwgYm9hcmRBcnJheSwgcGxheWVyU2hpcCkge1xuICAgIGxldCBlbmVteUFycmF5ID0gZ2FtZUJvYXJkXzEuZ2FtZUJvYXJkLmNyZWF0ZUJvYXJkKCk7XG4gICAgbGV0IGVuZW15U2hpcHMgPSAoMCwgaG9tZXBhZ2VfMS5ib2F0KSgpO1xuICAgIGxldCBlbmVteVNoaXBBcnJheSA9IFtdO1xuICAgIGVuZW15U2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgZW5lbXlTaGlwQXJyYXkucHVzaChzaGlwKTtcbiAgICB9KTtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICgwLCBhaUJvYXJkXzEuZW5lbXlCb2FyZCkoZW5lbXlBcnJheSwgZW5lbXlTaGlwcyk7XG4gICAgcGxheUdhbWUoYm9hcmRBcnJheSwgcGxheWVyU2hpcCwgZW5lbXlBcnJheSwgZW5lbXlTaGlwQXJyYXkpO1xufVxuZXhwb3J0cy5nYW1lID0gZ2FtZTtcbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcihib2FyZEFycmF5LCBzaGlwc0FycmF5LCBodW1hbkFycmF5LCBodW1hblNoaXBzKSB7XG4gICAgbGV0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVuZW15LWNlbGwnKTtcbiAgICBjb25zb2xlLmxvZyhzaGlwc0FycmF5KTtcbiAgICBjZWxscy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHRhcmdldC5pZDtcbiAgICAgICAgICAgIGxldCBjb29yZEFycmF5ID0gKDAsIGhvbWVwYWdlXzEuc3RhcnRDb29yZEFycmF5KShjb29yZGluYXRlcyk7XG4gICAgICAgICAgICBpZiAoIWh1bWFuU2hpcHMuZXZlcnkoaXNHYW1lT3ZlcikgJiYgIXNoaXBzQXJyYXkuZXZlcnkoaXNHYW1lT3ZlcikpIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRBcnJheVtjb29yZEFycmF5WzBdXVtjb29yZEFycmF5WzFdXS5hdHRhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUJvYXJkXzEuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRBcnJheSwgYm9hcmRBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChib2FyZEFycmF5W2Nvb3JkQXJyYXlbMF1dW2Nvb3JkQXJyYXlbMV1dLm9jY3VwaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5R2FtZShodW1hbkFycmF5LCBodW1hblNoaXBzLCBib2FyZEFycmF5LCBzaGlwc0FycmF5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLCBwbGF5ZXJfMS5lbmVteUNoYW5jZSkoaHVtYW5BcnJheSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNHYW1lT3ZlcihlbGVtZW50LCBpbmRleCwgYXJyKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuaXNTdW5rID09PSB0cnVlO1xufVxuZXhwb3J0cy5pc0dhbWVPdmVyID0gaXNHYW1lT3ZlcjtcbmZ1bmN0aW9uIHBsYXlHYW1lKGh1bWFuQXJyYXksIGh1bWFuU2hpcHMsIGVuZW15QXJyYXksIGVuZW15U2hpcHMpIHtcbiAgICBjbGlja0hhbmRsZXIoZW5lbXlBcnJheSwgZW5lbXlTaGlwcywgaHVtYW5BcnJheSwgaHVtYW5TaGlwcyk7XG59XG5leHBvcnRzLnBsYXlHYW1lID0gcGxheUdhbWU7XG4oZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgICgwLCBob21lcGFnZV8xLmhvbWVQYWdlKSgpO1xufSkoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lbmVteUNoYW5jZSA9IHZvaWQgMDtcbmNvbnN0IGdhbWVCb2FyZF8xID0gcmVxdWlyZShcIi4vZ2FtZUJvYXJkXCIpO1xuY29uc3QgZW5lbXlDaGFuY2UgPSAoYm9hcmRBcnJheSkgPT4ge1xuICAgIGxldCByYW5kb21TcG90ID0gZmlsdGVyZWRBcnJheSgpO1xuICAgIGxldCBzcG90ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYFske3JhbmRvbVNwb3RbMF19LCR7cmFuZG9tU3BvdFsxXX1dYCk7XG4gICAgc3BvdC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3B1cnBsZSc7XG4gICAgc3BvdC5kYXRhc2V0LmF0dGFja2VkID0gJ3RydWUnO1xuICAgIGdhbWVCb2FyZF8xLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbVNwb3QsIGJvYXJkQXJyYXkpO1xuICAgIGlmIChib2FyZEFycmF5W3JhbmRvbVNwb3RbMF1dW3JhbmRvbVNwb3RbMV1dLm9jY3VwaWVkKVxuICAgICAgICBlbmVteUNoYW5jZShib2FyZEFycmF5KTtcbn07XG5leHBvcnRzLmVuZW15Q2hhbmNlID0gZW5lbXlDaGFuY2U7XG5mdW5jdGlvbiBmaWx0ZXJlZEFycmF5KCkge1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgICBsZXQgc3BvdEFycmF5ID0gW107XG4gICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgaWYgKGNlbGwuZGF0YXNldC5hdHRhY2tlZCA9PSBcImZhbHNlXCIpXG4gICAgICAgICAgICBzcG90QXJyYXkucHVzaChjZWxsKTtcbiAgICB9KTtcbiAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BvdEFycmF5Lmxlbmd0aCk7XG4gICAgbGV0IHJhbmRvbVNwb3QgPSBzcG90QXJyYXlbcmFuZG9tXTtcbiAgICBsZXQgY29vcmQgPSByYW5kb21TcG90LmlkO1xuICAgIGxldCBzcG90ID0gW107XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgY29vcmQpIHtcbiAgICAgICAgaWYgKC9bMC05XS8udGVzdCh2YWx1ZSkpXG4gICAgICAgICAgICBzcG90LnB1c2goTnVtYmVyKHZhbHVlKSk7XG4gICAgfVxuICAgIHJldHVybiBzcG90O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNoaXAgPSBleHBvcnRzLmNyZWF0ZVNoaXAgPSB2b2lkIDA7XG5mdW5jdGlvbiBjcmVhdGVTaGlwKGxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgaGl0czogMCxcbiAgICAgICAgaXNTdW5rOiBmYWxzZSxcbiAgICB9O1xufVxuZXhwb3J0cy5jcmVhdGVTaGlwID0gY3JlYXRlU2hpcDtcbmNvbnN0IHNoaXAgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGhpdCh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUuaGl0cyA8PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5oaXRzICs9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNTdW5rKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5oaXRzID09PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5pc1N1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGhpdCwgaXNTdW5rIH07XG59KSgpO1xuZXhwb3J0cy5zaGlwID0gc2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9