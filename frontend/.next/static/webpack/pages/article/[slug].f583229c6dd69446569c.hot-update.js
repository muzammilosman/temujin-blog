/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article/[slug]",{

/***/ "./pages/article/[slug].js":
/*!*********************************!*\
  !*** ./pages/article/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/image */ \"./components/image.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/seo */ \"./components/seo.js\");\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/media */ \"./lib/media.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/muzammilosman/Documents/codelearn/my-project/frontend/pages/article/[slug].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Article = function Article(_ref) {\n  _s();\n\n  var article = _ref.article,\n      categories = _ref.categories,\n      articleList = _ref.articleList;\n  var imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(article.attributes.image);\n  var author = article.attributes.author.data.attributes;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),\n      prevArticle = _useState[0],\n      setPrev = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),\n      nextArticle = _useState2[0],\n      setNext = _useState2[1];\n\n  var seo = {\n    metaTitle: article.attributes.title,\n    metaDescription: article.attributes.description,\n    shareImage: article.attributes.image,\n    article: true\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {\n    console.log(article);\n    var currentArticleIndex = articleList.findIndex(function (indexArticle) {\n      return indexArticle.path === article.attributes.slug;\n    });\n    console.log(currentArticleIndex);\n\n    if (currentArticleIndex >= 0) {\n      articleList[currentArticleIndex - 1] ? setPrev(articleList[currentArticleIndex - 1]) : setPrev('');\n      articleList[currentArticleIndex + 1] ? setNext(articleList[currentArticleIndex + 1]) : setNext('');\n    }\n  }, [articleList]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    categories: categories.data,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_5__.default, {\n      seo: seo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"blog-title text-center py-5\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: article.attributes.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"col-md-6 m-auto\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"blog-banner py-1 w-100\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: imageUrl,\n          alt: \"blog banner\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"uk-section\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"uk-container uk-container-small\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {\n          source: article.attributes.content,\n          escapeHtml: false\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n          className: \"uk-divider-small\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"uk-grid-small uk-flex-left\",\n          \"data-uk-grid\": \"true\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: article.attributes.author.picture && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_4__.default, {\n              image: article.attributes.author.picture\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"uk-width-expand\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"uk-margin-remove-bottom\",\n              children: [\"By \", author.name ? author.name : \"Anonymous\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"uk-text-meta uk-margin-remove-top\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {\n                format: \"MMM Do YYYY\",\n                children: article.attributes.published_at\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"nav-blogs-section row py-4\",\n          children: [prevArticle ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 nav-blog-item previous-blog text-left\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"nav-label\",\n              children: \"Previous blog\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 21\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n              href: \"/article/\".concat(prevArticle.path),\n              className: \"nav-name text-decoration-none\",\n              children: prevArticle.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 21\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 17\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false), nextArticle ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 nav-blog-item next-blog text-right\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"nav-label\",\n              children: \"Next blog\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n              href: \"/article/\".concat(nextArticle.path),\n              className: \"nav-name text-decoration-none\",\n              children: nextArticle.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 19\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 15\n          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Article, \"EvJ+xKSJtVP1aHpy3mnr6B3PqXE=\");\n\n_c = Article;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\n\nvar _c;\n\n$RefreshReg$(_c, \"Article\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanM/MzZkOCJdLCJuYW1lcyI6WyJBcnRpY2xlIiwiYXJ0aWNsZSIsImNhdGVnb3JpZXMiLCJhcnRpY2xlTGlzdCIsImltYWdlVXJsIiwiZ2V0U3RyYXBpTWVkaWEiLCJhdHRyaWJ1dGVzIiwiaW1hZ2UiLCJhdXRob3IiLCJkYXRhIiwidXNlU3RhdGUiLCJwcmV2QXJ0aWNsZSIsInNldFByZXYiLCJuZXh0QXJ0aWNsZSIsInNldE5leHQiLCJzZW8iLCJtZXRhVGl0bGUiLCJ0aXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwic2hhcmVJbWFnZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50QXJ0aWNsZUluZGV4IiwiZmluZEluZGV4IiwiaW5kZXhBcnRpY2xlIiwicGF0aCIsInNsdWciLCJjb250ZW50IiwicGljdHVyZSIsIm5hbWUiLCJwdWJsaXNoZWRfYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUEwQztBQUFBOztBQUFBLE1BQXZDQyxPQUF1QyxRQUF2Q0EsT0FBdUM7QUFBQSxNQUE5QkMsVUFBOEIsUUFBOUJBLFVBQThCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUN4RCxNQUFNQyxRQUFRLEdBQUdDLDBEQUFjLENBQUNKLE9BQU8sQ0FBQ0ssVUFBUixDQUFtQkMsS0FBcEIsQ0FBL0I7QUFDQSxNQUFNQyxNQUFNLEdBQUdQLE9BQU8sQ0FBQ0ssVUFBUixDQUFtQkUsTUFBbkIsQ0FBMEJDLElBQTFCLENBQStCSCxVQUE5Qzs7QUFGd0Qsa0JBR3pCSSwrQ0FBUSxDQUFDLEVBQUQsQ0FIaUI7QUFBQSxNQUdqREMsV0FIaUQ7QUFBQSxNQUdwQ0MsT0FIb0M7O0FBQUEs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QUFBQTtBQUFBLG1CQURXLGdCQUlELDZJQWJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdURELENBOUVEOztHQUFNakIsTzs7S0FBQUEsTzs7QUFzSE4sK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIlxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ltYWdlXCJcbmltcG9ydCBTZW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VvXCJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uLy4uL2xpYi9tZWRpYVwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBBcnRpY2xlID0gKHsgYXJ0aWNsZSwgY2F0ZWdvcmllcywgYXJ0aWNsZUxpc3QgfSkgPT4ge1xuICBjb25zdCBpbWFnZVVybCA9IGdldFN0cmFwaU1lZGlhKGFydGljbGUuYXR0cmlidXRlcy5pbWFnZSlcbiAgY29uc3QgYXV0aG9yID0gYXJ0aWNsZS5hdHRyaWJ1dGVzLmF1dGhvci5kYXRhLmF0dHJpYnV0ZXM7XG4gIGNvbnN0IFtwcmV2QXJ0aWNsZSwgc2V0UHJldl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtuZXh0QXJ0aWNsZSwgc2V0TmV4dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgc2VvID0ge1xuICAgIG1ldGFUaXRsZTogYXJ0aWNsZS5hdHRyaWJ1dGVzLnRpdGxlLFxuICAgIG1ldGFEZXNjcmlwdGlvbjogYXJ0aWNsZS5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uLFxuICAgIHNoYXJlSW1hZ2U6IGFydGljbGUuYXR0cmlidXRlcy5pbWFnZSxcbiAgICBhcnRpY2xlOiB0cnVlLFxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhcnRpY2xlKTtcbiAgICBjb25zdCBjdXJyZW50QXJ0aWNsZUluZGV4ID0gYXJ0aWNsZUxpc3QuZmluZEluZGV4KChpbmRleEFydGljbGUpID0+IGluZGV4QXJ0aWNsZS5wYXRoID09PSBhcnRpY2xlLmF0dHJpYnV0ZXMuc2x1Zyk7XG4gICAgY29uc29sZS5sb2coY3VycmVudEFydGljbGVJbmRleCk7XG4gICAgaWYoY3VycmVudEFydGljbGVJbmRleCA+PSAwKXtcbiAgICAgIGFydGljbGVMaXN0W2N1cnJlbnRBcnRpY2xlSW5kZXggLSAxXSA/IHNldFByZXYoYXJ0aWNsZUxpc3RbY3VycmVudEFydGljbGVJbmRleCAtIDFdKSA6IHNldFByZXYoJycpO1xuICAgICAgYXJ0aWNsZUxpc3RbY3VycmVudEFydGljbGVJbmRleCArIDFdID8gc2V0TmV4dChhcnRpY2xlTGlzdFtjdXJyZW50QXJ0aWNsZUluZGV4ICsgMV0pIDogc2V0TmV4dCgnJyk7XG4gICAgfVxuICB9LCBbYXJ0aWNsZUxpc3RdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllcy5kYXRhfT5cbiAgICAgIDxTZW8gc2VvPXtzZW99IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctdGl0bGUgdGV4dC1jZW50ZXIgcHktNVwiPlxuICAgICAgICAgIDxoMT57YXJ0aWNsZS5hdHRyaWJ1dGVzLnRpdGxlfTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbS1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1iYW5uZXIgcHktMSB3LTEwMFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PVwiYmxvZyBiYW5uZXJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1zbWFsbFwiPlxuICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICBzb3VyY2U9e2FydGljbGUuYXR0cmlidXRlcy5jb250ZW50fVxuICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwidWstZGl2aWRlci1zbWFsbFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1ncmlkLXNtYWxsIHVrLWZsZXgtbGVmdFwiIGRhdGEtdWstZ3JpZD1cInRydWVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHthcnRpY2xlLmF0dHJpYnV0ZXMuYXV0aG9yLnBpY3R1cmUgJiYgKFxuICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2FydGljbGUuYXR0cmlidXRlcy5hdXRob3IucGljdHVyZX0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay13aWR0aC1leHBhbmRcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidWstbWFyZ2luLXJlbW92ZS1ib3R0b21cIj5cbiAgICAgICAgICAgICAgICBCeSB7IGF1dGhvci5uYW1lID8gYXV0aG9yLm5hbWUgOiBgQW5vbnltb3VzYH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1ay10ZXh0LW1ldGEgdWstbWFyZ2luLXJlbW92ZS10b3BcIj5cbiAgICAgICAgICAgICAgICA8TW9tZW50IGZvcm1hdD1cIk1NTSBEbyBZWVlZXCI+XG4gICAgICAgICAgICAgICAgICB7YXJ0aWNsZS5hdHRyaWJ1dGVzLnB1Ymxpc2hlZF9hdH1cbiAgICAgICAgICAgICAgICA8L01vbWVudD5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtYmxvZ3Mtc2VjdGlvbiByb3cgcHktNFwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcmV2QXJ0aWNsZSA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG5hdi1ibG9nLWl0ZW0gcHJldmlvdXMtYmxvZyB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbGFiZWxcIj5QcmV2aW91cyBibG9nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXJ0aWNsZS8ke3ByZXZBcnRpY2xlLnBhdGh9YH0gY2xhc3NOYW1lPVwibmF2LW5hbWUgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIj57cHJldkFydGljbGUudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PikgIDogPD48Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmV4dEFydGljbGUgPyAoXG4gICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImNvbC1tZC02IG5hdi1ibG9nLWl0ZW0gbmV4dC1ibG9nIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWxhYmVsXCI+TmV4dCBibG9nPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FydGljbGUvJHtuZXh0QXJ0aWNsZS5wYXRofWB9IGNsYXNzTmFtZT1cIm5hdi1uYW1lIHRleHQtZGVjb3JhdGlvbi1ub25lXCI+e25leHRBcnRpY2xlLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+KSA6IDw+PC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBhcnRpY2xlc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2FydGljbGVzXCIsIHsgZmllbGRzOiBbXCJzbHVnXCJdIH0pO1xuICBjb25zdCBwYXRocyA9IGFydGljbGVzUmVzLmRhdGEubWFwKChhcnRpY2xlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBhcnRpY2xlLmF0dHJpYnV0ZXMuc2x1Z1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGFydGljbGVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIiwge1xuICAgIGZpbHRlcnM6IHtcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxuICAgIH0sXG4gICAgcG9wdWxhdGU6IFwiKlwiLFxuICB9KVxuICBjb25zdCBjYXRlZ29yaWVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiKVxuXG4gIGNvbnN0IGFydGljbGVMaXN0UmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIiwgeyBmaWVsZHM6IFtcInNsdWdcIiwgXCJ0aXRsZVwiXSB9KTtcbiAgY29uc3QgYXJ0aWNsZUxpc3QgPSBhcnRpY2xlTGlzdFJlcy5kYXRhLm1hcCgoYXJ0aWNsZSkgPT4gKFxuICAgIHtcbiAgICAgIHNsdWc6IGFydGljbGUuYXR0cmlidXRlcy5zbHVnLFxuICAgICAgdGl0bGU6IGFydGljbGUuYXR0cmlidXRlcy50aXRsZVxuICAgIH1cbiAgKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhcnRpY2xlOiBhcnRpY2xlc1Jlcy5kYXRhWzBdLCBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzUmVzLCBhcnRpY2xlTGlzdCB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/article/[slug].js\n");

/***/ })

});