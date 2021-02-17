import axios from 'axios'

export function request(config) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/m5',
            timeout: 3000
        })
        //请求拦截器
        // instance.interceptors.request.use(config => {
        //     console.log(config);
        //     //返回配置
        //     return config
        // }, err => {
        //     console.log(err+'请求失败');
        // })
        //响应拦截器
        instance.interceptors.response.use(res=>{
            // console.log(res);
            return res.data
        },err=>{
            console.log(err);
        })


        instance(config).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}



