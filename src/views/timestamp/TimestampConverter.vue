<template>
  <section class="p-6">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold mb-6 text-center">时间戳转换</h1>

      <!-- Live Clock -->
      <b-box>
        <h2 class="text-xl font-semibold mb-4">实时时间</h2>
        <b-field label="当前日期" horizontal>
          <b-input :value="liveFormattedDate" readonly expanded></b-input>
        </b-field>
        <b-field label="当前时间戳 (毫秒)" horizontal>
          <b-input :value="currentTimestamp" readonly expanded icon="clock"></b-input>
        </b-field>
      </b-box>

      <!-- Manual Conversion -->
      <b-box class="mt-6">
        <h2 class="text-xl font-semibold mb-4">手动转换</h2>
        <b-field label="日期/时间" horizontal>
          <b-datetimepicker
            v-model="conversionDate"
            rounded
            placeholder="点击选择日期和时间"
            icon="calendar-alt"
            icon-prev="chevron-left"
            icon-next="chevron-right"
            :timepicker="{ hourFormat: '24', enableSeconds: true }"
            :datetime-formatter="formatDateTimeForPicker"
            :datetime-parser="parseDateTimeFromPicker"
            expanded>
          </b-datetimepicker>
        </b-field>
        <b-field label="时间戳 (毫秒)" horizontal>
           <b-input v-model="conversionTimestamp" rounded placeholder="输入或查看13位时间戳" expanded icon="hashtag"></b-input>
        </b-field>
      </b-box>

      <!-- Description -->
      <b-box class="mt-6 content">
        <h4>什么是时间戳？</h4>
        <p>
          时间戳（Timestamp）是指格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的总毫秒数。它是一个长整型，通常为13位。
        </p>
        <p>
          在计算机中，时间戳是表示某一时刻的唯一、可排序的方式，常用于记录事件发生的时间、数据版本控制和缓存更新等场景。
        </p>
      </b-box>

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
    formatDateTimeForPicker(date) {
      // Formats the date for the text input field of the picker
      return this.formatTimestamp(date.getTime());
    },
    parseDateTimeFromPicker(datestr) {
      // Parses the text input from the picker
      const date = new Date(datestr);
      return isNaN(date.getTime()) ? null : date;
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
/deep/ .b-field.is-horizontal {
  align-items: center;
}
/* Fix for icon overflowing input due to CSS reset */
/deep/ .has-icons-left .input {
  padding-left: 2.5em;
}
</style>
