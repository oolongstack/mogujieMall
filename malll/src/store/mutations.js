import {
    ADD_COUNT,
    ADD_GOODS
} from './mutations-type'

export default {
    [ADD_COUNT](state,payload){
      payload.count ++
    },
    [ADD_GOODS](state,payload){
      payload.checked = true
      state.cartList.push(payload)
    }
  }