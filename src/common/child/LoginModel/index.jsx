import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.css';
import {loginFunc} from '../../../store/actionList'
import {connect} from 'react-redux'
class NormalLoginForm extends Component {
  constructor(props){
    super(props)
    const { loginFunc } = this.props 
    this.state = {
      username:"",
      password:""
    }
  }
  handleSubmit = e => {
    e.persist()
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values)
      this.setState({
        username:values.username,
        password:values.password
      })
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loginFunc } = this.props 
    return (
      <Form layout = 'horizontal' onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="http://www.chengxiaolei.top">
            Forgot password
          </a>
          <Button onClick = {()=>{loginFunc(this.state.username,this.state.password)}} block type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default connect((state) => ({ isLogin: state.isLogin }), { loginFunc})(WrappedNormalLoginForm)