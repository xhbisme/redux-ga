
import { createStore } from 'redux'
import {todoReducer} from '../reducer/reducer'

export default function create(initialState){
	return createStore(todoReducer, initialState);
}