# mmcollapse

> another collapse plugin

## Getting started
### Install
Install with [npm](https://www.npmjs.com/):

```sh
$ npm install mmcollapse
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add mmcollapse
```
### Download
[Download compiled CSS and JS](https://github.com/onokumus/mmcollapse/releases/download/v0.0.1/mmcollapse-0.0.1-dist.zip)
> required files: "mmcollapse.js" and "mmcollapse.css" in dist folder.

[Download source](https://github.com/onokumus/mmcollapse/archive/master.zip)

#### Add project file to mmcollapse

```js
// import es6 module
import MMCollapse from 'mmcollapse';

// or commonjs
const MMCollapse = require('mmcollapse');

// create node
const collapsibleElement = document.querySelector('.collapsibleElement');
// create new instance
const mc = new MMCollapse(collapsibleElement);
```

## Usage

1. Include mmcollapse StyleSheet

  ```html
  <link rel="stylesheet" href="https://unpkg.com/mmcollapse/dist/mmcollapse.css">
  <!-- OR -->  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mmcollapse/dist/mmcollapse.css">
  ```

2. Include mmcollapse plugin's code

  ```html
  <script src="https://unpkg.com/mmcollapse"></script>
  <!-- OR -->
  <script src="https://cdn.jsdelivr.net/npm/mmcollapse"></script>
  ```

3. Create html

  ```html
  <div class="collapsibleElement">
...
  </div>
  ```

4. Call the plugin:

```js
// create node
const collapsibleElement = document.querySelector('.collapsibleElement');

// create new instance
const mc = new MMCollapse(collapsibleElement);
```

## API
#### show
show the collapsibleElement
```js
mc.show();
```

#### hide
hide the collapsibleElement
```js
mc.hide();
```

#### toggle
show/hide the collapsibleElement
```js
mc.toggle();
```

### Demo
[demo page](https://onokumus.com/mmcollapse)

### Author
**Osman Nuri Okumus**
+ [GitHub Profile](https://github.com/onokumus)
+ [Twitter Profile](https://twitter.com/onokumus)
+ [LinkedIn Profile](https://linkedin.com/in/onokumus)

### License
Copyright © 2020, [Osman Nuri Okumus](https://onokumus.com/).
Released under the [MIT License](LICENSE).
