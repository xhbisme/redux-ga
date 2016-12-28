import React, {Component, PropTypes} from 'react';

class FuncComp extends Component{
    render(){
        return <div className='func-comp' onClick={()=>{this.props.chData('234')}}>
            <span className='func-comp-span'>{this.props.data+'222'}</span>
        </div>
    }
}
module.exports = FuncComp;