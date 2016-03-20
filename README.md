![reactstrap](https://cloud.githubusercontent.com/assets/399776/13906899/1de62f0c-ee9f-11e5-95c0-c515fee8e918.png)

[![Build Status](https://travis-ci.org/reactstrap/reactstrap.svg?branch=master)](https://travis-ci.org/reactstrap/reactstrap) [![Coverage Status](https://coveralls.io/repos/github/reactstrap/reactstrap/badge.svg?branch=master)](https://coveralls.io/github/reactstrap/reactstrap?branch=master)

# reactstrap

React Bootstrap 4 components compatible with React 0.14.x and 15.x.

#### Project Goals

- Provide a simple interface for integrating bootstrap components
- When appropriate, extend/reuse standard DOM attributes like `disabled`, `type`, `title`
- Don't require dependency on jQuery or Bootstrap's JavaScript

## Installation

Add `reactstrap` as a dependency via npm:

```sh
npm install reactstrap --save
```

Import the components you need, example:

```js
import { Button } from 'lib/index';
```

## [Demo](http://output.jsbin.com/dimive/latest)

## Documentation

Until a documentation site exists, checkout the example sections for usage: https://github.com/reactstrap/reactstrap/tree/master/example/js

This library contains the following components:

 - Button
 - ButtonDropdown
 - ButtonGroup
 - ButtonToolbar
 - Dropdown
 - DropdownItem
 - DropdownMenu
 - DropdownToggle
 - Label
 - Popover
 - PopoverContent
 - PopoverTitle
 - Modal
 - ModalHeader
 - ModalBody
 - ModalFooter
 - Tooltip

## Development

Install dependencies:

```sh
npm install
```

Run examples at [http://localhost:8080/](http://localhost:8080/) with webpack dev server:

```sh
npm start
```

Run tests & coverage report:

```sh
npm test
```

Watch tests:

```sh
npm run test-watch
```
