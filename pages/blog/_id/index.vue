<template>
   <div class="wrapper-content wrapper-content--fixed">
      <post :post="post" />
      <comments :comments="comments" />
      <newComment />
   </div>
</template>

<script>
import post from "@/components/Blog/Post.vue";
import newComment from "@/components/Comments/NewComment.vue";
import comments from "@/components/Comments/Comments.vue";
export default {
   components: {
      post,
      comments,
      newComment,
   },
   data() {
      return {
         post: {
            id: 1,
            title: "1 post",
            descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            content:
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img: "https://images.newscientist.com/wp-content/uploads/2022/02/24145845/SEI_89826778.jpg?crop=1:1,smart&width=1200&height=1200&upscale=true",
         },
         comments: [
            { name: "Alex", text: "Lorem ipsum dolor sit amet, consectetur" },
            { name: "Sanya", text: "Lorem ipsum dolor sit amet, consectetur" },
         ],
      };
   },
};
</script>

<style lang="scss">
.post {
   max-width: 900px;
   margin: 0 auto;
}
.post-header {
   text-align: center;
   margin-bottom: 30px;
   img {
      max-width: 400px;
      margin-bottom: 16px;
   }
   p {
      color: #999;
   }
}
.post-body {
   text-align: left;
}
</style>
