
const fs = require('fs')
const path = require('path');

function getLogFileName() {
    const now = new Date();
    const dateString = now.toISOString().slice(0, 10); // Get date string in yyyy-mm-dd format
    return `logs_${dateString}.log`;
  }
  
  // Function to write log message with timestamp to the file
  function writeToLogFile(logsFolder, logMessage) {
    const logFileName = getLogFileName();
    const logFilePath = path.join(__dirname,logsFolder , logFileName); // Assuming logs are saved in the current directory
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

 const logger= (data) => {

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
                        writeToLogFile(folderName,timestamp+ " " +data)

                    }
                });
            } else {
                writeToLogFile(folderName,timestamp+ " " +data)

            }
        });
   


}
  


logger('Log message 1');
logger('Log message 2');
logger('Log message 3');