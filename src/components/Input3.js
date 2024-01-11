import React from 'react'

function Input3({ productName3, setProductName3, price3, setPrice3, quantity3, setQuantity3, products }) {
  const handleProductChange = (e) => {
    const selectedProduct = products.find(product => product.name === e.target.value);
    setProductName3(selectedProduct.name);
    setPrice3(selectedProduct.price);
  };
  const handleQuantityChange = (e) => {
    const quantity3 = parseInt(e.target.value, 10);
    setQuantity3(quantity3 ); // or provide a default value like 0
  };
  const totalPrice = price3 * quantity3;
  return (
    <div>
      買い物3：
        <select onChange={handleProductChange} defaultValue="">
        <option value="" disabled>商品を選択</option>
        {products.map((product, index) => (
          <option key={index} value={product.name}>{product.name}</option>
        ))}
      </select>
      ×<input
        type="number"
        value={quantity3}
        onChange={handleQuantityChange}
        placeholder="商品名3の数量"
      />
      <span>買い物3の金額: {totalPrice}円</span>
    </div>
  )
}

export default Input3
