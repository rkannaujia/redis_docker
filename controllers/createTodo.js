const Todo = require('../models/todo.js');
const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(403).json({
                success: false,
                message: "All fileds are required"
            })
        }
        //we can use =>await  await Todo.create({title,desc:description})
        const todo = new Todo({title,desc:description});
        todo.save();

        return res.status(201).json({
            success: true,
            message: "ToDo created",
            todo
        })
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

module.exports.createTodo = createTodo