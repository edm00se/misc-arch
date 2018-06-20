<template>
  <ul v-if="catPages.length">
    <li v-for="cat, pos in catPages"
      v-if="'general' !== cat"
      :key="pos"
      class="cat-item">
        <span v-if="getCategoryHref(cat)">
          <router-link
            class="cat-link"
            :to="getCategoryHref(cat)">
              {{cat | displayCategoryTitle}}
          </router-link>
        </span>
        <span v-else>{{cat | displayCategoryTitle}}</span>
      </li>
  </ul>
</template>

<script>
import NavLink from '../theme/NavLink.vue'
import { displayTitle, displayHref } from '../utils'

export default {
  components: { NavLink },
  computed: {
    allCatPages () {
      return (this.$site.pages || []).map(link => (link.frontmatter.category || 'general'));
    },
    catPages () {
      const uniqueAr = [...new Set(this.allCatPages)];
      return uniqueAr;
    }
  },
  methods: {
    getCategoryHref(value) {
      return displayHref(value);
    }
  },
  filters: {
    displayCategoryTitle(value) {
      return displayTitle(value);
    }
  }
}
</script>

<style scoped>
  .cat-item {
    list-style: none;
  }
</style>
