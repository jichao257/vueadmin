import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import Modules from './modules'
import createLogger from './plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        module: '',
        option: '',
        login: 'logout',
        formData: {
            city: [
                {
                    label: '北京',
                    value: 1,
                    children: [
                        {
                            label: '昌平区',
                            value: 10
                        },{
                            label: '朝阳区',
                            value: 11
                        },
                    ]
                },{
                    label: '河北',
                    value: 2,
                    children: [
                        {
                            label: '廊坊',
                            value: 12
                        },{
                            label: '霸州',
                            value: 13
                        },
                    ]
                },
            ]
        }
    },
    actions,
    getters,
    mutations,
    modules: Modules,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
