import { Inject, Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import jwt_decode from 'jwt-decode';
import { CONFIGLIBRARY } from "../../../config-library.interface";
import * as i0 from "@angular/core";
import * as i1 from "../../../config-library.interface";
export class EncrDecrService {
    constructor(configLibrary) {
        this.encryptPhrase = configLibrary.encryptPhrase;
    }
    //Encrypt
    set(value) {
        var key = CryptoJS.enc.Utf8.parse(this.encryptPhrase);
        var iv = CryptoJS.enc.Utf8.parse(this.encryptPhrase);
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key, {
            //    keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        });
        return encrypted.toString();
    }
    //Decrypt
    get(value) {
        var key = CryptoJS.enc.Utf8.parse(this.encryptPhrase);
        var iv = CryptoJS.enc.Utf8.parse(this.encryptPhrase);
        var decrypted = CryptoJS.AES.decrypt(value, key, {
            // keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
    getDecodedAccessToken(token) {
        try {
            return jwt_decode(token);
        }
        catch (Error) {
            return null;
        }
    }
}
EncrDecrService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EncrDecrService, deps: [{ token: CONFIGLIBRARY }], target: i0.ɵɵFactoryTarget.Injectable });
EncrDecrService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EncrDecrService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EncrDecrService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.IConfigLibrary, decorators: [{
                    type: Inject,
                    args: [CONFIGLIBRARY]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jckRlY3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NlY3VyaXR5LWxpYnJhcnkvc3JjL2xpYi9sb2dpbi9zZXJ2aWNlcy9lbmNyRGVjci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDO0FBQ3RDLE9BQU8sVUFBVSxNQUFNLFlBQVksQ0FBQztBQUVwQyxPQUFPLEVBQUUsYUFBYSxFQUFrQixNQUFNLG1DQUFtQyxDQUFDOzs7QUFNbEYsTUFBTSxPQUFPLGVBQWU7SUFHeEIsWUFDMkIsYUFBNkI7UUFFcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFBO0lBQ3BELENBQUM7SUFDRCxTQUFTO0lBQ1QsR0FBRyxDQUFDLEtBQVU7UUFDVixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RELElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckQsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFDL0U7WUFDQSx1QkFBdUI7WUFDbkIsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ3ZCLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVc7U0FDcEMsQ0FBQyxDQUFDO1FBRVAsT0FBTyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELFNBQVM7SUFDVCxHQUFHLENBQUMsS0FBVTtRQUNWLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEQsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRCxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQzlDLG9CQUFvQjtZQUNuQixFQUFFLEVBQUUsRUFBRTtZQUNOLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDdkIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVztTQUNwQyxDQUFDLENBQUM7UUFFSCxPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQscUJBQXFCLENBQUMsS0FBYTtRQUMvQixJQUFHO1lBQ0MsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFNLEtBQUssRUFBQztZQUNSLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs2R0E1Q00sZUFBZSxrQkFJWixhQUFhO2lIQUpoQixlQUFlLGNBSFosTUFBTTs0RkFHVCxlQUFlO2tCQUozQixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBTVEsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgKiBhcyBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xyXG5pbXBvcnQgand0X2RlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcclxuXHJcbmltcG9ydCB7IENPTkZJR0xJQlJBUlksIElDb25maWdMaWJyYXJ5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy1saWJyYXJ5LmludGVyZmFjZVwiO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRW5jckRlY3JTZXJ2aWNlIHsgIFxyXG4gICAgZW5jcnlwdFBocmFzZTpzdHJpbmdcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBASW5qZWN0KENPTkZJR0xJQlJBUlkpIGNvbmZpZ0xpYnJhcnk6IElDb25maWdMaWJyYXJ5XHJcbiAgICApe1xyXG4gICAgICAgIHRoaXMuZW5jcnlwdFBocmFzZSA9IGNvbmZpZ0xpYnJhcnkuZW5jcnlwdFBocmFzZSBcclxuICAgIH1cclxuICAgIC8vRW5jcnlwdFxyXG4gICAgc2V0KHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB2YXIga2V5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UodGhpcy5lbmNyeXB0UGhyYXNlKTtcclxuICAgICAgICB2YXIgaXYgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZSh0aGlzLmVuY3J5cHRQaHJhc2UpO1xyXG4gICAgICAgIHZhciBlbmNyeXB0ZWQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZSh2YWx1ZS50b1N0cmluZygpKSwga2V5LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgIGtleVNpemU6IDEyOCAvIDgsXHJcbiAgICAgICAgICAgICAgICBpdjogaXYsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiBDcnlwdG9KUy5tb2RlLkNCQyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IENyeXB0b0pTLnBhZC5aZXJvUGFkZGluZ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVuY3J5cHRlZC50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRGVjcnlwdFxyXG4gICAgZ2V0KHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB2YXIga2V5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UodGhpcy5lbmNyeXB0UGhyYXNlKTtcclxuICAgICAgICB2YXIgaXYgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZSh0aGlzLmVuY3J5cHRQaHJhc2UpO1xyXG4gICAgICAgIHZhciBkZWNyeXB0ZWQgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCh2YWx1ZSwga2V5LCB7XHJcbiAgICAgICAgICAgLy8ga2V5U2l6ZTogMTI4IC8gOCxcclxuICAgICAgICAgICAgaXY6IGl2LFxyXG4gICAgICAgICAgICBtb2RlOiBDcnlwdG9KUy5tb2RlLkNCQyxcclxuICAgICAgICAgICAgcGFkZGluZzogQ3J5cHRvSlMucGFkLlplcm9QYWRkaW5nXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkZWNyeXB0ZWQudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlY29kZWRBY2Nlc3NUb2tlbih0b2tlbjogc3RyaW5nKTogYW55IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHJldHVybiBqd3RfZGVjb2RlKHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goRXJyb3Ipe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxufSJdfQ==