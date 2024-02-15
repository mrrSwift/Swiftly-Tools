module.exports.utils = {
  sleep(msTime = 1000) {
    new Promise(_ => setTimeout(_, msTime))
  },
  log(string) {
    console.log(string)
  },
  celsiusToFahrenheit(c) {
    return c * 9 / 5 + 32;
  },
  fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
  },
  merge(obj = {}, defaults) {
    for (const key in defaults) {
      if (typeof obj[key] === 'undefined') {
        obj[key] = defaults[key];
      }
    }
    return obj;
  },
  assertString(input) {
    const isString = typeof input === 'string' || input instanceof String;

    if (!isString) {
      let invalidType = typeof input;
      if (input === null) invalidType = 'null';
      else if (invalidType === 'object') invalidType = input.constructor.name;

      throw new TypeError(`Expected a string but received a ${invalidType}`);
    }
  },
  currency(input) {
    if (typeof input === 'string') {
      return {
        format(separator = ",") {
          return input.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        },
        prefix(symb, format = false) {
          if (format) {
            return symb + input.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          } else {
            return symb + input
          }
        },
        postfix(symb, format = false) {
          if (format) {
            return input.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + symb
          } else {
            return input + " " + symb
          }
        }

      };
    } else if (typeof input === 'number') {
      let number = input.toString();
      return {
        format(separator = ",") {
          return number.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        },
        prefix(symb, format = false) {
          if (format) {
            return symb + number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          } else {
            return symb + number
          }
        },
        postfix(symb, format = false) {
          if (format) {
            return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + symb
          } else {
            return number + " " + symb
          }
        }
      };
    } else {
      return null
    }
  }

}