import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Ng2FileInputModule } from 'ng2-file-input';
import { FileSelectDirective}  from 'ng2-file-upload';
//import { DataTableModule } from 'angular-4-data-table';
import { DataTablesModule } from 'angular-datatables';
import { Ng2FileTreeModule } from 'ng2-file-tree/ng2-file-tree';
import { InputMaskModule } from 'ng2-inputmask';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MdSidenavModule, MdToolbarModule, MdIconModule, MdButtonModule, MdMenuModule } from '@angular/material';
//import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InquiriesComponent } from './components/inquiries/inquiries.component';
import { BidsComponent } from './components/bids/bids.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CreateBidComponent } from './components/create-bid/create-bid.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { BidComponent } from './components/bid/bid.component';
import { InquiryComponent } from './components/inquiry/inquiry.component';
import { JobComponent } from './components/job/job.component';
import { LaborComponent } from './components/labor/labor.component';

import { CustomerService } from './services/customer.service';
import { InquiryService } from './services/inquiry.service';
import { BidService } from './services/bid.service';
import { JobService } from './services/job.service';
import { MaterialService } from './services/material.service';
import { LaborService } from './services/labor.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CookieService } from 'ngx-cookie-service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
  { path: 'customers/:id', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: 'inquiries', component: InquiriesComponent, canActivate: [AuthGuard] },
  { path: 'bids', component: BidsComponent, canActivate: [AuthGuard] },
  { path: 'jobs', component: JobsComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'create-bid/:id', component: CreateBidComponent, canActivate: [AuthGuard] },
  { path: 'materials', component: MaterialsComponent, canActivate: [AuthGuard] },
  { path: 'bids/:id', component: BidComponent, canActivate: [AuthGuard] },
  { path: 'inquiries/:id', component: InquiryComponent, canActivate: [AuthGuard] },
  { path: 'jobs/:id', component: JobComponent, canActivate: [AuthGuard] },
  { path: 'labor', component: LaborComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CustomersComponent,
    LoginComponent,
    RegisterComponent,
    InquiriesComponent,
    BidsComponent,
    JobsComponent,
    CustomerComponent,
    CreateBidComponent,
    MaterialsComponent,
    BidComponent,
    InquiryComponent,
    JobComponent,
    FileSelectDirective,
    LaborComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    Ng2FileTreeModule,
    InputMaskModule
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
    CustomerService,
    InquiryService,
    BidService,
    JobService,
    MaterialService,
    LaborService,
    AuthService,
    AuthGuard,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
