import api from './api'

// resource 请求

export default {

    index (route, params) {
        return api.get(route, params);
    },

    show (route, id, params = {}) {
        let r = _.trimEnd(route, '/') + '/' + id;
        return api.get(r, params);
    },

    store (route, params) {
        return api.post(route, params);
    },

    destory (route, id, params = {}) {
        let r = _.trimEnd(route, '/') + '/' + id;
        return api.delete(r, params);
    },

    edit (route, id, params = {}) {
        let r = _.trimEnd(route, '/') + '/' + id + '/edit';
        return api.get(r, params);
    },

    update (route, id, params = {}) {
        let r = _.trimEnd(route, '/') + '/' + id;
        return api.put(r, params);
    },

}
