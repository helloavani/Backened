webpackJsonp(["products.module"],{

/***/ "../../../../../src/app/pages/products/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n      <nb-card-header>Add New Product</nb-card-header>\n      <nb-card-body>\n          <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputpname\">Product Name</label>\n              <input [(ngModel)]=\"device.productname\" type=\"text\" class=\"form-control\" id=\"inputpname\" placeholder=\"Product Name\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n\n            <div class=\"form-group\">\n              <label for=\"inputdesc\">Product Description</label>\n              <input [(ngModel)]=\"device.description\" type=\"text\" class=\"form-control\" id=\"inputdesc\" placeholder=\"Description\">\n            </div>\n\n            \n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputAccountID\">Vendor ID</label>\n              <select [(ngModel)]=\"device.vendorID\" class=\"form-control\">\n            <option *ngFor=\"let user of userList\" [ngValue]=\"user.email\">{{user.email}}</option>\n            \n          </select>\n        </div>\n\n          </div>\n          <div class=\"col-sm-6\">\n\n\n            <div class=\"form-group\">\n              <label for=\"inputCat\">Category</label>\n              <select [(ngModel)]=\"device.category\" class=\"form-control\">\n            <option *ngFor=\"let cat of catList\" [ngValue]=\"cat.name\">{{cat.name}}</option>\n            \n          </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n         \n          <div class=\"col-sm-6\">\n\n            <div class=\"form-group\">\n              <label for=\"inputSubCat\">Sub-Category</label>\n              <input [(ngModel)]=\"device.subcategory\" type=\"text\" class=\"form-control\" id=\"inputSubCat\" placeholder=\"Enter Sub-Category\">\n            </div>\n\n            \n          </div>\n           <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputBrand\">Brand</label>\n               <select [(ngModel)]=\"device.brand\" class=\"form-control\">\n            <option *ngFor=\"let brand of brandList\" [ngValue]=\"brand.name\">{{brand.name}}</option>\n            \n          </select>\n            </div>\n          </div>\n          \n        </div>\n          <div class=\"row\">\n          <div class=\"col-sm-6\">\n\n            <div class=\"form-group\">\n              <label for=\"inputModel\">Model</label>\n              <input [(ngModel)]=\"device.model\" type=\"text\" class=\"form-control\" id=\"inputModel\" placeholder=\"Enter Model\">\n            </div>\n             \n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputBestFor\">Best For</label>\n              <input [(ngModel)]=\"device.bestfor\" type=\"text\" class=\"form-control\" id=\"inputBestFor\" placeholder=\"Best For\">\n            </div>\n          </div>\n        </div>\n            <div class=\"row\">\n         \n\n            <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputwhatitincludes\">What It Includes</label>\n              <input [(ngModel)]=\"device.whatitincludes\" type=\"text\" class=\"form-control\" id=\"inputwhatitincludes\" placeholder=\"What It Includes\">\n            </div>\n          </div>\n             \n        \n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputrenttype\">Rent Type</label>\n              <input [(ngModel)]=\"device.renttype\" type=\"text\" class=\"form-control\" id=\"inputrenttype\" placeholder=\"Rent Type\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n         \n\n            <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputonedayrent\">One Day Rent</label>\n              <input [(ngModel)]=\"device.onedayrent\" type=\"text\" class=\"form-control\" id=\"inputonedayrent\" placeholder=\"One Day Rent\">\n            </div>\n          </div>\n             \n        \n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputthreedayrent\">Three Day Rent</label>\n              <input [(ngModel)]=\"device.threedayrent\" type=\"text\" class=\"form-control\" id=\"inputthreedayrent\" placeholder=\"Three Day Rent\">\n            </div>\n          </div>\n        </div>\n          <div class=\"row\">\n         \n\n            <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputsevendayrent\">Seven Day Rent</label>\n              <input [(ngModel)]=\"device.sevendayrent\" type=\"text\" class=\"form-control\" id=\"inputsevendayrent\" placeholder=\"Seven Day Rent\">\n            </div>\n          </div>\n              <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputquantity\">Quantity</label>\n              <input [(ngModel)]=\"device.quantity\" type=\"text\" class=\"form-control\" id=\"inputquantity\" placeholder=\"Quantity\">\n            </div>\n          </div> \n        \n         \n        </div>\n        <button (click)=\"addNewProduct(device)\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        <div *ngIf=\"!status\" class=\"row text-danger\">\n          <div class=\"col-sm-12\">\n            {{msg}}\n          </div>\n          </div>\n          <div *ngIf=\"status\" class=\"row text-success\">\n          <div class=\"col-sm-12\">\n            {{msg}}\n          </div>\n          </div>\n      </nb-card-body>\n    </nb-card>"

/***/ }),

