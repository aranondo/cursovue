<template>
    <div>
        <h1>{{noticia.titulo}}</h1>
        <p>{{noticia.texto}}</p>
        <p>votos: {{noticia.votos}}</p>
    </div>
</template>
<script>

export default {

  data() {
    return {
      noticia: null
    }
  },
  computed: {

  },
  methods:
  {

  },
  created()
  {
      this.noticia = this.$store.getters.buscarPorUrl(this.$route.params.url)
  }
}
</script>