class TodoMySQLRepository {
    // demo code 
    insert(todoText){
        mysql.exec(`Insert into todos (todoText) values (${todoText})`)
    }
    getAll(){
        mysql.exec(`Select * from TODOS`);
    }
    get(id){
        mysql.exec(`Select * from todos where id = ${id}`);
    }
}

module.exports = TodoMySQLRepository;