import logo from './logo.svg';
import './App.css';
import ProductCard from "./productCard";

function App() {
  return (
    <div className="App">
      <ProductCard 
      imgsrc="https://assets.myntassets.com/f_webp,fl_progressive/h_1440,q_70,w_1080/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg"
      title="Red Tape"
      description="Men Solid Sneakers"
      prevValue="3000"
      discount="40"
      />
    </div>
  );
}

export default App;
