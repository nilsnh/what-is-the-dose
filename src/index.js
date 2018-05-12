import Vue from 'vue'
import Vuex from 'vuex'
import App from './components/App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0,
    IKValue: parseInt(window.localStorage.getItem("IKValue"), 10),
    IFValue: parseInt(window.localStorage.getItem("IFValue"), 10)
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
