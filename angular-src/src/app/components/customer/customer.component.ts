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

  id: any;
  customer: any;
  description: any;
  receivedDate: any;
  name: any;
  address: any;
  city: any;
  state: any;
  zip: any;

  contactTitle: any;
  contactName: any;
  contactPhone: any;
  contactEmail: any;
  contacts: any;
  contactID: any;

  constructor(
    private customerService: CustomerService,
    private inquiryService: InquiryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe((customer) => {
      this.customer = customer;
    });
    this.customerService.getAllContacts(this.id).subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  onCreate() {
    const newInquiry = {
      customerID: this.id,
      description: this.description,
      receivedDate: this.receivedDate
    }

    this.inquiryService.createInquiry(newInquiry).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        //this.router.navigate(['/inquiries']);
      } else {
        console.log(data.msg);
      }
    });
  }

  onDeleteCustomer() {
    this.customerService.deleteCustomer(this.id).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.router.navigate(['/customers']);
      } else {
        console.log(data.msg);
      }
    });
  }

  onUpdateCustomer() {
    let updatedCustomer = {
      customerID: this.id,
      name: this.name,
      address: this.address,
      city: this.city,
      state: this.state,
      zip: this.zip
    }

    this.customerService.updateCustomer(updatedCustomer).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
      } else {
        console.log(data.msg);
      }
    });
    this.ngOnInit();
    this.clearCustomerFields();
  }

  onClickUpdateContact(contactID) {
    this.contactID = contactID;
  }

  onUpdateContact() {
    let updatedContact = {
      contactID: this.contactID,
      contactTitle: this.contactTitle,
      contactName: this.contactName,
      contactPhone: this.contactPhone,
      contactEmail: this.contactEmail
    }

    this.customerService.updateContact(updatedContact).subscribe((data) => {
      console.log(data);
      if (data.success) {
        console.log(data.msg);
        this.ngOnInit();
        this.clearContactFields();
      } else {
        console.log(data.msg);
      }
    });
  }

  onClickDeleteContact(contactID) {
    this.contactID = contactID;
  }

  onDeleteContact() {
    this.customerService.deleteContact(this.contactID).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.ngOnInit();
      } else {
        console.log(data.msg);
      }
    });
  }

  onCreateContact() {
    let newContact = {
      customerID: this.id,
      contactTitle: this.contactTitle,
      contactName: this.contactName,
      contactPhone: this.contactPhone,
      contactEmail: this.contactEmail
    }

    this.customerService.createContact(newContact).subscribe((data) => {
      console.log(data);
      if (data.success) {
        console.log(data.msg);
        this.ngOnInit();
        this.clearContactFields();
      } else {
        console.log(data.msg);
      }
    });
  }

  clearCustomerFields() {
    this.name = null;
    this.address = null;
    this.city = null;
    this.state = null;
    this.zip = null;
  }

  clearContactFields() {
    this.contactTitle = null;
    this.contactName = null;
    this.contactPhone = null;
    this.contactEmail = null;
  }
}
