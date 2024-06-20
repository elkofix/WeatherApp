import { Router } from 'express'
import { getWeather, getWeatherDefault } from '../controllers/apiController.js'
import 'dotenv/config'
const router = Router()

router.get("/", async (req, res) => { 
  const  city  = req.query.city || process.env.DEFAULT_CITY;
  const data = await getWeatherDefault(city)
  res.render("index", {data}) 
});


router.post("/", async (req, res) => {
  const { city } = req.body;
  res.redirect(`/?city=${city}`);
});


export default router