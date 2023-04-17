<template>
    <footer>
        <p>Burger Maker &copy; 2023</p>
    </footer>
</template>

<script>
    export default{
        name: 'FooterBar'
    }
</script>
<style scoped>
    footer{
        
        position: relative;
        bottom: 0;
        border-top: 5px solid #2C2421;
        background: #0D0908;
        color: #F2B263;
        width: 100%;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    @media only screen and (max-width: 360px){
        footer{
            width: 360px;
        }
        
        
    }
</style>