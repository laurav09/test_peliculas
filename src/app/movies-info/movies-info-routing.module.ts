import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesInfoComponent } from './movies-info.component';

const routes: Routes = [{ path: '', component: MoviesInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesInfoRoutingModule { }
