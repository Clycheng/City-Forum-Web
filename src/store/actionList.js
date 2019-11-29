import axios from 'axios'
// 已登录状态
export const Already = (e) => {
    return {
        type: 'Already',
        data: e
    }
}
// 未登录状态
export const NotLoggedIn = (e) => {
    return {
        type: 'NotLoggedIn',
        data: e
    }
}
// 更新用户信息
export const ChangeUser = (e) => {
    return {
        type: 'ChangeUser',
        data: e
    }
}

// 登录函数
export const loginFunc = (name, password) => {
    return(
        dispatch => {
            axios.post(
                '/api',
                {
                    params: {
                        name: name,
                        password: password
                    }
                }
            ).then((res) => {
                console.log(res)
                dispatch(ChangeUser(res.data.message))
            })
    
        }
    )
}