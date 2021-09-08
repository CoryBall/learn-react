# React Router and Typescript with parameters

- While React hooks are the most common hooks to see in source code, it is possible to create your own and to see custom hooks in libraries.

After adding the pages to our Router in `src/App.tsx`, the workflow is to route to `/characters` to show a list of characters. A user can click on a character to route to `/character/:id` for more details

To make components more reusable, do not APIs from within components, Call them at the page level and pass the data retrieved through props to the components. Use components only to display data. For things like submitting forms, create a `onSubmit` prop, create the API function wrapper in the page level, and pass the function down the form component.

This project is using axios, one of the most popular Http Client libraries with a passible type parameter to define the structure for the data. The types used here are from `/src/types` (there is a README there for explanation).

See the `src/components/rickAndMorty` for the component definitions.