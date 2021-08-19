import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-8423b.firebaseio.com/'
});

export default instance;