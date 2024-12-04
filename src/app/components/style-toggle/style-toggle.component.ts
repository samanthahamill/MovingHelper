import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component( {
  selector: 'app-style-toggle',
  standalone: true,
  imports: [ MatSlideToggleModule, MatMenuModule, MatIconModule ],
  templateUrl: './style-toggle.component.html',
  styleUrl: './style-toggle.component.scss'
} )
export class StyleToggleComponent {
}
