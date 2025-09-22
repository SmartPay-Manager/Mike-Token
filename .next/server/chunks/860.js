"use strict";
exports.id = 860;
exports.ids = [860];
exports.modules = {

/***/ 7860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   r: () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _src_components_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1837);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _src_components_Typography__WEBPACK_IMPORTED_MODULE_2__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _src_components_Typography__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// import Calculator from "./Calculator";
const Pools = ()=>{
    const [idxFilter, setIdxFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    // console.log("listPool :>> ", listPool);
    // useEffect(() => {
    //   const firebaseApp = getFirebaseApp();
    //   // console.log("firebaseApp :>> ", firebaseApp);
    //   const remoteConfigData = getRemoteConfig(firebaseApp);
    //   remoteConfigData.settings = {
    //     fetchTimeoutMillis: 60000,
    //     minimumFetchIntervalMillis: 60000 * 5,
    //   };
    //   fetchAndActivate(remoteConfigData)
    //     .then(() => {
    //       const data = getValue(remoteConfigData, "poolConfig");
    //       const jsonData = JSON.parse(data.asString());
    //       setListPool(jsonData);
    //     })
    //     .catch(() => {
    //       console.log("firebase err");
    //     });
    // }, []);
    const listFilter = [
        "Active",
        "Finished"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        w: "100%",
        direction: "column",
        pb: "100px",
        px: {
            base: "16px",
            lg: "24px",
            "2xl": 0
        },
        pt: {
            base: "32px",
            md: "48px",
            xl: "80px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                maxWidth: "1200px",
                w: "100%",
                mx: "auto",
                justifyContent: "left",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                    textAlign: "left",
                    type: "headline2",
                    color: "text.primary",
                    children: "Pools"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                w: "100%",
                direction: {
                    base: "column",
                    lg: "row"
                },
                maxWidth: "1200px",
                mx: "auto",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        direction: {
                            base: "column",
                            md: "row"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                                as: "span",
                                type: "body1-r",
                                color: "text.read",
                                children: "Stake USDT and MKT tokens to earn USDT"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                cursor: "pointer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                                        pl: {
                                            base: 0,
                                            md: "12px"
                                        },
                                        as: "span",
                                        type: "body1-r",
                                        color: "text.brand",
                                        children: "Learn more"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        ml: "4px",
                                        boxSize: "20px",
                                        src: "arrow-expand.svg",
                                        alt: "arrow expand"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        mt: {
                            base: "24px",
                            lg: 0
                        },
                        borderRadius: "6px",
                        bg: "bg.primary",
                        w: "fit-content",
                        children: listFilter.map((e, idx)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                h: "32px",
                                justify: "center",
                                align: "center",
                                bg: idx === idxFilter ? "bg.brand" : "bg.secondary",
                                w: "107px",
                                borderRadius: "6px",
                                onClick: ()=>setIdxFilter(idx),
                                cursor: "pointer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
                                    type: "button3",
                                    color: idx === idxFilter ? "bg.secondary" : "text.secondary",
                                    children: e
                                })
                            }, `item-filter-${idx}`);
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pools);
const ButtonComponent = ({ title, ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        background: "bg.brand !important",
        borderRadius: "6px",
        _hover: {
            bg: "bg.brand-active !important"
        },
        _active: {
            bg: "bg.brand-active !important"
        },
        color: "bg.default",
        ...rest,
        children: typeof title === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Typography__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
            type: "button1",
            children: title
        }) : title
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;