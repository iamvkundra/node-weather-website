const request = require('request');

const geoCode = (address,callback)=>{
    const geoURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?proximity=85.32490007335275,23.345742633133312&access_token=pk.eyJ1IjoiaWFtdmt1bmRyYSIsImEiOiJja2F5ZW4waXYwOGc1MnFsN2QwZ3htemJ4In0.GYM5Akqu6-wWUucCFR8Qhg&limit=1';
    request({url:geoURL,json:true},(error,response)=>{
        if(error){
            callback("Error while fetching the information,Check Your internet!",undefined)
        }
        else if(response.body.features.length == 0){
            callback("INVALID ADDRESS",undefined)
        }
        else{
            
        callback(undefined,{
            latitude:response.body.features[0].geometry.coordinates[0],
            longitude:response.body.features[0].geometry.coordinates[1],
            place_name :response.body.features[0].place_name
          })
        }
    })

}

module.exports = geoCode