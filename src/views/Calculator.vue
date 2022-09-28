<template>
  <div class="container" data-view>
    <div class="container__inner">
      <div>
        <Header />
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";

  export default {
    name: "Calculator",
    components: {Header},
  }
</script>

<style scoped>

</style>
