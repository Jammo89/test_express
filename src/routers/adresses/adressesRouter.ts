import { Router } from "express";
import AdressesController from "../../controllers/adressesController/AderssesController";


export const adressesRouter = Router();


adressesRouter.get('/', AdressesController.getAllAdresses)

adressesRouter.post('/', AdressesController.createAdreses)

adressesRouter.get('/:id', AdressesController.getOneAdresses)

adressesRouter.put('/:id', AdressesController.updateAdresses)