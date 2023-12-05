import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonorComponent } from './donor/donor.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DonorHomeComponent } from './donor-home/donor-home.component';
import { AuthGuard } from './auth.guard';
import { DonatestationaryComponent } from './donatestationary/donatestationary.component';
import { DonateclothesComponent } from './donateclothes/donateclothes.component';
import { UpdateClothesComponent } from './update-clothes/update-clothes.component';
import { UpdateStationaryComponent } from './update-stationary/update-stationary.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DialogComponent } from './dialog/dialog.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'donor', component: DonorComponent
  },
  {
    path: '',component:WelcomepageComponent
  },
  {
    path:'login',component:UserloginComponent
  },
  {
    path:'donorhome',component:DonorHomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'donatestationary',component:DonatestationaryComponent
  },
  {
    path:'list' ,component:LoginsignupComponent
  },
  {
    path:'donateclothes',component:DonateclothesComponent
  },
  {
    path:'updateclothes/:id',component:UpdateClothesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'updatestationary/:id',component:UpdateStationaryComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'search/:query',component:SearchComponent,
  },
  {
    path:'details/:id',component:ProductDetailsComponent
  },
  {
    path:'dialog/:id',component:DialogComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
