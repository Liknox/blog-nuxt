<template>
  <div class="mt100 container">
     <h1 class="a">User id is: {{ $route.params.id }}</h1>
  </div>
</template>
<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
};
</script>

<style lang="scss">
</style>