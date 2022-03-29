import { IConfigLibrary } from "../../../config-library.interface";
import * as i0 from "@angular/core";
export declare class EncrDecrService {
    encryptPhrase: string;
    constructor(configLibrary: IConfigLibrary);
    set(value: any): string;
    get(value: any): string;
    getDecodedAccessToken(token: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<EncrDecrService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EncrDecrService>;
}
