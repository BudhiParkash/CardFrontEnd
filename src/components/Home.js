import React from "react";
import CardList from "./CardList";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/home.css';
import BannerImage from '../assesst/banner-image-removebg-preview.png';
import Image from '../assesst/niyo-card.png';
import BannerImageOne from '../assesst/carouselimage.png';

const Home = () => {
    return (
        <>
            <div className="main-container">
                <div className="main-section">
                    <div className="banner-left-section">
                        <div className="banner-left-content-heading">
                            <span className="banner-left-span">Compare</span> &nbsp;Credit Cards of your choice at once with the right data for a wise decison.
                        </div>
                        <div className="banner-left-content-text">
                            Select’s Card Comparison tool combines advanced tech with credible data to fuel your choice of a card that best fits your needs.
                        </div>
                        <div className="banner-left-button-section">
                            <span className="banner-left-button"> Know More </span>
                        </div>
                    </div>
                    <div className="banner-right-section">
                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showIndicators={false}
                            showStatus={false}
                            showArrows={true}
                        >
                            <div className="banner-right-section-image">
                                <img src={BannerImage} alt="Banner Image" />
                            </div>
                            <div className="banner-right-section-image">
                                <img src={BannerImageOne} alt="Banner Image One" className="banner-right-second-image" />
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="credit-card-step-section">
                    <img src={Image} alt="Credit Card" />
                </div>
                <div className="credit-card-container">
                    <CardList />
                </div>
            </div>
        </>
    );
};

export default Home;