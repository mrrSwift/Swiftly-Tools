module.exports.utils ={
    sleep(msTime = 1000){
        new Promise(_ => setTimeout(_, msTime))
    },
    log(string){
        console.log(string)
    },
    celsiusToFahrenheit(c){
       return c * 9/5 + 32;
    },
    fahrenheitToCelsius(f){
      return  (f - 32) * 5/9;
    }
    
}