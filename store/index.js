import Vuex from 'vuex'

// firebase.firestore().collection('users').doc(uid).set({"grade": "5", "yonketa": "5555"}).then(console.log).catch(console.log)

const store = () => new Vuex.Store({
  state: {
    registered: false
  },
  mutations: {
    register (state) {
      state.registered = true
    }
  },
  actions: {
    authLogin ({ commit }) {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          let doc = await firebase.firestore().collection('users').doc(user.uid).get()
          if (doc.get('grade') !== undefined && doc.get('name') !== undefined) {
            commit('register');
          }
        }
      })
    },
    authSignUp ({ commit }, { grade, name }) {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          commit('register');
          await firebase.firestore().collection('users').doc(user.uid).set({ grade, name });
        }
      })
    }
  }
})

export default store