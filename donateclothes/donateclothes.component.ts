import { Component } from '@angular/core';
import { Clothes } from '../data-type';
import { StationaryService } from '../services/stationary.service';
import { ClothesService } from '../services/clothes.service';

@Component({
  selector: 'app-donateclothes',
  templateUrl: './donateclothes.component.html',
  styleUrls: ['./donateclothes.component.css']
})
export class DonateclothesComponent {

  clothes_count: number=0;

  constructor(private clothes: ClothesService) { }
  addProductMessage: string | undefined;
  ngOnInit(): void {

  }
  
  submit(data: Clothes) {
    console.warn(data);

    if (data.quantity !== undefined && data.quantity < 0) {
      console.error('Quantity cannot be negative');
      this.addProductMessage = 'Please enter valid quantiy..!';
      setTimeout(() => { this.addProductMessage = undefined }, 3000);
      return;
  }

      this.clothes.addClothes(data).subscribe((result) => {
        console.warn(result);
        if (result) {
          this.addProductMessage = 'Product is added successfully';
        }
        setTimeout(() => { this.addProductMessage = undefined }, 3000);
      })
      
  }
}
