import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cardProducts.css';

function CardProducts({ products, handleDelete, admin }) {
  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    alert(`${product.product} added to cart!`);
  };

  return (
    <div className="product-scroll-container">
      {products.map((p, i) => (
        <Card className="product-card shadow-sm position-relative" key={i}>
          {admin && (
            <button className="delete-btn" onClick={() => handleDelete(p.id)}>
              &times;
            </button>
          )}
          <Card.Img variant="top" src={p.image} />
          <Card.Body>
            <Card.Title>{p.product}</Card.Title>
            <Card.Text><strong>{p.quantity}</strong></Card.Text>
            <Card.Text><strong>{p.rate}</strong></Card.Text>
            <Button className="btn-buy" onClick={() => console.log(p.id)}>
              Buy now
            </Button>
            <Button className="btn-cart" onClick={() => handleAddToCart(p)}>
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardProducts;
