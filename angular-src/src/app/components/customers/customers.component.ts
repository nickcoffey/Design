import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any;
  name: any;
  address: any;
  city: any;
  state: any;
  zip: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  displayTable: Boolean = false;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe((customers) => {
      this.customers = customers.customers;
      // this.setupDataTable();
    });
  }

  setupDataTable() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.dtTrigger.next();
    this.displayTable = true;
  }

  onCreate() {
    const newCustomer = {
      customerName: this.name,
      address: this.address,
      city: this.city,
      state: this.state,
      zip: this.zip
    }

    this.customerService.createCustomer(newCustomer).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.ngOnInit();
        this.clearFields();
      } else {
        console.log(data.msg);
      }
    });
  }

  clearFields() {
    this.name = null;
    this.address = null;
    this.city = null;
    this.state = null;
    this.zip = null;
  }
}