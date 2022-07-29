/* import { set } from 'core-js/fn/dict'; */
import firebase from "firebase";

export default {
  state: {
    user: {
      isAunteticated: false,
      uid: null,
      name: null,
      email: null,
    },
  },
  mutations: {
    set_user(state, payload) {
      state.user.isAunteticated = true;
      state.user.uid = payload.uid;
      state.user.email = payload.email
    },
    set_user_name(state, payload) {
      state.user.name = payload;
    },
    unset_user(state) {
      state.user = {
        isAunteticated: false,
        uid: null,
      };
    },
  },

  actions: {
    signup({ commit }, payload) {
      commit("set_processing", true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          firebase.auth().currentUser.updateProfile({displayName: payload.name})
          .then(() => commit('set_user_name', payload.name))
          commit("set_user", user.uid); //
          commit("set_processing", false);
        })
        .catch(function(error) {
          commit("set_processing", false);
          commit("set_error", error.message);
        });
    },
    signin({ commit }, payload) {
      commit("set_processing", true);
      commit('clean_error');
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("set_user", user.uid); //
          commit("set_processing", false);
        })
        .catch(function(error) {
          commit("set_processing", false);
          commit("set_error", error.message);
        });
    },
    signout() {
      firebase.auth().signOut();
    },
    state_changed({ commit, dispatch }, payload) {
      if (payload) {
        commit("set_user", {uid: payload.uid, email: payload.email});
        commit('set_user_name', payload.displayName)
        dispatch("load_user_data", payload.uid);
      } else {
        commit("unset_user");
      }
    },
  },
  getters: {
    isUserAuthenticated: (state) => state.user.isAunteticated,
    userId: (state) => state.user.uid,
    userName: (state) => state.user.name,
    userEmail: (state) => state.user.email,
  },
};
