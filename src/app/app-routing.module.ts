import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { TechComponent } from './tech/tech.component'
import {SportsComponent} from './sports/sports.component'


const routes: Routes = [
  {path: '',component: TopheadlinesComponent},
  {path: 'tech',component: TechComponent},
  {path: 'Sports',component: SportsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
