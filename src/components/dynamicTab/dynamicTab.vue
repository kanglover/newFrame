<template>
  <section class="dynamicNav">
    <div class="item">首页</div>
      <div v-for="(tab, index) in getTabs" :key="index" class="item">
        <span>{{ tab.title }}</span>
      </div>
  </section>
</template>
<script>
export default {
  methods: {
    addTab (route) {
      this.$store.dispatch('addTab', {route})
    }
  },
  computed: {
    getTabs () {
      return this.$store.state.tabs.visitedTabs
    }
  }
}
</script>
<style>
  .dynamicNav {
    height: 4vh;
    background: white;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #d8dce5;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    -moz-box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
  }

  .item {
    margin-right: 1em;
  }

  .item:first-child {
    margin-left: 1em;
  }
</style>
