import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import axios from 'axios';
import CardList from './components/CardList'

function App() {
  const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   // Make an API call to fetch card data
  //   axios.get('https://api.example.com/cards') // Replace with your actual API URL
  //     .then(response => {
  //       setCards(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching card data:', error);
  //     });
  // }, []);

  return (
    <div>
<Header/>
<h1>Credit Card List</h1>
      <div className="card-container">
      <CardList 
          cardNumber="1234567812345678"
          cardHolder="Shivam Sharma"
          expiryDate="12/28"
          bankName="Bank of Axis"/>
        {/* {cards.map(card => (
          <CardList 
          cardNumber="1234567812345678"
          cardHolder="John Doe"
          expiryDate="12/24"
          bankName="Bank of React"
            // key={card.id} // Ensure each card has a unique id
            // cardNumber={578945612301}
            // cardHolder={ShivamSharma}
            // expiryDate={card.expiryDate}
            // bankName={card.bankName}
          />
        ))} */}
      </div>
<Footer/>
    </div>
  );
}

export default App;
