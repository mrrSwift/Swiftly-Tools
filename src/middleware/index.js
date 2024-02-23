const fs = require('fs')
const path = require('path');
const cl = require("../color").color;

function getLogFileName() {
    const now = new Date();
    const dateString = now.toISOString().slice(0, 10); // Get date string in yyyy-mm-dd format
    return `logs_${dateString}.log`;
}

// Function to write log message with timestamp to the file
function writeToLogFile(folderName, logMessage) {
    const logFileName = getLogFileName();
    const logFilePath = path.join(__dirname, folderName, logFileName); // Assuming logs are saved in the current directory
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

module.exports.middleware = {
    /** 
    *@description middleware fo set public cors
    */
    cors(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, siteuser');
        res.setHeader('X-Develop-By', "77 114 32 83 119 105 102 116")

        next();
    },
    /** 
    *@description set Strict-Transport-Security header
    */
    hsts(req, res, next) {
        res.setHeader('X-Develop-By', "77 114 32 83 119 105 102 116")
        res.setHeader(
            "Strict-Transport-Security",
            `max-age=${new Date("2030-01-01")}; includeSubDomains; preload`
        );

        next();
    },
    /** 
    *@param name 
    *@description Set your name in Author header
    */
    sign(name) {
        return (req, res, next) => {
            res.setHeader('Author', `${name}`)
            res.setHeader('X-Powered-By', "77 114 32 83 119 105 102 116")
            res.setHeader('X-Develop-By', "77 114 32 83 119 105 102 116")
            next()

        }
    },
    /**
     * 
     * @param {Boolean} file If true create folder and save log on there
     * @returns Auto log per request
     */
    logger(file = false) {
        return (req, res, next) => {
            const timestamp = new Date().toISOString();

            let logs = timestamp + ": " + req.method + " - " + req.headers + " IP: " + req.ip + " - " + req.originalUrl;
            let logsConsole = cl.console(timestamp, "fgGreen") + ": " + cl.console(req.method, "fgRed") + " - " + cl.console(req.headers, "fgBlue") + " IP: " + cl.console(req.ip, "fgBlue") + " - " + cl.console(req.originalUrl, "fgRed");
            if (file) {
                const folderName = 'logs';

                // Check if the folder exists
                fs.access(folderName, fs.constants.F_OK, (err) => {
                    if (err) {
                        // Folder does not exist, create it
                        fs.mkdir(folderName, (mkdirErr) => {
                            if (mkdirErr) {
                                console.error('Error creating folder:', mkdirErr);
                            } else {
                                writeToLogFile(folderName, logs)
                                next()
                            }
                        });
                    } else {
                        writeToLogFile(folderName, logs)
                        next()
                    }
                });
            } else {
                console.log(logsConsole)
                next()
            }

        }
    }
}