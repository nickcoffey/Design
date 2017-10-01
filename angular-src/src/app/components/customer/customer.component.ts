import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer:any;

  constructor(
    private customerService:CustomerService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(id).subscribe((customer) => {
      this.customer = customer;
      console.log(this.customer);
    });
  }

}
