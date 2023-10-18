<template>
   <v-img :src="require('@/assets/architecture.jpg')">
   <div class="text-h2 mt-16">
      oh ! La boulette, la boulette ! Cette page n'existe pas !
   </div>
   <div class="position-absolute d-flex align-center justify-center w-100 h-100">
      <v-btn
        size="x-large"
        @click="goHome()"
      >
        Retour à l'accueil
      </v-btn>
   
    </div>
   </v-img>
</template>

<script>
export default {
   name: 'redirection',
   component: 'redirection',
   methods: {
      goHome (){
         this.$router.push(('/'))
      }
   }
}
</script>