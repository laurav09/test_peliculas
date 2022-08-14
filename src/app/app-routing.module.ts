import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./movies-info/movies-info.module').then((m)=>m.MoviesInfoModule)
  },
  {
    path:'detail',
    loadChildren:()=>import('./detail/detail.module').then((m)=>m.DetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
