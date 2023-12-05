import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothesService } from '../services/clothes.service';
import { StationaryService } from '../services/stationary.service';
import { Clothes, Stationary } from '../data-type';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  clothesData:undefined|Clothes;
  stationaryData:undefined|Stationary;

  constructor(private route:Router,private activeRoute:ActivatedRoute,private clothes:ClothesService,private stationary:StationaryService){}

  ngOnInit(){
    let pid = this.activeRoute.snapshot.paramMap.get('id');
    console.warn(pid);
    

    pid && this.stationary.getProduct(pid).subscribe((result)=>{
      console.warn(result);
      this.stationaryData=result;
      
    })

    pid && this.clothes.getProduct(pid).subscribe((result)=>{
      console.warn(result);
      this.clothesData=result;
      
    })


  }

  dialog(val:string){
    console.warn(val);
    this.route.navigate([`dialog/${val}`])
  }

  


}
