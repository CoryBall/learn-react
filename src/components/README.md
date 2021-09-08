# Importing and Exporting

### First things first, there are potentially 4 main file types in a React.js project. 

<br /> 

 - file.js is a basic JavaScript file. It cannot contain components or web contents, its mostly used to export existing components, mock data, business logic, configuration, or helper functions.
 - `.jsx` is a special file extension that allows html inside of javascript. Most of the React-specific code will be in these
 - file.ts and file.tsx are the same as .js and .tsx respectively, they just use TypeScript instead of JavaScript.
 - TypeScript is a superset of JavaScript made by Microsoft that contains typing. Making Front-End code with a strongly-typed language makes developing in teams much more efficient and clear. Plugins for Visual Studio Code give very useful hints and errors that may not be possible to detect if using JavaScript. This makes for much more efficient bug-fixing and better readability at a slight cost to development time.

## There are typically two ways both to import and export

 - In `src/components/hello.tsx`, we declare a React component. Notice the way we import the dependencies.
    - Usually, the default import (import React from 'react') will grab the essential component or function from the library.
    - Named imports (import {useState} from 'react') will import things like types or utility modules if the library or file is exporting multiple things.

 - As an example, we export the component as default, but export the prop type as a named export.

 - For file management, it is useful to combing exports inside of an index.ts file at the base of the folder. That way when we import our component to use in `src/App.tsx`, we don't need to specify which component file, we just import from `./components`

 - In `src/components/hello.tsx`, I used both types of exporting to show examples. Typically everything in the file but the component would be a Named Export. Then notice `src/components/index.ts` importing components and types in a way that everything is accessible from the base `/components` folder when importing from `src/App.tsx`

<br />

# Functional vs Class Components
### Both Functional and Class components serve the same purpose and there are no advantages of using one over the other

<br />

React.js originally used only class-based components, but as javascript generally grew more function-oriented, they created functional components.

- Class components included methods for events such as `componentDidMount` and `componentWillUnmount`.
- Functional Components released with something called hooks, which are special functions that can only be called from within components and serve the same purpose as many different Class Component methods such as `componentDidMount`.

React now recommends just using function-based components and their documentation is undergoing a large rewrite to include function components throughout, but knowing class-based components is useful for dealing with legacy code, reading documentation, or transcribing stack overflow answers ;D

<br />

# Styling

 ## There are Many different ways to style components in React. In this repo I'm using [TailwindCSS](https://tailwindcss.com/), but you can use traditional .css files, inline css, a styles object, SASS, LESS, or pretty much any other way. I'll mostly use inline with Tailwind, but I will include examples using a very popular library called `styled-components`

 - Notice in `src/components/hello.tsx` I am using inline styling with Tailwind for the Functional Component, and styled-components with the Class Component
