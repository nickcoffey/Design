webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\" style=\"padding-top: 80px; padding-bottom: 20px;\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_tree_ng2_file_tree__ = __webpack_require__("../../../../ng2-file-tree/ng2-file-tree.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_tree_ng2_file_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_tree_ng2_file_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_inputmask__ = __webpack_require__("../../../../ng2-inputmask/src/input-mask.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_customers_customers_component__ = __webpack_require__("../../../../../src/app/components/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_inquiries_inquiries_component__ = __webpack_require__("../../../../../src/app/components/inquiries/inquiries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_bids_bids_component__ = __webpack_require__("../../../../../src/app/components/bids/bids.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_jobs_jobs_component__ = __webpack_require__("../../../../../src/app/components/jobs/jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_customer_customer_component__ = __webpack_require__("../../../../../src/app/components/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_create_bid_create_bid_component__ = __webpack_require__("../../../../../src/app/components/create-bid/create-bid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_materials_materials_component__ = __webpack_require__("../../../../../src/app/components/materials/materials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_bid_bid_component__ = __webpack_require__("../../../../../src/app/components/bid/bid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_inquiry_inquiry_component__ = __webpack_require__("../../../../../src/app/components/inquiry/inquiry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_job_job_component__ = __webpack_require__("../../../../../src/app/components/job/job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_labor_labor_component__ = __webpack_require__("../../../../../src/app/components/labor/labor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_inquiry_service__ = __webpack_require__("../../../../../src/app/services/inquiry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_bid_service__ = __webpack_require__("../../../../../src/app/services/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_material_service__ = __webpack_require__("../../../../../src/app/services/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_labor_service__ = __webpack_require__("../../../../../src/app/services/labor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { Ng2FileInputModule } from 'ng2-file-input';

//import { DataTableModule } from 'angular-4-data-table';



//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MdSidenavModule, MdToolbarModule, MdIconModule, MdButtonModule, MdMenuModule } from '@angular/material';
//import { FlexLayoutModule } from '@angular/flex-layout';


























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'customers', component: __WEBPACK_IMPORTED_MODULE_12__components_customers_customers_component__["a" /* CustomersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'customers/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_customer_customer_component__["a" /* CustomerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'inquiries', component: __WEBPACK_IMPORTED_MODULE_15__components_inquiries_inquiries_component__["a" /* InquiriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'bids', component: __WEBPACK_IMPORTED_MODULE_16__components_bids_bids_component__["a" /* BidsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'jobs', component: __WEBPACK_IMPORTED_MODULE_17__components_jobs_jobs_component__["a" /* JobsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'create-bid/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_create_bid_create_bid_component__["a" /* CreateBidComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'materials', component: __WEBPACK_IMPORTED_MODULE_20__components_materials_materials_component__["a" /* MaterialsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'bids/:id', component: __WEBPACK_IMPORTED_MODULE_21__components_bid_bid_component__["a" /* BidComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'inquiries/:id', component: __WEBPACK_IMPORTED_MODULE_22__components_inquiry_inquiry_component__["a" /* InquiryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'jobs/:id', component: __WEBPACK_IMPORTED_MODULE_23__components_job_job_component__["a" /* JobComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'labor', component: __WEBPACK_IMPORTED_MODULE_24__components_labor_labor_component__["a" /* LaborComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_25__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_customers_customers_component__["a" /* CustomersComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_inquiries_inquiries_component__["a" /* InquiriesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_bids_bids_component__["a" /* BidsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_jobs_jobs_component__["a" /* JobsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_create_bid_create_bid_component__["a" /* CreateBidComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_materials_materials_component__["a" /* MaterialsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_bid_bid_component__["a" /* BidComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_inquiry_inquiry_component__["a" /* InquiryComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_job_job_component__["a" /* JobComponent */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_24__components_labor_labor_component__["a" /* LaborComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular_datatables__["a" /* DataTablesModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_file_tree_ng2_file_tree__["Ng2FileTreeModule"],
            __WEBPACK_IMPORTED_MODULE_8_ng2_inputmask__["a" /* InputMaskModule */]
            // Ng2FileInputModule.forRoot(
            //   {
            //     browseText: "Browse",
            //     removeText: "Remove",
            //     invalidFileText: "You have picked an invalid or disallowed file.",
            //     invalidFileTimeout: 8000,
            //     removable: true,
            //     multiple: false,
            //     showPreviews: true,
            //     extensions: ['jpg'],
            //   },
            // ),
            //DataTablesModule
            //BrowserAnimationsModule,
            //FlexLayoutModule,
            /*MdSidenavModule,
            MdToolbarModule,
            MdIconModule,
            MdButtonModule,
            MdMenuModule*/
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_26__services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_27__services_inquiry_service__["a" /* InquiryService */],
            __WEBPACK_IMPORTED_MODULE_28__services_bid_service__["a" /* BidService */],
            __WEBPACK_IMPORTED_MODULE_29__services_job_service__["a" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_30__services_material_service__["a" /* MaterialService */],
            __WEBPACK_IMPORTED_MODULE_31__services_labor_service__["a" /* LaborService */],
            __WEBPACK_IMPORTED_MODULE_32__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_33__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_34_ngx_cookie_service__["a" /* CookieService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/bid/bid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-toggle=\"collapse\"].collapsed .if-not-collapsed {\r\n    display: none;\r\n  }\r\n  [data-toggle=\"collapse\"]:not(.collapsed) .if-collapsed {\r\n    display: none;\r\n  }\r\n  .panel-heading:hover {background-color: #1863e6 !important;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bid/bid.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-default pull-left\" [routerLink]=\"['/bids']\">\r\n  <span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Go To Bids</button>\r\n<button *ngIf=\"bid[0].bidStatus == 'ACCEPTED' && bid[0];\" [routerLink]=\"['/jobs', bid[0].associatedJobID]\" class=\"btn btn-primary pull-right\">\r\n  <span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Go To Job</button>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <ng-container *ngIf=\"bid[0]; else noBid\">\r\n    <h2 class=\"page-header\">Bid #{{bid[0].bidID}}</h2>\r\n    <h4>Click To View Details</h4>\r\n    <div class=\"panel-group\" id=\"accordion\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"'#bidAccordion\">\r\n          <h3>Bid Details</h3>\r\n        </div>\r\n        <div id=\"bidAccordion\" class=\"panel-body panel-collapse collapse in\" style=\"word-break:break-all\">\r\n          <h4 class=\"page-header\" style=\"margin-top:0;\">General</h4>\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Price</th>\r\n                <th>Created Date</th>\r\n                <th *ngIf=\"bid[0].bidStatus == 'ACCEPTED'\">Accepted Date</th>\r\n                <th *ngIf=\"bid[0].bidStatus == 'DECLINED'\">Declined Date</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>{{bid[0].bidPrice | currency: 'USD':true}}</td>\r\n                <td>{{bid[0].createdDate | date: 'MM/dd/yyyy'}}</td>\r\n                <td *ngIf=\"bid[0].bidStatus == 'ACCEPTED'\">{{bid[0].endDate | date: 'MM/dd/yyyy'}}</td>\r\n                <td *ngIf=\"bid[0].bidStatus == 'DECLINED'\">{{bid[0].endDate | date: 'MM/dd/yyyy'}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <button (click)=\"onClickUpdateBid()\" type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" href='#update-bid-modal'>\r\n            <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> Update Price</button>\r\n\r\n          <h4 class=\"page-header\">Labor Costs\r\n            <button class=\"btn btn-default btn-sm collapsed\" data-toggle=\"collapse\" data-target='#labor-collapse'>\r\n              <span class=\"if-collapsed\">Show</span>\r\n              <span class=\"if-not-collapsed\">Hide</span>\r\n            </button>\r\n          </h4>\r\n          <div class=\"collapse\" id=\"labor-collapse\">\r\n            <div *ngIf=\"bidLabors.length > 0;\">\r\n              <label>Click To Update Or Delete</label>\r\n              <table class=\"table table-bordered table-hover\">\r\n                <thead>\r\n                  <tr class=\"active\">\r\n                    <th>Role</th>\r\n                    <th class=\"hidden-xs hidden-sm\">Wage</th>\r\n                    <th>Hours</th>\r\n                    <th>Total</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let bidLabor of bidLabors; let i = index\" (click)=\"onClickUpdateBidLabor(i)\" data-toggle=\"modal\" href='#update-labor-modal'>\r\n                    <td>{{bidLabor.roleName}}</td>\r\n                    <td class=\"hidden-xs hidden-sm\">{{bidLabor.roleWage | currency: 'USD':true}}</td>\r\n                    <td>{{bidLabor.laborHours}}</td>\r\n                    <td>{{bidLabor.roleWage*bidLabor.laborHours | currency: 'USD':true}}</td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr class=\"active\" *ngIf=\"totalLaborPriceTable != 0\">\r\n                    <th>Grand Total</th>\r\n                    <th class=\"hidden-xs hidden-sm\"></th>\r\n                    <th></th>\r\n                    <th>{{totalLaborPriceTable | currency: 'USD':true}}</th>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n            <button *ngIf=\"labors.length > 0;\" (click)=\"onClearBidLabor()\" class=\"btn btn-info\" data-toggle=\"modal\" href='#create-labor-modal'>\r\n              <span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Add Labor</button>\r\n          </div>\r\n\r\n          <h4 class=\"page-header\">Material Cost\r\n            <button class=\"btn btn-default btn-sm collapsed\" data-toggle=\"collapse\" data-target='#materials-collapse'>\r\n              <span class=\"if-collapsed\">Show</span>\r\n              <span class=\"if-not-collapsed\">Hide</span>\r\n            </button>\r\n          </h4>\r\n          <div class=\"collapse\" id=\"materials-collapse\">\r\n            <div *ngIf=\"bidMaterials.length > 0;\">\r\n              <label>Click To Update Or Delete</label>\r\n              <table class=\"table table-bordered table-hover\">\r\n                <thead>\r\n                  <tr class=\"active\">\r\n                    <th>Material</th>\r\n                    <th>Linear Feet</th>\r\n                    <th class=\"hidden-xs hidden-sm\">Price Per Unit</th>\r\n                    <th class=\"hidden-xs hidden-sm\">Coverage In Linear Feet</th>\r\n                    <th>Total</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let bidMaterial of bidMaterials; let i = index\" data-toggle=\"modal\" href='#update-material-modal' (click)=\"onClickUpdateBidMaterial(bidMaterial.materialID, i)\">\r\n                    <td>{{bidMaterial.materialName}}</td>\r\n                    <td>{{bidMaterial.linearFeet}}</td>\r\n                    <td class=\"hidden-xs hidden-sm\">{{bidMaterial.pricePerUnit | currency: 'USD':true}}</td>\r\n                    <td class=\"hidden-xs hidden-sm\">{{bidMaterial.linearFeetCoverage}} ft</td>\r\n                    <td>{{bidMaterial.pricePerUnit / bidMaterial.linearFeetCoverage * bidMaterial.linearFeet | currency: 'USD':true}}</td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr class=\"active\" *ngIf=\"totalMaterialPriceTable != 0\">\r\n                    <th>Grand Total</th>\r\n                    <th></th>\r\n                    <th class=\"hidden-xs hidden-sm\"></th>\r\n                    <th class=\"hidden-xs hidden-sm\"></th>\r\n                    <th>{{totalMaterialPriceTable | currency: 'USD':true}}</th>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n            <button *ngIf=\"materials.length > 0\" (click)=\"onClearBidMaterial()\" class=\"btn btn-info\" data-toggle=\"modal\" href='#create-material-modal'>\r\n              <span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Add Materials</button>\r\n          </div>\r\n\r\n          <hr>\r\n          <button *ngIf=\"status == 'PENDING'\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#create-job-modal'>\r\n            <span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Create Job</button>\r\n          <button *ngIf=\"status == 'PENDING'\" class=\"btn btn-warning\" data-toggle=\"modal\" href='#decline-modal'>\r\n            <span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Decline Bid</button>\r\n          <button *ngIf=\"status == 'DECLINED'\" class=\"btn btn-warning\" data-toggle=\"modal\" href='#reopen-modal'>\r\n            <span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Re-open Bid</button>\r\n          <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-bid-modal'>\r\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete Bid</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"'#inquiryAccordion\">\r\n          <h3>Inquiry Details</h3>\r\n        </div>\r\n        <div id=\"inquiryAccordion\" class=\"panel-body panel-collapse collapse\" style=\"word-break:break-all\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Received Date</th>\r\n                <th>Accepted Date</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>{{bid[0].inquiryReceivedDate | date: 'MM/dd/yyyy'}}</td>\r\n                <td>{{bid[0].inquiryEndDate | date: 'MM/dd/yyyy'}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Description</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>{{bid[0].description}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <hr>\r\n          <button type=\"button\" class=\"btn btn-primary btn-lg\" [routerLink]=\"['/inquiries/'+bid[0].inquiryID]\">\r\n            <span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Open Inquiry</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"'#customerAccordion\">\r\n          <h3>Customer Details</h3>\r\n        </div>\r\n        <div id=\"customerAccordion\" class=\"panel-body panel-collapse collapse\" style=\"word-break:break-all\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Name</th>\r\n                <th>Address</th>\r\n                <th>City</th>\r\n                <th class=\"hidden-xs hidden-sm\">State</th>\r\n                <th class=\"hidden-xs hidden-sm\">ZIP</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>{{bid[0].customerName}}</td>\r\n                <td>{{bid[0].customerAddress}}</td>\r\n                <td>{{bid[0].customerCity}}</td>\r\n                <td class=\"hidden-xs hidden-sm\">{{bid[0].customerState}}</td>\r\n                <td class=\"hidden-xs hidden-sm\">{{bid[0].customerZIP}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <hr>\r\n          <button type=\"button\" class=\"btn btn-primary btn-lg\" [routerLink]=\"['/customers/'+bid[0].customerID]\">\r\n            <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Open Customer</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noBid>\r\n    <h2 class=\"page-header\">No Bids</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </ng-template>\r\n</div>\r\n\r\n<!--                                          Bid Popups                                              -->\r\n<!--                Delete Bid Popup                -->\r\n<div class=\"modal fade\" id=\"delete-bid-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete this bid?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Decline Bid Popup                -->\r\n<div class=\"modal fade\" id=\"decline-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to decline this bid?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDecline()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Re-Open Bid Popup                -->\r\n<div class=\"modal fade\" id=\"reopen-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to re-open this bid?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onReopen()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Create Job Popup                -->\r\n<div class=\"modal fade\" id=\"create-job-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to create a job?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onCreate()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Update Bid Popup                -->\r\n<div class=\"modal fade\" id=\"update-bid-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Change Bid Price</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f=\"ngForm\" (submit)=\"onUpdate()\">\r\n          <div class=\"form-group\">\r\n            <input required mask=\"0000000\" #price=\"ngModel\" type=\"number\" [(ngModel)]=\"bidPrice\" name=\"bidPrice\" placeholder=\"Bid Price\"\r\n              class=\"form-control\">\r\n            <div *ngIf=\"price.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"price.errors.required\">\r\n                *Bid price is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\r\n          <button type=\"button\" (click)=\"onClear()\" class=\"btn btn-warning\" (click)=\"onClear()\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                                     Bid Material Popups                                           -->\r\n<!--                Update Material Popup                -->\r\n<div class=\"modal fade\" id=\"update-material-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Update {{materialName}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f4=\"ngForm\" (submit)=\"onUpdateBidMaterial()\">\r\n          <div class=\"form-group\">\r\n            <label>Linear Feet</label>\r\n            <input required mask=\"0000000\" #feet=\"ngModel\" type=\"number\" [(ngModel)]=\"linearFeet\" name=\"linearFeet\" placeholder=\"Linear Feet\"\r\n              class=\"form-control\">\r\n            <div *ngIf=\"feet.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"feet.errors.required\">\r\n                *Linear feet are required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Price Per Unit</label>\r\n            <input required onKeyPress=\"if(this.value.length==5) return false;\" #perUnit=\"ngModel\" type=\"number\" [(ngModel)]=\"pricePerUnit\"\r\n              name=\"pricePerUnit\" placeholder=\"Price Per Unit\" class=\"form-control\">\r\n            <div *ngIf=\"perUnit.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"perUnit.errors.required\">\r\n                *Price per unit is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Coverage In Linear Feet</label>\r\n            <input required mask=\"0000000\" #coverage=\"ngModel\" type=\"number\" [(ngModel)]=\"linearFeetCoverage\" name=\"linearFeetCoverage\"\r\n              placeholder=\"Coverage In Linear Feet\" class=\"form-control\">\r\n            <div *ngIf=\"coverage.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"coverage.errors.required\">\r\n                *Coverage in linear feet is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"f4.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\r\n          <button type=\"button\" (click)=\"clearMaterialUpdate()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-material-modal'>\r\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Create Material Popup                -->\r\n<div class=\"modal fade\" id=\"create-material-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Add Materials</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f5=\"ngForm\" (submit)=\"onCreateMaterial()\">\r\n          <table class=\"table\" *ngIf=\"materials[0] != null\">\r\n            <thead>\r\n              <tr>\r\n                <th>Select Material</th>\r\n                <th>Enter Linear Feet</th>\r\n                <th>Add Material</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <select (change)=\"onChangeMaterial($event.target.value)\" class=\"form-control\">\r\n                    <option></option>\r\n                    <option [value]=\"i\" *ngFor=\"let material of materials; let i = index;\">{{material.materialName}}</option>\r\n                  </select>\r\n                </td>\r\n                <td>\r\n                  <input required mask=\"0000000\" #feet2=\"ngModel\" type=\"number\" [(ngModel)]=\"linearFeet\" name=\"linearFeet\" placeholder=\"Linear Feet\"\r\n                    class=\"form-control\">\r\n                </td>\r\n                <td>\r\n                  <button [disabled]=\"feet2.invalid\" (click)=\"onAddMaterial()\" type=\"button\" class=\"btn btn-success\">\r\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr *ngIf=\"feet2.invalid\" style=\"color:#ff0000\">\r\n                <td *ngIf=\"feet2.errors.required\"></td>\r\n                <td *ngIf=\"feet2.errors.required\">*Linear feet are required</td>\r\n                <td *ngIf=\"feet2.errors.required\"></td>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n          <label style=\"color:#ff0000\" *ngIf=\"selectedMaterials1.length != 0;\">Click To Remove</label>\r\n          <table class=\"table table-bordered table-hover\" *ngIf=\"selectedMaterials1.length != 0;\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Name</th>\r\n                <th>Estimated Cost</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let selectedMaterial of selectedMaterials1; let i = index\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">\r\n                <td>{{selectedMaterial.materialName}}</td>\r\n                <td>{{selectedMaterial.linearFeet*(selectedMaterial.pricePerUnit/selectedMaterial.linearFeetCoverage) | currency:\r\n                  'USD':true}}\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr class=\"active\">\r\n                <th>Total Material Cost</th>\r\n                <th>{{totalMaterialPrice | currency: 'USD':true}}</th>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n          <button [disabled]=\"f5.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Add</button>\r\n          <button type=\"button\" (click)=\"onClearBidMaterial()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Delete Material Popup                -->\r\n<div class=\"modal fade\" id=\"delete-material-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete\r\n          <b>{{materialName | lowercase}}</b> from the current bid?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteBidMaterial()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--                                     Bid Labor Popups                                           -->\r\n<!--                Update labor Popup                -->\r\n<div class=\"modal fade\" id=\"update-labor-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Update {{roleName}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f2=\"ngForm\" (submit)=\"onUpdateBidLabor()\">\r\n          <div class=\"form-group\">\r\n            <label>Wage</label>\r\n            <input required onKeyPress=\"if(this.value.length==5) return false;\" #laborWage=\"ngModel\" type=\"number\" [(ngModel)]=\"wage\"\r\n              name=\"wage\" placeholder=\"Wage\" class=\"form-control\">\r\n            <div *ngIf=\"laborWage.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"laborWage.errors.required\">\r\n                *Wage is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Hours</label>\r\n            <input required mask=\"00000\" #laborHours=\"ngModel\" type=\"number\" [(ngModel)]=\"hours\" name=\"hours\" placeholder=\"Hours\" class=\"form-control\">\r\n            <div *ngIf=\"laborHours.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"laborHours.errors.required\">\r\n                *Hours are required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button [disabled]=\"f2.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n              <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\r\n            <button type=\"button\" (click)=\"onClearLaborUpdate()\" class=\"btn btn-warning\">\r\n              <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-labor-modal'>\r\n              <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Create labor Popup                -->\r\n<div class=\"modal fade\" id=\"create-labor-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Add Labor</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f3=\"ngForm\" (submit)=\"onCreateBidLabor()\">\r\n          <table class=\"table\" *ngIf=\"labors[0] != null\">\r\n            <thead>\r\n              <tr>\r\n                <th>Select Role</th>\r\n                <th>Enter Hours</th>\r\n                <th>Add Role</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <select (change)=\"onChangeLabor($event.target.value)\" class=\"form-control\">\r\n                    <option></option>\r\n                    <option [value]=\"i\" *ngFor=\"let labor of labors; let i = index;\">{{labor.roleName}}</option>\r\n                  </select>\r\n                </td>\r\n                <td>\r\n                  <input required mask=\"00000\" #laborHours2=\"ngModel\" type=\"number\" [(ngModel)]=\"hours\" name=\"hours\" placeholder=\"Hours\" class=\"form-control\"\r\n                    aria-describedby=\"hours-addon\">\r\n                </td>\r\n                <td>\r\n                  <button [disabled]=\"laborHours2.invalid\" (click)=\"onAddLabor()\" type=\"button\" class=\"btn btn-success\">\r\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr *ngIf=\"laborHours2.invalid\">\r\n                <td *ngIf=\"laborHours2.errors.required\"></td>\r\n                <td *ngIf=\"laborHours2.errors.required\" style=\"color:#ff0000\">*Hours are required</td>\r\n                <td *ngIf=\"laborHours2.errors.required\"></td>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n          <label *ngIf=\"selectedLabors.length != 0;\" style=\"color:#ff0000\">Click To Remove</label>\r\n          <table class=\"table table-bordered table-hover\" *ngIf=\"selectedLabors.length != 0;\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Role</th>\r\n                <th>Estimated Cost</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let selectedLabor of selectedLabors; let i = index\" (click)=\"onRemoveLabor(selectedLabor, i)\">\r\n                <td>{{selectedLabor.roleName}}</td>\r\n                <td>{{selectedLabor.laborHours*selectedLabor.roleWage | currency:'USD':true}}\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr class=\"active\">\r\n                <th>Total Labor Cost</th>\r\n                <th>{{totalLaborPrice | currency: 'USD':true}}</th>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n          <button [disabled]=\"f3.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Add</button>\r\n          <button type=\"button\" (click)=\"clearContactFields()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Delete Labor Popup                -->\r\n<div class=\"modal fade\" id=\"delete-labor-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete\r\n          <b>{{roleName | lowercase}}</b> labor from the current bid?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteBidLabor()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--                                               UNUSED MARK-UP                                                                     -->\r\n<!-- <label>Add Materials</label> -->\r\n<!-- <div class=\"dropdown\">\r\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n              <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Materials\r\n              <span class=\"caret\"></span>\r\n            </button>\r\n            <ul class=\"dropdown-menu\">\r\n              <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\r\n                <li *ngFor=\"let material of materials; let i = index\">\r\n                  <a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a>\r\n                </li>\r\n              </ng-container>\r\n              <ng-template #noMaterials>\r\n                <li>\r\n                  <a>No more materials</a>\r\n                </li>\r\n              </ng-template>\r\n            </ul>\r\n          </div> -->\r\n<!-- <table class=\"table table-striped table-hover\">\r\n            <thead *ngIf=\"selectedMaterials[0] != null;\">\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Quantity</th>\r\n                <th>Per Unit Cost</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index;\">\r\n                <td>{{selectedMaterial.materialName}}</td>\r\n                <td>\r\n                  <input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required>\r\n                </td>\r\n                <td>\r\n                  <input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\"\r\n                    required>\r\n                </td>\r\n                <td>\r\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">\r\n                    <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table> -->\r\n<!-- <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n  <h2 class=\"page-header\">Update Bid</h2>\r\n  <form (submit)=\"onUpdate()\">\r\n    <div class=\"form-group\">\r\n      <label>Change Bid Price</label>\r\n      <input type=\"text\" [(ngModel)]=\"bidPrice\" name=\"bidPrice\" placeholder=\"Bid Price\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Change Labor Cost</label>\r\n      <input type=\"text\" [(ngModel)]=\"bidLabor\" name=\"laborCost\" placeholder=\"Labor Cost\" class=\"form-control\" required>\r\n    </div>\r\n    <label>Add Materials</label>\r\n    <div class=\"dropdown\">\r\n      <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Materials<span class=\"caret\"></span></button>\r\n      <ul class=\"dropdown-menu\">\r\n        <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\r\n          <li *ngFor=\"let material of materials; let i = index\"><a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a></li>\r\n        </ng-container>\r\n        <ng-template #noMaterials>\r\n          <li><a>No more materials</a></li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead *ngIf=\"selectedMaterials[0] != null;\">\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Quantity</th>\r\n          <th>Per Unit Cost</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index;\">\r\n          <td>{{selectedMaterial.materialName}}</td>\r\n          <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required></td>\r\n          <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\" required></td>\r\n          <td><button type=\"button\" class=\"close\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">&times;</button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Update</button>\r\n    <button type=\"reset\" class=\"btn btn-danger\" (click)=\"onClear()\">Clear</button>\r\n  </form>  \r\n</div> -->\r\n\r\n<!--<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n  <h2 class=\"page-header\">Create A New Job</h2>\r\n  <form (submit)=\"onCreate()\">\r\n    <div class=\"form-group\">\r\n      <label>Created Date</label>\r\n      <input type=\"text\" [(ngModel)]=\"createdDate\" name=\"createdDate\" placeholder=\"YYYY-MM-DD\" class=\"form-control\" required>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Create</button>\r\n    <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\r\n  </form>  \r\n</div>-->"

/***/ }),

/***/ "../../../../../src/app/components/bid/bid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bid_service__ = __webpack_require__("../../../../../src/app/services/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_material_service__ = __webpack_require__("../../../../../src/app/services/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_inquiry_service__ = __webpack_require__("../../../../../src/app/services/inquiry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_labor_service__ = __webpack_require__("../../../../../src/app/services/labor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BidComponent = (function () {
    function BidComponent(router, route, bidService, materialService, jobService, inquiryService, laborService) {
        this.router = router;
        this.route = route;
        this.bidService = bidService;
        this.materialService = materialService;
        this.jobService = jobService;
        this.inquiryService = inquiryService;
        this.laborService = laborService;
        /** Bid **/
        this.id = null;
        this.bidPrice = null;
        this.bidStatus = '';
        this.createdDate = '';
        this.endDate = '';
        this.status = '';
        this.materialID = null;
        this.linearFeet = 0;
        this.pricePerUnit = 0;
        this.materialName = '';
        this.linearFeetCoverage = 0;
        this.totalMaterialPrice = 0;
        this.totalMaterialPriceTable = 0;
        this.selectedMaterials1 = [];
        this.bidMaterialID = null;
        this.materialIndex = null;
        /** Labor **/
        this.labors = [];
        this.laborsLoop = [];
        this.laborIndex = null;
        this.wage = 0;
        this.hours = 0;
        this.roleName = '';
        this.laborID = null;
        this.selectedLabors = [];
        this.totalLaborPrice = 0;
        this.totalLaborPriceTable = 0;
    }
    BidComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getBid();
        this.getBidMaterials();
        this.getBidLabors();
    };
    /**************************************************** Bid **********************************************************************/
    BidComponent.prototype.getBid = function () {
        var _this = this;
        this.bidService.getBidById(this.id).subscribe(function (bid) {
            _this.bid = bid;
            _this.status = bid[0].bidStatus;
        });
    };
    BidComponent.prototype.onClear = function () {
        this.bidPrice = 0;
    };
    BidComponent.prototype.onDecline = function () {
        var _this = this;
        var updatedBid = {
            bidID: this.id,
            bidStatus: "DECLINED"
        };
        this.bidService.updateBidStatus(updatedBid).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
            }
            else {
                console.log(data.msg);
            }
        });
    };
    BidComponent.prototype.onReopen = function () {
        var _this = this;
        var updatedBid = {
            bidID: this.id,
            bidStatus: "PENDING"
        };
        this.bidService.updateBidStatus(updatedBid).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
            }
            else {
                console.log(data.msg);
            }
        });
    };
    BidComponent.prototype.onCreate = function () {
        var newJob = {
            bidID: this.id,
            createdDate: this.createdDate
        };
        var updatedBid = {
            bidID: this.id,
            bidStatus: "ACCEPTED"
        };
        this.jobService.createJob(newJob).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                // this.ngOnInit();
            }
            else {
                console.log(data.msg);
            }
        });
        this.bidService.updateBidStatus(updatedBid).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                // this.ngOnInit();
            }
            else {
                console.log(data.msg);
            }
        });
        this.router.navigate(['/jobs']);
    };
    BidComponent.prototype.onDelete = function () {
        var _this = this;
        this.bidService.deleteBid(this.id).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
            }
            else {
                console.log(data.msg);
            }
        });
        var updatedInquiry = {
            inquiryID: this.bid[0].inquiryID,
            inquiryStatus: "PENDING",
            removeEndDate: true
        };
        this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.router.navigate(['/bids']);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    BidComponent.prototype.onClickUpdateBid = function () {
        this.bidPrice = Math.round(this.bid[0].bidPrice);
    };
    BidComponent.prototype.onUpdate = function () {
        var _this = this;
        var updatedBid = {
            bidID: this.id,
            bidPrice: this.bidPrice,
            bidStatus: this.bidStatus,
            createdDate: this.createdDate,
            endDate: this.endDate
        };
        this.bidService.updateBid(updatedBid).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.onClear();
                _this.getBid();
                $('#update-bid-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    /**************************************************** Bid Materials **********************************************************************/
    BidComponent.prototype.getBidMaterials = function () {
        var _this = this;
        this.totalMaterialPriceTable = 0;
        this.bidService.getBidMaterialsById(this.id).subscribe(function (bidMaterials) {
            _this.bidMaterials = bidMaterials;
            for (var k = 0; k < _this.bidMaterials.length; k++) {
                _this.totalMaterialPriceTable += ((_this.bidMaterials[k].pricePerUnit / _this.bidMaterials[k].linearFeetCoverage) * _this.bidMaterials[k].linearFeet);
            }
            _this.materialService.getAllMaterials().subscribe(function (materials) {
                _this.materials = materials.materials;
                _this.bidMaterials.forEach(function (bidMaterial) {
                    _this.materials.forEach(function (material, i) {
                        if (material.materialID == bidMaterial.materialID) {
                            _this.materials.splice(i, 1);
                            _this.totalMaterialPriceTable += ((bidMaterial.pricePerUnit / bidMaterial.linearFeetCoverage) * bidMaterial.linearFeet);
                        }
                    });
                });
                // for (let i = 0; i < this.materials.length; i++) {
                //   for (let k = 0; k < this.bidMaterials.length; k++) {
                //     if (this.materials[i].materialID == this.bidMaterials[k].materialID) {
                //       this.materials.splice(i, 1);
                //       this.totalMaterialPriceTable += ((this.bidMaterials[k].pricePerUnit / this.bidMaterials[k].linearFeetCoverage) * this.bidMaterials[k].linearFeet);
                //     }
                //   }
                // }
            });
        });
    };
    /********** CREATE START **********/
    BidComponent.prototype.onCreateMaterial = function () {
        var _this = this;
        this.selectedMaterials1.forEach(function (selectedMaterial) {
            _this.bidService.createBidMaterialById(_this.id, selectedMaterial).subscribe(function (data) {
                if (data.success) {
                    console.log(data.msg);
                }
                else {
                    console.log(data.msg);
                }
            });
        });
        $('#create-material-modal').modal('hide');
        this.onClearBidMaterial();
        this.getBidMaterials();
    };
    BidComponent.prototype.onSelectMaterial = function (material, id) {
        this.material = material;
        this.materialID = id;
    };
    BidComponent.prototype.onChangeMaterial = function (id) {
        this.materialID = id;
    };
    BidComponent.prototype.onAddMaterial = function () {
        var selectedMaterial = {
            materialID: this.materials[this.materialID].materialID,
            materialName: this.materials[this.materialID].materialName,
            pricePerUnit: this.materials[this.materialID].pricePerUnit,
            linearFeetCoverage: this.materials[this.materialID].linearFeetCoverage,
            linearFeet: this.linearFeet
        };
        this.totalMaterialPrice += (selectedMaterial.pricePerUnit / selectedMaterial.linearFeetCoverage * this.linearFeet);
        this.selectedMaterials1.push(selectedMaterial);
        this.materials.splice(this.materialID, 1);
        this.material = null;
        this.linearFeet = 0;
    };
    BidComponent.prototype.onRemoveMaterial = function (material, id) {
        this.totalMaterialPrice -= ((material.pricePerUnit / material.linearFeetCoverage) * material.linearFeet);
        this.selectedMaterials1.splice(id, 1);
        this.materials.push(material);
    };
    /********** CREATE END **********/
    BidComponent.prototype.onUpdateBidMaterial = function () {
        var _this = this;
        var updatedBidMaterial = {
            bidID: this.id,
            materialID: this.bidMaterialID,
            linearFeet: this.linearFeet,
            pricePerUnit: this.pricePerUnit,
            linearFeetCoverage: this.linearFeetCoverage
        };
        this.bidService.updateBidMaterial(updatedBidMaterial).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getBidMaterials();
                $('#update-material-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    BidComponent.prototype.clearMaterialUpdate = function () {
        this.linearFeet = 0;
        this.pricePerUnit = 0;
        this.linearFeetCoverage = 0;
    };
    BidComponent.prototype.onClearBidMaterial = function () {
        var _this = this;
        this.selectedMaterials1.forEach(function (selectedMaterial) {
            _this.materials.push(selectedMaterial);
        });
        this.selectedMaterials1 = [];
        this.linearFeet = 0;
        this.pricePerUnit = 0;
        this.linearFeetCoverage = 0;
    };
    BidComponent.prototype.onClickUpdateBidMaterial = function (materialID, materialIndex) {
        this.bidMaterialID = materialID;
        this.materialIndex = materialIndex;
        this.linearFeet = this.bidMaterials[materialIndex].linearFeet;
        this.pricePerUnit = this.bidMaterials[materialIndex].pricePerUnit;
        this.linearFeetCoverage = this.bidMaterials[materialIndex].linearFeetCoverage;
        this.materialName = this.bidMaterials[materialIndex].materialName;
    };
    BidComponent.prototype.onDeleteBidMaterial = function () {
        var _this = this;
        var bidMaterial = {
            materialID: this.bidMaterialID,
            bidID: this.id
        };
        console.log(bidMaterial);
        this.bidService.deleteBidMaterial(bidMaterial).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getBidMaterials();
                $('#update-material-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    /**************************************************** Bid Labor **********************************************************************/
    BidComponent.prototype.getBidLabors = function () {
        var _this = this;
        this.totalLaborPriceTable = 0;
        this.labors = [];
        this.bidService.getBidLaborsById(this.id).subscribe(function (bidLabors) {
            _this.bidLabors = bidLabors;
            for (var k = 0; k < _this.bidLabors.length; k++) {
                _this.totalLaborPriceTable += (_this.bidLabors[k].roleWage * _this.bidLabors[k].laborHours);
            }
            _this.laborService.getAllLabors().subscribe(function (labors) {
                _this.labors = labors.labors;
                var index = null;
                _this.bidLabors.forEach(function (bidLabor) {
                    _this.labors.forEach(function (labor, i) {
                        if (labor.roleID == bidLabor.roleID) {
                            _this.totalLaborPriceTable += (bidLabor.roleWage * bidLabor.laborHours);
                            _this.labors.splice(i, 1);
                        }
                    });
                });
                // for (let i = 0; i < this.laborsLoop.length; i++) {
                //   for (let k = 0; k < this.bidLabors.length; k++) {
                //     if (this.laborsLoop[i].roleID == this.bidLabors[k].roleID) {
                //       this.totalLaborPriceTable += (this.bidLabors[k].roleWage * this.bidLabors[k].laborHours);
                //       this.labors.splice(i, 1);
                //     }
                //   }
                // }
            });
        });
    };
    /********** CREATE START **********/
    BidComponent.prototype.onCreateBidLabor = function () {
        var _this = this;
        this.selectedLabors.forEach(function (selectedLabor) {
            _this.bidService.createBidLaborById(_this.id, selectedLabor).subscribe(function (data) {
                if (data.success) {
                    console.log(data.msg);
                }
                else {
                    console.log(data.msg);
                }
            });
        });
        this.getBidLabors();
        this.onClearBidLabor();
        $('#create-labor-modal').modal('hide');
    };
    BidComponent.prototype.onAddLabor = function () {
        var selectedLabor = {
            roleID: this.labors[this.laborID].roleID,
            roleName: this.labors[this.laborID].roleName,
            roleWage: this.labors[this.laborID].roleWage,
            laborHours: this.hours
        };
        this.totalLaborPrice += (selectedLabor.roleWage * this.hours);
        this.selectedLabors.push(selectedLabor);
        this.labors.splice(this.laborID, 1);
        this.hours = 0;
    };
    BidComponent.prototype.onRemoveLabor = function (labor, id) {
        this.totalLaborPrice -= (labor.laborHours * labor.roleWage);
        this.selectedLabors.splice(id, 1);
        this.labors.push(labor);
    };
    BidComponent.prototype.onChangeLabor = function (id) {
        this.laborID = id;
    };
    /********** CREATE END **********/
    BidComponent.prototype.onClickUpdateBidLabor = function (laborIndex) {
        this.laborIndex = laborIndex;
        this.wage = this.bidLabors[laborIndex].roleWage;
        this.hours = this.bidLabors[laborIndex].laborHours;
        this.roleName = this.bidLabors[laborIndex].roleName;
    };
    BidComponent.prototype.onUpdateBidLabor = function () {
        var _this = this;
        var updatedBidLabor = {
            laborID: this.bidLabors[this.laborIndex].laborID,
            roleWage: this.wage,
            laborHours: this.hours
        };
        this.bidService.updateBidLabor(updatedBidLabor).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.onClearBidLabor();
                _this.getBidLabors();
                $('#update-labor-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    BidComponent.prototype.onDeleteBidLabor = function () {
        var _this = this;
        this.bidService.deleteBidLabor(this.bidLabors[this.laborIndex].laborID).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getBidLabors();
                $('#update-labor-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    BidComponent.prototype.onClearLaborUpdate = function () {
        this.wage = 0;
        this.hours = 0;
    };
    BidComponent.prototype.onClearBidLabor = function () {
        var _this = this;
        this.laborIndex = null;
        this.wage = 0;
        this.hours = 0;
        this.roleName = '';
        this.selectedLabors.forEach(function (selectedLabor) {
            _this.labors.push(selectedLabor);
        });
        this.selectedLabors = [];
        this.totalLaborPrice = 0;
    };
    return BidComponent;
}());
BidComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bid',
        template: __webpack_require__("../../../../../src/app/components/bid/bid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/bid/bid.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bid_service__["a" /* BidService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_material_service__["a" /* MaterialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_material_service__["a" /* MaterialService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_inquiry_service__["a" /* InquiryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_inquiry_service__["a" /* InquiryService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_labor_service__["a" /* LaborService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_labor_service__["a" /* LaborService */]) === "function" && _g || Object])
], BidComponent);

var _a, _b, _c, _d, _e, _f, _g;
/*********************************************************** Unused code **************************************************************/
// onAddMaterial() {
//   let selectedMaterial = {
//     materialID: this.material.materialID,
//     materialName: this.material.materialName,
//     pricePerLinearFoot: this.material.pricePerLinearFoot,
//     linearFeet: this.linearFeet
//   };
//   this.totalMaterialPrice += (selectedMaterial.pricePerLinearFoot * this.linearFeet);
//   this.selectedMaterials1.push(selectedMaterial);
//   this.materials.splice(this.materialID, 1);
//   this.material = null;
//   this.linearFeet = 0;
// }
// onAddMaterial(material, id){
//   this.selectedMaterials.push(material);
//   this.materials.splice(id, 1);
// } 
//# sourceMappingURL=bid.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/bids/bids.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bids/bids.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pull-left\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Go Home</button>\r\n</div>\r\n  \r\n<ng-container *ngIf=\"bidsLength!=0; else noBids\">\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">Bids</h2>\r\n    <h4>Click To View Details</h4>\r\n    <table *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered table-hover\">\r\n      <thead>\r\n        <tr class=\"active\">\r\n          <th class=\"hidden-xs hidden-sm\">ID</th>\r\n          <th>Customer</th>\r\n          <th>Status</th>\r\n          <!-- <th>Price</th> -->\r\n          <th>Created Date</th>\r\n          <th class=\"hidden-xs hidden-sm\">Accepted/Declined Date</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let bid of bids;\" id=\"{{bid.bidID}}\" [routerLink]=\"['/bids/'+bid.bidID]\">\r\n          <td class=\"hidden-xs hidden-sm\">{{bid.bidID}}</td>\r\n          <td>{{bid.customerName}}</td>\r\n          <td>{{bid.bidStatus}}</td>\r\n          <!-- <td>{{bid.bidPrice | currency: 'USD':true}}</td> -->\r\n          <td>{{bid.createdDate | date: 'MM/dd/yyyy'}}</td>\r\n          <td *ngIf=\"bid.bidStatus != 'PENDING'\" class=\"hidden-xs hidden-sm\">{{bid.endDate | date: 'MM/dd/yyyy'}}</td>\r\n          <td *ngIf=\"bid.bidStatus == 'PENDING'\" class=\"hidden-xs hidden-sm\">N/A</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ng-container>\r\n<ng-template #noBids>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">No Bids</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </div>\r\n</ng-template>\r\n\r\n<!--                                                  UNUSED MARKUP                                                     -->\r\n<!--<button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>\r\n<ng-container *ngIf=\"bids; else noBids\">\r\n    <h2 class=\"page-header\">Bids</h2>\r\n    <div class=\"panel-group\" id=\"accordion\">\r\n      <div class=\"panel panel-default\" *ngFor=\"let bid of bids\">\r\n        <div class=\"panel-heading\">\r\n          <h4 class=\"panel-title\">\r\n            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{bid.bidID + '-details'}}\">Bid ID: {{bid.bidID}}</a>\r\n          </h4>\r\n        </div>\r\n        <div attr.id=\"{{bid.bidID + '-details'}}\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body\">\r\n            <li class=\"list-group-item\"><b>Estimated Cost:</b> ${{bid.bidCost}}</li>\r\n            <li class=\"list-group-item\"><b>Bid Price:</b> ${{bid.bidPrice}}</li>\r\n            <li class=\"list-group-item\"><b>Status:</b> {{bid.bidStatus}}</li><br>\r\n            <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/home']\">Create Job</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" [routerLink]=\"['/home']\">Edit</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</ng-container>\r\n<ng-template #noBids>\r\n  <h2 class=\"page-header\">Loading...</h2>\r\n  <p>Try refreshing the page if there is a significant delay.</p>\r\n</ng-template>-->\r\n\r\n<!-- <ng-container *ngIf=\"pendingLength!=0 || acceptedLength!=0 || declinedLength!=0; else noBids\">\r\n  <ng-container *ngIf=\"pendingLength!=0; else noPendingBids\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">Pending Bids</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Price</th>\r\n            <th>Created Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let pendingBid of pendingBids;\" [routerLink]=\"['/bids/'+pendingBid.bidID]\">\r\n            <td>{{pendingBid.bidID}}</td>\r\n            <td>{{pendingBid.bidPrice}}</td>\r\n            <td>{{pendingBid.createdDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>  \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noPendingBids>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">No Pending Bids</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n  \r\n  <ng-container *ngIf=\"acceptedLength!=0; else noAcceptedBids\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">Accepted Bids</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Price</th>\r\n            <th>Accepted Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let acceptedBid of acceptedBids;\" [routerLink]=\"['/bids/'+acceptedBid.bidID]\">\r\n            <td>{{acceptedBid.bidID}}</td>\r\n            <td>{{acceptedBid.bidPrice}}</td>\r\n            <td>{{acceptedBid.endDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>  \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noAcceptedBids>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">No Accepted Bids</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n  \r\n  <ng-container *ngIf=\"declinedLength!=0; else noDeclinedBids\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">Declined Bids</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Price</th>\r\n            <th>Declined Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let declinedBid of declinedBids;\" [routerLink]=\"['/bids/'+declinedBid.bidID]\">\r\n            <td>{{declinedBid.bidID}}</td>\r\n            <td>{{declinedBid.bidPrice}}</td>\r\n            <td>{{declinedBid.endDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table> \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noDeclinedBids>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">No Declined Bids</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n</ng-container>\r\n<ng-template #noBids>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">No Bids</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </div>\r\n</ng-template> -->"

/***/ }),

/***/ "../../../../../src/app/components/bids/bids.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bid_service__ = __webpack_require__("../../../../../src/app/services/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BidsComponent = (function () {
    function BidsComponent(bidService, router) {
        this.bidService = bidService;
        this.router = router;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Subject"]();
        this.displayTable = false;
    }
    BidsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bidService.getAllBids().subscribe(function (bids) {
            _this.bids = bids.bids;
            _this.bidsLength = bids.bids.length;
            // this.filterBids(bids);
            _this.setupDataTable();
        });
    };
    BidsComponent.prototype.ngAfterContentInit = function () {
        this.applyTableColor();
    };
    BidsComponent.prototype.applyTableColor = function () {
        this.bidService.getAllBids().subscribe(function (bids) {
            bids.bids.forEach(function (bid) {
                var id = bid.bidID;
                var status = bid.bidStatus;
                if (status == 'PENDING') {
                    document.getElementById(id).classList.add('info');
                }
                else if (status == 'DECLINED') {
                    document.getElementById(id).classList.add('danger');
                }
                else if (status == 'ACCEPTED') {
                    document.getElementById(id).classList.add('success');
                }
            });
        });
    };
    BidsComponent.prototype.setupDataTable = function () {
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
        this.dtTrigger.next();
        this.displayTable = true;
    };
    BidsComponent.prototype.filterBids = function (bids) {
        this.pendingBids = bids.pendingBids;
        this.pendingLength = bids.pendingBids.length;
        this.acceptedBids = bids.acceptedBids;
        this.acceptedLength = bids.acceptedBids.length;
        this.declinedBids = bids.declinedBids;
        this.declinedLength = bids.declinedBids.length;
    };
    return BidsComponent;
}());
BidsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bids',
        template: __webpack_require__("../../../../../src/app/components/bids/bids.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/bids/bids.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bid_service__["a" /* BidService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], BidsComponent);

var _a, _b;
//# sourceMappingURL=bids.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-bid/create-bid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-bid/create-bid.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-default\" [routerLink]=\"['/inquiries']\">Go Back</button>\r\n<h2 class=\"page-header\">Create Bid</h2>\r\n<form (submit)=\"onCreate()\">\r\n    <h3>Bid Information</h3>\r\n  <div class=\"form-group\">\r\n    <label>Bid Price</label>\r\n    <input type=\"text\" [(ngModel)]=\"bidPrice\" name=\"bidPrice\" placeholder=\"Bid Price\" class=\"form-control\" required>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Current Date</label>\r\n    <input type=\"text\" [(ngModel)]=\"createdDate\" name=\"createdDate\" placeholder=\"Current Date\" class=\"form-control\" required>\r\n  </div>\r\n  <h3>Estimated Costs</h3>\r\n  <div class=\"form-group\">\r\n    <label>Labor Cost</label>\r\n    <input type=\"text\" [(ngModel)]=\"bidLabor\" name=\"bidLabor\" placeholder=\"Labor Cost\" class=\"form-control\" required>\r\n  </div>\r\n  <label>Materials Cost</label>\r\n  <div class=\"dropdown\">\r\n    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Add Materials<span class=\"caret\"></span></button>\r\n    <ul class=\"dropdown-menu\">\r\n      <li *ngFor=\"let material of materials;\"><a (click)=\"onAddMaterial(material)\">{{material.materialName}}</a></li>\r\n    </ul>\r\n  </div>\r\n  <table class=\"table table-striped table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Quantity</th>\r\n        <th>Per Unit Cost</th>\r\n      </tr>\r\n      </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let selectedMaterial of selectedMaterials;\">\r\n        <td>{{selectedMaterial.materialName}}</td>\r\n        <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required></td>\r\n        <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\" required></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button type=\"submit\" class=\"btn btn-primary\">Create</button>\r\n  <button type=\"reset\" class=\"btn btn-danger\" (click)=\"onClear()\">Clear</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/create-bid/create-bid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_material_service__ = __webpack_require__("../../../../../src/app/services/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bid_service__ = __webpack_require__("../../../../../src/app/services/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_inquiry_service__ = __webpack_require__("../../../../../src/app/services/inquiry.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateBidComponent = (function () {
    function CreateBidComponent(materialService, bidService, inquiryService, router, route) {
        this.materialService = materialService;
        this.bidService = bidService;
        this.inquiryService = inquiryService;
        this.router = router;
        this.route = route;
        this.selectedMaterials = [];
    }
    CreateBidComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.materialService.getAllMaterials().subscribe(function (materials) {
            _this.materials = materials.materials;
        });
    };
    CreateBidComponent.prototype.onAddMaterial = function (material) {
        this.selectedMaterials.push(material);
    };
    CreateBidComponent.prototype.onClear = function () {
        this.selectedMaterials = [];
    };
    CreateBidComponent.prototype.onCreate = function () {
        var _this = this;
        var newBid = {
            inquiryID: this.route.snapshot.params['id'],
            bidLabor: this.bidLabor,
            bidPrice: this.bidPrice,
            createdDate: this.createdDate
        };
        var updatedInquiry = {
            inquiryID: this.route.snapshot.params['id'],
            inquiryStatus: "ACCEPTED"
        };
        this.bidService.createBid(newBid).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
            }
            else {
                console.log(data.msg);
            }
        });
        this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
            }
            else {
                console.log(data.msg);
            }
        });
        this.selectedMaterials.forEach(function (selectedMaterial) {
            _this.bidService.createBidMaterial(selectedMaterial).subscribe(function (data) {
                if (data.success) {
                    console.log(data.msg);
                    _this.ngOnInit();
                }
                else {
                    console.log(data.msg);
                }
            });
        });
        this.router.navigate(['/bids']);
    };
    return CreateBidComponent;
}());
CreateBidComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-bid',
        template: __webpack_require__("../../../../../src/app/components/create-bid/create-bid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-bid/create-bid.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_material_service__["a" /* MaterialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_material_service__["a" /* MaterialService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_bid_service__["a" /* BidService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_inquiry_service__["a" /* InquiryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_inquiry_service__["a" /* InquiryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], CreateBidComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=create-bid.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/customer/customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-heading:hover {background-color: #1863e6 !important;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-default pull-left\" [routerLink]=\"['/customers']\">\r\n  <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Go To Customers</button>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <ng-container *ngIf=\"customer[0]; else noCustomer\">\r\n    <h2 class=\"page-header\">{{customer[0].customerName}}</h2>\r\n    <h4>Click To View Details</h4>\r\n    <div class=\"panel-group\" id=\"accordion\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"'#customerAccordion\">\r\n          <h3>Customer Details</h3>\r\n        </div>\r\n        <div id=\"customerAccordion\" class=\"panel-body panel-collapse collapse in\" style=\"word-break:break-all\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Address</th>\r\n                <th>City</th>\r\n                <th class=\"hidden-xs hidden-sm\">State</th>\r\n                <th class=\"hidden-xs hidden-sm\">ZIP</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>{{customer[0].address}}</td>\r\n                <td>{{customer[0].city}}</td>\r\n                <td class=\"hidden-xs hidden-sm\">{{customer[0].state}}</td>\r\n                <td class=\"hidden-xs hidden-sm\">{{customer[0].zip}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <button (click)=\"onClickUpdateCustomer()\" class=\"btn btn-info\" href=\"#update-customer-modal\" data-toggle=\"modal\">\r\n            <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> Update Customer</button>\r\n          <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-customer-modal'>\r\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete Customer</button>\r\n          <hr>\r\n          <button class=\"btn btn-primary\" href=\"#create-inquiry-modal\" data-toggle=\"modal\">\r\n            <span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Create Inquiry</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"'#contactAccordion\">\r\n          <h3>Contact Details</h3>\r\n        </div>\r\n        <div id=\"contactAccordion\" class=\"panel-body panel-collapse collapse\" style=\"word-break:break-all\">\r\n          <ng-container *ngIf=\"contacts.length > 0; else noContacts\">\r\n            <label>Click To Update Or Delete</label>\r\n            <table class=\"table table-bordered table-hover\">\r\n              <thead>\r\n                <tr class=\"active\">\r\n                  <th class=\"hidden-xs hidden-sm\">Title</th>\r\n                  <th>Name</th>\r\n                  <th>Phone</th>\r\n                  <th class=\"hidden-xs hidden-sm\">Email</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let contact of contacts; let i = index\" (click)=\"onClickUpdateContact(contact.contactID, i)\" data-toggle=\"modal\"\r\n                  href='#update-contact-modal'>\r\n                  <td class=\"hidden-xs hidden-sm\">{{contact.contactTitle}}</td>\r\n                  <td>{{contact.contactName}}</td>\r\n                  <td>{{contact.contactPhone}}</td>\r\n                  <td class=\"hidden-xs hidden-sm\">{{contact.contactEmail}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </ng-container>\r\n          <ng-template #noContacts>\r\n            <h5 class=\"page-header\">No Contacts</h5>\r\n            <p>If this is incorrect, try refreshing the page.</p>\r\n          </ng-template>\r\n          <button (click)=\"clearContactFields()\" class=\"btn btn-info\" type=\"button\" data-toggle=\"modal\" href='#create-contact-modal'>\r\n            <span class=\"glyphicon glyphicon-phone\" aria-hidden=\"true\"></span> Create Contact\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noCustomer>\r\n    <h2 class=\"page-header\">No Customers</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </ng-template>\r\n</div>\r\n\r\n<!--                              CUSTOMER POPUPS                                -->\r\n<!--                Update Customer Popup                -->\r\n<div class=\"modal fade\" id=\"update-customer-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Update {{customer[0].customerName}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f3=\"ngForm\" (submit)=\"onUpdateCustomer()\">\r\n          <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input required maxlength=\"100\" #customerName=\"ngModel\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\"\r\n              required>\r\n            <div *ngIf=\"customerName.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"customerName.errors.required\">\r\n                *Name is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Address</label>\r\n            <input required maxlength=\"80\" #customerAddress=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"address\" name=\"address\"\r\n              placeholder=\"Address\" />\r\n            <div *ngIf=\"customerAddress.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"customerAddress.errors.required\">\r\n                *Address is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>City</label>\r\n            <input required maxlength=\"80\" #customerCity=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" name=\"city\" placeholder=\"City\"\r\n            />\r\n            <div *ngIf=\"customerCity.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"customerCity.errors.required\">\r\n                *City is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>State</label>\r\n            <input maxlength=\"80\" #customerState=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"state\" name=\"state\" placeholder=\"State\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>ZIP</label>\r\n            <input mask=\"00000\" #customerZIP=\"ngModel\" type=\"number\" class=\"form-control\" [(ngModel)]=\"zip\" name=\"zip\" placeholder=\"ZIP\"\r\n            />\r\n          </div>\r\n          <button [disabled]=\"f3.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\r\n          <button type=\"button\" (click)=\"clearCustomerFields()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Delete Customer Popup                -->\r\n<div class=\"modal fade\" id=\"delete-customer-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete this customer and all of its inquiries, bids, and jobs?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteCustomer()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Create Inquiry Popup                -->\r\n<div class=\"modal fade\" id=\"create-inquiry-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Create A New Inquiry</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form (submit)=\"onCreate()\">\r\n          <div class=\"form-group\">\r\n            <label>Description</label>\r\n            <textarea required maxlength=\"950\" #inquiryDescription=\"ngModel\" type=\"text\" [(ngModel)]=\"description\" name=\"description\"\r\n              placeholder=\"Description\" class=\"form-control\"></textarea> {{description.length}}/950\r\n            <div *ngIf=\"inquiryDescription.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"inquiryDescription.errors.required\">\r\n                *Description is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"inquiryDescription.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Create</button>\r\n          <button type=\"button\" (click)=\"clearDescription()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                              CONTACT POPUPS                                -->\r\n<!--                Update Contact Popup                -->\r\n<div class=\"modal fade\" id=\"update-contact-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Update {{contactName}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f=\"ngForm\" (submit)=\"onUpdateContact()\">\r\n          <div class=\"form-group\">\r\n            <label>Title</label>\r\n            <input required maxlength=\"40\" #title=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactTitle\" name=\"contactTitle\"\r\n              placeholder=\"Title\" />\r\n            <div *ngIf=\"title.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"title.errors.required\">\r\n                *Title is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input required maxlength=\"40\" #contactsName=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactName\" name=\"contactName\"\r\n              placeholder=\"Name\" />\r\n            <div *ngIf=\"contactsName.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"contactsName.errors.required\">\r\n                *Name is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Phone</label>\r\n            <input type=\"text\" class=\"form-control\" mask=\"(000)000-0000\" [(ngModel)]=\"contactPhone\" name=\"contactPhone\" placeholder=\"Phone\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Email</label>\r\n            <input type=\"text\" maxlength=\"40\" class=\"form-control\" [(ngModel)]=\"contactEmail\" name=\"contactEmail\" placeholder=\"Email\"\r\n            />\r\n          </div>\r\n          <button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\r\n          <button type=\"button\" (click)=\"clearContactFields()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n          <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" href='#delete-contact-modal'>\r\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete\r\n          </button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Delete Contact Popup                -->\r\n<div class=\"modal fade\" id=\"delete-contact-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete\r\n          <b>{{contactName}}</b>?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteContact()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Create Contact Popup                -->\r\n<div class=\"modal fade\" id=\"create-contact-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Create Contact</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f2=\"ngForm\" (submit)=\"onCreateContact()\">\r\n          <div class=\"form-group\">\r\n            <label>Title</label>\r\n            <input required maxlength=\"40\" #title2=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactTitle\" name=\"contactTitle\"\r\n              placeholder=\"Title\" />\r\n            <div *ngIf=\"title2.invalid\">\r\n              <div *ngIf=\"title2.errors.required\" style=\"color:#ff0000\">\r\n                *Title is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input required maxlength=\"40\" #contactsName2=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactName\" name=\"contactName\"\r\n              placeholder=\"Name\" />\r\n            <div *ngIf=\"contactsName2.invalid\">\r\n              <div *ngIf=\"contactsName2.errors.required\" style=\"color:#ff0000\">\r\n                *Name is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Phone</label>\r\n            <input type=\"text\" class=\"form-control\" mask=\"(000)000-0000\" [(ngModel)]=\"contactPhone\" name=\"contactPhone\" placeholder=\"Phone\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"contactEmail\" name=\"contactEmail\" placeholder=\"Email\" />\r\n            <!-- email #email2=\"ngModel\" type=\"email\" maxlength=\"40\" -->\r\n            <!-- <div *ngIf=\"email2.invalid\">\r\n              <div *ngIf=\"email2.errors.email && contactEmail.length > 0\" style=\"color:#ff0000\">\r\n                *Invalid Email\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          <button [disabled]=\"f2.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-phone\" aria-hidden=\"true\"></span> Create</button>\r\n          <button type=\"button\" (click)=\"clearContactFields()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_inquiry_service__ = __webpack_require__("../../../../../src/app/services/inquiry.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerComponent = (function () {
    function CustomerComponent(customerService, inquiryService, router, route) {
        this.customerService = customerService;
        this.inquiryService = inquiryService;
        this.router = router;
        this.route = route;
        /** CUSTOMER **/
        this.id = null;
        this.description = '';
        this.name = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.zip = null;
        /** CONTACT **/
        this.contactTitle = '';
        this.contactName = '';
        this.contactPhone = null;
        this.contactEmail = '';
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getCustomer();
        this.getContacts();
    };
    /*************************************************** CUSTOMER FUNCTIONS ***********************************************************/
    CustomerComponent.prototype.getCustomer = function () {
        var _this = this;
        this.customerService.getCustomerById(this.id).subscribe(function (customer) {
            _this.customer = customer;
        });
    };
    CustomerComponent.prototype.onCreate = function () {
        var _this = this;
        var newInquiry = {
            customerID: this.id,
            description: this.description,
            receivedDate: this.receivedDate
        };
        this.inquiryService.createInquiry(newInquiry).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                $('#create-inquiry-modal').modal('hide');
                _this.clearDescription();
                _this.router.navigate(['/inquiries']);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    CustomerComponent.prototype.onDeleteCustomer = function () {
        var _this = this;
        this.customerService.deleteCustomer(this.id).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.router.navigate(['/customers']);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    CustomerComponent.prototype.onClickUpdateCustomer = function () {
        this.name = this.customer[0].customerName;
        this.address = this.customer[0].address;
        this.city = this.customer[0].city;
        this.state = this.customer[0].state;
        this.zip = this.customer[0].zip;
    };
    CustomerComponent.prototype.onUpdateCustomer = function () {
        var _this = this;
        var updatedCustomer = {
            customerID: this.id,
            name: this.name,
            address: this.address,
            city: this.city,
            state: this.state,
            zip: this.zip
        };
        this.customerService.updateCustomer(updatedCustomer).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getCustomer();
                _this.clearCustomerFields();
                $('#update-customer-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    CustomerComponent.prototype.clearCustomerFields = function () {
        this.name = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.zip = null;
    };
    CustomerComponent.prototype.clearDescription = function () {
        this.description = '';
    };
    /*************************************************** CONTACT FUNCTIONS ***********************************************************/
    CustomerComponent.prototype.getContacts = function () {
        var _this = this;
        this.customerService.getAllContacts(this.id).subscribe(function (contacts) {
            _this.contacts = contacts;
        });
    };
    CustomerComponent.prototype.onClickUpdateContact = function (contactID, contactIndex) {
        this.contactID = contactID;
        this.contactTitle = this.contacts[contactIndex].contactTitle;
        this.contactName = this.contacts[contactIndex].contactName;
        this.contactPhone = this.contacts[contactIndex].contactPhone;
        this.contactEmail = this.contacts[contactIndex].contactEmail;
    };
    CustomerComponent.prototype.onUpdateContact = function () {
        var _this = this;
        var updatedContact = {
            contactID: this.contactID,
            contactTitle: this.contactTitle,
            contactName: this.contactName,
            contactPhone: this.contactPhone,
            contactEmail: this.contactEmail
        };
        this.customerService.updateContact(updatedContact).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                console.log(data.msg);
                _this.getContacts();
                _this.clearContactFields();
                $('#update-contact-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    CustomerComponent.prototype.onDeleteContact = function () {
        var _this = this;
        this.customerService.deleteContact(this.contactID).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getContacts();
                $('#update-contact-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    CustomerComponent.prototype.onCreateContact = function () {
        var _this = this;
        var newContact = {
            customerID: this.id,
            contactTitle: this.contactTitle,
            contactName: this.contactName,
            contactPhone: this.contactPhone,
            contactEmail: this.contactEmail
        };
        this.customerService.createContact(newContact).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                console.log(data.msg);
                _this.getContacts();
                _this.clearContactFields();
                $('#create-contact-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    CustomerComponent.prototype.clearContactFields = function () {
        this.contactTitle = '';
        this.contactName = '';
        this.contactPhone = null;
        this.contactEmail = '';
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customer',
        template: __webpack_require__("../../../../../src/app/components/customer/customer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/customer/customer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_customer_service__["a" /* CustomerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_inquiry_service__["a" /* InquiryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_inquiry_service__["a" /* InquiryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], CustomerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/customers/customers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customers/customers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pull-left\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Go Home</button>\r\n</div>\r\n\r\n<h2 class=\"page-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">Customers</h2>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <ng-container *ngIf=\"customers; else noCustomers\">\r\n    <h4>Click To View Details</h4>\r\n    <!-- *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" -->\r\n    <table class=\"table table-bordered table-hover\">\r\n      <thead>\r\n        <tr class=\"active\">\r\n          <th>ID</th>\r\n          <th>Name</th>\r\n          <th>Address</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let customer of customers;\" [routerLink]=\"['/customers/'+customer.customerID]\">\r\n          <td>{{customer.customerID}}</td>\r\n          <td>{{customer.customerName}}</td>\r\n          <td>{{customer.address}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <button type=\"button\" class=\"btn btn-primary\" href=\"#create-modal\" data-toggle=\"modal\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Create New</button>\r\n  </ng-container>\r\n  <ng-template #noCustomers>\r\n    <h2 class=\"page-header\">No Customers</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </ng-template>\r\n</div>\r\n\r\n<!--                Create Customer Popup                -->\r\n<div class=\"modal fade\" id=\"create-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Create A New Customer</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f=\"ngForm\" (submit)=\"onCreate()\">\r\n          <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input required maxlength=\"100\" #customerName=\"ngModel\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\">\r\n            <div *ngIf=\"customerName.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"customerName.errors.required\">\r\n                *Name is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Address</label>\r\n            <input required maxlength=\"80\" #customerAddress=\"ngModel\" type=\"text\" [(ngModel)]=\"address\" name=\"address\" placeholder=\"Address\" class=\"form-control\">\r\n            <div *ngIf=\"customerAddress.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"customerAddress.errors.required\">\r\n                *Address is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>City</label>\r\n            <input required maxlength=\"80\" #customerCity=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" name=\"city\" placeholder=\"City\" />\r\n            <div *ngIf=\"customerCity.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"customerCity.errors.required\">\r\n                *City is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>State</label>\r\n            <input maxlength=\"80\" #customerState=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"state\" name=\"state\" placeholder=\"State\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>ZIP</label>\r\n            <input mask=\"00000\" #customerZIP=\"ngModel\" type=\"number\" class=\"form-control\" [(ngModel)]=\"zip\" name=\"zip\" placeholder=\"ZIP\" />\r\n          </div>\r\n          <button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Create</button>\r\n          <button type=\"button\" (click)=\"clearFields()\" class=\"btn btn-warning\"><span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/customers/customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomersComponent = (function () {
    function CustomersComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
        this.name = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.zip = null;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Subject"]();
        this.displayTable = false;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.getCustomers();
        // this.setupDataTable();
    };
    CustomersComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customerService.getAllCustomers().subscribe(function (customers) {
            _this.customers = customers.customers;
        });
    };
    CustomersComponent.prototype.setupDataTable = function () {
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
        this.dtTrigger.next();
        this.displayTable = true;
    };
    CustomersComponent.prototype.onCreate = function () {
        var _this = this;
        var newCustomer = {
            customerName: this.name,
            address: this.address,
            city: this.city,
            state: this.state,
            zip: this.zip
        };
        this.customerService.createCustomer(newCustomer).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getCustomers();
                _this.clearFields();
                $('#create-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    CustomersComponent.prototype.clearFields = function () {
        this.name = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.zip = null;
    };
    return CustomersComponent;
}());
CustomersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customers',
        template: __webpack_require__("../../../../../src/app/components/customers/customers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/customers/customers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CustomersComponent);

var _a, _b;
//# sourceMappingURL=customers.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .panel:hover {\r\n    background-color: #dfdfdf !important;\r\n  } */\r\n  [data-toggle=\"collapse\"].collapsed .if-not-collapsed {\r\n    display: none;\r\n  }\r\n  [data-toggle=\"collapse\"]:not(.collapsed) .if-collapsed {\r\n    display: none;\r\n  }\r\n  .panel-heading:hover {background-color: #1863e6 !important;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"jobs.length > 0; else noJobs\">\r\n  <!-- <h2 class=\"page-header\">Current Jobs</h2> -->\r\n  <div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n      <h1>Current Jobs</h1>\r\n      <p>Click To View Details</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-group\" id=\"accordion\">\r\n    <div class=\"panel panel-primary\" *ngFor=\"let job of jobs; let i = index\">\r\n      <div class=\"panel-heading\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-parent=\"#accordion\" [attr.href]=\"'#accordion' + job.jobID\">\r\n        <h3>\r\n          Job # {{job.jobID}}\r\n          <!-- <button type=\"button\" class=\"btn btn-info collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" [attr.href]=\"'#accordion' + job.jobID\">\r\n            <span class=\"if-collapsed\">Show</span>\r\n            <span class=\"if-not-collapsed\">Hide</span>\r\n          </button> -->\r\n        </h3>\r\n      </div>\r\n      <div [attr.id]=\"'accordion' + job.jobID\" class=\"panel-body panel-collapse collapse\" style=\"margin-top:0;\">\r\n        <h4>Customer:</h4>\r\n        <h5>{{job.customerName}}</h5>\r\n        <hr>\r\n        <h4>Budget:</h4>\r\n        <div class=\"progress progress-striped active\">\r\n          <div [attr.id]=\"'costProgress'+job.jobID\" class=\"progress-bar progress-bar-info\" role=\"progressbar\" [attr.aria-valuenow]=\"job.actualCosts\"\r\n            aria-valuemin=\"0\" [attr.aria-valuemax]=\"job.expectedCosts\" [ngStyle]=\"{'min-width': '2em', 'width': (job.actualCosts/job.expectedCosts)*100+ '%'}\">\r\n            <!-- {{job.actualCosts/job.expectedCosts | percent:'1.0-0'}} -->\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <h4>Revenue Collected:</h4>\r\n        <div class=\"progress progress-striped active\">\r\n          <div id=\"revenueProgress\" class=\"progress-bar progress-bar-info\" role=\"progressbar\" [attr.aria-valuenow]=\"job.actualRevenue\"\r\n            aria-valuemin=\"0\" [attr.aria-valuemax]=\"job.expectedRevenue\" [ngStyle]=\"{'min-width': '2em', 'width': (job.actualRevenue/job.expectedRevenue)*100+ '%'}\">\r\n            <!-- {{job.actualRevenue/job.expectedRevenue | percent:'1.0-0'}} -->\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <button type=\"button\" class=\"btn btn-primary btn-lg\" [routerLink]=\"['/jobs/'+job.jobID]\">\r\n          <span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Open Job</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n<ng-template #noJobs>\r\n  <h2 class=\"page-header\">No Current Jobs</h2>\r\n  <p>If this is incorrect, try refreshing the page.</p>\r\n</ng-template>\r\n\r\n<!--                                                UNUSED MARKUP                                                                -->\r\n<!-- <h4>Click To View Details</h4> -->\r\n<!-- <div class=\"panel panel-primary\" *ngFor=\"let currentJob of currentJobs; let i = index\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">Job # {{currentJob.jobID}}</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <h4>Customer:</h4><p>{{currentJob.customerName}}</p>\r\n      <hr>\r\n      <h4>Budget:</h4>\r\n      <div class=\"progress progress-striped active\">\r\n        <div id=\"costProgress\" class=\"progress-bar progress-bar-info\" role=\"progressbar\" [attr.aria-valuenow]=\"jobCosts[i]\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"bidCosts[i]\" [ngStyle]=\"{'min-width': '2em', 'width': (jobCosts[i]/bidCosts[i])*100+ '%'}\">\r\n          {{jobCosts[i]/bidCosts[i] | percent:'1.0-0'}}\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <h4>Revenue Collected:</h4>\r\n      <div class=\"progress progress-striped active\">\r\n        <div id=\"revenueProgress\" class=\"progress-bar progress-bar-info\" role=\"progressbar\" [attr.aria-valuenow]=\"currentJob.jobRevenue\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"currentJob.bidPrice\" [ngStyle]=\"{'min-width': '2em', 'width': (currentJob.jobRevenue/currentJob.bidPrice)*100+ '%'}\">\r\n          {{currentJob.jobRevenue/currentJob.bidPrice | percent:'1.0-0'}}\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <button type=\"button\" class=\"btn btn-primary btn-lg\" [routerLink]=\"['/jobs/'+currentJob.jobID]\"><span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Open Job</button>\r\n    </div>\r\n  </div> -->\r\n<!-- <ul class=\"list-group\" *ngFor=\"let currentJob of currentJobs; let i = index\" [routerLink]=\"['/jobs/'+currentJob.jobID]\">\r\n    <h3 class=\"page-header\">Job # {{currentJob.jobID}}</h3>\r\n    <h4>Click To View Details</h4>\r\n    <li class=\"list-group-item\"><b>Customer:</b> {{currentJob.customerName}}</li>\r\n    <li class=\"list-group-item\"><b>Budget:</b>\r\n      <div class=\"progress\">\r\n        <div id=\"costProgress\" class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"jobCosts[i]\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"bidCosts[i]\" [ngStyle]=\"{'min-width': '2em', 'width': (jobCosts[i]/bidCosts[i])*100+ '%'}\">\r\n          {{jobCosts[i]/bidCosts[i] | percent:'1.0-0'}}\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <li class=\"list-group-item\"><b>Revenue Collected:</b>\r\n      <div class=\"progress\">\r\n        <div id=\"revenueProgress\" class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"currentJob.jobRevenue\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"currentJob.bidPrice\" [ngStyle]=\"{'min-width': '2em', 'width': (currentJob.jobRevenue/currentJob.bidPrice)*100+ '%'}\">\r\n          {{currentJob.jobRevenue/currentJob.bidPrice | percent:'1.0-0'}}\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul> -->\r\n<!-- </ng-container>\r\n<ng-template #noJobs>\r\n  <h2 class=\"page-header\">No Current Jobs</h2>\r\n  <p>If this is incorrect, try refreshing the page.</p>\r\n</ng-template> -->"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bid_service__ = __webpack_require__("../../../../../src/app/services/bid.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(jobService, bidService) {
        this.jobService = jobService;
        this.bidService = bidService;
        this.jobs = [];
        this.currentJobs = [];
        this.jobCosts = [];
        this.bidCosts = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.jobService.getCurrentJobs().subscribe((jobs) => {
        //   this.currentJobs = jobs.jobs;
        //   this.currentJobsLength = jobs.jobs.length;
        var _this = this;
        //   jobs.jobs.forEach((currentJob) => {
        //     this.jobService.getCurrentJobMaterialsCost(currentJob.jobID).subscribe(cost => {
        //       this.jobCosts.push(cost[0].jobMaterialCost + currentJob.jobLabor);
        //     });
        //     this.bidService.getCurrentBidMaterialsCost(currentJob.jobID).subscribe(cost => {
        //       this.bidCosts.push(cost[0].bidMaterialCost + currentJob.bidLabor);
        //     });
        //   });
        // });
        this.jobService.getCurrentJobsCosts().subscribe(function (jobs) {
            _this.jobs = jobs.jobs;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_job_service__["a" /* JobService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bid_service__["a" /* BidService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/inquiries/inquiries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/inquiries/inquiries.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pull-left\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Go Home</button>\r\n</div>\r\n\r\n<ng-container *ngIf=\"inquiriesLength!=0; else noInquiries\">\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">Inquiries</h2>\r\n    <h4>Click To View Details</h4>\r\n    <table *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered table-hover\">\r\n      <thead>\r\n        <tr class=\"active\">\r\n          <th class=\"hidden-xs hidden-sm\">ID</th>\r\n          <th>Customer</th>\r\n          <th>Status</th>\r\n          <th>Received Date</th>\r\n          <th class=\"hidden-xs hidden-sm\">Accepted/Declined Date</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let inquiry of inquiries;\" id=\"{{inquiry.inquiryID}}\" [routerLink]=\"['/inquiries/'+inquiry.inquiryID]\">\r\n          <td class=\"hidden-xs hidden-sm\">{{inquiry.inquiryID}}</td>\r\n          <td>{{inquiry.customerName}}</td>\r\n          <td>{{inquiry.inquiryStatus}}</td>\r\n          <td>{{inquiry.receivedDate | date: 'MM/dd/yyyy'}}</td>\r\n          <td *ngIf=\"inquiry.inquiryStatus != 'PENDING'\" class=\"hidden-xs hidden-sm\">{{inquiry.endDate | date: 'MM/dd/yyyy'}}</td>\r\n          <td *ngIf=\"inquiry.inquiryStatus == 'PENDING'\" class=\"hidden-xs hidden-sm\">N/A</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ng-container>\r\n<ng-template #noInquiries>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">No Inquiries</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </div>\r\n</ng-template>\r\n  \r\n<!-- <ng-container *ngIf=\"pendingLength!=0 || acceptedLength!=0 || declinedLength!=0; else noInquiries\">\r\n  <ng-container *ngIf=\"pendingLength!=0; else noPendingInquiries\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">Pending Inquiries</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Received Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let pendingInquiry of pendingInquiries;\" [routerLink]=\"['/inquiries/'+pendingInquiry.inquiryID]\">\r\n            <td>{{pendingInquiry.inquiryID}}</td>\r\n            <td>{{pendingInquiry.receivedDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noPendingInquiries>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">No Pending Inquiries</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-container *ngIf=\"acceptedLength!=0; else noAcceptedInquiries\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">Accepted Inquiries</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Accepted Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let acceptedInquiry of acceptedInquiries;\" [routerLink]=\"['/inquiries/'+acceptedInquiry.inquiryID]\">\r\n            <td>{{acceptedInquiry.inquiryID}}</td>\r\n            <td>{{acceptedInquiry.endDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>  \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noAcceptedInquiries>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">No Accepted Inquiries</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-container *ngIf=\"declinedLength!=0; else noDeclinedInquiries\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">Declined Inquiries</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Declined Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let declinedInquiry of declinedInquiries;\" [routerLink]=\"['/inquiries/'+declinedInquiry.inquiryID]\">\r\n            <td>{{declinedInquiry.inquiryID}}</td>\r\n            <td>{{declinedInquiry.endDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>  \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noDeclinedInquiries>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">No Declined Inquiries</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n</ng-container>\r\n<ng-template #noInquiries>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">No Inquiries</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </div>\r\n</ng-template> -->"

/***/ }),

/***/ "../../../../../src/app/components/inquiries/inquiries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InquiriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_inquiry_service__ = __webpack_require__("../../../../../src/app/services/inquiry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { DataTable, DataTableResource } from 'angular-4-data-table';
//declare var $;
var InquiriesComponent = (function () {
    function InquiriesComponent(inquiryService) {
        this.inquiryService = inquiryService;
        // inquiriesResource:any;
        // inquiriesCount = 0;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.displayTable = false;
    }
    InquiriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inquiryService.getAllInquiries().subscribe(function (inquiries) {
            _this.inquiries = inquiries.inquiries;
            _this.inquiriesLength = inquiries.inquiries.length;
            //this.inquiriesResource = new DataTableResource(this.inquiries);
            _this.filterInquiries(inquiries);
            _this.setupDataTable();
        });
        // $(document).ready(function() {
        //   $('#example').DataTable();
        // });
    };
    InquiriesComponent.prototype.ngAfterContentInit = function () {
        this.applyTableColor();
    };
    InquiriesComponent.prototype.applyTableColor = function () {
        this.inquiryService.getAllInquiries().subscribe(function (inquiries) {
            inquiries.inquiries.forEach(function (inquiry) {
                var id = inquiry.inquiryID;
                var status = inquiry.inquiryStatus;
                if (status == 'PENDING') {
                    document.getElementById(id).classList.add('info');
                }
                else if (status == 'DECLINED') {
                    document.getElementById(id).classList.add('danger');
                }
                else if (status == 'ACCEPTED') {
                    document.getElementById(id).classList.add('success');
                }
            });
        });
    };
    InquiriesComponent.prototype.filterInquiries = function (inquiries) {
        this.pendingInquiries = inquiries.pendingInquiries;
        this.pendingLength = inquiries.pendingInquiries.length;
        this.acceptedInquiries = inquiries.acceptedInquiries;
        this.acceptedLength = inquiries.acceptedInquiries.length;
        this.declinedInquiries = inquiries.declinedInquiries;
        this.declinedLength = inquiries.declinedInquiries.length;
    };
    InquiriesComponent.prototype.setupDataTable = function () {
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
        this.dtTrigger.next();
        this.displayTable = true;
    };
    return InquiriesComponent;
}());
InquiriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inquiries',
        template: __webpack_require__("../../../../../src/app/components/inquiries/inquiries.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/inquiries/inquiries.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_inquiry_service__["a" /* InquiryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_inquiry_service__["a" /* InquiryService */]) === "function" && _a || Object])
], InquiriesComponent);

var _a;
//# sourceMappingURL=inquiries.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/inquiry/inquiry.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-heading:hover {background-color: #1863e6 !important;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/inquiry/inquiry.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-default pull-left\" [routerLink]=\"['/inquiries']\">\r\n  <span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Go To Inquiries</button>\r\n<button *ngIf=\"inquiry[0].inquiryStatus == 'ACCEPTED' && inquiry[0];\" [routerLink]=\"['/bids', inquiry[0].associatedBidID]\"\r\n  class=\"btn btn-primary pull-right\">\r\n  <span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Go To Bid</button>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <ng-container *ngIf=\"inquiry[0]; else noInquiry\">\r\n    <h2 class=\"page-header\">Inquiry #{{inquiry[0].inquiryID}}</h2>\r\n    <h4>Click To View Details</h4>\r\n    <div class=\"panel-group\" id=\"accordion\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"'#inquiryAccordion\">\r\n          <h3>Inquiry Details</h3>\r\n        </div>\r\n        <div id=\"inquiryAccordion\" class=\"panel-body panel-collapse collapse in\" style=\"word-break:break-all\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Received Date</th>\r\n                <th *ngIf=\"inquiry[0].inquiryStatus == 'ACCEPTED'\">Accepted Date</th>\r\n                <th *ngIf=\"inquiry[0].inquiryStatus == 'DECLINED'\">Declined Date</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>{{inquiry[0].receivedDate | date: 'MM/dd/yyyy'}}</td>\r\n                <td *ngIf=\"inquiry[0].inquiryStatus == 'ACCEPTED'\">{{inquiry[0].endDate | date: 'MM/dd/yyyy'}}</td>\r\n                <td *ngIf=\"inquiry[0].inquiryStatus == 'DECLINED'\">{{inquiry[0].endDate | date: 'MM/dd/yyyy'}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Description</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>{{inquiry[0].description}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <hr>\r\n          <button (click)=\"onClickUpdate()\" class=\"btn btn-info\" data-toggle=\"modal\" href=\"#update-modal\">\r\n            <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> Update Description</button>\r\n          <button *ngIf=\"status == 'PENDING'\" class=\"btn btn-warning\" data-toggle=\"modal\" href='#decline-modal'>\r\n            <span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Decline Inquiry</button>\r\n          <button *ngIf=\"status == 'DECLINED'\" class=\"btn btn-warning\" data-toggle=\"modal\" href='#reopen-modal'>\r\n            <span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Re-Open Inquiry</button>\r\n          <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-modal'>\r\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete Inquiry</button>\r\n          <hr *ngIf=\"status == 'PENDING'\">\r\n          <button *ngIf=\"status == 'PENDING'\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#create-bid-modal'>\r\n            <span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Create Bid</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"'#customerAccordion\">\r\n          <h3>Customer Details</h3>\r\n        </div>\r\n        <div id=\"customerAccordion\" class=\"panel-body panel-collapse collapse\" style=\"word-break:break-all\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Name</th>\r\n                <th>Address</th>\r\n                <th>City</th>\r\n                <th class=\"hidden-xs hidden-sm\">State</th>\r\n                <th class=\"hidden-xs hidden-sm\">ZIP</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>{{inquiry[0].customerName}}</td>\r\n                <td>{{inquiry[0].customerAddress}}</td>\r\n                <td>{{inquiry[0].customerCity}}</td>\r\n                <td class=\"hidden-xs hidden-sm\">{{inquiry[0].customerState}}</td>\r\n                <td class=\"hidden-xs hidden-sm\">{{inquiry[0].customerZIP}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <hr>\r\n          <button type=\"button\" class=\"btn btn-primary btn-lg\" [routerLink]=\"['/customers/'+inquiry[0].customerID]\">\r\n            <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Open Customer</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noInquiry>\r\n    <h2 class=\"page-header\">No Inquiries</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </ng-template>\r\n</div>\r\n\r\n<!--                Delete Popup                -->\r\n<div class=\"modal fade\" id=\"delete-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete this inquiry?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Re-Open Popup                -->\r\n<div class=\"modal fade\" id=\"reopen-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to re-open this inquiry?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onReopen()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Decline Popup                -->\r\n<div class=\"modal fade\" id=\"decline-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to decline this inquiry?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDecline()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Update Popup                -->\r\n<div class=\"modal fade\" id=\"update-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Update Inquiry</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f=\"ngForm\" (submit)=\"onUpdate()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Description</label>\r\n            <textarea required maxlength=\"950\" #inquiryDescription=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"description\"\r\n              name=\"description\" placeholder=\"Description\"></textarea> {{description.length}}/950\r\n            <div *ngIf=\"inquiryDescription.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"inquiryDescription.errors.required\">\r\n                *Description is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\r\n          <button type=\"button\" (click)=\"clearDescription()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Create Bid Popup                -->\r\n<div class=\"modal fade\" id=\"create-bid-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Create Bid</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f2=\"ngForm\" (submit)=\"onCreate()\">\r\n          <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\">\r\n              <h3 class=\"panel-title\">Enter Costs</h3>\r\n            </div>\r\n            <div class=\"panel-body\" style=\"word-break:break-all\">\r\n              <h4>Labor Cost</h4>\r\n              <table class=\"table\" *ngIf=\"labors[0] != null\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Select Role</th>\r\n                    <th>Enter Hours</th>\r\n                    <th>Add Role</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>\r\n                      <select (change)=\"onChangeLabor($event.target.value)\" class=\"form-control\">\r\n                        <option></option>\r\n                        <option [value]=\"i\" *ngFor=\"let labor of labors; let i = index;\">{{labor.roleName}}</option>\r\n                      </select>\r\n                    </td>\r\n                    <td>\r\n                      <input required mask=\"00000\" #hours=\"ngModel\" type=\"number\" [(ngModel)]=\"laborHours\" name=\"laborHours\" placeholder=\"Labor Hours\"\r\n                        class=\"form-control\" aria-describedby=\"hours-addon\">\r\n                    </td>\r\n                    <td>\r\n                      <button [disabled]=\"hours.invalid\" (click)=\"onAddLabor()\" type=\"button\" class=\"btn btn-success\">\r\n                        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr *ngIf=\"hours.invalid\">\r\n                    <td></td>\r\n                    <td style=\"color:#ff0000\">\r\n                      <div *ngIf=\"hours.errors.required\">\r\n                        *Hours are required\r\n                      </div>\r\n                    </td>\r\n                    <td></td>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n              <label style=\"color:#ff0000\" *ngIf=\"selectedLabors.length != 0;\">Click To Remove</label>\r\n              <table class=\"table table-bordered table-hover\" *ngIf=\"selectedLabors.length != 0;\">\r\n                <thead>\r\n                  <tr class=\"active\">\r\n                    <th>Role</th>\r\n                    <th>Estimated Cost</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let selectedLabor of selectedLabors; let i = index\" (click)=\"onRemoveLabor(selectedLabor, i)\">\r\n                    <td>{{selectedLabor.roleName}}</td>\r\n                    <td>{{selectedLabor.laborHours*selectedLabor.roleWage | currency:'USD':true}}\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr class=\"active\">\r\n                    <th>Total Labor Cost</th>\r\n                    <th>{{totalLaborPrice | currency: 'USD':true}}</th>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n            <div class=\"panel-body\" style=\"word-break:break-all\">\r\n              <h4>Material Cost</h4>\r\n              <table class=\"table\" *ngIf=\"materials[0] != null\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Select Material</th>\r\n                    <th>Enter Linear Feet</th>\r\n                    <th>Add Material</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>\r\n                      <select (change)=\"onChangeMaterial($event.target.value)\" class=\"form-control\">\r\n                        <option></option>\r\n                        <option [value]=\"i\" *ngFor=\"let material of materials; let i = index;\">{{material.materialName}}</option>\r\n                      </select>\r\n                    </td>\r\n                    <td>\r\n                      <input required mask=\"0000000\" #feet=\"ngModel\" type=\"number\" [(ngModel)]=\"linearFeet\" name=\"linearFeet\" placeholder=\"Linear Feet\"\r\n                        class=\"form-control\" required>\r\n                    </td>\r\n                    <td>\r\n                      <button [disabled]=\"feet.invalid\" (click)=\"onAddMaterial()\" type=\"button\" class=\"btn btn-success\">\r\n                        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr *ngIf=\"feet.invalid\">\r\n                    <td *ngIf=\"feet.errors.required\"></td>\r\n                    <td *ngIf=\"feet.errors.required\" style=\"color:#ff0000\">*Linear feet are required</td>\r\n                    <td *ngIf=\"feet.errors.required\"></td>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n              <label *ngIf=\"selectedMaterials1.length != 0;\" style=\"color:#ff0000\"></label>\r\n              <table class=\"table table-bordered table-hover\" *ngIf=\"selectedMaterials1.length != 0;\">\r\n                <thead>\r\n                  <tr class=\"active\">\r\n                    <th>Name</th>\r\n                    <th>Estimated Cost</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let selectedMaterial of selectedMaterials1; let i = index\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">\r\n                    <td>{{selectedMaterial.materialName}}</td>\r\n                    <td>{{selectedMaterial.linearFeet*selectedMaterial.pricePerUnit/selectedMaterial.linearFeetCoverage | currency:\r\n                      'USD':true}}\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr class=\"active\">\r\n                    <th>Total Material Cost</th>\r\n                    <th>{{totalMaterialPrice | currency: 'USD':true}}</th>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n              <hr>\r\n              <h4>Total Cost: {{totalLaborPrice + totalMaterialPrice | currency: 'USD':true}}</h4>\r\n            </div>\r\n          </div>\r\n          <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\">\r\n              <h3 class=\"panel-title\">Enter Desired % Profit Margin</h3>\r\n            </div>\r\n            <div class=\"panel-body\" style=\"word-break:break-all\">\r\n              <div class=\"form-group\">\r\n                <input required mask=\"00\" #profitMargin=\"ngModel\" type=\"number\" [(ngModel)]=\"margin\" name=\"margin\" placeholder=\"Margin\" class=\"form-control\"\r\n                  required />\r\n                <div *ngIf=\"profitMargin.invalid\" style=\"color:#ff0000\">\r\n                  <div *ngIf=\"profitMargin.errors.required\">\r\n                    *Margin is required\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <h4>Recommended Bid: {{(1 + (margin/100))*(totalMaterialPrice + totalLaborPrice) | currency: 'USD':true}}</h4>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"f2.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Create</button>\r\n          <button type=\"button\" (click)=\"onClear()\" class=\"btn btn-warning\" (click)=\"onClear()\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button (click)=\"onClear()\" type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--                                                    UNUSED MARKUP                                                         -->\r\n<!-- <div class=\"dropdown\">\r\n                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                  <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add Materials\r\n                  <span class=\"caret\"></span>\r\n                </button>\r\n                <ul class=\"dropdown-menu\">\r\n                  <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\r\n                    <li *ngFor=\"let material of materials; let i = index;\">\r\n                      <a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a>\r\n                    </li>\r\n                  </ng-container>\r\n                  <ng-template #noMaterials>\r\n                    <li>\r\n                      <a>No more materials</a>\r\n                    </li>\r\n                  </ng-template>\r\n                </ul>\r\n              </div> -->\r\n<!-- <table class=\"table table-striped table-hover\">\r\n                <thead *ngIf=\"selectedMaterials[0] != null;\">\r\n                  <tr>\r\n                    <th>Name</th>\r\n                    <th>Linear Feet</th>\r\n                    <th>Price</th>\r\n                    <th>Remove</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index\">\r\n                    <td>{{selectedMaterial.materialName}}</td>\r\n                    <td>\r\n                      <input type=\"text\" [(ngModel)]=\"selectedMaterial.linearFeet\" name=\"linearFeet\" placeholder=\"Linear Feet\" class=\"form-control\" required>\r\n                    </td>\r\n                    <td>{{selectedMaterial.linearFeet*selectedMaterial.pricePerLinearFoot || 0}}</td>\r\n                    <td>\r\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">\r\n                        <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table> -->\r\n\r\n<!-- <table class=\"table table-bordered table-hover\">\r\n            <tfoot>\r\n              <tr class=\"info\">\r\n                <th>Total Cost</th>\r\n                <th>{{totalMaterialPrice + bidLabor | currency: 'USD':true}}</th>\r\n              </tr>\r\n            </tfoot>\r\n          </table> -->\r\n\r\n<!-- <div class=\"form-group\">\r\n                <input type=\"number\" [(ngModel)]=\"bidLabor\" name=\"bidLabor\" placeholder=\"Labor Cost\" class=\"form-control\" required>\r\n              </div> -->\r\n\r\n<!-- <button (click)=\"onAddMaterial(selectedMaterial, i)\" type=\"button\" class=\"btn btn-success\">\r\n                        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n                      </button> -->\r\n\r\n<!-- <select class=\"form-control\">\r\n                        <option></option>\r\n                        <option *ngFor=\"let material of materials; let i = index;\" (click)=\"onSelectMaterial(material, i)\">{{material.materialName}}</option>\r\n                      </select> -->"

/***/ }),

/***/ "../../../../../src/app/components/inquiry/inquiry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InquiryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_inquiry_service__ = __webpack_require__("../../../../../src/app/services/inquiry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_material_service__ = __webpack_require__("../../../../../src/app/services/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_labor_service__ = __webpack_require__("../../../../../src/app/services/labor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_bid_service__ = __webpack_require__("../../../../../src/app/services/bid.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InquiryComponent = (function () {
    function InquiryComponent(router, route, inquiryService, materialService, laborService, bidService) {
        this.router = router;
        this.route = route;
        this.inquiryService = inquiryService;
        this.materialService = materialService;
        this.laborService = laborService;
        this.bidService = bidService;
        /** INQUIRY **/
        this.id = null;
        this.createdDate = '';
        this.status = '';
        this.description = '';
        /** BID **/
        this.margin = 0;
        /** LABOR **/
        this.bidPrice = 0;
        this.selectedLabors = [];
        this.laborHours = 0;
        this.laborID = null;
        this.totalLaborPrice = 0;
        this.materialID = null;
        this.linearFeet = 0;
        this.totalMaterialPrice = 0;
        this.selectedMaterials1 = [];
    }
    InquiryComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getInquiry();
        this.getMaterials();
        this.getLabor();
    };
    /************************************ INQUIRY *********************************/
    InquiryComponent.prototype.getInquiry = function () {
        var _this = this;
        this.inquiryService.getInquiryById(this.id).subscribe(function (inquiry) {
            _this.inquiry = inquiry;
            _this.status = inquiry[0].inquiryStatus;
        });
    };
    InquiryComponent.prototype.onReopen = function () {
        var _this = this;
        var updatedInquiry = {
            inquiryID: this.id,
            inquiryStatus: "PENDING",
            removeEndDate: false
        };
        this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
            }
            else {
                console.log(data.msg);
            }
        });
    };
    InquiryComponent.prototype.onDecline = function () {
        var _this = this;
        var updatedInquiry = {
            inquiryID: this.id,
            inquiryStatus: "DECLINED",
            removeEndDate: false
        };
        this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
            }
            else {
                console.log(data.msg);
            }
        });
    };
    InquiryComponent.prototype.acceptInquiry = function (updatedInquiry) {
        this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    InquiryComponent.prototype.clearDescription = function () {
        this.description = '';
    };
    InquiryComponent.prototype.onClickUpdate = function () {
        this.description = this.inquiry[0].description;
    };
    InquiryComponent.prototype.onUpdate = function () {
        var _this = this;
        var updatedInquiry = {
            inquiryID: this.id,
            description: this.description
        };
        this.inquiryService.updateInquiry(updatedInquiry).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.clearDescription();
                $('#update-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
        this.ngOnInit();
    };
    InquiryComponent.prototype.onDelete = function () {
        var _this = this;
        this.inquiryService.deleteInquiry(this.id).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.router.navigate(['/inquiries']);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    /************************************ BID *********************************/
    InquiryComponent.prototype.onCreate = function () {
        var updatedInquiry = {
            inquiryID: this.id,
            inquiryStatus: "ACCEPTED",
            removeEndDate: false
        };
        var newBid = {
            inquiryID: this.id,
            bidPrice: (1 + (this.margin / 100)) * (this.totalMaterialPrice + this.totalLaborPrice)
        };
        this.createBid(newBid);
        this.acceptInquiry(updatedInquiry);
        this.createMaterials();
        this.createLabor();
        $('#create-bid-modal').modal('hide');
        this.onClear();
        this.router.navigate(["/bids"]);
    };
    InquiryComponent.prototype.createBid = function (newBid) {
        this.bidService.createBid(newBid).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    /************************************ LABOR *********************************/
    InquiryComponent.prototype.getLabor = function () {
        var _this = this;
        this.laborService.getAllLabors().subscribe(function (labors) {
            _this.labors = labors.labors;
        });
    };
    InquiryComponent.prototype.createLabor = function () {
        var _this = this;
        this.selectedLabors.forEach(function (selectedLabor) {
            _this.bidService.createBidLabor(selectedLabor).subscribe(function (data) {
                if (data.success) {
                    console.log(data.msg);
                }
                else {
                    console.log(data.msg);
                }
            });
        });
    };
    InquiryComponent.prototype.onAddLabor = function () {
        var selectedLabor = {
            roleID: this.labors[this.laborID].roleID,
            roleName: this.labors[this.laborID].roleName,
            roleWage: this.labors[this.laborID].roleWage,
            laborHours: this.laborHours
        };
        this.totalLaborPrice += (selectedLabor.roleWage * this.laborHours);
        this.selectedLabors.push(selectedLabor);
        this.labors.splice(this.laborID, 1);
        this.labor = null;
        this.laborHours = 0;
    };
    InquiryComponent.prototype.onRemoveLabor = function (labor, id) {
        this.totalLaborPrice -= (labor.laborHours * labor.roleWage);
        this.selectedLabors.splice(id, 1);
        this.labors.push(labor);
    };
    InquiryComponent.prototype.onChangeLabor = function (id) {
        this.laborID = id;
        // console.log(this.laborID);
    };
    /************************************ MATERIALS *********************************/
    InquiryComponent.prototype.getMaterials = function () {
        var _this = this;
        this.materialService.getAllMaterials().subscribe(function (materials) {
            _this.materials = materials.materials;
        });
    };
    InquiryComponent.prototype.createMaterials = function () {
        var _this = this;
        this.selectedMaterials1.forEach(function (selectedMaterial) {
            console.log(selectedMaterial);
            _this.bidService.createBidMaterial(selectedMaterial).subscribe(function (data) {
                if (data.success) {
                    console.log(data.msg);
                }
                else {
                    console.log(data.msg);
                }
            });
        });
    };
    InquiryComponent.prototype.onRemoveMaterial = function (material, id) {
        this.totalMaterialPrice -= ((material.pricePerUnit / material.linearFeetCoverage) * material.linearFeet);
        this.selectedMaterials1.splice(id, 1);
        this.materials.push(material);
    };
    InquiryComponent.prototype.onAddMaterial = function () {
        var selectedMaterial = {
            materialID: this.materials[this.materialID].materialID,
            materialName: this.materials[this.materialID].materialName,
            pricePerUnit: this.materials[this.materialID].pricePerUnit,
            linearFeetCoverage: this.materials[this.materialID].linearFeetCoverage,
            linearFeet: this.linearFeet
        };
        this.totalMaterialPrice += (selectedMaterial.pricePerUnit / selectedMaterial.linearFeetCoverage * this.linearFeet);
        this.selectedMaterials1.push(selectedMaterial);
        this.materials.splice(this.materialID, 1);
        this.material = null;
        this.linearFeet = 0;
    };
    InquiryComponent.prototype.onChangeMaterial = function (id) {
        // console.log(id);
        this.materialID = id;
    };
    InquiryComponent.prototype.onClear = function () {
        var _this = this;
        this.selectedMaterials1.forEach(function (selectedMaterial) {
            _this.materials.push(selectedMaterial);
        });
        this.selectedLabors.forEach(function (selectedLabor) {
            _this.labors.push(selectedLabor);
        });
        this.selectedLabors = [];
        this.totalLaborPrice = 0;
        this.selectedMaterials1 = [];
        this.totalMaterialPrice = 0;
        this.laborHours = 0;
        this.margin = 0;
        //this.ngOnInit();
    };
    return InquiryComponent;
}());
InquiryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inquiry',
        template: __webpack_require__("../../../../../src/app/components/inquiry/inquiry.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/inquiry/inquiry.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_inquiry_service__["a" /* InquiryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_inquiry_service__["a" /* InquiryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_material_service__["a" /* MaterialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_material_service__["a" /* MaterialService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_labor_service__["a" /* LaborService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_labor_service__["a" /* LaborService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_bid_service__["a" /* BidService */]) === "function" && _f || Object])
], InquiryComponent);

var _a, _b, _c, _d, _e, _f;
/****************************************** UNUSED CODE *******************************************/
// onAddMaterial(material, id){
//   this.selectedMaterials.push(material);
//   this.materials.splice(id, 1);
// }
// onSelectMaterial(material, id) {
//   // console.log(material);
//   this.material = material;
//   this.materialID = id;
// }
// this.selectedMaterials.forEach(selectedMaterial => {
//   console.log(selectedMaterial);
//   this.bidService.createBidMaterial(selectedMaterial).subscribe((data) => {
//     if(data.success){
//       console.log(data.msg);
//     } else{
//       console.log(data.msg);
//     }
//   });
// });
// onRemoveMaterial(material, id){
//   this.selectedMaterials.splice(id, 1);
//   this.materials.push(material);
// }
// onClear(){
//   this.selectedMaterials.forEach(selectedMaterial => {
//     this.materials.push(selectedMaterial);
//   });
//   this.selectedMaterials = [];
//   //this.ngOnInit();
// }
// onAddMaterial() {
//   let selectedMaterial = {
//     materialID: this.material.materialID,
//     materialName: this.material.materialName,
//     pricePerLinearFoot: this.material.pricePerLinearFoot,
//     linearFeet: this.linearFeet
//   };
//   this.totalMaterialPrice += (selectedMaterial.pricePerLinearFoot * this.linearFeet);
//   this.selectedMaterials1.push(selectedMaterial);
//   this.materials.splice(this.materialID, 1);
//   this.material = null;
//   this.linearFeet = 0;
// }
// totalCost:number = 0;
// selectedMaterials:SelectedMaterial[] = []; 
//# sourceMappingURL=inquiry.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/job/job.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-toggle=\"collapse\"].collapsed .if-not-collapsed {\r\n    display: none;\r\n  }\r\n  [data-toggle=\"collapse\"]:not(.collapsed) .if-collapsed {\r\n    display: none;\r\n  }\r\n  .panel-heading:hover {background-color: #1863e6 !important;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/job/job.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-default pull-left\" [routerLink]=\"['/jobs']\">\r\n  <span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Go To Jobs</button>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <ng-container *ngIf=\"job[0]; else noJob\">\r\n    <h2 class=\"page-header\">Job #{{job[0].jobID}}</h2>\r\n    <h4>Click To View Details</h4>\r\n    <div class=\"panel-group\" id=\"accordion\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"'#jobAccordion\">\r\n          <h3>Job Details</h3>\r\n        </div>\r\n        <div id=\"jobAccordion\" class=\"panel-body panel-collapse collapse in\" style=\"word-break:break-all\">\r\n          <h4 class=\"page-header\" style=\"margin-top: 0\">General</h4>\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Expected Revenue</th>\r\n                <th>Created Date</th>\r\n                <th *ngIf=\"job[0].jobStatus == 'COMPLETED'\">Completion Date</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>{{job[0].bidPrice + totalChangeTable | currency: 'USD':true}}</td>\r\n                <td>{{job[0].createdDate | date: 'MM/dd/yyyy'}}</td>\r\n                <td *ngIf=\"job[0].jobStatus == 'COMPLETED'\">{{job[0].endDate | date: 'MM/dd/yyyy'}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n          <h4 class=\"page-header\">Change Orders\r\n            <button class=\"btn btn-default btn-sm collapsed\" data-toggle=\"collapse\" data-target='#change-collapse'>\r\n              <span class=\"if-collapsed\">Show</span>\r\n              <span class=\"if-not-collapsed\">Hide</span>\r\n            </button>\r\n          </h4>\r\n          <div class=\"collapse\" id=\"change-collapse\">\r\n            <div *ngIf=\"changeOrders.length > 0;\">\r\n              <label>Click To Update Or Delete</label>\r\n              <table class=\"table table-bordered table-hover\">\r\n                <thead>\r\n                  <tr class=\"active\">\r\n                    <th>Amount</th>\r\n                    <th>Date</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let changeOrder of changeOrders; let i = index\" data-toggle=\"modal\" (click)=\"onClickUpdateChangeOrder(changeOrder.changeID, i)\"\r\n                    href='#update-change-modal'>\r\n                    <td>{{changeOrder.changeAmount | currency: 'USD':true}}</td>\r\n                    <td>{{changeOrder.changeDate | date: 'MM/dd/yyyy'}}</td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr class=\"active\">\r\n                    <th>{{totalChangeTable | currency: 'USD':true}}</th>\r\n                    <th></th>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n            <button (click)=\"onClearChangeOrder()\" class=\"btn btn-info\" data-toggle=\"modal\" href='#create-change-modal'>\r\n              <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span> Create Change Order</button>\r\n          </div>\r\n\r\n          <h4 class=\"page-header\">Revenue Collected\r\n            <button class=\"btn btn-default btn-sm collapsed\" data-toggle=\"collapse\" data-target='#revenue-collapse'>\r\n              <span class=\"if-collapsed\">Show</span>\r\n              <span class=\"if-not-collapsed\">Hide</span>\r\n            </button>\r\n          </h4>\r\n          <div class=\"collapse\" id=\"revenue-collapse\">\r\n            <div *ngIf=\"revenues.length > 0;\">\r\n              <label>Click To Update Or Delete</label>\r\n              <table class=\"table table-bordered table-hover\">\r\n                <thead>\r\n                  <tr class=\"active\">\r\n                    <th>Amount</th>\r\n                    <th>Date</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let revenue of revenues; let i = index\" data-toggle=\"modal\" (click)=\"onClickUpdateRevenue(revenue.revenueID, i)\"\r\n                    href='#update-revenue-modal'>\r\n                    <td>{{revenue.revenueAmount | currency: 'USD':true}}</td>\r\n                    <td>{{revenue.revenueDate | date: 'MM/dd/yyyy'}}</td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr class=\"active\">\r\n                    <th>{{totalRevenueTable | currency: 'USD':true}}</th>\r\n                    <th></th>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n            <button (click)=\"onClearJobRevenue()\" class=\"btn btn-info\" data-toggle=\"modal\" href='#create-revenue-modal'>\r\n              <span class=\"glyphicon glyphicon-usd\" aria-hidden=\"true\"></span> Add Revenue</button>\r\n          </div>\r\n\r\n          <h4 class=\"page-header\">Labor Cost\r\n            <button class=\"btn btn-default btn-sm collapsed\" data-toggle=\"collapse\" data-target='#labor-collapse'>\r\n              <span class=\"if-collapsed\">Show</span>\r\n              <span class=\"if-not-collapsed\">Hide</span>\r\n            </button>\r\n          </h4>\r\n          <div class=\"collapse\" id=\"labor-collapse\">\r\n            <div *ngIf=\"jobLabors.length > 0;\">\r\n              <label>Click To Update Or Delete</label>\r\n              <table class=\"table table-bordered table-hover\">\r\n                <thead>\r\n                  <tr class=\"active\">\r\n                    <th>Role</th>\r\n                    <th>Date</th>\r\n                    <th class=\"hidden-xs hidden-sm\">Hours</th>\r\n                    <th class=\"hidden-xs hidden-sm\">Wage</th>\r\n                    <th>Total</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let jobLabor of jobLabors; let i = index\" data-toggle=\"modal\" (click)=\"onClickUpdateLabor(jobLabor.laborID, i)\"\r\n                    href='#update-labor-modal'>\r\n                    <td>{{jobLabor.roleName}}</td>\r\n                    <td>{{jobLabor.laborDate | date: 'MM/dd/yyyy'}}</td>\r\n                    <td class=\"hidden-xs hidden-sm\">{{jobLabor.laborHours}}</td>\r\n                    <td class=\"hidden-xs hidden-sm\">{{jobLabor.roleWage | currency: 'USD':true}}</td>\r\n                    <td>{{jobLabor.roleWage*jobLabor.laborHours | currency: 'USD':true}}</td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr class=\"active\">\r\n                    <th>Grand Total</th>\r\n                    <th></th>\r\n                    <th class=\"hidden-xs hidden-sm\">{{totalHoursTable}}</th>\r\n                    <th class=\"hidden-xs hidden-sm\"></th>\r\n                    <th>{{totalLaborPriceTable | currency: 'USD':true}}</th>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n            <button (click)=\"onClearJobLabor()\" class=\"btn btn-info\" data-toggle=\"modal\" href='#create-labor-modal'>\r\n              <span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Add Labor</button>\r\n          </div>\r\n\r\n          <h4 class=\"page-header\">Materials Cost\r\n            <button class=\"btn btn-default btn-sm collapsed\" data-toggle=\"collapse\" data-target='#materials-collapse'>\r\n              <span class=\"if-collapsed\">Show</span>\r\n              <span class=\"if-not-collapsed\">Hide</span>\r\n            </button>\r\n          </h4>\r\n          <div class=\"collapse\" id=\"materials-collapse\">\r\n            <div *ngIf=\"jobMaterials.length > 0;\">\r\n              <label>Click To Update Or Delete</label>\r\n              <table class=\"table table-bordered table-hover\">\r\n                <thead>\r\n                  <tr class=\"active\">\r\n                    <th>Material</th>\r\n                    <th>Linear Feet</th>\r\n                    <th class=\"hidden-xs hidden-sm\">Price Per Unit</th>\r\n                    <th class=\"hidden-xs hidden-sm\">Coverage In Linear Feet</th>\r\n                    <th>Total</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let jobMaterial of jobMaterials; let i = index\" data-toggle=\"modal\" (click)=\"onClickUpdateJobMaterial(jobMaterial.materialID, i)\"\r\n                    href='#update-material-modal'>\r\n                    <td>{{jobMaterial.materialName}}</td>\r\n                    <td>{{jobMaterial.linearFeet}}</td>\r\n                    <td class=\"hidden-xs hidden-sm\">{{jobMaterial.pricePerUnit | currency: 'USD':true}}</td>\r\n                    <td class=\"hidden-xs hidden-sm\">{{jobMaterial.linearFeetCoverage}} ft</td>\r\n                    <td>{{jobMaterial.pricePerUnit / jobMaterial.linearFeetCoverage * jobMaterial.linearFeet | currency: 'USD':true}}</td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr class=\"active\">\r\n                    <th>Grand Total</th>\r\n                    <th>{{totalLinearFeetTable}}</th>\r\n                    <th class=\"hidden-xs hidden-sm\"></th>\r\n                    <th class=\"hidden-xs hidden-sm\"></th>\r\n                    <th>{{totalMaterialPriceTable | currency: 'USD':true}}</th>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n            <button (click)=\"onClearJobMaterials()\" class=\"btn btn-info\" data-toggle=\"modal\" href='#create-material-modal'>\r\n              <span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Add Materials</button>\r\n          </div>\r\n\r\n          <h4 class=\"page-header\">Files (Only Works On Local Machine)\r\n            <button class=\"btn btn-default btn-sm collapsed\" data-toggle=\"collapse\" data-target='#files-collapse'>\r\n              <span class=\"if-collapsed\">Show</span>\r\n              <span class=\"if-not-collapsed\">Hide</span>\r\n            </button>\r\n          </h4>\r\n          <div class=\"collapse\" id=\"files-collapse\">\r\n            <div *ngIf=\"files.length > 0\">\r\n              <label>Click To Open</label>\r\n              <table class=\"table\" style=\"border: 1px solid #dddddd;\">\r\n                <thead>\r\n                  <tr class=\"active\">\r\n                    <th>Name</th>\r\n                    <th></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let file of files\">\r\n                    <td>\r\n                      <!-- <a target=\"_blank\" href=\"https://s3.us-east-2.amazonaws.com/allied-waterproofing/{{file.fileName}}\">{{file.fileName}}</a> -->\r\n                      <!-- <a target=\"_blank\" href=\"http://localhost:3000/api/uploads/{{file.fileName}}\">{{file.fileName}}</a> -->\r\n                      <a target=\"_blank\" href=\"/api/uploads/{{file.fileName}}\">{{file.fileName}}</a>\r\n                    </td>\r\n                    <td>\r\n                      <button (click)=\"onClickDeleteFile(file)\" type=\"button\" class=\"btn btn-danger btn-xs\">\r\n                        &times; Delete\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" href='#upload-modal'>\r\n              <span class=\"glyphicon glyphicon-upload\" aria-hidden=\"true\"></span> Upload File</button>\r\n          </div>\r\n          <hr>\r\n          <button *ngIf=\"status == 'IN-PROGRESS'\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#finish-job-modal'>\r\n            <span class=\"glyphicon glyphicon-check\" aria-hidden=\"true\"></span> Finish Job</button>\r\n          <button *ngIf=\"status == 'COMPLETED'\" class=\"btn btn-warning\" data-toggle=\"modal\" href='#reopen-modal'>\r\n            <span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Re-open Job</button>\r\n          <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-job-modal'>\r\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete Job</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"'#bidAccordion\">\r\n          <h3>Bid Details</h3>\r\n        </div>\r\n        <div id=\"bidAccordion\" class=\"panel-body panel-collapse collapse\" style=\"word-break:break-all\">\r\n          <h4 class=\"page-header\" style=\"margin-top: 0\">General</h4>\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Initial Bid Price</th>\r\n                <th>Created Date</th>\r\n                <th>Accepted Date</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>{{job[0].bidPrice | currency: 'USD':true}}</td>\r\n                <td>{{job[0].bidCreatedDate | date: 'MM/dd/yyyy'}}</td>\r\n                <td>{{job[0].bidEndDate | date: 'MM/dd/yyyy'}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <h4 class=\"page-header\">Estimated Costs</h4>\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Labor</th>\r\n                <th>Materials</th>\r\n                <th>Total</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>{{job[0].bidLabor | currency: 'USD':true}}</td>\r\n                <td>{{job[0].bidMaterials | currency: 'USD':true}}</td>\r\n                <th>{{job[0].bidLabor + job[0].bidMaterials | currency: 'USD':true}}</th>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <hr>\r\n          <button type=\"button\" class=\"btn btn-primary btn-lg\" [routerLink]=\"['/bids/'+job[0].bidID]\">\r\n            <span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Open Bid</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\" style=\"cursor: pointer;\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"'#customerAccordion\">\r\n          <h3>Customer Details</h3>\r\n        </div>\r\n        <div id=\"customerAccordion\" class=\"panel-body panel-collapse collapse\" style=\"word-break:break-all\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Name</th>\r\n                <th>Address</th>\r\n                <th>City</th>\r\n                <th class=\"hidden-xs hidden-sm\">State</th>\r\n                <th class=\"hidden-xs hidden-sm\">ZIP</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>{{job[0].customerName}}</td>\r\n                <td>{{job[0].customerAddress}}</td>\r\n                <td>{{job[0].customerCity}}</td>\r\n                <td class=\"hidden-xs hidden-sm\">{{job[0].customerState}}</td>\r\n                <td class=\"hidden-xs hidden-sm\">{{job[0].customerZIP}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <hr>\r\n          <button type=\"button\" class=\"btn btn-primary btn-lg\" [routerLink]=\"['/customers/'+job[0].customerID]\">\r\n            <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Open Customer</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noJob>\r\n    <h2 class=\"page-header\">No Jobs</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </ng-template>\r\n</div>\r\n\r\n<!--                                     JOB POPUPS                                           -->\r\n<!--                Finish Job Popup                -->\r\n<div class=\"modal fade\" id=\"finish-job-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to finalize this job?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onFinish()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Re-open Job Popup                -->\r\n<div class=\"modal fade\" id=\"reopen-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to re-open this job?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onReopen()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Delete Job Popup                -->\r\n<div class=\"modal fade\" id=\"delete-job-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete this job?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteJob()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                                     REVENUE POPUPS                                           -->\r\n<!--                Update Revenue Popup                -->\r\n<div class=\"modal fade\" id=\"update-revenue-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Update Revenue</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f4=\"ngForm\" (submit)=\"onUpdateJobRevenue()\">\r\n          <div class=\"form-group\">\r\n            <label>Amount</label>\r\n            <input required mask=\"0000000\" #revenue2=\"ngModel\" type=\"number\" [(ngModel)]=\"revenueAmount\" name=\"revenueAmount\" placeholder=\"Amount\"\r\n              class=\"form-control\">\r\n            <div *ngIf=\"revenue2.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"revenue2.errors.required\">\r\n                *Revenue is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"f4.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\r\n          <button type=\"button\" (click)=\"onClearJobRevenue()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-revenue-modal'>\r\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Delete Revenue Popup                -->\r\n<div class=\"modal fade\" id=\"delete-revenue-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete this revenue?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteRevenue()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Create Revenue Popup                -->\r\n<div class=\"modal fade\" id=\"create-revenue-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Add Revenue</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f3=\"ngForm\" (submit)=\"onCreateJobRevenue()\">\r\n          <div class=\"form-group\">\r\n            <label>Amount</label>\r\n            <input required mask=\"0000000\" #revenue=\"ngModel\" type=\"number\" [(ngModel)]=\"revenueAmount\" name=\"revenueAmount\" placeholder=\"Amount\"\r\n              class=\"form-control\">\r\n            <div *ngIf=\"revenue.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"revenue.errors.required\">\r\n                *Revenue is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"f3.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-usd\" aria-hidden=\"true\"></span> Create</button>\r\n          <button type=\"button\" (click)=\"onClearJobRevenue()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                                     LABOR POPUPS                                           -->\r\n<!--                Update Labor Popup                -->\r\n<div class=\"modal fade\" id=\"update-labor-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Update {{roleName}} Labor From {{laborDate | date: 'MM/dd/yyyy'}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f5=\"ngForm\" (submit)=\"onUpdateJobLabor()\">\r\n          <div class=\"form-group\">\r\n            <label>Hours</label>\r\n            <input required mask=\"00000\" #hours1=\"ngModel\" type=\"number\" [(ngModel)]=\"hours\" name=\"hours\" placeholder=\"Hours\" class=\"form-control\">\r\n            <div *ngIf=\"hours1.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"hours1.errors.required\">\r\n                *Hours are required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Wage</label>\r\n            <input required onKeyPress=\"if(this.value.length==5) return false;\" #wage1=\"ngModel\" type=\"number\" [(ngModel)]=\"wage\" name=\"wage\"\r\n              placeholder=\"Wage\" class=\"form-control\">\r\n            <div *ngIf=\"wage1.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"wage1.errors.required\">\r\n                *Wage is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"f5.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\r\n          <button type=\"button\" (click)=\"clearLaborUpdate()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-labor-modal'>\r\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Delete Labor Popup                -->\r\n<div class=\"modal fade\" id=\"delete-labor-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete this labor?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteLabor()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Create Labor Popup                -->\r\n<div class=\"modal fade\" id=\"create-labor-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Add Labor</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f6=\"ngForm\" (submit)=\"onCreateJobLabor()\">\r\n          <table class=\"table\" *ngIf=\"labors[0] != null\">\r\n            <thead>\r\n              <tr>\r\n                <th>Select Role</th>\r\n                <th>Enter Hours</th>\r\n                <th>Add Role</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <select (change)=\"onChangeLabor($event.target.value)\" class=\"form-control\">\r\n                    <option></option>\r\n                    <option [value]=\"i\" *ngFor=\"let labor of labors; let i = index;\">{{labor.roleName}}</option>\r\n                  </select>\r\n                </td>\r\n                <td>\r\n                  <input required mask=\"00000\" #hours2=\"ngModel\" type=\"number\" [(ngModel)]=\"hours\" name=\"hours\" placeholder=\"Hours\" class=\"form-control\"\r\n                    aria-describedby=\"hours-addon\">\r\n                </td>\r\n                <td>\r\n                  <button [disabled]=\"hours2.invalid\" (click)=\"onAddLabor()\" type=\"button\" class=\"btn btn-success\">\r\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr *ngIf=\"hours2.invalid\" style=\"color:#ff0000\">\r\n                <td *ngIf=\"hours2.errors.required\"></td>\r\n                <td *ngIf=\"hours2.errors.required\">*Hours are required</td>\r\n                <td *ngIf=\"hours2.errors.required\"></td>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n          <label style=\"color:#ff0000\" *ngIf=\"selectedLabors.length != 0;\">Click To Delete</label>\r\n          <table class=\"table table-bordered table-hover\" *ngIf=\"selectedLabors.length != 0;\">\r\n            <thead>\r\n              <tr class=\"active\">\r\n                <th>Role</th>\r\n                <th>Estimated Cost</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let selectedLabor of selectedLabors; let i = index\" (click)=\"onRemoveLabor(selectedLabor, i)\">\r\n                <td>{{selectedLabor.roleName}}</td>\r\n                <td>{{selectedLabor.laborHours*selectedLabor.roleWage | currency:'USD':true}}\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr class=\"active\">\r\n                <th>Total Labor Cost</th>\r\n                <th>{{totalLaborPrice | currency: 'USD':true}}</th>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n          <button [disabled]=\"f6.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Add</button>\r\n          <button type=\"button\" (click)=\"clearLaborCreate()\" class=\"btn btn-warning\" (click)=\"onClearJobLabor()\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                                     MATERIAL POPUPS                                           -->\r\n<!--                Create Material Popup                -->\r\n<div class=\"modal fade\" id=\"create-material-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Add Materials</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f8=\"ngForm\" (submit)=\"onCreateJobMaterials()\">\r\n          <div class=\"form-group\">\r\n            <table class=\"table\" *ngIf=\"materials[0] != null\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Select Material</th>\r\n                  <th>Enter Linear Feet</th>\r\n                  <th>Add Material</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>\r\n                    <select (change)=\"onChangeMaterial($event.target.value)\" class=\"form-control\">\r\n                      <option></option>\r\n                      <option [value]=\"i\" *ngFor=\"let material of materials; let i = index;\">{{material.materialName}}</option>\r\n                    </select>\r\n                  </td>\r\n                  <td>\r\n                    <input required mask=\"0000000\" #feet2=\"ngModel\" type=\"number\" [(ngModel)]=\"linearFeet\" name=\"linearFeet\" placeholder=\"Linear Feet\"\r\n                      class=\"form-control\">\r\n                  </td>\r\n                  <td>\r\n                    <button [disabled]=\"feet2.invalid\" (click)=\"onAddMaterial()\" type=\"button\" class=\"btn btn-success\">\r\n                      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr *ngIf=\"feet2.invalid\" style=\"color:#ff0000\">\r\n                  <td *ngIf=\"feet2.errors.required\"></td>\r\n                  <td *ngIf=\"feet2.errors.required\">*Linear feet are required</td>\r\n                  <td *ngIf=\"feet2.errors.required\"></td>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n            <label style=\"color:#ff0000\" *ngIf=\"selectedMaterials1.length != 0;\">Click To Delete</label>\r\n            <table class=\"table table-bordered table-hover\" *ngIf=\"selectedMaterials1.length != 0;\">\r\n              <thead>\r\n                <tr class=\"active\">\r\n                  <th>Name</th>\r\n                  <th>Estimated Cost</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let selectedMaterial of selectedMaterials1; let i = index\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">\r\n                  <td>{{selectedMaterial.materialName}}</td>\r\n                  <td>{{selectedMaterial.linearFeet*selectedMaterial.pricePerUnit/selectedMaterial.linearFeetCoverage | currency:'USD':true}}</td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr class=\"active\">\r\n                  <th>Total Material Cost</th>\r\n                  <th>{{totalMaterialPrice | currency: 'USD':true}}</th>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n          <button [disabled]=\"f8.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Create</button>\r\n          <button type=\"button\" (click)=\"onClearJobMaterials()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Update Material Popup                -->\r\n<div class=\"modal fade\" id=\"update-material-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Update {{materialName}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f7=\"ngForm\" (submit)=\"onUpdateJobMaterial()\">\r\n          <div class=\"form-group\">\r\n            <label>Linear Feet</label>\r\n            <input required mask=\"0000000\" #feet=\"ngModel\" type=\"number\" [(ngModel)]=\"linearFeet\" name=\"linearFeet\" placeholder=\"Linear Feet\"\r\n              class=\"form-control\">\r\n            <div *ngIf=\"feet.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"feet.errors.required\">\r\n                *Linear feet are required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Price Per Unit</label>\r\n            <input required onKeyPress=\"if(this.value.length==5) return false;\" #perUnit=\"ngModel\" type=\"number\" [(ngModel)]=\"pricePerUnit\"\r\n              name=\"pricePerUnit\" placeholder=\"Price Per Unit\" class=\"form-control\">\r\n            <div *ngIf=\"perUnit.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"perUnit.errors.required\">\r\n                *Per unit cost is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Coverage In Linear Feet</label>\r\n            <input required mask=\"0000000\" #coverage=\"ngModel\" type=\"number\" [(ngModel)]=\"linearFeetCoverage\" name=\"linearFeetCoverage\"\r\n              placeholder=\"Coverage In Linear Feet\" class=\"form-control\">\r\n            <div *ngIf=\"coverage.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"coverage.errors.required\">\r\n                *Coverage in linear feet is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"f7.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\r\n          <button type=\"button\" (click)=\"clearMaterialUpdate()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-material-modal'>\r\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Delete Material Popup                -->\r\n<div class=\"modal fade\" id=\"delete-material-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete\r\n          <b>{{materialName | lowercase}}</b>?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteMaterial()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                                     CHANGE ORDER POPUPS                                           -->\r\n<!--                Update Change Popup                -->\r\n<div class=\"modal fade\" id=\"update-change-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Update Change Order</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f=\"ngForm\" (submit)=\"onUpdateChangeOrder()\">\r\n          <div class=\"form-group\">\r\n            <label>Amount</label>\r\n            <input required mask=\"0000000\" #amount=\"ngModel\" type=\"number\" [(ngModel)]=\"changeAmount\" name=\"changeAmount\" placeholder=\"Amount\"\r\n              class=\"form-control\">\r\n            <div *ngIf=\"amount.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"amount.errors.required\">\r\n                *Change amount is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\r\n          <button type=\"button\" (click)=\"onClearChangeOrder()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-change-modal'>\r\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Delete Change Popup                -->\r\n<div class=\"modal fade\" id=\"delete-change-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete this change order?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteChangeOrder()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Create Change Popup                -->\r\n<div class=\"modal fade\" id=\"create-change-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Create Change Order</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f2=\"ngForm\" (submit)=\"onCreateChangeOrder()\">\r\n          <div class=\"form-group\">\r\n            <label>Amount</label>\r\n            <input required mask=\"0000000\" #amount2=\"ngModel\" type=\"number\" [(ngModel)]=\"changeAmount\" name=\"changeAmount\" placeholder=\"Amount\"\r\n              class=\"form-control\">\r\n            <div *ngIf=\"amount2.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"amount2.errors.required\">\r\n                *Change amount is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"f2.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span> Create</button>\r\n          <button type=\"button\" (click)=\"onClearChangeOrder()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                                     FILE POPUPS                                           -->\r\n<!--                Delete File Popup                -->\r\n<div class=\"modal fade\" id=\"delete-file-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete\r\n          <b>{{file.fileName}}</b>?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteFile()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Upload File Popup                -->\r\n<div class=\"modal fade\" id=\"upload-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Upload Files</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <button type=\"button\" class=\"btn btn-info\" *ngIf=\"uploader.queue.length == 0\" (click)=\"(uploader.queue.length == 0) && fileInput.click()\">\r\n          <span class=\"glyphicon glyphicon-folder-open\" aria-hidden=\"true\"></span> Browse Files</button>\r\n        <input name=\"file\" type=\"file\" style=\"display: none;\" #fileInput ng2FileSelect [uploader]=\"uploader\" />\r\n        <br>\r\n        <br>\r\n        <table *ngIf=\"uploader.queue.length\" class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Edit File Name\r\n                <div style=\"color:#ff0000\">*Keep File Extension</div>\r\n              </th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of uploader.queue\">\r\n              <td>\r\n                <input class=\"form-control\" type=\"text\" [value]=\"item.file.name\" (change)=\"item.file.name = $event.target.value\" />\r\n              </td>\r\n              <td>\r\n                <button (click)=\"item.remove()\" type=\"button\" class=\"btn btn-danger\">\r\n                  <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Remove\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"uploader.queue.length != 0\" (click)=\"(uploader.queue.length > 0) && uploader.uploadAll()\">\r\n          <span class=\"glyphicon glyphicon-upload\" aria-hidden=\"true\"></span> Upload</button>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--               FOR UPLOAD FILE POPUP                -->\r\n<!-- <div class=\"form-group\">\r\n            <h4>Upload Files</h4>\r\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"fileInput.click()\">\r\n              <span class=\"glyphicon glyphicon-upload\" aria-hidden=\"true\"></span> Browse Files</button>\r\n            <input name=\"file\" type=\"file\" style=\"display: none;\" #fileInput ng2FileSelect [uploader]=\"uploader\" />\r\n            <table *ngIf=\"uploader.queue.length\" class=\"table table-striped table-hover\">\r\n              <thead>\r\n                <tr>\r\n                  <th>File</th>\r\n                  <th>Remove</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of uploader.queue\">\r\n                  <td>{{item._file.name}}</td>\r\n                  <td>\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">\r\n                      <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n\r\n<!--                                        UNUSED MARKUP                                       -->\r\n<!-- <label>Add Materials</label>\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n              <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add Materials\r\n              <span class=\"caret\"></span>\r\n            </button>\r\n            <ul class=\"dropdown-menu\">\r\n              <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\r\n                <li *ngFor=\"let material of materials; let i = index;\">\r\n                  <a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a>\r\n                </li>\r\n              </ng-container>\r\n              <ng-template #noMaterials>\r\n                <li>\r\n                  <a>No more materials</a>\r\n                </li>\r\n              </ng-template>\r\n            </ul>\r\n          </div> -->\r\n<!-- <table class=\"table table-striped table-hover\">\r\n            <thead *ngIf=\"selectedMaterials[0] != null;\">\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Quantity</th>\r\n                <th>Per Unit Cost</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index;\">\r\n                <td>{{selectedMaterial.materialName}}</td>\r\n                <td>\r\n                  <input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required>\r\n                </td>\r\n                <td>\r\n                  <input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\"\r\n                    required>\r\n                </td>\r\n                <td>\r\n                  <button type=\"button\" class=\"close\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">&times;</button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table> -->\r\n\r\n<!-- <table class=\"table table-bordered\">\r\n              <thead *ngIf=\"bidMaterials[0] != null;\">\r\n                <tr class=\"active\">\r\n                  <th>Material</th>\r\n                  <th>Linear Feet</th>\r\n                  <th class=\"hidden-xs hidden-sm\">Price Per Unit</th>\r\n                  <th class=\"hidden-xs hidden-sm\">Coverage In Linear Feet</th>\r\n                  <th>Total</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let bidMaterial of bidMaterials\">\r\n                  <td>{{bidMaterial.materialName}}</td>\r\n                  <td>{{bidMaterial.linearFeet}}</td>\r\n                  <td class=\"hidden-xs hidden-sm\">{{bidMaterial.pricePerUnit | currency: 'USD':true}}</td>\r\n                  <td class=\"hidden-xs hidden-sm\">{{bidMaterial.linearFeetCoverage}} ft</td>\r\n                  <td>{{bidMaterial.pricePerUnit / bidMaterial.linearFeetCoverage * bidMaterial.linearFeet | currency: 'USD':true}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table> -->\r\n\r\n\r\n<!--                Update Job Popup                -->\r\n<!-- <div class=\"modal fade\" id=\"update-job-modal\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n          <h4 class=\"modal-title\">Update Job</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form (submit)=\"onUpdate()\" style=\"padding-bottom: 20px;\">\r\n            <div class=\"form-group\">\r\n              <h4>Add Labor</h4>\r\n              <label>Hours: </label>\r\n              <input type=\"text\" [(ngModel)]=\"laborHours\" name=\"laborHours\" placeholder=\"Hours\" class=\"form-control\" required>\r\n              <label>Price: </label>\r\n              <input type=\"text\" [(ngModel)]=\"laborPrice\" name=\"laborPrice\" placeholder=\"Price\" class=\"form-control\" required>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">\r\n              <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\r\n            <button type=\"reset\" class=\"btn btn-danger\" (click)=\"onClear(); uploader.clearQueue()\">\r\n              <span class=\"glyphicon glyphicon-repeat\" aria-hidden=\"true\"></span> Clear</button>\r\n          </form>\r\n          <div class=\"modal-footer\">\r\n            <button class=\"btn btn-info\" data-dismiss=\"modal\">\r\n              <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n<!-- <button class=\"btn btn-info\" data-toggle=\"modal\" href='#update-job-modal'>\r\n          <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> Update Job</button> -->"

/***/ }),

