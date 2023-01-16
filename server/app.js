const express = require('express');
const cors = require('cors')
const app = express()
const port = 3000

let latestId = 0
const todos = [
  {
    id: 0,
    title: 'Faire mon évaluation Angular',
    completed: false
  }
]

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Your web server works !')
})

app.get('/todos', (req, res) => {
  res.json(todos)
})

app.post('/todo', (req, res) => {
  if (!req.body.title) {
    res.status(400).end()
    return
  }

  const newTodo = {
    id: latestId + 1,
    title: req.body.title,
    completed: false
  }

  todos.push(newTodo)
  latestId = newTodo.id

  res.status(201).json(newTodo)
})

app.delete('/todo/:id', (req, res) => {
  const idTodoToDelete = Number(req.params.id)
  const indexTodoToDelete = todos.findIndex(todo => {
    return todo.id === idTodoToDelete
  })

  if (indexTodoToDelete === -1) {
    res.status(404).end()
    return
  }

  todos.splice(indexTodoToDelete, 1)

  res.status(204).end()
})

app.listen(port, () => {
  console.log(`Web server listening on port ${port}`)
})