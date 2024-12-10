import {
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterOutlet
} from '@angular/router';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavModule
} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { PopoutSidenavComponent } from "./components/popout-sidenav/popout-sidenav.component";
import { RouterModule } from '@angular/router';
import { CountdownTimerComponent } from "./components/countdown-timer/countdown-timer.component";
import { TimerService } from './services/timer/timer.service';
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";
import { CountdownTimerPopoutComponent } from "./components/countdown-timer/popout/countdown-timer-popout.component";

@Component( {
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    PopoutSidenavComponent,
    RouterModule,
    CountdownTimerComponent,
    ThemeToggleComponent,
    CountdownTimerPopoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
} )
export class AppComponent implements AfterViewInit {
  @ViewChild( "sidenav" ) sidenav!: MatSidenav;
  @ViewChild( "sidenavContainer", { static: false } )
    sideNavContainer!: MatSidenavContainer;

  title = 'moving-app';

  constructor( protected router: Router, protected timerService: TimerService )
  {
  }

  ngAfterViewInit() {
    this.router.events.subscribe( event => {
      if ( event instanceof NavigationEnd ) {
        this.sidenav.close();
      }
    } );

    // calling updateContentMargins on next tick, fixes the spacing.
    setTimeout( () => {
      this.sideNavContainer.updateContentMargins();
    }, 0 );
  }
}
