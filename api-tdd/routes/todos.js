var express = require('express');
var router = express.Router();

let todos = [
    {
        id: 1,
        name: 'Do something',
        completed: false,
    },
    {
        id: 2,
        name: 'Do task',
        completed: true    
    }
]

// /todos/
router.get('/', function(req, res, next) {
    res.json(todos);
});

router.get('/:id', function(req, res, next) {
    const { id } = req.params;
    const found = todos.find(todo => todo.id === Number(id));
    
    if(!found) res.status(404).json();
    res.json(found);
});


module.exports = router;
