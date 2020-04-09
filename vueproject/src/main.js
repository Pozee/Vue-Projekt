import Vue from 'vue'
import coronaAPI from './coronaAPI.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(coronaAPI),
}).$mount('#coronaAPI')
