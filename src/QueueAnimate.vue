<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },

  props: {
    visible: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 100
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
      return `${this.transition}In${this.direction}`
    },

    leaveClass () {
      return `${this.transition}Out${this.direction}`
    },
    animated () {
      return this.visible || this.show
    }
  },

  watch: {
    animated (newVal) {
      clearInterval(this.intervalId)
      if (newVal) {
        let idx = 0
        this.intervalId = setInterval(() => {
          if (idx < this.$queueChildren.length) {
            let child = this.$queueChildren[idx]
            child.elm.className = child.elm.className.replace(this.leaveClass, this.enterClass)
            idx++
          } else {
            clearInterval(this.intervalId)
          }
        }, this.interval)
      } else {
        let idx = this.$queueChildren.length - 1
        this.intervalId = setInterval(() => {
          if (idx > -1) {
            let child = this.$queueChildren[idx]
            child.elm.className = child.elm.className.replace(this.enterClass, this.leaveClass)
            idx--
          } else {
            clearInterval(this.intervalId)
          }
        }, this.interval)
      }
    }
  },

  mounted () {
    this.$queueChildren = this.$slots.default.filter(c => c.elm && 'className' in c.elm)
    this.$queueChildren.forEach(child => {
      child.elm.className = 'animated ' + this.leaveClass
    })
  }
}
</script>
