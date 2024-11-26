import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoxService } from '../box/box.service';
import { Box } from '../models/box';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.css'],
})
export class BoxFormComponent implements OnInit {
  boxForm: FormGroup = new FormGroup({});

  constructor(
    private formatBuilder: FormBuilder,
    private boxService: BoxService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.boxForm = this.formatBuilder.group({
      // Note that each of the names here must be the same as the formControlName in .html
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

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
