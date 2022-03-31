import { InjectionToken } from '@angular/core';
export declare class IConfigLibrary {
    whiteList: IWhiteList[];
    encryptPhrase: string;
    apiURL: string;
    refreshTokenURL: string;
    accessTokenURL: string;
    accessTokenADURL: string;
    resetPasswordURL: string;
    loginType: string;
    redirectUri: string;
}
export declare class IWhiteList {
    word: string;
}
export declare const defaultConfigLibrary: IConfigLibrary;
export declare const CONFIGLIBRARY: InjectionToken<IConfigLibrary>;