/***/ "../../../../../src/app/components/job/job.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_material_service__ = __webpack_require__("../../../../../src/app/services/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_bid_service__ = __webpack_require__("../../../../../src/app/services/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_labor_service__ = __webpack_require__("../../../../../src/app/services/labor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var JobComponent = (function () {
    function JobComponent(router, route, jobService, materialService, bidService, authService, laborService) {
        this.router = router;
        this.route = route;
        this.jobService = jobService;
        this.materialService = materialService;
        this.bidService = bidService;
        this.authService = authService;
        this.laborService = laborService;
        this.filesUrls = [];
        /** JOB **/
        this.id = null;
        this.jobLabor = 0;
        this.jobStatus = '';
        this.createdDate = '';
        this.endDate = '';
        this.status = '';
        this.selectedMaterials1 = [];
        this.materialName = '';
        this.materialID = null;
        this.materialIndex = null;
        this.linearFeet = 0;
        this.pricePerUnit = 0;
        this.linearFeetCoverage = 0;
        this.totalMaterialPrice = 0;
        this.totalMaterialPriceTable = 0;
        this.totalLinearFeetTable = 0;
        /** JOB REVENUES **/
        this.revenueID = null;
        this.revenueIndex = null;
        this.revenueAmount = 0;
        this.totalRevenueTable = 0;
        /** CHANGE ORDERS **/
        this.changeID = null;
        this.changeIndex = null;
        this.changeAmount = 0;
        this.totalChangeTable = 0;
        /** JOB LABOR **/
        this.laborHours = 0;
        this.laborPrice = 0;
        this.laborID = null;
        this.laborIndex = null;
        this.selectedLabors = [];
        this.totalLaborPrice = 0;
        this.totalLaborPriceTable = 0;
        this.totalHoursTable = 0;
        this.hours = 0;
        this.wage = 0;
        this.roleName = '';
        this.laborDate = '';
    }
    JobComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.setupFileUploader();
        this.getJob();
        this.getChangeOrders();
        this.getRevenue();
        this.getLabor();
        this.getMaterials();
        this.getFiles();
    };
    /************************************************* JOB FUNCTIONS *********************************************************/
    JobComponent.prototype.getJob = function () {
        var _this = this;
        this.jobService.getJobById(this.id).subscribe(function (job) {
            _this.job = job;
            _this.status = job[0].jobStatus;
        });
    };
    JobComponent.prototype.onClear = function () {
        //this.ngOnInit();
    };
    JobComponent.prototype.onUpdate = function () {
        var updatedJob = {
            jobID: this.id,
            jobStatus: this.jobStatus,
            createdDate: this.createdDate,
            endDate: this.endDate
        };
        this.jobService.updateJob(updatedJob).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
            }
            else {
                console.log(data.msg);
            }
        });
        this.onClear();
        this.ngOnInit();
    };
    JobComponent.prototype.onDeleteJob = function () {
        var _this = this;
        this.jobService.deleteJob(this.id).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
            }
            else {
                console.log(data.msg);
            }
        });
        var updatedBid = {
            bidID: this.job[0].bidID,
            bidStatus: "PENDING"
        };
        this.bidService.updateBidStatus(updatedBid).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.router.navigate(['/jobs']);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    JobComponent.prototype.onReopen = function () {
        var _this = this;
        var updatedJob = {
            jobID: this.id,
            jobStatus: "IN-PROGRESS"
        };
        this.jobService.updateJobStatus(updatedJob).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
            }
            else {
                console.log(data.msg);
            }
        });
    };
    JobComponent.prototype.onFinish = function () {
        var _this = this;
        var updatedJob = {
            jobID: this.id,
            jobStatus: "COMPLETED"
        };
        this.jobService.updateJobStatus(updatedJob).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
            }
            else {
                console.log(data.msg);
            }
        });
    };
    /************************************************* FILE FUNCTIONS *********************************************************/
    JobComponent.prototype.getFiles = function () {
        var _this = this;
        this.jobService.getJobFilesByID(this.id).subscribe(function (files) {
            _this.files = files;
            console.log(_this.files);
        });
    };
    JobComponent.prototype.setupFileUploader = function () {
        var _this = this;
        this.url = "/api/jobs/" + this.id + "/upload";
        // this.url = `http://localhost:3000/api/jobs/${this.id}/upload`;
        this.authService.loadToken();
        var headers = [{ name: 'Authorization', value: this.authService.authToken }, { name: 'Content-Type', value: 'application/json' }];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileUploader"]({ url: this.url });
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
            //this.readyItems.push(file);
            //console.log(file);
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log(response);
            _this.ngOnInit();
            // if(response.success = true) {
            //   this.uploader.clearQueue();
            // } 
        };
    };
    JobComponent.prototype.onClickDeleteFile = function (file) {
        this.file = file;
        $('#delete-file-modal').modal('show');
    };
    JobComponent.prototype.onDeleteFile = function () {
        var _this = this;
        var fileToRemove = {
            key: this.file.fileName
        };
        this.jobService.deleteJobFile(this.file.fileID, fileToRemove).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getFiles();
            }
            else {
                console.log(data.msg);
            }
        });
    };
    /************************************************* MATERIAL FUNCTIONS *********************************************************/
    JobComponent.prototype.getMaterials = function () {
        var _this = this;
        this.jobService.getJobMaterialsById(this.id).subscribe(function (jobMaterials) {
            _this.jobMaterials = jobMaterials;
            _this.totalMaterialPriceTable = 0;
            _this.totalLinearFeetTable = 0;
            for (var k = 0; k < _this.jobMaterials.length; k++) {
                _this.totalMaterialPriceTable += ((_this.jobMaterials[k].pricePerUnit / _this.jobMaterials[k].linearFeetCoverage) * _this.jobMaterials[k].linearFeet);
                _this.totalLinearFeetTable += _this.jobMaterials[k].linearFeet;
            }
            _this.materialService.getAllMaterials().subscribe(function (materials) {
                _this.materials = materials.materials;
                _this.jobMaterials.forEach(function (jobMaterial) {
                    _this.materials.forEach(function (material, i) {
                        if (material.materialID == jobMaterial.materialID) {
                            _this.materials.splice(i, 1);
                            _this.totalMaterialPriceTable += ((jobMaterial.pricePerUnit / jobMaterial.linearFeetCoverage) * jobMaterial.linearFeet);
                        }
                    });
                });
                // for (let i = 0; i < this.materials.length; i++) {
                //   for (let k = 0; k < this.jobMaterials.length; k++) {
                //     if (this.materials[i].materialID == this.jobMaterials[k].materialID) {
                //       this.materials.splice(i, 1);
                //       this.totalMaterialPriceTable += ((this.jobMaterials[k].pricePerUnit / this.jobMaterials[k].linearFeetCoverage) * this.jobMaterials[k].linearFeet);
                //     }
                //   }
                // }
            });
        });
    };
    JobComponent.prototype.onClearJobMaterials = function () {
        var _this = this;
        this.selectedMaterials1.forEach(function (selectedMaterial) {
            _this.materials.push(selectedMaterial);
        });
        this.selectedMaterials1 = [];
        this.linearFeet = 0;
        this.pricePerUnit = 0;
        this.linearFeetCoverage = 0;
        this.totalMaterialPrice = 0;
    };
    JobComponent.prototype.clearMaterialUpdate = function () {
        this.linearFeet = 0;
        this.pricePerUnit = 0;
        this.linearFeetCoverage = 0;
    };
    JobComponent.prototype.onCreateJobMaterials = function () {
        var _this = this;
        this.selectedMaterials1.forEach(function (selectedMaterial) {
            _this.jobService.createJobMaterial(_this.id, selectedMaterial).subscribe(function (data) {
                if (data.success) {
                    console.log(data.msg);
                    _this.getMaterials();
                    _this.onClearJobMaterials();
                    $('#create-material-modal').modal('hide');
                }
                else {
                    console.log(data.msg);
                }
            });
        });
    };
    JobComponent.prototype.onSelectMaterial = function (material, id) {
        // console.log(material);
        this.material = material;
        this.materialID = id;
    };
    JobComponent.prototype.onChangeMaterial = function (id) {
        // console.log(id);
        this.materialID = id;
    };
    JobComponent.prototype.onAddMaterial = function () {
        var selectedMaterial = {
            materialID: this.materials[this.materialID].materialID,
            materialName: this.materials[this.materialID].materialName,
            pricePerUnit: this.materials[this.materialID].pricePerUnit,
            linearFeetCoverage: this.materials[this.materialID].linearFeetCoverage,
            linearFeet: this.linearFeet
        };
        this.totalMaterialPrice += ((selectedMaterial.pricePerUnit / selectedMaterial.linearFeetCoverage) * this.linearFeet);
        this.selectedMaterials1.push(selectedMaterial);
        this.materials.splice(this.materialID, 1);
        this.material = null;
        this.linearFeet = 0;
    };
    JobComponent.prototype.onRemoveMaterial = function (material, id) {
        this.totalMaterialPrice -= ((material.pricePerUnit / material.linearFeetCoverage) * material.linearFeet);
        this.selectedMaterials1.splice(id, 1);
        this.materials.push(material);
    };
    JobComponent.prototype.onClickUpdateJobMaterial = function (materialID, materialIndex) {
        this.materialID = materialID;
        this.materialIndex = materialIndex;
        this.linearFeet = this.jobMaterials[materialIndex].linearFeet;
        this.pricePerUnit = this.jobMaterials[materialIndex].pricePerUnit;
        this.linearFeetCoverage = this.jobMaterials[materialIndex].linearFeetCoverage;
        this.materialName = this.jobMaterials[materialIndex].materialName;
    };
    JobComponent.prototype.onUpdateJobMaterial = function () {
        var _this = this;
        var updatedJobMaterial = {
            jobID: this.id,
            materialID: this.jobMaterials[this.materialIndex].materialID,
            linearFeet: this.linearFeet,
            pricePerUnit: this.pricePerUnit,
            linearFeetCoverage: this.linearFeetCoverage
        };
        this.jobService.updateJobMaterial(updatedJobMaterial).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getMaterials();
                $('#update-material-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    JobComponent.prototype.onDeleteMaterial = function () {
        var _this = this;
        var materialID = this.materialID;
        var jobID = this.id;
        this.jobService.deleteJobMaterial(materialID, jobID).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getMaterials();
                $('#update-material-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    /************************************************* CHANGE ORDER FUNCTIONS *********************************************************/
    JobComponent.prototype.getChangeOrders = function () {
        var _this = this;
        this.jobService.getChangeOrdersById(this.id).subscribe(function (changeOrders) {
            _this.changeOrders = changeOrders;
            _this.totalChangeTable = 0;
            for (var k = 0; k < _this.changeOrders.length; k++) {
                _this.totalChangeTable += (_this.changeOrders[k].changeAmount);
            }
        });
    };
    JobComponent.prototype.onClickUpdateChangeOrder = function (changeID, changeIndex) {
        this.changeID = changeID;
        this.changeIndex = changeIndex;
        this.changeAmount = this.changeOrders[changeIndex].changeAmount;
    };
    JobComponent.prototype.onUpdateChangeOrder = function () {
        var _this = this;
        var updatedChangeOrder = {
            changeID: this.changeOrders[this.changeIndex].changeID,
            changeAmount: this.changeAmount
        };
        this.jobService.updateChangeOrder(updatedChangeOrder).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getChangeOrders();
                $('#update-change-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    JobComponent.prototype.onDeleteChangeOrder = function () {
        var _this = this;
        var changeID = this.changeID;
        this.jobService.deleteChangeOrder(changeID).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getChangeOrders();
                $('#update-change-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    JobComponent.prototype.onCreateChangeOrder = function () {
        var _this = this;
        var changeOrder = {
            changeAmount: this.changeAmount
        };
        this.jobService.createChangeOrder(this.id, changeOrder).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getChangeOrders();
                $('#create-change-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    JobComponent.prototype.onClearChangeOrder = function () {
        this.changeAmount = 0;
    };
    /************************************************* REVENUE FUNCTIONS *********************************************************/
    JobComponent.prototype.getRevenue = function () {
        var _this = this;
        this.jobService.getRevenuesById(this.id).subscribe(function (revenues) {
            _this.revenues = revenues;
            _this.totalRevenueTable = 0;
            for (var k = 0; k < _this.revenues.length; k++) {
                _this.totalRevenueTable += (_this.revenues[k].revenueAmount);
            }
        });
    };
    JobComponent.prototype.onClearJobRevenue = function () {
        this.revenueAmount = 0;
    };
    JobComponent.prototype.onCreateJobRevenue = function () {
        var _this = this;
        var newRevenue = {
            jobID: this.id,
            revenueAmount: this.revenueAmount
        };
        this.jobService.createRevenue(newRevenue).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getRevenue();
                $('#create-revenue-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    JobComponent.prototype.onClickUpdateRevenue = function (revenueID, revenueIndex) {
        this.revenueID = revenueID;
        this.revenueIndex = revenueIndex;
        this.revenueAmount = this.revenues[revenueIndex].revenueAmount;
    };
    JobComponent.prototype.onUpdateJobRevenue = function () {
        var _this = this;
        var updatedJobRevenue = {
            revenueID: this.revenues[this.revenueIndex].revenueID,
            revenueAmount: this.revenueAmount
        };
        this.jobService.updateJobRevenue(updatedJobRevenue).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getRevenue();
                $('#update-revenue-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    JobComponent.prototype.onDeleteRevenue = function () {
        var _this = this;
        var revenueID = this.revenueID;
        this.jobService.deleteRevenue(revenueID).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getRevenue();
                $('#update-revenue-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    /************************************************* LABOR FUNCTIONS *********************************************************/
    JobComponent.prototype.getLabor = function () {
        var _this = this;
        this.jobService.getLaborsById(this.id).subscribe(function (jobLabors) {
            _this.jobLabors = jobLabors;
            _this.totalLaborPriceTable = 0;
            _this.totalHoursTable = 0;
            for (var k = 0; k < _this.jobLabors.length; k++) {
                _this.totalLaborPriceTable += (_this.jobLabors[k].roleWage * _this.jobLabors[k].laborHours);
                _this.totalHoursTable += _this.jobLabors[k].laborHours;
            }
        });
        this.laborService.getAllLabors().subscribe(function (labors) {
            _this.labors = labors.labors;
        });
    };
    JobComponent.prototype.onClickUpdateLabor = function (laborID, laborIndex) {
        this.laborID = laborID;
        this.laborIndex = laborIndex;
        this.hours = this.jobLabors[laborIndex].laborHours;
        this.wage = this.jobLabors[laborIndex].roleWage;
        this.roleName = this.jobLabors[laborIndex].roleName;
        this.laborDate = this.jobLabors[laborIndex].laborDate;
    };
    JobComponent.prototype.clearLaborUpdate = function () {
        this.wage = 0;
        this.hours = 0;
    };
    JobComponent.prototype.clearLaborCreate = function () {
        var _this = this;
        this.selectedLabors.forEach(function (selectLabor) {
            _this.labors.push(selectLabor);
        });
        this.hours = 0;
        this.totalLaborPrice = 0;
        this.selectedLabors = [];
    };
    JobComponent.prototype.onUpdateJobLabor = function () {
        var _this = this;
        var updatedJobLabor = {
            laborID: this.jobLabors[this.laborIndex].laborID,
            laborHours: this.hours,
            roleWage: this.wage
        };
        this.jobService.updateJobLabor(updatedJobLabor).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getLabor();
                $('#update-labor-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    /********** CREATE START **********/
    JobComponent.prototype.onCreateJobLabor = function () {
        var _this = this;
        this.selectedLabors.forEach(function (selectedLabor) {
            _this.jobService.createLabor(_this.id, selectedLabor).subscribe(function (data) {
                if (data.success) {
                    console.log(data.msg);
                    _this.getLabor();
                    $('#create-labor-modal').modal('hide');
                }
                else {
                    console.log(data.msg);
                }
            });
        });
    };
    JobComponent.prototype.onAddLabor = function () {
        var selectedLabor = {
            roleID: this.labors[this.laborID].roleID,
            roleName: this.labors[this.laborID].roleName,
            roleWage: this.labors[this.laborID].roleWage,
            laborHours: this.hours
        };
        this.totalLaborPrice += (selectedLabor.roleWage * this.hours);
        this.selectedLabors.push(selectedLabor);
        this.labors.splice(this.laborID, 1);
        this.hours = 0;
    };
    JobComponent.prototype.onRemoveLabor = function (labor, id) {
        this.totalLaborPrice -= (labor.laborHours * labor.roleWage);
        this.selectedLabors.splice(id, 1);
        this.labors.push(labor);
    };
    JobComponent.prototype.onChangeLabor = function (id) {
        this.laborID = id;
    };
    /********** CREATE END **********/
    JobComponent.prototype.onClearJobLabor = function () {
        this.hours = 0;
        this.wage = 0;
        this.roleName = '';
        this.laborDate = '';
    };
    JobComponent.prototype.onDeleteLabor = function () {
        var _this = this;
        var laborID = this.laborID;
        this.jobService.deleteLabor(laborID).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.getLabor();
                $('#update-labor-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    return JobComponent;
}());
JobComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job',
        template: __webpack_require__("../../../../../src/app/components/job/job.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/job/job.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_material_service__["a" /* MaterialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_material_service__["a" /* MaterialService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_bid_service__["a" /* BidService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__services_labor_service__["a" /* LaborService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_labor_service__["a" /* LaborService */]) === "function" && _g || Object])
], JobComponent);

var _a, _b, _c, _d, _e, _f, _g;
/************************************************* UNUSED CODE *********************************************************/
// onAddMaterial(material, id) {
//   this.selectedMaterials.push(material);
//   this.materials.splice(id, 1);
// }
// onRemoveMaterial(material, id) {
//   this.selectedMaterials.splice(id, 1);
//   this.materials.push(material);
//   //this.ngOnInit();
// }
// onClear() {
//   this.selectedMaterials.forEach(selectedMaterial => {
//     this.materials.push(selectedMaterial);
//   });
//   this.selectedMaterials = [];
// }
// fileTree = {
//   "name": "test",
//   "children": [
//     {"name": "http://localhost:3000/uploads/jobs/33/file-1509295300688.txt"}
//   ]
// }
// selectedMaterials: SelectedMaterial[] = [];
//readyItems: any[] = [];
//  onDeleteFile() {
//   let file = {
//     file: this.fileName
//   }
//   this.jobService.deleteJobFile(this.id, file).subscribe((data) => {
//     if (data.success) {
//       console.log(data.msg);
//       this.ngOnInit();
//     } else {
//       console.log(data.msg);
//     }
//   });
// } 
//# sourceMappingURL=job.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/jobs/jobs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/jobs/jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pull-left\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Go Home</button>\r\n</div>\r\n\r\n<ng-container *ngIf=\"jobsLength!=0; else noJobs\">\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">Jobs</h2>\r\n    <h4>Click To View Details</h4>\r\n    <table *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered table-hover\">\r\n      <thead>\r\n        <tr class=\"active\">\r\n          <th class=\"hidden-xs hidden-sm\">ID</th>\r\n          <th>Customer</th>\r\n          <th>Status</th>\r\n          <th>Created Date</th>\r\n          <th class=\"hidden-xs hidden-sm\">Completion Date</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let job of jobs;\" id=\"{{job.jobID}}\" [routerLink]=\"['/jobs/'+job.jobID]\">\r\n          <td class=\"hidden-xs hidden-sm\">{{job.jobID}}</td>\r\n          <td>{{job.customerName}}</td>\r\n          <td>{{job.jobStatus}}</td>\r\n          <td>{{job.createdDate | date: 'MM/dd/yyyy'}}</td>\r\n          <td *ngIf=\"job.jobStatus != 'IN-PROGRESS'\" class=\"hidden-xs hidden-sm\">{{job.endDate | date: 'MM/dd/yyyy'}}</td>\r\n          <td *ngIf=\"job.jobStatus == 'IN-PROGRESS'\" class=\"hidden-xs hidden-sm\">N/A</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ng-container>\r\n<ng-template #noJobs>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">No Jobs</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<!--                                              UNUSED MARKUP                                                       -->\r\n<!-- <ng-container *ngIf=\"inProgressLength!=0 || completedLength!=0; else noJobs\">\r\n  <ng-container *ngIf=\"inProgressLength!=0; else noInProgressJobs\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n      <h2 class=\"page-header\">In Progress Jobs</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Revenue</th>\r\n            <th>Created Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let inProgressJob of inProgressJobs;\" [routerLink]=\"['/jobs/'+inProgressJob.jobID]\">\r\n            <td>{{inProgressJob.jobID}}</td>\r\n            <td>{{inProgressJob.jobRevenue}}</td>\r\n            <td>{{inProgressJob.createdDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>  \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noInProgressJobs>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n      <h2 class=\"page-header\">No Jobs In Progress</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n  \r\n  <ng-container *ngIf=\"completedLength!=0; else noCompletedJobs\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n      <h2 class=\"page-header\">Completed Jobs</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Labor Cost</th>\r\n            <th>Material Cost</th>\r\n            <th>Income</th>\r\n            <th>Created Date</th>\r\n            <th>Completed Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let completedJob of completedJobs;\" [routerLink]=\"['/jobs/'+completedJob.jobID]\">\r\n            <td>{{completedJob.jobID}}</td>\r\n            <td>{{completedJob.jobLabor}}</td>\r\n            <td>Net Income</td>\r\n            <td>{{completedJob.endDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>  \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noCompletedJobs>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n      <h2 class=\"page-header\">No Completed Jobs</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n</ng-container>\r\n<ng-template #noJobs>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">No Jobs</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </div>\r\n</ng-template> -->"

/***/ }),

/***/ "../../../../../src/app/components/jobs/jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobsComponent = (function () {
    function JobsComponent(jobService) {
        this.jobService = jobService;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.displayTable = false;
    }
    JobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobService.getAllJobs().subscribe(function (jobs) {
            _this.jobs = jobs.jobs;
            _this.jobsLength = jobs.jobs.length;
            _this.filterJobs(jobs);
            _this.setupDataTable();
        });
    };
    JobsComponent.prototype.ngAfterContentInit = function () {
        this.applyTableColor();
    };
    JobsComponent.prototype.applyTableColor = function () {
        this.jobService.getAllJobs().subscribe(function (jobs) {
            jobs.jobs.forEach(function (job) {
                var id = job.jobID;
                var status = job.jobStatus;
                if (status == 'IN-PROGRESS') {
                    document.getElementById(id).classList.add('info');
                }
                else if (status == 'COMPLETED') {
                    document.getElementById(id).classList.add('success');
                }
            });
        });
    };
    JobsComponent.prototype.setupDataTable = function () {
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
        this.dtTrigger.next();
        this.displayTable = true;
    };
    JobsComponent.prototype.filterJobs = function (jobs) {
        this.inProgressJobs = jobs.inProgressJobs;
        this.inProgressLength = jobs.inProgressJobs.length;
        this.completedJobs = jobs.completedJobs;
        this.completedLength = jobs.completedJobs.length;
    };
    return JobsComponent;
}());
JobsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-jobs',
        template: __webpack_require__("../../../../../src/app/components/jobs/jobs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/jobs/jobs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_job_service__["a" /* JobService */]) === "function" && _a || Object])
], JobsComponent);

var _a;
//# sourceMappingURL=jobs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/labor/labor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/labor/labor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pull-left\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">\r\n    <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Go Home</button>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <h2 class=\"page-header\">Labor</h2>\r\n  <h4>Click To Update Or Delete</h4>\r\n  <table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n      <tr class=\"active\">\r\n        <th>Role</th>\r\n        <th>Per Hour Wage</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let labor of labors\" (click)=\"onClickUpdate(labor.roleID, labor.roleName, labor.roleWage)\" data-toggle=\"modal\"\r\n        href='#update-modal'>\r\n        <td>{{labor.roleName}}</td>\r\n        <td>{{labor.roleWage | currency: 'USD':true}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#create-modal'>\r\n    <span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Create New</button>\r\n</div>\r\n\r\n<!--                Create Popup                -->\r\n<div class=\"modal fade\" id=\"create-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Create A New Role</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f=\"ngForm\" (submit)=\"onCreate()\">\r\n          <div class=\"form-group\">\r\n            <label>Role Name</label>\r\n            <input required maxlength=\"50\" #name=\"ngModel\" type=\"text\" [(ngModel)]=\"roleName\" name=\"roleName\" placeholder=\"Role Name\" class=\"form-control\" required>\r\n            <div *ngIf=\"name.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"name.errors.required\">\r\n                *Name is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Role Wage Per Hour</label>\r\n            <input required onKeyPress=\"if(this.value.length==5) return false;\" #wage=\"ngModel\" type=\"number\" [(ngModel)]=\"roleWage\" name=\"roleWage\" placeholder=\"Role Wage Per Hour\" class=\"form-control\" required>\r\n            <div *ngIf=\"wage.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"wage.errors.required\">\r\n                *Wage is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Create</button>\r\n          <button type=\"button\" (click)=\"onClear()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button (click)=\"onClear()\" type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Update Popup                -->\r\n<div class=\"modal fade\" id=\"update-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Update Role</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f2=\"ngForm\" (submit)=\"onUpdate()\">\r\n          <div class=\"form-group\">\r\n            <label>Role Name</label>\r\n            <input required maxlength=\"50\" #name2=\"ngModel\" type=\"text\" [(ngModel)]=\"roleName\" name=\"roleName\" placeholder=\"Role Name\" class=\"form-control\" required>\r\n            <div *ngIf=\"name2.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"name2.errors.required\">\r\n                *Name is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Role Wage Per Hour</label>\r\n            <input required onKeyPress=\"if(this.value.length==5) return false;\" #wage2=\"ngModel\" type=\"number\" [(ngModel)]=\"roleWage\" name=\"roleWage\" placeholder=\"Role Wage Per Hour\" class=\"form-control\" required>\r\n            <div *ngIf=\"wage2.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"wage2.errors.required\">\r\n                *Wage is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"f2.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\r\n          <button type=\"button\" (click)=\"onClear()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" (click)=\"onClear()\" aria-hidden=\"true\"></span> Clear</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-modal'>\r\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete\r\n          </button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button (click)=\"onClear()\" type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Delete Popup                -->\r\n<div class=\"modal fade\" id=\"delete-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete this labor role?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete(); onClear()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/labor/labor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaborComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_labor_service__ = __webpack_require__("../../../../../src/app/services/labor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LaborComponent = (function () {
    function LaborComponent(laborService) {
        this.laborService = laborService;
        this.roleName = '';
        this.roleWage = null;
        this.roleID = null;
    }
    LaborComponent.prototype.ngOnInit = function () {
        this.getLabor();
    };
    LaborComponent.prototype.getLabor = function () {
        var _this = this;
        this.laborService.getAllLabors().subscribe(function (labors) {
            _this.labors = labors.labors;
        });
    };
    LaborComponent.prototype.onClear = function () {
        this.roleID = null;
        this.roleName = '';
        this.roleWage = null;
    };
    LaborComponent.prototype.onCreate = function () {
        var _this = this;
        var newLabor = {
            roleName: this.roleName,
            roleWage: this.roleWage
        };
        this.laborService.createLabor(newLabor).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.onClear();
                _this.getLabor();
                $('#create-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    LaborComponent.prototype.onClickUpdate = function (roleID, roleName, roleWage) {
        this.roleID = roleID;
        this.roleName = roleName;
        this.roleWage = roleWage;
    };
    LaborComponent.prototype.onUpdate = function () {
        var _this = this;
        var updatedLabor = {
            roleID: this.roleID,
            roleName: this.roleName,
            roleWage: this.roleWage
        };
        this.laborService.updateLabor(updatedLabor).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.onClear();
                _this.getLabor();
                $('#update-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    LaborComponent.prototype.onDelete = function () {
        var _this = this;
        this.laborService.deleteLabor(this.roleID).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.onClear();
                _this.getLabor();
                $('#update-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    return LaborComponent;
}());
LaborComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-labor',
        template: __webpack_require__("../../../../../src/app/components/labor/labor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/labor/labor.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_labor_service__["a" /* LaborService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_labor_service__["a" /* LaborService */]) === "function" && _a || Object])
], LaborComponent);

var _a;
//# sourceMappingURL=labor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <h1>Allied Waterproofing</h1>\r\n    <p>Project Management</p>\r\n  </div>\r\n</div>\r\n\r\n<h2 class=\"page-header\">Login</h2>\r\n<form #f=\"ngForm\" (submit)=\"onLogin()\">\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input required maxlength=\"50\" #username1=\"ngModel\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\"\r\n      class=\"form-control\">\r\n    <div *ngIf=\"username1.invalid\" style=\"color:#ff0000\">\r\n      <div *ngIf=\"username1.errors.required\">\r\n        *Username is required\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input required maxlength=\"50\" #password1=\"ngModel\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\"\r\n      class=\"form-control\">\r\n    <div *ngIf=\"password1.invalid\" style=\"color:#ff0000\">\r\n      <div *ngIf=\"password1.errors.required\">\r\n        *Password is required\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n    <span class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></span> Login</button>\r\n  <button type=\"button\" (click)=\"clearFields()\" class=\"btn btn-warning\">\r\n    <span class=\"glyphicon glyphicon-repeat\" aria-hidden=\"true\"></span> Clear</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['home']);
            }
            else {
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent.prototype.clearFields = function () {
        this.username = '';
        this.password = '';
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/materials/materials.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/materials/materials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pull-left\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">\r\n    <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Go Home</button>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <ng-container *ngIf=\"length != 0; else noMaterials\">\r\n    <h2 class=\"page-header\">Materials</h2>\r\n    <h4>Click To Update Or Delete</h4>\r\n    <!-- *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" -->\r\n    <table class=\"table table-bordered table-hover\">\r\n      <thead>\r\n        <tr class=\"active\">\r\n          <th>Name</th>\r\n          <th>Price Per Unit</th>\r\n          <th>Coverage In Linear Feet</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let material of materials\" (click)=\"onClickUpdate(material.materialID, material.materialName, material.pricePerUnit, material.linearFeetCoverage)\"\r\n          data-toggle=\"modal\" href='#update-modal'>\r\n          <td>{{material.materialName}}</td>\r\n          <td>{{material.pricePerUnit | currency: 'USD':true}}</td>\r\n          <td>{{material.linearFeetCoverage}} ft</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </ng-container>\r\n  <ng-template #noMaterials>\r\n    <h2 class=\"page-header\">No Materials</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </ng-template>\r\n  <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#create-modal'>\r\n    <span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Create New</button>\r\n</div>\r\n\r\n<!--                Update Popup                -->\r\n<div class=\"modal fade\" id=\"update-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Update Material</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f2=\"ngForm\" (submit)=\"onUpdate()\">\r\n          <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input required maxlength=\"50\" #materialName2=\"ngModel\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\">\r\n            <div *ngIf=\"materialName2.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"materialName2.errors.required\">\r\n                *Name is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Price Per Unit</label>\r\n            <input required onKeyPress=\"if(this.value.length==5) return false;\" #perUnit2=\"ngModel\" type=\"number\" [(ngModel)]=\"pricePerUnit\"\r\n              name=\"pricePerUnit\" placeholder=\"Price Per Unit\" class=\"form-control\">\r\n            <div *ngIf=\"perUnit2.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"perUnit2.errors.required\">\r\n                *Per unit price is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Coverage In Linear Feet</label>\r\n            <input required mask=\"0000000\" #coverage2=\"ngModel\" type=\"number\" [(ngModel)]=\"linearFeetCoverage\"\r\n              name=\"linearFeetCoverage\" placeholder=\"Coverage In Linear Feet\" class=\"form-control\">\r\n            <div *ngIf=\"coverage2.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"coverage2.errors.required\">\r\n                *Linear feet coverage is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"f2.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\r\n          <button type=\"button\" (click)=\"onClear()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-modal'>\r\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete\r\n          </button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button (click)=\"onClear()\" type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Delete Popup                -->\r\n<div class=\"modal fade\" id=\"delete-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete this material?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Create Popup                -->\r\n<div class=\"modal fade\" id=\"create-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Create A New Material</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f=\"ngForm\" (submit)=\"onCreate()\">\r\n          <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input required maxlength=\"50\" #materialName=\"ngModel\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\">\r\n            <div *ngIf=\"materialName.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"materialName.errors.required\">\r\n                *Name is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Price Per Unit</label>\r\n            <input required onKeyPress=\"if(this.value.length==5) return false;\" #perUnit=\"ngModel\" type=\"number\" [(ngModel)]=\"pricePerUnit\"\r\n              name=\"pricePerUnit\" placeholder=\"Price Per Unit\" class=\"form-control\">\r\n            <div *ngIf=\"perUnit.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"perUnit.errors.required\">\r\n                *Per unit price is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Coverage In Linear Feet</label>\r\n            <input required mask=\"0000000\" #coverage=\"ngModel\" type=\"number\" [(ngModel)]=\"linearFeetCoverage\"\r\n              name=\"linearFeetCoverage\" placeholder=\"Coverage In Linear Feet\" class=\"form-control\">\r\n            <div *ngIf=\"coverage.invalid\" style=\"color:#ff0000\">\r\n              <div *ngIf=\"coverage.errors.required\">\r\n                *Linear feet coverage is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n            <span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Create</button>\r\n          <button type=\"button\" (click)=\"onClear()\" class=\"btn btn-warning\">\r\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button (click)=\"onClear()\" type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/materials/materials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_material_service__ = __webpack_require__("../../../../../src/app/services/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialsComponent = (function () {
    function MaterialsComponent(materialService) {
        this.materialService = materialService;
        this.name = '';
        this.pricePerUnit = null;
        this.linearFeetCoverage = null;
        this.tempID = null;
        this.length = null;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.displayTable = false;
    }
    MaterialsComponent.prototype.ngOnInit = function () {
        this.getMaterials();
        // this.setupDataTable();
    };
    MaterialsComponent.prototype.getMaterials = function () {
        var _this = this;
        this.materialService.getAllMaterials().subscribe(function (materials) {
            _this.materials = materials.materials;
            _this.length = _this.materials.length;
        });
    };
    MaterialsComponent.prototype.setupDataTable = function () {
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
        this.dtTrigger.next();
        this.displayTable = true;
    };
    MaterialsComponent.prototype.onClear = function () {
        this.tempID = null;
        this.name = '';
        this.pricePerUnit = null;
        this.linearFeetCoverage = null;
    };
    MaterialsComponent.prototype.onClickUpdate = function (materialID, name, pricePerUnit, linearFeetCoverage) {
        this.tempID = materialID;
        this.name = name;
        this.pricePerUnit = pricePerUnit;
        this.linearFeetCoverage = linearFeetCoverage;
    };
    MaterialsComponent.prototype.onUpdate = function () {
        var _this = this;
        var updateMaterial = {
            materialID: this.tempID,
            materialName: this.name,
            pricePerUnit: this.pricePerUnit,
            linearFeetCoverage: this.linearFeetCoverage
        };
        this.materialService.updateMaterial(updateMaterial).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.onClear();
                _this.getMaterials();
                $('#update-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    MaterialsComponent.prototype.onCreate = function () {
        var _this = this;
        var newMaterial = {
            materialName: this.name,
            pricePerUnit: this.pricePerUnit,
            linearFeetCoverage: this.linearFeetCoverage
        };
        this.materialService.createMaterial(newMaterial).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.onClear();
                _this.getMaterials();
                $('#create-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    MaterialsComponent.prototype.onDeleteClick = function (materialID) {
        this.tempID = materialID;
    };
    MaterialsComponent.prototype.onDelete = function () {
        var _this = this;
        this.materialService.deleteMaterial(this.tempID).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.onClear();
                _this.getMaterials();
                $('#update-modal').modal('hide');
            }
            else {
                console.log(data.msg);
            }
        });
    };
    return MaterialsComponent;
}());
MaterialsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-materials',
        template: __webpack_require__("../../../../../src/app/components/materials/materials.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/materials/materials.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_material_service__["a" /* MaterialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_material_service__["a" /* MaterialService */]) === "function" && _a || Object])
], MaterialsComponent);

var _a;
//# sourceMappingURL=materials.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fill-remaining-space {\r\n    /*This fills the remaining space, by using flexbox.  \r\n   Every toolbar row uses a flexbox row layout. */\r\n   -webkit-box-flex: 1;\r\n       -ms-flex: 1 1 auto;\r\n           flex: 1 1 auto;\r\n};", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://stackoverflow.com/questions/38209713/how-to-make-a-responsive-nav-bar-using-angular-material-2 -->\r\n<!--<md-sidenav-containe fullscreen>-->\r\n<!--<md-sidenav-container>\r\n    <md-toolbar color=\"primary\">\r\n        <button md-button [routerLink]=\"['/']\"><md-icon>home</md-icon>Allied Waterproofing</button>\r\n        <span class=\"fill-remaining-space\"></span>\r\n        <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\r\n            <button md-button [routerLink]=\"['/customers']\">Customers</button>\r\n            <button md-button [routerLink]=\"['/']\">Something</button>\r\n        </div>\r\n        <button md-button [md-menu-trigger-for]=\"menu\" fxHide=\"false\" fxHide.gt-sm><md-icon>menu</md-icon></button>\r\n    </md-toolbar>\r\n    <md-menu x-position=\"before\" #menu=\"mdMenu\">\r\n        <button md-menu-item [routerLink]=\"['/customers']\">Customers</button>\r\n        <button md-menu-item [routerLink]=\"['/']\">Something</button>\r\n    </md-menu>\r\n</md-sidenav-container>-->\r\n\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\">Allied Waterproofing</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/home']\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Home</a></li>\r\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/customers']\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Customers</a></li>\r\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/inquiries']\"><span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Inquiries</a></li>\r\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/bids']\"><span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Bids</a></li>\r\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/jobs']\"><span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Jobs</a></li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li class=\"dropdown\">\r\n                <a *ngIf=\"authService.loggedIn()\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\r\n                    <span class=\"glyphicon glyphicon-collapse-down\"></span> Manage\r\n                </a>\r\n                <ul class=\"dropdown-menu\" role=\"menu\">\r\n                    <li>\r\n                        <a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/materials']\">\r\n                            <span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Materials</a>\r\n                    </li>\r\n                    <li>\r\n                        <a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/labor']\">\r\n                            <span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Labor</a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                        <a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/profile']\">\r\n                            <span class=\"glyphicon glyphicon-info-sign\" aria-hidden=\"true\"></span> Profile</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <!-- <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/materials']\"><span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Materials</a></li>\r\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/labor']\"><span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Labor</a></li> -->\r\n            <!-- <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/register']\">Register User</a></li> -->\r\n            <li><a *ngIf=\"authService.loggedIn()\" data-toggle=\"modal\" href='#logout-modal'><span class=\"glyphicon glyphicon-log-out\" aria-hidden=\"true\"></span> Logout</a></li>\r\n        </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n</nav>\r\n\r\n\r\n<!--                Logout Popup                -->\r\n<div class=\"modal fade\" id=\"logout-modal\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                <h4 class=\"modal-title\">Warning</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Are you sure you want to logout?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onLogout()\">Yes</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.loggedIn = this.authService.loggedIn();
        console.log(this.loggedIn);
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        console.log('Logged out');
        this.router.navigate(['/']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pull-left\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">\r\n    <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Go Home</button>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <h2 class=\"page-header\">Profile</h2>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>\n<h2 class=\"page-header\">Register A New User</h2>\n<form (submit)=\"onRegister()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" class=\"form-control\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" required>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n  <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        if (this.name == undefined || this.username == undefined || this.password == undefined) {
            console.log("Fields must be filled in");
        }
        else {
            var user = {
                name: this.name,
                username: this.username,
                password: this.password
            };
            this.authService.registerUser(user).subscribe(function (data) {
                if (data.success) {
                    console.log(data.msg);
                    _this.router.navigate(['/home']);
                }
                else {
                    console.log(data.msg);
                }
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cookie_storage__ = __webpack_require__("../../../../cookie-storage/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cookie_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_cookie_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.cookieStorage = new __WEBPACK_IMPORTED_MODULE_5_cookie_storage__["CookieStorage"]();
        // localHttp:String = 'http://localhost:3000/api';
        this.localHttp = 'api';
    }
    AuthService.prototype.registerUser = function (user) {
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.post(this.localHttp + "/users/register", JSON.stringify(user), { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.localHttp + "/users/authenticate", JSON.stringify(user), { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token); //jwt looks for id_token by default
        localStorage.setItem('user', JSON.stringify(user)); // local storage can only store strings
        // this.cookieStorage.setItem('id_token', token);
        // this.cookieStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        // this.cookieStorage.clear();
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        // const token = this.cookieStorage.getItem('id_token');
        this.authToken = token;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/bid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BidService = (function () {
    function BidService(http, authService) {
        this.http = http;
        this.authService = authService;
        // localHttp: String = 'http://localhost:3000/api';
        this.localHttp = 'api';
    }
    /************************************************************** Bid ***************************************************************************************/
    BidService.prototype.getAllBids = function () {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/bids/all", { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.getBidById = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/bids/" + id, { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.createBid = function (newBid) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/bids/new", JSON.stringify(newBid), { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.deleteBid = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/bids/delete/" + id, JSON.stringify({}), { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.updateBid = function (updatedBid) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/bids/update", JSON.stringify(updatedBid), { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.updateBidStatus = function (updatedBid) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/bids/update-status", JSON.stringify(updatedBid), { headers: headers }).map(function (response) { return response.json(); });
    };
    /************************************************************** Bid Materials ***************************************************************************************/
    BidService.prototype.getBidMaterialsById = function (bidId) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/bids/" + bidId + "/bid-materials", { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.createBidMaterial = function (newBidMaterial) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/bids/new/bid-material", JSON.stringify(newBidMaterial), { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.getCurrentBidMaterialsCost = function (bidID) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/bids/" + bidID + "/bid-materials/cost", { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.createBidMaterialById = function (id, bidMaterial) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/bids/" + id + "/new/bid-material", JSON.stringify(bidMaterial), { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.deleteBidMaterial = function (bidMaterial) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/bids/remove/material", JSON.stringify(bidMaterial), { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.updateBidMaterial = function (updatedBidMaterial) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/bids/change/material", JSON.stringify(updatedBidMaterial), { headers: headers }).map(function (response) { return response.json(); });
    };
    /************************************************************** Bid Labors ***************************************************************************************/
    BidService.prototype.getBidLaborsById = function (bidId) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/bids/" + bidId + "/bid-labors", { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.createBidLabor = function (newBidLabor) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/bids/new/bid-labor", JSON.stringify(newBidLabor), { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.getCurrentBidLaborsCost = function (bidID) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/bids/" + bidID + "/bid-labors/cost", { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.createBidLaborById = function (id, bidLabor) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/bids/" + id + "/new/bid-labor", JSON.stringify(bidLabor), { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.deleteBidLabor = function (laborID) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/bids/delete/bid-labor/" + laborID, JSON.stringify({}), { headers: headers }).map(function (response) { return response.json(); });
    };
    BidService.prototype.updateBidLabor = function (updatedBidLabor) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/bids/update/bid-labor", JSON.stringify(updatedBidLabor), { headers: headers }).map(function (response) { return response.json(); });
    };
    return BidService;
}());
BidService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], BidService);

var _a, _b;
//# sourceMappingURL=bid.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerService = (function () {
    function CustomerService(http, authService) {
        this.http = http;
        this.authService = authService;
        // localHttp:String = 'http://localhost:3000/api';
        this.localHttp = 'api';
    }
    CustomerService.prototype.getAllCustomers = function () {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/customers/all", { headers: headers }).map(function (response) { return response.json(); });
    };
    CustomerService.prototype.getAllContacts = function (customerID) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/customers/" + customerID + "/contacts", { headers: headers }).map(function (response) { return response.json(); });
    };
    CustomerService.prototype.getCustomerById = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(this.localHttp + "/customers/" + id, { headers: headers }).map(function (response) { return response.json(); });
    };
    CustomerService.prototype.deleteCustomer = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/customers/delete/" + id, JSON.stringify({}), { headers: headers }).map(function (response) { return response.json(); });
    };
    CustomerService.prototype.deleteContact = function (contactID) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/customers/delete/contact/" + contactID, JSON.stringify({}), { headers: headers }).map(function (response) { return response.json(); });
    };
    CustomerService.prototype.createCustomer = function (newCustomer) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/customers/new", JSON.stringify(newCustomer), { headers: headers }).map(function (response) { return response.json(); });
    };
    CustomerService.prototype.createContact = function (newContact) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/customers/" + newContact.customerID + "/new/contact", JSON.stringify(newContact), { headers: headers }).map(function (response) { return response.json(); });
    };
    CustomerService.prototype.updateCustomer = function (updatedCustomer) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/customers/update", JSON.stringify(updatedCustomer), { headers: headers }).map(function (response) { return response.json(); });
    };
    CustomerService.prototype.updateContact = function (updatedContact) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/customers/update/contact", JSON.stringify(updatedContact), { headers: headers }).map(function (response) { return response.json(); });
    };
    return CustomerService;
}());
CustomerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], CustomerService);

