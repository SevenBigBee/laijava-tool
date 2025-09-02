<template>
  <div class="home">
    <div class="columns is-multiline">
      <div class="column is-one-third-desktop is-half-tablet">
        <ToolCard
          to="/json/jsonEditor"
          icon="fa-hippo"
          title="json在线编辑"
          msg="json在线编辑工具，<strong>可视化</strong>编辑json对象和字符串"
        ></ToolCard>
      </div>
      <div class="column is-one-third-desktop is-half-tablet">
        <ToolCard
          to="/url/urlEncode"
          icon="fa-link"
          title="url在线编码"
          msg="url在线编码"
        ></ToolCard>
      </div>
      <div class="column is-one-third-desktop is-half-tablet">
        <ToolCard
          to="/base64/base64"
          icon="fa-exchange-alt"
          title="base64在线编码"
          msg="base64在线编码"
        ></ToolCard>
      </div>
      <div class="column is-one-third-desktop is-half-tablet">
        <ToolCard
          to="/timestamp/converter"
          icon="fa-clock"
          title="时间戳转换"
          msg="在线进行时间戳和日期格式之间的转换"
        ></ToolCard>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ToolCard from "@/components/ToolCard.vue";

export default {
  name: "HomeView",
  components: {
    ToolCard,
  },
  methods: {},
  metaInfo: {
    title: "工具大全", // set a title
    meta: [
      {
        // set meta
        name: "keyWords",
        content: "在线工具,工具,js tools,",
      },
      {
        name: "description",
        content: "在线工具大全，通过浏览器完成各种操作",
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
