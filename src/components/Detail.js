import React from 'react'
import { useLocation, useNavigate  } from 'react-router-dom';
import Button from './Button';
function Detail() {
    const location = useLocation();
    const { state } = location;
    const navigate = useNavigate();
    
      const  handleBackToTopClick = () => {
        navigate('/');
      };
    return (
    <>
      Detail pageです。
      <div>商品名1: {state.productName1} |単価: ¥{state.price1} | 数量: {state.quantity1} | 小計: ¥{state.totalPrice1}</div>
      <div>商品名2: {state.productName2} |単価: ¥{state.price2} | 数量: {state.quantity2} | 小計: ¥{state.totalPrice2}</div>
      <div>商品名3: {state.productName3} |単価: ¥{state.price3} | 数量: {state.quantity3} | 小計: ¥{state.totalPrice3}</div>
      <div><strong>総金額:</strong> ¥{state.totalSum}</div>
      <Button onClick={handleBackToTopClick}>とりあえずトップに戻る</Button>
    </>
  )
}

export default Detail
