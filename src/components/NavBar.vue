<template>
    <nav>
        <router-link id="logo-router" to="/">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/">Home</router-link> 
        <router-link to="/pedidos">Pedidos</router-link> 
        <router-link to="/contato">Contato</router-link>
  </nav>
</template>

<script>
    export default{
        name: 'NavBar',
        props: ["logo", "alt"]
    }
</script>

<style scoped>
    nav{
        background-color: #0E0A09;
        color: #fff;
        border-bottom: #000 5px solid ;
        padding: 1rem 2.5rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 20px;
    }
    nav #logo-router{
        margin: auto;
        margin-left: 0;
    }
    #logo{
        width: 5rem;
        height: 5rem;
    }
    nav a{
        text-decoration: none;
        color: #F2B263;
        margin: 0.5rem;
        transition: 0.5;
    }
    nav a:hover{
        color: #BF5B04;
    }

    @media only screen and (max-width: 360px){
        nav{
            width: 360px;
            background-size: 100vw;
        }
        
    }
   
</style>