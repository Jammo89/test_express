import { Request, Response } from "express";


const products = [{ id: 1, title: 'tomate' }, { id: 2, title: 'orenge' }]




class ProductsController {

  getAllPoducts(req: Request, res: Response) {
    if (req.query.title) {
      let serchString = req.query.title.toString()
      res.json(products.filter(p => p.title.indexOf(serchString) > - 1))
    }
    res.json(products)
  }

  getOnePoducts(req: Request, res: Response) {
    const product = products.find(p => p.id === +req.params.id)
    if (product) {
      res.json(product)
    }
    else {
      res.sendStatus(404)
    }
  }

  createPoducts(req: Request, res: Response) {
    const newProduct = { id: +(new Date()), title: req.body.title }
    products.push(newProduct)
    res.status(201)
    res.json(newProduct)
  }

  updatePoducts(req: Request, res: Response) {
    const product = products.find(p => p.id === +req.params.id)
    if (product) {
      product.title = req.body.title
      res.status(200)
      res.json(product)
    }
    else {
      res.sendStatus(404)
    }
  }

  deletePoducts(req: Request, res: Response) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === +req.params.id) {
        products.splice(i, 1)
        res.status(204)
        return
      }
    }
  }

}

export default new ProductsController();