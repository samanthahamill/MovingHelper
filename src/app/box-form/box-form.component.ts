import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { BoxService } from '../box/box.service';
import { Box } from '../models/box';
import { Router, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.css'],
  standalone: true,
  imports: [
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class BoxFormComponent implements OnInit {
  boxForm: FormGroup;

  constructor(
    private formatBuilder: FormBuilder,
    private boxService: BoxService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.boxForm = this.formatBuilder.group({
      name: [this.boxService.getBoxCount()],
      size: ['', Validators.required],
      description: [''],
      roomContents: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    // this.boxForm = this.formatBuilder.group({
    //   id: [this.boxService.getBoxCount()], // TODO - auto fill with the current box count
    //   name: ['', Validators.required],
    //   size: ['', Validators.required],
    //   description: [''],
    //   roomContents: ['', Validators.required],
    // });

    // check if we can obtain an 'id' for our route. This is possible at the 'edit/{id}' endpoint
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      const box = this.boxService.getBox(id);
      if (box) {
        this.boxForm.patchValue(box);
      }
    }
  }

  onSubmit() {
    if (this.boxForm.valid) {
      const box: Box = this.boxForm.value;

      const id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.boxService.updateBox(id, box);
      } else {
        this.boxService.addBox(box);
      }

      this.router.navigate(['/list']);
    }
  }
}
