<template>
<div>
<!-- <p>キャラクター選択formだよ。デザインについては今後の検討事項</p> -->
<div v-for='n in maxColumu' :key='n'>
  <input type="hidden" :value="viewInfo(n)"/>
<ul class='list-group list-group-horizontal'>
   <li class='list-group-item'
   @click="selectChara(chinfo.id)"
   v-for='chinfo in drawinfo' :key='chinfo.id'>
     <charaicon :imgName='chinfo.imgName'/>
     </li>
</ul>
</div>
</div>
</template>
<script>
import charaicon from '@/components/atoms/charaicon.vue'
export default {
  name: 'SelectList',
  components: {
    charaicon
  },
  data: function () {
    return {
      maxrow: 12,
      // 表示させる列数をだす。切り上げなのは余った値を１列ぶん表示させるため
      maxColumu: Math.ceil(this.charainfo.length / 12),
      drawinfo: 0,
      drawdata: 0
    }
  },
  props: {
    charainfo: {
      // 受け取るデータ構造、id、画像名、配置、位置
      default: null
    }
  },
  methods: {
    // 描画用のメソッド
    viewInfo (n) {
      this.drawdata = (n - 1) * this.maxrow
      this.drawinfo = this.charainfo.slice(this.drawdata, this.drawdata + this.maxrow)
    },
    lenViewInfo () {
      this.maxColumu = this.charainfo.length
    },
    // アクション用のメソッド
    selectChara (id) {
      this.$emit('selectCharas', id)
    }
  }
}
</script>

<style scoped>
.list-group-item{
  padding: 3px;
}
</style>
