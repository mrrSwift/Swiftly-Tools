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