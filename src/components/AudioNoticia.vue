<template>
    <div>
        <h1>{{datos.titulo}}</h1>
        <span>{{datos.texto}}</span>
        <p>votos: {{votos}}</p>
        <button @click="votar">+10</button>
    </div>
</template>

<script>
import noticiamixin from '../mixins/noticias'

export default {
    data()
    {
        return {
            votos: 10
        }

    },
    props:
    [
        "datos"
    ],
    methods:
    {
        votar()
        {
            this.votos+= 10;
        }
    },
    mixins:
    [
        noticiamixin
    ]
}
</script>