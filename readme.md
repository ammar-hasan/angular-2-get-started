Angular2 with TypeScript (how to get started!)
========================================

```
**Author**: [Ammar Hasan](https://github.com/ammar-hasan)
Find the source code [here](https://github.com/ammar-hasan/angular-2-get-started)
```

It feels exciting writing about new technologies that have just arrived in the software world. One of the interesting technologies, I must say is Angular v2, and it seems so far to be very promising. The purpose of this piece of writing and related code is to make a new JS developer get started with Angular v2 development. So if you already know what's different in Angular v2, or you can't wait to write the first app, then you may just go to the pre-requisites section and follow the steps afterwards.

## What's so different in Angular v2

The one stand-out feature in Angular v2 and also in ReactJs is that they both have embraced the new Web-Components architecture of development. What this means is that we can now create independent Web-Components and plug-and-play them to any website in the world that has the same technology stack of the this Web-Component. Cool! yeah very cool. :)

The other most prominent change in Angular v2 is that it's **primary** development language is none other than TypeScript. Although TypeScript belongs to Microsoft, and it is a superset of JavaScript of 2015 (or ECMAScript6/ES6), but it has some features that are very promising. I would recommend the readers to checkout TypeScript in a bit detail (which is fun of-course) after reading this tutorial.

Here I would say that the guys trying to interrelate Angular v1 and Angular v2 further confuse the readers, and in my humble opinion, Angular v1 and Angular v2 should be treated as two different frameworks. In Angular v2, we have Web-Components' concept of developing web applications, while in Angular v1 we have to play with Controllers, and (sadly or luckily) no controllers are present in Angular v2.

## Background

Well the JS development has evolved so much that it's really like staying on your toes to deal with newest frameworks and toolsets, probably every month, if not every day, a new framework is introduced here. So providing this context of the rapid changes in JavaScript world, there are many things to be learnt as pre-requisites to start up development in a particular framework. Therefore I decided to write something that get's a newbie to get started on Angular v2.

## Pre-requisites
* NodeJS installation
* IDE or Text Editor
* Motivation

## Let's get started

Firstly create a folder where you'll save this application. Afterwards, open command-line tool over the created folder and do this

```bash
$ npm init
```

I'll tell in the end that what this command does, but now go with the flow and after the pervious command you should run the following which will create a package.json file

```bash
$ npm install -g bower
```

Then this command should be executed

```bash
$ bower init
```

This will create a **bower.json** file in this folder, edit this file in text editor and add a dependencies node if not there, otherwise replace it

```json
"dependencies": {
  "bootstrap.min": "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css",
  "es6-shim.min": "https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.33.3/es6-shim.min.js",
  "system-polyfills": "https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.16/system-polyfills.js",
  "system": "https://code.angularjs.org/tools/system.js",
  "typescript": "https://code.angularjs.org/tools/typescript.js",
  "angular2-polyfills": "https://code.angularjs.org/2.0.0-beta.7/angular2-polyfills.js",
  "Rx": "https://code.angularjs.org/2.0.0-beta.7/Rx.js",
  "angular2.dev": "https://code.angularjs.org/2.0.0-beta.7/angular2.dev.js"
}
```

or you may also use **bower install** command to add these

```bash
$ bower install --save https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.33.3/es6-shim.min.js https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.16/system-polyfills.js https://code.angularjs.org/tools/system.js https://code.angularjs.org/tools/typescript.js https://code.angularjs.org/2.0.0-beta.7/angular2-polyfills.js https://code.angularjs.org/2.0.0-beta.7/Rx.js https://code.angularjs.org/2.0.0-beta.7/angular2.dev.js
```

These are actually the libraries needed to continue with the development, if you don't know about them, just consider them as commands, and I'll explain at the end of this writing what they are and what they do.

Now create a file named **config.js** in the folder and write following code in that file

```javascript
System.config({
  baseURL: "/",
  transpiler: 'typescript',
  typescriptOptions: { emitDecoratorMetadata: true },
  packages: {'app': {defaultExtension: 'ts'}},
  paths: {
    "packages:*": "bower_components/*"
  }
});
```

Create an index.html file with blank HTML body and write the following lines in the **head** tag.

