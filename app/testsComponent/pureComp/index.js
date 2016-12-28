import React, {Component, PropTypes} from 'react';

const handleClick=(e)=>{
    console.log(123);
    return 123;
}

const PureComp = ()=>{
    return <div className='pure-comp' onClick={handleClick}>123</div>
}
export default PureComp;