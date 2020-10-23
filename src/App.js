import React from 'react';
import { useState , useEffect } from 'react';
import Button from '@material-ui/core/Button';



export default function App() {


  const [cart, setCart] = useState([])
  const [ alert, setAlert ] = useState("")
  const [cartTotal, setCartTotal] = useState(0);
  const  items = [
      {   
          id: 1, name: 'Phone XL', price: 799
          
        },
        {
          id: 2, name: 'Phone Mini', price: 699
          
        },
        {
          id: 3, name: 'Phone Standard', price: 299
          
        }
      ]


      useEffect(() => {
        total();
      }, [cart]);
    
      const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
          totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
      };


      const addToCart = (el) => {
        let addIt = true
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === el.id) addIt = false;
        }
          
         if(addIt) {
            setCart([...cart, el]);
            total();
            setAlert('');
        } else setAlert(`${el.name} is already in your cart` );
      };

      const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
        setAlert('');
      }

      const listItems = items.map((el) => (
          <div key={el.id}>{`${el.name}: $${el.price}`}
          <Button variant="contained" color= 'primary' type="submit" value="add" onClick={() => addToCart(el) }>Add</Button>
          
          </div>
        ));

        const cartItems = cart.map((el) => (
          <div key={el.id}>{`${el.name}: $${el.price}`}
          <Button variant="contained" color= 'primary' type="submit" value="remove" onClick={() => removeFromCart(el) }>Remove</Button>
          </div>
        ));





  return (
    
      <div >
       <div>STORE</div>
          <div>{listItems}</div>
          <p>Line</p>
          <div>CART</div>
          <div>{cartItems}</div>
          <div>Total: ${cartTotal}</div>
        <div>Alert message: {alert}</div>
      
      </div>  
      
     

  );
}



