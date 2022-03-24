# <project-name>

> <project-description>



## Install

```sh
npm i <project-name>
```



## Usage

```ts
import { projectNamedExport } from "<project-name>";   // use the named export...
import projectExport from "<project-name>";            // or, the default and name it whatever you want

// ...
```



## API

### projectExport({ projectParam, options? })
#### projectParam

Type: `string` (required)

#### options

Type: `object` (optional)

Available options:

```ts
// ...
```



## Tests

```sh
# Run all tests, sequentially
npm test

# Test dependencies for latest versions
npm run test:dependencies

# Lint "src" directory
npm run test:lint

# Test this module
npm run test:lint-assert
```
