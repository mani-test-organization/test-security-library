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
        this.accessTokenURLAD = configLibrary.accessTokenADURL;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1BRC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2VjdXJpdHktbGlicmFyeS9zcmMvbGliL2xvZ2luL3NlcnZpY2VzL2F1dGgtQUQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFrQixNQUFNLG1DQUFtQyxDQUFDO0FBQ2xGLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7OztBQVl0QyxNQUFNLE9BQU8sYUFBYTtJQU14QixZQUN5QixhQUE2QixFQUM1QyxJQUFnQixFQUNoQixRQUF5QixFQUN6QixrQkFBcUM7UUFGckMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBRTdDLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQ3pELENBQUM7SUFFTSxPQUFPLENBQUMsSUFBSTtRQUNqQixJQUFJLGlCQUFpQixHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdHLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNoRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDOzsyR0FwQlUsYUFBYSxrQkFPZCxhQUFhOytHQVBaLGFBQWEsY0FGWixNQUFNOzRGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFRSSxNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09ORklHTElCUkFSWSwgSUNvbmZpZ0xpYnJhcnkgfSBmcm9tICcuLi8uLi8uLi9jb25maWctbGlicmFyeS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElMb2dpblByb3ZpZGVyQUQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2xvZ2luLXByb3ZpZGVyLWludGVyZmFjZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNlQXBpRFRPIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9yZXNwb25zZS1hcGkuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVG9rZW5QYXlsb2FkRFRPIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy90b2tlbi1wYXlsb2FkLWludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRva2VuUHJvdmlkZXJNb2RlbCB9IGZyb20gJy4uL21vZGVscy90b2tlbi1wYXlsb2FkLm1vZGVsJztcclxuaW1wb3J0IHsgQXV0aE1hcHBlclNlcnZpY2UgfSBmcm9tICcuL2F1dGhNYXBwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEVuY3JEZWNyU2VydmljZSB9IGZyb20gJy4vZW5jckRlY3Iuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoQWRTZXJ2aWNlPFVzZXJEZXRhaWxzVHlwZSA9IGFueSwgVXNlclJvbGVzVHlwZSA9IGFueT4gaW1wbGVtZW50cyBJTG9naW5Qcm92aWRlckFEPFVzZXJEZXRhaWxzVHlwZSxVc2VyUm9sZXNUeXBlPiB7XHJcbiAgYXBpVVJMOnN0cmluZztcclxuICByZWZyZXNoVG9rZW5VUkw/OiBzdHJpbmc7XHJcbiAgYWNjZXNzVG9rZW5VUkxBRDogc3RyaW5nO1xyXG4gIHR5cGVMb2dpbj86IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KENPTkZJR0xJQlJBUlkpIGNvbmZpZ0xpYnJhcnk6IElDb25maWdMaWJyYXJ5LFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBlbmNyRGVjcjogRW5jckRlY3JTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfYXV0aE1hcHBlclNlcnZpY2U6IEF1dGhNYXBwZXJTZXJ2aWNlXHJcbiAgKSB7IFxyXG4gICAgdGhpcy5hcGlVUkwgPSBjb25maWdMaWJyYXJ5LmFwaVVSTDtcclxuICAgIHRoaXMuYWNjZXNzVG9rZW5VUkxBRCA9IGNvbmZpZ0xpYnJhcnkuYWNjZXNzVG9rZW5BRFVSTDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dpbkFEKGRhdGEpOiBPYnNlcnZhYmxlPFRva2VuUHJvdmlkZXJNb2RlbDxVc2VyRGV0YWlsc1R5cGUsVXNlclJvbGVzVHlwZT4+IHtcclxuICAgIGxldCBkZWNvZGVBY3Nlc3NUb2tlbjogVG9rZW5QYXlsb2FkRFRPID0gdGhpcy5lbmNyRGVjci5nZXREZWNvZGVkQWNjZXNzVG9rZW4oZGF0YS5jb250ZW50LnRva2VuLmFjY2Vzc1Rva2VuKTtcclxuICAgIGRlY29kZUFjc2Vzc1Rva2VuLkRhbm9uZVRva2VuUGF5bG9hZC50b2tlbiA9IGRhdGEuY29udGVudC50b2tlbjtcclxuICAgIHJldHVybiBvZih0aGlzLl9hdXRoTWFwcGVyU2VydmljZS50cmFuc2Zvcm0oZGVjb2RlQWNzZXNzVG9rZW4uRGFub25lVG9rZW5QYXlsb2FkKSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=