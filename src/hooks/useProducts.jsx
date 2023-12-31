import { useState, useEffect } from "react";
import { getProducts, getProductsById ,getCategories,getProductsByCategory} from "../services";


/**
 * @description Hook that is used to get products
 * @returns  {Array}
 */
export const useGetProducts = (limit) => {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        getProducts()
           .then((response) => {
           setProductsData(response.data)
          })
          .catch((error) => {
            
          });
      } ,[limit]);

      return{productsData}
}

export const useGetProductById = (id) => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
      getProductsById(id)
        .then((response) => {
         setProductData(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    } ,[id]);

    return{productData}
}



export const useGetCategories = () => {
  const [categories,setCategories] = useState([]);
  useEffect(() => {
      getCategories()
        .then((response) => {
         
         setCategories(response.data)
        })
        .catch((error) => {
          
        });
    } ,[]);

    return{categories}
}


export const useGetProductsByCategory = (id) => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    getProductsByCategory(id)
        .then((response) => {
         setProductsData(response.data)
        })
        .catch((error) => {
          
        });
    } ,[id]);

    return{productsData}
}