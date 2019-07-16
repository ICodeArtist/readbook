(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ "../../../../A/my/readbook/client/main.js?{\"page\":\"pages%2Flogin%2Flogin\"}":
/*!************************************************************************!*\
  !*** E:/A/my/readbook/client/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../A/my/readbook/client/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/login.vue */ "../../../../A/my/readbook/client/pages/login/login.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_login.default));

/***/ }),

/***/ "../../../../A/my/readbook/client/pages/login/login.vue":
/*!*****************************************************!*\
  !*** E:/A/my/readbook/client/pages/login/login.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_5801d1bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=5801d1bd& */ "../../../../A/my/readbook/client/pages/login/login.vue?vue&type=template&id=5801d1bd&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "../../../../A/my/readbook/client/pages/login/login.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&lang=css& */ "../../../../A/my/readbook/client/pages/login/login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_5801d1bd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_5801d1bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "A/my/readbook/client/pages/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../A/my/readbook/client/pages/login/login.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** E:/A/my/readbook/client/pages/login/login.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../A/my/readbook/client/pages/login/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../A/my/readbook/client/pages/login/login.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** E:/A/my/readbook/client/pages/login/login.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../A/my/readbook/client/pages/login/login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../A/my/readbook/client/pages/login/login.vue?vue&type=template&id=5801d1bd&":
/*!************************************************************************************!*\
  !*** E:/A/my/readbook/client/pages/login/login.vue?vue&type=template&id=5801d1bd& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_5801d1bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../ChromeDownLoad/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=5801d1bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../A/my/readbook/client/pages/login/login.vue?vue&type=template&id=5801d1bd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_5801d1bd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_ChromeDownLoad_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_5801d1bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../A/my/readbook/client/pages/login/login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/A/my/readbook/client/pages/login/login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _self, session_key, openid, pageoptions;
var signtool = __webpack_require__(/*! ../../commons/sign.js */ "../../../../A/my/readbook/client/commons/sign.js");var _default =
{
  data: function data() {
    return {};


  },
  methods: {
    getUserInfo: function getUserInfo(info) {

      /**
                                              * 获取unionid
                                              var encryptedData = info.mp.detail.encryptedData;
                                              var iv = info.mp.detail.iv;
                                              uni.request({
                                              	url: _self.apiServer+'member&m=wxaes',
                                              	method: 'POST',
                                              	header:{'content-type':'application/x-www-form-urlencoded'},
                                              	data: {
                                              		encryptedData:encryptedData,
                                              		iv:iv,
                                              		session_key:session_key
                                              	},
                                              	success: res => {
                                             		
                                             	}
                                             })
                                              */
      info = info.mp.detail.userInfo;
      var sign = uni.getStorageSync('sign');
      uni.request({
        url: _self.apiServer + 'member&m=login',
        method: 'POST',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        data: {
          openid: openid,
          name: info.nickName,
          face: info.avatarUrl,
          sign: sign },

        success: function success(res) {
          res = res.data;
          if (res.status == 'ok') {
            uni.showToast({ title: "登录成功" });
            uni.setStorageSync('SUID', res.data.u_id + '');
            uni.setStorageSync('SRAND', res.data.u_random + '');
            uni.setStorageSync('SNAME', res.data.u_name + '');
            uni.setStorageSync('SFACE', res.data.u_face + '');
            if (pageoptions.backtype == 1) {
              uni.redirectTo({ url: pageoptions.backpage });
            } else {
              uni.switchTab({ url: pageoptions.backpage });
            }
          } else {
            uni.showToast({ title: "登录失败" });
          }
        },
        fail: function fail() {},
        complete: function complete() {} });

    } },

  onLoad: function onLoad(options) {
    signtool.sign(this.apiServer);
    _self = this;
    pageoptions = options;

    uni.login({
      success: function success(res) {
        uni.request({
          url: _self.apiServer + 'member&m=codeToSession&code=' + res.code,
          success: function success(res) {
            session_key = res.data.session_key;
            openid = res.data.openid;
          } });

      } });



















































  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../A/my/readbook/client/pages/login/login.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/A/my/readbook/client/pages/login/login.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!../../../../A/my/readbook/client/pages/login/login.vue?vue&type=template&id=5801d1bd&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/A/my/readbook/client/pages/login/login.vue?vue&type=template&id=5801d1bd& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "loginbtn" },
    [
      _c(
        "button",
        {
          attrs: {
            type: "primary",
            "open-type": "getUserInfo",
            eventid: "be3c4046-0"
          },
          on: { getuserinfo: _vm.getUserInfo }
        },
        [_vm._v("使用微信登录")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../A/my/readbook/client/main.js?{\"page\":\"pages%2Flogin%2Flogin\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map