# template-next

A sane, opinionated template for esm nextjs projects written in typescript.

Uses:

- [biome](https://github.com/biomejs/biome) for linting and formatting
- [vitest](https://github.com/vitest-dev/vitest) for tests
- [commitlint](https://github.com/conventional-changelog/commitlint) for linting commit messages
- [husky](https://github.com/typicode/husky) for git hooks

## why use this instead of nextjs-cli?

- esm
- commitlint, biome, husky, vitest setup

Aside from that, does what the cli does.

## running

### `npm run dev`

Runs the project in watch mode.

### `npm run build`

Builds/transpiles the code to `./build`.

### `npm start`

Runs the production simulation of the project.

### `npm test`

Runs tests with vitest.

### `npm run biome-fix`

Runs biome in fix mode (only [safe fixes](https://biomejs.dev/linter/#safe-fixes)) to lint and format the project.

### `npm run typecheck`

Runs type checking using tsc.

## that tsconfig.json seems very strict and opinionated

Yup.

## vscode

You might want to install the recommended extensions in vscode. Search for **@recommended** in the extensions tab, they'll show up as _"workspace recommendations"_.

If you have been using eslint and prettier and their extensions, you might want to disable eslint entirely and keep prettier as the formatter only for certain types of files.

This is done by the `.vscode/settings.json` file.

A debug configuration for Firefox is also included.
