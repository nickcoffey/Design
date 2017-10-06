import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { InquiryService } from '../../services/inquiry.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  id:any;
  customer:any;
  description:any;
  receivedDate:any;

  constructor(
    private customerService:CustomerService,
    private inquiryService:InquiryService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe((customer) => {
      this.customer = customer;
    });
  }

  onCreate(){
    const newInquiry = {
      customerID: this.id,
      description: this.description,
      receivedDate: this.receivedDate
    }
    
    this.inquiryService.createInquiry(newInquiry).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
        this.router.navigate(['/inquiries']);
      } else{
        console.log(data.msg);
      }
    });
  }

  onDelete(){
    this.customerService.deleteCustomer(this.id).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
        this.router.navigate(['/customers']);
      } else{
        console.log(data.msg);
      }
    });
  }
}
