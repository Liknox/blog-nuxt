<template>
   <section class="auth">
      <div class="container">
         <form @submit.prevent="onSubmit" class="auth-form">
            <AppInput>Login:</AppInput>
            <AppInput>Password:</AppInput>
            <div class="controls">
               <AppButton>Log in!</AppButton>
            </div>
         </form>
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         
      }
   },
};
</script>
