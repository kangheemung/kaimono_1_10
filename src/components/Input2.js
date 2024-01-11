import React from 'react'

function Input2({ productName2, setProductName2, price2, setPrice2, quantity2, setQuantity2, products }) {
  const handleProductChange = (e) => {
    const selectedProduct = products.find(product => product.name === e.target.value);
    setProductName2(selectedProduct.name);
    setPrice2(selectedProduct.price);
  };
  const handleQuantityChange = (e) => {
    const quantity2 = parseInt(e.target.value, 10);
    setQuantity2(quantity2 ); // or provide a default value like 0
  };
  const totalPrice = price2 * quantity2;
  return (
    <div>
        買い物2：
        <select onChange={handleProductChange} defaultValue="">
        <option value="" disabled>商品を選択</option>
        {products.map((product, index) => (
          <option key={index} value={product.name}>{product.name}</option>
        ))}
      </select>
      ×
      <input
        type="number" // 金額は数値であるため、typeをnumberに設定
        value={quantity2}
        onChange={handleQuantityChange}
        placeholder="商品名2の数量"
       />
       <span>買い物2の金額: {totalPrice}円</span>
    </div>
  )
}

export default Input2
