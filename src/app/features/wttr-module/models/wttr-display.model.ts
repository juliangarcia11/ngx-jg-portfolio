import { StateCardModel, StateCardStates } from '../../../shared/components';
import { WttrConst } from './wttr.const';

export class WttrDisplayModel extends StateCardModel {

  public override get resultsTitle(): string { return `Wttr Results for: '${this._resultsTitle}'`; }
  public override set resultsTitle(value: string) { super.resultsTitle = value; }

  public search: string;
  public result: string;

  constructor() {
    super();
    this.defaultTitle = WttrConst.title;
    this.subtitle = WttrConst.subtitle;
    this.errorTitle = WttrConst.errorTitle;
    this.state = StateCardStates.UNTOUCHED;
    this.search = '';
    this.result = '';
  }

  /**
   * After the super class updates values, update the results title based on
   * the user search input
   * @protected
   */
  protected override updateCardValues(): void {
    super.updateCardValues();
    if (this.state == StateCardStates.DONE) {
      // update results title before setting it on the card
      this.resultsTitle = this.search;
      this.cardTitle = this.resultsTitle;
    }
  }
}

