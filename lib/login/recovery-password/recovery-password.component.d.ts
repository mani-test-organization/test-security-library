import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/auth.service';
import { IConfigLibrary } from '../../../config-library.interface';
import * as i0 from "@angular/core";
export declare class RecoveryPasswordComponent implements OnInit {
    private fb;
    private authService;
    returnToLogin: EventEmitter<any>;
    restorePass: EventEmitter<any>;
    recoveryForm: FormGroup;
    constructor(configLibrary: IConfigLibrary, fb: FormBuilder, authService: AuthenticationService);
    ngOnInit(): void;
    private loadForm;
    backtoLogin(): void;
    restablecerPass(): void;
    private authResetPass;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecoveryPasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecoveryPasswordComponent, "lib-security-library-recovery-password", never, {}, { "returnToLogin": "returnToLogin"; "restorePass": "restorePass"; }, never, never>;
}
