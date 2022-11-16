import React from 'react'
import ProductDetail from '../page/ProductDetail';
import { Navigate } from "react-router-dom"; // 앞자리가 대문자인 함수는 component

const PrivateRoute = ({authenticate}) => {

  return authenticate==true ? <ProductDetail /> : <Navigate to ="/login" />

};

export default PrivateRoute
