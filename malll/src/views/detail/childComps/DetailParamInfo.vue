<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
      <table class="info-size" v-for="(table,index) in paramInfo.sizes" :key="index">
          <tr v-for="(tr,inde) in table" :key="inde">
              <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
          </tr>
      </table>
      <table class="info-param">
          <tr v-for="(info,inde) in paramInfo.infos" :key="inde">
              <td class='info-param-key'>{{info.key}}</td>
              <td class='param-value'>{{info.value}}</td>
          </tr>
      </table>
      <div class="info-img" v-if="paramInfo.image.length !==0">
          <img :src="paramInfo.image" alt="">
      </div>
  </div>
</template>

<script>
export default {
    props: {
        paramInfo:{
            type: Object
        }
    }
}
</script>

<style>
.param-info{
    padding:20px 15px;
    font-size: 14px;
    color:#999;
    border-bottom: 5px solid #f2f5f8
}
.param-info table{
    width:100%;
    border-collapse: collapse;
}
.param-info table td{
    border: 1px solid #999;
    text-align: center;
}
.info-img img{
    width:100%;
}
</style>