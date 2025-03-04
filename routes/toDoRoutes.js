const {Router} = require('express');
const { getTodo, saveTodo, updateTodo, deleteTodo } = require('../contollers/toDoController');

const router = Router();

router.get('/', getTodo);
router.post('/save', saveTodo);
router.post('/update', updateTodo);
router.post('/delete', deleteTodo);

module.exports = router;