<template>
  <section class="p-4">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold mb-4">时间戳转换</h1>

      <!-- Live Clock -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">实时时间</h2>
        <b-field label="当前日期 (yyyy-MM-dd HH:mm:ss)">
          <b-input :value="liveFormattedDate" readonly></b-input>
        </b-field>
        <b-field label="当前时间戳 (毫秒)">
          <b-input :value="currentTimestamp" readonly></b-input>
        </b-field>
      </div>

      <hr class="my-6">

      <!-- Manual Conversion -->
      <div>
        <h2 class="text-xl font-semibold mb-2">手动转换 (双向绑定)</h2>

        <b-field label="日期/时间选择">
          <b-datetimepicker
            v-model="conversionDate"
            rounded
            placeholder="点击选择日期和时间"
            icon="calendar-today"
            :timepicker="{ hourFormat: '24' }">
          </b-datetimepicker>
        </b-field>

        <b-field label="时间戳 (毫秒)">
           <b-input v-model="conversionTimestamp" placeholder="输入或查看13位时间戳"></b-input>
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
      // Live clock
      currentTimestamp: "",
      intervalId: null,
      // Manual conversion
      conversionDate: new Date(),
      conversionTimestamp: String(new Date().getTime()),
      isUpdating: false, // Flag to prevent watcher loops
    };
  },
  computed: {
    liveFormattedDate() {
      if (!this.currentTimestamp) return "";
      return this.formatTimestamp(this.currentTimestamp);
    },
  },
  watch: {
    conversionDate(newDate) {
      if (this.isUpdating) return;
      if (newDate && !isNaN(newDate.getTime())) {
        this.isUpdating = true;
        this.conversionTimestamp = String(newDate.getTime());
        this.$nextTick(() => { this.isUpdating = false; });
      }
    },
    conversionTimestamp(newTs) {
      if (this.isUpdating) return;
      const tsNumber = Number(newTs);
      if (newTs && !isNaN(tsNumber) && String(newTs).length >= 10) {
        this.isUpdating = true;
        // Handle 10-digit (seconds) and 13-digit (milliseconds) timestamps
        const date = new Date(tsNumber * (String(tsNumber).length === 10 ? 1000 : 1));
        if (!isNaN(date.getTime())) {
          this.conversionDate = date;
        }
        this.$nextTick(() => { this.isUpdating = false; });
      }
    }
  },
  methods: {
    updateTime() {
      this.currentTimestamp = Date.now();
    },
    pad(n) {
      return n < 10 ? "0" + n : n;
    },
    formatTimestamp(ts) {
      const date = new Date(Number(ts));
      if (isNaN(date.getTime())) return "";
      const year = date.getFullYear();
      const month = this.pad(date.getMonth() + 1);
      const day = this.pad(date.getDate());
      const hours = this.pad(date.getHours());
      const minutes = this.pad(date.getMinutes());
      const seconds = this.pad(date.getSeconds());
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
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
