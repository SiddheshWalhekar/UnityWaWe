import { Component,OnInit } from '@angular/core';
import { StationaryService } from '../services/stationary.service';
import { ClothesService } from '../services/clothes.service';
import { Clothes, Stationary } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  clotheslist:undefined | Clothes[] 
  stationarylist:undefined | Stationary[]
  productmessage:undefined | String;
  Clothes:undefined | Clothes[] ;
  Stationary:undefined | Stationary[];

  constructor(private clothes:ClothesService,private stationary:StationaryService){}

  ngOnInit():void{
    
    this.stationary.trendyproducts().subscribe((data)=>{
      this.Stationary=data;

    });

    this.clothes.trendyproducts().subscribe((data)=>{
      this.Clothes=data;

    });

   
    
  }

  
}
