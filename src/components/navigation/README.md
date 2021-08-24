# Navigation using React Router

### React does not come with page routing built-in, but the react-router-dom npm package is the de-facto routing solution for React apps

It is very simple to implement routing using React Router, just import the Router, declare routes and link the routes to components used as pages, then just use an `<a></a>` or the included `<Link />` that comes bundled with React Router

Typically the routing is placed in the root component, in this case `src/App.tsx`

Notice how I still directly include `<Header />`, which is our top nav bar for our app. 