import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClothesService } from '../services/clothes.service';
import { StationaryService } from '../services/stationary.service';
import { Clothes } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchResult:undefined|Clothes[];
  constructor(private route:Router,private clothes:ClothesService,private stationary:StationaryService){

  }
  ngOnInit(){
   this.route.events.subscribe((val)=>{
    console.warn(val)
   })     
  }

  logout(){
    localStorage.removeItem('donor');
    this.route.navigate(['/'])
  }


  searchProduct(query:KeyboardEvent){
    const element = query.target as HTMLInputElement;
    this.clothes.searchproducts(element.value).subscribe((result)=>{
     console.warn(result);   
     this.searchResult=result;

     if(result===undefined){
    this.stationary.searchproducts(element.value).subscribe((result)=>{
        console.warn(result);  
        
     })
     }     
    })
  }


  hideSearch(){
   this.searchResult=undefined;   
  }

  submitSearch(val:string){
    console.warn(val);
    this.route.navigate([`search/${val}`])
  }
}
