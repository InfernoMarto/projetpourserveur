(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "./assets/admin.pack.js":
/*!******************************!*\
  !*** ./assets/admin.pack.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/admin.scss */ "./assets/scss/admin.scss");
/* harmony import */ var _scss_admin_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_admin_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_admin_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/admin/configuration */ "./assets/js/admin/configuration.js");
/* harmony import */ var _js_admin_configuration__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_admin_configuration__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_admin_element_import_element_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/admin/element-import/element-import */ "./assets/js/admin/element-import/element-import.js");
/* harmony import */ var _js_admin_osm_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/admin/osm-tags */ "./assets/js/admin/osm-tags.js");
/* harmony import */ var _js_admin_element_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/admin/element-edit */ "./assets/js/admin/element-edit.js");
/* harmony import */ var _js_admin_source_priority__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/admin/source-priority */ "./assets/js/admin/source-priority.js");
// Styles
 // Javascript







/***/ }),

/***/ "./assets/js/admin/configuration.js":
/*!******************************************!*\
  !*** ./assets/js/admin/configuration.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

// CONFIGURATION ADMIN, disable the whole feature box according to checkbox "feature active"
document.addEventListener('DOMContentLoaded', function () {
  checkCollaborativeVoteActivated();
  $('.collaborative-feature .sonata-ba-field.sonata-ba-field-inline-natural > .form-group:first-child .icheckbox_square-blue .iCheck-helper').click(checkCollaborativeVoteActivated);
  $('.gogo-feature').each(function () {
    checkGoGoFeatureActivated(this);
  });
  $('.gogo-feature .sonata-ba-field.sonata-ba-field-inline-natural > .form-group:first-child .icheckbox_square-blue .iCheck-helper').click(function () {
    var that = this;
    setTimeout(function () {
      checkGoGoFeatureActivated($(that).closest('.gogo-feature'));
    }, 10);
  });
});

function checkCollaborativeVoteActivated() {
  var collabActive = $('.collaborative-feature .sonata-ba-field.sonata-ba-field-inline-natural > .form-group:first-child .icheckbox_square-blue').hasClass('checked');
  var opacity = collabActive ? '1' : '0.4';
  $('.collaborative-moderation-box').css('opacity', opacity);
}

function checkGoGoFeatureActivated(object) {
  var featureActive = $(object).find('.sonata-ba-field.sonata-ba-field-inline-natural > .form-group:first-child .icheckbox_square-blue').hasClass('checked');
  var opacity = featureActive ? '1' : '0.5';
  $(object).css('opacity', opacity);
}

/***/ }),

/***/ "./assets/js/admin/element-edit.js":
/*!*****************************************!*\
  !*** ./assets/js/admin/element-edit.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue/dist/vue.esm */ "./node_modules/vue/dist/vue.esm.js");


document.addEventListener('DOMContentLoaded', function () {
  if ($('.element-data-fields').length > 0) {
    new vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_1__["default"]({
      el: ".element-data-fields",
      data: {
        newFields: [],
        existingProps: existingProps.map(function (prop) {
          return {
            id: prop,
            text: prop
          };
        })
      },
      methods: {
        addField: function addField() {
          this.newFields.push('');
        }
      }
    });
  }
});

/***/ }),

/***/ "./assets/js/admin/element-import/BoundsPicker.vue":
/*!*********************************************************!*\
  !*** ./assets/js/admin/element-import/BoundsPicker.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoundsPicker_vue_vue_type_template_id_cb95b4f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoundsPicker.vue?vue&type=template&id=cb95b4f8& */ "./assets/js/admin/element-import/BoundsPicker.vue?vue&type=template&id=cb95b4f8&");
/* harmony import */ var _BoundsPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoundsPicker.vue?vue&type=script&lang=js& */ "./assets/js/admin/element-import/BoundsPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BoundsPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoundsPicker.vue?vue&type=style&index=0&lang=scss& */ "./assets/js/admin/element-import/BoundsPicker.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BoundsPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BoundsPicker_vue_vue_type_template_id_cb95b4f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BoundsPicker_vue_vue_type_template_id_cb95b4f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/admin/element-import/BoundsPicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/admin/element-import/BoundsPicker.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./assets/js/admin/element-import/BoundsPicker.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BoundsPicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/admin/element-import/BoundsPicker.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./assets/js/admin/element-import/BoundsPicker.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader??ref--4-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./BoundsPicker.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./assets/js/admin/element-import/BoundsPicker.vue?vue&type=template&id=cb95b4f8&":
/*!****************************************************************************************!*\
  !*** ./assets/js/admin/element-import/BoundsPicker.vue?vue&type=template&id=cb95b4f8& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_template_id_cb95b4f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BoundsPicker.vue?vue&type=template&id=cb95b4f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=template&id=cb95b4f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_template_id_cb95b4f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoundsPicker_vue_vue_type_template_id_cb95b4f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilder.vue":
/*!************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilder.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OsmQueryBuilder_vue_vue_type_template_id_6781daea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true& */ "./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true&");
/* harmony import */ var _OsmQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OsmQueryBuilder.vue?vue&type=script&lang=js& */ "./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OsmQueryBuilder_vue_vue_type_style_index_0_id_6781daea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true& */ "./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OsmQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OsmQueryBuilder_vue_vue_type_template_id_6781daea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OsmQueryBuilder_vue_vue_type_template_id_6781daea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6781daea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/admin/element-import/OsmQueryBuilder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmQueryBuilder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_style_index_0_id_6781daea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader??ref--4-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_style_index_0_id_6781daea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_style_index_0_id_6781daea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_style_index_0_id_6781daea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_style_index_0_id_6781daea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_template_id_6781daea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_template_id_6781daea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilder_vue_vue_type_template_id_6781daea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilderCondition.vue":
/*!*********************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilderCondition.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OsmQueryBuilderCondition_vue_vue_type_template_id_04e62b80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80& */ "./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80&");
/* harmony import */ var _OsmQueryBuilderCondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OsmQueryBuilderCondition.vue?vue&type=script&lang=js& */ "./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OsmQueryBuilderCondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OsmQueryBuilderCondition_vue_vue_type_template_id_04e62b80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OsmQueryBuilderCondition_vue_vue_type_template_id_04e62b80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/admin/element-import/OsmQueryBuilderCondition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderCondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmQueryBuilderCondition.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderCondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80&":
/*!****************************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderCondition_vue_vue_type_template_id_04e62b80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderCondition_vue_vue_type_template_id_04e62b80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderCondition_vue_vue_type_template_id_04e62b80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue":
/*!*********************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OsmQueryBuilderTagSearch_vue_vue_type_template_id_357b0e72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72& */ "./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72&");
/* harmony import */ var _OsmQueryBuilderTagSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js& */ "./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OsmQueryBuilderTagSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OsmQueryBuilderTagSearch_vue_vue_type_template_id_357b0e72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OsmQueryBuilderTagSearch_vue_vue_type_template_id_357b0e72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderTagSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderTagSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72&":
/*!****************************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderTagSearch_vue_vue_type_template_id_357b0e72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderTagSearch_vue_vue_type_template_id_357b0e72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmQueryBuilderTagSearch_vue_vue_type_template_id_357b0e72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue":
/*!********************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OsmqueryBuilderWikiLink_vue_vue_type_template_id_a92fb356_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true& */ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true&");
/* harmony import */ var _OsmqueryBuilderWikiLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js& */ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OsmqueryBuilderWikiLink_vue_vue_type_style_index_0_id_a92fb356_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css& */ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OsmqueryBuilderWikiLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OsmqueryBuilderWikiLink_vue_vue_type_template_id_a92fb356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OsmqueryBuilderWikiLink_vue_vue_type_template_id_a92fb356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a92fb356",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_style_index_0_id_a92fb356_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_style_index_0_id_a92fb356_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_style_index_0_id_a92fb356_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_style_index_0_id_a92fb356_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_style_index_0_id_a92fb356_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_template_id_a92fb356_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_template_id_a92fb356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OsmqueryBuilderWikiLink_vue_vue_type_template_id_a92fb356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/admin/element-import/element-import.js":
/*!**********************************************************!*\
  !*** ./assets/js/admin/element-import/element-import.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OsmQueryBuilder_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OsmQueryBuilder.vue */ "./assets/js/admin/element-import/OsmQueryBuilder.vue");
/* harmony import */ var vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue/dist/vue.esm */ "./node_modules/vue/dist/vue.esm.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



document.addEventListener('DOMContentLoaded', function () {
  if ($('#element-import').length > 0) {
    new vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_2__["default"]({
      el: "#element-import",
      data: {
        sourceType: undefined,
        url: undefined,
        osmQueriesJson: undefined,
        formName: ""
      },
      computed: {
        osmQueryInputValue: function osmQueryInputValue() {
          if (!this.osmQueriesJson) return "";
          var result = {};
          result.address = this.osmQueriesJson.address;
          result.bounds = this.osmQueriesJson.bounds;
          result.queries = [];

          var _iterator = _createForOfIteratorHelper(this.osmQueriesJson.queries),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var query = _step.value;
              result.queries.push(query.filter(function (condition) {
                return condition.key;
              }));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return JSON.stringify(result);
        }
      },
      components: {
        OsmQueryBuilder: _OsmQueryBuilder_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
      },
      mounted: function mounted() {
        for (var key in importObject) {
          this[key] = importObject[key];
        }

        this.osmQueriesJson = JSON.parse(this.osmQueriesJson);
        this.sourceType = sourceType;
        this.formName = formName;
        $("#sonata-ba-field-container-".concat(formName, "_file")).appendTo('.file-container');
      },
      watch: {
        sourceType: function sourceType(newVal) {
          $('.input-is-synched').closest('.checkbox').toggle(newVal == 'osm');
        }
      }
    });
  }
});

/***/ }),

/***/ "./assets/js/admin/osm-tags.js":
/*!*************************************!*\
  !*** ./assets/js/admin/osm-tags.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/dist/vue.esm */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _element_import_OsmQueryBuilderCondition_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-import/OsmQueryBuilderCondition.vue */ "./assets/js/admin/element-import/OsmQueryBuilderCondition.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



document.addEventListener('DOMContentLoaded', function () {
  if ($('.osm-tags-field').length > 0) {
    new vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_0__["default"]({
      el: ".osm-tags-field",
      data: {
        formName: undefined,
        tags: []
      },
      computed: {
        stringifiedTagsHash: function stringifiedTagsHash() {
          var result = {};

          var _iterator = _createForOfIteratorHelper(this.tags),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var tag = _step.value;
              if (tag.key && tag.value) result[tag.key] = tag.value;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return JSON.stringify(result);
        }
      },
      components: {
        OsmCondition: _element_import_OsmQueryBuilderCondition_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
      },
      mounted: function mounted() {
        this.formName = formName;
        console.log(importObject, importObject.osmTags);

        for (var key in importObject.osmTags) {
          this.tags.push({
            key: key,
            value: importObject.osmTags[key]
          });
        }
      }
    });
  }
});

/***/ }),

/***/ "./assets/js/admin/source-priority.js":
/*!********************************************!*\
  !*** ./assets/js/admin/source-priority.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue/dist/vue.esm */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");




vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_2__["default"].directive('sortable', {
  inserted: function inserted(el, binding) {
    new sortablejs__WEBPACK_IMPORTED_MODULE_3__["default"](el, binding.value || {});
  }
});
document.addEventListener('DOMContentLoaded', function () {
  if ($('.source-priority-container').length > 0) {
    new vue_dist_vue_esm__WEBPACK_IMPORTED_MODULE_2__["default"]({
      el: ".source-priority-container",
      data: {
        list: undefined,
        value: undefined
      },
      mounted: function mounted() {
        this.list = sourceList;
        this.value = this.list.join(',');
      },
      methods: {
        onUpdate: function onUpdate(event) {
          this.list.splice(event.newIndex, 0, this.list.splice(event.oldIndex, 1)[0]);
          this.value = this.list.join(',');
        },
        textFrom: function textFrom(item) {
          return item ? item : "Cette Carte";
        }
      }
    });
  }
});

/***/ }),

/***/ "./assets/scss/admin.scss":
/*!********************************!*\
  !*** ./assets/scss/admin.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_shades__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet-shades */ "./node_modules/leaflet-shades/src/js/index.js");
/* harmony import */ var leaflet_shades__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_shades__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var leaflet_shades_src_css_leaflet_shades_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet-shades/src/css/leaflet-shades.css */ "./node_modules/leaflet-shades/src/css/leaflet-shades.css");
/* harmony import */ var leaflet_shades_src_css_leaflet_shades_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet_shades_src_css_leaflet_shades_css__WEBPACK_IMPORTED_MODULE_5__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['osmQueryObject', 'tileLayer', 'defaultBounds'],
  data: function data() {
    return {
      queryType: null,
      // either 'address' or 'bounds'
      inputAddress: undefined,
      geocodedAddress: {},
      geocodeErrorMsg: '',
      mapBounds: null,
      drawnBounds: null,
      // drawn bounds by user with leaflet-shades
      map: undefined,
      currentLayers: undefined,
      mapShades: undefined
    };
  },
  computed: {
    bounds: function bounds() {
      // if (this.addressPresent) return null
      return this.queryType == 'bounds' && this.drawnBounds ? this.drawnBounds : this.mapBounds;
    },
    address: function address() {
      if (this.queryType == 'address' && this.geocodedAddress && this.geocodedAddress.osm_id) return this.inputAddress;else return null;
    },
    // builds the geographical part of the overpass query
    overpassQuery: function overpassQuery() {
      if (this.address) {
        var areaRef = 1 * this.geocodedAddress.osm_id;
        if (this.geocodedAddress.osm_type == "way") areaRef += 2400000000;
        if (this.geocodedAddress.osm_type == "relation") areaRef += 3600000000;
        return "(area:".concat(areaRef, ")");
      } else {
        var b = this.bounds;
        return "(".concat(b.getSouth(), ",").concat(b.getWest(), ",").concat(b.getNorth(), ",").concat(b.getEast(), ")");
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    // Init map
    this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"](this.$refs.map, {
      editable: true
    });
    leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"](this.tileLayer).addTo(this.map);
    this.map.on('moveend', function () {
      return _this.mapBounds = _this.map.getBounds();
    });
    this.currentLayers = new leaflet__WEBPACK_IMPORTED_MODULE_2__["layerGroup"]();
    this.currentLayers.addTo(this.map); // Initialise state from saved osmQueryObject

    var initialBounds = this.defaultBounds;

    if (this.osmQueryObject && this.osmQueryObject.address) {
      this.inputAddress = this.osmQueryObject.address;
      this.geocodeAddress();
      this.queryType = 'address';
    } else if (this.osmQueryObject && this.osmQueryObject.bounds) {
      initialBounds = new leaflet__WEBPACK_IMPORTED_MODULE_2__["latLngBounds"](this.osmQueryObject.bounds);
      this.drawnBounds = initialBounds;
      this.queryType = 'bounds';
    } // Init map position


    this.map.fitBounds(initialBounds);
    this.mapBounds = this.map.getBounds();
  },
  watch: {
    // When switching query type we need to turn on/off leaflet shades plugin
    queryType: function queryType() {
      var _this2 = this;

      if (this.mapShades) {
        this.mapShades.onRemove(this.map); // See https://github.com/mkong0216/leaflet-shades/issues/3

        this.mapShades = null;
      }

      this.currentLayers.clearLayers();

      if (this.queryType == 'bounds') {
        if (this.drawnBounds) {
          var rect = leaflet__WEBPACK_IMPORTED_MODULE_2__["rectangle"](this.drawnBounds);
          this.currentLayers.addLayer(rect);
          rect.enableEdit();
        } else {
          this.currentLayers.addLayer(this.map.editTools.startRectangle());
        } // Init shades


        this.mapShades = new leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletShades"]();
        this.mapShades.addTo(this.map);
        this.mapShades.on('shades:bounds-changed', function (event) {
          _this2.drawnBounds = event.bounds;
        });
      }
    }
  },
  methods: {
    geocodeAddress: function geocodeAddress() {
      var _this3 = this;

      if (!this.inputAddress) {
        this.geocodeErrorMsg = "Veuillez entrer une adresse";
        return;
      }

      var url = "https://nominatim.openstreetmap.org/search.php?q=".concat(this.inputAddress, "&polygon_geojson=1&format=jsonv2");
      $.getJSON(url, function (results) {
        if (!results || results.length == 0) {
          _this3.geocodeErrorMsg = "Aucune r\xE9sultat trouv\xE9 pour ".concat(_this3.inputAddress);
          return;
        }

        _this3.geocodeErrorMsg = '';

        _this3.currentLayers.clearLayers();

        _this3.geocodedAddress = results[0];
        var layer = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](_this3.geocodedAddress.geojson, {
          style: function style(feature) {
            color: 'blue';
          }
        });

        _this3.currentLayers.addLayer(layer);

        _this3.map.fitBounds(layer.getBounds());
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _OsmQueryBuilderCondition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OsmQueryBuilderCondition */ "./assets/js/admin/element-import/OsmQueryBuilderCondition.vue");
/* harmony import */ var _OsmQueryBuilderTagSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OsmQueryBuilderTagSearch */ "./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue");
/* harmony import */ var _BoundsPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BoundsPicker */ "./assets/js/admin/element-import/BoundsPicker.vue");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['osmQueryObject', 'tileLayer', 'defaultBounds'],
  components: {
    OsmCondition: _OsmQueryBuilderCondition__WEBPACK_IMPORTED_MODULE_3__["default"],
    OsmTagSearch: _OsmQueryBuilderTagSearch__WEBPACK_IMPORTED_MODULE_4__["default"],
    BoundsPicker: _BoundsPicker__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      queries: []
    };
  },
  computed: {
    // Transform queries array into an Overpass query
    overpassQuery: function overpassQuery() {
      var result = '';

      var _iterator = _createForOfIteratorHelper(this.queries),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var query = _step.value;
          var queryString = '';

          var _iterator2 = _createForOfIteratorHelper(query),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var condition = _step2.value;

              if (condition.operator == "" || condition.operator == "!") {
                queryString += "[".concat(condition.operator, "\"").concat(condition.key, "\"]");
              } else if (condition.value) {
                var value = condition.value.replace(/,/g, '|'); // transform multi input into reg expr

                queryString += "[\"".concat(condition.key, "\"").concat(condition.operator, "\"").concat(value, "\"]");
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          queryString += this.$refs.boundsPicker.overpassQuery;
          if (query != '') result += "node".concat(queryString, ";way").concat(queryString, ";relation").concat(queryString, ";");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    },
    overpassApiUrl: function overpassApiUrl() {
      // out meta provide extra data, out center provide center of way or relation
      return "https://overpass-api.de/api/interpreter?data=[out:json][timeout:1000];(".concat(this.overpassQuery, ");out%20meta%20center;");
    }
  },
  watch: {
    overpassApiUrl: function overpassApiUrl(url) {
      this.$emit('osm-url-changed', url);
      this.$emit('update:osmQueryObject', {
        queries: this.queries,
        bounds: [this.$refs.boundsPicker.bounds.getSouthWest(), this.$refs.boundsPicker.bounds.getNorthEast()],
        address: this.$refs.boundsPicker.address
      });
    }
  },
  mounted: function mounted() {
    if (this.osmQueryObject && this.osmQueryObject.queries) this.queries = this.osmQueryObject.queries;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _OsmqueryBuilderWikiLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OsmqueryBuilderWikiLink */ "./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue");








function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['condition'],
  components: {
    OsmWikiLink: _OsmqueryBuilderWikiLink__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      prevalentValues: []
    };
  },
  computed: {
    operator: function operator() {
      return this.condition.operator;
    },
    isMultipleCondition: function isMultipleCondition() {
      return this.operator && this.operator.includes('~');
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.condition.key) {
      // get prevalentValues using first result, i.e. perfect match
      $.getJSON(this.keyInfoUrl(this.condition.key), function (response) {
        if (response.data.length > 0) {
          _this.prevalentValues = response.data[0].prevalent_values;

          _this.initInputValue();
        }
      });
    } else {
      this.initSearchKeyInput();
    }
  },
  watch: {
    operator: function operator(newVal, oldVal) {
      var newValIsArray = newVal && newVal.includes('~');
      var oldValIsArray = oldVal && oldVal.includes('~');

      if (newValIsArray != oldValIsArray) {
        if (!newValIsArray && this.condition.value) {
          // transform array value to single value
          this.condition.value = this.condition.value.split(',')[0];
          $(this.$refs.inputValue).val(this.condition.value).trigger('change'); // needed for select2 to be updated
        }

        this.initInputValue();
      }
    }
  },
  methods: {
    keyInfoUrl: function keyInfoUrl(key) {
      return "https://taginfo.openstreetmap.org/api/4/keys/all?query=".concat(key, "&include=prevalent_values&sortname=count_all&sortorder=desc&page=1&rp=20&qtype=key&format=json_pretty");
    },
    initSearchKeyInput: function initSearchKeyInput() {
      var _this2 = this;

      $(this.$refs.inputKey).select2({
        minimumInputLength: 2,
        ajax: {
          url: function url(term) {
            return _this2.keyInfoUrl(term);
          },
          dataType: 'json',
          processResults: function processResults(response) {
            return {
              results: response.data
            };
          }
        },
        id: function id(item) {
          return item.key;
        },
        formatResult: function formatResult(item) {
          return item.key;
        },
        formatSelection: function formatSelection(item) {
          return _this2.onKeySelectedFromSearchResults(item);
        }
      });
    },
    onKeySelectedFromSearchResults: function onKeySelectedFromSearchResults(item) {
      this.prevalentValues = item.prevalent_values;
      this.initInputValue();
      this.condition.key = item.key;
      return item.key;
    },
    initInputValue: function initInputValue() {
      var _this3 = this;

      var data = this.prevalentValues;

      if (this.condition.value) {
        if (this.isMultipleCondition) {
          var _iterator = _createForOfIteratorHelper(this.condition.value.split(',')),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var value = _step.value;
              data.unshift({
                value: value
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          data.unshift({
            value: this.condition.value
          });
        }
      } // Format to select2 style


      data = data.map(function (v) {
        return {
          id: v.value,
          text: v.value.charAt(0).toUpperCase() + v.value.slice(1)
        };
      }); // Init Value Input from prevalent values

      $(this.$refs.inputValue).select2({
        createSearchChoice: function createSearchChoice(term, data) {
          if ($(data).filter(function () {
            return this.text.localeCompare(term) === 0;
          }).length === 0) {
            return {
              id: term,
              text: term
            };
          }
        },
        multiple: this.isMultipleCondition,
        data: data
      }).on('change', function () {
        _this3.condition.value = $(_this3.$refs.inputValue).val();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);






function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var _this = this;

    $('.tag-search').select2({
      minimumInputLength: 2,
      ajax: {
        url: function url(term) {
          return "https://tagfinder.herokuapp.com/api/search?query=".concat(term);
        },
        dataType: 'json',
        processResults: function processResults(data) {
          return {
            results: data
          };
        }
      },
      id: function id(item) {
        return item.subject;
      },
      formatResult: function formatResult(item) {
        return "<b>".concat(item.prefLabel, "</b> : ").concat(item.scopeNote.en);
      },
      formatSelection: function formatSelection(item) {
        var query = [];
        if (item.isTag) query.push({
          key: item.prefLabel.split('=')[0],
          operator: '=',
          value: item.prefLabel.split('=')[1]
        });else query.push({
          key: item.prefLabel,
          operator: '=',
          value: ''
        });
        var combinesTags = {};

        var _iterator = _createForOfIteratorHelper(item.combines),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var combine = _step.value;
            var combineKey = combine.label.split('=')[0];
            var combineValue = combine.label.split('=')[1]; // Ignore some keys not used for filtering

            if (['name', 'website', 'wikipedia', 'opening_hours'].includes(combineKey)) continue;
            if (combinesTags[combineKey]) combinesTags[combineKey] += ",".concat(combineValue);else combinesTags[combineKey] = combineValue;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        for (var key in combinesTags) {
          var value = combinesTags[key];
          if (value == '*') query.push({
            key: key,
            operator: '',
            value: ''
          });else query.push({
            key: key,
            operator: value.includes(',') ? '~' : '=',
            value: value
          });
        }

        _this.$parent.queries.push(query);

        return null;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['condition'],
  computed: {
    isTag: function isTag() {
      if (this.condition.key && this.condition.operator == '=' && this.condition.value) return true;
      return false;
    },
    url: function url() {
      if (this.isTag) {
        return "https://wiki.openstreetmap.org/wiki/Tag:".concat(this.tag);
      } else {
        return "https://wiki.openstreetmap.org/wiki/Key:".concat(this.condition.key);
      }
    },
    tag: function tag() {
      return "".concat(this.condition.key, "=").concat(this.condition.value);
    },
    title: function title() {
      return "Lien vers la fiche Wiki de \"".concat(this.isTag ? this.tag : this.condition.key, "\"");
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=style&index=0&id=6781daea&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=style&index=0&id=a92fb356&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=template&id=cb95b4f8&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/BoundsPicker.vue?vue&type=template&id=cb95b4f8& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "bounds-picker-container" }, [
    _c("label", [_vm._v("Zone Géographique de la requete")]),
    _vm._v(" "),
    _c("div", { staticClass: "input-group" }, [
      _c("span", { staticClass: "input-group-btn" }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.queryType,
                expression: "queryType"
              }
            ],
            staticClass: "form-control",
            staticStyle: { width: "auto" },
            attrs: { "data-sonata-select2": "false" },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.queryType = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          },
          [
            _c("option", { attrs: { value: "address" } }, [
              _vm._v("Chercher par adresse")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "bounds" } }, [
              _vm._v("Dessiner un rectangle sur la carte")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.inputAddress,
            expression: "inputAddress"
          }
        ],
        ref: "inputAddress",
        staticClass: "form-control",
        attrs: {
          disabled: _vm.queryType != "address",
          placeholder: "Une ville, une région, un pays..."
        },
        domProps: { value: _vm.inputAddress },
        on: {
          keypress: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            $event.preventDefault()
            return _vm.geocodeAddress($event)
          },
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.inputAddress = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "input-group-btn" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { type: "button", disabled: _vm.queryType != "address" },
            on: { click: _vm.geocodeAddress }
          },
          [_vm._v("\n                Chercher\n            ")]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.geocodeErrorMsg,
            expression: "geocodeErrorMsg"
          }
        ],
        staticClass: "alert alert-danger"
      },
      [_vm._v(_vm._s(_vm.geocodeErrorMsg))]
    ),
    _vm._v(" "),
    _c("div", { ref: "map", staticClass: "bounds-picker-map" })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmQueryBuilder.vue?vue&type=template&id=6781daea&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "osm-query-builder" },
    [
      _c("label", [_vm._v("Liste des requêtes dans la base OpenStreetMap")]),
      _vm._v(" "),
      _c("osm-tag-search"),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-default",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              return _vm.queries.push([{ key: "", operator: "=", value: "" }])
            }
          }
        },
        [_vm._v("\n        Ou ajouter une requête manuellement\n    ")]
      ),
      _vm._v(" "),
      _vm._l(_vm.queries, function(query, queryIndex) {
        return _c(
          "div",
          { key: queryIndex, staticClass: "bs-callout" },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-default remove-query btn-icon",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.queries.splice(queryIndex, 1)
                  }
                }
              },
              [_c("i", { staticClass: "fa fa-trash" })]
            ),
            _vm._v(" "),
            _vm._l(query, function(condition, conditionIndex) {
              return _c(
                "div",
                { key: conditionIndex, staticClass: "condition-container" },
                [
                  _c("osm-condition", {
                    key: "Query" + queryIndex,
                    attrs: { condition: condition }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default btn-icon remove-condition",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return query.splice(conditionIndex, 1)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-trash remove-condition" })]
                  )
                ],
                1
              )
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-default btn-add-condition btn-sm",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return query.push({ key: "", operator: "=", value: "" })
                  }
                }
              },
              [_vm._v("Ajouter une condition")]
            )
          ],
          2
        )
      }),
      _vm._v(" "),
      _c("bounds-picker", {
        ref: "boundsPicker",
        attrs: {
          "osm-query-object": _vm.osmQueryObject,
          tileLayer: _vm.tileLayer,
          "default-bounds": _vm.defaultBounds
        }
      }),
      _vm._v(" "),
      _c(
        "label",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.overpassQuery,
              expression: "overpassQuery"
            }
          ]
        },
        [
          _vm._v(
            "Code automatiquement généré pour la requête OpenStreetMap (via OverPass)"
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "pre",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.overpassQuery,
              expression: "overpassQuery"
            }
          ]
        },
        [_vm._v(_vm._s(_vm.overpassQuery))]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmQueryBuilderCondition.vue?vue&type=template&id=04e62b80& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "condition" },
    [
      _c("osm-wiki-link", {
        ref: "wikiLink",
        attrs: { condition: _vm.condition }
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.condition.key,
            expression: "condition.key"
          }
        ],
        ref: "inputKey",
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "Chercher une clé" },
        domProps: { value: _vm.condition.key },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.condition, "key", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.condition.operator,
              expression: "condition.operator"
            }
          ],
          ref: "selectOperator",
          staticClass: "condition-operator form-control",
          attrs: {
            "data-sonata-select2": "false",
            placeholder: "Condition..."
          },
          on: {
            change: function($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function(o) {
                  return o.selected
                })
                .map(function(o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.$set(
                _vm.condition,
                "operator",
                $event.target.multiple ? $$selectedVal : $$selectedVal[0]
              )
            }
          }
        },
        [
          _c("option", { attrs: { value: "" } }, [_vm._v("Existe")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "!" } }, [_vm._v("N'existe pas")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "=" } }, [_vm._v("Est égal à")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "!=" } }, [_vm._v("Différent de")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "~" } }, [
            _vm._v("Est l'une des valeurs")
          ]),
          _vm._v(" "),
          _c("option", { attrs: { value: "!~" } }, [
            _vm._v("N'est aucune des valeurs")
          ])
        ]
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.condition.value,
            expression: "condition.value"
          }
        ],
        ref: "inputValue",
        staticClass: "form-control",
        attrs: { disabled: ["", "!"].includes(_vm.condition.operator) },
        domProps: { value: _vm.condition.value },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.condition, "value", $event.target.value)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmQueryBuilderTagSearch.vue?vue&type=template&id=357b0e72& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("input", {
        staticClass: "form-control tag-search",
        attrs: {
          type: "text",
          placeholder:
            "Recherche rapide dans OpenSteetMap en Anglais (restaurant, organic, second hand...)"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/admin/element-import/OsmqueryBuilderWikiLink.vue?vue&type=template&id=a92fb356&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _vm.condition.key
    ? _c(
        "a",
        {
          staticClass: "btn btn-default btn-icon",
          attrs: { href: _vm.url, target: "_blank", title: _vm.title }
        },
        [
          _c("i", {
            staticClass:
              "fa fa-external-link-square fas fa-external-link-square-alt"
          })
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["./assets/admin.pack.js","runtime","vendors~admin"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4ucGFjay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vY29uZmlndXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1lZGl0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Cb3VuZHNQaWNrZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Cb3VuZHNQaWNrZXIudnVlPzVhNzgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L0JvdW5kc1BpY2tlci52dWU/ZjI0NyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvQm91bmRzUGlja2VyLnZ1ZT9hYjA1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXIudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXIudnVlP2JlYzYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L09zbVF1ZXJ5QnVpbGRlci52dWU/YzQ1ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyLnZ1ZT81ZTBmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXJDb25kaXRpb24udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXJDb25kaXRpb24udnVlPzIyMTYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L09zbVF1ZXJ5QnVpbGRlckNvbmRpdGlvbi52dWU/ZDNjNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyVGFnU2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyVGFnU2VhcmNoLnZ1ZT82MGQ2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXJUYWdTZWFyY2gudnVlPzE3ZDkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L09zbXF1ZXJ5QnVpbGRlcldpa2lMaW5rLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtcXVlcnlCdWlsZGVyV2lraUxpbmsudnVlPzAyMTgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L09zbXF1ZXJ5QnVpbGRlcldpa2lMaW5rLnZ1ZT9mMGIzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWU/YjhhZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvZWxlbWVudC1pbXBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL29zbS10YWdzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9zb3VyY2UtcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvYWRtaW4uc2NzcyIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L0JvdW5kc1BpY2tlci52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXIudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyQ29uZGl0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L09zbVF1ZXJ5QnVpbGRlclRhZ1NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L0JvdW5kc1BpY2tlci52dWU/OThhYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyLnZ1ZT84ZTRiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWU/Njk0ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvQm91bmRzUGlja2VyLnZ1ZT9iODM2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXIudnVlPzhhMmMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FkbWluL2VsZW1lbnQtaW1wb3J0L09zbVF1ZXJ5QnVpbGRlckNvbmRpdGlvbi52dWU/NTY2YiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyVGFnU2VhcmNoLnZ1ZT8zOGFjIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWU/YmFmYyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0NvbGxhYm9yYXRpdmVWb3RlQWN0aXZhdGVkIiwiJCIsImNsaWNrIiwiZWFjaCIsImNoZWNrR29Hb0ZlYXR1cmVBY3RpdmF0ZWQiLCJ0aGF0Iiwic2V0VGltZW91dCIsImNsb3Nlc3QiLCJjb2xsYWJBY3RpdmUiLCJoYXNDbGFzcyIsIm9wYWNpdHkiLCJjc3MiLCJvYmplY3QiLCJmZWF0dXJlQWN0aXZlIiwiZmluZCIsImxlbmd0aCIsIlZ1ZSIsImVsIiwiZGF0YSIsIm5ld0ZpZWxkcyIsImV4aXN0aW5nUHJvcHMiLCJtYXAiLCJwcm9wIiwiaWQiLCJ0ZXh0IiwibWV0aG9kcyIsImFkZEZpZWxkIiwicHVzaCIsInNvdXJjZVR5cGUiLCJ1bmRlZmluZWQiLCJ1cmwiLCJvc21RdWVyaWVzSnNvbiIsImZvcm1OYW1lIiwiY29tcHV0ZWQiLCJvc21RdWVyeUlucHV0VmFsdWUiLCJyZXN1bHQiLCJhZGRyZXNzIiwiYm91bmRzIiwicXVlcmllcyIsInF1ZXJ5IiwiZmlsdGVyIiwiY29uZGl0aW9uIiwia2V5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbXBvbmVudHMiLCJPc21RdWVyeUJ1aWxkZXIiLCJtb3VudGVkIiwiaW1wb3J0T2JqZWN0IiwicGFyc2UiLCJhcHBlbmRUbyIsIndhdGNoIiwibmV3VmFsIiwidG9nZ2xlIiwidGFncyIsInN0cmluZ2lmaWVkVGFnc0hhc2giLCJ0YWciLCJ2YWx1ZSIsIk9zbUNvbmRpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJvc21UYWdzIiwiZGlyZWN0aXZlIiwiaW5zZXJ0ZWQiLCJiaW5kaW5nIiwiU29ydGFibGUiLCJsaXN0Iiwic291cmNlTGlzdCIsImpvaW4iLCJvblVwZGF0ZSIsImV2ZW50Iiwic3BsaWNlIiwibmV3SW5kZXgiLCJvbGRJbmRleCIsInRleHRGcm9tIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBQSxRQUFRLENBQUNDLGdCQUFULENB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3R5bGVzXG5pbXBvcnQgJy4vc2Nzcy9hZG1pbi5zY3NzJ1xuXG4vLyBKYXZhc2NyaXB0XG5pbXBvcnQgJy4vanMvYWRtaW4vY29uZmlndXJhdGlvbidcbmltcG9ydCAnLi9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9lbGVtZW50LWltcG9ydCdcbmltcG9ydCAnLi9qcy9hZG1pbi9vc20tdGFncydcbmltcG9ydCAnLi9qcy9hZG1pbi9lbGVtZW50LWVkaXQnXG5pbXBvcnQgJy4vanMvYWRtaW4vc291cmNlLXByaW9yaXR5J1xuIiwiLy8gQ09ORklHVVJBVElPTiBBRE1JTiwgZGlzYWJsZSB0aGUgd2hvbGUgZmVhdHVyZSBib3ggYWNjb3JkaW5nIHRvIGNoZWNrYm94IFwiZmVhdHVyZSBhY3RpdmVcIlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGNoZWNrQ29sbGFib3JhdGl2ZVZvdGVBY3RpdmF0ZWQoKTtcbiAgICAkKCcuY29sbGFib3JhdGl2ZS1mZWF0dXJlIC5zb25hdGEtYmEtZmllbGQuc29uYXRhLWJhLWZpZWxkLWlubGluZS1uYXR1cmFsID4gLmZvcm0tZ3JvdXA6Zmlyc3QtY2hpbGQgLmljaGVja2JveF9zcXVhcmUtYmx1ZSAuaUNoZWNrLWhlbHBlcicpLmNsaWNrKGNoZWNrQ29sbGFib3JhdGl2ZVZvdGVBY3RpdmF0ZWQpO1xuXG4gICAgJCgnLmdvZ28tZmVhdHVyZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGNoZWNrR29Hb0ZlYXR1cmVBY3RpdmF0ZWQodGhpcyk7XG4gICAgfSk7XG4gICAgJCgnLmdvZ28tZmVhdHVyZSAuc29uYXRhLWJhLWZpZWxkLnNvbmF0YS1iYS1maWVsZC1pbmxpbmUtbmF0dXJhbCA+IC5mb3JtLWdyb3VwOmZpcnN0LWNoaWxkIC5pY2hlY2tib3hfc3F1YXJlLWJsdWUgLmlDaGVjay1oZWxwZXInKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjaGVja0dvR29GZWF0dXJlQWN0aXZhdGVkKCQodGhhdCkuY2xvc2VzdCgnLmdvZ28tZmVhdHVyZScpKTsgwqB9LCAxMCk7XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gY2hlY2tDb2xsYWJvcmF0aXZlVm90ZUFjdGl2YXRlZCgpIHtcbiAgICB2YXIgY29sbGFiQWN0aXZlID0gJCgnLmNvbGxhYm9yYXRpdmUtZmVhdHVyZSAuc29uYXRhLWJhLWZpZWxkLnNvbmF0YS1iYS1maWVsZC1pbmxpbmUtbmF0dXJhbCA+IC5mb3JtLWdyb3VwOmZpcnN0LWNoaWxkIC5pY2hlY2tib3hfc3F1YXJlLWJsdWUnKS5oYXNDbGFzcygnY2hlY2tlZCcpO1xuICAgIHZhciBvcGFjaXR5ID0gY29sbGFiQWN0aXZlID8gJzEnIDogJzAuNCc7XG4gICAgJCgnLmNvbGxhYm9yYXRpdmUtbW9kZXJhdGlvbi1ib3gnKS5jc3MoJ29wYWNpdHknLCBvcGFjaXR5KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tHb0dvRmVhdHVyZUFjdGl2YXRlZChvYmplY3QpIHtcbiAgICB2YXIgZmVhdHVyZUFjdGl2ZSA9ICQob2JqZWN0KS5maW5kKCcuc29uYXRhLWJhLWZpZWxkLnNvbmF0YS1iYS1maWVsZC1pbmxpbmUtbmF0dXJhbCA+IC5mb3JtLWdyb3VwOmZpcnN0LWNoaWxkIC5pY2hlY2tib3hfc3F1YXJlLWJsdWUnKS5oYXNDbGFzcygnY2hlY2tlZCcpO1xuICAgIHZhciBvcGFjaXR5ID0gZmVhdHVyZUFjdGl2ZSA/ICcxJyA6ICcwLjUnO1xuICAgICQob2JqZWN0KS5jc3MoJ29wYWNpdHknLCBvcGFjaXR5KTtcbn0iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZS9kaXN0L3Z1ZS5lc20nXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmVsZW1lbnQtZGF0YS1maWVsZHMnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5ldyBWdWUoe1xuICAgICAgICAgICAgZWw6IFwiLmVsZW1lbnQtZGF0YS1maWVsZHNcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuZXdGaWVsZHM6IFtdLFxuICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHM6IGV4aXN0aW5nUHJvcHMubWFwKCBwcm9wID0+IHsgcmV0dXJuIHtpZDogcHJvcCwgdGV4dDogcHJvcH0gfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgYWRkRmllbGQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3RmllbGRzLnB1c2goJycpICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICB9XG59KSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQm91bmRzUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYjk1YjRmOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Cb3VuZHNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Cb3VuZHNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0JvdW5kc1BpY2tlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL21hcmlvL0J1cmVhdS9ub3V2ZWF1V2ViL3Byb2pldHBvdXJzZXJ2ZXVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2NiOTViNGY4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2NiOTViNGY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2NiOTViNGY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Cb3VuZHNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNiOTViNGY4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2NiOTViNGY4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvQm91bmRzUGlja2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQm91bmRzUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Cb3VuZHNQaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JvdW5kc1BpY2tlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQm91bmRzUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYjk1YjRmOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vT3NtUXVlcnlCdWlsZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzgxZGFlYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Pc21RdWVyeUJ1aWxkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Pc21RdWVyeUJ1aWxkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL09zbVF1ZXJ5QnVpbGRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzgxZGFlYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjY3ODFkYWVhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvbWFyaW8vQnVyZWF1L25vdXZlYXVXZWIvcHJvamV0cG91cnNlcnZldXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjc4MWRhZWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjc4MWRhZWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjc4MWRhZWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL09zbVF1ZXJ5QnVpbGRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc4MWRhZWEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjc4MWRhZWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Pc21RdWVyeUJ1aWxkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09zbVF1ZXJ5QnVpbGRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3NtUXVlcnlCdWlsZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3ODFkYWVhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Pc21RdWVyeUJ1aWxkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3ODFkYWVhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Pc21RdWVyeUJ1aWxkZXJDb25kaXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA0ZTYyYjgwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL09zbVF1ZXJ5QnVpbGRlckNvbmRpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL09zbVF1ZXJ5QnVpbGRlckNvbmRpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL21hcmlvL0J1cmVhdS9ub3V2ZWF1V2ViL3Byb2pldHBvdXJzZXJ2ZXVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA0ZTYyYjgwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA0ZTYyYjgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA0ZTYyYjgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Pc21RdWVyeUJ1aWxkZXJDb25kaXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA0ZTYyYjgwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA0ZTYyYjgwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvYWRtaW4vZWxlbWVudC1pbXBvcnQvT3NtUXVlcnlCdWlsZGVyQ29uZGl0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3NtUXVlcnlCdWlsZGVyQ29uZGl0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Pc21RdWVyeUJ1aWxkZXJDb25kaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09zbVF1ZXJ5QnVpbGRlckNvbmRpdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDRlNjJiODAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL09zbVF1ZXJ5QnVpbGRlclRhZ1NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzU3YjBlNzImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vT3NtUXVlcnlCdWlsZGVyVGFnU2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3NtUXVlcnlCdWlsZGVyVGFnU2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvbWFyaW8vQnVyZWF1L25vdXZlYXVXZWIvcHJvamV0cG91cnNlcnZldXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzU3YjBlNzInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzU3YjBlNzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzU3YjBlNzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL09zbVF1ZXJ5QnVpbGRlclRhZ1NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzU3YjBlNzImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzU3YjBlNzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXJUYWdTZWFyY2gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Pc21RdWVyeUJ1aWxkZXJUYWdTZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09zbVF1ZXJ5QnVpbGRlclRhZ1NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3NtUXVlcnlCdWlsZGVyVGFnU2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTdiMGU3MiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vT3NtcXVlcnlCdWlsZGVyV2lraUxpbmsudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE5MmZiMzU2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL09zbXF1ZXJ5QnVpbGRlcldpa2lMaW5rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3NtcXVlcnlCdWlsZGVyV2lraUxpbmsudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL09zbXF1ZXJ5QnVpbGRlcldpa2lMaW5rLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE5MmZiMzU2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJhOTJmYjM1NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL21hcmlvL0J1cmVhdS9ub3V2ZWF1V2ViL3Byb2pldHBvdXJzZXJ2ZXVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2E5MmZiMzU2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2E5MmZiMzU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2E5MmZiMzU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTkyZmIzNTYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTkyZmIzNTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9hZG1pbi9lbGVtZW50LWltcG9ydC9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09zbXF1ZXJ5QnVpbGRlcldpa2lMaW5rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Pc21xdWVyeUJ1aWxkZXJXaWtpTGluay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3NtcXVlcnlCdWlsZGVyV2lraUxpbmsudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTkyZmIzNTYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3NtcXVlcnlCdWlsZGVyV2lraUxpbmsudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE5MmZiMzU2JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IE9zbVF1ZXJ5QnVpbGRlciBmcm9tICcuL09zbVF1ZXJ5QnVpbGRlci52dWUnXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZS9kaXN0L3Z1ZS5lc20nXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnI2VsZW1lbnQtaW1wb3J0JykubGVuZ3RoID4gMCkge1xuICAgICAgICBuZXcgVnVlKHtcbiAgICAgICAgICAgIGVsOiBcIiNlbGVtZW50LWltcG9ydFwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB1cmw6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBvc21RdWVyaWVzSnNvbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGZvcm1OYW1lOiBcIlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAgICAgb3NtUXVlcnlJbnB1dFZhbHVlKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3NtUXVlcmllc0pzb24pIHJldHVybiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWRkcmVzcyA9IHRoaXMub3NtUXVlcmllc0pzb24uYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYm91bmRzID0gdGhpcy5vc21RdWVyaWVzSnNvbi5ib3VuZHNcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnF1ZXJpZXMgPSBbXVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHF1ZXJ5IG9mIHRoaXMub3NtUXVlcmllc0pzb24ucXVlcmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnF1ZXJpZXMucHVzaChxdWVyeS5maWx0ZXIoY29uZGl0aW9uID0+IGNvbmRpdGlvbi5rZXkpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHsgT3NtUXVlcnlCdWlsZGVyIH0sXG4gICAgICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGltcG9ydE9iamVjdCkgdGhpc1trZXldID0gaW1wb3J0T2JqZWN0W2tleV1cbiAgICAgICAgICAgICAgICB0aGlzLm9zbVF1ZXJpZXNKc29uID0gSlNPTi5wYXJzZSh0aGlzLm9zbVF1ZXJpZXNKc29uKVxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlVHlwZSA9IHNvdXJjZVR5cGU7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtTmFtZSA9IGZvcm1OYW1lXG4gICAgICAgICAgICAgICAgJChgI3NvbmF0YS1iYS1maWVsZC1jb250YWluZXItJHtmb3JtTmFtZX1fZmlsZWApLmFwcGVuZFRvKCcuZmlsZS1jb250YWluZXInKVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgICAgIHNvdXJjZVR5cGUobmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5pbnB1dC1pcy1zeW5jaGVkJykuY2xvc2VzdCgnLmNoZWNrYm94JykudG9nZ2xlKG5ld1ZhbCA9PSAnb3NtJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufSlcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlL2Rpc3QvdnVlLmVzbSdcbmltcG9ydCBPc21Db25kaXRpb24gZnJvbSAnLi9lbGVtZW50LWltcG9ydC9Pc21RdWVyeUJ1aWxkZXJDb25kaXRpb24udnVlJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoJy5vc20tdGFncy1maWVsZCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbmV3IFZ1ZSh7XG4gICAgICAgICAgICBlbDogXCIub3NtLXRhZ3MtZmllbGRcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBmb3JtTmFtZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHRhZ3M6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgICAgICBzdHJpbmdpZmllZFRhZ3NIYXNoKCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0ge31cbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCB0YWcgb2YgdGhpcy50YWdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnLmtleSAmJiB0YWcudmFsdWUpIHJlc3VsdFt0YWcua2V5XSA9IHRhZy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHsgT3NtQ29uZGl0aW9uIH0sXG4gICAgICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybU5hbWUgPSBmb3JtTmFtZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGltcG9ydE9iamVjdCwgaW1wb3J0T2JqZWN0Lm9zbVRhZ3MpXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gaW1wb3J0T2JqZWN0Lm9zbVRhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWdzLnB1c2goe2tleToga2V5LCB2YWx1ZTogaW1wb3J0T2JqZWN0Lm9zbVRhZ3Nba2V5XX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0pXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZS9kaXN0L3Z1ZS5lc20nXG5pbXBvcnQgU29ydGFibGUgZnJvbSAnc29ydGFibGVqcydcblxuVnVlLmRpcmVjdGl2ZSgnc29ydGFibGUnLCB7XG4gIGluc2VydGVkOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcpIHtcbiAgICBuZXcgU29ydGFibGUoZWwsIGJpbmRpbmcudmFsdWUgfHwge30pXG4gIH1cbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLnNvdXJjZS1wcmlvcml0eS1jb250YWluZXInKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5ldyBWdWUoe1xuICAgICAgICAgICAgZWw6IFwiLnNvdXJjZS1wcmlvcml0eS1jb250YWluZXJcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBsaXN0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICAgICB0aGlzLmxpc3QgPSBzb3VyY2VMaXN0XG4gICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5saXN0LmpvaW4oJywnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBvblVwZGF0ZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LnNwbGljZShldmVudC5uZXdJbmRleCwgMCwgdGhpcy5saXN0LnNwbGljZShldmVudC5vbGRJbmRleCwgMSlbMF0pXG4gICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5saXN0LmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRleHRGcm9tKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPyBpdGVtIDogXCJDZXR0ZSBDYXJ0ZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59KVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJib3VuZHMtcGlja2VyLWNvbnRhaW5lclwiPlxuICAgICAgICA8bGFiZWw+Wm9uZSBHw6lvZ3JhcGhpcXVlIGRlIGxhIHJlcXVldGU8L2xhYmVsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJxdWVyeVR5cGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGRhdGEtc29uYXRhLXNlbGVjdDI9XCJmYWxzZVwiIHN0eWxlPVwid2lkdGg6YXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWRkcmVzc1wiPkNoZXJjaGVyIHBhciBhZHJlc3NlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJib3VuZHNcIj5EZXNzaW5lciB1biByZWN0YW5nbGUgc3VyIGxhIGNhcnRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXQgQGtleXByZXNzLmVudGVyLnByZXZlbnQ9XCJnZW9jb2RlQWRkcmVzc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImlucHV0QWRkcmVzc1wiIDpkaXNhYmxlZD1cInF1ZXJ5VHlwZSAhPSAnYWRkcmVzcydcIiBcbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVuZSB2aWxsZSwgdW5lIHLDqWdpb24sIHVuIHBheXMuLi5cIiByZWY9XCJpbnB1dEFkZHJlc3NcIi8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cImdlb2NvZGVBZGRyZXNzXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJxdWVyeVR5cGUgIT0gJ2FkZHJlc3MnXCI+XG4gICAgICAgICAgICAgICAgICAgIENoZXJjaGVyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgdi1zaG93PVwiZ2VvY29kZUVycm9yTXNnXCI+e3sgZ2VvY29kZUVycm9yTXNnIH19PC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdW5kcy1waWNrZXItbWFwXCIgcmVmPVwibWFwXCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0ICogYXMgTCBmcm9tICdsZWFmbGV0J1xuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnXG5pbXBvcnQgJ2xlYWZsZXQtc2hhZGVzJ1xuaW1wb3J0ICdsZWFmbGV0LXNoYWRlcy9zcmMvY3NzL2xlYWZsZXQtc2hhZGVzLmNzcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbICdvc21RdWVyeU9iamVjdCcsICd0aWxlTGF5ZXInLCAnZGVmYXVsdEJvdW5kcycgXSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcXVlcnlUeXBlOiBudWxsLCAvLyBlaXRoZXIgJ2FkZHJlc3MnIG9yICdib3VuZHMnXG4gICAgICAgICAgICBpbnB1dEFkZHJlc3M6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdlb2NvZGVkQWRkcmVzczoge30sXG4gICAgICAgICAgICBnZW9jb2RlRXJyb3JNc2c6ICcnLFxuICAgICAgICAgICAgbWFwQm91bmRzOiBudWxsLFxuICAgICAgICAgICAgZHJhd25Cb3VuZHM6IG51bGwsIC8vIGRyYXduIGJvdW5kcyBieSB1c2VyIHdpdGggbGVhZmxldC1zaGFkZXNcbiAgICAgICAgICAgIG1hcDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY3VycmVudExheWVyczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWFwU2hhZGVzOiB1bmRlZmluZWQsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGJvdW5kcygpIHtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmFkZHJlc3NQcmVzZW50KSByZXR1cm4gbnVsbFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlUeXBlID09ICdib3VuZHMnICYmIHRoaXMuZHJhd25Cb3VuZHMgPyB0aGlzLmRyYXduQm91bmRzIDogdGhpcy5tYXBCb3VuZHNcbiAgICAgICAgfSxcbiAgICAgICAgYWRkcmVzcygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXJ5VHlwZSA9PSAnYWRkcmVzcycgJiYgdGhpcy5nZW9jb2RlZEFkZHJlc3MgJiYgdGhpcy5nZW9jb2RlZEFkZHJlc3Mub3NtX2lkKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0QWRkcmVzc1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGJ1aWxkcyB0aGUgZ2VvZ3JhcGhpY2FsIHBhcnQgb2YgdGhlIG92ZXJwYXNzIHF1ZXJ5XG4gICAgICAgIG92ZXJwYXNzUXVlcnkoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZWFSZWYgPSAxICogdGhpcy5nZW9jb2RlZEFkZHJlc3Mub3NtX2lkO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdlb2NvZGVkQWRkcmVzcy5vc21fdHlwZSA9PSBcIndheVwiKSBhcmVhUmVmICs9IDI0MDAwMDAwMDA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2VvY29kZWRBZGRyZXNzLm9zbV90eXBlID09IFwicmVsYXRpb25cIikgYXJlYVJlZiArPSAzNjAwMDAwMDAwO1xuICAgICAgICAgICAgICAgIHJldHVybiBgKGFyZWE6JHthcmVhUmVmfSlgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBiID0gdGhpcy5ib3VuZHNcbiAgICAgICAgICAgICAgICByZXR1cm4gYCgke2IuZ2V0U291dGgoKX0sJHtiLmdldFdlc3QoKX0sJHtiLmdldE5vcnRoKCl9LCR7Yi5nZXRFYXN0KCl9KWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgLy8gSW5pdCBtYXBcbiAgICAgICAgdGhpcy5tYXAgPSBMLm1hcCh0aGlzLiRyZWZzLm1hcCwge2VkaXRhYmxlOiB0cnVlfSk7XG4gICAgICAgIEwudGlsZUxheWVyKHRoaXMudGlsZUxheWVyKS5hZGRUbyh0aGlzLm1hcCk7ICAgICAgICAgXG4gICAgICAgIHRoaXMubWFwLm9uKCdtb3ZlZW5kJywgKCkgPT4gdGhpcy5tYXBCb3VuZHMgPSB0aGlzLm1hcC5nZXRCb3VuZHMoKSlcbiAgICAgICAgdGhpcy5jdXJyZW50TGF5ZXJzID0gbmV3IEwubGF5ZXJHcm91cCgpXG4gICAgICAgIHRoaXMuY3VycmVudExheWVycy5hZGRUbyh0aGlzLm1hcClcblxuICAgICAgICAvLyBJbml0aWFsaXNlIHN0YXRlIGZyb20gc2F2ZWQgb3NtUXVlcnlPYmplY3RcbiAgICAgICAgbGV0IGluaXRpYWxCb3VuZHMgPSB0aGlzLmRlZmF1bHRCb3VuZHNcbiAgICAgICAgaWYgKHRoaXMub3NtUXVlcnlPYmplY3QgJiYgdGhpcy5vc21RdWVyeU9iamVjdC5hZGRyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0QWRkcmVzcyA9IHRoaXMub3NtUXVlcnlPYmplY3QuYWRkcmVzc1xuICAgICAgICAgICAgdGhpcy5nZW9jb2RlQWRkcmVzcygpICAgXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5VHlwZSA9ICdhZGRyZXNzJyAgICAgICAgIFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3NtUXVlcnlPYmplY3QgJiYgdGhpcy5vc21RdWVyeU9iamVjdC5ib3VuZHMpIHtcbiAgICAgICAgICAgIGluaXRpYWxCb3VuZHMgPSBuZXcgTC5sYXRMbmdCb3VuZHModGhpcy5vc21RdWVyeU9iamVjdC5ib3VuZHMpXG4gICAgICAgICAgICB0aGlzLmRyYXduQm91bmRzID0gaW5pdGlhbEJvdW5kc1xuICAgICAgICAgICAgdGhpcy5xdWVyeVR5cGUgPSAnYm91bmRzJyBcbiAgICAgICAgfSAgIFxuXG4gICAgICAgIC8vIEluaXQgbWFwIHBvc2l0aW9uXG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhpbml0aWFsQm91bmRzKTsgICAgICAgIFxuICAgICAgICB0aGlzLm1hcEJvdW5kcyA9IHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICAvLyBXaGVuIHN3aXRjaGluZyBxdWVyeSB0eXBlIHdlIG5lZWQgdG8gdHVybiBvbi9vZmYgbGVhZmxldCBzaGFkZXMgcGx1Z2luXG4gICAgICAgIHF1ZXJ5VHlwZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hcFNoYWRlcykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwU2hhZGVzLm9uUmVtb3ZlKHRoaXMubWFwKSAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21rb25nMDIxNi9sZWFmbGV0LXNoYWRlcy9pc3N1ZXMvM1xuICAgICAgICAgICAgICAgIHRoaXMubWFwU2hhZGVzID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGF5ZXJzLmNsZWFyTGF5ZXJzKClcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXJ5VHlwZSA9PSAnYm91bmRzJykgeyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRyYXduQm91bmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBMLnJlY3RhbmdsZSh0aGlzLmRyYXduQm91bmRzKTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMYXllcnMuYWRkTGF5ZXIocmVjdClcbiAgICAgICAgICAgICAgICAgICAgcmVjdC5lbmFibGVFZGl0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGF5ZXJzLmFkZExheWVyKHRoaXMubWFwLmVkaXRUb29scy5zdGFydFJlY3RhbmdsZSgpKTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEluaXQgc2hhZGVzXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBTaGFkZXMgPSBuZXcgTC5MZWFmbGV0U2hhZGVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBTaGFkZXMuYWRkVG8odGhpcy5tYXApOyAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBTaGFkZXMub24oJ3NoYWRlczpib3VuZHMtY2hhbmdlZCcsIChldmVudCkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3bkJvdW5kcyA9IGV2ZW50LmJvdW5kcyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2VvY29kZUFkZHJlc3MoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5wdXRBZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW9jb2RlRXJyb3JNc2cgPSBcIlZldWlsbGV6IGVudHJlciB1bmUgYWRyZXNzZVwiXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdXJsID0gYGh0dHBzOi8vbm9taW5hdGltLm9wZW5zdHJlZXRtYXAub3JnL3NlYXJjaC5waHA/cT0ke3RoaXMuaW5wdXRBZGRyZXNzfSZwb2x5Z29uX2dlb2pzb249MSZmb3JtYXQ9anNvbnYyYFxuICAgICAgICAgICAgJC5nZXRKU09OKHVybCwgcmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRzIHx8IHJlc3VsdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW9jb2RlRXJyb3JNc2cgPSBgQXVjdW5lIHLDqXN1bHRhdCB0cm91dsOpIHBvdXIgJHt0aGlzLmlucHV0QWRkcmVzc31gXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdlb2NvZGVFcnJvck1zZyA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGF5ZXJzLmNsZWFyTGF5ZXJzKClcbiAgICAgICAgICAgICAgICB0aGlzLmdlb2NvZGVkQWRkcmVzcyA9IHJlc3VsdHNbMF1cbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSBMLmdlb0pTT04odGhpcy5nZW9jb2RlZEFkZHJlc3MuZ2VvanNvbiwge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZTogZmVhdHVyZSA9PiB7Y29sb3I6ICdibHVlJ31cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExheWVycy5hZGRMYXllcihsYXllcilcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMobGF5ZXIuZ2V0Qm91bmRzKCkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAgIC5ib3VuZHMtcGlja2VyLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgICAgLmFsZXJ0LWRhbmdlciB7XG4gICAgICAgICAgICBtYXJnaW46IDEuNXJlbSAwO1xuICAgICAgICB9XG4gICAgICAgIC5ib3VuZHMtcGlja2VyLW1hcCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxLjVyZW0gMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgfVxuICAgICAgICAubGVhZmxldC1wYW5lIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICB9ICAgIFxuICAgIGEubGVhZmxldC1jb250cm9sLXpvb20taW4ge1xuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMzZDNkM2Q7XG4gICAgfVxuICAgIGEubGVhZmxldC1jb250cm9sLXpvb20tb3V0IHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4ISBpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiAjM2QzZDNkO1xuICAgICAgICB0ZXh0LWluZGVudDogMDtcbiAgICB9ICAgIFxuICAgIC5sZWFmbGV0LXRvcCwgLmxlYWZsZXQtYm90dG9tIHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgICAgPGRpdiBjbGFzcz1cIm9zbS1xdWVyeS1idWlsZGVyXCI+XG4gICAgICAgIDxsYWJlbD5MaXN0ZSBkZXMgcmVxdcOqdGVzIGRhbnMgbGEgYmFzZSBPcGVuU3RyZWV0TWFwPC9sYWJlbD5cbiAgICAgICAgXG4gICAgICAgIDxvc20tdGFnLXNlYXJjaD48L29zbS10YWctc2VhcmNoPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwicXVlcmllcy5wdXNoKFt7a2V5OiAnJywgb3BlcmF0b3I6ICc9JywgdmFsdWU6ICcnfV0pXCI+XG4gICAgICAgICAgICBPdSBham91dGVyIHVuZSByZXF1w6p0ZSBtYW51ZWxsZW1lbnRcbiAgICAgICAgPC9idXR0b24+IFxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJzLWNhbGxvdXRcIiB2LWZvcj1cIihxdWVyeSwgcXVlcnlJbmRleCkgaW4gcXVlcmllc1wiIDprZXk9XCJxdWVyeUluZGV4XCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJxdWVyaWVzLnNwbGljZShxdWVyeUluZGV4LDEpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgcmVtb3ZlLXF1ZXJ5IGJ0bi1pY29uXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihjb25kaXRpb24sIGNvbmRpdGlvbkluZGV4KSBpbiBxdWVyeVwiIGNsYXNzPVwiY29uZGl0aW9uLWNvbnRhaW5lclwiIDprZXk9XCJjb25kaXRpb25JbmRleFwiPlxuICAgICAgICAgICAgICAgIDxvc20tY29uZGl0aW9uIDpjb25kaXRpb249XCJjb25kaXRpb25cIiA6a2V5PVwiJ1F1ZXJ5JyArIHF1ZXJ5SW5kZXhcIj48L29zbS1jb25kaXRpb24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwicXVlcnkuc3BsaWNlKGNvbmRpdGlvbkluZGV4LDEpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWljb24gcmVtb3ZlLWNvbmRpdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoIHJlbW92ZS1jb25kaXRpb25cIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1hZGQtY29uZGl0aW9uIGJ0bi1zbVwiIFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJxdWVyeS5wdXNoKHtrZXk6ICcnLCBvcGVyYXRvcjogJz0nLCB2YWx1ZTogJyd9KVwiPkFqb3V0ZXIgdW5lIGNvbmRpdGlvbjwvYnV0dG9uPiAgICAgICAgXG4gICAgICAgIDwvZGl2PiAgICAgICAgICBcblxuICAgICAgICA8Ym91bmRzLXBpY2tlciByZWY9XCJib3VuZHNQaWNrZXJcIiA6b3NtLXF1ZXJ5LW9iamVjdD1cIm9zbVF1ZXJ5T2JqZWN0XCIgOnRpbGVMYXllcj1cInRpbGVMYXllclwiIDpkZWZhdWx0LWJvdW5kcz1cImRlZmF1bHRCb3VuZHNcIj48L2JvdW5kcy1waWNrZXI+XG5cbiAgICAgICAgPGxhYmVsIHYtc2hvdz1cIm92ZXJwYXNzUXVlcnlcIj5Db2RlIGF1dG9tYXRpcXVlbWVudCBnw6luw6lyw6kgcG91ciBsYSByZXF1w6p0ZSBPcGVuU3RyZWV0TWFwICh2aWEgT3ZlclBhc3MpPC9sYWJlbD5cbiAgICAgICAgPHByZSB2LXNob3c9XCJvdmVycGFzc1F1ZXJ5XCI+e3sgb3ZlcnBhc3NRdWVyeSB9fTwvcHJlPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBPc21Db25kaXRpb24gZnJvbSBcIi4vT3NtUXVlcnlCdWlsZGVyQ29uZGl0aW9uXCJcbmltcG9ydCBPc21UYWdTZWFyY2ggZnJvbSBcIi4vT3NtUXVlcnlCdWlsZGVyVGFnU2VhcmNoXCJcbmltcG9ydCBCb3VuZHNQaWNrZXIgZnJvbSBcIi4vQm91bmRzUGlja2VyXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbICdvc21RdWVyeU9iamVjdCcsICd0aWxlTGF5ZXInLCAnZGVmYXVsdEJvdW5kcycgXSxcbiAgICBjb21wb25lbnRzOiB7IE9zbUNvbmRpdGlvbiwgT3NtVGFnU2VhcmNoLCBCb3VuZHNQaWNrZXIgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcXVlcmllczogW11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgLy8gVHJhbnNmb3JtIHF1ZXJpZXMgYXJyYXkgaW50byBhbiBPdmVycGFzcyBxdWVyeVxuICAgICAgICBvdmVycGFzc1F1ZXJ5KCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnXG4gICAgICAgICAgICBmb3IobGV0IHF1ZXJ5IG9mIHRoaXMucXVlcmllcykge1xuICAgICAgICAgICAgICAgIGxldCBxdWVyeVN0cmluZyA9ICcnXG4gICAgICAgICAgICAgICAgZm9yKGxldCBjb25kaXRpb24gb2YgcXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5vcGVyYXRvciA9PSBcIlwiIHx8IGNvbmRpdGlvbi5vcGVyYXRvciA9PSBcIiFcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYFske2NvbmRpdGlvbi5vcGVyYXRvcn1cIiR7Y29uZGl0aW9uLmtleX1cIl1gXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBjb25kaXRpb24udmFsdWUucmVwbGFjZSgvLC9nLCAnfCcpIC8vIHRyYW5zZm9ybSBtdWx0aSBpbnB1dCBpbnRvIHJlZyBleHByXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVN0cmluZyArPSBgW1wiJHtjb25kaXRpb24ua2V5fVwiJHtjb25kaXRpb24ub3BlcmF0b3J9XCIke3ZhbHVlfVwiXWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBxdWVyeVN0cmluZyArPSB0aGlzLiRyZWZzLmJvdW5kc1BpY2tlci5vdmVycGFzc1F1ZXJ5XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5ICE9ICcnKSByZXN1bHQgKz0gYG5vZGUke3F1ZXJ5U3RyaW5nfTt3YXkke3F1ZXJ5U3RyaW5nfTtyZWxhdGlvbiR7cXVlcnlTdHJpbmd9O2AgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfSxcbiAgICAgICAgb3ZlcnBhc3NBcGlVcmwoKSB7XG4gICAgICAgICAgICAvLyBvdXQgbWV0YSBwcm92aWRlIGV4dHJhIGRhdGEsIG91dCBjZW50ZXIgcHJvdmlkZSBjZW50ZXIgb2Ygd2F5IG9yIHJlbGF0aW9uXG4gICAgICAgICAgICByZXR1cm4gYGh0dHBzOi8vb3ZlcnBhc3MtYXBpLmRlL2FwaS9pbnRlcnByZXRlcj9kYXRhPVtvdXQ6anNvbl1bdGltZW91dDoxMDAwXTsoJHt0aGlzLm92ZXJwYXNzUXVlcnl9KTtvdXQlMjBtZXRhJTIwY2VudGVyO2BcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgb3ZlcnBhc3NBcGlVcmwodXJsKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdvc20tdXJsLWNoYW5nZWQnLCB1cmwpXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6b3NtUXVlcnlPYmplY3QnLCB7XG4gICAgICAgICAgICAgICAgcXVlcmllczogdGhpcy5xdWVyaWVzLCBcbiAgICAgICAgICAgICAgICBib3VuZHM6IFt0aGlzLiRyZWZzLmJvdW5kc1BpY2tlci5ib3VuZHMuZ2V0U291dGhXZXN0KCksIHRoaXMuJHJlZnMuYm91bmRzUGlja2VyLmJvdW5kcy5nZXROb3J0aEVhc3QoKV0sIFxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuJHJlZnMuYm91bmRzUGlja2VyLmFkZHJlc3NcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLm9zbVF1ZXJ5T2JqZWN0ICYmIHRoaXMub3NtUXVlcnlPYmplY3QucXVlcmllcylcbiAgICAgICAgICAgIHRoaXMucXVlcmllcyA9IHRoaXMub3NtUXVlcnlPYmplY3QucXVlcmllc1xuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4gICAgLmNvbmRpdGlvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuYnRuLWljb24geyBwYWRkaW5nOiA0cHggMTBweDt9XG4gICAgfVxuICAgIC5jb25kaXRpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuYnRuLmJ0bi1pY29uIGkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5yZW1vdmUtcXVlcnkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgIGxlZnQ6IC0xMHB4O1xuICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgIH1cbiAgICAuYnRuLWFkZC1jb25kaXRpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb25kaXRpb25cIj5cbiAgICAgICAgPG9zbS13aWtpLWxpbmsgOmNvbmRpdGlvbj1cImNvbmRpdGlvblwiIHJlZj1cIndpa2lMaW5rXCI+PC9vc20td2lraS1saW5rPlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVmPVwiaW5wdXRLZXlcIiB2LW1vZGVsPVwiY29uZGl0aW9uLmtleVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hlcmNoZXIgdW5lIGNsw6lcIi8+XG4gICAgICAgIFxuICAgICAgICA8c2VsZWN0IGRhdGEtc29uYXRhLXNlbGVjdDI9XCJmYWxzZVwiIGNsYXNzPVwiY29uZGl0aW9uLW9wZXJhdG9yIGZvcm0tY29udHJvbFwiIHJlZj1cInNlbGVjdE9wZXJhdG9yXCIgXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImNvbmRpdGlvbi5vcGVyYXRvclwiIHBsYWNlaG9sZGVyPVwiQ29uZGl0aW9uLi4uXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+RXhpc3RlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiIVwiPk4nZXhpc3RlIHBhczwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIj1cIj5Fc3Qgw6lnYWwgw6A8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIhPVwiPkRpZmbDqXJlbnQgZGU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ+XCI+RXN0IGwndW5lIGRlcyB2YWxldXJzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiIX5cIj5OJ2VzdCBhdWN1bmUgZGVzIHZhbGV1cnM8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImNvbmRpdGlvbi52YWx1ZVwiIHJlZj1cImlucHV0VmFsdWVcIlxuICAgICAgICAgICAgOmRpc2FibGVkPVwiWycnLCAnISddLmluY2x1ZGVzKGNvbmRpdGlvbi5vcGVyYXRvcilcIiAvPiAgICAgICAgICAgIFxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBPc21XaWtpTGluayBmcm9tIFwiLi9Pc21xdWVyeUJ1aWxkZXJXaWtpTGlua1wiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydjb25kaXRpb24nXSxcbiAgICBjb21wb25lbnRzOiB7IE9zbVdpa2lMaW5rIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZXZhbGVudFZhbHVlczogW11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgb3BlcmF0b3IoKSB7IHJldHVybiB0aGlzLmNvbmRpdGlvbi5vcGVyYXRvciB9LFxuICAgICAgICBpc011bHRpcGxlQ29uZGl0aW9uKCkgeyByZXR1cm4gdGhpcy5vcGVyYXRvciAmJiB0aGlzLm9wZXJhdG9yLmluY2x1ZGVzKCd+Jyl9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBpZiAodGhpcy5jb25kaXRpb24ua2V5KSB7XG4gICAgICAgICAgICAvLyBnZXQgcHJldmFsZW50VmFsdWVzIHVzaW5nIGZpcnN0IHJlc3VsdCwgaS5lLiBwZXJmZWN0IG1hdGNoXG4gICAgICAgICAgICAkLmdldEpTT04odGhpcy5rZXlJbmZvVXJsKHRoaXMuY29uZGl0aW9uLmtleSksIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2YWxlbnRWYWx1ZXMgPSByZXNwb25zZS5kYXRhWzBdLnByZXZhbGVudF92YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0SW5wdXRWYWx1ZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFNlYXJjaEtleUlucHV0KClcbiAgICAgICAgfSAgICAgICAgXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBvcGVyYXRvcihuZXdWYWwsIG9sZFZhbCkge1xuICAgICAgICAgICAgbGV0IG5ld1ZhbElzQXJyYXkgPSBuZXdWYWwgJiYgbmV3VmFsLmluY2x1ZGVzKCd+JylcbiAgICAgICAgICAgIGxldCBvbGRWYWxJc0FycmF5ID0gb2xkVmFsICYmIG9sZFZhbC5pbmNsdWRlcygnficpXG4gICAgICAgICAgICBpZiAobmV3VmFsSXNBcnJheSAhPSBvbGRWYWxJc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWxJc0FycmF5ICYmIHRoaXMuY29uZGl0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybSBhcnJheSB2YWx1ZSB0byBzaW5nbGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25kaXRpb24udmFsdWUgPSB0aGlzLmNvbmRpdGlvbi52YWx1ZS5zcGxpdCgnLCcpWzBdXG4gICAgICAgICAgICAgICAgICAgICQodGhpcy4kcmVmcy5pbnB1dFZhbHVlKS52YWwodGhpcy5jb25kaXRpb24udmFsdWUpLnRyaWdnZXIoJ2NoYW5nZScpIC8vIG5lZWRlZCBmb3Igc2VsZWN0MiB0byBiZSB1cGRhdGVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdElucHV0VmFsdWUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGtleUluZm9Vcmwoa2V5KSB7IFxuICAgICAgICAgICAgcmV0dXJuIGBodHRwczovL3RhZ2luZm8ub3BlbnN0cmVldG1hcC5vcmcvYXBpLzQva2V5cy9hbGw/cXVlcnk9JHtrZXl9JmluY2x1ZGU9cHJldmFsZW50X3ZhbHVlcyZzb3J0bmFtZT1jb3VudF9hbGwmc29ydG9yZGVyPWRlc2MmcGFnZT0xJnJwPTIwJnF0eXBlPWtleSZmb3JtYXQ9anNvbl9wcmV0dHlgXG4gICAgICAgIH0sXG4gICAgICAgIGluaXRTZWFyY2hLZXlJbnB1dCgpIHtcbiAgICAgICAgICAgICQodGhpcy4kcmVmcy5pbnB1dEtleSkuc2VsZWN0Mih7XG4gICAgICAgICAgICAgICAgbWluaW11bUlucHV0TGVuZ3RoOiAyLFxuICAgICAgICAgICAgICAgIGFqYXg6IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAodGVybSkgPT4gdGhpcy5rZXlJbmZvVXJsKHRlcm0pLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLCAgIFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiB7IHJlc3VsdHM6IHJlc3BvbnNlLmRhdGEgfTsgfSBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlkOiAoaXRlbSkgPT4gaXRlbS5rZXksIFxuICAgICAgICAgICAgICAgIGZvcm1hdFJlc3VsdDogKGl0ZW0pID0+IGl0ZW0ua2V5LFxuICAgICAgICAgICAgICAgIGZvcm1hdFNlbGVjdGlvbjogKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub25LZXlTZWxlY3RlZEZyb21TZWFyY2hSZXN1bHRzKGl0ZW0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgb25LZXlTZWxlY3RlZEZyb21TZWFyY2hSZXN1bHRzKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMucHJldmFsZW50VmFsdWVzID0gaXRlbS5wcmV2YWxlbnRfdmFsdWVzICAgXG4gICAgICAgICAgICB0aGlzLmluaXRJbnB1dFZhbHVlKCkgICAgIFxuICAgICAgICAgICAgdGhpcy5jb25kaXRpb24ua2V5ID0gaXRlbS5rZXkgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmtleVxuICAgICAgICB9LFxuICAgICAgICBpbml0SW5wdXRWYWx1ZSgpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5wcmV2YWxlbnRWYWx1ZXNcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVDb25kaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgdGhpcy5jb25kaXRpb24udmFsdWUuc3BsaXQoJywnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudW5zaGlmdCh7dmFsdWU6IHZhbHVlfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnVuc2hpZnQoe3ZhbHVlOiB0aGlzLmNvbmRpdGlvbi52YWx1ZX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRm9ybWF0IHRvIHNlbGVjdDIgc3R5bGVcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLm1hcCgodikgPT4geyByZXR1cm4ge2lkOiB2LnZhbHVlLCB0ZXh0OiB2LnZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdi52YWx1ZS5zbGljZSgxKX0gfSlcbiAgICAgICAgICAgIC8vIEluaXQgVmFsdWUgSW5wdXQgZnJvbSBwcmV2YWxlbnQgdmFsdWVzXG4gICAgICAgICAgICAkKHRoaXMuJHJlZnMuaW5wdXRWYWx1ZSkuc2VsZWN0Mih7XG4gICAgICAgICAgICAgICAgY3JlYXRlU2VhcmNoQ2hvaWNlOmZ1bmN0aW9uKHRlcm0sIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dC5sb2NhbGVDb21wYXJlKHRlcm0pPT09MDtcbiAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoPT09MClcbiAgICAgICAgICAgICAgICAgICAge3JldHVybiB7aWQ6dGVybSwgdGV4dDp0ZXJtfTt9XG4gICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgbXVsdGlwbGU6IHRoaXMuaXNNdWx0aXBsZUNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICB9KS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uLnZhbHVlID0gJCh0aGlzLiRyZWZzLmlucHV0VmFsdWUpLnZhbCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxwPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCB0YWctc2VhcmNoXCIgXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZSByYXBpZGUgZGFucyBPcGVuU3RlZXRNYXAgZW4gQW5nbGFpcyAocmVzdGF1cmFudCwgb3JnYW5pYywgc2Vjb25kIGhhbmQuLi4pXCIvPlxuICAgIDwvcD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgJCgnLnRhZy1zZWFyY2gnKS5zZWxlY3QyKHtcbiAgICAgICAgICAgIG1pbmltdW1JbnB1dExlbmd0aDogMixcbiAgICAgICAgICAgIGFqYXg6IHtcbiAgICAgICAgICAgICAgICB1cmw6ICh0ZXJtKSA9PiBgaHR0cHM6Ly90YWdmaW5kZXIuaGVyb2t1YXBwLmNvbS9hcGkvc2VhcmNoP3F1ZXJ5PSR7dGVybX1gLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsICAgICBcbiAgICAgICAgICAgICAgICBwcm9jZXNzUmVzdWx0czogZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIHsgcmVzdWx0czogZGF0YSB9OyB9IFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlkOiAoaXRlbSkgPT4gaXRlbS5zdWJqZWN0LCBcbiAgICAgICAgICAgIGZvcm1hdFJlc3VsdDogKGl0ZW0pID0+IGA8Yj4ke2l0ZW0ucHJlZkxhYmVsfTwvYj4gOiAke2l0ZW0uc2NvcGVOb3RlLmVufWAsXG4gICAgICAgICAgICBmb3JtYXRTZWxlY3Rpb246IChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHF1ZXJ5ID0gW11cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc1RhZykgcXVlcnkucHVzaCh7a2V5OiBpdGVtLnByZWZMYWJlbC5zcGxpdCgnPScpWzBdLCBvcGVyYXRvcjogJz0nLCB2YWx1ZTogaXRlbS5wcmVmTGFiZWwuc3BsaXQoJz0nKVsxXX0pXG4gICAgICAgICAgICAgICAgZWxzZSBxdWVyeS5wdXNoKHtrZXk6IGl0ZW0ucHJlZkxhYmVsLCBvcGVyYXRvcjogJz0nLCB2YWx1ZTogJyd9KVxuICAgICAgICAgICAgICAgIGxldCBjb21iaW5lc1RhZ3MgPSB7fVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbWJpbmUgb2YgaXRlbS5jb21iaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29tYmluZUtleSA9IGNvbWJpbmUubGFiZWwuc3BsaXQoJz0nKVswXVxuICAgICAgICAgICAgICAgICAgICBsZXQgY29tYmluZVZhbHVlID0gY29tYmluZS5sYWJlbC5zcGxpdCgnPScpWzFdXG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBzb21lIGtleXMgbm90IHVzZWQgZm9yIGZpbHRlcmluZ1xuICAgICAgICAgICAgICAgICAgICBpZiAoWyduYW1lJywgJ3dlYnNpdGUnLCAnd2lraXBlZGlhJywgJ29wZW5pbmdfaG91cnMnXS5pbmNsdWRlcyhjb21iaW5lS2V5KSkgY29udGludWVcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21iaW5lc1RhZ3NbY29tYmluZUtleV0pIGNvbWJpbmVzVGFnc1tjb21iaW5lS2V5XSArPSBgLCR7Y29tYmluZVZhbHVlfWBcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21iaW5lc1RhZ3NbY29tYmluZUtleV0gPSBjb21iaW5lVmFsdWUgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IobGV0IGtleSBpbiBjb21iaW5lc1RhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gY29tYmluZXNUYWdzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09ICcqJykgcXVlcnkucHVzaCh7a2V5OiBrZXksIG9wZXJhdG9yOiAnJywgdmFsdWU6ICcnfSlcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBxdWVyeS5wdXNoKHtrZXk6IGtleSwgb3BlcmF0b3I6IHZhbHVlLmluY2x1ZGVzKCcsJykgPyAnficgOiAnPScsIHZhbHVlOiB2YWx1ZX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5xdWVyaWVzLnB1c2gocXVlcnkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH0sICAgICAgICAgXG4gICAgICAgIH0pOyAgICAgXG4gICAgfVxufVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxhIDpocmVmPVwidXJsXCIgdi1pZj1cImNvbmRpdGlvbi5rZXlcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4taWNvblwiIFxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgOnRpdGxlPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtZXh0ZXJuYWwtbGluay1zcXVhcmUgZmFzIGZhLWV4dGVybmFsLWxpbmstc3F1YXJlLWFsdFwiPjwvaT5cbiAgICA8L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ2NvbmRpdGlvbiddLFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGlzVGFnKCkgeyBcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbi5rZXkgJiYgKHRoaXMuY29uZGl0aW9uLm9wZXJhdG9yID09ICc9JykgJiYgdGhpcy5jb25kaXRpb24udmFsdWUpIFxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgdXJsKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUYWcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYGh0dHBzOi8vd2lraS5vcGVuc3RyZWV0bWFwLm9yZy93aWtpL1RhZzoke3RoaXMudGFnfWBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBodHRwczovL3dpa2kub3BlbnN0cmVldG1hcC5vcmcvd2lraS9LZXk6JHt0aGlzLmNvbmRpdGlvbi5rZXl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0YWcoKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5jb25kaXRpb24ua2V5fT0ke3RoaXMuY29uZGl0aW9uLnZhbHVlfWBcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gYExpZW4gdmVycyBsYSBmaWNoZSBXaWtpIGRlIFwiJHt0aGlzLmlzVGFnID8gdGhpcy50YWcgOiB0aGlzLmNvbmRpdGlvbi5rZXl9XCJgIFxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLmJ0bi5idG4taWNvbiBpIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuYnRuLWljb24geyBwYWRkaW5nOiA0cHggMTBweDt9XG48L3N0eWxlPiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3VuZHMtcGlja2VyLWNvbnRhaW5lclwiIH0sIFtcbiAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJab25lIEfDqW9ncmFwaGlxdWUgZGUgbGEgcmVxdWV0ZVwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWJ0blwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5xdWVyeVR5cGUsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJxdWVyeVR5cGVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCJhdXRvXCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1zb25hdGEtc2VsZWN0MlwiOiBcImZhbHNlXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF92bS5xdWVyeVR5cGUgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcImFkZHJlc3NcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiQ2hlcmNoZXIgcGFyIGFkcmVzc2VcIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiYm91bmRzXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkRlc3NpbmVyIHVuIHJlY3RhbmdsZSBzdXIgbGEgY2FydGVcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5pbnB1dEFkZHJlc3MsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImlucHV0QWRkcmVzc1wiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWY6IFwiaW5wdXRBZGRyZXNzXCIsXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGRpc2FibGVkOiBfdm0ucXVlcnlUeXBlICE9IFwiYWRkcmVzc1wiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlVuZSB2aWxsZSwgdW5lIHLDqWdpb24sIHVuIHBheXMuLi5cIlxuICAgICAgICB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmlucHV0QWRkcmVzcyB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGtleXByZXNzOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gX3ZtLmdlb2NvZGVBZGRyZXNzKCRldmVudClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF92bS5pbnB1dEFkZHJlc3MgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1idG5cIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBkaXNhYmxlZDogX3ZtLnF1ZXJ5VHlwZSAhPSBcImFkZHJlc3NcIiB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5nZW9jb2RlQWRkcmVzcyB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIENoZXJjaGVyXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5nZW9jb2RlRXJyb3JNc2csXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImdlb2NvZGVFcnJvck1zZ1wiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIlxuICAgICAgfSxcbiAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5nZW9jb2RlRXJyb3JNc2cpKV1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyByZWY6IFwibWFwXCIsIHN0YXRpY0NsYXNzOiBcImJvdW5kcy1waWNrZXItbWFwXCIgfSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJvc20tcXVlcnktYnVpbGRlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTGlzdGUgZGVzIHJlcXXDqnRlcyBkYW5zIGxhIGJhc2UgT3BlblN0cmVldE1hcFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwib3NtLXRhZy1zZWFyY2hcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHRcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5xdWVyaWVzLnB1c2goW3sga2V5OiBcIlwiLCBvcGVyYXRvcjogXCI9XCIsIHZhbHVlOiBcIlwiIH1dKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgT3UgYWpvdXRlciB1bmUgcmVxdcOqdGUgbWFudWVsbGVtZW50XFxuICAgIFwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5xdWVyaWVzLCBmdW5jdGlvbihxdWVyeSwgcXVlcnlJbmRleCkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IGtleTogcXVlcnlJbmRleCwgc3RhdGljQ2xhc3M6IFwiYnMtY2FsbG91dFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRlZmF1bHQgcmVtb3ZlLXF1ZXJ5IGJ0bi1pY29uXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucXVlcmllcy5zcGxpY2UocXVlcnlJbmRleCwgMSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaFwiIH0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX2wocXVlcnksIGZ1bmN0aW9uKGNvbmRpdGlvbiwgY29uZGl0aW9uSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBrZXk6IGNvbmRpdGlvbkluZGV4LCBzdGF0aWNDbGFzczogXCJjb25kaXRpb24tY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIm9zbS1jb25kaXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiUXVlcnlcIiArIHF1ZXJ5SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbmRpdGlvbjogY29uZGl0aW9uIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1pY29uIHJlbW92ZS1jb25kaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5LnNwbGljZShjb25kaXRpb25JbmRleCwgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaCByZW1vdmUtY29uZGl0aW9uXCIgfSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1hZGQtY29uZGl0aW9uIGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnkucHVzaCh7IGtleTogXCJcIiwgb3BlcmF0b3I6IFwiPVwiLCB2YWx1ZTogXCJcIiB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkFqb3V0ZXIgdW5lIGNvbmRpdGlvblwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJib3VuZHMtcGlja2VyXCIsIHtcbiAgICAgICAgcmVmOiBcImJvdW5kc1BpY2tlclwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIFwib3NtLXF1ZXJ5LW9iamVjdFwiOiBfdm0ub3NtUXVlcnlPYmplY3QsXG4gICAgICAgICAgdGlsZUxheWVyOiBfdm0udGlsZUxheWVyLFxuICAgICAgICAgIFwiZGVmYXVsdC1ib3VuZHNcIjogX3ZtLmRlZmF1bHRCb3VuZHNcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3ZlcnBhc3NRdWVyeSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvdmVycGFzc1F1ZXJ5XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIkNvZGUgYXV0b21hdGlxdWVtZW50IGfDqW7DqXLDqSBwb3VyIGxhIHJlcXXDqnRlIE9wZW5TdHJlZXRNYXAgKHZpYSBPdmVyUGFzcylcIlxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwcmVcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3ZlcnBhc3NRdWVyeSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvdmVycGFzc1F1ZXJ5XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5vdmVycGFzc1F1ZXJ5KSldXG4gICAgICApXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb25kaXRpb25cIiB9LFxuICAgIFtcbiAgICAgIF9jKFwib3NtLXdpa2ktbGlua1wiLCB7XG4gICAgICAgIHJlZjogXCJ3aWtpTGlua1wiLFxuICAgICAgICBhdHRyczogeyBjb25kaXRpb246IF92bS5jb25kaXRpb24gfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY29uZGl0aW9uLmtleSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29uZGl0aW9uLmtleVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWY6IFwiaW5wdXRLZXlcIixcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJDaGVyY2hlciB1bmUgY2zDqVwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY29uZGl0aW9uLmtleSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5jb25kaXRpb24sIFwia2V5XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb25kaXRpb24ub3BlcmF0b3IsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29uZGl0aW9uLm9wZXJhdG9yXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHJlZjogXCJzZWxlY3RPcGVyYXRvclwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbmRpdGlvbi1vcGVyYXRvciBmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgXCJkYXRhLXNvbmF0YS1zZWxlY3QyXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkNvbmRpdGlvbi4uLlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgX3ZtLmNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSwgW192bS5fdihcIkV4aXN0ZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIhXCIgfSB9LCBbX3ZtLl92KFwiTidleGlzdGUgcGFzXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIj1cIiB9IH0sIFtfdm0uX3YoXCJFc3Qgw6lnYWwgw6BcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiIT1cIiB9IH0sIFtfdm0uX3YoXCJEaWZmw6lyZW50IGRlXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIn5cIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkVzdCBsJ3VuZSBkZXMgdmFsZXVyc1wiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIhflwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiTidlc3QgYXVjdW5lIGRlcyB2YWxldXJzXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5jb25kaXRpb24udmFsdWUsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbmRpdGlvbi52YWx1ZVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWY6IFwiaW5wdXRWYWx1ZVwiLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IFtcIlwiLCBcIiFcIl0uaW5jbHVkZXMoX3ZtLmNvbmRpdGlvbi5vcGVyYXRvcikgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jb25kaXRpb24udmFsdWUgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdm0uJHNldChfdm0uY29uZGl0aW9uLCBcInZhbHVlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHRhZy1zZWFyY2hcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjpcbiAgICAgICAgICAgIFwiUmVjaGVyY2hlIHJhcGlkZSBkYW5zIE9wZW5TdGVldE1hcCBlbiBBbmdsYWlzIChyZXN0YXVyYW50LCBvcmdhbmljLCBzZWNvbmQgaGFuZC4uLilcIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uY29uZGl0aW9uLmtleVxuICAgID8gX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1pY29uXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLnVybCwgdGFyZ2V0OiBcIl9ibGFua1wiLCB0aXRsZTogX3ZtLnRpdGxlIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJmYSBmYS1leHRlcm5hbC1saW5rLXNxdWFyZSBmYXMgZmEtZXh0ZXJuYWwtbGluay1zcXVhcmUtYWx0XCJcbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=