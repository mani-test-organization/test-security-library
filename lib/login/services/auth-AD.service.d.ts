import { HttpClient } from '@angular/common/http';
import { IConfigLibrary } from '../../../config-library.interface';
import { Observable } from 'rxjs';
import { ILoginProviderAD } from '../interfaces/login-provider-interface';
import { TokenProviderModel } from '../models/token-payload.model';
import { AuthMapperService } from './authMapper.service';
import { EncrDecrService } from './encrDecr.service';
import * as i0 from "@angular/core";
export declare class AuthAdService<UserDetailsType = any, UserRolesType = any> implements ILoginProviderAD<UserDetailsType, UserRolesType> {
    private http;
    private encrDecr;
    private _authMapperService;
    apiURL: string;
    refreshTokenURL?: string;
    accessTokenURLAD: string;
    typeLogin?: string;
    constructor(configLibrary: IConfigLibrary, http: HttpClient, encrDecr: EncrDecrService, _authMapperService: AuthMapperService);
    loginAD(token: string): Observable<TokenProviderModel<UserDetailsType, UserRolesType>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthAdService<any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthAdService<any, any>>;
}
