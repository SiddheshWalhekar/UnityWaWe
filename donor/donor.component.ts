import { Component, OnInit } from '@angular/core';
import { DonorService } from '../services/donor.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {
  constructor(private donor:DonorService,public router:Router) {}

  showlogin=false;
  autherror:String='';

  ngOnInit(): void {
    this.donor.reloadDonor()
  }
  
  donorsignUp(data:SignUp):void{
    this.donor.SignUp(data)
  }

  donorLogin(data:SignUp):void{
    this.autherror=""
    console.warn(data)
    this.donor.userLogin(data);
    this.donor.isLoginError.subscribe((isError)=>{
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
