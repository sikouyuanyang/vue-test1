<template>
    <div class="test1">
      <h1>温度:{{ wsdcgq1.wd }}</h1>
      <h1>湿度:{{ wsdcgq1.sd }}</h1>
        <button  @click="Open_Map">打开地图</button>
        <iframe class="iframe" src="/static/index0.html" frameborder="0" width="1200" height="300"/>

    </div>
</template>
<script>
    import axios from "axios"
    export default {
        name: 'Test1',
        data(){
            return{
                wsdcgq1:{},
            }
        },
        mounted(){
            // GetWdSd2(){
                setInterval(this.GetWdSd1,3000);
            // }
        },
        methods:{
            GetWdSd1(){
                axios({
                    method:"get",
                    // url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
                    url:"http://127.0.0.1:8000/test1/hello_world/"
                }).then(res => {
                    // console.log(res.data.chengpinDetails[0])
                    // this.temperature = res.data.chengpinDetails[0]
                    console.log(res.data.wsdcgqs[0])
                    this.wsdcgq1 = res.data.wsdcgqs[0]
                })
            },
            Open_Map(){
                // window.open('./index0.html')
                window.open('./Test2.vue')
            }
        }
    }
</script>