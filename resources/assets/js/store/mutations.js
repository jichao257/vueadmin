import * as types from './mutation-types'
import * as storage from '../storage/storage'

/**
 * store mutaions
 *
 * @return export
 * @author 纪超
 */
export default {

    // 切换当前 module
    [types.CHANGE_MODULE] (state, module) {
    	state.module = module;
    },

    // 切换当前 option
    [types.CHANGE_OPTION] (state, option) {
        state.option = option;
    },

    // 修改登录状态
    [types.LOGIN] (state, login) {
    	if (login.username === undefined || login.password === undefined) {
    		state.login = storage.getSessionStorage( 'login' );
    	} else {
    		if (login.username == 'admin' && login.password == 'admin') {
    			storage.setSessionStorage( 'login', 'login' );
    			state.login = 'login';
    		} else {
    			console.log('bad login!');
    		}
    	}
    },

    // 修改登录状态
    [types.LOGOUT] (state) {
        storage.setSessionStorage( 'login', 'logout' );
        state.login = 'logout';
    },

    // 更新缓存
    [types.CACHE] (state, cache) {
        _.forEach(cache, function (item, key) {
        	_.forEach(item, function (i, k) {
                state[key][k] = i;
            })
        })
    }

}
