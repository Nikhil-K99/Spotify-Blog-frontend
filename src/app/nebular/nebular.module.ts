import { NgModule } from '@angular/core';
import { NbSearchModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const NebularComponents = [
  NbSearchModule,
  BrowserAnimationsModule,
  NbThemeModule.forRoot({ name: 'cosmic' }),
  NbLayoutModule,
  NbEvaIconsModule
];

@NgModule({
  imports: [NebularComponents],
  exports: [NebularComponents]
})
export class NebularModule { }
