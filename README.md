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
2. Log into the Firebase CLI via `npx firebase login`. Provide login details.
3. Use the Firebase CLI to deploy the build to your Firebase hosting by running `npx firebase deploy`.
4. Deployed web app will be linked to https://se-d7-dashboard.web.app/

This will deploy the D7 Dashboard, making it accessible to users.

## Features
- Account Creation: Create an account to access services! You can also sign up for SMS & email updates from the councilperson.
- City Services: The D7 Dashboard provides a comprehensive list of city services that are available to district 7 residents. This includes everything from 311 requests, police accountability reports, senior volunteering opportunities, healthcare access, and everything in between. More resources can be quickly and easily added by modifying the `links.json` file. The resources displayed are dynamically rendered, so any changes to that file directly update the frontend's UI/UX. 
- Community Events: Stay up-to-date with what's happening in your community by checking out the events calendar. You'll find information on meetings, workshops, and other activities happening in district 7.
- Announcements: Stay up-to-date with updates from the your city councilperson!

## Known Bugs and Limitations
There are no known bugs, but there are some limitations with the current implementation of the D7 Dashboard. These include:
- There is no means with which to add announcements or calendar events, as a clear implementation plan was not detailed in the scope of the project requirements for the semester. This feature can be added easily in the future (either with a Google Calendar integration or with a custom submission page). The home screen currently parses JSON to render events.
- The registration page should save tokens so that users do not need to login again upon registration.
- Currently, the Firebase database is set to open to assist with testing and development. However, before going into production, we will need to close it off to ensure security.

## Adding Users
If you'd like to contribute to the D7 Dashboard, we welcome your help! To add yourself as a collaborator, simply open a Pull Request and modify the `COLLABORATORS` file by adding your GitHub username on a new line.

Please be sure to follow the Pull Request template, and include a descriptive title in the following format: `[Project Name]: <Descriptive Title>`.
