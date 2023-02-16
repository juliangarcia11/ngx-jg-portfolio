import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {DataService} from "../../services/data.service";
import {DialogService} from "../../services/dialog.service";
import {BookingComponent} from "../booking/booking.component";
import {HomeModel} from "../../models/home.model";

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  homes$: Observable<HomeModel[]> | undefined;

  constructor(
    private dataService: DataService,
    private dialogService: DialogService,
  ) {
  }

  ngOnInit() {
    this.homes$ = this.dataService.getHomes$();
  }

  /**
   * Ask the DialogService to open the Booking Dialog
   */
  openDialog(home: HomeModel) {
    this.dialogService.open(BookingComponent, {
      width: 'fit-content',
      data: {
        home
      },
    });
  }
}
