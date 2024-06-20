import { Router } from 'express'
import { getWeather, getWeatherDefault } from '../controllers/apiController.js'
import 'dotenv/config'
const router = Router()

router.get("/", (req, res) => { 
  const data = getWeatherDefault(process.env.DEFAULT_CITY)
  res.render("index", {data}) 
});


router.post("/", async (req, res) => {
  const data = await getWeather(req, res)
  res.render("index", {data})
});


export default router