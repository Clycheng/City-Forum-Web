import React, { Component } from 'react'
import { Menu,Drawer,  Icon, Dropdown } from 'antd';
import { connect } from 'react-redux'
import { Already, NotLoggedIn } from '../../store/actionList'
import  WrappedNormalLoginForm from './LoginModel/index'
class Menus extends Component {


    render() {
        let { isLogin } = this.props
        if (!isLogin) {
            return <NoLogin />
        } else {
            return <Persons />
        }



    }
}
// 下单菜单组件
const SMenu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                写文章    <Icon type="edit" />
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
class Persons extends Component {
    render() {
        return (
            <div>
                <Dropdown overlay={SMenu}>

                    <em className="ant-dropdown-link" >
                        个人中心 <Icon type="down" />
                    </em>
                </Dropdown>,
            </div>
        )
    }
}


// 未登录组件

class NoLogin extends Component {
    state = {
        current: 'mail',
        visible: false, 
        placement: 'top'
    };
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    onClose = () => {
        this.setState({
          visible: false,
        });
      };
      showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    render() {
        return (
            <div>
                 <Drawer
                title="登录"
                height = '300px'
                placement={this.state.placement}
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                headerStyle = {{
                    textAlign:'center',
                    fontWieght:"bold"
                }}
                >
                    
                    <div id = "loginFromWarp" style = {{
                        maxWidth:'25%',
                        margin:'0 auto'
                    }} >
                        <WrappedNormalLoginForm/>
                    </div>
                </Drawer>
                
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item onClick={this.showDrawer} key="mail">
                        <Icon type="login" />
                        登录

                        </Menu.Item>

                    <Menu.Item key="register"  >
                        <Icon type="user-add" onClick = {this.demo}/>
                        注册

                        </Menu.Item>
                </Menu>
            </div>
        )
    }
}


export default connect((state) => ({ isLogin: state.isLogin }), { Already, NotLoggedIn })(Menus)