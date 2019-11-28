import {Already,NotLoggedIn} from './actionList'
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
        default:
            return {
                ...state
            }
    }
}
export default  reducer