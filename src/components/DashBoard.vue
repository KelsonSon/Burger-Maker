<template>
    <main>
        <table>
            <tr id="head">
                <td class="number">#:</td>
                <td>Nome:</td>
                <td>Pão:</td>
                <td>Carne:</td>
                <td>Opcionais:</td>
                <td>Molhos:</td>
                <td>Ações:</td>
            </tr>

            <tr id="body-row" v-for="burger in burgers" :key="burger.id" >
                <td class="number">{{ burger.id }}</td>
                <td>{{burger.nome}}</td>
                <td>{{ burger.pao }}</td>
                <td>{{burger.carne}}</td>
                <td>
                    <ul>
                        <li v-for="(opcional, index) in burger.opcionais" :key="index">{{ opcional }}</li>
                        
                    </ul>
                </td>
                <td>
                    <ul>
                        <li v-for="(molho, index) in burger.molhos" :key="index">{{ molho }}</li>
                        
                    </ul>
                </td>
                <td>
                    <select name="statusList" @change="updateBurger($event, burger.id)">
                        <option value=""  disabled  >Selecione um status</option>
                        

                        <option v-for="status in statusList" :key="status.id" :value="status.tipo" :selected="burger.statusList == status.tipo">{{ status.tipo }}</option>
                    </select>
                    <button @click="deleteBurger(burger.id)" class="delete-btn">Cancelar</button>
                </td>
            </tr>
        </table>
        <div>
            <CriarMsg :msg="msg" v-show="msg"/>
        </div>
    </main>
    
</template>

<script>
    import CriarMsg from './CriarMsg.vue';
export default {
    name: 'DashBoard',
    components:{
        CriarMsg
    },
    data(){
        return{
            burgers: null,
            burger_id: null,
            statusList: [],
            msg: null
            
            
        
        }
    },
    methods: {
        async getPedidos(){

            const req = await fetch("http://localhost:3000/burgers");

            const data = await req.json();

            this.burgers = data;

            
            
            // resgatar status
            this.getStatus();
        },
        async getStatus(){
            const req = await fetch("http://localhost:3000/status");

            const data = await req.json();
            this.statusList = data;

            
        },
        async deleteBurger(id){
            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: "DELETE"
            });

            const res = await req.json();

            //msg de delete
            this.msg = `Pedido deletado com sucesso!`

            setTimeout(() => {
            this.msg = "";
                }, 2000);

            this.getPedidos();

        },
        async updateBurger(event, id){
            const option = event.target.value;

            const dataJson = JSON.stringify({ statusList: option });

            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: "PATCH",
                headers: { "content-Type": "application/json"},
                body: dataJson
            });

            const res = await req.json();

            this.msg = `Status atualizado com sucesso!`

            setTimeout(() => {
            this.msg = "";
                }, 1500);
                

        }
        
    },
    mounted(){
        this.getPedidos();
        
    }
}
</script>

<style scoped>
    *{
    list-style: none;
    }

    main{
        overflow-x:auto;
        max-width: 90vw;
        margin: 0 auto;
    }
    table{
        width: 100%;
        
    }
    #head{
        width: 100%;
        height: 100%;
        display: grid;
        grid-auto-rows: auto;
        grid-template-columns: 0.3fr 1fr 1fr 1fr 1fr 1fr 1fr;
        border-bottom: 4px solid #0E0A09;
    }
    #head td{
        font-weight: bold;
        width: 15%;
        padding: 5px;
        
        
    }
    #body-row{

        display: grid;
        grid-template-columns: 0.3fr 1fr 1fr 1fr 1fr 1fr 1fr;
        border-bottom: 3px solid #F2B263;
    }
    #body-row td{
        
        border-left: 1px dotted #F2B263aa;
        padding: 5px;
        
    }

    #body-row td ul li{
        margin: 5px;
        overflow-x: auto;
    }

    .number{
        width: 25px;
    }

    select{
        width: 100%;
        padding: 6px 5px;
        font-weight: bold;
    }
    .delete-btn{
        margin-top: 3px;
        background: #0E0A09;
        color: #F2B263;
        cursor: pointer;
        width: 100%;
        font-weight: bold;
        border: 2px solid #0E0A09;
        transition: .5s;
    }
    .delete-btn:hover{
        background: #fff;
        color: #BF5B04;
        transform: scale(1.005);
    }
    

    

    
</style>