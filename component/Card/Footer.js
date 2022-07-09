/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div
        className="f-back"
        //f-back use in global css for mobile//
        style={{
          background: "url(../assets/images/catax-background-2.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: 400,
          backgroundSize: "cover",
          marginTop: "-8rem",
        }}
      ></div>
      <div
        style={{
          minHeight: "18rem",
          background: "#000",
          color: "#3e3b3b",
        }}
      >
        <div
          style={{
            padding: "40px",
            paddingBottom: "20px",
            // paddingTop:"5px",
            maxWidth: "80rem",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <div>
              <Link href={"/"}>
                <img
                  style={{
                    width: "10rem",
                    cursor: "pointer",
                    marginLeft: "-7px",
                  }}
                  src="../../public/images/healthcare.png"
                  alt="Company Logo"
                />
                {/* <p>fitness</p> */}
              </Link>
              <p
                style={{
                  color: "#f8f0f0",
                  fontSize: "17px",
                  marginTop: 2,
                  marginBottom: 10,
                }}
              >
              Fitness with Gloitel
              </p>
            </div>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#a5a5a5",
                  minWidth: 120,
                  marginTop: 30,
                }}
              >
                <span style={{ marginTop: 15 }}>
                  {/* <Link href="/about">About</Link>
                   */} About
                </span>
                <span style={{ marginTop: 15 }}>
                  {/* <Link href="/company">Company</Link> */}Company
                </span>
                <span style={{ marginTop: 15 }}>
                  {/* <Link href="/mission">Mission</Link>
                   */} Mission
                </span>
                <span style={{ marginTop: 15 }}>
                  {/* <Link href="/people">People</Link>
                   */} People
                </span>
                <span style={{ marginTop: 15 }}>
                  {/* <Link href="/influencer">Affiliate</Link>
                   */} Affiliate
                </span>
                <span style={{ marginTop: 15 }}>
                  {/* <Link href="/career">Career</Link>
                   */} Career
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#9b9b9b",
                  minWidth: 120,
                  marginTop: 30,
                }}
              >
                <span style={{ marginTop: 15 }}>
                  {/* <Link href="/pricing">Pricing</Link>
                   */} Pricing
                </span>
                {/* <span style={{ marginTop: 15 }}>
                  {" "}
                  <a
                    href="https://catax.marble.so"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Certification
                  </a>
                </span> */}
                <span style={{ marginTop: 15 }}>
                  {/* <Link href="/products">Products</Link> */}
                  Products
                </span>
                <span style={{ marginTop: 15 }}>
                  {/* <Link href="/customer">Customer</Link>
                   */} Customer
                </span>
                <span style={{ marginTop: 15 }}>
                  {/* <Link href="/professional">Professional</Link>
                   */} Professional
                </span>
                {/* <span style={{ marginTop: 15 }}>
                  {" "}
                  <a
                    href="https://catax.marble.so"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Academy
                  </a>
                </span> */}
              </div>
              {/* <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#9b9b9b",
                  minWidth: 120,
                  marginTop: 30,
                }}
              >
                <span style={{ marginTop: 15 }}>
                  <Link href="/calculator">Calculators</Link>
                </span>
                <span style={{ marginTop: 15 }}>
                  <Link href="/calculator/bitcoin-tax-calculator">
                    Bitcoin Taxes
                  </Link>
                </span>
                <span style={{ marginTop: 15 }}>
                  <Link href="/calculator/ethereum-tax-calculator">
                    Ethereum Taxes
                  </Link>
                </span>
                <span style={{ marginTop: 15 }}>
                  <Link href="/calculator/dogecoin-tax-calculator">
                    Dogecoin Taxes
                  </Link>
                </span>
                <span style={{ marginTop: 15 }}>
                  <Link href="/calculator/litecoin-tax-calculator">
                    Litecoin Taxes
                  </Link>
                </span>
                <span style={{ marginTop: 15 }}>
                  <Link href="/private-crypto-currency">
                    Private Cryptocurrency
                  </Link>
                </span>
              </div> */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#9b9b9b",
                  minWidth: 120,
                  marginTop: 30,
                }}
              >
                <span style={{ marginTop: 15 }}>
                  {/* <Link href="/terms-of-service">Terms</Link>
                   */} Terms
                </span>
                <span style={{ marginTop: 15 }}>
                  {/* <Link href="/privacy-policy">Privacy</Link>
                   */} Privacy
                </span>
                <span style={{ marginTop: 15 }}>
                  {" "}
                  {/* <Link href="/disclaimer">Disclaimer</Link>
                   */} Disclaimer
                </span>
                <span style={{ marginTop: 15 }}> Data Addendum</span>
                <span style={{ marginTop: 15 }}> GDPR</span>
                {/* <span style={{ marginTop: 15 }}>
                  {" "}
                  <a
                    href="https://cataxapp.tawk.help/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Help Centre
                  </a>
                </span> */}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#9b9b9b",
                  minWidth: 120,
                  marginTop: 30,
                }}
              >
                {/* <span style={{ marginTop: 15 }}>
                  <a
                    href="https://catax.substack.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Updates
                  </a>
                </span> */}
                {/* <span style={{ marginTop: 15 }}>
                  {" "}
                  <Link href="/blogs">Blog</Link>
                </span> */}
                {/* <span style={{ marginTop: 15 }}>
                  <a
                    href="https://roadmap.catax.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Roadmap
                  </a>
                </span> */}
                {/* <span style={{ marginTop: 15 }}>
                  <a
                    href="https://inbound.hipporello.net/desk/form/cca356e9ea29406a87f73bc2f5aa0bb6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Feedback
                  </a>
                </span> */}
                <span style={{ marginTop: 15 }}>
                  {/* <a
                    href="https://catax.statuspage.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Status
                  </a> */}
                </span>
                <span style={{ marginTop: 15 }}>
                  {/* <Link href="/contact">Contact</Link>
                   */}Contact
                </span>
                {/* <span style={{ marginTop: 15 }}>
                  <Link href="/connect">Connect</Link>
                </span> */}
              </div>
            </div>
          </div>
          {/* <div
            style={{
              borderTop: "1px solid #322f2f",
              borderBottom: "1px solid #322f2f",
              padding: "10px 0",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              alignItems: "center",
              margin: "40px 0 0",
            }}
          >
            <div
              style={{ color: "#9b9b9b", display: "flex", flexWrap: "wrap" }}
            >
              <span style={{ margin: "15px" }}>
                <Link href="/about">About</Link>
              </span>
              <span style={{ margin: "15px" }}>
                <Link href="/people">People</Link>
              </span>
              <span style={{ margin: "15px" }}>
                <Link href="/products">Products</Link>
              </span>
              <span style={{ margin: "15px" }}>
                <Link href="/career">Career</Link>
              </span>
              <span style={{ margin: "15px" }}>
                <Link href="/contact">Contact</Link>
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <a
                href="https://linkedin.com/company/cataxapp"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../assets/images/linkedin.png"
                  alt="linkedin"
                  width="40px"
                  style={{ marginRight: 20 }}
                />
              </a>
              <a
                href="https://www.instagram.com/catax.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../assets/images/instagram.png"
                  alt="instagram"
                  width="40px"
                  style={{ marginRight: 20 }}
                />
              </a>
              <a
                href="https://www.facebook.com/Catax-Simple-Crypto-Taxes-100139052460655"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../assets/images/facebook.png"
                  alt="facebook"
                  width="40px"
                  style={{ marginRight: 20 }}
                />
              </a>
              <a
                href="https://twitter.com/cataxapp"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../assets/images/twitter.png"
                  alt="twitter"
                  width="40px"
                  style={{ marginRight: 20 }}
                />
              </a>
              <a
                href="https://t.me/joinchat/YSRoL1QIqwg1NGRl"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../assets/images/telegram.png"
                  alt="trlegram"
                  width="40px"
                  style={{ marginRight: 20 }}
                />
              </a>
            </div>
          </div> */}
          <br />
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontSize: "0.8em",
              color: "#9b9b9b",
              lineHeight: 1.5,
            }}
          >
            <p>
              This site (the "Site") is owned and maintained by Block Chain
              Innovation Pvt Ltd, which is registered with Ministry of Corporate
              Affairs, India with Corporate Identification Number is (CIN)
              U72900CT2016PTC007681. Block Chain Innovation Private Limited is
              recognized as start-up by Department for Promotion of Industry and
              Internal Trade through DPIIT Certification number 'DIPP29252' with
              expiration date of 20th December, 2026.
            </p>
            <p>
              The warranties and representations expressly set forth in these
              Terms of Use are the only warranties and representations made by
              the Company with respect to the Site, and are in lieu of any and
              all other warranties, written or oral, express or implied, that
              may arise either by agreement between the Parties or by operation
              of law or otherwise, including warranties of merchantability and
              fitness for a particular purpose which are excluded to the fullest
              extent permitted by applicable laws. None of these warranties and
              representations will extend to any third person.
            </p>
            <p>
              <span data-contrast="auto">
                Through your use of Catax, you acknowledge and agree that
                information provided by the Company is simply that, information
                and, and should not be considered a substitute for legal advice,
                tax advice, audit advice, accounting advice, or brokerage advice
                under the guidance of a licensed professional. Further, the
                information provided herein should not be taken as financial
                planning or investment solicitation. No fiduciary relationship
                has been created between you and the Company.
              </span>
            </p>
          </div> */}
          {/* <div
            style={
              {
                display: "inline-flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                width: "100% ",
                paddingTop: "10px",
                textAlign: "center",
              }
            }
          >
            <div style={{ width: "14rem" }}>
              <img
              src="https://res.cloudinary.com/catax/image/upload/v1617370587/public/footer/mca-cin.png"
              style={{ width: "10rem" }}
              />
              </div>
              <div style={{ width: "14rem" }}>
              <img
              src="https://res.cloudinary.com/catax/image/upload/v1617354283/public/footer/dpiit-india.png"
              style={{ width: "10rem" }}
              />
              </div>
              <div style={{ width: "14rem" }}>
              <a
              href={
                "https://www.startupindia.gov.in/blockchainverify/certify.dippno.DIPP29252.html"
              }
              target="_blank"
              >
              <img
              src="https://res.cloudinary.com/catax/image/upload/v1617370587/public/footer/startup-india.png"
              style={{ width: "14rem" }}
              />
              </a>
              </div>
              <div style={{ width: "10rem" }}>
              <a href="https://36inc.in" target="_blank">
              <img
              src="https://res.cloudinary.com/catax/image/upload/v1617370586/public/footer/36Inc-Incubation-Centre.png"
              style={{ width: "10rem" }}
              />
              </a>
              </div>
              <div style={{ width: "14rem" }}>
              <img
              src="https://res.cloudinary.com/catax/image/upload/v1617370587/public/footer/start-up-chhattisgarh.png"
              style={{ width: "10rem" }}
              />
            </div>
          </div> */}
          {/* <div className="payments-img">
            <img
              src="../assets/images/payments.png"
              style={{ marginTop: 20 }}
            />
          </div> */}
        </div>
        <div style={{ borderBottom: "1px solid #3e3b3b" }}></div>
        <p
          style={{
            padding: "0.8rem",
            textAlign: "center",
            fontWeight: "bold",
            margin: 0,
            fontSize: "0.8rem",
            color: "#9b9b9b",
          }}
        >
          Made with &hearts; in India. Gloitel Consultant.
        </p>
      </div>
    </>
  );
}
