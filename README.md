# D7 Dashboard

# Description
This repository contains a native app which provides Boston's district 7 residents easier access to city services and a simpler means to contact their councilperson.

This project will be built using a serverless architecture to minimize cost.

## Tech stack
- Firebase
- React Native

## Get started
Running this project requires the installation of node.js. To install dependencies, navigate to the local copy of this code and run `npm install` to install needed dependencies. To run the project, `npm start` will be enough.

## Bugs and limitations
PatternFly CSS is strange in behavior, since our client wants a new color scheme a better way to change colors is recommended.

There are some cases where reads and writes to firebase is called in a loop. These needs to be resolved.

Firebase is currently set to open, before production this needs to be closed. It is open to better assist testing and development during the time being.

## Add Users
To add yourself to the repository, open a Pull Request modifying `COLLABORATORS`, entering your GitHub username in a newline.

All Pull Requests must follow the Pull Request Template, with a title formatted like such `[Project Name]: <Descriptive Title>`
