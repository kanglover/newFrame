<template>
  <section class="mainContent">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
