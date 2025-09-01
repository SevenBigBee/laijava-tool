<template>
  <div class="busuanzi">
    <b-field grouped group-multiline>
      <div class="control">
        <b-taglist attached id="busuanzi_container_site_pv" class="is-flex">
          <b-tag
            type="is-dark"
            icon-pack="fas"
            icon="fa-lightbulb"
            icon-type="is-danger"
            >访问量</b-tag
          >
          <b-tag type="is-danger" id="busuanzi_value_site_pv"></b-tag>
        </b-taglist>
      </div>
      <div class="control">
        <b-taglist attached id="busuanzi_container_site_uv" class="is-flex">
          <b-tag
            type="is-dark"
            icon-pack="fas"
            icon="fa-users"
            icon-type="is-primary"
            >访客量</b-tag
          >
          <b-tag type="is-primary" id="busuanzi_value_site_uv"></b-tag>
        </b-taglist>
      </div>
      <div class="control">
        <b-taglist attached id="busuanzi_container_page_pv" class="is-flex">
          <b-tag
            type="is-dark"
            icon-pack="fas"
            icon="fa-crown"
            icon-type="is-warning"
            >本页访客</b-tag
          >
          <b-tag type="is-warning" id="busuanzi_value_page_pv"></b-tag>
        </b-taglist>
      </div>
    </b-field>
  </div>
</template>

<script>
let script;
export default {
  name: "BuSuanZi",
  mounted: function () {
    console.log(document.referrer);
    script = require("busuanzi.pure.js");
  }, // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        script.fetch();
      }
    },
  },
};
</script>

<style scoped>
/deep/ .field.is-grouped.is-grouped-multiline {
  justify-content: center;
}

/deep/ .svg-inline--fa {
  height: 0.75rem;
}
</style>
