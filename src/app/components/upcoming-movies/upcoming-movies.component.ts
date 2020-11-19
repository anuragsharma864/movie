import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {

  upComingMovie: [];
  loader = false;
  
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.loader = true;
  this.data.getUpcomingMovie().subscribe((res: any)=>{
    this.loader = false;
    this.upComingMovie = res.results;
  })
  }

}
