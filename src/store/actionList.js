
// 已登录状态
export const Already = (e)=>{
    return{
        type:'Already',
        data:e
    }
}
// 未登录状态
export const NotLoggedIn = (e)=>{
    return{
        type:'NotLoggedIn',
        data:e
    }
}