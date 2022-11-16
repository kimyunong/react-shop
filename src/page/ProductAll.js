import React, { useEffect, useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductAll = () => {

  const [productList,setProductList]= useState([]);
  const [query,setQuery]= useSearchParams();

  const getProducts =async()=>{

    let searchQuery = query.get('q') || "";
    console.log("이건뭘까",searchQuery);
    let url = `https://my-json-server.typicode.com/kimyunong/react-shop/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data",data);
    setProductList(data);
  };

  useEffect(()=>{

    getProducts();
    
  },[query]);

  return (

    <div>
      <Container>
        <Row>
          {productList.map((menu)=>(
            <Col lg={3}><ProductCard item={menu}/></Col>
          ))}
        </Row>
      </Container>
    </div>
    
  )
}

export default ProductAll