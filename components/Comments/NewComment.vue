<template>
   <section class="new-comment">
      <div class="container">
         <h2 class="title">New Comment!</h2>
         <Message v-if="message" :message="message" />

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
import Message from "@/components/UI/Message.vue";

import AppButton from "@/components/UI/Controls/Button.vue";
import AppInput from "@/components/UI/Controls/Input.vue";
import AppTextArea from "@/components/UI/Controls/TextArea.vue";
export default {
   components: { AppButton, AppInput, AppTextArea, Message },
   data() {
      return {
         message: "",
         comment: {
            name: "",
            text: "",
         },
      };
   },
   methods: {
      onSubmit() {
         console.log(this.comment);
         this.message = "Submitted!";
         this.comment.name = "";
         this.comment.text = "";
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
