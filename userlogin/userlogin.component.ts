import { Component , OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { Route, Router } from '@angular/router';
import { Login, userLogin } from '../data-type';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  constructor(private user:UserService,public router:Router) {}

  
  showlogin=false;
  autherror:String='';


  ngOnInit(): void {
    this.user.reloadUser()
  }
  
  userSignUp(data:any):void{
    console.warn(data);
    this.user.SignUp(data);
  }

  userLogin(data:userLogin):void{
      this.autherror=""
      console.warn(data)
      this.user.userLogin(data);
      this.user.isLoginError.subscribe((isError)=>{
        if(isError){
          this.autherror="Please enter valid details."
        }
      })
    }
    openlogin(){
      this.showlogin=true;
    }
  
    opensignup(){
      this.showlogin=false;
    }
  }

