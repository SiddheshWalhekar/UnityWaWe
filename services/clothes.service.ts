import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clothes } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  constructor(private http:HttpClient) { }

  addClothes(data:Clothes){
  return  this.http.post('http://localhost:3000/clothes',data);

  }

  productList(){
    return this.http.get<Clothes[]>('http://localhost:3000/clothes');
  }

  deleteproduct(id:number){
    return this.http.delete(`http://localhost:3000/clothes/${id}`)
  }
  getProduct(id:String){
    return this.http.get<Clothes>(`http://localhost:3000/clothes/${id}`);

  }

  updateProduct(product:Clothes){
      return this.http.put<Clothes>( `http://localhost:3000/clothes/${product.id}`,product);
  }

  trendyproducts(){
    return this.http.get<Clothes[]>( "http://localhost:3000/clothes");
  }

  searchproducts(query:string){
    return this.http.get<Clothes[]>( `http://localhost:3000/clothes?q=${query}`);
  }

  dialog(product:Clothes){
    return this.http.put<Clothes>( `http://localhost:3000/clothes/${product.id}`,product);
}

}

