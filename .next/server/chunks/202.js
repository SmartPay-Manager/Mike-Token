"use strict";
exports.id = 202;
exports.ids = [202];
exports.modules = {

/***/ 4848:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _WalletModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8741);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _WalletModal__WEBPACK_IMPORTED_MODULE_2__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _WalletModal__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const ButtonConnectWallet = ({ children, className, isShortText = false, ...rest })=>{
    const [isMobileScreen] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)("(max-width: 480px)");
    const { isOpen, onOpen, onClose } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                className: className,
                colorScheme: "brand",
                size: "md",
                bgColor: "bg.brand !important",
                rounded: "full",
                px: 4,
                py: 1,
                onClick: onOpen,
                color: "bg.default",
                borderRadius: "8px",
                ...rest,
                children: isMobileScreen || isShortText ? "Connect" : "Connect Wallet"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                isOpen: isOpen,
                onDismiss: onClose
            })
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonConnectWallet);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2164);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// eslint-disable-next-line react/display-name
const Headline = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ children, type, ...rest }, ref)=>{
    const styleBase = _common__WEBPACK_IMPORTED_MODULE_3__/* .styleMap */ .V[type];
    const tagName = (0,_common__WEBPACK_IMPORTED_MODULE_3__/* .getTagName */ .f)(type);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
        as: tagName,
        ...styleBase,
        ref: ref,
        ...rest,
        children: children
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Headline);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2164);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// eslint-disable-next-line react/display-name
const TextCustom = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ children, type, ...rest }, ref)=>{
    const styleBase = _common__WEBPACK_IMPORTED_MODULE_3__/* .styleMap */ .V[type];
    const tagName = (0,_common__WEBPACK_IMPORTED_MODULE_3__/* .getTagName */ .f)(type);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
        as: tagName,
        ...styleBase,
        ref: ref,
        ...rest,
        children: children
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextCustom);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3677:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6996);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2797);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2164);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Headline__WEBPACK_IMPORTED_MODULE_2__, _Text__WEBPACK_IMPORTED_MODULE_3__]);
([_Headline__WEBPACK_IMPORTED_MODULE_2__, _Text__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// eslint-disable-next-line react/display-name
const TypographyCustom = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ children, type, ...rest }, ref)=>{
    const tagName = (0,_common__WEBPACK_IMPORTED_MODULE_4__/* .getTagName */ .f)(type);
    if (tagName === "p") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            type: type,
            ...rest,
            ref: ref,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Headline__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        type: type,
        ...rest,
        ref: ref,
        children: children
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypographyCustom);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ styleMap),
/* harmony export */   f: () => (/* binding */ getTagName)
/* harmony export */ });
const styleMap = {
    "large-title": {
        fontWeight: [
            "semibold"
        ],
        fontSize: [
            "32px",
            "32px",
            "40px",
            "40px",
            "64px",
            "64px"
        ],
        lineHeight: [
            "48px",
            "48px",
            "60px",
            "60px",
            "96px",
            "96px"
        ]
    },
    "huge-text": {
        fontWeight: [
            "bold"
        ],
        fontSize: [
            "20px",
            "24px",
            "24px",
            "32px",
            "32px",
            "48px"
        ],
        lineHeight: [
            "28px",
            "32px",
            "32px",
            "51px",
            "51px",
            "76px"
        ]
    },
    headline1: {
        fontWeight: [
            "bold"
        ],
        fontSize: [
            "24px",
            "24px",
            "40px",
            "40px",
            "48px",
            "48px"
        ],
        lineHeight: [
            "32px",
            "32px",
            "60px",
            "60px",
            "72px",
            "72px"
        ]
    },
    headline2: {
        fontWeight: [
            "bold"
        ],
        fontSize: [
            "24px",
            "24px",
            "24px",
            "32px",
            "40px",
            "40px"
        ],
        lineHeight: [
            "32px",
            "32px",
            "48px",
            "48px",
            "60px",
            "60px"
        ]
    },
    headline3: {
        fontWeight: [
            "bold"
        ],
        fontSize: [
            "20px",
            "20px",
            "24px",
            "24px",
            "32px",
            "32px"
        ],
        lineHeight: [
            "28px",
            "28px",
            "32px",
            "32px",
            "48px",
            "48px"
        ]
    },
    headline4: {
        fontWeight: [
            "bold"
        ],
        fontSize: [
            "20px",
            "20px",
            "20px",
            "20px",
            "20px",
            "24px"
        ],
        lineHeight: [
            "32px"
        ]
    },
    headline5: {
        fontWeight: [
            "bold"
        ],
        fontSize: [
            "18px",
            "18px",
            "20px",
            "20px",
            "20px",
            "20px"
        ],
        lineHeight: [
            "28px"
        ]
    },
    headline6: {
        fontWeight: [
            "bold"
        ],
        fontSize: [
            "18px"
        ],
        lineHeight: [
            "28px"
        ]
    },
    headline7: {
        fontWeight: [
            "bold"
        ],
        fontSize: [
            "14px",
            "14px",
            "16px",
            "16px",
            "16px",
            "16px"
        ],
        lineHeight: [
            "20px",
            "20px",
            "24px",
            "24px",
            "24px",
            "24px"
        ]
    },
    paragraph1: {
        fontWeight: [
            "regular"
        ],
        fontSize: [
            "14px",
            "14px",
            "14px",
            "14px",
            "16px",
            "16px"
        ],
        lineHeight: [
            "22px",
            "22px",
            "22px",
            "22px",
            "24px",
            "24px"
        ]
    },
    paragraph2: {
        fontWeight: [
            "regular"
        ],
        fontSize: [
            "14px"
        ],
        lineHeight: [
            "22px"
        ]
    },
    paragraph3: {
        fontWeight: [
            "regular"
        ],
        fontSize: [
            "12px"
        ],
        lineHeight: [
            "16px"
        ]
    },
    body1: {
        fontWeight: [
            "medium"
        ],
        fontSize: [
            "14px",
            "14px",
            "16px",
            "16px",
            "16px",
            "16px"
        ],
        lineHeight: [
            "24px"
        ]
    },
    "body1-r": {
        fontWeight: [
            "regular"
        ],
        fontSize: [
            "16px"
        ],
        lineHeight: [
            "24px"
        ]
    },
    body2: {
        fontWeight: [
            "medium"
        ],
        fontSize: [
            "14px"
        ],
        lineHeight: [
            "20px"
        ]
    },
    "body2-r": {
        fontWeight: [
            "regular"
        ],
        fontSize: [
            "12px",
            "12px",
            "12px",
            "12px",
            "14px",
            "14px"
        ],
        lineHeight: [
            "20px"
        ]
    },
    body3: {
        fontWeight: [
            "medium"
        ],
        fontSize: [
            "12px"
        ],
        lineHeight: [
            "20px"
        ]
    },
    "body3-r": {
        fontWeight: [
            "regular"
        ],
        fontSize: [
            "12px"
        ],
        lineHeight: [
            "20px"
        ]
    },
    body4: {
        fontWeight: [
            "medium"
        ],
        fontSize: [
            "10px"
        ],
        lineHeight: [
            "16px"
        ]
    },
    "body4-r": {
        fontWeight: [
            "regular"
        ],
        fontSize: [
            "10px"
        ],
        lineHeight: [
            "16px"
        ]
    },
    button1: {
        fontWeight: [
            "medium"
        ],
        fontSize: [
            "16px"
        ],
        lineHeight: [
            "24px"
        ]
    },
    button2: {
        fontWeight: [
            "medium"
        ],
        fontSize: [
            "14px"
        ],
        lineHeight: [
            "20px"
        ]
    },
    button3: {
        fontWeight: [
            "medium"
        ],
        fontSize: [
            "14px"
        ],
        lineHeight: [
            "20px"
        ]
    },
    "caption1-r": {
        fontWeight: [
            "regular"
        ],
        fontSize: [
            "14px"
        ],
        lineHeight: [
            "20px"
        ]
    },
    "caption2-r": {
        fontWeight: [
            "regular"
        ],
        fontSize: [
            "10px"
        ],
        lineHeight: [
            "16px"
        ]
    }
};
/**
 * @description get element name by type of typo
 * @param type of TypographyType
 * @returns {string} name of tag
 */ const getTagName = (type)=>{
    if ([
        "headline",
        "title"
    ].includes(type)) {
        if ([
            "title"
        ].includes(type)) {
            return "h1";
        }
        return `h${type[type.length - 1]}`;
    }
    return "p";
};


