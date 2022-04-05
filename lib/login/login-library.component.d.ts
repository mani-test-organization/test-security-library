import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from './services/auth.service';
import { TokenPorviderService } from './interfaces/token-payload-provider.interface';
import { IConfigLibrary } from '../../config-library.interface';
import * as i0 from "@angular/core";
export declare class LoginLibraryComponent implements OnInit {
    private fb;
    private authService;
    private tokenPorviderService;
    loginClick: EventEmitter<any>;
    resetClick: EventEmitter<any>;
    loginForm: FormGroup;
    isAuthenticated: boolean;
    typeLogin: string;
    isAd: boolean;
    tokenAd: string;
    redirectUri: string;
    constructor(configLibrary: IConfigLibrary, fb: FormBuilder, authService: AuthenticationService, tokenPorviderService: TokenPorviderService);
    ngOnInit(): void;
    private loadForm;
    login(): void;
    private authUser;
    loginAD(): void;
    recoveryPassEmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginLibraryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginLibraryComponent, "lib-security-library-login", never, {}, { "loginClick": "loginClick"; "resetClick": "resetClick"; }, never, never>;
}
