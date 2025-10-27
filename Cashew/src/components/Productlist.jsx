
import CardProducts from './CardProducts';
import Container from 'react-bootstrap/Container';

import w180 from '../assets/w.jpg';
import w240 from '../assets/b.jpg';
import w320 from '../assets/g.jpg';
import splits from '../assets/cashew_splits.jpg';
import pieces from '../assets/p.jpg';
import roasted from '../assets/Roasted_salted_cashew.jpg';
import masala from '../assets/Masala_cashew.jpg';
import combo from '../assets/cashew-1.jpg';

const Products = [
  {
    id: 1,
    product: "W180 - Premium Whole Cashews",
    image: w180,
    quantity: "500g" ,
    rate: 550
  },
  {
    id: 2,
    product: "W240 - Bold White Cashews",
    image: w240,
    quantity: "500g",
    rate: 500
  },
  {
    id: 3,
    product: "W320 - Popular Grade Cashews",
    image: w320,
    quantity: "500g",
    rate: 450
  },
  {
    id: 4,
    product: "Cashew Splits",
    image: splits,
    quantity: "1kg",
    rate: 800
  },
  {
    id: 5,
    product: "Cashew Pieces - Perfect for Cooking",
    image: pieces,
    quantity: "1kg",
    rate: 720
  },
  {
    id: 6,
    product: "Roasted & Salted Cashews",
    image: roasted,
    quantity:"25g",
    rate: 320
  },
  {
    id: 7,
    product: "Masala Flavored Cashews",
    image: masala,
    quantity: "250g",
    rate: 280
  },
  {
    id: 8,
    product: "Cashew Combo Pack (3 in 1)",
    image: combo,
    quantity: "200g",
    rate: 699
  }
];

function Productlist() {
  return (
    <Container className="py-5 container">
      <h2 className="text-center mb-4" style={{ color: '#B2CD9C' }}>Explore Our Cashews</h2>
      <CardProducts products={Products} />
    </Container>
  );
}

export default Productlist;
