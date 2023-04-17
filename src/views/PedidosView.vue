<template>
  <main>
    <h1>Gerenciar Pedidos:</h1>
    <DashBoard />
  </main>
</template>

<script>
import DashBoard from '@/components/DashBoard.vue';
export default {
  name: 'PedidosView',
  components: {
    DashBoard
  }
}
</script>
