import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
 
 loader = false;
 nowPlaying: [];

  constructor(private data: DataService) { }

  ngOnInit() {
    
    this.loader = true;
    this.data.NowPlaying().subscribe((res:any)=>{
      
      this.loader = false;
      this.nowPlaying = res.results;
    })
  }
}
