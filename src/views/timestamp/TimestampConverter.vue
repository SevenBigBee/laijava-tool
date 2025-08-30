<template>
  <section class="p-4">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold mb-4">时间戳转换</h1>

      <!-- Live Clock -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">实时时间</h2>
        <b-field label="当前时间戳 (毫秒)">
          <b-input :value="currentTimestamp" readonly></b-input>
        </b-field>
        <b-field label="当前日期 (yyyy-MM-dd HH:mm:ss)">
          <b-input :value="formattedDate" readonly></b-input>
        </b-field>
      </div>

      <hr class="my-6">

      <!-- Manual Conversion -->
      <div>
        <h2 class="text-xl font-semibold mb-2">手动转换</h2>

        <!-- Timestamp to Date -->
        <b-field label="时间戳 (毫秒) -> 日期">
          <b-input v-model="manualTimestamp" @input="convertTsToDate" placeholder="输入10或13位时间戳"></b-input>
        </b-field>
        <b-field>
           <b-input :value="manualDate" readonly placeholder="转换后的日期"></b-input>
        </b-field>

        <!-- Date to Timestamp -->
        <b-field label="日期 -> 时间戳 (毫秒)" class="mt-4">
          <b-input v-model="manualDateInput" @input="convertDateToTs" placeholder="例如: 2023-01-01 12:00:00"></b-input>
        </b-field>
        <b-field>
          <b-input :value="manualTimestampOutput" readonly placeholder="转换后的时间戳"></b-input>
        </b-field>
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
      intervalId: null,
      manualTimestamp: "",
      manualDate: "",
      manualDateInput: "",
      manualTimestampOutput: "",
    };
  },
  computed: {
    formattedDate() {
      if (!this.currentTimestamp) return "";
      return this.formatTimestamp(this.currentTimestamp);
    },
  },
  methods: {
    updateTime() {
      this.currentTimestamp = Date.now();
    },
    pad(n) {
      return n < 10 ? "0" + n : n;
    },
    formatTimestamp(ts) {
      // Ensure timestamp is a number and in milliseconds
      const timestamp = Number(ts);
      if (isNaN(timestamp)) return "无效的时间戳";

      // Check if it's seconds and convert to milliseconds
      const date = new Date(timestamp * (String(timestamp).length === 10 ? 1000 : 1));

      const year = date.getFullYear();
      const month = this.pad(date.getMonth() + 1);
      const day = this.pad(date.getDate());
      const hours = this.pad(date.getHours());
      const minutes = this.pad(date.getMinutes());
      const seconds = this.pad(date.getSeconds());
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
    convertTsToDate() {
      if (!this.manualTimestamp) {
        this.manualDate = "";
        return;
      }
      this.manualDate = this.formatTimestamp(this.manualTimestamp);
    },
    convertDateToTs() {
      if (!this.manualDateInput) {
        this.manualTimestampOutput = "";
        return;
      }
      const date = new Date(this.manualDateInput);
      if (isNaN(date.getTime())) {
        this.manualTimestampOutput = "无效的日期格式";
      } else {
        this.manualTimestampOutput = date.getTime();
      }
    },
  },
  mounted() {
    this.updateTime();
    this.intervalId = setInterval(this.updateTime, 1000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>

<style scoped>
</style>
