/*
 * @Author: eds
 * @Date: 2020-06-22 10:16:23
 * @LastEditTime: 2020-06-24 09:52:41
 * @LastEditors: eds
 * @Description:
 * @FilePath: \dongtou-color-map\src\config\index.ts
 */

/* eslint-disable */
/**
 * http api interface url config
 * get env by domain
 * update by eds 2020/3/19
 */
const CONFIG_DEV = {
  ARCGIS_API_URL:
    "https://lysb.lucheng.gov.cn/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/dojo/dojo.js",
  LOCAL_HOST: "http://10.36.213.24/server/rest/services",
  LOCAL_HOST_EXTRA: "http://10.36.213.3/server/rest/services",
  TDT_HOST: "https://services.wzmap.gov.cn/server/rest/services",
};
//  坐标系
const spatialReference = { wkid: 4490 };
//  地图初始配置
const MAP_INIT_OPTION = {
  center: [121.14565505464282, 27.837647782269375],
  zoom: 14,
};
//  图钉
const TO_CONFIG = CONFIG_DEV;
//  环境变量 配置信息获取
const {
  ARCGIS_API_URL,
  // LOCAL_DOMAIN,
} = TO_CONFIG;
//  ARCGIS FOR JS库本地地址
const ARCGIS_OPTION = {
  url: ARCGIS_API_URL,
};

//  洞头大数据底图
const LAYER = `${CONFIG_DEV.LOCAL_HOST_EXTRA}/Hosted/dt_dsjdt/VectorTileServer`;
//  标准版底图
const STANDARD = `${CONFIG_DEV.LOCAL_HOST_EXTRA}/Hosted/BZBGCS2000/VectorTileServer`;
//  二维影像底图
const YX = `${CONFIG_DEV.LOCAL_HOST}/DT/YX_2018_CGC_DT/MapServer`;
//  天地图-招商-影像图2019
const TDTIMAGE2019 = `${CONFIG_DEV.TDT_HOST}/TDT/YX_2019/MapServer`;

export {
  ARCGIS_OPTION,
  CONFIG_DEV,
  MAP_INIT_OPTION,
  spatialReference,
  LAYER,
  STANDARD,
  YX,
  TDTIMAGE2019,
};
