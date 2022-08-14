import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Movie } from '../modelo/movie';
import { MovieService } from '../servicio/movie.service';

@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.sass','../shared/common-styles.sass']
})
export class MoviesInfoComponent implements OnInit {

  dataSource: any
  searchText:string=''
  displayedColumns: string[] = ['poster','title', 'year', 'imdbID'];
  constructor(private movieService:MovieService, private router: Router) { }
  ngOnInit(): void {
  }
  search(){
    this.movieService.search(this.searchText).subscribe((data)=>{
      let dataJson=JSON.parse(JSON.stringify(data))
      this.dataSource=new MatTableDataSource<Movie>(dataJson.Search)
    })
    
  }
  verDetalles(movieID:string){
    this.router.navigate(['detail'],{queryParams:{movieID}})
  }
}
