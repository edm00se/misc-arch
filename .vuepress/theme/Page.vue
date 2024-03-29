<template>
  <div>

    <article>
      <span v-if="$page.frontmatter.showLastModified !== false">
        <p class="post-page-meta">{{ postDate }}</p>
        <hr>
      </span>
      <Content :custom="false"/>
    </article>

    <div class="content edit-link" v-if="editLink">
      <br>
      <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
      <OutboundLink/>
    </div>

    <div class="content page-nav" v-if="prev || next">
      <p class="inner">
        <span v-if="prev" class="prev">
          ← <router-link v-if="prev" class="prev" :to="prev.path">
            {{ prev.title || prev.path }}
          </router-link>
        </span>
        <span v-if="next" class="next">
          <router-link v-if="next" :to="next.path">
            {{ next.title || next.path }}
          </router-link> →
        </span>
      </p>
    </div>

    <div v-if="this.$page.frontmatter.comments === true && isProd" class="comments">
      <vue-disqus shortname="edm00se-misc" :identifier="this.$page.title | kebabCase" :url="`https://edm00se.codes/misc${this.$page.path}`"></vue-disqus>
    </div>

  </div>
</template>

<script>
import OutboundLink from './OutboundLink.vue'
import { resolvePage, normalize, outboundRE, endingSlashRE } from '@default-theme/util'
import moment from 'moment'
import Vue from 'vue'
import VueDisqus from 'vue-disqus'

Vue.use(VueDisqus)

/**
 * Converts a string to kebab case.
 * Example: Title Case => title-case
 * 
 * @param  {String} str the string to convert
 * @return {String}
 */
Vue.filter('kebabCase', function (str) {  
    return str.toLowerCase().split(' ').map(function (item) {
        return item.charAt(0) + item.substring(1);
    }).join('-');
});

export default {
  components: { OutboundLink },
  data() {
    return {
      isProd: process.env.NODE_ENV === 'production'
    }
  },
  computed: {
    postDate () {
      if (this.$page.lastModified) {
        return moment(this.$page.lastModified * 1000).format("MMM DD, Y")
      }
      return moment(this.$page.frontmatter.lastModified).format("MMM DD, Y")
    },
    prev () {
      const prev = this.$page.frontmatter.prev
      if (prev === false) {
        return
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path)
      }
    },
    next () {
      const next = this.$page.frontmatter.next
      if (next === false) {
        return
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path)
      }
    },
    editLink () {
      if (this.$page.frontmatter.editLink === false) {
        return
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$site.themeConfig

      let path = normalize(this.$page.path)
      if (endingSlashRE.test(path)) {
        path += 'README.md'
      } else {
        path += '.md'
      }

      if (docsRepo && editLinks) {
        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : `https://github.com/${docsRepo}`
        return (
          base.replace(endingSlashRE, '') +
          `/edit/${docsBranch}` +
          (docsDir !== '' ? '/' + docsDir.replace(endingSlashRE, '') : '' ) +
          path
        )
      }
    },
    editLinkText () {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      )
    }
  }
}
</script>

<style lang="stylus">

$textColor = #2c3e50
$borderColor = #eaecef

.edit-link.content
  padding-top 0 !important
  a
    color lighten($textColor, 25%)
    margin-right 0.25rem

.page-nav.content
  padding-top 1rem !important
  padding-bottom 0 !important
  .inner
    min-height 2rem
    margin-top 0 !important
    border-top 1px solid $borderColor
    padding-top 1rem
  .next
    float right

h1:hover .header-anchor, h2:hover .header-anchor, h3:hover .header-anchor
  display: inline-block
  text-decoration: none
</style>
