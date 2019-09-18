webpackJsonp(["orders.module"],{

/***/ "../../../../../src/app/pages/orders/add-order/add-order.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n      <nb-card-header>Add New Product</nb-card-header>\n      <nb-card-body>\n          <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputpname\">Product Name</label>\n               <select [(ngModel)]=\"selectedproduct\" class=\"form-control\">\n            <option *ngFor=\"let product of productList\" [ngValue]=\"product\">{{product.productname}}</option>\n            \n          </select>\n            </div>\n          </div>\n        <div class=\"col-sm-6\">\n\n\n            <div class=\"form-group\">\n              <label for=\"inputCat\">User ID</label>\n              <select [(ngModel)]=\"device.userID\" class=\"form-control\">\n            <option *ngFor=\"let user of userList\" [ngValue]=\"user.email\">{{user.email}}</option>\n            \n          </select>\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"row\">\n         \n          <div class=\"col-sm-6\">\n\n            <div class=\"form-group\">\n              <label for=\"inputSubCat\">Date Of Delivery/Pickup</label>\n              <input [(ngModel)]=\"device.dateofdelivery\" type=\"text\" class=\"form-control\" id=\"dateofdelivery\" placeholder=\"Enter Date Of Delivery/Pickup\">\n            </div>\n\n            \n          </div>\n           <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputBrand\">Status</label>\n               <select [(ngModel)]=\"device.status\" class=\"form-control\">\n            <option value=\"orderplaced\">Order Placed</option>\n            <option value=\"orderdelivered\">Order Delivered</option>\n            <option value=\"ordercancelled\">Order Cancelled</option>\n            <option value=\"ordercompleted\">Order Completed</option>\n            \n          </select>\n            </div>\n          </div>\n          \n        </div>\n       \n        <div class=\"row\">\n         \n\n            <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"duration\">Duration</label>\n              <input [(ngModel)]=\"device.duration\" type=\"text\" class=\"form-control\" id=\"duration\" placeholder=\"Duration\">\n            </div>\n          </div>\n             \n        \n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"price\">Price</label>\n              <input [(ngModel)]=\"device.price\" type=\"text\" class=\"form-control\" id=\"price\" placeholder=\"Price\">\n            </div>\n          </div>\n        </div>\n            <div class=\"row\">\n         \n\n            <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"advanceamount\">Advance Amount</label>\n              <input [(ngModel)]=\"device.advanceamount\" type=\"text\" class=\"form-control\" id=\"advanceamount\" placeholder=\"Advance Amount\">\n            </div>\n          </div>\n             \n        \n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputrenttype\">Rent Type</label>\n              <input [(ngModel)]=\"device.renttype\" type=\"text\" class=\"form-control\" id=\"inputrenttype\" placeholder=\"Rent Type\">\n            </div>\n          </div>\n        </div>\n <div class=\"row\">\n         \n\n            <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"comments\">Comments</label>\n              <input [(ngModel)]=\"device.comments\" type=\"text\" class=\"form-control\" id=\"comments\" placeholder=\"Comments\">\n            </div>\n          </div>\n             \n        \n        \n        </div>\n     \n        <button (click)=\"addNewProduct(device)\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        <div *ngIf=\"!status\" class=\"row text-danger\">\n          <div class=\"col-sm-12\">\n            {{msg}}\n          </div>\n          </div>\n          <div *ngIf=\"status\" class=\"row text-success\">\n          <div class=\"col-sm-12\">\n            {{msg}}\n          </div>\n          </div>\n      </nb-card-body>\n    </nb-card>"

/***/ }),

/***/ "../../../../../src/app/pages/orders/add-order/add-order.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #40dc7e; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .filled {\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #00d977;\n  color: #7659ff; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/orders/add-order/add-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrderComponent; });
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


var AddOrderComponent = (function () {
    function AddOrderComponent(apicall) {
        var _this = this;
        this.apicall = apicall;
        this.device = {
            productID: "",
            vendorID: "",
            productname: "",
            renttype: "",
            userID: "",
            comments: "",
            advanceamount: "",
            price: "",
            duration: "",
            dateofdelivery: "",
            status: "",
        };
        this.msg = "";
        this.apicall.getallproducts()
            .subscribe(function (res) {
            _this.productList = res;
            console.log(_this.productList);
        });
        this.apicall.getallusers()
            .subscribe(function (res) {
            _this.userList = res;
            console.log(_this.userList);
        });
        this.apicall.getallbrands()
            .subscribe(function (res) {
            _this.brandList = res;
            console.log(_this.brandList);
        });
    }
    AddOrderComponent.prototype.addNewProduct = function (device) {
        var _this = this;
        device.vendorID = this.selectedproduct.vendorID;
        device.productID = this.selectedproduct._id;
        device.productname = this.selectedproduct.productname;
        device.renttype = this.selectedproduct.renttype;
        console.log(device);
        if (!device.productID || !device.vendorID || !device.productname || !device.renttype) {
            this.msg = "Please Fill All the details";
            this.status = false;
        }
        else {
            this.apicall.placeorder(device)
                .subscribe(function (res) {
                _this.datarecv = res;
                console.log(_this.datarecv);
                _this.msg = _this.datarecv.msg;
                _this.status = _this.datarecv.success;
            });
        }
    };
    return AddOrderComponent;
}());
AddOrderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-add-order',
        styles: [__webpack_require__("../../../../../src/app/pages/orders/add-order/add-order.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/orders/add-order/add-order.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_apicall_apicall__["a" /* ApicallProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_apicall_apicall__["a" /* ApicallProvider */]) === "function" && _a || Object])
], AddOrderComponent);

