<template>
  <div class="flex-container" id="app">
    <figure class="fit-image">
      <img src="./assets/pfimage-hj.jpeg"/>
    </figure>
    <MainActivity id="right" msg="Hyunjoo Kim"/>
  </div>
</template>

<script>
import MainActivity from './components/MainActivity.vue'

export default {

  components: {
    MainActivity
  }
}
</script>

<style lang="scss" scoped>
 @import './assets/css/app.scss'
</style>
