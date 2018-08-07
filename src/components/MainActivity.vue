<template>
  <div class="main">
    <div class="main-right-top">
      <h1>{{ msg }}</h1>
      <p>
        I heard vue is easy to use so I decided to use it to build my profile.
        This is my first time using Vue. It’s been a while since I’ve used SASS.
        I can’t predict what it will look like in the future,
        but I can at least predict that I was about to write maybe some dry css,
        so I thought why not use Sass.

        So far, easy to understand and documentation is pretty good.
      </p>
      <h3>My Projects</h3>
      <ol>
        <li><strong>JW Player RecyclerView </strong><a href="https://github.com/hyunjkim/jwplayer-recycler-demo" target="_blank">RecyclerView for Videos</a></li>
        <li><strong>Game-night </strong><a href="https://github.com/yeb9925/game-night" target="_blank">Play different board games with friends</a></li>
        <li><strong>Collab </strong><a href="https://github.com/hyunjkim/collab" target="_blank">Collab on Spotify with Friends</a></li>
      </ol>
    </div>
    <div class="main-right-bottom">
      <ul>
        <li><a href="https://linkedin.com/in/hyunjoo-kim" target="_blank"><img src="../assets/icons/linkedin_logo.png"/></a></li>
        <li><a href="https://github.com/hyunjkim" target="_blank"><img src="../assets/icons/github_logo.png"/></a></li>
        <li><a href="https://github.com/hyunjkim" target="_blank"><img src="../assets/icons/instagram_logo.jpeg"/></a></li>
        <li><a href="mailto:hyunjkim111@gmail.com?subject=I like you, work for me"><img src="../assets/icons/gmail_logo.jpeg"/></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainActivity',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/css/mainactivity.scss"
</style>