var _a, _b;
//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/inquiry.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InquiryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InquiryService = (function () {
    function InquiryService(http, authService) {
        this.http = http;
        this.authService = authService;
        // localHttp:String = 'http://localhost:3000/api';
        this.localHttp = 'api';
    }
    InquiryService.prototype.getAllInquiries = function () {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/inquiries/all", { headers: headers }).map(function (response) { return response.json(); });
    };
    InquiryService.prototype.getAllInquiriesTest = function () {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/inquiries/all", { headers: headers });
    };
    InquiryService.prototype.getInquiryById = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/inquiries/" + id, { headers: headers }).map(function (response) { return response.json(); });
    };
    InquiryService.prototype.createInquiry = function (newInquiry) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/inquiries/new", JSON.stringify(newInquiry), { headers: headers }).map(function (response) { return response.json(); });
    };
    InquiryService.prototype.deleteInquiry = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/inquiries/delete/" + id, JSON.stringify({}), { headers: headers }).map(function (response) { return response.json(); });
    };
    InquiryService.prototype.updateInquiry = function (updatedInquiry) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/inquiries/update", JSON.stringify(updatedInquiry), { headers: headers }).map(function (response) { return response.json(); });
    };
    InquiryService.prototype.updateInquiryStatus = function (updatedInquiry) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/inquiries/update-status", JSON.stringify(updatedInquiry), { headers: headers }).map(function (response) { return response.json(); });
    };
    return InquiryService;
}());
InquiryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], InquiryService);

