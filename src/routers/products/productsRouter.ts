import { Router, Request, Response } from "express";


export const productsRouter = Router()


const adresses = [{ id: 1, value: 'Gorkoko 73' }, { id: 2, value: 'Mira 4' }]

productsRouter.get('/', (req: Request, res: Response) => {

  if (req.query.value) {
    let serchString = req.query.value.toString()
    res.json(adresses.filter(p => p.value.indexOf(serchString) > - 1))
  }
  res.json(adresses)
})

productsRouter.get('/:id', (req: Request, res: Response) => {

  const adress = adresses.find(p => p.id === +req.params.id)
  if (adress) {
    res.json(adress)
  }
  else {
    res.sendStatus(404)
  }
})

productsRouter.delete('/:id', (req: Request, res: Response) => {
  for (let i = 0; i < adresses.length; i++) {
    if (adresses[i].id === +req.params.id) {
      adresses.splice(i, 1);
      res.status(204)
      return;
    }
  }
  res.status(404)
})
