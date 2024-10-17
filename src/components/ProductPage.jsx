  import React from 'react';
  import { Container, Row, Col, Button } from 'react-bootstrap';
  import '../css/ProductPage.css';
  import { useCart } from '../CartContext'; // Import the useCart hook

  // Add your product images here
  import img1 from '../assets/img1.png'; // Example image imports
  import img2 from '../assets/img2.png';
  import img3 from '../assets/img3.png';
  import img4 from '../assets/img4.png';
  import img5 from '../assets/img5.png';
  import img6 from '../assets/img6.png';
  import img7 from '../assets/img7.png';
  import img8 from '../assets/img8.png';
  import img9 from '../assets/img9.png';
  import img10 from '../assets/img10.png';
  import img11 from '../assets/img11.png';
  import img12 from '../assets/img12.png';
  import img13 from '../assets/img13.png';
  import img14 from '../assets/img14.png';
  import img15 from '../assets/img15.png';
  import img16 from '../assets/img16.png';
  import img17 from '../assets/img17.png';
  import img18 from '../assets/img18.png';
  import img19 from '../assets/img19.png';
  import img20 from '../assets/img20.png';
  import img21 from '../assets/img21.png';


  const products = [
    { id: 1, img: img1, price: 52.23, description: 'Blue Buffalo Life Protection Formula Adult Dry Dog Food,Made with Natural Ingredients' },
    { id: 2, img: img2, price: 18.83, description: ' Basics Dog Poop Leak Proof Bags With Dispenser and Leash Clip, Unscented, 300 Count, 20 Pack of 15,' },
    { id: 3, img: img3, price: 10.99, description: 'Temptations Classic Crunchy and Soft Cat Treats Tasty Chicken Flavor, 30 oz.' },
    { id: 4, img: img4, price: 12.12, description: 'Good n Fun Triple Flavored Rawhide Kabobs for Dogs, 1.5 Pound' },
    { id: 5, img: img5, price: 5.99, description: 'Earth Rated Hypoallergenic Dog Wipes' },
    { id: 6, img: img6, price: 30, description: 'Zesty Paws Dog Allergy Relief - Anti Itch Supplement - Omega 3 Probiotics for Dogs' },
    { id: 7, img: img7, price: 18.12, description: 'PetSafe ScoopFree Premium Crystal Cat Litter - Outperforms Clay Litter' },
    { id: 8, img: img8, price: 15.99, description: 'Purina Fancy Feast Gravy Lovers Poultry and Beef Grilled Gourmet Wet Cat Food Variety' },
    { id: 9, img: img9, price: 10.98, description: 'Purina Fancy Feast Gravy Lovers Poultry and Beef Grilled Gourmet Wet Cat Food Variety' },
    { id: 10, img: img10, price:  2.98, description: 'Vital Essentials Freeze Dried Raw Single Ingredient Dog Treats, Beef Liver, 2.1 oz' },  
    { id: 11, img: img11, price:  5.98, description: 'Fresh Step Clumping Cat Litter, Extreme, Long Lasting Odor Control Kitty Litter with Activated Charcoal' },
    { id: 12, img: img12, price:  5.18, description: 'Pup-Peroni Dog Treats, Prime Rib Flavor, 22.5 Ounce, Made with Real Steak' },
    { id: 13, img: img13, price:  10.98, description: 'Greenies Original Regular Natural Dog Dental Care Chews Oral Health Dog Treats, 36 count (Pack of 1)' },
    { id: 14, img: img14, price:  20.98, description: 'Greenies Original Regular Natural Dog Dental Care Chews Oral Health Dog Treats, 36 count (Pack of 1)' },  
    { id: 15, img: img15, price:  11.98, description: 'Benebone Wishbone Durable Dog Chew Toy for Aggressive Chewers, Real Bacon, Made in USA, MediumFresh Step Clumping Cat Litter, Extreme, Long Lasting Odor Control Kitty Litter with Activated Charcoal' },
    { id: 16, img: img16, price:  6.98, description: 'Voyager Step-in Air Dog Harness - All Weather Mesh Step in Vest Harness for Small and Medium Dogs and Cats by Best Pet Supplies' },
    { id: 17, img: img17, price:  3.98, description: 'Wellness Soft Puppy Bites Healthy Grain-Free Treats for Training, Dog Treats with Real Meat and DHA, No Artificial Flavors ' },
    { id: 18, img: img18, price:  20.98, description: 'IAMS Adult Minichunks Small Kibble High Protein Dry Dog Food with Real Chicken, 30 lb. Bag,(Packaging may vary)' },
    { id: 19, img: img19, price:  2.98, description: 'Blue Buffalo Health Bars Crunchy Dog Biscuits, Oven-Baked With Natural Ingredients, Pumpkin & Cinnamon, 16-oz' },
    { id: 20, img: img20, price:  13.98, description: 'Purina Fancy Feast Seafood Classic Pate Collection Grain Free Wet Cat Food Variety Pack - (Pack of 30) 3 oz. Cans' },
    { id: 21, img: img21, price:  16.98, description: 'Chom Chom Roller Pet Hair Remover and Reusable Lint Roller - ChomChom Cat and Dog Hair Remover for Furniture, Couch,' }

  ];

  function ProductPage() {
    const { addToCart } = useCart();
    return (
      <>
      <div id='products'>
        <div className='Heading'>
          <h1>Products</h1>
        </div>

        <Container className="my-5">
          <Row>
            {products.map((product) => (
          <Col key={product.id} xs={12} md={6} lg={4} className="mb-4">
          <div className="product-card text-center d-flex flex-column justify-content-between p-3" style={{ height: '100%' }}>
            <img 
              src={product.img} 
              alt="Product" 
              className="img-fluid rounded mb-3" 
              style={{ maxHeight: '200px', objectFit: 'contain' }} 
            /> 
            <div className='product-desc'>
              <h6 className="mt-3">{product.description}</h6>
            </div>
            <h3 className="text-danger mb-3">${product.price.toFixed(2)}</h3>
              {/* <Button variant="primary" size="md" className="mt-auto mx-auto" style={{ width: '50%',backgroundColor: '#001f3f', borderColor: '#001f3f' }}  onClick={() => addToCart(product)}>Add to Cart</Button> */}
              <Button 
              variant="primary" 
              size="md" 
              className="mt-auto mx-auto cart-button" 
              onClick={() => addToCart(product)}
            >
            Add to Cart
          </Button>

          </div>
        </Col>         
            ))}
          </Row>
        </Container>
        </div>
      </>
    );
  }

  export default ProductPage;