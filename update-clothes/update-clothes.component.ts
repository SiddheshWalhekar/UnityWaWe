import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ClothesService } from '../services/clothes.service';
import { Clothes } from '../data-type';

@Component({
  selector: 'app-update-clothes',
  templateUrl: './update-clothes.component.html',
  styleUrls: ['./update-clothes.component.css']
})
export class UpdateClothesComponent implements OnInit{
  
  clothesData : undefined | Clothes
  productMessage : undefined | String
  constructor(private route : ActivatedRoute,private clothes : ClothesService){}

  ngOnInit(){
    let pid = this.route.snapshot.paramMap.get('id');
    pid && this.clothes.getProduct(pid).subscribe((data)=>{
    console.warn(data)
    this.clothesData=data;
    })
  }

  submit(data:Clothes){
    console.warn(data);
    if(this.clothesData){
      data.id =this.clothesData.id;
    }
    this.clothes.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productMessage="Details updated..!"
      }
    });
    setTimeout(()=>{
      this.productMessage=undefined
    },3000)
  }
}
