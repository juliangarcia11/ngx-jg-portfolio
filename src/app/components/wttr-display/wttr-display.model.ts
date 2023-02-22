export class WttrDisplayModel implements WttrDisplayInterface {
  search: string;

  constructor(model?: WttrDisplayInterface) {
    this.search = model?.search ?? '';
  }
}

export interface WttrDisplayInterface {
  search: string;
}
