const router = require('express').Router();
const { v4 } = require('uuid');
const checkAuth = require('../middleware/checkAuth');

let todos =[];

router.get('/todos', checkAuth, (req,res) => {
    return res.json(todos);
})

router.get('/todos/:id', (req,res) => {
    const { id }=req.params;
    const todo = todos.find(todo => todo.id === id)
    return res.json(todo);
})

router.post('/todos', (req,res) => {
    const title = req.body.title;
    const todo = {
        id:v4(),
        title,
        completed: false
    }
    todos.push(todo);
    return res.json(todos);
})

router.put('/todos/:id', (req,res) => {
    const { id }=req.params;
    const index = todos.findIndex(todo => todo.id === id)
    todos[index].completed = !todos[index].completed;
    return res.json(todos[index]);
})

router.delete('/todos/:id', (req,res) => {
    const { id }=req.params;
    todos = todos.filter(todo => {
        return todo.id !== id
    });
    return res.json(todos);
})

module.exports = router;