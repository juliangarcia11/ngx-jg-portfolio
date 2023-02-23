export class WttrModel implements WttrModelInterface {
  public search: string;

  constructor(model?: WttrModelInterface) {
    this.search = model?.search ?? '';
  }
}

export interface WttrModelInterface {
  search: string;
}
