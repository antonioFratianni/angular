import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    SnackBarComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
