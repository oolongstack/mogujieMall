<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
//     props: {
//         message: {
//             type: String
//         },
//         show: {
//             type: Boolean,
//             default: false
//         }
//     }
// }
data(){
    return{
        message: '',
        isShow: false
    }
},
methods: {
    show(message='我是默认文字',duration = 1500){
        this.isShow = true
        this.message = message

        setTimeout(() =>{
            this.isShow = false
            this.message = ''
        },duration)
    }
    }
}
</script>

<style>
.toast {
  position: fixed;
  width: 120px;
  height: 30px;
  line-height: 30px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:999
}
</style>