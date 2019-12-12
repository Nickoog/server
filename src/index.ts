import express, { Request, Response } from 'express'
import { router } from './routes/loginRoutes'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import { router as contrallerRouter } from './controllers/decorators/controller'
import './controllers/LoginController'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['qwertyqwerty'] }))
app.use(router)
app.use(contrallerRouter)

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
