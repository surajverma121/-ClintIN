import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DematAccount from './DematAccount';
import './Navbar.css';
import logo from '../assets/Images/logo1.png';

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false); // Add state to manage Navbar expansion

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closeNavbar = () => setExpanded(false); // Function to close Navbar

  return (
    <>
      <Navbar className='header1' expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={closeNavbar}>
            <img src={logo} alt="" className="navbar-logo" />
            &nbsp;
            <strong className="navbar-title"> supertrade &<br/>Securities</strong>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/home" style={{color: '#0056b3'}} onClick={closeNavbar}><strong>Home</strong></Nav.Link>

              {/* Dropdown for Services */}
              <li className="dropdown">
                <Link className="dropdown-toggle" onClick={(e) => e.preventDefault()}>
                  <strong>Services</strong>
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/stocks" onClick={closeNavbar}>Stocks</Link></li>
                  <li><Link className="dropdown-item" to="/services/portfolio-management" onClick={closeNavbar}>Bonds</Link></li>
                  <li><Link className="dropdown-item" to="/services/mutual-fund" onClick={closeNavbar}>Mutual Funds</Link></li>
                  <li><Link className="dropdown-item" to="/services/algo" onClick={closeNavbar}>Algo-Trading</Link></li>
                  <li><Link className="dropdown-item" to="/services/exchange-fund" onClick={closeNavbar}>Exchange-Traded Funds</Link></li>
                  <li><Link className="dropdown-item" to="/services/retirement-plans" onClick={closeNavbar}>Retirement Plans</Link></li>
                  <li><Link className="dropdown-item" to="/services/annuities" onClick={closeNavbar}>Annuities</Link></li>
                  <li><Link className="dropdown-item" to="/services/ipos" onClick={closeNavbar}>IPOs</Link></li>
                  <li><Link className="dropdown-item" to="/services/commodities" onClick={closeNavbar}>Commodities</Link></li>
                  <li><Link className="dropdown-item" to="/services/derivatives" onClick={closeNavbar}>Derivatives</Link></li>
                </ul>
              </li>

              {/* Dropdown for Other Services */}
              <li className="dropdown">
                <Link className="dropdown-toggle" onClick={(e) => e.preventDefault()}>
                  <strong>Other Services</strong>
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/option-trading" onClick={closeNavbar}>Option-Trading</Link></li>
                  <li><Link className="dropdown-item" to="/ppf" onClick={closeNavbar}>PPF</Link></li>
                  <li><Link className="dropdown-item" to="/ulips" onClick={closeNavbar}>ULIPS</Link></li>
                  <li><Link className="dropdown-item" to="/citizen-saving-scheme" onClick={closeNavbar}>Citizen Saving Scheme</Link></li>
                  <li><Link className="dropdown-item" to="/cryptocurrency" onClick={closeNavbar}>CryptoCurrency</Link></li>
                  <li><Link className="dropdown-item" to="/forex" onClick={closeNavbar}>Forex-Trading</Link></li>
                  <li><Link className="dropdown-item" to="/indices-trading" onClick={closeNavbar}>Indices-Trading</Link></li>
                  <li><Link className="dropdown-item" to="/certificate-of-deposit" onClick={closeNavbar}>Certificate of Deposit</Link></li>
                  <li><Link className="dropdown-item" to="/hybrid-investment" onClick={closeNavbar}>Hybrid Investment</Link></li>
                  <li><Link className="dropdown-item" to="/nps" onClick={closeNavbar}>NPS</Link></li>
                </ul>
              </li>

              <Nav.Link as={Link} to="/aboutus" style={{color: '#0056b3'}} onClick={closeNavbar}><strong>About us</strong></Nav.Link>
              <Nav className="ml-auto">
           
         
             <Button 
               variant="primary" 
               onClick={() => window.open('https://razorpay.me/@supertrade3919', '_blank')} 
               className="d-inline-block">
               Pay Now
             </Button>
           
           
                       </Nav>
              
              <Nav.Link as={Link} to="/contact" style={{color: '#0056b3'}} onClick={closeNavbar}><strong>Contact Us</strong></Nav.Link>
            </Nav>

            <Nav className="ml-auto">
           
<Button 
  variant="primary" 
  onClick={() => window.open('https://www.kotaksecurities.com/landing-page/franchisee/open-demat-account-partner-jaya-raj-one-neo', '_blank')}
  className="d-inline-block">
  Open Demat Account
</Button>
  {/* <Button 
    variant="primary" 
    onClick={() => window.open('https://razorpay.me/@supertrade3919', '_blank')} 
    className="d-inline-block">
    Pay with Razorpay
  </Button> */}


            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />

        </Container>
      </Navbar>
      <DematAccount show={show} handleClose={handleClose} />
    </>
  );
};

export default MyNavbar;
