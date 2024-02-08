const bcrypt = require("bcrypt");

// /// validate Data
module.exports.Validate = {
    slug(data){
       return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data)
    },
    url(data){
        return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/.test(data)
    },
    strongPassword(data){
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(data)
    },
    simplePassword(data){
        return /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(data)
    },
    discordUser(data){
        return /^.{3,32}#[0-9]{4}$/.test(data)

    },
    email(data){
        return /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(data)
    }
}

// /// Response Code

module.exports.constants = {
    Validation_Error: 400,
    Unauthorized: 401,
    Forbidoen: 403,
    Not_Found: 404,
    Server_Error: 500,
    Site_Unauthorized: 422,
    Too_Many: 429,
    Continue:100,
    OK:200,
    Created:201,
    Accepted:202,
    Found:302,
    Moved_Permanently:301
  };
  

// /// Password

module.exports.bcrypt = {
    hash: async(password, salt)=>{
        return await bcrypt.hash(password, salt);
       
    },
    compare: async (inputPussword, comparePasword)=>{
    return await bcrypt.compare(inputPussword, comparePasword)

    }
}


/// ///////////////////////////////////////////////////////////////////////////////////////// expresjs methods
module.exports.res400 = (res, err) => {
    return res.status(400).json({ message: err })
}

module.exports.res401 = (res, err) => {
    return res.status(401).json({ message: err })
}

module.exports.res200 = (res, data) => {
    return res.status().json(data)
}

module.exports.res201 = (res, data) => {
    return res.status(404).json(data)
}

module.exports.res404 = (res, err) => {
    return res.status(404).json({ message: err })
}

module.exports.res406 = (res, err) => {
    return res.status(406).json({ message: err })
}

module.exports.res500 = (res, err) => {
    return res.status(500).json({ message: err })
}

// express-validator

module.exports.checkValidationsMap = validationResult => {
    return (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(422).json({ validation: errors.mapped() })
        else next()
    }
}

module.exports.checkValidationsKeys = validationResult => {
    return (req, res, next) => {
      const errors = validationResult(req)
 
      
      if (!errors.isEmpty()) {
        const msg = {}
      errors.errors.forEach(err => {
        msg[err.path] = err.msg
      });
        res.status(422).json(msg)
      } else next()
    }}

/// ///////////////////////////////////////////////////////////////////////////////////////// sting methods
module.exports.removeWhiteSpaces = str => {
    return str.replace(/ /g, '')
}

module.exports.isPersian = str => {
    return str.match(/^[\u0600-\u06FF\s]+$/)
}

module.exports.isPersianWithDigits = str => {
    return str.match(/^[\u0600-\u06FF\s\d]+$/)
}

module.exports.isLatin = str => {
    return str.match(/^[A-Za-z\s]+$/g)
}

