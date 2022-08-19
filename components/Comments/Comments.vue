<template>
   <section class="comments" v-if="comments">
      <div class="container">
         <h2 class="title">Comments:</h2>
         <div class="comment" v-for="comment in comments" :key="comment.name">
            <p class="name">{{ comment.name }}</p>
            <p class="text">{{ comment.text }}</p>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   props: {
      comments: {
         type: Array,
         default: null,
      },
   },
};
</script>

<style lang="scss">
.comment {
   padding: 20px;
   background-color: #fff;
   margin: 0 auto 20px auto;
   border-radius: 10px;
   width: 760px;
   .name {
      margin-bottom: 12px;
      font-size: 24px;
      color: #5c4de7;
   }
}
h2.title {
   text-align: center;
   margin-bottom: 30px;
}
</style>
