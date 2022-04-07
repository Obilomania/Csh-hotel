import React from 'react'
import '../Cards/Cards.css'
import Slider from '../Slide Writing/Slider'
import card1 from '../../images/card1.jpg'
import card2 from '../../images/card2.jpg'
import card3 from '../../images/card3.jpg'

const Cards = () => {
    return (
        <section className='card__Container' id='About'>
            <div className="card__head">
                <h1>Welcome to SCH Hotel</h1>
                <p>Comfort, pleasure and Satisfaction

                    Havannah Suites is a hub of activities, facilities and services.
                    Whether you want to meet, dine or unwind, the hotel provides the
                    finest in amenities and services for your needs.Our guest rooms
                    are designed with your comfort at heart, surrounded by our
                    award-winning conference rooms, banquet halls, gym, pool-bar,
                    lounge and night club.</p>
            </div>
            <div className="cards">
                <div className="carding" id='card'>
                    <img src={card1} alt="" />
                    <div className="name__prce">
                        <p>Executive Room</p>
                        <h6>$100/Night</h6>
                    </div>
                </div>

                <div className="carding" id='card'>
                    <img src={card2} alt="" />
                    <div className="name__prce">
                        <p>Executive Room</p>
                        <h6>$60.00/Night</h6>
                    </div>

                </div>

                <div className="carding" id='card'>
                    <img src={card3} alt="" />
                    <div className="name__prce">
                        <p>Executive Room</p>
                        <h6>$120/Night</h6>
                    </div>

                </div>

            </div>
            <Slider />
            <div className="details">
                <div className="detail__info">
                    <h2>120</h2>
                    <h5>EXOTIC ROOMS</h5>
                </div>
                <div className="detail__info">
                    <h2>13</h2>
                    <h5>SWIMMING POOLS</h5>
                </div>
                <div className="detail__info">
                    <h2>319</h2>
                    <h5>PROFESSIONAL STAFFS</h5>
                </div>
                <div className="detail__info">
                    <h2>7</h2>
                    <h5>CLASSY RESTAURANTS</h5>
                </div>
                <div className="detail__info">
                    <h2>5</h2>
                    <h5>CONFERENCE ROOMS</h5>
                </div>
            </div>
        </section>
    )
}

export default Cards