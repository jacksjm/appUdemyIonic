import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChipsPage } from './chips';

@NgModule({
  declarations: [
    ChipsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChipsPage),
  ],
})
export class ChipsPageModule {}
