# Application Dependencies

## 🚩 Table of Contents

- [Overview](#overview)
- [Front-End Dependencies](#front-end-dependencies)
  - [Used dependencies](#used-dependencies)
- [Back-End Dependencies](#back-end-dependencies)
  - [Used dependencies](#used-dependencies-1)

## Overview

This full-stack application is built using Node.js and Express for the backend and Angular for the frontend. It provides a simple user interface to create, read, update, and delete data from a PostgreSQL database. The backend is responsible for handling HTTP requests and responses, while the frontend provides a user-friendly interface to interact with the backend APIs.

The technologies used in this project include Node.js, Express, Angular, PostgreSQL. Node.js and Express are used for building the backend APIs, while Angular is used for the frontend. PostgreSQL is used as the database.

## Front-End Dependencies

The client-side dependencies in this project are primarily related to the Angular framework and Ionic, which are used to create the user interface and application logic for the frontend of the web application. These dependencies include various Angular modules, such as core, forms, router, and http, as well as Ionic Native modules for core functionalities like core, splash screen, and status bar. There are also several development dependencies used for testing, debugging, and linting the client-side code.

### Used dependencies

- `@angular/common`, `@angular/core`, `@angular/forms`, `@angular/http`, `@angular/platform-browser`, `@angular/platform-browser-dynamic`, `@angular/router`, and `@ionic/angular`: These are the core Angular and Ionic dependencies used for building the client-side of the application.
- `@ionic-native/core`, `@ionic-native/splash-screen`, and `@ionic-native/status-bar`: These are Ionic dependencies that provide native functionality for mobile devices, such as accessing device hardware and sensors.
- `core-js`: A library that provides polyfills for modern JavaScript features that may not be supported by older browsers.
- `rxjs`: A library that provides reactive programming support for Angular applications.
- `zone.js`: A library that provides support for running Angular applications in zones, which are execution contexts that enable features like change detection and error handling.

And here are the devDependencies, which are used during development:

- `@angular-devkit/architect`, `@angular-devkit/build-angular`, `@angular-devkit/core`, `@angular-devkit/schematics`, `@angular/cli`, `@angular/compiler`, `@angular/compiler-cli`, `@angular/language-service`, and `@ionic/angular-toolkit`: These are development dependencies for building and testing the client-side of the application.
- `@types/jasmine`, `@types/jasminewd2`, and `@types/node`: These are type definitions for the Jasmine testing framework and Node.js.
- `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`: These are dependencies for integrating ESLint with TypeScript.
- `codelyzer`: A tool for analyzing and linting Angular code.
- `jasmine-core`, `jasmine-spec-reporter`, `karma`, `karma-chrome-launcher`, `karma-coverage-istanbul-reporter`, `karma-jasmine`, `karma-jasmine-html-reporter`, `protractor`, `ts-node`, `tslib`, `tslint`, and `typescript`: These are development dependencies for running tests and building the application.

## Back-End Dependencies

The server-side dependencies include various packages that help in building the backend of the application. These dependencies include libraries for handling HTTP requests, database management, authentication, email validation, and encryption. They also include development dependencies such as testing frameworks and linting tools.

### Used dependencies

- `@types/bcryptjs`: Provides TypeScript type definitions for the bcryptjs library.
- `aws-sdk`: SDK for Amazon Web Services (AWS) services.
- `bcryptjs`: A library to hash and compare passwords using the bcrypt algorithm.
- `body-parser`: A middleware to parse the request body in Express.js.
- `cors`: A middleware to enable CORS (Cross-Origin Resource Sharing) in Express.js.
- `dotenv`: A module to load environment variables from a .env file.
- `email-validator`: A library to validate email addresses.
- `express`: A web framework for Node.js.
- `jsonwebtoken`: A library to sign, verify and decode JSON Web Tokens (JWTs).
- `pg`: A PostgreSQL client for Node.js.
- `reflect-metadata`: A library to enable reflection in TypeScript.
- `sequelize`: A promise-based ORM (Object-Relational Mapping) for Node.js.
- `sequelize-typescript`: Adds TypeScript support for Sequelize.
  Dev dependencies:

- `@types/bluebird`: TypeScript type definitions for the Bluebird promise library.
- `@types/cors`: TypeScript type definitions for the cors middleware.
- `@types/express`: TypeScript type definitions for Express.js.
- `@types/jsonwebtoken`: TypeScript type definitions for the jsonwebtoken library.
- `@types/node`: TypeScript type definitions for Node.js.
- `@types/sequelize`: TypeScript type definitions for Sequelize.
- `@types/validator`: TypeScript type definitions for the validator library.
- `@typescript-eslint/eslint-plugin`: An ESLint plugin for TypeScript.
- `@typescript-eslint/parser`: A parser for TypeScript used by ESLint.
- `chai`: A BDD / TDD assertion library.
- `chai-http`: An HTTP integration testing plugin for Chai.
  `eslint`: A linter for JavaScript and TypeScript.
- `eslint-config-google`: A set of ESLint rules based on Google's style guides.
- `mocha`: A testing framework for Node.js.
- `ts-node-dev`: A TypeScript Node.js development server with automatic reloading.
- `typescript`: A superset of JavaScript that adds static typing and other features.
