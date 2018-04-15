import api from './api'

// 所有接口的访问地址
let url = {
    cache: '/cache'
}

export default {

    // 获取缓存
    index () {
        return api.get(url.cache);
    },

}
