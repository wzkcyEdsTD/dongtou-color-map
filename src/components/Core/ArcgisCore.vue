<!--
 * @Author: eds
 * @Date: 2020-06-22 09:50:52
 * @LastEditTime: 2020-06-24 09:57:43
 * @LastEditors: eds
 * @Description: 
 * @FilePath: \dongtou-color-map\src\components\Core\ArcgisCore.vue
--> 
<template>
  <div />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MAP_INIT_OPTION, YX, STANDARD, LAYER, TDTIMAGE2019 } from "@/config";

@Component({})
export default class ArcgisCore extends Vue {
  @Prop({ default: "ARCGIS_MAP" }) private mapId!: number;

  //    esri object <T>
  public map: any;
  public view: any;

  //    initMap Promise<Boolean>
  public initMap(mapId: string, zoom?: number): Promise<boolean> {
    const {
      Map,
      MapView,
      TileLayer,
      VectorTileLayer
    } = (this as any).$ARCGIS_API;
    return new Promise(resolve => {
      this.map = new Map({
        layers: [
          new TileLayer({
            id: "TDTIMAGE2019",
            url: TDTIMAGE2019,
            visible: true
          }),
          // new TileLayer({ id: "YX", url: YX, visible: false }),
          new VectorTileLayer({
            id: "STANDARD",
            url: STANDARD,
            visible: false
          }),
          new VectorTileLayer({ id: "LAYER", url: LAYER, visible: false })
        ]
      });
      this.view = new MapView({
        ...MAP_INIT_OPTION,
        container: mapId,
        map: this.map
      });
      this.view.ui._removeComponents(["zoom", "attribution"]);
      resolve(true);
    });
  }
}
</script>
