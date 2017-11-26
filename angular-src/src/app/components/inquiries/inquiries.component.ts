import { Component, OnInit, AfterContentInit } from '@angular/core';
import { InquiryService } from '../../services/inquiry.service';
import { Subject } from 'rxjs/Rx';
//import { DataTable, DataTableResource } from 'angular-4-data-table';
//declare var $;

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent implements OnInit, AfterContentInit {

  inquiries: any;
  inquiriesLength: any;
  pendingInquiries: any;
  pendingLength: any;
  acceptedInquiries: any;
  acceptedLength: any;
  declinedInquiries: any;
  declinedLength: any;

  // inquiriesResource:any;
  // inquiriesCount = 0;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  displayTable: Boolean = false;

  constructor(
    private inquiryService: InquiryService
  ) { }

  ngOnInit() {
    this.inquiryService.getAllInquiries().subscribe((inquiries) => {
      this.inquiries = inquiries.inquiries;
      this.inquiriesLength = inquiries.inquiries.length;
      //this.inquiriesResource = new DataTableResource(this.inquiries);
      // this.filterInquiries(inquiries);
      this.setupDataTable();
    });
    // $(document).ready(function() {
    //   $('#example').DataTable();
    // });
  }

  ngAfterContentInit() {
    // this.applyTableColor();
  }

  applyTableColor() {
    this.inquiryService.getAllInquiries().subscribe(inquiries => {
      inquiries.inquiries.forEach(inquiry => {
        let id = inquiry.inquiryID;
        let status = inquiry.inquiryStatus;
        if (status == 'PENDING') {
          document.getElementById(id).classList.add('info');
        } else if (status == 'DECLINED') {
          document.getElementById(id).classList.add('danger');
        } else if (status == 'ACCEPTED') {
          document.getElementById(id).classList.add('success');
        }
      });
    });
  }

  filterInquiries(inquiries) {
    this.pendingInquiries = inquiries.pendingInquiries;
    this.pendingLength = inquiries.pendingInquiries.length;
    this.acceptedInquiries = inquiries.acceptedInquiries;
    this.acceptedLength = inquiries.acceptedInquiries.length;
    this.declinedInquiries = inquiries.declinedInquiries;
    this.declinedLength = inquiries.declinedInquiries.length;
  }

  setupDataTable() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [0, 'desc']
    };
    this.dtTrigger.next();
    this.displayTable = true;
  }
}