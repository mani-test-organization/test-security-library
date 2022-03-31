import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from "../lib/shared/material-ui/material-ui.module";
import { LoginLibraryComponent } from './login/login-library.component';
import { RecoveryPasswordComponent } from './login/recovery-password/recovery-password.component';
import { CONFIGLIBRARY, defaultConfigLibrary } from "../config-library.interface";
import { TokenPorviderService } from './login/interfaces/token-payload-provider.interface';
import { SessionstorageTokenProviderService } from './login/services/implements/sessionstorage-token-provider.service';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class SecurityLibraryModule {
    static withProviders(configLib) {
        return {
            ngModule: SecurityLibraryModule,
            providers: [
                {
                    provide: CONFIGLIBRARY, useValue: configLib
                },
                {
                    provide: TokenPorviderService, useExisting: SessionstorageTokenProviderService
                }
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
        MaterialUiModule], exports: [LoginLibraryComponent,
        RecoveryPasswordComponent] });
SecurityLibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SecurityLibraryModule, providers: [
        { provide: CONFIGLIBRARY, useValue: defaultConfigLibrary },
        { provide: TokenPorviderService, useValue: SessionstorageTokenProviderService }
    ], imports: [[
            // BrowserModule,
            // BrowserAnimationsModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MaterialUiModule
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
                        MaterialUiModule
                    ],
                    exports: [
                        LoginLibraryComponent,
                        RecoveryPasswordComponent
                    ],
                    providers: [
                        { provide: CONFIGLIBRARY, useValue: defaultConfigLibrary },
                        { provide: TokenPorviderService, useValue: SessionstorageTokenProviderService }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHktbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zZWN1cml0eS1saWJyYXJ5L3NyYy9saWIvc2VjdXJpdHktbGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBSWhGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQWtCLE1BQU0sNkJBQTZCLENBQUM7QUFDbEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDM0YsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDdkgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQXdCL0MsTUFBTSxPQUFPLHFCQUFxQjtJQUV6QixNQUFNLENBQUMsYUFBYSxDQUFDLFNBQXlCO1FBQ25ELE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTO2lCQUM1QztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLGtDQUFrQztpQkFDL0U7YUFDRjtTQUNGLENBQUE7SUFDSCxDQUFDOzttSEFkVSxxQkFBcUI7b0hBQXJCLHFCQUFxQixpQkFwQjlCLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFHekIsaUJBQWlCO1FBQ2pCLDJCQUEyQjtRQUMzQixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixnQkFBZ0IsYUFHaEIscUJBQXFCO1FBQ3JCLHlCQUF5QjtvSEFPaEIscUJBQXFCLGFBTHJCO1FBQ1QsRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBQztRQUN4RCxFQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsa0NBQWtDLEVBQUM7S0FDOUUsWUFmUTtZQUNQLGlCQUFpQjtZQUNqQiwyQkFBMkI7WUFDM0IsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZ0JBQWdCO1NBQ2pCOzRGQVVVLHFCQUFxQjtrQkF0QmpDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHFCQUFxQjt3QkFDckIseUJBQXlCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQiwyQkFBMkI7d0JBQzNCLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHFCQUFxQjt3QkFDckIseUJBQXlCO3FCQUMxQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBQzt3QkFDeEQsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLGtDQUFrQyxFQUFDO3FCQUM5RTtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTWF0ZXJpYWxVaU1vZHVsZSB9IGZyb20gXCIuLi9saWIvc2hhcmVkL21hdGVyaWFsLXVpL21hdGVyaWFsLXVpLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7IFxyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQgeyBMb2dpbkxpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLWxpYnJhcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVjb3ZlcnlQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vcmVjb3ZlcnktcGFzc3dvcmQvcmVjb3ZlcnktcGFzc3dvcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ09ORklHTElCUkFSWSwgZGVmYXVsdENvbmZpZ0xpYnJhcnksIElDb25maWdMaWJyYXJ5IH0gZnJvbSBcIi4uL2NvbmZpZy1saWJyYXJ5LmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUb2tlblBvcnZpZGVyU2VydmljZSB9IGZyb20gJy4vbG9naW4vaW50ZXJmYWNlcy90b2tlbi1wYXlsb2FkLXByb3ZpZGVyLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNlc3Npb25zdG9yYWdlVG9rZW5Qcm92aWRlclNlcnZpY2UgfSBmcm9tICcuL2xvZ2luL3NlcnZpY2VzL2ltcGxlbWVudHMvc2Vzc2lvbnN0b3JhZ2UtdG9rZW4tcHJvdmlkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTG9naW5MaWJyYXJ5Q29tcG9uZW50LFxyXG4gICAgUmVjb3ZlcnlQYXNzd29yZENvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgLy8gQnJvd3Nlck1vZHVsZSxcclxuICAgIC8vIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxVaU1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTG9naW5MaWJyYXJ5Q29tcG9uZW50LFxyXG4gICAgUmVjb3ZlcnlQYXNzd29yZENvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7cHJvdmlkZTogQ09ORklHTElCUkFSWSwgdXNlVmFsdWU6IGRlZmF1bHRDb25maWdMaWJyYXJ5fSxcclxuICAgIHtwcm92aWRlOiBUb2tlblBvcnZpZGVyU2VydmljZSwgdXNlVmFsdWU6IFNlc3Npb25zdG9yYWdlVG9rZW5Qcm92aWRlclNlcnZpY2V9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlMaWJyYXJ5TW9kdWxlIHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyB3aXRoUHJvdmlkZXJzKGNvbmZpZ0xpYjogSUNvbmZpZ0xpYnJhcnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFNlY3VyaXR5TGlicmFyeU1vZHVsZT57XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU2VjdXJpdHlMaWJyYXJ5TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBDT05GSUdMSUJSQVJZLCB1c2VWYWx1ZTogY29uZmlnTGliXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgcHJvdmlkZTogVG9rZW5Qb3J2aWRlclNlcnZpY2UsIHVzZUV4aXN0aW5nOiBTZXNzaW9uc3RvcmFnZVRva2VuUHJvdmlkZXJTZXJ2aWNlXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==