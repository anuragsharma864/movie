import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  actor: object;
  actorMovies: [];
  id: any;

  constructor(private data: DataService, private router: ActivatedRoute) { }

  ngOnInit(): void {
  this.id = this.router.params.subscribe(res=>{
    this.getActorDetails(res);
  })

  this.id = this.router.params.subscribe(res=>{
    this.getActorMovies(res);
  })
  }

  getActorDetails(res){
    this.data.getActorDetail(res).subscribe(res=>{
      this.actor = res;
    })
  }

  getActorMovies(res){
    this.data.getActorMovies(res).subscribe((res: any)=>{
      this.actorMovies = res.cast;
    })
  }

}
