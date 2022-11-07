import { Component, OnInit, ViewChild } from '@angular/core';
import { BookingConceptConfig } from 'src/app/models/booking-concept-config/booking-concept-config';
import { User } from 'src/app/models/user/user';
import { PhotographerService } from 'src/app/services/photographer.service';
import { AuthHelper } from 'src/app/services/helpers/auth-helper.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AddBookingConceptConfigComponent } from '../add-booking-concept-config/add-booking-concept-config.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../../dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-booking-concept-config',
  templateUrl: './booking-concept-config.component.html',
  styleUrls: ['./booking-concept-config.component.css']
})
export class BookingConceptConfigComponent implements OnInit {
  user: User;
  configs: BookingConceptConfig[];
  dataSource = new MatTableDataSource<BookingConceptConfig>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['concept-name', 'duration-config', 'action']

  constructor(
    private authHelper: AuthHelper,
    private photographerService: PhotographerService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.user = this.authHelper.getUser();
    this.photographerService.getAllPhotographerConfig(this.user.id).subscribe(
      configs => {
        this.configs = configs;
        this.dataSource.data = configs;
      }
    );
  }

  onEditClick(id: number){

  }

  onDeleteClick(config: BookingConceptConfig){
    var dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "400px",
      autoFocus: false,
      restoreFocus: false,
      data: {
        content: `Do you want to delete [${config.concept.name}] configuration?`
      }
    });

    dialogRef.afterClosed().subscribe(
      accept => {
        if(accept) {
          this.photographerService.deleteBookingConceptConfig(config.id).subscribe(
            deletedConfig => {
              let index = this.configs.indexOf(config);
              if (index !== -1) {
                this.configs.splice(index, 1);
              }
              this.dataSource._updateChangeSubscription();
              this.snackBar.open("Delete Successfully", "Close", {duration: 2000});
            },
            errorResponse => {
              this.snackBar.open(`Error: ${errorResponse.status} ${errorResponse.error}`, "Close", {duration: 2000});
            }
          )
        }
      }
    )
  }

  onAddClick(): void{
    var dialogRef = this.dialog.open(AddBookingConceptConfigComponent, {
      width: "400px",
      autoFocus: false,
      restoreFocus: false,
    });

    dialogRef.afterClosed().subscribe(
    formGroup => {
        this.photographerService.addBookingConceptConfig(formGroup.value).subscribe(
          addedConfig => {
            this.configs.push(addedConfig)
            this.dataSource._updateChangeSubscription();
            this.snackBar.open("Add Successfully", "Close", {duration: 2000});
          },
          errorResponse => {
            this.snackBar.open(`Error: ${errorResponse.status} ${errorResponse.error}`, "Close", {duration: 2000});
          }
        )
      }
    )
  }
}
