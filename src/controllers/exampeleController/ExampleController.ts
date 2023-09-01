import { Request, Response } from "express"
import { statusCode } from "../../constants/statusCode"


const exampleDataMok = [{ id: 1, value: "example1", value1: "test1" }]

class ExampleController {

  getAllExample(req: Request, res: Response) {

    //В этом классе мы ищем все совпадения в квери пораметрах и отаем их в формате json если в пораметрах
    // ни чего нет то тогда выводим все данные

    if (req.query.value) {

      let toStrData = req.query.value.toString()
      res.json(exampleDataMok.filter(p => p.value.indexOf(toStrData) > -1)).
        status(statusCode.OK)

    } else if (req.query.value1) {

      let toStrData = req.query.value1.toString()
      res.json(exampleDataMok.filter(p => p.value1.indexOf(toStrData) > -1)).
        status(statusCode.OK)

    }

    res.json(exampleDataMok).status(statusCode.OK)
  }
  getOneExamle(req: Request, res: Response) {
    // Реализован код как вывести единственный объект даных
    const examplesData = exampleDataMok.find(p => p.id === +req.params.id)
    if (examplesData) {
      res.json(examplesData).status(statusCode.CREATE)
    }
    res.status(statusCode.NOT_FOUND)
  }
  createExample(req: Request, res: Response) {
    const newExampleDataObject = {
      id: +(new Date()),
      value: req.body.value + new Date(),
      value1: req.body.value1 + new Date() + " 1",
    }
    exampleDataMok.push(newExampleDataObject)
  }
  updateExample(req: Request, res: Response) {
    const exampleObject = exampleDataMok.find(p => p.id === +req.params.id)
    if (exampleObject) {
      exampleObject.value = req.body.value
      exampleObject.value1 = req.body.value1
      res.status(statusCode.OK).json(exampleObject)
    }
    else {
      res.sendStatus(statusCode.NOT_FOUND)
    }

  }
  deleteExample(req: Request, res: Response) {
    for (let i = 0; i < exampleDataMok.length; i++) {
      if (exampleDataMok[i].id === + req.params.id) {
        exampleDataMok.splice(i, 1)
        res.status(statusCode.NO_CONTENT)
        return
      }
    }
  }

}

export default new ExampleController()