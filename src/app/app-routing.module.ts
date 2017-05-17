import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PollsComponent } from './polls/polls.component';
import { MyPollsComponent } from './my-polls/my-polls.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    path: 'polls',
    component: PollsComponent,
  },
  {
    path: 'mypolls',
    component: MyPollsComponent,
  },
  {
    path: '',
    redirectTo: '/polls',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
