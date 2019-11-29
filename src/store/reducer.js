import {Already,NotLoggedIn,loginFunc} from './actionList'
import states from './state'
var reducer = (state = states, action) => {
    console.log(state)
    switch (action.type) {
        case Already:
            return {
                ...state,isLogin:true
            }
        case NotLoggedIn:
            return {
                ...state,isLogin:false
            }
        case loginFunc:
            console.log(action.data)
                return{
                    ...state
                }
        default:
            return {
                ...state
            }
    }
}
export default  reducer