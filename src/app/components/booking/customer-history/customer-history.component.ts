import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs/internal/Subscription';
import { BookingHistory } from 'src/app/models/booking/booking-history';
@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css']
})
export class CustomerHistoryComponent implements OnInit {

  bookingHistoryData : BookingHistory[] = [];
  dataSource = new MatTableDataSource(this.bookingHistoryData);
  displayedColumns : string[] = ['Id','customerName', 'photographerName', 'conceptName', 'bookingDate', 'bookingRate', 'duration', 'location', 'note', 'state']

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

  }

  onCancel(id : string) {

  }

}
