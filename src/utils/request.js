import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { Notify } from 'vant'
import 'vant/lib/notify/style'
const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	timeout: 5000 
})

service.interceptors.request.use(
	config => {
		if (store.state.Authorization) {
			config.headers['Authorization'] = 'Bearer ' + getToken()
		}
		return config
	},
	error => {
		Notify({ type: 'warning', message: error.response.data.message })
		return Promise.reject(error)
	}
)

service.interceptors.response.use(
	response => {
		const { data } = response
		data.code !== '000000' && Notify({ type: 'warning', message: data.message || 'Error' })
		return data
	},
	error => {
		if(error.response.data.code == '100002') {
			store.dispatch('resetToken').then(() => {
				location.reload()
			})
		}
		else {
			Notify({ type: 'warning', message: error.response.data.message })
		}
		return error.response ? error.response.data : { code: 500, data: [], message: '服务器开小差啦~(*￣︶￣)' }
	}
)

export default service
