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

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\" style=\"padding-top: 80px; padding-bottom: 20px;\">\n    <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_inquiry_service__ = __webpack_require__("../../../../../src/app/services/inquiry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_bid_service__ = __webpack_require__("../../../../../src/app/services/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_material_service__ = __webpack_require__("../../../../../src/app/services/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_labor_service__ = __webpack_require__("../../../../../src/app/services/labor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
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
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'customers', component: __WEBPACK_IMPORTED_MODULE_12__components_customers_customers_component__["a" /* CustomersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'customers/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_customer_customer_component__["a" /* CustomerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'inquiries', component: __WEBPACK_IMPORTED_MODULE_15__components_inquiries_inquiries_component__["a" /* InquiriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'bids', component: __WEBPACK_IMPORTED_MODULE_16__components_bids_bids_component__["a" /* BidsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'jobs', component: __WEBPACK_IMPORTED_MODULE_17__components_jobs_jobs_component__["a" /* JobsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'create-bid/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_create_bid_create_bid_component__["a" /* CreateBidComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'materials', component: __WEBPACK_IMPORTED_MODULE_20__components_materials_materials_component__["a" /* MaterialsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'bids/:id', component: __WEBPACK_IMPORTED_MODULE_21__components_bid_bid_component__["a" /* BidComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'inquiries/:id', component: __WEBPACK_IMPORTED_MODULE_22__components_inquiry_inquiry_component__["a" /* InquiryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'jobs/:id', component: __WEBPACK_IMPORTED_MODULE_23__components_job_job_component__["a" /* JobComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'labor', component: __WEBPACK_IMPORTED_MODULE_24__components_labor_labor_component__["a" /* LaborComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */]] }
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
            __WEBPACK_IMPORTED_MODULE_24__components_labor_labor_component__["a" /* LaborComponent */]
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
            __WEBPACK_IMPORTED_MODULE_25__services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_26__services_inquiry_service__["a" /* InquiryService */],
            __WEBPACK_IMPORTED_MODULE_27__services_bid_service__["a" /* BidService */],
            __WEBPACK_IMPORTED_MODULE_28__services_job_service__["a" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_29__services_material_service__["a" /* MaterialService */],
            __WEBPACK_IMPORTED_MODULE_30__services_labor_service__["a" /* LaborService */],
            __WEBPACK_IMPORTED_MODULE_31__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_32__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_33_ngx_cookie_service__["a" /* CookieService */]
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/bid/bid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/bids']\"><span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Go To Bids</button>\n</div>\n\n<h2 class=\"page-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">Bid #{{bid[0].bidID}}</h2>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <ng-container *ngIf=\"bid; else noBid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Bid Details</h3>\n      </div>\n      <div class=\"panel-body\" style=\"word-break:break-all\">\n        <h4 class=\"page-header\" style=\"margin-top:0;\">General</h4>\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr class=\"active\">\n              <th>Price</th>\n              <th>Created Date</th>\n              <th *ngIf=\"bid[0].bidStatus == 'ACCEPTED'\">Accepted Date</th>\n              <th *ngIf=\"bid[0].bidStatus == 'DECLINED'\">Declined Date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{bid[0].bidPrice | currency: 'USD':true}}</td>\n              <td>{{bid[0].createdDate | date: 'MM/dd/yyyy'}}</td>\n              <td *ngIf=\"bid[0].bidStatus == 'ACCEPTED'\">{{bid[0].endDate | date: 'MM/dd/yyyy'}}</td>\n              <td *ngIf=\"bid[0].bidStatus == 'DECLINED'\">{{bid[0].endDate | date: 'MM/dd/yyyy'}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <button (click)=\"onClickUpdateBid()\" type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" href='#update-bid-modal'>\n          <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> Update Price</button>\n        <h4 class=\"page-header\" *ngIf=\"bidLabors[0] != null;\">Labor Costs</h4>\n        <label *ngIf=\"bidLabors[0] != null;\">Click To Update Or Delete</label>\n        <table class=\"table table-bordered table-hover\">\n          <thead *ngIf=\"bidLabors[0] != null;\">\n            <tr class=\"active\">\n              <th>Role</th>\n              <th class=\"hidden-xs hidden-sm\">Wage</th>\n              <th>Hours</th>\n              <th>Total</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let bidLabor of bidLabors; let i = index\" (click)=\"onClickUpdateBidLabor(i)\" data-toggle=\"modal\" href='#update-labor-modal'>\n              <td>{{bidLabor.roleName}}</td>\n              <td class=\"hidden-xs hidden-sm\">{{bidLabor.roleWage | currency: 'USD':true}}</td>\n              <td>{{bidLabor.laborHours}}</td>\n              <td>{{bidLabor.roleWage*bidLabor.laborHours | currency: 'USD':true}}</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr class=\"active\" *ngIf=\"totalLaborPriceTable != 0\">\n              <th>Grand Total</th>\n              <th class=\"hidden-xs hidden-sm\"></th>\n              <th></th>\n              <th>{{totalLaborPriceTable | currency: 'USD':true}}</th>\n            </tr>\n          </tfoot>\n        </table>\n        <button (click)=\"onClearBidLabor()\" class=\"btn btn-info\" data-toggle=\"modal\" href='#create-labor-modal'>\n          <span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Add Labor</button>\n        <h4 class=\"page-header\" *ngIf=\"bidMaterials[0] != null;\">Material Cost</h4>\n        <label *ngIf=\"bidMaterials[0] != null;\">Click To Update Or Delete</label>\n        <table class=\"table table-bordered table-hover\">\n          <thead *ngIf=\"bidMaterials[0] != null;\">\n            <tr class=\"active\">\n              <th>Material</th>\n              <th>Linear Feet</th>\n              <th class=\"hidden-xs hidden-sm\">Price Per Unit</th>\n              <th class=\"hidden-xs hidden-sm\">Coverage In Linear Feet</th>\n              <th>Total</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let bidMaterial of bidMaterials; let i = index\" data-toggle=\"modal\" href='#update-material-modal' (click)=\"onClickUpdateBidMaterial(bidMaterial.materialID, i)\">\n              <td>{{bidMaterial.materialName}}</td>\n              <td>{{bidMaterial.linearFeet}}</td>\n              <td class=\"hidden-xs hidden-sm\">{{bidMaterial.pricePerUnit | currency: 'USD':true}}</td>\n              <td class=\"hidden-xs hidden-sm\">{{bidMaterial.linearFeetCoverage}} ft</td>\n              <td>{{bidMaterial.pricePerUnit / bidMaterial.linearFeetCoverage * bidMaterial.linearFeet | currency: 'USD':true}}</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr class=\"active\" *ngIf=\"totalMaterialPriceTable != 0\">\n              <th>Grand Total</th>\n              <th></th>\n              <th class=\"hidden-xs hidden-sm\"></th>\n              <th class=\"hidden-xs hidden-sm\"></th>\n              <th>{{totalMaterialPriceTable | currency: 'USD':true}}</th>\n            </tr>\n          </tfoot>\n        </table>\n        <button *ngIf=\"materials[0] != null\" (click)=\"onClearBidMaterial()\" class=\"btn btn-info\" data-toggle=\"modal\" href='#create-material-modal'>\n          <span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Add Materials</button>\n        <hr *ngIf=\"bidMaterials[0] != null;\">\n        <button *ngIf=\"status == 'PENDING'\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#create-job-modal'>\n          <span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Create Job</button>\n        <!-- <button *ngIf=\"status == 'PENDING'\" type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" href='#update-bid-modal'> -->\n        <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-bid-modal'>\n          <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete Bid</button>\n      </div>\n    </div>\n  </ng-container>\n  <ng-template #noBid>\n    <h2 class=\"page-header\">No Bids</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </ng-template>\n</div>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Inquiry Details</h3>\n    </div>\n    <div class=\"panel-body\" style=\"word-break:break-all\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr class=\"active\">\n            <th>Received Date</th>\n            <th>Accepted Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{bid[0].inquiryReceivedDate | date: 'MM/dd/yyyy'}}</td>\n            <td>{{bid[0].inquiryEndDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr class=\"active\">\n            <th>Description</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{bid[0].description}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/inquiries/'+bid[0].inquiryID]\">\n        <span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Open Inquiry</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Customer Details</h3>\n    </div>\n    <div class=\"panel-body\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr class=\"active\">\n            <th>Name</th>\n            <th>Address</th>\n            <th>City</th>\n            <th class=\"hidden-xs hidden-sm\">State</th>\n            <th class=\"hidden-xs hidden-sm\">ZIP</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{bid[0].customerName}}</td>\n            <td>{{bid[0].customerAddress}}</td>\n            <td>{{bid[0].customerCity}}</td>\n            <td class=\"hidden-xs hidden-sm\">{{bid[0].customerState}}</td>\n            <td class=\"hidden-xs hidden-sm\">{{bid[0].customerZIP}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/customers/'+bid[0].customerID]\">\n        <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Open Customer</button>\n    </div>\n  </div>\n</div>\n\n<!--                                          Bid Popups                                              -->\n<!--                Delete Bid Popup                -->\n<div class=\"modal fade\" id=\"delete-bid-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this bid?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create Job Popup                -->\n<div class=\"modal fade\" id=\"create-job-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to create a job?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onCreate()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Update Bid Popup                -->\n<div class=\"modal fade\" id=\"update-bid-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Change Bid Price</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onUpdate()\">\n          <div class=\"form-group\">\n            <input type=\"text\" [(ngModel)]=\"bidPrice\" name=\"bidPrice\" placeholder=\"Bid Price\" class=\"form-control\" required>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"reset\" class=\"btn btn-warning\" (click)=\"onClear()\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                                     Bid Material Popups                                           -->\n<!--                Update Material Popup                -->\n<div class=\"modal fade\" id=\"update-material-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update {{materialName}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onUpdateBidMaterial()\">\n          <div class=\"form-group\">\n            <label>Linear Feet</label>\n            <input type=\"number\" [(ngModel)]=\"linearFeet\" name=\"linearFeet\" placeholder=\"Linear Feet\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Price Per Unit</label>\n            <input type=\"number\" [(ngModel)]=\"pricePerUnit\" name=\"pricePerUnit\" placeholder=\"Price Per Unit\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Coverage In Linear Feet</label>\n            <input type=\"number\" [(ngModel)]=\"linearFeetCoverage\" name=\"linearFeetCoverage\" placeholder=\"Coverage In Linear Feet\" class=\"form-control\"\n              required>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"reset\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-material-modal'>\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create Material Popup                -->\n<div class=\"modal fade\" id=\"create-material-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Add Materials</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onCreateMaterial()\">\n          <table class=\"table table-bordered\" *ngIf=\"materials[0] != null\">\n            <thead>\n              <tr class=\"active\">\n                <th>Name</th>\n                <th>Linear Feet</th>\n                <th>Add</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  <select (change)=\"onChangeMaterial($event.target.value)\" class=\"form-control\">\n                    <option></option>\n                    <option [value]=\"i\" *ngFor=\"let material of materials; let i = index;\">{{material.materialName}}</option>\n                  </select>\n                </td>\n                <td>\n                  <input type=\"text\" [(ngModel)]=\"linearFeet\" name=\"linearFeet\" placeholder=\"Linear Feet\" class=\"form-control\" required>\n                </td>\n                <td>\n                  <button (click)=\"onAddMaterial()\" type=\"button\" class=\"btn btn-success\">\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <table class=\"table table-bordered\" *ngIf=\"selectedMaterials1.length != 0;\">\n            <thead>\n              <tr class=\"active\">\n                <th>Name</th>\n                <th>Estimated Cost</th>\n                <th>Delete</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let selectedMaterial of selectedMaterials1; let i = index\">\n                <td>{{selectedMaterial.materialName}}</td>\n                <td>{{selectedMaterial.linearFeet*(selectedMaterial.pricePerUnit/selectedMaterial.linearFeetCoverage) | currency:\n                  'USD':true}}\n                </td>\n                <td>\n                  <button (click)=\"onRemoveMaterial(selectedMaterial, i)\" type=\"button\" class=\"btn btn-danger\">\n                    <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <tr class=\"active\">\n                <th>Total Material Cost</th>\n                <th>{{totalMaterialPrice | currency: 'USD':true}}</th>\n                <th></th>\n              </tr>\n            </tfoot>\n          </table>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Add</button>\n          <button type=\"reset\" class=\"btn btn-warning\" (click)=\"onClearBidMaterial()\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete Material Popup                -->\n<div class=\"modal fade\" id=\"delete-material-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete\n          <b>{{materialName | lowercase}}</b> from the current bid?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteBidMaterial()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--                                     Bid Labor Popups                                           -->\n<!--                Update labor Popup                -->\n<div class=\"modal fade\" id=\"update-labor-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update {{roleName}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onUpdateBidLabor()\">\n          <div class=\"form-group\">\n            <label>Wage</label>\n            <input type=\"text\" [(ngModel)]=\"wage\" name=\"wage\" placeholder=\"Wage\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Hours</label>\n            <input type=\"text\" [(ngModel)]=\"hours\" name=\"hours\" placeholder=\"Hours\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary\">\n              <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n            <button type=\"reset\" class=\"btn btn-warning\">\n              <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n            <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-labor-modal'>\n              <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</button>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create labor Popup                -->\n<div class=\"modal fade\" id=\"create-labor-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Add Labor</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onCreateBidLabor()\">\n          <table class=\"table table-bordered\" *ngIf=\"labors[0] != null\">\n            <thead>\n              <tr class=\"active\">\n                <th>Role</th>\n                <th>Hours</th>\n                <th>Add</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  <select (change)=\"onChangeLabor($event.target.value)\" class=\"form-control\">\n                    <option></option>\n                    <option [value]=\"i\" *ngFor=\"let labor of labors; let i = index;\">{{labor.roleName}}</option>\n                  </select>\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"hours\" name=\"hours\" placeholder=\"Hours\" class=\"form-control\" aria-describedby=\"hours-addon\"\n                    required>\n                </td>\n                <td>\n                  <button (click)=\"onAddLabor()\" type=\"button\" class=\"btn btn-success\">\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <table class=\"table table-bordered\" *ngIf=\"selectedLabors.length != 0;\">\n            <thead>\n              <tr class=\"active\">\n                <th>Role</th>\n                <th>Estimated Cost</th>\n                <th>Delete</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let selectedLabor of selectedLabors; let i = index\">\n                <td>{{selectedLabor.roleName}}</td>\n                <td>{{selectedLabor.laborHours*selectedLabor.roleWage | currency:'USD':true}}\n                </td>\n                <td>\n                  <button (click)=\"onRemoveLabor(selectedLabor, i)\" type=\"button\" class=\"btn btn-danger\">\n                    <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <tr class=\"active\">\n                <th>Total Labor Cost</th>\n                <th>{{totalLaborPrice | currency: 'USD':true}}</th>\n                <th></th>\n              </tr>\n            </tfoot>\n          </table>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Add</button>\n          <button type=\"reset\" class=\"btn btn-warning\" (click)=\"onClearBidLabor()\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete Labor Popup                -->\n<div class=\"modal fade\" id=\"delete-labor-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete\n          <b>{{roleName | lowercase}}</b> labor from the current bid?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteBidLabor()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<!--                                               UNUSED MARK-UP                                                                     -->\n<!-- <label>Add Materials</label> -->\n<!-- <div class=\"dropdown\">\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n              <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Materials\n              <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\n                <li *ngFor=\"let material of materials; let i = index\">\n                  <a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a>\n                </li>\n              </ng-container>\n              <ng-template #noMaterials>\n                <li>\n                  <a>No more materials</a>\n                </li>\n              </ng-template>\n            </ul>\n          </div> -->\n<!-- <table class=\"table table-striped table-hover\">\n            <thead *ngIf=\"selectedMaterials[0] != null;\">\n              <tr>\n                <th>Name</th>\n                <th>Quantity</th>\n                <th>Per Unit Cost</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index;\">\n                <td>{{selectedMaterial.materialName}}</td>\n                <td>\n                  <input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required>\n                </td>\n                <td>\n                  <input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\"\n                    required>\n                </td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">\n                    <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table> -->\n<!-- <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n  <h2 class=\"page-header\">Update Bid</h2>\n  <form (submit)=\"onUpdate()\">\n    <div class=\"form-group\">\n      <label>Change Bid Price</label>\n      <input type=\"text\" [(ngModel)]=\"bidPrice\" name=\"bidPrice\" placeholder=\"Bid Price\" class=\"form-control\" required>\n    </div>\n    <div class=\"form-group\">\n      <label>Change Labor Cost</label>\n      <input type=\"text\" [(ngModel)]=\"bidLabor\" name=\"laborCost\" placeholder=\"Labor Cost\" class=\"form-control\" required>\n    </div>\n    <label>Add Materials</label>\n    <div class=\"dropdown\">\n      <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Materials<span class=\"caret\"></span></button>\n      <ul class=\"dropdown-menu\">\n        <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\n          <li *ngFor=\"let material of materials; let i = index\"><a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a></li>\n        </ng-container>\n        <ng-template #noMaterials>\n          <li><a>No more materials</a></li>\n        </ng-template>\n      </ul>\n    </div>\n    <table class=\"table table-striped table-hover\">\n      <thead *ngIf=\"selectedMaterials[0] != null;\">\n        <tr>\n          <th>Name</th>\n          <th>Quantity</th>\n          <th>Per Unit Cost</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index;\">\n          <td>{{selectedMaterial.materialName}}</td>\n          <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required></td>\n          <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\" required></td>\n          <td><button type=\"button\" class=\"close\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">&times;</button></td>\n        </tr>\n      </tbody>\n    </table>\n    <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n    <button type=\"reset\" class=\"btn btn-danger\" (click)=\"onClear()\">Clear</button>\n  </form>  \n</div> -->\n\n<!--<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n  <h2 class=\"page-header\">Create A New Job</h2>\n  <form (submit)=\"onCreate()\">\n    <div class=\"form-group\">\n      <label>Created Date</label>\n      <input type=\"text\" [(ngModel)]=\"createdDate\" name=\"createdDate\" placeholder=\"YYYY-MM-DD\" class=\"form-control\" required>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Create</button>\n    <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\n  </form>  \n</div>-->"

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
        this.linearFeet = 0;
        this.pricePerUnit = 0;
        this.linearFeetCoverage = 0;
        this.totalMaterialPrice = 0;
        this.totalMaterialPriceTable = 0;
        this.selectedMaterials1 = [];
        /** Labor **/
        this.labors = [];
        this.selectedLabors = [];
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
    BidComponent.prototype.onCreate = function () {
        var _this = this;
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
                _this.ngOnInit();
            }
            else {
                console.log(data.msg);
            }
        });
        this.bidService.updateBidStatus(updatedBid).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
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
        this.bidPrice = this.bid[0].bidPrice;
    };
    BidComponent.prototype.onUpdate = function () {
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
            }
            else {
                console.log(data.msg);
            }
        });
        this.onClear();
        this.ngOnInit();
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
    BidComponent.prototype.onClearBidMaterial = function () {
        var _this = this;
        this.selectedMaterials1.forEach(function (selectedMaterial) {
            _this.materials.push(selectedMaterial);
        });
        this.selectedMaterials1 = [];
        this.linearFeet = null;
        this.pricePerUnit = null;
        this.linearFeetCoverage = null;
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
        this.bidService.getBidLaborsById(this.id).subscribe(function (bidLabors) {
            _this.bidLabors = bidLabors;
            for (var k = 0; k < _this.bidLabors.length; k++) {
                _this.totalLaborPriceTable += (_this.bidLabors[k].roleWage * _this.bidLabors[k].laborHours);
            }
            _this.laborService.getAllLabors().subscribe(function (labors) {
                _this.labors = labors.labors;
                // for (let i = 0; i < this.labors.length; i++) {
                //   for (let k = 0; k < this.bidLabors.length; k++) {
                //     if (this.labors[i].roleID == this.bidLabors[k].roleID) {
                //       this.labors.splice(i, 1);
                //       this.totalLaborPriceTable += (this.bidLabors[k].roleWage * this.bidLabors[k].laborHours);
                //       console.log(this.labors);
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
                    _this.getBidLabors();
                    $('#create-labor-modal').modal('hide');
                }
                else {
                    console.log(data.msg);
                }
            });
        });
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
    BidComponent.prototype.onClearBidLabor = function () {
        var _this = this;
        this.laborIndex = null;
        this.wage = null;
        this.hours = null;
        this.roleName = null;
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

module.exports = "<!--<button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>\n<ng-container *ngIf=\"bids; else noBids\">\n    <h2 class=\"page-header\">Bids</h2>\n    <div class=\"panel-group\" id=\"accordion\">\n      <div class=\"panel panel-default\" *ngFor=\"let bid of bids\">\n        <div class=\"panel-heading\">\n          <h4 class=\"panel-title\">\n            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{bid.bidID + '-details'}}\">Bid ID: {{bid.bidID}}</a>\n          </h4>\n        </div>\n        <div attr.id=\"{{bid.bidID + '-details'}}\" class=\"panel-collapse collapse\">\n          <div class=\"panel-body\">\n            <li class=\"list-group-item\"><b>Estimated Cost:</b> ${{bid.bidCost}}</li>\n            <li class=\"list-group-item\"><b>Bid Price:</b> ${{bid.bidPrice}}</li>\n            <li class=\"list-group-item\"><b>Status:</b> {{bid.bidStatus}}</li><br>\n            <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/home']\">Create Job</button>\n            <button type=\"button\" class=\"btn btn-danger\" [routerLink]=\"['/home']\">Edit</button>\n          </div>\n        </div>\n      </div>\n    </div>\n</ng-container>\n<ng-template #noBids>\n  <h2 class=\"page-header\">Loading...</h2>\n  <p>Try refreshing the page if there is a significant delay.</p>\n</ng-template>-->\n\n\n\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Go Home</button>\n</div>\n  \n<ng-container *ngIf=\"bidsLength!=0; else noBids\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">Bids</h2>\n    <h4>Click To View Details</h4>\n    <table *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered table-hover\">\n      <thead>\n        <tr class=\"active\">\n          <th class=\"hidden-xs hidden-sm\">ID</th>\n          <th>Customer</th>\n          <th>Status</th>\n          <!-- <th>Price</th> -->\n          <th>Created Date</th>\n          <th class=\"hidden-xs hidden-sm\">Accepted/Declined Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let bid of bids;\" id=\"{{bid.bidID}}\" [routerLink]=\"['/bids/'+bid.bidID]\">\n          <td class=\"hidden-xs hidden-sm\">{{bid.bidID}}</td>\n          <td>{{bid.customerName}}</td>\n          <td>{{bid.bidStatus}}</td>\n          <!-- <td>{{bid.bidPrice | currency: 'USD':true}}</td> -->\n          <td>{{bid.createdDate | date: 'MM/dd/yyyy'}}</td>\n          <td *ngIf=\"bid.bidStatus != 'PENDING'\" class=\"hidden-xs hidden-sm\">{{bid.endDate | date: 'MM/dd/yyyy'}}</td>\n          <td *ngIf=\"bid.bidStatus == 'PENDING'\" class=\"hidden-xs hidden-sm\">N/A</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</ng-container>\n<ng-template #noBids>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">No Bids</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </div>\n</ng-template>\n\n<!-- <ng-container *ngIf=\"pendingLength!=0 || acceptedLength!=0 || declinedLength!=0; else noBids\">\n  <ng-container *ngIf=\"pendingLength!=0; else noPendingBids\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">Pending Bids</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Price</th>\n            <th>Created Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let pendingBid of pendingBids;\" [routerLink]=\"['/bids/'+pendingBid.bidID]\">\n            <td>{{pendingBid.bidID}}</td>\n            <td>{{pendingBid.bidPrice}}</td>\n            <td>{{pendingBid.createdDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>  \n    </div>\n  </ng-container>\n  <ng-template #noPendingBids>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">No Pending Bids</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n  \n  <ng-container *ngIf=\"acceptedLength!=0; else noAcceptedBids\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">Accepted Bids</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Price</th>\n            <th>Accepted Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let acceptedBid of acceptedBids;\" [routerLink]=\"['/bids/'+acceptedBid.bidID]\">\n            <td>{{acceptedBid.bidID}}</td>\n            <td>{{acceptedBid.bidPrice}}</td>\n            <td>{{acceptedBid.endDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>  \n    </div>\n  </ng-container>\n  <ng-template #noAcceptedBids>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">No Accepted Bids</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n  \n  <ng-container *ngIf=\"declinedLength!=0; else noDeclinedBids\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">Declined Bids</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Price</th>\n            <th>Declined Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let declinedBid of declinedBids;\" [routerLink]=\"['/bids/'+declinedBid.bidID]\">\n            <td>{{declinedBid.bidID}}</td>\n            <td>{{declinedBid.bidPrice}}</td>\n            <td>{{declinedBid.endDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table> \n    </div>\n  </ng-container>\n  <ng-template #noDeclinedBids>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">No Declined Bids</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n</ng-container>\n<ng-template #noBids>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">No Bids</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </div>\n</ng-template> -->"

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

module.exports = "<button class=\"btn btn-default\" [routerLink]=\"['/inquiries']\">Go Back</button>\n<h2 class=\"page-header\">Create Bid</h2>\n<form (submit)=\"onCreate()\">\n    <h3>Bid Information</h3>\n  <div class=\"form-group\">\n    <label>Bid Price</label>\n    <input type=\"text\" [(ngModel)]=\"bidPrice\" name=\"bidPrice\" placeholder=\"Bid Price\" class=\"form-control\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Current Date</label>\n    <input type=\"text\" [(ngModel)]=\"createdDate\" name=\"createdDate\" placeholder=\"Current Date\" class=\"form-control\" required>\n  </div>\n  <h3>Estimated Costs</h3>\n  <div class=\"form-group\">\n    <label>Labor Cost</label>\n    <input type=\"text\" [(ngModel)]=\"bidLabor\" name=\"bidLabor\" placeholder=\"Labor Cost\" class=\"form-control\" required>\n  </div>\n  <label>Materials Cost</label>\n  <div class=\"dropdown\">\n    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Add Materials<span class=\"caret\"></span></button>\n    <ul class=\"dropdown-menu\">\n      <li *ngFor=\"let material of materials;\"><a (click)=\"onAddMaterial(material)\">{{material.materialName}}</a></li>\n    </ul>\n  </div>\n  <table class=\"table table-striped table-hover\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Quantity</th>\n        <th>Per Unit Cost</th>\n      </tr>\n      </thead>\n    <tbody>\n      <tr *ngFor=\"let selectedMaterial of selectedMaterials;\">\n        <td>{{selectedMaterial.materialName}}</td>\n        <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required></td>\n        <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\" required></td>\n      </tr>\n    </tbody>\n  </table>\n  <button type=\"submit\" class=\"btn btn-primary\">Create</button>\n  <button type=\"reset\" class=\"btn btn-danger\" (click)=\"onClear()\">Clear</button>\n</form>"

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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/customers']\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Go To Customers</button>\n</div>\n\n<h2 class=\"page-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">{{customer[0].customerName}}</h2>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <ng-container *ngIf=\"customer; else noCustomer\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Customer Details</h3>\n      </div>\n      <div class=\"panel-body\" style=\"word-break:break-all\">\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr class=\"active\">\n              <th>Address</th>\n              <th>City</th>\n              <th class=\"hidden-xs hidden-sm\">State</th>\n              <th class=\"hidden-xs hidden-sm\">ZIP</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{customer[0].address}}</td>\n              <td>{{customer[0].city}}</td>\n              <td class=\"hidden-xs hidden-sm\">{{customer[0].state}}</td>\n              <td class=\"hidden-xs hidden-sm\">{{customer[0].zip}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <button (click)=\"onClickUpdateCustomer()\" class=\"btn btn-info\" href=\"#update-customer-modal\" data-toggle=\"modal\">\n          <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> Update Customer</button>\n        <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-customer-modal'>\n          <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete Customer</button>\n        <hr>\n        <button class=\"btn btn-primary\" href=\"#create-inquiry-modal\" data-toggle=\"modal\">\n          <span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Create Inquiry</button>\n      </div>\n    </div>\n  </ng-container>\n  <ng-template #noCustomer>\n    <h2 class=\"page-header\">No Customers</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </ng-template>\n</div>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Contact Details</h3>\n    </div>\n    <div class=\"panel-body\" style=\"word-break:break-all\">\n      <ng-container *ngIf=\"contacts.length > 0; else noContacts\">\n        <label>Click To Update Or Delete</label>\n        <table class=\"table table-bordered table-hover\">\n          <thead>\n            <tr class=\"active\">\n              <th class=\"hidden-xs hidden-sm\">Title</th>\n              <th>Name</th>\n              <th>Phone</th>\n              <th class=\"hidden-xs hidden-sm\">Email</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let contact of contacts; let i = index\" (click)=\"onClickUpdateContact(contact.contactID, i)\" data-toggle=\"modal\"\n              href='#update-contact-modal'>\n              <td class=\"hidden-xs hidden-sm\">{{contact.contactTitle}}</td>\n              <td>{{contact.contactName}}</td>\n              <td>{{contact.contactPhone}}</td>\n              <td class=\"hidden-xs hidden-sm\">{{contact.contactEmail}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </ng-container>\n      <ng-template #noContacts>\n        <h5>No Contacts</h5>\n      </ng-template>\n      <button (click)=\"clearContactFields()\" class=\"btn btn-info\" type=\"button\" data-toggle=\"modal\" href='#create-contact-modal'>\n        <span class=\"glyphicon glyphicon-phone\" aria-hidden=\"true\"></span> Create Contact\n      </button>\n    </div>\n  </div>\n</div>\n\n<!--                              CUSTOMER POPUPS                                -->\n<!--                Update Customer Popup                -->\n<div class=\"modal fade\" id=\"update-customer-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update {{customer[0].customerName}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form #f3=\"ngForm\" (submit)=\"onUpdateCustomer()\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input required maxlength=\"100\" #customerName=\"ngModel\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" required>\n            <div *ngIf=\"customerName.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"customerName.errors.required\">\n                *Name is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Address</label>\n            <input required maxlength=\"80\" #customerAddress=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"address\" name=\"address\" placeholder=\"Address\" />\n            <div *ngIf=\"customerAddress.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"customerAddress.errors.required\">\n                *Address is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>City</label>\n            <input required maxlength=\"80\" #customerCity=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" name=\"city\" placeholder=\"City\" />\n            <div *ngIf=\"customerCity.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"customerCity.errors.required\">\n                *City is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>State</label>\n            <input maxlength=\"80\" #customerState=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"state\" name=\"state\" placeholder=\"State\" />\n          </div>\n          <div class=\"form-group\">\n            <label>ZIP</label>\n            <input onKeyPress=\"if(this.value.length==5) return false;\" #customerZIP=\"ngModel\" type=\"number\" class=\"form-control\" [(ngModel)]=\"zip\" name=\"zip\" placeholder=\"ZIP\" />\n          </div>\n          <button [disabled]=\"f3.invalid\" type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"button\" (click)=\"clearCustomerFields()\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete Customer Popup                -->\n<div class=\"modal fade\" id=\"delete-customer-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this customer and all of its inquiries, bids, and jobs?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteCustomer()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create Inquiry Popup                -->\n<div class=\"modal fade\" id=\"create-inquiry-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Create A New Inquiry</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onCreate()\">\n          <div class=\"form-group\">\n            <label>Description</label>\n            <textarea required maxlength=\"950\" #inquiryDescription=\"ngModel\" type=\"text\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"Description\"\n              class=\"form-control\"></textarea>\n              {{description.length}}/950\n            <div *ngIf=\"inquiryDescription.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"inquiryDescription.errors.required\">\n                *Description is required\n              </div>\n            </div>\n          </div>\n          <button [disabled]=\"inquiryDescription.invalid\" type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Create</button>\n          <button type=\"button\" (click)=\"clearDescription()\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                              CONTACT POPUPS                                -->\n<!--                Update Contact Popup                -->\n<div class=\"modal fade\" id=\"update-contact-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update {{contactName}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form #f=\"ngForm\" (submit)=\"onUpdateContact()\">\n          <div class=\"form-group\">\n            <label>Title</label>\n            <input required maxlength=\"40\" #title=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactTitle\" name=\"contactTitle\"\n              placeholder=\"Title\" />\n            <div *ngIf=\"title.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"title.errors.required\">\n                *Title is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input required maxlength=\"40\" #contactsName=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactName\" name=\"contactName\"\n              placeholder=\"Name\" />\n            <div *ngIf=\"contactsName.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"contactsName.errors.required\">\n                *Name is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Phone</label>\n            <input type=\"text\" class=\"form-control\" mask=\"(000)000-0000\" [(ngModel)]=\"contactPhone\" name=\"contactPhone\" placeholder=\"Phone\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Email</label>\n            <input type=\"text\" maxlength=\"40\" class=\"form-control\" [(ngModel)]=\"contactEmail\" name=\"contactEmail\" placeholder=\"Email\"\n            />\n          </div>\n          <button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"button\" (click)=\"clearContactFields()\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n          <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" href='#delete-contact-modal'>\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete\n          </button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete Contact Popup                -->\n<div class=\"modal fade\" id=\"delete-contact-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete\n          <b>{{contactName}}</b>?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteContact()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create Contact Popup                -->\n<div class=\"modal fade\" id=\"create-contact-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Create Contact</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form #f2=\"ngForm\" (submit)=\"onCreateContact()\">\n          <div class=\"form-group\">\n            <label>Title*</label>\n            <input required maxlength=\"40\" #title2=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactTitle\" name=\"contactTitle\"\n              placeholder=\"Title\" />\n            <div *ngIf=\"title2.invalid\">\n              <div *ngIf=\"title2.errors.required\" style=\"color:#ff0000\">\n                *Title is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Name*</label>\n            <input required maxlength=\"40\" #contactsName2=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"contactName\" name=\"contactName\"\n              placeholder=\"Name\" />\n            <div *ngIf=\"contactsName2.invalid\">\n              <div *ngIf=\"contactsName2.errors.required\" style=\"color:#ff0000\">\n                *Name is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Phone</label>\n            <input type=\"text\" class=\"form-control\" mask=\"(000)000-0000\" [(ngModel)]=\"contactPhone\" name=\"contactPhone\" placeholder=\"Phone\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input class=\"form-control\" [(ngModel)]=\"contactEmail\" name=\"contactEmail\" placeholder=\"Email\"/>\n            <!-- email #email2=\"ngModel\" type=\"email\" maxlength=\"40\" -->\n            <!-- <div *ngIf=\"email2.invalid\">\n              <div *ngIf=\"email2.errors.email && contactEmail.length > 0\" style=\"color:#ff0000\">\n                *Invalid Email\n              </div>\n            </div> -->\n          </div>\n          <button [disabled]=\"f2.invalid\" type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-phone\" aria-hidden=\"true\"></span> Create</button>\n          <button type=\"button\" (click)=\"clearContactFields()\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Go Home</button>\n</div>\n\n<h2 class=\"page-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">Customers</h2>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <ng-container *ngIf=\"customers; else noCustomers\">\n    <h4>Click To View Details</h4>\n    <!-- *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" -->\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr class=\"active\">\n          <th>ID</th>\n          <th>Name</th>\n          <th>Address</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let customer of customers;\" [routerLink]=\"['/customers/'+customer.customerID]\">\n          <td>{{customer.customerID}}</td>\n          <td>{{customer.customerName}}</td>\n          <td>{{customer.address}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <button type=\"button\" class=\"btn btn-primary\" href=\"#create-modal\" data-toggle=\"modal\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Create New</button>\n  </ng-container>\n  <ng-template #noCustomers>\n    <h2 class=\"page-header\">No Customers</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </ng-template>\n</div>\n\n<!--                Create Customer Popup                -->\n<div class=\"modal fade\" id=\"create-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Create A New Customer</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form #f=\"ngForm\" (submit)=\"onCreate()\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input required maxlength=\"100\" #customerName=\"ngModel\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\">\n            <div *ngIf=\"customerName.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"customerName.errors.required\">\n                *Name is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Address</label>\n            <input required maxlength=\"80\" #customerAddress=\"ngModel\" type=\"text\" [(ngModel)]=\"address\" name=\"address\" placeholder=\"Address\" class=\"form-control\">\n            <div *ngIf=\"customerAddress.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"customerAddress.errors.required\">\n                *Address is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>City</label>\n            <input required maxlength=\"80\" #customerCity=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" name=\"city\" placeholder=\"City\" />\n            <div *ngIf=\"customerCity.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"customerCity.errors.required\">\n                *City is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>State</label>\n            <input maxlength=\"80\" #customerState=\"ngModel\" type=\"text\" class=\"form-control\" [(ngModel)]=\"state\" name=\"state\" placeholder=\"State\" />\n          </div>\n          <div class=\"form-group\">\n            <label>ZIP</label>\n            <input onKeyPress=\"if(this.value.length==5) return false;\" #customerZIP=\"ngModel\" type=\"number\" class=\"form-control\" [(ngModel)]=\"zip\" name=\"zip\" placeholder=\"ZIP\" />\n          </div>\n          <button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Create</button>\n          <button type=\"button\" (click)=\"clearFields()\" class=\"btn btn-warning\"><span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

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
exports.push([module.i, "/* .panel:hover {\n    background-color: #dfdfdf !important;\n  } */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h1>Allied Waterproofing</h1>\n    <p>Project Management Application</p>\n  </div>\n</div>\n\n<h2 class=\"page-header\">Current Jobs</h2>\n<!-- <ng-container *ngIf=\"jobs.length !=0; else noJobs\"> -->\n  <div class=\"panel panel-primary\" *ngFor=\"let job of jobs; let i = index\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Job # {{job.jobID}}</h3>\n    </div>\n    <div class=\"panel-body\">\n      <h4>Customer:</h4>\n      <p>{{job.customerName}}</p>\n      <hr>\n      <h4>Budget:</h4>\n      <div class=\"progress progress-striped active\">\n        <div id=\"costProgress\" class=\"progress-bar progress-bar-info\" role=\"progressbar\" [attr.aria-valuenow]=\"job.actualCosts\" aria-valuemin=\"0\"\n          [attr.aria-valuemax]=\"job.expectedCosts\" [ngStyle]=\"{'min-width': '2em', 'width': (job.actualCosts/job.expectedCosts)*100+ '%'}\">\n          {{job.actualCosts/job.expectedCosts | percent:'1.0-0'}}\n        </div>\n      </div>\n      <hr>\n      <h4>Revenue Collected:</h4>\n      <div class=\"progress progress-striped active\">\n        <div id=\"revenueProgress\" class=\"progress-bar progress-bar-info\" role=\"progressbar\" [attr.aria-valuenow]=\"job.actualRevenue\"\n          aria-valuemin=\"0\" [attr.aria-valuemax]=\"job.expectedRevenue\" [ngStyle]=\"{'min-width': '2em', 'width': (job.actualRevenue/job.expectedRevenue)*100+ '%'}\">\n          {{job.actualRevenue/job.expectedRevenue | percent:'1.0-0'}}\n        </div>\n      </div>\n      <hr>\n      <button type=\"button\" class=\"btn btn-primary btn-lg\" [routerLink]=\"['/jobs/'+job.jobID]\">\n        <span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Open Job</button>\n    </div>\n    <!-- <h4>Click To View Details</h4> -->\n    <!-- <div class=\"panel panel-primary\" *ngFor=\"let currentJob of currentJobs; let i = index\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Job # {{currentJob.jobID}}</h3>\n    </div>\n    <div class=\"panel-body\">\n      <h4>Customer:</h4><p>{{currentJob.customerName}}</p>\n      <hr>\n      <h4>Budget:</h4>\n      <div class=\"progress progress-striped active\">\n        <div id=\"costProgress\" class=\"progress-bar progress-bar-info\" role=\"progressbar\" [attr.aria-valuenow]=\"jobCosts[i]\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"bidCosts[i]\" [ngStyle]=\"{'min-width': '2em', 'width': (jobCosts[i]/bidCosts[i])*100+ '%'}\">\n          {{jobCosts[i]/bidCosts[i] | percent:'1.0-0'}}\n        </div>\n      </div>\n      <hr>\n      <h4>Revenue Collected:</h4>\n      <div class=\"progress progress-striped active\">\n        <div id=\"revenueProgress\" class=\"progress-bar progress-bar-info\" role=\"progressbar\" [attr.aria-valuenow]=\"currentJob.jobRevenue\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"currentJob.bidPrice\" [ngStyle]=\"{'min-width': '2em', 'width': (currentJob.jobRevenue/currentJob.bidPrice)*100+ '%'}\">\n          {{currentJob.jobRevenue/currentJob.bidPrice | percent:'1.0-0'}}\n        </div>\n      </div>\n      <hr>\n      <button type=\"button\" class=\"btn btn-primary btn-lg\" [routerLink]=\"['/jobs/'+currentJob.jobID]\"><span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Open Job</button>\n    </div>\n  </div> -->\n    <!-- <ul class=\"list-group\" *ngFor=\"let currentJob of currentJobs; let i = index\" [routerLink]=\"['/jobs/'+currentJob.jobID]\">\n    <h3 class=\"page-header\">Job # {{currentJob.jobID}}</h3>\n    <h4>Click To View Details</h4>\n    <li class=\"list-group-item\"><b>Customer:</b> {{currentJob.customerName}}</li>\n    <li class=\"list-group-item\"><b>Budget:</b>\n      <div class=\"progress\">\n        <div id=\"costProgress\" class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"jobCosts[i]\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"bidCosts[i]\" [ngStyle]=\"{'min-width': '2em', 'width': (jobCosts[i]/bidCosts[i])*100+ '%'}\">\n          {{jobCosts[i]/bidCosts[i] | percent:'1.0-0'}}\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\"><b>Revenue Collected:</b>\n      <div class=\"progress\">\n        <div id=\"revenueProgress\" class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"currentJob.jobRevenue\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"currentJob.bidPrice\" [ngStyle]=\"{'min-width': '2em', 'width': (currentJob.jobRevenue/currentJob.bidPrice)*100+ '%'}\">\n          {{currentJob.jobRevenue/currentJob.bidPrice | percent:'1.0-0'}}\n        </div>\n      </div>\n    </li>\n  </ul> -->\n<!-- </ng-container>\n<ng-template #noJobs>\n  <h2 class=\"page-header\">No Current Jobs</h2>\n  <p>If this is incorrect, try refreshing the page.</p>\n</ng-template> -->"

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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Go Home</button>\n</div>\n\n<ng-container *ngIf=\"inquiriesLength!=0; else noInquiries\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">Inquiries</h2>\n    <h4>Click To View Details</h4>\n    <table *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered table-hover\">\n      <thead>\n        <tr class=\"active\">\n          <th class=\"hidden-xs hidden-sm\">ID</th>\n          <th>Customer</th>\n          <th>Status</th>\n          <th>Received Date</th>\n          <th class=\"hidden-xs hidden-sm\">Accepted/Declined Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let inquiry of inquiries;\" id=\"{{inquiry.inquiryID}}\" [routerLink]=\"['/inquiries/'+inquiry.inquiryID]\">\n          <td class=\"hidden-xs hidden-sm\">{{inquiry.inquiryID}}</td>\n          <td>{{inquiry.customerName}}</td>\n          <td>{{inquiry.inquiryStatus}}</td>\n          <td>{{inquiry.receivedDate | date: 'MM/dd/yyyy'}}</td>\n          <td *ngIf=\"inquiry.inquiryStatus != 'PENDING'\" class=\"hidden-xs hidden-sm\">{{inquiry.endDate | date: 'MM/dd/yyyy'}}</td>\n          <td *ngIf=\"inquiry.inquiryStatus == 'PENDING'\" class=\"hidden-xs hidden-sm\">N/A</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</ng-container>\n<ng-template #noInquiries>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">No Inquiries</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </div>\n</ng-template>\n  \n<!-- <ng-container *ngIf=\"pendingLength!=0 || acceptedLength!=0 || declinedLength!=0; else noInquiries\">\n  <ng-container *ngIf=\"pendingLength!=0; else noPendingInquiries\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">Pending Inquiries</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Received Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let pendingInquiry of pendingInquiries;\" [routerLink]=\"['/inquiries/'+pendingInquiry.inquiryID]\">\n            <td>{{pendingInquiry.inquiryID}}</td>\n            <td>{{pendingInquiry.receivedDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </ng-container>\n  <ng-template #noPendingInquiries>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">No Pending Inquiries</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n\n  <ng-container *ngIf=\"acceptedLength!=0; else noAcceptedInquiries\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">Accepted Inquiries</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Accepted Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let acceptedInquiry of acceptedInquiries;\" [routerLink]=\"['/inquiries/'+acceptedInquiry.inquiryID]\">\n            <td>{{acceptedInquiry.inquiryID}}</td>\n            <td>{{acceptedInquiry.endDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>  \n    </div>\n  </ng-container>\n  <ng-template #noAcceptedInquiries>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">No Accepted Inquiries</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n\n  <ng-container *ngIf=\"declinedLength!=0; else noDeclinedInquiries\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">Declined Inquiries</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Declined Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let declinedInquiry of declinedInquiries;\" [routerLink]=\"['/inquiries/'+declinedInquiry.inquiryID]\">\n            <td>{{declinedInquiry.inquiryID}}</td>\n            <td>{{declinedInquiry.endDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>  \n    </div>\n  </ng-container>\n  <ng-template #noDeclinedInquiries>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">No Declined Inquiries</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n</ng-container>\n<ng-template #noInquiries>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">No Inquiries</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </div>\n</ng-template> -->"

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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/inquiry/inquiry.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/inquiries']\"><span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Go To Inquiries</button>\n</div>\n\n<h2 class=\"page-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">Inquiry #{{inquiry[0].inquiryID}}</h2>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <ng-container *ngIf=\"inquiry; else noInquiry\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Inquiry Details</h3>\n      </div>\n      <div class=\"panel-body\" style=\"word-break:break-all\">\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr class=\"active\">\n              <th>Received Date</th>\n              <th *ngIf=\"inquiry[0].inquiryStatus == 'ACCEPTED'\">Accepted Date</th>\n              <th *ngIf=\"inquiry[0].inquiryStatus == 'DECLINED'\">Declined Date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{inquiry[0].receivedDate | date: 'MM/dd/yyyy'}}</td>\n              <td *ngIf=\"inquiry[0].inquiryStatus == 'ACCEPTED'\">{{inquiry[0].endDate | date: 'MM/dd/yyyy'}}</td>\n              <td *ngIf=\"inquiry[0].inquiryStatus == 'DECLINED'\">{{inquiry[0].endDate | date: 'MM/dd/yyyy'}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr class=\"active\">\n              <th>Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{inquiry[0].description}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <button (click)=\"onClickUpdate()\" class=\"btn btn-info\" data-toggle=\"modal\" href=\"#update-modal\">\n          <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> Update Description</button>\n        <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-modal'>\n          <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete Inquiry</button>\n        <hr *ngIf=\"status == 'PENDING'\">\n        <button *ngIf=\"status == 'PENDING'\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#create-bid-modal'>\n          <span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Create Bid</button>\n      </div>\n    </div>\n  </ng-container>\n  <ng-template #noInquiry>\n    <h2 class=\"page-header\">No Inquiries</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </ng-template>\n</div>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Customer Details</h3>\n    </div>\n    <div class=\"panel-body\" style=\"word-break:break-all\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr class=\"active\">\n            <th>Name</th>\n            <th>Address</th>\n            <th>City</th>\n            <th class=\"hidden-xs hidden-sm\">State</th>\n            <th class=\"hidden-xs hidden-sm\">ZIP</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{inquiry[0].customerName}}</td>\n            <td>{{inquiry[0].customerAddress}}</td>\n            <td>{{inquiry[0].customerCity}}</td>\n            <td class=\"hidden-xs hidden-sm\">{{inquiry[0].customerState}}</td>\n            <td class=\"hidden-xs hidden-sm\">{{inquiry[0].customerZIP}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/customers/'+inquiry[0].customerID]\">\n        <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Open Customer</button>\n    </div>\n  </div>\n</div>\n<!--                Delete Popup                -->\n<div class=\"modal fade\" id=\"delete-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this inquiry?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Update Popup                -->\n<div class=\"modal fade\" id=\"update-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update Inquiry</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onUpdate()\">\n          <div class=\"form-group\">\n            <label for=\"\">Description</label>\n            <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"Description\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"reset\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create Bid Popup                -->\n<div class=\"modal fade\" id=\"create-bid-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Create Bid</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onCreate()\">\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">Enter Costs</h3>\n            </div>\n            <div class=\"panel-body\">\n              <h4>Labor Cost</h4>\n              <table class=\"table table-bordered\" *ngIf=\"labors[0] != null\">\n                <thead>\n                  <tr class=\"active\">\n                    <th>Role</th>\n                    <th>Hours</th>\n                    <th>Add</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <select (change)=\"onChangeLabor($event.target.value)\" class=\"form-control\">\n                        <option></option>\n                        <option [value]=\"i\" *ngFor=\"let labor of labors; let i = index;\">{{labor.roleName}}</option>\n                      </select>\n                    </td>\n                    <td>\n                      <input type=\"number\" [(ngModel)]=\"laborHours\" name=\"laborHours\" placeholder=\"Labor Hours\" class=\"form-control\" aria-describedby=\"hours-addon\"\n                        required>\n                    </td>\n                    <td>\n                      <button (click)=\"onAddLabor()\" type=\"button\" class=\"btn btn-success\">\n                        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n                      </button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table class=\"table table-bordered\" *ngIf=\"selectedLabors.length != 0;\">\n                <thead>\n                  <tr class=\"active\">\n                    <th>Role</th>\n                    <th>Estimated Cost</th>\n                    <th>Delete</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let selectedLabor of selectedLabors; let i = index\">\n                    <td>{{selectedLabor.roleName}}</td>\n                    <td>{{selectedLabor.laborHours*selectedLabor.roleWage | currency:'USD':true}}\n                    </td>\n                    <td>\n                      <button (click)=\"onRemoveLabor(selectedLabor, i)\" type=\"button\" class=\"btn btn-danger\">\n                        <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\n                      </button>\n                    </td>\n                  </tr>\n                </tbody>\n                <tfoot>\n                  <tr class=\"active\">\n                    <th>Total Labor Cost</th>\n                    <th>{{totalLaborPrice | currency: 'USD':true}}</th>\n                    <th></th>\n                  </tr>\n                </tfoot>\n              </table>\n            </div>\n            <div class=\"panel-body\">\n              <h4>Material Cost</h4>\n              <table class=\"table table-bordered\" *ngIf=\"materials[0] != null\">\n                <thead>\n                  <tr class=\"active\">\n                    <th>Name</th>\n                    <th>Linear Feet</th>\n                    <th>Add</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <select (change)=\"onChangeMaterial($event.target.value)\" class=\"form-control\">\n                        <option></option>\n                        <option [value]=\"i\" *ngFor=\"let material of materials; let i = index;\">{{material.materialName}}</option>\n                      </select>\n                    </td>\n                    <td>\n                      <input type=\"number\" [(ngModel)]=\"linearFeet\" name=\"linearFeet\" placeholder=\"Linear Feet\" class=\"form-control\" required>\n                    </td>\n                    <td>\n                      <button (click)=\"onAddMaterial()\" type=\"button\" class=\"btn btn-success\">\n                        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n                      </button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <table class=\"table table-bordered\" *ngIf=\"selectedMaterials1.length != 0;\">\n                <thead>\n                  <tr class=\"active\">\n                    <th>Name</th>\n                    <th>Estimated Cost</th>\n                    <th>Delete</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let selectedMaterial of selectedMaterials1; let i = index\">\n                    <td>{{selectedMaterial.materialName}}</td>\n                    <td>{{selectedMaterial.linearFeet*selectedMaterial.pricePerUnit/selectedMaterial.linearFeetCoverage | currency:\n                      'USD':true}}\n                    </td>\n                    <td>\n                      <button (click)=\"onRemoveMaterial(selectedMaterial, i)\" type=\"button\" class=\"btn btn-danger\">\n                        <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\n                      </button>\n                    </td>\n                  </tr>\n                </tbody>\n                <tfoot>\n                  <tr class=\"active\">\n                    <th>Total Material Cost</th>\n                    <th>{{totalMaterialPrice | currency: 'USD':true}}</th>\n                    <th></th>\n                  </tr>\n                </tfoot>\n              </table>\n              <hr>\n              <h4>Total Cost: {{totalLaborPrice + totalMaterialPrice + bidLabor | currency: 'USD':true}}</h4>\n            </div>\n          </div>\n          <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">Enter Desired Margin</h3>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"form-group\">\n                <input type=\"number\" [(ngModel)]=\"margin\" name=\"margin\" placeholder=\"Margin\" class=\"form-control\" required />\n              </div>\n              <hr>\n              <h4>Recommended Bid: {{(1 + margin)*(totalMaterialPrice + totalLaborPrice + bidLabor) | currency: 'USD':true}}</h4>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Create</button>\n          <button type=\"reset\" class=\"btn btn-warning\" (click)=\"onClear()\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"onClear()\" type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--                                                    UNUSED MARKUP                                                         -->\n<!-- <div class=\"dropdown\">\n                <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n                  <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add Materials\n                  <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\">\n                  <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\n                    <li *ngFor=\"let material of materials; let i = index;\">\n                      <a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a>\n                    </li>\n                  </ng-container>\n                  <ng-template #noMaterials>\n                    <li>\n                      <a>No more materials</a>\n                    </li>\n                  </ng-template>\n                </ul>\n              </div> -->\n<!-- <table class=\"table table-striped table-hover\">\n                <thead *ngIf=\"selectedMaterials[0] != null;\">\n                  <tr>\n                    <th>Name</th>\n                    <th>Linear Feet</th>\n                    <th>Price</th>\n                    <th>Remove</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index\">\n                    <td>{{selectedMaterial.materialName}}</td>\n                    <td>\n                      <input type=\"text\" [(ngModel)]=\"selectedMaterial.linearFeet\" name=\"linearFeet\" placeholder=\"Linear Feet\" class=\"form-control\" required>\n                    </td>\n                    <td>{{selectedMaterial.linearFeet*selectedMaterial.pricePerLinearFoot || 0}}</td>\n                    <td>\n                      <button type=\"button\" class=\"btn btn-danger\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">\n                        <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\n                      </button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table> -->\n\n<!-- <table class=\"table table-bordered table-hover\">\n            <tfoot>\n              <tr class=\"info\">\n                <th>Total Cost</th>\n                <th>{{totalMaterialPrice + bidLabor | currency: 'USD':true}}</th>\n              </tr>\n            </tfoot>\n          </table> -->\n\n<!-- <div class=\"form-group\">\n                <input type=\"number\" [(ngModel)]=\"bidLabor\" name=\"bidLabor\" placeholder=\"Labor Cost\" class=\"form-control\" required>\n              </div> -->\n\n<!-- <button (click)=\"onAddMaterial(selectedMaterial, i)\" type=\"button\" class=\"btn btn-success\">\n                        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n                      </button> -->\n\n<!-- <select class=\"form-control\">\n                        <option></option>\n                        <option *ngFor=\"let material of materials; let i = index;\" (click)=\"onSelectMaterial(material, i)\">{{material.materialName}}</option>\n                      </select> -->"

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
        this.bidLabor = 0;
        this.bidPrice = null;
        this.linearFeet = 0;
        this.selectedLabors = [];
        this.laborHours = null;
        this.laborID = null;
        this.totalLaborPrice = 0;
        this.materialID = null;
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
    /************************************ BID *********************************/
    InquiryComponent.prototype.onCreate = function () {
        var updatedInquiry = {
            inquiryID: this.id,
            inquiryStatus: "ACCEPTED",
            removeEndDate: false
        };
        var newBid = {
            inquiryID: this.id,
            bidPrice: (1 + this.margin) * (this.totalMaterialPrice + this.totalLaborPrice + this.bidLabor)
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
        this.totalMaterialPrice -= (material.pricePerLinearFoot * material.linearFeet);
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
        this.bidLabor = 0;
        this.margin = 0;
        //this.ngOnInit();
    };
    InquiryComponent.prototype.onClickUpdate = function () {
        this.description = this.inquiry[0].description;
    };
    InquiryComponent.prototype.onUpdate = function () {
        var updatedInquiry = {
            inquiryID: this.id,
            description: this.description
        };
        this.inquiryService.updateInquiry(updatedInquiry).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/job/job.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/jobs']\"><span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Go To Jobs</button>\n</div>\n<h2 class=\"page-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">Job #{{job[0].jobID}}</h2>\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <ng-container *ngIf=\"job; else noJob\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Job Details</h3>\n      </div>\n      <div class=\"panel-body\">\n        <h4 class=\"page-header\" style=\"margin-top: 0\">General</h4>\n        <table class=\"table table-bordered\">\n          <thead>\n            <tr class=\"active\">\n              <th>Expected Revenue</th>\n              <th>Created Date</th>\n              <th *ngIf=\"job[0].jobStatus == 'COMPLETED'\">Completion Date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{job[0].bidPrice + totalChangeTable | currency: 'USD':true}}</td>\n              <td>{{job[0].createdDate | date: 'MM/dd/yyyy'}}</td>\n              <td *ngIf=\"job[0].jobStatus == 'COMPLETED'\">{{job[0].endDate | date: 'MM/dd/yyyy'}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <h4 class=\"page-header\">Change Orders</h4>\n        <label>Click To Update Or Delete</label>\n        <table class=\"table table-bordered table-hover\">\n          <thead>\n            <tr class=\"active\">\n              <th>Amount</th>\n              <th>Date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let changeOrder of changeOrders; let i = index\" data-toggle=\"modal\" (click)=\"onClickUpdateChangeOrder(changeOrder.changeID, i)\"\n              href='#update-change-modal'>\n              <td>{{changeOrder.changeAmount | currency: 'USD':true}}</td>\n              <td>{{changeOrder.changeDate | date: 'MM/dd/yyyy'}}</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr class=\"active\">\n              <th>{{totalChangeTable | currency: 'USD':true}}</th>\n              <th></th>\n            </tr>\n          </tfoot>\n        </table>\n        <button (click)=\"onClearChangeOrder()\" class=\"btn btn-info\" data-toggle=\"modal\" href='#create-change-modal'>\n          <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span> Create Change Order</button>\n        <h4 class=\"page-header\">Revenue Collected</h4>\n        <label>Click To Update Or Delete</label>\n        <table class=\"table table-bordered table-hover\">\n          <thead>\n            <tr class=\"active\">\n              <th>Amount</th>\n              <th>Date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let revenue of revenues; let i = index\" data-toggle=\"modal\" (click)=\"onClickUpdateRevenue(revenue.revenueID, i)\"\n              href='#update-revenue-modal'>\n              <td>{{revenue.revenueAmount | currency: 'USD':true}}</td>\n              <td>{{revenue.revenueDate | date: 'MM/dd/yyyy'}}</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr class=\"active\">\n              <th>{{totalRevenueTable | currency: 'USD':true}}</th>\n              <th></th>\n            </tr>\n          </tfoot>\n        </table>\n        <button (click)=\"onClearJobRevenue()\" class=\"btn btn-info\" data-toggle=\"modal\" href='#create-revenue-modal'>\n          <span class=\"glyphicon glyphicon-usd\" aria-hidden=\"true\"></span> Add Revenue</button>\n        <h4 class=\"page-header\">Labor Cost</h4>\n        <label>Click To Update Or Delete</label>\n        <table class=\"table table-bordered table-hover\">\n          <thead>\n            <tr class=\"active\">\n              <th>Role</th>\n              <th>Date</th>\n              <th class=\"hidden-xs hidden-sm\">Hours</th>\n              <th class=\"hidden-xs hidden-sm\">Wage</th>\n              <th>Total</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let jobLabor of jobLabors; let i = index\" data-toggle=\"modal\" (click)=\"onClickUpdateLabor(jobLabor.laborID, i)\"\n              href='#update-labor-modal'>\n              <td>{{jobLabor.roleName}}</td>\n              <td>{{jobLabor.laborDate | date: 'MM/dd/yyyy'}}</td>\n              <td class=\"hidden-xs hidden-sm\">{{jobLabor.laborHours}}</td>\n              <td class=\"hidden-xs hidden-sm\">{{jobLabor.roleWage | currency: 'USD':true}}</td>\n              <td>{{jobLabor.roleWage*jobLabor.laborHours | currency: 'USD':true}}</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr class=\"active\">\n              <th>Grand Total</th>\n              <th></th>\n              <th class=\"hidden-xs hidden-sm\">{{totalHoursTable}}</th>\n              <th class=\"hidden-xs hidden-sm\"></th>\n              <th>{{totalLaborPriceTable | currency: 'USD':true}}</th>\n            </tr>\n          </tfoot>\n        </table>\n        <button (click)=\"onClearJobLabor()\" class=\"btn btn-info\" data-toggle=\"modal\" href='#create-labor-modal'>\n          <span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Add Labor</button>\n        <h4 class=\"page-header\" *ngIf=\"jobMaterials[0] != null;\">Materials Cost</h4>\n        <label *ngIf=\"jobMaterials[0] != null;\">Click To Update Or Delete</label>\n        <table class=\"table table-bordered table-hover\">\n          <thead *ngIf=\"jobMaterials[0] != null;\">\n            <tr class=\"active\">\n              <th>Material</th>\n              <th>Linear Feet</th>\n              <th class=\"hidden-xs hidden-sm\">Price Per Unit</th>\n              <th class=\"hidden-xs hidden-sm\">Coverage In Linear Feet</th>\n              <th>Total</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let jobMaterial of jobMaterials; let i = index\" data-toggle=\"modal\" (click)=\"onClickUpdateJobMaterial(jobMaterial.materialID, i)\"\n              href='#update-material-modal'>\n              <td>{{jobMaterial.materialName}}</td>\n              <td>{{jobMaterial.linearFeet}}</td>\n              <td class=\"hidden-xs hidden-sm\">{{jobMaterial.pricePerUnit | currency: 'USD':true}}</td>\n              <td class=\"hidden-xs hidden-sm\">{{jobMaterial.linearFeetCoverage}} ft</td>\n              <td>{{jobMaterial.pricePerUnit / jobMaterial.linearFeetCoverage * jobMaterial.linearFeet | currency: 'USD':true}}</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr class=\"active\">\n              <th>Grand Total</th>\n              <th>{{totalLinearFeetTable}}</th>\n              <th class=\"hidden-xs hidden-sm\"></th>\n              <th class=\"hidden-xs hidden-sm\"></th>\n              <th>{{totalMaterialPriceTable | currency: 'USD':true}}</th>\n            </tr>\n          </tfoot>\n        </table>\n        <button (click)=\"onClearJobMaterials()\" class=\"btn btn-info\" data-toggle=\"modal\" href='#create-material-modal'>\n          <span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Add Materials</button>\n        <hr>\n        <!-- <label *ngIf=\"files.length != 0\">Job Files</label>\n        <table *ngIf=\"files.length != 0\" class=\"table table-bordered\">\n          <thead>\n            <tr class=\"active\">\n              <th>Name</th>\n              <th>Delete</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let file of files\">\n              <td>\n                <a target=\"_blank\" href=\"http://localhost:3000/api/uploads/jobs/{{id}}/{{file}}\">{{file}}</a>\n              </td>\n              <td>\n                <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" href='#delete-file-modal' (click)=\"onClickDeleteFile(file)\">\n                  <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table> -->\n        <button *ngIf=\"status == 'IN-PROGRESS'\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#finish-job-modal'>\n          <span class=\"glyphicon glyphicon-check\" aria-hidden=\"true\"></span> Finish Job</button>\n        <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-job-modal'>\n          <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete Job</button>\n      </div>\n    </div>\n  </ng-container>\n  <ng-template #noJob>\n    <h2 class=\"page-header\">No Jobs</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </ng-template>\n</div>\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Bid Details</h3>\n    </div>\n    <div class=\"panel-body\">\n      <h4 class=\"page-header\" style=\"margin-top: 0\">General</h4>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr class=\"active\">\n            <th>Initial Bid Price</th>\n            <th>Created Date</th>\n            <th>Accepted Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{job[0].bidPrice | currency: 'USD':true}}</td>\n            <td>{{job[0].bidCreatedDate | date: 'MM/dd/yyyy'}}</td>\n            <td>{{job[0].bidEndDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <h4 class=\"page-header\">Estimated Costs</h4>\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr class=\"active\">\n            <th>Labor</th>\n            <th>Materials</th>\n            <th>Total</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{job[0].bidLabor | currency: 'USD':true}}</td>\n            <td>{{job[0].bidMaterials | currency: 'USD':true}}</td>\n            <td>{{job[0].bidLabor + job[0].bidMaterials | currency: 'USD':true}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/bids/'+job[0].bidID]\">\n        <span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Open Bid</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Customer Details</h3>\n    </div>\n    <div class=\"panel-body\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr class=\"active\">\n            <th>Name</th>\n            <th>Address</th>\n            <th>City</th>\n            <th class=\"hidden-xs hidden-sm\">State</th>\n            <th class=\"hidden-xs hidden-sm\">ZIP</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{job[0].customerName}}</td>\n            <td>{{job[0].customerAddress}}</td>\n            <td>{{job[0].customerCity}}</td>\n            <td class=\"hidden-xs hidden-sm\">{{job[0].customerState}}</td>\n            <td class=\"hidden-xs hidden-sm\">{{job[0].customerZIP}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/customers/'+job[0].customerID]\">\n        <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Open Customer</button>\n    </div>\n  </div>\n</div>\n\n<!--                                     JOB POPUPS                                           -->\n<!--                Finish Job Popup                -->\n<div class=\"modal fade\" id=\"finish-job-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to finalize this job?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onFinish()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete Job Popup                -->\n<div class=\"modal fade\" id=\"delete-job-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this job?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteJob()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                                     REVENUE POPUPS                                           -->\n<!--                Update Revenue Popup                -->\n<div class=\"modal fade\" id=\"update-revenue-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update Revenue</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onUpdateJobRevenue()\">\n          <div class=\"form-group\">\n            <label>Amount</label>\n            <input type=\"number\" [(ngModel)]=\"revenueAmount\" name=\"revenueAmount\" placeholder=\"Amount\" class=\"form-control\" required>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"reset\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-revenue-modal'>\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete Revenue Popup                -->\n<div class=\"modal fade\" id=\"delete-revenue-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this revenue?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteRevenue()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create Revenue Popup                -->\n<div class=\"modal fade\" id=\"create-revenue-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Add Revenue</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onCreateJobRevenue()\">\n          <div class=\"form-group\">\n            <label>Amount</label>\n            <input type=\"number\" [(ngModel)]=\"revenueAmount\" name=\"revenueAmount\" placeholder=\"Amount\" class=\"form-control\" required>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-usd\" aria-hidden=\"true\"></span> Create</button>\n          <button type=\"reset\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                                     LABOR POPUPS                                           -->\n<!--                Update Labor Popup                -->\n<div class=\"modal fade\" id=\"update-labor-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update {{roleName}} Labor From {{laborDate | date: 'MM/dd/yyyy'}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onUpdateJobLabor()\">\n          <div class=\"form-group\">\n            <label>Hours</label>\n            <input type=\"number\" [(ngModel)]=\"hours\" name=\"hours\" placeholder=\"Hours\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Wage</label>\n            <input type=\"number\" [(ngModel)]=\"wage\" name=\"wage\" placeholder=\"Wage\" class=\"form-control\" required>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"reset\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-labor-modal'>\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete Labor Popup                -->\n<div class=\"modal fade\" id=\"delete-labor-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this labor?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteLabor()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create Labor Popup                -->\n<div class=\"modal fade\" id=\"create-labor-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Add Labor</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onCreateJobLabor()\">\n          <table class=\"table table-bordered\" *ngIf=\"labors[0] != null\">\n            <thead>\n              <tr class=\"active\">\n                <th>Role</th>\n                <th>Hours</th>\n                <th>Add</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  <select (change)=\"onChangeLabor($event.target.value)\" class=\"form-control\">\n                    <option></option>\n                    <option [value]=\"i\" *ngFor=\"let labor of labors; let i = index;\">{{labor.roleName}}</option>\n                  </select>\n                </td>\n                <td>\n                  <input type=\"number\" [(ngModel)]=\"hours\" name=\"hours\" placeholder=\"Hours\" class=\"form-control\" aria-describedby=\"hours-addon\"\n                    required>\n                </td>\n                <td>\n                  <button (click)=\"onAddLabor()\" type=\"button\" class=\"btn btn-success\">\n                    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <table class=\"table table-bordered\" *ngIf=\"selectedLabors.length != 0;\">\n            <thead>\n              <tr class=\"active\">\n                <th>Role</th>\n                <th>Estimated Cost</th>\n                <th>Delete</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let selectedLabor of selectedLabors; let i = index\">\n                <td>{{selectedLabor.roleName}}</td>\n                <td>{{selectedLabor.laborHours*selectedLabor.roleWage | currency:'USD':true}}\n                </td>\n                <td>\n                  <button (click)=\"onRemoveLabor(selectedLabor, i)\" type=\"button\" class=\"btn btn-danger\">\n                    <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <tr class=\"active\">\n                <th>Total Labor Cost</th>\n                <th>{{totalLaborPrice | currency: 'USD':true}}</th>\n                <th></th>\n              </tr>\n            </tfoot>\n          </table>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Add</button>\n          <button type=\"reset\" class=\"btn btn-warning\" (click)=\"onClearJobLabor()\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                                     MATERIAL POPUPS                                           -->\n<!--                Create Material Popup                -->\n<div class=\"modal fade\" id=\"create-material-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Add Materials</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onCreateBidMaterials()\">\n          <div class=\"form-group\">\n            <table class=\"table table-bordered\" *ngIf=\"materials[0] != null\">\n              <thead>\n                <tr class=\"active\">\n                  <th>Name</th>\n                  <th>Linear Feet</th>\n                  <th>Add</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    <select (change)=\"onChangeMaterial($event.target.value)\" class=\"form-control\">\n                      <option></option>\n                      <option [value]=\"i\" *ngFor=\"let material of materials; let i = index;\">{{material.materialName}}</option>\n                    </select>\n                  </td>\n                  <td>\n                    <input type=\"text\" [(ngModel)]=\"linearFeet\" name=\"linearFeet\" placeholder=\"Linear Feet\" class=\"form-control\" required>\n                  </td>\n                  <td>\n                    <button (click)=\"onAddMaterial()\" type=\"button\" class=\"btn btn-success\">\n                      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <table class=\"table table-bordered\" *ngIf=\"selectedMaterials1.length != 0;\">\n              <thead>\n                <tr class=\"active\">\n                  <th>Name</th>\n                  <th>Estimated Cost</th>\n                  <th>Delete</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let selectedMaterial of selectedMaterials1; let i = index\">\n                  <td>{{selectedMaterial.materialName}}</td>\n                  <td>{{selectedMaterial.linearFeet*selectedMaterial.pricePerUnit/selectedMaterial.linearFeetCoverage | currency:'USD':true}}</td>\n                  <td>\n                    <button (click)=\"onRemoveMaterial(selectedMaterial, i)\" type=\"button\" class=\"btn btn-danger\">\n                      <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <tr class=\"active\">\n                  <th>Total Material Cost</th>\n                  <th>{{totalMaterialPrice | currency: 'USD':true}}</th>\n                  <th></th>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Create</button>\n          <button type=\"reset\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Update Material Popup                -->\n<div class=\"modal fade\" id=\"update-material-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update {{materialName}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onUpdateJobMaterial()\">\n          <div class=\"form-group\">\n            <label>Linear Feet</label>\n            <input type=\"number\" [(ngModel)]=\"linearFeet\" name=\"linearFeet\" placeholder=\"Linear Feet\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Price Per Unit</label>\n            <input type=\"number\" [(ngModel)]=\"pricePerUnit\" name=\"pricePerUnit\" placeholder=\"Price Per Unit\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Coverage In Linear Feet</label>\n            <input type=\"number\" [(ngModel)]=\"linearFeetCoverage\" name=\"linearFeetCoverage\" placeholder=\"Coverage In Linear Feet\" class=\"form-control\"\n              required>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"reset\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-material-modal'>\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete Material Popup                -->\n<div class=\"modal fade\" id=\"delete-material-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete\n          <b>{{materialName | lowercase}}</b>?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteMaterial()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                                     CHANGE ORDER POPUPS                                           -->\n<!--                Update Change Popup                -->\n<div class=\"modal fade\" id=\"update-change-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update Change Order</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onUpdateChangeOrder()\">\n          <div class=\"form-group\">\n            <label>Amount</label>\n            <input type=\"number\" [(ngModel)]=\"changeAmount\" name=\"changeAmount\" placeholder=\"Amount\" class=\"form-control\" required>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"reset\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-change-modal'>\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete Change Popup                -->\n<div class=\"modal fade\" id=\"delete-change-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this change order?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteChangeOrder()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create Change Popup                -->\n<div class=\"modal fade\" id=\"create-change-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Create Change Order</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onCreateChangeOrder()\">\n          <div class=\"form-group\">\n            <label>Amount</label>\n            <input type=\"number\" [(ngModel)]=\"changeAmount\" name=\"changeAmount\" placeholder=\"Amount\" class=\"form-control\" required>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span> Create</button>\n          <button type=\"reset\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                                     FILE POPUPS                                           -->\n<!--                Delete File Popup                -->\n<div class=\"modal fade\" id=\"delete-file-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this file?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteFile()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--               FOR UPLOAD FILE POPUP                -->\n<!-- <div class=\"form-group\">\n            <h4>Upload Files</h4>\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"fileInput.click()\">\n              <span class=\"glyphicon glyphicon-upload\" aria-hidden=\"true\"></span> Browse Files</button>\n            <input name=\"file\" type=\"file\" style=\"display: none;\" #fileInput ng2FileSelect [uploader]=\"uploader\" />\n            <table *ngIf=\"uploader.queue.length\" class=\"table table-striped table-hover\">\n              <thead>\n                <tr>\n                  <th>File</th>\n                  <th>Remove</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                  <td>{{item._file.name}}</td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">\n                      <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div> -->\n\n<!--                                        UNUSED MARKUP                                       -->\n<!-- <label>Add Materials</label>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n              <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add Materials\n              <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\n                <li *ngFor=\"let material of materials; let i = index;\">\n                  <a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a>\n                </li>\n              </ng-container>\n              <ng-template #noMaterials>\n                <li>\n                  <a>No more materials</a>\n                </li>\n              </ng-template>\n            </ul>\n          </div> -->\n<!-- <table class=\"table table-striped table-hover\">\n            <thead *ngIf=\"selectedMaterials[0] != null;\">\n              <tr>\n                <th>Name</th>\n                <th>Quantity</th>\n                <th>Per Unit Cost</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index;\">\n                <td>{{selectedMaterial.materialName}}</td>\n                <td>\n                  <input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required>\n                </td>\n                <td>\n                  <input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\"\n                    required>\n                </td>\n                <td>\n                  <button type=\"button\" class=\"close\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">&times;</button>\n                </td>\n              </tr>\n            </tbody>\n          </table> -->\n\n<!-- <table class=\"table table-bordered\">\n              <thead *ngIf=\"bidMaterials[0] != null;\">\n                <tr class=\"active\">\n                  <th>Material</th>\n                  <th>Linear Feet</th>\n                  <th class=\"hidden-xs hidden-sm\">Price Per Unit</th>\n                  <th class=\"hidden-xs hidden-sm\">Coverage In Linear Feet</th>\n                  <th>Total</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let bidMaterial of bidMaterials\">\n                  <td>{{bidMaterial.materialName}}</td>\n                  <td>{{bidMaterial.linearFeet}}</td>\n                  <td class=\"hidden-xs hidden-sm\">{{bidMaterial.pricePerUnit | currency: 'USD':true}}</td>\n                  <td class=\"hidden-xs hidden-sm\">{{bidMaterial.linearFeetCoverage}} ft</td>\n                  <td>{{bidMaterial.pricePerUnit / bidMaterial.linearFeetCoverage * bidMaterial.linearFeet | currency: 'USD':true}}</td>\n                </tr>\n              </tbody>\n            </table> -->\n\n\n<!--                Update Job Popup                -->\n<!-- <div class=\"modal fade\" id=\"update-job-modal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\">Update Job</h4>\n        </div>\n        <div class=\"modal-body\">\n          <form (submit)=\"onUpdate()\" style=\"padding-bottom: 20px;\">\n            <div class=\"form-group\">\n              <h4>Add Labor</h4>\n              <label>Hours: </label>\n              <input type=\"text\" [(ngModel)]=\"laborHours\" name=\"laborHours\" placeholder=\"Hours\" class=\"form-control\" required>\n              <label>Price: </label>\n              <input type=\"text\" [(ngModel)]=\"laborPrice\" name=\"laborPrice\" placeholder=\"Price\" class=\"form-control\" required>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">\n              <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n            <button type=\"reset\" class=\"btn btn-danger\" (click)=\"onClear(); uploader.clearQueue()\">\n              <span class=\"glyphicon glyphicon-repeat\" aria-hidden=\"true\"></span> Clear</button>\n          </form>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-info\" data-dismiss=\"modal\">\n              <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n<!-- <button class=\"btn btn-info\" data-toggle=\"modal\" href='#update-job-modal'>\n          <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> Update Job</button> -->"

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
        this.jobLabor = null;
        this.jobStatus = null;
        this.createdDate = null;
        this.endDate = null;
        this.selectedMaterials1 = [];
        this.linearFeet = 0;
        this.pricePerUnit = 0;
        this.linearFeetCoverage = 0;
        this.totalMaterialPrice = 0;
        this.totalMaterialPriceTable = 0;
        this.totalLinearFeetTable = 0;
        this.revenueAmount = null;
        this.totalRevenueTable = 0;
        this.changeAmount = null;
        this.totalChangeTable = 0;
        /** JOB LABOR **/
        this.laborHours = null;
        this.laborPrice = null;
        this.selectedLabors = [];
        this.totalLaborPrice = 0;
        this.totalLaborPriceTable = 0;
        this.totalHoursTable = 0;
    }
    JobComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.setupFileUploader();
        this.getJob();
        this.getChangeOrders();
        this.getRevenue();
        this.getLabor();
        this.getMaterials();
        // this.getFiles();
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
    JobComponent.prototype.onFinish = function () {
        var _this = this;
        var updatedJob = {
            jobID: this.id,
            jobStatus: "COMPLETED"
        };
        this.jobService.updateJobStatus(updatedJob).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.router.navigate(['/jobs']);
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
            _this.files = files.files;
            for (var i = 0; i < _this.files.length; i++) {
                _this.filesUrls.push("http://localhost:3000/uploads/jobs/" + _this.id + "/" + _this.files[i]);
            }
        });
        // console.log(this.filesUrls);
    };
    JobComponent.prototype.setupFileUploader = function () {
        this.url = "http://localhost:3000/api/jobs/" + this.id + "/upload";
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
        };
    };
    JobComponent.prototype.onClickDeleteFile = function (file) {
        this.fileName = file;
    };
    JobComponent.prototype.onDeleteFile = function () {
        var _this = this;
        var file = {
            file: this.fileName
        };
        this.jobService.deleteJobFile(this.id, file).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
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
        this.linearFeet = null;
        this.pricePerUnit = null;
        this.linearFeetCoverage = null;
    };
    JobComponent.prototype.onCreateBidMaterials = function () {
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
        this.totalMaterialPrice += (selectedMaterial.pricePerUnit / selectedMaterial.linearFeetCoverage * this.linearFeet);
        this.selectedMaterials1.push(selectedMaterial);
        this.materials.splice(this.materialID, 1);
        this.material = null;
        this.linearFeet = 0;
    };
    JobComponent.prototype.onRemoveMaterial = function (material, id) {
        this.totalMaterialPrice -= (material.pricePerLinearFoot * material.linearFeet);
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
        this.changeAmount = null;
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
        this.revenueAmount = null;
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
        this.hours = null;
        this.wage = null;
        this.roleName = null;
        this.laborDate = null;
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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Go Home</button>\n</div>\n\n<ng-container *ngIf=\"jobsLength!=0; else noJobs\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">Jobs</h2>\n    <h4>Click To View Details</h4>\n    <table *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered table-hover\">\n      <thead>\n        <tr class=\"active\">\n          <th class=\"hidden-xs hidden-sm\">ID</th>\n          <th>Customer</th>\n          <th>Status</th>\n          <th>Created Date</th>\n          <th class=\"hidden-xs hidden-sm\">Completion Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let job of jobs;\" id=\"{{job.jobID}}\" [routerLink]=\"['/jobs/'+job.jobID]\">\n          <td class=\"hidden-xs hidden-sm\">{{job.jobID}}</td>\n          <td>{{job.customerName}}</td>\n          <td>{{job.jobStatus}}</td>\n          <td>{{job.createdDate | date: 'MM/dd/yyyy'}}</td>\n          <td *ngIf=\"job.jobStatus != 'IN-PROGRESS'\" class=\"hidden-xs hidden-sm\">{{job.endDate | date: 'MM/dd/yyyy'}}</td>\n          <td *ngIf=\"job.jobStatus == 'IN-PROGRESS'\" class=\"hidden-xs hidden-sm\">N/A</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</ng-container>\n<ng-template #noJobs>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">No Jobs</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </div>\n</ng-template>\n\n\n<!--                                              UNUSED MARKUP                                                       -->\n<!-- <ng-container *ngIf=\"inProgressLength!=0 || completedLength!=0; else noJobs\">\n  <ng-container *ngIf=\"inProgressLength!=0; else noInProgressJobs\">\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <h2 class=\"page-header\">In Progress Jobs</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Revenue</th>\n            <th>Created Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let inProgressJob of inProgressJobs;\" [routerLink]=\"['/jobs/'+inProgressJob.jobID]\">\n            <td>{{inProgressJob.jobID}}</td>\n            <td>{{inProgressJob.jobRevenue}}</td>\n            <td>{{inProgressJob.createdDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>  \n    </div>\n  </ng-container>\n  <ng-template #noInProgressJobs>\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <h2 class=\"page-header\">No Jobs In Progress</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n  \n  <ng-container *ngIf=\"completedLength!=0; else noCompletedJobs\">\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <h2 class=\"page-header\">Completed Jobs</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Labor Cost</th>\n            <th>Material Cost</th>\n            <th>Income</th>\n            <th>Created Date</th>\n            <th>Completed Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let completedJob of completedJobs;\" [routerLink]=\"['/jobs/'+completedJob.jobID]\">\n            <td>{{completedJob.jobID}}</td>\n            <td>{{completedJob.jobLabor}}</td>\n            <td>Net Income</td>\n            <td>{{completedJob.endDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>  \n    </div>\n  </ng-container>\n  <ng-template #noCompletedJobs>\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <h2 class=\"page-header\">No Completed Jobs</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n</ng-container>\n<ng-template #noJobs>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">No Jobs</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </div>\n</ng-template> -->"

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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">\n    <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Go Home</button>\n</div>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <h2 class=\"page-header\">Labor</h2>\n  <h4>Click To Update Or Delete</h4>\n  <table class=\"table table-bordered table-hover\">\n    <thead>\n      <tr class=\"active\">\n        <th class=\"hidden-xs hidden-sm\">ID</th>\n        <th>Role</th>\n        <th>Per Hour Wage</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let labor of labors\" (click)=\"onClickUpdate(labor.roleID, labor.roleName, labor.roleWage)\" data-toggle=\"modal\"\n        href='#update-modal'>\n        <td class=\"hidden-xs hidden-sm\">{{labor.roleID}}</td>\n        <td>{{labor.roleName}}</td>\n        <td>{{labor.roleWage | currency: 'USD':true}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#create-modal'>\n    <span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Create New</button>\n</div>\n\n<!--                Create Popup                -->\n<div class=\"modal fade\" id=\"create-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Create A New Role</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form #f=\"ngForm\" (submit)=\"onCreate()\">\n          <div class=\"form-group\">\n            <label>Role Name</label>\n            <input required maxlength=\"50\" #name=\"ngModel\" type=\"text\" [(ngModel)]=\"roleName\" name=\"roleName\" placeholder=\"Role Name\" class=\"form-control\" required>\n            <div *ngIf=\"name.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"name.errors.required\">\n                *Name is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Role Wage Per Hour</label>\n            <input required onKeyPress=\"if(this.value.length==10) return false;\" #wage=\"ngModel\" type=\"number\" [(ngModel)]=\"roleWage\" name=\"roleWage\" placeholder=\"Role Wage Per Hour\" class=\"form-control\" required>\n            <div *ngIf=\"wage.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"wage.errors.required\">\n                *Wage is required\n              </div>\n            </div>\n          </div>\n          <button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Create</button>\n          <button type=\"button\" (click)=\"onClear()\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"onClear()\" type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Update Popup                -->\n<div class=\"modal fade\" id=\"update-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update Role</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form #f2=\"ngForm\" (submit)=\"onUpdate()\">\n          <div class=\"form-group\">\n            <label>Role Name</label>\n            <input required maxlength=\"50\" #name2=\"ngModel\" type=\"text\" [(ngModel)]=\"roleName\" name=\"roleName\" placeholder=\"Role Name\" class=\"form-control\" required>\n            <div *ngIf=\"name2.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"name2.errors.required\">\n                *Name is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Role Wage Per Hour</label>\n            <input required onKeyPress=\"if(this.value.length==10) return false;\" #wage2=\"ngModel\" type=\"number\" [(ngModel)]=\"roleWage\" name=\"roleWage\" placeholder=\"Role Wage Per Hour\" class=\"form-control\" required>\n            <div *ngIf=\"wage2.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"wage2.errors.required\">\n                *Wage is required\n              </div>\n            </div>\n          </div>\n          <button [disabled]=\"f2.invalid\" type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"button\" (click)=\"onClear()\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" (click)=\"onClear()\" aria-hidden=\"true\"></span> Clear</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-modal'>\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete\n          </button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"onClear()\" type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete Popup                -->\n<div class=\"modal fade\" id=\"delete-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this labor role?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete(); onClear()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>"

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

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLogin()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" class=\"form-control\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" required>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></span> Login</button>\n  <button type=\"reset\" class=\"btn btn-warning\"><span class=\"glyphicon glyphicon-repeat\" aria-hidden=\"true\"></span> Clear</button>\n</form>"

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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">\n    <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Go Home</button>\n</div>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <ng-container *ngIf=\"length != 0; else noMaterials\">\n    <h2 class=\"page-header\">Materials</h2>\n    <h4>Click To Update Or Delete</h4>\n    <!-- *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" -->\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr class=\"active\">\n          <th>Name</th>\n          <th>Price Per Unit</th>\n          <th>Coverage In Linear Feet</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let material of materials\" (click)=\"onClickUpdate(material.materialID, material.materialName, material.pricePerUnit, material.linearFeetCoverage)\"\n          data-toggle=\"modal\" href='#update-modal'>\n          <td>{{material.materialName}}</td>\n          <td>{{material.pricePerUnit | currency: 'USD':true}}</td>\n          <td>{{material.linearFeetCoverage}} ft</td>\n        </tr>\n      </tbody>\n    </table>\n  </ng-container>\n  <ng-template #noMaterials>\n    <h2 class=\"page-header\">No Materials</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </ng-template>\n  <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#create-modal'>\n    <span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Create New</button>\n</div>\n\n<!--                Update Popup                -->\n<div class=\"modal fade\" id=\"update-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update Material</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form #f2=\"ngForm\" (submit)=\"onUpdate()\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input required maxlength=\"50\" #materialName2=\"ngModel\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\">\n            <div *ngIf=\"materialName2.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"materialName2.errors.required\">\n                *Name is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Price Per Unit</label>\n            <input required onKeyPress=\"if(this.value.length==10) return false;\" #perUnit2=\"ngModel\" type=\"number\" [(ngModel)]=\"pricePerUnit\"\n              name=\"pricePerUnit\" placeholder=\"Price Per Unit\" class=\"form-control\">\n            <div *ngIf=\"perUnit2.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"perUnit2.errors.required\">\n                *Per unit price is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Coverage In Linear Feet</label>\n            <input required onKeyPress=\"if(this.value.length==10) return false;\" #coverage2=\"ngModel\" type=\"number\" [(ngModel)]=\"linearFeetCoverage\"\n              name=\"linearFeetCoverage\" placeholder=\"Coverage In Linear Feet\" class=\"form-control\">\n            <div *ngIf=\"coverage2.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"coverage2.errors.required\">\n                *Linear feet coverage is required\n              </div>\n            </div>\n          </div>\n          <button [disabled]=\"f2.invalid\" type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"button\" (click)=\"onClear()\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-modal'>\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete\n          </button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"onClear()\" type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete Popup                -->\n<div class=\"modal fade\" id=\"delete-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this material?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create Popup                -->\n<div class=\"modal fade\" id=\"create-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Create A New Material</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form #f=\"ngForm\" (submit)=\"onCreate()\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input required maxlength=\"50\" #materialName=\"ngModel\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\">\n            <div *ngIf=\"materialName.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"materialName.errors.required\">\n                *Name is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Price Per Unit</label>\n            <input required onKeyPress=\"if(this.value.length==10) return false;\" #perUnit=\"ngModel\" type=\"number\" [(ngModel)]=\"pricePerUnit\"\n              name=\"pricePerUnit\" placeholder=\"Price Per Unit\" class=\"form-control\">\n            <div *ngIf=\"perUnit.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"perUnit.errors.required\">\n                *Per unit price is required\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Coverage In Linear Feet</label>\n            <input required onKeyPress=\"if(this.value.length==10) return false;\" #coverage=\"ngModel\" type=\"number\" [(ngModel)]=\"linearFeetCoverage\"\n              name=\"linearFeetCoverage\" placeholder=\"Coverage In Linear Feet\" class=\"form-control\">\n            <div *ngIf=\"coverage.invalid\" style=\"color:#ff0000\">\n              <div *ngIf=\"coverage.errors.required\">\n                *Linear feet coverage is required\n              </div>\n            </div>\n          </div>\n          <button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Create</button>\n          <button type=\"button\" (click)=\"onClear()\" class=\"btn btn-warning\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"onClear()\" type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

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
exports.push([module.i, ".fill-remaining-space {\n    /*This fills the remaining space, by using flexbox.  \n   Every toolbar row uses a flexbox row layout. */\n   -webkit-box-flex: 1;\n       -ms-flex: 1 1 auto;\n           flex: 1 1 auto;\n};", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://stackoverflow.com/questions/38209713/how-to-make-a-responsive-nav-bar-using-angular-material-2 -->\n<!--<md-sidenav-containe fullscreen>-->\n<!--<md-sidenav-container>\n    <md-toolbar color=\"primary\">\n        <button md-button [routerLink]=\"['/']\"><md-icon>home</md-icon>Allied Waterproofing</button>\n        <span class=\"fill-remaining-space\"></span>\n        <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\n            <button md-button [routerLink]=\"['/customers']\">Customers</button>\n            <button md-button [routerLink]=\"['/']\">Something</button>\n        </div>\n        <button md-button [md-menu-trigger-for]=\"menu\" fxHide=\"false\" fxHide.gt-sm><md-icon>menu</md-icon></button>\n    </md-toolbar>\n    <md-menu x-position=\"before\" #menu=\"mdMenu\">\n        <button md-menu-item [routerLink]=\"['/customers']\">Customers</button>\n        <button md-menu-item [routerLink]=\"['/']\">Something</button>\n    </md-menu>\n</md-sidenav-container>-->\n\n<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\">Allied Waterproofing</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n        <ul class=\"nav navbar-nav\">\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/home']\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Home</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/customers']\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Customers</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/inquiries']\"><span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Inquiries</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/bids']\"><span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Bids</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/jobs']\"><span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Jobs</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/materials']\"><span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Materials</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/labor']\"><span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\"></span> Labor</a></li>\n            <!-- <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/register']\">Register User</a></li> -->\n            <li><a *ngIf=\"authService.loggedIn()\" data-toggle=\"modal\" href='#logout-modal'><span class=\"glyphicon glyphicon-log-out\" aria-hidden=\"true\"></span> Logout</a></li>\n        </ul>\n    </div><!-- /.navbar-collapse -->\n</nav>\n\n\n<!--                Logout Popup                -->\n<div class=\"modal fade\" id=\"logout-modal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                <h4 class=\"modal-title\">Warning</h4>\n            </div>\n            <div class=\"modal-body\">\n                <p>Are you sure you want to logout?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onLogout()\">Yes</button>\n            </div>\n        </div>\n    </div>\n</div>"

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