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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_customers_customers_component__ = __webpack_require__("../../../../../src/app/components/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_inquiries_inquiries_component__ = __webpack_require__("../../../../../src/app/components/inquiries/inquiries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_bids_bids_component__ = __webpack_require__("../../../../../src/app/components/bids/bids.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_jobs_jobs_component__ = __webpack_require__("../../../../../src/app/components/jobs/jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_customer_customer_component__ = __webpack_require__("../../../../../src/app/components/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_create_bid_create_bid_component__ = __webpack_require__("../../../../../src/app/components/create-bid/create-bid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_materials_materials_component__ = __webpack_require__("../../../../../src/app/components/materials/materials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_bid_bid_component__ = __webpack_require__("../../../../../src/app/components/bid/bid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_inquiry_inquiry_component__ = __webpack_require__("../../../../../src/app/components/inquiry/inquiry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_job_job_component__ = __webpack_require__("../../../../../src/app/components/job/job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_inquiry_service__ = __webpack_require__("../../../../../src/app/services/inquiry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_bid_service__ = __webpack_require__("../../../../../src/app/services/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_material_service__ = __webpack_require__("../../../../../src/app/services/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'customers', component: __WEBPACK_IMPORTED_MODULE_11__components_customers_customers_component__["a" /* CustomersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'customers/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_customer_customer_component__["a" /* CustomerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'inquiries', component: __WEBPACK_IMPORTED_MODULE_14__components_inquiries_inquiries_component__["a" /* InquiriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'bids', component: __WEBPACK_IMPORTED_MODULE_15__components_bids_bids_component__["a" /* BidsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'jobs', component: __WEBPACK_IMPORTED_MODULE_16__components_jobs_jobs_component__["a" /* JobsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'create-bid/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_create_bid_create_bid_component__["a" /* CreateBidComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'materials', component: __WEBPACK_IMPORTED_MODULE_19__components_materials_materials_component__["a" /* MaterialsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'bids/:id', component: __WEBPACK_IMPORTED_MODULE_20__components_bid_bid_component__["a" /* BidComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'inquiries/:id', component: __WEBPACK_IMPORTED_MODULE_21__components_inquiry_inquiry_component__["a" /* InquiryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'jobs/:id', component: __WEBPACK_IMPORTED_MODULE_22__components_job_job_component__["a" /* JobComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_customers_customers_component__["a" /* CustomersComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_inquiries_inquiries_component__["a" /* InquiriesComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_bids_bids_component__["a" /* BidsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_jobs_jobs_component__["a" /* JobsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_create_bid_create_bid_component__["a" /* CreateBidComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_materials_materials_component__["a" /* MaterialsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_bid_bid_component__["a" /* BidComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_inquiry_inquiry_component__["a" /* InquiryComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_job_job_component__["a" /* JobComponent */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileSelectDirective"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular_datatables__["a" /* DataTablesModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_file_tree_ng2_file_tree__["Ng2FileTreeModule"]
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
            __WEBPACK_IMPORTED_MODULE_23__services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_24__services_inquiry_service__["a" /* InquiryService */],
            __WEBPACK_IMPORTED_MODULE_25__services_bid_service__["a" /* BidService */],
            __WEBPACK_IMPORTED_MODULE_26__services_job_service__["a" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_27__services_material_service__["a" /* MaterialService */],
            __WEBPACK_IMPORTED_MODULE_28__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_29__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_30_ngx_cookie_service__["a" /* CookieService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/bids']\">Go To Bids</button>\n</div>\n\n<h2 class=\"page-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">Bid #{{bid[0].bidID}}</h2>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Customer Details</h3>\n    </div>\n    <div class=\"panel-body\">\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Name</th>\n            <th>Address</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{bid[0].customerID}}</td>\n            <td>{{bid[0].customerName}}</td>\n            <td>{{bid[0].customerAddress}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/customers/'+bid[0].customerID]\">\n        <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Open Customer</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n  <ng-container *ngIf=\"bid; else noBid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Bid Details</h3>\n      </div>\n      <div class=\"panel-body\">\n        <table class=\"table table-striped table-hover\">\n          <thead>\n            <tr>\n              <th>Price</th>\n              <th>Created Date</th>\n              <th>Accepted/Declined Date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{bid[0].bidPrice | currency: 'USD':true}}</td>\n              <td>{{bid[0].createdDate | date: 'MM/dd/yyyy'}}</td>\n              <td>{{bid[0].endDate | date: 'MM/dd/yyyy'}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <h4 class=\"page-header\">Costs</h4>\n        <label>Labor Cost</label>\n        <table class=\"table table-striped table-hover\">\n          <tbody>\n            <tr>\n              <td>{{bid[0].bidLabor | currency: 'USD':true}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <hr>\n        <label *ngIf=\"bidMaterials[0] != null;\">Materials Cost</label>\n        <table class=\"table table-striped table-hover\">\n          <thead *ngIf=\"bidMaterials[0] != null;\">\n            <tr>\n              <th>Material</th>\n              <th>Quantity</th>\n              <th>Per Unit Cost</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let bidMaterial of bidMaterials\">\n              <td>{{bidMaterial.materialName}}</td>\n              <td>{{bidMaterial.quantity}}</td>\n              <td>{{bidMaterial.perUnitCost | currency: 'USD':true}}</td>\n              <td>\n                <button type=\"button\" class=\"close\" data-toggle=\"modal\" href='#delete-material-modal'>&times;</button>\n              </td>\n              <!--                Delete Bid Popup                -->\n              <div class=\"modal fade\" id=\"delete-material-modal\">\n                <div class=\"modal-dialog\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                      <h4 class=\"modal-title\">Warning</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                      <p>Are you sure you want to delete this material from the current bid?</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n                      <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteBidMaterial(bidMaterial.materialID, bidMaterial.bidID)\">Yes</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n          </tbody>\n        </table>\n        <button *ngIf=\"status == 'PENDING'\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#create-job-modal'>\n          <span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Create Job</button>\n        <!-- <button *ngIf=\"status == 'PENDING'\" type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" href='#update-bid-modal'> -->\n        <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" href='#update-bid-modal'>\n          <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> Update Bid</button>\n        <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-bid-modal'>\n          <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete Bid</button>\n      </div>\n    </div>\n  </ng-container>\n  <ng-template #noBid>\n    <h2 class=\"page-header\">No Bids</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </ng-template>\n</div>\n\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Inquiry Details</h3>\n    </div>\n    <div class=\"panel-body\">\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>Received Date</th>\n            <th>Accepted Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{bid[0].inquiryReceivedDate | date: 'MM/dd/yyyy'}}</td>\n            <td>{{bid[0].inquiryEndDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <h4 class=\"page-header\">Description</h4>\n      <p>{{bid[0].description}}</p>\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/inquiries/'+bid[0].inquiryID]\">\n        <span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Open Inquiry</button>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n  <h2 class=\"page-header\">Update Bid</h2>\n  <form (submit)=\"onUpdate()\">\n    <div class=\"form-group\">\n      <label>Change Bid Price</label>\n      <input type=\"text\" [(ngModel)]=\"bidPrice\" name=\"bidPrice\" placeholder=\"Bid Price\" class=\"form-control\" required>\n    </div>\n    <div class=\"form-group\">\n      <label>Change Labor Cost</label>\n      <input type=\"text\" [(ngModel)]=\"bidLabor\" name=\"laborCost\" placeholder=\"Labor Cost\" class=\"form-control\" required>\n    </div>\n    <label>Add Materials</label>\n    <div class=\"dropdown\">\n      <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Materials<span class=\"caret\"></span></button>\n      <ul class=\"dropdown-menu\">\n        <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\n          <li *ngFor=\"let material of materials; let i = index\"><a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a></li>\n        </ng-container>\n        <ng-template #noMaterials>\n          <li><a>No more materials</a></li>\n        </ng-template>\n      </ul>\n    </div>\n    <table class=\"table table-striped table-hover\">\n      <thead *ngIf=\"selectedMaterials[0] != null;\">\n        <tr>\n          <th>Name</th>\n          <th>Quantity</th>\n          <th>Per Unit Cost</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index;\">\n          <td>{{selectedMaterial.materialName}}</td>\n          <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required></td>\n          <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\" required></td>\n          <td><button type=\"button\" class=\"close\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">&times;</button></td>\n        </tr>\n      </tbody>\n    </table>\n    <button type=\"submit\" class=\"btn btn-primary\">Update</button>\n    <button type=\"reset\" class=\"btn btn-danger\" (click)=\"onClear()\">Clear</button>\n  </form>  \n</div> -->\n\n<!--<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n  <h2 class=\"page-header\">Create A New Job</h2>\n  <form (submit)=\"onCreate()\">\n    <div class=\"form-group\">\n      <label>Created Date</label>\n      <input type=\"text\" [(ngModel)]=\"createdDate\" name=\"createdDate\" placeholder=\"YYYY-MM-DD\" class=\"form-control\" required>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Create</button>\n    <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\n  </form>  \n</div>-->\n\n<!--                Delete Bid Popup                -->\n<div class=\"modal fade\" id=\"delete-bid-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this bid?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create Job Popup                -->\n<div class=\"modal fade\" id=\"create-job-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to create a job?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onCreate()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Update Bid Popup                -->\n<div class=\"modal fade\" id=\"update-bid-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update Bid</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onUpdate()\">\n          <div class=\"form-group\">\n            <label>Change Bid Price</label>\n            <input type=\"text\" [(ngModel)]=\"bidPrice\" name=\"bidPrice\" placeholder=\"Bid Price\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Change Labor Cost</label>\n            <input type=\"text\" [(ngModel)]=\"bidLabor\" name=\"laborCost\" placeholder=\"Labor Cost\" class=\"form-control\" required>\n          </div>\n          <label>Add Materials</label>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n              <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Materials\n              <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\n                <li *ngFor=\"let material of materials; let i = index\">\n                  <a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a>\n                </li>\n              </ng-container>\n              <ng-template #noMaterials>\n                <li>\n                  <a>No more materials</a>\n                </li>\n              </ng-template>\n            </ul>\n          </div>\n          <table class=\"table table-striped table-hover\">\n            <thead *ngIf=\"selectedMaterials[0] != null;\">\n              <tr>\n                <th>Name</th>\n                <th>Quantity</th>\n                <th>Per Unit Cost</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index;\">\n                <td>{{selectedMaterial.materialName}}</td>\n                <td>\n                  <input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required>\n                </td>\n                <td>\n                  <input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\"\n                    required>\n                </td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">\n                    <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"reset\" class=\"btn btn-danger\" (click)=\"onClear()\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

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
    function BidComponent(router, route, bidService, materialService, jobService, inquiryService) {
        this.router = router;
        this.route = route;
        this.bidService = bidService;
        this.materialService = materialService;
        this.jobService = jobService;
        this.inquiryService = inquiryService;
        this.selectedMaterials = [];
    }
    BidComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.bidService.getBidById(this.id).subscribe(function (bid) {
            _this.bid = bid;
            _this.status = bid[0].bidStatus;
        });
        this.bidService.getBidMaterialsById(this.id).subscribe(function (bidMaterials) {
            _this.bidMaterials = bidMaterials;
            _this.materialService.getAllMaterials().subscribe(function (materials) {
                _this.materials = materials.materials;
                for (var i = 0; i < _this.materials.length; i++) {
                    for (var k = 0; k < _this.bidMaterials.length; k++) {
                        if (_this.materials[i].materialID == _this.bidMaterials[k].materialID) {
                            _this.materials.splice(i, 1);
                        }
                    }
                }
            });
        });
    };
    BidComponent.prototype.onAddMaterial = function (material, id) {
        this.selectedMaterials.push(material);
        this.materials.splice(id, 1);
    };
    BidComponent.prototype.onRemoveMaterial = function (material, id) {
        this.selectedMaterials.splice(id, 1);
        this.materials.push(material);
        //this.ngOnInit();
    };
    BidComponent.prototype.onClear = function () {
        var _this = this;
        this.selectedMaterials.forEach(function (selectedMaterial) {
            _this.materials.push(selectedMaterial);
        });
        this.selectedMaterials = [];
        //this.ngOnInit();
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
    BidComponent.prototype.onDeleteBidMaterial = function (materialID, bidID) {
        var _this = this;
        var bidMaterial = {
            materialID: materialID,
            bidID: bidID
        };
        console.log(bidMaterial);
        this.bidService.deleteBidMaterial(bidMaterial).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
            }
            else {
                console.log(data.msg);
            }
        });
    };
    BidComponent.prototype.onUpdate = function () {
        var _this = this;
        var updatedBid = {
            bidID: this.id,
            bidPrice: this.bidPrice,
            bidLabor: this.bidLabor,
            bidStatus: this.bidStatus,
            createdDate: this.createdDate,
            endDate: this.endDate
        };
        this.selectedMaterials.forEach(function (selectedMaterial) {
            _this.bidService.createBidMaterialById(_this.id, selectedMaterial).subscribe(function (data) {
                if (data.success) {
                    console.log(data.msg);
                }
                else {
                    console.log(data.msg);
                }
            });
        });
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
    return BidComponent;
}());
BidComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bid',
        template: __webpack_require__("../../../../../src/app/components/bid/bid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/bid/bid.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bid_service__["a" /* BidService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_material_service__["a" /* MaterialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_material_service__["a" /* MaterialService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_job_service__["a" /* JobService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_inquiry_service__["a" /* InquiryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_inquiry_service__["a" /* InquiryService */]) === "function" && _f || Object])
], BidComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "<!--<button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>\n<ng-container *ngIf=\"bids; else noBids\">\n    <h2 class=\"page-header\">Bids</h2>\n    <div class=\"panel-group\" id=\"accordion\">\n      <div class=\"panel panel-default\" *ngFor=\"let bid of bids\">\n        <div class=\"panel-heading\">\n          <h4 class=\"panel-title\">\n            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{bid.bidID + '-details'}}\">Bid ID: {{bid.bidID}}</a>\n          </h4>\n        </div>\n        <div attr.id=\"{{bid.bidID + '-details'}}\" class=\"panel-collapse collapse\">\n          <div class=\"panel-body\">\n            <li class=\"list-group-item\"><b>Estimated Cost:</b> ${{bid.bidCost}}</li>\n            <li class=\"list-group-item\"><b>Bid Price:</b> ${{bid.bidPrice}}</li>\n            <li class=\"list-group-item\"><b>Status:</b> {{bid.bidStatus}}</li><br>\n            <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/home']\">Create Job</button>\n            <button type=\"button\" class=\"btn btn-danger\" [routerLink]=\"['/home']\">Edit</button>\n          </div>\n        </div>\n      </div>\n    </div>\n</ng-container>\n<ng-template #noBids>\n  <h2 class=\"page-header\">Loading...</h2>\n  <p>Try refreshing the page if there is a significant delay.</p>\n</ng-template>-->\n\n\n\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>\n</div>\n  \n<ng-container *ngIf=\"bidsLength!=0; else noBids\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">Bids</h2>\n    <h4>Click To View Details</h4>\n    <table *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" class=\"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>Status</th>\n          <!-- <th>Price</th> -->\n          <th>Customer</th>\n          <th>Created Date</th>\n          <th>Accepted/Declined Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let bid of bids;\" id=\"{{bid.bidID}}\" [routerLink]=\"['/bids/'+bid.bidID]\">\n          <td>{{bid.bidID}}</td>\n          <td>{{bid.bidStatus}}</td>\n          <!-- <td>{{bid.bidPrice | currency: 'USD':true}}</td> -->\n          <td>{{bid.customerName}}</td>\n          <td>{{bid.createdDate | date: 'MM/dd/yyyy'}}</td>\n          <td>{{bid.endDate | date: 'MM/dd/yyyy'}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</ng-container>\n<ng-template #noBids>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">No Bids</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </div>\n</ng-template>\n\n<!-- <ng-container *ngIf=\"pendingLength!=0 || acceptedLength!=0 || declinedLength!=0; else noBids\">\n  <ng-container *ngIf=\"pendingLength!=0; else noPendingBids\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">Pending Bids</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Price</th>\n            <th>Created Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let pendingBid of pendingBids;\" [routerLink]=\"['/bids/'+pendingBid.bidID]\">\n            <td>{{pendingBid.bidID}}</td>\n            <td>{{pendingBid.bidPrice}}</td>\n            <td>{{pendingBid.createdDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>  \n    </div>\n  </ng-container>\n  <ng-template #noPendingBids>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">No Pending Bids</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n  \n  <ng-container *ngIf=\"acceptedLength!=0; else noAcceptedBids\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">Accepted Bids</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Price</th>\n            <th>Accepted Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let acceptedBid of acceptedBids;\" [routerLink]=\"['/bids/'+acceptedBid.bidID]\">\n            <td>{{acceptedBid.bidID}}</td>\n            <td>{{acceptedBid.bidPrice}}</td>\n            <td>{{acceptedBid.endDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>  \n    </div>\n  </ng-container>\n  <ng-template #noAcceptedBids>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">No Accepted Bids</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n  \n  <ng-container *ngIf=\"declinedLength!=0; else noDeclinedBids\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">Declined Bids</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Price</th>\n            <th>Declined Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let declinedBid of declinedBids;\" [routerLink]=\"['/bids/'+declinedBid.bidID]\">\n            <td>{{declinedBid.bidID}}</td>\n            <td>{{declinedBid.bidPrice}}</td>\n            <td>{{declinedBid.endDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table> \n    </div>\n  </ng-container>\n  <ng-template #noDeclinedBids>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">No Declined Bids</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n</ng-container>\n<ng-template #noBids>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">No Bids</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </div>\n</ng-template> -->"

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
            _this.filterBids(bids);
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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/customers']\">Go To Customers</button>\n</div>\n\n<h2 class=\"page-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">{{customer[0].customerName}}</h2>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <ng-container *ngIf=\"customer; else noCustomer\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Customer Details</h3>\n      </div>\n      <div class=\"panel-body\">\n        <table class=\"table table-striped table-hover\">\n          <thead>\n            <tr>\n              <th>Address</th>\n              <th>City</th>\n              <th>State</th>\n              <th>ZIP</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{customer[0].address}}</td>\n              <td>{{customer[0].city}}</td>\n              <td>{{customer[0].state}}</td>\n              <td>{{customer[0].zip}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <button class=\"btn btn-primary\" href=\"#update-customer-modal\" data-toggle=\"modal\">\n          <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> Update Customer</button>\n        <button class=\"btn btn-info\" href=\"#create-inquiry-modal\" data-toggle=\"modal\">\n          <span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Create Inquiry</button>\n        <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-customer-modal'>\n          <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete Customer</button>\n      </div>\n    </div>\n  </ng-container>\n  <ng-template #noCustomer>\n    <h2 class=\"page-header\">No Customers</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </ng-template>\n</div>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <ng-container *ngIf=\"contacts; else noContacts\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Contact Details</h3>\n      </div>\n      <div class=\"panel-body\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Title</th>\n              <th>Name</th>\n              <th>Phone</th>\n              <th>Email</th>\n              <th>Update</th>\n              <th>Delete</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let contact of contacts\">\n              <td>{{contact.contactID}}</td>\n              <td>{{contact.contactTitle}}</td>\n              <td>{{contact.contactName}}</td>\n              <td>{{contact.contactPhone}}</td>\n              <td>{{contact.contactEmail}}</td>\n              <td>\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClickUpdateContact(contact.contactID)\" data-toggle=\"modal\" href='#update-contact-modal'>\n                  <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n                </button>\n              </td>\n              <td>\n                <button class=\"btn btn-danger\" type=\"button\" (click)=\"onClickDeleteContact(contact.contactID)\" data-toggle=\"modal\" href='#delete-contact-modal'>\n                  <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <button class=\"btn btn-info\" type=\"button\" data-toggle=\"modal\" href='#create-contact-modal'>\n          <span class=\"glyphicon glyphicon-phone\" aria-hidden=\"true\"></span> Create Contact\n        </button>\n      </div>\n    </div>\n  </ng-container>\n  <ng-template>\n    <h2 class=\"page-header\">No Contacts</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </ng-template>\n</div>\n\n<!--                Delete Customer Popup                -->\n<div class=\"modal fade\" id=\"delete-customer-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this user?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteCustomer()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Update Customer Popup                -->\n<div class=\"modal fade\" id=\"update-customer-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update Customer</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onUpdateCustomer()\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Address</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"address\" name=\"address\" placeholder=\"Address\" />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">City</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" name=\"city\" placeholder=\"City\" />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">State</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"state\" name=\"state\" placeholder=\"State\" />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">ZIP</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"zip\" name=\"zip\" placeholder=\"ZIP\" />\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"reset\" class=\"btn btn-danger\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create Inquiry Popup                -->\n<div class=\"modal fade\" id=\"create-inquiry-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Create A New Inquiry</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onCreate()\">\n          <div class=\"form-group\">\n            <label>Description</label>\n            <textarea type=\"text\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"Description\" class=\"form-control\" required></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Create</button>\n          <button type=\"reset\" class=\"btn btn-danger\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete Contact Popup                -->\n<div class=\"modal fade\" id=\"delete-contact-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this contact?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteContact()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Update Contact Popup                -->\n<div class=\"modal fade\" id=\"update-contact-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update Contact</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onUpdateContact()\">\n          <div class=\"form-group\">\n            <label>Title</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contactTitle\" name=\"contactTitle\" placeholder=\"Title\" required/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contactName\" name=\"contactName\" placeholder=\"Name\" required/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Phone</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contactPhone\" name=\"contactPhone\" placeholder=\"Phone\" required/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Email</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contactEmail\" name=\"contactEmail\" placeholder=\"Email\" required/>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"reset\" class=\"btn btn-danger\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create Contact Popup                -->\n<div class=\"modal fade\" id=\"create-contact-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Create Contact</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onCreateContact()\">\n          <div class=\"form-group\">\n            <label>Title</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contactTitle\" name=\"contactTitle\" placeholder=\"Title\" required/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contactName\" name=\"contactName\" placeholder=\"Name\" required/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Phone</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contactPhone\" name=\"contactPhone\" placeholder=\"Phone\" required/>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">Email</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contactEmail\" name=\"contactEmail\" placeholder=\"Email\" required/>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Create</button>\n          <button type=\"reset\" class=\"btn btn-danger\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

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
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.customerService.getCustomerById(this.id).subscribe(function (customer) {
            _this.customer = customer;
        });
        this.customerService.getAllContacts(this.id).subscribe(function (contacts) {
            _this.contacts = contacts;
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
    CustomerComponent.prototype.onUpdateCustomer = function () {
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
            }
            else {
                console.log(data.msg);
            }
        });
        this.ngOnInit();
        this.clearCustomerFields();
    };
    CustomerComponent.prototype.onClickUpdateContact = function (contactID) {
        this.contactID = contactID;
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
                _this.ngOnInit();
                _this.clearContactFields();
            }
            else {
                console.log(data.msg);
            }
        });
    };
    CustomerComponent.prototype.onClickDeleteContact = function (contactID) {
        this.contactID = contactID;
    };
    CustomerComponent.prototype.onDeleteContact = function () {
        var _this = this;
        this.customerService.deleteContact(this.contactID).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
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
                _this.ngOnInit();
                _this.clearContactFields();
            }
            else {
                console.log(data.msg);
            }
        });
    };
    CustomerComponent.prototype.clearCustomerFields = function () {
        this.name = null;
        this.address = null;
        this.city = null;
        this.state = null;
        this.zip = null;
    };
    CustomerComponent.prototype.clearContactFields = function () {
        this.contactTitle = null;
        this.contactName = null;
        this.contactPhone = null;
        this.contactEmail = null;
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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>\n</div>\n\n<h2 class=\"page-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">Customers</h2>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <ng-container *ngIf=\"customers; else noCustomers\">\n    <h4>Click To View Details</h4>\n    <!-- *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" -->\n    <table class=\"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>Name</th>\n          <th>Address</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let customer of customers;\" [routerLink]=\"['/customers/'+customer.customerID]\">\n          <td>{{customer.customerID}}</td>\n          <td>{{customer.customerName}}</td>\n          <td>{{customer.address}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <button type=\"button\" class=\"btn btn-primary\" href=\"#create-modal\" data-toggle=\"modal\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Create New</button>\n  </ng-container>\n  <ng-template #noCustomers>\n    <h2 class=\"page-header\">No Customers</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </ng-template>\n</div>\n\n<!--                Create Customer Popup                -->\n<div class=\"modal fade\" id=\"create-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Create A New Customer</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onCreate()\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Address</label>\n            <input type=\"text\" [(ngModel)]=\"address\" name=\"address\" placeholder=\"Address\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">City</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" name=\"city\" placeholder=\"City\" />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">State</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"state\" name=\"state\" placeholder=\"State\" />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"\">ZIP</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"zip\" name=\"zip\" placeholder=\"ZIP\" />\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Create</button>\n          <button type=\"reset\" class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

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
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Subject"]();
        this.displayTable = false;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getAllCustomers().subscribe(function (customers) {
            _this.customers = customers.customers;
            // this.setupDataTable();
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
                _this.ngOnInit();
                _this.clearFields();
            }
            else {
                console.log(data.msg);
            }
        });
    };
    CustomersComponent.prototype.clearFields = function () {
        this.name = null;
        this.address = null;
        this.city = null;
        this.state = null;
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

module.exports = "<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h1>Allied Waterproofing</h1>\n    <p>Project Management Application</p>\n  </div>\n</div>\n\n<h2 class=\"page-header\">Current Jobs</h2>\n<ng-container *ngIf=\"currentJobsLength !=0; else noCurrentJobs\">\n  <!-- <h4>Click To View Details</h4> -->\n  <div class=\"panel panel-primary\" *ngFor=\"let currentJob of currentJobs; let i = index\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Job # {{currentJob.jobID}}</h3>\n    </div>\n    <div class=\"panel-body\">\n      <h4>Customer:</h4><p>{{currentJob.customerName}}</p>\n      <hr>\n      <h4>Budget:</h4>\n      <div class=\"progress progress-striped active\">\n        <div id=\"costProgress\" class=\"progress-bar progress-bar-info\" role=\"progressbar\" [attr.aria-valuenow]=\"jobCosts[i]\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"bidCosts[i]\" [ngStyle]=\"{'min-width': '2em', 'width': (jobCosts[i]/bidCosts[i])*100+ '%'}\">\n          {{jobCosts[i]/bidCosts[i] | percent:'1.0-0'}}\n        </div>\n      </div>\n      <hr>\n      <h4>Revenue Collected:</h4>\n      <div class=\"progress progress-striped active\">\n        <div id=\"revenueProgress\" class=\"progress-bar progress-bar-info\" role=\"progressbar\" [attr.aria-valuenow]=\"currentJob.jobRevenue\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"currentJob.bidPrice\" [ngStyle]=\"{'min-width': '2em', 'width': (currentJob.jobRevenue/currentJob.bidPrice)*100+ '%'}\">\n          {{currentJob.jobRevenue/currentJob.bidPrice | percent:'1.0-0'}}\n        </div>\n      </div>\n      <hr>\n      <button type=\"button\" class=\"btn btn-primary btn-lg\" [routerLink]=\"['/jobs/'+currentJob.jobID]\"><span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Open Job</button>\n    </div>\n  </div>\n  <!-- <ul class=\"list-group\" *ngFor=\"let currentJob of currentJobs; let i = index\" [routerLink]=\"['/jobs/'+currentJob.jobID]\">\n    <h3 class=\"page-header\">Job # {{currentJob.jobID}}</h3>\n    <h4>Click To View Details</h4>\n    <li class=\"list-group-item\"><b>Customer:</b> {{currentJob.customerName}}</li>\n    <li class=\"list-group-item\"><b>Budget:</b>\n      <div class=\"progress\">\n        <div id=\"costProgress\" class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"jobCosts[i]\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"bidCosts[i]\" [ngStyle]=\"{'min-width': '2em', 'width': (jobCosts[i]/bidCosts[i])*100+ '%'}\">\n          {{jobCosts[i]/bidCosts[i] | percent:'1.0-0'}}\n        </div>\n      </div>\n    </li>\n    <li class=\"list-group-item\"><b>Revenue Collected:</b>\n      <div class=\"progress\">\n        <div id=\"revenueProgress\" class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"currentJob.jobRevenue\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"currentJob.bidPrice\" [ngStyle]=\"{'min-width': '2em', 'width': (currentJob.jobRevenue/currentJob.bidPrice)*100+ '%'}\">\n          {{currentJob.jobRevenue/currentJob.bidPrice | percent:'1.0-0'}}\n        </div>\n      </div>\n    </li>\n  </ul> -->\n</ng-container>\n<ng-template #noCurrentJobs>\n  <h2 class=\"page-header\">No Current Jobs</h2>\n  <p>If this is incorrect, try refreshing the page.</p>\n</ng-template>"

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
        var _this = this;
        this.jobService.getCurrentJobs().subscribe(function (jobs) {
            _this.currentJobs = jobs.jobs;
            _this.currentJobsLength = jobs.jobs.length;
            jobs.jobs.forEach(function (currentJob) {
                _this.jobService.getCurrentJobMaterialsCost(currentJob.jobID).subscribe(function (cost) {
                    _this.jobCosts.push(cost[0].jobMaterialCost + currentJob.jobLabor);
                });
                _this.bidService.getCurrentBidMaterialsCost(currentJob.jobID).subscribe(function (cost) {
                    _this.bidCosts.push(cost[0].bidMaterialCost + currentJob.bidLabor);
                });
            });
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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>\n</div>\n\n<ng-container *ngIf=\"inquiriesLength!=0; else noInquiries\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">Inquiries</h2>\n    <h4>Click To View Details</h4>\n    <table *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" class=\"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>Status</th>\n          <th>Customer</th>\n          <th>Received Date</th>\n          <th>Accepted/Declined Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let inquiry of inquiries;\" id=\"{{inquiry.inquiryID}}\" [routerLink]=\"['/inquiries/'+inquiry.inquiryID]\">\n          <td>{{inquiry.inquiryID}}</td>\n          <td>{{inquiry.inquiryStatus}}</td>\n          <td>{{inquiry.customerName}}</td>\n          <td>{{inquiry.receivedDate | date: 'MM/dd/yyyy'}}</td>\n          <td>{{inquiry.endDate | date: 'MM/dd/yyyy'}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</ng-container>\n<ng-template #noInquiries>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">No Inquiries</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </div>\n</ng-template>\n  \n<!-- <ng-container *ngIf=\"pendingLength!=0 || acceptedLength!=0 || declinedLength!=0; else noInquiries\">\n  <ng-container *ngIf=\"pendingLength!=0; else noPendingInquiries\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">Pending Inquiries</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Received Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let pendingInquiry of pendingInquiries;\" [routerLink]=\"['/inquiries/'+pendingInquiry.inquiryID]\">\n            <td>{{pendingInquiry.inquiryID}}</td>\n            <td>{{pendingInquiry.receivedDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </ng-container>\n  <ng-template #noPendingInquiries>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">No Pending Inquiries</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n\n  <ng-container *ngIf=\"acceptedLength!=0; else noAcceptedInquiries\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">Accepted Inquiries</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Accepted Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let acceptedInquiry of acceptedInquiries;\" [routerLink]=\"['/inquiries/'+acceptedInquiry.inquiryID]\">\n            <td>{{acceptedInquiry.inquiryID}}</td>\n            <td>{{acceptedInquiry.endDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>  \n    </div>\n  </ng-container>\n  <ng-template #noAcceptedInquiries>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">No Accepted Inquiries</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n\n  <ng-container *ngIf=\"declinedLength!=0; else noDeclinedInquiries\">\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">Declined Inquiries</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Declined Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let declinedInquiry of declinedInquiries;\" [routerLink]=\"['/inquiries/'+declinedInquiry.inquiryID]\">\n            <td>{{declinedInquiry.inquiryID}}</td>\n            <td>{{declinedInquiry.endDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>  \n    </div>\n  </ng-container>\n  <ng-template #noDeclinedInquiries>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n      <h2 class=\"page-header\">No Declined Inquiries</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n</ng-container>\n<ng-template #noInquiries>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">No Inquiries</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </div>\n</ng-template> -->"

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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/inquiries']\">Go To Inquiries</button>\n</div>\n\n<h2 class=\"page-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">Inquiry #{{inquiry[0].inquiryID}}</h2>\n\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n  <ng-container *ngIf=\"inquiry; else noInquiry\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Inquiry Details</h3>\n      </div>\n      <div class=\"panel-body\">\n        <table class=\"table table-striped table-hover\">\n          <thead>\n            <tr>\n              <th>Received Date</th>\n              <th>Accepted/Declined Date</th>\n              <th>Description</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{inquiry[0].receivedDate | date: 'MM/dd/yyyy'}}</td>\n              <td>{{inquiry[0].endDate | date: 'MM/dd/yyyy'}}</td>\n              <td>{{inquiry[0].description}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <button *ngIf=\"status == 'PENDING'\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#create-bid-modal'>\n          <span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Create Bid</button>\n        <button class=\"btn btn-info\" data-toggle=\"modal\" href=\"#update-modal\">\n          <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> Update Inquiry</button>\n        <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-modal'>\n          <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete Inquiry</button>\n      </div>\n    </div>\n  </ng-container>\n  <ng-template #noInquiry>\n    <h2 class=\"page-header\">No Inquiries</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </ng-template>\n</div>\n\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Customer Details</h3>\n    </div>\n    <div class=\"panel-body\">\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Name</th>\n            <th>Address</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{inquiry[0].customerID}}</td>\n            <td>{{inquiry[0].customerName}}</td>\n            <td>{{inquiry[0].customerAddress}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/customers/'+inquiry[0].customerID]\">\n        <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Open Customer</button>\n    </div>\n  </div>\n</div>\n\n<!--                Delete Popup                -->\n<div class=\"modal fade\" id=\"delete-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this inquiry?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Update Popup                -->\n<div class=\"modal fade\" id=\"update-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update Inquiry</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onUpdate()\">\n          <div class=\"form-group\">\n            <label for=\"\">Description</label>\n            <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"Description\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"reset\" class=\"btn btn-danger\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create Bid Popup                -->\n<div class=\"modal fade\" id=\"create-bid-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Create Bid</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onCreate()\">\n          <div class=\"form-group\">\n            <label>Bid Price</label>\n            <input type=\"text\" [(ngModel)]=\"bidPrice\" name=\"bidPrice\" placeholder=\"Bid Price\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Labor Cost</label>\n            <input type=\"text\" [(ngModel)]=\"bidLabor\" name=\"bidLabor\" placeholder=\"Labor Cost\" class=\"form-control\" required>\n          </div>\n          <label>Materials Cost</label>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n              <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add Materials\n              <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\n                <li *ngFor=\"let material of materials; let i = index;\">\n                  <a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a>\n                </li>\n              </ng-container>\n              <ng-template #noMaterials>\n                <li>\n                  <a>No more materials</a>\n                </li>\n              </ng-template>\n            </ul>\n          </div>\n          <table class=\"table table-striped table-hover\">\n            <thead *ngIf=\"selectedMaterials[0] != null;\">\n              <tr>\n                <th>Name</th>\n                <th>Quantity</th>\n                <th>Per Unit Cost</th>\n                <th>Remove</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index\">\n                <td>{{selectedMaterial.materialName}}</td>\n                <td>\n                  <input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required>\n                </td>\n                <td>\n                  <input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\"\n                    required>\n                </td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">\n                    <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Create</button>\n          <button type=\"reset\" class=\"btn btn-danger\" (click)=\"onClear()\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/inquiry/inquiry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InquiryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_inquiry_service__ = __webpack_require__("../../../../../src/app/services/inquiry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_material_service__ = __webpack_require__("../../../../../src/app/services/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_bid_service__ = __webpack_require__("../../../../../src/app/services/bid.service.ts");
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
    function InquiryComponent(router, route, inquiryService, materialService, bidService) {
        this.router = router;
        this.route = route;
        this.inquiryService = inquiryService;
        this.materialService = materialService;
        this.bidService = bidService;
        this.selectedMaterials = [];
    }
    InquiryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.inquiryService.getInquiryById(this.id).subscribe(function (inquiry) {
            _this.inquiry = inquiry;
            _this.status = inquiry[0].inquiryStatus;
        });
        this.materialService.getAllMaterials().subscribe(function (materials) {
            _this.materials = materials.materials;
        });
    };
    InquiryComponent.prototype.onAddMaterial = function (material, id) {
        this.selectedMaterials.push(material);
        this.materials.splice(id, 1);
    };
    InquiryComponent.prototype.onRemoveMaterial = function (material, id) {
        this.selectedMaterials.splice(id, 1);
        this.materials.push(material);
    };
    InquiryComponent.prototype.onClear = function () {
        var _this = this;
        this.selectedMaterials.forEach(function (selectedMaterial) {
            _this.materials.push(selectedMaterial);
        });
        this.selectedMaterials = [];
        //this.ngOnInit();
    };
    InquiryComponent.prototype.onCreate = function () {
        var _this = this;
        var newBid = {
            inquiryID: this.id,
            bidLabor: this.bidLabor,
            bidPrice: this.bidPrice,
            createdDate: this.createdDate
        };
        var updatedInquiry = {
            inquiryID: this.id,
            inquiryStatus: "ACCEPTED",
            removeEndDate: false
        };
        this.bidService.createBid(newBid).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
            }
            else {
                console.log(data.msg);
            }
        });
        this.inquiryService.updateInquiryStatus(updatedInquiry).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
            }
            else {
                console.log(data.msg);
            }
        });
        this.selectedMaterials.forEach(function (selectedMaterial) {
            _this.bidService.createBidMaterial(selectedMaterial).subscribe(function (data) {
                if (data.success) {
                    console.log(data.msg);
                }
                else {
                    console.log(data.msg);
                }
            });
        });
        this.router.navigate(["/bids"]);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_inquiry_service__["a" /* InquiryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_inquiry_service__["a" /* InquiryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_material_service__["a" /* MaterialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_material_service__["a" /* MaterialService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_bid_service__["a" /* BidService */]) === "function" && _e || Object])
], InquiryComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/jobs']\">Go To Jobs</button>\n</div>\n<h2 class=\"page-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">Job #{{job[0].jobID}}</h2>\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Customer Details</h3>\n    </div>\n    <div class=\"panel-body\">\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Name</th>\n            <th>Address</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{job[0].customerID}}</td>\n            <td>{{job[0].customerName}}</td>\n            <td>{{job[0].customerAddress}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/customers/'+job[0].customerID]\">\n        <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Open Customer</button>\n    </div>\n  </div>\n</div>\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n  <ng-container *ngIf=\"job; else noJob\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Job Details</h3>\n      </div>\n      <div class=\"panel-body\">\n        <table class=\"table table-striped table-hover\">\n          <thead>\n            <tr>\n              <th>Revenue</th>\n              <th>Created Date</th>\n              <th>Completion Date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{job[0].jobRevenue | currency: 'USD':true}}</td>\n              <td>{{job[0].createdDate | date: 'MM/dd/yyyy'}}</td>\n              <td>{{job[0].endDate | date: 'MM/dd/yyyy'}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <h4 class=\"page-header\">Actual Costs</h4>\n        <label>Labor Cost</label>\n        <table class=\"table table-striped table-hover\">\n          <tbody>\n            <tr>\n              <td>{{job[0].jobLabor | currency: 'USD':true}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <label *ngIf=\"jobMaterials[0] != null;\">Materials Cost</label>\n        <table class=\"table table-striped table-hover\">\n          <thead *ngIf=\"jobMaterials[0] != null;\">\n            <tr>\n              <th>Material</th>\n              <th>Quantity</th>\n              <th>Per Unit Cost</th>\n              <th>Delete</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let jobMaterial of jobMaterials\">\n              <td>{{jobMaterial.materialName}}</td>\n              <td>{{jobMaterial.quantity}}</td>\n              <td>{{jobMaterial.perUnitCost | currency: 'USD':true}}</td>\n              <td>\n                <button class=\"btn btn-danger\" *ngIf=\"status == 'IN-PROGRESS'\" type=\"button\" (click)=\"onClickDeleteMaterial(jobMaterial.materialID)\"\n                  data-toggle=\"modal\" href='#delete-material-modal'>\n                  <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <label *ngIf=\"files.length != 0\">Job Files</label>\n        <table *ngIf=\"files.length != 0\" class=\"table table-striped table-hover\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Delete</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let file of files\">\n              <td>\n                <a target=\"_blank\" href=\"http://localhost:3000/api/uploads/jobs/{{id}}/{{file}}\">{{file}}</a>\n              </td>\n              <td>\n                <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" href='#delete-file-modal' (click)=\"onClickDeleteFile(file)\">\n                  <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <button *ngIf=\"status == 'IN-PROGRESS'\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#finish-job-modal'>\n          <span class=\"glyphicon glyphicon-check\" aria-hidden=\"true\"></span> Finish Job</button>\n        <!-- <button *ngIf=\"status == 'IN-PROGRESS'\" class=\"btn btn-info\" data-toggle=\"modal\" href='#update-job-modal'> -->\n        <button class=\"btn btn-info\" data-toggle=\"modal\" href='#update-job-modal'>\n          <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span> Update Job</button>\n        <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-job-modal'>\n          <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span> Delete Job</button>\n      </div>\n    </div>\n  </ng-container>\n  <ng-template #noJob>\n    <h2 class=\"page-header\">No Jobs</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </ng-template>\n</div>\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Bid Details</h3>\n    </div>\n    <div class=\"panel-body\">\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>Bid Price</th>\n            <th>Created Date</th>\n            <th>Accepted Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>{{job[0].bidPrice | currency: 'USD':true}}</td>\n            <td>{{job[0].bidCreatedDate | date: 'MM/dd/yyyy'}}</td>\n            <td>{{job[0].bidEndDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <h4 class=\"page-header\">Estimated Costs</h4>\n      <label>Labor Cost</label>\n      <table class=\"table table-striped table-hover\">\n        <tbody>\n          <tr>\n            <td>{{job[0].bidLabor | currency: 'USD':true}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <label *ngIf=\"bidMaterials[0] != null;\">Materials Cost</label>\n      <table class=\"table table-striped table-hover\">\n        <thead *ngIf=\"bidMaterials[0] != null;\">\n          <tr>\n            <th>Material</th>\n            <th>Quantity</th>\n            <th>Per Unit Cost</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let bidMaterial of bidMaterials\">\n            <td>{{bidMaterial.materialName}}</td>\n            <td>{{bidMaterial.quantity}}</td>\n            <td>{{bidMaterial.perUnitCost | currency: 'USD':true}}</td>\n          </tr>\n        </tbody>\n      </table>\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/bids/'+job[0].bidID]\">\n        <span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Open Bid</button>\n    </div>\n  </div>\n</div>\n\n<!--                Delete Job Popup                -->\n<div class=\"modal fade\" id=\"delete-job-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this job?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteJob()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete Material Popup                -->\n<div class=\"modal fade\" id=\"delete-material-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this material?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteMaterial()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Finish Job Popup                -->\n<div class=\"modal fade\" id=\"finish-job-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to finalize this job?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onFinish()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Update Job Popup                -->\n<div class=\"modal fade\" id=\"update-job-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update Job</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onUpdate()\" style=\"padding-bottom: 20px;\">\n          <div class=\"form-group\">\n            <label>Add Revenue</label>\n            <!-- <span class=\"input-group-addon\">\n              <input type=\"checkbox\" aria-label=\"...\">\n            </span> -->\n            <input type=\"text\" [(ngModel)]=\"jobRevenue\" name=\"jobRevenue\" placeholder=\"Revenue\" class=\"form-control\" required>\n          </div>\n          <div class=\"form-group\">\n            <label>Add Labor Cost</label>\n            <input type=\"text\" [(ngModel)]=\"jobLabor\" name=\"jobLabor\" placeholder=\"Labor Cost\" class=\"form-control\" required>\n          </div>\n          <label>Add Materials</label>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n              <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span> Add Materials\n              <span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\n                <li *ngFor=\"let material of materials; let i = index;\">\n                  <a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a>\n                </li>\n              </ng-container>\n              <ng-template #noMaterials>\n                <li>\n                  <a>No more materials</a>\n                </li>\n              </ng-template>\n            </ul>\n          </div>\n          <table class=\"table table-striped table-hover\">\n            <thead *ngIf=\"selectedMaterials[0] != null;\">\n              <tr>\n                <th>Name</th>\n                <th>Quantity</th>\n                <th>Per Unit Cost</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index;\">\n                <td>{{selectedMaterial.materialName}}</td>\n                <td>\n                  <input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required>\n                </td>\n                <td>\n                  <input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\"\n                    required>\n                </td>\n                <td>\n                  <button type=\"button\" class=\"close\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">&times;</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <label>Upload Files</label>\n          <div class=\"form-group\">\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"fileInput.click()\">\n              <span class=\"glyphicon glyphicon-upload\" aria-hidden=\"true\"></span> Browse Files</button>\n            <input name=\"file\" type=\"file\" style=\"display: none;\" #fileInput ng2FileSelect [uploader]=\"uploader\" />\n            <!-- <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n              <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n            </button> -->\n            <table *ngIf=\"uploader.queue.length\" class=\"table table-striped table-hover\">\n              <thead>\n                <tr>\n                  <th>File</th>\n                  <th>Remove</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                  <td>{{item._file.name}}</td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">\n                      <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"reset\" class=\"btn btn-danger\" (click)=\"onClear(); uploader.clearQueue()\">\n            <span class=\"glyphicon glyphicon-repeat\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-info\" data-dismiss=\"modal\">\n            <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete File Popup                -->\n<div class=\"modal fade\" id=\"delete-file-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this file?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteFile()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// declare var $;
var JobComponent = (function () {
    //readyItems: any[] = [];
    function JobComponent(router, route, jobService, materialService, bidService, authService) {
        this.router = router;
        this.route = route;
        this.jobService = jobService;
        this.materialService = materialService;
        this.bidService = bidService;
        this.authService = authService;
        this.filesUrls = [];
        this.jobLabor = null;
        this.jobRevenue = null;
        this.jobStatus = null;
        this.createdDate = null;
        this.endDate = null;
        this.selectedMaterials = [];
    }
    JobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.setupFileUploader();
        this.jobService.getJobById(this.id).subscribe(function (job) {
            _this.job = job;
            _this.status = job[0].jobStatus;
            _this.bidService.getBidMaterialsById(job[0].bidID).subscribe(function (bidMaterials) {
                _this.bidMaterials = bidMaterials;
            });
        });
        this.jobService.getJobMaterialsById(this.id).subscribe(function (jobMaterials) {
            _this.jobMaterials = jobMaterials;
            _this.materialService.getAllMaterials().subscribe(function (materials) {
                _this.materials = materials.materials;
                for (var i = 0; i < _this.materials.length; i++) {
                    for (var k = 0; k < _this.jobMaterials.length; k++) {
                        if (_this.materials[i].materialID == _this.jobMaterials[k].materialID) {
                            _this.materials.splice(i, 1);
                        }
                    }
                }
            });
        });
        this.jobService.getJobFilesByID(this.id).subscribe(function (files) {
            _this.files = files.files;
            // for(let i = 0; i < this.files.length; i++){
            //   this.filesUrls.push(`http://localhost:3000/uploads/jobs/${this.id}/${this.files[i]}`);
            // }
        });
        // console.log(this.filesUrls);
    };
    JobComponent.prototype.setupFileUploader = function () {
        this.url = "http://localhost:3000/api/jobs/" + this.id + "/upload";
        this.authService.loadToken();
        var headers = [{ name: 'Authorization', value: this.authService.authToken }, { name: 'Content-Type', value: 'application/json' }];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploader"]({ url: this.url });
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
    JobComponent.prototype.onAddMaterial = function (material, id) {
        this.selectedMaterials.push(material);
        this.materials.splice(id, 1);
    };
    JobComponent.prototype.onRemoveMaterial = function (material, id) {
        this.selectedMaterials.splice(id, 1);
        this.materials.push(material);
        //this.ngOnInit();
    };
    JobComponent.prototype.onClear = function () {
        var _this = this;
        this.selectedMaterials.forEach(function (selectedMaterial) {
            _this.materials.push(selectedMaterial);
        });
        this.selectedMaterials = [];
    };
    JobComponent.prototype.onUpdate = function () {
        var _this = this;
        var updatedJob = {
            jobID: this.id,
            jobLabor: Number(this.jobLabor) + Number(this.job[0].jobLabor),
            jobRevenue: Number(this.jobRevenue) + Number(this.job[0].jobRevenue),
            jobStatus: this.jobStatus,
            createdDate: this.createdDate,
            endDate: this.endDate
        };
        //console.log(updatedJob);
        this.selectedMaterials.forEach(function (selectedMaterial) {
            _this.jobService.createJobMaterial(_this.id, selectedMaterial).subscribe(function (data) {
                if (data.success) {
                    console.log(data.msg);
                }
                else {
                    console.log(data.msg);
                }
            });
        });
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
    JobComponent.prototype.onClickDeleteMaterial = function (id) {
        this.materialID = id;
    };
    JobComponent.prototype.onDeleteMaterial = function () {
        var _this = this;
        var jobMaterial = {
            materialID: this.materialID,
            jobID: this.id
        };
        this.jobService.deleteJobMaterial(jobMaterial).subscribe(function (data) {
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
                _this.router.navigate(['/jobs']);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_material_service__["a" /* MaterialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_material_service__["a" /* MaterialService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_bid_service__["a" /* BidService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _f || Object])
], JobComponent);

var _a, _b, _c, _d, _e, _f;
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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>\n</div>\n\n<ng-container *ngIf=\"jobsLength!=0; else noJobs\">\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">Jobs</h2>\n    <h4>Click To View Details</h4>\n    <table *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" class=\"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>Status</th>\n          <th>Customer</th>\n          <th>Created Date</th>\n          <th>Completion Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let job of jobs;\" id=\"{{job.jobID}}\" [routerLink]=\"['/jobs/'+job.jobID]\">\n          <td>{{job.jobID}}</td>\n          <td>{{job.jobStatus}}</td>\n          <td>{{job.customerName}}</td>\n          <td>{{job.createdDate | date: 'MM/dd/yyyy'}}</td>\n          <td>{{job.endDate | date: 'MM/dd/yyyy'}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</ng-container>\n<ng-template #noJobs>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">No Jobs</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </div>\n</ng-template>\n\n<!-- <ng-container *ngIf=\"inProgressLength!=0 || completedLength!=0; else noJobs\">\n  <ng-container *ngIf=\"inProgressLength!=0; else noInProgressJobs\">\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <h2 class=\"page-header\">In Progress Jobs</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Revenue</th>\n            <th>Created Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let inProgressJob of inProgressJobs;\" [routerLink]=\"['/jobs/'+inProgressJob.jobID]\">\n            <td>{{inProgressJob.jobID}}</td>\n            <td>{{inProgressJob.jobRevenue}}</td>\n            <td>{{inProgressJob.createdDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>  \n    </div>\n  </ng-container>\n  <ng-template #noInProgressJobs>\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <h2 class=\"page-header\">No Jobs In Progress</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n  \n  <ng-container *ngIf=\"completedLength!=0; else noCompletedJobs\">\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <h2 class=\"page-header\">Completed Jobs</h2>\n      <h4>Click To View Details</h4>\n      <table class=\"table table-striped table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Labor Cost</th>\n            <th>Material Cost</th>\n            <th>Income</th>\n            <th>Created Date</th>\n            <th>Completed Date</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let completedJob of completedJobs;\" [routerLink]=\"['/jobs/'+completedJob.jobID]\">\n            <td>{{completedJob.jobID}}</td>\n            <td>{{completedJob.jobLabor}}</td>\n            <td>Net Income</td>\n            <td>{{completedJob.endDate | date: 'MM/dd/yyyy'}}</td>\n          </tr>\n        </tbody>\n      </table>  \n    </div>\n  </ng-container>\n  <ng-template #noCompletedJobs>\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n      <h2 class=\"page-header\">No Completed Jobs</h2>\n      <p>If this is incorrect, try refreshing the page.</p>\n    </div>\n  </ng-template>\n</ng-container>\n<ng-template #noJobs>\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n    <h2 class=\"page-header\">No Jobs</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </div>\n</ng-template> -->"

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

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLogin()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" class=\"form-control\" required>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" required>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></span> Login</button>\n  <button type=\"reset\" class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-repeat\" aria-hidden=\"true\"></span> Clear</button>\n</form>"

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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>\n</div>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n  <ng-container *ngIf=\"length != 0; else noMaterials\">\n    <h2 class=\"page-header\">Materials</h2>\n    <!-- *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" -->\n    <table class=\"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>Name</th>\n          <th>Update</th>\n          <th>Delete</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let material of materials\">\n          <td>{{material.materialID}}</td>\n          <td>{{material.materialName}}</td>\n          <td>\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClickUpdate(material.materialID)\" data-toggle=\"modal\" href='#update-modal'>\n              <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n            </button>\n          </td>\n          <td>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteClick(material.materialID)\" data-toggle=\"modal\" href='#delete-modal'>\n              <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n            </button>\n          </td>\n          <!--<button class=\"btn btn-danger\" (click)=\"onDeleteClick(material.materialID)\" data-toggle=\"modal\" href='#delete-modal'>Delete</button>-->\n        </tr>\n      </tbody>\n    </table>\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#create-modal'>\n      <span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\"></span> Create New</button>\n  </ng-container>\n  <ng-template #noMaterials>\n    <h2 class=\"page-header\">No Materials</h2>\n    <p>If this is incorrect, try refreshing the page.</p>\n  </ng-template>\n</div>\n\n<!--                Update Popup                -->\n<div class=\"modal fade\" id=\"update-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Update Material</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onUpdate()\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" required>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Update</button>\n          <button type=\"reset\" class=\"btn btn-danger\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Delete Popup                -->\n<div class=\"modal fade\" id=\"delete-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Warning</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete this material?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete()\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--                Create Popup                -->\n<div class=\"modal fade\" id=\"create-modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Create A New Material</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form (submit)=\"onCreate()\">\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" required>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">\n            <span class=\"glyphicon glyphicon-floppy-saved\" aria-hidden=\"true\"></span> Create</button>\n          <button type=\"reset\" class=\"btn btn-danger\">\n            <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span> Clear</button>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\n          <span class=\"glyphicon glyphicon-remove-circle\" aria-hidden=\"true\"></span> Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

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
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.displayTable = false;
    }
    MaterialsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.materialService.getAllMaterials().subscribe(function (materials) {
            _this.materials = materials.materials;
            _this.length = _this.materials.length;
            // this.setupDataTable();
        });
    };
    MaterialsComponent.prototype.setupDataTable = function () {
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
        this.dtTrigger.next();
        this.displayTable = true;
    };
    MaterialsComponent.prototype.onClickUpdate = function (materialID) {
        this.tempID = materialID;
    };
    MaterialsComponent.prototype.onUpdate = function () {
        var _this = this;
        var updateMaterial = {
            materialID: this.tempID,
            materialName: this.name
        };
        this.materialService.updateMaterial(updateMaterial).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
            }
            else {
                console.log(data.msg);
            }
        });
    };
    MaterialsComponent.prototype.onCreate = function () {
        var _this = this;
        var newMaterial = {
            materialName: this.name
        };
        this.materialService.createMaterial(newMaterial).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
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
                _this.ngOnInit();
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

module.exports = "<!-- https://stackoverflow.com/questions/38209713/how-to-make-a-responsive-nav-bar-using-angular-material-2 -->\n<!--<md-sidenav-containe fullscreen>-->\n<!--<md-sidenav-container>\n    <md-toolbar color=\"primary\">\n        <button md-button [routerLink]=\"['/']\"><md-icon>home</md-icon>Allied Waterproofing</button>\n        <span class=\"fill-remaining-space\"></span>\n        <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\n            <button md-button [routerLink]=\"['/customers']\">Customers</button>\n            <button md-button [routerLink]=\"['/']\">Something</button>\n        </div>\n        <button md-button [md-menu-trigger-for]=\"menu\" fxHide=\"false\" fxHide.gt-sm><md-icon>menu</md-icon></button>\n    </md-toolbar>\n    <md-menu x-position=\"before\" #menu=\"mdMenu\">\n        <button md-menu-item [routerLink]=\"['/customers']\">Customers</button>\n        <button md-menu-item [routerLink]=\"['/']\">Something</button>\n    </md-menu>\n</md-sidenav-container>-->\n\n<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\">Allied Waterproofing</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n        <ul class=\"nav navbar-nav\">\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/home']\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span> Home</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/customers']\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Customers</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/inquiries']\"><span class=\"glyphicon glyphicon-inbox\" aria-hidden=\"true\"></span> Inquiries</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/bids']\"><span class=\"glyphicon glyphicon-file\" aria-hidden=\"true\"></span> Bids</a></li>\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/jobs']\"><span class=\"glyphicon glyphicon-briefcase\" aria-hidden=\"true\"></span> Jobs</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/materials']\"><span class=\"glyphicon glyphicon-th-list\" aria-hidden=\"true\"></span> Edit Materials</a></li>\n            <!-- <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/register']\">Register User</a></li> -->\n            <li><a *ngIf=\"authService.loggedIn()\" data-toggle=\"modal\" href='#logout-modal'><span class=\"glyphicon glyphicon-log-out\" aria-hidden=\"true\"></span> Logout</a></li>\n        </ul>\n    </div><!-- /.navbar-collapse -->\n</nav>\n\n\n<!--                Logout Popup                -->\n<div class=\"modal fade\" id=\"logout-modal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                <h4 class=\"modal-title\">Warning</h4>\n            </div>\n            <div class=\"modal-body\">\n                <p>Are you sure you want to logout?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onLogout()\">Yes</button>\n            </div>\n        </div>\n    </div>\n</div>"

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
    // localHttp:String = 'api';
    function AuthService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.cookieStorage = new __WEBPACK_IMPORTED_MODULE_5_cookie_storage__["CookieStorage"]();
        this.localHttp = 'http://localhost:3000/api';
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
    // localHttp:String = 'api';
    function BidService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.localHttp = 'http://localhost:3000/api';
    }
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
    BidService.prototype.getBidMaterialsById = function (bidId) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/bids/" + bidId + "/bid-materials", { headers: headers }).map(function (response) { return response.json(); });
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
    BidService.prototype.updateBidStatus = function (updatedBid) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/bids/update-status", JSON.stringify(updatedBid), { headers: headers }).map(function (response) { return response.json(); });
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
        return this.http.post(this.localHttp + "/bids/delete/bid-material", JSON.stringify(bidMaterial), { headers: headers }).map(function (response) { return response.json(); });
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
    // localHttp:String = 'api';
    function CustomerService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.localHttp = 'http://localhost:3000/api/';
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
    // localHttp:String = 'api';
    function InquiryService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.localHttp = 'http://localhost:3000/api';
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
    // localHttp:String = 'api';
    function JobService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.localHttp = 'http://localhost:3000/api';
    }
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
    JobService.prototype.getJobFilesByID = function (id) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/jobs/" + id + "/files", { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.getCurrentJobs = function () {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/jobs/all/current", { headers: headers }).map(function (response) { return response.json(); });
    };
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
    JobService.prototype.createJobMaterial = function (id, newJobMaterial) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/" + id + "/new/job-material", JSON.stringify(newJobMaterial), { headers: headers }).map(function (response) { return response.json(); });
    };
    JobService.prototype.deleteJobMaterial = function (jobMaterial) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/jobs/delete/job-material", JSON.stringify(jobMaterial), { headers: headers }).map(function (response) { return response.json(); });
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
    // localHttp:String = 'api';
    function MaterialService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.localHttp = 'http://localhost:3000/api';
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