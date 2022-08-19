<template>
   <section class="not-found">
      <div class="container">
         <div class="not-found--wrapper">
            <p class="title">Page Not Found</p>
            <nuxt-link to="/" class="btn btnPrimary">Back to main Page</nuxt-link>
         </div>
      </div>
   </section>
</template>
<style lang="scss">
.not-found--wrapper {
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 80vh;
}
</style>