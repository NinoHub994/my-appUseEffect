import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Card from './components/Card/Card';
import Container from './components/Container/Container';
import { Counter } from './components/Counter/Counter';
import { Button } from './components/CustomButton/Button';





const Products = [
  { id: 0, title: "iphone", price: 800, quantity: 0, image: "" },
  { id: 1, title: "samsung", price: 400, quantity: 0, image: "" },
  { id: 2, title: "altro", price: 500, quantity: 0, image: "" },
]
const App = () => {
  let [total, setTotal] = useState(0)

  const [phones, setPhones] = useState(Products)
  const ctotal = (() => {
    setTotal(total = phones.reduce((total, item) => {
      return total += item.quantity * item.price
    }, 0))
  })

  useEffect(() => {
    // declare the async data fetching function
    async function fetchData() {
      // get the data from the api
      let response = await fetch('https://fakestoreapi.com/products');
      let data = await response.json();
      data = data.map((Element: { id: number, image: string, title: string, price: number }) => { return { id: Element.id, image: Element.image, title: Element.title, price: Element.price } })
      setPhones(data)
    }
    fetchData()
  }, [])
  phones.forEach((el) => ({ ...el, quantity: 0 }))
  //console.log(phones)
  return (
    <div className='App container d-flex justify-content-between align-items-center flex-column'>
      <div className="row">
        {
          phones.map((phone) =>
            <div className="col">
              <Container key={phone.id}>
                <Card key={phone.id} title={phone.title} price={phone.price} image={phone.image} setTotal={ctotal} setPhones={setPhones}>
                  <Button quantity={phone.quantity} setTotal={setTotal} price={phone.price} total={total} />
                </Card>
              </Container>
            </div>)
        }
        <h2>{total.toFixed(2) + "$"}</h2>
      </div>
      <div className='row '>
        <Counter />
      </div>
    </div>
    
    
      
   
  )
}

export default App;