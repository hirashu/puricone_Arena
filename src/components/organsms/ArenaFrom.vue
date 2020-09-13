<template>
<div>
  <h1>アリーナ対戦解析</h1>
  <div class="TeamMenu">
  <TeamList class="enemyTeam" :selectInfo="selectChs">
    <p class="subtitle bg-danger text-white" slot="title">相手チーム</p>
  </TeamList>
  <buttonform class="analysisbtn"
  @click="stAnalysis(selectChs)">解析スタート</buttonform>
  <TeamList class="analysisTeam" :selectInfo="resultCh">
    <p class="subtitle bg-primary text-white" slot="title">予想構成チーム</p>
  </TeamList>
  </div>
<ul class="SelectLists">
<h3 class="subtitle bg-danger text-white">前衛</h3>
<SelectList :charainfo="chinfoFront" @selectCharas="selectRsult"></SelectList>
<h3 class="subtitle bg-warning text-white">中衛</h3>
<SelectList :charainfo="chInfoCenter" @selectCharas="selectRsult"></SelectList>
<h3 class="subtitle bg-primary text-white">後衛</h3>
<SelectList :charainfo="chinfoBack" @selectCharas="selectRsult"></SelectList>
</ul>
</div>
</template>

<script>
import SelectList from '@/components/molecules/SelectList.vue'
import TeamList from '@/components/molecules/TeamList.vue'
import buttonform from '@/components/atoms/button.vue'
export default {
  name: 'ArenaFrom',
  components: {
    SelectList,
    TeamList,
    buttonform
  },
  data: function () {
    return {
      selectChs: [], // キャラ選択結果
      totalCh: 0,
      selectMaxch: 5
    }
  },

  props: {
    charainfo: {
      default: null
    },
    // 親から受け取ったid
    analysisret: {
      default: null
    }
  },
  computed: {
    // 表示用のデータ渡す関数
    chinfoFront: function () {
      return (this.charainfo.filter(
        charaposition => charaposition.position === 1))
    },
    chInfoCenter: function () {
      return (this.charainfo.filter(
        charaposition => charaposition.position === 2))
    },
    chinfoBack: function () {
      return (this.charainfo.filter(
        charaposition => charaposition.position === 3))
    },
    // TODO親からもらったidの配列からキャラ情報の渡すメソッド
    resultCh: function () {
      var resultCh_ = []
      if (this.analysisret == null) {
        return null
      } else {
        this.analysisret.forEach(id => {
          resultCh_.push(this.charainfo[Number(id) - 1])
        })
        return (
          resultCh_
        )
      }
    }
  },
  methods: {
    // アクション用のメソッド
    selectRsult (id) {
      console.log(id + ':' + this.charainfo[Number(id) - 1].imgName)
      // キャラクター表示用
      // 削除同じキャラが選択された場合は削除
      if (this.selectChs.some(ch => ch.id === id)) {
        this.selectChs = this.selectChs.filter(function (Ch) {
          return Ch.id !== id
        })
      } else {
        // ５枠以下なら追加し、ソートする
        if (this.selectChs.length < this.selectMaxch) {
          this.selectChs.push(this.charainfo[Number(id) - 1])
          this.selectChs.sort(function (a, b) {
            return a.config - b.config
          })
        }
      }
    },
    // 解析ボタンのアクション(配置順のidを渡す)
    stAnalysis (chInfo) {
      if (this.selectChs.length === this.selectMaxch) {
        var ary = []
        chInfo.forEach(el => {
          ary.push(el.id)
        })
        this.$emit('searchId', ary)
      }
    }
  }
}
</script>

<style scoped>
.TeamMenu{
  width: 1300px;
  height: 170px;
  padding:5px; /* 余白指定 */
  margin:0 auto;
}

.SelectLists{
  padding:0 30px;
  height: 600px;
  width: 1300px;
  overflow-y: scroll;
  margin:0 auto;
}

.enemyTeam{
  float: left;
  padding: 0 0 5px 0; /* 余白指定 */
  margin: 0 0 5px 20px; /* 余白指定 */
}

.analysisTeam{
  float: right;
  padding: 0 0 5px 0; /* 余白指定 */
  margin: 0 0 5px 0; /* 余白指定 */
}

.analysisbtn{
  margin: 80px 0 40px 0; /* 余白指定 */
}

.subtitle{
   margin: 8px 0 0 0; /* 余白指定 */
}
</style>
