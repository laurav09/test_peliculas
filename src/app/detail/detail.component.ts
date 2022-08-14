import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../servicio/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  movie:any
  keys:string[]=[]
  constructor(private movieService:MovieService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.queryParamMap.get('movieID');
    this.movieService.getByID(id!).subscribe((data)=>{
      this.movie=data
      Object.keys(this.movie).forEach((prop)=> this.keys.push(prop));
    })
  }
}
