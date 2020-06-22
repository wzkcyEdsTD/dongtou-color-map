<!--
 * @Author: eds
 * @Date: 2020-06-22 09:18:44
 * @LastEditTime: 2020-06-22 16:18:41
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \dongtou-color-map\src\App.vue
--> 
<template>
  <div id="app">
    <header class="app-header">
      <img :src="headerOn" />
    </header>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class App extends Vue {
  private headerOn = require("@/assets/image/header.png");
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  .app-header {
    position: fixed;
    z-index: 2;
    overflow: hidden;
    width: 100%;
    > img {
      width: 100%;
    }
  }
}
</style>
