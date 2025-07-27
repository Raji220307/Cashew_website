import { useState } from 'react';

const ProductForm = () => {
  const [cashew, setCashew] = useState({
    product: '',
    image: '',
    quantity: '',
    rate: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCashew((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const token = localStorage.getItem('token');

    if (!token) {
      setMessage('Unauthorized. Please login as admin.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: cashew.product,
          image: cashew.image,
          quantity: cashew.quantity,
          price: cashew.rate,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(' Product added successfully!');
        setCashew({ product: '', image: '', quantity: '', rate: '' });
      } else {
        setMessage(` Error: ${data.message || 'Failed to add product.'}`);
      }
    } catch (err) {
      setMessage(' Failed to connect to server.', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container py-5 px-3"
      style={{ backgroundColor: '#B2CD9C', borderRadius: '10px', marginTop: '40px' }}
    >
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <h1 className="text-center mb-5" style={{ color: '#4B352A' }}>
          Add Product
        </h1>

        {message && <div className="alert alert-info text-center">{message}</div>}

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
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
