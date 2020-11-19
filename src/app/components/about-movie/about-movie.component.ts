import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-movie',
  templateUrl: './about-movie.component.html',
  styleUrls: ['./about-movie.component.css']
})
export class AboutMovieComponent implements OnInit {

  id: any;
  movieDetails: object;
  similarMovies: [];
  movieCaste: [];

  constructor( private data: DataService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.params.subscribe(res=>{
      console.log('ress', res)
      this.onMovieDetails(res)
    });

    this.id = this.router.params.subscribe(res=>{
      this.onMovieDetails(res)
    })

    this.id = this.router.params.subscribe(res=>{
      this.onMovieDetails(res)
    })

  

  
    
    
  }

  onMovieDetails(res){
    this.data.getmovieDetails(res).subscribe((res: object)=>{
      this.movieDetails = res;
    })

    this.data.getSimilarMovie(res).subscribe((res:any)=>{
      this.similarMovies = res.results;
    })

    this.data.getMovieCaste(res).subscribe((res: any)=>{
      this.movieCaste = res.cast
    })

  }

}
