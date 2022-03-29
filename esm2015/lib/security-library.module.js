import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from "../lib/shared/material-ui/material-ui.module";
import { LoginLibraryComponent } from './login/login-library.component';
import { RecoveryPasswordComponent } from './login/recovery-password/recovery-password.component';
import { CONFIGLIBRARY, defaultConfigLibrary } from "../config-library.interface";
import { TokenPorviderService } from './login/interfaces/token-payload-provider.interface';
import { SessionstorageTokenProviderService } from './login/services/implements/sessionstorage-token-provider.service';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export function MSALInstanceFactory() {
    return new PublicClientApplication({
        auth: {
            clientId: defaultConfigLibrary.clientId,
            authority: defaultConfigLibrary.authority,
            redirectUri: defaultConfigLibrary.redirectUri,
        }
    });
}
export class SecurityLibraryModule {
    static withProviders(configLib) {
        function MSALInstanceFactoryEnv() {
            return new PublicClientApplication({
                auth: {
                    clientId: configLib.clientId,
                    authority: configLib.authority,
                    redirectUri: configLib.redirectUri,
                }
            });
        }
        return {
            ngModule: SecurityLibraryModule,
            providers: [
                {
                    provide: CONFIGLIBRARY, useValue: configLib
                },
                {
                    provide: TokenPorviderService, useExisting: SessionstorageTokenProviderService
                },
                { provide: MSAL_INSTANCE, useFactory: MSALInstanceFactoryEnv },
                MsalService
            ]
        };
    }
}
SecurityLibraryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SecurityLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SecurityLibraryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SecurityLibraryModule, declarations: [LoginLibraryComponent,
        RecoveryPasswordComponent], imports: [
        // BrowserModule,
        // BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialUiModule,
        MsalModule], exports: [LoginLibraryComponent,
        RecoveryPasswordComponent] });
SecurityLibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SecurityLibraryModule, providers: [
        { provide: CONFIGLIBRARY, useValue: defaultConfigLibrary },
        { provide: TokenPorviderService, useValue: SessionstorageTokenProviderService },
        { provide: MSAL_INSTANCE, useFactory: MSALInstanceFactory },
        MsalService
    ], imports: [[
            // BrowserModule,
            // BrowserAnimationsModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUiModule,
            MsalModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SecurityLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoginLibraryComponent,
                        RecoveryPasswordComponent
                    ],
                    imports: [
                        // BrowserModule,
                        // BrowserAnimationsModule,
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MaterialUiModule,
                        MsalModule
                    ],
                    exports: [
                        LoginLibraryComponent,
                        RecoveryPasswordComponent
                    ],
                    providers: [
                        { provide: CONFIGLIBRARY, useValue: defaultConfigLibrary },
                        { provide: TokenPorviderService, useValue: SessionstorageTokenProviderService },
                        { provide: MSAL_INSTANCE, useFactory: MSALInstanceFactory },
                        MsalService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHktbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWN1cml0eS1saWJyYXJ5L3NyYy9saWIvc2VjdXJpdHktbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBSWhGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQWtCLE1BQU0sNkJBQTZCLENBQUM7QUFDbEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDM0YsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFFdkgsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0UsT0FBTyxFQUE0Qix1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFL0MsTUFBTSxVQUFVLG1CQUFtQjtJQUNqQyxPQUFPLElBQUksdUJBQXVCLENBQUM7UUFDakMsSUFBSSxFQUFFO1lBQ0osUUFBUSxFQUFFLG9CQUFvQixDQUFDLFFBQVE7WUFDdkMsU0FBUyxFQUFFLG9CQUFvQixDQUFDLFNBQVM7WUFDekMsV0FBVyxFQUFFLG9CQUFvQixDQUFDLFdBQVc7U0FDOUM7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDO0FBMkJELE1BQU0sT0FBTyxxQkFBcUI7SUFFekIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUF5QjtRQUNuRCxTQUFTLHNCQUFzQjtZQUM3QixPQUFPLElBQUksdUJBQXVCLENBQUM7Z0JBQ2pDLElBQUksRUFBRTtvQkFDSixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVE7b0JBQzVCLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUztvQkFDOUIsV0FBVyxFQUFFLFNBQVMsQ0FBQyxXQUFXO2lCQUNuQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFDRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUztpQkFDNUM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFdBQVcsRUFBRSxrQ0FBa0M7aUJBQy9FO2dCQUNELEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUU7Z0JBQzlELFdBQVc7YUFDWjtTQUNGLENBQUE7SUFDSCxDQUFDOzttSEF6QlUscUJBQXFCO29IQUFyQixxQkFBcUIsaUJBdkI5QixxQkFBcUI7UUFDckIseUJBQXlCO1FBR3pCLGlCQUFpQjtRQUNqQiwyQkFBMkI7UUFDM0IsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLFVBQVUsYUFHVixxQkFBcUI7UUFDckIseUJBQXlCO29IQVNoQixxQkFBcUIsYUFQckI7UUFDVCxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFDO1FBQ3hELEVBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxrQ0FBa0MsRUFBQztRQUM3RSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFO1FBQzNELFdBQVc7S0FDWixZQWxCUTtZQUNQLGlCQUFpQjtZQUNqQiwyQkFBMkI7WUFDM0IsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLFVBQVU7U0FDWDs0RkFZVSxxQkFBcUI7a0JBekJqQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixxQkFBcUI7d0JBQ3JCLHlCQUF5QjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjt3QkFDakIsMkJBQTJCO3dCQUMzQixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLFVBQVU7cUJBQ1g7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHFCQUFxQjt3QkFDckIseUJBQXlCO3FCQUMxQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBQzt3QkFDeEQsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLGtDQUFrQyxFQUFDO3dCQUM3RSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFO3dCQUMzRCxXQUFXO3FCQUNaO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBNYXRlcmlhbFVpTW9kdWxlIH0gZnJvbSBcIi4uL2xpYi9zaGFyZWQvbWF0ZXJpYWwtdWkvbWF0ZXJpYWwtdWkubW9kdWxlXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJzsgXHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7IExvZ2luTGlicmFyeUNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4tbGlicmFyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWNvdmVyeVBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9yZWNvdmVyeS1wYXNzd29yZC9yZWNvdmVyeS1wYXNzd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDT05GSUdMSUJSQVJZLCBkZWZhdWx0Q29uZmlnTGlicmFyeSwgSUNvbmZpZ0xpYnJhcnkgfSBmcm9tIFwiLi4vY29uZmlnLWxpYnJhcnkuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFRva2VuUG9ydmlkZXJTZXJ2aWNlIH0gZnJvbSAnLi9sb2dpbi9pbnRlcmZhY2VzL3Rva2VuLXBheWxvYWQtcHJvdmlkZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU2Vzc2lvbnN0b3JhZ2VUb2tlblByb3ZpZGVyU2VydmljZSB9IGZyb20gJy4vbG9naW4vc2VydmljZXMvaW1wbGVtZW50cy9zZXNzaW9uc3RvcmFnZS10b2tlbi1wcm92aWRlci5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IE1zYWxNb2R1bGUsIE1zYWxTZXJ2aWNlLCBNU0FMX0lOU1RBTkNFIH0gZnJvbSAnQGF6dXJlL21zYWwtYW5ndWxhcic7XHJcbmltcG9ydCB7IElQdWJsaWNDbGllbnRBcHBsaWNhdGlvbiwgUHVibGljQ2xpZW50QXBwbGljYXRpb24gfSBmcm9tICdAYXp1cmUvbXNhbC1icm93c2VyJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNU0FMSW5zdGFuY2VGYWN0b3J5KCk6IElQdWJsaWNDbGllbnRBcHBsaWNhdGlvbntcclxuICByZXR1cm4gbmV3IFB1YmxpY0NsaWVudEFwcGxpY2F0aW9uKHtcclxuICAgIGF1dGg6IHtcclxuICAgICAgY2xpZW50SWQ6IGRlZmF1bHRDb25maWdMaWJyYXJ5LmNsaWVudElkLFxyXG4gICAgICBhdXRob3JpdHk6IGRlZmF1bHRDb25maWdMaWJyYXJ5LmF1dGhvcml0eSxcclxuICAgICAgcmVkaXJlY3RVcmk6IGRlZmF1bHRDb25maWdMaWJyYXJ5LnJlZGlyZWN0VXJpLFxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBMb2dpbkxpYnJhcnlDb21wb25lbnQsXHJcbiAgICBSZWNvdmVyeVBhc3N3b3JkQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICAvLyBCcm93c2VyTW9kdWxlLFxyXG4gICAgLy8gQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRlcmlhbFVpTW9kdWxlLFxyXG4gICAgTXNhbE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTG9naW5MaWJyYXJ5Q29tcG9uZW50LFxyXG4gICAgUmVjb3ZlcnlQYXNzd29yZENvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7cHJvdmlkZTogQ09ORklHTElCUkFSWSwgdXNlVmFsdWU6IGRlZmF1bHRDb25maWdMaWJyYXJ5fSxcclxuICAgIHtwcm92aWRlOiBUb2tlblBvcnZpZGVyU2VydmljZSwgdXNlVmFsdWU6IFNlc3Npb25zdG9yYWdlVG9rZW5Qcm92aWRlclNlcnZpY2V9LFxyXG4gICAgeyBwcm92aWRlOiBNU0FMX0lOU1RBTkNFLCB1c2VGYWN0b3J5OiBNU0FMSW5zdGFuY2VGYWN0b3J5IH0sXHJcbiAgICBNc2FsU2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlY3VyaXR5TGlicmFyeU1vZHVsZSB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgd2l0aFByb3ZpZGVycyhjb25maWdMaWI6IElDb25maWdMaWJyYXJ5KTogTW9kdWxlV2l0aFByb3ZpZGVyczxTZWN1cml0eUxpYnJhcnlNb2R1bGU+e1xyXG4gICAgZnVuY3Rpb24gTVNBTEluc3RhbmNlRmFjdG9yeUVudigpOiBJUHVibGljQ2xpZW50QXBwbGljYXRpb257XHJcbiAgICAgIHJldHVybiBuZXcgUHVibGljQ2xpZW50QXBwbGljYXRpb24oe1xyXG4gICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgIGNsaWVudElkOiBjb25maWdMaWIuY2xpZW50SWQsXHJcbiAgICAgICAgICBhdXRob3JpdHk6IGNvbmZpZ0xpYi5hdXRob3JpdHksXHJcbiAgICAgICAgICByZWRpcmVjdFVyaTogY29uZmlnTGliLnJlZGlyZWN0VXJpLFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTZWN1cml0eUxpYnJhcnlNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IENPTkZJR0xJQlJBUlksIHVzZVZhbHVlOiBjb25maWdMaWJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBwcm92aWRlOiBUb2tlblBvcnZpZGVyU2VydmljZSwgdXNlRXhpc3Rpbmc6IFNlc3Npb25zdG9yYWdlVG9rZW5Qcm92aWRlclNlcnZpY2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogTVNBTF9JTlNUQU5DRSwgdXNlRmFjdG9yeTogTVNBTEluc3RhbmNlRmFjdG9yeUVudiB9LFxyXG4gICAgICAgIE1zYWxTZXJ2aWNlXHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19