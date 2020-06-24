/*
 * @Author: eds
 * @Date: 2020-06-22 09:56:16
 * @LastEditTime: 2020-06-24 10:02:08
 * @LastEditors: eds
 * @Description:
 * @FilePath: \dongtou-color-map\src\components\Map\Arcgis\Arcgis.ts
 */
interface MapPoint {
  x: number;
  y: number;
}
interface Event {
  mapPoint: MapPoint;
}

/**
 * map init
 * @param {JSX.ElementClass} context
 * @returns {Promise<boolean>}
 */
function doMassMap(context: JSX.ElementClass): Promise<boolean> {
  return new Promise(resolve => {
    const { view } = context as any;
    view.on("click", (evt: any) => {
      console.log(evt);
    });
    resolve(true);
  });
}

/**
 * map switch
 * @param {JSX.ElementClass} context
 * @param {number} force
 * @returns {Promise<boolean>}
 */
function doSwitchMap(
  context: JSX.ElementClass,
  force: number
): Promise<boolean> {
  return new Promise(resolve => {
    const { map } = context as any;
    ["TDTIMAGE2019", "STANDARD", "LAYER"].map((v, index) => {
      map.findLayerById(v).visible = index == force;
    });
    resolve(true);
  });
}

export { doMassMap, doSwitchMap };
