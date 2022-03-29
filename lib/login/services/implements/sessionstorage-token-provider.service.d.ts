import { TokenProviderModel } from '../../models/token-payload.model';
import { ITokenProvider } from '../../interfaces/token-payload-provider.interface';
import * as i0 from "@angular/core";
export declare class SessionstorageTokenProviderService<userDetailsType, userRolesType> implements ITokenProvider<userDetailsType, userRolesType> {
    private userSessionKey;
    removeToken(): void;
    setToken(token: TokenProviderModel<userDetailsType, userRolesType>): void;
    getToken(): TokenProviderModel<userDetailsType, userRolesType>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SessionstorageTokenProviderService<any, any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SessionstorageTokenProviderService<any, any>>;
}
