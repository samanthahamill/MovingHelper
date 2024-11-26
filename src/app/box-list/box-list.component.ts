import { Component, OnInit } from '@angular/core';
import { BoxService } from '../box/box.service';
import { Box } from '../models/box';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css'],
})
export class BoxListComponent implements OnInit {
  boxes: Box[] = [];

  constructor(private boxService: BoxService) {}

  ngOnInit(): void {
    this.boxes = this.boxService.getBoxes();
  }

  deleteBox(id: string): void {
    this.boxService.deleteBox(id);
  }

  deleteAllBoxes(): void {
    this.boxService.deleteAllBoxes();
  }
}
