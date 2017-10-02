import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:any;
  name:any;
  email:any;
  address:any;
  phone:any;

  constructor(
    private customerService:CustomerService,
    private router:Router
  ) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe((customers) => {
      this.customers = customers.customers;
    });
  }

  onCreate(){
    const newCustomer = {
      customerName: this.name,
      email: this.email,
      address: this.address,
      phone: this.phone
    }

    this.customerService.createCustomer(newCustomer).subscribe((data) => {
      if(data.success){
        console.log(data.msg);
        this.ngOnInit();
      } else{
        console.log(data.msg);
      }
    });
  }
}