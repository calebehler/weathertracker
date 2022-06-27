//fix later
function updateData() {
    validateForm();
    var request = new XMLHttpRequest()
    var dictionary = []
    request.open('GET', cityCall, true)
    request.onload = function () {
        //access JSON data here
        var data = JSON.parse(this.response)

        console.log(data)

    }
//send request
    request.send()
}

function validateForm() {
    let cityName = document.forms["cityForm"]["chosenCity"].valueAsString;
    if (cityName == "") {
        alert("City must be specified");
        return false;
    }
    else return true;
}

function getCityName() {

    let cityName = document.forms["cityForm"]["chosenCity"].valueAsString
    return cityName;

}
