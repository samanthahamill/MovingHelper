import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  NEW_BOX_FULL_PATH,
  EDIT_BOX_FULL_PATH,
  LIST_FULL_PATH,
  NEW_MOVE_FULL_PATH
 } from '../app.routes';
import { CountdownTimerComponent } from "../components/countdown-timer/countdown-timer.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CountdownTimerComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Home';
  newBoxPath = NEW_BOX_FULL_PATH;
  editBoxPath = EDIT_BOX_FULL_PATH;
  listPath = LIST_FULL_PATH;
  newMovePath = NEW_MOVE_FULL_PATH;

  targetDate?: Date = new Date('2025-12-25T00:00:00');
}
