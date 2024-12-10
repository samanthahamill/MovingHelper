import { Component, inject } from '@angular/core';
import { ThemeManagerService } from '../../services/theme-manager/theme-manager.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component( {
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
} )
export class ThemeToggleComponent {
  themeManagerService = inject( ThemeManagerService );
  isDark$ = this.themeManagerService.isDark$;

  changeTheme( theme: string ) {
    this.themeManagerService.changeTheme( theme );
  }
}
