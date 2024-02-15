module.exports.utils = {
  /**
   * 
   * @param {Number} msTime 
   * @description Create wait to your code
   * @async 
   */
  sleep(msTime = 1000) {
    new Promise(_ => setTimeout(_, msTime))
  },
  log(string) {
    console.log(string)
  },
  /**
   * 
   * @param {Number} c 
   * @returns Fahrenheit degree
   */
  celsiusToFahrenheit(c) {
    return c * 9 / 5 + 32;
  },
  /**
   * 
   * @param {Number} f 
   * @returns Celsius degree
   */
  fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
  },
  /**
   * 
   * @param {Object} obj 
   * @param {Object} defaults 
   * @returns Merged object
   */
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
  /**
   * 
   * @param {*} input 
   */
  currency(input) {
    if (typeof input === 'string') {
      return {
        /**
         * 
         * @param {String} separator 
         * @returns String of number separated by input
         */
        format(separator = ",") {
          return input.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        },
        /**
         * 
         * @param {String} symb 
         * @param {Boolean} format 
         * @returns String with prefix
         */
        prefix(symb, format = false) {
          if (format) {
            return symb + input.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          } else {
            return symb + input
          }
        },
        /**
         * 
         * @param {String} symb 
         * @param {Boolean} format 
         * @returns String with postfix
         */
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
        /**
         * 
         * @param {String} separator 
         * @returns String of number separated by input
         */
        format(separator = ",") {
          return number.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        },
        /**
         * 
         * @param {String} symb 
         * @param {Boolean} format 
         * @returns String with prefix
         */
        prefix(symb, format = false) {
          if (format) {
            return symb + number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          } else {
            return symb + number
          }
        },
        /**
        * 
        * @param {String} symb 
        * @param {Boolean} format 
        * @returns String with postfix
        */
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