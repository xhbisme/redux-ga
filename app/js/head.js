import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'

class Head extends Component {
	keydown(e){
		if((e.keyCode === 13) && ($.trim(this.refs.txt.value)!==''))
		{
			this.props.addTodo(this.refs.txt.value);
			this.refs.txt.value='';
		}
	}
	render () {
		return (
			<div>
				<h1>todo</h1>
				<input type='text' 
				ref='txt' 
				id='txt' 
				placeholder='what needs to be done?' 
				onKeyDown={this.keydown.bind(this)}/>
			</div>
		)
	}
}

module.exports=Head;