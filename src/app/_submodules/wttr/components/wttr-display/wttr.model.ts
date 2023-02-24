export class WttrModel implements WttrModelInterface {
  public search: string;
  public result?: string;
  constructor(model?: WttrModelInterface) {
    this.search = model?.search ?? '';

    if (model?.result)
      this.result = model.result;
  }
}

export interface WttrModelInterface {
  search: string;
  result?: string;
}
