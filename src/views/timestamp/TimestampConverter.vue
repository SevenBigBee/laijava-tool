<template>
  <section class="p-4">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold mb-4">时间戳转换</h1>

      <b-field label="当前时间戳 (毫秒)">
        <b-input v-model="currentTimestamp" expanded></b-input>
        <p class="control">
          <b-button @click="getCurrentTimestamp" type="is-primary">获取</b-button>
        </p>
      </b-field>

      <div class="mt-4">
        <p>点击按钮获取当前客户端的毫秒级时间戳。</p>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "TimestampConverter",
  data() {
    return {
      currentTimestamp: "",
    };
  },
  methods: {
    getCurrentTimestamp() {
      this.currentTimestamp = Date.now();
    },
  },
  mounted() {
    this.getCurrentTimestamp();
  },
};
</script>

<style scoped>
</style>
