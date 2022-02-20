import express, { Application } from 'express'
import cors from 'cors'
import user from './controller/userController'
const app: Application = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', user)

export default app
