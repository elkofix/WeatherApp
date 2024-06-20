import 'dotenv/config'
import { render } from 'ejs';
const apiKey = process.env.API_KEY;


const getWeather = async function getWeather(req, res){
  const {city} = req.body;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

const getWeatherDefault = async (city) =>{
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

export {getWeather, getWeatherDefault}