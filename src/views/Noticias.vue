<template>
  <div class="about">
    <h1>This is a news page</h1>
    <audio-noticia></audio-noticia>
    <video-noticia></video-noticia>
    <component :is="VideoNoticia"></component>
  </div>
</template>
<script>
import AudioNoticia from '@/components/AudioNoticia.vue'
import VideoNoticia from '@/components/VideoNoticia.vue'

export default {
  components: {AudioNoticia, VideoNoticia}
}
</script>