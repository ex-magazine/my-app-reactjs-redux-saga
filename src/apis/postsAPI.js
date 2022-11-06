import axios from 'axios';

export const  getPostData = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5');
  //https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5
}