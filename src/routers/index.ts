import { Router } from "express";
import { adressesRouter } from "./adresses/adressesRouter";
import { productsRouter } from "./products/productsRouter";
import { userRouter } from "./users/users";


export const router = Router()

router.use('/adresess', adressesRouter)
router.use('/products', productsRouter)
router.use('/users', userRouter)