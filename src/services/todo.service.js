class TodoService {

    constructor (todoRepository){
        this.todoRepository = todoRepository;
    }
    create(todoText){
        // Any bussiness logic u want to exec, u can execute
        
        todoText = todoText.trim().toUpperCase();
        if(todoText.length == 0) return;

        this.todoRepository.insert(todoText);
    }
    getOneTodo(id){
        return this.todoRepository.get(id);
    }
    getAllTodos() {
        return this.todoRepository.getAll();
    }
}

module.exports = TodoService;