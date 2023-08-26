import { Router, Request, Response } from "express"

export const userRouter = Router()

const users = { id: 1, name: 'Micakil', age: 34 }

userRouter.get('/', (req: Request, res: Response) => {
  res.json(users)
})