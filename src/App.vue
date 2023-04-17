<template>
  <NavBar :logo="logo_src" :alt="app_name" />
  <router-view/>
  <FooterBar />
</template>
<script>
  import FooterBar from './components/FooterBar.vue';
  import NavBar from "./components/NavBar.vue";
  

  export default{
    name: 'App',
    components: {
      NavBar,
      FooterBar
    },
    data(){
      return{
        logo_src: '/img/logo.png',
        app_name: 'Burger Maker'

      }
    }
  }

</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mukta', sans-serif;
  }
  main{
    margin: 3.1rem;
    min-height: 100vh;
  }
  h1{
    text-align: center;
    font-size: 2.3rem;
    margin-bottom: 1.8rem;
    color: #0D0908;
    text-transform: uppercase;
  }
</style>