var _a, _b;
//# sourceMappingURL=inquiry.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/job.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobService = (function () {
    function JobService(http, authService) {
        this.http = http;
        this.authService = authService;
        // localHttp: String = 'http://localhost:3000/api';
        this.localHttp = 'api';
    }
    /********************************************************************* JOB FUNCTIONS ***********************************************************************/
    JobService.prototype.getAllJobs = function () {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/jobs/all", { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.getJobById = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/jobs/" + id, { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.getCurrentJobs = function () {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/jobs/all/current", { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.getCurrentJobsCosts = function () {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/jobs/all/current/costs", { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.createJob = function (newJob) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/new", JSON.stringify(newJob), { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.deleteJob = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/delete/" + id, JSON.stringify({}), { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.updateJob = function (updatedJob) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/update", JSON.stringify(updatedJob), { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.updateJobStatus = function (updatedJob) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/update-status", JSON.stringify(updatedJob), { headers: headers }).map(function (response) { return response.json(); });
    };
    /********************************************************************* MATERIAL FUNCTIONS ***********************************************************************/
    JobService.prototype.getJobMaterialsById = function (jobId) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/jobs/" + jobId + "/job-materials", { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.getCurrentJobMaterialsCost = function (jobId) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/jobs/" + jobId + "/job-materials/cost", { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.createJobMaterial = function (id, newJobMaterial) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/" + id + "/new/job-material", JSON.stringify(newJobMaterial), { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.deleteJobMaterial = function (materialID, jobID) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/" + jobID + "/delete/job-material/" + materialID, JSON.stringify({}), { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.updateJobMaterial = function (updatedJobMaterial) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/modify/job-material", JSON.stringify(updatedJobMaterial), { headers: headers }).map(function (response) { return response.json(); });
    };
    /********************************************************************* CHANGE ORDER FUNCTIONS ***********************************************************************/
    JobService.prototype.createChangeOrder = function (id, newChangeOrder) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/new/change-order/" + id, JSON.stringify(newChangeOrder), { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.getChangeOrdersById = function (jobId) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/jobs/" + jobId + "/change-orders", { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.deleteChangeOrder = function (changeID) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/delete/change-order/" + changeID, JSON.stringify({}), { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.updateChangeOrder = function (updateChangeOrder) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/update/change-order", JSON.stringify(updateChangeOrder), { headers: headers }).map(function (response) { return response.json(); });
    };
    /********************************************************************* REVENUE FUNCTIONS ***********************************************************************/
    JobService.prototype.createRevenue = function (newRevenue) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/create/job-revenue", JSON.stringify(newRevenue), { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.getRevenuesById = function (jobId) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/jobs/" + jobId + "/job-revenues", { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.deleteRevenue = function (revenueID) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/remove/revenue/id/" + revenueID, JSON.stringify({}), { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.updateJobRevenue = function (updatedJobRevenue) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/change/job-revenue", JSON.stringify(updatedJobRevenue), { headers: headers }).map(function (response) { return response.json(); });
    };
    /********************************************************************* LABOR FUNCTIONS ***********************************************************************/
    JobService.prototype.createLabor = function (jobID, newLabor) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/" + jobID + "/create/job-labor", JSON.stringify(newLabor), { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.getLaborsById = function (jobId) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/jobs/" + jobId + "/job-labors", { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.deleteLabor = function (laborID) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/delete/job-labor/" + laborID, JSON.stringify({}), { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.updateJobLabor = function (updatedJobLabor) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/update/job-labor", JSON.stringify(updatedJobLabor), { headers: headers }).map(function (response) { return response.json(); });
    };
    /********************************************************************* FILE FUNCTIONS ***********************************************************************/
    JobService.prototype.getJobFilesByID = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/jobs/" + id + "/files", { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.deleteJobFile = function (id, file) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/" + id + "/files/delete", JSON.stringify(file), { headers: headers }).map(function (response) { return response.json(); });
    };
    return JobService;
}());
JobService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], JobService);

