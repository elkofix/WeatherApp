const apiKey = "3550f4bba913220283bbcf1fdb12fe72";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=cali&appid=${apiKey}}`;







async function checkWeather(){
    const response = await fetch(apiUrl);
    var data = await response.json()

    console.log(data.coord)
}s