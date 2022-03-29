import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { CONFIGLIBRARY } from "../../../config-library.interface";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../interfaces/token-payload-provider.interface";
import * as i3 from "../services/auth.service";
import * as i4 from "../services/encrDecr.service";
import * as i5 from "../services/authMapper.service";
import * as i6 from "../../../config-library.interface";
export class AuthInterceptor {
    constructor(configLibrary, router, tokenPorviderService, authService, auth, encrDecr, _authMapperService) {
        this.router = router;
        this.tokenPorviderService = tokenPorviderService;
        this.authService = authService;
        this.auth = auth;
        this.encrDecr = encrDecr;
        this._authMapperService = _authMapperService;
        this.isRefreshing = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
        this.whiteList = configLibrary.whiteList;
        this.refreshTokenURL = configLibrary.refreshTokenURL;
        this.accessTokenURL = configLibrary.accessTokenURL;
    }
    intercept(req, next) {
        this.token = this.tokenPorviderService.getToken();
        let isNeedToken = true;
        if (this.whiteList) {
            this.whiteList.forEach(element => {
                if (req.url.includes(`${element.word}`)) {
                    isNeedToken = false;
                    req.clone({
                        setHeaders: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        }
                    });
                }
                return next.handle(req);
            });
        }
        if (this.token && isNeedToken) {
            req = this.addTokenHeader(req, this.token.token.accessToken);
        }
        if (this.token && req.url.includes(`${this.refreshTokenURL}`)) {
            req = this.addTokenHeader(req, this.token.token.refreshToken);
        }
        return next.handle(req).pipe(catchError(e => {
            // Checamos si tiene acceso...
            if (e.status == 401) {
                if (!e.url.includes(this.accessTokenURL)
                    && !e.url.includes(this.refreshTokenURL)) {
                    return this.handle401Error(req, next);
                }
                else {
                    // No tiene autorizacion (UnAuthorized)
                    // Si se vence el token en el backend..se cierra la sesion en el frontend
                    if (this.authService.isAuthenticated()) {
                        this.authService.logOut();
                    }
                    this.router.navigate(['auth/login']);
                }
            }
            // checamos si no esta autorizado...
            if (e.status == 403) {
                this.authService.logOut();
                this.router.navigate(['auth/login']);
                Swal.fire('Acceso Denegado', `Hola ${this.token.userDetails.name} no tienes acceso a este recurso`, 'warning');
            }
            return throwError(e);
        }));
    }
    handle401Error(request, next) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.auth.refreshToken().pipe(switchMap((token) => {
                this.isRefreshing = false;
                let decodeAcsessToken = this.encrDecr.getDecodedAccessToken(token.content.token.accessToken);
                decodeAcsessToken.DanoneTokenPayload.token = token.content.token;
                this.tokenPorviderService.setToken(this._authMapperService.transform(decodeAcsessToken.DanoneTokenPayload));
                this.refreshTokenSubject.next(decodeAcsessToken.DanoneTokenPayload.token.accessToken);
                return next.handle(this.addTokenHeader(request, decodeAcsessToken.DanoneTokenPayload.token.accessToken));
            }), catchError((err) => {
                this.isRefreshing = false;
                if (this.authService.isAuthenticated()) {
                    this.authService.logOut();
                }
                this.router.navigate(['auth/login']);
                return throwError(err);
            }));
        }
        return this.refreshTokenSubject.pipe(filter(token => token !== null), take(1), switchMap((token) => next.handle(this.addTokenHeader(request, token))));
    }
    addTokenHeader(request, token) {
        /* this.token = this.tokenPorviderService.getToken(); */
        return request.clone({
            setHeaders: {
                authorization: `Bearer ${token}`
            }
        });
    }
}
AuthInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthInterceptor, deps: [{ token: CONFIGLIBRARY }, { token: i1.Router }, { token: i2.TokenPorviderService }, { token: i3.AuthenticationService }, { token: i3.AuthenticationService }, { token: i4.EncrDecrService }, { token: i5.AuthMapperService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i6.IConfigLibrary, decorators: [{
                    type: Inject,
                    args: [CONFIGLIBRARY]
                }] }, { type: i1.Router }, { type: i2.TokenPorviderService }, { type: i3.AuthenticationService }, { type: i3.AuthenticationService }, { type: i4.EncrDecrService }, { type: i5.AuthMapperService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NlY3VyaXR5LWxpYnJhcnkvc3JjL2xpYi9sb2dpbi9pbnRlcmNlcHRvcnMvYXV0aC1pbnRlcmNlcHRvci5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRCxPQUFPLEVBQUUsZUFBZSxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBYSxTQUFTLEVBQUUsSUFBSSxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDckYsT0FBTyxJQUFJLE1BQU0sYUFBYSxDQUFDO0FBSS9CLE9BQU8sRUFBRSxhQUFhLEVBQThCLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7O0FBWTlGLE1BQU0sT0FBTyxlQUFlO0lBTTFCLFlBQ3lCLGFBQTZCLEVBQzVDLE1BQWMsRUFDZCxvQkFBMEMsRUFDMUMsV0FBa0MsRUFDbEMsSUFBcUMsRUFDckMsUUFBeUIsRUFDekIsa0JBQXFDO1FBTHJDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFpQztRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBZ0V2QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQix3QkFBbUIsR0FBeUIsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7UUEvRGpGLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLGFB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QVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDN0I7Z0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7UUFFRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsRUFDL0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ3ZFLENBQUM7SUFDSixDQUFDO0lBRU8sY0FBYyxDQUFDLE9BQXlCLEVBQUUsS0FBYTtRQUM3RCx3REFBd0Q7UUFFeEQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ25CLFVBQVUsRUFBRTtnQkFDVixhQUFhLEVBQUUsVUFBVyxLQUFNLEVBQUU7YUFDbkM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs2R0EzSFUsZUFBZSxrQkFPaEIsYUFBYTtpSEFQWixlQUFlOzRGQUFmLGVBQWU7a0JBRDNCLFVBQVU7OzBCQVFOLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbHRlciwgcmV0cnlXaGVuLCBzd2l0Y2hNYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5cclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IENPTkZJR0xJQlJBUlksIElDb25maWdMaWJyYXJ5LCBJV2hpdGVMaXN0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy1saWJyYXJ5LmludGVyZmFjZVwiO1xyXG5cclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFRva2VuUHJvdmlkZXJNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvdG9rZW4tcGF5bG9hZC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBUb2tlblBvcnZpZGVyU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdG9rZW4tcGF5bG9hZC1wcm92aWRlci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBSZXNwb25zZUFwaURUTyB9IGZyb20gJy4uL2ludGVyZmFjZXMvcmVzcG9uc2UtYXBpLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEVuY3JEZWNyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2VuY3JEZWNyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUb2tlblBheWxvYWREVE8gfSBmcm9tICcuLi9pbnRlcmZhY2VzL3Rva2VuLXBheWxvYWQtaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgQXV0aE1hcHBlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoTWFwcGVyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICB0b2tlbiE6IFRva2VuUHJvdmlkZXJNb2RlbDxhbnksIGFueT47XHJcbiAgd2hpdGVMaXN0OiBBcnJheTxJV2hpdGVMaXN0PlxyXG4gIHJlZnJlc2hUb2tlblVSTDogc3RyaW5nO1xyXG4gIGFjY2Vzc1Rva2VuVVJMOiBzdHJpbmc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KENPTkZJR0xJQlJBUlkpIGNvbmZpZ0xpYnJhcnk6IElDb25maWdMaWJyYXJ5LFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgdG9rZW5Qb3J2aWRlclNlcnZpY2U6IFRva2VuUG9ydmlkZXJTZXJ2aWNlLCBcclxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgYXV0aDogQXV0aGVudGljYXRpb25TZXJ2aWNlPGFueSwgYW55PixcclxuICAgIHByaXZhdGUgZW5jckRlY3I6IEVuY3JEZWNyU2VydmljZSxcclxuICAgIHByaXZhdGUgX2F1dGhNYXBwZXJTZXJ2aWNlOiBBdXRoTWFwcGVyU2VydmljZVxyXG4gICl7XHJcbiAgICB0aGlzLndoaXRlTGlzdCA9IGNvbmZpZ0xpYnJhcnkud2hpdGVMaXN0XHJcbiAgICB0aGlzLnJlZnJlc2hUb2tlblVSTCA9IGNvbmZpZ0xpYnJhcnkucmVmcmVzaFRva2VuVVJMO1xyXG4gICAgdGhpcy5hY2Nlc3NUb2tlblVSTCA9IGNvbmZpZ0xpYnJhcnkuYWNjZXNzVG9rZW5VUkw7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIHRoaXMudG9rZW4gPSB0aGlzLnRva2VuUG9ydmlkZXJTZXJ2aWNlLmdldFRva2VuKCk7XHJcbiAgICBsZXQgaXNOZWVkVG9rZW4gOiBCb29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBpZih0aGlzLndoaXRlTGlzdCl7XHJcbiAgICAgIHRoaXMud2hpdGVMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYocmVxLnVybC5pbmNsdWRlcyhgJHtlbGVtZW50LndvcmR9YCkpe1xyXG4gICAgICAgICAgaXNOZWVkVG9rZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICByZXEuY2xvbmUoe1xyXG4gICAgICAgICAgICBzZXRIZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7ICBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBpZiAodGhpcy50b2tlbiAmJiBpc05lZWRUb2tlbikge1xyXG4gICAgICByZXEgPSB0aGlzLmFkZFRva2VuSGVhZGVyKHJlcSwgdGhpcy50b2tlbi50b2tlbi5hY2Nlc3NUb2tlbiBhcyBzdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMudG9rZW4gJiYgcmVxLnVybC5pbmNsdWRlcyhgJHt0aGlzLnJlZnJlc2hUb2tlblVSTH1gKSl7XHJcbiAgICAgIHJlcSA9IHRoaXMuYWRkVG9rZW5IZWFkZXIocmVxLCB0aGlzLnRva2VuLnRva2VuLnJlZnJlc2hUb2tlbiBhcyBzdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpLnBpcGUoY2F0Y2hFcnJvcihcclxuICAgICAgZSA9PiB7XHJcbiAgICAgICAgLy8gQ2hlY2Ftb3Mgc2kgdGllbmUgYWNjZXNvLi4uXHJcbiAgICAgICAgaWYgKGUuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgICAgaWYoIWUudXJsLmluY2x1ZGVzKHRoaXMuYWNjZXNzVG9rZW5VUkwpXHJcbiAgICAgICAgICAgICAgJiYgIWUudXJsLmluY2x1ZGVzKHRoaXMucmVmcmVzaFRva2VuVVJMKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGU0MDFFcnJvcihyZXEsIG5leHQpO1xyXG4gICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAvLyBObyB0aWVuZSBhdXRvcml6YWNpb24gKFVuQXV0aG9yaXplZClcclxuICAgICAgICAgICAgLy8gU2kgc2UgdmVuY2UgZWwgdG9rZW4gZW4gZWwgYmFja2VuZC4uc2UgY2llcnJhIGxhIHNlc2lvbiBlbiBlbCBmcm9udGVuZFxyXG4gICAgICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dPdXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2F1dGgvbG9naW4nXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVjYW1vcyBzaSBubyBlc3RhIGF1dG9yaXphZG8uLi5cclxuICAgICAgICBpZiAoZS5zdGF0dXMgPT0gNDAzKSB7XHJcbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ091dCgpO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhdXRoL2xvZ2luJ10pO1xyXG4gICAgICAgICAgU3dhbC5maXJlKCdBY2Nlc28gRGVuZWdhZG8nLCBgSG9sYSAke3RoaXMudG9rZW4udXNlckRldGFpbHMubmFtZX0gbm8gdGllbmVzIGFjY2VzbyBhIGVzdGUgcmVjdXJzb2AsICd3YXJuaW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICApKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNSZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSByZWZyZXNoVG9rZW5TdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGU0MDFFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcikge1xyXG4gICAgaWYgKCF0aGlzLmlzUmVmcmVzaGluZykge1xyXG4gICAgICB0aGlzLmlzUmVmcmVzaGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMucmVmcmVzaFRva2VuU3ViamVjdC5uZXh0KG51bGwpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuYXV0aC5yZWZyZXNoVG9rZW4oKS5waXBlKFxyXG4gICAgICAgIHN3aXRjaE1hcCgodG9rZW46IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBsZXQgZGVjb2RlQWNzZXNzVG9rZW46IFRva2VuUGF5bG9hZERUTyA9IHRoaXMuZW5jckRlY3IuZ2V0RGVjb2RlZEFjY2Vzc1Rva2VuKHRva2VuLmNvbnRlbnQudG9rZW4uYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgICAgZGVjb2RlQWNzZXNzVG9rZW4uRGFub25lVG9rZW5QYXlsb2FkLnRva2VuID0gdG9rZW4uY29udGVudC50b2tlbjtcclxuICAgICAgICAgIHRoaXMudG9rZW5Qb3J2aWRlclNlcnZpY2Uuc2V0VG9rZW4odGhpcy5fYXV0aE1hcHBlclNlcnZpY2UudHJhbnNmb3JtKGRlY29kZUFjc2Vzc1Rva2VuLkRhbm9uZVRva2VuUGF5bG9hZCkpO1xyXG5cclxuICAgICAgICAgIHRoaXMucmVmcmVzaFRva2VuU3ViamVjdC5uZXh0KGRlY29kZUFjc2Vzc1Rva2VuLkRhbm9uZVRva2VuUGF5bG9hZC50b2tlbi5hY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZSh0aGlzLmFkZFRva2VuSGVhZGVyKHJlcXVlc3QsIGRlY29kZUFjc2Vzc1Rva2VuLkRhbm9uZVRva2VuUGF5bG9hZC50b2tlbi5hY2Nlc3NUb2tlbikpO1xyXG4gICAgICAgIH0pLCBjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgICAgIHRoaXMuaXNSZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dPdXQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnYXV0aC9sb2dpbiddKTtcclxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoVG9rZW5TdWJqZWN0LnBpcGUoXHJcbiAgICAgIGZpbHRlcih0b2tlbiA9PiB0b2tlbiAhPT0gbnVsbCksXHJcbiAgICAgIHRha2UoMSksXHJcbiAgICAgIHN3aXRjaE1hcCgodG9rZW4pID0+IG5leHQuaGFuZGxlKHRoaXMuYWRkVG9rZW5IZWFkZXIocmVxdWVzdCwgdG9rZW4pKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFRva2VuSGVhZGVyKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIHRva2VuOiBzdHJpbmcpIHtcclxuICAgIC8qIHRoaXMudG9rZW4gPSB0aGlzLnRva2VuUG9ydmlkZXJTZXJ2aWNlLmdldFRva2VuKCk7ICovXHJcblxyXG4gICAgcmV0dXJuIHJlcXVlc3QuY2xvbmUoe1xyXG4gICAgICBzZXRIZWFkZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAkeyB0b2tlbiB9YFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19