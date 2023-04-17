<template>
  <BannerHome />
  <main>
    <h1>Crie o seu hamburguer</h1>
    <BurgerForm />
  </main>
</template>

<script>
   import BannerHome from '@/components/BannerHome.vue';
   import BurgerForm from '@/components/BurgerForm.vue'

   export default{
    name: 'HomeView',
    components: {
      BannerHome,
      BurgerForm
    }
   }
   

   

</script>