/***/ "../../../../../src/app/pages/products/add-product/add-product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #40dc7e; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .filled {\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #00d977;\n  color: #7659ff; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/products/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_apicall_apicall__ = __webpack_require__("../../../../../src/app/providers/apicall/apicall.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddProductComponent = (function () {
    function AddProductComponent(apicall) {
        var _this = this;
        this.apicall = apicall;
        this.device = {
            vendorID: "",
            productname: "",
            category: "",
            subcategory: "",
            quantity: "",
            brand: "",
            model: "",
            description: "",
            bestfor: "",
            whatitincludes: "",
            renttype: "",
            onedayrent: "",
            threedayrent: "",
            sevendayrent: "",
        };
        this.msg = "";
        this.apicall.getallvendors()
            .subscribe(function (res) {
            _this.userList = res;
            console.log(_this.userList);
        });
        this.apicall.getallcat()
            .subscribe(function (res) {
            _this.catList = res;
            console.log(_this.catList);
        });
        this.apicall.getallbrands()
            .subscribe(function (res) {
            _this.brandList = res;
            console.log(_this.brandList);
        });
    }
    AddProductComponent.prototype.addNewProduct = function (device) {
        var _this = this;
        console.log(device);
        if (!device.vendorID || !device.productname || !device.category || !device.subcategory || !device.quantity || !device.brand || !device.model || !device.description || !device.bestfor || !device.whatitincludes || !device.renttype || !device.onedayrent || !device.threedayrent || !device.sevendayrent) {
            this.msg = "Please Fill All the details";
            this.status = false;
        }
        else {
            this.apicall.addNewProduct(device)
                .subscribe(function (res) {
                _this.datarecv = res;
                console.log(_this.datarecv);
                _this.msg = _this.datarecv.msg;
                _this.status = _this.datarecv.success;
            });
        }
    };
    return AddProductComponent;
}());
AddProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-add-product',
        styles: [__webpack_require__("../../../../../src/app/pages/products/add-product/add-product.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/products/add-product/add-product.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_apicall_apicall__["a" /* ApicallProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_apicall_apicall__["a" /* ApicallProvider */]) === "function" && _a || Object])
], AddProductComponent);

var _a;
//# sourceMappingURL=add-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/products/products-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_component__ = __webpack_require__("../../../../../src/app/pages/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_product_add_product_component__ = __webpack_require__("../../../../../src/app/pages/products/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_products_view_products_component__ = __webpack_require__("../../../../../src/app/pages/products/view-products/view-products.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__products_component__["a" /* ProductsComponent */],
        children: [{
                path: 'add-product',
                component: __WEBPACK_IMPORTED_MODULE_3__add_product_add_product_component__["a" /* AddProductComponent */],
            }, {
                path: 'view-products',
                component: __WEBPACK_IMPORTED_MODULE_4__view_products_view_products_component__["a" /* ViewProductsComponent */],
            }],
    }];
var ProductsRoutingModule = (function () {
    function ProductsRoutingModule() {
    }
    return ProductsRoutingModule;
}());
ProductsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
        ],
    })
], ProductsRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__products_component__["a" /* ProductsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__add_product_add_product_component__["a" /* AddProductComponent */],
    __WEBPACK_IMPORTED_MODULE_4__view_products_view_products_component__["a" /* ViewProductsComponent */],
];
//# sourceMappingURL=products-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductsComponent = (function () {
    function ProductsComponent() {
    }
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-form-elements',
        template: "\n    <router-outlet></router-outlet>\n  ",
    })
], ProductsComponent);

//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/products/products.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_routing_module__ = __webpack_require__("../../../../../src/app/pages/products/products-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_apicall_apicall__ = __webpack_require__("../../../../../src/app/providers/apicall/apicall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__status_render_component__ = __webpack_require__("../../../../../src/app/pages/products/status.render.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProductsModule = (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());
ProductsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_3__products_routing_module__["a" /* ProductsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* Ng2SmartTableModule */]
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_3__products_routing_module__["b" /* routedComponents */].concat([
            __WEBPACK_IMPORTED_MODULE_6__status_render_component__["a" /* StatusViewComponent */]
        ]),
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__["a" /* SmartTableService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_apicall_apicall__["a" /* ApicallProvider */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_6__status_render_component__["a" /* StatusViewComponent */]],
    })
], ProductsModule);

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/products/status.render.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_apicall_apicall__ = __webpack_require__("../../../../../src/app/providers/apicall/apicall.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusViewComponent = (function () {
    function StatusViewComponent(apicall) {
        this.apicall = apicall;
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    StatusViewComponent.prototype.ngOnInit = function () {
        this.renderValue = this.value.status;
        this.row = this.value;
    };
    StatusViewComponent.prototype.onClick = function () {
        console.log(this.row);
    };
    return StatusViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StatusViewComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StatusViewComponent.prototype, "rowData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], StatusViewComponent.prototype, "save", void 0);
StatusViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'button-view',
        template: "\n    <button style=\"background:transparent;\" *ngIf=\"renderValue==0\" (click)=\"onClick()\">Play</button>\n    <button style=\"background:transparent;\" *ngIf=\"renderValue==1\" (click)=\"onClick()\">Pause</button>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_apicall_apicall__["a" /* ApicallProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_apicall_apicall__["a" /* ApicallProvider */]) === "function" && _b || Object])
], StatusViewComponent);

