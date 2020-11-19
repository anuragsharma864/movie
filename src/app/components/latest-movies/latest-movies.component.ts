import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-latest-movies',
  templateUrl: './latest-movies.component.html',
  styleUrls: ['./latest-movies.component.css']
})
export class LatestMoviesComponent implements OnInit {
   
   latestMovie: [];  
   loader = false;
   
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.loader = true;
    this.data.getlatestMovie().subscribe((res: any)=>{
      this.loader = false;
      this.latestMovie = res.results;
    })
    

}

}
