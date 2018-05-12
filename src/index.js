import Vue from 'vue'
import Vuex from 'vuex'
import App from './components/App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    IKValue: parseFloat(window.localStorage.getItem("IKValue")) || 0,
    IFValue: parseFloat(window.localStorage.getItem("IFValue")) || 0,
  },
  mutations: {
    updateIKAndIFValues(state, { IKValue, IFValue }) {
      // persist in localstorage
      window.localStorage.setItem("IKValue", IKValue)
      window.localStorage.setItem("IFValue", IFValue)
      // persist in vuex storage
      state.IKValue = IKValue
      state.IFValue = IFValue
    }
  }
})

new Vue({
  el: '#app',
  // inject store into all child components
  store,
  render: h => h(App)
})
