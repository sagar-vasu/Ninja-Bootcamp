import express from 'express'
const router = express.Router();
import todoSchema from '../../models/Todo/Todo'




// Get All the Tasks

router.get('/tasks', async (req: express.Request, res: express.Response) => {
    const Todos = await todoSchema.find()
    res.send(Todos)

})


// Add New Task

router.post('/tasks', async (req: express.Request, res: express.Response) => {
    console.log(req.body)
    try {
        const addTask = new todoSchema(req.body)
        await addTask.save()
        res.send({ message: 'Task succesfully added!' })

    } catch (e) {
        res.status(400).send({ message: e.message })
    }

})


// Get Single Datra tasks/:id


router.get('/tasks/:id', async (req: express.Request, res: express.Response) => {
    try {
        const todo = await todoSchema.findOne({})
        res.send(todo)

    } catch (e) {
        res.status(400).send({ message: e.message })
    }

})



//  Update Todo:id

router.put('/tasks/:id', async (req: express.Request, res: express.Response) => {
    try {
        await todoSchema.findByIdAndUpdate({ _id: req.body.id }, {
            isDone: req.body.isDone,
            title: req.body.title,
            description: req.body.description
        })
        res.send({ message: 'Task Updated !' })

    } catch (e) {
        res.status(400).send({ message: e.message })
    }

})



// Delete Task:id

router.delete('/tasks/:id', async (req: express.Request, res: express.Response) => {
    try {
        await todoSchema.findByIdAndDelete({ _id: req.body.id })
        res.send({ message: 'Task Deleted !' })

    } catch (e) {
        res.status(400).send({ message: e.message })
    }

})



module.exports = router
