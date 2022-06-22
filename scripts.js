var request = new XMLHttpRequest()
var dictionary = []
function submitCityForm() {
        console.log("test");

        let cityName = getCityName();

//concat api call to allow different cities

        var cityCall = "http://api.weatherapi.com/v1/current.json?key=fda88d0772da44f08d0124849220905&q=" + cityName + "&aqi=no"

        request.open('GET', cityCall, true)
        request.onload = function () {
            //access JSON data here
            var data = JSON.parse(this.response)
            console.log(data)

            //TODO: make separate arrays for each part of the data object

            //location
            dictionary['name'] = data.location.name
            dictionary['region'] = data.location.region
            dictionary['country'] = data.location.country
            dictionary['lat'] = data.location.lat
            dictionary['lon'] = data.location.lon
            dictionary['tz_id'] = data.location.tz_id
            dictionary['localtime_epoch'] = data.location.localtime_epoch
            dictionary['localtime'] = data.location.localtime

            //current
            dictionary['last_updated_epoch'] = data.last_updated_epoch
            dictionary['last_updated'] = data.last_updated
            dictionary['temp_c'] = data.temp_c
            dictionary['temp_f'] = data.temp_f
            dictionary['is_day'] = data.is_day
            dictionary['wind_mph'] = data.wind_mph
            dictionary['wind_kph'] = data.wind_kph
            dictionary['wind_degree'] = data.wind_degree
            dictionary['wind_dir'] = data.wind_dir
            dictionary['pressure_mb'] = data.pressure_mb
            dictionary['pressure_in'] = data.pressure_in
            dictionary['precip_mm'] = data.precip_mm
            dictionary['precip_in'] = data.precip_in
            dictionary['humidity'] = data.humidity
            dictionary['cloud'] = data.cloud
            dictionary['feelslike_c'] = data.feelslike_c
            dictionary['feelslike_f'] = data.feelslike_f
            dictionary['vis_km'] = data.vis_km
            dictionary['vis_miles'] = data.vis_miles
            dictionary['uv'] = data.uv
            dictionary['gust_mph'] = data.gust_mph
            dictionary['gust_kph'] = data.wind_kph

            //conditionArray
            dictionary['text'] = data.text
            dictionary['icon'] = data.icon
            dictionary['code'] = data.code

        }
//send request
        request.send()

}





