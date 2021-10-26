import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const expectedRole = route.data.expectedRole;//TODO: đã khai báo class RouterData trong core nhưng chưa áp dụng

    if (!this._authService.isAuthenticated()) {
      this.processUnauthorize();
    }

    //route có kiểm tra role
    if (expectedRole) {
      let tokenInfo = this._authService.getTokenInfo();
      // TODO : Check route
    }

    return true;
  }

  private processUnauthorize() {
    console.log(`authguard Unauthorize`);

    //có thể là người dùng đã hết hạn nên cần clear token
    this._authService.logout();
    this._router.navigateByUrl('/authentication/login');
  }

  private processForbidden() {
    console.log(`authguard Forbidden`);
    //có thể là người dùng đã hết hạn nên cần clear token
    this._authService.logout();
    this._router.navigateByUrl('/authentication/login');
  }
}
