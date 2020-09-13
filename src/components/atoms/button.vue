<template>
  <button class="btn btn-primary"
  :disabled="disabled"
  @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'buttonform',

  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (ev) {
      this.$emit('click', ev)
    }
  }
}
</script>
