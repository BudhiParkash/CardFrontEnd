import React from "react";
import '../style/card.css';
import StarRatings from 'react-star-ratings';
import SBICard from '../assesst/sbi_card.jpg';
import { useNavigate } from "react-router-dom";

const CardList = ({name, annual_fees, joining_fees, description, rating, review, card_link, image ,card_type}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="card-list-container">
                <div className="credit-card-list-container">
                    <div className="credit-card-upper-section">
                        <div className="credit-card-image-section">
                            <img src={image} alt="sbi_card" />
                        </div>
                        <div className="credit-card-content-section">
                            <div className="credit-card-content-heading">{name + " - " + card_type}</div>
                            <div className="credit-card-content-text">{description}</div>
                            <div className="credit-card-fees-container">
                                <div className="credit-card-fees-section">
                                    <div className="credit-card-fees-head">Joining Fees :</div>
                                    <div className="credit-card-fees-text">{joining_fees}</div>
                                </div>
                                <div className="credit-card-fees-section">
                                    <div className="credit-card-fees-head">Annual Fees :</div>
                                    <div className="credit-card-fees-text">{annual_fees ? annual_fees : "449" + " Rs" }</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="credit-card-review-section">
                        <div className="credit-card-review-list">
                            
                            <StarRatings
                                rating={JSON.parse(rating)}
                                starRatedColor="#00cccc"
                                starDimension="26px"
                                starSpacing="2px"
                                numberOfStars={5}
                                name='rating'
                            />
                            <div className="credit-card-review-sec">
                                <div className="credit-card-review-text">Review :</div>
                                <div className="credit-card-review-text">{review}</div>
                            </div>

                        </div>
                        <div className="vertical-line"></div>
                        <a className="credit-card-get-card-button" href={card_link} target="_blank"  style={{ textDecoration: 'none' }}>
                            <span className="credit-card-get-card">Get Card</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardList;
