// index.js
// 获取应用实例
const app = getApp()

Page({
	data: {
		recorderManager: null,
		list: [],
		isClose: true
	},
	// 开始录音
	recordFun() {
		let recorderManager = this.data.recorderManager
		recorderManager.start({
			success: (res) => {
				this.setData({
					isClose: false
				})
			},
			fail: (res) => {
				console.log('录音开始失败', res);
			},
		})

	},
	// 结束录音
	onCloseFun() {
		let recorderManager = this.data.recorderManager
		recorderManager.onStop((res) => {
			let list = this.data.list
			let now = new Date();
            let timestamp = now.getTime();
			let obj = {
				...res,
				timestamp
            }
			list.push(obj)
			this.setData({
				list,
				isClose: true
			})
		})
		recorderManager.stop()
	},
	onSumbit(){
		wx.showModal({
		  title: '提示',
		  content: '是否提交该录音列表',
		  complete: (res) => {
			if (res.cancel) {
			
			}
		
			if (res.confirm) {
			  
			}
		  }
		})
	},
	onLoad() {
		this.data.recorderManager = wx.getRecorderManager()

	},
	onShow() {

	},
	onHide() {

	}

})