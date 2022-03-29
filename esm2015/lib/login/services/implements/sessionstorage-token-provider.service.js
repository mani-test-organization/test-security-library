import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SessionstorageTokenProviderService {
    constructor() {
        this.userSessionKey = 'token';
    }
    removeToken() {
        sessionStorage.removeItem(this.userSessionKey);
    }
    setToken(token) {
        sessionStorage.setItem(this.userSessionKey, JSON.stringify(token));
    }
    getToken() {
        if (sessionStorage.getItem(this.userSessionKey)) {
            return JSON.parse(sessionStorage.getItem(this.userSessionKey));
        }
        return undefined;
    }
}
SessionstorageTokenProviderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SessionstorageTokenProviderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SessionstorageTokenProviderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SessionstorageTokenProviderService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SessionstorageTokenProviderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbnN0b3JhZ2UtdG9rZW4tcHJvdmlkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NlY3VyaXR5LWxpYnJhcnkvc3JjL2xpYi9sb2dpbi9zZXJ2aWNlcy9pbXBsZW1lbnRzL3Nlc3Npb25zdG9yYWdlLXRva2VuLXByb3ZpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLGtDQUFrQztJQUgvQztRQUlVLG1CQUFjLEdBQUcsT0FBTyxDQUFDO0tBZ0JsQztJQWRRLFdBQVc7UUFDaEIsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUF3RDtRQUN0RSxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBRyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBQztZQUM3QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFVLENBQXNELENBQUM7U0FDOUg7UUFDRCxPQUFPLFNBQVUsQ0FBQztJQUN0QixDQUFDOztnSUFoQlUsa0NBQWtDO29JQUFsQyxrQ0FBa0MsY0FGakMsTUFBTTs0RkFFUCxrQ0FBa0M7a0JBSDlDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb2tlblByb3ZpZGVyTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tcGF5bG9hZC5tb2RlbCc7XHJcbmltcG9ydCB7IElUb2tlblByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy90b2tlbi1wYXlsb2FkLXByb3ZpZGVyLmludGVyZmFjZSc7XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlc3Npb25zdG9yYWdlVG9rZW5Qcm92aWRlclNlcnZpY2U8dXNlckRldGFpbHNUeXBlLHVzZXJSb2xlc1R5cGU+IGltcGxlbWVudHMgSVRva2VuUHJvdmlkZXI8dXNlckRldGFpbHNUeXBlLHVzZXJSb2xlc1R5cGU+e1xyXG4gIHByaXZhdGUgdXNlclNlc3Npb25LZXkgPSAndG9rZW4nO1xyXG5cclxuICBwdWJsaWMgcmVtb3ZlVG9rZW4oKTp2b2lkIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy51c2VyU2Vzc2lvbktleSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0VG9rZW4odG9rZW46IFRva2VuUHJvdmlkZXJNb2RlbDx1c2VyRGV0YWlsc1R5cGUsdXNlclJvbGVzVHlwZT4pOiB2b2lkIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGhpcy51c2VyU2Vzc2lvbktleSwgSlNPTi5zdHJpbmdpZnkodG9rZW4pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRUb2tlbigpOiBUb2tlblByb3ZpZGVyTW9kZWw8dXNlckRldGFpbHNUeXBlLHVzZXJSb2xlc1R5cGU+IHtcclxuICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnVzZXJTZXNzaW9uS2V5KSl7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnVzZXJTZXNzaW9uS2V5KWFzIHN0cmluZykgYXMgVG9rZW5Qcm92aWRlck1vZGVsPHVzZXJEZXRhaWxzVHlwZSx1c2VyUm9sZXNUeXBlPjsgXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZCE7XHJcbiAgfVxyXG59XHJcbiJdfQ==