const colors = require('./Colors.json')
module.exports.colors = ()=>{
    return colors
}

module.exports.rgbToHex = (r, g, b)=>{
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

}

module.exports.randomHex = () =>{
   return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
}