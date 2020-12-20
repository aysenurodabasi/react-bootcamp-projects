import React,{useState, useContext,useRef,useEffect} from 'react'
import './Footer.styles.css'
import IngredientsContext from '../../contexts/IngredientsContext';

const Footer = ({currentPrice,setCurrentPrice}) => { 
  const {ingredients , updateIngredients } = useContext(IngredientsContext)
  const [totalPrice , setTotalPrice] = useState()
  const newState = [...ingredients]

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevNumber = usePrevious(currentPrice)
var number;
  const increase = (index,number) =>{
    newState[index].count += 1;
    updateIngredients(newState)
    setCurrentPrice(prevNumber+number)

  }

  const decrement = (index,number) =>{
    newState[index].count -= 1;
    updateIngredients(newState)
    setCurrentPrice(prev => prev+number)
  }

 
  return (
    <div className="footer">
      <div class="currentPrice"> Current Price : {currentPrice} </div>
      {
        ingredients.map(item=>{
           number = (newState[item.id].count)*item.price;

        
          return <div key={item.id} className="meatItems"> {item.title} ($ {item.price}) <button onClick={()=>decrement(item.id,number)}> - </button> {item.count} <button onClick={()=> increase(item.id,number )}> + </button> Total Price : $ {number}</div>
         
        })
      }
      
     <button className="order">ORDER</button>
      
    </div>
  )
}

export default Footer;
