<template>
  <div>
    <div id="head-c" class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-8 col-md-10">
            <h1 id="blog-name">
              <router-link
                to="/">
                  {{ $siteTitle }}
              </router-link>
            </h1>
            <div class="custom-pages-list">
              <span class="custom-page" v-for="page, pos in $site.themeConfig.pages" :key="page.href">
                <a :href="page.href">{{page.title}}</a>
              </span>
            </div>
          </div>
        </div>
    </div>

    <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-8 col-md-10">
              <div class="custom-layout" v-if="$page.frontmatter.layout">
                <component :is="$page.frontmatter.layout"/>
              </div>
              <Home v-else-if="$page.frontmatter.home"/>
              <Page v-else>
                <slot name="page-top" slot="top"/>
                <slot name="page-bottom" slot="bottom"/>
              </Page>
            </div>
        </div>

    </div>

    <div class="container footer">
        <center>
            <hr width="50%">
            <span id="subtitle">{{ $description }}</span>

            <div class="row justify-content-md-center">
              <div class="col col-lg-8 col-md-10">
                  <p class="small">
                    &copy; 2019 <a href="https://edm00se.codes/">@edm00se</a>
                  </p>
                  <center>
                    <a v-for="link in $site.themeConfig.usefulLinks" :key="link.href" :href="link.href"
                      :class="link.site" target="_blank" rel="noopener" class="social">
                      <i :class="link.cssIcon"></i>
                    </a>
                  </center>
              </div>
            </div>
        </center>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import Home from './Home.vue'
import Page from './Page.vue'

export default {
  components: { Home, Page },

  created () {
    if (this.$ssrContext) {
      this.$ssrContext.title = this.$title
      this.$ssrContext.lang = this.$lang
      this.$ssrContext.description = this.$page.description || this.$description
    }
  },

  mounted () {

    // configure progress bar
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
    })
  },

  beforeDestroy () {
    updateMetaTags(null, this.currentMetaTags)
  }
}

function updateMetaTags (meta, current) {
  if (current) {
    current.forEach(c => {
      document.head.removeChild(c)
    })
  }
  if (meta) {
    return meta.map(m => {
      const tag = document.createElement('meta')
      Object.keys(m).forEach(key => {
        tag.setAttribute(key, m[key])
      })
      document.head.appendChild(tag)
      return tag
    })
  }
}
</script>

<style src="prismjs/themes/prism.css"></style>
<style src="source-code-pro/source-code-pro.css"></style>
<style src="source-sans-pro/source-sans-pro.css"></style>
<style src="./less/blog/blog.less" lang="less"></style>
<style src="font-awesome/css/font-awesome.min.css"></style>
<style>
  #blog-name a:hover, #blog-name a:focus {
    color: initial;
  }

  .header-anchor {
    display: none;
  }

  p.small {
    margin-bottom: 1rem;
  }
</style>
