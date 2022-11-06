import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Concept } from 'src/app/models/concept/concept';
import { User } from 'src/app/models/user/user';
import { UserRole } from 'src/app/models/user/user-role';
import { BookingServiceService } from 'src/app/services/booking-service.service';
import { ConceptsService } from 'src/app/services/concepts.service';
import { AuthHelper } from 'src/app/services/helpers/auth-helper.service';
import { FormHelper } from 'src/app/services/helpers/form-helper.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  form: FormGroup;
  user: User;
  photographer: User;
  concepts: Concept[];
  isDisable: boolean = false;

  bookingDateFilter = (d: Date | null): boolean => {
    const date = (d || new Date()).getDate();
    // Prevent Saturday and Sunday from being selected.
    return date >= new Date().getDate();
  };

  private durations = [
    { conceptId: 1, durationConfig: '1:2:3' },
    { conceptId: 2, durationConfig: '1:2.5:3:4' },
    { conceptId: 3, durationConfig: '1:2' },
    { conceptId: 4, durationConfig: '2:5:7' },
    { conceptId: 5, durationConfig: '1' },
  ];

  durationConfigs: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private authHelper: AuthHelper,
    private route: ActivatedRoute,
    private conceptService: ConceptsService,
    private bookingService: BookingServiceService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.user = this.authHelper.getUser();

    this.photographer = this.route.snapshot.data.photographer;

    if(!this.photographer){
      this.router.navigate(["notfound"], {skipLocationChange: true})
    }

    this.conceptService.getAllConcept().subscribe((data) => {
      this.concepts = data;
      this.form.controls.conceptId.setValue(data[0].id);
      this.setDuration(this.form.controls.conceptId.value);
    });

    this.form = this.formBuilder.group({
      customerId: [this.user.id],
      photographerId: [this.photographer.id],      
      conceptId: ['', [Validators.required]],
      duration: ['', Validators.required],
      location: ['', Validators.required],
      note: [''],
      bookingDay: [''],
      bookingTime: [''],
    });
  }

  setDuration(conceptId: number) {
    let duration = this.durations.find((d) => d.conceptId == conceptId);
    console.log(duration);
    this.durationConfigs = duration?.durationConfig.split(':')!;
  }

  onConceptChange(change: MatSelectChange) {
    this.setDuration(change.value);
  }

  onSubmit(): void {
    console.log(this.form.value);
      
      this.bookingService.createBooking(this.form.value).subscribe(
        response => console.log(`${response.status} ${response.statusText}`),
        error => console.log(error)
      );
  }
}
