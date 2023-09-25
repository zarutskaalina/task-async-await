import axios from 'axios';

const inputText = document.querySelector('.input');
const userBox = document.querySelector('.user-box');

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.response.use(function fetchUsers() {
  axios.get('/users');
});
