import { Router } from "express";
import ExampleController from "../../controllers/exampeleController/ExampleController";


export const exampleRouter = Router()


exampleRouter.get('/', ExampleController.getAllExample)

exampleRouter.get('/:id', ExampleController.getOneExamle)

exampleRouter.post('/', ExampleController.createExample)

exampleRouter.put('/:id', ExampleController.updateExample)

exampleRouter.delete('/:id', ExampleController.deleteExample)
