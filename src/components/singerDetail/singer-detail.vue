<template>
  <transition name="slide">
    <!--<music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>-->
    详情
  </transition>
</template>

<script type="text/ecmascript-6">
  import {getSingerDetail} from '../../api/singer'
  import {mapGetters} from 'vuex'
  import {ERR_OK} from "../../api/config"

  export default {
    computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      },
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
        // if (!this.singer.singerId) {
        //   this.$router.push('/singer')
        //   return
        // }
        getSingerDetail(this.singer.singerId).then((res) => {
          if (res.code === ERR_OK) {
            console.log(res)
          }
        })
      }
    },
    components: {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
