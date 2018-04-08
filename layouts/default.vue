<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Testly</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Testly</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/upload" @click.native="hideMenu">Upload a file</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content mdl-color--grey-50">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    }
  }
}
</script>

<style>
body {
  font-family: 'Roboto', 'Helvetica', sans-serif;
  color: #616161;
}
main {
  padding: 40px;
}
</style>