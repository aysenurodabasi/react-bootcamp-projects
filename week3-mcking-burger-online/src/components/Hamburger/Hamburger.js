import React,{useContext,useEffect} from 'react'
import './Hamburger.styles.css'
import IngredientsContext from '../../contexts/IngredientsContext';


const Hamburger = () => {
  const {ingredients , updateIngredients } = useContext(IngredientsContext);

 const updArray = ingredients.map(item=>item.count);
 const saladCount = updArray[0];
 const cheeseCount = updArray[1];
 const meatCount = updArray[2];

  const check = (el, index, arr) =>{
    if(arr[index].count <= 0){
      return true;
    }
    return false;
  }

  return (
    <div className="burger">
      <div className="bread-top"></div>
      {
        ingredients.every(check) && <div style={{paddingLeft:230}}> Please start adding ingredients! </div>
        

         
      }
      {ingredients.map(item=>{
            for(var i=0; i<item.count;i++){
                return <div key={item.id} className={item.title}></div>
            }
          }) }
      <div className="bread-bottom"></div>
    </div>
  )
}

export default Hamburger;
