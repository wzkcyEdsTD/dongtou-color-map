/*
 * @Author: eds
 * @Date: 2020-06-22 09:56:16
 * @LastEditTime: 2020-06-22 16:55:46
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
      evt;
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
    console.log(force);
    resolve(true);
  });
}

export { doMassMap, doSwitchMap };