var _a, _b;
//# sourceMappingURL=job.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/labor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaborService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LaborService = (function () {
    function LaborService(http, authService) {
        this.http = http;
        this.authService = authService;
        // localHttp: String = 'http://localhost:3000/api';
        this.localHttp = 'api';
    }
    LaborService.prototype.getAllLabors = function () {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/labors/all", { headers: headers }).map(function (response) { return response.json(); });
    };
    LaborService.prototype.createLabor = function (newLabor) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/labors/new", JSON.stringify(newLabor), { headers: headers }).map(function (response) { return response.json(); });
    };
    LaborService.prototype.deleteLabor = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/labors/delete/" + id, JSON.stringify({}), { headers: headers }).map(function (response) { return response.json(); });
    };
    LaborService.prototype.updateLabor = function (updatedLabor) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/labors/update", JSON.stringify(updatedLabor), { headers: headers }).map(function (response) { return response.json(); });
    };
    return LaborService;
}());
LaborService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], LaborService);

var _a, _b;
//# sourceMappingURL=labor.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/material.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaterialService = (function () {
    function MaterialService(http, authService) {
        this.http = http;
        this.authService = authService;
        // localHttp:String = 'http://localhost:3000/api';
        this.localHttp = 'api';
    }
    MaterialService.prototype.getAllMaterials = function () {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/materials/all", { headers: headers }).map(function (response) { return response.json(); });
    };
    MaterialService.prototype.createMaterial = function (newMaterial) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/materials/new", JSON.stringify(newMaterial), { headers: headers }).map(function (response) { return response.json(); });
    };
    MaterialService.prototype.deleteMaterial = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/materials/delete/" + id, JSON.stringify({}), { headers: headers }).map(function (response) { return response.json(); });
    };
    MaterialService.prototype.updateMaterial = function (updatedMaterial) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/materials/update", JSON.stringify(updatedMaterial), { headers: headers }).map(function (response) { return response.json(); });
    };
    return MaterialService;
}());
MaterialService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], MaterialService);

var _a, _b;
//# sourceMappingURL=material.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map