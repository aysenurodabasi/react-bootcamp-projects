import React, { useState } from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hamburger from "./components/Hamburger/Hamburger";
import IngredientsContext from "./contexts/IngredientsContext";

const App = () => {
  const [currentPrice, setCurrentPrice] = useState(4.00);

  const [ingredients, updateIngredients] = useState([
    { id: 0 , title: "salad", price: 0.5, count: 0 },
    { id: 1 , title: "cheese", price: 0.4, count: 0 },
    { id: 2 , title: "meat", price: 1.3, count: 0 },
  ]);


  return (
    <IngredientsContext.Provider
    value={{
      ingredients,
      updateIngredients  
    }}>
      <Container>
        <Header />
        <Hamburger />
        <Footer currentPrice={currentPrice} setCurrentPrice={setCurrentPrice}/>
      </Container>
    </IngredientsContext.Provider>
    
  );
};

export default App;
