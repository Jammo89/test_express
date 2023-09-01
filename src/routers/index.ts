import { Router } from "express";

import { exampleRouter } from "./exampleRouter/exampleRouter";


export const router = Router()

router.use('/example', exampleRouter)