/***/ }),

/***/ 1837:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Typography)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Headline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6996);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2797);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3677);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Headline__WEBPACK_IMPORTED_MODULE_1__, _Text__WEBPACK_IMPORTED_MODULE_2__, _Typography__WEBPACK_IMPORTED_MODULE_3__]);
([_Headline__WEBPACK_IMPORTED_MODULE_1__, _Text__WEBPACK_IMPORTED_MODULE_2__, _Typography__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Typography = _Typography__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
Typography.Heading = _Headline__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z;
Typography.Text = _Text__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8741:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__]);
wagmi__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const WalletModal = ({ isOpen = true, onDismiss = ()=>null })=>{
    const { switchNetwork } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useSwitchNetwork)();
    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1036:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   u: () => (/* binding */ redirect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var _src_components_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1837);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _src_components_Typography__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _src_components_Typography__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const redirect = [
    {
        image: "twitter",
        title: "Twitter",
        link: "https://twitter.com/MikeTokenio"
    },
    {
        image: "telegram",
        title: "Telegram",
        link: "https://t.me/MikeToken"
    },
    {
        image: "youtobe",
        title: "Youtube",
        link: "https://www.youtube.com/channel/UCmDNLcrEK4p2dv888-HjhKA"
    },
    {
        image: "tiktok",
        title: "Tiktok",
        link: "https://www.tiktok.com/@miketokenofficial"
    }
];
const Community = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            id: "social",
            className: "max-w-[1200px] mx-auto py-[112px] max-lg:px-[16px] max-2xl:px-[24px]",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex max-xl:w-full max-xl:flex-col-reverse",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        className: "w-full max-xl:w-full xl:w-1/2 max-xl:mt-[32px]",
                        templateAreas: {
                            base: `"twitter"
          "telegram"
          "youtobe"
          "tiktok"`,
                            lg: `"twitter telegram"
          "youtobe tiktok"`,
                            xl: `"twitter"
          "telegram"
          "youtobe"
          "tiktok"`
                        },
                        gap: 8,
                        children: redirect.map((e, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
                                area: e.image,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                    w: "100%",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: e.link,
                                        className: "w-full",
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex px-6 py-4 w-4/5 max max-xl:w-full rounded-[8px] item-redirect",
                                            style: {
                                                wordBreak: "break-word"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "max-md:min-w-[64px] min-w-[88px] w-2/12",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        src: `/assets/images/icons/${e.image}.svg`,
                                                        width: "48",
                                                        height: "48",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "w-10/12",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center mb-4 text-primary",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
                                                                    type: "headline4",
                                                                    className: "mr-[10px]",
                                                                    children: e.title
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                    src: `/assets/images/icons/arrow-up-right.svg`,
                                                                    width: "18",
                                                                    height: "18",
                                                                    alt: ""
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex w-full",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
                                                                type: "paragraph1",
                                                                className: "text-read w-fit",
                                                                children: e.link
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            }, index);
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full max-xl:w-full xl:w-1/2 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
                                type: "headline2",
                                className: "text-primary mb-6",
                                children: "Meet The Worldwide Community!"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
                                type: "paragraph1",
                                className: "text-read",
                                children: "Stay connected on social media for updates, announcements, and engaging discussions as we revolutionize meme tokens with Mike Token! Join our exciting journey!"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Community);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 874:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1837);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Header_PriceMkt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7984);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _src_components_Typography__WEBPACK_IMPORTED_MODULE_4__, _Header_PriceMkt__WEBPACK_IMPORTED_MODULE_6__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _src_components_Typography__WEBPACK_IMPORTED_MODULE_4__, _Header_PriceMkt__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const features = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Mission",
        path: "#mission"
    },
    {
        name: "Tokenomics",
        path: "#tokenomics"
    },
    {
        name: "Roadmap",
        path: "#roadmap"
    },
    {
        name: "Team",
        path: "#team"
    },
    {
        name: "Social",
        path: "#social"
    }
];
const Footer = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const handleBuyMkt = ()=>{
        router.push("/swap");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        zIndex: 9,
        position: "inherit",
        p: "1em",
        w: "100%",
        className: "bg-primary",
        height: "fit-content",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
                maxW: "1200px",
                mx: "auto",
                w: "100%"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    flexDirection: {
                        xs: "column",
                        lg: "row"
                    },
                    sx: {
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "space-between",
                        maxW: "1200px"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            gap: "10px",
                            w: {
                                lg: "50%"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: "/icons/logo.svg",
                                    alt: "logo",
                                    width: 38,
                                    height: 38
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                    alignContent: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: "/icons/project_name.svg",
                                        alt: "logo",
                                        width: 141,
                                        height: 28
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            display: {
                                xs: "flex",
                                lg: "none"
                            },
                            justify: "space-between",
                            w: "100%",
                            py: "16px",
                            alignItems: "center",
                            borderTop: "1px solid #222736",
                            borderBottom: "1px solid #222736",
                            my: "12px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header_PriceMkt__WEBPACK_IMPORTED_MODULE_6__/* .PriceMkt */ .O, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    variant: "outline",
                                    color: "#1ED760",
                                    border: "1px solid #1ED760",
                                    _hover: {},
                                    _active: {},
                                    onClick: handleBuyMkt,
                                    children: "Buy MKT"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            w: {
                                xs: "100%",
                                lg: "50%"
                            },
                            justifyContent: {
                                xs: "space-between",
                                md: "center",
                                lg: "flex-end"
                            },
                            gap: "1.5em",
                            color: "text.primary",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                    flexDirection: {
                                        xs: "column",
                                        md: "row"
                                    },
                                    ml: "16px",
                                    gap: "1.5em",
                                    justifyContent: "flex-end",
                                    children: features.slice(0, 3).map((e)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: e.path,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                                children: e.name
                                            }, e.name)
                                        }, e.name))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                    flexDirection: {
                                        xs: "column",
                                        md: "row"
                                    },
                                    mr: "16px",
                                    gap: "1.5em",
                                    children: features.slice(3, 6).map((e)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: e.path,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                                justifyContent: {
                                                    xs: "flex-end",
                                                    md: ""
                                                },
                                                children: e.name
                                            })
                                        }, e.name))
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    color: "#222736",
                    my: "1.5em"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
                    color: "text.secondary",
                    type: "body2",
                    textAlign: "center",
                    children: "Disclaimer: Mike Token project is not related to the Monsters movies. We simply admire the characters."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
                    color: "text.secondary",
                    type: "body2",
                    textAlign: "center",
                    children: "Copyright \xa9 2023 MikeToken"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Features),
