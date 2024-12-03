import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { PopoutSidenavComponent } from "./components/popout-sidenav/popout-sidenav.component"; 
import { RouterModule } from '@angular/router';
import { CountdownTimerComponent } from "./components/countdown-timer/countdown-timer.component";
import { TimerService } from './services/timer.service';

@Component({
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
    CountdownTimerComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("sidenav") sidenav!: MatSidenav;
  
  title = 'box-app';

  constructor(protected router: Router, protected timerService: TimerService)
  {
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.sidenav.close();
      }
    });
  }
}
 