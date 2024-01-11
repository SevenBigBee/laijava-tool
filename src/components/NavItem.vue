<template>
  <div flex class="flex-items-center" @click="goTo()">
    <b-icon
      v-if="icon"
      b-icon
      :icon="icon"
      :pack="pack"
      :size="size"
      :type="type"
      flex
      mr5px
    >
    </b-icon>
    <div>{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    icon: String,
    title: String,
    type: String,
    pack: {
      type: String,
      default: "fas",
    },
    to: { type: String, default: "/" },
    size: {
      type: String,
      default: "",
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
