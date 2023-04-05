# Hosting a Full-Stack Application

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/muhammedkhairy/full-stack-app/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/muhammedkhairy/full-stack-app/tree/master)

This project is about how to take a newly developed Full-Stack application built for a retailer and deploy it to a cloud service provider so that it is available to customers. Aws console will be used to start and configure the services the application needs such as a database to store product information and a web server allowing the site to be discovered by potential customers.

## 🚩 Table of Contents

- [Hosting a Full-Stack Application](#hosting-a-full-stack-application)
  - [Getting started](#getting-started-udagram-app)
  - [Udagram overview](#udagram-overview)
  - [⬆️ Dependencies](#️-dependencies)
  - [⚙️ Installation](#️-installation)
  - [🚨 Testing](#-testing)
    - [🧪 Unit Tests](#-unit-tests)
    - [✔️ End to End Tests](#️-end-to-end-tests)
  - [Pipeline Process with CircleCI](#pipeline-process-with-circleci)
  - [🏗️ Built With](#️-built-with)
  - [📄 Documentation](#-documentation)
  - [📜 License](#-license)
  - [💳 Credits](#-credits)

## Getting started [Udagram app]

- The Udagram application is provided by Udacity as an alternative starter project as it is a fairly simple application that includes all the major components of a Full-Stack web application.

- This application should contain the three main components:

  - Backend API.
  - Frontend application.
  - Database to store the application data.

- Learn to interact with the services which were started on aws and will deploy manually the application a first time to it.

- Register for a free account on CircleCi and connect Github account to it. Based on the manual steps used to deploy the app.

- Learn how to write a config.yml file that will make the process reproducible in CircleCi.

- Learn how to set up the process to be executed automatically based when code is pushed on the main Github branch.

- For more information about application, please refer to App description documentation from [here](/documents/App%20description.md)

## Udagram overview

- The project application, Udagram - an Image Filtering application, allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering service.

- It has two components:

  1. Frontend - Angular web application built with Ionic framework.
  2. Backend RESTful API - Node-Typescript application.

## ⬆️ Dependencies

You should have the following tools installed in your local machine:

- Install Git.

- The following tools will help you run your project locally.

  1. PostgreSQL client, the psql command line utility, installed locally. Using PostgreSQL involves a server and a client. The server hosts the database while the client interfaces with it to execute queries. Because we will be creating our server on AWS, we will only need to install a client for our local setup. The easiest way to set this up is with the PostgreSQL Installer. This installer installs a PostgreSQL client in the form of the psql command-line utility. You can see the complete (server and client) installation instructions for Mac, Linux, and Windows. Verify using:

  ```powershell
    # Preferred v12.x to v13.x
    psql --version
  ```

  2. NodeJS v12.14 or greater up to v14.15. Verify the installation using the commands:

  ```powershell
  # v12.14 to v14.15
  node -v
  # v6.14 to v7.19
  npm -v
  ```

  3. Ionic command-line utility v6 framework to build and run the frontend application locally. Verify the installation as:`npm install -g @ionic/cli`

- AWS CLI v2 and EB CLI

  1. Create an IAM user with Admin privileges on the AWS web console. Copy its Access key.
  2. Configure the access profile locally using the Access key generated above:

  ```powershell
  aws configure
  # Run a sample command
  aws iam list-users
  ```

## ⚙️ Installation

Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres ([Udagram-fullstack-udacity](udagram-fullstack-udacity.c1tkjyi5aofl.us-east-1.rds.amazonaws.com)).
2. In AWS, provision a s3 bucket for hosting the uploaded files ([udagram-802641492148-bucket](http://udagram-802641492148-bucket.s3-website-us-east-1.amazonaws.com)).
3. Export the ENV variables needed or use a package like `dotnev`.
4. From the root of the repo, navigate udagram-api folder `cd starter/udagram-api` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run dev`.
5. Without closing the terminal in step 1, navigate to the udagram-frontend `cd starter/udagram-frontend` to intall the node_modules `npm install`. After installation is done start the api in dev mode with `npm run start`.

> for more details about database and s3 bucket. see [documentaion](/documents/AWS%20services.md).

## 🚨 Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `cd starter/udagram-frontend`
2. `npm run test`
3. `npm run e2e`

There are no Unit test on the back-end

### 🧪 Unit Tests

Unit tests are using the Jasmine Framework.

![Unit tests](/screenshots/Test.jpg 'unit tests')

### ✔️ End to End Tests

The e2e tests are using Protractor and Jasmine.

![E2e tests](/screenshots/e2e%20test.jpg 'e2e tests')

## Pipeline Process with CircleCI

CircleCI is used to automate the build, and deployment process of this project. The pipeline process with CircleCI involves several steps, which include building the Docker image, and deploying to the cloud. For a more detailed explanation of the pipeline process with CircleCI, please refer to the Detailed Explanation of [Pipeline Process section](/documents/Pipeline%20process.md).

## 🏗️ Built With

- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework

## 📄 Documentation

Here you can a detailed documentation for the project

- App description documentation from [here](/documents/App%20description.md)
- AWS services used in the app from [here](/documents/AWS%20services.md)
- The pipeline process from [here](/documents/Pipeline%20process.md)
- App dependencies from [here](/documents/App%20Dependencies.md)

## 📜 License

[License](LICENSE.txt)

## 💳 Credits

- Thanks to Udacity and its team. they are very helpful 😍
- Special thank for Eng. Mahmoud Ali Kassem.