module.exports.isLatinWithDigits = str => {
    return str.match(/^[a-zA-Z\s0-9()*_\-!#$%^&*,."'\][]*$/g)
}

module.exports.hasWhiteSpaces = str => {
    return str.includes(' ')
}

/// ///////////////////////////////////////////////////////////////////////////////////////// number methods
module.exports.generateRandomDigits = digitsLength => {
    function generateRandomDigits(DIGITS_LENGTH) {
        const add = 1
        let max = 12 - add // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.
        if (DIGITS_LENGTH > max) {
            return generateRandomDigits(max) + generateRandomDigits(DIGITS_LENGTH - max)
        }
        max = Math.pow(10, DIGITS_LENGTH + add)
        const min = max / 10 // Math.pow(10, n) basically
        const number = Math.floor(Math.random() * (max - min + 1)) + min

        return ('' + number).substring(add)
    }
    return generateRandomDigits(digitsLength)
}

module.exports.generateRandomDigitsInRangeOf = max => {
    return Math.floor(Math.random() * max) + 1
}

/// ///////////////////////////////////////////////////////////////////////////////////////// iran region methods
module.exports.checkNationalCode = code => {
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
}

module.exports.checkMobileNumber = number => {
    const regex = /^(\+98|0)?9\d{9}$/
    const result = regex.test(number)
    return result
}

module.exports.normalizeMobileNumber = number => {
    return number.split('').reverse().join('').slice(0, 10).concat('0').split('').reverse().join('')
}

module.exports.nameOptimizer = name => {
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


module.exports.rs = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, siteuser');
    res.setHeader('Author', "Mr Swift")
    res.setHeader('X-Powered-By', "77 114 32 83 119 105 102 116")
    res.setHeader('X-Develop-By', "77 114 32 83 119 105 102 116")
    res.setHeader(
        "Strict-Transport-Security",
        "max-age=31536000; includeSubDomains; preload"
    );

    next();
}

module.exports._sr = {
    fa: {
        required: {
            token: 'توکن را وارد کنید',
            field: 'این فیلد نباید خالی باشد',
            // developer validations
            remember_me: 'پارامتر remember_me الزامی است',
            // registration validations
            name: 'نام را وارد کنید',
            first_name: 'نام را وارد کنید',
            last_name: 'نام خانوادگی را وارد کنید',
            email: 'ایمیل را وارد کنید',
            national_code: 'کد ملی الزامی است',
            email_personal: 'ایمیل شخصی الزامی است',
            email_company: 'ایمیل کمپانی برای اشخاص حقوقی الزامی است',
            company_name: 'درصورتی که شخص حقوقی هستید، نام کمپانی را وارد کنید',
            username: 'نام کاربری را وارد کنید',
            phone_number: 'شماره تماس را وارد کنید',
            password: 'پسورد را وارد کنید',
            birthdate: 'تاریخ تولد را وارد کنید',
            // addressing validations
            country: 'کشور را وارد کنید',
            province: 'استان را وارد کنید',
            city: 'شهر را وارد کنید',
            address: 'آدرس را وارد کنید',
            postal_code: 'کد پستی را وارد کنید',
            plaque: 'پلاک را وارد کنید',
            receiver_first_name: 'نام گیرنده را وارد کنید',
            receiver_last_name: 'نام خانوادگی گیرنده را وارد کنید',
            receiver_mobile: 'شماره موبایل گیرنده را وارد کنید',
            // global (post - gallery - ...)
            title: 'عنوان را وارد کنید',
            caption: 'متن را وارد کنید',
            description: 'توضیحات را وارد کنید',
            category: 'دسته بندی را انتخاب کنید',
            image: 'عکس اجباری است',
            cover: 'کاور اجباری است',
            file: 'فایل اجباری است',
            message: 'پیام را بنویسید',
            quantity: 'تعداد را وارد کنید',
            date: 'تاریخ را وارد کنید',
            reason: 'دلیل را انتخاب کنید',
            question: 'سوال را بنویسید',
            answer: 'جواب را بنویسید',
            price: 'قیمت را وارد کنید',
            type: 'نوع را انتخاب کنید',
            discount_code: 'کد تخفیف را وارد کنید',
            discount_amount: 'مقدار تخفیف را وارد کنید',
            discount_expire_date: 'تاریخ انقضای کد تخفیف را مشخص کنید',
            user_id: 'کاربر را انتخاب کنید',
            video: 'ویدیو اجباری است'
        },
        format: {
            phone_number: 'فرمت شماره تماس صحیح نیست',
            email: 'فرمت ایمیل قابل قبول نیست',
            number: 'مقدار باید از جنس عدد باشد',
            boolean: 'مقدار باید از جنس Boolean باشد',
            image: 'فرمت عکس قابل قبول نیست',
            video: 'فرمت ویدیو قابل قبول نیست',
            national_code: 'کد ملی صحیح نیست'
        },
        min_char: {
            min2: 'حداقل 2 کاراکتر',
            min4: 'حداقل 4 کاراکتر',
            min8: 'حداقل 8 کاراکتر',
            min10: 'حداقل 10 کاراکتر',
            min20: 'حداقل 20 کاراکتر',
            min30: 'حداقل 30 کاراکتر',
            min40: 'حداقل 40 کاراکتر',
            min50: 'حداقل 50 کاراکتر',
            min60: 'حداقل 60 کاراکتر',
            min100: 'حداقل 100 کاراکتر',
            min120: 'حداقل 120 کاراکتر',
            min150: 'حداقل 150 کاراکتر',
            min200: 'حداقل 200 کاراکتر',
            data_size: 'حجم قابل قبول حداقل: ',
            image_width_size: 'عرض حداقل: ',
            image_height_size: 'ارتفاع حداقل: '
        },
        max_char: {
            max4: 'حداکثر 4 کاراکتر',
            max8: 'حداکثر 8 کاراکتر',
            max10: 'حداکثر 10 کاراکتر',
            max15: 'حداکثر 15 کاراکتر',
            max20: 'حداکثر 20 کاراکتر',
            max30: 'حداکثر 30 کاراکتر',
            max40: 'حداکثر 40 کاراکتر',
            max50: 'حداکثر 50 کاراکتر',
            max60: 'حداکثر 60 کاراکتر',
            max100: 'حداکثر 100 کاراکتر',
            max120: 'حداکثر 120 کاراکتر',
            max150: 'حداکثر 150 کاراکتر',
            max200: 'حداکثر 200 کاراکتر',
            data_size: 'حجم قابل قبول حداکثر: ',
            image_width_size: 'عرض حداکثر: ',
            image_height_size: 'ارتفاع حداکثر: '
        },
        not_found: {
            user_id: 'کاربری با این مشخصات وجود ندارد',
            admin_id: 'ادمینی با این مشخصات وجود ندارد',
            order_id: 'سفارشی با این مشخصات وجود ندارد',
            item_id: 'موردی با این مشخصات وجود ندارد',
            password: 'رمز عبور یا آیدی درست نیست'
        },
        duplicated: {
            username: 'این نام کاربری از قبل وجود دارد',
            email: 'این ایمیل از قبل وجود دارد',
            name: 'نام تکراری است',
            title: 'عنوان تکراری است',
            phone_number: 'این شماره تماس از قبل وجود دارد'
        },
        response: {
            logged_in: 'شما وارد سیستم شدید',
            not_logged_in: 'شما وارد سیستم نشدید',
            logged_out: 'شما از سیستم خارج شدید',
            unauthenticated: 'غیرمجاز',
            recovery_link: 'لینک بازیابی فرستاده شد',
            success_save: 'با موفقیت ثبت شد',
            success_remove: 'با موفقیت حذف شد',
            cart_empty: 'سبد خرید خالی است',
            already_has_address: 'آدرس قبلا اضافه شده',
            activation_code: 'کد فعالسازی برای شما ارسال شد',
            activation_email: 'ایمیل فعال سازی برای شما ارسال شد',
            expired_reset_link: 'این لینک بازیابی منقضی شده است',
            email_not_confirmed: 'ابتدا ایمیل خود را تایید کنید،لینک فعال سازی قبلا برای شما فرستاده شده است.',
            expired_activation_link: 'این لینک فعال سازی منقضی شده است',
            success_activation: 'اکانت شما با موفقیت فعال شد',
            passwords_not_match: 'پسورد ها یکی نیست',
            problem: 'مشکلی پیش آمده، لطفا دوباره تلاش کنید.',
            latinChar: 'لطفا با حروف لاتین بنویسید',
            persianChar: 'لطفا با حروف فارسی بنویسید',
            whiteSpace: 'بین حروف و کلمات نباید فاصله باشد'
        },
        file_types: {
            jpg: 'فقط فرمت jpg قابل قبول است',
            png: 'فقط فرمت png قابل قبول است',
            gif: 'فقط فرمت gif قابل قبول است',
            pdf: 'فقط فرمت pdf قابل قبول است',
            txt: 'فقط فرمت txt قابل قبول است',
            log: 'فقط فرمت log قابل قبول است',
            mp3: 'فقط فرمت mp3 قابل قبول است',
            ogg: 'فقط فرمت ogg قابل قبول است',
            wmv: 'فقط فرمت wmv قابل قبول است',
            mp4: 'فقط فرمت mp4 قابل قبول است',
            mov: 'فقط فرمت mov قابل قبول است',
            mkv: 'فقط فرمت mkv قابل قبول است',
            flv: 'فقط فرمت flv قابل قبول است'
        }
    },
    en: {
        required: {
            token: 'Token is required',
            field: 'This field is required',
            // developer validations
            remember_me: 'Remember_me parameter required',
            // registration validations
            name: 'Enter name',
            first_name: 'Enter first name',
            last_name: 'Enter last name',
            national_code: 'National code is required',
            email: 'Enter email',
            email_personal: 'Personal email is required',
            email_company: 'Company email is required for legal entities',
            company_name: 'Enter company name if you are a legal entity',
            username: 'Enter username',
            phone_number: 'Enter phone number',
            password: 'Enter password',
            birthdate: 'Enter birthdate',
            // addressing validations
            country: 'Enter country',
            province: 'Enter province',
            city: 'Enter city',
            address: 'Enter address',
            postal_code: 'Enter postal code',
            plaque: 'Enter plaque',
            receiver_first_name: 'Enter recipient name',
            receiver_last_name: 'Enter recipient surname',
            receiver_mobile: "Enter recipient's mobile number",
            // global (post - gallery - ...)
            title: 'Enter title',
            caption: 'Enter caption',
            description: 'Enter description',
            category: 'Select category',
            image: 'Image is required',
            cover: 'Cover is required',
            file: 'File is required',
            message: 'Write message',
            quantity: 'Enter quantity',
            date: 'Enter date',
            reason: 'Select reason',
            question: 'Write the question',
            answer: 'Write the answer',
            price: 'Enter Price',
            type: 'Select type',
            discount_code: 'Enter discount code',
            discount_amount: 'Enter discount amount',
            discount_expire_date: 'Specify discount code expiration date',
            user_id: 'Select user',
            video: 'Video is required'
        },
        format: {
            phone_number: 'Phone number format in incorrect',
            email: 'Email format is not correct',
            number: 'Value must be number',
            boolean: 'Value must be Boolean',
            image: 'Photo format is not acceptable',
            video: 'Video format is not acceptable',
            national_code: 'National code format is not correct'
        },
        min_char: {
            min2: 'At least 2 characters',
            min4: 'At least 4 characters',
            min8: 'At least 8 characters',
            min10: 'At least 10 characters',
            min20: 'At least 20 characters',
            min30: 'At least 30 characters',
            min40: 'At least 40 characters',
            min50: 'At least 50 characters',
            min60: 'At least 60 characters',
            min100: 'At least 100 characters',
            min120: 'At least 120 characters',
            min150: 'At least 150 characters',
            min200: 'At least 200 characters',
            data_size: 'Acceptable minimum size: ',
            image_width_size: 'Minimum width: ',
            image_height_size: 'Minimum height: '
        },
        max_char: {
            max4: 'Maximum 4 characters',
            max8: 'Maximum 8 characters',
            max10: 'Maximum 10 characters',
            max15: 'Maximum 15 characters',
            max20: 'Maximum 20 characters',
            max30: 'Maximum 30 characters',
            max40: 'Maximum 40 characters',
            max50: 'Maximum 50 characters',
            max60: 'Maximum 60 characters',
            max100: 'Maximum 100 characters',
            max120: 'Maximum 120 characters',
            max150: 'Maximum 150 characters',
            max200: 'Maximum 200 characters',
            data_size: 'Maximum acceptable size: ',
            image_width_size: 'Maximum width: ',
            image_height_size: 'Maximum height: '
        },
        not_found: {
            user_id: 'There is no user with this profile',
            admin_id: 'There is no admin with this profile',
            order_id: 'There is no order with this profile',
            item_id: 'There is no item with this specification',
            password: 'Password or ID is incorrect'
        },
        duplicated: {
            username: 'This username already exists',
            email: 'This email already exists',
            name: 'Name already exists',
            title: 'Title already exists',
            phone_number: 'Phone number already exists'
        },
        response: {
            logged_in: 'You are logged in',
            not_logged_in: 'You are not logged in',
            logged_out: 'You are logged out',
            unauthenticated: 'unauthenticated',
            recovery_link: 'Recovery link sent',
            success_save: 'Successfully saved',
            success_remove: 'Successfully removed',
            cart_empty: 'Cart is empty',
            already_has_address: 'Already has address',
            activation_code: 'Activation code sent to you',
            activation_email: 'Activation email sent to you',
            expired_reset_link: 'The current reset pass link has been expired',
            email_not_confirmed: 'Confirm your email first, the activation link has already been sent to you.',
            expired_activation_link: 'This activation link has expired',
            success_activation: 'Your account has been successfully activated',
            passwords_not_match: 'Passwords are not the same',
            problem: 'There is a problem, please try again.',
            latinChar: 'Please write in Latin letters',
            persianChar: 'Please write in Persian letters',
            whiteSpace: 'There should be no space between letters and words'
        },
        file_types: {
            jpg: 'Only jpg format is acceptable',
            png: 'Only png format is acceptable',
            gif: 'Only gif format is acceptable',
            pdf: 'Only pdf format is acceptable',
            txt: 'Only txt format is acceptable',
            log: 'Only log format is acceptable',
            mp3: 'Only mp3 format is acceptable',
            ogg: 'Only ogg format is acceptable',
            wmv: 'Only wmv format is acceptable',
            mp4: 'Only mp4 format is acceptable',
            mov: 'Only mov format is acceptable',
            mkv: 'Only mkv format is acceptable',
            flv: 'Only flv format is acceptable'
        }
    },
    de: {
        required: {
            token: 'Token is required',
            field: 'This field is required',
            // developer validations
            remember_me: 'Remember_me-Parameter erforderlich',
            // registration validations
            name: 'Name eingeben',
            first_name: 'Name eingeben',
            last_name: 'Nachnamen eingeben',
            national_code: 'Nationaler Code ist erforderlich',
            email: 'Email eingeben',
            email_personal: 'Persönliche E-Mail ist erforderlich',
            email_company: 'Für juristische Personen ist eine Unternehmens-E-Mail erforderlich',
            company_name: 'Geben Sie den Firmennamen ein, wenn Sie eine juristische Person sind',
            username: 'Geben Sie den Benutzernamen ein',
            phone_number: 'Telefonnummer eingeben',
            password: 'Passwort eingeben',
            birthdate: 'Enter birthdate',
            // addressing validations
            country: 'Land eingeben',
            province: 'Stadt betreten',
            city: 'Stadt betreten',
            address: 'Adresse eingeben',
            postal_code: 'Postleitzahl eingeben',
            plaque: 'Plakette eingeben',
            receiver_first_name: 'Empfängername eingeben',
            receiver_last_name: 'Nachname des Empfängers eingeben',
            receiver_mobile: 'Handynummer des Empfängers eingebenr',
            // global (post - gallery - ...)
            title: 'Titel eingeben',
            caption: 'Beschriftung eingeben',
            description: 'Beschreibung eingeben',
            category: 'Kategorie wählen',
            image: 'Bild ist erforderlich',
            cover: 'Bild ist erforderlich Abdeckung ist erforderlich',
            file: 'Datei ist erforderlich',
            message: 'Nachricht schreiben',
            quantity: 'Menge eingeben',
            date: 'Enter date',
            reason: 'Grund auswählen',
            question: 'Schreibe die Frage',
            answer: 'Schreibe die Antwort',
            price: 'Enter Price',
            type: 'Select type',
            discount_code: 'Enter discount code',
            discount_amount: 'Enter discount amount',
            discount_expire_date: 'Specify discount code expiration date',
            user_id: 'Select user',
            video: 'Video is required'
        },
        format: {
            phone_number: 'Telefonnummernformat falsch',
            email: 'E-Mail-Format nicht korrekt',
            number: 'Wert muss Nummer sein',
            boolean: 'Wert muss Boolescher Wert sein',
            image: 'Photo format is not acceptable',
            video: 'Video format is not acceptable',
            national_code: 'Nationales Codeformat ist nicht korrekt'
        },
        min_char: {
            min2: 'Mindestens 2 Zeichen',
            min4: 'Mindestens 4 Zeichen',
            min8: 'Mindestens 8 Zeichen',
            min10: 'Mindestens 10 Zeichen',
            min20: 'Mindestens 20 Zeichen',
            min30: 'Mindestens 30 Zeichen',
            min40: 'Mindestens 40 Zeichen',
            min50: 'Mindestens 50 Zeichen',
            min60: 'Mindestens 60 Zeichen',
            min100: 'Mindestens 100 Zeichen',
            min120: 'Mindestens 120 Zeichen',
            min150: 'Mindestens 150 Zeichen',
            min200: 'Mindestens 200 Zeichen',
            data_size: 'Akzeptable Mindestgröße: ',
            image_width_size: 'Mindestbreite: ',
            image_height_size: 'Mindesthöhe: '
        },
        max_char: {
            max4: 'Maximal 4 Zeichen',
            max8: 'Maximal 8 Zeichen',
            max10: 'Maximal 10 Zeichen',
            max15: 'Maximal 15 Zeichen',
            max20: 'Maximal 20 Zeichen',
            max30: 'Maximal 30 Zeichen',
            max40: 'Maximal 40 Zeichen',
            max50: 'Maximal 50 Zeichen',
            max60: 'Maximal 60 Zeichen',
            max100: 'Maximal 100 Zeichen',
            max120: 'Maximal 120 Zeichen',
            max150: 'Maximal 150 Zeichen',
            max200: 'Maximal 200 Zeichen',
            data_size: 'Maximal zulässige Größe: ',
            image_width_size: 'Maximale Breite: ',
            image_height_size: 'Maximale Höhe: '
        },
        not_found: {
            user_id: 'Es gibt keinen Benutzer mit diesem Profil',
            admin_id: 'Es gibt keinen Administrator mit diesem Profil',
            order_id: 'Es gibt keine Bestellung mit diesem Profil',
            item_id: 'Es gibt keinen Artikel mit dieser Spezifikation',
            password: 'Passwort oder ID ist falsch'
        },
        duplicated: {
            username: 'Dieser Benutzername existiert bereits',
            email: 'Diese E-Mail existiert bereits',
            name: 'Name ist doppelt',
            title: 'Titel ist doppelt',
            phone_number: 'Phone number already exists'
        },
        response: {
            logged_in: 'Sie sind angemeldet',
            not_logged_in: 'Sie sind nicht angemeldet',
            logged_out: 'Sie sind abgemeldet',
            unauthenticated: 'nicht authentifiziert',
            recovery_link: 'Wiederherstellungslink gesendet',
            success_save: 'Erfolgreich gespeichert',
            success_remove: 'Erfolgreich entfernt',
            cart_empty: 'Warenkorb ist leer',
            ready_has_address: 'Hat bereits Adresse',
            activation_code: 'Activation code sent to you',
            activation_email: 'Activation email sent to you',
            expired_reset_link: 'Der aktuelle Reset-Pass-Link ist abgelaufen',
            email_not_confirmed: 'Bestätigen Sie zuerst Ihre E-Mail, der Aktivierungslink wurde bereits an Sie gesendet.',
            expired_activation_link: 'Dieser Aktivierungslink ist abgelaufen',
            success_activation: 'Ihr Konto wurde erfolgreich aktiviert',
            passwords_not_match: 'Passwörter sind nicht dasselbe',
            problem: 'Es gibt ein Problem, bitte versuchen Sie es erneut.',
            latinChar: 'Please write in Latin letters',
            persianChar: 'Please write in Persian letters',
            whiteSpace: 'There should be no space between letters and words'
        },
        file_types: {
            jpg: 'Nur das jpg-Format ist akzeptabel',
            png: 'Nur das png-Format ist akzeptabel',
            gif: 'Nur das gif-Format ist akzeptabel',
            pdf: 'Nur das PDF-Format ist akzeptabel',
            txt: 'Nur das txt-Format ist akzeptabel',
            log: 'Nur das log-Format ist akzeptabel',
            mp3: 'Nur das mp3-Format ist akzeptabel',
            ogg: 'Nur das ogg-Format ist akzeptabel',
            wmv: 'Nur das wmv-Format ist akzeptabel',
            mp4: 'Nur das mp4-Format ist akzeptabel',
            mov: 'Nur das mov-Format ist akzeptabel',
            mkv: 'Nur das mkv-Format ist akzeptabel',
            flv: 'Nur das flv-Format ist akzeptabel'
        }
    },
    tr: {
        required: {
            token: 'Token is required',
            field: 'This field is required',
            // geliştirici doğrulamaları
            Remember_me: 'Remember_me parametresi gerekli',
            // kayıt doğrulamaları
            name: 'Adı girin',
            first_name: 'Adı girin',
            last_name: 'Soyadı girin',
            national_code: 'Nationaler Kodu erforderlich',
            email: 'E-posta girin',
            email_personal: 'Kişisel e-posta gereklidir',
            email_company: 'Tüzel kişiler için şirket e-postası gereklidir',
            company_name: 'Tüzel kişiyseniz şirket adını girin',
            username: 'Kullanıcı adını girin',
            phone_number: 'Telefon numarasını girin',
            password: 'Şifre girin',
            birthdate: 'Enter birthdate',
            // doğrulamaları adresleme
            country: 'Ülke girin',
            province: 'İl girin',
            city: 'Şehir girin',
            address: 'Adres girin',
            postal_code: 'Posta kodunu girin',
            plaque: 'Plak girin',
            receiver_first_name: 'Alıcı adını girin',
            receiver_last_name: 'Alıcının soyadını girin',
            receiver_mobile: 'Alıcının cep telefonu numarasını girin',
            // global (post - galeri - ...)
            title: 'Başlığı girin',
            caption: 'Başlık girin',
            description: 'Açıklama girin',
            category: 'Kategori seçin',
            image: 'Resim gerekli',
            cover: 'Kapak gereklidir',
            file: 'Dosya gerekli',
            message: 'Mesaj yaz',
            quantity: 'Miktar girin',
            date: 'Enter date',
            reason: 'Nedeni seçin',
            question: 'Soruyu yazın',
            answer: 'Cevabı yaz',
            price: 'Enter Price',
            type: 'Select type',
            discount_code: 'Enter discount code',
            discount_amount: 'Enter discount amount',
            discount_expire_date: 'Specify discount code expiration date',
            user_id: 'Select user',
            video: 'Video is required'
        },
        format: {
            phone_number: 'Telefon numarası biçimi yanlış',
            email: 'E-posta formatı doğru değil',
            number: 'Değer sayı olmalıdır',
            boolean: 'Değer Boole olmalıdır',
            image: 'Photo format is not acceptable',
            video: 'Video format is not acceptable',
            national_code: 'Ulusal kod formatı doğru değil'
        },
        min_char: {
            min2: 'En az 2 karakter',
            min4: 'En az 4 karakter',
            min8: 'En az 8 karakter',
            min10: 'En az 10 karakter',
            min20: 'En az 20 karakter',
            min30: 'En az 30 karakter',
            min40: 'En az 40 karakter',
            min50: 'En az 50 karakter',
            min60: 'En az 60 karakter',
            min100: 'En az 100 karakter',
            min120: 'En az 120 karakter',
            min150: 'En az 150 karakter',
            min200: 'En az 200 karakter',
            data_size: 'Kabul edilebilir minimum boyut: ',
            image_width_size: 'Minimum genişlik: ',
            image_height_size: 'Minimum yükseklik: '
        },
        max_char: {
            max4: 'Maksimum 4 karakter',
            max8: 'Maksimum 8 karakter',
            max10: 'Maksimum 10 karakter',
            max15: 'Maksimum 15 karakter',
            max20: 'Maksimum 20 karakter',
            max30: 'Maksimum 30 karakter',
            max40: 'Maksimum 40 karakter',
            max50: 'Maksimum 50 karakter',
            max60: 'Maksimum 60 karakter',
            max100: 'Maksimum 100 karakter',
            max120: 'Maksimum 120 karakter',
            max150: 'Maksimum 150 karakter',
            max200: 'Maksimum 200 karakter',
            data_size: 'Kabul edilebilir maksimum boyut: ',
            image_width_size: 'Maksimum genişlik: ',
            image_height_size: 'Maksimum yükseklik: '
        },
        not_found: {
            user_id: 'Bu profile sahip kullanıcı yok',
            admin_id: 'Bu profile sahip yönetici yok',
            order_id: 'Bu profilde sipariş yok',
            item_id: 'Bu spesifikasyona sahip hiçbir öğe yok',
            password: 'Şifre veya kimlik yanlış'
        },
        duplicated: {
            username: 'Bu kullanıcı adı zaten mevcut',
            email: 'Bu email zaten var',
            name: 'Ad çift',
            title: 'Başlık yineleniyor',
            phone_number: 'Phone number already exists'
        },
        response: {
            logged_in: 'Giriş yaptınız',
            not_logged_in: 'Giriş yapmadınız',
            logged_out: 'Çıkış yaptınız',
            unauthenticated: 'unauthenticated',
            recovery_link: 'Kurtarma bağlantısı gönderildi',
            success_save: 'Başarıyla kaydedildi',
            success_remove: 'Başarıyla kaldırıldı',
            cart_empty: 'Sepet boş',
            already_has_address: 'Zaten adresi var',
            activation_code: 'Activation code sent to you',
            activation_email: 'Activation email sent to you',
            expired_reset_link: 'Mevcut sıfırlama geçiş bağlantısının süresi doldu',
            email_not_confirmed: 'Önce e-postanızı onaylayın, aktivasyon bağlantısı size zaten gönderildi.',
            expired_activation_link: 'Bu aktivasyon bağlantısının süresi doldu',
            success_activation: 'Hesabınız başarıyla etkinleştirildi',
            passwords_not_match: 'Şifreler aynı değil',
            problem: 'Bir sorun var, lütfen tekrar deneyin.',
            latinChar: 'Please write in Latin letters',
            persianChar: 'Please write in Persian letters',
            whiteSpace: 'There should be no space between letters and words'
        },
        file_types: {
            jpg: 'Yalnızca jpg formatı kabul edilebilir',
            png: 'Sadece png formatı kabul edilebilir',
            gif: 'Yalnızca gif formatı kabul edilebilir',
            pdf: 'Yalnızca pdf formatı kabul edilebilir',
            txt: 'Yalnızca txt formatı kabul edilebilir',
            log: 'Yalnızca log formatı kabul edilebilir',
            mp3: 'Yalnızca mp3 formatı kabul edilebilir',
            ogg: 'Yalnızca ogg formatı kabul edilebilir',
            wmv: 'Yalnızca wmv formatı kabul edilebilir',
            mp4: 'Yalnızca mp4 formatı kabul edilebilir',
            mov: 'Yalnızca mov formatı kabul edilebilir',
            mkv: 'Yalnızca mkv formatı kabul edilebilir',
            flv: 'Yalnızca flv biçimi kabul edilebilir'
        }
    },
    it: {
        required: {
            token: 'Token is required',
            field: 'This field is required',
            // convalide dello sviluppatore
            Remember_me: 'Remember_me parameter required',
            // convalide della registrazione
            name: 'Inserisci nome',
            first_name: 'Inserisci nome',
            last_name: 'Inserisci il cognome',
            national_code: 'Il codice Nationaler è comune',
            email: 'Enter email',
            email_personal: "L'email personale è obbligatoria",
            email_company: "L'email aziendale è obbligatoria per le persone giuridiche",
            company_name: "Inserisci il nome dell'azienda se sei una persona giuridica",
            username: 'Inserisci nome utente',
            phone_number: 'Inserisci numero di telefono',
            password: 'Inserisci password',
            birthdate: 'Enter birthdate',
            // indirizzamento delle convalide
            country: 'Inserisci paese',
            province: 'Inserisci provincia',
            city: 'Inserisci città',
            address: 'Inserisci indirizzo',
            postal_code: 'Inserisci codice postale',
            plaque: 'Inserisci targa',
            receiver_first_name: 'Inserisci il nome del destinatario',
            receiver_last_name: 'Inserisci il cognome del destinatario',
            receiver_mobile: 'Inserisci il numero di cellulare del destinatario',
            // globale (post - gallery - ...)
            title: 'Inserisci titolo',
            caption: 'Inserisci didascalia',
            description: 'Inserisci descrizione',
            category: 'Seleziona categoria',
            image: "L'immagine è obbligatoria",
            cover: 'Cover is required',
            file: 'Il file è obbligatorio',
            message: 'Scrivi messaggio',
            quantity: 'Inserisci quantità',
            date: 'Enter date',
            reason: 'Seleziona motivo',
            question: 'Scrivi la domanda',
            answer: 'Scrivi la risposta',
            price: 'Enter Price',
            type: 'Select type',
            discount_code: 'Enter discount code',
            discount_amount: 'Enter discount amount',
            discount_expire_date: 'Specify discount code expiration date',
            user_id: 'Select user',
            video: 'Video is required'
        },
        format: {
            phone_number: 'Formato del numero di telefono non corretto',
            email: 'Formato email non corretto',
            number: 'Il valore deve essere un numero',
            boolean: 'Il valore deve essere booleano',
            image: 'Photo format is not acceptable',
            video: 'Video format is not acceptable',
            national_code: 'Il formato del codice nazionale non è corretto'
        },
        min_char: {
            min2: 'Almeno 2 caratteri',
            min4: 'Almeno 4 caratteri',
            min8: 'Almeno 8 caratteri',
            min10: 'Almeno 10 caratteri',
            min20: 'Almeno 20 caratteri',
            min30: 'Almeno 30 caratteri',
            min40: 'Almeno 40 caratteri',
            min50: 'Almeno 50 caratteri',
            min60: 'Almeno 60 caratteri',
            min100: 'Almeno 100 caratteri',
            min120: 'Almeno 120 caratteri',
            min150: 'Almeno 150 caratteri',
            min200: 'Almeno 200 caratteri',
            data_size: 'Dimensione minima accettabile: ',
            image_width_size: 'Larghezza minima: ',
            image_height_size: 'Altezza minima: '
        },
        max_char: {
            max4: 'Massimo 4 caratteri',
            max8: 'Massimo 8 caratteri',
            max10: 'Massimo 10 caratteri',
            max15: 'Massimo 15 caratteri',
            max20: 'Massimo 20 caratteri',
            max30: 'Massimo 30 caratteri',
            max40: 'Massimo 40 caratteri',
            max50: 'Massimo 50 caratteri',
            max60: 'Massimo 60 caratteri',
            max100: 'Massimo 100 caratteri',
            max120: 'Massimo 120 caratteri',
            max150: 'Massimo 150 caratteri',
            max200: 'Massimo 200 caratteri',
            data_size: 'Dimensione massima accettabile: ',
            image_width_size: 'Larghezza massima: ',
            image_height_size: 'Altezza massima: '
        },
        not_found: {
            user_id: 'Nessun utente con questo profilo',
            admin_id: 'Nessun amministratore con questo profilo',
            order_id: 'Nessun ordine con questo profilo',
            item_id: 'Nessun articolo con questa specifica',
            password: "La password o l'ID non sono corretti"
        },
        duplicated: {
            username: 'Questo nome utente esiste già',
            email: 'Questa email esiste già',
            name: 'Il nome è duplicato',
            title: 'Il titolo è duplicato',
            phone_number: 'Phone number already exists'
        },
        response: {
            logged_in: "Hai effettuato l'accesso",
            not_logged_in: 'Non sei loggato',
            logged_out: 'Sei disconnesso',
            unauthenticated: 'unauthenticated',
            recovery_link: 'Link di ripristino inviato',
            success_save: 'Salvataggio riuscito',
            success_remove: 'Rimosso con successo',
            cart_empty: 'Il carrello è vuoto',
            already_has_address: 'Ha già indirizzo',
            activation_code: 'Activation code sent to you',
            activation_email: 'Activation email sent to you',
            expired_reset_link: "L'attuale link del passaggio di reimpostazione è scaduto",
            email_not_confirmed: 'Conferma prima la tua email, il link di attivazione ti è già stato inviato.',
            expired_activation_link: 'Questo link di attivazione è scaduto',
            success_activation: 'Il tuo account è stato attivato con successo',
            passwords_not_match: 'Le password non sono le stesse',
            problem: 'Si è verificato un problema, riprova.',
            latinChar: 'Please write in Latin letters',
            persianChar: 'Please write in Persian letters',
            whiteSpace: 'There should be no space between letters and words'
        },
        file_types: {
            jpg: 'È accettabile solo il formato jpg',
            png: 'È accettabile solo il formato png',
            gif: 'È accettabile solo il formato GIF',
            pdf: 'È accettabile solo il formato pdf',
            txt: 'È accettabile solo il formato txt',
            log: 'È accettabile solo il formato log',
            mp3: 'È accettabile solo il formato mp3',
            ogg: 'È accettabile solo il formato ogg',
            wmv: 'È accettabile solo il formato wmv',
            mp4: 'È accettabile solo il formato mp4',
            mov: 'È accettabile solo il formato mov',
            mkv: 'È accettabile solo il formato mkv',
            flv: 'È accettabile solo il formato flv'
        }
    },
    supportedImageFormats: ['jpg', 'jpeg', 'png', 'svg', 'svg+xml', 'webp'],
    supportedVideoFormats: ['mp4', 'wmv']
}
