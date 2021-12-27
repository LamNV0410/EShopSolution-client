import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { InfoIdentity, UserIdentity } from '../identity/models/user-identity-model';
import { IAuth } from './responses/IAuth';
import jwt_decode from "jwt-decode";
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly tokenKey: string = 'auth';

  session: IAuth;

  private userIdentitySubject = new Subject();
  userIdentity$ = this.userIdentitySubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.session = this.initSession();
  }

  public getTokenInfo(): InfoIdentity {
    let data: any = {};
    if (!this.session.token) {
      return data;
    }

    //validate
    if (!this.validateToken(this.session.token)) {
      return {};
    }

    data = jwt_decode(this.session.token);

    let tokenInfo: InfoIdentity = new UserIdentity();
    tokenInfo.userId = data.UID
    tokenInfo.fullName = data.FNE
    return tokenInfo;
  }

  public getToken(): string {
    return this.session.token;
  }

  /**Kiểm tra session này được đã xác thực chưa */
  public isAuthenticated(): boolean {
    if (!this.session || !(this.session && this.session.token)) {
      return false;
    }

    //validate
    if (!this.validateToken(this.session.token)) {
      return false;
    }

    return true;
  }

  public setLoginSucess(token: string) {
    this.session.token = token;
    this.setSession(this.session);
  }

  public logout(): Observable<boolean> {
    this.removeSession();

    return of(true);
  }

  /**Khởi tạo session. Sử dụng những giá trị đã lưu từ trình duyệt */
  private initSession() {
    var session: IAuth = {} as IAuth;
    if (isPlatformBrowser(this.platformId)) {
      session.token = localStorage.getItem(this.tokenKey) ?? '';
    }
    return session;
  }

  /**Kiểm tra token */
  private validateToken(token: string) {
    if (!token)
      return false;

    if (token.split(".").length < 3)
      return false;

    let tokenInfo: any = jwt_decode(token);
    if (Date.now() >= tokenInfo.exp * 1000) {
      return false;
    }

    return true;
  }

  /**Làm mới session hiện tại*/
  private setSession(session: IAuth) {
    this.session = session;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.tokenKey, session.token);
    }

    console.log(`sesson subject`)
    this.userIdentitySubject.next();
  }

  /**Xóa session hiện tại */
  private removeSession() {
    this.session = { token: '' };
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
    }
  }
}
