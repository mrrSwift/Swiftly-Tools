# Swiftly Tools
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


Collection of frequent code and useful tools

### Increase your coding speed with this tool

This tool helps you to shorten your code And it has a repository of different data with different languages ​​and it simplifies your work

## Module for

- Express.js
- Mongoose.js
- Vue
- React
- gsap

## Authors

- [@Mr Swift](https://www.github.com/mrrswift)


## Installation

Install [swiftly-tools](https://www.npmjs.com/package/swiftly-tools) with npm

```bash
  npm i swiftly-tools
```

```js
const swiftly = require('swiftly-tools')
const str = 'Hello'
swiftly.string.isLatin(str) // true
```


    
## Usage/Examples

```js
const swiftly = require('swiftly-tools')

const str = 'Hello'
swiftly.string.isLatin(str) // true

app.use(swiftly.middleware.cors)

gsap.from(swiftly.gsap.from)

```
```js
const { gsap } = require('swiftly-tools')

gsap.from('.box',gsap.from['fadeIn'])
// or
gsap.from('.box',gsap.anime({}).x(45).delay(1).duration(2))
//or

let obj = gsap.anime({}).x(45).delay(1).duration(2)

obj.scrollTrigger = gsap.scrollTrigger({})
.trigger('.box')
.toggleActions('paly none none reverse')
.start('top top')

gsap.from('.box', obj)
```
## Improve

If you have an idea, you can inform us through GitHub issues section, and if you have the ability to upgrade the library, we will be happy to help us.


## Docs

[Here...!](https://mrrswift.github.io/Swiftly-Tools/)

