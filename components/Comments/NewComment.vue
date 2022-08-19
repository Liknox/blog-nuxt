<template>
   <section class="new-comment">
      <div class="container">
         <h2 class="title">New Comment!</h2>
         <form @submit.prevent="onSubmit" class="contact-form">
            <AppInput v-model="comment.name">Name:</AppInput>
            <AppTextArea v-model="comment.text">Text:</AppTextArea>

            <div class="controls">
               <AppButton>Submit !</AppButton>
            </div>
         </form>
      </div>
   </section>
</template>

<script>
import AppButton from "@/components/UI/Controls/Button.vue";
import AppInput from "@/components/UI/Controls/Input.vue";
import AppTextArea from "@/components/UI/Controls/TextArea.vue";
export default {
   components: { AppButton, AppInput, AppTextArea },
   data() {
      return {
         comment: {
            name: "",
            text: "",
         },
      };
   },
   methods: {
      onSubmit() {
         console.log(this.comment);
      },
   },
};
</script>

<style lang="scss">
.new-comment {
   text-align: center;
   .controls {
      margin: 30px 0;
   }
   &-form {
      max-width: 600px;
      margin: 30px auto;
   }
}
</style>
