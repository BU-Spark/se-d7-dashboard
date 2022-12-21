# D7 Dashboard
![add_collaborators](https://github.com/BU-Spark/se-d7-dashboard/actions/workflows/add_collaborators.yml/badge.svg)
![firebase-hosting-pull-request](https://github.com/BU-Spark/se-d7-dashboard/actions/workflows/firebase-hosting-pull-request.yml/badge.svg)
![release_archive](https://github.com/BU-Spark/se-d7-dashboard/actions/workflows/release_archive.yml/badge.svg)
## Introduction
The D7 Dashboard is a web app that provides Boston's district 7 residents with easier access to city services and a more straightforward way to contact their councilperson. Located in the heart of Boston, district 7 is home to a diverse community of residents who deserve the best resources and support from their government.

Our team is dedicated to improving the lives of district 7 residents by creating a user-friendly platform that makes it easy to find and access the services they need. We also want to help better brand and promote district 7, highlighting all the great things happening in the community.

## Tech Stack
- Firebase: We chose to use Firebase as our database and backend service provider because of its simplicity and ease of use. It allows us to store and retrieve data in real-time, as well as handle user authentication and other backend tasks.
- React: We are using the React JavaScript library to build the frontend of the D7 Dashboard. React allows us to create reusable UI components and efficiently update the user interface as data changes.
- PatternFly: As our UI/UX kit, we are using PatternFly to ensure a consistent and professional design throughout the app.

## Getting Started
To get started with the D7 Dashboard, you'll need to have [node.js](https://nodejs.org/) and the [Firebase CLI](https://firebase.google.com/docs/cli) installed on your machine. Once you've cloned this repository to your local machine, navigate to the project directory and run `npm install` to install all necessary dependencies. 

To start the app in development mode, run `npm start`. This will launch the app in your default browser, where you can begin using it.

## Deployment
To deploy the D7 Dashboard, you'll need to do the following:

1. Build the production version of the app by running `npm run build`. This will create a production-ready build of the app in the `build` directory.
2. Use the Firebase CLI to deploy the build to your Firebase hosting by running `firebase deploy`.

This will deploy the D7 Dashboard to your specified Firebase hosting URL, making it accessible to users.

## Features
- City Services: The D7 Dashboard provides a comprehensive list of city services that are available to district 7 residents. This includes everything from trash pickup and street cleaning to public transportation and healthcare resources.
- Community Events: Stay up-to-date with what's happening in your community by checking out the events calendar. You'll find information on meetings, workshops, and other activities happening in district 7.

## Known Bugs and Limitations
There are a few known bugs and limitations with the D7 Dashboard that we are currently working to resolve. These include:

- The PatternFly CSS is behaving strangely, and our client has requested a new color scheme. We recommend finding a better way to change colors in the future.
- There are some cases where reads and writes to Firebase are called in a loop, which can cause issues. We are working to resolve these issues.
- Currently, the Firebase database is set to open to assist with testing and development. However, before going into production, we will need to close it off to ensure security.

## Adding Users
If you'd like to contribute to the D7 Dashboard, we welcome your help! To add yourself as a collaborator, simply open a Pull Request and modify the `COLLABORATORS` file by adding your GitHub username on a new line.

Please be sure to follow the Pull Request template, and include a descriptive title in the following format: `[Project Name]: <Descriptive Title>`.
