<template>
  <div class="tile is-vertical toolCard p5px" @click="goTo()">
    <p>
      <b-icon :icon="icon" :pack="pack" :size="size" type="is-success">
      </b-icon>
    </p>
    <p class="is-size-3 has-text-weight-bold">{{ title }}</p>
    <p class="subtitle" v-html="msg"></p>
  </div>
</template>

<script>
export default {
  name: "ToolCard",
  props: {
    icon: String,
    title: String,
    msg: String,
    to: { type: String, default: "/" },

    pack: {
      type: String,
      default: "fas",
    },
    size: {
      type: String,
      default: "is-large",
    },
  },
  methods: {
    goTo() {
      this.$router.push(this.to);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.subtitle {
  margin: 20px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Show max 2 lines */
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.5em; /* 2 lines * line-height (approx 1.25em) */
  line-height: 1.25em;
}
.toolCard {
  border-radius: 6px;
  border: 1px solid rgba(0, 148, 126, 0.6);
  background-color: rgba(0, 148, 126, 0.1);

  &:hover {
    color: #00947e !important;
    background-color: rgba(0, 148, 126, 0.2);
    cursor: pointer;
  }
}
</style>
