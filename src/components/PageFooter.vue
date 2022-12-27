<template>
  <div>
    <footer class="footer">
      <div class="content has-text-centered">
        <slot />
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style scoped>
.footer {
  background-color: #fff;
  padding: 1rem 1.5rem 0.5rem;
}
</style>
