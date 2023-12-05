import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ClothesService } from '../services/clothes.service';
import { StationaryService } from '../services/stationary.service';
import { Clothes, Stationary } from '../data-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchClothes:undefined|Clothes[];
  searchStationary:undefined|Stationary[];
  constructor(private activeroute:ActivatedRoute,private clothes:ClothesService,private stationary:StationaryService){}

    ngOnInit(){
    let query = this.activeroute.snapshot.paramMap.get('query');
    console.warn(query);

    query && this.stationary.searchproducts(query).subscribe((result)=>{
      this.searchStationary=result

    })

    query && this.clothes.searchproducts(query).subscribe((result)=>{
      this.searchClothes=result

    })

   
    }

  

}
