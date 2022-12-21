# D7 Dashboard

## Introduction
Welcome to the D7 Dashboard! This repository contains a native app that provides Boston's district 7 residents with easier access to city services and a more straightforward way to contact their councilperson. 

Our goal is to make it as simple as possible for residents to get the help they need and stay connected with their community. That's why we've built this app using a serverless architecture, which minimizes cost and makes it easy to scale.

## Tech Stack
- Firebase: We chose to use Firebase as our database and backend service provider because of its simplicity and ease of use. It allows us to store and retrieve data in real-time, as well as handle user authentication and other backend tasks.
- React Native: For the frontend, we decided to use React Native, a JavaScript framework for building native mobile apps. It allows us to write code that is easily reusable across both iOS and Android platforms, saving us time and resources.

## Getting Started
To get started with the D7 Dashboard, you'll need to have [node.js](https://nodejs.org/) installed on your machine. Once you've cloned this repository to your local machine, navigate to the project directory and run `npm install` to install all necessary dependencies. 

To start the app, simply run `npm start`. This will launch the app in your default browser, where you can begin using it.

## Features
- City Services: The D7 Dashboard provides a comprehensive list of city services that are available to district 7 residents. This includes everything from trash pickup and street cleaning to public transportation and healthcare resources.
- Contact Councilperson: Need to get in touch with your councilperson? The D7 Dashboard makes it easy to find their contact information and send them a message directly through the app.
- Community Events: Stay up-to-date with what's happening in your community by checking out the events calendar. You'll find information on meetings, workshops, and other activities happening in district 7.

## Known Bugs and Limitations
There are a few known bugs and limitations with the D7 Dashboard that we are currently working to resolve. These include:

- The PatternFly CSS is behaving strangely, and our client has requested a new color scheme. We recommend finding a better way to change colors in the future.
- There are some cases where reads and writes to Firebase are called in a loop, which can cause issues. We are working to resolve these issues.
- Currently, the Firebase database is set to open to assist with testing and development. However, before going into production, we will need to close it off to ensure security.

## Adding Users
If you'd like to contribute to the D7 Dashboard, we welcome your help! To add yourself as a collaborator, simply open a Pull Request and modify the `COLLABORATORS` file by adding your GitHub username on a new line.

Please be sure to follow the Pull Request template, and include a descriptive title in the following format: `[Project Name]: <Descriptive Title>`.
