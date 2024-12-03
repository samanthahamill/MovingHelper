import { Component, signal } from '@angular/core';
import { LIST_FULL_PATH, NEW_BOX_FULL_PATH } from '../../app.routes';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  nestedItems?: Array<MenuItem>;
}

@Component( {
  selector: 'app-popout-sidenav',
  standalone: true,
  imports: [
    MatListModule, MatIconModule, NgFor, RouterModule
  ],
  templateUrl: './popout-sidenav.component.html',
  styleUrl: './popout-sidenav.component.css'
} )
export class PopoutSidenavComponent {

  menuItems = signal<Array<MenuItem>>( [
    {
      icon: "dashboard",
      label: "See Current Boxes",
      route: LIST_FULL_PATH
    },
    {
      icon: "add",
      label: "Add a New Box",
      route: NEW_BOX_FULL_PATH
    },
  ] )

}
