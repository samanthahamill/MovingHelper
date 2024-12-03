import { Injectable } from '@angular/core';
import { Box } from '../models/box';

const BOXES_STRING: string = "boxes";

@Injectable( { providedIn: 'root', } )
export class BoxService {
  private boxes: Box[] = [
  ];

  constructor() {
    const savedBoxes = localStorage.getItem( BOXES_STRING );
    this.boxes = savedBoxes ? JSON.parse( savedBoxes ) : [
    ];
  }

  getBoxCount(): number {
    return this.boxes.length;
  }

  // CRUD
  getBoxes(): Box[] {
    return this.boxes;
  }

  getBox( id: string ): Box | undefined {
    return this.boxes.find( ( res ) => res.id === id );
  }

  addBox( box: Box ): void {
    box.id = Date.now().toString();
    this.boxes.push( box );
    localStorage.setItem( BOXES_STRING, JSON.stringify( this.boxes ) );
  }

  deleteBox( id: string ): void {
    const index = this.boxes.findIndex( ( res ) => res.id === id );
    if ( index !== undefined ) {
      this.boxes.splice( index, 1 );
    }
    localStorage.setItem( BOXES_STRING, JSON.stringify( this.boxes ) );
  }

  deleteAllBoxes(): void {
    this.boxes = [
    ];
    localStorage.setItem( BOXES_STRING, JSON.stringify( this.boxes ) );
  }

  updateBox( id: string, updatedBox: Box ): void {
    const index = this.boxes.findIndex( ( res ) => res.id === id );
    updatedBox.id = id;

    this.boxes[index] = updatedBox;
    localStorage.setItem( BOXES_STRING, JSON.stringify( this.boxes ) );
  }
}
