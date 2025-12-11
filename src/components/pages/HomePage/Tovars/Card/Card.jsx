import { useState } from 'react'
import axios from 'axios';
import styles from './Card.module.css'
import { useEffect } from 'react';


function Card({ product }) {

  return (
    <>
      <div className={styles.Card}>

        <img className={styles.CardImg} src={product.images[0]} alt={product.name} />
        
        <div className="product-info">
          <span className={styles.CardH}>ID: {product.id}</span>
          <h3 className={styles.CardH2}>{product.name}</h3>

          <p className={styles.CardH3}>
            {product.description && product.description.length > 100
              ? product.description.substring(0, 100) + "..."
              : product.description || "Описание отсутствует"}
          </p>
        </div>
      </div>

    </>
  )
}

export default Card