import { Component, } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TimerService } from '../../../services/timer/timer.service';

@Component( {
  selector: 'app-countdown-timer-popout',
  standalone: true,
  imports: [
    CountdownTimerComponent,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './countdown-timer-popout.component.html',
  styleUrl: "./countdown-timer-popout.component.scss"
} )
export class CountdownTimerPopoutComponent  {
  constructor( protected timerService: TimerService )
  {

  }
}
