import { useEffect } from 'react';
import fetchAuth from "../axios/custom"
import axios from 'axios';

const randomUserUrl = 'https://randomuser.me/api';


const CustomInstance = () => {
  const fetchData = async () => {
    console.log('custom axios instance');
    try {
      const resp1 = await fetchAuth("/react-store-products")
      const resp2 = await axios(randomUserUrl)
console.log(resp1,resp2)

    } catch (error) {
      console.log(error.response)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
