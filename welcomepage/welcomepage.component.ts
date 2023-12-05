import { Component } from '@angular/core';
import { Clothes, Stationary } from '../data-type';
import { StationaryService } from '../services/stationary.service';
import { ClothesService } from '../services/clothes.service';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent {

  clotheslist:undefined | Clothes[] 
  stationarylist:undefined | Stationary[]

  c_count:number=0;
  s_count:number=0;

  constructor(private stationary:StationaryService,private clothes:ClothesService){}

  ngOnInit():void{
    this.stationary.productList().subscribe((result)=>{
      console.warn(result);
      this.stationarylist=result;
      

    this.clothes.productList().subscribe((result1)=>{
      console.warn(result1);
      this.clotheslist=result1;
    })

    })
   
  }
}
