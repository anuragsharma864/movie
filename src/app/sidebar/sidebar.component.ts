import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  genres = [];
  loader = false;

  constructor(private data: DataService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.loader = true;
    this.data.getMoviesCat().subscribe((res: any)=>{
      this.loader = false;
      this.genres = res.genres;
    })
  }
 
}
      
