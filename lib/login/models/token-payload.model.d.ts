import { TokenModel } from "./token.model";
export declare class TokenProviderModel<UserDetailsType, UserRolesType> {
    token: TokenModel;
    userDetails: UserDetailsType;
    roles: UserRolesType[];
}
