import { useState } from 'react';

import './styles.css';

const Product = () => {
  const [added] = useState(true);

  return (
    <div className="product col-3">
      { /* eslint-disable-next-line jsx-a11y/alt-text */ }
      <img src="https://terrazoo-ecommerce-images.s3.amazonaws.com/uploads/2017/09/64562015122633.jpg" className="img-fluid align-center" />
      <button
        onClick={() => {}}
        className={`btn btn-${added ? 'secondary' : 'primary'} rounded-circle`}
      >
        {added ? '-' : '+'}
      </button>
      <h4>
        <label className="badge badge-primary">
          R$ 50.00
        </label>
      </h4>
      <small>
        <b>Ração Úmida Nestlé Purina Dog Chow Extra Life Sachê Carne para Cães Filhotes - 100g</b>
      </small>
    </div>
  );
};

export default Product;
