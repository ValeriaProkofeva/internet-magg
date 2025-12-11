
import Card from './Card/Card'
import styles from './Tovars.module.css'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';


function Tovars() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect (() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://torguisam.ru/api/product/oksei-all-products");
        setProducts(response.data.slice(0, 5));

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Загрузка товаров...</div>
  }

  if (error) {
    return <div>Ошибка: {error}</div>
  }
  return (
    <>
     <p className={styles.TovarH}>Популярное</p>
    <div className={styles.TovarCont}>

    {products.map( (product) => (
          <Card key={product.id} product={product} />
      ))}

    </div>
    </>
  )
}

export default Tovars