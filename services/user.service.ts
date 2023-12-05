import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { userSignUp, userLogin } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError=new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router ) { }

  
  SignUp(data: userSignUp) {
    this.http.post(`http://localhost:3000/user `,
      data,
      { observe: 'response' }).subscribe((result) => {
      if(result){

      //this.isDonorLoggedIn.next(true);
      localStorage.setItem('user', JSON.stringify(result.body));
      this.router.navigate(['home']);
      }
      console.warn('result', result);
    })
  }

  
  reloadUser() {
    if (localStorage.getItem('user')) {
      this.isUserLoggedIn.next(true);
      this.router.navigate(['donorhome']);

    }
  }

  userLogin(data: userLogin) {
    console.warn(data);
    this.http.get(`http://localhost:3000/user?email=${data.email}&password=${data.password} `,
      { observe: 'response' }
    ).subscribe((result: any) => {
      console.warn(result)
      if(result && result.body && result.body.length){
        console.warn("User Loggen in")
        localStorage.setItem('userLogin', JSON.stringify(result.body));
        this.router.navigate(['home']); 
      }
      else{
        console.warn("Invalid credentials")
        this.isLoginError.emit(true)
      }
    })

  }
}
