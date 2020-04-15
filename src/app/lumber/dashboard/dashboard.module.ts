import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CommerceComponent } from './commerce/commerce.component';


@NgModule({
  declarations: [DashboardComponent, CommerceComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
