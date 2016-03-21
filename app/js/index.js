import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../action/action'

import Head from './head'
import Body from './body'
import Foot from './foot'

class Index extends Component {
	render () {
		debugger
		return (
			<div>
				<Head {...this.props.actions}></Head>
				<Body {...this.props}></Body>
				<Foot {...this.props}></Foot>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return { todos: state.todoApp.todos };
}

function mapDispatchToProps(dispatch){
	return {actions:bindActionCreators(actionCreators,dispatch)}
}
//mapStateToProps,mapDispatchToProps
//export default connect(state => state)(Index);--这样会注入dispatch方法和全局state（todoApp）
//export default connect(mapStateToProps)(Index);--这样会注入todos和dispatch，因为在函数中将全局state处理过了。
//export default connect(mapStateToProps,actionCreators)(Index);--这样todos和一堆函数在一起，看起来会很乱
/*store带过来的东西不会变，action文件带过来的东西不会变，dispatch也不会变，会变的是自己的处理函数，要怎样处理，就怎样返回*/

export default connect(mapStateToProps,mapDispatchToProps)(Index);