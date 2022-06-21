import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfCreationComponent } from './pdf-creation.component';
import { PdfCreationRoutingModule } from './pdf-creation.routing.module';



@NgModule({
  declarations: [
    PdfCreationComponent
  ],
  imports: [
    CommonModule,
    PdfCreationRoutingModule
  ]
})
export class PdfCreationModule { }
