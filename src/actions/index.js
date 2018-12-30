import { GET_TODOS_LIST, TODO_SAVED, TODO_DELETED, TODO_COMPLETED } from "./types";


export const markComplete = (id) => {
    var itemToUpdate = realm.objects("Todo").filtered("id = $0",id);
    if(itemToUpdate!=null && itemToUpdate.length>0){
        realm.write(() => {
            realm.create('Todo', {
                id: id, 
                isComplete:true
            }, true);
        });
    }
    var payLoad = getList();
    return {
        type: TODO_COMPLETED,
        payload: payLoad
    };
};

export const deleteTodo = (id) => {
    realm.write(() => {
        realm.delete(realm.objects("Todo").filtered("id=$0",id));
    })
    var payLoad = getList();
    return {
        type: TODO_DELETED,
        payload: payLoad
    };
};

export const getTodosList = () => {
    var payLoad = getList();
    return {
        type: GET_TODOS_LIST,
        payload: payLoad
    };
};

export const toDoSaved = () => {
    var payLoad = getList();
    return {
        type: TODO_SAVED,
        payload: payLoad
    };
};

function getList(){
    const todosList = realm.objects('Todo');
    var todosPayload=[];
    for(var todo in todosList){
        todoItem={
            "id":todosList[todo].id,
            "description":todosList[todo].description,
            "tagColor":todosList[todo].tagColor,
            "tstamp":todosList[todo].tstamp,
            "isComplete":todosList[todo].isComplete,
        }
        todosPayload.push(todoItem);
    }
    return todosPayload;
}
