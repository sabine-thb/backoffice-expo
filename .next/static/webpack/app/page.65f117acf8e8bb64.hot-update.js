"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ReservationLists.js":
/*!********************************************!*\
  !*** ./src/components/ReservationLists.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ReservationList: function() { return /* binding */ ReservationList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ ReservationList auto */ \nvar _s = $RefreshSig$();\n\nconst ReservationList = ()=>{\n    _s();\n    const [reservations, setReservations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // const fetchReservations = async () => {\n        //     try {\n        //       const response = await fetch('/reservation'); // Utilisation du proxy\n        //       if (!response.ok) {\n        //         throw new Error('Erreur lors de la récupération des réservations');\n        //       }\n        //       const data = await response.json();\n        //       setReservations(data);\n        //     } catch (error) {\n        //       console.error(error);\n        //     }\n        //   };\n        fetchReservations();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Liste des r\\xe9servations :\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sabin\\\\OneDrive\\\\MMI2-S4\\\\react\\\\backoffice-expo\\\\src\\\\components\\\\ReservationLists.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"IDbhuj\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sabin\\\\OneDrive\\\\MMI2-S4\\\\react\\\\backoffice-expo\\\\src\\\\components\\\\ReservationLists.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Nom\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sabin\\\\OneDrive\\\\MMI2-S4\\\\react\\\\backoffice-expo\\\\src\\\\components\\\\ReservationLists.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Date\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sabin\\\\OneDrive\\\\MMI2-S4\\\\react\\\\backoffice-expo\\\\src\\\\components\\\\ReservationLists.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sabin\\\\OneDrive\\\\MMI2-S4\\\\react\\\\backoffice-expo\\\\src\\\\components\\\\ReservationLists.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sabin\\\\OneDrive\\\\MMI2-S4\\\\react\\\\backoffice-expo\\\\src\\\\components\\\\ReservationLists.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: reservations.map((reservation)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: reservation.id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sabin\\\\OneDrive\\\\MMI2-S4\\\\react\\\\backoffice-expo\\\\src\\\\components\\\\ReservationLists.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: reservation.nom\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sabin\\\\OneDrive\\\\MMI2-S4\\\\react\\\\backoffice-expo\\\\src\\\\components\\\\ReservationLists.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: reservation.date\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sabin\\\\OneDrive\\\\MMI2-S4\\\\react\\\\backoffice-expo\\\\src\\\\components\\\\ReservationLists.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, reservation.id, true, {\n                                fileName: \"C:\\\\Users\\\\sabin\\\\OneDrive\\\\MMI2-S4\\\\react\\\\backoffice-expo\\\\src\\\\components\\\\ReservationLists.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sabin\\\\OneDrive\\\\MMI2-S4\\\\react\\\\backoffice-expo\\\\src\\\\components\\\\ReservationLists.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sabin\\\\OneDrive\\\\MMI2-S4\\\\react\\\\backoffice-expo\\\\src\\\\components\\\\ReservationLists.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sabin\\\\OneDrive\\\\MMI2-S4\\\\react\\\\backoffice-expo\\\\src\\\\components\\\\ReservationLists.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ReservationList, \"n1GCS9VJe9p98Kw6tsz1Wmk1YmA=\");\n_c = ReservationList;\nvar _c;\n$RefreshReg$(_c, \"ReservationList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Jlc2VydmF0aW9uTGlzdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRW1EO0FBRTVDLE1BQU1HLGtCQUFrQjs7SUFDN0IsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUVuREMsZ0RBQVNBLENBQUM7UUFDUiwwQ0FBMEM7UUFDMUMsWUFBWTtRQUNaLDhFQUE4RTtRQUM5RSw0QkFBNEI7UUFDNUIsOEVBQThFO1FBQzlFLFVBQVU7UUFDViw0Q0FBNEM7UUFDNUMsK0JBQStCO1FBQy9CLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsUUFBUTtRQUNSLE9BQU87UUFHUEk7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzs7a0NBQ0MsOERBQUNDO2tDQUNDLDRFQUFDQzs7OENBQ0MsOERBQUNDOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJUiw4REFBQ0M7a0NBQ0VULGFBQWFVLEdBQUcsQ0FBQ0MsQ0FBQUEsNEJBQ2hCLDhEQUFDSjs7a0RBQ0MsOERBQUNLO2tEQUFJRCxZQUFZRSxFQUFFOzs7Ozs7a0RBQ25CLDhEQUFDRDtrREFBSUQsWUFBWUcsR0FBRzs7Ozs7O2tEQUNwQiw4REFBQ0Y7a0RBQUlELFlBQVlJLElBQUk7Ozs7Ozs7K0JBSGRKLFlBQVlFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXbkMsRUFBRTtHQTlDV2Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVzZXJ2YXRpb25MaXN0cy5qcz8yNDJmIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4ndXNlIGNsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlc2VydmF0aW9uTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBbcmVzZXJ2YXRpb25zLCBzZXRSZXNlcnZhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgZmV0Y2hSZXNlcnZhdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyAgICAgdHJ5IHtcclxuICAgIC8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9yZXNlcnZhdGlvbicpOyAvLyBVdGlsaXNhdGlvbiBkdSBwcm94eVxyXG4gICAgLy8gICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgLy8gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyByw6lzZXJ2YXRpb25zJyk7XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgLy8gICAgICAgc2V0UmVzZXJ2YXRpb25zKGRhdGEpO1xyXG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH07XHJcbiAgICBcclxuXHJcbiAgICBmZXRjaFJlc2VydmF0aW9ucygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj5MaXN0ZSBkZXMgcsOpc2VydmF0aW9ucyA6PC9oMj5cclxuICAgICAgPHRhYmxlPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPklEYmh1ajwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5Ob208L3RoPlxyXG4gICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtyZXNlcnZhdGlvbnMubWFwKHJlc2VydmF0aW9uID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17cmVzZXJ2YXRpb24uaWR9PlxyXG4gICAgICAgICAgICAgIDx0ZD57cmVzZXJ2YXRpb24uaWR9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3Jlc2VydmF0aW9uLm5vbX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57cmVzZXJ2YXRpb24uZGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgIHsvKiBBZmZpY2hleiBkJ2F1dHJlcyBkb25uw6llcyBkZSByw6lzZXJ2YXRpb24gc2kgbsOpY2Vzc2FpcmUgKi99XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlc2VydmF0aW9uTGlzdCIsInJlc2VydmF0aW9ucyIsInNldFJlc2VydmF0aW9ucyIsImZldGNoUmVzZXJ2YXRpb25zIiwiZGl2IiwiaDIiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwicmVzZXJ2YXRpb24iLCJ0ZCIsImlkIiwibm9tIiwiZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ReservationLists.js\n"));

/***/ })

});