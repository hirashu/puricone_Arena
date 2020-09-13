import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import routes from './routes'

// bootstrap用のインポート
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
export default new Router({routes})
