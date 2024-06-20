  fetch('./config.json')
    .then(response => response.json())
    .then(config => {
      const apiKey = config.API_KEY;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=cali&appid=${apiKey}`;
      async function getWeather(){
          const response = await fetch(apiUrl);
          return await response.json();
      }
      getWeather().then(data => {
          console.log(data)
      })
    });





