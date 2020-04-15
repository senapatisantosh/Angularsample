import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LumberRoutingModule } from './lumber-routing.module';
import { LumberComponent } from './lumber.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { DashboardModule } from './dashboard/dashboard.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';


@NgModule({
  declarations: [LumberComponent],
  imports: [
    CommonModule,
    LumberRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    MiscellaneousModule,
  ]
})
export class LumberModule { }
