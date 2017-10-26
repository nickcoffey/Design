import { Component, OnInit } from '@angular/core';
import { InquiryService } from '../../services/inquiry.service';
import { Subject } from 'rxjs/Rx';
//import { DataTable, DataTableResource } from 'angular-4-data-table';
//declare var $;

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent implements OnInit {

  inquiries:any;
  inquiriesLength:any;
  pendingInquiries:any;
  pendingLength:any;
  acceptedInquiries:any;
  acceptedLength:any;
  declinedInquiries:any;
  declinedLength:any;

  // inquiriesResource:any;
  // inquiriesCount = 0;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  displayTable: Boolean = false;

  constructor(
    private inquiryService:InquiryService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.inquiryService.getAllInquiries().subscribe((inquiries) => {
      this.inquiries = inquiries.inquiries;
      this.inquiriesLength = inquiries.inquiries.length;
      //this.inquiriesResource = new DataTableResource(this.inquiries);
      this.pendingInquiries = inquiries.pendingInquiries;
      this.pendingLength = inquiries.pendingInquiries.length;     
      //console.log('Pending '+this.pendingLength);
      this.acceptedInquiries = inquiries.acceptedInquiries;
      this.acceptedLength = inquiries.acceptedInquiries.length;
      //console.log('Accepted '+this.acceptedLength);
      this.declinedInquiries = inquiries.declinedInquiries;
      this.declinedLength = inquiries.declinedInquiries.length;
      //console.log('Declined '+this.declinedLength);

      this.dtTrigger.next();
      this.displayTable = true;
    });

    // $(document).ready(function() {
    //   $('#example').DataTable();
    // });
  }

}