<template>
  <div class="mdl-layout mdl-js-layout">
    <main class="mdl-layout__content">
      <button @click="$store.dispatch('authLogin')" id="loginbtn" class="mdl-button mdl-js-button mdl-button--raised mdl-color--white">
        Login with Google
      </button>
      <p>OR</p>
      <form action="#">
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="grade" v-model="grade">
          <label class="mdl-textfield__label" for="grade">Grade</label>
          <span class="mdl-textfield__error">Input is not a number!</span>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" id="name" v-model="name">
          <label class="mdl-textfield__label" for="name">Name</label>
        </div>
      </form>
      <button @click="$store.dispatch('authSignUp', { grade, name })" id="signupbtn" class="mdl-button mdl-js-button mdl-button--raised mdl-color--white">
        Sign up with Google
      </button>
    </main>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  layout: 'plain',
  data: function () {
    return {
      name: '',
      grade: ''
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('register')
      }
    })
  }
}
</script>

<style>
#loginbtn, #signupbtn {
  text-transform: none;
  padding-left: 40px;
}
</style>