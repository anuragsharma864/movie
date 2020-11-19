import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 
   apiKey = 'fed69657ba4cc6e1078d2a6a95f51c8c';
  
  constructor(private http: HttpClient) { }


  getMoviesCat(){
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + this.apiKey)
  }

  getlatestMovie() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + this.apiKey)
 
  }

  getPopularmovie(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this.apiKey )
   
  }

  getUpcomingMovie(){
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + this.apiKey)
  }

  NowPlaying(){
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.apiKey);
  }

  getVideo(){
    return this.http.get('https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=' + this.apiKey);
  }

  getMovieslist(data: any){
    return this.http.get('https://api.themoviedb.org/3/genre/'+ data.id +'/movies?api_key=' + this.apiKey);
  }

  getmovieDetails(data: any){
    return this.http.get('https://api.themoviedb.org/3/movie/'+ data.id + '?api_key=' + this.apiKey);
  }

  getSimilarMovie(data: any){
    return this.http.get('https://api.themoviedb.org/3/movie/'+ data.id + '/similar?api_key=' + this.apiKey)
  }

  getMovieCaste(data: any){
    return this.http.get('https://api.themoviedb.org/3/movie/'+ data.id +'/credits?api_key=' + this.apiKey);
  }

  getActorDetail(data: any){
    return this.http.get('https://api.themoviedb.org/3/person/' + data.id + '?api_key=' + this.apiKey)
  }

  getActorMovies(data: any){
    return this.http.get('https://api.themoviedb.org/3/person/'+ data.id +'/movie_credits?api_key=' + this.apiKey)
  }

  getSeacrhMovies(Name: string){
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey)
  }
  search(searchText) {
    const param = {
      api_key: this.apiKey,
      query: searchText
    }
    return this.http.get('https://api.themoviedb.org/3/search/movie', {params: param})
  }
  
  
  }


