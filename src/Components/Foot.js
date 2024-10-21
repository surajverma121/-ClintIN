

import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo1 from '../assets/Images/logo1.png';

export default function Footer() {
  return (
    <MDBFooter style={{ backgroundColor: '#2c3e50', color: 'white' }} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{ color: 'white' }}>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4' style={{ color: 'white' }}>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4' style={{ color: 'white' }}>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4' style={{ color: 'white' }}>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4' style={{ color: 'white' }}>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4' style={{ color: 'white' }}>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4' style={{ color: 'white' }}>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'white' }}>
                    <img src={logo1} alt='>Supertrade & Securities' className='logo-img' width={80} />

                SuperTrade & Securities
              </h6>
              <p style={{ color: 'white' }}>
              Investment in securities market are subject to market risks. Read all the related documents carefully before investing. The securities quoted are for illustration only and are not recommendatory.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'white' }}>Services</h6>
              <p>
                <a href='#!' style={{ color: 'white' }}>
                  Registration Special
                </a>
              </p>
              <p>
                <a href='#!' style={{ color: 'white' }}>
                  Index Options Regular
                </a>
              </p>
              <p>
                <a href='#!' style={{ color: 'white' }}>
                  Index Options Combo
                </a>
              </p>
              <p>
                <a href='#!'  style={{ color: 'white' }}>
                   Stock Options Special
                </a>
              </p>
              <p>
                <a href='#!'  style={{ color: 'white' }}>
                  Opstion Special Combo
                </a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
  <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'white' }}>Useful links</h6>
  <p>
    <a href='#!' c style={{ color: 'white' }}>
      Our Trading Rules 
    </a>
  </p>
  <p>
    <a href='#!' style={{ color: 'white' }}>
      Disclource Document 
    </a>
  </p>
  <p>
    <a href='#!' style={{ color: 'white' }}>
      Term & Conditions.
    </a>
  </p>
  <p>
    <a href='#!' style={{ color: 'white' }}>
      Term & Conditions.
    </a>
  </p>
  <p>
    <a href='#!' style={{ color: 'white' }}>
      Privacy Policy.
    </a>
  </p>

</MDBCol>


            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'white' }}>Contact</h6>
              <p style={{ color: 'white' }}>
                <MDBIcon icon="home" className="me-2" />
                India
              </p>
              <p style={{ color: 'white' }}>
  <MDBIcon icon="envelope" className="me-3" />
  <a href="mailto:Investment@supertradesecurities.com" style={{ color: 'white', textDecoration: 'none' }}>
    Investment@supertradesecurities.com
  </a>
</p>
<p style={{ color: 'white' }}>
  <MDBIcon icon="phone" className="me-3" />
  <a href="tel:+916232207552" style={{ color: 'white', textDecoration: 'none' }}>
    +91 6232207552
  </a>
</p>
<p style={{ color: 'white' }}>
  <MDBIcon icon="print" className="me-3" />
  <a href="tel:+916232207552" style={{ color: 'white', textDecoration: 'none' }}>
    +91 6232207552
  </a>
</p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: 'white' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://supertradesecurities.com/' style={{ color: 'white' }}>
        supertradesecurities.com
        </a>
      </div>
    </MDBFooter>
  );
}
