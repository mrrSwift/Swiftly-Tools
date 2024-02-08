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