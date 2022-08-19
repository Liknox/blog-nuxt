<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <intro title="My last posts: " />
    <postsList :posts="posts" />
    <contacts />
  </div>
</template>
<script>
import promo from "@/components/Promo.vue";
import intro from "@/components/UI/intro.vue";
import postsList from "@/components/Blog/PostsList.vue";
import contacts from "@/components/Contacts.vue";

export default {
  components: {
    promo,
    intro,
    postsList,
    contacts,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "1 post",
          descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          img: "https://images.newscientist.com/wp-content/uploads/2022/02/24145845/SEI_89826778.jpg?crop=1:1,smart&width=1200&height=1200&upscale=true",
        },
        {
          id: 2,
          title: "2 post",
          descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          img: "https://iheartdogs.com/wp-content/uploads/2017/09/Brite-Bite-0021-2.jpg",
        },
        {
          id: 3,
          title: "3 post",
          descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          img: "https://d2zp5xs5cp8zlg.cloudfront.net/image-40558-800.jpg",
        },
      ],
    };
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
