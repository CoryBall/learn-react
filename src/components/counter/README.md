# useState Hook

- Use state is used to manage local state
- useState accepts type parameters when using TypeScript
- Not recommended to be used to global state (isAuthenticated, user, jwtToken)
- When state is changed, causes a re-render
- An alternative to useState is useRef, which is the same but for non-rendered variables. useRef does not cause re-renders

