import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
/**
 *backpage:登陆后返回的页面
 * backtype:打开页面的类型[1:redirectTo 2:switchTab]
 */
Vue.prototype.checkLogin = function(backpage,backtype){
	var SUID = uni.getStorageSync('SUID');
	var SRAND = uni.getStorageSync('SRAND');
	var SNAME = uni.getStorageSync('SNAME');
	var SFACE = uni.getStorageSync('SFACE');
	if(SUID == '' || SRAND == '' || SFACE == ''){
		uni.redirectTo({
			url:'../login/login?backpage='+backpage+'&backtype='+backtype
		});
		return false;
	}
	return [SUID,SRAND,SNAME,SFACE];
}
var APITOKEN = 'DAISHUAI';
Vue.prototype.apiServer = 'https://www.orianna.top/index.php?token='+APITOKEN+'&c=';
Vue.prototype.staticServer = 'https://www.orianna.top/';
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
