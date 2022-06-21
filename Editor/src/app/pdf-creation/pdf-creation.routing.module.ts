import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfCreationComponent } from './pdf-creation.component';

const routes: Routes = [
  {
    path:"",
    component:PdfCreationComponent
    // loadChildren:()=>import('./pdf-creation.module').then(m=>m.PdfCreationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdfCreationRoutingModule { }
