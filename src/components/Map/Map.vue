<!--
 * @Author: eds
 * @Date: 2020-06-22 10:05:27
 * @LastEditTime: 2020-06-22 11:01:48
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \dongtou-color-map\src\components\Map\Map.vue
--> 
<template>
  <div class="page_map">
    <Arcgis />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Arcgis from "./Arcgis/Arcgis.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { Arcgis }
})
export default class Map extends Vue {}
</script>

<style lang="less" scoped>
.page_map {
  height: 100%;
}
</style>
