var request = new XMLHttpRequest()

request.open('GET', 'http://api.weatherapi.com/v1//current.json', true)

request.onload = function(){
  
  //access JSON data here
  var data = JSON.parse(this.response)
  
  data.forEach(temp_c => {
    //log temp for testing
    console.log(temp_c)
  })
  
}

//send request
request.send()
