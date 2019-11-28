import React,{Component} from 'react'
import {  Menu, Icon,Dropdown } from 'antd';
import {connect} from 'react-redux'
import {Already,NotLoggedIn} from '../../store/actionList'

 class Menus extends Component {
   

    render(){
        let {isLogin} = this.props
       if(!isLogin){
           return <NoLogin/>
       }else{
           return <Persons/>
       }
        
       
       
    }
}
// 下单菜单组件
const SMenu = (
    <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        写文章    <Icon  type="edit" />
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
       我的文章<Icon type="copy" />
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
       设置<Icon type="setting" />
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
       log out<Icon type="import" />
      </a>
    </Menu.Item>
  </Menu>
)
class Persons extends Component{
    render(){
        return(
            <div>
            <Dropdown overlay={SMenu}>
           
        <a className="ant-dropdown-link" >
        个人中心 <Icon type="down" />
        </a>
  </Dropdown>,
            </div>
        )
    }
}

class NoLogin extends Component{
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render(){
        return(
            <div>
                 <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="mail">
                        <Icon type="login" />
                            登录
                        </Menu.Item>
                    
                    
                        <Menu.Item key="register">
                        <Icon type="user-add" />
                        注册
                        </Menu.Item>
                    </Menu>
            </div>
        )
    }
}

export default connect((state)=>({isLogin:state.isLogin}), {Already,NotLoggedIn})(Menus)