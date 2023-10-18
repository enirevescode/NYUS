<template>
  <v-container id="menu">  
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
  
      <appetizer/>

      <carte_menu/>
      
      <div class="resa mt-n16 mb-n11">
      <card_resa/>
      </div>
   
      <Footer1/>

  </v-container>
</template>
<script>
import appetizer from '@/components/appetizer.vue'
import carte_menu from '@/components/carte_menu.vue'
import card_resa from '@/components/card_resa.vue'
import Footer1 from '@/components/Footer1.vue'

export default {
  components: {appetizer,carte_menu, card_resa, Footer1},
  data: ()=> ({
      page: 
      {
        "id": 2,
        "alt": "image du menu",
        "titre": "Our Menu",
        "text": "Massa praesent sit suspendisse ac volutpat amet. Commodo elit at non neque ullamcorper id."
   }, 
   }),
}
</script>
<style scoped>
.v-container {
max-width: 100%;
}

#menu {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(102, 99, 99, 0.8)), url('@/assets/signature.webp');
  background-size: cover;
  height: 650px;
}

.section_titre{
   margin-top: 350px;
}
  /* .titre{
   margin-top: 450px;
   margin-bottom: 40px;
   letter-spacing: 2px;
   font-size: 45px;
   font-weight: 700;
   text-align: center;
  } */

.sous-titre {
   font-size: 1.5rem;
   font-weight: 100;
   margin-left: 205px;
   margin-right: 205px;
   line-height: 1.3;
}

.resa {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(102, 99, 99, 0.8)),url('@/assets/topview.webp');
  background-size: cover;
  color: white;
}

</style>