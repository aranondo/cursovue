<template>
  <div class="about">
    <component :is="tipoNoticia(noticia.tipo)" :datos="noticia" v-for="noticia in noticias" :key="noticia.url"></component>
    <input ref="primeraNoticia" />
    <input ref="ultimaNoticia" />
  </div>
</template>
<script>
import AudioNoticia from '@/components/AudioNoticia.vue'
import VideoNoticia from '@/components/VideoNoticia.vue'

export default {
  components:{AudioNoticia, VideoNoticia},
  data() {
    return {
      
    }
  },
  computed: {
    noticias() {
      //return this.$store.getters.noticiasFiltradas('audio')
      return this.$store.state.noticias
    }
  },
  methods:
  {
    tipoNoticia(tipo)
    {
      if(tipo==='audio')
      {
        return AudioNoticia
      }
      else if(tipo==='video')
      {
        return VideoNoticia
      }
    }
  },
  created()
  {
    this.$store.dispatch('cargarNoticias');
  },
  mounted()
  {
    console.log('mounted')
    this.$refs.ultimaNoticia.focus()
  }
}
</script>
