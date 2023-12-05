import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { StationaryService } from '../services/stationary.service';
import { Stationary } from '../data-type';

@Component({
  selector: 'app-donatestationary',
  templateUrl: './donatestationary.component.html',
  styleUrls: ['./donatestationary.component.css']
})
export class DonatestationaryComponent implements OnInit {

  stationary_count: number = 0;

  constructor(private stationary: StationaryService) { }
  addProductMessage: string | undefined;
  ngOnInit(): void {

  }

  submit(data: Stationary) {
    console.warn(data);

    if (data.quantity !== undefined && data.quantity < 0) {
      console.error('Quantity cannot be negative');
      this.addProductMessage = 'Please enter valid quantiy..!';
      setTimeout(() => { this.addProductMessage = undefined }, 3000);
      return;
  }

      this.stationary.addStationary(data).subscribe((result) => {
        console.warn(result);
        if (result) {
          this.addProductMessage = 'Product is added successfully';
        }
        setTimeout(() => { this.addProductMessage = undefined }, 3000);
      })
  }

}
