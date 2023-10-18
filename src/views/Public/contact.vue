<template>
   <v-container id="contact">      
   <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center px-4 text-white"
    elevation="0"
    height="auto"
    rounded
    width="100%"
    color="transparent"
    :key="page.id"
  >
    <div class="section_titre">
      <h1 class="text-h2 font-weight">{{ page.titre }}</h1>
      <br>

      <div class="text-h5 font-weight-medium mb-2 mx-16 px-16">
         {{ page.text }}

        
      </div>
      
    </div>
  </v-sheet>
  <section>
  
  <div class="titre">OUR LOCATION</div>
  <div class="sous-titre"><p class="text-center">3 E 19th St, 123 Fifth Avenue, NY 10160, New York, USA</p></div>
</section>
      <card_resa/>
      <formulaire/>
      <Footer1/>
      <router-view/>
   </v-container>
</template>

<script >
import navbar from '@/components/navbar.vue'
import card_resa from '@/components/card_resa.vue'
import formulaire from '@/components/formulaire.vue'


import Footer1 from '@/components/Footer1.vue'

export default {
   name: 'contact',
   component: 'contact',
   components: {
      navbar,
      card_resa,
      formulaire,
      Footer1
   },
   data: ()=> ({
      page: 
      {
        "id": 3,
        "alt": "image de contact",
        "titre": "Contact Us",
        "text": "Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id."
   }, 

   }),  
}
</script>
<style scoped>
.v-container {
   max-width: 100vw;
}
#contact{
   background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(102, 99, 99, 0.8)),url('@/assets/contact-us.webp');
   background-size: cover;
   height: 650px;
  }

.section_titre{
   margin-top: 350px;
}
  .titre{
   margin-top: 450px;
   margin-bottom: 40px;
   letter-spacing: 2px;
   font-size: 18px;
   font-weight: 700;
   text-align: center;
  }

.sous-titre {
   font-size: 5rem;
   font-weight: 700;
   margin-left: 205px;
   margin-right: 205px;
   line-height: 1.3;
}

</style>
 