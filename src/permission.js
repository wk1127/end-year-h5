import router from './router'
// import { getToken, getVerifyTime } from '@/utils/auth'
import store from './store'
const WHIITELIST = ['/', '/login', '/home', '/two', '/two/login', '/threeFrames','/old']
router.beforeEach(async (to, from, next) => {
	let time = Math.random()
	if (WHIITELIST.includes(to.path)) {
		if (to.path === '/two' || to.path === '/') {
			store.dispatch('setVersion', '2.0')
		} else if (to.path === '/old') {
			store.dispatch('setVersion', '1.0') // 跳转以前版本
		}
		if(store.state.version === '1.0'){
			if (['/login', '/home'].includes(to.path) && !store.getters.isLoading) return next(`/old?v=${time}`)
		}else{
			if (['/two/login', '/threeFrames'].includes(to.path) && !store.getters.isLoading) return next(`/two?v=${time}`)
		}
		return next()
	}

	// const HASTOKEN = getToken()
	// const LASTVALIDATIONTIME = Number(getVerifyTime())
	// const CURRENTTIME = new Date().getTime()
	// if (store.state.version === '1.0') {
	// 	if (!(HASTOKEN && LASTVALIDATIONTIME)) return next(`/old?v=${time}`)
	// 	if (CURRENTTIME - LASTVALIDATIONTIME >= 2 * 60 * 60 * 1000) return next(`/old?v=${time}`)
	// 	if (!store.getters.isLoading) return next('/?from=conclusion')
	// } else {
	// 	if (!(HASTOKEN && LASTVALIDATIONTIME)) return next(`/two?v=${time}`)
	// 	if (CURRENTTIME - LASTVALIDATIONTIME >= 2 * 60 * 60 * 1000) return next(`/two?v=${time}`)
	// 	if (!store.getters.isLoading) return next(`/two?from=${to.path}`)
	// }
	// if (!store.getters.pageData) await store.dispatch('getPageData', { login_token: HASTOKEN, client_id: 'yz_year_end_h5' })

	return next()
})

router.afterEach(() => {
	// ...
})
