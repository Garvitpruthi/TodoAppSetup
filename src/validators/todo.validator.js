function createTodoValidator(req, res, next){
    if(!req.body.todoText){
        return res.json({msg: 'Invalid request'});
    }

    // if u are sending everthing required
    next();
}

module.exports = {
    createTodoValidator
}