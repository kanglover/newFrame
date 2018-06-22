<template>
  <section class="mainContent">
    <transition name="fade" mode="out-in">
      <keep-alive :include="getInclueds">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>
<script>
export default {
  computed: {
    getInclueds () {
      return this.$store.state.tabs.cachedTabs.toString()
    }
  }
}
</script>
<style scoped lang="scss">
.mainContent {
  height: 85vh;
  background-color: white;
}
</style>
