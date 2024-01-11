import React from 'react'

function Input({ productName1, setProductName1, price1, setPrice1, quantity1, setQuantity1, products }) {
  const handleProductChange = (e) => {
    const selectedProduct = products.find(product => product.name === e.target.value);
    setProductName1(selectedProduct.name);
    setPrice1(selectedProduct.price);
  };
  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    setQuantity1(quantity ); // or provide a default value like 0
  };

  const totalPrice = price1 * quantity1;


  return (
    <div>
      買い物1 :
      <select onChange={handleProductChange} defaultValue="">
        <option value="" disabled>商品を選択</option>
        {products.map((product, index) => (
          <option key={index} value={product.name}>{product.name}</option>
        ))}
      </select>
        ×
        <input
           type="number"
           value={quantity1}
           onChange={handleQuantityChange}
           placeholder="数量"
        />
         <span>買い物1の金額: {totalPrice}円</span>
    </div>
  )
}

export default Input
