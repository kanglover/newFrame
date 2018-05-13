<template>
  <section class="mainContent">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.mainContent {
  height: 85vh;
  background-color: white;
}
</style>
