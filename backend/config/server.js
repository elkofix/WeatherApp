import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
import indexRoutes from '../routes/index.js'
const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.json())
app.set('views', join(__dirname,"..","..", "frontend", "views"))
app.set("view engine", 'ejs')
app.use(indexRoutes)
app.use(express.static(join(__dirname,"..", "..", "frontend")));
app.listen(3000)
console.log("Server is listening on port", 3000)
