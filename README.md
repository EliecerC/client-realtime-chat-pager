Client Realtime Chat for Pager

#### Developmet

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

Generate build folder

``` bash
$ yarn build
```

#### Deploy

Generate build folder + deploy to firebase

``` bash
$ yarn deploy
```

#### TO DOs:

- There are some "TO DO" keywords in between the code, fix those.
- Implement persistante of connection to the chat.
- Fix warnings from webpack about oversized bundle.js and main.css.
- Giphy selection with keyboard.
- Better managment of socket status.
- Implement redux, redux observable.