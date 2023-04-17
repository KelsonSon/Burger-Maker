<template>
    <div>
       <p>{{ msg }}</p> 
    </div>
</template>

<script>
    export default{
        name: 'CriarMsg',
        props:{
            msg: String
        }
    }
</script>

<style scoped>
    div{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div p{
        width: 450px;
        height: 80px;
        color: #445004;
        background-color: #A0A603aa;
        border: 2px solid #A0A603;
        border-radius: 5px;
        max-width: 450px;
        margin: 10px auto;
        text-align: center;
        font-weight: bold;
        display: grid;
        place-items: center;
    }
</style>