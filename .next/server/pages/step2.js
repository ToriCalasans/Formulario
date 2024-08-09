"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/step2";
exports.ids = ["pages/step2"];
exports.modules = {

/***/ "./lib/supabase.js":
/*!*************************!*\
  !*** ./lib/supabase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://vznmlmowydrhacdigmau.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bm1sbW93eWRyaGFjZGlnbWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxNDI2OTMsImV4cCI6MjAzODcxODY5M30.6niAL6npEOg6cJJSW9s9mXH4oySpP1W21r2UMVNc7BY\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3VwYWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRXJELE1BQU1DLGNBQWNDLDBDQUFvQztBQUN4RCxNQUFNRyxrQkFBa0JILGtOQUF5QztBQUUxRCxNQUFNSyxXQUFXUCxtRUFBWUEsQ0FBQ0MsYUFBYUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL2xpYi9zdXBhYmFzZS5qcz8xNTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xuY29uc3Qgc3VwYWJhc2VBbm9uS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVk7XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsInN1cGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/supabase.js\n");

/***/ }),

/***/ "./pages/step2.js":
/*!************************!*\
  !*** ./pages/step2.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Step2)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/supabase */ \"./lib/supabase.js\");\n\n\n\n\nfunction Step2() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const selectedProfessors = router.query.selectedProfessors ? JSON.parse(router.query.selectedProfessors) : {};\n    const [selectedSilver, setSelectedSilver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [professors, setProfessors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchProfessors = async ()=>{\n        let { data , error  } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"professors\").select(\"*\").not(\"id\", \"in\", `(${selectedProfessors.gold})`);\n        if (error) {\n            console.error(\"Error fetching professors:\", error);\n        } else {\n            setProfessors(data);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchProfessors();\n    }, []);\n    const handleNext = ()=>{\n        selectedProfessors.silver = selectedSilver;\n        selectedProfessors.silverName = professors.find((professor)=>professor.id === selectedSilver)?.name;\n        router.push({\n            pathname: \"/step3\",\n            query: {\n                selectedProfessors: JSON.stringify(selectedProfessors)\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Selecione o Professor Prata\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Formulario/pages/step2.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexWrap: \"wrap\"\n                },\n                children: professors.map((professor)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            border: selectedSilver === professor.id ? \"2px solid silver\" : \"1px solid gray\",\n                            margin: \"10px\",\n                            padding: \"10px\",\n                            cursor: \"pointer\"\n                        },\n                        onClick: ()=>setSelectedSilver(professor.id),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: `/images/${professor.photo}`,\n                                alt: professor.name,\n                                style: {\n                                    width: \"100px\",\n                                    height: \"100px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Formulario/pages/step2.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: professor.name\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Formulario/pages/step2.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, professor.id, true, {\n                        fileName: \"/workspaces/Formulario/pages/step2.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/workspaces/Formulario/pages/step2.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNext,\n                disabled: !selectedSilver,\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Formulario/pages/step2.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Formulario/pages/step2.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdGVwMi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNHO0FBRTVCLFNBQVNJLFFBQVE7SUFDOUIsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU1JLHFCQUFxQkQsT0FBT0UsS0FBSyxDQUFDRCxrQkFBa0IsR0FBR0UsS0FBS0MsS0FBSyxDQUFDSixPQUFPRSxLQUFLLENBQUNELGtCQUFrQixJQUFJLENBQUMsQ0FBQztJQUM3RyxNQUFNLENBQUNJLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFDLElBQUk7SUFDekQsTUFBTSxDQUFDWSxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0MsTUFBTWMsa0JBQWtCLFVBQVk7UUFDbEMsSUFBSSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHLE1BQU1iLHdEQUNyQixDQUFDLGNBQ0xlLE1BQU0sQ0FBQyxLQUNQQyxHQUFHLENBQUMsTUFBTSxNQUFNLENBQUMsQ0FBQyxFQUFFYixtQkFBbUJjLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFakQsSUFBSUosT0FBTztZQUNUSyxRQUFRTCxLQUFLLENBQUMsOEJBQThCQTtRQUM5QyxPQUFPO1lBQ0xILGNBQWNFO1FBQ2hCLENBQUM7SUFDSDtJQUVBZCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RhO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTVEsYUFBYSxJQUFNO1FBQ3ZCaEIsbUJBQW1CaUIsTUFBTSxHQUFHYjtRQUM1QkosbUJBQW1Ca0IsVUFBVSxHQUFHWixXQUFXYSxJQUFJLENBQUNDLENBQUFBLFlBQWFBLFVBQVVDLEVBQUUsS0FBS2pCLGlCQUFpQmtCO1FBQy9GdkIsT0FBT3dCLElBQUksQ0FBQztZQUNWQyxVQUFVO1lBQ1Z2QixPQUFPO2dCQUFFRCxvQkFBb0JFLEtBQUt1QixTQUFTLENBQUN6QjtZQUFvQjtRQUNsRTtJQUNGO0lBRUEscUJBQ0UsOERBQUMwQjs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNEO2dCQUFJRSxPQUFPO29CQUFFQyxTQUFTO29CQUFRQyxVQUFVO2dCQUFPOzBCQUM3Q3hCLFdBQVd5QixHQUFHLENBQUMsQ0FBQ1gsMEJBQ2YsOERBQUNNO3dCQUVDRSxPQUFPOzRCQUFFSSxRQUFRNUIsbUJBQW1CZ0IsVUFBVUMsRUFBRSxHQUFHLHFCQUFxQixnQkFBZ0I7NEJBQUVZLFFBQVE7NEJBQVFDLFNBQVM7NEJBQVFDLFFBQVE7d0JBQVU7d0JBQzdJQyxTQUFTLElBQU0vQixrQkFBa0JlLFVBQVVDLEVBQUU7OzBDQUU3Qyw4REFBQ2dCO2dDQUFJQyxLQUFLLENBQUMsUUFBUSxFQUFFbEIsVUFBVW1CLEtBQUssQ0FBQyxDQUFDO2dDQUFFQyxLQUFLcEIsVUFBVUUsSUFBSTtnQ0FBRU0sT0FBTztvQ0FBRWEsT0FBTztvQ0FBU0MsUUFBUTtnQ0FBUTs7Ozs7OzBDQUN0Ryw4REFBQ0M7MENBQUd2QixVQUFVRSxJQUFJOzs7Ozs7O3VCQUxiRixVQUFVQyxFQUFFOzs7Ozs7Ozs7OzBCQVN2Qiw4REFBQ3VCO2dCQUFPUixTQUFTcEI7Z0JBQVk2QixVQUFVLENBQUN6QzswQkFBZ0I7Ozs7Ozs7Ozs7OztBQUc5RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL3BhZ2VzL3N0ZXAyLmpzP2MwNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnLi4vbGliL3N1cGFiYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RlcDIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzZWxlY3RlZFByb2Zlc3NvcnMgPSByb3V0ZXIucXVlcnkuc2VsZWN0ZWRQcm9mZXNzb3JzID8gSlNPTi5wYXJzZShyb3V0ZXIucXVlcnkuc2VsZWN0ZWRQcm9mZXNzb3JzKSA6IHt9O1xuICBjb25zdCBbc2VsZWN0ZWRTaWx2ZXIsIHNldFNlbGVjdGVkU2lsdmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcHJvZmVzc29ycywgc2V0UHJvZmVzc29yc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgZmV0Y2hQcm9mZXNzb3JzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oJ3Byb2Zlc3NvcnMnKVxuICAgICAgLnNlbGVjdCgnKicpXG4gICAgICAubm90KCdpZCcsICdpbicsIGAoJHtzZWxlY3RlZFByb2Zlc3NvcnMuZ29sZH0pYCk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2Zlc3NvcnM6JywgZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRQcm9mZXNzb3JzKGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUHJvZmVzc29ycygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBzZWxlY3RlZFByb2Zlc3NvcnMuc2lsdmVyID0gc2VsZWN0ZWRTaWx2ZXI7XG4gICAgc2VsZWN0ZWRQcm9mZXNzb3JzLnNpbHZlck5hbWUgPSBwcm9mZXNzb3JzLmZpbmQocHJvZmVzc29yID0+IHByb2Zlc3Nvci5pZCA9PT0gc2VsZWN0ZWRTaWx2ZXIpPy5uYW1lO1xuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiAnL3N0ZXAzJyxcbiAgICAgIHF1ZXJ5OiB7IHNlbGVjdGVkUHJvZmVzc29yczogSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRQcm9mZXNzb3JzKSB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlNlbGVjaW9uZSBvIFByb2Zlc3NvciBQcmF0YTwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAge3Byb2Zlc3NvcnMubWFwKChwcm9mZXNzb3IpID0+IChcbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAga2V5PXtwcm9mZXNzb3IuaWR9IFxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBzZWxlY3RlZFNpbHZlciA9PT0gcHJvZmVzc29yLmlkID8gJzJweCBzb2xpZCBzaWx2ZXInIDogJzFweCBzb2xpZCBncmF5JywgbWFyZ2luOiAnMTBweCcsIHBhZGRpbmc6ICcxMHB4JywgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkU2lsdmVyKHByb2Zlc3Nvci5pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9e2AvaW1hZ2VzLyR7cHJvZmVzc29yLnBob3RvfWB9IGFsdD17cHJvZmVzc29yLm5hbWV9IHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcgfX0gLz5cbiAgICAgICAgICAgIDxwPntwcm9mZXNzb3IubmFtZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHR9IGRpc2FibGVkPXshc2VsZWN0ZWRTaWx2ZXJ9Pk5leHQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInN1cGFiYXNlIiwiU3RlcDIiLCJyb3V0ZXIiLCJzZWxlY3RlZFByb2Zlc3NvcnMiLCJxdWVyeSIsIkpTT04iLCJwYXJzZSIsInNlbGVjdGVkU2lsdmVyIiwic2V0U2VsZWN0ZWRTaWx2ZXIiLCJwcm9mZXNzb3JzIiwic2V0UHJvZmVzc29ycyIsImZldGNoUHJvZmVzc29ycyIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJub3QiLCJnb2xkIiwiY29uc29sZSIsImhhbmRsZU5leHQiLCJzaWx2ZXIiLCJzaWx2ZXJOYW1lIiwiZmluZCIsInByb2Zlc3NvciIsImlkIiwibmFtZSIsInB1c2giLCJwYXRobmFtZSIsInN0cmluZ2lmeSIsImRpdiIsImgxIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJtYXAiLCJib3JkZXIiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY3Vyc29yIiwib25DbGljayIsImltZyIsInNyYyIsInBob3RvIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/step2.js\n");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/step2.js"));
module.exports = __webpack_exports__;

})();