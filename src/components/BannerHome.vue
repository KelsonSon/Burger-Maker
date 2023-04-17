<template>
    <div id="banner">
        <h1>burger maker</h1>
    </div>
</template>

<script>
    export default{
        name: 'BannerHome'
    }
</script>

<style scoped>
    #banner{
        background-image: url('../../public/img/burger.jpg');
        background-position: 0 -10rem;
        background-repeat: no-repeat;
        background-size: cover;
        height: 75vh;
        display: flex;
        align-items: center;
        justify-content: flex-start;

    }

    #banner h1{
        color: #fff;
        text-align: center;
        font-size: 3.5rem;
        padding: 1rem 5rem;
        background: #F2B263aa;
    }

    @media only screen and (max-width: 720px){
        
        #banner{
            background-position: -200px -150px;
            
        }
    }
    @media only screen and (max-width: 550px){
        #banner h1{
           transform: scale(.8);
        }
        #banner{
            background-position: -230px -150px;
            
        }
        
    }


    @media only screen and (max-width: 360px){
        #banner{
            width: 360px;
            background-position: -270px -150px;
            
        }
        
        
    }

</style>