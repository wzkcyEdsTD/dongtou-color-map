/*
 * @Author: eds
 * @Date: 2020-06-22 09:18:44
 * @LastEditTime: 2020-06-22 15:42:31
 * @LastEditors: eds
 * @Description:
 * @FilePath: \dongtou-color-map\src\shims-tsx.d.ts
 */

import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }

    //  echart Interface
    interface ChartOption {
      xAxis?: object;
      yAxis?: object;
      series: Array<any>;
      color?: string[];
    }
    //  esri Interface
    interface EsriObject {
      [elem: string]: any;
    }
  }
}
