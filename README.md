# arvan-front-end-challenge

This is the frontend interview challenge at Arvan Cloud.

## What Should You Implement?

For this challenge, you must implement the user interface of the management dashboard of a blog.

- The design files and user interface implementation details can be found here: [Design Files](https://app.zeplin.io/project/5fd4b72c87eefa875c37b22b/dashboard).
- Your project must be able to connect to any API implemented based on this documentation: [API Documentation](https://github.com/gothinkster/realworld/tree/main/api).
- You can use this link for the backend project: [Backend](https://api.realworld.io/api).

- [ ] Design x4 components. We used Bootstrap, but you can use kit UIs for fast development or use Bootstrap framework-style files.
- [ ] The mobile designs have not been completed, and it is your responsibility to convert the desktop version design into a suitable mobile and tablet version.
- [ ] It is better to use the Vue framework for implementation.
- [ ] Put the output of your project on Github or Gitlab.

## What Do We Check?

- File structures.
- How you divided the project into smaller components (Breakdown Components).
- How you used Git (e.g., commits, Git flow).
- What tools do you use to produce cleaner code (e.g., Prettier, Eslint for code checking)?
- How much you programmed based on best practices and implementation patterns.
- ...

## How Work with this Project?

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
pnpm install
```

#### Compile and Hot-Reload for Development

```sh
pnpm dev
```

#### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

#### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

#### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
