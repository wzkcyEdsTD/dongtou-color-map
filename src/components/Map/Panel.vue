<!--
 * @Author: eds
 * @Date: 2020-06-22 10:42:43
 * @LastEditTime: 2020-06-24 09:58:42
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \dongtou-color-map\src\components\Map\Panel.vue
--> 
<template>
  <div class="page_panel">
    <div class="color_statistic">
      <header>
        <span>三色统计图</span>
      </header>
      <div class="color_div">
        <span v-for="(d,i) in statistic" :key="i">
          <i :class="`warn_${i}`">{{d.percent}}%</i>
          <i>{{d.t}}</i>
        </span>
      </div>
      <div class="color_chart">
        <chartCore :option="$data._option_" />
      </div>
    </div>
    <div class="color_list">
      <header>
        <span>三色预警列表</span>
      </header>
      <ul>
        <li v-for="(d,i) in list" :key="i">
          <span>{{d.t}}</span>
          <span :class="`warn_${d.v}`">
            <i></i>
            {{["绿色","黄色","红色"][d.v]}}预警
          </span>
        </li>
      </ul>
    </div>
    <div class="color_legend">
      <span>图例</span>
      <ul>
        <li v-for="(d,i) in statistic" :key="i">
          <i :class="`warn_${i}_bg`" />
          {{d.t}}
        </li>
      </ul>
    </div>
    <div class="color_switch">
      <span
        v-for="(d,i) in layers"
        :key="i"
        :class="[i == force?'switch_active':'']"
        @click="doSwitchMap(i)"
      >{{d}}</span>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import ChartCore from "@/components/Core/ChartCore.vue";
import { option } from "./Chart/option";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { ["chartCore"]: ChartCore }
})
export default class Panel extends Vue {
  private _option_: JSX.ChartOption = option;
  private layers: string[] = ["影像图", "标准风格", "大数据风格"];
  private force = 0;
  private statistic: object[] = [
    { t: "绿色预警", percent: 40, v: 0 },
    { t: "黄色预警", percent: 40, v: 1 },
    { t: "红色预警", percent: 20, v: 2 }
  ];
  private list: object[] = [
    { t: "洞头公安局", v: 0 },
    { t: "洞头公安局", v: 0 },
    { t: "洞头公安局", v: 0 },
    { t: "洞头公安局", v: 0 },
    { t: "洞头公安局", v: 2 },
    { t: "洞头公安局", v: 0 },
    { t: "洞头公安局", v: 0 },
    { t: "洞头公安局", v: 1 },
    { t: "洞头公安局", v: 0 },
    { t: "洞头公安局", v: 0 },
    { t: "洞头公安局", v: 0 },
    { t: "洞头公安局", v: 1 },
    { t: "洞头公安局", v: 0 }
  ];
  private doSwitchMap(_force_: number) {
    this.force = _force_;
    this.$nextTick(() => {
      (this as any).$hub.$emit("switch-map", { force: this.force });
    });
  }
}
</script>

<style lang="less" scoped>
@import url("./Panel.less");
</style>
