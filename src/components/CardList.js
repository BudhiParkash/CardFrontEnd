import React from "react";
import '../style/card.css'

const CardList = ({ cardNumber, cardHolder, expiryDate, bankName }) => {
    const formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
    return(
        <>
        
        <div className="credit-card">
      <div className="credit-card__bank-name">{bankName}</div>
      <div className="credit-card__chip"></div>
      <div className="credit-card__number">{formattedCardNumber}</div>
      <div className="credit-card__details">
        <div className="credit-card__holder">
          <span>Card Holder</span>
          <span>{cardHolder}</span>
        </div>
        <div className="credit-card__expiry">
          <span>Expires</span>
          <span>{expiryDate}</span>
        </div>
      </div>
    </div>
        
        </>
    )


}

export default CardList