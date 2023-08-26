import express from 'express'
import { router } from '../routers/';
export const app = express()
const port = process.env.PORT || 5000


const jsonBodyMiddlewaew = express.json()
app.use(jsonBodyMiddlewaew)


app.use('/api', router)


export const startServer = () => app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})