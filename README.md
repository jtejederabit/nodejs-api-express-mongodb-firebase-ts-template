# Node.js + Express.js + MongoDB + Firebase + TypeScript - Starter Template

![](node-starter-banner.png)

## Description

This repository provides a starter template for building web applications using Node.js, Express.js, MongoDB, Firebase, and TypeScript. It's designed to help developers kickstart their projects with a solid foundation and essential configurations already in place.

## Features

-   Integrated setup of Node.js, Express.js, MongoDB, and Firebase.
-   Written in TypeScript for enhanced code maintainability and type safety.
-   Auth middleware Firebase Authentication.
-   MongoDB integration for data storage and retrieval.
-   RESTful API architecture with Express.js.
-   Easy-to-follow folder structure for scalability and organization.
-   Sample routes and models to get you started quickly.

## Prerequisites

Before you begin, ensure you have the following installed:

-   Node.js (version v16.17.0 or higher)
-   npm (version 8.15.0 or higher)
-   MongoDB (version 4.0 or higher)
-   Firebase project with Authentication enabled ([Follow instructions](https://firebase.google.com/docs/auth?hl=es-419))

## Installation

1.  Clone the repository:

bashCopy code

    git clone https://github.com/jtejederabit/nodejs-api-express-mongodb-firebase-ts-template
    cd nodejs-api-express-mongodb-firebase-ts-template

2.  Install the dependencies:

`npm install`

3.  Configure Firebase:

    -   Create a Firebase project at [firebase.google.com](https://firebase.google.com/).
    -   Enable Firebase Authentication in the project settings.
    -   Obtain your Firebase project credentials (API key, project ID, etc.).
    -   Copy account-service.json in the root directory.
    -   Update the Firebase configuration in `src/app.ts` with your project credentials.
4.  Configure MongoDB:

    -   Ensure MongoDB is installed and running.
    -   Update the MongoDB connection URI in `src/utils/db.ts` with your database configuration.



## Usage
-   Start the server`npx nodemon .\src\app.ts`
-   The development server will be running at `http://localhost:3000` by default.
-   Sample routes and models are provided in the `src/routes` and `src/models` directories.
-   You can modify or extend these routes and models to suit your application's needs.
-   Use TypeScript for writing your code to leverage its benefits.

## Testing


## Contributing

Contributions are welcome!

----------

Happy coding! If you encounter any issues or have suggestions for improvements, please [create an issue](https://github.com/jtejederabit/nodejs-api-express-mongodb-firebase-ts-template/issues/new).