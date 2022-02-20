import express, { Request, Response } from 'express'
import data from '../utils/users.json'
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).json(data)
})

export default router
