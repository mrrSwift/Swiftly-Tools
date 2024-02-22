
module.exports.iran = {
    checkNationalCode(code) {
        /* eslint-disable eqeqeq */
        const L = code.length
        if (L < 8 || parseInt(code, 10) == 0) return false
        code = ('0000' + code).substr(L + 4 - 10)
        if (parseInt(code.substr(3, 6), 10) == 0) return false
        const c = parseInt(code.substr(9, 1), 10)
        let s = 0
        for (let i = 0; i < 9; i++) {
            s += parseInt(code.substr(i, 1), 10) * (10 - i)
        }
        s = s % 11
        return (s < 2 && c == s) || (s >= 2 && c == 11 - s)
        /* eslint-enable eqeqeq */
    },
    checkMobileNumber(number) {
        const regex = /^(\+98|0)?9\d{9}$/
        const result = regex.test(number)
        return result
    },
    normalizeMobileNumber(number) {
        return number.split('').reverse().join('').slice(0, 10).concat('0').split('').reverse().join('')
    },
    nameOptimizer(name) {
        function regex(str) {
            return new RegExp(str)
        }

        return name
            .replace(regex('آقای'), '')
            .replace(regex('آقا'), '')
            .replace(regex('جنابه'), '')
            .replace(regex('جناب'), '')
            .replace(regex('سرکار خانوم'), '')
            .replace(regex('سرکار خانم'), '')
            .replace(regex('سرکارخانوم'), '')
            .replace(regex('سرکارخانومه'), '')
            .replace(regex('سرکارخانمه'), '')
            .replace(regex('سرکارخانم'), '')
            .replace(regex('سرکار'), '')
            .replace(regex('خانوم'), '')
            .replace(regex('خانم'), '')
    }

}