# Udagram - an Image Filtering application

## Introduction

- Udagram is a modern, microservices-based web application designed to provide users with a platform to upload, share and process images using a variety of image filtering techniques. The application allows users to register and log in to the web client, post photos to the feed, and apply image filters to their uploaded images using a specialized image filtering service.

- The primary goal of Udagram is to provide an engaging and user-friendly platform that allows users to easily upload and share their images with others, while also providing them with a range of powerful image editing tools. By offering users a diverse set of image filtering options, Udagram aims to provide a fun and creative environment for users to explore and experiment with different image styles.

- In addition, Udagram is designed with modularity and scalability in mind. The microservices architecture of the application allows different services to perform specific functions, allowing for greater flexibility, scalability, and resiliency in the application.

- The infrastructure for Udagram is hosted on AWS and uses a variety of AWS services such as RDS, Elastic Beanstalk, S3, ECS, CloudFront, and CircleCI for CI/CD. This ensures that the application is highly available, scalable, and easy to maintain, providing a seamless and reliable user experience.

- Overall, Udagram is a modern and versatile image filtering application that aims to provide users with a powerful yet intuitive platform to upload, share and edit their images with ease.

## App structure

- Frontend: The frontend of the application is a single-page web application implemented using Angular, TypeScript, and HTML/CSS. The frontend allows users to register, log in, upload images, and view a feed of images that have been uploaded by other users.

- Backend: The backend of the application is implemented using Node.js and the Express framework. The backend services are divided into three separate microservices:

  - User Service: This service is responsible for user authentication and management, including user registration, login, and profile updates.

  - Feed Service: This service manages the image feed, allowing users to upload and view images.

  - Image Filtering Service: This service processes uploaded images using a set of filters and then stores the processed images in Amazon S3. The service uses the Sharp image processing library to perform the image filtering.

### Frontend Structure

- The front-end of the application is implemented using Angular, a popular JavaScript framework for building single-page applications.
- The front-end is divided into two main components: the client component, which is responsible for handling user interactions and displaying data, and the deployment component, which is responsible for deploying the application to Amazon S3.
- The front-end communicates with the backend services using a set of RESTful API endpoints exposed by the backend services.
- The `shared` directory contains reusable components, services, and utilities that can be used throughout the application.
- The `assets` directory contains static assets such as images and fonts used in the application.
- The `environments` directory contains environment-specific configuration files for the development and production environments.
- The `app` directory contains the main components and modules of the application.

#### Client component

Here are the directories and files in the Udagram project code repository that are related to the client component:

- `/udagram-frontend/src/app/auth`: This directory contains the code for user authentication and management, including user registration, login, and logout.
- `/udagram-frontend/src/app/feed`: This directory contains the code for managing the image feed, including uploading and viewing images.
- `/udagram-frontend/src/app/shared`: This directory contains shared components and services used throughout the application, such as the image service and the modal service.
- `/udagram-frontend/src/app/app-routing.module.ts`: This file contains the code for defining the routing configuration for the application.
- `/udagram-frontend/src/app/app.module.ts`: This file contains the code for defining the application module and importing the necessary dependencies.

#### Deployment component

Here are the directories and files in the Udagram project code repository that are related to the deployment component:

- `/udagram-frontend/src`: This directory contains the Angular code for the front-end of the application.
- `/udagram-frontend/src/environments`: This directory contains the configuration settings for different environments, such as the production and development environments.
- `/udagram-frontend/src/index.html`: This file contains the main HTML file for the application.
- `/udagram-frontend/angular.json`: This file contains the configuration settings for the Angular CLI, including the build settings and the deployment settings.
- `/udagram-frontend/package.json`: This file contains the dependencies and scripts needed to build and deploy the front-end of the application

### Backend Structure

- The backend services are containerized using Docker, making it easy to deploy and scale the application.
- The backend services communicate with each other using a RESTful API, with each service exposing a set of endpoints that can be accessed by the other services.
- The backend services use AWS RDS for storing application data, such as user information and image metadata.
- The backend services are deployed to Amazon Elastic Beanstalk, which provides an easy-to-use platform for deploying, scaling, and managing web applications.

#### User service

Here are the files and directories in the Udagram project code repository that are related to each of the backend services:

- `/udagram-api-users/src`: This directory contains the Node.js and Express code for the User Service.
- `/udagram-api-users/src/controllers/user.controller.ts`: This file contains the code for user authentication and management.
- `/udagram-api-users/src/routes/user.router.ts`: This file contains the code for handling the HTTP routes for user authentication and management.
  Feed Service:

- `/udagram-api-feed/src`: This directory contains the Node.js and Express code for the Feed Service.
- `/udagram-api-feed/src/controllers/feed.controller.ts`: This file contains the code for managing the image feed.
- `/udagram-api-feed/src/routes/feed.router.ts`: This file contains the code for handling the HTTP routes for managing the image feed.
  Image Filtering Service:

- `/udagram-image-filter/src`: This directory contains the Node.js code for the Image Filtering Service.
- `/udagram-image-filter/src/server.ts`: This file contains the code for processing uploaded images using the Sharp image processing library and storing the processed images in Amazon S3.

#### Feed Service

- `/udagram-api-feed/src`: This directory contains the Node.js and Express code for the Feed Service.
- `/udagram-api-feed/src/controllers/feed.controller.ts`: This file contains the code for managing the image feed.
- `/udagram-api-feed/src/routes/feed.router.ts`: This file contains the code for handling the HTTP routes for managing the image feed.
- `/udagram-api-feed/src/models/feed.ts`: This file contains the data model for storing the images in a PostgreSQL database.
- `/udagram-api-feed/src/config/config.ts`: This file contains the configuration settings for the Feed Service, including the database connection details.

#### Image Filtering Service

- `/udagram-image-filter/src`: This directory contains the Node.js code for the Image Filtering Service.
- `/udagram-image-filter/src/server.ts`: This file contains the code for processing uploaded images using the Sharp image processing library and storing the processed images in Amazon S3.
- `/udagram-image-filter/src/util/aws.ts`: This file contains the code for interacting with AWS S3 service.
- `/udagram-image-filter/src/util/config.ts`: This file contains the configuration settings for the Image Filtering Service, including the AWS access keys and the S3 bucket name.

## AWS Services Used

- Amazon Elastic Beanstalk: used for deploying and managing the application
- Amazon RDS: used for storing application data
- Amazon S3: used for storing and retrieving images

For more information about each AWS service and how it is used in the application, please refer to the [AWS Services file](/documents/AWS%20services.md).

## Continuous Integration and Continuous Deployment (CI/CD) tools

- The project uses CI/CD tools to automate the build, test, and deployment process. CircleCI is used for continuous integration and continuous deployment.

- For more information about this and how it is used in the application, please refer to the [Pipeline process](/documents/Pipeline%20process.md).

## App Dependencies

- The application has several dependencies that need to be installed to run the application. These dependencies are defined in the package.json file in the root directory of the project and in each folder inside udagram directory.

- For more information about app dependencies and how it is used in the application, please refer to the [App Dependencies](/documents/App%20Dependencies.md).
