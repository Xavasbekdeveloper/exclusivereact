import React, { memo } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/icons/footerlogo.svg";
import qrCode from "../../assets/images/Qr Code.png";
import googlePley from "../../assets/images/GooglePlay.png";
import appStore from "../../assets/images/AppStore.png";
import { LuSendHorizonal } from "react-icons/lu";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__first-item footer__item">
          <Link to={"/"} href="index.html">
            <img src={footerLogo} alt="img" />
          </Link>
          <h3 className="footer__item__title">Subscribe</h3>
          <p className="footer__item__text">Get 10% off your first order</p>
          <div className="footer__first-item__input-box">
            <input
              className="footer__first-item__input"
              required
              type="email"
              placeholder="Enter your email"
            />
            <button className="footer__first-item__btn">
              <LuSendHorizonal />
            </button>
          </div>
        </div>
        <div className="footer__second-item footer__item">
          <h3 className="footer__item__title">Support</h3>
          <div className="footer__item__list">
            <p className="footer__item__text">
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </p>
            <Link className="footer__item__text" href="#">
              exclusive@gmail.com
            </Link>
            <Link className="footer__item__text" href="+88015-88888-9999">
              +88015-88888-9999
            </Link>
          </div>
        </div>
        <div className="footer__third-item footer__item">
          <h3 className="footer__item__title">Account</h3>
          <ul className="footer__item__list">
            <li>
              <Link className="footer__item__text" href="#">
                My Account
              </Link>
            </li>
            <li>
              <Link className="footer__item__text" href="#">
                Login / Register
              </Link>
            </li>
            <li>
              <Link className="footer__item__text" href="#">
                Cart
              </Link>
            </li>
            <li>
              <Link className="footer__item__text" href="#">
                Wishlist
              </Link>
            </li>
            <li>
              <Link className="footer__item__text" href="#">
                Shop
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__four-item footer__item">
          <h3 className="footer__item__title">Quick Link</h3>
          <ul className="footer__item__list">
            <li>
              <Link className="footer__item__text" href="#">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="footer__item__text" href="#">
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link className="footer__item__text" href="#">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="footer__item__text" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__five-item footer__item">
          <h3 className="footer__item__title">Download App</h3>

          <div className="footer__five-item__list">
            <p className="footer__five-item__text">
              Save $3 with App New User Only
            </p>
            <div className="footer__five-item__download__links">
              <Link href="#">
                <img src={qrCode} alt="img" />
              </Link>
              <div className="footer__five-item__download__link">
                <Link href="#">
                  <img src={googlePley} alt="img" />
                </Link>
                <Link href="#">
                  <img src={appStore} alt="img" />
                </Link>
              </div>
            </div>
            <div className="footer__five-item__links">
              <Link href="#">
                <FaFacebookF />
              </Link>
              <Link href="#">
                <FaTwitter />
              </Link>
              <Link href="#">
                <FaInstagram />
              </Link>
              <Link href="#">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <div className="footer__bottom__box">
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
