const colors = require('./Colors.json')
const consoleColor = require('./ConsoleColor')

module.exports.color = {
    /** 
    *@description Objects of colers { Color Code : Color Name }
    */
    colors() {
        return colors
    },
    /** 
*@description Get rgb code and convert to hex code
*@param r value of red. range of 0 - 255
*@param g value of green. range of 0 - 255
*@param b value of blue. range of 0 - 255
*@return string of hex code start with #
*/
    rgbToHex(r = 0, g= 0, b= 0) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    },
    /** 
*@return random hex code start with #
*/
    randomHex() {
        return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
    },
    /** 
*@description Get rgb code and convert to hex code
*@param text The text you want to be colored
*@param color console coler code | fgRed fgBlue ... | bgRed bgBlue ...
*@return Coded string ready to use in console
*/
    console(text, color) {
        return consoleColor[color] + text + consoleColor.reset
    }
}