<template>
   <section class="new-post">
      <div class="container">
         <form @submit.prevent>
            <AppInput v-model="post.title">Title:</AppInput>
            <AppInput v-model="post.descr">Description:</AppInput>
            <AppInput v-model="post.img">Img Link:</AppInput>
            <AppTextArea v-model="post.content">Content: </AppTextArea>

            <div class="controls">
               <AppButton class="btnDanger" @click="cancel">Cancel</AppButton>
               <AppButton @click="onSubmit">Save</AppButton>
            </div>
         </form>
      </div>
   </section>
</template>

<script>
export default {
   props: {
      postEdit: {
         type: Object,
         required: false,
      },
   },
   data() {
      return {
         post: this.postEdit
            ? { ...this.postEdit }
            : {
                 title: "",
                 descr: "",
                 descr: "",
                 img: "",
                 content: "",
              },
      };
   },
   methods: {
      cancel() {
         this.$router.push("/admin");
      },
      onSubmit() {
         this.$emit("submit", this.post);
      },
   },
};
</script>

<style lang="scss" scoped>
.controls {
   text-align: center;
   margin: 50px 0;
}
</style>
