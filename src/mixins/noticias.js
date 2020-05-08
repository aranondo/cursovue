let noticiamixin = {
    data() {
        return {
            votos: 0
        }

    },
    props: [
        "datos"
    ],
    methods: {
        votar() {
            this.votos++;
        }
    }
}

export default noticiamixin