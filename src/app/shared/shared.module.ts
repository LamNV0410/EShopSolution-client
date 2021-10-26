import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { HorizontalMenuItems } from './menu-items/horizontal-menu-items';
import { DemoMaterialModule } from '../demo-material-module';
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './accordion';

@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  imports: [
    DemoMaterialModule,
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    DemoMaterialModule,
    AccordionDirective
  ],
  providers: [MenuItems, HorizontalMenuItems]
})
export class SharedModule { }
