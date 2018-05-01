<template>
  <div v-if="$store.state.loginState === 'unknown'"></div>
  <Login v-else-if="$store.state.loginState === 'unregistered'"></Login>
  <div v-else id="page" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header mdl-layout__header--transparent mdl-color-text--grey-900">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Testly</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Testly</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link mdl-color-text--blue-grey-800" to="/" @click.native="hideMenu"><i class="material-icons">home</i>Home</router-link>
        <router-link class="mdl-navigation__link mdl-color-text--blue-grey-800 " to="/upload" @click.native="hideMenu"><i class="material-icons">inbox</i>Upload a file</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Login from '~/components/Login'
import firebase from '~/plugins/firebase'

export default {
  components: { Login: Login },
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  },
  mounted () {
    this.$store.dispatch('authCheck');
  },
  updated () {
    window.componentHandler.upgradeDom()
  }
}
</script>

<style>
.mdl-layout__drawer-button, .mdl-navigation__link {
  outline: 0;
}
body {
  font-family: 'Roboto', 'Helvetica', sans-serif;
  color: #212121;
  background: #c9d8e5;
}
main {
  padding: 40px;
}
.mdl-layout__drawer-button {
  color: #212121 !important;
}
.mdl-navigation__link {
  font-size: 16px;
}
.mdl-navigation__link .material-icons {
  margin-right: 22px;
}
</style>