"use strict";

import {
  Component,
  View
} from "angular2/core";

import {bootstrap} from "angular2/platform/browser";

/* Container class for Person Role data */
class PersonRole {
  name: string;
  role: string;
  constructor(name, role){
    this.name = name;
    this.role = role;
  }
}

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

/* This will start the app */
bootstrap(GetStartedApp);
