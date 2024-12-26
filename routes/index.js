const express =require ('express');

const config = require('../config/data/config.json');
const router = express.Router();
const getUrlPrefix = config.app.prefix; 

const registerController = require('../controllers/register')
const loginController = require('../controllers/login')
const createTodoController = require('../controllers/createTodo')

console.log('getUrlPrefix',getUrlPrefix);

router.get(getUrlPrefix + '/ping',(req,res)=>{
    res.status(200).json({
        success: true,
        message: "pong"
    });
});

router.post(getUrlPrefix + '/register',(req,res)=>{
    registerController.register(req,res)   
});
router.post(getUrlPrefix + '/login',(req,res)=>{
    loginController.login(req,res)   
});
router.post(getUrlPrefix + '/createTodo',(req,res)=>{
    createTodoController.createTodo(req,res)   
});


module.exports = router;