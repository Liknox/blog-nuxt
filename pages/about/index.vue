<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my Blog:</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          quas molestias aperiam unde sit dolores.
        </p>
        <intro title="Lorem ipsum dolor sit amet"/>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          quas molestias aperiam unde sit dolores.
        </p>
            <img src="@/assets/img/about.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          quas molestias aperiam unde sit dolores.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import intro from "@/components/UI/Intro.vue";
export default {
  components: {
    intro,
  },
  data() {
    return{
        title: ""
    }
  }
};
</script>

<style lang="scss">

.about {
  text-align: center;
  p {
    margin-bottom: 10px;
  }
}
.wrapper-content {
    min-height: 80vh;
}
</style>
