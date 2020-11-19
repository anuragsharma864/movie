import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchMovie: [];
  Name:string;

  constructor(private data: DataService) { }

  ngOnInit(): void {


  }
  getSearchMovie(){
    this.data.getSeacrhMovies(this.Name).subscribe((res: any)=>{
      this.searchMovie = res.results
      console.log('resss',res)
    })
  }

}
