import * as i0 from '@angular/core';
import { NgModule, InjectionToken, Injectable, Inject, EventEmitter, Component, Output } from '@angular/core';
import * as i1$1 from '@angular/forms';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i9 from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i10 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import * as i8 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import * as i7 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i6 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i2 from '@angular/router';
import { map, catchError, switchMap, filter, take } from 'rxjs/operators';
import * as i1 from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import jwt_decode from 'jwt-decode';
import { of, BehaviorSubject, throwError } from 'rxjs';
import Swal from 'sweetalert2';

const MaterialModules = [
    MatSliderModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatTreeModule,
    MatStepperModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatFormFieldModule,
];
class MaterialUiModule {
}
MaterialUiModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MaterialUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MaterialUiModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MaterialUiModule, imports: [CommonModule, MatSliderModule,
        MatCheckboxModule,
        MatInputModule,
        MatRadioModule,
        MatButtonModule,
        MatSidenavModule,
        MatMenuModule,
        MatGridListModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatTabsModule,
        MatDialogModule,
        MatSortModule,
        MatPaginatorModule,
        MatTableModule,
        MatDatepickerModule,
        MatSelectModule,
        MatNativeDateModule,
        MatTreeModule,
        MatStepperModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatSlideToggleModule,
        MatAutocompleteModule,
        MatProgressBarModule,
        MatFormFieldModule], exports: [MatSliderModule,
        MatCheckboxModule,
        MatInputModule,
        MatRadioModule,
        MatButtonModule,
        MatSidenavModule,
        MatMenuModule,
        MatGridListModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatTabsModule,
        MatDialogModule,
        MatSortModule,
        MatPaginatorModule,
        MatTableModule,
        MatDatepickerModule,
        MatSelectModule,
        MatNativeDateModule,
        MatTreeModule,
        MatStepperModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatSlideToggleModule,
        MatAutocompleteModule,
        MatProgressBarModule,
        MatFormFieldModule] });
MaterialUiModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MaterialUiModule, imports: [[
            CommonModule,
            ...MaterialModules
        ], MatSliderModule,
        MatCheckboxModule,
        MatInputModule,
        MatRadioModule,
        MatButtonModule,
        MatSidenavModule,
        MatMenuModule,
        MatGridListModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatTabsModule,
        MatDialogModule,
        MatSortModule,
        MatPaginatorModule,
        MatTableModule,
        MatDatepickerModule,
        MatSelectModule,
        MatNativeDateModule,
        MatTreeModule,
        MatStepperModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatSlideToggleModule,
        MatAutocompleteModule,
        MatProgressBarModule,
        MatFormFieldModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MaterialUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        ...MaterialModules
                    ],
                    exports: [
                        ...MaterialModules
                    ]
                }]
        }] });

class IConfigLibrary {
}
class IWhiteList {
}
const defaultConfigLibrary = {
    whiteList: [
        {
            word: 'oauth/token',
        }
    ],
    encryptPhrase: 'dAN0n3IR0nM4n4p1',
    apiURL: 'http://localhost:8082/',
    refreshTokenURL: 'oauth/refreshToken',
    accessTokenURL: 'oauth/token',
    accessTokenADURL: 'oauth/tokenAd',
    resetPasswordURL: 'oauth/resetPassword',
    loginType: 'both',
    redirectUri: 'https://www.google.com.mx/',
};
const CONFIGLIBRARY = new InjectionToken('defaultConfigLibrary');

class EncrDecrService {
    constructor(configLibrary) {
        this.encryptPhrase = configLibrary.encryptPhrase;
    }
    //Encrypt
    set(value) {
        var key = CryptoJS.enc.Utf8.parse(this.encryptPhrase);
        var iv = CryptoJS.enc.Utf8.parse(this.encryptPhrase);
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key, {
            //    keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        });
        return encrypted.toString();
    }
    //Decrypt
    get(value) {
        var key = CryptoJS.enc.Utf8.parse(this.encryptPhrase);
        var iv = CryptoJS.enc.Utf8.parse(this.encryptPhrase);
        var decrypted = CryptoJS.AES.decrypt(value, key, {
            // keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
    getDecodedAccessToken(token) {
        try {
            return jwt_decode(token);
        }
        catch (Error) {
            return null;
        }
    }
}
EncrDecrService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EncrDecrService, deps: [{ token: CONFIGLIBRARY }], target: i0.ɵɵFactoryTarget.Injectable });
EncrDecrService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EncrDecrService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EncrDecrService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: IConfigLibrary, decorators: [{
                    type: Inject,
                    args: [CONFIGLIBRARY]
                }] }]; } });

