<template>
<div>
  <slot name="title"><p>Test</p></slot >
  <ul class="list-group list-group-horizontal">
    <div v-for='n in maxColumu' :key='n'>
      <li class="list-group-item">
      <charaicon class="icon" :imgName="imgInfo(n-1)"/></li>
    </div>
  </ul>
</div>
</template>

<script>
import charaicon from '@/components/atoms/charaicon.vue'
export default {
  name: 'TeamList',
  components: {
    charaicon
  },
  data: function () {
    return {
      maxColumu: 5
    }
  },
  // 親からのデータ受け取り
  // 受け取るデータ構造、id、画像名、配置、位置
  props: {
    selectInfo: {
      default: null
    }
  },
  // メソッド
  methods: {
    // 親から受け取ったデータを表示する
    imgInfo (n) {
      if (this.selectInfo != null) {
        if (this.selectInfo[n] != null) {
          return this.selectInfo[n].imgName
        }
      }
      return 'initImg'
    }
  }
}
</script>

<style scoped>
.list-group-item{
  width: 110px;
  height: 110px;
  padding: 5px;
}
.icon{
  zoom: 1.05;
}
</style>
