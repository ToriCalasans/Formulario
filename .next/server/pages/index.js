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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/supabase.js":
/*!*************************!*\
  !*** ./lib/supabase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://vznmlmowydrhacdigmau.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bm1sbW93eWRyaGFjZGlnbWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxNDI2OTMsImV4cCI6MjAzODcxODY5M30.6niAL6npEOg6cJJSW9s9mXH4oySpP1W21r2UMVNc7BY\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3VwYWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRXJELE1BQU1DLGNBQWNDLDBDQUFvQztBQUN4RCxNQUFNRyxrQkFBa0JILGtOQUF5QztBQUUxRCxNQUFNSyxXQUFXUCxtRUFBWUEsQ0FBQ0MsYUFBYUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL2xpYi9zdXBhYmFzZS5qcz8xNTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xuY29uc3Qgc3VwYWJhc2VBbm9uS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVk7XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsInN1cGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/supabase.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/supabase */ \"./lib/supabase.js\");\n\n\n\n\nfunction Home() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [selectedYear, setSelectedYear] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [years, setYears] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const fetchYears = async ()=>{\n        let { data , error  } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"ano\").select(\"*\");\n        if (error) {\n            console.error(\"Error fetching years:\", error);\n        } else {\n            setYears(data);\n            setSelectedYear(data[0]?.id_ano || null); // Set first year as selected by default\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchYears();\n    }, []);\n    const handleStart = ()=>{\n        router.push(`/step1?year=${selectedYear}`);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Bem-vindo ao Sistema de Sele\\xe7\\xe3o de Professores\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Formulario/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Selecione o Ano\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Formulario/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                value: selectedYear,\n                onChange: (e)=>setSelectedYear(Number(e.target.value)),\n                children: years.map((year)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: year.id_ano,\n                        children: year.nome_ano\n                    }, year.id_ano, false, {\n                        fileName: \"/workspaces/Formulario/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/workspaces/Formulario/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleStart,\n                disabled: !selectedYear,\n                children: \"Come\\xe7ar\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Formulario/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Formulario/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUNEO0FBRTVCLFNBQVNJLE9BQU87SUFDN0IsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFDLElBQUk7SUFDckQsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTVMsYUFBYSxVQUFZO1FBQzdCLElBQUksRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBRyxNQUFNVCx3REFBYSxDQUFDLE9BQU9XLE1BQU0sQ0FBQztRQUN4RCxJQUFJRixPQUFPO1lBQ1RHLFFBQVFILEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3pDLE9BQU87WUFDTEgsU0FBU0U7WUFDVEosZ0JBQWdCSSxJQUFJLENBQUMsRUFBRSxFQUFFSyxVQUFVLElBQUksR0FBRyx3Q0FBd0M7UUFDcEYsQ0FBQztJQUNIO0lBRUFkLGdEQUFTQSxDQUFDLElBQU07UUFDZFE7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNTyxjQUFjLElBQU07UUFDeEJaLE9BQU9hLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRVosYUFBYSxDQUFDO0lBQzNDO0lBRUEscUJBQ0UsOERBQUNhOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ1A7Z0JBQU9RLE9BQU9oQjtnQkFBY2lCLFVBQVUsQ0FBQ0MsSUFBTWpCLGdCQUFnQmtCLE9BQU9ELEVBQUVFLE1BQU0sQ0FBQ0osS0FBSzswQkFDaEZkLE1BQU1tQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNDO3dCQUF5QlAsT0FBT00sS0FBS1osTUFBTTtrQ0FDekNZLEtBQUtFLFFBQVE7dUJBREhGLEtBQUtaLE1BQU07Ozs7Ozs7Ozs7MEJBSzVCLDhEQUFDZTtnQkFBT0MsU0FBU2Y7Z0JBQWFnQixVQUFVLENBQUMzQjswQkFBYzs7Ozs7Ozs7Ozs7O0FBRzdELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi9saWIvc3VwYWJhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3NlbGVjdGVkWWVhciwgc2V0U2VsZWN0ZWRZZWFyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbeWVhcnMsIHNldFllYXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBmZXRjaFllYXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdhbm8nKS5zZWxlY3QoJyonKTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHllYXJzOicsIGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0WWVhcnMoZGF0YSk7XG4gICAgICBzZXRTZWxlY3RlZFllYXIoZGF0YVswXT8uaWRfYW5vIHx8IG51bGwpOyAvLyBTZXQgZmlyc3QgeWVhciBhcyBzZWxlY3RlZCBieSBkZWZhdWx0XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hZZWFycygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3RhcnQgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYC9zdGVwMT95ZWFyPSR7c2VsZWN0ZWRZZWFyfWApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5CZW0tdmluZG8gYW8gU2lzdGVtYSBkZSBTZWxlw6fDo28gZGUgUHJvZmVzc29yZXM8L2gxPlxuICAgICAgPGgyPlNlbGVjaW9uZSBvIEFubzwvaDI+XG4gICAgICA8c2VsZWN0IHZhbHVlPXtzZWxlY3RlZFllYXJ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VsZWN0ZWRZZWFyKE51bWJlcihlLnRhcmdldC52YWx1ZSkpfT5cbiAgICAgICAge3llYXJzLm1hcCgoeWVhcikgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXt5ZWFyLmlkX2Fub30gdmFsdWU9e3llYXIuaWRfYW5vfT5cbiAgICAgICAgICAgIHt5ZWFyLm5vbWVfYW5vfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdGFydH0gZGlzYWJsZWQ9eyFzZWxlY3RlZFllYXJ9PkNvbWXDp2FyPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdXBhYmFzZSIsIkhvbWUiLCJyb3V0ZXIiLCJzZWxlY3RlZFllYXIiLCJzZXRTZWxlY3RlZFllYXIiLCJ5ZWFycyIsInNldFllYXJzIiwiZmV0Y2hZZWFycyIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJjb25zb2xlIiwiaWRfYW5vIiwiaGFuZGxlU3RhcnQiLCJwdXNoIiwiZGl2IiwiaDEiLCJoMiIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwibWFwIiwieWVhciIsIm9wdGlvbiIsIm5vbWVfYW5vIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();