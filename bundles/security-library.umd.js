(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/material/slider'), require('@angular/material/checkbox'), require('@angular/material/input'), require('@angular/material/radio'), require('@angular/material/button'), require('@angular/material/sidenav'), require('@angular/material/menu'), require('@angular/material/grid-list'), require('@angular/material/card'), require('@angular/material/divider'), require('@angular/material/icon'), require('@angular/material/list'), require('@angular/material/toolbar'), require('@angular/material/tabs'), require('@angular/material/dialog'), require('@angular/material/table'), require('@angular/material/sort'), require('@angular/material/paginator'), require('@angular/material/datepicker'), require('@angular/material/select'), require('@angular/material/core'), require('@angular/material/tree'), require('@angular/material/stepper'), require('@angular/material/tooltip'), require('@angular/material/progress-spinner'), require('@angular/material/snack-bar'), require('@angular/material/expansion'), require('@angular/material/slide-toggle'), require('@angular/material/autocomplete'), require('@angular/material/progress-bar'), require('@angular/material/form-field'), require('rxjs/operators'), require('@angular/common/http'), require('crypto-js'), require('jwt-decode'), require('@azure/msal-angular'), require('@azure/msal-browser'), require('rxjs'), require('sweetalert2'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('security-library', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/material/slider', '@angular/material/checkbox', '@angular/material/input', '@angular/material/radio', '@angular/material/button', '@angular/material/sidenav', '@angular/material/menu', '@angular/material/grid-list', '@angular/material/card', '@angular/material/divider', '@angular/material/icon', '@angular/material/list', '@angular/material/toolbar', '@angular/material/tabs', '@angular/material/dialog', '@angular/material/table', '@angular/material/sort', '@angular/material/paginator', '@angular/material/datepicker', '@angular/material/select', '@angular/material/core', '@angular/material/tree', '@angular/material/stepper', '@angular/material/tooltip', '@angular/material/progress-spinner', '@angular/material/snack-bar', '@angular/material/expansion', '@angular/material/slide-toggle', '@angular/material/autocomplete', '@angular/material/progress-bar', '@angular/material/form-field', 'rxjs/operators', '@angular/common/http', 'crypto-js', 'jwt-decode', '@azure/msal-angular', '@azure/msal-browser', 'rxjs', 'sweetalert2', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["security-library"] = {}, global.ng.core, global.ng.forms, global.ng.common, global.ng.material.slider, global.ng.material.checkbox, global.ng.material.input, global.ng.material.radio, global.ng.material.button, global.ng.material.sidenav, global.ng.material.menu, global.ng.material.gridList, global.ng.material.card, global.ng.material.divider, global.ng.material.icon, global.ng.material.list, global.ng.material.toolbar, global.ng.material.tabs, global.ng.material.dialog, global.ng.material.table, global.ng.material.sort, global.ng.material.paginator, global.ng.material.datepicker, global.ng.material.select, global.ng.material.core, global.ng.material.tree, global.ng.material.stepper, global.ng.material.tooltip, global.ng.material.progressSpinner, global.ng.material.snackBar, global.ng.material.expansion, global.ng.material.slideToggle, global.ng.material.autocomplete, global.ng.material.progressBar, global.ng.material.formField, global.rxjs.operators, global.ng.common.http, global.CryptoJS, global.jwt_decode, global.i5, global.msalBrowser, global.rxjs, global.Swal, global.ng.router));
})(this, (function (exports, i0, i1$1, i9, slider, checkbox, i10, radio, i8, sidenav, menu, gridList, card, divider, i7, list, toolbar, tabs, dialog, table, sort, paginator, datepicker, select, core, tree, stepper, tooltip, progressSpinner, snackBar, expansion, slideToggle, autocomplete, progressBar, i6, operators, i1, CryptoJS, jwt_decode, i5, msalBrowser, rxjs, Swal, i1$2) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var CryptoJS__namespace = /*#__PURE__*/_interopNamespace(CryptoJS);
    var jwt_decode__default = /*#__PURE__*/_interopDefaultLegacy(jwt_decode);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var Swal__default = /*#__PURE__*/_interopDefaultLegacy(Swal);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var MaterialModules = [
        slider.MatSliderModule,
        checkbox.MatCheckboxModule,
        i10.MatInputModule,
        radio.MatRadioModule,
        i8.MatButtonModule,
        sidenav.MatSidenavModule,
        menu.MatMenuModule,
        gridList.MatGridListModule,
        card.MatCardModule,
        divider.MatDividerModule,
        i7.MatIconModule,
        list.MatListModule,
        toolbar.MatToolbarModule,
        tabs.MatTabsModule,
        dialog.MatDialogModule,
        sort.MatSortModule,
        paginator.MatPaginatorModule,
        table.MatTableModule,
        datepicker.MatDatepickerModule,
        select.MatSelectModule,
        core.MatNativeDateModule,
        tree.MatTreeModule,
        stepper.MatStepperModule,
        tooltip.MatTooltipModule,
        progressSpinner.MatProgressSpinnerModule,
        snackBar.MatSnackBarModule,
        expansion.MatExpansionModule,
        slideToggle.MatSlideToggleModule,
        autocomplete.MatAutocompleteModule,
        progressBar.MatProgressBarModule,
        i6.MatFormFieldModule,
    ];
    var MaterialUiModule = /** @class */ (function () {
        function MaterialUiModule() {
        }
        return MaterialUiModule;
    }());
    MaterialUiModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MaterialUiModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MaterialUiModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MaterialUiModule, imports: [i9.CommonModule, slider.MatSliderModule,
            checkbox.MatCheckboxModule,
            i10.MatInputModule,
            radio.MatRadioModule,
            i8.MatButtonModule,
            sidenav.MatSidenavModule,
            menu.MatMenuModule,
            gridList.MatGridListModule,
            card.MatCardModule,
            divider.MatDividerModule,
            i7.MatIconModule,
            list.MatListModule,
            toolbar.MatToolbarModule,
            tabs.MatTabsModule,
            dialog.MatDialogModule,
            sort.MatSortModule,
            paginator.MatPaginatorModule,
            table.MatTableModule,
            datepicker.MatDatepickerModule,
            select.MatSelectModule,
            core.MatNativeDateModule,
            tree.MatTreeModule,
            stepper.MatStepperModule,
            tooltip.MatTooltipModule,
            progressSpinner.MatProgressSpinnerModule,
            snackBar.MatSnackBarModule,
            expansion.MatExpansionModule,
            slideToggle.MatSlideToggleModule,
            autocomplete.MatAutocompleteModule,
            progressBar.MatProgressBarModule,
            i6.MatFormFieldModule], exports: [slider.MatSliderModule,
            checkbox.MatCheckboxModule,
            i10.MatInputModule,
            radio.MatRadioModule,
            i8.MatButtonModule,
            sidenav.MatSidenavModule,
            menu.MatMenuModule,
            gridList.MatGridListModule,
            card.MatCardModule,
            divider.MatDividerModule,
            i7.MatIconModule,
            list.MatListModule,
            toolbar.MatToolbarModule,
            tabs.MatTabsModule,
            dialog.MatDialogModule,
            sort.MatSortModule,
            paginator.MatPaginatorModule,
            table.MatTableModule,
            datepicker.MatDatepickerModule,
            select.MatSelectModule,
            core.MatNativeDateModule,
            tree.MatTreeModule,
            stepper.MatStepperModule,
            tooltip.MatTooltipModule,
            progressSpinner.MatProgressSpinnerModule,
            snackBar.MatSnackBarModule,
            expansion.MatExpansionModule,
            slideToggle.MatSlideToggleModule,
            autocomplete.MatAutocompleteModule,
            progressBar.MatProgressBarModule,
            i6.MatFormFieldModule] });
    MaterialUiModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MaterialUiModule, imports: [__spreadArray([
                i9.CommonModule
            ], __read(MaterialModules)), slider.MatSliderModule,
            checkbox.MatCheckboxModule,
            i10.MatInputModule,
            radio.MatRadioModule,
            i8.MatButtonModule,
            sidenav.MatSidenavModule,
            menu.MatMenuModule,
            gridList.MatGridListModule,
            card.MatCardModule,
            divider.MatDividerModule,
            i7.MatIconModule,
            list.MatListModule,
            toolbar.MatToolbarModule,
            tabs.MatTabsModule,
            dialog.MatDialogModule,
            sort.MatSortModule,
            paginator.MatPaginatorModule,
            table.MatTableModule,
            datepicker.MatDatepickerModule,
            select.MatSelectModule,
            core.MatNativeDateModule,
            tree.MatTreeModule,
            stepper.MatStepperModule,
            tooltip.MatTooltipModule,
            progressSpinner.MatProgressSpinnerModule,
            snackBar.MatSnackBarModule,
            expansion.MatExpansionModule,
            slideToggle.MatSlideToggleModule,
            autocomplete.MatAutocompleteModule,
            progressBar.MatProgressBarModule,
            i6.MatFormFieldModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MaterialUiModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: __spreadArray([
                            i9.CommonModule
                        ], __read(MaterialModules)),
                        exports: __spreadArray([], __read(MaterialModules))
                    }]
            }] });

    var IConfigLibrary = /** @class */ (function () {
        function IConfigLibrary() {
        }
        return IConfigLibrary;
    }());
    var IWhiteList = /** @class */ (function () {
        function IWhiteList() {
        }
        return IWhiteList;
    }());
    var defaultConfigLibrary = {
        whiteList: [
            {
                word: 'oauth/token',
            }
        ],
        encryptPhrase: 'dAN0n3IR0nM4n4p1',
        apiURL: 'http://localhost:8082/',
        refreshTokenURL: 'oauth/refreshToken',
        accessTokenURL: 'oauth/token',
        accessTokenADURL: 'oauth/tokenAd',
        resetPasswordURL: 'oauth/resetPassword',
        loginType: 'both',
        clientId: '',
        authority: '',
        redirectUri: '',
    };
    var CONFIGLIBRARY = new i0.InjectionToken('defaultConfigLibrary');

    var EncrDecrService = /** @class */ (function () {
        function EncrDecrService(configLibrary) {
            this.encryptPhrase = configLibrary.encryptPhrase;
        }
        //Encrypt
        EncrDecrService.prototype.set = function (value) {
            var key = CryptoJS__namespace.enc.Utf8.parse(this.encryptPhrase);
            var iv = CryptoJS__namespace.enc.Utf8.parse(this.encryptPhrase);
            var encrypted = CryptoJS__namespace.AES.encrypt(CryptoJS__namespace.enc.Utf8.parse(value.toString()), key, {
                //    keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS__namespace.mode.CBC,
                padding: CryptoJS__namespace.pad.ZeroPadding
            });
            return encrypted.toString();
        };
        //Decrypt
        EncrDecrService.prototype.get = function (value) {
            var key = CryptoJS__namespace.enc.Utf8.parse(this.encryptPhrase);
            var iv = CryptoJS__namespace.enc.Utf8.parse(this.encryptPhrase);
            var decrypted = CryptoJS__namespace.AES.decrypt(value, key, {
                // keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS__namespace.mode.CBC,
                padding: CryptoJS__namespace.pad.ZeroPadding
            });
            return decrypted.toString(CryptoJS__namespace.enc.Utf8);
        };
        EncrDecrService.prototype.getDecodedAccessToken = function (token) {
            try {
                return jwt_decode__default["default"](token);
            }
            catch (Error) {
                return null;
            }
        };
        return EncrDecrService;
    }());
    EncrDecrService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EncrDecrService, deps: [{ token: CONFIGLIBRARY }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    EncrDecrService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EncrDecrService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: EncrDecrService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: IConfigLibrary, decorators: [{
                            type: i0.Inject,
                            args: [CONFIGLIBRARY]
                        }] }];
        } });

    var MapperService = /** @class */ (function () {
        function MapperService() {
        }
        MapperService.prototype.transform = function (entityOrArray) {
            var _this = this;
            return Array.isArray(entityOrArray) ?
                entityOrArray.map(function (item) { return _this.map(item); }) :
                this.map(entityOrArray);
        };
        return MapperService;
    }());

    var AuthMapperService = /** @class */ (function (_super) {
        __extends(AuthMapperService, _super);
        function AuthMapperService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AuthMapperService.prototype.map = function (response) {
            return {
                userDetails: response.userDetails,
                roles: response.roles,
                token: response.token
            };
        };
        return AuthMapperService;
    }(MapperService));
    AuthMapperService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthMapperService, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthMapperService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthMapperService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthMapperService, decorators: [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }] });

    var TokenPorviderService = /** @class */ (function () {
        function TokenPorviderService() {
        }
        return TokenPorviderService;
    }());

    var AuthenticationService = /** @class */ (function () {
        function AuthenticationService(configLibrary, http, encrDecr, _authMapperService, tokenPorviderService) {
            this.http = http;
            this.encrDecr = encrDecr;
            this._authMapperService = _authMapperService;
            this.tokenPorviderService = tokenPorviderService;
            this.loginType = '';
            this.apiURL = configLibrary.apiURL;
            this.refreshTokenURL = configLibrary.refreshTokenURL;
            this.accessTokenURL = configLibrary.accessTokenURL;
            this.resetPasswordURL = configLibrary.resetPasswordURL;
            this.loginType = configLibrary.loginType;
        }
        AuthenticationService.prototype.login = function (user) {
            var _this = this;
            var data = this.encrDecr.set(user.userName + '|' + user.password);
            data = data.replace('+', 'xMl3Jk').replace(/\//g, 'Por21Ld').replace('=', 'Ml32');
            var token = {
                'token': data
            };
            var url = "" + this.apiURL + this.accessTokenURL;
            return this.http.post(url, token)
                .pipe(operators.map(function (respApi) {
                var decodeAcsessToken = _this.encrDecr.getDecodedAccessToken(respApi.content.token.accessToken);
                decodeAcsessToken.DanoneTokenPayload.token = respApi.content.token;
                return _this._authMapperService.transform(decodeAcsessToken.DanoneTokenPayload);
            }));
        };
        AuthenticationService.prototype.refreshToken = function () {
            var url = "" + this.apiURL + this.refreshTokenURL;
            return this.http.post(url, '');
        };
        AuthenticationService.prototype.isAuthenticated = function () {
            return (this.tokenPorviderService.getToken() ? true : false);
        };
        AuthenticationService.prototype.logOut = function () {
            this.tokenPorviderService.removeToken();
        };
        AuthenticationService.prototype.resetPassword = function (email) {
            var url = "" + this.apiURL + this.resetPasswordURL;
            return this.http.post(url, email);
        };
        return AuthenticationService;
    }());
    AuthenticationService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthenticationService, deps: [{ token: CONFIGLIBRARY }, { token: i1__namespace.HttpClient }, { token: EncrDecrService }, { token: AuthMapperService }, { token: TokenPorviderService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthenticationService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthenticationService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthenticationService, decorators: [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], ctorParameters: function () {
            return [{ type: IConfigLibrary, decorators: [{
                            type: i0.Inject,
                            args: [CONFIGLIBRARY]
                        }] }, { type: i1__namespace.HttpClient }, { type: EncrDecrService }, { type: AuthMapperService }, { type: TokenPorviderService }];
        } });

    var AuthAdService = /** @class */ (function () {
        function AuthAdService(configLibrary, http, encrDecr, _authMapperService) {
            this.http = http;
            this.encrDecr = encrDecr;
            this._authMapperService = _authMapperService;
            this.apiURL = configLibrary.apiURL;
            this.accessTokenURLAD = configLibrary.accessTokenADURL;
        }
        AuthAdService.prototype.loginAD = function (token) {
            var _this = this;
            var body = {
                'token': token
            };
            var url = "" + this.apiURL + this.accessTokenURLAD;
            return this.http.post(url, body)
                .pipe(operators.map(function (respApi) {
                var decodeAcsessToken = _this.encrDecr.getDecodedAccessToken(respApi.content.token.accessToken);
                decodeAcsessToken.DanoneTokenPayload.token = respApi.content.token;
                return _this._authMapperService.transform(decodeAcsessToken.DanoneTokenPayload);
            }));
        };
        return AuthAdService;
    }());
    AuthAdService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthAdService, deps: [{ token: CONFIGLIBRARY }, { token: i1__namespace.HttpClient }, { token: EncrDecrService }, { token: AuthMapperService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthAdService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthAdService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthAdService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () {
            return [{ type: IConfigLibrary, decorators: [{
                            type: i0.Inject,
                            args: [CONFIGLIBRARY]
                        }] }, { type: i1__namespace.HttpClient }, { type: EncrDecrService }, { type: AuthMapperService }];
        } });

    var LoginLibraryComponent = /** @class */ (function () {
        function LoginLibraryComponent(configLibrary, fb, authService, authServiceAD, tokenPorviderService, msalService) {
            this.fb = fb;
            this.authService = authService;
            this.authServiceAD = authServiceAD;
            this.tokenPorviderService = tokenPorviderService;
            this.msalService = msalService;
            this.loginClick = new i0.EventEmitter();
            this.resetClick = new i0.EventEmitter();
            this.isAuthenticated = false;
            this.typeLogin = '';
            this.isAd = false;
            this.tokenAd = '';
            this.typeLogin = configLibrary.loginType;
        }
        LoginLibraryComponent.prototype.ngOnInit = function () {
            this.loadForm();
            this.typeLogin = this.authService.loginType;
        };
        LoginLibraryComponent.prototype.loadForm = function () {
            this.loginForm = this.fb.group({
                userName: new i1$1.FormControl(null, [i1$1.Validators.required, i1$1.Validators.maxLength(50)]),
                password: new i1$1.FormControl(null, [i1$1.Validators.required, i1$1.Validators.maxLength(50)]),
            });
        };
        LoginLibraryComponent.prototype.login = function () {
            if (this.loginForm.invalid) {
                this.loginClick.emit(false);
            }
            else {
                this.authUser();
            }
        };
        LoginLibraryComponent.prototype.authUser = function () {
            var _this = this;
            this.authService.login(this.loginForm.value).subscribe(function (response) {
                if (response) {
                    _this.tokenPorviderService.setToken(response);
                    _this.loginClick.emit(true);
                }
                else {
                    _this.loginClick.emit(false);
                }
            }, function (error) {
                console.log(error);
                _this.loginClick.emit(false);
            });
        };
        LoginLibraryComponent.prototype.loginAD = function () {
            var _this = this;
            this.isAd = true;
            this.msalService.loginPopup().subscribe(function (response) {
                _this.msalService.instance.setActiveAccount(response.account);
                _this.tokenAd = response.accessToken;
                _this.authUserAD(_this.tokenAd);
            }, function (error) {
                console.log('Error: ', error);
                _this.loginClick.emit(false);
            });
        };
        LoginLibraryComponent.prototype.authUserAD = function (token) {
            var _this = this;
            this.authServiceAD.loginAD(token).subscribe(function (response) {
                if (response) {
                    _this.tokenPorviderService.setToken(response);
                    _this.loginClick.emit(true);
                }
                else {
                    _this.loginClick.emit(false);
                }
            }, function (error) {
                console.log(error);
                _this.loginClick.emit(false);
            });
        };
        LoginLibraryComponent.prototype.recoveryPassEmit = function () {
            this.resetClick.emit(true);
        };
        return LoginLibraryComponent;
    }());
    LoginLibraryComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoginLibraryComponent, deps: [{ token: CONFIGLIBRARY }, { token: i1__namespace$1.FormBuilder }, { token: AuthenticationService }, { token: AuthAdService }, { token: TokenPorviderService }, { token: i5__namespace.MsalService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    LoginLibraryComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LoginLibraryComponent, selector: "lib-security-library-login", outputs: { loginClick: "loginClick", resetClick: "resetClick" }, ngImport: i0__namespace, template: "<div class=\"container\">\r\n  <div class=\"row form-content justify-content-start align-items-center\">\r\n    <form [formGroup]=\"loginForm\" >\r\n      <div class=\"col col-xl-4 col-lg-8 col-md-8 col-12\">\r\n        <div class=\"container-fluid\">\r\n          <div *ngIf=\"typeLogin !== 'internal'\" class=\"row\">\r\n            <div class=\"col col-12\">\r\n              <mat-label>Correo\r\n              </mat-label>\r\n              <mat-form-field [style.fontSize.px]=\"12\" appearance=\"outline\">\r\n                <mat-label>ejemplo@corrreo.com\r\n                </mat-label>\r\n                <mat-icon matSuffix>email</mat-icon>\r\n                <input \r\n                  matInput \r\n                  type=\"text\" \r\n                  placeholder=\"ejemplo@corrreo.com\" \r\n                  maxlength=\"50\" \r\n                  formControlName=\"userName\" \r\n                  name=\"userName\" \r\n                  id=\"userName\" \r\n                  required>\r\n                  \r\n                <mat-error *ngIf=\"loginForm.get('userName')?.hasError('required') && loginForm.get('userName')?.touched\">\r\n                  Campo requerido\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col col-12\">\r\n              <mat-label>Contrase\u00F1a</mat-label>\r\n              <mat-form-field [style.fontSize.px]=\"12\" appearance=\"outline\">\r\n                <mat-label>contrase\u00F1a</mat-label>\r\n                <mat-icon matSuffix>vpn_key</mat-icon>\r\n                <input \r\n                  matInput \r\n                  type=\"password\" \r\n                  placeholder=\"Contrase\u00F1a\" \r\n                  maxlength=\"50\" \r\n                  formControlName=\"password\" \r\n                  name=\"password\" \r\n                  id=\"passwor\" \r\n                  required>\r\n                <mat-error *ngIf=\"loginForm.get('password')?.hasError('required') && loginForm.get('password')?.touched\">\r\n                  Campo requerido\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"row recovery-pass\">\r\n              <div class=\"col col-12\">\r\n                <button mat-button class=\"btn_tertiary\" (click)=\"recoveryPassEmit()\">Olvide mi contrase\u00F1a</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-12 text-center\">\r\n              <button class=\"btn_primary\" (click)=\"login()\">Iniciar sesi\u00F3n</button>\r\n            </div> \r\n          </div>\r\n          <div *ngIf=\"typeLogin !== 'external'\" class=\"col col-12 text-center\">\r\n            <button mat-button class=\"btn_tertiary\" (click)=\"loginAD()\">Ingresar con Active Directory</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>   \r\n  </div>\r\n</div>", styles: [".btn_primary{color:#f8f9fb;text-transform:initial;text-align:center;background-color:#214eb7;text-decoration:none;border:0;border-radius:8px;cursor:pointer;letter-spacing:1.5px;width:100%!important;height:40px;padding:10px 8px;font-size:14px;font-weight:400}.btn_primary:hover{background-color:#01818f}.btn_primary:disabled{color:#828282;background-color:#b0b0b0;pointer-events:none}.btn_secondary{color:#01818f;text-transform:initial;text-align:center;background-color:#ecfafc;text-decoration:none;border:1px solid #0095A8;border-radius:8px;cursor:pointer;letter-spacing:1.5px;width:150px!important;height:40px;padding:10px 8px;font-size:14px;font-weight:400}.btn_secondary:hover{background-color:#b2eaf333}.btn_secondary:disabled{color:#b0b0b0;background-color:#e9e9e9;border:1px solid #e9e9e9;pointer-events:none}.btn_tertiary{color:#214eb7}.bg_breadcrumb{background:url(/assets/img/bg_breadcrumb.png) no-repeat;background-color:#005db4;background-size:contain;height:72px;padding-left:30px}.bg_breadcrumb .breadcrumb{color:#fff;margin:0;padding:0;font-style:normal;font-weight:600;letter-spacing:.02em;text-transform:capitalize;vertical-align:middle;line-height:58px}.bg_breadcrumb .breadcrumb span{font-size:18px;color:#bcd}.bg_breadcrumb .breadcrumb span:hover{color:#01818f;text-decoration:none}.bg_breadcrumb .breadcrumb li{list-style:none;float:left;margin:5px}.bg_breadcrumb .breadcrumb li:last-child{margin-right:5px}.bg_breadcrumb .breadcrumb li:after{content:\" > \";color:#fff}.bg_breadcrumb .breadcrumb li:last-child:after{content:\"\"}h1{font-size:34px;font-weight:500}h2{font-size:24px;font-weight:500}h3{font-size:20px;font-weight:500}h4{font-size:18px;font-weight:400}h5{font-style:normal!important;font-weight:500!important;font-size:12px!important;line-height:18px!important;letter-spacing:.15px!important;color:#3f4b6c!important}a{color:#118584}.swal2-styled.swal2-confirm{background-color:#0095a8!important}.swal2-styled.swal2-confirm:focus{box-shadow:none!important}.bg_evidence{background:rgba(249,249,249,.55);border:.5px solid #eceff2;box-sizing:border-box;height:261px;padding-left:25px;margin-left:25px;margin-right:25px}.date_evidence{font-style:normal;font-weight:500;font-size:12px;line-height:18px;text-align:center;letter-spacing:.155002px;color:#7792ac}.rb_evidence{display:flex;flex-direction:column;margin:15px 0;width:150px}.container_evidence{margin:4px,4px;padding:4px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;width:100%}.card_evidence{width:170px;text-align:center}.lbl_evidence{font-style:normal;font-weight:500;font-size:12px;line-height:18px;letter-spacing:.15px;color:#3f4b6c}.mat-form-field-no-padding .mat-form-field-wrapper{margin-top:-.5em}.mobile-label{display:none}.mobile-cantidad>input{width:80%}@media (max-width: 600px){.mobile-label{width:130px;display:inline-block;font-weight:bold}.mat-header-row{display:none}.mat-row{flex-direction:column;align-items:start;text-align:left;padding:8px 24px}.mat-cell:first-of-type{padding:5px 10px!important}.mobile-cantidad{width:150px}}.container .form-content .title{font-family:var(--font-poppins-bold);font-style:normal;font-weight:500;font-size:26px;line-height:39px;text-transform:uppercase;color:#9399b2}.container mat-form-field.mat-form-field{width:100%;font-size:16px;color:#9399b2}.container mat-label{font-family:var(--font-roboto);font-style:normal;font-weight:700;font-size:14px;line-height:14px;letter-spacing:.15px;color:#656d8e}.text-center{display:grid}.recovery-pass{text-align:right}.login_title{font-family:\"Poppins\",\"Roboto\",sans-serif;font-style:normal;font-weight:500;font-size:26px;line-height:39px;text-transform:uppercase;color:#f8f9fb}.login_label{font-family:\"Roboto\",sans-serif;font-style:normal;font-weight:bold;font-size:12px;line-height:14px;letter-spacing:.15px;color:#f8f9fb}input::placeholder{font-family:\"Roboto\",sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:16px;letter-spacing:.15px;color:#9eb7cc}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{-webkit-transition:background-color 5000s;transition:background-color 5000s;-webkit-text-fill-color:#656D8E!important}\n"], components: [{ type: i6__namespace.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i7__namespace.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i8__namespace.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i9__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6__namespace.MatLabel, selector: "mat-label" }, { type: i6__namespace.MatSuffix, selector: "[matSuffix]" }, { type: i10__namespace.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i1__namespace$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace$1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i1__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i1__namespace$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i6__namespace.MatError, selector: "mat-error", inputs: ["id"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: LoginLibraryComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-security-library-login',
                        templateUrl: './login-library.component.html',
                        styleUrls: ['./login-library.component.scss']
                    }]
            }], ctorParameters: function () {
            return [{ type: IConfigLibrary, decorators: [{
                            type: i0.Inject,
                            args: [CONFIGLIBRARY]
                        }] }, { type: i1__namespace$1.FormBuilder }, { type: AuthenticationService }, { type: AuthAdService }, { type: TokenPorviderService }, { type: i5__namespace.MsalService }];
        }, propDecorators: { loginClick: [{
                    type: i0.Output
                }], resetClick: [{
                    type: i0.Output
                }] } });

    var RecoveryPasswordComponent = /** @class */ (function () {
        function RecoveryPasswordComponent(configLibrary, fb, authService) {
            this.fb = fb;
            this.authService = authService;
            this.returnToLogin = new i0.EventEmitter();
            this.restorePass = new i0.EventEmitter();
        }
        RecoveryPasswordComponent.prototype.ngOnInit = function () {
            this.loadForm();
        };
        RecoveryPasswordComponent.prototype.loadForm = function () {
            this.recoveryForm = this.fb.group({
                email: new i1$1.FormControl(null, [i1$1.Validators.required, i1$1.Validators.maxLength(50)])
            });
        };
        RecoveryPasswordComponent.prototype.backtoLogin = function () {
            this.returnToLogin.emit(true);
        };
        RecoveryPasswordComponent.prototype.restablecerPass = function () {
            if (this.recoveryForm.invalid) {
                this.restorePass.emit(false);
            }
            else {
                this.authResetPass();
            }
        };
        RecoveryPasswordComponent.prototype.authResetPass = function () {
            var _this = this;
            this.authService.resetPassword(this.recoveryForm.value).subscribe(function (response) {
                _this.restorePass.emit(true);
            }, function (error) {
                console.log(error);
                _this.restorePass.emit(false);
            });
        };
        return RecoveryPasswordComponent;
    }());
    RecoveryPasswordComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RecoveryPasswordComponent, deps: [{ token: CONFIGLIBRARY }, { token: i1__namespace$1.FormBuilder }, { token: AuthenticationService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RecoveryPasswordComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RecoveryPasswordComponent, selector: "lib-security-library-recovery-password", outputs: { returnToLogin: "returnToLogin", restorePass: "restorePass" }, ngImport: i0__namespace, template: "<div class=\"container\">\r\n  <div class=\"row form-content justify-content-start align-items-center\">\r\n    <form [formGroup]=\"recoveryForm\">\r\n      <div class=\"col col-xl-4 col-lg-8 col-md-8 col-12\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"row\">\r\n            <div class=\"col col-12\">\r\n              <mat-label>Correo\r\n              </mat-label>\r\n              <mat-form-field [style.fontSize.px]=\"12\" appearance=\"outline\">\r\n                <mat-label>ejemplo@corrreo.com\r\n                </mat-label>\r\n                <mat-icon matSuffix>email</mat-icon>\r\n                <input matInput type=\"text\" placeholder=\"ejemplo@corrreo.com\" maxlength=\"50\" formControlName=\"email\"\r\n                  name=\"email\" id=\"email\" required>\r\n\r\n                <mat-error\r\n                  *ngIf=\"recoveryForm.get('email')?.hasError('required') && recoveryForm.get('email')?.touched\">\r\n                  Campo requerido\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col col-12\">\r\n              <button class=\"btn_primary\" (click)=\"restablecerPass()\">Restablecer</button>\r\n            </div>\r\n            <div class=\"col col-12 text-center\">\r\n              <button mat-button class=\"col-12 btn_tertiary\" (click)=\"backtoLogin()\">Regresar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>", styles: [".btn_primary{color:#f8f9fb;text-transform:initial;text-align:center;background-color:#214eb7;text-decoration:none;border:0;border-radius:8px;cursor:pointer;letter-spacing:1.5px;width:100%!important;height:40px;padding:10px 8px;font-size:14px;font-weight:400}.btn_primary:hover{background-color:#01818f}.btn_primary:disabled{color:#828282;background-color:#b0b0b0;pointer-events:none}.btn_secondary{color:#01818f;text-transform:initial;text-align:center;background-color:#ecfafc;text-decoration:none;border:1px solid #0095A8;border-radius:8px;cursor:pointer;letter-spacing:1.5px;width:150px!important;height:40px;padding:10px 8px;font-size:14px;font-weight:400}.btn_secondary:hover{background-color:#b2eaf333}.btn_secondary:disabled{color:#b0b0b0;background-color:#e9e9e9;border:1px solid #e9e9e9;pointer-events:none}.btn_tertiary{color:#214eb7}.bg_breadcrumb{background:url(/assets/img/bg_breadcrumb.png) no-repeat;background-color:#005db4;background-size:contain;height:72px;padding-left:30px}.bg_breadcrumb .breadcrumb{color:#fff;margin:0;padding:0;font-style:normal;font-weight:600;letter-spacing:.02em;text-transform:capitalize;vertical-align:middle;line-height:58px}.bg_breadcrumb .breadcrumb span{font-size:18px;color:#bcd}.bg_breadcrumb .breadcrumb span:hover{color:#01818f;text-decoration:none}.bg_breadcrumb .breadcrumb li{list-style:none;float:left;margin:5px}.bg_breadcrumb .breadcrumb li:last-child{margin-right:5px}.bg_breadcrumb .breadcrumb li:after{content:\" > \";color:#fff}.bg_breadcrumb .breadcrumb li:last-child:after{content:\"\"}h1{font-size:34px;font-weight:500}h2{font-size:24px;font-weight:500}h3{font-size:20px;font-weight:500}h4{font-size:18px;font-weight:400}h5{font-style:normal!important;font-weight:500!important;font-size:12px!important;line-height:18px!important;letter-spacing:.15px!important;color:#3f4b6c!important}a{color:#118584}.swal2-styled.swal2-confirm{background-color:#0095a8!important}.swal2-styled.swal2-confirm:focus{box-shadow:none!important}.bg_evidence{background:rgba(249,249,249,.55);border:.5px solid #eceff2;box-sizing:border-box;height:261px;padding-left:25px;margin-left:25px;margin-right:25px}.date_evidence{font-style:normal;font-weight:500;font-size:12px;line-height:18px;text-align:center;letter-spacing:.155002px;color:#7792ac}.rb_evidence{display:flex;flex-direction:column;margin:15px 0;width:150px}.container_evidence{margin:4px,4px;padding:4px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;width:100%}.card_evidence{width:170px;text-align:center}.lbl_evidence{font-style:normal;font-weight:500;font-size:12px;line-height:18px;letter-spacing:.15px;color:#3f4b6c}.mat-form-field-no-padding .mat-form-field-wrapper{margin-top:-.5em}.mobile-label{display:none}.mobile-cantidad>input{width:80%}@media (max-width: 600px){.mobile-label{width:130px;display:inline-block;font-weight:bold}.mat-header-row{display:none}.mat-row{flex-direction:column;align-items:start;text-align:left;padding:8px 24px}.mat-cell:first-of-type{padding:5px 10px!important}.mobile-cantidad{width:150px}}.container .form-content .title{font-family:var(--font-poppins-bold);font-style:normal;font-weight:500;font-size:26px;line-height:39px;text-transform:uppercase;color:#9399b2}.container mat-form-field.mat-form-field{width:100%;font-size:16px;color:#9399b2}.container mat-label{font-family:var(--font-roboto);font-style:normal;font-weight:700;font-size:14px;line-height:14px;letter-spacing:.15px;color:#656d8e}.text-center{display:grid}.login_title{font-family:\"Poppins\",\"Roboto\",sans-serif;font-style:normal;font-weight:500;font-size:26px;line-height:39px;text-transform:uppercase;color:#f8f9fb}.login_label{font-family:\"Roboto\",sans-serif;font-style:normal;font-weight:bold;font-size:12px;line-height:14px;letter-spacing:.15px;color:#f8f9fb}input::placeholder{font-family:\"Roboto\",sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:16px;letter-spacing:.15px;color:#9eb7cc}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{-webkit-transition:background-color 5000s;transition:background-color 5000s;-webkit-text-fill-color:#656D8E!important}\n"], components: [{ type: i6__namespace.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i7__namespace.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i8__namespace.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i6__namespace.MatLabel, selector: "mat-label" }, { type: i6__namespace.MatSuffix, selector: "[matSuffix]" }, { type: i10__namespace.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["id", "disabled", "required", "type", "value", "readonly", "placeholder", "errorStateMatcher", "aria-describedby"], exportAs: ["matInput"] }, { type: i1__namespace$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace$1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i1__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i1__namespace$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i9__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6__namespace.MatError, selector: "mat-error", inputs: ["id"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: RecoveryPasswordComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-security-library-recovery-password',
                        templateUrl: './recovery-password.component.html',
                        styleUrls: ['./recovery-password.component.scss']
                    }]
            }], ctorParameters: function () {
            return [{ type: IConfigLibrary, decorators: [{
                            type: i0.Inject,
                            args: [CONFIGLIBRARY]
                        }] }, { type: i1__namespace$1.FormBuilder }, { type: AuthenticationService }];
        }, propDecorators: { returnToLogin: [{
                    type: i0.Output
                }], restorePass: [{
                    type: i0.Output
                }] } });

    var SessionstorageTokenProviderService = /** @class */ (function () {
        function SessionstorageTokenProviderService() {
            this.userSessionKey = 'token';
        }
        SessionstorageTokenProviderService.prototype.removeToken = function () {
            sessionStorage.removeItem(this.userSessionKey);
        };
        SessionstorageTokenProviderService.prototype.setToken = function (token) {
            sessionStorage.setItem(this.userSessionKey, JSON.stringify(token));
        };
        SessionstorageTokenProviderService.prototype.getToken = function () {
            if (sessionStorage.getItem(this.userSessionKey)) {
                return JSON.parse(sessionStorage.getItem(this.userSessionKey));
            }
            return undefined;
        };
        return SessionstorageTokenProviderService;
    }());
    SessionstorageTokenProviderService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SessionstorageTokenProviderService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    SessionstorageTokenProviderService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SessionstorageTokenProviderService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SessionstorageTokenProviderService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }] });

    function MSALInstanceFactory() {
        return new msalBrowser.PublicClientApplication({
            auth: {
                clientId: defaultConfigLibrary.clientId,
                authority: defaultConfigLibrary.authority,
                redirectUri: defaultConfigLibrary.redirectUri,
            }
        });
    }
    var SecurityLibraryModule = /** @class */ (function () {
        function SecurityLibraryModule() {
        }
        SecurityLibraryModule.withProviders = function (configLib) {
            function MSALInstanceFactoryEnv() {
                return new msalBrowser.PublicClientApplication({
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
                    { provide: i5.MSAL_INSTANCE, useFactory: MSALInstanceFactoryEnv },
                    i5.MsalService
                ]
            };
        };
        return SecurityLibraryModule;
    }());
    SecurityLibraryModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SecurityLibraryModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SecurityLibraryModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SecurityLibraryModule, declarations: [LoginLibraryComponent,
            RecoveryPasswordComponent], imports: [
            // BrowserModule,
            // BrowserAnimationsModule,
            i9.CommonModule,
            i1$1.FormsModule,
            i1$1.ReactiveFormsModule,
            MaterialUiModule,
            i5.MsalModule
        ], exports: [LoginLibraryComponent,
            RecoveryPasswordComponent] });
    SecurityLibraryModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SecurityLibraryModule, providers: [
            { provide: CONFIGLIBRARY, useValue: defaultConfigLibrary },
            { provide: TokenPorviderService, useValue: SessionstorageTokenProviderService },
            { provide: i5.MSAL_INSTANCE, useFactory: MSALInstanceFactory },
            i5.MsalService
        ], imports: [[
                // BrowserModule,
                // BrowserAnimationsModule,
                i9.CommonModule,
                i1$1.FormsModule,
                i1$1.ReactiveFormsModule,
                MaterialUiModule,
                i5.MsalModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: SecurityLibraryModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            LoginLibraryComponent,
                            RecoveryPasswordComponent
                        ],
                        imports: [
                            // BrowserModule,
                            // BrowserAnimationsModule,
                            i9.CommonModule,
                            i1$1.FormsModule,
                            i1$1.ReactiveFormsModule,
                            MaterialUiModule,
                            i5.MsalModule
                        ],
                        exports: [
                            LoginLibraryComponent,
                            RecoveryPasswordComponent
                        ],
                        providers: [
                            { provide: CONFIGLIBRARY, useValue: defaultConfigLibrary },
                            { provide: TokenPorviderService, useValue: SessionstorageTokenProviderService },
                            { provide: i5.MSAL_INSTANCE, useFactory: MSALInstanceFactory },
                            i5.MsalService
                        ]
                    }]
            }] });

    var AuthInterceptor = /** @class */ (function () {
        function AuthInterceptor(configLibrary, router, tokenPorviderService, authService, auth, encrDecr, _authMapperService) {
            this.router = router;
            this.tokenPorviderService = tokenPorviderService;
            this.authService = authService;
            this.auth = auth;
            this.encrDecr = encrDecr;
            this._authMapperService = _authMapperService;
            this.isRefreshing = false;
            this.refreshTokenSubject = new rxjs.BehaviorSubject(null);
            this.whiteList = configLibrary.whiteList;
            this.refreshTokenURL = configLibrary.refreshTokenURL;
            this.accessTokenURL = configLibrary.accessTokenURL;
        }
        AuthInterceptor.prototype.intercept = function (req, next) {
            var _this = this;
            this.token = this.tokenPorviderService.getToken();
            var isNeedToken = true;
            if (this.whiteList) {
                this.whiteList.forEach(function (element) {
                    if (req.url.includes("" + element.word)) {
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
            if (this.token && req.url.includes("" + this.refreshTokenURL)) {
                req = this.addTokenHeader(req, this.token.token.refreshToken);
            }
            return next.handle(req).pipe(operators.catchError(function (e) {
                // Checamos si tiene acceso...
                if (e.status == 401) {
                    if (!e.url.includes(_this.accessTokenURL)
                        && !e.url.includes(_this.refreshTokenURL)) {
                        return _this.handle401Error(req, next);
                    }
                    else {
                        // No tiene autorizacion (UnAuthorized)
                        // Si se vence el token en el backend..se cierra la sesion en el frontend
                        if (_this.authService.isAuthenticated()) {
                            _this.authService.logOut();
                        }
                        _this.router.navigate(['auth/login']);
                    }
                }
                // checamos si no esta autorizado...
                if (e.status == 403) {
                    _this.authService.logOut();
                    _this.router.navigate(['auth/login']);
                    Swal__default["default"].fire('Acceso Denegado', "Hola " + _this.token.userDetails.name + " no tienes acceso a este recurso", 'warning');
                }
                return rxjs.throwError(e);
            }));
        };
        AuthInterceptor.prototype.handle401Error = function (request, next) {
            var _this = this;
            if (!this.isRefreshing) {
                this.isRefreshing = true;
                this.refreshTokenSubject.next(null);
                return this.auth.refreshToken().pipe(operators.switchMap(function (token) {
                    _this.isRefreshing = false;
                    var decodeAcsessToken = _this.encrDecr.getDecodedAccessToken(token.content.token.accessToken);
                    decodeAcsessToken.DanoneTokenPayload.token = token.content.token;
                    _this.tokenPorviderService.setToken(_this._authMapperService.transform(decodeAcsessToken.DanoneTokenPayload));
                    _this.refreshTokenSubject.next(decodeAcsessToken.DanoneTokenPayload.token.accessToken);
                    return next.handle(_this.addTokenHeader(request, decodeAcsessToken.DanoneTokenPayload.token.accessToken));
                }), operators.catchError(function (err) {
                    _this.isRefreshing = false;
                    if (_this.authService.isAuthenticated()) {
                        _this.authService.logOut();
                    }
                    _this.router.navigate(['auth/login']);
                    return rxjs.throwError(err);
                }));
            }
            return this.refreshTokenSubject.pipe(operators.filter(function (token) { return token !== null; }), operators.take(1), operators.switchMap(function (token) { return next.handle(_this.addTokenHeader(request, token)); }));
        };
        AuthInterceptor.prototype.addTokenHeader = function (request, token) {
            /* this.token = this.tokenPorviderService.getToken(); */
            return request.clone({
                setHeaders: {
                    authorization: "Bearer " + token
                }
            });
        };
        return AuthInterceptor;
    }());
    AuthInterceptor.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthInterceptor, deps: [{ token: CONFIGLIBRARY }, { token: i1__namespace$2.Router }, { token: TokenPorviderService }, { token: AuthenticationService }, { token: AuthenticationService }, { token: EncrDecrService }, { token: AuthMapperService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthInterceptor.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthInterceptor });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AuthInterceptor, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: IConfigLibrary, decorators: [{
                            type: i0.Inject,
                            args: [CONFIGLIBRARY]
                        }] }, { type: i1__namespace$2.Router }, { type: TokenPorviderService }, { type: AuthenticationService }, { type: AuthenticationService }, { type: EncrDecrService }, { type: AuthMapperService }];
        } });

    var LoginUserModel = /** @class */ (function () {
        function LoginUserModel() {
        }
        return LoginUserModel;
    }());

    var TokenProviderModel = /** @class */ (function () {
        function TokenProviderModel() {
        }
        return TokenProviderModel;
    }());

    var TokenModel = /** @class */ (function () {
        function TokenModel() {
        }
        return TokenModel;
    }());

    var UserDetailModel = /** @class */ (function () {
        function UserDetailModel() {
        }
        return UserDetailModel;
    }());

    var UserRolesModel = /** @class */ (function () {
        function UserRolesModel() {
        }
        return UserRolesModel;
    }());
    var FunctionModel = /** @class */ (function () {
        function FunctionModel() {
        }
        return FunctionModel;
    }());
    var CompanyModel = /** @class */ (function () {
        function CompanyModel() {
        }
        return CompanyModel;
    }());
    var PaymentPeriodicityModel = /** @class */ (function () {
        function PaymentPeriodicityModel() {
        }
        return PaymentPeriodicityModel;
    }());
    var RFCExcludedModel = /** @class */ (function () {
        function RFCExcludedModel() {
        }
        return RFCExcludedModel;
    }());

    /*
     * Public API Surface of security-library
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AuthInterceptor = AuthInterceptor;
    exports.AuthenticationService = AuthenticationService;
    exports.CONFIGLIBRARY = CONFIGLIBRARY;
    exports.CompanyModel = CompanyModel;
    exports.FunctionModel = FunctionModel;
    exports.IConfigLibrary = IConfigLibrary;
    exports.IWhiteList = IWhiteList;
    exports.LoginLibraryComponent = LoginLibraryComponent;
    exports.LoginUserModel = LoginUserModel;
    exports.MSALInstanceFactory = MSALInstanceFactory;
    exports.PaymentPeriodicityModel = PaymentPeriodicityModel;
    exports.RFCExcludedModel = RFCExcludedModel;
    exports.RecoveryPasswordComponent = RecoveryPasswordComponent;
    exports.SecurityLibraryModule = SecurityLibraryModule;
    exports.SessionstorageTokenProviderService = SessionstorageTokenProviderService;
    exports.TokenModel = TokenModel;
    exports.TokenPorviderService = TokenPorviderService;
    exports.TokenProviderModel = TokenProviderModel;
    exports.UserDetailModel = UserDetailModel;
    exports.UserRolesModel = UserRolesModel;
    exports.defaultConfigLibrary = defaultConfigLibrary;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=security-library.umd.js.map
