<template>
	<view class="grace-padding" v-if="version == '1'">
		<view class="grace-header-cate">
            <scroll-view class="grace-tab-title grace-center" scroll-x="true" id="grace-tab-title">
                <view v-for="(cate, index) in categories" :key="index" :data-cateid="cate.cateId" :data-index="index" :class="[cateCurrentIndex == index ? 'grace-tab-current' : '']" @tap="tabChange">{{cate.name}}</view>
            </scroll-view>
        </view>
		<!-- 文章内容区 -->
        <view class="grace-news-list">
            <block v-for="(item, index) in artList" :key="index">
                <!-- 一张图 -->
                <navigator v-if="item.art_content.length < 3" open-type="navigate" :url="'../info/info?artid='+item.art_id">
					
                    <view class="grace-news-list-img-news">
                        <view class="grace-news-list-title-main">{{item.art_title}}</view>
                        <view v-if="item.art_content.length >0" class="grace-news-list-img-big"><image :src="item.art_content[0]" mode="widthFix"></image></view>
                    </view>
					<view class="grace-news-list-info">
						<!-- <view>
							<text class="grace-iconfont icon-time2"></text>2天前
							<text class="grace-iconfont icon-eye" style="margin-left:20px;"></text>99次浏览
						</view> -->
					</view>
                </navigator>
                <!-- 三张图 -->
                <navigator v-if="item.art_content.length >= 3" :url="'../info/info?artid='+item.art_id">
                    <view class="grace-news-list-img-news">
                        <view class="grace-news-list-title-main">{{item.art_title}}</view>
                        <view class="grace-news-list-imgs">
                            <image :src="item.art_content[0]" mode="widthFix"></image>
                            <image :src="item.art_content[1]" mode="widthFix"></image>
                            <image :src="item.art_content[2]" mode="widthFix"></image>
                        </view>
                    </view>
					<view class="grace-news-list-info">
						<!-- <view>
							<text class="grace-iconfont icon-time2"></text>2天前
							<text class="grace-iconfont icon-eye" style="margin-left:20px;"></text>99次浏览
						</view> -->
					</view>
                </navigator>
            </block>
        </view>   
	</view>
	<view class="grace-padding" v-else>
		<view class="waittext">
			<led :mode="1"></led>
		</view>
	</view>
</template>

<script>
import led from '../../components/mehaotian-numled/mehaotian-numled.vue';
var _self, cate = 0, page = 1;
var sign = require('../../commons/sign.js');
export default {
	components: {
		led
	},
	data() {
		return {
			arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
			version:'0',
			categories:[{cateId : 0, name : "全部"}],
            cateCurrentIndex : 0,
			artList : []
		}
	},
	onLoad() {
		setTimeout(() => {
			this.arr = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
		}, 2000);
		_self = this;
		page = 1;
		sign.sign(this.apiServer);
		// 加载文章分类
        uni.request({
            url: this.apiServer+'category&m=index',
            method: 'GET',
            success: res => {
                if(res.data.status == 'ok'){
                    var categories = res.data.data;
                    for(var k in categories){
                        _self.categories.push({cateId : k, name : categories[k]});
                    }
                }
            }
        });
		//
		this.getNewsList();
	},
	onShow() {
		uni.request({
		    url: this.apiServer + 'index&m=index',
		    method: 'GET',
		    data: {},
		    success: res => {
				this.version = res.data.data.version;
				if(res.data.data.version == '0'){
					// uni.hideTabBar();
					
				}else{
					uni.setTabBarItem({
						index: 0,
						text: '首页',
						"iconPath" : "static/nav1.png",
						"selectedIconPath" : "static/nav1-a.png"
					})
					uni.setTabBarItem({
						index: 1,
						text: '记录',
						"iconPath" : "static/nav2.png",
						"selectedIconPath" : "static/nav2-a.png"
					})
					uni.setTabBarItem({
						index: 2,
						text: '我的',
						"iconPath" : "static/nav3.png",
						"selectedIconPath" : "static/nav3-a.png"
					})
				}
			},
		});
	},
	onPullDownRefresh : function(){
		page = 1;
        this.artList = [];
        this.getNewsList();
	},
	onReachBottom:function(){
		this.getNewsList();
	},
	methods: {
		tabChange:function(e){
            var cateid = e.currentTarget.dataset.cateid;
            var index = e.currentTarget.dataset.index;
            page = 1;
            this.cateCurrentIndex = index;
            cate = cateid;
            this.artList = [];
			this.getNewsList();
		},
		getNewsList : function(){
			uni.showLoading({'title':"加载中..."});
			uni.request({
                url: this.apiServer + 'art&m=getList&cate='+cate+'&page='+page,
                method: 'GET',
                success: res => {
					if(res.data.status == 'empty'){
                        uni.showToast({
                            title:"已经加载全部",
                            icon: "none"
                        });
                    }else if(res.data.status == 'ok'){
						var newsList = res.data.data;
						for(var i = 0; i < newsList.length; i++){
                            // 把图片分离出来
                            var content = newsList[i].art_content;
                            content = JSON.parse(content);
							var imgs = [];
                            for(var ii = 0; ii < content.length; ii++){
                                if(content[ii].type == 'image'){
                                    imgs.push(content[ii].content);
                                }
                            }
                            newsList[i].art_content = imgs;
                        }
						_self.artList = _self.artList.concat(newsList);
                        uni.hideLoading();
                        page++;
					}
				},
				complete:function(){
                    uni.stopPullDownRefresh();
                }
			});
		}
	}
}
</script>

<style>

</style>
