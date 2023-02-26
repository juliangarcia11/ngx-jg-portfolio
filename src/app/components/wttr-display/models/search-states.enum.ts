
/**
 *  The various states the WttrDisplayComponent can get into
 */
export enum SearchStates {

  // search form is untouched
  UNTOUCHED,

  // search form is invalid
  INVALID,

  // search form is valid but not submitted
  VALID,

  // search form has been submitted but response has not been recieved
  SEARCHING,

  // search response received successfully & is being parsed for render
  PARSING,

  // search response has been rendered successfully
  DONE,

  // search response received in an error state
  RESPONSE_ERROR,

  // search response received but unable to parse
  PARSE_ERROR
}
