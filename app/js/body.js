import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import {DOUBLE_CLICK,CHECK_CHANGE,REMOVE,TXT_CHANGE,BLUR}from '../type/liType'
import Item from './item'

class Body extends Component {
	callBack(type,sid,value){
		switch(type){
			case DOUBLE_CLICK:
				this.props.actions.editTodo(sid,value);
			break;
			case CHECK_CHANGE:
				this.props.actions.completeTodo(sid,value);
			break;
			case REMOVE:
				this.props.actions.deleteTodo(sid);
			break;
			case TXT_CHANGE:
				this.props.actions.inputTodo(sid,value);
			break;
			case BLUR:
				this.props.actions.blurTodo(sid);
			break;
			default:
			break;
		}
	}
	change(e){
		this.props.actions.completeAll(e.target.checked);
	}
	render () {
		let todos=this.props.todos;
		let canDisplay = {display: todos.length? 'block':'none'};
		let selfMain = this;
		let check = this.props.todos.some(todo=>todo.completed===false);
		return (
			<div id='mainBody' style={canDisplay}>
				<input id='checkAll' ref='checkbox' checked={!check} type='checkbox' onChange={this.change.bind(this)} />
				<label htmlFor='checkbox'> mark all as complete </label>
				<ul>
				{
						todos.map((child,index)=>
							(<Item {...child} 
								key={index} 
								sid={index} 
								callBack={selfMain.callBack.bind(selfMain)} >
								</Item>)
						)
				}
				</ul>
			</div>
		)
	}
}


module.exports=Body;