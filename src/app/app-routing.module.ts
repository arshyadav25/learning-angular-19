import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { CommonViewComponent } from './common-view/common-view.component';
import { CommonComponent } from './common/common.component';

const routes: Routes = [
 // {path: '', redirectTo: 'tournaments', pathMatch: 'full' },
 {path:'',component:TournamentsComponent},
  //{path:'tournaments',component:TournamentsComponent},
  {path:'common',component:CommonViewComponent},
  {path:'common1',component:CommonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
