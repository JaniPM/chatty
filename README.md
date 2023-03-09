# Chatty

## Getting started

- `npm run build` builds everything into `./dist` folder
- `npm run dev` starts server in dev and watch mode => restarts on code changes
- `npm run test` runs all tests

## Setup notes

### Build - tsconfig.json

- CommonJS is used for module-option => Jest and some other libs don't play yet well together with ES2020/ESNext.
- Build excludes spec files `"./src/**/*.spec.ts"`. Otherwise, jest would run tests twice, once for ts files and once for transpiled js files. Besides we don't want test files included to `./dist`

### Dev

Nodemon is used together with ts-node. See `nodemon.json` configuration relating to exec command and which files to include and ignore.

### Test

- ts-jest is used with jest in order to support TypeScript. ts-jest is added as a preset in jest.config.js
- Api/integration testing uses supertest: https://github.com/ladjs/supertest.
