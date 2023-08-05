import { useEffect } from 'react';
import axios from 'axios';
import fetchAuth from "../axios/intercepters"
const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const response =await fetchAuth("/react-store-products")
    console.log('axios interceptors');
    } catch (error) {
      console.log(error.response)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
