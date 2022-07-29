import Vue from "vue";
import Vuex from "vuex";
import userModule from '../users/user';
import generalModule from '../users/general';
import workoutsModule from '../users/workouts';
import userData from '../users/userData'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userData,
    userModule,
    generalModule,
    workoutsModule,
  },
});
