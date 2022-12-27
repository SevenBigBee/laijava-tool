<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            <span>Lai's Blog</span>
          </a>
          <a class="navbar-item" @click="goHome()">
            <span>首页</span>
          </a>
          <a class="navbar-item" @click="goJsonEditor()">
            <span>Json在线编辑</span>
          </a>
          <!--          <div class="navbar-item has-dropdown is-hoverable">-->
          <!--            <a class="navbar-link"> Json </a>-->
          <!--            <div class="navbar-dropdown">-->
          <!--              <a class="navbar-item" @click="goJsonEditor()"> Json在线编辑 </a>-->
          <!--              <a class="navbar-item"> Json在线格式化 </a>-->
          <!--              <hr class="navbar-divider" />-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
    </nav>
    <InArticleAdsense
      ins-class="lai-in-article"
      data-ad-client="ca-pub-3186139682404753"
      data-ad-slot="3646146718"
    />
    <div class="columns app-body">
      <div class="column is-2 is-hidden-mobile"></div>
      <div class="column is-8">
        <router-view />
      </div>
      <div class="column is-2 is-hidden-mobile"></div>
    </div>
    <!--    <Adsense-->
    <!--      data-ad-client="ca-pub-3186139682404753"-->
    <!--      data-ad-slot="4281965832"-->
    <!--      is-new-ads-code="yes"-->
    <!--    >-->
    <!--    </Adsense>-->
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          2022 ©<strong>lai</strong>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            >粤ICP备19124538号</a
          >.
        </p>
        <BuSuanZi />
      </div>
    </footer>
  </div>
</template>
<script>
import BuSuanZi from "@/components/BuSuanZi";

export default {
  components: {
    BuSuanZi,
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goJsonEditor() {
      this.$router.push("/json/jsonEditor");
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.columns.app-body {
  min-height: 70vh;
  margin-top: 10px;
  /*margin: 0 15vw;*/
}
</style>
