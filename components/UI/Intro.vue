<template>
  <section class="intro">
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.intro {
  width: 100%;
  margin: 30px 0;
  text-align: center;
  color: #ffffff;
  background-color: #4b40e3;
  h1 {
    font-size: 26px;
  }
}
</style>
