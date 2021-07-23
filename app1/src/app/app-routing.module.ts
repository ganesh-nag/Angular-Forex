import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GETConversionComponent} from './getConversion.component';

const routes: Routes = [
  { path: 'conversion', component: GETConversionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
