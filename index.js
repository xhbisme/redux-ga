// import React from 'react'
import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Index from './app/js/index'
import './app/style/todo.css'
import create from './app/store/store'

let stores=create();

/*class App extends Component {
	render () {
		
		return (
			<Index></Index>
		)
	}
}*/
render(
	<Provider store={stores}><Index></Index></Provider>, 
document.getElementById('contain'))
