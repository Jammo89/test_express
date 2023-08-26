import { Router, Request, Response } from "express";


export const adressesRouter = Router();

const products = [{ id: 1, title: 'tomate' }, { id: 2, title: 'orenge' }]



adressesRouter.get('/', (req: Request, res: Response) => {
  if (req.query.title) {
    let serchString = req.query.title.toString()
    res.json(products.filter(p => p.title.indexOf(serchString) > - 1))
  }
  res.json(products)
})

adressesRouter.post('/', (req: Request, res: Response) => {
  const newProduct = { id: +(new Date()), title: req.body.title }
  products.push(newProduct)
  res.status(201)
  res.json(newProduct)
})

// app.get('/products/:productTitle', (req: Request, res: Response) => {
//     const productTitle = req.params.productTitle
//     const product = products.find(p => p.title === productTitle)
//     if (product) {
//         res.json(product)

//     }
//     else {
//         res.sendStatus(404)
//     }
// })

adressesRouter.get('/:id', (req: Request, res: Response) => {

  const product = products.find(p => p.id === +req.params.id)
  if (product) {
    res.json(product)
  }
  else {
    res.sendStatus(404)
  }
})

adressesRouter.put('/:id', (req: Request, res: Response) => {

  const product = products.find(p => p.id === +req.params.id)
  if (product) {
    product.title = req.body.title
    res.status(200)
    res.json(product)
  }
  else {
    res.sendStatus(404)
  }
})