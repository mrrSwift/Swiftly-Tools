module.exports.utils ={
    sleep(msTime = 1000){
        new Promise(_ => setTimeout(_, msTime))
    }
    
}