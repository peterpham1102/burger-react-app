import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-app-4376f.firebaseio.com/'
});

export default instance;