var _a, _b;
//# sourceMappingURL=status.render.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/products/view-products/view-products.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Smart Table\n  </nb-card-header>\n\n  <nb-card-body>\n  \t<div class=\"row\">\n  \t<div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"Search\">Search</label>\n             <input #search class=\"search form-control\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n            </div>\n          </div>\n      </div>\n\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (custom)=\"playpause($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"updateRecord($event)\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/products/view-products/view-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_apicall_apicall__ = __webpack_require__("../../../../../src/app/providers/apicall/apicall.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewProductsComponent = (function () {
    function ViewProductsComponent(service, apicall) {
        var _this = this;
        this.service = service;
        this.apicall = apicall;
        this.source = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.settings = {
            hideSubHeader: true,
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                vendorID: {
                    title: 'Vendor ID',
                    type: 'string',
                },
                productname: {
                    title: 'Product Name',
                    type: 'string',
                },
                category: {
                    title: 'Category',
                    type: 'string',
                },
                subcategory: {
                    title: 'Sub Category',
                    type: 'string',
                },
                quantity: {
                    title: 'quantity',
                    type: 'string',
                },
                brand: {
                    title: 'brand',
                    type: 'string',
                },
                model: {
                    title: 'model',
                    type: 'string',
                },
                description: {
                    title: 'Descriptiom',
                    type: 'string',
                },
                bestfor: {
                    title: 'Best For',
                    type: 'string',
                },
                whatitincludes: {
                    title: 'whatitincludes',
                    type: 'string',
                },
                renttype: {
                    title: 'Rent Type',
                    type: 'string',
                },
                onedayrent: {
                    title: 'One Day Rent',
                    type: 'string',
                }, threedayrent: {
                    title: 'Three Day Rent',
                    type: 'string',
                }, sevendayrent: {
                    title: 'Seven Day Rent',
                    type: 'string',
                },
            },
        };
        this.apicall.getallproducts()
            .subscribe(function (res) {
            _this.deviceList = res;
            console.log(_this.deviceList);
            _this.source.load(_this.deviceList);
        });
        //const data = this.service.getData();
        //this.source.load(this.deviceList);
    }
    ViewProductsComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
            console.log(event.data);
            this.apicall.deleteproduct(event.data._id)
                .subscribe(function (res) {
                console.log("device deleted");
                console.log(res);
            });
        }
        else {
            event.confirm.reject();
        }
    };
    ViewProductsComponent.prototype.updateRecord = function (event) {
        console.log('ddddd');
        this.apicall.editproduct(event.newData)
            .subscribe(function (res) {
            console.log("device deleted");
            console.log(res);
            if (res.success) {
                event.confirm.resolve(event.newData);
            }
            else {
                event.confirm.reject();
            }
        });
    };
    ViewProductsComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            // fields we want to inclue in the search
            {
                field: 'accountID',
                search: query,
            },
            {
                field: 'licensePlate',
                search: query,
            },
            {
                field: 'simno',
                search: query,
            },
            {
                field: 'imei',
                search: query,
            },
            {
                field: 'deviceID',
                search: query,
            },
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    };
    return ViewProductsComponent;
}());
ViewProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-view-products',
        template: __webpack_require__("../../../../../src/app/pages/products/view-products/view-products.component.html"),
        styles: ["\n    nb-card {\n      transform: translate3d(0, 0, 0);\n    }\n  "],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_apicall_apicall__["a" /* ApicallProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_apicall_apicall__["a" /* ApicallProvider */]) === "function" && _b || Object])
], ViewProductsComponent);

var _a, _b;
//# sourceMappingURL=view-products.component.js.map

/***/ })

});
//# sourceMappingURL=products.module.chunk.js.map