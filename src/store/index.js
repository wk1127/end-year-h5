import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, getVerifyTime, setVerifyTime, removeToken } from '@/utils/auth'
import { Login, pageData } from '@/api/demo.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: getToken() || '',
		verifyTime: getVerifyTime() || '',
		pageData: {
			"staffInfo": {
				"number": "20679",
				"name": "xxx",
				"department": "技术序列 > 产研中心 > 基础服务研发部 > 攻坚小组 > 前端一组",
				"job_grade": "S3",
				"job_grade_time": 1602586745,
				"induction_time": 1585238400,
				"cumulative_days": 280,
				"cumulative_days_now": 353,
				"staff_count": "3248",
				"domicile": "四川省 成都市",
				"domicile_staff_count": "315",
				"ceoCount": "0",
				"vicePresidentCount": "0",
				"generalManagerCount": "0",
				"managerCount": "0",
				"brotherLogCount": "0"
			},
			"workAttendanceInfo": {
				"work_day_count": 212,
				"on_foot_address": "罗马",
				"work_time": 7150949,
				"punctual_on_duty_times": 0,
				"punctual_off_duty_times": 0,
				"latest_off_duty_date": "2020-03-31",
				"off_duty_time": "2020-03-31 22:41:00",
				"latestOffDutyStaffs": [
					{
						"name": "黄洋洋",
						"off_duty_time": "2020-03-31 22:42:00"
					},
					{
						"name": "李冬梅",
						"off_duty_time": "2020-03-31 22:42:00"
					},
					{
						"name": "何敏",
						"off_duty_time": "2020-03-31 22:42:00"
					},
					{
						"name": "廖秀君",
						"off_duty_time": "2020-03-31 22:43:00"
					},
					{
						"name": "马威",
						"off_duty_time": "2020-03-31 22:43:00"
					},
					{
						"name": "贾清瑞",
						"off_duty_time": "2020-03-31 22:47:00"
					},
					{
						"name": "李松江",
						"off_duty_time": "2020-03-31 22:47:00"
					},
					{
						"name": "彭松",
						"off_duty_time": "2020-03-31 22:50:00"
					},
					{
						"name": "邱彩平",
						"off_duty_time": "2020-03-31 22:52:00"
					},
					{
						"name": "李明春",
						"off_duty_time": "2020-03-31 22:53:00"
					}
				],
				"workTranscendCount": "80.11"
			},
			"bigEvent": [
				{
					"date": "1582992000",
					"event": "翻倍节2.8亿元",
					"img": "https://mats.sudoyu.com/oa/2020/12/66190d552277f23f2ecdd07806470b3b.png"
				},
				{
					"date": "1588262400",
					"event": "第四阶段管理计划成为集团计划",
					"img": "https://mats.sudoyu.com/oa/2020/12/277f50c4613c26e8465aaa32824f0e65.png"
				},
				{
					"date": "1590940800",
					"event": "集团线下第一家门店成立",
					"img": "https://mats.sudoyu.com/oa/2020/12/02c60f8c93720fba218cb99269d4e907.png"
				},
				{
					"date": "1596211200",
					"event": "千浪计划启动",
					"img": "https://mats.sudoyu.com/oa/2020/12/6a5b4f0272b9624aa35949309e8f221f.png"
				},
				{
					"date": "1598889600",
					"event": "“鱼爪新媒营销体系”建立",
					"img": "https://mats.sudoyu.com/oa/2020/12/eb463d8d334f2d608a876f8e1cf12349.png"
				},
				{
					"date": "1598889600",
					"event": "权盾重生",
					"img": "https://mats.sudoyu.com/oa/2020/12/0be7514f3e0cc3bfb3933b49222fd777.png"
				},
				{
					"date": "1601481600",
					"event": "人才改革制度执行",
					"img": "https://mats.sudoyu.com/oa/2020/12/d88637cfeac23af6381fefe668c1a078.png"
				},
				{
					"date": "1604160000",
					"event": "鱼爪第一期“未来之星”训练营开营",
					"img": "https://mats.sudoyu.com/oa/2020/12/0b46aaefb079d5bcf6624f3ed9579963.png"
				},
				{
					"date": "1606752000",
					"event": "文化复兴",
					"img": "https://mats.sudoyu.com/oa/2020/12/3db11d2acd594077adbcc42cb8eb0ce0.png"
				}
			],
			"command": 0,
			"teamInfo": {
				"first_work_date": 0,
				"business_grade": 4,
				"department_three": "产研中心-基础服务研发部-攻坚小组",
				"picture_content": [
					{
						"img": "",
						"describe": "部门合照"
					}
				],
				"team_build": null,
				"higher_ups_message_content": `亲爱的同事们，你们好！值此2021年新春佳节即将来临之际，我代表基础服务研发部向你们，并通过你们向你们的家人致以节日的祝贺和亲切的问候！刚刚过去的一年，是部门上下团结拼搏、开拓创新的一年。这一切都凝聚着每一位员工的智慧、汗水、才干和艰辛。
天道酬勤，是你们用勤奋、敬业、忠诚，铸造了的今天，用青春和激情续写着的新篇章。
时人不识凌云木，直待凌云始道高，让我们共同努力2021年把基础服务研发部推上一个新的高度`,
				"higher_ups_message_nickname": "xxx",
				"command": 0
			},
			"ticketInfo": {
				"time": 1615821980
			}
		},
		isLoading: false,
		version: localStorage.getItem('version')
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_VERIFYTIME: (state, verifyTime) => {
			state.verifyTime = verifyTime
		},
		SET_PAGEDATA: (state, pageData) => {
			state.pageData = pageData
		},
		SET_LOADING: (state, isLoading) => {
			state.isLoading = isLoading
		},
		SET_VERSION: (state, version) => {
			state.version = version
		},
	},
	actions: {
		userLogin({ commit }, loginInfor) {
			return new Promise((resolve, reject) => {
				Login(loginInfor).then(response => {
					commit('SET_TOKEN', response.data ? response.data.login_token : null)
					setToken(response.data ? response.data.login_token : null)
					resolve(response)
				}).catch(error => {
					reject(error)
				})
			})
		},
		setVerifyTime({ commit }, time) {
			commit('SET_VERIFYTIME', time)
			setVerifyTime(time)
		},
		getPageData({ commit }, pageInfo) {
			return new Promise((resolve, reject) => {
				pageData(pageInfo).then(response => {
					commit('SET_PAGEDATA', response.data)
					resolve(response)
				}).catch(error => {
					reject(error)
				})
			})
		},
		changeLoading({ commit }, loading) {
			commit('SET_LOADING', loading)
		},
		resetToken({ commit }) {
			return new Promise(resolve => {
				commit('SET_TOKEN', '')
				removeToken()
				resolve()
			})
		},
		setVersion({ commit }, version) {
			if (typeof version !== 'string') {
				version = String(version)
			}
			commit('SET_VERSION', version)
			localStorage.setItem('version', version)
		}
	},
	getters: {
		token: state => state ? state.token : '',
		verifyTime: state => state.verifyTime,
		pageData: state => state.pageData,
		isLoading: state => state.isLoading
	}
})
