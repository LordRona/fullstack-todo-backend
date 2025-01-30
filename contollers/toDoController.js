const toDoModel = require('../models/toDoModels');

module.exports.getTodo = async (req, res)=> {
    const toDo =  await toDoModel.find();

    res.send(toDo);
}

module.exports.saveTodo = async (req, res)=> {
    const { text } = req.body;

    toDoModel.create({text})
    .then((data)=>{
        console.log('Data added succefully!..');
        console.log(data);

        res.send(data);
    }).catch(err=>console.log(err)
    )
}

module.exports.updateTodo = async (req, res)=> {
    const {_id, text} = req.body;

    toDoModel.findByIdAndUpdate(_id, {text})
    .then(()=> res.send('Updated successfully!'))
    .catch((err)=> console.log(err)
    );
}

module.exports.deleteTodo = async (req, res)=> {
    const {_id} = req.body;

    toDoModel.findByIdAndDelete(_id)
    .then(()=> res.send('Deleted successfully!'))
    .catch((err)=> console.log(err)
    );
}