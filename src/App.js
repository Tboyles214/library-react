import './index.css';
import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import Home from './pages/Home'
import Books from './pages/Books'
import Footer from './components/Footer';
import BookInfo from './pages/BookInfo';
import { books } from './data';
import Cart from './pages/Cart';
import {BrowserRouter as Router, Route} from 'react-router-dom'

library.add(faBars, faShoppingCart, faTimes);

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book){
   setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity){
    setCart(cart.map(item=>
      item.id === book.id
        ? {
            ...item,
            quantity: +quantity,
          }
        : item
      )
    )
  }

  function numberOfItems(){
    let counter = 0;
    cart.forEach(item =>{
      counter += item.quantity
    })
    return counter
  }

  function removeItem(book){
    setCart(cart.filter(book => book.id !== book.id))
    console.log('remove item', book)
  }

  useEffect(()=>{
    console.log(cart)
  }, [cart])

  return (
    <Router>
    <div className="App">
      <Nav numberOfItems={numberOfItems()}/>
      <Route path="/" exact component={Home}/>
      <Route path="/books" exact render={()=><Books books={books}/>}/>
      <Route path="/books/:id" render={()=><BookInfo books={books} addToCart={addToCart} cart={cart} />}/>
      <Route path="/cart" render={()=><Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
