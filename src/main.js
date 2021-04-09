/*
 * @Author: your name
 * @Date: 2020-11-10 14:24:29
 * @LastEditTime: 2021-03-13 13:05:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-Gmdss\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import dataV from '@jiaminghi/data-view'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css';
import ECharts from "vue-echarts";
import "echarts";

Vue.use(dataV)
Vue.use(ViewUI)
Vue.component('v-chart', ECharts)
Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
