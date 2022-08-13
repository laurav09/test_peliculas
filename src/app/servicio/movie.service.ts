import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../modelo/movie';

@Injectable({providedIn: 'root'})

export class MovieService {
  data:any
  constructor(private httpClient: HttpClient) { }
  
  search(str:string){
    return this.httpClient.get<Movie[]>('https://www.omdbapi.com/?apikey=d3f6c0ee&s='+str)
  }
  getByID(id:string){
    return this.httpClient.get<Movie[]>('https://www.omdbapi.com/?apikey=d3f6c0ee&i='+id)
  }
}