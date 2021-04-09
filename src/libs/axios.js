import axios from 'axios'

// const addErrorLog = errorInfo => {
//   const {
//     statusText,
//     status,
//     request: { responseURL }
//   } = errorInfo
//   let info = {
//     type: 'ajax',
//     code: status,
//     mes: statusText,
//     url: responseURL
//   }
//   if (!responseURL.includes('save_error_logger')) {
//     store.dispatch('addErrorLog', info)
//   }
// }
const codeMessage = {
  201: '太棒了，保存成功！',
  202: '您的请求已提交，请耐心等待服务器处理！',
  204: '太棒了，删除成功！',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}
class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig (url) {
    const config = {
      baseURL: this.baseUrl,
      timeout: 30000, // 超时时间
      headers: {
        //
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        // 添加全局的loading...
        if (!Object.keys(this.queue).length) {
          // Spin.show() // 不建议开启，因为界面不友好
        }
        this.queue[url] = true
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 响应拦截
    instance.interceptors.response.use(
      res => {
        this.destroy(url)
        const { data, status } = res
        if (data.status === 200) {
          return { data, status }
        }

        return Promise.reject(data.message)
      },
      error => {
        // let message = codeMessage[error.response.status]
        if (error.response.data && error.response.data.message) {
          message = error.response.data.message
        }
        // Message.error({ content: message, duration: 3 })

        this.destroy(url)
        let errorInfo = error.response
        if (!errorInfo) {
          const {
            request: { statusText, status },
            config
          } = JSON.parse(JSON.stringify(error))
          errorInfo = {
            statusText,
            status,
            request: { responseURL: config.url }
          }
        }
        // addErrorLog(errorInfo)
        return Promise.reject(error)
      }
    )
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(options.url), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
