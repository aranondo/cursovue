import Vue from 'vue'
import Vuex from 'vuex'
import mensajes from './mensajes'
import llamadasApi from '../apis/llamadasApi'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mensajes: [
            'un texto cualquiera'
        ],
        noticias: [{
                tipo: 'video',
                titulo: 'noticia en video',
                texto: 'cualquier cosa',
                votos: 0,
                url: 'noticia-en-video'
            },
            {
                tipo: 'audio',
                titulo: 'noticia en audio',
                texto: 'otra cosa',
                votos: 0,
                url: 'noticia-en-audio'
            }
        ]
    },
    mutations: {
        anadirNoticia(state, post) {
            let aa = state.noticias;
            aa.push({
                titulo: post.title,
                texto: post.body,
                votos: 0,
                url: post.title.replace(/[^a-z0-9\-]+/, '')
            });
            state.noticias = aa
            console.log(state.noticias);
        }
    },
    actions: {
        cargarNoticias({ commit }) {
            llamadasApi.leer('https://jsonplaceholder.typicode.com/posts').then(posts => {
                console.log(posts);
                posts.data.forEach(post => {
                    commit('anadirNoticia', post);
                })
            });
        }
    },
    modules: {
        mensajes: mensajes
    },
    getters: {
        /*      
                noticiasAudio: state => state.noticias.filter(noticia => noticia.tipo === 'audio'),
                noticiasVideo: state => state.noticias.filter(noticia => noticia.tipo === 'video'),
        */
        noticiasFiltradas: state => (tipo) => state.noticias.filter(noticia => noticia.tipo === tipo),
        buscarPorUrl: state => (url) => state.noticias.find(noticia => noticia.url === url)
    }
})