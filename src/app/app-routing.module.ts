import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentsComponent } from './tournaments/tournaments.component';

const routes: Routes = [
  // {path: '', redirectTo: '', pathMatch: 'full' },
  {path:'tournaments',component:TournamentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
