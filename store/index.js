import Vuex from 'vuex'

// firebase.firestore().collection('users').doc(uid).set({"grade": "5", "yonketa": "5555"}).then(console.log).catch(console.log)

const store = () => new Vuex.Store({
  state: {
    loginState: 'unknown'
  },
  mutations: {
    setRegistered (state) {
      state.loginState = 'registered'
    },
    setUnregistered (state) {
      state.loginState = 'unregistered'
    }
  },
  actions: {
    /**
     * Show google login popup window.
     */
    authLogin ({ commit }) {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
    },
    /**
     * Start auth checking. Call only once per session.
     */
    authCheck ({ commit }) {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          let doc = await firebase.firestore().collection('users').doc(user.uid).get()
          if (doc.get('grade') !== undefined && doc.get('name') !== undefined) {
            commit('setRegistered');
            return;
          }
        }

        commit('setUnregistered');
      })
    },
    /**
     * Show google login popup window.
     * When the user successfully logged in, alter the firestore database.
     */
    authSignUp ({ commit }, { grade, name }) {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user && this.loginState === 'unregistered') {
          let doc = await firebase.firestore().collection('users').doc(user.uid).get()
          if (doc.get('grade') === undefined || doc.get('name') === undefined) {
            await firebase.firestore().collection('users').doc(user.uid).set({ grade: parseInt(grade), name });
          }
          
          commit('setRegistered')
        }
      })
    }
  }
})

export default store