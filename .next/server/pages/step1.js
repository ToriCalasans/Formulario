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
exports.id = "pages/step1";
exports.ids = ["pages/step1"];
exports.modules = {

/***/ "./lib/supabase.js":
/*!*************************!*\
  !*** ./lib/supabase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://vznmlmowydrhacdigmau.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bm1sbW93eWRyaGFjZGlnbWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxNDI2OTMsImV4cCI6MjAzODcxODY5M30.6niAL6npEOg6cJJSW9s9mXH4oySpP1W21r2UMVNc7BY\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3VwYWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRXJELE1BQU1DLGNBQWNDLDBDQUFvQztBQUN4RCxNQUFNRyxrQkFBa0JILGtOQUF5QztBQUUxRCxNQUFNSyxXQUFXUCxtRUFBWUEsQ0FBQ0MsYUFBYUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL2xpYi9zdXBhYmFzZS5qcz8xNTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xuY29uc3Qgc3VwYWJhc2VBbm9uS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVk7XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsInN1cGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/supabase.js\n");

/***/ }),

/***/ "./pages/step1.js":
/*!************************!*\
  !*** ./pages/step1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Step1)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/supabase */ \"./lib/supabase.js\");\n\n\n\n\nfunction Step1() {\n    const [selectedGold, setSelectedGold] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [professors, setProfessors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const fetchProfessors = async ()=>{\n        let { data , error  } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"professors\").select(\"*\");\n        if (error) {\n            console.error(\"Error fetching professors:\", error);\n        } else {\n            setProfessors(data);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchProfessors();\n    }, []);\n    const handleNext = ()=>{\n        const selectedProfessors = {\n            gold: selectedGold,\n            goldName: professors.find((professor)=>professor.id === selectedGold)?.name\n        };\n        router.push({\n            pathname: \"/step2\",\n            query: {\n                selectedProfessors: JSON.stringify(selectedProfessors)\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Selecione o Professor Ouro\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Formulario/pages/step1.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexWrap: \"wrap\"\n                },\n                children: professors.map((professor)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            border: selectedGold === professor.id ? \"2px solid gold\" : \"1px solid gray\",\n                            margin: \"10px\",\n                            padding: \"10px\",\n                            cursor: \"pointer\"\n                        },\n                        onClick: ()=>setSelectedGold(professor.id),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: `/images/${professor.photo}`,\n                                alt: professor.name,\n                                style: {\n                                    width: \"100px\",\n                                    height: \"100px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Formulario/pages/step1.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: professor.name\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Formulario/pages/step1.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, professor.id, true, {\n                        fileName: \"/workspaces/Formulario/pages/step1.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/workspaces/Formulario/pages/step1.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNext,\n                disabled: !selectedGold,\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Formulario/pages/step1.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Formulario/pages/step1.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdGVwMS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNHO0FBRTVCLFNBQVNJLFFBQVE7SUFDOUIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUMsSUFBSTtJQUNyRCxNQUFNLENBQUNPLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxNQUFNUyxTQUFTUCxzREFBU0E7SUFFeEIsTUFBTVEsa0JBQWtCLFVBQVk7UUFDbEMsSUFBSSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHLE1BQU1ULHdEQUFhLENBQUMsY0FBY1csTUFBTSxDQUFDO1FBQy9ELElBQUlGLE9BQU87WUFDVEcsUUFBUUgsS0FBSyxDQUFDLDhCQUE4QkE7UUFDOUMsT0FBTztZQUNMSixjQUFjRztRQUNoQixDQUFDO0lBQ0g7SUFFQVYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkUztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1NLGFBQWEsSUFBTTtRQUN2QixNQUFNQyxxQkFBcUI7WUFDekJDLE1BQU1iO1lBQ05jLFVBQVVaLFdBQVdhLElBQUksQ0FBQ0MsQ0FBQUEsWUFBYUEsVUFBVUMsRUFBRSxLQUFLakIsZUFBZWtCO1FBQ3pFO1FBQ0FkLE9BQU9lLElBQUksQ0FBQztZQUNWQyxVQUFVO1lBQ1ZDLE9BQU87Z0JBQUVULG9CQUFvQlUsS0FBS0MsU0FBUyxDQUFDWDtZQUFvQjtRQUNsRTtJQUNGO0lBRUEscUJBQ0UsOERBQUNZOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7Z0JBQUlFLE9BQU87b0JBQUVDLFNBQVM7b0JBQVFDLFVBQVU7Z0JBQU87MEJBQzdDMUIsV0FBVzJCLEdBQUcsQ0FBQyxDQUFDYiwwQkFDZiw4REFBQ1E7d0JBRUNFLE9BQU87NEJBQUVJLFFBQVE5QixpQkFBaUJnQixVQUFVQyxFQUFFLEdBQUcsbUJBQW1CLGdCQUFnQjs0QkFBRWMsUUFBUTs0QkFBUUMsU0FBUzs0QkFBUUMsUUFBUTt3QkFBVTt3QkFDeklDLFNBQVMsSUFBTWpDLGdCQUFnQmUsVUFBVUMsRUFBRTs7MENBRTNDLDhEQUFDa0I7Z0NBQUlDLEtBQUssQ0FBQyxRQUFRLEVBQUVwQixVQUFVcUIsS0FBSyxDQUFDLENBQUM7Z0NBQUVDLEtBQUt0QixVQUFVRSxJQUFJO2dDQUFFUSxPQUFPO29DQUFFYSxPQUFPO29DQUFTQyxRQUFRO2dDQUFROzs7Ozs7MENBQ3RHLDhEQUFDQzswQ0FBR3pCLFVBQVVFLElBQUk7Ozs7Ozs7dUJBTGJGLFVBQVVDLEVBQUU7Ozs7Ozs7Ozs7MEJBU3ZCLDhEQUFDeUI7Z0JBQU9SLFNBQVN2QjtnQkFBWWdDLFVBQVUsQ0FBQzNDOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFHNUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm11bGFyaW8vLi9wYWdlcy9zdGVwMS5qcz9mNTUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL2xpYi9zdXBhYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0ZXAxKCkge1xuICBjb25zdCBbc2VsZWN0ZWRHb2xkLCBzZXRTZWxlY3RlZEdvbGRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwcm9mZXNzb3JzLCBzZXRQcm9mZXNzb3JzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZmV0Y2hQcm9mZXNzb3JzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdwcm9mZXNzb3JzJykuc2VsZWN0KCcqJyk7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9mZXNzb3JzOicsIGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UHJvZmVzc29ycyhkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFByb2Zlc3NvcnMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9mZXNzb3JzID0ge1xuICAgICAgZ29sZDogc2VsZWN0ZWRHb2xkLFxuICAgICAgZ29sZE5hbWU6IHByb2Zlc3NvcnMuZmluZChwcm9mZXNzb3IgPT4gcHJvZmVzc29yLmlkID09PSBzZWxlY3RlZEdvbGQpPy5uYW1lXG4gICAgfTtcbiAgICByb3V0ZXIucHVzaCh7XG4gICAgICBwYXRobmFtZTogJy9zdGVwMicsXG4gICAgICBxdWVyeTogeyBzZWxlY3RlZFByb2Zlc3NvcnM6IEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkUHJvZmVzc29ycykgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5TZWxlY2lvbmUgbyBQcm9mZXNzb3IgT3VybzwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAge3Byb2Zlc3NvcnMubWFwKChwcm9mZXNzb3IpID0+IChcbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAga2V5PXtwcm9mZXNzb3IuaWR9IFxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBzZWxlY3RlZEdvbGQgPT09IHByb2Zlc3Nvci5pZCA/ICcycHggc29saWQgZ29sZCcgOiAnMXB4IHNvbGlkIGdyYXknLCBtYXJnaW46ICcxMHB4JywgcGFkZGluZzogJzEwcHgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRHb2xkKHByb2Zlc3Nvci5pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9e2AvaW1hZ2VzLyR7cHJvZmVzc29yLnBob3RvfWB9IGFsdD17cHJvZmVzc29yLm5hbWV9IHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcgfX0gLz5cbiAgICAgICAgICAgIDxwPntwcm9mZXNzb3IubmFtZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHR9IGRpc2FibGVkPXshc2VsZWN0ZWRHb2xkfT5OZXh0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJzdXBhYmFzZSIsIlN0ZXAxIiwic2VsZWN0ZWRHb2xkIiwic2V0U2VsZWN0ZWRHb2xkIiwicHJvZmVzc29ycyIsInNldFByb2Zlc3NvcnMiLCJyb3V0ZXIiLCJmZXRjaFByb2Zlc3NvcnMiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiY29uc29sZSIsImhhbmRsZU5leHQiLCJzZWxlY3RlZFByb2Zlc3NvcnMiLCJnb2xkIiwiZ29sZE5hbWUiLCJmaW5kIiwicHJvZmVzc29yIiwiaWQiLCJuYW1lIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGl2IiwiaDEiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsImJvcmRlciIsIm1hcmdpbiIsInBhZGRpbmciLCJjdXJzb3IiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwicGhvdG8iLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/step1.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/step1.js"));
module.exports = __webpack_exports__;

})();