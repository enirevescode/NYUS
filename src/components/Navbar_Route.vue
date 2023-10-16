<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div>
       <div class="navbar ml-n16">
          <v-btn>
             <RouterLink active-class="active" to="/">Accueil</RouterLink>
          </v-btn>
          <v-btn>
             <RouterLink active-class="active" to="/menu">Menu</RouterLink>
          </v-btn>
          <v-btn>
             <RouterLink active-class="active" to="/contact">Contact</RouterLink>
          </v-btn>
          <v-btn>
             <RouterLink active-class="active" to="/apropos">A propos</RouterLink>
          </v-btn>
       </div>
    </div>
</template>
 
 <style scoped>
 
 .navbar {
    display: inline-flex;
    vertical-align: auto;
 }
 
 a {
    text-decoration: none;
    color: white;
 }
 .active {
    font-weight: 900;
    color: rgb(250, 211, 144);
    font-size: 15px;
    text-decoration: none;
    letter-spacing: 1.2;
 }
 </style>