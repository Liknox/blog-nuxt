<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <intro title="My last posts" />
  </div>
</template>
<script>
import promo from "@/components/Promo.vue";
import intro from "@/components/UI/intro.vue";
export default {
  components: {
    promo,
    intro,
  },
};
</script>

<style lang="scss">
.promo {
  text-align: center;
  p {
    color: #999;
  }
}

.wrapper-content {
  min-height: 80vh;
}
</style>
