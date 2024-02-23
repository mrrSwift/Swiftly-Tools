function getLogFileName() {
  const now = new Date();
  const dateString = now.toISOString().slice(0, 10); // Get date string in yyyy-mm-dd format
  return `logs_${dateString}.log`;
}

// Function to write log message with timestamp to the file
function writeToLogFile(logMessage) {
  const logFileName = getLogFileName();
  const logFilePath = path.join(__dirname, logFileName); // Assuming logs are saved in the current directory
  const timestamp = new Date().toISOString();
  // Construct log data with timestamp
  const logData = `${timestamp}: ${logMessage}\n`;

  // Write log data to the file
  fs.writeFile(logFilePath, logData, { encoding: 'utf8', flag: 'a' }, (err) => {
      if (err) {
          console.error('Error writing to log file:', err);
      } else {
          console.log('Log message appended to file:', logFileName);
      }
  });
}

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
  },
  /**
     * 
     * @param { String } data
     * @description Creates a new folder with the name logs and saves the related logs
     */
  logger(data) {

        const timestamp = new Date().toISOString();

        
            const folderName = 'logs';

            // Check if the folder exists
            fs.access(folderName, fs.constants.F_OK, (err) => {
                if (err) {
                    // Folder does not exist, create it
                    fs.mkdir(folderName, (mkdirErr) => {
                        if (mkdirErr) {
                            console.error('Error creating folder:', mkdirErr);
                        } else {
                            writeToLogFile(timestamp+ " " +data)

                        }
                    });
                } else {
                    writeToLogFile(timestamp+ " " +data)

                }
            });
       

    
}

}