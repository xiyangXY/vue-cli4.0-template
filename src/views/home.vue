<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- {{getDate(0)}} -->
    <div v-show="data == 1 && data2 == 3 ">123</div>
  </div>
</template>

<script>
// HelloWorld组件
import HelloWorld from '@/components/HelloWorld.vue'
// axios
import commonAxios from '@/api/commonAxios'
// 正则
import regulars from '@/assets/js/regulars'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return {
      data:1,
      data2:3
    }
  },
  methods:{
    init(){
      commonAxios.request('GET',commonAxios.getUrl('musicBroadcasting'),{},res => {
          console.log(res);
      })
    }
  },
  created(){
    this.init();

    // 获取serverConfig 的json文件内容
    console.log(this.serverConfig.url);
  }
}
</script>
