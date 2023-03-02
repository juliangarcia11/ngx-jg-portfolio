export class HomeModel {
  title: string;
  image: string;
  location: string;
  price_nightly: number;

  constructor(json: HomeInterface) {
    this.title = json.title;
    this.image = json.image;
    this.location = json.location;
    this.price_nightly = json.price_nightly;
  }
}

export interface HomeInterface {
  title: string;
  image: string;
  location: string;
  price_nightly: number;
}
