import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/index.vue'
import Login from '@/views/Login.vue'
import Conclusion from '@/views/conclusion/index.vue'
import Loading from '@/views/loading/index.vue'
import qrcode from '@/views/qrcode/index.vue'
import Loading2 from '@/views2/loading/index.vue'
import ThreeFrames from '@/views2/threeFrames/index.vue'
import Login2 from '@/views2/login/index.vue'
import Data from '@/views2/data/index.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		// name: 'Loading2',
		// component: Loading2,
		redirect: '/two'
	},
	{
		path: '/old',
		name: 'Loading',
		component: Loading
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/conclusion',
		name: 'Conclusion',
		component: Conclusion
	},
	{
		path: '/loading',
		name: 'Loading',
		component: Loading
	},
	{
		path: '/qrcode',
		name: 'qrcode',
		component: qrcode
	},
	{
		path: '/two',
		name: 'Loading2',
		component: Loading2
	},
	{
		path: '/threeFrames',
		name: 'ThreeFrames',
		component: ThreeFrames
	},
	{
		path: '/two/login',
		name: 'Login2',
		component: Login2
	},
	{
		path: '/two/data',
		name: 'Data',
		component: Data
	},
	{
		path: '/two/step1',
		name: 'Step1',
		component: () => import('@/views2/step/step1'),
	},
	{
		path: '/two/step2',
		name: 'Step2',
		component: () => import('@/views2/step/step2'),
	},
	{
		path: '/two/step3',
		name: 'Step3',
		component: () => import('@/views2/step/step3'),
	},
	{
		path: '/two/step4',
		name: 'Step4',
		component: () => import('@/views2/step/step4'),
	},
	{
		path: '/two/step5',
		name: 'Step5',
		component: () => import('@/views2/step/step5'),
	},
	{
		path: '/two/step6',
		name: 'Step6',
		component: () => import('@/views2/step/step6'),
	},
	{
		path: '/two/step7',
		name: 'Step7',
		component: () => import('@/views2/step/step7'),
	},
	{
		path: '/two/step8',
		name: 'Step8',
		component: () => import('@/views2/step/step8'),
	},
	{
		path: '/two/step9',
		name: 'Step9',
		component: () => import('@/views2/step/step9'),
	},
	{
		path: '/two/step10',
		name: 'Step10',
		component: () => import('@/views2/step/step10'),
	},
	{
		path: '/two/step11',
		name: 'Step11',
		component: () => import('@/views2/step/step11'),
	},
	{
		path: '/two/step12',
		name: 'Step12',
		component: () => import('@/views2/step/step12'),
	},
	
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
