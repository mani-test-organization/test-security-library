import { Observable } from "rxjs";
import { TokenProviderModel } from "../models/token-payload.model";
import { LoginUserModel } from '../models/login-user.model';
import { ResetPasswordModel } from "../models/reset-password.model";
export interface ILoginProvider<UserDetailsType, UserRolesType> {
    login(user: LoginUserModel): Observable<TokenProviderModel<UserDetailsType, UserRolesType>>;
}
export interface ILoginProviderAD<UserDetailsType, UserRolesType> {
    loginAD(token: string): Observable<TokenProviderModel<UserDetailsType, UserRolesType>>;
}
export interface IRestePassword {
    resetPassword(user: ResetPasswordModel): Observable<any>;
}
