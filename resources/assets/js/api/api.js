
export default {

    // get 请求
    get (url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params
            }).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error);
            });
        })
    },

    // post 请求
    post (url, params = {}) {
        return new Promise((resolve, reject) => {

            axios.post(url, params).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error);
            });

        })
    },

    // delete 请求
    delete (url, params = {}) {
        return new Promise((resolve, reject) => {

            axios.delete(url, params).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error);
            });

        })
    },

    // delete 请求
    put (url, params = {}) {
        return new Promise((resolve, reject) => {

            axios.put(url, params).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error);
            });

        })
    },

}
