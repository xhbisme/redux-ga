
import {ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
	COMPLETE_TODO,
	COMPLETE_ALL,
	CLEAR_COMPLETED,
	INPUT_TODO,
	BLUR_TODO,
	CHECK_TODO} from '../type/acType'

const initialState = {
    todos: []
}
function todoApp(state=initialState,action){
	switch(action.type){
		case ADD_TODO:
		return Object.assign({},state,{
			todos:[
				...state.todos,
				{
					text:action.text,
					completed:false,
					edit:false
				}
			]
		});
		case DELETE_TODO:
		return Object.assign({},state,{
			todos:[
				...state.todos.slice(0,action.sid),
				...state.todos.slice(action.sid+1)
				
			]
		});
		case EDIT_TODO:
		return Object.assign({},state,{
			todos:[
				...state.todos.slice(0,action.sid),
				Object.assign({}, state.todos[action.sid], {
					edit: true
				}),
				...state.todos.slice(action.sid+1)
				
			]
		});
		case COMPLETE_TODO:
		return Object.assign({},state,{
			todos:[
				...state.todos.slice(0,action.sid),
				Object.assign({}, state.todos[action.sid], {
					completed: action.bool
				}),
				...state.todos.slice(action.sid+1)
				
			]
		});
		case COMPLETE_ALL:
			let temTodos = [];
			state.todos.map(function(todo,index){
				todo.completed=action.bool;
				temTodos.push(todo);
			})
		return Object.assign({},state,{
			todos: temTodos
		});
		case CLEAR_COMPLETED:
		return Object.assign({},state,{
				todos: state.todos.filter(todo => todo.completed===false)
			});
		case INPUT_TODO:
		return Object.assign({},state,{
			todos:[
				...state.todos.slice(0,action.sid),
				Object.assign({}, state.todos[action.sid], {
					text: action.text
				}),
				...state.todos.slice(action.sid+1)
				
			]
		});
		case BLUR_TODO:
		return Object.assign({},state,{
			todos:[
				...state.todos.slice(0,action.sid),
				Object.assign({}, state.todos[action.sid], {
					edit: false
				}),
				...state.todos.slice(action.sid+1)
				
			]
		});
		default:
		return state;
	}
}

module.exports=todoApp;