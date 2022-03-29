import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CONFIGLIBRARY } from "../../../config-library.interface";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./encrDecr.service";
import * as i3 from "./authMapper.service";
import * as i4 from "../interfaces/token-payload-provider.interface";
import * as i5 from "../../../config-library.interface";
export class AuthenticationService {
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
AuthenticationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationService, deps: [{ token: CONFIGLIBRARY }, { token: i1.HttpClient }, { token: i2.EncrDecrService }, { token: i3.AuthMapperService }, { token: i4.TokenPorviderService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthenticationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthenticationService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i5.IConfigLibrary, decorators: [{
                    type: Inject,
                    args: [CONFIGLIBRARY]
                }] }, { type: i1.HttpClient }, { type: i2.EncrDecrService }, { type: i3.AuthMapperService }, { type: i4.TokenPorviderService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2VjdXJpdHktbGlicmFyeS9zcmMvbGliL2xvZ2luL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUluRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTckMsT0FBTyxFQUFFLGFBQWEsRUFBa0IsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7OztBQU9sRixNQUFNLE9BQU8scUJBQXFCO0lBTzlCLFlBQzJCLGFBQTZCLEVBQzVDLElBQWdCLEVBQ2hCLFFBQXlCLEVBQ3pCLGtCQUFxQyxFQUNyQyxvQkFBeUU7UUFIekUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUQ7UUFQckYsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQVFmLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUM7UUFDckQsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQ2pELENBQUM7SUFFTSxLQUFLLENBQUMsSUFBb0I7UUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEYsSUFBSSxLQUFLLEdBQUc7WUFDUixPQUFPLEVBQUUsSUFBSTtTQUNoQixDQUFBO1FBRUQsSUFBSSxHQUFHLEdBQUcsR0FBSSxJQUFJLENBQUMsTUFBTyxHQUFJLElBQUksQ0FBQyxjQUFlLEVBQUUsQ0FBQztRQUVyRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7YUFDaEMsSUFBSSxDQUNELEdBQUcsQ0FDQyxDQUFDLE9BQVksRUFBRSxFQUFFO1lBQ2IsSUFBSSxpQkFBaUIsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoSCxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDbkUsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUNKLENBQ0osQ0FBQztJQUNOLENBQUM7SUFDTSxZQUFZO1FBQ2YsSUFBSSxHQUFHLEdBQUcsR0FBSSxJQUFJLENBQUMsTUFBTyxHQUFJLElBQUksQ0FBQyxlQUFnQixFQUFFLENBQUM7UUFFdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVJLGVBQWU7UUFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sTUFBTTtRQUNULElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQXlCO1FBQzFDLElBQUksR0FBRyxHQUFHLEdBQUksSUFBSSxDQUFDLE1BQU8sR0FBSSxJQUFJLENBQUMsZ0JBQWlCLEVBQUUsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDOzttSEF6RFEscUJBQXFCLGtCQVFsQixhQUFhO3VIQVJoQixxQkFBcUIsY0FEUixNQUFNOzRGQUNuQixxQkFBcUI7a0JBRGpDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFTekIsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IEF1dGhNYXBwZXJTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aE1hcHBlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVuY3JEZWNyU2VydmljZSB9IGZyb20gJy4vZW5jckRlY3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFRva2VuUG9ydmlkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90b2tlbi1wYXlsb2FkLXByb3ZpZGVyLmludGVyZmFjZSc7XHJcblxyXG5pbXBvcnQgeyBSZXNwb25zZUFwaURUTyB9IGZyb20gJy4uL2ludGVyZmFjZXMvcmVzcG9uc2UtYXBpLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRva2VuUGF5bG9hZERUTyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3Rva2VuLXBheWxvYWQtaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IElMb2dpblByb3ZpZGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbG9naW4tcHJvdmlkZXItaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IENPTkZJR0xJQlJBUlksIElDb25maWdMaWJyYXJ5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy1saWJyYXJ5LmludGVyZmFjZVwiO1xyXG5cclxuaW1wb3J0IHsgVG9rZW5Qcm92aWRlck1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy90b2tlbi1wYXlsb2FkLm1vZGVsXCI7XHJcbmltcG9ydCB7IExvZ2luVXNlck1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL2xvZ2luLXVzZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvcmVzZXQtcGFzc3dvcmQubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZTxVc2VyRGV0YWlsc1R5cGUgPSBhbnksIFVzZXJSb2xlc1R5cGUgPSBhbnk+IGltcGxlbWVudHMgSUxvZ2luUHJvdmlkZXI8VXNlckRldGFpbHNUeXBlLFVzZXJSb2xlc1R5cGU+e1xyXG4gICAgYXBpVVJMOnN0cmluZztcclxuICAgIHJlZnJlc2hUb2tlblVSTDogc3RyaW5nO1xyXG4gICAgYWNjZXNzVG9rZW5VUkw6IHN0cmluZztcclxuICAgIHJlc2V0UGFzc3dvcmRVUkw6IHN0cmluZztcclxuICAgIGxvZ2luVHlwZTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgQEluamVjdChDT05GSUdMSUJSQVJZKSBjb25maWdMaWJyYXJ5OiBJQ29uZmlnTGlicmFyeSxcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBlbmNyRGVjcjogRW5jckRlY3JTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2F1dGhNYXBwZXJTZXJ2aWNlOiBBdXRoTWFwcGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHRva2VuUG9ydmlkZXJTZXJ2aWNlOiBUb2tlblBvcnZpZGVyU2VydmljZTxVc2VyRGV0YWlsc1R5cGUsVXNlclJvbGVzVHlwZT4pIHtcclxuICAgICAgICAgICAgdGhpcy5hcGlVUkwgPSBjb25maWdMaWJyYXJ5LmFwaVVSTDtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG9rZW5VUkwgPSBjb25maWdMaWJyYXJ5LnJlZnJlc2hUb2tlblVSTDtcclxuICAgICAgICAgICAgdGhpcy5hY2Nlc3NUb2tlblVSTCA9IGNvbmZpZ0xpYnJhcnkuYWNjZXNzVG9rZW5VUkw7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRQYXNzd29yZFVSTCA9IGNvbmZpZ0xpYnJhcnkucmVzZXRQYXNzd29yZFVSTDtcclxuICAgICAgICAgICAgdGhpcy5sb2dpblR5cGUgPSBjb25maWdMaWJyYXJ5LmxvZ2luVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9naW4odXNlcjogTG9naW5Vc2VyTW9kZWwpOiBPYnNlcnZhYmxlPFRva2VuUHJvdmlkZXJNb2RlbDxVc2VyRGV0YWlsc1R5cGUsVXNlclJvbGVzVHlwZT4+e1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5lbmNyRGVjci5zZXQodXNlci51c2VyTmFtZSArICd8JyArIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoJysnLCAneE1sM0prJykucmVwbGFjZSgvXFwvL2csICdQb3IyMUxkJykucmVwbGFjZSgnPScsICdNbDMyJyk7XHJcbiAgICAgICAgbGV0IHRva2VuID0ge1xyXG4gICAgICAgICAgICAndG9rZW4nOiBkYXRhXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdXJsID0gYCR7IHRoaXMuYXBpVVJMIH0keyB0aGlzLmFjY2Vzc1Rva2VuVVJMIH1gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHRva2VuKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBtYXAoXHJcbiAgICAgICAgICAgICAgICAocmVzcEFwaTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlY29kZUFjc2Vzc1Rva2VuOiBUb2tlblBheWxvYWREVE8gPSB0aGlzLmVuY3JEZWNyLmdldERlY29kZWRBY2Nlc3NUb2tlbihyZXNwQXBpLmNvbnRlbnQudG9rZW4uYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY29kZUFjc2Vzc1Rva2VuLkRhbm9uZVRva2VuUGF5bG9hZC50b2tlbiA9IHJlc3BBcGkuY29udGVudC50b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYXV0aE1hcHBlclNlcnZpY2UudHJhbnNmb3JtKGRlY29kZUFjc2Vzc1Rva2VuLkRhbm9uZVRva2VuUGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlZnJlc2hUb2tlbigpIHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7IHRoaXMuYXBpVVJMIH0keyB0aGlzLnJlZnJlc2hUb2tlblVSTCB9YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgJycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgcHVibGljIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudG9rZW5Qb3J2aWRlclNlcnZpY2UuZ2V0VG9rZW4oKSA/IHRydWUgOiBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ091dCgpe1xyXG4gICAgICAgIHRoaXMudG9rZW5Qb3J2aWRlclNlcnZpY2UucmVtb3ZlVG9rZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXRQYXNzd29yZChlbWFpbDogUmVzZXRQYXNzd29yZE1vZGVsKXtcclxuICAgICAgICBsZXQgdXJsID0gYCR7IHRoaXMuYXBpVVJMIH0keyB0aGlzLnJlc2V0UGFzc3dvcmRVUkwgfWA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZW1haWwpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0=