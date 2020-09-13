<template>
<div>
  <ArenaFrom
  :charainfo="charaviewInfo.data"
  :analysisret="analysisret"
  @searchId="retId"></ArenaFrom>
 </div>
</template>

<script>
// import axios from 'axios'
import ArenaFrom from '@/components/organsms/ArenaFrom.vue'
import charaviewInfo from '@/assets/json/charview.json'
// import test from '@/assets/json/test.json'
export default {
  name: 'ArenaView',
  components: {ArenaFrom},
  data () {
    return {
      charaviewInfo: charaviewInfo,
      analysisret: null
    }
    // モデルから指定のキャラidを受け取るメソッドを追加する
    // 可能ならば勝者位置からそのメソッドの編成をあらかじめ計算しておく
    // そうすれば、勝者位置を求める
    // 入力データのメソッドの中から最も属性情報が一致するマスを選択する
    // 選択したマスで最も勝率が高いマスを求める
    // そのマスの属性情報を取得し、キャラ情報と誤差が最小のものを選択する。
    // 任意の入力データから勝者位置を判定する必要あり
  },
  methods: {
    retId: function (chInfo) {
      this.analysisret = chInfo
      console.log(this.analysisret)
      return this.analysisret
    }
  }
}
</script>
