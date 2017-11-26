import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';
import { AlertComponent } from '../alert/alert.component'; 
declare var $;

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: any;
  name: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  zip: number = null;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  displayTable: Boolean = false;

  constructor(
    private customerService: CustomerService,
    private alert: AlertComponent,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCustomers();
    // this.setupDataTable();
  }

  getCustomers() {
    this.customerService.getAllCustomers().subscribe((customers) => {
      this.customers = customers.customers;
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
        // console.log(data.msg);
        this.getCustomers();
        this.clearFields();
        $('#create-modal').modal('hide');
        this.alert.displayAlert(data.msg, 'success');
      } else {
        console.log(data.msg);
      }
    });
  }

  clearFields() {
    this.name = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.zip = null;
  }
}