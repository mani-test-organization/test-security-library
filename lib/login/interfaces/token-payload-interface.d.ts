import { TokenDTO } from "./token-interface";
export interface TokenPayloadDTO {
    DanoneTokenPayload: TokenProviderDTO<any, any>;
}
export interface TokenProviderDTO<UserDetailsType, UserRolesType> {
    token: TokenDTO;
    userDetails: UserDetailsType;
    roles: UserRolesType[];
}
