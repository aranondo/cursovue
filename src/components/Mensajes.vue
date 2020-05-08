<template>
  <div>
    <ul>
        <li v-for="(mensaje, index) in mensajes" :key="index">
            {{mensaje}}
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {

      mensajes()
      {
          return this.$store.state.mensajes.listado
      }
  }
}  
</script>
