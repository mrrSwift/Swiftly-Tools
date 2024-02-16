Collection of tools and data for speed up your coding and enhance code 

Can be used in express, vue, react, mongoose and any web app

## Modules

- color
  - colors
  - rgbToHex
  - randomHex
  - console
- bcrypt
  - hash
  - compare
- crypto
  - encrypt
  - decrypt
- expressValidation
  - map
  - keys
- middleware
  - cors
  - hsts
  - sign
- number
  - generateRandomDigitsInRangeOf
  - generateRandomDigits
- string
  - capString
  - reverseString
  - hasWhiteSpaces
  - isLatinWithDigits
  - isLatin
  - isPersianWithDigits
  - isPersian
  - removeWhiteSpaces
- validate
  - isSlug
  - isUrl
  - isStrongPassword
  - isSimplePassword
  - isDiscordUser
  - isEmail
  - isEmoji
  - isDate
  - isTime
  - isIP
  - isBase64
  - isJWT
- array
  - arrayIsEmpty
  - bubbleSort
- object
  - objectIsEmpty
- utils
  - sleep
  - log
  - celsiusToFahrenheit
  - fahrenheitToCelsius
  - merge
  - assertString
  - currency
    - format
    - prefix
    - postfix
- region
  - iran
    - checkNationalCode
    - checkMobileNumber
    - normalizeMobileNumber
    - nameOptimizer
  - need help to complete  
- countries
  - country
  - state
  - city
  - iranCities
- nav 
  - pagePagination
  - itemPagination
- rs
- sr
- badwards


## Usage/Examples

### Color
```js
const { color } = requier('swiftly-tools');

const colors = color.colors(); // return list of colors with name

color.rgbTohex(255,255,255); // return hex code 

color.randomHex(); // return random hex code

console.log(color.console("Hello ", "fgRed"),color.console("World!", "bgRed")) 
```

### bcrypt
```js
const { bcrypt } = requier('swiftly-tools');

const salt = 10
const hashed = bcrypt.hash("hello", salt) // return hashed string

const compare = bcrypt.compare("hello", hashed) // if equal return true
```

### crypto
```js
const { crypto } = requier('swiftly-tools');

const secret = "12345678" 
const algo = 'aes-256-cbc' // optional
const hashed = crypto.encrypt(secret, "hello", algo) // return hashed string

 crypto.decrypt(secret, hashed, algo) // return normal string
```

### expressValidation
```js
const ev = requier('swiftly-tools').expressValidation;
const { validationResult } = require('express-validator')

ev.map(validationResult) // return 
/**
{
    "validation": {
        "fullName": {
            "value": null,
            "msg": "نام را وارد کنید",
            "param": "fullName",
            "location": "body"
        }
    }
}
*/

ev.keys(validationResult) // return { fullName: "نام را وارد کنید" }

```

### middleware
```js
const { middleware } = requier('swiftly-tools');
const express = require("express");
const app = express();

app.use(middleware.cors()) // set cors  *
app.use(middleware.hsts()) // set Strict-Transport-Security header
app.use(middleware.sign("Swift")) // Set your name in Author header
```