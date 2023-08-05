import { useEffect } from 'react';
import axios from 'axios';
const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';


//by using it we sending all request file headers so if
//we have some private to not to share all the request so
//we need another approach

const GlobalInstance = () => {
  const fetchData = async () => {
    console.log('global axios instance');
    try {
      const resp1 = await axios(productsUrl)
      const resp2=await axios(randomUserUrl)
    console.log(resp1,resp2)
    } catch (error) {
      console.log(error.response)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
