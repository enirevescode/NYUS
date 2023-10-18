<script setup>
 import Navbar_Route from "../components/Navbar_Route.vue"
 
</script>
<template>
    <div>
       <v-toolbar height="90">
          <v-img src="src/assets/img/logo.webp" alt="logo" height="50" class="ml-n16"/>
          <v-spacer></v-spacer>
          
     <Navbar_Route/>
 
          <v-col cols="auto" class="mr-16">
             <v-btn size="x-large" variant="outlined" color="white"><RouterLink> active-class="active"
                   to="/resa">Réservation</RouterLink></v-btn>
          </v-col>
       </v-toolbar>
    </div>
</template>
 
 <style scoped>
 .navbar {
    display: inline-flex;
    vertical-align: auto;
 }
 
 header {
    background-color: transparent !important;
    position: absolute;
 }
 
 img {
    width: 90px;
    height: 35px;
    float: left;
    margin-left: 250px;
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