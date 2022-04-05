import { Inject, Injectable } from '@angular/core';
import { CONFIGLIBRARY } from '../../../config-library.interface';
import { of } from 'rxjs';
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
    }
    loginAD(data) {
        let decodeAcsessToken = this.encrDecr.getDecodedAccessToken(data.content.token.accessToken);
        decodeAcsessToken.DanoneTokenPayload.token = data.content.token;
        return of(this._authMapperService.transform(decodeAcsessToken.DanoneTokenPayload));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1BRC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2VjdXJpdHktbGlicmFyeS9zcmMvbGliL2xvZ2luL3NlcnZpY2VzL2F1dGgtQUQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFrQixNQUFNLG1DQUFtQyxDQUFDO0FBQ2xGLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7OztBQVl0QyxNQUFNLE9BQU8sYUFBYTtJQUt4QixZQUN5QixhQUE2QixFQUM1QyxJQUFnQixFQUNoQixRQUF5QixFQUN6QixrQkFBcUM7UUFGckMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBRTdDLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxDQUFDO0lBRU0sT0FBTyxDQUFDLElBQUk7UUFDakIsSUFBSSxpQkFBaUIsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDaEUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQzs7MkdBbEJVLGFBQWEsa0JBTWQsYUFBYTsrR0FOWixhQUFhLGNBRlosTUFBTTs0RkFFUCxhQUFhO2tCQUh6QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBT0ksTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPTkZJR0xJQlJBUlksIElDb25maWdMaWJyYXJ5IH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnLWxpYnJhcnkuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJTG9naW5Qcm92aWRlckFEIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9sb2dpbi1wcm92aWRlci1pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBSZXNwb25zZUFwaURUTyB9IGZyb20gJy4uL2ludGVyZmFjZXMvcmVzcG9uc2UtYXBpLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRva2VuUGF5bG9hZERUTyB9IGZyb20gJy4uL2ludGVyZmFjZXMvdG9rZW4tcGF5bG9hZC1pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUb2tlblByb3ZpZGVyTW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvdG9rZW4tcGF5bG9hZC5tb2RlbCc7XHJcbmltcG9ydCB7IEF1dGhNYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoTWFwcGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFbmNyRGVjclNlcnZpY2UgfSBmcm9tICcuL2VuY3JEZWNyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aEFkU2VydmljZTxVc2VyRGV0YWlsc1R5cGUgPSBhbnksIFVzZXJSb2xlc1R5cGUgPSBhbnk+IGltcGxlbWVudHMgSUxvZ2luUHJvdmlkZXJBRDxVc2VyRGV0YWlsc1R5cGUsVXNlclJvbGVzVHlwZT4ge1xyXG4gIGFwaVVSTDpzdHJpbmc7XHJcbiAgcmVmcmVzaFRva2VuVVJMPzogc3RyaW5nO1xyXG4gIHR5cGVMb2dpbj86IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KENPTkZJR0xJQlJBUlkpIGNvbmZpZ0xpYnJhcnk6IElDb25maWdMaWJyYXJ5LFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBlbmNyRGVjcjogRW5jckRlY3JTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfYXV0aE1hcHBlclNlcnZpY2U6IEF1dGhNYXBwZXJTZXJ2aWNlXHJcbiAgKSB7IFxyXG4gICAgdGhpcy5hcGlVUkwgPSBjb25maWdMaWJyYXJ5LmFwaVVSTDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dpbkFEKGRhdGEpOiBPYnNlcnZhYmxlPFRva2VuUHJvdmlkZXJNb2RlbDxVc2VyRGV0YWlsc1R5cGUsVXNlclJvbGVzVHlwZT4+IHtcclxuICAgIGxldCBkZWNvZGVBY3Nlc3NUb2tlbjogVG9rZW5QYXlsb2FkRFRPID0gdGhpcy5lbmNyRGVjci5nZXREZWNvZGVkQWNjZXNzVG9rZW4oZGF0YS5jb250ZW50LnRva2VuLmFjY2Vzc1Rva2VuKTtcclxuICAgIGRlY29kZUFjc2Vzc1Rva2VuLkRhbm9uZVRva2VuUGF5bG9hZC50b2tlbiA9IGRhdGEuY29udGVudC50b2tlbjtcclxuICAgIHJldHVybiBvZih0aGlzLl9hdXRoTWFwcGVyU2VydmljZS50cmFuc2Zvcm0oZGVjb2RlQWNzZXNzVG9rZW4uRGFub25lVG9rZW5QYXlsb2FkKSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=