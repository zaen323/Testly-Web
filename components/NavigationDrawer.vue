<template>
  <div class="mdl-layout__drawer">
    <nav class="mdl-navigation">
      <nuxt-link to="/" class="mdl-navigation__link typcn typcn-home iweee-navigation__link--home" @click.native="closeDrawer">Home</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    closeDrawer: () => {
      // document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible')
      // document.querySelector('.mdl-layout__drawer').classList.remove('is-visible')

      // document.querySelector('.mdl-layout__drawer').setAttribute('aria-hidden', 'true')
      // document.querySelector('.mdl-layout__drawer-button').setAttribute('aria-expanded', 'false')
    }
  }
}
</script>

<style scoped>
</style>

