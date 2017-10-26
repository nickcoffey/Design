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

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_customers_customers_component__ = __webpack_require__("../../../../../src/app/components/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_inquiries_inquiries_component__ = __webpack_require__("../../../../../src/app/components/inquiries/inquiries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_bids_bids_component__ = __webpack_require__("../../../../../src/app/components/bids/bids.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_jobs_jobs_component__ = __webpack_require__("../../../../../src/app/components/jobs/jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_customer_customer_component__ = __webpack_require__("../../../../../src/app/components/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_create_bid_create_bid_component__ = __webpack_require__("../../../../../src/app/components/create-bid/create-bid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_materials_materials_component__ = __webpack_require__("../../../../../src/app/components/materials/materials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_bid_bid_component__ = __webpack_require__("../../../../../src/app/components/bid/bid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_inquiry_inquiry_component__ = __webpack_require__("../../../../../src/app/components/inquiry/inquiry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_job_job_component__ = __webpack_require__("../../../../../src/app/components/job/job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_customer_service__ = __webpack_require__("../../../../../src/app/services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_inquiry_service__ = __webpack_require__("../../../../../src/app/services/inquiry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_bid_service__ = __webpack_require__("../../../../../src/app/services/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_material_service__ = __webpack_require__("../../../../../src/app/services/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { DataTableModule } from 'angular-4-data-table';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MdSidenavModule, MdToolbarModule, MdIconModule, MdButtonModule, MdMenuModule } from '@angular/material';
//import { FlexLayoutModule } from '@angular/flex-layout';






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'customers', component: __WEBPACK_IMPORTED_MODULE_9__components_customers_customers_component__["a" /* CustomersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'customers/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_customer_customer_component__["a" /* CustomerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'inquiries', component: __WEBPACK_IMPORTED_MODULE_12__components_inquiries_inquiries_component__["a" /* InquiriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'bids', component: __WEBPACK_IMPORTED_MODULE_13__components_bids_bids_component__["a" /* BidsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'jobs', component: __WEBPACK_IMPORTED_MODULE_14__components_jobs_jobs_component__["a" /* JobsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'create-bid/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_create_bid_create_bid_component__["a" /* CreateBidComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'materials', component: __WEBPACK_IMPORTED_MODULE_17__components_materials_materials_component__["a" /* MaterialsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'bids/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_bid_bid_component__["a" /* BidComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'inquiries/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_inquiry_inquiry_component__["a" /* InquiryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'jobs/:id', component: __WEBPACK_IMPORTED_MODULE_20__components_job_job_component__["a" /* JobComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_customers_customers_component__["a" /* CustomersComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_inquiries_inquiries_component__["a" /* InquiriesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_bids_bids_component__["a" /* BidsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_jobs_jobs_component__["a" /* JobsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_create_bid_create_bid_component__["a" /* CreateBidComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_materials_materials_component__["a" /* MaterialsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_bid_bid_component__["a" /* BidComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_inquiry_inquiry_component__["a" /* InquiryComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_job_job_component__["a" /* JobComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_datatables__["a" /* DataTablesModule */]
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
            __WEBPACK_IMPORTED_MODULE_21__services_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_22__services_inquiry_service__["a" /* InquiryService */],
            __WEBPACK_IMPORTED_MODULE_23__services_bid_service__["a" /* BidService */],
            __WEBPACK_IMPORTED_MODULE_24__services_job_service__["a" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_25__services_material_service__["a" /* MaterialService */],
            __WEBPACK_IMPORTED_MODULE_26__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_27__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/bids']\">Go Back</button>  \r\n</div>\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n  <ng-container *ngIf=\"bid; else noBid\">\r\n    <h2 class=\"page-header\">Bid #{{bid[0].bidID}}</h2>\r\n    <h4>Details</h4>\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>Price</th>\r\n          <th>Created Date</th>\r\n          <th>Accepted/Declined Date</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>{{bid[0].bidPrice | currency: 'USD':true}}</td>\r\n          <td>{{bid[0].createdDate | date: 'MM/dd/yyyy'}}</td>\r\n          <td>{{bid[0].endDate | date: 'MM/dd/yyyy'}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <h4>Costs</h4>\r\n    <label>Labor Cost</label>\r\n    <table class=\"table table-striped table-hover\">\r\n      <tbody>\r\n        <tr>\r\n          <td>{{bid[0].bidLabor | currency: 'USD':true}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <label *ngIf=\"bidMaterials[0] != null;\">Materials Cost</label>\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead *ngIf=\"bidMaterials[0] != null;\">\r\n        <tr>\r\n          <th>Material</th>\r\n          <th>Quantity</th>\r\n          <th>Per Unit Cost</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let bidMaterial of bidMaterials\">\r\n          <td>{{bidMaterial.materialName}}</td>\r\n          <td>{{bidMaterial.quantity}}</td>\r\n          <td>{{bidMaterial.perUnitCost | currency: 'USD':true}}</td>\r\n          <td><button type=\"button\" class=\"close\" data-toggle=\"modal\" href='#delete-material-modal'>&times;</button></td>  \r\n          <!--                Delete Bid Popup                -->\r\n          <div class=\"modal fade\" id=\"delete-material-modal\">\r\n            <div class=\"modal-dialog\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                  <h4 class=\"modal-title\">Warning</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <p>Are you sure you want to delete this material from the current bid?</p>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n                  <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteBidMaterial(bidMaterial.materialID, bidMaterial.bidID)\">Yes</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </ng-container>\r\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onCreate()\">Create Job</button>\r\n  <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-bid-modal'>Delete Bid</button>\r\n  <ng-template #noBid>\r\n    <h2 class=\"page-header\">No Bids</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </ng-template>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n  <h2 class=\"page-header\">Update Bid</h2>\r\n  <form (submit)=\"onUpdate()\">\r\n    <div class=\"form-group\">\r\n      <label>Change Bid Price</label>\r\n      <input type=\"text\" [(ngModel)]=\"bidPrice\" name=\"bidPrice\" placeholder=\"Bid Price\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Change Labor Cost</label>\r\n      <input type=\"text\" [(ngModel)]=\"bidLabor\" name=\"laborCost\" placeholder=\"Labor Cost\" class=\"form-control\" required>\r\n    </div>\r\n    <label>Add Materials</label>\r\n    <div class=\"dropdown\">\r\n      <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Materials<span class=\"caret\"></span></button>\r\n      <ul class=\"dropdown-menu\">\r\n        <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\r\n          <li *ngFor=\"let material of materials; let i = index\"><a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a></li>\r\n        </ng-container>\r\n        <ng-template #noMaterials>\r\n          <li><a>No more materials</a></li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead *ngIf=\"selectedMaterials[0] != null;\">\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Quantity</th>\r\n          <th>Per Unit Cost</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index;\">\r\n          <td>{{selectedMaterial.materialName}}</td>\r\n          <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required></td>\r\n          <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\" required></td>\r\n          <td><button type=\"button\" class=\"close\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">&times;</button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Update</button>\r\n    <button type=\"reset\" class=\"btn btn-danger\" (click)=\"onClear()\">Clear</button>\r\n  </form>  \r\n</div>\r\n\r\n<!--<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n  <h2 class=\"page-header\">Create A New Job</h2>\r\n  <form (submit)=\"onCreate()\">\r\n    <div class=\"form-group\">\r\n      <label>Created Date</label>\r\n      <input type=\"text\" [(ngModel)]=\"createdDate\" name=\"createdDate\" placeholder=\"YYYY-MM-DD\" class=\"form-control\" required>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Create</button>\r\n    <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\r\n  </form>  \r\n</div>-->\r\n\r\n<!--                Delete Bid Popup                -->\r\n<div class=\"modal fade\" id=\"delete-bid-modal\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n              <h4 class=\"modal-title\">Warning</h4>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure you want to delete this bid?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete()\">Yes</button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

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
        this.selectedMaterials = [];
        this.ngOnInit();
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

module.exports = "<!--<button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>\r\n<ng-container *ngIf=\"bids; else noBids\">\r\n    <h2 class=\"page-header\">Bids</h2>\r\n    <div class=\"panel-group\" id=\"accordion\">\r\n      <div class=\"panel panel-default\" *ngFor=\"let bid of bids\">\r\n        <div class=\"panel-heading\">\r\n          <h4 class=\"panel-title\">\r\n            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#{{bid.bidID + '-details'}}\">Bid ID: {{bid.bidID}}</a>\r\n          </h4>\r\n        </div>\r\n        <div attr.id=\"{{bid.bidID + '-details'}}\" class=\"panel-collapse collapse\">\r\n          <div class=\"panel-body\">\r\n            <li class=\"list-group-item\"><b>Estimated Cost:</b> ${{bid.bidCost}}</li>\r\n            <li class=\"list-group-item\"><b>Bid Price:</b> ${{bid.bidPrice}}</li>\r\n            <li class=\"list-group-item\"><b>Status:</b> {{bid.bidStatus}}</li><br>\r\n            <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/home']\">Create Job</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" [routerLink]=\"['/home']\">Edit</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</ng-container>\r\n<ng-template #noBids>\r\n  <h2 class=\"page-header\">Loading...</h2>\r\n  <p>Try refreshing the page if there is a significant delay.</p>\r\n</ng-template>-->\r\n\r\n\r\n\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>\r\n</div>\r\n  \r\n<ng-container *ngIf=\"bidsLength!=0; else noBids\">\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">Bids</h2>\r\n    <h4>Click To View Details</h4>\r\n    <table *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" class=\"table table-striped table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Status</th>\r\n          <!-- <th>Price</th> -->\r\n          <th>Customer</th>\r\n          <th>Created Date</th>\r\n          <th>Accepted/Declined Date</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let bid of bids;\" [routerLink]=\"['/bids/'+bid.bidID]\">\r\n          <td>{{bid.bidID}}</td>\r\n          <td>{{bid.bidStatus}}</td>\r\n          <!-- <td>{{bid.bidPrice | currency: 'USD':true}}</td> -->\r\n          <td>{{bid.customerName}}</td>\r\n          <td>{{bid.createdDate | date: 'MM/dd/yyyy'}}</td>\r\n          <td>{{bid.endDate | date: 'MM/dd/yyyy'}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ng-container>\r\n<ng-template #noBids>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">No Bids</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- <ng-container *ngIf=\"pendingLength!=0 || acceptedLength!=0 || declinedLength!=0; else noBids\">\r\n  <ng-container *ngIf=\"pendingLength!=0; else noPendingBids\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">Pending Bids</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Price</th>\r\n            <th>Created Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let pendingBid of pendingBids;\" [routerLink]=\"['/bids/'+pendingBid.bidID]\">\r\n            <td>{{pendingBid.bidID}}</td>\r\n            <td>{{pendingBid.bidPrice}}</td>\r\n            <td>{{pendingBid.createdDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>  \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noPendingBids>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">No Pending Bids</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n  \r\n  <ng-container *ngIf=\"acceptedLength!=0; else noAcceptedBids\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">Accepted Bids</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Price</th>\r\n            <th>Accepted Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let acceptedBid of acceptedBids;\" [routerLink]=\"['/bids/'+acceptedBid.bidID]\">\r\n            <td>{{acceptedBid.bidID}}</td>\r\n            <td>{{acceptedBid.bidPrice}}</td>\r\n            <td>{{acceptedBid.endDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>  \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noAcceptedBids>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">No Accepted Bids</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n  \r\n  <ng-container *ngIf=\"declinedLength!=0; else noDeclinedBids\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">Declined Bids</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Price</th>\r\n            <th>Declined Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let declinedBid of declinedBids;\" [routerLink]=\"['/bids/'+declinedBid.bidID]\">\r\n            <td>{{declinedBid.bidID}}</td>\r\n            <td>{{declinedBid.bidPrice}}</td>\r\n            <td>{{declinedBid.endDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table> \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noDeclinedBids>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">No Declined Bids</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n</ng-container>\r\n<ng-template #noBids>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">No Bids</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </div>\r\n</ng-template> -->"

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
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
        this.bidService.getAllBids().subscribe(function (bids) {
            _this.bids = bids.bids;
            _this.bidsLength = bids.bids.length;
            //console.log(this.bids);
            _this.pendingBids = bids.pendingBids;
            _this.pendingLength = bids.pendingBids.length;
            //console.log('Pending '+this.pendingLength);
            _this.acceptedBids = bids.acceptedBids;
            _this.acceptedLength = bids.acceptedBids.length;
            //console.log('Accepted '+this.acceptedLength);
            _this.declinedBids = bids.declinedBids;
            _this.declinedLength = bids.declinedBids.length;
            //console.log('Declined '+this.declinedLength);
            _this.dtTrigger.next();
            _this.displayTable = true;
        });
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/customers']\">Go Back</button>  \r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n  <ng-container *ngIf=\"customer; else noCustomer\">\r\n    <h2 class=\"page-header\">{{customer[0].customerName}}</h2>\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>Address</th>\r\n          <th>Email</th>\r\n          <th>Phone</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>{{customer[0].address}}</td>\r\n          <td>{{customer[0].email}}</td>\r\n          <td>{{customer[0].phone}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </ng-container>\r\n  <button class=\"btn btn-primary\" href=\"#updateCustomer\" data-toggle=\"collapse\">Update Customer</button>\r\n  <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-modal'>Delete Customer</button>\r\n  <div id=\"updateCustomer\" class=\"collapse\">\r\n    <form (submit)=\"onUpdate()\">\r\n      <h2 class=\"page-header\">Update Customer</h2>\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Address</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"address\" name=\"address\" placeholder=\"Address\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Email</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Phone</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Phone\" />\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary\">Update</button>\r\n      <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\r\n    </form>   \r\n  </div>\r\n  <ng-template #noCustomer>\r\n    <h2 class=\"page-header\">No Customers</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </ng-template>\r\n</div>\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n  <h2 class=\"page-header\">Create A New Inquiry</h2>\r\n  <form (submit)=\"onCreate()\">\r\n    <!--<div class=\"form-group\">\r\n      <label>Received Date</label>\r\n      <input type=\"text\" [(ngModel)]=\"receivedDate\" name=\"receivedDate\" placeholder=\"YYYY-MM-DD\" class=\"form-control\" required>\r\n    </div>-->\r\n    <div class=\"form-group\">\r\n      <label>Description</label>\r\n      <textarea type=\"text\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"Description\" class=\"form-control\" required></textarea>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Create</button>\r\n    <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\r\n  </form>  \r\n</div>\r\n\r\n<!--                Delete Popup                -->\r\n<div class=\"modal fade\" id=\"delete-modal\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n              <h4 class=\"modal-title\">Warning</h4>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure you want to delete this user?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete()\">Yes</button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>"

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
    CustomerComponent.prototype.onDelete = function () {
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
    CustomerComponent.prototype.onUpdate = function () {
        var updatedCustomer = {
            customerID: this.id,
            address: this.address,
            email: this.email,
            phone: this.phone
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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>  \r\n</div>\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n  <ng-container *ngIf=\"customers; else noCustomers\">\r\n    <h2 class=\"page-header\">Customers</h2>\r\n    <h4>Click To View Details</h4>\r\n    <table *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" class=\"table table-striped table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Name</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let customer of customers;\" [routerLink]=\"['/customers/'+customer.customerID]\">\r\n          <td>{{customer.customerID}}</td>\r\n          <td>{{customer.customerName}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </ng-container>\r\n  <ng-template #noCustomers>\r\n    <h2 class=\"page-header\">No Customers</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </ng-template>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n  <h2 class=\"page-header\">Create A New Customer</h2>\r\n  <form (submit)=\"onCreate()\">\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Email</label>\r\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Address</label>\r\n      <input type=\"text\" [(ngModel)]=\"address\" name=\"address\" placeholder=\"Address\" class=\"form-control\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Phone</label>\r\n      <input type=\"text\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Phone\" class=\"form-control\" required>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Create</button>\r\n    <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\r\n  </form>\r\n</div>"

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
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
        this.customerService.getAllCustomers().subscribe(function (customers) {
            _this.customers = customers.customers;
            _this.dtTrigger.next();
            _this.displayTable = true;
        });
    };
    CustomersComponent.prototype.onCreate = function () {
        var _this = this;
        var newCustomer = {
            customerName: this.name,
            email: this.email,
            address: this.address,
            phone: this.phone
        };
        this.customerService.createCustomer(newCustomer).subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.ngOnInit();
                _this.name = null;
                _this.email = null;
                _this.address = null;
                _this.phone = null;
            }
            else {
                console.log(data.msg);
            }
        });
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <h1>Allied Waterproofing</h1>\r\n    <p>Project Management Application</p>\r\n    <p>\r\n      <!--<a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/customers']\">View Customers</a>-->\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<h2 class=\"page-header\">Current Jobs</h2>\r\n<ng-container *ngIf=\"currentJobsLength !=0; else noCurrentJobs\">\r\n  <ul class=\"list-group\" *ngFor=\"let currentJob of currentJobs; let i = index\" [routerLink]=\"['/jobs/'+currentJob.jobID]\">\r\n    <h3 class=\"page-header\">Job # {{currentJob.jobID}}</h3>\r\n    <h4>Click To View Details</h4>\r\n    <li class=\"list-group-item\"><b>Customer:</b> {{currentJob.customerName}}</li>\r\n    <li class=\"list-group-item\"><b>Budget:</b>\r\n      <div class=\"progress\">\r\n        <div id=\"costProgress\" class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"jobCosts[i]\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"bidCosts[i]\" [ngStyle]=\"{'min-width': '2em', 'width': (jobCosts[i]/bidCosts[i])*100+ '%'}\">\r\n          {{jobCosts[i]/bidCosts[i] | percent:'1.0-0'}}\r\n        </div>\r\n      </div>\r\n    </li>\r\n    <li class=\"list-group-item\"><b>Revenue Collected:</b>\r\n      <div class=\"progress\">\r\n        <div id=\"revenueProgress\" class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"currentJob.jobRevenue\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"currentJob.bidPrice\" [ngStyle]=\"{'min-width': '2em', 'width': (currentJob.jobRevenue/currentJob.bidPrice)*100+ '%'}\">\r\n          {{currentJob.jobRevenue/currentJob.bidPrice | percent:'1.0-0'}}\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</ng-container>\r\n<ng-template #noCurrentJobs>\r\n  <h2 class=\"page-header\">No Current Jobs</h2>\r\n  <p>If this is incorrect, try refreshing the page.</p>\r\n</ng-template>"

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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>\r\n</div>\r\n\r\n<ng-container *ngIf=\"inquiriesLength!=0; else noInquiries\">\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">Inquiries</h2>\r\n    <h4>Click To View Details</h4>\r\n    <table *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" class=\"table table-striped table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Status</th>\r\n          <th>Customer</th>\r\n          <th>Received Date</th>\r\n          <th>Accepted/Declined Date</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let inquiry of inquiries;\" [routerLink]=\"['/inquiries/'+inquiry.inquiryID]\">\r\n          <td>{{inquiry.inquiryID}}</td>\r\n          <td>{{inquiry.inquiryStatus}}</td>\r\n          <td>{{inquiry.customerName}}</td>\r\n          <td>{{inquiry.receivedDate | date: 'MM/dd/yyyy'}}</td>\r\n          <td>{{inquiry.endDate | date: 'MM/dd/yyyy'}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ng-container>\r\n<ng-template #noInquiries>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">No Inquiries</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </div>\r\n</ng-template>\r\n  \r\n<!-- <ng-container *ngIf=\"pendingLength!=0 || acceptedLength!=0 || declinedLength!=0; else noInquiries\">\r\n  <ng-container *ngIf=\"pendingLength!=0; else noPendingInquiries\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">Pending Inquiries</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Received Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let pendingInquiry of pendingInquiries;\" [routerLink]=\"['/inquiries/'+pendingInquiry.inquiryID]\">\r\n            <td>{{pendingInquiry.inquiryID}}</td>\r\n            <td>{{pendingInquiry.receivedDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noPendingInquiries>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">No Pending Inquiries</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-container *ngIf=\"acceptedLength!=0; else noAcceptedInquiries\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">Accepted Inquiries</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Accepted Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let acceptedInquiry of acceptedInquiries;\" [routerLink]=\"['/inquiries/'+acceptedInquiry.inquiryID]\">\r\n            <td>{{acceptedInquiry.inquiryID}}</td>\r\n            <td>{{acceptedInquiry.endDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>  \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noAcceptedInquiries>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">No Accepted Inquiries</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-container *ngIf=\"declinedLength!=0; else noDeclinedInquiries\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">Declined Inquiries</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Declined Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let declinedInquiry of declinedInquiries;\" [routerLink]=\"['/inquiries/'+declinedInquiry.inquiryID]\">\r\n            <td>{{declinedInquiry.inquiryID}}</td>\r\n            <td>{{declinedInquiry.endDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>  \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noDeclinedInquiries>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n      <h2 class=\"page-header\">No Declined Inquiries</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n</ng-container>\r\n<ng-template #noInquiries>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">No Inquiries</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </div>\r\n</ng-template> -->"

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
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
        this.inquiryService.getAllInquiries().subscribe(function (inquiries) {
            _this.inquiries = inquiries.inquiries;
            _this.inquiriesLength = inquiries.inquiries.length;
            //this.inquiriesResource = new DataTableResource(this.inquiries);
            _this.pendingInquiries = inquiries.pendingInquiries;
            _this.pendingLength = inquiries.pendingInquiries.length;
            //console.log('Pending '+this.pendingLength);
            _this.acceptedInquiries = inquiries.acceptedInquiries;
            _this.acceptedLength = inquiries.acceptedInquiries.length;
            //console.log('Accepted '+this.acceptedLength);
            _this.declinedInquiries = inquiries.declinedInquiries;
            _this.declinedLength = inquiries.declinedInquiries.length;
            //console.log('Declined '+this.declinedLength);
            _this.dtTrigger.next();
            _this.displayTable = true;
        });
        // $(document).ready(function() {
        //   $('#example').DataTable();
        // });
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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/inquiries']\">Go Back</button>  \r\n</div>\r\n<div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\r\n  <ng-container *ngIf=\"inquiry; else noInquiry\">\r\n    <h2 class=\"page-header\">Inquiry #{{inquiry[0].inquiryID}}</h2>\r\n    <h4>Inquiry Details</h4>\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>Received Date</th>\r\n          <th>Accepted/Declined Date</th>\r\n          <th>Description</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>{{inquiry[0].receivedDate | date: 'MM/dd/yyyy'}}</td>\r\n          <td>{{inquiry[0].endDate | date: 'MM/dd/yyyy'}}</td>\r\n          <td>{{inquiry[0].description}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <h4>Customer Details</h4>\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Email</th>\r\n          <th>Phone</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>{{inquiry[0].customerName}}</td>\r\n          <td>{{inquiry[0].customerEmail}}</td>\r\n          <td>{{inquiry[0].customerPhone}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <button class=\"btn btn-primary\" href=\"#updateInquiry\" data-toggle=\"collapse\">Update Inquiry</button>\r\n    <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-modal'>Delete Inquiry</button>\r\n    <div id=\"updateInquiry\" class=\"collapse\">\r\n      <form (submit)=\"onUpdate()\">\r\n        <h2 class=\"page-header\">Update Inquiry</h2>\r\n        <div class=\"form-group\">\r\n          <label for=\"\">Description</label>\r\n          <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"Description\"></textarea>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Update</button>\r\n        <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\r\n      </form>   \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noInquiry>\r\n    <h2 class=\"page-header\">No Inquiries</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </ng-template>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\r\n  <form (submit)=\"onCreate()\">\r\n    <h2 class=\"page-header\">Create Bid</h2>\r\n    <div class=\"form-group\">\r\n      <label>Bid Price</label>\r\n      <input type=\"text\" [(ngModel)]=\"bidPrice\" name=\"bidPrice\" placeholder=\"Bid Price\" class=\"form-control\" required>\r\n    </div>\r\n    <!--<div class=\"form-group\">\r\n      <label>Current Date</label>\r\n      <input type=\"text\" [(ngModel)]=\"createdDate\" name=\"createdDate\" placeholder=\"Current Date\" class=\"form-control\" required>\r\n    </div>-->\r\n    <h3>Estimated Costs</h3>\r\n    <div class=\"form-group\">\r\n      <label>Labor Cost</label>\r\n      <input type=\"text\" [(ngModel)]=\"bidLabor\" name=\"bidLabor\" placeholder=\"Labor Cost\" class=\"form-control\" required>\r\n    </div>\r\n    <label>Materials Cost</label>\r\n    <div class=\"dropdown\">\r\n      <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Add Materials<span class=\"caret\"></span></button>\r\n      <ul class=\"dropdown-menu\">\r\n        <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\r\n          <li *ngFor=\"let material of materials; let i = index;\"><a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a></li>\r\n        </ng-container>\r\n        <ng-template #noMaterials>\r\n          <li><a>No more materials</a></li>\r\n        </ng-template>\r\n      </ul>\r\n    </div>\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead *ngIf=\"selectedMaterials[0] != null;\">\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Quantity</th>\r\n          <th>Per Unit Cost</th>\r\n        </tr>\r\n        </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index\">\r\n          <td>{{selectedMaterial.materialName}}</td>\r\n          <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required></td>\r\n          <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\" required></td>\r\n          <td><button type=\"button\" class=\"close\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">&times;</button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Create</button>\r\n    <button type=\"reset\" class=\"btn btn-danger\" (click)=\"onClear()\">Clear</button>\r\n  </form>\r\n</div>\r\n\r\n<!--                Delete Popup                -->\r\n<div class=\"modal fade\" id=\"delete-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete this inquiry?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
        this.selectedMaterials = [];
        this.ngOnInit();
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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/jobs']\">Go Back</button>  \r\n</div>\r\n\r\n<h2 class=\"page-header col-xs-12 col-sm-12 col-md-12 col-lg-12\">Job #{{job[0].jobID}}</h2>\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n  <ng-container *ngIf=\"job; else noJob\">\r\n    <h3 class=\"page-header\">Job Details</h3>\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>Revenue</th>\r\n          <th>Created Date</th>\r\n          <th>Completion Date</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>{{job[0].jobRevenue | currency: 'USD':true}}</td>\r\n          <td>{{job[0].createdDate | date: 'MM/dd/yyyy'}}</td>\r\n          <td>{{job[0].endDate | date: 'MM/dd/yyyy'}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <h4 class=\"page-header\">Actual Costs</h4>\r\n    <label>Labor Cost</label>\r\n    <table class=\"table table-striped table-hover\">\r\n      <tbody>\r\n        <tr>\r\n          <td>{{job[0].jobLabor | currency: 'USD':true}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <label *ngIf=\"jobMaterials[0] != null;\">Materials Cost</label>\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead *ngIf=\"jobMaterials[0] != null;\">\r\n        <tr>\r\n          <th>Material</th>\r\n          <th>Quantity</th>\r\n          <th>Per Unit Cost</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let jobMaterial of jobMaterials\">\r\n          <td>{{jobMaterial.materialName}}</td>\r\n          <td>{{jobMaterial.quantity}}</td>\r\n          <td>{{jobMaterial.perUnitCost | currency: 'USD':true}}</td>\r\n          <td><button *ngIf=\"status == 'IN-PROGRESS'\" type=\"button\" class=\"close\" (click)=\"onClickDeleteMaterial(jobMaterial.materialID)\" data-toggle=\"modal\" href='#delete-material-modal'>&times;</button></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </ng-container>\r\n  <button *ngIf=\"status == 'IN-PROGRESS'\" class=\"btn btn-primary\" data-toggle=\"modal\" href='#finish-job-modal'>Finish Job</button>\r\n  <button *ngIf=\"status == 'IN-PROGRESS'\" class=\"btn btn-info\" data-toggle=\"modal\" href='#update-job-modal'>Update Job</button>\r\n  <button class=\"btn btn-danger\" data-toggle=\"modal\" href='#delete-job-modal'>Delete Job</button>\r\n  <ng-template #noJob>\r\n    <h2 class=\"page-header\">No Jobs</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </ng-template>\r\n</div>\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n  <h3 class=\"page-header\">Bid Details</h3>\r\n  <table class=\"table table-striped table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>Bid Price</th>\r\n        <th>Created Date</th>\r\n        <th>Accepted Date</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{job[0].bidPrice | currency: 'USD':true}}</td>\r\n        <td>{{job[0].bidCreatedDate | date: 'MM/dd/yyyy'}}</td>\r\n        <td>{{job[0].bidEndDate | date: 'MM/dd/yyyy'}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<!--                Delete Job Popup                -->\r\n<div class=\"modal fade\" id=\"delete-job-modal\">\r\n  <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n              <h4 class=\"modal-title\">Warning</h4>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <p>Are you sure you want to delete this job?</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteJob()\">Yes</button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n<!--                Delete Material Popup                -->\r\n<div class=\"modal fade\" id=\"delete-material-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete this material?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDeleteMaterial()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Finish Job Popup                -->\r\n<div class=\"modal fade\" id=\"finish-job-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to finalize this job?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onFinish()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--                Update Job Popup                -->\r\n<div class=\"modal fade\" id=\"update-job-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Update Job</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form (submit)=\"onUpdate()\">\r\n          <div class=\"form-group\">\r\n            <label>Add Revenue</label>\r\n            <input type=\"text\" [(ngModel)]=\"jobRevenue\" name=\"jobRevenue\" placeholder=\"Revenue\" class=\"form-control\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Add Labor Cost</label>\r\n            <input type=\"text\" [(ngModel)]=\"jobLabor\" name=\"jobLabor\" placeholder=\"Labor Cost\" class=\"form-control\" required>\r\n          </div>\r\n          <!--<div class=\"form-group\">\r\n            <label>Created Date</label>\r\n            <input type=\"text\" [(ngModel)]=\"createdDate\" name=\"createdDate\" placeholder=\"YYYY-MM-DD\" class=\"form-control\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Completion Date</label>\r\n            <input type=\"text\" [(ngModel)]=\"endDate\" name=\"endDate\" placeholder=\"YYYY-MM-DD\" class=\"form-control\" required>\r\n          </div>-->\r\n          <label>Add Materials</label>\r\n          <div class=\"dropdown\">\r\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Add Materials<span class=\"caret\"></span></button>\r\n            <ul class=\"dropdown-menu\">\r\n              <ng-container *ngIf=\"materials[0] != null; else noMaterials\">\r\n                <li *ngFor=\"let material of materials; let i = index;\"><a (click)=\"onAddMaterial(material, i)\">{{material.materialName}}</a></li>\r\n              </ng-container>\r\n              <ng-template #noMaterials>\r\n                <li><a>No more materials</a></li>\r\n              </ng-template>\r\n            </ul>\r\n          </div>\r\n          <table class=\"table table-striped table-hover\">\r\n            <thead *ngIf=\"selectedMaterials[0] != null;\">\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Quantity</th>\r\n                <th>Per Unit Cost</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let selectedMaterial of selectedMaterials; let i = index;\">\r\n                <td>{{selectedMaterial.materialName}}</td>\r\n                <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.quantity\" name=\"quantity\" placeholder=\"Quantity\" class=\"form-control\" required></td>\r\n                <td><input type=\"text\" [(ngModel)]=\"selectedMaterial.perUnitCost\" name=\"perUnitCost\" placeholder=\"Per Unit Cost\" class=\"form-control\" required></td>\r\n                <td><button type=\"button\" class=\"close\" (click)=\"onRemoveMaterial(selectedMaterial, i)\">&times;</button></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\">Update</button>\r\n            <button type=\"reset\" class=\"btn btn-danger\" (click)=\"onClear()\">Clear</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/job/job.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_job_service__ = __webpack_require__("../../../../../src/app/services/job.service.ts");
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





var JobComponent = (function () {
    function JobComponent(router, route, jobService, materialService, bidService) {
        this.router = router;
        this.route = route;
        this.jobService = jobService;
        this.materialService = materialService;
        this.bidService = bidService;
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
        this.jobService.getJobById(this.id).subscribe(function (job) {
            _this.job = job;
            _this.status = job[0].jobStatus;
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
        this.selectedMaterials = [];
    };
    JobComponent.prototype.onUpdate = function () {
        // To help with date on single update API call
        /*if(this.createdDate != null){
          this.createdDate = `"${this.createdDate}"`;
        }
        if(this.endDate != null){
          this.endDate = `"${this.endDate}"`;
        }*/
        var _this = this;
        var updatedJob = {
            jobID: this.id,
            jobLabor: Number(this.jobLabor) + Number(this.job[0].jobLabor),
            jobRevenue: Number(this.jobRevenue) + Number(this.job[0].jobRevenue),
            jobStatus: this.jobStatus,
            createdDate: this.createdDate,
            endDate: this.endDate
        };
        console.log(updatedJob);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_job_service__["a" /* JobService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_material_service__["a" /* MaterialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_material_service__["a" /* MaterialService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_bid_service__["a" /* BidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_bid_service__["a" /* BidService */]) === "function" && _e || Object])
], JobComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>\r\n</div>\r\n\r\n<ng-container *ngIf=\"jobsLength!=0; else noJobs\">\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">Jobs</h2>\r\n    <h4>Click To View Details</h4>\r\n    <table *ngIf=\"displayTable\" datatable [dtOptions]=\"dtOptions\" class=\"table table-striped table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Status</th>\r\n          <th>Customer</th>\r\n          <th>Created Date</th>\r\n          <th>Completion Date</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let job of jobs;\" [routerLink]=\"['/jobs/'+job.jobID]\">\r\n          <td>{{job.jobID}}</td>\r\n          <td>{{job.jobStatus}}</td>\r\n          <td>{{job.customerName}}</td>\r\n          <td>{{job.createdDate | date: 'MM/dd/yyyy'}}</td>\r\n          <td>{{job.endDate | date: 'MM/dd/yyyy'}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ng-container>\r\n<ng-template #noJobs>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">No Jobs</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- <ng-container *ngIf=\"inProgressLength!=0 || completedLength!=0; else noJobs\">\r\n  <ng-container *ngIf=\"inProgressLength!=0; else noInProgressJobs\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n      <h2 class=\"page-header\">In Progress Jobs</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Revenue</th>\r\n            <th>Created Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let inProgressJob of inProgressJobs;\" [routerLink]=\"['/jobs/'+inProgressJob.jobID]\">\r\n            <td>{{inProgressJob.jobID}}</td>\r\n            <td>{{inProgressJob.jobRevenue}}</td>\r\n            <td>{{inProgressJob.createdDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>  \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noInProgressJobs>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n      <h2 class=\"page-header\">No Jobs In Progress</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n  \r\n  <ng-container *ngIf=\"completedLength!=0; else noCompletedJobs\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n      <h2 class=\"page-header\">Completed Jobs</h2>\r\n      <h4>Click To View Details</h4>\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Labor Cost</th>\r\n            <th>Material Cost</th>\r\n            <th>Income</th>\r\n            <th>Created Date</th>\r\n            <th>Completed Date</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let completedJob of completedJobs;\" [routerLink]=\"['/jobs/'+completedJob.jobID]\">\r\n            <td>{{completedJob.jobID}}</td>\r\n            <td>{{completedJob.jobLabor}}</td>\r\n            <td>Net Income</td>\r\n            <td>{{completedJob.endDate | date: 'MM/dd/yyyy'}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>  \r\n    </div>\r\n  </ng-container>\r\n  <ng-template #noCompletedJobs>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n      <h2 class=\"page-header\">No Completed Jobs</h2>\r\n      <p>If this is incorrect, try refreshing the page.</p>\r\n    </div>\r\n  </ng-template>\r\n</ng-container>\r\n<ng-template #noJobs>\r\n  <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n    <h2 class=\"page-header\">No Jobs</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </div>\r\n</ng-template> -->"

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
        this.dtOptions = {
            pagingType: 'full_numbers'
        };
        this.jobService.getAllJobs().subscribe(function (jobs) {
            _this.jobs = jobs.jobs;
            _this.jobsLength = jobs.jobs.length;
            _this.inProgressJobs = jobs.inProgressJobs;
            _this.inProgressLength = jobs.inProgressJobs.length;
            //console.log('In-progress '+this.inProgressLength);
            _this.completedJobs = jobs.completedJobs;
            _this.completedLength = jobs.completedJobs.length;
            //console.log('Completed '+this.completedLength);
            _this.dtTrigger.next();
            _this.displayTable = true;
        });
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

module.exports = "<h2 class=\"page-header\">Login</h2>\r\n<form (submit)=\"onLogin()\">\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" class=\"form-control\" required>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" required>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary\">Login</button>\r\n  <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\r\n</form>"

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

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\r\n  <button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>  \r\n</div>\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n  <ng-container *ngIf=\"length != 0; else noMaterials\">\r\n    <h2 class=\"page-header\">Materials</h2>\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Name</th>\r\n        </tr>\r\n        </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let material of materials\">\r\n          <td>{{material.materialID}}</td>\r\n          <td>{{material.materialName}}</td>\r\n          <td><button type=\"button\" class=\"close\" (click)=\"onDeleteClick(material.materialID)\" data-toggle=\"modal\" href='#delete-modal'>&times;</button></td>\r\n          <!--<button class=\"btn btn-danger\" (click)=\"onDeleteClick(material.materialID)\" data-toggle=\"modal\" href='#delete-modal'>Delete</button>-->\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </ng-container>\r\n  <ng-template #noMaterials>\r\n    <h2 class=\"page-header\">No Materials</h2>\r\n    <p>If this is incorrect, try refreshing the page.</p>\r\n  </ng-template>\r\n</div>\r\n\r\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\r\n  <h2 class=\"page-header\">Create A New Material</h2>\r\n  <form (submit)=\"onCreate()\">\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" required>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Create</button>\r\n    <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\r\n  </form>\r\n</div>\r\n\r\n<!--                Delete Popup                -->\r\n<div class=\"modal fade\" id=\"delete-modal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you sure you want to delete this material?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onDelete()\">Yes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/materials/materials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_material_service__ = __webpack_require__("../../../../../src/app/services/material.service.ts");
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
    }
    MaterialsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.materialService.getAllMaterials().subscribe(function (materials) {
            _this.materials = materials.materials;
            _this.length = _this.materials.length;
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
exports.push([module.i, ".fill-remaining-space {\r\n    /*This fills the remaining space, by using flexbox.  \r\n   Every toolbar row uses a flexbox row layout. */\r\n   -webkit-box-flex: 1;\r\n       -ms-flex: 1 1 auto;\r\n           flex: 1 1 auto;\r\n};", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://stackoverflow.com/questions/38209713/how-to-make-a-responsive-nav-bar-using-angular-material-2 -->\r\n<!--<md-sidenav-containe fullscreen>-->\r\n<!--<md-sidenav-container>\r\n    <md-toolbar color=\"primary\">\r\n        <button md-button [routerLink]=\"['/']\"><md-icon>home</md-icon>Allied Waterproofing</button>\r\n        <span class=\"fill-remaining-space\"></span>\r\n        <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\r\n            <button md-button [routerLink]=\"['/customers']\">Customers</button>\r\n            <button md-button [routerLink]=\"['/']\">Something</button>\r\n        </div>\r\n        <button md-button [md-menu-trigger-for]=\"menu\" fxHide=\"false\" fxHide.gt-sm><md-icon>menu</md-icon></button>\r\n    </md-toolbar>\r\n    <md-menu x-position=\"before\" #menu=\"mdMenu\">\r\n        <button md-menu-item [routerLink]=\"['/customers']\">Customers</button>\r\n        <button md-menu-item [routerLink]=\"['/']\">Something</button>\r\n    </md-menu>\r\n</md-sidenav-container>-->\r\n\r\n<nav class=\"navbar navbar-inverse\" role=\"navigation\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Allied Waterproofing</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/customers']\">Customers</a></li>\r\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/inquiries']\">Inquiries</a></li>\r\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/bids']\">Bids</a></li>\r\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/jobs']\">Jobs</a></li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/materials']\">Edit Materials</a></li>\r\n            <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLink]=\"['/register']\">Register User</a></li>\r\n            <li><a *ngIf=\"authService.loggedIn()\" data-toggle=\"modal\" href='#logout-modal'>Logout</a></li>\r\n        </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n</nav>\r\n\r\n\r\n<!--                Logout Popup                -->\r\n<div class=\"modal fade\" id=\"logout-modal\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                <h4 class=\"modal-title\">Warning</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Are you sure you want to logout?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onLogout()\">Yes</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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

module.exports = "<button class=\"btn btn-default\" [routerLink]=\"['/home']\">Go Home</button>\r\n<h2 class=\"page-header\">Register A New User</h2>\r\n<form (submit)=\"onRegister()\">\r\n  <div class=\"form-group\">\r\n    <label>Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" required>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" class=\"form-control\" required>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" required>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary\">Register</button>\r\n  <button type=\"reset\" class=\"btn btn-danger\">Clear</button>\r\n</form>"

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
    function AuthService(http) {
        this.http = http;
        this.localHttp = 'http://localhost:3000';
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
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
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
        this.localHttp = 'http://localhost:3000';
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
    function CustomerService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.localHttp = 'http://localhost:3000';
    }
    CustomerService.prototype.getAllCustomers = function () {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.localHttp + "/customers/all", { headers: headers }).map(function (response) { return response.json(); });
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
    CustomerService.prototype.createCustomer = function (newCustomer) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/customers/new", JSON.stringify(newCustomer), { headers: headers }).map(function (response) { return response.json(); });
    };
    CustomerService.prototype.updateCustomer = function (updatedCustomer) {
        this.authService.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(this.localHttp + "/customers/update", JSON.stringify(updatedCustomer), { headers: headers }).map(function (response) { return response.json(); });
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
        this.localHttp = 'http://localhost:3000';
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
        this.localHttp = 'http://localhost:3000';
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
    function MaterialService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.localHttp = 'http://localhost:3000';
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