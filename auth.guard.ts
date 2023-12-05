import { CanActivate, CanActivateFn ,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { DonorService } from './services/donor.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{
  constructor(private donorservice:DonorService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
    if(localStorage.getItem('donor')){
      return true;
    }

  return this.donorservice.isDonorLoggedIn; 
  }

};
