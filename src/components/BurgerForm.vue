<template>

    
        <section>
            <form id="burger-form" @submit="criarHamburguer">
                <div class="input-container">
                    <label for="nome">Nome do cliente:</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome...">
                </div>

                <div class="input-container">
                    <label for="pao">Escolha o pão:</label>
                    <select name="pao" id="pao" v-model="pao">
                        <option disabled :value="null">Selecione o seu pão...</option>
                        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="carne">Escolha a carne:</label>
                    <select name="carne" id="carne" v-model="carne" required>
                        <option disabled :value="null">Selecione o tipo da carne...</option>

                        <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
                    </select>
                </div>

                <div id="opcionais-container" class="input-container" >
                    <label id="opcionais-title" for="opcionais">Seleção de opcionais:</label>
                    <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id" :value="opcional.tipo">
                        <input type="checkbox" name="opcionais" v-model="opcionais[opcional.tipo]">
                        <span>{{ opcional.tipo }}</span>
                    </div>
                    
                </div>
                <div id="opcionais-container" class="input-container" >
                    <label id="opcionais-title" for="molhos">Seleção de molhos:</label>
                    <div class="checkbox-container" v-for="molho in molhosdata" :key="molho.id" :value="molho.tipo">
                        <input type="checkbox" name="molhos" v-model="molhos[molho.tipo]">
                        <span>{{ molho.tipo }}</span>
                    </div>
                    <div class="input-container">
                        <input type="submit" class="submit-btn" value="Criar Hamburguer">
                    </div>
                </div>
            </form>
           
            
        </section>
        <div>
            <CriarMsg :msg="msg" v-show="msg" />
        </div>
</template>

<script>
import CriarMsg from './CriarMsg.vue';
    

export default {
    name: 'BurgerForm',
    components: {
        CriarMsg
    },
    data(){
        return{
            paes: null,
            carnes: null,
            opcionaisdata: null,
            molhosdata: null,
            nome: null,
            pao: null,
            carne: null,
            opcionais: [],
            molhos: [],
            msg: null
        }
    },
    methods:{
        async getIngredientes(){
            // linkando com o "ingredientes" do backend
           const req = await fetch("http://localhost:3000/ingredientes"); 

           // buscando as opções do backend
           const data = await req.json();

           this.paes = data.paes;
           this.carnes = data.carnes;
           this.opcionaisdata = data.opcionais;
           this.molhosdata = data.molhos;
        },
        async criarHamburguer(e){
            e.preventDefault();

            // criando o objeto com as opções do pedido
            const data ={
                nome: this.nome,
                pao: this.pao,
                carne: this.carne,
                opcionais: Object.keys(this.opcionais),
                molhos: Object.keys(this.molhos),
                statusList:"Solicitado"
            }

            // transformando o que vem do json em string
            const dataJson = JSON.stringify(data);


            // linkando json com o "burgers" do backend
            const req = await fetch("http://localhost:3000/burgers", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: dataJson
            });

            const res = await req.json();

            // colocar uma msg de sistema
            this.msg = `Pedido N° ${res.id} realizado com sucesso!`

            // limpar msg
            
            setTimeout(() => {
            this.msg = "";
                }, 3000);
            
            //limpar os campos
            this.nome = "";
            this.carne = "";
            this.pao = "";
            this.opcionais = "";
            this.molhos = "";
        }
    },
    mounted(){
        this.getIngredientes();
    }
}
</script>
<style scoped>
   
    #burger-form {
       max-width: 450px;
        margin: 0 auto;
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        
        
    }
    label{
        font-weight: bold;
        margin-bottom: 30px;
        color: #0E0A09;
        padding: 5px 10px;
        border-left: 4px solid #A5AF58;
    }

    input, select{
        padding: 5px 10px;
        width: 450px;
        
        
    }

    #opcionais-container{
        flex-direction: row;
        flex-wrap: wrap;
    }
    #opcionais-title{
        width: 100%;
    }

    .checkbox-container{
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }
    .checkbox-container span,
    .checkbox-container input {
        width: auto;
    }
    .checkbox-container span{
        margin-left: 6px;
        font-weight: bold;
        
    }
    .checkbox-container input{
        margin-top: 6px;
    }

    .submit-btn{
        background: #0E0A09;
        color: #F2B263;
        cursor: pointer;
        font-weight: bold;
        font-size: 105%;
        border: 2px solid #0E0A09;
        transition: .5s;
    }
    .submit-btn:hover{
        background: #fff;
        color: #BF5B04;
        transform: scale(1.005);
    }



    @media only screen and (max-width: 768px) {
        #burger-form {
            max-width: 100%;
            padding: 0 20px;
        }

        input, select {
            width: 100%;
        }

        .checkbox-container {
            width: 100%;
        }
    }

    

    @media only screen and (max-width: 360px) {
  #burger-form {
    max-width: 100%;
    padding: 0 10px;
  }

  label {
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
  }

  input, select {
    width: calc(100% - 20px);
    font-size: 16px;
    margin-bottom: 10px;
  }

  #opcionais-container {
    width: 100%;
    margin-bottom: 10px;
  }

  .checkbox-container {
    width: 50%;
    font-size: 14px;
  }

  .checkbox-container span {
    margin-left: 4px;
  }
}




</style>