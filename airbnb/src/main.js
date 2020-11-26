import Vue from 'vue'
import app from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false
 
import './styles/styles.scss'

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
