const request = require('request');

const data = (latitude,longitude,callback)=>{
    const url = "http://api.weatherstack.com/current?access_key=4d11caf4ed24d3b08aa5fd46d2542852&query="+latitude+","+longitude;
    request({url:url,json: true},(error,response)=>{
        
        if(error){
            callback('Check your network connection!',undefined)
        }
        else{
            callback(undefined,{
                temp:response.body.current.temperature,
                chanceOfRain: response.body.current.precip,
                weather_des : response.body.current.weather_descriptions
            })
        }
    })
   
}


module.exports = data