import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: [];

  constructor(private data: DataService, 
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe( res => {
      console.log('res',res)
      this.onGetMovieData(res);
      
    })  
  }

  onGetMovieData(res) {
      this.data.getMovieslist(res).subscribe((res: any)=>{
      this.movie = res.results;
    })
  }

}
