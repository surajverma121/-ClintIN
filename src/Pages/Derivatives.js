import React from 'react'
import img1 from '../assets/Images/derivatives.jpg'
import './Derivatives.css';
import p1 from '../assets/Images/p5.jpg'
import p2 from '../assets/Images/p2.jpg'
import p3 from '../assets/Images/p3.jpg'
import p4 from '../assets/Images/p4.jpg'

const Derivatives = () => {
  return (
    <>
        <header className="derivatives-trading-header">
        <h1>"Derivatives Decoded: Elevate Your Investment Game with Precision"</h1>
      </header>
        <div className="derivatives-trading-container">
        <div className="derivatives-example">
        <img 
          src={img1}
          alt="derivatives Trading Background" 
          className="forex-background" 
        />
        <div className="forex-text">
          <h1 className="wow slideInDown" data-wow-offset="50" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'slideInDown', color: 'white' }}>
          What is Derivatives?
          </h1>
          <p>
          A derivative is a financial instrument that drives its value from another asset. Similar to an annuity, it is a contract between two parties. In this case, though, the contract is an agreement to sell an asset at a specific price in the future. If the investor agrees to purchase the derivative then they are betting that the value won’t decrease.
          </p>
          <p>
          Derivatives are considered to be a more advanced investment and are typically purchased by institutional investors.
        </p>
        </div>
      </div>
      </div>
     
      <section className="derivatives-trading-intro">
        <h2></h2>
        <p>
         
        </p>
        
      </section>

      <section className="derivatives-trading-benefits-intro">
      <h2>The three most common types of derivatives are:</h2>
      </section>
      <section className="derivatives-trading-benefits">
      
        <div className="derivatives-benefit-card">
          
          <h2>•	Options Contracts: </h2>
          <p>
          The options contract gives the investor the opportunity to buy or sell an asset at a specific price at a specific time in the future. Call options provide you the opportunity to buy the asset at that price and put options allow you to sell that asset.
          </p>
        </div>

        <div className="derivatives-benefit-card">
          <h2>•	Futures Contracts: </h2>
          <p>
          Futures are agreements to buy or sell an asset at a specified future date and price, often used for hedging or speculating on price movements.
          </p>
        </div>

        <div className="derivatives-benefit-card">
          <h2>•	Swaps: </h2>
          <p>
          Swaps involve exchanging cash flows or financial instruments between parties, such as interest rate swaps or currency swaps, to manage risk or achieve specific financial objectives.
          </p>
        </div>

       
      </section>
     
      <section className="home-trading">
  <div className="home-trading-card">
    <div className="home-trading-image">
      <img src={p1} alt="Trading Image"/>
    </div>
    <div className="home-trading-content">
      <h2>How you can make money: </h2>
      <p>
      You can make money from derivatives by capitalizing on price fluctuations and leveraging positions. For instance, if you agree to buy copper at $1,000 per unit with a futures contract and the market price rises to $2,000 at expiration, you essentially double your investment. This leverage amplifies potential returns when the market moves favorably, but also increases risk. By using derivatives to speculate on price movements, hedge existing positions, or generate income through premium collection, investors can strategically profit from various market scenarios. However, careful risk management is crucial to mitigate potential losses.
      </p>
   
    </div>
  </div>


</section>
    </>
  )
}

export default Derivatives
