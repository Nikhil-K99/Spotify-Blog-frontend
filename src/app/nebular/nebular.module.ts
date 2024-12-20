import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbMenuModule, NbOptionModule, NbSearchModule, NbSelectComponent, NbSelectModule, NbSidebarModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const NebularComponents = [
  BrowserAnimationsModule,
  NbThemeModule.forRoot({ name: 'cosmic' }),
  NbLayoutModule,
  NbEvaIconsModule,
  NbCardModule,
  NbInputModule,
  NbIconModule,
  NbFormFieldModule,
  NbButtonModule,
  NbOptionModule,
  NbSelectModule,
  NbSidebarModule.forRoot()
];

@NgModule({
  imports: [NebularComponents],
  exports: [NebularComponents]
})
export class NebularModule { }
