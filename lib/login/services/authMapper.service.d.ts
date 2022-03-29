import { TokenProviderDTO } from "../interfaces/token-payload-interface";
import { TokenProviderModel } from "../models/token-payload.model";
import { MapperService } from './mapperTemplate.service';
import * as i0 from "@angular/core";
export declare class AuthMapperService extends MapperService<TokenProviderDTO<any, any>, TokenProviderModel<any, any>> {
    protected map(response: TokenProviderDTO<any, any>): TokenProviderModel<any, any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthMapperService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthMapperService>;
}
