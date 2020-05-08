<template>
    <div>
        <h1><router-link :to="url">{{datos.titulo}}</router-link></h1>
        <span>{{datos.texto}}</span>
        <p>votos: {{votos}}</p>
        <button @click="votar">+1</button>
    </div>
</template>

<script>
import noticiamixin from '../mixins/noticias'
export default {
    computed:
    {
        url()
        {
            return "/noticias/"+this.datos.url
        }
    },
    props:
    [
        "datos"
    ],
    mixins:
    [
        noticiamixin
    ]
}
</script>