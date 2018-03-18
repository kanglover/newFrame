<template>
  <div>
    <label for="">用户名</label><input v-model="person.operatorCode"/>
    <label for="">密码</label><input v-model="person.operatorPassword"/>
    <button @click="loginIn">登录</button>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      person: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    loginIn: function () {
      this.$store.dispatch('loginInSubmit', {
        operatorCode: this.person.operatorCode,
        operatorPassword: this.person.operatorPassword,
        organization: {}
      })
      this.$router.push('/')
    }
  }
}
</script>
