var queryURL = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
var city = 'Warren'
var cityQuery = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f80d7d9f723d639101320313c3835bc`

function getWeatherData() {
    fetch(cityQuery).then(response => console.log(response))
}

getWeatherData()