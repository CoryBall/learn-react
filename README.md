# React Tutorial

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<br/>

## Skip to Available Scripts [Here](#available-scripts)
<br/>

### This repository servers as a tutorial for React.
It touches on multiple things, and each "lesson" is it's own branch. Look for code comments and the README for information between branches.

### This first branch goes over the initial project setup and the basics of how React.js works

1. React requires that you have [Node.js](https://nodejs.org/en/) and a package manager installed. For this tutorial I'll use NPM as it comes bundled with Node. Here is my evironment:
 ```
    node --version
    v16.5.0
    npm --version
    7.20.1
 ```

2. There is not much work to do in this branch, just clone it and begin.

3. Take a look at public/index.html
   - Notice its bare, just a div with id="root"

4. Now look at src/index.tsx
   - This is where it grabs the entrypoint of our React application, App, and mounts it to that root div in public/index.html

5. Run `npm run build`
   - Now the project has generated a production-ready folder, dist/ for your app. It copies your public/ folder, and bundles all the code in src/ into a few .js files known as chunks. Now your code is minified for the smallest weight when delivering over a CDN or serving statically 

<br/>
<br/>
<br/>
<br/>

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
