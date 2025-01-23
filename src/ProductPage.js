import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { productName } = useParams();

  return (
    <div>
      <h1>{productName.replace(/-/g, ' ')}</h1>
      <p>Questa è la pagina del prodotto "{productName.replace(/-/g, ' ')}".</p>
    </div>
  );
}

export default ProductPage;
