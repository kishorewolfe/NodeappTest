const request = require('request');

 const geoCode =(address,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=14bc2872132fd167bbbd077014d7f78b&query=" +address;
    request({url:url},(error,response)=>{
        const data = JSON.parse(response.body)

        if(error){
            callback("Wrror Occured "+undefined)
        }
        else{callback(undefined
            
            ,{
            Lattitude : data.location.lat,
            Longtitude : data.location.lon,
            weather_descriptions:data.current.weather_descriptions,
            weather_icons:data.current.weather_icons,
            locationName:data.location.timezone_id
        
        })
   

        }
       
    })

}
module.exports=geoCode

geoCode("37.8267,-122.4233",(error,{Lattitude,Longtitude,weather_descriptions,weather_icons,locationName})=>{
    console.log("the Error is : "+error);
    
})
