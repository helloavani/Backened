webpackJsonp(["brands.module"],{

/***/ "../../../../../src/app/pages/brands/add-brand/add-brand.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n      <nb-card-header>Add New Brand</nb-card-header>\n      <nb-card-body>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputCat\">Category</label>\n              <select [(ngModel)]=\"device.category\" class=\"form-control\">\n            <option *ngFor=\"let brand of CatList\" [ngValue]=\"brand.name\">{{brand.name}}</option>\n            \n          </select>\n        </div>\n\n          </div>\n          <div class=\"col-sm-6\">\n\n\n            <div class=\"form-group\">\n              <label for=\"inputbrandname\">Brand Name</label>\n              <input [(ngModel)]=\"device.name\" type=\"text\" class=\"form-control\" id=\"inputbrandname\" placeholder=\"Enter Brand Name\">\n            </div>\n          </div>\n        </div>\n        \n        <button (click)=\"addNewDevice(device)\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        <div *ngIf=\"!status\" class=\"row text-danger\">\n          <div class=\"col-sm-12\">\n            {{msg}}\n          </div>\n          </div>\n          <div *ngIf=\"status\" class=\"row text-success\">\n          <div class=\"col-sm-12\">\n            {{msg}}\n          </div>\n          </div>\n      </nb-card-body>\n    </nb-card>"

/***/ }),

/***/ "../../../../../src/app/pages/brands/add-brand/add-brand.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #40dc7e; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .filled {\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #00d977;\n  color: #7659ff; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/brands/add-brand/add-brand.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBrandComponent; });
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


var AddBrandComponent = (function () {
    function AddBrandComponent(apicall) {
        var _this = this;
        this.apicall = apicall;
        this.device = {
            name: "",
            category: "",
        };
        this.msg = "";
        this.apicall.getallcat()
            .subscribe(function (res) {
            _this.CatList = res;
            console.log(_this.CatList);
        });
    }
    AddBrandComponent.prototype.addNewDevice = function (device) {
        var _this = this;
        console.log(device);
        if (!device.name || !device.category) {
            this.msg = "Please Fill All the details";
            this.status = false;
        }
        else {
            this.apicall.addNewBrand(device)
                .subscribe(function (res) {
                _this.datarecv = res;
                console.log(_this.datarecv);
                _this.msg = _this.datarecv.msg;
                _this.status = _this.datarecv.success;
            });
        }
    };
    return AddBrandComponent;
}());
AddBrandComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-add-brand',
        styles: [__webpack_require__("../../../../../src/app/pages/brands/add-brand/add-brand.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/brands/add-brand/add-brand.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_apicall_apicall__["a" /* ApicallProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_apicall_apicall__["a" /* ApicallProvider */]) === "function" && _a || Object])
], AddBrandComponent);

var _a;
//# sourceMappingURL=add-brand.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/brands/brands-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brands_component__ = __webpack_require__("../../../../../src/app/pages/brands/brands.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_brand_add_brand_component__ = __webpack_require__("../../../../../src/app/pages/brands/add-brand/add-brand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_brands_view_brands_component__ = __webpack_require__("../../../../../src/app/pages/brands/view-brands/view-brands.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__brands_component__["a" /* BrandsComponent */],
        children: [{
                path: 'add-brand',
                component: __WEBPACK_IMPORTED_MODULE_3__add_brand_add_brand_component__["a" /* AddBrandComponent */],
            }, {
                path: 'view-brands',
                component: __WEBPACK_IMPORTED_MODULE_4__view_brands_view_brands_component__["a" /* ViewBrandsComponent */],
            }],
    }];
var BrandsRoutingModule = (function () {
    function BrandsRoutingModule() {
    }
    return BrandsRoutingModule;
}());
BrandsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
        ],
    })
], BrandsRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__brands_component__["a" /* BrandsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__add_brand_add_brand_component__["a" /* AddBrandComponent */],
    __WEBPACK_IMPORTED_MODULE_4__view_brands_view_brands_component__["a" /* ViewBrandsComponent */],
];
//# sourceMappingURL=brands-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/brands/brands.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BrandsComponent = (function () {
    function BrandsComponent() {
    }
    return BrandsComponent;
}());
BrandsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-form-elements',
        template: "\n    <router-outlet></router-outlet>\n  ",
    })
], BrandsComponent);

//# sourceMappingURL=brands.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/brands/brands.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsModule", function() { return BrandsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brands_routing_module__ = __webpack_require__("../../../../../src/app/pages/brands/brands-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_apicall_apicall__ = __webpack_require__("../../../../../src/app/providers/apicall/apicall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__status_render_component__ = __webpack_require__("../../../../../src/app/pages/brands/status.render.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BrandsModule = (function () {
    function BrandsModule() {
    }
    return BrandsModule;
}());
BrandsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_3__brands_routing_module__["a" /* BrandsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* Ng2SmartTableModule */]
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_3__brands_routing_module__["b" /* routedComponents */].concat([
            __WEBPACK_IMPORTED_MODULE_6__status_render_component__["a" /* StatusViewComponent */]
        ]),
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__["a" /* SmartTableService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_apicall_apicall__["a" /* ApicallProvider */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_6__status_render_component__["a" /* StatusViewComponent */]],
    })
], BrandsModule);

//# sourceMappingURL=brands.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/brands/status.render.component.ts":
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

/***/ "../../../../../src/app/pages/brands/view-brands/view-brands.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Smart Table\n  </nb-card-header>\n\n  <nb-card-body>\n  \t<div class=\"row\">\n  \t<div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"Search\">Search</label>\n             <input #search class=\"search form-control\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n            </div>\n          </div>\n      </div>\n\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (custom)=\"playpause($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"updateRecord($event)\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/brands/view-brands/view-brands.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewBrandsComponent; });
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




var ViewBrandsComponent = (function () {
    function ViewBrandsComponent(service, apicall) {
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
                name: {
                    title: 'Brand Name',
                    type: 'string',
                },
                category: {
                    title: 'Category',
                    type: 'string',
                    editable: false,
                },
            },
        };
        this.apicall.getallbrands()
            .subscribe(function (res) {
            _this.deviceList = res;
            console.log(_this.deviceList);
            _this.source.load(_this.deviceList);
        });
        //const data = this.service.getData();
        //this.source.load(this.deviceList);
    }
    ViewBrandsComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
            console.log(event.data);
            this.apicall.deletebrand(event.data._id)
                .subscribe(function (res) {
                console.log("device deleted");
                console.log(res);
            });
        }
        else {
            event.confirm.reject();
        }
    };
    ViewBrandsComponent.prototype.updateRecord = function (event) {
        console.log('ddddd');
        this.apicall.editbrand(event.newData)
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
    ViewBrandsComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            // fields we want to inclue in the search
            {
                field: 'name',
                search: query,
            },
            {
                field: 'category',
                search: query,
            },
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    };
    return ViewBrandsComponent;
}());
ViewBrandsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-view-brands',
        template: __webpack_require__("../../../../../src/app/pages/brands/view-brands/view-brands.component.html"),
        styles: ["\n    nb-card {\n      transform: translate3d(0, 0, 0);\n    }\n  "],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_apicall_apicall__["a" /* ApicallProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_apicall_apicall__["a" /* ApicallProvider */]) === "function" && _b || Object])
], ViewBrandsComponent);

var _a, _b;
//# sourceMappingURL=view-brands.component.js.map

/***/ })

});
//# sourceMappingURL=brands.module.chunk.js.map