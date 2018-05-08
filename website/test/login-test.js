/* import sinon from 'sinon';
 import {expect} from 'chai';
 import React from 'react';
 import {mount,shallow} from 'enzyme';
 import Login from '../src/components/login/userLogin';

 describe('Login render test',()=>{
     it('test ',()=>{
         let app = mount(<Login/>);
         expect(app.find('AppBar').text()).to.equal('Login');
         expect(app.find('.field2').first().type()).to.equal('password');
     })

     it('should render correctly',()=>{
         let app = shallow(<Login/>);
         expect(app.find('.Login-wrapper').type()).to.equal('div');
     })

     it('should render',()=>{
         let app = mount(<Login/>);
         expect(app.find('TextField').first().text()).to.equal('password');
     })



     it('should render2',()=>{
         let app = mount(<Login/>);
         expect(app.find('TextField').last().prop('type')).to.equal('password');
     })
     it('simulate click',()=>{
         let app = mount(<Login/>);
         app.find('TextField').last().value='123';
         app.find('RaisedButton').simulate('click');
     })
 })
*/
