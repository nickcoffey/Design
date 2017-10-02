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
  acceptedInquiries:any;
  declinedInquiries:any;

  constructor(
    private inquiryService:InquiryService
  ) { }

  ngOnInit() {
    this.inquiryService.getAllInquiries().subscribe((inquiries) => {
      this.inquiries = inquiries;
      this.pendingInquiries = inquiries.pendingInquiries;
      this.acceptedInquiries = inquiries.acceptedInquiries;
      this.declinedInquiries = inquiries.declinedInquiries;
    });
  }
}
