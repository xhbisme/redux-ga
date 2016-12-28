import React from 'react';
import PureComp from '../app/testsComponent/pureComp/index.js';
import FuncComp from '../app/testsComponent/funcComp/index.js';
import ContainComp from '../app/testsComponent/containComp/index.js';
import {mount, render, shallow} from 'enzyme';

//简单函数测试
const sum = (a, b) => a + b;
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

//组件测试
describe('component test',()=>{
  //纯组件测试
  it('PureComp test',()=>{
     const pureComp = render(<PureComp />);//模拟渲染
     expect(pureComp.text()).toBe("123");
  });
  //容器组件测试
  it('containner component test',()=>{
     const containComp = render(<ContainComp data={'111'} />);//模拟渲染
     expect(containComp.text()).toBe("111222123");
  })
  //组件功能测试
  it('function component test',()=>{
     let bb = '111';
     const funcCompShallow = shallow(<FuncComp data={bb} chData={()=>{bb = '333'}}/>);
     const funcCompRenderBefore = render(<FuncComp data={bb} />);
     expect(funcCompRenderBefore.text()).toBe('111222');
     funcCompShallow.find('.func-comp').simulate('click');//模拟点击
     let funcCompRenderAfter = render(<FuncComp data={bb} />)//再次模拟render
     expect(funcCompRenderAfter.text()).toBe('333222');
  })
})
