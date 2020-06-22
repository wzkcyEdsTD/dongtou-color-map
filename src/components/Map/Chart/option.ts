/*
 * @Author: eds
 * @Date: 2020-06-22 15:34:00
 * @LastEditTime: 2020-06-22 16:07:32
 * @LastEditors: eds
 * @Description:
 * @FilePath: \dongtou-color-map\src\components\Map\Chart\option.ts
 */

export const option = {
  grid: { containLabel: true, top: 40, bottom: 10, left: 10, right: 10 },
  title: {
    textAlign: "left",
    textStyle: {
      color: "#5da0f8",
    },
    text: "洞头区部门三色预警统计图",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  xAxis: {
    type: "value",
    splitLine: { show: false },
    axisLabel: { show: false },
  },
  yAxis: {
    type: "category",
    axisLabel: {
      color: "#5da0f8",
      fontSize: 16,
    },
    data: ["绿色预警", "黄色预警", "红色预警"],
  },
  series: [
    {
      type: "bar",
      barWidth : 30,
      data: [
        { value: 40, itemStyle: { color: "rgb(0, 255, 0)" } },
        { value: 40, itemStyle: { color: "yellow" } },
        { value: 20, itemStyle: { color: "red" } },
      ],
    },
  ],
};
