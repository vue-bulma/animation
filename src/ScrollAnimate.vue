<template>
  <div :class="[needAnimate ? (visible ? enterClass : leaveClass) : '']">
    <slot></slot>
  </div>
</template>

<script>
import { windowHeight, currentScrollTop } from './utils'

export default {
  data () {
    return {
      elPercent: 0,
      visible: false
    }
  },

  props: {
    needAnimate: {
      type: Boolean,
      default: true
    },
    percentage: {
      type: Number,
      default: 25
    },
    transition: {
      type: String,
      default: 'fade'
    },
    direction: {
      type: String,
      default: ''
    }
  },

  computed: {
    enterClass () {
      return `animated ${this.transition}In${this.direction}`
    },
    leaveClass () {
      return `animated ${this.transition}Out${this.direction}`
    }
  },

  methods: {
    toggleVisibility () {
      let clientBottom = this.$el.clientHeight + this.$el.offsetTop
      let elScroll = clientBottom - currentScrollTop() - windowHeight()
      this.visible = elScroll <= 0 || (elScroll / this.$el.clientHeight >= this.percentage)
      this.$slots.default.forEach(child => {
        if (child && child.componentInstance && 'show' in child.componentInstance) {
          child.componentInstance.show = this.visible
        }
      })
    }
  },

  mounted () {
    this.toggleVisibility()
    this.$el._scrollHandler = () => {
      this.toggleVisibility()
    }
    window.addEventListener('scroll', this.$el._scrollHandler)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.$el._scrollHandler)
  }
}
</script>
