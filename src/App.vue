<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <player></player>
  </div>
</template>
<script>
  import mHeader from './components/m-header/m-header'
  import tab from './components/tab/tab'
  import player from './components/player/player'
export default {
  name: 'app',
  created() {},
  data() {
    return {}
  },
  computed:{},
  methods: {},
  watch: {},
  components: {
    mHeader,
    tab,
    player
  }
}
</script>

<style scoped rel="stylesheet/styl" lang="styl">

</style>
