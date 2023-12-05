import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stationary } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class StationaryService {
 
  constructor(private http:HttpClient) { }

  addStationary(data:Stationary){
  return  this.http.post('http://localhost:3000/stationary',data);
  
  }

  productList(){
    return this.http.get<Stationary[]>('http://localhost:3000/stationary');
     }

  deleteproduct(id:number){
    return this.http.delete(`http://localhost:3000/stationary/${id}`)
  }

  getProduct(id:String){
    return this.http.get<Stationary>(`http://localhost:3000/stationary/${id}`);

  }

  updateProduct(product:Stationary){
    return this.http.put<Stationary>(`http://localhost:3000/stationary/${product.id}`,product)
  }

  trendyproducts(){
    return this.http.get<Stationary[]>( "http://localhost:3000/stationary");
  }
  
  searchproducts(query:string){
    return this.http.get<Stationary[]>( `http://localhost:3000/stationary?q=${query}`);
  }
}


