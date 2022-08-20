<template>
      <PostsList :admin=true :posts="posts" />
</template>

<script>
export default {
   layout: "admin",
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
