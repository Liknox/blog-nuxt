<template>
   <div class="container">
      <div class="posts">
         <input type="text" v-model="postId">
         <button class="btn btnPrimary" @click="loadPost">Get Post</button>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         postId: ""
      }
   },
   methods: {
      loadPost() {
         this.$router.push(`/posts/${this.postId}`)
      }
   }
}
</script>

<style lang="scss" scoped>
input {
   margin-top: 100px;
   width: 200px;
}
</style>