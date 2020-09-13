<template>
  <div id="app">
    <router-view/>
    <p class="footer">© Cygames, Inc. ALL Rights Reserved.</p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-image : url('./assets/bishoku.jpg');
  background-repeat: no-repeat; /* 繰り返しなし */
  background-attachment: fixed; /* スクロールしない */
  background-clip: border-box;
  background-position:center;
  /* 以下考えていく */
  min-width :1300px;
  margin-right: auto;
  margin-left : auto;
}
</style>
