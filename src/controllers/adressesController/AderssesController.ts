import { Request, Response } from "express";


const adresses = [{ id: 1, value: 'Gorkoko 73' }, { id: 2, value: 'Mira 4' }]


class AdressesController {

  getAllAdresses(req: Request, res: Response) {
    if (req.query.title) {
      let serchString = req.query.title.toString()
      res.json(adresses.filter(p => p.value.indexOf(serchString) > - 1))
    }
    res.json(adresses)
  }

  getOneAdresses(req: Request, res: Response) {
    const product = adresses.find(p => p.id === +req.params.id)
    if (product) {
      res.json(product)
    }
    else {
      res.sendStatus(404)
    }
  }

  createAdreses(req: Request, res: Response) {
    const newProduct = { id: +(new Date()), title: req.body.title }
    adresses.push(newProduct)
    res.status(201)
    res.json(newProduct)
  }

  updateAdresses(req: Request, res: Response) {
    const product = adresses.find(p => p.id === +req.params.id)
    if (product) {
      product.value = req.body.title
      res.status(200)
      res.json(product)
    }
    else {
      res.sendStatus(404)
    }
  }

  deleteAdresses(req: Request, res: Response) {
    for (let i = 0; i < adresses.length; i++) {
      if (adresses[i].id === +req.params.id) {
        adresses.splice(i, 1)
        res.status(204)
        return
      }
    }
  }

}

export default new AdressesController();