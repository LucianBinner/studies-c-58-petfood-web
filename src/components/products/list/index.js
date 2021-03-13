import './styles.css';

const Product = () => {

  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src="https://terrazoo-ecommerce-images.s3.amazonaws.com/uploads/2017/09/64562015122633.jpg" className="img-fluid" />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">
              R$ 50,00
            </label>
          </h6>
          <small>
            <b>Ração Úmida Nestlé Purina Dog Chow Extra Life Sachê Carne para Cães Filhotes - 100g</b>
          </small>
        </div>
        <div className="col-3">
          <button
            onClick={() => {}}
            className="btn btn-secondary rounded-circle"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
