<template>
   <v-container id="about" :alt= "page.alt">  
      <v-sheet
         class="d-flex align-center justify-center flex-wrap text-center px-4 text-white"
         elevation="0"
         height="auto"
         rounded
         width="100%"
         color="transparent"
      >
   <div class="section_titre">
     <h1 class="text-h2 font-weight">{{ page.titre }}</h1>
     <br>
     <div class="text-h5 font-weight-medium mb-2 mx-16 px-16">
       {{ page.text }}
     </div>
   
   </div>
 </v-sheet>
 <v-row class="text">
   <v-col cols="3"><h2 class="pa-5">OUR LOCATION</h2></v-col>
   <v-col cols="9">
      <p class="text-left pa-5">Mattis nisi, ultricies nunc pellentesque pulvinar malesuada habitant in. Sed sagittis lectus ut euismod. Mauris, dui viverra a tincidunt tellus tempus amet. Posuere massa at ornare nulla facilisi. Dignissim volutpat velit ut dignissim aliquet nisl, pretium, viverra bibendum.</p>
      <p class="text-left pa-5">Consequat facilisi ultricies integer eu nibh pellentesque. Morbi ac sit ultrices quis dignissim lectus. Pellentesque nisl, ac, bibendum arcu vestibulum aliquam.</p>
   </v-col>
</v-row>
<section>
   <v-row>
      <v-col class="icon"></v-col>
      <v-col class="img"></v-col>
   </v-row>
</section>

     <card_resa/>
     <formulaire/>
     <Footer1/>
     <router-view/>
  </v-container>
</template>

<script>
import card_resa from '@/components/card_resa.vue'
import formulaire from '@/components/formulaire.vue'
import Footer1 from '@/components/Footer1.vue'

export default {
   name: 'apropos',
   component: 'apropos',
   components: { card_resa, formulaire, Footer1},
   data: ()=> ({
      page: 
      {
        "id": 4,
        "alt": "image de a propos",
        "titre": "About Us",
        "text": "Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id."
   }, 
   }),
}
</script>
<style scoped>
#about {
   background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(102, 99, 99, 0.8)), url('@/assets/about-section.webp');
   height: 650px;
}
.v-container {
   max-width: 100vw;
}

.section_titre{
   margin-top: 350px;
}

.text {
   margin-top: 300px;
   font-size: 1.5rem;
   font-weight: 100;
   line-height: 1.3;
}

</style>