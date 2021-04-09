/*
 * @Author: your name
 * @Date: 2020-11-13 10:03:39
 * @LastEditTime: 2020-11-24 14:38:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sk007-web-uid:\web\程序\web-Gmdss\src\api\webSoket.js
 */
import config from "@/../config";

const url = config.baseUrl.soket;
const soketTimer = config.baseUrl.soketTimer;
const soketBase = config.baseUrl.soketBase;
const soketOffsetsocket = config.baseUrl.Offsetsocket;
const soketLagsocket = config.baseUrl.Lagsocket;
const soketKafkatopico = config.baseUrl.Kafkatopico;
const soketElasticsearch = config.baseUrl.Elasticsearch;
const soketRadis = config.baseUrl.Radis;


// 服务器状态
export const webServe = () => {
    return `${url}/serversocket/`
  }
//   时间状态
  export const webTimer = () => {
    return `${soketTimer}/servertimesocket/`
  }
//   数据库状态
  export const webBase = () => {
    return `${soketBase}/db/monitor/`
  }
  // 消费偏移量
  export const webOffsetsocket = () => {
    return `${soketOffsetsocket}/kafkaconsumeroffsetsocket/`
  }
  // 消费滞后量
  export const webLagsocket = () => {
    return `${soketLagsocket}/kafkaconsumerlagsocket/`
  }
  // 主题偏移量
  export const webKafkatopico= () => {
    return `${soketKafkatopico}/kafkatopicoffsetsocket/`
  }
  // elasticsearch
  export const webElasticsearch= () => {
    return `${soketElasticsearch}/esstatussocket/`
  }
  // radis
  export const webRadis= () => {
    return `${soketRadis}/redisstatussocket/`
  }