class MapperService {
    transform(entityOrArray) {
        return Array.isArray(entityOrArray) ?
            entityOrArray.map((item) => this.map(item)) :
            this.map(entityOrArray);
    }
}

class AuthMapperService extends MapperService {
    map(response) {
        return {
            userDetails: response.userDetails,
            roles: response.roles,
            token: response.token
        };
    }
}
AuthMapperService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthMapperService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
AuthMapperService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthMapperService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthMapperService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class TokenPorviderService {
}

class AuthenticationService {
    constructor(configLibrary, http, encrDecr, _authMapperService, tokenPorviderService) {
        this.http = http;
        this.encrDecr = encrDecr;
        this._authMapperService = _authMapperService;
        this.tokenPorviderService = tokenPorviderService;
        this.loginType = '';
        this.apiURL = configLibrary.apiURL;
        this.refreshTokenURL = configLibrary.refreshTokenURL;
        this.accessTokenURL = configLibrary.accessTokenURL;
        this.resetPasswordURL = configLibrary.resetPasswordURL;
        this.loginType = configLibrary.loginType;
    }
    login(user) {
        let data = this.encrDecr.set(user.userName + '|' + user.password);
        data = data.replace('+', 'xMl3Jk').replace(/\//g, 'Por21Ld').replace('=', 'Ml32');
        let token = {
            'token': data
        };
        let url = `${this.apiURL}${this.accessTokenURL}`;
        return this.http.post(url, token)
            .pipe(map((respApi) => {
            let decodeAcsessToken = this.encrDecr.getDecodedAccessToken(respApi.content.token.accessToken);
            decodeAcsessToken.DanoneTokenPayload.token = respApi.content.token;
            return this._authMapperService.transform(decodeAcsessToken.DanoneTokenPayload);
        }));
    }
    refreshToken() {
        let url = `${this.apiURL}${this.refreshTokenURL}`;
        return this.http.post(url, '');
    }
    isAuthenticated() {
        return (this.tokenPorviderService.getToken() ? true : false);
    }
    logOut() {
        this.tokenPorviderService.removeToken();
    }
    resetPassword(email) {
        let url = `${this.apiURL}${this.resetPasswordURL}`;
        return this.http.post(url, email);
    }
}
AuthenticationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationService, deps: [{ token: CONFIGLIBRARY }, { token: i1.HttpClient }, { token: EncrDecrService }, { token: AuthMapperService }, { token: TokenPorviderService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthenticationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: IConfigLibrary, decorators: [{
                    type: Inject,
                    args: [CONFIGLIBRARY]
                }] }, { type: i1.HttpClient }, { type: EncrDecrService }, { type: AuthMapperService }, { type: TokenPorviderService }]; } });

class AuthAdService {
    constructor(configLibrary, http, encrDecr, _authMapperService) {
        this.http = http;
        this.encrDecr = encrDecr;
        this._authMapperService = _authMapperService;
        this.apiURL = configLibrary.apiURL;
        this.accessTokenURLAD = configLibrary.accessTokenADURL;
    }
    loginAD(data) {
        let decodeAcsessToken = this.encrDecr.getDecodedAccessToken(data.content.token.accessToken);
        decodeAcsessToken.DanoneTokenPayload.token = data.content.token;
        return of(this._authMapperService.transform(decodeAcsessToken.DanoneTokenPayload));
    }
}
AuthAdService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthAdService, deps: [{ token: CONFIGLIBRARY }, { token: i1.HttpClient }, { token: EncrDecrService }, { token: AuthMapperService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthAdService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthAdService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthAdService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: IConfigLibrary, decorators: [{
                    type: Inject,
                    args: [CONFIGLIBRARY]
                }] }, { type: i1.HttpClient }, { type: EncrDecrService }, { type: AuthMapperService }]; } });