```html
<!-- load in this exact order -->

<link href="bower_components/bootstrap/index.css" rel="stylesheet">

<script src="bower_components/es6-shim.min/index.js" charset="utf-8"></script>
<script src="bower_components/system-polyfills/index.js" charset="utf-8"></script>
<script src="bower_components/system/index.js" charset="utf-8"></script>
<script src="bower_components/typescript/index.js" charset="utf-8"></script>
<script src="bower_components/angular2-polyfills/index.js" charset="utf-8"></script>
<script src="bower_components/rx/index.js" charset="utf-8"></script>
<script src="bower_components/angular2.dev/index.js" charset="utf-8"></script>

<script src="config.js" charset="utf-8"></script>
```

After this add a script tag in **head** like this

```html
<script>
  var errorLogger = (console.error || console.log).bind(console);
  System.import('app/main')
        .then(null, errorLogger);
</script>
```

Now in the body of index.html write

```html
<div class="container">
  <div class="row">
    <div class="col-xs-6 col-md-4"></div>
    <div class="col-xs-6 col-md-4" style="text-align: center;">
      <b>Getting Started with Angular v2</b>
    </div>
    <div class="col-xs-6 col-md-4"></div>
  </div>
  <br/>
  <div class="row">
    <div class="col-xs-6 col-md-4"></div>
    <div class="col-xs-6 col-md-4">
      <get-started style="display: block">Loading...</get-started>
    </div>
    <div class="col-xs-6 col-md-4"></div>
  </div>
</div>
```

Observe this html, and see there is **get-started** tag there, this is where our first Angular app will be placing it's code, and yes it's a Web-Component.

Now create a folder name **app* and create a file within named **main.ts** (just to mention that ts is the widely used file-extension for TypeScript), and write this at the top to ensure stricter code validation within the browser.

```javascript
"use strict";
```

Import the Angular libraries using this snippet (typescript syntax)

```javascript
import {
  Component,
  View
} from "angular2/core";

import {bootstrap} from "angular2/platform/browser";
```

This will import a couple of things from Angular's core framework, and a bootstrap method from Angular's browser helper, which will eventually load our app in the browser.

We are creating an application that displays a table of Persons with their Roles in an organization. So write this code in the file

```javascript
/* Container class for Person Role data */
class PersonRole {
  name: string;
  role: string;
  constructor(name, role){
    this.name = name;
    this.role = role;
  }
}
```

Now here comes the delicious part, where we are actually writing something in Angular 2 (typescript syntax)

```javascript
/* Component Decorator*/
@Component({
  /* This is the tag-name which will be used in HTML like <get-started></get-started> */
  selector: 'get-started'
})
/* View Decorator */
@View({
  /* This is the template of the view, you may see ngFor here to iterate the items */
  template: `
    <div>
      <div class="row" style="background-color: #0b5394; color: #fff;">
        <div class="col-xs-6 col-md-4">Name</div>
        <div class="col-xs-12 col-md-8">Role</div>
      </div>
      <div class="row" *ngFor="#personRole of personRoles" style="border-bottom: 1px solid #dadada;">
        <div class="col-xs-6 col-md-4">{{personRole.name}}</div>
        <div class="col-xs-12 col-md-8">{{personRole.role}}</div>
      </div>
    </div>
  `
})
class GetStartedApp {
  /* The state of this component (used by view) */
  personRoles: PersonRole[];

  /*
    Simple plain construtor to start-up the things
  */
  constructor(){
    this.personRoles = [];
    this._loadNextRole();  /* Starts loading person-roles */
  }

  /*
    This is the magic method which will pop a PersonRole out of the PersonRole Array
    and push it to our app's personRoles array. This will simulate the behavior of what happens when
    the state of a component gets changed
  */
  private _loadNextRole() {
    let personRoles = this._getPersonRoles(),
      self = this,
      interval;

    interval = window.setInterval(function () {
      if (personRoles.length === 0) {
        window.clearInterval(interval);
      }
      self.personRoles.push(personRoles.pop());
    }, 1000);
  }
  /*
    Get's an array of person-roles from the database
    Actually not database, but for the simplicity sake and since this is the getting-started app
    consider that this method fetches it from database and returns an array of PersonRole objects.
  */
  private _getPersonRoles() {
    return [
      new PersonRole("Shehzeen Huda", "Software Engineer"),
      new PersonRole("Syeda Sidrah", "Software Engineer"),
      new PersonRole("Mohammad Hammad", "Software Engineer"),
      new PersonRole("Ammar Hasan", "Software Engineer"),
      new PersonRole("Fahad bin Saeed", "UI Engineer"),
      new PersonRole("Abdul Sami", "Sofware Architect"),
      new PersonRole("Mufaddal Ismail", "Project Manager")
    ]
  }
}
```

