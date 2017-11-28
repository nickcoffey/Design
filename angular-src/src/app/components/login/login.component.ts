import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertComponent } from '../alert/alert.component';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private alert: AlertComponent,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.authService.loggedIn()) {
      this.router.navigate(['home']);
    }
  }

  onLogin() {
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe((data) => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.alert.displayAlert('Welcome', 'success');
        this.router.navigate(['home']);
      } else {
        this.alert.displayAlert(data.msg, 'warning');
        // console.log(data.msg);
        // $("#login-alert").html(`<button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Warning!</strong> ${data.msg}, please try again.`);
        // $("#login-alert").fadeTo(3000, 500).slideUp(500, function () {
        //   $("#login-alert").slideUp(500);
        // });
        // this.router.navigate(['login']);
      }
    });
  }

  clearFields() {
    this.username = '';
    this.password = '';
  }
}
