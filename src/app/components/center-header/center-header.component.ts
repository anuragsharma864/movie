import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-center-header',
  templateUrl: './center-header.component.html',
  styleUrls: ['./center-header.component.css']
})
export class CenterHeaderComponent implements OnInit {
  searchList = [];
  constructor(private dataSerive: DataService) { }

  ngOnInit(): void {
  }

  onSearch(event) {
      this.dataSerive.search(event.target.value).subscribe((res: any) => {
          this.searchList = res.results;
      })
  }
}
