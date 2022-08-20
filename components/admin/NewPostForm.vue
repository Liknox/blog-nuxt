<template>
   <section class="new-post">
      <div class="container">
         <form>
            <AppInput v-model="post.title">Title:</AppInput>
            <AppInput v-model="post.descr">Description:</AppInput>
            <AppInput v-model="post.img">Img Link:</AppInput>
            <AppTextArea v-model="post.content">Content: </AppTextArea>

            <div class="controls">
               <AppButton class="btnDanger">Cancel</AppButton>
               <AppButton>Save</AppButton>
            </div>
         </form>
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         post: {
            title: "",
            descr: "",
            img: "",
            content: "",
         },
      };
   },
};
</script>

<style lang="scss" scoped>
.controls {
   text-align: center;
   margin: 50px 0;
}
</style>
