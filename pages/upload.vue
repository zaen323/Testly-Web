<template>
</template>

<script>
export default {
  data: () => {
    return { }
  },
  mounted () {
    window.componentHandler.upgradeDom()
    document.querySelector('.mdl-layout__content').scrollTop = 0
  }
}
</script>

<style>
</style>