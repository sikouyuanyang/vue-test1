<template>
  <div>
    <!-- <a-button type="primary">Add</a-button> -->
    <button @click="Test_Open">测试开</button>
    <button @click="Test_Close">测试关</button>
  </div>
</template>

<!-- <script>
  import { Button } from 'ant-design-vue';
  // import { Button, Space } from 'antd';
  const ButtonGroup = Button.Group;

  export default {
    components: {
      AButton: Button,
      AButtonGroup: ButtonGroup,
    },
  };
</script> -->

<script>
import axios from "axios"
export default {
  name: 'Test2',
  methods:{
    Test_Open(){
      axios({
          method:"get",
          // url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
          url:"http://127.0.0.1:8000/test1/test_tx3/"
      }).then(res => {
          // console.log(res.data.chengpinDetails[0])
          // this.temperature = res.data.chengpinDetails[0]
          console.log(res)
          // this.wsdcgq1 = res.data.wsdcgqs[0]
      })
    },
    Test_Close(){
      axios({
          method:"get",
          // url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
          url:"http://127.0.0.1:8000/test1/test_tx4/"
      }).then(res => {
          // console.log(res.data.chengpinDetails[0])
          // this.temperature = res.data.chengpinDetails[0]
          console.log(res)
          // this.wsdcgq1 = res.data.wsdcgqs[0]
      })
    },
  }
}
</script>