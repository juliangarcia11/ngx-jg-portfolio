import { StateCardStates } from './state-card-states.enum';

/**
 * View Model For StateCardComponent
 */

export class StateCardModel {

  /**
   * The current state of the Display. When this is updated, so is the card title & card css class
   * @private
   */
  private _state: StateCardStates = StateCardStates.UNTOUCHED;
  public get state(): StateCardStates { return this._state; }
  public set state(value: StateCardStates) {
    this._state = value;
    this.updateCardValues();
  }

  protected _cardTitle: string = this.defaultTitle;
  public get cardTitle(): string { return this._cardTitle; }
  public set cardTitle(value: string) { this._cardTitle = value; }

  protected _cardCssClass: 'search' | 'search loading' | 'results' | 'error' = 'search';
  public get cardCssClass(): 'search' | 'search loading' | 'results' | 'error' { return this._cardCssClass; }
  public set cardCssClass(value: 'search' | 'search loading' | 'results' | 'error') { this._cardCssClass = value; }

  private _defaultTitle: string = 'Search for the weather';
  public get defaultTitle(): string { return this._defaultTitle; }
  public set defaultTitle(value: string) { this._defaultTitle = value; }

  private _subtitle: string = 'Powered by \'wttr.in\'';
  public get subtitle(): string { return this._subtitle; }
  public set subtitle(value: string) { this._subtitle = value; }

  protected _resultsTitle: string = 'Results';
  public get resultsTitle(): string { return `Wttr Results for: '${this._resultsTitle}'`; }
  public set resultsTitle(value: string) { this._resultsTitle = value; }

  private _errorTitle: string = 'Something went wrong! :o';
  public get errorTitle(): string { return this._errorTitle; }
  public set errorTitle(value: string) { this._errorTitle = value; }

  /**
   * Update states & style settings for the card displayed based upon the current state
   * @private
   */
  protected updateCardValues(): void {
    switch (this.state) {
      case StateCardStates.SEARCHING:
      case StateCardStates.PARSING:
        this._cardCssClass = 'search loading';
        break;
      case StateCardStates.DONE:
        this._cardTitle = this.resultsTitle;
        this._cardCssClass = 'results';
        break;
      case StateCardStates.PARSE_ERROR:
      case StateCardStates.RESPONSE_ERROR:
        this._cardTitle = this.errorTitle;
        this._cardCssClass = 'error';
        break;
      case StateCardStates.UNTOUCHED:
      case StateCardStates.VALID:
      case StateCardStates.INVALID:
      default:
        this._cardTitle = this.defaultTitle;
        this._cardCssClass = 'search';
        break;
    }
  }
}
