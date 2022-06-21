import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/pdf",
    pathMatch:'full'
  },
  {
    path:"pdf",
    // component:PdfCreationComponent
    loadChildren:()=>import('./pdf-creation/pdf-creation.module').then(m=>m.PdfCreationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
