import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.5:3333' // alterar o ip todas as vezes que rodar o mobile (pegar o ip que aparece no axios com a porta 3333)
})

export default api;