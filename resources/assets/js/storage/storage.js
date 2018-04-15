
/**
* 处理 webstorage 存取
*/
const keys = {
	login: 'login',								// 登陆
	current: 'current',							// 当前 modules
	index: 'index',								// 当前 index 方法中的查询参数
}

// 获取 sessionStorage
export const getSessionStorage = (k) => {
	return sessionStorage.getItem(keys[k]);
}

// 获取 sessionStorage
export const setSessionStorage = (k, v) => {
	return sessionStorage.setItem(keys[k], v);
}

// 获取 sessionStorage
export const clearSessionStorage = () => {
	return sessionStorage.clear();
}