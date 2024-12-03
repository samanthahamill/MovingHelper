import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private targetDate: Date;

  constructor() {
    this.targetDate = new Date('2025-12-25T00:00:00');
  }

  // CRUD
  getTargetDate():Date {
    return this.targetDate;
  }

  setTargetDate(date: Date): void {
   // TODO - implement
  }

  changeTargetDate(date: Date): void {
    // TODO - implement
  }
}
 