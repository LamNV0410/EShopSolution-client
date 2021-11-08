import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { HorizontalMenuItems } from './menu-items/horizontal-menu-items';
import { DemoMaterialModule } from '../demo-material-module';
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
  ],
  imports: [
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxDropzoneModule
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    DemoMaterialModule,
    AccordionDirective,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ],
  providers: [MenuItems, HorizontalMenuItems]
})
export class SharedModule { }
