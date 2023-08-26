import express, { Request, Response } from 'express'
import assert from "assert";
const app = express()
const port = process.env.PORT || 5000


const jsonBodyMiddlewaew = express.json()
app.use(jsonBodyMiddlewaew)


const products = [{ id: 1, title: 'tomate' }, { id: 2, title: 'orenge' }]
const adresses = [{ id: 1, value: 'Gorkoko 73' }, { id: 2, value: 'Mira 4' }]

app.get('/products', (req: Request, res: Response) => {
    if (req.query.title) {
        let serchString = req.query.title.toString()
        res.json(products.filter(p => p.title.indexOf(serchString) > - 1))
    }
    res.json(products)
})

app.post('/products', (req: Request, res: Response) => {
    const newProduct = { id: +(new Date()), title: req.body.title }
    products.push(newProduct)
    res.status(201)
    res.json(newProduct)
})

app.get('/products/:productTitle', (req: Request, res: Response) => {
    const productTitle = req.params.productTitle
    const product = products.find(p => p.title === productTitle)
    if (product) {
        res.json(product)

    }
    else {
        res.sendStatus(404)
    }
})

app.get('/products/:id', (req: Request, res: Response) => {

    const product = products.find(p => p.id === +req.params.id)
    if (product) {
        res.json(product)
    }
    else {
        res.sendStatus(404)
    }
})

app.put('/products/:id', (req: Request, res: Response) => {

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

app.get('/adresses', (req: Request, res: Response) => {

    if (req.query.value) {
        let serchString = req.query.value.toString()
        res.json(adresses.filter(p => p.value.indexOf(serchString) > - 1))
    }
    res.json(adresses)
})

app.get('/adresses/:id', (req: Request, res: Response) => {

    const adress = adresses.find(p => p.id === +req.params.id)
    if (adress) {
        res.json(adress)
    }
    else {
        res.sendStatus(404)
    }
})

app.delete('/adresses/:id', (req: Request, res: Response) => {
    for (let i = 0; i < adresses.length; i++) {
        if (adresses[i].id === +req.params.id) {
            adresses.splice(i, 1);
            res.status(204)
            return;
        }
    }
    res.status(404)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})