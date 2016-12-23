import React, {Component, PropTypes} from 'react';
import test from 'ava';
import {assert,expect,use,should} from 'chai';
import {mount, render, shallow} from 'enzyme';

should(); //修改 `Object.prototype`
// var chai = require('chai');  
// var assert = chai.assert;    // Using Assert style
// var expect = chai.expect;    // Using Expect style
// var should = chai.should();  // Using Should style

var foo =()=>{
    return 1;
}
var bar =()=>{
    return 1;
}

test('foo', t => {
    expect(foo()).to.equal(bar());
    // t.pass();
});
