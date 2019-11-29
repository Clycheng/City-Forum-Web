import React, { Component } from 'react'
import { Input } from 'antd';
import {connect} from 'react-redux'
import NoLogin from './child/NoLogin'
import {Already,NotLoggedIn} from '../store/actionList'
import './nav.css'
const { Search } = Input;


 class Nav extends Component {
   
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
                        <NoLogin/>
                    </div>
                  
                </nav>

            </div>
        )
    }
}
const MapStateToPorps =(state)=> {
    return {
        state
    }
}
const actionCreators = {Already,NotLoggedIn}
export default connect(MapStateToPorps,actionCreators)(Nav)