This may first look to be a stranger syntax, but it's not difficult if we just think over the syntax, it's TypeScript on our desktops.
@Component and @View are actually decorators (which follow decorator pattern), these actually decorate the class GetStartedApp as a class which is an Angular View (because of View decorator) and an Angular Component (becuase of Component decorator).
Firstly let's inspect the Component decorator, we are providing a selector **get-started** there, so that when the app runs, it will find the **get-started** tag and put all the logic of GetStartedApp within it.
Then we have view, it's simple plain html (could have been a url to external template file also), which is having an **ngFor** attribute, what ngFor does is that it will iterate the personRoles array of GetStartedApp and write the name of each personRole in the html
```html
<div class="col-xs-6 col-md-4">{{personRole.name}}</div>
<div class="col-xs-12 col-md-8">{{personRole.role}}</div>
```
Then there is the GetStartedApp class, which has some methods to load the data and update the personRoles array.

And finally in this main.ts file, at the bottom-most, write the following to start our app

```javascript
/* This will start the app */
bootstrap(GetStartedApp);
```

At this moment, your code's directory structure must look like this

|-- angular2-ts-get-started
    |-- bower.json
    |-- config.js
    |-- index.html
    |-- package.json
    |-- app
        |-- main.ts

So now we are done with all the cool stuff, but we have one last thing to do, and that is to create a web-server, which will host your very first Angular v2 app, so write the following command to install a simple (but awesome) NodeJs [Http Server](https://github.com/indexzero/http-server).

```bash
$ npm install -g http-server
```

Now start this server using this command (make sure that you are standing in your code folder), this will also open the browser and load your Angular 2 webpage at port 8080.

```bash
$ http-server --cors -o -p 8080
```

alternatively you may add this in **scripts** tag in package.json file

```javascript
"start": "http-server --cors -o -p 8080"
```

Doing so will enable you running the server using this simple command

```bash
$ npm start
```

Hurray, now time to cheer-up, you have just created and used your first Angular v2 app

## Libraries used
* [bootstrap](http://getbootstrap.com/): A CSS framework to do the make-up of this app.
* [es6-shim](https://www.npmjs.com/package/es6-shim): This is a shim which enables us to use JavaScript 2015 (ES6) features (this is also a requirement for SystemJs)
* [system-polyfills](https://github.com/systemjs/systemjs): This is a polyfill which enables the support for System.import.
* [systemjs](https://github.com/systemjs/systemjs): This is a library which can load modules and files at the runtime (this library is very powerful and can be used for different types of module definitions).
* [typescript](http://www.typescriptlang.org): A library to transpile typescript to regular javascript on the go.
* [angular2-polyfills](https://angular.io/): This polyfill enables all the extended features used by Angular v2 which are not yet supported by browser's javascript engine.
* [rxjs](https://angular.io/): This library enables reactive programming used by Angular v2.
* [angular2-dev](https://angular.io/): The main development library for Angular v2 framework.

## Some words about the cool things we used
* [NPM](https://www.npmjs.com/): This is the NodeJs package manager, a place from where we can import and use all the cool packages developed by the coolest developers.
* [Bower](http://bower.io/): Bower is a tool over NPM, which enables us to import and manage cool javascript frontend libraries in our applications.
* [Http Server](https://github.com/indexzero/http-server): A very simple but an awesome http web server over NodeJs, which servers every thing and also supports cross origin requests.

## Further study material
* [TypeScript](http://www.typescriptlang.org)
* [Decorator pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#decoratorpatternjavascript)

## FAQS
* What does **npm init** do?
Answer: This command initializes NPM package management over the current directory, and adds a package.json file, which will manage the installed packages and other scripts.

* Why did we use npm here?
Answer: The purpose was that readers should start using NPM if the haven't already used, because in near future of Angular development, they will likely be encountering NPM, so it's good to start using now.

* What does **bower init** do?
Answer: This command initializes bower frontend package management over the current directory, and adds a bower.json file.

* Why did we use bower in this example?
Answer: Because this will enable the reader to get-used-to bower simultaneously with programming in Angular JS, also instead of using directly from CDN doesn't work when network is not available.

* What is the difference between bower and npm?
Answer: The difference is that bower is a package of NPM for frontend. And hence bower uses NPM, also github and CDN repositories, and manage the use of frontend libraries.
