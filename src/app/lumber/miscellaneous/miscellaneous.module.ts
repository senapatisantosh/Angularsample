import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';


@NgModule({
  declarations: [NotFoundComponent, MiscellaneousComponent],
  imports: [
    CommonModule,
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    MiscellaneousRoutingModule
  ]
})
export class MiscellaneousModule { }
