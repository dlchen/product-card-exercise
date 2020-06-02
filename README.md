This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Product Cards App

## Overview

Current functionality is limited. The app displays products tiles served from the server. A user can click on the heart icon on the top-right to add a product to their favorites. The list of favorites is persisted on the server.

## Limitations aka Things To Do

On the backend side, product data is all mocked via json. The data store for favorites is just a javascript array. There is no concept of separate users, nor any authentication. Request parameters are not validated, there is no error handling, and no logging. Documentation is needed for each of the REST APIs. Testing needs to be improved. Nodemon could be added for hot reload.

On the frontend side, a user should also be able to remove a product from their favorites. If the app continues to grow, we should consider finding a state management solution and a CSS framework. Tests need to be added. May need to organize the folder structure as we build out more components.

Tests and code coverage should be run on all Pull Requests.

Tasks for all above tasks should be created.

## Getting Started

First start the server, then start the client. See instructions below.

## Start Server

We added a separate express API to serve products to the client app.  To run that prior to kicking
off the webpack dev server running the react app:

```sh
# Run on a later version of node
# Runs on PORT 9001 by default, but can set the PORT env variable to run on a different port
$ npm run start-api

# Run tests
$ npm run test-api
```

## Start Client

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Other Available Scripts

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
