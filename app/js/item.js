import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import {DOUBLE_CLICK,CHECK_CHANGE,REMOVE,TXT_CHANGE,BLUR}from '../type/liType'

class Item extends Component {
	doubleClick(e){
		this.props.callBack(DOUBLE_CLICK,this.props.sid);
	}
	showDel(e){
		
		this.refs.delA.style.display='inline-block';
	}
	hideDel(e){
		this.refs.delA.style.display='none';
	}
	checkboxChange(e){
		this.props.callBack(CHECK_CHANGE,this.props.sid,e.target.checked);
	}
	removeLi(e){
		this.props.callBack(REMOVE,this.props.sid);
	}
	change(e){
		this.props.callBack(TXT_CHANGE,this.props.sid,e.target.value);
	}
	inputblur(e){
		this.props.callBack(BLUR,this.props.sid,e.target.value);
	}
	componentDidUpdate(props,state){
		this.props.edit ? this.refs.inputTxt.focus():void(0);
	}
	render () {
		let editDiplay = {display: this.props.edit?'block':'none'};
		let diplay = {display: this.props.edit?'none':'block'};
		return (
			<li ref='itemLi'>
				<div ref='itemDiv' 
				onDoubleClick={this.doubleClick.bind(this)}
				id='liItem'
				style={diplay}
				onMouseEnter={this.showDel.bind(this)}
				onMouseLeave={this.hideDel.bind(this)}>
					<input type="checkbox"
					onClick={this.checkboxChange.bind(this)}
					checked={this.props.completed}
					ref='checkbox'/>

					<label ref='liLabel' 
					className={this.props.completed}>
					{this.props.text}
					</label>

					<a ref='delA' onClick={this.removeLi.bind(this)}>x</a>
				</div>
					<input id='itemEdit' 
					ref='inputTxt'
					style={editDiplay}
					value={this.props.text}
					onChange={this.change.bind(this)}
					onBlur={this.inputblur.bind(this)}
					type='text'/>
			</li>
		)
	}
}

module.exports=Item;