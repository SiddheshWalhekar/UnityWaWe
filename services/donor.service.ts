import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp, Login } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  isDonorLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError=new EventEmitter<boolean>(false)

  constructor(private http: HttpClient, private router: Router) { }
 
  SignUp(data: SignUp) {
    this.http.post(`http://localhost:3000/donor `,
      data,
      { observe: 'response' }).subscribe((result) => {
      if(result){

      //this.isDonorLoggedIn.next(true);
      localStorage.setItem('donor', JSON.stringify(result.body));
      this.router.navigate(['donorhome']);
      }
      console.warn('result', result);
    })
  }

  reloadDonor() {
    if (localStorage.getItem('donor')) {
      this.isDonorLoggedIn.next(true);
      this.router.navigate(['donorhome']);

    }
  }

  userLogin(data: Login) {
    console.warn(data);
    this.http.get(`http://localhost:3000/donor?email=${data.email}&password=${data.password} `,
      { observe: 'response' }
    ).subscribe((result: any) => {
      console.warn(result)
      if(result && result.body && result.body.length){
        console.warn("User Loggen in")
        localStorage.setItem('donor', JSON.stringify(result.body));
        this.router.navigate(['donorhome']); 
      }
      else{
        console.warn("Invalid credentials")
        this.isLoginError.emit(true)
      }
    })

  }
}
