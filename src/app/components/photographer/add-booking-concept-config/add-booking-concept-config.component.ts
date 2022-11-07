import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { BookingConceptConfig } from 'src/app/models/booking-concept-config/booking-concept-config';
import { Concept } from 'src/app/models/concept/concept';
import { User } from 'src/app/models/user/user';
import { ConceptsService } from 'src/app/services/concepts.service';
import { AuthHelper } from 'src/app/services/helpers/auth-helper.service';
import { PhotographerService } from 'src/app/services/photographer.service';

@Component({
  selector: 'app-add-booking-concept-config',
  templateUrl: './add-booking-concept-config.component.html',
  styleUrls: ['./add-booking-concept-config.component.css']
})
export class AddBookingConceptConfigComponent implements OnInit {
  form: FormGroup;
  user: User;
  concepts: Concept[];

  constructor(
    private formBuilder: FormBuilder,
    private authHelper: AuthHelper,
    private conceptService: ConceptsService,
    private dialogRef: MatDialogRef<AddBookingConceptConfigComponent>,
  ) { }

  ngOnInit(): void {
    this.user = this.authHelper.getUser();
    this.form = this.formBuilder.group({
      photographerId: [this.user.id, [Validators.required]],
      conceptId: ['', [Validators.required]],
      durationConfig: ['', [Validators.required]]
    });
    
    this.conceptService.getAllConcept().subscribe(
      concepts => {        
        this.concepts = concepts;
        this.form.controls.conceptId.setValue(concepts[0].id);
      }
    )
  }

  public onSubmit(): void {
    this.dialogRef.close(this.form);
  }
}
