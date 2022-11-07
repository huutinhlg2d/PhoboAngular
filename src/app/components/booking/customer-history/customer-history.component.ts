import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookingHistory } from 'src/app/models/booking/booking-history';
import { BookingServiceService } from 'src/app/services/booking-service.service';
import { AuthHelper } from 'src/app/services/helpers/auth-helper.service';
@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css']
})
export class CustomerHistoryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  bookingHistoryData : BookingHistory[] = []
  dataSource = new MatTableDataSource(this.bookingHistoryData);
  displayedColumns : string[] = ['id', 'photographerName', 'conceptName', 'bookingDate', 'bookingRate', 'duration', 'location', 'note', 'state','action']
  bookingState = true;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private bookingService: BookingServiceService,
    private authHelper : AuthHelper
  ) { }

  ngOnInit(): void {
    let customerId = this.authHelper.getUser().id
    this.bookingService.getAllCustomerHistory(customerId).subscribe(
      data => {
        let sortedData = this.bookingSort(data)
        this.bookingHistoryData.push(...sortedData)
        this.dataSource.paginator = this.paginator;
        console.log(data)
      }
    )

  }

  onCancel(booking : BookingHistory) {
    this.bookingService.declineRequest(booking.id).subscribe(
      data => {
        let index = this.bookingHistoryData.indexOf(booking);
        this.bookingHistoryData[index].bookingState = data;
        this.dataSource.data=this.bookingHistoryData;
        // this.dataSource._updateChangeSubscription();
      }
    )
  }

  bookingSort(bookingData:BookingHistory[] ) {
    return bookingData.sort((a, b) => Date.parse(b.bookingDate) - Date.parse(a.bookingDate))
  }

}
