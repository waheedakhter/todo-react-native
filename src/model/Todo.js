export default Todo = { 
    name: 'Todo',
    primaryKey: 'id',
    properties: {
        id : "int",
        tstamp:'int',
        description:'string',
        tagColor:'string',
        isComplete:'bool'
    }
};