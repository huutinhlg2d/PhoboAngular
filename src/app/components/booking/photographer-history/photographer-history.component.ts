import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookingHistory } from 'src/app/models/booking/booking-history';
import { BookingServiceService } from 'src/app/services/booking-service.service';
import { AuthHelper } from 'src/app/services/helpers/auth-helper.service';

@Component({
  selector: 'app-photographer-history',
  templateUrl: './photographer-history.component.html',
  styleUrls: ['./photographer-history.component.css']
})
export class PhotographerHistoryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  bookingHistoryData : BookingHistory[] = []
  dataSource = new MatTableDataSource();
  displayedColumns : string[] = ['id', 'customerName', 'conceptName', 'bookingDate', 'bookingRate', 'duration', 'location', 'note', 'state','action']
  bookingState = true;
  constructor(
    private bookingService: BookingServiceService,
    private authHelper : AuthHelper
  ) { }

  ngOnInit(): void {
    let photographerId = this.authHelper.getUser().id;
    this.bookingService.getAllPhotographerHistory(photographerId).subscribe(
      data => {
        let sortedData = this.bookingSort(data);
        this.bookingHistoryData.push(...sortedData);
        this.dataSource.data=this.bookingHistoryData;
        this.dataSource.paginator = this.paginator;
        console.log(data);
      }
    )
  }


  bookingSort(bookingData:BookingHistory[] ) {
    return bookingData.sort((a, b) => Date.parse(b.bookingDate) - Date.parse(a.bookingDate));
  }

  onAccept(booking: BookingHistory){
    this.bookingService.acceptRequest(booking.id).subscribe(
      data => {
        let index = this.bookingHistoryData.indexOf(booking);
        this.bookingHistoryData[index].bookingState = data;
        console.log(this.bookingHistoryData[index]);
        this.dataSource.data = this.bookingHistoryData
        //
        this.dataSource._updateChangeSubscription();
      }
    )
  }

  onDeny(booking: BookingHistory) {
    this.bookingService.declineRequest(booking.id).subscribe(
      data => {
        let index = this.bookingHistoryData.indexOf(booking);
        this.bookingHistoryData[index].bookingState = data;
        console.log(this.bookingHistoryData[index]);
        this.dataSource.data = this.bookingHistoryData
        // this.bookingHistoryData.splice(index,1);
        // this.dataSource._updateChangeSubscription();
      }
    )
  }

}
