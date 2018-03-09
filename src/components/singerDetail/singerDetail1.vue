<template>
  <transition name="slide">
   <div>详情</div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {getSingerDetail} from '../../api/singer'
  import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    data() {
      return {
        songs: []
      }
    },
    created() {
      this._getDetail()
    },
    methods: {
      _getDetail() {
        if(this.singer.singerId) {
          getSingerDetail(this.singer.singerId).then(res => {
            console.log(res.code)
          })
        }else {
          this.$router.push({path: '/singer'})
        }
      },
      _normalizeSongs(list) {

      }
    },
    components: {

    },
    watch: {
      $router(router) {

      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
