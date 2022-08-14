import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../modelo/movie';

@Injectable({providedIn: 'root'})

export class MovieService {
  apiKey='8282085b'
  constructor(private httpClient: HttpClient) { }
  
  search(str:string){
    return this.httpClient.get<Movie[]>('https://www.omdbapi.com/?apikey='+this.apiKey+'&s='+str)
  }
  getByID(id:string){
    return this.httpClient.get<Movie>('https://www.omdbapi.com/?apikey='+this.apiKey+'&i='+id)
  }
}