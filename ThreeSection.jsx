import React, { useEffect } from 'react';
import './ThreeSection.css';
  const ThreeSection = () => {
    const [products, setProducts] = useState([]);  
    const [currentIndex, setCurrentIndex] = useState(0); 
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    },);
    const nextProduct = () => {
      if (currentIndex === products.length - 1) {
        setCurrentIndex(0); 
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    };
    const prevProduct = () => {
      if (currentIndex === 0) {
        setCurrentIndex(products.length - 1);  
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
  return (
    <section className="three">
      <div className="container">
        <h2>Our Products</h2>
        <div className="product-carousel">
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
           </div>
           <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
           <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
           <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt='' />
            <h3>Product 1</h3>
            <p>Product description here</p>
            <p><strong>$10</strong></p>
            <button>Add To Cart</button>
          </div>
        </div>
        <div className="carousel-buttons">
          <button onClick={prevProduct} className="carousel-btn prev">evvel</button>
          <button onClick={nextProduct} className="carousel-btn next">sonraki</button>
        </div>
      </div>
    </section>
  );
}

export default ThreeSection;
