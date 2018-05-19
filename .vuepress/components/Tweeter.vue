<template>
  <div class=".tweet">
    <Tweeted :id="id"></Tweeted>
  </div>
</template>

<script>
import { Tweet, Moment, Timeline } from 'vue-tweet-embed';

export default {
  props: ['id'],
  components: {
    'Tweeted': Tweet
  }
};
</script>

<style>
  .twitter-tweet.twitter-tweet-rendered {
    margin-left: auto;
    margin-right: auto;
  }
</style>