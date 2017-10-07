import { Component, OnInit } from '@angular/core';
import { InquiryService } from '../../services/inquiry.service';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent implements OnInit {

  inquiries:any;
  pendingInquiries:any;
  pendingLength:any;
  acceptedInquiries:any;
  acceptedLength:any;
  declinedInquiries:any;
  declinedLength:any;

  constructor(
    private inquiryService:InquiryService
  ) { }

  ngOnInit() {
    this.inquiryService.getAllInquiries().subscribe((inquiries) => {
      this.inquiries = inquiries;
      this.pendingInquiries = inquiries.pendingInquiries;
      this.pendingLength = inquiries.pendingInquiries.length;
      console.log('Pending '+this.pendingLength);
      this.acceptedInquiries = inquiries.acceptedInquiries;
      this.acceptedLength = inquiries.acceptedInquiries.length;
      console.log('Accepted '+this.acceptedLength);
      this.declinedInquiries = inquiries.declinedInquiries;
      this.declinedLength = inquiries.declinedInquiries.length;
      console.log('Declined '+this.declinedLength);
    });
  }
}
