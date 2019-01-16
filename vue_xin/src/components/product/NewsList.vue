<template>
  <div>
    <moer-box></moer-box>
    <headlines-box class="list-1"></headlines-box>
  </div>
</template>
<script>
import Moer from '../sub/Moer.vue'
import headlines from '../sub/headlines.vue'
export default {
  data(){
    return {

    }
  },
  components:{
    "moer-box":Moer,
    "headlines-box":headlines
  }
}
</script>
<style>
  .list-1{
    position: relative;
    top:48px;
  }
</style>