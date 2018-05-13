<template>
  <section class="dynamicNav" @click="deal($event)">
    <router-link class="item" :to="'/main'">首页</router-link>
    <router-link :to="{path: tab.path}" :title="tab.title" :name="tab.name" :path="tab.path" v-for="(tab, index) in getTabs" :key="index" class="item">
      {{tab.title}}
      <span class="el-icon-close close"></span>
    </router-link>
  </section>
</template>
<script>
export default {
  methods: {
    addTab (route) {
      this.$store.dispatch('addTab', {route})
    },
    deal (event) {
      if (event.target.className === 'el-icon-close close') {
        let a = event.target.parentElement
        let title = a.getAttribute('title')
        let name = a.getAttribute('name')
        let path = a.getAttribute('path')
        let tab = {name, path, title}
        this.$store.dispatch('deleteTab', tab)
      }
      event.preventDefault()
      event.stopPropagation()
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
    text-decoration: none;
  }

  .item:active {
    color: black;
    text-decoration: none;
  }

  .item:first-child {
    margin-left: 1em;
  }

  .close {
    -webkit-transition: background 1s;
    -moz-transition: background 1s;
    -ms-transition: background 1s;
    -o-transition: background 1s;
    transition: background 1s;
    border-radius: 50%;
  }

  .close:hover {
    background: #d8dce5;
    border-radius: 50%;
  }
</style>
