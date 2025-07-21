import { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [cashew, setCashew] = useState({
    product: '',
    image: '',
    quantity: '',
    rate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCashew((arg) => ({ ...arg, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cashew) {
      const newProduct = { ...cashew, id: Date.now(), cashew };
      addProduct(newProduct);
      setCashew({
        product: '',
        image: '',
        quantity: '',
        rate: '',
      });
    }
  };

  return (
    <>
      <div className="container py-5 px-3" style={{ backgroundColor: '#B2CD9C', borderRadius: '10px', marginTop: '40px' }}>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          <h1 className="text-center mb-5" style={{ color: '#4B352A' }}>
            Add Product
          </h1>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Product Name"
              value={cashew.product}
              name="product"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Image URL"
              value={cashew.image}
              name="image"
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Quantity"
                value={cashew.quantity}
                name="quantity"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Rate"
                value={cashew.rate}
                name="rate"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: '#4B352A', color: '#B2CD9C', border: '1px solid #4B352A' }}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductForm;  