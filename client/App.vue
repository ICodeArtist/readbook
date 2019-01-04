<script>
	export default {
		onLaunch: function () {
			
		},
		onShow: function () {
			console.log('App Show')
			uni.setStorageSync('V',0);
			uni.request({
			    url: this.apiServer + 'index&m=index',
			    method: 'GET',
			    data: {},
			    success: res => {
					uni.setStorageSync('V',res.data.data.version);
				},
			});
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
@import 'graceUI/graceUI.css';
</style>
