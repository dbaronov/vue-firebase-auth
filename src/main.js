import firebase from 'firebase'
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let app = ''

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBMvrwswhdBkUUHRtYQMlbkob56Ic4NEcc",
  authDomain: "vue-firebase-tutorial-63780.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-63780.firebaseio.com",
  projectId: "vue-firebase-tutorial-63780",
  storageBucket: "vue-firebase-tutorial-63780.appspot.com",
  messagingSenderId: "537395898141"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

