# SecurityLibrary

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Code scaffolding

Run `ng generate component component-name --project security-library` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project security-library`.
> Note: Don't forget to add `--project security-library` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build security-library` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build security-library`, go to the dist folder `cd dist/security-library` and run `npm publish`.

## Running unit tests

Run `ng test security-library` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Environments
The project security-library contain one file with name `config-library.interface.ts`, this file contain the environments defaul for the correct funcionality.
These are the environment variables needed:
   - `apiURL: '/server',` //Url base to api
   - `refreshTokenURL: 'oauth/refreshToken',` //path or api to refresh token
   - `accessTokenURL: 'oauth/token',` //path or api to get accessToken
   - `resetPasswordURL: 'user/resetPassword',` //path or api to reset Password
   - `encryptPhrase: 'dAN0n3IR0nM4n4p1',` //word to encrypt or decript
   - `whiteListUrl: { word: "authenticate" },` //whitelist
   - `loginType: 'both',` //the login contain 3 types login: internal(only with Active directory), external(user and password) or both(for both options)
   - `redirectUri: ''` //(url from back to login whit Active directory)
These variables must exist in the project that will use the library, in the different environments.

## Configuring
The base project that will use the library must create the path `src/config_system_lib/config-library.interface.ts`, which will have the same structure as the default library.

The base project Angular that will use the library must add this imports in `app.module` whit the respective imports:
   - SecurityLibraryModule,
   - SecurityLibraryModule.withProviders(configLibrary)

**The base project Angular that will use the library must have this functions in the `app.component.ts` only if will use the login with Active Directory:**

```dif
constructor(
    private authServiceAD: AuthAdService,
    private tokenPorviderService: TokenPorviderService
  ) {
    this.getQueryStrings(window.location.search);
  }

  // Login AD

  getQueryStrings(qParams: string) {
    if (qParams === '') {
      return;
    }
    let match: any[] | null = [];
    const pl = /\+/g;  // Regex for replacing addition symbol with a space
    const search = /([^&=]+)=?([^&]*)/g
    const decode = (s: string) => { return decodeURIComponent(s.replace(pl, " ")); },
      query = window.location.search.substring(1);

    let urlParams: any = {};
    while (match = search.exec(query))
      urlParams[decode(match[1])] = decode(match[2]);
    this.loadParamsAD(urlParams);
  }

  public loadParamsAD(urlParams: any) {
    const paramsRoute = {
      "content": {
        "token": urlParams
      },
      "msg": null
    }
    this.authServiceAD.loginAD(paramsRoute).subscribe(resp => {
      this.authUserAD(resp);
    },
      error => {
        console.log(error);
      });
  }

  private authUserAD(response: any) {
    this.tokenPorviderService.setToken(response);
  }
```
