(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brand; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Brand = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Brand, _CatalogPage);

  function Brand() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Brand.prototype;

  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context.urls);

    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_4__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };

  return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_2__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmQuanMiXSwibmFtZXMiOlsiQnJhbmQiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiY29udGV4dCIsInVybHMiLCIkIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJicmFuZFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJjb25maWciLCJzaG9wX2J5X2JyYW5kIiwiYnJhbmQiLCJwcm9kdWN0cyIsImxpbWl0Iiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIkNhdGFsb2dQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEs7Ozs7Ozs7OztTQUNqQkMsTyxHQUFBLG1CQUFVO0FBQ05DLDRFQUFlLENBQUMsS0FBS0MsT0FBTCxDQUFhQyxJQUFkLENBQWY7O0FBRUEsUUFBSUMsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JDLE1BQXBCLEdBQTZCLENBQWpDLEVBQW9DO0FBQ2hDLFdBQUtDLGlCQUFMO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsV0FBS0MsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUF0QjtBQUNBQyxzRUFBSyxDQUFDQyxFQUFOLENBQVMsa0JBQVQsRUFBNkIsS0FBS0gsY0FBbEM7QUFDSDtBQUNKLEc7O1NBRURELGlCLEdBQUEsNkJBQW9CO0FBQ2hCLFFBQU1LLHdCQUF3QixHQUFHUCxDQUFDLENBQUMsNEJBQUQsQ0FBbEM7QUFDQSxRQUFNUSx1QkFBdUIsR0FBR1IsQ0FBQyxDQUFDLDJCQUFELENBQWpDO0FBQ0EsUUFBTVMsZUFBZSxHQUFHLEtBQUtYLE9BQUwsQ0FBYVksb0JBQXJDO0FBQ0EsUUFBTUMsY0FBYyxHQUFHO0FBQ25CQyxjQUFRLEVBQUU7QUFDTkMsc0JBQWMsRUFBRSx1QkFEVjtBQUVOQyxlQUFPLEVBQUU7QUFGSCxPQURTO0FBS25CQyxZQUFNLEVBQUU7QUFDSkMscUJBQWEsRUFBRSxJQURYO0FBRUpDLGFBQUssRUFBRTtBQUNIQyxrQkFBUSxFQUFFO0FBQ05DLGlCQUFLLEVBQUVWO0FBREQ7QUFEUDtBQUZILE9BTFc7QUFhbkJXLGNBQVEsRUFBRTtBQWJTLEtBQXZCO0FBZ0JBLFNBQUtDLGFBQUwsR0FBcUIsSUFBSUMsOERBQUosQ0FBa0JYLGNBQWxCLEVBQWtDLFVBQUNZLE9BQUQsRUFBYTtBQUNoRWhCLDhCQUF3QixDQUFDaUIsSUFBekIsQ0FBOEJELE9BQU8sQ0FBQ1YsY0FBdEM7QUFDQUwsNkJBQXVCLENBQUNnQixJQUF4QixDQUE2QkQsT0FBTyxDQUFDVCxPQUFyQztBQUVBZCxPQUFDLENBQUMsWUFBRCxDQUFELENBQWdCeUIsT0FBaEIsQ0FBd0I7QUFDcEJDLGlCQUFTLEVBQUU7QUFEUyxPQUF4QixFQUVHLEdBRkg7QUFHSCxLQVBvQixDQUFyQjtBQVFILEc7OztFQXhDOEJDLGdEIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuYnJhbmRQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2JyYW5kL3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2JyYW5kL3NpZGViYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHNob3BfYnlfYnJhbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2JyYW5kL3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=