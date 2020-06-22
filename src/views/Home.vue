<!--
 * @Author: eds
 * @Date: 2020-06-22 09:18:44
 * @LastEditTime: 2020-06-22 10:44:48
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \dongtou-color-map\src\views\Home.vue
--> 
<template>
  <div class="home">
    <Map />
    <Panel />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Map from "@/components/Map/Map.vue";
import Panel from "@/components/Map/Panel.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { Map, Panel }
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  overflow: hidden;
}
</style>
