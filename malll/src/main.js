import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import store from './store'
import toast from 'components/common/toast/index.js'
import FastClick from 'fastclick'


Vue.config.productionTip = false
Vue.prototype.$bus=new Vue({})
//安装toast插件
Vue.use(toast)
//解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


// import {request} from './network/request'

// request({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res);
// }).catch(err=>{
//   console.log(err);
// })


//全局的axios及其配置
// axios.defaults.baseURL='http://123.207.32.32:8000',
// axios.defaults.timeout=2000
// //发送并发请求
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:5
//   }
// })]).then(res=>{
// console.log(res);
// })

//axiosshili
// const instance = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
// instance({
//   url:'/home/multidata',

// }).then(res=>{
//   console.log(res);
// })
// instance({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// })
