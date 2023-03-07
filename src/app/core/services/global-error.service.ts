import {
  ErrorHandler,
  Injectable
} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorService implements ErrorHandler {
  constructor( ) {}

  handleError(error: any) {
    // Check if it's an error from an HTTP response
    if (error instanceof HttpErrorResponse) {
      console.error('HttpErrorResponse from global error handler::', error);
    } else {
      console.error('Error from global error handler::', error);
    }
  }
}
