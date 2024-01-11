
import './App.css';
import Header from './Header';
import Kaimono from './components/Kaimono';
import Detail from './components/Detail';
import StartShoppingButton from './ StartShoppingButton';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {



  return (
    <>
    <BrowserRouter>
      <div>
        <Header/>
      </div>
      <p>ここはトップです。</p>
      {/* StartShoppingButtonコンポーネントをRoutes外に配置し、特定のpathで非表示にします */}
        <Routes>
          <Route index element={<StartShoppingButton />} />
          <Route path='/detail' element = { <Detail />}/>
          <Route path='/kaimono' element={<Kaimono />} />
        </Routes>
    </BrowserRouter>


    </>
  );
}

export default App;
