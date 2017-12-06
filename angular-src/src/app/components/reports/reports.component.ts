import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'angular4-datepicker/src/my-date-picker/interfaces';
import { JobService } from '../../services/job.service';
import { InquiryService } from '../../services/inquiry.service';
import { CustomerService } from '../../services/customer.service';
import { BidService } from '../../services/bid.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  jobs: any = null;
  totalExpectedRevenue: number = 0;
  totalActualRevenue: number = 0;
  totalExpectedCosts: number = 0;
  totalActualCosts: number = 0;

  bids: any = null;
  inquiries: any = null;
  customers: any = [];
  selectedCustomerIDs: number[] = [];

  myDatePickerOptions: IMyDpOptions = null;
  date1: any = null;
  date2: any = null;

  constructor(
    private jobService: JobService,
    private bidService: BidService,
    private inquiryService: InquiryService,
    private customerService: CustomerService
  ) {
  }

  ngOnInit() {
    this.setupDatePickers();
  }

  onSubmitDates() {
    let dates = {
      startDate: `${this.date1.date.year}-${this.date1.date.month}-${this.date1.date.day} 00:00:00`,
      endDate: `${this.date2.date.year}-${this.date2.date.month}-${this.date2.date.day} 23:59:59`
    }
    this.jobService.getJobsReport(dates).subscribe((jobs) => {
      this.jobs = jobs;
      this.totalActualCosts = 0;
      this.totalActualRevenue = 0;
      this.totalExpectedCosts = 0;
      this.totalExpectedRevenue = 0;
      this.customers = [];
      this.selectedCustomerIDs = [];
      this.customerService.getAllCustomers().subscribe((customers) => {
        this.jobs.forEach(job => {
          this.totalActualCosts += job.actualCosts;
          this.totalActualRevenue += job.actualRevenue;
          this.totalExpectedCosts += job.expectedCosts;
          this.totalExpectedRevenue += job.expectedRevenue;
          customers.customers.forEach(customer => {
            if (job.customerID == customer.customerID) {
              if (!this.customers.includes(customer)) {
                this.customers.push(customer);
                this.selectedCustomerIDs.push(customer.customerID);
              }
            }
          });
        });
      });
    });
    this.bidService.getBidsByDates(dates).subscribe((bids) => {
      this.bids = bids;
      // console.log(this.bids);
    });
    this.inquiryService.getInquiriesByDate(dates).subscribe((inquiries) => {
      this.inquiries = inquiries;
      // console.log(this.inquiries);
    });
  }

  setupDatePickers() {
    this.myDatePickerOptions = {
      dateFormat: 'mm-dd-yyyy',
      editableDateField: false
    };

    let today = this.getToday();
    this.date2 = {
      date: {
        year: today[2], month: today[0], day: today[1]
      }
    }
  }

  getToday() {
    var today: any = new Date();
    var dd = today.getDate().toString();
    var mm = (today.getMonth() + 1).toString(); // January is 0
    var yyyy = today.getFullYear();
    return [mm, dd, yyyy];
  }
}