Client Realtime Chat for Pager

#### Developmet

You will need .env files

Install yarn globally

``` bash
$ npm install -g yarn
```

Install project dependencies

``` bash
$ yarn
```

Run it locally

``` bash
$ yarn start
```

#### Tests

Run jest tests.

``` bash
$ yarn test
```

#### Linting

Run eslint fix

``` bash
$ yarn eslint-fix 
```

#### Building

- You will need .env files

Generate build folder

``` bash
$ yarn build
```

#### Deploy

- You will need .env files and permission to deploy to this firebase app

Generate build folder + deploy to firebase

``` bash
$ yarn deploy
```

#### TO DOs:

- There are some "TO DO" keywords in between the code, fix those.
- Implement persistante of connection to the chat.
- Fix warnings from webpack about oversized bundle.js and main.css.
- Implement test for all components, and more detailed ones.
- Giphy selection with keyboard.
- Better managment of socket status.
- Implement redux, redux observable.
