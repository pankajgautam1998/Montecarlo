import {
  ArrowForward,
  Facebook,
  Instagram,
  MailOutline,
  Twitter,
} from "@mui/icons-material";
import { TextField } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="px-[8rem] bg-blue-900 text-white h-screen pt-5 cursor-pointer">
        <div className="flex justify-between">
          <div>
            <div>COLLECTIONS</div>
            <div className="*:pt-5">
              <p>Men</p>
              <p>Women</p>
              <p>Kids</p>
              <p>Activewear</p>
              <p>Winter Collection</p>
              <p>Summer Collection</p>
              <p>Home Furnishing</p>
            </div>
          </div>
          <div>
            <div>INFORMATION</div>
            <div className="*:pt-5">
              <p>About Us</p>
              <p>Contact Us</p>
              <p>FAQs</p>
              <p>Gift Card</p>
              <p>Investor Relations</p>
              <p>Return Request</p>
            </div>
          </div>
          <div>
            <div>QUICK LINKS</div>
            <div className="*:pt-5">
              <p>Terms & Conditions</p>
              <p>Payment Terms & Conditions</p>
              <p>Gift Cards Terms & Conditions</p>
              <p>Shipping & Return Policy</p>
              <p>Privacy Policy</p>
              <p>SBI Offer T&C</p>
            </div>
            <p className="pt-[3rem]">
              <div>FOLLOW US</div>
              <div className="flex  pt-5 gap-5">
                <div>
                  <Facebook />
                </div>
                <div>
                  <Instagram />
                </div>
                <div>
                  <Twitter />
                </div>
              </div>
            </p>
          </div>
          <div>
            <div>SUBSCRIBE OUR NEWSLETTER</div>
            <div className="*:pt-5">
              <div>
                <TextField
                  label="Your e-mail"
                  size="small"
                  InputProps={{
                    startAdornment: <MailOutline />,
                    endAdornment: <ArrowForward />,
                  }}
                />
              </div>
              <p>You can unsubscribe at any time, no hard feelings</p>
              <p>EXPERIENCE THE FUTURE WITH MONTECARLO APP</p>
              <div className="flex gap-5">
                <div>
                  <img
                    src="https://www.montecarlo.in/cdn/shop/files/google-play11_small.svg?v=1693242677"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://www.montecarlo.in/cdn/shop/files/app-store11_small.svg?v=1693242769"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <img
                    src="https://www.montecarlo.in/cdn/shop/files/image_13_d7895999-6d4c-42a6-93bc-4fbad1ef35a3_small.png?v=1687464527"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://www.montecarlo.in/cdn/shop/files/image_14_small.png?v=1687464563"
                    alt=""
                  />
                </div>
              </div>
              <p>Scan the QR code & download the app</p>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <hr />
        </div>

        <p className="flex justify-center pt-5 ">
          All rights reserved © Monte Carlo 2023
        </p>
      </div>
    </>
  );
};

export default Footer;
