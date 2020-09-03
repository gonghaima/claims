# Features

- React hook/effect/context api (store, reducer, etc)
- Mobile First/ Responsive/ Material Style
- Use Debounce
- CSS module
- Unit test
- Coverage
- E2E test
- Dark Mode
- Pre commit check

## Installation

```sh
$ yarn
```

### Run

```sh
$ yarn start
navigate to http://localhost:3000/
```

### Test

```sh
$ yarn test
```

### Coverage

```sh
$ yarn test-coverage
```

### E2E

```sh
$ yarn start
```
navigate to http://localhost:3000/ , confirm the site is running
```sh
yarn run cypress:run
```

**Inspect E2E**:

```sh
$ yarn cypress:open
```

### Installation instructions

**Node.js v12.x**:

```sh
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt-get install -y nodejs
```


**Node.js v11.x**:

```sh
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -sL https://deb.nodesource.com/setup_11.x | bash -
apt-get install -y nodejs
```

### Decisions

- moment - friendly api for date time utils
- node-sass - required by css modules
- lodash - reliable utils for data manipulation
- react-spring - smooth dom transition
- gh-pages - deployment on github pages

### Compromises

- styled component library may be better than css modules
- more user feedback & UI/UX enhancement
