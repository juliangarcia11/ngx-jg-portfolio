import { SearchStates } from './search-states.enum';

export class WttrDisplayModel {

  /**
   * The current state of the Display. When this is updated, so is the card title & card css class
   * @private
   */
  private _state: SearchStates = SearchStates.UNTOUCHED;
  public get state(): SearchStates { return this._state; }
  public set state(value: SearchStates) {
    this._state = value;
    this.updateCardValues();
  }

  private _cardTitle: string = this.defaultTitle;
  public get cardTitle(): string { return this._cardTitle; }

  private _cardCssClass: 'search' | 'search loading' | 'results' | 'error' = 'search';
  public get cardCssClass(): string { return this._cardCssClass; }

  private _defaultTitle: string = 'Search for the weather';
  public get defaultTitle(): string { return this._defaultTitle; }

  private _subtitle: string = 'Powered by \'wttr.in\'';
  public get subtitle(): string { return this._subtitle; }

  private _resultsTitle: string = 'Wttr Results';
  public get resultsTitle(): string { return `Wttr Results for: '${this._resultsTitle}'`; }
  public set resultsTitle(value: string) { this._resultsTitle = value; }

  private _errorTitle: string = 'Someone stole the weather! :o';
  public get errorTitle(): string { return this._errorTitle; }

  public search: string;
  public result: string;



  constructor() {
    this.state = SearchStates.UNTOUCHED;
    this.search = '';
    this.result = '';
  }

  /**
   * Update states & style settings for the card displayed based upon the current state
   * @private
   */
  private updateCardValues() {
    switch (this.state) {
      case SearchStates.SEARCHING:
      case SearchStates.PARSING:
        this._cardCssClass = 'search loading';
        break;
      case SearchStates.DONE:
        // update results title before setting it on the card
        this.resultsTitle = this.search;
        this._cardTitle = this.resultsTitle;
        this._cardCssClass = 'results';
        break;
      case SearchStates.PARSE_ERROR:
      case SearchStates.RESPONSE_ERROR:
        this._cardTitle = this.errorTitle;
        this._cardCssClass = 'error';
        break;
      case SearchStates.UNTOUCHED:
      case SearchStates.VALID:
      case SearchStates.INVALID:
      default:
        this._cardTitle = this.defaultTitle;
        this._cardCssClass = 'search';
        break;
    }
  }
}

