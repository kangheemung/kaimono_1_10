// StartShoppingButton.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function StartShoppingButton() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleStartShoppingClick() {
    navigate('/kaimono'); // navigate でURL /kaimono 指定
  }
// 現在のURLパスに応じてボタンの表示を制御する
if (location.pathname === '/kaimono') {
    // '/kaimono' パスの場合はボタンを表示しない
    return null;
  }

  // それ以外のパスではボタンを表示する
  return (
    <button onClick={handleStartShoppingClick}>Start Shopping</button>
  );
}

export default StartShoppingButton;
