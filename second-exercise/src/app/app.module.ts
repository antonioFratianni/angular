import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { ImageComponent } from './image/image.component';
import { IconsComponent } from './icons/icons.component';
import { FormComponent } from './form/form.component';
import { MaterialModule } from './material.module';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { CcHoverDirective } from './cc-hover.directive';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    ImageComponent,
    IconsComponent,
    FormComponent,
    ListComponent,
    CcHoverDirective
  ],
  imports: [
    BrowserModule, MaterialModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
