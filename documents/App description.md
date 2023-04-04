# Udagram - an Image Filtering application:

## Infrastructure Description:

- Udagram is a web application that allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering service. The application is hosted on Amazon Web Services (AWS) and uses several AWS services to provide its functionality.

- The web client is built using React and is hosted on an S3 bucket. The bucket is configured as a static website, and the content is distributed globally using Amazon CloudFront. This configuration ensures that users can access the application from anywhere in the world with low latency.

- The backend of the application is built using Node.js and is hosted on Elastic Beanstalk. Elastic Beanstalk is a fully managed service that makes it easy to deploy, run, and scale applications. It automatically provisions resources such as EC2 instances, load balancers, and autoscaling groups based on the application's needs. The Node.js application is connected to a PostgreSQL database hosted on Amazon RDS. Amazon RDS is a managed relational database service that provides high availability and scalability.

- The photo feed is powered by an S3 bucket where users can upload their photos. The photos are then processed using an image filtering service built with Node.js and hosted on a separate Elastic Beanstalk environment. The filtered photos are stored in a separate S3 bucket for fast and efficient delivery to users.

- The entire infrastructure is secured using AWS Identity and Access Management (IAM) with Role-Based Access Control (RBAC) to ensure that only authorized users can access the resources.

- Continuous integration and deployment are achieved using CircleCI. CircleCI is a cloud-based platform that automates the build, test, and deployment processes. Whenever new code is pushed to the GitHub repository, CircleCI automatically builds the application, runs the tests, and deploys the changes to the Elastic Beanstalk environment.

- This infrastructure description provides a detailed overview of the different components that make up the Udagram application and how they interact with each other to provide the required functionality. It can be useful for developers, system administrators, and other stakeholders who need to understand how the application operates in the underlying infrastructure
