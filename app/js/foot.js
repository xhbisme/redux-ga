import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'

class Foot extends Component {
	clearAll(){
		this.props.actions.clearAll();
	}
	render () {
		let todos=this.props.todos;
		let canDisplay = {display: todos.length? 'block':'none'};
		let checkedNum=0;
		this.props.todos.map((todo,index)=>{
			todo.completed ? checkedNum++ : void(0);
		});
		
		return (
			<div id="foot" style={canDisplay}>
		 		<b>{todos.length-checkedNum} items left </b>
		 		<a id='footlabel' 
		 		onClick={this.clearAll.bind(this)}>
		 		Clear {checkedNum} completed item
		 		</a>
		 	</div>
		)
	}
}
module.exports=Foot;