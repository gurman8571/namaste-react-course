import React from "react";
import "../../app.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-8 pb-6">
      <div className="flex lg:flex-row md:flex-row flex-col">
        <div className="lg:w-1/5 md:w-1/5 w-full lg:mx-8 px-8">
          {" "}
          <p className="font-bold uppercase text-sm " style={{ color: "gray" }}>
            Company
          </p>
          <ul className=" mt-3">
            <li className="b-Hy9">
              <a className="_3TjLz" href="/about" alt="" target="_blank">
                About us
              </a>
            </li>
            <li className="b-Hy9">
              <a className="_3TjLz" href="/team" alt="" target="_blank">
                Team
              </a>
            </li>
            <li className="b-Hy9">
              <a className="_3TjLz" href="/careers" alt="" target="_blank">
                Careers
              </a>
            </li>
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="https://blog.swiggy.com"
                rel="nofollow noopener"
                alt=""
                target="_blank"
              >
                Swiggy Blog
              </a>
            </li>
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="/bug-bounty"
                rel="nofollow noopener"
                alt=""
                target="_blank"
              >
                Bug Bounty
              </a>
            </li>
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="/swiggy-super"
                rel="nofollow noopener"
                alt=""
                target="_blank"
              >
                Swiggy One
              </a>
            </li>
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="https://corporate.swiggy.com"
                rel="nofollow noopener"
                alt=""
                target="_blank"
              >
                Swiggy Corporate
              </a>
            </li>
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="/swiggy-instamart"
                rel="nofollow noopener"
                alt=""
                target="_blank"
              >
                Swiggy Instamart
              </a>
            </li>
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="/swiggy-genie"
                rel="nofollow noopener"
                alt=""
                target="_blank"
              >
                Swiggy Genie
              </a>
            </li>
          </ul>
        </div>
        <div className=" w-full md:w-1/4 lg:w-1/4 lg:mx-8 px-8">
          {" "}
          <p className="font-bold uppercase text-sm " style={{ color: "gray" }}>
            Contact
          </p>
          <ul className="_2gbMt">
            <li className="b-Hy9">
              <a className="_3TjLz" href="/support" alt="Help & Support">
                Help &amp; Support
              </a>
            </li>
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="https://partner-with-us.swiggy.com/onboard#/swiggy"
                rel="nofollow noopener noreferrer"
                alt=""
                target="_blank"
              >
                Partner with us
              </a>
            </li>
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="https://ride.swiggy.com/"
                rel="nofollow noopener"
                alt=""
                target="_blank"
              >
                Ride with us
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:w-2/4 md:w-2/4 w-full lg:mx-8 px-8">
          {" "}
          <p className="font-bold uppercase text-sm " style={{ color: "gray" }}>
            Contact
          </p>
          <ul className="_2gbMt">
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="/terms-and-conditions"
                alt=""
                target="_blank"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="/refund-policy"
                alt=""
                target="_blank"
              >
                Refund &amp; Cancellation
              </a>
            </li>
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="/privacy-policy"
                alt=""
                target="_blank"
              >
                Privacy Policy
              </a>
            </li>
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="/cookie-policy"
                alt=""
                target="_blank"
              >
                Cookie Policy
              </a>
            </li>
            <li className="b-Hy9">
              <a className="_3TjLz" href="/offer-terms" alt="" target="_blank">
                Offer Terms
              </a>
            </li>
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="/beware-of-phishing-and-fraud"
                alt=""
                target="_blank"
              >
                Phishing &amp; Fraud
              </a>
            </li>
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="/tnc-corporate-sm"
                alt=""
                target="_blank"
              >
                Corporate – Swiggy Money Codes Terms and Conditions
              </a>
            </li>
            <li className="b-Hy9">
              <a
                className="_3TjLz"
                href="/tnc-corporate-discount"
                alt=""
                target="_blank"
              >
                Corporate - Swiggy Discount Voucher Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/4 md:w-1/4 w-full m-8">
          <div className="flex flex-column">
            <div className="px-2">
              <a
                href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
                rel="nofollow noopener"
                alt=""
                target="_blank"
                className="my-4"
                data-testid="ios-appstore"
              >
                <img
                  alt=""
                  className="lg:my-6 my-4"
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
                rel="nofollow noopener"
                alt=""
                target="_blank"
                data-testid="android-playstore"
              >
                <img
                  alt=""
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="lg:mx-12  md:mx-8 font-light my-8" />

      <div className="flex justify-between lg:mx-12 md:mx-8 ">
        <div className="">
          {" "}
          <Link to="/">
            <img
              className=" mx-4 w-24 lg:w-48 md:w-48"
             
              alt=""
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
            />
          </Link>
        </div>
        <div className="  lg:text-xl md:text-xl font-bold">© 2023 Swiggy</div>

        <div className="   flex  flex-row ">
          <a
            className="px-2"
            href="https://www.facebook.com/swiggy.in"
            rel="nofollow noopener"
            alt="facebook"
            target="_blank"
          >
            <img
              className
              width={24}
              height={24}
              alt=""
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
            />
          </a>
          <a
          className="px-2"
            href="https://pinterest.com/swiggyindia"
            rel="nofollow noopener"
            alt="pintrest"
            target="_blank"
          >
            <img
              className
              width={24}
              height={24}
              alt=""
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
            />
          </a>
          <a
          className="px-2"
            href="https://instagram.com/swiggyindia/"
            rel="nofollow noopener"
            alt="instagram"
            target="_blank"
          >
            <img
              className
              width={24}
              height={24}
              alt=""
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
            />
          </a>
          <a
            className="_1Az3W"
            href="https://twitter.com/swiggy"
            rel="nofollow noopener"
            alt="twitter"
            target="_blank"
          >
            <img
              className
              width={24}
              height={24}
              alt=""
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
