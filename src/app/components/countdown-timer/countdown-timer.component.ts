import { Component, Input, OnInit, OnDestroy  } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.css'
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() targetDate!: Date;

  private subscription!: Subscription;
  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;
  
  ngOnInit(): void {
    this.subscription = interval(1000).pipe(
      map(() => {
        const now = new Date().getTime();
        const distance = this.targetDate.getTime() - now;
        return distance;
      })
    ).subscribe(distance => {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      })
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
