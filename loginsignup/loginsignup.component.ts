import { Component } from '@angular/core';
import { Clothes, Stationary } from '../data-type';
import { StationaryService } from '../services/stationary.service';
import { ClothesService } from '../services/clothes.service';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent {

  clotheslist:undefined | Clothes[] 
  stationarylist:undefined | Stationary[]
  productmessage:undefined | String;

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
  
  deleteStationary(id:number){
    console.warn("test id",id)
    this.stationary.deleteproduct(id).subscribe((result)=>{
      if(result){
        this.productmessage="Product deleted..!";
        this.stationary.productList().subscribe((result)=>{
          console.warn(result);
          this.stationarylist=result;
    
        this.clothes.productList().subscribe((result1)=>{
          console.warn(result1);
          this.clotheslist=result1;
        })
    
        })
      }
    })

    setTimeout(()=>{
        this.productmessage=undefined
    },3000)
  }

  
  deleteClothes(id:number){
    console.warn("test id",id)
    this.clothes.deleteproduct(id).subscribe((result)=>{
      if(result){
        this.productmessage="Product deleted..!";
        this.clothes.productList().subscribe((result)=>{
          console.warn(result);
          this.clotheslist=result;
    
        this.clothes.productList().subscribe((result1)=>{
          console.warn(result1);
          this.clotheslist=result1;
        })
    
        })
      }
    })

    setTimeout(()=>{
        this.productmessage=undefined
    },3000)
  }
  
}
