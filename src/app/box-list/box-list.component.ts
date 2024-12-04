import { Component, OnInit } from '@angular/core';
import { BoxService } from '../box/box.service';
import { Box, boxSizeToNumber } from '../models/box';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


export enum SortOptions {
  NAME_LOW_HIGH = "Name: Low to High",
  NAME_HIGH_LOW = "Name: High to Low",
  SIZE_LOW_HIGH = "Size: Low to High",
  SIZE_HIGH_LOW = "Size: High to Low",
  ROOM_LOW_HIGH = "Room: Low to High",
  ROOM_HIGH_LOW = "Room: High to Low",
}

@Component( {
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: [
    './box-list.component.scss'
  ],
  standalone: true,
  imports: [
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
    RouterModule,
    MatIconModule
  ]
} )
export class BoxListComponent implements OnInit {
  boxes: Array<Box> = [];
  filteredBoxes: Array<Box> = [];
  sortOrder: SortOptions = SortOptions.NAME_LOW_HIGH;
  sortOptions: Array<SortOptions> = Object.values( SortOptions );

  constructor( private boxService: BoxService ) {}

  ngOnInit(): void {
    this.boxes = this.boxService.getBoxes();
    this.filteredBoxes = this.boxes;
  }

  deleteBox( id: string ): void {
    this.boxService.deleteBox( id );
  }

  deleteAllBoxes(): void {
    this.boxService.deleteAllBoxes();
  }

  applyFilter( event: Event ): void {
    let searchTerm = ( event.target as HTMLInputElement ).value;
    searchTerm = searchTerm.toLowerCase();

    this.filteredBoxes = this.boxes.filter( box =>
      box.name.toLowerCase().includes( searchTerm )
    );

    this.sortProducts( this.sortOrder );
  }

  getFullImageUrl( baseUrl: string ): string {
    return `assets/images/${baseUrl}`;
  }

  getDescription( description?: string ): string {
    return description !== undefined ? `| ${description}` : "";
  }

  sortProducts( sortValue: SortOptions ): void {
    this.sortOrder = sortValue;

    switch( this.sortOrder )
    {
      case SortOptions.SIZE_LOW_HIGH:
        this.filteredBoxes.sort( ( a, b ) => boxSizeToNumber( a.size ) - boxSizeToNumber( b.size ) );
        break;
      case SortOptions.SIZE_HIGH_LOW:
        this.filteredBoxes.sort( ( a, b ) => boxSizeToNumber( b.size ) - boxSizeToNumber( a.size ) );
        break;
      case SortOptions.ROOM_LOW_HIGH:
        this.filteredBoxes.sort( ( a, b ) => a.associatedRoom.localeCompare( b.associatedRoom ) );
        break;
      case SortOptions.ROOM_HIGH_LOW:
        this.filteredBoxes.sort( ( a, b ) => b.associatedRoom.localeCompare( a.associatedRoom ) );
        break;
      case SortOptions.NAME_HIGH_LOW:
        this.filteredBoxes.sort( ( a, b ) => a.name.localeCompare( b.name ) );
        break;
      case SortOptions.NAME_LOW_HIGH:
        this.filteredBoxes.sort( ( a, b ) => b.name.localeCompare( a.name ) );
        break;
      default:
        break;
    }
  }
}
