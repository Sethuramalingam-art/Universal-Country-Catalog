# Universal-Country-Catalog

Countries list custom npm package

rollup - module bundler

username/ password for https://www.npmjs.com/ (used for library deployed to npm)
sethuram.duraisamy
sethuram.duraisamy140891@gmail.com
2\*\*4@G@#$@#ny

after creating react hook /comp start to test in npm pack locally before deployed in registry

cmd:
npm pack

once this cmd executed it will generate .tgz file(check in folder) for npm package

for local check:

for local check include this file in another react source package json with
"Universal-Country-Catalog":"file: xxx.tgz"

after all done got to terminal

npm login

login with

sethuram.duraisamy
sethuram.duraisamy140891@gmail.com
2\*\*4@G@#$@#ny

npm publish

our library is published to npm

=========================================================================================================

# universal-country-catalog

A ReactJS hook to get the country information.

## How to use it?

You can use the project in this way:

### Install

```bash
# with npm
npm install universal-country-catalog
# with yarn
yarn universal-country-catalog
```

### Usage

- Import the package in your app:

```js
import { useCountry } from "universal-country-catalog";
```

- Get the country information from the hook:

```js
const {loading, error, country} = useCountry('Republic Of India')'
```
