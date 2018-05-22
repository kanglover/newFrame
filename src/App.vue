<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
html, body {
  height: 100vh;
  background-color: #eff0f4;
}
body {
  margin: 0px 0px;
  font-size: 14px;
  line-height: 1.5;
}

  .active {
    text-decoration: none;
    color: #2196f3;
    border-bottom: 2px solid #2196f3;
  }
</style>
