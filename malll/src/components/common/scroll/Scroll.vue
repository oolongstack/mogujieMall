<template>
  <div class="wrapper" ref="wrapper">
      <div>
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
      return{
          scroll: null
      }
      },
      props:{
          probeType:{
              type:Number,
              default:0
          },
         pullUpLoad:{
             type:Boolean,
             default:false
         }
      },
    mounted(){
        //创建对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            click:true,
            pullUpLoad:this.pullUpLoad
        })
        //监听滚动事件
        this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
        })
        //监听上拉加载更多
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })
    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        }
    }
}
</script>

<style scoped>

</style>