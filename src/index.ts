import express, {json} from 'express'
const app = express()
const port = 3000


const jsonBodyMiddlewaew = express.json()
app.use(jsonBodyMiddlewaew)


const db = {
    courses: [
        { id: 1, title: 'front-end' },
        { id: 2, title: 'bac-end' },
        { id: 3, title: 'devops' },
        { id: 4, title: 'oop' }
    ]
}

app.get('/', (req, res) => {
    res.json({ mess: "hello" })
})

app.get('/curses', (req, res) => {
    const foundCourses = db.courses
    
    if (req.query.title){
        foundCourses.filter(c => c.title.indexOf(req.query.title as string) > -1 )
        res.json(foundCourses)
    }
    res.json(foundCourses)
    
})

app.get('/curses/:id', (req, res) => {

    const foundCours = db.courses.find(c => c.id === +req.params.id)

    if (!foundCours) {
        res.sendStatus(404)
        return
    }

    res.json(foundCours)

})

app.post('/curses', (req,res) => {
  const newCours = {
        id: +(new Date()),
        title: req.body.title
    }
    
    db.courses.push(newCours)
    
    res.json(newCours)
   
})

app.delete('/curses/:id', (req, res) => {

    db.courses = db.courses.filter(c => c.id !== +req.params.id)

    res.sendStatus(204)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})