import { Injectable } from '@angular/core';
import { MapperService } from './mapperTemplate.service';
import * as i0 from "@angular/core";
export class AuthMapperService extends MapperService {
    map(response) {
        return {
            userDetails: response.userDetails,
            roles: response.roles,
            token: response.token
        };
    }
}
AuthMapperService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthMapperService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
AuthMapperService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthMapperService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthMapperService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aE1hcHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2VjdXJpdHktbGlicmFyeS9zcmMvbGliL2xvZ2luL3NlcnZpY2VzL2F1dGhNYXBwZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFHekQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGFBQXNFO0lBRS9GLEdBQUcsQ0FBQyxRQUFtQztRQUM3QyxPQUFPO1lBQ0gsV0FBVyxFQUFHLFFBQW9ELENBQUMsV0FBVztZQUM5RSxLQUFLLEVBQUcsUUFBb0QsQ0FBQyxLQUFLO1lBQ2xFLEtBQUssRUFBRyxRQUFvRCxDQUFDLEtBQUs7U0FDckUsQ0FBQTtJQUNMLENBQUM7OytHQVJRLGlCQUFpQjttSEFBakIsaUJBQWlCLGNBREosTUFBTTs0RkFDbkIsaUJBQWlCO2tCQUQ3QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFRva2VuUHJvdmlkZXJEVE8gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90b2tlbi1wYXlsb2FkLWludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUb2tlblByb3ZpZGVyTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Rva2VuLXBheWxvYWQubW9kZWxcIjtcclxuaW1wb3J0IHsgTWFwcGVyU2VydmljZSB9IGZyb20gJy4vbWFwcGVyVGVtcGxhdGUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQXV0aE1hcHBlclNlcnZpY2UgZXh0ZW5kcyBNYXBwZXJTZXJ2aWNlPFRva2VuUHJvdmlkZXJEVE88YW55LCBhbnk+LCBUb2tlblByb3ZpZGVyTW9kZWw8YW55LGFueT4+IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgbWFwKHJlc3BvbnNlOiBUb2tlblByb3ZpZGVyRFRPPGFueSxhbnk+KTogVG9rZW5Qcm92aWRlck1vZGVsPGFueSxhbnk+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VyRGV0YWlsczogKHJlc3BvbnNlIGFzIHVua25vd24gYXMgVG9rZW5Qcm92aWRlck1vZGVsPGFueSwgYW55PikudXNlckRldGFpbHMsXHJcbiAgICAgICAgICAgIHJvbGVzOiAocmVzcG9uc2UgYXMgdW5rbm93biBhcyBUb2tlblByb3ZpZGVyTW9kZWw8YW55LCBhbnk+KS5yb2xlcyxcclxuICAgICAgICAgICAgdG9rZW46IChyZXNwb25zZSBhcyB1bmtub3duIGFzIFRva2VuUHJvdmlkZXJNb2RlbDxhbnksIGFueT4pLnRva2VuXHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufSJdfQ==