import Vue from "vue";
let defaultUserData = {
  workouts: {},
};
export default {
  state: {
    userData: defaultUserData,
  },
  mutations: {
    set_user_data(state, payload) {
      state.userData = payload;
    },
    add_user_workout(state, payload) {
      Vue.set(state.userData.workouts, payload.workoutId, payload.workout);
    },
  },
  actions: {
    load_user_data({ commit }, payload) {
      commit("set_processing", true);
      let userDataRef = Vue.$db.collection("userData").doc(payload);
      userDataRef
        .get()
        .then((data) => {
          let userData = data.exists ? data.data() : defaultUserData;

          if (!userData.workouts) userData.workouts = {};

          for (var key in userData.workouts) {
            // eslint-disable-next-line no-prototype-builtins
            if (userData.workouts.hasOwnProperty(key)) {
              userData.workouts[key].addedDate = userData.workouts[
                key
              ].addedDate.toDate();
            }
          } 

          commit("set_user_data", userData);
          commit("set_processing", false);
        })
        .catch(() => {
          commit("set_processing", false);
        });
    },
    add_user_workout({ commit, getters }, payload) {
      commit("set_processing", true);
      alert(getters.userId);
      let userDataRef = Vue.$db.collection("userData").doc(getters.userId);
      let workout = {
        addedDate: new Date(),
      };

      userDataRef
        .set(
          {
            workouts: {
              [payload]: workout,
            },
          },
          { merge: true }
        )
        .then(() => {
          commit("add_user_workout", { workoutId: payload, workout: workout });
          commit('set_processing', false)
        })
        .catch(() => {
          commit("set_processing", false);
        });
    },
  },
  getters: {
    userData: (state) => state.userData,
  },
};
