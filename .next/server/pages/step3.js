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
exports.id = "pages/step3";
exports.ids = ["pages/step3"];
exports.modules = {

/***/ "./lib/supabase.js":
/*!*************************!*\
  !*** ./lib/supabase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://vznmlmowydrhacdigmau.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bm1sbW93eWRyaGFjZGlnbWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxNDI2OTMsImV4cCI6MjAzODcxODY5M30.6niAL6npEOg6cJJSW9s9mXH4oySpP1W21r2UMVNc7BY\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3VwYWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRXJELE1BQU1DLGNBQWNDLDBDQUFvQztBQUN4RCxNQUFNRyxrQkFBa0JILGtOQUF5QztBQUUxRCxNQUFNSyxXQUFXUCxtRUFBWUEsQ0FBQ0MsYUFBYUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL2xpYi9zdXBhYmFzZS5qcz8xNTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5cbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xuY29uc3Qgc3VwYWJhc2VBbm9uS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVk7XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJzdXBhYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJzdXBhYmFzZUFub25LZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsInN1cGFiYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/supabase.js\n");

/***/ }),

/***/ "./pages/step3.js":
/*!************************!*\
  !*** ./pages/step3.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Step3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/supabase */ \"./lib/supabase.js\");\n\n\n\n\nfunction Step3() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const selectedProfessors = router.query.selectedProfessors ? JSON.parse(router.query.selectedProfessors) : {};\n    const [selectedBronze, setSelectedBronze] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [professors, setProfessors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchProfessors = async ()=>{\n        let { data , error  } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"professors\").select(\"*\").not(\"id\", \"in\", `(${selectedProfessors.gold},${selectedProfessors.silver})`);\n        if (error) {\n            console.error(\"Error fetching professors:\", error);\n        } else {\n            setProfessors(data);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchProfessors();\n    }, []);\n    const handleSubmit = ()=>{\n        selectedProfessors.bronze = selectedBronze;\n        selectedProfessors.bronzeName = professors.find((professor)=>professor.id === selectedBronze)?.name;\n        const result = {\n            gold: selectedProfessors.goldName,\n            silver: selectedProfessors.silverName,\n            bronze: selectedProfessors.bronzeName\n        };\n        router.push({\n            pathname: \"/result\",\n            query: {\n                selectedProfessors: JSON.stringify(result)\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Selecione o Professor Bronze\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Formulario/pages/step3.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexWrap: \"wrap\"\n                },\n                children: professors.map((professor)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            border: selectedBronze === professor.id ? \"2px solid bronze\" : \"1px solid gray\",\n                            margin: \"10px\",\n                            padding: \"10px\",\n                            cursor: \"pointer\"\n                        },\n                        onClick: ()=>setSelectedBronze(professor.id),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: `/images/${professor.photo}`,\n                                alt: professor.name,\n                                style: {\n                                    width: \"100px\",\n                                    height: \"100px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Formulario/pages/step3.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: professor.name\n                            }, void 0, false, {\n                                fileName: \"/workspaces/Formulario/pages/step3.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, professor.id, true, {\n                        fileName: \"/workspaces/Formulario/pages/step3.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/workspaces/Formulario/pages/step3.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSubmit,\n                disabled: !selectedBronze,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/workspaces/Formulario/pages/step3.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/Formulario/pages/step3.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdGVwMy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNHO0FBRTVCLFNBQVNJLFFBQVE7SUFDOUIsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU1JLHFCQUFxQkQsT0FBT0UsS0FBSyxDQUFDRCxrQkFBa0IsR0FBR0UsS0FBS0MsS0FBSyxDQUFDSixPQUFPRSxLQUFLLENBQUNELGtCQUFrQixJQUFJLENBQUMsQ0FBQztJQUM3RyxNQUFNLENBQUNJLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFDLElBQUk7SUFDekQsTUFBTSxDQUFDWSxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0MsTUFBTWMsa0JBQWtCLFVBQVk7UUFDbEMsSUFBSSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHLE1BQU1iLHdEQUNyQixDQUFDLGNBQ0xlLE1BQU0sQ0FBQyxLQUNQQyxHQUFHLENBQUMsTUFBTSxNQUFNLENBQUMsQ0FBQyxFQUFFYixtQkFBbUJjLElBQUksQ0FBQyxDQUFDLEVBQUVkLG1CQUFtQmUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUU5RSxJQUFJTCxPQUFPO1lBQ1RNLFFBQVFOLEtBQUssQ0FBQyw4QkFBOEJBO1FBQzlDLE9BQU87WUFDTEgsY0FBY0U7UUFDaEIsQ0FBQztJQUNIO0lBRUFkLGdEQUFTQSxDQUFDLElBQU07UUFDZGE7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNUyxlQUFlLElBQU07UUFDekJqQixtQkFBbUJrQixNQUFNLEdBQUdkO1FBQzVCSixtQkFBbUJtQixVQUFVLEdBQUdiLFdBQVdjLElBQUksQ0FBQ0MsQ0FBQUEsWUFBYUEsVUFBVUMsRUFBRSxLQUFLbEIsaUJBQWlCbUI7UUFDL0YsTUFBTUMsU0FBUztZQUNiVixNQUFNZCxtQkFBbUJ5QixRQUFRO1lBQ2pDVixRQUFRZixtQkFBbUIwQixVQUFVO1lBQ3JDUixRQUFRbEIsbUJBQW1CbUIsVUFBVTtRQUN2QztRQUNBcEIsT0FBTzRCLElBQUksQ0FBQztZQUNWQyxVQUFVO1lBQ1YzQixPQUFPO2dCQUFFRCxvQkFBb0JFLEtBQUsyQixTQUFTLENBQUNMO1lBQVE7UUFDdEQ7SUFDRjtJQUdBLHFCQUNFLDhEQUFDTTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNEO2dCQUFJRSxPQUFPO29CQUFFQyxTQUFTO29CQUFRQyxVQUFVO2dCQUFPOzBCQUM3QzVCLFdBQVc2QixHQUFHLENBQUMsQ0FBQ2QsMEJBQ2YsOERBQUNTO3dCQUVDRSxPQUFPOzRCQUFFSSxRQUFRaEMsbUJBQW1CaUIsVUFBVUMsRUFBRSxHQUFHLHFCQUFxQixnQkFBZ0I7NEJBQUVlLFFBQVE7NEJBQVFDLFNBQVM7NEJBQVFDLFFBQVE7d0JBQVU7d0JBQzdJQyxTQUFTLElBQU1uQyxrQkFBa0JnQixVQUFVQyxFQUFFOzswQ0FFN0MsOERBQUNtQjtnQ0FBSUMsS0FBSyxDQUFDLFFBQVEsRUFBRXJCLFVBQVVzQixLQUFLLENBQUMsQ0FBQztnQ0FBRUMsS0FBS3ZCLFVBQVVFLElBQUk7Z0NBQUVTLE9BQU87b0NBQUVhLE9BQU87b0NBQVNDLFFBQVE7Z0NBQVE7Ozs7OzswQ0FDdEcsOERBQUNDOzBDQUFHMUIsVUFBVUUsSUFBSTs7Ozs7Ozt1QkFMYkYsVUFBVUMsRUFBRTs7Ozs7Ozs7OzswQkFTdkIsOERBQUMwQjtnQkFBT1IsU0FBU3ZCO2dCQUFjZ0MsVUFBVSxDQUFDN0M7MEJBQWdCOzs7Ozs7Ozs7Ozs7QUFHaEUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm11bGFyaW8vLi9wYWdlcy9zdGVwMy5qcz82MWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gJy4uL2xpYi9zdXBhYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0ZXAzKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc2VsZWN0ZWRQcm9mZXNzb3JzID0gcm91dGVyLnF1ZXJ5LnNlbGVjdGVkUHJvZmVzc29ycyA/IEpTT04ucGFyc2Uocm91dGVyLnF1ZXJ5LnNlbGVjdGVkUHJvZmVzc29ycykgOiB7fTtcbiAgY29uc3QgW3NlbGVjdGVkQnJvbnplLCBzZXRTZWxlY3RlZEJyb256ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Byb2Zlc3NvcnMsIHNldFByb2Zlc3NvcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGZldGNoUHJvZmVzc29ycyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdwcm9mZXNzb3JzJylcbiAgICAgIC5zZWxlY3QoJyonKVxuICAgICAgLm5vdCgnaWQnLCAnaW4nLCBgKCR7c2VsZWN0ZWRQcm9mZXNzb3JzLmdvbGR9LCR7c2VsZWN0ZWRQcm9mZXNzb3JzLnNpbHZlcn0pYCk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2Zlc3NvcnM6JywgZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRQcm9mZXNzb3JzKGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUHJvZmVzc29ycygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIHNlbGVjdGVkUHJvZmVzc29ycy5icm9uemUgPSBzZWxlY3RlZEJyb256ZTtcbiAgICBzZWxlY3RlZFByb2Zlc3NvcnMuYnJvbnplTmFtZSA9IHByb2Zlc3NvcnMuZmluZChwcm9mZXNzb3IgPT4gcHJvZmVzc29yLmlkID09PSBzZWxlY3RlZEJyb256ZSk/Lm5hbWU7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgZ29sZDogc2VsZWN0ZWRQcm9mZXNzb3JzLmdvbGROYW1lLFxuICAgICAgc2lsdmVyOiBzZWxlY3RlZFByb2Zlc3NvcnMuc2lsdmVyTmFtZSxcbiAgICAgIGJyb256ZTogc2VsZWN0ZWRQcm9mZXNzb3JzLmJyb256ZU5hbWVcbiAgICB9O1xuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiAnL3Jlc3VsdCcsXG4gICAgICBxdWVyeTogeyBzZWxlY3RlZFByb2Zlc3NvcnM6IEpTT04uc3RyaW5naWZ5KHJlc3VsdCkgfVxuICAgIH0pO1xuICB9O1xuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+U2VsZWNpb25lIG8gUHJvZmVzc29yIEJyb256ZTwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAge3Byb2Zlc3NvcnMubWFwKChwcm9mZXNzb3IpID0+IChcbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAga2V5PXtwcm9mZXNzb3IuaWR9IFxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBzZWxlY3RlZEJyb256ZSA9PT0gcHJvZmVzc29yLmlkID8gJzJweCBzb2xpZCBicm9uemUnIDogJzFweCBzb2xpZCBncmF5JywgbWFyZ2luOiAnMTBweCcsIHBhZGRpbmc6ICcxMHB4JywgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQnJvbnplKHByb2Zlc3Nvci5pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9e2AvaW1hZ2VzLyR7cHJvZmVzc29yLnBob3RvfWB9IGFsdD17cHJvZmVzc29yLm5hbWV9IHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcgfX0gLz5cbiAgICAgICAgICAgIDxwPntwcm9mZXNzb3IubmFtZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gZGlzYWJsZWQ9eyFzZWxlY3RlZEJyb256ZX0+U3VibWl0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJzdXBhYmFzZSIsIlN0ZXAzIiwicm91dGVyIiwic2VsZWN0ZWRQcm9mZXNzb3JzIiwicXVlcnkiLCJKU09OIiwicGFyc2UiLCJzZWxlY3RlZEJyb256ZSIsInNldFNlbGVjdGVkQnJvbnplIiwicHJvZmVzc29ycyIsInNldFByb2Zlc3NvcnMiLCJmZXRjaFByb2Zlc3NvcnMiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0Iiwibm90IiwiZ29sZCIsInNpbHZlciIsImNvbnNvbGUiLCJoYW5kbGVTdWJtaXQiLCJicm9uemUiLCJicm9uemVOYW1lIiwiZmluZCIsInByb2Zlc3NvciIsImlkIiwibmFtZSIsInJlc3VsdCIsImdvbGROYW1lIiwic2lsdmVyTmFtZSIsInB1c2giLCJwYXRobmFtZSIsInN0cmluZ2lmeSIsImRpdiIsImgxIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJtYXAiLCJib3JkZXIiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY3Vyc29yIiwib25DbGljayIsImltZyIsInNyYyIsInBob3RvIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/step3.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/step3.js"));
module.exports = __webpack_exports__;

})();