var _a;
//# sourceMappingURL=add-order.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/orders/orders-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_component__ = __webpack_require__("../../../../../src/app/pages/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_order_add_order_component__ = __webpack_require__("../../../../../src/app/pages/orders/add-order/add-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_orders_view_orders_component__ = __webpack_require__("../../../../../src/app/pages/orders/view-orders/view-orders.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__orders_component__["a" /* OrdersComponent */],
        children: [{
                path: 'add-order',
                component: __WEBPACK_IMPORTED_MODULE_3__add_order_add_order_component__["a" /* AddOrderComponent */],
            }, {
                path: 'view-orders',
                component: __WEBPACK_IMPORTED_MODULE_4__view_orders_view_orders_component__["a" /* ViewOrdersComponent */],
            }],
    }];
var OrdersRoutingModule = (function () {
    function OrdersRoutingModule() {
    }
    return OrdersRoutingModule;
}());
OrdersRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
        ],
    })
], OrdersRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__orders_component__["a" /* OrdersComponent */],
    __WEBPACK_IMPORTED_MODULE_3__add_order_add_order_component__["a" /* AddOrderComponent */],
    __WEBPACK_IMPORTED_MODULE_4__view_orders_view_orders_component__["a" /* ViewOrdersComponent */],
];
//# sourceMappingURL=orders-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrdersComponent = (function () {
    function OrdersComponent() {
    }
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-form-elements',
        template: "\n    <router-outlet></router-outlet>\n  ",
    })
], OrdersComponent);

//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/orders/orders.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orders_routing_module__ = __webpack_require__("../../../../../src/app/pages/orders/orders-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_apicall_apicall__ = __webpack_require__("../../../../../src/app/providers/apicall/apicall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__status_render_component__ = __webpack_require__("../../../../../src/app/pages/orders/status.render.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OrdersModule = (function () {
    function OrdersModule() {
    }
    return OrdersModule;
}());
OrdersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_3__orders_routing_module__["a" /* OrdersRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["b" /* Ng2SmartTableModule */]
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_3__orders_routing_module__["b" /* routedComponents */].concat([
            __WEBPACK_IMPORTED_MODULE_6__status_render_component__["a" /* StatusViewComponent */]
        ]),
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__core_data_smart_table_service__["a" /* SmartTableService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_apicall_apicall__["a" /* ApicallProvider */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_6__status_render_component__["a" /* StatusViewComponent */]],
    })
], OrdersModule);

//# sourceMappingURL=orders.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/orders/status.render.component.ts":
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

/***/ "../../../../../src/app/pages/orders/view-orders/view-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Smart Table\n  </nb-card-header>\n\n  <nb-card-body>\n  \t<div class=\"row\">\n  \t<div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"Search\">Search</label>\n             <input #search class=\"search form-control\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n            </div>\n          </div>\n      </div>\n\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (custom)=\"playpause($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\" (editConfirm)=\"updateRecord($event)\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/orders/view-orders/view-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewOrdersComponent; });
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




var ViewOrdersComponent = (function () {
    function ViewOrdersComponent(service, apicall) {
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
                    editable: false,
                },
                userID: {
                    title: 'User ID',
                    type: 'string',
                },
                renttype: {
                    title: 'Rent Type',
                    type: 'string',
                },
                price: {
                    title: 'Total Amount',
                    type: 'string',
                },
                advanceamount: {
                    title: 'Advance Amount',
                    type: 'string',
                },
                dateofdelivery: {
                    title: 'DOD',
                    type: 'string',
                },
                status: {
                    title: 'Status',
                    type: 'string',
                },
                duration: {
                    title: 'Duration',
                    type: 'string',
                },
            },
        };
        this.apicall.getallorders()
            .subscribe(function (res) {
            _this.deviceList = res;
            console.log(_this.deviceList);
            _this.source.load(_this.deviceList);
        });
        //const data = this.service.getData();
        //this.source.load(this.deviceList);
    }
    ViewOrdersComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
            console.log(event.data);
            this.apicall.deleteorder(event.data._id)
                .subscribe(function (res) {
                console.log("device deleted");
                console.log(res);
            });
        }
        else {
            event.confirm.reject();
        }
    };
    ViewOrdersComponent.prototype.updateRecord = function (event) {
        console.log('ddddd');
        this.apicall.editorder(event.newData)
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
    ViewOrdersComponent.prototype.onSearch = function (query) {
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
    return ViewOrdersComponent;
}());
ViewOrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-view-orders',
        template: __webpack_require__("../../../../../src/app/pages/orders/view-orders/view-orders.component.html"),
        styles: ["\n    nb-card {\n      transform: translate3d(0, 0, 0);\n    }\n  "],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_apicall_apicall__["a" /* ApicallProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_apicall_apicall__["a" /* ApicallProvider */]) === "function" && _b || Object])
], ViewOrdersComponent);

var _a, _b;
//# sourceMappingURL=view-orders.component.js.map

/***/ })

});
//# sourceMappingURL=orders.module.chunk.js.map