class LoginLibraryComponent {
    constructor(configLibrary, fb, activatedRoute, authService, authServiceAD, tokenPorviderService) {
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.authServiceAD = authServiceAD;
        this.tokenPorviderService = tokenPorviderService;
        this.loginClick = new EventEmitter();
        this.resetClick = new EventEmitter();
        this.isAuthenticated = false;
        this.typeLogin = '';
        this.isAd = false;
        this.tokenAd = '';
        this.redirectUri = '';
        this.typeLogin = configLibrary.loginType;
        this.redirectUri = configLibrary.redirectUri;
    }
    ngOnInit() {
        this.loadForm();
        this.typeLogin = this.authService.loginType;
        //this.loadParamsAD();
    }
    loadForm() {
        this.loginForm = this.fb.group({
            userName: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
            password: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
        });
    }
    login() {
        if (this.loginForm.invalid) {
            this.loginClick.emit(false);
        }
        else {
            this.authUser();
        }
    }
    authUser() {
        this.authService.login(this.loginForm.value).subscribe(response => {
            if (response) {
                this.tokenPorviderService.setToken(response);
                this.loginClick.emit(true);
            }
            else {
                this.loginClick.emit(false);
            }
        }, error => {
            console.log(error);
            this.loginClick.emit(false);
        });
    }
    //Login AD
    // public loadParamsAD(){
    //    this.activatedRoute.queryParams.subscribe(params => {
    //       const data: any = params || null;
    //       if (data !== null) {
    //          const paramsRoute = {
    //             "content":{
    //                "token":{
    //                   "accessToken": data.accessToken,
    //                   "refreshToken":data.refreshToken
    //                }
    //             },
    //             "msg":null
    //          }
    //          this.authServiceAD.loginAD(paramsRoute).subscribe(resp => {
    //             this.authUserAD(resp);
    //          },
    //          error => {
    //             console.log(error)
    //             this.loginClick.emit(false)
    //          });
    //       }
    //     });
    // }
    // private authUserAD(response) {
    //    if (response) {
    //       this.tokenPorviderService.setToken(response);
    //       this.loginClick.emit(true);
    //    }
    //    else {
    //       this.loginClick.emit(false)
    //    }
    // }
    loginAD() {
        window.location.href = `${this.redirectUri}`;
    }
    //Reset Password
    recoveryPassEmit() {
        this.resetClick.emit(true);
    }
}
LoginLibraryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoginLibraryComponent, deps: [{ token: CONFIGLIBRARY }, { token: i1$1.FormBuilder }, { token: i2.ActivatedRoute }, { token: AuthenticationService }, { token: AuthAdService }, { token: TokenPorviderService }], target: i0.ɵɵFactoryTarget.Component });
LoginLibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LoginLibraryComponent, selector: "lib-security-library-login", outputs: { loginClick: "loginClick", resetClick: "resetClick" }, ngImport: i0, template: "<div class=\"container\">\r\n  <div class=\"row form-content justify-content-start align-items-center\">\r\n    <form [formGroup]=\"loginForm\" >\r\n      <div class=\"col col-xl-4 col-lg-8 col-md-8 col-12\">\r\n        <div class=\"container-fluid\">\r\n          <div *ngIf=\"typeLogin !== 'internal'\" class=\"row\">\r\n            <div class=\"col col-12\">\r\n              <mat-label>Correo\r\n              </mat-label>\r\n              <mat-form-field [style.fontSize.px]=\"12\" appearance=\"outline\">\r\n                <mat-label>ejemplo@corrreo.com\r\n                </mat-label>\r\n                <mat-icon matSuffix>email</mat-icon>\r\n                <input \r\n                  matInput \r\n                  type=\"text\" \r\n                  placeholder=\"ejemplo@corrreo.com\" \r\n                  maxlength=\"50\" \r\n                  formControlName=\"userName\" \r\n                  name=\"userName\" \r\n                  id=\"userName\" \r\n                  required>\r\n                  \r\n                <mat-error *ngIf=\"loginForm.get('userName')?.hasError('required') && loginForm.get('userName')?.touched\">\r\n                  Campo requerido\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col col-12\">\r\n              <mat-label>Contrase\u00F1a</mat-label>\r\n              <mat-form-field [style.fontSize.px]=\"12\" appearance=\"outline\">\r\n                <mat-label>contrase\u00F1a</mat-label>\r\n                <mat-icon matSuffix>vpn_key</mat-icon>\r\n                <input \r\n                  matInput \r\n                  type=\"password\" \r\n                  placeholder=\"Contrase\u00F1a\" \r\n                  maxlength=\"50\" \r\n                  formControlName=\"password\" \r\n                  name=\"password\" \r\n                  id=\"passwor\" \r\n                  required>\r\n                <mat-error *ngIf=\"loginForm.get('password')?.hasError('required') && loginForm.get('password')?.touched\">\r\n                  Campo requerido\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"row recovery-pass\">\r\n              <div class=\"col col-12\">\r\n                <button mat-button class=\"btn_tertiary\" (click)=\"recoveryPassEmit()\">Olvide mi contrase\u00F1a</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-12 text-center\">\r\n              <button class=\"btn_primary\" (click)=\"login()\">Iniciar sesi\u00F3n</button>\r\n            </div> \r\n          </div>\r\n          <div *ngIf=\"typeLogin !== 'external'\" class=\"col col-12 text-center\">\r\n            <button mat-button class=\"btn_tertiary\" (click)=\"loginAD()\">Ingresar con Active Directory</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>   \r\n  </div>\r\n</div>", styles: [".btn_primary{color:#f8f9fb;text-transform:initial;text-align:center;background-color:#214eb7;text-decoration:none;border:0;border-radius:8px;cursor:pointer;letter-spacing:1.5px;width:100%!important;height:40px;padding:10px 8px;font-size:14px;font-weight:400}.btn_primary:hover{background-color:#01818f}.btn_primary:disabled{color:#828282;background-color:#b0b0b0;pointer-events:none}.btn_secondary{color:#01818f;text-transform:initial;text-align:center;background-color:#ecfafc;text-decoration:none;border:1px solid #0095A8;border-radius:8px;cursor:pointer;letter-spacing:1.5px;width:150px!important;height:40px;padding:10px 8px;font-size:14px;font-weight:400}.btn_secondary:hover{background-color:#b2eaf333}.btn_secondary:disabled{color:#b0b0b0;background-color:#e9e9e9;border:1px solid #e9e9e9;pointer-events:none}.btn_tertiary{color:#214eb7}.bg_breadcrumb{background:url(/assets/img/bg_breadcrumb.png) no-repeat;background-color:#005db4;background-size:contain;height:72px;padding-left:30px}.bg_breadcrumb .breadcrumb{color:#fff;margin:0;padding:0;font-style:normal;font-weight:600;letter-spacing:.02em;text-transform:capitalize;vertical-align:middle;line-height:58px}.bg_breadcrumb .breadcrumb span{font-size:18px;color:#bcd}.bg_breadcrumb .breadcrumb span:hover{color:#01818f;text-decoration:none}.bg_breadcrumb .breadcrumb li{list-style:none;float:left;margin:5px}.bg_breadcrumb .breadcrumb li:last-child{margin-right:5px}.bg_breadcrumb .breadcrumb li:after{content:\" > \";color:#fff}.bg_breadcrumb .breadcrumb li:last-child:after{content:\"\"}h1{font-size:34px;font-weight:500}h2{font-size:24px;font-weight:500}h3{font-size:20px;font-weight:500}h4{font-size:18px;font-weight:400}h5{font-style:normal!important;font-weight:500!important;font-size:12px!important;line-height:18px!important;letter-spacing:.15px!important;color:#3f4b6c!important}a{color:#118584}.swal2-styled.swal2-confirm{background-color:#0095a8!important}.swal2-styled.swal2-confirm:focus{box-shadow:none!important}.bg_evidence{background:rgba(249,249,249,.55);border:.5px solid #eceff2;box-sizing:border-box;height:261px;padding-left:25px;margin-left:25px;margin-right:25px}.date_evidence{font-style:normal;font-weight:500;font-size:12px;line-height:18px;text-align:center;letter-spacing:.155002px;color:#7792ac}.rb_evidence{display:flex;flex-direction:column;margin:15px 0;width:150px}.container_evidence{margin:4px,4px;padding:4px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;width:100%}.card_evidence{width:170px;text-align:center}.lbl_evidence{font-style:normal;font-weight:500;font-size:12px;line-height:18px;letter-spacing:.15px;color:#3f4b6c}.mat-form-field-no-padding .mat-form-field-wrapper{margin-top:-.5em}.mobile-label{display:none}.mobile-cantidad>input{width:80%}@media (max-width: 600px){.mobile-label{width:130px;display:inline-block;font-weight:bold}.mat-header-row{display:none}.mat-row{flex-direction:column;align-items:start;text-align:left;padding:8px 24px}.mat-cell:first-of-type{padding:5px 10px!important}.mobile-cantidad{width:150px}}.container .form-content .title{font-family:var(--font-poppins-bold);font-style:normal;font-weight:500;font-size:26px;line-height:39px;text-transform:uppercase;color:#9399b2}.container mat-form-field.mat-form-field{width:100%;font-size:16px;color:#9399b2}.container mat-label{font-family:var(--font-roboto);font-style:normal;font-weight:700;font-size:14px;line-height:14px;letter-spacing:.15px;color:#656d8e}.text-center{display:grid}.recovery-pass{text-align:right}.login_title{font-family:\"Poppins\",\"Roboto\",sans-serif;font-style:normal;font-weight:500;font-size:26px;line-height:39px;text-transform:uppercase;color:#f8f9fb}.login_label{font-family:\"Roboto\",sans-serif;font-style:normal;font-weight:bold;font-size:12px;line-height:14px;letter-spacing:.15px;color:#f8f9fb}input::placeholder{font-family:\"Roboto\",sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:16px;letter-spacing:.15px;color:#9eb7cc}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{-webkit-transition:background-color 5000s;transition:background-color 5000s;-webkit-text-fill-color:#656D8E!important}\n"], components: [{ type: i6.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i7.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i8.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i9.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.MatLabel, selector: "mat-label" }, { type: i6.MatSuffix, selector: "[matSuffix]" }, { type: i10.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i1$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i6.MatError, selector: "mat-error", inputs: ["id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoginLibraryComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-security-library-login',
                    templateUrl: './login-library.component.html',
                    styleUrls: ['./login-library.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: IConfigLibrary, decorators: [{
                    type: Inject,
                    args: [CONFIGLIBRARY]
                }] }, { type: i1$1.FormBuilder }, { type: i2.ActivatedRoute }, { type: AuthenticationService }, { type: AuthAdService }, { type: TokenPorviderService }]; }, propDecorators: { loginClick: [{
                type: Output
            }], resetClick: [{
                type: Output
            }] } });

