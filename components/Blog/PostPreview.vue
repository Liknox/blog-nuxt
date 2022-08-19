<template>
   <nuxt-link :to="/blog/ + post.id" class="post-preview">
      <img :src="post.img" :alt="post.title" />
      <div class="post-content">
         <h3 class="title">{{ post.title }}</h3>
         <p>{{ post.descr }}</p>
      </div>
   </nuxt-link>
</template>

<script>
export default {
   props: {
      post: {
         type: Object,
         required: true,
      },
   },
};
</script>

<style lang="scss">
.post-preview {
   max-width: 33%;
   padding: 16px;
   margin-bottom: 20px;
   text-align: center;
   img {
      margin-bottom: 16px;
   }
}
.post-content {
   p {
      color: #999;
   }
}
</style>
