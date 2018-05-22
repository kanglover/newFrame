<template>
  <section class="fullHeight">
    <el-row class="fullHeight">
      <el-col :span="8" class="left" >
        <div>
          <div name="Test" class="item" id="test" draggable='true' @dragstart='dragt($event)'>row</div>
          <div name="Test1" class="item" id="test1" draggable='true' @dragstart='dragt($event)'>col</div>
        </div>
      </el-col>
      <el-col :span="8" class="center fullHeight">
        <div style="height: 100%;"  @drop='dropt($event)' @dragover='allowDrop($event)'>

        </div>
      </el-col>
      <el-col :span="8" class="right">

      </el-col>
    </el-row>
  </section>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    dragt (event) {
      event.dataTransfer.setData(event.target.getAttribute('name'), event.target.id)
    },
    allowDrop (event) {
      event.preventDefault()
    },
    dropt (event) {
      event.preventDefault()
      event.target.appendChild(document.getElementById(event.dataTransfer.getData('Test')))
    }
  }
}
</script>
<style scoped>
  .fullHeight {
    height:100%;
  }

  .left {

  }

  .center {
    border: 1px solid black;
  }

  .item {
    cursor: move;
  }

  .right {

  }
</style>
