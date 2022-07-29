import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';
import firebaseConfig from './config/firebase';
import firebase from 'firebase'
import 'firebase/firestore'
Vue.use(Vuetify)

Vue.config.productionTip = false

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
db.settings({
  timestampsInSnapshots: true
});
firebase.analytics();

Vue.$db = db


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    let vm = this
    firebase.auth().onAuthStateChanged((user) => {
      vm.$store.dispatch('state_changed', user)
    });

    this.$store.dispatch('load_workouts')
  }
}).$mount('#app')
