import * as types from './mutation-types'
import cache from '../api/cache'

export default {

    // 更新缓存
    [types.CACHE] ({commit}) {
        cache.index().then(function (response) {
            commit(types.CACHE, response.data);
        }).catch(function (error) {
            console.log(error);
        })
    }

}
