import React, { Component } from 'react'
import { Input, Menu, Icon } from 'antd';
import './nav.css'
const { Search } = Input;
const { SubMenu } = Menu;

export default class Nav extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div>
                <nav>
                    <div className="logo-warp">
                        <img src="http://www.chengxiaolei.top/wp-content/uploads/2018/11/logo-1.png" alt="" />
                    </div>
                    <div className="search">
                        <Search size="large" placeholder="搜索帖子" onSearch={value => console.log(value)}  enterButton />
                    </div>
                    <div className="menu">
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
                </nav>

            </div>
        )
    }
}