import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.interface';
import { Movies } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  isDetailOpen = false;
  poster: string;
  movie: Movie;
  results: Movies = [];

  constructor(private movieService: MovieService) {}

    search(searchTerm) {
      if(searchTerm.target.value !== ''){
        this.movieService.getMovies(searchTerm.target.value).subscribe((data: any) => {
          this.results = data.results;
      });
      }
    }

    showResults(){
      if((this.results.length === 0)){
        return 'hidden';
      }else{
        return 'visible';
      }
    }

    showDetails(result){
      this.movie = {
        title:result.title,
        releaseDate:result.release_date,
        poster:result.poster_path,
        originalLanguage:result.original_language,
        overview:result.overview };
      this.poster = 'https://image.tmdb.org/t/p/original/' + this.movie.poster;
      this.isDetailOpen = true;
    }

    updateDetailState(){
      this.isDetailOpen = false;
    }

}