/* harmony export */   R: () => (/* binding */ features)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const features = [
    {
        name: "Home",
        path: "/",
        icons: "home-icons"
    },
    {
        name: "Liquidity",
        path: "/liquidity",
        icons: "liquidity"
    },
    {
        name: "Swap",
        path: "/swap",
        icons: "swap-icons"
    },
    {
        name: "Pools",
        path: "/pools",
        icons: "pool-icons"
    },
    {
        name: "Farms",
        path: "/farms",
        icons: "farm-icons"
    },
    {
        name: "NFTs",
        path: "/nfts",
        icons: "nft-icons"
    },
    {
        name: "Docs",
        path: "https://miketoken-io.gitbook.io/miketoken.io/",
        icons: "docs",
        isExternal: true
    }
];
const Features = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
        columns: [
            7
        ],
        color: "text.primary",
        fontWeight: 500,
        display: {
            xs: "none",
            xl: "grid"
        },
        className: "ml-[-100px]",
        children: features.map((e)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: e.path,
                target: e.isExternal ? "_blank" : "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    color: router?.asPath === e.path ? "#1ED760" : "",
                    alignItems: "center",
                    justifyContent: "center",
                    children: e.name
                })
            }, e.name))
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ PriceMkt)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1837);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _src_components_Typography__WEBPACK_IMPORTED_MODULE_4__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _src_components_Typography__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const PriceMkt = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        alignItems: "center",
        justify: "center",
        gap: "6px",
        mr: {
            xs: "0px",
            lg: "12px"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: "/icons/single.svg",
                alt: "logo",
                width: 24,
                height: 24
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, {
                type: "body1",
                color: "white",
                children: "$"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1966:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



//   import Icon from "@/components/Icon";
const UserInfo = ()=>{
    const [isMobileScreen] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)("(max-width: 768px)");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
        trigger: isMobileScreen ? "click" : "hover",
        placement: "bottom-end",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PopoverTrigger, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    bgColor: "bg.brand !important",
                    rounded: "full",
                    px: 4,
                    py: 1,
                    color: "bg.default",
                    borderRadius: "8px",
                    height: "42px",
                    alignItems: "center"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Portal, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PopoverContent, {
                    mt: 2,
                    boxShadow: "md",
                    rounded: "xl",
                    border: "none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PopoverBody, {
                        p: 0,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            variant: "primary",
                            size: "md",
                            w: "full",
                            justifyContent: "flex-start",
                            color: "bg.default",
                            bgColor: "bg.brand !important",
                            children: "Disconnect"
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(UserInfo));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _src_components_ButtonConnectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5101);
/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1966);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_containers_HomePage_Community__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1036);
/* harmony import */ var _src_components_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1837);
/* harmony import */ var _PriceMkt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7984);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _src_components_ButtonConnectWallet__WEBPACK_IMPORTED_MODULE_2__, _Features__WEBPACK_IMPORTED_MODULE_5__, _UserInfo__WEBPACK_IMPORTED_MODULE_6__, _src_containers_HomePage_Community__WEBPACK_IMPORTED_MODULE_9__, _src_components_Typography__WEBPACK_IMPORTED_MODULE_10__, _PriceMkt__WEBPACK_IMPORTED_MODULE_11__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _src_components_ButtonConnectWallet__WEBPACK_IMPORTED_MODULE_2__, _Features__WEBPACK_IMPORTED_MODULE_5__, _UserInfo__WEBPACK_IMPORTED_MODULE_6__, _src_containers_HomePage_Community__WEBPACK_IMPORTED_MODULE_9__, _src_components_Typography__WEBPACK_IMPORTED_MODULE_10__, _PriceMkt__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Header = ()=>{
    const [currentWallet, setCurrentWallet] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { isOpen, onOpen, onClose } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                sx: {
                    // maxW: "1200px",
                    mx: "auto",
                    // borderRadius: "8px",
                    // border: "1px solid #1ED760",
                    // boxShadow: "0px 8px 25px 0px rgba(0, 0, 0, 0.50)",
                    borderBottom: "1px solid #555C6D",
                    px: "1.5em",
                    py: "0.8em",
                    zIndex: 10,
                    position: "relative",
                    background: "bg.default"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
                    maxW: "1200px",
                    mx: "auto",
                    w: "100%",
                    columns: {
                        xs: 2,
                        xl: 3
                    },
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            gap: "0.5em",
                            align: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                    display: {
                                        xs: "flex",
                                        xl: "none"
                                    },
                                    mr: "10px",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: "/icons/menu-mobile.svg",
                                        alt: "logo",
                                        width: 32,
                                        height: 32,
                                        onClick: onOpen
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: "/icons/logo.svg",
                                    alt: "logo",
                                    width: 40,
                                    height: 40
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                    display: {
                                        xs: "none",
                                        lg: "flex"
                                    },
                                    alignContent: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: "/icons/project_name.svg",
                                        alt: "logo",
                                        width: 141,
                                        height: 28
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Features__WEBPACK_IMPORTED_MODULE_5__/* .Features */ .A, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            justifyContent: "flex-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                    display: {
                                        xs: "none",
                                        lg: "flex"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PriceMkt__WEBPACK_IMPORTED_MODULE_11__/* .PriceMkt */ .O, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_ButtonConnectWallet__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                        className: "prose cursor-pointer items-center gap-1 bg-white px-3 py-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserInfo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Drawer, {
                placement: "left",
                onClose: onClose,
                isOpen: isOpen,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerOverlay, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerContent, {
                        bg: "#161717",
                        className: "text-primary",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerCloseButton, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerHeader, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: "mr-2",
                                            src: "/icons/logo.svg",
                                            alt: "logo",
                                            width: 40,
                                            height: 40
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            src: "/icons/project_name.svg",
                                            alt: "logo",
                                            width: 141,
                                            height: 28
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.DrawerBody, {
                                px: "0",
                                children: [
                                    _Features__WEBPACK_IMPORTED_MODULE_5__/* .features */ .R.map((e)=>{
                                        const isActive = router?.asPath === e.path;
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            href: e.path,
                                            onClick: onClose,
                                            target: e.isExternal ? "_blank" : "",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                                borderLeft: router?.asPath === e.path ? "2px solid #1ED760" : "1px solid transparent",
                                                background: router?.asPath === e.path ? "rgba(30, 215, 96, 0.05)" : "transparent",
                                                p: "12px 16px",
                                                _hover: {
                                                    background: "#555C6D"
                                                },
                                                w: "100%",
                                                alignItems: "center",
                                                color: router?.asPath === e.path ? "#1ED760" : "#F6F6FF",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        className: "mr-4",
                                                        src: `/assets/images/icons/${isActive ? `${e.icons}-active` : e.icons}.svg`,
                                                        alt: "",
                                                        width: 24,
                                                        height: 24,
                                                        style: {
                                                            fill: "red"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_Typography__WEBPACK_IMPORTED_MODULE_10__/* .Typography */ .Z, {
                                                        type: "body1",
                                                        color: "text.primary",
                                                        children: [
                                                            " ",
                                                            e.name
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, e.name);
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                        justifyContent: "center",
                                        children: _src_containers_HomePage_Community__WEBPACK_IMPORTED_MODULE_9__/* .redirect */ .u.map((e, index)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                                mr: "22px",
                                                mt: "32px",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    href: e.link,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: `/assets/images/icons/${e.image}.svg`,
                                                        width: "24",
                                                        height: "24",
                                                        alt: "",
                                                        className: "stroke-cyan-500"
                                                    })
                                                })
                                            }, index);
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5925);
/* harmony import */ var next_router_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Footer_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(874);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5128);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _Footer_tsx__WEBPACK_IMPORTED_MODULE_4__, _Header__WEBPACK_IMPORTED_MODULE_5__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _Footer_tsx__WEBPACK_IMPORTED_MODULE_4__, _Header__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Layout = (props)=>{
    const { children } = props;
    const router = (0,next_router_js__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justifyContent: "space-between",
        flexDirection: "column",
        className: "bg-default h-full relative z-9 min-h-[100vh]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                direction: "column",
                hidden: router?.asPath !== "/",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/images/left.png",
                        width: 535,
                        height: 535,
                        alt: "left",
                        style: {
                            position: "absolute"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/images/left.png",
                        width: 535,
                        height: 535,
                        alt: "left",
                        style: {
                            right: "10%",
                            top: "200px",
                            position: "absolute"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        sx: {
                            position: "absolute",
                            top: "35vh",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "100%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: "/images/coin-ai.png",
                            width: 1836,
                            height: 375,
                            alt: "coin-ai",
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                zIndex: 10,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_5__/* .Header */ .h, {})
            }),
            " ",
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer_tsx__WEBPACK_IMPORTED_MODULE_4__/* .Footer */ .$, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;