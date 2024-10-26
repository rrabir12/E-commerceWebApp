import React, { useState, useEffect } from 'react';

function useApi() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return data; 
}

export default useApi;
