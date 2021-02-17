import {
    ADD_COUNT,
    ADD_GOODS
} from './mutations-type'
export default {
    //有逻辑的代码一般放到actions
    //参数context上下文 可以写成{state,commit}进行对象解构
    addCart(context,payload){
        // let oldProduct =null
        // for (let item of state.cartList){
        //     if(item.iid === payload.iid){
        //         oldProduct = item
        //     }
        // }
        return new Promise((resolve, reject)=>{
            //find函数 查找数组中之前有没有该商品
        let oldProduct = context.state.cartList.find(item => payload.iid === item.iid)
        //如果有 商品的数量count加一 如果没有 将新商品数量赋值为1 然后push入数组内
        if(oldProduct){
            // oldProduct.count += 1
            context.commit(ADD_COUNT,oldProduct)
            resolve('商品数量加一');
        }else{
            payload.count = 1
            // context.state.cartList.push(payload) 
            context.commit(ADD_GOODS,payload)
            resolve('添加购物车成功')
        }
        // console.log(context.state.cartList);
        
        })
    }
}