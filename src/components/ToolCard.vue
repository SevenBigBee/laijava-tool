<template>
  <div class="tile is-vertical toolCard">
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
    pack: {
      type: String,
      default: "fas",
    },
    size: {
      type: String,
      default: "is-large",
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
  &:hover {
    color: #00947e !important;
    background-color: #ebfffc;
    cursor: pointer;
  }
}
</style>
