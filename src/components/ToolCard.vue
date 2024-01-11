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
      console.log(this.to);
      console.log(this.props);
      this.$router.push(this.to);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.subtitle {
  margin: 20px 0;
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
