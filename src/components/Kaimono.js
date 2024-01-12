import Input from './Input';
import Input2 from './Input2';
import Input3 from './Input3';
import Button from './Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Kaimono() {
  const [productName1, setProductName1] = useState('');
  const [price1, setPrice1] = useState('');
  const [quantity1, setQuantity1] = useState(0);

  // States for the second product selection
  const [productName2, setProductName2] = useState('');
  const [price2, setPrice2] = useState('');
  const [quantity2, setQuantity2] = useState(0);

  // States for the third product selection
  const [productName3, setProductName3] = useState('');
  const [price3, setPrice3] = useState('');
  const [quantity3, setQuantity3] = useState(0);

  const navigate = useNavigate();

  const products = [
    { name: 'キャベツ', price: 250 },
    { name: 'にんじん', price: 200 },
    { name: 'いちご', price: 500 }
  ];

  const handleClick = () => {
    const totalPrice1 = Number(price1) * Number(quantity1);
    const totalPrice2 = Number(price2) * Number(quantity2);
    const totalPrice3 = Number(price3) * Number(quantity3);

    const totalSum = totalPrice1 + totalPrice2 + totalPrice3;

    alert(`Total: ${totalSum}`);
    navigate('/detail', {
      state: {
        productName1,
        price1,
        quantity1,
        totalPrice1,
        productName2,
        price2,
        quantity2,
        totalPrice2,
        productName3,
        price3,
        quantity3,
        totalPrice3,
        totalSum,
      },
    });
  };
  const handleBackToTopClick = () => {
    navigate('/');
  };
  return (
    <>
  
  <Input
  productName1={productName1}
  setProductName1={setProductName1}
  price1={price1}
  setPrice1={setPrice1}
  quantity1={quantity1}
  setQuantity1={setQuantity1}
  products={products}
/>
<Input2
  productName2={productName2}
  setProductName2={setProductName2}
  price2={price2}
  setPrice2={setPrice2}
  quantity2={quantity2}
  setQuantity2={setQuantity2}
  products={products}
/>
<Input3
  productName3={productName3}
  setProductName3={setProductName3}
  price3={price3}
  setPrice3={setPrice3}
  quantity3={quantity3}
  setQuantity3={setQuantity3}
  products={products}
/>
      {/* ButtonコンポーネントにonClickとしてhandleBackClickを渡す */}
      {/* onClickの処理を後で追加する場合を想定し、nullを渡しておくこともできます */}
      < Button onClick={handleClick} >計算</Button>
    {/* handleBackToTopClick関数はボタンのクリックイベントを扱います*/}
      <Button onClick={handleBackToTopClick}>戻る</Button>


    </>
  )
}

export default Kaimono
