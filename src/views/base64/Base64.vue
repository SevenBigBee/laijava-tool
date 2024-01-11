<template>
  <div>
    <!-- Main container -->

    <b-message title="base64在线解码/编码" type="is-success" :closable="false">
      <div class="columns">
        <div class="column is-12">
          <div style="height: 30.9vh">
            <b-field label="">
              <b-input
                maxlength="40000"
                type="textarea"
                v-model="src"
                placeholder="请输入待编码内容"
              ></b-input>
            </b-field>
          </div>
        </div>
      </div>
      <div class="buttons">
        <b-button type="is-primary" @click="encode()">编码</b-button>
        <b-button type="is-primary" @click="decode()">解码</b-button>
      </div>
      <div class="columns">
        <div class="column is-12">
          <div style="height: 30.9vh">
            <b-field>
              <b-input
                maxlength="40000"
                type="textarea"
                v-model="target"
              ></b-input>
            </b-field>
          </div>
        </div>
      </div>
    </b-message>
  </div>
</template>

<script>
export default {
  name: "UrlComponent",
  // 注册组件
  components: {},
  data() {
    return {
      src: "",
      target: "",
    };
  },
  created() {},
  methods: {
    encode() {
      this.target = btoa(unescape(encodeURIComponent(this.src)));
    },
    // decode the text
    decode() {
      try {
        let decodedString = atob(this.src);
        // 处理中文字符
        this.target = decodeURIComponent(escape(decodedString));
      } catch (error) {
        this.$buefy.toast.open({
          duration: 5000,
          message: `解码失败`,
          position: "is-bottom",
          type: "is-danger",
        });
      }
    },
  },
  metaInfo: {
    title: "url在线", // set a title
    meta: [
      {
        // set meta
        name: "keyWords",
        content: "url在线解析,url在线编码",
      },
      {
        name: "description",
        content: "使用Vue.js实现URL编码和解码",
      },
    ],
    link: [
      {
        // set link
        rel: "asstes",
        href: "https://laijava.com/",
      },
    ],
  },
};
</script>

<style scoped>
.column {
  text-align: left;
}
/deep/.textarea {
  height: 30vh;
}
</style>