class RecoveryPasswordComponent {
    constructor(configLibrary, fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.returnToLogin = new EventEmitter();
        this.restorePass = new EventEmitter();
    }
    ngOnInit() {
        this.loadForm();
    }
    loadForm() {
        this.recoveryForm = this.fb.group({
            email: new FormControl(null, [Validators.required, Validators.maxLength(50)])
        });
    }
    backtoLogin() {
        this.returnToLogin.emit(true);
    }
    restablecerPass() {
        if (this.recoveryForm.invalid) {
            this.restorePass.emit(false);
        }
        else {
            this.authResetPass();
        }
    }
    authResetPass() {
        this.authService.resetPassword(this.recoveryForm.value).subscribe(response => {
            this.restorePass.emit(true);
        }, error => {
            console.log(error);
            this.restorePass.emit(false);
        });
    }
}
RecoveryPasswordComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RecoveryPasswordComponent, deps: [{ token: CONFIGLIBRARY }, { token: i1$1.FormBuilder }, { token: AuthenticationService }], target: i0.ɵɵFactoryTarget.Component });
RecoveryPasswordComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RecoveryPasswordComponent, selector: "lib-security-library-recovery-password", outputs: { returnToLogin: "returnToLogin", restorePass: "restorePass" }, ngImport: i0, template: "<div class=\"container\">\r\n  <div class=\"row form-content justify-content-start align-items-center\">\r\n    <form [formGroup]=\"recoveryForm\">\r\n      <div class=\"col col-xl-4 col-lg-8 col-md-8 col-12\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col col-12\">\r\n              <mat-label>Correo\r\n              </mat-label>\r\n              <mat-form-field [style.fontSize.px]=\"12\" appearance=\"outline\">\r\n                <mat-label>ejemplo@corrreo.com\r\n                </mat-label>\r\n                <mat-icon matSuffix>email</mat-icon>\r\n                <input matInput type=\"text\" placeholder=\"ejemplo@corrreo.com\" maxlength=\"50\" formControlName=\"email\"\r\n                  name=\"email\" id=\"email\" required>\r\n\r\n                <mat-error\r\n                  *ngIf=\"recoveryForm.get('email')?.hasError('required') && recoveryForm.get('email')?.touched\">\r\n                  Campo requerido\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col col-12\">\r\n              <button class=\"btn_primary\" (click)=\"restablecerPass()\">Restablecer</button>\r\n            </div>\r\n            <div class=\"col col-12 text-center\">\r\n              <button mat-button class=\"col-12 btn_tertiary\" (click)=\"backtoLogin()\">Regresar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>", styles: [".btn_primary{color:#f8f9fb;text-transform:initial;text-align:center;background-color:#214eb7;text-decoration:none;border:0;border-radius:8px;cursor:pointer;letter-spacing:1.5px;width:100%!important;height:40px;padding:10px 8px;font-size:14px;font-weight:400}.btn_primary:hover{background-color:#01818f}.btn_primary:disabled{color:#828282;background-color:#b0b0b0;pointer-events:none}.btn_secondary{color:#01818f;text-transform:initial;text-align:center;background-color:#ecfafc;text-decoration:none;border:1px solid #0095A8;border-radius:8px;cursor:pointer;letter-spacing:1.5px;width:150px!important;height:40px;padding:10px 8px;font-size:14px;font-weight:400}.btn_secondary:hover{background-color:#b2eaf333}.btn_secondary:disabled{color:#b0b0b0;background-color:#e9e9e9;border:1px solid #e9e9e9;pointer-events:none}.btn_tertiary{color:#214eb7}.bg_breadcrumb{background:url(/assets/img/bg_breadcrumb.png) no-repeat;background-color:#005db4;background-size:contain;height:72px;padding-left:30px}.bg_breadcrumb .breadcrumb{color:#fff;margin:0;padding:0;font-style:normal;font-weight:600;letter-spacing:.02em;text-transform:capitalize;vertical-align:middle;line-height:58px}.bg_breadcrumb .breadcrumb span{font-size:18px;color:#bcd}.bg_breadcrumb .breadcrumb span:hover{color:#01818f;text-decoration:none}.bg_breadcrumb .breadcrumb li{list-style:none;float:left;margin:5px}.bg_breadcrumb .breadcrumb li:last-child{margin-right:5px}.bg_breadcrumb .breadcrumb li:after{content:\" > \";color:#fff}.bg_breadcrumb .breadcrumb li:last-child:after{content:\"\"}h1{font-size:34px;font-weight:500}h2{font-size:24px;font-weight:500}h3{font-size:20px;font-weight:500}h4{font-size:18px;font-weight:400}h5{font-style:normal!important;font-weight:500!important;font-size:12px!important;line-height:18px!important;letter-spacing:.15px!important;color:#3f4b6c!important}a{color:#118584}.swal2-styled.swal2-confirm{background-color:#0095a8!important}.swal2-styled.swal2-confirm:focus{box-shadow:none!important}.bg_evidence{background:rgba(249,249,249,.55);border:.5px solid #eceff2;box-sizing:border-box;height:261px;padding-left:25px;margin-left:25px;margin-right:25px}.date_evidence{font-style:normal;font-weight:500;font-size:12px;line-height:18px;text-align:center;letter-spacing:.155002px;color:#7792ac}.rb_evidence{display:flex;flex-direction:column;margin:15px 0;width:150px}.container_evidence{margin:4px,4px;padding:4px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;width:100%}.card_evidence{width:170px;text-align:center}.lbl_evidence{font-style:normal;font-weight:500;font-size:12px;line-height:18px;letter-spacing:.15px;color:#3f4b6c}.mat-form-field-no-padding .mat-form-field-wrapper{margin-top:-.5em}.mobile-label{display:none}.mobile-cantidad>input{width:80%}@media (max-width: 600px){.mobile-label{width:130px;display:inline-block;font-weight:bold}.mat-header-row{display:none}.mat-row{flex-direction:column;align-items:start;text-align:left;padding:8px 24px}.mat-cell:first-of-type{padding:5px 10px!important}.mobile-cantidad{width:150px}}.container .form-content .title{font-family:var(--font-poppins-bold);font-style:normal;font-weight:500;font-size:26px;line-height:39px;text-transform:uppercase;color:#9399b2}.container mat-form-field.mat-form-field{width:100%;font-size:16px;color:#9399b2}.container mat-label{font-family:var(--font-roboto);font-style:normal;font-weight:700;font-size:14px;line-height:14px;letter-spacing:.15px;color:#656d8e}.text-center{display:grid}.login_title{font-family:\"Poppins\",\"Roboto\",sans-serif;font-style:normal;font-weight:500;font-size:26px;line-height:39px;text-transform:uppercase;color:#f8f9fb}.login_label{font-family:\"Roboto\",sans-serif;font-style:normal;font-weight:bold;font-size:12px;line-height:14px;letter-spacing:.15px;color:#f8f9fb}input::placeholder{font-family:\"Roboto\",sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:16px;letter-spacing:.15px;color:#9eb7cc}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{-webkit-transition:background-color 5000s;transition:background-color 5000s;-webkit-text-fill-color:#656D8E!important}\n"], components: [{ type: i6.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i7.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i8.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i6.MatLabel, selector: "mat-label" }, { type: i6.MatSuffix, selector: "[matSuffix]" }, { type: i10.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i1$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i9.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.MatError, selector: "mat-error", inputs: ["id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RecoveryPasswordComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-security-library-recovery-password',
                    templateUrl: './recovery-password.component.html',
                    styleUrls: ['./recovery-password.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: IConfigLibrary, decorators: [{
                    type: Inject,
                    args: [CONFIGLIBRARY]
                }] }, { type: i1$1.FormBuilder }, { type: AuthenticationService }]; }, propDecorators: { returnToLogin: [{
                type: Output
            }], restorePass: [{
                type: Output
            }] } });

