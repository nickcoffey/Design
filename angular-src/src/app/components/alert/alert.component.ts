import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayAlert(message, type) {
    switch (type) {
      case 'warning': {
        $("#warningAlert").html(`<h4 style='margin-bottom: 0;font-weight:normal'>${message}<button type='button' class='close' data-dismiss='alert'>&times;</button></h4>`);
        $("#warningAlert").fadeTo(2000, 500).slideUp(500, function () {
          $("#warningAlert").slideUp(500);
        });
        $("html, body").animate({ scrollTop: 0 }, "slow");
        break;
      }
      case 'success': {
        $("#successAlert").html(`<h4 style='margin-bottom: 0;font-weight:normal'>${message}<button type='button' class='close' data-dismiss='alert'>&times;</button></h4>`);
        $("#successAlert").fadeTo(2000, 500).slideUp(500, function () {
          $("#successAlert").slideUp(500);
        });
        $("html, body").animate({ scrollTop: 0 }, "slow");
        break;
      }
    }
  }
}
