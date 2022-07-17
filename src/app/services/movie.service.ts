import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  request = '';

constructor(private http: HttpClient) { }

  getMovies(name: string){
    this.request = 'https://api.themoviedb.org/3/search/movie?api_key=b9c39fa077e24f176926cb53a6eb4da2&query=';
    this.request = this.request.concat(name);
    return(this.http.get(this.request));
  }

}
