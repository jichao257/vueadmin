/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
    return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy (obj, cache = []) {
    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    // if obj is hit, it is in circular structure
    const hit = find(cache, c => c.original === obj)
    if (hit) {
        return hit.copy
    }

    const copy = Array.isArray(obj) ? [] : {}
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy
    })

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache)
    })

    return copy
}

// 提取 form 规则中的参数
export function getParams (form, p = {}) {

    _.forEach(form, function (item) {

        if (!_.isEmpty(item.value) || _.isNumber(item.value)) {
            switch (item.type) {
                case 'cascader':
                    _.forEach(item.valueKey, function (v, k) {
                        p[v] = item.value[k];
                    });
                    break;

                default:
                    p[item.name] = item.value;

            }
        };

    });

    return p;
}

// 解析访问接口的返回信息 判断是否请求成功
export function notify (data) {

    if (_.isEmpty(data.ServerNo)) {
        return {
            title: '错误',
            type: 'error',
            message: '请求服务器出错了，请确认您的网络是否通畅！！！'
        }
    }

    switch (data.ServerNo) {
        case 'SN200':
            return {
                title: '成功',
                type: 'success',
                message: '您的请求成功了！'
            }
            break;

        case 'SN400':
            return {
                title: '警告',
                type: 'warning',
                message: '您请求的参数有误！'
            }
            break;

        case 'SN500':
            return {
                title: '错误',
                type: 'error',
                message: '请求服务器出错了，请确认您的网络是否通畅！'
            }
            break;

        case 'SN001':
            return {
                title: '错误',
                type: 'error',
                message: '您没有执行该请求的权限！'
            }
            break;

        default:
            return {
                title: '警告',
                type: 'warning',
                message: data.ResultInfo
            }

    }
}
