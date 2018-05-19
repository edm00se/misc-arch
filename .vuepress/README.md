# Vuepress Canvas

A forked, custom version of [vuepress-canvas][vuepress-canvas].

## Installation

1. dependencies
2. customize `config.js`
3. run

### 1. Dependencies

Your `package.json`, one level up (in your docs root) from `.vuepress`, should have the following dependencies:

```js
"dependencies": {
  "bootstrap": "^3.0.0",
  "font-awesome": "^4.7.0",
  "moment": "^2.22.1",
  "source-code-pro": "^2.30.1",
  "source-sans-pro": "^2.20.2"
},
"devDependencies": {
  "vuepress": "^0.8.4",
  "less": "^3.0.2",
  "less-loader": "^4.1.0"
}
```

Then install, with either `npm install` or `yarn`.

### 2. Customize `config.js`

Update the `config.js` file with your information.

### 3. Execute

From the docs root dir, set your npm scripts to look something like this, and run accordingly.

```js
"scripts": {
  "dev": "vuepress dev .",
  "build": "vuepress build .",
  ...
```

## License

[MIT](https://github.com/vuejs/vuepress/blob/master/LICENSE)

[vuepress-canvas]: https://github.com/whoan/vuepress-canvas
[vuepress]: https://github.com/vuejs/vuepress
[canvas]: https://github.com/cnvs/canvas
[vuepress-doc]: https://vuepress.vuejs.org/guide/getting-started.html
