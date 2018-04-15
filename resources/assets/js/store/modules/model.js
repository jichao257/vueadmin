import * as types from '../mutation-types'
import resource from '../../api/resource'
import {getParams, notify} from '../../common/helpers'
var _ = require('lodash');

// model 类
export default class Model {

    constructor(config) {

        this.namespaced = true;

        // state
        this.state = {
            data: []
        };

        // getters
        this.getters = {};

        // mutations
        this.mutations = {

            // 修改 browse 中搜索表单绑定的数据
            [types.UPDATE_BROWSE_FORM] (state, request) {
                let option = request.option;
                state[option]['browse']['form'][request.index]['value'] = request.value;
            },

            // 修改 add 中添加表单绑定的数据
            [types.UPDATE_STORE_FORM] (state, request) {
                let option = request.option;
                state[option]['form'][request.index]['value'] = request.value;
            },

            // 修改 edit 中修改表单绑定的数据
            [types.UPDATE_BROWSE_DIALOG] (state, request) {
                let option = request.option;
                let editOption = request.editOption;
                state[option][editOption]['form'][request.index]['value'] = request.value;
            },

            // 点击浏览页表格右侧的按钮时 如果跳转路由的话 则初始化数据
            [types.ROUTE_INIT] (state, request) {

                let option = request.option;
                let config = state.config;
                let form = state[option]['form'];
                let data = state.data[request.index];

                _.forEach(form, function (v, i) {

                    switch (v.type) {
                        case 'hidden':
                            if (v.pattern == 'key') {
                                v.value = data[config.pri];
                            }
                            break;

                        case 'label':
                            if (v.pattern == 'key') {
                                v.value = data[config.pri];
                                v.text = data[config.text];
                            }
                            break;
                    }

                })

            },

            // 浏览页 查询列表
            [types.INDEX] (state, request) {
                let option = request.option;
                state.data = request.data;
                state[option]['browse']['page']['size'] = request.per_page;
                state[option]['browse']['page']['total'] = request.total;
            },

            // 添加页 查询列表
            [types.STORE] (state, request) {
                state.data.unshift(request.data);
            },

            // 执行修改
            [types.UPDATE] (state, request) {
                state.data.splice(request.index, 1, request.data);
            },

            // 删除
            [types.DESTORY] (state, index) {
                state.data.splice(index, 1);
            },

            // 初始化修改面板数据
            [types.EDIT] (state, request) {
                let option = request.option;
                let editOption = request.editOption;
                let data = request.data;
                let form = state[option][editOption]['form'];

                _.forEach(form, function (item, index) {
                    item.value = data[item.name];
                });

            },

        };

        this.actions = {

            // 修改 browse 中搜索表单绑定的数据
            [types.UPDATE_BROWSE_FORM] ({ commit, rootState }, request) {
                request['option'] = rootState.option;
                commit(types.UPDATE_BROWSE_FORM, request);
            },

            // 修改 browse 中搜索表单绑定的数据
            [types.UPDATE_STORE_FORM] ({ commit, rootState }, request) {
                request['option'] = rootState.option;
                commit(types.UPDATE_STORE_FORM, request);
            },

            // 修改 browse 中搜索表单绑定的数据
            [types.UPDATE_BROWSE_DIALOG] ({ commit, rootState }, request) {
                request['option'] = rootState.option;
                commit(types.UPDATE_BROWSE_DIALOG, request);
            },

            // 点击浏览页表格右侧的按钮时 如果跳转路由的话 则初始化数据
            [types.ROUTE_INIT] ({ commit, rootState }, request) {
                request['option'] = rootState.option;
                commit(types.ROUTE_INIT, request);
            },

            // 浏览页面 搜索的方法
            [types.INDEX] ({ state, commit, rootState }, page) {

                // 获取请求参数
                let option = rootState.option;
                let config = state.config;

                // 默认使用 option 中配置的 route 如果没有配置 则使用 module 中配置的 route
                let route = state[option]['browse']['route'];
                if (route === undefined) {
                    route = config.route.default;
                } else {
                    route = config.route[route];
                }

                let params = getParams(state[option]['browse']['form'], {page: page});

                // 执行添加
                return new Promise((resolve, reject) => {

                    resource.index(route, params).then((response) => {

                        let res = notify(response.data);
                        let p = response.data.ResultData;

                        p['option'] = option;
                        commit(types.INDEX, p);

                        resolve({notify: res});

                    }).catch((error) => {
                        let res = notify(error);
                        reject({notify: res});
                    })
                });

            },

            // 添加页面 添加数据方法
            [types.STORE] ({ state, commit, rootState }) {

                // 获取请求参数
                let option = rootState.option;
                let config = state.config;
                let params = getParams(state[option]['form']);

                // 默认使用 option 中配置的 route 如果没有配置 则使用 module 中配置的 route
                let route = state[option]['route'];
                if (route === undefined) {
                    route = config.route.default;
                } else {
                    route = config.route[route];
                }

                // 执行添加
                return new Promise((resolve, reject) => {

                    resource.store(route, params).then((response) => {
                        let res = notify(response.data);
                        let data = response.data.ResultData;
                        if (res.type == 'success' && !_.isEmpty(data)) {
                            commit(types.STORE, {data: data});
                        }
                        resolve({notify: res});
                    }).catch((error) => {
                        let res = notify(error);
                        reject({notify: res});
                    });
                });

            },

            // 添加页面 添加数据方法
            [types.UPDATE] ({ state, commit, rootState }, request) {

                // 获取请求参数
                let option = rootState.option;
                let editOption = request.editOption;
                let config = state.config;
                let params = getParams(state[option][editOption]['form']);

                let id = state.data[request.index][config.pri];

                // 默认使用 option 中配置的 route 如果没有配置 则使用 module 中配置的 route
                let route = state[option][editOption]['route'];
                if (route === undefined) {
                    route = config.route.default;
                } else {
                    route = config.route[route];
                }

                // 执行添加
                return new Promise((resolve, reject) => {

                    resource.update(route, id, params).then((response) => {
                        let res = notify(response.data);
                        let data = response.data.ResultData;
                        if (res.type == 'success' && !_.isEmpty(data)) {
                            request.data = data;
                            commit(types.UPDATE, request);
                        }
                        resolve({notify: res});
                    }).catch((error) => {
                        let res = notify(error);
                        reject({notify: res});
                    });

                });

            },

            // 浏览页面 删除方法
            [types.DESTORY] ({ state, commit, rootState }, index) {

                // 获取请求参数
                let option = rootState.option;
                let config = state.config;
                let id = state.data[index][config.pri];

                // 默认使用 option 中配置的 route
                let route = config.route.default;

                // 执行删除
                return new Promise((resolve, reject) => {

                    resource.destory(route, id).then((response) => {
                        let res = notify(response.data);
                        if (res.type == 'success') {
                            commit(types.DESTORY, index);
                        }
                        resolve({notify: res});
                    }).catch((error) => {
                        let res = notify(error);
                        reject({notify: res});
                    });
                });

            },

            // 初始化修改面板数据
            [types.EDIT] ({ state, commit, rootState }, request) {

                // 获取请求参数
                let option = rootState.option;
                let config = state.config;
                let editOption = request.editOption;
                let id = state.data[request.index][config.pri];

                // 默认使用 option 中配置的 route 如果没有配置 则使用 module 中配置的 route
                let route = state[option][editOption]['route'];
                if (route === undefined) {
                    route = config.route.default;
                } else {
                    route = config.route[route];
                }

                // 执行删除
                return new Promise((resolve, reject) => {

                    resource.edit(route, id).then((response) => {
                        let res = notify(response.data);
                        let data = response.data.ResultData;
                        if (res.type == 'success') {
                            request.data = data;
                            request.option = option;
                            commit(types.EDIT, request);
                        }
                        resolve({notify: res, data: data});
                    }).catch((error) => {
                        let res = notify(error);
                        reject({notify: res});
                    });
                });
            },

        }

        this.init(config);
    }

    /**
     * 初始化 module 覆盖掉默认配置
     *
     * @param config
     */
    init (config) {

        // 循环配置文件 替换 model 中重复的项目
        // state
        if (!_.isEmpty(config.state)) {
            _.forEach(config.state, function(val, key) {
                this.state[key] = val;
            }.bind(this));
        }

        // getters
        if (!_.isEmpty(config.getters)) {
            _.forEach(config.getters, function(val, key) {
                this.getters[key] = val;
            }.bind(this));
        }

        // mutations
        if (!_.isEmpty(config.mutations)) {
            _.forEach(config.mutations, function(val, key) {
                this.mutations[key] = val;
            }.bind(this));
        }

        // actions
        if (!_.isEmpty(config.actions)) {
            _.forEach(config.actions, function(val, key) {
                this.actions[key] = val;
            }.bind(this));
        }

    }

}