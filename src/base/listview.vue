<template>
  <scroll class="list-view"
          ref="listView"
          :listenScroll="listenScroll"
          @scroll="getScrollPosition"
          :probeType="3"
          :data="data">
    <ul>
      <li v-for="item of data" class="list-group" ref="listGroup">
        <h2 class="list-group-title">
          {{item.title}}
        </h2>
        <ul>
          <li class="list-group-item"
              @click="selectItem(v)"
              v-for="v of item.items">
            <img class="avatar" v-lazy="v.avatar" />
            <span class="name">{{v.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut"
         @touchmove.stop.prevent="shortcutTouchMove"
         @touchstart="shortcutTouchStart">
      <ul>
        <li v-for="(item, index) in shortcutList"
            :data-index="index"
            :class="{'current': currentIndex == index}"
            class="item">{{item}}</li>
      </ul>
    </div>
    <div class="list-fixed" v-show="fixedTitle" ref="fixed">
      <h1 class="fixed-title">{{fixedTitle}}</h1>
    </div>
    <div class="loading-container" v-show="!data.length">
      <Loading></Loading>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import scroll from './scroll'
  import Loading from './loading'
  import {getData} from '../common/js/dom'
  const TITLE_HEIGHT = 30
  const ANCHOR_HEIGHT = 18

  export default {
    created() {
      this.touch = {}
      this.listenScroll = true
      this.listHeight = null
    },
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        scrollY: -1,
        currentIndex: 0,
        diff: -1
      }
    },
    methods: {
      shortcutTouchStart(e) {
       let index = parseInt(getData(e.target, 'index'))
       let firstTouch = e.touches[0]
       this.touch.y1 = firstTouch.pageY
       this.touch.index = index
       this._scrollTo(index)
      },
      shortcutTouchMove(e) {
        let firstTouch = e.touches[0]
        this.touch.y2 = firstTouch.pageY
        let y = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
        let index = this.touch.index + y
        this._scrollTo(index)
      },
      getScrollPosition(pos) {
        this.scrollY = pos.y
      },
      selectItem(item) {
        this.$emit('select', item)
      },
      _scrollTo(index) {
        if(!index && index !== 0) {
          return
        }
        this.scrollY = -this.listHeight[index]
        this.$refs.listView.scrollToElement(this.$refs.listGroup[index], 0)
      },
      _calculateHeight() {
        this.listHeight = [0]
        const list = this.$refs.listGroup
        let height = 0
        for (let i = 0; i< list.length; i++) {
          let item = list[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      }
    },
    watch: {
      data(){
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      },
      scrollY(newY) {
        if(newY > 0 ) {
          this.currentIndex = 0
          return
        }

        for(let i = 0; i< this.listHeight.length - 1; i++) {
          let height1 = this.listHeight[i]
          let height2 = this.listHeight[i + 1]
          if(-newY >= height1 && -newY < height2) {
            this.currentIndex = i
            this.diff = height2 + newY
            return
          }
        }
        this.currentIndex = this.listHeight.length - 2
      },
      diff(newVal) {
        let fixedTop= (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT: 0
        if(this.fixedTop === fixedTop) {
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
      }
    },
    computed: {
      shortcutList() {
        return this.data.map(item => item.title.substr(0, 1))
      },
      fixedTitle() {
        if(this.data.length) {
          return this.data[this.currentIndex].title || ''
        }
      }
    },
    components: {
      scroll,
      Loading
    },
    mounted() {}
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/variable"

  .list-view
    position: relative
    width: 100%
    height: 100%
    max-height: 90vh
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 30px
      .list-group-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        &.current
          color: $color-theme
    .list-fixed
      position: absolute
      top: 0
      left: 0
      width: 100%
      .fixed-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-theme
        background: $color-highlight-background
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
