import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { InquiryService } from '../../services/inquiry.service';
declare var $;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  /** CUSTOMER **/
  id: number = null;
  customer: any;
  description: string = '';
  receivedDate: any;
  name: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  zip: number = null;

  /** CONTACT **/
  contactTitle: string = '';
  contactName: string = '';
  contactPhone: number = null;
  contactEmail: string = '';
  contacts: any;
  contactID: any;

  constructor(
    private customerService: CustomerService,
    private inquiryService: InquiryService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getCustomer();
    this.getContacts();
  }

  /*************************************************** CUSTOMER FUNCTIONS ***********************************************************/
  getCustomer() {
    this.customerService.getCustomerById(this.id).subscribe((customer) => {
      this.customer = customer;
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
        $('#create-inquiry-modal').modal('hide');
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

  onClickUpdateCustomer() {
    this.name = this.customer[0].customerName;
    this.address = this.customer[0].address;
    this.city = this.customer[0].city;
    this.state = this.customer[0].state;
    this.zip = this.customer[0].zip;
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
        this.getCustomer();
        this.clearCustomerFields();
        $('#update-customer-modal').modal('hide');
      } else {
        console.log(data.msg);
      }
    });
  }

  clearCustomerFields() {
    this.name = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.zip = null;
  }

  clearDescription() {
    this.description = '';
  }

  /*************************************************** CONTACT FUNCTIONS ***********************************************************/
  getContacts() {
    this.customerService.getAllContacts(this.id).subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  onClickUpdateContact(contactID, contactIndex) {
    this.contactID = contactID;
    this.contactTitle = this.contacts[contactIndex].contactTitle;
    this.contactName = this.contacts[contactIndex].contactName;
    this.contactPhone = this.contacts[contactIndex].contactPhone;
    this.contactEmail = this.contacts[contactIndex].contactEmail;
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
        this.getContacts();
        this.clearContactFields();
        $('#update-contact-modal').modal('hide');
      } else {
        console.log(data.msg);
      }
    });
  }

  onDeleteContact() {
    this.customerService.deleteContact(this.contactID).subscribe((data) => {
      if (data.success) {
        console.log(data.msg);
        this.getContacts();
        $('#update-contact-modal').modal('hide');
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
        this.getContacts();
        this.clearContactFields();
        $('#create-contact-modal').modal('hide');
      } else {
        console.log(data.msg);
      }
    });
  }

  clearContactFields() {
    this.contactTitle = '';
    this.contactName = '';
    this.contactPhone = null;
    this.contactEmail = '';
  }
}
