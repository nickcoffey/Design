import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:String;
  username:String;
  password:String;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onRegister(){
    if(this.name == undefined || this.username == undefined || this.password == undefined){
      console.log("Fields must be filled in");
    } else{
      const user = {
        name: this.name,
        username: this.username,
        password: this.password
      }
      this.authService.registerUser(user).subscribe((data) => {
        if(data.success){
          console.log(data.msg);
          this.router.navigate(['/home']);
        } else{
          console.log(data.msg);
        }
      });
    }
  }
}
