<template>
  <div>
    <img :src="requireImg"
    visibility =""
    >
  </div>
</template>

<script>
export default {
  name: 'caharaicon',

  props: {
    imgName: {
      type: String,
      default: 'test.png'
    }
  },
  computed: {
    requireImg: function () {
      if (this.imgName !== 'initImg') {
      // ビルド時pathが変わるのでrequireが必要
        return require('@/assets/charIcon/' + this.imgName)
      }
    },
    display: function () {
      if (this.imgName === 'initImg') {
        return 'hidden'
      } else {
        return 'visible'
      }
    }
  }
}
</script>
