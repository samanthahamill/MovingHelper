import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxFormComponent } from '../box-form/box-form.component';
import { BoxListComponent } from '../box-list/box-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [BoxFormComponent, BoxListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule,
  ],
})
export class BoxModule {}