class SessionstorageTokenProviderService {
    constructor() {
        this.userSessionKey = 'token';
    }
    removeToken() {
        sessionStorage.removeItem(this.userSessionKey);
    }
    setToken(token) {
        sessionStorage.setItem(this.userSessionKey, JSON.stringify(token));
    }
    getToken() {
        if (sessionStorage.getItem(this.userSessionKey)) {
            return JSON.parse(sessionStorage.getItem(this.userSessionKey));
        }
        return undefined;
    }
}
SessionstorageTokenProviderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SessionstorageTokenProviderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SessionstorageTokenProviderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SessionstorageTokenProviderService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SessionstorageTokenProviderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class SecurityLibraryModule {
    static withProviders(configLib) {
        return {
            ngModule: SecurityLibraryModule,
            providers: [
                {
                    provide: CONFIGLIBRARY, useValue: configLib
                },
                {
                    provide: TokenPorviderService, useExisting: SessionstorageTokenProviderService
                }
            ]
        };
    }
}
SecurityLibraryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SecurityLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SecurityLibraryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SecurityLibraryModule, declarations: [LoginLibraryComponent,
        RecoveryPasswordComponent], imports: [
        // BrowserModule,
        // BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialUiModule], exports: [LoginLibraryComponent,
        RecoveryPasswordComponent] });
SecurityLibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SecurityLibraryModule, providers: [
        { provide: CONFIGLIBRARY, useValue: defaultConfigLibrary },
        { provide: TokenPorviderService, useValue: SessionstorageTokenProviderService }
    ], imports: [[
            // BrowserModule,
            // BrowserAnimationsModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUiModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SecurityLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoginLibraryComponent,
                        RecoveryPasswordComponent
                    ],
                    imports: [
                        // BrowserModule,
                        // BrowserAnimationsModule,
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MaterialUiModule
                    ],
                    exports: [
                        LoginLibraryComponent,
                        RecoveryPasswordComponent
                    ],
                    providers: [
                        { provide: CONFIGLIBRARY, useValue: defaultConfigLibrary },
                        { provide: TokenPorviderService, useValue: SessionstorageTokenProviderService }
                    ]
                }]
        }] });

class AuthInterceptor {
    constructor(configLibrary, router, tokenPorviderService, authService, auth, encrDecr, _authMapperService) {
        this.router = router;
        this.tokenPorviderService = tokenPorviderService;
        this.authService = authService;
        this.auth = auth;
        this.encrDecr = encrDecr;
        this._authMapperService = _authMapperService;
        this.isRefreshing = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
        this.whiteList = configLibrary.whiteList;
        this.refreshTokenURL = configLibrary.refreshTokenURL;
        this.accessTokenURL = configLibrary.accessTokenURL;
    }
    intercept(req, next) {
        this.token = this.tokenPorviderService.getToken();
        let isNeedToken = true;
        if (this.whiteList) {
            this.whiteList.forEach(element => {
                if (req.url.includes(`${element.word}`)) {
                    isNeedToken = false;
                    req.clone({
                        setHeaders: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        }
                    });
                }
                return next.handle(req);
            });
        }
        if (this.token && isNeedToken) {
            req = this.addTokenHeader(req, this.token.token.accessToken);
        }
        if (this.token && req.url.includes(`${this.refreshTokenURL}`)) {
            req = this.addTokenHeader(req, this.token.token.refreshToken);
        }
        return next.handle(req).pipe(catchError(e => {
            // Checamos si tiene acceso...
            if (e.status == 401) {
                if (!e.url.includes(this.accessTokenURL)
                    && !e.url.includes(this.refreshTokenURL)) {
                    return this.handle401Error(req, next);
                }
                else {
                    // No tiene autorizacion (UnAuthorized)
                    // Si se vence el token en el backend..se cierra la sesion en el frontend
                    if (this.authService.isAuthenticated()) {
                        this.authService.logOut();
                    }
                    this.router.navigate(['auth/login']);
                }
            }
            // checamos si no esta autorizado...
            if (e.status == 403) {
                this.authService.logOut();
                this.router.navigate(['auth/login']);
                Swal.fire('Acceso Denegado', `Hola ${this.token.userDetails.name} no tienes acceso a este recurso`, 'warning');
            }
            return throwError(e);
        }));
    }
    handle401Error(request, next) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.auth.refreshToken().pipe(switchMap((token) => {
                this.isRefreshing = false;
                let decodeAcsessToken = this.encrDecr.getDecodedAccessToken(token.content.token.accessToken);
                decodeAcsessToken.DanoneTokenPayload.token = token.content.token;
                this.tokenPorviderService.setToken(this._authMapperService.transform(decodeAcsessToken.DanoneTokenPayload));
                this.refreshTokenSubject.next(decodeAcsessToken.DanoneTokenPayload.token.accessToken);
                return next.handle(this.addTokenHeader(request, decodeAcsessToken.DanoneTokenPayload.token.accessToken));
            }), catchError((err) => {
                this.isRefreshing = false;
                if (this.authService.isAuthenticated()) {
                    this.authService.logOut();
                }
                this.router.navigate(['auth/login']);
                return throwError(err);
            }));
        }
        return this.refreshTokenSubject.pipe(filter(token => token !== null), take(1), switchMap((token) => next.handle(this.addTokenHeader(request, token))));
    }
    addTokenHeader(request, token) {
        /* this.token = this.tokenPorviderService.getToken(); */
        return request.clone({
            setHeaders: {
                authorization: `Bearer ${token}`
            }
        });
    }
}
AuthInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthInterceptor, deps: [{ token: CONFIGLIBRARY }, { token: i2.Router }, { token: TokenPorviderService }, { token: AuthenticationService }, { token: AuthenticationService }, { token: EncrDecrService }, { token: AuthMapperService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: IConfigLibrary, decorators: [{
                    type: Inject,
                    args: [CONFIGLIBRARY]
                }] }, { type: i2.Router }, { type: TokenPorviderService }, { type: AuthenticationService }, { type: AuthenticationService }, { type: EncrDecrService }, { type: AuthMapperService }]; } });

class LoginUserModel {
}

class TokenProviderModel {
}

class TokenModel {
}

class UserDetailModel {
}

class UserRolesModel {
}
class FunctionModel {
}
class CompanyModel {
}
class PaymentPeriodicityModel {
}
class RFCExcludedModel {
}

/*
 * Public API Surface of security-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthAdService, AuthInterceptor, AuthenticationService, CONFIGLIBRARY, CompanyModel, FunctionModel, IConfigLibrary, IWhiteList, LoginLibraryComponent, LoginUserModel, PaymentPeriodicityModel, RFCExcludedModel, RecoveryPasswordComponent, SecurityLibraryModule, SessionstorageTokenProviderService, TokenModel, TokenPorviderService, TokenProviderModel, UserDetailModel, UserRolesModel, defaultConfigLibrary };
//# sourceMappingURL=security-library.js.map
