import { ModuleWithProviders } from '@angular/core';
import { IConfigLibrary } from "../config-library.interface";
import { IPublicClientApplication } from '@azure/msal-browser';
import * as i0 from "@angular/core";
import * as i1 from "./login/login-library.component";
import * as i2 from "./login/recovery-password/recovery-password.component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "./shared/material-ui/material-ui.module";
import * as i6 from "@azure/msal-angular";
export declare function MSALInstanceFactory(): IPublicClientApplication;
export declare class SecurityLibraryModule {
    static withProviders(configLib: IConfigLibrary): ModuleWithProviders<SecurityLibraryModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecurityLibraryModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SecurityLibraryModule, [typeof i1.LoginLibraryComponent, typeof i2.RecoveryPasswordComponent], [typeof i3.CommonModule, typeof i4.FormsModule, typeof i4.ReactiveFormsModule, typeof i5.MaterialUiModule, typeof i6.MsalModule], [typeof i1.LoginLibraryComponent, typeof i2.RecoveryPasswordComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SecurityLibraryModule>;
}
