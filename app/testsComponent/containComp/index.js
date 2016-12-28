import React, {Component, PropTypes} from 'react';
import PureComp from '../pureComp/index.js';

class ContainComp extends Component{
    render(){
        return <div className='contain-comp'>
            <span className='contain-comp-span'>{this.props.data+'222'}</span>
            <PureComp />
        </div>
    }
}
module.exports = ContainComp;