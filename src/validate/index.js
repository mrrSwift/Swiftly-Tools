// /// validate Data

const {utils} = require('../utils')

const IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
const IPv4AddressFormat = `(${IPv4SegmentFormat}[.]){3}${IPv4SegmentFormat}`;
const IPv4AddressRegExp = new RegExp(`^${IPv4AddressFormat}$`);

const IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
const IPv6AddressRegExp = new RegExp('^(' +
  `(?:${IPv6SegmentFormat}:){7}(?:${IPv6SegmentFormat}|:)|` +
  `(?:${IPv6SegmentFormat}:){6}(?:${IPv4AddressFormat}|:${IPv6SegmentFormat}|:)|` +
  `(?:${IPv6SegmentFormat}:){5}(?::${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,2}|:)|` +
  `(?:${IPv6SegmentFormat}:){4}(?:(:${IPv6SegmentFormat}){0,1}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,3}|:)|` +
  `(?:${IPv6SegmentFormat}:){3}(?:(:${IPv6SegmentFormat}){0,2}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,4}|:)|` +
  `(?:${IPv6SegmentFormat}:){2}(?:(:${IPv6SegmentFormat}){0,3}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,5}|:)|` +
  `(?:${IPv6SegmentFormat}:){1}(?:(:${IPv6SegmentFormat}){0,4}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,6}|:)|` +
  `(?::((?::${IPv6SegmentFormat}){0,5}:${IPv4AddressFormat}|(?::${IPv6SegmentFormat}){1,7}|:))` +
  ')(%[0-9a-zA-Z-.:]{1,})?$');

  const notBase64 = /[^A-Z0-9+\/=]/i;
const urlSafeBase64 = /^[A-Z0-9_\-]*$/i;

const defaultBase64Options = {
  urlSafe: false,
};

const default_time_options = {
    hourFormat: 'hour24',
    mode: 'default',
  };
  
  const formats = {
    hour24: {
      default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
      withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
    },
    hour12: {
      default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
      withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/,
    },
  };

  
module.exports.validate = {
    isSlug(data){
       return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data)
    },
    isUrl(data){
        return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/.test(data)
    },
    isStrongPassword(data){
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(data)
    },
    isSimplePassword(data){
        return /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(data)
    },
    isDiscordUser(data){
        return /^.{3,32}#[0-9]{4}$/.test(data)

    },
    isEmail(data){
        return /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(data)
    },
    isEmoji(data){
        return /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/.test(data)
    },
    isDate(data){
        return /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/.test(data)
    },
    isTime(input, options) {
        options = utils.merge(options, default_time_options);
        if (typeof input !== 'string') return false;
        return formats[options.hourFormat][options.mode].test(input);
    },
    isIP(str, version = '') {
        utils.assertString(str);
        version = String(version);
        if (!version) {
          return isIP(str, 4) || isIP(str, 6);
        }
        if (version === '4') {
          return IPv4AddressRegExp.test(str);
        }
        if (version === '6') {
          return IPv6AddressRegExp.test(str);
        }
        return false;
      },
      isBase64(str, options) {
        utils.assertString(str);
        options = utils.merge(options, defaultBase64Options);
        const len = str.length;
      
        if (options.urlSafe) {
          return urlSafeBase64.test(str);
        }
      
        if (len % 4 !== 0 || notBase64.test(str)) {
          return false;
        }
      
        const firstPaddingChar = str.indexOf('=');
        return firstPaddingChar === -1 ||
          firstPaddingChar === len - 1 ||
          (firstPaddingChar === len - 2 && str[len - 1] === '=');
      },
      isJWT(str) {
        utils.assertString(str);
      
        const dotSplit = str.split('.');
        const len = dotSplit.length;
      
        if (len !== 3) {
          return false;
        }
      
        return dotSplit.reduce((acc, currElem) => acc && this.isBase64(currElem, { urlSafe: true }), true);
      }
    
}