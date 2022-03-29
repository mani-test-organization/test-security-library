import { Inject, Injectable } from '@angular/core';
import { CONFIGLIBRARY } from '../../../config-library.interface';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./encrDecr.service";
import * as i3 from "./authMapper.service";
import * as i4 from "../../../config-library.interface";
export class AuthAdService {
    constructor(configLibrary, http, encrDecr, _authMapperService) {
        this.http = http;
        this.encrDecr = encrDecr;
        this._authMapperService = _authMapperService;
        this.apiURL = configLibrary.apiURL;
        this.accessTokenURLAD = configLibrary.accessTokenADURL;
    }
    loginAD(token) {
        let body = {
            'token': token
        };
        let url = `${this.apiURL}${this.accessTokenURLAD}`;
        return this.http.post(url, body)
            .pipe(map((respApi) => {
            let decodeAcsessToken = this.encrDecr.getDecodedAccessToken(respApi.content.token.accessToken);
            decodeAcsessToken.DanoneTokenPayload.token = respApi.content.token;
            return this._authMapperService.transform(decodeAcsessToken.DanoneTokenPayload);
        }));
    }
}
AuthAdService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthAdService, deps: [{ token: CONFIGLIBRARY }, { token: i1.HttpClient }, { token: i2.EncrDecrService }, { token: i3.AuthMapperService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthAdService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthAdService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthAdService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i4.IConfigLibrary, decorators: [{
                    type: Inject,
                    args: [CONFIGLIBRARY]
                }] }, { type: i1.HttpClient }, { type: i2.EncrDecrService }, { type: i3.AuthMapperService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1BRC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2VjdXJpdHktbGlicmFyeS9zcmMvbGliL2xvZ2luL3NlcnZpY2VzL2F1dGgtQUQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFrQixNQUFNLG1DQUFtQyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBV3JDLE1BQU0sT0FBTyxhQUFhO0lBTXhCLFlBQ3lCLGFBQTZCLEVBQzVDLElBQWdCLEVBQ2hCLFFBQXlCLEVBQ3pCLGtCQUFxQztRQUZyQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFFN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7SUFDekQsQ0FBQztJQUdNLE9BQU8sQ0FBQyxLQUFhO1FBQzFCLElBQUksSUFBSSxHQUFHO1lBQ1QsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFBO1FBQ0QsSUFBSSxHQUFHLEdBQUcsR0FBSSxJQUFJLENBQUMsTUFBTyxHQUFJLElBQUksQ0FBQyxnQkFBaUIsRUFBRSxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQzthQUMvQixJQUFJLENBQ0QsR0FBRyxDQUNDLENBQUMsT0FBWSxFQUFFLEVBQUU7WUFDYixJQUFJLGlCQUFpQixHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hILGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNuRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNuRixDQUFDLENBQ0osQ0FDSixDQUFDO0lBQ04sQ0FBQzs7MkdBaENZLGFBQWEsa0JBT2QsYUFBYTsrR0FQWixhQUFhLGNBRlosTUFBTTs0RkFFUCxhQUFhO2tCQUh6QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBUUksTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPTkZJR0xJQlJBUlksIElDb25maWdMaWJyYXJ5IH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnLWxpYnJhcnkuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElMb2dpblByb3ZpZGVyQUQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2xvZ2luLXByb3ZpZGVyLWludGVyZmFjZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNlQXBpRFRPIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9yZXNwb25zZS1hcGkuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVG9rZW5QYXlsb2FkRFRPIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90b2tlbi1wYXlsb2FkLWludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRva2VuUHJvdmlkZXJNb2RlbCB9IGZyb20gJy4uL21vZGVscy90b2tlbi1wYXlsb2FkLm1vZGVsJztcclxuaW1wb3J0IHsgQXV0aE1hcHBlclNlcnZpY2UgfSBmcm9tICcuL2F1dGhNYXBwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEVuY3JEZWNyU2VydmljZSB9IGZyb20gJy4vZW5jckRlY3Iuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoQWRTZXJ2aWNlPFVzZXJEZXRhaWxzVHlwZSA9IGFueSwgVXNlclJvbGVzVHlwZSA9IGFueT4gaW1wbGVtZW50cyBJTG9naW5Qcm92aWRlckFEPFVzZXJEZXRhaWxzVHlwZSxVc2VyUm9sZXNUeXBlPiB7XHJcbiAgYXBpVVJMOnN0cmluZztcclxuICByZWZyZXNoVG9rZW5VUkw/OiBzdHJpbmc7XHJcbiAgYWNjZXNzVG9rZW5VUkxBRDogc3RyaW5nO1xyXG4gIHR5cGVMb2dpbj86IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KENPTkZJR0xJQlJBUlkpIGNvbmZpZ0xpYnJhcnk6IElDb25maWdMaWJyYXJ5LFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBlbmNyRGVjcjogRW5jckRlY3JTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfYXV0aE1hcHBlclNlcnZpY2U6IEF1dGhNYXBwZXJTZXJ2aWNlXHJcbiAgKSB7IFxyXG4gICAgdGhpcy5hcGlVUkwgPSBjb25maWdMaWJyYXJ5LmFwaVVSTDtcclxuICAgIHRoaXMuYWNjZXNzVG9rZW5VUkxBRCA9IGNvbmZpZ0xpYnJhcnkuYWNjZXNzVG9rZW5BRFVSTDtcclxuICB9XHJcblxyXG4gIFxyXG4gIHB1YmxpYyBsb2dpbkFEKHRva2VuOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFRva2VuUHJvdmlkZXJNb2RlbDxVc2VyRGV0YWlsc1R5cGUsVXNlclJvbGVzVHlwZT4+e1xyXG4gICAgbGV0IGJvZHkgPSB7XHJcbiAgICAgICd0b2tlbic6IHRva2VuXHJcbiAgICB9XHJcbiAgICBsZXQgdXJsID0gYCR7IHRoaXMuYXBpVVJMIH0keyB0aGlzLmFjY2Vzc1Rva2VuVVJMQUQgfWA7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBib2R5KVxyXG4gICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKFxyXG4gICAgICAgICAgICAocmVzcEFwaTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVjb2RlQWNzZXNzVG9rZW46IFRva2VuUGF5bG9hZERUTyA9IHRoaXMuZW5jckRlY3IuZ2V0RGVjb2RlZEFjY2Vzc1Rva2VuKHJlc3BBcGkuY29udGVudC50b2tlbi5hY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgICAgICAgICBkZWNvZGVBY3Nlc3NUb2tlbi5EYW5vbmVUb2tlblBheWxvYWQudG9rZW4gPSByZXNwQXBpLmNvbnRlbnQudG9rZW47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYXV0aE1hcHBlclNlcnZpY2UudHJhbnNmb3JtKGRlY29kZUFjc2Vzc1Rva2VuLkRhbm9uZVRva2VuUGF5bG9hZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICApO1xyXG59XHJcblxyXG59XHJcbiJdfQ==