<<<<<<< HEAD
# Assignment
=======
# Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
>>>>>>> first attempt


## Git Repository Structure

This Assignment Git repository named "Assignment"  is structured into 

1. Server side
2. Cient side

Server side runs with **nodemon server.js** and client side runs with **ng build**..
All the codes were backed up stage by stage to ensure good version control and to save any problems during changeovers.  CLient side runs with Angular js Type script and uses components to display data on the front end. On the back-end we will use Node.js with express and Socket.IO. Reasoning behind this is that Socket.IO is very easy to set up and work with. Furthermore, it provides both server and client side libraries. Socket.IO primarily uses WebSocket protocol to enable real-time bidirectional communication.

## Client and Server Data Transfer

The transfer of data between clent and sever is done through JSON format, which collects data via http get() method and tra and data is saved back to server via http post() method. Reading file in Angular6 is done through the get method while Writing file is done via Post method.

## Angular front end

a. package.json: Instructs the Node.js package manager (npm) on what it needs to do; including which dependency packages should be installed.

b. node_modues: Directory where npm will install packages.

c. config.js: Contains the application–specific configuration option

**app.js:** Defines the main application module (app). Configures:

a. That the application will be run by Express

b. Which routes there will be & where they are located in the file system (routes directory)

c. What middleware to use (e.g. to parse the JSON received in requests)

d. Error handler for queries sent to an undefined route


## Angular architecture

The different components used are Register, Login, and Chat. Services is used only for register components to enter a person into. Routes are specified using a router link and displayed in app.component.html and the path to it is referred in app.component.ts. Login has login.component.ts and register has register.component.ts. The routes are shown as buttons and clicking this button will take to login or register page. Once logged in then chat section is opened where the person can select a user name and chat with the people who select to join the group. A person fromanother group cannot see what is happening in this group.
