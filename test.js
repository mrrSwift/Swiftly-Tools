
const fs = require('fs')
const path = require('path');
function getLogFileName() {
    const now = new Date();
    const dateString = now.toISOString().slice(0, 10); // Get date string in yyyy-mm-dd format
    return `logs_${dateString}.log`;
}

// Function to write log message with timestamp to the file
function writeToLogFile(logMessage) {
   const logFileName = getLogFileName();
    const logFilePath = path.join(__dirname, logFileName); // Assuming logs are saved in the current directory

    // Get current timestamp
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


writeToLogFile('Log message 1');
writeToLogFile('Log message 2');
writeToLogFile('Log message 3');