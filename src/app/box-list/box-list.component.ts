import { Component, OnInit } from '@angular/core';
import { BoxService } from '../box/box.service';
import { Box, boxSizeToNumber } from '../models/box';
import { HomeComponent } from '../home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css'],
  standalone: true,
  imports: [
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
    RouterModule
  ]
})
export class BoxListComponent implements OnInit {
  boxes: Array<Box> = [];
  filteredBoxes: Array<Box> = [];
  sortOrder: string = "";

  constructor(private boxService: BoxService) {}

  ngOnInit(): void {
    this.boxes = this.boxService.getBoxes();
    this.filteredBoxes = this.boxes;
  }

  deleteBox(id: string): void {
    this.boxService.deleteBox(id);
  }

  deleteAllBoxes(): void {
    this.boxService.deleteAllBoxes();
  }

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();

    this.filteredBoxes = this.boxes.filter(box =>
      box.name.toLowerCase().includes(searchTerm)
    );

    this.sortProducts(this.sortOrder);
  }

  getFullImageUrl(baseUrl: string): string {
    return `assets/images/${baseUrl}`;
  }

  getDescription(description?: string): string {
    return description !== undefined ? `| ${description}` : "";
  }

  sortProducts(sortValue: string): void {
    this.sortOrder = sortValue;

    if (this.sortOrder === "sizeLowHigh") 
    {
      this.filteredBoxes.sort((a, b) => boxSizeToNumber(a.size) - boxSizeToNumber(b.size));
    } 
    else if (this.sortOrder === "sizeHighLow") 
    {
      this.filteredBoxes.sort((a, b) => boxSizeToNumber(b.size) - boxSizeToNumber(a.size));
    }
    else if (this.sortOrder === "roomAZ") 
    {
      this.filteredBoxes.sort((a, b) => a.associatedRoom.localeCompare( b.associatedRoom ));
    } 
    else if (this.sortOrder === "roomZA") 
    {
      this.filteredBoxes.sort((a, b) => b.associatedRoom.localeCompare( a.associatedRoom ));
    }
  }
}
