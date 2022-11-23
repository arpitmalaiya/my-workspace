# MyLib

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Code scaffolding

Run `ng generate component component-name --project my-lib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project my-lib`.
> Note: Don't forget to add `--project my-lib` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build my-lib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build my-lib`, go to the dist folder `cd dist/my-lib` and run `npm publish`.

## Running unit tests

Run `ng test my-lib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Basic setup guide for angular library

Angular Library Setup 

 

Step 1 -  

ng new my-workspace --no-create-application 

cd my-workspace 

ng generate library my-lib 

 

Step 2 -  

 

In angular.json - you will see a project added and of type library 

 

 

Step 3 -  

Make changes – as you want 

Like adding a input box  

Step 4 - 

In public.api.ts file  

Make sure the module and services and component.  

Step 5 - 

ng build my-lib 

cd dist/my-lib 

 

Step 6 – Publish Library 

Npm command will publish library on npm package manager- confirm with your team -  

Where you need to publish library 

If for testing purpose , you can zip and share library among team members, details in next step. 

 

ALSO – if you want to use library within same workspace you do not need to publish it, just build and use it 

npm publish 

 

TroubleShoot – you may need to login into npm registry before publishing 

There is required to enter email – For company usage, make sure to use company mail id – check it before with your team, weather you can use it or not 

To add user to npm registry 

Npm adduser 

Enter usernmae -  

Enter email  

Enter pass – no need to enter – press enter 

Enter OTP – Otp sent to entered mail id 

 

Step 7 – packing and sharing library locally 

Change folder to dist/lib 

Npm pack 

This command will generate a tzg file with in dist folder 

Share this tzg file with users who want to use the library-  

In another application  

Place the tzg file in some folder and use it path to install 

For eg - npm install ../example-ng6-lib/dist/example-ng6-lib/example-ng6-lib-0.0.1.tgz 

After this – that library will be added to package.json and can be used. 

 

Workspace attached , on how to setup will look. 

Let us know if you need project in how to use library 

For more info , feel free to contact , we can discuss it over a cup of coffee 

 
