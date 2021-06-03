var express = require('express');
var router = express.Router();

const todos = [
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
  const { id } = req.body;
  const found = todos.find(todo => todo.id === id);
  res.json(found);
});

module.exports = router;
