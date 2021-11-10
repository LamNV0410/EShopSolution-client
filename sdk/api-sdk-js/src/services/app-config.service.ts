import { Injectable } from '@angular/core';
import { ESHOP } from '../core/eshop';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private eshop: ESHOP) { }
  init(): Promise<void> {
    return new Promise<void>(async resolve => {
      this.eshop.init();
      resolve();
    });
  }
}
