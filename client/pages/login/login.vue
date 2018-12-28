<template>
	<view class="loginbtn">
		<!-- #ifdef MP-WEIXIN -->
		<button  type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">使用微信登录</button>
		<!-- #endif -->
	</view>
</template>

<script>
	var _self,session_key,openid,pageoptions;
	var signtool = require('../../commons/sign.js');
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			getUserInfo:function(info){
				
				/**
				 * 获取unionid
				 var encryptedData = info.mp.detail.encryptedData;
				 var iv = info.mp.detail.iv;
				 uni.request({
				 	url: _self.apiServer+'member&m=wxaes',
				 	method: 'POST',
				 	header:{'content-type':'application/x-www-form-urlencoded'},
				 	data: {
				 		encryptedData:encryptedData,
				 		iv:iv,
				 		session_key:session_key
				 	},
				 	success: res => {
						
					}
				})
				 */
				info = info.mp.detail.userInfo
				var sign = uni.getStorageSync('sign');
				uni.request({
					url: _self.apiServer+'member&m=login',
					method: 'POST',
					header:{'content-type':'application/x-www-form-urlencoded'},
					data: {
						openid:openid,
						name:info.nickName,
						face:info.avatarUrl,
						sign:sign
					},
					success: res => {
						res = res.data;
						if(res.status == 'ok'){
							uni.showToast({title:"登录成功"});
							uni.setStorageSync('SUID',res.data.u_id + '');
							uni.setStorageSync('SRAND',res.data.u_random + '');
							uni.setStorageSync('SNAME',res.data.u_name + '');
							uni.setStorageSync('SFACE',res.data.u_face + '');
							if(pageoptions.backtype == 1){
								uni.redirectTo({url:pageoptions.backpage});
							}else{
								uni.switchTab({url:pageoptions.backpage});
							}
						}else{
							uni.showToast({title:"登录失败"});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		onLoad:function(options){
			signtool.sign(this.apiServer);
			_self = this;
			pageoptions = options;
			// #ifdef MP-WEIXIN
			uni.login({
				success(res) {
					uni.request({
						url: _self.apiServer+'member&m=codeToSession&code='+res.code,
						success: res => {
							session_key = res.data.session_key;
							openid = res.data.openid;
						},
					});
				}
			})
			// #endif
			//#ifdef APP-PLUS
			uni.login({
				success:(res)=>{
					uni.getUserInfo({
						success:function(info){
							uni.request({
								url: _self.apiServer+'member&m=login',
								method: 'POST',
								header:{'content-type':'application/x-www-form-urlencoded'},
								data: {
									openid:info.userInfo.openId,
									name:info.userInfo.nickName,
									face:info.userInfo.avatarUrl
								},
								success: res => {
									res = res.data;
									if(res.status == 'ok'){
										uni.showToast({title:"登录成功"});
										uni.setStorageSync('SUID',res.data.u_id + '');
										uni.setStorageSync('SRAND',res.data.u_random + '');
										uni.setStorageSync('SNAME',res.data.u_name + '');
										uni.setStorageSync('SFACE',res.data.u_face + '');
										if(options.backtype == 1){
											uni.redirectTo({url:options.backpage});
										}else{
											uni.switchTab({url:options.backpage});
										}
									}else{
										uni.showToast({title:"登录失败"});
									}
								},
								fail: () => {},
								complete: () => {}
							});
						},
						fail:function(){
							uni.showToast({
								title:"微信登录失败"
							});
						}
					})
				},
				fail:()=>{
					uni.showToast({
						title:"微信登录失败"
					});
				}
			})
			//#endif
		}
	}
</script>

<style>
.loginbtn{
	padding:50% 2%; width:96%;
}
</style>
