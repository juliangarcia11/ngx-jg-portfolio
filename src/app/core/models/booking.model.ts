import {HomeModel} from "./home.model";
import * as moment from "moment";

export class BookingModel {
  home: HomeModel;
  check_in: Date;
  check_out: Date;

  constructor(json: BookingInterface, dateFormat = 'MM-DD-YYYY') {
    this.home = new HomeModel(json.home);
    this.check_in = moment(json.check_in, dateFormat).toDate();
    this.check_out = moment(json.check_out, dateFormat).toDate();
  }
}

export interface BookingInterface {
  home: HomeModel;
  check_in: Date;
  check_out: Date;
}
