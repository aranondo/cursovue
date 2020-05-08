import axios from 'axios'

const llamadasApi = {
    leer: function(url) {
        return new Promise((resolve) => {
            axios.get(url).then(posts => resolve(posts));
        });
    }
};

export default llamadasApi;