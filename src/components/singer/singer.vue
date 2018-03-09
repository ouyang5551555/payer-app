<template>
  <div class="singer">
    <list-view :data="list" @select="selectSinger"></list-view>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { getSingerList} from "../../api/singer";
  import {ERR_OK} from "../../api/config";
  import Singer from "../../common/js/singer"
  import ListView from '../../base/listview'
  import {mapMutations} from 'vuex'
  console.dir(mapMutations)
  export default {
    created() {
      this._getSingerList()
    },
    methods: {
      ...mapMutations({
        setSinger: 'SET_SINGER'
      }),
      selectSinger(singer) {
        this.setSinger(singer)
        this.$router.push({
          path: `/singer/${singer.singerId}`
        })
      },
      normalSingerList(list) {
        let singers = {}
        let items = []
        let hot = {title: '热门', items: []}
        list.forEach((item, index) => {
          if(index < 10) {
            hot.items.push(new Singer(item.Fsinger_mid, item.Fsinger_name, item.Fsinger_id))
          }
          if(singers[item.Findex] === undefined && /^[A-Za-z]$/.test(item.Findex)) {
            singers[item.Findex] = []
          }
          if(Array.isArray(singers[item.Findex])) {
            singers[item.Findex].push(new Singer(item.Fsinger_mid, item.Fsinger_name, item.Fsinger_id))
          }
        })

        Object.keys(singers).sort().forEach((item) => {
          items.push({
              title: String(item),
              items: singers[item]
            })
        })
        items.unshift(hot)
        return items
      },
      _getSingerList() {
        getSingerList().then(res => {
          if(res.code === ERR_OK) {
            this.list = this.normalSingerList(res.data.list)
          }
        })
      },
    },
    data() {
      return {
        list: []
      }
    },
    components: {
      ListView
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bnottom: 0
    max-height:80vh
    width: 100%
</style>
