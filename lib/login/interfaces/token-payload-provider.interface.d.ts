import { TokenProviderModel } from "../models/token-payload.model";
export interface ITokenProvider<UserDetailsType, UserRolesType> {
    getToken(): TokenProviderModel<UserDetailsType, UserRolesType>;
    setToken(token: TokenProviderModel<UserDetailsType, UserRolesType>): any;
    removeToken(): void;
}
export declare abstract class TokenPorviderService<UserDetailsType = any, UserRolesType = any> implements ITokenProvider<UserDetailsType, UserRolesType> {
    abstract getToken(): TokenProviderModel<UserDetailsType, UserRolesType>;
    abstract setToken(token: TokenProviderModel<UserDetailsType, UserRolesType>): void;
    abstract removeToken(): void;
}
