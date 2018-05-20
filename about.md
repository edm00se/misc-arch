---
hideFromPosts: true
showLastModified: false
---

<div>
  <a v-for="link in $site.themeConfig.usefulLinks" :key="link.href" :href="link.href" target="_blank" class="social">
    <i :class="link.cssIcon"></i>
  </a>
</div>

# Miscellanea

> a collection of miscellaneous objects or writings
>
> &mdash; <cite>[Merriam-Webster](https://www.merriam-webster.com/dictionary/miscellanea)</cite>

A micro blog by [@edm00se](https://edm00se.codes/). Uses vuepress and a modified version of [vuepress-canvas](https://github.com/whoan/vuepress-canvas).