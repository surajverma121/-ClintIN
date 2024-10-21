import React from 'react'
import './Partner.css'
import img1 from '../assets/Images/R.jpg';


const Partner = () => {
  return (
    <section className="partners-section">
  <h2 className="trusted-by-heading">Trusted by</h2>
  <p className="authorized-partners-text">We are authorized partners of:</p>
  <div className="partners-logos">
    <a href="https://www.kotaksecurities.com/landing-page/franchisee/open-demat-account-partner-jaya-raj-one-neo" target="_blank" rel="noopener noreferrer">
      <img src={img1} alt="Angel One"/>
    </a>
  
  </div>
</section>
  )
}

export default Partner

