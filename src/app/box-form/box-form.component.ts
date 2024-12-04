import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, Validators, ReactiveFormsModule
} from '@angular/forms';
import { BoxService } from '../box/box.service';
import {
  Box, BoxSize, boxSizeToUrl
} from '../models/box';
import { Router, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { RoomType } from '../models/room';

@Component( {
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: [
    './box-form.component.scss'
  ],
  standalone: true,
  imports: [
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule
  ]
} )
export class BoxFormComponent implements OnInit {
  boxForm: FormGroup;
  listOfBoxTypes: Array<BoxSize> = Object.values( BoxSize ).filter( val => val != BoxSize.UNKNOWN );
  listOfRoomTypes: Array<RoomType> = Object.values( RoomType ).filter( val => val != RoomType.UNKNOWN );

  constructor(
    private formatBuilder: FormBuilder,
    private boxService: BoxService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.boxForm = this.formatBuilder.group( {
      name: [
        "Box number " + ( this.boxService.getBoxCount() + 1 )
      ],
      size: [
        '', Validators.required
      ],
      description: [
      ],
      associatedRoom: [
        '', Validators.required
      ],
    } );
  }

  ngOnInit(): void {
    this.boxForm = this.formatBuilder.group( {
      name: [
        "Box number " + ( this.boxService.getBoxCount() + 1 )
      ],
      size: [
        '', Validators.required
      ],
      description: [
      ],
      associatedRoom: [
        '', Validators.required
      ],
    } );

    // check if we can obtain an 'id' for our route. This is possible at the 'edit/{id}' endpoint
    const id = this.activatedRoute.snapshot.paramMap.get( 'id' );
    if ( id ) {
      const box = this.boxService.getBox( id );
      if ( box ) {
        this.boxForm.patchValue( box );
      }
    }
  }

  onSubmit() {
    if ( this.boxForm.valid ) {
      const box: Box = this.boxForm.value;

      if( box.description === "" || box.description === null )
      {
        box.description = undefined;
      }

      box.id = Date.now().toPrecision();
      box.image_url = boxSizeToUrl( box.size );
      box.creationDate = new Date( Date.now().valueOf() );

      const id = this.activatedRoute.snapshot.paramMap.get( 'id' );
      if ( id ) {
        this.boxService.updateBox( id, box );
      } else {
        this.boxService.addBox( box );
      }

      this.router.navigate( [
        '/list'
      ] );
    }
  }
}
