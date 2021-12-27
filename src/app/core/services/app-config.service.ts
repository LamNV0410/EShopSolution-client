import { Injectable } from '@angular/core';
import { ESHOP } from 'sdk/api-sdk-js/src/core/eshop';
import { AuthService } from 'src/app/core/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private eshop: ESHOP, private auth: AuthService) { }
  init(): Promise<void> {
    return new Promise<void>(async resolve => {
      this.eshop.init();

      this.eshop.setToken(this.auth.getToken());
      resolve();
    });
  }
}
