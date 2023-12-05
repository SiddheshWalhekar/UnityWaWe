import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { DonorComponent } from './donor/donor.component';
import { HomeComponent } from './home/home.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { DonorHomeComponent } from './donor-home/donor-home.component';
import { DonatestationaryComponent } from './donatestationary/donatestationary.component';
import { DonateclothesComponent } from './donateclothes/donateclothes.component';
import { UpdateStationaryComponent } from './update-stationary/update-stationary.component';
import { UpdateClothesComponent } from './update-clothes/update-clothes.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DonorComponent,
    HomeComponent,
    LoginsignupComponent,
    WelcomepageComponent,
    UserloginComponent,
    DonorHomeComponent,
    DonatestationaryComponent,
    DonateclothesComponent,
    UpdateStationaryComponent,
    UpdateClothesComponent,
    SearchComponent,
    ProductDetailsComponent,
    DialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
