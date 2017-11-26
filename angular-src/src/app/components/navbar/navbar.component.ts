import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertComponent } from '../alert/alert.component';
declare var $;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:any;

  constructor(
    private router:Router,
    private authService:AuthService,
    private alert: AlertComponent
  ) { }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
    console.log(this.loggedIn);
  }

  onLogout(){
    this.authService.logout();
    // console.log('Logged out');
    $("html, body").animate({ scrollTop: 0 }, "slow");
    this.alert.displayAlert('Logged out', 'success');
    this.router.navigate(['/']);
  }
}
