var request = new XMLHttpRequest()

request.open('GET', 'http://api.weatherapi.com/v1/current.json?key=fda88d0772da44f08d0124849220905&q=London&aqi=no', true)
request.onload = function () {
  //access JSON data here
    var data = JSON.parse(this.response)

    console.log(data)
  }
//send request
  request.send()

data.forEach(current)




