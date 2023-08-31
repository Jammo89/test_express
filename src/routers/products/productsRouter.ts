import { Router, Request, Response } from "express";
import ProductsController from "../../controllers/productsController/ProductsController";


export const productsRouter = Router()


const adresses = [{ id: 1, value: 'Gorkoko 73' }, { id: 2, value: 'Mira 4' }]

productsRouter.get('/', ProductsController.getAllPoducts)

productsRouter.get('/:id', ProductsController.getOnePoducts)

productsRouter.post('/', ProductsController.createPoducts)

productsRouter.put('/:id', ProductsController.updatePoducts)

productsRouter.delete('/:id', ProductsController.deletePoducts)
