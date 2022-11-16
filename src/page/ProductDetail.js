import React, { useEffect, useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  
  let {id} = useParams();

  const [product,setProduct] = useState(null);

  const getProductDetail= async()=>{

    let url = `https://my-json-server.typicode.com/kimyunong/react-shop/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    setProduct(data);

    console.log("파라미터",data);

  }

  useEffect(()=>{

    getProductDetail();

  },[]);

  return (

    <Container>
      <Row>
        <Col className='img-style'>
        <img src={product?.img}/>
        </Col>
        <Col>
          <div className='Detail-new'>
            {product?.new==true? "NEW" : ""}
          </div>
          <div className='Detail-title'>
            {product?.title}
          </div>
          <br></br>
          <div>
            {product?.price}원
          </div>
          <div>
            {product?.choice==true? "Conscious choice" : ""}
          </div>
          <br></br>
          <select className='Detail-size'>
            { product?.size.map(size=><option>{size}</option>) }
          </select>
          
          
          <div className='Detail-button'>추가</div>
          
          
        </Col>
      </Row>
    </Container>

  )

}

export default ProductDetail
