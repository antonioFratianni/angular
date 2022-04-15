import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [CommonModule, MatFormFieldModule, ],
  exports: [CommonModule, MatFormFieldModule, ]
})
export class MaterialModule {}