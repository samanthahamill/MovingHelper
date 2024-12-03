import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoxFormComponent } from './box-form/box-form.component';
import { BoxListComponent } from './box-list/box-list.component';

const LIST_PATH = "list";
export const LIST_FULL_PATH = "/" + LIST_PATH;
const NEW_BOX_PATH = "box";
export const NEW_BOX_FULL_PATH = "/" + NEW_BOX_PATH;
const EDIT_BOX_PATH = "edit/:id";
export const EDIT_BOX_FULL_PATH = "/" + EDIT_BOX_PATH;

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: LIST_PATH, component: BoxListComponent },
  { path: NEW_BOX_PATH, component: BoxFormComponent },
  { path: EDIT_BOX_PATH, component: BoxFormComponent },
];