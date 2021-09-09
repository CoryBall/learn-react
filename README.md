# React Tutorial

## This branch addresses scalability concerts

<br />

### Bloating / Page Load Speed
- There are many tools available to reduce bloat and increase page load speed, for example loading a chunk for a feature only when the user interacts with the feature, not on initial page load
- Many frameworks and tools like [CRA](https://reactjs.org/docs/code-splitting.html) and [Next.js](https://nextjs.org/docs/advanced-features/dynamic-import) have built-in solutions
- More generic solutions can be [Webpack](https://webpack.js.org/guides/code-splitting/) or [react-loadable](https://www.npmjs.com/package/react-loadable)

### GUI for package management
- I personally have never used any of these, but here are some I found in order of popularity:
  - [Luna](https://github.com/rvpanoz/luna)
    - ~100 stars on GitHub
    - Not-so-active development (last commit 10 months ago)
    - 8 Issues (As of Sept 8, 2021)
  - [npm-gui](https://github.com/q-nick/npm-gui)
    - ~500 stars on Github
    - Active development (commit 4 months ago)
    - 11 Issues (As of Sept 8, 2021)

<br />

### Package Dependency Security
- NPM has a [built-in audit command](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities) that produces a report of dependency vulnerabilities and available suggested patches for locally installed packages
- [Mildly helpful article](https://blog.risingstack.com/controlling-node-js-security-risk-npm-dependencies/) showing topics for thought on npm security