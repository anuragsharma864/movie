import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-popular-series',
  templateUrl: './popular-series.component.html',
  styleUrls: ['./popular-series.component.css']
})
export class PopularSeriesComponent implements OnInit {

  popularList: [];
  loader = false;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.loader = true;
    this.data.getPopularmovie().subscribe((res: any)=>{
      this.loader = false;
      this.popularList = res.results
    })
  }

}
