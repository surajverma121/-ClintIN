import React from 'react'
import img1 from '../assets/Images/nps1.jpg'
import p1 from '../assets/Images/nps2.jpg'
import p2 from '../assets/Images/nps3.jpeg'
import p3 from '../assets/Images/p3.jpg'
import p4 from '../assets/Images/p4.jpg'
import './NPS.css';

const NPS = () => {
  return (
    <>
      <header className="nps-trading-header">
        <h1>"Plan for Tomorrow Today: Explore the National Pension System (NPS)"</h1>
      </header>
        <div className="nps-trading-container">
        <div className="nps-example">
        <img 
          src={p2}
          alt="Forex Trading Background" 
          className="forex-background" 
        />
       
      </div>
      </div>
      <div className="forex-text">
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'white' }}>
         
          </h1>
          <p>
          The National Pension System (NPS) is another investment plan backed by the government of India. It falls under the types of investments in India that focuses on saving for the long term, making it the perfect addition to your retirement investment plan. 
          </p>
        
        </div>
     
    

 <section id="nps-trading">
  <div className="nps-trading-card">
    <div className="nps-trading-image">
      <img src={p1} alt=" Image"/>
    </div>
    <div className="nps-trading-content">
      <h2>How you can make money:</h2>
      <p>
        As an investor, you lock in the price of a stock with the hope that it will go up in value. However, the risk of an option is that the stock could also lose money.
        So if the stock decreases from its initial price, you lose the money of the contract. Options are an advanced investing technique and retail should exercise caution before using them.
      </p>
    </div>
  </div>

  <div className="nps-trading-card">
    <div className="nps-trading-image">
      <img src={img1} alt="Why Choose NPS"/>
    </div>
    <div className="nps-trading-content">
      <h2>Why Choose NPS?</h2>
      <p>
        NPS offers flexibility and a diversified investment approach, allowing you to allocate funds across equity, corporate bonds, and government securities. With its low-cost structure and portability, NPS is an excellent choice for long-term financial planning and securing a steady income stream for your retirement.
      </p>
    </div>
  </div>

  <div className="nps-trading-card">
    <div className="nps-trading-image">
      <img src={p2} alt="Explore NPS"/>
    </div>
    <div className="nps-trading-content">
      <h2>Explore NPS: Your Path to a Secure Retirement</h2>
      <p>
        The National Pension System (NPS) is a comprehensive government-backed scheme designed to ensure financial stability in retirement. By investing in NPS, you can build a robust retirement corpus through systematic contributions and enjoy the benefits of tax advantages under Section 80C and Section 80CCD(1B).
      </p>
    </div>
  </div>
</section>




    </>
  )
}

export default NPS
