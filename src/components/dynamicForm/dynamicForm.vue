<script>
export default {
  name: 'dynamicForm',
  render: function (createElement) {
    return createElement('h1', {
      style: {
        color: 'red',
        fontSize: '22px'
      },
      attrs: {
        id: 'test'
      }
    }, [
      createElement('div', 'ddd')
    ])
  }
}
</script>
<style>

</style>
