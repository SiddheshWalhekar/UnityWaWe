import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StationaryService } from '../services/stationary.service';
import { Stationary } from '../data-type';

@Component({
  selector: 'app-update-stationary',
  templateUrl: './update-stationary.component.html',
  styleUrls: ['./update-stationary.component.css']
})
export class UpdateStationaryComponent implements OnInit {

  stationaryData : undefined | Stationary
  productMessage : undefined | String
  constructor(private route : ActivatedRoute, private stationary:StationaryService){}

  ngOnInit(){
    let pid = this.route.snapshot.paramMap.get('id');
    pid && this.stationary.getProduct(pid).subscribe((data)=>{
    console.warn(data);
    this.stationaryData=data  
    })
  }

  submit(data:Stationary){
    console.warn(data);
    if(this.stationaryData){
      data.id =this.stationaryData.id;
    }
    this.stationary.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productMessage="Details updated..!"
      }
    });
    setTimeout(()=>{
      this.productMessage=undefined
    },3000)

    
  }
}

