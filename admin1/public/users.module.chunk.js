webpackJsonp(["users.module"],{

/***/ "../../../../../src/app/pages/users/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n      <nb-card-header>Add New User</nb-card-header>\n      <nb-card-body>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputAccountID\">Account ID</label>\n              <input [(ngModel)]=\"user.name\" type=\"text\" class=\"form-control\" id=\"inputAccountID\" placeholder=\"Account ID\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputPassword\">Password</label>\n              <input [(ngModel)]=\"user.password\" type=\"text\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputFirstName\">First Name</label>\n              <input [(ngModel)]=\"user.firstname\" type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"First Name\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputLastName\">Last Name</label>\n              <input [(ngModel)]=\"user.lastname\" type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Last Name\">\n            </div>\n          </div>\n        </div>\n          <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputEmail\">Email</label>\n              <input  [(ngModel)]=\"user.email\" type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputPhone\">Phone No</label>\n              <input [(ngModel)]=\"user.phone\" type=\"text\" class=\"form-control\" id=\"inputPhone\" placeholder=\"Phone No\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"inputAddress\">Address</label>\n              <input  [(ngModel)]=\"user.address\" type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"Address\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n           \n            <div class=\"form-group\">\n              <label for=\"inputRole\">Role</label>\n              <select [(ngModel)]=\"user.role\" (ngModelChange)=\"modo(user.role)\" type=\"text\" class=\"form-control\">\n                <option value=\"distributor\">Distributor</option>\n                <option value=\"user\">User</option>\n              </select>\n            \n          </div>\n          </div>\n          </div>\n          <div *ngIf=\"show\" class=\"row\">\n        \n          <div *ngIf=\"users\" class=\"col-sm-6\">\n           \n            <div class=\"form-group\">\n              <label for=\"inputRole\">Role</label>\n              <select [(ngModel)]=\"user.groupID\" type=\"text\" class=\"form-control\">\n                <option *ngFor=\"let usera of users\" [ngValue]=\"usera\">{{usera}}</option>\n                </select>\n            \n          </div>\n          </div>\n          </div>\n        <button (click)=\"addNewUser(user)\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        <div *ngIf=\"!status\" class=\"row text-danger\">\n          <div class=\"col-sm-12\">\n            {{msg}}\n          </div>\n          </div>\n          <div *ngIf=\"status\" class=\"row text-success\">\n          <div class=\"col-sm-12\">\n            {{msg}}\n          </div>\n          </div>\n      </nb-card-body>\n    </nb-card>"

/***/ }),

/***/ "../../../../../src/app/pages/users/add-user/add-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #40dc7e; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .filled {\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #00d977;\n  color: #7659ff; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/users/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
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


var AddUserComponent = (function () {
    function AddUserComponent(apicall) {
        var _this = this;
        this.apicall = apicall;
        this.users = [];
        this.user = {
            name: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            address: "",
            groupID: "",
        };
        this.msg = "";
        this.show = 0;
        this.users.push("superadmin");
        this.apicall.getallusers()
            .subscribe(function (res) {
            _this.userList = res;
            console.log(res);
            for (var i = 0; i < _this.userList.length; i++) {
                if (res[i].roles == "distributor") {
                    var name = res[i].name;
                    console.log(name);
                    _this.users.push(name);
                }
            }
        });
    }
    AddUserComponent.prototype.modo = function (role) {
        if (role == "distributor") {
            this.show = 0;
        }
        else if (role == "user") {
            this.show = 1;
        }
        console.log("select changes" + role);
    };
    AddUserComponent.prototype.addNewUser = function (user) {
        var _this = this;
        console.log(user);
        if (!user.email || !user.name || !user.password || !user.firstname || !user.lastname || !user.email || !user.phone || !user.address) {
            this.msg = "Please Fill All the details";
            this.status = false;
        }
        else {
            if (!user.groupID) {
                user.groupID = "sysadmin";
            }
            this.apicall.addNewUser(user)
                .subscribe(function (res) {
                _this.datarecv = res;
                console.log(_this.datarecv);
                _this.msg = _this.datarecv.msg;
                _this.status = _this.datarecv.success;
            });
        }
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-add-user',
        styles: [__webpack_require__("../../../../../src/app/pages/users/add-user/add-user.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/users/add-user/add-user.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_apicall_apicall__["a" /* ApicallProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_apicall_apicall__["a" /* ApicallProvider */]) === "function" && _a || Object])
], AddUserComponent);

var _a;
//# sourceMappingURL=add-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/users/status.render.component.ts":
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
        var _this = this;
        console.log(this.row);
        this.apicall.changeuserstatus(this.row._id)
            .subscribe(function (res) {
            _this.user = res;
            console.log(_this.user);
            if (_this.renderValue == '0')
                _this.renderValue = '1';
            else if (_this.renderValue == '1')
                _this.renderValue = '0';
            if (_this.row.status == '0')
                _this.row.status = '1';
            else if (_this.row.status == '1')
                _this.row.status = '0';
            _this.save.emit(_this.row);
        });
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
        template: "\n    <button style=\"background:transparent;\" *ngIf=\"renderValue==0\" (click)=\"onClick()\">Enable</button>\n    <button style=\"background:transparent;\" *ngIf=\"renderValue==1\" (click)=\"onClick()\">Disable</button>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_apicall_apicall__["a" /* ApicallProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_apicall_apicall__["a" /* ApicallProvider */]) === "function" && _b || Object])
], StatusViewComponent);

var _a, _b;
//# sourceMappingURL=status.render.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_component__ = __webpack_require__("../../../../../src/app/pages/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_user_add_user_component__ = __webpack_require__("../../../../../src/app/pages/users/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_users_view_users_component__ = __webpack_require__("../../../../../src/app/pages/users/view-users/view-users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__users_component__["a" /* UsersComponent */],
        children: [{
                path: 'add-user',
                component: __WEBPACK_IMPORTED_MODULE_3__add_user_add_user_component__["a" /* AddUserComponent */],
            }, {
                path: 'view-users',
                component: __WEBPACK_IMPORTED_MODULE_4__view_users_view_users_component__["a" /* ViewUsersComponent */],
            }],
    }];
