import Header from "../header/index"

import React, { useRef } from 'react';
import { Carousel, Card, Button } from 'antd';

const { Meta } = Card;
import "./index.css"

function index() {
    const products = [
        { id: 1, title: 'Product 1', description: 'Description 1', price: '$10', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },
        { id: 2, title: 'Product 2', description: 'Description 2', price: '$15', image: 'product2.jpg' },
        { id: 3, title: 'Product 3', description: 'Description 3', price: '$20', image: 'product3.jpg' },
        { id: 4, title: 'Product 4', description: 'Description 4', price: '$25', image: 'product4.jpg' },
        { id: 5, title: 'Product 5', description: 'Description 5', price: '$30', image: 'product5.jpg' },
        // Add more products as needed
      ];
    
      const carouselRef = useRef(null);
    
      const handlePrevious = () => {
        carouselRef.current.prev();
      };
    
      const handleNext = () => {
        carouselRef.current.next();
      };
    
  return (
    <div>
        <Header/>
        <div className="card-container">
        <Carousel
        dots={false}
        arrows={false}
        slidesToShow={4}
        slidesToScroll={1}
        ref={carouselRef}
      >
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Card
              cover={<img alt={product.title} src={product.image} />}
              style={{ width: '400px' ,
            height:"450px"}}
            >
              <Meta title={product.title} description={product.description} />
              <div>{product.price}</div>
            </Card>
          </div>
        ))}
      </Carousel>
      <div className="carousel-buttons">
        <Button onClick={handlePrevious} icon="left" />
        <Button onClick={handleNext} icon="right" />
      </div>
    
        </div>
       
    </div>
  )
}

export default index