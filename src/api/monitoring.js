/*
 * @Author: your name
 * @Date: 2020-11-10 14:49:52
 * @LastEditTime: 2021-03-19 17:55:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-Gmdss\src\api\monitoring.js
 */
import axios from '@/libs/api.request'

export const getUserInfo = id => {
    return axios.request({
      url: '/api/v1/User/GetUserInfoById',
      params: {
        id
      },
      method: 'get'
    })
  }
  
export const getProcedure = id => {
  return axios.request({
    url: '/api/monitor/condition/application',
    params: {
      id
    },
    method: 'get'
  })
}

export const getMonitor = (data) => {
  return axios.request({
    url: '/api/monitor/obtainRealTimeMonitor',
    params: data,
    method: 'get'
  })
}

export const getNetMonitorData = (data) => {
  return axios.request({
    url: '/api/net/getNetMonitorData',
    params: data,
    method: 'get'
  })
}
export const getVersionData = (data) => {
  return axios.request({
    url: '/swaager/fault/getCurrentVersionData',
    params: data,
    method: 'get'
  })
}