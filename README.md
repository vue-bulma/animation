# Animation

Animation component for Vue Bulma.
Thanks to [Animate.css](https://daneden.github.io/animate.css/)

## Installation

```
$ npm install vue-bulma-animation animate.css --save
```

## Examples

```vue
<template>
  <article>
    <section style="padding-top: 5rem; height: 70vh;">
      Scroll Down to check the enter animation
    </section>
    <scroll-animate style="padding-top: 10rem; height: 50vh;" 
      transition="fade" 
      :percentage="10"
      :needAnimate="false">
      <queue-animate transition="zoom">
        <h1>This is Queue Animation</h1>
        <div>Hello</div>
        <div>This</div>
        <div>Beautiful</div>
        <div>World</div>
      </queue-animate>
    </scroll-animate>
    <scroll-animate transition="fade" style="padding-top: 10rem; height: 50vh;">
      <h1>This is scroll</h1>
      <div>Hi</div>
    </scroll-animate>
    <section style="height: 100vh;">
      Scroll Up to check the leave animation
    </section>
  </article>
</template>

<script>
import { ScrollAnimate, QueueAnimate } from 'vue-bulma-animation'

export default {
  components: {
    ScrollAnimate,
    QueueAnimate
  }
}
</script>
```

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-dev-yellow.svg)
