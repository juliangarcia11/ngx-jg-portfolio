import {
  ErrorHandler,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HeaderComponent } from './components';

import {
  DataService,
  DialogService
} from './services';
import { EnsureImportedOnceModule } from './ensure-imported-once.module';
import { GlobalErrorService } from './services/global-error.service';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    // processes all errors
    { provide:  ErrorHandler, useClass: GlobalErrorService },
    DataService,
    DialogService
  ]
})
export class CoreModule extends EnsureImportedOnceModule {
  public constructor(@SkipSelf() @Optional() parent: CoreModule) {
    super(parent);
  }
}
