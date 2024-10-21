import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import PullToRefresh from "react-simple-pull-to-refresh";

const Social = () => {
  return (
    <PullToRefresh>
      <div
        style={{
          backgroundColor: "#000",
          padding: "0px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <div className="row" style={{ margin: "0" }}>
          <div
            className="col-8 col-md-3"
            style={{
              padding: "2px",
              textAlign: "left",
            }}
          >
            <p className="details" style={{ margin: "0px" }}>
              Email:{"investment@supertradesecurities.com"}
              <a
                href="investment@supertradesecurities.com"
                style={{ color: "#fff", textDecoration: "none" }}
              >
              
              </a>
            </p>
          </div>
          <div
            className="col-12 col-md-4"
            style={{
              padding: "5px",
              textAlign: "left",
            }}
          >
            <p className="details" style={{ margin: "0" }}>
              Mobile No:{" "}
              <a
                href="tel:+6232207552"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                +91 6232207552
              </a>
            </p>
          </div>
          <div className="col-12 col-md-5" style={{ padding: "4px" }}>
            <div
              className="social-icons"
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <a
                // href="https://www.facebook.com/profile.php?id=61562430803825"
                style={{ color: "#fff" }}
              >
                <FontAwesomeIcon icon={faFacebookF} size="md" />
              </a>
              <a
                // href="https://www.instagram.com/blackgrapes_ias/"
                style={{ color: "#fff" }}
              >
                <FontAwesomeIcon icon={faInstagram} size="md" />
              </a>
              <a
                // href="https://www.linkedin.com/in/black-grapes-investments-and-securities/"
                style={{ color: "#fff" }}
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="md" />
              </a>
              <a href="" style={{ color: "#fff" }}>
                <FontAwesomeIcon icon={faTwitter} size="md" />
              </a>
              <a
                // href="https://www.youtube.com/@BlackGrapesInvestments"
                style={{ color: "#fff" }}
              >
                <FontAwesomeIcon icon={faYoutube} size="md" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .details {
            display: none;
          }
          .social-icons {
          padding:0px;
            justify-content: center;
            align-items: center;
          }
          .col-12.col-md-5 {
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </PullToRefresh>
  );
};

export default Social;
