# Chatty

# Setup notes

## Build - tsconfig.json

- CommonJS is used for module-option cause Jest and some other libs don't play yet well together with ES2020/ESNext
- Build excludes spec files `"./src/**/*.spec.ts"`. Otherwise jest would run tests twice, once for ts files and once for transpiled js files. Besides we don't want test files included to `./dist`

## Test

- ts-jest is used with jest in order to support TypeScript. ts-jest is added as a preset in jest.config.js
- Api/integration testing uses fastify's inject method instead of supertest: https://www.fastify.io/docs/latest/Guides/Testing/