var UsersRoutingModule = (function () {
    function UsersRoutingModule() {
    }
    return UsersRoutingModule;
}());
UsersRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
        ],
    })
], UsersRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__users_component__["a" /* UsersComponent */],
    __WEBPACK_IMPORTED_MODULE_3__add_user_add_user_component__["a" /* AddUserComponent */],
    __WEBPACK_IMPORTED_MODULE_4__view_users_view_users_component__["a" /* ViewUsersComponent */],
];
//# sourceMappingURL=users-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UsersComponent = (function () {
    function UsersComponent() {
    }
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-form-elements',
        template: "\n    <router-outlet></router-outlet>\n  ",
    })
], UsersComponent);

//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_apicall_apicall__ = __webpack_require__("../../../../../src/app/providers/apicall/apicall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_routing_module__ = __webpack_require__("../../../../../src/app/pages/users/users-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__status_render_component__ = __webpack_require__("../../../../../src/app/pages/users/status.render.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_4__users_routing_module__["a" /* UsersRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__["b" /* Ng2SmartTableModule */],
        ],
        declarations: __WEBPACK_IMPORTED_MODULE_4__users_routing_module__["b" /* routedComponents */].concat([
            __WEBPACK_IMPORTED_MODULE_6__status_render_component__["a" /* StatusViewComponent */],
        ]),
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__core_data_smart_table_service__["a" /* SmartTableService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_apicall_apicall__["a" /* ApicallProvider */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_6__status_render_component__["a" /* StatusViewComponent */]],
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/users/view-users/view-users.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    User List\n  </nb-card-header>\n\n  <nb-card-body>\n  \t\n  \t<div class=\"row\">\n  \t<div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"Search\">Search</label>\n             <input #search class=\"search form-control\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n            </div>\n          </div>\n      </div>\n\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\" (custom)=\"playpause($event)\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/users/view-users/view-users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 220px; }\n\nnb-checkbox {\n  margin-bottom: 1rem; }\n\n.form-inline > * {\n  margin: 0 1.5rem 1.5rem 0; }\n\nnb-card.inline-form-card nb-card-body {\n  padding-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/users/view-users/view-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewUsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_apicall_apicall__ = __webpack_require__("../../../../../src/app/providers/apicall/apicall.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__status_render_component__ = __webpack_require__("../../../../../src/app/pages/users/status.render.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewUsersComponent = (function () {
    function ViewUsersComponent(service, apicall) {
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
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                status: {
                    title: 'Status',
                    type: 'custom',
                    renderComponent: __WEBPACK_IMPORTED_MODULE_4__status_render_component__["a" /* StatusViewComponent */],
                    valuePrepareFunction: function (cell, row) { return row; },
                    onComponentInitFunction: function (instance) {
                        instance.save.subscribe(function (row) {
                            console.log(row);
                        });
                    }
                },
                name: {
                    title: 'Account ID',
                    type: 'string',
                },
                firstname: {
                    title: 'Name',
                    type: 'string',
                },
                email: {
                    title: 'Email ID',
                    type: 'string',
                },
                phone: {
                    title: 'Phone No',
                    type: 'string',
                },
                address: {
                    title: 'Address',
                    type: 'string',
                },
            },
        };
        this.apicall.getallusers()
            .subscribe(function (res) {
            _this.userList = res;
            console.log(_this.userList);
            _this.source.load(_this.userList);
        });
        //const data = this.service.getData();
        //this.source.load(this.deviceList);
    }
    ViewUsersComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    ViewUsersComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            // fields we want to inclue in the search
            {
                field: 'name',
                search: query,
            },
            {
                field: 'firstname',
                search: query,
            },
            {
                field: 'email',
                search: query,
            },
            {
                field: 'phone',
                search: query,
            },
            {
                field: 'address',
                search: query,
            },
        ], false);
        // second parameter specifying whether to perform 'AND' or 'OR' search
        // (meaning all columns should contain search query or at least one)
        // 'AND' by default, so changing to 'OR' by setting false here
    };
    return ViewUsersComponent;
}());
ViewUsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-view-users',
        styles: [__webpack_require__("../../../../../src/app/pages/users/view-users/view-users.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/users/view-users/view-users.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_smart_table_service__["a" /* SmartTableService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_apicall_apicall__["a" /* ApicallProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_apicall_apicall__["a" /* ApicallProvider */]) === "function" && _b || Object])
], ViewUsersComponent);

var _a, _b;
//# sourceMappingURL=view-users.component.js.map

/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map