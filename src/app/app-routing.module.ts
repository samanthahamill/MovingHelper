import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoxFormComponent } from './box-form/box-form.component';
import { BoxListComponent } from './box-list/box-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: BoxListComponent },
  { path: 'new', component: BoxFormComponent },
  { path: 'edit/:id', component: BoxFormComponent },
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
