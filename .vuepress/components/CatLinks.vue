<template>
  <div>
    <h1>{{ displayTitle }}</h1>
    <nav v-if="userLinks.length">
      <div
        v-for="item, pos in userLinks"
        :key="item.link">
          <NavLink v-if="item.type !== 'links' && item.frontmatter.lastModified" :item="item"/>
          <hr v-if="!((pos+1) === userLinks.length)">
      </div>
    </nav>
  </div>
</template>

<script>
import NavLink from '../theme/NavLink.vue'
import moment from 'moment'
import displayTitle from '../utils'

export default {
  props: [
    'category'
  ],
  components: { NavLink },
  computed: {
    displayTitle () {
      return displayTitle(link.frontmatter.category);
    },
    catPages () {
      return (this.$site.pages || []).filter(link => this.category === link.frontmatter.category)
    },
    userLinks () {
      return this.catPages
        .map(link => {
          const val = String(link.title)
            .replace(/\[(.*)\]\(.*\)/, '$1') // md links of []()
            .replace(/\[(.*)\]\[.*\]/, '$1'); // md link sof [][]
          link.title = val;
          return link;
        })
        .sort((a, b) => {
          return moment.duration(this.postDate(b).diff(this.postDate(a)))
        })
    }
  },
  methods: {
    postDate (item) {
      if (item.lastModified) {
        return moment(item.lastModified * 1000)
      }
      return moment(item.frontmatter.lastModified)
    }
  }
}
</script>

<style>

</style>
