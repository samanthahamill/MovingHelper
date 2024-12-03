import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  NEW_BOX_FULL_PATH,
  EDIT_BOX_FULL_PATH,
  LIST_FULL_PATH
 } from '../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Home';
  newBoxPath = NEW_BOX_FULL_PATH;
  editBoxPath = EDIT_BOX_FULL_PATH;
  listPath = LIST_FULL_PATH;
}
