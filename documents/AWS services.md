# AWS documentation - Hosting Full-Stack Application

## 🚩 Table of Contents

- [Introduction](#introduction)
- [How AWS works](#how-aws-works)
- [Amazon RDS](#amazon-rds)
  - [Introduction](#introduction-1)
  - [setting up the database](#setting-up-the-database)
  - [Screenshots of created database](#screenshots-of-created-database)
- [Amazon Simple Storage Service(s3)](#amazon-simple-storage-services3)
  - [Introduction](#introduction-2)
  - [setting up the service](#setting-up-the-service)
  - [Screenshots of created bucket](#screenshots-of-created-bucket)
- [AWS Elastic Beanstalk](#aws-elastic-beanstalk)
  - [Introduction](#introduction-3)
  - [Getting started](#getting-started)
  - [Clean up](#clean-up)
  - [Create EC2 keypair](#create-ec2-keypair)

## Introduction

Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud, offering over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to lower costs, become more agile, and innovate faster.

AWS offers many different tools and solutions for enterprises and software developers that can be used in data centers in up to 190 countries. Groups such as government agencies, education institutions, non-profits and private organizations can use AWS services.

## How AWS works

- AWS is separated into different services; each can be configured in different ways based on the user's needs. Users can see configuration options and individual server maps for an AWS service.

- We will focus here on services we will use in our project. but if you are interested in other aws services you can take a look by browsing their great documention [AWS Documentation](https://docs.aws.amazon.com/?nc2=h_ql_doc_do).

## Amazon RDS

### Introduction

Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the cloud. It provides cost-efficient, resizeable capacity for an industry-standard relational database and manages common database administration tasks. Amazon Aurora is a fully managed relational database engine that's built for the cloud and compatible with MySQL and PostgreSQL. Amazon Aurora is part of Amazon RDS. [user guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html).

### setting up the database

We will create a PostgreSQL database using AWS RDS. This is used by the project to store user metadata, such as user credentials. You can access this database from your application running either locally or on the cloud. Here are the steps to follow:

- Navigate to the RDS dashboard and create a PostgreSQL database with the following configuration, and leave the remaining fields as default.

| Field                                                                                                                     | Value                                                                          |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Database creation method                                                                                                  | Standard create. <br>Easy create option creates a private database by default. |
| Engine option                                                                                                             | PostgreSQL 12 or 13                                                            |
| Templates                                                                                                                 | Free tier                                                                      |
| Database name                                                                                                             | postgres                                                                       |
| **Connectivity**<br>- VPC and subnet<br>- Public access<br>- VPC security group<br>- Availability Zone<br>- Database port | <br>- Default<br>- YES<br>- Default<br>- No preferencce<br>- 5432              |
| **Additional configuration**<br>- Initial database name                                                                   | <br>- postgres                                                                 |

- Once the database is created successfully, copy and save the [database endpoint](udagram-fullstack-udacity.c1tkjyi5aofl.us-east-1.rds.amazonaws.com), master username, and password to your local machine. It will help your application discover the database.

- Edit the security group's inbound rule to allow incoming connections from anywhere `(0.0.0.0/0)`. It will allow your local application to connect to the database.

- Test the connection from your local PostgreSQL client.

```shell
# Assuming the endpoint is: udagram-fullstack-udacity.c1tkjyi5aofl.us-east-1.rds.amazonaws.com

psql -h udagram-fullstack-udacity.c1tkjyi5aofl.us-east-1.rds.amazonaws.com -U [username] postgres

# It will open the "postgres=>" prompt if the connection is successful

# Provide the database password when prompted
```

### Screenshots of created database

![RDS database](/screenshots/DB.jpg 'postgresql database')
![RDS database](/screenshots/DB-01.jpg 'postgresql database')

---

## Amazon Simple Storage Service(s3)

### Introduction

- Amazon Simple Storage Service (Amazon S3) is storage for the internet. You can use Amazon S3 to store and retrieve any amount of data at any time, from anywhere on the web. [user guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html).

- the created bucket will host the frontend app.

### setting up the service

- The project uses an AWS S3 bucket to host the frontend files. Navigate to the S3 service and use these values:

| Field                   | Value                                   |
| ----------------------- | --------------------------------------- |
| Bucket name             | udagram-802641492148-bucket             |
| AWS Region              | us-east-1                               |
| Object Ownership        | ACLs enabled <br>Bucket owner preferred |
| Block all public access | No <br>Create a **public** S3 bucket    |

- Leave the remaining fields as default, such as no versioning and disabled encryption.

- Once your bucket is created, go to the **Permissions** tab and add the following:

  1. Add bucket policy allowing other AWS services to access the bucket contents. You can use the policy generator tool to generate such an IAM policy.

  ```json
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "Stmt1625306057759",
        "Principal": "*",
        "Action": "s3:*",
        "Effect": "Allow",
        "Resource": "arn:aws:s3:::udagram-802641492148-bucket/*"
      }
    ]
  }
  ```

  2. Add the CORS configuration to allow the application running outside of AWS to interact with your bucket. You can use the following configuration:

```shell
[
    {
        "AllowedHeaders": [
            "*",
            "Content-Type",
            "Authorization",
            "Access-Control-Allow-Origin",
            "Access-Control-Allow-Headers",
            "Access-Control-Allow-Methods"
        ],
        "AllowedMethods": [
            "POST",
            "GET",
            "PUT",
            "DELETE",
            "HEAD"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": []
    }
]
```

3. This will create a bucket for us to hold the frontend app with its [url](http://udagram-802641492148-bucket.s3.website-us-east-1.amazonaws.com) appears in properties tab.

![S3 bucket](/screenshots/s3-0.jpg 's3 bucket link')

### Screenshots of created bucket

![S3 bucket](/screenshots/S3-overview.jpg 'postgresql database')

---

## AWS Elastic Beanstalk

### Introduction

- With AWS Elastic Beanstalk, you can quickly deploy and manage applications in the AWS Cloud without worrying about the infrastructure that runs those applications. AWS Elastic Beanstalk reduces management complexity without restricting choice or control. You simply upload your application, and AWS Elastic Beanstalk automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring.. [user guide](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html).

- the created bucket will host the frontend app.

### Getting started

- Here we are dealing with the backend app.

- There are two ways to create an Elastic Beanstalk environment - using the EB CLI or AWS console.

- Here, using the EB CLI here arw the steps to create an environment.

- > Before running these commands, it is recommended to [create](#create-ec2-keypair) an EC2 key pair so that you can SSH log in to the EC2 instance for debugging.

- Navigate to the Backend folder and run these commands:

```shell
# The "eb init" command will create ".elasticbeanstalk/config.yml" file in the current directory.
# Use the node.js 12 or 14 and the default region as applicable to you
eb init
eb create --single --keyname mykeypair --instance-types t2.medium
```

- the `eb init` command is used to initialize a new Elastic Beanstalk application.

  - When you run eb init the EB CLI will prompt you to name the app, then the EB CLI will prompt you to select the region and platform that you want to use for your Elastic Beanstalk environment. It will also create a new application in the Elastic Beanstalk console with the specified name.

  - Additionally, the eb init command creates a hidden .elasticbeanstalk directory in your project folder that contains configuration files for your Elastic Beanstalk environment. These files include the config.yml file, which contains settings for your environment, and the credentials file, which stores your AWS credentials.

  - Once you've initialized your Elastic Beanstalk application using eb init, you can use other EB CLI commands like `eb create`, `eb deploy`, and `eb terminate` to manage your environment.

- the `eb create` command will create a new Elastic Beanstalk environment for your application and creates:

  - an EC2 instance.
  - an S3 bucket to store your source code.
  - logs, and other artifacts, and other AWS resources.

- This command creates a new Elastic Beanstalk environment with the following options:

  - `--single`: This option creates a single-instance environment rather than a load-balanced environment. In a single-instance environment, there is only one instance running your application, which can be useful for smaller applications that don't require high availability.

  - `--keyname mykeypair`: This option specifies the name of an existing EC2 key pair to use for SSH access to the instances in the environment. If you don't specify a key pair, Elastic Beanstalk will create a new one for you.

  - `--instance-types t2.medium`: This option specifies the type of EC2 instance to use for the environment. In this case, the t2.medium instance type is used, which provides more CPU and memory resources than the t2.micro instance type used by default.

- When you run the eb create command to create an Elastic Beanstalk environment, you will be prompted to provide various inputs. Some of the common inputs that you may be asked to provide include:

  - Environment name: You will need to specify a name for the environment that you are creating. This should be a unique name that identifies your environment. (here in my project: udagram-api-dev2222)

  - DNS CNAME prefix: You will be asked to provide a CNAME prefix for your environment. This is a subdomain that will be used to access your application.

  - Load balancer type: You will be asked to choose between a classic load balancer and an application load balancer. (here is single)

  - EC2 instance type: You will be asked to choose the type of EC2 instance that you want to use for your environment. (here is t2.medium)

  - Key pair: You will be asked to choose an existing EC2 key pair that you want to use to SSH into the instances. (here our [created keypair](#create-ec2-keypair)).

  - SSH access: You will be asked if you want to enable SSH access to the instances in your environment.

  - Environment type: You will be asked to choose between a Web server environment and a Worker environment.

- Once you application is deployed to the Elastic Beanstalk, it will automatically run these comamnds on your behalf:

```shell
npm install
npm start
```

![EB environment](/screenshots/EB.jpg)

- ### Save the Environment Variables in the Elastic Beanstalk

Specify the environment variables in the Elastic Beanstalk environment >> Configuration >> Software settings >> Environment Properties section. Beanstalk will pass these variables to the EC2 instace.

![EB environment variables](/screenshots/eb%20environment%20variables.jpeg)

- After creating the app and the environment and set the variables as mentioned above, you will have access to the url of your application which here will be [link](http://udagram-api-dev2222.us-east-1.elasticbeanstalk.com).

![EB url](/screenshots/EB-environment.jpg)

### Clean up

Don't forget to delete your environment(s) if they are not in use: `eb terminate`.

### Create EC2 keypair

You can create an EC2 key pair using the AWS Management Console or the AWS CLI. Here's how to create a key pair using the console:

- Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.
- In the navigation pane, choose "Key Pairs".
- Choose "Create Key Pair".
- Enter a name for your key pair in the "Key pair name" field.
- Choose "Create Key Pair".

The private key file will be downloaded to your local computer. Be sure to store it in a secure location, as you'll need it to connect to your EC2 instances via SSH. Note that once the private key is downloaded, it cannot be retrieved again from the console. If you lose the private key file, you'll need to create a new key pair.
