import React from "react";
import '../style/card.css';
import { IoMdSearch } from "react-icons/io";
import StarRatings from 'react-star-ratings';
import SBICard from '../assesst/sbi_card.jpg';

const CardList = () => {
    return (
        <>
            <div className="card-list-container">
                <div className="card-list-filter">
                    <div className="card-list-section">
                        <input type="text" className="card-list-input" placeholder="Search" />
                        <IoMdSearch className="credit-card-icons" />
                    </div>
                </div>
                <div className="credit-card-list-container">
                    <div className="credit-card-upper-section">
                        <div className="credit-card-image-section">
                            <img src={SBICard} alt="sbi_card" />
                        </div>
                        <div className="credit-card-content-section">
                            <div className="credit-card-content-heading">SBI SimplyCLICK credit card</div>
                            <div className="credit-card-content-text">Get 10X reward points on your purchase</div>
                            <div className="credit-card-fees-container">
                                <div className="credit-card-fees-section">
                                    <div className="credit-card-fees-head">Joining Fees :</div>
                                    <div className="credit-card-fees-text">Rs. 499 + tax</div>
                                </div>
                                <div className="credit-card-fees-section">
                                    <div className="credit-card-fees-head">Annual Fees :</div>
                                    <div className="credit-card-fees-text">Rs. 499 + tax</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="credit-card-review-section">
                        <div className="credit-card-review-list">
                            
                            <StarRatings
                                rating={4.5}
                                starRatedColor="#00cccc"
                                starDimension="26px"
                                starSpacing="2px"
                                numberOfStars={5}
                                name='rating'
                            />
                            <div className="credit-card-review-sec">
                                <div className="credit-card-review-text">Review :</div>
                                <div className="credit-card-review-text">50</div>
                            </div>

                        </div>
                        <div className="vertical-line"></div>
                        <div className="credit-card-get-card-button">
                            <span className="credit-card-get-card">Get Card</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardList;
