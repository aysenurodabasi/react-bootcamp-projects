import React from 'react';

const IngredientsContext = React.createContext({
  ingredients: [], // {qty: 1, product: {}}
  updateIngredients: (newB) => {},
});

export default IngredientsContext;