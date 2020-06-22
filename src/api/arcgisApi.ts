/*
 * @Author: eds
 * @Date: 2020-06-22 10:14:58
 * @LastEditTime: 2020-06-22 16:32:11
 * @LastEditors: eds
 * @Description:
 * @FilePath: \dongtou-color-map\src\api\arcgisApi.ts
 */

import { ARCGIS_OPTION } from "../config";
import { loadModules } from "esri-loader";

export function arcgisApi(fn: Function) {
  //  ARCGIS_API
  loadModules(
    [
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/VectorTileLayer",
      "esri/layers/TileLayer",
      "esri/layers/MapImageLayer",
      "esri/tasks/QueryTask",
      "esri/tasks/support/Query",
    ],
    ARCGIS_OPTION
  ).then(
    ([
      Map,
      MapView,
      VectorTileLayer,
      TileLayer,
      MapImageLayer,
      QueryTask,
      Query,
    ]) => {
      fn &&
        fn({
          Map,
          MapView,
          VectorTileLayer,
          TileLayer,
          MapImageLayer,
          QueryTask,
          Query,
        });
    }
  );
}
