<!--
 * @Author: eds
 * @Date: 2020-06-22 09:56:16
 * @LastEditTime: 2020-06-22 16:55:58
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \dongtou-color-map\src\components\Map\Arcgis\Arcgis.vue
--> 
<template>
  <!-- <div class="revitalize_line" :id="MapId" /> -->
  <div class="arcgis_map" :id="MapId" />
</template>

<script lang="ts">
import { Component, Mixins, Watch } from "vue-property-decorator";
import ArcgisCore from "@/components/Core/ArcgisCore.vue";
import { doMassMap, doSwitchMap } from "./Arcgis";

@Component({
  methods: { doMassMap, doSwitchMap }
})
export default class Arcgis extends Mixins(ArcgisCore) {
  protected id: number = +new Date();
  //    Getter/
  get MapId(): string {
    return "arcgis_" + this.id;
  }
  //  mounted
  async mounted(): Promise<void> {
    await this.initMap(this.MapId);
    await doMassMap(this);
    this.eventRegister();
  }
  private eventRegister(): void {
    const { $hub } = this as any;
    $hub.$on("switch-map", async ({ force }: any) => {
      await doSwitchMap(this, force);
    });
  }
}
</script>

<style scoped lang="less">
.arcgis_map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
